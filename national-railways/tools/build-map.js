// National Railways map builder. From U.S. Census Bureau county boundaries (the us-atlas
// package) and Natural Earth country outlines, it makes:
//   packs/<code>/map.js  for each state in the game: its county regions (merged where small),
//                        land, coast, county borders and borders with the other states in the game
//   packs/index.js       every state (and Mexico and Canada): a rough outline, its neighbors and
//                        its name, for the clouds and the land outside the game
//
// Usage (from the national-railways folder), listing every state in the game:
//   cd tools && npm install && cd ..
//   node tools/build-map.js tools/node_modules <cache folder> CA NV AZ OR
// The cache folder keeps the downloaded country outlines (the same one build-terrain.js uses).
//
// To add a state: add it to STATES below (FIPS code, name, and either a hand-made `merge`
// list or `pop` so small counties are merged automatically), run the script with it, then
// make its pack (see PACKS.md).
"use strict";
const fs = require("fs");
const path = require("path");

const { execFileSync } = require("child_process");
const MODULES = path.resolve(process.argv[2] || path.join(__dirname, "node_modules"));
const CACHE = process.argv[3] && path.resolve(process.argv[3]);
const CODES = process.argv.slice(4).map((c) => c.toUpperCase());
if (!CACHE || !CODES.length) {
  console.error("Usage: node tools/build-map.js <node_modules> <cache folder> CA NV AZ OR ...");
  process.exit(1);
}
const SMALL = 50; // counties under 50,000 people may be merged (up to 3 neighbors per region)

const STATES = {
  CA: {
    fips: "06",
    name: "California",
    // Merged by hand (approved list).
    merge: [
      ["Del Norte", "Siskiyou", "Trinity"],
      ["Lassen", "Modoc"],
      ["Plumas", "Sierra"],
      ["Colusa", "Glenn"],
      ["Alpine", "Amador", "Calaveras"],
      ["Inyo", "Mono"],
      ["Mariposa", "Tuolumne"],
    ],
    // Bridges across water also count as a shared border.
    bridges: [
      ["San Francisco", "Marin"], // Golden Gate Bridge
      ["Contra Costa", "Marin"], // Richmond–San Rafael Bridge
      ["Alameda", "San Mateo"], // San Mateo Bridge
    ],
  },
  // Population in thousands (2020 census), used to merge small counties automatically.
  NV: {
    fips: "32",
    name: "Nevada",
    pop: {
      Clark: 2265, Washoe: 486, Lyon: 59, "Carson City": 59, Elko: 54, Nye: 52, Douglas: 49, Churchill: 26, Humboldt: 17,
      "White Pine": 9, Pershing: 7, Lander: 6, Mineral: 5, Lincoln: 4, Storey: 4, Eureka: 2, Esmeralda: 1,
    },
  },
  AZ: {
    fips: "04",
    name: "Arizona",
    pop: {
      Maricopa: 4421, Pima: 1043, Pinal: 425, Yavapai: 236, Mohave: 213, Yuma: 204, Coconino: 145, Cochise: 125, Navajo: 107,
      Apache: 66, Gila: 53, "Santa Cruz": 48, Graham: 39, "La Paz": 17, Greenlee: 10,
    },
  },
  OR: {
    fips: "41",
    name: "Oregon",
    pop: {
      Multnomah: 815, Washington: 600, Clackamas: 421, Lane: 383, Marion: 346, Jackson: 223, Deschutes: 198, Linn: 129,
      Douglas: 111, Yamhill: 108, Benton: 95, Josephine: 88, Polk: 87, Umatilla: 80, Klamath: 69, Coos: 65, Columbia: 53,
      Lincoln: 50.4, Clatsop: 41, Malheur: 32, Tillamook: 27, Wasco: 27, Union: 26, Crook: 25, Jefferson: 25, "Hood River": 24,
      Curry: 23, Baker: 17, Morrow: 12, Lake: 8, Wallowa: 7, Harney: 7, Grant: 7, Gilliam: 2, Sherman: 2, Wheeler: 1,
    },
  },
};

for (const code of CODES) if (!STATES[code]) throw new Error(`Unknown state ${code}. Known: ${Object.keys(STATES).join(", ")}`);
const topo = JSON.parse(fs.readFileSync(path.join(MODULES, "us-atlas", "counties-10m.json"), "utf8"));
const tc = require(path.join(MODULES, "topojson-client"));

// Every county of the chosen states, which state it is in, and its neighbors.
const fipsToCode = Object.fromEntries(CODES.map((c) => [STATES[c].fips, c]));
const counties = topo.objects.counties.geometries.filter((g) => fipsToCode[String(g.id).slice(0, 2)]);
const stateOf = (g) => fipsToCode[String(g.id).slice(0, 2)];
const neighbors = tc.neighbors(counties);
const find = (code, name) => {
  const i = counties.findIndex((g) => stateOf(g) === code && g.properties.name === name);
  if (i < 0) throw new Error(`No county called ${name} in ${STATES[code].name}`);
  return i;
};

