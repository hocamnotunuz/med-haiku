# Montana (MT) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list is applied, giving 29 regions. The pack is built on it (phase 2, below). The corner-only neighbours found below stay for now; no link relies on them.

Populations: `packs/MT/raw/counties.json` and `packs/MT/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 1,084,244). Every group is connected through `neighbors` (checked: each member borders another member). Roads, rivers and railways named are well known unless marked "(moderately known)".

### Recommended (56 → 29 regions)

```
merge: [["Mineral", "Sanders"], ["Deer Lodge", "Granite", "Powell"], ["Beaverhead", "Jefferson", "Madison"], ["Broadwater", "Meagher"], ["Park", "Sweet Grass"], ["Carbon", "Stillwater"], ["Golden Valley", "Musselshell", "Wheatland"], ["Fergus", "Judith Basin", "Petroleum"], ["Glacier", "Liberty", "Toole"], ["Pondera", "Teton"], ["Chouteau", "Hill"], ["Blaine", "Phillips"], ["Roosevelt", "Valley"], ["Daniels", "Sheridan"], ["Garfield", "McCone", "Richland"], ["Dawson", "Prairie", "Wibaux"], ["Carter", "Fallon"], ["Custer", "Powder River"], ["Big Horn", "Rosebud", "Treasure"]]
```

No `names` needed: the automatic names read well ("Deer Lodge-Granite-Powell County" holds both Deer Lodge County and the town of Deer Lodge).

Alone, over 50k: Yellowstone (Billings 117,150), Gallatin (Bozeman 53,542), Missoula (Missoula 74,131), Flathead (Kalispell 24,737), Cascade (Great Falls 60,473), Lewis and Clark (Helena 32,101).

Alone, under 50k (exceptions):
- **Ravalli** 44,171, Hamilton (4,692): the Bitterroot Valley on US-93, walled in by the Bitterroot and Sapphire ranges; its small neighbours (Granite, Deer Lodge, Beaverhead) are all over the mountains.
- **Silver Bow** 35,132, Butte (34,496): Montana's fifth city, bigger than Helena and Kalispell, at the I-15/I-90 junction on the Continental Divide (Homestake Pass east, Elk Park north).
- **Lake** 31,142, Polson (5,147): the Mission Valley and Flathead Lake on US-93 between Missoula and Kalispell. Its only small neighbour, Sanders, is needed by Mineral.
- **Lincoln** 19,672, Libby (2,779): the Kootenai valley, US-2 and the BNSF Hi-Line from Idaho through Troy and Libby. Its only small neighbour, Sanders, is in the Clark Fork valley across the Cabinet Mountains.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Mineral + Sanders | Lower Clark Fork: I-90 at Superior and St. Regis; the old Northern Pacific through Plains and Thompson Falls (MT-135 links them, moderately known) | Thompson Falls (1,334) | 16,929 |
| Deer Lodge + Granite + Powell | Head of the Clark Fork: Anaconda, the Deer Lodge Valley and I-90 to Garrison and Drummond; Philipsburg's Flint Creek valley (MT-1, moderately known) | Anaconda (9,424; the Census place is the whole consolidated county) | 19,679 |
| Beaverhead + Jefferson + Madison | The Jefferson River and its forks: Dillon on I-15, Twin Bridges, Whitehall, the Boulder River, the Madison valley (Ennis) | Dillon (3,878) | 30,083 |
| Broadwater + Meagher | US-12 from Townsend (Missouri, Canyon Ferry) to White Sulphur Springs | Townsend (1,804) | 8,699 |
| Park + Sweet Grass | Upper Yellowstone: Gardiner, Paradise Valley, Livingston; I-90 and the old NP east to Big Timber | Livingston (8,454) | 20,867 |
| Carbon + Stillwater | Beartooth Front: Red Lodge, Absarokee, Columbus on I-90 (MT-78, moderately known) | Red Lodge (2,257); Columbus (1,860) is on the railway | 19,435 |
| Golden Valley + Musselshell + Wheatland | Musselshell River valley on US-12 and the old Milwaukee Road: Harlowton, Ryegate, Roundup | Roundup (1,743) | 7,631 |
| Fergus + Judith Basin + Petroleum | The Judith Basin (US-87 Stanford to Lewistown) and MT-200 east to Winnett | Lewistown (5,955) | 13,958 |
| Glacier + Liberty + Toole | Hi-Line west: Browning, Cut Bank, Shelby, Chester; I-15 to the Sweetgrass crossing | Shelby (3,173); Cut Bank (3,064) is nearly tied | 20,708 |
| Pondera + Teton | Rocky Mountain Front farms: US-89 at Choteau, I-15 at Conrad, Valier | Conrad (2,319) | 12,129 |
| Chouteau + Hill | US-87 from Havre via Big Sandy to Fort Benton on the Missouri | Havre (9,359) | 22,209 |
| Blaine + Phillips | Milk River and the Hi-Line: Harlem, Chinook, Malta; Fort Belknap reservation spans both | Malta (1,860) | 11,264 |
| Roosevelt + Valley | Hi-Line east: Glasgow, Nashua, Wolf Point, Poplar, Culbertson; Fort Peck reservation and dam | Glasgow (3,201); Wolf Point (2,635) | 18,374 |
| Daniels + Sheridan | Border wheat country: Scobey to Plentywood (MT-5, moderately known) | Plentywood (1,671) | 5,203 |
| Garfield + McCone + Richland | MT-200 across the Big Open: Jordan, Circle, Sidney on the lower Yellowstone (moderately known) | Sidney (6,344) | 14,392 |
| Dawson + Prairie + Wibaux | I-94 and the old NP down the Yellowstone: Terry, Glendive, Wibaux to North Dakota | Glendive (4,874) | 10,972 |
| Carter + Fallon | Southeast corner: Baker to Ekalaka (MT-7, moderately known) | Baker (1,799) | 4,460 |
| Custer + Powder River | Miles City on I-94 and MT-59 south to Broadus (moderately known) | Miles City (8,362) | 13,566 |
| Big Horn + Rosebud + Treasure | Crow and Northern Cheyenne reservations (US-212), Hardin on I-90, Colstrip, I-94 via Hysham and Forsyth | Hardin (3,820) | 22,220 |

The Hi-Line stays a clean chain of regions: Lincoln, Flathead, Glacier-Liberty-Toole, Chouteau-Hill, Blaine-Phillips, Roosevelt-Valley, then North Dakota. So does the old Northern Pacific / I-90 / I-94: Missoula, Deer Lodge-Granite-Powell (Garrison), Lewis and Clark, Broadwater-Meagher, Gallatin, Park-Sweet Grass, Carbon-Stillwater (Columbus), Yellowstone, Big Horn-Rosebud-Treasure, Custer-Powder River, Dawson-Prairie-Wibaux.

Rejected:
- Custer + Garfield (MT-59 to Jordan): they touch for only about 2 km (see the map check).
- Lake + Sanders (43,540): leaves Mineral alone; Lake faces Missoula and Kalispell.
- Jefferson + Broadwater: the Elkhorn Mountains lie between Boulder and Townsend.
- Dawson + Richland (lower Yellowstone): Sidney (6,344) would take Glendive's station.

### Alternative (28 regions)

Same list, but `["Lincoln", "Mineral", "Sanders"]` (36,601; Libby) instead of Lincoln alone and Mineral + Sanders, and `["Deer Lodge", "Silver Bow"]` (44,556; Butte) plus `["Granite", "Powell"]` (10,255; Deer Lodge) instead of Silver Bow alone and Deer Lodge + Granite + Powell.
- Pro: one region fewer, and only Ravalli and Lake stay alone under 50k; Butte and Anaconda were one mining and smelting district.
- Con: Libby and Superior are in different valleys with the Cabinet Mountains between; Anaconda loses its station, the Deer Lodge Valley is split, and the town of Deer Lodge sits outside the region named "Deer Lodge" (it is in Powell County).

### Map and data check

1. **The map looks right.** All 497 places lie inside their tagged county, every label is inside its county, and every county is one piece. County areas are close to the real ones (Beaverhead about 5,540 sq mi, Phillips about 5,180). Gallatin and Park include their parts of Yellowstone National Park (West Yellowstone is in Gallatin, Gardiner in Park). Neighbours agree on both sides with the `id-`, `bc-`, `ab-` and `sk-` regions.
2. **Corner-only neighbours.** Inside Montana, Custer–Garfield share about 2 km and Deer Lodge–Ravalli under 1 km (Census topology; both listed). Across the border the tool's 0.03° tolerance adds four corner contacts: Glacier–`bc-east-kootenay` and Flathead–`ab-division-no-2-3` (they meet only at the BC/Alberta/Montana corner), Lincoln–`bc-central-kootenay-kootenay-boundary` (about 1.5 km), and Valley–`sk-division-no-4-8`, which do not touch at all (a 2.3 km gap; Phillips is in between). Harmless for the merges; the last one is a false neighbour for unlocking.
3. **Missing neighbours (expected, until those states arrive):** Wyoming: Gallatin, Park, Carbon, Big Horn, Powder River, Carter. North Dakota: Sheridan, Roosevelt, Richland, Wibaux, Fallon. South Dakota: Carter (and Fallon for a few km).
4. **Places without population:** all 369 are CDPs (for example Lockwood, Evergreen, Big Sky, Montana City, Lame Deer, Crow Agency, Gardiner). No main-station choice depends on them.
5. **Names:** the Census calls Butte "Butte-Silver Bow (balance)" and Anaconda "Anaconda-Deer Lodge County"; show them as "Butte" and "Anaconda". The town of Choteau (Teton County) is not in Chouteau County (spelled differently).

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/MT/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` points rounded to 2 decimals, except the four moves listed below.
- **Facts added by hand** (passes, bridges, scenic places, airports, roads and railways) are well known unless marked "approx." (a point I gave from memory, within about a mile or two) or "from memory".
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough, the game loaded as `tools/check-pack.js` loads it plus `js/geography.js`, with every pack's map and terrain.

