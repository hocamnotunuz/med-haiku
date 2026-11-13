// National Railways pack: Alberta (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The census division borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/AB/NOTES.md. Cities and populations: Statistics Canada (2021), packs/AB/raw.
NR.addPack({
  code: "AB",
  name: "Alberta",
  country: "CAN",
  // A game that starts here begins owning the Calgary area, the Rockies (Canmore, Banff, Jasper)
  // and the Red Deer area: Calgary is metro, Canmore mountain and Red Deer farm, so the first track
  // has riders. All three touch each other.
  start: ["ab-division-no-6", "ab-division-no-14-15", "ab-division-no-8-9"],
  // Main stations: one per region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. airport = its name, if it has a big one.
  // scenic = a place tourists travel to. Alberta has no sea, so no seaports.
  stations: [
    // Level 1: Calgary, the Rockies and central Alberta
    { id: "CGY", name: "Calgary", county: "ab-division-no-6", lat: 51.05, lon: -114.06, airport: "Calgary International", type: "metro", size: 5, pop: 1591, main: true, level: "calgary" },
    // Canmore: the Bow Valley at the mountains' edge, the gateway to Banff, so mountain.
    { id: "CNM", name: "Canmore", county: "ab-division-no-14-15", lat: 51.08, lon: -115.37, type: "mountain", size: 1, pop: 66, main: true, level: "calgary" },
    // Red Deer: the city in the middle of central Alberta's farms, halfway between Calgary and Edmonton.
    { id: "RDR", name: "Red Deer", county: "ab-division-no-8-9", lat: 52.27, lon: -113.81, type: "farm", size: 2, pop: 234, main: true, level: "calgary" },
    // Strathmore: Wheatland County's wheat and cattle, so farm.
    { id: "STM", name: "Strathmore", county: "ab-division-no-5", lat: 51.05, lon: -113.39, type: "farm", size: 1, pop: 56, main: true, level: "calgary" },
    // Level 2: southern and east-central Alberta
    // Lethbridge: the centre of southern Alberta's irrigated farms, so farm.
    { id: "LET", name: "Lethbridge", county: "ab-division-no-2-3", lat: 49.69, lon: -112.84, type: "farm", size: 2, pop: 219, main: true, level: "south" },
    // Medicine Hat: in Palliser's Triangle, the dry short-grass prairie of the southeast, so desert.
    { id: "MHT", name: "Medicine Hat", county: "ab-division-no-1", lat: 50.04, lon: -110.68, type: "desert", size: 1, pop: 83, main: true, level: "south" },
    { id: "WAI", name: "Wainwright", county: "ab-division-no-4-7", lat: 52.83, lon: -110.86, type: "farm", size: 1, pop: 50, main: true, level: "south" },
    // Level 3: Edmonton and the parkland
    { id: "EDM", name: "Edmonton", county: "ab-division-no-11", lat: 53.53, lon: -113.49, airport: "Edmonton International", type: "metro", size: 5, pop: 1462, main: true, level: "central" },
    // Lloydminster straddles the Saskatchewan border (110°W); its point in raw/places.json is on
    // the Saskatchewan side, so the station sits on the Alberta side of the city.
    { id: "LLD", name: "Lloydminster", county: "ab-division-no-10", lat: 53.28, lon: -110.02, type: "farm", size: 1, pop: 95, main: true, level: "central" },
    // Whitecourt: a forestry town in the wooded hills where the McLeod meets the Athabasca, so mountain
    // (the game's type for forested hill country).
    { id: "WCT", name: "Whitecourt", county: "ab-division-no-13", lat: 54.14, lon: -115.68, type: "mountain", size: 1, pop: 68, main: true, level: "central" },
    // Cold Lake: the Lakeland's farms around Bonnyville and St. Paul, so farm.
    { id: "CLD", name: "Cold Lake", county: "ab-division-no-12", lat: 54.45, lon: -110.17, type: "farm", size: 1, pop: 67, main: true, level: "central" },
    // Level 4: the north
    // Grande Prairie: the Peace River country's grain farms, so farm.
    { id: "GPR", name: "Grande Prairie", county: "ab-division-no-18-19", lat: 55.17, lon: -118.8, type: "farm", size: 2, pop: 134, main: true, level: "north" },
    // Slave Lake: boreal forest on Lesser Slave Lake, so mountain (forested country, as BC's north).
    { id: "SLK", name: "Slave Lake", county: "ab-division-no-17", lat: 55.28, lon: -114.77, type: "mountain", size: 1, pop: 62, main: true, level: "north" },
    // Fort McMurray rather than "Wood Buffalo" (the regional municipality it belongs to): the city of
    // the oil sands and the north's only big town, so metro (like BC's Prince George).
    { id: "FMM", name: "Fort McMurray", county: "ab-division-no-16", lat: 56.7, lon: -111.36, type: "metro", size: 2, pop: 75, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their gateway town or visitor area (sources in NOTES.md).
  towns: [
    // Calgary area
    { id: "AIR", name: "Airdrie", county: "ab-division-no-6", lat: 51.29, lon: -114.01, type: "metro", size: 2 },
    { id: "OKO", name: "Okotoks", county: "ab-division-no-6", lat: 50.73, lon: -113.98, type: "metro", size: 1 },
    // The Rockies: Banff and Jasper national parks (Banff and Lake Louise in Banff, Jasper in Jasper)
    { id: "BNF", name: "Banff", county: "ab-division-no-14-15", lat: 51.18, lon: -115.57, scenic: true, type: "mountain", size: 2 },
    { id: "LKL", name: "Lake Louise", county: "ab-division-no-14-15", lat: 51.43, lon: -116.18, scenic: true, type: "mountain", size: 1 },
    // Jasper: at the park's information centre in the townsite.
    { id: "JAS", name: "Jasper", county: "ab-division-no-14-15", lat: 52.88, lon: -118.08, scenic: true, type: "mountain", size: 1 },
    { id: "HIN", name: "Hinton", county: "ab-division-no-14-15", lat: 53.41, lon: -117.56, type: "mountain", size: 1 },
    // Red Deer area: Rocky Mountain House, in the foothills on the North Saskatchewan.
    { id: "RMH", name: "Rocky Mountain House", county: "ab-division-no-8-9", lat: 52.37, lon: -114.92, type: "mountain", size: 1 },
    // Edmonton area
    { id: "STA", name: "St. Albert", county: "ab-division-no-11", lat: 53.64, lon: -113.62, type: "metro", size: 2 },
    { id: "WET", name: "Wetaskiwin", county: "ab-division-no-11", lat: 52.97, lon: -113.38, type: "farm", size: 1 },
    // Lethbridge area: Brooks, Waterton Lakes and Dinosaur Provincial Park (the badlands, so desert).
    { id: "BRK", name: "Brooks", county: "ab-division-no-2-3", lat: 50.57, lon: -111.89, type: "farm", size: 1 },
    { id: "WTL", name: "Waterton Lakes", county: "ab-division-no-2-3", lat: 49.05, lon: -113.91, scenic: true, type: "mountain", size: 1 },
    // Dinosaur Provincial Park: at Wikipedia's point (raw/parks.json's falls just across the Red Deer
    // River, in the Wainwright region; the park is in the County of Newell, Division 2).
    { id: "DIN", name: "Dinosaur Provincial Park", county: "ab-division-no-2-3", lat: 50.76, lon: -111.49, scenic: true, type: "desert", size: 1 },
    // Medicine Hat area: the Cypress Hills, at Elkwater.
    { id: "CYP", name: "Cypress Hills", county: "ab-division-no-1", lat: 49.66, lon: -110.28, scenic: true, type: "mountain", size: 1 },
    // East-central Alberta. Hanna: the Special Areas, the driest corner of the merge, so desert.
    { id: "STE", name: "Stettler", county: "ab-division-no-4-7", lat: 52.32, lon: -112.7, type: "farm", size: 1 },
    { id: "HAN", name: "Hanna", county: "ab-division-no-4-7", lat: 51.65, lon: -111.93, type: "desert", size: 1 },
    // Drumheller: the Royal Tyrrell Museum in the Red Deer River badlands, so desert.
    { id: "DRM", name: "Drumheller", county: "ab-division-no-5", lat: 51.46, lon: -112.72, scenic: true, type: "desert", size: 1 },
    { id: "CMR", name: "Camrose", county: "ab-division-no-10", lat: 53.02, lon: -112.82, type: "farm", size: 1 },
    // Lac La Biche: on the road and rail route north from Edmonton toward Fort McMurray.
    { id: "LLB", name: "Lac La Biche", county: "ab-division-no-12", lat: 54.77, lon: -111.98, type: "mountain", size: 1 },
    { id: "ATH", name: "Athabasca", county: "ab-division-no-13", lat: 54.72, lon: -113.28, type: "farm", size: 1 },
    // Fort Chipewyan: Alberta's oldest settlement, on Lake Athabasca. Moved 0.02° west along the
    // shore (under a mile) so a line from Fort McMurray crosses under 2 miles of the lake.
    { id: "FCH", name: "Fort Chipewyan", county: "ab-division-no-16", lat: 58.71, lon: -111.18, type: "mountain", size: 1 },
    { id: "HPR", name: "High Prairie", county: "ab-division-no-17", lat: 55.43, lon: -116.49, type: "farm", size: 1 },
    { id: "HLV", name: "High Level", county: "ab-division-no-17", lat: 58.52, lon: -117.13, type: "farm", size: 1 },
    { id: "PRV", name: "Peace River", county: "ab-division-no-18-19", lat: 56.24, lon: -117.3, type: "farm", size: 1 },
    { id: "GCH", name: "Grande Cache", county: "ab-division-no-18-19", lat: 53.89, lon: -119.12, type: "mountain", size: 1 },
  ],
  levels: [
    {
      name: "Calgary & the Rockies",
      areas: ["calgary"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "connect", a: "CGY", b: "CNM" },
      ],
    },
    {
      name: "Southern Alberta",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "CGY", b: "LET" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "Edmonton & the Parkland",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "CGY", b: "EDM" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "The North",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "EDM", b: "FMM" },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Track that crosses mountains near
  // one goes over the pass (it costs more and trains climb slowly); anywhere else, mountains need a
  // tunnel. Kicking Horse, Yellowhead and Crowsnest passes, on the BC border, are in BC's pack.
  // The railways and highways into the Rockies follow river valleys, narrower than the map's
  // mountain cells: the valley routes below (like BC's) sit at a real place on them. Sources in NOTES.md.
  passes: [
    // The Bow Valley, where the CPR and Highway 1 enter the mountains (at Exshaw)
    ["Bow Valley (the Gap)", 51.06, -115.16],
    // The Athabasca valley, where CN and Highway 16 run from Hinton to Jasper (at Pocahontas)
    ["Athabasca River valley", 53.2, -117.93],
    // The Icefields Parkway (Highway 93), Lake Louise to Jasper: its highest point, and the
    // Banff–Jasper park boundary
    ["Bow Summit", 51.72, -116.49],
    ["Sunwapta Pass", 52.21, -117.16],
  ],
  // Real bridges: [name, latitude, longitude]. A river crossed near one uses the real bridge
  // (cheaper); anywhere else you build a new one. Placed where the map's rivers pass each city.
  bridges: [
    ["Centre Street Bridge (Calgary)", 51.05, -114.06], // the Bow (on the map, the South Saskatchewan's line)
    ["High Level Bridge (Edmonton)", 53.53, -113.51], // the North Saskatchewan
    ["South Saskatchewan River bridge (Medicine Hat)", 50.04, -110.68],
    ["Peace River bridge (Peace River)", 56.23, -117.32],
    ["Athabasca River bridge (Athabasca)", 54.74, -113.28],
    ["Athabasca River bridge (Fort McMurray)", 56.73, -111.41],
    // Not listed: the Oldman at Lethbridge and the Red Deer at Red Deer. The map has neither river
    // there (terrain.js has only their upper reaches), so a bridge would do nothing (NOTES.md).
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    wooded: [
      "ab-division-no-12", "ab-division-no-13", "ab-division-no-14-15", "ab-division-no-16", "ab-division-no-17",
      "ab-division-no-18-19", "ab-division-no-8-9",
    ], // the Rockies and foothills, and the boreal north
    dry: ["ab-division-no-1"], // Palliser's Triangle, the dry southeast
    // Not listed (farmland): Calgary, Edmonton, Strathmore, Lloydminster, Lethbridge (irrigated
    // farms, and Waterton's mountains) and Wainwright (half parkland).
  },
});
