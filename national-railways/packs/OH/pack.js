// National Railways pack: Ohio.
// Everything hand-made for one state: main stations, towns, levels, bridges and where the forests
// are. The county borders come from map.js and the rivers and lakes from terrain.js (Ohio has no
// real mountains on its map, only hills, so there are no passes). What each field means: PACKS.md.
// Judgment calls and sources: packs/OH/NOTES.md. Cities and populations: U.S. Census Bureau (2020),
// packs/OH/raw. Ohio's 88 counties are 69 regions (merges in tools/build-map.js, STATES.OH).
NR.addPack({
  code: "OH",
  name: "Ohio",
  // A game that starts here begins owning Franklin (Columbus), Delaware and Union (Marysville),
  // which all touch each other. Columbus and Delaware are metro and Marysville is farm, so the
  // first track (Delaware-Marysville, the nearest pair of different types) has riders; the
  // Columbus-Delaware pair joins two metros, which carries nobody in "A type of place".
  start: ["oh-franklin", "oh-delaware", "oh-union"],
  // Main stations: one per region, at its biggest place except Xenia (not Beavercreek), St.
  // Clairsville (not Martins Ferry), and the downtown points noted (a Census point is the middle
  // of the city limits). id = the short code shown on passengers. county = region id in this
  // folder's map.js. pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode.
  stations: [
    // Level: central
    // Bellefontaine (14,123, ahead of Urbana, 11,139), Logan's seat on US-33 and US-68, the highest point in Ohio (Campbell Hill) is next door; the two counties 85k.
    { id: "BELL", name: "Bellefontaine", county: "oh-champaign-logan", lat: 40.36, lon: -83.76, type: "farm", size: 2, pop: 85, main: true, level: "central" },
    // Springfield (58,654), the seat on I-70 and the National Road (US-40); the county 136k.
    { id: "SPRN", name: "Springfield", county: "oh-clark", lat: 39.93, lon: -83.79, type: "metro", size: 2, pop: 136, main: true, level: "central" },
    // Bucyrus (11,683, ahead of Galion, 10,448), Crawford's seat on US-30 and SR-4; the two counties 77k.
    { id: "BUCY", name: "Bucyrus", county: "oh-crawford-morrow", lat: 40.81, lon: -82.97, type: "farm", size: 2, pop: 77, main: true, level: "central" },
    // Delaware (41,327, ahead of Powell), the seat on US-23 north of Columbus; the county 214k.
    { id: "DELA", name: "Delaware", county: "oh-delaware", lat: 40.29, lon: -83.07, type: "metro", size: 2, pop: 214, main: true, level: "central" },
    // Lancaster (40,540, ahead of Pickerington, a Columbus suburb), the seat on US-33; the county 159k.
    { id: "LNCS", name: "Lancaster", county: "oh-fairfield", lat: 39.73, lon: -82.61, type: "farm", size: 2, pop: 159, main: true, level: "central" },
    // Washington Court House (14,407, ahead of London, 10,272, Madison's seat), Fayette's seat on US-35 and US-22; the two counties 73k.
    { id: "WCH", name: "Washington Court House", county: "oh-fayette-madison", lat: 39.54, lon: -83.43, type: "farm", size: 2, pop: 73, main: true, level: "central" },
    // Ohio's capital and biggest city (905,939; Franklin County 1,324k, the biggest region of the state, size 4 like Indianapolis, Denver and Kansas City). At the Statehouse (the Census point, 39.98, -82.98, is the middle of the city limits), with John Glenn Columbus International Airport.
    { id: "CMH", name: "Columbus", county: "oh-franklin", lat: 39.96, lon: -83, airport: "John Glenn Columbus International Airport", type: "metro", size: 4, pop: 1324, main: true, level: "central" },
    // Kenton (7,944, ahead of Upper Sandusky, 6,699), Hardin's seat on US-68 and SR-31; the two counties 53k.
    { id: "KENT", name: "Kenton", county: "oh-hardin-wyandot", lat: 40.64, lon: -83.61, type: "farm", size: 1, pop: 53, main: true, level: "central" },
    // Logan (7,292, ahead of McArthur, 1,787), Hocking's seat on US-33, the gateway to the Hocking Hills; the two counties 41k.
    { id: "LOGA", name: "Logan", county: "oh-hocking-vinton", lat: 39.54, lon: -82.41, type: "mountain", size: 1, pop: 41, main: true, level: "central" },
    // Mount Vernon (16,945), the seat on the Kokosing River and US-36; the county 63k.
    { id: "MV", name: "Mount Vernon", county: "oh-knox", lat: 40.39, lon: -82.48, type: "farm", size: 2, pop: 63, main: true, level: "central" },
    // Newark (49,948, ahead of Pataskala), the seat, with the Licking River; the county 179k. The Newark Earthworks (the Great Circle, UNESCO World Heritage Site 2023, in Heath 2 mi south-west) are scenic and marked on the station.
    { id: "NEWA", name: "Newark", county: "oh-licking", lat: 40.07, lon: -82.42, scenic: true, type: "metro", size: 2, pop: 179, main: true, level: "central" },
    // Marion (36,012), the seat on US-23 and SR-95, Warren Harding's home town; the county 65k.
    { id: "MAI", name: "Marion", county: "oh-marion", lat: 40.6, lon: -83.12, type: "farm", size: 2, pop: 65, main: true, level: "central" },
    // Circleville (13,925), the seat on US-23 and the Scioto River, the Pumpkin Show town; the county 59k.
    { id: "CIRC", name: "Circleville", county: "oh-pickaway", lat: 39.6, lon: -82.93, type: "farm", size: 2, pop: 59, main: true, level: "central" },
    // Mansfield (47,541), the seat on I-71 between Cleveland and Columbus; the county 125k.
    { id: "MANS", name: "Mansfield", county: "oh-richland", lat: 40.77, lon: -82.53, type: "metro", size: 2, pop: 125, main: true, level: "central" },
    // Chillicothe (22,049), Ohio's first capital, the seat on the Scioto River and US-23; the county 77k. The Hopewell Culture National Historical Park (NPS, Mound City, 3 mi north of downtown) is scenic and marked on the station.
    { id: "CHLI", name: "Chillicothe", county: "oh-ross", lat: 39.34, lon: -83, scenic: true, type: "farm", size: 2, pop: 77, main: true, level: "central" },
    // Marysville (25,585), the seat on US-33, Honda's Ohio plants; the county 63k.
    { id: "MAS", name: "Marysville", county: "oh-union", lat: 40.23, lon: -83.36, type: "farm", size: 2, pop: 63, main: true, level: "central" },
    // Level: southwest
    // Georgetown (4,458, a hair ahead of Mount Orab, 4,352, a Cincinnati exurb), Brown's seat on US-68 and Ulysses S. Grant's boyhood home; the two counties 71k.
    { id: "GEOR", name: "Georgetown", county: "oh-adams-brown", lat: 38.87, lon: -83.9, type: "farm", size: 1, pop: 71, main: true, level: "southwest" },
    // Lima (35,579), the seat on I-75 and the Ohio's old oil and locomotive city; the county 102k.
    { id: "LIMA", name: "Lima", county: "oh-allen", lat: 40.74, lon: -84.11, type: "metro", size: 2, pop: 102, main: true, level: "southwest" },
    // Celina (10,934, ahead of Wapakoneta, 9,951, and St. Marys, 8,406), Mercer's seat on Grand Lake St. Marys and US-127; the two counties 89k.
    { id: "CELI", name: "Celina", county: "oh-auglaize-mercer", lat: 40.56, lon: -84.56, type: "farm", size: 2, pop: 89, main: true, level: "southwest" },
    // Hamilton (63,385, ahead of Middletown, 50,990), the seat on the Great Miami River; Butler County 390k, size 3. Downtown.
    { id: "HMTN", name: "Hamilton", county: "oh-butler", lat: 39.4, lon: -84.56, type: "metro", size: 3, pop: 390, main: true, level: "southwest" },
    // Milford (6,577, the biggest incorporated place; Batavia is the seat, 1,500) on the Little Miami River at I-275; the county 209k is Cincinnati's eastern suburbs.
    { id: "MILF", name: "Milford", county: "oh-clermont", lat: 39.17, lon: -84.29, type: "metro", size: 2, pop: 209, main: true, level: "southwest" },
    // Wilmington (12,668, ahead of Hillsboro, 6,482), Clinton's seat on US-68 and I-71, the old Airborne Express hub (ABX Air); the two counties 85k.
    { id: "WILM", name: "Wilmington", county: "oh-clinton-highland", lat: 39.43, lon: -83.82, type: "farm", size: 2, pop: 85, main: true, level: "southwest" },
    // Greenville (12,799), the seat on US-127, the Treaty of Greenville (1795) and Annie Oakley's home town; the county 52k.
    { id: "GEE", name: "Greenville", county: "oh-darke", lat: 40.1, lon: -84.62, type: "farm", size: 2, pop: 52, main: true, level: "southwest" },
    // Gallipolis (3,312, ahead of Middleport, 2,209), Gallia's seat on the Ohio River and US-35, the French 500 settlement (1790); the two counties 51k.
    { id: "GALL", name: "Gallipolis", county: "oh-gallia-meigs", lat: 38.82, lon: -82.19, type: "farm", size: 1, pop: 51, main: true, level: "southwest" },
    // Xenia, not Beavercreek (46,560, a Dayton suburb at 7 mi from Dayton) or Fairborn (34,531), both towns here: Xenia (25,418) is the seat in the middle of the county of 168k, on US-35 and the Little Miami Trail.
    { id: "XENI", name: "Xenia", county: "oh-greene", lat: 39.68, lon: -83.94, type: "farm", size: 2, pop: 168, main: true, level: "southwest" },
    // Cincinnati (309,567; Hamilton County 831k, size 4). At Fountain Square (the Census point is 39.14, -84.51). The big airport, CVG, is in Boone County, Kentucky, 12 mi south-west across the Ohio River; the station carries it until Kentucky's pack exists (the Cincinnati/Northern Kentucky metro's airport).
    { id: "CIN", name: "Cincinnati", county: "oh-hamilton", lat: 39.1, lon: -84.51, airport: "Cincinnati/Northern Kentucky International Airport", type: "metro", size: 4, pop: 831, main: true, level: "southwest" },
    // Jackson (6,252, ahead of Wellston, 5,415, and Waverly, 4,166), Jackson's seat on SR-93 and US-35; the two counties 60k.
    { id: "JCK", name: "Jackson", county: "oh-jackson-pike", lat: 39.04, lon: -82.64, type: "farm", size: 1, pop: 60, main: true, level: "southwest" },
    // Ironton (10,573), the seat on the Ohio River and US-52, opposite West Virginia and Kentucky's Huntington-Ashland area; the county 58k.
    { id: "IRON", name: "Ironton", county: "oh-lawrence", lat: 38.53, lon: -82.68, type: "farm", size: 2, pop: 58, main: true, level: "southwest" },
    // Troy (26,329, ahead of Piqua, 20,378), the seat on the Great Miami River and I-75; the county 109k.
    { id: "TOY", name: "Troy", county: "oh-miami", lat: 40.04, lon: -84.22, type: "farm", size: 2, pop: 109, main: true, level: "southwest" },
    // Dayton (137,625; Montgomery County 537k, size 3), the Wright brothers' city. Downtown, at the Great Miami River. The National Museum of the U.S. Air Force at Wright-Patterson (Riverside, 6 mi east) is scenic and is marked on this station.
    { id: "DAY", name: "Dayton", county: "oh-montgomery", lat: 39.76, lon: -84.19, scenic: true, type: "metro", size: 3, pop: 537, main: true, level: "southwest" },
    // Eaton (8,391), the seat on US-35 and US-127 and I-70's edge; the county 41k, kept alone (see NOTES.md).
    { id: "EATO", name: "Eaton", county: "oh-preble", lat: 39.75, lon: -84.63, type: "farm", size: 1, pop: 41, main: true, level: "southwest" },
    // Portsmouth (18,258), the seat where the Scioto meets the Ohio, on US-23 and US-52; the county 74k.
    { id: "PRTS", name: "Portsmouth", county: "oh-scioto", lat: 38.75, lon: -82.95, type: "farm", size: 2, pop: 74, main: true, level: "southwest" },
    // Sidney (20,591), the seat on I-75 and the Great Miami's Loramie Creek country; the county 48k, kept alone (see NOTES.md).
    { id: "SDNY", name: "Sidney", county: "oh-shelby", lat: 40.29, lon: -84.17, type: "farm", size: 2, pop: 48, main: true, level: "southwest" },
    // Mason (34,801, ahead of Lebanon, the seat, 20,851), the Cincinnati suburb on I-71 with Kings Island; the county 242k.
    { id: "MASO", name: "Mason", county: "oh-warren", lat: 39.35, lon: -84.3, type: "metro", size: 2, pop: 242, main: true, level: "southwest" },
    // Level: northeast
    // Ashland (19,227), the seat on US-30 and I-71's edge; the county 52k.
    { id: "AHLN", name: "Ashland", county: "oh-ashland", lat: 40.87, lon: -82.32, type: "farm", size: 2, pop: 52, main: true, level: "northeast" },
    // Ashtabula (17,987, ahead of Conneaut, 12,313), the Lake Erie harbour town; the county 98k. Ashtabula's port is not marked (it is no Great Lakes giant).
    { id: "ASHT", name: "Ashtabula", county: "oh-ashtabula", lat: 41.88, lon: -80.8, type: "coast", size: 2, pop: 98, main: true, level: "northeast" },
    // Carrollton (3,089, a hair ahead of Cadiz, 3,059, Harrison's seat), Carroll's seat on SR-9 and SR-39; the two counties 41k.
    { id: "CRR", name: "Carrollton", county: "oh-carroll-harrison", lat: 40.58, lon: -81.09, type: "farm", size: 1, pop: 41, main: true, level: "northeast" },
    // Salem (11,910, ahead of East Liverpool, 9,962, on the Ohio River), the central town of the county of 102k, on US-62 and the old Pennsylvania Railroad line.
    { id: "SAE", name: "Salem", county: "oh-columbiana", lat: 40.9, lon: -80.85, type: "farm", size: 2, pop: 102, main: true, level: "northeast" },
    // Coshocton (11,053, ahead of Millersburg, 3,149, Holmes's seat), the seat where the Tuscarawas and Walhonding make the Muskingum, on US-36 and SR-83; the two counties 81k.
    { id: "COSH", name: "Coshocton", county: "oh-coshocton-holmes", lat: 40.26, lon: -81.85, type: "farm", size: 2, pop: 81, main: true, level: "northeast" },
    // Ohio's second city (372,596; Cuyahoga County 1,265k, size 4). At Public Square (the Census point is 41.48, -81.68), with Cleveland Hopkins International Airport, the Port of Cleveland (a Great Lakes port) and the Rock and Roll Hall of Fame on the lakefront, 1.6 mi north (scenic, not a separate town).
    { id: "CLE", name: "Cleveland", county: "oh-cuyahoga", lat: 41.5, lon: -81.69, airport: "Cleveland Hopkins International Airport", port: "Port of Cleveland", scenic: true, type: "metro", size: 4, pop: 1265, main: true, level: "northeast" },
    // Sandusky (25,098), the seat on Sandusky Bay and Lake Erie; the county 76k. At the downtown harbour (the Census point is 41.46, -82.71). Cedar Point (the roller-coaster park, 41.48, -82.68, on its peninsula 3 mi north-east) is scenic and marked on the station.
    { id: "SAND", name: "Sandusky", county: "oh-erie", lat: 41.45, lon: -82.71, scenic: true, type: "coast", size: 2, pop: 76, main: true, level: "northeast" },
    // Chardon (5,244), the seat and the biggest place of Geauga (Chagrin Falls, 4,188, is a town); the county 95k, the maple-syrup country.
    { id: "CHRD", name: "Chardon", county: "oh-geauga", lat: 41.58, lon: -81.21, type: "farm", size: 2, pop: 95, main: true, level: "northeast" },
    // Norwalk (17,055), the seat on US-20 and SR-18; the county 59k.
    { id: "NORW", name: "Norwalk", county: "oh-huron", lat: 41.24, lon: -82.61, type: "farm", size: 2, pop: 59, main: true, level: "northeast" },
    // Steubenville (18,169), the seat on the Ohio River and US-22; the county 65k.
    { id: "STEU", name: "Steubenville", county: "oh-jefferson", lat: 40.37, lon: -80.66, type: "farm", size: 2, pop: 65, main: true, level: "northeast" },
    // Mentor (47,441, ahead of Willoughby and Painesville, the seat), Cleveland's lakeshore suburb on I-90; the county 233k.
    { id: "MENT", name: "Mentor", county: "oh-lake", lat: 41.69, lon: -81.34, type: "metro", size: 2, pop: 233, main: true, level: "northeast" },
    // Lorain (65,212, ahead of Elyria, 52,667, the seat), the Black River harbour on Lake Erie; the county 313k. Downtown, at the lakeshore.
    { id: "LORA", name: "Lorain", county: "oh-lorain", lat: 41.45, lon: -82.18, type: "coast", size: 2, pop: 313, main: true, level: "northeast" },
    // Youngstown (60,047; Mahoning County 229k), the Mahoning Valley steel city. Downtown.
    { id: "YNG", name: "Youngstown", county: "oh-mahoning", lat: 41.1, lon: -80.65, type: "metro", size: 2, pop: 229, main: true, level: "northeast" },
    // Brunswick (35,412, ahead of Medina, the seat, 26,085, and Wadsworth), on I-71 south of Cleveland; the county 182k.
    { id: "BRUN", name: "Brunswick", county: "oh-medina", lat: 41.25, lon: -81.82, type: "metro", size: 2, pop: 182, main: true, level: "northeast" },
    // Kent (28,206, ahead of Streetsboro and Ravenna, the seat), Kent State University on the Cuyahoga River; the county 162k.
    { id: "KEN2", name: "Kent", county: "oh-portage", lat: 41.15, lon: -81.36, type: "metro", size: 2, pop: 162, main: true, level: "northeast" },
    // Canton (70,768; Stark County 375k, size 3), home of the Pro Football Hall of Fame (scenic, 2 mi north-west of downtown, so marked on the station). Downtown.
    { id: "CANT", name: "Canton", county: "oh-stark", lat: 40.8, lon: -81.38, scenic: true, type: "metro", size: 3, pop: 375, main: true, level: "northeast" },
    // Akron (190,418; Summit County 540k, size 3), the old rubber capital. Downtown.
    { id: "AKRO", name: "Akron", county: "oh-summit", lat: 41.08, lon: -81.52, type: "metro", size: 3, pop: 540, main: true, level: "northeast" },
    // Warren (39,246, ahead of Niles, 18,458), the seat on the Mahoning River; the county 202k.
    { id: "WAR", name: "Warren", county: "oh-trumbull", lat: 41.24, lon: -80.82, type: "metro", size: 2, pop: 202, main: true, level: "northeast" },
    // New Philadelphia (17,685, ahead of Dover, 13,203, 4 mi north-west), the seat on I-77 and the Tuscarawas River; the county 93k.
    { id: "NEWP", name: "New Philadelphia", county: "oh-tuscarawas", lat: 40.49, lon: -81.44, type: "farm", size: 2, pop: 93, main: true, level: "northeast" },
    // Wooster (27,246), the seat and the College of Wooster; the county 117k.
    { id: "WOOS", name: "Wooster", county: "oh-wayne", lat: 40.82, lon: -81.93, type: "farm", size: 2, pop: 117, main: true, level: "northeast" },
    // Level: northwest
    // Athens (23,843), the seat and Ohio University, on US-33 and US-50; the county 62k.
    { id: "ATHE", name: "Athens", county: "oh-athens", lat: 39.33, lon: -82.1, type: "farm", size: 2, pop: 62, main: true, level: "northwest" },
    // St. Clairsville (5,095, the seat on I-70), not Martins Ferry (6,258, the biggest, a town here): Martins Ferry is on the Ohio River, 3 mi from Wheeling, West Virginia, whose station will come later; St. Clairsville is 10 mi from it and in the middle of the county (66k).
    { id: "SC", name: "St. Clairsville", county: "oh-belmont", lat: 40.08, lon: -80.9, type: "farm", size: 2, pop: 66, main: true, level: "northwest" },
    // Defiance (17,055, ahead of Napoleon, the seat of Henry, 8,862), where the Auglaize meets the Maumee, on US-24 and US-6; the two counties 66k.
    { id: "DEFI", name: "Defiance", county: "oh-defiance-henry", lat: 41.28, lon: -84.36, type: "farm", size: 2, pop: 66, main: true, level: "northwest" },
    // Bryan (8,729, ahead of Wauseon, 7,561, Fulton's seat), Williams's seat on US-20 and the Ohio Turnpike; the two counties 80k.
    { id: "BRYA", name: "Bryan", county: "oh-fulton-williams", lat: 41.47, lon: -84.55, type: "farm", size: 1, pop: 80, main: true, level: "northwest" },
    // Cambridge (10,088), Guernsey's seat at I-70 and I-77 and the old National Road, Cambridge glass; the three counties 66k.
    { id: "CMBR", name: "Cambridge", county: "oh-guernsey-monroe-noble", lat: 40.02, lon: -81.59, type: "farm", size: 2, pop: 66, main: true, level: "northwest" },
    // Findlay (40,314), the seat on I-75 and the Blanchard River, Marathon Petroleum's home; the county 75k.
    { id: "FIND", name: "Findlay", county: "oh-hancock", lat: 41.05, lon: -83.64, type: "metro", size: 2, pop: 75, main: true, level: "northwest" },
    // Toledo (270,880; Lucas County 431k, size 3). Downtown on the Maumee River (the Census point is 41.66, -83.58, the middle of the city limits), with the Port of Toledo (a Great Lakes port at Maumee Bay).
    { id: "TOL", name: "Toledo", county: "oh-lucas", lat: 41.65, lon: -83.54, port: "Port of Toledo", type: "metro", size: 3, pop: 431, main: true, level: "northwest" },
    // New Lexington (4,430, ahead of Crooksville, 2,421), Perry's seat on SR-13 and SR-37; the two counties 49k.
    { id: "NEW", name: "New Lexington", county: "oh-morgan-perry", lat: 39.72, lon: -82.21, type: "farm", size: 1, pop: 49, main: true, level: "northwest" },
    // Zanesville (24,768), the seat where the Muskingum and Licking rivers meet, on I-70 and the National Road; the county 86k.
    { id: "ZANE", name: "Zanesville", county: "oh-muskingum", lat: 39.96, lon: -82.01, type: "farm", size: 2, pop: 86, main: true, level: "northwest" },
    // Port Clinton (6,027, ahead of Oak Harbor), the seat on Lake Erie and the ferry gateway to the Lake Erie islands (Put-in-Bay, Kelleys Island); the county 40k, kept alone (see NOTES.md).
    { id: "PC", name: "Port Clinton", county: "oh-ottawa", lat: 41.51, lon: -82.94, type: "coast", size: 1, pop: 40, main: true, level: "northwest" },
    // Van Wert (11,113, ahead of Ottawa, 4,457, Putnam's seat, and Paulding, 3,558) on US-30 and US-127; the three counties 82k.
    { id: "VANW", name: "Van Wert", county: "oh-paulding-putnam-van-wert", lat: 40.86, lon: -84.59, type: "farm", size: 2, pop: 82, main: true, level: "northwest" },
    // Fremont (15,917), the seat on the Sandusky River and the Ohio Turnpike; the county 59k.
    { id: "FRO", name: "Fremont", county: "oh-sandusky", lat: 41.35, lon: -83.12, type: "farm", size: 2, pop: 59, main: true, level: "northwest" },
    // Tiffin (17,966, ahead of Fostoria), the seat on the Sandusky River and Heidelberg University; the county 55k.
    { id: "TIFF", name: "Tiffin", county: "oh-seneca", lat: 41.11, lon: -83.18, type: "farm", size: 2, pop: 55, main: true, level: "northwest" },
    // Marietta (13,384), Ohio's oldest city (1788), the seat where the Muskingum meets the Ohio; the county 60k.
    { id: "MRTT", name: "Marietta", county: "oh-washington", lat: 39.42, lon: -81.45, type: "farm", size: 2, pop: 60, main: true, level: "northwest" },
    // Bowling Green (30,799, ahead of Perrysburg, a Toledo suburb), the seat and Bowling Green State University; the county 132k.
    { id: "BOWL", name: "Bowling Green", county: "oh-wood", lat: 41.38, lon: -83.65, type: "farm", size: 2, pop: 132, main: true, level: "northwest" },
  ],
  // Towns: the next-biggest real places and the well-known scenic ones, spread out (id = short
  // code, 2 to 4 capitals; scenic = tourists travel there).
  towns: [
    // Adams-Brown County
    // Mount Orab (4,352).
    { id: "MO", name: "Mount Orab", county: "oh-adams-brown", lat: 39.03, lon: -83.93, type: "farm", size: 1 },
    // Serpent Mound (Ohio History Connection, a National Historic Landmark): the effigy mound above Brush Creek, in Adams County; scenic.
    { id: "SERP", name: "Serpent Mound", county: "oh-adams-brown", lat: 39.03, lon: -83.43, scenic: true, type: "farm", size: 1 },
    // Allen County
    // Delphos (7,122).
    { id: "DELP", name: "Delphos", county: "oh-allen", lat: 40.85, lon: -84.34, type: "farm", size: 1 },
    // Bluffton (3,966).
    { id: "BLU", name: "Bluffton", county: "oh-allen", lat: 40.89, lon: -83.89, type: "farm", size: 1 },
    // Ashland County
    // Loudonville (2,784).
    { id: "LOUD", name: "Loudonville", county: "oh-ashland", lat: 40.63, lon: -82.23, type: "farm", size: 1 },
    // Ashtabula County
    // Conneaut (12,313).
    { id: "CONN", name: "Conneaut", county: "oh-ashtabula", lat: 41.93, lon: -80.57, type: "farm", size: 1 },
    // Jefferson (3,217).
    { id: "JEFF", name: "Jefferson", county: "oh-ashtabula", lat: 41.74, lon: -80.77, type: "farm", size: 1 },
    // Geneva-on-the-Lake, Ohio's first summer resort (1869), on the Lake Erie shore, with Geneva State Park; scenic.
    { id: "GENE", name: "Geneva-on-the-Lake", county: "oh-ashtabula", lat: 41.86, lon: -80.95, scenic: true, type: "coast", size: 1 },
    // Athens County
    // Nelsonville (4,603).
    { id: "NELS", name: "Nelsonville", county: "oh-athens", lat: 39.46, lon: -82.22, type: "farm", size: 1 },
    // Auglaize-Mercer County
    // Wapakoneta (9,951).
    { id: "WAPA", name: "Wapakoneta", county: "oh-auglaize-mercer", lat: 40.57, lon: -84.19, type: "farm", size: 1 },
    // Belmont County
    // Martins Ferry (6,258).
    { id: "MART", name: "Martins Ferry", county: "oh-belmont", lat: 40.1, lon: -80.73, type: "farm", size: 1 },
    // Butler County
    // Middletown (50,990).
    { id: "MDDL", name: "Middletown", county: "oh-butler", lat: 39.5, lon: -84.36, type: "metro", size: 2 },
    // Fairfield (44,894).
    { id: "FAF", name: "Fairfield", county: "oh-butler", lat: 39.33, lon: -84.54, type: "metro", size: 2 },
    // Oxford (23,044).
    { id: "OXFO", name: "Oxford", county: "oh-butler", lat: 39.51, lon: -84.74, type: "metro", size: 1 },
    // Carroll-Harrison County
    // Cadiz (3,059).
    { id: "CADI", name: "Cadiz", county: "oh-carroll-harrison", lat: 40.26, lon: -80.99, type: "farm", size: 1 },
    // Champaign-Logan County
    // Urbana (11,139).
    { id: "URBA", name: "Urbana", county: "oh-champaign-logan", lat: 40.11, lon: -83.75, type: "farm", size: 1 },
    // Clark County
    // New Carlisle (5,562).
    { id: "NEWC", name: "New Carlisle", county: "oh-clark", lat: 39.94, lon: -84.03, type: "farm", size: 1 },
    // Enon (2,464).
    { id: "ENON", name: "Enon", county: "oh-clark", lat: 39.87, lon: -83.93, type: "farm", size: 1 },
    // Clermont County
    // New Richmond (2,726).
    { id: "NR", name: "New Richmond", county: "oh-clermont", lat: 38.97, lon: -84.28, type: "farm", size: 1 },
    // Bethel (2,621).
    { id: "BETH", name: "Bethel", county: "oh-clermont", lat: 38.96, lon: -84.08, type: "farm", size: 1 },
    // Clinton-Highland County
    // Hillsboro (6,482).
    { id: "HILL", name: "Hillsboro", county: "oh-clinton-highland", lat: 39.21, lon: -83.61, type: "farm", size: 1 },
    // Columbiana County
    // East Liverpool (9,962).
    { id: "EAST", name: "East Liverpool", county: "oh-columbiana", lat: 40.63, lon: -80.57, type: "farm", size: 1 },
    // Columbiana (6,563).
    { id: "COU", name: "Columbiana", county: "oh-columbiana", lat: 40.89, lon: -80.67, type: "farm", size: 1 },
    // Coshocton-Holmes County
    // Millersburg (3,149).
    { id: "MIL", name: "Millersburg", county: "oh-coshocton-holmes", lat: 40.55, lon: -81.92, type: "farm", size: 1 },
    // Berlin, the heart of Holmes County's Amish Country (cheese, furniture, buggies), 8 mi east of Millersburg; scenic.
    { id: "BERL", name: "Berlin", county: "oh-coshocton-holmes", lat: 40.56, lon: -81.8, scenic: true, type: "farm", size: 1 },
    // Crawford-Morrow County
    // Galion (10,448).
    { id: "GALI", name: "Galion", county: "oh-crawford-morrow", lat: 40.74, lon: -82.78, type: "farm", size: 1 },
    // Cuyahoga County
    // Parma (81,123).
    { id: "PARM", name: "Parma", county: "oh-cuyahoga", lat: 41.38, lon: -81.73, type: "metro", size: 3 },
    // Lakewood (50,941).
    { id: "LAK", name: "Lakewood", county: "oh-cuyahoga", lat: 41.48, lon: -81.8, type: "metro", size: 2 },
    // Euclid (49,685).
    { id: "EUCL", name: "Euclid", county: "oh-cuyahoga", lat: 41.59, lon: -81.52, type: "metro", size: 2 },
    // Cleveland Heights (45,316).
    { id: "CH", name: "Cleveland Heights", county: "oh-cuyahoga", lat: 41.51, lon: -81.56, type: "metro", size: 2 },
    // Westlake (34,238).
    { id: "WES", name: "Westlake", county: "oh-cuyahoga", lat: 41.45, lon: -81.93, type: "metro", size: 2 },
    // North Royalton (31,331).
    { id: "NORT", name: "North Royalton", county: "oh-cuyahoga", lat: 41.32, lon: -81.75, type: "metro", size: 2 },
    // Darke County
    // Versailles (2,738).
    { id: "VERS", name: "Versailles", county: "oh-darke", lat: 40.22, lon: -84.48, type: "farm", size: 1 },
    // Defiance-Henry County
    // Napoleon (8,862).
    { id: "NAPO", name: "Napoleon", county: "oh-defiance-henry", lat: 41.4, lon: -84.13, type: "farm", size: 1 },
    // Delaware County
    // Powell (14,250).
    { id: "POWE", name: "Powell", county: "oh-delaware", lat: 40.17, lon: -83.08, type: "metro", size: 1 },
    // Sunbury (6,610).
    { id: "SUNB", name: "Sunbury", county: "oh-delaware", lat: 40.25, lon: -82.88, type: "metro", size: 1 },
    // Erie County
    // Huron (6,921).
    { id: "HURO", name: "Huron", county: "oh-erie", lat: 41.4, lon: -82.56, type: "farm", size: 1 },
    // Fairfield County
    // Pickerington (23,100).
    { id: "PICK", name: "Pickerington", county: "oh-fairfield", lat: 39.89, lon: -82.76, type: "farm", size: 1 },
    // Baltimore (2,980).
    { id: "BALT", name: "Baltimore", county: "oh-fairfield", lat: 39.85, lon: -82.6, type: "farm", size: 1 },
    // Fayette-Madison County
    // London (10,272).
    { id: "LOND", name: "London", county: "oh-fayette-madison", lat: 39.89, lon: -83.44, type: "farm", size: 1 },
    // Franklin County
    // Dublin (49,313).
    { id: "DUBL", name: "Dublin", county: "oh-franklin", lat: 40.11, lon: -83.15, type: "metro", size: 2 },
    // Grove City (41,244).
    { id: "GRO", name: "Grove City", county: "oh-franklin", lat: 39.89, lon: -83.1, type: "metro", size: 2 },
    // Reynoldsburg (41,070).
    { id: "REYN", name: "Reynoldsburg", county: "oh-franklin", lat: 39.96, lon: -82.79, type: "metro", size: 2 },
    // Westerville (39,194).
    { id: "WSTR", name: "Westerville", county: "oh-franklin", lat: 40.12, lon: -82.91, type: "metro", size: 2 },
    // Hilliard (37,113).
    { id: "HLLR", name: "Hilliard", county: "oh-franklin", lat: 40.03, lon: -83.16, type: "metro", size: 2 },
    // Upper Arlington (36,795).
    { id: "UPPE", name: "Upper Arlington", county: "oh-franklin", lat: 40.03, lon: -83.07, type: "metro", size: 2 },
    // Fulton-Williams County
    // Wauseon (7,561).
    { id: "WAUS", name: "Wauseon", county: "oh-fulton-williams", lat: 41.55, lon: -84.14, type: "farm", size: 1 },
    // Gallia-Meigs County
    // Middleport (2,209).
    { id: "MDD", name: "Middleport", county: "oh-gallia-meigs", lat: 38.99, lon: -82.07, type: "farm", size: 1 },
    // Geauga County
    // Chagrin Falls (4,188).
    { id: "CHAG", name: "Chagrin Falls", county: "oh-geauga", lat: 41.43, lon: -81.39, type: "farm", size: 1 },
    // Middlefield (2,751).
    { id: "MIE", name: "Middlefield", county: "oh-geauga", lat: 41.46, lon: -81.07, type: "farm", size: 1 },
    // Greene County
    // Beavercreek (46,560).
    { id: "BVRC", name: "Beavercreek", county: "oh-greene", lat: 39.73, lon: -84.06, type: "metro", size: 2 },
    // Fairborn (34,531).
    { id: "FRBR", name: "Fairborn", county: "oh-greene", lat: 39.8, lon: -84.01, type: "metro", size: 2 },
    // Guernsey-Monroe-Noble County
    // Woodsfield (2,211).
    { id: "WOOD", name: "Woodsfield", county: "oh-guernsey-monroe-noble", lat: 39.76, lon: -81.12, type: "farm", size: 1 },
    // Hamilton County
    // Norwood (19,050).
    { id: "NRW", name: "Norwood", county: "oh-hamilton", lat: 39.16, lon: -84.45, type: "metro", size: 1 },
    // Sharonville (14,109).
    { id: "SHAR", name: "Sharonville", county: "oh-hamilton", lat: 39.28, lon: -84.41, type: "metro", size: 1 },
    // Loveland (13,311).
    { id: "LOVE", name: "Loveland", county: "oh-hamilton", lat: 39.27, lon: -84.27, type: "metro", size: 1 },
    // Harrison (12,566).
    { id: "HAR", name: "Harrison", county: "oh-hamilton", lat: 39.26, lon: -84.79, type: "metro", size: 1 },
    // Reading (10,602).
    { id: "READ", name: "Reading", county: "oh-hamilton", lat: 39.22, lon: -84.43, type: "metro", size: 1 },
    // Hancock County
    // McComb (1,566).
    { id: "MCCO", name: "McComb", county: "oh-hancock", lat: 41.11, lon: -83.79, type: "farm", size: 1 },
    // Hardin-Wyandot County
    // Upper Sandusky (6,699).
    { id: "UPP", name: "Upper Sandusky", county: "oh-hardin-wyandot", lat: 40.83, lon: -83.27, type: "farm", size: 1 },
    // Hocking-Vinton County
    // McArthur (1,787).
    { id: "MCAR", name: "McArthur", county: "oh-hocking-vinton", lat: 39.25, lon: -82.48, type: "farm", size: 1 },
    // Hocking Hills State Park (Ohio DNR): Old Man's Cave, Ash Cave and Cedar Falls in the sandstone gorges, 10 mi south-west of Logan; scenic.
    { id: "HOCK", name: "Hocking Hills State Park", county: "oh-hocking-vinton", lat: 39.43, lon: -82.54, scenic: true, type: "mountain", size: 1 },
    // Huron County
    // Bellevue (8,232).
    { id: "BLLV", name: "Bellevue", county: "oh-huron", lat: 41.27, lon: -82.84, type: "farm", size: 1 },
    // Jackson-Pike County
    // Wellston (5,415).
    { id: "WELL", name: "Wellston", county: "oh-jackson-pike", lat: 39.12, lon: -82.54, type: "farm", size: 1 },
    // Jefferson County
    // Toronto (5,306).
    { id: "TORO", name: "Toronto", county: "oh-jefferson", lat: 40.46, lon: -80.61, type: "farm", size: 1 },
    // Knox County
    // Fredericktown (2,647).
    { id: "FRDR", name: "Fredericktown", county: "oh-knox", lat: 40.48, lon: -82.55, type: "farm", size: 1 },
    // Lake County
    // Willoughby (23,860).
    { id: "WILL", name: "Willoughby", county: "oh-lake", lat: 41.65, lon: -81.41, type: "metro", size: 1 },
    // Painesville (20,295).
    { id: "PAIN", name: "Painesville", county: "oh-lake", lat: 41.72, lon: -81.26, type: "metro", size: 1 },
    // Lawrence County
    // South Point (3,831).
    { id: "SOUT", name: "South Point", county: "oh-lawrence", lat: 38.42, lon: -82.58, type: "farm", size: 1 },
    // Licking County
    // Pataskala (17,883).
    { id: "PATA", name: "Pataskala", county: "oh-licking", lat: 40.02, lon: -82.72, type: "metro", size: 1 },
    // Granville (5,950).
    { id: "GRA", name: "Granville", county: "oh-licking", lat: 40.06, lon: -82.5, type: "metro", size: 1 },
    // Lorain County
    // Elyria (52,667).
    { id: "ELYR", name: "Elyria", county: "oh-lorain", lat: 41.37, lon: -82.11, type: "metro", size: 2 },
    // North Ridgeville (35,273).
    { id: "NORI", name: "North Ridgeville", county: "oh-lorain", lat: 41.39, lon: -82.02, type: "metro", size: 2 },
    // Avon Lake (25,203).
    { id: "AVON", name: "Avon Lake", county: "oh-lorain", lat: 41.49, lon: -82.02, type: "metro", size: 2 },
    // Lucas County
    // Oregon (19,952).
    { id: "OREG", name: "Oregon", county: "oh-lucas", lat: 41.66, lon: -83.44, type: "metro", size: 1 },
    // Sylvania (19,005).
    { id: "SYLV", name: "Sylvania", county: "oh-lucas", lat: 41.71, lon: -83.71, type: "metro", size: 1 },
    // Maumee (13,889).
    { id: "MM", name: "Maumee", county: "oh-lucas", lat: 41.57, lon: -83.67, type: "metro", size: 1 },
    // Mahoning County
    // Struthers (10,063).
    { id: "STRU", name: "Struthers", county: "oh-mahoning", lat: 41.05, lon: -80.59, type: "metro", size: 1 },
    // Canfield (7,697).
    { id: "CANF", name: "Canfield", county: "oh-mahoning", lat: 41.03, lon: -80.77, type: "metro", size: 1 },
    // Marion County
    // Prospect (1,067).
    { id: "PROS", name: "Prospect", county: "oh-marion", lat: 40.45, lon: -83.18, type: "farm", size: 1 },
    // Medina County
    // Medina (26,085).
    { id: "MEDI", name: "Medina", county: "oh-medina", lat: 41.13, lon: -81.87, type: "metro", size: 2 },
    // Wadsworth (24,021).
    { id: "WADS", name: "Wadsworth", county: "oh-medina", lat: 41.03, lon: -81.73, type: "metro", size: 1 },
    // Miami County
    // Piqua (20,378).
    { id: "PIQU", name: "Piqua", county: "oh-miami", lat: 40.15, lon: -84.24, type: "farm", size: 1 },
    // Tipp City (10,279).
    { id: "TIPP", name: "Tipp City", county: "oh-miami", lat: 39.96, lon: -84.19, type: "farm", size: 1 },
    // Montgomery County
    // Kettering (57,869).
    { id: "KETT", name: "Kettering", county: "oh-montgomery", lat: 39.7, lon: -84.15, type: "metro", size: 2 },
    // Huber Heights (43,431).
    { id: "HUBE", name: "Huber Heights", county: "oh-montgomery", lat: 39.86, lon: -84.11, type: "metro", size: 2 },
    // Centerville (24,249).
    { id: "CENT", name: "Centerville", county: "oh-montgomery", lat: 39.63, lon: -84.15, type: "metro", size: 1 },
    // Trotwood (23,076).
    { id: "TROT", name: "Trotwood", county: "oh-montgomery", lat: 39.79, lon: -84.32, type: "metro", size: 1 },
    // Morgan-Perry County
    // Crooksville (2,421).
    { id: "CROO", name: "Crooksville", county: "oh-morgan-perry", lat: 39.77, lon: -82.09, type: "farm", size: 1 },
    // Muskingum County
    // New Concord (2,361).
    { id: "NC", name: "New Concord", county: "oh-muskingum", lat: 39.99, lon: -81.74, type: "farm", size: 1 },
    // Ottawa County
    // Oak Harbor (2,825).
    { id: "OAKH", name: "Oak Harbor", county: "oh-ottawa", lat: 41.51, lon: -83.14, type: "farm", size: 1 },
    // Put-in-Bay, on South Bass Island in Lake Erie: Perry's Victory and International Peace Memorial (NPS); scenic. Reached by ferry from Port Clinton.
    { id: "PUTI", name: "Put-in-Bay", county: "oh-ottawa", lat: 41.65, lon: -82.82, scenic: true, type: "coast", size: 1 },
    // Paulding-Putnam-Van Wert County
    // Ottawa (4,457).
    { id: "OTTA", name: "Ottawa", county: "oh-paulding-putnam-van-wert", lat: 41.02, lon: -84.04, type: "farm", size: 1 },
    // Pickaway County
    // Ashville (4,533).
    { id: "ASHV", name: "Ashville", county: "oh-pickaway", lat: 39.72, lon: -82.96, type: "farm", size: 1 },
    // Portage County
    // Streetsboro (17,263).
    { id: "STRE", name: "Streetsboro", county: "oh-portage", lat: 41.24, lon: -81.35, type: "metro", size: 1 },
    // Aurora (17,239).
    { id: "AR", name: "Aurora", county: "oh-portage", lat: 41.31, lon: -81.34, type: "metro", size: 1 },
    // Preble County
    // Camden (1,987).
    { id: "CAMD", name: "Camden", county: "oh-preble", lat: 39.64, lon: -84.64, type: "farm", size: 1 },
    // Richland County
    // Shelby (9,281).
    { id: "SHEL", name: "Shelby", county: "oh-richland", lat: 40.89, lon: -82.66, type: "farm", size: 1 },
    // Lexington (4,850).
    { id: "LEXI", name: "Lexington", county: "oh-richland", lat: 40.68, lon: -82.58, type: "farm", size: 1 },
    // Ross County
    // Kingston (1,260).
    { id: "KING", name: "Kingston", county: "oh-ross", lat: 39.47, lon: -82.91, type: "farm", size: 1 },
    // Sandusky County
    // Clyde (6,307).
    { id: "CLYD", name: "Clyde", county: "oh-sandusky", lat: 41.3, lon: -82.98, type: "farm", size: 1 },
    // Scioto County
    // South Webster (669).
    { id: "SW", name: "South Webster", county: "oh-scioto", lat: 38.82, lon: -82.73, type: "farm", size: 1 },
    // Seneca County
    // Fostoria (13,047).
    { id: "FOST", name: "Fostoria", county: "oh-seneca", lat: 41.16, lon: -83.41, type: "farm", size: 1 },
    // Shelby County
    // Fort Loramie (1,598).
    { id: "FOR", name: "Fort Loramie", county: "oh-shelby", lat: 40.35, lon: -84.37, type: "farm", size: 1 },
    // Stark County
    // Massillon (32,046).
    { id: "MASS", name: "Massillon", county: "oh-stark", lat: 40.78, lon: -81.53, type: "metro", size: 2 },
    // Alliance (21,668).
    { id: "ALL", name: "Alliance", county: "oh-stark", lat: 40.91, lon: -81.12, type: "metro", size: 1 },
    // North Canton (17,841).
    { id: "NOCA", name: "North Canton", county: "oh-stark", lat: 40.87, lon: -81.4, type: "metro", size: 1 },
    // Summit County
    // Cuyahoga Falls (51,119).
    { id: "CUY", name: "Cuyahoga Falls", county: "oh-summit", lat: 41.18, lon: -81.55, type: "metro", size: 2 },
    // Stow (34,491).
    { id: "STOW", name: "Stow", county: "oh-summit", lat: 41.18, lon: -81.44, type: "metro", size: 2 },
    // Green (27,484).
    { id: "GEN", name: "Green", county: "oh-summit", lat: 40.95, lon: -81.47, type: "metro", size: 2 },
    // Barberton (25,180).
    { id: "BARB", name: "Barberton", county: "oh-summit", lat: 41.01, lon: -81.6, type: "metro", size: 2 },
    // Cuyahoga Valley National Park (NPS), the Cuyahoga River gorge and the Towpath Trail between Akron and Cleveland, at Peninsula (the park's heart, 11 mi north of Akron); scenic.
    { id: "CUYA", name: "Cuyahoga Valley National Park", county: "oh-summit", lat: 41.26, lon: -81.55, scenic: true, type: "mountain", size: 1 },
    // Trumbull County
    // Niles (18,458).
    { id: "NILE", name: "Niles", county: "oh-trumbull", lat: 41.19, lon: -80.75, type: "metro", size: 1 },
    // Hubbard (7,635).
    { id: "HUBB", name: "Hubbard", county: "oh-trumbull", lat: 41.16, lon: -80.56, type: "metro", size: 1 },
    // Tuscarawas County
    // Uhrichsville (5,261).
    { id: "UHRI", name: "Uhrichsville", county: "oh-tuscarawas", lat: 40.4, lon: -81.35, type: "farm", size: 1 },
    // Newcomerstown (3,713).
    { id: "NWCM", name: "Newcomerstown", county: "oh-tuscarawas", lat: 40.28, lon: -81.6, type: "farm", size: 1 },
    // Union County
    // Richwood (2,222).
    { id: "RIC", name: "Richwood", county: "oh-union", lat: 40.43, lon: -83.29, type: "farm", size: 1 },
    // Warren County
    // Lebanon (20,851).
    { id: "LEBA", name: "Lebanon", county: "oh-warren", lat: 39.43, lon: -84.21, type: "metro", size: 1 },
    // Springboro (19,072).
    { id: "SPN", name: "Springboro", county: "oh-warren", lat: 39.56, lon: -84.23, type: "metro", size: 1 },
    // Washington County
    // Belpre (6,729).
    { id: "BELP", name: "Belpre", county: "oh-washington", lat: 39.28, lon: -81.59, type: "farm", size: 1 },
    // Wayne County
    // Orrville (8,457).
    { id: "ORRV", name: "Orrville", county: "oh-wayne", lat: 40.85, lon: -81.78, type: "farm", size: 1 },
    // Rittman (6,133).
    { id: "RITT", name: "Rittman", county: "oh-wayne", lat: 40.97, lon: -81.78, type: "farm", size: 1 },
    // Wood County
    // Rossford (6,298).
    { id: "ROSS", name: "Rossford", county: "oh-wood", lat: 41.58, lon: -83.57, type: "farm", size: 1 },
    // North Baltimore (3,369).
    { id: "NB", name: "North Baltimore", county: "oh-wood", lat: 41.18, lon: -83.67, type: "farm", size: 1 },
  ],
  // Ohio's hills (the Allegheny Plateau of the south-east) are hills on the map's grid, not
  // mountains: there are no passes.
  passes: [],
  // Real bridges: [name, latitude, longitude]. A river or lake crossed near one uses the real
  // bridge (cheaper, and any length); anywhere else you build a new one, if the water is narrow
  // enough. River bridges stand on the map's river where it passes the town; the Kentucky, West
  // Virginia and Indiana bridges are named as those packs will (sources in NOTES.md).
  bridges: [
    // The Ohio River (Kentucky and West Virginia come later; these are the real crossings)
    ["Roebling Suspension Bridge (Cincinnati–Covington)", 39.094, -84.51],
    ["Brent Spence Bridge (I-71/I-75, Cincinnati–Covington)", 39.093, -84.522],
    ["Carl Perkins Bridge (US-23, Portsmouth–South Shore)", 38.73, -82.99],
    ["Ironton–Russell Bridge (US-52)", 38.51, -82.72],
    ["Silver Memorial Bridge (US-35, Gallipolis–Point Pleasant)", 38.83, -82.14],
    ["Pomeroy–Mason Bridge (US-33)", 39.03, -82.02],
    ["Parkersburg–Belpre Bridge (US-50)", 39.27, -81.56],
    ["Williamstown–Marietta Bridge (SR-7)", 39.41, -81.46],
    ["Fort Henry Bridge (I-70, Wheeling–Bridgeport)", 40.08, -80.73],
    ["Veterans Memorial Bridge (Steubenville–Weirton)", 40.39, -80.62],
    ["Jennings Randolph Bridge (East Liverpool–Chester)", 40.62, -80.58],
    // The Scioto
    ["Scioto River bridges (Columbus)", 39.96, -83],
    ["Scioto River bridge (Circleville)", 39.6, -82.94],
    ["Scioto River bridges (Chillicothe)", 39.33, -82.99],
    ["Scioto River bridge (Portsmouth, US-23)", 38.75, -83],
    // The Great Miami
    ["Great Miami River bridges (Dayton)", 39.76, -84.19],
    ["Great Miami River bridges (Hamilton)", 39.4, -84.56],
    ["Great Miami River bridge (Middletown)", 39.51, -84.4],
    ["Great Miami River bridge (Troy)", 40.04, -84.2],
    ["Great Miami River bridge (Piqua)", 40.15, -84.24],
    ["Great Miami River bridge (Sidney)", 40.28, -84.15],
    // The Maumee
    ["Maumee River bridges (Toledo, I-75 and I-280)", 41.65, -83.52],
    ["Maumee River bridge (Perrysburg–Maumee)", 41.55, -83.64],
    ["Maumee River bridge (Napoleon)", 41.39, -84.12],
    ["Maumee River bridge (Defiance)", 41.28, -84.36],
    // The Muskingum
    ["Muskingum River bridges (Zanesville, the Y-Bridge)", 39.94, -82.01],
    ["Muskingum River bridge (Marietta)", 39.42, -81.45],
    ["Muskingum River bridge (Coshocton)", 40.27, -81.86],
    // The St. Marys
    ["St. Marys River bridge (St. Marys)", 40.54, -84.39],
    // Lake Erie (the Sandusky Bay crossing, the shore towns and the island ferry)
    ["Thomas Edison Memorial Bridge (SR-2, Sandusky Bay)", 41.46, -82.9],
    ["Vermilion River bridge (US-6, Vermilion)", 41.42, -82.36],
    ["Miller Boat Line ferry (Catawba–Put-in-Bay)", 41.6, -82.84],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills; dry = sand, cacti
  // or sagebrush. Regions not listed are green farmland (the Corn Belt).
  biomes: {
    // Wayne National Forest and Shawnee State Forest: the hill country of the south-east
    forest: ["oh-hocking-vinton", "oh-athens", "oh-gallia-meigs", "oh-lawrence", "oh-morgan-perry", "oh-jackson-pike", "oh-adams-brown", "oh-scioto", "oh-washington"],
    // The rest of the plateau, the Ohio and Muskingum valleys, the Lake Erie shore's woods and
    // the Cincinnati hills
    wooded: ["oh-guernsey-monroe-noble", "oh-carroll-harrison", "oh-belmont", "oh-jefferson", "oh-tuscarawas", "oh-coshocton-holmes", "oh-muskingum", "oh-knox", "oh-columbiana", "oh-ross", "oh-clinton-highland", "oh-hamilton", "oh-clermont", "oh-geauga", "oh-ashtabula", "oh-fairfield", "oh-licking"],
  },
  levels: [
    {
      name: "Columbus & Central Ohio",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        // Columbus to Mansfield, as I-71 runs
        { kind: "connect", a: "CMH", b: "MANS" },
      ],
    },
    {
      name: "Cincinnati, Dayton & the Ohio River",
      areas: ["southwest"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Columbus to Cincinnati, as I-71 runs
        { kind: "connect", a: "CMH", b: "CIN" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "Cleveland, Akron & the Northeast",
      areas: ["northeast"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Columbus to Cleveland, as I-71 runs
        { kind: "connect", a: "CMH", b: "CLE" },
        { kind: "cargo", cargo: "containers", target: 10 },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Toledo, the Northwest & Appalachian Ohio",
      areas: ["northwest"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Cleveland to Toledo, along the lake shore and I-90/US-20
        { kind: "connect", a: "CLE", b: "TOL" },
        { kind: "counties", target: 40 },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
});
