# Manitoba (MB) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied, giving 13 regions. The tool's rounding mismatch was fixed, so the four missing borders (problem 1 below) are now neighbours and need no `bridges`. Region names changed too: Division 13 is now "Selkirk area", and merged regions are named after the biggest town of their biggest member. That gives "Gimli area" (14 + 18 + 19), "Springfield area" (1 + 12) and "Killarney - Turtle Mountain area" (5 + 6).

Populations come from `packs/MB/raw/counties.json` and `packs/MB/raw/places.json` (Statistics Canada, 2021 Census). To predict the names the tool will give, the census subdivision populations come from table 98-10-0002 in the build cache, the same table the tool reads. Distances are straight lines between `places.json` points. Roads and railways are marked "well known" or "from memory". A script checked that every group shares a border in `neighbors`.

### Recommended (23 → 13 regions)

```
merge: [["Division No. 22", "Division No. 23"], ["Division No. 16", "Division No. 17", "Division No. 20"], ["Division No. 8", "Division No. 15"], ["Division No. 9", "Division No. 10"], ["Division No. 5", "Division No. 6"], ["Division No. 3", "Division No. 4"], ["Division No. 14", "Division No. 18", "Division No. 19"], ["Division No. 1", "Division No. 12"]]
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 22 + 23 | The far north looks to Thompson. Gillam is 207 km away, Lynn Lake 232 km and Churchill 403 km. The Hudson Bay Railway runs north to Gillam and Churchill (well known) | Thompson (13,035) | 46,916 |
| 16 + 17 + 20 | The Parkland around Dauphin. Roblin is 91 km away, Russell 96 km and Swan River 136 km. Hwy 10 runs from Dauphin to Swan River (well known) | Dauphin (8,368) | 41,575 |
| 8 + 15 | The Yellowhead corridor: Gladstone, then Neepawa, then Minnedosa (well known). Gladstone is 37 km from Neepawa | Neepawa (5,685) | 37,181 |
| 9 + 10 | The Trans-Canada corridor from Winnipeg's edge through Headingley and Elie to Portage (well known). Elie is 39 km from Portage | Portage la Prairie (13,270) | 37,252 |
| 5 + 6 | The southwest corner along the Saskatchewan and US borders: Virden, Melita (65 km away), Boissevain and Killarney | Virden (3,118) | 23,232 |
| 3 + 4 | The Pembina Valley. Manitou is 44 km from Winkler and Pilot Mound 69 km | Winkler (13,745) | 67,028 |
| 14 + 18 + 19 | The Interlake (Stonewall, Teulon, Gimli, Arborg) with the lands around Lake Winnipeg. Div. 19's biggest communities, Peguis (3,053) and Fisher River (1,449), are Interlake reserves. Hwy 6, the road from Winnipeg to Grand Rapids and Thompson (well known), runs through Div. 14, 18, 19 and then 21 | Gimli (6,569) | 61,766 |
| 1 + 12 | Eastman and the Winnipeg River country: Beausejour, Lac du Bonnet (39 km away), Pinawa, Pine Falls (61 km away) and the Whiteshell | Oakbank (5,041) | 44,977 |

Left alone:
- **Over 50k:** Winnipeg (Div. 11, 753,938), Steinbach (Div. 2, 83,878), Brandon (Div. 7, 70,896) and Selkirk (Div. 13, 51,643).
- **Exception: Div. 21 (The Pas, 21,871).** It has two real towns: The Pas (5,639; its population centre is 7,302) and Flin Flon (4,722). It covers about 62,000 km² and is a cluster of its own on the Saskatchewan side, 305 km from Thompson. The Pas is where the Hudson Bay Railway begins (well known). This is like Saskatchewan's Div. 18 (La Ronge), which also stayed alone.

**Main stations.**
- **Gimli** is chosen on `pop`, which counts the whole municipality (6,569). Its population centre is only 2,345, so Stonewall (5,046) is the bigger town on the ground. Gimli is the more central of the two.
- **Oakbank** (5,041, a population centre) beats Beausejour (3,307). Beausejour is the more central service town.
- **Churchill (870)** becomes a town in the Thompson region. If the owner wants it as its own destination, keep Div. 23 alone (14 regions). Even then, the biggest-town rule makes Gillam (1,007) the station.

**Names the tool will give.** The tool names a merged region after the biggest subdivision among all its members. Manitoba's rural municipalities have no "No. N" in their names, so they pass its town filter. The results:
- "Rockwood area (Division No. 14 & 18 & 19)": the station is Gimli.
- "Killarney - Turtle Mountain area (Division No. 5 & 6)": the station is Virden. Killarney's municipality has 3,520 people; Virden has 3,118.
- "Springfield area (Division No. 1 & 12)": fine, because Oakbank is in Springfield.
- Div. 13 stays "St. Andrews area": the station is Selkirk.

The others take their station's name: Thompson, Dauphin, Neepawa, Portage la Prairie, Winkler and The Pas.

### Alternative (also 13 regions)

Replace `[16, 17, 20]`, `[8, 15]` and `[9, 10]` with `[17, 20]`, `[15, 16]` and `[8, 9, 10]`. That gives Dauphin 31,630, Neepawa 33,249 and Portage la Prairie 51,129.
- **Pro:** Div. 8's bigger half joins its nearer hub. MacGregor is 35 km from Portage and Treherne 48 km, against 57 km and 86 km from Neepawa.
- **Con:** Russell is 142 km from Neepawa but 96 km from Dauphin, and Roblin is closer still to Dauphin (91 km). Portage's group would also reach Winnipeg's city limits.

### Map and data problems seen

1. **Four real borders are missing from `neighbors`.** This holds on both sides (SK's map doesn't list them either). In `map.js` the rings share these edges exactly:
   - Div. 19–22: 157 km along about 53.38°N, east of Lake Winnipeg.
   - Div. 20 and SK Div. 14: 54 km.
   - Div. 21 and SK Div. 14: 43 km.
   - Div. 23 and SK Div. 18: 468 km.

   The likely cause: the tool keeps 5 decimals for divisions whose outlines touch themselves at 4 decimals. That applies to 4619, 4620, 4621 and 4623, while 4622, 4714 and 4718 get 4 decimals. The two sides of a shared border then don't match in the topology. The tool should be fixed. Until then, the four links can be added as `bridges`: `[["Division No. 19", "Division No. 22"], ["Division No. 20", "SK:Division No. 14"], ["Division No. 21", "SK:Division No. 14"], ["Division No. 23", "SK:Division No. 18"]]`.
2. **Region names come from rural municipalities, not towns** (see above). Today's names are Alexander, Springfield, Rockwood, St. Andrews, Macdonald, North Norfolk, Lorne and so on. Div. 19 is "Pauingassi First Nation area" because Pauingassi has no 2021 count (blank in the table, so its population reads as 0) and is the only subdivision there without a reserve number. The merge hides that one.
3. **Div. 4, 8 and 19 have no place with a population in `places.json`**, so none of them could hold a main station alone. They're merged above.
4. **`places.json` mix-ups to avoid in phase 2.**
   - A "Roblin" community in Div. 4 (49.10, -99.29, near Cartwright) carries Roblin town's 1,603.
   - A "Russell" community (50.73, -101.37) repeats Russell town's 1,622.
   - "Lorette" appears twice, both with 3,230.
   - Flin Flon has 4,722 (population centre); its Manitoba subdivision has 4,940.
   - On the map, Winnipeg Beach (Div. 18, 1,439) falls inside Div. 13's shape and Dunnottar (Div. 13) inside Div. 19's. That comes from simplifying the shore.
5. **Div. 20 and 21 don't touch.** A strip of Div. 19 (Baden, Barrows, Powell) lies across Hwy 10 between Swan River and The Pas. That is real census geography. With the merges, the Parkland reaches The Pas through the Interlake group, or through SK Div. 14 once problem 1 is fixed.
6. **Checked and fine.**
   - Each region is one ring.
   - A 0.05° grid over the land found no gaps or overlaps.
   - Every label is inside its region.
   - Every place lies in a region except Nunalla, which is already marked `offMap`.

**Water crossings.** None are needed. Lakes Winnipeg, Manitoba and Winnipegosis all have land borders around them, and their ferries and causeways (Hecla, Matheson Island) stay inside one region. Ontario, North Dakota and Minnesota aren't in the game yet, so Div. 1, 2, 3, 4, 5, 19, 22 and 23 show no neighbours across those borders for now.

## The pack (phase 2)

Everything below is in `pack.js`. Facts come from `raw/`, unless a source is named:
- populations: Statistics Canada, 2021 Census;
- places and parks: the Canadian Geographical Names Database (GNDB).

Coordinates are rounded to 2 decimals. Station `pop` is the region's population in thousands from `counties.json`. Distances are straight lines.

### Start

`start: ["mb-division-no-11", "mb-division-no-2", "mb-division-no-13"]`: Winnipeg (metro), Steinbach (farm) and Selkirk (farm).
- Steinbach and Selkirk both touch Winnipeg, but not each other. The checker only needs each region to touch an earlier one.
- Steinbach (83,878) is Winnipeg's biggest neighbour. Selkirk (51,643) is the next compact one.
- The Gimli area (61,766) is bigger, but it runs from Winnipeg's edge past Lake Winnipeg to Saskatchewan and the far north. Starting with it would open half the province at once.
- That gives two types of place, so Winnipeg–Steinbach and Winnipeg–Selkirk have riders. The pack test laid WPG–SEL (25 mi), and 5 passengers arrived in the first week.

### Main stations (13)

| Id | Station | Region | Type | Size | Pop (k) | Level | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| WPG | Winnipeg | Div. 11 | metro | 4 | 754 | winnipeg | Winnipeg James Armstrong Richardson International (well known) |
| STB | Steinbach | Div. 2 | farm | 1 | 84 | winnipeg | Manitoba's third city (17,806) |
| SEL | Selkirk | Div. 13 | farm | 1 | 52 | winnipeg | |
| BSJ | Beausejour | Div. 1 & 12 | farm | 1 | 45 | winnipeg | not Oakbank (see below) |
| PLP | Portage la Prairie | Div. 9 & 10 | farm | 1 | 37 | west | |
| BRD | Brandon | Div. 7 | farm | 2 | 71 | west | the second city (51,313) |
| WNK | Winkler | Div. 3 & 4 | farm | 1 | 67 | west | |
| NEE | Neepawa | Div. 8 & 15 | farm | 1 | 37 | west | |
| VRD | Virden | Div. 5 & 6 | farm | 1 | 23 | west | not Killarney (see below) |
| GIM | Gimli | Div. 14, 18 & 19 | coast | 1 | 62 | lakes | the Lake Winnipeg shore |
| DAU | Dauphin | Div. 16, 17 & 20 | farm | 1 | 42 | lakes | |
| TPS | The Pas | Div. 21 | mountain | 1 | 22 | north | boreal forest |
| THO | Thompson | Div. 22 & 23 | metro | 1 | 47 | north | the north's city |

- **Beausejour, not Oakbank.** Oakbank (5,041, a population centre) is the region's biggest place. But it is a commuter community 23 km from downtown Winnipeg, at the region's western edge, 22 km from the Selkirk station. Beausejour (3,307) is the incorporated town and service centre, 47 km out, on the way to Lac du Bonnet and the Whiteshell. The region is named "Springfield area" after the rural municipality around Oakbank.
- **Virden, not Killarney.** The region is named after the Killarney - Turtle Mountain municipality (3,520), but Virden is the bigger town either way:
  - Virden has 3,118 people (municipality) and a population centre of 2,904.
  - Killarney's population centre has 2,499.
  - Virden is also on the Trans-Canada and the CPR main line (well known), so it suits a rail game. Killarney is a town.
- **Gimli** (6,569 in its municipality) is the merged region's biggest town. Stonewall (5,046) is bigger as a population centre (Gimli's is 2,345), but it lies at the region's southern tip, 31 km from Winnipeg. Gimli is a harbour and beach town on Lake Winnipeg, so it is coast. Lake Winnipeg is big enough to read as a sea on the map. This is the only coast use away from salt water.
- **Types.**
  - **Mountain** is the game's type for forested country (Saskatchewan's La Ronge, Alberta's Slave Lake). Here it covers The Pas and the northern and Shield towns.
  - **Metro.** Thompson is metro, like Fort McMurray and Prince George: it is "the Hub of the North" (its well-known nickname) for the north's roads, flights and railway. That also gives The Pas–Thompson riders.
  - **Farm.** Brandon is farm, Westman's farm centre, so Winnipeg–Brandon has riders (the Washington lesson).
- **Sizes.**
  - Winnipeg (754k) is 4, like Spokane (539k), by the size guide (0.5–2.5 million).
  - Brandon is 2. It is a real city (51k), like Prince Albert (89k) and Prince George (97k).
  - Steinbach (84k) is 1. Its region is mostly rural municipalities around an 18k city, like Yorkton (84k) and Medicine Hat (83k).
- **Airports.** Only Winnipeg has one.
- **No seaport.** Churchill is a real port on Hudson Bay, but a small grain port with no container trade, so it gets no `port`. Churchill is a scenic town instead.
- **Ids.** The checker found every id unique across all packs.

### Towns (23, about 1.8 per region)

| Region | Towns |
| --- | --- |
| Winnipeg (Div. 11) | none: the region is the city and Headingley |
| Steinbach (Div. 2) | Niverville (farm) |
| Selkirk (Div. 13) | Lower Fort Garry (scenic, farm) |
| Beausejour (Div. 1 & 12) | Lac du Bonnet (mountain); Whiteshell (scenic, mountain) |
| Portage la Prairie (Div. 9 & 10) | none: its next places (La Salle, Elie) are Winnipeg's exurbs |
| Brandon (Div. 7) | Souris (farm); Carberry (farm) |
| Winkler (Div. 3 & 4) | Morden (farm); Altona (farm) |
| Neepawa (Div. 8 & 15) | Minnedosa (farm); Spruce Woods (scenic, desert) |
| Virden (Div. 5 & 6) | Killarney (farm); International Peace Garden (scenic, farm) |
| Dauphin (Div. 16, 17 & 20) | Swan River (farm); Russell (farm); Riding Mountain National Park (scenic, mountain) |
| Gimli (Div. 14, 18 & 19) | Stonewall (farm); Arborg (farm); Narcisse Snake Dens (scenic, farm) |
| The Pas (Div. 21) | Flin Flon (mountain); Snow Lake (mountain) |
| Thompson (Div. 22 & 23) | Churchill (scenic, coast); Gillam (mountain); Wabowden (mountain) |

All towns are size 1. Town points come from `places.json`; the town/city entries were used, not the duplicate "Roblin" and "Russell" communities. Scenic places sit at a `parks.json` point or at their townsite:
- **Lower Fort Garry National Historic Site:** the stone Hudson's Bay Company fort on the Red (well known). Point: `parks.json`, 50.1122, -96.9319. It is 3.0 mi from the Selkirk station, which is the checker's one warning (see Checks).
- **Whiteshell Provincial Park:** Canadian Shield lakes and forest, Manitoba's best-known cottage park (well known). Point: its townsite Falcon Lake on the Trans-Canada (`places.json`, 49.6864, -95.3261). The `parks.json` point (50.02, -95.48) is in the roadless middle of the park.
- **Spruce Woods Provincial Park:** the Spirit Sands, open sand dunes (well known), so desert, like Saskatchewan's Grasslands. Point: `parks.json`, 49.7094, -99.0972. Rounded to 49.71, -99.10 it falls 0.1 mi outside its region, so it was nudged 1 km east to -99.09.
- **International Peace Garden:** on Turtle Mountain at the US border (well known). Point: `parks.json`, 49.0108, -100.0667.
- **Riding Mountain National Park:** at its townsite, Wasagaming on Clear Lake (`places.json`, 50.6583, -99.9686), which is in the Dauphin region. Its type is mountain (the forested escarpment).
- **Narcisse Snake Dens:** tens of thousands of red-sided garter snakes come out each spring, a well-known Interlake sight. Point: Narcisse Wildlife Management Area (`parks.json`, 50.7225, -97.6186).
- **Churchill:** on Hudson Bay, the end of the Hudson Bay Railway, with polar bears and beluga whales (all well known). Its type is coast. Point: `places.json` town, 58.7808, -94.1869.

Other choices:
- **Hecla Island was dropped.** The map's Lake Winnipeg polygon covers the island (Hecla's points at 51.14, -96.67 and 51.18, -96.58 are in it). Every link to it crossed 14–40 miles of lake and was blocked in both modes.
- **Norway House was dropped.** It is the Thompson region's second-biggest community (5,390), but in Tough every link crossed 2–3 miles of the map's Lake Winnipeg (Playgreen Lake). Nudging it didn't help.
- **Wabowden replaced it.** It is on Highway 6 and the Hudson Bay Railway (well known), and opens to Thompson, The Pas, Snow Lake and Gillam in both modes.
- **Grand Rapids was dropped.** Cedar Lake and Lake Winnipeg block it from The Pas, Swan River and Norway House.
- **Snow Lake** gives Flin Flon a link that is open in Tough. Flin Flon–The Pas crosses 5.5 miles of Athapapuskow Lake, so it is open only in Gentle.
- **Left out to stay near 1.5 per region:**
  - Oakbank, Carman, Morris, Teulon, Winnipeg Beach, Roblin, Grandview, Gilbert Plains, Melita, Boissevain, Hamiota and Lynn Lake.
  - Places with no road or only seasonal roads (York Factory, Berens River, Island Lake).
- **Not used:** Winnipeg Beach and Dunnottar sit just outside their regions' simplified shapes.

### Passes (0)

Manitoba is flat. The terrain grid has 47 hill cells and 6 mountain cells, and no main-station or town link has a tunnel.

**Terrain artifact for the main agent.** Four of the mountain cells, and most of the hill cells around them, are a straight one-cell row at 56.98°N from -99.93 to -99.08, near Southern Indian Lake. It looks like an elevation tile seam, not a real ridge. The arcade look draws a big mountain there. No link crosses it.

### Bridges (11)

Each is placed on the map's river, where the links cross it, and every one is used by at least one tested link. Positions are approximate (well-known crossings, not surveyed points).

| Bridge | Point | Source / reason |
| --- | --- | --- |
| Provencher Bridge (Winnipeg) | 49.89, -97.12 | The Red, downtown to St. Boniface (well known). Used by Beausejour–Winnipeg |
| Norwood Bridge (Winnipeg) | 49.88, -97.13 | The Red, just above the Forks (well known). Used by Steinbach–Winnipeg |
| Disraeli Bridge (Winnipeg) | 49.91, -97.12 | The Red, north of downtown (well known). Used by Selkirk–Winnipeg |
| Osborne Bridge (Winnipeg) | 49.88, -97.14 | The Assiniboine, downtown (well known). Used by Steinbach–Winnipeg and Niverville–Winnipeg |
| Lockport Bridge (St. Andrews Lock and Dam) | 50.08, -96.94 | Highway 44 over the Red at the lock and dam (well known). Used by Selkirk–Winnipeg and Niverville–Lower Fort Garry |
| Selkirk Bridge | 50.15, -96.86 | The Red, Selkirk to East Selkirk (well known locally). Used by Beausejour–Selkirk and Lac du Bonnet–Selkirk |
| Assiniboine River bridge (Portage la Prairie) | 49.94, -98.28 | The Assiniboine south of the city (a real crossing; the exact bridge isn't named). Used by Portage–Winkler and Morden–Portage |
| 18th Street Bridge (Brandon) | 49.85, -99.96 | The Assiniboine in Brandon (well known locally). Used by Brandon's links to Winkler, Virden, Souris, Spruce Woods and the Peace Garden |
| Souris River bridge (Souris) | 49.61, -100.26 | The town's crossing of the Souris (Souris is also known for its swinging footbridge). Used by Souris–Killarney and Souris–Peace Garden |
| Saskatchewan River bridge (The Pas) | 53.85, -101.22 | Highway 10 and the Hudson Bay Railway cross at The Pas (well known). Placed on the map's river north of town, so it covers The Pas's links to Thompson, Flin Flon and Wabowden |
| Kettle Rapids bridge (Nelson River) | 56.39, -94.70 | The Hudson Bay Railway's Nelson crossing near Gillam (from memory; approximate). Used by Gillam–Churchill |

**Not added:**
- A Red River crossing at Morris on Steinbach–Winkler: a real bridge, but not well known.
- The Winnipeg River crossings on Lac du Bonnet–Whiteshell.
- Two Assiniboine meanders on Portage–Winnipeg.

A new river bridge there costs only the small river price.

### Water

- **Bays: none.** Manitoba's only salt water is Hudson Bay, and nothing needs crossing there; links along it follow the coast.
- **Lakes.** Lakes Winnipeg, Manitoba and Winnipegosis, Cedar Lake and the northern Shield lakes are already water on the map. A new bridge can span at most 8 miles in Gentle and 2 in Tough. Seen with `NR.blockedReason`:
  - Beausejour–Gimli: 15 mi of Lake Winnipeg, blocked in both modes.
  - Gimli–Neepawa: 25 mi of Lake Manitoba, blocked in both.
  - Gimli–The Pas: Lake Winnipegosis, blocked in both.
  - Gimli–Thompson: 93 mi of Lake Winnipeg, blocked in both.
  - Dauphin–Gimli: 4 mi of Lake Manitoba, open in Gentle, blocked in Tough.
- **Real bridges are used where they should be.** Thompson–The Pas uses the Saskatchewan River bridge at The Pas. Gillam–Churchill uses Kettle Rapids. The Winnipeg links use the city's bridges (table above).

### Biomes

- **forest:**
  - The Pas (Div. 21) and Thompson (Div. 22 & 23): the boreal forest and the Shield.
  - The Gimli area. About 80% of its land is Div. 19's boreal forest and Shield around Lake Winnipeg, plus the bush of the northern Interlake.
  - The Beausejour area. About 85% of its land is Div. 1: the Whiteshell, Sandilands and Agassiz forests.

  On flat ground "wooded" would show almost no trees, so these four are forest. The cost: the screenshots show trees on the farmland just northwest and east of Winnipeg (Rockwood, Springfield).
- **wooded:** the Dauphin area. It has Parkland farms on the flats, and forest on the Riding Mountain escarpment and the Porcupine Hills, where the map's hill cells are.
- **dry:** none. Spruce Woods' dunes are one park, shown by its desert-type town.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| 1. Winnipeg & the Red River | winnipeg | WPG, STB, SEL, BSJ | 50 passengers, 4 counties (buy the Beausejour area), connect WPG–SEL |
| 2. The Prairies & Westman | west | PLP, BRD, WNK, NEE, VRD | 140 passengers, connect WPG–BRD, 25 produce |
| 3. The Interlake & the Parkland | lakes | GIM, DAU | 280 passengers, connect WPG–DAU (for example via Portage and Neepawa), one high-speed train |
| 4. The North | north | TPS, THO | 450 passengers, connect TPS–THO (the Hudson Bay Railway's route), 30 trucks |

- Every level's regions touch an earlier level's: Portage and Winkler touch level 1, Gimli touches Winnipeg, Dauphin touches Neepawa, and The Pas and Thompson touch Gimli.
- There are no containers goals, because there is no container port.

### How the map plays

Checked with `NR.segmentGeo` / `NR.blockedReason`, in both modes. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`. Two kinds of link were tested: every main station to its neighbours' main stations (Saskatchewan's included), and every town to its 3 nearest places.

