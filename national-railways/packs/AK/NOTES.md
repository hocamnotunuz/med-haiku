# Alaska (AK) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (16 regions, the Aleutians joined, the two `names`). The place-code fix is in `tools/make-raw.js`, so 149 places now have populations (Anchorage 291,244, Bethel 6,321). The pack (phase 2, below) is built on the rebuilt map and raw files.

Populations: `packs/AK/raw/counties.json` (U.S. Census Bureau, 2020 estimates base; the 29 areas add up to 733,374) and `packs/AK/raw/places.json`. The map has the 2017 boundaries, so Valdez-Cordova is one area (9,719 = Chugach + Copper River, as the tool's `SPLIT` says). Every group below is connected through `neighbors`; shared border lengths (km) were measured on the rings in `map.js`. Roads, railways and ferries named here are well known unless marked "(moderately known)" or "(from memory)".

**Read "Map and data check" item 1 first:** `places.json` is missing the population of 20 incorporated places, Bethel and Anchorage among them, because of a bug in `tools/make-raw.js`.

### Recommended (29 → 16 regions)

```
merge: [
  ["Denali", "Yukon-Koyukuk"],
  ["Southeast Fairbanks", "Valdez-Cordova"],
  ["Nome", "Northwest Arctic"],
  ["Bethel", "Kusilvak"],
  ["Bristol Bay", "Dillingham", "Lake and Peninsula"],
  ["Ketchikan Gateway", "Prince of Wales-Hyder"],
  ["Petersburg", "Wrangell"],
  ["Hoonah-Angoon", "Sitka", "Yakutat"],
  ["Haines", "Juneau", "Skagway"],
],
join: [["Aleutians West", "Aleutians East"]],
bridges: [],
names: { "Aleutians East-Aleutians West": "Aleutians Area", "Bristol Bay-Dillingham-Lake and Peninsula": "Bristol Bay Area" },
```

Why each group:
- **Denali + Yukon-Koyukuk** (441 km): the Alaska Railroad and the Parks Highway between Mat-Su and Fairbanks: Cantwell, Denali Park, Healy (Denali), then Nenana and its Tanana bridge (Yukon-Koyukuk). Also the Yukon villages and the Dalton Highway to Coldfoot.
- **Southeast Fairbanks + Valdez-Cordova** (468 km): the Richardson Highway (Valdez–Glennallen–Delta Junction), the Glenn and Tok Cut-off to Tok, and the Alaska Highway to Beaver Creek. Also has Whittier (the railway's tunnel branch) and Cordova.
- **Nome + Northwest Arctic** (358 km): the Bering Strait and Kotzebue Sound, with Nome and Kotzebue as the two hubs of northwest Alaska.
- **Bethel + Kusilvak** (383 km): the Yukon-Kuskokwim Delta, with Bethel as its hub.
- **Bristol Bay + Dillingham + Lake and Peninsula** (124, 306 km): the Bristol Bay salmon country: Dillingham, Naknek and King Salmon, Iliamna. Bristol Bay Borough touches only Lake and Peninsula.
- **Ketchikan Gateway + Prince of Wales-Hyder** (52 km, at Hyder): Ketchikan's hinterland: Prince of Wales Island by the Inter-Island Ferry to Hollis (moderately known), Metlakatla, and Hyder.
- **Petersburg + Wrangell** (37 km): the two mid-panhandle towns on the Alaska Marine Highway mainline, by Wrangell Narrows and the Stikine mouth.
- **Hoonah-Angoon + Sitka + Yakutat** (95, 26 km): the outer coast: Baranof, Chichagof, Admiralty and Glacier Bay, then up the coast by Cape Fairweather to Yakutat. Sitka shares Chichagof Island with Hoonah-Angoon.
- **Haines + Juneau + Skagway** (60, 66 km): Lynn Canal, the northern end of the ferry mainline (Juneau–Haines–Skagway). Skagway (the White Pass & Yukon Route, the Klondike Highway) and Haines (the Haines Highway) are its gateways to the Yukon.
- **join Aleutians West → Aleutians East:** Aleutians West has no land neighbour. The Alaska Marine Highway's Southwest route (the Tustumena) runs Kodiak–Chignik–Sand Point–King Cove–Cold Bay–False Pass–Akutan–Unalaska. Unalaska/Dutch Harbor is the chain's town.

Alone, over 50k (4): **Anchorage**, **Matanuska-Susitna**, **Fairbanks North Star**, **Kenai Peninsula**.

Alone, under 50k (the 2 exceptions):
- **Kodiak Island**, 13,100 people. An island borough with its own city (5,578), and the Tustumena runs to Homer. Its only small neighbour, Lake and Peninsula, touches it only on Kodiak's strip of mainland on the Katmai coast, across Shelikof Strait. Merging the two would also pull in Bristol Bay Borough (which touches only Lake and Peninsula) and send Dillingham to Bethel, splitting Bristol Bay.
- **North Slope**, 11,032 people. The Arctic Slope north of the Brooks Range: Utqiaġvik, plus Prudhoe Bay at the end of the Dalton Highway. It is one huge region with its own geography, like the territory packs. Putting it with Nome and Northwest Arctic would give that whole region to Utqiaġvik, which has the most people (see Rejected).

### Bridges: none needed
- **Aleutians West** is the only area with no land neighbour, and the join covers it.
- **Prince Rupert–Ketchikan** (`BC:North Coast`) would change nothing: Ketchikan and every other panhandle area already border `bc-kitimat-stikine-north-coast-stikine` by land.
- **Bellingham–Ketchikan** (`WA:Whatcom`), the mainline's southern end: not recommended. It is a sailing of about two days (from memory), much longer than any ferry counted elsewhere, and Alaska already connects through BC and Yukon. Add it only if a Washington–Alaska sea link is wanted.
- **Homer–Kodiak, Whittier–Valdez–Cordova, Juneau–Sitka and the cross-Gulf Juneau–Yakutat–Whittier run** (the last moderately known) all link regions that are already neighbours, or stay inside one region.

### Regions, main stations and how each is reached

| Region | Pop | Main station (places.json) | Neighbours after merging |
| --- | --- | --- | --- |
| Anchorage | 291,244 | Anchorage (null in places.json; 291,244 in the Census file) | Mat-Su, Kenai, SEF-VC |
| Matanuska-Susitna | 107,068 | Wasilla (9,057) | Anchorage, Kenai, Denali-YK, SEF-VC, Bethel-Kusilvak |
| Fairbanks North Star | 95,660 | Fairbanks (32,512) | Denali-YK, SEF-VC |
| Kenai Peninsula | 58,801 | Kenai (7,421). Seward (2,720), the railway's port, is a phase 2 choice | Anchorage, Mat-Su, SEF-VC, Kodiak, Bristol Bay, Bethel-Kusilvak |
| Denali-Yukon-Koyukuk | 6,975 | Galena (473) by the rule, but it has no road. **Exception: Nenana (358)**, on the railway and the Parks Highway | Fairbanks, Mat-Su, SEF-VC, Bethel-Kusilvak, Nome-NWA, North Slope, `yt-yukon` |
| Southeast Fairbanks-Valdez-Cordova | 16,526 | Valdez (3,976) | Anchorage, Mat-Su, Kenai, Fairbanks, Denali-YK, Hoonah-Angoon-Sitka-Yakutat, `yt-yukon` |
| Nome-Northwest Arctic | 17,846 | Nome (3,701) | Bethel-Kusilvak, Denali-YK, North Slope |
| North Slope | 11,032 | Utqiaġvik (4,925) | Nome-NWA, Denali-YK, `yt-yukon` |
| Bethel-Kusilvak | 27,027 | Bethel (6,321 in the Census file, null in places.json). Until the fix, the rule picks Hooper Bay (1,374) | Bristol Bay, Kenai, Mat-Su, Denali-YK, Nome-NWA |
| Bristol Bay Area | 7,173 | Dillingham (2,251) | Bethel-Kusilvak, Kenai, Kodiak, Aleutians |
| Aleutians Area | 8,646 | Unalaska (4,253; off the map, see below) | Bristol Bay (Aleutians East–Lake and Peninsula, 221 km on the Alaska Peninsula). Aleutians West comes in through the join |
| Kodiak Island | 13,100 | Kodiak (5,578) | Kenai (83 km), Bristol Bay (353 km), both on Kodiak's mainland strip |
| Ketchikan Gateway-Prince of Wales-Hyder | 19,708 | Ketchikan (8,190) | Petersburg-Wrangell, Hoonah-Angoon-Sitka-Yakutat (Sitka–PoW, 15 km), BC |
| Petersburg-Wrangell | 5,522 | Wrangell (2,125) by the rule. Petersburg is a CDP with no figure, though its borough is larger (3,397) | Ketchikan-PoW, Hoonah-Angoon-Sitka-Yakutat, BC |
| Hoonah-Angoon-Sitka-Yakutat | 11,472 | Sitka (8,449) | Juneau group, Petersburg-Wrangell, Ketchikan-PoW, SEF-VC (Yakutat, 206 km), BC, `yt-yukon` |
| Haines-Juneau-Skagway | 35,574 | Juneau (32,256) | Hoonah-Angoon-Sitka-Yakutat, BC |

All 16 are reachable from `yt-yukon` (checked).

### Rejected
- `["Nome", "Northwest Arctic", "North Slope"]` (15 regions, no exception): Utqiaġvik would take Nome's station, and one region would run from Norton Sound to Canada.
- `["Denali", "Southeast Fairbanks", "Yukon-Koyukuk"]` with `["Valdez-Cordova", "Yakutat"]`: the station would be Delta Junction. It mixes the Parks and Alaska highways and splits the Richardson between Valdez and Delta.
- `["North Slope", "Yukon-Koyukuk"]` (the Dalton Highway): Utqiaġvik would be the station for Nenana's people, and Denali would be left alone at 1,624.
- `["Kodiak Island", "Lake and Peninsula", "Bristol Bay"]` with `["Bethel", "Dillingham", "Kusilvak"]`: it splits Bristol Bay.
- Yakutat with Southeast Fairbanks-Valdez-Cordova: also valid, and the contact is longer (206 km against 26). But Yakutat is a Southeast borough on the ferry and air routes from Juneau, and the region would stretch from the Gulf coast to Tok.

### Alternative (17 regions)
Replace `["Haines", "Juneau", "Skagway"]` with Juneau alone (32,256) and `["Haines", "Skagway"]` (3,318; station Skagway, a CDP with no figure).
- Pro: the White Pass & Yukon Route gets a main station at Skagway, the gateway to Whitehorse, and the capital keeps its own region.
- Con: one more region and two more exceptions. One is Juneau, at 32k with no road out; the other is a 3.3k region.

### Map and data check
1. **Bug: 20 incorporated places have no population in places.json.** These are the places with codes under 10000: Adak through Buckland, plus Anchorage, Bethel (6,321), Akutan (1,583), Aniak, Angoon and Anderson. The Census city file cached for Alaska (`.terrain-cache/census/sub-est2023_02.csv`) writes PLACE without leading zeros ("6520"), so `FIPS + PLACE` never matches the Gazetteer GEOID ("0206520"). Colorado's cached file is zero-padded. Fix in `tools/make-raw.js` (the `placePop` line): `FIPS + String(r[scol("PLACE")]).padStart(5, "0")`. Then rerun make-raw for AK.
2. **Odd place names:** "Anchorage municipality", "Juneau city and borough", "Sitka city and borough" and "Wrangell city and borough" have kind "place". The name regex strips only city, town, CDP and village.
3. **Off the map:** Unalaska (this region's station) sits just off the simplified coast of Unalaska Island, so phase 2 must nudge it onto land. Diomede (Little Diomede is not drawn at this scale), Egegik and Point Baker are off the map too.
4. **Date line: looks right.** Aleutians West runs in one stretch from -187.54 (Attu) to -166.09. Attu Station (-186.74) and Eareckson Station on Shemya (-185.89) lie inside their island rings. No coordinate is positive in map.js, places, index.js (AK box -187.54) or terrain.js (box -187.65). The Pribilofs, the Near, Rat, Andreanof and Fox Islands, St. Lawrence, Nunivak and St. Matthew (Bethel, at -173) are all drawn. Russia isn't drawn, which is fine.
5. **Neighbours** are the same in counties.json and map.js, and none looks wrong or missing. Haines and Skagway border only BC, which is right (the White and Chilkat passes are on the BC line). So in the game, the Skagway–Whitehorse and Haines–Haines Junction links cross BC's northwest region. Hyder–Stewart, Tok–Beaver Creek and Chicken–Dawson are covered by the PoW-Hyder–BC and Southeast Fairbanks–Yukon borders.
6. **Short contacts:**
   - Sitka–PoW-Hyder, 15 km, at Baranof's south tip (Port Alexander is in PoW-Hyder; moderately known).
   - Hoonah-Angoon–Yakutat, 26 km, one straight line inland from the coast near Cape Fairweather.
   - Anchorage–Kenai, 28 km.
   - Ketchikan and PoW-Hyder touch only at Hyder on the mainland, not on Prince of Wales Island.
7. **Area:** the regions add up to about 1.52 million km², close to Alaska's land area of about 1.48 million km² (well known).

## The pack (phase 2)

**Sources.** Populations and points come from `packs/AK/raw/` (U.S. Census Bureau): a station's `pop` is its region's population in thousands from `counties.json`, and points are `places.json`'s, rounded to 2 decimals, except the moves listed below. Pass, bridge and park coordinates come from Wikipedia articles, read for this pack (named below). Ferry routes are the Alaska Marine Highway's (well known), plus the Inter-Island Ferry (moderately known). Facts marked "(from memory)" come from no source read here.

### Start
- **The start is Anchorage, the Mat-Su and the Kenai** (`ak-anchorage`, `ak-matanuska-susitna`, `ak-kenai-peninsula`). Each region touches the other two.
- **Three types of place:** metro (Anchorage), farm (Wasilla) and coast (Kenai).
- **The first track** is Anchorage–Wasilla, the nearest pair: 29 mi, open in both modes. The pack test laid it as ANC–WAS (34 mi of track).

### Main stations (16)

| Region | Station | Type, size | Pop | Notes |
| --- | --- | --- | --- | --- |
| Anchorage | ANC Anchorage | metro 3 | 291 | **Port of Alaska; Ted Stevens Anchorage International** (both well known). **Size:** 291k is at the top of size 2's range. I chose size 3 because with the Mat-Su it is a metro area of about 400,000 (291k + 107k), the hub of the whole state. Comparisons: Saskatoon 326k is size 3; St. John's 272k and Regina 277k are size 2. **Point:** downtown (61.22, -149.90). The Census point (61.17, -149.28) is the municipality's middle, 20 mi east in the Chugach. |
| Mat-Su | WAS Wasilla | farm 2 | 107 | Wasilla (9,057) is the biggest place. The Matanuska Valley farms are at Palmer (well known). |
| Kenai Peninsula | KNI Kenai | coast 1 | 59 | **Kenai (7,421) is the biggest place.** Soldotna has 4,340 and Seward 2,720. Most of the borough lives around Kenai and Soldotna, so Kenai keeps the station. Seward, the Alaska Railroad's southern end and port, is a scenic town, so the railbelt still runs Seward–Anchorage. Soldotna, 9 mi from Kenai, is left out. |
| Fairbanks North Star | FAI Fairbanks | metro 2 | 96 | **Fairbanks International** (the brief names it). **Point:** downtown (64.84, -147.72), 2 mi west of the Census point. |
| Denali-Yukon-Koyukuk | NEN Nenana | mountain 1 | 7 | **Exception:** Galena (473) is the biggest place, but it is on the Yukon with no road. Nenana (358) is on the Alaska Railroad and the Parks Highway, at the railway's Tanana bridge, the Mears Memorial Bridge. **Not Healy:** it is a CDP with no Census figure, and it is 9 mi from Denali Park, a scenic town. Nenana sits where the railbelt's two halves meet. **Point:** the town by the bridge, 1.7 mi north of the Census point. |
| SE Fairbanks-Valdez-Cordova | VDZ Valdez | coast 1 | 17 | **Port of Valdez,** the Trans-Alaska Pipeline's oil terminal (well known). Ports elsewhere include bulk ports such as Sept-Îles. **Point:** the town (61.13, -146.35). The Census point is 3.5 mi south, across Port Valdez. |
| North Slope | UTQ Utqiaġvik | coast 1 | 11 | The name is written as the Census writes it. **Point:** the town (71.29, -156.79). The Census point is the city's middle, 3 mi south. |
| Nome-Northwest Arctic | NOM Nome | coast 1 | 18 | Nome (3,701) is the biggest place. |
| Bethel-Kusilvak | BET Bethel | mountain 1 | 27 | **Bethel (6,321)** is the biggest place. **Type:** mountain, following the other packs' convention for the wild northern interior (NU notes). It is a river port 60 mi up the Kuskokwim. |
| Bristol Bay | DLG Dillingham | coast 1 | 7 | Dillingham (2,251) is the biggest place. **Point:** the town (59.04, -158.46), 3 mi east of the Census point. |
| Aleutians | UNA Unalaska | coast 1 | 9 | **Port of Dutch Harbor:** the top US fishing port by volume (well known). **Point:** the Census point (53.91, -166.53) is off the simplified coast, so the station is nudged 2 mi south to 53.88, -166.54 on Unalaska Island, 0.6 mi inside. |
| Kodiak Island | KOD Kodiak | coast 1 | 13 | No port: below the bar for a major seaport. |
| Haines-Juneau-Skagway | JNU Juneau | metro 1 | 36 | **Type:** the capital, so metro, as Whitehorse. **Point:** downtown (58.30, -134.42). The Census point (58.37, -134.18) is the borough's middle in the icefield. |
| Ketchikan-PoW-Hyder | KET Ketchikan | coast 1 | 20 | **Point:** the town centre is just off the map's outline, so the station uses 55.35, -131.66, on the map's land. |
| Petersburg-Wrangell | PSG Petersburg | coast 1 | 6 | **Exception to the rule.** Wrangell (2,125) is the only place in the region with a Census figure. Petersburg Borough is bigger (3,397), and nearly all of it lives in Petersburg town, a CDP with no figure. **Point:** the town (56.81, -132.96), 5 mi from the CDP's Census point. |
| Hoonah-Angoon-Sitka-Yakutat | SIT Sitka | coast 1 | 11 | **Point:** downtown (57.05, -135.33). The Census point is the borough's middle. |

**Other station decisions:**
- **IDs:** each is checked unique against every pack. CHT, SDN, GBY, KTN, WRG and YAK were already taken, so the codes are CHIT, GLBA, KET, WRN and YKT.
- **Airports:** only Anchorage and Fairbanks. The other packs give airports to regions of 120k or more (Bozeman, Missoula), and Juneau's 36k is below that.

### Towns (38, 13 of them scenic)

Points are `places.json`'s unless marked *moved*. A *moved* town's Census point is a CDP's middle far from its village or town; the distance is given in brackets.

- **Anchorage:** Girdwood (scenic: Alyeska Resort). It is part of the municipality, so it has no Census point. Wikipedia "Girdwood, Anchorage": 60.9425, -149.1664.
- **Mat-Su:**
  - Palmer: the Matanuska Valley's farm town, so farm.
  - Talkeetna (scenic): the Alaska Railroad's stop under Denali, where climbers and flightseers start (well known). *Moved* to the village (62.32, -150.11; from memory) [6 mi].
- **Fairbanks:**
  - North Pole.
  - Chena Hot Springs (scenic): Wikipedia, 65.0531, -146.0556, 56 mi northeast of Fairbanks.
- **Denali-Yukon-Koyukuk:**
  - Cantwell: *moved* to the village at the Parks and Denali highways' junction (63.39, -148.95; from memory) [6 mi].
  - Denali Park (scenic: Denali National Park's entrance, visitor centre and railway depot): *moved* to 63.73, -148.90 (from memory) [13 mi].
  - **Wiseman instead of Coldfoot.** Wikipedia "Wiseman, Alaska": 67.4094, -150.1097, 3 mi off the Dalton Highway. From Coldfoot (67.25), a straight line meets the Brooks Range just beyond Atigun Pass's 9-mile reach in Tough. From Wiseman, 11 mi further north, the line to Prudhoe Bay goes over Atigun Pass in both modes.
  - Fort Yukon (on the Arctic Circle).
  - Galena (the biggest place).
- **Southeast Fairbanks-Valdez-Cordova** (eight towns, the corridor region):
  - Glennallen: *moved* to the junction of the Glenn and Richardson highways (62.11, -145.55; from memory) [10 mi].
  - Chitina: *moved* to the village on the Copper River (61.52, -144.44; from memory) [9 mi]. Where the Edgerton Highway ends and the McCarthy Road begins. It also makes Valdez–Fairbanks work in Tough (see below).
  - McCarthy & Kennecott (scenic: the Kennecott mines in Wrangell–St. Elias National Park, well known). The point is McCarthy village (61.43, -142.92; from memory) [2.5 mi]. Kennecott itself, 5 mi up the glacier, is behind 20 mi of Wrangell Mountains from Chitina on the map.
  - Delta Junction (farm: the Alaska Highway's end and the Delta farms, moderately known).
  - Tok.
  - **Northway:** kept at its Census point (63.00, -141.54), which is the CDP's middle, about 13 mi east of the village. From the village point the line to Whitehorse is blocked in Tough (24 mi of mountains); from the Census point it is open.
  - Whittier (scenic: Prince William Sound's glaciers, through the railway tunnel).
  - Cordova: *moved* to the town (60.54, -145.76) [4 mi].
- **Kenai:**
  - Seward (scenic: Kenai Fjords National Park and the railway's port). *Moved* to downtown (60.11, -149.44) [2 mi].
  - Homer (the Kodiak ferry).
- **Bristol Bay:**
  - King Salmon: *moved* to the town (58.69, -156.66; from memory) [5.6 mi].
  - Katmai (Brooks Camp) (scenic: the bears at Brooks Falls). Wikipedia "Brooks Camp": 58.5561, -155.7789.
- **Aleutians:** King Cove (757), the Tustumena's stop near the peninsula's tip.
  - Akutan (1,583) is bigger, but it is on an island the ferry line passes.
  - Sand Point is on an island off the ferry line's water.
  - Adak is far west with no ferry.
- **Bethel-Kusilvak:** Hooper Bay (1,374) and Aniak (on the Kuskokwim).
- **Nome-Northwest Arctic:**
  - Kotzebue (3,098): *moved* to the town (66.89, -162.60) [2.6 mi].
  - Unalakleet.
- **North Slope:**
  - Prudhoe Bay: at Deadhorse (70.20, -148.46; from memory). The CDP's Census point is 13 mi north, over the field.
  - Anaktuvuk Pass.
- **Ketchikan-PoW-Hyder:**
  - **Klawock instead of Craig (1,036).** Klawock (719) is at the end of the road from Hollis, where the Inter-Island Ferry lands. A line from Ketchikan to Craig crosses 24 mi of the island's mountains (blocked in Tough); to Klawock the crossing is 15.0 mi (open).
  - Hyder: *moved* to the town (55.92, -130.02) [4 mi]. Reached by road from Stewart, BC.
  - Metlakatla is left out (16 mi from Ketchikan).
- **Petersburg-Wrangell:** Wrangell. *Nudged* to its waterfront at 56.46, -132.39, 1 km south-west of downtown (56.47, -132.38). The point is 0.3 mi off the outline, the one checker warning. From downtown, the line from Ketchikan crosses 16.4 mi of Wrangell Island (blocked in Tough, limit 15); from the waterfront it crosses 14.5 mi. That opens the ferry mainline Ketchikan–Wrangell–Petersburg–Juneau in Tough.
- **Hoonah-Angoon-Sitka-Yakutat:**
  - Hoonah.
  - Glacier Bay (Gustavus) (scenic: Glacier Bay National Park's gateway).
  - Yakutat: *moved* to the town (59.55, -139.73) [4 mi].
- **Haines-Juneau-Skagway:**
  - Mendenhall Glacier (scenic): at the visitor centre on Mendenhall Lake (58.42, -134.55; from memory). Wikipedia's point for the glacier, 58.4958, -134.5322, is up the ice.
  - Haines.
  - Skagway (scenic: Klondike Gold Rush National Historical Park and the White Pass & Yukon Route).

### Water: bays and ferries

**Bays (9), where water should block:**
- Kodiak's waters: Lower Cook Inlet, Shelikof Strait, and the Gulf of Alaska off Kodiak, which includes Kennedy and Stevenson entrances.
- The Aleutian passes round Unalaska ("Unimak Pass").
- Prince William Sound.
- Four rings over the Inside Passage's channels: Lynn Canal; Icy Strait and Chatham Strait; Frederick Sound and Stephens Passage; Clarence Strait. BC's Hecate Strait ring already covers Dixon Entrance up to 54.7°N.

The rings stay a few miles off the main shores, and land inside them is still land. Shelikof Strait is listed before the Gulf ring, so a crossing's name follows the first ring.

**Not bays: Knik Arm, Turnagain Arm and upper Cook Inlet.** A straight line over them counts as track following the shore round the arm's head (dearer and slower). That is the real route of the Glenn Highway and the railway round Knik Arm, and of the Seward Highway and the railway round Turnagain Arm (well known). A bay there would cut Anchorage–Wasilla (the first track, 12 mi along Knik Arm) and Anchorage–Kenai (14 mi of upper inlet), which no bridge crosses. Kenai, a start region, would then have no Tough link until towns appeared. Below Kenai, Cook Inlet is a bay, with no crossing to the west side.

**Ferries (18 points on 9 routes), named "X–Y ferry (point)" as in BC:**

| Route | What it crosses | Points |
| --- | --- | --- |
| Prince Rupert–Ketchikan | BC's Hecate Strait bay | 1 |
| Ketchikan–Hollis (Inter-Island Ferry) | Clarence Strait | 2 |
| Petersburg–Juneau (the mainline) | Stephens Passage | 1 |
| Juneau–Haines | Lynn Canal | 1 |
| Juneau–Sitka | Chatham Strait | 1 |
| Juneau–Hoonah | Icy Strait | 1 |
| Homer–Kodiak | Kennedy Entrance, off Afognak, and the approach to Kodiak | 3 |
| King Cove–Unalaska (the Tustumena) | Unimak Pass, Akutan Pass | 2 |
| Whittier–Valdez and Whittier–Cordova | Prince William Sound | 6 |

- **Placement:** each point sits on the crossing, out from towns.
- **Checks:** every point is within 10 mi of Alaska's map. The Kennedy Entrance point (58.90, -151.93) is 3 mi off the Barren Islands; first placed at 58.75, it was more than 10 mi out.
- **For the record:** Whittier–Valdez is listed though only Gentle can use it (in Tough the line crosses 15.5 mi of the Chugach).
- **Left out:** the Bellingham mainline (phase 1), Ketchikan–Metlakatla (Metlakatla is not a town), and Haines–Skagway (its water is not in a bay).
- **Verified with `NR.blockedReason`:**
  - These crossings are blocked: Seward–Kodiak (38 mi across the Gulf off Kodiak), King Salmon–Kodiak (Shelikof), Dillingham–Unalaska and King Salmon–Unalaska (51–57 mi of the Aleutian waters), Homer–King Salmon and Homer–Katmai (57–61 mi of Lower Cook Inlet).
  - These ferry crossings are open in both modes: Ketchikan–Prince Rupert, Kenai–Kodiak, King Cove–Unalaska, Whittier–Cordova, Petersburg–Juneau, Juneau–Hoonah.

### Passes (10, two of them valley routes) and bridges

| Name | Point | Source | What uses it |
| --- | --- | --- | --- |
| Turnagain Arm (Seward Highway) | 61.00, -149.45 | Valley route, like Yukon's Champagne: the highway and railway run along the arm's north shore below the Chugach front range, which the 3-mile grid can't resolve (well known) | Anchorage–Girdwood (19 mi of "mountains" otherwise) |
| Turnagain Pass | 60.80, -149.19 | Wikipedia, 60.8033, -149.1853 | Girdwood–Seward |
| Anton Anderson Memorial Tunnel | 60.78, -148.77 | Wikipedia, 60.783, -148.765 (a road and rail tunnel, as the brief says) | Whittier's lines |
| Broad Pass | 63.31, -149.14 | Wikipedia "Broad Pass, Alaska", 63°18′45″N 149°8′39″W | Talkeetna–Cantwell |
| Isabel Pass | 63.19, -145.56 | Wikipedia, 63.1875, -145.5581 | Glennallen–Delta Junction |
| Thompson Pass | 61.13, -145.73 | Wikipedia, 61.1286, -145.7297 | Valdez–Chitina (8 mi from the line) |
| Matanuska River valley (Glenn Highway) | 61.71, -148.55 | Valley route at Chickaloon (well known: the Glenn follows the Matanuska) | Palmer–Glennallen (a 32 mi Chugach run otherwise) |
| Eureka Summit | 61.95, -147.15 | passbagger.org (61°56′51″N 147°08′49″W); 3,322 ft, the Glenn's high point | Palmer–Glennallen |
| Atigun Pass | 68.13, -149.48 | Wikipedia, 68.1294, -149.4758 | Wiseman–Prudhoe Bay |
| White Pass | 59.62, -135.14 | Wikipedia, 59.6247, -135.1381. It is on the BC line, and neither BC nor Yukon lists it (YT notes) | Skagway–Carcross |

**Left out or dropped:**
- **No Moose Pass:** Wikipedia doesn't call it a pass (it is a community).
- **No Mentasta Pass:** not well known, and Wikipedia's Tok Cut-Off article doesn't name it. Glennallen–Tok is blocked in Tough (28 mi); the chain goes Glennallen–Delta Junction–Tok instead.
- **Chilkat Pass dropped:** 59.67, -136.56 (Wikipedia) is in BC, 18 mi from the Haines–Haines Junction line, so no line uses it.

**Bridges:**
- **Mears Memorial Bridge (Nenana),** 64.57, -149.08 (Wikipedia, 64.5671, -149.0786): the Alaska Railroad over the Tanana.
- **Dropped, then restored by the main agent:** the Yukon River (E. L. Patton) Bridge. The map's Yukon had a gap there (see "For the main agent"); the main agent fixed `tools/build-terrain.js` (river stretches were told apart by their first point only, so a stray two-point piece at Fort Yukon hid the Yukon Flats stretch), rebuilt Alaska's terrain and listed the bridge on the map's river, 2 mi east of the real one. **Dropped:** the Million Dollar Bridge (60.67, -144.75), because it is 5.5 mi from the map's Copper River, which ends upstream. Both tripped the checker's "far from water" warning.

### Reachability (`NR.blockedReason`, Gentle and Tough)

Checked by loading the game files as `tools/check-pack.js` does, plus `js/geography.js`. Every pair of places within 330 mi was tested, in both modes, for every AK station and town and for the BC and Yukon places near Alaska.

- **Every town has an open link in both modes.**
- **In Gentle, all 70 places form one network.**
- **In Tough there are two pieces.** The southern panhandle with BC's northwest is one: Ketchikan, Klawock, Hyder, Wrangell, Petersburg, Juneau, Hoonah, Gustavus, Mendenhall, plus Prince Rupert, Terrace, Kitimat and Smithers. It joins the rest of the game through BC's own network, by the Prince Rupert–Ketchikan ferry.

**Chains, open in both modes:**
- **Railbelt:** Seward–Girdwood–Anchorage–Wasilla–Talkeetna–Cantwell–Denali Park–Nenana–Fairbanks. Seward–Anchorage direct is blocked in Tough: 28 mi of the Kenai Mountains, too far from Turnagain Pass.
- **Richardson:**
  - In Gentle: Valdez–Glennallen–Delta Junction–Fairbanks.
  - In Tough: Valdez–Chitina–Glennallen–Delta Junction–Fairbanks. Valdez–Glennallen crosses 30 mi of the Chugach, 19 mi from Thompson Pass.
- **Alaska Highway:**
  - Delta Junction–Tok–Northway–Whitehorse.
  - Tok–Haines Junction is open in Gentle only (in Tough, 7 mi of Kluane Lake).
  - Tok–Dawson City (the Top of the World road) is open in both.
- **Skagway–Whitehorse:** Skagway–Carcross (over White Pass)–Whitehorse. Haines–Whitehorse is also open in Tough.
- **Glenn Highway:** Palmer–Glennallen.
- **Dalton:** Fairbanks or Nenana–Wiseman–Prudhoe Bay.
- **Kodiak:** Kenai–Kodiak, over the Homer–Kodiak ferry. Homer–Kodiak is open in Gentle; in Tough it is blocked by 20 mi of the Kenai Peninsula's southern tip.

**Main stations and their neighbouring main stations (open lines):**

| Station | Gentle | Tough |
| --- | --- | --- |
| ANC | WAS, KNI, VDZ | WAS, KNI |
| WAS | ANC, KNI, NEN, VDZ | ANC, KNI |
| KNI | ANC, WAS, VDZ, KOD | ANC, WAS, KOD |
| FAI | NEN, VDZ | NEN |
| NEN | WAS, FAI, VDZ, NOM, BET | FAI, VDZ, NOM, BET |
| VDZ | ANC, WAS, KNI, FAI, NEN | NEN |
| NOM | NEN, UTQ, BET | NEN, UTQ, BET |
| BET | NEN, NOM | NEN, NOM |
| KET | PSG, PRU | PRU |

**Where geography doesn't allow two, and how the region is reached:**
- **Utqiaġvik:** only Nome. The Brooks Range blocks Nenana (67 mi). It also reaches Prudhoe Bay and Anaktuvuk Pass, and Prudhoe Bay reaches Wiseman over Atigun.
- **Kodiak:** only Kenai, over the ferry. Shelikof Strait has no crossing.
- **Dillingham:** none. Bethel lies behind 40 mi of mountains (the Ahklun Mountains, from memory), Kenai behind the Alaska Range and Lower Cook Inlet, and Unalaska across the Bering Sea. The region is reached through King Salmon and Katmai (to Kenai in Gentle), Aniak (Bethel's region, Gentle) and King Cove.
- **Unalaska:** none. It is an island: only the ferry from King Cove, in both modes.
- **Juneau, Petersburg and Sitka in Tough:**
  - Juneau reaches Petersburg directly and Ketchikan through Wrangell.
  - Juneau–Haines crosses 39 mi of the Coast Mountains, and there is no road there either. Haines and Skagway join Juneau's region to the Yukon instead.
  - Sitka is on Baranof Island's outer coast. Every line east crosses 19–26 mi of the island's mountains, so in Tough it is reached along the outer coast from Yakutat (and Yakutat from Cordova).
- **Fairbanks and Valdez in Tough:** one main-station neighbour each (Nenana). They reach the rest through towns: Fairbanks through Delta Junction and Talkeetna, Valdez through Chitina and the Denali towns.

### Levels (4)
1. **Anchorage & the Mat-Su** (ANC, WAS, KNI): 50 passengers, 10 crates of produce (Wasilla is farm, Anchorage metro), own 4 counties.
2. **The Railbelt** (FAI, NEN, VDZ): 140 passengers, connect ANC–FAI, own 7 counties. The connection runs through towns in Tough: Talkeetna, Cantwell and Denali Park.
3. **Kodiak, the Bush & the Aleutians** (KOD, DLG, UNA, BET, NOM, UTQ): 280 passengers, connect KNI–KOD (open in both modes), 20 containers. The ports are Anchorage, Valdez and Dutch Harbor; the farms are Wasilla, Palmer and Delta Junction.
4. **The Inside Passage** (JNU, KET, PSG, SIT): 450 passengers, connect KET–JNU, and one high-speed train. The connection goes through Wrangell in Tough; Petersburg–Juneau is direct.

### Biomes
- **Forest:** the 11 regions with boreal forest or the panhandle's rainforest, Kodiak included (its town and roads are in Sitka spruce, from memory). This follows the NT and Yukon rule of one region, one look, set by its towns.
- **Not listed** (plain land with hills and peaks, as Nunavut's tundra): the five regions of tundra north and west of the tree line, whose towns are all in it (well known). They are the North Slope, Nome-Northwest Arctic, Bethel-Kusilvak, Bristol Bay and the Aleutians.
- **No wooded or dry regions.**

### Checks
- `node tools/check-pack.js AK`: passed, 0 errors, 1 warning (Wrangell 0.3 mi off the outline, explained above).
- `node tools/check-pack.js`: All packs passed.
- `node tools/test-pack.js AK`: PASSED, 17 passed, 0 warnings, 0 failed.
- **Screenshots:**
  - Every station sits on land. The Aleutians are drawn west of the peninsula, next to the rest of Alaska. The start's three stations are on the first camera.
  - The pass and ferry marks show near Anchorage.

### For the main agent
1. **(Fixed by the main agent: the stretch is back, see Bridges.) The map's Yukon River had a gap** from the Canadian border (64.8, -141.1) to Tanana (65.2, -152.0). The whole Yukon Flats section is missing from `terrain.js`'s rivers, so lines across it pay no river crossing, and the Dalton's Yukon River Bridge could not be listed. The Copper River line also stops about 5 mi above its delta. This is a `tools/build-terrain.js` matter.
2. **The northern panhandle in Tough** (Juneau, Petersburg, Wrangell, Hoonah, Gustavus) reaches the rest of the game only through Ketchikan and BC. It depends on Wrangell's nudged point (see Towns): with the downtown point it would be cut off in Tough.
3. **Haines–Haines Junction (the Haines Highway) is blocked in both modes** (46 mi of the Coast Mountains). Chilkat Pass is in BC, 18 mi from the line. Haines–Whitehorse is open instead.
4. **Kluane Lake blocks Tok–Haines Junction in Tough.** It is in Yukon's terrain; Northway–Whitehorse is the Tough route.
