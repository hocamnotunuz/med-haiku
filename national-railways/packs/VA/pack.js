// National Railways pack: Virginia.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/VA/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/VA/raw.
// Virginia's 133 counties and independent cities are 69 regions (merges in tools/build-map.js, STATES.VA).
NR.addPack({
  code: "VA",
  name: "Virginia",
  // A game that starts here begins owning Fairfax (the biggest region), Arlington and Loudoun; Arlington
  // and Loudoun both touch Fairfax. Fairfax and Arlington are metro and Leesburg (Loudoun) is farm, so
  // the first track (Fairfax-Leesburg or Arlington-Leesburg) has riders.
  start: ["va-fairfax-county-fairfax-city", "va-arlington-falls-church", "va-loudoun"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the
  // short code shown on passengers (ids that other packs use are written with a V). pop = region
  // population in thousands (2020 census). size = how busy (1 to 5). level = which level unlocks it
  // in Levels mode. Points are the Census points, except where a comment says it was moved to a
  // downtown. Every Census place is in packs/VA/raw/places.json.
  stations: [
    // Level: Northern Virginia and the Rappahannock: Washington's Virginia suburbs, I-95 and I-66, the upper Shenandoah Valley
    // Fairfax (24,147): the county seat in Fairfax city on US-29/50 and I-66 (Herndon, 24,645, is the biggest incorporated place, a town 9 mi north-west, as are Reston and Tysons). Region 1,174k is the biggest in the state, size 4 like Raleigh and Charlotte. Dulles Airport straddles the Fairfax-Loudoun line and sits in the Fairfax region's west (general knowledge).
    { id: "FFX", name: "Fairfax", county: "va-fairfax-county-fairfax-city", lat: 38.85, lon: -77.3, airport: "Washington Dulles International Airport", type: "metro", size: 4, pop: 1174, main: true, level: "nova" },
    // Arlington has no incorporated town (its place is census-designated with no population): at Courthouse/Rosslyn on the Orange and Silver Metro lines, I-66 and the Potomac. Region 253k (with Falls Church city), size 3: the inner core next to Washington. Reagan National is in Arlington (general knowledge).
    { id: "ARLI", name: "Arlington", county: "va-arlington-falls-church", lat: 38.89, lon: -77.08, airport: "Ronald Reagan Washington National Airport", type: "metro", size: 3, pop: 253, main: true, level: "nova" },
    // Alexandria (159,464): Old Town on the Potomac at the Amtrak/VRE station (the Census point is 2 mi north-west, in the middle of the city limits). Size 3, the inner core next to Washington.
    { id: "ALEV", name: "Alexandria", county: "va-alexandria", lat: 38.8, lon: -77.05, type: "metro", size: 3, pop: 159, main: true, level: "nova" },
    // Prince William has no big incorporated town (Dumfries is 5,674; the county seat is Manassas city, in the next region): Dale City, the biggest community of the county, on I-95 (a census-designated place, no population in places.json; its size from general knowledge). Region 482k, size 3.
    { id: "DALE", name: "Dale City", county: "va-prince-william", lat: 38.65, lon: -77.35, type: "metro", size: 3, pop: 482, main: true, level: "nova" },
    // Manassas (42,773): the old railway junction of the Norfolk Southern and VRE lines, on I-66 and US-29 (the Census point is 0.4 mi west). Manassas Park (17k) is 2.6 mi away so it is not a town. Region 60k, size 2 (suburban).
    { id: "MNSS", name: "Manassas", county: "va-manassas-manassas-park", lat: 38.75, lon: -77.47, type: "metro", size: 2, pop: 60, main: true, level: "nova" },
    // Leesburg (48,249): the county seat on US-15 and the Route 7 bypass. Typed farm (horse, wine and hunt country, and Dulles data-centre suburbs) so the start's first track (Fairfax or Arlington to Leesburg) has riders. Loudoun 421k, size 3.
    { id: "LEEV", name: "Leesburg", county: "va-loudoun", lat: 39.11, lon: -77.56, type: "farm", size: 3, pop: 421, main: true, level: "nova" },
    // Stafford has no incorporated town (its places are census-designated, no population): Stafford Courthouse, the county seat on I-95 and US-1 and the VRE. Stafford 157k, size 2.
    { id: "STAF", name: "Stafford Courthouse", county: "va-stafford", lat: 38.41, lon: -77.42, type: "metro", size: 2, pop: 157, main: true, level: "nova" },
    // Fredericksburg (27,973): downtown on the Rappahannock River, I-95 and the Amtrak/VRE station (the Census point is 1.5 mi west). Region 168k with Spotsylvania, size 2.
    { id: "FRBG", name: "Fredericksburg", county: "va-fredericksburg-spotsylvania", lat: 38.3, lon: -77.46, type: "metro", size: 2, pop: 168, main: true, level: "nova" },
    // Warrenton (10,056): the Fauquier seat on US-29/17 in hunt country. Fauquier 73k.
    { id: "WARV", name: "Warrenton", county: "va-fauquier", lat: 38.72, lon: -77.8, type: "farm", size: 1, pop: 73, main: true, level: "nova" },
    // Culpeper (20,084): the biggest place on US-29/15 and the Norfolk Southern/Amtrak line. Region 60k.
    { id: "CLPR", name: "Culpeper", county: "va-culpeper-rappahannock", lat: 38.47, lon: -78, type: "farm", size: 1, pop: 60, main: true, level: "nova" },
    // Colonial Beach (3,906): the biggest place, on the Potomac (Montross, the Westmoreland seat, is a town; Dahlgren is the Navy base). Region 45k.
    { id: "CBCH", name: "Colonial Beach", county: "va-king-george-westmoreland", lat: 38.26, lon: -76.99, type: "coast", size: 1, pop: 45, main: true, level: "nova" },
    // Front Royal (15,012): the Warren seat at the north gate of Skyline Drive, on I-66 and I-81's Manassas Gap side (Berryville is a town). Region 56k.
    { id: "FTRY", name: "Front Royal", county: "va-clarke-warren", lat: 38.92, lon: -78.18, type: "mountain", size: 1, pop: 56, main: true, level: "nova" },
    // Winchester (28,124): the top of the Shenandoah Valley on I-81 and US-50/11 (the Census point is 0.4 mi south-east). Region 120k, size 2.
    { id: "WINV", name: "Winchester", county: "va-frederick-winchester", lat: 39.17, lon: -78.17, type: "farm", size: 2, pop: 120, main: true, level: "nova" },
    // Orange (4,869): the biggest place, the county seat on US-15/33 and the Norfolk Southern line (Gordonsville and Madison are towns). Region 71k.
    { id: "ORAN", name: "Orange", county: "va-greene-madison-orange", lat: 38.25, lon: -78.11, type: "farm", size: 1, pop: 71, main: true, level: "nova" },
    // Strasburg (7,093): the biggest place, on I-81 and US-11 at the Shenandoah's North Fork and Massanutten's north end (Woodstock, the Shenandoah seat, and Luray, the Page seat, are towns). Region 68k.
    { id: "STRB", name: "Strasburg", county: "va-page-shenandoah", lat: 39, lon: -78.35, type: "farm", size: 1, pop: 68, main: true, level: "nova" },
    // Level: Richmond and the Piedmont: the capital, the Appomattox and James, Southside, the Northern Neck and the Blue Ridge's eastern foot
    // Richmond (226,548): downtown at the Capitol, the James River falls and Main Street Station (the Census point is 2 mi south-west, the middle of the city limits). The city alone is 227k but the metro is 1.3 million (the metro is spread over Henrico and Chesterfield, which are separate regions), size 4 as the brief says (like Charlotte).
    { id: "RICV", name: "Richmond", county: "va-richmond-city", lat: 37.54, lon: -77.44, type: "metro", size: 4, pop: 227, main: true, level: "central" },
    // Henrico has no incorporated town (its places are census-designated, no population): Glen Allen, the well-known northern centre on I-95/295 and US-33 (Short Pump and Highland Springs are towns; the county's seat and Richmond International Airport, at Sandston, are inside the county). Henrico 335k, size 3.
    { id: "GLAL", name: "Glen Allen", county: "va-henrico", lat: 37.67, lon: -77.48, airport: "Richmond International Airport", type: "metro", size: 3, pop: 335, main: true, level: "central" },
    // Chesterfield has no incorporated town: Chesterfield Court House, the county seat on US-10/60 and Route 288 (Midlothian and Chester are towns). Chesterfield 364k, size 3.
    { id: "CFCH", name: "Chesterfield Court House", county: "va-chesterfield", lat: 37.38, lon: -77.51, type: "metro", size: 3, pop: 364, main: true, level: "central" },
    // Ashland (7,574): the biggest place, the 'train town' on the CSX and Amtrak line and I-95, with the Hanover seat nearby (Mechanicsville is a town). Hanover 110k, a Richmond suburb, size 2.
    { id: "ASLD", name: "Ashland", county: "va-hanover", lat: 37.76, lon: -77.47, type: "metro", size: 2, pop: 110, main: true, level: "central" },
    // Hopewell (23,031): the industrial city at the Appomattox and James confluence, on the Hopewell and CSX lines (Fort Lee is the Army base). Region 66k.
    { id: "HPWL", name: "Hopewell", county: "va-hopewell-prince-george", lat: 37.29, lon: -77.3, type: "metro", size: 1, pop: 66, main: true, level: "central" },
    // Petersburg (33,463): downtown at Old Towne on the Appomattox (the Census point is 2 mi south), on I-95/85 and the CSX and Norfolk Southern lines. Colonial Heights (18,170) is 3 mi away so it is not a town. Region 80k.
    { id: "PTBG", name: "Petersburg", county: "va-colonial-heights-dinwiddie-petersburg", lat: 37.23, lon: -77.4, type: "metro", size: 1, pop: 80, main: true, level: "central" },
    // Tappahannock (2,191): the biggest place, the Essex seat on the Rappahannock and US-17/360 (Bowling Green, 1,166, the Caroline seat on US-301, is a town). Region 48k.
    { id: "TPHK", name: "Tappahannock", county: "va-caroline-essex-king-and-queen", lat: 37.91, lon: -76.87, type: "farm", size: 1, pop: 48, main: true, level: "central" },
    // West Point (3,414): the only real town, on the York River where the Pamunkey and Mattaponi meet (a paper-mill town on VA-33 and the old York River railway; New Kent and Charles City are towns). Region 48k.
    { id: "WESV", name: "West Point", county: "va-charles-city-king-william-new-kent", lat: 37.55, lon: -76.8, type: "farm", size: 1, pop: 48, main: true, level: "central" },
    // Powhatan, Goochland and Cumberland have no incorporated town (their places are census-designated, no population): Powhatan, the central county seat on US-60 (Goochland and Cumberland are towns). Region 65k.
    { id: "PWHT", name: "Powhatan", county: "va-cumberland-goochland-powhatan", lat: 37.54, lon: -77.93, type: "farm", size: 1, pop: 65, main: true, level: "central" },
    // Louisa (1,983): the biggest place, the Louisa seat on US-33 and the CSX line (Columbia and Lake Monticello are towns). Region 65k.
    { id: "LOUV", name: "Louisa", county: "va-fluvanna-louisa", lat: 38.02, lon: -78, type: "farm", size: 1, pop: 65, main: true, level: "central" },
    // Charlottesville (46,553): downtown at the Downtown Mall and the Amtrak station (the Census point is 1 mi north-west), the University of Virginia's city; scenic for Monticello (2 mi south-east) and the University's Lawn, a World Heritage Site. Region 159k with Albemarle, size 2.
    { id: "CVLE", name: "Charlottesville", county: "va-albemarle-charlottesville", lat: 38.03, lon: -78.48, scenic: true, type: "metro", size: 2, pop: 159, main: true, level: "central" },
    // Blackstone (3,359): the biggest place, on US-460 and the Norfolk Southern line (Crewe, Victoria and Amelia Court House are towns). Region 41k.
    { id: "BKST", name: "Blackstone", county: "va-amelia-lunenburg-nottoway", lat: 37.08, lon: -78, type: "farm", size: 1, pop: 41, main: true, level: "central" },
    // Farmville (7,473): the biggest place on US-460/15, home of Longwood University and Hampden-Sydney College. Region 55k.
    { id: "FARM", name: "Farmville", county: "va-appomattox-buckingham-prince-edward", lat: 37.3, lon: -78.4, type: "farm", size: 1, pop: 55, main: true, level: "central" },
    // Amherst (2,110): the only real town, the Amherst seat on US-29 and US-60 at the foot of the Blue Ridge (Lovingston, the Nelson seat, is a town). Region 46k.
    { id: "AMHR", name: "Amherst", county: "va-amherst-nelson", lat: 37.58, lon: -79.05, type: "mountain", size: 1, pop: 46, main: true, level: "central" },
    // Lynchburg (79,007): downtown on the James River at Main Street and the Amtrak station (the Census point is 3 mi south-west). Size 2.
    { id: "LYNC", name: "Lynchburg", county: "va-lynchburg", lat: 37.41, lon: -79.14, type: "metro", size: 2, pop: 79, main: true, level: "central" },
    // Altavista (3,380): the biggest place, on US-29/460 and the Staunton River (Rustburg, the seat, is a town). Campbell 56k.
    { id: "ALTV", name: "Altavista", county: "va-campbell", lat: 37.12, lon: -79.28, type: "farm", size: 1, pop: 56, main: true, level: "central" },
    // South Boston (7,968): the biggest place, on US-58 and the Dan River (Halifax, the seat, is 3 mi away so it is not a town). Region 46k.
    { id: "SOBO", name: "South Boston", county: "va-charlotte-halifax", lat: 36.71, lon: -78.91, type: "farm", size: 1, pop: 46, main: true, level: "central" },
    // South Hill (4,689): the biggest place, on I-85 and US-58/1 at the North Carolina approaches (Lawrenceville and Chase City are towns). Region 46k.
    { id: "SHIL", name: "South Hill", county: "va-brunswick-mecklenburg", lat: 36.73, lon: -78.13, type: "farm", size: 1, pop: 46, main: true, level: "central" },
    // Emporia (5,764): the biggest place, on I-95 and the Meherrin River at the North Carolina line (Waverly is a town on US-460). Region 28k.
    { id: "EMPO", name: "Emporia", county: "va-emporia-greensville-sussex", lat: 36.7, lon: -77.54, type: "farm", size: 1, pop: 28, main: true, level: "central" },
    // Warsaw (1,633): the biggest place, the Richmond County seat on US-360 at the Downing Bridge approach (Kilmarnock, 1,444, is a town). Region 32k.
    { id: "WSAW", name: "Warsaw", county: "va-lancaster-northumberland-richmond-county", lat: 37.96, lon: -76.76, type: "coast", size: 1, pop: 32, main: true, level: "central" },
    // Level: Hampton Roads and the Tidewater: the Peninsula, the Southside, the Middle Peninsula and the Eastern Shore
    // Norfolk (238,003): downtown and Ghent, at Granby Street and the Elizabeth River, moved 1.5 mi north-east of the Waterside so that it is 4 mi from Portsmouth (the Census point is 5 mi north, the middle of the city limits). The core of Hampton Roads (1.8 million) and the Port of Virginia; the Naval Station is the world's biggest. Size 4.
    { id: "NORF", name: "Norfolk", county: "va-norfolk", lat: 36.87, lon: -76.27, port: "Port of Virginia (Norfolk International Terminals)", airport: "Norfolk International Airport", type: "metro", size: 4, pop: 238, main: true, level: "tidewater" },
    // Virginia Beach (459,476): the Oceanfront resort at the Boardwalk (the Census point is the middle of the huge city limits, 6 mi south-west). Region 459k, size 4. Scenic: the oceanfront beach and the Chesapeake Bay Bridge-Tunnel's south end.
    { id: "VAB", name: "Virginia Beach", county: "va-virginia-beach", lat: 36.85, lon: -75.98, scenic: true, type: "coast", size: 4, pop: 459, main: true, level: "tidewater" },
    // Chesapeake (249,369): Great Bridge on the Intracoastal Waterway and US-17 (the Census point is the middle of the huge city limits, 5 mi south-west, in the Great Dismal Swamp). Size 2 by the guide (249k).
    { id: "CHEV", name: "Chesapeake", county: "va-chesapeake", lat: 36.73, lon: -76.24, type: "metro", size: 2, pop: 249, main: true, level: "tidewater" },
    // Portsmouth (97,912): Midtown, 2 mi west of Olde Towne and the Elizabeth River ferry, so that it is not under 1 mi from Norfolk across the river (the Census point is 1.5 mi west). Its marine terminals are part of the Port of Virginia. Size 2.
    { id: "PTSM", name: "Portsmouth", county: "va-portsmouth", lat: 36.84, lon: -76.34, port: "Portsmouth Marine Terminal", type: "metro", size: 2, pop: 98, main: true, level: "tidewater" },
    // Suffolk (94,370): downtown on US-58/13/460 and the Nansemond River (the Census point is 4 mi south-west). The biggest city by area, farmland and Dismal Swamp. Size 2.
    { id: "SUFK", name: "Suffolk", county: "va-suffolk", lat: 36.73, lon: -76.58, type: "farm", size: 2, pop: 94, main: true, level: "tidewater" },
    // Hampton (137,157): downtown on Hampton Roads at the Hampton University side (the Census point is 3 mi north-east); Langley Air Force Base and NASA Langley. Size 2.
    { id: "HAMV", name: "Hampton", county: "va-hampton", lat: 37.03, lon: -76.34, type: "coast", size: 2, pop: 137, main: true, level: "tidewater" },
    // Newport News (186,245): downtown at the shipyard and the James River side (the Census point is the middle of the long city, 8 mi north-west); Huntington Ingalls shipbuilding and the Newport News Marine Terminal. Size 2.
    { id: "NEWV", name: "Newport News", county: "va-newport-news", lat: 36.98, lon: -76.43, port: "Newport News Marine Terminal", type: "metro", size: 2, pop: 186, main: true, level: "tidewater" },
    // Poquoson (12,456): the biggest place of the region, on the Poquoson River peninsula (Yorktown, a census-designated place and the York seat, is a town). Region 83k.
    { id: "PQSN", name: "Poquoson", county: "va-poquoson-york", lat: 37.12, lon: -76.35, type: "coast", size: 1, pop: 83, main: true, level: "tidewater" },
    // Williamsburg (15,413): Colonial Williamsburg, the restored colonial capital (scenic), on I-64 and the Amtrak Virginia line. Region 94k with James City.
    { id: "WILV", name: "Williamsburg", county: "va-james-city-williamsburg", lat: 37.27, lon: -76.71, scenic: true, type: "coast", size: 1, pop: 94, main: true, level: "tidewater" },
    // Smithfield (8,537): the Isle of Wight seat, the ham town on VA-10 and the Pagan River (Windsor and Surry are towns). Region 45k.
    { id: "SMIT", name: "Smithfield", county: "va-isle-of-wight-surry", lat: 36.98, lon: -76.63, type: "farm", size: 1, pop: 45, main: true, level: "tidewater" },
    // Franklin (8,176): the biggest place, the paper-mill city on the Blackwater River and US-58/258 (Courtland is the Southampton seat). Region 26k.
    { id: "FRAV", name: "Franklin", county: "va-franklin-city-southampton", lat: 36.68, lon: -76.94, type: "farm", size: 1, pop: 26, main: true, level: "tidewater" },
    // Gloucester has no big incorporated town (Urbanna, 491, the Middlesex town, is the biggest): Gloucester Courthouse, the county seat on US-17 (Gloucester Point and Mathews are towns). Region 58k.
    { id: "GLCT", name: "Gloucester Courthouse", county: "va-gloucester-mathews-middlesex", lat: 37.4, lon: -76.52, type: "coast", size: 1, pop: 58, main: true, level: "tidewater" },
    // Exmore (1,480): on US-13 and the Eastern Shore railway, in the middle of the Shore (Chincoteague, 3,341, the biggest place, is on an island; Onancock is the Accomack town; Cape Charles is the Bay Bridge-Tunnel's north end). Region 46k.
    { id: "EXMR", name: "Exmore", county: "va-accomack-northampton", lat: 37.53, lon: -75.83, type: "coast", size: 1, pop: 46, main: true, level: "tidewater" },
    // Level: The Shenandoah Valley, Roanoke and Southwest Virginia: I-81, the Blue Ridge and the coalfields
    // Staunton (25,753): downtown on I-81, I-64 and the Amtrak/CSX line (Waynesboro, 22,196, is a town 10 mi east). Region 125k with Augusta, size 2.
    { id: "STAU", name: "Staunton", county: "va-augusta-staunton-waynesboro", lat: 38.16, lon: -79.06, type: "farm", size: 2, pop: 125, main: true, level: "west" },
    // Harrisonburg (51,810): downtown on I-81 and US-33/11 (the Census point is 1 mi north), James Madison University. Stays alone: it is a big city.
    { id: "HARV", name: "Harrisonburg", county: "va-harrisonburg", lat: 38.45, lon: -78.87, type: "farm", size: 1, pop: 52, main: true, level: "west" },
    // Bridgewater (6,596): the biggest place of Rockingham, on VA-42 (Harrisonburg is the seat but its own region; Broadway and Elkton are towns). Rockingham 84k.
    { id: "BDGW", name: "Bridgewater", county: "va-rockingham", lat: 38.39, lon: -78.96, type: "farm", size: 1, pop: 84, main: true, level: "west" },
    // Lexington (7,321): the Rockbridge seat on I-81/64 and US-11, with VMI and Washington and Lee (Buena Vista, 6,641, is a town). Region 37k.
    { id: "LEXV", name: "Lexington", county: "va-buena-vista-lexington-rockbridge", lat: 37.78, lon: -79.44, type: "mountain", size: 1, pop: 37, main: true, level: "west" },
    // Covington (5,747): the biggest place, the paper-mill city on I-64 and the CSX line (Clifton Forge and Hot Springs are towns). Region 27k.
    { id: "COVI", name: "Covington", county: "va-alleghany-bath-covington-highland", lat: 37.78, lon: -79.99, type: "mountain", size: 1, pop: 27, main: true, level: "west" },
    // Buchanan (1,196): the biggest place, on I-81 and US-11 at the James River (Fincastle, the Botetourt seat, and New Castle, the Craig seat, are towns). Region 38k.
    { id: "BUCH", name: "Buchanan", county: "va-botetourt-craig", lat: 37.52, lon: -79.69, type: "farm", size: 1, pop: 38, main: true, level: "west" },
    // Roanoke (100,014): downtown at the Market and the Norfolk Southern station (the Census point is 1 mi west), the hub of the Blue Ridge. A metro of 315,000: size 2 by its 100k region (Asheville's Buncombe is 269k, size 3).
    { id: "ROA", name: "Roanoke", county: "va-roanoke-city", lat: 37.27, lon: -79.94, airport: "Roanoke-Blacksburg Regional Airport", type: "metro", size: 2, pop: 100, main: true, level: "west" },
    // Salem (25,347): the biggest place of the region, downtown on I-81 and US-460/11 (Vinton, 8,054, is 3 mi from Roanoke so it is not a town). Region 122k with Roanoke County.
    { id: "SALV", name: "Salem", county: "va-roanoke-county-salem", lat: 37.29, lon: -80.05, type: "metro", size: 2, pop: 122, main: true, level: "west" },
    // Bedford (6,649): the biggest place, the county seat on US-460 (Forest and the Peaks of Otter are towns). Bedford 79k.
    { id: "BEDV", name: "Bedford", county: "va-bedford", lat: 37.34, lon: -79.52, type: "farm", size: 1, pop: 79, main: true, level: "west" },
    // Rocky Mount (4,904): the Franklin seat on US-220 (the Census point is 0.4 mi). Franklin 54k.
    { id: "RMTV", name: "Rocky Mount", county: "va-franklin-county", lat: 37, lon: -79.89, type: "farm", size: 1, pop: 54, main: true, level: "west" },
    // Martinsville (13,480): downtown on US-220/58 (the Census point is 0.5 mi south-west). Region 82k.
    { id: "MARV", name: "Martinsville", county: "va-henry-martinsville-patrick", lat: 36.69, lon: -79.87, type: "farm", size: 1, pop: 82, main: true, level: "west" },
    // Danville (42,590): downtown on the Dan River, US-29/58 and the Norfolk Southern/Amtrak line (the Census point is 1 mi south-west). Region 103k, size 2.
    { id: "DNVA", name: "Danville", county: "va-danville-pittsylvania", lat: 36.59, lon: -79.4, type: "farm", size: 2, pop: 103, main: true, level: "west" },
    // Radford (16,069): the biggest place, on the New River and the Norfolk Southern line (Pulaski and Floyd are towns). Region 65k.
    { id: "RDFD", name: "Radford", county: "va-floyd-pulaski-radford", lat: 37.12, lon: -80.56, type: "mountain", size: 1, pop: 65, main: true, level: "west" },
    // Blacksburg (44,836): Virginia Tech's town in the Blue Ridge uplands (Christiansburg, 23,352, is a town on I-81). Montgomery 100k, size 2.
    { id: "BLKS", name: "Blacksburg", county: "va-montgomery", lat: 37.23, lon: -80.43, type: "mountain", size: 2, pop: 100, main: true, level: "west" },
    // Galax (6,725): the biggest place, on US-58/221 and the Blue Ridge Parkway (Hillsville and Independence are towns). Region 51k.
    { id: "GLAX", name: "Galax", county: "va-carroll-galax-grayson", lat: 36.67, lon: -80.92, type: "mountain", size: 1, pop: 51, main: true, level: "west" },
    // Richlands (5,276): the biggest place, on US-460 in the Clinch valley (Bluefield, 5,099, Tazewell, the seat, and Pearisburg are towns). Region 64k.
    { id: "RCLV", name: "Richlands", county: "va-bland-giles-tazewell", lat: 37.09, lon: -81.81, type: "mountain", size: 1, pop: 64, main: true, level: "west" },
    // Wytheville (8,269): the biggest place, at the I-77/I-81 interchange (Marion and Saltville are towns). Region 58k.
    { id: "WYTH", name: "Wytheville", county: "va-smyth-wythe", lat: 36.95, lon: -81.09, type: "farm", size: 1, pop: 58, main: true, level: "west" },
    // Lebanon (3,151): the biggest place, the Russell seat on US-19/58 in the coalfield uplands (Grundy, Clintwood and the Breaks are towns). Region 60k.
    { id: "LEBV", name: "Lebanon", county: "va-buchanan-dickenson-russell", lat: 36.9, lon: -82.08, type: "mountain", size: 1, pop: 60, main: true, level: "west" },
    // Big Stone Gap (5,252): the biggest place, on US-23/58 at Powell Valley (Norton, the independent city, and Wise are towns). Region 40k.
    { id: "BSGP", name: "Big Stone Gap", county: "va-norton-wise", lat: 36.86, lon: -82.78, type: "mountain", size: 1, pop: 40, main: true, level: "west" },
    // Gate City (2,045): the biggest place, the Scott seat on US-23/58 (Pennington Gap, the Lee town, is a town). Region 44k.
    { id: "GTCY", name: "Gate City", county: "va-lee-scott", lat: 36.65, lon: -82.58, type: "mountain", size: 1, pop: 44, main: true, level: "west" },
    // Bristol (17,219): the Virginia half of the twin city on State Street, at I-81 and the Norfolk Southern line (Tennessee's pack has Bristol TN, 3.6 mi away, as a town; Abingdon is a town). Region 71k, size 2.
    { id: "BRVA", name: "Bristol", county: "va-bristol-washington", lat: 36.61, lon: -82.18, type: "mountain", size: 2, pop: 71, main: true, level: "west" },
  ],
  // Towns that appear over time: the next-biggest real places of each region (Census-designated places where
  // the region has few towns), spread out, plus well-known scenic places (scenic: true, see NOTES.md).
  towns: [
    { id: "REST", name: "Reston", county: "va-fairfax-county-fairfax-city", lat: 38.95, lon: -77.35, type: "metro", size: 2 },
    { id: "TYSN", name: "Tysons", county: "va-fairfax-county-fairfax-city", lat: 38.92, lon: -77.23, type: "metro", size: 2 },
    { id: "SPRV", name: "Springfield", county: "va-fairfax-county-fairfax-city", lat: 38.78, lon: -77.18, type: "metro", size: 2 },
    { id: "CENV", name: "Centreville", county: "va-fairfax-county-fairfax-city", lat: 38.84, lon: -77.44, type: "metro", size: 1 },
    { id: "MOUV", name: "Mount Vernon", county: "va-fairfax-county-fairfax-city", lat: 38.71, lon: -77.09, scenic: true, type: "metro", size: 1 },
    { id: "WDBG", name: "Woodbridge", county: "va-prince-william", lat: 38.64, lon: -77.26, type: "metro", size: 2 },
    { id: "DMFS", name: "Dumfries", county: "va-prince-william", lat: 38.57, lon: -77.32, type: "metro", size: 1 },
    { id: "HYMK", name: "Haymarket", county: "va-prince-william", lat: 38.81, lon: -77.64, type: "farm", size: 1 },
    { id: "PURV", name: "Purcellville", county: "va-loudoun", lat: 39.14, lon: -77.71, type: "farm", size: 1 },
    { id: "ASBN", name: "Ashburn", county: "va-loudoun", lat: 39.03, lon: -77.47, type: "metro", size: 2 },
    { id: "MDBG", name: "Middleburg", county: "va-loudoun", lat: 38.97, lon: -77.74, type: "farm", size: 1 },
    { id: "AQHB", name: "Aquia Harbour", county: "va-stafford", lat: 38.46, lon: -77.38, type: "metro", size: 1 },
    { id: "SPCH", name: "Spotsylvania Courthouse", county: "va-fredericksburg-spotsylvania", lat: 38.2, lon: -77.59, type: "farm", size: 1 },
    { id: "RMTN", name: "Remington", county: "va-fauquier", lat: 38.53, lon: -77.81, type: "farm", size: 1 },
    { id: "THEP", name: "The Plains", county: "va-fauquier", lat: 38.86, lon: -77.77, type: "farm", size: 1 },
    { id: "SPER", name: "Sperryville", county: "va-culpeper-rappahannock", lat: 38.66, lon: -78.24, type: "mountain", size: 1 },
    { id: "BRDS", name: "Brandy Station", county: "va-culpeper-rappahannock", lat: 38.5, lon: -77.89, type: "farm", size: 1 },
    { id: "DHGR", name: "Dahlgren", county: "va-king-george-westmoreland", lat: 38.34, lon: -77.06, type: "coast", size: 1 },
    { id: "MONV", name: "Montross", county: "va-king-george-westmoreland", lat: 38.09, lon: -76.82, type: "farm", size: 1 },
    { id: "BRVL", name: "Berryville", county: "va-clarke-warren", lat: 39.15, lon: -77.98, type: "farm", size: 1 },
    { id: "STPC", name: "Stephens City", county: "va-frederick-winchester", lat: 39.09, lon: -78.22, type: "farm", size: 1 },
    { id: "GRDV", name: "Gordonsville", county: "va-greene-madison-orange", lat: 38.14, lon: -78.19, type: "farm", size: 1 },
    { id: "MDVA", name: "Madison", county: "va-greene-madison-orange", lat: 38.38, lon: -78.26, type: "farm", size: 1 },
    { id: "WOOV", name: "Woodstock", county: "va-page-shenandoah", lat: 38.87, lon: -78.52, type: "farm", size: 1 },
    { id: "LURY", name: "Luray", county: "va-page-shenandoah", lat: 38.66, lon: -78.46, scenic: true, type: "mountain", size: 1 },
    { id: "SHPM", name: "Short Pump", county: "va-henrico", lat: 37.66, lon: -77.62, type: "metro", size: 2 },
    { id: "HIGH", name: "Highland Springs", county: "va-henrico", lat: 37.55, lon: -77.33, type: "metro", size: 1 },
    { id: "MDLO", name: "Midlothian", county: "va-chesterfield", lat: 37.48, lon: -77.65, type: "metro", size: 2 },
    { id: "CHSV", name: "Chester", county: "va-chesterfield", lat: 37.35, lon: -77.43, type: "metro", size: 1 },
    { id: "MCHV", name: "Mechanicsville", county: "va-hanover", lat: 37.63, lon: -77.35, type: "metro", size: 2 },
    { id: "DSPT", name: "Disputanta", county: "va-hopewell-prince-george", lat: 37.12, lon: -77.22, type: "farm", size: 1 },
    { id: "DNWD", name: "Dinwiddie", county: "va-colonial-heights-dinwiddie-petersburg", lat: 37.09, lon: -77.59, type: "farm", size: 1 },
    { id: "BWGR", name: "Bowling Green", county: "va-caroline-essex-king-and-queen", lat: 38.05, lon: -77.35, type: "farm", size: 1 },
    { id: "NWKT", name: "New Kent", county: "va-charles-city-king-william-new-kent", lat: 37.51, lon: -76.99, type: "farm", size: 1 },
    { id: "CHCT", name: "Charles City", county: "va-charles-city-king-william-new-kent", lat: 37.35, lon: -77.06, type: "farm", size: 1 },
    { id: "GCHL", name: "Goochland", county: "va-cumberland-goochland-powhatan", lat: 37.7, lon: -77.89, type: "farm", size: 1 },
    { id: "CUMV", name: "Cumberland", county: "va-cumberland-goochland-powhatan", lat: 37.5, lon: -78.26, type: "farm", size: 1 },
    { id: "LKMT", name: "Lake Monticello", county: "va-fluvanna-louisa", lat: 37.92, lon: -78.33, type: "farm", size: 1 },
    { id: "COLV", name: "Columbia", county: "va-fluvanna-louisa", lat: 37.75, lon: -78.16, type: "farm", size: 1 },
    { id: "CRZT", name: "Crozet", county: "va-albemarle-charlottesville", lat: 38.07, lon: -78.7, type: "farm", size: 1 },
    { id: "SCTV", name: "Scottsville", county: "va-albemarle-charlottesville", lat: 37.81, lon: -78.49, type: "farm", size: 1 },
    { id: "AMCH", name: "Amelia Court House", county: "va-amelia-lunenburg-nottoway", lat: 37.34, lon: -77.99, type: "farm", size: 1 },
    { id: "VCTR", name: "Victoria", county: "va-amelia-lunenburg-nottoway", lat: 36.99, lon: -78.22, type: "farm", size: 1 },
    { id: "APCH", name: "Appomattox Court House", county: "va-appomattox-buckingham-prince-edward", lat: 37.38, lon: -78.8, scenic: true, type: "farm", size: 1 },
    { id: "DLWN", name: "Dillwyn", county: "va-appomattox-buckingham-prince-edward", lat: 37.54, lon: -78.46, type: "farm", size: 1 },
    { id: "LVGS", name: "Lovingston", county: "va-amherst-nelson", lat: 37.76, lon: -78.86, type: "mountain", size: 1 },
    { id: "NLVL", name: "Nellysford", county: "va-amherst-nelson", lat: 37.92, lon: -78.89, type: "mountain", size: 1 },
    { id: "RSTB", name: "Rustburg", county: "va-campbell", lat: 37.27, lon: -79.1, type: "farm", size: 1 },
    { id: "BRKN", name: "Brookneal", county: "va-campbell", lat: 37.05, lon: -78.95, type: "farm", size: 1 },
    { id: "CHCH", name: "Charlotte Court House", county: "va-charlotte-halifax", lat: 37.06, lon: -78.64, type: "farm", size: 1 },
    { id: "CLVR", name: "Clover", county: "va-charlotte-halifax", lat: 36.84, lon: -78.72, type: "farm", size: 1 },
    { id: "LAWV", name: "Lawrenceville", county: "va-brunswick-mecklenburg", lat: 36.76, lon: -77.85, type: "farm", size: 1 },
    { id: "CHAS", name: "Chase City", county: "va-brunswick-mecklenburg", lat: 36.8, lon: -78.46, type: "farm", size: 1 },
    // Clarksville (1,301): the lakeside town on US-58 at its Kerr Lake bridges, the Southside road from South Hill to South Boston (added by the main agent)
    { id: "CKVA", name: "Clarksville", county: "va-brunswick-mecklenburg", lat: 36.62, lon: -78.56, type: "farm", size: 1 },
    { id: "WAVV", name: "Waverly", county: "va-emporia-greensville-sussex", lat: 37.03, lon: -77.1, type: "farm", size: 1 },
    { id: "SCRK", name: "Stony Creek", county: "va-emporia-greensville-sussex", lat: 36.95, lon: -77.4, type: "farm", size: 1 },
    { id: "KLMK", name: "Kilmarnock", county: "va-lancaster-northumberland-richmond-county", lat: 37.71, lon: -76.38, type: "coast", size: 1 },
    { id: "WIND", name: "Windsor", county: "va-isle-of-wight-surry", lat: 36.81, lon: -76.74, type: "farm", size: 1 },
    { id: "SRRY", name: "Surry", county: "va-isle-of-wight-surry", lat: 37.14, lon: -76.83, type: "farm", size: 1 },
    { id: "CRTL", name: "Courtland", county: "va-franklin-city-southampton", lat: 36.71, lon: -77.06, type: "farm", size: 1 },
    { id: "YRKT", name: "Yorktown", county: "va-poquoson-york", lat: 37.24, lon: -76.52, scenic: true, type: "coast", size: 1 },
    { id: "JAMV", name: "Jamestown", county: "va-james-city-williamsburg", lat: 37.21, lon: -76.78, scenic: true, type: "coast", size: 1 },
    { id: "URBN", name: "Urbanna", county: "va-gloucester-mathews-middlesex", lat: 37.64, lon: -76.58, type: "coast", size: 1 },
    { id: "MTHW", name: "Mathews", county: "va-gloucester-mathews-middlesex", lat: 37.44, lon: -76.33, type: "coast", size: 1 },
    { id: "CHNC", name: "Chincoteague", county: "va-accomack-northampton", lat: 37.93, lon: -75.38, scenic: true, type: "coast", size: 1 },
    { id: "ONCK", name: "Onancock", county: "va-accomack-northampton", lat: 37.71, lon: -75.74, type: "coast", size: 1 },
    { id: "CPCH", name: "Cape Charles", county: "va-accomack-northampton", lat: 37.25, lon: -76.01, type: "coast", size: 1 },
    { id: "WAYV", name: "Waynesboro", county: "va-augusta-staunton-waynesboro", lat: 38.07, lon: -78.9, type: "farm", size: 2 },
    { id: "CRGV", name: "Craigsville", county: "va-augusta-staunton-waynesboro", lat: 38.09, lon: -79.39, type: "mountain", size: 1 },
    { id: "BROA", name: "Broadway", county: "va-rockingham", lat: 38.61, lon: -78.8, type: "farm", size: 1 },
    { id: "ELKV", name: "Elkton", county: "va-rockingham", lat: 38.41, lon: -78.62, type: "mountain", size: 1 },
    { id: "BNVS", name: "Buena Vista", county: "va-buena-vista-lexington-rockbridge", lat: 37.73, lon: -79.36, type: "mountain", size: 1 },
    { id: "NTBR", name: "Natural Bridge", county: "va-buena-vista-lexington-rockbridge", lat: 37.63, lon: -79.54, scenic: true, type: "mountain", size: 1 },
    { id: "CLFG", name: "Clifton Forge", county: "va-alleghany-bath-covington-highland", lat: 37.82, lon: -79.83, type: "mountain", size: 1 },
    { id: "HOTV", name: "Hot Springs", county: "va-alleghany-bath-covington-highland", lat: 38, lon: -79.83, scenic: true, type: "mountain", size: 1 },
    { id: "FNCS", name: "Fincastle", county: "va-botetourt-craig", lat: 37.5, lon: -79.87, type: "farm", size: 1 },
    { id: "NCAV", name: "New Castle", county: "va-botetourt-craig", lat: 37.5, lon: -80.11, type: "mountain", size: 1 },
    { id: "HLNS", name: "Hollins", county: "va-roanoke-county-salem", lat: 37.34, lon: -79.95, type: "metro", size: 1 },
    { id: "FORE", name: "Forest", county: "va-bedford", lat: 37.37, lon: -79.28, type: "farm", size: 1 },
    { id: "PKOT", name: "Peaks of Otter", county: "va-bedford", lat: 37.44, lon: -79.6, scenic: true, type: "mountain", size: 1 },
    { id: "FRRM", name: "Ferrum", county: "va-franklin-county", lat: 36.94, lon: -79.99, type: "farm", size: 1 },
    { id: "BNMS", name: "Boones Mill", county: "va-franklin-county", lat: 37.12, lon: -79.95, type: "farm", size: 1 },
    { id: "STUV", name: "Stuart", county: "va-henry-martinsville-patrick", lat: 36.64, lon: -80.27, type: "mountain", size: 1 },
    { id: "BASS", name: "Bassett", county: "va-henry-martinsville-patrick", lat: 36.76, lon: -79.99, type: "farm", size: 1 },
    { id: "MBMI", name: "Mabry Mill", county: "va-henry-martinsville-patrick", lat: 36.74, lon: -80.4, scenic: true, type: "mountain", size: 1 },
    { id: "CHTV", name: "Chatham", county: "va-danville-pittsylvania", lat: 36.82, lon: -79.4, type: "farm", size: 1 },
    { id: "GRET", name: "Gretna", county: "va-danville-pittsylvania", lat: 36.95, lon: -79.36, type: "farm", size: 1 },
    { id: "PULA", name: "Pulaski", county: "va-floyd-pulaski-radford", lat: 37.05, lon: -80.76, type: "mountain", size: 1 },
    { id: "FLOY", name: "Floyd", county: "va-floyd-pulaski-radford", lat: 36.91, lon: -80.32, type: "mountain", size: 1 },
    { id: "CHRS", name: "Christiansburg", county: "va-montgomery", lat: 37.14, lon: -80.41, type: "mountain", size: 2 },
    { id: "SHWV", name: "Shawsville", county: "va-montgomery", lat: 37.17, lon: -80.25, type: "mountain", size: 1 },
    { id: "HVIL", name: "Hillsville", county: "va-carroll-galax-grayson", lat: 36.76, lon: -80.74, type: "mountain", size: 1 },
    { id: "INDV", name: "Independence", county: "va-carroll-galax-grayson", lat: 36.63, lon: -81.15, type: "mountain", size: 1 },
    { id: "GRHL", name: "Grayson Highlands", county: "va-carroll-galax-grayson", lat: 36.63, lon: -81.49, scenic: true, type: "mountain", size: 1 },
    { id: "TAZE", name: "Tazewell", county: "va-bland-giles-tazewell", lat: 37.13, lon: -81.51, type: "mountain", size: 1 },
    { id: "BLUE", name: "Bluefield", county: "va-bland-giles-tazewell", lat: 37.24, lon: -81.27, type: "mountain", size: 1 },
    { id: "PRSB", name: "Pearisburg", county: "va-bland-giles-tazewell", lat: 37.33, lon: -80.73, type: "mountain", size: 1 },
    { id: "MRNV", name: "Marion", county: "va-smyth-wythe", lat: 36.84, lon: -81.52, type: "mountain", size: 1 },
    { id: "SLTV", name: "Saltville", county: "va-smyth-wythe", lat: 36.88, lon: -81.76, type: "mountain", size: 1 },
    { id: "GRUN", name: "Grundy", county: "va-buchanan-dickenson-russell", lat: 37.27, lon: -82.09, type: "mountain", size: 1 },
    { id: "CLTW", name: "Clintwood", county: "va-buchanan-dickenson-russell", lat: 37.15, lon: -82.46, type: "mountain", size: 1 },
    { id: "THEB", name: "The Breaks", county: "va-buchanan-dickenson-russell", lat: 37.3, lon: -82.28, scenic: true, type: "mountain", size: 1 },
    { id: "NORV", name: "Norton", county: "va-norton-wise", lat: 36.93, lon: -82.63, type: "mountain", size: 1 },
    { id: "WISE", name: "Wise", county: "va-norton-wise", lat: 36.98, lon: -82.58, type: "mountain", size: 1 },
    { id: "PNGP", name: "Pennington Gap", county: "va-lee-scott", lat: 36.76, lon: -83.04, type: "mountain", size: 1 },
    { id: "NKLV", name: "Nickelsville", county: "va-lee-scott", lat: 36.75, lon: -82.42, type: "mountain", size: 1 },
    { id: "ABGD", name: "Abingdon", county: "va-bristol-washington", lat: 36.71, lon: -81.97, type: "mountain", size: 1 },
    { id: "DMSC", name: "Damascus", county: "va-bristol-washington", lat: 36.63, lon: -81.79, type: "mountain", size: 1 },
    { id: "SNPK", name: "Shenandoah National Park", county: "va-greene-madison-orange", lat: 38.52, lon: -78.44, scenic: true, type: "mountain", size: 1 },
  ],
  // Real passes and tunnels: [name, latitude, longitude]. See NOTES.md for sources. Kentucky's pack already lists
  // Cumberland Gap (US-25E).
  passes: [
    ["Rockfish Gap (I-64 and US-250, Afton)", 38.03, -78.86],
    ["Swift Run Gap (US-33, Skyline Drive)", 38.33, -78.53],
    ["Thornton Gap (US-211, Skyline Drive)", 38.65, -78.32],
    ["Chester Gap (US-522, Front Royal to Flint Hill)", 38.85, -78.13],
    ["Manassas Gap (I-66, Linden)", 38.92, -78.08],
    ["Goshen Pass (VA-39, Maury River)", 37.98, -79.51],
    ["Buford's Gap (US-460 and the Norfolk Southern, Bedford)", 37.37, -79.68],
    ["Christiansburg grade (I-81 and the Norfolk Southern, Eastern Continental Divide)", 37.13, -80.41],
    ["Big Walker Mountain Tunnel (I-77)", 37, -81.14],
    ["East River Mountain Tunnel (I-77, Bluefield)", 37.22, -81.17],
    ["Big Stone Gap (US-23 and US-58, Powell River)", 36.87, -82.78],
    ["Pound Gap (US-23, Wise County to Kentucky)", 37.15, -82.66],
  ],
  // Real bridges: [name, latitude, longitude]. See NOTES.md for sources.
  bridges: [
    // Hampton Roads Bridge-Tunnel: I-64 under the mouth of Hampton Roads between Hampton and Norfolk (VDOT)
    ["Hampton Roads Bridge-Tunnel (I-64, Hampton to Norfolk)", 36.99, -76.31],
    // Monitor-Merrimac Memorial Bridge-Tunnel: I-664 from Newport News to Suffolk (VDOT)
    ["Monitor-Merrimac Memorial Bridge-Tunnel (I-664)", 36.94, -76.41],
    // James River Bridge: US-17 from Newport News to Isle of Wight County (VDOT)
    ["James River Bridge (US-17, Newport News to Isle of Wight)", 36.98, -76.52],
    // Chesapeake Bay Bridge-Tunnel, 17.6 mi, US-13 from Virginia Beach to the Eastern Shore (south end)
    ["Chesapeake Bay Bridge-Tunnel (Virginia Beach end)", 36.95, -76.01],
    // Chesapeake Bay Bridge-Tunnel (middle)
    ["Chesapeake Bay Bridge-Tunnel (Thimble Shoal and Fisherman Island)", 37.03, -76.01],
    // Chesapeake Bay Bridge-Tunnel (Eastern Shore end)
    ["Chesapeake Bay Bridge-Tunnel (Eastern Shore end)", 37.1, -75.98],
    // Downing Bridge: US-360 over the Rappahannock River between Tappahannock and Warsaw (VDOT)
    ["Downing Bridge (US-360, Rappahannock River, Tappahannock to Warsaw)", 37.93, -76.82],
    // Robert O. Norris Jr. Bridge: VA-3 over the Rappahannock River between Lancaster and Middlesex counties (VDOT)
    ["Robert O. Norris Jr. Bridge (VA-3, Rappahannock River)", 37.62, -76.44],
    // The James River above Hopewell (added by the main agent once the map drew the James): Richmond's
    // bridges (I-95 James River Bridge, the Mayo and Manchester bridges), the Varina-Enon Bridge (I-295),
    // the John Lynch Memorial Bridge at Lynchburg (US-29 Business) and the US-11 bridge at Buchanan (I-81)
    ["James River bridges at Richmond (I-95, Mayo and Manchester bridges)", 37.53, -77.44],
    ["Varina-Enon Bridge (I-295, James River)", 37.39, -77.36],
    ["John Lynch Memorial Bridge (US-29 Business, Lynchburg)", 37.42, -79.14],
    ["James River bridge at Buchanan (US-11, near I-81)", 37.53, -79.68],
    // US-58 crosses Kerr Lake (Buggs Island Lake) on bridges at Clarksville, the Southside's main road
    // from South Hill to South Boston and Danville (added by the main agent)
    ["US-58 bridges over Kerr Lake (Clarksville)", 36.62, -78.57],
    // George P. Coleman Memorial Bridge: US-17 over the York River (VDOT)
    ["Coleman Memorial Bridge (US-17, York River, Yorktown to Gloucester Point)", 37.25, -76.5],
  ],
  // Water that blocks track except at the bridges above. The Census county shapes stop at the shore, so the open water is
  // outside the land: these polygons only mark where it is too wide to follow the shore.
  bays: [
    {
      name: "Hampton Roads", // the James River mouth between the Peninsula and the Southside; crossed at the Hampton Roads and Monitor-Merrimac bridge-tunnels and the James River Bridge
      ring: [-76.56, 37, -76.4, 36.97, -76.28, 37, -76.18, 37.02, -76.18, 36.95, -76.28, 36.93, -76.4, 36.9, -76.56, 36.93],
    },
    {
      name: "Chesapeake Bay", // the lower bay, from Cape Henry to the Rappahannock, the York and the Eastern Shore; crossed at the Bay Bridge-Tunnel and the Coleman, Norris and Downing bridges
      ring: [-76.5, 38.2, -75.92, 38.2, -75.92, 37.3, -75.84, 37.3, -75.84, 36.93, -76.18, 36.93, -76.28, 37.03, -76.5, 37.1],
    },
  ],
  levels: [
    {
      name: "Washington's Virginia & the Rappahannock",
      areas: ["nova"],
      goals: [
        { kind: "totalPassengers", target: 80 },
        { kind: "counties", target: 7 },
        // Fairfax to Fredericksburg, as I-95 and the VRE run
        { kind: "connect", a: "FFX", b: "FRBG" },
      ],
    },
    {
      name: "Richmond & the Piedmont",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 200 },
        // Richmond to Charlottesville, as I-64 and the CSX line run
        { kind: "connect", a: "RICV", b: "CVLE" },
        { kind: "counties", target: 20 },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Hampton Roads & the Tidewater",
      areas: ["tidewater"],
      goals: [
        { kind: "totalPassengers", target: 350 },
        // Norfolk to Richmond, as I-64 runs up the Peninsula
        { kind: "connect", a: "NORF", b: "RICV" },
        { kind: "counties", target: 32 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "The Valley, Roanoke & Southwest Virginia",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 500 },
        // Staunton to Roanoke to Bristol, as I-81 runs
        { kind: "connect", a: "STAU", b: "BRVA" },
        { kind: "counties", target: 48 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The high Alleghenies and the coalfield mountains, the Blue Ridge's wild ridges, and the swampy pine flatwoods of Southside and the Dismal Swamp
    forest: ["va-alleghany-bath-covington-highland","va-bland-giles-tazewell","va-buchanan-dickenson-russell","va-norton-wise","va-lee-scott","va-amherst-nelson","va-botetourt-craig","va-carroll-galax-grayson","va-chesapeake","va-suffolk","va-franklin-city-southampton","va-emporia-greensville-sussex","va-isle-of-wight-surry","va-hopewell-prince-george","va-colonial-heights-dinwiddie-petersburg"],
    // The Piedmont, the Blue Ridge and Valley foothills and the Tidewater necks
    wooded: ["va-greene-madison-orange","va-clarke-warren","va-page-shenandoah","va-culpeper-rappahannock","va-fauquier","va-buena-vista-lexington-rockbridge","va-floyd-pulaski-radford","va-montgomery","va-smyth-wythe","va-bristol-washington","va-roanoke-county-salem","va-roanoke-city","va-bedford","va-franklin-county","va-henry-martinsville-patrick","va-campbell","va-appomattox-buckingham-prince-edward","va-amelia-lunenburg-nottoway","va-charlotte-halifax","va-brunswick-mecklenburg","va-danville-pittsylvania","va-cumberland-goochland-powhatan","va-fluvanna-louisa","va-albemarle-charlottesville","va-king-george-westmoreland","va-charles-city-king-william-new-kent","va-caroline-essex-king-and-queen","va-fredericksburg-spotsylvania","va-stafford","va-prince-william","va-gloucester-mathews-middlesex","va-lancaster-northumberland-richmond-county","va-james-city-williamsburg","va-poquoson-york","va-hanover","va-lynchburg"],
    // Not listed (farmland): the Shenandoah Valley, the Eastern Shore, the Washington suburbs and the cities. No dry.
  },
});
