// National Railways pack: Mississippi.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/MS/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/MS/raw.
NR.addPack({
  code: "MS",
  name: "Mississippi",
  // A game that starts here begins owning these regions: Hinds (Jackson), Madison (the suburbs north of
  // the Pearl River) and Holmes-Humphreys-Yazoo (Yazoo City, up the Yazoo Basin); all three touch each
  // other. Jackson and Madison are metro and Yazoo City is farm, so the first track (the nearest pair
  // of different types, Madison-Yazoo City) has riders.
  start: ["ms-hinds", "ms-madison", "ms-holmes-humphreys-yazoo"],
  // Main stations: one per region, at its biggest place except where a comment says why.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. Points are the Census points, except where a comment says it
  // was moved to a downtown. Every Census place is in packs/MS/raw/places.json.
  stations: [
    // Level: Jackson & the Capital Region
    { id: "BRKH", name: "Brookhaven", county: "ms-copiah-lincoln", lat: 31.58, lon: -90.44, type: "farm", size: 1, pop: 63, main: true, level: "jackson" },
    { id: "MAGE", name: "Magee", county: "ms-covington-simpson-smith", lat: 31.87, lon: -89.73, type: "farm", size: 1, pop: 59, main: true, level: "jackson" },
    // Jackson: the state capital and its biggest city (153,703; a metro of 600,000). Size 3, as Little Rock and Baton Rouge (the county has 228,000). At the Capitol and downtown on the Pearl River; the
    // Census point is 2 miles north-west.
    { id: "JAN", name: "Jackson", county: "ms-hinds", lat: 32.3, lon: -90.18, type: "metro", size: 3, pop: 228, main: true, level: "jackson" },
    { id: "YZCT", name: "Yazoo City", county: "ms-holmes-humphreys-yazoo", lat: 32.86, lon: -90.41, type: "farm", size: 1, pop: 52, main: true, level: "jackson" },
    // Vicksburg: the National Military Park and the Mississippi River bluffs (the park is 2 miles from the station, so it is not a separate place). At downtown; the Census point is 2 miles south.
    { id: "VKSB", name: "Vicksburg", county: "ms-issaquena-sharkey-warren", lat: 32.35, lon: -90.88, scenic: true, type: "farm", size: 1, pop: 50, main: true, level: "jackson" },
    { id: "MDMS", name: "Madison", county: "ms-madison", lat: 32.47, lon: -90.13, type: "metro", size: 2, pop: 109, main: true, level: "jackson" },
    { id: "FRST", name: "Forest", county: "ms-newton-scott", lat: 32.36, lon: -89.48, type: "farm", size: 1, pop: 49, main: true, level: "jackson" },
    // Pearl (27,106), the biggest city of Rankin, east of the Pearl River from Jackson; the airport is in Pearl and Flowood. Brandon (25,137), the seat, is a town.
    { id: "PRL", name: "Pearl", county: "ms-rankin", lat: 32.27, lon: -90.09, airport: "Jackson–Medgar Evers International Airport", type: "metro", size: 2, pop: 157, main: true, level: "jackson" },
    // Level: The Delta, Natchez & the Southwest
    // Natchez: the antebellum homes and the oldest city on the river (Natchez Trace's southern end). Nudged 2 miles south-east of the old downtown (31.56, -91.40),
    // to stay about 4 miles from Louisiana's Vidalia station across the river.
    { id: "NTZ", name: "Natchez", county: "ms-adams-claiborne-jefferson", lat: 31.53, lon: -91.38, scenic: true, type: "farm", size: 1, pop: 46, main: true, level: "delta" },
    // Gloster, not Centreville (the biggest place, 1,254, in the far south-west corner on US-24 by Wilkinson): Gloster (900, on US-24) sits in the middle of the three small counties, 9 miles
    // from Centreville and Liberty. Centreville and Woodville are towns.
    { id: "GLST", name: "Gloster", county: "ms-amite-franklin-wilkinson", lat: 31.2, lon: -91.02, type: "farm", size: 1, pop: 29, main: true, level: "delta" },
    { id: "KSCO", name: "Kosciusko", county: "ms-attala-choctaw-montgomery", lat: 33.06, lon: -89.59, type: "farm", size: 1, pop: 36, main: true, level: "delta" },
    { id: "CLEM", name: "Cleveland", county: "ms-bolivar-sunflower", lat: 33.74, lon: -90.73, type: "farm", size: 1, pop: 57, main: true, level: "delta" },
    // Greenwood, at downtown on the Yazoo River.
    { id: "GNWD", name: "Greenwood", county: "ms-carroll-leflore-tallahatchie", lat: 33.52, lon: -90.18, type: "farm", size: 1, pop: 51, main: true, level: "delta" },
    // Clarksdale: the Delta blues (the Delta Blues Museum, the Crossroads of US-61 and US-49); at downtown.
    { id: "CLKD", name: "Clarksdale", county: "ms-coahoma-quitman-tunica", lat: 34.2, lon: -90.57, scenic: true, type: "farm", size: 1, pop: 37, main: true, level: "delta" },
    { id: "GRND", name: "Grenada", county: "ms-grenada-yalobusha", lat: 33.78, lon: -89.81, type: "farm", size: 1, pop: 34, main: true, level: "delta" },
    { id: "CLMA", name: "Columbia", county: "ms-jefferson-davis-lawrence-marion", lat: 31.26, lon: -89.83, type: "farm", size: 1, pop: 48, main: true, level: "delta" },
    { id: "PHLD", name: "Philadelphia", county: "ms-leake-neshoba", lat: 32.78, lon: -89.12, type: "farm", size: 1, pop: 50, main: true, level: "delta" },
    { id: "MCMB", name: "McComb", county: "ms-pike-walthall", lat: 31.24, lon: -90.45, type: "farm", size: 1, pop: 54, main: true, level: "delta" },
    // Greenville, at downtown (the Census point is 3 miles south-east); the Delta's river city and the US-82 bridge to Arkansas.
    { id: "GRVM", name: "Greenville", county: "ms-washington", lat: 33.41, lon: -91.06, type: "farm", size: 1, pop: 45, main: true, level: "delta" },
    // Level: The Pine Belt & the Gulf Coast
    // Quitman, the biggest place (2,062; Bay Springs 1,662) and the seat of Clarke, on US-45 toward Meridian and Waynesboro. Heidelberg (640), the middle of the
    // US-11 and railway line through both counties, is too small to be a station. Bay Springs and Heidelberg are towns.
    { id: "QTMN", name: "Quitman", county: "ms-clarke-jasper", lat: 32.04, lon: -88.72, type: "farm", size: 1, pop: 32, main: true, level: "gulf" },
    // Hattiesburg at downtown (the Census point is 2 miles south-west); the Hub City of the Pine Belt, University of Southern Mississippi.
    { id: "HTBG", name: "Hattiesburg", county: "ms-forrest", lat: 31.33, lon: -89.29, type: "metro", size: 2, pop: 78, main: true, level: "gulf" },
    { id: "WGGN", name: "Wiggins", county: "ms-george-stone", lat: 30.86, lon: -89.14, type: "farm", size: 1, pop: 43, main: true, level: "gulf" },
    { id: "WYBO", name: "Waynesboro", county: "ms-greene-perry-wayne", lat: 31.68, lon: -88.63, type: "farm", size: 1, pop: 45, main: true, level: "gulf" },
    // Bay St. Louis, not Diamondhead (9,522 against 9,289, a gated community by I-10 with no downtown): the old coast town on St. Louis Bay and the seat of Hancock,
    // at the US-90 bridge. Diamondhead is a town.
    { id: "BSLS", name: "Bay St. Louis", county: "ms-hancock", lat: 30.31, lon: -89.33, type: "coast", size: 1, pop: 46, main: true, level: "gulf" },
    // Gulfport, with the Port of Gulfport (a real container and banana port; the state's biggest) and Gulfport–Biloxi International Airport (the coast's big airport). At downtown and the port; the Census point is
    // 4 miles north-east. Biloxi (49,440) is a town (size 2).
    { id: "GPT", name: "Gulfport", county: "ms-harrison", lat: 30.37, lon: -89.09, port: "Port of Gulfport", airport: "Gulfport–Biloxi International Airport", type: "coast", size: 2, pop: 209, main: true, level: "gulf" },
    // Pascagoula, with the Port of Pascagoula (a real deep-water port; Ingalls Shipbuilding), on the Pascagoula River. At downtown.
    { id: "PSGL", name: "Pascagoula", county: "ms-jackson", lat: 30.37, lon: -88.56, port: "Port of Pascagoula", type: "coast", size: 2, pop: 143, main: true, level: "gulf" },
    { id: "LRLM", name: "Laurel", county: "ms-jones", lat: 31.7, lon: -89.14, type: "farm", size: 2, pop: 67, main: true, level: "gulf" },
    // Purvis, the seat and the biggest place of Lamar (64,000, mostly the south-west suburbs of Hattiesburg), 11 miles from Hattiesburg.
    { id: "PRVS", name: "Purvis", county: "ms-lamar", lat: 31.15, lon: -89.41, type: "farm", size: 2, pop: 64, main: true, level: "gulf" },
    // Meridian, at downtown (the Union Station and the railway crossing); the Census point is 2 miles north.
    { id: "MRDN", name: "Meridian", county: "ms-lauderdale", lat: 32.36, lon: -88.7, type: "metro", size: 2, pop: 73, main: true, level: "gulf" },
    { id: "PCYN", name: "Picayune", county: "ms-pearl-river", lat: 30.53, lon: -89.67, type: "farm", size: 2, pop: 56, main: true, level: "gulf" },
    // Level: The Hills & the North
    // Corinth, at downtown (the railroad crossing and the Civil War museum); the Census point is a mile north-east.
    { id: "CRNT", name: "Corinth", county: "ms-alcorn-tishomingo", lat: 34.93, lon: -88.52, type: "farm", size: 1, pop: 54, main: true, level: "north" },
    { id: "HLSP", name: "Holly Springs", county: "ms-benton-marshall-tippah", lat: 34.78, lon: -89.45, type: "farm", size: 1, pop: 63, main: true, level: "north" },
    { id: "HSTM", name: "Houston", county: "ms-calhoun-chickasaw-webster", lat: 33.9, lon: -89, type: "farm", size: 1, pop: 40, main: true, level: "north" },
    { id: "WSPT", name: "West Point", county: "ms-clay-monroe", lat: 33.61, lon: -88.66, type: "farm", size: 1, pop: 53, main: true, level: "north" },
    // Southaven (54,642), the biggest city of DeSoto County, a Memphis suburb on I-55 and US-51 (Olive Branch is a town). 13 miles from Memphis.
    { id: "SOHV", name: "Southaven", county: "ms-desoto", lat: 34.95, lon: -89.98, type: "metro", size: 2, pop: 185, main: true, level: "north" },
    { id: "BNVM", name: "Booneville", county: "ms-itawamba-prentiss", lat: 34.66, lon: -88.57, type: "farm", size: 1, pop: 49, main: true, level: "north" },
    { id: "LSVL", name: "Louisville", county: "ms-kemper-noxubee-winston", lat: 33.12, lon: -89.05, type: "farm", size: 1, pop: 37, main: true, level: "north" },
    // Oxford: the University of Mississippi (Ole Miss), the Square and Faulkner's Rowan Oak. At the Square; the Census point is 2 miles south-west.
    { id: "OXFD", name: "Oxford", county: "ms-lafayette", lat: 34.37, lon: -89.52, scenic: true, type: "metro", size: 2, pop: 56, main: true, level: "north" },
    // Tupelo: Elvis Presley's birthplace and the end of the Natchez Trace Parkway's Tupelo visitor center. At downtown; the Census point is 2 miles north-west.
    { id: "TUP", name: "Tupelo", county: "ms-lee", lat: 34.26, lon: -88.7, scenic: true, type: "metro", size: 2, pop: 83, main: true, level: "north" },
    // Columbus, at downtown on the Tombigbee River.
    { id: "CMBS", name: "Columbus", county: "ms-lowndes", lat: 33.5, lon: -88.43, type: "metro", size: 2, pop: 59, main: true, level: "north" },
    // Starkville: Mississippi State University.
    { id: "STKV", name: "Starkville", county: "ms-oktibbeha", lat: 33.46, lon: -88.83, type: "metro", size: 2, pop: 52, main: true, level: "north" },
    // Senatobia (8,354) rather than Batesville (7,517, a town): the biggest place, on I-55 near DeSoto.
    { id: "SNTB", name: "Senatobia", county: "ms-panola-tate", lat: 34.61, lon: -89.98, type: "farm", size: 1, pop: 61, main: true, level: "north" },
    // New Albany (7,622) rather than Pontotoc (5,629, a town): the biggest place, on US-78 / I-22.
    { id: "NALB", name: "New Albany", county: "ms-pontotoc-union", lat: 34.49, lon: -89.02, type: "farm", size: 1, pop: 59, main: true, level: "north" },
  ],
  // Towns: the next-biggest places of each region, spread out (at least 4 miles apart).
  towns: [
    { id: "POMS", name: "Port Gibson", county: "ms-adams-claiborne-jefferson", lat: 31.96, lon: -90.98, type: "farm", size: 1 },
    { id: "FAYE", name: "Fayette", county: "ms-adams-claiborne-jefferson", lat: 31.71, lon: -91.06, type: "farm", size: 1 },
    { id: "IK", name: "Iuka", county: "ms-alcorn-tishomingo", lat: 34.81, lon: -88.2, type: "farm", size: 1 },
    { id: "CEMS", name: "Centreville", county: "ms-amite-franklin-wilkinson", lat: 31.09, lon: -91.07, type: "farm", size: 1 },
    { id: "WOO", name: "Woodville", county: "ms-amite-franklin-wilkinson", lat: 31.1, lon: -91.3, type: "farm", size: 1 },
    { id: "WNN", name: "Winona", county: "ms-attala-choctaw-montgomery", lat: 33.49, lon: -89.73, type: "farm", size: 1 },
    { id: "ACKR", name: "Ackerman", county: "ms-attala-choctaw-montgomery", lat: 33.31, lon: -89.17, type: "farm", size: 1 },
    { id: "RIPL", name: "Ripley", county: "ms-benton-marshall-tippah", lat: 34.73, lon: -88.94, type: "farm", size: 1 },
    { id: "BYHL", name: "Byhalia", county: "ms-benton-marshall-tippah", lat: 34.87, lon: -89.69, type: "farm", size: 1 },
    { id: "INDN", name: "Indianola", county: "ms-bolivar-sunflower", lat: 33.45, lon: -90.64, type: "farm", size: 1 },
    { id: "RSDL", name: "Rosedale", county: "ms-bolivar-sunflower", lat: 33.86, lon: -91.04, type: "farm", size: 1 },
    { id: "OKLN", name: "Okolona", county: "ms-calhoun-chickasaw-webster", lat: 34.01, lon: -88.75, type: "farm", size: 1 },
    { id: "EPR", name: "Eupora", county: "ms-calhoun-chickasaw-webster", lat: 33.54, lon: -89.28, type: "farm", size: 1 },
    { id: "CHMS", name: "Charleston", county: "ms-carroll-leflore-tallahatchie", lat: 34.01, lon: -90.06, type: "farm", size: 1 },
    { id: "VDN", name: "Vaiden", county: "ms-carroll-leflore-tallahatchie", lat: 33.33, lon: -89.75, type: "farm", size: 1 },
    { id: "BYSP", name: "Bay Springs", county: "ms-clarke-jasper", lat: 31.98, lon: -89.28, type: "farm", size: 1 },
    { id: "HDLB", name: "Heidelberg", county: "ms-clarke-jasper", lat: 31.89, lon: -88.99, type: "farm", size: 1 },
    { id: "AMRY", name: "Amory", county: "ms-clay-monroe", lat: 33.98, lon: -88.48, type: "farm", size: 1 },
    { id: "ABRD", name: "Aberdeen", county: "ms-clay-monroe", lat: 33.83, lon: -88.55, type: "farm", size: 1 },
    { id: "TNC", name: "Tunica", county: "ms-coahoma-quitman-tunica", lat: 34.69, lon: -90.38, type: "farm", size: 1 },
    { id: "MARK", name: "Marks", county: "ms-coahoma-quitman-tunica", lat: 34.25, lon: -90.27, type: "farm", size: 1 },
    { id: "CRYS", name: "Crystal Springs", county: "ms-copiah-lincoln", lat: 31.99, lon: -90.36, type: "farm", size: 1 },
    { id: "HZLH", name: "Hazlehurst", county: "ms-copiah-lincoln", lat: 31.86, lon: -90.39, type: "farm", size: 1 },
    { id: "CLLN", name: "Collins", county: "ms-covington-simpson-smith", lat: 31.65, lon: -89.57, type: "farm", size: 1 },
    { id: "MEND", name: "Mendenhall", county: "ms-covington-simpson-smith", lat: 31.96, lon: -89.87, type: "farm", size: 1 },
    { id: "OLVB", name: "Olive Branch", county: "ms-desoto", lat: 34.96, lon: -89.84, type: "metro", size: 2 },
    { id: "HRNN", name: "Hernando", county: "ms-desoto", lat: 34.85, lon: -89.99, type: "metro", size: 1 },
    { id: "LCDL", name: "Lucedale", county: "ms-george-stone", lat: 30.93, lon: -88.6, type: "farm", size: 1 },
    { id: "LKSV", name: "Leakesville", county: "ms-greene-perry-wayne", lat: 31.15, lon: -88.56, type: "farm", size: 1 },
    { id: "RCHT", name: "Richton", county: "ms-greene-perry-wayne", lat: 31.35, lon: -88.94, type: "farm", size: 1 },
    { id: "WTRV", name: "Water Valley", county: "ms-grenada-yalobusha", lat: 34.16, lon: -89.63, type: "farm", size: 1 },
    { id: "DMND", name: "Diamondhead", county: "ms-hancock", lat: 30.38, lon: -89.35, type: "coast", size: 1 },
    { id: "BLX", name: "Biloxi", county: "ms-harrison", lat: 30.4, lon: -88.89, scenic: true, type: "coast", size: 2 },
    { id: "PSSC", name: "Pass Christian", county: "ms-harrison", lat: 30.32, lon: -89.24, type: "coast", size: 1 },
    { id: "LNGB", name: "Long Beach", county: "ms-harrison", lat: 30.35, lon: -89.16, type: "coast", size: 1 },
    { id: "CLIM", name: "Clinton", county: "ms-hinds", lat: 32.35, lon: -90.34, type: "metro", size: 1 },
    { id: "BYRM", name: "Byram", county: "ms-hinds", lat: 32.19, lon: -90.29, type: "metro", size: 1 },
    { id: "BLZN", name: "Belzoni", county: "ms-holmes-humphreys-yazoo", lat: 33.18, lon: -90.49, type: "farm", size: 1 },
    { id: "DRNT", name: "Durant", county: "ms-holmes-humphreys-yazoo", lat: 33.08, lon: -89.86, type: "farm", size: 1 },
    { id: "RLLN", name: "Rolling Fork", county: "ms-issaquena-sharkey-warren", lat: 32.91, lon: -90.88, type: "farm", size: 1 },
    { id: "FUL", name: "Fulton", county: "ms-itawamba-prentiss", lat: 34.26, lon: -88.4, type: "farm", size: 1 },
    { id: "GTR", name: "Gautier", county: "ms-jackson", lat: 30.41, lon: -88.66, type: "coast", size: 1 },
    // Gulf Islands National Seashore: the Mississippi district's headquarters and Davis Bayou campground at Ocean Springs (the islands, Ship and Horn, lie out in the Sound).
    { id: "GINS", name: "Gulf Islands National Seashore", county: "ms-jackson", lat: 30.39, lon: -88.79, scenic: true, type: "coast", size: 1 },
    { id: "MOMS", name: "Monticello", county: "ms-jefferson-davis-lawrence-marion", lat: 31.55, lon: -90.12, type: "farm", size: 1 },
    { id: "ELLI", name: "Ellisville", county: "ms-jones", lat: 31.6, lon: -89.21, type: "farm", size: 1 },
    { id: "MCN", name: "Macon", county: "ms-kemper-noxubee-winston", lat: 33.12, lon: -88.56, type: "farm", size: 1 },
    { id: "DKLB", name: "De Kalb", county: "ms-kemper-noxubee-winston", lat: 32.77, lon: -88.66, type: "farm", size: 1 },
    { id: "SMRL", name: "Sumrall", county: "ms-lamar", lat: 31.42, lon: -89.54, type: "farm", size: 1 },
    { id: "MAMS", name: "Marion", county: "ms-lauderdale", lat: 32.43, lon: -88.65, type: "farm", size: 1 },
    { id: "CAMS", name: "Carthage", county: "ms-leake-neshoba", lat: 32.74, lon: -89.53, type: "farm", size: 1 },
    { id: "SLTL", name: "Saltillo", county: "ms-lee", lat: 34.38, lon: -88.7, type: "metro", size: 1 },
    // Baldwyn: nudged 1 km south to sit inside Lee (the town is on the Prentiss line).
    { id: "BLDW", name: "Baldwyn", county: "ms-lee", lat: 34.5, lon: -88.64, type: "farm", size: 1 },
    { id: "CALE", name: "Caledonia", county: "ms-lowndes", lat: 33.68, lon: -88.33, type: "farm", size: 1 },
    { id: "CAN", name: "Canton", county: "ms-madison", lat: 32.6, lon: -90.03, type: "farm", size: 1 },
    { id: "MORT", name: "Morton", county: "ms-newton-scott", lat: 32.35, lon: -89.66, type: "farm", size: 1 },
    { id: "NEMS", name: "Newton", county: "ms-newton-scott", lat: 32.33, lon: -89.15, type: "farm", size: 1 },
    { id: "MBN", name: "Maben", county: "ms-oktibbeha", lat: 33.55, lon: -89.08, type: "farm", size: 1 },
    { id: "BATE", name: "Batesville", county: "ms-panola-tate", lat: 34.32, lon: -89.92, type: "farm", size: 1 },
    { id: "PPLR", name: "Poplarville", county: "ms-pearl-river", lat: 30.84, lon: -89.53, type: "farm", size: 1 },
    { id: "TYLE", name: "Tylertown", county: "ms-pike-walthall", lat: 31.12, lon: -90.14, type: "farm", size: 1 },
    { id: "MAGN", name: "Magnolia", county: "ms-pike-walthall", lat: 31.16, lon: -90.47, type: "farm", size: 1 },
    { id: "PNTT", name: "Pontotoc", county: "ms-pontotoc-union", lat: 34.25, lon: -89.01, type: "farm", size: 1 },
    { id: "BRA", name: "Brandon", county: "ms-rankin", lat: 32.28, lon: -89.99, type: "metro", size: 2 },
    { id: "FLWD", name: "Flowood", county: "ms-rankin", lat: 32.34, lon: -90.07, type: "metro", size: 1 },
    { id: "LLND", name: "Leland", county: "ms-washington", lat: 33.4, lon: -90.89, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Jackson & the Capital Region",
      areas: ["jackson"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "The Delta, Natchez & the Southwest",
      areas: ["delta"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Jackson to Greenville, by Vicksburg and the US-61 Delta
        { kind: "connect", a: "JAN", b: "GRVM" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "The Pine Belt & the Gulf Coast",
      areas: ["gulf"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Hattiesburg to Gulfport, as US-49 runs
        { kind: "connect", a: "HTBG", b: "GPT" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "The Hills & the North",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Southaven to Tupelo, as US-78 and I-22 run (by Holly Springs and New Albany)
        { kind: "connect", a: "SOHV", b: "TUP" },
        { kind: "counties", target: 30 },
      ],
    },
  ],
  // Mississippi has no mountains on the map (its highest point, Woodall Mountain, is 806 ft), so no passes.
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river or lake where the real crossing is. Sources in NOTES.md.
  bridges: [
    // The Mississippi (matching Louisiana's and Arkansas's bridges)
    ["Vicksburg Bridge (I-20)", 32.33, -90.91],
    ["Natchez–Vidalia Bridge (US-84)", 31.57, -91.44],
    ["Greenville Bridge (US-82, Lake Village–Greenville)", 33.36, -91.15],
    ["Helena Bridge (US-49, Helena–Mississippi)", 34.51, -90.58],
    // The Pearl: Jackson, the Ross Barnett Reservoir, the Pine Belt and the Louisiana line
    ["Pearl River bridge (I-20, Jackson–Pearl)", 32.29, -90.17],
    ["Pearl River bridge (I-55, Jackson)", 32.27, -90.18],
    ["Ross Barnett Reservoir dam (Spillway Road)", 32.40, -90.06],
    ["Natchez Trace Parkway bridge (Pelahatchie Bay)", 32.51, -89.98],
    ["Pearl River bridge (US-84, Monticello)", 31.56, -90.09],
    ["Pearl River bridge (US-98, Columbia)", 31.24, -89.85],
    ["Pearl River bridge (I-59, Picayune–Slidell)", 30.48, -89.75],
    // The Yazoo, the Big Black and the Tombigbee
    ["Yazoo River bridge (US-82, Greenwood)", 33.53, -90.18],
    ["Yazoo River bridge (US-49, Yazoo City)", 32.86, -90.44],
    ["Big Black River bridge (I-20, Bovina)", 32.35, -90.68],
    ["Tombigbee River bridge (US-82, Columbus)", 33.48, -88.42],
    // The lakes on the Interstate lines
    ["I-55 bridge (Arkabutla Lake, Coldwater)", 34.72, -89.98],
    // The Gulf coast (US-90)
    ["Bay St. Louis Bridge (US-90)", 30.31, -89.31],
    ["Biloxi Bay Bridge (US-90, Biloxi–Ocean Springs)", 30.39, -88.85],
    ["Pascagoula River Bridge (US-90)", 30.36, -88.55],
  ],
  // Water that needs a bridge. The land inside a ring stays land: it is only the water between the
  // county shapes (here St. Louis Bay, between Bay St. Louis and Pass Christian).
  bays: [
    {
      name: "St. Louis Bay",
      ring: [-89.37, 30.28, -89.37, 30.38, -89.28, 30.38, -89.28, 30.28],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    // The Piney Woods of the Pine Belt and the Gulf coast plain (as Louisiana's Florida Parishes and Arkansas's
    // pine belt), and the Homochitto country of the south-west
    forest: ["ms-forrest", "ms-lamar", "ms-jones", "ms-george-stone", "ms-greene-perry-wayne", "ms-pearl-river", "ms-hancock", "ms-harrison", "ms-jackson", "ms-covington-simpson-smith", "ms-jefferson-davis-lawrence-marion", "ms-pike-walthall", "ms-clarke-jasper", "ms-amite-franklin-wilkinson"],
    // The hills: the north-east hills, the central hill country and the loess bluffs of the Natchez Trace
    wooded: ["ms-alcorn-tishomingo", "ms-benton-marshall-tippah", "ms-itawamba-prentiss", "ms-pontotoc-union", "ms-calhoun-chickasaw-webster", "ms-lafayette", "ms-panola-tate", "ms-grenada-yalobusha", "ms-attala-choctaw-montgomery", "ms-leake-neshoba", "ms-kemper-noxubee-winston", "ms-newton-scott", "ms-rankin", "ms-copiah-lincoln", "ms-adams-claiborne-jefferson"],
    // Not listed (farmland and grassland): the Delta's cotton, rice and soybeans, the Black Prairie (Columbus, Starkville, West Point), the Yazoo Basin and the Jackson suburbs. No `dry`: Mississippi has no desert.
  },
});
