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
// For a Canadian province (its area in packs/index.js has country "CAN") it writes the same files
// from Canadian sources, plus parks.json:
//   counties.json  every region (census divisions: in British Columbia, regional districts) with
//                  its 2021 census population
//   places.json    every official populated place in the province's Geographical Names: cities,
//                  towns, villages, district municipalities, communities and unincorporated places,
//                  with location and region. pop is the municipality's 2021 population when the
//                  place is one (popSource "municipality"), else its population centre's (built-up
//                  area of 1,000 people or more, popSource "population centre"), else null. Where two
//                  municipalities share a name (the City and the Township of Langley), both are
//                  listed under municipalities and pop is left out.
//   parks.json     national and provincial parks and other protected areas, with location (to
//                  place scenic stations at real sights)
// Sources: Statistics Canada, 2021 Census tables 98-10-0007 (census divisions), 98-10-0002 (census
// subdivisions: municipalities) and 98-10-0011 (population centres), Statistics Canada Open
// Licence; Natural Resources Canada, Canadian Geographical Names Database (geogratis.gc.ca),
// Open Government Licence – Canada.
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
const CA_CACHE = path.resolve(cacheArg, "canada");

// ---------- The state's map ----------
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(GAME, "js/packs.js"), "utf8"), ctx);
vm.runInContext(fs.readFileSync(path.join(GAME, "packs/index.js"), "utf8"), ctx);
const CANADIAN = !!(ctx.NR.AREAS[CODE] && ctx.NR.AREAS[CODE].country === "CAN");
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
function get(url, file, dir = CACHE) {
  fs.mkdirSync(dir, { recursive: true });
  const out = path.join(dir, file);
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
// The region whose outline is nearest (a place just off a simplified coast belongs to the shore it
// sits by, not to the region whose label is nearest)
function nearestRegion(lon, lat) {
  const k = Math.cos((lat * Math.PI) / 180);
  const toRing = (ring) => {
    let d = Infinity;
    for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
      const ax = ring[j] * k, ay = ring[j + 1], bx = ring[i] * k, by = ring[i + 1], px = lon * k, py = lat;
      const dx = bx - ax, dy = by - ay, t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1)));
      d = Math.min(d, Math.hypot(px - ax - t * dx, py - ay - t * dy));
    }
    return d;
  };
  let best = null, far = Infinity;
  for (const r of regions) {
    const d = Math.min(...r.rings.map(toRing));
    if (d < far) (far = d), (best = r);
  }
  return best;
}

