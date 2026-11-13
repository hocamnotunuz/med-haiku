// National Railways pack test: plays a short game in one state, in a real browser, and takes
// screenshots. Every pack must pass it (and tools/check-pack.js) before it joins the game.
// See PACKS.md.
//
// Usage (from the national-railways folder):
//   node tools/test-pack.js NV                 test one pack
//   node tools/test-pack.js NV --out shots     put the screenshots here (default: test-out/NV)
//
// It needs Playwright with its Chromium browser (npm install playwright, then
// npx playwright install chromium). It serves the game itself on a free local port.
//
// What it does, in order:
//   1. Picks the state in Settings > Start in, and starts an Endless game.
//   2. Checks the start: the pack's start counties are owned, their stations are on the screen,
//      the state is open and its neighbors are closed.
//   3. Lays track by dragging between two stations, like a player, and checks a train runs.
//   4. Buys a county next to the ones you own.
//   5. Runs one week of game time: passengers must arrive and the game must not end.
//   6. Saves and loads the game.
//   7. Screenshots: Arcade and Classic looks, each light and dark; then a phone screen.
//   8. Opens each of the pack's city maps (if it has any), with a screenshot of each.
//   9. Starts Levels mode (if the pack has levels) and checks the first goals.
// Any error in the page fails the test. The screenshots are for a person to look over.
"use strict";
const fs = require("fs");
const path = require("path");
const http = require("http");

const GAME = path.join(__dirname, "..");
const args = process.argv.slice(2);
const CODE = (args.find((a) => !a.startsWith("--")) || "").toUpperCase();
const outAt = args.indexOf("--out");
const OUT = outAt >= 0 && args[outAt + 1] ? path.resolve(args[outAt + 1]) : path.join(GAME, "test-out", CODE);
if (!/^[A-Z]{2,3}$/.test(CODE) || !fs.existsSync(path.join(GAME, "packs", CODE, "pack.js"))) {
  console.error("Usage: node tools/test-pack.js <CODE> [--out <folder>]   (packs/<CODE>/pack.js must exist)");
  process.exit(2);
}
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch (e) {
  console.error("This test needs Playwright: npm install playwright, then npx playwright install chromium");
  process.exit(2);
}
fs.mkdirSync(OUT, { recursive: true });

// ---------- A tiny web server for the game folder ----------
// index.html gets the same doctype wrapper as the published page.
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json", ".svg": "image/svg+xml" };
function serve() {
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    const file = path.join(GAME, url === "/" ? "index.html" : url);
    if (!file.startsWith(GAME) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404);
      return res.end("not found");
    }
    let body = fs.readFileSync(file);
    if (path.basename(file) === "index.html")
      body = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></head><body>${body}</body></html>`;
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    res.end(body);
  });
  return new Promise((done) => server.listen(0, "127.0.0.1", () => done(server)));
}

// ---------- Reporting ----------
const results = [];
const pass = (step, note) => results.push({ ok: true, step, note }) && console.log(`  PASS  ${step}${note ? ` — ${note}` : ""}`);
const fail = (step, note) => results.push({ ok: false, step, note }) && console.log(`  FAIL  ${step} — ${note}`);
const warn = (step, note) => results.push({ ok: true, warn: true, step, note }) && console.log(`  WARN  ${step} — ${note}`);
const check = (step, ok, good, bad) => (ok ? pass(step, good) : fail(step, bad));

// ---------- Browser helpers ----------
function watchErrors(page, errors) {
  page.on("pageerror", (e) => errors.push(`page error: ${e.message}`));
  page.on("console", (m) => m.type() === "error" && errors.push(`console error: ${m.text()}`));
}
// Settings > Start in: pick this state, and a mode, then Start
async function startGame(page, mode) {
  if (!(await page.isVisible(`#home-${CODE}`))) await page.click(".settings summary").catch(() => {});
  if (!(await page.$(`#home-${CODE}`))) return false;
  await page.click(`label:has(#home-${CODE})`);
  await page.click(`label:has(#mode-${mode})`);
  await page.click("label:has(#style-type)").catch(() => {});
  await page.click("#btn-start");
  // The state's map and terrain load when the game starts
  await page.waitForFunction((code) => NR.debug.game && NR.debug.game.home === code && NR.isLoaded(code), CODE, { timeout: 15000 });
  await page.waitForTimeout(400);
  return true;
}
async function drag(page, ids) {
  const pts = await page.evaluate((ids) => ids.map((id) => NR.pos[id]), ids);
  await page.mouse.move(pts[0][0], pts[0][1]);
  await page.mouse.down();
  for (let i = 1; i < pts.length; i++) {
    const [a, b] = [pts[i - 1], pts[i]];
    for (let k = 1; k <= 12; k++) await page.mouse.move(a[0] + ((b[0] - a[0]) * k) / 12, a[1] + ((b[1] - a[1]) * k) / 12);
  }
  await page.mouse.up();
  await page.waitForTimeout(200);
}
// Midday, paused, no message on top: a clear picture
async function calm(page) {
  await page.evaluate(() => {
    const g = NR.debug.game;
    const day = NR.TUNING.dayLength;
    g.time = Math.ceil(g.time / day) * day + day * 0.5;
    const t = document.getElementById("toast");
    if (t) t.hidden = true;
  });
  // The pause button says "Pause" while the game runs
  if ((await page.isVisible("#btn-pause")) && (await page.getAttribute("#btn-pause", "aria-label")) === "Pause") await page.click("#btn-pause").catch(() => {});
}
// A drawn map has many colors; a blank or failed one has very few (a fine grid, so that small
// islands in a wide sea, like Hawaii's, are sampled too)
const mapColors = (page) =>
  page.evaluate(() => {
    const cv = document.getElementById("map");
    const g = cv.getContext("2d");
    const seen = new Set();
    for (let y = 0.025; y < 1; y += 0.025)
      for (let x = 0.025; x < 1; x += 0.025) {
        const d = g.getImageData(Math.floor(x * cv.width), Math.floor(y * cv.height), 1, 1).data;
        seen.add(`${d[0] >> 3},${d[1] >> 3},${d[2] >> 3}`);
      }
    return seen.size;
  });

