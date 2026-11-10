// National Railways pack: Washington.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the mountains,
// lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls and
// sources: packs/WA/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/WA/raw.
NR.addPack({
  code: "WA",
  name: "Washington",
  // A game that starts here begins owning these counties (Seattle, Tacoma and Bremerton):
  // two types of place, so the first track has riders (Seattle is metro; Tacoma, the port on
  // Commencement Bay, and Bremerton, the navy shipyard town across the Sound, are coast).
  start: ["wa-king", "wa-pierce", "wa-kitsap"],
  // Main stations: one per county region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = county population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // Level 1: Puget Sound
    { id: "SEA", name: "Seattle", county: "wa-king", lat: 47.62, lon: -122.35, port: "Port of Seattle", airport: "Seattle–Tacoma International", type: "metro", size: 5, pop: 2270, main: true, level: "sound" },
    { id: "TAC", name: "Tacoma", county: "wa-pierce", lat: 47.25, lon: -122.46, port: "Port of Tacoma", type: "metro", size: 4, pop: 921, main: true, level: "sound" },
    { id: "EVT", name: "Everett", county: "wa-snohomish", lat: 47.97, lon: -122.19, type: "metro", size: 4, pop: 828, main: true, level: "sound" },
    // Olympia rather than Lacey (56,285 people against Olympia's 55,369): Olympia is the state
    // capital and county seat, and Lacey is its suburb next door.
    { id: "OLY", name: "Olympia", county: "wa-thurston", lat: 47.04, lon: -122.89, type: "metro", size: 2, pop: 295, main: true, level: "sound" },
    { id: "BRM", name: "Bremerton", county: "wa-kitsap", lat: 47.54, lon: -122.72, type: "coast", size: 2, pop: 276, main: true, level: "sound" },
    { id: "MVN", name: "Mount Vernon", county: "wa-san-juan-skagit", lat: 48.42, lon: -122.31, type: "farm", size: 2, pop: 147, main: true, level: "sound" },
    { id: "OHB", name: "Oak Harbor", county: "wa-island", lat: 48.29, lon: -122.63, type: "coast", size: 1, pop: 87, main: true, level: "sound" },
    // Level 2: Western Washington (the coast, the Olympic Peninsula and down I-5 to the Columbia)
    { id: "VWA", name: "Vancouver", county: "wa-clark", lat: 45.64, lon: -122.6, port: "Port of Vancouver USA", type: "metro", size: 3, pop: 503, main: true, level: "west" },
    { id: "BEL", name: "Bellingham", county: "wa-whatcom", lat: 48.75, lon: -122.47, type: "coast", size: 2, pop: 227, main: true, level: "west" },
    // Longview: a timber and mill town in Cascade foothills that reach to Mount St. Helens
    // (like Roseburg in Oregon), so mountain rather than farm.
    { id: "LGV", name: "Longview", county: "wa-cowlitz", lat: 46.15, lon: -122.96, type: "mountain", size: 1, pop: 111, main: true, level: "west" },
    { id: "SHN", name: "Shelton", county: "wa-jefferson-mason", lat: 47.22, lon: -123.11, type: "mountain", size: 1, pop: 99, main: true, level: "west" },
    { id: "CEN", name: "Centralia", county: "wa-lewis", lat: 46.72, lon: -122.97, type: "farm", size: 1, pop: 82, main: true, level: "west" },
    { id: "PAN", name: "Port Angeles", county: "wa-clallam", lat: 48.12, lon: -123.45, type: "coast", size: 1, pop: 77, main: true, level: "west" },
    { id: "ABD", name: "Aberdeen", county: "wa-grays-harbor", lat: 46.98, lon: -123.81, port: "Port of Grays Harbor", type: "coast", size: 1, pop: 76, main: true, level: "west" },
    { id: "RAY", name: "Raymond", county: "wa-pacific-wahkiakum", lat: 46.68, lon: -123.74, type: "coast", size: 1, pop: 28, main: true, level: "west" },
    // Level 3: the Cascades and the Columbia Basin
    { id: "YAK", name: "Yakima", county: "wa-yakima", lat: 46.59, lon: -120.55, type: "farm", size: 2, pop: 257, main: true, level: "central" },
    // Kennewick: the Tri-Cities sit in shrub-steppe with about 7 inches of rain a year.
    { id: "KEN", name: "Kennewick", county: "wa-benton", lat: 46.2, lon: -119.18, type: "desert", size: 2, pop: 207, main: true, level: "central" },
    { id: "PSC", name: "Pasco", county: "wa-franklin-whitman", lat: 46.27, lon: -119.12, type: "farm", size: 2, pop: 145, main: true, level: "central" },
    // Ellensburg: its region runs from the Cascade crest (Snoqualmie Pass) to the Okanogan
    // highlands at the Canadian border, so mountain.
    { id: "ELB", name: "Ellensburg", county: "wa-douglas-kittitas-okanogan", lat: 47.0, lon: -120.55, type: "mountain", size: 1, pop: 129, main: true, level: "central" },
    { id: "MSL", name: "Moses Lake", county: "wa-grant", lat: 47.13, lon: -119.28, type: "farm", size: 1, pop: 99, main: true, level: "central" },
    // Wenatchee: "the Apple Capital of the World", so farm.
    { id: "WEN", name: "Wenatchee", county: "wa-chelan", lat: 47.44, lon: -120.33, type: "farm", size: 1, pop: 79, main: true, level: "central" },
    { id: "GOL", name: "Goldendale", county: "wa-klickitat-skamania", lat: 45.82, lon: -120.82, type: "farm", size: 1, pop: 35, main: true, level: "central" },
    // Level 4: the Inland Northwest
    { id: "SPK", name: "Spokane", county: "wa-spokane", lat: 47.67, lon: -117.43, airport: "Spokane International", type: "metro", size: 4, pop: 539, main: true, level: "east" },
    { id: "WW", name: "Walla Walla", county: "wa-walla-walla", lat: 46.07, lon: -118.34, type: "farm", size: 1, pop: 63, main: true, level: "east" },
    { id: "CVL", name: "Colville", county: "wa-pend-oreille-stevens", lat: 48.55, lon: -117.9, type: "mountain", size: 1, pop: 60, main: true, level: "east" },
    // Othello, by far the biggest town of the three counties, though it sits in their
    // southwest corner (Ritzville and Republic are towns).
    { id: "OTH", name: "Othello", county: "wa-adams-ferry-lincoln", lat: 46.82, lon: -119.17, type: "farm", size: 1, pop: 39, main: true, level: "east" },
    // Clarkston: at the mouth of Hells Canyon below the Blue Mountains, so mountain.
    { id: "CLR", name: "Clarkston", county: "wa-asotin-columbia-garfield", lat: 46.42, lon: -117.05, type: "mountain", size: 1, pop: 29, main: true, level: "east" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their visitor center or viewpoint (sources in NOTES.md).
  towns: [
    // King County
    { id: "BLV", name: "Bellevue", county: "wa-king", lat: 47.6, lon: -122.16, type: "metro", size: 3 },
    { id: "KNT", name: "Kent", county: "wa-king", lat: 47.39, lon: -122.21, type: "metro", size: 2 },
    { id: "SNQ", name: "Snoqualmie", county: "wa-king", lat: 47.54, lon: -121.87, type: "mountain", size: 1 },
    { id: "ENC", name: "Enumclaw", county: "wa-king", lat: 47.2, lon: -121.99, type: "farm", size: 1 },
    // Pierce County
    { id: "LKW", name: "Lakewood", county: "wa-pierce", lat: 47.16, lon: -122.53, type: "metro", size: 2 },
    { id: "RNR", name: "Mount Rainier", county: "wa-pierce", lat: 46.79, lon: -121.74, scenic: true, type: "mountain", size: 1 },
    // Snohomish County
    { id: "MSV", name: "Marysville", county: "wa-snohomish", lat: 48.08, lon: -122.15, type: "metro", size: 2 },
    { id: "EDS", name: "Edmonds", county: "wa-snohomish", lat: 47.81, lon: -122.35, type: "coast", size: 1 },
    // Thurston, Kitsap, Island, San Juan and Skagit
    { id: "YLM", name: "Yelm", county: "wa-thurston", lat: 46.94, lon: -122.64, type: "farm", size: 1 },
    { id: "BNB", name: "Bainbridge Island", county: "wa-kitsap", lat: 47.64, lon: -122.51, type: "coast", size: 1 },
    { id: "LNG", name: "Langley", county: "wa-island", lat: 48.04, lon: -122.41, type: "coast", size: 1 },
    { id: "ACS", name: "Anacortes", county: "wa-san-juan-skagit", lat: 48.49, lon: -122.62, type: "coast", size: 1 },
    { id: "FRH", name: "Friday Harbor", county: "wa-san-juan-skagit", lat: 48.53, lon: -123.02, scenic: true, type: "coast", size: 1 },
    // Western Washington
    { id: "LYN", name: "Lynden", county: "wa-whatcom", lat: 48.95, lon: -122.45, type: "farm", size: 1 },
    { id: "NCS", name: "North Cascades", county: "wa-whatcom", lat: 48.71, lon: -121.1, scenic: true, type: "mountain", size: 1 },
    { id: "SQM", name: "Sequim", county: "wa-clallam", lat: 48.07, lon: -123.09, type: "farm", size: 1 },
    { id: "HRR", name: "Hurricane Ridge", county: "wa-clallam", lat: 47.97, lon: -123.5, scenic: true, type: "mountain", size: 1 },
    { id: "PTW", name: "Port Townsend", county: "wa-jefferson-mason", lat: 48.12, lon: -122.79, type: "coast", size: 1 },
    { id: "OCS", name: "Ocean Shores", county: "wa-grays-harbor", lat: 46.97, lon: -124.15, type: "coast", size: 1 },
    { id: "LBH", name: "Long Beach", county: "wa-pacific-wahkiakum", lat: 46.36, lon: -124.06, type: "coast", size: 1 },
    { id: "MRT", name: "Morton", county: "wa-lewis", lat: 46.56, lon: -122.28, type: "mountain", size: 1 },
    { id: "WDL", name: "Woodland", county: "wa-cowlitz", lat: 45.92, lon: -122.75, type: "farm", size: 1 },
    { id: "CMS", name: "Camas", county: "wa-clark", lat: 45.6, lon: -122.43, type: "metro", size: 1 },
    { id: "BTG", name: "Battle Ground", county: "wa-clark", lat: 45.78, lon: -122.54, type: "farm", size: 1 },
    // The Cascades and the Columbia Basin
    { id: "LVW", name: "Leavenworth", county: "wa-chelan", lat: 47.59, lon: -120.66, scenic: true, type: "mountain", size: 1 },
    { id: "CHL", name: "Lake Chelan", county: "wa-chelan", lat: 47.84, lon: -120.01, scenic: true, type: "mountain", size: 1 },
    { id: "CEL", name: "Cle Elum", county: "wa-douglas-kittitas-okanogan", lat: 47.19, lon: -120.95, type: "mountain", size: 1 },
    { id: "OMK", name: "Omak", county: "wa-douglas-kittitas-okanogan", lat: 48.42, lon: -119.53, type: "farm", size: 1 },
    { id: "GCD", name: "Grand Coulee Dam", county: "wa-douglas-kittitas-okanogan", lat: 47.96, lon: -118.98, scenic: true, type: "desert", size: 1 },
    { id: "SNY", name: "Sunnyside", county: "wa-yakima", lat: 46.32, lon: -120.01, type: "farm", size: 1 },
    { id: "EPH", name: "Ephrata", county: "wa-grant", lat: 47.31, lon: -119.53, type: "farm", size: 1 },
    { id: "RCH", name: "Richland", county: "wa-benton", lat: 46.28, lon: -119.29, type: "desert", size: 2 },
    { id: "PSR", name: "Prosser", county: "wa-benton", lat: 46.21, lon: -119.77, type: "farm", size: 1 },
    { id: "PUL", name: "Pullman", county: "wa-franklin-whitman", lat: 46.73, lon: -117.17, type: "farm", size: 1 },
    { id: "PLF", name: "Palouse Falls", county: "wa-franklin-whitman", lat: 46.66, lon: -118.22, scenic: true, type: "desert", size: 1 },
    { id: "MSH", name: "Mount St. Helens", county: "wa-klickitat-skamania", lat: 46.28, lon: -122.22, scenic: true, type: "mountain", size: 1 },
    { id: "STV", name: "Stevenson", county: "wa-klickitat-skamania", lat: 45.69, lon: -121.9, type: "mountain", size: 1 },
    // The Inland Northwest
    { id: "SVY", name: "Spokane Valley", county: "wa-spokane", lat: 47.66, lon: -117.23, type: "metro", size: 2 },
    { id: "CNY", name: "Cheney", county: "wa-spokane", lat: 47.49, lon: -117.58, type: "farm", size: 1 },
    { id: "NWP", name: "Newport", county: "wa-pend-oreille-stevens", lat: 48.18, lon: -117.05, type: "mountain", size: 1 },
    { id: "RTZ", name: "Ritzville", county: "wa-adams-ferry-lincoln", lat: 47.12, lon: -118.38, type: "farm", size: 1 },
    { id: "RPB", name: "Republic", county: "wa-adams-ferry-lincoln", lat: 48.65, lon: -118.73, type: "mountain", size: 1 },
    { id: "DYT", name: "Dayton", county: "wa-asotin-columbia-garfield", lat: 46.32, lon: -117.98, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Puget Sound",
      areas: ["sound"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Western Washington",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "SEA", b: "VWA" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "Cascades & Columbia Basin",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "SEA", b: "WEN" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Inland Northwest",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "SEA", b: "SPK" },
        { kind: "counties", target: 20 },
      ],
    },
  ],
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel. The Columbia River Gorge is in Oregon's pack.
  passes: [
    // The Cascades, north to south
    ["Washington Pass", 48.53, -120.65], // SR 20, the North Cascades Highway
    ["Stevens Pass", 47.75, -121.09], // US 2 and the BNSF Cascade Tunnel
    ["Tumwater Canyon", 47.64, -120.7], // US 2 above Leavenworth, the first Great Northern route
    ["Snoqualmie Pass", 47.42, -121.41], // I-90
    ["Stampede Pass", 47.28, -121.34], // the Northern Pacific (now BNSF) line
    ["Chinook Pass", 46.87, -121.52], // SR 410
    ["White Pass", 46.64, -121.39], // US 12
    // East of the crest
    ["Blewett Pass", 47.33, -120.58], // US 97 over Swauk Pass, Wenatchee to Ellensburg
    ["Yakima River Canyon", 46.85, -120.48], // SR 821 and the old Northern Pacific line
    ["Satus Pass", 45.98, -120.65], // US 97 over the Simcoe Mountains
    // The Okanogan Highlands (North Cascades Highway, SR 20)
    ["Loup Loup Pass", 48.39, -119.9],
    ["Sherman Pass", 48.61, -118.46],
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  bridges: [
    // Puget Sound, Hood Canal and Lake Washington
    ["Tacoma Narrows Bridge", 47.27, -122.55],
    ["Hood Canal Bridge", 47.86, -122.63],
    ["Deception Pass Bridge", 48.41, -122.64],
    ["Evergreen Point Floating Bridge", 47.64, -122.26],
    ["Lacey V. Murrow Bridge (I-90)", 47.59, -122.26],
    ["I-5 Skagit River Bridge", 48.45, -122.34],
    // The Columbia River to Oregon, west to east
    ["Astoria–Megler Bridge", 46.22, -123.86],
    ["Lewis and Clark Bridge (Longview)", 46.11, -122.96],
    ["Interstate Bridge (I-5)", 45.62, -122.67],
    ["Glenn Jackson Bridge (I-205)", 45.6, -122.55], // its Washington half: the map's Columbia hugs that shore
    ["Bridge of the Gods", 45.66, -121.9],
    ["Hood River Bridge", 45.71, -121.49],
    ["The Dalles Bridge", 45.62, -121.13],
    ["Sam Hill Memorial Bridge (Biggs)", 45.67, -120.83],
    ["Umatilla Bridge (I-82)", 45.93, -119.33],
    // The Columbia and the Snake inside Washington
    ["Vantage Bridge (I-90)", 46.95, -119.97],
    ["George Sellar Bridge (Wenatchee)", 47.43, -120.31],
    ["Vernita Bridge", 46.64, -119.73],
    ["Cable Bridge (Kennewick–Pasco)", 46.22, -119.11],
    ["Snake River bridge (Clarkston–Lewiston)", 46.42, -117.04], // US 12
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    forest: [
      "wa-clallam", "wa-grays-harbor", "wa-jefferson-mason", "wa-kitsap", "wa-pacific-wahkiakum",
    ],
    wooded: [
      "wa-asotin-columbia-garfield", "wa-chelan", "wa-clark", "wa-cowlitz", "wa-douglas-kittitas-okanogan",
      "wa-island", "wa-king", "wa-klickitat-skamania", "wa-lewis", "wa-pend-oreille-stevens", "wa-pierce",
      "wa-san-juan-skagit", "wa-snohomish", "wa-spokane", "wa-thurston", "wa-whatcom",
    ],
    dry: [
      "wa-adams-ferry-lincoln", "wa-benton", "wa-grant", "wa-walla-walla", "wa-yakima",
    ],
  },
});
