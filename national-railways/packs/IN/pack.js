// National Railways pack: Indiana.
// Everything hand-made for one state: main stations, towns, levels, bridges and where the forests
// are. The county borders come from map.js and the rivers and lakes from terrain.js (Indiana has
// no real mountains on its map, so there are no passes). What each field means: PACKS.md.
// Judgment calls and sources: packs/IN/NOTES.md. Cities and populations: U.S. Census Bureau (2020),
// packs/IN/raw. Indiana's 92 counties are 56 regions (merges in tools/build-map.js, STATES.IN).
NR.addPack({
  code: "IN",
  name: "Indiana",
  // A game that starts here begins owning Marion (Indianapolis), Hamilton (Carmel) and Boone
  // (Lebanon), which all touch each other. Indianapolis and Carmel are metro and Lebanon is farm,
  // so the first track (Carmel-Lebanon, the nearest pair of different types) has riders; the
  // Indianapolis-Carmel pair joins two metros, which carries nobody in "A type of place".
  start: ["in-marion", "in-hamilton", "in-boone"],
  // Main stations: one per region, at its biggest place, except Gary (not Hammond), Boone's Lebanon
  // (not Zionsville), Warrick's Boonville (not Newburgh) and Dearborn's Lawrenceburg, and the downtown
  // points noted. id = the short code shown on passengers. county = region id in this folder's
  // map.js. pop = region population in thousands (2020 census). size = how busy (1 to 5). level =
  // which level unlocks it in Levels mode. Points are the Census points, except the downtowns noted
  // (NOTES.md).
  stations: [
    // Level 1: Indianapolis and central Indiana
    // Indianapolis: the state capital and biggest city (887,648; Marion County 977k, the biggest region of the state, size 4 like Columbus, Denver and Kansas City). At Monument Circle (the Census point, 39.78, -86.15, is the middle of the city limits, a mile away). Indianapolis International Airport (the state's only big one, 7 mi south-west) is the airport.
    { id: "INDY", name: "Indianapolis", county: "in-marion", lat: 39.77, lon: -86.16, airport: "Indianapolis International Airport", type: "metro", size: 4, pop: 977, main: true, level: "central" },
    // Carmel: Hamilton County's biggest city by a hair (99,752, ahead of Fishers 99,046; Noblesville, the seat, is third), the roundabout city on Indianapolis's north side; the county 347k, size 3. At the Arts and Design District, downtown, 2 mi east of the Census point.
    { id: "CRML", name: "Carmel", county: "in-hamilton", lat: 39.98, lon: -86.12, type: "metro", size: 3, pop: 347, main: true, level: "central" },
    // Lebanon, not Zionsville (30,604, an Indianapolis commuter suburb that is a town here): the seat (16,713) and the farm centre on I-65 and US-52, the middle of the county of 71k. Downtown.
    { id: "LEBN", name: "Lebanon", county: "in-boone", lat: 40.05, lon: -86.47, type: "farm", size: 2, pop: 71, main: true, level: "central" },
    // Plainfield: Hendricks County's biggest town (34,656, ahead of Brownsburg and Avon; Danville, the seat, is 10,620 and a town here), on I-70 by the airport; the county 175k, size 2.
    { id: "PLFD", name: "Plainfield", county: "in-hendricks", lat: 39.7, lon: -86.4, type: "metro", size: 2, pop: 175, main: true, level: "central" },
    // Greenwood: Johnson County's biggest city (63,827, ahead of Franklin, the seat, 25,326), Indianapolis's south side on I-65; the county 162k.
    { id: "GRWI", name: "Greenwood", county: "in-johnson", lat: 39.61, lon: -86.11, type: "metro", size: 2, pop: 162, main: true, level: "central" },
    // Greenfield: Hancock's seat and biggest city (23,481; the county 80k), James Whitcomb Riley's home town, on I-70 and US-40, east of Indianapolis.
    { id: "GRNF", name: "Greenfield", county: "in-hancock", lat: 39.79, lon: -85.77, type: "farm", size: 2, pop: 80, main: true, level: "central" },
    // Anderson: Madison County's biggest city (54,762; the county 130k), the seat and old GM town on the White River and I-69. Downtown, a mile from the Census point.
    { id: "ANDN", name: "Anderson", county: "in-madison", lat: 40.1, lon: -85.68, type: "metro", size: 2, pop: 130, main: true, level: "central" },
    // Martinsville: Morgan's seat and biggest city (11,935, just ahead of Mooresville, 9,424), on the White River, SR-37 and I-69 south-west of Indianapolis; the county 72k.
    { id: "MRTV", name: "Martinsville", county: "in-morgan", lat: 39.43, lon: -86.43, type: "farm", size: 2, pop: 72, main: true, level: "central" },
    // Shelbyville, the group's biggest city (20,116, ahead of Greensburg 12,314 and Rushville 6,185), Shelby's seat on I-74 and the Big Blue River; the three counties 88k lie along I-74 southeast of Indianapolis (the coordinator added Shelby to Decatur-Rush).
    { id: "SHBV", name: "Shelbyville", county: "in-decatur-rush-shelby", lat: 39.52, lon: -85.78, type: "farm", size: 2, pop: 88, main: true, level: "central" },
    // Level 2: Fort Wayne and the east
    // Fort Wayne: Indiana's second city (263,909; Allen County 385k, size 3 like Ann Arbor), where the St. Marys and St. Joseph rivers make the Maumee, on I-69 and US-30. Downtown (the Census point is 41.09, -85.14 and is within a mile).
    { id: "FTWY", name: "Fort Wayne", county: "in-allen", lat: 41.08, lon: -85.14, type: "metro", size: 3, pop: 385, main: true, level: "east" },
    // Bluffton: the biggest place of the group (10,317, a hair ahead of Decatur, 9,911), Wells's seat on the Wabash and SR-1/SR-116; the two counties 64k.
    { id: "BLUF", name: "Bluffton", county: "in-adams-wells", lat: 40.74, lon: -85.17, type: "farm", size: 2, pop: 64, main: true, level: "east" },
    // Huntington: the biggest place of the group (17,033; Whitley's seat, Columbia City, is 9,890), 'the Lightbulb City' on the Wabash and US-24; the two counties 71k.
    { id: "HNTI", name: "Huntington", county: "in-huntington-whitley", lat: 40.88, lon: -85.5, type: "farm", size: 2, pop: 71, main: true, level: "east" },
    // Peru: the biggest place of the group (10,957, a hair ahead of Wabash, 10,439), Miami's seat on the Wabash and US-24/31, the old circus winter quarters; the two counties 67k.
    { id: "PERU", name: "Peru", county: "in-miami-wabash", lat: 40.76, lon: -86.07, type: "farm", size: 2, pop: 67, main: true, level: "east" },
    // Marion: Grant's seat and biggest city (28,319; the county 67k), on the Mississinewa River and I-69/SR-37. Downtown.
    { id: "MRIN", name: "Marion", county: "in-grant", lat: 40.56, lon: -85.66, type: "farm", size: 2, pop: 67, main: true, level: "east" },
    // Kokomo: Howard's seat and biggest city (59,607; the county 84k), the Stellantis and Haynes plants, on US-31 and US-35. Downtown, 2 mi north of the Census point.
    { id: "KKMO", name: "Kokomo", county: "in-howard", lat: 40.49, lon: -86.13, type: "metro", size: 2, pop: 84, main: true, level: "east" },
    // Muncie: Delaware's seat and biggest city (65,205; the county 112k), Ball State University and 'Middletown', on the White River and I-69. Downtown.
    { id: "MNCI", name: "Muncie", county: "in-delaware", lat: 40.19, lon: -85.39, type: "metro", size: 2, pop: 112, main: true, level: "east" },
    // Portland: the biggest place of the group by a small margin (6,323, then Hartford City 6,087 and Winchester 4,839), Jay's seat on the Salamonie and US-27 near the Ohio line; the three counties 57k.
    { id: "PRTI", name: "Portland", county: "in-blackford-jay-randolph", lat: 40.44, lon: -84.98, type: "farm", size: 1, pop: 57, main: true, level: "east" },
    // New Castle: Henry's seat and biggest city (17,408; the county 49k, kept alone: it touches seven bigger regions), on US-36 and SR-3, with the world's largest high-school gym.
    { id: "NWCL", name: "New Castle", county: "in-henry", lat: 39.93, lon: -85.37, type: "farm", size: 2, pop: 49, main: true, level: "east" },
    // Richmond: Wayne's seat and biggest city (35,728; the county 67k), on the Whitewater River's east fork, I-70 and US-40 at the Ohio line, the old National Road town. Downtown.
    { id: "RCHM", name: "Richmond", county: "in-wayne", lat: 39.83, lon: -84.89, type: "farm", size: 2, pop: 67, main: true, level: "east" },
    // Connersville: the biggest place of the group (13,351), Fayette's seat on the Whitewater River and SR-1 (the Whitewater valley with Brookville and Liberty); the three counties 53k.
    { id: "CNVL", name: "Connersville", county: "in-fayette-franklin-union", lat: 39.64, lon: -85.14, type: "farm", size: 2, pop: 53, main: true, level: "east" },
    // Auburn: the biggest place of the group (13,508; Kendallville is 10,273), DeKalb's seat, home of the Auburn-Cord-Duesenberg museum, on I-69 and the old Fort Wayne-Chicago rail line; the two counties 91k.
    { id: "AUBR", name: "Auburn", county: "in-dekalb-noble", lat: 41.37, lon: -85.06, type: "farm", size: 2, pop: 91, main: true, level: "east" },
    // Angola: the biggest place of the group (9,352, ahead of Lagrange, 2,710), Steuben's seat and Trine University, by Pokagon State Park and the Steuben lakes, on I-69 and the Indiana Toll Road; the two counties 75k.
    { id: "ANGL", name: "Angola", county: "in-lagrange-steuben", lat: 41.64, lon: -85, type: "farm", size: 1, pop: 75, main: true, level: "east" },
    // Warsaw: Kosciusko's seat and biggest city (15,804; the county 80k), the 'Orthopedic Capital of the World' on Winona and Pike lakes, US-30.
    { id: "WARS", name: "Warsaw", county: "in-kosciusko", lat: 41.24, lon: -85.85, type: "farm", size: 2, pop: 80, main: true, level: "east" },
    // Level 3: Lake Michigan, the north and the Wabash
    // Gary, not Hammond (77,854, the county's biggest, a town here at 41.62, -87.49, 9 mi west): Lake County's historic centre (69,089, the steel city founded by U.S. Steel) at the junction of I-65, I-80/94, US-20 and the South Shore Line, with the Gary/Chicago airport; the county 499k, size 3. 25 mi from Chicago's Loop station. Downtown.
    { id: "GARY", name: "Gary", county: "in-lake", lat: 41.6, lon: -87.34, type: "metro", size: 3, pop: 499, main: true, level: "north" },
    // Portage: Porter's biggest city (37,930, ahead of Valparaiso, the seat, 34,152), on the Lake Michigan shore at the Indiana Dunes, with the Port of Indiana-Burns Harbor (the state's Great Lakes port, in Portage) and the steel mills; the county 173k. Coast type, like Waukegan.
    { id: "PTGE", name: "Portage", county: "in-porter", lat: 41.58, lon: -87.18, port: "Port of Indiana–Burns Harbor", type: "coast", size: 2, pop: 173, main: true, level: "north" },
    // Michigan City: LaPorte County's biggest city (32,060, ahead of La Porte, the seat, 22,449), the Lake Michigan harbour with the lighthouse, outlet mall and the South Shore Line; the county 112k. Downtown at the harbour, 2 mi west of the Census point.
    { id: "MCTY", name: "Michigan City", county: "in-laporte", lat: 41.72, lon: -86.9, type: "coast", size: 2, pop: 112, main: true, level: "north" },
    // South Bend: Indiana's fourth city (103,436; the county 273k, size 2 like Kalamazoo's 262k), on the St. Joseph River, with the University of Notre Dame (the Golden Dome, 2 mi north, scenic) and the South Shore Line. Downtown; Notre Dame is the scenic flag, not a separate town (it is 2 mi away).
    { id: "SBND", name: "South Bend", county: "in-st-joseph", lat: 41.68, lon: -86.25, scenic: true, type: "metro", size: 2, pop: 273, main: true, level: "north" },
    // Elkhart: Elkhart County's biggest city (53,918, ahead of Goshen, 34,505), the RV and band-instrument capital, on the St. Joseph River, I-80/90 and the Toll Road; the county 207k. Downtown.
    { id: "ELKT", name: "Elkhart", county: "in-elkhart", lat: 41.68, lon: -85.98, type: "metro", size: 2, pop: 207, main: true, level: "north" },
    // Plymouth: the biggest place of the group (10,216; Marshall's seat), on the Yellow River and US-30/US-31; the two counties 69k.
    { id: "PLMT", name: "Plymouth", county: "in-marshall-starke", lat: 41.35, lon: -86.31, type: "farm", size: 2, pop: 69, main: true, level: "north" },
    // Rochester: the biggest place of the group by a narrow margin (6,274, then Monticello 5,515 and Winamac 2,320), Fulton's seat on US-31 and Lake Manitou; the three counties 58k.
    { id: "RCHS", name: "Rochester", county: "in-fulton-pulaski-white", lat: 41.06, lon: -86.22, type: "farm", size: 1, pop: 58, main: true, level: "north" },
    // Rensselaer: the biggest place of the group (5,730; Jasper's seat) on the Iroquois River, US-231 and I-65, in the corn and soy plain of north-west Indiana; the three counties 55k.
    { id: "RNSL", name: "Rensselaer", county: "in-benton-jasper-newton", lat: 40.94, lon: -87.15, type: "farm", size: 1, pop: 55, main: true, level: "north" },
    // Logansport: the biggest place of the group (18,379; Cass's seat), where the Eel meets the Wabash, US-24/US-35; the two counties 58k. Downtown.
    { id: "LGNS", name: "Logansport", county: "in-carroll-cass", lat: 40.75, lon: -86.36, type: "farm", size: 2, pop: 58, main: true, level: "north" },
    // Frankfort: the biggest place of the group (16,715; Clinton's seat), on US-421 and US-27 near I-65; the two counties 49k.
    { id: "FRKI", name: "Frankfort", county: "in-clinton-tipton", lat: 40.28, lon: -86.51, type: "farm", size: 2, pop: 49, main: true, level: "north" },
    // Lafayette: Tippecanoe's seat and biggest city (70,792; the county 186k), on the Wabash and I-65, with Purdue University across the river in West Lafayette (44,446, 3 mi, a campus the station stands in for). Downtown.
    { id: "LAFY", name: "Lafayette", county: "in-tippecanoe", lat: 40.42, lon: -86.89, type: "metro", size: 2, pop: 186, main: true, level: "north" },
    // Crawfordsville: the biggest place of the group (16,320; Montgomery's seat), Wabash College, on I-74 and US-231/US-136; the three counties 63k.
    { id: "CRFD", name: "Crawfordsville", county: "in-fountain-montgomery-warren", lat: 40.04, lon: -86.9, type: "farm", size: 2, pop: 63, main: true, level: "north" },
    // Terre Haute: Vigo's seat and biggest city (58,416; the county 106k), on the Wabash, I-70 and I-40/US-41, Indiana State University. Downtown, 2 mi west of the Census point.
    { id: "TRHT", name: "Terre Haute", county: "in-vigo", lat: 39.47, lon: -87.41, type: "metro", size: 2, pop: 106, main: true, level: "north" },
    // Brazil: the biggest place of the group (8,181, then Clinton 4,830 and Rockville 2,512), Clay's seat on US-40, the old coalfield; the three counties 58k.
    { id: "BRZL", name: "Brazil", county: "in-clay-parke-vermillion", lat: 39.52, lon: -87.12, type: "farm", size: 1, pop: 58, main: true, level: "north" },
    // Level 4: southern Indiana and the Ohio River
    // Columbus: Bartholomew's seat and biggest city (50,496; the county 82k), Cummins's home town and the architecture showcase (Eliel Saarinen's church, I. M. Pei's library, Harry Weese and Eero Saarinen houses) that earned it the 'Athens of the Prairie' name, scenic. Downtown, on I-65.
    { id: "CBUS", name: "Columbus", county: "in-bartholomew", lat: 39.2, lon: -85.92, scenic: true, type: "farm", size: 2, pop: 82, main: true, level: "south" },
    // Bloomington: Monroe's seat and biggest city (79,148; the county 140k), Indiana University, on SR-37 and SR-45, by Lake Monroe. Downtown, courthouse square, a mile from the Census point.
    { id: "BLMI", name: "Bloomington", county: "in-monroe", lat: 39.17, lon: -86.53, type: "metro", size: 2, pop: 140, main: true, level: "south" },
    // Seymour: the biggest place of the group (21,572; Brownstown is Jackson's seat, John Mellencamp's home town) on I-65 and US-50; the two counties 62k. Nashville (Brown) is a scenic town.
    { id: "SEYM", name: "Seymour", county: "in-brown-jackson", lat: 38.96, lon: -85.89, type: "farm", size: 2, pop: 62, main: true, level: "south" },
    // Bedford: the biggest place of the group (13,801; Lawrence's seat), the limestone capital (the Empire State Building's stone), on US-50 and SR-37; the three counties 75k.
    { id: "BEDF", name: "Bedford", county: "in-lawrence-martin-orange", lat: 38.86, lon: -86.49, type: "farm", size: 2, pop: 75, main: true, level: "south" },
    // Greencastle: the biggest place of the group (9,802; Putnam's seat, DePauw University), on US-231 and I-70; the two counties 58k.
    { id: "GRCS", name: "Greencastle", county: "in-owen-putnam", lat: 39.64, lon: -86.85, type: "farm", size: 1, pop: 58, main: true, level: "south" },
    // Washington: the biggest place of the group (12,043; Daviess's seat) on US-50 and US-150; the two counties 64k.
    { id: "WSDV", name: "Washington", county: "in-daviess-greene", lat: 38.66, lon: -87.17, type: "farm", size: 2, pop: 64, main: true, level: "south" },
    // Jasper: the biggest place of the group (16,704; Dubois's seat), the German-heritage furniture town on I-64 and SR-162 (Huntingburg 6,364 next door); the two counties 56k.
    { id: "JASI", name: "Jasper", county: "in-dubois-pike", lat: 38.39, lon: -86.93, type: "farm", size: 2, pop: 56, main: true, level: "south" },
    // Vincennes: the biggest place of the group (16,775; Knox's seat), Indiana's oldest city, on the Wabash, US-41 and US-50, with the George Rogers Clark National Historical Park (NPS) and Grouseland (the home of William Henry Harrison), scenic; Illinois's Lawrenceville is across the river. Downtown; the two counties 57k.
    { id: "VNCN", name: "Vincennes", county: "in-knox-sullivan", lat: 38.68, lon: -87.52, scenic: true, type: "farm", size: 2, pop: 57, main: true, level: "south" },
    // Princeton: the biggest place of the group (8,297; Gibson's seat), on I-64 and US-41; Mount Vernon (6,493, the Ohio River and its Port of Indiana) is a town; the two counties 58k.
    { id: "PRNI", name: "Princeton", county: "in-gibson-posey", lat: 38.36, lon: -87.57, type: "farm", size: 1, pop: 58, main: true, level: "south" },
    // Evansville: Vanderburgh's seat and the state's third city (117,292; the county 180k), on the Ohio River at I-69 and US-41 (the Henderson bridge). Downtown at the riverfront (the Census point, 37.99, -87.53, is 2.5 mi from it).
    { id: "EVNV", name: "Evansville", county: "in-vanderburgh", lat: 37.97, lon: -87.57, type: "metro", size: 2, pop: 180, main: true, level: "south" },
    // Boonville, not Newburgh (3,329, an Ohio River town here): Warrick's seat and biggest city (6,703; the county 64k), on SR-62, 14 mi from Evansville.
    { id: "BNVI", name: "Boonville", county: "in-warrick", lat: 38.05, lon: -87.27, type: "farm", size: 1, pop: 64, main: true, level: "south" },
    // Tell City: the biggest place of the group (7,513; Perry's biggest city, a Swiss-settled Ohio River town), on SR-66 and SR-37; the two counties 39k, kept under 50k (the Ohio River strip between Dubois and Warrick).
    { id: "TLCT", name: "Tell City", county: "in-perry-spencer", lat: 37.95, lon: -86.76, type: "farm", size: 1, pop: 39, main: true, level: "south" },
    // Corydon: the biggest place of the group (3,162; Harrison's seat), Indiana's first state capital (1816), on SR-135 and I-64 near the Ohio River; the two counties 51k.
    { id: "CRDN", name: "Corydon", county: "in-crawford-harrison", lat: 38.21, lon: -86.12, type: "farm", size: 1, pop: 50, main: true, level: "south" },
    // Scottsburg: the biggest place of the group (7,343; Scott's seat) on I-65 and US-31; Salem (6,528, Washington's seat) is a town; the two counties 53k.
    { id: "SCTB", name: "Scottsburg", county: "in-scott-washington", lat: 38.68, lon: -85.78, type: "farm", size: 1, pop: 53, main: true, level: "south" },
    // Batesville: the biggest place of the group (7,200; the biggest of Ripley), the Hillenbrand (caskets, hospital beds) town on I-74 and US-50, with North Vernon (6,614) a town; the two counties 57k.
    { id: "BTVL", name: "Batesville", county: "in-jennings-ripley", lat: 39.3, lon: -85.22, type: "farm", size: 1, pop: 57, main: true, level: "south" },
    // Madison: the biggest place of the group (12,360; Jefferson's seat), the National Historic Landmark Ohio River town with the Milton-Madison Bridge, scenic. Downtown at the riverfront (the Census point is 2 mi north-west); the three counties 49k, kept together as the Ohio River's upper bend (Vevay, Rising Sun).
    { id: "MAIS", name: "Madison", county: "in-jefferson-ohio-switzerland", lat: 38.74, lon: -85.38, scenic: true, type: "farm", size: 2, pop: 49, main: true, level: "south" },
    // Jeffersonville: Clark's seat and biggest city (49,454, ahead of Clarksville, 22,344); the county 121k, Louisville's northern bank across the Ohio River. Put at 38.32, -85.71, the middle of the city limits (the Census point; downtown is at 38.28, -85.74 and 2.8 mi from where Louisville's station will go), so it sits 5.5 mi from Louisville's downtown.
    { id: "JFVL", name: "Jeffersonville", county: "in-clark", lat: 38.32, lon: -85.71, type: "metro", size: 2, pop: 121, main: true, level: "south" },
    // New Albany: Floyd's seat and biggest city (37,820; the county 80k), on the Ohio River next to Louisville's Sherman Minton Bridge. Downtown, 4.4 mi from where Louisville's station will go and 5.9 mi from Jeffersonville's.
    { id: "NWAL", name: "New Albany", county: "in-floyd", lat: 38.3, lon: -85.82, type: "metro", size: 2, pop: 80, main: true, level: "south" },
    // Lawrenceburg, not Greendale (4,608) or Aurora (3,478, a town here): Dearborn's seat and biggest place (5,129; the county 51k), the Ohio River town with Hollywood Casino, in the Cincinnati area. Downtown.
    { id: "LWBG", name: "Lawrenceburg", county: "in-dearborn", lat: 39.1, lon: -84.85, type: "farm", size: 1, pop: 51, main: true, level: "south" },
  ],
  // Towns: the next-biggest real places and the well-known scenic ones, spread out (id = short
  // code, 2 to 4 capitals; scenic = tourists travel there).
  towns: [
    // The Speedway: the Indianapolis 500 (the world's biggest single-day sports event), 4.8 mi north-west of Monument Circle in the town of Speedway; scenic.
    { id: "IMS", name: "Indianapolis Motor Speedway", county: "in-marion", lat: 39.8, lon: -86.24, scenic: true, type: "metro", size: 2 },
    // Lawrence (49,373): Indianapolis's north-east suburb at Fort Benjamin Harrison.
    { id: "LWRI", name: "Lawrence", county: "in-marion", lat: 39.87, lon: -85.99, type: "metro", size: 2 },
    { id: "BCHG", name: "Beech Grove", county: "in-marion", lat: 39.72, lon: -86.09, type: "metro", size: 1 },
    // Fishers (99,046): second by a hair, on I-69 and the Nickel Plate line.
    { id: "FSHR", name: "Fishers", county: "in-hamilton", lat: 39.96, lon: -85.96, type: "metro", size: 2 },
    // Noblesville: the seat, on the White River.
    { id: "NBLV", name: "Noblesville", county: "in-hamilton", lat: 40.05, lon: -86.01, type: "metro", size: 2 },
    // Conner Prairie: the 1836 living-history museum (the Smithsonian affiliate) in Fishers, scenic.
    { id: "CPRA", name: "Conner Prairie", county: "in-hamilton", lat: 39.97, lon: -86.04, scenic: true, type: "farm", size: 1 },
    // Zionsville: the village's brick-street downtown (the Census point, 39.99, -86.32, is the middle of its large limits).
    { id: "ZNVL", name: "Zionsville", county: "in-boone", lat: 39.96, lon: -86.28, type: "metro", size: 2 },
    { id: "BRNS", name: "Brownsburg", county: "in-hendricks", lat: 39.83, lon: -86.39, type: "metro", size: 1 },
    // Danville: Hendricks's seat.
    { id: "DNVN", name: "Danville", county: "in-hendricks", lat: 39.76, lon: -86.5, type: "farm", size: 1 },
    // Franklin: Johnson's seat, Franklin College.
    { id: "FRKN", name: "Franklin", county: "in-johnson", lat: 39.49, lon: -86.05, type: "farm", size: 1 },
    { id: "MCCV", name: "McCordsville", county: "in-hancock", lat: 39.9, lon: -85.92, type: "metro", size: 1 },
    { id: "ELWD", name: "Elwood", county: "in-madison", lat: 40.27, lon: -85.84, type: "farm", size: 1 },
    // Pendleton: Falls Park on the Fall Creek, off I-69.
    { id: "PNDT", name: "Pendleton", county: "in-madison", lat: 40.01, lon: -85.77, type: "farm", size: 1 },
    { id: "MRSV", name: "Mooresville", county: "in-morgan", lat: 39.6, lon: -86.37, type: "farm", size: 1 },
    // Greensburg: Decatur's seat, the 'tree on the courthouse' town, on I-74.
    { id: "GREE", name: "Greensburg", county: "in-decatur-rush-shelby", lat: 39.35, lon: -85.5, type: "farm", size: 1 },
    // Rushville: Rush's seat.
    { id: "RUSI", name: "Rushville", county: "in-decatur-rush-shelby", lat: 39.62, lon: -85.45, type: "farm", size: 1 },
    { id: "NWHV", name: "New Haven", county: "in-allen", lat: 41.07, lon: -85.02, type: "metro", size: 1 },
    { id: "HNTR", name: "Huntertown", county: "in-allen", lat: 41.22, lon: -85.16, type: "metro", size: 1 },
    // Decatur: Adams's seat.
    { id: "DCTI", name: "Decatur", county: "in-adams-wells", lat: 40.83, lon: -84.93, type: "farm", size: 1 },
    // Columbia City: Whitley's seat.
    { id: "CLCI", name: "Columbia City", county: "in-huntington-whitley", lat: 41.16, lon: -85.48, type: "farm", size: 1 },
    // Wabash: the 'first electrically lighted city'.
    { id: "WABA", name: "Wabash", county: "in-miami-wabash", lat: 40.8, lon: -85.83, type: "farm", size: 1 },
    { id: "NMCH", name: "North Manchester", county: "in-miami-wabash", lat: 41, lon: -85.78, type: "farm", size: 1 },
    // Upland: Taylor University.
    { id: "UPLD", name: "Upland", county: "in-grant", lat: 40.46, lon: -85.5, type: "farm", size: 1 },
    { id: "GREI", name: "Greentown", county: "in-howard", lat: 40.48, lon: -85.96, type: "farm", size: 1 },
    { id: "YKTW", name: "Yorktown", county: "in-delaware", lat: 40.18, lon: -85.51, type: "metro", size: 1 },
    // Hartford City: Blackford's seat.
    { id: "HTFC", name: "Hartford City", county: "in-blackford-jay-randolph", lat: 40.45, lon: -85.37, type: "farm", size: 1 },
    // Winchester: Randolph's seat.
    { id: "WNCH", name: "Winchester", county: "in-blackford-jay-randolph", lat: 40.17, lon: -84.98, type: "farm", size: 1 },
    // Knightstown: on the old National Road (US-40) and the Big Blue's neighbour.
    { id: "KNIG", name: "Knightstown", county: "in-henry", lat: 39.8, lon: -85.53, type: "farm", size: 1 },
    // Centerville: on the National Road.
    { id: "CNVI", name: "Centerville", county: "in-wayne", lat: 39.82, lon: -85, type: "farm", size: 1 },
    // Cambridge City.
    { id: "CMCT", name: "Cambridge City", county: "in-wayne", lat: 39.81, lon: -85.17, type: "farm", size: 1 },
    // Brookville: Franklin's seat, by Brookville Lake.
    { id: "BROI", name: "Brookville", county: "in-fayette-franklin-union", lat: 39.42, lon: -85.01, type: "farm", size: 1 },
    // Liberty: Union's seat.
    { id: "LBRT", name: "Liberty", county: "in-fayette-franklin-union", lat: 39.63, lon: -84.93, type: "farm", size: 1 },
    // Kendallville: Noble's biggest city, on the Fort Wayne-Chicago rail line.
    { id: "KNDV", name: "Kendallville", county: "in-dekalb-noble", lat: 41.44, lon: -85.26, type: "farm", size: 1 },
    // Ligonier: the Syracuse and Amish-edge town on US-33.
    { id: "LGNR", name: "Ligonier", county: "in-dekalb-noble", lat: 41.46, lon: -85.6, type: "farm", size: 1 },
    // Shipshewana: the Amish country's tourist centre (the Menno-Hof, the Shipshewana Flea Market), scenic.
    { id: "SHPS", name: "Shipshewana", county: "in-lagrange-steuben", lat: 41.67, lon: -85.58, scenic: true, type: "farm", size: 1 },
    // Lagrange: the seat.
    { id: "LAGR", name: "Lagrange", county: "in-lagrange-steuben", lat: 41.65, lon: -85.42, type: "farm", size: 1 },
    // Syracuse: Lake Wawasee (Indiana's biggest natural lake).
    { id: "SYR", name: "Syracuse", county: "in-kosciusko", lat: 41.42, lon: -85.75, type: "farm", size: 1 },
    // Hammond (77,854): the county's biggest, on the Illinois line (the Calumet region), 9 mi west of Gary and 18 mi from Chicago's Loop station.
    { id: "HAMM", name: "Hammond", county: "in-lake", lat: 41.62, lon: -87.49, type: "metro", size: 3 },
    // Crown Point: Lake's seat ('Hoosier Gretna Green'), by I-65.
    { id: "CRPT", name: "Crown Point", county: "in-lake", lat: 41.41, lon: -87.35, type: "farm", size: 1 },
    // Valparaiso: Porter's seat, Valparaiso University.
    { id: "VLPR", name: "Valparaiso", county: "in-porter", lat: 41.48, lon: -87.05, type: "metro", size: 1 },
    // Indiana Dunes National Park (NPS, 2019): the Lake Michigan shore dunes, at the Visitor Center near Porter / Beverly Shores, scenic.
    { id: "DUNE", name: "Indiana Dunes National Park", county: "in-porter", lat: 41.65, lon: -87.06, scenic: true, type: "coast", size: 1 },
    // La Porte: the seat.
    { id: "LAPT", name: "La Porte", county: "in-laporte", lat: 41.61, lon: -86.71, type: "farm", size: 1 },
    // Goshen: the Amish country's county city.
    { id: "GSHN", name: "Goshen", county: "in-elkhart", lat: 41.57, lon: -85.83, type: "farm", size: 1 },
    { id: "NPNE", name: "Nappanee", county: "in-elkhart", lat: 41.45, lon: -86, type: "farm", size: 1 },
    // Middlebury: the Amish country (Pumpkinvine Trail).
    { id: "MDBR", name: "Middlebury", county: "in-elkhart", lat: 41.67, lon: -85.71, type: "farm", size: 1 },
    { id: "BRMN", name: "Bremen", county: "in-marshall-starke", lat: 41.45, lon: -86.15, type: "farm", size: 1 },
    // Knox: Starke's seat.
    { id: "KNOX", name: "Knox", county: "in-marshall-starke", lat: 41.29, lon: -86.62, type: "farm", size: 1 },
    // Monticello: White's seat on Lake Freeman and Indiana Beach.
    { id: "MON", name: "Monticello", county: "in-fulton-pulaski-white", lat: 40.75, lon: -86.77, type: "farm", size: 1 },
    // Winamac: Pulaski's seat.
    { id: "WNMC", name: "Winamac", county: "in-fulton-pulaski-white", lat: 41.05, lon: -86.6, type: "farm", size: 1 },
    { id: "DEM", name: "DeMotte", county: "in-benton-jasper-newton", lat: 41.2, lon: -87.2, type: "farm", size: 1 },
    // Fowler: Benton's seat.
    { id: "FWLR", name: "Fowler", county: "in-benton-jasper-newton", lat: 40.62, lon: -87.32, type: "farm", size: 1 },
    // Kentland: Newton's seat.
    { id: "KNTL", name: "Kentland", county: "in-benton-jasper-newton", lat: 40.77, lon: -87.45, type: "farm", size: 1 },
    // Delphi: Carroll's seat on the Wabash and Erie Canal.
    { id: "DLPH", name: "Delphi", county: "in-carroll-cass", lat: 40.58, lon: -86.67, type: "farm", size: 1 },
    // Tipton: the seat of Tipton.
    { id: "TIP", name: "Tipton", county: "in-clinton-tipton", lat: 40.28, lon: -86.04, type: "farm", size: 1 },
    // Battle Ground: the Tippecanoe Battlefield (1811, Prophetstown State Park), scenic.
    { id: "BTGR", name: "Battle Ground", county: "in-tippecanoe", lat: 40.51, lon: -86.85, scenic: true, type: "farm", size: 1 },
    // Attica: Fountain's Wabash river town.
    { id: "ATTC", name: "Attica", county: "in-fountain-montgomery-warren", lat: 40.29, lon: -87.25, type: "farm", size: 1 },
    // Covington: Fountain's seat.
    { id: "CVNI", name: "Covington", county: "in-fountain-montgomery-warren", lat: 40.14, lon: -87.39, type: "farm", size: 1 },
    { id: "SLVL", name: "Seelyville", county: "in-vigo", lat: 39.49, lon: -87.27, type: "farm", size: 1 },
    // Clinton: Vermillion's biggest, on the Wabash.
    { id: "CLNI", name: "Clinton", county: "in-clay-parke-vermillion", lat: 39.66, lon: -87.4, type: "farm", size: 1 },
    // Rockville: Parke's seat, the 'covered bridge capital'.
    { id: "RCKV", name: "Rockville", county: "in-clay-parke-vermillion", lat: 39.77, lon: -87.23, type: "farm", size: 1 },
    // Turkey Run State Park (Indiana DNR): the sandstone gorges and Sugar Creek, by Marshall in Parke, scenic.
    { id: "TRKR", name: "Turkey Run State Park", county: "in-clay-parke-vermillion", lat: 39.88, lon: -87.2, scenic: true, type: "mountain", size: 1 },
    // Hope: the Moravian town.
    { id: "HOPI", name: "Hope", county: "in-bartholomew", lat: 39.3, lon: -85.77, type: "farm", size: 1 },
    { id: "ELTV", name: "Ellettsville", county: "in-monroe", lat: 39.23, lon: -86.62, type: "farm", size: 1 },
    // Nashville: the seat of Brown County, the hills' art colony and state park, 'the Little Smokies', scenic.
    { id: "NSHI", name: "Nashville", county: "in-brown-jackson", lat: 39.21, lon: -86.24, scenic: true, type: "mountain", size: 1 },
    // Brownstown: Jackson's seat.
    { id: "BRTW", name: "Brownstown", county: "in-brown-jackson", lat: 38.88, lon: -86.05, type: "farm", size: 1 },
    // Paoli: Orange's seat.
    { id: "PAOI", name: "Paoli", county: "in-lawrence-martin-orange", lat: 38.56, lon: -86.47, type: "farm", size: 1 },
    // French Lick: the springs resort (French Lick Springs Hotel and West Baden Springs Hotel, a National Historic Landmark), scenic.
    { id: "FRLK", name: "French Lick", county: "in-lawrence-martin-orange", lat: 38.55, lon: -86.62, scenic: true, type: "mountain", size: 1 },
    // Loogootee: Martin's biggest.
    { id: "LGTE", name: "Loogootee", county: "in-lawrence-martin-orange", lat: 38.68, lon: -86.91, type: "farm", size: 1 },
    // Spencer: Owen's seat, by McCormick's Creek State Park.
    { id: "SPEI", name: "Spencer", county: "in-owen-putnam", lat: 39.29, lon: -86.77, type: "farm", size: 1 },
    { id: "CLVD", name: "Cloverdale", county: "in-owen-putnam", lat: 39.52, lon: -86.8, type: "farm", size: 1 },
    // Linton: Greene's biggest.
    { id: "LNTN", name: "Linton", county: "in-daviess-greene", lat: 39.04, lon: -87.16, type: "farm", size: 1 },
    // Bloomfield: Greene's seat.
    { id: "BLFD", name: "Bloomfield", county: "in-daviess-greene", lat: 39.03, lon: -86.94, type: "farm", size: 1 },
    // Huntingburg: League Stadium (A League of Their Own was filmed here).
    { id: "HNTB", name: "Huntingburg", county: "in-dubois-pike", lat: 38.3, lon: -86.96, type: "farm", size: 1 },
    // Petersburg: Pike's seat.
    { id: "PETE", name: "Petersburg", county: "in-dubois-pike", lat: 38.49, lon: -87.28, type: "farm", size: 1 },
    // Sullivan: the seat of Sullivan.
    { id: "SUL", name: "Sullivan", county: "in-knox-sullivan", lat: 39.1, lon: -87.41, type: "farm", size: 1 },
    { id: "BCKN", name: "Bicknell", county: "in-knox-sullivan", lat: 38.77, lon: -87.31, type: "farm", size: 1 },
    // Mount Vernon: Posey's seat on the Ohio River, with the Port of Indiana-Mount Vernon (Southwind Maritime Centre).
    { id: "MOU", name: "Mount Vernon", county: "in-gibson-posey", lat: 37.94, lon: -87.9, type: "farm", size: 1 },
    // New Harmony: the 1814 Harmonist and 1825 Owenite Utopian communities on the Wabash, a National Historic Landmark, scenic.
    { id: "NHMY", name: "New Harmony", county: "in-gibson-posey", lat: 38.13, lon: -87.93, scenic: true, type: "farm", size: 1 },
    // Newburgh: Warrick's Ohio River town, 9 mi east of Evansville.
    { id: "NWBG", name: "Newburgh", county: "in-warrick", lat: 37.95, lon: -87.41, type: "farm", size: 1 },
    // Santa Claus: the town (post office, Holiday World, Santa Claus Land, 1946), scenic.
    { id: "SANT", name: "Santa Claus", county: "in-perry-spencer", lat: 38.12, lon: -86.93, scenic: true, type: "farm", size: 1 },
    // Rockport: Spencer's seat on the Ohio River.
    { id: "ROC", name: "Rockport", county: "in-perry-spencer", lat: 37.89, lon: -87.05, type: "farm", size: 1 },
    // English: Crawford's seat.
    { id: "ENGL", name: "English", county: "in-crawford-harrison", lat: 38.34, lon: -86.46, type: "farm", size: 1 },
    // Salem: Washington's seat.
    { id: "SALE", name: "Salem", county: "in-scott-washington", lat: 38.6, lon: -86.1, type: "farm", size: 1 },
    // North Vernon: Jennings's biggest city, on US-50/US-31.
    { id: "NVRN", name: "North Vernon", county: "in-jennings-ripley", lat: 39.01, lon: -85.63, type: "farm", size: 1 },
    // Rising Sun: Ohio's seat, on the Ohio River, with a riverboat casino.
    { id: "RSSN", name: "Rising Sun", county: "in-jefferson-ohio-switzerland", lat: 38.95, lon: -84.85, type: "farm", size: 1 },
    // Vevay: Switzerland's seat, the Swiss wine-growers' town.
    { id: "VEVY", name: "Vevay", county: "in-jefferson-ohio-switzerland", lat: 38.74, lon: -85.08, type: "farm", size: 1 },
    // Charlestown: by Charlestown State Park and the Ohio River, on I-265/SR-62.
    { id: "CHAR", name: "Charlestown", county: "in-clark", lat: 38.43, lon: -85.67, type: "farm", size: 1 },
    { id: "SLLR", name: "Sellersburg", county: "in-clark", lat: 38.4, lon: -85.77, type: "metro", size: 1 },
    { id: "GEO", name: "Georgetown", county: "in-floyd", lat: 38.3, lon: -85.96, type: "farm", size: 1 },
    // Aurora: the Ohio River town (Hillforest mansion).
    { id: "AURI", name: "Aurora", county: "in-dearborn", lat: 39.06, lon: -84.91, type: "farm", size: 1 },
  ],
  // Indiana has no mountains on its map (the highest hills, in the south, are only hills), so
  // there are no passes.
  passes: [],
  // Real bridges: [name, latitude, longitude]. A river or lake crossed near one uses the real
  // bridge (cheaper, and any length); anywhere else you build a new one, if the water is narrow
  // enough. River bridges stand on the map's river where it passes the town; the Kentucky bridges
  // are named as Kentucky's pack will (sources in NOTES.md). Illinois's pack lists the Vincennes,
  // Mount Carmel, Shawneetown and Cave-In-Rock crossings.
  bridges: [
    // The Ohio (Kentucky comes later; these are the real crossings)
    ["Twin Bridges (Evansville–Henderson, US-41)", 37.95, -87.58],
    ["Sherman Minton Bridge (I-64, New Albany–Louisville)", 38.27, -85.83],
    ["Kennedy Bridge (I-65, Jeffersonville–Louisville)", 38.27, -85.75],
    ["Clark Memorial Bridge (Second Street, Jeffersonville–Louisville)", 38.27, -85.74],
    ["Lewis and Clark Bridge (I-265, Utica–Prospect)", 38.37, -85.64],
    ["Milton–Madison Bridge (US-421)", 38.74, -85.38],
    ["Matthew E. Welsh Bridge (Mauckport–Brandenburg)", 38.02, -86.18],
    ["Tell City–Troy Ferry (Ohio River)", 37.94, -86.78],
    ["William H. Natcher Bridge (Rockport–Owensboro, US-231)", 37.85, -87.06],
    ["Combs–Hehl Bridge (I-275, Lawrenceburg)", 39.08, -84.85],
    ["Rising Sun–Rabbit Hash Ferry (Ohio River)", 38.95, -84.85],
    ["Markland Dam bridge (Vevay–Warsaw, KY)", 38.78, -84.96],
    // The Wabash
    ["Harmony Way Bridge (New Harmony–Grayville)", 38.14, -87.94],
    ["Lincoln Memorial Bridge (Lawrenceville–Vincennes)", 38.70, -87.54],
    ["Wabash River bridges (Terre Haute, I-70 and US-40)", 39.48, -87.45],
    ["Wabash River bridge (Covington)", 40.13, -87.42],
    ["Wabash River bridge (Attica)", 40.30, -87.27],
    ["Wabash River bridges (Lafayette–West Lafayette)", 40.42, -86.91],
    ["Wabash River bridge (Delphi)", 40.60, -86.70],
    ["Wabash River bridges (Logansport)", 40.75, -86.36],
    ["Wabash River bridge (Peru)", 40.76, -86.07],
    ["Wabash River bridge (Wabash)", 40.81, -85.82],
    ["Wabash River bridge (Huntington)", 40.87, -85.52],
    ["Wabash River bridge (Bluffton)", 40.75, -85.16],
    // The White River
    ["White River bridges (Indianapolis)", 39.77, -86.18],
    ["White River bridge (Noblesville)", 40.05, -86.02],
    ["White River bridges (Anderson)", 40.12, -85.69],
    ["White River bridge (Muncie)", 40.20, -85.40],
    ["White River bridge (Martinsville)", 39.44, -86.44],
    ["White River bridge (Spencer)", 39.28, -86.75],
    ["White River bridge (Petersburg)", 38.52, -87.28],
    // The Tippecanoe, the St. Joseph and the rivers of Fort Wayne
    ["Tippecanoe River bridge (Monticello)", 40.75, -86.76],
    ["Tippecanoe River bridge (Winamac)", 41.05, -86.59],
    ["St. Joseph River bridges (South Bend)", 41.68, -86.25],
    ["St. Joseph River bridges (Mishawaka)", 41.66, -86.17],
    ["St. Joseph River bridges (Elkhart)", 41.68, -85.97],
    ["St. Marys River bridges (Fort Wayne)", 41.07, -85.14],
    ["St. Joseph River bridges (Fort Wayne)", 41.11, -85.11],
    ["Maumee River bridge (Fort Wayne)", 41.08, -85.10],
    ["St. Marys River bridge (Decatur)", 40.83, -84.93],
    ["Big Blue River bridge (Shelbyville)", 39.53, -85.78],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills; dry = sand, cacti
  // or sagebrush. Counties not listed are green farmland (the Corn Belt).
  biomes: {
    // The Hoosier National Forest and the hills of Brown, Lawrence, Orange, Crawford and Perry
    forest: ["in-brown-jackson", "in-lawrence-martin-orange", "in-crawford-harrison", "in-perry-spencer"],
    // The southern hills and the Ohio, Wabash, Whitewater and White river valleys, and the
    // Indiana Dunes' woods along Lake Michigan
    wooded: ["in-monroe", "in-owen-putnam", "in-scott-washington", "in-clay-parke-vermillion", "in-jefferson-ohio-switzerland", "in-dearborn", "in-jennings-ripley", "in-fayette-franklin-union", "in-morgan", "in-daviess-greene", "in-dubois-pike", "in-porter", "in-laporte"],
  },
  levels: [
    {
      name: "Indianapolis & Central Indiana",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        // Indianapolis to Anderson, as I-69 runs
        { kind: "connect", a: "INDY", b: "ANDN" },
      ],
    },
    {
      name: "Fort Wayne & the East",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Indianapolis to Fort Wayne, as I-69 runs
        { kind: "connect", a: "INDY", b: "FTWY" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "Lake Michigan, the North & the Wabash",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Indianapolis to Gary, as I-65 runs
        { kind: "connect", a: "INDY", b: "GARY" },
        { kind: "cargo", cargo: "containers", target: 10 },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Southern Indiana & the Ohio River",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Indianapolis to Evansville, as I-69 runs
        { kind: "connect", a: "INDY", b: "EVNV" },
        { kind: "counties", target: 30 },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
});
