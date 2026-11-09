// National Railways: stations and levels for California.
// The land, county borders and county names come from js/map-california.js.
window.NR = window.NR || {};

// The five kinds of place. In "type of place" mode a passenger wants to reach
// ANY station of a kind, shown by its shape.
NR.PLACE_TYPES = {
  metro: { name: "Metro", shape: "square" },
  coast: { name: "Coast", shape: "half" },
  mountain: { name: "Mountains", shape: "triangle" },
  farm: { name: "Farmland", shape: "circle" },
  desert: { name: "Desert", shape: "diamond" },
};

// Names for the line colors, in the order they unlock.
NR.LINE_NAMES = ["Golden", "Redwood", "Pacific", "Sierra", "Mojave", "Jacaranda", "Delta"];

// Main stations: one per county (small counties are merged in map-california.js), at its biggest city.
// A county's main station appears as soon as you own the county.
// id = the short code shown on passengers. county = region id in NR.MAP.regions.
// pop = county population in thousands (2020 census). size = how busy (1 to 5).
// level = which level unlocks it in Levels mode. port = the name of its seaport, if it has one.
NR.CITIES = [
  // Level 1: Southern California
  { id: "LA", name: "Los Angeles", county: "los-angeles", lat: 34.05, lon: -118.24, type: "metro", size: 5, pop: 10014, main: true, level: "south" },
  { id: "ANA", name: "Anaheim", county: "orange", lat: 33.84, lon: -117.91, type: "metro", size: 5, pop: 3187, main: true, level: "south" },
  { id: "SD", name: "San Diego", county: "san-diego", lat: 32.72, lon: -117.16, port: "Port of San Diego", type: "metro", size: 5, pop: 3299, main: true, level: "south" },
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
  { id: "FRE", name: "Fresno", county: "fresno", lat: 36.74, lon: -119.79, type: "farm", size: 4, pop: 1009, main: true, level: "central" },
  { id: "MAD", name: "Madera", county: "madera", lat: 36.96, lon: -120.06, type: "farm", size: 2, pop: 156, main: true, level: "central" },
  { id: "MER", name: "Merced", county: "merced", lat: 37.3, lon: -120.48, type: "farm", size: 2, pop: 281, main: true, level: "central" },
  { id: "MAM", name: "Mammoth Lakes", county: "inyo-mono", lat: 37.65, lon: -118.97, type: "mountain", size: 1, pop: 32, main: true, level: "central" },
  { id: "SON", name: "Sonora", county: "mariposa-tuolumne", lat: 37.98, lon: -120.38, type: "mountain", size: 1, pop: 73, main: true, level: "central" },
  // Level 3: Bay Area and Sierra Nevada
  { id: "SF", name: "San Francisco", county: "san-francisco", lat: 37.77, lon: -122.42, type: "metro", size: 5, pop: 874, main: true, level: "bay" },
  { id: "SMO", name: "San Mateo", county: "san-mateo", lat: 37.56, lon: -122.32, type: "metro", size: 3, pop: 764, main: true, level: "bay" },
  { id: "SJ", name: "San Jose", county: "santa-clara", lat: 37.34, lon: -121.89, type: "metro", size: 4, pop: 1936, main: true, level: "bay" },
  { id: "OAK", name: "Oakland", county: "alameda", lat: 37.8, lon: -122.27, port: "Port of Oakland", type: "metro", size: 4, pop: 1682, main: true, level: "bay" },
  { id: "CCR", name: "Concord", county: "contra-costa", lat: 37.98, lon: -122.03, type: "metro", size: 4, pop: 1166, main: true, level: "bay" },
  { id: "SRF", name: "San Rafael", county: "marin", lat: 37.97, lon: -122.53, type: "coast", size: 2, pop: 262, main: true, level: "bay" },
  { id: "SCZ", name: "Santa Cruz", county: "santa-cruz", lat: 36.97, lon: -122.03, type: "coast", size: 2, pop: 271, main: true, level: "bay" },
  { id: "SNS", name: "Salinas", county: "monterey", lat: 36.68, lon: -121.66, type: "coast", size: 3, pop: 439, main: true, level: "bay" },
  { id: "HOL", name: "Hollister", county: "san-benito", lat: 36.85, lon: -121.4, type: "farm", size: 1, pop: 64, main: true, level: "bay" },
  { id: "MOD", name: "Modesto", county: "stanislaus", lat: 37.64, lon: -120.99, type: "farm", size: 3, pop: 553, main: true, level: "bay" },
  { id: "STK", name: "Stockton", county: "san-joaquin", lat: 37.96, lon: -121.29, type: "farm", size: 3, pop: 779, main: true, level: "bay" },
  { id: "SAC", name: "Sacramento", county: "sacramento", lat: 38.58, lon: -121.49, type: "metro", size: 4, pop: 1585, main: true, level: "bay" },
  { id: "DAV", name: "Davis", county: "yolo", lat: 38.54, lon: -121.74, type: "farm", size: 2, pop: 216, main: true, level: "bay" },
  { id: "VJO", name: "Vallejo", county: "solano", lat: 38.1, lon: -122.26, type: "farm", size: 3, pop: 453, main: true, level: "bay" },
  { id: "NAP", name: "Napa", county: "napa", lat: 38.3, lon: -122.29, type: "farm", size: 1, pop: 138, main: true, level: "bay" },
  { id: "RSV", name: "Roseville", county: "placer", lat: 38.75, lon: -121.29, type: "mountain", size: 3, pop: 405, main: true, level: "bay" },
  { id: "TAH", name: "South Lake Tahoe", county: "el-dorado", lat: 38.94, lon: -119.98, type: "mountain", size: 2, pop: 191, main: true, level: "bay" },
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
];

