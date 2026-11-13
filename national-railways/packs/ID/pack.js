// National Railways pack: Idaho.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/ID/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/ID/raw.
NR.addPack({
  code: "ID",
  name: "Idaho",
  // A game that starts here begins owning these counties (Boise, Nampa and Mountain Home, along
  // I-84): three types of place, so the first track (Boise–Nampa) has riders.
  start: ["id-ada", "id-canyon", "id-elmore-owyhee"],
  // Main stations: one per county region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // Level 1: the Treasure Valley and the Payette country
    // Boise: at downtown and the Capitol; the Census point (43.60, -116.23) is 2 miles southwest.
    { id: "BOI", name: "Boise", county: "id-ada", lat: 43.62, lon: -116.2, airport: "Boise Airport", type: "metro", size: 3, pop: 495, main: true, level: "treasure" },
    // Nampa: Canyon County's farms and food plants (like Abbotsford in BC), so farm.
    { id: "NMP", name: "Nampa", county: "id-canyon", lat: 43.59, lon: -116.57, type: "farm", size: 2, pop: 231, main: true, level: "treasure" },
    // Mountain Home: sagebrush, the air force base and the Owyhee desert, so desert.
    { id: "MHM", name: "Mountain Home", county: "id-elmore-owyhee", lat: 43.13, lon: -115.7, type: "desert", size: 1, pop: 41, main: true, level: "treasure" },
    { id: "PYT", name: "Payette", county: "id-gem-payette", lat: 44.08, lon: -116.93, type: "farm", size: 1, pop: 45, main: true, level: "treasure" },
    { id: "WSR", name: "Weiser", county: "id-adams-washington", lat: 44.25, lon: -116.97, type: "farm", size: 1, pop: 15, main: true, level: "treasure" },
    { id: "MCC", name: "McCall", county: "id-boise-valley", lat: 44.91, lon: -116.11, type: "mountain", size: 1, pop: 19, main: true, level: "treasure" },
    // Level 2: the Magic Valley and the central mountains
    { id: "TF", name: "Twin Falls", county: "id-twin-falls", lat: 42.56, lon: -114.46, type: "farm", size: 2, pop: 90, main: true, level: "magic" },
    { id: "JER", name: "Jerome", county: "id-gooding-jerome-lincoln", lat: 42.72, lon: -114.52, type: "farm", size: 1, pop: 45, main: true, level: "magic" },
    { id: "BRY", name: "Burley", county: "id-cassia-minidoka", lat: 42.54, lon: -113.79, type: "farm", size: 1, pop: 46, main: true, level: "magic" },
    { id: "HLY", name: "Hailey", county: "id-blaine-camas", lat: 43.51, lon: -114.3, type: "mountain", size: 1, pop: 25, main: true, level: "magic" },
    // Salmon: by far the biggest town of the three counties (Challis and Arco are under 900).
    { id: "SLM", name: "Salmon", county: "id-butte-custer-lemhi", lat: 45.17, lon: -113.89, type: "mountain", size: 1, pop: 15, main: true, level: "magic" },
    // Level 3: Eastern Idaho (the upper Snake River Plain and the Bear River valley)
    // Pocatello and Idaho Falls: the region's two cities (Idaho State University; the Idaho
    // National Laboratory's home town), so metro.
    { id: "POC", name: "Pocatello", county: "id-bannock", lat: 42.87, lon: -112.46, type: "metro", size: 2, pop: 87, main: true, level: "east" },
    { id: "IDF", name: "Idaho Falls", county: "id-bonneville", lat: 43.49, lon: -112.04, type: "metro", size: 2, pop: 124, main: true, level: "east" },
    { id: "REX", name: "Rexburg", county: "id-madison", lat: 43.82, lon: -111.79, type: "farm", size: 1, pop: 53, main: true, level: "east" },
    { id: "BFT", name: "Blackfoot", county: "id-bingham", lat: 43.19, lon: -112.35, type: "farm", size: 1, pop: 48, main: true, level: "east" },
    { id: "RIG", name: "Rigby", county: "id-clark-jefferson", lat: 43.67, lon: -111.91, type: "farm", size: 1, pop: 32, main: true, level: "east" },
    { id: "SAI", name: "St. Anthony", county: "id-fremont-teton", lat: 43.97, lon: -111.68, type: "farm", size: 1, pop: 25, main: true, level: "east" },
    { id: "AMF", name: "American Falls", county: "id-oneida-power", lat: 42.78, lon: -112.85, type: "farm", size: 1, pop: 12, main: true, level: "east" },
    { id: "PSN", name: "Preston", county: "id-bear-lake-caribou-franklin", lat: 42.1, lon: -111.88, type: "farm", size: 1, pop: 28, main: true, level: "east" },
    // Level 4: North Idaho, up US-95
    { id: "CDA", name: "Coeur d'Alene", county: "id-kootenai", lat: 47.7, lon: -116.79, type: "metro", size: 2, pop: 171, main: true, level: "north" },
    { id: "SDP", name: "Sandpoint", county: "id-bonner-boundary", lat: 48.28, lon: -116.56, type: "mountain", size: 1, pop: 59, main: true, level: "north" },
    // St. Maries: the biggest town of the two counties (2,358; Kellogg has 2,316), and the one
    // that reaches Moscow and Sandpoint as well as Coeur d'Alene.
    { id: "SMA", name: "St. Maries", county: "id-benewah-shoshone", lat: 47.31, lon: -116.57, type: "mountain", size: 1, pop: 23, main: true, level: "north" },
    // Moscow: the Palouse's wheat country (and the University of Idaho), so farm, like Pullman.
    { id: "MOS", name: "Moscow", county: "id-latah", lat: 46.73, lon: -117.0, type: "farm", size: 1, pop: 40, main: true, level: "north" },
    // Lewiston: Idaho's river port at the head of the Columbia–Snake barge route, so coast (as
    // Thunder Bay and Hay River are). At downtown by the confluence: the Census point
    // (46.39, -116.99) is 2.5 miles south, in the Orchards.
    { id: "LWS", name: "Lewiston", county: "id-nez-perce", lat: 46.42, lon: -117.01, type: "coast", size: 1, pop: 42, main: true, level: "north" },
    // Grangeville: the Camas Prairie's wheat town, so farm.
    { id: "GRG", name: "Grangeville", county: "id-clearwater-idaho-lewis", lat: 45.93, lon: -116.12, type: "farm", size: 1, pop: 29, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their falls, park or viewpoint (sources in NOTES.md).
  towns: [
    // The Treasure Valley and the Owyhee country
    { id: "MDN", name: "Meridian", county: "id-ada", lat: 43.61, lon: -116.4, type: "metro", size: 2 },
    { id: "CDW", name: "Caldwell", county: "id-canyon", lat: 43.65, lon: -116.66, type: "farm", size: 2 },
    { id: "EMT", name: "Emmett", county: "id-gem-payette", lat: 43.87, lon: -116.49, type: "farm", size: 1 },
    { id: "HMD", name: "Homedale", county: "id-elmore-owyhee", lat: 43.62, lon: -116.94, type: "farm", size: 1 },
    { id: "GLF", name: "Glenns Ferry", county: "id-elmore-owyhee", lat: 42.95, lon: -115.31, type: "desert", size: 1 },
    { id: "BDU", name: "Bruneau Dunes", county: "id-elmore-owyhee", lat: 42.9, lon: -115.7, scenic: true, type: "desert", size: 1 },
    // The Payette and Weiser rivers and Hells Canyon
    { id: "CNC", name: "Council", county: "id-adams-washington", lat: 44.73, lon: -116.44, type: "mountain", size: 1 },
    // Hells Canyon: on the Idaho side by Hells Canyon Dam, at the end of the road down the canyon.
    { id: "HCN", name: "Hells Canyon", county: "id-adams-washington", lat: 45.25, lon: -116.69, scenic: true, type: "mountain", size: 1 },
    { id: "CSC", name: "Cascade", county: "id-boise-valley", lat: 44.51, lon: -116.04, type: "mountain", size: 1 },
    { id: "IDC", name: "Idaho City", county: "id-boise-valley", lat: 43.83, lon: -115.83, type: "mountain", size: 1 },
    // The Magic Valley
    // Shoshone Falls: at the park on the canyon's south rim (the falls are on the Snake River,
    // which is the county line).
    { id: "SHF", name: "Shoshone Falls", county: "id-twin-falls", lat: 42.59, lon: -114.39, scenic: true, type: "desert", size: 1 },
    { id: "BUH", name: "Buhl", county: "id-twin-falls", lat: 42.6, lon: -114.76, type: "farm", size: 1 },
    { id: "GDG", name: "Gooding", county: "id-gooding-jerome-lincoln", lat: 42.94, lon: -114.71, type: "farm", size: 1 },
    { id: "RPT", name: "Rupert", county: "id-cassia-minidoka", lat: 42.62, lon: -113.67, type: "farm", size: 1 },
    { id: "CRK", name: "City of Rocks", county: "id-cassia-minidoka", lat: 42.07, lon: -113.71, scenic: true, type: "desert", size: 1 },
    // Sun Valley: between Ketchum (3,551) and Sun Valley (1,788), 2.3 miles apart.
    { id: "SVR", name: "Sun Valley", county: "id-blaine-camas", lat: 43.69, lon: -114.36, scenic: true, type: "mountain", size: 1 },
    { id: "FRF", name: "Fairfield", county: "id-blaine-camas", lat: 43.35, lon: -114.8, type: "farm", size: 1 },
    // The central mountains: US-93 (Arco–Challis–Salmon), ID-75 (Stanley) and ID-28 (Leadore)
    { id: "ARC", name: "Arco", county: "id-butte-custer-lemhi", lat: 43.63, lon: -113.3, type: "desert", size: 1 },
    // Craters of the Moon: at the visitor center on US-20/26.
    { id: "CTM", name: "Craters of the Moon", county: "id-butte-custer-lemhi", lat: 43.42, lon: -113.52, scenic: true, type: "desert", size: 1 },
    { id: "CHS", name: "Challis", county: "id-butte-custer-lemhi", lat: 44.51, lon: -114.23, type: "mountain", size: 1 },
    // Stanley: the Sawtooth Valley, under the Sawtooth Range.
    { id: "SLY", name: "Stanley", county: "id-butte-custer-lemhi", lat: 44.21, lon: -114.93, scenic: true, type: "mountain", size: 1 },
    // Leadore (95 people) is small, but it is Salmon's way to the Snake River Plain by ID-28.
    { id: "LDR", name: "Leadore", county: "id-butte-custer-lemhi", lat: 44.68, lon: -113.36, type: "mountain", size: 1 },
    // Eastern Idaho
    { id: "SHLY", name: "Shelley", county: "id-bingham", lat: 43.38, lon: -112.13, type: "farm", size: 1 },
    { id: "LHS", name: "Lava Hot Springs", county: "id-bannock", lat: 42.62, lon: -112.01, scenic: true, type: "mountain", size: 1 },
    { id: "MLD", name: "Malad City", county: "id-oneida-power", lat: 42.19, lon: -112.25, type: "farm", size: 1 },
    { id: "SDS", name: "Soda Springs", county: "id-bear-lake-caribou-franklin", lat: 42.66, lon: -111.59, type: "mountain", size: 1 },
    { id: "MTP", name: "Montpelier", county: "id-bear-lake-caribou-franklin", lat: 42.33, lon: -111.3, type: "mountain", size: 1 },
    // Bear Lake: on the north shore at St. Charles (Bear Lake State Park's North Beach is nearby).
    { id: "BLK", name: "Bear Lake", county: "id-bear-lake-caribou-franklin", lat: 42.13, lon: -111.38, scenic: true, type: "mountain", size: 1 },
    { id: "SWV", name: "Swan Valley", county: "id-bonneville", lat: 43.44, lon: -111.32, type: "mountain", size: 1 },
    { id: "DBS", name: "Dubois", county: "id-clark-jefferson", lat: 44.17, lon: -112.23, type: "desert", size: 1 },
    { id: "VCT", name: "Victor", county: "id-fremont-teton", lat: 43.6, lon: -111.11, type: "mountain", size: 1 },
    { id: "ISP", name: "Island Park", county: "id-fremont-teton", lat: 44.53, lon: -111.34, type: "mountain", size: 1 },
    // North Idaho
    { id: "PFL", name: "Post Falls", county: "id-kootenai", lat: 47.73, lon: -116.94, type: "metro", size: 1 },
    { id: "BFY", name: "Bonners Ferry", county: "id-bonner-boundary", lat: 48.69, lon: -116.32, type: "mountain", size: 1 },
    { id: "PRR", name: "Priest River", county: "id-bonner-boundary", lat: 48.18, lon: -116.91, type: "mountain", size: 1 },
    { id: "KLG", name: "Kellogg", county: "id-benewah-shoshone", lat: 47.54, lon: -116.13, type: "mountain", size: 1 },
    { id: "WLC", name: "Wallace", county: "id-benewah-shoshone", lat: 47.47, lon: -115.92, type: "mountain", size: 1 },
    { id: "GNS", name: "Genesee", county: "id-latah", lat: 46.55, lon: -116.93, type: "farm", size: 1 },
    { id: "LPW", name: "Lapwai", county: "id-nez-perce", lat: 46.4, lon: -116.8, type: "farm", size: 1 },
    { id: "OFN", name: "Orofino", county: "id-clearwater-idaho-lewis", lat: 46.48, lon: -116.25, type: "mountain", size: 1 },
    { id: "KMH", name: "Kamiah", county: "id-clearwater-idaho-lewis", lat: 46.23, lon: -116.03, type: "mountain", size: 1 },
    // Riggins: on US-95 in the Salmon River canyon, the link between Grangeville and McCall.
    { id: "RGN", name: "Riggins", county: "id-clearwater-idaho-lewis", lat: 45.42, lon: -116.32, type: "mountain", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Treasure Valley",
      areas: ["treasure"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Magic Valley & Sun Valley",
      areas: ["magic"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "BOI", b: "TF" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
    {
      name: "Eastern Idaho",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "BOI", b: "IDF" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "North Idaho",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "BOI", b: "CDA" },
        { kind: "counties", target: 20 },
      ],
    },
  ],
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel. Sources in NOTES.md.
  passes: [
    // North Idaho: I-90 and US-12
    ["Fourth of July Pass", 47.55, -116.5], // I-90, Coeur d'Alene to the Silver Valley
    ["Lookout Pass", 47.46, -115.7], // I-90 into Montana
    ["Clearwater River (US-12)", 46.38, -116.17], // US-12, Orofino up the canyon to Kamiah
    ["Lolo Pass", 46.64, -114.58], // US-12 into Montana, up the Lochsa
    // US-95, the only road between the Panhandle and the south, and ID-55
    ["White Bird Hill", 45.83, -116.23], // US-95, Grangeville down to the Salmon River
    ["Little Salmon River (US-95)", 45.2, -116.33], // US-95, Riggins up to New Meadows
    ["Payette River (ID-55)", 44.18, -116.11], // ID-55, Horseshoe Bend to Cascade and McCall
    // The central mountains
    ["Galena Summit", 43.87, -114.71], // ID-75, Sun Valley to Stanley
    ["Salmon River (ID-75)", 44.27, -114.6], // ID-75, Stanley down the river to Challis
    ["Salmon River (US-93)", 44.8, -114.0], // US-93, Challis to Salmon
    ["Lost Trail Pass", 45.69, -113.94], // US-93 into Montana
    // Eastern Idaho into Montana
    ["Monida Pass", 44.56, -112.31], // I-15 and the Union Pacific line; a broad pass in low hills
    ["Targhee Pass", 44.68, -111.27], // US-20 to West Yellowstone
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // The Snake River bridge between Lewiston and Clarkston is in Washington's pack.
  bridges: [
    ["Long Bridge (Sandpoint)", 48.25, -116.55], // US-95 over Lake Pend Oreille
    ["Kootenai River bridge (Bonners Ferry)", 48.7, -116.32], // US-95
    ["Memorial Bridge (Lewiston)", 46.43, -117.01], // US-12 over the Clearwater
    ["Perrine Bridge", 42.61, -114.46], // US-93 over the Snake River Canyon (on the map's river, 0.6 mi north of the span)
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The Panhandle and the central Idaho mountains (Payette, Clearwater and Nez Perce forests)
    forest: [
      "id-benewah-shoshone", "id-boise-valley", "id-bonner-boundary", "id-clearwater-idaho-lewis",
      "id-kootenai",
    ],
    // Forested mountains over dry or farmed valleys
    wooded: [
      "id-adams-washington", "id-bannock", "id-bear-lake-caribou-franklin", "id-blaine-camas",
      "id-bonneville", "id-butte-custer-lemhi", "id-fremont-teton", "id-latah",
    ],
    // The Snake River Plain's sagebrush, lava and desert (irrigated in parts, as Washington's
    // Yakima and Grant are)
    dry: [
      "id-bingham", "id-cassia-minidoka", "id-clark-jefferson", "id-elmore-owyhee",
      "id-gooding-jerome-lincoln", "id-oneida-power", "id-twin-falls",
    ],
    // Not listed (farmland and grassland): Ada (Boise, "the City of Trees"), Canyon and
    // Gem-Payette (the irrigated Treasure Valley), Madison, and Nez Perce (canyon grassland and
    // the Camas Prairie's wheat).
  },
});
