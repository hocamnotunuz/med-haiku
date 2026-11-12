# Northwest Territories (NT) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied, giving 4 regions: `nt-region-3-6` (Yellowknife), `nt-region-5` (Hay River), `nt-region-1` (Inuvik) and `nt-region-2-4` (Fort Simpson). The main agent has since fixed problem 4 in `make-raw.js`: hamlets are fetched, and `places.json` now has 32 places with populations. Problem 5 (places in water) is settled in phase 2.

**Sources.** Populations come from `packs/NT/raw/counties.json` and `packs/NT/raw/places.json` (Statistics Canada, 2021 Census). The six divisions add up to 41,070. Only 6 places in `places.json` have a population, so the other community figures come from the table `tools/make-raw.js` reads, in its cached copy (`.terrain-cache/canada/st-98100002/98100002.csv`, 98-10-0002). Its subdivision totals match `counties.json` for every division. Distances are straight lines between `places.json` points. Borders and enclaves were checked with a script against `map.js`. Highways, winter roads, ferries and the bridge are marked "well known".

The owner wants a few huge regions. Every division is under 50,000, so the review goes by geography and travel. Two divisions are reached only through a neighbour: Region 3 (Tłı̨chǫ) and Region 2 (Sahtu). They merge. The four divisions with their own main town and road stay apart: Yellowknife, Hay River, Inuvik and Fort Simpson.

### Recommended (6 → 4 regions)