(async () => {
  const server = await serve();
  const URL = `http://127.0.0.1:${server.address().port}/index.html`;
  const browser = await chromium.launch();
  const errors = [];
  console.log(`Pack test: ${CODE} (screenshots in ${path.relative(process.cwd(), OUT) || "."})\n`);
  try {
    // ---------- 1–2. Start in this state ----------
    const desk = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
    const page = await desk.newPage();
    watchErrors(page, errors);
    await page.goto(URL);
    await page.waitForTimeout(500);
    const choices = await page.$$eval('input[name="home"]', (els) => els.map((e) => e.value));
    if (!choices.includes(CODE)) {
      fail("start", `${CODE} is not a choice under Settings > Start in (choices: ${choices.join(", ")}). Is it in NR.PACK_LIST, with start counties?`);
      throw new Error("stop");
    }
    await startGame(page, "endless");
    const start = await page.evaluate((code) => {
      const g = NR.debug.game;
      const pack = NR.PACKS[code];
      const b = NR.view.box;
      const off = g.stations.filter((st) => {
        const p = NR.pos[st.id];
        return !p || p[0] < b.left || p[1] < b.top || p[0] > NR.view.w - b.right || p[1] > NR.view.h - b.bottom;
      });
      const closed = Object.keys(g.states).filter((c) => !g.states[c].open);
      return {
        name: NR.STATE_NAMES[code],
        want: pack.start.slice().sort().join(","),
        owned: g.owned.slice().sort().join(","),
        stations: g.stations.map((st) => st.id),
        wrongState: g.stations.filter((st) => NR.stateOf(st.id) !== code).map((st) => st.id),
        off: off.map((st) => st.id),
        open: Object.keys(g.states).filter((c) => g.states[c].open),
        whole: NR.MAP.regions.filter((r) => r.state === code).every((r) => g.owned.includes(r.id)),
        neighbors: NR.stateNeighbors(code),
        closedSays: closed.map((c) => NR.opensAfter(g, c)),
        regions: NR.MAP.regions.filter((r) => r.state === code).length,
      };
    }, CODE);
    pass("start", `${start.name}: ${start.regions} counties on the map`);
    check("start counties", start.owned === start.want, `owns ${start.owned}`, `owns ${start.owned}, but the pack's start is ${start.want}`);
    check("start stations", start.stations.length >= 2 && !start.wrongState.length, `${start.stations.join(", ")}`, start.stations.length < 2 ? `only ${start.stations.length} station(s): track needs two` : `stations outside ${start.name}: ${start.wrongState.join(", ")}`);
    check("stations on screen", !start.off.length, "the first camera shows every station", `off the screen at the start: ${start.off.join(", ")}`);
    // (a start that is the whole state, like Prince Edward Island's, opens its neighbors at once)
    const wantOpen = [CODE, ...(start.whole ? start.neighbors : [])].sort().join(", ");
    check("open states", start.open.slice().sort().join(", ") === wantOpen, start.whole ? `${start.name} and its neighbors are open (the start is all of ${start.name})` : `only ${start.name} is open`, `open at the start: ${start.open.join(", ")}`);
    if (!start.neighbors.length) warn("neighbors", `${start.name} has no neighbors in the game yet: owning it all opens nothing`);
    else pass("neighbors", `${start.neighbors.join(", ")} open once you own all of ${start.name}`);
    if (start.closedSays.some((t) => !t)) fail("closed states", "a closed state can't say what opens it");

    // ---------- 3. Lay track by dragging, like a player ----------
    const pair = await page.evaluate(() => {
      const g = NR.debug.game;
      const ids = g.stations.map((st) => st.id);
      const pairs = [];
      for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) pairs.push([ids[i], ids[j]]);
      // Like a player: two different types of place first (riders only go to a different type),
      // then the shortest track
      const same = (p) => (NR.cityById[p[0]].type === NR.cityById[p[1]].type ? 1 : 0);
      pairs.sort((p, q) => same(p) - same(q) || NR.trackMiles(p[0], p[1]) - NR.trackMiles(q[0], q[1]));
      const blocked = pairs.filter((p) => NR.chainBlocked(p)).map((p) => `${p[0]}–${p[1]}: ${NR.chainBlocked(p)}`);
      return { pair: pairs.find((p) => !NR.chainBlocked(p)), blocked };
    });
    blocked: {
      if (pair.blocked.length) warn("blocked track", pair.blocked.join(" | "));
      if (!pair.pair) {
        fail("lay track", "every pair of start stations is blocked: the player can't build at the start");
        break blocked;
      }
      await drag(page, pair.pair);
      const line = await page.evaluate(() => {
        const g = NR.debug.game;
        const l = g.lines[0];
        return l ? { stops: l.stops.join("–"), trains: NR.trainsOn(g, l).length, miles: NR.lineMiles(l) } : null;
      });
      check("lay track", line && line.trains >= 1, line && `${line.stops}, ${Math.round(line.miles)} mi, ${line.trains} train`, line ? "the line has no train" : `dragging ${pair.pair.join(" to ")} made no line`);
    }

    // ---------- 4. Buy a county next to the ones you own ----------
    const bought = await page.evaluate((code) => {
      const g = NR.debug.game;
      const next = NR.MAP.regions.find((r) => r.state === code && !g.owned.includes(r.id) && NR.countyStatus(g, r.id).ok);
      if (!next) return { none: true };
      const before = g.stations.length;
      const ok = NR.unlockCounty(g, next.id, false);
      return { id: next.id, name: next.name, ok, station: g.stations.length > before ? g.stations[g.stations.length - 1].id : null };
    }, CODE);
    if (bought.none) warn("buy a county", "no county can be bought next to the start (fine only if the start covers the whole state)");
    else check("buy a county", bought.ok && bought.station, `${bought.name || bought.id}, station ${bought.station}`, `couldn't buy ${bought.id}`);

    // ---------- 5. One week of game time ----------
    // This checks the pack's data, not the game's balance (the test bots do that), so crowds
    // are kept small, as if the player kept building: stations with no track don't overflow.
    const week = await page.evaluate(() => {
      const g = NR.debug.game;
      const steps = Math.round(NR.TUNING.weekLength / 0.05);
      const seen = {};
      for (let i = 0; i < steps && !g.over; i++) {
        g.stations.forEach((st) => st.waiting.length > 5 && (st.waiting.length = 5));
        NR.update(g, 0.05);
        for (const ev of NR.runtime.events.splice(0)) seen[ev.type] = (seen[ev.type] || 0) + 1;
      }
      return { delivered: g.delivered, over: g.over, week: g.week, budget: NR.money(g.states[g.home].budget, g.home), events: seen };
    });
    check("one week", !week.over && week.delivered > 0, `${week.delivered} passengers arrived; budget ${week.budget}`, week.over ? "the game ended within a week" : "no passengers arrived in a week");

    // ---------- 6. Save and load ----------
    const saved = await page.evaluate(() => {
      const g = NR.debug.game;
      const back = NR.load(NR.save(g));
      return back && back.home === g.home && back.owned.join() === g.owned.join() && back.lines.length === g.lines.length;
    });
    check("save and load", saved, "the game comes back the same", "the loaded game differs (home, counties or lines)");

    // ---------- 7. Both looks, light and dark ----------
    await calm(page);
    // The whole home state (not the whole map: once Hawaii is all yours, California opens across
    // the sea and the full view is mostly ocean)
    await page.evaluate((code) => {
      NR.resetCamera();
      const own = NR.CITIES.filter((c) => c.main && NR.countyById[c.county] && NR.countyById[c.county].state === code);
      if (own.length) NR.focusOn(own.map((c) => [c.lon, c.lat]));
    }, CODE);
    for (const look of ["arcade", "classic"])
      for (const scheme of ["light", "dark"]) {
        await page.emulateMedia({ colorScheme: scheme });
        await page.evaluate((look) => (document.documentElement.dataset.look = look), look);
        await page.waitForTimeout(500);
        const colors = await mapColors(page);
        const file = `${CODE}-${look}-${scheme}.png`;
        await page.screenshot({ path: path.join(OUT, file) });
        check(`picture ${look} ${scheme}`, colors >= 8, file, `the map looks blank (${colors} colors): ${file}`);
      }
    await page.emulateMedia({ colorScheme: "light" });
    await page.evaluate(() => (document.documentElement.dataset.look = "arcade"));

    // ---------- 8. City maps ----------
    const metros = await page.evaluate((code) => Object.keys(NR.PACKS[code].metros || {}), CODE);
    for (const key of metros) {
      const ready = await page.evaluate((key) => {
        const g = NR.debug.game;
        const c = NR.cityById[key];
        if (!c) return false;
        if (!g.owned.includes(c.county)) g.owned.push(c.county);
        if (!NR.stationById(g, key)) g.stations.push({ id: key, waiting: [], cargo: [], crowd: 0, spawnIn: 50, cargoIn: 50, born: -10 });
        g.states[NR.stateOf(key)].budget = Math.max(g.states[NR.stateOf(key)].budget, 1000);
        NR.runtime.dirty = true;
        NR.focusOn([[c.lon, c.lat]], 3);
        return true;
      }, key);
      if (!ready) {
        fail(`city map ${key}`, "no city with this id");
        continue;
      }
      await page.waitForTimeout(250);
      const p = await page.evaluate((key) => NR.pos[key], key);
      await page.mouse.click(p[0], p[1]);
      await page.waitForTimeout(150);
      const canOpen = await page.isVisible("#cp-city");
      if (canOpen) await page.click("#cp-city");
      await page.waitForTimeout(400);
      const inside = await page.evaluate((key) => NR.runtime.viewing === key, key);
      const colors = inside ? await mapColors(page) : 0;
      const file = `${CODE}-city-${key}.png`;
      if (inside) await page.screenshot({ path: path.join(OUT, file) });
      check(`city map ${key}`, inside && colors >= 6, file, !canOpen ? "no City map button on its county panel" : !inside ? "the city map didn't open" : `the city map looks blank: ${file}`);
      if (inside) {
        await page.click("#btn-back");
        await page.waitForTimeout(250);
      }
    }

    // ---------- 9. Levels ----------
    const hasLevels = await page.evaluate((code) => NR.hasLevels(code), CODE);
    if (hasLevels) {
      const lv = await desk.newPage();
      watchErrors(lv, errors);
      await lv.goto(URL);
      await lv.waitForTimeout(400);
      await startGame(lv, "levels");
      const goals = await lv.evaluate(() => {
        const g = NR.debug.game;
        return { mode: g.mode, goals: g.levelGoals.map((x) => NR.describeGoal(x)), areas: g.areas.length };
      });
      await calm(lv);
      await lv.screenshot({ path: path.join(OUT, `${CODE}-levels.png`) });
      check("levels", goals.mode === "levels" && goals.goals.length > 0 && goals.goals.every(Boolean), `level 1: ${goals.goals.join("; ")}`, `Levels mode didn't start with goals (mode ${goals.mode}, ${goals.goals.length} goals)`);
      await lv.close();
    } else pass("levels", "none in this pack (Levels is greyed out for it)");

    // ---------- 7b. A phone ----------
    const phone = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    const pp = await phone.newPage();
    watchErrors(pp, errors);
    await pp.goto(URL);
    await pp.waitForTimeout(500);
    await startGame(pp, "endless");
    await calm(pp);
    const fit = await pp.evaluate(() => {
      const g = NR.debug.game;
      const b = NR.view.box;
      const off = g.stations.filter((st) => {
        const p = NR.pos[st.id];
        return !p || p[0] < b.left || p[1] < b.top || p[0] > NR.view.w - b.right || p[1] > NR.view.h - b.bottom;
      });
      return { wide: document.documentElement.scrollWidth > window.innerWidth, off: off.map((st) => st.id) };
    });
    await pp.screenshot({ path: path.join(OUT, `${CODE}-phone.png`) });
    check("phone", !fit.wide && !fit.off.length, `${CODE}-phone.png`, fit.wide ? "the page is wider than the phone" : `stations off a phone screen at the start: ${fit.off.join(", ")}`);
    await phone.close();
    await desk.close();
  } catch (e) {
    if (e.message !== "stop") fail("test run", e.message.split("\n")[0]);
  }
  check("no errors in the page", !errors.length, "", errors.slice(0, 5).join(" | "));
  await browser.close();
  server.close();
  const failed = results.filter((r) => !r.ok);
  const warned = results.filter((r) => r.warn);
  console.log(`\n${failed.length ? "FAILED" : "PASSED"}: ${results.length - failed.length - warned.length} passed, ${warned.length} warnings, ${failed.length} failed`);
  process.exit(failed.length ? 1 : 0);
})();
