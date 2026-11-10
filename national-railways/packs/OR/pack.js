// National Railways pack: Oregon.
// Everything hand-made for one state: main stations, towns, city maps, mountain passes,
// bridges, bays, and where the forests and deserts are. The county borders come from js/map.js
// and the mountains, lakes and rivers from js/terrain.js. What each field means: PACKS.md.
NR.addPack({
  code: "OR",
  name: "Oregon",
  // A game that starts here begins owning these counties (Portland, Hillsboro and Oregon City).
  start: ["or-multnomah", "or-washington", "or-clackamas"],
  // Main stations: one per county region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in js/map.js.
  // pop = county population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // No level field: Oregon opens once you own all of California (or finish every level),
    // and then its counties can be unlocked right away.
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
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  towns: [
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
  ],
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel.
  passes: [
    ["Siskiyou Summit", 42.07, -122.6],
    // Oregon
    ["Sexton Summit", 42.6, -123.37],
    ["Canyon Creek Pass", 42.85, -123.25],
    ["Pass Creek Canyon", 43.66, -123.2],
    ["Green Springs Summit", 42.13, -122.48],
    ["Annie Creek Canyon (Crater Lake)", 42.8, -122.1],
    ["Willamette Pass", 43.6, -122.04],
    ["McKenzie Pass", 44.26, -121.81],
    ["Santiam Pass", 44.42, -121.87],
    ["Barlow Pass", 45.28, -121.68],
    ["Columbia River Gorge (west)", 45.56, -122.2],
    ["Columbia River Gorge (east)", 45.66, -121.5],
    ["Sunset Highway summit", 45.8, -123.4],
    ["Wilson River Highway", 45.6, -123.42],
    ["Van Duzer Corridor", 45.05, -123.75],
    ["Highway 20 (Coast Range)", 44.62, -123.62],
    ["Siuslaw River", 44.04, -123.7],
    ["Umpqua River", 43.65, -123.75],
    ["Coquille River", 43.1, -123.9],
    ["Deadman Pass", 45.6, -118.5],
    ["Ladd Canyon", 45.2, -117.95],
    ["Minam Grade", 45.62, -117.72],
    ["Dixie Pass", 44.54, -118.58],
    ["Quartz Mountain Pass", 42.32, -120.82],
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  bridges: [
    ["Steel Bridge (Portland)", 45.53, -122.67],
    ["Marion Street Bridge (Salem)", 44.94, -123.05],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    forest: [
      "or-clatsop-tillamook", "or-coos-curry", "or-douglas", "or-josephine", "or-lincoln",
    ],
    wooded: [
      "or-baker-union-wallowa", "or-benton", "or-clackamas", "or-columbia",
      "or-hood-river-jefferson-wasco", "or-jackson", "or-klamath", "or-lane", "or-linn", "or-marion",
      "or-multnomah", "or-polk", "or-washington", "or-yamhill",
    ],
    dry: [
      "or-crook-deschutes", "or-gilliam-sherman-wheeler", "or-grant-harney-lake", "or-malheur",
      "or-morrow-umatilla",
    ],
  },
});
