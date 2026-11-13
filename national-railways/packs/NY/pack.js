// National Railways pack: New York.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// bays and where the forests are. The county borders come from map.js and the mountains, lakes
// and rivers from terrain.js. What each field means: PACKS.md. Judgment calls and sources:
// packs/NY/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/NY/raw.
// New York's 62 counties are 53 regions (merges and names in tools/build-map.js, STATES.NY).
NR.addPack({
  code: "NY",
  name: "New York",
  // A game that starts here begins owning Manhattan (the heart of the city), Brooklyn and Queens: Brooklyn and
  // Queens both touch Manhattan across the East River, and each other by land. Manhattan and Queens are metro
  // and Brooklyn is coast, so the first track (Manhattan to Brooklyn, the nearest pair of different types, 4 mi)
  // has riders.
  start: ["ny-new-york", "ny-kings", "ny-queens"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code
  // shown on passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. Points are the Census points (every Census place is in
  // packs/NY/raw/places.json) except where a comment says it was moved to a downtown or hand-placed.
  stations: [
    // Level: New York City and Long Island: the five boroughs, Nassau, Suffolk and Westchester, the core of the biggest metro of the country
    // Manhattan (1,694k): hand-placed at Penn Station (Amtrak's Northeast Corridor and Empire Service, the LIRR and NJ Transit hub, with Madison Square Garden), because places.json files the whole city under Brooklyn. The core of the biggest metro of the country (20 million with New Jersey), size 5.
    { id: "NYC", name: "Manhattan", county: "ny-new-york", lat: 40.75, lon: -73.99, type: "metro", size: 5, pop: 1694, main: true, level: "metro" },
    // Brooklyn (2,736k, the biggest region): hand-placed at Downtown Brooklyn and Atlantic Terminal (the LIRR and subway hub), the Census point for 'New York' (40.66,-73.94) being the middle of the borough. Typed coast (the harbour, Coney Island and the Rockaways side of the Atlantic) so that the starting trio has two types of place. Size 5.
    { id: "BKLN", name: "Brooklyn", county: "ny-kings", lat: 40.69, lon: -73.98, type: "coast", size: 5, pop: 2736, main: true, level: "metro" },
    // Queens (2,405k): hand-placed at Jamaica, the LIRR hub (Jamaica Station) and AirTrain link to JFK. JFK (1948) is in the borough, so the airport sits here; LaGuardia is on Flushing. Size 5, like Anaheim.
    { id: "QNS", name: "Queens", county: "ny-queens", lat: 40.7, lon: -73.81, airport: "John F. Kennedy International Airport", type: "metro", size: 5, pop: 2405, main: true, level: "metro" },
    // The Bronx (1,473k): hand-placed at Fordham Plaza (Fordham University, a Metro-North Harlem Line station and the borough's shopping centre). 1.47 million people, just under the 1.5 million line: size 4.
    { id: "BRNX", name: "The Bronx", county: "ny-bronx", lat: 40.86, lon: -73.89, type: "metro", size: 4, pop: 1473, main: true, level: "metro" },
    // Staten Island (496k): hand-placed at St. George, the ferry terminal and the end of the Staten Island Railway. No land link to the rest of the city: the Verrazzano-Narrows Bridge to Brooklyn and the Staten Island Ferry to Manhattan are bridges in the map. Size 3 (350,000 to 900,000).
    { id: "SI", name: "Staten Island", county: "ny-richmond", lat: 40.64, lon: -74.08, type: "coast", size: 3, pop: 496, main: true, level: "metro" },
    // Hempstead (59,183): the biggest place of Nassau, the village at the heart of the county on the LIRR's Hempstead Branch and the Long Island Expressway/Meadowbrook corridors. Region 1.4 million, size 4 (like Fairfax and Montgomery).
    { id: "HMPD", name: "Hempstead", county: "ny-nassau", lat: 40.7, lon: -73.62, type: "metro", size: 4, pop: 1396, main: true, level: "metro" },
    // Patchogue (12,395): the middle of Suffolk's south shore on the Montauk Branch, 6 mi from Long Island MacArthur Airport in Ronkonkoma/Islip, with Great South Bay and the Fire Island ferries. Region 1.5 million, size 4.
    { id: "PTCG", name: "Patchogue", county: "ny-suffolk", lat: 40.76, lon: -73.02, airport: "Long Island MacArthur Airport", type: "coast", size: 4, pop: 1526, main: true, level: "metro" },
    // Yonkers (211,584): the biggest city of Westchester, at downtown and the Hudson Line station on the river (the Census point 40.95,-73.87 is the middle of the city limits, 2 mi north-east). White Plains (the seat and Westchester County Airport) and New Rochelle are towns. Region 1.0 million, size 4.
    { id: "YNKR", name: "Yonkers", county: "ny-westchester", lat: 40.93, lon: -73.9, type: "metro", size: 4, pop: 1004, main: true, level: "metro" },
    // Level: The Hudson Valley and the Capital District: the Hudson Line, the Thruway, Albany, Troy and Schenectady
    // Brewster (2,510): the biggest place of Putnam, on I-84 and I-684 and the Metro-North Harlem Line, in the middle of the county's east side (Carmel, the seat, has no Census population in the data). Region 98k, size 2 (under 140k, a commuter county).
    { id: "BRWS", name: "Brewster", county: "ny-putnam", lat: 41.4, lon: -73.62, type: "farm", size: 2, pop: 98, main: true, level: "hudson" },
    // Spring Valley (33,047): the biggest place of Rockland (New City, the seat, is a hamlet of 34,000 with no village population in the data), on the Pascack Valley and Port Jervis lines' corridor, the Palisades Interstate/NY-59 and I-287 area. Region 338k, size 3 ('about 350,000').
    { id: "SPVY", name: "Spring Valley", county: "ny-rockland", lat: 41.11, lon: -74.05, type: "metro", size: 3, pop: 338, main: true, level: "hudson" },
    // Newburgh (28,862): the Hudson port city at the Newburgh-Beacon Bridge (I-84), the river end of the Orange County rail and road network, downtown (the Census point is 41.50,-74.02). Middletown (Port Jervis Line, NY-17) is a town. Region 401k, size 3.
    { id: "NEWY", name: "Newburgh", county: "ny-orange", lat: 41.5, lon: -74.01, type: "metro", size: 3, pop: 401, main: true, level: "hudson" },
    // Poughkeepsie (31,591): the Dutchess seat on the Hudson with Metro-North/Amtrak at the Mid-Hudson Bridge (Vassar College). Region 297k, size 2.
    { id: "PKPS", name: "Poughkeepsie", county: "ny-dutchess", lat: 41.69, lon: -73.92, type: "metro", size: 2, pop: 297, main: true, level: "hudson" },
    // Kingston (24,062): the Ulster seat and first state capital on the Hudson and the Rondout, with the Kingston-Rhinecliff Bridge and the Thruway. Region 182k, size 2.
    { id: "KINY", name: "Kingston", county: "ny-ulster", lat: 41.93, lon: -74, type: "farm", size: 2, pop: 182, main: true, level: "hudson" },
    // Monticello (7,251): the Sullivan seat and gateway of the Catskills' old Borscht Belt on NY-17 (the Quickway, future I-86) and NY-42. Region 79k, size 1.
    { id: "MONY", name: "Monticello", county: "ny-sullivan", lat: 41.65, lon: -74.69, type: "mountain", size: 1, pop: 79, main: true, level: "hudson" },
    // Hudson (5,894): the Columbia seat on the river, the Amtrak Empire Service station and the Rip Van Winkle Bridge to Catskill, the biggest place. Region 62k, size 1.
    { id: "HDSN", name: "Hudson", county: "ny-columbia", lat: 42.25, lon: -73.79, type: "farm", size: 1, pop: 62, main: true, level: "hudson" },
    // Catskill (3,797): Greene has 62% of the region's people (48k of 78k), and Catskill is on the Hudson and NY-23/32, the Thruway and the Rip Van Winkle Bridge, the gateway of the Catskills. Cobleskill (Schoharie, I-88) is a town.
    { id: "CTSK", name: "Catskill", county: "ny-greene-schoharie", lat: 42.21, lon: -73.86, type: "mountain", size: 1, pop: 78, main: true, level: "hudson" },
    // Albany (99,239): the state capital at the Capitol and Albany-Rensselaer rail station across the river, I-87/I-90 (the Census point is 42.67,-73.80, 2 mi west). Albany International Airport is in Colonie, in the county. Region 315k, the core of a 900k metro: size 3.
    { id: "ALNY", name: "Albany", county: "ny-albany", lat: 42.65, lon: -73.76, airport: "Albany International Airport", type: "metro", size: 3, pop: 315, main: true, level: "hudson" },
    // Troy (51,419): the Rensselaer seat on the Hudson, RPI, the Erie Canal's east end at the Federal Lock. Region 161k, size 2.
    { id: "TRNY", name: "Troy", county: "ny-rensselaer", lat: 42.74, lon: -73.68, type: "metro", size: 2, pop: 161, main: true, level: "hudson" },
    // Schenectady (67,049): downtown on the Mohawk, the Amtrak Empire Service station, the old General Electric city (the Census point is 42.80,-73.93). Region 158k, size 2.
    { id: "SCHN", name: "Schenectady", county: "ny-schenectady", lat: 42.81, lon: -73.94, type: "metro", size: 2, pop: 158, main: true, level: "hudson" },
    // Saratoga Springs (28,503): the biggest place of Saratoga on the Adirondack Northway (I-87) and the Amtrak Adirondack/Ethan Allen line, the spa and horse-racing city (Saratoga Race Course, 1863). Region 236k, size 2. Scenic.
    { id: "SRTG", name: "Saratoga Springs", county: "ny-saratoga", lat: 43.07, lon: -73.78, scenic: true, type: "farm", size: 2, pop: 236, main: true, level: "hudson" },
    // Level: The Mohawk Valley, Syracuse and the North Country: the Erie Canal, the Empire Corridor, the Adirondacks and the St. Lawrence
    // Glens Falls (14,834): the Warren biggest place at the Hudson's great bend, I-87 and the gateway of Lake George and the southern Adirondacks. Region 66k, size 1.
    { id: "GLFL", name: "Glens Falls", county: "ny-warren", lat: 43.31, lon: -73.65, type: "mountain", size: 1, pop: 66, main: true, level: "mohawk" },
    // Fort Edward (3,168): Fort Edward is on the Hudson, US-4, the Champlain Canal and the Amtrak Adirondack/Ethan Allen stop, and keeps the spacing from Glens Falls over 4 miles. Region 61k, size 1.
    { id: "FTED", name: "Fort Edward", county: "ny-washington", lat: 43.27, lon: -73.58, type: "farm", size: 1, pop: 61, main: true, level: "mohawk" },
    // Amsterdam (18,218): the Mohawk Valley city on the Thruway and the Mohawk, the carpet-mill city. Region 50k, size 1.
    { id: "AMST", name: "Amsterdam", county: "ny-montgomery", lat: 42.94, lon: -74.19, type: "farm", size: 1, pop: 50, main: true, level: "mohawk" },
    // Gloversville (15,138): the old glove-making city at the foot of the Adirondacks on NY-30A (Johnstown, the seat, is 3 mi away and not used). Region 53k, size 1.
    { id: "GLVL", name: "Gloversville", county: "ny-fulton", lat: 43.05, lon: -74.35, type: "mountain", size: 1, pop: 53, main: true, level: "mohawk" },
    // Herkimer (7,304): the Herkimer seat on the Mohawk, the Thruway (exit 30) and NY-5S/28, in the middle of the valley's rail and road line (the Herkimer Diamond Mines). Region 60k, size 1.
    { id: "HKMR", name: "Herkimer", county: "ny-herkimer", lat: 43.03, lon: -74.99, type: "farm", size: 1, pop: 60, main: true, level: "mohawk" },
    // Utica (65,286): the Mohawk Valley city on the Thruway and the Amtrak Empire Service, the Erie Canal city at Union Station. Region 232k, size 2.
    { id: "UTCA", name: "Utica", county: "ny-oneida", lat: 43.1, lon: -75.23, type: "metro", size: 2, pop: 232, main: true, level: "mohawk" },
    // Oneida (10,335): the biggest place of Madison, the Oneida Community's home on the Thruway (exit 33) and the Canastota/Oneida Erie Canal corridor. Region 68k, size 1.
    { id: "ONEI", name: "Oneida", county: "ny-madison", lat: 43.07, lon: -75.67, type: "farm", size: 1, pop: 68, main: true, level: "mohawk" },
    // Syracuse (148,615): downtown at Clinton Square, the Erie Canal's crossroads, I-81 and I-90 and the Empire Service (the Census point is 43.04,-76.14). Syracuse Hancock Airport is in Mattydale/Salina, in the county. Region 477k, size 3.
    { id: "SYNY", name: "Syracuse", county: "ny-onondaga", lat: 43.05, lon: -76.15, airport: "Syracuse Hancock International Airport", type: "metro", size: 3, pop: 477, main: true, level: "mohawk" },
    // Oswego (16,925): the Lake Ontario port at the mouth of the Oswego River and the Oswego Canal (Fort Ontario). Region 118k, size 1.
    { id: "OSWE", name: "Oswego", county: "ny-oswego", lat: 43.46, lon: -76.5, type: "coast", size: 1, pop: 118, main: true, level: "mohawk" },
    // Auburn (26,870): the Cayuga seat at the head of Owasco Lake, NY-5/20 (Harriet Tubman's home). Region 76k, size 1.
    { id: "AUBY", name: "Auburn", county: "ny-cayuga", lat: 42.93, lon: -76.57, type: "farm", size: 1, pop: 76, main: true, level: "mohawk" },
    // Oneonta (13,080): the biggest place of Otsego on the Susquehanna, I-88 and the Delaware & Hudson line, the Southern Tier link to Albany. Region 59k, size 1.
    { id: "ONEO", name: "Oneonta", county: "ny-otsego", lat: 42.45, lon: -75.07, type: "farm", size: 1, pop: 59, main: true, level: "mohawk" },
    // Lowville (3,341): the Lewis seat in the Black River valley on NY-12/26 below Tug Hill. Region 27k, size 1 (the smallest region; see the phase 1 exception).
    { id: "LOWV", name: "Lowville", county: "ny-lewis", lat: 43.79, lon: -75.49, type: "farm", size: 1, pop: 27, main: true, level: "mohawk" },
    // Watertown (24,670): the Jefferson seat on the Black River, I-81 and Fort Drum's gateway city. Region 117k, size 1.
    { id: "WTWN", name: "Watertown", county: "ny-jefferson", lat: 43.97, lon: -75.91, type: "farm", size: 1, pop: 117, main: true, level: "mohawk" },
    // Massena (10,270): the biggest place of St. Lawrence on the St. Lawrence Seaway and the Raquette, NY-37 at the Seaway International Bridge to Cornwall. Ogdensburg (Prescott bridge) and Potsdam are towns. Region 109k, size 1.
    { id: "MSNA", name: "Massena", county: "ny-st-lawrence", lat: 44.93, lon: -74.89, type: "mountain", size: 1, pop: 109, main: true, level: "mohawk" },
    // Plattsburgh (19,837): the Clinton seat on Lake Champlain, I-87 and the Amtrak Adirondack line, 22 mi from Lacolle, Quebec. Region 80k, size 1.
    { id: "PLBG", name: "Plattsburgh", county: "ny-clinton", lat: 44.69, lon: -73.46, type: "coast", size: 1, pop: 80, main: true, level: "mohawk" },
    // Saranac Lake (4,961): the middle of the Adirondack Park on NY-3/86 and NY-30, 6 mi from Lake Placid (a scenic town); Malone and Tupper Lake are towns. Region 90k, size 1.
    { id: "SRLK", name: "Saranac Lake", county: "ny-essex-franklin-hamilton", lat: 44.33, lon: -74.13, type: "mountain", size: 1, pop: 90, main: true, level: "mohawk" },
    // Level: Western New York, the Finger Lakes and the Southern Tier: Buffalo, Rochester, I-90, I-86 and I-81
    // Buffalo (278,290): downtown at the Lake Erie harbour, Exchange Street station and the Thruway/I-190 (the Census point is 42.89,-78.86). A metro of 1.1 million (like Cleveland, Cincinnati, Columbus: size 4). The Port of Buffalo is a Great Lakes port like Cleveland and Toledo. Buffalo Niagara Airport is in Cheektowaga, in the county. Region 954k.
    { id: "BFNY", name: "Buffalo", county: "ny-erie", lat: 42.89, lon: -78.87, port: "Port of Buffalo", airport: "Buffalo Niagara International Airport", type: "metro", size: 4, pop: 954, main: true, level: "west" },
    // Niagara Falls (48,671): the American Falls and the Rainbow Bridge to Niagara Falls, Ontario, 4 mi from the Ontario pack's own Niagara Falls. Region 213k, size 2. Scenic.
    { id: "NFNY", name: "Niagara Falls", county: "ny-niagara", lat: 43.09, lon: -79.05, scenic: true, type: "coast", size: 2, pop: 213, main: true, level: "west" },
    // Rochester (211,314): downtown at the High Falls on the Genesee, the Amtrak Empire Service and the Thruway (the Census point is 43.17,-77.62). A metro of 1.1 million: size 4. Rochester Airport is in Gates/Chili, in the county. Region 759k.
    { id: "RCNY", name: "Rochester", county: "ny-monroe", lat: 43.16, lon: -77.61, airport: "Frederick Douglass Greater Rochester International Airport", type: "metro", size: 4, pop: 759, main: true, level: "west" },
    // Batavia (15,591): the Genesee seat on the Thruway (exit 48), NY-5/33 and the Buffalo-Rochester CSX line, the biggest place by far (Medina 6,051 and Albion 5,665, the Orleans towns, are far to the north). Region 99k, size 1.
    { id: "BTVA", name: "Batavia", county: "ny-genesee-orleans", lat: 43, lon: -78.18, type: "farm", size: 1, pop: 99, main: true, level: "west" },
    // Geneseo (7,619): the Livingston seat in the Genesee Valley on US-20A/NY-63 and I-390 (SUNY Geneseo). Region 62k, size 1.
    { id: "GENO", name: "Geneseo", county: "ny-livingston", lat: 42.8, lon: -77.81, type: "farm", size: 1, pop: 62, main: true, level: "west" },
    // Wellsville (4,644): the biggest place on NY-17/I-86 and the Genesee headwaters in Allegany (Warsaw, the Wyoming seat, is a town). Region 87k, size 1.
    { id: "WLVL", name: "Wellsville", county: "ny-allegany-wyoming", lat: 42.12, lon: -77.95, type: "farm", size: 1, pop: 87, main: true, level: "west" },
    // Olean (13,926): the biggest place of Cattaraugus on the Allegheny, NY-17/I-86 and US-219 towards Bradford, Pennsylvania. Region 77k, size 1.
    { id: "OLEN", name: "Olean", county: "ny-cattaraugus", lat: 42.08, lon: -78.44, type: "mountain", size: 1, pop: 77, main: true, level: "west" },
    // Jamestown (28,700): the biggest city of Chautauqua on NY-17/I-86 at the foot of Chautauqua Lake (Lucille Ball's birthplace). Region 128k, size 1.
    { id: "JMST", name: "Jamestown", county: "ny-chautauqua", lat: 42.1, lon: -79.24, type: "farm", size: 1, pop: 128, main: true, level: "west" },
    // Corning (10,559): the biggest place of Steuben, the Glass City on the Chemung and I-86 (the Corning Museum of Glass). Region 94k, size 1. Scenic.
    { id: "CORN", name: "Corning", county: "ny-steuben", lat: 42.15, lon: -77.06, scenic: true, type: "farm", size: 1, pop: 94, main: true, level: "west" },
    // Elmira (26,515): the Chemung seat on the Chemung River and I-86 (Mark Twain's Quarry Farm, the Soaring capital). Region 84k, size 1.
    { id: "ELMR", name: "Elmira", county: "ny-chemung", lat: 42.09, lon: -76.81, type: "farm", size: 1, pop: 84, main: true, level: "west" },
    // Ithaca (32,110): Cornell University and Ithaca College at the south end of Cayuga Lake, gorges and waterfalls. Region 106k, size 2 like State College (158k) for a university city bigger than its county.
    { id: "ITHA", name: "Ithaca", county: "ny-tompkins", lat: 42.44, lon: -76.5, type: "farm", size: 2, pop: 106, main: true, level: "west" },
    // Binghamton (47,958): the Broome seat at the Susquehanna and Chenango, I-81 and NY-17/I-86. The Triple Cities (with Johnson City and Endicott) make a 250k metro. Region 199k, size 2.
    { id: "BING", name: "Binghamton", county: "ny-broome", lat: 42.1, lon: -75.91, type: "metro", size: 2, pop: 199, main: true, level: "west" },
    // Cortland (17,556): the biggest place (Cortland has 17,556 and the Tioga towns Waverly and Owego 4,404 and 3,655) on I-81 and US-11. Region 95k, size 1.
    { id: "CORT", name: "Cortland", county: "ny-cortland-tioga", lat: 42.6, lon: -76.18, type: "farm", size: 1, pop: 95, main: true, level: "west" },
    // Norwich (7,043): the Chenango seat on NY-12 and the Chenango River, the biggest place (Sidney, Walton and Delhi are towns). Region 92k, size 1.
    { id: "NRWC", name: "Norwich", county: "ny-chenango-delaware", lat: 42.53, lon: -75.52, type: "farm", size: 1, pop: 92, main: true, level: "west" },
    // Geneva (12,825): the Ontario biggest place at the north end of Seneca Lake on US-20/NY-14 (Hobart and William Smith). Canandaigua (the seat) is a town. Region 112k, size 1.
    { id: "GENY", name: "Geneva", county: "ny-ontario", lat: 42.86, lon: -76.98, type: "farm", size: 1, pop: 112, main: true, level: "west" },
    // Newark (9,086): the biggest place of Wayne on the Erie Canal and the Amtrak/CSX line (NY-31). Region 91k, size 1.
    { id: "NKNY", name: "Newark", county: "ny-wayne", lat: 43.04, lon: -77.09, type: "farm", size: 1, pop: 91, main: true, level: "west" },
    // Seneca Falls: the biggest real place of the three counties, on the Erie Canal and the Seneca River, the Women's Rights National Historical Park (1848). Penn Yan and Watkins Glen are towns. Region 76k, size 1. Scenic.
    { id: "SNFL", name: "Seneca Falls", county: "ny-schuyler-seneca-yates", lat: 42.91, lon: -76.8, scenic: true, type: "farm", size: 1, pop: 76, main: true, level: "west" },
  ],
  // Towns that appear over time: the next-biggest real places of each region (Census points; the places.json
  // population is in each comment), spread out (at least 4 mi from every other place), plus well-known scenic
  // places (scenic: true, sources in NOTES.md).
  towns: [
    // new-york
    // Harlem: Manhattan north of Central Park, 4.8 mi from Penn Station.
    { id: "HARY", name: "Harlem", county: "ny-new-york", lat: 40.81, lon: -73.95, type: "metro", size: 4 },
    // kings
    // Coney Island: the boardwalk, Luna Park and the Cyclone on the Atlantic, the end of the subway lines.
    { id: "CONY", name: "Coney Island", county: "ny-kings", lat: 40.58, lon: -73.98, scenic: true, type: "coast", size: 2 },
    // queens
    // Flushing: Queens' second downtown on the LIRR Port Washington Branch and the 7 train, with Citi Field. LaGuardia Airport (in East Elmhurst, 3 mi west) is attached here.
    { id: "FLUS", name: "Flushing", county: "ny-queens", lat: 40.76, lon: -73.83, airport: "LaGuardia Airport", type: "metro", size: 3 },
    // Rockaway Beach: the Atlantic beaches of Queens on the Rockaway peninsula.
    { id: "RCKW", name: "Rockaway Beach", county: "ny-queens", lat: 40.59, lon: -73.82, scenic: true, type: "coast", size: 1 },
    // westchester
    // White Plains (59,553): the Westchester seat on the Harlem Line and I-287. Westchester County Airport (HPN) is in the adjacent town of Harrison, 3 mi east, and is attached here.
    { id: "WPLN", name: "White Plains", county: "ny-westchester", lat: 41.02, lon: -73.75, airport: "Westchester County Airport", type: "metro", size: 2 },
    // New Rochelle (79,736): the second city of Westchester on the Long Island Sound, the New Haven Line and I-95.
    { id: "NRCH", name: "New Rochelle", county: "ny-westchester", lat: 40.92, lon: -73.78, type: "metro", size: 2 },
    // Peekskill (25,433): the northern Westchester Hudson city on Metro-North's Hudson Line, the Bear Mountain Bridge side.
    { id: "PEEK", name: "Peekskill", county: "ny-westchester", lat: 41.29, lon: -73.92, type: "metro", size: 1 },
    // nassau
    // Glen Cove (28,360): the North Shore city of Nassau on Long Island Sound (the Gold Coast), LIRR Oyster Bay Branch.
    { id: "GLCV", name: "Glen Cove", county: "ny-nassau", lat: 40.88, lon: -73.64, type: "coast", size: 1 },
    // Freeport (44,471): the Nautical Mile and the South Shore on the LIRR Babylon Branch, the gateway to Jones Beach.
    { id: "FREP", name: "Freeport", county: "ny-nassau", lat: 40.65, lon: -73.58, type: "coast", size: 1 },
    // Hicksville: the LIRR's big junction (Main Line, Port Jefferson Branch and Oyster Bay Branch) in central Nassau; no population in the data.
    { id: "HCKS", name: "Hicksville", county: "ny-nassau", lat: 40.76, lon: -73.52, type: "metro", size: 2 },
    // suffolk
    // Lindenhurst (27,146): the biggest place of Suffolk, on the Babylon Branch at the Nassau line.
    { id: "LNDH", name: "Lindenhurst", county: "ny-suffolk", lat: 40.69, lon: -73.37, type: "coast", size: 2 },
    // Huntington: the North Shore town on Huntington Bay and the Port Jefferson Branch; no population in the data.
    { id: "HNTG", name: "Huntington", county: "ny-suffolk", lat: 40.88, lon: -73.41, type: "metro", size: 2 },
    // Port Jefferson (7,988): the North Shore harbour with the ferry to Bridgeport, Connecticut (which comes later) and the end of the electric LIRR.
    { id: "PTJF", name: "Port Jefferson", county: "ny-suffolk", lat: 40.94, lon: -73.05, type: "coast", size: 1 },
    // Riverhead: the Suffolk seat at the head of the Peconic estuary, the end of the Main Line, outlets and vineyards; no population in the data.
    { id: "RVHD", name: "Riverhead", county: "ny-suffolk", lat: 40.95, lon: -72.68, type: "farm", size: 1 },
    // Southampton (4,541): the Hamptons, the beach resort villages of the South Fork on the Montauk Branch.
    { id: "SOTH", name: "Southampton", county: "ny-suffolk", lat: 40.88, lon: -72.4, scenic: true, type: "coast", size: 1 },
    // Montauk: the eastern tip of Long Island, Montauk Point Lighthouse and the end of the LIRR; no population in the data.
    { id: "MNTK", name: "Montauk", county: "ny-suffolk", lat: 41.05, lon: -71.95, scenic: true, type: "coast", size: 1 },
    // Orient Point: the tip of the North Fork, where the Cross Sound Ferry from New London lands (added by the main agent with the Connecticut pack, so the ferry has a town at each end)
    { id: "ORPT", name: "Orient Point", county: "ny-suffolk", lat: 41.16, lon: -72.25, type: "coast", size: 1 },
    // rockland
    // Haverstraw (12,321): the Hudson shore town on US-9W.
    { id: "HAVR", name: "Haverstraw", county: "ny-rockland", lat: 41.18, lon: -73.94, type: "metro", size: 1 },
    // Suffern (11,451): at the Ramapo Pass on I-87 and the Thruway, the Erie Railroad's Port Jervis Line and the New Jersey line at Mahwah.
    { id: "SUFF", name: "Suffern", county: "ny-rockland", lat: 41.11, lon: -74.14, type: "metro", size: 1 },
    // Nyack (7,261): the Hudson town at the west end of the Mario Cuomo Bridge.
    { id: "NYAK", name: "Nyack", county: "ny-rockland", lat: 41.09, lon: -73.92, type: "metro", size: 1 },
    // orange
    // Middletown (30,341): the central city of Orange on NY-17/I-84 and the Port Jervis Line.
    { id: "MDTN", name: "Middletown", county: "ny-orange", lat: 41.44, lon: -74.42, type: "metro", size: 2 },
    // Port Jervis (8,767): the Delaware River's tri-state corner (NY, NJ, PA) on I-84 and the Erie Railroad's end of the Metro-North Port Jervis Line.
    { id: "PTJV", name: "Port Jervis", county: "ny-orange", lat: 41.38, lon: -74.69, type: "mountain", size: 1 },
    // West Point: the U.S. Military Academy (1802) on the Hudson above the Highlands, US-9W.
    { id: "WESY", name: "West Point", county: "ny-orange", lat: 41.39, lon: -73.96, scenic: true, type: "mountain", size: 1 },
    // Bear Mountain: Bear Mountain State Park and the Bear Mountain Bridge (1924) and Inn on the Hudson (NYS Parks).
    { id: "BRMT", name: "Bear Mountain", county: "ny-orange", lat: 41.31, lon: -74.01, scenic: true, type: "mountain", size: 1 },
    // dutchess
    // Hyde Park: the Home of Franklin D. Roosevelt National Historic Site and the Vanderbilt Mansion (NPS) on US-9; a Census place with no population in the data.
    { id: "HYDP", name: "Hyde Park", county: "ny-dutchess", lat: 41.78, lon: -73.93, scenic: true, type: "farm", size: 1 },
    // Rhinebeck (2,699): the village at the Kingston-Rhinecliff Bridge, the northern Dutchess town on US-9.
    { id: "RHBK", name: "Rhinebeck", county: "ny-dutchess", lat: 41.93, lon: -73.91, type: "farm", size: 1 },
    // ulster
    // New Paltz (7,357): SUNY New Paltz and the Shawangunk Ridge (the Gunks, Mohonk Preserve) on the Thruway.
    { id: "NWPZ", name: "New Paltz", county: "ny-ulster", lat: 41.75, lon: -74.08, type: "mountain", size: 1 },
    // Woodstock: the Catskills art colony, the name of the 1969 festival (held at Bethel in Sullivan) on NY-212; no population in the data.
    { id: "WOOY", name: "Woodstock", county: "ny-ulster", lat: 42.04, lon: -74.12, scenic: true, type: "mountain", size: 1 },
    // Ellenville (4,230): the Shawangunk/Rondout valley town on US-209.
    { id: "ELLN", name: "Ellenville", county: "ny-ulster", lat: 41.7, lon: -74.36, type: "mountain", size: 1 },
    // sullivan
    // Liberty (5,003): the Sullivan town on the Quickway (NY-17/future I-86).
    { id: "LIBY", name: "Liberty", county: "ny-sullivan", lat: 41.8, lon: -74.74, type: "mountain", size: 1 },
    // columbia
    // Chatham (1,603): the Columbia northeast village on NY-203 and the Berkshire/Taconic gateway.
    { id: "CHAY", name: "Chatham", county: "ny-columbia", lat: 42.36, lon: -73.6, type: "farm", size: 1 },
    // Kinderhook (1,179): the home of Martin Van Buren (Lindenwald, NPS) on US-9.
    { id: "KNDH", name: "Kinderhook", county: "ny-columbia", lat: 42.39, lon: -73.7, type: "farm", size: 1 },
    // greene-schoharie
    // Cobleskill (4,259): the Schoharie biggest place on I-88 and NY-7.
    { id: "CBLK", name: "Cobleskill", county: "ny-greene-schoharie", lat: 42.68, lon: -74.49, type: "farm", size: 1 },
    // Coxsackie (2,747): the Hudson town on US-9W.
    { id: "CXKI", name: "Coxsackie", county: "ny-greene-schoharie", lat: 42.36, lon: -73.81, type: "farm", size: 1 },
    // rensselaer
    // Hoosick Falls (3,216): the Rensselaer east village on NY-22/NY-7 near Vermont.
    { id: "HOSK", name: "Hoosick Falls", county: "ny-rensselaer", lat: 42.9, lon: -73.35, type: "farm", size: 1 },
    // saratoga
    // Ballston Spa (5,128): the Saratoga seat on NY-50 and the Kayaderosseras.
    { id: "BALS", name: "Ballston Spa", county: "ny-saratoga", lat: 43.01, lon: -73.85, type: "farm", size: 1 },
    // Mechanicville (5,165): the Hudson town on the Delaware & Hudson Canadian Pacific line at the Hudson.
    { id: "MECY", name: "Mechanicville", county: "ny-saratoga", lat: 42.9, lon: -73.69, type: "farm", size: 1 },
    // schenectady
    // Duanesburg: the rural hamlet on I-88 and NY-7 at the Schoharie line, the biggest population-less place of the county's west; 9 mi from Schenectady.
    { id: "DNSB", name: "Duanesburg", county: "ny-schenectady", lat: 42.76, lon: -74.13, type: "farm", size: 1 },
    // warren
    // Lake George (1,008): the village at the south end of Lake George (the Queen of American Lakes), Fort William Henry, I-87 exit 21.
    { id: "LKGE", name: "Lake George", county: "ny-warren", lat: 43.43, lon: -73.72, scenic: true, type: "mountain", size: 1 },
    // North Creek: the Upper Hudson Gore Mountain ski gateway and the Saratoga & North Creek Railroad's end; no population in the data.
    { id: "NCRK", name: "North Creek", county: "ny-warren", lat: 43.69, lon: -73.99, type: "mountain", size: 1 },
    // washington
    // Whitehall (2,494): the south end of Lake Champlain at the Champlain Canal on US-4.
    { id: "WHIY", name: "Whitehall", county: "ny-washington", lat: 43.55, lon: -73.43, type: "farm", size: 1 },
    // Greenwich (1,679): the Washington southern village on NY-29.
    { id: "GRWC", name: "Greenwich", county: "ny-washington", lat: 43.09, lon: -73.5, type: "farm", size: 1 },
    // fulton
    // Northville (1,007): the Great Sacandaga Lake village, the gateway of the Adirondacks.
    { id: "NVLL", name: "Northville", county: "ny-fulton", lat: 43.22, lon: -74.16, type: "mountain", size: 1 },
    // herkimer
    // Little Falls (4,597): the Mohawk's narrow gorge and the Erie Canal's lock 17 (the highest lift), the Amtrak Empire Service station.
    { id: "LTLF", name: "Little Falls", county: "ny-herkimer", lat: 43.04, lon: -74.86, type: "farm", size: 1 },
    // montgomery
    // Canajoharie (2,080): the Mohawk village at the Thruway, the Arkell Museum.
    { id: "CNJH", name: "Canajoharie", county: "ny-montgomery", lat: 42.9, lon: -74.57, type: "farm", size: 1 },
    // St. Johnsville (1,714): the Mohawk village on NY-5.
    { id: "STJV", name: "St. Johnsville", county: "ny-montgomery", lat: 43, lon: -74.68, type: "farm", size: 1 },
    // oneida
    // Rome (32,115): the Erie Canal's first shovel (1817), Fort Stanwix National Monument and the old Griffiss Air Force Base.
    { id: "ROMY", name: "Rome", county: "ny-oneida", lat: 43.23, lon: -75.49, type: "farm", size: 2 },
    // Camden (2,202): the village on NY-13 in the Oneida Lake plain.
    { id: "CAMY", name: "Camden", county: "ny-oneida", lat: 43.34, lon: -75.75, type: "farm", size: 1 },
    // madison
    // Chittenango (4,898): the Erie Canal village and the birthplace of L. Frank Baum (the Oz Museum).
    { id: "CHIY", name: "Chittenango", county: "ny-madison", lat: 43.05, lon: -75.87, type: "farm", size: 1 },
    // Hamilton (4,106): Colgate University, the Chenango Valley village on NY-12B.
    { id: "HAMI", name: "Hamilton", county: "ny-madison", lat: 42.83, lon: -75.55, type: "farm", size: 1 },
    // onondaga
    // Baldwinsville (7,831): the Seneca River village north-west of Syracuse.
    { id: "BALY", name: "Baldwinsville", county: "ny-onondaga", lat: 43.16, lon: -76.34, type: "farm", size: 1 },
    // Fayetteville (4,269): the Erie Canal village east of Syracuse on NY-5.
    { id: "FAYY", name: "Fayetteville", county: "ny-onondaga", lat: 43.03, lon: -76, type: "farm", size: 1 },
    // oswego
    // Fulton (11,388): the second city of Oswego on the Oswego River and Barge Canal.
    { id: "FULY", name: "Fulton", county: "ny-oswego", lat: 43.32, lon: -76.42, type: "farm", size: 1 },
    // Pulaski (2,179): the Salmon River village and the salmon-fishing capital of the lake, on NY-13.
    { id: "PULY", name: "Pulaski", county: "ny-oswego", lat: 43.57, lon: -76.13, type: "farm", size: 1 },
    // cayuga
    // Weedsport (1,812): the Thruway (exit 40) and the Erie Canal village north of Auburn.
    { id: "WEED", name: "Weedsport", county: "ny-cayuga", lat: 43.05, lon: -76.56, type: "farm", size: 1 },
    // Moravia (1,279): the Owasco Inlet village on NY-38, Fillmore Glen.
    { id: "MORV", name: "Moravia", county: "ny-cayuga", lat: 42.71, lon: -76.42, type: "farm", size: 1 },
    // otsego
    // Cooperstown (1,857): the National Baseball Hall of Fame (1939) and Otsego Lake.
    { id: "CPTN", name: "Cooperstown", county: "ny-otsego", lat: 42.7, lon: -74.93, scenic: true, type: "mountain", size: 1 },
    // lewis
    // Lyons Falls (597): the Black River falls village on NY-12D.
    { id: "LGVL", name: "Lyons Falls", county: "ny-lewis", lat: 43.62, lon: -75.36, type: "mountain", size: 1 },
    // jefferson
    // Alexandria Bay (962): the Thousand Islands (Boldt Castle, the St. Lawrence River) beside the Thousand Islands Bridge.
    { id: "ABAY", name: "Alexandria Bay", county: "ny-jefferson", lat: 44.34, lon: -75.92, scenic: true, type: "coast", size: 1 },
    // Sackets Harbor (1,378): the Lake Ontario naval base of the War of 1812 (Sackets Harbor Battlefield).
    { id: "SKTH", name: "Sackets Harbor", county: "ny-jefferson", lat: 43.94, lon: -76.11, type: "coast", size: 1 },
    // st-lawrence
    // Ogdensburg (10,062): the St. Lawrence port and the Ogdensburg-Prescott International Bridge.
    { id: "OGBG", name: "Ogdensburg", county: "ny-st-lawrence", lat: 44.71, lon: -75.46, type: "coast", size: 1 },
    // Potsdam (8,489): the Raquette's SUNY and Clarkson universities village.
    { id: "PTSD", name: "Potsdam", county: "ny-st-lawrence", lat: 44.67, lon: -74.98, type: "farm", size: 1 },
    // Canton (7,238): the St. Lawrence seat and St. Lawrence University.
    { id: "CANY", name: "Canton", county: "ny-st-lawrence", lat: 44.6, lon: -75.17, type: "farm", size: 1 },
    // clinton
    // Champlain (1,169): the I-87 border village at the Lacolle, Quebec crossing.
    { id: "CHMP", name: "Champlain", county: "ny-clinton", lat: 44.99, lon: -73.43, type: "farm", size: 1 },
    // essex-franklin-hamilton
    // Malone (5,482): the biggest place of the Adirondack region, the Franklin seat on NY-30 and NY-11 near Quebec.
    { id: "MLNE", name: "Malone", county: "ny-essex-franklin-hamilton", lat: 44.85, lon: -74.29, type: "farm", size: 1 },
    // Tupper Lake (3,380): the Adirondack Park lake town on NY-30 and NY-3.
    { id: "TPLK", name: "Tupper Lake", county: "ny-essex-franklin-hamilton", lat: 44.23, lon: -74.46, type: "mountain", size: 1 },
    // Lake Placid (2,274): the 1932 and 1980 Winter Olympics village and the High Peaks gateway.
    { id: "LKPL", name: "Lake Placid", county: "ny-essex-franklin-hamilton", lat: 44.28, lon: -73.99, scenic: true, type: "mountain", size: 1 },
    // Speculator (405): the Hamilton county seat village on NY-8 and NY-30 in the southern Adirondacks, the only population in the entire county of 5k.
    { id: "SPEC", name: "Speculator", county: "ny-essex-franklin-hamilton", lat: 43.58, lon: -74.36, type: "mountain", size: 1 },
    // erie
    // Lackawanna (19,954): the old Bethlehem Steel city and the Our Lady of Victory Basilica on Lake Erie's south shore.
    { id: "LKWN", name: "Lackawanna", county: "ny-erie", lat: 42.82, lon: -78.83, type: "metro", size: 2 },
    // Hamburg (9,753): the southern Erie village, home of the Erie County Fair.
    { id: "HAMY", name: "Hamburg", county: "ny-erie", lat: 42.72, lon: -78.83, type: "farm", size: 1 },
    // Depew (15,175): the eastern Buffalo suburb on the Thruway and NY-33.
    { id: "DEPW", name: "Depew", county: "ny-erie", lat: 42.91, lon: -78.7, type: "metro", size: 2 },
    // niagara
    // Lockport (20,872): the Erie Canal flight of locks (the Flight of Five).
    { id: "LOCK", name: "Lockport", county: "ny-niagara", lat: 43.17, lon: -78.7, type: "farm", size: 1 },
    // North Tonawanda (30,495): the Niagara River and Erie Canal city across from Tonawanda, the Wurlitzer Opera House.
    { id: "NTON", name: "North Tonawanda", county: "ny-niagara", lat: 43.05, lon: -78.87, type: "metro", size: 2 },
    // Lewiston (2,529): the Niagara Gorge village at the Lewiston-Queenston Bridge to Ontario, Artpark.
    { id: "LWST", name: "Lewiston", county: "ny-niagara", lat: 43.17, lon: -79.04, type: "coast", size: 1 },
    // monroe
    // Brockport (7,117): the Erie Canal village west of Rochester and SUNY Brockport.
    { id: "BCKP", name: "Brockport", county: "ny-monroe", lat: 43.21, lon: -77.94, type: "farm", size: 1 },
    // Webster (5,727): the Rochester eastern suburb on Lake Ontario's south shore.
    { id: "WBST", name: "Webster", county: "ny-monroe", lat: 43.22, lon: -77.42, type: "metro", size: 1 },
    // Fairport (5,471): the Erie Canal village east of Rochester.
    { id: "FRPR", name: "Fairport", county: "ny-monroe", lat: 43.1, lon: -77.44, type: "metro", size: 1 },
    // genesee-orleans
    // Medina (6,051): the Erie Canal sandstone village (Medina sandstone) in Orleans.
    { id: "MEDN", name: "Medina", county: "ny-genesee-orleans", lat: 43.22, lon: -78.39, type: "farm", size: 1 },
    // Le Roy (4,369): the birthplace of Jell-O (the Jell-O Gallery) on NY-5 and I-90 exit 47.
    { id: "LERO", name: "Le Roy", county: "ny-genesee-orleans", lat: 42.98, lon: -77.99, type: "farm", size: 1 },
    // livingston
    // Dansville (4,437): the Southern Livingston town where Clara Barton's first Red Cross chapter was founded.
    { id: "DNSV", name: "Dansville", county: "ny-livingston", lat: 42.56, lon: -77.7, type: "farm", size: 1 },
    // Avon (3,398): the Genesee Valley village on US-20 and I-390.
    { id: "AVNY", name: "Avon", county: "ny-livingston", lat: 42.91, lon: -77.75, type: "farm", size: 1 },
    // allegany-wyoming
    // Warsaw (3,660): the Wyoming seat on US-20A and NY-19.
    { id: "WARY", name: "Warsaw", county: "ny-allegany-wyoming", lat: 42.74, lon: -78.14, type: "farm", size: 1 },
    // Alfred (4,067): Alfred University (ceramics) on NY-21 and NY-244.
    { id: "ALFD", name: "Alfred", county: "ny-allegany-wyoming", lat: 42.25, lon: -77.79, type: "farm", size: 1 },
    // Letchworth State Park: the Genesee River gorge, the Grand Canyon of the East, in Wyoming County (NYS Parks).
    { id: "LTWR", name: "Letchworth State Park", county: "ny-allegany-wyoming", lat: 42.58, lon: -78.04, scenic: true, type: "mountain", size: 1 },
    // cattaraugus
    // Salamanca (5,935): the Allegheny River city and the Seneca Nation's Allegany Territory, I-86 and US-219.
    { id: "SLMN", name: "Salamanca", county: "ny-cattaraugus", lat: 42.16, lon: -78.74, type: "mountain", size: 1 },
    // Gowanda (2,518): the Cattaraugus Creek village on NY-39.
    { id: "GWDA", name: "Gowanda", county: "ny-cattaraugus", lat: 42.46, lon: -78.93, type: "farm", size: 1 },
    // chautauqua
    // Dunkirk (12,736): the Lake Erie port city on the Thruway and the Lake Shore Limited line.
    { id: "DNKK", name: "Dunkirk", county: "ny-chautauqua", lat: 42.48, lon: -79.33, type: "coast", size: 1 },
    // Westfield (2,994): the Lake Erie grape belt on I-90 near the Pennsylvania line.
    { id: "WTFL", name: "Westfield", county: "ny-chautauqua", lat: 42.32, lon: -79.57, type: "farm", size: 1 },
    // Chautauqua Institution: the lakeside summer arts and education centre on Chautauqua Lake.
    { id: "CHAU", name: "Chautauqua Institution", county: "ny-chautauqua", lat: 42.21, lon: -79.47, scenic: true, type: "coast", size: 1 },
    // chemung
    // Horseheads (6,616): the Chemung north village on NY-14 and I-86, Elmira's neighbour.
    { id: "HHDS", name: "Horseheads", county: "ny-chemung", lat: 42.17, lon: -76.83, type: "farm", size: 1 },
    // steuben
    // Hornell (8,276): the old Erie Railroad shops city on I-86 and NY-36.
    { id: "HORN", name: "Hornell", county: "ny-steuben", lat: 42.33, lon: -77.66, type: "farm", size: 1 },
    // Bath (5,610): the Steuben seat on I-86 and NY-415.
    { id: "BATH", name: "Bath", county: "ny-steuben", lat: 42.34, lon: -77.32, type: "farm", size: 1 },
    // tompkins
    // Trumansburg (1,773): the village on NY-96 near Taughannock Falls on Cayuga Lake.
    { id: "TRUM", name: "Trumansburg", county: "ny-tompkins", lat: 42.54, lon: -76.66, type: "farm", size: 1 },
    // broome
    // Endicott (13,668): the birthplace of IBM on the Susquehanna and NY-17.
    { id: "ENDC", name: "Endicott", county: "ny-broome", lat: 42.1, lon: -76.06, type: "metro", size: 1 },
    // Windsor (895): the Susquehanna village on NY-17/I-86 towards the Delaware River.
    { id: "WINS", name: "Windsor", county: "ny-broome", lat: 42.08, lon: -75.64, type: "farm", size: 1 },
    // cortland-tioga
    // Owego (3,655): the Tioga seat on the Susquehanna and NY-17.
    { id: "OWGO", name: "Owego", county: "ny-cortland-tioga", lat: 42.1, lon: -76.26, type: "farm", size: 1 },
    // Waverly (4,404): the border village on NY-17/I-86 beside Sayre, Pennsylvania.
    { id: "WAVY", name: "Waverly", county: "ny-cortland-tioga", lat: 42.01, lon: -76.54, type: "farm", size: 1 },
    // chenango-delaware
    // Sidney (3,713): the Susquehanna village on I-88, home of Amphenol.
    { id: "SIDY", name: "Sidney", county: "ny-chenango-delaware", lat: 42.31, lon: -75.4, type: "farm", size: 1 },
    // Delhi (2,787): the Delaware seat in the western Catskills on NY-28 and NY-10, SUNY Delhi.
    { id: "DELI", name: "Delhi", county: "ny-chenango-delaware", lat: 42.28, lon: -74.92, type: "mountain", size: 1 },
    // ontario
    // Canandaigua (10,570): the Ontario seat at the head of Canandaigua Lake, US-20, NY-5 and the Finger Lakes.
    { id: "CNDG", name: "Canandaigua", county: "ny-ontario", lat: 42.89, lon: -77.28, type: "farm", size: 1 },
    // wayne
    // Palmyra (3,323): the birthplace of the Latter Day Saint movement (the Sacred Grove) on the Erie Canal.
    { id: "PALY", name: "Palmyra", county: "ny-wayne", lat: 43.06, lon: -77.23, type: "farm", size: 1 },
    // Sodus Point (824): the Lake Ontario harbour and lighthouse at Sodus Bay.
    { id: "SDPT", name: "Sodus Point", county: "ny-wayne", lat: 43.26, lon: -77, type: "coast", size: 1 },
    // schuyler-seneca-yates
    // Penn Yan (5,117): the Yates seat at the north end of Keuka Lake on NY-14 and NY-54.
    { id: "PNYN", name: "Penn Yan", county: "ny-schuyler-seneca-yates", lat: 42.66, lon: -77.05, type: "farm", size: 1 },
    // Watkins Glen (1,861): Watkins Glen State Park's gorge trail and the lake's south end, the home of the Grand Prix.
    { id: "WKGL", name: "Watkins Glen", county: "ny-schuyler-seneca-yates", lat: 42.38, lon: -76.87, scenic: true, type: "mountain", size: 1 },
    // clinton
    // Ausable Chasm: the sandstone gorge on the Ausable River, 'the Grand Canyon of the Adirondacks' (open since 1870).
    { id: "ASCH", name: "Ausable Chasm", county: "ny-clinton", lat: 44.52, lon: -73.46, scenic: true, type: "mountain", size: 1 },
  ],
  // City map, keyed by its main station (Penn Station): all of New York City, not only Manhattan. Sources in NOTES.md.
  metros: {
    NYC: {
      name: "New York",
      size: 5,
      stops: [
        { id: "PEN", name: "Penn Station", lat: 40.751, lon: -73.994, hub: true },
        { id: "FID", name: "Financial District", lat: 40.707, lon: -74.009 },
        { id: "HAR", name: "Harlem", lat: 40.81, lon: -73.945 },
        { id: "TRM", name: "59th Street Tram", lat: 40.761, lon: -73.964, cable: true }, // the Roosevelt Island Tramway's Manhattan station (2nd Avenue and 60th Street; main agent)
        { id: "RIS", name: "Roosevelt Island", lat: 40.757, lon: -73.954, cable: true },
        { id: "DTB", name: "Downtown Brooklyn", lat: 40.693, lon: -73.99 },
        { id: "CIS", name: "Coney Island", lat: 40.575, lon: -73.988 },
        { id: "JFK", name: "JFK Airport", lat: 40.641, lon: -73.778 },
        { id: "LGA", name: "LaGuardia Airport", lat: 40.773, lon: -73.874 },
        { id: "YNK", name: "Yankee Stadium", lat: 40.829, lon: -73.926 },
        { id: "STG", name: "St. George", lat: 40.644, lon: -74.074 },
        { id: "EWR", name: "Newark Airport", lat: 40.69, lon: -74.175 },
      ],
    },
  },
  // Real mountain passes: [name, latitude, longitude]. Sources in NOTES.md.
  passes: [
    ["Pine Hill and Highmount (NY-28 over the Catskill divide, Kingston to Margaretville, Belleayre)",42.14,-74.48],
    ["Stony Clove Notch (NY-214, Phoenicia to Hunter)",42.17,-74.2],
    ["Kaaterskill Clove (NY-23A, Palenville to Haines Falls)",42.19,-74.06],
    ["Cascade Pass (NY-73 between Keene Valley and Lake Placid, the Cascade Lakes)",44.22,-73.9],
    ["Wilmington Notch (NY-86 between Lake Placid and Wilmington, the Ausable's East Branch)",44.38,-73.87],
    ["Chapel Pond Pass (NY-73 between Keene Valley and Underwood)",44.14,-73.78],
  ],
  // Real bridges, tunnels and ferries: [name, latitude, longitude]. Sources in NOTES.md.
  bridges: [
    ["Holland Tunnel (I-78, Lower Manhattan to Jersey City)",40.73,-74.02],
    ["Lincoln Tunnel and the North River Tunnels (Midtown to Weehawken and Secaucus; Amtrak, NJ Transit and the Lincoln Tunnel)",40.76,-74.01],
    ["George Washington Bridge (I-95, Fort Lee to Washington Heights)",40.85,-73.95],
    ["Mario Cuomo Bridge (I-87/I-287, Tarrytown to Nyack; the Tappan Zee)",41.07,-73.9],
    ["Bear Mountain Bridge (US-202/US-9W)",41.32,-73.99],
    ["Newburgh-Beacon Bridge (I-84)",41.51,-73.97],
    ["Mid-Hudson Bridge (Poughkeepsie to Highland, US-44/NY-55)",41.71,-73.94],
    ["Kingston-Rhinecliff Bridge (NY-199)",41.92,-73.95],
    ["Rip Van Winkle Bridge (NY-23, Catskill to Hudson)",42.22,-73.87],
    ["Hudson-Athens Bridge (Hudson to Athens)",42.25,-73.81],
    ["Castleton Bridge (the Thruway, I-90 Berkshire Spur)",42.53,-73.76],
    ["Dunn Memorial Bridge (US-9/20, Albany to Rensselaer) and the Livingston Avenue railroad bridge",42.64,-73.75],
    ["Green Island Bridge (Troy to Green Island)",42.75,-73.69],
    ["Mohawk and Hudson bridges at Cohoes and Waterford (NY-32 and the Waterford Bridge)",42.78,-73.7],
    ["Schuylerville Bridge (NY-29)",43.1,-73.58],
    ["Fort Edward to Hudson Falls Bridge (US-4)",43.27,-73.59],
    ["Glens Falls Bridge (US-9, Glens Falls to South Glens Falls)",43.31,-73.64],
    ["Brooklyn Bridge (Manhattan to Brooklyn)",40.71,-74],
    ["Manhattan Bridge (Manhattan to Brooklyn)",40.71,-73.99],
    ["Williamsburg Bridge (Manhattan to Brooklyn)",40.71,-73.97],
    ["Queensboro Bridge (59th Street, Manhattan to Queens)",40.76,-73.95],
    ["Hell Gate Bridge (Amtrak's Northeast Corridor, Queens to the Bronx)",40.78,-73.92],
    ["Robert F. Kennedy Bridge (the Triborough: Manhattan, Queens and the Bronx)",40.78,-73.93],
    ["Whitestone Bridge (I-678, the Bronx to Queens)",40.8,-73.82],
    ["Throgs Neck Bridge (I-295, the Bronx to Queens)",40.81,-73.79],
    ["Verrazzano-Narrows Bridge (I-278, Staten Island to Brooklyn)",40.61,-74.04],
    ["Staten Island Ferry (St. George to Lower Manhattan)",40.67,-74.04],
    ["Bayonne Bridge (NJ-440/NY-440, Staten Island to Bayonne)",40.64,-74.14],
    ["Goethals Bridge (I-278, Staten Island to Elizabeth)",40.64,-74.19],
    ["Outerbridge Crossing (NY-440/NJ-440, Staten Island to Perth Amboy)",40.52,-74.25],
    ["Western Gateway Bridge (Mohawk River, Schenectady to Scotia)",42.82,-73.95],
    ["Mohawk River bridge (Amsterdam, Route 5S/Main Street)",42.94,-74.19],
    ["Mohawk River bridge (Fultonville to Fonda, NY-30A)",42.95,-74.37],
    ["Mohawk River bridge (Canajoharie to Palatine Bridge, the Thruway)",42.9,-74.57],
    ["Mohawk River bridge (St. Johnsville)",43,-74.68],
    ["Mohawk River bridge (Little Falls)",43.04,-74.86],
    ["Mohawk River bridge (Herkimer to Mohawk, NY-28)",43.03,-75],
    ["Mohawk River bridge (Utica)",43.11,-75.23],
    ["Susquehanna River bridges (Binghamton, Court Street and Vestal)",42.1,-75.92],
    ["Susquehanna River bridge (Owego, Court Street)",42.1,-76.26],
    ["Susquehanna River bridge (Oneonta)",42.45,-75.07],
    ["Susquehanna River bridge (Sidney)",42.31,-75.4],
    ["Chemung River bridges (Elmira)",42.09,-76.8],
    ["Chemung River bridge (Corning)",42.15,-77.05],
    ["Chemung River bridge (Waverly to Sayre, Pennsylvania)",42,-76.53],
    ["Genesee River bridges (Rochester, Broad Street and Court Street)",43.16,-77.61],
    ["Portage Viaduct (Genesee River, Letchworth State Park)",42.57,-78.04],
    ["Genesee River bridge (Wellsville)",42.12,-77.95],
    ["Allegheny River bridges (Olean)",42.08,-78.43],
    ["Allegheny River bridge (Salamanca, I-86/US-219)",42.16,-78.72],
    ["Hancock Bridge (Delaware River, NY-17 to Pennsylvania)",41.95,-75.28],
    ["Callicoon Bridge (NY-97, Delaware River)",41.77,-75.06],
    ["Narrowsburg Bridge (NY-52, Delaware River)",41.61,-75.06],
    ["Black River bridges (Watertown, Court Street and Arsenal Street)",43.97,-75.91],
    ["Black River bridge (Carthage)",43.98,-75.61],
    ["Raquette River bridge (Potsdam)",44.67,-74.98],
    ["Raquette River bridge (Massena, NY-37)",44.93,-74.89],
    ["Peace Bridge (I-190, Buffalo to Fort Erie)",42.91,-78.91],
    ["Rainbow Bridge (Niagara Falls, New York to Niagara Falls, Ontario)",43.09,-79.07],
    ["Whirlpool Rapids Bridge (Niagara Falls, the NEXUS bridge)",43.12,-79.07],
    ["Lewiston-Queenston Bridge (I-190, Lewiston to Queenston)",43.15,-79.05],
    ["Thousand Islands Bridge (I-81, Wellesley Island to Hill Island, Ontario)",44.35,-76],
    ["Ogdensburg-Prescott International Bridge (NY-812)",44.73,-75.5],
    ["Seaway International Bridge (Massena to Cornwall, Ontario)",45,-74.72],
  ],
  // Water that needs a real bridge, tunnel or ferry: track crosses it only near a bridge point.
  bays: [
    {
      name: "Long Island Sound", // between Westchester and Nassau and Suffolk's north shore; no bridge crosses it east of the Throgs Neck
      ring: [-73.76, 40.92, -72, 40.92, -72, 41.35, -73.76, 41.35],
    },
  ],
  // Levels mode: four levels, from New York City outwards.
  levels: [
    {
      name: "New York City & Long Island",
      areas: ["metro"],
      goals: [
        { kind: "totalPassengers", target: 150 },
        { kind: "counties", target: 5 },
        // Manhattan to Hempstead, as the Long Island Rail Road runs
        { kind: "connect", a: "NYC", b: "HMPD" },
      ],
    },
    {
      name: "The Hudson Valley & the Capital District",
      areas: ["hudson"],
      goals: [
        { kind: "totalPassengers", target: 250 },
        // Poughkeepsie to Albany, as the Hudson Line and the Thruway run
        { kind: "connect", a: "PKPS", b: "ALNY" },
        { kind: "counties", target: 8 },
      ],
    },
    {
      name: "The Mohawk Valley & the North Country",
      areas: ["mohawk"],
      goals: [
        { kind: "totalPassengers", target: 350 },
        // Utica to Syracuse, as the Thruway and the Erie Canal run
        { kind: "connect", a: "UTCA", b: "SYNY" },
        { kind: "counties", target: 10 },
      ],
    },
    {
      name: "Buffalo, Rochester & the Southern Tier",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Rochester to Buffalo, as the Thruway and the Empire Corridor run
        { kind: "connect", a: "RCNY", b: "BFNY" },
        { kind: "counties", target: 12 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The Adirondack Park's core
    forest: ["ny-essex-franklin-hamilton"],
    // The Adirondack edges and Tug Hill, the Catskills and the Hudson Highlands, the Taconics, and the Allegheny
    // and Southern Tier plateau
    wooded: [
      "ny-warren", "ny-lewis", "ny-st-lawrence", "ny-herkimer", "ny-fulton", "ny-clinton", "ny-washington",
      "ny-greene-schoharie", "ny-ulster", "ny-sullivan", "ny-chenango-delaware", "ny-otsego", "ny-putnam", "ny-rockland",
      "ny-orange", "ny-columbia", "ny-cortland-tioga", "ny-broome", "ny-allegany-wyoming", "ny-cattaraugus",
      "ny-chautauqua", "ny-steuben", "ny-chemung", "ny-schuyler-seneca-yates", "ny-tompkins",
    ],
    // Not listed (farmland): the Lake Ontario plain and the Erie Canal country (Monroe, Wayne, Genesee, Orleans,
    // Niagara, Erie, Ontario, Onondaga, Oneida, Madison, Cayuga, Livingston, Oswego, Jefferson, Montgomery), the
    // Hudson and Mohawk valleys, Long Island and New York City. No dry.
  },
});
