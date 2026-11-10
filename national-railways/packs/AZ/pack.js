// National Railways pack: Arizona.
// Everything hand-made for one state: main stations, towns, city maps, mountain passes,
// bridges, bays, and where the forests and deserts are. The county borders come from map.js
// and the mountains, lakes and rivers from js/terrain.js. What each field means: PACKS.md.
NR.addPack({
  code: "AZ",
  name: "Arizona",
  // A game that starts here begins owning these counties (Phoenix, Casa Grande and Tucson).
  start: ["az-maricopa", "az-pinal", "az-pima"],
  // Main stations: one per county region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = county population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // No level field: Arizona opens once you own all of California (or finish every level),
    // and then its counties can be unlocked right away.
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
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  towns: [
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
  ],
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly);
  // anywhere else, mountains need a tunnel.
  passes: [
    // Arizona
    ["Sitgreaves Pass", 35.03, -114.38],
    ["Ash Fork Hill", 35.22, -112.48],
    ["Yarnell Hill", 34.22, -112.75],
    ["Black Canyon (I-17)", 34.17, -112.13],
    ["Mingus Mountain", 34.71, -112.11],
    ["Mogollon Rim (I-17)", 34.85, -111.7],
    ["Oak Creek Canyon", 34.95, -111.75],
    ["Beeline Highway", 33.86, -111.48],
    ["Mogollon Rim (Highway 260)", 34.3, -110.95],
    ["Salt River Canyon", 33.8, -110.5],
    ["Queen Creek Canyon", 33.29, -111.08],
    ["Picacho Pass", 32.65, -111.4],
    ["Catalina Highway", 32.36, -110.73],
    ["Texas Canyon", 32.05, -110.08],
    ["Telegraph Pass", 32.66, -114.32],
    ["Navajo Bridge (Marble Canyon)", 36.82, -111.63],
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  bridges: [
    ["Laughlin-Bullhead City Bridge", 35.16, -114.57],
    ["Parker Bridge", 34.16, -114.29],
    ["Blythe-Ehrenberg Bridge (I-10)", 33.6, -114.52],
    ["Yuma bridges", 32.73, -114.61],
    ["Navajo Bridge", 36.82, -111.63],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    dry: [
      "az-apache", "az-cochise-santa-cruz", "az-coconino", "az-gila", "az-graham-greenlee",
      "az-la-paz-yuma", "az-maricopa", "az-mohave", "az-navajo", "az-pima", "az-pinal", "az-yavapai",
    ],
  },
});
