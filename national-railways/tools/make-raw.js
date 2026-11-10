// National Railways: makes the "raw" facts a pack is built from, so nothing has to be typed from
// memory. For one state it writes, into packs/<code>/raw/ (not saved to git: run it again):
//   counties.json  every county region on the state's map: id, name, the counties in it (FIPS),
//                  2020 population (thousands), label point and neighbors
//   places.json    every city and town (incorporated places, with 2020 populations) and
//                  census-designated places (unincorporated communities, no population in the
//                  source), with location and the county region they are in, biggest first
//
// Sources (U.S. Census Bureau, public domain), downloaded once into the cache folder:
//   co-est2023-alldata.csv        county totals (ESTIMATESBASE2020: the 2020 census base)
//   sub-est2023_<fips>.csv        city and town totals (ESTIMATESBASE2020)
//   2023_gaz_place_<fips>.txt     Gazetteer: where each place is
//
// Usage (from the national-railways folder, after tools/build-map.js has made the state's map):
//   node tools/make-raw.js <cache folder> WA
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const https = require("https");

const GAME = path.join(__dirname, "..");
const [cacheArg, codeArg] = process.argv.slice(2);
const CODE = (codeArg || "").toUpperCase();
if (!cacheArg || !CODE) {
  console.error("Usage: node tools/make-raw.js <cache folder> <state code>");
  process.exit(2);
}
const CACHE = path.resolve(cacheArg, "census");
fs.mkdirSync(CACHE, { recursive: true });

// ---------- The state's map ----------
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(GAME, "js/packs.js"), "utf8"), ctx);
const mapFile = path.join(GAME, "packs", CODE, "map.js");
if (!fs.existsSync(mapFile)) {
  console.error(`packs/${CODE}/map.js is missing: run tools/build-map.js with ${CODE} first`);
  process.exit(1);
}
vm.runInContext(fs.readFileSync(mapFile, "utf8"), ctx);
const map = ctx.NR.PACK_MAPS[CODE];
const regions = map.regions.filter((r) => r.state === CODE);
const FIPS = regions[0].fips[0].slice(0, 2);

// ---------- Downloads ----------
function get(url, file) {
  const out = path.join(CACHE, file);
  if (fs.existsSync(out) && fs.statSync(out).size > 0) return Promise.resolve(out);
  console.log(`downloading ${url}`);
  return new Promise((done, fail) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) return fail(new Error(`${url}: HTTP ${res.statusCode}`));
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          fs.writeFileSync(out, Buffer.concat(chunks));
          done(out);
        });
      })
      .on("error", fail);
  });
}
// A simple CSV line split (the Census files have no quoted commas in the fields we use)
const csv = (text) => text.split(/\r?\n/).filter(Boolean).map((l) => l.split(","));

function inRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
    const xi = ring[i], yi = ring[i + 1], xj = ring[j], yj = ring[j + 1];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
const regionAt = (lon, lat) => regions.find((r) => r.rings.reduce((n, ring) => (inRing(lon, lat, ring) ? !n : n), false));
// Places on the coast can sit just off the simplified outline: the nearest region label instead
const nearestRegion = (lon, lat) => regions.slice().sort((a, b) => Math.hypot(a.label[0] - lon, a.label[1] - lat) - Math.hypot(b.label[0] - lon, b.label[1] - lat))[0];

