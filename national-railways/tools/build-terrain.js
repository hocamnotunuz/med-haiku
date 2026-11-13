// Builds the real geography of every state in the game, into its pack folder:
//   packs/<code>/terrain.js      mountains (a grid worked out from real elevation), lakes, rivers,
//                                named ranges, and its city maps' water and hills
//   packs/<code>/relief.png      shaded relief (hillshade) for the state map (Classic look)
//   packs/<code>/city-<key>.png  shaded relief for each of its city maps
// The real passes and bridges are hand-made in the packs (packs/<code>/pack.js).
//
// Usage (from the national-railways folder):
//   cd tools && npm install && cd ..
//   node tools/build-terrain.js tools/node_modules <cache folder> [state codes...]
// With state codes (e.g. BC), only those states are built; the others' files stay as they are.
//
// Downloads (kept in the cache folder, so a second run is quick):
//   - Elevation: AWS Terrain Tiles ("terrarium" PNG tiles, public data from SRTM, USGS and others)
//   - Lakes and rivers: Natural Earth (public domain), 1:10m scale
//   - Coastlines and water for the city maps: U.S. Census Bureau county shapes (1:500,000)
//     and TIGER area water; in Canada, Statistics Canada census subdivisions (cartographic, 2021)
//     and lakes and rivers from Natural Resources Canada's CanVec (1:250,000)
//
// To try a city map before it goes into a pack (water and hills only, nothing in the game changes):
//   CITY_PREVIEW=<cities.json> CITY_OUT=<folder> node tools/build-terrain.js tools/node_modules <cache>
// where cities.json is [{ "code": "ON", "key": "TOR", "metro": { "name": ..., "stops": [...] } }].
// It writes city-<key>.png, city-<key>.json and preview-<key>.png (water in blue) into the folder.
// Needs curl and unzip. The real passes and bridges are hand-made in each state's pack
// (packs/<code>/pack.js); this tool warns about any pass with no mountains nearby.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const [MODS, CACHE] = process.argv.slice(2);
const ONLY = process.argv.slice(4).map((c) => c.toUpperCase());
if (!MODS || !CACHE) {
  console.error("Usage: node tools/build-terrain.js <node_modules> <cache folder>");
  process.exit(1);
}
const { PNG } = require(path.resolve(MODS, "pngjs"));
const GAME = path.join(__dirname, "..");



// Rivers drawn on the map and crossed by bridges (Natural Earth names).
const RIVERS = [
  "Colorado", "Columbia", "Sacramento", "San Joaquin", "Klamath", "Willamette", "Gila", "Rogue", "Eel", "Trinity", "Pit",
  "Feather", "Stanislaus", "Humboldt", "John Day", "Salinas", "Snake", "Deschutes", "American", "Umpqua", "Truckee",
  "Yakima", "Skagit", "Cowlitz", "Chehalis", "Okanogan", "Pend Orielle",
  // British Columbia
  "Fraser", "Thompson", "North Thompson", "Kootenay", "Skeena", "Peace", "Stikine", "Nechako", "Liard", "Nass", "Quesnel",
  "Chilcotin", "Similkameen", "Kettle", "Bulkley", "Elk", "Fort Nelson", "Finlay", "Parsnip", "Harrison", "Lillooet", "Squamish",
  "Bella Coola",
  // The rest of Canada
  "Athabasca", "North Saskatchewan", "South Saskatchewan", "Saskatchewan", "Slave", "Bow", "Red Deer", "Oldman", "Smoky", "Milk",
  "Battle", "Beaver", "Assiniboine", "Red", "Winnipeg", "Nelson", "Churchill", "Qu'Appelle", "Souris", "Ottawa", "R. des Outaouais",
  "St. Lawrence", "Saguenay", "Saint-Maurice", "Richelieu", "Saint John", "Miramichi", "Restigouche", "Niagara", "St. Clair",
  "Detroit", "Moose", "Albany", "Rainy", "Nipigon", "French", "Trent", "Rideau", "Grand", "Thames", "Exploits", "Humber", "Gander",
  "La Grande", "Rupert", "Manicouagan", "Outardes", "Chaudière", "Saint-François", "Yamaska", "Matapédia", "Petitcodiac",
  // The territories and Alaska
  "Yukon", "Mackenzie", "Porcupine", "Tanana", "Kuskokwim", "Susitna", "Copper", "Koyukuk",
  // The rest of the US
  "Mississippi", "Missouri", "Ohio", "Tennessee", "Arkansas", "Rio Grande", "Platte", "North Platte", "South Platte", "Kansas",
  "Illinois", "Wabash", "Cumberland", "Alabama", "Tombigbee", "Chattahoochee", "Savannah", "Susquehanna", "Delaware", "Hudson",
  "Connecticut", "Potomac", "James", "Roanoke", "Pee Dee", "Santee", "Altamaha", "Apalachicola", "Suwannee", "St. Johns",
  "Brazos", "Pecos", "Canadian", "Cimarron", "Yellowstone", "Bighorn", "Green", "Wind", "Bear", "Salmon", "Clearwater",
  "Kootenai", "Clark Fork", "Flathead", "Musselshell", "Niobrara", "Big Sioux", "Minnesota", "Wisconsin", "Rock", "Des Moines",
  "Iowa", "Cedar", "Allegheny", "Monongahela", "Kanawha", "Kentucky", "Scioto", "Muskingum", "Maumee", "Penobscot",
  "Kennebec", "Merrimack", "Neosho", "White", "Ouachita", "Sabine", "Neches", "Atchafalaya", "Pearl", "Yazoo", "Coosa",
  "Tallapoosa", "Flint", "St. Croix", "Chippewa", "Little Missouri", "Cheyenne", "Holston", "Madison", "Sprague", "Cowpasture",
  // Utah, Colorado, New Mexico and Arizona's other rivers
  "San Juan", "Virgin", "Sevier", "Duchesne", "Gunnison", "Dolores", "Animas", "Yampa", "Rio Chama", "Jordan", "Little Snake",
  "Purgatoire", "Little Colorado", "Verde", "Salt", "San Pedro", "Santa Cruz", "Bill Williams",
  // The Plains and Texas
  "Sheyenne", "Heart", "Cannonball", "Belle Fourche", "Loup", "Elk Horn", "Big Blue", "Republican", "Smoky Hill", "Solomon",
  "North Canadian", "Washita", "Verdigris", "Osage", "Nueces", "Guadalupe", "San Antonio", "Crow", "Little Sioux",
  "Wapsipinicon",
  // The Midwest and South Central
  "St. Francis", "Little Red", "Black", "Kaskaskia", "Sangamon", "Gasconade", "Meramec", "Current", "Fox", "Wolf",
  "Menominee", "Muskegon", "Kalamazoo", "St. Joseph", "Tahquamenon", "Great Miami", "Tippecanoe", "Licking", "Calcasieu",
  "Mermentau", "Amite", "Atchafalaya River",
  // The South
  "Big Black", "Big Sunflower", "Black Warrior", "Cahaba", "Duck", "Clinch", "French Broad", "Ocmulgee", "Oconee",
  "Ogeechee", "Satilla", "St. Marys", "Ochlockonee", "New", "Guyandotte", "Conecuh",
  // Florida
  "Saint Johns", "Ocklawaha", "Withlacoochee", "Santa Fe", "Choctawhatchee", "Kissimmee", "Escambia", "Perdido",
  // The Carolinas, Virginia and West Virginia
  "Great Pee Dee", "Yadkin", "Cape Fear", "Tar", "Neuse", "Dan", "Catawba", "Wateree", "Congaree", "Saluda", "Broad",
  "Edisto", "Waccamaw", "Cooper", "Chowan", "Shenandoah", "Rappahannock", "York", "Greenbrier", "Little Kanawha", "Cheat",
  "Big Sandy", "Tug Fk.", "Youghiogheny", "Nolichucky",
  // Pennsylvania and New York
  "W. Branch Susquehanna", "Juniata", "Lehigh", "Schuylkill", "Conemaugh", "Kiskiminetas", "Genesee", "Chemung",
  "Mohawk", "Raquette", "Housatonic", "Winooski",
];
// Lakes Natural Earth leaves unnamed, by their middle (within 0.1°)
const UNNAMED_LAKES = [
  [-90.5, 30.27, "Lake Maurepas"], [-92.75, 29.89, "Grand Lake"], [-92.51, 29.76, "White Lake"],
  [-93.35, 29.96, "Calcasieu Lake"], [-90.25, 29.77, "Lake Salvador"],
];
// Natural Earth spellings to fix
const RIVER_NAMES = { "Pend Orielle": "Pend Oreille", "R. des Outaouais": "Ottawa", "Elk Horn": "Elkhorn", "Atchafalaya River": "Atchafalaya", "Saint Johns": "St. Johns", "Great Pee Dee": "Pee Dee", "Tug Fk.": "Tug Fork", "W. Branch Susquehanna": "West Branch Susquehanna" };
// Natural Earth rivers misnamed, by river number: the Snake (from Pasco up through Idaho to
// Wyoming) is labelled "Columbia" as river 103 (the Columbia itself is river 64)
const RIVER_FIX = { 103: "Snake" };
// ...and a river that runs on under another's name: the Madison (river 7) carries on down the
// Missouri from Three Forks (45.93° N) to Canyon Ferry Lake
// The Chattahoochee (river 250) carries on as the Apalachicola below the Jim Woodruff Dam (30.71° N),
// and the James (river 789) is labelled "Cowpasture" all the way down from the Cowpasture's mouth at
// Iron Gate (37.80° N), past Lynchburg and Richmond to Hopewell (the Cowpasture itself is all north of
// Iron Gate and west of 79.3° W)
const RIVER_SPLIT = { 7: { north: 45.93, name: "Missouri" }, 250: { south: 30.71, name: "Apalachicola" }, 789: { south: 37.8, east: -79.3, name: "James" } };