```
merge: [["Region 3", "Region 6"], ["Region 2", "Region 4"]]
bridges: none
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 3 + 6 | Region 3 is an enclave. All 1,205 km of its border is with Region 6, which is its only neighbour. It has no town of its own on a through road: Behchokǫ̀ (1,746) is on Highway 3, 95 km from Yellowknife, and Highway 3 is Yellowknife's only road south (well known). | Yellowknife (20,340) | 23,455 |
| 2 + 4 | Sahtu has no all-season road. Its only road is the Mackenzie Valley winter road from Wrigley (Region 4) to Tulita, Norman Wells and Fort Good Hope (well known). The Mackenzie Valley Highway is planned along the same line as the extension of Highway 1. The two divisions share a 577 km border. | Fort Simpson (1,100) | 5,131 |
| 5 alone | The South Slave, on Highways 1, 2, 5 and 6 (well known). It is the end of the railway from Alberta (well known). | Hay River (3,169) | 6,279 |
| 1 alone | The Beaufort Delta and the Arctic islands. Its road is the Dempster from Yukon, which continues as the Inuvik–Tuktoyaktuk Highway (well known). | Inuvik (3,137) | 6,205 |

The tool should name the merged regions "Yellowknife area (Region 3 & 6)" and "Fort Simpson area (Region 2 & 4)". Fort Simpson (1,100) is bigger than Norman Wells (673).

**Bridges.** None are needed, because every crossing lies inside one region:
- The Deh Cho Bridge: both ends are in Region 4.
- The Peel River and Tsiigehtchic ferries on the Dempster: Region 1.
- The Liard and N'Dulee ferries near Fort Simpson: Region 4.

There is no ferry across Great Slave Lake, and Regions 5 and 6 already share a border.

### Alternative (5 regions)

Keep Region 2 (Sahtu) alone, with Norman Wells (673) as its station.
- Pro: Norman Wells sits halfway along the Mackenzie: it is 466 km from Fort Simpson and 456 km from Inuvik. Great Bear Lake would get its own region.
- Con: the region would have 2,259 people and only a winter road.

Also considered and set aside: Region 2 + Region 1. No road links Sahtu and Inuvik. Fort Good Hope is 259 km from Tsiigehtchic.

### Stations by division

| Division | Station | Population |
| --- | --- | --- |
| Region 1 | Inuvik | 3,137 |
| Region 2 | Norman Wells | 673 |
| Region 3 | Behchokǫ̀ | 1,746 |
| Region 4 | Fort Simpson | 1,100 |
| Region 5 | Hay River | 3,169 |
| Region 6 | Yellowknife | 20,340 |

Other communities to use as towns. None of them has a population in `places.json`; the figures are from 98-10-0002.
- **Region 1:** Tuktoyaktuk 937, Fort McPherson 647, Aklavik 536, Ulukhaktok 408, Paulatuk 298, Tsiigehtchic 138, Sachs Harbour 104.
- **Region 2:** Délı̨nę 573, Fort Good Hope 507, Tulita 396, Colville Lake 110.
- **Region 3:** Whatì 543, Gamètì 252, Wekweètì 109.
- **Region 4:** Fort Providence 618, Fort Liard 468, Wrigley 117.
- **Region 5:** Fort Smith 2,248 (this one is in `places.json`), Fort Resolution 412, Łutselk'e 333, Enterprise 75.
- **Region 6:** Dettah 192.

### Problems found in the map and data

1. **Region 6's hole is Region 3.** The hole has Region 3's area and outline. It is the census geography's own enclave: Region 3, Unorganized lies inside Region 6, Unorganized. On the map, strips of Region 6 keep Region 3 26 km from Region 2 and 63 km from Region 4. The 3 + 6 merge removes it.
2. **Region 1's hole is a lake.** It is about 11 km² at 68.92°N, 132.62°W. The `land` array has the same hole, so it is water, not an enclave. It is harmless.
3. **The islands are drawn and belong to Region 1, as they should.** The drawn pieces are:
   - all of Banks Island (Sachs Harbour);
   - the west of Victoria Island (Ulukhaktok), cut at about 110°W;
   - Prince Patrick, Eglinton, Emerald and Brock islands;
   - the western parts of Melville, Mackenzie King and Borden islands.

   No bridge or ferry reaches them, so they are not a problem.
4. **Many communities are missing from `places.json` or have no population.** `make-raw.js` gives a municipality's population only to cities, towns and villages. NT hamlets and charter communities are "community" or "locality" in Geographical Names.
   - These are missing altogether: Tuktoyaktuk, Paulatuk, Sachs Harbour, Ulukhaktok, Enterprise, Fort McPherson, Tsiigehtchic, Fort Providence, Fort Liard, Fort Resolution and Whatì.
   - Some of these appear only as band names: Teetl'it Gwich'in (Fort McPherson), Gwichya Gwich'in (Tsiigehtchic), Deh Gáh Got'ie (Fort Providence), Acho Dene Koe (Fort Liard), Deninu K'ue (Fort Resolution) and Wha Ti (Whatì).
   - Behchokǫ̀ appears as Rae, Edzo and Dog Rib Rae.
   - Spelling mismatches lose some figures: Délı̨nę against StatCan's "Déline", and Łutselk'e against "Lutselk'e".
5. **Some points fall in water.**
   - At sea, on the coarse coast: Paulatuk (at its usual coordinates) and Mould Bay.
   - Flagged `offMap`: Kittigazuit, Whitefish Station and Fort Collinson.
   - Inside lake outlines in `terrain.js`: Rae, Whatì, Gamètì, Délı̨nę (Great Bear Lake) and Łutselk'e (Great Slave Lake).

   Phase 2 must nudge any of these that are used onto land. The four main stations are on land.
6. **The neighbours are right.** All the links into Yukon, British Columbia, Alberta and Saskatchewan are real borders:
   - Region 4 to Yukon: the Nahanni Range Road to Tungsten (well known).
   - Region 2 to Yukon: the Canol Road.

   Nunavut is missing for now. It borders Regions 1, 5 and 6.

   The Mackenzie Highway enters at the Region 4/5 corner on the 60th parallel (116.98°W). Alexandra Falls is in Region 4 and Enterprise in Region 5. This is fine.

## The pack (phase 2)

Everything here comes from `packs/NT/raw/` (Statistics Canada, 2021 Census; Natural Resources Canada's Geographical Names for places and parks). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` or `parks.json` points rounded to 2 decimals, except where a comment in `pack.js` (and the tables below) says why one moved. Facts added by hand are marked "well known"; the few I'm less sure of are marked "from memory". Reachability was checked with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough, loading the game as `tools/check-pack.js` does plus `js/geography.js`, with every pack's map.

### Start

`start: ["nt-region-2-4", "nt-region-3-6", "nt-region-5"]`: Yellowknife's region and both regions touching it. Only Inuvik's region is left to buy.

