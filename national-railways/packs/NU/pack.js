// National Railways pack: Nunavut (Canada, so its money is Maple Coins).
// Everything hand-made for one territory: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The census division borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/NU/NOTES.md. Cities and populations: Statistics Canada (2021), packs/NU/raw.
// No road joins Nunavut's communities to each other or to the south: everything goes by air or
// sea. On the map, sea outside a bay never blocks track (it follows the coast), so lines between
// the hamlets stand in for the sealift and air routes. No bays are added (NOTES.md).
NR.addPack({
  code: "NU",
  name: "Nunavut",
  country: "CAN",
  // A game that starts here begins owning Qikiqtaaluk (Baffin Island and the High Arctic) alone,
  // with Iqaluit its one main station. As in Yukon, the game opens the region's nearest town of
  // another type with it: Kimmirut (coast, 75 mi), so the first track is Iqaluit-Kimmirut, open
  // in both modes. Starting with all three regions would make the first track Iqaluit-Rankin
  // Inlet, 731 mi across Hudson Strait and over the starting budget (NOTES.md, "Start").
  start: ["nu-qikiqtaaluk"],
  // Main stations: one per region, at its biggest community.
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. No seaports, and no airport big enough (NOTES.md).
  stations: [
    // Iqaluit: the capital and Nunavut's only city (7,429 of the region's 19,355), on Frobisher Bay,
    // so metro (like Whitehorse and Yellowknife). 19k is size 1 by the guide. The raw point.
    { id: "IQ", name: "Iqaluit", county: "nu-qikiqtaaluk", lat: 63.75, lon: -68.52, type: "metro", size: 1, pop: 19, main: true, level: "qikiqtaaluk" },
    // Rankin Inlet: the Kivalliq's biggest community (2,975) and its hub, on Hudson Bay, so coast.
    // The raw point is just off the map's coast: moved 0.5 mi southwest onto the land.
    { id: "RIN", name: "Rankin Inlet", county: "nu-kivalliq", lat: 62.81, lon: -92.09, type: "coast", size: 1, pop: 11, main: true, level: "kivalliq" },
    // Cambridge Bay: the Kitikmeot's biggest community (1,760) and its hub, a Northwest Passage
    // harbour on Victoria Island's south coast, so coast. The raw point.
    { id: "CAM", name: "Cambridge Bay", county: "nu-kitikmeot", lat: 69.11, lon: -105.05, type: "coast", size: 1, pop: 6, main: true, level: "kitikmeot" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // All size 1. Points are places.json's (on the hamlets) unless a comment says why one moved.
  // Types: coast for the sea hamlets; mountain for the fjords and peaks of Baffin's east coast and
  // for the wild interior (Baker Lake, Ukkusiksalik), as the NT, AB, BC and QC packs type theirs.
  towns: [
    // Qikiqtaaluk (Baffin Island and the High Arctic): the start region, 13 of the 25 communities
    // Kimmirut (426): the hamlet nearest Iqaluit, on Hudson Strait across the Meta Incognita
    // Peninsula (Katannilik Territorial Park lies between them). It opens with Iqaluit at the start.
    { id: "KIM", name: "Kimmirut", county: "nu-qikiqtaaluk", lat: 62.85, lon: -69.87, type: "coast", size: 1 },
    // Pangnirtung (1,504): "Pang", on its fjord off Cumberland Sound under the mountains, the
    // gateway to Auyuittuq, so mountain.
    { id: "PGT", name: "Pangnirtung", county: "nu-qikiqtaaluk", lat: 66.14, lon: -65.72, type: "mountain", size: 1 },
    // Auyuittuq National Park: the Penny Ice Cap, Mount Thor and Akshayuk Pass on the Cumberland
    // Peninsula. At the park's point (raw/parks.json), in the mountains in its middle.
    { id: "AUY", name: "Auyuittuq", county: "nu-qikiqtaaluk", lat: 67.5, lon: -66.0, scenic: true, type: "mountain", size: 1 },
    // Kinngait (1,396; Cape Dorset): the home of Inuit printmaking, on Dorset Island off the Foxe
    // Peninsula. The map doesn't draw the little island: moved 3.7 mi northeast onto the peninsula.
    { id: "KNG", name: "Kinngait", county: "nu-qikiqtaaluk", lat: 64.28, lon: -76.48, type: "coast", size: 1 },
    // Igloolik (2,049): the region's second community, on its island in Foxe Basin.
    { id: "IGL", name: "Igloolik", county: "nu-qikiqtaaluk", lat: 69.38, lon: -81.8, type: "coast", size: 1 },
    // Arctic Bay (994): on Admiralty Inlet in north Baffin. It joins Pond Inlet and Resolute to
    // the rest: in Tough, Pond Inlet's other links cross lakes (NOTES.md).
    { id: "ABY", name: "Arctic Bay", county: "nu-qikiqtaaluk", lat: 73.03, lon: -85.17, type: "coast", size: 1 },
    // Pond Inlet (1,555): on Eclipse Sound facing Bylot Island's mountains, the gateway to Sirmilik
    // National Park and the floe edge, and a cruise-ship stop, so scenic.
    { id: "PND", name: "Pond Inlet", county: "nu-qikiqtaaluk", lat: 72.7, lon: -77.96, scenic: true, type: "coast", size: 1 },
    // Resolute (183): on Cornwallis Island, the gateway to the High Arctic islands.
    { id: "RES", name: "Resolute", county: "nu-qikiqtaaluk", lat: 74.7, lon: -94.83, type: "coast", size: 1 },
    // Kivalliq (west of Hudson Bay)
    // Arviat (2,864): the region's second community, on Hudson Bay's west coast toward Churchill.
    // The raw point is just off the map's coast: moved 0.6 mi south onto the land.
    { id: "ARV", name: "Arviat", county: "nu-kivalliq", lat: 61.1, lon: -94.06, type: "coast", size: 1 },
    // Baker Lake (2,061): Nunavut's only inland community, on the lake where the Thelon River
    // comes in, near the geographic centre of Canada, so mountain (the wild interior, NOTES.md).
    { id: "BKL", name: "Baker Lake", county: "nu-kivalliq", lat: 64.32, lon: -96.02, type: "mountain", size: 1 },
    // Naujaat (1,225; formerly Repulse Bay): on Repulse Bay, right on the Arctic Circle.
    { id: "NAU", name: "Naujaat", county: "nu-kivalliq", lat: 66.53, lon: -86.25, type: "coast", size: 1 },
    // Coral Harbour (1,035): on Southampton Island, between Rankin Inlet and Baffin Island.
    { id: "CRH", name: "Coral Harbour", county: "nu-kivalliq", lat: 64.13, lon: -83.17, type: "coast", size: 1 },
    // Ukkusiksalik National Park: the hills and cliffs round Wager Bay, so mountain (like NT's
    // parks). The park's point (raw/parks.json) is in the bay: moved 9.4 mi to its south shore.
    { id: "UKK", name: "Ukkusiksalik", county: "nu-kivalliq", lat: 65.43, lon: -89.18, scenic: true, type: "mountain", size: 1 },
    // Kitikmeot (the central Arctic)
    // Kugluktuk (1,382): at the mouth of the Coppermine River on Coronation Gulf, the region's
    // second community. The raw point is just off the map's coast: moved 0.5 mi southwest onto the land.
    { id: "KUG", name: "Kugluktuk", county: "nu-kitikmeot", lat: 67.82, lon: -115.1, type: "coast", size: 1 },
    // Gjoa Haven (1,349): on King William Island, where Amundsen wintered on the first voyage
    // through the Northwest Passage; the wrecks of Franklin's Erebus and Terror lie nearby. Scenic.
    { id: "GJH", name: "Gjoa Haven", county: "nu-kitikmeot", lat: 68.63, lon: -95.88, scenic: true, type: "coast", size: 1 },
    // Taloyoak (934): on the Boothia Peninsula, the northernmost community on the mainland.
    { id: "TAL", name: "Taloyoak", county: "nu-kitikmeot", lat: 69.54, lon: -93.52, type: "coast", size: 1 },
    // Kugaaruk (1,033; formerly Pelly Bay): on Pelly Bay, between Taloyoak and Naujaat.
    { id: "KGR", name: "Kugaaruk", county: "nu-kitikmeot", lat: 68.53, lon: -89.83, type: "coast", size: 1 },
  ],
  // The start owns Qikiqtaaluk; each later level opens one more region.
  levels: [
    {
      name: "Iqaluit & Baffin Island",
      areas: ["qikiqtaaluk"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "connect", a: "IQ", b: "PGT" },
      ],
    },
    {
      name: "Across Hudson Strait",
      areas: ["kivalliq"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "IQ", b: "RIN" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
    {
      name: "The Northwest Passage",
      areas: ["kitikmeot"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "counties", target: 3 },
        { kind: "connect", a: "IQ", b: "CAM" },
      ],
    },
  ],
  // Real mountain passes: none. No road crosses Baffin's mountains; Akshayuk Pass through
  // Auyuittuq is a trekking route, and its position isn't known well enough here (NOTES.md).
  passes: [],
  // Real bridges: none. No road, so no road bridges, and the sea needs none (NOTES.md).
  bridges: [],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are plain land with hills and peaks.
  // All three regions are Arctic tundra and ice, north of the tree line: no trees and no sand,
  // so none is listed (NOTES.md, "Biomes").
  biomes: { forest: [], wooded: [], dry: [] },
});
