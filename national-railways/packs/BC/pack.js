// National Railways pack: British Columbia (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, mountain passes, bridges,
// ferries, the straits that need them, and where the forests and deserts are. The regional
// district borders come from map.js and the mountains, lakes and rivers from terrain.js. What each
// field means: PACKS.md. Judgment calls and sources: packs/BC/NOTES.md. Cities and populations:
// Statistics Canada (2021), packs/BC/raw.
NR.addPack({
  code: "BC",
  name: "British Columbia",
  country: "CAN",
  // A game that starts here begins owning Metro Vancouver, the Fraser Valley and Squamish-Lillooet
  // (the only regions that touch Metro Vancouver by land): Vancouver is metro, Abbotsford farm (the
  // Fraser Valley is BC's biggest farming area) and Squamish mountain, so the first track has riders.
  start: ["bc-metro-vancouver", "bc-fraser-valley", "bc-squamish-lillooet"],
  // Main stations: one per region, at its biggest city (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // Level 1: the Lower Mainland and the south of Vancouver Island
    { id: "VAN", name: "Vancouver", county: "bc-metro-vancouver", lat: 49.26, lon: -123.11, port: "Port of Vancouver", airport: "Vancouver International", type: "metro", size: 5, pop: 2643, main: true, level: "south" },
    // Abbotsford: the Fraser Valley's dairy, berry and poultry farms, so farm.
    { id: "ABB", name: "Abbotsford", county: "bc-fraser-valley", lat: 49.05, lon: -122.33, type: "farm", size: 3, pop: 324, main: true, level: "south" },
    // Squamish rather than Whistler (a town): the bigger municipality, below the Stawamus Chief.
    { id: "SQU", name: "Squamish", county: "bc-squamish-lillooet", lat: 49.7, lon: -123.16, type: "mountain", size: 1, pop: 50, main: true, level: "south" },
    // Victoria rather than Saanich (117,735 people to Victoria's 91,867): Victoria is the provincial
    // capital and the centre of a population centre of 363,222 that takes in most of Saanich. Coast:
    // a harbour city at the end of the ferries (and Vancouver–Victoria gets riders).
    { id: "VIC", name: "Victoria", county: "bc-capital", lat: 48.43, lon: -123.36, airport: "Victoria International", type: "coast", size: 3, pop: 415, main: true, level: "south" },
    // Nanaimo: the "Harbour City", where two of the big ferries from Vancouver land.
    { id: "NAN", name: "Nanaimo", county: "bc-nanaimo", lat: 49.16, lon: -123.94, type: "coast", size: 2, pop: 170, main: true, level: "south" },
    // Duncan rather than North Cowichan (31,990 to Duncan's 5,047): North Cowichan is the rural
    // district wrapped around Duncan, the valley's town centre (population centre 24,358).
    { id: "DUN", name: "Duncan", county: "bc-cowichan-valley", lat: 48.78, lon: -123.71, type: "farm", size: 1, pop: 89, main: true, level: "south" },
    // Powell River: reached by the ferries from Comox and (over Jervis Inlet) from the Sunshine Coast.
    { id: "PWR", name: "Powell River", county: "bc-sunshine-coast-qathet", lat: 49.84, lon: -124.52, type: "coast", size: 1, pop: 54, main: true, level: "south" },
    // Level 2: the Okanagan, the Thompson and the Kootenays
    // Kamloops: semi-arid sagebrush and grassland, among the driest cities in Canada, so desert.
    { id: "KAM", name: "Kamloops", county: "bc-thompson-nicola", lat: 50.68, lon: -120.34, type: "desert", size: 2, pop: 144, main: true, level: "interior" },
    { id: "KEL", name: "Kelowna", county: "bc-central-okanagan", lat: 49.89, lon: -119.5, airport: "Kelowna International", type: "metro", size: 2, pop: 222, main: true, level: "interior" },
    // Vernon: the North Okanagan's dairy and vegetable farms (Armstrong, Spallumcheen), so farm.
    { id: "VER", name: "Vernon", county: "bc-north-okanagan", lat: 50.27, lon: -119.27, type: "farm", size: 1, pop: 92, main: true, level: "interior" },
    // Penticton: the South Okanagan's orchards and vineyards, so farm.
    { id: "PEN", name: "Penticton", county: "bc-okanagan-similkameen", lat: 49.5, lon: -119.59, type: "farm", size: 1, pop: 90, main: true, level: "interior" },
    // Salmon Arm: the region is the Shuswap, the Monashees and the Selkirks (Revelstoke, Rogers
    // Pass, Golden), so mountain.
    { id: "SAR", name: "Salmon Arm", county: "bc-columbia-shuswap", lat: 50.7, lon: -119.28, type: "mountain", size: 1, pop: 57, main: true, level: "interior" },
    // Nelson: the biggest city of the West Kootenay merge (Castlegar 8,338, Trail 7,920).
    { id: "NEL", name: "Nelson", county: "bc-central-kootenay-kootenay-boundary", lat: 49.49, lon: -117.3, type: "mountain", size: 1, pop: 96, main: true, level: "interior" },
    { id: "CRB", name: "Cranbrook", county: "bc-east-kootenay", lat: 49.51, lon: -115.75, type: "mountain", size: 1, pop: 66, main: true, level: "interior" },
    // Level 3: the rest of Vancouver Island and the Cariboo
    { id: "PAB", name: "Port Alberni", county: "bc-alberni-clayoquot", lat: 49.23, lon: -124.81, type: "coast", size: 1, pop: 34, main: true, level: "island" },
    // Courtenay: the Comox Valley is the island's other big farming valley, so farm.
    { id: "CTN", name: "Courtenay", county: "bc-comox-valley", lat: 49.69, lon: -125.0, type: "farm", size: 1, pop: 72, main: true, level: "island" },
    { id: "CRV", name: "Campbell River", county: "bc-mount-waddington-strathcona", lat: 50.02, lon: -125.24, type: "coast", size: 1, pop: 59, main: true, level: "island" },
    // Williams Lake: the Cariboo's cattle ranches (and the Williams Lake Stampede), so farm.
    { id: "WLK", name: "Williams Lake", county: "bc-cariboo-central-coast", lat: 52.13, lon: -122.14, type: "farm", size: 1, pop: 67, main: true, level: "island" },
    // Level 4: Northern BC
    // Prince George: the north's only city of any size, where the Yellowhead and the Cariboo and
    // Hart highways (and CN's lines) meet, so metro.
    { id: "PG", name: "Prince George", county: "bc-fraser-fort-george", lat: 53.91, lon: -122.75, type: "metro", size: 2, pop: 97, main: true, level: "north" },
    // Smithers: the Bulkley Valley under Hudson Bay Mountain, so mountain.
    { id: "SMI", name: "Smithers", county: "bc-bulkley-nechako", lat: 54.78, lon: -127.18, type: "mountain", size: 1, pop: 38, main: true, level: "north" },
    // Prince Rupert: the biggest municipality of the Northwest merge (12,300 to Terrace's 12,017),
    // with the Fairview container terminal at the end of CN's line, and the ferry to Haida Gwaii.
    { id: "PRU", name: "Prince Rupert", county: "bc-kitimat-stikine-north-coast-stikine", lat: 54.31, lon: -130.33, port: "Port of Prince Rupert", type: "coast", size: 1, pop: 57, main: true, level: "north" },
    // Fort St. John: the Peace River country, BC's grain farms, so farm.
    { id: "FSJ", name: "Fort St. John", county: "bc-northern-rockies-peace-river", lat: 56.25, lon: -120.85, type: "farm", size: 1, pop: 66, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their gateway town or visitor area (sources in NOTES.md).
  towns: [
    // Metro Vancouver
    { id: "SUR", name: "Surrey", county: "bc-metro-vancouver", lat: 49.11, lon: -122.83, type: "metro", size: 3 },
    { id: "TSW", name: "Tsawwassen", county: "bc-metro-vancouver", lat: 49.02, lon: -123.08, type: "coast", size: 1 },
    // Capital
    { id: "LGF", name: "Langford", county: "bc-capital", lat: 48.45, lon: -123.5, type: "metro", size: 2 },
    // Sidney: by Swartz Bay's ferry terminal and Victoria's airport; just off the map's outline.
    { id: "SDY", name: "Sidney", county: "bc-capital", lat: 48.65, lon: -123.4, type: "coast", size: 1 },
    // Fraser Valley
    { id: "CHW", name: "Chilliwack", county: "bc-fraser-valley", lat: 49.16, lon: -121.95, type: "farm", size: 2 },
    { id: "HOP", name: "Hope", county: "bc-fraser-valley", lat: 49.38, lon: -121.44, type: "mountain", size: 1 },
    // Squamish-Lillooet
    { id: "WHS", name: "Whistler", county: "bc-squamish-lillooet", lat: 50.12, lon: -122.95, scenic: true, type: "mountain", size: 2 },
    { id: "LIL", name: "Lillooet", county: "bc-squamish-lillooet", lat: 50.69, lon: -121.93, type: "mountain", size: 1 },
    // Sunshine Coast and qathet. Sechelt sits just off the map's outline: moved 0.01° north onto land.
    { id: "SCH", name: "Sechelt", county: "bc-sunshine-coast-qathet", lat: 49.48, lon: -123.76, type: "coast", size: 1 },
    // Vancouver Island
    { id: "LDY", name: "Ladysmith", county: "bc-cowichan-valley", lat: 48.99, lon: -123.82, type: "coast", size: 1 },
    { id: "PKS", name: "Parksville", county: "bc-nanaimo", lat: 49.32, lon: -124.31, type: "coast", size: 1 },
    // Tofino: Pacific Rim National Park Reserve's Long Beach and Clayoquot Sound.
    { id: "TOF", name: "Tofino", county: "bc-alberni-clayoquot", lat: 49.15, lon: -125.9, scenic: true, type: "coast", size: 1 },
    { id: "GDR", name: "Gold River", county: "bc-mount-waddington-strathcona", lat: 49.78, lon: -126.05, type: "mountain", size: 1 },
    // Thompson-Nicola. Merritt: the Nicola Valley's cattle ranches, so farm.
    { id: "MRR", name: "Merritt", county: "bc-thompson-nicola", lat: 50.11, lon: -120.79, type: "farm", size: 1 },
    // Clearwater: the gateway to Wells Gray Park (Helmcken Falls).
    { id: "CLW", name: "Wells Gray (Clearwater)", county: "bc-thompson-nicola", lat: 51.65, lon: -120.03, scenic: true, type: "mountain", size: 1 },
    // Okanagan-Similkameen. Osoyoos: the warmest, driest corner of Canada (the "pocket desert").
    { id: "OSY", name: "Osoyoos", county: "bc-okanagan-similkameen", lat: 49.03, lon: -119.47, scenic: true, type: "desert", size: 1 },
    { id: "PNC", name: "Princeton", county: "bc-okanagan-similkameen", lat: 49.46, lon: -120.51, type: "mountain", size: 1 },
    // Columbia-Shuswap: Revelstoke (Mount Revelstoke and Glacier national parks) and Yoho at Field.
    { id: "RVL", name: "Revelstoke", county: "bc-columbia-shuswap", lat: 51.0, lon: -118.2, scenic: true, type: "mountain", size: 1 },
    { id: "GLD", name: "Golden", county: "bc-columbia-shuswap", lat: 51.3, lon: -116.96, type: "mountain", size: 1 },
    { id: "FLD", name: "Yoho (Field)", county: "bc-columbia-shuswap", lat: 51.4, lon: -116.49, scenic: true, type: "mountain", size: 1 },
    // The Kootenays. Creston: the Creston Valley's orchards and farms, so farm.
    { id: "TRL", name: "Trail", county: "bc-central-kootenay-kootenay-boundary", lat: 49.09, lon: -117.71, type: "mountain", size: 1 },
    { id: "GFK", name: "Grand Forks", county: "bc-central-kootenay-kootenay-boundary", lat: 49.03, lon: -118.44, type: "farm", size: 1 },
    { id: "CRS", name: "Creston", county: "bc-central-kootenay-kootenay-boundary", lat: 49.1, lon: -116.51, type: "farm", size: 1 },
    { id: "FRN", name: "Fernie", county: "bc-east-kootenay", lat: 49.5, lon: -115.06, type: "mountain", size: 1 },
    // Radium Hot Springs: the gateway to Kootenay National Park.
    { id: "RAD", name: "Radium Hot Springs", county: "bc-east-kootenay", lat: 50.62, lon: -116.08, scenic: true, type: "mountain", size: 1 },
    // The Cariboo and the Central Coast
    { id: "QSL", name: "Quesnel", county: "bc-cariboo-central-coast", lat: 52.98, lon: -122.49, type: "mountain", size: 1 },
    // Barkerville: the Cariboo gold rush town, now a historic town.
    { id: "BKV", name: "Barkerville", county: "bc-cariboo-central-coast", lat: 53.07, lon: -121.52, scenic: true, type: "mountain", size: 1 },
    // The north
    { id: "MCK", name: "Mackenzie", county: "bc-fraser-fort-george", lat: 55.32, lon: -123.09, type: "mountain", size: 1 },
    // Mount Robson: the highest peak of the Canadian Rockies, by the Yellowhead Highway.
    { id: "ROB", name: "Mount Robson", county: "bc-fraser-fort-george", lat: 53.01, lon: -119.29, scenic: true, type: "mountain", size: 1 },
    { id: "VDH", name: "Vanderhoof", county: "bc-bulkley-nechako", lat: 54.02, lon: -124.01, type: "farm", size: 1 },
    { id: "TER", name: "Terrace", county: "bc-kitimat-stikine-north-coast-stikine", lat: 54.52, lon: -128.6, type: "mountain", size: 1 },
    { id: "KIT", name: "Kitimat", county: "bc-kitimat-stikine-north-coast-stikine", lat: 54.05, lon: -128.65, type: "coast", size: 1 },
    // Haida Gwaii: at Skidegate (the Haida Heritage Centre), where the ferry from Prince Rupert lands.
    { id: "HGW", name: "Haida Gwaii", county: "bc-kitimat-stikine-north-coast-stikine", lat: 53.27, lon: -131.99, scenic: true, type: "coast", size: 1 },
    { id: "DCK", name: "Dawson Creek", county: "bc-northern-rockies-peace-river", lat: 55.76, lon: -120.24, type: "farm", size: 1 },
    { id: "FNL", name: "Fort Nelson", county: "bc-northern-rockies-peace-river", lat: 58.81, lon: -122.7, type: "mountain", size: 1 },
  ],
  levels: [
    {
      name: "Vancouver & Victoria",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Okanagan & Kootenays",
      areas: ["interior"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "VAN", b: "KEL" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "Vancouver Island & Cariboo",
      areas: ["island"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "VIC", b: "CTN" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Northern BC",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "VAN", b: "PRU" },
        { kind: "counties", target: 16 },
      ],
    },
  ],
  passes: [
    // The Coast Mountains: the Sea-to-Sky corridor and the Duffey Lake Road
    ["Howe Sound (Sea-to-Sky Highway)", 49.63, -123.2],
    ["Cheakamus Canyon", 49.85, -123.15],
    ["Cayoosh Pass", 50.37, -122.49],
    // The Cascades and the Fraser Canyon
    ["Fraser Canyon (Hells Gate)", 49.78, -121.45],
    ["Coquihalla Pass", 49.6, -121.08],
    ["Allison Pass", 49.12, -120.87],
    // The Okanagan and the Boundary country (Highway 3)
    ["Richter Pass", 49.07, -119.58],
    ["Anarchist Summit", 49.04, -119.34],
    ["Bonanza Pass", 49.22, -118.07],
    ["Kootenay Pass", 49.06, -117.04],
    // The Monashees, the Selkirks and the Rockies
    ["Monashee Pass", 50.1, -118.52],
    ["Eagle Pass", 50.97, -118.37],
    ["Rogers Pass", 51.3, -117.52],
    ["Kicking Horse Pass", 51.45, -116.29],
    ["Crowsnest Pass", 49.63, -114.68],
    ["Yellowhead Pass", 52.89, -118.46],
    // The north
    ["Heckman Pass", 52.53, -125.77],
    ["Kitselas Canyon", 54.6, -128.43],
    ["Skeena River valley", 54.39, -129.1],
    ["Robson Valley", 53.12, -119.84],
    ["North Thompson valley", 51.42, -120.21],
    ["Canal Flats", 50.16, -115.81],
    ["Port Alberni Summit", 49.26, -124.68],
    ["Sutton Pass", 49.24, -125.32],
    ["Pine Pass", 55.4, -122.63],
    ["Summit Lake (Alaska Highway)", 58.65, -124.63],
  ],
  bridges: [],
});