- **Types.** Yellowknife is metro, Fort Simpson mountain and Hay River coast: three types.
- **Yellowknife can't be on the first line.** Great Slave Lake's North Arm lies between Yellowknife and both other start stations:
  - Yellowknife–Fort Simpson crosses 17 mi of it, and Yellowknife–Hay River 67 mi. Both are blocked in both modes.
  - The real Highway 3 goes round the North Arm through Behchokǫ̀ (well known), and so does the game. Yellowknife–Behchokǫ̀ and Behchokǫ̀–Fort Simpson are open in both modes. Behchokǫ̀ is 59 mi from Yellowknife, so it is among the likeliest first towns (towns near the network come first).
  - The first line is therefore Fort Simpson–Hay River: 198 mi (228 mi of track), open in both modes. The pack test lays it.
- **Why Fort Simpson's region is listed first.** The game's first-track hint (`js/draw.js`) and its toast start from the first start county's station and point to its nearest station. From Yellowknife that would be Hay River, across the lake (blocked). From Fort Simpson it is Hay River, which is open. The order changes nothing else: the start counties still join up.
- **Considered and set aside:**
  - Yellowknife's region alone. The game would open its nearest town of another type with it, the Ingraham Trail. But the brief asks for the neighbours too.
  - Yellowknife and Fort Simpson only (Hay River in level 2). Their only pair is blocked, so the player couldn't build at the start, and the test would fail.

### Main stations

| Region | Station | Type, size | Why |
| --- | --- | --- | --- |
| Yellowknife (3 & 6), 23k | Yellowknife (YK) | metro 1 | **The capital and only city:** 20,340 of the region's 23,455. It is at the end of Highway 3 on the North Arm (well known). **Type:** metro, like Whitehorse and Thompson. **Size:** 23k is size 1 by the guide. **Placement:** the raw point (62.4536, -114.37) is downtown |
| Fort Simpson (2 & 4), 5k | Fort Simpson (FSM) | mountain 1 | **The biggest town in the merged region:** 1,100, ahead of Norman Wells' 673. It sits on its island where the Liard meets the Mackenzie, on Highway 1, and is the gateway to Nahanni (well known). **Type:** mountain, the game's type for forested country, as AB, BC and QC type their northern towns. **Placement:** the raw point (61.8609, -121.3527) is on the townsite |
| Hay River (5), 6k | Hay River (HAY) | coast 1 | **The biggest town in its region:** 3,169, ahead of Fort Smith's 2,248. It is "the Hub of the North": the railway from Alberta (CN's Great Slave Lake Railway) ends here and the Mackenzie barges start here (well known). **Type:** coast, a harbour on Great Slave Lake, like Gimli and Thunder Bay. **Placement:** the raw point (60.8097, -115.7898) |
| Inuvik (1), 6k | Inuvik (INU) | mountain 1 | **The biggest town in its region:** 3,137. It is the Beaufort Delta's town on the East Channel, at the end of the Dempster (well known). **Type:** mountain, the delta's spruce at the treeline, like Happy Valley-Goose Bay. Its riders go to Yellowknife, Tuktoyaktuk and Paulatuk. **Placement:** the raw point (68.3609, -133.7297) |

- **Airports: none.** Yellowknife Airport is the territory's hub. From memory, it carries roughly half a million passengers a year or fewer:
  - That is below the bar the other packs use. Greater Moncton (about 0.7 million) is the smallest airport in the game.
  - It is the same call as Whitehorse (YT) and Charlottetown (PE).
  - If the bar becomes "each province's or territory's main airport", add `airport: "Yellowknife Airport"`.
- **Ports: none.** Hay River's harbour is the Mackenzie barge base, and Tuktoyaktuk gets the sealift. Neither is a container seaport.
- **IDs.** YK, FSM, HAY and INU are unused in every other pack. INV is Inverness (NS), so Inuvik is INU.

### Towns (18: 14 towns and 4 scenic places)

All are size 1. Each is inside its region, on the map's land and outside every lake outline. Each is at least 4 mi from every other place: the closest pair is Ingraham Trail–Yellowknife, 23.5 mi. The checker gives 0 warnings. Populations are from `places.json` (2021).

