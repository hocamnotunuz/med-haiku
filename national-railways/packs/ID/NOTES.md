# Idaho (ID) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list is applied, giving 25 regions. The Boise–Valley group is named "Valley-Boise County" (`id-boise-valley`). The pack is built on it (phase 2, below).

Populations: `packs/ID/raw/counties.json` and `packs/ID/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`, which is within a few people of the 2020 Census counts). Every pair below shares a border in `neighbors` (checked). Roads, rivers and railways named are well known unless marked otherwise.

### Recommended (44 → 25 regions)

```
merge: [["Bonner", "Boundary"], ["Benewah", "Shoshone"], ["Clearwater", "Idaho", "Lewis"], ["Gem", "Payette"], ["Adams", "Washington"], ["Boise", "Valley"], ["Elmore", "Owyhee"], ["Blaine", "Camas"], ["Gooding", "Jerome", "Lincoln"], ["Cassia", "Minidoka"], ["Butte", "Custer", "Lemhi"], ["Clark", "Jefferson"], ["Fremont", "Teton"], ["Oneida", "Power"], ["Bear Lake", "Caribou", "Franklin"]]
```

Alone, over 50k: Ada (Boise City 235,719), Canyon (Nampa 100,308), Kootenai (Coeur d'Alene 54,642), Bonneville (Idaho Falls 65,599), Twin Falls (Twin Falls 51,811), Bannock (Pocatello 56,327), Madison (Rexburg 39,427).

Alone, under 50k (exceptions):
- **Latah** 39,523, Moscow (25,452): the University of Idaho town on the Palouse. Its neighbours are Lewiston, a separate city below the Lewiston Hill grade, or the small forest counties.
- **Nez Perce** 42,091, Lewiston (34,207): where the Snake and Clearwater rivers meet, and the inland seaport at the head of the Columbia–Snake barge route.
- **Bingham** 47,983, Blackfoot (12,428): almost 50k, and the I-15 town between Idaho Falls and Pocatello.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Bonner + Boundary | US-95 and the rail lines from Sandpoint north to Bonners Ferry and the BC border | Sandpoint (8,657) | 59,160 |
| Benewah + Shoshone | Silver Valley (I-90) and the St. Joe River (old Milwaukee Road from Avery to St. Maries) | St. Maries (2,358); Kellogg (2,316) is nearly tied | 22,699 |
| Clearwater + Idaho + Lewis | Upper Clearwater on US-12 (Orofino, Kamiah, Kooskia) and the Camas Prairie on US-95 | Grangeville (3,319); Orofino (3,227) is close | 28,801 |
| Gem + Payette | Lower Payette River farm valley: Emmett, New Plymouth, Payette | Payette (8,127) | 44,511 |
| Adams + Washington | Weiser River valley on US-95: Weiser, Cambridge, Council, New Meadows | Weiser (5,629) | 14,880 |
| Boise + Valley | ID-55 up the Payette canyon to Cascade and McCall, plus the Boise Basin | McCall (3,682) | 19,358 |
| Elmore + Owyhee | Mountain Home and the empty Owyhee desert; ID-51/ID-78 link Bruneau, Grand View and Marsing along the Snake (moderately well known) | Mountain Home (16,040) | 40,580 |
| Blaine + Camas | Wood River Valley and the Camas Prairie (US-20; Camas Creek drains to the Big Wood) | Hailey (9,172) | 25,352 |
| Gooding + Jerome + Lincoln | North side of the Snake on I-84/US-93; the UP main line runs through Shoshone and Gooding | Jerome (12,358) | 44,970 |
| Cassia + Minidoka | "Mini-Cassia": Burley and Rupert/Heyburn across the Snake | Burley (11,723) | 46,274 |
| Butte + Custer + Lemhi | US-93 runs Arco–Mackay (Big Lost River) and Challis–Salmon (Salmon River) | Salmon (3,124) | 14,834 |
| Clark + Jefferson | I-15 and the UP Montana line north through Roberts and Dubois to Monida Pass | Rigby (5,041) | 31,679 |
| Fremont + Teton | Ashton–Tetonia–Driggs on ID-32/33; gateways to Yellowstone and Teton Pass | St. Anthony (3,697) | 25,018 |
| Oneida + Power | Pocatello's rural west and south; ID-37/38 run via Rockland and Holbrook (the weakest link) | American Falls (4,561) | 12,442 |
| Bear Lake + Caribou + Franklin | Idaho's Bear River valley: Montpelier, Soda Springs (US-30, UP), Grace, Preston (ID-34) | Preston (5,595); Soda Springs (3,130) is more central | 27,591 |

US-95 stays a clean chain of regions: Bonner-Boundary, Kootenai, Benewah-Shoshone (Plummer), Latah, Nez Perce, Clearwater-Idaho-Lewis, Adams-Washington, then Gem-Payette or Canyon.

Rejected:
- Latah + Benewah (49,054): leaves Shoshone (13,168) alone.
- Jerome into Twin Falls (one metro over the Perrine Bridge): costs the north-side station.
- Owyhee into Canyon: Homedale and Marsing face Caldwell, but Canyon would then reach Nevada.
- Teton + Madison: Teton Valley connects more simply to Ashton.

### Alternative (24 regions)

Same list, but add `["Latah", "Nez Perce"]` (81,614; main station Lewiston).
- Pro: it mirrors Washington's Asotin-Garfield-Whitman (Pullman with Clarkston) and removes two exceptions.
- Con: Moscow loses its main station, and the region spans the Lewiston Hill grade.

A west-central variant also works, with the same count: [Payette, Washington], [Boise, Gem], [Adams, Valley]. It keeps McCall and New Meadows together but splits the Weiser valley.

### Map and data check

1. **The map looks right.** All 236 places lie inside their tagged county, every label is inside its county, and no county is in several pieces. A 0.02° grid found no gaps and no overlaps. County areas match the real ones (Idaho County about 8,470 sq mi, Owyhee about 7,640). Neighbours agree on both sides with the `wa-`, `or-`, `nv-` and `bc-` regions.
2. **Missing neighbours (expected, until those states arrive):**
   - Montana: Boundary, Bonner, Shoshone, Clearwater, Idaho, Lemhi, Clark and Fremont.
   - Wyoming: Fremont, Teton, Bonneville, Caribou and Bear Lake.
   - Utah: Bear Lake, Franklin, Oneida and Cassia.
3. **Places without population:** Hamer (Jefferson) and Lost River (Custer) are incorporated cities with `pop: null`. The other 36 are CDPs (for example Fort Hall, Garden Valley, Mountain Home AFB).
4. **Names:** the Census calls the capital "Boise City", so show it as "Boise". The region name "Boise-Valley County" can be mistaken for the city of Boise.

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/ID/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` points rounded to 2 decimals, except the moves listed below.
- **Facts added by hand:** marked "well known". Coordinates I gave from memory for scenic places, passes and bridges are marked "approx." (within about a mile).
- **The map's Snake River is labelled "Columbia".** Natural Earth names it so in `terrain.js`, so a train crossing the Snake shows "Columbia".
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map.

### Start

`start: ["id-ada", "id-canyon", "id-elmore-owyhee"]`. These are Boise, Nampa and Mountain Home, along I-84. Canyon and Elmore-Owyhee each touch Ada and each other.
- **Types:** metro, farm and desert, so three types.
- **First track:** the hint pairs Boise with Nampa (19 mi, open in both modes), metro to farm, so the first line has riders. The pack test laid it.
- **Considered:** Valley-Boise (McCall, mountain), but McCall is 89 mi away over the Payette canyon. Gem-Payette (farm) would give the same types as Canyon.

### Main stations (25)

Every station is at its region's biggest place in `places.json`, and each id is unused in every other pack (checked by the checker).

**Sizes** follow the PACKS.md guide:
- **3:** Boise (495k).
- **2:** Nampa (231k), Coeur d'Alene (171k), Idaho Falls (124k), Twin Falls (90k, the Magic Valley's hub, like Corvallis at 95k), and Pocatello (87k, a university city, like Kingston and Prince George).
- **1:** the rest.

| Station | Region | Type, size | Why |
| --- | --- | --- | --- |
| Boise (BOI) | Ada, 495k | metro 3 | **Capital and biggest city.** **Moved:** to downtown and the Capitol (43.62, -116.20, well known). The Census point "Boise City" (43.60, -116.23) is 2 miles southwest. **Airport:** Boise Airport is Idaho's big airport (well known) |
| Nampa (NMP) | Canyon, 231k | farm 2 | Idaho's second city, but Canyon County is the Treasure Valley's farm and food-processing country (well known). Farm, as Abbotsford is in BC. This also gives the start a farm |
| Mountain Home (MHM) | Elmore-Owyhee, 41k | desert 1 | Sagebrush, the air force base and the Owyhee desert |
| Payette (PYT) | Gem-Payette, 45k | farm 1 | Biggest (8,127, ahead of Emmett's 7,664). The lower Payette valley's farms and orchards |
| Weiser (WSR) | Adams-Washington, 15k | farm 1 | Biggest (5,629). Farm and ranch valley |
| McCall (MCC) | Valley-Boise, 19k | mountain 1 | Biggest (3,682). Payette Lake and ski country |
| Twin Falls (TF) | Twin Falls, 90k | farm 2 | Irrigated Magic Valley |
| Jerome (JER) | Gooding-Jerome-Lincoln, 45k | farm 1 | Biggest (12,358). Dairies and farms |
| Burley (BRY) | Cassia-Minidoka, 46k | farm 1 | Biggest (11,723). Mini-Cassia farms |
| Hailey (HLY) | Blaine-Camas, 25k | mountain 1 | Biggest (9,172). The Wood River Valley |
| Salmon (SLM) | Butte-Custer-Lemhi, 15k | mountain 1 | Biggest (3,124; Challis has 897 and Arco 880) |
| Pocatello (POC) | Bannock, 87k | metro 2 | City and university (Idaho State, well known) |
| Idaho Falls (IDF) | Bonneville, 124k | metro 2 | Eastern Idaho's city, home of the Idaho National Laboratory's offices (well known) |
| Rexburg (REX) | Madison, 53k | farm 1 | Farm country (and BYU–Idaho). Size 1, like McMinnville at 108k |
| Blackfoot (BFT) | Bingham, 48k | farm 1 | Potato country (well known) |
| Rigby (RIG) | Clark-Jefferson, 32k | farm 1 | Biggest (5,041) |
| St. Anthony (SAI) | Fremont-Teton, 25k | farm 1 | Biggest (3,697) |
| American Falls (AMF) | Oneida-Power, 12k | farm 1 | Biggest (4,561) |
| Preston (PSN) | Bear Lake-Caribou-Franklin, 28k | farm 1 | Biggest (5,595). In the Cache Valley's farms. It sits at the region's southwest end: Soda Springs is more central, but the rule was followed |
| Coeur d'Alene (CDA) | Kootenai, 171k | metro 2 | The Panhandle's city |
| Sandpoint (SDP) | Bonner-Boundary, 59k | mountain 1 | Biggest (8,657). Lake Pend Oreille and Schweitzer, under the Selkirks |
| St. Maries (SMA) | Benewah-Shoshone, 23k | mountain 1 | Biggest (2,358; Kellogg has 2,316). **Also the better-linked one:** in Tough, Kellogg reaches only Coeur d'Alene among neighbouring main stations, while St. Maries reaches Coeur d'Alene, Moscow and Sandpoint. SMS is taken (QC), so its id is SMA |
| Moscow (MOS) | Latah, 40k | farm 1 | The Palouse (and the University of Idaho). Farm, as WA types Pullman |
| Lewiston (LWS) | Nez Perce, 42k | coast 1 | The Port of Lewiston is at the head of the Columbia–Snake barge route, "Idaho's seaport" (well known). It is typed coast, as Thunder Bay and Hay River are. **Moved:** to downtown at the Snake–Clearwater confluence (46.42, -117.01). The Census point (46.39, -116.99) is 2.5 mi south, in the Orchards. **No `port`:** it is a barge port for grain, not a container seaport. From memory, its container barges stopped in the mid-2010s |
| Grangeville (GRG) | Clearwater-Idaho-Lewis, 29k | farm 1 | Biggest (3,319; Orofino has 3,227). The Camas Prairie's wheat town |

- **Airports:** only Boise. The smallest airport in the game is Moncton, at about 0.7 million passengers.
  - Idaho Falls Regional is Idaho's next biggest. From memory, it handles somewhat under a million passengers a year, close to that bar, so leaving it out is a judgment call.
  - If the main agent wants it, add `airport: "Idaho Falls Regional"` to IDF.
  - Coeur d'Alene's travellers use Spokane International (WA).
- **Ports:** none (see Lewiston).

### Towns (42: 33 towns and 9 scenic places)

Every town is inside its region. The checker gives no spacing warnings: the closest pair is Twin Falls and Shoshone Falls, 4.1 mi apart. Populations are from `places.json`.

| Region | Towns |
| --- | --- |
| Ada | Meridian (117,745, metro 2) |
| Canyon | Caldwell (60,068, farm 2) |
| Gem-Payette | Emmett (7,664, farm), on the Payette River |
| Elmore-Owyhee | Homedale (2,881, farm, Owyhee's biggest town); Glenns Ferry (1,285, desert, on I-84 and the UP main line); **Bruneau Dunes** (scenic) |
| Adams-Washington | Council (870, mountain); **Hells Canyon** (scenic) |
| Valley-Boise | Cascade (993, on ID-55); Idaho City (465, the Boise Basin gold town, well known) |
| Twin Falls | Buhl (4,564); **Shoshone Falls** (scenic) |
| Gooding-Jerome-Lincoln | Gooding (3,706) |
| Cassia-Minidoka | Rupert (6,080); **City of Rocks** (scenic) |
| Blaine-Camas | **Sun Valley** (scenic); Fairfield (445, the Camas Prairie, farm) |
| Butte-Custer-Lemhi | Arco (880, desert); **Craters of the Moon** (scenic); Challis (897); **Stanley** (118, scenic); Leadore (95) |
| Bingham | Shelley (4,784) |
| Bannock | **Lava Hot Springs** (360, scenic) |
| Oneida-Power | Malad City (2,298), on I-15 to Utah |
| Bear Lake-Caribou-Franklin | Soda Springs (3,130); Montpelier (2,643); **Bear Lake** (scenic) |
| Bonneville | Swan Valley (227, mountain), on US-26 toward Palisades and Jackson |
| Clark-Jefferson | Dubois (514, desert), on I-15 toward Monida Pass |
| Fremont-Teton | Victor (2,154, the Teton Valley's biggest town); Island Park (194, the Yellowstone gateway on US-20) |
| Kootenai | Post Falls (38,555, metro) |
| Bonner-Boundary | Bonners Ferry (2,523); Priest River (1,661) |
| Benewah-Shoshone | Kellogg (2,316); Wallace (788, the historic silver-mining town, well known) |
| Latah | Genesee (1,028), on US-95 toward Lewiston |
| Nez Perce | Lapwai (1,166, the Nez Perce Tribe's seat, well known) |
| Clearwater-Idaho-Lewis | Orofino (3,227); Kamiah (1,118), both on US-12 along the Clearwater; Riggins (372), on US-95 in the Salmon River canyon |
| Madison | none: Sugar City (1,715) is 4.6 mi from Rexburg |

**Scenic places** (all well known). Coordinates are approx. unless they are a town's point.

| Place | Point | What it is |
| --- | --- | --- |
| Shoshone Falls | 42.59, -114.39 | "The Niagara of the West", on the Snake River just east of Twin Falls. The park is on the south rim; the falls are on the county line, the river. Placed 0.6 mi southeast of the falls, so it is inside Twin Falls County and 4.1 mi from the Twin Falls station |
| Bruneau Dunes | 42.90, -115.70 | Bruneau Dunes State Park: the tallest single-structured sand dune in North America |
| Hells Canyon | 45.25, -116.69 | The deepest river gorge in North America (Hells Canyon National Recreation Area). It sits on the Idaho bank near Hells Canyon Dam, at the end of the road down the canyon from Oxbow. That the road down to the dam is on the Idaho side is from memory |
| City of Rocks | 42.07, -113.71 | City of Rocks National Reserve: granite spires, a California Trail landmark and a climbing area, near Almo |
| Sun Valley | 43.69, -114.36 | The ski resort that Union Pacific built in 1936 (well known). The point is between the Ketchum (43.69, -114.38) and Sun Valley (43.68, -114.33) points, which are 2.3 mi apart, so one place stands for both |
| Craters of the Moon | 43.42, -113.52 | Craters of the Moon National Monument: lava fields on US-20/26 west of Arco. The point is its visitor center |
| Stanley | 44.21, -114.93 (town) | The Sawtooth Valley and the Sawtooth National Recreation Area |
| Lava Hot Springs | 42.62, -112.01 (town) | The hot-springs resort town on the Portneuf River, on US-30 |
| Bear Lake | 42.13, -111.38 | The turquoise lake split by the Idaho–Utah line. The point is on the north shore at St. Charles (42.11, -111.39), nudged north from the town point. Bear Lake State Park's North Beach is nearby (from memory) |

**Kept for reachability:**
- **Leadore (95 people).** It is Salmon's way south by ID-28, the Lemhi valley road (well known). Without it, Salmon's only open link in Tough is Challis.
- **Riggins.** It is the US-95 link between Grangeville and McCall.

**Left out:**
- **Too close to a main station (2–5 mi):** Ammon, Chubbuck, Hayden, Heyburn, Fruitland, Kimberly, Bellevue and Sugar City.
- **Cut to keep about 1.7 towns per region:** Mackay, Carey, Shoshone, Ashton, Horseshoe Bend, Plummer and Aberdeen. None was needed for reachability. Aberdeen's links to Pocatello and Blackfoot also cross American Falls Reservoir (blocked in Tough).
- **Mud Lake:** tested as the end of ID-28. Dubois serves the same purpose.

### Passes (13) and bridges (4)

Each is real, at the road's crossing as far as the coarse map allows. The checker's only warning is for Monida Pass (see the table).

| Entry | Point | Source | What uses it |
| --- | --- | --- | --- |
| Fourth of July Pass | 47.55, -116.50 approx. | I-90 between Coeur d'Alene and the Silver Valley (the Mullan Road's route; well known) | Coeur d'Alene and Post Falls to Kellogg and Wallace; Coeur d'Alene–St. Maries in Tough |
| Lookout Pass | 47.46, -115.70 | I-90 at the Montana line (well known) | Wallace's links west in Gentle. It is for Montana later |
| Clearwater River (US-12) | 46.38, -116.17 approx. | US-12 follows the Clearwater from Orofino past Greer to Kamiah (Northwest Passage Scenic Byway; well known) | Orofino–Kamiah. It was blocked in Tough by 18 mi of mountains, and opens with the pass. Also Lewiston, Moscow and St. Maries to Orofino and Kamiah |
| Lolo Pass | 46.64, -114.58 | US-12 at the Montana line (well known) | Nothing yet; for Montana |
| White Bird Hill | 45.83, -116.23 approx. | US-95's grade from the Camas Prairie down to White Bird and the Salmon River (the 1877 battlefield; well known) | Grangeville–Riggins (blocked in Tough before), Grangeville–McCall, and Kamiah–Riggins |
| Little Salmon River (US-95) | 45.20, -116.33 approx. | US-95 follows the Little Salmon from Riggins up to New Meadows (well known along US-95) | Riggins–McCall and Riggins–Council (both blocked in Tough before), and Grangeville–Council |
| Payette River (ID-55) | 44.18, -116.11 approx. | ID-55 follows the North Fork Payette between Banks and Smiths Ferry (Payette River Scenic Byway; well known) | Boise–McCall and Treasure Valley–Cascade: their short tunnels become the pass |
| Galena Summit | 43.87, -114.71 | ID-75 between Sun Valley and the Sawtooth Valley (well known) | Stanley to Sun Valley, Hailey and Fairfield (blocked in Tough before) |
| Salmon River (ID-75) | 44.27, -114.60 approx. | ID-75 follows the Salmon from Stanley via Clayton to the US-93 junction (Salmon River Scenic Byway; well known) | Stanley–Challis (blocked in Tough before) |
| Salmon River (US-93) | 44.80, -114.00 approx. | US-93 follows the Salmon from Challis to Salmon (well known) | Salmon–Challis (blocked in Tough before) |
| Lost Trail Pass | 45.69, -113.94 | US-93 at the Montana line (well known) | Nothing yet; for Montana |
| Monida Pass | 44.56, -112.31 | I-15 and the Union Pacific's Montana line (well known) | Nothing yet; for Montana. **Checker warning:** "no mountains within ~7 miles". It is a broad, gentle pass, and the map has only hills there. It is kept for Montana |
| Targhee Pass | 44.68, -111.27 | US-20 to West Yellowstone (well known) | Nothing yet; for Montana |
| Long Bridge (Sandpoint) | 48.25, -116.55 | US-95 across Lake Pend Oreille's west end, about 2 mi long (well known) | Sandpoint south to Coeur d'Alene, St. Maries and Post Falls. Its 1.5 mi of lake now costs the real-bridge price. Lines farther east across the lake (Sandpoint–Kellogg and –Wallace) stay blocked in Tough by the mountains |
| Kootenai River bridge (Bonners Ferry) | 48.70, -116.32 | US-95 over the Kootenai. The town is named for Bonner's 1860s ferry (well known) | Bonners Ferry's lines into BC (Creston, Cranbrook) cross the map's Kootenay at the town |
| Memorial Bridge (Lewiston) | 46.43, -117.01 | US-12 over the Clearwater between downtown and North Lewiston (well known locally; the name is from memory) | Lewiston north to Moscow, Genesee, Coeur d'Alene and St. Maries |
| Perrine Bridge | 42.61, -114.46 | US-93 high over the Snake River Canyon at Twin Falls (well known) | Twin Falls–Jerome and the other lines north out of Twin Falls. **Placement:** 0.6 mi north of the real span, on the map's river. At the span's own point (42.60, -114.45), Twin Falls–Jerome crossed the river 2.0 mi away and missed it |

**Not added:**
- **Teton Pass:** it is in Wyoming, so it belongs to Wyoming's pack.
- **Pine Creek Pass** (Swan Valley–Victor): the link is open without it.
- **Banner Summit** (ID-21, Stanley–Lowman): a pass point there is not near any line between the places in the pack.
- **Lewiston Hill:** there are no mountains on the map between Lewiston and Moscow.
- **A bridge on American Falls Reservoir:** Aberdeen was cut instead.
- **The Washington pack's "Snake River bridge (Clarkston–Lewiston)"** already serves the Snake at Lewiston.

### How the map plays

**Counts.** Of the 519 pairs of Idaho places within 100 mi of each other:
- 9 are blocked in Gentle and 76 in Tough;
- with links up to 100 mi, every Idaho place is in one network in both modes;
- every place has at least two open links within 100 mi in both modes. The fewest are Salmon's: Leadore and Challis in Tough; Stanley too in Gentle.

**The real roads, as chains,** are open in both modes:
- **US-95:** Bonners Ferry–Sandpoint–Coeur d'Alene–St. Maries–Moscow–Lewiston–Grangeville–Riggins–McCall–Council–Weiser–Payette–Boise. This is the Panhandle–south link: Grangeville–McCall (70 mi) is also open directly, and so is Grangeville–Weiser (123 mi).
- **I-84, I-86 and I-15:** Nampa–Boise–Mountain Home–Glenns Ferry–Twin Falls–Burley–American Falls–Pocatello–Blackfoot–Idaho Falls–Rigby–Rexburg–St. Anthony–Island Park.
- **US-93, ID-75 and ID-28:** Twin Falls–Jerome–Hailey–Sun Valley–Stanley–Challis–Salmon–Leadore–Dubois–Idaho Falls, with Challis–Arco–Craters of the Moon.
- **ID-55:** Boise–Emmett–Cascade–McCall.
- **US-30 and the Bear River:** Pocatello–Lava Hot Springs–Soda Springs–Montpelier–Bear Lake–Preston–Malad City–Pocatello.
- **I-90 and US-12:** Coeur d'Alene–Kellogg–Wallace; Lewiston–Lapwai–Orofino–Kamiah–Grangeville.

**Main stations: neighbouring main stations reached directly.** The results are the same in both modes, except the two Gentle-only links noted.

| Station | Reaches (neighbouring regions' main stations; other states' in brackets) |
| --- | --- |
| Boise | Nampa, Mountain Home, Payette, McCall |
| Nampa | Boise, Mountain Home, Payette (Ontario) |
| Mountain Home | Boise, Nampa, McCall, Hailey, Jerome, Twin Falls (Elko, Ontario); Salmon only in Gentle |
| Payette | Boise, Nampa, Weiser, McCall (Ontario) |
| Weiser | Payette, McCall, Grangeville (Ontario, La Grande) |
| McCall | Boise, Payette, Weiser, Grangeville, Mountain Home |
| Twin Falls | Jerome, Burley, Mountain Home (Elko) |
| Jerome | Twin Falls, Burley, Hailey, Mountain Home |
| Burley | Twin Falls, Jerome, Hailey, American Falls (Elko) |
| Hailey | Jerome, Burley, Mountain Home, Blackfoot, American Falls |
| **Salmon** | **None.** Blackfoot, Hailey, McCall, Rigby and Grangeville are blocked in both modes, and Mountain Home (167 mi) is open only in Gentle. **Geography doesn't allow more:** the Salmon River Mountains, the Lemhi Range and the Beaverhead Mountains surround it. Its real roads run through its own region's towns, and so do its links: Challis (US-93, then Arco or Stanley) and Leadore (ID-28, then Dubois). Lost Trail Pass will add Montana |
| Pocatello | Blackfoot, American Falls, Preston |
| Idaho Falls | Blackfoot, Rigby, Rexburg, St. Anthony, Preston |
| Rexburg | Idaho Falls, Rigby, St. Anthony |
| Blackfoot | Pocatello, Idaho Falls, Rigby, American Falls, Preston, Hailey |
| Rigby | Idaho Falls, Rexburg, St. Anthony, Blackfoot |
| St. Anthony | Idaho Falls, Rexburg, Rigby |
| American Falls | Pocatello, Blackfoot, Burley, Hailey, Preston |
| Preston | Pocatello, Blackfoot, Idaho Falls, American Falls |
| Coeur d'Alene | St. Maries, Sandpoint (Spokane) |
| Sandpoint | Coeur d'Alene, St. Maries (Spokane, Colville). Nelson (BC) is open only in Gentle, and Cranbrook is blocked in both |
| St. Maries | Coeur d'Alene, Sandpoint, Moscow, Grangeville (Spokane, Pullman) |
| Moscow | St. Maries, Lewiston, Grangeville (Pullman) |
| Lewiston | Moscow, Grangeville (Pullman, La Grande) |
| Grangeville | Lewiston, Moscow, St. Maries, McCall, Weiser (La Grande) |

**The engine is lenient in places.** A pass counts for any mountain stretch whose line comes within 12 mi (Gentle) or 9 mi (Tough) of it, so a few long lines through the mountains open too. Examples are Payette–Riggins (97 mi), and Salmon–St. Anthony (137 mi) in Tough. This is how every pack works, and I left it.

**Neighbours.** I compared every pair of places in other states, within 300 mi of each other in the area around Idaho, with this pack's passes and bridges and without them.
- **No link of up to 250 mi changes status.**
- **Four cross-Idaho links open in Gentle,** over Fourth of July or Lookout Pass: Palouse Falls–Waterton Lakes (259 mi), Dayton–Waterton (267), Walla Walla–Waterton (292) and Lethbridge–Clarkston (298).
- **Other cross-Idaho pairs only get cheaper** (for example Clarkston–Waterton and Cranbrook–Clarkston). They stay open, or stay blocked, as they were. In Tough nothing changes status.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Treasure Valley | `treasure` | Boise, Nampa, Mountain Home, Payette, Weiser, McCall | 50 passengers; own 5 counties; 10 crates of produce (from Nampa, Payette or Weiser to Boise) |
| Magic Valley & Sun Valley | `magic` | Twin Falls, Jerome, Burley, Hailey, Salmon | 140 passengers; connect BOI–TF (open by I-84 through Mountain Home); 25 trucks (from Mountain Home, McCall and Hailey to Boise) |
| Eastern Idaho | `east` | Pocatello, Idaho Falls, Rexburg, Blackfoot, Rigby, St. Anthony, American Falls, Preston | 280 passengers; connect BOI–IDF (Twin Falls–Burley–American Falls–Pocatello–Blackfoot–Idaho Falls); one high-speed train |
| North Idaho | `north` | Coeur d'Alene, Sandpoint, St. Maries, Moscow, Lewiston, Grangeville | 450 passengers; connect BOI–CDA (up US-95 through McCall, Grangeville and Lewiston, open in both modes); own 20 counties |

- **Targets** follow Washington's four levels.
- **No container goal:** Idaho has no port.

### Biomes

The conventions follow Oregon's and Washington's:
- **`forest`** (the Panhandle and the central Idaho forests, as the brief asks): Bonner-Boundary, Kootenai, Benewah-Shoshone, Clearwater-Idaho-Lewis, Valley-Boise.
- **`wooded`** (forested mountains over dry or farmed valleys): Adams-Washington, Latah (the Palouse in the west, forest in the east), Blaine-Camas, Butte-Custer-Lemhi, Fremont-Teton, Bonneville, Bannock, Bear Lake-Caribou-Franklin.
- **`dry`** (the Snake River Plain's sagebrush and lava, irrigated in parts): Elmore-Owyhee, Twin Falls, Gooding-Jerome-Lincoln, Cassia-Minidoka, Bingham, Clark-Jefferson, Oneida-Power. Washington makes its irrigated Yakima and Grant dry, and Oregon its Malheur.
- **Not listed (farmland and grassland):**
  - Ada: Boise is "the City of Trees" on its river (well known).
  - Canyon and Gem-Payette: the irrigated Treasure Valley.
  - Madison.
  - Nez Perce: canyon grassland and prairie wheat.

### Checks

- **`node tools/check-pack.js ID`:** `ID: passed (25 stations, 42 towns, 0 city maps, 13 passes, 4 bridges), 0 errors, 1 warnings`. The warning is Monida Pass, explained above.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js ID`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is BOI, NMP and MHM.
  - The test laid Boise–Nampa (21 mi, 1 train) and bought Blaine-Camas (station HLY).
  - 1 and 2 passengers arrived in the week (two runs).
- **Screenshots.** I looked at `test-out/ID/`, and at extra views with every county owned and every station and town shown:
  - Boise, Nampa and Mountain Home sit on the Snake River Plain.
  - Lewiston is at the confluence on the Washington line, and Sandpoint is on Lake Pend Oreille's west end.
  - Salmon is in the Lemhi valley.
  - Preston, Montpelier and Bear Lake are in the southeast corner.
  - Forests cover the north and centre, and tan desert the southwest and the plain.

### For the main agent

1. **The map's Snake River is called "Columbia"** (Natural Earth's naming in `build-terrain.js`). Players crossing the Snake see "Columbia".
2. **Monida Pass** gives the checker's warning (no mountains within ~7 mi), because it is a broad pass. It is kept for Montana's I-15.
3. **Montana, Wyoming and Utah neighbours are still missing.** The border passes (Lookout, Lolo, Lost Trail, Monida, Targhee) are in place for them.