(async () => {
  const base = "https://www2.census.gov";
  const counties = await get(`${base}/programs-surveys/popest/datasets/2020-2023/counties/totals/co-est2023-alldata.csv`, "co-est2023-alldata.csv");
  const subs = await get(`${base}/programs-surveys/popest/datasets/2020-2023/cities/totals/sub-est2023_${FIPS}.csv`, `sub-est2023_${FIPS}.csv`);
  const gaz = await get(`${base}/geo/docs/maps-data/data/gazetteer/2023_Gazetteer/2023_gaz_place_${FIPS}.txt`, `2023_gaz_place_${FIPS}.txt`);

  // County populations (2020 census base), then each region's total
  const rows = csv(fs.readFileSync(counties, "latin1"));
  const head = rows[0];
  const col = (name) => head.indexOf(name);
  const countyPop = {};
  for (const r of rows.slice(1)) if (r[col("SUMLEV")] === "050" && r[col("STATE")] === FIPS) countyPop[r[col("STATE")] + r[col("COUNTY")]] = { name: r[col("CTYNAME")], pop: +r[col("ESTIMATESBASE2020")] };
  const outCounties = regions.map((r) => ({
    id: r.id,
    name: r.name,
    counties: r.fips.map((f) => ({ fips: f, name: countyPop[f] ? countyPop[f].name : "?", pop: countyPop[f] ? countyPop[f].pop : null })),
    pop: Math.round(r.fips.reduce((n, f) => n + (countyPop[f] ? countyPop[f].pop : 0), 0) / 1000), // thousands, like a pack's pop
    label: r.label,
    neighbors: r.neighbors,
  }));
  const missing = outCounties.flatMap((r) => r.counties.filter((c) => c.pop === null).map((c) => c.fips));
  if (missing.length) console.warn(`no population for counties ${missing.join(", ")}`);

  // City and town populations: incorporated places (summary level 162)
  const srows = csv(fs.readFileSync(subs, "latin1"));
  const sh = srows[0];
  const scol = (name) => sh.indexOf(name);
  const placePop = {};
  for (const r of srows.slice(1)) if (r[scol("SUMLEV")] === "162") placePop[FIPS + r[scol("PLACE")]] = +r[scol("ESTIMATESBASE2020")];

  // Where each place is (Gazetteer), and its county region
  const glines = fs.readFileSync(gaz, "latin1").split(/\r?\n/).filter(Boolean).map((l) => l.split("\t").map((x) => x.trim()));
  const gh = glines[0];
  const gcol = (name) => gh.indexOf(name);
  const places = glines.slice(1).map((r) => {
    const lat = +r[gcol("INTPTLAT")], lon = +r[gcol("INTPTLONG")];
    const inside = regionAt(lon, lat);
    const region = inside || nearestRegion(lon, lat);
    const full = r[gcol("NAME")];
    const kind = / CDP$/.test(full) ? "cdp" : / (city|town)$/.test(full) ? full.match(/ (city|town)$/)[1] : "place";
    return {
      name: full.replace(/ (city|town|CDP|village)$/, ""),
      kind, // city or town (incorporated) or cdp (an unincorporated community)
      pop: placePop[r[gcol("GEOID")]] !== undefined ? placePop[r[gcol("GEOID")]] : null, // people, 2020 census base (none for CDPs)
      lat: +lat.toFixed(4),
      lon: +lon.toFixed(4),
      county: region.id,
      offMap: !inside || undefined, // just off the simplified outline (on the coast): county is the nearest
      geoid: r[gcol("GEOID")],
    };
  });
  places.sort((a, b) => (b.pop || 0) - (a.pop || 0) || a.name.localeCompare(b.name));

  const out = path.join(GAME, "packs", CODE, "raw");
  fs.mkdirSync(out, { recursive: true });
  const note = "Made by tools/make-raw.js from U.S. Census Bureau data (public domain). Do not edit by hand.";
  fs.writeFileSync(path.join(out, "counties.json"), JSON.stringify({ note, source: "co-est2023-alldata.csv, ESTIMATESBASE2020", regions: outCounties }, null, 1));
  fs.writeFileSync(path.join(out, "places.json"), JSON.stringify({ note, source: `sub-est2023_${FIPS}.csv (ESTIMATESBASE2020) and 2023_gaz_place_${FIPS}.txt`, places }, null, 0).replace(/\},\{/g, "},\n{"));
  const withPop = places.filter((p) => p.pop !== null).length;
  console.log(`${CODE}: ${outCounties.length} county regions, ${places.length} places (${withPop} with populations) -> packs/${CODE}/raw/`);
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
