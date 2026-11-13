// National Railways pack: Montana.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/MT/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/MT/raw.
NR.addPack({
  code: "MT",
  name: "Montana",
  // A game that starts here begins owning these counties (Billings, Hardin and Red Lodge): three
  // types of place, so the first track (Billings–Hardin, along I-90) has riders.
  start: ["mt-yellowstone", "mt-big-horn-rosebud-treasure", "mt-carbon-stillwater"],
  // Main stations: one per county region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // Level 1: Billings and the Yellowstone valley
    // Billings: at downtown; the Census point (45.79, -108.55) is 2.4 miles west.
    { id: "BIL", name: "Billings", county: "mt-yellowstone", lat: 45.78, lon: -108.5, type: "metro", size: 2, pop: 165, main: true, level: "billings" },
    // Hardin: the Bighorn valley's irrigated farms and the Crow Reservation's ranches, so farm.
    { id: "HRD", name: "Hardin", county: "mt-big-horn-rosebud-treasure", lat: 45.74, lon: -107.61, type: "farm", size: 1, pop: 22, main: true, level: "billings" },
    // Red Lodge: at the foot of the Beartooths (and the Beartooth Highway), so mountain.
    { id: "RLG", name: "Red Lodge", county: "mt-carbon-stillwater", lat: 45.19, lon: -109.25, type: "mountain", size: 1, pop: 19, main: true, level: "billings" },
    // Roundup: the Musselshell's dry rangeland and pine breaks, so desert (as Saskatchewan types
    // Swift Current and Alberta Medicine Hat).
    { id: "RND", name: "Roundup", county: "mt-golden-valley-musselshell-wheatland", lat: 46.45, lon: -108.54, type: "desert", size: 1, pop: 8, main: true, level: "billings" },
    // Lewistown: the Judith Basin's wheat, so farm.
    { id: "LWT", name: "Lewistown", county: "mt-fergus-judith-basin-petroleum", lat: 47.05, lon: -109.45, type: "farm", size: 1, pop: 14, main: true, level: "billings" },
    // Livingston: the Paradise Valley and the way to Yellowstone's north gate, so mountain.
    { id: "LVS", name: "Livingston", county: "mt-park-sweet-grass", lat: 45.66, lon: -110.56, type: "mountain", size: 1, pop: 21, main: true, level: "billings" },
    // Level 2: Eastern Montana (the Yellowstone below Billings, the Big Dry and the northeast)
    // Miles City, Glendive and Baker: sagebrush rangeland and badlands, so desert.
    { id: "MLS", name: "Miles City", county: "mt-custer-powder-river", lat: 46.41, lon: -105.84, type: "desert", size: 1, pop: 14, main: true, level: "east" },
    { id: "GDV", name: "Glendive", county: "mt-dawson-prairie-wibaux", lat: 47.11, lon: -104.71, type: "desert", size: 1, pop: 11, main: true, level: "east" },
    { id: "BKR", name: "Baker", county: "mt-carter-fallon", lat: 46.36, lon: -104.27, type: "desert", size: 1, pop: 4, main: true, level: "east" },
    // Sidney: the Lower Yellowstone's irrigated farms (sugar beets), so farm.
    { id: "SID", name: "Sidney", county: "mt-garfield-mccone-richland", lat: 47.72, lon: -104.16, type: "farm", size: 1, pop: 14, main: true, level: "east" },
    { id: "GGW", name: "Glasgow", county: "mt-roosevelt-valley", lat: 48.2, lon: -106.63, type: "farm", size: 1, pop: 18, main: true, level: "east" },
    { id: "PWD", name: "Plentywood", county: "mt-daniels-sheridan", lat: 48.78, lon: -104.56, type: "farm", size: 1, pop: 5, main: true, level: "east" },
    { id: "MTA", name: "Malta", county: "mt-blaine-phillips", lat: 48.36, lon: -107.87, type: "farm", size: 1, pop: 11, main: true, level: "east" },
    // Level 3: Bozeman, Butte, Helena and Missoula (the southwest's valleys)
    // Bozeman: Montana State University and the state's fastest-growing city, so metro.
    { id: "BZN", name: "Bozeman", county: "mt-gallatin", lat: 45.68, lon: -111.04, airport: "Bozeman Yellowstone International", type: "metro", size: 2, pop: 119, main: true, level: "southwest" },
    // Butte: at Uptown Butte. The Census place "Butte-Silver Bow (balance)" is the whole
    // consolidated city-county, and its point (45.90, -112.66) is 9.5 miles southwest, in the
    // hills. Montana's fifth city, so metro (size 1 by its 35k).
    { id: "BTE", name: "Butte", county: "mt-silver-bow", lat: 46.0, lon: -112.53, type: "metro", size: 1, pop: 35, main: true, level: "southwest" },
    // Helena: the capital, in the mountains (as Nevada types Carson City), so mountain.
    { id: "HLN", name: "Helena", county: "mt-lewis-and-clark", lat: 46.59, lon: -112.04, type: "mountain", size: 2, pop: 71, main: true, level: "southwest" },
    // Anaconda: at downtown. The Census place "Anaconda-Deer Lodge County" is the whole
    // consolidated county, and its point (46.09, -113.14) is 9 miles west, in the Pintlers.
    { id: "ACD", name: "Anaconda", county: "mt-deer-lodge-granite-powell", lat: 46.13, lon: -112.95, type: "mountain", size: 1, pop: 20, main: true, level: "southwest" },
    // Dillon: the Beaverhead valley's ranches, so farm.
    { id: "DIL", name: "Dillon", county: "mt-beaverhead-jefferson-madison", lat: 45.22, lon: -112.63, type: "farm", size: 1, pop: 30, main: true, level: "southwest" },
    // Townsend: the Missouri valley's farms below Canyon Ferry, so farm.
    { id: "TNS", name: "Townsend", county: "mt-broadwater-meagher", lat: 46.32, lon: -111.52, type: "farm", size: 1, pop: 9, main: true, level: "southwest" },
    // Missoula: at downtown on the Clark Fork (the Census point is 2 miles west). The University
    // of Montana, so metro.
    { id: "MSO", name: "Missoula", county: "mt-missoula", lat: 46.87, lon: -113.99, airport: "Missoula Montana Airport", type: "metro", size: 2, pop: 118, main: true, level: "southwest" },
    { id: "HMT", name: "Hamilton", county: "mt-ravalli", lat: 46.25, lon: -114.16, type: "mountain", size: 1, pop: 44, main: true, level: "southwest" },
    // Level 4: Glacier, the Flathead and the Hi-Line
    // Great Falls: Montana's third city (and Malmstrom Air Force Base), so metro.
    { id: "GTF", name: "Great Falls", county: "mt-cascade", lat: 47.5, lon: -111.3, type: "metro", size: 2, pop: 84, main: true, level: "north" },
    // Kalispell: the Flathead Valley, gateway to Glacier (as Oregon types Bend), so mountain.
    { id: "KSP", name: "Kalispell", county: "mt-flathead", lat: 48.2, lon: -114.31, type: "mountain", size: 2, pop: 104, main: true, level: "north" },
    // Polson: the Mission Valley's farms, at the foot of Flathead Lake, so farm.
    { id: "POL", name: "Polson", county: "mt-lake", lat: 47.69, lon: -114.16, type: "farm", size: 1, pop: 31, main: true, level: "north" },
    { id: "LBY", name: "Libby", county: "mt-lincoln", lat: 48.39, lon: -115.56, type: "mountain", size: 1, pop: 20, main: true, level: "north" },
    { id: "THF", name: "Thompson Falls", county: "mt-mineral-sanders", lat: 47.6, lon: -115.34, type: "mountain", size: 1, pop: 17, main: true, level: "north" },
    // Shelby: the biggest town of the three counties (3,173; Cut Bank has 3,064), where I-15
    // crosses the Hi-Line. The Golden Triangle's wheat, so farm (as are Conrad and Havre).
    { id: "SLB", name: "Shelby", county: "mt-glacier-liberty-toole", lat: 48.5, lon: -111.86, type: "farm", size: 1, pop: 21, main: true, level: "north" },
    { id: "CNR", name: "Conrad", county: "mt-pondera-teton", lat: 48.17, lon: -111.95, type: "farm", size: 1, pop: 12, main: true, level: "north" },
    { id: "HVR", name: "Havre", county: "mt-chouteau-hill", lat: 48.55, lon: -109.68, type: "farm", size: 1, pop: 22, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park gate or visitor center (sources in NOTES.md).
  towns: [
    // Billings and the Yellowstone valley
    { id: "LAU", name: "Laurel", county: "mt-yellowstone", lat: 45.67, lon: -108.78, type: "farm", size: 1 },
    // Pompeys Pillar: the sandstone butte on the Yellowstone with William Clark's 1806 signature.
    { id: "POM", name: "Pompeys Pillar", county: "mt-yellowstone", lat: 45.99, lon: -108.0, scenic: true, type: "farm", size: 1 },
    // Little Bighorn Battlefield: at the visitor center, by Crow Agency on I-90.
    { id: "LBB", name: "Little Bighorn Battlefield", county: "mt-big-horn-rosebud-treasure", lat: 45.57, lon: -107.43, scenic: true, type: "farm", size: 1 },
    { id: "FSY", name: "Forsyth", county: "mt-big-horn-rosebud-treasure", lat: 46.27, lon: -106.67, type: "farm", size: 1 },
    { id: "CST", name: "Colstrip", county: "mt-big-horn-rosebud-treasure", lat: 45.9, lon: -106.63, type: "desert", size: 1 },
    { id: "CLB", name: "Columbus", county: "mt-carbon-stillwater", lat: 45.64, lon: -109.25, type: "farm", size: 1 },
    { id: "HWT", name: "Harlowton", county: "mt-golden-valley-musselshell-wheatland", lat: 46.44, lon: -109.84, type: "farm", size: 1 },
    { id: "SNF", name: "Stanford", county: "mt-fergus-judith-basin-petroleum", lat: 47.15, lon: -110.22, type: "farm", size: 1 },
    { id: "WNT", name: "Winnett", county: "mt-fergus-judith-basin-petroleum", lat: 47.0, lon: -108.35, type: "desert", size: 1 },
    { id: "BGT", name: "Big Timber", county: "mt-park-sweet-grass", lat: 45.84, lon: -109.95, type: "farm", size: 1 },
    // Gardiner: Yellowstone's north gate (the Roosevelt Arch), up the Paradise Valley.
    { id: "GAR", name: "Gardiner", county: "mt-park-sweet-grass", lat: 45.05, lon: -110.74, scenic: true, type: "mountain", size: 1 },
    // Eastern Montana
    { id: "TRY", name: "Terry", county: "mt-dawson-prairie-wibaux", lat: 46.79, lon: -105.31, type: "desert", size: 1 },
    { id: "WBX", name: "Wibaux", county: "mt-dawson-prairie-wibaux", lat: 46.99, lon: -104.19, type: "farm", size: 1 },
    { id: "EKL", name: "Ekalaka", county: "mt-carter-fallon", lat: 45.89, lon: -104.55, type: "desert", size: 1 },
    { id: "BDS", name: "Broadus", county: "mt-custer-powder-river", lat: 45.44, lon: -105.41, type: "desert", size: 1 },
    { id: "CIR", name: "Circle", county: "mt-garfield-mccone-richland", lat: 47.42, lon: -105.59, type: "farm", size: 1 },
    { id: "JRD", name: "Jordan", county: "mt-garfield-mccone-richland", lat: 47.32, lon: -106.91, type: "desert", size: 1 },
    { id: "WLP", name: "Wolf Point", county: "mt-roosevelt-valley", lat: 48.09, lon: -105.64, type: "farm", size: 1 },
    { id: "CUB", name: "Culbertson", county: "mt-roosevelt-valley", lat: 48.15, lon: -104.52, type: "farm", size: 1 },
    // Fort Peck: the dam (one of the world's largest earthfill dams) and Fort Peck Lake.
    { id: "FPK", name: "Fort Peck", county: "mt-roosevelt-valley", lat: 48.01, lon: -106.46, scenic: true, type: "farm", size: 1 },
    { id: "SCB", name: "Scobey", county: "mt-daniels-sheridan", lat: 48.79, lon: -105.42, type: "farm", size: 1 },
    { id: "CNK", name: "Chinook", county: "mt-blaine-phillips", lat: 48.59, lon: -109.23, type: "farm", size: 1 },
    // The southwest: Bozeman, Butte and Helena
    { id: "TFK", name: "Three Forks", county: "mt-gallatin", lat: 45.89, lon: -111.55, type: "farm", size: 1 },
    // West Yellowstone: Yellowstone's west gate.
    { id: "WYS", name: "West Yellowstone", county: "mt-gallatin", lat: 44.66, lon: -111.1, scenic: true, type: "mountain", size: 1 },
    // Big Sky: the ski resort up the Gallatin Canyon (at the Census place, the Meadow Village).
    { id: "BSK", name: "Big Sky", county: "mt-gallatin", lat: 45.26, lon: -111.33, scenic: true, type: "mountain", size: 1 },
    { id: "WHA", name: "Whitehall", county: "mt-beaverhead-jefferson-madison", lat: 45.87, lon: -112.1, type: "farm", size: 1 },
    { id: "ENS", name: "Ennis", county: "mt-beaverhead-jefferson-madison", lat: 45.35, lon: -111.73, type: "mountain", size: 1 },
    // Virginia City: the 1863 gold-rush town, kept as it was.
    { id: "VCY", name: "Virginia City", county: "mt-beaverhead-jefferson-madison", lat: 45.3, lon: -111.94, scenic: true, type: "mountain", size: 1 },
    { id: "DRL", name: "Deer Lodge", county: "mt-deer-lodge-granite-powell", lat: 46.4, lon: -112.73, type: "farm", size: 1 },
    { id: "PBG", name: "Philipsburg", county: "mt-deer-lodge-granite-powell", lat: 46.33, lon: -113.3, type: "mountain", size: 1 },
    // Cascade: on I-15 and the Missouri, between Great Falls and the river's canyon toward Helena.
    { id: "CSD", name: "Cascade", county: "mt-cascade", lat: 47.28, lon: -111.7, type: "farm", size: 1 },
    { id: "LCN", name: "Lincoln", county: "mt-lewis-and-clark", lat: 46.95, lon: -112.67, type: "mountain", size: 1 },
    // Seeley Lake: the Seeley-Swan valley's lakes on MT-83, northeast of Missoula.
    { id: "SEE", name: "Seeley Lake", county: "mt-missoula", lat: 47.17, lon: -113.46, type: "mountain", size: 1 },
    { id: "WSS", name: "White Sulphur Springs", county: "mt-broadwater-meagher", lat: 46.55, lon: -110.9, type: "mountain", size: 1 },
    { id: "STVL", name: "Stevensville", county: "mt-ravalli", lat: 46.51, lon: -114.09, type: "farm", size: 1 },
    { id: "DBY", name: "Darby", county: "mt-ravalli", lat: 46.02, lon: -114.18, type: "mountain", size: 1 },
    // The northwest
    { id: "WFH", name: "Whitefish", county: "mt-flathead", lat: 48.44, lon: -114.35, type: "mountain", size: 1 },
    { id: "CFL", name: "Columbia Falls", county: "mt-flathead", lat: 48.37, lon: -114.19, type: "mountain", size: 1 },
    // West Glacier: Glacier National Park's west entrance, the start of the Going-to-the-Sun Road.
    { id: "WGL", name: "West Glacier", county: "mt-flathead", lat: 48.49, lon: -113.99, scenic: true, type: "mountain", size: 1 },
    { id: "RON", name: "Ronan", county: "mt-lake", lat: 47.53, lon: -114.1, type: "farm", size: 1 },
    // Elmo: on US-93 on Flathead Lake's west shore, where MT-28 turns off to Plains. Kept so
    // Polson and Kalispell link around the lake in Tough (a straight line crosses Big Arm Bay).
    { id: "ELM", name: "Elmo", county: "mt-lake", lat: 47.83, lon: -114.35, type: "farm", size: 1 },
    { id: "EUR", name: "Eureka", county: "mt-lincoln", lat: 48.88, lon: -115.05, type: "mountain", size: 1 },
    { id: "TRO", name: "Troy", county: "mt-lincoln", lat: 48.46, lon: -115.89, type: "mountain", size: 1 },
    { id: "SUP", name: "Superior", county: "mt-mineral-sanders", lat: 47.2, lon: -114.9, type: "mountain", size: 1 },
    { id: "PLN", name: "Plains", county: "mt-mineral-sanders", lat: 47.46, lon: -114.88, type: "farm", size: 1 },
    // The Hi-Line and the Rocky Mountain Front
    { id: "CHO", name: "Choteau", county: "mt-pondera-teton", lat: 47.81, lon: -112.18, type: "farm", size: 1 },
    { id: "CTB", name: "Cut Bank", county: "mt-glacier-liberty-toole", lat: 48.63, lon: -112.33, type: "farm", size: 1 },
    // East Glacier Park: Glacier's southeast gate (Glacier Park Lodge, Two Medicine) and the Empire
    // Builder's stop below Marias Pass. Kept over Browning (1,017): it is the Hi-Line's link over the
    // pass to Kalispell in Tough (a line from Kalispell to Browning runs 10 miles north of the pass).
    { id: "EGP", name: "East Glacier Park", county: "mt-glacier-liberty-toole", lat: 48.45, lon: -113.22, type: "mountain", size: 1 },
    { id: "CSR", name: "Chester", county: "mt-glacier-liberty-toole", lat: 48.51, lon: -110.97, type: "farm", size: 1 },
    // St. Mary: Glacier National Park's east entrance, the east end of the Going-to-the-Sun Road.
    { id: "SMY", name: "St. Mary", county: "mt-glacier-liberty-toole", lat: 48.74, lon: -113.43, scenic: true, type: "mountain", size: 1 },
    { id: "FTB", name: "Fort Benton", county: "mt-chouteau-hill", lat: 47.82, lon: -110.67, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Billings & the Yellowstone",
      areas: ["billings"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Eastern Montana",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "BIL", b: "GDV" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
    {
      name: "Bozeman, Butte & Missoula",
      areas: ["southwest"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "BIL", b: "BZN" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Glacier & the Hi-Line",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "BIL", b: "MSO" },
        { kind: "counties", target: 20 },
      ],
    },
  ],
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel. Sources in NOTES.md. Lookout, Lolo, Lost Trail,
  // Monida and Targhee passes, on the Idaho line, are in Idaho's pack.
  passes: [
    // Glacier and the Hi-Line
    ["Marias Pass", 48.32, -113.35], // US-2 and the BNSF Hi-Line over the Continental Divide
    ["Logan Pass", 48.7, -113.72], // the Going-to-the-Sun Road, West Glacier to St. Mary
    // The Kootenai: the Hi-Line and US-2 from Libby down the river past Troy into Idaho, and
    // MT-37 up the river from Libby to Libby Dam and Lake Koocanusa (Eureka)
    ["Kootenai River (US-2)", 48.55, -115.97],
    ["Kootenai River (MT-37)", 48.41, -115.31],
    // The Clark Fork: MT-200 and the old Northern Pacific from Paradise to Plains and Thompson
    // Falls; I-90 through the Alberton Gorge to Superior, and through Hellgate Canyon into Missoula
    ["Clark Fork River (MT-200)", 47.39, -114.8],
    ["Alberton Gorge", 47.02, -114.57],
    ["Hellgate Canyon", 46.86, -113.93],
    // Over the Continental Divide around Helena and Butte, and to Great Falls
    ["MacDonald Pass", 46.56, -112.31], // US-12, Helena west to Avon and Deer Lodge
    ["Mullan Pass", 46.65, -112.32], // the old Northern Pacific main line, Helena to Garrison
    ["Rogers Pass", 47.08, -112.37], // MT-200, Lincoln to Great Falls
    ["Homestake Pass", 45.92, -112.41], // I-90, Butte to Whitehall
    // Bozeman, Yellowstone and the Little Belts
    ["Bozeman Pass", 45.66, -110.8], // I-90 and the old Northern Pacific, Bozeman to Livingston
    ["Gallatin Canyon", 45.42, -111.22], // US-191, Bozeman to Big Sky and West Yellowstone
    ["Yankee Jim Canyon", 45.18, -110.85], // US-89 and the Yellowstone, Livingston to Gardiner
    ["Kings Hill Pass", 46.84, -110.7], // US-89, White Sulphur Springs to Great Falls
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river where it passes the town.
  bridges: [
    // The Yellowstone
    ["Yellowstone River bridge (Livingston)", 45.65, -110.55],
    ["Yellowstone River bridge (Billings)", 45.76, -108.47],
    ["Yellowstone River bridge (Forsyth)", 46.28, -106.67],
    ["Yellowstone River bridge (Miles City)", 46.42, -105.85],
    ["Yellowstone River bridge (Glendive)", 47.11, -104.71],
    ["Yellowstone River bridge (Sidney)", 47.71, -104.07], // MT-200 east toward Fairview and North Dakota
    ["Bighorn River bridge (Hardin)", 45.73, -107.56],
    // The Missouri
    ["Missouri River bridge (Townsend)", 46.32, -111.51],
    ["Missouri River bridge (Great Falls)", 47.5, -111.3],
    ["Fort Benton Bridge", 47.82, -110.67],
    ["Fort Peck Dam (MT-24)", 48.0, -106.42],
    ["Wolf Point Bridge", 48.08, -105.61],
    ["Missouri River bridge (Culbertson)", 48.13, -104.52],
    // The northwest
    ["Clark Fork bridge (Missoula)", 46.87, -113.99],
    ["Flathead River bridge (Polson)", 47.68, -114.16],
    ["Kootenai River bridge (Libby)", 48.4, -115.55],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The northwest's forests (Kootenai, Lolo and Flathead forests), like Idaho's Panhandle
    forest: ["mt-flathead", "mt-lincoln", "mt-mineral-sanders"],
    // Forested mountains over farmed or ranched valleys: the Rockies west of the Front
    wooded: [
      "mt-beaverhead-jefferson-madison", "mt-broadwater-meagher", "mt-carbon-stillwater",
      "mt-deer-lodge-granite-powell", "mt-gallatin", "mt-lake", "mt-lewis-and-clark", "mt-missoula",
      "mt-park-sweet-grass", "mt-ravalli", "mt-silver-bow",
    ],
    // Sagebrush, badlands and dry rangeland: the Big Dry, the Musselshell and the southeast
    // (like Saskatchewan's and Alberta's dry southwest and southeast across the border)
    dry: [
      "mt-carter-fallon", "mt-custer-powder-river", "mt-dawson-prairie-wibaux",
      "mt-garfield-mccone-richland", "mt-golden-valley-musselshell-wheatland",
    ],
    // Not listed (farmland and grassland): Yellowstone (Billings), the Hi-Line's and the Golden
    // Triangle's wheat (Glacier-Liberty-Toole, Pondera-Teton, Chouteau-Hill, Cascade, Blaine-
    // Phillips, Roosevelt-Valley, Daniels-Sheridan), the Judith Basin, and Big Horn-Rosebud-
    // Treasure (grassland and the Bighorn valley's farms).
  },
});