// ---------- Load the game's map and cities ----------
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
const load = (f) => vm.runInContext(fs.readFileSync(path.join(GAME, f), "utf8"), ctx, { filename: f });
load("js/packs.js");
load("packs/index.js");
ctx.NR.PACK_LIST.forEach((code) => load(`packs/${code}/map.js`));
ctx.NR.PACK_LIST.forEach((code) => load(`packs/${code}/pack.js`));
// The terrain is what this tool makes: until it's made, each state gets an empty one, so the
// game's code counts every state as loaded (NR.isLoaded needs both its map and its terrain)
ctx.NR.PACK_LIST.forEach((code) =>
  ctx.NR.addPackTerrain({ code, box: [0, 0, 0, 0], step: 1, cols: 0, rows: 0, cells: new Uint8Array(0), relief: { src: "", box: [0, 0, 0, 0] }, lakes: [], rivers: [], ranges: [], cities: {} })
);
for (const f of ["js/cities.js", "js/game.js", "js/metro.js"]) load(f);
const NR = ctx.NR;
// Real mountain passes and bridges are hand-made in each state's pack (packs/<code>/pack.js).
const PASSES = NR.PASSES.map((p) => [p.name, p.lat, p.lon]);

// ---------- Downloads ----------
fs.mkdirSync(CACHE, { recursive: true });
function download(url, file, seconds = 120) {
  if (fs.existsSync(file) && fs.statSync(file).size > 0) return file;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  // (to a temporary name first: a download cut off halfway must not stay in the cache; a
  // connection cut off is tried again, up to four times)
  for (let attempt = 1; ; attempt++) {
    try {
      execFileSync("curl", ["-sS", "-f", "-m", String(seconds), "--retry", "3", "-o", file + ".part", url]);
      break;
    } catch (e) {
      if (attempt >= 4) throw e;
      execFileSync("sleep", [String(2 ** attempt)]);
    }
  }
  fs.renameSync(file + ".part", file);
  return file;
}

