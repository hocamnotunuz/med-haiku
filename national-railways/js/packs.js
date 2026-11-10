// National Railways: state packs. Every state (and later every Canadian province) has a pack,
// packs/<code>/pack.js, with everything hand-made for it: main stations, towns, levels,
// starting counties, city maps, mountain passes, bridges, bays, and where the forests and
// deserts are. PACKS.md explains every field. This file collects the packs into the lists
// the rest of the game uses (NR.CITIES, NR.TOWNS, NR.METROS...).
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
  // Where every game starts: this pack's starting counties and levels are used.
  NR.HOME_PACK = "CA";

  NR.assemblePacks = function () {
    const packs = NR.PACK_LIST.map((code) => NR.PACKS[code]).filter(Boolean);
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
