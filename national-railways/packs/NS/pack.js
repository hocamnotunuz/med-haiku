// National Railways pack: Nova Scotia (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, bridges, the Canso Causeway
// and the Digby ferry, the water between Cape Breton Island and the mainland and across the Bay of
// Fundy and the Minas Basin, and where the forests are. The census division borders come from
// map.js and the hills, lakes and rivers from terrain.js. What each field means: PACKS.md.
// Judgment calls and sources: packs/NS/NOTES.md. Cities and populations: Statistics Canada (2021),
// packs/NS/raw.
NR.addPack({
  code: "NS",
  name: "Nova Scotia",
  country: "CAN",
  // A game that starts here begins owning Halifax, Hants and Lunenburg & Queens: each touches the
  // other two. Halifax is metro, Windsor farm and Bridgewater coast, so the first track has riders.
  start: ["ns-halifax", "ns-hants", "ns-lunenburg-queens"],
  // Main stations: one per region, at its biggest town (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  stations: [
    // Level 1: Halifax, the South Shore and Truro
    // Halifax: downtown, by City Hall above the harbour (the raw point, 44.87, -63.72, is the middle
    // of the regional municipality, 25 km northwest in the woods). Canada's main East Coast
    // container port and the province's international airport. 440k is size 3 by the guide
    // (350,000-900,000), like Windsor, Ontario (423k).
    { id: "HFX", name: "Halifax", county: "ns-halifax", lat: 44.65, lon: -63.58, port: "Port of Halifax", airport: "Halifax Stanfield International", type: "metro", size: 3, pop: 440, main: true, level: "halifax" },
    // Windsor rather than Enfield-Lantz (population centre 6,583 to Windsor's 5,514): Hants has no
    // town of its own (East Hants and West Hants are rural municipalities); Enfield-Lantz is
    // Halifax's commuter belt by the airport, 20 mi from Halifax (it is a town here). Windsor is the
    // Avon River town on the road from Halifax to the Valley, among the Avon's dykelands, so farm.
    { id: "WIN", name: "Windsor", county: "ns-hants", lat: 44.99, lon: -64.14, type: "farm", size: 1, pop: 45, main: true, level: "halifax" },
    // Bridgewater: the South Shore's biggest town, on the LaHave River's estuary, so coast.
    { id: "BWT", name: "Bridgewater", county: "ns-lunenburg-queens", lat: 44.38, lon: -64.52, type: "coast", size: 1, pop: 59, main: true, level: "halifax" },
    // Truro: the "Hub Town" where the railways to Halifax, Moncton and Cape Breton meet, among the
    // county's dairy farms (the agricultural campus is at Bible Hill), so farm.
    { id: "TRU", name: "Truro", county: "ns-colchester", lat: 45.36, lon: -63.28, type: "farm", size: 1, pop: 51, main: true, level: "halifax" },
    // Level 2: the Annapolis Valley and the Southwest
    // Kentville: the Annapolis Valley's town (population centre 14,905), among the orchards, so farm.
    { id: "KTV", name: "Kentville", county: "ns-kings", lat: 45.08, lon: -64.5, type: "farm", size: 1, pop: 63, main: true, level: "valley" },
    // Digby: the scallop port on the Annapolis Basin, where the Saint John ferry docks, so coast.
    { id: "DIG", name: "Digby", county: "ns-annapolis-digby", lat: 44.62, lon: -65.76, type: "coast", size: 1, pop: 38, main: true, level: "valley" },
    // Yarmouth: the fishing port at the province's southwest tip, so coast.
    { id: "YAR", name: "Yarmouth", county: "ns-shelburne-yarmouth", lat: 43.84, lon: -66.12, type: "coast", size: 1, pop: 39, main: true, level: "valley" },
    // Level 3: the North Shore and Antigonish
    // Amherst: on the Chignecto isthmus by the Amherst and Tantramar marshes, the land gate to New
    // Brunswick, so farm.
    { id: "AMH", name: "Amherst", county: "ns-cumberland", lat: 45.83, lon: -64.21, type: "farm", size: 1, pop: 31, main: true, level: "north" },
    // New Glasgow: the middle of Pictou County's five industrial towns (population centre 19,316,
    // with Stellarton, Westville and Trenton within 3 mi), so metro, like Manitoba's Thompson.
    { id: "NGL", name: "New Glasgow", county: "ns-pictou", lat: 45.59, lon: -62.64, type: "metro", size: 1, pop: 44, main: true, level: "north" },
    // Antigonish: the university town (St. Francis Xavier) in a farming county, so farm.
    { id: "ANT", name: "Antigonish", county: "ns-antigonish-guysborough", lat: 45.62, lon: -61.99, type: "farm", size: 1, pop: 28, main: true, level: "north" },
    // Level 4: Cape Breton Island
    // Port Hawkesbury: the biggest town of the three counties, at the Cape Breton end of the Canso
    // Causeway on the Strait of Canso, with the deep-water port at Point Tupper, so coast.
    { id: "PHB", name: "Port Hawkesbury", county: "ns-inverness-richmond-victoria", lat: 45.62, lon: -61.36, type: "coast", size: 1, pop: 34, main: true, level: "capebreton" },
    // Sydney: downtown, on the harbour's south arm (population centre "Cape Breton - Sydney",
    // 30,960). The regional municipality's city, so metro.
    { id: "SYD", name: "Sydney", county: "ns-cape-breton", lat: 46.14, lon: -60.19, type: "metro", size: 2, pop: 98, main: true, level: "capebreton" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point (sources in NOTES.md).
  towns: [
    // Halifax
    // Bedford: the suburb at the head of Bedford Basin. (Dartmouth is left out: its downtown is 1 mi
    // from the station, and its point is in the harbour on the map.)
    { id: "BDF", name: "Bedford", county: "ns-halifax", lat: 44.73, lon: -63.67, type: "metro", size: 2 },
    // Peggys Cove: the lighthouse on the granite shore; moved 1 km north onto the map's land.
    { id: "PGY", name: "Peggys Cove", county: "ns-halifax", lat: 44.51, lon: -63.91, scenic: true, type: "coast", size: 1 },
    // Sheet Harbour: the Eastern Shore's village and port.
    { id: "SHH", name: "Sheet Harbour", county: "ns-halifax", lat: 44.92, lon: -62.54, type: "coast", size: 1 },
    // Hants
    // Enfield: Halifax's commuter belt on Highway 102, by Halifax Stanfield airport (population
    // centre Enfield-Lantz, 6,583), so metro.
    { id: "ENF", name: "Enfield", county: "ns-hants", lat: 44.94, lon: -63.54, type: "metro", size: 1 },
    // Hantsport: the small port on the Avon estuary (population centre 1,542).
    { id: "HTS", name: "Hantsport", county: "ns-hants", lat: 45.06, lon: -64.18, type: "coast", size: 1 },
    // Kings
    // Grand-Pré: the Acadian dykelands, a UNESCO World Heritage landscape, at the historic site.
    // (Wolfville, 5,057, is 2.6 mi away and is left out.)
    { id: "GPE", name: "Grand-Pré", county: "ns-kings", lat: 45.11, lon: -64.31, scenic: true, type: "farm", size: 1 },
    // Greenwood: the air force base town (population centre Kingston-Greenwood, 7,118).
    { id: "GWD", name: "Greenwood", county: "ns-kings", lat: 44.97, lon: -64.94, type: "farm", size: 1 },
    // Annapolis & Digby
    // Annapolis Royal: Fort Anne and the Port-Royal habitation, at the west end of the valley.
    { id: "ANR", name: "Annapolis Royal", county: "ns-annapolis-digby", lat: 44.74, lon: -65.52, scenic: true, type: "farm", size: 1 },
    // Kejimkujik National Park: lakes and forest, at its park point, so mountain (forest).
    { id: "KEJ", name: "Kejimkujik", county: "ns-annapolis-digby", lat: 44.39, lon: -65.29, scenic: true, type: "mountain", size: 1 },
    // Church Point: Université Sainte-Anne, on the Acadian French Shore of Clare (moved 0.5 mi
    // inland onto the map's land).
    { id: "CPT", name: "Church Point", county: "ns-annapolis-digby", lat: 44.34, lon: -66.11, type: "coast", size: 1 },
    // Shelburne & Yarmouth
    // Shelburne: the Loyalist town's harbour.
    { id: "SBN", name: "Shelburne", county: "ns-shelburne-yarmouth", lat: 43.76, lon: -65.32, type: "coast", size: 1 },
    // Barrington: the lobster ports of Barrington and Cape Sable Island (municipality 6,523).
    { id: "BRG", name: "Barrington", county: "ns-shelburne-yarmouth", lat: 43.56, lon: -65.56, type: "coast", size: 1 },
    // Lunenburg & Queens
    // Lunenburg: the UNESCO Old Town, home port of the Bluenose.
    { id: "LBG", name: "Lunenburg", county: "ns-lunenburg-queens", lat: 44.38, lon: -64.31, scenic: true, type: "coast", size: 1 },
    // Liverpool: Queens' town (population centre 2,546), at the mouth of the Mersey River.
    { id: "LIV", name: "Liverpool", county: "ns-lunenburg-queens", lat: 44.04, lon: -64.71, type: "coast", size: 1 },
    // Chester: the village on Mahone Bay (population centre 1,371).
    { id: "CHR", name: "Chester", county: "ns-lunenburg-queens", lat: 44.54, lon: -64.23, type: "coast", size: 1 },
    // Colchester
    // Tatamagouche: the village on the Northumberland Strait.
    { id: "TAT", name: "Tatamagouche", county: "ns-colchester", lat: 45.71, lon: -63.29, type: "coast", size: 1 },
    // Cumberland
    // Springhill: the coal-mining town in the Cobequid hills (population centre 2,654), so mountain.
    { id: "SPG", name: "Springhill", county: "ns-cumberland", lat: 45.65, lon: -64.06, type: "mountain", size: 1 },
    // Joggins Fossil Cliffs: the UNESCO coal-age fossil cliffs on Chignecto Bay, at the park point.
    { id: "JOG", name: "Joggins", county: "ns-cumberland", lat: 45.71, lon: -64.44, scenic: true, type: "coast", size: 1 },
    // Parrsboro: the village on the Minas Basin.
    { id: "PBO", name: "Parrsboro", county: "ns-cumberland", lat: 45.41, lon: -64.33, type: "coast", size: 1 },
    // Pictou
    // Pictou: where the Hector landed its Scottish settlers (1773), on Pictou Harbour, 4 mi from the
    // Caribou ferry. (Stellarton, Westville and Trenton are within 4 mi of New Glasgow.)
    { id: "PIC", name: "Pictou", county: "ns-pictou", lat: 45.68, lon: -62.71, type: "coast", size: 1 },
    // Antigonish & Guysborough
    // Sherbrooke Village: the living-history 1860s village on the St. Mary's River.
    { id: "SBV", name: "Sherbrooke Village", county: "ns-antigonish-guysborough", lat: 45.14, lon: -61.98, scenic: true, type: "farm", size: 1 },
    // Canso: the old fishing port at the mainland's eastern tip (moved 0.5 mi inland onto the map's land).
    { id: "CSO", name: "Canso", county: "ns-antigonish-guysborough", lat: 45.33, lon: -61.01, type: "coast", size: 1 },
    // Cabot Trail & Bras d'Or
    // Baddeck: on the Bras d'Or Lake, the Alexander Graham Bell historic site, where the Cabot Trail
    // begins.
    { id: "BDK", name: "Baddeck", county: "ns-inverness-richmond-victoria", lat: 46.1, lon: -60.75, scenic: true, type: "coast", size: 1 },
    // Chéticamp: the Acadian fishing village on the Cabot Trail, at the Highlands park's west gate.
    { id: "CHT", name: "Chéticamp", county: "ns-inverness-richmond-victoria", lat: 46.63, lon: -61.01, type: "coast", size: 1 },
    // Cape Breton Highlands National Park: the plateau and the Cabot Trail, at its park point.
    { id: "CBH", name: "Cape Breton Highlands", county: "ns-inverness-richmond-victoria", lat: 46.74, lon: -60.64, scenic: true, type: "mountain", size: 1 },
    // Inverness: the old coal town with the long beach on the west coast (population centre 1,228).
    { id: "INV", name: "Inverness", county: "ns-inverness-richmond-victoria", lat: 46.23, lon: -61.31, type: "coast", size: 1 },
    // St. Peter's: the village at the St. Peters Canal, between the Bras d'Or and the Atlantic.
    { id: "STP", name: "St. Peter's", county: "ns-inverness-richmond-victoria", lat: 45.66, lon: -60.88, type: "coast", size: 1 },
    // Cape Breton
    // Glace Bay: the coal town (population centre 16,915), with the Cape Breton Miners' Museum.
    { id: "GLA", name: "Glace Bay", county: "ns-cape-breton", lat: 46.2, lon: -59.96, type: "coast", size: 1 },
    // North Sydney: the ferry port to Newfoundland.
    { id: "NSY", name: "North Sydney", county: "ns-cape-breton", lat: 46.21, lon: -60.25, type: "coast", size: 1 },
    // Louisbourg: the town by the rebuilt Fortress of Louisbourg (the fortress's point, 3 km
    // southwest across the harbour, is off the map's land).
    { id: "LOU", name: "Louisbourg", county: "ns-cape-breton", lat: 45.92, lon: -59.97, scenic: true, type: "coast", size: 1 },
  ],
  levels: [
    {
      name: "Halifax & the South Shore",
      areas: ["halifax"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 4 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "The Annapolis Valley & the Southwest",
      areas: ["valley"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "HFX", b: "DIG" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "The North Shore",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "HFX", b: "AMH" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Cape Breton Island",
      areas: ["capebreton"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "HFX", b: "SYD" },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
  // Real mountain passes and gaps: none (the Cobequids and the Cape Breton Highlands are hills on
  // the map). See NOTES.md.
  passes: [],
  // Real bridges, the causeway and ferries: [name, latitude, longitude]. Water or a river crossed
  // near one uses the real crossing (cheaper); anywhere else you build a new bridge, if the water is
  // narrow enough. Positions are approximate (well-known crossings, not surveyed points). Ferry
  // points lie out on the route, away from the towns, so other lines from the same town don't count
  // as using them.
  bridges: [
    // The Strait of Canso: the Canso Causeway (Aulds Cove to Port Hastings), Cape Breton Island's
    // only fixed link to the mainland
    ["Canso Causeway", 45.65, -61.42],
    // The Salmon River at Truro, between downtown and Bible Hill
    ["Salmon River bridge (Truro)", 45.37, -63.29],
    // Saint John-Digby ferry, all year: a point outside the Digby Gut, on the route (New Brunswick
    // lists one off Saint John)
    ["Saint John–Digby ferry (Digby Gut)", 44.8, -65.83],
    // These mark real crossings over water that is plain shore water on the map (see NOTES.md):
    // Halifax Harbour (the Macdonald Bridge downtown and the MacKay Bridge at the Narrows) and the
    // Bras d'Or (the Seal Island Bridge on Highway 105 over the Great Bras d'Or, and the Barra
    // Strait bridge from Iona to Grand Narrows)
    ["Macdonald Bridge", 44.66, -63.58],
    ["MacKay Bridge", 44.68, -63.6],
    ["Seal Island Bridge", 46.21, -60.55],
    ["Barra Strait Bridge", 45.96, -60.79],
    // The Nova Scotia ends of the ferries to the next provinces (they count once those provinces are
    // in the game)
    ["Caribou–Wood Islands ferry (Caribou side)", 45.77, -62.69],
    ["North Sydney–Port aux Basques ferry (North Sydney side)", 46.27, -60.18],
  ],
  // Water that needs a bridge (elsewhere, sea between two places means track follows the shore).
  // Cape Breton Island is reached only by the Canso Causeway, so the water between it and the
  // mainland is bays: St. Georges Bay (with the gulf off Port Hood and Mabou), the Strait of Canso
  // and Chedabucto Bay. The Bay of Fundy between Saint John and Digby (the ferry) and the Minas
  // Basin (no crossing) are bays too. Each ring stays a few km off the shores that lines run along.
  // The Bras d'Or Lake stays shore water on purpose (NOTES.md).
  bays: [
    {
      name: "the Bay of Fundy",
      // From New Brunswick's Grand Manan bay (66.1°W) to Cape Chignecto, 8-10 km off New
      // Brunswick's shore and 5 km off Nova Scotia's North Mountain and Digby Neck
      ring: [-66.1, 44.52, -66.1, 45.05, -65.9, 45.17, -65.5, 45.27, -65.2, 45.39, -64.95, 45.5, -65.0, 45.3, -64.75, 45.22, -65.11, 45.08, -65.57, 44.83, -65.8, 44.72, -65.94, 44.63],
    },
    {
      name: "the Minas Basin",
      // The Minas Channel east of Cape Chignecto, the basin and Cobequid Bay, 3-5 km off the
      // shores at Parrsboro, Grand-Pré, Hantsport and Truro
      ring: [-65.0, 45.3, -64.78, 45.25, -64.45, 45.32, -64.3, 45.35, -63.95, 45.36, -63.6, 45.36, -63.45, 45.34, -63.6, 45.31, -63.95, 45.27, -64.15, 45.2, -64.3, 45.15, -64.4, 45.2, -64.55, 45.24, -64.75, 45.22],
    },
    {
      name: "St. Georges Bay",
      // From Cape George to the causeway, and the gulf off Port Hood and Mabou up to Inverness
      ring: [-61.88, 45.86, -61.8, 45.72, -61.6, 45.7, -61.47, 45.69, -61.43, 45.655, -61.4, 45.68, -61.45, 45.75, -61.5, 45.9, -61.6, 46.02, -61.53, 46.1, -61.4, 46.25, -62.0, 46.05, -61.9, 45.9],
    },
    {
      name: "the Strait of Canso and Chedabucto Bay",
      // From the causeway south through the strait, and the bay out to Canso and Isle Madame
      ring: [-61.445, 45.655, -61.375, 45.655, -61.32, 45.57, -61.15, 45.5, -60.95, 45.47, -60.95, 45.36, -61.1, 45.36, -61.45, 45.4, -61.47, 45.5, -61.43, 45.6],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    forest: ["ns-halifax", "ns-lunenburg-queens", "ns-shelburne-yarmouth", "ns-antigonish-guysborough", "ns-inverness-richmond-victoria"],
    wooded: ["ns-annapolis-digby", "ns-hants", "ns-colchester", "ns-cumberland", "ns-pictou", "ns-cape-breton"],
  },
});
