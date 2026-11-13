// National Railways pack: Massachusetts.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/MA/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/MA/raw.
// Massachusetts' 14 counties are 12 regions (tools/build-map.js, STATES.MA): every county is over 50,000 except the
// islands, so Dukes (Martha's Vineyard) is merged with Barnstable and Nantucket is joined to them: Cape Cod and the
// Islands. The Cape and the islands touch the rest of the state only at the Cape Cod Canal (Plymouth County): the
// Bourne and Sagamore bridges below, the ferries to the islands and the three `bays` areas keep the water real.
NR.addPack({
  code: "MA",
  name: "Massachusetts",
  // A game that starts here begins owning Suffolk (Boston), Middlesex (Lowell and the western and northern suburbs,
  // the biggest region) and Norfolk (Quincy): all three touch each other. Boston and Lowell are metro and Quincy is
  // coast, so the first track (Boston to Quincy, the Red Line and I-93, 8 mi) has riders.
  start: ["ma-suffolk", "ma-middlesex", "ma-norfolk"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code shown
  // on passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which level
  // unlocks it in Levels mode. Points are the Census points (every Census place is in packs/MA/raw/places.json)
  // unless a comment says the downtown was used. Massachusetts' towns are county subdivisions, so the files give a
  // population only to its cities; the other places are the well-known centres and the comment says so.
  stations: [
    // Level: Boston and its ring: Suffolk, Middlesex, Norfolk and Essex
    // Boston (678,617): the capital, the biggest city of New England and the core of a metro of 4.9 million, on I-93, the Mass Pike and Amtrak's Northeast Corridor (South Station) and the Freedom Trail. The Port of Boston (Conley Container Terminal, in South Boston) is New England's one big container port and Logan International Airport (about 42 million passengers before 2020) is its big airport. Region 801k (Suffolk County is only Boston, Revere, Chelsea and Winthrop): size 5, like Philadelphia and Washington, the cores of metros of 4.9 and 6.3 million. The point is downtown at South Station, 3.5 km from the Census point, which lies in the Harbor by Logan.
    { id: "BOS", name: "Boston", county: "ma-suffolk", lat: 42.35, lon: -71.06, port: "Port of Boston (Conley Container Terminal)", airport: "Boston Logan International Airport", scenic: true, type: "metro", size: 5, pop: 801, main: true, level: "boston" },
    // Lowell (115,553): the old mill city on the Merrimack at the head of the Lowell Line and I-495 / I-93 (Lowell National Historical Park), the biggest place of the north of Middlesex County. Cambridge (118,395, Harvard and MIT) is the biggest city of the county but is 3.4 mi from Boston's downtown, one built-up area on the map, so Lowell is the main station and Cambridge is left out (NOTES.md). Region 1.63 million, the biggest of the state: size 4, like Fairfield, CT (942k) and Westchester NY (1.0 million) and the 1.6 million of Providence's metro, but below Boston's 5. The point is the Census point (1.5 km from Kearney Square).
    { id: "LWL", name: "Lowell", county: "ma-middlesex", lat: 42.64, lon: -71.32, type: "metro", size: 4, pop: 1632, main: true, level: "boston" },
    // Quincy (101,614): "the City of Presidents" (the Adams birthplaces, a National Historical Park) on Quincy Bay, I-93 and the Red Line's Braintree branch, the biggest place of Norfolk County (Dedham, the seat, is a village of the town). Typed coast (Quincy Bay and the Harbor) so that the start has two types of place and the first track (Boston to Quincy) has riders. Region 726k, size 3.
    { id: "QNMA", name: "Quincy", county: "ma-norfolk", lat: 42.26, lon: -71.01, type: "coast", size: 3, pop: 726, main: true, level: "boston" },
    // Lynn (101,264): the biggest city of Essex County, on Nahant Bay and the Newburyport / Rockport Line, with Lynn Beach and the Lynn Woods. Lawrence (89,149) is nearly as big but is up the Merrimack and a town here. Region 810k, size 3 (like Hartford's neighbours: New Haven 852k and Montgomery, PA, 857k are 3). The point is downtown (Central Square and Lynn station), 2 km from the Census point, so that it is 4.9 mi from Salem's downtown.
    { id: "LYNN", name: "Lynn", county: "ma-essex", lat: 42.46, lon: -70.95, type: "coast", size: 3, pop: 810, main: true, level: "boston" },
    // Level: the South Shore, the South Coast and the Cape
    // Brockton (105,659): "the City of Champions" (Rocky Marciano, Marvin Hagler), the biggest city of Plymouth County, on MA-24 and the Middleborough / Lakeville commuter line, 20 mi south of Boston. Plymouth (about 61,000, the Mayflower town) is a CDP with no population in the files and is a town. Region 531k, size 3.
    { id: "BKTN", name: "Brockton", county: "ma-plymouth", lat: 42.08, lon: -71.02, type: "metro", size: 3, pop: 531, main: true, level: "south" },
    // New Bedford (101,088): "the Whaling City" (the New Bedford Whaling National Historical Park, Melville's Moby-Dick) and the nation's top fishing port by value of catch, on Buzzards Bay at the head of the South Coast Rail line. Fall River (93,984) is a little smaller and is on the Rhode Island line (a town here). Region 579k, size 3. The Port of New Bedford is a fishing port and not a container port, so no port. The point is downtown (the Whaling Museum and the waterfront), 2.8 km from the Census point, which is the middle of the city limits.
    { id: "NBMA", name: "New Bedford", county: "ma-bristol", lat: 41.64, lon: -70.93, type: "coast", size: 3, pop: 579, main: true, level: "south" },
    // Hyannis (a village of the town of Barnstable, about 14,000, a CDP with no population in the files): the commercial and transport centre of Cape Cod (the Hyannis Transportation Center, Cape Cod Gateway Airport) and the mainland end of the Steamship Authority and Hy-Line ferries to Nantucket and Martha's Vineyard. Barnstable (the town, 48,914) is the Cape's biggest place but its Census point is the middle of the town limits and the centre is Hyannis. Region 264k (Cape Cod 229k, Martha's Vineyard 21k, Nantucket 14k, with far more in summer): size 2. Cape Cod Gateway Airport is small, so no airport.
    { id: "HYN", name: "Hyannis", county: "ma-barnstable-dukes-nantucket", lat: 41.65, lon: -70.28, type: "coast", size: 2, pop: 264, main: true, level: "south" },
    // Level: Worcester and the Pioneer Valley
    // Worcester (206,519): the second city of Massachusetts and of New England, the heart of Worcester County (the Worcester Line and I-90 / I-290 / I-190), and the "Heart of the Commonwealth". Region 862k: size 3, just under the 900k top of the size-3 band, like New Haven (852k) and Montgomery, PA (857k): its city is far bigger than theirs, but the region is not much bigger than Essex (810k) so it does not get 4 (NOTES.md). Worcester Regional Airport is small, so no airport. The point is the Census point, 1.4 km from Union Station.
    { id: "WORC", name: "Worcester", county: "ma-worcester", lat: 42.27, lon: -71.81, type: "metro", size: 3, pop: 862, main: true, level: "valley" },
    // Springfield (155,929): the third city of the state and the centre of the Pioneer Valley and the Connecticut River (Union Station, I-91 / I-90, the Basketball Hall of Fame and the Springfield Armory). Bradley International Airport is the Hartford station's in the Connecticut pack, so no airport here. Region 466k (a metro of 700,000): size 3. The point is downtown (Union Station and Court Square), 4 km from the Census point, which is the middle of the city limits east of the centre.
    { id: "SPMA", name: "Springfield", county: "ma-hampden", lat: 42.11, lon: -72.59, type: "metro", size: 3, pop: 466, main: true, level: "valley" },
    // Northampton (29,573): the seat of Hampshire County, on the Connecticut at the Calvin Coolidge Bridge, I-91 and the Vermonter (Smith College, the arts town). Amherst (39,263, UMass Amherst and Amherst College) is a little bigger but is a town of the county 8 mi east and a town here: Northampton is the brief's choice (the seat, the river crossing and Amtrak). Typed farm (the valley farms, the Connecticut's meadows). Region 162k, size 2. The point is downtown (Main Street), 3 km from the Census point, which is the middle of the city limits.
    { id: "NHMA", name: "Northampton", county: "ma-hampshire", lat: 42.33, lon: -72.64, type: "farm", size: 2, pop: 162, main: true, level: "valley" },
    // Greenfield (17,763): the biggest place of Franklin County and the seat, at the Mohawk Trail (MA-2) and I-91, where the Deerfield and the Connecticut meet. The point is downtown (Court Square, Main Street), 3 km south of the Census point, which is the middle of the city limits. Region 71k, size 1 (the rural convention, like Bristol RI 51k and Windham CT 117k).
    { id: "GFMA", name: "Greenfield", county: "ma-franklin", lat: 42.59, lon: -72.6, type: "farm", size: 1, pop: 71, main: true, level: "valley" },
    // Level: the Berkshires
    // Pittsfield (43,938): the biggest city of the Berkshires and the seat, on the Housatonic, US-7 / US-20 and the Boston & Albany line, the way to Albany and Hudson over the Taconics. Region 129k, size 2.
    { id: "PTFD", name: "Pittsfield", county: "ma-berkshire", lat: 42.45, lon: -73.26, type: "mountain", size: 2, pop: 129, main: true, level: "berkshires" },
  ],
  // Towns that appear over time: the next-biggest real places of each region, spread out, plus well-known scenic
  // places (scenic: true, see NOTES.md).
  towns: [
    // Suffolk County
    // Revere (62,208): Revere Beach (1896, the first public beach in the country) on the Blue Line and MA-1A; the point is the beach station, 3 km from the Census point. Not scenic: the beach is a local resort, not a place tourists travel to like the others
    { id: "RVRE", name: "Revere", county: "ma-suffolk", lat: 42.41, lon: -70.99, type: "coast", size: 1 },
    // Middlesex County
    // Framingham (72,377): the hub of the MetroWest suburbs on the Worcester Line, the Mass Pike and MA-9; the point is the station downtown, 3 km from the Census point
    { id: "FRHM", name: "Framingham", county: "ma-middlesex", lat: 42.28, lon: -71.42, type: "metro", size: 2 },
    // Lexington (a town of about 34,000, a CDP with no population in the files): the Battle Green (April 19, 1775) and Minute Man National Historical Park
    { id: "LXMA", name: "Lexington", county: "ma-middlesex", lat: 42.45, lon: -71.23, scenic: true, type: "metro", size: 1 },
    // Concord (a town of about 18,000, not in the files): the North Bridge (Minute Man National Historical Park), Walden Pond (Thoreau) and Louisa May Alcott's Orchard House
    { id: "CNCD", name: "Concord", county: "ma-middlesex", lat: 42.46, lon: -71.35, scenic: true, type: "farm", size: 1 },
    // Essex County
    // Lawrence (89,149): the planned mill city on the Merrimack (the Great Stone Dam), on I-495 and the Haverhill Line, the second city of the county
    { id: "LWMA", name: "Lawrence", county: "ma-essex", lat: 42.7, lon: -71.16, type: "metro", size: 2 },
    // Haverhill (67,774): the Merrimack city on the north bank on the Haverhill Line, I-495 and MA-97, with Whittier's birthplace; the way to Plaistow and Hampstead, New Hampshire
    { id: "HVHL", name: "Haverhill", county: "ma-essex", lat: 42.78, lon: -71.09, type: "farm", size: 1 },
    // Salem (44,483): the witch trials of 1692 and the Salem Maritime National Historic Site (the first in the National Park Service), on the Newburyport / Rockport Line; the point is downtown (the Essex Street mall and the station), 2.2 km from the Census point
    { id: "SLMA", name: "Salem", county: "ma-essex", lat: 42.52, lon: -70.9, scenic: true, type: "coast", size: 1 },
    // Gloucester (29,731): America's oldest seaport (1623) on Cape Ann, the Fishermen's Memorial and Rocky Neck; Rockport's Bearskin Neck (3.5 mi north-east) is part of the same scenic Cape Ann. The point is the Gloucester station and the harbour, 2.7 km from the Census point
    { id: "GLMA", name: "Gloucester", county: "ma-essex", lat: 42.62, lon: -70.66, scenic: true, type: "coast", size: 1 },
    // Newburyport (18,291): the Merrimack's mouth, the Plum Island and the Parker River National Wildlife Refuge, on the Newburyport Line, US-1 and I-95: the way into New Hampshire
    { id: "NWBP", name: "Newburyport", county: "ma-essex", lat: 42.81, lon: -70.88, type: "coast", size: 1 },
    // Norfolk County
    // Dedham (about 25,000, a CDP with no population in the files): the seat of Norfolk County and one of the oldest towns (1636), on the Franklin Line and US-1, 9 mi from Boston
    { id: "DDHM", name: "Dedham", county: "ma-norfolk", lat: 42.25, lon: -71.18, type: "metro", size: 1 },
    // Weymouth (57,442, the Town): the South Shore town on the Weymouth Fore River and MA-3, the biggest after Quincy; the point is the Census point
    { id: "WYMT", name: "Weymouth", county: "ma-norfolk", lat: 42.21, lon: -70.94, type: "coast", size: 1 },
    // Franklin (33,272, the Town): the Franklin Line's terminus in the south-west of the county on I-495, the way to Providence and Woonsocket
    { id: "FKMA", name: "Franklin", county: "ma-norfolk", lat: 42.08, lon: -71.41, type: "farm", size: 1 },
    // Plymouth County
    // Plymouth (about 61,000, a CDP with no population in the files): Plymouth Rock, the Mayflower II and Plimoth Patuxet, "America's Hometown" (1620)
    { id: "PLMA", name: "Plymouth", county: "ma-plymouth", lat: 41.96, lon: -70.66, scenic: true, type: "coast", size: 1 },
    // Bridgewater (28,624, the Town): Bridgewater State University and the railway and highway junction of the Taunton River headwaters, on MA-24 and MA-104
    { id: "BRWR", name: "Bridgewater", county: "ma-plymouth", lat: 41.97, lon: -70.98, type: "farm", size: 1 },
    // Bristol County
    // Fall River (93,984): "the Spindle City" on Mount Hope Bay at the Rhode Island line (I-195, the Braga Bridge), Battleship Cove (USS Massachusetts and the largest collection of preserved warships in the world) and the way to Tiverton and Newport. The point is Battleship Cove, 6 km from the Census point
    { id: "FLRV", name: "Fall River", county: "ma-bristol", lat: 41.7, lon: -71.16, scenic: true, type: "coast", size: 2 },
    // Taunton (59,392): "the Silver City" and the seat of Bristol County on the Taunton River and MA-24 / MA-140
    { id: "TNTN", name: "Taunton", county: "ma-bristol", lat: 41.9, lon: -71.1, type: "farm", size: 1 },
    // Attleboro (46,454): the Northeast Corridor and I-95 city on the Rhode Island line, 6 mi from Pawtucket
    { id: "ATLB", name: "Attleboro", county: "ma-bristol", lat: 41.93, lon: -71.29, type: "metro", size: 1 },
    // Hampden County
    // Holyoke (38,251): the planned paper city at the Holyoke Dam on the Connecticut (the Volleyball Hall of Fame, the Mount Tom range), on I-91 and the Knowledge Corridor; the point is downtown (City Hall and the canals), 2 km from the Census point
    { id: "HLYK", name: "Holyoke", county: "ma-hampden", lat: 42.2, lon: -72.62, type: "metro", size: 1 },
    // Westfield (40,821): the "Whip City" on the Westfield River, the western gate of the valley on the Mass Pike and MA-10 / US-202; the point is the centre (Westfield Green), 1.5 km from the Census point
    { id: "WSFD", name: "Westfield", county: "ma-hampden", lat: 42.13, lon: -72.75, type: "farm", size: 1 },
    // Hampshire County
    // Amherst (39,263, the Town): UMass Amherst (the state's flagship, about 30,000 students), Amherst College and the Emily Dickinson Museum, 8 mi east of Northampton on MA-9
    { id: "AMMA", name: "Amherst", county: "ma-hampshire", lat: 42.37, lon: -72.52, type: "farm", size: 1 },
    // Franklin County
    // Shelburne Falls: the Bridge of Flowers (1929, a trolley bridge turned garden) and the Glacial Potholes on the Deerfield River, on the Mohawk Trail (MA-2)
    { id: "SLBF", name: "Shelburne Falls", county: "ma-franklin", lat: 42.61, lon: -72.75, scenic: true, type: "mountain", size: 1 },
    // Berkshire County
    // North Adams (12,956): the "Steeple City" at the western end of the Mohawk Trail and the Hoosac Tunnel, with MASS MoCA (the biggest contemporary art museum in the country) and Mount Greylock (the highest peak of the state, 3,489 ft, 5 mi south) next door
    { id: "NADM", name: "North Adams", county: "ma-berkshire", lat: 42.7, lon: -73.11, scenic: true, type: "mountain", size: 1 },
    // Lenox (about 5,000): Tanglewood, the summer home of the Boston Symphony Orchestra (since 1937), and the Berkshire cottages
    { id: "LNOX", name: "Lenox", county: "ma-berkshire", lat: 42.36, lon: -73.29, scenic: true, type: "mountain", size: 1 },
    // Great Barrington (about 7,000): the south Berkshires' centre on the Housatonic and US-7, the way to Connecticut's Litchfield Hills
    { id: "GTBR", name: "Great Barrington", county: "ma-berkshire", lat: 42.19, lon: -73.36, type: "mountain", size: 1 },
    // Worcester County
    // Fitchburg (41,947): the mill city of the north on the Fitchburg Line (the longest MBTA line) and MA-2
    { id: "FTCH", name: "Fitchburg", county: "ma-worcester", lat: 42.6, lon: -71.82, type: "metro", size: 1 },
    // Sturbridge (about 9,900, a CDP): Old Sturbridge Village (1946, the largest living-history museum in the Northeast) at the I-84 / I-90 junction on the Connecticut line; the point is between the village and the museum
    { id: "STBR", name: "Sturbridge", county: "ma-worcester", lat: 42.11, lon: -72.08, scenic: true, type: "farm", size: 1 },
    // Cape Cod and the Islands
    // Provincetown: the tip of Cape Cod (the Pilgrim Monument, the Mayflower's first landing, 1620) with the Cape Cod National Seashore's Race Point and Herring Cove beaches
    { id: "PVTN", name: "Provincetown", county: "ma-barnstable-dukes-nantucket", lat: 42.05, lon: -70.19, scenic: true, type: "coast", size: 1 },
    // Woods Hole (a village of Falmouth, a CDP with no population in the files): the Woods Hole Oceanographic Institution and the Marine Biological Laboratory, and the Steamship Authority terminal for Martha's Vineyard, at the south-west corner of the Cape
    { id: "WDHL", name: "Woods Hole", county: "ma-barnstable-dukes-nantucket", lat: 41.53, lon: -70.67, type: "coast", size: 1 },
    // Oak Bluffs (Martha's Vineyard, about 5,300): the Steamship Authority and Hy-Line ferry harbour, the Gingerbread Cottages of the Camp Meeting Association and the Flying Horses Carousel (1876, the oldest operating platform carousel)
    { id: "OKBL", name: "Oak Bluffs", county: "ma-barnstable-dukes-nantucket", lat: 41.45, lon: -70.56, scenic: true, type: "coast", size: 1 },
    // Nantucket (about 14,000, the island and the town): the cobblestone whaling town and the ferry harbour 30 mi off Hyannis
    { id: "NTKT", name: "Nantucket", county: "ma-barnstable-dukes-nantucket", lat: 41.28, lon: -70.1, scenic: true, type: "coast", size: 1 },
  ],
  // City map, keyed by its main station (South Station). Sources in NOTES.md.
  metros: {
    BOS: {
      name: "Boston",
      size: 5,
      stops: [
        { id: "SOS", name: "South Station", lat: 42.352, lon: -71.055, hub: true },
        { id: "NOS", name: "North Station", lat: 42.366, lon: -71.062 },
        { id: "BAB", name: "Back Bay", lat: 42.347, lon: -71.075 },
        { id: "FEN", name: "Fenway", lat: 42.346, lon: -71.097 },
        { id: "HVD", name: "Harvard Square", lat: 42.373, lon: -71.119 },
        { id: "KEN", name: "Kendall/MIT", lat: 42.362, lon: -71.086 },
        { id: "LOG", name: "Logan Airport", lat: 42.366, lon: -71.015 },
        { id: "SBO", name: "South Boston", lat: 42.342, lon: -71.039 },
        { id: "JPL", name: "Jamaica Plain", lat: 42.31, lon: -71.114 },
        { id: "QUI", name: "Quincy Center", lat: 42.251, lon: -71.005 },
        { id: "SAL", name: "Salem", lat: 42.521, lon: -70.898 },
        { id: "WAL", name: "Waltham", lat: 42.376, lon: -71.236 },
      ],
    },
  },
  // Real passes and tunnels: [name, latitude, longitude]. See NOTES.md for sources. The Taconic and Berkshire hills
  // are hills on the map; the only mountains are Greylock and the Hoosac Range at North Adams, so these two are all.
  passes: [
    ["Mohawk Trail (MA-2 over the Hoosac Range, Whitcomb Summit, Florida to North Adams)", 42.68, -72.98],
    ["Hoosac Tunnel (the 4.75-mile railway tunnel under the Hoosac Range, Florida to North Adams)", 42.66, -73.03],
  ],
  // Real bridges and ferries: [name, latitude, longitude]. See NOTES.md for sources. The rivers on the map are the
  // Connecticut, the Merrimack and the Housatonic; the Cape Cod Canal is not on the map (the Cape is land there), so
  // its two bridges only mark the real crossings. The ferries are the island links over the `bays` below.
  bridges: [
    // The Connecticut River, from the south up
    ["Memorial Bridge (MA-147, Springfield to West Springfield) and the Amtrak and CSX rail bridge", 42.11, -72.6],
    ["Willimansett Bridge (MA-116, Chicopee to Holyoke)", 42.19, -72.61],
    ["Calvin Coolidge Memorial Bridge (MA-9, Northampton to Hadley)", 42.33, -72.61],
    ["Sunderland Bridge (MA-116, Sunderland to Whately)", 42.48, -72.58],
    ["Gill-Montague Bridge (Turners Falls to Gill)", 42.6, -72.56],
    // The Merrimack River, from Lowell down to the sea
    ["Merrimack River bridges at Lowell (I-495 and the Lowell Connector)", 42.66, -71.29],
    ["Duck Bridge and the Casey Bridge (Lawrence)", 42.71, -71.16],
    ["Comeau and Basiliere bridges and the Haverhill rail bridge (Haverhill to Bradford)", 42.77, -71.1],
    ["Whittier Bridge (I-95) and the Newburyport bridges (US-1 and the Chain Bridge)", 42.84, -70.88],
    // The Housatonic
    ["Housatonic River bridges at Pittsfield (US-20 and the Boston & Albany line)", 42.45, -73.26],
    ["Housatonic River bridges at Great Barrington (US-7 and MA-23)", 42.19, -73.36],
    // The Cape Cod Canal (not drawn on the map)
    ["Bourne Bridge (US-6 and MA-28, the Cape Cod Canal)", 41.74, -70.62],
    ["Sagamore Bridge (US-6 and MA-3, the Cape Cod Canal)", 41.78, -70.54],
    // The island ferries (Nantucket and Vineyard Sounds)
    ["Steamship Authority ferry (Woods Hole terminal, to Vineyard Haven and Oak Bluffs)", 41.52, -70.67],
    ["Steamship Authority ferry (Oak Bluffs terminal)", 41.46, -70.56],
    ["Steamship Authority and Hy-Line ferries (Hyannis terminals, to Nantucket and Oak Bluffs)", 41.65, -70.28],
    ["Steamship Authority and Hy-Line ferries (Nantucket, Steamboat Wharf)", 41.29, -70.1],
  ],
  // Bays: only the water that should need a bridge or a ferry. The two sounds and Buzzards Bay are closed off at the
  // Cape Cod Canal and Woods Hole, so the Cape is reached by land over the canal and the islands only by ferry. Cape
  // Cod Bay and Boston Harbor are not bays here (NOTES.md). Only the water counts (land inside an outline is ignored).
  bays: [
    {
      // The open water between the Cape's south shore, Martha's Vineyard and Nantucket (Hyannis to Nantucket is 26 mi)
      name: "Nantucket and Vineyard Sounds",
      ring: [-70.7, 41.58, -70.5, 41.7, -70, 41.7, -69.88, 41.55, -69.88, 41.18, -70.45, 41.18, -70.7, 41.36],
    },
    {
      // Buzzards Bay: from the head at Wareham and the canal's mouth down to the Elizabeth Islands
      name: "Buzzards Bay",
      ring: [-70.98, 41.74, -70.62, 41.74, -70.62, 41.54, -70.74, 41.44, -70.98, 41.44],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The pine barrens of the south-east: Myles Standish State Forest (Plymouth County) and the pitch pine and scrub oak
    // of Cape Cod and the Islands
    forest: ["ma-plymouth", "ma-barnstable-dukes-nantucket"],
    // The hills and forests of the west and centre: the Berkshires and the Taconics, the Hoosac Range and the Pioneer
    // Valley hill towns (Franklin and Hampshire, with the Quabbin), and the central uplands of Worcester County
    // (Wachusett Mountain, the Leominster and Douglas state forests)
    wooded: ["ma-berkshire", "ma-franklin", "ma-hampshire", "ma-worcester"],
    // Not listed (farmland): Boston and its suburbs (Suffolk, Middlesex, Norfolk, Essex), Bristol County and the
    // Connecticut valley floor of Hampden County. No dry.
  },
  levels: [
    {
      name: "Boston & the Inner Suburbs",
      areas: ["boston"],
      goals: [
        { kind: "totalPassengers", target: 100 },
        // Boston to Lowell, as the Lowell Line and I-93 / I-495 run
        { kind: "connect", a: "BOS", b: "LWL" },
        { kind: "counties", target: 4 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "The South Shore, the South Coast & the Cape",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 240 },
        // Brockton to Hyannis, as MA-24, MA-3 and US-6 run over the Cape Cod Canal (the Sagamore and Bourne bridges)
        { kind: "connect", a: "BKTN", b: "HYN" },
        { kind: "counties", target: 7 },
      ],
    },
    {
      name: "Worcester & the Pioneer Valley",
      areas: ["valley"],
      goals: [
        { kind: "totalPassengers", target: 400 },
        // Worcester to Springfield, as the Worcester Line and I-90 (the Mass Pike) run
        { kind: "connect", a: "WORC", b: "SPMA" },
        { kind: "counties", target: 11 },
      ],
    },
    {
      name: "The Berkshires",
      areas: ["berkshires"],
      goals: [
        { kind: "totalPassengers", target: 560 },
        // Springfield to Pittsfield, as the Mass Pike and the Boston & Albany line cross the Berkshire hills
        { kind: "connect", a: "SPMA", b: "PTFD" },
        { kind: "counties", target: 12 },
      ],
    },
  ],
});
