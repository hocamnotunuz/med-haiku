// National Railways pack: Connecticut.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/CT/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/CT/raw.
// Connecticut's 8 counties are 8 regions (all are over 50,000, so nothing is merged: tools/build-map.js, STATES.CT).
NR.addPack({
  code: "CT",
  name: "Connecticut",
  // A game that starts here begins owning Fairfield (Bridgeport and the Gold Coast, the biggest region), New Haven
  // and Litchfield: all three touch each other. Bridgeport and Litchfield's Torrington are metro and mountain
  // and New Haven is coast, so the first track (Bridgeport to New Haven, the New Haven Line / I-95, 18 mi)
  // has riders.
  start: ["ct-fairfield", "ct-new-haven", "ct-litchfield"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code
  // shown on passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. Points are the Census points (every Census place is in
  // packs/CT/raw/places.json) unless a comment says otherwise. Connecticut's towns are county subdivisions, not
  // Census places with a population, so the well-known centre is used and said in the comment.
  stations: [
    // Level: Fairfield, New Haven and Litchfield: the Gold Coast, the Naugatuck Valley and the Litchfield Hills
    // Bridgeport (148,642): the biggest city of the state, on the New Haven Line and Amtrak, I-95 and the Bridgeport-Port Jefferson ferry (the Sound crossing to Long Island). Stamford (135,451, the corporate and Metro-North hub) is the second city and a town. Fairfield is the biggest region (942k) and part of the New York metro: size 4, like Westchester (1.0 million), Bergen (956k) and Erie (954k), although it is just over the 900k top of the size-3 band. The point is downtown at Bridgeport station, 1 km from the Census point. The Port of Bridgeport and Sikorsky Memorial Airport are small, so no port or airport.
    { id: "BPCT", name: "Bridgeport", county: "ct-fairfield", lat: 41.18, lon: -73.19, type: "metro", size: 4, pop: 942, main: true, level: "shore" },
    // New Haven (134,026): Yale University (founded 1701, scenic) and the Amtrak and New Haven Line hub at Union Station (the point, 1.4 km from the Census point); the metro is 860,000. Typed coast (New Haven Harbor and the Sound) so that the start has two types of place and the first track (Bridgeport to New Haven) has riders. The Port of New Haven is Connecticut's busiest deepwater port but it is not a container port, so no port. Region 852k, size 3 (just under Montgomery, Pennsylvania, 857k).
    { id: "NHVN", name: "New Haven", county: "ct-new-haven", lat: 41.3, lon: -72.93, scenic: true, type: "coast", size: 3, pop: 852, main: true, level: "shore" },
    // Torrington (35,508): the biggest place of Litchfield County, on US-202 and CT-8 in the Litchfield Hills (Litchfield, the old county seat, is a borough of 1,194). The point is downtown (Main Street), 3 km from the Census point, which is the middle of the city limits. Typed mountain (the hills) so that the start has two types of place. Region 180k, size 2.
    { id: "TRCT", name: "Torrington", county: "ct-litchfield", lat: 41.8, lon: -73.12, type: "mountain", size: 2, pop: 180, main: true, level: "shore" },
    // Level: Hartford, the Connecticut River and the north-east
    // Hartford (121,019): the state capital (the Capitol, the Mark Twain House, scenic), Union Station (Amtrak) and the I-84 / I-91 crossing, on the Connecticut. Bradley International Airport (Windsor Locks, 12 mi north, 6 million passengers) is the state's airport. Region 889k (a metro of 1.2 million): size 4, the capital, like Rochester (759k) and Buffalo (954k). The point is Union Station, 1 km from the Census point.
    { id: "HTFD", name: "Hartford", county: "ct-hartford", lat: 41.77, lon: -72.68, airport: "Bradley International Airport", scenic: true, type: "metro", size: 4, pop: 889, main: true, level: "valley" },
    // Middletown (47,723): the biggest place of Middlesex, on the Connecticut at the Arrigoni Bridge and CT-9 (Wesleyan University). Old Saybrook and Essex (towns) are on the shore. The Census point is the middle of the city limits, 2 km from Main Street. Region 162k, size 2.
    { id: "MDTW", name: "Middletown", county: "ct-middlesex", lat: 41.55, lon: -72.66, type: "farm", size: 2, pop: 162, main: true, level: "valley" },
    // Vernon (Rockville): Tolland has no Census place with a population in the files; the Rockville neighbourhood is the centre of Vernon, the biggest town of the county (about 30,000), on I-84 and I-384 (Tolland, the seat, is a small town; Storrs, the UConn campus, is a town here). The point is the Rockville CDP. Region 151k, size 2.
    { id: "VNCT", name: "Vernon", county: "ct-tolland", lat: 41.87, lon: -72.45, type: "farm", size: 2, pop: 151, main: true, level: "valley" },
    // Level: the Thames Valley and the Quiet Corner
    // New London (27,374): the Thames harbour at the Gold Star Bridge, Amtrak's Northeast Corridor and the Cross Sound Ferry to Orient Point, with the Naval Submarine Base across the river in Groton. Norwich (40,129) is a little bigger but is up the river and not on the coast or the ferry, so it is a town. Region 265k, size 2 (the 60,000-300,000 band). The point is Union Station, 2 km from the Census point.
    { id: "NLCT", name: "New London", county: "ct-new-london", lat: 41.35, lon: -72.09, type: "coast", size: 2, pop: 265, main: true, level: "east" },
    // Willimantic: the biggest place of Windham (about 17,500, a CDP with no population in the files; the only Census place with a population, Danielson, has 4,166), "the Thread City" on US-6 and CT-32. Putnam and Danielson in the north-east are towns. Region 117k, size 1.
    { id: "WLMC", name: "Willimantic", county: "ct-windham", lat: 41.72, lon: -72.21, type: "farm", size: 1, pop: 117, main: true, level: "east" },
  ],
  // Towns that appear over time: the next-biggest real places of each region, spread out, plus well-known scenic
  // places (scenic: true, see NOTES.md).
  towns: [
    // Fairfield County
    // Stamford (135,451): the second city, the Metro-North and Amtrak hub and a corporate headquarters centre, on I-95. The point is downtown at the Transportation Center, 3 km south of the Census point.
    { id: "STMD", name: "Stamford", county: "ct-fairfield", lat: 41.05, lon: -73.54, type: "metro", size: 3 },
    // Norwalk (91,188): the Fairfield County city on the Norwalk River at the head of the Sound (South Norwalk station, I-95)
    { id: "NRWL", name: "Norwalk", county: "ct-fairfield", lat: 41.09, lon: -73.42, type: "metro", size: 2 },
    // Danbury (86,511): the biggest place of the inland west, on I-84 and the Danbury Branch, the way into New York's Putnam County
    { id: "DNBY", name: "Danbury", county: "ct-fairfield", lat: 41.4, lon: -73.48, type: "metro", size: 2 },
    // Hartford County
    // New Britain (74,155): "the Hardware City", the second city of the county, on CT-72 and the CTfastrak busway
    { id: "NBCT", name: "New Britain", county: "ct-hartford", lat: 41.68, lon: -72.79, type: "metro", size: 1 },
    // Bristol (60,847): the home of ESPN, in the west of the county on CT-6 and CT-229
    { id: "BRCT", name: "Bristol", county: "ct-hartford", lat: 41.68, lon: -72.94, type: "metro", size: 1 },
    // Litchfield County
    // New Milford (about 28,000, a town with no Census population in the files): the biggest town of the county, on the Housatonic and US-7
    { id: "NWML", name: "New Milford", county: "ct-litchfield", lat: 41.58, lon: -73.4, type: "farm", size: 1 },
    // Litchfield (1,194): the colonial village green (a National Historic Landmark district) and the heart of the Litchfield Hills, with the White Memorial Conservation Center nearby
    { id: "LCHF", name: "Litchfield", county: "ct-litchfield", lat: 41.75, lon: -73.19, scenic: true, type: "mountain", size: 1 },
    // Kent Falls State Park: the 250 ft cascade on US-7 beside the Appalachian Trail (CT DEEP)
    { id: "KTFL", name: "Kent Falls", county: "ct-litchfield", lat: 41.77, lon: -73.41, scenic: true, type: "mountain", size: 1 },
    // Middlesex County
    // Old Saybrook: the mouth of the Connecticut River on I-95 and Amtrak (the Shore Line East terminus); a town with a CDP and no population in the files
    { id: "OSCT", name: "Old Saybrook", county: "ct-middlesex", lat: 41.29, lon: -72.36, type: "coast", size: 1 },
    // Essex: the Connecticut River village and the Essex Steam Train and Riverboat (the Valley Railroad, 1971), the best-known tourist railway in the state
    { id: "ESSX", name: "Essex", county: "ct-middlesex", lat: 41.35, lon: -72.39, scenic: true, type: "coast", size: 1 },
    // Gillette Castle State Park: the 1919 stone castle of the actor William Gillette on the Connecticut River in East Haddam (CT DEEP)
    { id: "GLCS", name: "Gillette Castle", county: "ct-middlesex", lat: 41.42, lon: -72.44, scenic: true, type: "farm", size: 1 },
    // New Haven County
    // Waterbury (114,455): "the Brass City", the second city of the county and the biggest of the Naugatuck Valley, on I-84 and CT-8
    { id: "WTBY", name: "Waterbury", county: "ct-new-haven", lat: 41.56, lon: -73.04, type: "metro", size: 2 },
    // Meriden (60,830): "the Silver City", on I-91 and the Hartford Line between New Haven and Hartford
    { id: "MRDC", name: "Meriden", county: "ct-new-haven", lat: 41.54, lon: -72.79, type: "metro", size: 1 },
    // Milford (50,569): the shore city between Bridgeport and New Haven on I-95 and the New Haven Line
    { id: "MLFR", name: "Milford", county: "ct-new-haven", lat: 41.22, lon: -73.06, type: "coast", size: 1 },
    // New London County
    // Norwich (40,129): "the Rose of New England", at the head of the Thames, a little bigger than New London; the point is downtown (Franklin Square), 3 km from the Census point
    { id: "NRWI", name: "Norwich", county: "ct-new-london", lat: 41.52, lon: -72.08, type: "farm", size: 1 },
    // Mystic: Mystic Seaport Museum (the leading maritime museum of the country) and Mystic Aquarium
    { id: "MYSC", name: "Mystic", county: "ct-new-london", lat: 41.36, lon: -71.96, scenic: true, type: "coast", size: 1 },
    // Tolland County
    // Storrs: the University of Connecticut's main campus (about 19,000 students) on CT-195, 12 mi from Vernon; a CDP with no population in the files
    { id: "STRS", name: "Storrs", county: "ct-tolland", lat: 41.81, lon: -72.25, type: "farm", size: 1 },
    // Windham County
    // Putnam (the biggest town of the north-east, about 9,000; a CDP with no population in the files): the Quiet Corner's antiques town on US-44 and US-169
    { id: "PTNM", name: "Putnam", county: "ct-windham", lat: 41.92, lon: -71.91, type: "farm", size: 1 },
  ],
  // Real passes and tunnels: [name, latitude, longitude]. See NOTES.md for sources.
  // (none: the Litchfield Hills are hills on the map, no mountains)
  passes: [],
  // Real bridges and ferries: [name, latitude, longitude]. See NOTES.md for sources. The Hudson Valley crossings
  // and the Long Island ends of the Sound ferries are in the New York pack's area; the Rhode Island and Massachusetts
  // links come with those states.
  bridges: [
    // The Connecticut River, from the sea up
    ["Raymond E. Baldwin Bridge (I-95) and Amtrak's Connecticut River Bridge (Old Saybrook to Old Lyme)", 41.31, -72.34],
    ["Chester-Hadlyme Ferry (CT-148, the Connecticut River)", 41.4, -72.42],
    ["Goodspeed Bridge (CT-82, East Haddam)", 41.45, -72.46],
    ["Arrigoni Bridge (CT-66 and CT-17, Middletown to Portland)", 41.57, -72.63],
    ["Bulkeley Bridge (I-84/US-44) and Founders Bridge (Hartford to East Hartford)", 41.77, -72.66],
    // The Housatonic, from the sea up
    ["Moses Wheeler Bridge (I-95) and the Devon Bridge (Amtrak) (Stratford to Milford)", 41.21, -73.11],
    ["Derby-Shelton Bridge (CT-34, Housatonic River)", 41.32, -73.08],
    ["Rochambeau Bridge (I-84, Newtown to Southbury)", 41.45, -73.31],
    ["New Milford bridge (US-202, Housatonic River)", 41.58, -73.41],
    // The Thames
    ["Gold Star Memorial Bridge (I-95) and Amtrak's Thames River Bridge (New London to Groton)", 41.34, -72.09],
    // Long Island Sound ferries (the other ends are in Suffolk County, New York)
    ["Bridgeport & Port Jefferson Ferry (Bridgeport terminal to Port Jefferson)", 41.17, -73.18],
    ["Cross Sound Ferry (New London terminal to Orient Point)", 41.35, -72.09],
    ["Cross Sound Ferry (Orient Point terminal)", 41.16, -72.24],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The hills and forests: the Litchfield Hills, the Quiet Corner and eastern uplands (Pachaug, Natchaug and
    // Cockaponset state forests)
    wooded: ["ct-litchfield", "ct-tolland", "ct-windham", "ct-middlesex", "ct-new-london"],
    // Not listed (farmland): the suburbs and cities of Fairfield and New Haven, the Connecticut River valley of Hartford
    // County. No forest and no dry.
  },
  levels: [
    {
      name: "Fairfield, New Haven & the Gold Coast",
      areas: ["shore"],
      goals: [
        { kind: "totalPassengers", target: 80 },
        // Bridgeport to New Haven, as the New Haven Line and I-95 run
        { kind: "connect", a: "BPCT", b: "NHVN" },
        { kind: "counties", target: 3 },
      ],
    },
    {
      name: "Hartford & the Connecticut Valley",
      areas: ["valley"],
      goals: [
        { kind: "totalPassengers", target: 200 },
        // Hartford to Middletown, as I-91 and CT-9 run along the Connecticut
        { kind: "connect", a: "HTFD", b: "MDTW" },
        { kind: "counties", target: 6 },
      ],
    },
    {
      name: "The Thames Valley & the Quiet Corner",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 320 },
        // New London to Willimantic, as CT-32 and US-6 run through the east
        { kind: "connect", a: "NLCT", b: "WLMC" },
        { kind: "counties", target: 8 },
      ],
    },
  ],
});
