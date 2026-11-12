// National Railways pack: Saskatchewan (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The census division borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/SK/NOTES.md. Cities and populations: Statistics Canada (2021), packs/SK/raw.
NR.addPack({
  code: "SK",
  name: "Saskatchewan",
  country: "CAN",
  // A game that starts here begins owning the Saskatoon area, the Prince Albert area and the North
  // Battleford area: Saskatoon is metro and the other two farm, so the first track has riders.
  // All three touch each other.
  start: ["sk-division-no-11", "sk-division-no-15", "sk-division-no-16-17"],
  // Main stations: one per region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. airport = its name, if it has a big one.
  // scenic = a place tourists travel to. Saskatchewan has no sea, so no seaports.
  stations: [
    // Level 1: Saskatoon and the North Saskatchewan
    // Saskatoon and Regina: the province's two cities, near-equals, so both metro 3 (NOTES.md).
    { id: "SAS", name: "Saskatoon", county: "sk-division-no-11", lat: 52.14, lon: -106.69, airport: "Saskatoon John G. Diefenbaker International", type: "metro", size: 3, pop: 326, main: true, level: "saskatoon" },
    // Prince Albert: the province's third city, on the North Saskatchewan where the farms meet the
    // boreal forest; the road north to La Ronge starts here. Farm, so Saskatoon–Prince Albert has riders.
    { id: "PRA", name: "Prince Albert", county: "sk-division-no-15", lat: 53.2, lon: -105.76, type: "farm", size: 2, pop: 89, main: true, level: "saskatoon" },
    // North Battleford rather than Lloydminster (the merge's second town, 11,843 on this side):
    // Alberta's pack has the Lloydminster station. The Battlefords are the northwest's trade centre.
    { id: "NBF", name: "North Battleford", county: "sk-division-no-16-17", lat: 52.76, lon: -108.29, type: "farm", size: 1, pop: 86, main: true, level: "saskatoon" },
    // Kindersley: west-central Saskatchewan's grain and oil town, on the Alberta side of its merge.
    { id: "KIN", name: "Kindersley", county: "sk-division-no-12-13", lat: 51.47, lon: -109.16, type: "farm", size: 1, pop: 45, main: true, level: "saskatoon" },
    // Level 2: Regina and the south
    { id: "REG", name: "Regina", county: "sk-division-no-6", lat: 50.45, lon: -104.61, airport: "Regina International", type: "metro", size: 2, pop: 277, main: true, level: "south" },
    { id: "MJW", name: "Moose Jaw", county: "sk-division-no-3-7", lat: 50.39, lon: -105.55, type: "farm", size: 1, pop: 60, main: true, level: "south" },
    // Swift Current: in Palliser's Triangle, the dry short-grass prairie of the southwest, so desert
    // (like Alberta's Medicine Hat).
    { id: "SWC", name: "Swift Current", county: "sk-division-no-4-8", lat: 50.29, lon: -107.79, type: "desert", size: 1, pop: 42, main: true, level: "south" },
    // Weyburn: the merge's biggest town (11,019; Estevan has 10,851), in the southeast's farms and oil.
    { id: "WEY", name: "Weyburn", county: "sk-division-no-1-2", lat: 49.66, lon: -103.85, type: "farm", size: 1, pop: 53, main: true, level: "south" },
    // Level 3: the Parkland
    { id: "YTN", name: "Yorkton", county: "sk-division-no-5-9-10", lat: 51.21, lon: -102.46, type: "farm", size: 1, pop: 84, main: true, level: "east" },
    { id: "MFT", name: "Melfort", county: "sk-division-no-14", lat: 52.86, lon: -104.61, type: "farm", size: 1, pop: 35, main: true, level: "east" },
    // Level 4: the north
    // La Ronge: on Lac la Ronge in the boreal forest of the Canadian Shield, so mountain (the game's
    // type for forested country, as BC's Fort Nelson and Alberta's Slave Lake).
    { id: "LRG", name: "La Ronge", county: "sk-division-no-18", lat: 55.12, lon: -105.29, type: "mountain", size: 1, pop: 36, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point or townsite (sources in NOTES.md).
  towns: [
    // Saskatoon area: Wanuskewin Heritage Park, on the South Saskatchewan just north of the city.
    { id: "WAN", name: "Wanuskewin", county: "sk-division-no-11", lat: 52.22, lon: -106.6, scenic: true, type: "farm", size: 1 },
    // Regina area: Fort Qu'Appelle, between the Qu'Appelle Valley's lakes (Echo Valley Provincial Park).
    { id: "FQA", name: "Fort Qu'Appelle", county: "sk-division-no-6", lat: 50.77, lon: -103.79, scenic: true, type: "farm", size: 1 },
    // Moose Jaw area: Assiniboia, and Grasslands National Park (dry mixed-grass prairie and badlands, so desert).
    { id: "ASB", name: "Assiniboia", county: "sk-division-no-3-7", lat: 49.63, lon: -105.99, type: "farm", size: 1 },
    { id: "GRL", name: "Grasslands National Park", county: "sk-division-no-3-7", lat: 49.09, lon: -107.16, scenic: true, type: "desert", size: 1 },
    // Swift Current area: Fort Walsh, the Mounted Police fort in the Cypress Hills (forested hills, so mountain).
    { id: "FWA", name: "Fort Walsh", county: "sk-division-no-4-8", lat: 49.56, lon: -109.88, scenic: true, type: "mountain", size: 1 },
    // Weyburn area
    { id: "EST", name: "Estevan", county: "sk-division-no-1-2", lat: 49.14, lon: -102.99, type: "farm", size: 1 },
    // Yorkton area: Melville; Moosomin on the Trans-Canada; Wynyard on the Yellowhead.
    { id: "MLV", name: "Melville", county: "sk-division-no-5-9-10", lat: 50.93, lon: -102.81, type: "farm", size: 1 },
    { id: "MSM", name: "Moosomin", county: "sk-division-no-5-9-10", lat: 50.14, lon: -101.67, type: "farm", size: 1 },
    { id: "WYN", name: "Wynyard", county: "sk-division-no-5-9-10", lat: 51.77, lon: -104.18, type: "farm", size: 1 },
    // Melfort area
    { id: "NIP", name: "Nipawin", county: "sk-division-no-14", lat: 53.36, lon: -104.02, type: "farm", size: 1 },
    // Prince Albert area: Humboldt, and Batoche National Historic Site (1885) on the South Saskatchewan.
    { id: "HUM", name: "Humboldt", county: "sk-division-no-15", lat: 52.2, lon: -105.12, type: "farm", size: 1 },
    { id: "BAT", name: "Batoche", county: "sk-division-no-15", lat: 52.75, lon: -106.12, scenic: true, type: "farm", size: 1 },
    // North Battleford area: Meadow Lake (a forestry town at the boreal edge, so mountain), and
    // Prince Albert National Park at its townsite, Waskesiu Lake (lakes and boreal forest, so mountain).
    { id: "MDL", name: "Meadow Lake", county: "sk-division-no-16-17", lat: 54.12, lon: -108.44, type: "mountain", size: 1 },
    { id: "PANP", name: "Prince Albert National Park", county: "sk-division-no-16-17", lat: 53.92, lon: -106.08, scenic: true, type: "mountain", size: 1 },
    // Kindersley area: Rosetown on the road to Saskatoon, Unity in the north.
    { id: "RST", name: "Rosetown", county: "sk-division-no-12-13", lat: 51.55, lon: -107.99, type: "farm", size: 1 },
    { id: "UNI", name: "Unity", county: "sk-division-no-12-13", lat: 52.44, lon: -109.16, type: "farm", size: 1 },
    // La Ronge area: La Loche in the far northwest, and Cumberland House, Saskatchewan's oldest
    // settlement (a Hudson's Bay Company post, 1774), in the Saskatchewan River delta.
    { id: "LLO", name: "La Loche", county: "sk-division-no-18", lat: 56.49, lon: -109.4, type: "mountain", size: 1 },
    { id: "CUM", name: "Cumberland House", county: "sk-division-no-18", lat: 53.96, lon: -102.27, type: "mountain", size: 1 },
  ],
  levels: [
    {
      name: "Saskatoon & the Battlefords",
      areas: ["saskatoon"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 4 },
        { kind: "connect", a: "SAS", b: "PRA" },
      ],
    },
    {
      name: "Regina & the South",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "SAS", b: "REG" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "The Parkland",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "REG", b: "YTN" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "The North",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "PRA", b: "LRG" },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Saskatchewan is flat: no link
  // between its stations and towns needs one.
  passes: [],
  // Real bridges: [name, latitude, longitude]. A river crossed near one uses the real bridge
  // (cheaper); anywhere else you build a new one. Placed where the map's rivers pass each town.
  bridges: [
    ["Broadway Bridge (Saskatoon)", 52.12, -106.66], // the South Saskatchewan, downtown
    ["Diefenbaker Bridge (Prince Albert)", 53.2, -105.75], // the North Saskatchewan, Highway 2 north
    ["North Saskatchewan River bridge (the Battlefords)", 52.73, -108.31], // between Battleford and North Battleford
    ["Borden Bridge (Yellowhead Highway)", 52.34, -107.19], // the North Saskatchewan, Saskatoon–North Battleford
    ["Qu'Appelle River bridge (Lumsden)", 50.65, -104.86], // Highway 11, Regina–Saskatoon
    ["Qu'Appelle River bridge (Fort Qu'Appelle)", 50.77, -103.77], // Highway 10, Regina–Yorkton
    ["Saskatchewan River bridge (Nipawin)", 53.35, -104.03],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    forest: ["sk-division-no-18"], // the boreal forest of the north and the Canadian Shield
    wooded: ["sk-division-no-14", "sk-division-no-15", "sk-division-no-16-17"], // farms in the south, boreal forest in the north
    dry: ["sk-division-no-4-8"], // Palliser's Triangle, the dry southwest
  },
});