async function usRaw() {
  const base = "https://www2.census.gov";
  const counties = await get(`${base}/programs-surveys/popest/datasets/2020-2023/counties/totals/co-est2023-alldata.csv`, "co-est2023-alldata.csv");
  // (the Census Bureau names this file without a leading zero: sub-est2023_8.csv for Colorado)
  const subs = await get(`${base}/programs-surveys/popest/datasets/2020-2023/cities/totals/sub-est2023_${Number(FIPS)}.csv`, `sub-est2023_${FIPS}.csv`);
  const gaz = await get(`${base}/geo/docs/maps-data/data/gazetteer/2023_Gazetteer/2023_gaz_place_${FIPS}.txt`, `2023_gaz_place_${FIPS}.txt`);

  // County populations (2020 census base), then each region's total
  const rows = csv(fs.readFileSync(counties, "latin1"));
  const head = rows[0];
  const col = (name) => head.indexOf(name);
  const countyPop = {};
  for (const r of rows.slice(1)) if (r[col("SUMLEV")] === "050" && r[col("STATE")] === FIPS) countyPop[r[col("STATE")] + r[col("COUNTY")]] = { name: r[col("CTYNAME")], pop: +r[col("ESTIMATESBASE2020")] };
  // Counties that changed after the map's (2017) boundaries, as in build-map.js: Alaska's
  // Valdez-Cordova split in 2019 (Chugach plus Copper River), and Connecticut's old counties
  // (planning regions since 2022) come from the 2010–2020 county totals (POPESTIMATE2020)
  const SPLIT = { "02261": { name: "Valdez-Cordova Census Area", parts: ["02063", "02066"] } };
  for (const [was, { name, parts }] of Object.entries(SPLIT))
    if (was.slice(0, 2) === FIPS && !countyPop[was] && parts.every((f) => countyPop[f])) countyPop[was] = { name, pop: parts.reduce((n, f) => n + countyPop[f].pop, 0) };
  if (regions.some((r) => r.fips.some((f) => !countyPop[f]))) {
    const old = await get(`${base}/programs-surveys/popest/datasets/2010-2020/counties/totals/co-est2020-alldata.csv`, "co-est2020-alldata.csv");
    const orows = csv(fs.readFileSync(old, "latin1"));
    const ocol = (name) => orows[0].indexOf(name);
    for (const r of orows.slice(1))
      if (r[ocol("SUMLEV")] === "050" && r[ocol("STATE")] === FIPS && !countyPop[r[ocol("STATE")] + r[ocol("COUNTY")]])
        countyPop[r[ocol("STATE")] + r[ocol("COUNTY")]] = { name: r[ocol("CTYNAME")], pop: +r[ocol("POPESTIMATE2020")] };
  }
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
  const glines = fs.readFileSync(gaz, "utf8").split(/\r?\n/).filter(Boolean).map((l) => l.split("\t").map((x) => x.trim()));
  const gh = glines[0];
  const gcol = (name) => gh.indexOf(name);
  const places = glines.slice(1).map((r) => {
    // (Alaska's places past the date line, like Shemya, go just west of -180° as on the map)
    const lat = +r[gcol("INTPTLAT")], lon = +r[gcol("INTPTLONG")] > 0 ? +r[gcol("INTPTLONG")] - 360 : +r[gcol("INTPTLONG")];
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
}

// ---------- Canada ----------
// A CSV file's rows (Statistics Canada quotes every field)
function readCsv(file) {
  const rows = [];
  for (const line of fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "").split(/\r?\n/)) {
    if (!line) continue;
    const row = [];
    let field = "", quoted = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (quoted) {
        if (c === '"' && line[i + 1] === '"') (field += '"'), i++;
        else if (c === '"') quoted = false;
        else field += c;
      } else if (c === '"') quoted = true;
      else if (c === ",") row.push(field), (field = "");
      else field += c;
    }
    row.push(field);
    rows.push(row);
  }
  return rows;
}
// A Statistics Canada table: its data rows and its metadata rows (unzipped in the cache)
async function statcan(table) {
  const dir = path.join(CA_CACHE, `st-${table}`);
  if (!fs.existsSync(path.join(dir, `${table}.csv`))) {
    const zip = await get(`https://www150.statcan.gc.ca/n1/en/tbl/csv/${table}-eng.zip`, `st-${table}.zip`, CA_CACHE);
    fs.mkdirSync(dir, { recursive: true });
    require("child_process").execFileSync("unzip", ["-o", "-q", zip, "-d", dir]);
  }
  return { data: readCsv(path.join(dir, `${table}.csv`)), meta: readCsv(path.join(dir, `${table}_MetaData.csv`)) };
}
// Every official name of one kind in the province (Canadian Geographical Names Database). The
// service gives at most 1,000 names per answer and its pages have no fixed order, so the
// province's box is split into quarters until each answer is complete.
async function geonames(sgc, concise) {
  const seen = new Map();
  const box = ctx.NR.AREAS[CODE].box.map((v, i) => Math.round((v + (i < 2 ? -0.5 : 0.5)) * 100) / 100);
  const ask = async ([x0, y0, x1, y1]) => {
    const file = await get(
      `https://geogratis.gc.ca/services/geoname/en/geonames.json?province=${sgc}&concise=${concise}&num=1000&bbox=${x0},${y0},${x1},${y1}`,
      `gn-${sgc}-${concise}-${[x0, y0, x1, y1].join("_")}.json`,
      CA_CACHE
    );
    const items = JSON.parse(fs.readFileSync(file, "utf8")).items || [];
    if (items.length >= 1000) {
      const mx = Math.round(((x0 + x1) / 2) * 1000) / 1000, my = Math.round(((y0 + y1) / 2) * 1000) / 1000;
      for (const q of [[x0, y0, mx, my], [mx, y0, x1, my], [x0, my, mx, y1], [mx, my, x1, y1]]) await ask(q);
    } else items.forEach((i) => seen.set(i.id, i));
  };
  await ask(box);
  // (an answer for a box holds every province's names in it: keep this province's)
  return [...seen.values()]
    .filter((i) => (i.status && i.status.code) === "official" && i.province && i.province.code === sgc)
    .sort((a, b) => a.id.localeCompare(b.id));
}