| ID | Place | Region | Point | Pop. | Type | Why, and placement |
| --- | --- | --- | --- | --- | --- | --- |
| BHK | Behchokǫ̀ | 3 & 6 | 62.84, -116.02 | 1,746 | mountain | The Tłı̨chǫ's biggest community (Rae and Edzo). Highway 3 crosses Frank Channel here on its way round the North Arm (well known), so it is Yellowknife's link west and south. **Moved:** the raw point (Rae, 62.8273, -116.0582) is 0.6 mi inside the map's lake. The town sits 1.5 mi east, on the shore toward the highway. Edzo's point (62.78, -116.03) was the other choice, but it lies between two arms of the lake |
| WHT | Whatì | 3 & 6 | 63.14, -117.25 | 543 | mountain | The Tłı̨chǫ village on Lac la Martre, at the end of the all-season road from Highway 3, opened in 2021 (well known). **Moved** 0.6 mi east, out of the lake outline (the raw point was 0.1 mi inside) |
| ING | Ingraham Trail, **scenic** | 3 & 6 | 62.54, -113.66 | – | mountain | Highway 4 east of Yellowknife: Shield lakes, the aurora-viewing country, and Cameron Falls in Hidden Lake Territorial Park (well known; that the falls are inside this park is from memory). **Point:** Hidden Lake Territorial Park in `parks.json` |
| TWF | Twin Falls Gorge, **scenic** | 5 | 60.52, -116.22 | – | mountain | Alexandra and Louise falls on the Hay River, on the Mackenzie Highway (well known). **Point:** Twin Falls Gorge Territorial Park in `parks.json`. Enterprise (75), the Highway 1/2 junction, is 3.4 mi away, under the checker's spacing, so the park stands for both |
| FSH | Fort Smith, **scenic** | 5 | 60.01, -111.88 | 2,248 | mountain | The region's second town, on the Slave River's rapids at the Alberta border. It is the headquarters and gateway of Wood Buffalo National Park (well known). The park's own point (`parks.json`, 60.27, -114.17) is 81 mi west, in its roadless middle. So the park sits at its gateway town, as Kluane sits at Haines Junction (YT). The town keeps its own name because it is the territory's fourth town |
| FRS | Fort Resolution | 5 | 61.17, -113.67 | 412 | coast | On Great Slave Lake's south shore by the Slave River delta, at the end of Highway 6 (well known). One of the territory's oldest trading posts (from memory) |
| FPV | Fort Providence | 2 & 4 | 61.36, -117.65 | 618 | mountain | On the Mackenzie at the Deh Cho Bridge, where Highway 3 to Yellowknife leaves Highway 1 (well known) |
| KAK | Kakisa | 2 & 4 | 60.94, -117.42 | 39 | mountain | The Ka'a'gee Tu village (`places.json` lists the First Nation at the same point) on Kakisa Lake, off Highway 1 between the Highway 3 junction and Enterprise. **Tiny, but needed:** in Tough, Fort Providence–Hay River and –Twin Falls cross the lake's west end and are blocked. Kakisa joins them in 30 + 56 mi; the only other way is round through Fort Simpson, 324 mi (see "How the map plays") |
| FLI | Fort Liard | 2 & 4 | 60.24, -123.48 | 468 | mountain | On the Liard Highway near the BC border, the road to Fort Nelson (well known) |
| NAH | Nahanni, **scenic** | 2 & 4 | 61.60, -125.69 | – | mountain | Nahanni National Park Reserve: the South Nahanni's canyons and Virginia Falls. It is one of the first UNESCO World Heritage Sites (1978), reached by floatplane from Fort Simpson (well known). **Point:** the park in `parks.json`, about 1.6 mi east of Virginia Falls (61.60, -125.74, from memory). The map has hills here |
| WRG | Wrigley | 2 & 4 | 63.23, -123.47 | 117 | mountain | Where the all-season Highway 1 ends and the winter road to the Sahtu begins (well known). It halves the 290 mi from Fort Simpson to Norman Wells |
| NWL | Norman Wells | 2 & 4 | 65.28, -126.83 | 673 | mountain | The Sahtu's biggest town: the Mackenzie oil field and the start of the Canol Road (well known) |
| DLN | Délı̨nę | 2 & 4 | 65.21, -123.42 | 573 | coast | On Great Bear Lake where the Great Bear River leaves it, the only community on the lake (well known), so coast. **Moved** 1.4 mi north, out of the lake outline (the raw point, 65.1889, -123.4225, was 0.9 mi inside) |
| FGH | Fort Good Hope | 2 & 4 | 66.26, -128.64 | 507 | mountain | The Sahtu's northern village on the Mackenzie, at the end of the winter road (well known) |
| TUK | Tuktoyaktuk, **scenic** | 1 | 69.44, -133.03 | 937 | coast | On the Arctic Ocean at the end of the Inuvik–Tuktoyaktuk Highway (opened 2017), with its pingos (well known). **Moved** 0.7 mi south: the raw point is just off the map's coast (`offMap`) |
| FMP | Fort McPherson | 1 | 67.44, -134.88 | 647 | mountain | The Gwich'in town on the Peel River, the Dempster's first community after the Yukon (well known) |
| AKL | Aklavik | 1 | 68.22, -135.01 | 536 | mountain | The delta's old town on the West Channel under the Richardson Mountains, reached by an ice road in winter (well known) |
| PAU | Paulatuk | 1 | 69.34, -124.07 | 298 | coast | The Inuvialuit hamlet on Darnley Bay, gateway to Tuktut Nogait National Park. It has no road (well known). **Moved** 0.7 mi south: the raw point is just off the map's coast (`offMap`) |

