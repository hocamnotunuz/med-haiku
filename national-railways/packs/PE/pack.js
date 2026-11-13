// National Railways pack: Prince Edward Island (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, the Confederation Bridge,
// the ferries to Nova Scotia and the Magdalen Islands, and the Northumberland Strait they cross.
// The census division borders come from map.js and the land from terrain.js (the island is flat:
// no hills, lakes or rivers on the map). What each field means: PACKS.md. Judgment calls and
// sources: packs/PE/NOTES.md. Cities and populations: Statistics Canada (2021), packs/PE/raw.
NR.addPack({
  code: "PE",
  name: "Prince Edward Island",
  country: "CAN",
  // A game that starts here begins owning the whole island: Queens (Charlottetown) and its two
  // neighbours, Prince and Kings. Charlottetown is metro, Summerside coast and Montague farm, so the
  // first track has riders.
  start: ["pe-queens", "pe-prince", "pe-kings"],
  // Main stations: one per county (each county is its own region).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level it belongs to in Levels mode.
  stations: [
    // Charlottetown: the capital, downtown by Province House (the raw city point). 90k is size 2 by
    // the guide (60,000-300,000), like Sydney (98k) and Saint John (77k). No airport or port: see NOTES.md.
    { id: "CHA", name: "Charlottetown", county: "pe-queens", lat: 46.24, lon: -63.13, type: "metro", size: 2, pop: 90, main: true, level: "queens" },
    // Summerside: the island's second city, downtown on its waterfront on Bedeque Bay, so coast.
    { id: "SUM", name: "Summerside", county: "pe-prince", lat: 46.4, lon: -63.79, type: "coast", size: 1, pop: 46, main: true, level: "prince" },
    // Montague rather than Souris: Montague is Kings County's biggest town (population centre 1,896;
    // Souris has 1,079) and its main service town, on the Montague River; Souris, the ferry port at
    // the east end, is a town. Montague serves the farms of southern Kings, so farm. (The raw
    // places list puts Montague in Queens; on the map its point is in Kings.)
    { id: "MNT", name: "Montague", county: "pe-kings", lat: 46.17, lon: -62.65, type: "farm", size: 1, pop: 18, main: true, level: "kings" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point (sources in NOTES.md).
  towns: [
    // Queens
    // Cavendish: Green Gables, the farm of Anne of Green Gables (L.M. Montgomery's Cavendish
    // National Historic Site), by the national park's beaches.
    { id: "CAV", name: "Cavendish", county: "pe-queens", lat: 46.49, lon: -63.38, scenic: true, type: "coast", size: 1 },
    // Prince Edward Island National Park: the dunes and red-sand beaches of the north shore, at
    // Brackley Beach (the park's point, 1 km north, is in the sea on the map).
    { id: "PNP", name: "PEI National Park", county: "pe-queens", lat: 46.41, lon: -63.19, scenic: true, type: "coast", size: 1 },
    // Wood Islands: where the ferry to Caribou, Nova Scotia leaves.
    { id: "WDI", name: "Wood Islands", county: "pe-queens", lat: 45.97, lon: -62.75, type: "coast", size: 1 },
    // Prince
    // Borden-Carleton: the island end of the Confederation Bridge (Gateway Village).
    { id: "BDC", name: "Borden-Carleton", county: "pe-prince", lat: 46.26, lon: -63.67, scenic: true, type: "coast", size: 1 },
    // Kensington: the market town of central Prince County's potato farms, so farm.
    { id: "KSN", name: "Kensington", county: "pe-prince", lat: 46.44, lon: -63.64, type: "farm", size: 1 },
    // O'Leary: West Prince's potato country, with the Canadian Potato Museum, so farm.
    { id: "OLR", name: "O'Leary", county: "pe-prince", lat: 46.71, lon: -64.23, type: "farm", size: 1 },
    // Tignish: the Acadian fishing town near North Cape, at the island's western tip.
    { id: "TIG", name: "Tignish", county: "pe-prince", lat: 46.95, lon: -64.03, type: "coast", size: 1 },
    // Kings
    // Souris: the fishing port where the ferry to the Magdalen Islands leaves.
    { id: "SRS", name: "Souris", county: "pe-kings", lat: 46.36, lon: -62.25, type: "coast", size: 1 },
    // Morell: the village on the north shore by St. Peters Bay.
    { id: "MOR", name: "Morell", county: "pe-kings", lat: 46.42, lon: -62.71, type: "farm", size: 1 },
    // East Point: the lighthouse at the island's eastern tip.
    { id: "EPT", name: "East Point", county: "pe-kings", lat: 46.45, lon: -62.0, scenic: true, type: "coast", size: 1 },
  ],
  levels: [
    {
      name: "Charlottetown & Queens",
      areas: ["queens"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "connect", a: "CHA", b: "SUM" },
      ],
    },
    {
      name: "Summerside & Prince",
      areas: ["prince"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "Kings & the Points East",
      areas: ["kings"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "SUM", b: "MNT" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
  ],
  // Real mountain passes and gaps: none (the island is flat).
  passes: [],
  // Real bridges and ferries: [name, latitude, longitude]. Water crossed near one uses the real
  // crossing; anywhere else you build a new bridge, if the water is narrow enough. Positions are
  // approximate (well-known crossings, not surveyed points). Ferry points lie out on the route,
  // away from the towns, so other lines from the same town don't count as using them.
  bridges: [
    // The Confederation Bridge, Borden-Carleton to Cape Jourimain, the island's only fixed link
    // (New Brunswick lists a point near its Cape Jourimain end). Lines from Borden-Carleton, and
    // Charlottetown-Moncton, cross on it.
    ["Confederation Bridge (Borden-Carleton end)", 46.24, -63.69],
    ["Confederation Bridge (mid-strait)", 46.2, -63.75],
    // Caribou (Nova Scotia)-Wood Islands ferry (seasonal): two points out on the route (Nova Scotia
    // lists one off Caribou; the same name joins them into one crossing). Lines from Wood Islands,
    // Montague and Morell to Pictou and New Glasgow cross on it.
    ["Caribou–Wood Islands ferry (Wood Islands side)", 45.9, -62.72],
    ["Caribou–Wood Islands ferry (mid-strait)", 45.84, -62.7],
    // Souris-Cap-aux-Meules ferry to the Magdalen Islands: a point where it rounds East Point
    // (Quebec lists the Magdalen end). The gulf it crosses is plain sea, so this is a marker.
    ["Souris–Cap-aux-Meules ferry (off East Point)", 46.49, -62.0],
  ],
  // Water that needs a bridge (elsewhere, sea between two places means track follows the shore).
  // The island's only crossings are the Confederation Bridge and the Wood Islands ferry, so the
  // Northumberland Strait is a bay: from the west tip (North Cape, West Point) to Cape George, a few
  // km off both shores, leaving Egmont, Bedeque and Hillsborough Bays, Baie Verte, Shediac Bay and
  // Tatamagouche Bay as shore water. Its east end meets Nova Scotia's St. Georges Bay at Cape
  // George. The gulf between Kings and Cape Breton (to Inverness, as far as the line from East
  // Point) is a bay too, east of the shore water along Kings' coast. Rings drawn on a grid of the
  // map's land; land inside a ring stays land. See NOTES.md.
  bays: [
    {
      name: "the Northumberland Strait",
      ring: [
        -64.0, 47.12, -64.08, 47.02, -64.22, 46.92, -64.35, 46.8, -64.45, 46.7, -64.43, 46.62, -64.16, 46.39, -64.0, 46.36, -63.86, 46.36,
        -63.82, 46.31, -63.69, 46.245, -63.62, 46.19, -63.47, 46.17, -63.36, 46.13, -63.02, 46.03, -62.92, 45.99, -62.75, 45.935, -62.6, 45.955,
        -62.44, 45.97, -62.42, 46.06, -62.0, 46.05, -61.9, 45.9, -61.88, 45.86, -62.02, 45.86, -62.1, 45.8, -62.23, 45.755, -62.62, 45.755,
        -62.69, 45.77, -62.95, 45.79, -63.25, 45.83, -63.45, 45.885, -63.7, 45.89, -63.8, 45.915, -63.84, 45.98, -63.86, 46.06, -63.76, 46.1,
        -63.78, 46.145, -63.92, 46.18, -64.17, 46.235, -64.42, 46.26, -64.5, 46.35, -64.6, 46.45, -64.67, 46.55, -64.68, 46.65, -64.82, 46.74,
        -64.88, 46.84, -64.8, 46.95, -64.76, 47.03,
      ],
    },
    {
      name: "the Gulf of St. Lawrence",
      // Between Kings and Cape Breton: from the strait's east end and St. Georges Bay's north edge
      // up to a line from East Point to off Inverness, 9-20 km off Kings' east coast (lines along it
      // stay shore water)
      ring: [-62.0, 46.05, -61.4, 46.25, -61.38, 46.33, -61.95, 46.43, -62.03, 46.38, -62.12, 46.28, -62.2, 46.15, -62.22, 46.055],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  // The whole island is farmland, "the Garden of the Gulf" (see NOTES.md).
  biomes: { forest: [], wooded: [], dry: [] },
});
