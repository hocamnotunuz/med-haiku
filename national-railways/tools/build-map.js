// National Railways map builder.
// Makes js/map.js (land, state and county borders, county regions) from U.S. Census Bureau
// county boundaries (the us-atlas package), for one or more states on one connected map.
//
// Usage (from the national-railways folder):
//   cd tools && npm install && cd ..
//   node tools/build-map.js tools/node_modules CA NV AZ OR
//
// To add a state: add it to STATES below (FIPS code, name, and either a hand-made `merge`
// list or `pop` so small counties are merged automatically), run the script with it,
// then list its main stations and towns in js/cities.js.
"use strict";
const fs = require("fs");
const path = require("path");

const MODULES = path.resolve(process.argv[2] || path.join(__dirname, "node_modules"));
const CODES = (process.argv.length > 3 ? process.argv.slice(3) : ["CA"]).map((c) => c.toUpperCase());
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

// Land: all counties joined into one shape; also each state's own shape (to fit the view).
const land = tc.merge(topo, counties).coordinates.flatMap((poly) => poly.map(flat));
const stateLand = Object.fromEntries(
  CODES.map((code) => [code, tc.merge(topo, counties.filter((g) => stateOf(g) === code)).coordinates.flatMap((poly) => poly.map(flat))])
);
// County borders between different regions of the same state, and borders between states.
const indexOf = new Map(counties.map((g, i) => [g, i]));
const borders = tc
  .mesh(topo, collection(counties), (a, b) => a !== b && stateOf(a) === stateOf(b) && regionKey.get(indexOf.get(a)) !== regionKey.get(indexOf.get(b)))
  .coordinates.map(flat);
const stateBorders = CODES.length > 1 ? tc.mesh(topo, collection(counties), (a, b) => a !== b && stateOf(a) !== stateOf(b)).coordinates.map(flat) : [];

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

const header = [
  `// Map for National Railways: ${CODES.map((c) => STATES[c].name).join(", ")}.`,
  "// Land, state borders, county borders and county regions.",
  "// Generated by tools/build-map.js from U.S. Census Bureau county boundaries (us-atlas 3.0.1).",
  "// Do not edit by hand: change tools/build-map.js and run it again.",
  "// Rings and borders are flat lists of longitude, latitude pairs.",
].join("\n");
const body = `window.NR = window.NR || {};
NR.MAP = {
  states: ${JSON.stringify(CODES.map((code) => ({ code, name: STATES[code].name })))},
  regions: [
${regions.map((r) => "    " + JSON.stringify(r)).join(",\n")}
  ],
  land: [
${land.map((r) => "    " + JSON.stringify(r)).join(",\n")}
  ],
  stateLand: {
${CODES.map((code) => `    ${code}: [\n${stateLand[code].map((r) => "      " + JSON.stringify(r)).join(",\n")}\n    ]`).join(",\n")}
  },
  borders: [
${borders.map((r) => "    " + JSON.stringify(r)).join(",\n")}
  ],
  stateBorders: [
${stateBorders.map((r) => "    " + JSON.stringify(r)).join(",\n")}
  ],
};
`;
const out = path.join(__dirname, "..", "js", "map.js");
fs.writeFileSync(out, `${header}\n${body}`);
const perState = CODES.map((code) => `${code} ${counties.filter((g) => stateOf(g) === code).length}→${regions.filter((r) => r.state === code).length}`).join(", ");
console.log(`Wrote ${path.relative(process.cwd(), out)}: counties→regions ${perState}; ${Math.round(fs.statSync(out).size / 1024)} KB`);
for (const r of regions) if (r.fips.length > 1 && r.state !== "CA") console.log(`  merged: ${r.name}`);
