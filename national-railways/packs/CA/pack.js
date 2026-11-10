// National Railways pack: California.
// Everything hand-made for one state: main stations, towns, city maps, mountain passes,
// bridges, bays, and where the forests and deserts are. The county borders come from map.js
// and the mountains, lakes and rivers from js/terrain.js. What each field means: PACKS.md.
NR.addPack({
  code: "CA",
  name: "California",
  // A game that starts here begins owning these counties.
  start: ["los-angeles", "ventura", "riverside"],
  // Main stations: one per county region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = county population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // Level 1: Southern California
    { id: "LA", name: "Los Angeles", county: "los-angeles", lat: 34.05, lon: -118.24, type: "metro", size: 5, pop: 10014, main: true, level: "south" },
    { id: "ANA", name: "Anaheim", county: "orange", lat: 33.84, lon: -117.91, type: "metro", size: 5, pop: 3187, main: true, level: "south" },
    { id: "SD", name: "San Diego", county: "san-diego", lat: 32.72, lon: -117.16, port: "Port of San Diego", airport: "San Diego International", type: "metro", size: 5, pop: 3299, main: true, level: "south" },
    { id: "RIV", name: "Riverside", county: "riverside", lat: 33.95, lon: -117.4, type: "desert", size: 4, pop: 2418, main: true, level: "south" },
    { id: "SBD", name: "San Bernardino", county: "san-bernardino", lat: 34.11, lon: -117.29, type: "desert", size: 4, pop: 2182, main: true, level: "south" },
    { id: "ELC", name: "El Centro", county: "imperial", lat: 32.79, lon: -115.56, type: "desert", size: 2, pop: 180, main: true, level: "south" },
    { id: "OXN", name: "Oxnard", county: "ventura", lat: 34.2, lon: -119.18, port: "Port of Hueneme", type: "coast", size: 3, pop: 844, main: true, level: "south" },
    // Level 2: Central Valley and Central Coast
    { id: "SMX", name: "Santa Maria", county: "santa-barbara", lat: 34.95, lon: -120.44, type: "coast", size: 3, pop: 448, main: true, level: "central" },
    { id: "SLO", name: "San Luis Obispo", county: "san-luis-obispo", lat: 35.28, lon: -120.66, type: "coast", size: 2, pop: 282, main: true, level: "central" },
    { id: "BAK", name: "Bakersfield", county: "kern", lat: 35.37, lon: -119.02, type: "farm", size: 3, pop: 909, main: true, level: "central" },
    { id: "VIS", name: "Visalia", county: "tulare", lat: 36.33, lon: -119.29, type: "farm", size: 3, pop: 473, main: true, level: "central" },
    { id: "HNF", name: "Hanford", county: "kings", lat: 36.33, lon: -119.65, type: "farm", size: 2, pop: 152, main: true, level: "central" },
    { id: "FRE", name: "Fresno", county: "fresno", lat: 36.74, lon: -119.79, airport: "Fresno Yosemite International", type: "farm", size: 4, pop: 1009, main: true, level: "central" },
    { id: "MAD", name: "Madera", county: "madera", lat: 36.96, lon: -120.06, type: "farm", size: 2, pop: 156, main: true, level: "central" },
    { id: "MER", name: "Merced", county: "merced", lat: 37.3, lon: -120.48, type: "farm", size: 2, pop: 281, main: true, level: "central" },
    { id: "MAM", name: "Mammoth Lakes", county: "inyo-mono", lat: 37.65, lon: -118.97, scenic: true, type: "mountain", size: 1, pop: 32, main: true, level: "central" },
    { id: "SON", name: "Sonora", county: "mariposa-tuolumne", lat: 37.98, lon: -120.38, type: "mountain", size: 1, pop: 73, main: true, level: "central" },
    // Level 3: Bay Area and Sierra Nevada
    { id: "SF", name: "San Francisco", county: "san-francisco", lat: 37.77, lon: -122.42, type: "metro", size: 5, pop: 874, main: true, level: "bay" },
    { id: "SMO", name: "San Mateo", county: "san-mateo", lat: 37.56, lon: -122.32, airport: "San Francisco International (SFO)", type: "metro", size: 3, pop: 764, main: true, level: "bay" },
    { id: "SJ", name: "San Jose", county: "santa-clara", lat: 37.34, lon: -121.89, airport: "San José Mineta International", type: "metro", size: 4, pop: 1936, main: true, level: "bay" },
    { id: "OAK", name: "Oakland", county: "alameda", lat: 37.8, lon: -122.27, port: "Port of Oakland", airport: "Oakland International", type: "metro", size: 4, pop: 1682, main: true, level: "bay" },
    { id: "CCR", name: "Concord", county: "contra-costa", lat: 37.98, lon: -122.03, type: "metro", size: 4, pop: 1166, main: true, level: "bay" },
    { id: "SRF", name: "San Rafael", county: "marin", lat: 37.97, lon: -122.53, type: "coast", size: 2, pop: 262, main: true, level: "bay" },
    { id: "SCZ", name: "Santa Cruz", county: "santa-cruz", lat: 36.97, lon: -122.03, type: "coast", size: 2, pop: 271, main: true, level: "bay" },
    { id: "SNS", name: "Salinas", county: "monterey", lat: 36.68, lon: -121.66, type: "coast", size: 3, pop: 439, main: true, level: "bay" },
    { id: "HOL", name: "Hollister", county: "san-benito", lat: 36.85, lon: -121.4, type: "farm", size: 1, pop: 64, main: true, level: "bay" },
    { id: "MOD", name: "Modesto", county: "stanislaus", lat: 37.64, lon: -120.99, type: "farm", size: 3, pop: 553, main: true, level: "bay" },
    { id: "STK", name: "Stockton", county: "san-joaquin", lat: 37.96, lon: -121.29, type: "farm", size: 3, pop: 779, main: true, level: "bay" },
    { id: "SAC", name: "Sacramento", county: "sacramento", lat: 38.58, lon: -121.49, airport: "Sacramento International", type: "metro", size: 4, pop: 1585, main: true, level: "bay" },
    { id: "DAV", name: "Davis", county: "yolo", lat: 38.54, lon: -121.74, type: "farm", size: 2, pop: 216, main: true, level: "bay" },
    { id: "VJO", name: "Vallejo", county: "solano", lat: 38.1, lon: -122.26, type: "farm", size: 3, pop: 453, main: true, level: "bay" },
    { id: "NAP", name: "Napa", county: "napa", lat: 38.3, lon: -122.29, scenic: true, type: "farm", size: 1, pop: 138, main: true, level: "bay" },
    { id: "RSV", name: "Roseville", county: "placer", lat: 38.75, lon: -121.29, type: "mountain", size: 3, pop: 405, main: true, level: "bay" },
    { id: "TAH", name: "South Lake Tahoe", county: "el-dorado", lat: 38.94, lon: -119.98, scenic: true, type: "mountain", size: 2, pop: 191, main: true, level: "bay" },
    { id: "JAC", name: "Jackson", county: "alpine-amador-calaveras", lat: 38.35, lon: -120.77, type: "mountain", size: 1, pop: 87, main: true, level: "bay" },
    // Level 4: Northern California
    { id: "SRO", name: "Santa Rosa", county: "sonoma", lat: 38.44, lon: -122.71, type: "farm", size: 3, pop: 489, main: true, level: "north" },
    { id: "CLK", name: "Clearlake", county: "lake", lat: 38.96, lon: -122.63, type: "mountain", size: 1, pop: 68, main: true, level: "north" },
    { id: "UKI", name: "Ukiah", county: "mendocino", lat: 39.15, lon: -123.21, type: "coast", size: 1, pop: 92, main: true, level: "north" },
    { id: "EKA", name: "Eureka", county: "humboldt", lat: 40.8, lon: -124.16, port: "Humboldt Bay", type: "coast", size: 1, pop: 136, main: true, level: "north" },
    { id: "YRK", name: "Yreka", county: "del-norte-siskiyou-trinity", lat: 41.73, lon: -122.63, type: "mountain", size: 1, pop: 88, main: true, level: "north" },
    { id: "RBL", name: "Red Bluff", county: "tehama", lat: 40.18, lon: -122.24, type: "farm", size: 1, pop: 66, main: true, level: "north" },
    { id: "RDD", name: "Redding", county: "shasta", lat: 40.59, lon: -122.39, type: "mountain", size: 2, pop: 182, main: true, level: "north" },
    { id: "CHI", name: "Chico", county: "butte", lat: 39.73, lon: -121.84, type: "farm", size: 2, pop: 212, main: true, level: "north" },
    { id: "WIL", name: "Willows", county: "colusa-glenn", lat: 39.52, lon: -122.19, type: "farm", size: 1, pop: 51, main: true, level: "north" },
    { id: "YBC", name: "Yuba City", county: "sutter", lat: 39.14, lon: -121.62, type: "farm", size: 1, pop: 100, main: true, level: "north" },
    // Yuba County's biggest towns sit across the river from Yuba City, so its station is at Wheatland.
    { id: "WHL", name: "Wheatland", county: "yuba", lat: 39.01, lon: -121.42, type: "farm", size: 1, pop: 82, main: true, level: "north" },
    { id: "TRK", name: "Truckee", county: "nevada", lat: 39.33, lon: -120.18, type: "mountain", size: 1, pop: 102, main: true, level: "north" },
    { id: "QCY", name: "Quincy", county: "plumas-sierra", lat: 39.94, lon: -120.95, type: "mountain", size: 1, pop: 23, main: true, level: "north" },
    { id: "SUS", name: "Susanville", county: "lassen-modoc", lat: 40.42, lon: -120.65, type: "mountain", size: 1, pop: 41, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  towns: [
    // Los Angeles County
    { id: "LGB", name: "Long Beach", county: "los-angeles", lat: 33.77, lon: -118.19, port: "Port of Long Beach", type: "coast", size: 4 },
    { id: "LAN", name: "Lancaster", county: "los-angeles", lat: 34.7, lon: -118.14, type: "desert", size: 2 },
    { id: "SCL", name: "Santa Clarita", county: "los-angeles", lat: 34.39, lon: -118.54, type: "metro", size: 3 },
    { id: "LAX", name: "LAX Airport", county: "los-angeles", lat: 33.94, lon: -118.4, airport: "Los Angeles International", type: "metro", size: 3 },
    { id: "MAL", name: "Malibu", county: "los-angeles", lat: 34.04, lon: -118.69, type: "coast", size: 1 },
    // Orange County
    { id: "IRV", name: "Irvine", county: "orange", lat: 33.68, lon: -117.83, type: "metro", size: 3 },
    { id: "SCM", name: "San Clemente", county: "orange", lat: 33.43, lon: -117.61, type: "coast", size: 1 },
    // San Diego County
    { id: "OSD", name: "Oceanside", county: "san-diego", lat: 33.2, lon: -117.38, type: "coast", size: 2 },
    { id: "ESC", name: "Escondido", county: "san-diego", lat: 33.12, lon: -117.09, type: "farm", size: 2 },
    { id: "JUL", name: "Julian", county: "san-diego", lat: 33.08, lon: -116.6, type: "mountain", size: 1 },
    { id: "BOR", name: "Borrego Springs", county: "san-diego", lat: 33.26, lon: -116.37, type: "desert", size: 1 },
    // Riverside County
    { id: "PSP", name: "Palm Springs", county: "riverside", lat: 33.83, lon: -116.55, airport: "Palm Springs International", type: "desert", size: 2 },
    { id: "TEM", name: "Temecula", county: "riverside", lat: 33.49, lon: -117.15, type: "farm", size: 2 },
    { id: "IND", name: "Indio", county: "riverside", lat: 33.72, lon: -116.22, type: "desert", size: 1 },
    { id: "BLY", name: "Blythe", county: "riverside", lat: 33.61, lon: -114.6, type: "desert", size: 1 },
    // San Bernardino County
    { id: "ONT", name: "Ontario", county: "san-bernardino", lat: 34.06, lon: -117.65, airport: "Ontario International", type: "metro", size: 3 },
    { id: "VCV", name: "Victorville", county: "san-bernardino", lat: 34.54, lon: -117.29, type: "desert", size: 2 },
    { id: "BBR", name: "Big Bear Lake", county: "san-bernardino", lat: 34.24, lon: -116.91, type: "mountain", size: 1 },
    { id: "BAR", name: "Barstow", county: "san-bernardino", lat: 34.9, lon: -117.02, type: "desert", size: 1 },
    { id: "NDL", name: "Needles", county: "san-bernardino", lat: 34.85, lon: -114.61, type: "desert", size: 1 },
    // Ventura County
    { id: "TOK", name: "Thousand Oaks", county: "ventura", lat: 34.17, lon: -118.84, type: "metro", size: 2 },
    { id: "OJA", name: "Ojai", county: "ventura", lat: 34.45, lon: -119.24, type: "mountain", size: 1 },
    // Santa Barbara County
    { id: "SB", name: "Santa Barbara", county: "santa-barbara", lat: 34.42, lon: -119.7, type: "coast", size: 2 },
    { id: "LOM", name: "Lompoc", county: "santa-barbara", lat: 34.64, lon: -120.46, type: "coast", size: 1 },
    // San Luis Obispo County
    { id: "PRB", name: "Paso Robles", county: "san-luis-obispo", lat: 35.63, lon: -120.69, type: "farm", size: 1 },
    { id: "SSM", name: "San Simeon", county: "san-luis-obispo", lat: 35.67, lon: -121.15, type: "coast", size: 1 },
    // Kern County
    { id: "DEL", name: "Delano", county: "kern", lat: 35.77, lon: -119.25, type: "farm", size: 1 },
    { id: "THC", name: "Tehachapi", county: "kern", lat: 35.13, lon: -118.45, type: "mountain", size: 1 },
    { id: "RCR", name: "Ridgecrest", county: "kern", lat: 35.62, lon: -117.67, type: "desert", size: 1 },
    // Tulare County
    { id: "PTV", name: "Porterville", county: "tulare", lat: 36.07, lon: -119.02, type: "farm", size: 1 },
    { id: "TRV", name: "Three Rivers", county: "tulare", lat: 36.44, lon: -118.9, scenic: true, type: "mountain", size: 1 },
    // Fresno, Madera and Merced counties
    { id: "COA", name: "Coalinga", county: "fresno", lat: 36.14, lon: -120.36, type: "farm", size: 1 },
    { id: "SHL", name: "Shaver Lake", county: "fresno", lat: 37.1, lon: -119.32, type: "mountain", size: 1 },
    { id: "OKH", name: "Oakhurst", county: "madera", lat: 37.33, lon: -119.65, type: "mountain", size: 1 },
    { id: "LBN", name: "Los Banos", county: "merced", lat: 37.06, lon: -120.85, type: "farm", size: 1 },
    // Inyo-Mono County
    { id: "BIH", name: "Bishop", county: "inyo-mono", lat: 37.36, lon: -118.4, type: "mountain", size: 1 },
    { id: "LPN", name: "Lone Pine", county: "inyo-mono", lat: 36.61, lon: -118.06, type: "desert", size: 1 },
    { id: "DV", name: "Death Valley", county: "inyo-mono", lat: 36.46, lon: -116.87, scenic: true, type: "desert", size: 1 },
    { id: "BPT", name: "Bridgeport", county: "inyo-mono", lat: 38.26, lon: -119.23, type: "mountain", size: 1 },
    // Mariposa-Tuolumne County
    { id: "YOS", name: "Yosemite Valley", county: "mariposa-tuolumne", lat: 37.75, lon: -119.59, scenic: true, type: "mountain", size: 2 },
    { id: "MPS", name: "Mariposa", county: "mariposa-tuolumne", lat: 37.48, lon: -119.97, type: "mountain", size: 1 },
    // Bay Area
    { id: "GIL", name: "Gilroy", county: "santa-clara", lat: 37.01, lon: -121.57, type: "farm", size: 1 },
    { id: "FMT", name: "Fremont", county: "alameda", lat: 37.55, lon: -121.99, type: "metro", size: 3 },
    { id: "LVK", name: "Livermore", county: "alameda", lat: 37.68, lon: -121.77, type: "farm", size: 2 },
    { id: "BRW", name: "Brentwood", county: "contra-costa", lat: 37.93, lon: -121.7, type: "farm", size: 1 },
    { id: "PRS", name: "Point Reyes Station", county: "marin", lat: 38.07, lon: -122.81, type: "coast", size: 1 },
    { id: "FFD", name: "Fairfield", county: "solano", lat: 38.25, lon: -122.04, type: "farm", size: 2 },
    { id: "CAL", name: "Calistoga", county: "napa", lat: 38.58, lon: -122.58, type: "farm", size: 1 },
    { id: "PET", name: "Petaluma", county: "sonoma", lat: 38.23, lon: -122.64, type: "farm", size: 2 },
    { id: "BOD", name: "Bodega Bay", county: "sonoma", lat: 38.33, lon: -123.05, type: "coast", size: 1 },
    // Monterey County and the Central Valley north
    { id: "MRY", name: "Monterey", county: "monterey", lat: 36.6, lon: -121.89, type: "coast", size: 2 },
    { id: "BSR", name: "Big Sur", county: "monterey", lat: 36.27, lon: -121.81, scenic: true, type: "coast", size: 1 },
    { id: "KIC", name: "King City", county: "monterey", lat: 36.21, lon: -121.13, type: "farm", size: 1 },
    { id: "TRC", name: "Tracy", county: "san-joaquin", lat: 37.74, lon: -121.43, type: "farm", size: 2 },
    // Sierra Nevada
    { id: "AUB", name: "Auburn", county: "placer", lat: 38.9, lon: -121.08, type: "mountain", size: 1 },
    { id: "PLV", name: "Placerville", county: "el-dorado", lat: 38.73, lon: -120.8, type: "mountain", size: 1 },
    { id: "MKV", name: "Markleeville", county: "alpine-amador-calaveras", lat: 38.69, lon: -119.78, type: "mountain", size: 1 },
    { id: "GRV", name: "Grass Valley", county: "nevada", lat: 39.22, lon: -121.06, type: "mountain", size: 1 },
    { id: "POR", name: "Portola", county: "plumas-sierra", lat: 39.81, lon: -120.47, type: "mountain", size: 1 },
    { id: "DNV", name: "Downieville", county: "plumas-sierra", lat: 39.56, lon: -120.83, type: "mountain", size: 1 },
    // North Coast and the far north
    { id: "LKP", name: "Lakeport", county: "lake", lat: 39.04, lon: -122.92, type: "mountain", size: 1 },
    { id: "FB", name: "Fort Bragg", county: "mendocino", lat: 39.45, lon: -123.8, type: "coast", size: 1 },
    { id: "PAR", name: "Point Arena", county: "mendocino", lat: 38.91, lon: -123.69, type: "coast", size: 1 },
    { id: "GBV", name: "Garberville", county: "humboldt", lat: 40.1, lon: -123.79, type: "mountain", size: 1 },
    { id: "CEC", name: "Crescent City", county: "del-norte-siskiyou-trinity", lat: 41.76, lon: -124.2, type: "coast", size: 1 },
    { id: "SHA", name: "Mount Shasta", county: "del-norte-siskiyou-trinity", lat: 41.31, lon: -122.31, scenic: true, type: "mountain", size: 1 },
    { id: "WVL", name: "Weaverville", county: "del-norte-siskiyou-trinity", lat: 40.73, lon: -122.94, type: "mountain", size: 1 },
    { id: "COR", name: "Corning", county: "tehama", lat: 39.93, lon: -122.18, type: "farm", size: 1 },
    { id: "BRN", name: "Burney", county: "shasta", lat: 40.88, lon: -121.66, type: "mountain", size: 1 },
    { id: "ORO", name: "Oroville", county: "butte", lat: 39.51, lon: -121.56, type: "farm", size: 1 },
    { id: "COL", name: "Colusa", county: "colusa-glenn", lat: 39.21, lon: -122.01, type: "farm", size: 1 },
    { id: "ALT", name: "Alturas", county: "lassen-modoc", lat: 41.49, lon: -120.54, type: "mountain", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Southern California",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Central Valley",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "cargo", cargo: "produce", target: 25 },
        { kind: "connect", a: "BAK", b: "FRE" },
      ],
    },
    {
      name: "Bay Area & Sierra Nevada",
      areas: ["bay"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "LA", b: "SF" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Northern California",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "counties", target: 30 },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
  // City maps, keyed by their main station on the state map. hub = the main station's own stop
  // in the city, where riders change to and from trains. cable = a cable car stop.
  metros: {
    LA: {
      name: "Los Angeles",
      size: 5,
      stops: [
        { id: "UNS", name: "Union Station", lat: 34.056, lon: -118.236, hub: true },
        { id: "HWD", name: "Hollywood", lat: 34.098, lon: -118.329 },
        { id: "SMC", name: "Santa Monica", lat: 34.019, lon: -118.491 },
        { id: "PAS", name: "Pasadena", lat: 34.148, lon: -118.145 },
        { id: "LBC", name: "Long Beach", lat: 33.768, lon: -118.195 },
        { id: "LAX", name: "LAX", lat: 33.943, lon: -118.408 },
        { id: "KTN", name: "Koreatown", lat: 34.058, lon: -118.3 },
        { id: "CUL", name: "Culver City", lat: 34.021, lon: -118.396 },
        { id: "BUR", name: "Burbank", lat: 34.181, lon: -118.309 },
        { id: "ELA", name: "East LA", lat: 34.024, lon: -118.172 },
        { id: "ING", name: "Inglewood", lat: 33.962, lon: -118.353 },
        { id: "UCL", name: "Westwood/UCLA", lat: 34.068, lon: -118.445 },
      ],
    },
    SF: {
      name: "San Francisco",
      size: 5,
      stops: [
        { id: "TTC", name: "Transit Center", lat: 37.789, lon: -122.396, hub: true, cable: true },
        { id: "USQ", name: "Union Square", lat: 37.788, lon: -122.407, cable: true },
        { id: "NOB", name: "Nob Hill", lat: 37.793, lon: -122.416, cable: true },
        { id: "FWF", name: "Fisherman's Wharf", lat: 37.808, lon: -122.417, cable: true },
        { id: "MIS", name: "Mission", lat: 37.76, lon: -122.414 },
        { id: "CAS", name: "Castro", lat: 37.762, lon: -122.435 },
        { id: "HAI", name: "Haight-Ashbury", lat: 37.77, lon: -122.447 },
        { id: "GGP", name: "Golden Gate Park", lat: 37.769, lon: -122.483 },
        { id: "SUN", name: "Sunset", lat: 37.753, lon: -122.495 },
        { id: "PRE", name: "Presidio", lat: 37.799, lon: -122.466 },
        { id: "BAY", name: "Bayview", lat: 37.729, lon: -122.392 },
        { id: "BAL", name: "Balboa Park", lat: 37.721, lon: -122.447 },
      ],
    },
    SD: {
      name: "San Diego",
      size: 4,
      stops: [
        { id: "SFD", name: "Santa Fe Depot", lat: 32.716, lon: -117.17, hub: true },
        { id: "OTN", name: "Old Town", lat: 32.755, lon: -117.199 },
        { id: "LJA", name: "La Jolla", lat: 32.842, lon: -117.274 },
        { id: "MVL", name: "Mission Valley", lat: 32.77, lon: -117.15 },
        { id: "PBH", name: "Pacific Beach", lat: 32.797, lon: -117.24 },
        { id: "CHV", name: "Chula Vista", lat: 32.64, lon: -117.084 },
        { id: "ECJ", name: "El Cajon", lat: 32.795, lon: -116.962 },
        { id: "SDU", name: "SDSU", lat: 32.775, lon: -117.071 },
        { id: "BPK", name: "Balboa Park", lat: 32.731, lon: -117.146 },
        { id: "SYS", name: "San Ysidro", lat: 32.556, lon: -117.045 },
        { id: "UTC", name: "UTC", lat: 32.871, lon: -117.211 },
      ],
    },
    SAC: {
      name: "Sacramento",
      size: 3,
      stops: [
        { id: "SVS", name: "Valley Station", lat: 38.584, lon: -121.501, hub: true },
        { id: "MID", name: "Midtown", lat: 38.574, lon: -121.478 },
        { id: "WSA", name: "West Sacramento", lat: 38.58, lon: -121.53 },
        { id: "NAT", name: "Natomas", lat: 38.646, lon: -121.519 },
        { id: "EXP", name: "Cal Expo", lat: 38.596, lon: -121.438 },
        { id: "CSU", name: "Sac State", lat: 38.561, lon: -121.424 },
        { id: "RCO", name: "Rancho Cordova", lat: 38.589, lon: -121.303 },
        { id: "FOL", name: "Folsom", lat: 38.678, lon: -121.176 },
        { id: "EKG", name: "Elk Grove", lat: 38.409, lon: -121.372 },
        { id: "SMF", name: "Airport", lat: 38.695, lon: -121.59 },
      ],
    },
    SJ: {
      name: "San Jose",
      size: 4,
      stops: [
        { id: "DIR", name: "Diridon", lat: 37.329, lon: -121.903, hub: true },
        { id: "STC", name: "Santa Clara", lat: 37.354, lon: -121.955 },
        { id: "MTV", name: "Mountain View", lat: 37.394, lon: -122.078 },
        { id: "SNV", name: "Sunnyvale", lat: 37.369, lon: -122.036 },
        { id: "MIL", name: "Milpitas", lat: 37.428, lon: -121.906 },
        { id: "CAM", name: "Campbell", lat: 37.287, lon: -121.95 },
        { id: "EVG", name: "Evergreen", lat: 37.316, lon: -121.785 },
        { id: "JTN", name: "Japantown", lat: 37.349, lon: -121.894 },
        { id: "SJC", name: "Airport", lat: 37.363, lon: -121.929 },
        { id: "LEV", name: "Levi's Stadium", lat: 37.403, lon: -121.97 },
        { id: "ALM", name: "Almaden", lat: 37.25, lon: -121.88 },
      ],
    },
  },
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel.
  passes: [
    // California: Southern California
    ["Tejon Pass (the Grapevine)", 34.8, -118.88],
    ["Tehachapi Pass", 35.1, -118.32],
    ["Cajon Pass", 34.32, -117.45],
    ["San Gorgonio Pass", 33.93, -116.8],
    ["Soledad Pass", 34.44, -118.13],
    ["Newhall Pass", 34.33, -118.52],
    ["Santa Susana Pass", 34.27, -118.63],
    ["Sepulveda Pass", 34.12, -118.47],
    ["Conejo Grade", 34.2, -118.94],
    ["Santa Ana Canyon", 33.86, -117.7],
    ["Rainbow Gap (I-15)", 33.41, -117.15],
    ["Tecate Divide", 32.7, -116.33],
    ["In-Ko-Pah Gorge", 32.67, -116.11],
    ["Rim of the World Highway", 34.22, -117.03],
    ["Afton Canyon", 35.04, -116.38],
    ["Mountain Pass", 35.47, -115.54],
    // California: Central Coast and Bay Area
    ["Gaviota Pass", 34.5, -120.21],
    ["Cuesta Grade", 35.34, -120.63],
    ["Cholame Pass", 35.72, -120.29],
    ["Highway 1 (Big Sur coast)", 36.27, -121.81],
    ["Pacheco Pass", 37.07, -121.22],
    ["Hecker Pass", 36.99, -121.69],
    ["Highway 17 summit", 37.12, -121.97],
    ["Altamont Pass", 37.73, -121.65],
    ["Caldecott Tunnel", 37.86, -122.2],
    // California: Sierra Nevada
    ["Walker Pass", 35.66, -118.03],
    ["Highway 168 (Shaver Lake)", 37.05, -119.4],
    ["Merced River Canyon", 37.66, -119.85],
    ["Wawona Road", 37.62, -119.68],
    ["Tioga Pass", 37.91, -119.26],
    ["Sonora Pass", 38.33, -119.64],
    ["Monitor Pass", 38.67, -119.62],
    ["Carson Pass", 38.69, -119.99],
    ["Echo Summit", 38.81, -120.03],
    ["Emigrant Gap", 39.3, -120.67],
    ["Donner Pass", 39.32, -120.33],
    ["Yuba Pass", 39.62, -120.49],
    ["Beckwourth Pass", 39.79, -120.11],
    ["Feather River Canyon", 39.92, -121.3],
    ["Fredonyer Pass", 40.37, -120.86],
    ["Sherwin Summit", 37.55, -118.66],
    ["Conway Summit", 38.09, -119.18],
    ["Towne Pass", 36.39, -117.29],
    // California: the north
    ["Sacramento River Canyon", 41.2, -122.27],
    ["Sacramento River Canyon (Lakehead)", 40.95, -122.38],
    ["Buckhorn Summit", 40.67, -122.66],
    ["Berry Summit", 40.92, -123.76],
    ["Ridgewood Summit", 39.33, -123.33],
    ["Eel River Canyon", 40.1, -123.78],
    ["Smith River Canyon", 41.85, -123.95],
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  bridges: [
    ["Golden Gate Bridge", 37.82, -122.48],
    ["Bay Bridge", 37.8, -122.35],
    ["San Mateo Bridge", 37.58, -122.2],
    ["Dumbarton Bridge", 37.5, -122.12],
    ["Richmond-San Rafael Bridge", 37.93, -122.43],
    ["Carquinez Bridge", 38.06, -122.23],
    ["Benicia-Martinez Bridge", 38.04, -122.12],
    ["Antioch Bridge", 38.02, -121.75],
    ["Tower Bridge", 38.58, -121.51],
    ["Pit River Bridge (Shasta Lake)", 40.79, -122.31],
    ["Vincent Thomas Bridge", 33.75, -118.27],
    ["Coronado Bridge", 32.69, -117.15],
    ["Topock Bridge (I-40)", 34.72, -114.49],
  ],
  // Bays: water inside one of these outlines needs a bridge (elsewhere, sea between two
  // coastal stations just means the track follows the coast). ring = longitude, latitude pairs.
  bays: [
    {
      name: "San Francisco Bay", // with San Pablo and Suisun bays
      ring: [-122.49, 37.8, -122.49, 37.85, -122.53, 37.9, -122.56, 38.0, -122.55, 38.16, -122.25, 38.16, -121.85, 38.13, -121.55, 38.09, -121.55, 37.98, -122.0, 37.98, -122.28, 37.84, -122.0, 37.45, -121.9, 37.41, -122.16, 37.41, -122.41, 37.6, -122.38, 37.72, -122.39, 37.8],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    forest: [
      "del-norte-siskiyou-trinity", "humboldt", "mendocino",
    ],
    wooded: [
      "alpine-amador-calaveras", "butte", "colusa-glenn", "el-dorado", "fresno", "lake", "madera",
      "marin", "mariposa-tuolumne", "napa", "nevada", "placer", "plumas-sierra", "san-mateo",
      "santa-cruz", "shasta", "sonoma", "tehama", "tulare", "yuba",
    ],
    dry: [
      "imperial", "inyo-mono", "lassen-modoc", "riverside", "san-bernardino",
    ],
  },
});
