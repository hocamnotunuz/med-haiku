// National Railways pack: Utah.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/UT/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/UT/raw.
NR.addPack({
  code: "UT",
  name: "Utah",
  // A game that starts here begins owning these counties (Salt Lake City, Provo and Heber): two
  // types of place, so the first track (Salt Lake City–Heber, the nearest pair, over Parleys
  // Summit as I-80 and US-40 go) has riders. Davis (Layton) would be the natural third county,
  // but Salt Lake City–Layton is nearer still and joins two metros, which carries nobody in
  // "A type of place"; Tooele's line to Provo is blocked by Utah Lake (NOTES.md).
  start: ["ut-salt-lake", "ut-utah", "ut-wasatch"],
  // Main stations: one per county region, at its biggest city (every one is; no exceptions).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to. Points are the Census points, except four moved to
  // downtown (Salt Lake City, Brigham City, Heber and Cedar City: NOTES.md).
  stations: [
    // Level 1: Salt Lake City, the Wasatch Front and the Wasatch Back
    // Salt Lake City: the capital, size 4 by its 1.19 million (as Sacramento and Spokane). At
    // downtown (Temple Square); the Census point is 2.4 miles west. The only big airport.
    { id: "SLC", name: "Salt Lake City", county: "ut-salt-lake", lat: 40.76, lon: -111.89, airport: "Salt Lake City International", type: "metro", size: 4, pop: 1185, main: true, level: "wasatch" },
    // Provo (659k, with Orem, Lehi and BYU) and Layton (363k, Davis's suburbs and Hill Air Force
    // Base): size 3, as Oregon's Washington and Clackamas counties.
    { id: "PVU", name: "Provo", county: "ut-utah", lat: 40.25, lon: -111.65, type: "metro", size: 3, pop: 659, main: true, level: "wasatch" },
    { id: "LAY", name: "Layton", county: "ut-davis", lat: 41.08, lon: -111.96, type: "metro", size: 3, pop: 363, main: true, level: "wasatch" },
    // Heber: the Heber Valley below the Wasatch, so mountain. At downtown (Main Street, US-40);
    // the Census point is 2.5 miles north.
    { id: "HEB", name: "Heber", county: "ut-wasatch", lat: 40.51, lon: -111.41, type: "mountain", size: 1, pop: 35, main: true, level: "wasatch" },
    // Park City: ski resorts, the 2002 Winter Olympics and the Sundance Film Festival, so mountain
    // and scenic (as Jackson, Wyoming).
    { id: "PKC", name: "Park City", county: "ut-morgan-summit", lat: 40.66, lon: -111.49, scenic: true, type: "mountain", size: 1, pop: 55, main: true, level: "wasatch" },
    // Level 2: Ogden, Logan and the Great Salt Lake
    // Ogden: the railroad city (Union Station), size 2 by its 262k (as Olympia and Bremerton).
    { id: "OGD", name: "Ogden", county: "ut-weber", lat: 41.23, lon: -111.97, type: "metro", size: 2, pop: 262, main: true, level: "north" },
    // Brigham City: Box Elder's orchards and wheat, so farm. At downtown (Main Street); the Census
    // point is 1.7 miles west.
    { id: "BGC", name: "Brigham City", county: "ut-box-elder", lat: 41.51, lon: -112.02, type: "farm", size: 1, pop: 58, main: true, level: "north" },
    // Logan: Cache Valley's city and Utah State University, so metro (as Missoula and Bozeman).
    { id: "LOG", name: "Logan", county: "ut-cache-rich", lat: 41.74, lon: -111.84, type: "metro", size: 2, pop: 136, main: true, level: "north" },
    // Tooele: the county is the West Desert (the Great Salt Lake Desert, the Bonneville Salt
    // Flats, Dugway), so desert. Size 2 by its 73k (as Helena).
    { id: "TOO", name: "Tooele", county: "ut-tooele", lat: 40.54, lon: -112.31, type: "desert", size: 2, pop: 73, main: true, level: "north" },
    // Level 3: central Utah and the Uinta Basin
    // Vernal: the Uinta Basin's oil and gas town and "Dinosaurland", in a sagebrush basin, so
    // desert (as Wyoming's Rock Springs).
    { id: "VNL", name: "Vernal", county: "ut-daggett-duchesne-uintah", lat: 40.45, lon: -109.54, type: "desert", size: 1, pop: 56, main: true, level: "central" },
    // Price: the coal town where Price Canyon leaves the Book Cliffs and the Wasatch Plateau, so
    // mountain (a desert type would give Vernal–Price and Price–Moab no riders).
    { id: "PRI", name: "Price", county: "ut-carbon-emery", lat: 39.6, lon: -110.8, type: "mountain", size: 1, pop: 30, main: true, level: "central" },
    // Ephraim: the Sanpete Valley's farms (turkeys) and Snow College, so farm.
    { id: "EPM", name: "Ephraim", county: "ut-sanpete", lat: 39.36, lon: -111.58, type: "farm", size: 1, pop: 28, main: true, level: "central" },
    // Nephi: typed by its region, which is mostly the Sevier Desert and the Great Basin's ranges
    // (Delta and Fillmore are the farm towns), so desert.
    { id: "NPH", name: "Nephi", county: "ut-beaver-juab-millard", lat: 39.71, lon: -111.83, type: "desert", size: 1, pop: 32, main: true, level: "central" },
    // Level 4: Canyon Country and Dixie
    // Moab: the gateway to Arches and Canyonlands, so desert and scenic.
    { id: "MOA", name: "Moab", county: "ut-grand-san-juan", lat: 38.57, lon: -109.55, scenic: true, type: "desert", size: 1, pop: 24, main: true, level: "south" },
    // Richfield: the Sevier Valley's farms, so farm.
    { id: "RFD", name: "Richfield", county: "ut-piute-sevier-wayne", lat: 38.76, lon: -112.09, type: "farm", size: 1, pop: 25, main: true, level: "south" },
    // Kanab: red-cliff desert (the Vermilion Cliffs), so desert.
    { id: "KNB", name: "Kanab", county: "ut-garfield-kane", lat: 37.03, lon: -112.53, type: "desert", size: 1, pop: 13, main: true, level: "south" },
    // Cedar City: at the foot of the Markagunt Plateau (Cedar Breaks, Brian Head), so mountain.
    // At downtown (Main Street); the Census point is 2 miles west.
    { id: "CDC", name: "Cedar City", county: "ut-iron", lat: 37.68, lon: -113.06, type: "mountain", size: 1, pop: 57, main: true, level: "south" },
    // St. George: the Mojave Desert's edge ("Dixie"), so desert, size 2 by its 180k (as Lake
    // Havasu City and Kennewick).
    { id: "STG", name: "St. George", county: "ut-washington", lat: 37.08, lon: -113.58, type: "desert", size: 2, pop: 180, main: true, level: "south" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor center (sources in NOTES.md).
  towns: [
    // The Wasatch Front
    { id: "WVC", name: "West Valley City", county: "ut-salt-lake", lat: 40.69, lon: -112.01, type: "metro", size: 3 },
    { id: "SND", name: "Sandy", county: "ut-salt-lake", lat: 40.57, lon: -111.85, type: "metro", size: 2 },
    // Lehi: "Silicon Slopes", at the north end of Utah Valley.
    { id: "LEH", name: "Lehi", county: "ut-utah", lat: 40.42, lon: -111.87, type: "metro", size: 2 },
    // Spanish Fork: southern Utah Valley's farms, at the mouth of Spanish Fork Canyon (US-6).
    { id: "SPF", name: "Spanish Fork", county: "ut-utah", lat: 40.11, lon: -111.64, type: "farm", size: 1 },
    { id: "BTF", name: "Bountiful", county: "ut-davis", lat: 40.87, lon: -111.86, type: "metro", size: 2 },
    // Antelope Island: the state park's bison, reached by the causeway from Syracuse. Near the
    // visitor center at the island's north end.
    { id: "ANI", name: "Antelope Island", county: "ut-davis", lat: 41.04, lon: -112.24, scenic: true, type: "desert", size: 1 },
    // Huntsville: the Ogden Valley (Pineview Reservoir, Snowbasin and Powder Mountain).
    { id: "HTV", name: "Huntsville", county: "ut-weber", lat: 41.26, lon: -111.77, type: "mountain", size: 1 },
    // Cache Valley and Bear Lake
    { id: "SMF", name: "Smithfield", county: "ut-cache-rich", lat: 41.84, lon: -111.83, type: "farm", size: 1 },
    // Garden City: Bear Lake's Utah shore, over Logan Canyon (Idaho's pack has Bear Lake itself).
    { id: "GDC", name: "Garden City", county: "ut-cache-rich", lat: 41.94, lon: -111.41, type: "mountain", size: 1 },
    { id: "TRM", name: "Tremonton", county: "ut-box-elder", lat: 41.72, lon: -112.19, type: "farm", size: 1 },
    // Golden Spike: Promontory Summit, where the first transcontinental railroad was finished on
    // May 10, 1869. At the visitor center.
    { id: "GSK", name: "Golden Spike", county: "ut-box-elder", lat: 41.62, lon: -112.55, scenic: true, type: "desert", size: 1 },
    // The West Desert
    { id: "GTV", name: "Grantsville", county: "ut-tooele", lat: 40.61, lon: -112.47, type: "farm", size: 1 },
    // Bonneville Salt Flats: the land speed record course, by I-80 east of Wendover.
    { id: "BSF", name: "Bonneville Salt Flats", county: "ut-tooele", lat: 40.77, lon: -113.87, scenic: true, type: "desert", size: 1 },
    // Dixie and Zion
    { id: "HUR", name: "Hurricane", county: "ut-washington", lat: 37.15, lon: -113.36, type: "desert", size: 1 },
    // Zion: Zion National Park, at the Zion Canyon Visitor Center by Springdale.
    { id: "ZIO", name: "Zion", county: "ut-washington", lat: 37.2, lon: -112.99, scenic: true, type: "mountain", size: 1 },
    { id: "PRW", name: "Parowan", county: "ut-iron", lat: 37.83, lon: -112.83, type: "farm", size: 1 },
    // The Weber River (I-84 and the Union Pacific) and I-80
    { id: "MRG", name: "Morgan", county: "ut-morgan-summit", lat: 41.04, lon: -111.68, type: "farm", size: 1 },
    { id: "CVE", name: "Coalville", county: "ut-morgan-summit", lat: 40.91, lon: -111.42, type: "farm", size: 1 },
    // The Uinta Basin and Flaming Gorge
    { id: "RSE", name: "Roosevelt", county: "ut-daggett-duchesne-uintah", lat: 40.29, lon: -109.99, type: "desert", size: 1 },
    // Dinosaur: Dinosaur National Monument, at the Quarry Exhibit Hall north of Jensen.
    { id: "DNM", name: "Dinosaur", county: "ut-daggett-duchesne-uintah", lat: 40.44, lon: -109.3, scenic: true, type: "desert", size: 1 },
    // Flaming Gorge: the dam and the recreation area, at Dutch John (its Census point).
    { id: "FGR", name: "Flaming Gorge", county: "ut-daggett-duchesne-uintah", lat: 40.93, lon: -109.4, scenic: true, type: "mountain", size: 1 },
    // Castle Country and the San Rafael Swell
    // Green River: where I-70, the Union Pacific and the Green River meet.
    { id: "GRU", name: "Green River", county: "ut-carbon-emery", lat: 38.99, lon: -110.17, type: "desert", size: 1 },
    { id: "CDL", name: "Castle Dale", county: "ut-carbon-emery", lat: 39.22, lon: -111.02, type: "farm", size: 1 },
    // Goblin Valley: the state park's hoodoos, at the park.
    { id: "GOB", name: "Goblin Valley", county: "ut-carbon-emery", lat: 38.57, lon: -110.71, scenic: true, type: "desert", size: 1 },
    // Canyon Country (Moab and San Juan County)
    // Arches and Canyonlands: at the visitor centers (Arches by US-191, Canyonlands at Island in
    // the Sky). Monument Valley is in Arizona's pack.
    { id: "ARH", name: "Arches", county: "ut-grand-san-juan", lat: 38.62, lon: -109.62, scenic: true, type: "desert", size: 1 },
    { id: "CYN", name: "Canyonlands", county: "ut-grand-san-juan", lat: 38.46, lon: -109.82, scenic: true, type: "desert", size: 1 },
    // Monticello: 7,000 feet up under the Abajo Mountains, so mountain.
    { id: "MTC", name: "Monticello", county: "ut-grand-san-juan", lat: 37.87, lon: -109.34, type: "mountain", size: 1 },
    { id: "BLD", name: "Blanding", county: "ut-grand-san-juan", lat: 37.62, lon: -109.51, type: "desert", size: 1 },
    // The Sevier Valley and Capitol Reef
    // Salina: where I-70 leaves US-89 for Salina Canyon.
    { id: "SAL", name: "Salina", county: "ut-piute-sevier-wayne", lat: 38.94, lon: -111.87, type: "farm", size: 1 },
    // Capitol Reef: Capitol Reef National Park, at the visitor center by Fruita (UT-24).
    { id: "CRF", name: "Capitol Reef", county: "ut-piute-sevier-wayne", lat: 38.29, lon: -111.26, scenic: true, type: "desert", size: 1 },
    { id: "HNK", name: "Hanksville", county: "ut-piute-sevier-wayne", lat: 38.37, lon: -110.71, type: "desert", size: 1 },
    // Bryce Canyon and the Grand Staircase
    { id: "PGH", name: "Panguitch", county: "ut-garfield-kane", lat: 37.82, lon: -112.43, type: "mountain", size: 1 },
    // Bryce Canyon: Bryce Canyon National Park, at the visitor center (Bryce Canyon City's Census
    // point is 3 miles north, at the park road's junction).
    { id: "BCN", name: "Bryce Canyon", county: "ut-garfield-kane", lat: 37.64, lon: -112.17, scenic: true, type: "mountain", size: 1 },
    { id: "ECL", name: "Escalante", county: "ut-garfield-kane", lat: 37.77, lon: -111.6, type: "desert", size: 1 },
    // Sanpete and the I-15 desert
    { id: "MPL", name: "Mount Pleasant", county: "ut-sanpete", lat: 39.54, lon: -111.46, type: "farm", size: 1 },
    { id: "GUN", name: "Gunnison", county: "ut-sanpete", lat: 39.16, lon: -111.81, type: "farm", size: 1 },
    { id: "DLT", name: "Delta", county: "ut-beaver-juab-millard", lat: 39.36, lon: -112.54, type: "farm", size: 1 },
    { id: "FIL", name: "Fillmore", county: "ut-beaver-juab-millard", lat: 38.96, lon: -112.34, type: "farm", size: 1 },
    // Beaver: on I-15 at the foot of the Tushar Mountains, so mountain.
    { id: "BVR", name: "Beaver", county: "ut-beaver-juab-millard", lat: 38.28, lon: -112.64, type: "mountain", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Salt Lake City & the Wasatch",
      areas: ["wasatch"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 4 },
        // Provo to Layton through Salt Lake City, as FrontRunner runs
        { kind: "connect", a: "PVU", b: "LAY" },
      ],
    },
    {
      name: "Ogden, Logan & the Great Salt Lake",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "SLC", b: "LOG" },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Central Utah & the Uinta Basin",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "SLC", b: "VNL" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
    {
      name: "Canyon Country & Dixie",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "SLC", b: "STG" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
  ],
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel. Points are in the canyon or at the summit, from
  // memory (approx.); sources in NOTES.md.
  passes: [
    // The Wasatch: I-80, I-84 and the Union Pacific, US-189 and US-40
    ["Parleys Summit", 40.76, -111.62], // I-80, Salt Lake City to Park City
    ["Weber Canyon", 41.13, -111.86], // I-84 and the Union Pacific, Ogden to Morgan
    ["Echo Canyon", 41.02, -111.37], // I-80 and the Union Pacific, Echo to Wyoming
    ["Provo Canyon", 40.36, -111.58], // US-189, Provo to Heber
    ["Daniels Summit", 40.3, -111.25], // US-40, Heber to Strawberry Reservoir and the Uinta Basin
    // US-6 and the old Rio Grande (now the Union Pacific), Provo to Price
    ["Spanish Fork Canyon", 40.04, -111.52],
    ["Soldier Summit", 39.93, -111.08],
    ["Price Canyon", 39.76, -110.9],
    // Cache Valley: US-89/91 from Brigham City, US-89 to Bear Lake
    ["Sardine Canyon", 41.56, -111.95],
    ["Logan Canyon", 41.83, -111.62],
    // Central and southern Utah
    ["Salt Creek Canyon", 39.7, -111.74], // UT-132, Nephi to the Sanpete Valley
    ["Salina Canyon", 38.92, -111.7], // I-70, Salina toward Green River
    ["Zion–Mount Carmel Highway", 37.21, -112.94], // UT-9 and its tunnel, Zion to Mount Carmel Junction and Kanab
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // River bridges sit on the map's river where it passes the town.
  bridges: [
    ["Antelope Island Causeway", 41.06, -112.13], // across Great Salt Lake from Syracuse to the island
    ["Green River bridge (Green River)", 38.97, -110.11], // I-70 and the Union Pacific
    ["Colorado River bridge (Moab)", 38.6, -109.56], // US-191 north of Moab
    ["Bear River bridge (Corinne)", 41.55, -112.1],
    ["Virgin River bridge (St. George)", 37.08, -113.57],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // Forested mountains over farmed valleys: the Bear River Range (Cache Valley and Bear Lake),
    // the Wasatch and the Uintas (the Weber River, Park City and the Heber Valley) and the
    // Wasatch Plateau over the Sanpete Valley
    wooded: ["ut-cache-rich", "ut-morgan-summit", "ut-sanpete", "ut-wasatch"],
    // Utah's deserts: the Great Basin (the West Desert, the Sevier Desert, the Escalante Desert),
    // the Mojave's edge (St. George), the Colorado Plateau's red rock and the Uinta Basin
    // (Nevada's and Arizona's packs are all dry, and Idaho's Oneida-Power and Cassia-Minidoka)
    dry: [
      "ut-beaver-juab-millard", "ut-box-elder", "ut-carbon-emery", "ut-daggett-duchesne-uintah",
      "ut-garfield-kane", "ut-grand-san-juan", "ut-iron", "ut-piute-sevier-wayne", "ut-tooele",
      "ut-washington",
    ],
    // Not listed (farmland and grassland): the Wasatch Front's cities and irrigated valleys
    // (Salt Lake, Davis, Weber and Utah counties), as Idaho leaves out Ada.
  },
});
