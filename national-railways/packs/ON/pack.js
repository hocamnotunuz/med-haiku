// National Railways pack: Ontario (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The census division borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/ON/NOTES.md. Cities and populations: Statistics Canada (2021), packs/ON/raw.
NR.addPack({
  code: "ON",
  name: "Ontario",
  country: "CAN",
  // A game that starts here begins owning Toronto, York Region (Markham) and Durham Region
  // (Oshawa): the three touch each other. Toronto and Markham are metro and Oshawa is coast, so
  // the first track has riders. Peel (Mississauga, Pearson airport) is the first one to buy.
  start: ["on-toronto", "on-york", "on-durham"],
  // Main stations: one per region, at its biggest town (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // Level 1: Toronto and the GTA
    // Toronto: downtown at Union Station (the raw point, 43.74, -79.37, is the middle of the
    // amalgamated city, in North York).
    { id: "TOR", name: "Toronto", county: "on-toronto", lat: 43.65, lon: -79.38, type: "metro", size: 5, pop: 2794, main: true, level: "gta" },
    { id: "MSS", name: "Mississauga", county: "on-peel", lat: 43.59, lon: -79.66, airport: "Toronto Pearson International", type: "metro", size: 4, pop: 1451, main: true, level: "gta" },
    { id: "MKM", name: "Markham", county: "on-york", lat: 43.88, lon: -79.26, type: "metro", size: 4, pop: 1173, main: true, level: "gta" },
    // Oshawa: a lake port (the Port of Oshawa), and Durham's cities all line the Lake Ontario
    // shore, so coast (like Tacoma in Washington). That also gives Toronto–Oshawa riders.
    { id: "OSH", name: "Oshawa", county: "on-durham", lat: 43.9, lon: -78.86, type: "coast", size: 4, pop: 697, main: true, level: "gta" },
    { id: "OKV", name: "Oakville", county: "on-halton", lat: 43.46, lon: -79.71, type: "metro", size: 4, pop: 597, main: true, level: "gta" },
    // Hamilton: the steel city on Hamilton Harbour, with the biggest Canadian port on the Great
    // Lakes, so coast. At the old city's centre (the raw city point, 43.24, -79.99, is out in Ancaster).
    { id: "HAM", name: "Hamilton", county: "on-hamilton", lat: 43.25, lon: -79.84, port: "Port of Hamilton", type: "coast", size: 4, pop: 569, main: true, level: "gta" },
    // Level 2: Niagara and the Southwest
    { id: "SCA", name: "St. Catharines", county: "on-niagara", lat: 43.17, lon: -79.25, type: "metro", size: 3, pop: 478, main: true, level: "southwest" },
    { id: "KCH", name: "Kitchener", county: "on-waterloo", lat: 43.42, lon: -80.47, type: "metro", size: 4, pop: 587, main: true, level: "southwest" },
    { id: "LDN", name: "London", county: "on-middlesex", lat: 42.97, lon: -81.23, type: "metro", size: 4, pop: 501, main: true, level: "southwest" },
    { id: "WND", name: "Windsor", county: "on-essex", lat: 42.3, lon: -82.99, type: "metro", size: 3, pop: 423, main: true, level: "southwest" },
    // Guelph: a city of 144,000 with Wellington County's farms around it (and the Ontario
    // Agricultural College), so farm, like Red Deer in Alberta.
    { id: "GPH", name: "Guelph", county: "on-wellington", lat: 43.54, lon: -80.23, type: "farm", size: 2, pop: 241, main: true, level: "southwest" },
    { id: "BRT", name: "Brantford", county: "on-brant", lat: 43.16, lon: -80.26, type: "metro", size: 2, pop: 145, main: true, level: "southwest" },
    // Sarnia: on Lake Huron where it drains into the St. Clair River, so coast.
    { id: "SRN", name: "Sarnia", county: "on-lambton", lat: 42.98, lon: -82.32, type: "coast", size: 2, pop: 128, main: true, level: "southwest" },
    { id: "WDS", name: "Woodstock", county: "on-oxford", lat: 43.14, lon: -80.74, type: "farm", size: 2, pop: 122, main: true, level: "southwest" },
    // Chatham: the town (its population centre has 45,171). The census subdivision, Chatham-Kent
    // (104,316), is the whole region.
    { id: "CHK", name: "Chatham", county: "on-chatham-kent", lat: 42.4, lon: -82.19, type: "farm", size: 2, pop: 104, main: true, level: "southwest" },
    // Simcoe: the biggest town (16,121) of Norfolk County, the single-tier municipality that is
    // the bigger half of Haldimand-Norfolk.
    { id: "SIM", name: "Simcoe", county: "on-haldimand-norfolk", lat: 42.84, lon: -80.31, type: "farm", size: 1, pop: 117, main: true, level: "southwest" },
    { id: "STT", name: "St. Thomas", county: "on-elgin", lat: 42.78, lon: -81.19, type: "farm", size: 1, pop: 95, main: true, level: "southwest" },
    // Stratford: the Stratford Festival draws theatre-goers from across the continent, so scenic.
    { id: "STF", name: "Stratford", county: "on-perth", lat: 43.37, lon: -80.98, scenic: true, type: "farm", size: 1, pop: 82, main: true, level: "southwest" },
    // Goderich rather than South Huron (10,096, a township whose biggest place, Exeter, has
    // 4,857): Goderich (7,881) is the biggest town, the county seat and a Lake Huron harbour.
    { id: "GDH", name: "Goderich", county: "on-huron", lat: 43.74, lon: -81.7, type: "coast", size: 1, pop: 61, main: true, level: "southwest" },
    // Level 3: Eastern Ontario and Ottawa
    { id: "OTT", name: "Ottawa", county: "on-ottawa", lat: 45.4, lon: -75.67, airport: "Ottawa Macdonald–Cartier International", type: "metro", size: 4, pop: 1017, main: true, level: "east" },
    // Kingston: at the old city (the raw city point, 44.31, -76.42, is the middle of the
    // amalgamated city); Fort Henry and the head of the St. Lawrence.
    { id: "KGN", name: "Kingston", county: "on-frontenac-lennox-and-addington", lat: 44.24, lon: -76.51, type: "metro", size: 2, pop: 207, main: true, level: "east" },
    // Belleville: the farm and dairy country of the Quinte area and Prince Edward County.
    { id: "BLE", name: "Belleville", county: "on-hastings-prince-edward", lat: 44.26, lon: -77.37, type: "farm", size: 2, pop: 171, main: true, level: "east" },
    { id: "PTB", name: "Peterborough", county: "on-peterborough", lat: 44.3, lon: -78.33, type: "metro", size: 2, pop: 148, main: true, level: "east" },
    // Cornwall: the city (47,845) of the farm counties of Stormont, Dundas and Glengarry.
    { id: "CWL", name: "Cornwall", county: "on-stormont-dundas-and-glengarry", lat: 45.03, lon: -74.73, type: "farm", size: 2, pop: 115, main: true, level: "east" },
    // Pembroke rather than Petawawa (18,160 people, population centre 14,405): Pembroke is the
    // city and county seat, and its population centre is bigger (16,580). Renfrew County is mostly
    // forest (the Madawaska Highlands, Algonquin's east side), so mountain.
    { id: "PEM", name: "Pembroke", county: "on-renfrew", lat: 45.82, lon: -77.11, type: "mountain", size: 1, pop: 106, main: true, level: "east" },
    // Brockville: "the City of the 1000 Islands", on the St. Lawrence, so coast.
    { id: "BRV", name: "Brockville", county: "on-leeds-and-grenville", lat: 44.6, lon: -75.69, type: "coast", size: 1, pop: 104, main: true, level: "east" },
    // Lindsay: the biggest town (22,367) of the City of Kawartha Lakes, whose raw point (79,247
    // people) sits in the middle of the municipality, not at a town.
    { id: "LIN", name: "Lindsay", county: "on-haliburton-kawartha-lakes", lat: 44.36, lon: -78.74, type: "farm", size: 1, pop: 100, main: true, level: "east" },
    // Rockland: the biggest town (13,625) of Clarence-Rockland, the biggest municipality.
    { id: "RKL", name: "Rockland", county: "on-prescott-and-russell", lat: 45.55, lon: -75.29, type: "farm", size: 1, pop: 96, main: true, level: "east" },
    // Cobourg: a Lake Ontario harbour and beach town, so coast.
    { id: "CBG", name: "Cobourg", county: "on-northumberland", lat: 43.97, lon: -78.17, type: "coast", size: 1, pop: 89, main: true, level: "east" },
    // Carleton Place rather than Mississippi Mills (14,740, a municipality whose biggest place,
    // Almonte, has 6,119): Carleton Place's population centre (13,941) is the biggest town.
    { id: "CPL", name: "Carleton Place", county: "on-lanark", lat: 45.14, lon: -76.14, type: "farm", size: 1, pop: 76, main: true, level: "east" },
    // Level 4: Georgian Bay and the North
    { id: "BRI", name: "Barrie", county: "on-simcoe", lat: 44.37, lon: -79.68, type: "metro", size: 4, pop: 533, main: true, level: "north" },
    // Sudbury: the station uses the Greater Sudbury city entry (166,004), at downtown Sudbury
    // (the "Sudbury" locality, 46.50, -80.98; the city entry's point is the middle of the city).
    { id: "SUD", name: "Sudbury", county: "on-greater-sudbury-manitoulin-sudbury", lat: 46.5, lon: -80.98, type: "metro", size: 2, pop: 202, main: true, level: "north" },
    // Thunder Bay: the Lake Superior port at the head of the Seaway (grain), so coast.
    { id: "TBY", name: "Thunder Bay", county: "on-thunder-bay", lat: 48.4, lon: -89.27, port: "Port of Thunder Bay", type: "coast", size: 2, pop: 147, main: true, level: "north" },
    // Sault Ste. Marie: on the St. Marys River and its canal, between Lakes Superior and Huron.
    { id: "SOO", name: "Sault Ste. Marie", county: "on-algoma", lat: 46.56, lon: -84.35, type: "coast", size: 2, pop: 114, main: true, level: "north" },
    // North Bay: "the Gateway to the North" on Lake Nipissing, in Shield forest, so mountain.
    // Nudged 1.6 km east of the raw point (46.31, -79.46), off the map's Lake Nipissing.
    { id: "NBY", name: "North Bay", county: "on-nipissing", lat: 46.32, lon: -79.44, type: "mountain", size: 2, pop: 85, main: true, level: "north" },
    // Timmins: the gold-mining city of the northeast's boreal forest, so mountain.
    { id: "TMS", name: "Timmins", county: "on-cochrane-timiskaming", lat: 48.47, lon: -81.33, type: "mountain", size: 2, pop: 109, main: true, level: "north" },
    // Huntsville (21,147 people; population centre 6,639): the biggest town on pop. Muskoka's
    // Shield lakes and forest, so mountain.
    { id: "HSV", name: "Huntsville", county: "on-muskoka-parry-sound", lat: 45.31, lon: -79.28, type: "mountain", size: 1, pop: 114, main: true, level: "north" },
    { id: "OWS", name: "Owen Sound", county: "on-grey", lat: 44.57, lon: -80.93, type: "coast", size: 1, pop: 101, main: true, level: "north" },
    // Kenora: on Lake of the Woods in the Shield, so mountain.
    { id: "KNR", name: "Kenora", county: "on-kenora-rainy-river", lat: 49.82, lon: -94.44, type: "mountain", size: 1, pop: 85, main: true, level: "north" },
    // Port Elgin: the main town (9,619) of Saugeen Shores (15,908), the biggest municipality; a
    // Lake Huron beach town.
    { id: "PEG", name: "Port Elgin", county: "on-bruce", lat: 44.44, lon: -81.39, type: "coast", size: 1, pop: 73, main: true, level: "north" },
    { id: "ORV", name: "Orangeville", county: "on-dufferin", lat: 43.92, lon: -80.11, type: "farm", size: 1, pop: 66, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point or townsite (sources in NOTES.md).
  towns: [
    // Peel, York, Durham and Halton: the GTA's other big cities, and Port Perry on Lake Scugog.
    { id: "BMP", name: "Brampton", county: "on-peel", lat: 43.69, lon: -79.76, type: "metro", size: 3 },
    { id: "VGN", name: "Vaughan", county: "on-york", lat: 43.85, lon: -79.54, type: "metro", size: 3 },
    { id: "NWM", name: "Newmarket", county: "on-york", lat: 44.06, lon: -79.46, type: "metro", size: 2 },
    { id: "AJX", name: "Ajax", county: "on-durham", lat: 43.86, lon: -79.04, type: "metro", size: 2 },
    { id: "PPY", name: "Port Perry", county: "on-durham", lat: 44.1, lon: -78.95, type: "farm", size: 1 },
    { id: "BRL", name: "Burlington", county: "on-halton", lat: 43.37, lon: -79.81, type: "metro", size: 2 },
    // Niagara: the Falls (by the river and its gorge, so coast), and Welland on the Welland Canal.
    { id: "NFL", name: "Niagara Falls", county: "on-niagara", lat: 43.06, lon: -79.11, scenic: true, type: "coast", size: 2 },
    { id: "WLD", name: "Welland", county: "on-niagara", lat: 43.0, lon: -79.23, type: "metro", size: 1 },
    // The Southwest: farm towns, two Lake Erie harbours (Port Dover, Port Stanley) and Point Pelee,
    // the southern tip of mainland Canada (its park point).
    { id: "PARI", name: "Paris", county: "on-brant", lat: 43.19, lon: -80.39, type: "farm", size: 1 },
    { id: "CLA", name: "Caledonia", county: "on-haldimand-norfolk", lat: 43.07, lon: -79.95, type: "farm", size: 1 },
    { id: "PDV", name: "Port Dover", county: "on-haldimand-norfolk", lat: 42.79, lon: -80.21, type: "coast", size: 1 },
    { id: "CMB", name: "Cambridge", county: "on-waterloo", lat: 43.4, lon: -80.31, type: "metro", size: 2 },
    { id: "FRG", name: "Fergus", county: "on-wellington", lat: 43.7, lon: -80.38, type: "farm", size: 1 },
    { id: "TLB", name: "Tillsonburg", county: "on-oxford", lat: 42.87, lon: -80.73, type: "farm", size: 1 },
    { id: "STR", name: "Strathroy", county: "on-middlesex", lat: 42.96, lon: -81.62, type: "farm", size: 1 },
    { id: "PST", name: "Port Stanley", county: "on-elgin", lat: 42.67, lon: -81.21, type: "coast", size: 1 },
    { id: "LST", name: "Listowel", county: "on-perth", lat: 43.73, lon: -80.95, type: "farm", size: 1 },
    { id: "EXT", name: "Exeter", county: "on-huron", lat: 43.36, lon: -81.48, type: "farm", size: 1 },
    { id: "PTR", name: "Petrolia", county: "on-lambton", lat: 42.89, lon: -82.14, type: "farm", size: 1 },
    { id: "WLB", name: "Wallaceburg", county: "on-chatham-kent", lat: 42.6, lon: -82.38, type: "farm", size: 1 },
    // Leamington also joins Windsor to Chatham: the straight Windsor–Chatham line crosses Lake St. Clair.
    { id: "LMT", name: "Leamington", county: "on-essex", lat: 42.1, lon: -82.56, type: "farm", size: 1 },
    { id: "PPL", name: "Point Pelee", county: "on-essex", lat: 41.97, lon: -82.52, scenic: true, type: "coast", size: 1 },
    // Eastern Ontario. Sandbanks (the dunes and beaches of Prince Edward County) is nudged 4 km
    // northeast of its park point (43.92, -77.29), which is off the map's shore. Gananoque, the
    // Thousand Islands' boat town, is nudged 1 km north, off the map's Lake Ontario.
    { id: "KAN", name: "Kanata", county: "on-ottawa", lat: 45.33, lon: -75.9, type: "metro", size: 2 },
    { id: "NPN", name: "Napanee", county: "on-frontenac-lennox-and-addington", lat: 44.25, lon: -76.95, type: "farm", size: 1 },
    // Trenton (Quinte West, 46,560): at the mouth of the Trent on the Bay of Quinte.
    { id: "TRT", name: "Trenton", county: "on-hastings-prince-edward", lat: 44.11, lon: -77.58, type: "coast", size: 1 },
    { id: "BNC", name: "Bancroft", county: "on-hastings-prince-edward", lat: 45.06, lon: -77.76, type: "mountain", size: 1 },
    { id: "SBK", name: "Sandbanks", county: "on-hastings-prince-edward", lat: 43.94, lon: -77.25, scenic: true, type: "coast", size: 1 },
    { id: "CMF", name: "Campbellford", county: "on-northumberland", lat: 44.31, lon: -77.8, type: "farm", size: 1 },
    { id: "LKF", name: "Lakefield", county: "on-peterborough", lat: 44.43, lon: -78.27, type: "farm", size: 1 },
    { id: "HLB", name: "Haliburton", county: "on-haliburton-kawartha-lakes", lat: 45.05, lon: -78.51, type: "mountain", size: 1 },
    { id: "BCG", name: "Bobcaygeon", county: "on-haliburton-kawartha-lakes", lat: 44.55, lon: -78.56, type: "farm", size: 1 },
    { id: "GNQ", name: "Gananoque", county: "on-leeds-and-grenville", lat: 44.34, lon: -76.16, scenic: true, type: "coast", size: 1 },
    { id: "KPV", name: "Kemptville", county: "on-leeds-and-grenville", lat: 45.02, lon: -75.64, type: "farm", size: 1 },
    // Smiths Falls: the railway junction of the Rideau (VIA and CP); Perth: the county seat.
    { id: "SFL", name: "Smiths Falls", county: "on-lanark", lat: 44.9, lon: -76.02, type: "farm", size: 1 },
    { id: "PRT", name: "Perth", county: "on-lanark", lat: 44.9, lon: -76.25, type: "farm", size: 1 },
    { id: "ARN", name: "Arnprior", county: "on-renfrew", lat: 45.44, lon: -76.36, type: "farm", size: 1 },
    { id: "DPR", name: "Deep River", county: "on-renfrew", lat: 46.05, lon: -77.42, type: "mountain", size: 1 },
    { id: "HKB", name: "Hawkesbury", county: "on-prescott-and-russell", lat: 45.61, lon: -74.6, type: "farm", size: 1 },
    // Morrisburg: nudged 1 km north, off the map's St. Lawrence line.
    { id: "MRB", name: "Morrisburg", county: "on-stormont-dundas-and-glengarry", lat: 44.91, lon: -75.18, type: "farm", size: 1 },
    { id: "ALX", name: "Alexandria", county: "on-stormont-dundas-and-glengarry", lat: 45.31, lon: -74.63, type: "farm", size: 1 },
    // Georgian Bay and cottage country: Wasaga Beach (the long Georgian Bay beach), Tobermory
    // (the Bruce Peninsula and Fathom Five parks, and the Chi-Cheemaun to Manitoulin) and Algonquin
    // Park (at its Highway 60 locality, not the roadless middle of the park).
    { id: "ORL", name: "Orillia", county: "on-simcoe", lat: 44.6, lon: -79.42, type: "coast", size: 1 },
    { id: "WSG", name: "Wasaga Beach", county: "on-simcoe", lat: 44.5, lon: -80.02, scenic: true, type: "coast", size: 1 },
    { id: "SHB", name: "Shelburne", county: "on-dufferin", lat: 44.08, lon: -80.2, type: "farm", size: 1 },
    { id: "HNV", name: "Hanover", county: "on-grey", lat: 44.15, lon: -81.02, type: "farm", size: 1 },
    { id: "THB", name: "Thornbury", county: "on-grey", lat: 44.56, lon: -80.46, type: "coast", size: 1 },
    { id: "TOB", name: "Tobermory", county: "on-bruce", lat: 45.25, lon: -81.67, scenic: true, type: "coast", size: 1 },
    { id: "WKT", name: "Walkerton", county: "on-bruce", lat: 44.13, lon: -81.15, type: "farm", size: 1 },
    { id: "BRB", name: "Bracebridge", county: "on-muskoka-parry-sound", lat: 45.03, lon: -79.19, type: "mountain", size: 1 },
    { id: "PSD", name: "Parry Sound", county: "on-muskoka-parry-sound", lat: 45.35, lon: -80.04, type: "coast", size: 1 },
    { id: "ALG", name: "Algonquin Park", county: "on-nipissing", lat: 45.55, lon: -78.6, scenic: true, type: "mountain", size: 1 },
    { id: "SGF", name: "Sturgeon Falls", county: "on-nipissing", lat: 46.37, lon: -79.93, type: "farm", size: 1 },
    // The Sudbury region: Espanola, Little Current (Manitoulin Island's town, at the swing bridge)
    // and Killarney Provincial Park (its park point; the white quartzite La Cloche hills).
    { id: "ESP", name: "Espanola", county: "on-greater-sudbury-manitoulin-sudbury", lat: 46.24, lon: -81.76, type: "mountain", size: 1 },
    { id: "LCU", name: "Little Current", county: "on-greater-sudbury-manitoulin-sudbury", lat: 45.98, lon: -81.93, type: "coast", size: 1 },
    { id: "KIL", name: "Killarney", county: "on-greater-sudbury-manitoulin-sudbury", lat: 46.1, lon: -81.38, scenic: true, type: "mountain", size: 1 },
    // Algoma: Elliot Lake; Agawa Canyon, the Algoma Central Railway's tour-train stop (the GNDB
    // "Canyon" locality); Wawa.
    { id: "ELL", name: "Elliot Lake", county: "on-algoma", lat: 46.38, lon: -82.66, type: "mountain", size: 1 },
    { id: "AGC", name: "Agawa Canyon", county: "on-algoma", lat: 47.43, lon: -84.48, scenic: true, type: "mountain", size: 1 },
    { id: "WAW", name: "Wawa", county: "on-algoma", lat: 47.99, lon: -84.77, type: "mountain", size: 1 },
    // Cochrane and Timiskaming: the farms of the Little Clay Belt, Kapuskasing, and Moosonee on
    // James Bay at the end of the Polar Bear Express (no road reaches it).
    { id: "TMK", name: "Temiskaming Shores", county: "on-cochrane-timiskaming", lat: 47.49, lon: -79.72, type: "farm", size: 1 },
    { id: "KAP", name: "Kapuskasing", county: "on-cochrane-timiskaming", lat: 49.42, lon: -82.42, type: "mountain", size: 1 },
    { id: "MSN", name: "Moosonee", county: "on-cochrane-timiskaming", lat: 51.33, lon: -80.72, scenic: true, type: "coast", size: 1 },
    // Thunder Bay: Kakabeka Falls; Nipigon; Geraldton (Greenstone) and Marathon. Straight lines
    // along the north shore (Nipigon–Marathon) cross the map's Lake Superior, so Geraldton, on
    // Highway 11 and the CN line, joins Thunder Bay to Marathon and Algoma inland.
    { id: "KKB", name: "Kakabeka Falls", county: "on-thunder-bay", lat: 48.4, lon: -89.62, scenic: true, type: "mountain", size: 1 },
    { id: "NPG", name: "Nipigon", county: "on-thunder-bay", lat: 48.98, lon: -88.33, type: "mountain", size: 1 },
    { id: "GRT", name: "Geraldton", county: "on-thunder-bay", lat: 49.72, lon: -86.95, type: "mountain", size: 1 },
    { id: "MAR", name: "Marathon", county: "on-thunder-bay", lat: 48.72, lon: -86.38, type: "coast", size: 1 },
    // Kenora and Rainy River: Atikokan (Highway 11 and the CN line, Quetico's gateway), Dryden and
    // Sioux Lookout. Fort Frances is left out: Rainy Lake and Lake of the Woods cut every line
    // from it in Tough (see NOTES.md).
    { id: "ATK", name: "Atikokan", county: "on-kenora-rainy-river", lat: 48.76, lon: -91.62, type: "mountain", size: 1 },
    { id: "DRY", name: "Dryden", county: "on-kenora-rainy-river", lat: 49.78, lon: -92.77, type: "mountain", size: 1 },
    { id: "SXL", name: "Sioux Lookout", county: "on-kenora-rainy-river", lat: 50.09, lon: -92.0, type: "mountain", size: 1 },
  ],
  levels: [
    {
      name: "Toronto & the GTA",
      areas: ["gta"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "connect", a: "MSS", b: "OSH" },
      ],
    },
    {
      name: "Niagara & the Southwest",
      areas: ["southwest"],
      goals: [
        { kind: "totalPassengers", target: 150 },
        { kind: "connect", a: "TOR", b: "LDN" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "Eastern Ontario & Ottawa",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 300 },
        { kind: "connect", a: "TOR", b: "OTT" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Georgian Bay & the North",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "TOR", b: "SUD" },
        { kind: "cargo", cargo: "containers", target: 20 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Ontario has no mountains on the
  // terrain grid (a few hill cells only), so no link needs one.
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water or a river crossed near one uses the real
  // bridge (cheaper); anywhere else you build a new one, if the water is narrow enough.
  // The terrain's lakes include the Great Lakes (Natural Earth outlines, which also cover
  // Manitoulin Island), so crossing them needs one of these.
  bridges: [
    // The MS Chi-Cheemaun, Tobermory–South Baymouth across the Main Channel (May to October). Its
    // points stay over 4 miles from Tobermory, so that lines from Tobermory east across Georgian
    // Bay or down the Lake Huron side of the Bruce Peninsula don't count as using it.
    ["Tobermory–South Baymouth ferry (Tobermory side)", 45.33, -81.75],
    ["Tobermory–South Baymouth ferry (mid-channel)", 45.41, -81.84],
    ["Tobermory–South Baymouth ferry (South Baymouth side)", 45.49, -81.92],
    // Highway 6 north from Little Current: the swing bridge, then La Cloche Island to the mainland.
    // The point stands on that route 7 miles north of the town (the whole island counts as lake
    // on the map), so only lines that follow Highway 6 north use it.
    ["Little Current Swing Bridge (Highway 6)", 46.07, -81.87],
    // The Bay of Quinte around Prince Edward County: the Bay Bridge (Norris Whitney Bridge) at
    // Belleville, the Murray Canal bridge at Carrying Place (Highway 33 to Trenton) and the
    // Glenora Ferry (Highway 33 to Adolphustown).
    ["Bay Bridge (Belleville)", 44.15, -77.39],
    ["Murray Canal bridge (Carrying Place)", 44.06, -77.59],
    ["Glenora–Adolphustown ferry (Glenora)", 44.04, -77.05],
    ["Glenora–Adolphustown ferry (Adolphustown)", 44.05, -77.03],
    // Rivers, where the links cross the map's rivers
    ["Lorne Bridge (Brantford)", 43.14, -80.27], // the Grand
    ["Grand River bridge (Paris)", 43.19, -80.38],
    ["Caledonia Bridge", 43.08, -79.94], // the Grand, Argyle Street
    ["Grand River bridge (Cambridge)", 43.39, -80.34],
    ["West Montrose Covered Bridge", 43.59, -80.48], // the Grand, Ontario's last covered bridge
    ["Thames River bridge (London)", 42.97, -81.24],
    ["Thames River bridge (Woodstock)", 43.14, -80.76],
    ["Thames River bridge (Chatham)", 42.4, -82.19],
    ["Billings Bridge (Ottawa)", 45.39, -75.68], // the Rideau
    ["Rideau River bridge (Smiths Falls)", 44.9, -76.02],
    ["Mississippi River bridge (Carleton Place)", 45.14, -76.14],
    ["Trent River bridge (Trenton)", 44.1, -77.58],
    ["Trent River bridge (Campbellford)", 44.31, -77.8],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    // The boreal forest and the Canadian Shield: the whole north, cottage country (Muskoka, Parry
    // Sound, Haliburton) and Renfrew's Madawaska Highlands. The terrain grid has almost no hills
    // here, so "wooded" would show no trees: these are forest (Manitoba did the same).
    forest: [
      "on-kenora-rainy-river",
      "on-thunder-bay",
      "on-cochrane-timiskaming",
      "on-algoma",
      "on-greater-sudbury-manitoulin-sudbury",
      "on-nipissing",
      "on-muskoka-parry-sound",
      "on-haliburton-kawartha-lakes",
      "on-renfrew",
    ],
    // Farms with Shield or escarpment country in part: the Frontenac Arch and the southern edge of
    // the Shield (Hastings, Frontenac, Peterborough, Lanark, Leeds), the Niagara Escarpment and the
    // Bruce Peninsula (Grey, Bruce) and northern Simcoe. Trees show only on their few hills.
    wooded: ["on-hastings-prince-edward", "on-frontenac-lennox-and-addington", "on-peterborough", "on-lanark", "on-leeds-and-grenville", "on-grey", "on-bruce", "on-simcoe"],
  },
});
