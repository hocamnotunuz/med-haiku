// National Railways: screens, buttons, touch and mouse input, and the game loop.
(function () {
  "use strict";
  const NR = window.NR;
  const T = NR.TUNING;
  const $ = (id) => document.getElementById(id);
  const app = $("app");
  const canvas = $("map");
  const ctx = canvas.getContext("2d");
  const grab = window.matchMedia("(pointer: coarse)").matches ? 14 : 8; // bigger touch targets on phones

  const ICONS = {
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>',
  };
  const SHAPES = {
    circle: '<circle cx="6" cy="6" r="4.5"/>',
    square: '<rect x="1.8" y="1.8" width="8.4" height="8.4"/>',
    triangle: '<path d="M6 1.2 11 10.5H1z"/>',
    diamond: '<path d="M6 .9 11.1 6 6 11.1.9 6z"/>',
    half: '<path d="M.9 9.6a5.1 5.1 0 0 1 10.2 0z"/>',
    // five-pointed star (tourists)
    star: (() => {
      let d = "";
      for (let i = 0; i < 10; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 5;
        const k = i % 2 ? 2.4 : 5.6;
        d += `${i ? "L" : "M"}${(6 + Math.cos(a) * k).toFixed(2)} ${(6.4 + Math.sin(a) * k).toFixed(2)}`;
      }
      return `<path d="${d}Z"/>`;
    })(),
  };

  // ---------- Saved choices and best scores (kept in this browser only) ----------
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(key);
        return v ? JSON.parse(v) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        /* storage blocked: the game still works */
      }
    },
  };
  const settings = Object.assign({ mode: "endless", style: "type", geo: "gentle" }, store.get("nr-settings", {}));
  const best = store.get("nr-best", {});

  // ---------- What is happening right now ----------
  let game = null;
  let paused = false;
  let fast = false;
  let screen = null; // open screen: "start" | "week" | "level" | "over" | null while playing
  const queue = []; // screens waiting to open after the current one
  let levelSave = null; // copy of the game at the start of the current level
  let draft = null; // the line being drawn right now
  let pointer = null;
  let openLineId = null;
  let openCountyId = null; // county shown in the county panel
  let cityKey = null; // the city map being shown (e.g. "LA"), or null for the state map
  let cityMode = "tram"; // kind of line to build on city maps
  let failCityStop = null; // the city stop that overflowed, if any
  let failAt = null;
  const fx = [];
  NR.debug = { get game() { return game; } };

  // ---------- Small helpers ----------
  const shown = {};
  function setText(id, value) {
    const v = String(value);
    if (shown[id] !== v) {
      shown[id] = v;
      $(id).textContent = v;
    }
  }
  const lineName = (c) => `${NR.LINE_NAMES[c]} Line`;
  const clock = (sec) => `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, "0")}`;
  // "1 county", "10 counties", "3 days"
  const plural = (n, word) => {
    if (n === 1) return `${n} ${word}`;
    const w = word.replace(/([^aeiou])y$/, "$1ie"); // county -> countie(s)
    return `${n} ${w}${/(s|x|ch|sh)$/.test(w) ? "es" : "s"}`; // stretch -> stretches
  };

  let toastTimer = 0;
  let lastToast = "";
  let lastToastAt = 0;
  function toast(msg) {
    const now = performance.now();
    if (msg === lastToast && now - lastToastAt < 2500) return;
    lastToast = msg;
    lastToastAt = now;
    const el = $("toast");
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (el.hidden = true), 3200);
  }

  function button(label, cls, onClick) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = cls;
    b.textContent = label;
    b.addEventListener("click", onClick);
    return b;
  }

  // ---------- Screens ----------
  function show(name) {
    screen = name;
    ["start", "week", "level", "over"].forEach((n) => ($("screen-" + n).hidden = n !== name));
    if (name) {
      closeLinePanel();
      closeCountyPanel();
      closeContracts();
      closeCityPanel();
      closeBudgetPanel();
      draft = null;
      const first = $("screen-" + name).querySelector("button:not([hidden])");
      if (first) first.focus({ preventScroll: true });
    }
  }
  function next() {
    const job = queue.shift();
    if (job) job();
    else show(null);
  }
  function enqueue(job) {
    if (screen) queue.push(job);
    else job();
  }

  function bestKey(mode, style) {
    return `${mode}-${style}`;
  }
  function checkedValue(name) {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : null;
  }
  function updateBestLine() {
    const mode = checkedValue("mode") || settings.mode;
    const style = checkedValue("style") || settings.style;
    const b = best[bestKey(mode, style)];
    $("best-line").textContent = b ? `Your best with these settings: ${plural(b, "passenger")}.` : "";
  }

  function openStart() {
    show("start");
    $("btn-resume").hidden = !(game && !game.over);
    const mode = document.querySelector(`input[name="mode"][value="${settings.mode}"]`);
    const style = document.querySelector(`input[name="style"][value="${settings.style}"]`);
    const geo = document.querySelector(`input[name="geo"][value="${settings.geo}"]`);
    if (mode) mode.checked = true;
    if (style) style.checked = true;
    if (geo) geo.checked = true;
    updateBestLine();
  }

  function startGame() {
    settings.mode = checkedValue("mode") || "endless";
    settings.style = checkedValue("style") || "type";
    settings.geo = checkedValue("geo") || "gentle";
    store.set("nr-settings", settings);
    leaveCity();
    game = NR.newGame(settings.mode, settings.style, settings.geo);
    levelSave = NR.save(game);
    NR.resetCamera();
    queue.length = 0;
    fx.length = 0;
    setPaused(false);
    renderLegend();
    show(null);
    toast("Drag from Los Angeles to another city to lay your first track.");
  }

  function openWeek(week) {
    NR.weekBonus(game);
    show("week");
    $("week-eyebrow").textContent = `Week ${week + 1}`;
    const lw = game.lastWeek;
    $("week-summary").textContent = lw
      ? `Last week you earned ${NR.money(lw.income)} in fares and paid ${NR.money(lw.upkeep)} to run your trains.`
      : "";
    const fresh = Object.values(NR.TRAIN_TYPES).filter((t) => t.unlockWeek === week);
    $("week-news").hidden = !fresh.length;
    $("week-news").textContent = fresh.map((t) => `New: ${t.name} trains are now available. ${t.about}`).join(" ");
    const list = $("upgrade-list");
    list.textContent = "";
    NR.upgradeChoices(game).forEach((key) => {
      const u = NR.UPGRADES[key];
      const b = button("", "upgrade", () => {
        u.apply(game);
        next();
      });
      const title = document.createElement("span");
      title.className = "upgrade-title";
      title.textContent = u.title;
      const text = document.createElement("span");
      text.className = "upgrade-text";
      text.textContent = u.text;
      b.append(title, text);
      list.appendChild(b);
    });
    list.querySelector("button").focus({ preventScroll: true });
  }

  function openLevel() {
    const lv = NR.LEVELS[game.level];
    const nextLv = NR.LEVELS[game.level + 1];
    show("level");
    $("level-eyebrow").textContent = `Level ${game.level + 1} complete`;
    const list = $("level-cities");
    list.textContent = "";
    if (nextLv) {
      $("level-title").textContent = `${lv.name} is connected`;
      $("level-text").textContent =
        `You finished every goal on the checklist and earned a ${NR.money(T.levelReward)} bonus. ` +
        `Next up: ${nextLv.name}, where ${plural(NR.CITIES.filter((c) => nextLv.areas.includes(c.level)).length, "county")} can now be unlocked. ` +
        "Your new checklist:";
      nextLv.goals.forEach((g) => {
        const li = document.createElement("li");
        li.textContent = NR.describeGoal(Object.assign({ target: 1 }, g));
        list.appendChild(li);
      });
      $("btn-level-next").textContent = `Start level ${game.level + 2}`;
    } else {
      $("level-title").textContent = "All of California is connected";
      $("level-text").textContent =
        `You beat every level with ${plural(game.delivered, "passenger")} delivered. ` +
        "Nevada, Arizona and Oregon are now open, each with a budget of its own. " +
        "The game carries on in Endless mode, so keep your network running as long as you can.";
      $("btn-level-next").textContent = "Keep playing";
    }
  }

  function recordBest() {
    const key = bestKey(game.mode, game.style);
    if (game.delivered > (best[key] || 0)) {
      best[key] = game.delivered;
      store.set("nr-best", best);
    }
  }

  function openOver(kind, at, cityStop) {
    failAt = at || null;
    failCityStop = cityStop || null;
    const wasLevels = game.mode === "levels";
    recordBest();
    show("over");
    const name = cityStop ? `${NR.cityStop(at, cityStop).name} (${NR.METROS[at].name})` : at ? NR.cityById[at].name : "";
    const weeks = Math.min(Math.floor(game.time / T.weekLength) + 1, game.mode === "timed" ? T.timedWeeks : Infinity);
    const top = best[bestKey(game.mode, game.style)] || 0;
    const actions = $("over-actions");
    actions.textContent = "";
    if (kind === "time") {
      $("over-eyebrow").textContent = "Time's up";
      $("over-title").textContent = `${plural(game.delivered, "passenger")} delivered`;
      $("over-text").textContent = `Your network ran for ${T.timedWeeks} weeks. Best Timed score with these settings: ${top}.`;
    } else if (wasLevels) {
      $("over-eyebrow").textContent = `Level ${game.level + 1} failed`;
      $("over-title").textContent = `${name} overflowed`;
      $("over-text").textContent =
        `Too many passengers were waiting in ${name}. Try this level again from its start, ` +
        "or keep your network and carry on in Endless mode.";
    } else {
      $("over-eyebrow").textContent = "Game over";
      $("over-title").textContent = `${name} overflowed`;
      $("over-text").textContent =
        `Too many passengers were waiting in ${name}. You delivered ${plural(game.delivered, "passenger")} ` +
        `in ${plural(weeks, "week")}, plus ${plural(Object.values(game.cargoDelivered).reduce((a, b) => a + b, 0), "load")} of cargo. ` +
        `Your best with these settings: ${top}.`;
    }
    if (wasLevels && kind !== "time") {
      actions.append(
        button(`Retry level ${game.level + 1}`, "btn btn-primary", () => {
          game = NR.load(levelSave);
          queue.length = 0;
          setPaused(false);
          show(null);
        }),
        button("Continue in Endless", "btn", () => {
          if (failCityStop) {
            // A city stop overflowed: clear it and calm the whole city down.
            const c = game.cities[failAt];
            c.stations.forEach((x) => (x.crowd = 0));
            c.stations.find((x) => x.id === failCityStop).waiting = [];
            NR.continueEndless(game, null);
          } else NR.continueEndless(game, failAt);
          queue.length = 0;
          setPaused(false);
          show(null);
          toast(`Endless mode: the crowd in ${name} has been cleared. Keep going as long as you can.`);
        })
      );
    } else {
      actions.append(button("Play again", "btn btn-primary", startGame));
    }
    actions.append(button("Main menu", "btn", openStart));
    actions.querySelector("button").focus({ preventScroll: true });
  }

  function handleEvents(now) {
    const events = NR.runtime.events.splice(0);
    for (const ev of events) {
      if (ev.type === "deliver") fx.push({ kind: "deliver", at: ev.at, t0: now });
      else if (ev.type === "city") {
        fx.push({ kind: "city", at: ev.id, t0: now });
        toast(`${NR.cityById[ev.id].name} joined the map.`);
      } else if (ev.type === "county") {
        const main = NR.mainStation[ev.id];
        const name = NR.countyById[ev.id].name;
        fx.push({ kind: "city", at: main.id, t0: now });
        toast(ev.free ? `Goal reached: ${name} unlocked for free! ${main.name} station is open.` : `${name} unlocked. ${main.name} station is open.`);
      } else if (ev.type === "headHired") {
        toast(`Head of transportation hired for ${NR.METROS[ev.key].name} (${NR.money(ev.fee)}). Keep the city running for ${plural(T.headSettleWeeks, "week")} while they settle in.`);
      } else if (ev.type === "headTakesOver") {
        toast(`The head of transportation now runs ${NR.METROS[ev.key].name} safely for ${T.headTermWeeks} weeks. Its lines are frozen.`);
      } else if (ev.type === "headRetired") {
        toast(`${NR.METROS[ev.key].name}'s head of transportation has retired. The city is yours to run again.`);
      } else if (ev.type === "cityShortfall") {
        toast(`${NR.METROS[ev.key].name}'s budget ran dry: ${NR.money(ev.amount)} of running costs came out of the ${NR.STATE_NAMES[NR.stateOf(ev.key)]} budget.`);
      } else if (ev.type === "stateShortfall") {
        toast(`The ${NR.STATE_NAMES[ev.code]} budget ran dry: national money paid ${NR.money(ev.amount)} of its running costs.`);
      } else if (ev.type === "nationalShort") {
        toast(`National money is ${NR.money(-ev.amount)}. Tap the money at the bottom and take some out of a state budget, or border lines can't get new trains or track.`);
      } else if (ev.type === "statesOpen") {
        const names = ev.codes.map((code) => NR.STATE_NAMES[code]);
        const list = names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names[0];
        toast(`${list} ${names.length > 1 ? "are" : "is"} open! Each starts with a ${NR.money(T.newStateBudget)} budget. Track across a state border is paid from national money.`);
      } else if (ev.type === "stateHeadHired") {
        toast(`Head of transportation hired for ${NR.STATE_NAMES[ev.code]} (${NR.money(ev.fee)}). Keep the state running for ${plural(T.headSettleWeeks, "week")} while they settle in.`);
      } else if (ev.type === "stateHeadTakesOver") {
        toast(`The head of transportation now runs ${NR.STATE_NAMES[ev.code]} safely for ${T.headTermWeeks} weeks. Its track, trains and counties are frozen.`);
      } else if (ev.type === "stateHeadRetired") {
        toast(`${NR.STATE_NAMES[ev.code]}'s head of transportation has retired. The state is yours to run again.`);
      } else if (ev.type === "cityOpen") {
        toast(`${NR.METROS[ev.key].name} city map is open. Move money into its budget to build, because riders will start to appear in the neighborhoods.`);
      } else if (ev.type === "cityCrowd") {
        if (cityKey !== ev.key) toast(`Crowding at ${NR.cityStop(ev.key, ev.at).name} in ${NR.METROS[ev.key].name}! Open the city map to help.`);
      } else if (ev.type === "cityDeliver") {
        if (cityKey === ev.key) fx.push({ kind: "deliver", city: ev.key, at: ev.at, t0: now });
      } else if (ev.type === "contract") {
        const c = game.contracts.find((x) => x.id === ev.id);
        if (c) toast(`New contract: ${NR.describeGoal(c)}. Reward: ${NR.rewardText(c.reward)}. Tap the clipboard to see it.`);
      } else if (ev.type === "contractDone") {
        toast(`Contract complete: ${ev.text}. You earned ${NR.rewardText(ev.reward)}.`);
      } else if (ev.type === "contractExpired") {
        toast(`Contract missed: ${ev.text}. Time ran out.`);
      } else if (ev.type === "flight") {
        const c = NR.cityById[ev.at];
        fx.push({ kind: "city", at: ev.at, t0: now });
        toast(`A flight landed at ${c.airport}: ${plural(ev.landed, "traveler")} waiting at ${c.name}.`);
      } else if (ev.type === "quake" || ev.type === "fire" || ev.type === "repaired") {
        const between = (key) => key.split("|").map((id) => NR.cityById[id].name).join(" and ");
        if (ev.type === "quake") {
          fx.push({ kind: "city", at: ev.key.split("|")[0], t0: now });
          toast(`Earthquake! Track between ${between(ev.key)} is damaged. A Work train on that line can repair it.`);
        } else if (ev.type === "fire") {
          toast(
            `Wildfire in ${NR.countyById[ev.county].name}!` +
              (ev.keys.length ? ` ${plural(ev.keys.length, "stretch")} of track damaged. Send a Work train.` : "")
          );
        } else {
          toast(`Track between ${between(ev.key)} is repaired${ev.byWorkTrain ? " by a Work train" : ""}.`);
        }
      } else if (ev.type === "ship") {
        const c = NR.cityById[ev.at];
        fx.push({ kind: "city", at: ev.at, t0: now });
        toast(
          ev.landed
            ? `A ship docked at the ${c.port} (${c.name}): ${plural(ev.landed, "container")} to move. Use a Dock train.`
            : `A ship at the ${c.port} found the yard full and sailed on. Move the containers out to earn more.`
        );
      } else if (ev.type === "rush") {
        fx.push({ kind: "city", at: ev.at, t0: now });
        toast(`Rush hour in ${NR.cityById[ev.at].name}! Extra passengers for a few seconds. Commuter trains help.`);
      } else if (ev.type === "week") enqueue(() => openWeek(ev.week));
      else if (ev.type === "level") enqueue(openLevel);
      else if (ev.type === "fail") {
        queue.length = 0;
        openOver("fail", ev.at, ev.cityStop);
      } else if (ev.type === "timeup") {
        queue.length = 0;
        openOver("time");
      }
    }
  }

  // ---------- Top bar ----------
  function renderLegend() {
    const box = $("legend");
    box.textContent = "";
    if (!game) return;
    if (game.style === "city") {
      box.append("Passengers show the code of the city they want, like FRE for Fresno.");
    } else {
      Object.values(NR.PLACE_TYPES).forEach((t) => {
        const item = document.createElement("span");
        item.className = "legend-item";
        item.innerHTML = `<svg viewBox="0 0 12 12" aria-hidden="true">${SHAPES[t.shape]}</svg>`;
        item.append(t.name);
        box.appendChild(item);
      });
    }
    // Tourists head for any scenic place.
    const tourist = document.createElement("span");
    tourist.className = "legend-item";
    tourist.innerHTML = `<svg viewBox="0 0 12 12" aria-hidden="true">${SHAPES.star}</svg>`;
    tourist.append("Tourists");
    box.appendChild(tourist);
    // Cargo key: the colors used in yards and on cargo trains.
    const swatch = { produce: "--produce", containers: "--container", trucks: "--truck" };
    Object.entries(NR.CARGO).forEach(([key, k]) => {
      const item = document.createElement("span");
      item.className = "legend-item";
      const dot = document.createElement("span");
      dot.className = "legend-cargo";
      dot.style.background = `var(${swatch[key]})`;
      item.append(dot, k.name);
      box.appendChild(item);
    });
  }

  // ---------- Bottom bar: one round button per line color ----------
  let chipSig = "";
  function renderChips() {
    const city = cityKey && game && game.cities[cityKey];
    const sig = city
      ? ["city", cityKey, ...city.lines.map((l) => `${l.color}:${l.mode}:${NR.cityTrainsOn(city, l).length}`)].join(",")
      : game
        ? [game.linesUnlocked, ...game.lines.map((l) => `${l.color}:${NR.trainsOn(game, l).length}`)].join(",")
        : "";
    if (sig === chipSig) return;
    chipSig = sig;
    const box = $("line-chips");
    box.textContent = "";
    if (!game) return;
    if (city) {
      for (let k = 0; k < T.cityLines; k++) {
        const line = city.lines.find((l) => l.color === k);
        const b = document.createElement("button");
        b.type = "button";
        b.className = line ? "chip" : "chip free";
        b.style.setProperty("--chip", `var(--line-${k + 1})`);
        if (line) {
          const n = NR.cityTrainsOn(city, line).length;
          b.textContent = n;
          b.setAttribute("aria-label", `${cityLineName(line)}, ${plural(n, NR.CITY_MODES[line.mode].vehicle)}. Open line options.`);
          b.addEventListener("click", () => (openLineId === line.id ? closeLinePanel() : openLinePanel(line.id)));
        } else {
          b.setAttribute("aria-label", `${NR.LINE_NAMES[k]} city line, not built yet`);
          b.addEventListener("click", () => toast("Choose Tram, Metro or Cable car at the top, then drag between neighborhoods."));
        }
        box.appendChild(b);
      }
      return;
    }
    for (let c = 0; c < game.linesUnlocked; c++) {
      const line = game.lines.find((l) => l.color === c);
      const b = document.createElement("button");
      b.type = "button";
      b.className = line ? "chip" : "chip free";
      b.style.setProperty("--chip", `var(--line-${c + 1})`);
      if (line) {
        const n = NR.trainsOn(game, line).length;
        b.textContent = n;
        b.setAttribute("aria-label", `${lineName(c)}, ${plural(n, "train")}. Open line options.`);
        b.addEventListener("click", () => (openLineId === line.id ? closeLinePanel() : openLinePanel(line.id)));
      } else {
        b.setAttribute("aria-label", `${lineName(c)}, not built yet`);
        b.addEventListener("click", () => toast(`Drag from one city to another to build the ${lineName(c)}.`));
      }
      box.appendChild(b);
    }
  }

  // ---------- Goals and contracts panel ----------
  let ctSig = "";
  const contractsOpen = () => !$("contracts-panel").hidden;
  function openContracts() {
    closeLinePanel();
    closeCountyPanel();
    if (typeof closeCityPanel === "function") closeCityPanel();
    closeBudgetPanel();
    ctSig = "";
    $("contracts-panel").hidden = false;
    renderContracts();
  }
  function closeContracts() {
    $("contracts-panel").hidden = true;
  }
  // One goal as a list item: what to do, a progress bar, and progress text.
  function goalItem(g, extra) {
    const li = document.createElement("li");
    li.className = "ct-item" + (g.done ? " done" : "");
    const text = document.createElement("span");
    text.className = "ct-text";
    text.textContent = (g.done ? "✓ " : "") + NR.describeGoal(g);
    const bar = document.createElement("div");
    bar.className = "cp-bar";
    const fill = document.createElement("span");
    fill.style.width = `${Math.min(100, (100 * g.progress) / g.target)}%`;
    bar.append(fill);
    const meta = document.createElement("div");
    meta.className = "ct-meta";
    const shown = document.createElement("span");
    shown.textContent = NR.goalProgressText(g);
    meta.append(shown, ...(extra || []));
    li.append(text, bar, meta);
    return li;
  }
  // Rebuilt only when something on it changes, so the buttons stay put while you tap them.
  function renderContracts() {
    if (!game || !contractsOpen()) return;
    const daysLeft = (c) => Math.max(0, Math.ceil((c.deadline - game.time) / T.dayLength));
    const sig = JSON.stringify([
      game.mode,
      game.level,
      game.levelGoals.map((g) => [NR.goalProgressText(g), g.done]),
      game.contracts.map((c) => [c.id, NR.goalProgressText(c), daysLeft(c)]),
    ]);
    if (sig === ctSig) return;
    ctSig = sig;
    const levels = game.mode === "levels" && game.levelGoals.length > 0;
    $("ct-level").hidden = !levels;
    if (levels) {
      $("ct-level-title").textContent = `Level ${game.level + 1} checklist: ${NR.LEVELS[game.level].name}`;
      const ul = $("ct-level-goals");
      ul.textContent = "";
      game.levelGoals.forEach((g) => ul.appendChild(goalItem(g)));
    }
    const list = $("ct-list");
    list.textContent = "";
    if (!game.contracts.length) {
      const li = document.createElement("li");
      li.className = "lp-empty";
      li.textContent = "No contracts right now. A new one will be offered soon.";
      list.appendChild(li);
    }
    game.contracts.forEach((c) => {
      const when = document.createElement("span");
      when.textContent = `${plural(daysLeft(c), "day")} left · ${NR.rewardText(c.reward)}`;
      const li = goalItem(c, [when]);
      li.append(
        button("Dismiss", "btn btn-small ct-dismiss", () => {
          NR.dismissContract(game, c.id);
          renderContracts();
        })
      );
      list.appendChild(li);
    });
  }

  // ---------- City maps ----------
  function enterCity(key) {
    if (!game || !NR.cityAvailable(game, key)) return;
    NR.openCity(game, key);
    closeLinePanel();
    closeCountyPanel();
    closeContracts();
    draft = null;
    cityKey = key;
    if (NR.CITY_MODES[cityMode].onlyIn && NR.CITY_MODES[cityMode].onlyIn !== key) cityMode = "tram";
    chipSig = "";
    renderCityBar();
    const c = game.cities[key];
    if (!c.lines.length && c.budget <= 0) openCityPanel(); // a new city starts with an empty budget
  }
  function leaveCity() {
    if (!cityKey) return;
    closeLinePanel();
    closeCityPanel();
    draft = null;
    cityKey = null;
    chipSig = "";
    for (let i = fx.length - 1; i >= 0; i--) if (fx[i].city) fx.splice(i, 1);
    renderCityBar();
  }
  function renderCityBar() {
    const inCity = !!cityKey;
    app.classList.toggle("in-city", inCity);
    $("city-bar").hidden = !inCity;
    $("legend").hidden = inCity;
    $("res-depot").hidden = inCity;
    $("res-counties").hidden = inCity;
    $("res-city").hidden = !inCity;
    if (!inCity) return;
    document.querySelectorAll(".mode-btn").forEach((b) => {
      const m = NR.CITY_MODES[b.dataset.mode];
      b.disabled = !!(m.onlyIn && m.onlyIn !== cityKey);
      b.setAttribute("aria-pressed", String(b.dataset.mode === cityMode));
      b.title = `${m.about} Track ${NR.money(m.track)} per mile, ${m.vehicle} ${NR.money(m.price)}.`;
    });
    const m = NR.CITY_MODES[cityMode];
    $("city-hint").textContent = `Drag between neighborhoods to build a ${m.name.toLowerCase()} line: ${NR.money(m.track)} per mile plus ${NR.money(m.price)} for the first ${m.vehicle}.`;
  }
  document.querySelectorAll(".mode-btn").forEach((b) =>
    b.addEventListener("click", () => {
      cityMode = b.dataset.mode;
      renderCityBar();
    })
  );
  $("btn-back").addEventListener("click", leaveCity);

  // ---------- City budget and head of transportation panel ----------
  const cityPanelOpen = () => !$("city-panel").hidden;
  function openCityPanel() {
    closeLinePanel();
    closeCountyPanel();
    closeContracts();
    closeBudgetPanel();
    $("city-panel").hidden = false;
    renderCityPanel();
  }
  function closeCityPanel() {
    $("city-panel").hidden = true;
  }
  const weeksUntil = (t) => Math.max(0, Math.ceil((t - game.time) / T.weekLength));
  function renderCityPanel() {
    if (!cityKey || !game || !cityPanelOpen()) return;
    const c = game.cities[cityKey];
    const metro = NR.METROS[cityKey];
    const state = NR.headState(game, cityKey);
    const lw = c.lastWeek;
    setText("cy-title", `${metro.name} budget`);
    setText("cy-budget", NR.money(c.budget));
    setText(
      "cy-week",
      (lw ? `Last week: fares ${NR.money(lw.income)}, running costs ${NR.money(lw.upkeep)}${lw.toYou ? `, ${NR.money(lw.toYou)} to the state budget` : ""} · ` : "") +
        `${plural(c.delivered, "rider")} so far`
    );
    const stateMoney = NR.cityState(game, cityKey).budget;
    $("cy-in").disabled = stateMoney <= 0;
    $("cy-in5").disabled = stateMoney <= 0;
    $("cy-out").disabled = c.budget <= 0;
    const hire = $("cy-hire");
    const bar = $("cy-head-bar");
    if (!state) {
      const fee = NR.headFee(game, cityKey);
      setText(
        "cy-head",
        `Hire a head of transportation to run ${metro.name} for you. For the first ${T.headSettleWeeks} weeks they settle in and you still keep the city running. ` +
          `Then they run it safely for ${T.headTermWeeks} weeks: nothing can overflow, but its lines can't change and management keeps ${Math.round(T.managementShare * 100)}% of the city's profit (the rest goes to the state budget). ` +
          `Fee: the higher of ${Math.round(T.headFeeBudget * 100)}% of the city budget or ${Math.round(T.headFeeInfra * 100)}% of its track and vehicles.` +
          (c.lines.length ? "" : " Build a line first.")
      );
      hire.hidden = false;
      setText("cy-hire", `Hire for ${NR.money(fee)}`);
      hire.disabled = !c.lines.length || c.budget < fee;
      bar.hidden = true;
    } else {
      const settling = state === "settling";
      setText(
        "cy-head",
        settling
          ? `Settling in: ${plural(weeksUntil(c.head.from), "week")} left. Keep ${metro.name} running until they take over.`
          : `Running ${metro.name} safely: ${plural(weeksUntil(c.head.until), "week")} left. Lines are frozen, and the state budget gets ${Math.round((1 - T.managementShare) * 100)}% of the city's profit each week.`
      );
      hire.hidden = true;
      bar.hidden = false;
      const [a, b] = settling ? [c.head.hired, c.head.from] : [c.head.from, c.head.until];
      $("cy-head-fill").style.width = `${Math.min(100, (100 * (game.time - a)) / (b - a))}%`;
    }
  }
  const moveMoney = (amount) => {
    if (!cityKey) return;
    const moved = NR.cityTransfer(game, cityKey, amount);
    const from = NR.STATE_NAMES[NR.stateOf(cityKey)];
    if (moved) toast(moved > 0 ? `Moved ${NR.money(moved)} from the ${from} budget into the ${NR.METROS[cityKey].name} budget.` : `Took ${NR.money(-moved)} out of the ${NR.METROS[cityKey].name} budget, back to the ${from} budget.`);
    renderCityPanel();
  };
  $("cy-in").addEventListener("click", () => moveMoney(100));
  $("cy-in5").addEventListener("click", () => moveMoney(500));
  $("cy-out").addEventListener("click", () => moveMoney(-100));
  $("cy-close").addEventListener("click", closeCityPanel);
  $("btn-city-budget").addEventListener("click", () => (cityPanelOpen() ? closeCityPanel() : openCityPanel()));
  $("cy-hire").addEventListener("click", () => {
    if (cityKey && NR.hireHead(game, cityKey)) renderCityPanel();
  });
  $("cp-city").addEventListener("click", () => {
    const main = openCountyId && NR.mainStation[openCountyId];
    if (main) enterCity(main.id);
  });

  // ---------- Budgets panel: national money and each state's budget ----------
  const budgetsOpen = () => !$("budget-panel").hidden;
  function openBudgetPanel() {
    closeLinePanel();
    closeCountyPanel();
    closeContracts();
    closeCityPanel();
    bpSig = "";
    $("budget-panel").hidden = false;
    $("btn-budgets").setAttribute("aria-expanded", "true");
    renderBudgetPanel();
  }
  function closeBudgetPanel() {
    $("budget-panel").hidden = true;
    $("btn-budgets").setAttribute("aria-expanded", "false");
  }
  // The state cards are built once (and again only when a state opens), then their numbers
  // are updated every frame, so the buttons stay put while you tap them.
  let bpSig = "";
  let bpCards = {};
  function stateCard(code) {
    const card = document.createElement("div");
    card.className = "bp-state";
    const row = document.createElement("div");
    row.className = "bp-row";
    const name = document.createElement("span");
    name.className = "bp-name";
    name.textContent = NR.STATE_NAMES[code];
    const chip = document.createElement("span");
    chip.className = "head-chip";
    row.append(name, chip);
    const budget = document.createElement("p");
    budget.className = "cy-budget";
    const week = document.createElement("p");
    week.className = "lp-meta";
    const moves = document.createElement("div");
    moves.className = "lp-actions";
    const move = (amount) => {
      const moved = NR.stateTransfer(game, code, amount);
      if (moved) toast(moved > 0 ? `Moved ${NR.money(moved)} of national money into the ${NR.STATE_NAMES[code]} budget.` : `Moved ${NR.money(-moved)} from the ${NR.STATE_NAMES[code]} budget to national money.`);
    };
    const moveIn = button("Move $100k in", "btn btn-small", () => move(100));
    const moveOut = button("Take $100k out", "btn btn-small", () => move(-100));
    moves.append(moveIn, moveOut);
    const head = document.createElement("p");
    head.className = "cp-goal-text";
    const bar = document.createElement("div");
    bar.className = "cp-bar";
    const fill = document.createElement("span");
    bar.append(fill);
    const hireRow = document.createElement("div");
    hireRow.className = "lp-actions";
    const hire = button("Hire", "btn btn-small btn-primary", () => {
      // Two taps, because hiring freezes the state for a long time.
      if (!hire.dataset.armed) {
        hire.dataset.armed = "1";
        hire.textContent = "Tap again to hire";
        setTimeout(() => (hire.dataset.armed = ""), 4000);
        return;
      }
      hire.dataset.armed = "";
      NR.hireStateHead(game, code);
    });
    hireRow.append(hire);
    card.append(row, budget, week, moves, head, bar, hireRow);
    bpCards[code] = { card, chip, budget, week, moveIn, moveOut, head, bar, fill, hire, hireRow };
    return card;
  }
  function renderBudgetPanel() {
    if (!game || !budgetsOpen()) return;
    setText("bp-national", NR.money(game.money));
    $("bp-national").classList.toggle("negative", game.money < 0);
    const codes = Object.keys(game.states);
    const open = codes.filter((code) => game.states[code].open);
    const closed = codes.filter((code) => !game.states[code].open);
    const sig = open.join(",");
    if (sig !== bpSig) {
      bpSig = sig;
      bpCards = {};
      const box = $("bp-states");
      box.textContent = "";
      open.forEach((code) => box.append(stateCard(code)));
      if (closed.length) {
        const note = document.createElement("p");
        note.className = "bp-closed";
        const names = closed.map((code) => NR.STATE_NAMES[code]);
        note.textContent = `${names.slice(0, -1).join(", ")}${names.length > 1 ? " and " : ""}${names[names.length - 1]} open once you own all of ${NR.STATE_NAMES[NR.HOME_STATE]}.`;
        box.append(note);
      }
      setText(
        "bp-head-help",
        `Fee: the higher of ${Math.round(T.headFeeBudget * 100)}% of the state budget or ${Math.round(T.headFeeInfra * 100)}% of the state's own track and trains. ` +
          `For the first ${T.headSettleWeeks} weeks they settle in and you still keep the state running. ` +
          `Then they run it safely for ${T.headTermWeeks} weeks: its stations never overflow (they are kept at most half full), but track and trains inside the state are frozen, no new counties or towns open there, and management keeps ${Math.round(T.managementShare * 100)}% of the state's profit (the rest goes to national money). ` +
          "After that the state is yours again. Lines that cross a border stay yours throughout."
      );
    }
    for (const code of open) {
      const st = game.states[code];
      const el = bpCards[code];
      const state = NR.stateHeadState(game, code);
      const lw = st.lastWeek;
      el.budget.textContent = NR.money(st.budget);
      el.week.textContent = lw
        ? `Last week: fares ${NR.money(lw.income)}, running costs ${NR.money(lw.upkeep)}${lw.toNational ? `, ${NR.money(lw.toNational)} to national money` : ""}`
        : "Fares earned at its stations come in here.";
      el.moveIn.disabled = game.money <= 0;
      el.moveOut.disabled = st.budget <= 0;
      el.chip.className = `head-chip ${state || ""}`;
      el.chip.textContent = state === "managing" ? `Managed · ${weeksUntil(st.head.until)} wk left` : state === "settling" ? `Head settling in · ${weeksUntil(st.head.from)} wk` : "No head";
      el.bar.hidden = !state;
      el.hireRow.hidden = !!state;
      if (state) {
        const settling = state === "settling";
        el.head.textContent = settling
          ? `Settling in: ${plural(weeksUntil(st.head.from), "week")} left. Keep ${NR.STATE_NAMES[code]} running until they take over.`
          : `Running ${NR.STATE_NAMES[code]} safely: ${plural(weeksUntil(st.head.until), "week")} left. Track, trains and counties inside the state are frozen.`;
        const [a, b] = settling ? [st.head.hired, st.head.from] : [st.head.from, st.head.until];
        el.fill.style.width = `${Math.min(100, (100 * (game.time - a)) / (b - a))}%`;
      } else {
        const problem = NR.stateHeadProblem(game, code);
        el.head.textContent = problem && problem !== "Not enough money" ? `Head of transportation: ${problem.toLowerCase()}.` : "Head of transportation: none.";
        el.hire.disabled = !!problem;
        if (!el.hire.dataset.armed) el.hire.textContent = `Hire a head · ${NR.money(NR.stateHeadFee(game, code))}`;
      }
    }
  }
  $("btn-budgets").addEventListener("click", () => game && (budgetsOpen() ? closeBudgetPanel() : openBudgetPanel()));
  $("bp-close").addEventListener("click", closeBudgetPanel);

  // ---------- County panel ----------
  function openCountyPanel(id) {
    closeLinePanel();
    closeContracts();
    closeCityPanel();
    closeBudgetPanel();
    openCountyId = id;
    renderCountyPanel();
    $("county-panel").hidden = false;
  }
  function closeCountyPanel() {
    openCountyId = null;
    $("county-panel").hidden = true;
  }
  function renderCountyPanel() {
    const id = openCountyId;
    if (!game || !id) return closeCountyPanel();
    const county = NR.countyById[id];
    const main = NR.mainStation[id];
    const st = NR.countyStatus(game, id);
    const towns = NR.TOWNS.filter((t) => t.county === id);
    const onMap = game.stations.filter((x) => NR.cityById[x.id].county === id).length;
    const people = main.pop >= 1000 ? `${(main.pop / 1000).toFixed(1)} million` : `${main.pop},000`;
    setText("cp-name", county.name);
    setText(
      "cp-status",
      st.owned
        ? `Yours · ${plural(onMap, "station")} on the map`
        : st.ok
          ? `Next to your network: can be unlocked from the ${NR.STATE_NAMES[st.payer]} budget`
          : `Locked · ${st.reason}`
    );
    setText(
      "cp-info",
      `${people} people. Main station: ${main.name} (${NR.PLACE_TYPES[main.type].name}).` +
        (towns.length ? ` Towns that appear once it is yours: ${towns.map((t) => t.name).join(", ")}.` : "") +
        [main, ...towns]
          .filter((c) => c.port)
          .map((c) => ` Seaport: ${c.port} (${c.name}).`)
          .join("") +
        [main, ...towns]
          .filter((c) => c.airport)
          .map((c) => ` Airport: ${c.airport} (${c.name}).`)
          .join("") +
        [main, ...towns]
          .filter((c) => c.scenic)
          .map((c) => ` Scenic place: ${c.name}.`)
          .join("")
    );
    $("cp-goal").hidden = !st.ok;
    $("cp-buy").hidden = !st.ok;
    const hasCity = !!NR.METROS[main.id];
    $("cp-city").hidden = !(hasCity && st.owned);
    if (hasCity && st.owned) setText("cp-city", NR.cityActive(game, main.id) ? `Go to the ${NR.METROS[main.id].name} city map` : `Open city map (trams and metro)`);
    if (st.ok) {
      setText("cp-goal-text", `Free unlock: deliver ${st.goal} passengers to your stations next to this county (${st.progress}/${st.goal}).`);
      $("cp-goal-fill").style.width = `${Math.min(100, (100 * st.progress) / st.goal)}%`;
      setText("cp-buy", `Unlock now · ${NR.money(st.price)}`);
      $("cp-buy").disabled = !NR.canPay(game, { [st.payer]: st.price });
      $("cp-buy").title = `Paid from the ${NR.STATE_NAMES[st.payer]} budget (national money covers what it can't).`;
    }
  }

  // ---------- Line options panel ----------
  let panelSig = "";
  function openLinePanel(id) {
    closeCountyPanel();
    closeContracts();
    closeCityPanel();
    closeBudgetPanel();
    openLineId = id;
    panelSig = "";
    $("lp-delete").dataset.armed = "";
    renderLinePanel();
    $("line-panel").hidden = false;
  }
  function closeLinePanel() {
    openLineId = null;
    $("line-panel").hidden = true;
  }

  // The panel is rebuilt only when something on it changes, so buttons stay put while you tap them.
  const cityLineName = (line) => `${NR.LINE_NAMES[line.color]} ${NR.CITY_MODES[line.mode].name} line`;

  // The line panel for a tram, metro or cable car line on a city map.
  function renderCityLinePanel() {
    const c = game.cities[cityKey];
    const line = c && NR.cityLineById(c, openLineId);
    if (!line) return closeLinePanel();
    const m = NR.CITY_MODES[line.mode];
    const vehicles = NR.cityTrainsOn(c, line);
    const frozen = NR.cityFrozen(game, cityKey);
    const sig = JSON.stringify(["city", cityKey, line.stops, vehicles.map((t) => t.id), c.budget >= m.price, game.extraSeats, frozen]);
    if (sig === panelSig) return;
    panelSig = sig;
    $("lp-dot").style.background = `var(--line-${line.color + 1})`;
    $("lp-name").textContent = cityLineName(line);
    $("lp-meta").textContent = `${plural(line.stops.length, "stop")} · ${NR.cityLineMiles(cityKey, line).toFixed(1)} mi · ${m.name}`;
    $("lp-stops").textContent = line.stops.map((id) => NR.cityStop(cityKey, id).name).join(" – ");
    // Hills and water along the line
    const legs = [];
    for (let i = 0; i + 1 < line.stops.length; i++) {
      const notes = NR.cityLegNotes(cityKey, line.mode, line.stops[i], line.stops[i + 1]);
      if (notes.length) legs.push(`${NR.cityStop(cityKey, line.stops[i]).name}–${NR.cityStop(cityKey, line.stops[i + 1]).name}: ${notes.join(", ")}`);
    }
    $("lp-geo").hidden = !legs.length;
    $("lp-geo").textContent = legs.join(" · ");
    const list = $("lp-trains");
    list.textContent = "";
    vehicles.forEach((t) => {
      const li = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = `${m.name} · ${m.seats + game.extraSeats} riders`;
      li.append(
        label,
        button(`Sell (+${NR.money(m.price * T.refundShare)})`, "btn btn-small", () => {
          NR.cityRemoveVehicle(game, cityKey, t.id);
          renderLinePanel();
        })
      );
      li.lastChild.disabled = frozen;
      list.appendChild(li);
    });
    if (!vehicles.length) {
      const li = document.createElement("li");
      li.className = "lp-empty";
      li.textContent = `No ${m.vehicle}s yet. Add one below.`;
      list.appendChild(li);
    }
    const buy = $("lp-buy");
    buy.textContent = "";
    const add = button("", "buy", () => {
      if (NR.cityAddVehicle(game, cityKey, line)) renderLinePanel();
    });
    add.disabled = frozen || c.budget < m.price;
    add.title = m.about;
    const name = document.createElement("span");
    name.className = "buy-name";
    name.textContent = `Add a ${m.vehicle}`;
    const note = document.createElement("span");
    note.className = "buy-note";
    note.textContent = frozen ? "Frozen while managed" : `Buy ${NR.money(m.price)} from the city budget`;
    add.append(name, note);
    buy.appendChild(add);
    $("lp-upgrade").hidden = true;
    $("lp-tunnel").hidden = true;
    $("lp-delete").disabled = frozen;
    if (!$("lp-delete").dataset.armed) {
      const value = NR.cityLinePrice(cityKey, line) + vehicles.length * m.price;
      $("lp-delete").textContent = `Delete line (get back ${NR.money(value * T.refundShare)})`;
    }
  }

  function renderLinePanel() {
    if (cityKey) return renderCityLinePanel();
    const line = game && NR.lineById(game, openLineId);
    if (!line) return closeLinePanel();
    $("lp-delete").disabled = NR.lineFrozen(game, line); // track in a managed state can't change
    const trains = NR.trainsOn(game, line);
    const checks = Object.keys(NR.TRAIN_TYPES).map((k) => [k, NR.canAddTrain(game, line, k)]);
    const upgradePrice = NR.highSpeedUpgradePrice(line);
    const canUpgrade = NR.canPay(game, NR.upgradeBill(line));
    const tunnelBill = NR.tunnelBill(game, line);
    const tunnelPrice = Object.values(tunnelBill).reduce((a, b) => a + b, 0);
    const canTunnel = tunnelPrice > 0 && NR.canPay(game, tunnelBill);
    const frozen = NR.lineFrozen(game, line);
    const payer = NR.linePayer(line);
    const sig = JSON.stringify([
      line.stops,
      line.grade,
      trains.map((t) => t.id),
      checks.map(([k, c]) => [c.ok, c.reason, game.depot[k]]),
      canUpgrade,
      canTunnel,
      tunnelPrice > 0,
      frozen,
      game.extraSeats,
    ]);
    if (sig === panelSig) return;
    panelSig = sig;

    $("lp-dot").style.background = `var(--line-${line.color + 1})`;
    $("lp-name").textContent = lineName(line.color);
    // Who pays: a line inside one state is paid from its budget; a line across a border from national money.
    const paidBy = payer === "national" ? "crosses a border: national money pays" : `paid from the ${NR.STATE_NAMES[payer]} budget`;
    $("lp-meta").textContent =
      `${plural(line.stops.length, "stop")} · ${NR.lineMiles(line)} mi · ${line.grade === "high" ? "high-speed" : "standard"} track · ${paidBy}` +
      (frozen ? " · frozen while its state is managed" : "");
    $("lp-stops").textContent = line.stops.map((id) => NR.cityById[id].name).join(" – ");
    // What the track crosses: passes, tunnels, bridges...
    const crossings = [];
    for (let i = 0; i + 1 < line.stops.length; i++) {
      const notes = NR.geoNotes(line.stops[i], line.stops[i + 1], line);
      if (notes.length) crossings.push(`${NR.cityById[line.stops[i]].name}–${NR.cityById[line.stops[i + 1]].name}: ${notes.join(", ")}`);
    }
    $("lp-geo").hidden = !crossings.length;
    $("lp-geo").textContent = crossings.join(" · ");

    const list = $("lp-trains");
    list.textContent = "";
    if (!trains.length) {
      const li = document.createElement("li");
      li.className = "lp-empty";
      li.textContent = "No trains yet. Add one below.";
      list.appendChild(li);
    }
    trains.forEach((t) => {
      const li = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = NR.TRAIN_TYPES[t.type].repairs
        ? `${NR.TRAIN_TYPES[t.type].name} · repairs track`
        : `${NR.TRAIN_TYPES[t.type].name} · ${NR.seatsOf(game, t)} ${NR.unitOf(t.type)}`;
      li.append(
        label,
        button("To depot", "btn btn-small", () => {
          NR.removeTrain(game, t.id);
          renderLinePanel();
        })
      );
      li.lastChild.disabled = frozen;
      list.appendChild(li);
    });

    const buy = $("lp-buy");
    buy.textContent = "";
    checks.forEach(([key, c]) => {
      const type = NR.TRAIN_TYPES[key];
      const b = button("", "buy", () => {
        if (NR.addTrain(game, line, key)) renderLinePanel();
      });
      b.disabled = !c.ok;
      b.title = type.about;
      const name = document.createElement("span");
      name.className = "buy-name";
      name.textContent = type.name;
      const note = document.createElement("span");
      note.className = "buy-note";
      note.textContent = c.ok ? (c.fromDepot ? `From depot (${game.depot[key]})` : `Buy ${NR.money(type.price)}`) : c.reason;
      b.append(name, note);
      buy.appendChild(b);
    });

    const up = $("lp-upgrade");
    up.hidden = line.grade === "high";
    up.textContent = `Upgrade to high-speed track · ${NR.money(upgradePrice)}`;
    up.disabled = !canUpgrade || frozen;
    const tun = $("lp-tunnel");
    tun.hidden = !tunnelPrice;
    tun.textContent = `Dig tunnels under the passes · ${NR.money(tunnelPrice)}`;
    tun.title = "Trains stop slowing down on the climbs over mountain passes on this line.";
    tun.disabled = !canTunnel || frozen;
    if (!$("lp-delete").dataset.armed) $("lp-delete").textContent = `Delete line (get back ${NR.money(NR.lineValue(line) * T.refundShare)})`;
  }

  // ---------- Every frame ----------
  function updateHud() {
    renderChips();
    if (!game) return;
    setText("score", game.delivered);
    setText("cargo", Object.values(game.cargoDelivered).reduce((a, b) => a + b, 0));
    const week = Math.min(Math.floor(game.time / T.weekLength), game.mode === "timed" ? T.timedWeeks - 1 : Infinity);
    setText("clock-label", `Week ${week + 1}${NR.isNight(game) ? " · night" : ""}`);
    setText("clock", `${NR.DAY_NAMES[Math.floor(game.time / T.dayLength) % 7]} ${String(Math.floor(NR.hourOf(game))).padStart(2, "0")}:00`);
    if (game.mode === "levels") {
      setText("goal-label", "Goals");
      setText("goal", `${game.levelGoals.filter((g) => g.done).length}/${game.levelGoals.length}`);
    } else if (game.mode === "timed") {
      setText("goal-label", "Time left");
      setText("goal", clock(Math.max(0, T.timedWeeks * T.weekLength - game.time)));
    } else {
      setText("goal-label", "Best");
      setText("goal", best[bestKey("endless", game.style)] || 0);
    }
    const modeName =
      game.mode === "levels" ? `Level ${game.level + 1}: ${NR.LEVELS[game.level].name}` : game.mode === "timed" ? "Timed challenge" : "Endless";
    if (!cityKey) setText("mode-label", `${modeName} · ${game.style === "type" ? "Type of place" : "Specific city"}${game.geo === "tough" ? " · Tough geography" : ""}`);
    setText("trains-free", NR.depotCount(game));
    if (cityKey) {
      setText("mode-label", `${NR.METROS[cityKey].name} city map · trams and metro`);
      const c = game.cities[cityKey];
      setText("city-budget", NR.money(c.budget));
      const head = NR.headState(game, cityKey);
      const chip = $("city-head");
      chip.className = `head-chip ${head || ""}`;
      setText(
        "city-head",
        head === "managing" ? `Managed · ${weeksUntil(c.head.until)} wk left` : head === "settling" ? `Head settling in · ${weeksUntil(c.head.from)} wk` : "No head of transportation"
      );
      renderCityPanel();
    }
    // Counties you own, out of all counties in the open states.
    setText("counties", `${game.owned.length}/${NR.MAP.regions.filter((r) => game.states[r.state].open).length}`);
    if (openCountyId) renderCountyPanel();
    setText("contracts-badge", game.contracts.length);
    $("contracts-badge").hidden = !game.contracts.length;
    renderContracts();
    setText("money", NR.money(game.money));
    $("money").classList.toggle("negative", game.money < 0);
    // One open state: its name and budget. Several: all state budgets together.
    const open = Object.keys(game.states).filter((code) => game.states[code].open);
    const stateMoney = open.reduce((sum, code) => sum + game.states[code].budget, 0);
    setText("state-money-label", open.length === 1 ? NR.STATE_NAMES[open[0]] : `${open.length} states`);
    setText("state-money", NR.money(stateMoney));
    renderBudgetPanel();
    if (openLineId) renderLinePanel();
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (game && !paused && !screen && !game.over) {
      for (let step = 0; step < (fast ? 2 : 1) && !screen && !game.over; step++) {
        NR.update(game, dt);
        handleEvents(now);
      }
    }
    NR.draw(ctx, game, { draft, pointer, fx, now, county: openCountyId, city: cityKey });
    updateHud();
    requestAnimationFrame(frame);
  }

  // ---------- Fitting everything on screen ----------
  function layout() {
    const rect = app.getBoundingClientRect();
    const w = Math.max(1, rect.width);
    const h = Math.max(1, rect.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    const top = $("hud-top").getBoundingClientRect().bottom - rect.top + 10;
    const barTop = $("bar").getBoundingClientRect().top - rect.top;
    NR.layout(w, h, dpr, { top, bottom: h - barTop + 10, left: 18, right: 18 });
    $("line-panel").style.bottom = `${h - barTop + 10}px`;
    $("county-panel").style.bottom = `${h - barTop + 10}px`;
    $("contracts-panel").style.bottom = `${h - barTop + 10}px`;
    $("budget-panel").style.bottom = `${h - barTop + 10}px`;
    $("zoom-controls").style.bottom = `${h - barTop + 12}px`;
    $("toast").style.top = `${top}px`; // messages sit under the score strip, clear of the buttons
  }

  // ---------- Drawing lines with a finger or the mouse ----------
  function at(e) {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  // Prices, names and lines come from the state map or from the open city map.
  const draftPrice = (a, b) => (draft.city ? NR.cityTrackPrice(draft.city, draft.mode, a, b) : NR.trackPrice(a, b, draft.grade));
  const placeName = (id) => (draft.city ? NR.cityStop(draft.city, id).name : NR.cityById[id].name);
  const draftLine = () => (draft.city ? NR.cityLineById(game.cities[draft.city], draft.lineId) : NR.lineById(game, draft.lineId));

  function extendDraft(id) {
    const chain = draft.chain;
    const lastId = chain[chain.length - 1];
    if (id === lastId) return;
    if (chain.length >= 2 && id === chain[chain.length - 2]) {
      draft.cost -= draftPrice(id, lastId); // dragged back: undo the last stop
      chain.pop();
      draft.note = "";
      return;
    }
    if (chain.includes(id)) return;
    if (draft.kind === "extend" && draftLine().stops.includes(id)) return;
    const cost = draftPrice(lastId, id);
    if (draft.city) {
      // Water too wide to cross, or a cable car asked to cross water
      const leg = NR.cityLegGeo(draft.city, lastId, id);
      if (leg.blocked || (draft.mode === "cable" && leg.water.length)) {
        toast(NR.cityModeProblem(draft.city, draft.mode, [lastId, id]) + ".");
        return;
      }
      const left = game.cities[draft.city].budget - draft.cost;
      if (cost > left) {
        toast(`Not enough in the city budget: track from ${placeName(lastId)} to ${placeName(id)} costs ${NR.money(cost)}, and you have ${NR.money(Math.max(0, left))}.`);
        return;
      }
    } else {
      // Each stretch is paid by its state (national money across a border, or when a state runs short).
      if (NR.chainFrozen(game, [lastId, id])) {
        toast(`Track inside ${NR.STATE_NAMES[NR.stateOf(id)]} can't change while its head of transportation manages it.`);
        return;
      }
      // Real geography: some mountains are too wide to tunnel, some water too wide to bridge.
      const blocked = NR.blockedReason(lastId, id);
      if (blocked) {
        toast(`No track from ${placeName(lastId)} to ${placeName(id)}: ${blocked}`);
        return;
      }
      if (!NR.canPay(game, NR.chainBill([...chain, id], draft.grade))) {
        const payer = NR.segmentPayer(lastId, id);
        toast(
          `Not enough money: track from ${placeName(lastId)} to ${placeName(id)} costs ${NR.money(cost)}, paid from ${NR.payerName(payer)}` +
            (payer === "national" ? " because it crosses a state border." : " (national money covers what the state can't).") +
            " Tap the money at the bottom to see your budgets."
        );
        return;
      }
    }
    chain.push(id);
    draft.cost += cost;
    draft.note = (draft.city ? NR.cityLegNotes(draft.city, draft.mode, lastId, id) : NR.geoNotes(lastId, id)).join(" · ");
  }

  function finishDraft() {
    if (!draft) return;
    const d = draft;
    draft = null;
    pointer = null;
    if (!game || d.chain.length < 2) return;
    if (d.city ? game.cities[d.city].budget < d.cost : !NR.canPay(game, NR.chainBill(d.chain, d.grade))) {
      toast(`Not enough ${d.city ? "in the city budget" : "money"} to build this: it costs ${NR.money(d.cost)}.`);
      return;
    }
    if (d.city) {
      // A tram, metro or cable car line on a city map
      const c = game.cities[d.city];
      const m = NR.CITY_MODES[d.mode];
      if (d.kind === "new") {
        const problem = NR.cityModeProblem(d.city, d.mode, d.chain);
        if (problem) return toast(`${problem}.`);
        if (c.budget < d.cost + m.price)
          return toast(`Not enough in the city budget: this ${m.name.toLowerCase()} line costs ${NR.money(d.cost + m.price)} with its first ${m.vehicle}. Tap City budget to move money in.`);
        if (NR.cityFreeColor(c) === d.color) NR.cityCreateLine(game, d.city, d.chain, d.color, d.mode);
      } else {
        const line = NR.cityLineById(c, d.lineId);
        if (!line) return;
        const all = d.atHead ? [...d.chain.slice(1).reverse(), ...line.stops] : [...line.stops, ...d.chain.slice(1)];
        const problem = NR.cityModeProblem(d.city, line.mode, all);
        if (problem) return toast(`${problem}.`);
        NR.cityExtendLine(game, d.city, line, d.atHead, d.chain.slice(1));
      }
      return;
    }
    if (d.kind === "new") {
      if (NR.freeColor(game) !== d.color) return;
      const line = NR.createLine(game, d.chain, d.color);
      if (!line) return toast(NR.chainBlocked(d.chain) || "This track can't be built.");
      if (!NR.trainsOn(game, line).length) toast(`The ${lineName(line.color)} has no train yet. Tap its color at the bottom to add one.`);
    } else {
      const line = NR.lineById(game, d.lineId);
      if (line) NR.extendLine(game, line, d.atHead, d.chain.slice(1));
    }
  }

  // Fingers (or the mouse) currently on the map, and the gesture they are making.
  const touches = new Map();
  let gesture = null; // { kind: "pan", last } or { kind: "pinch", d0, z0, wx, wy }

  function pinchState() {
    const [a, b] = [...touches.values()];
    return { d: Math.max(10, Math.hypot(a.x - b.x, a.y - b.y)), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
  }
  function startPinch() {
    draft = null;
    pointer = null;
    const { d, mx, my } = pinchState();
    const cam = NR.camera;
    // Remember which spot of the map is under the fingers, so it stays there.
    gesture = { kind: "pinch", d0: d, z0: cam.zoom, wx: (mx - cam.x) / cam.zoom, wy: (my - cam.y) / cam.zoom };
  }
  function movePinch() {
    const { d, mx, my } = pinchState();
    const z = Math.max(1, Math.min(NR.camera.max, (gesture.z0 * d) / gesture.d0));
    NR.setCamera(z, mx - gesture.wx * z, my - gesture.wy * z);
  }

  canvas.addEventListener("pointerdown", (e) => {
    if (!game || screen) return;
    const p = at(e);
    touches.set(e.pointerId, p);
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch (err) {
      /* keep going: the gesture still works without capture */
    }
    if (touches.size >= 2) {
      if (touches.size === 2 && !cityKey) startPinch(); // city maps don't zoom
      return;
    }
    if (game.over) return;
    if (cityKey) {
      // City map: drag from a neighborhood to build, or drag a line's end tab to extend it
      const c = game.cities[cityKey];
      if (NR.cityFrozen(game, cityKey)) {
        toast(`The head of transportation runs ${NR.METROS[cityKey].name}: its lines can't change for ${plural(weeksUntil(c.head.until), "more week")}.`);
        return;
      }
      const h = NR.hitCityHandle(c, p.x, p.y, grab + 4);
      const st = NR.hitCityStop(c, p.x, p.y, grab + 4);
      if (h && (!st || h.d < st.d)) {
        const line = NR.cityLineById(c, h.lineId);
        draft = { city: cityKey, kind: "extend", lineId: line.id, atHead: h.atHead, color: line.color, mode: line.mode, chain: [h.stationId], cost: 0 };
      } else if (st) {
        const color = NR.cityFreeColor(c);
        if (color < 0) {
          toast(`${NR.METROS[cityKey].name} already has ${T.cityLines} lines. Delete one to build another.`);
          return;
        }
        draft = { city: cityKey, kind: "new", color, mode: cityMode, chain: [st.id], cost: 0 };
      } else {
        closeLinePanel();
        return;
      }
      closeLinePanel();
      draft.start = p;
      pointer = p;
      e.preventDefault();
      return;
    }
    const h = NR.hitHandle(game, p.x, p.y, grab + 4);
    const st = NR.hitStation(game, p.x, p.y, grab + 4);
    if (h && (!st || h.d < st.d)) {
      const line = NR.lineById(game, h.lineId);
      draft = { kind: "extend", lineId: line.id, atHead: h.atHead, color: line.color, grade: line.grade, chain: [h.stationId], cost: 0 };
    } else if (st) {
      const color = NR.freeColor(game);
      if (color < 0) {
        toast("Every line color is in use. Delete a line, or pick New line at the end of a week.");
        return;
      }
      draft = { kind: "new", color, grade: "standard", chain: [st.id], cost: 0 };
    } else {
      // Empty map: drag to move it around.
      closeLinePanel();
      gesture = { kind: "pan", last: p, start: p, moved: false };
      canvas.classList.add("is-panning");
      return;
    }
    closeLinePanel();
    draft.start = p; // to tell a tap on a station from a drag
    pointer = p;
    e.preventDefault();
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!touches.has(e.pointerId)) return;
    const p = at(e);
    touches.set(e.pointerId, p);
    if (gesture && gesture.kind === "pinch") {
      if (touches.size >= 2) movePinch();
      return;
    }
    if (gesture && gesture.kind === "pan") {
      NR.panBy(p.x - gesture.last.x, p.y - gesture.last.y);
      gesture.last = p;
      if (Math.hypot(p.x - gesture.start.x, p.y - gesture.start.y) > 6) gesture.moved = true;
      return;
    }
    if (!draft) return;
    pointer = p;
    if (Math.hypot(p.x - draft.start.x, p.y - draft.start.y) > 6) draft.moved = true;
    const st = draft.city ? NR.hitCityStop(game.cities[draft.city], pointer.x, pointer.y, grab) : NR.hitStation(game, pointer.x, pointer.y, grab);
    if (st) extendDraft(st.id);
  });
  function endPointer(e) {
    touches.delete(e.pointerId);
    // A tap (no dragging) on the map: show that county's details.
    if (e.type === "pointerup" && gesture && gesture.kind === "pan" && !gesture.moved && !touches.size) {
      const id = NR.hitCounty(gesture.start.x, gesture.start.y);
      if (id && id !== openCountyId) openCountyPanel(id);
      else closeCountyPanel();
    }
    if (draft) {
      // A tap on a station (no dragging) shows its county instead of building.
      const tappedStation = e.type === "pointerup" && !draft.moved && draft.chain.length < 2 && !draft.city ? draft.chain[0] : null;
      if (e.type === "pointerup") finishDraft();
      draft = null;
      pointer = null;
      if (tappedStation) openCountyPanel(NR.cityById[tappedStation].county);
    }
    if (!touches.size) {
      gesture = null;
      canvas.classList.remove("is-panning");
    }
  }
  canvas.addEventListener("pointerup", endPointer);
  canvas.addEventListener("pointercancel", endPointer);

  // Mouse wheel and trackpad pinch zoom around the pointer.
  canvas.addEventListener(
    "wheel",
    (e) => {
      if (!game || screen || cityKey) return;
      e.preventDefault();
      const p = at(e);
      NR.zoomAt(p.x, p.y, Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0015)));
    },
    { passive: false }
  );
  const zoomBy = (factor) => {
    const [cx, cy] = NR.viewCenter();
    NR.zoomAt(cx, cy, factor);
  };
  $("btn-zoom-in").addEventListener("click", () => zoomBy(1.5));
  $("btn-zoom-out").addEventListener("click", () => zoomBy(1 / 1.5));
  $("btn-zoom-fit").addEventListener("click", () => NR.resetCamera());

  // ---------- Buttons ----------
  function setPaused(v) {
    paused = v;
    $("btn-pause").innerHTML = v ? ICONS.play : ICONS.pause;
    $("btn-pause").setAttribute("aria-label", v ? "Resume" : "Pause");
    $("paused-pill").hidden = !v;
  }
  function setFast(v) {
    fast = v;
    $("btn-speed").textContent = v ? "2×" : "1×";
    $("btn-speed").setAttribute("aria-pressed", String(v));
  }

  $("btn-pause").addEventListener("click", () => game && setPaused(!paused));
  $("btn-speed").addEventListener("click", () => setFast(!fast));
  $("btn-menu").addEventListener("click", openStart);
  $("btn-start").addEventListener("click", startGame);
  $("btn-resume").addEventListener("click", () => show(null));
  $("btn-level-next").addEventListener("click", () => {
    NR.nextLevel(game);
    levelSave = NR.save(game);
    next();
  });
  document.querySelectorAll('input[name="mode"], input[name="style"]').forEach((el) => el.addEventListener("change", updateBestLine));

  $("lp-tunnel").addEventListener("click", () => {
    const line = NR.lineById(game, openLineId);
    if (line && NR.digTunnels(game, line)) {
      panelSig = "";
      renderLinePanel();
      toast(`Tunnels dug: trains on the ${lineName(line.color)} no longer slow down over the passes.`);
    }
  });
  $("lp-upgrade").addEventListener("click", () => {
    const line = NR.lineById(game, openLineId);
    if (line && NR.upgradeLine(game, line)) {
      renderLinePanel();
      toast(`The ${lineName(line.color)} now has high-speed track. High-speed and Bullet trains can run on it.`);
    }
  });
  $("lp-delete").addEventListener("click", () => {
    const btn = $("lp-delete");
    const city = cityKey && game.cities[cityKey];
    const line = city ? NR.cityLineById(city, openLineId) : NR.lineById(game, openLineId);
    if (!line) return;
    if (!btn.dataset.armed) {
      btn.dataset.armed = "1";
      btn.textContent = "Tap again to delete";
      return;
    }
    if (city) {
      NR.cityDeleteLine(game, cityKey, line);
      closeLinePanel();
      toast(`${cityLineName(line)} deleted. You got back half of what it cost.`);
      return;
    }
    NR.deleteLine(game, line);
    closeLinePanel();
    toast(`${lineName(line.color)} deleted. Its track and trains are free again.`);
  });
  $("lp-close").addEventListener("click", closeLinePanel);
  $("cp-close").addEventListener("click", closeCountyPanel);
  $("ct-close").addEventListener("click", closeContracts);
  $("btn-contracts").addEventListener("click", () => game && (contractsOpen() ? closeContracts() : openContracts()));
  $("cp-buy").addEventListener("click", () => {
    if (game && openCountyId && NR.unlockCounty(game, openCountyId, false)) renderCountyPanel();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (cityKey && $("line-panel").hidden) leaveCity();
      closeLinePanel();
      closeCountyPanel();
      closeContracts();
      closeBudgetPanel();
    }
    if (game && !screen && (e.key === "+" || e.key === "=")) zoomBy(1.5);
    if (game && !screen && (e.key === "-" || e.key === "_")) zoomBy(1 / 1.5);
    if (e.code === "Space" && game && !screen && e.target === document.body) {
      e.preventDefault();
      setPaused(!paused);
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && game && !screen && !game.over) setPaused(true);
  });

  // ---------- Light and dark themes ----------
  NR.readTheme();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", NR.readTheme);
  new MutationObserver(NR.readTheme).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  // ---------- Start ----------
  new ResizeObserver(layout).observe(app);
  new ResizeObserver(layout).observe($("hud-top"));
  new ResizeObserver(layout).observe($("bar"));
  setPaused(false);
  setFast(false);
  layout();

  // The train guide on the start screen.
  Object.entries(NR.TRAIN_TYPES).forEach(([key, t]) => {
    const li = document.createElement("li");
    const name = document.createElement("span");
    name.className = "guide-name";
    name.textContent = `${t.name} · ${NR.money(t.price)}`;
    const text = document.createElement("span");
    text.className = "guide-text";
    text.textContent = `${t.about}${t.repairs ? "" : ` ${t.seats} ${NR.unitOf(key)}.`}${t.unlockWeek ? ` From week ${t.unlockWeek + 1}.` : ""}`;
    li.append(name, text);
    $("train-guide").appendChild(li);
  });

  // Keep the current game when the page is updated while it is open.
  function boot(data) {
    if (data && data.game) {
      try {
        game = NR.load(data.game);
        if (game.v !== NR.SAVE_VERSION) throw new Error("Saved game is from an older version");
        levelSave = data.levelSave || NR.save(game);
        if (game.over) return openStart();
        renderLegend();
        show(null);
        setPaused(true);
        toast("The game was updated. Press play to carry on.");
        return;
      } catch (e) {
        game = null;
      }
    }
    openStart();
  }
  try {
    window.claude?.hot?.snapshot?.(() => (game ? { game: NR.save(game), levelSave } : {}));
  } catch (e) {
    /* not running inside the viewer */
  }
  const hot = window.claude && window.claude.hot;
  if (hot && hot.ready) hot.ready(boot);
  else boot((hot && hot.data) || {});
  requestAnimationFrame(frame);
})();
