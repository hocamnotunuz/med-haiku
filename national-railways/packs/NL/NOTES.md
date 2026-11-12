# Newfoundland and Labrador (NL) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied, giving 6 regions: `nl-division-no-1`, `nl-division-no-2-7`, `nl-division-no-3-4`, `nl-division-no-5-9`, `nl-division-no-6-8` and `nl-division-no-10-11`. The main agent has since fixed problem 1 in `make-raw.js`: Happy Valley-Goose Bay now has 8,040, and Cartwright, Trinity, Woody Point and both Seal Coves have their populations. Problem 6 (places in the sea) is settled in phase 2.

Populations come from `packs/NL/raw/counties.json` and `packs/NL/raw/places.json` (Statistics Canada, 2021 Census). The 11 divisions add up to 510,550. Where `places.json` has no figure, the number comes from the tables `tools/make-raw.js` reads, in their cached copies (`.terrain-cache/canada/st-98100002/` for municipalities, `st-98100011/` for population centres). Distances are straight lines between `places.json` points. Highways, ferries and the railway are marked "well known". A script checked each group's shared border in `map.js`.

Division 1 (St. John's, 271,878) is the only one over 50,000. All of the others are small, so each one joins a neighbour along a real road. There are no exceptions.

### Recommended (11 → 6 regions)

```
merge: [["Division No. 2", "Division No. 7"], ["Division No. 3", "Division No. 4"], ["Division No. 5", "Division No. 9"], ["Division No. 6", "Division No. 8"], ["Division No. 10", "Division No. 11"]]
bridges: none to add (the four already listed cover the Argentia, Port aux Basques and St. Barbe ferries)
names: none. The tool names numbered divisions after their biggest town and ignores `names` for them (build-map.js, "Region names and ids").
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 1 alone | Over 50k: the Avalon | St. John's (110,525; population centre 185,565) | 271,878 |
| 2 + 7 | The Eastern region on the Trans-Canada. The Burin Peninsula Highway (Route 210) leaves the TCH at Goobies, next to the D1/D2/D7 corner, and Route 230 runs from Clarenville to Bonavista (well known). The shared border is 87 km | Clarenville (6,704). Marystown (5,204) is 142 km away | 52,436 |
| 3 + 4 | The southwest: the TCH from the Port aux Basques ferry up the Codroy Valley to Bay St. George (well known). The shared border is 166 km | Stephenville (6,540; population centre 7,344), which is also the name the tool gives. Phase 2 could pick Channel-Port aux Basques (3,547), the ferry port, instead: it is 115 km further on and 173 km from Corner Brook, where Stephenville is only 61 km | 33,173 |
| 5 + 9 | Corner Brook and Deer Lake with the Northern Peninsula on the Viking Trail (Route 430), which runs from Deer Lake through Gros Morne to St. Anthony (well known). The shared border is 264 km | Corner Brook (19,333) | 55,129 |
| 6 + 8 | Central: the Exploits valley, Gander and Notre Dame Bay (Lewisporte is 55 km from Grand Falls-Windsor). It also fixes a split, because on the map Division 8 is two pieces that Division 6 separates at Botwood | Grand Falls-Windsor (13,853) | 71,279 |
| 10 + 11 | Labrador. Nunatsiavut (2,323) has no road and only one other land neighbour (Nord-du-Québec) | Happy Valley-Goose Bay (8,040 in the 98-10-0002 table; see problem 1) | 26,655 |

**Labrador West.** Labrador City (7,412) and Wabush (1,964) are 435 km from Happy Valley-Goose Bay. Together they are the biggest population centre in Labrador (9,011). I would keep the station at Happy Valley-Goose Bay for three reasons:
- It is the name the tool gives.
- It sits in the middle, 310 km from L'Anse-au-Clair, where the St. Barbe ferry and the island side come in.
- It is the region's service centre (well known).

Phase 2 should add Labrador City as a `towns` entry and note its links to Quebec: the QNS&L railway from Sept-Îles and Route 389 (both well known). Putting the station at Labrador City instead would favour the Quebec side, but the ferry side would then be 692 km away.

### Alternative (7 regions)

Keep Division 5 (Corner Brook, 40,396) and Division 9 (Northern Peninsula, 14,733) apart.
- Pro: the island's second city gets its own station. Gros Morne, L'Anse aux Meadows and the St. Barbe ferry get one too.
- Con: these are two exceptions, and Division 9 is only 30% of the line, with St. Anthony (2,180) as its station.

Also considered and set aside:
- `[3, 4, 5]` with Division 9 alone. It gives 6 regions and the whole TCH west coast in one region, but it still leaves a 15k exception.
- `[9, 10, 11]` across the Strait of Belle Isle. The tool refuses it: merges count only land borders, and the bridges are added afterwards.

### Problems found in the map and data

1. **Happy Valley-Goose Bay has no population in `places.json`.** The Geographical Names spelling "Happy Valley - Goose Bay" misses Statistics Canada's "Happy Valley-Goose Bay" (municipality 8,040, population centre 6,996). Cartwright ("Cartwright, Labrador", 439), Trinity ("Trinity (Trinity Bay)", 76), Woody Point (244), Rose Blanche-Harbour Le Cou (344), McIver's (575) and both Seal Coves are missed the same way.
2. **Gander is in Division 6**, not 8: its census subdivision code is 1006009. Division 8's towns are Lewisporte, Springdale, Twillingate, Fogo Island and Baie Verte.
3. **Division 8 is two pieces.** The pieces are Lewisporte with Gander Bay, and Springdale with Baie Verte. Division 6 reaches the coast between them at Botwood and Norris Arm, and the data puts both of those towns in Division 6, so the split looks real. The 6 + 8 merge removes it.
4. **Division 11 is three pieces:** the Nain and Torngat block, the Hopedale and Makkovik block, and Rigolet. Division 10 land separates them, and Division 10 has a small patch at Voisey's Bay inside Division 11. All of this disappears in the 10 + 11 merge.
5. **Division 3 is cut oddly.** It runs 340 km along a south coast with no coastal road. Its west end (Port aux Basques and Burgeo, by Route 480) looks to Stephenville. Its east end (Bay d'Espoir, Harbour Breton and Conne River) looks to Grand Falls-Windsor by Route 360 (well known). Its borders with Division 2 (Fortune Bay) and Division 7 (79 km, interior) have no roads, but they are harmless.
6. **Islands.** Fogo Island, Bell Island, New World Island and Twillingate, Random Island, Merasheen, Groais and Belle Isle are all drawn. The Change Islands and Ramea are under the tool's 25 km² cut, so their towns fall in water. Rigolet, Argentia (the ferry terminal) and Codroy also fall in the sea on the coarse coast. Phase 2 must nudge these onto land.
7. **The neighbours are right otherwise.** No place sits inside the wrong region: every place on land falls in its listed division, and the 345 that fall in the water have their listed division as the nearest outline. For later, the Fortune–Saint-Pierre ferry goes to France, which is not in the game.

## The pack (phase 2)

Everything here comes from `packs/NL/raw/` (Statistics Canada, 2021 Census; Natural Resources Canada's Geographical Names for places and parks). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` or `parks.json` points rounded to 2 decimals, except where a comment in `pack.js` says why one moved. Facts added by hand are marked "well known"; the few I'm less sure of are marked "from memory".

### Start

`start: ["nl-division-no-1", "nl-division-no-2-7"]`: St. John's and the Clarenville region. These are metro and coast, so the first track has riders.
- St. John's has only two neighbours: the Clarenville region on the island, and Cape Breton across the Argentia ferry. A third start region could only be Grand Falls-Windsor or Stephenville, through Clarenville. That would hand over half of a 6-region province at the start.
- The checker gives no warning for this start.
- The pack test laid St. John's–Clarenville (83 mi), bought Grand Falls-Windsor, and 2 passengers arrived in the first week.

### Main stations (6)

| Region | Station | Type, size | Why |
| --- | --- | --- | --- |
| St. John's (272k) | St. John's (STJ) | metro 2 | **Placement:** downtown on the harbour (47.56, -52.71), among the downtown localities in `places.json` (Fort Townshend 47.568, -52.711; Rabbit Town; The Battery). The raw point (47.48, -52.80) is the middle of the city's municipality, 10 km southwest. **Size:** 272k is size 2 by the guide (60,000–300,000), like Regina (277k) and Kingston (207k). **Port:** the Port of St. John's, the province's container port (well known). **Airport:** St. John's International, the province's main airport (well known) |
| Clarenville (52k) | Clarenville (CLV) | coast 1 | The service town on the Trans-Canada at Random Sound, Trinity Bay (well known). **Placement:** on the shore between the Shoal Harbour (48.183, -53.983) and Clarenville South (48.156, -53.972) localities. The raw point (48.19, -54.06) is 4 mi inland, the middle of the municipality. Marystown (5,204) is a town |
| Grand Falls-Windsor (71k) | Grand Falls-Windsor (GFW) | mountain 1 | The biggest town (13,853). It is the paper-mill town on the Exploits River in the forested interior (well known), so mountain, as Quebec types its boreal towns (Chibougamau). Gander (11,880) is a town |
| Corner Brook (55k) | Corner Brook (CBK) | metro 1 | The island's second city (19,333), the paper-mill city on the Bay of Islands (well known). Metro like Nova Scotia's New Glasgow (population centre 19,316, metro 1) |
| Stephenville (33k) | Stephenville (SVL) | coast 1 | The biggest town (6,540; population centre 7,344) and the name the tool gives. It is on Bay St. George, at the old Harmon air base and its port (well known). Port aux Basques is a town (see phase 1) |
| Happy Valley-Goose Bay (27k) | Happy Valley-Goose Bay (HVG) | mountain 1 | Labrador's biggest municipality (8,040) and its service town, at the head of Lake Melville in the boreal forest (well known). Mountain like Quebec's northern towns. Labrador City is a town (see phase 1, "Labrador West") |

Types alternate along the main lines, so neighbouring stations exchange riders in "A type of place":
- **Metro–coast:** St. John's–Clarenville, Corner Brook–Stephenville.
- **Coast–mountain:** Clarenville–Grand Falls-Windsor, Stephenville–Grand Falls-Windsor.
- **Mountain–metro:** Grand Falls-Windsor–Corner Brook, Happy Valley-Goose Bay–Corner Brook.
- **Coast–coast:** Clarenville–Stephenville is the one pair that shares a type. Their border is the roadless interior.

Station spacing (straight lines):
- St. John's–Clarenville 72 mi, Clarenville–Grand Falls-Windsor 95 mi.
- Grand Falls-Windsor–Corner Brook 105 mi, Corner Brook–Stephenville 38 mi.
- Corner Brook–Happy Valley-Goose Bay 322 mi.

### Towns (31: 21 towns and 10 scenic places)

That is 3.5 towns per region, or 1.9 per census division, plus the scenic places. Each region is two divisions and covers long distances: Corner Brook's runs 430 km up the Viking Trail, and Labrador is bigger than the island. Every place is at least 4 miles from every other, inside its own region and on the map's land. The checker gives 0 warnings.

| Region | Towns | Scenic |
| --- | --- | --- |
| St. John's | Conception Bay South (metro 2; 27,168, the biggest town after St. John's, 14 mi away; size 2 like Nova Scotia's Bedford); Bay Roberts (coast; population centre 6,897, the biggest of the Conception Bay North towns); Placentia (coast; 3,289), 3 mi from the Argentia ferry terminal, whose point is in the sea on the map, by the Castle Hill historic site (`parks.json`) | Cape Spear: North America's most easterly point and its lighthouse (well known). Its park point is off the map's land, and the nearest land point was 3.9 mi from the station, so it sits 1.6 km southwest, 4.5 mi from the station. Mistaken Point: the UNESCO fossil site (well known), moved 1 km north onto the land |
| Clarenville | Marystown (coast; 5,204): the Burin Peninsula's biggest town, with its shipyard (from memory) | Bonavista: Cape Bonavista, John Cabot's traditional 1497 landfall, and the Ryan Premises historic site (well known; `parks.json`). Trinity: the historic outport (well known; 76 people). Terra Nova National Park (mountain, as Nova Scotia types Kejimkujik), at its park point |
| Grand Falls-Windsor | Gander (metro 1; 11,880; population centre 9,918): the airport town of transatlantic fame (well known); its airport is not listed, like other small airports in the game. Fogo Island (coast; 2,117), reached by the Farewell ferry (well known). Springdale (coast; 2,965), the Green Bay town. Baie Verte (mountain; 1,311): the peninsula's mining town (from memory) | Twillingate: the iceberg town (well known), reached by the causeways of Route 340, the Road to the Isles (well known) |
| Stephenville | Port aux Basques (coast; 3,547): where the North Sydney ferry lands (well known). Codroy Valley (farm): the island's farm valley (well known), at Doyles (47.83, -59.19), because the Codroy point is in the sea on the map. Burgeo (coast; 1,176): at the end of Route 480 (well known). Harbour Breton (coast; 1,477): the biggest town of the region's east end | — |
| Corner Brook | Deer Lake (mountain; 4,864): where the Viking Trail leaves the Trans-Canada, with the west coast's airport (well known), under the Long Range. Port au Choix (coast; 742): halfway up the Viking Trail. St. Barbe (coast): the Blanc-Sablon ferry port (well known). St. Anthony (coast; 2,180): the Grenfell mission's hospital town (well known) | Gros Morne National Park (mountain): the UNESCO fjords and Tablelands (well known), at its park point. L'Anse aux Meadows: the UNESCO Norse site (well known), moved 1 km south onto the land |
| Happy Valley-Goose Bay | Labrador City (mountain; 7,412; population centre 9,011): the iron-mining town (well known), 13 mi from Quebec's Fermont. Wabush (6 mi away) is left out. Churchill Falls (mountain): the hydro company town (well known). Cartwright (coast; 439): the Sandwich Bay town on a branch of the Trans-Labrador Highway (from memory). L'Anse-au-Clair (coast; 219): the first Labrador town on the road from the Blanc-Sablon ferry (well known). Nain (coast; 847): Nunatsiavut's biggest community, with no road (well known) | Red Bay: the UNESCO Basque whaling station (well known). Torngat Mountains National Park (mountain): see below |

**Torngat Mountains.** The park's point (59.44, -63.70) sits on the coast behind 22 miles of mountains. From there, Nain–Torngat and Kuujjuaq–Torngat were blocked in Tough. The town sits instead on the north shore of Saglek Fjord (58.55, -63.20), the park's southern edge (from memory). From there both links are open in both modes, with tunnels of up to 11 mi.

**Left out:**
- Lewisporte (3,288): 28–34 mi from Gander, Grand Falls-Windsor and Twillingate.
- Paradise and Mount Pearl: within 6 mi of St. John's.
- Wabush.
- Signal Hill: 1 mi from the station.
- L'Anse au Loup: L'Anse-au-Clair is the town where the ferry road arrives.
- Ramea, the Change Islands, Rigolet and Argentia: their points are in the sea on the map.

### Water

**What the map has:**
- **Lakes in `terrain.js`:** Grand Lake (with Glover Island as land), Deer Lake, Gander Lake, Labrador's Smallwood Reservoir, Ossokmanuan Lake and others.
- **Rivers:** the Exploits, Gander, Humber, Churchill and others.
- **Everything else is sea outside the land.** Plain sea means track follows the shore.

**Bays (2).** Drawn with a script that maps land, regions, places and the other packs' bays on a grid. Land inside a ring stays land.

1. **The Cabot Strait.**
   - **Extent:** the sea between Newfoundland and Cape Breton, and the open Atlantic south of the island's south coast, out to 45.2°N and 55°W. It meets Quebec's "Gulf of St. Lawrence" ring at 47.8°N off the Codroy Valley.
   - **Margins:** it stays about 7 km off Cape Ray and the south coast (Port aux Basques, Burgeo, Harbour Breton), 8–10 km off Cape Breton's east coast, and about 7 km off Cape North. It crosses the mouth of Fortune Bay at the Burin Peninsula's tip.
   - **Why:** Newfoundland is reached from Nova Scotia only by the two Marine Atlantic ferries (well known). Without the ring, Sydney–Stephenville and Sydney–St. John's "followed the shore" across 110–250 mi of open sea.
2. **The Strait of Belle Isle.**
   - **Extent:** between the Northern Peninsula and the Labrador Straits, from Quebec's gulf ring (50.88°N) and the Lower North Shore, out past Cape Bauld and Chateau Bay to 54.9°W.
   - **Margins:** it stays 4–9 km off L'Anse-au-Clair, Red Bay, St. Barbe, L'Anse aux Meadows and Quebec's shore by Blanc-Sablon.
   - **Why:** the island's only link to Labrador is the St. Barbe–Blanc-Sablon ferry (well known).

**Left as shore water.** Conception, Trinity, Placentia, Fortune, Bonavista and Notre Dame Bays stay plain sea, so lines follow their shores as the roads go round them. This is like Nova Scotia's Bras d'Or. It keeps Twillingate (causeways) and Fogo Island (ferry) reachable. A Notre Dame Bay ring would have had to thread the islands, and nothing on the map needs it.

**Ferries (4 routes, 7 points).** The checker allows a ferry point only within 10 miles of Newfoundland's land, so there are no mid-strait points. Each route's points sit where its lines leave the bay near Newfoundland. A line uses a ferry if its stretch of bay passes within 4 mi (Gentle) or 3 mi (Tough) of a point. Positions are approximate.

| Ferry | Points | Use |
| --- | --- | --- |
| North Sydney–Port aux Basques, all year (well known) | 47.49, -59.24: where the route leaves the bay, 9 mi off Cape Ray. Nova Scotia lists one off North Sydney (46.27, -60.18), which lies outside this bay | Sydney–Stephenville, Sydney, North Sydney and Glace Bay to Port aux Basques, and Port aux Basques to Cape Breton Highlands, in both modes (Port aux Basques–Chéticamp in Gentle only). Codroy, Burgeo and Corner Brook to Sydney stay blocked |
| North Sydney–Argentia, summer (well known; the route has to round the Burin Peninsula to reach Placentia Bay) | 46.97 and 46.88, -56.08: off the peninsula's southwest tip, where lines from Cape Breton to the Avalon leave the bay. 47.28, -54.03 off Argentia is in shore water, so it is a marker | St. John's–Sydney (the main stations' link) and St. John's–North Sydney/Glace Bay; Placentia, Conception Bay South, Bay Roberts and Marystown to Sydney. Harbour Breton, Burgeo, Mistaken Point and Halifax to Newfoundland stay blocked |
| St. Barbe–Blanc-Sablon (well known) | 51.26, -56.87 and 51.33, -56.97, on the route 5–10 mi out from St. Barbe | St. Barbe–L'Anse-au-Clair in both modes, the island's link to Labrador. Port au Choix–L'Anse-au-Clair and St. Barbe, St. Anthony and L'Anse aux Meadows to Red Bay stay blocked |
| Farewell–Fogo Island (well known) | 49.59, -54.38 | A marker: Notre Dame Bay is shore water |

**Not listed:**
- **No river bridges.** I'm not sure enough of where the Trans-Canada crosses the Exploits, Gander and Humber rivers. Lines over them pay the new-bridge price.
- **No crossing over Grand Lake.** There is none in reality, and the Trans-Canada goes round it (well known).

**Other packs are unchanged.** I compared the links of every Nova Scotia, New Brunswick, Prince Edward Island and Quebec place east of 67.5°W and north of 45.3°N to their 3 nearest places, with and without these bays. All 148 links give the same result in both modes.

### Passes: none

The terrain grid has mountains on the Long Range (Gros Morne and the Northern Peninsula), the Lewis Hills, around Labrador City and in the Torngats. No tested line needs more than an 11 mi tunnel:
- Gros Morne–Corner Brook: 3.5 and 4 mi.
- Port au Choix–Gros Morne: 4 mi.
- Labrador City–Sept-Îles: 6.5 mi.
- Torngat–Kuujjuaq: 11 mi.

That is under the 15 mi Tough limit. I know of no well-known named pass on the Trans-Canada or the Viking Trail, so I listed none.

### How the map plays

Checked with `NR.blockedReason` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`.

**Main stations: every station to its neighbours' main stations, Sydney, Sept-Îles and Chibougamau included.**

| Station | Gentle | Tough |
| --- | --- | --- |
| St. John's | Clarenville, Sydney | Clarenville, Sydney |
| Clarenville | St. John's, Stephenville, Grand Falls-Windsor | Same 3 |
| Grand Falls-Windsor | Clarenville, Stephenville, Corner Brook | Clarenville, Stephenville |
| Corner Brook | Stephenville, Grand Falls-Windsor | Stephenville |
| Stephenville | Clarenville, Corner Brook, Grand Falls-Windsor, Sydney | Same 4 |
| Happy Valley-Goose Bay | Sept-Îles, Chibougamau | Sept-Îles |

Fewer than two in Tough, where geography allows no more:
- **Grand Falls-Windsor–Corner Brook crosses 3.5–4 mi of Grand Lake.** That is over the Tough 2 mi limit, and there is no crossing. In Tough the way is Grand Falls-Windsor–Stephenville–Corner Brook. Deer Lake–Grand Falls-Windsor and Deer Lake–Springdale cross Grand Lake too.
- **Corner Brook–Happy Valley-Goose Bay crosses 86 mi of the Quebec gulf bay,** and Corner Brook–Sept-Îles crosses 185 mi of it. Labrador is reached through the towns: St. Barbe–L'Anse-au-Clair by the ferry, then L'Anse-au-Clair–Red Bay–Cartwright–Happy Valley-Goose Bay. Each link is open in both modes.
- **Happy Valley-Goose Bay–Chibougamau (641 mi) crosses 4.5 mi of Réservoir Manicouagan.**

**Towns: every town to its 3 nearest places (68 links).**
- 59 are open in both modes, 3 in Gentle only and 6 in neither.
- **Every town has an open link in both modes.**
- **Gentle only:** Deer Lake–Springdale (Grand Lake), and Labrador City–Churchill Falls and Churchill Falls–Fermont (2.5–3 mi of Ossokmanuan Lake).
- **Neither:**
  - Port au Choix–L'Anse-au-Clair, and St. Barbe, St. Anthony and L'Anse aux Meadows to Red Bay: the Strait of Belle Isle, away from the ferry.
  - Nain and Torngat to Churchill Falls: the Smallwood Reservoir.
- **Labrador City** reaches Fermont (13 mi), Sept-Îles (191 mi, along the railway) and Happy Valley-Goose Bay (270 mi) in both modes.

### Levels (4)

| Level | Area (stations) | Goals |
| --- | --- | --- |
| St. John's & the East | east: STJ, CLV (the start) | 50 passengers; connect St. John's–Clarenville |
| Central Newfoundland | central: GFW | 140 passengers; own 3 counties; connect St. John's–Grand Falls-Windsor |
| The West Coast | west: CBK, SVL | 280 passengers; connect St. John's–Corner Brook (open in Tough through Stephenville); a high-speed train |
| Labrador | labrador: HVG | 450 passengers; own all 6 counties; 30 trucks |

Each level's regions touch the earlier ones:
- Grand Falls-Windsor touches Clarenville.
- Stephenville touches Clarenville, and Corner Brook touches Stephenville and Grand Falls-Windsor.
- Labrador touches Corner Brook through the St. Barbe ferry.

The goals follow Nova Scotia's and Prince Edward Island's.
- **No containers goal:** St. John's port has containers, but the only farm place is the Codroy Valley town, at the other end of the island, and there is no desert.
- **Trucks are possible:** they run from the mountain places (Grand Falls-Windsor, Happy Valley-Goose Bay, Deer Lake, Labrador City and others) to the metros (St. John's, Corner Brook, Gander, Conception Bay South).

### Biomes

- **forest:** Labrador and the Grand Falls-Windsor region: the boreal forest of the Labrador plateau and the central Newfoundland interior (well known).
- **wooded:** the Clarenville, Stephenville and Corner Brook regions. These are forest under barren hills: the Burin and Bonavista barrens, the Anguille and Long Range Mountains and the Northern Peninsula.
- **not listed:** St. John's. The Avalon is open barrens and towns.

### For the main agent

1. **The gap at the Quebec–Labrador border is closed.** Quebec's notes (item 2) found open "sea" at 51.8°N 65°W and 52.0°N 63°W. With this map loaded, those points are Labrador land.
2. **Mid-strait ferry points can't be listed.** The checker refuses a ferry point more than 10 mi from the pack's own land, so a strait 100 km wide gets points only near each shore. Nova Scotia's North Sydney point lies outside the Cabot Strait ring, 18 mi from where lines enter it, so it changes nothing here.
3. **Quebec has no point for the Blanc-Sablon ferry,** and none is needed: the two St. Barbe points carry the crossing.
4. **For later:**
   - The Fortune–Saint-Pierre ferry goes to France, which is not in the game.
   - Bell Island (Portugal Cove ferry) has no town. Its tickle is shore water anyway.

### Checks

- `node tools/check-pack.js NL`: `NL: passed (6 stations, 31 towns, 0 city maps, 0 passes, 7 bridges), 0 errors, 0 warnings`.
- `node tools/check-pack.js`: `All packs passed`.
  - Nova Scotia shows 2 warnings (Chester and Canso just outside their county outlines). They are about Nova Scotia's own towns on the rebuilt map, not this pack.
- `node tools/test-pack.js NL`: `PASSED: 17 passed, 0 warnings, 0 failed`. It laid St. John's–Clarenville, bought Grand Falls-Windsor, and 2 passengers arrived in the first week.
- **Screenshots** (arcade light, classic light, levels): all looked right.
  - The first camera shows the whole province with Quebec under cloud.
  - St. John's sits on its harbour, Clarenville on Random Sound and Grand Falls-Windsor inland.
  - The Avalon is open green, and the forest covers the rest.
