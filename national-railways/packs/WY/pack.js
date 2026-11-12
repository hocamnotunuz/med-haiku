// National Railways pack: Wyoming.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/WY/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/WY/raw.
NR.addPack({
  code: "WY",
  name: "Wyoming",
  // A game that starts here begins owning these counties (Cheyenne, Laramie and Torrington): three
  // types of place, so the first track (Cheyenne–Laramie, along I-80 over Sherman Hill) has riders.
  start: ["wy-laramie", "wy-albany", "wy-goshen-platte"],
  // Main stations: one per county region, at its biggest city (every one is; no exceptions).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to. Points are the Census points (each within about 1.5 miles
  // of downtown).
  stations: [
    // Level 1: Cheyenne, the Laramie Plains and the North Platte
    // Cheyenne: the capital and biggest city, so metro (size 2 by its 101k, as Carson City).
    { id: "CHY", name: "Cheyenne", county: "wy-laramie", lat: 41.13, lon: -104.79, type: "metro", size: 2, pop: 101, main: true, level: "cheyenne" },
    // Laramie: the university town, typed by its setting: 7,200 feet up on the Laramie Plains
    // between the Laramie Range and the Snowy Range (as Idaho types Moscow by the Palouse), so
    // mountain. It also gives the first track (Cheyenne–Laramie) riders.
    { id: "LAR", name: "Laramie", county: "wy-albany", lat: 41.31, lon: -105.61, type: "mountain", size: 1, pop: 37, main: true, level: "cheyenne" },
    // Torrington: the North Platte valley's irrigated farms (sugar beets), so farm.
    { id: "TRG", name: "Torrington", county: "wy-goshen-platte", lat: 42.06, lon: -104.17, type: "farm", size: 1, pop: 21, main: true, level: "cheyenne" },
    // Douglas: ranch country on I-25 and the North Platte, so farm.
    { id: "DGS", name: "Douglas", county: "wy-converse-niobrara", lat: 42.75, lon: -105.4, type: "farm", size: 1, pop: 16, main: true, level: "cheyenne" },
    // Level 2: Casper, the Powder River Basin and the Bighorns' east side
    // Casper: Wyoming's second city (the oil town on the North Platte), so metro.
    { id: "CAS", name: "Casper", county: "wy-natrona", lat: 42.84, lon: -106.32, type: "metro", size: 2, pop: 80, main: true, level: "north" },
    // Gillette: the third city, the Powder River Basin's coal town, so metro (size 1 by its 47k,
    // as Montana types Butte).
    { id: "GLT", name: "Gillette", county: "wy-campbell", lat: 44.27, lon: -105.5, type: "metro", size: 1, pop: 47, main: true, level: "north" },
    // Sheridan: ranch country at the foot of the Bighorns, so farm.
    { id: "SHR", name: "Sheridan", county: "wy-johnson-sheridan", lat: 44.8, lon: -106.96, type: "farm", size: 1, pop: 39, main: true, level: "north" },
    // Newcastle: "the gateway to the Black Hills", whose pine hills rise just east of town, so mountain.
    { id: "NWC", name: "Newcastle", county: "wy-crook-weston", lat: 43.85, lon: -104.2, type: "mountain", size: 1, pop: 14, main: true, level: "north" },
    // Level 3: the Overland Route (I-80 and the Union Pacific) and the Wind River Basin
    // Rawlins and Rock Springs: on the Red Desert's edges, so desert. Rock Springs is size 1: its
    // region (51k) is a merged rural one, just over the 50k merge line.
    { id: "RWL", name: "Rawlins", county: "wy-carbon", lat: 41.79, lon: -107.22, type: "desert", size: 1, pop: 15, main: true, level: "southwest" },
    { id: "RKS", name: "Rock Springs", county: "wy-sublette-sweetwater", lat: 41.59, lon: -109.22, type: "desert", size: 1, pop: 51, main: true, level: "southwest" },
    // Evanston: under the Uintas on the Bear River, in a region of mountain valleys (Star Valley),
    // so mountain.
    { id: "EVN", name: "Evanston", county: "wy-lincoln-uinta", lat: 41.26, lon: -110.96, type: "mountain", size: 1, pop: 40, main: true, level: "southwest" },
    // Riverton: the Wind River's irrigated farms and the Wind River Reservation, so farm.
    { id: "RVT", name: "Riverton", county: "wy-fremont", lat: 43.03, lon: -108.38, type: "farm", size: 1, pop: 39, main: true, level: "southwest" },
    // Level 4: the Bighorn Basin, Yellowstone and the Tetons
    // Worland: the Bighorn Basin's irrigated farms (sugar beets), so farm.
    { id: "WOR", name: "Worland", county: "wy-big-horn-hot-springs-washakie", lat: 44.02, lon: -107.96, type: "farm", size: 1, pop: 24, main: true, level: "northwest" },
    // Cody: Buffalo Bill's town and Yellowstone's east gate (Sylvan Pass), so mountain.
    { id: "CDY", name: "Cody", county: "wy-park", lat: 44.52, lon: -109.06, type: "mountain", size: 1, pop: 30, main: true, level: "northwest" },
    // Jackson: Jackson Hole, below the Tetons, so mountain and scenic. No airport: see NOTES.md.
    { id: "JXN", name: "Jackson", county: "wy-teton", lat: 43.47, lon: -110.78, scenic: true, type: "mountain", size: 1, pop: 23, main: true, level: "northwest" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor center (sources in NOTES.md).
  towns: [
    // Cheyenne, the Laramie Plains and the North Platte
    { id: "PBF", name: "Pine Bluffs", county: "wy-laramie", lat: 41.18, lon: -104.07, type: "farm", size: 1 },
    // Centennial: at the foot of the Snowy Range on WY-130.
    { id: "CTL", name: "Centennial", county: "wy-albany", lat: 41.31, lon: -106.14, type: "mountain", size: 1 },
    { id: "WHE", name: "Wheatland", county: "wy-goshen-platte", lat: 42.05, lon: -104.96, type: "farm", size: 1 },
    // Fort Laramie: the fort on the Oregon Trail (Fort Laramie National Historic Site), at the site.
    { id: "FTL", name: "Fort Laramie", county: "wy-goshen-platte", lat: 42.2, lon: -104.56, scenic: true, type: "farm", size: 1 },
    { id: "GLR", name: "Glenrock", county: "wy-converse-niobrara", lat: 42.86, lon: -105.86, type: "farm", size: 1 },
    { id: "LSK", name: "Lusk", county: "wy-converse-niobrara", lat: 42.76, lon: -104.46, type: "farm", size: 1 },
    // Casper, the Powder River Basin and the Bighorns' east side
    // Independence Rock: the Oregon Trail's "register of the desert", on WY-220 toward Rawlins.
    { id: "INR", name: "Independence Rock", county: "wy-natrona", lat: 42.49, lon: -107.13, scenic: true, type: "desert", size: 1 },
    // Wright: the coal town among the Powder River Basin's biggest mines.
    { id: "WRT", name: "Wright", county: "wy-campbell", lat: 43.75, lon: -105.49, type: "desert", size: 1 },
    { id: "SDC", name: "Sundance", county: "wy-crook-weston", lat: 44.4, lon: -104.37, type: "mountain", size: 1 },
    // Devils Tower: the first national monument (1906), at the visitor center below the tower.
    { id: "DVT", name: "Devils Tower", county: "wy-crook-weston", lat: 44.59, lon: -104.72, scenic: true, type: "mountain", size: 1 },
    // Buffalo: where I-25 meets I-90, at the foot of the Bighorns (US-16 over Powder River Pass).
    { id: "BUF", name: "Buffalo", county: "wy-johnson-sheridan", lat: 44.34, lon: -106.72, type: "mountain", size: 1 },
    // The Wind River Basin and the Red Desert
    { id: "LND", name: "Lander", county: "wy-fremont", lat: 42.83, lon: -108.76, type: "mountain", size: 1 },
    // Dubois: on the upper Wind River, below Togwotee Pass (US-26/287 to Jackson).
    { id: "DUB", name: "Dubois", county: "wy-fremont", lat: 43.55, lon: -109.65, type: "mountain", size: 1 },
    { id: "GRN", name: "Green River", county: "wy-sublette-sweetwater", lat: 41.51, lon: -109.47, type: "desert", size: 1 },
    { id: "PIN", name: "Pinedale", county: "wy-sublette-sweetwater", lat: 42.87, lon: -109.87, type: "mountain", size: 1 },
    { id: "KMR", name: "Kemmerer", county: "wy-lincoln-uinta", lat: 41.78, lon: -110.55, type: "desert", size: 1 },
    // Afton: Star Valley's dairy farms, on US-89.
    { id: "AFT", name: "Afton", county: "wy-lincoln-uinta", lat: 42.73, lon: -110.93, type: "farm", size: 1 },
    // Alpine: where the Snake River Canyon (US-26/89 from Jackson) meets Star Valley and Idaho.
    { id: "ALP", name: "Alpine", county: "wy-lincoln-uinta", lat: 43.16, lon: -111.01, type: "mountain", size: 1 },
    // Saratoga: the upper North Platte valley's hot-springs town, under the Snowy Range.
    { id: "SRT", name: "Saratoga", county: "wy-carbon", lat: 41.45, lon: -106.81, type: "mountain", size: 1 },
    // The Bighorn Basin, Yellowstone and the Tetons
    // Thermopolis: Hot Springs State Park's hot springs and terraces, at the Census point.
    { id: "THP", name: "Thermopolis", county: "wy-big-horn-hot-springs-washakie", lat: 43.65, lon: -108.21, scenic: true, type: "desert", size: 1 },
    { id: "GRB", name: "Greybull", county: "wy-big-horn-hot-springs-washakie", lat: 44.49, lon: -108.06, type: "farm", size: 1 },
    { id: "LVL", name: "Lovell", county: "wy-big-horn-hot-springs-washakie", lat: 44.84, lon: -108.39, type: "farm", size: 1 },
    { id: "PWL", name: "Powell", county: "wy-park", lat: 44.76, lon: -108.76, type: "farm", size: 1 },
    // Yellowstone Lake: at Fishing Bridge, the lake's outlet, where the East Entrance road from Cody
    // (over Sylvan Pass) meets the park's loop. In Park County (Lake Village is in Teton County).
    { id: "YLK", name: "Yellowstone Lake", county: "wy-park", lat: 44.57, lon: -110.37, scenic: true, type: "mountain", size: 1 },
    // Old Faithful: the geyser, in the Teton County part of Yellowstone.
    { id: "OFT", name: "Old Faithful", county: "wy-teton", lat: 44.46, lon: -110.83, scenic: true, type: "mountain", size: 1 },
    // Grand Teton: Grand Teton National Park, at Jenny Lake below the peak. Jenny Lake (not Moose)
    // so its line to Dubois goes over Togwotee Pass in Tough.
    { id: "GTN", name: "Grand Teton", county: "wy-teton", lat: 43.75, lon: -110.72, scenic: true, type: "mountain", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Cheyenne & the Laramie Plains",
      areas: ["cheyenne"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 4 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Casper & the Powder River",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "CHY", b: "CAS" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
    {
      name: "The Overland Route",
      areas: ["southwest"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "CHY", b: "RKS" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Yellowstone & the Tetons",
      areas: ["northwest"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "CHY", b: "JXN" },
        { kind: "counties", target: 13 },
      ],
    },
  ],
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel. Sources in NOTES.md. Targhee Pass (Idaho's pack) and
  // Montana's Yankee Jim Canyon and Gallatin Canyon serve Yellowstone's west and north sides.
  // Sherman Hill and South Pass are left out: the map has no mountains there (NOTES.md).
  passes: [
    // Jackson Hole and the Tetons
    ["Teton Pass", 43.5, -110.95], // WY-22, Jackson to Victor and Driggs, Idaho
    ["Togwotee Pass", 43.75, -110.07], // US-26/287, Moran to Dubois
    ["Hoback Canyon", 43.28, -110.6], // US-189/191, Hoback Junction to Pinedale
    ["Snake River Canyon", 43.2, -110.9], // US-26/89, Hoback Junction to Alpine
    // Yellowstone and the Absarokas
    ["Sylvan Pass", 44.47, -110.14], // US-14/16/20, Cody to Yellowstone's East Entrance and Fishing Bridge
    ["Beartooth Pass", 44.97, -109.47], // US-212, the Beartooth Highway, Red Lodge to Yellowstone's northeast gate
    // The Bighorns and the Owl Creeks
    ["Granite Pass", 44.62, -107.49], // US-14, Sheridan and Dayton to Shell and Greybull
    ["Powder River Pass", 44.15, -107.06], // US-16, Buffalo to Ten Sleep and Worland
    ["Wind River Canyon", 43.5, -108.18], // US-20 and the BNSF, Shoshoni to Thermopolis
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river where it passes the town.
  bridges: [
    // The North Platte
    ["North Platte River bridge (Casper)", 42.86, -106.34],
    ["North Platte River bridge (Glenrock)", 42.88, -105.86],
    ["North Platte River bridge (Douglas)", 42.76, -105.37],
    ["Fort Laramie Bridge", 42.23, -104.54], // the 1875 Army iron bridge, by the fort
    ["North Platte River bridge (Torrington)", 42.08, -104.17],
    ["North Platte River bridge (Saratoga)", 41.47, -106.77],
    // The Green, the Bear and the Snake
    ["Green River bridge (Green River)", 41.53, -109.45],
    ["Bear River bridge (Evanston)", 41.28, -110.94],
    ["Snake River bridge (Wilson)", 43.5, -110.84], // WY-22 toward Teton Pass
    ["Snake River bridge (Alpine)", 43.18, -111.02], // US-26 at the head of Palisades Reservoir
    // The Wind River and the Bighorn (the map calls the river "Wind" as far as Worland)
    ["Wind River bridge (Riverton)", 43.05, -108.42],
    ["Wind River bridge (Dubois)", 43.54, -109.62],
    ["Bighorn River bridge (Thermopolis)", 43.65, -108.2],
    ["Bighorn River bridge (Worland)", 44.02, -107.96],
    ["Bighorn River bridge (Greybull)", 44.5, -108.03],
    // Yellowstone
    ["Fishing Bridge", 44.57, -110.37], // over the Yellowstone River at Yellowstone Lake's outlet
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // Yellowstone's lodgepole plateau and the Bridger-Teton forests
    forest: ["wy-teton"],
    // Forested mountains over ranched valleys: the Absarokas, the Wyoming and Salt River ranges,
    // the Medicine Bow Mountains, the Bighorns and the Black Hills
    wooded: ["wy-albany", "wy-crook-weston", "wy-johnson-sheridan", "wy-lincoln-uinta", "wy-park"],
    // Wyoming's sagebrush basins: the Red Desert and Great Divide Basin, the Wind River and Bighorn
    // basins, the Casper plains and the Powder River Basin (dry across the line in Montana too)
    dry: [
      "wy-big-horn-hot-springs-washakie", "wy-campbell", "wy-carbon", "wy-fremont", "wy-natrona",
      "wy-sublette-sweetwater",
    ],
    // Not listed (farmland and grassland): Laramie (Cheyenne), Goshen-Platte (the North Platte's
    // irrigated farms) and Converse-Niobrara (shortgrass ranch country).
  },
});
