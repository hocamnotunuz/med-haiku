// National Railways pack: Michigan.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/MI/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/MI/raw.
NR.addPack({
  code: "MI",
  name: "Michigan",
  // A game that starts here begins owning Wayne (Detroit), Washtenaw (Ann Arbor) and Monroe, which
  // all touch each other. Detroit and Ann Arbor are metro and Monroe is coast (a Lake Erie
  // harbour), so the first track (Ann Arbor-Monroe, the nearest pair of different types) has
  // riders; Detroit-Ann Arbor joins two metros, which carries nobody in "A type of place".
  start: ["mi-wayne", "mi-washtenaw", "mi-monroe"],
  // Main stations: one per county region, at its biggest place, except Benton Harbor, Iron
  // Mountain and the downtown points noted. id = the short code shown on passengers. county =
  // region id in this folder's map.js. pop = region population in thousands (2020 census). size =
  // how busy (1 to 5). level = which level unlocks it in Levels mode. Points are the Census points,
  // except the downtowns of the cities noted (NOTES.md).
  stations: [
    // Level 1: Detroit and the south-east
    // Detroit: Michigan's big city (639,475; Wayne County 1,794k, the largest region in the game, size 5 like Chicago and Minneapolis). At Grand Circus Park, downtown (the Census point, 42.38, -83.10, is the middle of the city limits), 4.9 mi from Windsor's station across the river. Detroit Metropolitan (Romulus, in Wayne) is the big airport; the Port of Detroit is a real Great Lakes port on the Detroit River.
    { id: "DET", name: "Detroit", county: "mi-wayne", lat: 42.35, lon: -83.07, airport: "Detroit Metropolitan Wayne County Airport", port: "Port of Detroit", type: "metro", size: 5, pop: 1794, main: true, level: "southeast" },
    // Troy: Oakland County's biggest city (87,297, ahead of Farmington Hills and Southfield; Pontiac, the seat, is smaller); the county 1,274k, size 4 like Naperville (933k).
    { id: "TRMI", name: "Troy", county: "mi-oakland", lat: 42.58, lon: -83.15, type: "metro", size: 4, pop: 1274, main: true, level: "southeast" },
    // Warren: Macomb County's biggest city (139,397, ahead of Sterling Heights); the county 881k, size 4. 7 mi north of Detroit's Midtown; the GM Tech Center is here.
    { id: "WARR", name: "Warren", county: "mi-macomb", lat: 42.49, lon: -83.03, type: "metro", size: 4, pop: 881, main: true, level: "southeast" },
    // Ann Arbor: the University of Michigan (123,875; Washtenaw 372k, size 3 like Lakeville's 440k). Downtown, a mile from the Census point.
    { id: "ANAR", name: "Ann Arbor", county: "mi-washtenaw", lat: 42.28, lon: -83.74, type: "metro", size: 3, pop: 372, main: true, level: "southeast" },
    // Howell: Livingston County's seat and biggest city (10,072; the county 194k, a Detroit-Ann Arbor-Lansing exurb of farms and lakes), on I-96 and US-23.
    { id: "HWL", name: "Howell", county: "mi-livingston", lat: 42.61, lon: -83.93, type: "farm", size: 2, pop: 194, main: true, level: "southeast" },
    // Monroe: Monroe County's biggest city (20,466), on the River Raisin at Lake Erie's western end, with the Port of Monroe (a small Lake Erie port, not marked as a port here) and Detroit Edison's Monroe power plant; the county 155k.
    { id: "MONR", name: "Monroe", county: "mi-monroe", lat: 41.92, lon: -83.38, type: "coast", size: 2, pop: 155, main: true, level: "southeast" },
    // Adrian: Lenawee County's seat and biggest city (20,646), on US-223 and US-127 in the Lake Erie farm plain.
    { id: "ADR", name: "Adrian", county: "mi-lenawee", lat: 41.9, lon: -84.04, type: "farm", size: 2, pop: 99, main: true, level: "southeast" },
    // Lapeer: the county seat and biggest city (9,048), on M-24 and I-69.
    { id: "LPR", name: "Lapeer", county: "mi-lapeer", lat: 43.05, lon: -83.32, type: "farm", size: 1, pop: 89, main: true, level: "southeast" },
    // Port Huron: St. Clair County's biggest city (28,975), at the foot of Lake Huron where the St. Clair River begins; downtown at the river, 5.8 mi from Sarnia's station across the Blue Water Bridge. The county 160k.
    { id: "PTH", name: "Port Huron", county: "mi-st-clair", lat: 42.97, lon: -82.43, type: "coast", size: 2, pop: 160, main: true, level: "southeast" },
    // Flint: Genesee County's seat (81,269; the county 406k, size 3), the birthplace of General Motors, on the Flint River and I-75/I-69. Downtown.
    { id: "FLT", name: "Flint", county: "mi-genesee", lat: 43.01, lon: -83.69, type: "metro", size: 3, pop: 406, main: true, level: "southeast" },
    // Level 2: Lansing and the south
    // Lansing: the state capital (112,661; Ingham 285k, size 2 like Rockford), on the Grand River with MSU in East Lansing next door. At the Capitol, downtown (the Census point is 2 mi south-west).
    { id: "LANS", name: "Lansing", county: "mi-ingham", lat: 42.73, lon: -84.55, type: "metro", size: 2, pop: 285, main: true, level: "south" },
    // Charlotte: Eaton County's seat and biggest city (9,295, by 1,500 over Grand Ledge, a town here), on I-69 south-west of Lansing; the county 109k.
    { id: "CHLT", name: "Charlotte", county: "mi-eaton", lat: 42.57, lon: -84.83, type: "farm", size: 2, pop: 109, main: true, level: "south" },
    // St. Johns: Clinton County's seat and biggest city (7,702), on US-127 north of Lansing.
    { id: "SJMI", name: "St. Johns", county: "mi-clinton", lat: 43, lon: -84.56, type: "farm", size: 1, pop: 79, main: true, level: "south" },
    // Owosso: Shiawassee County's biggest city (14,718), on the Shiawassee River and M-21/M-52.
    { id: "OWOS", name: "Owosso", county: "mi-shiawassee", lat: 43, lon: -84.18, type: "farm", size: 2, pop: 68, main: true, level: "south" },
    // Jackson: Jackson County's seat (31,317; the county 160k), on I-94 and Amtrak's Wolverine, a prison city and the birthplace of the Republican Party (1854).
    { id: "JACK", name: "Jackson", county: "mi-jackson", lat: 42.24, lon: -84.4, type: "metro", size: 2, pop: 160, main: true, level: "south" },
    // Battle Creek: Calhoun County's biggest city (52,708; Kellogg's, 'Cereal City'), on I-94 and the Wolverine. Downtown, 3 mi east of the Census point.
    { id: "BTC", name: "Battle Creek", county: "mi-calhoun", lat: 42.32, lon: -85.18, type: "metro", size: 2, pop: 134, main: true, level: "south" },
    // Coldwater: the biggest place of the group (13,827, ahead of Hillsdale, 8,040), Branch's seat on I-69 and US-12.
    { id: "COLD", name: "Coldwater", county: "mi-branch-hillsdale", lat: 41.95, lon: -85, type: "farm", size: 2, pop: 91, main: true, level: "south" },
    // Sturgis: St. Joseph County's biggest city (11,141), on US-12 and M-66 by the Indiana line.
    { id: "STUR", name: "Sturgis", county: "mi-st-joseph", lat: 41.8, lon: -85.42, type: "farm", size: 1, pop: 61, main: true, level: "south" },
    // Kalamazoo: Kalamazoo County's seat (73,573; Western Michigan University; the county 262k, size 2), on I-94 and the Wolverine, on the Kalamazoo River. Downtown.
    { id: "KZO", name: "Kalamazoo", county: "mi-kalamazoo", lat: 42.29, lon: -85.59, type: "metro", size: 2, pop: 262, main: true, level: "south" },
    // Dowagiac: Cass County's biggest city (5,724), on M-51 and the Amtrak/Michigan Central line.
    { id: "DWG", name: "Dowagiac", county: "mi-cass", lat: 41.98, lon: -86.11, type: "farm", size: 1, pop: 52, main: true, level: "south" },
    // Benton Harbor, not Niles (11,985, a town here): the county's lake-shore centre at the I-94/I-196 junction with the Amtrak stop and the harbour on the St. Joseph River's mouth, twinned with St. Joseph (7,860) and Whirlpool's home. The county 154k.
    { id: "BNH", name: "Benton Harbor", county: "mi-berrien", lat: 42.11, lon: -86.45, type: "coast", size: 2, pop: 154, main: true, level: "south" },
    // South Haven: the biggest place in Van Buren (3,965), a Lake Michigan harbour resort town at the Black River's mouth, on I-196.
    { id: "SHVN", name: "South Haven", county: "mi-van-buren", lat: 42.4, lon: -86.27, type: "coast", size: 1, pop: 76, main: true, level: "south" },
    // Allegan: the county seat and biggest city (5,219 by 785 over Wayland), on the Kalamazoo River and M-40; the county 121k.
    { id: "ALLG", name: "Allegan", county: "mi-allegan", lat: 42.53, lon: -85.84, type: "farm", size: 1, pop: 121, main: true, level: "south" },
    // Hastings: Barry County's seat and biggest city (7,513), on the Thornapple River and M-37.
    { id: "HST", name: "Hastings", county: "mi-barry", lat: 42.65, lon: -85.29, type: "farm", size: 1, pop: 62, main: true, level: "south" },
    // Level 3: Grand Rapids, the lakeshore and Saginaw Bay
    // Grand Rapids: Michigan's second city (198,890; Kent 658k, size 4 like St. Paul's 552k), on the Grand River. Downtown. Gerald R. Ford International Airport (in Cascade Township, Kent) is the state's second busiest.
    { id: "GRR", name: "Grand Rapids", county: "mi-kent", lat: 42.96, lon: -85.67, airport: "Gerald R. Ford International Airport", type: "metro", size: 4, pop: 658, main: true, level: "west" },
    // Holland: the biggest city in Ottawa (34,374; the county 296k, size 2 like Rockford's 285k), on Lake Macatawa a few miles from Lake Michigan, the Dutch Tulip Time town, scenic. Grand Haven (11,014) is a town here.
    { id: "HLD", name: "Holland", county: "mi-ottawa", lat: 42.77, lon: -86.1, scenic: true, type: "coast", size: 2, pop: 296, main: true, level: "west" },
    // Muskegon: the county seat (37,229; the county 175k), the Lake Michigan port at Muskegon Lake with the Lake Express ferry to Milwaukee. Downtown.
    { id: "MKG", name: "Muskegon", county: "mi-muskegon", lat: 43.23, lon: -86.25, type: "coast", size: 2, pop: 175, main: true, level: "west" },
    // Ionia: the county seat and biggest city (13,378), on the Grand River and I-96/M-66.
    { id: "ION", name: "Ionia", county: "mi-ionia", lat: 42.98, lon: -85.07, type: "farm", size: 2, pop: 67, main: true, level: "west" },
    // Greenville: Montcalm County's biggest city (8,811), on M-57 and US-... the Flat River.
    { id: "GNV", name: "Greenville", county: "mi-montcalm", lat: 43.18, lon: -85.25, type: "farm", size: 1, pop: 67, main: true, level: "west" },
    // Fremont: Newaygo County's biggest city (4,509, the Gerber baby-food town), on M-82 and the White River; the county is 50k, on the border of merging.
    { id: "FREM", name: "Fremont", county: "mi-newaygo", lat: 43.46, lon: -85.95, type: "farm", size: 1, pop: 50, main: true, level: "west" },
    // Big Rapids: the biggest place of the group (7,730; Ferris State University), on the Muskegon River and US-131.
    { id: "BGR", name: "Big Rapids", county: "mi-mecosta-osceola", lat: 43.7, lon: -85.48, type: "farm", size: 1, pop: 63, main: true, level: "west" },
    // Alma: Gratiot County's biggest city (9,490, Alma College), on US-127 (St. Louis, 7,011, is next door).
    { id: "ALMM", name: "Alma", county: "mi-gratiot", lat: 43.38, lon: -84.65, type: "farm", size: 1, pop: 42, main: true, level: "west" },
    // Mount Pleasant: Isabella County's seat and biggest city (21,700; Central Michigan University and the Soaring Eagle casino), on US-127.
    { id: "MTPS", name: "Mount Pleasant", county: "mi-isabella", lat: 43.6, lon: -84.78, type: "farm", size: 2, pop: 64, main: true, level: "west" },
    // Saginaw: the seat (44,208; the county 190k), on the Saginaw River. Downtown, a mile from the Census point.
    { id: "SGNW", name: "Saginaw", county: "mi-saginaw", lat: 43.43, lon: -83.95, type: "metro", size: 2, pop: 190, main: true, level: "west" },
    // Bay City: the county seat (32,659; the county 104k), at the mouth of the Saginaw River on Saginaw Bay, on I-75 and US-10.
    { id: "BCY", name: "Bay City", county: "mi-bay", lat: 43.59, lon: -83.89, type: "coast", size: 2, pop: 104, main: true, level: "west" },
    // Midland: the county seat (42,535; Dow Chemical's home; the county 83k), on the Tittabawassee River and US-10.
    { id: "MID", name: "Midland", county: "mi-midland", lat: 43.62, lon: -84.23, type: "metro", size: 2, pop: 83, main: true, level: "west" },
    // Caro: Tuscola County's seat and biggest city (4,323), on M-81 and M-24 in the Thumb's farms.
    { id: "CARO", name: "Caro", county: "mi-tuscola", lat: 43.49, lon: -83.4, type: "farm", size: 1, pop: 53, main: true, level: "west" },
    // Bad Axe: Huron's seat and the biggest place of the group (3,026, by 316 over Sandusky), at the tip of the Thumb, on M-53.
    { id: "BDX", name: "Bad Axe", county: "mi-huron-sanilac", lat: 43.8, lon: -83, type: "farm", size: 1, pop: 72, main: true, level: "west" },
    // Manistee, not Ludington (7,653; Manistee 6,266, ahead of Shelby): the group's middle, the Manistee County seat on Lake Michigan and the Manistee River's mouth on US-31, 27 mi from Ludington and 22 mi from Frankfort. Ludington (a town here, with the S.S. Badger car ferry to Manitowoc) is across the map's Lake Michigan bulge in Tough, so a station there left Frankfort with a single open neighbour.
    { id: "MNTE", name: "Manistee", county: "mi-manistee-mason-oceana", lat: 44.25, lon: -86.33, type: "coast", size: 1, pop: 81, main: true, level: "west" },
    // Clare: the biggest place of the group (3,260, ahead of Gladwin, 3,069), on US-10 and US-127, 'the Gateway to the North'.
    { id: "CLAR", name: "Clare", county: "mi-clare-gladwin-roscommon", lat: 43.83, lon: -84.77, type: "farm", size: 1, pop: 80, main: true, level: "west" },
    // Level 4: Northern Michigan and the Upper Peninsula
    // Cadillac: Wexford's seat and the biggest place of the group (10,367), on Lake Cadillac and US-131/M-55.
    { id: "CAD", name: "Cadillac", county: "mi-lake-missaukee-wexford", lat: 44.25, lon: -85.41, type: "mountain", size: 1, pop: 61, main: true, level: "north" },
    // Traverse City: the biggest city of the north (15,670; the county 95k, size 2 as the biggest northern region), on Grand Traverse Bay, the National Cherry Festival, scenic. Downtown.
    { id: "TVC", name: "Traverse City", county: "mi-grand-traverse", lat: 44.76, lon: -85.62, scenic: true, type: "coast", size: 2, pop: 95, main: true, level: "north" },
    // Frankfort: the biggest place of the group (1,249; Suttons Bay, in Leelanau, 571), Benzie's harbour town on Lake Michigan at the Betsie River's mouth, on M-22 and the Betsie Valley line.
    { id: "FRK", name: "Frankfort", county: "mi-benzie-leelanau", lat: 44.63, lon: -86.24, type: "coast", size: 1, pop: 40, main: true, level: "north" },
    // Petoskey: the biggest place of the group (5,869), Emmet's seat on Little Traverse Bay, on US-31. Downtown, 3 mi east of the Census point.
    { id: "PTK", name: "Petoskey", county: "mi-antrim-charlevoix-emmet", lat: 45.37, lon: -84.96, type: "coast", size: 1, pop: 84, main: true, level: "north" },
    // Cheboygan: the biggest place of the group (4,770; Rogers City 2,851), on Lake Huron at the Cheboygan River's mouth, on US-23.
    { id: "CHEB", name: "Cheboygan", county: "mi-cheboygan-montmorency-presque-isle", lat: 45.65, lon: -84.47, type: "coast", size: 1, pop: 48, main: true, level: "north" },
    // Alpena: the biggest place of the group (10,209), on Thunder Bay on Lake Huron, US-23's main town.
    { id: "ALPE", name: "Alpena", county: "mi-alcona-alpena-oscoda", lat: 45.06, lon: -83.43, type: "coast", size: 1, pop: 47, main: true, level: "north" },
    // East Tawas: the biggest place of the group (2,668, ahead of West Branch, 2,347), Iosco's resort town on Tawas Bay, US-23. West Branch is a town.
    { id: "ETW", name: "East Tawas", county: "mi-arenac-iosco-ogemaw", lat: 44.29, lon: -83.48, type: "coast", size: 1, pop: 61, main: true, level: "north" },
    // Gaylord: Otsego's seat and the biggest place of the group (4,284; Kalkaska 2,190 and Grayling 1,855 are towns), on I-75 and 'the Alpine Village'.
    { id: "GYL", name: "Gaylord", county: "mi-crawford-kalkaska-otsego", lat: 45.03, lon: -84.67, type: "mountain", size: 1, pop: 56, main: true, level: "north" },
    // Sault Ste. Marie: the biggest place of the group (13,336), on the St. Marys River at the Soo Locks. Downtown; 4.8 mi from Ontario's Sault Ste. Marie station across the river (kept apart by the 4 mi rule).
    { id: "SSMM", name: "Sault Ste. Marie", county: "mi-chippewa-luce-mackinac", lat: 46.49, lon: -84.36, type: "coast", size: 1, pop: 54, main: true, level: "north" },
    // Escanaba: the biggest place of the group (12,420), Delta's seat on Little Bay de Noc (Lake Michigan), a US-2/US-41 iron-ore port.
    { id: "ESCA", name: "Escanaba", county: "mi-alger-delta-schoolcraft", lat: 45.75, lon: -87.06, type: "coast", size: 1, pop: 54, main: true, level: "north" },
    // Iron Mountain, not Menominee (8,483): Iron Mountain (7,519; with Kingsford, 5,142, next door, 12,700 together) is the Menominee Range's centre on US-2/US-141, 25 mi from Florence, Wisconsin; Menominee faces Marinette (Wisconsin's station) across the river, 1.5 mi away, so it is left out as a town.
    { id: "IMT", name: "Iron Mountain", county: "mi-dickinson-iron-menominee", lat: 45.82, lon: -88.07, type: "mountain", size: 1, pop: 61, main: true, level: "north" },
    // Ironwood: the biggest place of the group (5,042), on US-2 at the Wisconsin line, facing Hurley (a town in Wisconsin's pack, 3 mi west).
    { id: "IRW", name: "Ironwood", county: "mi-gogebic-ontonagon", lat: 46.45, lon: -90.15, type: "mountain", size: 1, pop: 20, main: true, level: "north" },
    // Houghton: the biggest place of the group (8,389; Michigan Tech), on the Keweenaw Waterway, joined to Hancock (a mile north, not a town here) by the Portage Lake Lift Bridge.
    { id: "HTN", name: "Houghton", county: "mi-baraga-houghton-keweenaw", lat: 47.12, lon: -88.57, type: "mountain", size: 1, pop: 48, main: true, level: "north" },
    // Marquette: the Upper Peninsula's biggest city (20,609; the county 66k), a Lake Superior harbour (the ore dock) on US-41/M-28, Northern Michigan University.
    { id: "MQT", name: "Marquette", county: "mi-marquette", lat: 46.55, lon: -87.4, type: "coast", size: 2, pop: 66, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Left out: Menominee (facing Marinette's station in Wisconsin), Hancock (a mile from Houghton),
  // St. Joseph (twinned with Benton Harbor) and the other twins (NOTES.md).
  towns: [
    { id: "PNTC", name: "Pontiac", county: "mi-oakland", lat: 42.65, lon: -83.29, type: "metro", size: 2 },
    // Dearborn: Ford's home town and the Henry Ford museum and Greenfield Village (the country's biggest indoor-outdoor history museum), scenic.
    { id: "DRBN", name: "Dearborn", county: "mi-wayne", lat: 42.31, lon: -83.21, scenic: true, type: "metro", size: 3 },
    // Mackinaw City: the village at the south end of the Mackinac Bridge, on the Straits, with Fort Michilimackinac and the Mackinac Island ferries.
    { id: "MKCY", name: "Mackinaw City", county: "mi-antrim-charlevoix-emmet", lat: 45.78, lon: -84.76, type: "coast", size: 1 },
    // Grayling: on I-75 and the Au Sable River, the northern Lower Peninsula's canoe and fishing gateway.
    { id: "GRLG", name: "Grayling", county: "mi-crawford-kalkaska-otsego", lat: 44.66, lon: -84.71, type: "mountain", size: 1 },
    // Mackinac Island: the car-free island resort in the Straits (the Grand Hotel, the fort), reached by ferry from St. Ignace and Mackinaw City, scenic.
    { id: "MKIS", name: "Mackinac Island", county: "mi-chippewa-luce-mackinac", lat: 45.86, lon: -84.63, scenic: true, type: "coast", size: 1 },
    // Munising: the gateway to Pictured Rocks National Lakeshore (the coloured sandstone cliffs on Lake Superior), scenic.
    { id: "MUNS", name: "Munising", county: "mi-alger-delta-schoolcraft", lat: 46.43, lon: -86.62, scenic: true, type: "coast", size: 1 },
    // Copper Harbor: the tip of the Keweenaw Peninsula (Fort Wilkins, Brockway Mountain Drive; a CDP with no Census population, its point is from places.json), scenic.
    { id: "CPHB", name: "Copper Harbor", county: "mi-baraga-houghton-keweenaw", lat: 47.47, lon: -87.87, scenic: true, type: "mountain", size: 1 },
    // Empire: the gateway to Sleeping Bear Dunes National Lakeshore (a village of 348; its point is from places.json), scenic.
    { id: "EMPR", name: "Empire", county: "mi-benzie-leelanau", lat: 44.81, lon: -86.06, scenic: true, type: "coast", size: 1 },
    { id: "MANI", name: "Manistique", county: "mi-alger-delta-schoolcraft", lat: 45.96, lon: -86.25, type: "mountain", size: 1 },
    // Newberry: the Luce County seat and the gateway to Tahquamenon Falls State Park (the falls are 25 mi north, near Paradise, which has no Census place), on M-28.
    { id: "NWBY", name: "Newberry", county: "mi-chippewa-luce-mackinac", lat: 46.35, lon: -85.51, type: "mountain", size: 1 },
    // Frankenmuth: 'Michigan's Little Bavaria' (Bronner's Christmas Wonderland, the chicken dinners), a big tourist draw, scenic.
    { id: "FRAN", name: "Frankenmuth", county: "mi-saginaw", lat: 43.33, lon: -83.74, scenic: true, type: "farm", size: 1 },
    { id: "GHVN", name: "Grand Haven", county: "mi-ottawa", lat: 43.05, lon: -86.22, type: "coast", size: 1 },
    { id: "LNSE", name: "L'Anse", county: "mi-baraga-houghton-keweenaw", lat: 46.75, lon: -88.45, type: "mountain", size: 1 },
    { id: "ONTG", name: "Ontonagon", county: "mi-gogebic-ontonagon", lat: 46.87, lon: -89.31, type: "mountain", size: 1 },
    { id: "CHVX", name: "Charlevoix", county: "mi-antrim-charlevoix-emmet", lat: 45.31, lon: -85.26, type: "coast", size: 1 },
    { id: "GLAE", name: "Gladstone", county: "mi-alger-delta-schoolcraft", lat: 45.85, lon: -87.03, type: "coast", size: 1 },
    { id: "NRWY", name: "Norway", county: "mi-dickinson-iron-menominee", lat: 45.8, lon: -87.91, type: "mountain", size: 1 },
    { id: "KLKS", name: "Kalkaska", county: "mi-crawford-kalkaska-otsego", lat: 44.73, lon: -85.18, type: "mountain", size: 1 },
    { id: "NGNE", name: "Negaunee", county: "mi-marquette", lat: 46.5, lon: -87.59, type: "mountain", size: 1 },
    { id: "STIG", name: "St. Ignace", county: "mi-chippewa-luce-mackinac", lat: 45.89, lon: -84.73, type: "coast", size: 1 },
    { id: "STND", name: "Standish", county: "mi-arenac-iosco-ogemaw", lat: 43.98, lon: -83.96, type: "farm", size: 1 },
    { id: "AUGR", name: "Au Gres", county: "mi-arenac-iosco-ogemaw", lat: 44.04, lon: -83.69, type: "coast", size: 1 },
    { id: "NBWY", name: "Naubinway", county: "mi-chippewa-luce-mackinac", lat: 46.09, lon: -85.46, type: "coast", size: 1 },
    { id: "LUDI", name: "Ludington", county: "mi-manistee-mason-oceana", lat: 43.96, lon: -86.44, type: "coast", size: 1 },
    { id: "BRML", name: "Brimley", county: "mi-chippewa-luce-mackinac", lat: 46.41, lon: -84.58, type: "mountain", size: 1 },
    { id: "CHAT", name: "Chatham", county: "mi-alger-delta-schoolcraft", lat: 46.34, lon: -86.93, type: "mountain", size: 1 },
    { id: "ELKS", name: "Elk Rapids", county: "mi-antrim-charlevoix-emmet", lat: 44.9, lon: -85.4, type: "mountain", size: 1 },
    { id: "RSCM", name: "Roscommon", county: "mi-clare-gladwin-roscommon", lat: 44.49, lon: -84.59, type: "mountain", size: 1 },
    { id: "HARR", name: "Harrison", county: "mi-clare-gladwin-roscommon", lat: 44.01, lon: -84.81, type: "farm", size: 1 },
    { id: "GLDW", name: "Gladwin", county: "mi-clare-gladwin-roscommon", lat: 43.98, lon: -84.49, type: "farm", size: 1 },
    { id: "WBRN", name: "West Branch", county: "mi-arenac-iosco-ogemaw", lat: 44.27, lon: -84.24, type: "farm", size: 1 },
    { id: "LVNA", name: "Livonia", county: "mi-wayne", lat: 42.4, lon: -83.37, type: "metro", size: 2 },
    { id: "WSTL", name: "Westland", county: "mi-wayne", lat: 42.32, lon: -83.38, type: "metro", size: 2 },
    { id: "TALO", name: "Taylor", county: "mi-wayne", lat: 42.23, lon: -83.27, type: "metro", size: 2 },
    { id: "FMHL", name: "Farmington Hills", county: "mi-oakland", lat: 42.49, lon: -83.38, type: "metro", size: 2 },
    { id: "SFLD", name: "Southfield", county: "mi-oakland", lat: 42.47, lon: -83.26, type: "metro", size: 2 },
    { id: "ROCS", name: "Rochester Hills", county: "mi-oakland", lat: 42.66, lon: -83.16, type: "metro", size: 2 },
    { id: "STHT", name: "Sterling Heights", county: "mi-macomb", lat: 42.58, lon: -83.03, type: "metro", size: 3 },
    { id: "SCSH", name: "St. Clair Shores", county: "mi-macomb", lat: 42.49, lon: -82.89, type: "coast", size: 2 },
    { id: "MOUS", name: "Mount Clemens", county: "mi-macomb", lat: 42.6, lon: -82.88, type: "metro", size: 1 },
    { id: "NWBL", name: "New Baltimore", county: "mi-macomb", lat: 42.69, lon: -82.74, type: "coast", size: 1 },
    { id: "WYMI", name: "Wyoming", county: "mi-kent", lat: 42.89, lon: -85.71, type: "metro", size: 2 },
    { id: "KNTW", name: "Kentwood", county: "mi-kent", lat: 42.88, lon: -85.59, type: "metro", size: 2 },
    { id: "WALK", name: "Walker", county: "mi-kent", lat: 43, lon: -85.76, type: "metro", size: 1 },
    { id: "FNTN", name: "Fenton", county: "mi-genesee", lat: 42.8, lon: -83.72, type: "farm", size: 1 },
    { id: "FLSH", name: "Flushing", county: "mi-genesee", lat: 43.06, lon: -83.84, type: "farm", size: 1 },
    { id: "GRBL", name: "Grand Blanc", county: "mi-genesee", lat: 42.93, lon: -83.62, type: "metro", size: 1 },
    { id: "YPSI", name: "Ypsilanti", county: "mi-washtenaw", lat: 42.24, lon: -83.62, type: "metro", size: 1 },
    { id: "SALN", name: "Saline", county: "mi-washtenaw", lat: 42.17, lon: -83.78, type: "farm", size: 1 },
    { id: "CHLS", name: "Chelsea", county: "mi-washtenaw", lat: 42.31, lon: -84.02, type: "farm", size: 1 },
    { id: "HDVL", name: "Hudsonville", county: "mi-ottawa", lat: 42.86, lon: -85.86, type: "farm", size: 1 },
    { id: "ZLND", name: "Zeeland", county: "mi-ottawa", lat: 42.81, lon: -86.01, type: "farm", size: 1 },
    { id: "MSON", name: "Mason", county: "mi-ingham", lat: 42.58, lon: -84.44, type: "farm", size: 1 },
    { id: "WLMS", name: "Williamston", county: "mi-ingham", lat: 42.68, lon: -84.28, type: "farm", size: 1 },
    { id: "WEBB", name: "Webberville", county: "mi-ingham", lat: 42.66, lon: -84.19, type: "farm", size: 1 },
    { id: "PORE", name: "Portage", county: "mi-kalamazoo", lat: 42.2, lon: -85.59, type: "metro", size: 2 },
    { id: "VCKS", name: "Vicksburg", county: "mi-kalamazoo", lat: 42.12, lon: -85.54, type: "farm", size: 1 },
    { id: "GLBG", name: "Galesburg", county: "mi-kalamazoo", lat: 42.29, lon: -85.42, type: "farm", size: 1 },
    { id: "BRIG", name: "Brighton", county: "mi-livingston", lat: 42.53, lon: -83.78, type: "metro", size: 1 },
    { id: "PNKY", name: "Pinckney", county: "mi-livingston", lat: 42.46, lon: -83.94, type: "farm", size: 1 },
    { id: "CHES", name: "Chesaning", county: "mi-saginaw", lat: 43.19, lon: -84.12, type: "farm", size: 1 },
    { id: "WHTH", name: "Whitehall", county: "mi-muskegon", lat: 43.4, lon: -86.34, type: "coast", size: 1 },
    { id: "BRON", name: "Brooklyn", county: "mi-jackson", lat: 42.11, lon: -84.25, type: "farm", size: 1 },
    { id: "MARY", name: "Marysville", county: "mi-st-clair", lat: 42.91, lon: -82.48, type: "farm", size: 1 },
    { id: "STCL", name: "St. Clair", county: "mi-st-clair", lat: 42.83, lon: -82.49, type: "coast", size: 1 },
    { id: "MILN", name: "Milan", county: "mi-monroe", lat: 42.08, lon: -83.68, type: "farm", size: 1 },
    { id: "DNDE", name: "Dundee", county: "mi-monroe", lat: 41.97, lon: -83.67, type: "farm", size: 1 },
    { id: "NLES", name: "Niles", county: "mi-berrien", lat: 41.83, lon: -86.25, type: "farm", size: 1 },
    { id: "BCHN", name: "Buchanan", county: "mi-berrien", lat: 41.83, lon: -86.37, type: "farm", size: 1 },
    { id: "ALIO", name: "Albion", county: "mi-calhoun", lat: 42.25, lon: -84.76, type: "farm", size: 1 },
    { id: "WYLD", name: "Wayland", county: "mi-allegan", lat: 42.67, lon: -85.64, type: "farm", size: 1 },
    { id: "GLDG", name: "Grand Ledge", county: "mi-eaton", lat: 42.75, lon: -84.74, type: "farm", size: 1 },
    { id: "PNCN", name: "Pinconning", county: "mi-bay", lat: 43.86, lon: -83.96, type: "farm", size: 1 },
    { id: "TECH", name: "Tecumseh", county: "mi-lenawee", lat: 42.01, lon: -83.94, type: "farm", size: 1 },
    { id: "HLSD", name: "Hillsdale", county: "mi-branch-hillsdale", lat: 41.93, lon: -84.64, type: "farm", size: 1 },
    { id: "IMLC", name: "Imlay City", county: "mi-lapeer", lat: 43.02, lon: -83.08, type: "farm", size: 1 },
    { id: "DEWI", name: "DeWitt", county: "mi-clinton", lat: 42.84, lon: -84.58, type: "farm", size: 1 },
    { id: "PWPW", name: "Paw Paw", county: "mi-van-buren", lat: 42.21, lon: -85.89, type: "farm", size: 1 },
    { id: "SNDK", name: "Sandusky", county: "mi-huron-sanilac", lat: 43.42, lon: -82.83, type: "farm", size: 1 },
    { id: "DRND", name: "Durand", county: "mi-shiawassee", lat: 42.91, lon: -83.99, type: "farm", size: 1 },
    { id: "BLDG", name: "Belding", county: "mi-ionia", lat: 43.1, lon: -85.23, type: "farm", size: 1 },
    { id: "HWDC", name: "Howard City", county: "mi-montcalm", lat: 43.39, lon: -85.47, type: "farm", size: 1 },
    { id: "SHEP", name: "Shepherd", county: "mi-isabella", lat: 43.52, lon: -84.69, type: "farm", size: 1 },
    { id: "REDC", name: "Reed City", county: "mi-mecosta-osceola", lat: 43.87, lon: -85.51, type: "farm", size: 1 },
    { id: "MIDE", name: "Middleville", county: "mi-barry", lat: 42.72, lon: -85.47, type: "farm", size: 1 },
    { id: "MANT", name: "Manton", county: "mi-lake-missaukee-wexford", lat: 44.41, lon: -85.4, type: "mountain", size: 1 },
    { id: "THRV", name: "Three Rivers", county: "mi-st-joseph", lat: 41.95, lon: -85.63, type: "farm", size: 1 },
    { id: "VSSR", name: "Vassar", county: "mi-tuscola", lat: 43.37, lon: -83.58, type: "farm", size: 1 },
    { id: "CSPL", name: "Cassopolis", county: "mi-cass", lat: 41.91, lon: -86.01, type: "farm", size: 1 },
    { id: "NWGO", name: "Newaygo", county: "mi-newaygo", lat: 43.42, lon: -85.8, type: "farm", size: 1 },
    { id: "RGRC", name: "Rogers City", county: "mi-cheboygan-montmorency-presque-isle", lat: 45.42, lon: -83.8, type: "coast", size: 1 },
    { id: "ITHC", name: "Ithaca", county: "mi-gratiot", lat: 43.29, lon: -84.6, type: "farm", size: 1 },
  ],
  // City maps, keyed by their main station on the state map. hub = the main station's own stop
  // in the city, where riders change to and from trains.
  metros: {
    DET: {
      name: "Detroit",
      size: 5,
      stops: [
        { id: "DTN", name: "New Center (Amtrak)", lat: 42.368, lon: -83.078, hub: true },
        { id: "DWN", name: "Downtown", lat: 42.336, lon: -83.049 },
        { id: "CTN", name: "Corktown", lat: 42.33, lon: -83.075 },
        { id: "HAM", name: "Hamtramck", lat: 42.393, lon: -83.05 },
        { id: "WIN", name: "Windsor", lat: 42.315, lon: -83.036 },
        { id: "GPE", name: "Grosse Pointe", lat: 42.386, lon: -82.911 },
        { id: "DBN", name: "Dearborn", lat: 42.322, lon: -83.176 },
        { id: "DTW", name: "Metro Airport", lat: 42.212, lon: -83.349 },
        { id: "LVN", name: "Livonia", lat: 42.368, lon: -83.353 },
        { id: "SFD", name: "Southfield", lat: 42.473, lon: -83.222 },
        { id: "ROK", name: "Royal Oak", lat: 42.489, lon: -83.145 },
        { id: "WRN", name: "Warren", lat: 42.49, lon: -83.027 },
      ],
    },
  },
  // No mountains on Michigan's map (the Porcupine Mountains and the Huron Mountains are hills),
  // so no link needs a pass.
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water or a river crossed near one uses the real
  // bridge (cheaper, and any length); anywhere else you build a new one, if the water is narrow
  // enough. The Great Lakes, Lake St. Clair and the St. Marys River are lakes on the map, so they
  // block track except at these. River bridges stand on the map's river where it passes the town
  // (sources in NOTES.md). The Marinette-Menominee crossing is in Wisconsin's pack.
  bridges: [
    // The Straits of Mackinac: the Mackinac Bridge (I-75, 5 miles) from Mackinaw City to St. Ignace.
    // Two points along it, so the crossing from Cheboygan or Petoskey to St. Ignace uses it.
    ["Mackinac Bridge (Mackinaw City end)", 45.8, -84.73],
    ["Mackinac Bridge (St. Ignace end)", 45.84, -84.73],
    // Michigan to Ontario: Ontario's pack lists none of these.
    ["Ambassador Bridge (Detroit–Windsor)", 42.31, -83.07],
    ["Detroit–Windsor Tunnel", 42.32, -83.04],
    ["Blue Water Bridge (Port Huron–Sarnia)", 43, -82.42],
    ["Sault Ste. Marie International Bridge", 46.51, -84.36],
    // The Mackinac Island ferries (Arnold Transit, Shepler's, Star Line) from St. Ignace, about 4 miles
    ["Mackinac Island ferry (from St. Ignace)", 45.87, -84.68],
    // Portage Lake Lift Bridge (US-41), Houghton to Hancock
    ["Portage Lake Lift Bridge (Houghton–Hancock)", 47.12, -88.57],
    // The Grand River
    ["Grand River bridges (Jackson)", 42.24, -84.4],
    ["Grand River bridge (Eaton Rapids)", 42.51, -84.65],
    ["Grand River bridges (Lansing)", 42.73, -84.59],
    ["Grand River bridge (Grand Ledge)", 42.76, -84.74],
    ["Grand River bridge (Portland)", 42.87, -84.91],
    ["Grand River bridge (Ionia)", 42.98, -85.08],
    ["Grand River bridge (Lowell)", 42.94, -85.35],
    ["Grand River bridges (Grand Rapids)", 42.98, -85.68],
    ["Grand River bridge (Grand Haven)", 43.07, -86.2],
    // The Kalamazoo River
    ["Kalamazoo River bridge (Albion)", 42.24, -84.76],
    ["Kalamazoo River bridge (Marshall)", 42.25, -84.96],
    ["Kalamazoo River bridges (Battle Creek)", 42.32, -85.22],
    ["Kalamazoo River bridge (Galesburg)", 42.28, -85.4],
    ["Kalamazoo River bridges (Kalamazoo)", 42.28, -85.55],
    ["Kalamazoo River bridge (Plainwell)", 42.44, -85.64],
    ["Kalamazoo River bridge (Allegan)", 42.53, -85.85],
    // The St. Joseph River
    ["St. Joseph River bridge (Three Rivers)", 41.94, -85.61],
    ["St. Joseph River bridge (Constantine)", 41.84, -85.67],
    ["St. Joseph River bridge (Niles)", 41.83, -86.26],
    ["St. Joseph River bridge (Berrien Springs)", 41.95, -86.33],
    ["St. Joseph River bridge (St. Joseph–Benton Harbor)", 42.1, -86.47],
    // The Muskegon River
    ["Muskegon River bridge (Evart)", 43.89, -85.26],
    ["Muskegon River bridges (Big Rapids)", 43.7, -85.47],
    ["Muskegon River bridge (Newaygo)", 43.42, -85.8],
    // The Flint River
    ["Flint River bridges (Flint)", 43.03, -83.69],
    ["Flint River bridge (Flushing)", 43.06, -83.84],
    // The Menominee River (the Wisconsin line)
    ["Menominee River bridge (Kingsford, US-2 to Florence)", 45.8, -88.1],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The northern forest: the Upper Peninsula and the northern Lower Peninsula's pine and hardwoods
    forest: ["mi-alger-delta-schoolcraft", "mi-chippewa-luce-mackinac", "mi-dickinson-iron-menominee", "mi-gogebic-ontonagon", "mi-baraga-houghton-keweenaw", "mi-marquette", "mi-antrim-charlevoix-emmet", "mi-cheboygan-montmorency-presque-isle", "mi-alcona-alpena-oscoda", "mi-crawford-kalkaska-otsego", "mi-arenac-iosco-ogemaw", "mi-clare-gladwin-roscommon", "mi-lake-missaukee-wexford"],
    // The lake-shore dunes and orchards, the Manistee and Muskegon river woods
    wooded: ["mi-manistee-mason-oceana", "mi-benzie-leelanau", "mi-grand-traverse", "mi-mecosta-osceola", "mi-newaygo"],
    // Not listed (farmland and grassland): the south, the Thumb and the Saginaw valley.
  },
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Detroit & the South-East",
      areas: ["southeast"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Lansing & the South",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Detroit to Lansing, as I-96 runs
        { kind: "connect", a: "DET", b: "LANS" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "Grand Rapids, the Lakeshore & Saginaw Bay",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Lansing to Grand Rapids, as I-96 runs
        { kind: "connect", a: "LANS", b: "GRR" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Northern Michigan & the Upper Peninsula",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Traverse City to the Soo, across the Mackinac Bridge
        { kind: "connect", a: "TVC", b: "SSMM" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
  ],
});
