// National Railways pack: South Dakota.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/SD/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/SD/raw.
NR.addPack({
  code: "SD",
  name: "South Dakota",
  // A game that starts here begins owning these counties (Sioux Falls, its south side and
  // Harrisburg, and Salem on I-90 to the west). All three touch each other. Harrisburg and Salem
  // are farm, so the first track (Sioux Falls–Harrisburg, the nearest pair) has riders.
  start: ["sd-minnehaha", "sd-lincoln", "sd-mccook-turner"],
  // Main stations: one per county region, at its biggest place, except Pine Ridge (explained
  // below). id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. airport = its name, if it has a big one. scenic = a place
  // tourists travel to. South Dakota has no seaport. Points are the Census points (each within
  // about 2 miles of downtown; NOTES.md).
  stations: [
    // Level 1: Sioux Falls and the southeast
    // Sioux Falls: South Dakota's biggest city, size 2 by its 197k (as Fargo, 185k).
    { id: "FSD", name: "Sioux Falls", county: "sd-minnehaha", lat: 43.54, lon: -96.73, airport: "Sioux Falls Regional", type: "metro", size: 2, pop: 197, main: true, level: "southeast" },
    // Harrisburg: Lincoln County's biggest town, a Sioux Falls suburb (Sioux Falls's south side
    // is in Lincoln County too). Typed by the rest of its county, the Big Sioux valley's farm
    // towns (Canton, Lennox, Worthing), so farm: the start then has riders on its first track
    // (Sioux Falls–Harrisburg, as Colorado types Lakewood mountain). Size 2 by the region's 65k
    // (as Minot, 70k).
    { id: "HBG", name: "Harrisburg", county: "sd-lincoln", lat: 43.43, lon: -96.71, type: "farm", size: 2, pop: 65, main: true, level: "southeast" },
    // Salem: the farm towns west of Sioux Falls on I-90.
    { id: "SLEM", name: "Salem", county: "sd-mccook-turner", lat: 43.72, lon: -97.39, type: "farm", size: 1, pop: 14, main: true, level: "southeast" },
    // Brookings: South Dakota State University, the land-grant college, in farm country on I-29.
    { id: "BKS", name: "Brookings", county: "sd-brookings-moody", lat: 44.3, lon: -96.79, type: "farm", size: 1, pop: 41, main: true, level: "southeast" },
    { id: "MDSN", name: "Madison", county: "sd-kingsbury-lake-miner", lat: 44.01, lon: -97.11, type: "farm", size: 1, pop: 19, main: true, level: "southeast" },
    // Vermillion: the University of South Dakota, on the Missouri bottoms.
    { id: "VRM", name: "Vermillion", county: "sd-clay-union", lat: 42.78, lon: -96.93, type: "farm", size: 1, pop: 32, main: true, level: "southeast" },
    // Yankton: on the Missouri below Gavins Point Dam.
    { id: "YKN", name: "Yankton", county: "sd-bon-homme-yankton", lat: 42.89, lon: -97.39, type: "farm", size: 1, pop: 30, main: true, level: "southeast" },
    // Level 2: the James River valley and the Glacial Lakes
    // Mitchell: the Corn Palace (a famous roadside sight, downtown), so scenic.
    { id: "MTCH", name: "Mitchell", county: "sd-davison-hanson-hutchinson", lat: 43.73, lon: -98.04, scenic: true, type: "farm", size: 1, pop: 31, main: true, level: "east" },
    { id: "WGN", name: "Wagner", county: "sd-charles-mix-douglas", lat: 43.08, lon: -98.29, type: "farm", size: 1, pop: 12, main: true, level: "east" },
    // Huron: on the James River and US-14.
    { id: "HON", name: "Huron", county: "sd-beadle-jerauld-sanborn", lat: 44.36, lon: -98.21, type: "farm", size: 1, pop: 23, main: true, level: "east" },
    // Watertown: the Glacial Lakes' town, on the Big Sioux and I-29.
    { id: "WTN", name: "Watertown", county: "sd-codington-deuel-hamlin", lat: 44.91, lon: -97.16, type: "farm", size: 1, pop: 39, main: true, level: "east" },
    { id: "MBK", name: "Milbank", county: "sd-day-grant", lat: 45.22, lon: -96.63, type: "farm", size: 1, pop: 13, main: true, level: "east" },
    // Sisseton: on I-29 below Lake Traverse; the Sisseton-Wahpeton Oyate's Lake Traverse Reservation.
    { id: "SISS", name: "Sisseton", county: "sd-marshall-roberts", lat: 45.66, lon: -97.05, type: "farm", size: 1, pop: 15, main: true, level: "east" },
    { id: "RDF", name: "Redfield", county: "sd-clark-faulk-spink", lat: 44.87, lon: -98.52, type: "farm", size: 1, pop: 12, main: true, level: "east" },
    // Aberdeen: South Dakota's third city (Northern State University), so metro (size 1 by its
    // 45k, as Gillette and Williston).
    { id: "ABR", name: "Aberdeen", county: "sd-brown-edmunds-mcpherson", lat: 45.46, lon: -98.47, type: "metro", size: 1, pop: 45, main: true, level: "east" },
    // Level 3: Pierre and the Missouri
    // Chamberlain: where I-90 crosses the Missouri (Lake Francis Case).
    { id: "CBN", name: "Chamberlain", county: "sd-aurora-brule-buffalo", lat: 43.8, lon: -99.33, type: "farm", size: 1, pop: 10, main: true, level: "missouri" },
    { id: "MILL", name: "Miller", county: "sd-hand-hyde", lat: 44.52, lon: -98.99, type: "farm", size: 1, pop: 4, main: true, level: "missouri" },
    // Pierre: the capital, on the Missouri below Oahe Dam, so metro (as Bismarck and Cheyenne),
    // size 1 by its 22k.
    { id: "PIR", name: "Pierre", county: "sd-hughes-potter-sully", lat: 44.38, lon: -100.32, type: "metro", size: 1, pop: 22, main: true, level: "missouri" },
    // Mobridge: on Lake Oahe, where US-12 and the old Milwaukee Road cross the Missouri.
    { id: "MBG", name: "Mobridge", county: "sd-campbell-walworth", lat: 45.54, lon: -100.43, type: "farm", size: 1, pop: 7, main: true, level: "missouri" },
    // Fort Pierre: Pierre's twin across the Missouri, and the ranches west of it, so farm (Pierre–Fort
    // Pierre has riders).
    { id: "FPR", name: "Fort Pierre", county: "sd-jones-lyman-stanley", lat: 44.37, lon: -100.38, type: "farm", size: 1, pop: 8, main: true, level: "missouri" },
    { id: "WNR", name: "Winner", county: "sd-gregory-tripp", lat: 43.38, lon: -99.86, type: "farm", size: 1, pop: 10, main: true, level: "missouri" },
    // Mission: the Rosebud Reservation's biggest town (Sinte Gleska University).
    { id: "MIS", name: "Mission", county: "sd-mellette-todd", lat: 43.31, lon: -100.66, type: "farm", size: 1, pop: 11, main: true, level: "missouri" },
    // Eagle Butte: the Cheyenne River Sioux Tribe's headquarters.
    { id: "EGB", name: "Eagle Butte", county: "sd-dewey-ziebach", lat: 44.99, lon: -101.23, type: "farm", size: 1, pop: 8, main: true, level: "missouri" },
    // Level 4: the Badlands and the Black Hills
    // Philip: on US-14 at the Badlands' north edge; dry short-grass and badlands, so desert (as
    // Dickinson and Bowman in North Dakota).
    { id: "PHP", name: "Philip", county: "sd-haakon-jackson", lat: 44.04, lon: -101.66, type: "desert", size: 1, pop: 5, main: true, level: "west" },
    // Pine Ridge, not Martin (933, the biggest place with a Census population): Pine Ridge is the
    // Oglala Sioux Tribe's capital and the region's biggest community (a CDP, so no population in
    // the data), and four in five of the region's people live in Oglala Lakota County (NOTES.md).
    // Badlands (the South Unit) and dry grassland, so desert.
    { id: "PRG", name: "Pine Ridge", county: "sd-bennett-oglala-lakota", lat: 43.03, lon: -102.55, type: "desert", size: 1, pop: 17, main: true, level: "west" },
    // Rapid City: South Dakota's second city, the Black Hills' gateway, size 2 by its 109k.
    { id: "RAP", name: "Rapid City", county: "sd-pennington", lat: 44.07, lon: -103.22, type: "metro", size: 2, pop: 109, main: true, level: "west" },
    // Sturgis: on I-90 at the Black Hills' northeast foot (the motorcycle rally); most of Meade
    // County is ranch land, so farm.
    { id: "STRG", name: "Sturgis", county: "sd-meade", lat: 44.41, lon: -103.5, type: "farm", size: 1, pop: 30, main: true, level: "west" },
    // Spearfish: the Northern Hills (Spearfish Canyon, Lead and Deadwood), so mountain.
    { id: "SPE", name: "Spearfish", county: "sd-butte-harding-lawrence", lat: 44.49, lon: -103.82, type: "mountain", size: 1, pop: 37, main: true, level: "west" },
    // Hot Springs: the southern Black Hills (Wind Cave, Custer State Park), so mountain.
    { id: "HOTS", name: "Hot Springs", county: "sd-custer-fall-river", lat: 43.42, lon: -103.47, type: "mountain", size: 1, pop: 15, main: true, level: "west" },
    // Lemmon: dry short-grass ranch country on the North Dakota line (as Bowman), so desert.
    { id: "LEM", name: "Lemmon", county: "sd-corson-perkins", lat: 45.94, lon: -102.16, type: "desert", size: 1, pop: 7, main: true, level: "west" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor center (sources in NOTES.md).
  towns: [
    // Sioux Falls and the southeast
    { id: "BRDN", name: "Brandon", county: "sd-minnehaha", lat: 43.59, lon: -96.58, type: "metro", size: 1 },
    { id: "DLR", name: "Dell Rapids", county: "sd-minnehaha", lat: 43.82, lon: -96.71, type: "farm", size: 1 },
    { id: "CNTN", name: "Canton", county: "sd-lincoln", lat: 43.3, lon: -96.59, type: "farm", size: 1 },
    { id: "LNX", name: "Lennox", county: "sd-lincoln", lat: 43.35, lon: -96.89, type: "farm", size: 1 },
    { id: "PRK", name: "Parker", county: "sd-mccook-turner", lat: 43.4, lon: -97.13, type: "farm", size: 1 },
    { id: "CNV", name: "Centerville", county: "sd-mccook-turner", lat: 43.12, lon: -96.96, type: "farm", size: 1 },
    { id: "FLN", name: "Flandreau", county: "sd-brookings-moody", lat: 44.05, lon: -96.6, type: "farm", size: 1 },
    // De Smet: Laura Ingalls Wilder's "Little Town on the Prairie" (the Ingalls Homestead).
    { id: "DSM", name: "De Smet", county: "sd-kingsbury-lake-miner", lat: 44.39, lon: -97.55, scenic: true, type: "farm", size: 1 },
    { id: "HWD", name: "Howard", county: "sd-kingsbury-lake-miner", lat: 44.01, lon: -97.52, type: "farm", size: 1 },
    // North Sioux City: I-29's crossing to Sioux City, Iowa.
    { id: "NSC", name: "North Sioux City", county: "sd-clay-union", lat: 42.53, lon: -96.5, type: "metro", size: 1 },
    { id: "BRSF", name: "Beresford", county: "sd-clay-union", lat: 43.08, lon: -96.78, type: "farm", size: 1 },
    { id: "SPGF", name: "Springfield", county: "sd-bon-homme-yankton", lat: 42.86, lon: -97.9, type: "farm", size: 1 },
    { id: "SCOT", name: "Scotland", county: "sd-bon-homme-yankton", lat: 43.15, lon: -97.72, type: "farm", size: 1 },
    // The James River valley and the Glacial Lakes
    { id: "PKST", name: "Parkston", county: "sd-davison-hanson-hutchinson", lat: 43.39, lon: -97.99, type: "farm", size: 1 },
    { id: "FRMN", name: "Freeman", county: "sd-davison-hanson-hutchinson", lat: 43.35, lon: -97.43, type: "farm", size: 1 },
    // Platte: on Lake Francis Case's east shore, at the Platte–Winner Bridge's east end.
    { id: "PLT", name: "Platte", county: "sd-charles-mix-douglas", lat: 43.39, lon: -98.84, type: "farm", size: 1 },
    // Pickstown: Fort Randall Dam's town, where US-18/281 cross the Missouri on the dam.
    { id: "PKT", name: "Pickstown", county: "sd-charles-mix-douglas", lat: 43.07, lon: -98.53, type: "farm", size: 1 },
    { id: "WSPR", name: "Wessington Springs", county: "sd-beadle-jerauld-sanborn", lat: 44.08, lon: -98.57, type: "farm", size: 1 },
    { id: "WSKT", name: "Woonsocket", county: "sd-beadle-jerauld-sanborn", lat: 44.05, lon: -98.27, type: "farm", size: 1 },
    { id: "CLRL", name: "Clear Lake", county: "sd-codington-deuel-hamlin", lat: 44.76, lon: -96.69, type: "farm", size: 1 },
    { id: "ESTL", name: "Estelline", county: "sd-codington-deuel-hamlin", lat: 44.58, lon: -96.9, type: "farm", size: 1 },
    { id: "WBS", name: "Webster", county: "sd-day-grant", lat: 45.34, lon: -97.52, type: "farm", size: 1 },
    // Big Stone City: on Big Stone Lake, across from Ortonville, Minnesota (US-12).
    { id: "BSC", name: "Big Stone City", county: "sd-day-grant", lat: 45.31, lon: -96.47, type: "farm", size: 1 },
    { id: "BRIT", name: "Britton", county: "sd-marshall-roberts", lat: 45.79, lon: -97.75, type: "farm", size: 1 },
    { id: "CLRK", name: "Clark", county: "sd-clark-faulk-spink", lat: 44.88, lon: -97.73, type: "farm", size: 1 },
    { id: "FKT", name: "Faulkton", county: "sd-clark-faulk-spink", lat: 45.03, lon: -99.13, type: "farm", size: 1 },
    { id: "GRTN", name: "Groton", county: "sd-brown-edmunds-mcpherson", lat: 45.45, lon: -98.1, type: "farm", size: 1 },
    { id: "IPS", name: "Ipswich", county: "sd-brown-edmunds-mcpherson", lat: 45.44, lon: -99.03, type: "farm", size: 1 },
    // Pierre and the Missouri
    { id: "PLK", name: "Plankinton", county: "sd-aurora-brule-buffalo", lat: 43.72, lon: -98.48, type: "farm", size: 1 },
    // Fort Thompson: the Crow Creek Sioux Tribe's town, at Big Bend Dam.
    { id: "FTT", name: "Fort Thompson", county: "sd-aurora-brule-buffalo", lat: 44.05, lon: -99.4, type: "farm", size: 1 },
    { id: "HMR", name: "Highmore", county: "sd-hand-hyde", lat: 44.52, lon: -99.44, type: "farm", size: 1 },
    { id: "GTB", name: "Gettysburg", county: "sd-hughes-potter-sully", lat: 45.01, lon: -99.95, type: "farm", size: 1 },
    { id: "OND", name: "Onida", county: "sd-hughes-potter-sully", lat: 44.7, lon: -100.07, type: "farm", size: 1 },
    // Herreid: on US-83 toward Linton, North Dakota.
    { id: "HERR", name: "Herreid", county: "sd-campbell-walworth", lat: 45.84, lon: -100.07, type: "farm", size: 1 },
    { id: "MRDO", name: "Murdo", county: "sd-jones-lyman-stanley", lat: 43.89, lon: -100.71, type: "farm", size: 1 },
    { id: "PRSH", name: "Presho", county: "sd-jones-lyman-stanley", lat: 43.91, lon: -100.06, type: "farm", size: 1 },
    { id: "GRGY", name: "Gregory", county: "sd-gregory-tripp", lat: 43.23, lon: -99.42, type: "farm", size: 1 },
    { id: "WRV", name: "White River", county: "sd-mellette-todd", lat: 43.57, lon: -100.74, type: "farm", size: 1 },
    // Rosebud: the Rosebud Sioux Tribe's headquarters.
    { id: "RSBD", name: "Rosebud", county: "sd-mellette-todd", lat: 43.24, lon: -100.82, type: "farm", size: 1 },
    { id: "TBL", name: "Timber Lake", county: "sd-dewey-ziebach", lat: 45.43, lon: -101.07, type: "farm", size: 1 },
    { id: "DUPR", name: "Dupree", county: "sd-dewey-ziebach", lat: 45.05, lon: -101.6, type: "farm", size: 1 },
    // The Badlands and the Black Hills
    { id: "KDK", name: "Kadoka", county: "sd-haakon-jackson", lat: 43.83, lon: -101.5, type: "desert", size: 1 },
    // Badlands National Park: at the Ben Reifel Visitor Center at Cedar Pass, by Interior.
    { id: "BADL", name: "Badlands National Park", county: "sd-haakon-jackson", lat: 43.75, lon: -101.94, scenic: true, type: "desert", size: 1 },
    { id: "MRTN", name: "Martin", county: "sd-bennett-oglala-lakota", lat: 43.17, lon: -101.73, type: "farm", size: 1 },
    { id: "WKN", name: "Wounded Knee", county: "sd-bennett-oglala-lakota", lat: 43.14, lon: -102.37, type: "desert", size: 1 },
    // Box Elder: Ellsworth Air Force Base's town, on I-90 east of Rapid City.
    { id: "BXE", name: "Box Elder", county: "sd-pennington", lat: 44.11, lon: -103.08, type: "metro", size: 1 },
    // Wall: Wall Drug, on I-90 at the Badlands' north entrance.
    { id: "WALL", name: "Wall", county: "sd-pennington", lat: 43.99, lon: -102.24, type: "desert", size: 1 },
    // Mount Rushmore National Memorial: at the memorial, above Keystone.
    { id: "RUSH", name: "Mount Rushmore", county: "sd-pennington", lat: 43.88, lon: -103.46, scenic: true, type: "mountain", size: 1 },
    { id: "SMST", name: "Summerset", county: "sd-meade", lat: 44.19, lon: -103.34, type: "metro", size: 1 },
    { id: "FTH", name: "Faith", county: "sd-meade", lat: 45.03, lon: -102.04, type: "farm", size: 1 },
    // Deadwood: the gold-rush town (a National Historic Landmark), next to Lead.
    { id: "DWD", name: "Deadwood", county: "sd-butte-harding-lawrence", lat: 44.39, lon: -103.72, scenic: true, type: "mountain", size: 1 },
    // Spearfish Canyon: at Savoy (Roughlock Falls), midway up the canyon on US-14A (approx.).
    { id: "SPC", name: "Spearfish Canyon", county: "sd-butte-harding-lawrence", lat: 44.36, lon: -103.95, scenic: true, type: "mountain", size: 1 },
    { id: "BLF", name: "Belle Fourche", county: "sd-butte-harding-lawrence", lat: 44.66, lon: -103.86, type: "farm", size: 1 },
    // Buffalo: on US-85 toward Bowman, North Dakota.
    { id: "BFLO", name: "Buffalo", county: "sd-butte-harding-lawrence", lat: 45.59, lon: -103.54, type: "desert", size: 1 },
    { id: "MCL", name: "McLaughlin", county: "sd-corson-perkins", lat: 45.81, lon: -100.81, type: "farm", size: 1 },
    { id: "BSN", name: "Bison", county: "sd-corson-perkins", lat: 45.52, lon: -102.47, type: "desert", size: 1 },
    { id: "CSTR", name: "Custer", county: "sd-custer-fall-river", lat: 43.77, lon: -103.6, type: "mountain", size: 1 },
    // Crazy Horse Memorial: the mountain carving, north of Custer on US-16/385.
    { id: "CRZ", name: "Crazy Horse Memorial", county: "sd-custer-fall-river", lat: 43.84, lon: -103.62, scenic: true, type: "mountain", size: 1 },
    // Custer State Park: at the State Game Lodge on US-16A (approx.).
    { id: "CSTP", name: "Custer State Park", county: "sd-custer-fall-river", lat: 43.76, lon: -103.36, scenic: true, type: "mountain", size: 1 },
    // Wind Cave National Park: at the visitor center, north of Hot Springs on US-385.
    { id: "WCV", name: "Wind Cave", county: "sd-custer-fall-river", lat: 43.56, lon: -103.48, scenic: true, type: "mountain", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Sioux Falls & the Southeast",
      areas: ["southeast"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "The James River & the Glacial Lakes",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Sioux Falls to Aberdeen, the state's first and third cities
        { kind: "connect", a: "FSD", b: "ABR" },
        { kind: "counties", target: 10 },
      ],
    },
    {
      name: "Pierre & the Missouri",
      areas: ["missouri"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Sioux Falls to the capital
        { kind: "connect", a: "FSD", b: "PIR" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "The Badlands & the Black Hills",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Across the state, as I-90 runs
        { kind: "connect", a: "FSD", b: "RAP" },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. South Dakota's map has no
  // mountains (the Black Hills are hills on its grid), so no link needs one (NOTES.md).
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow
  // enough. Placed on the map's river or lake where it passes the town. Sources in NOTES.md.
  bridges: [
    // The Missouri and its reservoirs (Lake Oahe, Lake Francis Case)
    ["Missouri River bridge (Mobridge, US-12)", 45.54, -100.46],
    ["US-212 bridge over Lake Oahe (Forest City)", 45.0, -100.35], // between the map's two arms of the lake here
    ["Missouri River bridges (Pierre–Fort Pierre)", 44.37, -100.35], // US-14/83 and the railway
    ["Big Bend Dam (SD-47)", 44.05, -99.45], // Fort Thompson to Lower Brule
    ["Missouri River bridge (Chamberlain, I-90)", 43.79, -99.35],
    ["Platte–Winner Bridge (SD-44)", 43.38, -99.1], // over Lake Francis Case
    ["Fort Randall Dam (US-18/281)", 43.06, -98.55],
    ["Discovery Bridge (US-81, Yankton)", 42.87, -97.39],
    ["Vermillion–Newcastle Bridge (SD-19)", 42.74, -96.93],
    // The Big Sioux: it loops around Sioux Falls (west, south, then north through downtown and
    // Falls Park), so three points on the map's river there
    ["Big Sioux River bridges (downtown Sioux Falls)", 43.55, -96.72],
    ["Big Sioux River bridges (west Sioux Falls)", 43.56, -96.77],
    ["Big Sioux River bridges (south Sioux Falls)", 43.51, -96.74],
    ["Big Sioux River bridge (US-14, Brookings)", 44.3, -96.87],
    ["Big Sioux River bridges (Watertown)", 44.92, -97.14],
    // The James
    ["James River bridge (I-90, Mitchell)", 43.71, -97.97],
    ["James River bridges (Huron)", 44.36, -98.19],
    ["James River bridge (US-12, Aberdeen)", 45.45, -98.26],
    // West River: the Cheyenne, the White and the Belle Fourche
    ["Cheyenne River bridge (I-90, Wasta)", 44.04, -102.45],
    ["White River bridge (US-83)", 43.72, -100.73],
    ["Belle Fourche River bridge (US-85, Belle Fourche)", 44.67, -103.85],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The Black Hills' ponderosa pine (as Wyoming's Crook-Weston): trees on the hills only
    wooded: ["sd-butte-harding-lawrence", "sd-custer-fall-river", "sd-meade", "sd-pennington"],
    // The Badlands and dry short-grass rangeland (as North Dakota's Adams-Bowman-Slope and
    // Montana's Carter-Fallon across the line)
    dry: ["sd-bennett-oglala-lakota", "sd-corson-perkins", "sd-haakon-jackson"],
    // Not listed (farmland and grassland): East River's farms and the rest of West River's
    // mixed-grass rangeland (Dewey-Ziebach, Jones-Lyman-Stanley, Mellette-Todd, Gregory-Tripp).
  },
});
