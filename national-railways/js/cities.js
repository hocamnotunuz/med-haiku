// National Railways: stations and levels for California, Nevada, Arizona and Oregon.
// The land, county borders and county names come from js/map.js.
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

// Main stations: one per county (small counties are merged in map.js), at its biggest city.
// A county's main station appears as soon as you own the county.
// id = the short code shown on passengers. county = region id in NR.MAP.regions.
// pop = county population in thousands (2020 census). size = how busy (1 to 5).
// level = which level unlocks it in Levels mode. port = the name of its seaport, if it has one.
// airport = the name of its airport, if it has one. scenic = a place tourists travel to.
NR.CITIES = [
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
  // Nevada, Arizona and Oregon open once you own all of California (or finish every level).
  // They have no level: their counties can be unlocked as soon as the state is open.
  // Nevada
  { id: "LV", name: "Las Vegas", county: "nv-clark", lat: 36.17, lon: -115.14, airport: "Harry Reid International", type: "metro", size: 5, pop: 2265, main: true },
  { id: "RNO", name: "Reno", county: "nv-washoe", lat: 39.53, lon: -119.81, airport: "Reno-Tahoe International", type: "metro", size: 4, pop: 486, main: true },
  { id: "CSN", name: "Carson City", county: "nv-carson-city", lat: 39.16, lon: -119.77, type: "mountain", size: 2, pop: 59, main: true },
  { id: "FER", name: "Fernley", county: "nv-douglas-lyon-storey", lat: 39.61, lon: -119.25, type: "desert", size: 2, pop: 112, main: true },
  { id: "PAH", name: "Pahrump", county: "nv-nye", lat: 36.21, lon: -115.98, type: "desert", size: 1, pop: 52, main: true },
  { id: "ELK", name: "Elko", county: "nv-elko-humboldt", lat: 40.83, lon: -115.76, type: "desert", size: 1, pop: 71, main: true },
  { id: "FAL", name: "Fallon", county: "nv-churchill-esmeralda-mineral", lat: 39.47, lon: -118.78, type: "farm", size: 1, pop: 32, main: true },
  { id: "BMT", name: "Battle Mountain", county: "nv-eureka-lander-pershing", lat: 40.64, lon: -116.93, type: "desert", size: 1, pop: 15, main: true },
  { id: "ELY", name: "Ely", county: "nv-lincoln-white-pine", lat: 39.25, lon: -114.89, type: "mountain", size: 1, pop: 13, main: true },
  // Arizona
  { id: "PHX", name: "Phoenix", county: "az-maricopa", lat: 33.45, lon: -112.07, airport: "Phoenix Sky Harbor International", type: "metro", size: 5, pop: 4421, main: true },
  { id: "TUS", name: "Tucson", county: "az-pima", lat: 32.22, lon: -110.97, airport: "Tucson International", type: "metro", size: 4, pop: 1043, main: true },
  // Casa Grande rather than the slightly bigger city of Maricopa, which shares its name with Maricopa County.
  { id: "CGZ", name: "Casa Grande", county: "az-pinal", lat: 32.88, lon: -111.76, type: "farm", size: 3, pop: 425, main: true },
  { id: "PRC", name: "Prescott", county: "az-yavapai", lat: 34.54, lon: -112.47, type: "mountain", size: 2, pop: 236, main: true },
  { id: "LHC", name: "Lake Havasu City", county: "az-mohave", lat: 34.48, lon: -114.32, type: "desert", size: 2, pop: 213, main: true },
  { id: "YUM", name: "Yuma", county: "az-la-paz-yuma", lat: 32.69, lon: -114.63, type: "farm", size: 2, pop: 221, main: true },
  { id: "FLG", name: "Flagstaff", county: "az-coconino", lat: 35.2, lon: -111.65, type: "mountain", size: 2, pop: 145, main: true },
  { id: "SVA", name: "Sierra Vista", county: "az-cochise-santa-cruz", lat: 31.55, lon: -110.3, type: "desert", size: 2, pop: 173, main: true },
  { id: "SLW", name: "Show Low", county: "az-navajo", lat: 34.25, lon: -110.03, type: "mountain", size: 1, pop: 107, main: true },
  { id: "CHN", name: "Chinle", county: "az-apache", lat: 36.15, lon: -109.55, scenic: true, type: "desert", size: 1, pop: 66, main: true },
  { id: "PAY", name: "Payson", county: "az-gila", lat: 34.23, lon: -111.33, type: "mountain", size: 1, pop: 53, main: true },
  { id: "SAF", name: "Safford", county: "az-graham-greenlee", lat: 32.83, lon: -109.71, type: "farm", size: 1, pop: 49, main: true },
  // Oregon
  { id: "PDX", name: "Portland", county: "or-multnomah", lat: 45.52, lon: -122.68, port: "Port of Portland", airport: "Portland International", type: "metro", size: 5, pop: 815, main: true },
  { id: "HIL", name: "Hillsboro", county: "or-washington", lat: 45.52, lon: -122.99, type: "metro", size: 3, pop: 600, main: true },
  // Oregon City rather than Lake Oswego, which sits right next to Portland.
  { id: "ORC", name: "Oregon City", county: "or-clackamas", lat: 45.36, lon: -122.61, type: "metro", size: 3, pop: 421, main: true },
  { id: "EUG", name: "Eugene", county: "or-lane", lat: 44.05, lon: -123.09, airport: "Eugene Airport", type: "metro", size: 3, pop: 383, main: true },
  { id: "SLE", name: "Salem", county: "or-marion", lat: 44.94, lon: -123.04, type: "metro", size: 3, pop: 346, main: true },
  { id: "MFR", name: "Medford", county: "or-jackson", lat: 42.33, lon: -122.87, airport: "Rogue Valley International", type: "farm", size: 2, pop: 223, main: true },
  { id: "BND", name: "Bend", county: "or-crook-deschutes", lat: 44.06, lon: -121.31, type: "mountain", size: 2, pop: 223, main: true },
  { id: "ALB", name: "Albany", county: "or-linn", lat: 44.64, lon: -123.11, type: "farm", size: 2, pop: 129, main: true },
  { id: "RBG", name: "Roseburg", county: "or-douglas", lat: 43.22, lon: -123.34, type: "mountain", size: 1, pop: 111, main: true },
  { id: "MMV", name: "McMinnville", county: "or-yamhill", lat: 45.21, lon: -123.2, type: "farm", size: 1, pop: 108, main: true },
  { id: "CVO", name: "Corvallis", county: "or-benton", lat: 44.56, lon: -123.26, type: "farm", size: 2, pop: 95, main: true },
  { id: "HRM", name: "Hermiston", county: "or-morrow-umatilla", lat: 45.84, lon: -119.29, type: "farm", size: 1, pop: 92, main: true },
  { id: "GPS", name: "Grants Pass", county: "or-josephine", lat: 42.44, lon: -123.33, type: "mountain", size: 1, pop: 88, main: true },
  { id: "CBY", name: "Coos Bay", county: "or-coos-curry", lat: 43.37, lon: -124.22, port: "Port of Coos Bay", type: "coast", size: 1, pop: 88, main: true },
  { id: "DAL", name: "Dallas", county: "or-polk", lat: 44.92, lon: -123.32, type: "farm", size: 1, pop: 87, main: true },
  { id: "TDL", name: "The Dalles", county: "or-hood-river-jefferson-wasco", lat: 45.6, lon: -121.18, type: "farm", size: 1, pop: 76, main: true },
  { id: "KLF", name: "Klamath Falls", county: "or-klamath", lat: 42.22, lon: -121.78, type: "farm", size: 1, pop: 69, main: true },
  { id: "AST", name: "Astoria", county: "or-clatsop-tillamook", lat: 46.19, lon: -123.83, type: "coast", size: 1, pop: 68, main: true },
  { id: "STH", name: "St. Helens", county: "or-columbia", lat: 45.86, lon: -122.81, type: "farm", size: 1, pop: 53, main: true },
  { id: "NPT", name: "Newport", county: "or-lincoln", lat: 44.64, lon: -124.05, type: "coast", size: 1, pop: 50, main: true },
  { id: "LGD", name: "La Grande", county: "or-baker-union-wallowa", lat: 45.32, lon: -118.09, type: "mountain", size: 1, pop: 50, main: true },
  { id: "ONO", name: "Ontario", county: "or-malheur", lat: 44.03, lon: -116.96, type: "farm", size: 1, pop: 32, main: true },
  { id: "BNO", name: "Burns", county: "or-grant-harney-lake", lat: 43.59, lon: -119.05, type: "desert", size: 1, pop: 22, main: true },
  { id: "CDN", name: "Condon", county: "or-gilliam-sherman-wheeler", lat: 45.23, lon: -120.18, type: "farm", size: 1, pop: 5, main: true },
];