async function canadaRaw() {
  const SGC = FIPS; // a Canadian region's codes are census divisions ("5915"): the first two are the province
  const cds = await statcan("98100007");
  const cdPop = {};
  for (const r of cds.data.slice(1)) if (r[2] && r[2].slice(4, 9) === "A0003") cdPop[r[2].slice(-4)] = { name: r[1], pop: +r[4] };
  const outCounties = regions.map((r) => ({
    id: r.id,
    name: r.name,
    counties: r.fips.map((f) => ({ cd: f, name: cdPop[f] ? cdPop[f].name : "?", pop: cdPop[f] ? cdPop[f].pop : null })),
    pop: Math.round(r.fips.reduce((n, f) => n + (cdPop[f] ? cdPop[f].pop : 0), 0) / 1000), // thousands, like a pack's pop
    label: r.label,
    neighbors: r.neighbors,
  }));

  // Municipalities (census subdivisions) of the province, by name: there can be two with one name
  const csds = await statcan("98100002");
  const byName = {};
  // The forms a census name can be found by: as written; its English part ("Greater Sudbury /
  // Grand Sudbury"); for a city, town or village, without what follows a comma or in brackets
  // ("Woody Point, Bonne Bay", "Seal Cove (Fortune Bay)", "Lloydminster (Part)"; not "Sudbury,
  // Unorganized" or "Sechelt (Part)", a First Nations district); and every form with tidy hyphens
  // and apostrophes ("Happy Valley - Goose Bay" for "Happy Valley-Goose Bay")
  const tidy = (n) => n.normalize("NFC").replace(/\s*-\s*/g, "-").replace(/[\u2019`]/g, "'");
  // and without accents ("Behchokò" for "Behchokǫ̀", "Deline" for "Délı̨nę", "Lutselk'e" for "Łutselk'e")
  const loose = (n) => tidy(n).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\u0131/g, "i").replace(/\u0141/g, "L").replace(/\u0142/g, "l");
  const nameForms = (n, type) => {
    const forms = [n, n.replace(/ \/ .*$/, "")];
    if (URBAN.has(type)) forms.push(n.replace(/, .*$/, ""), n.replace(/ \([^)]*\)$/, ""));
    return [...new Set([...forms, ...forms.map(tidy), ...forms.map(loose)])];
  };
  const areaCol = csds.data[0].findIndex((h) => /Land area/i.test(h));
  // Each subdivision's type (city, town, village, parish, rural municipality...), from Statistics
  // Canada's boundary service
  const typeList = JSON.parse(fs.readFileSync(await get("https://geo.statcan.gc.ca/geo_wa/rest/services/2021/Cartographic_boundary_files/MapServer/9/query?where=1%3D1&outFields=CSDUID,CSDTYPE&returnGeometry=false&f=json", "csd-types.json", CA_CACHE), "utf8"));
  const csdType = Object.fromEntries(typeList.features.map((f) => [f.attributes.CSDUID, f.attributes.CSDTYPE]));
  // (and the north's hamlets, charter communities, settlements and community governments)
  const URBAN = new Set(["CY", "C", "CV", "T", "TV", "V", "VL", "HAM", "CC", "SET", "CG"]);
  // Countryside subdivisions that a city, town or village never takes its population from (Nova
  // Scotia's District of Chester, county subdivisions, rural municipalities)
  const NOT_A_TOWN = new Set(["MD", "RM", "SC", "CM", "SA", "ID", "NO", "SNO", "UNO"]); // cities, towns, villages (not Quebec's Cree and Naskapi "villages", VC and VN: land with no people)
  for (const r of csds.data.slice(1))
    if (r[2] && r[2].slice(4, 9) === "A0005" && r[2].slice(9, 11) === SGC)
      // (a bilingual name is listed under its English part too: "Greater Sudbury / Grand Sudbury")
      for (const name of nameForms(r[1], csdType[r[2].slice(-7)])) (byName[name] ||= []).push({ code: r[2].slice(-7), pop: +r[4], km2: +r[areaCol], type: csdType[r[2].slice(-7)] });
  // Population centres in the province (their parent in the table's metadata is the province)
  const pcs = await statcan("98100011");
  const memberCol = pcs.meta.findIndex((r) => r[0] === "Dimension ID" && r[1] === "Member Name");
  const members = pcs.meta.slice(memberCol + 1).filter((r) => r[0] === "1");
  const province = members.find((r) => r[2] === `[${SGC}]`);
  // (matched by the centre's code, "[0403]" in the metadata, the end of "2021S05100403" in the
  // data: two provinces can each have a "Windsor")
  const pcCodes = new Set(members.filter((r) => province && r[4] === province[3]).map((r) => r[2].replace(/[[\]]/g, "")));
  const pcPop = {};
  const pcPart = {}; // "Sydney" -> { pop, of: "Cape Breton - Sydney" } (centres named after two places)
  for (const r of pcs.data.slice(1)) if (r[2] && r[2].slice(4, 9) === "S0510" && pcCodes.has(r[2].slice(9))) pcPop[r[1]] = +r[4];
  for (const [name, pop] of Object.entries(pcPop)) for (const f of [tidy(name), loose(name)]) if (!(f in pcPop)) pcPop[f] = pop;
  const pcOf = (name) => [name, tidy(name), loose(name)].map((f) => pcPop[f]).find((v) => v !== undefined);
  for (const [name, pop] of Object.entries(pcPop))
    for (const part of name.includes(" - ") ? name.split(" - ") : []) if (!(part in pcPop) && !pcPart[part]) pcPart[part] = { pop, of: name };

  // Places: every official populated place, with its location
  const KINDS = { CITY: "city", TOWN: "town", VILG: "village", HAM: "hamlet", MUN1: "municipality", MUN2: "community", UNP: "locality" };
  const seen = new Set();
  const places = [];
  for (const [concise, kind] of Object.entries(KINDS))
    for (const g of await geonames(SGC, concise)) {
      if (/Regional District|Regional Municipality/.test(g.name)) continue; // the regions themselves
      const key = `${g.name}@${g.latitude.toFixed(2)},${g.longitude.toFixed(2)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const inside = regionAt(g.longitude, g.latitude);
      // Only real municipalities (cities, towns, villages, district municipalities) take a
      // municipality's population; communities (often First Nations) and localities can share a
      // town's name without being it
      const isMuni = !["community", "locality"].includes(kind);
      let munis = isMuni ? byName[g.name] || byName[tidy(g.name)] || byName[loose(g.name)] || [] : [];
      // A municipality far away is a different place with the same name (a "Perth" in Perth County
      // isn't the town of Perth, 300 km east): keep only those in the place's region or next to it
      let farOnly = false; // (then a population centre with the name is far away too)
      if (inside) {
        const near = new Set([...inside.fips, ...regions.filter((r) => inside.neighbors.includes(r.id)).flatMap((r) => r.fips)]);
        farOnly = munis.length > 0 && !munis.some((m) => near.has(m.code.slice(0, 4)));
        munis = munis.filter((m) => near.has(m.code.slice(0, 4)));
      }
      // Two municipalities with one name: first keep the one in the place's own census division
      // (Manitoba's city of Thompson, not the rural municipality of Thompson far south); then a
      // city, town or village is the densest one, not the rural municipality around it (the city of
      // Portage la Prairie inside the rural municipality of Portage la Prairie) or a tiny one nearby
      if (munis.length > 1) {
        const at = inside || nearestRegion(g.longitude, g.latitude);
        const here = munis.filter((m) => at.fips.includes(m.code.slice(0, 4)));
        if (here.length) munis = here;
      }
      // (a city, town or village is a city, town or village subdivision first: Grand Manan the village,
      // not the parish around it)
      if (["city", "town", "village", "hamlet"].includes(kind)) munis = munis.filter((m) => !NOT_A_TOWN.has(m.type));
      if (munis.length > 1 && ["city", "town", "village", "hamlet"].includes(kind) && munis.some((m) => URBAN.has(m.type))) munis = munis.filter((m) => URBAN.has(m.type));
      if (munis.length > 1 && ["city", "town", "village", "hamlet"].includes(kind)) munis = [munis.reduce((a, b) => (b.pop / b.km2 > a.pop / a.km2 ? b : a))];
      // A municipality's region comes from its census code (first 4 digits: its census division)
      // when it has one: places on the coast can sit just off the simplified outline
      const byCode = munis.length === 1 && regions.find((r) => r.fips.includes(munis[0].code.slice(0, 4)));
      const region = byCode || inside || nearestRegion(g.longitude, g.latitude);
      const place = { name: g.name, kind, lat: +g.latitude.toFixed(4), lon: +g.longitude.toFixed(4), county: region.id, offMap: !inside || undefined };
      if (munis.length === 1) Object.assign(place, { pop: munis[0].pop, popSource: "municipality", csd: munis[0].code });
      else if (munis.length > 1) Object.assign(place, { pop: null, municipalities: munis });
      else if (pcOf(g.name) !== undefined && !farOnly && (isMuni || !byName[g.name])) Object.assign(place, { pop: pcOf(g.name), popSource: "population centre" });
      // (a centre named after two places: "Cape Breton - Sydney" for Sydney)
      else if (pcPart[g.name] && !farOnly && (isMuni || !byName[g.name])) Object.assign(place, { pop: pcPart[g.name].pop, popSource: `population centre (${pcPart[g.name].of})` });
      else place.pop = null;
      if (pcOf(g.name) !== undefined && !farOnly && place.popSource !== "population centre" && isMuni) place.popCentre = pcOf(g.name);
      places.push(place);
    }
  // The same town is often listed twice: as its municipality and as an unincorporated place a
  // few miles away. Keep the municipality.
  const km = (a, b) => Math.hypot((a.lon - b.lon) * 111 * Math.cos((a.lat * Math.PI) / 180), (a.lat - b.lat) * 111);
  const kept = places.filter((p) => !(p.kind === "locality" && places.some((q) => q !== p && q.kind !== "locality" && q.name === p.name && km(p, q) < 10)));
  places.length = 0;
  places.push(...kept);
  // A town that the names database no longer lists as a municipality (New Brunswick merged its
  // towns in 2023: Sackville, Richibucto and Dalhousie are now localities in it) still takes the
  // 2021 population of the city, town or village of its name in its own census division, when
  // no other place has taken it
  const used = new Set(places.map((p) => p.csd).filter(Boolean));
  for (const p of places) {
    if (p.pop || !["locality", "community"].includes(p.kind)) continue;
    const region = regions.find((r) => r.id === p.county);
    const towns = (byName[p.name] || byName[tidy(p.name)] || byName[loose(p.name)] || []).filter((m) => URBAN.has(m.type) && region && region.fips.includes(m.code.slice(0, 4)) && !used.has(m.code));
    if (towns.length !== 1) continue;
    Object.assign(p, { pop: towns[0].pop, popSource: "municipality (2021)", csd: towns[0].code });
    used.add(towns[0].code);
  }
  // One population for one place: when several places took the same municipality's or population
  // centre's number (a county municipality named like its town; five places called Centreville),
  // the city, town or village keeps it if there's exactly one; otherwise none does (pop null,
  // sharedWith says how many).
  const rank = { city: 0, town: 1, village: 2, hamlet: 2, municipality: 3, community: 4, locality: 5 };
  // (a population centre is a built-up place: a county-wide municipality named like it comes last)
  const pcRank = { city: 0, town: 1, village: 2, hamlet: 2, community: 3, locality: 4, municipality: 5 };
  const groups = {};
  for (const p of places) if (p.pop) (groups[p.csd ? "csd:" + p.csd : /^population centre/.test(p.popSource) ? "pc:" + p.popSource + ":" + p.name : "x:" + Math.random()] ||= []).push(p);
  for (const list of Object.values(groups)) {
    if (list.length < 2) continue;
    const r = list[0].csd ? rank : pcRank;
    const best = Math.min(...list.map((p) => r[p.kind] ?? 9));
    let keep = list.filter((p) => (r[p.kind] ?? 9) === best);
    // (all within 15 km: one place listed twice, so the first best one keeps it. A population
    // centre's name on places far apart goes to the one best-ranked place only: Roblin the town,
    // not a community named Roblin; Inverness the village, not the county; nobody when two tie,
    // like five localities called Centreville)
    const close = list.every((p) => list.every((q) => km(p, q) <= 15));
    if (close) keep = keep.slice(0, 1);
    for (const p of list) if (keep.length !== 1 || p !== keep[0]) Object.assign(p, { pop: null, sharedWith: list.length, popSource: undefined, csd: undefined });
  }
  places.sort((a, b) => (b.pop || 0) - (a.pop || 0) || a.name.localeCompare(b.name));

  // Parks and other protected areas (English or untranslated names only)
  const parks = [];
  for (const g of await geonames(SGC, "PARK")) {
    if (g.language && g.language.code === "fra") continue;
    const region = regionAt(g.longitude, g.latitude) || nearestRegion(g.longitude, g.latitude);
    parks.push({ name: g.name, lat: +g.latitude.toFixed(4), lon: +g.longitude.toFixed(4), county: region.id });
  }
  parks.sort((a, b) => a.name.localeCompare(b.name));

  const out = path.join(GAME, "packs", CODE, "raw");
  fs.mkdirSync(out, { recursive: true });
  const note = "Made by tools/make-raw.js from Statistics Canada (Open Licence) and Natural Resources Canada's Geographical Names (Open Government Licence – Canada). Do not edit by hand.";
  fs.writeFileSync(path.join(out, "counties.json"), JSON.stringify({ note, source: "Statistics Canada table 98-10-0007, 2021 Census", regions: outCounties }, null, 1));
  const lines = (list) => JSON.stringify(list, null, 0).replace(/\},\{/g, "},\n{");
  fs.writeFileSync(path.join(out, "places.json"), JSON.stringify({ note, source: "Geographical Names (official names); populations: 98-10-0002 (municipalities), 98-10-0011 (population centres)", places: [] }).replace('"places":[]', `"places":${lines(places)}`));
  fs.writeFileSync(path.join(out, "parks.json"), JSON.stringify({ note, source: "Geographical Names, concise type PARK (official names)", parks: [] }).replace('"parks":[]', `"parks":${lines(parks)}`));
  const withPop = places.filter((p) => p.pop).length;
  console.log(`${CODE}: ${outCounties.length} regions, ${places.length} places (${withPop} with populations), ${parks.length} parks -> packs/${CODE}/raw/`);
}

(CANADIAN ? canadaRaw() : usRaw()).catch((e) => {
  console.error(e.message);
  process.exit(1);
});
