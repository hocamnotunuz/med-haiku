// National Railways: state packs. Every state in the game (and later every Canadian province)
// has a folder, packs/<code>/, with:
//   map.js      its county regions, land, coast and borders (made by tools/build-map.js)
//   terrain.js  its mountains grid, lakes, rivers, ranges and city hills and water
//               (made by tools/build-terrain.js, with relief.png and city-<key>.png)
//   pack.js     everything hand-made for it: main stations, towns, levels, starting counties,
//               city maps, mountain passes, bridges, bays, and where the forests and deserts are
// packs/index.js has every state (and Mexico and Canada) as a rough outline, for the clouds
// and the land outside the game. PACKS.md explains every field. This file collects the packs
// into what the rest of the game uses (NR.MAP, NR.CITIES, NR.TOWNS, NR.METROS...).
//
// Every pack.js loads with the page (they are small). A state's map.js and terrain.js load only
// when needed: the home state at the start, then states as they open and their neighbors just
// before (NR.loadPacks). Until then the state is drawn from its rough outline in packs/index.js.
window.NR = window.NR || {};
(function () {
  "use strict";
  const NR = window.NR;
  // Every pack, in load order (the order of stations and towns follows it).
  NR.PACK_LIST = ["CA", "NV", "AZ", "OR", "WA", "BC", "AB", "SK", "MB", "ON", "QC", "NB", "NS", "PE", "NL", "YT", "NT", "NU", "ID", "MT", "WY", "UT", "CO", "NM", "AK", "ND", "SD", "NE", "KS", "OK", "TX", "MN", "IA", "MO", "AR", "LA", "WI", "IL", "MI", "IN"];
  // The countries. Each has its own national money in its own currency, and the two currencies
  // are always worth the same (1 Freedom Buck = 1 Maple Coin), so nothing ever needs converting.
  // A pack says which country it is in with `country` (the US when left out).
  NR.COUNTRIES = {
    USA: { name: "the United States", adjective: "US", money: "Freedom Bucks", sign: "FB", national: "national money", unit: "state" },
    CAN: { name: "Canada", adjective: "Canadian", money: "Maple Coins", sign: "MC", national: "federal money", unit: "province" },
  };
  // The country of a state, a province or a payer ("USA", "CAN"; "national" is the home country's).
  NR.countryOf = (code) => {
    if (NR.COUNTRIES[code]) return code;
    if (code === "national") return NR.countryOf(NR.HOME_STATE);
    const pack = NR.PACKS[code], area = NR.AREAS && NR.AREAS[code];
    const c = (pack && pack.country) || (area && area.country);
    return NR.COUNTRIES[c] ? c : "USA";
  };
  // Are states from more than one country in the game? (Until then, names stay as they were.)
  NR.twoCountries = () => new Set(NR.PACK_LIST.map((code) => NR.countryOf(code))).size > 1;
  // "national money", or "US national money" and "Canadian federal money" with two countries
  NR.nationalName = (country) => {
    const c = NR.COUNTRIES[NR.countryOf(country)];
    return NR.twoCountries() ? `${c.adjective} ${c.national}` : c.national;
  };
  NR.PACKS = {};
  NR.addPack = (pack) => {
    NR.PACKS[pack.code] = pack;
  };
  NR.PACK_MAPS = {};
  NR.addPackMap = (map) => {
    NR.PACK_MAPS[map.code] = map;
  };
  NR.PACK_TERRAIN = {};
  NR.addPackTerrain = (terrain) => {
    NR.PACK_TERRAIN[terrain.code] = terrain;
  };
  // Is a state's map and terrain loaded?
  NR.isLoaded = (code) => !!(NR.PACK_MAPS[code] && NR.PACK_TERRAIN[code]);
  // The states of the game (every pack), loaded or not
  NR.gameStates = () => NR.PACK_LIST.filter((code) => NR.PACKS[code]).map((code) => ({ code, name: NR.AREAS[code] ? NR.AREAS[code].name : code }));
  // A state's land: its exact outline once loaded, its rough one before
  NR.landOf = (code) => (NR.PACK_MAPS[code] ? NR.PACK_MAPS[code].land : NR.AREAS[code] ? NR.AREAS[code].outline : []);

  // ---------- Loading a state's map and terrain when it's needed ----------
  // Bumps every time states load, so drawings and lookups that depend on them start over.
  NR.packVersion = 0;
  const changedHooks = [];
  NR.onPacksChanged = (fn) => changedHooks.push(fn);
  const pending = {};
  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.src = src;
      el.onload = resolve;
      el.onerror = () => reject(new Error(`Couldn't load ${src}`));
      document.head.appendChild(el);
    });
  // Loads these states (those not loaded yet), then rebuilds the game's lists once. Resolves when done.
  NR.loadPacks = function (codes) {
    const want = [...new Set(codes)].filter((code) => NR.PACKS[code] && !NR.isLoaded(code));
    if (!want.length) return Promise.resolve();
    const jobs = want.map((code) => (pending[code] = pending[code] || Promise.all([loadScript(`packs/${code}/map.js`), loadScript(`packs/${code}/terrain.js`)]).finally(() => delete pending[code])));
    return Promise.all(jobs).then(() => {
      if (want.some((code) => NR.isLoaded(code))) NR.packsChanged();
    });
  };
  // Rebuild everything that depends on which states are loaded
  NR.packsChanged = function () {
    NR.assemblePacks();
    NR.packVersion++;
    changedHooks.forEach((fn) => fn());
  };

  // A grid's letters ("A12C3": A flat or sea, B hills, C mountains, D high mountains) as numbers 0-3
  const decodeGrid = (t) => {
    const cells = new Uint8Array(t.cols * t.rows);
    let i = 0;
    for (const m of t.grid.matchAll(/([A-D])(\d*)/g)) {
      const n = m[2] ? +m[2] : 1;
      cells.fill(m[1].charCodeAt(0) - 65, i, i + n);
      i += n;
    }
    return cells;
  };
  // Mountains at a place: 0 flat (or sea), 1 hills, 2 mountains, 3 high mountains (0 off every grid).
  // The grids line up and agree where they overlap, so the first one that covers the place answers.
  // Cells are counted from 0° (not from each grid's corner), so a place exactly on the edge
  // between two cells gets the same cell in every grid.
  NR.heightAt = (lon, lat) => {
    for (const g of NR.TERRAIN.grids) {
      const c = Math.floor(lon / g.step + 1e-9) - Math.round(g.box[0] / g.step);
      const r = Math.round(g.box[3] / g.step) + Math.floor(-lat / g.step + 1e-9);
      if (c >= 0 && r >= 0 && c < g.cols && r < g.rows) return g.cells[r * g.cols + c];
    }
    return 0;
  };
  // Land outside the game: every state and country on the map that isn't one of the packs.
  NR.outsideAreas = () => Object.values(NR.AREAS).filter((a) => !NR.PACKS[a.code]);
  // Land whose exact map isn't loaded: outside the game, or a state of the game not loaded yet.
  NR.unloadedAreas = () => Object.values(NR.AREAS).filter((a) => !NR.PACK_MAPS[a.code]);
  // Every state and country on the map (packs/index.js), by code
  NR.AREAS = {};
  NR.addAreas = (list) => list.forEach((a) => (NR.AREAS[a.code] = a));
  // Where every game starts: this pack's starting counties and levels are used.
  NR.HOME_PACK = "CA";

  NR.assemblePacks = function () {
    // Only loaded states take part: their stations, towns and city maps need their counties
    const packs = NR.PACK_LIST.filter((code) => NR.isLoaded(code)).map((code) => NR.PACKS[code]).filter(Boolean);
    // The map: every loaded state's regions, land, coast and borders, joined
    const maps = NR.PACK_LIST.filter((code) => NR.isLoaded(code)).map((code) => NR.PACK_MAPS[code]);
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
    // A ferry is listed as a few points along its route ("Tsawwassen–Swartz Bay ferry (mid-strait)"):
    // they are one crossing, named once ("Tsawwassen–Swartz Bay ferry")
    for (const b of NR.BRIDGES) if (/ferry/i.test(b.name)) (b.route = b.name.replace(/ \([^)]*\)$/, "")), (b.name = b.route);
    NR.BAYS = packs.flatMap((p) => p.bays || []);
    // County region id -> "forest", "wooded" or "dry" (others: farmland and grassland)
    NR.BIOMES = {};
    packs.forEach((p) => Object.entries(p.biomes || {}).forEach(([kind, ids]) => ids.forEach((id) => (NR.BIOMES[id] = kind))));
    // Terrain: each state's grid and relief picture; lakes, rivers and ranges that touch two
    // states are in both packs, so keep one copy of each
    const terrain = NR.PACK_LIST.filter((code) => NR.isLoaded(code)).map((code) => NR.PACK_TERRAIN[code]);
    const unique = (list, key = (x) => x.id) => {
      const ids = new Set();
      return list.filter((x) => !ids.has(key(x)) && ids.add(key(x)));
    };
    // (a river stretch's id is its name and first point, and two stretches of one river can start
    // at the same point, like the Smoky Hill's: a stretch is the same one only if its last point is too)
    const riverKey = (r) => `${r.id}>${r.line.slice(-2).join(",")}`;
    NR.TERRAIN = {
      grids: terrain.map((t) => ({ code: t.code, box: t.box, step: t.step, cols: t.cols, rows: t.rows, cells: t.cells || (t.cells = decodeGrid(t)) })),
      reliefs: terrain.map((t) => ({ code: t.code, src: t.relief.src, box: t.relief.box })),
      lakes: unique(terrain.flatMap((t) => t.lakes)),
      rivers: unique(terrain.flatMap((t) => t.rivers), riverKey),
      ranges: unique(terrain.flatMap((t) => t.ranges)),
      cities: Object.assign({}, ...terrain.map((t) => t.cities)),
      passes: NR.PASSES,
      bridges: NR.BRIDGES,
    };
  };
})();
