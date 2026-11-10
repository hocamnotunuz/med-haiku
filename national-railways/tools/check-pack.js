// National Railways pack checker: inspects state packs (packs/<code>/pack.js) for mistakes.
// Every pack must pass it with no errors before it joins the game. See PACKS.md.
//
// Usage (from the national-railways folder):
//   node tools/check-pack.js            check every pack
//   node tools/check-pack.js NV OR      check these packs
//
// Errors must be fixed. Warnings are worth a look (they can be fine: a coastal station a little
// off its county's simplified coastline, a pass with only hills nearby).
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const GAME = path.join(__dirname, "..");
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
const load = (f) => vm.runInContext(fs.readFileSync(path.join(GAME, f), "utf8"), ctx, { filename: f });
load("js/map.js");
load("js/terrain.js");
load("js/packs.js");
const NR = ctx.NR;
const missing = NR.PACK_LIST.filter((code) => !fs.existsSync(path.join(GAME, "packs", code, "pack.js")));
NR.PACK_LIST.filter((code) => !missing.includes(code)).forEach((code) => load(`packs/${code}/pack.js`));
for (const f of ["js/cities.js", "js/game.js", "js/metro.js"]) load(f);
const T = NR.TERRAIN;

// ---------- Helpers ----------
const MI_LAT = 69.05;
const miLon = (lat) => 69.17 * Math.cos((lat * Math.PI) / 180);
const miles = (a, b) => Math.hypot((a.lon - b.lon) * miLon((a.lat + b.lat) / 2), (a.lat - b.lat) * MI_LAT);
function inRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
    const xi = ring[i], yi = ring[i + 1], xj = ring[j], yj = ring[j + 1];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
const inRings = (rings, lon, lat) => rings.reduce((n, ring) => (inRing(lon, lat, ring) ? !n : n), false);
// Miles from a point to the nearest edge of some rings or lines (flat longitude, latitude lists).
function milesToEdges(lists, p, closed) {
  let best = Infinity;
  const k = miLon(p.lat);
  for (const list of lists)
    for (let i = 0; i + 3 < list.length + (closed ? 2 : 0); i += 2) {
      const ax = list[i], ay = list[i + 1];
      const bx = list[(i + 2) % list.length], by = list[(i + 3) % list.length];
      const dx = (bx - ax) * k, dy = (by - ay) * MI_LAT;
      const px = (p.lon - ax) * k, py = (p.lat - ay) * MI_LAT;
      const t = dx || dy ? Math.max(0, Math.min(1, (px * dx + py * dy) / (dx * dx + dy * dy))) : 0;
      best = Math.min(best, Math.hypot(px - t * dx, py - t * dy));
    }
  return best;
}
// Terrain height class at a point: 0 flat, 1 hills, 2 mountains, 3 high mountains
const heights = (() => {
  const out = new Uint8Array(T.cols * T.rows);
  let i = 0;
  for (const m of T.grid.matchAll(/([A-H])(\d*)/g)) {
    const n = m[2] ? +m[2] : 1;
    out.fill((m[1].charCodeAt(0) - 65) & 3, i, i + n);
    i += n;
  }
  return out;
})();
function heightNear(lon, lat, cells) {
  let most = 0;
  for (let dx = -cells; dx <= cells; dx++)
    for (let dy = -cells; dy <= cells; dy++) {
      const c = Math.floor((lon + dx * T.step - T.box[0]) / T.step), r = Math.floor((T.box[3] - (lat + dy * T.step)) / T.step);
      if (c >= 0 && r >= 0 && c < T.cols && r < T.rows) most = Math.max(most, heights[r * T.cols + c]);
    }
  return most;
}
const B64 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

// Every station and town id in every pack (ids must be unique across the whole game)
const allIds = new Map();
for (const code of NR.PACK_LIST) {
  const p = NR.PACKS[code];
  if (!p) continue;
  for (const x of [...(p.stations || []), ...(p.towns || [])]) allIds.set(x.id, (allIds.get(x.id) || []).concat(code));
}

