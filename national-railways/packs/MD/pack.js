// National Railways pack: Maryland (with the District of Columbia).
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/MD/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/MD/raw.
// Maryland's 24 counties and the District of Columbia are 20 regions (merges in tools/build-map.js, STATES.MD).
NR.addPack({
  code: "MD",
  name: "Maryland",
  // A game that starts here begins owning Montgomery (the biggest region), the District of Columbia and Frederick;
  // Washington and Frederick both touch Montgomery. Washington and Rockville are metro and Frederick is farm, so
  // the first track (Rockville to Frederick, I-270, 25 mi) has riders.
  start: ["md-montgomery", "md-district-of-columbia", "md-frederick"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code
  // shown on passengers (ids that other packs use are written with an M). pop = region population in
  // thousands (2020 census). size = how busy (1 to 5). level = which level unlocks it in Levels mode.
  // Points are the Census points, except where a comment says it was moved to a downtown. Every Census place
  // is in packs/MD/raw/places.json.
  stations: [
    // Level: Washington and its suburbs: the District, I-270 and the Capital Beltway, Frederick and Charles County
    // Washington (689,548): Union Station at the foot of Capitol Hill, the Amtrak and MARC hub (the Census point is 1 mi west). The core of a metro of 6.3 million (like Atlanta or Miami), size 5. Scenic: the National Mall, the monuments and the Smithsonian museums. Reagan National is on Arlington's station and Dulles on Fairfax's (Virginia pack), so no airport here.
    { id: "WDC", name: "Washington", county: "md-district-of-columbia", lat: 38.9, lon: -77.01, scenic: true, type: "metro", size: 5, pop: 690, main: true, level: "capital" },
    // Rockville (67,104): the Montgomery seat on I-270, the Metro Red Line and the CSX/MARC Brunswick line (Gaithersburg, 69,640, is a town 5 mi north; Silver Spring and Bethesda are census-designated places beside Washington). Region 1,062k is the biggest in the state, size 4 like Fairfax.
    { id: "ROCK", name: "Rockville", county: "md-montgomery", lat: 39.08, lon: -77.16, type: "metro", size: 4, pop: 1062, main: true, level: "capital" },
    // Bowie (58,340): the biggest city of Prince George's, on US-50/301 and the MARC Penn Line's Bowie State stop, 14 mi from both Washington and Annapolis (Upper Marlboro, 717, is the seat; College Park and Laurel are towns beside Washington). Region 967k, size 4: bigger than Baltimore County and Baltimore city, and a Washington inner suburb like Arlington (size 3) is not.
    { id: "BOWM", name: "Bowie", county: "md-prince-george-s", lat: 38.95, lon: -76.74, type: "metro", size: 4, pop: 967, main: true, level: "capital" },
    // Frederick (78,190): downtown at the Market Street and the MARC/CSX Brunswick line (the Census point is 1.4 mi north-west), on I-70/270 and US-15/40. Typed farm (Frederick's farm country and historic centre) so the start's first track (Rockville to Frederick) has riders. Region 272k, size 2.
    { id: "FRDM", name: "Frederick", county: "md-frederick", lat: 39.41, lon: -77.41, type: "farm", size: 2, pop: 272, main: true, level: "capital" },
    // Waldorf has no incorporated town (its place is census-designated, no population in places.json; La Plata, 10,167, the Charles seat, is the biggest incorporated town and a town here): Waldorf, the real centre of Charles County (81,000 in 2020, general knowledge) on US-301 and MD-5. Charles 167k, size 2, a Washington exurb.
    { id: "WLDF", name: "Waldorf", county: "md-charles", lat: 38.61, lon: -76.92, type: "metro", size: 2, pop: 167, main: true, level: "capital" },
    // Level: Baltimore, the Upper Bay and the I-95 corridor
    // Baltimore (585,690): Penn Station and Mount Vernon (the Census point is 1 mi south-east, near the Inner Harbor). Metro of 2.8 million (like Denver and St. Louis), size 4. A real major port (the Seagirt and Dundalk marine terminals), the only port of the state.
    { id: "BALM", name: "Baltimore", county: "md-baltimore-city", lat: 39.31, lon: -76.62, port: "Port of Baltimore", type: "metro", size: 4, pop: 586, main: true, level: "baltimore" },
    // Baltimore County has no incorporated town (its places are census-designated, no population): Towson, the county seat on I-695 and MD-45 (Dundalk and Catonsville are towns; Pikesville, Owings Mills and Essex are census-designated places). Region 855k, size 3.
    { id: "TOWS", name: "Towson", county: "md-baltimore-county", lat: 39.39, lon: -76.62, type: "metro", size: 3, pop: 855, main: true, level: "baltimore" },
    // Annapolis (40,804): the state capital on the Severn River and the Bay, at the State House and City Dock (the Census point is 1.2 mi south-west). Scenic: the Naval Academy and the colonial harbor. Baltimore/Washington Thurgood Marshall International (BWI) is in Linthicum in this county, so it is on this station (Baltimore city has no airport). Region 588k, size 3.
    { id: "ANAP", name: "Annapolis", county: "md-anne-arundel", lat: 38.98, lon: -76.49, airport: "Baltimore/Washington International Thurgood Marshall Airport", scenic: true, type: "coast", size: 3, pop: 588, main: true, level: "baltimore" },
    // Howard has no incorporated town (its places are census-designated, no population): Columbia, the planned city of the county on US-29 and MD-100 (Ellicott City, the seat, is a town). Region 332k, size 3.
    { id: "CLMD", name: "Columbia", county: "md-howard", lat: 39.2, lon: -76.86, type: "metro", size: 3, pop: 332, main: true, level: "baltimore" },
    // Aberdeen (16,279): the biggest incorporated place of Harford, on I-95, US-40 and the Amtrak and MARC lines, next to Aberdeen Proving Ground (Havre de Grace, 14,805, is a town 5 mi east at the Susquehanna; Bel Air, 10,660, the seat, is a town). Region 261k, size 2.
    { id: "ABDM", name: "Aberdeen", county: "md-harford", lat: 39.52, lon: -76.17, type: "metro", size: 2, pop: 261, main: true, level: "baltimore" },
    // Elkton (15,822): the Cecil seat on US-40, MD-213 and the Amtrak line near Delaware (North East and Perryville are the next towns). Region 104k.
    { id: "ELKM", name: "Elkton", county: "md-cecil", lat: 39.61, lon: -75.82, type: "farm", size: 1, pop: 104, main: true, level: "baltimore" },
    // Level: Western Maryland: I-70 and I-68 from Westminster to Hagerstown and Cumberland
    // Westminster (20,134): the Carroll seat on MD-140 and the old Western Maryland Railway (Mount Airy, 9,660, on I-70, is a town). Region 173k, size 2.
    { id: "WMIN", name: "Westminster", county: "md-carroll", lat: 39.58, lon: -77.01, type: "farm", size: 2, pop: 173, main: true, level: "west" },
    // Hagerstown (43,552): the Washington County seat at the Public Square, where I-70 and I-81 cross (Williamsport and Hancock are towns). Region 155k, size 2.
    { id: "HAGE", name: "Hagerstown", county: "md-washington", lat: 39.64, lon: -77.72, type: "farm", size: 2, pop: 155, main: true, level: "west" },
    // Cumberland (19,082): downtown at the Western Maryland Scenic Railroad station and the Narrows of Wills Creek, on I-68 and US-40 (Frostburg, 7,028, and Oakland, the Garrett seat, are towns). Region 97k with Garrett.
    { id: "CUMM", name: "Cumberland", county: "md-allegany-garrett", lat: 39.65, lon: -78.76, type: "mountain", size: 1, pop: 97, main: true, level: "west" },
    // Level: Southern Maryland and the Eastern Shore
    // Prince Frederick has no incorporated town (Chesapeake Beach, 6,351, the biggest, is a seaside town at the north end of the county and is a town here): Prince Frederick, the Calvert seat on MD-2/4 (a census-designated place, no population). Region 93k.
    { id: "PFRD", name: "Prince Frederick", county: "md-calvert", lat: 38.54, lon: -76.59, type: "coast", size: 1, pop: 93, main: true, level: "shore" },
    // St. Mary's has one incorporated town, Leonardtown (4,563, the seat, a town here): Lexington Park, the real centre of the county (11,600 in 2020, general knowledge; a census-designated place with no population in places.json), beside Patuxent River Naval Air Station on MD-235. Region 114k.
    { id: "LXPK", name: "Lexington Park", county: "md-st-mary-s", lat: 38.25, lon: -76.44, type: "coast", size: 1, pop: 114, main: true, level: "shore" },
    // Chestertown (5,534): the Kent seat on the Chester River, a colonial port and Washington College (Centreville, 4,723, the Queen Anne's seat, is a town; Stevensville on Kent Island, a census-designated place with no population, is a town at the Bay Bridge). Region 69k.
    { id: "CHMD", name: "Chestertown", county: "md-kent-queen-anne-s", lat: 39.22, lon: -76.07, type: "farm", size: 1, pop: 69, main: true, level: "shore" },
    // Easton (17,104): the Talbot seat on US-50/301 and the Tred Avon, the Mid-Shore's biggest town (Cambridge, 13,095, is a town; St. Michaels is scenic). Region 103k.
    { id: "ESTN", name: "Easton", county: "md-caroline-dorchester-talbot", lat: 38.78, lon: -76.07, type: "farm", size: 1, pop: 103, main: true, level: "shore" },
    // Salisbury (33,041): downtown on the Wicomico River and US-13/50, the Eastern Shore's biggest city, with Salisbury University. Region 128k with Somerset, size 2.
    { id: "SALI", name: "Salisbury", county: "md-somerset-wicomico", lat: 38.37, lon: -75.59, type: "farm", size: 2, pop: 128, main: true, level: "shore" },
    // Ocean City (6,850): the biggest town of Worcester, at the Inlet and the Boardwalk, the Atlantic resort of Maryland (the Census point is 4 mi north, in the middle of the long city). Scenic: the beach and Boardwalk. Region 52k, size 1: its year-round people are few, its visitors are millions.
    { id: "OCMD", name: "Ocean City", county: "md-worcester", lat: 38.33, lon: -75.09, scenic: true, type: "coast", size: 1, pop: 52, main: true, level: "shore" },
  ],
  // Towns that appear over time: the next-biggest real places of each region (Census-designated places where the
  // region has few towns), spread out, plus well-known scenic places (scenic: true, see NOTES.md).
  towns: [
    // Montgomery
    { id: "GAIT", name: "Gaithersburg", county: "md-montgomery", lat: 39.15, lon: -77.2, type: "metro", size: 2 },
    { id: "SSMD", name: "Silver Spring", county: "md-montgomery", lat: 39, lon: -77.02, type: "metro", size: 2 },
    // Great Falls of the Potomac and the C&O Canal (Great Falls Tavern visitor centre, National Park Service)
    { id: "GFAL", name: "Great Falls", county: "md-montgomery", lat: 39, lon: -77.24, scenic: true, type: "mountain", size: 1 },
    // Prince George's
    { id: "CPMD", name: "College Park", county: "md-prince-george-s", lat: 39, lon: -76.94, type: "metro", size: 2 },
    // Baltimore city: Fort McHenry National Monument (the 1814 defence that inspired the Star-Spangled Banner)
    { id: "FMCH", name: "Fort McHenry", county: "md-baltimore-city", lat: 39.26, lon: -76.58, scenic: true, type: "coast", size: 1 },
    // Baltimore County
    { id: "DUND", name: "Dundalk", county: "md-baltimore-county", lat: 39.27, lon: -76.5, type: "metro", size: 2 },
    { id: "CATM", name: "Catonsville", county: "md-baltimore-county", lat: 39.27, lon: -76.74, type: "metro", size: 1 },
    // Anne Arundel
    { id: "GLBN", name: "Glen Burnie", county: "md-anne-arundel", lat: 39.16, lon: -76.61, type: "metro", size: 2 },
    // Howard: the old mill town and county seat
    { id: "ECMD", name: "Ellicott City", county: "md-howard", lat: 39.28, lon: -76.83, type: "metro", size: 1 },
    // Harford
    { id: "BELM", name: "Bel Air", county: "md-harford", lat: 39.53, lon: -76.35, type: "farm", size: 1 },
    { id: "HDGM", name: "Havre de Grace", county: "md-harford", lat: 39.55, lon: -76.09, type: "coast", size: 1 },
    // Cecil
    { id: "NEMD", name: "North East", county: "md-cecil", lat: 39.6, lon: -75.94, type: "farm", size: 1 },
    // Carroll
    { id: "MTAI", name: "Mount Airy", county: "md-carroll", lat: 39.37, lon: -77.15, type: "farm", size: 1 },
    // Frederick
    { id: "THUR", name: "Thurmont", county: "md-frederick", lat: 39.62, lon: -77.41, type: "mountain", size: 1 },
    { id: "BRUM", name: "Brunswick", county: "md-frederick", lat: 39.32, lon: -77.63, type: "farm", size: 1 },
    // Washington County
    { id: "WPRT", name: "Williamsport", county: "md-washington", lat: 39.6, lon: -77.82, type: "farm", size: 1 },
    { id: "HANC", name: "Hancock", county: "md-washington", lat: 39.7, lon: -78.18, type: "mountain", size: 1 },
    // Antietam National Battlefield (the bloodiest day of the Civil War, 1862, National Park Service), beside Sharpsburg
    { id: "ANTM", name: "Antietam", county: "md-washington", lat: 39.47, lon: -77.74, scenic: true, type: "farm", size: 1 },
    // Western Maryland
    { id: "FROS", name: "Frostburg", county: "md-allegany-garrett", lat: 39.65, lon: -78.93, type: "mountain", size: 1 },
    { id: "OAKM", name: "Oakland", county: "md-allegany-garrett", lat: 39.41, lon: -79.4, type: "mountain", size: 1 },
    // Deep Creek Lake (Maryland's biggest lake, a state park and ski resort) at McHenry
    { id: "DCLK", name: "Deep Creek Lake", county: "md-allegany-garrett", lat: 39.56, lon: -79.35, scenic: true, type: "mountain", size: 1 },
    // Swallow Falls State Park (Muddy Creek Falls, the tallest waterfall in the state)
    { id: "SWFL", name: "Swallow Falls", county: "md-allegany-garrett", lat: 39.5, lon: -79.42, scenic: true, type: "mountain", size: 1 },
    // Calvert
    { id: "CHBC", name: "Chesapeake Beach", county: "md-calvert", lat: 38.69, lon: -76.55, type: "coast", size: 1 },
    // Calvert Cliffs State Park (the Miocene fossil cliffs on the Bay)
    { id: "CLCL", name: "Calvert Cliffs", county: "md-calvert", lat: 38.4, lon: -76.44, scenic: true, type: "coast", size: 1 },
    // Charles
    { id: "LPLM", name: "La Plata", county: "md-charles", lat: 38.54, lon: -76.97, type: "farm", size: 1 },
    // St. Mary's: the seat, on the Breton Bay
    { id: "LEOM", name: "Leonardtown", county: "md-st-mary-s", lat: 38.3, lon: -76.64, type: "coast", size: 1 },
    // Upper Shore
    { id: "CENM", name: "Centreville", county: "md-kent-queen-anne-s", lat: 39.04, lon: -76.06, type: "farm", size: 1 },
    // Kent Island at the east end of the Bay Bridge
    { id: "STEV", name: "Stevensville", county: "md-kent-queen-anne-s", lat: 38.97, lon: -76.32, type: "coast", size: 1 },
    // Mid-Shore
    { id: "CAMM", name: "Cambridge", county: "md-caroline-dorchester-talbot", lat: 38.57, lon: -76.08, type: "coast", size: 1 },
    { id: "DENT", name: "Denton", county: "md-caroline-dorchester-talbot", lat: 38.88, lon: -75.83, type: "farm", size: 1 },
    // St. Michaels: the Chesapeake Bay Maritime Museum and the "town that fooled the British" (well-known tourist town)
    { id: "STMI", name: "St. Michaels", county: "md-caroline-dorchester-talbot", lat: 38.79, lon: -76.22, scenic: true, type: "coast", size: 1 },
    // Lower Shore
    { id: "PRAN", name: "Princess Anne", county: "md-somerset-wicomico", lat: 38.21, lon: -75.7, type: "farm", size: 1 },
    { id: "CRIS", name: "Crisfield", county: "md-somerset-wicomico", lat: 37.98, lon: -75.85, type: "coast", size: 1 },
    // Worcester
    { id: "BERM", name: "Berlin", county: "md-worcester", lat: 38.33, lon: -75.22, type: "farm", size: 1 },
    { id: "POCO", name: "Pocomoke City", county: "md-worcester", lat: 38.06, lon: -75.56, type: "farm", size: 1 },
    // Assateague Island National Seashore (the wild ponies)
    { id: "ASSA", name: "Assateague Island", county: "md-worcester", lat: 38.23, lon: -75.16, scenic: true, type: "coast", size: 1 },
  ],
  // Real passes and tunnels: [name, latitude, longitude]. See NOTES.md for sources.
  // (none: Sideling Hill's I-68 cut, at 39.72, -78.27, has no mountains within 7 miles on the map,
  // and Western Maryland's ridges are hills there, so track needs no pass or tunnel)
  passes: [],
  // Real bridges: [name, latitude, longitude]. See NOTES.md for sources.
  bridges: [
    ["Chesapeake Bay Bridge (US-50/301, Sandy Point to Kent Island)", 39, -76.38],
    ["Harry W. Nice Memorial Bridge (US-301, Potomac River, Charles County to King George)", 38.36, -76.99],
    ["Susquehanna River bridges (Havre de Grace to Perryville: I-95 Tydings, US-40 Hatem, Amtrak)", 39.55, -76.08],
    ["Conowingo Dam bridge (US-1, Susquehanna River)", 39.66, -76.17],
    ["Potomac bridges at Hancock (I-70 and US-522)", 39.7, -78.17],
    ["Potomac bridges at Williamsport (I-81 and US-11)", 39.6, -77.83],
    ["Potomac bridge at Shepherdstown (MD-34, Sharpsburg)", 39.43, -77.8],
    ["Potomac bridges at Harpers Ferry (US-340 and the B&O/CSX)", 39.32, -77.73],
    ["Potomac bridge at Brunswick (US-17 and the CSX)", 39.31, -77.63],
    ["Potomac bridge at Point of Rocks (US-15)", 39.27, -77.54],
    ["Whites Ferry (Poolesville to Leesburg)", 39.14, -77.51],
    ["American Legion Bridge (I-495, Potomac River)", 38.97, -77.19],
    ["Chain Bridge (Potomac River, Washington to Arlington)", 38.93, -77.12],
    ["Key Bridge and Arlington Memorial Bridge (Potomac River, Washington to Arlington)", 38.9, -77.07],
    ["14th Street bridges (I-395 and US-1, Potomac River)", 38.87, -77.04],
    ["Woodrow Wilson Bridge (I-95/495, Potomac River)", 38.79, -77.04],
    ["Fort McHenry Tunnel (I-95, Baltimore Harbor)", 39.26, -76.58],
    ["Harbor Tunnel (I-895, Baltimore Harbor)", 39.23, -76.55],
    ["Thomas Johnson Memorial Bridge (MD-4, Patuxent River, Solomons)", 38.32, -76.47],
    ["Choptank River Bridge (US-50, Cambridge)", 38.58, -76.06],
  ],
  // Water that blocks track except at the bridges above. The Census county shapes stop at the shore, so the open water is
  // outside the land: these polygons only mark where it is too wide to follow the shore (land inside them still counts as land).
  bays: [
    {
      name: "Chesapeake Bay", // from the Susquehanna Flats down to Virginia's lower bay (its own bay in the Virginia pack), without the Patapsco, Eastern Bay and the tidal rivers; crossed at the Bay Bridge
      ring: [-76.5, 38.17, -76.46, 38.4, -76.52, 38.55, -76.55, 38.75, -76.52, 38.88, -76.46, 38.98, -76.44, 39.1, -76.44, 39.2, -76.4, 39.25, -76.37, 39.3, -76.3, 39.35, -76.17, 39.4, -76.12, 39.46, -76.11, 39.52, -75.98, 39.52, -75.99, 39.45, -76.03, 39.4, -76.12, 39.35, -76.17, 39.3, -76.22, 39.25, -76.25, 39.2, -76.27, 39.15, -76.23, 39.1, -76.23, 39.05, -76.3, 39, -76.34, 38.95, -76.35, 38.9, -76.27, 38.85, -76.31, 38.8, -76.33, 38.75, -76.33, 38.7, -76.28, 38.65, -76.28, 38.5, -76.3, 38.45, -76.27, 38.4, -76.25, 38.35, -76.21, 38.3, -76.17, 38.25, -76.1, 38.17],
    },
    {
      name: "the lower Potomac River", // Nice Bridge to the Bay, between Charles and St. Mary's and Virginia's Northern Neck; crossed at the Harry W. Nice Bridge
      ring: [-77.03, 38.37, -76.93, 38.33, -76.8, 38.3, -76.6, 38.25, -76.5, 38.22, -76.5, 38.17, -76.6, 38.13, -76.8, 38.17, -76.95, 38.22, -77.02, 38.3],
    },
  ],
  levels: [
    {
      name: "Washington & Its Suburbs",
      areas: ["capital"],
      goals: [
        { kind: "totalPassengers", target: 80 },
        { kind: "counties", target: 5 },
        // Washington to Frederick, as the MARC Brunswick line and I-270 run
        { kind: "connect", a: "WDC", b: "FRDM" },
      ],
    },
    {
      name: "Baltimore & the Upper Bay",
      areas: ["baltimore"],
      goals: [
        { kind: "totalPassengers", target: 200 },
        // Baltimore to Aberdeen, as I-95 and the Northeast Corridor run
        { kind: "connect", a: "BALM", b: "ABDM" },
        { kind: "counties", target: 6 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Western Maryland",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 300 },
        // Hagerstown to Cumberland, as I-68 and the National Road run
        { kind: "connect", a: "HAGE", b: "CUMM" },
        { kind: "counties", target: 3 },
      ],
    },
    {
      name: "Southern Maryland & the Eastern Shore",
      areas: ["shore"],
      goals: [
        { kind: "totalPassengers", target: 400 },
        // Easton to Ocean City, as US-50 runs across the Shore
        { kind: "connect", a: "ESTN", b: "OCMD" },
        { kind: "counties", target: 6 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The high Allegheny forests, and the Pocomoke pine and cypress swamp country with Assateague's pines
    forest: ["md-allegany-garrett", "md-worcester"],
    // Southern Maryland's pine and tobacco necks, the Catoctin ridges and the Lower Shore
    wooded: ["md-charles", "md-calvert", "md-st-mary-s", "md-frederick", "md-somerset-wicomico"],
    // Not listed (farmland): Washington's suburbs, Baltimore, the Piedmont and Hagerstown valley and the Upper and Mid-Shore. No dry.
  },
});
