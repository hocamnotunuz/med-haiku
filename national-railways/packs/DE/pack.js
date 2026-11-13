// National Railways pack: Delaware.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/DE/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/DE/raw.
// Delaware's 3 counties are 3 regions (all are over 50,000, so nothing is merged: tools/build-map.js, STATES.DE).
NR.addPack({
  code: "DE",
  name: "Delaware",
  // A game that starts here begins owning the whole state: New Castle (the biggest region), Kent (it touches New
  // Castle) and Sussex (it touches Kent only, not New Castle: there are only 3 regions and each joins up to an earlier
  // one). Wilmington is metro and Dover and Georgetown are farm, so the first track (Wilmington to Dover, US-13/DE-1,
  // 45 mi) has riders.
  start: ["de-new-castle", "de-kent", "de-sussex"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code
  // shown on passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. Points are the Census points (every Census place is in
  // packs/DE/raw/places.json).
  stations: [
    // Level: New Castle County, the Delaware end of the Philadelphia metro
    // Wilmington (70,892): the biggest city, on the Northeast Corridor (Amtrak and SEPTA) and I-95 (the Census point is the middle of the city limits, 1 mi from the station). Region 571k, size 3. A real port: the Port of Wilmington (Christina and Delaware rivers; cars, fruit and bananas) is smaller than Baltimore's, a size-3 region with a port like Mobile.
    { id: "WLDE", name: "Wilmington", county: "de-new-castle", lat: 39.74, lon: -75.53, port: "Port of Wilmington", type: "metro", size: 3, pop: 571, main: true, level: "newcastle" },
    // Level: Kent County, the capital and the middle of the state
    // Dover (39,422): the state capital, on US-13 and DE-1, with Dover Air Force Base. Region 182k, size 2.
    { id: "DVDE", name: "Dover", county: "de-kent", lat: 39.16, lon: -75.52, type: "farm", size: 2, pop: 182, main: true, level: "kent" },
    // Level: Sussex County and the beaches
    // Georgetown (7,141): the county seat, in the middle of the county on US-113 and DE-404, 20 mi from the beaches and 25 mi from the Maryland line. Milford (11,185) and Seaford (7,946) are bigger but sit at the north and west edges of the county (Milford on the Kent line, 21 mi from Dover), so the middle town makes the better station and both are towns. Region 237k, size 2.
    { id: "GTDE", name: "Georgetown", county: "de-sussex", lat: 38.69, lon: -75.39, type: "farm", size: 2, pop: 237, main: true, level: "sussex" },
  ],
  // Towns that appear over time: the next-biggest real places of each region, spread out, plus well-known scenic
  // places (scenic: true, see NOTES.md).
  towns: [
    // New Castle County
    { id: "NWRK", name: "Newark", county: "de-new-castle", lat: 39.68, lon: -75.76, type: "metro", size: 1 },
    { id: "MDTD", name: "Middletown", county: "de-new-castle", lat: 39.44, lon: -75.72, type: "farm", size: 1 },
    // Winterthur Museum, Garden & Library (the du Pont estate in the Brandywine Valley)
    { id: "WTHR", name: "Winterthur", county: "de-new-castle", lat: 39.81, lon: -75.6, scenic: true, type: "farm", size: 1 },
    // Kent County
    { id: "SMYD", name: "Smyrna", county: "de-kent", lat: 39.3, lon: -75.61, type: "farm", size: 1 },
    // Bombay Hook National Wildlife Refuge (Delaware Bay salt marsh, a huge bird migration stop; visitor center)
    { id: "BOHK", name: "Bombay Hook", county: "de-kent", lat: 39.26, lon: -75.46, scenic: true, type: "coast", size: 1 },
    // Sussex County
    { id: "MLFD", name: "Milford", county: "de-sussex", lat: 38.91, lon: -75.42, type: "farm", size: 1 },
    { id: "SEAF", name: "Seaford", county: "de-sussex", lat: 38.66, lon: -75.61, type: "farm", size: 1 },
    // Lewes (3,300): the Delaware Bay town (the "First Town in the First State"), the Cape Henlopen State Park beaches and the ferry to Cape May
    { id: "LWDE", name: "Lewes", county: "de-sussex", lat: 38.78, lon: -75.14, scenic: true, type: "coast", size: 1 },
    // Rehoboth Beach (1,105): "the Nation's Summer Capital", the Boardwalk and the Atlantic beaches
    { id: "RHBE", name: "Rehoboth Beach", county: "de-sussex", lat: 38.72, lon: -75.08, scenic: true, type: "coast", size: 1 },
  ],
  // Real passes and tunnels: [name, latitude, longitude]. See NOTES.md for sources.
  // (none: Delaware is flat, the highest ground is Ebright Azimuth at 448 ft)
  passes: [],
  // Real bridges: [name, latitude, longitude]. See NOTES.md for sources.
  bridges: [
    // I-295 and the NJ Turnpike's link between New Castle and Deepwater, New Jersey (Delaware River Port Authority)
    ["Delaware Memorial Bridge (I-295, New Castle to Deepwater, New Jersey)", 39.69, -75.52],
    // Delaware River and Bay Authority: Lewes terminal to Cape May, New Jersey (17 mi, 85 min)
    ["Cape May-Lewes Ferry (Lewes to Cape May, New Jersey)", 38.79, -75.12],
  ],
  // Water that blocks track except at the bridges above. The Census county shapes stop at the shore, so the open water is
  // outside the land: this polygon only marks it where it is too wide to follow the shore (the west edge hugs Delaware's
  // shore; the New Jersey shore is approximate and is on the New Jersey pack's side).
  bays: [
    {
      name: "Delaware Bay", // the Delaware River from the Memorial Bridge, down the Bay to the mouth between Cape Henlopen and Cape May; crossed at the Memorial Bridge and by the Cape May-Lewes Ferry
      ring: [-75.532, 39.68, -75.566, 39.65, -75.598, 39.62, -75.59, 39.59, -75.55, 39.56, -75.548, 39.53, -75.572, 39.5, -75.576, 39.47, -75.552, 39.44, -75.524, 39.41, -75.508, 39.38, -75.48, 39.35, -75.436, 39.32, -75.41, 39.29, -75.392, 39.26, -75.382, 39.2, -75.394, 39.14, -75.39, 39.08, -75.366, 39.05, -75.33, 39.02, -75.318, 38.99, -75.306, 38.96, -75.296, 38.93, -75.278, 38.9, -75.246, 38.87, -75.224, 38.85, -75.202, 38.83, -75.13, 38.82, -75.08, 38.83, -74.97, 38.91, -74.99, 38.95, -74.96, 39, -74.96, 39.1, -75, 39.16, -75.1, 39.17, -75.16, 39.2, -75.24, 39.25, -75.3, 39.3, -75.36, 39.35, -75.43, 39.4, -75.49, 39.43, -75.52, 39.47, -75.52, 39.52, -75.515, 39.56, -75.52, 39.6, -75.52, 39.64, -75.505, 39.68],
    },
  ],
  levels: [
    {
      name: "Wilmington & New Castle County",
      areas: ["newcastle"],
      goals: [
        { kind: "totalPassengers", target: 40 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Dover & Kent County",
      areas: ["kent"],
      goals: [
        { kind: "totalPassengers", target: 100 },
        // Wilmington to Dover, as US-13 and DE-1 run
        { kind: "connect", a: "WLDE", b: "DVDE" },
        { kind: "counties", target: 2 },
      ],
    },
    {
      name: "Sussex County & the Beaches",
      areas: ["sussex"],
      goals: [
        { kind: "totalPassengers", target: 160 },
        // Dover to Georgetown, as US-113 runs down the middle of the state
        { kind: "connect", a: "DVDE", b: "GTDE" },
        { kind: "counties", target: 3 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // Sussex's pine woods and the Great Cypress Swamp, as Maryland's Lower Shore (Somerset-Wicomico) is
    wooded: ["de-sussex"],
    // Not listed (farmland): New Castle's suburbs and Piedmont and Kent's farms. No forest, no dry.
  },
});