// ---------- Elevation from terrarium tiles ----------
// A few tiles have a bad row or column: a line of spikes across flat ground (a band of 1,300 m
// "mountains" on a 260 m plateau in northern Manitoba, a row of -6,279 m near Santa Monica). A
// point is a spike when it is over 150 m from the points two away on each side while those two
// agree; a line with more than 32 spikes is bad. A band of bad lines, and the line on each side
// of it, is redrawn between the good lines beyond (only its points over 150 m off that). A band
// often runs on a little into the next tile, with too few spikes there to be found: in the tiles
// beside it, the same lines lose just their spikes.
const spikeAt = (e, i, step) => {
  const u = e[i - 2 * step], d = e[i + 2 * step];
  return Math.abs(u - d) < 60 && Math.abs(e[i] - (u + d) / 2) > 150;
};
function badLines(e, across) {
  const along = across === 256 ? 1 : 256;
  const bad = [];
  for (let line = 2; line < 254; line++) {
    let spikes = 0;
    for (let k = 0; k < 256; k++) if (spikeAt(e, line * across + k * along, across)) spikes++;
    if (spikes > 32) bad.push(line);
  }
  return bad;
}
function repairBands(e, across, bad) {
  const along = across === 256 ? 1 : 256;
  for (let b = 0; b < bad.length; ) {
    let last = b;
    while (last + 1 < bad.length && bad[last + 1] - bad[last] <= 2) last++;
    const lo = Math.max(0, bad[b] - 3), hi = Math.min(255, bad[last] + 3); // the good lines
    for (let k = 0; k < 256; k++) {
      const u = e[lo * across + k * along], d = e[hi * across + k * along];
      for (let line = lo + 1; line < hi; line++) {
        const i = line * across + k * along, want = u + ((d - u) * (line - lo)) / (hi - lo);
        if (Math.abs(e[i] - want) > 150) e[i] = want;
      }
    }
    b = last + 1;
  }
}
function repairSpikes(e, across, lines) {
  const along = across === 256 ? 1 : 256;
  for (const line of lines)
    for (let l = Math.max(2, line - 1); l <= Math.min(253, line + 1); l++)
      for (let k = 0; k < 256; k++) {
        const i = l * across + k * along;
        if (spikeAt(e, i, across)) e[i] = (e[i - 2 * across] + e[i + 2 * across]) / 2;
      }
}
function elevation(z) {
  const tiles = new Map();
  const found = new Map(); // each tile's bad rows and columns, as it came
  const n = 2 ** z;
  function raw(tx, ty) {
    const file = download(`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${z}/${tx}/${ty}.png`, path.join(CACHE, "terrarium", String(z), String(tx), ty + ".png"));
    const png = PNG.sync.read(fs.readFileSync(file));
    const e = new Float32Array(256 * 256);
    for (let i = 0; i < e.length; i++) e[i] = png.data[i * 4] * 256 + png.data[i * 4 + 1] + png.data[i * 4 + 2] / 256 - 32768;
    return e;
  }
  function badOf(tx, ty, e) {
    const key = tx + "/" + ty;
    if (!found.has(key)) {
      if (ty < 0 || ty >= n) return { rows: [], cols: [] };
      e = e || raw(tx, ty);
      found.set(key, { rows: badLines(e, 256), cols: badLines(e, 1) });
    }
    return found.get(key);
  }
  function tile(tx, ty) {
    const key = tx + "/" + ty;
    if (!tiles.has(key)) {
      const e = raw(tx, ty);
      const own = badOf(tx, ty, e);
      repairBands(e, 256, own.rows);
      repairBands(e, 1, own.cols);
      const beside = (dx, dy, kind) => badOf((((tx + dx) % n) + n) % n, ty + dy)[kind].filter((l) => !own[kind].includes(l));
      repairSpikes(e, 256, [...beside(-1, 0, "rows"), ...beside(1, 0, "rows")]);
      repairSpikes(e, 1, [...beside(0, -1, "cols"), ...beside(0, 1, "cols")]);
      tiles.set(key, e);
    }
    return tiles.get(key);
  }
  const pixel = (px, py) => {
    const tx = Math.floor(px / 256), ty = Math.floor(py / 256);
    return tile(((tx % n) + n) % n, ty)[(py - ty * 256) * 256 + (px - tx * 256)];
  };
  // Elevation at a longitude, latitude (bilinear between pixels).
  return (lon, lat) => {
    const r = (lat * Math.PI) / 180;
    const x = ((lon + 180) / 360) * n * 256 - 0.5;
    const y = ((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * n * 256 - 0.5;
    const x0 = Math.floor(x), y0 = Math.floor(y), fx = x - x0, fy = y - y0;
    return (
      pixel(x0, y0) * (1 - fx) * (1 - fy) + pixel(x0 + 1, y0) * fx * (1 - fy) + pixel(x0, y0 + 1) * (1 - fx) * fy + pixel(x0 + 1, y0 + 1) * fx * fy
    );
  };
}
// Steepness in degrees at a point, measured h degrees to each side.
function slopeAt(elev, lon, lat, h) {
  const mx = h * 111320 * Math.cos((lat * Math.PI) / 180);
  const my = h * 110574;
  const dx = (elev(lon + h, lat) - elev(lon - h, lat)) / (2 * mx);
  const dy = (elev(lon, lat + h) - elev(lon, lat - h)) / (2 * my);
  return (Math.atan(Math.hypot(dx, dy)) * 180) / Math.PI;
}
// Hillshade from 0 (dark) to 1 (lit), light from the northwest.
function shadeAt(elev, lon, lat, h, zf) {
  const mx = h * 111320 * Math.cos((lat * Math.PI) / 180);
  const my = h * 110574;
  const dx = ((elev(lon + h, lat) - elev(lon - h, lat)) / (2 * mx)) * zf;
  const dy = ((elev(lon, lat + h) - elev(lon, lat - h)) / (2 * my)) * zf;
  const slope = Math.atan(Math.hypot(dx, dy));
  const aspect = Math.atan2(dy, -dx);
  const zen = (45 * Math.PI) / 180;
  const az = ((360 - 315 + 90) * Math.PI) / 180;
  return Math.max(0, Math.cos(zen) * Math.cos(slope) + Math.sin(zen) * Math.sin(slope) * Math.cos(az - aspect));
}
// Shaded relief as a picture: dark where shaded, light where lit, see-through on flat ground.
// keep(lon, lat) says which pixels matter (others stay see-through, which keeps the file small).
function reliefPng(file, lon0, lat1, step, w, h, shade, keep) {
  const png = new PNG({ width: w, height: h });
  const flat = Math.cos((45 * Math.PI) / 180);
  for (let j = 0; j < h; j++)
    for (let i = 0; i < w; i++) {
      if (keep && !keep(lon0 + (i + 0.5) * step, lat1 - (j + 0.5) * step)) continue;
      const s = shade(lon0 + (i + 0.5) * step, lat1 - (j + 0.5) * step);
      const d = s - flat;
      const k = (j * w + i) * 4;
      const v = d < 0 ? 0 : 255;
      png.data[k] = png.data[k + 1] = png.data[k + 2] = v;
      png.data[k + 3] = Math.max(0, Math.min(255, Math.round((d < 0 ? -d * 330 : d * 210) / 6) * 6)); // fewer levels: smaller file
    }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, PNG.sync.write(png, { colorType: 6 }));
  return fs.statSync(file).size;
}

// ---------- Shapes ----------
const round = (v) => Math.round(v * 1000) / 1000;
// Douglas-Peucker simplification of a list of [lon, lat] points.
function simplify(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let best = -1, far = 0;
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const len = Math.hypot(bx - ax, by - ay);
    for (let i = a + 1; i < b; i++) {
      // Distance from the line a-b (or from point a, when a loop starts and ends there).
      const d = len < 1e-9 ? Math.hypot(pts[i][0] - ax, pts[i][1] - ay) : Math.abs((bx - ax) * (ay - pts[i][1]) - (ax - pts[i][0]) * (by - ay)) / len;
      if (d > far) (far = d), (best = i);
    }
    if (far > tol) {
      keep[best] = 1;
      stack.push([a, best], [best, b]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}
const flat = (pts) => pts.flatMap(([x, y]) => [round(x), round(y)]);
function inRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
    const xi = ring[i], yi = ring[i + 1], xj = ring[j], yj = ring[j + 1];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
// Is a point inside an even number of these rings? Each ring's box is checked first (big
// provinces have thousands of rings).
function ringTester(rings) {
  const boxes = rings.map((r) => {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (let i = 0; i < r.length; i += 2) (x0 = Math.min(x0, r[i])), (x1 = Math.max(x1, r[i])), (y0 = Math.min(y0, r[i + 1])), (y1 = Math.max(y1, r[i + 1]));
    return [x0, y0, x1, y1];
  });
  return (lon, lat) => {
    let inside = false;
    for (let k = 0; k < rings.length; k++) {
      const b = boxes[k];
      if (lon < b[0] || lon > b[2] || lat < b[1] || lat > b[3]) continue;
      if (inRing(lon, lat, rings[k])) inside = !inside;
    }
    return inside;
  };
}
const onLand = ringTester(NR.MAP.land);

// ---------- Each state's terrain ----------
// For every state in the game: a mountains grid and a relief picture over the state (and a
// little around it), the lakes, rivers and named ranges that touch it, and its city maps'
// hills and water. Written to packs/<code>/terrain.js, packs/<code>/relief.png and
// packs/<code>/city-<key>.png.
const STEP = 0.05;
const RSTEP_BASE = 0.02; // relief picture: one pixel every 0.02° (0.03° for a very big state)
const elev8 = elevation(8);
const elev11 = elevation(11);
// Each cell: 0 flat (or sea), 1 hills, 2 mountains, 3 high mountains, from the average
// steepness of 16 points inside it (and its height, for the highest ranges).
const SLOPE = { hills: 3.5, mountains: 8, high: 14 };
const LETTER = "ABCD";
// Run-length code: a letter per cell kind and a count, e.g. "A12C3".
function rle(arr) {
  let out = "";
  for (let i = 0; i < arr.length; ) {
    let j = i;
    while (j < arr.length && arr[j] === arr[i]) j++;
    out += LETTER[arr[i]] + (j - i > 1 ? j - i : "");
    i = j;
  }
  return out;
}
const ringsBox = (rings) => {
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  rings.forEach((ring) => {
    for (let i = 0; i < ring.length; i += 2) {
      x0 = Math.min(x0, ring[i]);
      x1 = Math.max(x1, ring[i]);
      y0 = Math.min(y0, ring[i + 1]);
      y1 = Math.max(y1, ring[i + 1]);
    }
  });
  return [x0, y0, x1, y1];
};

// ---------- Natural Earth: lakes, rivers, range names ----------
const NE = (name) => JSON.parse(fs.readFileSync(download(`https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/${name}.geojson`, path.join(CACHE, "ne", name + ".geojson")), "utf8"));
const polys = (g) => (g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : []);
const lines = (g) => (g.type === "LineString" ? [g.coordinates] : g.type === "MultiLineString" ? g.coordinates : []);
const LAKES = [...NE("ne_10m_lakes").features, ...NE("ne_10m_lakes_north_america").features];
const RIVER_FEATURES = [...NE("ne_10m_rivers_lake_centerlines").features, ...NE("ne_10m_rivers_north_america").features];
// Mountain range names (Natural Earth), used only to name a range in messages.
const RANGE_NAMES = { "SIERRA NEVADA": "the Sierra Nevada", "COAST RANGES": "the Coast Ranges", "CASCADE RANGE": "the Cascade Range", "Klamath Mts.": "the Klamath Mountains", "Mogollon Rim": "the Mogollon Rim", "COLUMBIA MTS.": "the Columbia Mountains", "ROCKY MOUNTAINS": "the Rocky Mountains", "COAST MOUNTAINS": "the Coast Mountains", "Cassiar Mts.": "the Cassiar Mountains",
  "ALASKA RANGE": "the Alaska Range", "BROOKS RANGE": "the Brooks Range", "CHUGACH MTS.": "the Chugach Mountains", "Wrangell Mts.": "the Wrangell Mountains",
  "MACKENZIE MTS.": "the Mackenzie Mountains", "SELWYN MTS.": "the Selwyn Mountains", "Bitterroot Range": "the Bitterroot Range", "Wasatch Range": "the Wasatch Range",
  "Black Hills": "the Black Hills", "Ouachita Mts.": "the Ouachita Mountains", "Ozark Plateau": "the Ozarks", "APPALACHIAN MTS.": "the Appalachians",
  "Blue Ridge": "the Blue Ridge", "ALLEGHENY PLATEAU": "the Allegheny Plateau", "CUMBERLAND PLAT.": "the Cumberland Plateau", "Adirondack Mts.": "the Adirondacks",
  "TORNGAT MTS.": "the Torngat Mountains", "Front Range": "the Front Range" };
const RANGES = NE("ne_10m_geography_regions_polys").features.filter((f) => RANGE_NAMES[f.properties.name || f.properties.NAME]);
const idOf = (name, x, y) => `${name}@${round(x)},${round(y)}`;

function buildState(code) {
  const mine = NR.MAP.stateLand[code];
  const onState = ringTester(mine);
  const [X0, Y0, X1, Y1] = ringsBox(mine);
  const box = [Math.floor((X0 - 0.1) / STEP) * STEP, Math.floor((Y0 - 0.1) / STEP) * STEP, Math.ceil((X1 + 0.1) / STEP) * STEP, Math.ceil((Y1 + 0.1) / STEP) * STEP].map(round);
  const cols = Math.round((box[2] - box[0]) / STEP);
  const rows = Math.round((box[3] - box[1]) / STEP);
  const inBox = (x, y) => x >= box[0] && x <= box[2] && y >= box[1] && y <= box[3];

  // The grid. Sea is a cell that is in no state of the game and at sea level.
  const grid = new Uint8Array(cols * rows);
  const nearMine = new Uint8Array(cols * rows); // in this state, or right next to it
  const counts = [0, 0, 0, 0];
  for (let r = 0; r < rows; r++) {
    const lat = box[3] - (r + 0.5) * STEP;
    for (let c = 0; c < cols; c++) {
      const lon = box[0] + (c + 0.5) * STEP;
      const ours = onState(lon, lat);
      if (ours || onState(lon - STEP / 2, lat) || onState(lon + STEP / 2, lat) || onState(lon, lat - STEP / 2) || onState(lon, lat + STEP / 2)) nearMine[r * cols + c] = 1;
      if (!ours && !onLand(lon, lat) && elev8(lon, lat) <= 1) continue; // sea
      let sum = 0, high = 0;
      for (let a = 0; a < 4; a++)
        for (let b = 0; b < 4; b++) {
          const x = lon + (a - 1.5) * (STEP / 4), y = lat + (b - 1.5) * (STEP / 4);
          sum += slopeAt(elev8, x, y, 0.006);
          high = Math.max(high, elev8(x, y));
        }
      const slope = sum / 16;
      let k = slope >= SLOPE.high ? 3 : slope >= SLOPE.mountains ? 2 : slope >= SLOPE.hills ? 1 : 0;
      if (k === 2 && high > 2800) k = 3;
      grid[r * cols + c] = k;
      if (ours) counts[k]++;
    }
  }

  // Relief picture (Classic look), kept only over and right next to this state. A very big state
  // (British Columbia) gets a coarser one, so its picture stays a reasonable size.
  const RSTEP = (box[2] - box[0]) * (box[3] - box[1]) > 150 ? 0.03 : RSTEP_BASE;
  const rw = Math.round((box[2] - box[0]) / RSTEP), rh = Math.round((box[3] - box[1]) / RSTEP);
  const keep = (lon, lat) => {
    const c = Math.floor((lon - box[0]) / STEP), r = Math.floor((box[3] - lat) / STEP);
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) if (nearMine[(r + a) * cols + c + b]) return true;
    return false;
  };
  const reliefSize = reliefPng(path.join(GAME, "packs", code, "relief.png"), box[0], box[3], RSTEP, rw, rh, (lon, lat) => shadeAt(elev8, lon, lat, 0.012, 2.2), keep);

  // Lakes that touch this state (their middle or an edge on its land)
  const lakes = [];
  for (const f of LAKES)
    for (const poly of polys(f.geometry)) {
      const outer = poly[0];
      if (!outer.some(([x, y]) => inBox(x, y))) continue;
      const cx = outer.reduce((s, p) => s + p[0], 0) / outer.length, cy = outer.reduce((s, p) => s + p[1], 0) / outer.length;
      if (!onState(cx, cy) && !outer.some(([x, y]) => onState(x, y))) continue;
      const ring = simplify(outer, 0.004);
      if (ring.length < 4) continue;
      const name = f.properties.name || f.properties.NAME || UNNAMED_LAKES.find(([x, y]) => Math.abs(cx - x) < 0.1 && Math.abs(cy - y) < 0.1)?.[2] || "Lake";
      if (lakes.some((l) => l.name === name && Math.abs(l.ring[0] - ring[0][0]) < 0.05)) continue; // listed twice
      // Part of a bigger lake already listed (Natural Earth's North America file has Georgian Bay
      // on top of Lake Huron): most of nine points inside the bigger one, off its islands. (Two
      // lakes on top of each other would show as land where they overlap.) A lake on an island
      // (Lake Mindemoya on Manitoulin) is kept.
      const samples = [[cx, cy], ...[0, 1, 2, 3, 4, 5, 6, 7].map((k) => outer[Math.floor((k * outer.length) / 8)]).map(([x, y]) => [cx + (x - cx) * 0.7, cy + (y - cy) * 0.7])];
      const inLake = (l, x, y) => inRing(x, y, l.ring) && !(l.holes || []).some((h) => inRing(x, y, h));
      if (lakes.some((l) => samples.filter(([x, y]) => inLake(l, x, y)).length >= 6)) continue;
      // Its islands of 10 km² or more (Manitoulin in Lake Huron, Hecla in Lake Winnipeg) are land
      const km2 = (r) => Math.abs(r.reduce((a, [x, y], i) => a + x * r[(i + 1) % r.length][1] - r[(i + 1) % r.length][0] * y, 0) / 2) * 111.32 * 111.32 * Math.cos((r[0][1] * Math.PI) / 180);
      const holes = poly.slice(1).filter((h) => km2(h) >= 10).map((h) => simplify(h, 0.004)).filter((h) => h.length >= 4).map(flat);
      lakes.push({ id: idOf(name, ring[0][0], ring[0][1]), name, ring: flat(ring), ...(holes.length ? { holes } : {}) });
    }
  // Rivers: the parts inside this state's box that cross its land
  const rivers = [];
  const seen = new Set();
  for (const f of RIVER_FEATURES) {
    const neName = f.properties.name || f.properties.NAME;
    if (!RIVERS.includes(neName) || !/river/i.test(f.properties.featurecla || "")) continue;
    const base = RIVER_FIX[f.properties.rivernum] || RIVER_NAMES[neName] || neName;
    const split = RIVER_SPLIT[f.properties.rivernum];
    const nameAt = (p) => (split && (p[1] > split.north || p[1] < split.south || p[0] > split.east) ? split.name : base);
    for (const line of lines(f.geometry)) {
      let part = [];
      let name = nameAt(line[0]);
      const flush = () => {
        // (a stretch is known by both its ends: Natural Earth has stray two-point pieces that start
        // where a real stretch starts, like the Yukon's at Fort Yukon. Pieces under about a kilometre
        // are left out: the game knows a stretch by its name and first point, so a stub would hide
        // the real stretch)
        const ends = part.length > 1 ? flat([part[0], part[part.length - 1]]) : [];
        const length = part.reduce((n, p, i) => (i ? n + Math.hypot(p[0] - part[i - 1][0], p[1] - part[i - 1][1]) : 0), 0);
        if (part.length > 1 && length >= 0.01 && part.some(([x, y]) => onState(x, y))) {
          const key = name + ":" + ends.join(",");
          if (!seen.has(key)) {
            seen.add(key); // the same river can come from both files: one copy
            rivers.push({ id: idOf(name, part[0][0], part[0][1]), name, line: flat(simplify(part, 0.006)) });
          }
        }
        part = [];
      };
      for (const p of line) {
        if (nameAt(p) !== name) {
          // the river takes its other name here: the stretch so far ends at this point
          if (inBox(p[0], p[1])) part.push(p);
          flush();
          name = nameAt(p);
        }
        if (inBox(p[0], p[1])) part.push(p);
        else flush();
      }
      flush();
    }
  }
  // Named mountain ranges over the box
  const ranges = [];
  for (const f of RANGES)
    for (const poly of polys(f.geometry))
      if (poly[0].some(([x, y]) => inBox(x, y))) {
        const name = RANGE_NAMES[f.properties.name || f.properties.NAME];
        ranges.push({ id: idOf(name, poly[0][0][0], poly[0][0][1]), name, ring: flat(simplify(poly[0], 0.02)) });
      }
  console.log(
    `${code}: grid ${cols} x ${rows} (flat ${counts[0]}, hills ${counts[1]}, mountains ${counts[2]}, high ${counts[3]}), relief ${Math.round(reliefSize / 1024)} KB, ` +
      `${lakes.length} lakes, ${rivers.length} river stretches, ${ranges.length} ranges`
  );
  return { code, box, step: STEP, cols, rows, grid, relief: { src: `packs/${code}/relief.png`, box: [box[0], box[3] - rh * RSTEP, box[0] + rw * RSTEP, box[3]].map(round) }, lakes, rivers, ranges, cities: {} };
}

// ---------- Cities: water and hills ----------
// Every city map gets an elevation grid (one letter per cell, 12 m steps; "~" = water)
// and water outlines. Water is the ocean around the U.S. Census Bureau's detailed county
// shapes (1:500,000) that is also at sea level, plus the bays, harbors, lakes and wide
// rivers of the Census "area water" maps.
const CSTEP = 0.004; // elevation grid cell, about 400 m
const FSTEP = 0.001; // water outline detail, about 100 m
const B64 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

// Fill polygons into a grid of cells (row 0 at the top), even-odd, one row at a time.
function fillRings(mask, cb, step, cols, rows, rings) {
  const own = new Uint8Array(cols * rows);
  for (let r = 0; r < rows; r++) {
    const lat = cb[3] - (r + 0.5) * step;
    const xs = [];
    for (const ring of rings)
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i], [xj, yj] = ring[j];
        if (yi > lat !== yj > lat) xs.push(xi + ((lat - yi) * (xj - xi)) / (yj - yi));
      }
    xs.sort((a, b) => a - b);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const c0 = Math.max(0, Math.ceil((xs[k] - cb[0]) / step - 0.5));
      const c1 = Math.min(cols - 1, Math.floor((xs[k + 1] - cb[0]) / step - 0.5));
      for (let c = c0; c <= c1; c++) own[r * cols + c] = 1;
    }
  }
  for (let i = 0; i < own.length; i++) if (own[i]) mask[i] = 1;
}

