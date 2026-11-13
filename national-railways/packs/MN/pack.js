// National Railways pack: Minnesota.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/MN/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/MN/raw.
NR.addPack({
  code: "MN",
  name: "Minnesota",
  // A game that starts here begins owning these counties (Minneapolis, St. Paul and Chaska). St.
  // Paul and Carver both touch Hennepin. Chaska is farm (Carver County is mostly farmland west of
  // its suburbs), so the first track (Minneapolis–Chaska, the nearest pair of different types)
  // has riders; Minneapolis–St. Paul joins two metros, which carries nobody in "A type of place".
  start: ["mn-hennepin", "mn-ramsey", "mn-carver"],
  // Main stations: one per county region, at its biggest place, except Buffalo, Princeton,
  // Chatfield, St. Peter, Crookston and Wheaton (explained below). id = the short code shown on
  // passengers. county = region id in this folder's map.js. pop = region population in thousands
  // (2020 census). size = how busy (1 to 5). level = which level unlocks it in Levels mode. port,
  // airport = their names, if it has one. scenic = a place tourists travel to. Points are the
  // Census points, except Minneapolis, St. Paul and Shakopee (at their downtowns; NOTES.md).
  stations: [
    // Level 1: Minneapolis–St. Paul
    // Minneapolis: the core of a 3.7-million metro, size 5 (Hennepin's 1,282k is nearly twice
    // Denver County's 716k, size 4; Portland, 815k, is 5). Downtown, 1 mi north of the Census
    // point. Minneapolis–Saint Paul International is in Hennepin County, between the two cities.
    { id: "MPLS", name: "Minneapolis", county: "mn-hennepin", lat: 44.98, lon: -93.27, airport: "Minneapolis–Saint Paul International", type: "metro", size: 5, pop: 1282, main: true, level: "metro" },
    // St. Paul: the capital, size 4 by its 552k (as Omaha and Spokane). Downtown, by the river.
    { id: "SPL", name: "St. Paul", county: "mn-ramsey", lat: 44.95, lon: -93.09, type: "metro", size: 4, pop: 552, main: true, level: "metro" },
    // Lakeville: Dakota County's biggest city (Eagan, a town here, is a close second). Size 3 by
    // its 440k (as Thornton and Aurora in Colorado).
    { id: "LKVL", name: "Lakeville", county: "mn-dakota", lat: 44.68, lon: -93.25, type: "metro", size: 3, pop: 440, main: true, level: "metro" },
    { id: "BLNE", name: "Blaine", county: "mn-anoka", lat: 45.17, lon: -93.21, type: "metro", size: 3, pop: 364, main: true, level: "metro" },
    { id: "WDBY", name: "Woodbury", county: "mn-washington", lat: 44.91, lon: -92.92, type: "metro", size: 2, pop: 268, main: true, level: "metro" },
    // Shakopee: downtown on the Minnesota River; the Census point is 3 mi southeast of it.
    { id: "SHK", name: "Shakopee", county: "mn-scott", lat: 44.8, lon: -93.53, type: "metro", size: 2, pop: 151, main: true, level: "metro" },
    // Chaska: typed by the rest of Carver County, farms and small towns (Waconia, Norwood Young
    // America, Cologne), so farm, as South Dakota's Harrisburg and Nebraska's Blair.
    { id: "CSK", name: "Chaska", county: "mn-carver", lat: 44.82, lon: -93.61, type: "farm", size: 2, pop: 107, main: true, level: "metro" },
    // Buffalo, not Otsego (19,966, the biggest; a town here): Buffalo (16,180) is the county seat in
    // the middle of Wright County. Otsego is a spread-out city at its corner, 5 mi across the
    // Mississippi from Elk River. Wright is farms and lakes beyond I-94, so farm.
    { id: "BUFL", name: "Buffalo", county: "mn-wright", lat: 45.18, lon: -93.86, type: "farm", size: 2, pop: 141, main: true, level: "metro" },
    // Elk River: where US-10 and US-169 meet the Mississippi; Sherburne County's farms and sand
    // plains (the Sherburne refuge) beyond it, so farm.
    { id: "ELKR", name: "Elk River", county: "mn-sherburne", lat: 45.33, lon: -93.57, type: "farm", size: 2, pop: 97, main: true, level: "metro" },
    { id: "NBRN", name: "North Branch", county: "mn-chisago", lat: 45.51, lon: -92.94, type: "farm", size: 1, pop: 57, main: true, level: "metro" },
    { id: "CMBG", name: "Cambridge", county: "mn-isanti-kanabec", lat: 45.56, lon: -93.23, type: "farm", size: 1, pop: 57, main: true, level: "metro" },
    // Level 2: Rochester, Mankato and the south
    // Rochester: the Mayo Clinic (downtown), which draws visitors from around the world, so scenic.
    // Size 2 by its 163k (as Billings and Fargo).
    { id: "ROCH", name: "Rochester", county: "mn-olmsted", lat: 44.01, lon: -92.48, scenic: true, type: "metro", size: 2, pop: 163, main: true, level: "south" },
    // Faribault: on I-35; Northfield (Carleton and St. Olaf) is a town here.
    { id: "FBT", name: "Faribault", county: "mn-rice", lat: 44.3, lon: -93.28, type: "farm", size: 2, pop: 67, main: true, level: "south" },
    // Red Wing: on the Mississippi at the head of Lake Pepin; US-61 and the Empire Builder.
    { id: "RWG", name: "Red Wing", county: "mn-goodhue-wabasha", lat: 44.58, lon: -92.61, type: "farm", size: 2, pop: 69, main: true, level: "south" },
    // Winona: the Mississippi's bluff country (Winona State University), on the Empire Builder.
    { id: "WNA", name: "Winona", county: "mn-winona", lat: 44.05, lon: -91.67, type: "farm", size: 1, pop: 50, main: true, level: "south" },
    // Chatfield, not La Crescent (5,337, the biggest; a town here): La Crescent faces La Crosse,
    // Wisconsin, across the Mississippi, which will have its own station. Chatfield (3,000) is the
    // next biggest, on the Root River's North Branch, 18 mi from Rochester.
    { id: "CHTF", name: "Chatfield", county: "mn-fillmore-houston", lat: 43.84, lon: -92.18, type: "farm", size: 1, pop: 40, main: true, level: "south" },
    // Austin: Hormel's town (the Spam Museum), on I-90.
    { id: "AUST", name: "Austin", county: "mn-mower", lat: 43.67, lon: -92.98, type: "farm", size: 1, pop: 40, main: true, level: "south" },
    { id: "OWA", name: "Owatonna", county: "mn-dodge-steele-waseca", lat: 44.09, lon: -93.23, type: "farm", size: 2, pop: 77, main: true, level: "south" },
    // Albert Lea: where I-35 meets I-90.
    { id: "ALEA", name: "Albert Lea", county: "mn-faribault-freeborn", lat: 43.65, lon: -93.36, type: "farm", size: 1, pop: 45, main: true, level: "south" },
    // Mankato: Minnesota State University, on the Minnesota River's great bend; with North Mankato
    // a city of about 60,000, so metro, size 2 by its 69k (as Minot and Grand Forks).
    { id: "MKT", name: "Mankato", county: "mn-blue-earth", lat: 44.17, lon: -93.98, type: "metro", size: 2, pop: 69, main: true, level: "south" },
    // St. Peter, not North Mankato (14,276, the biggest): North Mankato faces Mankato across the
    // river, 3 mi from its station. St. Peter (12,068; Gustavus Adolphus College) is on US-169,
    // 11 mi down the river.
    { id: "SPTR", name: "St. Peter", county: "mn-le-sueur-nicollet-sibley", lat: 44.33, lon: -93.97, type: "farm", size: 2, pop: 78, main: true, level: "south" },
    // New Ulm: the German town on the Minnesota River and US-14.
    { id: "NULM", name: "New Ulm", county: "mn-brown-redwood", lat: 44.31, lon: -94.47, type: "farm", size: 1, pop: 41, main: true, level: "south" },
    // Windom (4,807), by a hair over St. James (4,796, a town here): on US-71 and the Des Moines River.
    { id: "WDM", name: "Windom", county: "mn-cottonwood-watonwan", lat: 43.87, lon: -95.12, type: "farm", size: 1, pop: 23, main: true, level: "south" },
    { id: "FMNT", name: "Fairmont", county: "mn-jackson-martin", lat: 43.64, lon: -94.46, type: "farm", size: 1, pop: 30, main: true, level: "south" },
    { id: "WTG", name: "Worthington", county: "mn-nobles-rock", lat: 43.63, lon: -95.6, type: "farm", size: 1, pop: 32, main: true, level: "south" },
    // Pipestone: Pipestone National Monument (the sacred red-stone quarries) is at the town's north
    // edge, so scenic.
    { id: "PIP", name: "Pipestone", county: "mn-murray-pipestone", lat: 44.0, lon: -96.31, scenic: true, type: "farm", size: 1, pop: 18, main: true, level: "south" },
    // Marshall: Southwest Minnesota State University and Schwan's, the southwest's market town.
    { id: "MRSL", name: "Marshall", county: "mn-lincoln-lyon", lat: 44.45, lon: -95.79, type: "farm", size: 1, pop: 31, main: true, level: "south" },
    // Level 3: St. Cloud, the prairie and the Red River
    // St. Cloud: on the Mississippi and I-94, with St. Cloud State, size 2 by its 158k. At the
    // Census point, 2.3 mi south-southwest of downtown on the river (NOTES.md).
    { id: "STC", name: "St. Cloud", county: "mn-stearns", lat: 45.53, lon: -94.17, type: "metro", size: 2, pop: 158, main: true, level: "west" },
    { id: "HTCH", name: "Hutchinson", county: "mn-mcleod-meeker", lat: 44.89, lon: -94.38, type: "farm", size: 1, pop: 60, main: true, level: "west" },
    { id: "WLMR", name: "Willmar", county: "mn-kandiyohi-renville", lat: 45.12, lon: -95.06, type: "farm", size: 1, pop: 58, main: true, level: "west" },
    // Montevideo: where the Chippewa River meets the Minnesota, below Lac qui Parle.
    { id: "MVDO", name: "Montevideo", county: "mn-chippewa-lac-qui-parle-yellow-medicine", lat: 44.95, lon: -95.72, type: "farm", size: 1, pop: 29, main: true, level: "west" },
    { id: "BNSN", name: "Benson", county: "mn-big-stone-swift", lat: 45.32, lon: -95.61, type: "farm", size: 1, pop: 15, main: true, level: "west" },
    // Morris: the University of Minnesota's Morris campus.
    { id: "MORR", name: "Morris", county: "mn-grant-stevens", lat: 45.59, lon: -95.91, type: "farm", size: 1, pop: 16, main: true, level: "west" },
    // Wheaton, not Breckenridge (3,440, the biggest): Breckenridge faces Wahpeton, North Dakota's
    // station, across the Red River, 1.3 mi away. Wheaton (1,458) is Traverse County's seat, east of
    // Lake Traverse.
    { id: "WHTN", name: "Wheaton", county: "mn-traverse-wilkin", lat: 45.81, lon: -96.5, type: "farm", size: 1, pop: 10, main: true, level: "west" },
    // Alexandria: the lakes town on I-94 (Lake Le Homme Dieu, Lake Carlos).
    { id: "ALEX", name: "Alexandria", county: "mn-douglas-pope", lat: 45.88, lon: -95.38, type: "farm", size: 1, pop: 50, main: true, level: "west" },
    { id: "FFM", name: "Fergus Falls", county: "mn-otter-tail", lat: 46.28, lon: -96.08, type: "farm", size: 1, pop: 60, main: true, level: "west" },
    // Moorhead: Fargo's twin across the Red River, with the valley's farms around it (Barnesville,
    // Hawley), so farm (Fargo–Moorhead has riders), size 2 by its 65k.
    { id: "MHD", name: "Moorhead", county: "mn-clay", lat: 46.86, lon: -96.74, type: "farm", size: 2, pop: 65, main: true, level: "west" },
    // Little Falls: on the Mississippi, US-10 and the BNSF main line (Charles Lindbergh's boyhood home).
    { id: "LTF", name: "Little Falls", county: "mn-morrison-todd-wadena", lat: 45.99, lon: -94.36, type: "farm", size: 2, pop: 73, main: true, level: "west" },
    // Princeton, not Sauk Rapids (13,857, the biggest): Sauk Rapids is St. Cloud's twin across the
    // Mississippi, 4 mi from its station. Princeton (5,002) is the next biggest, on US-169, the
    // town of Mille Lacs County's farm country.
    { id: "PRNC", name: "Princeton", county: "mn-benton-mille-lacs", lat: 45.57, lon: -93.59, type: "farm", size: 2, pop: 68, main: true, level: "west" },
    // Level 4: the North Woods and Lake Superior
    // Duluth: the Port of Duluth-Superior at the head of Lake Superior, the Great Lakes' westernmost
    // port, so coast, size 2 by its 200k. At the Census point, 1.8 mi west-southwest of downtown:
    // the map's Lake Superior covers downtown and Canal Park.
    { id: "DUL", name: "Duluth", county: "mn-st-louis", lat: 46.77, lon: -92.13, port: "Port of Duluth-Superior", type: "coast", size: 2, pop: 200, main: true, level: "north" },
    // Two Harbors: on the North Shore (Agate Bay's ore docks), so coast.
    { id: "TWOH", name: "Two Harbors", county: "mn-cook-lake", lat: 47.03, lon: -91.68, type: "coast", size: 1, pop: 17, main: true, level: "north" },
    // The North Woods are mountain, the game's type for forested country (as Kenora in Ontario).
    // Cloquet: the paper mill town on the St. Louis River.
    { id: "CLQ", name: "Cloquet", county: "mn-carlton-pine", lat: 46.73, lon: -92.5, type: "mountain", size: 2, pop: 65, main: true, level: "north" },
    // Brainerd: the Brainerd Lakes' town, in the pines on the Mississippi.
    { id: "BRND", name: "Brainerd", county: "mn-crow-wing", lat: 46.36, lon: -94.2, type: "mountain", size: 2, pop: 66, main: true, level: "north" },
    { id: "GRPD", name: "Grand Rapids", county: "mn-aitkin-itasca", lat: 47.24, lon: -93.53, type: "mountain", size: 1, pop: 61, main: true, level: "north" },
    { id: "PKRP", name: "Park Rapids", county: "mn-cass-hubbard", lat: 46.92, lon: -95.06, type: "mountain", size: 1, pop: 51, main: true, level: "north" },
    { id: "BJI", name: "Bemidji", county: "mn-beltrami-clearwater", lat: 47.49, lon: -94.88, type: "mountain", size: 1, pop: 55, main: true, level: "north" },
    // Detroit Lakes: lakes and resorts, with the Red River valley's farms to the west, so farm.
    { id: "DTL", name: "Detroit Lakes", county: "mn-becker-mahnomen", lat: 46.81, lon: -95.85, type: "farm", size: 1, pop: 41, main: true, level: "north" },
    // Crookston, not East Grand Forks (9,176, the biggest): East Grand Forks faces Grand Forks,
    // North Dakota's station, across the Red River. Crookston (7,486) is Polk County's seat, on
    // US-2 and the Red Lake River (the University of Minnesota's Crookston campus).
    { id: "CKN", name: "Crookston", county: "mn-norman-polk", lat: 47.77, lon: -96.61, type: "farm", size: 1, pop: 38, main: true, level: "north" },
    { id: "TRF", name: "Thief River Falls", county: "mn-marshall-pennington-red-lake", lat: 48.11, lon: -96.18, type: "farm", size: 1, pop: 27, main: true, level: "north" },
    { id: "RSAU", name: "Roseau", county: "mn-kittson-roseau", lat: 48.84, lon: -95.76, type: "farm", size: 1, pop: 20, main: true, level: "north" },
    // International Falls: on the Rainy River across from Fort Frances, Ontario (the paper mill).
    { id: "IFLS", name: "International Falls", county: "mn-koochiching-lake-of-the-woods", lat: 48.59, lon: -93.41, type: "mountain", size: 1, pop: 16, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor center (sources in NOTES.md).
  // Left out: East Grand Forks, Breckenridge, North Mankato and Sauk Rapids, each a twin across a
  // river from another region's or state's station (NOTES.md).
  towns: [
    // Minneapolis–St. Paul
    { id: "BLMN", name: "Bloomington", county: "mn-hennepin", lat: 44.83, lon: -93.32, type: "metro", size: 2 },
    { id: "BKPK", name: "Brooklyn Park", county: "mn-hennepin", lat: 45.11, lon: -93.35, type: "metro", size: 2 },
    // Minnehaha Falls: the waterfall in Minnehaha Regional Park, above the Mississippi.
    { id: "MNHF", name: "Minnehaha Falls", county: "mn-hennepin", lat: 44.92, lon: -93.21, scenic: true, type: "metro", size: 1 },
    { id: "RSVL", name: "Roseville", county: "mn-ramsey", lat: 45.02, lon: -93.15, type: "metro", size: 1 },
    { id: "EAGN", name: "Eagan", county: "mn-dakota", lat: 44.82, lon: -93.16, type: "metro", size: 2 },
    // Hastings: on the Mississippi just above the St. Croix's mouth, with Dakota County's farms
    // to the south.
    { id: "HSTG", name: "Hastings", county: "mn-dakota", lat: 44.73, lon: -92.85, type: "farm", size: 1 },
    { id: "CNRP", name: "Coon Rapids", county: "mn-anoka", lat: 45.18, lon: -93.31, type: "metro", size: 2 },
    // Stillwater: on the St. Croix, toward Wisconsin.
    { id: "STWR", name: "Stillwater", county: "mn-washington", lat: 45.06, lon: -92.83, type: "metro", size: 1 },
    { id: "CTGV", name: "Cottage Grove", county: "mn-washington", lat: 44.81, lon: -92.91, type: "metro", size: 1 },
    { id: "NPRG", name: "New Prague", county: "mn-scott", lat: 44.55, lon: -93.58, type: "farm", size: 1 },
    { id: "WCNA", name: "Waconia", county: "mn-carver", lat: 44.84, lon: -93.79, type: "farm", size: 1 },
    { id: "MNTC", name: "Monticello", county: "mn-wright", lat: 45.3, lon: -93.8, type: "farm", size: 1 },
    { id: "OTSG", name: "Otsego", county: "mn-wright", lat: 45.26, lon: -93.62, type: "metro", size: 1 },
    { id: "ZMMR", name: "Zimmerman", county: "mn-sherburne", lat: 45.44, lon: -93.6, type: "farm", size: 1 },
    { id: "LDSM", name: "Lindstrom", county: "mn-chisago", lat: 45.39, lon: -92.84, type: "farm", size: 1 },
    { id: "MORM", name: "Mora", county: "mn-isanti-kanabec", lat: 45.88, lon: -93.29, type: "farm", size: 1 },
    // Rochester, Mankato and the south
    { id: "STWV", name: "Stewartville", county: "mn-olmsted", lat: 43.86, lon: -92.49, type: "farm", size: 1 },
    { id: "NFLD", name: "Northfield", county: "mn-rice", lat: 44.46, lon: -93.17, type: "farm", size: 1 },
    // Lake City: on Lake Pepin, the Mississippi's widest stretch (where water skiing was invented).
    { id: "LKCY", name: "Lake City", county: "mn-goodhue-wabasha", lat: 44.45, lon: -92.28, scenic: true, type: "farm", size: 1 },
    { id: "CNFL", name: "Cannon Falls", county: "mn-goodhue-wabasha", lat: 44.52, lon: -92.89, type: "farm", size: 1 },
    { id: "WBSH", name: "Wabasha", county: "mn-goodhue-wabasha", lat: 44.37, lon: -92.05, type: "farm", size: 1 },
    { id: "STCH", name: "St. Charles", county: "mn-winona", lat: 43.97, lon: -92.06, type: "farm", size: 1 },
    // La Crescent: across the Mississippi from La Crosse, Wisconsin (US-14/61).
    { id: "LCRS", name: "La Crescent", county: "mn-fillmore-houston", lat: 43.83, lon: -91.31, type: "farm", size: 1 },
    { id: "CLDN", name: "Caledonia", county: "mn-fillmore-houston", lat: 43.63, lon: -91.5, type: "farm", size: 1 },
    { id: "GRMD", name: "Grand Meadow", county: "mn-mower", lat: 43.71, lon: -92.57, type: "farm", size: 1 },
    { id: "WSCA", name: "Waseca", county: "mn-dodge-steele-waseca", lat: 44.08, lon: -93.5, type: "farm", size: 1 },
    { id: "KSSN", name: "Kasson", county: "mn-dodge-steele-waseca", lat: 44.03, lon: -92.75, type: "farm", size: 1 },
    // Blue Earth: the town is in Faribault County (Blue Earth County is the Mankato region).
    { id: "BLER", name: "Blue Earth", county: "mn-faribault-freeborn", lat: 43.64, lon: -94.1, type: "farm", size: 1 },
    { id: "WELS", name: "Wells", county: "mn-faribault-freeborn", lat: 43.74, lon: -93.73, type: "farm", size: 1 },
    { id: "LKCR", name: "Lake Crystal", county: "mn-blue-earth", lat: 44.11, lon: -94.22, type: "farm", size: 1 },
    { id: "LSUR", name: "Le Sueur", county: "mn-le-sueur-nicollet-sibley", lat: 44.47, lon: -93.9, type: "farm", size: 1 },
    { id: "GYLD", name: "Gaylord", county: "mn-le-sueur-nicollet-sibley", lat: 44.56, lon: -94.21, type: "farm", size: 1 },
    { id: "RDWF", name: "Redwood Falls", county: "mn-brown-redwood", lat: 44.55, lon: -95.1, type: "farm", size: 1 },
    // Walnut Grove: Laura Ingalls Wilder's Plum Creek ("On the Banks of Plum Creek", and the TV
    // series' Little House on the Prairie), with her museum; scenic, as De Smet in South Dakota.
    { id: "WLNG", name: "Walnut Grove", county: "mn-brown-redwood", lat: 44.23, lon: -95.47, scenic: true, type: "farm", size: 1 },
    { id: "STJM", name: "St. James", county: "mn-cottonwood-watonwan", lat: 43.98, lon: -94.63, type: "farm", size: 1 },
    // Jackson: the town is in Jackson County (the Fairmont region), on I-90 and the Des Moines.
    { id: "JCKS", name: "Jackson", county: "mn-jackson-martin", lat: 43.63, lon: -94.99, type: "farm", size: 1 },
    // Luverne: on I-90 toward Sioux Falls (Blue Mounds State Park to the north).
    { id: "LUVN", name: "Luverne", county: "mn-nobles-rock", lat: 43.65, lon: -96.22, type: "farm", size: 1 },
    { id: "SLAY", name: "Slayton", county: "mn-murray-pipestone", lat: 43.99, lon: -95.76, type: "farm", size: 1 },
    { id: "TRCY", name: "Tracy", county: "mn-lincoln-lyon", lat: 44.24, lon: -95.62, type: "farm", size: 1 },
    // Tyler: on US-14 toward Brookings, South Dakota (Lincoln County).
    { id: "TYLM", name: "Tyler", county: "mn-lincoln-lyon", lat: 44.28, lon: -96.14, type: "farm", size: 1 },
    // St. Cloud, the prairie and the Red River
    { id: "SRTL", name: "Sartell", county: "mn-stearns", lat: 45.62, lon: -94.21, type: "metro", size: 1 },
    { id: "SKCN", name: "Sauk Centre", county: "mn-stearns", lat: 45.74, lon: -94.95, type: "farm", size: 1 },
    { id: "LTCH", name: "Litchfield", county: "mn-mcleod-meeker", lat: 45.12, lon: -94.53, type: "farm", size: 1 },
    { id: "GLNC", name: "Glencoe", county: "mn-mcleod-meeker", lat: 44.77, lon: -94.15, type: "farm", size: 1 },
    { id: "OLIV", name: "Olivia", county: "mn-kandiyohi-renville", lat: 44.78, lon: -95.0, type: "farm", size: 1 },
    { id: "GRFL", name: "Granite Falls", county: "mn-chippewa-lac-qui-parle-yellow-medicine", lat: 44.81, lon: -95.54, type: "farm", size: 1 },
    { id: "MDIS", name: "Madison", county: "mn-chippewa-lac-qui-parle-yellow-medicine", lat: 45.01, lon: -96.19, type: "farm", size: 1 },
    // Ortonville: at the foot of Big Stone Lake, on US-12 to Milbank (South Dakota's Big Stone
    // City, a town there, is across the lake's outlet).
    { id: "ORTV", name: "Ortonville", county: "mn-big-stone-swift", lat: 45.3, lon: -96.44, type: "farm", size: 1 },
    { id: "ELBL", name: "Elbow Lake", county: "mn-grant-stevens", lat: 45.99, lon: -95.98, type: "farm", size: 1 },
    // Browns Valley: on the low divide between Lake Traverse (the Red River, to Hudson Bay) and Big
    // Stone Lake (the Minnesota, to the Gulf of Mexico).
    { id: "BRVY", name: "Browns Valley", county: "mn-traverse-wilkin", lat: 45.59, lon: -96.83, type: "farm", size: 1 },
    // Rothsay: on I-94 between Fergus Falls and Moorhead (Wilkin County). Half a mile west of the
    // Census point, which sits on the Otter Tail County line.
    { id: "RTHS", name: "Rothsay", county: "mn-traverse-wilkin", lat: 46.47, lon: -96.29, type: "farm", size: 1 },
    { id: "GLWD", name: "Glenwood", county: "mn-douglas-pope", lat: 45.66, lon: -95.39, type: "farm", size: 1 },
    { id: "PRHM", name: "Perham", county: "mn-otter-tail", lat: 46.6, lon: -95.58, type: "farm", size: 1 },
    { id: "PLRP", name: "Pelican Rapids", county: "mn-otter-tail", lat: 46.57, lon: -96.09, type: "farm", size: 1 },
    { id: "BRNV", name: "Barnesville", county: "mn-clay", lat: 46.65, lon: -96.42, type: "farm", size: 1 },
    { id: "HWLY", name: "Hawley", county: "mn-clay", lat: 46.87, lon: -96.32, type: "farm", size: 1 },
    // Wadena: the town is in Wadena County (the Little Falls region), on US-10 and US-71.
    { id: "WDNA", name: "Wadena", county: "mn-morrison-todd-wadena", lat: 46.45, lon: -95.13, type: "farm", size: 1 },
    { id: "LGPR", name: "Long Prairie", county: "mn-morrison-todd-wadena", lat: 45.97, lon: -94.86, type: "farm", size: 1 },
    { id: "MLCA", name: "Milaca", county: "mn-benton-mille-lacs", lat: 45.76, lon: -93.65, type: "farm", size: 1 },
    // Onamia: on US-169 a few miles south of Mille Lacs Lake.
    { id: "ONMA", name: "Onamia", county: "mn-benton-mille-lacs", lat: 46.07, lon: -93.67, type: "mountain", size: 1 },
    // The North Woods and Lake Superior
    // Hibbing and Virginia: the Mesabi Iron Range's towns (the Hull–Rust open-pit mine at Hibbing).
    { id: "HIB", name: "Hibbing", county: "mn-st-louis", lat: 47.4, lon: -92.95, type: "mountain", size: 1 },
    { id: "VIRG", name: "Virginia", county: "mn-st-louis", lat: 47.53, lon: -92.52, type: "mountain", size: 1 },
    // Ely: the gateway to the Boundary Waters Canoe Area Wilderness.
    { id: "ELYM", name: "Ely", county: "mn-st-louis", lat: 47.91, lon: -91.85, scenic: true, type: "mountain", size: 1 },
    // Orr: on US-53 between Virginia and International Falls, at Pelican Lake.
    { id: "ORRM", name: "Orr", county: "mn-st-louis", lat: 48.06, lon: -92.82, type: "mountain", size: 1 },
    { id: "PNCY", name: "Pine City", county: "mn-carlton-pine", lat: 45.84, lon: -92.97, type: "farm", size: 1 },
    { id: "MSLK", name: "Moose Lake", county: "mn-carlton-pine", lat: 46.45, lon: -92.76, type: "mountain", size: 1 },
    // Crosby: the Cuyuna Range's old mining town, by the Cuyuna lakes.
    { id: "CRBY", name: "Crosby", county: "mn-crow-wing", lat: 46.49, lon: -93.95, type: "mountain", size: 1 },
    { id: "PQTL", name: "Pequot Lakes", county: "mn-crow-wing", lat: 46.59, lon: -94.29, type: "mountain", size: 1 },
    // Aitkin: the town is in Aitkin County (the Grand Rapids region), on the Mississippi and US-169.
    { id: "AITK", name: "Aitkin", county: "mn-aitkin-itasca", lat: 46.53, lon: -93.7, type: "mountain", size: 1 },
    { id: "DRRV", name: "Deer River", county: "mn-aitkin-itasca", lat: 47.34, lon: -93.79, type: "mountain", size: 1 },
    // Walker: on Leech Lake. Cass Lake: the Leech Lake Band of Ojibwe's headquarters, on US-2.
    { id: "WLKR", name: "Walker", county: "mn-cass-hubbard", lat: 47.09, lon: -94.59, type: "mountain", size: 1 },
    { id: "CSLK", name: "Cass Lake", county: "mn-cass-hubbard", lat: 47.38, lon: -94.6, type: "mountain", size: 1 },
    { id: "PNRV", name: "Pine River", county: "mn-cass-hubbard", lat: 46.72, lon: -94.4, type: "mountain", size: 1 },
    // Itasca State Park: the Mississippi's headwaters, where it flows out of Lake Itasca (Clearwater
    // County), at the outlet.
    { id: "ITSC", name: "Itasca State Park", county: "mn-beltrami-clearwater", lat: 47.24, lon: -95.21, scenic: true, type: "mountain", size: 1 },
    { id: "BGLY", name: "Bagley", county: "mn-beltrami-clearwater", lat: 47.52, lon: -95.4, type: "farm", size: 1 },
    { id: "MHNM", name: "Mahnomen", county: "mn-becker-mahnomen", lat: 47.31, lon: -95.97, type: "farm", size: 1 },
    { id: "ADMN", name: "Ada", county: "mn-norman-polk", lat: 47.3, lon: -96.52, type: "farm", size: 1 },
    { id: "FSTN", name: "Fosston", county: "mn-norman-polk", lat: 47.59, lon: -95.75, type: "farm", size: 1 },
    { id: "WRRN", name: "Warren", county: "mn-marshall-pennington-red-lake", lat: 48.19, lon: -96.77, type: "farm", size: 1 },
    // Hallock: on US-75 toward the Noyes–Emerson crossing into Manitoba.
    { id: "HLLK", name: "Hallock", county: "mn-kittson-roseau", lat: 48.77, lon: -96.94, type: "farm", size: 1 },
    // Warroad: on Lake of the Woods, so coast.
    { id: "WRRD", name: "Warroad", county: "mn-kittson-roseau", lat: 48.92, lon: -95.33, type: "coast", size: 1 },
    // Baudette: on the Rainy River near its mouth on Lake of the Woods, across from Rainy River,
    // Ontario.
    { id: "BDTE", name: "Baudette", county: "mn-koochiching-lake-of-the-woods", lat: 48.71, lon: -94.59, type: "mountain", size: 1 },
    // Littlefork: on the road from International Falls south by Big Falls to Bemidji (US-71).
    { id: "LTFK", name: "Littlefork", county: "mn-koochiching-lake-of-the-woods", lat: 48.4, lon: -93.56, type: "mountain", size: 1 },
    // Voyageurs National Park: by the Rainy Lake Visitor Center, east of International Falls, 0.9 mi
    // west of it (the map's Rainy Lake covers the real point).
    { id: "VOYG", name: "Voyageurs National Park", county: "mn-koochiching-lake-of-the-woods", lat: 48.58, lon: -93.18, scenic: true, type: "mountain", size: 1 },
    // The North Shore, along MN-61. Its scenic places stand about a mile inland of the real points,
    // which the map's Lake Superior covers.
    { id: "GSBF", name: "Gooseberry Falls", county: "mn-cook-lake", lat: 47.15, lon: -91.48, scenic: true, type: "coast", size: 1 },
    { id: "SPLT", name: "Split Rock Lighthouse", county: "mn-cook-lake", lat: 47.22, lon: -91.38, scenic: true, type: "coast", size: 1 },
    { id: "SLVB", name: "Silver Bay", county: "mn-cook-lake", lat: 47.29, lon: -91.29, type: "coast", size: 1 },
    // Lutsen: Lutsen Mountains, the ski hills above the shore in the Sawtooth Mountains, so mountain.
    { id: "LTSN", name: "Lutsen", county: "mn-cook-lake", lat: 47.67, lon: -90.69, type: "mountain", size: 1 },
    { id: "GRMR", name: "Grand Marais", county: "mn-cook-lake", lat: 47.76, lon: -90.34, type: "coast", size: 1 },
    // Grand Portage National Monument: the voyageurs' fur-trade depot and the start of the 8.5-mile
    // portage, on Highway 61 toward the Pigeon River crossing to Thunder Bay.
    { id: "GRPT", name: "Grand Portage", county: "mn-cook-lake", lat: 47.97, lon: -89.69, scenic: true, type: "coast", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Minneapolis–St. Paul",
      areas: ["metro"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Rochester, Mankato & the South",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Minneapolis to Rochester, as US-52 runs
        { kind: "connect", a: "MPLS", b: "ROCH" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "St. Cloud, the Prairie & the Red River",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Minneapolis to Moorhead, as I-94 (or US-10 and the Empire Builder) runs
        { kind: "connect", a: "MPLS", b: "MHD" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "The North Woods & Lake Superior",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Minneapolis to Duluth, as I-35 runs
        { kind: "connect", a: "MPLS", b: "DUL" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
  ],
  // City maps, keyed by their main station on the state map. hub = the main station's own stop
  // in the city, where riders change to and from trains. Sources in NOTES.md (City maps).
  metros: {
    MPLS: {
      name: "Minneapolis–St. Paul",
      size: 5,
      stops: [
        { id: "TFS", name: "Target Field Station", lat: 44.983, lon: -93.278, hub: true },
        { id: "UDP", name: "St. Paul Union Depot", lat: 44.948, lon: -93.087 },
        { id: "UMN", name: "University of Minnesota", lat: 44.974, lon: -93.232 },
        { id: "MSP", name: "Airport", lat: 44.882, lon: -93.222 },
        { id: "MOA", name: "Mall of America", lat: 44.854, lon: -93.242 },
        { id: "UPT", name: "Uptown", lat: 44.949, lon: -93.298 },
        { id: "NEM", name: "Northeast Minneapolis", lat: 45.004, lon: -93.256 },
        { id: "USB", name: "U.S. Bank Stadium", lat: 44.974, lon: -93.258 },
        { id: "EDN", name: "Edina", lat: 44.88, lon: -93.32 },
        { id: "AFD", name: "Midway", lat: 44.953, lon: -93.165 },
        { id: "SLP", name: "St. Louis Park", lat: 44.948, lon: -93.347 },
        { id: "MHF", name: "Minnehaha Falls", lat: 44.915, lon: -93.211 },
      ],
    },
  },
  // Real mountain passes and gaps: [name, latitude, longitude]. Minnesota's map has no mountains
  // (22 hill cells, in the southeast's bluffs and the Arrowhead), so no link needs one.
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow
  // enough. Placed on the map's river where it passes the town (sources in NOTES.md).
  bridges: [
    // The Mississippi, from Bemidji down to the Twin Cities
    ["Mississippi River bridge (Bemidji)", 47.48, -94.88],
    ["Mississippi River bridge (Grand Rapids)", 47.22, -93.54],
    ["Mississippi River bridge (Aitkin)", 46.55, -93.72], // US-169, 1.6 mi from the real one
    ["Mississippi River bridge (Brainerd)", 46.36, -94.21],
    ["Mississippi River bridge (Little Falls)", 45.98, -94.37],
    ["Sartell Bridge", 45.61, -94.21],
    ["Mississippi River bridges (St. Cloud)", 45.55, -94.16],
    ["Mississippi River bridge (MN-25, Monticello–Big Lake)", 45.31, -93.79],
    ["MN-101 Mississippi River bridge (Elk River–Otsego)", 45.29, -93.58],
    ["Anoka–Champlin Bridge (US-169)", 45.19, -93.4],
    ["I-694 Mississippi River bridge (Brooklyn Center–Fridley)", 45.07, -93.29],
    // The Twin Cities: the Mississippi and the Minnesota at Fort Snelling
    ["Mississippi River bridges (downtown Minneapolis)", 44.98, -93.25], // Hennepin Avenue, Stone Arch
    ["Ford Parkway Bridge (Minneapolis–St. Paul)", 44.92, -93.21],
    ["Mississippi River bridges (downtown St. Paul)", 44.94, -93.08], // Wabasha Street, Robert Street
    ["Wakota Bridge (I-494)", 44.87, -93.03],
    ["Mendota Bridge (MN-55)", 44.88, -93.19], // the Minnesota at Fort Snelling
    ["I-35W Minnesota River bridge (Bloomington–Burnsville)", 44.82, -93.29], // where I-35W meets the map's river
    // The Minnesota River valley, upstream
    ["Minnesota River bridges (Shakopee)", 44.81, -93.52],
    ["Minnesota River bridge (MN-41, Chaska)", 44.79, -93.6],
    ["Minnesota River bridge (Le Sueur)", 44.47, -93.94],
    ["Minnesota River bridge (St. Peter)", 44.33, -93.96],
    ["Minnesota River bridges (Mankato–North Mankato)", 44.18, -94.02],
    ["Minnesota River bridge (New Ulm)", 44.32, -94.45],
    ["Minnesota River bridge (Morton–Redwood Falls)", 44.57, -95.06], // US-71
    ["Minnesota River bridge (Granite Falls)", 44.81, -95.54],
    ["Minnesota River bridge (Montevideo)", 44.93, -95.73],
    ["Minnesota River bridge (US-12, Ortonville)", 45.3, -96.46], // to Big Stone City, South Dakota
    // The Mississippi below the Twin Cities: the crossings into Wisconsin (when it joins)
    ["Hastings Bridge (US-61)", 44.76, -92.85],
    ["Red Wing Bridge (US-63)", 44.6, -92.51], // on the map's river, 1.9 mi from the real one
    ["Wabasha–Nelson Bridge", 44.39, -92.03],
    ["Winona Bridge", 44.07, -91.64],
    ["Mississippi River bridges (La Crescent–La Crosse)", 43.82, -91.28],
    // The St. Croix (the Wisconsin line)
    ["I-94 St. Croix River bridge (Lakeland–Hudson)", 44.97, -92.77],
    ["St. Croix River bridges (Stillwater)", 45.04, -92.79], // the St. Croix Crossing and the Lift Bridge
    ["St. Croix River bridge (US-8, Taylors Falls)", 45.41, -92.67],
    // The Red River (the North Dakota line): the same points as North Dakota's pack
    ["Red River bridge (Wahpeton–Breckenridge)", 46.27, -96.6],
    ["Red River bridges (Fargo–Moorhead)", 46.88, -96.78], // I-94 and the BNSF
    ["Red River bridges (Grand Forks–East Grand Forks)", 47.93, -97.01], // US-2 and the BNSF
    ["Red River bridge (Pembina)", 48.97, -97.23],
    // The Rainy River (the Ontario line)
    ["Fort Frances–International Falls International Bridge", 48.61, -93.4],
    ["Baudette–Rainy River International Bridge", 48.72, -94.59],
    // Duluth–Superior, over St. Louis Bay to Wisconsin (when it joins)
    ["Blatnik Bridge (I-535, Duluth–Superior)", 46.74, -92.1],
    ["Bong Bridge (US-2, Duluth–Superior)", 46.73, -92.13],
    // The Des Moines River on US-71 and I-90
    ["Des Moines River bridge (Windom)", 43.85, -95.13],
    ["Des Moines River bridge (Jackson)", 43.61, -95.0],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The North Woods: pine, spruce and birch on the Canadian Shield and the lake country, as
    // Ontario's Kenora & Rainy River and Thunder Bay across the line
    forest: [
      "mn-st-louis",
      "mn-cook-lake",
      "mn-koochiching-lake-of-the-woods",
      "mn-aitkin-itasca",
      "mn-beltrami-clearwater",
      "mn-cass-hubbard",
      "mn-crow-wing",
      "mn-carlton-pine",
    ],
    // The Driftless Area's bluffs along the Mississippi: farms on the ridges, woods on the bluffs
    wooded: ["mn-goodhue-wabasha", "mn-winona", "mn-fillmore-houston"],
    // Not listed (farmland and grassland): the prairie, the Red River valley, the Twin Cities, and
    // the farm-and-forest edge (Kittson-Roseau, Becker-Mahnomen, Morrison-Todd-Wadena, Benton-Mille
    // Lacs, Isanti-Kanabec), where farms make up most of the land.
  },
});