// ---------- Which region each county belongs to ----------
const groupOf = new Map(); // county index -> list of county indexes in its region
for (const code of CODES) {
  const cfg = STATES[code];
  const mine = counties.map((g, i) => i).filter((i) => stateOf(counties[i]) === code);
  if (cfg.merge) {
    for (const names of cfg.merge) {
      const members = names.map((n) => find(code, n));
      for (const i of members) {
        if (members.length > 1 && !members.some((j) => j !== i && neighbors[i].includes(j))) {
          throw new Error(`${counties[i].properties.name} does not border the rest of its group`);
        }
      }
      members.forEach((i) => groupOf.set(i, members));
    }
  } else if (cfg.pop) {
    // Automatic: smallest counties first, each joined by its smallest small neighbors (at most 3 per region).
    const pop = (i) => {
      const p = cfg.pop[counties[i].properties.name];
      if (p === undefined) throw new Error(`No population for ${counties[i].properties.name}, ${cfg.name}`);
      return p;
    };
    const near = (group) => [...new Set(group.flatMap((i) => neighbors[i]))].filter((j) => stateOf(counties[j]) === code && !group.includes(j));
    const small = mine.filter((i) => pop(i) < SMALL).sort((a, b) => pop(a) - pop(b));
    for (const i of small) {
      if (groupOf.has(i)) continue;
      const group = [i];
      while (group.length < 3) {
        const next = near(group).filter((j) => !groupOf.has(j) && pop(j) < SMALL).sort((a, b) => pop(a) - pop(b))[0];
        if (next === undefined) break;
        group.push(next);
      }
      if (group.length === 1) {
        // No small neighbor left: join a neighboring merged region with room, or the smallest neighbor.
        const room = near(group)
          .map((j) => groupOf.get(j))
          .filter((g) => g && g.length < 3)
          .sort((a, b) => a.reduce((n, j) => n + pop(j), 0) - b.reduce((n, j) => n + pop(j), 0))[0];
        if (room) {
          room.push(i);
          groupOf.set(i, room);
          continue;
        }
        const partner = near(group).filter((j) => !groupOf.has(j)).sort((a, b) => pop(a) - pop(b))[0];
        if (partner !== undefined) group.push(partner);
      }
      group.forEach((j) => groupOf.set(j, group));
    }
  }
  mine.forEach((i) => groupOf.has(i) || groupOf.set(i, [i]));
}

// ---------- Region names and ids ----------
const idOf = (s) => s.toLowerCase().replace(/[^a-z]+/g, "-");
const regionKey = new Map(); // county index -> region id
const regionInfo = new Map(); // region id -> { name, state, members }
for (const [i, members] of groupOf) {
  const code = stateOf(counties[i]);
  const base = members.map((j) => counties[j].properties.name).sort().join("-");
  const id = code === "CA" ? idOf(base) : `${code.toLowerCase()}-${idOf(base)}`; // California keeps its old ids
  const label = /City$/.test(base) ? base : `${base} County`;
  regionKey.set(i, id);
  regionInfo.set(id, { name: code === "CA" ? label : `${label}, ${STATES[code].name}`, state: code, members });
}

// Round to 3 decimals (about 100 m) and drop repeated points.
const flat = (ring) => {
  const out = [];
  let lastX = null;
  let lastY = null;
  for (const [x, y] of ring) {
    const rx = Math.round(x * 1000) / 1000;
    const ry = Math.round(y * 1000) / 1000;
    if (rx === lastX && ry === lastY) continue;
    out.push(rx, ry);
    lastX = rx;
    lastY = ry;
  }
  return out;
};
const collection = (geoms) => ({ type: "GeometryCollection", geometries: geoms });