// Towns: they appear over time, but only inside counties you own.
// Same fields as above, without level (they follow their county).
NR.TOWNS = [
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
  // Nevada
  { id: "HND", name: "Henderson", county: "nv-clark", lat: 36.04, lon: -114.98, type: "metro", size: 3 },
  { id: "BLC", name: "Boulder City", county: "nv-clark", lat: 35.98, lon: -114.83, scenic: true, type: "desert", size: 1 },
  { id: "MCH", name: "Mount Charleston", county: "nv-clark", lat: 36.27, lon: -115.64, scenic: true, type: "mountain", size: 1 },
  { id: "MSQ", name: "Mesquite", county: "nv-clark", lat: 36.8, lon: -114.07, type: "desert", size: 1 },
  { id: "INC", name: "Incline Village", county: "nv-washoe", lat: 39.25, lon: -119.95, type: "mountain", size: 1 },
  { id: "GER", name: "Gerlach", county: "nv-washoe", lat: 40.65, lon: -119.36, type: "desert", size: 1 },
  { id: "VGC", name: "Virginia City", county: "nv-douglas-lyon-storey", lat: 39.31, lon: -119.65, scenic: true, type: "mountain", size: 1 },
  { id: "GVL", name: "Gardnerville", county: "nv-douglas-lyon-storey", lat: 38.94, lon: -119.75, type: "farm", size: 1 },
  { id: "YER", name: "Yerington", county: "nv-douglas-lyon-storey", lat: 38.99, lon: -119.16, type: "farm", size: 1 },
  { id: "TPH", name: "Tonopah", county: "nv-nye", lat: 38.07, lon: -117.23, type: "desert", size: 1 },
  { id: "BTY", name: "Beatty", county: "nv-nye", lat: 36.91, lon: -116.76, type: "desert", size: 1 },
  { id: "WMC", name: "Winnemucca", county: "nv-elko-humboldt", lat: 40.97, lon: -117.74, type: "desert", size: 1 },
  { id: "WLS", name: "Wells", county: "nv-elko-humboldt", lat: 41.11, lon: -114.96, type: "desert", size: 1 },
  { id: "HTH", name: "Hawthorne", county: "nv-churchill-esmeralda-mineral", lat: 38.52, lon: -118.62, type: "desert", size: 1 },
  { id: "GFD", name: "Goldfield", county: "nv-churchill-esmeralda-mineral", lat: 37.71, lon: -117.24, type: "desert", size: 1 },
  { id: "LOL", name: "Lovelock", county: "nv-eureka-lander-pershing", lat: 40.18, lon: -118.47, type: "farm", size: 1 },
  { id: "AUS", name: "Austin", county: "nv-eureka-lander-pershing", lat: 39.49, lon: -117.07, type: "mountain", size: 1 },
  { id: "GBN", name: "Great Basin National Park", county: "nv-lincoln-white-pine", lat: 39.01, lon: -114.22, scenic: true, type: "mountain", size: 1 },
  { id: "CLT", name: "Caliente", county: "nv-lincoln-white-pine", lat: 37.61, lon: -114.51, type: "desert", size: 1 },
  // Arizona
  { id: "MES", name: "Mesa", county: "az-maricopa", lat: 33.42, lon: -111.83, type: "metro", size: 4 },
  { id: "BKY", name: "Buckeye", county: "az-maricopa", lat: 33.37, lon: -112.58, type: "desert", size: 1 },
  { id: "WKB", name: "Wickenburg", county: "az-maricopa", lat: 33.97, lon: -112.73, type: "desert", size: 1 },
  { id: "GBD", name: "Gila Bend", county: "az-maricopa", lat: 32.95, lon: -112.72, type: "desert", size: 1 },
  { id: "AJO", name: "Ajo", county: "az-pima", lat: 32.37, lon: -112.86, type: "desert", size: 1 },
  { id: "LMN", name: "Mount Lemmon", county: "az-pima", lat: 32.44, lon: -110.79, scenic: true, type: "mountain", size: 1 },
  { id: "FLO", name: "Florence", county: "az-pinal", lat: 33.03, lon: -111.39, type: "desert", size: 1 },
  { id: "ELO", name: "Eloy", county: "az-pinal", lat: 32.76, lon: -111.55, type: "farm", size: 1 },
  { id: "SED", name: "Sedona", county: "az-yavapai", lat: 34.86, lon: -111.8, scenic: true, type: "mountain", size: 1 },
  { id: "CTW", name: "Cottonwood", county: "az-yavapai", lat: 34.74, lon: -112.0, type: "farm", size: 1 },
  { id: "KGM", name: "Kingman", county: "az-mohave", lat: 35.19, lon: -114.05, type: "desert", size: 1 },
  { id: "BHC", name: "Bullhead City", county: "az-mohave", lat: 35.15, lon: -114.56, type: "desert", size: 1 },
  { id: "PKR", name: "Parker", county: "az-la-paz-yuma", lat: 34.15, lon: -114.29, type: "desert", size: 1 },
  { id: "QZS", name: "Quartzsite", county: "az-la-paz-yuma", lat: 33.66, lon: -114.23, type: "desert", size: 1 },
  { id: "SLU", name: "San Luis", county: "az-la-paz-yuma", lat: 32.49, lon: -114.78, type: "farm", size: 1 },
  { id: "GCN", name: "Grand Canyon Village", county: "az-coconino", lat: 36.05, lon: -112.14, scenic: true, type: "mountain", size: 2 },
  { id: "PGA", name: "Page", county: "az-coconino", lat: 36.91, lon: -111.46, scenic: true, type: "desert", size: 1 },
  { id: "WLM", name: "Williams", county: "az-coconino", lat: 35.25, lon: -112.19, type: "mountain", size: 1 },
  { id: "TBC", name: "Tuba City", county: "az-coconino", lat: 36.13, lon: -111.24, type: "desert", size: 1 },
  { id: "TMB", name: "Tombstone", county: "az-cochise-santa-cruz", lat: 31.71, lon: -110.07, scenic: true, type: "desert", size: 1 },
  { id: "NOG", name: "Nogales", county: "az-cochise-santa-cruz", lat: 31.34, lon: -110.94, type: "desert", size: 1 },
  { id: "DGL", name: "Douglas", county: "az-cochise-santa-cruz", lat: 31.34, lon: -109.55, type: "desert", size: 1 },
  { id: "WCX", name: "Willcox", county: "az-cochise-santa-cruz", lat: 32.25, lon: -109.83, type: "farm", size: 1 },
  { id: "INW", name: "Winslow", county: "az-navajo", lat: 35.02, lon: -110.7, type: "desert", size: 1 },
  { id: "HBK", name: "Holbrook", county: "az-navajo", lat: 34.9, lon: -110.16, type: "desert", size: 1 },
  { id: "MVA", name: "Monument Valley", county: "az-navajo", lat: 36.93, lon: -110.11, scenic: true, type: "desert", size: 1 },
  { id: "SJN", name: "St. Johns", county: "az-apache", lat: 34.51, lon: -109.36, type: "farm", size: 1 },
  { id: "WRK", name: "Window Rock", county: "az-apache", lat: 35.68, lon: -109.05, type: "desert", size: 1 },
  { id: "SPV", name: "Springerville", county: "az-apache", lat: 34.13, lon: -109.29, type: "mountain", size: 1 },
  { id: "GLB", name: "Globe", county: "az-gila", lat: 33.39, lon: -110.79, type: "mountain", size: 1 },
  { id: "CFT", name: "Clifton", county: "az-graham-greenlee", lat: 33.05, lon: -109.3, type: "mountain", size: 1 },
  // Oregon
  { id: "GRS", name: "Gresham", county: "or-multnomah", lat: 45.5, lon: -122.43, type: "metro", size: 2 },
  { id: "MFL", name: "Multnomah Falls", county: "or-multnomah", lat: 45.58, lon: -122.12, scenic: true, type: "mountain", size: 1 },
  { id: "MTH", name: "Mount Hood", county: "or-clackamas", lat: 45.3, lon: -121.75, scenic: true, type: "mountain", size: 1 },
  { id: "FLR", name: "Florence", county: "or-lane", lat: 43.98, lon: -124.1, type: "coast", size: 1 },
  { id: "CGR", name: "Cottage Grove", county: "or-lane", lat: 43.8, lon: -123.06, type: "farm", size: 1 },
  { id: "OAR", name: "Oakridge", county: "or-lane", lat: 43.75, lon: -122.46, type: "mountain", size: 1 },
  { id: "WDB", name: "Woodburn", county: "or-marion", lat: 45.14, lon: -122.86, type: "farm", size: 1 },
  { id: "SFS", name: "Silver Falls", county: "or-marion", lat: 44.88, lon: -122.65, scenic: true, type: "mountain", size: 1 },
  { id: "ASH", name: "Ashland", county: "or-jackson", lat: 42.19, lon: -122.71, type: "mountain", size: 1 },
  { id: "RDM", name: "Redmond", county: "or-crook-deschutes", lat: 44.27, lon: -121.17, airport: "Redmond Municipal", type: "desert", size: 2 },
  { id: "PRN", name: "Prineville", county: "or-crook-deschutes", lat: 44.3, lon: -120.83, type: "farm", size: 1 },
  { id: "SIS", name: "Sisters", county: "or-crook-deschutes", lat: 44.29, lon: -121.55, type: "mountain", size: 1 },
  { id: "LEB", name: "Lebanon", county: "or-linn", lat: 44.54, lon: -122.91, type: "farm", size: 1 },
  { id: "SWH", name: "Sweet Home", county: "or-linn", lat: 44.4, lon: -122.74, type: "mountain", size: 1 },
  { id: "RDS", name: "Reedsport", county: "or-douglas", lat: 43.7, lon: -124.1, type: "coast", size: 1 },
  { id: "NBG", name: "Newberg", county: "or-yamhill", lat: 45.3, lon: -122.97, type: "farm", size: 1 },
  { id: "CVJ", name: "Cave Junction", county: "or-josephine", lat: 42.16, lon: -123.65, type: "mountain", size: 1 },
  { id: "CRL", name: "Crater Lake", county: "or-klamath", lat: 42.91, lon: -122.14, scenic: true, type: "mountain", size: 1 },
  { id: "CHQ", name: "Chiloquin", county: "or-klamath", lat: 42.58, lon: -121.87, type: "mountain", size: 1 },
  { id: "BKG", name: "Brookings", county: "or-coos-curry", lat: 42.05, lon: -124.27, type: "coast", size: 1 },
  { id: "BDN", name: "Bandon", county: "or-coos-curry", lat: 43.12, lon: -124.41, type: "coast", size: 1 },
  { id: "CNN", name: "Cannon Beach", county: "or-clatsop-tillamook", lat: 45.89, lon: -123.96, scenic: true, type: "coast", size: 1 },
  { id: "TLM", name: "Tillamook", county: "or-clatsop-tillamook", lat: 45.46, lon: -123.84, type: "farm", size: 1 },
  { id: "LCC", name: "Lincoln City", county: "or-lincoln", lat: 44.96, lon: -124.01, type: "coast", size: 1 },
  { id: "PDT", name: "Pendleton", county: "or-morrow-umatilla", lat: 45.67, lon: -118.79, type: "farm", size: 1 },
  { id: "BDM", name: "Boardman", county: "or-morrow-umatilla", lat: 45.84, lon: -119.7, type: "farm", size: 1 },
  { id: "HDR", name: "Hood River", county: "or-hood-river-jefferson-wasco", lat: 45.71, lon: -121.52, type: "farm", size: 1 },
  { id: "MDS", name: "Madras", county: "or-hood-river-jefferson-wasco", lat: 44.63, lon: -121.13, type: "farm", size: 1 },
  { id: "BKE", name: "Baker City", county: "or-baker-union-wallowa", lat: 44.77, lon: -117.83, type: "mountain", size: 1 },
  { id: "JOS", name: "Joseph", county: "or-baker-union-wallowa", lat: 45.35, lon: -117.23, scenic: true, type: "mountain", size: 1 },
  { id: "JDY", name: "John Day", county: "or-grant-harney-lake", lat: 44.42, lon: -118.95, type: "mountain", size: 1 },
  { id: "LKV", name: "Lakeview", county: "or-grant-harney-lake", lat: 42.19, lon: -120.35, type: "desert", size: 1 },
  { id: "VAL", name: "Vale", county: "or-malheur", lat: 43.98, lon: -117.24, type: "farm", size: 1 },
  { id: "ARL", name: "Arlington", county: "or-gilliam-sherman-wheeler", lat: 45.72, lon: -120.2, type: "farm", size: 1 },
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
