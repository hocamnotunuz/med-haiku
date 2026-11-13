// National Railways pack: Hawaii.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, the inter-island
// ferry and barge points and the channels between the islands, and where the forests are. The county
// borders come from map.js and the mountains from terrain.js (the map has no lakes or rivers here). What
// each field means: PACKS.md. Judgment calls and sources: packs/HI/NOTES.md. Cities and populations:
// U.S. Census Bureau (2020), packs/HI/raw.
// Hawaii's 5 counties are 4 regions, one per island county (tools/build-map.js, STATES.HI): Honolulu County
// is Oahu, Hawaii County the Big Island, Kauai County Kauai (with Niihau), and Kalawao (Kalaupapa) joins
// Maui County, which has Maui, Molokai, Lanai and Kahoolawe. No island touches another: the region links
// are sea links (the inter-island barges and ferries, and Matson's ships from Honolulu to Los Angeles).
// Every Hawaiian place is a census-designated place, so places.json gives a population only to Urban
// Honolulu; every other place's size is from general knowledge (said in the comments).
NR.addPack({
  code: "HI",
  name: "Hawaii",
  // A game that starts here begins owning Oahu (Honolulu, the metropolis), Maui (with Molokai and Lanai)
  // and Kauai: Maui and Kauai both have a sea link to Oahu (the regions' neighbours). Honolulu is metro,
  // Kahului coast and Lihue farm, so the first track has riders.
  start: ["hi-honolulu", "hi-kalawao-maui", "hi-kauai"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short
  // code shown on passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  stations: [
    // Level: Oahu, Maui and Kauai (the start)
    // Honolulu (Urban Honolulu CDP, 350,963): the capital and the state's metropolis; Honolulu County
    // (all of Oahu) is 1.02 million, about 70% of Hawaii: a metro like Rochester or Hartford (size 4).
    // Honolulu Harbor is the state's main commercial port (about 98% of Hawaii's imports pass through
    // the islands' harbours, Honolulu the hub) and Daniel K. Inouye International Airport its main airport
    // (about 20 million passengers a year before 2020). The Census point (21.32, -157.85) is up the Nuuanu
    // valley: the station is downtown, by Aloha Tower and the Harbor (the Waikiki beach is 3 miles east)
    { id: "HNL", name: "Honolulu", county: "hi-honolulu", lat: 21.31, lon: -157.86, port: "Honolulu Harbor", airport: "Daniel K. Inouye International Airport", type: "metro", size: 4, pop: 1017, main: true, level: "west" },
    // Kahului: Maui's commercial centre, with the island's deep-water harbour (Kahului Harbor, the
    // cruise ships and the Young Brothers barges) and Kahului Airport (OGG, the second airport of the
    // state, about 7 million passengers a year before 2020). The county seat Wailuku (17,700) is 3 miles
    // away, too close to be a town. The Census point is the middle of the CDP (20.87, -156.47, Kahului's
    // 26,337 people). Coast.
    { id: "OGG", name: "Kahului", county: "hi-kalawao-maui", lat: 20.89, lon: -156.47, airport: "Kahului Airport", type: "coast", size: 2, pop: 165, main: true, level: "west" },
    // Lihue: the seat of Kauai County (Lihue's 6,455 people, Nawiliwili Harbor, the old Lihue Plantation
    // and Grove Farm) and the island's biggest centre with Lihue Airport (LIH, about 3 million passengers
    // a year before 2020). Farm (the sugar and coffee fields of the Garden Isle, now farms and ranches).
    { id: "LIH", name: "Lihue", county: "hi-kauai", lat: 21.98, lon: -159.37, airport: "Lihue Airport", type: "farm", size: 1, pop: 73, main: true, level: "west" },
    // Level: the Big Island
    // Hilo: the seat of Hawaii County and the biggest town of the Big Island (about 45,700), the harbour
    // (Hilo Bay and its breakwater), the University of Hawaii at Hilo and the gate to Hawaii Volcanoes
    // National Park (Kailua-Kona is the second town, about 22,000, a town here with the airport and the
    // west coast resorts). Mountain: Hilo lies under Mauna Kea and Mauna Loa.
    { id: "ITO", name: "Hilo", county: "hi-hawaii", lat: 19.72, lon: -155.09, type: "mountain", size: 2, pop: 201, main: true, level: "big" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point (sources in NOTES.md).
  towns: [
    // Oahu
    // Kailua (38,635): the windward town across the Koolau from Honolulu (the Pali Highway and the Likelike
    // Highway), with Kailua Beach and Lanikai; the biggest windward place
    { id: "KLUA", name: "Kailua", county: "hi-honolulu", lat: 21.4, lon: -157.74, type: "coast", size: 1 },
    // Kapolei: Honolulu's "second city" on the Ewa plain (planned from the 1970s, the Kapolei Civic Center, the Ko Olina
    // resorts and the H-1 and Farrington Highway), the west side's centre
    { id: "KPLI", name: "Kapolei", county: "hi-honolulu", lat: 21.34, lon: -158.07, type: "metro", size: 1 },
    // Pearl Harbor: the naval base and the USS Arizona Memorial (the 1941 attack), with the USS Missouri and the
    // Bowfin: the memorial's visitor centre at Halawa Landing
    { id: "PEAR", name: "Pearl Harbor", county: "hi-honolulu", lat: 21.37, lon: -157.95, scenic: true, type: "coast", size: 1 },
    // Haleiwa: the North Shore's surf town (Waimea Bay, Sunset Beach and the Banzai Pipeline are nearby)
    { id: "HLWA", name: "Haleiwa", county: "hi-honolulu", lat: 21.59, lon: -158.11, scenic: true, type: "coast", size: 1 },
    // Maui, Molokai and Lanai
    // Lahaina: the old whaling capital of the kingdom and Maui's west-coast resort (Front Street, the banyan tree),
    // 27 miles of ferry from Manele Bay on Lanai
    { id: "LHNA", name: "Lahaina", county: "hi-kalawao-maui", lat: 20.88, lon: -156.68, type: "coast", size: 1 },
    // Kihei (21,423): the south Maui beach town (Kamaole Beach, Wailea is next door)
    { id: "KIHI", name: "Kihei", county: "hi-kalawao-maui", lat: 20.76, lon: -156.45, type: "coast", size: 1 },
    // Haleakala: the 10,023-foot volcano and Haleakala National Park (the sunrise, the crater, the Haleakala Highway)
    { id: "HLKL", name: "Haleakala", county: "hi-kalawao-maui", lat: 20.71, lon: -156.25, scenic: true, type: "mountain", size: 1 },
    // Kaunakakai (about 3,400): the main town of Molokai, with the harbour and the wharf (the island's barge from Honolulu and Maui)
    { id: "KNKA", name: "Kaunakakai", county: "hi-kalawao-maui", lat: 21.09, lon: -157.02, type: "farm", size: 1 },
    // Lanai City (3,102): the only town of Lanai, the old Dole pineapple plantation town
    { id: "LNCY", name: "Lanai City", county: "hi-kalawao-maui", lat: 20.83, lon: -156.92, type: "farm", size: 1 },
    // Kauai
    // Kapaa (10,699): the east-side town on the Coconut Coast (the Kuhio Highway, the Wailua River)
    { id: "KAPA", name: "Kapaa", county: "hi-kauai", lat: 22.09, lon: -159.32, type: "coast", size: 1 },
    // Hanalei: the north shore's village on Hanalei Bay, below the mountains (the Hanalei River, the end of the road to the Na Pali Coast)
    { id: "HNLI", name: "Hanalei", county: "hi-kauai", lat: 22.2, lon: -159.5, scenic: true, type: "coast", size: 1 },
    // Waimea Canyon: the "Grand Canyon of the Pacific" (Waimea Canyon State Park and Koke'e, above Waimea and Kekaha)
    { id: "WMCN", name: "Waimea Canyon", county: "hi-kauai", lat: 22.07, lon: -159.66, scenic: true, type: "mountain", size: 1 },
    // The Big Island
    // Kailua-Kona: the west-coast resort town (Ali'i Drive, the Ironman Triathlon) and the island's Kona International Airport (KOA), at Keahole, 7 miles north
    { id: "KONA", name: "Kailua-Kona", county: "hi-hawaii", lat: 19.64, lon: -155.99, airport: "Kona International Airport", type: "coast", size: 2 },
    // Volcano: Hawaii Volcanoes National Park, Kilauea's crater and the Jaggar Museum (Volcano village, 4,000 ft)
    { id: "HVNP", name: "Volcano", county: "hi-hawaii", lat: 19.43, lon: -155.26, scenic: true, type: "mountain", size: 1 },
    // Waimea (Kamuela): the ranch town of the north (Parker Ranch, the Hawaii Preparatory Academy), 12 miles from Kawaihae harbour
    { id: "WMEA", name: "Waimea", county: "hi-hawaii", lat: 20.02, lon: -155.67, type: "farm", size: 1 },
    // Mauna Kea: the 13,803-foot summit with the world's great observatories (Mauna Kea Observatories), on the Mauna Kea Access Road
    { id: "MKEA", name: "Mauna Kea", county: "hi-hawaii", lat: 19.82, lon: -155.47, scenic: true, type: "mountain", size: 1 },
  ],
  // Levels (two: the region has only four counties). The first holds the start (Oahu, Maui and Kauai), the
  // second the Big Island, across the Alenuihaha Channel from Maui.
  levels: [
    {
      name: "Oahu, Maui & Kauai",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "cargo", cargo: "containers", target: 10 },
        { kind: "connect", a: "HNL", b: "OGG" },
      ],
    },
    {
      name: "The Big Island",
      areas: ["big"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "OGG", b: "ITO" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. See NOTES.md.
  passes: [
    ["Nuuanu Pali (the Pali Highway and its tunnels, over the Koolau Range, Honolulu to Kailua)", 21.37, -157.79],
    ["Saddle Road (the Daniel K. Inouye Highway, between Mauna Kea and Mauna Loa, Hilo to Kona)", 19.7, -155.47],
  ],
  // Real ferry and barge routes between the islands: [name, latitude, longitude]. A point lies out on
  // the channel, on the line between the harbours. Water crossed near one uses the route (cheaper);
  // the channels are bays (below), so track between islands crosses only here. See NOTES.md.
  bridges: [
    ["Kauai Channel barge route (Honolulu Harbor to Nawiliwili Harbor, Young Brothers)", 21.93, -159.26],
    ["Kaiwi Channel barge route (Honolulu Harbor to Kaunakakai and Kahului Harbor, Young Brothers)", 21.24, -157.58],
    ["Kalohi Channel barge route (Kaunakakai Harbor to Kahului Harbor, Young Brothers)", 21.01, -156.85],
    ["Auau Channel ferry (Lahaina to Manele Bay, Lanai)", 20.87, -156.76],
    ["Alenuihaha Channel barge route (Kahului Harbor to Hilo Harbor and Kawaihae, Young Brothers)", 20.37, -155.86],
  ],
  bays: [
    {
      name: "the channels between the islands",
      ring: [-160.7, 18.6, -154.4, 18.6, -154.4, 20.7, -156.3, 20.7, -156.45, 21.25, -157.3, 21.42, -157.63, 21.28, -157.75, 21.34, -157.9, 21.5, -157.9, 22.6, -160.7, 22.6],
    },
  ],
  // Cartoon look: Kauai is the Garden Isle (rainforest to the coast); the other islands have wooded
  // mountains (the Koolau and Waianae, Haleakala, Mauna Kea and Mauna Loa). Nothing is desert-looking.
  biomes: {
    forest: ["hi-kauai"],
    wooded: ["hi-honolulu", "hi-kalawao-maui", "hi-hawaii"],
  },
});
