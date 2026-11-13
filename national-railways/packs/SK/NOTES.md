# Saskatchewan (SK) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list is applied, giving 11 regions. Manitoba isn't in the game yet, so problem 1 below waits until it joins; Saskatchewan's eastern edge is the map's edge for now.

Populations: `packs/SK/raw/counties.json` and `packs/SK/raw/places.json` (Statistics Canada, 2021 Census). Where `places.json` has no number (North Battleford, Lloydminster), the number comes from Statistics Canada table 98-10-0002 in the build cache, the same table the map tool uses for names. Distances are straight lines between `places.json` points. Highways are named only where well known. Every group below shares a border in `neighbors`; this was checked with a script.

### Recommended (18 → 11 regions)

```
merge: [["Division No. 1", "Division No. 2"], ["Division No. 3", "Division No. 7"], ["Division No. 4", "Division No. 8"], ["Division No. 12", "Division No. 13"], ["Division No. 16", "Division No. 17"], ["Division No. 5", "Division No. 9", "Division No. 10"]]
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 1 + 2 | The southeast oil and coal country: Weyburn and Estevan, 85 km apart on Hwy 39 (well known) | Weyburn (11,019) | 52,848 |
| 3 + 7 | Assiniboia and Gravelbourg (both about 90 km away) look north to Moose Jaw. Hwy 2 runs from Moose Jaw to Assiniboia (well known) | Moose Jaw (33,665) | 59,675 |
| 4 + 8 | The southwest: Maple Creek is on the Trans-Canada west of Swift Current (well known), and Shaunavon is 84 km south of it | Swift Current (16,750) | 41,712 |
| 12 + 13 | West-central grain and oil country: Rosetown, Biggar, Kindersley, Unity. Hwy 7 runs Saskatoon–Rosetown–Kindersley (well known) | Kindersley (4,567) | 45,255 |
| 16 + 17 | The northwest looks to the Battlefords: the Yellowhead runs to Lloydminster (127 km) and Hwy 4 to Meadow Lake (152 km) (well known). This also fixes the Lloydminster clash (see below) | North Battleford (13,836) | 85,827 |
| 5 + 9 + 10 | The east-central Parkland around Yorkton. Melville is 40 km away. Foam Lake and Wynyard are on the Yellowhead west of Yorkton (well known). Div. 10 sits in the same east–west band as Div. 9 | Yorkton (16,280) | 84,113 |

Left alone: Regina (Div. 6, 276,564), Saskatoon (Div. 11, 326,109) and Prince Albert (Div. 15, 88,988) are over 50k. There are two exceptions:
- **Div. 14 (Melfort, 35,428).** It has real towns: Melfort (5,955), Nipawin (4,570) and Tisdale (2,962). Its small neighbours don't fit. Div. 9 and 10 are already in Yorkton's group of three, and Div. 10's biggest towns sit 124–154 km from Melfort on the Yellowhead. Div. 18 is the north. Div. 15 is Prince Albert, which is already big.
- **Div. 18 (La Ronge, 35,986).** It covers half the province: boreal forest and the Shield, about 47.5 square degrees against 2–5 for the others. Its towns reach the south by three different roads: La Ronge to Prince Albert (Hwy 2, well known), La Loche towards Meadow Lake, and Creighton towards Div. 14. Any merge would put its station 200+ km south of the north.

**Main stations.**
- **Weyburn.** The tool names a merge after the biggest town among *all* its members, not after the biggest town of the biggest member. So 1 + 2 becomes "Weyburn area (Division No. 1 & 2)". Weyburn (11,019) narrowly beats Estevan (10,851), which becomes a town.
- **North Battleford.** At 13,836 it beats Lloydminster (Part), 11,843, so 16 + 17 is named "North Battleford area". That keeps the name away from Alberta's Lloydminster station.
- **Kindersley.** It sits on the Alberta edge of its group; Rosetown (2,507) and Biggar (2,133) are more central. As in Alberta's Wainwright case, the rule (biggest town) was followed.
- **La Ronge (2,521).** La Loche (2,514) is nearly tied, but La Ronge's population centre is 5,317 with Air Ronge.

**Rejected.**
- **The tool's automatic merge.** It gave [1, 5, 9] and [10, 14, 18]; Manitoba's map still holds those ids. The first runs from Estevan to Kamsack across three trade areas. The second puts Wynyard with La Ronge.
- **The Battlefords together: [12, 16] + [13, 17].** [13, 17] would be named "Lloydminster area", which clashes with Alberta's station. It would also stretch about 300 km along the border, from Kindersley to Pierceland.

### Alternative (also 11 regions)

```
merge: [["Division No. 1", "Division No. 2"], ["Division No. 3", "Division No. 7"], ["Division No. 4", "Division No. 8"], ["Division No. 12", "Division No. 13"], ["Division No. 16", "Division No. 17"], ["Division No. 5", "Division No. 9"], ["Division No. 10", "Division No. 14"]]
```

The difference: Yorkton (5 + 9) has 67,630 people, and Melfort (10 + 14) has 51,911.
- **Pro:** no lone Div. 14, so fewer regions are under 50k.
- **Con:** Div. 10's main towns (Wynyard, Foam Lake) are Yellowhead towns that look to Yorkton and Saskatoon. Their only link to Melfort is the north–south line Raymore–Watson–Naicam–Melfort. Those towns all lie near 104.5°W; that this is Hwy 6 is from memory, so check it.

### Map and data problems seen

1. **Saskatchewan and Manitoba aren't linked.** Manitoba's `map.js` and `raw/counties.json` name SK neighbours `sk-division-no-1-5-9` and `sk-division-no-10-14-18`, ids from the old automatic merge that no longer exist. SK's `map.js` lists no Manitoba neighbours at all, although Divisions 1, 5, 9, 14 and 18 touch Manitoba. So no neighbour link crosses the SK–MB border right now. Rebuild both after the merge is applied, then check that each side lists the other.
2. **Missing populations in `places.json`.**
   - North Battleford has `pop: null`. Two subdivisions share the name: the city (13,836) and CSD 4716027 (104).
   - Lloydminster also has `pop: null`. Its Saskatchewan part is 11,843 (CSD 4717029).
   - The tool names regions from the table, so the region names come out right. Phase 2 needs to take these numbers from the table.
3. **The Battlefords are split.** Battleford (4,400) is in Div. 12 and North Battleford in Div. 16, about 3 km apart across the river. With 12 + 13, Battleford ends up in Kindersley's region next to the North Battleford station. Div. 12 is currently named "Battleford area".
4. **Kindersley looks inconsistent.** The municipality has 4,567 people but its population centre only 2,938; the latter looks low.
5. **A degenerate land ring.** `map.js` `land` has a one-point ring at (-107.078, 51.478) near Outlook. It looks harmless.
6. **Checked and fine.**
   - Each of the 18 regions is one ring.
   - A 0.05° grid over the land found no gaps or overlaps.
   - All 2,217 places are inside Saskatchewan. West Poplar, a border crossing, sits about 50 m south of 49°N.
   - The AB–SK neighbours match on both sides.

## The pack (phase 2)

Everything below is in `pack.js`. Facts come from `raw/`, unless a source is named:
- populations: Statistics Canada, 2021 Census;
- places and parks: the Canadian Geographical Names Database (GNDB).

Coordinates are rounded to 2 decimals. Station `pop` is the region's population in thousands from `counties.json`.

### Start

`start: ["sk-division-no-11", "sk-division-no-15", "sk-division-no-16-17"]`: Saskatoon (metro), Prince Albert (farm) and North Battleford (farm).
- All three regions touch each other.
- That is two types of place, so Saskatoon–Prince Albert and Saskatoon–North Battleford have riders; Prince Albert–North Battleford doesn't.
- The pack test laid SAS–NBF (92 mi), and 9 passengers arrived in the first week.
- Regina (metro) isn't in the start. Saskatoon–Regina would carry nobody in "type of place" mode, and Saskatoon is the bigger city and the more central one.

### Main stations (11)

| Id | Station | Region | Type | Size | Pop (k) | Level | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SAS | Saskatoon | Div. 11 | metro | 3 | 326 | saskatoon | Saskatoon John G. Diefenbaker International |
| PRA | Prince Albert | Div. 15 | farm | 2 | 89 | saskatoon | the third city; Highway 2 north to La Ronge starts here (well known) |
| NBF | North Battleford | Div. 16 & 17 | farm | 1 | 86 | saskatoon | not Lloydminster (see below) |
| KIN | Kindersley | Div. 12 & 13 | farm | 1 | 45 | saskatoon | biggest town (4,567); on the Alberta edge of its merge |
| REG | Regina | Div. 6 | metro | 3 | 277 | south | Regina International |
| MJW | Moose Jaw | Div. 3 & 7 | farm | 1 | 60 | south | |
| SWC | Swift Current | Div. 4 & 8 | desert | 1 | 42 | south | Palliser's Triangle, like Alberta's Medicine Hat |
| WEY | Weyburn | Div. 1 & 2 | farm | 1 | 53 | south | biggest town (11,019); Estevan (10,851) is a town |
| YTN | Yorkton | Div. 5, 9 & 10 | farm | 1 | 84 | east | |
| MFT | Melfort | Div. 14 | farm | 1 | 35 | east | |
| LRG | La Ronge | Div. 18 | mountain | 1 | 36 | north | the boreal forest and the Shield (see below) |

- **North Battleford** is the station of Div. 16 & 17, and **Lloydminster** isn't used. Alberta's pack already has LLD there.
  - North Battleford is the merge's biggest town, so the region is named after it.
  - Its population is 13,836, the City of North Battleford (CSD 4716029). It comes from the `municipalities` list on its `places.json` entry; the other entry, CSD 4716027, has 104. Statistics Canada table 98-10-0002 gives the same numbers.
  - The Saskatchewan part of Lloydminster (CSD 4717029, 11,843) is second.
- **Battleford** isn't a town. It is 3 km from North Battleford across the river, and the checker would flag it as too close. Its Div. 12 sits in Kindersley's region, so the Battlefords bridge (below) covers it.
- **Types.**
  - "Mountain" is the game's type for forested country, as BC uses it for Fort Nelson and Alberta for Slave Lake. Here it covers La Ronge, La Loche, Cumberland House, Meadow Lake and Prince Albert National Park.
  - Prince Albert is farm, not metro, so Saskatoon–Prince Albert has riders. Alberta made Red Deer and Lethbridge farm for the same reason.
- **Sizes.**
  - Saskatoon (326k) is 3, like BC's Abbotsford (324k). Regina (277k) is 2: the agent made it 3 as Saskatoon's near-equal and the capital, and the main agent's review set it to 2 by the size guide (2 = about 60k–300k), like Olympia (295k), another capital.
  - Prince Albert is 2: the third city and the north's hub, like BC's Prince George (97k) and Alberta's Fort McMurray (75k). **Unsure:** Alberta's Medicine Hat (83k) is 1.
- **Airports.** Only Saskatoon and Regina have one. Other packs give airports at this size: Kelowna (222k) and Medford (223k). Both airports are well known.
- **Ports:** none, as there is no sea.
- **Ids:** the checker found every id unique across all packs. PAB and YRK were taken, so Prince Albert is PRA and Yorkton YTN.

### Towns (18, about 1.6 per region)

| Region | Towns |
| --- | --- |
| Saskatoon (Div. 11) | Wanuskewin (scenic, farm) |
| Regina (Div. 6) | Fort Qu'Appelle (scenic, farm) |
| Moose Jaw (Div. 3 & 7) | Assiniboia (farm); Grasslands National Park (scenic, desert) |
| Swift Current (Div. 4 & 8) | Fort Walsh (scenic, mountain) |
| Weyburn (Div. 1 & 2) | Estevan (farm) |
| Yorkton (Div. 5, 9 & 10) | Melville (farm); Moosomin (farm); Wynyard (farm) |
| Melfort (Div. 14) | Nipawin (farm) |
| Prince Albert (Div. 15) | Humboldt (farm); Batoche (scenic, farm) |
| North Battleford (Div. 16 & 17) | Meadow Lake (mountain); Prince Albert National Park (scenic, mountain) |
| Kindersley (Div. 12 & 13) | Rosetown (farm); Unity (farm) |
| La Ronge (Div. 18) | La Loche (mountain); Cumberland House (mountain) |

All towns are size 1. Towns come from `places.json`; scenic places sit at a `parks.json` point, except Prince Albert National Park, which sits at its townsite.

Scenic places, and where they sit:
- **Wanuskewin Heritage Park**, on the South Saskatchewan just north of Saskatoon. Point: `parks.json`, 52.2237, -106.5951 (7 mi from the station).
- **Fort Qu'Appelle**, the town between the Qu'Appelle Valley's lakes. Point: `places.json`. Echo Valley Provincial Park (`parks.json`, 50.79, -103.89) and Katepwa Point Provincial Park are beside it. The valley's lakes are a well-known getaway from Regina.
- **Grasslands National Park.** Point: `parks.json`, 49.0908, -107.164, which falls in Div. 3 (Moose Jaw's region). It is desert: dry mixed-grass prairie and badlands, like Alberta's Dinosaur Park. The park's gateway village, Val Marie, is in Div. 4 (Swift Current's region); the park point was used to keep the towns spread out.
- **Fort Walsh National Historic Site**, the North-West Mounted Police fort in the Cypress Hills. Point: `parks.json`, 49.5637, -109.8786. It is mountain, like Alberta's Cypress Hills at Elkwater (CYP), which is 19 mi away; the different name avoids a second "Cypress Hills".
- **Batoche National Historic Site**, the 1885 battle on the South Saskatchewan. Point: `parks.json`, 52.7528, -106.1172.
- **Prince Albert National Park.** Point: its townsite, Waskesiu Lake (`places.json` locality, 53.923, -106.082). The park and townsite fall in Div. 16 (North Battleford's region); `parks.json` puts the park at 53.96, -106.37, also in Div. 16.

Other choices:
- **Cumberland House** is Saskatchewan's oldest settlement, a Hudson's Bay Company post from 1774 (well known). It has a provincial historic park (`parks.json`).
  - It replaced **Creighton**, Flin Flon's Saskatchewan side. Every straight link from Creighton crossed 10–18 miles of lake (Amisk-area lakes, Tobin Lake, Lac la Ronge) and was blocked in both modes.
- **La Loche** is in the far northwest. In Tough its only open link among its six nearest places is Meadow Lake (168 mi); North Battleford is also open. That matches its one real road south (Highway 155). Lac la Loche blocks the links to Fort McMurray and Lac La Biche in Tough.
- **Left out to stay near 1.5 per region:**
  - The bigger places: Warman, Martensville, White City, Indian Head, Lumsden, Gravelbourg, Maple Creek, Shaunavon, Eastend, Carlyle and Moose Mountain, Esterhazy, Canora, Kamsack, Tisdale, Hudson Bay, Rosthern, Shellbrook, Biggar, Île-à-la-Crosse and Creighton.
  - Two well-known places with no road: Stony Rapids and the Athabasca Sand Dunes.

### Passes (0)

Saskatchewan is flat. The terrain grid has one mountain cell (59.32°N 107.80°W, near Lake Athabasca) and 37 hill cells, and no main-station or town link has a tunnel. The checker reports nothing to fix.

### Bridges (7)

Each is placed on the map's river, where the links to its town cross. Positions are approximate (well-known crossings; the exact point isn't from a survey).

| Bridge | Point | Source / reason |
| --- | --- | --- |
| Broadway Bridge (Saskatoon) | 52.12, -106.66 | One of Saskatoon's downtown bridges over the South Saskatchewan (well known). Links from Saskatoon to Regina, Moose Jaw, Yorkton and Humboldt use it |
| Diefenbaker Bridge (Prince Albert) | 53.2, -105.75 | Highway 2 over the North Saskatchewan in Prince Albert (well known). Links to La Ronge and Prince Albert National Park use it |
| North Saskatchewan River bridge (the Battlefords) | 52.73, -108.31 | The crossing between Battleford and North Battleford (well known). Links to Kindersley and Unity use it |
| Borden Bridge (Yellowhead Highway) | 52.34, -107.19 | Highway 16 (the Yellowhead) crosses the North Saskatchewan near Borden, between Saskatoon and North Battleford (well known). Placed where Saskatoon–North Battleford crosses the map's river, about 5 mi southeast of Borden village |
| Qu'Appelle River bridge (Lumsden) | 50.65, -104.86 | Highway 11, Regina–Saskatoon, crosses the Qu'Appelle valley at Lumsden (well known). Saskatoon–Regina uses it |
| Qu'Appelle River bridge (Fort Qu'Appelle) | 50.77, -103.77 | Highway 10, Regina–Yorkton, crosses the Qu'Appelle at Fort Qu'Appelle (well known). Placed at the town's east end, on the map's river. Regina–Yorkton and Fort Qu'Appelle's links use it |
| Saskatchewan River bridge (Nipawin) | 53.35, -104.03 | The town's bridge over the Saskatchewan River, between Codette Lake and Tobin Lake; approximate |

**Not added:**
- **Saskatchewan Landing** (Highway 4 over the South Saskatchewan, north of Swift Current). No link passes within 3–4 miles of it: Swift Current–Rosetown crosses Lake Diefenbaker about 6 miles east of it, and the crossings on Swift Current–Kindersley lie 11 miles west.
- **The St. Louis bridge** (Highway 2 over the South Saskatchewan). The nearest crossings (Prince Albert–Humboldt, Saskatoon–Prince Albert) are 7–10 miles from it.
- **The Souris at Weyburn and Estevan**, and **the Battle River**: small rivers. A new bridge there costs only the small river price.

### Biomes

- **forest:** Div. 18, the boreal forest of the north and the Shield. The ground is flat, so "wooded" (trees only on hills) would show almost no trees there.
- **wooded:** Div. 14, 15, and 16 & 17. Each has farms in the south and boreal forest in the north. On this flat ground, wooded puts trees only on the few hill cells (Pasquia Hills and others), so the farmland stays green. Forest would cover the Battlefords' and Humboldt's farms with trees.
- **dry:** Div. 4 & 8, the heart of Palliser's Triangle around Swift Current and Maple Creek. Moose Jaw's region (with the Grasslands) is half dry and half grain, and is left as farmland. Alberta did the same with Lethbridge.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| 1. Saskatoon & the Battlefords | saskatoon | SAS, PRA, NBF, KIN | 50 passengers, 4 counties (buy Kindersley), connect SAS–PRA |
| 2. Regina & the South | south | REG, MJW, WEY, SWC | 140 passengers, connect SAS–REG, 25 produce |
| 3. The Parkland | east | YTN, MFT | 280 passengers, connect REG–YTN, one high-speed train |
| 4. The North | north | LRG | 450 passengers, connect PRA–LRG, 30 trucks (from the mountain-type northern places and desert Swift Current) |

- Every level's regions touch an earlier level's.
- There are no containers goals, because Saskatchewan has no port.
- Level 4 opens only one region, but it is half the province and has two towns.

### How the map plays

Checked with `NR.segmentGeo` / `NR.blockedReason`, in both modes. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`. Two kinds of link were tested: every main station to its neighbours' main stations (Alberta's included), and every town to its 3 nearest places.