// ---------- Canada and Mexico near a city ----------
const boxesMeet = (a, b) => a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3];
// Canadian land in a box: census subdivisions from Statistics Canada's cartographic boundary
// file, which already leaves out the Great Lakes, the St. Lawrence and other big water.
function canadaLand(cb) {
  if (!Object.values(NR.AREAS).some((a) => a.country === "CAN" && boxesMeet(a.box, cb))) return [];
  const service = "https://geo.statcan.gc.ca/geo_wa/rest/services/2021/Cartographic_boundary_files/MapServer/9/query";
  const q = `?geometry=${cb.join(",")}&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outFields=CSDUID,CSDNAME&outSR=4326&geometryPrecision=5&returnGeometry=true&f=geojson`;
  const answer = JSON.parse(fs.readFileSync(download(service + q, path.join(CACHE, "canada", "csd-box", cb.join("_") + ".json"), 600), "utf8"));
  if (answer.exceededTransferLimit) throw new Error(`Too many census subdivisions in ${cb}: make the city smaller`);
  return answer.features;
}
// Lakes and rivers in a box, from CanVec (Natural Resources Canada, 1:250,000), for one province.
const SGC = { 10: "NL", 11: "PE", 12: "NS", 13: "NB", 24: "QC", 35: "ON", 46: "MB", 47: "SK", 48: "AB", 59: "BC", 60: "YT", 61: "NT", 62: "NU" };
async function canvecWater(pr, cb) {
  const kept = path.join(CACHE, "canvec", `water-${pr}-${cb.join("_")}.json`);
  if (fs.existsSync(kept)) return JSON.parse(fs.readFileSync(kept, "utf8"));
  const shapefile = require(path.resolve(MODS, "shapefile"));
  const name = `canvec_250K_${pr}_Hydro`;
  const zip = download(`https://ftp.maps.canada.ca/pub/nrcan_rncan/vector/canvec/shp/Hydro/${name}_shp.zip`, path.join(CACHE, "canvec", name + "_shp.zip"), 3600);
  const shp = path.join(CACHE, "canvec", name, "waterbody_2.shp");
  if (!fs.existsSync(shp)) execFileSync("unzip", ["-o", "-q", zip, `${name}/waterbody_2.*`, "-d", path.join(CACHE, "canvec")]);
  const list = [];
  const src = await shapefile.open(shp, shp.replace(/shp$/, "dbf"));
  for (let r = await src.read(); !r.done; r = await src.read())
    for (const poly of polys(r.value.geometry)) {
      const [x0, y0, x1, y1] = ringsBox([poly[0].flat()]);
      if (boxesMeet([x0, y0, x1, y1], cb)) list.push(poly);
    }
  fs.writeFileSync(kept, JSON.stringify(list));
  return list;
}
const inMexico = NR.AREAS.MEX ? ringTester(NR.AREAS.MEX.outline) : () => false;
// Does a box come within about 15 km of Mexico? (Land there isn't in our shapes, so the sea is
// told apart from it by height.)
function nearMexico(cb) {
  const b = [cb[0] - 0.15, cb[1] - 0.15, cb[2] + 0.15, cb[3] + 0.15];
  if (!NR.AREAS.MEX || !boxesMeet(NR.AREAS.MEX.box, b)) return false;
  for (let i = 0; i <= 4; i++) for (let j = 0; j <= 4; j++) if (inMexico(b[0] + ((b[2] - b[0]) * i) / 4, b[1] + ((b[3] - b[1]) * j) / 4)) return true;
  return NR.AREAS.MEX.outline.some((ring) => ring.some((v, k) => k % 2 === 0 && v > b[0] && v < b[2] && ring[k + 1] > b[1] && ring[k + 1] < b[3]));
}

