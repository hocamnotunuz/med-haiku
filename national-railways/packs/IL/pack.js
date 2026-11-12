// National Railways pack: Illinois.
// Everything hand-made for one state: main stations, towns, levels, bridges and where the forests
// are. The county borders come from map.js and the rivers and lakes from terrain.js (Illinois has
// no real mountains on its map, so there are no passes). What each field means: PACKS.md.
// Judgment calls and sources: packs/IL/NOTES.md. Cities and populations: U.S. Census Bureau (2020),
// packs/IL/raw.
NR.addPack({
  code: "IL",
  name: "Illinois",
  // A game that starts here begins owning Cook (Chicago), Lake (Waukegan, a Lake Michigan harbour:
  // coast) and McHenry (Crystal Lake, metro). Lake and McHenry both touch Cook and touch each
  // other, and the first track (Chicago to Waukegan, the nearest pair of different types) has
  // riders, as Milwaukee, Racine and Waukesha in Wisconsin.
  start: ["il-cook", "il-lake", "il-mchenry"],
  // Main stations: one per county region, at its biggest place except where noted. id = the short
  // code shown on passengers (4 letters ending in I where the plain code is taken by another
  // state). county = region id in this folder's map.js. pop = region population in thousands
  // (2020 census). size = how busy (1 to 5). level = which level unlocks it in Levels mode. Points
  // are the Census points, except the downtowns of the cities noted (NOTES.md).
  stations: [
    // Level 1: Chicagoland
    // Chicago: the biggest city in the Midwest (2,746,352; Cook County 5.28 million, the biggest region outside Los Angeles, size 5). Put at the Loop, 3 mi north-east of the Census point (the Census point is the geographic middle of the city limits). O'Hare (and Midway) are in the city, so it holds the airport; the Port of Chicago on Lake Michigan (Calumet Harbor) is a real Great Lakes port. Scenic for the lakefront (Millennium Park, Navy Pier, the Art Institute).
    { id: "CHGO", name: "Chicago", county: "il-cook", lat: 41.88, lon: -87.63, scenic: true, airport: "O'Hare International Airport", port: "Port of Chicago", type: "metro", size: 5, pop: 5276, main: true, level: "chicago" },
    // Naperville: DuPage's biggest city (149,551; the county 933k, size 4 like Milwaukee's 939k). Downtown on the DuPage River, 1.5 mi north of the Census point; Wheaton, the county seat, is a town.
    { id: "NPV", name: "Naperville", county: "il-dupage", lat: 41.77, lon: -88.15, type: "metro", size: 4, pop: 933, main: true, level: "chicago" },
    // Waukegan: Lake County's biggest city (89,312; the county 714k), a Lake Michigan harbour city like Kenosha, so coast (it also gives the start a second type of place). Downtown by the harbour, 2 mi east of the Census point.
    { id: "WKG", name: "Waukegan", county: "il-lake", lat: 42.36, lon: -87.84, type: "coast", size: 3, pop: 714, main: true, level: "chicago" },
    // Joliet: Will's biggest city (150,393; the county 697k), the seat, on I-55/I-80 and the Des Plaines River. Downtown, 4 mi east of the Census point (city limits are wide).
    { id: "JLET", name: "Joliet", county: "il-will", lat: 41.52, lon: -88.08, type: "metro", size: 3, pop: 697, main: true, level: "chicago" },
    // Aurora: Kane's biggest city (180,530, Illinois's second city; the county 517k). Downtown on the Fox River, 1.5 mi west of the Census point; Elgin is a town.
    { id: "AURL", name: "Aurora", county: "il-kane", lat: 41.76, lon: -88.32, type: "metro", size: 3, pop: 517, main: true, level: "chicago" },
    // Crystal Lake: McHenry's biggest city (40,254; the county 310k) on the Union Pacific North line (Metra) and US-14. Downtown, 1 mi from the Census point.
    { id: "CLKE", name: "Crystal Lake", county: "il-mchenry", lat: 42.24, lon: -88.32, type: "metro", size: 2, pop: 310, main: true, level: "chicago" },
    // Oswego: Kendall's biggest village (34,602; the county 132k, the fastest-growing in the state); Yorkville, the seat, is a town. Farm: most of the county is still corn and soy.
    { id: "OSW", name: "Oswego", county: "il-kendall", lat: 41.68, lon: -88.35, type: "farm", size: 2, pop: 132, main: true, level: "chicago" },
    // Kankakee: Kankakee's biggest city (24,075; the county 108k), on I-57 and the Kankakee River; with Bourbonnais and Bradley next door. Downtown, 1 mi south of the Census point.
    { id: "KNK", name: "Kankakee", county: "il-kankakee", lat: 41.12, lon: -87.86, type: "farm", size: 2, pop: 108, main: true, level: "chicago" },
    // Morris: Grundy's seat and biggest city (14,183) on the Illinois River and I-80; Channahon and Minooka, bigger-ish Joliet suburbs, are in the county but are not in a place of their own here. Downtown, 1.5 mi south of the Census point.
    { id: "MRS", name: "Morris", county: "il-grundy", lat: 41.36, lon: -88.42, type: "farm", size: 1, pop: 53, main: true, level: "chicago" },
    // DeKalb: DeKalb's biggest city (40,303; the county 100k), Northern Illinois University and the barbed-wire town, on I-88. Farm (corn country).
    { id: "DKB", name: "DeKalb", county: "il-dekalb", lat: 41.93, lon: -88.75, type: "farm", size: 2, pop: 100, main: true, level: "chicago" },
    // Level 2: Rockford, the Quad Cities and the north-west
    // Rockford: Illinois's third city (148,924; the county 285k), on the Rock River and I-90. Downtown, 2 mi west of the Census point.
    { id: "RFDL", name: "Rockford", county: "il-winnebago", lat: 42.27, lon: -89.09, type: "metro", size: 2, pop: 285, main: true, level: "north" },
    // Belvidere: Boone's seat and biggest city (25,345), on I-90 and the Kishwaukee River, home of the Stellantis plant. Downtown.
    { id: "BLVD", name: "Belvidere", county: "il-boone", lat: 42.26, lon: -88.84, type: "farm", size: 1, pop: 53, main: true, level: "north" },
    // Rochelle: The biggest place in Ogle (9,453), where I-39 meets the Union Pacific and BNSF (the big rail hub, with Rochelle's rail park). Oregon, the seat, and Byron are towns.
    { id: "RCHL", name: "Rochelle", county: "il-ogle", lat: 41.92, lon: -89.07, type: "farm", size: 1, pop: 52, main: true, level: "north" },
    // Dixon: Lee's seat and biggest city (15,290) on the Rock River and I-88 (Ronald Reagan's boyhood town).
    { id: "DXN", name: "Dixon", county: "il-lee", lat: 41.84, lon: -89.48, type: "farm", size: 1, pop: 34, main: true, level: "north" },
    // Sterling: Whiteside's biggest city (14,875), on the Rock River and I-88, next to Rock Falls (8,791, 2 mi away: the twin is left out for spacing).
    { id: "STLG", name: "Sterling", county: "il-whiteside", lat: 41.8, lon: -89.7, type: "farm", size: 1, pop: 56, main: true, level: "north" },
    // Freeport: The group's biggest place (23,967), Stephenson's seat on US-20 and the Pecatonica River. Galena (3,316, the famous Grant and lead-mining town) and the Mississippi Palisades are scenic towns.
    { id: "FPT", name: "Freeport", county: "il-carroll-jo-daviess-stephenson", lat: 42.3, lon: -89.62, type: "farm", size: 1, pop: 82, main: true, level: "north" },
    // Moline: Rock Island County's biggest city (42,991; the county 145k), the Quad Cities' Illinois side (John Deere). The Census point is 41.48,-90.49; moved 1 km north-west to 41.49,-90.50, still 4.6 mi from Davenport's station (Davenport is Iowa's size-2 station across the river). Rock Island (37,110) is ~3 mi from Davenport's station, so it is not a town here; East Moline is.
    { id: "MOL", name: "Moline", county: "il-rock-island", lat: 41.49, lon: -90.5, type: "metro", size: 2, pop: 145, main: true, level: "north" },
    // Kewanee: Henry's biggest city (12,498), the 'hog capital', on US-34; Geneseo (6,536) is a town. A small exception: the county is 49k and stays alone as in phase 1.
    { id: "KWN", name: "Kewanee", county: "il-henry", lat: 41.24, lon: -89.93, type: "farm", size: 1, pop: 49, main: true, level: "north" },
    // Princeton: The group's biggest place (7,831), Bureau's seat on I-80 and the Burlington line; Spring Valley (5,573) is a town.
    { id: "PRCT", name: "Princeton", county: "il-bureau-putnam-stark", lat: 41.38, lon: -89.46, type: "farm", size: 1, pop: 44, main: true, level: "north" },
    // Ottawa: LaSalle's biggest city (18,856; the county 110k), the seat, on the Illinois River at the mouth of the Fox, on I-80. LaSalle and Peru (9,591 and 9,948), at the head of the Illinois River's navigation, are also in the county but are not a place of their own here (Spring Valley is a town).
    { id: "OTW", name: "Ottawa", county: "il-lasalle", lat: 41.35, lon: -88.84, type: "farm", size: 2, pop: 110, main: true, level: "north" },
    // Galesburg: Knox's biggest city (30,045; the county 50k): Carl Sandburg's town on the BNSF main line (Chicago to the West) and the Amtrak Southwest Chief and Illinois Zephyr. Exactly 50k, so it stays alone.
    { id: "GBG", name: "Galesburg", county: "il-knox", lat: 40.95, lon: -90.37, type: "farm", size: 1, pop: 50, main: true, level: "north" },
    // Monmouth: The group's biggest place (8,905), Warren's seat on US-34 (the BNSF main line to Burlington). Aledo, Mercer's seat, is a town.
    { id: "MNMT", name: "Monmouth", county: "il-henderson-mercer-warren", lat: 40.91, lon: -90.64, type: "farm", size: 1, pop: 39, main: true, level: "north" },
    // Macomb: The group's biggest place (15,049), McDonough's seat and Western Illinois University, on US-67 and US-136. Nauvoo and Carthage (Hancock) are towns.
    { id: "MCB", name: "Macomb", county: "il-hancock-mcdonough", lat: 40.47, lon: -90.68, type: "farm", size: 1, pop: 45, main: true, level: "north" },
    // Quincy: Adams's biggest city (39,473; the county 66k), the 'Gem City' on the Mississippi bluffs, facing Missouri (Hannibal's station is 15 mi south-west across the Bayview and Quincy bridges). Downtown, 1.5 mi west of the Census point.
    { id: "QNCY", name: "Quincy", county: "il-adams", lat: 39.93, lon: -91.4, type: "farm", size: 2, pop: 66, main: true, level: "north" },
    // Level 3: Peoria, Springfield, Champaign and the prairie
    // Peoria: Peoria's biggest city (113,174; the county 182k), on the Illinois River; Caterpillar's home. At downtown (the river front and Murray Baker Bridge), 4.5 mi south of the Census point (which is in the northern suburbs).
    { id: "PIA", name: "Peoria", county: "il-peoria", lat: 40.69, lon: -89.59, type: "metro", size: 2, pop: 182, main: true, level: "central" },
    // Pekin: Tazewell's biggest city (31,748; the county 131k) and seat, on the Illinois River and 8 mi from Peoria. East Peoria (22,482) is only 2.5 mi from Peoria's station so it is left out; Morton and Washington are towns.
    { id: "PKN", name: "Pekin", county: "il-tazewell", lat: 40.57, lon: -89.64, type: "farm", size: 2, pop: 131, main: true, level: "central" },
    // Eureka: The group's biggest place (5,224), Woodford's seat on US-24 (the Eureka College of Ronald Reagan). Metamora (3,902) is close behind. Lacon, on the Illinois River, is Marshall's town.
    { id: "ERK", name: "Eureka", county: "il-marshall-woodford", lat: 40.71, lon: -89.28, type: "farm", size: 1, pop: 50, main: true, level: "central" },
    // Canton: The group's biggest place (13,318), Fulton's seat, on US-136 and the BNSF line. Havana (Mason's seat, Illinois River) is a town.
    { id: "CNTI", name: "Canton", county: "il-fulton-mason", lat: 40.56, lon: -90.03, type: "farm", size: 1, pop: 47, main: true, level: "central" },
    // Bloomington: McLean's biggest city (78,696; the county 171k; Illinois's state-farm town) at the crossing of I-55 and I-74 and the Lincoln Service. Normal (52,744, Illinois State University) is 2.5 mi from Bloomington's downtown, so it is not a town here (spacing).
    { id: "BMG", name: "Bloomington", county: "il-mclean", lat: 40.48, lon: -89, type: "metro", size: 2, pop: 171, main: true, level: "central" },
    // Pontiac: The group's biggest place (11,179), Livingston's seat on I-55 and Route 66. Watseka, Paxton and Dwight are towns.
    { id: "PNT", name: "Pontiac", county: "il-ford-iroquois-livingston", lat: 40.88, lon: -88.63, type: "farm", size: 1, pop: 76, main: true, level: "central" },
    // Champaign: Champaign's biggest city (88,297; the county 206k), the University of Illinois and the I-57/I-74 crossing; downtown, 2 mi east of the Census point. Urbana (38,353) is 3 mi from it and left out for spacing; Rantoul is a town.
    { id: "CMI", name: "Champaign", county: "il-champaign", lat: 40.12, lon: -88.24, type: "metro", size: 2, pop: 206, main: true, level: "central" },
    // Danville: Vermilion's biggest city (29,207; the county 74k), the seat, at I-74 and the Indiana line.
    { id: "DNVI", name: "Danville", county: "il-vermilion", lat: 40.12, lon: -87.63, type: "farm", size: 2, pop: 74, main: true, level: "central" },
    // Decatur: Macon's biggest city (71,100; the county 104k): ADM's 'Soy City' on Lake Decatur. Downtown, 1.5 mi south-west of the Census point.
    { id: "DEC", name: "Decatur", county: "il-macon", lat: 39.84, lon: -88.95, type: "metro", size: 2, pop: 104, main: true, level: "central" },
    // Springfield: The capital (114,436; Sangamon County 196k), on I-55 and the Lincoln Service. Scenic for the Lincoln Home, the Old State Capitol and Lincoln's Tomb (and New Salem nearby). Downtown.
    { id: "SPRI", name: "Springfield", county: "il-sangamon", lat: 39.8, lon: -89.65, scenic: true, type: "metro", size: 2, pop: 196, main: true, level: "central" },
    // Lincoln: The group's biggest place (13,290), Logan's seat, the first town named for Abraham Lincoln (before he was President), on I-55. Petersburg is the Menard seat; Lincoln's New Salem is a scenic town.
    { id: "LNL", name: "Lincoln", county: "il-logan-menard", lat: 40.15, lon: -89.37, type: "farm", size: 1, pop: 40, main: true, level: "central" },
    // Clinton: The group's biggest place (6,991), De Witt's seat on US-51 with the Clinton Lake nuclear plant. Monticello (5,945, Piatt's seat) is a town.
    { id: "CLN", name: "Clinton", county: "il-de-witt-piatt", lat: 40.15, lon: -88.96, type: "farm", size: 1, pop: 32, main: true, level: "central" },
    // Tuscola: The group's biggest place (4,641), Douglas's seat on I-57 and the Amish country (Arcola) farms; Sullivan is a town.
    { id: "TSC", name: "Tuscola", county: "il-douglas-moultrie", lat: 39.8, lon: -88.28, type: "farm", size: 1, pop: 34, main: true, level: "central" },
    // Charleston: Coles's biggest city by 387 people over Mattoon (17,280 against 16,893), the seat and Eastern Illinois University. Mattoon is a town.
    { id: "CHSN", name: "Charleston", county: "il-coles", lat: 39.49, lon: -88.18, type: "farm", size: 1, pop: 47, main: true, level: "central" },
    // Paris: The group's biggest place (8,293), Edgar's seat on US-150 near the Indiana line; Marshall (Clark's seat) is a town.
    { id: "PRSI", name: "Paris", county: "il-clark-edgar", lat: 39.61, lon: -87.7, type: "farm", size: 1, pop: 32, main: true, level: "central" },
    // Taylorville: The group's biggest place (10,504), Christian's seat. Pana and Shelbyville (on Lake Shelbyville) are towns.
    { id: "TYL", name: "Taylorville", county: "il-christian-shelby", lat: 39.55, lon: -89.29, type: "farm", size: 1, pop: 55, main: true, level: "central" },
    // Beardstown: The group's biggest place (5,956), Cass's town on the Illinois River (the Beardstown bridge) and the 'Lincoln Wrestling' site. Rushville is a town.
    { id: "BDT", name: "Beardstown", county: "il-brown-cass-schuyler", lat: 40.01, lon: -90.42, type: "farm", size: 1, pop: 26, main: true, level: "central" },
    // Jacksonville: The group's biggest place (17,624), Morgan's seat on US-36 and US-67; Pittsfield (Pike) is a town. A bit over 50k together.
    { id: "JKV", name: "Jacksonville", county: "il-morgan-pike-scott", lat: 39.73, lon: -90.23, type: "farm", size: 1, pop: 53, main: true, level: "central" },
    // Carlinville: Macoupin's seat and biggest place (5,702), by 644 people over Staunton (5,058; the I-55 town, a town here). A 45k county, kept alone as in phase 1.
    { id: "CRLN", name: "Carlinville", county: "il-macoupin", lat: 39.28, lon: -89.88, type: "farm", size: 1, pop: 45, main: true, level: "central" },
    // Level 4: Metro East and Little Egypt (the south)
    // Jerseyville: The group's biggest place (8,341), Jersey's seat, between the Illinois and Mississippi rivers (the Calhoun peninsula is reached only through here, with the Brussels Ferry and the Joe Page Bridge at Hardin). Carrollton and Grafton are towns.
    { id: "JVLL", name: "Jerseyville", county: "il-calhoun-greene-jersey", lat: 39.12, lon: -90.33, type: "farm", size: 1, pop: 38, main: true, level: "south" },
    // Granite City: Madison's biggest city (27,566; the county 266k), the steel town on I-270 and I-55, 8 mi north-east of St. Louis's station (Missouri's St. Louis 38.63,-90.20). Edwardsville (26,833), Alton (25,660) and Cahokia Mounds are towns. Collinsville (24,368) is left out for spacing next to Cahokia Mounds.
    { id: "GRC", name: "Granite City", county: "il-madison", lat: 38.73, lon: -90.13, type: "metro", size: 2, pop: 266, main: true, level: "south" },
    // Belleville: St. Clair's seat and biggest city (42,375; the county 257k), not East St. Louis (18,462, which faces St. Louis's station 3 mi across the river). Downtown. O'Fallon is a town.
    { id: "BLVI", name: "Belleville", county: "il-st-clair", lat: 38.52, lon: -89.98, type: "metro", size: 2, pop: 257, main: true, level: "south" },
    // Vandalia: The group's biggest place by 378 people over Greenville (7,457 against 7,079), Fayette's seat on I-70 and US-51 at the Kaskaskia River; the old state capital (1819-1839). Greenville and Litchfield are towns.
    { id: "VDL", name: "Vandalia", county: "il-bond-fayette-montgomery", lat: 38.96, lon: -89.09, type: "farm", size: 1, pop: 67, main: true, level: "south" },
    // Breese: The group's biggest place (4,645) on US-50 and the old Route 50 corridor; Carlyle (the Carlyle Lake town) and Nashville are towns.
    { id: "BRSE", name: "Breese", county: "il-clinton-washington", lat: 38.61, lon: -89.53, type: "farm", size: 1, pop: 51, main: true, level: "south" },
    // Waterloo: Monroe's seat, by two people (11,013) over Columbia (11,011, a town here); a St. Louis suburb in the Mississippi bluffs.
    { id: "WTLO", name: "Waterloo", county: "il-monroe-randolph", lat: 38.34, lon: -90.15, type: "farm", size: 1, pop: 65, main: true, level: "south" },
    // Centralia: The group's biggest place (12,178) at the crossing of I-57/I-64 and the City of New Orleans, Marion's town.
    { id: "CNTA", name: "Centralia", county: "il-marion-wayne", lat: 38.52, lon: -89.13, type: "farm", size: 1, pop: 54, main: true, level: "south" },
    // Mount Vernon: The group's biggest place (14,598), Jefferson's seat at I-57 and I-64, on the City of New Orleans line.
    { id: "MTVE", name: "Mount Vernon", county: "il-hamilton-jefferson", lat: 38.31, lon: -88.92, type: "farm", size: 1, pop: 45, main: true, level: "south" },
    // Effingham: The group's biggest place (12,270), Effingham's seat at the I-57/I-70 crossing ('Crossroads of America').
    { id: "EFNG", name: "Effingham", county: "il-cumberland-effingham", lat: 39.12, lon: -88.55, type: "farm", size: 1, pop: 45, main: true, level: "south" },
    // Olney: The group's biggest place (8,703), Richland's seat and the home of the white squirrels. Flora and Newton are towns.
    { id: "OLNE", name: "Olney", county: "il-clay-jasper-richland", lat: 38.73, lon: -88.08, type: "farm", size: 1, pop: 38, main: true, level: "south" },
    // Robinson: The group's biggest place (7,147), Crawford's seat (the Heath candy plant and the Marathon refinery); Lawrenceville (4,173) on the Wabash is a town.
    { id: "RBSN", name: "Robinson", county: "il-crawford-lawrence", lat: 39, lon: -87.74, type: "farm", size: 1, pop: 34, main: true, level: "south" },
    // Mount Carmel: The group's biggest place (7,005), on the Wabash River and the Indiana line (Wabash's seat). Carmi is a town.
    { id: "MTCR", name: "Mount Carmel", county: "il-edwards-wabash-white", lat: 38.41, lon: -87.76, type: "farm", size: 1, pop: 31, main: true, level: "south" },
    // West Frankfort: The group's biggest place by 562 over Benton (7,275 against 6,713; Franklin's seat, a town here): the coalfield on I-57.
    { id: "WFK", name: "West Frankfort", county: "il-franklin-perry", lat: 37.9, lon: -88.93, type: "farm", size: 1, pop: 59, main: true, level: "south" },
    // Carbondale: Jackson's biggest city (21,925; the county 53k), Southern Illinois University, a hub of Little Egypt on the City of New Orleans, at the edge of the Shawnee National Forest (type mountain, like the Shawnee 'Illinois Ozarks' hills and Giant City). Murphysboro is a town.
    { id: "CBDL", name: "Carbondale", county: "il-jackson", lat: 37.73, lon: -89.22, type: "mountain", size: 1, pop: 53, main: true, level: "south" },
    // Marion: Williamson's biggest city (16,856; the county 67k) on I-57 and the Marion/Herrin coal country. Herrin (12,358) is a town.
    { id: "MRON", name: "Marion", county: "il-williamson", lat: 37.73, lon: -88.93, type: "farm", size: 1, pop: 67, main: true, level: "south" },
    // Harrisburg: The group's biggest place (8,225), Saline's seat, at the foot of the Shawnee Hills (mountain type: the Shawnee National Forest, the Garden of the Gods). Shawneetown, on the Ohio, is a town.
    { id: "HRBG", name: "Harrisburg", county: "il-gallatin-hardin-saline", lat: 37.74, lon: -88.54, type: "mountain", size: 1, pop: 32, main: true, level: "south" },
    // Metropolis: The group's biggest place (5,969), Massac's seat on the Ohio River facing Paducah (Kentucky; the Irvin S. Cobb Bridge); the 'Hometown of Superman' (the Superman statue, the annual Superman Celebration) and Fort Massac State Park, so scenic. Downtown, 2.5 mi west of the Census point.
    { id: "MTRP", name: "Metropolis", county: "il-johnson-massac-pope", lat: 37.15, lon: -88.73, scenic: true, type: "farm", size: 1, pop: 31, main: true, level: "south" },
    // Anna: The group's biggest place (4,298), Union's seat in the Shawnee National Forest (mountain type; the wine trail and the Ozark foothills). Cairo (1,739), at the Ohio–Mississippi meeting, is a town.
    { id: "ANNA", name: "Anna", county: "il-alexander-pulaski-union", lat: 37.46, lon: -89.24, type: "mountain", size: 1, pop: 28, main: true, level: "south" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Left out for spacing: East St. Louis (faces St. Louis's station), Rock Island, Urbana, Normal,
  // Rock Falls, East Peoria, Collinsville (NOTES.md).
  towns: [
    // Level 1: Chicagoland
    // Evanston: Northwestern University, Cook's lake-shore suburb on the Metra and the L; 12 mi north of the Loop.
    { id: "EVNS", name: "Evanston", county: "il-cook", lat: 42.05, lon: -87.69, type: "metro", size: 2 },
    // Schaumburg: The biggest edge city of Cook (78,718; Woodfield Mall), on I-90 and I-290.
    { id: "SCHB", name: "Schaumburg", county: "il-cook", lat: 42.03, lon: -88.08, type: "metro", size: 2 },
    // Oak Park: Frank Lloyd Wright's home and studio and Unity Temple (a World Heritage site since 2019), 7 mi west of the Loop. Coordinates: Oak Park village centre.
    { id: "OAKP", name: "Oak Park", county: "il-cook", lat: 41.89, lon: -87.78, scenic: true, type: "metro", size: 1 },
    // Wheaton: DuPage's seat (53,927), 7 mi from Naperville's station.
    { id: "WHEA", name: "Wheaton", county: "il-dupage", lat: 41.86, lon: -88.11, type: "metro", size: 1 },
    // Elmhurst: On the Union Pacific West line, 10 mi west of Oak Park.
    { id: "ELMH", name: "Elmhurst", county: "il-dupage", lat: 41.9, lon: -87.94, type: "metro", size: 1 },
    // Highland Park: The lake-shore suburb of the North Shore (Ravinia); coast.
    { id: "HLPK", name: "Highland Park", county: "il-lake", lat: 42.18, lon: -87.81, type: "coast", size: 1 },
    // Mundelein: The Lake County seat's neighbour, on the Metra and IL-60; Libertyville is next to it.
    { id: "MDLN", name: "Mundelein", county: "il-lake", lat: 42.27, lon: -88.01, type: "metro", size: 1 },
    // Elgin: Kane's second city (114,810) on the Fox River and I-90.
    { id: "ELGI", name: "Elgin", county: "il-kane", lat: 42.04, lon: -88.33, type: "metro", size: 2 },
    // St. Charles: The Fox River town of the Tri-Cities, 9 mi north of Aurora's downtown.
    { id: "STCA", name: "St. Charles", county: "il-kane", lat: 41.92, lon: -88.31, type: "metro", size: 1 },
    // Woodstock: McHenry's seat (the Opera House, the Groundhog Day film), on US-14.
    { id: "WDSK", name: "Woodstock", county: "il-mchenry", lat: 42.31, lon: -88.44, type: "farm", size: 1 },
    // Algonquin: On the Fox River and IL-31, a fast-growing suburb (29,707).
    { id: "ALGN", name: "Algonquin", county: "il-mchenry", lat: 42.16, lon: -88.32, type: "metro", size: 1 },
    // Bolingbrook: The second city of Will (73,947), on I-55.
    { id: "BOLB", name: "Bolingbrook", county: "il-will", lat: 41.69, lon: -88.1, type: "metro", size: 1 },
    // Plainfield: The Will County suburb on the DuPage River (44,886).
    { id: "PLNF", name: "Plainfield", county: "il-will", lat: 41.63, lon: -88.25, type: "metro", size: 1 },
    // Yorkville: Kendall's seat on the Fox River.
    { id: "YRKV", name: "Yorkville", county: "il-kendall", lat: 41.66, lon: -88.43, type: "farm", size: 1 },
    // Coal City: The old coal town on IL-113 (5,713).
    { id: "CLCY", name: "Coal City", county: "il-grundy", lat: 41.28, lon: -88.28, type: "farm", size: 1 },
    // Manteno: On I-57 north of Kankakee (9,211).
    { id: "MNTO", name: "Manteno", county: "il-kankakee", lat: 41.25, lon: -87.84, type: "farm", size: 1 },
    // Sycamore: DeKalb's seat (18,586), the Pumpkin Fest town.
    { id: "SYCM", name: "Sycamore", county: "il-dekalb", lat: 42, lon: -88.68, type: "farm", size: 1 },
    // Sandwich: The old fair town on US-34 (7,225).
    { id: "SNDW", name: "Sandwich", county: "il-dekalb", lat: 41.65, lon: -88.62, type: "farm", size: 1 },
    // Level 2: Rockford, the Quad Cities and the north-west
    // Poplar Grove: The Boone County village on US-20 (5,054).
    { id: "PPGV", name: "Poplar Grove", county: "il-boone", lat: 42.35, lon: -88.84, type: "farm", size: 1 },
    // Loves Park: Rockford's northern neighbour (23,405) on I-90 and the Rock River.
    { id: "LVPK", name: "Loves Park", county: "il-winnebago", lat: 42.34, lon: -89, type: "metro", size: 1 },
    // Oregon: Ogle's seat on the Rock River, the gateway to Castle Rock and White Pines state parks.
    { id: "ORGN", name: "Oregon", county: "il-ogle", lat: 42.01, lon: -89.34, type: "farm", size: 1 },
    // Byron: The Rock River town of the Byron nuclear plant (3,788), on I-39.
    { id: "BYRN", name: "Byron", county: "il-ogle", lat: 42.12, lon: -89.27, type: "farm", size: 1 },
    // Amboy: The Lincoln Highway/Route 52 town (2,282), 10 mi south of Dixon.
    { id: "AMBY", name: "Amboy", county: "il-lee", lat: 41.72, lon: -89.34, type: "farm", size: 1 },
    // Morrison: Whiteside's seat on US-30 (4,077).
    { id: "MRSN", name: "Morrison", county: "il-whiteside", lat: 41.81, lon: -89.96, type: "farm", size: 1 },
    // Galena: The lead-mining town of Ulysses Grant, a National Historic Landmark district of 19th-century streets and the Galena River; Illinois's best-known tourist town.
    { id: "GALN", name: "Galena", county: "il-carroll-jo-daviess-stephenson", lat: 42.42, lon: -90.43, scenic: true, type: "farm", size: 1 },
    // Mississippi Palisades: Mississippi Palisades State Park, the bluffs over the river north of Savanna (about 42.13 N, 90.15 W; coordinates from general knowledge, the park lies between Savanna and the Mississippi Palisades Parkway).
    { id: "PLSD", name: "Mississippi Palisades", county: "il-carroll-jo-daviess-stephenson", lat: 42.14, lon: -90.15, scenic: true, type: "farm", size: 1 },
    // East Moline: Quad Cities, Illinois side (21,370), 5.7 mi from Moline's station.
    { id: "EMOL", name: "East Moline", county: "il-rock-island", lat: 41.52, lon: -90.39, type: "metro", size: 1 },
    // Geneseo: The I-80 town of Henry (6,536), 10 mi east of the Quad Cities.
    { id: "GNSO", name: "Geneseo", county: "il-henry", lat: 41.45, lon: -90.15, type: "farm", size: 1 },
    // Spring Valley: The Illinois River valley's second town (5,573), on I-180/IL-89.
    { id: "SPVL", name: "Spring Valley", county: "il-bureau-putnam-stark", lat: 41.32, lon: -89.18, type: "farm", size: 1 },
    // Starved Rock: Starved Rock State Park, Illinois's most visited, on the Illinois River south of Utica (41.32 N, 89.00 W, general knowledge; LaSalle County).
    { id: "STRK", name: "Starved Rock", county: "il-lasalle", lat: 41.32, lon: -89, scenic: true, type: "farm", size: 1 },
    // Streator: The glass-and-coal town of south LaSalle (12,505).
    { id: "STTR", name: "Streator", county: "il-lasalle", lat: 41.13, lon: -88.83, type: "farm", size: 1 },
    // Abingdon: The town of Abingdon, 10 mi south of Galesburg.
    { id: "ABNG", name: "Abingdon", county: "il-knox", lat: 40.8, lon: -90.4, type: "farm", size: 1 },
    // Aledo: Mercer's seat.
    { id: "ALDE", name: "Aledo", county: "il-henderson-mercer-warren", lat: 41.2, lon: -90.75, type: "farm", size: 1 },
    // Nauvoo: The Mormon pioneer city on the Mississippi (the Joseph Smith Historic Site, the Nauvoo Temple); a National Historic Landmark. Coordinates from general knowledge (about 40.55 N, 91.38 W).
    { id: "NVOO", name: "Nauvoo", county: "il-hancock-mcdonough", lat: 40.55, lon: -91.38, scenic: true, type: "farm", size: 1 },
    // Carthage: Hancock's seat, where Joseph Smith was killed (the jail museum).
    { id: "CRTI", name: "Carthage", county: "il-hancock-mcdonough", lat: 40.41, lon: -91.13, type: "farm", size: 1 },
    // Camp Point: On US-24 and the Burlington line east of Quincy.
    { id: "CMPP", name: "Camp Point", county: "il-adams", lat: 40.04, lon: -91.06, type: "farm", size: 1 },
    // Level 3: Peoria, Springfield, Champaign and the prairie
    // Rushville: Schuyler's seat on US-24.
    { id: "RSHV", name: "Rushville", county: "il-brown-cass-schuyler", lat: 40.12, lon: -90.57, type: "farm", size: 1 },
    // Havana: Mason's seat on the Illinois River.
    { id: "HAVN", name: "Havana", county: "il-fulton-mason", lat: 40.3, lon: -90.06, type: "farm", size: 1 },
    // Lacon: Marshall's seat on the Illinois River.
    { id: "LACN", name: "Lacon", county: "il-marshall-woodford", lat: 41.02, lon: -89.41, type: "farm", size: 1 },
    // Morton: The pumpkin town (17,124) on I-74.
    { id: "MRTO", name: "Morton", county: "il-tazewell", lat: 40.61, lon: -89.47, type: "farm", size: 1 },
    // Washington: The Peoria suburb (16,082) rebuilt after the 2013 tornado.
    { id: "WSHP", name: "Washington", county: "il-tazewell", lat: 40.71, lon: -89.43, type: "farm", size: 1 },
    // Chillicothe: The Illinois River town north of Peoria, on the Santa Fe line.
    { id: "CHLL", name: "Chillicothe", county: "il-peoria", lat: 40.92, lon: -89.5, type: "farm", size: 1 },
    // Le Roy: On I-74, 11 mi south-east of Bloomington.
    { id: "LRYI", name: "Le Roy", county: "il-mclean", lat: 40.34, lon: -88.76, type: "farm", size: 1 },
    // Watseka: Iroquois's seat on the Iroquois River.
    { id: "WTSK", name: "Watseka", county: "il-ford-iroquois-livingston", lat: 40.78, lon: -87.73, type: "farm", size: 1 },
    // Paxton: Ford's seat on I-57 and the City of New Orleans.
    { id: "PXTN", name: "Paxton", county: "il-ford-iroquois-livingston", lat: 40.46, lon: -88.1, type: "farm", size: 1 },
    // Dwight: The Route 66 town (the Ambler-Becker station) on I-55.
    { id: "DWGT", name: "Dwight", county: "il-ford-iroquois-livingston", lat: 41.1, lon: -88.42, type: "farm", size: 1 },
    // Rantoul: The old Chanute Air Force Base town (12,376).
    { id: "RNTL", name: "Rantoul", county: "il-champaign", lat: 40.3, lon: -88.15, type: "farm", size: 1 },
    // Hoopeston: The sweet corn town (the Sweetcorn Festival) on US-9 north of Danville.
    { id: "HPSN", name: "Hoopeston", county: "il-vermilion", lat: 40.46, lon: -87.66, type: "farm", size: 1 },
    // Mount Zion: The Decatur suburb on I-72.
    { id: "MTZN", name: "Mount Zion", county: "il-macon", lat: 39.78, lon: -88.89, type: "farm", size: 1 },
    // Chatham: The Springfield suburb on I-55 (14,382).
    { id: "CHTM", name: "Chatham", county: "il-sangamon", lat: 39.67, lon: -89.69, type: "metro", size: 1 },
    // Lincoln's New Salem: The reconstructed village where Lincoln lived 1831-1837, a State Historic Site near Petersburg (about 40.02 N, 89.84 W; Wikipedia).
    { id: "NSLM", name: "Lincoln's New Salem", county: "il-logan-menard", lat: 40.02, lon: -89.84, scenic: true, type: "farm", size: 1 },
    // Monticello: Piatt's seat on I-72 (Allerton Park).
    { id: "MNTI", name: "Monticello", county: "il-de-witt-piatt", lat: 40.03, lon: -88.57, type: "farm", size: 1 },
    // Sullivan: Moultrie's seat near Lake Shelbyville.
    { id: "SLVN", name: "Sullivan", county: "il-douglas-moultrie", lat: 39.6, lon: -88.61, type: "farm", size: 1 },
    // Arcola: The centre of Illinois's Amish country (Rockome, Raggedy Ann).
    { id: "ARCL", name: "Arcola", county: "il-douglas-moultrie", lat: 39.68, lon: -88.3, type: "farm", size: 1 },
    // Mattoon: The second city of Coles (16,893) on the City of New Orleans, at the crossing with the Pennsylvania Railroad.
    { id: "MTTN", name: "Mattoon", county: "il-coles", lat: 39.48, lon: -88.36, type: "farm", size: 1 },
    // Marshall: Clark's seat on I-70.
    { id: "MRSI", name: "Marshall", county: "il-clark-edgar", lat: 39.4, lon: -87.69, type: "farm", size: 1 },
    // Pana: The old coal and greenhouse town of Christian (5,196).
    { id: "PANA", name: "Pana", county: "il-christian-shelby", lat: 39.39, lon: -89.09, type: "farm", size: 1 },
    // Shelbyville: Shelby's seat on Lake Shelbyville.
    { id: "SHBL", name: "Shelbyville", county: "il-christian-shelby", lat: 39.41, lon: -88.8, type: "farm", size: 1 },
    // Staunton: The I-55 town of Macoupin (5,058).
    { id: "STNT", name: "Staunton", county: "il-macoupin", lat: 39.01, lon: -89.79, type: "farm", size: 1 },
    // Pittsfield: Pike's seat on US-54.
    { id: "PTSF", name: "Pittsfield", county: "il-morgan-pike-scott", lat: 39.6, lon: -90.81, type: "farm", size: 1 },
    // Level 4: Metro East and Little Egypt (the south)
    // Carrollton: Greene's seat on the Illinois River bluff road.
    { id: "CRRL", name: "Carrollton", county: "il-calhoun-greene-jersey", lat: 39.29, lon: -90.41, type: "farm", size: 1 },
    // Grafton: Where the Illinois meets the Mississippi (Pere Marquette State Park, the Great River Road).
    { id: "GRFT", name: "Grafton", county: "il-calhoun-greene-jersey", lat: 38.98, lon: -90.43, type: "farm", size: 1 },
    // Edwardsville: The seat of Madison County (26,833), SIU Edwardsville, on I-55.
    { id: "EDWV", name: "Edwardsville", county: "il-madison", lat: 38.79, lon: -89.99, type: "metro", size: 1 },
    // Alton: The riverfront city of the Clark Bridge (25,660).
    { id: "ALTN", name: "Alton", county: "il-madison", lat: 38.9, lon: -90.15, type: "metro", size: 1 },
    // Cahokia Mounds: Cahokia Mounds State Historic Site, the largest pre-Columbian city north of Mexico (a World Heritage Site), in Collinsville; about 38.66 N, 90.06 W (general knowledge).
    { id: "CAHM", name: "Cahokia Mounds", county: "il-madison", lat: 38.66, lon: -90.06, scenic: true, type: "farm", size: 1 },
    // O'Fallon: The St. Clair suburb on I-64 (Scott Air Force Base).
    { id: "OFAL", name: "O'Fallon", county: "il-st-clair", lat: 38.6, lon: -89.92, type: "metro", size: 1 },
    // Greenville: Bond's seat on I-70 and Carlyle Lake's west.
    { id: "GRNI", name: "Greenville", county: "il-bond-fayette-montgomery", lat: 38.89, lon: -89.39, type: "farm", size: 1 },
    // Litchfield: The Route 66 / I-55 town of Montgomery (6,782).
    { id: "LTFL", name: "Litchfield", county: "il-bond-fayette-montgomery", lat: 39.18, lon: -89.67, type: "farm", size: 1 },
    // Carlyle: The town on Carlyle Lake, Illinois's biggest man-made lake.
    { id: "CRLL", name: "Carlyle", county: "il-clinton-washington", lat: 38.62, lon: -89.38, type: "farm", size: 1 },
    // Nashville: Washington's seat on US-51.
    { id: "NSHL", name: "Nashville", county: "il-clinton-washington", lat: 38.35, lon: -89.38, type: "farm", size: 1 },
    // Columbia: The St. Louis bluff suburb (11,011).
    { id: "CLBI", name: "Columbia", county: "il-monroe-randolph", lat: 38.46, lon: -90.22, type: "metro", size: 1 },
    // Chester: Randolph's seat on the Mississippi, home of Popeye (the Chester Bridge to Missouri).
    { id: "CHTR", name: "Chester", county: "il-monroe-randolph", lat: 37.93, lon: -89.83, type: "farm", size: 1 },
    // Salem: Marion's seat on US-50 (William Jennings Bryan's birthplace).
    { id: "SLMI", name: "Salem", county: "il-marion-wayne", lat: 38.63, lon: -88.96, type: "farm", size: 1 },
    // Fairfield: Wayne's seat.
    { id: "FRFL", name: "Fairfield", county: "il-marion-wayne", lat: 38.38, lon: -88.37, type: "farm", size: 1 },
    // McLeansboro: Hamilton's seat.
    { id: "MCLB", name: "McLeansboro", county: "il-hamilton-jefferson", lat: 38.09, lon: -88.54, type: "farm", size: 1 },
    // Du Quoin: The state-fair town of Perry (the Du Quoin State Fair).
    { id: "DQUN", name: "Du Quoin", county: "il-franklin-perry", lat: 38, lon: -89.23, type: "farm", size: 1 },
    // Benton: Franklin's seat on I-57 and Rend Lake.
    { id: "BNTN", name: "Benton", county: "il-franklin-perry", lat: 38.01, lon: -88.92, type: "farm", size: 1 },
    // Murphysboro: Jackson's seat on the Big Muddy River.
    { id: "MRPH", name: "Murphysboro", county: "il-jackson", lat: 37.77, lon: -89.33, type: "farm", size: 1 },
    // Herrin: The coal town of Williamson (12,358).
    { id: "HRRN", name: "Herrin", county: "il-williamson", lat: 37.8, lon: -89.03, type: "farm", size: 1 },
    // Shawneetown: The old Ohio River town of Gallatin (the Shawneetown Bridge to Kentucky).
    { id: "SHTN", name: "Shawneetown", county: "il-gallatin-hardin-saline", lat: 37.72, lon: -88.19, type: "farm", size: 1 },
    // Eldorado: The coal town of Saline (3,747).
    { id: "ELDI", name: "Eldorado", county: "il-gallatin-hardin-saline", lat: 37.81, lon: -88.44, type: "farm", size: 1 },
    // Cave-In-Rock: Cave-In-Rock State Park, the famous cave on the Ohio River that sheltered 1790s river pirates (and a ferry to Kentucky); from places.json.
    { id: "CVRK", name: "Cave-In-Rock", county: "il-gallatin-hardin-saline", lat: 37.47, lon: -88.16, scenic: true, type: "mountain", size: 1 },
    // Vienna: Johnson's seat (the Shawnee Hills).
    { id: "VNNA", name: "Vienna", county: "il-johnson-massac-pope", lat: 37.41, lon: -88.89, type: "mountain", size: 1 },
    // Garden of the Gods: The Garden of the Gods Recreation Area, the Shawnee National Forest's sandstone bluffs near Herod (about 37.6 N, 88.4 W, general knowledge).
    { id: "GDGD", name: "Garden of the Gods", county: "il-gallatin-hardin-saline", lat: 37.6, lon: -88.4, scenic: true, type: "mountain", size: 1 },
    // Cairo: Where the Ohio meets the Mississippi, the southernmost point of Illinois; the Cairo bridges lead to Missouri and Kentucky.
    { id: "CAIR", name: "Cairo", county: "il-alexander-pulaski-union", lat: 37.01, lon: -89.18, type: "farm", size: 1 },
    // Altamont: The Effingham County town on US-40 (the Charles Mound?).
    { id: "ALMT", name: "Altamont", county: "il-cumberland-effingham", lat: 39.06, lon: -88.75, type: "farm", size: 1 },
    // Flora: Clay's biggest town on the Baltimore and Ohio line (4,799).
    { id: "FLRA", name: "Flora", county: "il-clay-jasper-richland", lat: 38.67, lon: -88.47, type: "farm", size: 1 },
    // Newton: Jasper's seat (2,781).
    { id: "NWTO", name: "Newton", county: "il-clay-jasper-richland", lat: 38.99, lon: -88.16, type: "farm", size: 1 },
    // Lawrenceville: Lawrence's seat, on the Wabash facing Vincennes (the Lawrenceville-Vincennes bridge).
    { id: "LWRN", name: "Lawrenceville", county: "il-crawford-lawrence", lat: 38.73, lon: -87.69, type: "farm", size: 1 },
    // Carmi: White's seat on the Little Wabash.
    { id: "CRMI", name: "Carmi", county: "il-edwards-wabash-white", lat: 38.09, lon: -88.17, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open the
  // next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Chicagoland",
      areas: ["chicago"],
      goals: [
        { kind: "totalPassengers", target: 60 },
        { kind: "counties", target: 6 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Rockford, the Quad Cities & the North-West",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 150 },
        // Chicago to Rockford, as I-90 runs
        { kind: "connect", a: "CHGO", b: "RFDL" },
        { kind: "counties", target: 18 },
      ],
    },
    {
      name: "Peoria, Springfield, Champaign & the Prairie",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 300 },
        // Chicago to Springfield, as I-55 and the Lincoln Service run
        { kind: "connect", a: "CHGO", b: "SPRI" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Metro East & Little Egypt",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 480 },
        // Chicago to Carbondale, as I-57 and the City of New Orleans run
        { kind: "connect", a: "CHGO", b: "CBDL" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Illinois's highest ground is a
  // few hundred feet of Shawnee hills and the Driftless bluffs; nothing needs a pass.
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow
  // enough. Placed on the map's river where it passes the town (sources in NOTES.md). The
  // Mississippi crossings (the Quad Cities, Clinton, Burlington, Keokuk, Quincy, Hannibal, Alton,
  // St. Louis, Chester, Cape Girardeau, Cairo) are in Iowa's and Missouri's packs, with the same names.
  bridges: [
    // The Illinois and Kankakee rivers
    ["Kankakee River bridges (Kankakee–Bradley)", 41.12, -87.86],
    ["Illinois River bridge (Morris)", 41.37, -88.42],
    ["Fox and Illinois River bridges (Ottawa)", 41.35, -88.84],
    ["Illinois River bridges (Peru–LaSalle)", 41.32, -89.12],
    ["Illinois River bridge (Hennepin)", 41.25, -89.36],
    ["Illinois River bridge (Henry)", 41.11, -89.37],
    ["Illinois River bridge (Lacon)", 41.03, -89.43],
    ["Illinois River bridge (Chillicothe)", 40.92, -89.5],
    ["Illinois River bridges (Peoria–East Peoria)", 40.69, -89.59],
    ["Illinois River bridge (Pekin)", 40.59, -89.67],
    ["Illinois River bridge (Havana)", 40.31, -90.08],
    ["Illinois River bridge (Beardstown)", 40.03, -90.45],
    ["Illinois River bridge (Meredosia)", 39.83, -90.59],
    ["Joe Page Bridge (Hardin)", 39.16, -90.61],
    // The Rock and Fox rivers
    ["Rock River bridges (Rockford)", 42.27, -89.09],
    ["Rock River bridge (Byron)", 42.12, -89.26],
    ["Rock River bridge (Oregon)", 42.01, -89.33],
    ["Rock River bridges (Dixon)", 41.85, -89.48],
    ["Rock River bridges (Sterling–Rock Falls)", 41.79, -89.69],
    ["Rock River bridges (Moline–Milan)", 41.46, -90.52],
    ["Fox River bridge (Carpentersville)", 42.12, -88.29],
    ["Fox River bridges (Elgin)", 42.04, -88.28],
    ["Fox River bridges (St. Charles–Geneva–Batavia)", 41.91, -88.31],
    ["Fox River bridges (Aurora)", 41.76, -88.32],
    ["Fox River bridge (Oswego–Montgomery)", 41.69, -88.37],
    ["Fox River bridge (Yorkville)", 41.65, -88.44],
    // The Kaskaskia, Sangamon and their lakes
    ["Kaskaskia River bridge (Vandalia)", 38.96, -89.1],
    ["Kaskaskia River bridge (Carlyle)", 38.61, -89.36],
    ["Lake Shelbyville bridge (Shelbyville)", 39.41, -88.79],
    ["Rend Lake bridge (I-57)", 38.07, -88.96],
    ["Sangamon River bridge (Petersburg)", 40.01, -89.84],
    // The Wabash and the Ohio (Indiana and Kentucky come later)
    ["Wabash River bridge (Mount Carmel)", 38.41, -87.76],
    ["Lincoln Memorial Bridge (Lawrenceville–Vincennes)", 38.7, -87.54],
    ["Shawneetown Bridge (Ohio River)", 37.7, -88.12],
    ["Cave-In-Rock Ferry (Ohio River)", 37.47, -88.17],
    ["Irvin S. Cobb Bridge (Brookport–Paducah)", 37.12, -88.64],
    ["Ohio River bridge (Cairo)", 36.99, -89.13],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and prairie.
  biomes: {
    // The Shawnee National Forest and the hills of Little Egypt
    forest: ["il-johnson-massac-pope", "il-alexander-pulaski-union", "il-gallatin-hardin-saline"],
    // The Driftless bluffs of the north-west, the river bluffs and bottoms of the Illinois and the
    // Mississippi, and the wooded hills round Carbondale and the coalfield
    wooded: ["il-carroll-jo-daviess-stephenson", "il-calhoun-greene-jersey", "il-monroe-randolph", "il-jackson", "il-williamson", "il-franklin-perry", "il-morgan-pike-scott", "il-brown-cass-schuyler"],
    // Not listed (farmland and prairie): the rest, the Corn Belt.
  },
});
