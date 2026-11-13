# Wyoming (WY) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written, giving 15 regions. The pack (phase 2, below) is built on it.

Populations: `packs/WY/raw/counties.json` and `packs/WY/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 576,850). Every group is connected through `neighbors` (checked: each member borders another member, all along 80 km or more). Roads, rivers, passes and railways named are well known unless marked "(moderately known)".

### Recommended (23 → 15 regions)

```
merge: [["Crook", "Weston"], ["Johnson", "Sheridan"], ["Big Horn", "Hot Springs", "Washakie"], ["Sublette", "Sweetwater"], ["Lincoln", "Uinta"], ["Goshen", "Platte"], ["Converse", "Niobrara"]]
```

No `names` needed. The automatic names read well enough ("Big Horn-Hot Springs-Washakie County", "Johnson-Sheridan County").

Alone, over 50k: **Laramie** (Cheyenne 65,156; 100,512) and **Natrona** (Casper 59,096; 79,966).

Alone, under 50k (exceptions; Wyoming is the smallest state, and a strict 50k rule would leave about 8 regions):
- **Campbell** 47,030, Gillette (33,412): Wyoming's third city, nearly 50k, the Powder River Basin coal field; I-90 and the BNSF/UP coal lines.
- **Albany** 37,069, Laramie (31,405): the university town on the Laramie Plains, between the Laramie Range (Sherman Hill, I-80's summit) and the Medicine Bow Mountains.
- **Fremont** 39,235, Riverton (10,687) and Lander (7,544): the Wind River Basin and Reservation, walled in by the Wind River Range (west), the Owl Creek Mountains (north, the Wind River Canyon) and the Absarokas.
- **Park** 29,627, Cody (10,040) and Powell (6,414): Yellowstone's east gate (Sylvan Pass) and Buffalo Bill Reservoir; its small neighbours are needed by the Bighorn River group.
- **Teton** 23,323, Jackson (10,758): Jackson Hole, Grand Teton and the south half of Yellowstone. Every road out crosses a pass or canyon: Teton Pass to Idaho, Togwotee Pass to Dubois, the Hoback to Pinedale, the Snake River Canyon to Star Valley.
- **Carbon** 14,535, Rawlins (8,239): I-80 and the Union Pacific between Laramie and Rock Springs, plus the upper North Platte (Saratoga, Encampment). Joining either neighbour on I-80 would take Rawlins's station (see the alternative).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Crook + Weston | Wyoming's Black Hills: Devils Tower, Sundance and Moorcroft on I-90; Newcastle and Upton on the BNSF line to Edgemont, SD (moderately known) | Newcastle (3,367) | 14,014 |
| Johnson + Sheridan | East foot of the Bighorn Mountains: Sheridan on I-90, Buffalo where I-25 meets I-90, Kaycee | Sheridan (18,739) | 39,367 |
| Big Horn + Hot Springs + Washakie | The Bighorn River down the Bighorn Basin: Thermopolis below the Wind River Canyon, Worland, Basin, Greybull, Lovell; US-20 and the BNSF line to Montana (moderately known) | Worland (4,767) | 23,821 |
| Sublette + Sweetwater | The Green River from the Upper Green (Pinedale) to Green River and Flaming Gorge; US-191 Pinedale–Farson–Rock Springs | Rock Springs (23,523) | 50,997 |
| Lincoln + Uinta | The southwest corner: I-80 to Utah at Evanston, US-189 to Kemmerer, the Bear River (Evanston, Cokeville; moderately known); Star Valley (Afton) comes with Lincoln | Evanston (11,761) | 40,027 |
| Goshen + Platte | The North Platte from Glendo and Guernsey past Fort Laramie to Torrington (the Oregon Trail); I-25 at Wheatland | Torrington (6,123) | 21,105 |
| Converse + Niobrara | Douglas and Glenrock on I-25 and the North Platte; US-18/20 east to Lusk and the UP coal line via Lusk (moderately known) | Douglas (6,381) | 16,222 |

Every town over 6,000 gets a station except three that share a region with a bigger town (Green River, Lander, Powell).

The three corridors stay clean chains: I-80 / the Union Pacific: Laramie, Albany, Carbon, Sublette-Sweetwater, Lincoln-Uinta, then Utah. I-25: Laramie, Goshen-Platte, Converse-Niobrara, Natrona, Johnson-Sheridan, then Montana. I-90: Johnson-Sheridan, Campbell, Crook-Weston, then South Dakota. The Bighorn Basin runs Natrona, Fremont, Big Horn-Hot Springs-Washakie, Park, then Montana.

Rejected:
- Teton + Sublette (Hoback, 32k): Jackson and the parks deserve their own region; the Hoback Rim and Gros Ventre Range lie between.
- Fremont + Hot Springs (Wind River Canyon, 44k): the Owl Creek Mountains lie between; Thermopolis is the head of the Bighorn Basin.
- Sheridan + Big Horn, Johnson + Washakie: the Bighorn Mountains lie between (US-14, US-16 over Powder River Pass).
- Lincoln + Sublette (US-189, 28k): leaves Uinta alone with only Sweetwater as a partner, and Evanston would lose its station.
- Goshen + Niobrara + Platte (24.6k): leaves Converse alone at 13.8k.

### Alternative (14 regions)

Same list plus `["Albany", "Carbon"]` (51,604; Laramie) instead of Albany and Carbon alone.
- Pro: one region fewer and one exception fewer; I-80 and the UP cross the Laramie Plains to Rawlins with no range on the way (the Medicine Bows lie south).
- Con: Rawlins (8,239) loses its station, the I-80 chain is one region shorter, and the region covers about 12,250 sq mi.

A second option (same count): Park + Big Horn (41,150; Cody, Powell, Lovell along the Shoshone River) and Hot Springs + Washakie (12,298; Worland). It splits the Bighorn River and puts Cody in a merged region.

### Map and data check

1. **The map looks right.** All 205 places lie inside their tagged county (none in the wrong one), every label is inside its county, and every county is one piece. County areas add up to about 97,750 sq mi (Sweetwater about 10,500 sq mi, Fremont 9,200), which matches Wyoming's total area with water.
2. **Yellowstone and its lakes.** The park is split between Park County (Mammoth, Tower, Norris, Canyon) and Teton County (Old Faithful, West Thumb, Grant Village, Lake Village). Yellowstone Lake and Jackson Lake are in Teton. The county shapes include the lakes; `terrain.js` draws them (Natural Earth), together with Flaming Gorge, Seminoe, Pathfinder, Glendo, Boysen, Buffalo Bill, Palisades and Ocean Lake. Bighorn Lake (Bighorn Canyon, which reaches Lovell), Fontenelle and Keyhole reservoirs are not in Natural Earth's set; this does not matter for the merges.
3. **Neighbours agree both ways** with the `id-` and `mt-` regions. Teton touches `id-bonneville`, `id-fremont-teton` and `mt-gallatin`; Park touches `mt-gallatin`, `mt-park-sweet-grass` and `mt-carbon-stillwater`. The northwest corner of Wyoming is Park County.
4. **Short contacts (Census topology):** Carbon–Converse about 1 km (a corner; after merging it would let Rawlins unlock Douglas-Lusk), Crook–`mt-custer-powder-river` about 3 km, Converse–Johnson about 5 km, Fremont–Washakie about 6 km, Park–Washakie about 10 km. No merge relies on them.
5. **Missing neighbours (expected, until those states arrive):** Utah: Uinta, Lincoln, Sweetwater. Colorado: Sweetwater, Carbon, Albany, Laramie. Nebraska: Laramie, Goshen, Niobrara. South Dakota: Niobrara, Weston, Crook.
6. **Places without population:** all 106 are CDPs (for example Mammoth, Alta, Fox Farm-College, Fort Bridger). No main-station choice depends on them; Jackson is Teton's only incorporated place.
7. **Names:** Laramie County holds Cheyenne, and the city of Laramie is in Albany County. The pack should name stations by town so players are not confused. Big Horn County, Wyoming borders Big Horn County, Montana (`mt-big-horn-rosebud-treasure`).

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/WY/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Station and town coordinates are `places.json` points rounded to 2 decimals. Scenic places that are not Census places have points marked approx. in the table below.
- **Facts added by hand** (passes, bridges, scenic places, roads and railways) are well known unless marked "moderately known" or "approx." (a point I gave from memory, within about a mile or two).
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain.

### Start

`start: ["wy-laramie", "wy-albany", "wy-goshen-platte"]`: Cheyenne, Laramie and Torrington. Laramie County touches only these two regions, and they touch each other.
- **Types:** metro, mountain and farm.
- **First track:** the hint pairs Cheyenne with Laramie (I-80 and the Union Pacific over Sherman Hill), metro to mountain. The pack test laid it (51 mi) and passengers arrived.
- **Why Laramie is mountain:** typed metro, the hint's first track would join two metros and carry nobody in "A type of place".

### Main stations (15)

Every station is at its region's biggest place in `places.json`. No station was moved: each Census point is within about 1.5 mi of its downtown (from memory: Cheyenne's depot and Gillette's downtown are the farthest, about 1.3–1.4 mi). Each id is unused in every other pack (the checker checks). GIL, RIV, COD and JAC were already taken, so the ids are GLT, RVT, CDY and JXN.

**Sizes:** **2** for Cheyenne (101k) and Casper (80k), the two regions over 50k that are cities (Carson City is 2 at 59k). **1** for the rest. Rock Springs' region (51k) is just over the 50k merge line but is a merged rural region, mostly desert, so it stays 1.

**Types:** 3 metro, 5 mountain, 5 farm, 2 desert.

| Station | Region, pop | Type, size | Why |
| --- | --- | --- | --- |
| Cheyenne (CHY) | Laramie, 101k | metro 2 | The capital and biggest city (65,156) |
| Laramie (LAR) | Albany, 37k | mountain 1 | The University of Wyoming's town (31,405), typed by its setting at 7,200 ft between the Laramie Range and the Snowy Range (as Idaho types Moscow by the Palouse); see Start |
| Torrington (TRG) | Goshen-Platte, 21k | farm 1 | Biggest (6,123; Wheatland 3,585). The North Platte valley's irrigated farms |
| Douglas (DGS) | Converse-Niobrara, 16k | farm 1 | Biggest (6,381). Ranch country on I-25 |
| Casper (CAS) | Natrona, 80k | metro 2 | Wyoming's second city (59,096), the oil town on the North Platte |
| Gillette (GLT) | Campbell, 47k | metro 1 | The third city (33,412) and the Powder River Basin's coal town; metro as Montana types Butte (35k). GIL is taken |
| Sheridan (SHR) | Johnson-Sheridan, 39k | farm 1 | Biggest (18,739; Buffalo 4,415). Ranch country at the foot of the Bighorns |
| Newcastle (NWC) | Crook-Weston, 14k | mountain 1 | Biggest (3,367; Sundance 1,030). "The gateway to the Black Hills", which rise just east of town |
| Rawlins (RWL) | Carbon, 15k | desert 1 | Biggest (8,239). On the Red Desert's eastern edge, I-80 and the UP |
| Rock Springs (RKS) | Sublette-Sweetwater, 51k | desert 1 | Biggest (23,523; Green River 11,834). The Red Desert's coal and trona town |
| Evanston (EVN) | Lincoln-Uinta, 40k | mountain 1 | Biggest (11,761). Under the Uintas on the Bear River; the region is mountain valleys (Star Valley, the Wyoming and Salt River ranges) |
| Riverton (RVT) | Fremont, 39k | farm 1 | Biggest (10,687; Lander 7,544). The Wind River's irrigated farms and the Wind River Reservation. RIV is taken |
| Worland (WOR) | Big Horn-Hot Springs-Washakie, 24k | farm 1 | Biggest (4,767). The Bighorn Basin's irrigated farms (sugar beets) |
| Cody (CDY) | Park, 30k | mountain 1 | Biggest (10,040; Powell 6,414). Buffalo Bill's town and Yellowstone's east gate. COD is taken |
| Jackson (JXN) | Teton, 23k | mountain 1, **scenic** | Teton's only incorporated place (10,758). Jackson Hole and the Tetons draw tourists, as Mammoth Lakes and South Lake Tahoe do in California. JAC is taken |

**Airports: none.** The bar the other packs use is about 1 million passengers a year: Montana left out Billings Logan and Glacier Park International (about 0.9–1.0 million each), and Idaho left out Idaho Falls.
- Jackson Hole Airport is Wyoming's busiest (well known). From memory it handles somewhat under or about 1 million passengers a year, so it sits at the bar like Billings and is left out the same way.
- If the main agent lowers the bar, add `airport: "Jackson Hole Airport"` to JXN. Casper/Natrona County International and Cheyenne Regional are far smaller.
- **Ports:** none.

### Towns (26: 19 towns and 7 scenic places)

Every town is inside its region and the checker gives no spacing warnings. The closest pair of places is Rock Springs and Green River, 14 mi apart. Populations are from `places.json` (CDPs and scenic places have none).

| Region | Towns |
| --- | --- |
| Laramie | Pine Bluffs (1,172, on I-80 toward Nebraska) |
| Albany | Centennial (CDP, at the foot of the Snowy Range on WY-130) |
| Goshen-Platte | Wheatland (3,585, on I-25); **Fort Laramie** (scenic) |
| Converse-Niobrara | Glenrock (2,421, on I-25 toward Casper); Lusk (1,539) |
| Natrona | **Independence Rock** (scenic) |
| Campbell | Wright (1,646, desert: the coal town among the biggest Powder River Basin mines) |
| Crook-Weston | Sundance (1,030, on I-90); **Devils Tower** (scenic) |
| Johnson-Sheridan | Buffalo (4,415, where I-25 meets I-90) |
| Fremont | Lander (7,544); Dubois (907, below Togwotee Pass) |
| Sublette-Sweetwater | Green River (11,834, desert); Pinedale (2,005) |
| Lincoln-Uinta | Kemmerer (2,412, desert); Afton (2,168, Star Valley's dairy farms); Alpine (1,226, where the Snake River Canyon meets Star Valley and Idaho) |
| Carbon | Saratoga (1,698, the upper North Platte's hot-springs town) |
| Big Horn-Hot Springs-Washakie | **Thermopolis** (2,721, scenic); Greybull (1,650); Lovell (2,246) |
| Park | Powell (6,414); **Yellowstone Lake** (scenic) |
| Teton | **Old Faithful** (scenic); **Grand Teton** (scenic) |

**Scenic places** (all well known):

| Place | Point | What it is |
| --- | --- | --- |
| Fort Laramie | 42.20, -104.56 approx. | Fort Laramie National Historic Site, the fur-trade and army post on the Oregon Trail. At the fort; the town's Census point (42.21, -104.52) is 2 mi east |
| Independence Rock | 42.49, -107.13 approx. | Independence Rock State Historic Site, the Oregon Trail's "register of the desert", on WY-220 between Casper and Rawlins |
| Devils Tower | 44.59, -104.72 approx. | Devils Tower National Monument, the first national monument (1906), at the visitor center |
| Thermopolis | 43.65, -108.21 | Hot Springs State Park's hot springs and travertine terraces (at the town's Census point; the park is at its north edge) |
| Yellowstone Lake | 44.57, -110.37 approx. | Yellowstone Lake at Fishing Bridge, the lake's outlet, where the East Entrance road from Cody meets the park's loop. Placed in Park County: 44.56 is in the map's lake and in Teton County |
| Old Faithful | 44.46, -110.83 approx. | The geyser, in the Teton County part of Yellowstone |
| Grand Teton | 43.75, -110.72 approx. | Grand Teton National Park, at Jenny Lake below the peak. Jenny Lake rather than Moose (43.65): from there the line to Dubois goes over Togwotee Pass in Tough |

**Left out:**
- **Kaycee, Medicine Bow and Moorcroft:** cut to keep about 1.75 towns per region. The direct lines they would sit on are open in both modes: Casper–Buffalo (I-25), Laramie–Rawlins (I-80) and Gillette–Sundance (I-90).
- **Mammoth Hot Springs and the Grand Canyon of the Yellowstone** (both in Park County): Montana's Gardiner (scenic) is 6 mi from Mammoth. Cody's line to the Canyon is blocked in Tough (33 mi of the Absarokas; Sylvan Pass is 14 mi south of the line). Yellowstone Lake, on the East Entrance road, is the one Cody reaches.
- **Too close to a main station:** Mills, Bar Nunn and Evansville (Casper's suburbs), Sinclair (6 mi from Rawlins), Ranchester and Dayton (Sheridan's way to Montana and US-14 is open without them).
- **Not added (less well known, or no line needs them):** South Pass City, Fossil Butte, Flaming Gorge (its points are on the reservoir), Medicine Wheel and Fort Bridger.

### Passes (9) and bridges (16)

The checker gives no warnings: every pass has mountains within ~7 mi and every bridge is within 3 mi of a river or lake on the map. Idaho's Targhee Pass and Montana's Yankee Jim and Gallatin canyons already serve Yellowstone's west and north sides.

| Pass | Point | Source | What uses it |
| --- | --- | --- | --- |
| Teton Pass | 43.50, -110.95 | WY-22 over the Tetons from Jackson and Wilson to Victor and Driggs, Idaho | Jackson–Victor, –St. Anthony and –Idaho Falls (Idaho Falls and Swan Valley blocked in Tough without it); Grand Teton and Dubois to eastern Idaho |
| Togwotee Pass | 43.75, -110.07 | US-26/287 over the Continental Divide from Moran to Dubois | Grand Teton–Dubois in Tough; Cody–Jackson (blocked in both modes without it); Dubois–Old Faithful and –West Yellowstone (Tough) |
| Hoback Canyon | 43.28, -110.60 approx. | US-189/191 up the Hoback River from Hoback Junction toward Bondurant and Pinedale (moderately known) | Jackson–Pinedale (blocked in Tough without it), Jackson–Lander, Jackson–Kemmerer |
| Snake River Canyon | 43.20, -110.90 approx. | US-26/89 down the Snake from Hoback Junction to Alpine, the whitewater canyon | Jackson–Alpine and Jackson–Afton (a climb instead of 12 mi of tunnels to Alpine); Pinedale–Idaho Falls and Alpine–St. Anthony in Tough |
| Sylvan Pass | 44.47, -110.14 | US-14/16/20 over the Absarokas from Cody's East Entrance to Fishing Bridge | Cody, Powell, Lovell, Greybull, Thermopolis and Worland to Yellowstone Lake (all blocked without it); Cody–West Yellowstone |
| Beartooth Pass | 44.97, -109.47 | US-212, the Beartooth Highway, from Red Lodge to Cooke City and Yellowstone's northeast gate. The summit is in Wyoming; Montana's pack left it for this one | Red Lodge to Yellowstone Lake, Old Faithful and Grand Teton in Tough; Powell and Lovell to Gardiner; Cody–Livingston and –Big Timber |
| Granite Pass | 44.62, -107.49 approx. | US-14 over the Bighorns from Dayton and Burgess Junction down Shell Canyon to Greybull. The point is near Antelope Butte, from memory | Sheridan–Greybull, –Powell and –Cody; Buffalo–Lovell (blocked in Tough without it) |
| Powder River Pass | 44.15, -107.06 | US-16 over the Bighorns from Buffalo to Ten Sleep and Worland | Buffalo–Worland and Gillette–Worland: climbs instead of tunnels (open without it) |
| Wind River Canyon | 43.50, -108.18 approx. | US-20 and the BNSF line through the Owl Creek Mountains from Shoshoni to Thermopolis | Riverton–Worland: a climb instead of a 7-mi tunnel |

**Not added:**
- **Sherman Hill** (I-80 and the UP between Cheyenne and Laramie) and **South Pass** (the Oregon Trail's gentle crossing, WY-28): the map has no mountains within 7 mi of either, so the checker would warn and nothing would change. Cheyenne–Laramie is clear on the map. Lander–Rock Springs tunnels 5 mi just south of Lander, open in both modes.
- **Salt River Pass** (US-89 south of Afton): I'm not sure of its point, and its road leads to Montpelier, Idaho, not Kemmerer. Without it, Afton–Montpelier and Afton–Kemmerer are open in both modes (short tunnels); only Kemmerer–Alpine (98 mi) is blocked in Tough.
- **Craig Pass and Dunraven Pass** (inside Yellowstone): no mountains near Craig Pass on the map, and no line needs either. **Dead Indian Pass, Snowy Range Pass and Muddy Gap**: no line needs them.

| Bridge | Point | Source | What uses it |
| --- | --- | --- | --- |
| North Platte River bridges at Casper, Glenrock, Douglas, Torrington and Saratoga | on the map's river by each town | Each town has highway bridges over the North Platte (well known; the point is where the map's river passes the town, Saratoga's 2.5 mi from the Census point) | Casper's lines north and west (Buffalo, Gillette, Riverton, Worland, Thermopolis); Glenrock's and Douglas's lines north (Gillette, Newcastle, Sundance, Lusk); Torrington–Lusk; Saratoga's lines east |
| Fort Laramie Bridge | 42.23, -104.54 | The 1875 Army iron truss bridge over the North Platte by the fort (well known; on the map's river 1.8 mi from the fort) | Cheyenne–Lusk, Fort Laramie–Lusk, Newcastle–Fort Laramie |
| Green River bridge (Green River) | 41.53, -109.45 | The bridges at Green River (I-80 and the UP's crossing are well known) | Rock Springs–Green River, Rock Springs–Evanston, Rawlins, Riverton and Lander to Green River |
| Bear River bridge (Evanston) | 41.28, -110.94 | Evanston's bridges over the Bear River | Evanston's lines to Green River, Rock Springs, Kemmerer, Pinedale and Afton |
| Snake River bridge (Wilson) | 43.50, -110.84 | WY-22 over the Snake between Jackson and Wilson, toward Teton Pass | Jackson–Victor and Jackson's other lines into Idaho |
| Snake River bridge (Alpine) | 43.18, -111.02 | US-26 over the Snake at Alpine, at the head of Palisades Reservoir | Jackson–Alpine and Alpine's lines into Idaho (18 links) |
| Wind River bridges at Riverton and Dubois | on the map's river | US-26 at Riverton; US-26/287 at Dubois | Riverton–Dubois; Dubois's lines north and east |
| Bighorn River bridges at Thermopolis, Worland and Greybull | on the map's river | Highway bridges over the Bighorn (US-20 at Thermopolis and Worland, US-14/16/20 at Greybull). The map names the river "Wind" as far as Worland (Natural Earth's naming), so a train crossing elsewhere there shows "Wind" | Thermopolis's, Worland's and Greybull's lines east (Casper, Buffalo, Sheridan, Gillette) |
| Fishing Bridge | 44.57, -110.37 approx. | The bridge over the Yellowstone River at the lake's outlet (well known) | Cody–Yellowstone Lake and the East Entrance lines. Like any real bridge it also lets lines cross Yellowstone Lake's north end: Jackson–Yellowstone Lake and Powell and Lovell to Old Faithful open in Tough because of it |

**Not added:** Fort Steele (the I-80/UP crossing of the North Platte), Kane (US-14A over the Bighorn near Lovell), Moose (the Snake at Grand Teton) and Daniel (the Green near Pinedale): tested and used by no line, or by one only. These lines cross those rivers more than 2 mi from the real bridges and pay a new river bridge. No bridge crosses Jackson Lake (there is none).

### How the map plays

**Counts.** Of the 149 pairs of Wyoming places within 100 mi of each other:
- 2 are blocked in Gentle and 12 in Tough;
- with links up to 100 mi, every Wyoming place is in one network in both modes;
- every place has at least 3 open links within 100 mi in both modes. The fewest is Evanston, with Kemmerer, Green River and Rock Springs; Idaho's Preston is a fourth, and Utah comes later.

**The real routes, as chains,** are open in both modes:
- **I-80 and the Union Pacific (the Overland Route):** Pine Bluffs–Cheyenne–Laramie–Rawlins–Rock Springs–Green River–Evanston. Laramie–Centennial–Saratoga–Rawlins also works.
- **I-25:** Cheyenne–Wheatland–Douglas–Glenrock–Casper–Buffalo–Sheridan, then Hardin (MT).
- **I-90:** Sheridan–Buffalo–Gillette–Sundance–Devils Tower.
- **Others:**
  - Jackson–Alpine–Afton–Kemmerer–Evanston (US-89 and US-189).
  - Jackson–Pinedale–Rock Springs (US-191).
  - Jackson–Grand Teton–Dubois–Lander–Riverton–Casper (US-26/287).
  - Grand Teton–Old Faithful–Yellowstone Lake–Cody (the park and Sylvan Pass).
  - Cody–Powell–Lovell–Greybull–Worland–Thermopolis–Riverton (the Bighorn Basin and the Wind River Canyon).
  - Sheridan–Greybull (Granite Pass) and Buffalo–Worland (Powder River Pass).
  - Casper–Independence Rock–Rawlins and Lander–Rock Springs.
  - Torrington–Fort Laramie–Wheatland; Torrington–Lusk–Newcastle–Gillette; Gillette–Wright–Douglas.
  - Old Faithful–West Yellowstone (MT) and Jackson–Victor (ID).

**Main stations: neighbouring main stations reached directly** (other states' marked *). The same in both modes unless noted. Rawlins–Douglas is open, but it is left out of the table because those regions meet only at the 1-km Carbon–Converse corner.

| Station | Reaches |
| --- | --- |
| Cheyenne | Laramie, Torrington (its only two neighbour regions) |
| Laramie | Cheyenne, Torrington, Rawlins, Douglas |
| Torrington | Cheyenne, Laramie, Douglas |
| Douglas | Casper, Torrington, Laramie, Newcastle, Gillette, Sheridan |
| Casper | Douglas, Rawlins, Riverton, Worland, Sheridan |
| Gillette | Sheridan, Newcastle, Douglas, Miles City* |
| Sheridan | Worland, Gillette, Casper, Douglas, Hardin*, Miles City* |
| Newcastle | Gillette, Douglas, Baker*, Miles City* |
| Rawlins | Laramie, Casper, Riverton, Rock Springs |
| Rock Springs | Rawlins, Riverton, Evanston, Jackson |
| Evanston | Rock Springs, Jackson, Preston*; blocked: Idaho Falls* (164 mi, across Bear Lake) |
| Riverton | Worland, Rawlins, Casper, Cody, Rock Springs; Gentle only: Jackson |
| Worland | Riverton, Sheridan, Casper, Cody, Hardin*, Red Lodge* |
| Cody | Worland, Riverton, Jackson, Red Lodge*, Livingston*; Gentle only: Bozeman* |
| Jackson | Cody, Rock Springs, Evanston, Idaho Falls*, St. Anthony*, Bozeman*; Gentle only: Riverton |

**Jackson** reaches the rest of Wyoming in both modes:
- over Hoback Canyon to Pinedale (and on to Rock Springs);
- down the Snake River Canyon to Alpine and Afton (and on to Evanston);
- through Grand Teton and over Togwotee Pass to Dubois.

It reaches Idaho over Teton Pass (Victor 19 mi, St. Anthony, Idaho Falls). Jackson–Dubois itself is blocked in Tough: the straight line runs 16 mi south of Togwotee Pass, while the real road goes north through Moran. Players go by Grand Teton, as the road does. Jackson–Riverton (125 mi) crosses the Wind River Range and is blocked in Tough.

**The engine is lenient in places,** as Montana's and Idaho's notes say. A pass counts for any mountain stretch whose line comes within 12 mi (Gentle) or 9 mi (Tough) of it, counting the 20 mi (15 in Tough) before and after the stretch. Teton Pass is 9 mi from Jackson, so in Tough Jackson's lines north through the park (Old Faithful, Gardiner, West Yellowstone, Big Sky) also count as going over it. Beartooth Pass opens long lines such as Cody–Livingston.

**Neighbours.** I compared all 1,766 pairs of Idaho and Montana places near Wyoming (east of 114.5°W, south of 46.6°N, within 300 mi of each other), with this pack's passes and bridges and without them:
- **None is closed.**
- **63 open**, all long lines across Wyoming's northwest. All but one are over 140 mi (for example Rexburg–Red Lodge, 157 mi, and eastern Idaho to Billings).
- The one short one is Montpelier–Victor (88 mi, Tough), over the Snake River Canyon, which is a real route (US-89 through Star Valley).
- 159 more only change price.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Cheyenne & the Laramie Plains | `cheyenne` | Cheyenne, Laramie, Torrington, Douglas | 50 passengers; own 4 counties (the start's 3 plus Douglas); 10 crates of produce (Torrington or Douglas to Cheyenne) |
| Casper & the Powder River | `north` | Casper, Gillette, Sheridan, Newcastle | 140 passengers; connect CHY–CAS (I-25 by Wheatland, Douglas and Glenrock, open in both modes); 25 trucks (from Laramie, Newcastle and the mountain and desert towns to Cheyenne, Casper and Gillette) |
| The Overland Route | `southwest` | Rawlins, Rock Springs, Evanston, Riverton | 280 passengers; connect CHY–RKS (I-80 by Laramie and Rawlins); one high-speed train |
| Yellowstone & the Tetons | `northwest` | Worland, Cody, Jackson | 450 passengers; connect CHY–JXN (by Rock Springs and Pinedale, or Casper, Riverton and Dubois, both open in both modes); own 13 of the 15 counties |

- **Targets** follow Montana's and Idaho's four levels. Each level's regions touch the earlier ones: Rawlins touches Albany, Worland touches Natrona and Johnson-Sheridan, and Jackson touches Fremont and Sublette-Sweetwater.
- **No container goal:** Wyoming has no port.

### Biomes

Following Montana's and Idaho's conventions and the brief (the northwest mountains are forest, the basins are dry, the plains farm):
- **`forest`:** Teton. Yellowstone's lodgepole plateau and the Bridger-Teton forests.
- **`wooded`** (forested mountains over ranched valleys):
  - Park (the Absarokas and Yellowstone over the Cody–Powell basin; Montana's Park-Sweet Grass is wooded too);
  - Lincoln-Uinta (Star Valley, the Wyoming and Salt River ranges);
  - Albany (the Medicine Bow Mountains and the Laramie Range around the Laramie Plains);
  - Johnson-Sheridan (the Bighorns);
  - Crook-Weston (the Black Hills' ponderosa pine).
- **`dry`** (sagebrush basins):
  - Sublette-Sweetwater (the Red Desert);
  - Carbon (the Great Divide Basin around Rawlins);
  - Fremont (the Wind River Basin);
  - Big Horn-Hot Springs-Washakie (the Bighorn Basin);
  - Natrona (the Casper plains);
  - Campbell (the Powder River Basin; Montana's Custer-Powder River and Carter-Fallon across the line are dry).
- **Not listed (farmland and grassland):** Laramie, Goshen-Platte (the North Platte's irrigated farms) and Converse-Niobrara (shortgrass ranch country).
- **Judgment calls:** Fremont and Carbon have big forested ranges (the Wind Rivers; the Sierra Madre and Snowy Range) but are mostly basin. Campbell could be grassland.

### Checks

- **`node tools/check-pack.js WY`:** `WY: passed (15 stations, 26 towns, 0 city maps, 9 passes, 16 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js WY`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is CHY, LAR and TRG.
  - The test laid Cheyenne–Laramie (51 mi, 1 train), bought Carbon (RWL), and 4 passengers arrived in the week.
  - Levels mode opened level 1.
- **Screenshots** (`test-out/WY/`, arcade light, classic light, phone):
  - Cheyenne sits in the southeast corner with Pine Bluffs to its east and Laramie to its west.
  - Torrington and Fort Laramie are on the North Platte; Rawlins is west of the river in tan, dry Carbon.
  - The Snowy Range's peaks are between Laramie and Rawlins.
  - The phone screen's first-track hint drags Cheyenne to Laramie.

### For the main agent

1. **Airports:** none. Jackson Hole Airport is near the 1-million bar (from memory), like Montana's Billings. Add `airport: "Jackson Hole Airport"` to JXN if the bar is lower.
2. **Laramie is typed mountain,** not metro, so the first track has riders (see Start).
3. **Sherman Hill and South Pass are not passes here:** the map has no mountains at either.
4. **The Carbon–Converse corner** (about 1 km) is still a neighbour. Rawlins–Douglas is open (114 mi), but nothing here relies on it.
5. **Yellowstone is split** between Park County (Yellowstone Lake at Fishing Bridge) and Teton County (Old Faithful). The scenic places sit on the right side of that line.
6. **Utah, Colorado, Nebraska and South Dakota are still missing.** Evanston, Rock Springs and Green River (Utah); Rawlins, Saratoga, Laramie and Cheyenne (Colorado); Pine Bluffs, Torrington and Lusk (Nebraska); Newcastle, Sundance and Devils Tower (South Dakota) are in place for them.
