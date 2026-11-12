// National Railways pack: Alaska.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/AK/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/AK/raw.
// Alaska's 29 boroughs and census areas are merged into 16 regions (NOTES.md, phase 1). Most of
// the state has no roads: the real links are the Alaska Railroad, a few highways and the Alaska
// Marine Highway's ferries, which are listed below as bridges.
NR.addPack({
  code: "AK",
  name: "Alaska",
  // A game that starts here begins owning Anchorage and its two neighbours on the railbelt: the
  // Mat-Su (Wasilla and Palmer, farm) and the Kenai Peninsula (coast). Each touches the other two.
  // The first track (Anchorage–Wasilla, the nearest pair, 29 mi round Knik Arm) has riders.
  start: ["ak-anchorage", "ak-matanuska-susitna", "ak-kenai-peninsula"],
  // Main stations: one per region, at its biggest place, except Nenana and Petersburg (NOTES.md).
  // id = the short code shown on passengers. county = region id in this folder's map.js. pop = the
  // region's population in thousands (2020 census). size = how busy (1 to 5). level = which level
  // it belongs to in Levels mode. Points are the Census points, except where the Census point is
  // far from the town centre (said below) and Unalaska and Ketchikan, nudged onto the map's land.
  stations: [
    // Level 1: Anchorage, the Mat-Su and the Kenai
    // Anchorage: 291k, at the top of size 2's range; size 3 because with the Mat-Su it is a metro
    // area of about 400,000 (291k + 107k), the hub of the whole state. At downtown (the Alaska
    // Railroad depot); the Census point is the municipality's middle, 20 mi east in the Chugach.
    { id: "ANC", name: "Anchorage", county: "ak-anchorage", lat: 61.22, lon: -149.9, port: "Port of Alaska", airport: "Ted Stevens Anchorage International", type: "metro", size: 3, pop: 291, main: true, level: "anchorage" },
    // Wasilla: the Mat-Su Valley, Anchorage's fast-growing outer suburbs and the Matanuska Valley's
    // farms (Palmer), so farm. Size 2 by its 107k.
    { id: "WAS", name: "Wasilla", county: "ak-matanuska-susitna", lat: 61.58, lon: -149.44, type: "farm", size: 2, pop: 107, main: true, level: "anchorage" },
    // Kenai: the borough's biggest city (7,421; Soldotna 4,340, Seward 2,720). Most of the
    // borough lives around Kenai and Soldotna on Cook Inlet; Seward, the railway's port, is a town.
    { id: "KNI", name: "Kenai", county: "ak-kenai-peninsula", lat: 60.56, lon: -151.21, type: "coast", size: 1, pop: 59, main: true, level: "anchorage" },
    // Level 2: the railbelt and the Richardson Highway
    // Fairbanks: the Interior's city, the Alaska Railroad's northern end. Size 2 by its 96k, like
    // Prince George. At downtown by the Chena River; the Census point is 2 mi east.
    { id: "FAI", name: "Fairbanks", county: "ak-fairbanks-north-star", lat: 64.84, lon: -147.72, airport: "Fairbanks International", type: "metro", size: 2, pop: 96, main: true, level: "interior" },
    // Nenana, not Galena (473, the biggest place, on the Yukon with no road): Nenana (358) is on the
    // Alaska Railroad and the Parks Highway at the railway's Tanana River bridge. At the town by the
    // bridge; the Census point is 2 mi south.
    { id: "NEN", name: "Nenana", county: "ak-denali-yukon-koyukuk", lat: 64.56, lon: -149.09, type: "mountain", size: 1, pop: 7, main: true, level: "interior" },
    // Valdez: the region's biggest town, the Richardson Highway's end and the Trans-Alaska
    // Pipeline's oil port. At the town on Port Valdez; the Census point is 4 mi south, across it.
    { id: "VDZ", name: "Valdez", county: "ak-southeast-fairbanks-valdez-cordova", lat: 61.13, lon: -146.35, port: "Port of Valdez", type: "coast", size: 1, pop: 17, main: true, level: "interior" },
    // Level 3: Kodiak, the Bush and the Aleutians
    // Utqiaġvik (as the Census writes it): the northernmost town in the US. At the town; the
    // Census point is the city's middle, 3 mi south.
    { id: "UTQ", name: "Utqiaġvik", county: "ak-north-slope", lat: 71.29, lon: -156.79, type: "coast", size: 1, pop: 11, main: true, level: "west" },
    // Nome: the Bering Sea gold-rush town at the end of the Iditarod.
    { id: "NOM", name: "Nome", county: "ak-nome-northwest-arctic", lat: 64.5, lon: -165.41, type: "coast", size: 1, pop: 18, main: true, level: "west" },
    // Bethel: the Yukon-Kuskokwim Delta's hub, a river port on the Kuskokwim 60 mi inland. Mountain,
    // as the other packs type their wild northern interior even where it is flat.
    { id: "BET", name: "Bethel", county: "ak-bethel-kusilvak", lat: 60.79, lon: -161.76, type: "mountain", size: 1, pop: 27, main: true, level: "west" },
    // Dillingham: Bristol Bay's salmon town on Nushagak Bay. At the town; the Census point is 3 mi west.
    { id: "DLG", name: "Dillingham", county: "ak-bristol-bay-dillingham-lake-and-peninsula", lat: 59.04, lon: -158.46, type: "coast", size: 1, pop: 7, main: true, level: "west" },
    // Unalaska (Dutch Harbor): the top US fishing port, so a port. Its Census point is just off the
    // map's simplified coast; nudged 2 mi south onto Unalaska Island.
    { id: "UNA", name: "Unalaska", county: "ak-aleutians-east-aleutians-west", lat: 53.88, lon: -166.54, port: "Port of Dutch Harbor", type: "coast", size: 1, pop: 9, main: true, level: "west" },
    // Kodiak: the island's city, a fishing port and the Coast Guard's biggest base.
    { id: "KOD", name: "Kodiak", county: "ak-kodiak-island", lat: 57.79, lon: -152.41, type: "coast", size: 1, pop: 13, main: true, level: "west" },
    // Level 4: the Inside Passage
    // Juneau: the capital (no road out), metro as Whitehorse. At downtown on Gastineau Channel; the
    // Census point is the borough's middle, 10 mi northeast in the icefield.
    { id: "JNU", name: "Juneau", county: "ak-haines-juneau-skagway", lat: 58.3, lon: -134.42, type: "metro", size: 1, pop: 36, main: true, level: "panhandle" },
    // Ketchikan: the first port of the Inside Passage. Its centre is 0.2 mi off the map's outline;
    // the point is 1 mi north of it, on the map's land.
    { id: "KET", name: "Ketchikan", county: "ak-ketchikan-gateway-prince-of-wales-hyder", lat: 55.35, lon: -131.66, type: "coast", size: 1, pop: 20, main: true, level: "panhandle" },
    // Petersburg, not Wrangell (2,125, the only place with a Census figure): Petersburg's borough is
    // bigger (3,397) and nearly all of it lives in the town, a CDP with no figure. At the town; the
    // Census point is 5 mi southeast.
    { id: "PSG", name: "Petersburg", county: "ak-petersburg-wrangell", lat: 56.81, lon: -132.96, type: "coast", size: 1, pop: 6, main: true, level: "panhandle" },
    // Sitka: on Baranof Island's outer coast. At downtown; the Census point is the borough's middle.
    { id: "SIT", name: "Sitka", county: "ak-hoonah-angoon-sitka-yakutat", lat: 57.05, lon: -135.33, type: "coast", size: 1, pop: 11, main: true, level: "panhandle" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // More along the railbelt, the highways and the Inside Passage; few in the roadless Bush.
  // Points are places.json's, except where the Census point is a CDP's middle far from its
  // village (NOTES.md, "Towns").
  towns: [
    // Anchorage: Girdwood, the Alyeska ski resort on Turnagain Arm (part of the municipality).
    { id: "GIR", name: "Girdwood", county: "ak-anchorage", lat: 60.94, lon: -149.17, scenic: true, type: "mountain", size: 1 },
    // The Mat-Su: Palmer, the Matanuska Valley's farm town (the State Fair); Talkeetna, the
    // railway's flag stop under Denali where its climbers and flightseers start.
    { id: "PMR", name: "Palmer", county: "ak-matanuska-susitna", lat: 61.6, lon: -149.12, type: "farm", size: 1 },
    { id: "TKA", name: "Talkeetna", county: "ak-matanuska-susitna", lat: 62.32, lon: -150.11, scenic: true, type: "mountain", size: 1 },
    // Fairbanks: North Pole on the Richardson Highway; Chena Hot Springs, the resort at the end of
    // Chena Hot Springs Road (the northern lights).
    { id: "NPL", name: "North Pole", county: "ak-fairbanks-north-star", lat: 64.75, lon: -147.36, type: "mountain", size: 1 },
    { id: "CHE", name: "Chena Hot Springs", county: "ak-fairbanks-north-star", lat: 65.05, lon: -146.06, scenic: true, type: "mountain", size: 1 },
    // Denali and the Yukon: Cantwell by Broad Pass, where the Denali Highway leaves the Parks
    // Highway; Denali Park, the national park's entrance and railway depot; Wiseman, by the Dalton
    // Highway under the Brooks Range; Fort Yukon on the Arctic Circle and Galena, the Yukon's river
    // towns.
    { id: "CNT", name: "Cantwell", county: "ak-denali-yukon-koyukuk", lat: 63.39, lon: -148.95, type: "mountain", size: 1 },
    { id: "DNP", name: "Denali Park", county: "ak-denali-yukon-koyukuk", lat: 63.73, lon: -148.9, scenic: true, type: "mountain", size: 1 },
    { id: "WSM", name: "Wiseman", county: "ak-denali-yukon-koyukuk", lat: 67.41, lon: -150.11, type: "mountain", size: 1 },
    { id: "FYU", name: "Fort Yukon", county: "ak-denali-yukon-koyukuk", lat: 66.57, lon: -145.25, type: "mountain", size: 1 },
    { id: "GAL", name: "Galena", county: "ak-denali-yukon-koyukuk", lat: 64.74, lon: -156.87, type: "mountain", size: 1 },
    // The Copper River, the Alaska Highway and Prince William Sound
    // Glennallen, where the Glenn meets the Richardson; Chitina on the Copper River, where the
    // Edgerton Highway ends and the McCarthy Road starts; McCarthy and the Kennecott copper mines in
    // Wrangell–St. Elias National Park; Delta Junction, the Alaska Highway's end (and the region's
    // farms); Tok, the highway's first town in Alaska; Northway, near the border (its Census
    // point); Whittier, the railway's port through the tunnel, with Prince William Sound's
    // glaciers; Cordova, the fishing town at the Copper River's mouth (no road out).
    { id: "GLN", name: "Glennallen", county: "ak-southeast-fairbanks-valdez-cordova", lat: 62.11, lon: -145.55, type: "mountain", size: 1 },
    { id: "CHIT", name: "Chitina", county: "ak-southeast-fairbanks-valdez-cordova", lat: 61.52, lon: -144.44, type: "mountain", size: 1 },
    { id: "KNC", name: "McCarthy & Kennecott", county: "ak-southeast-fairbanks-valdez-cordova", lat: 61.43, lon: -142.92, scenic: true, type: "mountain", size: 1 },
    { id: "DLJ", name: "Delta Junction", county: "ak-southeast-fairbanks-valdez-cordova", lat: 64.04, lon: -145.73, type: "farm", size: 1 },
    { id: "TK", name: "Tok", county: "ak-southeast-fairbanks-valdez-cordova", lat: 63.33, lon: -143.04, type: "mountain", size: 1 },
    { id: "NWY", name: "Northway", county: "ak-southeast-fairbanks-valdez-cordova", lat: 63.0, lon: -141.54, type: "mountain", size: 1 },
    { id: "WTR", name: "Whittier", county: "ak-southeast-fairbanks-valdez-cordova", lat: 60.78, lon: -148.68, scenic: true, type: "coast", size: 1 },
    { id: "CDV", name: "Cordova", county: "ak-southeast-fairbanks-valdez-cordova", lat: 60.54, lon: -145.76, type: "coast", size: 1 },
    // The Kenai: Seward, the Alaska Railroad's port and Kenai Fjords National Park's gateway (at
    // downtown; the Census point is 2 mi northeast); Homer, at the end of the road, where the ferry
    // leaves for Kodiak.
    { id: "SEW", name: "Seward", county: "ak-kenai-peninsula", lat: 60.11, lon: -149.44, scenic: true, type: "coast", size: 1 },
    { id: "HOM", name: "Homer", county: "ak-kenai-peninsula", lat: 59.65, lon: -151.51, type: "coast", size: 1 },
    // Bristol Bay: King Salmon, the airport town on the Naknek River; Brooks Camp in Katmai
    // National Park (the bears at Brooks Falls).
    { id: "KSM", name: "King Salmon", county: "ak-bristol-bay-dillingham-lake-and-peninsula", lat: 58.69, lon: -156.66, type: "coast", size: 1 },
    { id: "KAT", name: "Katmai (Brooks Camp)", county: "ak-bristol-bay-dillingham-lake-and-peninsula", lat: 58.55, lon: -155.78, scenic: true, type: "mountain", size: 1 },
    // The Aleutians: King Cove, near the Alaska Peninsula's tip, where the Tustumena calls on its
    // way to Unalaska.
    { id: "KCV", name: "King Cove", county: "ak-aleutians-east-aleutians-west", lat: 55.07, lon: -162.31, type: "coast", size: 1 },
    // The Yukon-Kuskokwim Delta: Hooper Bay on the Bering Sea; Aniak up the Kuskokwim.
    { id: "HPB", name: "Hooper Bay", county: "ak-bethel-kusilvak", lat: 61.51, lon: -166.11, type: "coast", size: 1 },
    { id: "ANK", name: "Aniak", county: "ak-bethel-kusilvak", lat: 61.58, lon: -159.55, type: "mountain", size: 1 },
    // Northwest Alaska: Kotzebue (3,098), the Arctic hub on Kotzebue Sound (at the town; the Census
    // point is 3 mi east); Unalakleet on Norton Sound.
    { id: "OTZ", name: "Kotzebue", county: "ak-nome-northwest-arctic", lat: 66.89, lon: -162.6, type: "coast", size: 1 },
    { id: "UNK", name: "Unalakleet", county: "ak-nome-northwest-arctic", lat: 63.89, lon: -160.8, type: "coast", size: 1 },
    // The North Slope: Prudhoe Bay at Deadhorse, the oil field at the Dalton Highway's end;
    // Anaktuvuk Pass, the Nunamiut village in the Brooks Range.
    { id: "PRD", name: "Prudhoe Bay", county: "ak-north-slope", lat: 70.2, lon: -148.46, type: "coast", size: 1 },
    { id: "AKP", name: "Anaktuvuk Pass", county: "ak-north-slope", lat: 68.14, lon: -151.7, type: "mountain", size: 1 },
    // Southern panhandle: Klawock on Prince of Wales Island, at the end of the road from the
    // Inter-Island Ferry at Hollis (not Craig, 6 mi on: NOTES.md); Hyder, reached by road from
    // Stewart, BC.
    { id: "KLW", name: "Klawock", county: "ak-ketchikan-gateway-prince-of-wales-hyder", lat: 55.56, lon: -133.09, type: "coast", size: 1 },
    { id: "HYD", name: "Hyder", county: "ak-ketchikan-gateway-prince-of-wales-hyder", lat: 55.92, lon: -130.02, type: "mountain", size: 1 },
    // Wrangell: the Stikine River's town on the ferry mainline. At its waterfront, 1 km south of
    // downtown and just off the map's outline (NOTES.md).
    { id: "WRN", name: "Wrangell", county: "ak-petersburg-wrangell", lat: 56.46, lon: -132.39, type: "coast", size: 1 },
    // The outer coast: Hoonah, the Tlingit town on Icy Strait; Gustavus, Glacier Bay National
    // Park's gateway; Yakutat on the Gulf coast (at the town; the Census point is 4 mi east).
    { id: "HNH", name: "Hoonah", county: "ak-hoonah-angoon-sitka-yakutat", lat: 58.11, lon: -135.44, type: "coast", size: 1 },
    { id: "GLBA", name: "Glacier Bay (Gustavus)", county: "ak-hoonah-angoon-sitka-yakutat", lat: 58.41, lon: -135.74, scenic: true, type: "mountain", size: 1 },
    { id: "YKT", name: "Yakutat", county: "ak-hoonah-angoon-sitka-yakutat", lat: 59.55, lon: -139.73, type: "coast", size: 1 },
    // Lynn Canal: Mendenhall Glacier, Juneau's glacier at its visitor centre; Haines, where the
    // Haines Highway starts for the Yukon; Skagway, the gold-rush port (Klondike Gold Rush National
    // Historical Park) where the White Pass & Yukon Route starts.
    { id: "MEN", name: "Mendenhall Glacier", county: "ak-haines-juneau-skagway", lat: 58.42, lon: -134.55, scenic: true, type: "mountain", size: 1 },
    { id: "HNS", name: "Haines", county: "ak-haines-juneau-skagway", lat: 59.24, lon: -135.44, type: "coast", size: 1 },
    { id: "SGY", name: "Skagway", county: "ak-haines-juneau-skagway", lat: 59.46, lon: -135.31, scenic: true, type: "coast", size: 1 },
  ],
  levels: [
    {
      name: "Anchorage & the Mat-Su",
      areas: ["anchorage"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        // The Matanuska Valley's farms to Anchorage
        { kind: "cargo", cargo: "produce", target: 10 },
        { kind: "counties", target: 4 },
      ],
    },
    {
      name: "The Railbelt",
      areas: ["interior"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // The Alaska Railroad's line, by Talkeetna, Broad Pass and Denali
        { kind: "connect", a: "ANC", b: "FAI" },
        { kind: "counties", target: 7 },
      ],
    },
    {
      name: "Kodiak, the Bush & the Aleutians",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Over the Homer–Kodiak ferry
        { kind: "connect", a: "KNI", b: "KOD" },
        { kind: "cargo", cargo: "containers", target: 20 },
      ],
    },
    {
      name: "The Inside Passage",
      areas: ["panhandle"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // The ferry mainline: Ketchikan, Wrangell, Petersburg, Juneau
        { kind: "connect", a: "KET", b: "JNU" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
  ],
  // Waters where track needs a real crossing (here, an Alaska Marine Highway ferry route). Rough
  // outlines; land inside them is still land. Elsewhere, sea between two places means track follows
  // the shore. Knik Arm, Turnagain Arm and upper Cook Inlet are left as shore on purpose: track
  // goes round their heads, as the Glenn and Seward highways and the railway do (NOTES.md). A
  // crossing is named after the first bay listed that holds it.
  bays: [
    // No crossing below Kenai: Kodiak and the west side are reached by the Homer–Kodiak ferry
    { name: "Lower Cook Inlet", ring: [-151.92, 59.95, -152.55, 59.95, -153.15, 59.6, -153.55, 59.3, -153.6, 59.1, -152.1, 59.1, -152.1, 59.3, -152.05, 59.5, -152.0, 59.77] },
    { name: "Shelikof Strait", ring: [-153.25, 58.85, -153.7, 58.6, -153.95, 58.4, -154.05, 58.2, -154.9, 58.0, -155.3, 57.8, -155.7, 57.6, -156.2, 57.35, -156.3, 57.0, -155.5, 56.7, -154.7, 57.3, -154.3, 57.6, -153.8, 57.85, -153.2, 58.15, -152.95, 58.5, -152.6, 58.9] },
    // Kennedy and Stevenson entrances and the open Gulf round the Kodiak archipelago
    { name: "the Gulf of Alaska (off Kodiak)", ring: [-152.1, 59.1, -151.75, 59.0, -151.2, 58.7, -150.9, 58.1, -151.3, 57.4, -152.2, 56.7, -153.4, 56.2, -154.8, 56.2, -155.5, 56.7, -154.7, 57.3, -154.3, 57.6, -153.8, 57.85, -153.2, 58.15, -152.95, 58.5, -152.6, 58.9, -153.25, 58.85, -153.45, 59.1] },
    // The Aleutian passes round Unalaska and Akutan, and the Bering Sea north of them
    { name: "Unimak Pass", ring: [-164.75, 54.45, -164.9, 54.75, -165.6, 55.0, -167.0, 54.7, -168.5, 54.0, -169.5, 53.4, -169.0, 52.8, -167.5, 53.2, -166.0, 53.5, -165.0, 53.9, -164.6, 54.2] },
    { name: "Prince William Sound", ring: [-148.45, 60.75, -148.4, 60.92, -148.0, 61.02, -147.4, 61.02, -146.9, 61.0, -146.6, 61.07, -146.45, 61.09, -146.4, 61.04, -146.6, 60.95, -146.4, 60.85, -146.1, 60.75, -145.95, 60.65, -145.95, 60.45, -146.2, 60.3, -146.5, 60.15, -147.1, 60.0, -147.6, 59.85, -148.0, 60.0, -148.2, 60.3, -148.3, 60.5] },
    // The Inside Passage's channels
    { name: "Lynn Canal", ring: [-134.85, 58.38, -135.15, 58.38, -135.3, 58.7, -135.5, 59.0, -135.45, 59.15, -135.3, 59.15, -135.15, 58.95, -135.0, 58.7, -134.85, 58.45] },
    { name: "Icy Strait and Chatham Strait", ring: [-137.0, 58.35, -136.4, 58.3, -135.8, 58.33, -135.2, 58.35, -134.9, 58.3, -134.85, 58.15, -134.75, 57.9, -134.6, 57.5, -134.55, 57.0, -134.6, 56.5, -134.75, 56.15, -135.0, 56.15, -135.1, 56.6, -134.95, 57.0, -135.0, 57.5, -135.3, 57.75, -135.5, 57.95, -136.2, 58.05, -136.8, 57.95, -137.0, 58.1] },
    { name: "Frederick Sound and Stephens Passage", ring: [-134.4, 58.18, -134.15, 58.18, -133.85, 57.8, -133.6, 57.3, -133.2, 57.05, -133.08, 56.9, -133.4, 56.85, -133.9, 56.95, -134.35, 56.9, -134.55, 57.0, -134.6, 57.5, -134.75, 57.9, -134.6, 58.05] },
    { name: "Clarence Strait", ring: [-131.75, 54.72, -132.7, 54.72, -132.55, 55.0, -132.55, 55.4, -132.8, 55.8, -133.1, 56.1, -133.4, 56.3, -133.0, 56.45, -132.6, 56.4, -132.45, 56.2, -132.2, 55.95, -131.95, 55.65, -131.8, 55.45, -131.75, 55.2] },
  ],
  // Real mountain passes: [name, latitude, longitude]. Track that crosses mountains near one goes
  // over the pass (it costs more and trains climb slowly); anywhere else, mountains need a tunnel.
  // Sources in NOTES.md.
  passes: [
    // Not a pass: the Seward Highway and the railway run along Turnagain Arm's north shore below
    // the Chugach front range, which the map's grid can't resolve (like Yukon's Champagne valley).
    // Anchorage–Girdwood uses it.
    ["Turnagain Arm (Seward Highway)", 61.0, -149.45],
    // The Seward Highway over the Kenai Mountains (Girdwood–Seward)
    ["Turnagain Pass", 60.8, -149.19],
    // The highway and railway tunnel under Maynard Mountain to Whittier (a tunnel: a pass point is
    // how the game lets a line through)
    ["Anton Anderson Memorial Tunnel (Whittier)", 60.78, -148.77],
    // The Parks Highway and the Alaska Railroad over the Alaska Range (Talkeetna–Cantwell)
    ["Broad Pass", 63.31, -149.14],
    // The Richardson Highway over the Alaska Range (Glennallen–Delta Junction)
    ["Isabel Pass", 63.19, -145.56],
    // The Richardson Highway over the Chugach above Valdez (Valdez–Chitina)
    ["Thompson Pass", 61.13, -145.73],
    // Not a pass: the Glenn Highway up the Matanuska River's valley between the Chugach and the
    // Talkeetna Mountains, at Chickaloon (Palmer–Glennallen)
    ["Matanuska River valley (Glenn Highway)", 61.71, -148.55],
    // The Glenn Highway's highest point, between the Matanuska and the Copper River basin
    ["Eureka Summit", 61.95, -147.15],
    // The Dalton Highway over the Brooks Range (Wiseman–Prudhoe Bay)
    ["Atigun Pass", 68.13, -149.48],
    // The White Pass & Yukon Route and the Klondike Highway out of Skagway (on the BC border)
    ["White Pass", 59.62, -135.14],
  ],
  // Real bridges and ferries: [name, latitude, longitude]. Water crossed near one uses it (cheaper,
  // and any length); anywhere else you build a new bridge, if the water is narrow enough.
  bridges: [
    // The Alaska Marine Highway (and the Inter-Island Ferry) across the bays above. Each route has
    // points along its crossing, out from the towns; a crossing uses a route when one of its
    // points is within 3 to 4 miles of the water it crosses.
    ["Prince Rupert–Ketchikan ferry (Dixon Entrance)", 54.65, -130.77],
    ["Ketchikan–Hollis ferry (Clarence Strait)", 55.41, -132.08],
    ["Ketchikan–Hollis ferry (Kasaan Bay)", 55.43, -132.38],
    ["Petersburg–Juneau ferry (Stephens Passage)", 57.7, -133.83],
    ["Juneau–Haines ferry (Lynn Canal)", 59.07, -135.26],
    ["Juneau–Sitka ferry (Chatham Strait)", 57.76, -134.82],
    ["Juneau–Hoonah ferry (Icy Strait)", 58.17, -135.13],
    ["Homer–Kodiak ferry (Kennedy Entrance)", 58.9, -151.93],
    ["Homer–Kodiak ferry (off Afognak)", 58.07, -152.29],
    ["Homer–Kodiak ferry (Kodiak)", 57.87, -152.37],
    // The Tustumena's Southwest route, from King Cove to Unalaska
    ["King Cove–Unalaska ferry (Unimak Pass)", 54.3, -165.05],
    ["King Cove–Unalaska ferry (Akutan Pass)", 53.99, -166.17],
    // Prince William Sound
    ["Whittier–Valdez ferry (Port Wells)", 60.85, -148.2],
    ["Whittier–Valdez ferry (Valdez Arm)", 60.95, -147.58],
    ["Whittier–Cordova ferry (Passage Canal)", 60.75, -148.33],
    ["Whittier–Cordova ferry (Port Wells)", 60.73, -148.06],
    ["Whittier–Cordova ferry (mid-sound)", 60.69, -147.6],
    ["Whittier–Cordova ferry (Orca Bay)", 60.6, -146.4],
    // The Alaska Railroad's bridge over the Tanana at Nenana (the Mears Memorial Bridge)
    ["Mears Memorial Bridge (Nenana)", 64.57, -149.08],
    // The Dalton Highway's bridge over the Yukon (the E. L. Patton Yukon River Bridge, 65.88 N
    // 149.72 W), on the map's river 2 mi east of the real one
    ["E. L. Patton Yukon River Bridge", 65.89, -149.66],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are plain land with hills and peaks.
  // The railbelt, the Interior and the Copper River are boreal forest and the panhandle is
  // rainforest; Kodiak's town and roads are in its spruce. North and west of the tree line (the
  // Arctic, the Bering Sea coast, Bristol Bay and the Aleutians) the land is tundra, left plain as
  // in Nunavut (NOTES.md, "Biomes").
  biomes: {
    forest: [
      "ak-anchorage", "ak-matanuska-susitna", "ak-kenai-peninsula", "ak-fairbanks-north-star",
      "ak-denali-yukon-koyukuk", "ak-southeast-fairbanks-valdez-cordova", "ak-kodiak-island",
      "ak-haines-juneau-skagway", "ak-hoonah-angoon-sitka-yakutat", "ak-petersburg-wrangell",
      "ak-ketchikan-gateway-prince-of-wales-hyder",
    ],
    wooded: [],
    dry: [],
  },
});