- **Main stations:**
  - Of 29 links, 27 are open in both Gentle and Tough.
  - Two are open in neither: La Ronge–Cold Lake (12 miles of lake) and La Ronge–Fort McMurray (19 miles across Churchill Lake), both across the northern lakes into Alberta.
  - Every main station reaches at least two neighbouring main stations in both modes. La Ronge reaches Prince Albert, North Battleford and Melfort.
- **Towns:**
  - Of 47 links, 41 are open in both modes, 2 only in Gentle, and 4 in neither.
  - The Gentle-only links are La Loche–Fort McMurray and La Loche–Lac La Biche (Lac la Loche, 7–8 miles).
  - The four closed in both are:
    - Grasslands–Moose Jaw (across Old Wives Lake)
    - Humboldt–Wynyard (across Big Quill Lake)
    - La Loche–Cold Lake
    - Cumberland House–La Ronge
  - Every town has an open link in both modes.
- **Into Alberta, in both modes:** Swift Current–Medicine Hat (uses Alberta's Medicine Hat bridge), Swift Current–Wainwright, Kindersley–Wainwright, North Battleford–Lloydminster and North Battleford–Cold Lake. Fort Walsh–Medicine Hat and Fort Walsh–Cypress Hills (Elkwater) are open too.
- **Manitoba:** not in the game yet. The eastern towns (Moosomin, Cumberland House) will need checking when it joins.

### Checks

- `node tools/check-pack.js SK`: "SK: passed (11 stations, 18 towns, 0 city maps, 0 passes, 7 bridges), 0 errors, 0 warnings".
- `node tools/test-pack.js SK`: "PASSED: 17 passed, 0 warnings, 0 failed".
- **Screenshots** (arcade light, classic dark, phone) look right:
  - the trees are in the north, and the southwest is sand-coloured;
  - the North Saskatchewan and South Saskatchewan are drawn;
  - Alberta's outline shows in the classic look;
  - the phone view shows the start's three stations and the Borden bridge.