- **Main stations:**
  - Of 34 links, 26 are open in both modes, 1 only in Gentle (Dauphin–Gimli), and 7 in neither (the lake crossings above, plus The Pas–La Ronge and Thompson–La Ronge across Lac la Ronge).
  - Every main station reaches at least two neighbouring main stations in both modes, **except Thompson**, which reaches only The Pas. Its other neighbours are Gimli (93 mi of Lake Winnipeg) and La Ronge (Lac la Ronge, on Saskatchewan's side).
  - This matches the real geography: the railway to Thompson and Churchill comes from The Pas, and Highway 6 goes around Lake Winnipeg's west side.
  - Thompson's region is also reached in both modes through its towns: Wabowden–The Pas, Wabowden–Snow Lake, and Snow Lake–Thompson.
  - Gimli reaches Winnipeg, Selkirk and Portage in both modes.
- **Towns:**
  - Of 69 links, 66 are open in both modes, 2 only in Gentle (Flin Flon–The Pas and Flin Flon–Cumberland House, across Athapapuskow Lake and another lake), and 1 in neither (Snow Lake–The Pas, across Reed Lake).
  - Every town has an open link in both modes.
- **Saskatchewan.** These are open in both modes: Neepawa–Yorkton, Dauphin–Yorkton, Dauphin–Melfort, Virden–Weyburn, The Pas–Melfort, Russell–Moosomin, Moosomin–Virden and Cumberland House–The Pas. Saskatchewan's eastern towns (Moosomin, Cumberland House) are now checked.
- **Ontario** isn't in the game, so links into it were ignored.

### Checks

- `node tools/check-pack.js MB`: "MB: passed (13 stations, 23 towns, 0 city maps, 0 passes, 11 bridges), 0 errors, 1 warnings". The warning is "SEL and LFG are only 3.0 miles apart": Lower Fort Garry really is 3 miles south of Selkirk, and it is the Selkirk area's one scenic place.
- `node tools/test-pack.js MB`: "PASSED: 17 passed, 0 warnings, 0 failed".
- **Screenshots** (arcade light, classic dark, phone, levels):
  - The stations sit sensibly: Gimli on the Lake Winnipeg shore, Narcisse in the Interlake, and Steinbach and Selkirk either side of Winnipeg.
  - The Red and the Assiniboine are drawn, with the Winnipeg and Selkirk bridge names.
  - Saskatchewan shows as "Opens once you own all of Manitoba".
  - Trees cover the north and the Shield.
  - The 56.98°N terrain row shows as a lone mountain in the arcade look (see Passes).
