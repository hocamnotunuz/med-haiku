// National Railways pack: Colorado.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/CO/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/CO/raw.
NR.addPack({
  code: "CO",
  name: "Colorado",
  // A game that starts here begins owning these counties (Denver, Lakewood and Aurora). Denver's
  // only neighbours are three metro counties, so Jefferson's station is typed mountain (its
  // county is mostly the Front Range's foothills): two types of place, and the first track
  // (Denver–Lakewood, the nearest pair) has riders.
  start: ["co-denver", "co-jefferson", "co-arapahoe"],
  // Main stations: one per county region, at its biggest city, except Glenwood Springs and Vail
  // (below). id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to. Points are the Census points, except five moved to
  // downtown (Denver, Colorado Springs, Aurora, Fort Collins and Greeley: NOTES.md).
  stations: [
    // Level 1: Denver, Boulder and Greeley
    // Denver: the capital, size 4 (as Salt Lake City). Denver International is one of the two big
    // airports, with Colorado Springs. At downtown (Union Station and the 16th Street Mall); the
    // Census point is 6 miles east.
    { id: "DEN", name: "Denver", county: "co-denver", lat: 39.75, lon: -104.99, airport: "Denver International", type: "metro", size: 4, pop: 716, main: true, level: "denver" },
    // Aurora: Colorado's third city, at its municipal center (Alameda and I-225); the Census
    // point is 5 miles east, out on the plains by E-470.
    { id: "AUR", name: "Aurora", county: "co-arapahoe", lat: 39.71, lon: -104.82, type: "metro", size: 3, pop: 655, main: true, level: "denver" },
    // Lakewood: typed by its county, which is mostly the Front Range's foothills (Red Rocks,
    // Evergreen, Conifer, Golden at the mouth of Clear Creek Canyon), so mountain. It gives the
    // start two types of place.
    { id: "LKWD", name: "Lakewood", county: "co-jefferson", lat: 39.7, lon: -105.12, type: "mountain", size: 3, pop: 583, main: true, level: "denver" },
    // Thornton: Adams County's biggest city (Westminster's Census point is in Jefferson).
    { id: "THN", name: "Thornton", county: "co-adams", lat: 39.92, lon: -104.94, type: "metro", size: 3, pop: 520, main: true, level: "denver" },
    { id: "BRF", name: "Broomfield", county: "co-broomfield", lat: 39.95, lon: -105.05, type: "metro", size: 2, pop: 74, main: true, level: "denver" },
    // Boulder: the University of Colorado, under the Flatirons.
    { id: "BOU", name: "Boulder", county: "co-boulder", lat: 40.02, lon: -105.25, type: "metro", size: 3, pop: 331, main: true, level: "denver" },
    { id: "CRO", name: "Castle Rock", county: "co-douglas", lat: 39.38, lon: -104.85, type: "metro", size: 3, pop: 358, main: true, level: "denver" },
    // Greeley: Weld is Colorado's biggest farm county (cattle, dairies, sugar beets), so farm, as
    // Fresno and Bakersfield. At downtown; the Census point is 4 miles west.
    { id: "GRE", name: "Greeley", county: "co-weld", lat: 40.42, lon: -104.69, type: "farm", size: 3, pop: 329, main: true, level: "denver" },
    // Level 2: the Front Range and the eastern plains
    // Fort Collins: Colorado State University. At Old Town; the Census point is 3 miles south.
    { id: "FTC", name: "Fort Collins", county: "co-larimer", lat: 40.59, lon: -105.08, type: "metro", size: 3, pop: 359, main: true, level: "front" },
    // Colorado Springs: Colorado's second city, size 4 by its 730k (as Denver). At downtown; the
    // Census point is 4 miles northeast. Colorado Springs Airport is over the bar (about a million a year).
    { id: "COS", name: "Colorado Springs", county: "co-el-paso", lat: 38.83, lon: -104.82, airport: "Colorado Springs Airport", type: "metro", size: 4, pop: 730, main: true, level: "front" },
    // Pueblo: the steel city on the Arkansas, size 2 by its 168k.
    { id: "PUB", name: "Pueblo", county: "co-pueblo", lat: 38.27, lon: -104.61, type: "metro", size: 2, pop: 168, main: true, level: "front" },
    // The plains: wheat, cattle and irrigated river valleys, so farm.
    { id: "STRL", name: "Sterling", county: "co-logan-phillips-sedgwick", lat: 40.62, lon: -103.19, type: "farm", size: 1, pop: 28, main: true, level: "front" },
    { id: "FTM", name: "Fort Morgan", county: "co-morgan-washington-yuma", lat: 40.25, lon: -103.79, type: "farm", size: 1, pop: 44, main: true, level: "front" },
    { id: "LIM", name: "Limon", county: "co-elbert-lincoln", lat: 39.27, lon: -103.69, type: "farm", size: 1, pop: 32, main: true, level: "front" },
    { id: "BURL", name: "Burlington", county: "co-cheyenne-kit-carson", lat: 39.3, lon: -102.27, type: "farm", size: 1, pop: 9, main: true, level: "front" },
    // La Junta and Lamar: the Arkansas valley's farms (Rocky Ford melons) on the Santa Fe line.
    { id: "LAJ", name: "La Junta", county: "co-bent-crowley-otero", lat: 37.98, lon: -103.55, type: "farm", size: 1, pop: 30, main: true, level: "front" },
    { id: "LMR", name: "Lamar", county: "co-baca-kiowa-prowers", lat: 38.08, lon: -102.61, type: "farm", size: 1, pop: 17, main: true, level: "front" },
    // Trinidad: the coal town at the foot of Raton Pass and Fishers Peak, so mountain.
    { id: "TAD", name: "Trinidad", county: "co-huerfano-las-animas", lat: 37.17, lon: -104.49, type: "mountain", size: 1, pop: 21, main: true, level: "front" },
    // Level 3: the Rockies
    { id: "IDS", name: "Idaho Springs", county: "co-clear-creek-gilpin", lat: 39.75, lon: -105.5, type: "mountain", size: 1, pop: 15, main: true, level: "rockies" },
    { id: "WPK", name: "Woodland Park", county: "co-park-teller", lat: 39.0, lon: -105.06, type: "mountain", size: 1, pop: 42, main: true, level: "rockies" },
    // Cañon City: where the Arkansas leaves the Royal Gorge, so mountain.
    { id: "CCY", name: "Cañon City", county: "co-custer-fremont", lat: 38.44, lon: -105.22, type: "mountain", size: 1, pop: 54, main: true, level: "rockies" },
    { id: "SLD", name: "Salida", county: "co-chaffee-lake", lat: 38.53, lon: -106.0, type: "mountain", size: 1, pop: 27, main: true, level: "rockies" },
    // Breckenridge, Vail, Aspen and Steamboat Springs: ski resorts, so mountain and scenic (as
    // Park City and Jackson).
    { id: "BREK", name: "Breckenridge", county: "co-summit", lat: 39.5, lon: -106.04, scenic: true, type: "mountain", size: 1, pop: 31, main: true, level: "rockies" },
    // Vail, not Gypsum (8,046, the biggest): the Vail valley is known by Vail, the I-70 town under
    // Vail Pass; Gypsum is a town by the airport (NOTES.md).
    { id: "VAI", name: "Vail", county: "co-eagle", lat: 39.64, lon: -106.36, scenic: true, type: "mountain", size: 1, pop: 56, main: true, level: "rockies" },
    // Glenwood Springs, not Rifle (10,436, 478 more people): the county seat, the hot springs, the
    // Amtrak stop and the junction of I-70 and the road to Aspen (NOTES.md). Size 2 by its 62k.
    { id: "GWS", name: "Glenwood Springs", county: "co-garfield", lat: 39.55, lon: -107.34, type: "mountain", size: 2, pop: 62, main: true, level: "rockies" },
    { id: "ASE", name: "Aspen", county: "co-pitkin", lat: 39.2, lon: -106.84, scenic: true, type: "mountain", size: 1, pop: 17, main: true, level: "rockies" },
    { id: "GRBY", name: "Granby", county: "co-grand-jackson", lat: 40.06, lon: -105.92, type: "mountain", size: 1, pop: 17, main: true, level: "rockies" },
    { id: "SBS", name: "Steamboat Springs", county: "co-moffat-rio-blanco-routt", lat: 40.48, lon: -106.82, scenic: true, type: "mountain", size: 1, pop: 45, main: true, level: "rockies" },
    // Level 4: the Western Slope, the San Juans and the San Luis Valley
    // Grand Junction: the Western Slope's city, so metro (size 2 by its 156k).
    { id: "GJT", name: "Grand Junction", county: "co-mesa", lat: 39.09, lon: -108.57, type: "metro", size: 2, pop: 156, main: true, level: "west" },
    // Montrose: the Uncompahgre valley's farms (Olathe sweet corn, Delta's orchards), so farm.
    // Size 2 by its 74k.
    { id: "MTJ", name: "Montrose", county: "co-delta-montrose", lat: 38.47, lon: -107.86, type: "farm", size: 2, pop: 74, main: true, level: "west" },
    { id: "GUC", name: "Gunnison", county: "co-gunnison-hinsdale", lat: 38.55, lon: -106.92, type: "mountain", size: 1, pop: 18, main: true, level: "west" },
    // Telluride: the ski town in its box canyon, so mountain and scenic.
    { id: "TEX", name: "Telluride", county: "co-ouray-san-miguel", lat: 37.94, lon: -107.82, scenic: true, type: "mountain", size: 1, pop: 13, main: true, level: "west" },
    // Durango: the San Juans' city, size 2 by its 70k.
    { id: "DRO", name: "Durango", county: "co-archuleta-la-plata-san-juan", lat: 37.27, lon: -107.88, type: "mountain", size: 2, pop: 70, main: true, level: "west" },
    // Cortez: the Four Corners' high desert (Mesa Verde, Hovenweep), so desert.
    { id: "CEZ", name: "Cortez", county: "co-dolores-montezuma", lat: 37.35, lon: -108.58, type: "desert", size: 1, pop: 28, main: true, level: "west" },
    // Alamosa and Monte Vista: the San Luis Valley's irrigated farms (potatoes, barley), so farm.
    { id: "ALS", name: "Alamosa", county: "co-alamosa-conejos-costilla", lat: 37.47, lon: -105.88, type: "farm", size: 1, pop: 27, main: true, level: "west" },
    { id: "MVT", name: "Monte Vista", county: "co-mineral-rio-grande-saguache", lat: 37.58, lon: -106.15, type: "farm", size: 1, pop: 19, main: true, level: "west" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor center (sources in NOTES.md).
  towns: [
    // Denver's suburbs and the Front Range foothills
    { id: "CTNL", name: "Centennial", county: "co-arapahoe", lat: 39.59, lon: -104.86, type: "metro", size: 2 },
    // Deer Trail: wheat country on I-70 east of Denver.
    { id: "DRT", name: "Deer Trail", county: "co-arapahoe", lat: 39.62, lon: -104.04, type: "farm", size: 1 },
    { id: "ARVA", name: "Arvada", county: "co-jefferson", lat: 39.83, lon: -105.15, type: "metro", size: 2 },
    // Golden: at the mouth of Clear Creek Canyon (Coors, the Colorado School of Mines).
    { id: "GOLD", name: "Golden", county: "co-jefferson", lat: 39.74, lon: -105.21, type: "mountain", size: 1 },
    // Red Rocks: the amphitheatre in the red sandstone at Morrison.
    { id: "RRK", name: "Red Rocks", county: "co-jefferson", lat: 39.67, lon: -105.21, scenic: true, type: "mountain", size: 1 },
    // Brighton: the farm town (and county seat) where Adams County's farmland begins.
    { id: "BRTN", name: "Brighton", county: "co-adams", lat: 39.97, lon: -104.79, type: "farm", size: 1 },
    { id: "BNT", name: "Bennett", county: "co-adams", lat: 39.74, lon: -104.43, type: "farm", size: 1 },
    { id: "PRKR", name: "Parker", county: "co-douglas", lat: 39.51, lon: -104.78, type: "metro", size: 2 },
    // Highlands Ranch: an unincorporated suburb (a Census CDP, so no population in raw/).
    { id: "HLR", name: "Highlands Ranch", county: "co-douglas", lat: 39.54, lon: -104.97, type: "metro", size: 2 },
    { id: "LGM", name: "Longmont", county: "co-boulder", lat: 40.17, lon: -105.1, type: "metro", size: 2 },
    // Nederland: up Boulder Canyon at the foot of the Indian Peaks.
    { id: "NED", name: "Nederland", county: "co-boulder", lat: 39.96, lon: -105.51, type: "mountain", size: 1 },
    { id: "ERI", name: "Erie", county: "co-weld", lat: 40.04, lon: -105.04, type: "metro", size: 1 },
    { id: "WDSR", name: "Windsor", county: "co-weld", lat: 40.48, lon: -104.92, type: "metro", size: 1 },
    // The Front Range, north and south
    { id: "LVD", name: "Loveland", county: "co-larimer", lat: 40.42, lon: -105.06, type: "metro", size: 2 },
    // Estes Park: the gateway to Rocky Mountain National Park, up the Big Thompson Canyon.
    { id: "ESTP", name: "Estes Park", county: "co-larimer", lat: 40.37, lon: -105.53, scenic: true, type: "mountain", size: 1 },
    { id: "FTN", name: "Fountain", county: "co-el-paso", lat: 38.69, lon: -104.68, type: "metro", size: 1 },
    { id: "MNM", name: "Monument", county: "co-el-paso", lat: 39.07, lon: -104.84, type: "metro", size: 1 },
    // Garden of the Gods: the red rock park, at its visitor center.
    { id: "GOTG", name: "Garden of the Gods", county: "co-el-paso", lat: 38.88, lon: -104.87, scenic: true, type: "mountain", size: 1 },
    // Pikes Peak: "America's Mountain", at the summit (the cog railway and the highway).
    { id: "PPK", name: "Pikes Peak", county: "co-el-paso", lat: 38.84, lon: -105.04, scenic: true, type: "mountain", size: 1 },
    // Pueblo West: an unincorporated suburb (a Census CDP).
    { id: "PBW", name: "Pueblo West", county: "co-pueblo", lat: 38.32, lon: -104.79, type: "metro", size: 1 },
    { id: "BOO", name: "Boone", county: "co-pueblo", lat: 38.25, lon: -104.26, type: "farm", size: 1 },
    // The eastern plains
    { id: "HLK", name: "Holyoke", county: "co-logan-phillips-sedgwick", lat: 40.58, lon: -102.3, type: "farm", size: 1 },
    { id: "JLS", name: "Julesburg", county: "co-logan-phillips-sedgwick", lat: 40.98, lon: -102.26, type: "farm", size: 1 },
    { id: "AKR", name: "Akron", county: "co-morgan-washington-yuma", lat: 40.16, lon: -103.22, type: "farm", size: 1 },
    { id: "WRY", name: "Wray", county: "co-morgan-washington-yuma", lat: 40.08, lon: -102.23, type: "farm", size: 1 },
    { id: "ELZ", name: "Elizabeth", county: "co-elbert-lincoln", lat: 39.37, lon: -104.6, type: "farm", size: 1 },
    { id: "HUG", name: "Hugo", county: "co-elbert-lincoln", lat: 39.14, lon: -103.47, type: "farm", size: 1 },
    { id: "CHWL", name: "Cheyenne Wells", county: "co-cheyenne-kit-carson", lat: 38.82, lon: -102.35, type: "farm", size: 1 },
    { id: "STRT", name: "Stratton", county: "co-cheyenne-kit-carson", lat: 39.3, lon: -102.6, type: "farm", size: 1 },
    { id: "RKFD", name: "Rocky Ford", county: "co-bent-crowley-otero", lat: 38.05, lon: -103.72, type: "farm", size: 1 },
    { id: "LSAN", name: "Las Animas", county: "co-bent-crowley-otero", lat: 38.07, lon: -103.22, type: "farm", size: 1 },
    // Bent's Old Fort: the Santa Fe Trail's trading post (a National Historic Site), at the fort.
    { id: "BOF", name: "Bent's Old Fort", county: "co-bent-crowley-otero", lat: 38.04, lon: -103.43, scenic: true, type: "farm", size: 1 },
    { id: "SPR", name: "Springfield", county: "co-baca-kiowa-prowers", lat: 37.4, lon: -102.62, type: "farm", size: 1 },
    { id: "EAD", name: "Eads", county: "co-baca-kiowa-prowers", lat: 38.48, lon: -102.78, type: "farm", size: 1 },
    // Walsenburg: ranch country on I-25 under the Spanish Peaks.
    { id: "WBG", name: "Walsenburg", county: "co-huerfano-las-animas", lat: 37.63, lon: -104.78, type: "farm", size: 1 },
    { id: "LAVT", name: "La Veta", county: "co-huerfano-las-animas", lat: 37.51, lon: -105.01, type: "mountain", size: 1 },
    // The Rockies
    // Georgetown: the silver town at the top of Clear Creek (the Georgetown Loop Railroad).
    { id: "GTWN", name: "Georgetown", county: "co-clear-creek-gilpin", lat: 39.72, lon: -105.7, type: "mountain", size: 1 },
    // Cripple Creek: the gold camp on Pikes Peak's southwest side.
    { id: "CRC", name: "Cripple Creek", county: "co-park-teller", lat: 38.75, lon: -105.19, type: "mountain", size: 1 },
    // Fairplay: South Park's town, on US-285.
    { id: "FRP", name: "Fairplay", county: "co-park-teller", lat: 39.22, lon: -106.0, type: "mountain", size: 1 },
    // Royal Gorge: the suspension bridge high over the Arkansas, at the bridge.
    { id: "RYG", name: "Royal Gorge", county: "co-custer-fremont", lat: 38.46, lon: -105.33, scenic: true, type: "mountain", size: 1 },
    // Westcliffe: the Wet Mountain Valley's ranches under the Sangre de Cristo, so farm.
    { id: "WCL", name: "Westcliffe", county: "co-custer-fremont", lat: 38.13, lon: -105.47, type: "farm", size: 1 },
    { id: "LDV", name: "Leadville", county: "co-chaffee-lake", lat: 39.25, lon: -106.29, type: "mountain", size: 1 },
    { id: "BVA", name: "Buena Vista", county: "co-chaffee-lake", lat: 38.83, lon: -106.14, type: "mountain", size: 1 },
    { id: "SLT", name: "Silverthorne", county: "co-summit", lat: 39.66, lon: -106.09, type: "mountain", size: 1 },
    { id: "GYP", name: "Gypsum", county: "co-eagle", lat: 39.62, lon: -106.96, type: "mountain", size: 1 },
    // Basalt: Eagle County's end of the Roaring Fork valley, between Glenwood Springs and Aspen.
    { id: "BSL", name: "Basalt", county: "co-eagle", lat: 39.37, lon: -107.05, type: "mountain", size: 1 },
    // Rifle: ranching and natural gas on the Colorado, so farm.
    { id: "RIF", name: "Rifle", county: "co-garfield", lat: 39.54, lon: -107.77, type: "farm", size: 1 },
    // Carbondale: under Mount Sopris, where the Crystal River meets the Roaring Fork.
    { id: "CBD", name: "Carbondale", county: "co-garfield", lat: 39.4, lon: -107.22, type: "mountain", size: 1 },
    { id: "SMV", name: "Snowmass Village", county: "co-pitkin", lat: 39.22, lon: -106.94, type: "mountain", size: 1 },
    // Maroon Bells: the twin peaks over Maroon Lake, at the lake.
    { id: "MBEL", name: "Maroon Bells", county: "co-pitkin", lat: 39.1, lon: -106.94, scenic: true, type: "mountain", size: 1 },
    // Winter Park: the ski resort at the Moffat Tunnel's west portal.
    { id: "WPA", name: "Winter Park", county: "co-grand-jackson", lat: 39.88, lon: -105.78, type: "mountain", size: 1 },
    { id: "KRM", name: "Kremmling", county: "co-grand-jackson", lat: 40.06, lon: -106.38, type: "farm", size: 1 },
    // Walden: North Park's ranch town.
    { id: "WALD", name: "Walden", county: "co-grand-jackson", lat: 40.73, lon: -106.28, type: "farm", size: 1 },
    // Craig and Rangely: sagebrush, coal and oil, so desert (as Rock Springs and Vernal).
    { id: "CRG", name: "Craig", county: "co-moffat-rio-blanco-routt", lat: 40.52, lon: -107.56, type: "desert", size: 1 },
    { id: "MKR", name: "Meeker", county: "co-moffat-rio-blanco-routt", lat: 40.05, lon: -107.9, type: "farm", size: 1 },
    { id: "RNG", name: "Rangely", county: "co-moffat-rio-blanco-routt", lat: 40.09, lon: -108.78, type: "desert", size: 1 },
    // The Western Slope, the San Juans and the San Luis Valley
    // Fruita and Palisade: the Grand Valley's farms (Palisade peaches).
    { id: "FRU", name: "Fruita", county: "co-mesa", lat: 39.16, lon: -108.73, type: "farm", size: 1 },
    { id: "PAL", name: "Palisade", county: "co-mesa", lat: 39.11, lon: -108.36, type: "farm", size: 1 },
    // Colorado National Monument: the canyons above the Grand Valley, at the Saddlehorn visitor center.
    { id: "CONM", name: "Colorado National Monument", county: "co-mesa", lat: 39.1, lon: -108.73, scenic: true, type: "desert", size: 1 },
    { id: "DELT", name: "Delta", county: "co-delta-montrose", lat: 38.76, lon: -108.09, type: "farm", size: 1 },
    { id: "PAO", name: "Paonia", county: "co-delta-montrose", lat: 38.87, lon: -107.59, type: "farm", size: 1 },
    // Black Canyon: Black Canyon of the Gunnison National Park, at the South Rim visitor center.
    { id: "BKCN", name: "Black Canyon", county: "co-delta-montrose", lat: 38.58, lon: -107.74, scenic: true, type: "mountain", size: 1 },
    { id: "CRBT", name: "Crested Butte", county: "co-gunnison-hinsdale", lat: 38.87, lon: -106.98, type: "mountain", size: 1 },
    { id: "LKC", name: "Lake City", county: "co-gunnison-hinsdale", lat: 38.02, lon: -107.31, type: "mountain", size: 1 },
    { id: "OUR", name: "Ouray", county: "co-ouray-san-miguel", lat: 38.03, lon: -107.67, type: "mountain", size: 1 },
    { id: "NWD", name: "Norwood", county: "co-ouray-san-miguel", lat: 38.13, lon: -108.29, type: "farm", size: 1 },
    { id: "PGS", name: "Pagosa Springs", county: "co-archuleta-la-plata-san-juan", lat: 37.26, lon: -107.0, type: "mountain", size: 1 },
    // Silverton: the end of the Durango & Silverton Narrow Gauge Railroad, up the Animas canyon.
    { id: "SVT", name: "Silverton", county: "co-archuleta-la-plata-san-juan", lat: 37.81, lon: -107.66, scenic: true, type: "mountain", size: 1 },
    // Mesa Verde: the cliff dwellings, at Chapin Mesa.
    { id: "MVD", name: "Mesa Verde", county: "co-dolores-montezuma", lat: 37.18, lon: -108.49, scenic: true, type: "desert", size: 1 },
    { id: "MNC", name: "Mancos", county: "co-dolores-montezuma", lat: 37.35, lon: -108.29, type: "farm", size: 1 },
    // Dove Creek: the "pinto bean capital", on US-491.
    { id: "DVC", name: "Dove Creek", county: "co-dolores-montezuma", lat: 37.77, lon: -108.91, type: "farm", size: 1 },
    // Great Sand Dunes: the national park's dunes under the Sangre de Cristo, at the visitor center.
    { id: "GSD", name: "Great Sand Dunes", county: "co-alamosa-conejos-costilla", lat: 37.73, lon: -105.51, scenic: true, type: "desert", size: 1 },
    // Antonito: the Cumbres & Toltec Scenic Railroad's Colorado end.
    { id: "ANO", name: "Antonito", county: "co-alamosa-conejos-costilla", lat: 37.08, lon: -106.01, type: "farm", size: 1 },
    // San Luis: Colorado's oldest town (1851).
    { id: "SNLS", name: "San Luis", county: "co-alamosa-conejos-costilla", lat: 37.2, lon: -105.42, type: "farm", size: 1 },
    // South Fork: at the foot of Wolf Creek Pass, where US-160 leaves the Rio Grande.
    { id: "SFK", name: "South Fork", county: "co-mineral-rio-grande-saguache", lat: 37.67, lon: -106.64, type: "mountain", size: 1 },
    { id: "CRD", name: "Creede", county: "co-mineral-rio-grande-saguache", lat: 37.85, lon: -106.93, type: "mountain", size: 1 },
    { id: "SGCH", name: "Saguache", county: "co-mineral-rio-grande-saguache", lat: 38.09, lon: -106.14, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Denver, Boulder & Greeley",
      areas: ["denver"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "The Front Range & the Plains",
      areas: ["front"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Fort Collins to Pueblo, as I-25 runs
        { kind: "connect", a: "FTC", b: "PUB" },
        { kind: "counties", target: 12 },
      ],
    },
    {
      name: "The Rockies",
      areas: ["rockies"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Over the Continental Divide to Glenwood Springs (the Moffat Tunnel or I-70)
        { kind: "connect", a: "DEN", b: "GWS" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
    {
      name: "The Western Slope & the San Juans",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "DEN", b: "DRO" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
  ],
  // Real mountain passes, canyons and tunnels: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel. A real tunnel is listed as a pass named after it.
  // Points are in the canyon, at the summit or at the tunnel's middle, from memory (approx.);
  // sources in NOTES.md. Loveland Pass is left out (the Eisenhower Tunnel, 3 miles away, takes
  // I-70's lines), and so is Rabbit Ears Pass: the map has only hills there (NOTES.md).
  passes: [
    // The Continental Divide west of Denver
    ["Moffat Tunnel", 39.9, -105.7], // the Union Pacific (Amtrak's California Zephyr), Denver to Winter Park
    ["Berthoud Pass", 39.8, -105.78], // US-40, Empire to Winter Park
    ["Eisenhower Tunnel", 39.68, -105.92], // I-70, Georgetown to Silverthorne
    ["Vail Pass", 39.53, -106.22], // I-70, Copper Mountain to Vail
    ["Glenwood Canyon", 39.58, -107.25], // I-70 and the Union Pacific along the Colorado
    ["De Beque Canyon", 39.2, -108.3], // I-70 and the Union Pacific along the Colorado, Palisade to De Beque
    ["McClure Pass", 39.12, -107.29], // CO-133, Carbondale to Paonia
    ["Tennessee Pass", 39.36, -106.31], // US-24 and the old Rio Grande, Leadville to Minturn
    ["Hoosier Pass", 39.36, -106.06], // CO-9, Breckenridge to Fairplay
    ["Kenosha Pass", 39.41, -105.76], // US-285, Denver to South Park
    ["Independence Pass", 39.11, -106.56], // CO-82, Twin Lakes to Aspen
    ["Clear Creek Canyon", 39.74, -105.3], // US-6, Golden to I-70
    ["Boulder Canyon", 40.0, -105.38], // CO-119, Boulder to Nederland
    ["Big Thompson Canyon", 40.42, -105.3], // US-34, Loveland to Estes Park
    ["Trail Ridge Road", 40.41, -105.75], // US-34 over Rocky Mountain National Park
    ["Cameron Pass", 40.52, -105.89], // CO-14, Fort Collins to Walden
    // Pikes Peak and the Arkansas
    ["Ute Pass", 38.9, -104.96], // US-24, Colorado Springs to Woodland Park
    ["Royal Gorge", 38.46, -105.32], // US-50 and the Royal Gorge Route Railroad
    ["Monarch Pass", 38.5, -106.33], // US-50, Salida to Gunnison
    ["Poncha Pass", 38.42, -106.08], // US-285, Salida to the San Luis Valley
    // The south and the San Juans
    ["La Veta Pass", 37.61, -105.18], // US-160, Walsenburg to Fort Garland
    // Raton Pass and Cumbres Pass lead to New Mexico (not in the game yet)
    ["Raton Pass", 36.99, -104.49], // I-25 and the BNSF (Amtrak's Southwest Chief), Trinidad to Raton
    ["Wolf Creek Pass", 37.48, -106.8], // US-160, South Fork to Pagosa Springs
    ["Red Mountain Pass", 37.9, -107.71], // US-550, Silverton to Ouray
    ["Animas Canyon", 37.6, -107.75], // the Durango & Silverton Narrow Gauge, up the Animas River
    ["Dallas Divide", 38.08, -107.83], // CO-62, Ridgway to Placerville and Telluride
    ["Lizard Head Pass", 37.81, -107.91], // CO-145, Rico to Telluride
    ["Cumbres Pass", 37.02, -106.45], // the Cumbres & Toltec, Antonito to Chama
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // River bridges sit on the map's river where it passes the town.
  bridges: [
    // The South Platte
    ["South Platte River bridge (Littleton)", 39.61, -105.04],
    ["South Platte River bridge (Denver)", 39.76, -105.03],
    ["South Platte River bridge (Commerce City)", 39.84, -104.95],
    ["South Platte River bridge (Brighton)", 39.99, -104.84],
    ["South Platte River bridge (Evans)", 40.38, -104.69],
    ["South Platte River bridge (Fort Morgan)", 40.28, -103.8],
    ["South Platte River bridge (Sterling)", 40.63, -103.19],
    ["South Platte River bridge (Julesburg)", 40.98, -102.26],
    ["South Platte River bridge (Fairplay)", 39.22, -106.0], // the river's Middle Fork in South Park
    // The Arkansas
    ["Arkansas River bridge (Buena Vista)", 38.83, -106.15],
    ["Arkansas River bridge (Salida)", 38.53, -106.0],
    ["Royal Gorge Bridge", 38.46, -105.33], // the suspension bridge, about 950 feet over the river
    ["Arkansas River bridge (Cañon City)", 38.45, -105.23],
    ["Arkansas River bridge (Pueblo)", 38.26, -104.61],
    ["Arkansas River bridge (La Junta)", 38.02, -103.54],
    ["Arkansas River bridge (Lamar)", 38.12, -102.63],
    // The Colorado, the Gunnison, the White and the Yampa
    ["Colorado River bridge (Kremmling)", 40.07, -106.39],
    ["Colorado River bridge (Glenwood Springs)", 39.57, -107.33],
    ["Colorado River bridge (Palisade)", 39.12, -108.37],
    ["Colorado River bridge (Grand Junction)", 39.08, -108.56],
    ["Colorado River bridge (Fruita)", 39.16, -108.72],
    ["Gunnison River bridge (Gunnison)", 38.55, -106.95],
    ["Gunnison River bridge (Delta)", 38.76, -108.09],
    ["White River bridge (Meeker)", 40.03, -107.91],
    ["Yampa River bridge (Steamboat Springs)", 40.48, -106.83],
    ["Yampa River bridge (Craig)", 40.5, -107.55],
    // The Rio Grande, the Animas and the Purgatoire
    ["Rio Grande bridge (Alamosa)", 37.49, -105.84],
    ["Rio Grande bridge (Monte Vista)", 37.6, -106.14],
    ["Rio Grande bridge (South Fork)", 37.68, -106.63],
    ["Animas River bridge (Durango)", 37.27, -107.87],
    ["Purgatoire River bridge (Trinidad)", 37.16, -104.5], // I-25 south to Raton Pass (for New Mexico)
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // Lodgepole and spruce down to the valley floors, 9,000 feet up: Clear Creek and Summit
    forest: ["co-clear-creek-gilpin", "co-summit"],
    // Forested mountains over valleys, parks and plains: the Front Range (its metro counties'
    // western halves), the Park and Gore ranges, the Sawatch, the Elks and the San Juans
    wooded: [
      "co-archuleta-la-plata-san-juan", "co-boulder", "co-chaffee-lake", "co-custer-fremont", "co-douglas",
      "co-eagle", "co-el-paso", "co-garfield", "co-grand-jackson", "co-gunnison-hinsdale",
      "co-huerfano-las-animas", "co-jefferson", "co-larimer", "co-ouray-san-miguel", "co-park-teller",
      "co-pitkin",
    ],
    // The San Luis Valley's high desert, the Four Corners, the Grand Valley's and the Uncompahgre's
    // desert, and the northwest's sagebrush (Utah's and Wyoming's packs are dry across the lines)
    dry: [
      "co-alamosa-conejos-costilla", "co-delta-montrose", "co-dolores-montezuma", "co-mesa",
      "co-mineral-rio-grande-saguache", "co-moffat-rio-blanco-routt",
    ],
    // Not listed (farmland and grassland): Denver, Adams, Arapahoe, Broomfield, Weld, Pueblo and
    // the eastern plains.
  },
});
