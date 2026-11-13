# Nunavut (NU) pack notes

Nunavut has three census divisions, kept as three regions (the owner's decision for the territories: a few huge regions), so there was no merge review:

| Region | Division | Population (2021) | Main station |
| --- | --- | --- | --- |
| `nu-qikiqtaaluk` | 6204 Qikiqtaaluk (Baffin Island, the High Arctic islands, and the islands of Hudson Bay and James Bay) | 19,355 | Iqaluit |
| `nu-kivalliq` | 6205 Kivalliq (west of Hudson Bay, with Southampton Island) | 11,045 | Rankin Inlet |
| `nu-kitikmeot` | 6208 Kitikmeot (the central Arctic) | 6,458 | Cambridge Bay |

**Sources.**
- Everything comes from `packs/NU/raw/` (Statistics Canada, 2021 Census; Natural Resources Canada's Geographical Names for places and parks).
  - Station `pop` is the region's population in thousands from `counties.json`.
  - Coordinates are `places.json` or `parks.json` points rounded to 2 decimals, except where `pack.js` (and the table below) says why one moved.
- `places.json` has no population for Kinngait or Sanirajak. Kinngait's 1,396 comes from the table `tools/make-raw.js` reads, in its cached copy (`.terrain-cache/canada/st-98100002/98100002.csv`, table 98-10-0002), where it is still listed as "Cape Dorset". Every other figure here matches `places.json`.
- Facts added by hand are marked "well known"; the few I'm less sure of are marked "from memory".
- Reachability was checked with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough, loading the game as `tools/check-pack.js` does plus `js/geography.js`, with every pack's map.
- No road joins Nunavut's 25 communities to each other or to the south; everything goes by air, or by sea in summer (sealift) (well known). On the map, sea outside a `bay` never blocks track (it follows the coast), so lines between the hamlets stand in for those routes. Lakes do block.

## Start

`start: ["nu-qikiqtaaluk"]`: Iqaluit's region alone.

- **The one-region rule.** Qikiqtaaluk has one main station, Iqaluit (metro). As in Yukon, the game opens the region's nearest town of another type with it (`js/game.js`, `newGame`), and the checker counts that town. That is **Kimmirut** (coast), 75 mi south across the Meta Incognita Peninsula. The pack test confirms the start stations are IQ and KIM.
- **The first track** is Iqaluit–Kimmirut: open in both modes, about MC99k in Gentle (86 mi of track). The game's first-track hint draws it (the phone screenshot shows "Drag" from Iqaluit to Kimmirut).
- **Why not the whole territory.** The three main stations are hundreds of miles apart. Iqaluit–Rankin Inlet, the nearest pair, is 731 mi across Hudson Strait, about MC1,250k in Gentle against a MC400k starting budget. Iqaluit–Cambridge Bay is 1,056 mi. The first track would be unaffordable. Owning all three regions would also open Manitoba, the NWT and Quebec at once.
- **Why it suits the levels.** Each later level opens one more region (Kivalliq, then Kitikmeot), as in the larger packs.

## Main stations

| Region | Station | Type, size | Why |
| --- | --- | --- | --- |
| Qikiqtaaluk, 19k | Iqaluit (IQ) | metro 1 | **The capital and Nunavut's only city:** 7,429 of the region's 19,355, on Frobisher Bay (well known). **Type:** metro, like Whitehorse and Yellowknife, the other territorial capitals. **Size:** 19k is size 1 by the guide. **Placement:** the raw point (63.75, -68.5167), 0.6 mi inside the coast |
| Kivalliq, 11k | Rankin Inlet (RIN) | coast 1 | **The region's biggest community** (2,975, ahead of Arviat's 2,864) and its hub, on Hudson Bay (well known). **Type:** coast. **Placement:** the raw point (62.8167, -92.0833) is 0.1 mi off the map's coast: moved 0.5 mi southwest to 62.81, -92.09 |
| Kitikmeot, 6k | Cambridge Bay (CAM) | coast 1 | **The region's biggest community** (1,760) and its hub, a Northwest Passage harbour on Victoria Island's south coast (well known). **Type:** coast. **Placement:** the raw point (69.1139, -105.0528) |

- **Airports: none.**
  - Iqaluit Airport is the territory's hub, but from memory it carries well under half a million passengers a year.
  - That is below the bar the other packs use: Greater Moncton (about 0.7 million) is the smallest airport in the game.
  - It is the same call as Whitehorse (YT), Yellowknife (NT) and Charlottetown (PE). If the bar becomes "each province's or territory's main airport", add `airport: "Iqaluit Airport"`.
- **Ports: none.** Every community is supplied by the summer sealift, and Iqaluit's deep-sea port opened recently (from memory, 2023). Neither is a container seaport.
- **IDs.** IQ, RIN and CAM are unused in every other pack (checked against every `packs/*/pack.js`; the checker confirms). CBY is Coos Bay (OR), so Cambridge Bay is CAM.

## Towns (17: 14 hamlets and 3 scenic places)

All are size 1 and on the map's land, inside their region and outside every lake outline. The closest pair is Iqaluit–Kimmirut, 75 mi, so the checker's spacing warning never fires. Populations are from `places.json` (2021).

| ID | Place | Region | Point | Pop. | Type | Why, and placement |
| --- | --- | --- | --- | --- | --- | --- |
| KIM | Kimmirut | Qikiqtaaluk | 62.85, -69.87 | 426 | coast | The hamlet nearest Iqaluit, on Hudson Strait (well known). Katannilik Territorial Park and the Soper River lie between the two (from memory). It opens with Iqaluit at the start. Raw point |
| PGT | Pangnirtung | Qikiqtaaluk | 66.14, -65.72 | 1,504 | mountain | "Pang", on its fjord off Cumberland Sound under the mountains, the gateway to Auyuittuq (well known). **Type:** mountain, for the fjord and peaks. Raw point (the map has hills here) |
| AUY | Auyuittuq, **scenic** | Qikiqtaaluk | 67.50, -66.00 | – | mountain | Auyuittuq National Park: the Penny Ice Cap, Mount Thor and Akshayuk Pass on the Cumberland Peninsula (well known). **Point:** the park in `parks.json`, in its middle; the map has high mountains there |
| KNG | Kinngait | Qikiqtaaluk | 64.28, -76.48 | 1,396 | coast | Cape Dorset, the home of Inuit printmaking (Kinngait Studios) (well known). **Moved:** the hamlet is on Dorset Island off the Foxe Peninsula (well known), which the map doesn't draw. The raw point (64.2333, -76.5417) is 3.1 mi out to sea (`offMap`), so it moved 3.7 mi northeast onto the peninsula |
| IGL | Igloolik | Qikiqtaaluk | 69.38, -81.80 | 2,049 | coast | The region's second community, on its island in Foxe Basin (well known). Raw point |
| ABY | Arctic Bay | Qikiqtaaluk | 73.03, -85.17 | 994 | coast | On Admiralty Inlet in north Baffin (well known). **Needed for reachability:** in Tough, Pond Inlet's only open link is Arctic Bay, and Resolute's only link (both modes) is Arctic Bay. Raw point |
| PND | Pond Inlet, **scenic** | Qikiqtaaluk | 72.70, -77.96 | 1,555 | coast | On Eclipse Sound facing Bylot Island's mountains. It is the gateway to Sirmilik National Park and the floe edge, and a cruise-ship stop (well known). So it is scenic and stands for Sirmilik, as Fort Smith stands for Wood Buffalo (NT). Sirmilik's own point (`parks.json`, 72.83, -80.58) is 54 mi west, in roadless country. Raw point |
| RES | Resolute | Qikiqtaaluk | 74.70, -94.83 | 183 | coast | On Cornwallis Island, the gateway to the High Arctic islands (well known), the brief's "Grise Fiord or Resolute". Raw point |
| ARV | Arviat | Kivalliq | 61.10, -94.06 | 2,864 | coast | The region's second community, on Hudson Bay's west coast toward Churchill (well known). **Moved:** the raw point (61.1083, -94.0583) is just off the map's coast; 0.6 mi south onto the land |
| BKL | Baker Lake | Kivalliq | 64.32, -96.02 | 2,061 | mountain | Nunavut's only inland community, where the Thelon River comes into Baker Lake, near the geographic centre of Canada (well known). **Type:** see "Types" below. Raw point, on the lake's north shore |
| NAU | Naujaat | Kivalliq | 66.53, -86.25 | 1,225 | coast | Formerly Repulse Bay, right on the Arctic Circle (well known). Raw point |
| CRH | Coral Harbour | Kivalliq | 64.13, -83.17 | 1,035 | coast | On Southampton Island (well known), the stepping stone between Rankin Inlet and Baffin Island. Raw point |
| UKK | Ukkusiksalik, **scenic** | Kivalliq | 65.43, -89.18 | – | mountain | Ukkusiksalik National Park round Wager Bay (well known; its hills and cliffs from memory). **Type:** mountain, like NT's parks. **Moved:** the park's point in `parks.json` (65.4986, -88.8953) is in the bay; this is the nearest land, 9.4 mi away on the south shore |
| KUG | Kugluktuk | Kitikmeot | 67.82, -115.10 | 1,382 | coast | The region's second community, at the mouth of the Coppermine River on Coronation Gulf (well known). **Moved:** the raw point (67.8267, -115.0933) is 0.4 mi off the map's coast (`offMap`); 0.5 mi southwest onto the land |
| GJH | Gjoa Haven, **scenic** | Kitikmeot | 68.63, -95.88 | 1,349 | coast | On King William Island. Amundsen wintered here (1903–05) on the first voyage through the Northwest Passage, and the wrecks of Franklin's Erebus and Terror, found in 2014 and 2016, lie nearby (well known). Raw point |
| TAL | Taloyoak | Kitikmeot | 69.54, -93.52 | 934 | coast | On the Boothia Peninsula, the northernmost community on the mainland (from memory). Raw point |
| KGR | Kugaaruk | Kitikmeot | 68.53, -89.83 | 1,033 | coast | Formerly Pelly Bay, on that bay between Taloyoak and Naujaat (well known). Raw point |

"Raw point" means the `places.json` point rounded to 2 decimals, at most 0.35 mi away. Each was checked to be inside the map's land.

**Types.**
- **Metro:** Iqaluit only, as in Yukon and the NWT, where only the capital is metro.
- **Coast:** nearly every hamlet is on the sea, so most places are coast.
- **Mountain:** the fjords and peaks of Baffin's east coast (Pangnirtung, Auyuittuq), and the wild interior:
  - **Baker Lake** is the only inland community. The game has no tundra type. The NT, AB, BC, QC and MB packs use mountain for their wild northern interior even where it is flat: Fort Simpson, Gillam, Wabowden, Radisson.
  - **Ukkusiksalik** is typed mountain like NT's parks (Twin Falls Gorge, the Ingraham Trail).
- **Why this matters.** In "A type of place", riders only travel to a different type. Kivalliq's coast places ride to Baker Lake and Ukkusiksalik, and every place rides to Iqaluit.
- **The Kitikmeot is all coast.** No inland or mountain community there is well known enough. Its riders head for Iqaluit, Baker Lake and Ukkusiksalik once the network reaches them, which is what level 3 asks.
- **Not desert.** The High Arctic islands are a polar desert by rainfall. I kept Resolute coast: the game's desert means sand and cacti.

**Towns per region.**
- **Qikiqtaaluk 8.** It is the start region (the whole of level 1) and has 13 of the 25 communities and over half the people. Yukon's one-region start has 11 towns.
- **Kivalliq 5 and Kitikmeot 4.**

**Left out:**
- **Sanirajak (Hall Beach, 891).** It is 43 mi from Igloolik, and Igloolik stands for Foxe Basin.
- **Clyde River (1,181) and Qikiqtarjuaq (593).** Baffin's northeast coast. In Tough, Clyde River's links to Pond Inlet, Auyuittuq and Pangnirtung are blocked by mountains or lakes, and Auyuittuq and Pangnirtung already stand for the Cumberland Peninsula. Both points are just off the map's coast (`offMap`).
- **Grise Fiord (144).**
  - It is Canada's northernmost civilian community (well known), but tiny, and its raw point is off the map's coast.
  - The brief asked for Grise Fiord *or* Resolute. Resolute is reached through Arctic Bay.
  - If wanted: `{ id: "GRF", name: "Grise Fiord", county: "nu-qikiqtaaluk", lat: 76.42, lon: -82.87, type: "coast", size: 1 }` is on land, and its links to Arctic Bay, Resolute and Pond Inlet are open in both modes.
- **Sanikiluaq (1,010).** It is on the Belcher Islands in Hudson Bay, far from the rest of the region.
- **Chesterfield Inlet (397) and Whale Cove (470).** They are small and close to Rankin Inlet. Neither opens Baker Lake: Chesterfield Inlet–Baker Lake and Whale Cove–Baker Lake both cross Baker Lake (blocked).
- **Abandoned or seasonal localities.** Alert, Eureka, Nanisivik, Bathurst Inlet, Umingmaktok and others have no people, or no population in the census.
- **Quttinirpaaq National Park** (northern Ellesmere): far from any community.

## Passes (0), bridges (0), bays (0)

- **Passes: none.**
  - No road crosses Baffin's mountains.
  - **Akshayuk Pass** is the trekking route through Auyuittuq, from Pangnirtung Fiord to North Pangnirtung Fiord (well known). I don't know its position well enough to place it.
  - Without it, Pangnirtung–Auyuittuq (94 mi, 31 mi of mountains) is open in Gentle but blocked in Tough.
  - Auyuittuq's open link in Tough is Iqaluit (269 mi), round the peninsula's western lowlands.
  - If the main agent wants the pass, a point on the line Pangnirtung–Auyuittuq within 9 mi of 66.8, -65.85 would open it in Tough. That spot is from memory, and is roughly where the pass runs.
- **Bridges: none.** There is no road, so there are no road bridges. The sea needs none, because sea outside a bay is "coast" and never blocks.
- **Bays: none.** Hudson Strait, Foxe Basin, the Northwest Passage channels and Hudson Bay are left as open sea, so lines between islands and the mainland follow the coast. A bay would need a ferry "bridge" to cross, and Nunavut has no ferries. Bays would cut the islands off.
- **Lakes do block.** The map has Nunavut's big lakes: Nettilling and Amadjuak on Baffin, Baker, Garry, Aberdeen, Dubawnt and Contwoyto on the mainland, and many small ones. Every block in the pack is one of these, plus the mountains of the Cumberland Peninsula.

## How the map plays

**Counts.** Of the 36 pairs of NU places within 300 mi:
- **Gentle:** 4 are blocked. Rankin Inlet–Baker Lake and Arviat–Baker Lake cross Baker Lake; Naujaat–Taloyoak and Taloyoak–Kugaaruk cross Lady Melville Lake and another lake.
- **Tough:** 8 are blocked. These are the same four, plus:
  - Rankin Inlet–Coral Harbour (a 3 mi lake in Southampton Island's west);
  - Igloolik–Pond Inlet (a 7 mi lake);
  - Baker Lake–Gjoa Haven (a 7 mi lake);
  - Pangnirtung–Auyuittuq (31 mi of mountains).
- **One network.** With links up to 300 mi, every NU place is in one network in both modes. With links up to 250 mi, Kugluktuk (270 mi to Cambridge Bay) stands apart in both modes. In Tough, Auyuittuq and the north Baffin group (Arctic Bay, Pond Inlet, Resolute; Arctic Bay–Igloolik is 263 mi) do too.

**Open links** (other NU places and neighbours' places within 330 mi; miles shown for links over 200):

| Place | Open in Gentle | Open in Tough |
| --- | --- | --- |
| IQ | KIM, PGT, KNG (244), AUY (269) | same |
| RIN | ARV, UKK (201), (MB) CHU (287), CRH (290), NAU (310) | ARV, UKK (201), CHU (287), NAU (310) |
| CAM | GJH (231), KUG (270), TAL (283) | same |
| KIM | IQ, KNG (226), PGT (259) | same |
| PGT | AUY, IQ, KIM (259) | IQ, KIM (259) |
| AUY | PGT, IQ (269) | IQ (269) |
| KNG | CRH (202), KIM (226), IQ (244), NAU (321) | same |
| IGL | KGR (208), NAU (228), PND (245), ABY (263), TAL (285) | KGR (208), NAU (228), ABY (263), TAL (285) |
| ABY | PND, RES (219), IGL (263), TAL (304), KGR (328) | same |
| PND | ABY, IGL (245) | ABY |
| RES | ABY (219) | same |
| ARV | RIN, (MB) CHU, GLM (329) | same |
| BKL | UKK (215), GJH (298), NAU (320) | UKK (215), NAU (320) |
| NAU | UKK, KGR, CRH, IGL (228), GJH (293), RIN (310), BKL (320), KNG (321) | same |
| CRH | NAU, UKK, KNG (202), RIN (290) | NAU, UKK, KNG (202) |
| UKK | NAU, CRH, RIN (201), BKL (215), KGR (215), GJH (286) | same |
| KUG | (NT) PAU (250), CAM (270), WHT (329) | CAM (270) |
| GJH | TAL, KGR, CAM (231), UKK (286), NAU (293), BKL (298) | TAL, KGR, CAM (231), UKK (286), NAU (293) |
| TAL | GJH, CAM (283), IGL (285), ABY (304) | same |
| KGR | GJH, NAU, IGL (208), UKK (215), ABY (328) | same |

**Main stations.**

| Station | Neighbouring main stations it reaches directly | Chains through towns |
| --- | --- | --- |
| **Iqaluit** | Rankin Inlet (731 mi) and Cambridge Bay (1,056 mi), both modes | Across Hudson Strait: Iqaluit–Kinngait–Coral Harbour, then Coral Harbour–Rankin Inlet (Gentle) or Coral Harbour–Naujaat or –Ukkusiksalik–Rankin Inlet (both). All are open in both modes except Coral Harbour–Rankin Inlet in Tough |
| **Rankin Inlet** | Iqaluit (both modes); Thompson (MB, 529 mi), both modes. Cambridge Bay is blocked (Garry Lake and Baker Lake) | To Cambridge Bay: Rankin Inlet–Ukkusiksalik–Kugaaruk–Gjoa Haven–Cambridge Bay, both modes. To Manitoba: Arviat–Churchill (160 mi) and Rankin Inlet–Churchill, both modes |
| **Cambridge Bay** | Iqaluit (both modes); Yellowknife (529 mi) and Inuvik (714 mi) in Gentle (small lakes block them in Tough) | To the NWT through Kugluktuk: Kugluktuk–Paulatuk (250 mi) in Gentle; in Tough Kugluktuk–Ingraham Trail (367 mi), –Fort Good Hope (381 mi) and –Inuvik (482 mi) are open |

**Baker Lake.**
- It can't be reached straight from Rankin Inlet, Arviat, Whale Cove or Chesterfield Inlet: each line crosses Baker Lake, 15–34 mi of it (Whale Cove and Chesterfield Inlet were tried at their `places.json` points).
- The hamlet is on the lake's north shore (well known), and every line from the southeast crosses the lake.
- Its open links run north and east: Ukkusiksalik (215 mi) in both modes, Naujaat (320 mi) in both modes, and Gjoa Haven (298 mi) in Gentle.
- I didn't add a bridge for it: there is none. The sealift reaches Baker Lake up Chesterfield Inlet (well known), but that is a boat route, not a crossing.

**Neighbours unchanged.** The pack adds no bridges, passes or bays, so no link between two neighbours' places changes.

## Levels (3)

The start owns Qikiqtaaluk; each later level opens one more region.

| Level | Area | Goals | Why |
| --- | --- | --- | --- |
| Iqaluit & Baffin Island | `qikiqtaaluk` (IQ) | 50 passengers; connect IQ–PGT | Iqaluit to Pangnirtung, 184 mi. Open in both modes (about MC273k in Gentle, MC332k in Tough) |
| Across Hudson Strait | `kivalliq` (RIN) | 140 passengers; connect IQ–RIN; 25 trucks | Buy the Kivalliq and join Rankin Inlet to Iqaluit, directly or by Kinngait and Coral Harbour. Without that link, Rankin Inlet's riders for Iqaluit have nowhere to go. Trucks come from the mountain places (Pangnirtung, Auyuittuq, Baker Lake, Ukkusiksalik) to Iqaluit |
| The Northwest Passage | `kitikmeot` (CAM) | 280 passengers; own 3 counties; connect IQ–CAM | Buy the Kitikmeot and run on from the Kivalliq: Ukkusiksalik or Naujaat to Kugaaruk, Gjoa Haven and Cambridge Bay |

- **Targets** follow Yukon's and the NWT's three levels (50, 140, 280).
- **Connect goals** name main stations and Pangnirtung, a town. Each becomes possible once that region is bought or that town appears.
- **No produce or container goals:** the territory has no farm places and no port.

## Biomes

`biomes: { forest: [], wooded: [], dry: [] }`: no region is listed, so all three get the plain look (land with hills, brown peaks and snowy high peaks, and no trees or sand).
- **Nunavut lies north of the tree line** (well known). It is Arctic tundra, rock and ice caps. The tree line only touches its far southern edge, near the Manitoba border (from memory).
- **NT, Nord-du-Québec and Labrador are forest** because their towns and roads are in the spruce, by the rule of one region, one look. By the same rule, no Nunavut region has trees: every community is in the tundra.
- **Forest or wooded** would put trees all over the Arctic islands and the ice-capped mountains of Baffin and Ellesmere.
- **Dry** would paint the land sand-coloured with sagebrush. The High Arctic is a polar desert by rainfall, but it is not sandy, and Baffin and the Kivalliq are not dry.
- **The plain look is closest.** PACKS.md calls the unlisted look "green farmland and grassland". In the cartoon map (`js/cartoon.js`) it draws no fields, only green land with hill and peak icons. That reads as summer tundra, with snow on the high peaks (the screenshots show Ellesmere's and Baffin's mountains capped white).

## Checks

- **`node tools/check-pack.js NU`:** `NU: passed (3 stations, 17 towns, 0 city maps, 0 passes, 0 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.` (MB keeps its own spacing warning).
- **`node tools/test-pack.js NU`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start owns `nu-qikiqtaaluk`, and the start stations are IQ and KIM.
  - The test laid IQ–KIM (86 mi, 1 train), bought the Kitikmeot (station CAM), and 5 passengers arrived in a week (budget MC270k).
  - It reports "MB, NT, QC open once you own all of Nunavut".
- **Screenshots** (`test-out/NU/`):
  - The big map draws, and the whole territory is on screen up to northern Ellesmere.
  - Iqaluit is at the head of Frobisher Bay and Kimmirut on the south coast of the Meta Incognita Peninsula, with Nettilling and Amadjuak lakes to the north.
  - Pangnirtung is on Cumberland Sound, and Cambridge Bay and Kugluktuk are on the Kitikmeot coast.
  - The levels and phone pictures show the "Drag" hint from Iqaluit to Kimmirut.
  - In the Classic look the islands are white relief.

## For the main agent

1. **Newfoundland and Labrador is missing from Nunavut's neighbours in `packs/index.js`.** `NR.AREAS.NU.neighbors` is MB, NT and QC, and NL's list has no NU. Yet `map.js` makes `nu-qikiqtaaluk` and `nl-division-no-10-11` neighbours. The two share a real land border on Killiniq Island at Cape Chidley (well known). So owning all of Nunavut opens Quebec, whose only border with Nunavut is the low-water line of its coast (the islands of Hudson Bay and Hudson Strait are Nunavut's, well known), but not Labrador. Probably the rough outlines miss the tiny island; `build-map.js` is not mine to run.
2. **The Kitikmeot has no non-coast place.** Its riders need the network to reach Iqaluit, Baker Lake or Ukkusiksalik, as level 3 asks. Until then, a Kitikmeot line on its own carries only tourists to Gjoa Haven. If that plays badly, typing Cambridge Bay metro (the region's hub, like Thompson in MB) would give it local riders. I didn't, because the NT and YT packs type only their capitals metro.
3. **The far north on the map.**
   - The territory draws, and the first camera fits the start, though the start region spans 52°N (Akimiski Island in James Bay) to 83°N (Ellesmere).
   - The cartoon look has no ice or tundra style; the plain look stands in.
   - The ice caps (Penny, Barnes and Ellesmere's) show only as high peaks.
4. **The airport bar** (see Main stations): Iqaluit Airport is left out on the same bar as Whitehorse and Yellowknife.
