// National Railways pack: Nebraska.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/NE/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/NE/raw.
NR.addPack({
  code: "NE",
  name: "Nebraska",
  // A game that starts here begins owning these counties (Omaha, Bellevue, and Blair up the
  // Missouri). Sarpy and Washington both touch Douglas. Blair is farm, so the first track
  // (Omaha–Blair, the nearest pair of different types) has riders.
  start: ["ne-douglas", "ne-sarpy", "ne-burt-washington"],
  // Main stations: one per county region, at its biggest place (every one is; no exceptions).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. airport = its name, if it has a big one. scenic = a place
  // tourists travel to. Nebraska has no seaport. Points are the Census points, except Omaha's
  // (moved to downtown: NOTES.md).
  stations: [
    // Level 1: Omaha, Lincoln and the Missouri
    // Omaha: Nebraska's biggest city, size 4 (as Spokane and Reno). Eppley Airfield is the
    // state's one big airport. At downtown (the Old Market, by the Missouri); the Census point is
    // 6 miles west.
    { id: "OMA", name: "Omaha", county: "ne-douglas", lat: 41.26, lon: -95.94, airport: "Eppley Airfield", type: "metro", size: 4, pop: 585, main: true, level: "east" },
    // Bellevue: Sarpy County's biggest city (Offutt Air Force Base), Omaha's south side, size 2.
    { id: "BELV", name: "Bellevue", county: "ne-sarpy", lat: 41.16, lon: -95.9, type: "metro", size: 2, pop: 191, main: true, level: "east" },
    // Lincoln: the capital and the University of Nebraska, size 3 (as Boulder and Eugene).
    { id: "LNK", name: "Lincoln", county: "ne-lancaster", lat: 40.81, lon: -96.68, type: "metro", size: 3, pop: 323, main: true, level: "east" },
    // Blair: up the Missouri on US-75, among Washington and Burt counties' farms.
    { id: "BLR", name: "Blair", county: "ne-burt-washington", lat: 41.54, lon: -96.14, type: "farm", size: 1, pop: 28, main: true, level: "east" },
    // Wahoo: the farm towns south of the Platte west of Omaha (Ashland, David City).
    { id: "WAHO", name: "Wahoo", county: "ne-butler-saunders", lat: 41.22, lon: -96.62, type: "farm", size: 1, pop: 31, main: true, level: "east" },
    // Fremont: on the Platte and the Union Pacific, in the Elkhorn valley's farms, so farm.
    { id: "FRMT", name: "Fremont", county: "ne-cuming-dodge", lat: 41.44, lon: -96.49, type: "farm", size: 1, pop: 46, main: true, level: "east" },
    // Seward: on I-80 and the Big Blue, west of Lincoln (Crete, as big, is a town).
    { id: "SWD", name: "Seward", county: "ne-saline-seward", lat: 40.91, lon: -97.1, type: "farm", size: 1, pop: 32, main: true, level: "east" },
    // Nebraska City: Arbor Day's home (Arbor Lodge and the Arbor Day Farm, on its west side), so
    // scenic.
    { id: "NEBC", name: "Nebraska City", county: "ne-cass-otoe", lat: 40.68, lon: -95.86, scenic: true, type: "farm", size: 1, pop: 43, main: true, level: "east" },
    { id: "AUBN", name: "Auburn", county: "ne-johnson-nemaha", lat: 40.39, lon: -95.84, type: "farm", size: 1, pop: 12, main: true, level: "east" },
    { id: "FCY", name: "Falls City", county: "ne-pawnee-richardson", lat: 40.06, lon: -95.6, type: "farm", size: 1, pop: 10, main: true, level: "east" },
    // Beatrice: on the Big Blue and US-77, south of Lincoln.
    { id: "BEA", name: "Beatrice", county: "ne-gage-jefferson", lat: 40.27, lon: -96.75, type: "farm", size: 1, pop: 29, main: true, level: "east" },
    // Level 2: the Platte and the northeast
    // Columbus: where the Loup meets the Platte, on US-30, US-81 and the Union Pacific.
    { id: "COLU", name: "Columbus", county: "ne-colfax-platte", lat: 41.44, lon: -97.36, type: "farm", size: 1, pop: 45, main: true, level: "platte" },
    { id: "YORK", name: "York", county: "ne-polk-york", lat: 40.87, lon: -97.59, type: "farm", size: 1, pop: 19, main: true, level: "platte" },
    { id: "AURO", name: "Aurora", county: "ne-hamilton-merrick", lat: 40.86, lon: -98.01, type: "farm", size: 1, pop: 17, main: true, level: "platte" },
    // Grand Island: Nebraska's fourth city, size 2 by its 63k (as Minot, 70k).
    { id: "GRI", name: "Grand Island", county: "ne-hall", lat: 40.92, lon: -98.36, type: "metro", size: 2, pop: 63, main: true, level: "platte" },
    // Hastings: on the BNSF (the California Zephyr's stop) amid farms, so farm.
    { id: "HSI", name: "Hastings", county: "ne-adams-clay", lat: 40.6, lon: -98.39, type: "farm", size: 1, pop: 37, main: true, level: "platte" },
    { id: "GENV", name: "Geneva", county: "ne-fillmore-thayer", lat: 40.53, lon: -97.6, type: "farm", size: 1, pop: 11, main: true, level: "platte" },
    // Norfolk: northeast Nebraska's city, so metro (size 1 by its 49k, as Aberdeen).
    { id: "NFK", name: "Norfolk", county: "ne-madison-pierce-stanton", lat: 42.03, lon: -97.43, type: "metro", size: 1, pop: 49, main: true, level: "platte" },
    // South Sioux City: the Nebraska side of Sioux City, so metro (as North Sioux City).
    { id: "SSC", name: "South Sioux City", county: "ne-dakota-dixon-thurston", lat: 42.46, lon: -96.41, type: "metro", size: 1, pop: 34, main: true, level: "platte" },
    // Wayne: Wayne State College, in farm country.
    { id: "WAYN", name: "Wayne", county: "ne-cedar-wayne", lat: 42.24, lon: -97.01, type: "farm", size: 1, pop: 18, main: true, level: "platte" },
    { id: "NLG", name: "Neligh", county: "ne-antelope-knox", lat: 42.13, lon: -98.03, type: "farm", size: 1, pop: 15, main: true, level: "platte" },
    { id: "ALBN", name: "Albion", county: "ne-boone-nance", lat: 41.69, lon: -98.0, type: "farm", size: 1, pop: 9, main: true, level: "platte" },
    // Level 3: Kearney, the Republican and the Loups
    // Kearney: the University of Nebraska at Kearney, so metro (size 1 by its 50k, as Aberdeen).
    // The Great Platte River Road Archway spans I-80 at its east edge, so scenic.
    { id: "KRN", name: "Kearney", county: "ne-buffalo", lat: 40.7, lon: -99.08, scenic: true, type: "metro", size: 1, pop: 50, main: true, level: "central" },
    // Holdrege: the California Zephyr's stop between Hastings and McCook.
    { id: "HDE", name: "Holdrege", county: "ne-harlan-kearney-phelps", lat: 40.44, lon: -99.38, type: "farm", size: 1, pop: 19, main: true, level: "central" },
    { id: "SUPR", name: "Superior", county: "ne-franklin-nuckolls-webster", lat: 40.02, lon: -98.06, type: "farm", size: 1, pop: 10, main: true, level: "central" },
    // Lexington: on I-80 and the Union Pacific (meatpacking and farms).
    { id: "LXN", name: "Lexington", county: "ne-dawson-gosper", lat: 40.78, lon: -99.75, type: "farm", size: 1, pop: 26, main: true, level: "central" },
    { id: "CAMB", name: "Cambridge", county: "ne-frontier-furnas", lat: 40.28, lon: -100.17, type: "farm", size: 1, pop: 7, main: true, level: "central" },
    { id: "STPA", name: "St. Paul", county: "ne-greeley-howard-sherman", lat: 41.21, lon: -98.46, type: "farm", size: 1, pop: 12, main: true, level: "central" },
    { id: "ORDN", name: "Ord", county: "ne-garfield-valley-wheeler", lat: 41.6, lon: -98.92, type: "farm", size: 1, pop: 7, main: true, level: "central" },
    // Broken Bow: the cattle country where the Sandhills begin, on NE-2 and the BNSF.
    { id: "BBW", name: "Broken Bow", county: "ne-blaine-custer-loup", lat: 41.41, lon: -99.64, type: "farm", size: 1, pop: 12, main: true, level: "central" },
    { id: "ONL", name: "O'Neill", county: "ne-boyd-holt", lat: 42.46, lon: -98.65, type: "farm", size: 1, pop: 12, main: true, level: "central" },
    { id: "ANW", name: "Ainsworth", county: "ne-brown-keya-paha-rock", lat: 42.55, lon: -99.86, type: "farm", size: 1, pop: 5, main: true, level: "central" },
    // Level 4: North Platte, the Sandhills and the Panhandle
    // North Platte: the railroad city (the Union Pacific's Bailey Yard) where the North and South
    // Platte meet, so metro (size 1 by its 36k).
    { id: "NPLT", name: "North Platte", county: "ne-lincoln-logan-mcpherson", lat: 41.13, lon: -100.76, type: "metro", size: 1, pop: 36, main: true, level: "west" },
    { id: "MCCK", name: "McCook", county: "ne-dundy-hitchcock-red-willow", lat: 40.2, lon: -100.62, type: "farm", size: 1, pop: 15, main: true, level: "west" },
    { id: "IML", name: "Imperial", county: "ne-chase-hayes-perkins", lat: 40.51, lon: -101.64, type: "farm", size: 1, pop: 8, main: true, level: "west" },
    { id: "OGA", name: "Ogallala", county: "ne-arthur-garden-keith", lat: 41.13, lon: -101.72, type: "farm", size: 1, pop: 11, main: true, level: "west" },
    { id: "SIDN", name: "Sidney", county: "ne-cheyenne-deuel-kimball", lat: 41.13, lon: -102.97, type: "farm", size: 1, pop: 15, main: true, level: "west" },
    // Scottsbluff: the Panhandle's city (with Gering across the North Platte), so metro.
    { id: "SBF", name: "Scottsbluff", county: "ne-banner-morrill-scotts-bluff", lat: 41.87, lon: -103.66, type: "metro", size: 1, pop: 41, main: true, level: "west" },
    // Alliance: the BNSF's coal-train town on the High Plains. Carhenge stands 3 miles north of
    // downtown, so scenic.
    { id: "ALLI", name: "Alliance", county: "ne-box-butte-sioux", lat: 42.1, lon: -102.88, scenic: true, type: "farm", size: 1, pop: 12, main: true, level: "west" },
    // Chadron: Chadron State College, under the Pine Ridge.
    { id: "CDR", name: "Chadron", county: "ne-dawes-sheridan", lat: 42.83, lon: -103.0, type: "farm", size: 1, pop: 13, main: true, level: "west" },
    // Valentine: the Sandhills' ranch town on the Niobrara, where US-20 meets US-83.
    { id: "VTN", name: "Valentine", county: "ne-cherry", lat: 42.88, lon: -100.55, type: "farm", size: 1, pop: 5, main: true, level: "west" },
    { id: "MUL", name: "Mullen", county: "ne-grant-hooker-thomas", lat: 42.04, lon: -101.04, type: "farm", size: 1, pop: 2, main: true, level: "west" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor center (sources in NOTES.md).
  towns: [
    // Omaha, Lincoln and the Missouri
    { id: "RLST", name: "Ralston", county: "ne-douglas", lat: 41.2, lon: -96.04, type: "metro", size: 1 },
    // Valley: on the Platte at Omaha's west edge.
    { id: "VLLY", name: "Valley", county: "ne-douglas", lat: 41.31, lon: -96.36, type: "farm", size: 1 },
    { id: "PAPL", name: "Papillion", county: "ne-sarpy", lat: 41.14, lon: -96.08, type: "metro", size: 2 },
    // Gretna: where I-80 crosses the Platte toward Lincoln.
    { id: "GRTA", name: "Gretna", county: "ne-sarpy", lat: 41.13, lon: -96.2, type: "metro", size: 1 },
    { id: "WAVR", name: "Waverly", county: "ne-lancaster", lat: 40.91, lon: -96.53, type: "metro", size: 1 },
    { id: "HICK", name: "Hickman", county: "ne-lancaster", lat: 40.63, lon: -96.63, type: "farm", size: 1 },
    { id: "TKMH", name: "Tekamah", county: "ne-burt-washington", lat: 41.78, lon: -96.22, type: "farm", size: 1 },
    { id: "DVCY", name: "David City", county: "ne-butler-saunders", lat: 41.25, lon: -97.13, type: "farm", size: 1 },
    { id: "ASHL", name: "Ashland", county: "ne-butler-saunders", lat: 41.04, lon: -96.37, type: "farm", size: 1 },
    { id: "WSTP", name: "West Point", county: "ne-cuming-dodge", lat: 41.84, lon: -96.71, type: "farm", size: 1 },
    { id: "CRTE", name: "Crete", county: "ne-saline-seward", lat: 40.62, lon: -96.95, type: "farm", size: 1 },
    { id: "WLBR", name: "Wilber", county: "ne-saline-seward", lat: 40.48, lon: -96.96, type: "farm", size: 1 },
    // Plattsmouth: the old river town at the Platte's mouth.
    { id: "PLTM", name: "Plattsmouth", county: "ne-cass-otoe", lat: 41.01, lon: -95.89, type: "farm", size: 1 },
    { id: "SYRC", name: "Syracuse", county: "ne-cass-otoe", lat: 40.66, lon: -96.18, type: "farm", size: 1 },
    { id: "TCMS", name: "Tecumseh", county: "ne-johnson-nemaha", lat: 40.37, lon: -96.19, type: "farm", size: 1 },
    { id: "PWNC", name: "Pawnee City", county: "ne-pawnee-richardson", lat: 40.11, lon: -96.15, type: "farm", size: 1 },
    { id: "FRBY", name: "Fairbury", county: "ne-gage-jefferson", lat: 40.14, lon: -97.18, type: "farm", size: 1 },
    // Homestead National Historical Park: where the Homestead Act's first claim was filed, at the
    // Heritage Center west of Beatrice (approx.).
    { id: "HMST", name: "Homestead National Historical Park", county: "ne-gage-jefferson", lat: 40.29, lon: -96.83, scenic: true, type: "farm", size: 1 },
    // The Platte and the northeast
    { id: "SCHY", name: "Schuyler", county: "ne-colfax-platte", lat: 41.45, lon: -97.06, type: "farm", size: 1 },
    { id: "STRM", name: "Stromsburg", county: "ne-polk-york", lat: 41.12, lon: -97.59, type: "farm", size: 1 },
    { id: "CNCY", name: "Central City", county: "ne-hamilton-merrick", lat: 41.11, lon: -98.0, type: "farm", size: 1 },
    { id: "WDRV", name: "Wood River", county: "ne-hall", lat: 40.82, lon: -98.6, type: "farm", size: 1 },
    { id: "SUTN", name: "Sutton", county: "ne-adams-clay", lat: 40.61, lon: -97.86, type: "farm", size: 1 },
    { id: "HEBR", name: "Hebron", county: "ne-fillmore-thayer", lat: 40.17, lon: -97.59, type: "farm", size: 1 },
    { id: "MADI", name: "Madison", county: "ne-madison-pierce-stanton", lat: 41.83, lon: -97.46, type: "farm", size: 1 },
    { id: "PIRC", name: "Pierce", county: "ne-madison-pierce-stanton", lat: 42.2, lon: -97.53, type: "farm", size: 1 },
    { id: "WKFD", name: "Wakefield", county: "ne-dakota-dixon-thurston", lat: 42.27, lon: -96.86, type: "farm", size: 1 },
    // Winnebago: the Winnebago Tribe's town, on US-75/77 south of South Sioux City.
    { id: "WNBG", name: "Winnebago", county: "ne-dakota-dixon-thurston", lat: 42.24, lon: -96.47, type: "farm", size: 1 },
    { id: "HRTN", name: "Hartington", county: "ne-cedar-wayne", lat: 42.62, lon: -97.27, type: "farm", size: 1 },
    { id: "CRTN", name: "Creighton", county: "ne-antelope-knox", lat: 42.46, lon: -97.91, type: "farm", size: 1 },
    // Crofton: above Lewis and Clark Lake, across the Missouri from Yankton.
    { id: "CRFT", name: "Crofton", county: "ne-antelope-knox", lat: 42.73, lon: -97.5, type: "farm", size: 1 },
    { id: "FULL", name: "Fullerton", county: "ne-boone-nance", lat: 41.37, lon: -97.97, type: "farm", size: 1 },
    // Kearney, the Republican and the Loups
    { id: "GIBB", name: "Gibbon", county: "ne-buffalo", lat: 40.75, lon: -98.85, type: "farm", size: 1 },
    // Rowe Sanctuary: Audubon's sandhill crane refuge on the Platte, south of Gibbon, where half a
    // million cranes gather each March (approx.).
    { id: "ROWE", name: "Rowe Sanctuary", county: "ne-buffalo", lat: 40.67, lon: -98.89, scenic: true, type: "farm", size: 1 },
    { id: "MNDN", name: "Minden", county: "ne-harlan-kearney-phelps", lat: 40.5, lon: -98.97, type: "farm", size: 1 },
    // Alma: on Harlan County Lake.
    { id: "ALMA", name: "Alma", county: "ne-harlan-kearney-phelps", lat: 40.1, lon: -99.37, type: "farm", size: 1 },
    // Red Cloud: Willa Cather's hometown.
    { id: "RDCL", name: "Red Cloud", county: "ne-franklin-nuckolls-webster", lat: 40.09, lon: -98.52, type: "farm", size: 1 },
    { id: "COZD", name: "Cozad", county: "ne-dawson-gosper", lat: 40.86, lon: -99.99, type: "farm", size: 1 },
    { id: "GOTH", name: "Gothenburg", county: "ne-dawson-gosper", lat: 40.92, lon: -100.15, type: "farm", size: 1 },
    { id: "CRTS", name: "Curtis", county: "ne-frontier-furnas", lat: 40.63, lon: -100.51, type: "farm", size: 1 },
    { id: "LPCY", name: "Loup City", county: "ne-greeley-howard-sherman", lat: 41.28, lon: -98.97, type: "farm", size: 1 },
    { id: "BRWL", name: "Burwell", county: "ne-garfield-valley-wheeler", lat: 41.78, lon: -99.13, type: "farm", size: 1 },
    { id: "ARNO", name: "Arnold", county: "ne-blaine-custer-loup", lat: 41.42, lon: -100.19, type: "farm", size: 1 },
    { id: "TAYL", name: "Taylor", county: "ne-blaine-custer-loup", lat: 41.77, lon: -99.38, type: "farm", size: 1 },
    { id: "ATKN", name: "Atkinson", county: "ne-boyd-holt", lat: 42.53, lon: -98.97, type: "farm", size: 1 },
    // Spencer: on US-281 north of the Niobrara, toward South Dakota.
    { id: "SPCR", name: "Spencer", county: "ne-boyd-holt", lat: 42.88, lon: -98.7, type: "farm", size: 1 },
    { id: "BSST", name: "Bassett", county: "ne-brown-keya-paha-rock", lat: 42.58, lon: -99.54, type: "farm", size: 1 },
    { id: "SPVW", name: "Springview", county: "ne-brown-keya-paha-rock", lat: 42.82, lon: -99.75, type: "farm", size: 1 },
    // North Platte, the Sandhills and the Panhandle
    { id: "STHL", name: "Sutherland", county: "ne-lincoln-logan-mcpherson", lat: 41.16, lon: -101.12, type: "farm", size: 1 },
    { id: "STPL", name: "Stapleton", county: "ne-lincoln-logan-mcpherson", lat: 41.48, lon: -100.51, type: "farm", size: 1 },
    { id: "BNKL", name: "Benkelman", county: "ne-dundy-hitchcock-red-willow", lat: 40.05, lon: -101.54, type: "farm", size: 1 },
    { id: "TRNT", name: "Trenton", county: "ne-dundy-hitchcock-red-willow", lat: 40.17, lon: -101.01, type: "farm", size: 1 },
    // Grant: Perkins County's seat (not in Grant County).
    { id: "GRNT", name: "Grant", county: "ne-chase-hayes-perkins", lat: 40.84, lon: -101.73, type: "farm", size: 1 },
    { id: "OSHK", name: "Oshkosh", county: "ne-arthur-garden-keith", lat: 41.41, lon: -102.35, type: "farm", size: 1 },
    // Lake McConaughy: Nebraska's biggest lake, with white-sand beaches, at the visitor center by
    // Kingsley Dam (approx.). A beach resort, so coast (as Manitoba types Gimli).
    { id: "LKMC", name: "Lake McConaughy", county: "ne-arthur-garden-keith", lat: 41.21, lon: -101.67, scenic: true, type: "coast", size: 1 },
    { id: "KMBL", name: "Kimball", county: "ne-cheyenne-deuel-kimball", lat: 41.23, lon: -103.65, type: "farm", size: 1 },
    { id: "CHPL", name: "Chappell", county: "ne-cheyenne-deuel-kimball", lat: 41.09, lon: -102.47, type: "farm", size: 1 },
    { id: "BRPT", name: "Bridgeport", county: "ne-banner-morrill-scotts-bluff", lat: 41.66, lon: -103.1, type: "farm", size: 1 },
    // Chimney Rock and Scotts Bluff: the Oregon Trail's landmarks, eroded bluffs over the North
    // Platte valley, so desert (as South Dakota's Badlands). At the visitor centers (approx.).
    { id: "CHRK", name: "Chimney Rock", county: "ne-banner-morrill-scotts-bluff", lat: 41.7, lon: -103.35, scenic: true, type: "desert", size: 1 },
    { id: "SBNM", name: "Scotts Bluff National Monument", county: "ne-banner-morrill-scotts-bluff", lat: 41.83, lon: -103.71, scenic: true, type: "desert", size: 1 },
    // Harrison: Sioux County's dry ranch country, on US-20 toward Wyoming, so desert.
    { id: "HRSN", name: "Harrison", county: "ne-box-butte-sioux", lat: 42.69, lon: -103.88, type: "desert", size: 1 },
    // Toadstool Geologic Park: Nebraska's badlands in the Oglala National Grassland (approx.).
    { id: "TDST", name: "Toadstool Geologic Park", county: "ne-box-butte-sioux", lat: 42.86, lon: -103.58, scenic: true, type: "desert", size: 1 },
    { id: "GRDN", name: "Gordon", county: "ne-dawes-sheridan", lat: 42.81, lon: -102.2, type: "farm", size: 1 },
    // Fort Robinson: the old Army post among the Pine Ridge's pine-clad buttes, west of Crawford,
    // so mountain (approx.).
    { id: "FTRB", name: "Fort Robinson", county: "ne-dawes-sheridan", lat: 42.67, lon: -103.47, scenic: true, type: "mountain", size: 1 },
    { id: "CODY", name: "Cody", county: "ne-cherry", lat: 42.94, lon: -101.25, type: "farm", size: 1 },
    // Smith Falls: Nebraska's highest waterfall, on the Niobrara National Scenic River east of
    // Valentine (approx.).
    { id: "SMFL", name: "Smith Falls", county: "ne-cherry", lat: 42.89, lon: -100.31, scenic: true, type: "farm", size: 1 },
    { id: "THDF", name: "Thedford", county: "ne-grant-hooker-thomas", lat: 41.98, lon: -100.57, type: "farm", size: 1 },
    { id: "HYNS", name: "Hyannis", county: "ne-grant-hooker-thomas", lat: 42.0, lon: -101.76, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Omaha, Lincoln & the Missouri",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "The Platte & the Northeast",
      areas: ["platte"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Omaha to Grand Island, up the Platte (the Union Pacific or I-80)
        { kind: "connect", a: "OMA", b: "GRI" },
        { kind: "counties", target: 12 },
      ],
    },
    {
      name: "Kearney, the Republican & the Loups",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Lincoln to Holdrege, as the California Zephyr runs (by Hastings)
        { kind: "connect", a: "LNK", b: "HDE" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "North Platte, the Sandhills & the Panhandle",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Across the state, up the Platte and the North Platte
        { kind: "connect", a: "OMA", b: "SBF" },
        { kind: "counties", target: 25 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Nebraska's map has no mountains
  // (two hill cells: the Wildcat Hills and the bluffs at Harlan County Lake), so none (NOTES.md).
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river or lake where it passes the town. Sources in NOTES.md.
  bridges: [
    // The Missouri (Iowa's and South Dakota's line; Iowa comes later). South Dakota lists the
    // Discovery Bridge (Yankton) and the Vermillion–Newcastle Bridge.
    ["Missouri River bridges (Omaha–Council Bluffs: I-480 and the Union Pacific)", 41.26, -95.92],
    ["Missouri River bridge (I-80, Omaha–Council Bluffs)", 41.23, -95.92],
    ["Missouri River bridges (Plattsmouth: US-34 and the BNSF)", 41.01, -95.87],
    ["Missouri River bridge (Nebraska City)", 40.68, -95.84],
    ["Missouri River bridge (US-30, Blair)", 41.55, -96.08],
    ["Missouri River bridge (Decatur)", 42.02, -96.22],
    ["Missouri River bridges (South Sioux City–Sioux City)", 42.48, -96.39],
    ["Chief Standing Bear Memorial Bridge (Niobrara)", 42.79, -97.97], // NE-14 to Springfield, South Dakota
    // The Platte and the Loup
    ["Platte River bridge (I-80, Ashland)", 41.06, -96.3],
    ["Elkhorn River bridge (Waterloo)", 41.29, -96.28], // US-275 and the Union Pacific, Omaha to Fremont
    ["Elkhorn River bridge (US-30, Arlington)", 41.47, -96.39], // Blair to Fremont
    ["Platte River bridge (US-77, Fremont)", 41.41, -96.5],
    ["Platte River bridge (US-81, Columbus)", 41.39, -97.37],
    ["Loup River bridge (US-81, Columbus)", 41.41, -97.36],
    ["Loup River bridge (NE-14, Fullerton)", 41.34, -97.99],
    ["Platte River bridge (NE-14, Central City)", 41.07, -98.0],
    ["Platte River bridge (US-281, Grand Island)", 40.82, -98.37],
    ["Platte River bridge (US-34, Grand Island–Aurora)", 40.9, -98.26],
    ["Platte River bridge (Kearney)", 40.67, -99.08], // 2nd Avenue, downtown to I-80
    ["Platte River bridge (US-283, Lexington)", 40.74, -99.73],
    ["Platte River bridge (Gothenburg)", 40.92, -100.16],
    // The South Platte and the North Platte (the map joins them about 25 mi east of North Platte)
    ["South Platte River bridge (US-83, North Platte)", 41.14, -100.75],
    ["North Platte River bridge (US-83, North Platte)", 41.19, -100.74], // on the map's river, 2 mi north of the real one
    ["South Platte River bridge (NE-61, Ogallala)", 41.12, -101.72],
    ["Kingsley Dam (NE-61)", 41.22, -101.67], // over Lake McConaughy's east end, Ogallala to Arthur
    ["North Platte River bridge (NE-27, Oshkosh)", 41.4, -102.34],
    ["North Platte River bridge (US-385, Bridgeport)", 41.69, -103.1],
    ["North Platte River bridges (Scottsbluff–Gering)", 41.87, -103.66],
    // The Elkhorn and the Big Blue
    ["Elkhorn River bridge (West Point)", 41.83, -96.73],
    ["Elkhorn River bridges (Norfolk)", 42.0, -97.43],
    ["Elkhorn River bridge (Neligh)", 42.12, -98.04],
    ["Big Blue River bridge (Stromsburg)", 41.1, -97.59], // US-81, York to Osceola
    ["Big Blue River bridge (Seward)", 40.91, -97.09],
    ["Big Blue River bridge (Crete)", 40.62, -96.96],
    ["Big Blue River bridge (Beatrice)", 40.27, -96.75],
    // The Republican, the Niobrara and the White
    ["Republican River bridge (US-83, McCook)", 40.21, -100.62],
    ["Republican River bridge (Cambridge)", 40.3, -100.17],
    ["Republican River bridge (US-183, Alma)", 40.11, -99.37],
    ["Republican River bridge (US-281, Red Cloud)", 40.08, -98.52],
    ["Republican River bridge (NE-14, Superior)", 40.03, -98.06],
    ["Niobrara River bridge (US-83, Valentine)", 42.85, -100.53],
    ["Niobrara River bridge (US-281, Spencer)", 42.81, -98.69],
    ["Niobrara River bridge (US-385, Alliance–Chadron)", 42.46, -102.94],
    ["White River bridge (US-20, Crawford)", 42.67, -103.45], // between Crawford and Fort Robinson
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // Ponderosa pine on the hills: the Pine Ridge (Chadron State Park, Fort Robinson) and the
    // Wildcat Hills south of Gering (the map's one hill cell in the west)
    wooded: ["ne-banner-morrill-scotts-bluff", "ne-dawes-sheridan"],
    // Sioux County's dry short-grass and badlands (Toadstool, the Oglala National Grassland), as
    // South Dakota's Bennett-Oglala Lakota across the line
    dry: ["ne-box-butte-sioux"],
    // Not listed (farmland and grassland): the farms of the east and the Platte valley, and the
    // Sandhills' grass-covered dunes and ranches.
  },
});