### Start

`start: ["mt-yellowstone", "mt-big-horn-rosebud-treasure", "mt-carbon-stillwater"]`: Billings, Hardin and Red Lodge. All three touch each other.
- **Types:** metro, farm and mountain.
- **First track:** the hint pairs Billings with Hardin (49 mi on the pack test's line, open in both modes), metro to farm. The pack test laid it and passengers arrived.
- **Considered:** Golden Valley-Musselshell-Wheatland (Roundup, desert) instead of Carbon-Stillwater. Red Lodge was kept: the Beartooth front is the classic Billings side trip, and it gives a mountain station for trucks later.

### Main stations (29)

Every station is at its region's biggest place in `places.json`. Each id is unused in every other pack (the checker checks).

**Sizes** follow the PACKS.md guide (Carson City is 2 at 59k, Prince George 2 at 97k): **2** for the six regions over 50k (Billings 165k, Bozeman 119k, Missoula 118k, Kalispell 104k, Great Falls 84k, Helena 71k), **1** for the rest (Butte at 35k included).

**Types:** 5 metro, 8 mountain, 12 farm, 4 desert. Eastern Montana's driest rangeland stations are desert, as Saskatchewan types Swift Current and Alberta Medicine Hat across the border.

| Station | Region, pop | Type, size | Why |
| --- | --- | --- | --- |
| Billings (BIL) | Yellowstone, 165k | metro 2 | Montana's biggest city. **Moved** to downtown (45.78, -108.50, well known); the Census point (45.79, -108.55) is 2.4 mi west |
| Hardin (HRD) | Big Horn-Rosebud-Treasure, 22k | farm 1 | Biggest (3,820; Colstrip 2,097). The Bighorn valley's irrigated farms and the Crow Reservation's ranches |
| Red Lodge (RLG) | Carbon-Stillwater, 19k | mountain 1 | Biggest (2,257; Columbus 1,860). Under the Beartooths, at the start of the Beartooth Highway |
| Roundup (RND) | Golden Valley-Musselshell-Wheatland, 8k | desert 1 | Biggest (1,743; Harlowton 958). Dry rangeland and pine breaks on the Musselshell |
| Lewistown (LWT) | Fergus-Judith Basin-Petroleum, 14k | farm 1 | The Judith Basin's wheat |
| Livingston (LVS) | Park-Sweet Grass, 21k | mountain 1 | The Paradise Valley, on the way to Yellowstone's north gate |
| Miles City (MLS) | Custer-Powder River, 14k | desert 1 | Sagebrush rangeland ("the Cow Capital", well known) |
| Glendive (GDV) | Dawson-Prairie-Wibaux, 11k | desert 1 | Badlands (Makoshika State Park is at its edge, well known) |
| Baker (BKR) | Carter-Fallon, 4k | desert 1 | Dry southeast corner |
| Sidney (SID) | Garfield-McCone-Richland, 14k | farm 1 | The Lower Yellowstone's irrigated farms (sugar beets) |
| Glasgow (GGW) | Roosevelt-Valley, 18k | farm 1 | Biggest (3,201; Wolf Point 2,635). Hi-Line wheat |
| Plentywood (PWD) | Daniels-Sheridan, 5k | farm 1 | Biggest (1,671). Border wheat country |
| Malta (MTA) | Blaine-Phillips, 11k | farm 1 | Biggest (1,860; Chinook 1,182). The Milk River's farms. MAL and MLT are taken |
| Bozeman (BZN) | Gallatin, 119k | metro 2 | Montana State University and the state's fastest-growing city. **Airport:** Bozeman Yellowstone International |
| Butte (BTE) | Silver Bow, 35k | metro 1 | Montana's fifth city. **Moved** to Uptown Butte (46.00, -112.53, well known): the Census place "Butte-Silver Bow (balance)" is the whole consolidated city-county, and its point (45.90, -112.66) is 9.5 mi southwest in the hills |
| Helena (HLN) | Lewis and Clark, 71k | mountain 2 | The capital, in the mountains (as Nevada types Carson City) |
| Anaconda (ACD) | Deer Lodge-Granite-Powell, 20k | mountain 1 | Biggest. **Moved** to downtown (46.13, -112.95, well known): the Census place "Anaconda-Deer Lodge County" is the whole consolidated county (its 9,424 is the county's population), and its point (46.09, -113.14) is 9 mi west in the Pintlers |
| Dillon (DIL) | Beaverhead-Jefferson-Madison, 30k | farm 1 | Biggest (3,878). The Beaverhead valley's ranches |
| Townsend (TNS) | Broadwater-Meagher, 9k | farm 1 | Biggest (1,804). The Missouri valley's farms below Canyon Ferry |
| Missoula (MSO) | Missoula, 118k | metro 2 | The University of Montana. **Moved** to downtown on the Clark Fork (46.87, -113.99, well known); the Census point (46.87, -114.03) is 1.9 mi west. **Airport:** Missoula Montana Airport |
| Hamilton (HMT) | Ravalli, 44k | mountain 1 | The Bitterroot valley. HAM is taken |
| Great Falls (GTF) | Cascade, 84k | metro 2 | Montana's third city, with Malmstrom Air Force Base |
| Kalispell (KSP) | Flathead, 104k | mountain 2 | The Flathead Valley, Glacier's gateway (as Oregon types Bend). Census point kept: downtown is 1.6 mi away |
| Polson (POL) | Lake, 31k | farm 1 | The Mission Valley's farms, at the foot of Flathead Lake |
| Libby (LBY) | Lincoln, 20k | mountain 1 | On the Kootenai, US-2 and the Hi-Line |
| Thompson Falls (THF) | Mineral-Sanders, 17k | mountain 1 | Biggest (1,334; Plains 1,106) |
| Shelby (SLB) | Glacier-Liberty-Toole, 21k | farm 1 | Biggest (3,173; Cut Bank 3,064). Where I-15 crosses the Hi-Line; Golden Triangle wheat |
| Conrad (CNR) | Pondera-Teton, 12k | farm 1 | Biggest (2,319; Choteau 1,724) |
| Havre (HVR) | Chouteau-Hill, 22k | farm 1 | The Hi-Line's hub |

**Airports: Bozeman and Missoula.** The bar the other packs use is about 1 million passengers a year (Redmond and Rogue Valley in Oregon are in; Idaho Falls, Pasco and Bellingham are out; Moncton, about 0.7 million, is the smallest in the game).
- Bozeman Yellowstone International is Montana's busiest airport, well over 2 million (well known).
- Missoula is about 1.1–1.2 million (from memory).
- **Left out, near the bar (from memory, about 0.9–1.0 million each):** Billings Logan International and Glacier Park International (Kalispell). If the main agent wants them, add `airport: "Billings Logan International"` to BIL and `airport: "Glacier Park International"` to KSP. Great Falls and Helena are well below it.
- **Ports:** none.

### Towns (51: 42 towns and 9 scenic places)

Every town is inside its region. The checker gives no spacing warnings: the closest pair of places is Whitefish and Columbia Falls, 8.8 mi apart. Populations are from `places.json` (CDPs have none).

| Region | Towns |
| --- | --- |
| Yellowstone | Laurel (7,220); **Pompeys Pillar** (scenic) |
| Big Horn-Rosebud-Treasure | **Little Bighorn Battlefield** (scenic); Forsyth (1,654, on I-94); Colstrip (2,097, desert: the coal town) |
| Carbon-Stillwater | Columbus (1,860, on I-90) |
| Golden Valley-Musselshell-Wheatland | Harlowton (958) |
| Fergus-Judith Basin-Petroleum | Stanford (395, on US-87 toward Great Falls); Winnett (186, desert, on MT-200 toward Jordan) |
| Park-Sweet Grass | Big Timber (1,644, on I-90); **Gardiner** (scenic) |
| Dawson-Prairie-Wibaux | Terry (563, desert); Wibaux (460), both on I-94 |
| Carter-Fallon | Ekalaka (402, desert) |
| Custer-Powder River | Broadus (458, desert) |
| Garfield-McCone-Richland | Circle (589); Jordan (354, desert) |
| Roosevelt-Valley | Wolf Point (2,635); Culbertson (751); **Fort Peck** (240, scenic) |
| Daniels-Sheridan | Scobey (998) |
| Blaine-Phillips | Chinook (1,182) |
| Gallatin | Three Forks (1,984); **West Yellowstone** (1,273, scenic); **Big Sky** (scenic) |
| Beaverhead-Jefferson-Madison | Whitehall (1,003, on I-90); Ennis (919); **Virginia City** (218, scenic) |
| Deer Lodge-Granite-Powell | Deer Lodge (3,030); Philipsburg (839) |
| Cascade | Cascade (596, on I-15) |
| Lewis and Clark | Lincoln (on MT-200, toward Rogers Pass) |
| Missoula | Seeley Lake (MT-83) |
| Broadwater-Meagher | White Sulphur Springs (950) |
| Ravalli | Stevensville (2,004); Darby (784, on US-93 toward Lost Trail Pass) |
| Flathead | Whitefish (7,754); Columbia Falls (5,318); **West Glacier** (scenic) |
| Lake | Ronan (1,962); Elmo (see below) |
| Lincoln | Eureka (1,384); Troy (798) |
| Mineral-Sanders | Superior (828, on I-90); Plains (1,106) |
| Pondera-Teton | Choteau (1,724) |
| Glacier-Liberty-Toole | Cut Bank (3,064); East Glacier Park (see below); Chester (845); **St. Mary** (scenic) |
| Chouteau-Hill | Fort Benton (1,460) |
| Silver Bow | none: Walkerville (636) is 3 mi from Uptown Butte |

**Scenic places** (all well known). Points are the place's Census point unless marked approx.

| Place | Point | What it is |
| --- | --- | --- |
| Pompeys Pillar | 45.99, -108.00 approx. | Pompeys Pillar National Monument: the sandstone butte on the Yellowstone that William Clark signed in 1806 |
| Little Bighorn Battlefield | 45.57, -107.43 approx. | Little Bighorn Battlefield National Monument (1876), at the visitor center by Crow Agency on I-90 |
| Gardiner | 45.05, -110.74 | Yellowstone's north entrance (the Roosevelt Arch), at the top of the Paradise Valley on US-89 |
| West Yellowstone | 44.66, -111.10 | Yellowstone's west entrance |
| Big Sky | 45.26, -111.33 | Big Sky Resort, up the Gallatin Canyon on US-191. The point is the Census place (Meadow Village); the ski area itself is in Madison County, in another region |
| Virginia City | 45.30, -111.94 | The 1863 gold-rush town, kept as a historic town (a National Historic Landmark district) |
| Fort Peck | 48.01, -106.46 | Fort Peck Dam (one of the world's largest earthfill dams, built in the 1930s) and Fort Peck Lake |
| West Glacier | 48.49, -113.99 | Glacier National Park's west entrance and the west end of the Going-to-the-Sun Road |
| St. Mary | 48.74, -113.43 | Glacier's east entrance and the Going-to-the-Sun Road's east end |

**Kept for reachability:**
- **Elmo** (a CDP, no population). It is on US-93 on Flathead Lake's west shore, where MT-28 turns off to Hot Springs and Plains. The straight lines Polson–Kalispell, Ronan–Kalispell and Missoula–Kalispell cross 3 mi of the map's lake (Big Arm Bay), which is blocked in Tough, and there is no real bridge across the lake. Elmo links to both Polson and Kalispell in both modes, so US-93 works as a chain.
- **East Glacier Park** (a CDP), instead of Browning (1,017). It is Glacier's southeast gate (Glacier Park Lodge, Two Medicine) and the Empire Builder's stop below Marias Pass. Its lines to Kalispell, Whitefish and Columbia Falls go over Marias Pass in Tough. A line from Kalispell to Browning runs 10 mi north of the pass, more than Tough's 9, and is blocked.

**Left out:**
- **Too close to a main station:** Belgrade (8 mi from Bozeman, kept out to hold the count down), East Helena (4.7 mi from Helena), Walkerville, Makoshika State Park (at Glendive's edge).
- **Cut to keep about 1.75 towns per region:** Drummond, Big Sandy, St. Ignatius and Boulder. Each was tested: the direct lines they would bridge are open in both modes (Missoula–Deer Lodge, Havre–Fort Benton, Missoula–Ronan, Butte–Helena).
- **Browning:** see East Glacier Park.

### Passes (15) and bridges (16)

The checker gives no warnings: every pass has mountains within ~7 mi and every bridge is within 3 mi of a river or lake on the map. Lookout, Lolo, Lost Trail, Monida and Targhee passes on the Idaho line are in Idaho's pack and work for Montana too; I didn't repeat them.

Several western Montana valleys are narrower than the map's 3-mile mountain cells, so towns like Thompson Falls, Plains and Superior sit in "mountains". As Idaho and Alberta do, the river routes get a pass named after the river and the road, at a real point on them.

| Pass | Point | Source | What uses it |
| --- | --- | --- | --- |
| Marias Pass | 48.32, -113.35 | US-2 and the BNSF Hi-Line over the Continental Divide (well known) | Kalispell–Shelby, Kalispell–Cut Bank, and Kalispell, Whitefish and Columbia Falls to East Glacier Park: all blocked in Tough without it |
| Logan Pass | 48.70, -113.72 | The Going-to-the-Sun Road (well known) | West Glacier–St. Mary (29 mi of mountains, blocked in Tough before) |
| Kootenai River (US-2) | 48.55, -115.97 approx. | US-2 and the Hi-Line follow the Kootenai from Troy past the Yaak River's mouth into Idaho (well known route; the point is approx.) | Troy–Bonners Ferry and Libby–Bonners Ferry (blocked in Tough before) |
| Kootenai River (MT-37) | 48.41, -115.31 approx. | MT-37 follows the Kootenai from Libby up to Libby Dam and Lake Koocanusa, toward Eureka (Libby Dam is well known). The relocated Hi-Line also follows the river above Libby before turning toward the Flathead Tunnel (from memory) | Libby–Kalispell and Libby–Whitefish (16 mi of mountains, just over Tough's 15) |
| Clark Fork River (MT-200) | 47.39, -114.80 approx. | MT-200 and the old Northern Pacific main line follow the Clark Fork from Paradise through Plains to Thompson Falls (well known) | Thompson Falls–Missoula, Plains–Missoula and Plains–Superior (by MT-135; all blocked in Tough before); Kalispell, Polson and Ronan to Superior |
| Alberton Gorge | 47.02, -114.57 approx. | I-90 and the Clark Fork between Alberton and Superior (the whitewater gorge, well known) | Superior–Missoula (27 mi of mountains, blocked in Tough before) and Superior–Stevensville |
| Hellgate Canyon | 46.86, -113.93 approx. | Where I-90 and the Clark Fork enter Missoula from the east (well known) | Missoula–Deer Lodge, –Philipsburg, –Anaconda and –Seeley Lake (blocked in Tough before) |
| MacDonald Pass | 46.56, -112.31 | US-12 over the Continental Divide west of Helena (well known) | Helena–Deer Lodge and Helena–Anaconda (Philipsburg too in Tough). Already open; the pass makes them climbs rather than short tunnels |
| Mullan Pass | 46.65, -112.32 approx. | The Northern Pacific main line (now Montana Rail Link/BNSF) from Helena over the Divide to Garrison (well known in railway history) | Helena–Lincoln, Helena–Seeley Lake, Deer Lodge–Cascade: the lines just north of MacDonald's |
| Rogers Pass | 47.08, -112.37 | MT-200 over the Divide between Lincoln and Great Falls (well known for the lower 48's record low, −70°F in 1954) | Lincoln–Great Falls and Lincoln–Cascade |
| Homestake Pass | 45.92, -112.41 | I-90 over the Divide east of Butte (well known) | Butte–Helena, Butte–Townsend, Butte–Ennis, Anaconda–Three Forks; Butte–Three Forks and Butte–Dillon in Tough. (Butte–Whitehall is open without it: the map has only hills there) |
| Bozeman Pass | 45.66, -110.80 | I-90 and the old Northern Pacific between Bozeman and Livingston (well known) | Livingston–Three Forks, Livingston–Townsend, Bozeman–Big Timber, Bozeman–Harlowton. (Bozeman–Livingston itself is open without it: 23 mi of hills on the map) |
| Gallatin Canyon | 45.42, -111.22 approx. | US-191 up the Gallatin River to Big Sky and West Yellowstone (well known) | Bozeman–Big Sky (22 mi of mountains, blocked in Tough before), Bozeman–West Yellowstone, Three Forks–Big Sky. Big Sky–West Yellowstone uses Idaho's Targhee Pass |
| Yankee Jim Canyon | 45.18, -110.85 approx. | US-89 and the Yellowstone River between the Paradise Valley and Gardiner (well known locally) | Livingston–Gardiner and Bozeman–Gardiner (blocked in Tough before) |
| Kings Hill Pass | 46.84, -110.70 approx. | US-89 over the Little Belts, White Sulphur Springs to Great Falls (well known) | Stanford–White Sulphur Springs and Stanford–Townsend. The straight White Sulphur Springs–Great Falls line runs 15 mi west of the pass and tunnels 14 mi of the Little Belts instead (open in both modes) |

**Not added:** Pipestone Pass (MT-2, 5 mi from Homestake: it would add nothing), Chief Joseph Pass (1 mi from Idaho's Lost Trail Pass), Beartooth Pass (in Wyoming, for Wyoming's pack), Elk Park Pass, Deep Creek Pass, Raynolds Pass and Skalkaho Pass (less well known, and every line they would serve is open without them), and the Flathead Tunnel (a tunnel, not a pass).

| Bridge | Point | Source | What uses it |
| --- | --- | --- | --- |
| Yellowstone River bridges at Livingston, Billings, Forsyth, Miles City, Glendive and Sidney | on the map's river by each town | Each town has a highway bridge over the Yellowstone (well known; the point is where the map's river passes the town, the Billings one 2 mi southeast of downtown) | Lines out of these towns that cross the river nearby pay the real-bridge price (for example Billings–Hardin, Miles City–Circle, Glendive–Sidney). **Sidney's** is on the map's river 4 mi east of town, at MT-200's crossing toward Fairview: no Montana line uses it yet; it is for North Dakota |
| Bighorn River bridge (Hardin) | 45.73, -107.56 approx. | I-90 and the Hardin roads over the Bighorn | Hardin's lines east |
| Missouri River bridges at Townsend, Great Falls and Culbertson | on the map's river | Highway bridges (US-12/287 at Townsend; Great Falls' bridges; MT-16 south of Culbertson toward Sidney) | Lines crossing the Missouri there. The map names the river at Townsend "Madison" (Natural Earth's naming), so a train crossing there shows "Madison" |
| Fort Benton Bridge | 47.82, -110.67 | The 1888 bridge over the Missouri at Fort Benton (well known) | Fort Benton's lines north and east |
| Wolf Point Bridge | 48.08, -105.61 | The 1930 truss bridge over the Missouri south of Wolf Point (MT-13, well known locally) | Wolf Point–Circle, –Sidney and –Glendive |
| Fort Peck Dam (MT-24) | 48.00, -106.42 approx. | MT-24 crosses the Missouri at the dam (well known) | Fort Peck–Circle and Fort Peck–Jordan across the lake's north end. Without it both were blocked by the lake (Fort Peck–Jordan in both modes) |
| Clark Fork bridge (Missoula) | 46.87, -113.99 | The downtown bridges over the Clark Fork (Higgins Avenue; well known) | Missoula's lines south and east (Hamilton, Stevensville, Darby, Anaconda, Deer Lodge, Philipsburg, Lincoln) |
| Flathead River bridge (Polson) | 47.68, -114.16 | US-93 over the Flathead at the lake's outlet (well known) | Polson's lines south and west |
| Kootenai River bridge (Libby) | 48.40, -115.55 | The bridge over the Kootenai at Libby (well known locally) | Libby's lines north |

**Not added:** a bridge across Flathead Lake (there is none; Elmo carries US-93 round the shore instead); Lake Koocanusa Bridge (no line needs it); Milk River bridges (the river is small, and lines along the Hi-Line only pay a little for it).

### How the map plays

**Counts.** Of the 542 pairs of Montana places (stations and towns) within 100 mi of each other:
- 6 are blocked in Gentle and 86 in Tough;
- with links up to 100 mi, every Montana place is in one network in both modes;
- every place has at least 4 open links within 100 mi in both modes (the fewest: Plentywood and Chinook).

**The real routes, as chains,** are open in both modes:
- **The Hi-Line (US-2, BNSF):** Bonners Ferry (ID)–Troy–Libby–Kalispell–East Glacier Park (over Marias Pass)–Cut Bank–Shelby–Chester–Havre–Chinook–Malta–Glasgow–Wolf Point–Culbertson. Whitefish, Columbia Falls and West Glacier link to Kalispell, and Whitefish and Columbia Falls to East Glacier Park.
- **I-90:** Wallace (ID)–Superior–Missoula–Deer Lodge–Butte–Whitehall–Three Forks–Bozeman–Livingston–Big Timber–Columbus–Laurel–Billings–Hardin–Little Bighorn Battlefield.
- **I-94:** Billings–Pompeys Pillar–Forsyth–Miles City–Terry–Glendive–Wibaux.
- **I-15:** Dubois (ID)–Dillon–Butte–Helena–Cascade–Great Falls–Conrad–Shelby.
- **US-93:** Salmon (ID)–Darby–Hamilton–Stevensville–Missoula–Ronan–Polson–Elmo–Kalispell–Whitefish–Eureka.
- **Others:** Bozeman–Big Sky–West Yellowstone; Livingston–Gardiner; West Glacier–St. Mary–East Glacier Park; Helena–Lincoln–Great Falls (Rogers Pass); Billings–Roundup–Harlowton–White Sulphur Springs–Townsend–Helena (US-12); Sidney–Circle–Jordan–Winnett–Lewistown–Stanford–Great Falls (MT-200 and US-87); Miles City–Broadus–Ekalaka–Baker–Glendive; Havre–Fort Benton–Great Falls; Glasgow–Fort Peck–Circle; Thompson Falls–Plains–Superior.

**Main stations: neighbouring main stations reached directly** (other states' and provinces' marked *). The same in both modes unless noted.

| Station | Reaches |
| --- | --- |
| Billings | Hardin, Red Lodge, Roundup |
| Hardin | Red Lodge, Miles City, Lewistown, Sidney, Roundup, Billings |
| Red Lodge | Hardin, Roundup, Billings; Gentle only: Livingston |
| Roundup | Hardin, Townsend, Red Lodge, Lewistown, Livingston, Billings |
| Lewistown | Hardin, Malta, Townsend, Great Falls, Havre, Sidney, Roundup |
| Livingston | Townsend, Bozeman, Roundup; Gentle only: Red Lodge |
| Miles City | Hardin, Baker, Glendive, Sidney |
| Glendive | Baker, Miles City, Sidney |
| Baker | Miles City, Glendive |
| Sidney | Hardin, Malta, Miles City, Glendive, Lewistown, Glasgow |
| Glasgow | Malta, Plentywood, Sidney, Moose Jaw*, Swift Current* |
| Plentywood | Glasgow, Weyburn*, Moose Jaw* |
| Malta | Havre, Lewistown, Sidney, Glasgow, Swift Current*; blocked: Moose Jaw* |
| Bozeman | St. Anthony*, Dillon, Townsend, Livingston |
| Butte | Dillon, Anaconda |
| Helena | Dillon, Townsend, Great Falls, Anaconda, Conrad; blocked: Kalispell |
| Anaconda | Dillon, Helena, Missoula, Hamilton, Butte; blocked: Kalispell |
| Dillon | Salmon*, Rigby*, St. Anthony*, Townsend, Anaconda, Bozeman, Helena, Butte; Gentle only: Hamilton |
| Townsend | Dillon, Great Falls, Lewistown, Bozeman, Roundup, Helena, Livingston |
| Missoula | Grangeville*, Anaconda, Polson, Thompson Falls, Hamilton; Gentle only: Kalispell |
| Hamilton | Salmon*, Anaconda, Missoula; Gentle only: Dillon; blocked: Grangeville* |
| Great Falls | Townsend, Havre, Lewistown, Helena, Conrad |
| Kalispell | Lethbridge*, Cranbrook*, Shelby, Libby; Gentle only: Polson, Thompson Falls, Missoula, Conrad; blocked: Anaconda, Helena |
| Polson | Missoula; Gentle only: Kalispell, Thompson Falls |
| Libby | Cranbrook*, Kalispell; Gentle only: Sandpoint*, Thompson Falls; blocked: Nelson* |
| Thompson Falls | St. Maries*, Missoula; Gentle only: Kalispell, Polson, Libby; blocked: Sandpoint*, Grangeville* |
| Shelby | Medicine Hat*, Lethbridge*, Havre, Kalispell, Conrad; Gentle only: Cranbrook* |
| Conrad | Great Falls, Havre, Shelby, Helena; Gentle only: Kalispell |
| Havre | Medicine Hat*, Malta, Great Falls, Lewistown, Shelby, Conrad, Swift Current* |

**Where geography doesn't allow two neighbouring main stations:**
- **Polson, in Tough,** reaches only Missoula directly. Kalispell is across 3 mi of Flathead Lake (Big Arm Bay) with no real bridge, and Thompson Falls is 16 mi of mountains away. US-93 still works through the town of Elmo (Polson–Elmo–Kalispell, open in both modes).
- **Butte** reaches Dillon and Anaconda, its only two neighbour regions (Silver Bow touches nothing else). Butte–Helena (47 mi, over Homestake Pass) and Butte–Whitehall–Three Forks–Bozeman are also open in both modes.
- **Baker** reaches Miles City and Glendive; Carter-Fallon has no other Montana neighbour (the Dakotas come later).

**The engine is lenient in places,** as Idaho's notes say: a pass counts for any mountain stretch whose line comes within 12 mi (Gentle) or 9 mi (Tough) of it, so a few long lines open over a nearby pass. In Gentle, Libby–Thompson Falls opens across the Cabinet Mountains, and Red Lodge–Livingston across the Absarokas.

**Neighbours.** I compared every pair of places in Idaho, BC, Alberta, Saskatchewan and Washington within 300 mi of each other whose line reaches east of 116.3°W, with this pack's passes and bridges and without them:
- **No link under 100 mi changes status, and none is closed.**
- **44 links open** (33 in Gentle, 11 in Tough), all long lines across the Idaho Panhandle and the BC border over the two Kootenai River passes. The shortest is Sandpoint–Fernie (108 mi, Gentle); then Cranbrook–Kellogg (137, Gentle) and Cranbrook–Wallace (141, both modes). 143 more only change price.
- Moving the Kootenai River (US-2) point from the state line (48.60, -116.05) to the Yaak River's mouth (48.55, -115.97), both on the river, cut these from 52 to 44 and still opens Troy–Bonners Ferry in Tough.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Billings & the Yellowstone | `billings` | Billings, Hardin, Red Lodge, Roundup, Lewistown, Livingston | 50 passengers; own 5 counties; 10 crates of produce (Hardin or Lewistown to Billings) |
| Eastern Montana | `east` | Miles City, Glendive, Baker, Sidney, Glasgow, Plentywood, Malta | 140 passengers; connect BIL–GDV (I-94, open in both modes); 25 trucks (from the desert stations, Red Lodge and Livingston to Billings) |
| Bozeman, Butte & Missoula | `southwest` | Bozeman, Butte, Helena, Anaconda, Dillon, Townsend, Missoula, Hamilton | 280 passengers; connect BIL–BZN (I-90 by Livingston); one high-speed train |
| Glacier & the Hi-Line | `north` | Great Falls, Kalispell, Polson, Libby, Thompson Falls, Shelby, Conrad, Havre | 450 passengers; connect BIL–MSO (I-90 by Bozeman, Butte and Deer Lodge, open in both modes); own 20 counties |

- **Targets** follow Idaho's and Washington's four levels.
- **No container goal:** Montana has no port.

### Biomes

Following Idaho's, Alberta's and Saskatchewan's conventions:
- **`forest`** (the northwest's Kootenai, Lolo and Flathead forests, like Idaho's Panhandle): Lincoln, Mineral-Sanders, Flathead.
- **`wooded`** (forested mountains over farmed or ranched valleys): Missoula, Lake, Ravalli, Deer Lodge-Granite-Powell, Silver Bow, Lewis and Clark, Beaverhead-Jefferson-Madison, Gallatin, Park-Sweet Grass, Carbon-Stillwater, Broadwater-Meagher.
- **`dry`** (sagebrush, badlands and dry rangeland): Custer-Powder River, Carter-Fallon, Dawson-Prairie-Wibaux, Garfield-McCone-Richland (the "Big Dry"), Golden Valley-Musselshell-Wheatland. Saskatchewan's Division 4-8 and Alberta's Division 1, across the border to the north, are dry too.
- **Not listed (farmland and grassland):** Yellowstone; the Hi-Line's and the Golden Triangle's wheat (Glacier-Liberty-Toole, Pondera-Teton, Chouteau-Hill, Cascade, Blaine-Phillips, Roosevelt-Valley, Daniels-Sheridan); Fergus-Judith Basin-Petroleum; Big Horn-Rosebud-Treasure (grassland and the Bighorn valley's farms). Blaine-Phillips touches Saskatchewan's dry Division 4-8 and could be dry too: a judgment call.

### Checks

- **`node tools/check-pack.js MT`:** `MT: passed (29 stations, 51 towns, 0 city maps, 15 passes, 16 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js MT`:** `PASSED: 17 passed, 0 warnings, 0 failed`. The start is BIL, HRD and RLG; the test laid Billings–Hardin (49 mi, 1 train), bought Custer-Powder River (MLS), and 7 passengers arrived in the week.
- **Screenshots** (`test-out/MT/`, arcade light and dark, classic light): Billings sits on the Yellowstone with Laurel to its west and Pompeys Pillar to its northeast; Hardin and Little Bighorn Battlefield to the east; Red Lodge at the foot of the Beartooths; Miles City on the Yellowstone in the tan dry southeast. Forests cover the northwest and the mountains.

### For the main agent

1. **Airports:** Bozeman and Missoula only. Billings Logan and Glacier Park International are near the 1-million bar (from memory); add them if the bar is lower.
2. **Polson–Kalispell in Tough** goes through Elmo: the map's Flathead Lake has no real bridge, and the straight line crosses Big Arm Bay.
3. **Butte and Anaconda** were moved from their consolidated city-county Census points (9–10 mi off) to their downtowns; Billings and Missoula were moved about 2 mi to downtown.
4. **The map names the Missouri at Townsend "Madison"** (Natural Earth), so a train crossing there shows "Madison".
5. **The corner-only neighbours** from phase 1 (for example Valley–Saskatchewan Division 4-8, Glacier–BC East Kootenay) are still listed; no link here relies on them.
6. **Wyoming, North Dakota and South Dakota are still missing.** Sidney's Yellowstone bridge (MT-200 toward Fairview), Culbertson, Wibaux, Baker, Ekalaka, Broadus, Hardin, Red Lodge, Gardiner and West Yellowstone are in place for them.