let countyShapes = null; // every U.S. county, 1:500,000
async function buildCity(code, key, metro, outDir) {
  const shapefile = require(path.resolve(MODS, "shapefile"));
  const { contours } = await import(path.resolve(MODS, "d3-contour/src/index.js"));
  if (!countyShapes) {
    const zip = download("https://www2.census.gov/geo/tiger/GENZ2023/shp/cb_2023_us_county_500k.zip", path.join(CACHE, "census", "cb_2023_us_county_500k.zip"));
    const shp = path.join(CACHE, "census", "cb_2023_us_county_500k.shp");
    if (!fs.existsSync(shp)) execFileSync("unzip", ["-o", "-q", zip, "-d", path.join(CACHE, "census")]);
    countyShapes = [];
    const source = await shapefile.open(shp, shp.replace(/shp$/, "dbf"));
    for (let r = await source.read(); !r.done; r = await source.read()) countyShapes.push({ fips: r.value.properties.STATEFP + r.value.properties.COUNTYFP, geometry: r.value.geometry });
  }
  // Bays, harbors, lakes and wide rivers inside a county (Census TIGER "area water").
  async function waterOf(fips) {
    const name = `tl_2023_${fips}_areawater`;
    const z = download(`https://www2.census.gov/geo/tiger/TIGER2023/AREAWATER/${name}.zip`, path.join(CACHE, "areawater", name + ".zip"));
    const file = path.join(CACHE, "areawater", name + ".shp");
    if (!fs.existsSync(file)) execFileSync("unzip", ["-o", "-q", z, "-d", path.join(CACHE, "areawater")]);
    const list = [];
    const src = await shapefile.open(file, file.replace(/shp$/, "dbf"));
    for (let r = await src.read(); !r.done; r = await src.read()) if (r.value.properties.AWATER >= 300000) list.push(r.value.geometry); // 0.3 km² and up
    return list;
  }
  const xs = metro.stops.map((s) => s.lon), ys = metro.stops.map((s) => s.lat);
  const pad = Math.max(0.03, 0.2 * Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)));
  const cb = [Math.min(...xs) - pad, Math.min(...ys) - pad, Math.max(...xs) + pad, Math.max(...ys) + pad].map((v) => Math.round(v / CSTEP) * CSTEP).map(round);
  // Land, from the county shapes that touch the city's box (any state).
  const fc = Math.round((cb[2] - cb[0]) / FSTEP), fr = Math.round((cb[3] - cb[1]) / FSTEP);
  const land = new Uint8Array(fc * fr);
  const near = (poly) => poly[0].some(([x, y]) => x > cb[0] - 0.5 && x < cb[2] + 0.5 && y > cb[1] - 0.5 && y < cb[3] + 0.5);
  const inside = [];
  for (const county of countyShapes)
    for (const poly of polys(county.geometry)) {
      if (!near(poly)) continue;
      fillRings(land, cb, FSTEP, fc, fr, poly);
      if (!inside.includes(county.fips)) inside.push(county.fips);
    }
  // Canadian land (census subdivisions), when the city is in or near Canada.
  const provinces = new Set();
  for (const f of canadaLand(cb))
    for (const poly of polys(f.geometry)) {
      fillRings(land, cb, FSTEP, fc, fr, poly);
      provinces.add(SGC[f.properties.CSDUID.slice(0, 2)]);
    }
  // Bays, harbors, lakes and rivers inside the counties are water too.
  const inner = new Uint8Array(fc * fr);
  for (const fips of inside) for (const g of await waterOf(fips)) for (const poly of polys(g)) if (near(poly)) fillRings(inner, cb, FSTEP, fc, fr, poly);
  // And in Canada, CanVec's lakes and rivers (any size: ponds too small to show are left out below).
  for (const pr of provinces) for (const poly of await canvecWater(pr, cb)) fillRings(inner, cb, FSTEP, fc, fr, poly);
  // Water: everything outside the land shapes (the sea, the Great Lakes). Near Mexico, whose
  // land isn't in the shapes, only what is at sea level (so Tijuana, south of San Diego, stays land).
  const mexico = nearMexico(cb);
  const water = new Float64Array(fc * fr);
  let wet = 0;
  for (let i = 0; i < land.length; i++) {
    if (inner[i]) {
      water[i] = 1;
      wet++;
      continue;
    }
    if (land[i]) continue;
    const lon = cb[0] + ((i % fc) + 0.5) * FSTEP, lat = cb[3] - (Math.floor(i / fc) + 0.5) * FSTEP;
    if (!mexico || elev11(lon, lat) < 3) (water[i] = 1), wet++;
  }
  // Water outlines (and islands in them), leaving out ponds smaller than about 0.2 km².
  const shapes = [];
  const area = (ring) => Math.abs(ring.reduce((a, [x, y], i) => a + x * ring[(i + 1) % ring.length][1] - ring[(i + 1) % ring.length][0] * y, 0) / 2);
  if (wet)
    for (const poly of contours().size([fc, fr]).thresholds([0.5])(water)[0].coordinates) {
      if (area(poly[0]) < 20) continue; // in grid cells of 0.001°
      for (const ring of poly) {
        if (area(ring) < 20) continue;
        const pts = simplify(ring.map(([c, r]) => [cb[0] + c * FSTEP, cb[3] - r * FSTEP]), 0.0004);
        if (pts.length >= 4) shapes.push(flat(pts));
      }
    }
  // Elevation grid; a cell is water if most of it is.
  const cc = Math.round((cb[2] - cb[0]) / CSTEP), cr = Math.round((cb[3] - cb[1]) / CSTEP);
  const k = Math.round(CSTEP / FSTEP);
  let text = "", top = 0, wetCells = 0;
  for (let r = 0; r < cr; r++)
    for (let c = 0; c < cc; c++) {
      let n = 0;
      for (let a = 0; a < k; a++) for (let b = 0; b < k; b++) n += water[(r * k + a) * fc + c * k + b] || 0;
      const lon = cb[0] + (c + 0.5) * CSTEP, lat = cb[3] - (r + 0.5) * CSTEP;
      const e = elev11(lon, lat);
      top = Math.max(top, e);
      if (n > (k * k) / 2) {
        text += "~";
        wetCells++;
      } else text += B64[Math.max(0, Math.min(63, Math.round(e / 12)))];
    }
  const rw2 = Math.round((cb[2] - cb[0]) / 0.001), rh2 = Math.round((cb[3] - cb[1]) / 0.001);
  const src = `packs/${code}/city-${key}.png`;
  const size = reliefPng(outDir ? path.join(outDir, `city-${key}.png`) : path.join(GAME, src), cb[0], cb[3], 0.001, rw2, rh2, (lon, lat) => shadeAt(elev11, lon, lat, 0.0012, 1.6));
  if (outDir) {
    // A quick look: water blue, land shaded, the stops as dark dots.
    const png = new PNG({ width: fc, height: fr });
    for (let i = 0; i < fc * fr; i++) {
      const lon = cb[0] + ((i % fc) + 0.5) * FSTEP, lat = cb[3] - (Math.floor(i / fc) + 0.5) * FSTEP;
      const v = Math.round(150 + 90 * shadeAt(elev11, lon, lat, 0.0012, 1.6));
      const rgb = water[i] ? [90, 150, 215] : [v, v - 6, v - 22];
      png.data.set([...rgb, 255], i * 4);
    }
    for (const s of metro.stops) {
      const c = Math.round((s.lon - cb[0]) / FSTEP), r = Math.round((cb[3] - s.lat) / FSTEP);
      for (let a = -4; a <= 4; a++) for (let b = -4; b <= 4; b++) if (a * a + b * b <= 16 && r + a >= 0 && r + a < fr && c + b >= 0 && c + b < fc) png.data.set([30, 30, 30, 255], ((r + a) * fc + c + b) * 4);
    }
    fs.writeFileSync(path.join(outDir, `preview-${key}.png`), PNG.sync.write(png));
  }
  console.log(`  ${key}: ${cc} x ${cr} cells, ${wetCells} water cells, ${shapes.length} water shapes, highest ${Math.round(top)} m, relief ${Math.round(size / 1024)} KB`);
  return { box: cb, step: CSTEP, cols: cc, rows: cr, elev: text, water: shapes, relief: { src, box: [cb[0], cb[3] - rh2 * 0.001, cb[0] + rw2 * 0.001, cb[3]].map(round) } };
}