// ---------- The checks ----------
function check(code) {
  const errors = [];
  const warnings = [];
  const err = (m) => errors.push(m);
  const warn = (m) => warnings.push(m);
  const p = NR.PACKS[code];
  if (!p) return { errors: [`packs/${code}/pack.js is missing or didn't call NR.addPack`], warnings };
  const state = NR.MAP.states.find((s) => s.code === code);
  if (!state) err(`${code} is not a state in js/map.js (run tools/build-map.js with it first)`);
  if (p.code !== code) err(`code is "${p.code}" but the folder is ${code}`);
  if (state && p.name !== state.name) err(`name is "${p.name}" but the map calls it "${state.name}"`);
  for (const field of ["stations", "towns", "passes", "bridges"]) if (!Array.isArray(p[field])) err(`${field} must be a list`);
  if (p.biomes && typeof p.biomes !== "object") err("biomes must be an object");
  if (errors.length) return { errors, warnings };

  const regions = NR.MAP.regions.filter((r) => r.state === code);
  const regionById = Object.fromEntries(NR.MAP.regions.map((r) => [r.id, r]));
  const areas = new Set((p.levels || []).flatMap((l) => l.areas || []));
  const places = []; // stations and towns, for the spacing check

  // A station or town: its fields, and that it sits in its county
  function place(x, kind) {
    const label = `${kind} ${x.id || "?"} (${x.name || "no name"})`;
    if (typeof x.id !== "string" || !/^[A-Z][A-Z0-9]{1,3}$/.test(x.id)) err(`${label}: id must be 2-4 capital letters or digits, starting with a letter`);
    if ((allIds.get(x.id) || []).length > 1) err(`${label}: id ${x.id} is used more than once (${allIds.get(x.id).join(", ")})`);
    if (typeof x.name !== "string" || !x.name.trim()) err(`${label}: needs a name`);
    if (!NR.PLACE_TYPES[x.type]) err(`${label}: type must be one of ${Object.keys(NR.PLACE_TYPES).join(", ")}`);
    if (!Number.isInteger(x.size) || x.size < 1 || x.size > 5) err(`${label}: size must be a whole number from 1 to 5`);
    if (typeof x.lat !== "number" || typeof x.lon !== "number") return err(`${label}: needs lat and lon numbers`);
    const r = regionById[x.county];
    if (!r) return err(`${label}: county "${x.county}" is not a region in js/map.js`);
    if (r.state !== code) err(`${label}: county ${x.county} is in ${r.state}, not ${code}`);
    if (!inRings(r.rings, x.lon, x.lat)) {
      const d = milesToEdges(r.rings, x, true);
      if (d > 3) err(`${label}: ${d.toFixed(1)} miles outside its county ${x.county}`);
      else warn(`${label}: just outside its county's outline (${d.toFixed(1)} mi), fine for a coastal or border town`);
    }
    for (const f of ["port", "airport"]) if (x[f] !== undefined && (typeof x[f] !== "string" || !x[f].trim())) err(`${label}: ${f} must be its name`);
    places.push({ ...x, kind });
  }

  // Main stations: exactly one per region
  for (const x of p.stations) {
    place(x, "station");
    if (x.main !== true) err(`station ${x.id}: main stations need main: true`);
    if (typeof x.pop !== "number" || x.pop <= 0) err(`station ${x.id}: pop (county population in thousands) is missing`);
    if (x.level !== undefined && !areas.has(x.level)) err(`station ${x.id}: level "${x.level}" isn't an area of any level in this pack`);
  }
  for (const r of regions) {
    const n = p.stations.filter((x) => x.county === r.id).length;
    if (n === 0) err(`region ${r.id} (${r.name}) has no main station`);
    if (n > 1) err(`region ${r.id} (${r.name}) has ${n} main stations (one only; the others can be towns)`);
  }
  // Towns
  for (const x of p.towns) {
    place(x, "town");
    if (x.main) err(`town ${x.id}: towns must not be main: true`);
    if (x.level !== undefined) err(`town ${x.id}: towns have no level (they follow their county)`);
  }
  const perRegion = p.towns.length / Math.max(1, regions.length);
  if (perRegion < 1) warn(`only ${p.towns.length} towns for ${regions.length} regions (California has about 1.5 per region)`);
  // Spacing: two places very close together are hard to tell apart on the map
  for (let i = 0; i < places.length; i++)
    for (let j = i + 1; j < places.length; j++) {
      const d = miles(places[i], places[j]);
      if (d < 4) warn(`${places[i].id} and ${places[j].id} are only ${d.toFixed(1)} miles apart`);
    }

  // Levels and the starting counties
  if (p.levels) {
    const goalKinds = new Set(["totalPassengers", "counties", "cargo", "connect", "hasTrain"]);
    p.levels.forEach((l, i) => {
      const label = `level ${i + 1} (${l.name || "no name"})`;
      if (!l.name) err(`${label}: needs a name`);
      if (!Array.isArray(l.areas) || !l.areas.length) err(`${label}: needs areas`);
      for (const a of l.areas || []) if (!p.stations.some((x) => x.level === a)) err(`${label}: no station has level "${a}"`);
      for (const g of l.goals || []) {
        if (!goalKinds.has(g.kind)) err(`${label}: unknown goal kind "${g.kind}"`);
        if (g.kind === "connect") for (const id of [g.a, g.b]) if (!NR.cityById[id]) err(`${label}: connect goal names unknown station ${id}`);
        if (g.kind === "hasTrain" && !NR.TRAIN_TYPES[g.train]) err(`${label}: unknown train type ${g.train}`);
        if (g.kind === "cargo" && !["produce", "containers", "trucks"].includes(g.cargo)) err(`${label}: unknown cargo ${g.cargo}`);
      }
    });
    const unlevelled = p.stations.filter((x) => !x.level).map((x) => x.id);
    if (unlevelled.length) err(`with levels, every station needs a level; missing: ${unlevelled.join(", ")}`);
  }
  if (p.start) {
    for (const id of p.start) if (!regionById[id] || regionById[id].state !== code) err(`start county ${id} is not a region of ${code}`);
    const ok = p.start.every((id, i) => i === 0 || p.start.slice(0, i).some((o) => (regionById[id] ? regionById[id].neighbors : []).includes(o)));
    if (!ok) warn("the starting counties should join up (each next to an earlier one)");
  }

  // City maps
  for (const [key, m] of Object.entries(p.metros || {})) {
    const label = `city map ${key}`;
    const main = p.stations.find((x) => x.id === key);
    if (!main) err(`${label}: must be keyed by one of this pack's main stations`);
    if (!m.name) err(`${label}: needs a name`);
    const stops = m.stops || [];
    if (stops.length < 6) err(`${label}: needs at least 6 stops`);
    const ids = new Set();
    for (const s of stops) {
      if (ids.has(s.id)) err(`${label}: stop id ${s.id} is used twice`);
      ids.add(s.id);
      if (!/^[A-Z]{2,4}$/.test(s.id || "")) err(`${label}: stop id ${s.id} must be 2-4 capital letters`);
      if (typeof s.lat !== "number" || typeof s.lon !== "number") err(`${label}: stop ${s.id} needs lat and lon`);
      if (main && miles(s, main) > 25) err(`${label}: stop ${s.id} is ${miles(s, main).toFixed(0)} miles from ${main.name}`);
    }
    if (stops.filter((s) => s.hub).length !== 1) err(`${label}: exactly one stop must be the hub (where trains stop)`);
    if (stops.some((s) => s.cable) && stops.filter((s) => s.cable).length < 2) err(`${label}: cable cars need at least 2 cable stops`);
    const geo = T.cities && T.cities[key];
    if (!geo) warn(`${label}: no hills and water yet (run tools/build-terrain.js)`);
    else
      for (const s of stops) {
        const [x0, y0, x1, y1] = geo.box;
        if (s.lon < x0 || s.lon > x1 || s.lat < y0 || s.lat > y1) {
          err(`${label}: stop ${s.id} is outside the city's map area`);
          continue;
        }
        const c = Math.min(geo.cols - 1, Math.floor((s.lon - x0) / geo.step)), r = Math.min(geo.rows - 1, Math.floor((y1 - s.lat) / geo.step));
        if (geo.elev[r * geo.cols + c] === "~") warn(`${label}: stop ${s.id} (${s.name}) seems to be on water`);
        else if (B64.indexOf(geo.elev[r * geo.cols + c]) < 0) err(`${label}: bad elevation data at ${s.id}`);
      }
  }

  // Passes and bridges: [name, latitude, longitude], in or near the state
  const land = NR.MAP.stateLand[code];
  const near = (lat, lon, mi) => inRings(land, lon, lat) || milesToEdges(land, { lat, lon }, true) <= mi;
  const names = new Set();
  for (const [kind, list] of [
    ["pass", p.passes],
    ["bridge", p.bridges],
  ])
    for (const item of list) {
      const [name, lat, lon] = item;
      if (typeof name !== "string" || typeof lat !== "number" || typeof lon !== "number" || item.length !== 3) {
        err(`${kind} ${JSON.stringify(item)}: must be [name, latitude, longitude]`);
        continue;
      }
      if (names.has(name)) err(`${kind} "${name}" is listed twice`);
      names.add(name);
      if (!near(lat, lon, 10)) err(`${kind} "${name}" is more than 10 miles from ${code}`);
      if (kind === "pass" && heightNear(lon, lat, 2) < 2) warn(`pass "${name}" has no mountains within ~7 miles`);
      if (kind === "bridge") {
        const lakeMi = milesToEdges(T.lakes.map((l) => l.ring), { lat, lon }, true);
        const riverMi = milesToEdges(T.rivers.map((r) => r.line), { lat, lon }, false);
        const coastMi = milesToEdges(NR.MAP.land, { lat, lon }, true);
        const inBay = NR.BAYS.some((b) => inRing(lon, lat, b.ring));
        if (Math.min(lakeMi, riverMi, coastMi) > 3 && !inBay) warn(`bridge "${name}" is more than 3 miles from any river, lake, bay or coast on the map`);
      }
    }
  for (const b of p.bays || []) {
    if (!b.name) err("every bay needs a name");
    if (!Array.isArray(b.ring) || b.ring.length < 6 || b.ring.length % 2) err(`bay ${b.name}: ring must be longitude, latitude pairs (at least 3)`);
  }

  // Biomes (cartoon look)
  const seen = new Map();
  for (const [kind, ids] of Object.entries(p.biomes || {})) {
    if (!["forest", "wooded", "dry"].includes(kind)) err(`biomes: unknown kind "${kind}" (forest, wooded or dry)`);
    for (const id of ids) {
      if (!regionById[id] || regionById[id].state !== code) err(`biomes.${kind}: ${id} is not a region of ${code}`);
      if (seen.has(id)) err(`biomes: ${id} is listed as both ${seen.get(id)} and ${kind}`);
      seen.set(id, kind);
    }
  }
  return { errors, warnings, summary: `${p.stations.length} stations, ${p.towns.length} towns, ${Object.keys(p.metros || {}).length} city maps, ${p.passes.length} passes, ${p.bridges.length} bridges` };
}

// ---------- Report ----------
const codes = process.argv.length > 2 ? process.argv.slice(2).map((c) => c.toUpperCase()) : NR.PACK_LIST;
let failed = 0;
for (const code of codes) {
  if (!NR.PACK_LIST.includes(code)) {
    console.log(`\n${code}: not in NR.PACK_LIST (js/packs.js)`);
    failed++;
    continue;
  }
  const { errors, warnings, summary } = check(code);
  console.log(`\n${code}: ${errors.length ? "FAILED" : "passed"}${summary ? ` (${summary})` : ""}, ${errors.length} errors, ${warnings.length} warnings`);
  errors.forEach((m) => console.log(`  error:   ${m}`));
  warnings.forEach((m) => console.log(`  warning: ${m}`));
  if (errors.length) failed++;
}
console.log(failed ? `\n${failed} pack(s) failed.` : "\nAll packs passed.");
process.exit(failed ? 1 : 0);
