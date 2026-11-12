// National Railways pack: Manitoba (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The census division borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/MB/NOTES.md. Cities and populations: Statistics Canada (2021), packs/MB/raw.
NR.addPack({
  code: "MB",
  name: "Manitoba",
  country: "CAN",
  // A game that starts here begins owning the Winnipeg area, the Steinbach area and the Selkirk
  // area: Winnipeg is metro and the other two farm, so the first track has riders. Steinbach and
  // Selkirk are Winnipeg's two biggest compact neighbours (the Gimli area, bigger, reaches from
  // Winnipeg's edge to the far north and Saskatchewan).
  start: ["mb-division-no-11", "mb-division-no-2", "mb-division-no-13"],
  // Main stations: one per region, at its biggest town (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. airport = its name, if it has a big one.
  // Manitoba's only salt water is Hudson Bay (Churchill), so no container seaports.
  stations: [
    // Level 1: Winnipeg and the Red River
    { id: "WPG", name: "Winnipeg", county: "mb-division-no-11", lat: 49.88, lon: -97.15, airport: "Winnipeg James Armstrong Richardson International", type: "metro", size: 4, pop: 754, main: true, level: "winnipeg" },
    // Steinbach: Manitoba's third city, in the farm country southeast of Winnipeg.
    { id: "STB", name: "Steinbach", county: "mb-division-no-2", lat: 49.53, lon: -96.68, type: "farm", size: 1, pop: 84, main: true, level: "winnipeg" },
    // Selkirk: on the Red River near Lake Winnipeg; the region named after it (Division 13).
    { id: "SEL", name: "Selkirk", county: "mb-division-no-13", lat: 50.14, lon: -96.88, type: "farm", size: 1, pop: 52, main: true, level: "winnipeg" },
    // Beausejour rather than Oakbank (5,041, the region's biggest place): Oakbank is a commuter
    // community 23 km from downtown Winnipeg at the region's western edge, between the Winnipeg and
    // Selkirk stations. Beausejour (3,307) is the incorporated town and service centre, on the way
    // to Lac du Bonnet and the Whiteshell.
    { id: "BSJ", name: "Beausejour", county: "mb-division-no-1-12", lat: 50.06, lon: -96.52, type: "farm", size: 1, pop: 45, main: true, level: "winnipeg" },
    // Level 2: the prairies west and south of Winnipeg
    { id: "PLP", name: "Portage la Prairie", county: "mb-division-no-9-10", lat: 49.97, lon: -98.29, type: "farm", size: 1, pop: 37, main: true, level: "west" },
    // Brandon: Manitoba's second city, the farm centre of the southwest. Farm, so Winnipeg–Brandon
    // has riders.
    { id: "BRD", name: "Brandon", county: "mb-division-no-7", lat: 49.85, lon: -99.95, type: "farm", size: 2, pop: 71, main: true, level: "west" },
    { id: "WNK", name: "Winkler", county: "mb-division-no-3-4", lat: 49.18, lon: -97.94, type: "farm", size: 1, pop: 67, main: true, level: "west" },
    { id: "NEE", name: "Neepawa", county: "mb-division-no-8-15", lat: 50.23, lon: -99.47, type: "farm", size: 1, pop: 37, main: true, level: "west" },
    // Virden, not Killarney (the region is named after Killarney - Turtle Mountain's municipality,
    // 3,520): Virden is the bigger town both ways (3,118 people, population centre 2,904; Killarney's
    // population centre 2,499), on the Trans-Canada and the CPR main line.
    { id: "VRD", name: "Virden", county: "mb-division-no-5-6", lat: 49.85, lon: -100.93, type: "farm", size: 1, pop: 23, main: true, level: "west" },
    // Level 3: the Interlake and the Parkland
    // Gimli: the Interlake's biggest town (6,569 in its municipality), a harbour and beach town on
    // Lake Winnipeg, so coast.
    { id: "GIM", name: "Gimli", county: "mb-division-no-14-18-19", lat: 50.63, lon: -96.99, type: "coast", size: 1, pop: 62, main: true, level: "lakes" },
    { id: "DAU", name: "Dauphin", county: "mb-division-no-16-17-20", lat: 51.15, lon: -100.05, type: "farm", size: 1, pop: 42, main: true, level: "lakes" },
    // Level 4: the North
    // The Pas: where the Hudson Bay Railway starts, on the Saskatchewan River in the boreal forest,
    // so mountain (the game's type for forested country, like Saskatchewan's La Ronge).
    { id: "TPS", name: "The Pas", county: "mb-division-no-21", lat: 53.83, lon: -101.25, type: "mountain", size: 1, pop: 22, main: true, level: "north" },
    // Thompson: "the Hub of the North", the northern city that the far north's roads, flights and
    // the railway serve. Metro like Alberta's Fort McMurray and BC's Prince George.
    { id: "THO", name: "Thompson", county: "mb-division-no-22-23", lat: 55.74, lon: -97.86, type: "metro", size: 1, pop: 47, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point or townsite (sources in NOTES.md).
  towns: [
    // Steinbach area: Niverville, on the Red River side of the region.
    { id: "NIV", name: "Niverville", county: "mb-division-no-2", lat: 49.61, lon: -97.04, type: "farm", size: 1 },
    // Selkirk area: Lower Fort Garry National Historic Site, the stone Hudson's Bay Company fort on the Red.
    { id: "LFG", name: "Lower Fort Garry", county: "mb-division-no-13", lat: 50.11, lon: -96.93, scenic: true, type: "farm", size: 1 },
    // Beausejour area: Lac du Bonnet on the Winnipeg River, and Whiteshell Provincial Park at Falcon
    // Lake on the Trans-Canada (Canadian Shield lakes and forest, so mountain).
    { id: "LDB", name: "Lac du Bonnet", county: "mb-division-no-1-12", lat: 50.25, lon: -96.06, type: "mountain", size: 1 },
    { id: "WSH", name: "Whiteshell", county: "mb-division-no-1-12", lat: 49.69, lon: -95.33, scenic: true, type: "mountain", size: 1 },
    // Winkler area: Morden and Altona (the Pembina Valley).
    { id: "MRD", name: "Morden", county: "mb-division-no-3-4", lat: 49.19, lon: -98.1, type: "farm", size: 1 },
    { id: "ALN", name: "Altona", county: "mb-division-no-3-4", lat: 49.1, lon: -97.56, type: "farm", size: 1 },
    // Brandon area: Souris and Carberry.
    { id: "SOU", name: "Souris", county: "mb-division-no-7", lat: 49.62, lon: -100.26, type: "farm", size: 1 },
    { id: "CBR", name: "Carberry", county: "mb-division-no-7", lat: 49.87, lon: -99.36, type: "farm", size: 1 },
    // Virden area: Killarney, and the International Peace Garden on Turtle Mountain at the US border.
    { id: "KLY", name: "Killarney", county: "mb-division-no-5-6", lat: 49.18, lon: -99.66, type: "farm", size: 1 },
    { id: "IPG", name: "International Peace Garden", county: "mb-division-no-5-6", lat: 49.01, lon: -100.07, scenic: true, type: "farm", size: 1 },
    // Neepawa area: Minnedosa, and Spruce Woods Provincial Park with the Spirit Sands dunes (desert).
    { id: "MDO", name: "Minnedosa", county: "mb-division-no-8-15", lat: 50.25, lon: -99.84, type: "farm", size: 1 },
    { id: "SPW", name: "Spruce Woods", county: "mb-division-no-8-15", lat: 49.71, lon: -99.09, scenic: true, type: "desert", size: 1 },
    // Dauphin area: Swan River, Russell, and Riding Mountain National Park at its townsite, Wasagaming.
    { id: "SWR", name: "Swan River", county: "mb-division-no-16-17-20", lat: 52.11, lon: -101.27, type: "farm", size: 1 },
    { id: "RUS", name: "Russell", county: "mb-division-no-16-17-20", lat: 50.78, lon: -101.28, type: "farm", size: 1 },
    { id: "RMNP", name: "Riding Mountain National Park", county: "mb-division-no-16-17-20", lat: 50.66, lon: -99.97, scenic: true, type: "mountain", size: 1 },
    // Gimli area: Stonewall, Arborg, and the Narcisse Snake Dens (red-sided garter snakes by the
    // tens of thousands each spring). Hecla Island isn't used: the map's Lake Winnipeg covers it.
    { id: "STW", name: "Stonewall", county: "mb-division-no-14-18-19", lat: 50.13, lon: -97.33, type: "farm", size: 1 },
    { id: "ARB", name: "Arborg", county: "mb-division-no-14-18-19", lat: 50.91, lon: -97.22, type: "farm", size: 1 },
    { id: "NAR", name: "Narcisse Snake Dens", county: "mb-division-no-14-18-19", lat: 50.72, lon: -97.62, scenic: true, type: "farm", size: 1 },
    // The Pas area: the mining towns of Flin Flon (on the Saskatchewan border) and Snow Lake.
    { id: "FFN", name: "Flin Flon", county: "mb-division-no-21", lat: 54.77, lon: -101.87, type: "mountain", size: 1 },
    { id: "SNL", name: "Snow Lake", county: "mb-division-no-21", lat: 54.88, lon: -100.04, type: "mountain", size: 1 },
    // Thompson area: Churchill on Hudson Bay (polar bears, beluga whales, the end of the Hudson Bay
    // Railway); Gillam (the railway and the Nelson River dams); Wabowden (Highway 6 and the railway).
    { id: "CHU", name: "Churchill", county: "mb-division-no-22-23", lat: 58.78, lon: -94.19, scenic: true, type: "coast", size: 1 },
    { id: "GLM", name: "Gillam", county: "mb-division-no-22-23", lat: 56.35, lon: -94.71, type: "mountain", size: 1 },
    { id: "WAB", name: "Wabowden", county: "mb-division-no-22-23", lat: 54.91, lon: -98.63, type: "mountain", size: 1 },
  ],
  levels: [
    {
      name: "Winnipeg & the Red River",
      areas: ["winnipeg"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 4 },
        { kind: "connect", a: "WPG", b: "SEL" },
      ],
    },
    {
      name: "The Prairies & Westman",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "WPG", b: "BRD" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "The Interlake & the Parkland",
      areas: ["lakes"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "WPG", b: "DAU" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "The North",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "TPS", b: "THO" },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Manitoba is flat: no link between
  // its stations and towns needs one.
  passes: [],
  // Real bridges: [name, latitude, longitude]. A river crossed near one uses the real bridge
  // (cheaper); anywhere else you build a new one. Placed where the map's rivers pass each town.
  bridges: [
    ["Provencher Bridge (Winnipeg)", 49.89, -97.12], // the Red, downtown to St. Boniface
    ["Norwood Bridge (Winnipeg)", 49.88, -97.13], // the Red, just above the Forks
    ["Disraeli Bridge (Winnipeg)", 49.91, -97.12], // the Red, north of downtown
    ["Osborne Bridge (Winnipeg)", 49.88, -97.14], // the Assiniboine, downtown
    ["Lockport Bridge (St. Andrews Lock and Dam)", 50.08, -96.94], // the Red, Highway 44
    ["Selkirk Bridge", 50.15, -96.86], // the Red, Selkirk to East Selkirk
    ["Assiniboine River bridge (Portage la Prairie)", 49.94, -98.28], // south of the city
    ["18th Street Bridge (Brandon)", 49.85, -99.96], // the Assiniboine
    ["Souris River bridge (Souris)", 49.61, -100.26],
    ["Saskatchewan River bridge (The Pas)", 53.85, -101.22], // Highway 10 and the Hudson Bay Railway
    ["Kettle Rapids bridge (Nelson River)", 56.39, -94.7], // the Hudson Bay Railway near Gillam
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    // The boreal forest and the Canadian Shield: the north, the lands around Lake Winnipeg (most of
    // the Gimli area) and the Whiteshell side of the Beausejour area
    forest: ["mb-division-no-21", "mb-division-no-22-23", "mb-division-no-14-18-19", "mb-division-no-1-12"],
    // The Parkland: farms on the flats, forest on Riding Mountain, Duck Mountain and the Porcupine Hills
    wooded: ["mb-division-no-16-17-20"],
  },
});
