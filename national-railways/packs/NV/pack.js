// National Railways pack: Nevada.
// Everything hand-made for one state: main stations, towns, city maps, mountain passes,
// bridges, bays, and where the forests and deserts are. The county borders come from js/map.js
// and the mountains, lakes and rivers from js/terrain.js. What each field means: PACKS.md.
NR.addPack({
  code: "NV",
  name: "Nevada",
  // Main stations: one per county region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in js/map.js.
  // pop = county population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // No level field: Nevada opens once you own all of California (or finish every level),
    // and then its counties can be unlocked right away.
    { id: "LV", name: "Las Vegas", county: "nv-clark", lat: 36.17, lon: -115.14, airport: "Harry Reid International", type: "metro", size: 5, pop: 2265, main: true },
    { id: "RNO", name: "Reno", county: "nv-washoe", lat: 39.53, lon: -119.81, airport: "Reno-Tahoe International", type: "metro", size: 4, pop: 486, main: true },
    { id: "CSN", name: "Carson City", county: "nv-carson-city", lat: 39.16, lon: -119.77, type: "mountain", size: 2, pop: 59, main: true },
    { id: "FER", name: "Fernley", county: "nv-douglas-lyon-storey", lat: 39.61, lon: -119.25, type: "desert", size: 2, pop: 112, main: true },
    { id: "PAH", name: "Pahrump", county: "nv-nye", lat: 36.21, lon: -115.98, type: "desert", size: 1, pop: 52, main: true },
    { id: "ELK", name: "Elko", county: "nv-elko-humboldt", lat: 40.83, lon: -115.76, type: "desert", size: 1, pop: 71, main: true },
    { id: "FAL", name: "Fallon", county: "nv-churchill-esmeralda-mineral", lat: 39.47, lon: -118.78, type: "farm", size: 1, pop: 32, main: true },
    { id: "BMT", name: "Battle Mountain", county: "nv-eureka-lander-pershing", lat: 40.64, lon: -116.93, type: "desert", size: 1, pop: 15, main: true },
    { id: "ELY", name: "Ely", county: "nv-lincoln-white-pine", lat: 39.25, lon: -114.89, type: "mountain", size: 1, pop: 13, main: true },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  towns: [
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
  ],
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel.
  passes: [
    ["Daylight Pass", 36.77, -116.87],
    // Nevada
    ["Spooner Summit", 39.1, -119.9],
    ["Kingsbury Grade", 38.97, -119.88],
    ["Mount Rose Summit", 39.31, -119.89],
    ["Geiger Grade", 39.36, -119.7],
    ["Truckee River Canyon (Verdi)", 39.52, -120.0],
    ["Truckee River Canyon", 39.55, -119.45],
    ["Sand Springs Pass", 39.3, -118.36],
    ["New Pass Summit", 39.58, -117.52],
    ["Austin Summit", 39.5, -117.09],
    ["Hickison Summit", 39.44, -116.75],
    ["Pancake Summit", 39.28, -115.64],
    ["Robinson Summit", 39.37, -115.04],
    ["Connors Pass", 39.04, -114.66],
    ["Great Basin park road", 39.01, -114.12],
    ["Golconda Summit", 40.96, -117.47],
    ["Emigrant Pass", 40.66, -116.29],
    ["Palisade Canyon", 40.62, -116.2],
    ["Carlin Canyon", 40.72, -116.03],
    ["Pequop Summit", 41.04, -114.53],
    ["Oak Springs Summit", 37.63, -114.7],
    ["Mountain Springs Summit", 36.02, -115.5],
    ["Kyle Canyon", 36.27, -115.55],
    ["Black Canyon (Hoover Dam)", 36.01, -114.74],
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  bridges: [
    ["Hoover Dam Bridge", 36.01, -114.74],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    dry: [
      "nv-carson-city", "nv-churchill-esmeralda-mineral", "nv-clark", "nv-douglas-lyon-storey",
      "nv-elko-humboldt", "nv-eureka-lander-pershing", "nv-lincoln-white-pine", "nv-nye", "nv-washoe",
    ],
  },
});