**Types.**
- Coast: the lake harbours and the Arctic coast (Hay River, Fort Resolution, Délı̨nę, Tuktoyaktuk, Paulatuk).
- Metro: Yellowknife.
- Mountain: everything else, the forested country.
- In "A type of place" every mountain town has riders to Yellowknife and to the coast places.

**Left out:**
- **The Arctic islands** (Banks and Victoria) and their hamlets: Sachs Harbour (104) and Ulukhaktok (408).
  - They have no road or ferry. The `land` outline draws the islands in the Inuvik region.
  - A line to Ulukhaktok would run 138 mi of open sea as "coast". I tested it: Paulatuk–Ulukhaktok is open in both modes, which the brief allows. Still, a train along the Amundsen Gulf for 138 mi seemed too much.
  - Paulatuk already stands for the Arctic coast.
  - If the main agent wants the islands, `{ id: "ULU", name: "Ulukhaktok", county: "nt-region-1", lat: 70.74, lon: -117.77, type: "coast", size: 1 }` is on land, and its open link is Paulatuk.
- **Tsiigehtchic (138), Tulita (396), Colville Lake (110), Enterprise (75), Gamètì (252), Wekweètì (109), Łutselk'e (333) and Dettah (192).** None is needed for reachability, and each region already has 3–8 places.
  - Gamètì's point is 1.3 mi inside a lake, and Łutselk'e's 0.6 mi inside Great Slave Lake.
  - Dettah is 3 mi from Yellowknife.
  - Thaidene Nene (Łutselk'e's park) has no road.
- **Mould Bay, Kittigazuit, Whitefish Station and Fort Collinson:** abandoned or seasonal localities, `offMap`.
- **Towns per region.** Hay River's region has 3 towns, Yellowknife's 3, Inuvik's 4 and the merged Fort Simpson region 8 (two divisions, 1,000 km of the Mackenzie). That makes 4.5 a region in all.

### Bridges and ferries (3), passes (0)

The map's rivers in the territory are Natural Earth's:
- the Mackenzie (from Fort Providence to the delta, and the delta channels);
- the Liard (from 60°N to Fort Simpson);
- the Slave;
- the Elk (in the far east).

The Hay, Peel and Arctic Red rivers are not drawn. Great Slave Lake's outline reaches right to Fort Providence: the Mackenzie's head (Beaver Lake) is part of it. Positions below are approximate, at the real crossing as far as the coarse map allows.