// Each state's own land, county borders between its regions, borders with the other states
// in the game, and its coast (with the borders of land that isn't in the game: other states,
// Mexico, Canada), drawn as the outer edge of the map.
const indexOf = new Map(counties.map((g, i) => [g, i]));
const allCounties = topo.objects.counties.geometries;
const fipsOf = (g) => String(g.id).slice(0, 2);
const inGame = new Set(CODES.map((c) => STATES[c].fips));
const stateLand = Object.fromEntries(
  CODES.map((code) => [code, tc.merge(topo, counties.filter((g) => stateOf(g) === code)).coordinates.flatMap((poly) => poly.map(flat))])
);
const borders = Object.fromEntries(
  CODES.map((code) => [
    code,
    tc
      .mesh(topo, collection(counties), (a, b) => a !== b && stateOf(a) === code && stateOf(b) === code && regionKey.get(indexOf.get(a)) !== regionKey.get(indexOf.get(b)))
      .coordinates.map(flat),
  ])
);
const coast = Object.fromEntries(
  CODES.map((code) => {
    const fips = STATES[code].fips;
    const lines = tc.mesh(topo, collection(allCounties), (a, b) => {
      const fa = fipsOf(a), fb = fipsOf(b);
      if (a === b) return fa === fips;
      return (fa === fips && !inGame.has(fb)) || (fb === fips && !inGame.has(fa));
    });
    return [code, lines.coordinates.map(flat)];
  })
);
// Borders between two states in the game: listed in both states' packs, with the same id.
const stateBorders = Object.fromEntries(CODES.map((code) => [code, []]));
for (let i = 0; i < CODES.length; i++)
  for (let j = i + 1; j < CODES.length; j++) {
    const [A, B] = [CODES[i], CODES[j]].sort();
    const lines = tc.mesh(topo, collection(counties), (a, b) => (stateOf(a) === A && stateOf(b) === B) || (stateOf(a) === B && stateOf(b) === A)).coordinates;
    lines.forEach((line, k) => {
      const item = { id: `${A}-${B}-${k}`, line: flat(line) };
      stateBorders[A].push(item);
      stateBorders[B].push(item);
    });
  }

// One label point per region: the centroid of its largest piece.
const cosLat = Math.cos((40 * Math.PI) / 180);
function centroid(ring) {
  let a = 0;
  let cx = 0;
  let cy = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [x0, y0] = [ring[j][0] * cosLat, ring[j][1]];
    const [x1, y1] = [ring[i][0] * cosLat, ring[i][1]];
    const f = x0 * y1 - x1 * y0;
    a += f;
    cx += (x0 + x1) * f;
    cy += (y0 + y1) * f;
  }
  return { area: Math.abs(a / 2), lon: cx / (3 * a) / cosLat, lat: cy / (3 * a) };
}
const regions = [...regionInfo.entries()]
  .sort((a, b) => (a[1].state === b[1].state ? a[1].name.localeCompare(b[1].name) : CODES.indexOf(a[1].state) - CODES.indexOf(b[1].state)))
  .map(([id, info]) => {
    const shape = tc.merge(topo, info.members.map((i) => counties[i]));
    const best = shape.coordinates.map((poly) => centroid(poly[0])).sort((a, b) => b.area - a.area)[0];
    const near = new Set();
    info.members.forEach((i) => neighbors[i].forEach((j) => near.add(regionKey.get(j))));
    const cfg = STATES[info.state];
    for (const [a, b] of cfg.bridges || []) {
      const ra = regionKey.get(find(info.state, a));
      const rb = regionKey.get(find(info.state, b));
      if (ra === id) near.add(rb);
      if (rb === id) near.add(ra);
    }
    near.delete(id);
    return {
      id,
      name: info.name,
      state: info.state,
      fips: info.members.map((i) => String(counties[i].id)).sort(),
      label: [Math.round(best.lon * 100) / 100, Math.round(best.lat * 100) / 100],
      neighbors: [...near].sort(),
      rings: shape.coordinates.flatMap((poly) => poly.map(flat)),
    };
  });

// ---------- Every state (and Mexico and Canada): rough outlines, for packs/index.js ----------
const POSTAL = {
  "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL", "13": "GA", "15": "HI", "16": "ID",
  "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME", "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS", "29": "MO",
  "30": "MT", "31": "NE", "32": "NV", "33": "NH", "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH", "40": "OK", "41": "OR", "42": "PA",
  "44": "RI", "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI", "56": "WY",
};
// Douglas-Peucker on one ring of [x, y] points (the ring is closed: first point = last).
function simplify(pts, tol) {
  if (pts.length < 4) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  // Split a closed ring at its farthest point from the start, so both halves simplify well.
  let far = 0;
  for (let i = 1; i < pts.length - 1; i++) if (Math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1]) > Math.hypot(pts[far][0] - pts[0][0], pts[far][1] - pts[0][1])) far = i;
  keep[far] = 1;
  const stack = [
    [0, far],
    [far, pts.length - 1],
  ];
  while (stack.length) {
    const [a, b] = stack.pop();
    let best = -1, dist = 0;
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy);
    for (let i = a + 1; i < b; i++) {
      const d = len ? Math.abs(dx * (ay - pts[i][1]) - dy * (ax - pts[i][0])) / len : Math.hypot(pts[i][0] - ax, pts[i][1] - ay);
      if (d > dist) (dist = d), (best = i);
    }
    if (dist > tol) {
      keep[best] = 1;
      stack.push([a, best], [best, b]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}
// Rough outlines: simplified, leaving out islands smaller than about 0.01 square degrees
// (roughly 30 square miles), which don't matter for clouds or for telling land from sea.
const roughRings = (polys, tol) =>
  polys
    .flat()
    .filter((ring) => {
      const xs = ring.map((p) => p[0]), ys = ring.map((p) => p[1]);
      return (Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys)) >= 0.01;
    })
    .map((ring) => simplify(ring, tol))
    .filter((ring) => ring.length >= 4)
    // Alaska's westernmost islands lie past the date line: put them just west of -180°
    .map((ring) => flat(ring.map(([x, y]) => [Math.round((x > 0 ? x - 360 : x) * 100) / 100, Math.round(y * 100) / 100])))
    .filter((ring) => ring.length >= 8);
