// National Railways pack: Yukon (Canada, so its money is Maple Coins).
// Everything hand-made for one territory: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The census division borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/YT/NOTES.md. Cities and populations: Statistics Canada (2021), packs/YT/raw.
NR.addPack({
  code: "YT",
  name: "Yukon",
  country: "CAN",
  // A game that starts here begins owning the whole territory: Yukon is one census division, so
  // one region with one main station (Whitehorse). Its towns appear over time, and every one of
  // them is mountain to Whitehorse's metro, so they all have riders to the capital. The checker
  // and the pack test want two main stations of two types at the start, which one region can't
  // give: see NOTES.md ("Start").
  start: ["yt-yukon"],
  // Main stations: one per region, at its biggest city.
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level it belongs to in Levels mode.
  stations: [
    // Whitehorse: the capital and the territory's only city (28,201 of Yukon's 40,232 people), where
    // the Alaska and Klondike highways meet, so metro (like Prince George). Downtown by the Yukon
    // River (the raw point). 40k is size 1 by the guide. No airport: see NOTES.md.
    { id: "WHI", name: "Whitehorse", county: "yt-yukon", lat: 60.72, lon: -135.06, type: "metro", size: 1, pop: 40, main: true, level: "yukon" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Every one is mountain: the boreal valleys between the Yukon's ranges (as BC and Quebec type
  // their northern towns). Points are places.json's, which sit on the townsites (NOTES.md).
  towns: [
    // The south: the Alaska Highway and the Southern Lakes
    // Carcross: the White Pass & Yukon Route's lakeside town between Bennett and Nares lakes, with
    // the Carcross Desert and Emerald Lake on the Klondike Highway to Skagway.
    { id: "CAR", name: "Carcross", county: "yt-yukon", lat: 60.17, lon: -134.71, scenic: true, type: "mountain", size: 1 },
    // Haines Junction: the gateway to Kluane National Park (its visitor centre), where the Haines Road
    // leaves the Alaska Highway under the St. Elias Mountains. (The park's own point is in the
    // icefields, 21 miles southwest.)
    { id: "HJ", name: "Kluane (Haines Junction)", county: "yt-yukon", lat: 60.75, lon: -137.51, scenic: true, type: "mountain", size: 1 },
    // Teslin: the Tlingit village on Teslin Lake, at the Nisutlin Bay Bridge.
    { id: "TES", name: "Teslin", county: "yt-yukon", lat: 60.17, lon: -132.72, type: "mountain", size: 1 },
    // Watson Lake: the Alaska Highway's gateway to the Yukon (the Sign Post Forest), where the
    // Robert Campbell Highway starts and the Stewart-Cassiar joins, near the BC border.
    { id: "WAT", name: "Watson Lake", county: "yt-yukon", lat: 60.06, lon: -128.71, type: "mountain", size: 1 },
    // The centre: the Klondike and Robert Campbell highways
    // Carmacks: on the Yukon River at one of its four bridges, where the Robert Campbell Highway leaves
    // the Klondike Highway.
    { id: "CMK", name: "Carmacks", county: "yt-yukon", lat: 62.09, lon: -136.3, type: "mountain", size: 1 },
    // Faro: the old lead-zinc mining town in the Anvil Range.
    { id: "FAR", name: "Faro", county: "yt-yukon", lat: 62.23, lon: -133.36, type: "mountain", size: 1 },
    // Ross River: the Kaska village where the Robert Campbell Highway meets the Canol Road.
    { id: "ROS", name: "Ross River", county: "yt-yukon", lat: 61.98, lon: -132.45, type: "mountain", size: 1 },
    // Mayo: the Stewart River village of the Keno Hill silver mines.
    { id: "MAY", name: "Mayo", county: "yt-yukon", lat: 63.59, lon: -135.9, type: "mountain", size: 1 },
    // The north: the Klondike and the Dempster Highway
    // Dawson City: the town of the Klondike Gold Rush (the Dawson Historical Complex and Dredge No. 4
    // national historic sites), the Yukon's second town.
    { id: "DAW", name: "Dawson City", county: "yt-yukon", lat: 64.06, lon: -139.43, scenic: true, type: "mountain", size: 1 },
    // Tombstone Territorial Park: the Ogilvie Mountains' granite peaks, at its interpretive centre
    // on the Dempster Highway (km 71.5; Government of Yukon).
    { id: "TOM", name: "Tombstone Park", county: "yt-yukon", lat: 64.5, lon: -138.22, scenic: true, type: "mountain", size: 1 },
    // Old Crow: the Vuntut Gwitchin village on the Porcupine River, the Yukon's only community with no
    // road (only flights). In the game a new line can reach it from Tombstone: see NOTES.md.
    { id: "OLD", name: "Old Crow", county: "yt-yukon", lat: 67.57, lon: -139.84, type: "mountain", size: 1 },
  ],
  // The start owns the only region, so the levels are checklists: they all share the one area.
  levels: [
    {
      name: "Whitehorse & the Southern Lakes",
      areas: ["yukon"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "connect", a: "WHI", b: "CAR" },
      ],
    },
    {
      name: "The Klondike",
      areas: ["yukon"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "WHI", b: "DAW" },
      ],
    },
    {
      name: "The Alaska Highway",
      areas: ["yukon"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "WHI", b: "WAT" },
        { kind: "counties", target: 2 },
      ],
    },
  ],
  // Real mountain passes: [name, latitude, longitude]. Track that crosses mountains near one goes
  // over the pass (it costs more and trains climb slowly); anywhere else, mountains need a tunnel.
  // Sources in NOTES.md.
  passes: [
    // The Dempster Highway's highest point (1,289 m), over the Ogilvie Mountains by Tombstone
    // (Government of Yukon: km 80, 64.575, -138.252). Dawson-Tombstone and Tombstone-Old Crow use it.
    ["North Fork Pass", 64.58, -138.25],
    // The Alaska Highway's low crossing of the divide between the Yukon and the Mackenzie (Swift
    // River and Rancheria valleys), between Teslin and Watson Lake (Government of Yukon: km 1120,
    // 60.0735, -130.942).
    ["Continental Divide (Alaska Highway)", 60.07, -130.94],
    // Not a pass: the Alaska Highway west of Whitehorse runs through the Takhini lowland past
    // Champagne to Haines Junction, while the straight line crosses the ridges south of it (like
    // BC's valley routes). At Champagne (GNDB).
    ["Alaska Highway at Champagne", 60.79, -136.48],
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge (cheaper,
  // and any length); anywhere else you build a new bridge, if the water is narrow enough. Positions
  // are approximate (at the crossing in each place).
  bridges: [
    // The Klondike Highway's bridge over the Yukon River at Carmacks (one of the river's four bridges).
    ["Yukon River bridge (Carmacks)", 62.1, -136.29],
    // The Alaska Highway's bridge over the Liard River at Upper Liard, west of Watson Lake.
    ["Upper Liard Bridge", 60.05, -128.9],
    // The Alaska Highway's Nisutlin Bay Bridge at Teslin, the longest water span on the highway.
    ["Nisutlin Bay Bridge (Teslin)", 60.16, -132.72],
    // The Klondike Highway and the White Pass & Yukon Route's swing bridge over the narrows between
    // Bennett and Nares lakes at Carcross.
    ["Carcross bridge", 60.17, -134.7],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  // The Yukon is boreal forest (spruce on the valley floors), like BC's Stikine, Quebec's Nord-du-Québec
  // and Labrador; its farms are a few fields near Whitehorse.
  biomes: { forest: ["yt-yukon"], wooded: [], dry: [] },
});