| Entry | Point | Source | What uses it |
| --- | --- | --- | --- |
| Deh Cho Bridge | 61.35, -117.68 | Highway 3's bridge over the Mackenzie at Fort Providence, opened 2012 (well known) | **Uses:** Fort Providence to Fort Simpson, Fort Liard, Nahanni, Fort Nelson and Watson Lake, both modes: their crossing of the map's Mackenzie, 1 mi from the hamlet, uses it. **Placement:** on the map's river, 1.2 mi west of the hamlet, where the river begins. The real bridge is close to the hamlet; that it is just upstream (east) is from memory. **Why not nearer the lake:** at 61.28, -117.54, right by the lake, Fort Providence–Twin Falls and Fort Providence–Enterprise counted as using it for 20–21 mi of Great Slave Lake (open in Tough at the real-bridge price). Here they don't |
| Frank Channel Bridge | 62.80, -116.05 | Highway 3's bridge over Frank Channel at Behchokǫ̀, between Marian Lake and the North Arm (well known in the territory; the Government of the NWT's Highway 3) | **Uses:** in Tough, Behchokǫ̀–Fort Providence (4 mi of the channel). It was blocked before the bridge, and it is the real Highway 3. Also Behchokǫ̀ to Fort Liard and Fort Nelson, and in Gentle Behchokǫ̀/Yellowknife to Whatì. **Checked:** Behchokǫ̀–Hay River, –Fort Resolution, –Kakisa and –Fort Chipewyan stay blocked |
| Liard River ferry (Fort Simpson) | 61.85, -121.29 | Highway 1's ferry over the Liard into Fort Simpson, an ice bridge in winter (well known; the boat's name, MV Lafferty, from memory) | **Uses:** lines leaving Fort Simpson east (to Hay River, Fort Providence, Behchokǫ̀, Whatì, Yellowknife, Fort Resolution, Ingraham Trail) cross the map's rivers at the confluence, 2 mi from the village, on it |

**Not added:**
- **A Hay River bridge.** The Hay River isn't on the map, so a point at the town would sit on Great Slave Lake's shore. **Tested:** with a bridge at 60.83, -115.77, Hay River–Ingraham Trail (112 mi of lake) and Hay River–Behchokǫ̀ (38 mi) opened in both modes.
- **The Dempster's ferries** (the Peel at Fort McPherson, the Mackenzie at Tsiigehtchic). The Peel isn't drawn. The map's Mackenzie runs 5 mi east of Tsiigehtchic, and no line in the pack crosses either river there. Fort McPherson–Tombstone has no river crossing on the map.
- **The N'Dulee ferry** (Highway 1 over the Mackenzie north of Fort Simpson). I don't know its position well enough, and rivers never block: Fort Simpson–Wrigley pays for a new river bridge.
- **Passes.** None is needed:
  - The Mackenzie valley is flat on the map.
  - The Dempster from Tombstone to Fort McPherson crosses the Richardson Mountains as hills, and uses Yukon's North Fork Pass (open in both modes).
  - No road crosses the Mackenzie Mountains. Lines into them stay as the map makes them: Nahanni is reached from Fort Liard, Fort Providence and Délı̨nę in Tough, and Norman Wells–Ross River (the Canol Road) is blocked.

### How the map plays

**Counts.** Of the 83 pairs of NT places within 250 mi, 29 are blocked in Gentle and 45 in Tough. Nearly all the blocks are lines across Great Slave Lake or Great Bear Lake, or into the Mackenzie Mountains. With links up to 200 mi, every NT place is in one network in both modes except Paulatuk, whose shortest open links are 244 and 290 mi.

