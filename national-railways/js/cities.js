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

// One station per county (small counties are merged in map-california.js), at its biggest city.
// id = the short code shown on passengers. county = region id in NR.MAP.regions.
// pop = county population in thousands (2020 census). size = how busy (1 to 5).
// level = which level unlocks it in Levels mode.
NR.CITIES = [
  // Level 1: Southern California
  { id: "LA", name: "Los Angeles", county: "los-angeles", lat: 34.05, lon: -118.24, type: "metro", size: 5, pop: 10014, level: "south" },
  { id: "ANA", name: "Anaheim", county: "orange", lat: 33.84, lon: -117.91, type: "metro", size: 5, pop: 3187, level: "south" },
  { id: "SD", name: "San Diego", county: "san-diego", lat: 32.72, lon: -117.16, type: "metro", size: 5, pop: 3299, level: "south" },
  { id: "RIV", name: "Riverside", county: "riverside", lat: 33.95, lon: -117.4, type: "desert", size: 4, pop: 2418, level: "south" },
  { id: "SBD", name: "San Bernardino", county: "san-bernardino", lat: 34.11, lon: -117.29, type: "desert", size: 4, pop: 2182, level: "south" },
  { id: "ELC", name: "El Centro", county: "imperial", lat: 32.79, lon: -115.56, type: "desert", size: 2, pop: 180, level: "south" },
  { id: "OXN", name: "Oxnard", county: "ventura", lat: 34.2, lon: -119.18, type: "coast", size: 3, pop: 844, level: "south" },
  // Level 2: Central Valley and Central Coast
  { id: "SMX", name: "Santa Maria", county: "santa-barbara", lat: 34.95, lon: -120.44, type: "coast", size: 3, pop: 448, level: "central" },
  { id: "SLO", name: "San Luis Obispo", county: "san-luis-obispo", lat: 35.28, lon: -120.66, type: "coast", size: 2, pop: 282, level: "central" },
  { id: "BAK", name: "Bakersfield", county: "kern", lat: 35.37, lon: -119.02, type: "farm", size: 3, pop: 909, level: "central" },
  { id: "VIS", name: "Visalia", county: "tulare", lat: 36.33, lon: -119.29, type: "farm", size: 3, pop: 473, level: "central" },
  { id: "HNF", name: "Hanford", county: "kings", lat: 36.33, lon: -119.65, type: "farm", size: 2, pop: 152, level: "central" },
  { id: "FRE", name: "Fresno", county: "fresno", lat: 36.74, lon: -119.79, type: "farm", size: 4, pop: 1009, level: "central" },
  { id: "MAD", name: "Madera", county: "madera", lat: 36.96, lon: -120.06, type: "farm", size: 2, pop: 156, level: "central" },
  { id: "MER", name: "Merced", county: "merced", lat: 37.3, lon: -120.48, type: "farm", size: 2, pop: 281, level: "central" },
  { id: "MAM", name: "Mammoth Lakes", county: "inyo-mono", lat: 37.65, lon: -118.97, type: "mountain", size: 1, pop: 32, level: "central" },
  { id: "SON", name: "Sonora", county: "mariposa-tuolumne", lat: 37.98, lon: -120.38, type: "mountain", size: 1, pop: 73, level: "central" },
  // Level 3: Bay Area and Sierra Nevada
  { id: "SF", name: "San Francisco", county: "san-francisco", lat: 37.77, lon: -122.42, type: "metro", size: 5, pop: 874, level: "bay" },
  { id: "SMO", name: "San Mateo", county: "san-mateo", lat: 37.56, lon: -122.32, type: "metro", size: 3, pop: 764, level: "bay" },
  { id: "SJ", name: "San Jose", county: "santa-clara", lat: 37.34, lon: -121.89, type: "metro", size: 4, pop: 1936, level: "bay" },
  { id: "OAK", name: "Oakland", county: "alameda", lat: 37.8, lon: -122.27, type: "metro", size: 4, pop: 1682, level: "bay" },
  { id: "CCR", name: "Concord", county: "contra-costa", lat: 37.98, lon: -122.03, type: "metro", size: 4, pop: 1166, level: "bay" },
  { id: "SRF", name: "San Rafael", county: "marin", lat: 37.97, lon: -122.53, type: "coast", size: 2, pop: 262, level: "bay" },
  { id: "SCZ", name: "Santa Cruz", county: "santa-cruz", lat: 36.97, lon: -122.03, type: "coast", size: 2, pop: 271, level: "bay" },
  { id: "SNS", name: "Salinas", county: "monterey", lat: 36.68, lon: -121.66, type: "coast", size: 3, pop: 439, level: "bay" },
  { id: "HOL", name: "Hollister", county: "san-benito", lat: 36.85, lon: -121.4, type: "farm", size: 1, pop: 64, level: "bay" },
  { id: "MOD", name: "Modesto", county: "stanislaus", lat: 37.64, lon: -120.99, type: "farm", size: 3, pop: 553, level: "bay" },
  { id: "STK", name: "Stockton", county: "san-joaquin", lat: 37.96, lon: -121.29, type: "farm", size: 3, pop: 779, level: "bay" },
  { id: "SAC", name: "Sacramento", county: "sacramento", lat: 38.58, lon: -121.49, type: "metro", size: 4, pop: 1585, level: "bay" },
  { id: "DAV", name: "Davis", county: "yolo", lat: 38.54, lon: -121.74, type: "farm", size: 2, pop: 216, level: "bay" },
  { id: "VJO", name: "Vallejo", county: "solano", lat: 38.1, lon: -122.26, type: "farm", size: 3, pop: 453, level: "bay" },
  { id: "NAP", name: "Napa", county: "napa", lat: 38.3, lon: -122.29, type: "farm", size: 1, pop: 138, level: "bay" },
  { id: "RSV", name: "Roseville", county: "placer", lat: 38.75, lon: -121.29, type: "mountain", size: 3, pop: 405, level: "bay" },
  { id: "TAH", name: "South Lake Tahoe", county: "el-dorado", lat: 38.94, lon: -119.98, type: "mountain", size: 2, pop: 191, level: "bay" },
  { id: "JAC", name: "Jackson", county: "alpine-amador-calaveras", lat: 38.35, lon: -120.77, type: "mountain", size: 1, pop: 87, level: "bay" },
  // Level 4: Northern California
  { id: "SRO", name: "Santa Rosa", county: "sonoma", lat: 38.44, lon: -122.71, type: "farm", size: 3, pop: 489, level: "north" },
  { id: "CLK", name: "Clearlake", county: "lake", lat: 38.96, lon: -122.63, type: "mountain", size: 1, pop: 68, level: "north" },
  { id: "UKI", name: "Ukiah", county: "mendocino", lat: 39.15, lon: -123.21, type: "coast", size: 1, pop: 92, level: "north" },
  { id: "EKA", name: "Eureka", county: "humboldt", lat: 40.8, lon: -124.16, type: "coast", size: 1, pop: 136, level: "north" },
  { id: "YRK", name: "Yreka", county: "del-norte-siskiyou-trinity", lat: 41.73, lon: -122.63, type: "mountain", size: 1, pop: 88, level: "north" },
  { id: "RBL", name: "Red Bluff", county: "tehama", lat: 40.18, lon: -122.24, type: "farm", size: 1, pop: 66, level: "north" },
  { id: "RDD", name: "Redding", county: "shasta", lat: 40.59, lon: -122.39, type: "mountain", size: 2, pop: 182, level: "north" },
  { id: "CHI", name: "Chico", county: "butte", lat: 39.73, lon: -121.84, type: "farm", size: 2, pop: 212, level: "north" },
  { id: "WIL", name: "Willows", county: "colusa-glenn", lat: 39.52, lon: -122.19, type: "farm", size: 1, pop: 51, level: "north" },
  { id: "YBC", name: "Yuba City", county: "sutter", lat: 39.14, lon: -121.62, type: "farm", size: 1, pop: 100, level: "north" },
  // Yuba County's biggest towns sit across the river from Yuba City, so its station is at Wheatland.
  { id: "WHL", name: "Wheatland", county: "yuba", lat: 39.01, lon: -121.42, type: "farm", size: 1, pop: 82, level: "north" },
  { id: "TRK", name: "Truckee", county: "nevada", lat: 39.33, lon: -120.18, type: "mountain", size: 1, pop: 102, level: "north" },
  { id: "QCY", name: "Quincy", county: "plumas-sierra", lat: 39.94, lon: -120.95, type: "mountain", size: 1, pop: 23, level: "north" },
  { id: "SUS", name: "Susanville", county: "lassen-modoc", lat: 40.42, lon: -120.65, type: "mountain", size: 1, pop: 41, level: "north" },
];

// Level mode: deliver this many passengers in total to unlock the next part of the state.
NR.LEVELS = [
  { name: "Southern California", regions: ["south"], goal: 50 },
  { name: "Central Valley", regions: ["central"], goal: 140 },
  { name: "Bay Area & Sierra Nevada", regions: ["bay"], goal: 280 },
  { name: "Northern California", regions: ["north"], goal: 450 },
];

// Every game starts with these three stations.
NR.START_CITIES = ["LA", "OXN", "RIV"];
