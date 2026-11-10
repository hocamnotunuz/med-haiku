// National Railways: state packs. Every state in the game (and later every Canadian province)
// has a folder, packs/<code>/, with:
//   map.js   its county regions, land, coast and borders (made by tools/build-map.js)
//   pack.js  everything hand-made for it: main stations, towns, levels, starting counties,
//            city maps, mountain passes, bridges, bays, and where the forests and deserts are
// packs/index.js has every state (and Mexico and Canada) as a rough outline, for the clouds
// and the land outside the game. PACKS.md explains every field. This file collects the packs
// into what the rest of the game uses (NR.MAP, NR.CITIES, NR.TOWNS, NR.METROS...).
window.NR = window.NR || {};
(function () {
  "use strict";
  const NR = window.NR;
  // Every pack, in load order (the order of stations and towns follows it).
  NR.PACK_LIST = ["CA", "NV", "AZ", "OR"];
  NR.PACKS = {};
  NR.addPack = (pack) => {
    NR.PACKS[pack.code] = pack;
  };
  NR.PACK_MAPS = {};
  NR.addPackMap = (map) => {
    NR.PACK_MAPS[map.code] = map;
  };
  // Every state and country on the map (packs/index.js), by code
  NR.AREAS = {};
  NR.addAreas = (list) => list.forEach((a) => (NR.AREAS[a.code] = a));
  // Where every game starts: this pack's starting counties and levels are used.
  NR.HOME_PACK = "CA";

  NR.assemblePacks = function () {
    const packs = NR.PACK_LIST.map((code) => NR.PACKS[code]).filter(Boolean);
    // The map: every state's regions, land, coast and borders, joined
    const maps = NR.PACK_LIST.map((code) => NR.PACK_MAPS[code]).filter(Boolean);
    const seen = new Set();
    NR.MAP = {
      states: maps.map((m) => ({ code: m.code, name: NR.AREAS[m.code] ? NR.AREAS[m.code].name : m.code })),
      regions: maps.flatMap((m) => m.regions),
      land: maps.flatMap((m) => m.land),
      stateLand: Object.fromEntries(maps.map((m) => [m.code, m.land])),
      coast: maps.flatMap((m) => m.coast),
      borders: maps.flatMap((m) => m.borders),
      // A border between two states is in both their packs: keep one copy
      stateBorders: maps.flatMap((m) => m.stateBorders.filter((b) => !seen.has(b.id) && seen.add(b.id)).map((b) => b.line)),
    };
    const home = NR.PACKS[NR.HOME_PACK];
    NR.CITIES = packs.flatMap((p) => p.stations || []);
    NR.TOWNS = packs.flatMap((p) => p.towns || []);
    NR.LEVELS = home.levels || [];
    NR.START_COUNTIES = home.start || [];
    NR.METROS = Object.assign({}, ...packs.map((p) => p.metros || {}));
    const named = ([name, lat, lon]) => ({ name, lat, lon });
    NR.PASSES = packs.flatMap((p) => (p.passes || []).map(named));
    NR.BRIDGES = packs.flatMap((p) => (p.bridges || []).map(named));
    NR.BAYS = packs.flatMap((p) => p.bays || []);
    // County region id -> "forest", "wooded" or "dry" (others: farmland and grassland)
    NR.BIOMES = {};
    packs.forEach((p) => Object.entries(p.biomes || {}).forEach(([kind, ids]) => ids.forEach((id) => (NR.BIOMES[id] = kind))));
    // The geography code reads passes and bridges with the rest of the terrain
    if (NR.TERRAIN) {
      NR.TERRAIN.passes = NR.PASSES;
      NR.TERRAIN.bridges = NR.BRIDGES;
    }
  };
})();