// Towns: they appear over time, but only inside counties you own.
// Same fields as above, without level (they follow their county).
NR.TOWNS = [
  // Los Angeles County
  { id: "LGB", name: "Long Beach", county: "los-angeles", lat: 33.77, lon: -118.19, port: "Port of Long Beach", type: "coast", size: 4 },
  { id: "LAN", name: "Lancaster", county: "los-angeles", lat: 34.7, lon: -118.14, type: "desert", size: 2 },
  { id: "SCL", name: "Santa Clarita", county: "los-angeles", lat: 34.39, lon: -118.54, type: "metro", size: 3 },
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
  { id: "PSP", name: "Palm Springs", county: "riverside", lat: 33.83, lon: -116.55, type: "desert", size: 2 },
  { id: "TEM", name: "Temecula", county: "riverside", lat: 33.49, lon: -117.15, type: "farm", size: 2 },
  { id: "IND", name: "Indio", county: "riverside", lat: 33.72, lon: -116.22, type: "desert", size: 1 },
  { id: "BLY", name: "Blythe", county: "riverside", lat: 33.61, lon: -114.6, type: "desert", size: 1 },
  // San Bernardino County
  { id: "ONT", name: "Ontario", county: "san-bernardino", lat: 34.06, lon: -117.65, type: "metro", size: 3 },
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
  { id: "TRV", name: "Three Rivers", county: "tulare", lat: 36.44, lon: -118.9, type: "mountain", size: 1 },
  // Fresno, Madera and Merced counties
  { id: "COA", name: "Coalinga", county: "fresno", lat: 36.14, lon: -120.36, type: "farm", size: 1 },
  { id: "SHL", name: "Shaver Lake", county: "fresno", lat: 37.1, lon: -119.32, type: "mountain", size: 1 },
  { id: "OKH", name: "Oakhurst", county: "madera", lat: 37.33, lon: -119.65, type: "mountain", size: 1 },
  { id: "LBN", name: "Los Banos", county: "merced", lat: 37.06, lon: -120.85, type: "farm", size: 1 },
  // Inyo-Mono County
  { id: "BIH", name: "Bishop", county: "inyo-mono", lat: 37.36, lon: -118.4, type: "mountain", size: 1 },
  { id: "LPN", name: "Lone Pine", county: "inyo-mono", lat: 36.61, lon: -118.06, type: "desert", size: 1 },
  { id: "DV", name: "Death Valley", county: "inyo-mono", lat: 36.46, lon: -116.87, type: "desert", size: 1 },
  { id: "BPT", name: "Bridgeport", county: "inyo-mono", lat: 38.26, lon: -119.23, type: "mountain", size: 1 },
  // Mariposa-Tuolumne County
  { id: "YOS", name: "Yosemite Valley", county: "mariposa-tuolumne", lat: 37.75, lon: -119.59, type: "mountain", size: 2 },
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
  { id: "BSR", name: "Big Sur", county: "monterey", lat: 36.27, lon: -121.81, type: "coast", size: 1 },
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
  { id: "SHA", name: "Mount Shasta", county: "del-norte-siskiyou-trinity", lat: 41.31, lon: -122.31, type: "mountain", size: 1 },
  { id: "WVL", name: "Weaverville", county: "del-norte-siskiyou-trinity", lat: 40.73, lon: -122.94, type: "mountain", size: 1 },
  { id: "COR", name: "Corning", county: "tehama", lat: 39.93, lon: -122.18, type: "farm", size: 1 },
  { id: "BRN", name: "Burney", county: "shasta", lat: 40.88, lon: -121.66, type: "mountain", size: 1 },
  { id: "ORO", name: "Oroville", county: "butte", lat: 39.51, lon: -121.56, type: "farm", size: 1 },
  { id: "COL", name: "Colusa", county: "colusa-glenn", lat: 39.21, lon: -122.01, type: "farm", size: 1 },
  { id: "ALT", name: "Alturas", county: "lassen-modoc", lat: 41.49, lon: -120.54, type: "mountain", size: 1 },
];

// Level mode: finish every goal on a level's checklist to open the next part of the state.
// Counties in an open part can then be unlocked (bought, or earned through their goal).
// Goal kinds are described in js/game.js (see "Goals and contracts").
NR.LEVELS = [
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
];

// Every game starts owning these three counties.
NR.START_COUNTIES = ["los-angeles", "ventura", "riverside"];