// ---------- Build every state, check the passes, and write ----------
(async () => {
  if (process.env.CITY_PREVIEW) {
    const out = process.env.CITY_OUT || ".";
    fs.mkdirSync(out, { recursive: true });
    for (const { code, key, metro } of JSON.parse(fs.readFileSync(process.env.CITY_PREVIEW, "utf8"))) {
      const city = await buildCity(code, key, metro, out);
      fs.writeFileSync(path.join(out, `city-${key}.json`), JSON.stringify(city));
    }
    return;
  }
  const built = [];
  for (const code of NR.PACK_LIST.filter((c) => !ONLY.length || ONLY.includes(c))) {
    const t = buildState(code);
    for (const [key, metro] of Object.entries((NR.PACKS[code] && NR.PACKS[code].metros) || {})) t.cities[key] = await buildCity(code, key, metro);
    built.push(t);
  }
  // A pass with no mountains nearby still works, but it's worth a look
  const heightAt = (lon, lat) => {
    for (const t of built) {
      const c = Math.floor((lon - t.box[0]) / STEP), r = Math.floor((t.box[3] - lat) / STEP);
      if (c >= 0 && c < t.cols && r >= 0 && r < t.rows) return t.grid[r * t.cols + c];
    }
    return 0;
  };
  const covered = (lon, lat) => built.some((t) => lon >= t.box[0] && lon <= t.box[2] && lat >= t.box[1] && lat <= t.box[3]);
  const flatPasses = PASSES.filter(([, lat, lon]) => covered(lon, lat)).filter(([, lat, lon]) => {
    let most = 0;
    for (let dx = -2; dx <= 2; dx++) for (let dy = -2; dy <= 2; dy++) most = Math.max(most, heightAt(lon + dx * STEP, lat + dy * STEP));
    return most < 2;
  });
  if (flatPasses.length) console.log(`Passes with no mountains within ~7 mi (harmless): ${flatPasses.map((p) => p[0]).join(", ")}`);
  for (const t of built) {
    const out =
      `// National Railways: real geography of ${NR.STATE_NAMES[t.code]}. Generated by tools/build-terrain.js: do not edit by hand.\n` +
      "// Elevation: AWS Terrain Tiles (SRTM, USGS and others). Lakes, rivers and range names: Natural Earth\n" +
      "// (public domain). City coastlines: U.S. Census Bureau cartographic boundaries and TIGER area water.\n" +
      "// grid: one letter per cell (A flat or sea, B hills, C mountains, D high mountains), row by row from\n" +
      '// the northwest corner, run-length coded ("C12" = 12 cells).\n' +
      "NR.addPackTerrain(" +
      JSON.stringify({ ...t, grid: rle(t.grid) }) +
      ");\n";
    fs.writeFileSync(path.join(GAME, "packs", t.code, "terrain.js"), out);
    console.log(`Wrote packs/${t.code}/terrain.js, ${Math.round(out.length / 1024)} KB`);
  }
})();