const boxOf = (rings) => {
  const b = [Infinity, Infinity, -Infinity, -Infinity];
  rings.forEach((ring) => {
    for (let i = 0; i < ring.length; i += 2) {
      b[0] = Math.min(b[0], ring[i]);
      b[1] = Math.min(b[1], ring[i + 1]);
      b[2] = Math.max(b[2], ring[i]);
      b[3] = Math.max(b[3], ring[i + 1]);
    }
  });
  return b.map((v) => Math.round(v * 100) / 100);
};
const statesTopo = JSON.parse(fs.readFileSync(path.join(MODULES, "us-atlas", "states-10m.json"), "utf8"));
const stateGeoms = statesTopo.objects.states.geometries.filter((g) => POSTAL[g.id]);
const stateNear = tc.neighbors(stateGeoms);
const areas = stateGeoms.map((g, i) => {
  const geom = tc.feature(statesTopo, g).geometry;
  const outline = roughRings(geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates, POSTAL[g.id] === "AK" ? 0.03 : 0.01);
  return { code: POSTAL[g.id], name: g.properties.name, country: "US", box: boxOf(outline), neighbors: stateNear[i].map((j) => POSTAL[stateGeoms[j].id]).sort(), outline };
});
// Mexico and Canada, from Natural Earth (public domain), 1:50m
const neFile = path.join(CACHE, "ne", "ne_50m_admin_0_countries.geojson");
if (!fs.existsSync(neFile)) {
  fs.mkdirSync(path.dirname(neFile), { recursive: true });
  execFileSync("curl", ["-sS", "-f", "-m", "120", "--retry", "3", "-o", neFile, "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson"]);
}
for (const f of JSON.parse(fs.readFileSync(neFile, "utf8")).features) {
  const code = { MEX: "MEX", CAN: "CAN" }[f.properties.ADM0_A3];
  if (!code) continue;
  const outline = roughRings(f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates, code === "CAN" ? 0.03 : 0.02);
  areas.push({ code, name: f.properties.NAME, country: code, box: boxOf(outline), neighbors: [], outline });
}
areas.sort((a, b) => a.code.localeCompare(b.code));

// ---------- Write ----------
const header = (what) =>
  [
    `// National Railways: ${what}.`,
    "// Generated by tools/build-map.js from U.S. Census Bureau county boundaries (us-atlas 3.0.1)",
    "// and Natural Earth country outlines. Do not edit by hand: change the tool and run it again.",
    "// Rings and lines are flat lists of longitude, latitude pairs.",
  ].join("\n");
const lines = (list, indent) => list.map((x) => indent + JSON.stringify(x)).join(",\n");
for (const code of CODES) {
  const mine = regions.filter((r) => r.state === code);
  const text = `${header(`map of ${STATES[code].name} (its county regions, land, coast and borders)`)}
NR.addPackMap({
  code: "${code}",
  regions: [
${lines(mine, "    ")}
  ],
  land: [
${lines(stateLand[code], "    ")}
  ],
  coast: [
${lines(coast[code], "    ")}
  ],
  borders: [
${lines(borders[code], "    ")}
  ],
  stateBorders: [
${lines(stateBorders[code], "    ")}
  ],
});
`;
  const out = path.join(__dirname, "..", "packs", code, "map.js");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, text);
  console.log(`Wrote packs/${code}/map.js: ${counties.filter((g) => stateOf(g) === code).length} counties → ${mine.length} regions, ${Math.round(fs.statSync(out).size / 1024)} KB`);
}
const indexText = `${header("every state, and Mexico and Canada: rough outlines, neighbors and names")}
// Used for the clouds over land that isn't open, and to tell land from sea outside the game.
NR.addAreas([
${lines(areas, "  ")}
]);
`;
fs.writeFileSync(path.join(__dirname, "..", "packs", "index.js"), indexText);
console.log(`Wrote packs/index.js: ${areas.length} areas, ${Math.round(Buffer.byteLength(indexText) / 1024)} KB`);
for (const r of regions) if (r.fips.length > 1 && r.state !== "CA") console.log(`  merged: ${r.name}`);
