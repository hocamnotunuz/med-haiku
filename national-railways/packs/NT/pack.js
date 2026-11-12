// National Railways pack: Northwest Territories (Canada, so its money is Maple Coins).
// Everything hand-made for one territory: main stations, towns, levels, bridges and ferries, and
// where the forests are. The census division borders come from map.js and the mountains, lakes
// and rivers from terrain.js. What each field means: PACKS.md. Judgment calls and sources:
// packs/NT/NOTES.md. Cities and populations: Statistics Canada (2021), packs/NT/raw.
NR.addPack({
  code: "NT",
  name: "Northwest Territories",
  country: "CAN",
  // A game that starts here begins owning Yellowknife's region and the two regions touching it,
  // Fort Simpson's and Hay River's: Yellowknife is metro, Fort Simpson mountain and Hay River
  // coast, so the first track has riders. Great Slave Lake's North Arm lies between Yellowknife
  // and both of them, so the first line is Fort Simpson-Hay River, and Yellowknife joins it through
  // Behchokǫ̀ (Highway 3 goes round the North Arm the same way). Fort Simpson's region comes first:
  // the game's first-track hint runs from the first start station to its nearest one, and Fort
  // Simpson-Hay River is open, where Yellowknife-Hay River crosses the lake. See NOTES.md ("Start").
  start: ["nt-region-2-4", "nt-region-3-6", "nt-region-5"],
  // Main stations: one per region, at its biggest town.
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. No seaports, and no airport big enough (NOTES.md).
  stations: [
    // Level 1: Yellowknife and Great Slave Lake
    // Yellowknife: the capital and the territory's only city (20,340 of the region's 23,455), at the
    // end of Highway 3 on the North Arm of Great Slave Lake, so metro (like Whitehorse). Downtown
    // (the raw point). 23k is size 1 by the guide.
    { id: "YK", name: "Yellowknife", county: "nt-region-3-6", lat: 62.45, lon: -114.37, type: "metro", size: 1, pop: 23, main: true, level: "great-slave" },
    // Fort Simpson: the Dehcho's village (1,100) on its island where the Liard meets the Mackenzie,
    // on Highway 1 and the gateway to Nahanni, in the boreal forest, so mountain (the game's type for
    // forested country, as Alberta and BC type their northern towns).
    { id: "FSM", name: "Fort Simpson", county: "nt-region-2-4", lat: 61.86, lon: -121.35, type: "mountain", size: 1, pop: 5, main: true, level: "great-slave" },
    // Hay River: "the Hub of the North" (3,169), where the railway from Alberta ends and the Mackenzie
    // barges start, a harbour at the river's mouth on Great Slave Lake, so coast (like Gimli).
    { id: "HAY", name: "Hay River", county: "nt-region-5", lat: 60.81, lon: -115.79, type: "coast", size: 1, pop: 6, main: true, level: "great-slave" },
    // Level 3: the Beaufort Delta
    // Inuvik: the Beaufort Delta's town (3,137) on the Mackenzie's East Channel, at the end of the
    // Dempster Highway, in the delta's spruce at the treeline, so mountain (like Happy Valley-Goose Bay).
    { id: "INU", name: "Inuvik", county: "nt-region-1", lat: 68.36, lon: -133.73, type: "mountain", size: 1, pop: 6, main: true, level: "delta" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // All size 1. Points are places.json's (on the townsites) unless a comment says why one moved.
  towns: [
    // Yellowknife (Regions 3 and 6)
    // Behchokǫ̀ (1,746): the Tłı̨chǫ's biggest community (Rae and Edzo), where Highway 3 crosses Frank
    // Channel on its way round the North Arm, so Yellowknife's link to the south and west. Its raw
    // point (Rae, 62.83, -116.06) is in the map's lake: 1.5 mi east, on the shore toward the highway.
    { id: "BHK", name: "Behchokǫ̀", county: "nt-region-3-6", lat: 62.84, lon: -116.02, type: "mountain", size: 1 },
    // Whatì (543): the Tłı̨chǫ village on Lac la Martre, at the end of the all-season road from
    // Highway 3 (opened 2021). Moved 0.6 mi east, out of the lake's outline.
    { id: "WHT", name: "Whatì", county: "nt-region-3-6", lat: 63.14, lon: -117.25, type: "mountain", size: 1 },
    // The Ingraham Trail (Highway 4) east of Yellowknife: Shield lakes, Cameron Falls in Hidden Lake
    // Territorial Park, and the aurora-viewing country. At the park's point (raw/parks.json).
    { id: "ING", name: "Ingraham Trail", county: "nt-region-3-6", lat: 62.54, lon: -113.66, scenic: true, type: "mountain", size: 1 },
    // Hay River (Region 5)
    // Twin Falls Gorge Territorial Park: Alexandra and Louise falls on the Hay River, on the Mackenzie
    // Highway by Enterprise (75), so it stands for both. At the park's point (raw/parks.json).
    { id: "TWF", name: "Twin Falls Gorge", county: "nt-region-5", lat: 60.52, lon: -116.22, scenic: true, type: "mountain", size: 1 },
    // Fort Smith (2,248): the region's second town, on the Slave River's rapids at the Alberta border,
    // headquarters and gateway of Wood Buffalo National Park (the park's point in raw/parks.json is
    // 81 mi west, in its roadless middle), so scenic.
    { id: "FSH", name: "Fort Smith", county: "nt-region-5", lat: 60.01, lon: -111.88, scenic: true, type: "mountain", size: 1 },
    // Fort Resolution (412): the old trading post on Great Slave Lake's south shore by the Slave
    // River's delta, at the end of Highway 6, so coast.
    { id: "FRS", name: "Fort Resolution", county: "nt-region-5", lat: 61.17, lon: -113.67, type: "coast", size: 1 },
    // Fort Simpson (Regions 2 and 4): the Dehcho, then the Sahtu down the Mackenzie
    // Fort Providence (618): on the Mackenzie at the Deh Cho Bridge, where Highway 3 to Yellowknife
    // leaves Highway 1.
    { id: "FPV", name: "Fort Providence", county: "nt-region-2-4", lat: 61.36, lon: -117.65, type: "mountain", size: 1 },
    // Kakisa (39): the Ka'a'gee Tu village on Kakisa Lake, by Highway 1 between the Highway 3 junction
    // and Enterprise. Small, but it is the land link round the lake's west end: in Tough, Fort
    // Providence-Hay River and -Twin Falls cross the lake (blocked), and Kakisa joins them (NOTES.md).
    { id: "KAK", name: "Kakisa", county: "nt-region-2-4", lat: 60.94, lon: -117.42, type: "mountain", size: 1 },
    // Fort Liard (468): on the Liard Highway near the BC border, the road to Fort Nelson.
    { id: "FLI", name: "Fort Liard", county: "nt-region-2-4", lat: 60.24, lon: -123.48, type: "mountain", size: 1 },
    // Nahanni National Park Reserve: the South Nahanni's canyons and Virginia Falls in the Mackenzie
    // Mountains, one of the first UNESCO World Heritage Sites (1978), reached by floatplane from Fort
    // Simpson. At the park's point (raw/parks.json), about 2 mi east of Virginia Falls.
    { id: "NAH", name: "Nahanni", county: "nt-region-2-4", lat: 61.6, lon: -125.69, scenic: true, type: "mountain", size: 1 },
    // Wrigley (117): where the all-season Highway 1 ends and the winter road to the Sahtu begins,
    // halfway from Fort Simpson to Norman Wells.
    { id: "WRG", name: "Wrigley", county: "nt-region-2-4", lat: 63.23, lon: -123.47, type: "mountain", size: 1 },
    // Norman Wells (673): the Sahtu's biggest town, the oil field on the Mackenzie and the Canol Road's
    // start, on the winter road north from Wrigley.
    { id: "NWL", name: "Norman Wells", county: "nt-region-2-4", lat: 65.28, lon: -126.83, type: "mountain", size: 1 },
    // Délı̨nę (573): the only town on Great Bear Lake, where the Great Bear River leaves it, so coast.
    // Moved 1.4 mi north, out of the lake's outline.
    { id: "DLN", name: "Délı̨nę", county: "nt-region-2-4", lat: 65.21, lon: -123.42, type: "coast", size: 1 },
    // Fort Good Hope (507): the Sahtu's northern village on the Mackenzie, at the end of the winter road.
    { id: "FGH", name: "Fort Good Hope", county: "nt-region-2-4", lat: 66.26, lon: -128.64, type: "mountain", size: 1 },
    // Inuvik (Region 1): the Beaufort Delta
    // Tuktoyaktuk (937): on the Arctic Ocean at the end of the Inuvik-Tuktoyaktuk Highway (2017), with
    // its pingos. Its raw point is just off the map's coast: moved 0.7 mi south onto the land.
    { id: "TUK", name: "Tuktoyaktuk", county: "nt-region-1", lat: 69.44, lon: -133.03, scenic: true, type: "coast", size: 1 },
    // Fort McPherson (647): the Gwich'in town on the Peel River, the Dempster Highway's first stop
    // from the Yukon.
    { id: "FMP", name: "Fort McPherson", county: "nt-region-1", lat: 67.44, lon: -134.88, type: "mountain", size: 1 },
    // Aklavik (536): the delta's old town on the West Channel under the Richardson Mountains, reached
    // by an ice road in winter.
    { id: "AKL", name: "Aklavik", county: "nt-region-1", lat: 68.22, lon: -135.01, type: "mountain", size: 1 },
    // Paulatuk (298): the Inuvialuit hamlet on Darnley Bay, gateway to Tuktut Nogait National Park;
    // no road. Its raw point is just off the map's coast: moved 0.7 mi south onto the land.
    { id: "PAU", name: "Paulatuk", county: "nt-region-1", lat: 69.34, lon: -124.07, type: "coast", size: 1 },
  ],
  levels: [
    {
      name: "Yellowknife & Great Slave Lake",
      areas: ["great-slave"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "connect", a: "YK", b: "FSM" },
      ],
    },
    {
      name: "The Mackenzie Highway",
      areas: ["great-slave"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "YK", b: "HAY" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
    {
      name: "Down the Mackenzie to the Delta",
      areas: ["delta"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "counties", target: 4 },
        { kind: "connect", a: "YK", b: "INU" },
      ],
    },
  ],
  // Real mountain passes: none needed. The Mackenzie valley is flat, the Dempster from the Yukon
  // crosses the Richardson Mountains as hills on the map (and uses Yukon's North Fork Pass), and no
  // road crosses the Mackenzie Mountains (NOTES.md).
  passes: [],
  // Real bridges and ferries: [name, latitude, longitude]. Water crossed near one uses it (cheaper,
  // and any length); anywhere else you build a new bridge, if the water is narrow enough. Positions
  // are approximate, on the map's water where the road crosses (NOTES.md).
  bridges: [
    // Highway 3's bridge over the Mackenzie at Fort Providence (2012). On the map the river begins
    // just west of the hamlet (east of it, the Mackenzie's head is drawn as Great Slave Lake), so the
    // point is on the river there: lines from Fort Providence to Fort Simpson, Fort Liard and Nahanni
    // cross it on the bridge. Nearer the lake, the lake's long crossings east of the hamlet (to Twin
    // Falls and Enterprise, 20 mi of water) would count as using it.
    ["Deh Cho Bridge", 61.35, -117.68],
    // Highway 3's bridge over Frank Channel at Behchokǫ̀, between Marian Lake and the North Arm: lines
    // from Behchokǫ̀ south to Fort Providence (and on toward Fort Liard) cross the channel on it.
    ["Frank Channel Bridge", 62.8, -116.05],
    // Highway 1's ferry over the Liard into Fort Simpson (an ice bridge in winter). The map's rivers
    // meet just east of the village, and lines leaving it east (to Hay River, Fort Providence,
    // Behchokǫ̀ and Yellowknife) cross them on the ferry.
    ["Liard River ferry (Fort Simpson)", 61.85, -121.29],
    // Not listed: a Hay River bridge. The Hay River isn't on the map, and a point at the town would
    // sit on Great Slave Lake's shore, so lines from Hay River would cross the lake on it (NOTES.md).
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  // The south is boreal forest. Inuvik's region is mostly tundra by area (the Arctic coast and
  // islands), but its towns and roads are in the delta's spruce, and one region takes one look:
  // forest, as Yukon, Nord-du-Québec and Labrador are (NOTES.md).
  biomes: { forest: ["nt-region-3-6", "nt-region-2-4", "nt-region-5", "nt-region-1"] },
});
