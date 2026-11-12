# Alaska (AK) pack notes

## Region merges (phase 1)

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
