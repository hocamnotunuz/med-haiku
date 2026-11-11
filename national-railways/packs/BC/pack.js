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
  // (the only BC regions that touch Metro Vancouver by land; Capital, Nanaimo and the Sunshine Coast
  // are across the water): Vancouver is metro, Abbotsford farm (the Fraser Valley is BC's biggest
  // farming area) and Squamish mountain, so the first track has riders.
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
    // Squamish: the region's biggest municipality (Whistler is a town), below the Stawamus Chief.
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
    { id: "ROB", name: "Mount Robson", county: "bc-fraser-fort-george", lat: 53.03, lon: -119.23, scenic: true, type: "mountain", size: 1 },
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
  // Real mountain passes, canyons and gaps: [name, latitude, longitude]. Track that crosses
  // mountains near one goes over the pass (it costs more and trains climb slowly); anywhere else,
  // mountains need a tunnel. BC's railways and highways mostly follow river valleys through the
  // ranges, narrower than the map's mountain cells: the valley routes below (like Washington's
  // Yakima River Canyon) sit at a real place on them. Sources in NOTES.md.
  passes: [
    // The Coast Mountains. The Sea-to-Sky Highway and the old BC Rail line are cut into Howe Sound's
    // east shore (placed at Lions Bay), then climb the Cheakamus Canyon to Whistler.
    ["Howe Sound (Sea-to-Sky Highway)", 49.46, -123.24],
    ["Cheakamus Canyon", 49.85, -123.15],
    ["Cayoosh Pass", 50.37, -122.49], // the Duffey Lake Road, Pemberton to Lillooet
    // The Cascades and the Fraser Canyon
    ["Fraser Canyon (Hells Gate)", 49.78, -121.45], // Highway 1 and both transcontinental lines
    ["Coquihalla Pass", 49.6, -121.08], // Highway 5, Hope to Merritt
    ["Allison Pass", 49.12, -120.87], // Highway 3 through Manning Park
    // The Okanagan and the Boundary country (Highway 3, the Crowsnest Highway)
    ["Richter Pass", 49.07, -119.58],
    ["Anarchist Summit", 49.04, -119.34], // on Anarchist Mountain, above Osoyoos
    ["Bonanza Pass", 49.22, -118.07],
    ["Kootenay Pass", 49.06, -117.04],
    // The Monashees, the Selkirks and the Rockies
    ["Monashee Pass", 50.1, -118.52], // Highway 6, Vernon to Nakusp
    ["Eagle Pass", 50.97, -118.37], // Highway 1 and the CPR, Sicamous to Revelstoke
    ["Rogers Pass", 51.3, -117.52],
    ["Kicking Horse Pass", 51.45, -116.29], // on the Alberta border
    ["Crowsnest Pass", 49.63, -114.68], // on the Alberta border
    ["Yellowhead Pass", 52.89, -118.46], // on the Alberta border
    ["Canal Flats", 50.16, -115.81], // the Rocky Mountain Trench's low divide, Columbia Lake to the Kootenay
    ["Robson Valley", 53.12, -119.84], // the upper Fraser in the Trench, at Dunster (Highway 16 and CN)
    ["North Thompson valley", 51.42, -120.21], // Highway 5 and CN's main line, at Little Fort
    // Vancouver Island (Highway 4)
    ["Port Alberni Summit", 49.26, -124.68], // "the Hump", on the Nanaimo–Alberni-Clayoquot line
    ["Sutton Pass", 49.24, -125.32],
    // The north
    ["Heckman Pass", 52.53, -125.77], // Highway 20, the top of "the Hill" above Bella Coola
    ["Kitselas Canyon", 54.6, -128.43], // the Skeena above Terrace (Highway 16 and CN)
    ["Skeena River valley", 54.39, -129.1], // the Skeena through the Coast Mountains, at Exstew
    ["Pine Pass", 55.4, -122.63], // Highway 97 and CN (ex-BC Rail) to the Peace River country
    ["Summit Lake (Alaska Highway)", 58.65, -124.63], // the Alaska Highway's highest point
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  bridges: [
    // BC Ferries' routes (and the MV Coho from Port Angeles) work like bridges: across the straits
    // below, track can cross only near one. Each route has points along its crossing; a crossing
    // uses a route when one of its points is within 3 to 4 miles of the water it crosses.
    ["Tsawwassen–Swartz Bay ferry (Tsawwassen)", 49.0, -123.16],
    ["Tsawwassen–Swartz Bay ferry (mid-strait)", 48.94, -123.23],
    ["Tsawwassen–Swartz Bay ferry (Active Pass)", 48.875, -123.29],
    ["Tsawwassen–Swartz Bay ferry (Swanson Channel)", 48.745, -123.32],
    ["Tsawwassen–Duke Point ferry (east)", 49.05, -123.3],
    ["Tsawwassen–Duke Point ferry (mid-strait)", 49.12, -123.55],
    ["Tsawwassen–Duke Point ferry (Gabriola)", 49.2, -123.76],
    ["Horseshoe Bay–Departure Bay ferry (east)", 49.35, -123.36],
    ["Horseshoe Bay–Departure Bay ferry (mid-strait)", 49.29, -123.58],
    ["Horseshoe Bay–Departure Bay ferry (Departure Bay)", 49.22, -123.87],
    ["Horseshoe Bay–Langdale ferry (Horseshoe Bay)", 49.37, -123.29],
    ["Horseshoe Bay–Langdale ferry (Queen Charlotte Channel)", 49.39, -123.35],
    ["Horseshoe Bay–Langdale ferry (Keats Island)", 49.41, -123.45],
    // Earls Cove–Saltery Bay (Jervis Inlet) is inside the Sunshine Coast region and its water isn't a
    // bay (track follows the shore of Malaspina Strait), so it is listed for the record.
    ["Earls Cove–Saltery Bay ferry (east)", 49.765, -124.07],
    ["Earls Cove–Saltery Bay ferry (west)", 49.78, -124.14],
    ["Comox–Powell River ferry (west)", 49.75, -124.82],
    ["Comox–Powell River ferry (mid-strait)", 49.79, -124.68],
    ["Comox–Powell River ferry (east)", 49.83, -124.57],
    ["Port Angeles–Victoria ferry (mid-strait)", 48.31, -123.4],
    ["Port Angeles–Victoria ferry (Victoria)", 48.38, -123.38],
    // Prince Rupert–Skidegate crosses 90 miles of open water: one point on each side (bridge points
    // must be within 10 miles of land; the Graham Island one is 17 miles out so that lines from
    // Terrace or Kitimat to Skidegate don't count as using the ferry).
    ["Prince Rupert–Skidegate ferry (Chatham Sound)", 54.18, -130.58],
    ["Prince Rupert–Skidegate ferry (off Graham Island)", 53.45, -131.7],
    // Burrard Inlet
    ["Lions Gate Bridge", 49.32, -123.14],
    ["Ironworkers Memorial Bridge", 49.3, -123.03],
    // Lakes and rivers of the Interior
    ["W. R. Bennett Bridge (Okanagan Lake)", 49.88, -119.51],
    ["Big Orange Bridge (Nelson)", 49.5, -117.29],
    ["Overlanders Bridge (Kamloops)", 50.68, -120.33],
    ["Kinnaird Bridge (Castlegar)", 49.29, -117.65],
    ["Victoria Street Bridge (Trail)", 49.1, -117.71],
    ["Columbia River bridge (Revelstoke)", 51.0, -118.21],
    ["Simon Fraser Bridge (Prince George)", 53.89, -122.73],
    ["Peace River Bridge (Taylor)", 56.14, -120.68],
  ],
  // Straits where water needs a real bridge (here, a ferry route). Elsewhere, sea between two places
  // just means track follows the coast. Rough outlines; land inside them is still land. They stop a
  // few miles off the coasts, so track along a shore (or behind the Gulf Islands) isn't caught. On
  // the US side they follow the international boundary, except Haro Strait, which reaches the
  // San Juan Islands' west shores so that crossing from them is a long new bridge, not a short one.
  // A crossing is named after the first one listed that holds it.
  bays: [
    {
      name: "Howe Sound",
      ring: [-123.25, 49.3, -123.21, 49.4, -123.19, 49.5, -123.17, 49.6, -123.17, 49.65, -123.26, 49.66, -123.4, 49.58, -123.52, 49.5, -123.53, 49.42, -123.55, 49.37, -123.45, 49.3],
    },
    {
      name: "Haro Strait",
      ring: [-123.3, 48.45, -123.33, 48.47, -123.39, 48.53, -123.41, 48.62, -123.41, 48.7, -123.33, 48.74, -123.2, 48.77, -123.05, 48.81, -123.02, 48.785, -123.1, 48.72, -123.17, 48.66, -123.15, 48.6, -123.14, 48.53, -123.1, 48.48, -123.2, 48.43, -123.24, 48.44],
    },
    {
      name: "Strait of Juan de Fuca",
      ring: [-123.3, 48.45, -123.24, 48.44, -123.2, 48.38, -123.3, 48.28, -123.6, 48.26, -124.0, 48.3, -124.4, 48.4, -124.75, 48.49, -124.85, 48.55, -124.75, 48.66, -124.45, 48.58, -124.05, 48.45, -123.75, 48.4, -123.55, 48.39, -123.45, 48.43, -123.37, 48.425],
    },
    {
      name: "Strait of Georgia",
      ring: [
        -123.1, 49.0, -123.06, 48.96, -122.99, 48.8, -123.02, 48.785, -123.045, 48.79, -123.15, 48.82, -123.24, 48.85, -123.28, 48.875, -123.4, 48.94,
        -123.5, 49.0, -123.58, 49.06, -123.63, 49.1, -123.69, 49.14, -123.74, 49.18, -123.8, 49.21, -123.9, 49.24, -124.03, 49.29, -124.15, 49.32,
        -124.3, 49.39, -124.42, 49.44, -124.52, 49.53, -124.7, 49.62, -124.8, 49.7, -124.9, 49.78, -125.05, 49.88, -125.18, 49.98, -124.95, 50.0,
        -124.8, 50.02, -124.62, 49.92, -124.58, 49.84, -124.62, 49.79, -124.45, 49.7, -124.25, 49.58, -124.05, 49.47, -123.95, 49.47, -123.8, 49.44,
        -123.65, 49.38, -123.55, 49.35, -123.4, 49.3, -123.3, 49.31, -123.26, 49.28, -123.28, 49.25, -123.25, 49.2, -123.2, 49.1, -123.15, 49.02,
      ],
    },
    {
      name: "Johnstone Strait",
      ring: [-125.27, 50.02, -125.36, 50.15, -125.45, 50.3, -125.7, 50.36, -125.95, 50.36, -126.3, 50.42, -126.7, 50.5, -127.05, 50.56, -127.12, 50.6, -126.95, 50.69, -126.6, 50.61, -126.2, 50.53, -125.8, 50.47, -125.45, 50.4, -125.3, 50.22, -125.22, 50.07, -125.18, 49.98],
    },
    {
      name: "Queen Charlotte Strait",
      ring: [-127.05, 50.56, -127.3, 50.62, -127.5, 50.7, -127.8, 50.76, -128.1, 50.8, -128.1, 50.95, -127.8, 51.15, -127.5, 51.0, -127.2, 50.9, -126.95, 50.75, -126.95, 50.69, -127.12, 50.6],
    },
    {
      name: "Queen Charlotte Sound",
      ring: [-128.1, 50.8, -128.45, 50.76, -128.8, 50.7, -130.5, 51.4, -131.6, 51.8, -131.3, 52.2, -128.4, 52.05, -128.2, 51.7, -128.05, 51.4, -127.8, 51.15, -128.1, 50.95],
    },
    {
      name: "Hecate Strait",
      ring: [-128.3, 51.95, -128.6, 52.2, -129.2, 52.55, -129.55, 52.95, -130.2, 53.4, -130.55, 53.75, -130.6, 54.0, -130.42, 54.2, -130.45, 54.32, -130.48, 54.45, -130.62, 54.7, -131.5, 54.68, -132.68, 54.66, -133.3, 54.5, -133.6, 53.6, -133.1, 52.7, -131.8, 51.85, -131.0, 51.9],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    forest: [
      "bc-alberni-clayoquot", "bc-comox-valley", "bc-cowichan-valley", "bc-kitimat-stikine-north-coast-stikine",
      "bc-mount-waddington-strathcona", "bc-nanaimo", "bc-sunshine-coast-qathet",
    ],
    wooded: [
      "bc-bulkley-nechako", "bc-capital", "bc-cariboo-central-coast", "bc-central-kootenay-kootenay-boundary",
      "bc-columbia-shuswap", "bc-east-kootenay", "bc-fraser-fort-george", "bc-fraser-valley", "bc-metro-vancouver",
      "bc-north-okanagan", "bc-squamish-lillooet",
    ],
    dry: [
      "bc-central-okanagan", "bc-okanagan-similkameen", "bc-thompson-nicola",
    ],
    // Not listed (farmland): bc-northern-rockies-peace-river, the Peace River country's grain farms.
  },
});
