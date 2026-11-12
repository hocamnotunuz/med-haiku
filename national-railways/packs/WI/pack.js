// National Railways pack: Wisconsin.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/WI/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/WI/raw.
NR.addPack({
  code: "WI",
  name: "Wisconsin",
  // A game that starts here begins owning these counties (Milwaukee, Waukesha and Racine). Racine
  // and Waukesha both touch Milwaukee, and touch each other. Racine is coast (a Lake Michigan
  // harbour) and the others metro, so the first track (Milwaukee–Racine, the nearest pair of
  // different types) has riders; Milwaukee–Waukesha joins two metros, which carries nobody in
  // "A type of place".
  start: ["wi-milwaukee", "wi-waukesha", "wi-racine"],
  // Main stations: one per county region, at its biggest place, except Dodgeville and Superior
  // (explained below). id = the short code shown on passengers. county = region id in this
  // folder's map.js. pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. Points are the Census points, except the
  // downtowns of the cities noted (NOTES.md).
  stations: [
    // Level 1: Milwaukee and the Lake Michigan shore
    // Milwaukee: Wisconsin's big city (577,893; the county 939k; size 4 like St. Louis, Denver and Kansas City, the cores of metros of 1.5 to 3 million), on Lake Michigan. At City Hall, downtown, 4 mi south-east of the Census point. Mitchell International is in the county; the Port of Milwaukee is a Great Lakes port.
    { id: "MKE", name: "Milwaukee", county: "wi-milwaukee", lat: 43.04, lon: -87.91, airport: "Milwaukee Mitchell International Airport", port: "Port of Milwaukee", type: "metro", size: 4, pop: 939, main: true, level: "metro" },
    // Waukesha: the biggest of the western suburbs (71,163, ahead of Brookfield and New Berlin); size 3 by the county's 407k (as Lakeville in Minnesota).
    { id: "WKS", name: "Waukesha", county: "wi-waukesha", lat: 43.01, lon: -88.23, type: "metro", size: 3, pop: 407, main: true, level: "metro" },
    // Mequon: Ozaukee's biggest city (25,148); Port Washington, the lake town, is a town here.
    { id: "MEQ", name: "Mequon", county: "wi-ozaukee", lat: 43.21, lon: -88.01, type: "metro", size: 2, pop: 92, main: true, level: "metro" },
    // West Bend: Washington County's seat and biggest city; the county is farms and the Kettle Moraine's kettles, so farm.
    { id: "WBD", name: "West Bend", county: "wi-washington", lat: 43.42, lon: -88.18, type: "farm", size: 2, pop: 137, main: true, level: "metro" },
    // Racine: a Lake Michigan harbour city (SC Johnson, Case), downtown at the lake.
    { id: "RAC", name: "Racine", county: "wi-racine", lat: 42.73, lon: -87.78, type: "coast", size: 2, pop: 198, main: true, level: "metro" },
    // Kenosha: a Lake Michigan harbour city on the Metra line, downtown at the lake; 3 mi south of its Census point's neighbours.
    { id: "KNS", name: "Kenosha", county: "wi-kenosha", lat: 42.58, lon: -87.82, type: "coast", size: 2, pop: 169, main: true, level: "metro" },
    // Whitewater: the biggest place in Walworth (16,141; the university town); Elkhorn and Lake Geneva are towns here.
    { id: "WTW", name: "Whitewater", county: "wi-walworth", lat: 42.84, lon: -88.73, type: "farm", size: 1, pop: 105, main: true, level: "metro" },
    // Watertown: Jefferson County's biggest city (22,935, mostly in Jefferson); on the Rock River.
    { id: "WTTN", name: "Watertown", county: "wi-jefferson", lat: 43.19, lon: -88.73, type: "farm", size: 2, pop: 86, main: true, level: "metro" },
    // Beaver Dam: Dodge County's biggest city (16,710), on US-151 and WI-33.
    { id: "BVD", name: "Beaver Dam", county: "wi-dodge", lat: 43.47, lon: -88.83, type: "farm", size: 2, pop: 89, main: true, level: "metro" },
    // Sheboygan: a Lake Michigan harbour city; downtown on the lake.
    { id: "SHBG", name: "Sheboygan", county: "wi-sheboygan", lat: 43.75, lon: -87.71, type: "coast", size: 2, pop: 118, main: true, level: "metro" },
    // Fond du Lac: at the south end of Lake Winnebago (44,690).
    { id: "FDL", name: "Fond du Lac", county: "wi-fond-du-lac", lat: 43.77, lon: -88.44, type: "farm", size: 2, pop: 104, main: true, level: "metro" },
    // Level 2: Madison and the south-west
    // Madison: the capital and the University of Wisconsin (274,644; Dane 562k, size 4, as Omaha's 585k). At the Capitol Square, on the isthmus, 1.5 mi from the Census point.
    { id: "MADN", name: "Madison", county: "wi-dane", lat: 43.07, lon: -89.38, type: "metro", size: 4, pop: 562, main: true, level: "south" },
    // Janesville: Rock County's biggest city (65,614); Beloit, the second, is a town here.
    { id: "JVL", name: "Janesville", county: "wi-rock", lat: 42.68, lon: -89.02, type: "farm", size: 2, pop: 164, main: true, level: "south" },
    // Portage: the biggest place in Columbia (10,590), where the Fox and Wisconsin rivers come within a mile and a half (the old portage).
    { id: "PTG", name: "Portage", county: "wi-columbia", lat: 43.55, lon: -89.47, type: "farm", size: 1, pop: 58, main: true, level: "south" },
    // Baraboo: the biggest place in Sauk (12,552), with Circus World (the Ringling Brothers' winter quarters) and 3 mi from Devil's Lake State Park, so scenic. Reedsburg (10,035) is a town.
    { id: "BRBO", name: "Baraboo", county: "wi-sauk", lat: 43.47, lon: -89.74, scenic: true, type: "farm", size: 2, pop: 66, main: true, level: "south" },
    // Monroe: Green County's seat and the biggest place in the group (10,667), the Swiss cheese country.
    { id: "MNR", name: "Monroe", county: "wi-green-lafayette", lat: 42.6, lon: -89.64, type: "farm", size: 1, pop: 54, main: true, level: "south" },
    // Dodgeville, not Richland Center (5,118, the biggest by 135 people; a town here): Iowa County's seat on US-151, the Madison to Dubuque road, with Mineral Point and the House on the Rock in the same group.
    { id: "DDV", name: "Dodgeville", county: "wi-iowa-richland", lat: 42.97, lon: -90.13, type: "farm", size: 1, pop: 41, main: true, level: "south" },
    // Platteville: the biggest place in Grant (11,837, the university).
    { id: "PLTV", name: "Platteville", county: "wi-grant", lat: 42.73, lon: -90.47, type: "farm", size: 1, pop: 52, main: true, level: "south" },
    // Prairie du Chien: the group's biggest place (5,524), where the Wisconsin meets the Mississippi, on US-18 across to Marquette, Iowa.
    { id: "PDC", name: "Prairie du Chien", county: "wi-crawford-vernon", lat: 43.04, lon: -91.14, type: "farm", size: 1, pop: 47, main: true, level: "south" },
    // Mauston: the biggest place (4,348), Juneau's seat on the Lemonweir River and I-90/94.
    { id: "MAU", name: "Mauston", county: "wi-adams-juneau", lat: 43.8, lon: -90.08, type: "farm", size: 1, pop: 47, main: true, level: "south" },
    // Berlin: the biggest place (5,577), on the Fox River.
    { id: "BRLW", name: "Berlin", county: "wi-green-lake-marquette-waushara", lat: 43.97, lon: -88.95, type: "farm", size: 1, pop: 59, main: true, level: "south" },
    // Level 3: the Fox Valley, Green Bay and central Wisconsin
    // Green Bay: Brown's biggest city (107,371; the county 269k, size 2). Downtown on the Fox River. Lambeau Field, the Packers' stadium (the smallest city with a major-league team), is in the county, so scenic.
    { id: "GB", name: "Green Bay", county: "wi-brown", lat: 44.51, lon: -88.01, scenic: true, type: "metro", size: 2, pop: 269, main: true, level: "east" },
    // Appleton: the Fox Cities' biggest (75,674), downtown on the Fox.
    { id: "APL", name: "Appleton", county: "wi-outagamie", lat: 44.26, lon: -88.41, type: "metro", size: 2, pop: 191, main: true, level: "east" },
    // Oshkosh: Winnebago's biggest city (66,801), on Lake Winnebago's west shore.
    { id: "OSHW", name: "Oshkosh", county: "wi-winnebago", lat: 44.02, lon: -88.54, type: "metro", size: 2, pop: 172, main: true, level: "east" },
    // Harrison: the biggest place in Calumet (12,416), a Fox Cities suburb; the rest of the county (Chilton, Brillion) is farms, so farm.
    { id: "HRSW", name: "Harrison", county: "wi-calumet", lat: 44.19, lon: -88.29, type: "farm", size: 1, pop: 52, main: true, level: "east" },
    // Manitowoc: a Lake Michigan harbour city; downtown at the lake.
    { id: "MNTW", name: "Manitowoc", county: "wi-manitowoc", lat: 44.09, lon: -87.66, type: "coast", size: 2, pop: 81, main: true, level: "east" },
    // Sturgeon Bay: the biggest place (9,657), the gateway to Door County, the peninsula of lighthouses, orchards and Lake Michigan shore, so scenic.
    { id: "STBY", name: "Sturgeon Bay", county: "wi-door-kewaunee", lat: 44.82, lon: -87.37, scenic: true, type: "coast", size: 1, pop: 51, main: true, level: "east" },
    // Waupaca: the biggest place in the county (6,282), with the Chain O' Lakes.
    { id: "WPC", name: "Waupaca", county: "wi-waupaca", lat: 44.35, lon: -89.07, type: "farm", size: 1, pop: 52, main: true, level: "east" },
    // Stevens Point: the biggest place (25,676), on the Wisconsin River.
    { id: "STPW", name: "Stevens Point", county: "wi-portage", lat: 44.53, lon: -89.55, type: "farm", size: 2, pop: 70, main: true, level: "east" },
    // Marshfield: Wood County's biggest by 63 people over Wisconsin Rapids (18,933 against 18,870; the Rapids is a town here), the Marshfield Clinic's town.
    { id: "MSF", name: "Marshfield", county: "wi-wood", lat: 44.66, lon: -90.17, type: "farm", size: 2, pop: 74, main: true, level: "east" },
    // Wausau: Marathon's biggest city (40,024), on the Wisconsin River.
    { id: "WSU", name: "Wausau", county: "wi-marathon", lat: 44.96, lon: -89.63, type: "farm", size: 2, pop: 138, main: true, level: "east" },
    // Shawano: the group's biggest place (9,246), on the Wolf River, between the Menominee reservation and Oconto.
    { id: "SHWW", name: "Shawano", county: "wi-menominee-oconto-shawano", lat: 44.78, lon: -88.59, type: "farm", size: 2, pop: 84, main: true, level: "east" },
    // Marinette: the group's biggest (11,119), on Green Bay at the Menominee River's mouth, across from Menominee, Michigan (which will come with Michigan's pack).
    { id: "MRN", name: "Marinette", county: "wi-florence-forest-marinette", lat: 45.09, lon: -87.63, type: "coast", size: 1, pop: 56, main: true, level: "east" },
    // Level 4: the west, the Mississippi and the North Woods
    // La Crosse: the Mississippi's big river city (52,687; the county 121k). Downtown by the river; La Crescent, Minnesota, across it, is a town in Minnesota's pack.
    { id: "LSE", name: "La Crosse", county: "wi-la-crosse", lat: 43.81, lon: -91.25, type: "metro", size: 2, pop: 121, main: true, level: "west" },
    // Sparta: the biggest place (10,030), by a few hundred over Tomah (9,566, a town here, where I-90 and I-94 meet); Sparta is on I-90 and the Elroy-Sparta bike trail.
    { id: "SPA", name: "Sparta", county: "wi-jackson-monroe", lat: 43.94, lon: -90.81, type: "farm", size: 2, pop: 67, main: true, level: "west" },
    // Arcadia: the biggest place (3,737), Trempealeau's heart of the Driftless.
    { id: "ARCD", name: "Arcadia", county: "wi-buffalo-trempealeau", lat: 44.25, lon: -91.49, type: "farm", size: 1, pop: 44, main: true, level: "west" },
    // Eau Claire: the biggest (69,438), where the Eau Claire and Chippewa rivers meet, on I-94.
    { id: "EAUC", name: "Eau Claire", county: "wi-eau-claire", lat: 44.81, lon: -91.5, type: "metro", size: 2, pop: 106, main: true, level: "west" },
    // Chippewa Falls: the biggest place (14,734; Leinenkugel's), on the Chippewa 10 mi north of Eau Claire.
    { id: "CPF", name: "Chippewa Falls", county: "wi-chippewa", lat: 44.94, lon: -91.39, type: "farm", size: 2, pop: 66, main: true, level: "west" },
    // Menomonie: the biggest place (16,845, UW-Stout), on I-94.
    { id: "MNMN", name: "Menomonie", county: "wi-dunn", lat: 44.89, lon: -91.91, type: "farm", size: 1, pop: 45, main: true, level: "west" },
    // River Falls: the biggest place (16,191, the university), 25 mi from the Twin Cities' edge.
    { id: "RFL", name: "River Falls", county: "wi-pepin-pierce", lat: 44.86, lon: -92.63, type: "farm", size: 1, pop: 50, main: true, level: "west" },
    // Hudson: the biggest place (14,749), on the St. Croix and I-94 facing Minnesota's Lakeland and Woodbury (9 mi from Woodbury's station); the rest of the county is farms, so farm, as Chaska.
    { id: "HDS", name: "Hudson", county: "wi-st-croix", lat: 44.96, lon: -92.73, type: "farm", size: 2, pop: 94, main: true, level: "west" },
    // Amery: the biggest place (2,966); Osceola (2,768) and St. Croix Falls (2,212) are close behind.
    { id: "AMY", name: "Amery", county: "wi-burnett-polk", lat: 45.3, lon: -92.36, type: "farm", size: 1, pop: 62, main: true, level: "west" },
    // Rice Lake: the biggest place (9,050), on US-53.
    { id: "RCL", name: "Rice Lake", county: "wi-barron", lat: 45.48, lon: -91.75, type: "farm", size: 1, pop: 47, main: true, level: "west" },
    // Medford: the group's biggest place (4,344), on WI-13 and the Black River's upper part.
    { id: "MDF", name: "Medford", county: "wi-clark-taylor", lat: 45.14, lon: -90.34, type: "farm", size: 1, pop: 55, main: true, level: "west" },
    // Merrill: the group's biggest (9,350), Lincoln's seat on the Wisconsin River and US-51.
    { id: "MRL", name: "Merrill", county: "wi-langlade-lincoln", lat: 45.18, lon: -89.7, type: "farm", size: 1, pop: 48, main: true, level: "west" },
    // Rhinelander: the Northwoods' biggest (8,291), at the Wisconsin and the Pelican. The North Woods are mountain, the game's type for forested country (as Minnesota's).
    { id: "RHN", name: "Rhinelander", county: "wi-oneida-vilas", lat: 45.64, lon: -89.43, type: "mountain", size: 1, pop: 61, main: true, level: "west" },
    // Ladysmith: the biggest (3,222), by a hair over Hayward (2,527) and Park Falls (2,409; both towns here).
    { id: "LDYS", name: "Ladysmith", county: "wi-price-rusk-sawyer", lat: 45.46, lon: -91.1, type: "mountain", size: 1, pop: 46, main: true, level: "west" },
    // Superior: the head of Lake Superior (26,750). At the Census point; downtown, 3.6 mi from Duluth's station, would be too close. Superior shares Duluth's harbour, with its own coal, grain and ore docks, so it holds the port too.
    { id: "SUPW", name: "Superior", county: "wi-douglas-washburn", lat: 46.69, lon: -92.08, port: "Port of Duluth-Superior", type: "coast", size: 2, pop: 61, main: true, level: "west" },
    // Ashland: the biggest place (7,912), on Chequamegon Bay.
    { id: "ASHW", name: "Ashland", county: "wi-ashland-bayfield-iron", lat: 46.58, lon: -90.87, type: "coast", size: 1, pop: 38, main: true, level: "west" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Left out: Hurley's twin Ironwood (Michigan), Hastings' neighbour Prescott and the other twins of
  // Minnesota's and Iowa's places across the rivers (NOTES.md).
  towns: [
    // Milwaukee and the Lake Michigan shore
    { id: "WAL", name: "West Allis", county: "wi-milwaukee", lat: 43.01, lon: -88.03, type: "metro", size: 2 },
    { id: "OAKC", name: "Oak Creek", county: "wi-milwaukee", lat: 42.88, lon: -87.9, type: "metro", size: 1 },
    { id: "BROO", name: "Brookfield", county: "wi-waukesha", lat: 43.06, lon: -88.12, type: "metro", size: 2 },
    { id: "MENO", name: "Menomonee Falls", county: "wi-waukesha", lat: 43.16, lon: -88.12, type: "metro", size: 1 },
    { id: "PTWA", name: "Port Washington", county: "wi-ozaukee", lat: 43.38, lon: -87.88, type: "coast", size: 1 },
    { id: "HART", name: "Hartford", county: "wi-washington", lat: 43.32, lon: -88.38, type: "farm", size: 1 },
    { id: "GERM", name: "Germantown", county: "wi-washington", lat: 43.23, lon: -88.12, type: "metro", size: 1 },
    { id: "BURW", name: "Burlington", county: "wi-racine", lat: 42.68, lon: -88.27, type: "farm", size: 1 },
    { id: "PLEA", name: "Pleasant Prairie", county: "wi-kenosha", lat: 42.53, lon: -87.89, type: "metro", size: 1 },
    // Lake Geneva: the resort town on Geneva Lake (the Gilded Age mansions), scenic.
    { id: "LAKE", name: "Lake Geneva", county: "wi-walworth", lat: 42.58, lon: -88.43, scenic: true, type: "farm", size: 1 },
    { id: "ELKW", name: "Elkhorn", county: "wi-walworth", lat: 42.67, lon: -88.54, type: "farm", size: 1 },
    { id: "FORT", name: "Fort Atkinson", county: "wi-jefferson", lat: 42.92, lon: -88.85, type: "farm", size: 1 },
    { id: "WAUP", name: "Waupun", county: "wi-dodge", lat: 43.63, lon: -88.74, type: "farm", size: 1 },
    { id: "PLYM", name: "Plymouth", county: "wi-sheboygan", lat: 43.75, lon: -87.97, type: "farm", size: 1 },
    { id: "RIPO", name: "Ripon", county: "wi-fond-du-lac", lat: 43.84, lon: -88.84, type: "farm", size: 1 },
    // Madison and the south-west
    { id: "SUNP", name: "Sun Prairie", county: "wi-dane", lat: 43.18, lon: -89.24, type: "metro", size: 1 },
    { id: "MIDD", name: "Middleton", county: "wi-dane", lat: 43.11, lon: -89.51, type: "metro", size: 1 },
    { id: "MOUN", name: "Mount Horeb", county: "wi-dane", lat: 43.01, lon: -89.73, type: "farm", size: 1 },
    { id: "BELW", name: "Beloit", county: "wi-rock", lat: 42.52, lon: -89.02, type: "farm", size: 2 },
    { id: "COLX", name: "Columbus", county: "wi-columbia", lat: 43.34, lon: -89.03, type: "farm", size: 1 },
    // Wisconsin Dells: the sandstone gorge of the Wisconsin River and the waterparks, the state's biggest tourist draw; scenic.
    { id: "WDLS", name: "Wisconsin Dells", county: "wi-columbia", lat: 43.63, lon: -89.78, scenic: true, type: "farm", size: 2 },
    { id: "REED", name: "Reedsburg", county: "wi-sauk", lat: 43.54, lon: -90, type: "farm", size: 1 },
    { id: "NEWG", name: "New Glarus", county: "wi-green-lafayette", lat: 42.81, lon: -89.63, type: "farm", size: 1 },
    { id: "DARL", name: "Darlington", county: "wi-green-lafayette", lat: 42.68, lon: -90.12, type: "farm", size: 1 },
    { id: "RICH", name: "Richland Center", county: "wi-iowa-richland", lat: 43.34, lon: -90.38, type: "farm", size: 1 },
    { id: "MINE", name: "Mineral Point", county: "wi-iowa-richland", lat: 42.86, lon: -90.18, type: "farm", size: 1 },
    // Taliesin: Frank Lloyd Wright's home and studio near Spring Green, a landmark (Wikipedia: 43.14 N, 90.07 W, Town of Wyoming, Iowa County).
    { id: "TLSN", name: "Taliesin", county: "wi-iowa-richland", lat: 43.14, lon: -90.07, scenic: true, type: "farm", size: 1 },
    // House on the Rock: the famous roadside attraction near Spring Green and Dodgeville (Wikipedia: 43.09 N, 90.14 W, Iowa County).
    { id: "HOUS", name: "House on the Rock", county: "wi-iowa-richland", lat: 43.09, lon: -90.14, scenic: true, type: "farm", size: 1 },
    { id: "LANC", name: "Lancaster", county: "wi-grant", lat: 42.85, lon: -90.71, type: "farm", size: 1 },
    { id: "BOSC", name: "Boscobel", county: "wi-grant", lat: 43.15, lon: -90.71, type: "farm", size: 1 },
    { id: "VIRO", name: "Viroqua", county: "wi-crawford-vernon", lat: 43.56, lon: -90.89, type: "farm", size: 1 },
    { id: "ADAM", name: "Adams", county: "wi-adams-juneau", lat: 43.96, lon: -89.82, type: "farm", size: 1 },
    { id: "WAUT", name: "Wautoma", county: "wi-green-lake-marquette-waushara", lat: 44.07, lon: -89.29, type: "farm", size: 1 },
    // the Fox Valley, Green Bay and central Wisconsin
    { id: "DEPE", name: "De Pere", county: "wi-brown", lat: 44.43, lon: -88.08, type: "metro", size: 1 },
    { id: "KAUK", name: "Kaukauna", county: "wi-outagamie", lat: 44.28, lon: -88.26, type: "metro", size: 1 },
    { id: "NEWL", name: "New London", county: "wi-outagamie", lat: 44.41, lon: -88.73, type: "farm", size: 1 },
    { id: "NEEN", name: "Neenah", county: "wi-winnebago", lat: 44.16, lon: -88.48, type: "metro", size: 2 },
    { id: "CHIL", name: "Chilton", county: "wi-calumet", lat: 44.03, lon: -88.16, type: "farm", size: 1 },
    { id: "KIEL", name: "Kiel", county: "wi-manitowoc", lat: 43.92, lon: -88.03, type: "farm", size: 1 },
    { id: "KEWA", name: "Kewaunee", county: "wi-door-kewaunee", lat: 44.46, lon: -87.52, type: "coast", size: 1 },
    // Sister Bay: the village at the northern end of Door County's Green Bay shore (Door County's resort towns, Peninsula State Park nearby), scenic.
    { id: "SIST", name: "Sister Bay", county: "wi-door-kewaunee", lat: 45.18, lon: -87.13, scenic: true, type: "coast", size: 1 },
    { id: "CLIX", name: "Clintonville", county: "wi-waupaca", lat: 44.62, lon: -88.75, type: "farm", size: 1 },
    { id: "WRPD", name: "Wisconsin Rapids", county: "wi-wood", lat: 44.39, lon: -89.83, type: "farm", size: 1 },
    { id: "MOSI", name: "Mosinee", county: "wi-marathon", lat: 44.79, lon: -89.68, type: "farm", size: 1 },
    { id: "OCON", name: "Oconto", county: "wi-menominee-oconto-shawano", lat: 44.89, lon: -87.87, type: "coast", size: 1 },
    { id: "PESH", name: "Peshtigo", county: "wi-florence-forest-marinette", lat: 45.06, lon: -87.74, type: "farm", size: 1 },
    { id: "CRND", name: "Crandon", county: "wi-florence-forest-marinette", lat: 45.57, lon: -88.9, type: "mountain", size: 1 },
    { id: "CRIV", name: "Crivitz", county: "wi-florence-forest-marinette", lat: 45.23, lon: -88.01, type: "farm", size: 1 },
    // the west, the Mississippi and the North Woods
    { id: "ONAL", name: "Onalaska", county: "wi-la-crosse", lat: 43.89, lon: -91.2, type: "metro", size: 1 },
    { id: "TOMH", name: "Tomah", county: "wi-jackson-monroe", lat: 43.99, lon: -90.5, type: "farm", size: 1 },
    { id: "BLAC", name: "Black River Falls", county: "wi-jackson-monroe", lat: 44.3, lon: -90.84, type: "farm", size: 1 },
    { id: "TREM", name: "Trempealeau", county: "wi-buffalo-trempealeau", lat: 44, lon: -91.43, type: "farm", size: 1 },
    { id: "AUGS", name: "Augusta", county: "wi-eau-claire", lat: 44.68, lon: -91.12, type: "farm", size: 1 },
    { id: "BLOO", name: "Bloomer", county: "wi-chippewa", lat: 45.1, lon: -91.49, type: "farm", size: 1 },
    { id: "COLF", name: "Colfax", county: "wi-dunn", lat: 45, lon: -91.73, type: "farm", size: 1 },
    { id: "ELLW", name: "Ellsworth", county: "wi-pepin-pierce", lat: 44.74, lon: -92.48, type: "farm", size: 1 },
    { id: "DURA", name: "Durand", county: "wi-pepin-pierce", lat: 44.62, lon: -91.96, type: "farm", size: 1 },
    { id: "NEWR", name: "New Richmond", county: "wi-st-croix", lat: 45.13, lon: -92.54, type: "farm", size: 1 },
    { id: "BALD", name: "Baldwin", county: "wi-st-croix", lat: 44.95, lon: -92.37, type: "farm", size: 1 },
    { id: "STCR", name: "St. Croix Falls", county: "wi-burnett-polk", lat: 45.41, lon: -92.62, type: "farm", size: 1 },
    { id: "GRAN", name: "Grantsburg", county: "wi-burnett-polk", lat: 45.78, lon: -92.68, type: "farm", size: 1 },
    { id: "BARR", name: "Barron", county: "wi-barron", lat: 45.4, lon: -91.84, type: "farm", size: 1 },
    { id: "NEIL", name: "Neillsville", county: "wi-clark-taylor", lat: 44.56, lon: -90.59, type: "farm", size: 1 },
    { id: "ABBO", name: "Abbotsford", county: "wi-clark-taylor", lat: 44.94, lon: -90.32, type: "farm", size: 1 },
    { id: "ANTI", name: "Antigo", county: "wi-langlade-lincoln", lat: 45.14, lon: -89.16, type: "farm", size: 1 },
    { id: "TOMA", name: "Tomahawk", county: "wi-langlade-lincoln", lat: 45.48, lon: -89.71, type: "mountain", size: 1 },
    { id: "EAGL", name: "Eagle River", county: "wi-oneida-vilas", lat: 45.92, lon: -89.26, type: "mountain", size: 1 },
    // Minocqua: the Northwoods lake resort town on the chain of lakes (a CDP with no Census population; its point is from places.json), scenic.
    { id: "MINO", name: "Minocqua", county: "wi-oneida-vilas", lat: 45.88, lon: -89.7, scenic: true, type: "mountain", size: 1 },
    { id: "HAYW", name: "Hayward", county: "wi-price-rusk-sawyer", lat: 46.01, lon: -91.49, type: "mountain", size: 1 },
    { id: "PARK", name: "Park Falls", county: "wi-price-rusk-sawyer", lat: 45.94, lon: -90.44, type: "mountain", size: 1 },
    { id: "SPOO", name: "Spooner", county: "wi-douglas-washburn", lat: 45.83, lon: -91.89, type: "farm", size: 1 },
    // Bayfield: the gateway to the Apostle Islands National Lakeshore (the ferry to Madeline Island and the islands' tours leave from here), scenic.
    { id: "BAYF", name: "Bayfield", county: "wi-ashland-bayfield-iron", lat: 46.81, lon: -90.84, scenic: true, type: "coast", size: 1 },
    { id: "HURL", name: "Hurley", county: "wi-ashland-bayfield-iron", lat: 46.44, lon: -90.21, type: "mountain", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Milwaukee & the Lake Michigan Shore",
      areas: ["metro"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Madison & the South-West",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Milwaukee to Madison, as I-94 runs
        { kind: "connect", a: "MKE", b: "MADN" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "The Fox Valley, Green Bay & Central Wisconsin",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Milwaukee to Green Bay, as I-43 runs
        { kind: "connect", a: "MKE", b: "GB" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "The West, the Mississippi & the North Woods",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Madison to La Crosse, as I-90 runs
        { kind: "connect", a: "MADN", b: "LSE" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Wisconsin's map has no real
  // mountains (a few hills in the Driftless Area and the Penokee range), so no link needs one.
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow
  // enough. Placed on the map's river where it passes the town (sources in NOTES.md). The
  // Mississippi, St. Croix and Duluth–Superior crossings are in Minnesota's and Iowa's packs.
  bridges: [
    // The Wisconsin River
    ["Wisconsin River bridge (Eagle River)", 45.93, -89.26],
    ["Wisconsin River bridge (Rhinelander)", 45.64, -89.43],
    ["Wisconsin River bridge (Tomahawk)", 45.49, -89.72],
    ["Wisconsin River bridge (Merrill)", 45.18, -89.7],
    ["Wisconsin River bridges (Wausau)", 44.96, -89.64],
    ["Wisconsin River bridge (Mosinee)", 44.8, -89.72],
    ["Wisconsin River bridge (Stevens Point–Plover)", 44.48, -89.56],
    ["Wisconsin River bridges (Wisconsin Rapids)", 44.4, -89.84],
    ["Wisconsin River bridge (Wisconsin Dells)", 43.64, -89.79],
    ["Wisconsin River bridge (Portage)", 43.54, -89.47],
    ["Wisconsin River bridges (Prairie du Sac–Sauk City)", 43.29, -89.74],
    ["Wisconsin River bridge (Spring Green)", 43.17, -90.06],
    ["Wisconsin River bridge (Boscobel)", 43.16, -90.72],
    // The Chippewa and the Black rivers
    ["Chippewa River bridges (Eau Claire)", 44.82, -91.5],
    ["Chippewa River bridge (Chippewa Falls)", 44.93, -91.39],
    ["Chippewa River bridge (Durand)", 44.63, -91.98],
    ["Black River bridge (Black River Falls)", 44.3, -90.84],
    ["Black River bridge (Medford)", 45.13, -90.35],
    // The St. Croix (the Minnesota line: Minnesota's pack lists the Hudson, Stillwater and Taylors Falls bridges)
    // The Fox and Wolf rivers, Lake Winnebago and the Bay
    ["Fox River bridges (Green Bay)", 44.53, -88.01],
    ["Fox River bridge (De Pere)", 44.44, -88.09],
    ["Fox River bridge (Wrightstown)", 44.33, -88.18],
    ["Fox River bridges (Kaukauna)", 44.29, -88.27],
    ["Fox River bridges (Appleton–Kimberly)", 44.27, -88.38],
    ["Fox River bridges (Neenah–Menasha)", 44.23, -88.45],
    ["Fox River bridges (Oshkosh)", 44.03, -88.56],
    ["Wolf River bridge (Shawano)", 44.78, -88.61],
    ["Wolf River bridge (New London)", 44.39, -88.74],
    ["Wolf River bridge (Winneconne)", 44.11, -88.71],
    ["Fox River bridge (Berlin)", 43.97, -88.94],
    ["Menominee River bridge (Marinette–Menominee)", 45.11, -87.61],
    // The Rock and the Fox (Illinois) in the south-east
    ["Fox River bridges (Waukesha)", 43.01, -88.24],
    ["Fox River bridge (Burlington)", 42.68, -88.26],
    ["Rock River bridge (Horicon)", 43.45, -88.63],
    ["Rock River bridge (Watertown)", 43.19, -88.73],
    ["Rock River bridge (Jefferson)", 43, -88.81],
    ["Rock River bridge (Fort Atkinson)", 42.92, -88.84],
    ["Rock River bridges (Janesville)", 42.68, -89.02],
    ["Rock River bridges (Beloit)", 42.52, -89.03],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The North Woods: pine, birch and the lake country, as Minnesota's across the line
    forest: ["wi-ashland-bayfield-iron", "wi-douglas-washburn", "wi-price-rusk-sawyer", "wi-oneida-vilas", "wi-florence-forest-marinette", "wi-langlade-lincoln", "wi-burnett-polk"],
    // The Driftless Area's bluffs and coulees, the central sands' pines, and the woods of the
    // north-west and the Door peninsula
    wooded: ["wi-door-kewaunee", "wi-menominee-oconto-shawano", "wi-sauk", "wi-adams-juneau", "wi-clark-taylor", "wi-barron", "wi-chippewa", "wi-eau-claire", "wi-jackson-monroe", "wi-la-crosse", "wi-buffalo-trempealeau", "wi-crawford-vernon", "wi-iowa-richland", "wi-grant", "wi-pepin-pierce"],
    // Not listed (farmland and grassland): the south-east, Madison's plain, the Fox Valley and the
    // dairy farms of the middle.
  },
});
