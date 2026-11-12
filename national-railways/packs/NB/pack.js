// National Railways pack: New Brunswick (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, mountain passes, bridges,
// the Grand Manan ferry and the water it crosses, and where the forests are. The county borders
// come from map.js and the mountains, lakes and rivers from terrain.js. What each field means:
// PACKS.md. Judgment calls and sources: packs/NB/NOTES.md. Cities and populations: Statistics
// Canada (2021), packs/NB/raw.
NR.addPack({
  code: "NB",
  name: "New Brunswick",
  country: "CAN",
  // A game that starts here begins owning Albert & Westmorland (Greater Moncton), Saint John and
  // Kings: each touches the other two. Moncton is metro, Saint John coast (the port on the Bay of
  // Fundy) and Sussex farm, so the first track has riders.
  start: ["nb-albert-westmorland", "nb-saint-john", "nb-kings"],
  // Main stations: one per region, at its biggest town (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // Level 1: Moncton and the Fundy shore
    // Moncton: downtown, on Main Street by the Petitcodiac (the raw city point, 46.10, -64.80, is
    // 2 km northwest). Its airport is the busiest in the province.
    { id: "MCT", name: "Moncton", county: "nb-albert-westmorland", lat: 46.09, lon: -64.78, airport: "Greater Moncton Roméo LeBlanc International", type: "metro", size: 2, pop: 194, main: true, level: "fundy" },
    // Saint John: uptown, by King's Square (the raw city point, 45.26, -66.04, is in the harbour,
    // off the map's land). The port on the Bay of Fundy, so coast.
    { id: "SNJ", name: "Saint John", county: "nb-saint-john", lat: 45.27, lon: -66.06, port: "Port Saint John", type: "coast", size: 2, pop: 77, main: true, level: "fundy" },
    // Sussex rather than Quispamsis (18,768): Quispamsis and Rothesay are Saint John's suburbs in the
    // Kennebecasis Valley, 22 km from its station. Sussex (4,440; population centre 5,447) is the
    // county's own town, the dairy centre of the valley on the Trans-Canada and the Moncton–Saint
    // John railway, so farm. Quispamsis is a town.
    { id: "SSX", name: "Sussex", county: "nb-kings", lat: 45.72, lon: -65.51, type: "farm", size: 1, pop: 71, main: true, level: "fundy" },
    // St. Stephen: on the St. Croix River, across the bridges from Calais, Maine.
    { id: "STS", name: "St. Stephen", county: "nb-charlotte", lat: 45.18, lon: -67.3, type: "coast", size: 1, pop: 26, main: true, level: "fundy" },
    // Level 2: Fredericton and the Saint John River valley
    // Fredericton: the capital, at the south edge of downtown (the raw city point, 45.95, -66.67, is
    // 2 km west); kept south of the map's river line, as downtown is on the south bank.
    { id: "FRD", name: "Fredericton", county: "nb-york", lat: 45.95, lon: -66.64, type: "metro", size: 2, pop: 105, main: true, level: "valley" },
    // Oromocto: the town of CFB Gagetown, where the Oromocto River meets the Saint John; the region
    // is the river's farmland intervales and Grand Lake, so farm.
    { id: "OMO", name: "Oromocto", county: "nb-queens-sunbury", lat: 45.85, lon: -66.47, type: "farm", size: 1, pop: 39, main: true, level: "valley" },
    // Woodstock: the potato belt of the upper Saint John valley, so farm.
    { id: "WSK", name: "Woodstock", county: "nb-carleton", lat: 46.15, lon: -67.6, type: "farm", size: 1, pop: 26, main: true, level: "valley" },
    // Level 3: the Miramichi and the Acadian coast
    // Miramichi: on the Miramichi River's estuary, so coast.
    { id: "MRM", name: "Miramichi", county: "nb-kent-northumberland", lat: 47.0, lon: -65.47, type: "coast", size: 1, pop: 77, main: true, level: "northeast" },
    // Bathurst rather than Tracadie (16,043 to Bathurst's 12,157): Tracadie is a regional
    // municipality spread along 30 km of shore (the Tracadie-Sheila population centre has 4,528);
    // Bathurst's population centre has 15,985. At the south edge of downtown, 1 km from the harbour
    // (the raw city point, 47.63, -65.63, is at the harbour mouth: lines from it crossed the harbour,
    // which the map has inside Quebec's gulf bay). On Nepisiguit Bay, so coast.
    { id: "BTH", name: "Bathurst", county: "nb-gloucester", lat: 47.61, lon: -65.65, type: "coast", size: 1, pop: 78, main: true, level: "northeast" },
    // Level 4: Restigouche and Madawaska
    // Campbellton: on the Restigouche below Sugarloaf Mountain, with the Restigouche uplands' forest
    // behind it, so mountain.
    { id: "CBT", name: "Campbellton", county: "nb-restigouche", lat: 48.0, lon: -66.68, type: "mountain", size: 1, pop: 31, main: true, level: "north" },
    // Edmundston: downtown, where the Madawaska meets the Saint John (the raw city point, 47.38,
    // -68.29, is 3 km northeast). The paper-mill city in the Appalachian hills, so mountain.
    { id: "EDN", name: "Edmundston", county: "nb-madawaska-victoria", lat: 47.37, lon: -68.32, type: "mountain", size: 1, pop: 51, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point (sources in NOTES.md).
  towns: [
    // Moncton and the Fundy shore
    { id: "DPE", name: "Dieppe", county: "nb-albert-westmorland", lat: 46.08, lon: -64.69, type: "metro", size: 2 },
    // Shediac: Parlee Beach on the Northumberland Strait, the "lobster capital".
    { id: "SHD", name: "Shediac", county: "nb-albert-westmorland", lat: 46.22, lon: -64.54, type: "coast", size: 1 },
    // Sackville: Mount Allison University, on the Tantramar Marshes' dykelands, so farm.
    { id: "SKV", name: "Sackville", county: "nb-albert-westmorland", lat: 45.92, lon: -64.39, type: "farm", size: 1 },
    // Hopewell Rocks: the flowerpot rocks of the Fundy tides; moved 1 km inland onto the map's land.
    { id: "HWR", name: "Hopewell Rocks", county: "nb-albert-westmorland", lat: 45.82, lon: -64.59, scenic: true, type: "coast", size: 1 },
    // Fundy National Park: the Caledonia Highlands' forest and waterfalls above the Fundy shore at
    // Alma, at its park point, so mountain.
    { id: "FNP", name: "Fundy National Park", county: "nb-albert-westmorland", lat: 45.62, lon: -65.03, scenic: true, type: "mountain", size: 1 },
    // St. Martins: the sea caves, and the start of the Fundy Trail Parkway.
    { id: "SMT", name: "St. Martins", county: "nb-saint-john", lat: 45.35, lon: -65.56, scenic: true, type: "coast", size: 1 },
    { id: "QSP", name: "Quispamsis", county: "nb-kings", lat: 45.45, lon: -65.93, type: "metro", size: 2 },
    // Saint Andrews: the seaside resort on Passamaquoddy Bay (the Algonquin hotel, whale watching).
    { id: "SAN", name: "Saint Andrews", county: "nb-charlotte", lat: 45.08, lon: -67.05, scenic: true, type: "coast", size: 1 },
    // Blacks Harbour: where the ferry to Grand Manan leaves.
    { id: "BHB", name: "Blacks Harbour", county: "nb-charlotte", lat: 45.06, lon: -66.78, type: "coast", size: 1 },
    // Grand Manan: the island's whales, cliffs and fishing villages, out in the Bay of Fundy.
    { id: "GMN", name: "Grand Manan", county: "nb-charlotte", lat: 44.7, lon: -66.82, scenic: true, type: "coast", size: 1 },
    // Fredericton and the Saint John River valley
    // Kings Landing: the living-history Loyalist village on the Saint John, at its park point.
    { id: "KLD", name: "Kings Landing", county: "nb-york", lat: 45.87, lon: -66.97, scenic: true, type: "farm", size: 1 },
    // McAdam: the railway village by the Maine border (its big old CPR station).
    { id: "MCD", name: "McAdam", county: "nb-york", lat: 45.59, lon: -67.31, type: "mountain", size: 1 },
    // Minto: the old coal-mining village by Grand Lake.
    { id: "MIN", name: "Minto", county: "nb-queens-sunbury", lat: 46.08, lon: -66.08, type: "coast", size: 1 },
    // Gagetown: the craft village on the west bank of the Saint John.
    { id: "GAG", name: "Gagetown", county: "nb-queens-sunbury", lat: 45.77, lon: -66.16, type: "farm", size: 1 },
    // Hartland: the world's longest covered bridge, over the Saint John.
    { id: "HRT", name: "Hartland", county: "nb-carleton", lat: 46.3, lon: -67.5, scenic: true, type: "farm", size: 1 },
    // The Miramichi and the Acadian coast
    // Bouctouche: Le Pays de la Sagouine and the Bouctouche dune.
    { id: "BCT", name: "Bouctouche", county: "nb-kent-northumberland", lat: 46.47, lon: -64.74, type: "coast", size: 1 },
    // Kouchibouguac National Park: its dunes, lagoons and beaches, at its park point.
    { id: "KOU", name: "Kouchibouguac", county: "nb-kent-northumberland", lat: 46.86, lon: -64.98, scenic: true, type: "coast", size: 1 },
    // Doaktown: on the Southwest Miramichi, the salmon river, in the forest.
    { id: "DKT", name: "Doaktown", county: "nb-kent-northumberland", lat: 46.56, lon: -66.12, type: "mountain", size: 1 },
    // Tracadie: at Tracadie-Sheila, the population centre of the spread-out municipality.
    { id: "TRA", name: "Tracadie", county: "nb-gloucester", lat: 47.51, lon: -64.92, type: "coast", size: 1 },
    { id: "CRQ", name: "Caraquet", county: "nb-gloucester", lat: 47.77, lon: -64.95, type: "coast", size: 1 },
    // Village Historique Acadien: the living-history Acadian village, at its park point.
    { id: "VHA", name: "Village Historique Acadien", county: "nb-gloucester", lat: 47.79, lon: -65.16, scenic: true, type: "farm", size: 1 },
    // Restigouche and Madawaska
    // Dalhousie: the port on the Baie des Chaleurs.
    { id: "DLH", name: "Dalhousie", county: "nb-restigouche", lat: 48.05, lon: -66.39, type: "coast", size: 1 },
    // Saint-Quentin: the maple-sugar town in the Restigouche uplands.
    { id: "SQN", name: "Saint-Quentin", county: "nb-restigouche", lat: 47.51, lon: -67.39, type: "mountain", size: 1 },
    // Grand Falls: the falls and gorge of the Saint John, on the east bank (just east of the map's
    // river line).
    { id: "GFL", name: "Grand Falls", county: "nb-madawaska-victoria", lat: 47.05, lon: -67.73, scenic: true, type: "farm", size: 1 },
    // Perth-Andover: the potato country of the Saint John valley, so farm.
    { id: "PTA", name: "Perth-Andover", county: "nb-madawaska-victoria", lat: 46.72, lon: -67.71, type: "farm", size: 1 },
  ],
  levels: [
    {
      name: "Moncton & the Fundy Shore",
      areas: ["fundy"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 4 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Fredericton & the Saint John Valley",
      areas: ["valley"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "SNJ", b: "FRD" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "The Miramichi & the Acadian Coast",
      areas: ["northeast"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "MCT", b: "BTH" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Restigouche & Madawaska",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "FRD", b: "EDN" },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
  // Real mountain passes and gaps: none (New Brunswick's uplands are hills, not mountains). See NOTES.md.
  passes: [],
  // Real bridges and ferries: [name, latitude, longitude]. Water or a river crossed near one uses the
  // real crossing (cheaper); anywhere else you build a new bridge, if the water is narrow enough.
  // Positions are approximate (well-known crossings, not surveyed points). Ferry points lie out on
  // the route, away from the towns, so other lines from the same town don't count as using them.
  bridges: [
    // The Petitcodiac at Moncton, to Riverview: the Gunningsville Bridge downtown and the causeway
    // at the west end
    ["Gunningsville Bridge", 46.08, -64.77],
    ["Petitcodiac causeway", 46.07, -64.82],
    // The Saint John River at Fredericton, from downtown to the north side
    ["Westmorland Street Bridge", 45.96, -66.64],
    ["Princess Margaret Bridge", 45.95, -66.61],
    // The Saint John River downstream: at Oromocto (to Burton) and the Trans-Canada's crossing at Jemseg
    ["Saint John River bridge (Oromocto)", 45.87, -66.44],
    ["Trans-Canada bridge (Jemseg)", 45.82, -66.15],
    // The Saint John River's mouth at Saint John: the Harbour Bridge (the map's river line ends at
    // Grand Bay, so it only marks the real crossing)
    ["Harbour Bridge (Saint John)", 45.27, -66.08],
    // The upper Saint John valley
    ["Saint John River bridge (Woodstock)", 46.14, -67.57],
    ["Hartland Covered Bridge", 46.3, -67.52],
    ["Perth-Andover bridge", 46.73, -67.72],
    ["Saint John River bridge (Grand Falls)", 47.04, -67.74],
    // The international bridges to Maine at Saint-Léonard (Van Buren) and Edmundston (Madawaska):
    // the straight line from Edmundston down the valley cuts across the river's bend through Maine.
    ["Saint-Léonard–Van Buren bridge", 47.16, -67.93],
    ["Edmundston–Madawaska bridge", 47.36, -68.33],
    // The Miramichi at Miramichi: the Centennial Bridge (Route 8/11) and the Morrissy Bridge (Newcastle)
    ["Centennial Bridge (Miramichi)", 47.02, -65.5],
    ["Morrissy Bridge (Miramichi)", 46.99, -65.57],
    // The Restigouche, Campbellton–Pointe-à-la-Croix (Quebec): the J.C. Van Horne Bridge
    ["J.C. Van Horne Bridge", 48.0, -66.69],
    // Blacks Harbour–Grand Manan ferry (to North Head), all year: two points out on the route
    ["Blacks Harbour–Grand Manan ferry (north)", 44.92, -66.77],
    ["Blacks Harbour–Grand Manan ferry (south)", 44.84, -66.76],
    // The New Brunswick ends of the links to the next provinces (they count once those provinces are
    // in the game): the Confederation Bridge off Cape Jourimain, and the Saint John–Digby ferry
    ["Confederation Bridge (New Brunswick end)", 46.18, -63.79],
    ["Saint John–Digby ferry (Saint John side)", 45.19, -66.04],
  ],
  // The open Bay of Fundy around Grand Manan: inside it, water needs the ferry (Grand Manan is 30 km
  // out). Its north edge stays 5–10 km off the mainland, Campobello and Deer Island, so the shore,
  // Passamaquoddy Bay and the Saint John–St. Stephen coast are plain shore water.
  bays: [
    {
      name: "the Bay of Fundy off Grand Manan",
      ring: [-67.2, 44.45, -67.2, 44.72, -66.98, 44.8, -66.88, 44.85, -66.8, 44.92, -66.7, 44.98, -66.55, 45.02, -66.4, 45.03, -66.25, 45.03, -66.1, 45.0, -66.1, 44.45],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    forest: ["nb-kent-northumberland", "nb-restigouche", "nb-gloucester", "nb-york", "nb-queens-sunbury", "nb-charlotte"],
    wooded: ["nb-albert-westmorland", "nb-kings", "nb-saint-john", "nb-madawaska-victoria"],
  },
});
