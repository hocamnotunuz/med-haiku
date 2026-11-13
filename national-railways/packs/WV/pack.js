// National Railways pack: West Virginia.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/WV/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/WV/raw.
// West Virginia's 55 counties are 32 regions (merges in tools/build-map.js, STATES.WV).
NR.addPack({
  code: "WV",
  name: "West Virginia",
  // A game that starts here begins owning Kanawha (Charleston, the biggest region), Putnam and Boone-Lincoln;
  // Putnam and Boone-Lincoln both touch Kanawha and each other. Charleston is metro, Hurricane (Putnam) is farm and
  // Madison (Boone-Lincoln) is mountain, so the first track (Charleston-Hurricane along I-64) has riders.
  start: ["wv-kanawha", "wv-putnam", "wv-boone-lincoln"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short
  // code shown on passengers (ids that other packs use are written with WV or W). pop = region population
  // in thousands (2020 census). size = how busy (1 to 5). level = which level unlocks it in Levels mode.
  // Points are the Census points, except where a comment says it was moved to a downtown. Every Census
  // place is in packs/WV/raw/places.json.
  stations: [
    // Level: The Kanawha Valley, Huntington and the Ohio at the Kanawha's mouth: Charleston, I-64 and I-77, the Coal and Elk valleys
    // Charleston (48,812): the capital, downtown on the Kanawha River at the Capitol (the Census point is the same area). Region 181k, the biggest in the state; the guide gives size 2 (60k-300k; Lexington, 323k, is 3 and Roanoke, 100k, is 2). Yeager Airport is the state's main airport (Charleston, on a leveled hilltop; well known).
    { id: "CHWV", name: "Charleston", county: "wv-kanawha", lat: 38.35, lon: -81.63, airport: "Yeager Airport", type: "metro", size: 2, pop: 181, main: true, level: "kanawha" },
    // Hurricane (6,966): the biggest place, on I-64 in the Teays Valley (Winfield, 2,394, the seat, is a town). Typed farm (the Teays Valley farmland and Putnam's river bottoms) so the start's first track (Charleston to Hurricane, I-64) has riders. Region 57k.
    { id: "HRCN", name: "Hurricane", county: "wv-putnam", lat: 38.43, lon: -82.02, type: "farm", size: 1, pop: 57, main: true, level: "kanawha" },
    // Madison (2,913): the Boone seat on the Coal River and WV-3/US-119 (Hamlin, 1,039, the Lincoln seat, is a town). Region 42k.
    { id: "MAWV", name: "Madison", county: "wv-boone-lincoln", lat: 38.06, lon: -81.79, type: "mountain", size: 1, pop: 42, main: true, level: "kanawha" },
    // Huntington (46,841): on the Ohio River at Marshall University and the CSX yards (the Census point is within 1 mi of downtown). Region 94k, size 2.
    { id: "HUWV", name: "Huntington", county: "wv-cabell", lat: 38.41, lon: -82.43, type: "metro", size: 2, pop: 94, main: true, level: "kanawha" },
    // Kenova (3,036): the biggest place, at the mouth of the Big Sandy where WV, KY and OH meet (Ceredo, 1,408, is 1.5 mi away; Wayne, the seat, is a town). Region 39k.
    { id: "KNVA", name: "Kenova", county: "wv-wayne", lat: 38.4, lon: -82.58, type: "farm", size: 1, pop: 39, main: true, level: "kanawha" },
    // Point Pleasant (4,078): the Mason seat at the Kanawha's mouth on the Ohio, the Silver Bridge's town (Ravenswood, 3,868, and Ripley, 3,076, are towns on I-77). Region 53k.
    { id: "PTPL", name: "Point Pleasant", county: "wv-jackson-mason", lat: 38.85, lon: -82.13, type: "farm", size: 1, pop: 53, main: true, level: "kanawha" },
    // Spencer (2,039): the Roane seat on US-33 and the Spencer-area Reedy Creek hills (Elizabeth, 724, and Grantsville, 495, are towns). Region 25k.
    { id: "SPWV", name: "Spencer", county: "wv-calhoun-roane-wirt", lat: 38.8, lon: -81.35, type: "farm", size: 1, pop: 25, main: true, level: "kanawha" },
    // Summersville (3,431): the Nicholas seat on US-19 above the Gauley River and Summersville Lake (Richwood, 1,664, and Webster Springs are towns). Region 41k.
    { id: "SUMV", name: "Summersville", county: "wv-clay-nicholas-webster", lat: 38.29, lon: -80.84, type: "mountain", size: 1, pop: 41, main: true, level: "kanawha" },
    // Level: The southern coalfields and the New River: the West Virginia Turnpike, the Pocahontas and Logan coalfields, the Greenbrier Valley
    // Oak Hill (8,177): the biggest place and the railway and coal hub of Fayette on US-19 (Fayetteville, 2,911, the seat, is 7 mi north next to the New River Gorge Bridge, and is covered by the scenic New River Gorge point). Region 40k.
    { id: "OKHL", name: "Oak Hill", county: "wv-fayette", lat: 37.97, lon: -81.16, type: "mountain", size: 1, pop: 40, main: true, level: "south" },
    // Beckley (17,276): the Raleigh seat at the junction of I-64/I-77 (the West Virginia Turnpike) and US-19 in the southern coalfield. Region 75k, size 2.
    { id: "BEWV", name: "Beckley", county: "wv-raleigh", lat: 37.77, lon: -81.16, type: "mountain", size: 2, pop: 75, main: true, level: "south" },
    // Bluefield (9,639): the biggest place, on the Norfolk Southern coal line and US-52/460 at the Virginia line below East River Mountain (Princeton, 5,863, the seat, is a town on I-77). Region 60k.
    { id: "BLWV", name: "Bluefield", county: "wv-mercer", lat: 37.26, lon: -81.21, type: "mountain", size: 1, pop: 60, main: true, level: "south" },
    // Lewisburg (3,924): the Greenbrier seat on I-64 and US-60/219 in the Greenbrier Valley (Hinton, 2,249, the Summers seat on the New River, and White Sulphur Springs are separate). Region 57k.
    { id: "LEWV", name: "Lewisburg", county: "wv-greenbrier-monroe-summers", lat: 37.81, lon: -80.43, type: "mountain", size: 1, pop: 57, main: true, level: "south" },
    // Welch (3,590): the McDowell seat in the Pocahontas coalfield on US-52 and the Norfolk Southern (Mullens, 1,475, and Pineville are towns). Region 41k.
    { id: "WELC", name: "Welch", county: "wv-mcdowell-wyoming", lat: 37.43, lon: -81.59, type: "mountain", size: 1, pop: 41, main: true, level: "south" },
    // Williamson (3,080): the biggest place, the Mingo seat on the Tug Fork at the Kentucky line on US-52/119 and the Norfolk Southern (Logan, 1,437, the Logan seat on the Guyandotte, is a town). Region 56k.
    { id: "WIWV", name: "Williamson", county: "wv-logan-mingo", lat: 37.67, lon: -82.27, type: "mountain", size: 1, pop: 56, main: true, level: "south" },
    // Level: The Ohio River, the Northern Panhandle and the Monongahela: I-79, I-77, US-50 and US-33 from Parkersburg and Wheeling to Morgantown
    // Parkersburg (29,741): downtown on the Ohio River and Little Kanawha at the Parkersburg-Belpre Bridge (the Census point is 1.4 mi south-east). Region 84k, size 2.
    { id: "PKB", name: "Parkersburg", county: "wv-wood", lat: 39.27, lon: -81.56, type: "metro", size: 2, pop: 84, main: true, level: "north" },
    // St. Marys (1,833): the biggest place, the Pleasants seat on the Ohio River and WV-2 (Harrisville, 1,627, the Ritchie seat, and Sistersville, 1,409, are towns). Region 24k.
    { id: "STMA", name: "St. Marys", county: "wv-pleasants-ritchie-tyler", lat: 39.39, lon: -81.2, type: "farm", size: 1, pop: 24, main: true, level: "north" },
    // Moundsville (8,083): the Marshall seat on the Ohio River and WV-2 (the Grave Creek Mound) (New Martinsville, 5,205, the Wetzel seat, is a town). Region 45k.
    { id: "MOWV", name: "Moundsville", county: "wv-marshall-wetzel", lat: 39.92, lon: -80.74, type: "farm", size: 1, pop: 45, main: true, level: "north" },
    // Wheeling (27,071): the old National Road and Ohio River city, at I-70 and I-470 and the Wheeling Suspension Bridge (1849). Region 42k alone (size 2 as in the main agent's note: a regional city, like Parkersburg).
    { id: "WHLG", name: "Wheeling", county: "wv-ohio", lat: 40.07, lon: -80.7, type: "metro", size: 2, pop: 42, main: true, level: "north" },
    // Weirton (19,158): the steel city of the Northern Panhandle on the Ohio River at the Steubenville bridge (Wellsburg, 2,452, the Brooke seat, and New Cumberland, 1,022, the Hancock seat, are towns). Region 52k.
    { id: "WEIR", name: "Weirton", county: "wv-brooke-hancock", lat: 40.41, lon: -80.57, type: "metro", size: 1, pop: 52, main: true, level: "north" },
    // Clarksburg (16,050): the Harrison seat on I-79 and US-50 and the old B&O junction (Bridgeport, 9,327, is 6.6 mi east and a town). Region 66k, size 2 (guide 60k-300k; Culpeper-sized regions are 1).
    { id: "CLWV", name: "Clarksburg", county: "wv-harrison", lat: 39.27, lon: -80.36, type: "metro", size: 2, pop: 66, main: true, level: "north" },
    // Fairmont (18,420): the Marion seat on the Monongahela River at I-79 and I-68's western end (Mannington, 1,951, is a town). Region 56k.
    { id: "FAWV", name: "Fairmont", county: "wv-marion", lat: 39.48, lon: -80.15, type: "metro", size: 1, pop: 56, main: true, level: "north" },
    // Morgantown (30,194): West Virginia University on the Monongahela at I-68 and I-79. Region 106k, size 2.
    { id: "MORW", name: "Morgantown", county: "wv-monongalia", lat: 39.64, lon: -79.95, type: "metro", size: 2, pop: 106, main: true, level: "north" },
    // Buckhannon (5,186): the Upshur seat on US-33 and WV-20 (Weston, 3,951, the Lewis seat on I-79 and US-33/19, is a town). Region 41k.
    { id: "BUCK", name: "Buckhannon", county: "wv-lewis-upshur", lat: 38.99, lon: -80.23, type: "farm", size: 1, pop: 41, main: true, level: "north" },
    // Grafton (4,731): the Taylor seat and B&O railroad junction on the Tygart (Philippi, 2,925, the Barbour seat, is a town). Region 32k.
    { id: "GRWV", name: "Grafton", county: "wv-barbour-taylor", lat: 39.34, lon: -80.02, type: "farm", size: 1, pop: 32, main: true, level: "north" },
    // Sutton (864): the Braxton seat on I-79 and the Elk River at Sutton Lake (Glenville, 1,126, the Gilmer seat on the Little Kanawha, is the biggest place, and is a town here: Sutton is on I-79 and links to Summersville and Weston). Region 28k.
    { id: "SUTT", name: "Sutton", county: "wv-braxton-doddridge-gilmer", lat: 38.67, lon: -80.71, type: "mountain", size: 1, pop: 28, main: true, level: "north" },
    // Level: The Allegheny highlands and the Eastern Panhandle: I-68, Corridor H, US-50 and I-81 from Elkins to Martinsburg
    // Kingwood (2,980): the Preston seat on US-50/WV-7 above the Cheat River and the B&O's Kingwood Tunnel (Terra Alta, 1,423, is a town). Region 34k.
    { id: "KNGW", name: "Kingwood", county: "wv-preston", lat: 39.47, lon: -79.68, type: "farm", size: 1, pop: 34, main: true, level: "east" },
    // Elkins (6,938): the Randolph seat on US-33/250 on the Tygart Valley and the Durbin railway, the gateway to the Monongahela National Forest (Parsons, Marlinton). Region 43k.
    { id: "ELWV", name: "Elkins", county: "wv-pocahontas-randolph-tucker", lat: 38.92, lon: -79.85, type: "mountain", size: 1, pop: 43, main: true, level: "east" },
    // Moorefield (2,520): the Hardy seat on the South Branch Potomac and WV-55/Corridor H (Petersburg, 2,282, the Grant seat, and Franklin are towns). Region 31k.
    { id: "MOOW", name: "Moorefield", county: "wv-grant-hardy-pendleton", lat: 39.07, lon: -78.96, type: "mountain", size: 1, pop: 31, main: true, level: "east" },
    // Romney (1,768): the Hampshire seat on the South Branch and US-50 (Berkeley Springs, 756, the Morgan seat and spa town, is a town and scenic). Region 40k.
    { id: "ROMN", name: "Romney", county: "wv-hampshire-morgan", lat: 39.34, lon: -78.76, type: "farm", size: 1, pop: 40, main: true, level: "east" },
    // Keyser (4,869): the Mineral seat on the North Branch Potomac and the CSX Cumberland line, US-220/ WV-46. Region 27k.
    { id: "KEYS", name: "Keyser", county: "wv-mineral", lat: 39.44, lon: -78.98, type: "mountain", size: 1, pop: 27, main: true, level: "east" },
    // Martinsburg (18,781): the Berkeley seat on I-81 and the CSX/MARC line (Hedgesville is a town). Region 122k, size 2.
    { id: "MTBG", name: "Martinsburg", county: "wv-berkeley", lat: 39.46, lon: -77.98, type: "metro", size: 2, pop: 122, main: true, level: "east" },
    // Charles Town (6,530): downtown at the Jefferson seat, the racetrack and WV-9/US-340 (the Census point is 2.5 mi south-west, in the middle of the city limits; Ranson, 5,435, adjoins it 1.6 mi north). Region 58k.
    { id: "CHAW", name: "Charles Town", county: "wv-jefferson", lat: 39.29, lon: -77.86, type: "farm", size: 1, pop: 58, main: true, level: "east" },
  ],
  // Towns: the next-biggest real places in each region, spread out, and the well-known scenic places (scenic: true, see NOTES.md).
  towns: [
    { id: "HDGE", name: "Hedgesville", county: "wv-berkeley", lat: 39.55, lon: -77.99, type: "farm", size: 1 },
    { id: "SHEW", name: "Shepherdstown", county: "wv-jefferson", lat: 39.43, lon: -77.8, type: "farm", size: 1 },
    { id: "HFRY", name: "Harpers Ferry", county: "wv-jefferson", lat: 39.32, lon: -77.74, scenic: true, type: "mountain", size: 1 },
    { id: "BSPR", name: "Berkeley Springs", county: "wv-hampshire-morgan", lat: 39.62, lon: -78.23, scenic: true, type: "mountain", size: 1 },
    { id: "CAPB", name: "Capon Bridge", county: "wv-hampshire-morgan", lat: 39.3, lon: -78.43, type: "mountain", size: 1 },
    { id: "PEWV", name: "Petersburg", county: "wv-grant-hardy-pendleton", lat: 39, lon: -79.13, type: "mountain", size: 1 },
    { id: "FRWV", name: "Franklin", county: "wv-grant-hardy-pendleton", lat: 38.65, lon: -79.33, type: "mountain", size: 1 },
    { id: "SENR", name: "Seneca Rocks", county: "wv-grant-hardy-pendleton", lat: 38.83, lon: -79.37, scenic: true, type: "mountain", size: 1 },
    { id: "PAWV", name: "Parsons", county: "wv-pocahontas-randolph-tucker", lat: 39.09, lon: -79.68, type: "mountain", size: 1 },
    { id: "MARW", name: "Marlinton", county: "wv-pocahontas-randolph-tucker", lat: 38.22, lon: -80.09, type: "mountain", size: 1 },
    { id: "CASS", name: "Cass Scenic Railroad", county: "wv-pocahontas-randolph-tucker", lat: 38.4, lon: -79.92, scenic: true, type: "mountain", size: 1 },
    { id: "BLAW", name: "Blackwater Falls", county: "wv-pocahontas-randolph-tucker", lat: 39.11, lon: -79.49, scenic: true, type: "mountain", size: 1 },
    { id: "TRAL", name: "Terra Alta", county: "wv-preston", lat: 39.44, lon: -79.54, type: "mountain", size: 1 },
    { id: "PIED", name: "Piedmont", county: "wv-mineral", lat: 39.47, lon: -79.06, type: "mountain", size: 1 },
    { id: "CARP", name: "Carpendale", county: "wv-mineral", lat: 39.62, lon: -78.78, type: "mountain", size: 1 },
    { id: "PHIL", name: "Philippi", county: "wv-barbour-taylor", lat: 39.15, lon: -80.05, type: "farm", size: 1 },
    { id: "WEWV", name: "Weston", county: "wv-lewis-upshur", lat: 39.04, lon: -80.46, type: "farm", size: 1 },
    { id: "GLNV", name: "Glenville", county: "wv-braxton-doddridge-gilmer", lat: 38.94, lon: -80.83, type: "mountain", size: 1 },
    { id: "WESW", name: "West Union", county: "wv-braxton-doddridge-gilmer", lat: 39.3, lon: -80.78, type: "farm", size: 1 },
    { id: "BRWV", name: "Bridgeport", county: "wv-harrison", lat: 39.3, lon: -80.24, type: "metro", size: 1 },
    { id: "SAWV", name: "Salem", county: "wv-harrison", lat: 39.28, lon: -80.56, type: "farm", size: 1 },
    { id: "MANN", name: "Mannington", county: "wv-marion", lat: 39.53, lon: -80.34, type: "farm", size: 1 },
    { id: "BLKV", name: "Blacksville", county: "wv-monongalia", lat: 39.72, lon: -80.21, type: "farm", size: 1 },
    { id: "WLBT", name: "West Liberty", county: "wv-ohio", lat: 40.16, lon: -80.6, type: "farm", size: 1 },
    { id: "WLSB", name: "Wellsburg", county: "wv-brooke-hancock", lat: 40.28, lon: -80.61, type: "metro", size: 1 },
    { id: "NCUM", name: "New Cumberland", county: "wv-brooke-hancock", lat: 40.5, lon: -80.61, type: "farm", size: 1 },
    { id: "NMTV", name: "New Martinsville", county: "wv-marshall-wetzel", lat: 39.65, lon: -80.86, type: "farm", size: 1 },
    { id: "SSVL", name: "Sistersville", county: "wv-pleasants-ritchie-tyler", lat: 39.56, lon: -81, type: "farm", size: 1 },
    { id: "HAWV", name: "Harrisville", county: "wv-pleasants-ritchie-tyler", lat: 39.21, lon: -81.05, type: "farm", size: 1 },
    { id: "WILW", name: "Williamstown", county: "wv-wood", lat: 39.4, lon: -81.45, type: "farm", size: 1 },
    { id: "ELIW", name: "Elizabeth", county: "wv-calhoun-roane-wirt", lat: 39.06, lon: -81.4, type: "farm", size: 1 },
    { id: "GRAW", name: "Grantsville", county: "wv-calhoun-roane-wirt", lat: 38.92, lon: -81.09, type: "farm", size: 1 },
    { id: "RVNS", name: "Ravenswood", county: "wv-jackson-mason", lat: 38.96, lon: -81.76, type: "farm", size: 1 },
    { id: "RIWV", name: "Ripley", county: "wv-jackson-mason", lat: 38.82, lon: -81.71, type: "farm", size: 1 },
    { id: "SCHS", name: "South Charleston", county: "wv-kanawha", lat: 38.34, lon: -81.71, type: "metro", size: 1 },
    { id: "STAL", name: "St. Albans", county: "wv-kanawha", lat: 38.38, lon: -81.82, type: "metro", size: 1 },
    { id: "WINW", name: "Winfield", county: "wv-putnam", lat: 38.53, lon: -81.89, type: "farm", size: 1 },
    { id: "HAML", name: "Hamlin", county: "wv-boone-lincoln", lat: 38.28, lon: -82.1, type: "mountain", size: 1 },
    { id: "WHWV", name: "Whitesville", county: "wv-boone-lincoln", lat: 37.98, lon: -81.53, type: "mountain", size: 1 },
    { id: "BRBV", name: "Barboursville", county: "wv-cabell", lat: 38.41, lon: -82.3, type: "metro", size: 1 },
    { id: "MIWV", name: "Milton", county: "wv-cabell", lat: 38.44, lon: -82.15, type: "farm", size: 1 },
    { id: "WAWV", name: "Wayne", county: "wv-wayne", lat: 38.23, lon: -82.44, type: "mountain", size: 1 },
    { id: "LOGN", name: "Logan", county: "wv-logan-mingo", lat: 37.85, lon: -81.99, type: "mountain", size: 1 },
    { id: "MTWN", name: "Matewan", county: "wv-logan-mingo", lat: 37.62, lon: -82.16, type: "mountain", size: 1 },
    { id: "MUWV", name: "Mullens", county: "wv-mcdowell-wyoming", lat: 37.58, lon: -81.39, type: "mountain", size: 1 },
    { id: "PNVL", name: "Pineville", county: "wv-mcdowell-wyoming", lat: 37.58, lon: -81.54, type: "mountain", size: 1 },
    { id: "PRWV", name: "Princeton", county: "wv-mercer", lat: 37.37, lon: -81.1, type: "mountain", size: 1 },
    { id: "SOPH", name: "Sophia", county: "wv-raleigh", lat: 37.71, lon: -81.25, type: "mountain", size: 1 },
    { id: "MONW", name: "Montgomery", county: "wv-fayette", lat: 38.17, lon: -81.32, type: "mountain", size: 1 },
    { id: "NRGB", name: "New River Gorge", county: "wv-fayette", lat: 38.07, lon: -81.08, scenic: true, type: "mountain", size: 1 },
    { id: "RCHW", name: "Richwood", county: "wv-clay-nicholas-webster", lat: 38.22, lon: -80.54, type: "mountain", size: 1 },
    { id: "WEBW", name: "Webster Springs", county: "wv-clay-nicholas-webster", lat: 38.48, lon: -80.41, type: "mountain", size: 1 },
    { id: "HIWV", name: "Hinton", county: "wv-greenbrier-monroe-summers", lat: 37.67, lon: -80.88, type: "mountain", size: 1 },
    { id: "ALDR", name: "Alderson", county: "wv-greenbrier-monroe-summers", lat: 37.73, lon: -80.64, type: "mountain", size: 1 },
    { id: "GREW", name: "The Greenbrier", county: "wv-greenbrier-monroe-summers", lat: 37.79, lon: -80.31, scenic: true, type: "mountain", size: 1 },
  ],
  // Real passes and tunnels: [name, latitude, longitude]. See NOTES.md for sources. Virginia's pack already lists
  // the East River Mountain Tunnel (I-77, Bluefield).
  passes: [
    ["Allegheny Mountain (I-64 and the C&O, White Sulphur Springs to Covington)", 37.8, -80.12],
    ["Big Bend Tunnel (C&O, Talcott)", 37.64, -80.79],
    ["Kingwood Tunnel (B&O, Tunnelton)", 39.39, -79.75],
  ],
  // Real bridges: [name, latitude, longitude]. See NOTES.md for sources. Ohio's pack already lists the Ohio River
  // crossings at Chester, Weirton, Wheeling, Williamstown, Parkersburg and Point Pleasant, and Kentucky's those at Ashland.
  bridges: [
    ["Wheeling Suspension Bridge (Wheeling Island)", 40.07, -80.72],
    ["Hannibal Bridge (WV-7, New Martinsville to Hannibal)", 39.67, -80.87],
    ["St. Marys Bridge (WV-2, St. Marys to Newport)", 39.39, -81.21],
    ["Sistersville-Fly Ferry (WV-2, Sistersville)", 39.56, -81.02],
    ["Robert C. Byrd Bridge (US-52, Huntington to Chesapeake)", 38.42, -82.46],
    ["Big Sandy River bridges (I-64 and US-60, Kenova to Catlettsburg)", 38.4, -82.6],
    ["Tug Fork bridge (US-119, Williamson to South Williamson)", 37.68, -82.28],
    ["Kanawha River bridges (Charleston, I-64 and the Patrick Street and South Side bridges)", 38.35, -81.64],
    ["Kanawha River bridge (St. Albans to Nitro, WV-25)", 38.39, -81.83],
    ["New River Gorge Bridge (US-19)", 38.07, -81.08],
    ["Monongahela River bridges (Morgantown, I-79 and the Westover Bridge)", 39.64, -79.96],
    ["Monongahela River bridges (Fairmont, Jackson Street and the Million Dollar Bridge)", 39.48, -80.14],
    ["Shenandoah River bridges (Harpers Ferry, US-340 and the C&O)", 39.32, -77.75],
    ["Greenbrier River bridge (Ronceverte, US-60/219)", 37.75, -80.46],
    ["Guyandotte River bridges (Logan, WV-10 and US-119)", 37.85, -81.99],
  ],
  levels: [
    {
      name: "Charleston & the Kanawha Valley",
      areas: ["kanawha"],
      goals: [
        { kind: "totalPassengers", target: 60 },
        { kind: "counties", target: 6 },
        // Charleston to Huntington, as I-64 runs down the Kanawha and Teays valleys
        { kind: "connect", a: "CHWV", b: "HUWV" },
      ],
    },
    {
      name: "The Coalfields & the New River",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 150 },
        // Charleston to Beckley to Bluefield, as the West Virginia Turnpike runs
        { kind: "connect", a: "CHWV", b: "BEWV" },
        { kind: "counties", target: 11 },
      ],
    },
    {
      name: "The Ohio River & the Monongahela",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Charleston to Clarksburg and Morgantown, as I-79 runs
        { kind: "connect", a: "CHWV", b: "CLWV" },
        { kind: "counties", target: 20 },
      ],
    },
    {
      name: "The Alleghenies & the Eastern Panhandle",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 420 },
        // Morgantown to Martinsburg through the highlands
        { kind: "connect", a: "MORW", b: "MTBG" },
        { kind: "counties", target: 28 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The high Alleghenies and the coalfield mountains
    forest: ["wv-pocahontas-randolph-tucker", "wv-grant-hardy-pendleton", "wv-greenbrier-monroe-summers", "wv-clay-nicholas-webster", "wv-fayette", "wv-mcdowell-wyoming", "wv-logan-mingo", "wv-boone-lincoln", "wv-raleigh", "wv-mercer", "wv-braxton-doddridge-gilmer", "wv-calhoun-roane-wirt", "wv-mineral", "wv-preston"],
    // The Ohio River hills, the Kanawha valley and the Mon valley
    wooded: ["wv-kanawha", "wv-putnam", "wv-cabell", "wv-wayne", "wv-jackson-mason", "wv-wood", "wv-pleasants-ritchie-tyler", "wv-marshall-wetzel", "wv-ohio", "wv-brooke-hancock", "wv-harrison", "wv-marion", "wv-monongalia", "wv-barbour-taylor", "wv-lewis-upshur", "wv-hampshire-morgan"],
    // Not listed (farmland): the Eastern Panhandle's Shenandoah Valley (Berkeley and Jefferson). No dry.
  },
});
