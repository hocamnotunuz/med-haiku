// National Railways pack: Alabama.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/AL/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/AL/raw.
// Alabama's 67 counties are 43 regions (merges in tools/build-map.js, STATES.AL).
NR.addPack({
  code: "AL",
  name: "Alabama",
  // A game that starts here begins owning Jefferson (Birmingham), Shelby (Alabaster, the suburbs
  // to the south) and St. Clair (Pell City, up I-20 to the east); all three touch each other.
  // Birmingham and Alabaster are metro and Pell City is farm, so the first track (the nearest pair
  // of different types, Birmingham-Pell City) has riders; Birmingham-Alabaster joins two metros,
  // which carries nobody in "A type of place".
  start: ["al-jefferson", "al-shelby", "al-st-clair"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the
  // short code shown on passengers. pop = region population in thousands (2020 census). size = how
  // busy (1 to 5). level = which level unlocks it in Levels mode. Points are the Census points,
  // except where a comment says it was moved to a downtown. Every Census place is in
  // packs/AL/raw/places.json.
  stations: [
    // Level: Birmingham & the Heart of Alabama
    // Birmingham: the biggest city (200,657; Jefferson County 674k, the biggest region, size 4 like Louisville and Memphis).
    // At downtown (the Civil Rights Institute and Kelly Ingram Park); the Census point is 1 mile north-west. Birmingham-Shuttlesworth
    // is the state's biggest airport and sits in the city. Scenic for the Civil Rights District.
    { id: "BHM", name: "Birmingham", county: "al-jefferson", lat: 33.52, lon: -86.81, airport: "Birmingham-Shuttlesworth International Airport", scenic: true, type: "metro", size: 4, pop: 674, main: true, level: "birmingham" },
    // Alabaster (33,334, ahead of Pelham, 24,167 and Helena, 20,955): the region is 223k, a Birmingham suburb on I-65.
    { id: "ALAB", name: "Alabaster", county: "al-shelby", lat: 33.21, lon: -86.82, type: "metro", size: 2, pop: 223, main: true, level: "birmingham" },
    // Pell City (12,934), not Moody (13,186): the county seat on I-20 and Logan Martin Lake, a real town 20 miles from
    // Birmingham's edge, where Moody (a Birmingham suburb at 33.60, -86.49) is a town. At downtown; the Census point is 2 miles south.
    { id: "PLCY", name: "Pell City", county: "al-st-clair", lat: 33.59, lon: -86.29, type: "farm", size: 1, pop: 91, main: true, level: "birmingham" },
    { id: "ONTA", name: "Oneonta", county: "al-blount", lat: 33.95, lon: -86.49, type: "farm", size: 1, pop: 59, main: true, level: "birmingham" },
    // Jasper (14,585): at downtown; the Census point is 2 miles north.
    { id: "JASR", name: "Jasper", county: "al-walker", lat: 33.83, lon: -87.28, type: "farm", size: 1, pop: 65, main: true, level: "birmingham" },
    { id: "CLNN", name: "Clanton", county: "al-chilton", lat: 32.84, lon: -86.63, type: "farm", size: 1, pop: 45, main: true, level: "birmingham" },
    { id: "TLDG", name: "Talladega", county: "al-talladega", lat: 33.43, lon: -86.1, type: "farm", size: 1, pop: 82, main: true, level: "birmingham" },
    // Tuscaloosa: the University of Alabama and the Black Warrior River (99,628; the county 227k, size 2). At downtown;
    // the Census point is 3 miles north-east.
    { id: "TCL", name: "Tuscaloosa", county: "al-tuscaloosa", lat: 33.21, lon: -87.57, type: "metro", size: 2, pop: 227, main: true, level: "birmingham" },
    // Marion (3,176, ahead of Moundville, 3,028 and Brent, 2,973): the Perry seat, in the south of the three counties.
    { id: "MRYN", name: "Marion", county: "al-bibb-hale-perry", lat: 32.63, lon: -87.32, type: "farm", size: 1, pop: 46, main: true, level: "birmingham" },
    // Level: The Tennessee Valley & the Northeast
    // Huntsville: the Space and Rocket Center and Redstone Arsenal, the state's biggest city by area and its second by people
    // (215,120; Madison County 388k, size 3). At downtown; the Census point is 5 miles south-west. Huntsville International is the
    // state's second airport and sits in the county, on I-565 west of the city. Scenic for the U.S. Space & Rocket Center.
    { id: "HUNT", name: "Huntsville", county: "al-madison", lat: 34.73, lon: -86.59, airport: "Huntsville International Airport", scenic: true, type: "metro", size: 3, pop: 388, main: true, level: "valley" },
    { id: "AHNS", name: "Athens", county: "al-limestone", lat: 34.8, lon: -86.97, type: "farm", size: 1, pop: 104, main: true, level: "valley" },
    // Decatur (57,945): on the Tennessee River below Wheeler Lake. At downtown, on the river; the Census point is 2 miles south.
    { id: "DCAT", name: "Decatur", county: "al-morgan", lat: 34.6, lon: -86.98, type: "metro", size: 2, pop: 123, main: true, level: "valley" },
    { id: "CULL", name: "Cullman", county: "al-cullman", lat: 34.18, lon: -86.84, type: "farm", size: 1, pop: 88, main: true, level: "valley" },
    { id: "ALBV", name: "Albertville", county: "al-marshall", lat: 34.26, lon: -86.21, type: "farm", size: 1, pop: 98, main: true, level: "valley" },
    // Scottsboro (15,591): the Jackson seat; at downtown.
    { id: "SBRO", name: "Scottsboro", county: "al-jackson", lat: 34.67, lon: -86.04, type: "mountain", size: 1, pop: 53, main: true, level: "valley" },
    // Fort Payne (14,874): Lookout Mountain and Little River Canyon; at downtown.
    { id: "FTPN", name: "Fort Payne", county: "al-dekalb", lat: 34.44, lon: -85.72, type: "mountain", size: 1, pop: 72, main: true, level: "valley" },
    // Florence (40,174): the Tennessee River, across from Colbert. At downtown, 3 miles south of the Census point; it stays
    // about 5 miles from Muscle Shoals.
    { id: "FLRN", name: "Florence", county: "al-lauderdale", lat: 34.8, lon: -87.68, type: "farm", size: 1, pop: 94, main: true, level: "valley" },
    // Muscle Shoals (16,299, ahead of Sheffield, 9,397 and Tuscumbia, 9,049): the FAME and Muscle Shoals Sound studios, the "Hit
    // Recording Capital of the World". Scenic. The Census point.
    { id: "MUSS", name: "Muscle Shoals", county: "al-colbert", lat: 34.74, lon: -87.63, scenic: true, type: "farm", size: 1, pop: 57, main: true, level: "valley" },
    { id: "RLVL", name: "Russellville", county: "al-franklin-lawrence", lat: 34.51, lon: -87.73, type: "farm", size: 1, pop: 65, main: true, level: "valley" },
    { id: "HMLN", name: "Hamilton", county: "al-marion-winston", lat: 34.14, lon: -87.99, type: "farm", size: 1, pop: 53, main: true, level: "valley" },
    { id: "FYTE", name: "Fayette", county: "al-fayette-lamar-pickens", lat: 33.69, lon: -87.83, type: "farm", size: 1, pop: 49, main: true, level: "valley" },
    // Gadsden (33,928): on the Coosa River below Lookout Mountain; the Census point.
    { id: "GDSN", name: "Gadsden", county: "al-etowah", lat: 34.01, lon: -86.01, type: "metro", size: 2, pop: 103, main: true, level: "valley" },
    // Anniston (21,563), not Oxford (22,091, a few hundred ahead): the Calhoun seat and old iron city, with Oxford its 4-mile suburb
    // (a town). At downtown; the Census point is 1 mile north-east.
    { id: "ANST", name: "Anniston", county: "al-calhoun", lat: 33.66, lon: -85.83, type: "metro", size: 2, pop: 116, main: true, level: "valley" },
    { id: "CNTE", name: "Centre", county: "al-cherokee-clay-cleburne", lat: 34.15, lon: -85.67, type: "farm", size: 1, pop: 54, main: true, level: "valley" },
    // Level: Montgomery, the Black Belt & the East
    // Montgomery: the state capital (200,591; the county 229k, size 2, as Jackson's 228k). At the State Capitol and downtown on the
    // Alabama River (the Rosa Parks Museum and the Civil Rights Memorial); the Census point is 3 miles south-east. Scenic.
    { id: "MGM", name: "Montgomery", county: "al-montgomery", lat: 32.38, lon: -86.31, scenic: true, type: "metro", size: 2, pop: 229, main: true, level: "east" },
    { id: "PTVL", name: "Prattville", county: "al-autauga", lat: 32.46, lon: -86.46, type: "metro", size: 1, pop: 59, main: true, level: "east" },
    // Millbrook (16,561, ahead of Wetumpka, 7,238): Montgomery's northern suburb on US-231.
    { id: "MLBK", name: "Millbrook", county: "al-elmore", lat: 32.5, lon: -86.37, type: "metro", size: 1, pop: 88, main: true, level: "east" },
    // Auburn (76,566): Auburn University; Opelika (31,014) is a town. The Census point is on the north-east side of the city, downtown is 1 mile away.
    { id: "AUBA", name: "Auburn", county: "al-lee", lat: 32.61, lon: -85.48, type: "metro", size: 2, pop: 174, main: true, level: "east" },
    // Phenix City (38,809): across the Chattahoochee from Columbus, Georgia; the Census point.
    { id: "PHXC", name: "Phenix City", county: "al-russell", lat: 32.47, lon: -85.01, type: "metro", size: 1, pop: 59, main: true, level: "east" },
    { id: "VLEY", name: "Valley", county: "al-chambers-randolph", lat: 32.8, lon: -85.2, type: "farm", size: 1, pop: 57, main: true, level: "east" },
    { id: "ALXC", name: "Alexander City", county: "al-coosa-tallapoosa", lat: 32.93, lon: -85.95, type: "farm", size: 1, pop: 52, main: true, level: "east" },
    // Eufaula (12,891, ahead of Tuskegee, 9,376): on Lake Walter F. George, the Chattahoochee line. The Census point.
    { id: "EUFL", name: "Eufaula", county: "al-barbour-bullock-macon", lat: 31.91, lon: -85.15, type: "farm", size: 1, pop: 55, main: true, level: "east" },
    // Selma (17,965): the Edmund Pettus Bridge and the Selma to Montgomery marches. At downtown on the Alabama River; the Census
    // point is 2 miles north-west. Scenic.
    { id: "SELM", name: "Selma", county: "al-dallas-lowndes-wilcox", lat: 32.41, lon: -87.02, scenic: true, type: "farm", size: 1, pop: 59, main: true, level: "east" },
    { id: "DMPL", name: "Demopolis", county: "al-greene-marengo-sumter", lat: 32.51, lon: -87.84, type: "farm", size: 1, pop: 39, main: true, level: "east" },
    // Level: Mobile Bay, the Wiregrass & the Gulf
    // Mobile: the port city on the head of Mobile Bay (187,043; the county 415k, size 3). At downtown (Government Street and the Bankhead
    // Tunnel); the Census point is 4 miles west-south-west. The Port of Mobile is the state's seaport. Scenic for the USS Alabama.
    { id: "MOB", name: "Mobile", county: "al-mobile", lat: 30.69, lon: -88.04, port: "Port of Mobile", scenic: true, type: "coast", size: 3, pop: 415, main: true, level: "gulf" },
    // Daphne (27,463, ahead of Fairhope, 22,464 and Foley, 20,486): the Eastern Shore of Mobile Bay, across the bay from Mobile; the Census point.
    { id: "DPHN", name: "Daphne", county: "al-baldwin", lat: 30.63, lon: -87.88, type: "coast", size: 2, pop: 232, main: true, level: "gulf" },
    // Dothan (71,048): the Wiregrass capital; the Census point.
    { id: "DOTH", name: "Dothan", county: "al-houston", lat: 31.23, lon: -85.41, type: "metro", size: 2, pop: 107, main: true, level: "gulf" },
    { id: "ENTP", name: "Enterprise", county: "al-coffee", lat: 31.32, lon: -85.86, type: "farm", size: 1, pop: 53, main: true, level: "gulf" },
    { id: "OZAR", name: "Ozark", county: "al-dale-henry", lat: 31.46, lon: -85.64, type: "farm", size: 1, pop: 66, main: true, level: "gulf" },
    { id: "ANDL", name: "Andalusia", county: "al-covington-geneva", lat: 31.31, lon: -86.48, type: "farm", size: 1, pop: 64, main: true, level: "gulf" },
    { id: "TRYA", name: "Troy", county: "al-butler-crenshaw-pike", lat: 31.81, lon: -85.97, type: "farm", size: 1, pop: 65, main: true, level: "gulf" },
    // Atmore (8,398, ahead of Monroeville, 5,959): on the Florida line on I-65... at downtown (the Census point in places.json is 7 miles north).
    { id: "ATMR", name: "Atmore", county: "al-conecuh-escambia-monroe", lat: 31.03, lon: -87.49, type: "farm", size: 1, pop: 68, main: true, level: "gulf" },
    { id: "JKAL", name: "Jackson", county: "al-choctaw-clarke-washington", lat: 31.53, lon: -87.89, type: "farm", size: 1, pop: 51, main: true, level: "gulf" },
  ],
  // Towns: appear over time inside counties you own.
  towns: [
    // Jefferson (Birmingham)
    { id: "HOOV", name: "Hoover", county: "al-jefferson", lat: 33.38, lon: -86.81, type: "metro", size: 2 },
    { id: "VSTV", name: "Vestavia Hills", county: "al-jefferson", lat: 33.46, lon: -86.74, type: "metro", size: 1 },
    { id: "BSMR", name: "Bessemer", county: "al-jefferson", lat: 33.4, lon: -86.95, type: "metro", size: 1 },
    { id: "GRDL", name: "Gardendale", county: "al-jefferson", lat: 33.68, lon: -86.81, type: "metro", size: 1 },
    // Shelby, St. Clair, Blount, Walker, Chilton, Talladega
    { id: "PLHM", name: "Pelham", county: "al-shelby", lat: 33.32, lon: -86.74, type: "metro", size: 1 },
    { id: "CLRA", name: "Calera", county: "al-shelby", lat: 33.12, lon: -86.75, type: "farm", size: 1 },
    { id: "MODY", name: "Moody", county: "al-st-clair", lat: 33.6, lon: -86.49, type: "metro", size: 1 },
    { id: "BLTV", name: "Blountsville", county: "al-blount", lat: 34.08, lon: -86.58, type: "farm", size: 1 },
    { id: "SMTN", name: "Sumiton", county: "al-walker", lat: 33.75, lon: -87.05, type: "farm", size: 1 },
    { id: "JMSN", name: "Jemison", county: "al-chilton", lat: 32.97, lon: -86.73, type: "farm", size: 1 },
    { id: "SYLC", name: "Sylacauga", county: "al-talladega", lat: 33.19, lon: -86.27, type: "farm", size: 1 },
    { id: "LNCL", name: "Lincoln", county: "al-talladega", lat: 33.58, lon: -86.13, type: "farm", size: 1 },
    // Tuscaloosa and the west: Northport is moved 1 mile north of its Census point to stay about 4 miles from Tuscaloosa's downtown
    { id: "NRTP", name: "Northport", county: "al-tuscaloosa", lat: 33.27, lon: -87.6, type: "metro", size: 1 },
    { id: "BRKW", name: "Brookwood", county: "al-tuscaloosa", lat: 33.24, lon: -87.33, type: "farm", size: 1 },
    { id: "MNDV", name: "Moundville", county: "al-bibb-hale-perry", lat: 33, lon: -87.63, type: "farm", size: 1 },
    { id: "BRNE", name: "Brent", county: "al-bibb-hale-perry", lat: 32.94, lon: -87.17, type: "farm", size: 1 },
    { id: "ALVL", name: "Aliceville", county: "al-fayette-lamar-pickens", lat: 33.12, lon: -88.16, type: "farm", size: 1 },
    { id: "VRNO", name: "Vernon", county: "al-fayette-lamar-pickens", lat: 33.76, lon: -88.11, type: "farm", size: 1 },
    // The north-west and the Tennessee Valley
    { id: "HLVL", name: "Haleyville", county: "al-marion-winston", lat: 34.23, lon: -87.62, type: "farm", size: 1 },
    { id: "WFLD", name: "Winfield", county: "al-marion-winston", lat: 33.93, lon: -87.79, type: "farm", size: 1 },
    { id: "MLTN", name: "Moulton", county: "al-franklin-lawrence", lat: 34.49, lon: -87.28, type: "farm", size: 1 },
    { id: "RDBY", name: "Red Bay", county: "al-franklin-lawrence", lat: 34.44, lon: -88.14, type: "farm", size: 1 },
    { id: "TSCM", name: "Tuscumbia", county: "al-colbert", lat: 34.72, lon: -87.7, type: "farm", size: 1 },
    { id: "RGRV", name: "Rogersville", county: "al-lauderdale", lat: 34.83, lon: -87.28, type: "farm", size: 1 },
    { id: "ARDM", name: "Ardmore", county: "al-limestone", lat: 34.99, lon: -86.83, type: "farm", size: 1 },
    { id: "MADS", name: "Madison", county: "al-madison", lat: 34.71, lon: -86.76, type: "metro", size: 2 },
    { id: "NWHP", name: "New Hope", county: "al-madison", lat: 34.54, lon: -86.41, type: "farm", size: 1 },
    { id: "HRTS", name: "Hartselle", county: "al-morgan", lat: 34.44, lon: -86.94, type: "farm", size: 1 },
    { id: "HNCV", name: "Hanceville", county: "al-cullman", lat: 34.06, lon: -86.76, type: "farm", size: 1 },
    { id: "GNTV", name: "Guntersville", county: "al-marshall", lat: 34.36, lon: -86.29, type: "farm", size: 1 },
    { id: "ARAB", name: "Arab", county: "al-marshall", lat: 34.33, lon: -86.5, type: "farm", size: 1 },
    { id: "BOAZ", name: "Boaz", county: "al-marshall", lat: 34.2, lon: -86.16, type: "farm", size: 1 },
    { id: "STVN", name: "Stevenson", county: "al-jackson", lat: 34.88, lon: -85.81, type: "mountain", size: 1 },
    { id: "BPRT", name: "Bridgeport", county: "al-jackson", lat: 34.95, lon: -85.72, type: "mountain", size: 1 },
    { id: "RNSV", name: "Rainsville", county: "al-dekalb", lat: 34.49, lon: -85.84, type: "mountain", size: 1 },
    // Little River Canyon: the National Preserve on Lookout Mountain, east of Fort Payne (NOTES.md)
    { id: "LRC", name: "Little River Canyon", county: "al-dekalb", lat: 34.4, lon: -85.62, scenic: true, type: "mountain", size: 1 },
    { id: "RNBC", name: "Rainbow City", county: "al-etowah", lat: 33.93, lon: -86.08, type: "metro", size: 1 },
    { id: "SDSD", name: "Southside", county: "al-etowah", lat: 33.89, lon: -86.02, type: "metro", size: 1 },
    { id: "OXFA", name: "Oxford", county: "al-calhoun", lat: 33.6, lon: -85.87, type: "metro", size: 1 },
    { id: "JCVL", name: "Jacksonville", county: "al-calhoun", lat: 33.81, lon: -85.76, type: "farm", size: 1 },
    { id: "HFLN", name: "Heflin", county: "al-cherokee-clay-cleburne", lat: 33.65, lon: -85.57, type: "farm", size: 1 },
    // Cheaha Mountain: the state's highest point (2,407 ft) in Cheaha State Park, in the Talladega National Forest (NOTES.md)
    { id: "CHEA", name: "Cheaha Mountain", county: "al-cherokee-clay-cleburne", lat: 33.49, lon: -85.81, scenic: true, type: "mountain", size: 1 },
    { id: "LNVL", name: "Lineville", county: "al-cherokee-clay-cleburne", lat: 33.31, lon: -85.75, type: "farm", size: 1 },
    // Montgomery and the east
    { id: "PKRD", name: "Pike Road", county: "al-montgomery", lat: 32.27, lon: -86.12, type: "metro", size: 1 },
    { id: "ATGV", name: "Autaugaville", county: "al-autauga", lat: 32.43, lon: -86.66, type: "farm", size: 1 },
    { id: "WTMK", name: "Wetumpka", county: "al-elmore", lat: 32.54, lon: -86.21, type: "farm", size: 1 },
    { id: "TLSS", name: "Tallassee", county: "al-elmore", lat: 32.53, lon: -85.89, type: "farm", size: 1 },
    { id: "OPLK", name: "Opelika", county: "al-lee", lat: 32.66, lon: -85.38, type: "metro", size: 2 },
    { id: "RNKE", name: "Roanoke", county: "al-chambers-randolph", lat: 33.15, lon: -85.37, type: "farm", size: 1 },
    { id: "LFTE", name: "La Fayette", county: "al-chambers-randolph", lat: 32.9, lon: -85.4, type: "farm", size: 1 },
    { id: "DDVL", name: "Dadeville", county: "al-coosa-tallapoosa", lat: 32.83, lon: -85.78, type: "farm", size: 1 },
    { id: "GDWT", name: "Goodwater", county: "al-coosa-tallapoosa", lat: 33.06, lon: -86.05, type: "farm", size: 1 },
    // Tuskegee: Tuskegee University and the Tuskegee Airmen National Historic Site (NOTES.md)
    { id: "TSKG", name: "Tuskegee", county: "al-barbour-bullock-macon", lat: 32.42, lon: -85.68, scenic: true, type: "farm", size: 1 },
    { id: "USPR", name: "Union Springs", county: "al-barbour-bullock-macon", lat: 32.14, lon: -85.71, type: "farm", size: 1 },
    // The Black Belt
    { id: "CMDE", name: "Camden", county: "al-dallas-lowndes-wilcox", lat: 32, lon: -87.29, type: "farm", size: 1 },
    { id: "FTDP", name: "Fort Deposit", county: "al-dallas-lowndes-wilcox", lat: 31.99, lon: -86.57, type: "farm", size: 1 },
    { id: "LVST", name: "Livingston", county: "al-greene-marengo-sumter", lat: 32.6, lon: -88.19, type: "farm", size: 1 },
    { id: "ETAW", name: "Eutaw", county: "al-greene-marengo-sumter", lat: 32.85, lon: -87.9, type: "farm", size: 1 },
    // The south and the Wiregrass
    { id: "THMS", name: "Thomasville", county: "al-choctaw-clarke-washington", lat: 31.91, lon: -87.74, type: "farm", size: 1 },
    { id: "CHAM", name: "Chatom", county: "al-choctaw-clarke-washington", lat: 31.47, lon: -88.25, type: "farm", size: 1 },
    { id: "MNRV", name: "Monroeville", county: "al-conecuh-escambia-monroe", lat: 31.52, lon: -87.33, type: "farm", size: 1 },
    { id: "BRWT", name: "Brewton", county: "al-conecuh-escambia-monroe", lat: 31.11, lon: -87.07, type: "farm", size: 1 },
    { id: "EVGN", name: "Evergreen", county: "al-conecuh-escambia-monroe", lat: 31.43, lon: -86.96, type: "farm", size: 1 },
    { id: "GRVE", name: "Greenville", county: "al-butler-crenshaw-pike", lat: 31.83, lon: -86.62, type: "farm", size: 1 },
    { id: "LVRE", name: "Luverne", county: "al-butler-crenshaw-pike", lat: 31.72, lon: -86.27, type: "farm", size: 1 },
    { id: "OPP", name: "Opp", county: "al-covington-geneva", lat: 31.28, lon: -86.26, type: "farm", size: 1 },
    { id: "GNVA", name: "Geneva", county: "al-covington-geneva", lat: 31.04, lon: -85.88, type: "farm", size: 1 },
    { id: "HDLD", name: "Headland", county: "al-dale-henry", lat: 31.36, lon: -85.36, type: "farm", size: 1 },
    { id: "ABBV", name: "Abbeville", county: "al-dale-henry", lat: 31.57, lon: -85.26, type: "farm", size: 1 },
    { id: "ELBA", name: "Elba", county: "al-coffee", lat: 31.42, lon: -86.08, type: "farm", size: 1 },
    { id: "ASHF", name: "Ashford", county: "al-houston", lat: 31.19, lon: -85.24, type: "farm", size: 1 },
    // Mobile Bay and the Gulf coast
    { id: "PRCH", name: "Prichard", county: "al-mobile", lat: 30.77, lon: -88.13, type: "coast", size: 1 },
    { id: "SRLD", name: "Saraland", county: "al-mobile", lat: 30.85, lon: -88.11, type: "coast", size: 1 },
    { id: "BYLB", name: "Bayou La Batre", county: "al-mobile", lat: 30.41, lon: -88.26, type: "coast", size: 1 },
    { id: "FRHP", name: "Fairhope", county: "al-baldwin", lat: 30.52, lon: -87.88, type: "coast", size: 1 },
    { id: "FOLY", name: "Foley", county: "al-baldwin", lat: 30.4, lon: -87.66, type: "coast", size: 1 },
    // Gulf Shores: the beaches of Alabama's coast, with Orange Beach and Gulf State Park (NOTES.md)
    { id: "GLFS", name: "Gulf Shores", county: "al-baldwin", lat: 30.28, lon: -87.7, scenic: true, type: "coast", size: 1 },
    { id: "BYMN", name: "Bay Minette", county: "al-baldwin", lat: 30.89, lon: -87.79, type: "farm", size: 1 },
  ],
  // Alabama's mountains on the map are small (the southern end of the Appalachians: Lookout
  // Mountain, Sand Mountain and the Talladega Mountains stay under 2,500 feet), so no real passes are listed
  // until the checker finds mountains near a main line (NOTES.md).
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  bridges: [
    // Mobile Bay and the Mobile-Tensaw Delta: the real crossings (matching the bay's `bays` ring below). Sources in NOTES.md.
    ["Jubilee Parkway Bayway (I-10, Mobile Bay)", 30.68, -87.96],
    ["Battleship Parkway and Causeway (US-90, US-98, Mobile Bay)", 30.7, -87.95],
    ["Mobile Bay Ferry (Fort Morgan-Dauphin Island)", 30.24, -88.04],
    ["Dauphin Island Bridge (AL-193)", 30.27, -88.13],
    // The Tennessee River and its lakes (Lake Wilson, Lake Guntersville); Weiss Lake on the Coosa
    ["Wilson Dam (Florence-Muscle Shoals)", 34.8, -87.63],
    ["O'Neal Bridge (US-43, Florence-Sheffield)", 34.79, -87.69],
    ["Guntersville Bridge (US-431, Lake Guntersville)", 34.37, -86.3],
    ["Weiss Lake bridge (AL-68, Cedar Bluff)", 34.22, -85.6],
    // The Black Warrior, the Alabama and the Tombigbee
    ["Hugh Thomas Bridge (US-82, Tuscaloosa-Northport)", 33.22, -87.57],
    ["Alabama River bridge (I-65, Montgomery)", 32.4, -86.3],
    ["Edmund Pettus Bridge (US-80, Selma)", 32.41, -87.02],
    ["Tombigbee River bridge (US-80, Demopolis)", 32.5, -87.9],
    // The Chattahoochee (matching Georgia's later bridge)
    ["Dillingham Street Bridge (Phenix City-Columbus)", 32.47, -85],
  ],
  bays: [
    {
      name: "Mobile Bay",
      ring: [-88.12, 30.68, -87.8, 30.68, -87.8, 30.2, -88.12, 30.2],
    },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Birmingham & the Heart of Alabama",
      areas: ["birmingham"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        // Birmingham to Tuscaloosa, as I-20/59 runs
        { kind: "connect", a: "BHM", b: "TCL" },
      ],
    },
    {
      name: "The Tennessee Valley & the Northeast",
      areas: ["valley"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Birmingham to Huntsville, as I-65 runs (by Cullman and Decatur)
        { kind: "connect", a: "BHM", b: "HUNT" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "Montgomery, the Black Belt & the East",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "cargo", cargo: "produce", target: 10 },
        // Montgomery to Selma, as US-80 runs along the Alabama River
        { kind: "connect", a: "MGM", b: "SELM" },
      ],
    },
    {
      name: "Mobile Bay, the Wiregrass & the Gulf",
      areas: ["gulf"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Mobile to Daphne, across Mobile Bay by the I-10 Bayway and the Causeway
        { kind: "connect", a: "MOB", b: "DPHN" },
        { kind: "cargo", cargo: "containers", target: 10 },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    // The pine forests of the Gulf coastal plain and the lower Black Belt edge
    forest: ["al-mobile", "al-baldwin", "al-conecuh-escambia-monroe", "al-choctaw-clarke-washington", "al-covington-geneva", "al-butler-crenshaw-pike"],
    // The Appalachian foothills and hill country of the north and east, the Bankhead forest, and the
    // Piedmont plateau
    wooded: ["al-jackson", "al-dekalb", "al-cherokee-clay-cleburne", "al-calhoun", "al-etowah", "al-blount", "al-st-clair", "al-talladega", "al-jefferson", "al-shelby", "al-walker", "al-cullman", "al-marion-winston", "al-franklin-lawrence", "al-fayette-lamar-pickens", "al-chilton", "al-coosa-tallapoosa", "al-bibb-hale-perry", "al-chambers-randolph", "al-tuscaloosa"],
    // Not listed (farmland and grassland): the Tennessee Valley's cotton and soybeans, the Black Belt prairie, the Wiregrass peanut country. No `dry`: Alabama has no desert.
  },
});