**Open links** (other NT places and neighbours' towns within 300 mi; miles shown for links over 200):

| Place | Open in Gentle | Open in Tough |
| --- | --- | --- |
| YK | BHK, WHT, ING | BHK, ING |
| FSM | HAY, BHK, WHT, TWF, FPV, KAK, FLI, NAH, WRG, NWL (290), DLN (240), (BC) FNL (216), (YT) WAT (276) | HAY, BHK, WHT, FPV, KAK, FLI, WRG, NWL (290), FNL (216), WAT (276) |
| HAY | FSM, TWF, FSH, FPV, KAK, FLI (264), WRG (300), (AB) HLV, FCH (216), FNL (277) | FSM, TWF, FSH, KAK, FLI (264), HLV, FNL (277) |
| INU | NWL (283), FGH, TUK, FMP, AKL, PAU (250), (YT) TOM (294), OLD | NWL (283), TUK, FMP, AKL, TOM (294), OLD |
| BHK | YK, FSM, WHT, ING, FPV, KAK, WRG (235) | YK, FSM, ING, FPV, WRG (235) |
| WHT | YK, FSM, BHK, ING, FPV, KAK, FLI (286), NAH (290) | FSM, FPV, FLI (286) |
| ING | YK, BHK, WHT | YK, BHK |
| TWF | FSM, HAY, FSH, FPV, KAK, HLV, FNL (255) | HAY, FSH, KAK, HLV, FNL (255) |
| FSH | HAY, TWF, FRS, KAK, HLV (212), FCH, FMM (229) | HAY, TWF, FRS, KAK, HLV (212), FMM (229) |
| FRS | FSH, FCH | FSH |
| FPV | FSM, HAY, BHK, WHT, TWF, KAK, FLI (211), NAH (266), WRG (227), FNL (248) | FSM, BHK, WHT, KAK, NAH (266), WRG (227), FNL (248) |
| KAK | FSM, HAY, BHK, WHT, TWF, FSH, FPV, WRG (252), FNL (235) | FSM, HAY, TWF, FSH, FPV |
| FLI | FSM, HAY, WHT, FPV, NAH, WRG, HLV, FNL, WAT, FSJ | FSM, HAY, WHT, NAH, WRG, HLV, WAT, FSJ |
| NAH | FSM, WHT, FPV, FLI, WRG, NWL, DLN, FNL, WAT | FPV (266), FLI, DLN (259), FNL (218), WAT |
| WRG | FSM, HAY, BHK, FPV, KAK, FLI, NAH, NWL, DLN, FGH, WAT, ROS | FSM, BHK, FPV, FLI, NWL, FGH (259) |
| NWL | FSM, INU, NAH, WRG, DLN, FGH, FMP, PAU | FSM (290), INU (283), WRG, DLN, FGH, FMP (268), PAU (290) |
| DLN | FSM, NAH, WRG, NWL, FGH | NAH (259), NWL, FGH |
| FGH | INU, WRG, NWL, DLN, TUK, FMP, AKL, PAU | WRG (259), NWL, DLN, TUK (248), FMP, AKL (217), PAU (244) |
| TUK | INU, FGH, FMP, AKL, PAU, OLD | INU, FGH (248), FMP, AKL, OLD (215) |
| FMP | INU, NWL, FGH, TUK, AKL, TOM, OLD, DAW | INU, NWL (268), FGH, TUK, AKL, TOM (224), OLD |
| AKL | INU, FGH, TUK, FMP, PAU, TOM, OLD | INU, FGH (217), TUK, FMP, OLD |
| PAU | INU, NWL, FGH, TUK, AKL | NWL (290), FGH (244); also FMP (304) |

**Main stations.** The brief asks that each reach at least two neighbouring main stations where geography allows.

| Station | Neighbouring main stations it reaches directly | Where it doesn't, and the way round |
| --- | --- | --- |
| **Yellowknife** | none | The North Arm blocks Fort Simpson (17 mi of lake) and Hay River (67 mi) in both modes. The real road goes round through Behchokǫ̀, and so does the game: Yellowknife–Behchokǫ̀ (59 mi), then Behchokǫ̀–Fort Simpson (184 mi) or Behchokǫ̀–Fort Providence–Kakisa–Hay River. All are open in both modes; the Tough route to Fort Providence goes over the Frank Channel Bridge |
| **Hay River** | Fort Simpson (198 mi) in both modes; Slave Lake (AB, 384 mi) in Gentle | Fort McMurray (325 mi) is blocked by a 10 mi lake, and La Ronge has no road. The Mackenzie Highway works as a chain: Hay River–High Level (AB, 165 mi) and Twin Falls–High Level are open in both modes |
| **Fort Simpson** | Hay River in both modes; Inuvik (573 mi), Fort St. John (388 mi) and Whitehorse (461 mi) in Gentle | Yellowknife: see above |
| **Inuvik** | Fort Simpson (Gentle) | Whitehorse is blocked by 45 mi of mountains (no road goes straight). The Dempster works as a chain: Fort McPherson–Tombstone (YT) over North Fork Pass, and Inuvik–Old Crow, both open in both modes |

**The real roads, as chains:**
- **Mackenzie Highway.** High Level (AB)–Hay River or Twin Falls; then Kakisa–Fort Providence; then Behchokǫ̀–Yellowknife. Open in both modes.
- **Highway 1 west.** Fort Providence–Fort Simpson (Deh Cho Bridge) and Fort Simpson–Wrigley.
- **Liard Highway.** Fort Simpson–Fort Liard, and Fort Simpson–Fort Nelson (BC). In Tough, Fort Liard–Fort Nelson is blocked by Maxhamish Lake (4 mi), so Fort Simpson–Fort Nelson is the open one.
- **Highway 5.** Hay River–Fort Smith, and Fort Smith–Fort Resolution.
- **The winter road.** Wrigley–Norman Wells–Fort Good Hope, then Inuvik by Fort Good Hope–Fort McPherson or Norman Wells–Inuvik.
- **The Dempster and the ITH.** Tombstone–Fort McPherson–Inuvik–Tuktoyaktuk.
- **Fort Resolution** has one open link, Fort Smith (101 mi), in both modes. Hay River–Fort Resolution crosses 68 mi of the lake's south bay, while the real Highway 6 goes round by Highway 5.

**Neighbours unchanged.** No link between two AB, BC, YT or SK places (within 500 mi) uses an NT bridge in either mode. The nearest neighbour place to an NT bridge is High Level, 196 mi from the Deh Cho Bridge.

### Levels (3)

Level 1 opens with the start. The start already owns three of the four regions, so levels 1 and 2 share the area `great-slave` (a checklist, as Yukon's levels are), and level 3 opens Inuvik's region (`delta`).

| Level | Goals | Why |
| --- | --- | --- |
| Yellowknife & Great Slave Lake | 50 passengers; connect YK–FSM | Yellowknife onto the first line, round the North Arm through Behchokǫ̀ |
| The Mackenzie Highway | 140 passengers; connect YK–HAY; 25 trucks | Through Fort Providence and Kakisa, or through Fort Simpson. Trucks come from the mountain towns to Yellowknife |
| Down the Mackenzie to the Delta | 280 passengers; own 4 counties; connect YK–INU | Buy Inuvik's region and build down the valley: Fort Simpson–Wrigley–Norman Wells–Inuvik |

- **Targets** follow Yukon's and Alberta's first three levels.
- **Connect goals** run through towns. They are possible once Behchokǫ̀ appears for level 1, and Kakisa (Tough) or Wrigley and Norman Wells for the others.
- **No produce or container goals:** the territory has no farm places and no port.

### Biomes

`forest` for all four regions.
- **The south is boreal forest.** The Dehcho and Sahtu are spruce, with mountains in the west. Yellowknife's region is forest round the lake, with barren lands to the northeast.
- **Inuvik's region is mostly tundra by area.** The Arctic coast and the islands have no trees. But its towns and roads are in the delta's spruce and on the Peel.
- **One region takes one look,** and Yukon, Nord-du-Québec and Labrador (all with tundra in their north) are forest. "Wooded" (trees only on hills) would put trees on the treeless Richardson Mountains and none in the delta. "Not listed" would show farmland.

### Checks

- **`node tools/check-pack.js NT`:** `NT: passed (4 stations, 18 towns, 0 city maps, 0 passes, 3 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js NT`:** `PASSED: 17 passed, 1 warnings, 0 failed`.
  - The start is FSM, YK and HAY.
  - The test laid Fort Simpson–Hay River (228 mi, 1 train), bought Inuvik's region, and 5 passengers arrived in a week (budget MC125k).
  - The warning lists the two blocked start pairs (YK–HAY and FSM–YK, Great Slave Lake), as expected.
- **Screenshots.** I looked at `test-out/NT/` and at zoomed views with every town shown:
  - Hay River and Fort Resolution sit on the lake's south shore, Yellowknife on the North Arm, Fort Providence at the Mackenzie's head, and Behchokǫ̀ and Whatì north of the lake.
  - Nahanni is in the mountains west of Fort Simpson.
  - In the north, Inuvik and Aklavik are in the delta, Fort McPherson is on the Peel, and Tuktoyaktuk and Paulatuk are on the coast.
  - The phone's first-track hint points Fort Simpson → Hay River.

### For the main agent

1. **The first-track hint doesn't check geography.** In `js/draw.js` the hint, like the toast in `js/ui.js`, takes the first start station and its nearest station, even when that track is blocked. NT avoids this by listing Fort Simpson's region first. A core fix would point the hint at the nearest open pair of different types, as the pack test does.
2. **Manitoba is listed as a neighbour of the Northwest Territories** in `packs/index.js`. The test says "AB, BC, MB, SK, YT open once you own all of Northwest Territories". The two only meet at a point: 60°N, 102°W, where Manitoba, Saskatchewan, Nunavut and the NWT meet (well known). They share no border, and no county region of NT lists a Manitoba neighbour. So owning all of NT opening Manitoba is probably not wanted.
3. **The airport bar** (see Main stations): Yellowknife Airport is left out on the same bar as Whitehorse.
