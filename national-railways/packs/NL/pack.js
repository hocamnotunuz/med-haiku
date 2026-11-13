// National Railways pack: Newfoundland and Labrador (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, the ferries to Nova Scotia
// (Port aux Basques and Argentia) and to Labrador (St. Barbe-Blanc-Sablon), the Cabot Strait and
// the Strait of Belle Isle they cross, and where the forests are. The census division borders come
// from map.js and the hills, lakes and rivers from terrain.js. What each field means: PACKS.md.
// Judgment calls and sources: packs/NL/NOTES.md. Cities and populations: Statistics Canada (2021),
// packs/NL/raw.
NR.addPack({
  code: "NL",
  name: "Newfoundland and Labrador",
  country: "CAN",
  // A game that starts here begins owning St. John's and the Clarenville region. St. John's has
  // only one neighbour on the island (the other is Cape Breton, across the Argentia ferry), so
  // the start is these two. St. John's is metro and Clarenville coast, so the first track has riders.
  start: ["nl-division-no-1", "nl-division-no-2-7"],
  // Main stations: one per region, at its biggest town.
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  stations: [
    // Level 1: St. John's and the East
    // St. John's: the capital, downtown on the harbour by Fort Townshend (the raw point, 47.48,
    // -52.80, is the middle of the city's municipality, 10 km southwest). The province's container
    // port and its international airport. 272k is size 2 by the guide (60,000-300,000), like Regina (277k).
    { id: "STJ", name: "St. John's", county: "nl-division-no-1", lat: 47.56, lon: -52.71, port: "Port of St. John's", airport: "St. John's International", type: "metro", size: 2, pop: 272, main: true, level: "east" },
    // Clarenville: the service town on the Trans-Canada at Random Sound (Trinity Bay), so coast. On
    // the shore between Shoal Harbour and Clarenville South (the raw point, 48.19, -54.06, is 4 mi
    // inland, the middle of the municipality).
    { id: "CLV", name: "Clarenville", county: "nl-division-no-2-7", lat: 48.17, lon: -53.97, type: "coast", size: 1, pop: 52, main: true, level: "east" },
    // Level 2: Central Newfoundland
    // Grand Falls-Windsor: the paper-mill town on the Exploits River, in the forests of the interior,
    // so mountain (as Quebec types its boreal towns).
    { id: "GFW", name: "Grand Falls-Windsor", county: "nl-division-no-6-8", lat: 48.96, lon: -55.66, type: "mountain", size: 1, pop: 71, main: true, level: "central" },
    // Level 3: the West Coast
    // Corner Brook: the island's second city, the paper-mill city on the Bay of Islands, so metro
    // (like Nova Scotia's New Glasgow).
    { id: "CBK", name: "Corner Brook", county: "nl-division-no-5-9", lat: 48.94, lon: -57.97, type: "metro", size: 1, pop: 55, main: true, level: "west" },
    // Stephenville: on Bay St. George (the old Harmon air base and its port), so coast. Port aux
    // Basques, the ferry port, is a town.
    { id: "SVL", name: "Stephenville", county: "nl-division-no-3-4", lat: 48.55, lon: -58.55, type: "coast", size: 1, pop: 33, main: true, level: "west" },
    // Level 4: Labrador
    // Happy Valley-Goose Bay: Labrador's biggest municipality (8,040) and its service town, at the head
    // of Lake Melville in the boreal forest, so mountain. Labrador City is a town.
    { id: "HVG", name: "Happy Valley-Goose Bay", county: "nl-division-no-10-11", lat: 53.34, lon: -60.45, type: "mountain", size: 1, pop: 27, main: true, level: "labrador" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point (sources in NOTES.md).
  towns: [
    // St. John's (the Avalon)
    // Conception Bay South: the biggest town after St. John's (27,168), its suburb on Conception Bay.
    { id: "CBS", name: "Conception Bay South", county: "nl-division-no-1", lat: 47.49, lon: -53.0, type: "metro", size: 2 },
    // Bay Roberts: the biggest of the Conception Bay North towns (population centre 6,897).
    { id: "BYR", name: "Bay Roberts", county: "nl-division-no-1", lat: 47.58, lon: -53.29, type: "coast", size: 1 },
    // Placentia: on Placentia Bay, by the Argentia ferry terminal (Argentia's point is in the sea on
    // the map) and Castle Hill.
    { id: "PLA", name: "Placentia", county: "nl-division-no-1", lat: 47.27, lon: -53.91, type: "coast", size: 1 },
    // Cape Spear: the lighthouse at North America's most easterly point. Its park point is just off
    // the map's land; this is 1.6 km southwest, 4.5 mi from the St. John's station.
    { id: "CSP", name: "Cape Spear", county: "nl-division-no-1", lat: 47.51, lon: -52.65, scenic: true, type: "coast", size: 1 },
    // Mistaken Point: the UNESCO site of the oldest complex fossils; moved 1 km north onto the land.
    { id: "MSP", name: "Mistaken Point", county: "nl-division-no-1", lat: 46.64, lon: -53.19, scenic: true, type: "coast", size: 1 },
    // Clarenville (Divisions 2 and 7)
    // Marystown: the Burin Peninsula's biggest town (5,204), with its shipyard.
    { id: "MYS", name: "Marystown", county: "nl-division-no-2-7", lat: 47.16, lon: -55.16, type: "coast", size: 1 },
    // Bonavista: Cape Bonavista, John Cabot's traditional landfall, and the Ryan Premises.
    { id: "BON", name: "Bonavista", county: "nl-division-no-2-7", lat: 48.63, lon: -53.1, scenic: true, type: "coast", size: 1 },
    // Trinity: the historic outport on Trinity Bay.
    { id: "TRI", name: "Trinity", county: "nl-division-no-2-7", lat: 48.38, lon: -53.4, scenic: true, type: "coast", size: 1 },
    // Terra Nova National Park: forest and fjords on Bonavista Bay, at its park point, so mountain
    // (as Nova Scotia types Kejimkujik).
    { id: "TNP", name: "Terra Nova", county: "nl-division-no-2-7", lat: 48.53, lon: -53.93, scenic: true, type: "mountain", size: 1 },
    // Grand Falls-Windsor (Divisions 6 and 8)
    // Gander: the airport town of transatlantic fame (11,880), the region's second town, so metro.
    { id: "GAN", name: "Gander", county: "nl-division-no-6-8", lat: 48.96, lon: -54.59, type: "metro", size: 1 },
    // Twillingate: the iceberg town on Notre Dame Bay, reached by the causeways of the Road to the Isles.
    { id: "TWG", name: "Twillingate", county: "nl-division-no-6-8", lat: 49.64, lon: -54.74, scenic: true, type: "coast", size: 1 },
    // Fogo Island: reached by the ferry from Farewell.
    { id: "FGO", name: "Fogo Island", county: "nl-division-no-6-8", lat: 49.66, lon: -54.18, type: "coast", size: 1 },
    // Springdale: the Green Bay town (2,965).
    { id: "SPD", name: "Springdale", county: "nl-division-no-6-8", lat: 49.51, lon: -56.06, type: "coast", size: 1 },
    // Baie Verte: the mining town on the Baie Verte Peninsula, so mountain.
    { id: "BVT", name: "Baie Verte", county: "nl-division-no-6-8", lat: 49.91, lon: -56.19, type: "mountain", size: 1 },
    // Stephenville (Divisions 3 and 4)
    // Channel-Port aux Basques: where the ferry from North Sydney lands.
    { id: "PAX", name: "Port aux Basques", county: "nl-division-no-3-4", lat: 47.6, lon: -59.14, type: "coast", size: 1 },
    // The Codroy Valley: the island's farm valley, at Doyles (the Codroy locality's point is in the
    // sea on the map), so farm.
    { id: "COD", name: "Codroy Valley", county: "nl-division-no-3-4", lat: 47.83, lon: -59.19, type: "farm", size: 1 },
    // Burgeo: the south coast town at the end of Route 480.
    { id: "BGO", name: "Burgeo", county: "nl-division-no-3-4", lat: 47.63, lon: -57.62, type: "coast", size: 1 },
    // Harbour Breton: the Connaigre Peninsula's town (1,477), the biggest in the region's east end.
    { id: "HBR", name: "Harbour Breton", county: "nl-division-no-3-4", lat: 47.48, lon: -55.82, type: "coast", size: 1 },
    // Corner Brook (Divisions 5 and 9)
    // Deer Lake: where the Viking Trail leaves the Trans-Canada, with the west coast's airport;
    // under the Long Range Mountains, so mountain.
    { id: "DLK", name: "Deer Lake", county: "nl-division-no-5-9", lat: 49.2, lon: -57.39, type: "mountain", size: 1 },
    // Gros Morne National Park: the UNESCO fjords and Tablelands, at its park point, so mountain.
    { id: "GMO", name: "Gros Morne", county: "nl-division-no-5-9", lat: 49.69, lon: -57.74, scenic: true, type: "mountain", size: 1 },
    // Port au Choix: the fishing town halfway up the Viking Trail.
    { id: "PCX", name: "Port au Choix", county: "nl-division-no-5-9", lat: 50.71, lon: -57.33, type: "coast", size: 1 },
    // St. Barbe: where the ferry to Blanc-Sablon and Labrador leaves.
    { id: "SBA", name: "St. Barbe", county: "nl-division-no-5-9", lat: 51.2, lon: -56.78, type: "coast", size: 1 },
    // St. Anthony: the Northern Peninsula's town (2,180), the Grenfell mission's hospital town.
    { id: "SAT", name: "St. Anthony", county: "nl-division-no-5-9", lat: 51.37, lon: -55.62, type: "coast", size: 1 },
    // L'Anse aux Meadows: the UNESCO Norse site; moved 1 km south onto the map's land.
    { id: "LAM", name: "L'Anse aux Meadows", county: "nl-division-no-5-9", lat: 51.59, lon: -55.54, scenic: true, type: "coast", size: 1 },
    // Happy Valley-Goose Bay (Labrador: Divisions 10 and 11)
    // Labrador City: the iron-mining town of Labrador West (population centre 9,011), at the end of
    // the railway from Sept-Îles, so mountain. (Wabush is 6 mi away and is left out.)
    { id: "LAB", name: "Labrador City", county: "nl-division-no-10-11", lat: 52.96, lon: -66.94, type: "mountain", size: 1 },
    // Churchill Falls: the company town of the hydro station on the Churchill River.
    { id: "CHF", name: "Churchill Falls", county: "nl-division-no-10-11", lat: 53.53, lon: -64.01, type: "mountain", size: 1 },
    // Cartwright: the coast town where the Trans-Labrador Highway meets the sea.
    { id: "CRT", name: "Cartwright", county: "nl-division-no-10-11", lat: 53.69, lon: -56.97, type: "coast", size: 1 },
    // L'Anse-au-Clair: the first Labrador town on the road from the Blanc-Sablon ferry.
    { id: "LAC", name: "L'Anse-au-Clair", county: "nl-division-no-10-11", lat: 51.46, lon: -57.07, type: "coast", size: 1 },
    // Red Bay: the UNESCO Basque whaling station.
    { id: "RDB", name: "Red Bay", county: "nl-division-no-10-11", lat: 51.73, lon: -56.42, scenic: true, type: "coast", size: 1 },
    // Nain: Nunatsiavut's biggest community (847), the northernmost town, reached only by sea or air.
    { id: "NAI", name: "Nain", county: "nl-division-no-10-11", lat: 56.54, lon: -61.72, type: "coast", size: 1 },
    // Torngat Mountains National Park: on the north shore of Saglek Fjord, the park's south edge (its
    // point, 59.44, -63.70, is on the coast behind 22 miles of mountains), so mountain.
    { id: "TNG", name: "Torngat Mountains", county: "nl-division-no-10-11", lat: 58.55, lon: -63.2, scenic: true, type: "mountain", size: 1 },
  ],
  levels: [
    {
      name: "St. John's & the East",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "connect", a: "STJ", b: "CLV" },
      ],
    },
    {
      name: "Central Newfoundland",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "counties", target: 3 },
        { kind: "connect", a: "STJ", b: "GFW" },
      ],
    },
    {
      name: "The West Coast",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "STJ", b: "CBK" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Labrador",
      areas: ["labrador"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "counties", target: 6 },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
  // Real mountain passes and gaps: none. The lines over the Long Range Mountains and the Torngats
  // need only short tunnels on the map (NOTES.md).
  passes: [],
  // Real ferries: [name, latitude, longitude]. Water crossed near one uses the real crossing; anywhere
  // else you build a new bridge, if the water is narrow enough. Positions are approximate (well-known
  // routes, not surveyed points). Ferry points lie out on the route, away from the towns, so other
  // lines from the same town don't count as using them, and within 10 miles of Newfoundland's land.
  bridges: [
    // North Sydney-Port aux Basques, all year: a point where the route leaves the Cabot Strait bay,
    // 9 mi off Cape Ray (Nova Scotia lists one off North Sydney). Lines from Cape Breton to Port aux
    // Basques and Stephenville cross on it.
    ["North Sydney–Port aux Basques ferry (Port aux Basques side)", 47.49, -59.24],
    // North Sydney-Argentia, summer: the route rounds the Burin Peninsula into Placentia Bay. Two
    // points off the peninsula's southwest tip, where lines from Cape Breton to the Avalon leave
    // the bay; one off Argentia, in Placentia Bay (shore water, so only a marker).
    ["North Sydney–Argentia ferry (off the Burin Peninsula, west)", 46.97, -56.08],
    ["North Sydney–Argentia ferry (off the Burin Peninsula, south)", 46.88, -56.08],
    ["North Sydney–Argentia ferry (Argentia side)", 47.28, -54.03],
    // St. Barbe-Blanc-Sablon across the Strait of Belle Isle, the island's link to Labrador: two
    // points on the route, 5-10 mi out from St. Barbe. St. Barbe-L'Anse-au-Clair crosses on it.
    ["St. Barbe–Blanc-Sablon ferry (St. Barbe side)", 51.26, -56.87],
    ["St. Barbe–Blanc-Sablon ferry (mid-strait)", 51.33, -56.97],
    // Farewell-Fogo Island: Notre Dame Bay is shore water, so only a marker.
    ["Farewell–Fogo Island ferry", 49.59, -54.38],
  ],
  // Water that needs a bridge (elsewhere, sea between two places means track follows the shore).
  // Newfoundland is reached only by the ferries, so the sea between it and Cape Breton (and the open
  // Atlantic south of it) is a bay, and so is the Strait of Belle Isle between the island and
  // Labrador. Each ring stays 4-9 km off the shores that lines run along; it meets Quebec's gulf bay
  // at 47.8°N and 50.88°N. Conception, Trinity, Placentia, Fortune and Notre Dame Bays stay shore
  // water, followed round as the roads go (NOTES.md).
  bays: [
    {
      name: "the Cabot Strait",
      // From Quebec's gulf bay off the Codroy Valley, 7 km off Cape Ray and the south coast to the
      // Burin Peninsula's tip, south to 45.2°N, back west 8-10 km off Cape Breton's east coast and
      // round Cape North to the gulf bay
      ring: [
        -59.6, 47.8, -59.42, 47.62, -59.25, 47.5, -58.6, 47.48, -58.0, 47.47, -57.6, 47.46, -57.0, 47.44, -56.5, 47.4, -56.25, 47.36,
        -56.05, 47.2, -56.05, 46.85, -55.95, 46.8, -55.6, 46.8, -55.3, 46.82, -55.15, 46.8, -55.0, 46.6, -55.0, 45.2, -59.8, 45.2,
        -59.75, 45.6, -59.72, 45.95, -59.75, 46.2, -59.88, 46.4, -60.2, 46.6, -60.2, 46.9, -60.3, 47.12, -60.75, 47.15, -61.15, 47.3,
        -61.3, 47.85,
      ],
    },
    {
      name: "the Strait of Belle Isle",
      // From Quebec's gulf bay off Port au Choix and the Lower North Shore, between the Northern
      // Peninsula and the Labrador Straits, out past Cape Bauld and Chateau Bay to the Atlantic
      ring: [
        -58.6, 50.88, -58.6, 51.18, -58.0, 51.29, -57.7, 51.32, -57.25, 51.33, -57.12, 51.37, -56.85, 51.45, -56.72, 51.5, -56.58, 51.57,
        -56.42, 51.65, -56.2, 51.71, -55.95, 51.79, -55.7, 51.95, -55.45, 52.22, -54.9, 52.25, -54.9, 51.42, -55.3, 51.42, -55.32, 51.7,
        -55.75, 51.67, -56.0, 51.63, -56.2, 51.57, -56.38, 51.51, -56.52, 51.45, -56.65, 51.4, -56.78, 51.32, -56.86, 51.23, -56.93, 51.13,
        -57.03, 51.02, -57.12, 50.92, -57.2, 50.88,
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  // Labrador and central Newfoundland are boreal forest; the east, the southwest and the west
  // coast are forest under barren hills and the Long Range; the Avalon is open barrens and towns.
  biomes: {
    forest: ["nl-division-no-10-11", "nl-division-no-6-8"],
    wooded: ["nl-division-no-2-7", "nl-division-no-3-4", "nl-division-no-5-9"],
  },
});
