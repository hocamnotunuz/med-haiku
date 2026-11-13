// National Railways pack: Rhode Island.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/RI/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/RI/raw.
// Rhode Island's 5 counties are 5 regions (all are over 50,000, so nothing is merged: tools/build-map.js, STATES.RI).
// Newport County (Aquidneck and Conanicut islands, Tiverton and Little Compton) has no land link to the rest of the
// state: it joins Bristol and Washington County over the bridges below, with Narragansett Bay as the one `bays` area.
NR.addPack({
  code: "RI",
  name: "Rhode Island",
  // A game that starts here begins owning Providence (the biggest region), Kent (Warwick) and Bristol: Kent and Bristol
  // both touch Providence. Providence is metro and Warwick and Bristol are coast, so the first track (Providence to
  // Warwick, the Northeast Corridor and I-95, 9 mi) has riders.
  start: ["ri-providence", "ri-kent", "ri-bristol"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code shown
  // on passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which level
  // unlocks it in Levels mode. Points are the Census points (every Census place is in packs/RI/raw/places.json) unless a
  // comment says otherwise. Rhode Island's towns are county subdivisions, not Census places with a population, so a
  // well-known centre is used where the files have none and the comment says so.
  stations: [
    // Level: Providence, Warwick and Bristol: the head of Narragansett Bay
    // Providence (190,931): the capital and the biggest city of Rhode Island, on I-95 and Amtrak's Northeast Corridor (Providence station, the State House, Brown University, RISD, WaterFire). Region 661k, the biggest of the state (a metro of 1.6 million): size 4, like Hartford (889k). The point is the Census point, 0.5 km from the station. ProvPort is a small harbour (scrap, fuel, salt), not a container port, so no port.
    { id: "PVD", name: "Providence", county: "ri-providence", lat: 41.82, lon: -71.42, type: "metro", size: 4, pop: 661, main: true, level: "bay" },
    // Warwick (82,829): the biggest city of Kent County and the second city of the state, on I-95, US-1 and Amtrak (T. F. Green Airport station) with Rhode Island T. F. Green International Airport (about 3.7 million passengers a year, the state's only airline airport and a bar like Albany's in the NY pack). Typed coast (39 miles of Narragansett Bay shore: Warwick Neck, Oakland Beach) so that the start has two types of place and the first track (Providence to Warwick) has riders. Region 170k, size 2. The point is the Census point.
    { id: "WRWK", name: "Warwick", county: "ri-kent", lat: 41.7, lon: -71.42, airport: "Rhode Island T. F. Green International Airport", type: "coast", size: 2, pop: 170, main: true, level: "bay" },
    // Bristol (the town, about 22,500): the biggest town of the smallest county (Barrington, about 17,000, is a town here). The Census files have no place for it, so the point is the town centre (Hope Street and the Common): Colt State Park, Roger Williams University, the Fourth of July parade (since 1785) and the Mount Hope Bridge to Aquidneck Island. Region 51k, size 1.
    { id: "BRRI", name: "Bristol", county: "ri-bristol", lat: 41.68, lon: -71.27, type: "coast", size: 1, pop: 51, main: true, level: "bay" },
    // Level: Newport and the islands
    // Newport (25,168): the Gilded Age mansions (the Breakers, Marble House: The Preservation Society of Newport County) and the Cliff Walk, scenic. Sailing, the Naval War College and the Newport Jazz Festival. The point is downtown at the harbour (Thames Street and the Visitor Center), 1.7 km from the Census point, which is the middle of the city limits. Region 86k, size 2 (the brief's call: a tourist city; the 60,000-300,000 band).
    { id: "NWRI", name: "Newport", county: "ri-newport", lat: 41.49, lon: -71.31, scenic: true, type: "coast", size: 2, pop: 86, main: true, level: "islands" },
    // Level: South County
    // Wakefield (the village of Wakefield-Peace Dale, in South Kingstown, 31,931 for the town): the centre of Washington County, on US-1 and RI-108 and 5 mi from the University of Rhode Island at Kingston (Kingston Amtrak station). Westerly (23,359) is bigger as a place of the Connecticut border but in a corner; North Kingstown (27,732) is a town. Typed farm (South County's farms, URI and the mill villages, with the beaches in the towns). The point is the Census CDP point. Region 130k, size 2.
    { id: "WKRI", name: "Wakefield", county: "ri-washington", lat: 41.45, lon: -71.5, type: "farm", size: 2, pop: 130, main: true, level: "south" },
  ],
  // Towns that appear over time: the next-biggest real places of each region, spread out, plus well-known scenic
  // places (scenic: true, see NOTES.md).
  towns: [
    // Providence County
    // Pawtucket (75,608): the "birthplace of the American Industrial Revolution" (Slater Mill), on I-95 and the Blackstone River just north of Providence
    { id: "PWTK", name: "Pawtucket", county: "ri-providence", lat: 41.87, lon: -71.37, type: "metro", size: 1 },
    // Cranston (82,930): the third city of the state, on the west side of Providence along US-1 and I-295
    { id: "CRNS", name: "Cranston", county: "ri-providence", lat: 41.77, lon: -71.49, type: "metro", size: 1 },
    // Woonsocket (43,224): the Blackstone Valley mill city in the north on RI-146 and RI-122, the way up to Worcester
    { id: "WNSK", name: "Woonsocket", county: "ri-providence", lat: 42.0, lon: -71.5, type: "farm", size: 1 },
    // Kent County
    // West Warwick (about 31,000, a town with a CDP and no population in the files): the Pawtuxet Valley mill villages on RI-117 and RI-115, the biggest place of Kent after Warwick
    { id: "WWRI", name: "West Warwick", county: "ri-kent", lat: 41.69, lon: -71.52, type: "metro", size: 1 },
    // Bristol County
    // Barrington (about 17,000, a town): the shore suburb between East Providence and Bristol on RI-114 (the East Bay Bike Path)
    { id: "BRRN", name: "Barrington", county: "ri-bristol", lat: 41.74, lon: -71.31, type: "coast", size: 1 },
    // Newport County
    // Portsmouth (about 17,800, a town on the north of Aquidneck Island, on RI-24 and RI-114): farms and the Mount Hope Bridge
    { id: "PRSM", name: "Portsmouth", county: "ri-newport", lat: 41.6, lon: -71.26, type: "farm", size: 1 },
    // Tiverton (about 16,000, CDP): the mainland part of Newport County by Massachusetts, across the Sakonnet River on RI-24 (the way to Fall River)
    { id: "TVTN", name: "Tiverton", county: "ri-newport", lat: 41.65, lon: -71.2, type: "farm", size: 1 },
    // Washington County
    // Westerly (23,359): Rhode Island's south-western corner on the Pawcatuck River and the Connecticut line, on US-1 and the Northeast Corridor (Westerly station, the stop for Mystic and New London)
    { id: "WSLY", name: "Westerly", county: "ri-washington", lat: 41.37, lon: -71.81, type: "coast", size: 1 },
    // Watch Hill (CDP): the Victorian seaside village of Westerly with the Flying Horse Carousel (about 1883, the oldest in the country, a National Historic Landmark) and the Watch Hill Lighthouse
    { id: "WHRI", name: "Watch Hill", county: "ri-washington", lat: 41.32, lon: -71.85, scenic: true, type: "coast", size: 1 },
    // Block Island (New Shoreham, about 1,100 people): Old Harbor, the Mohegan Bluffs and the Southeast Light, 13 mi off Point Judith, reached by the Block Island Ferry from Galilee. Part of Washington County (the map draws it as an island of the county). The point is Old Harbor, the ferry landing.
    { id: "BLKI", name: "Block Island", county: "ri-washington", lat: 41.17, lon: -71.56, scenic: true, type: "coast", size: 1 },
    // North Kingstown (27,732, a town): Wickford village and Quonset Point on the west shore of the Bay, at the Jamestown Verrazzano Bridge: the way from Newport to South County
    { id: "NKRI", name: "North Kingstown", county: "ri-washington", lat: 41.57, lon: -71.45, type: "coast", size: 1 },
  ],
  // Real passes and tunnels: [name, latitude, longitude]. See NOTES.md for sources.
  // (none: Rhode Island has no mountains; its highest point, Jerimoth Hill, is 812 ft)
  passes: [],
  // Real bridges and ferries: [name, latitude, longitude]. See NOTES.md for sources. The map has no rivers in Rhode
  // Island; these are the real crossings of Narragansett Bay and the Sakonnet River (the `bays` area below).
  bridges: [
    // The head of the Bay
    ["Washington Bridge (I-195, Providence to East Providence)", 41.81, -71.38],
    // The East Bay and Aquidneck Island
    ["Mount Hope Bridge (Bristol to Portsmouth)", 41.64, -71.27],
    ["Sakonnet River Bridge (Tiverton to Portsmouth)", 41.62, -71.21],
    // Conanicut Island and the West Passage
    ["Claiborne Pell Newport Bridge (Newport to Jamestown)", 41.51, -71.35],
    ["Jamestown Verrazzano Bridge (Jamestown to North Kingstown)", 41.55, -71.41],
    // Block Island Sound
    ["Block Island Ferry (Galilee terminal, Narragansett)", 41.38, -71.51],
    ["Block Island Ferry (Old Harbor terminal)", 41.17, -71.55],
  ],
  // Bays: Narragansett Bay (with its East and West Passages and Providence River, Mount Hope Bay and the Sakonnet River) and Block Island Sound.
  // Only the water counts (land inside the outline is ignored); the mouths are closed at Newport and Point Judith and at
  // the Sakonnet's mouth, so the open sea outside is just coast. ring = longitude, latitude pairs.
  bays: [
    {
      name: "Narragansett Bay",
      ring: [-71.5, 41.8, -71.3, 41.78, -71.2, 41.74, -71.14, 41.7, -71.14, 41.56, -71.17, 41.47, -71.27, 41.47, -71.33, 41.455, -71.36, 41.45, -71.45, 41.435, -71.5, 41.45],
    },
    {
      // The open sea between Point Judith and Block Island (13 mi): only the ferry crosses it
      name: "Block Island Sound",
      ring: [-71.68, 41.4, -71.42, 41.4, -71.42, 41.12, -71.68, 41.12],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The forests of the west: Scituate and Burrillville, West Greenwich and Arcadia, Pachaug-Pawcatuck country. Not
    // listed (farmland): Bristol and Newport counties (the East Bay and the islands).
    wooded: ["ri-providence", "ri-kent", "ri-washington"],
  },
  levels: [
    {
      name: "Providence & the Head of the Bay",
      areas: ["bay"],
      goals: [
        { kind: "totalPassengers", target: 60 },
        // Providence to Warwick, as the Northeast Corridor and I-95 run
        { kind: "connect", a: "PVD", b: "WRWK" },
        { kind: "counties", target: 3 },
      ],
    },
    {
      name: "Newport & the Islands",
      areas: ["islands"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Bristol to Newport, over the Mount Hope Bridge and down Aquidneck Island (RI-114)
        { kind: "connect", a: "BRRI", b: "NWRI" },
        { kind: "counties", target: 4 },
      ],
    },
    {
      name: "South County",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 240 },
        // Newport to Wakefield, over the Pell and Jamestown Verrazzano bridges and down the West Bay shore (RI-138 and US-1)
        { kind: "connect", a: "NWRI", b: "WKRI" },
        { kind: "counties", target: 5 },
      ],
    },
  ],
});
