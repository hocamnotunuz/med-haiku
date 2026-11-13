# Alberta (AB) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list is applied (14 regions). Problems 1–3 below are fixed in the tools: the Division 2/5 gap came from rounding to 3 decimals (now 4, with a check), and `places.json` and `parks.json` now hold only Alberta's places (1,838 places). Division 16 keeps the name "Wood Buffalo area" (the real municipality's name), and its main station is Fort McMurray.

Populations: `packs/AB/raw/counties.json` and `packs/AB/raw/places.json` (Statistics Canada, 2021 Census). All pairs below share a border in `neighbors`.

### Recommended (19 → 14 regions)

```
merge: [["Division No. 4", "Division No. 7"], ["Division No. 18", "Division No. 19"], ["Division No. 8", "Division No. 9"], ["Division No. 2", "Division No. 3"], ["Division No. 14", "Division No. 15"]]
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 4 + 7 | Two small regions: the dry east-central prairie on the Saskatchewan line (Hanna, Oyen, Consort + Coronation, Provost, Stettler, Wainwright) | Wainwright (6,606) | 49,904 |
| 18 + 19 | Greenview (Valleyview, Fox Creek, Grande Cache) looks to Grande Prairie: Hwy 43 and Hwy 40 both lead there (well known) | Grande Prairie (64,141) | 134,393 |
| 8 + 9 | Rocky Mountain House is on Hwy 11, the Red Deer–Sylvan Lake road west (well known); no distinct place in Div. 9 | Red Deer (100,844) | 234,039 |
| 2 + 3 | Southwest towns (Fort Macleod, Pincher Creek, Cardston, Magrath, all under 4,000) look to Lethbridge. The Crowsnest route (Hwy 3) runs Lethbridge–Fort Macleod–Pincher Creek, and the region still borders East Kootenay | Lethbridge (98,406) | 219,281 |
| 14 + 15 | The Rockies: Bow Valley (Canmore, Banff) and the Yellowhead (Jasper–Hinton–Edson, Hwy 16 and the CN main line, well known), joined by the Icefields Parkway | Canmore (15,990) | 66,352 |

Rejected: the tool's automatic rule would give [4, 7], [9, 14, 18] and [3, 15]. [9, 14, 18] is a 600 km foothills arc with no common road (Rocky looks to Red Deer, Valleyview to Grande Prairie); [3, 15] puts Cardston and Claresholm with Banff and Jasper.

Main station note: Wainwright is the biggest town but sits at the far north-east of 4 + 7; Stettler (5,695) is more central. Rule followed; an exception could be written down.

### Alternative (15 regions)

Same, but Division No. 14 stays alone: `[["Division No. 4", "Division No. 7"], ["Division No. 18", "Division No. 19"], ["Division No. 8", "Division No. 9"], ["Division No. 2", "Division No. 3"]]`.
Pro: Hinton/Edson keep a station on the Edmonton–Jasper corridor and Canmore's region stays the compact Bow Valley. Con: two regions under 50k (Hinton 28,617; Canmore 37,735).

### Map and data problems seen

1. **Gap between Divisions 2 and 5 (fixed).** A diagonal strip of about 970 km² (from about 50.3°N 113.3°W to 50.75°N 111.75°W) is in no region in `map.js`. Duchess (1,053), Southesk and Armada fall in it. Each division is drawn in two pieces: Div. 2 has a detached Bassano/Rosemary piece, Div. 5 a detached Lomond piece. Both counties are really one piece, so this looks like a geometry error in the build.
2. **Places outside Alberta (fixed).** 756 of 2,592 places in `places.json` lie outside the province but are tagged with an Alberta division. Examples: 487 BC places in Div. 15 (Kamloops, Princeton), Dawson Creek in 19, Elkford in 6, Fort Smith (NWT) in 16, and Saskatchewan towns (Maple Creek, Leader, Kindersley, Macklin) in 1, 4, 7 and 10. All have no population except Lloydminster, so filter them when you choose towns. A BC "Valleyview" near Kamloops is tagged Div. 15, which clashes with Valleyview, Alberta.
3. **Lloydminster.** Its point (109.98°W) is just inside Saskatchewan. Its 31,582 is the whole two-province population centre, but Division 10's total counts only the Alberta part.
4. **Names from municipalities only.** Div. 16 is called "Wood Buffalo area", but its station should be Fort McMurray (68,002). In Div. 18 Grande Cache (3,037, a locality) is bigger than Valleyview (1,673); this only matters if Div. 18 stays alone.
5. **Missing populations.** Municipality of Crowsnest Pass (only Coleman, 1,441, has a number), Lac La Biche, and Taber (municipality missing; population centre 8,978).
6. The neighbours look right. Div. 1 (Medicine Hat) touches only 2 and 4, and Div. 16 only 12 and 17, until Saskatchewan arrives.

## The pack (phase 2)

Everything below is in `pack.js`. Facts come from `raw/` (Statistics Canada 2021 populations; the Canadian Geographical Names Database, GNDB, for places and parks) unless a source is named. Coordinates are rounded to 2 decimals.

### Start

`start: ["ab-division-no-6", "ab-division-no-14-15", "ab-division-no-8-9"]`: Calgary (metro), Canmore (mountain) and Red Deer (farm). That is three types, and all three regions touch each other. The pack test lays CGY–CNM through the Bow Valley.

### Main stations (14)

| Id | Station | Region | Type | Size | Pop (k) | Level | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CGY | Calgary | Div. 6 | metro | 5 | 1591 | calgary | Calgary International |
| CNM | Canmore | Div. 14 & 15 | mountain | 1 | 66 | calgary | biggest town of the merge (15,990; Hinton 9,817, Edson 8,374, Banff 8,305) |
| RDR | Red Deer | Div. 8 & 9 | farm | 2 | 234 | calgary | central Alberta's farm city, between the two metros |
| STM | Strathmore | Div. 5 | farm | 1 | 56 | calgary | biggest town (14,339; Drumheller 7,909 is a scenic town) |
| LET | Lethbridge | Div. 2 & 3 | farm | 2 | 219 | south | southern Alberta's irrigated farms |
| MHT | Medicine Hat | Div. 1 | desert | 1 | 83 | south | Palliser's Triangle, the dry short-grass southeast (like BC's Kamloops) |
| WAI | Wainwright | Div. 4 & 7 | farm | 1 | 50 | south | biggest town (6,606); Stettler (5,695) is more central but smaller |
| EDM | Edmonton | Div. 11 | metro | 5 | 1462 | central | Edmonton International |
| LLD | Lloydminster | Div. 10 | farm | 1 | 95 | central | **placed by hand**, see below |
| WCT | Whitecourt | Div. 13 | mountain | 1 | 68 | central | forestry town in wooded hills |
| CLD | Cold Lake | Div. 12 | farm | 1 | 67 | central | the Lakeland's farms (Bonnyville, St. Paul) |
| GPR | Grande Prairie | Div. 18 & 19 | farm | 2 | 134 | north | the Peace River country's grain farms |
| SLK | Slave Lake | Div. 17 | mountain | 1 | 62 | north | boreal forest on Lesser Slave Lake |
| FMM | Fort McMurray | Div. 16 | metro | 2 | 75 | north | **exception**, see below |

- **Fort McMurray** is the station for "Wood Buffalo area". The Regional Municipality of Wood Buffalo (72,326) isn't a town; Fort McMurray is its city (population centre 68,002). It is metro, like BC's Prince George: the north's only big city, and a destination for produce and trucks.
- **Lloydminster** straddles the Saskatchewan border at 110°W. Its `places.json` point (53.278, -109.9803) is on the Saskatchewan side, and its 31,582 counts the whole two-province population centre. The station sits on the Alberta side of the city (53.28, -110.02). It is still the region's biggest town: the build tool names Division 10 from Statistics Canada's municipality table, which counts only "Lloydminster (Part)", the Alberta part. Camrose (18,772) is next, and is a town.
- **Types.** "Mountain" is the game's type for forested hill country, as BC uses it for Fort Nelson and Mackenzie. Here it covers Whitecourt, Slave Lake and the boreal and foothill towns. Lethbridge and Red Deer are farm, not metro, so trips from Calgary and Edmonton to them have riders.
- **Sizes.** Calgary (1,591k) is just over the guide's 1.5 million for a 5. Edmonton (1,462k) is just under it, but it is the capital and Calgary's near-equal, so it is also a 5 (Portland, at 815k, is a 5). Unsure: 4 would fit the guide too; Sacramento, at 1,585k, is a 4. Red Deer, Lethbridge, Grande Prairie (like Kamloops at 144k) and Fort McMurray (like Prince George) are 2.
- **Airports:** only Calgary International and Edmonton International. **Ports:** none (no sea).
- **Ids:** all 38 were checked unique against every pack. CAL is taken, so Calgary is CGY.

### Towns (24, about 1.7 per region)

| Region | Towns |
| --- | --- |
| Calgary (Div. 6) | Airdrie (metro 2); Okotoks (metro) |
| Canmore (Div. 14 & 15) | Banff (scenic, mountain 2); Lake Louise (scenic); Jasper (scenic); Hinton |
| Red Deer (Div. 8 & 9) | Rocky Mountain House (mountain) |
| Edmonton (Div. 11) | St. Albert (metro 2); Wetaskiwin (farm) |
| Lethbridge (Div. 2 & 3) | Brooks (farm); Waterton Lakes (scenic, mountain); Dinosaur Provincial Park (scenic, desert) |
| Medicine Hat (Div. 1) | Cypress Hills (scenic, mountain) |
| Wainwright (Div. 4 & 7) | Stettler (farm); Hanna (desert) |
| Strathmore (Div. 5) | Drumheller (scenic, desert) |
| Lloydminster (Div. 10) | Camrose (farm) |
| Cold Lake (Div. 12) | Lac La Biche (mountain) |
| Whitecourt (Div. 13) | Athabasca (farm) |
| Wood Buffalo (Div. 16) | Fort Chipewyan (mountain) |
| Slave Lake (Div. 17) | High Prairie (farm); High Level (farm) |
| Grande Prairie (Div. 18 & 19) | Peace River (farm); Grande Cache (mountain) |

Towns are size 1 unless shown, and their coordinates come from `places.json`, except where noted below.

Scenic places, and where they sit:
- **Banff and Lake Louise:** the town and the GNDB locality (Banff and Lake Louise, Banff National Park).
- **Jasper:** at the Jasper Park Information Centre National Historic Site (`parks.json`, 52.8772, -118.0803), in the townsite. `places.json`'s Jasper point (52.89, -118.17) is the municipality's point, about 4 miles west of the townsite.
- **Waterton Lakes:** at Waterton Park (GNDB, 49.05, -113.91), the townsite of Waterton Lakes National Park.
- **Dinosaur Provincial Park** (UNESCO World Heritage Site): at Wikipedia's point (50°45′42″N 111°29′06″W). `parks.json`'s point (50.7833, -111.5) falls on the Wainwright side of the map's border. Wikipedia puts the park in the County of Newell (Division 2), 48 km northeast of Brooks.
- **Drumheller:** the Royal Tyrrell Museum and the Red Deer River badlands. It is desert, like the park.
- **Cypress Hills:** at Elkwater (GNDB, 49.66, -110.28), the townsite of Cypress Hills Interprovincial Park (`parks.json`, 49.63, -110.21).

Other choices:
- **Hanna is desert:** the Special Areas are the driest part of the merge.
- **Lac La Biche** has no population in `places.json`; it is a hamlet of Lac La Biche County. It is there as a step on the road and rail route from Edmonton toward Fort McMurray.
- **Fort Chipewyan** (Alberta's oldest settlement, on Lake Athabasca) was moved 0.02° west along the shore (from -111.16 to -111.18, under a mile). From the GNDB point, a line from Fort McMurray crosses 2.3 miles of a bay of the lake, and Tough blocks new bridges over 2 miles. In reality it has no all-season road.
- **Left out to stay near 1.5 per region:** Cochrane, Olds, Lacombe, Sylvan Lake, Leduc, Drayton Valley, Edson, Crowsnest Pass, Pincher Creek, Taber, Vegreville, St. Paul, Bonnyville, Westlock and Valleyview.

### Passes (4)

The checker found mountains near every one (0 warnings). Kicking Horse, Yellowhead and Crowsnest passes, on the border, are in BC's pack and aren't repeated here.

| Entry | Where | Source |
| --- | --- | --- |
| Bow Valley (the Gap) | Exshaw (GNDB, 51.0617, -115.1628) | **Valley route.** The CPR and Highway 1 enter the Rockies up the Bow Valley (well known). Without it, Calgary–Canmore is an 11-mile tunnel |
| Athabasca River valley | Pocahontas (GNDB, 53.205, -117.9261) | **Valley route.** CN and Highway 16 from Hinton to Jasper (well known). Without it, Hinton–Jasper was a 24-mile tunnel, blocked in Tough |
| Bow Summit | 51.72, -116.49 | Wikipedia (Icefields Parkway): the parkway's highest point, 2,070 m |
| Sunwapta Pass | 52.21, -117.16 | Wikipedia (Sunwapta Pass): 52°12′50″N 117°09′34″W, on the Icefields Parkway at the Banff–Jasper park boundary |

**Not used:** GNDB's "Gap" locality (51.05, -115.27). It is only 4 miles from Canmore. A pass there turned every mountain line out of Canmore into a pass crossing in Tough, even Canmore–Cranbrook straight over 81 miles of the Rockies. At Exshaw (9 miles out) Tough still blocks those lines, and Banff–Canmore is an 11-mile tunnel, which Tough allows.

### Bridges (6)

| Bridge | Point | Source |
| --- | --- | --- |
| Centre Street Bridge (Calgary) | 51.05, -114.06 | Wikipedia: the Bow, 1916, 51.0529, -114.0626. On the map, the Bow at Calgary is part of the "South Saskatchewan" river line |
| High Level Bridge (Edmonton) | 53.53, -113.51 | Wikipedia: the North Saskatchewan, 1913, 53.5306, -113.5107 |
| South Saskatchewan River bridge (Medicine Hat) | 50.04, -110.68 | the CPR main line and Highway 1 cross the river in the city (well known); approximate |
| Peace River bridge (Peace River) | 56.23, -117.32 | Highway 2 and the railway cross the Peace at the town (well known); approximate, between the town and the map's river, so Grande Prairie–Peace River uses it |
| Athabasca River bridge (Athabasca) | 54.74, -113.28 | the town's bridge over the Athabasca; approximate, on the map's river |
| Athabasca River bridge (Fort McMurray) | 56.73, -111.41 | Highway 63 crosses the Athabasca at Fort McMurray (well known); approximate, on the map's river |

**Left out:**
- **The Oldman at Lethbridge** (the Lethbridge Viaduct) and **the Red Deer at Red Deer**. In `terrain.js`, the Oldman line covers only its upper reach (49.89–50.11°N, 114.4–114.7°W) and the Red Deer only its mountain headwaters (51.5–51.7°N, 115.6–116.0°W). The nearest river on the map is 45 miles from Lethbridge and 26 miles from Red Deer (and 46 from Drumheller). These bridges would do nothing and would trip the checker's "far from water" warning, as BC found with the lower Fraser. To add them, extend those rivers in `RIVERS` in `tools/build-terrain.js` first.
- **The Dunvegan Bridge** (the Peace, Highway 2): Grande Prairie–High Level crosses the map's Peace 7 miles from it, so it would do nothing.

### Biomes

- **wooded:** the Rockies and foothills (Div. 14 & 15; Div. 8 & 9, with Clearwater County's foothills) and the boreal north (Div. 12, 13, 16, 17, 18 & 19).
  - Div. 18 & 19 is wooded although BC leaves its Peace River country as farmland. Greenview's forested foothills are a large part of it, and "wooded" puts trees only on the hills, so the Peace farmland flats stay green.
- **dry:** Div. 1 (Medicine Hat), the heart of Palliser's Triangle.
- **farmland (not listed):** Calgary, Edmonton, Strathmore, Lloydminster, and two that are partly dry:
  - Lethbridge (Div. 2 & 3), with irrigated farms and Waterton's mountains.
  - Wainwright (Div. 4 & 7), half parkland.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| 1. Calgary & the Rockies | calgary | CGY, CNM, RDR, STM | 50 passengers, 5 counties, connect CGY–CNM |
| 2. Southern Alberta | south | LET, MHT, WAI | 140 passengers, connect CGY–LET, 25 produce |
| 3. Edmonton & the Parkland | central | EDM, LLD, WCT, CLD | 280 passengers, connect CGY–EDM, one high-speed train |
| 4. The North | north | GPR, SLK, FMM | 450 passengers, connect EDM–FMM, 30 trucks (from the mountain-type northern towns to Edmonton and Fort McMurray) |

Every level's regions touch an earlier level's. There are no containers goals because Alberta has no port.

### How the map plays

Checked with `NR.segmentGeo` / `NR.blockedReason`, loading the game as `tools/check-pack.js` does plus `js/geography.js`, in both modes. The links tested are every main station to its neighbours' main stations (BC's included), and every town to its 3 nearest places.

- **Main stations:**
  - Every one can be joined to at least two neighbouring main stations in **both** Gentle and Tough. Calgary, Red Deer, Lethbridge, Medicine Hat, Cold Lake, Grande Prairie, Slave Lake and Fort McMurray lose none in Tough.
  - Of 37 main-station links, 28 are open in both modes, 5 only in Gentle (Canmore–Whitecourt, Canmore–Cranbrook, Canmore–Fort St. John, Strathmore–Wainwright, Edmonton–Lloydminster) and 4 in neither: Canmore–Grande Prairie, Canmore–Salmon Arm and Canmore–Prince George (straight over the Rockies), and Slave Lake–Fort St. John (across Lesser Slave Lake).
- **Towns:** of 72 town links, 64 are open in both modes, 5 only in Gentle and 3 in neither (Waterton–Fernie, Grande Cache–Mount Robson, Fort Chipewyan–High Level). Every town has an open link in both modes, but two have only one in Tough: Waterton Lakes (only Lethbridge) and Fort Chipewyan (only Fort McMurray).
- **Into BC, in both modes:**
  - Lake Louise to Golden and Field (Kicking Horse Pass)
  - Jasper to Mount Robson (Yellowhead Pass)
  - Lethbridge to Cranbrook (Crowsnest Pass)
  - Grande Prairie to Dawson Creek and Fort St. John
- **Tough blocks across lakes:** Sullivan Lake (Strathmore–Wainwright), Beaverhill Lake (Edmonton–Lloydminster), Buffalo Lake (Stettler–Wetaskiwin) and Lac la Biche (Lac La Biche–Fort McMurray). Each has an open way around.
