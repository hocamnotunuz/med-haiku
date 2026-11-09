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
  const settings = Object.assign({ mode: "endless", style: "type" }, store.get("nr-settings", {}));
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
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

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
    if (mode) mode.checked = true;
    if (style) style.checked = true;
    updateBestLine();
  }

  function startGame() {
    settings.mode = checkedValue("mode") || "endless";
    settings.style = checkedValue("style") || "type";
    store.set("nr-settings", settings);
    game = NR.newGame(settings.mode, settings.style);
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
        `You delivered ${plural(game.delivered, "passenger")} and earned a ${NR.money(T.levelReward)} bonus. ` +
        `Next up: ${nextLv.name}. Reach ${nextLv.goal} passengers in total. These counties can now be unlocked:`;
      NR.CITIES.filter((c) => nextLv.areas.includes(c.level)).forEach((c) => {
        const li = document.createElement("li");
        li.textContent = NR.countyById[c.county].name;
        list.appendChild(li);
      });
      $("btn-level-next").textContent = `Start level ${game.level + 2}`;
    } else {
      $("level-title").textContent = "All of California is connected";
      $("level-text").textContent =
        `You beat every level with ${plural(game.delivered, "passenger")} delivered. ` +
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

  function openOver(kind, at) {
    failAt = at || null;
    const wasLevels = game.mode === "levels";
    recordBest();
    show("over");
    const name = at ? NR.cityById[at].name : "";
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
        `in ${plural(weeks, "week")}. Your best with these settings: ${top}.`;
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
          NR.continueEndless(game, failAt);
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
      } else if (ev.type === "rush") {
        fx.push({ kind: "city", at: ev.at, t0: now });
        toast(`Rush hour in ${NR.cityById[ev.at].name}! Extra passengers for a few seconds. Commuter trains help.`);
      } else if (ev.type === "week") enqueue(() => openWeek(ev.week));
      else if (ev.type === "level") enqueue(openLevel);
      else if (ev.type === "fail") {
        queue.length = 0;
        openOver("fail", ev.at);
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
      box.textContent = "Passengers show the code of the city they want, like FRE for Fresno.";
      return;
    }
    Object.values(NR.PLACE_TYPES).forEach((t) => {
      const item = document.createElement("span");
      item.className = "legend-item";
      item.innerHTML = `<svg viewBox="0 0 12 12" aria-hidden="true">${SHAPES[t.shape]}</svg>`;
      item.append(t.name);
      box.appendChild(item);
    });
  }

  // ---------- Bottom bar: one round button per line color ----------
  let chipSig = "";
  function renderChips() {
    const sig = game ? [game.linesUnlocked, ...game.lines.map((l) => `${l.color}:${NR.trainsOn(game, l).length}`)].join(",") : "";
    if (sig === chipSig) return;
    chipSig = sig;
    const box = $("line-chips");
    box.textContent = "";
    if (!game) return;
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

  // ---------- County panel ----------
  function openCountyPanel(id) {
    closeLinePanel();
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
    setText("cp-status", st.owned ? `Yours · ${plural(onMap, "station")} on the map` : st.ok ? "Next to your network: can be unlocked" : `Locked · ${st.reason}`);
    setText(
      "cp-info",
      `${people} people. Main station: ${main.name} (${NR.PLACE_TYPES[main.type].name}).` +
        (towns.length ? ` Towns that appear once it is yours: ${towns.map((t) => t.name).join(", ")}.` : "")
    );
    $("cp-goal").hidden = !st.ok;
    $("cp-buy").hidden = !st.ok;
    if (st.ok) {
      setText("cp-goal-text", `Free unlock: deliver ${st.goal} passengers to your stations next to this county (${st.progress}/${st.goal}).`);
      $("cp-goal-fill").style.width = `${Math.min(100, (100 * st.progress) / st.goal)}%`;
      setText("cp-buy", `Unlock now · ${NR.money(st.price)}`);
      $("cp-buy").disabled = game.money < st.price;
    }
  }

  // ---------- Line options panel ----------
  let panelSig = "";
  function openLinePanel(id) {
    closeCountyPanel();
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
  function renderLinePanel() {
    const line = game && NR.lineById(game, openLineId);
    if (!line) return closeLinePanel();
    const trains = NR.trainsOn(game, line);
    const checks = Object.keys(NR.TRAIN_TYPES).map((k) => [k, NR.canAddTrain(game, line, k)]);
    const upgradePrice = NR.highSpeedUpgradePrice(line);
    const sig = JSON.stringify([
      line.stops,
      line.grade,
      trains.map((t) => t.id),
      checks.map(([k, c]) => [c.ok, c.reason, game.depot[k]]),
      game.money >= upgradePrice,
      game.extraSeats,
    ]);
    if (sig === panelSig) return;
    panelSig = sig;

    $("lp-dot").style.background = `var(--line-${line.color + 1})`;
    $("lp-name").textContent = lineName(line.color);
    $("lp-meta").textContent = `${plural(line.stops.length, "stop")} · ${NR.lineMiles(line)} mi · ${line.grade === "high" ? "high-speed" : "standard"} track`;
    $("lp-stops").textContent = line.stops.map((id) => NR.cityById[id].name).join(" – ");

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
      label.textContent = `${NR.TRAIN_TYPES[t.type].name} · ${NR.seatsOf(game, t)} seats`;
      li.append(
        label,
        button("To depot", "btn btn-small", () => {
          NR.removeTrain(game, t.id);
          renderLinePanel();
        })
      );
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
    up.disabled = game.money < upgradePrice;
    if (!$("lp-delete").dataset.armed) $("lp-delete").textContent = `Delete line (get back ${NR.money(NR.lineValue(line) * T.refundShare)})`;
  }

  // ---------- Every frame ----------
  function updateHud() {
    renderChips();
    if (!game) return;
    setText("score", game.delivered);
    const week = Math.min(Math.floor(game.time / T.weekLength), game.mode === "timed" ? T.timedWeeks - 1 : Infinity);
    setText("clock", `${week + 1} · ${NR.DAY_NAMES[Math.floor(game.time / T.dayLength) % 7]}`);
    if (game.mode === "levels") {
      setText("goal-label", "Goal");
      setText("goal", NR.LEVELS[game.level].goal);
    } else if (game.mode === "timed") {
      setText("goal-label", "Time left");
      setText("goal", clock(Math.max(0, T.timedWeeks * T.weekLength - game.time)));
    } else {
      setText("goal-label", "Best");
      setText("goal", best[bestKey("endless", game.style)] || 0);
    }
    const modeName =
      game.mode === "levels" ? `Level ${game.level + 1}: ${NR.LEVELS[game.level].name}` : game.mode === "timed" ? "Timed challenge" : "Endless";
    setText("mode-label", `${modeName} · ${game.style === "type" ? "Type of place" : "Specific city"}`);
    setText("trains-free", NR.depotCount(game));
    setText("counties", `${game.owned.length}/${NR.MAP.regions.length}`);
    if (openCountyId) renderCountyPanel();
    setText("money", NR.money(game.money));
    $("money").classList.toggle("negative", game.money < 0);
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
    NR.draw(ctx, game, { draft, pointer, fx, now, county: openCountyId });
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
    $("zoom-controls").style.bottom = `${h - barTop + 12}px`;
    $("toast").style.top = `${top}px`; // messages sit under the score strip, clear of the buttons
  }

  // ---------- Drawing lines with a finger or the mouse ----------
  function at(e) {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function extendDraft(id) {
    const chain = draft.chain;
    const lastId = chain[chain.length - 1];
    if (id === lastId) return;
    if (chain.length >= 2 && id === chain[chain.length - 2]) {
      draft.cost -= NR.trackPrice(id, lastId, draft.grade); // dragged back: undo the last stop
      chain.pop();
      return;
    }
    if (chain.includes(id)) return;
    if (draft.kind === "extend" && NR.lineById(game, draft.lineId).stops.includes(id)) return;
    const cost = NR.trackPrice(lastId, id, draft.grade);
    const left = game.money - draft.cost;
    if (cost > left) {
      toast(
        `Not enough money: track from ${NR.cityById[lastId].name} to ${NR.cityById[id].name} costs ${NR.money(cost)}, and you have ${NR.money(Math.max(0, left))}.`
      );
      return;
    }
    chain.push(id);
    draft.cost += cost;
  }

  function finishDraft() {
    if (!draft) return;
    const d = draft;
    draft = null;
    pointer = null;
    if (!game || d.chain.length < 2) return;
    if (game.money < d.cost) {
      toast(`Not enough money to build this: it costs ${NR.money(d.cost)}.`);
      return;
    }
    if (d.kind === "new") {
      if (NR.freeColor(game) !== d.color) return;
      const line = NR.createLine(game, d.chain, d.color);
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
    if (touches.size === 2) return startPinch();
    if (touches.size > 2) return;
    if (game.over) return;
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
    const st = NR.hitStation(game, pointer.x, pointer.y, grab);
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
      const tappedStation = e.type === "pointerup" && !draft.moved && draft.chain.length < 2 ? draft.chain[0] : null;
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
      if (!game || screen) return;
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

  $("lp-upgrade").addEventListener("click", () => {
    const line = NR.lineById(game, openLineId);
    if (line && NR.upgradeLine(game, line)) {
      renderLinePanel();
      toast(`The ${lineName(line.color)} now has high-speed track. High-speed and Bullet trains can run on it.`);
    }
  });
  $("lp-delete").addEventListener("click", () => {
    const btn = $("lp-delete");
    const line = NR.lineById(game, openLineId);
    if (!line) return;
    if (!btn.dataset.armed) {
      btn.dataset.armed = "1";
      btn.textContent = "Tap again to delete";
      return;
    }
    NR.deleteLine(game, line);
    closeLinePanel();
    toast(`${lineName(line.color)} deleted. Its track and trains are free again.`);
  });
  $("lp-close").addEventListener("click", closeLinePanel);
  $("cp-close").addEventListener("click", closeCountyPanel);
  $("cp-buy").addEventListener("click", () => {
    if (game && openCountyId && NR.unlockCounty(game, openCountyId, false)) renderCountyPanel();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLinePanel();
      closeCountyPanel();
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
  Object.values(NR.TRAIN_TYPES).forEach((t) => {
    const li = document.createElement("li");
    const name = document.createElement("span");
    name.className = "guide-name";
    name.textContent = `${t.name} · ${NR.money(t.price)}`;
    const text = document.createElement("span");
    text.className = "guide-text";
    text.textContent = `${t.about} ${t.seats} seats.${t.unlockWeek ? ` From week ${t.unlockWeek + 1}.` : ""}`;
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
