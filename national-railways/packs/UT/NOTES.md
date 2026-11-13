# Utah (UT) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written, giving 18 regions. The pack (phase 2, below) is built on it.

Populations: `packs/UT/raw/counties.json` and `packs/UT/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 3,271,614). Every group is connected through `neighbors`. I checked it: each member shares 40 km or more of border with another member, measured on the rings in `map.js`. Roads, rivers, passes and railways named here are well known unless marked "(moderately known)".

### Recommended (29 → 18 regions)

```
merge: [["Cache", "Rich"], ["Morgan", "Summit"], ["Daggett", "Duchesne", "Uintah"], ["Carbon", "Emery"], ["Grand", "San Juan"], ["Piute", "Sevier", "Wayne"], ["Garfield", "Kane"], ["Beaver", "Juab", "Millard"]]
```

No `names` needed. The automatic names read well ("Morgan-Summit County", "Daggett-Duchesne-Uintah County").

Alone, over 50k: **Salt Lake** (Salt Lake City), **Utah** (Provo), **Davis** (Layton), **Weber** (Ogden), **Washington** (St. George), **Tooele** (Tooele), **Box Elder** (Brigham City) and **Iron** (Cedar City). Cache is over 50k too and takes Rich (below).

Alone, under 50k (exceptions):
- **Wasatch** 34,782, Heber (16,867) and Midway (6,000): the Heber Valley, reached from Provo up Provo Canyon (US-189), from Park City on US-40, and from the Uinta Basin over Daniels Summit (moderately known). Merged with Summit, Heber would take the station from Park City (8,393). Merged with Duchesne, it would split the Uinta Basin.
- **Sanpete** 28,437, Ephraim (5,607), Mount Pleasant, Gunnison and Manti: the Sanpete Valley on US-89. The Wasatch Plateau lies east (towards Emery) and the San Pitch Mountains west (towards Nephi). Its only open-valley partner is Sevier, which is needed for Piute and Wayne (see the alternative).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Cache + Rich | Bear Lake (Garden City) and the Bear River valley (Randolph, Woodruff). Its only Utah road to the rest of the state is US-89 over Logan Canyon. Other roads leave through Wyoming (to Evanston) or Idaho (moderately known). Merging a tiny county into a bigger one is an exception, with a precedent: Washington's Columbia + Walla Walla | Logan (52,806) | 135,671 |
| Morgan + Summit | The Weber River from Kamas and Coalville to Morgan. I-84 and the Union Pacific's Overland Route run down Weber Canyon to Echo, and I-80 runs from Parleys Summit through Park City and Echo Canyon to Wyoming | Park City (8,393) | 54,661 |
| Daggett + Duchesne + Uintah | The Uinta Basin on US-40 (Duchesne, Roosevelt, Vernal) and Flaming Gorge (Manila, Dutch John), reached from Vernal on US-191 | Vernal (10,077) | 56,152 |
| Carbon + Emery | Castle Country (moderately known): US-6 and the Union Pacific (the old Rio Grande) from Soldier Summit down Price Canyon to Helper, Price and Green River. Castle Dale and Huntington are in Castle Valley | Price (8,209) | 30,242 |
| Grand + San Juan | Canyon country on US-191: Moab, Monticello, Blanding and Bluff. It holds Arches, Canyonlands and Monument Valley | Moab (5,353) | 24,177 |
| Piute + Sevier + Wayne | The Sevier Valley on US-89 and I-70 (Salina, Richfield, Monroe), up the valley to Marysvale, Junction and Circleville. UT-24 runs from Sigurd to Loa, Torrey and Capitol Reef (moderately known) | Richfield (8,148) | 25,437 |
| Garfield + Kane | US-89 from Panguitch through Long Valley to Kanab (moderately known). Bryce Canyon, Grand Staircase–Escalante and Lake Powell's west shore | Kanab (4,677) | 12,752 |
| Beaver + Juab + Millard | I-15 through the west desert: Nephi, Scipio, Fillmore, Cove Fort (where I-70 begins) and Beaver. Delta and Milford are on the Union Pacific's Los Angeles line (moderately known) | Nephi (6,442) | 31,832 |

The corridors stay clean chains:
- **I-15:** Box Elder, Weber, Davis, Salt Lake, Utah, Beaver-Juab-Millard, Iron, Washington, then Arizona.
- **I-80:** Tooele, Salt Lake, Morgan-Summit, then Wyoming.
- **I-84 and the Union Pacific's Overland Route:** Box Elder, Weber, Morgan-Summit, then Wyoming.
- **I-70:** Beaver-Juab-Millard, Piute-Sevier-Wayne, Carbon-Emery, Grand-San Juan, then Colorado.
- **US-6 and the old Rio Grande:** Utah, Carbon-Emery, Grand-San Juan.
- **US-40:** Wasatch, Daggett-Duchesne-Uintah, then Colorado.
- **US-191:** Wyoming, Daggett-Duchesne-Uintah, Carbon-Emery, Grand-San Juan, then Arizona.
- **The Union Pacific's Los Angeles line:** Utah, Beaver-Juab-Millard, Iron, then Nevada.

Rejected:
- Summit + Wasatch (77,149), or with Morgan as well (89,443): Heber takes Park City's station. Without Summit, Morgan is left with only Rich, over mountains.
- Rich + Morgan + Summit (57,174): Bear Lake has no Utah road to either county. The Bear River leaves Summit through Evanston, Wyoming.
- Wasatch + Duchesne (54,386): Daniels Summit lies between, and Roosevelt would be split from Vernal.
- Carbon + Emery + Grand (39,906): Moab loses its station to Price, and San Juan is left alone.
- Juab + Sanpete (40,215): the San Pitch Mountains lie between (UT-132, Salt Creek Canyon; moderately known), and Nephi would take Sanpete's station.
- Kane + Washington: Zion lies between, and St. George is a metro.

### Alternative (also 18 regions)

Replace Piute-Sevier-Wayne, Garfield-Kane and Sanpete alone with `["Sanpete", "Sevier"]` (49,945; Richfield), `["Garfield", "Piute", "Wayne"]` (9,015; Panguitch 1,727) and **Kane** alone (7,666; Kanab).
- Pro: the Sanpete and Sevier valleys meet on US-89 at Gunnison and Salina (nearly 50k). UT-12 puts Bryce, Escalante and Capitol Reef in one region.
- Con: Ephraim and Manti lose their station, Kane stands alone at 7.7k, and the emptiest region gets a 1,700-person main station.

### Map and data check

1. **The map looks right.** All 334 places lie inside their tagged county. Every label is inside its county, and every county is one piece. County areas add up to about 84,800 sq mi, which matches Utah's total area with water.
2. **Hooper (Weber, 9,091): its Census point (41.163, -112.342) is on Fremont Island**, inside the island hole of `terrain.js`'s Great Salt Lake, about 7 km off the east shore. The town itself is on the shore west of Roy. Do not use the raw point for a town.
3. **Great Salt Lake.** `terrain.js` draws it with two islands as land: Antelope, which is in Davis's polygon, and Fremont, in Weber's. Most of the lake is in Box Elder. The **Davis–Tooele border (39 km) runs entirely through the lake**, so they are neighbours only across water. This is harmless, because Salt Lake borders both. Box Elder–Weber is half lake and half land. Box Elder–Tooele is mostly land, on the salt flats.
4. **Neighbours agree both ways** with the `id-`, `wy-`, `nv-` and `az-` regions, and none is missing. Short contacts: Daggett–Duchesne 2 km, Beaver–Garfield 3 km, Cache–`id-oneida-power` 4 km, Summit–`wy-sublette-sweetwater` 4 km, Salt Lake–Wasatch 5 km, Beaver–Sevier 7 km, Rich–Weber 11 km, Morgan–Salt Lake 12 km, Carbon–Sanpete 12 km and Duchesne–Utah 13 km. No merge relies on them. After the merges, the 3 km Beaver–Garfield corner is the only contact between Beaver-Juab-Millard and Garfield-Kane.
5. **Colorado is missing (expected):** Daggett, Uintah, Grand and San Juan are on the open edge. San Juan meets New Mexico only at the Four Corners point.
6. **Region ids in other states.** After the rebuild, the Idaho, Wyoming, Nevada and Arizona maps will list the new `ut-` ids. Nothing outside `packs/UT` names a `ut-` id (grep).
7. **Terrain, for phase 2.** There is an unnamed "Lake" near the Bear River's mouth (41.5 N, 112.2 W). Only the Colorado, Green, Bear and White rivers and the Wasatch Range are named. The Sevier, Virgin, San Juan, Weber and Provo rivers and the Uinta Mountains are not.
8. **Places without population:** all 79 are CDPs (for example Snyderville, Maeser, Fort Duchesne, Spanish Valley, Oljato-Monument Valley). No main-station choice depends on them.
9. **Names:** "Utah County, Utah" holds Provo, and Logan is in Cache. Stations should be named by town.

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/UT/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Station and town coordinates are `places.json` points rounded to 2 decimals, except where noted.
- **Facts added by hand** (passes, bridges, scenic places, roads and railways) are well known unless marked "moderately known". A point marked "approx." is one I gave from memory, within about a mile or two.
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain.

### Start

`start: ["ut-salt-lake", "ut-utah", "ut-wasatch"]`: Salt Lake City, Provo and Heber. Utah and Wasatch counties touch Salt Lake County and each other.
- **Types:** metro, metro and mountain.
- **First track:** the hint pairs Salt Lake City with Heber (31 mi, over Parleys Summit, as I-80 and US-40 go; $60k in Gentle). The pack test laid Provo–Heber (25 mi, up Provo Canyon), and 5 passengers arrived in the week.
- **Why not Tooele or Davis:**
  - I first tried Salt Lake, Utah and Tooele. It works (hint Salt Lake City–Tooele, metro to desert), but the pack test warned that Provo–Tooele is blocked by Utah Lake (9 mi of water). The hint also tunnels 6 mi through the Oquirrhs' north end, where I-80 goes around them.
  - Davis (Layton) is the natural third county, but Salt Lake City–Layton (22 mi) would be the hint: two metros, which carries nobody in "A type of place".

### Main stations (18)

Every station is at its region's biggest place in `places.json`. Four points are moved from the Census point (the city's middle) to downtown, all well known:

| Station | Census point | Pack point | Why |
| --- | --- | --- | --- |
| Salt Lake City | 40.78, -111.93 | 40.76, -111.89 | Downtown and Temple Square; the Census point is 2.4 mi west, by the railroad yards |
| Brigham City | 41.51, -112.05 | 41.51, -112.02 | Main Street (US-89); 1.7 mi |
| Heber | 40.54, -111.39 | 40.51, -111.41 | Main Street (US-40); 2.5 mi |
| Cedar City | 37.68, -113.10 | 37.68, -113.06 | Main Street; 2.0 mi |

**Ids:** each id is unused in every other pack (the checker checks). PRV, EPH and BRG were taken, so Provo is PVU (its airport code), Ephraim EPM and Brigham City BGC.

**Sizes:**
- **4:** Salt Lake City (1.19 million; Sacramento and Spokane are 4).
- **3:** Provo (659k) and Layton (363k), as the brief says (Oregon's Washington and Clackamas counties are 3).
- **2:** Ogden (262k), St. George (180k), Logan (136k) and Tooele (73k), by the size guide (60k–300k; Helena is 2 at 71k).
- **1:** the rest, including Box Elder (58k) and Iron (57k), which are under 60k (Payson, Rexburg and Sandpoint are 1 at 53k–59k).

**Types:** 5 metro, 6 desert, 4 mountain, 3 farm.

| Station | Region, pop | Type, size | Why |
| --- | --- | --- | --- |
| Salt Lake City (SLC) | Salt Lake, 1,185k | metro 4, **airport** | The capital (199,708) |
| Provo (PVU) | Utah, 659k | metro 3 | Biggest (115,170; Orem 98,137, Lehi 75,912). BYU |
| Layton (LAY) | Davis, 363k | metro 3 | Biggest (81,779; Bountiful 45,772). Hill Air Force Base |
| Heber (HEB) | Wasatch, 35k | mountain 1 | Biggest (16,867). The Heber Valley under the Wasatch |
| Park City (PKC) | Morgan-Summit, 55k | mountain 1, **scenic** | Biggest (8,393; Morgan 4,070). Ski resorts, the 2002 Winter Olympics and the Sundance Film Festival draw tourists, as Jackson does in Wyoming |
| Ogden (OGD) | Weber, 262k | metro 2 | Biggest (87,344). The railroad city (Union Station) |
| Brigham City (BGC) | Box Elder, 58k | farm 1 | Biggest (19,648; Tremonton 9,895). Orchards along US-89 and wheat (moderately known) |
| Logan (LOG) | Cache-Rich, 136k | metro 2 | Biggest (52,806). Cache Valley's city and Utah State University; metro, as Missoula and Bozeman are |
| Tooele (TOO) | Tooele, 73k | desert 2 | Biggest (35,750). The county is the West Desert (the Great Salt Lake Desert, the Bonneville Salt Flats, Dugway Proving Ground) |
| Vernal (VNL) | Daggett-Duchesne-Uintah, 56k | desert 1 | Biggest (10,077; Roosevelt 6,785). The Uinta Basin's oil and gas town and "Dinosaurland", in a sagebrush basin (as Rock Springs) |
| Price (PRI) | Carbon-Emery, 30k | mountain 1 | Biggest (8,209). The coal town where Price Canyon leaves the Book Cliffs and the Wasatch Plateau. Typed mountain, not desert, so that Vernal–Price and Price–Moab carry riders |
| Ephraim (EPM) | Sanpete, 28k | farm 1 | Biggest (5,607). The Sanpete Valley's farms (its turkey farms are moderately known) and Snow College |
| Nephi (NPH) | Beaver-Juab-Millard, 32k | desert 1 | Biggest (6,442). Typed by its region, mostly the Sevier Desert and the Great Basin's ranges. Delta and Fillmore are its farm towns. Judgment call: farm would also fit Nephi itself |
| Moab (MOA) | Grand-San Juan, 24k | desert 1, **scenic** | Biggest (5,353). The gateway to Arches and Canyonlands |
| Richfield (RFD) | Piute-Sevier-Wayne, 25k | farm 1 | Biggest (8,148). The Sevier Valley's farms |
| Kanab (KNB) | Garfield-Kane, 13k | desert 1 | Biggest (4,677). Under the Vermilion Cliffs |
| Cedar City (CDC) | Iron, 57k | mountain 1 | Biggest (35,247). At the foot of the Markagunt Plateau (Cedar Breaks, Brian Head) |
| St. George (STG) | Washington, 180k | desert 2 | Biggest (95,344). The Mojave Desert's edge, Utah's "Dixie", as Arizona types Lake Havasu City |

**Airports:** only Salt Lake City International (well known: Utah's only big airport and a Delta hub). The bar the other packs use is about 1 million passengers a year.
- From memory, St. George Regional is well under that bar.
- Provo Airport has grown fast since its new terminal opened (2022) and may be near the bar. I'm not sure of its numbers, so it is left out. If the main agent wants it, add `airport: "Provo Airport"` to PVU.
- Ogden, Cedar City and Canyonlands Field (Moab) are small.
- **Ports:** none.

### Towns (39: 28 towns and 11 scenic places)

Every town is inside its region and the checker gives no spacing warnings. The closest pair is Moab and Arches (5.1 mi). Populations are from `places.json`.

| Region | Towns |
| --- | --- |
| Salt Lake | West Valley City (140,238, metro 3); Sandy (97,251, metro 2) |
| Utah | Lehi (75,912, metro 2, "Silicon Slopes"); Spanish Fork (42,614, farm: southern Utah Valley, at the mouth of Spanish Fork Canyon) |
| Davis | Bountiful (45,772, metro 2); **Antelope Island** (scenic) |
| Weber | Huntsville (575, mountain: the Ogden Valley, Pineview Reservoir, Snowbasin and Powder Mountain) |
| Cache-Rich | Smithfield (13,569, farm); Garden City (603, mountain: Bear Lake's Utah shore, over Logan Canyon) |
| Box Elder | Tremonton (9,895, farm); **Golden Spike** (scenic) |
| Tooele | Grantsville (12,635, farm); **Bonneville Salt Flats** (scenic) |
| Washington | Hurricane (20,031, desert); **Zion** (scenic) |
| Iron | Parowan (2,998, farm) |
| Morgan-Summit | Morgan (4,070, farm, on I-84 and the Union Pacific in the Weber Valley); Coalville (1,489, farm, on I-80) |
| Wasatch | none (Midway, 6,000, is 3.7 mi from Heber) |
| Daggett-Duchesne-Uintah | Roosevelt (6,785, desert); **Dinosaur** (scenic); **Flaming Gorge** (scenic) |
| Carbon-Emery | Green River (847, desert: I-70, the Union Pacific and the Green River); Castle Dale (1,489, farm: Castle Valley); **Goblin Valley** (scenic) |
| Grand-San Juan | **Arches** (scenic); **Canyonlands** (scenic); Monticello (1,820, mountain, 7,000 ft under the Abajo Mountains); Blanding (3,389, desert) |
| Piute-Sevier-Wayne | Salina (2,464, farm, where I-70 leaves US-89); **Capitol Reef** (scenic); Hanksville (158, desert) |
| Garfield-Kane | Panguitch (1,727, mountain: the upper Sevier valley); **Bryce Canyon** (scenic); Escalante (791, desert) |
| Sanpete | Mount Pleasant (3,654, farm); Gunnison (3,512, farm) |
| Beaver-Juab-Millard | Delta (3,619, farm); Fillmore (2,597, farm); Beaver (3,596, mountain, under the Tushar Mountains) |

**Scenic places** (all well known; points approx. unless they are Census points):

| Place | Point | What it is |
| --- | --- | --- |
| Antelope Island | 41.04, -112.24 approx. | Antelope Island State Park (its bison herd), reached by the 7-mile causeway from Syracuse. On the island near the north-end visitor center: inside the map's island (a hole in Great Salt Lake) and in Davis County |
| Golden Spike | 41.62, -112.55 approx. | Golden Spike National Historical Park at Promontory Summit, where the first transcontinental railroad was finished on May 10, 1869. At the visitor center |
| Bonneville Salt Flats | 40.77, -113.87 approx. | The salt flats and the Bonneville Speedway (land speed records), by I-80 east of Wendover. The flats are many miles across, so any point in them is fair |
| Zion | 37.20, -112.99 approx. | Zion National Park, at the Zion Canyon Visitor Center by Springdale (Springdale's Census point is 37.18, -113.00) |
| Dinosaur | 40.44, -109.30 approx. | Dinosaur National Monument, at the Quarry Exhibit Hall north of Jensen |
| Flaming Gorge | 40.93, -109.40 | Flaming Gorge Dam and the recreation area, at Dutch John's Census point (the dam is about 1.5 mi southwest) |
| Goblin Valley | 38.57, -110.71 approx. | Goblin Valley State Park's hoodoos, in Emery County |
| Arches | 38.62, -109.62 approx. | Arches National Park, at the visitor center off US-191 north of Moab |
| Canyonlands | 38.46, -109.82 approx. | Canyonlands National Park, at the Island in the Sky visitor center |
| Capitol Reef | 38.29, -111.26 approx. | Capitol Reef National Park, at the visitor center by Fruita on UT-24 |
| Bryce Canyon | 37.64, -112.17 approx. | Bryce Canyon National Park, at the visitor center. Bryce Canyon City's Census point (37.68, -112.16) is 3 mi north, at the park road's junction |

**Left out:**
- **Monument Valley:** Arizona's pack has it (MVA, 36.93, -110.11).
- **Bear Lake:** Idaho's pack has it as a scenic place; Garden City is an ordinary town here.
- **Too close to a main station:** Orem (4.3 mi from Provo), Roy (6 mi from Ogden), Midway (3.7 mi from Heber), Helper (7 mi from Price), Enoch (Cedar City), Washington and Santa Clara (St. George).
- **Hooper:** its raw point is on Fremont Island (phase 1).
- **Not added (less needed or less well known):** Cedar Breaks, Natural Bridges, Lake Powell's marinas (Bullfrog, Big Water: Arizona's Page is scenic), Timpanogos Cave, Alta and Snowbird, Sundance.

### Passes (13) and bridges (5)

The checker gives no warnings: every pass has mountains within ~7 mi, and every bridge is within 3 mi of a river or lake on the map.

**How the counts were made:** "Critical" lines are blocked in Tough without the pass. They were found by removing it and testing every pair of places within 120 mi (Utah's places and the neighbours' places near Utah).

| Pass | Point | Source | What uses it |
| --- | --- | --- | --- |
| Parleys Summit | 40.76, -111.62 approx. | I-80 over the Wasatch from Salt Lake City to Park City | Salt Lake City–Park City and –Heber (the first-track hint). Critical in Tough: Salt Lake City, Layton and Logan to Heber; Sandy and Lehi to Morgan and Garden City |
| Weber Canyon | 41.13, -111.86 approx. | I-84 and the Union Pacific's Overland Route from Ogden to Morgan (Devils Slide) | Ogden–Morgan and most lines from the Front to the north and east (99 in Gentle). Critical in Tough: Sandy, Lehi and Bountiful to Huntsville and Smithfield |
| Echo Canyon | 41.02, -111.37 approx. | I-80 and the Union Pacific from Echo to Wyoming | Morgan–Coalville and the Front to Evanston: climbs instead of tunnels (none critical) |
| Provo Canyon | 40.36, -111.58 approx. | US-189 from Provo to the Heber Valley (Bridal Veil Falls, the Heber Valley Railroad) | Provo–Heber. Critical in Tough: Provo to Layton, Ogden, Park City and Bountiful (Provo–Layton also goes through Salt Lake City). See the leniency note below |
| Daniels Summit | 40.30, -111.25 approx. | US-40 from Heber up Daniels Canyon to Strawberry Reservoir and the Uinta Basin (moderately known) | Provo–Vernal, Provo–Roosevelt, Heber–Price: climbs instead of tunnels |
| Spanish Fork Canyon | 40.04, -111.52 approx. | US-6 and the Union Pacific (the old Rio Grande) from Spanish Fork to Thistle | Provo–Price, Provo–Ephraim, Spanish Fork's lines |
| Soldier Summit | 39.93, -111.08 | US-6 and the Union Pacific's summit between Utah Valley and Price Canyon | Salt Lake City–Price, Layton–Price |
| Price Canyon | 39.76, -110.90 approx. | US-6 and the Union Pacific from Soldier Summit down past Castle Gate to Helper | Park City and Heber to Price; Vernal and Roosevelt to Sanpete |
| Sardine Canyon | 41.56, -111.95 approx. | US-89/91 from Brigham City over to Wellsville and Cache Valley (moderately known; also called Wellsville Canyon) | Brigham City–Logan and Ogden–Logan (the level 2 goal) |
| Logan Canyon | 41.83, -111.62 approx. | US-89 from Logan to Bear Lake (the Logan Canyon Scenic Byway) | Logan–Garden City; Cache Valley to Montpelier and Evanston |
| Salt Creek Canyon | 39.70, -111.74 approx. | UT-132 from Nephi east to Fountain Green and the Sanpete Valley (moderately known) | Nephi–Ephraim. Critical in Tough: Provo–Nephi (I-15) and Provo–Richfield. See the leniency note below |
| Salina Canyon | 38.92, -111.70 approx. | I-70 east from Salina over the Wasatch Plateau toward Green River (moderately known) | Salina–Green River (I-70). Critical in both modes: Price–Salina; in Tough also Ephraim–Escalante |
| Zion–Mount Carmel Highway | 37.21, -112.94 | UT-9 and its 1930 tunnel from Zion Canyon to Mount Carmel Junction | Zion–Kanab, St. George–Kanab and Hurricane–Kanab, St. George–Bryce Canyon: climbs instead of tunnels |

**Leniencies (as Wyoming's, Idaho's and Montana's notes describe):**
- **Salt Lake City–Provo** (37 mi): the straight line clips the Wasatch at Lone Peak, so the game counts it as a climb near Provo Canyon. The real I-15 runs over Point of the Mountain. Through Sandy and Lehi the line is flat.
- **Point of the Mountain:** I tried it as a pass (40.45, -111.90). It did not take Salt Lake City–Provo, because Provo Canyon is nearer that stretch, and it took Lehi–Heber instead. I removed it.
- **Ogden–Brigham City** counts Sardine Canyon: the line clips Willard Peak, while I-15 runs along the shore below it.
- **Provo–Nephi:** the map's 0.05° grid puts Mount Nebo's massif on I-15's line (18 mi of mountains), so Provo–Nephi was blocked in Tough. Salt Creek Canyon, Nephi's real canyon road east, is within 9 mi, so it now opens it as a climb. The real I-15 runs in the valley west of Nebo.

**Not added:**
- **Clear Creek Canyon** (I-70 from Cove Fort to Sevier): Beaver–Richfield is open in both modes (a 13-mi tunnel in Tough).
- **Indian Canyon** (US-191, Duchesne–Helper): Vernal–Price is open.
- **Black Ridge** (I-15, Cedar City–St. George): open (tunnels of 2 and 4 mi).
- **Virgin River Gorge** (I-15, in Arizona): St. George–Mesquite is open.
- **UT-12's Boulder Mountain and the Hogsback:** Escalante–Capitol Reef is open.
- **Guardsman Pass, the Nebo Loop and the Monte Cristo road:** no line needs them, and the last two are seasonal roads.

| Bridge | Point | Source | What uses it |
| --- | --- | --- | --- |
| Antelope Island Causeway | 41.06, -112.13 approx. | The 7-mile causeway from Syracuse to Antelope Island across Great Salt Lake | Layton and Ogden to Antelope Island, and the island's lines east (critical in Tough). Like any real bridge, it also lets long lines cross the lake near it: Salt Lake City–Golden Spike (Gentle), Provo and Sandy to Golden Spike, and Tooele–Ogden (Gentle) |
| Green River bridge (Green River) | 38.97, -110.11 | I-70 and the Union Pacific cross the Green River at Green River. The point is on the map's river, which runs 3 mi east of the town | Green River–Moab and Green River–Arches (I-70 and US-191) |
| Colorado River bridge (Moab) | 38.60, -109.56 | US-191 over the Colorado just north of Moab, by the Arches entrance | Moab's lines north (Green River, Price, Castle Dale, Arches) |
| Bear River bridge (Corinne) | 41.55, -112.10 | Corinne, the 1869 railroad town, sits on the Bear River (moderately known) | Tremonton's and Golden Spike's lines south and east; the Front to Malad City (13 lines) |
| Virgin River bridge (St. George) | 37.08, -113.57 | I-15 and the city's bridges over the Virgin River | St. George's lines east (Hurricane, Zion, Kanab, Bryce Canyon) |

**Not added:**
- Hite Crossing Bridge (UT-95 over the Colorado at Lake Powell's head), Flaming Gorge Dam (US-191 crosses the dam) and the San Juan bridge at Mexican Hat: tested, and no line used any of them.
- **The Lucin Cutoff** (the Union Pacific's causeway across Great Salt Lake from Ogden to Lucin): as a bridge point it would open long lines straight across the lake, such as Tooele–Brigham City.
- **Utah Lake** has no bridge, so lines go around it.

### How the map plays

**Counts.** Of the 682 pairs of Utah places within 100 mi of each other or of a neighbouring state's place:
- 43 are blocked in Gentle and 117 in Tough. Nearly all cross Great Salt Lake, Utah Lake or Bear Lake, or the Wasatch, Uinta and Tushar mountains, or the Wasatch Plateau away from the passes;
- with links up to 100 mi, every Utah place is in one network in both modes;
- every place has at least 5 open links within 100 mi in both modes. The fewest are Bonneville Salt Flats (5), Antelope Island (6 in Tough: Layton, Ogden and the Weber Valley over the causeway), and Dinosaur and Flaming Gorge (6 and 7).

**The real routes, as chains,** are open in both modes:
- **I-15:** St. George–Cedar City–Beaver–Fillmore–Nephi–Provo–Salt Lake City–Layton–Ogden–Brigham City–Tremonton–Malad City (ID). Also Nephi–Spanish Fork–Provo–Lehi–Sandy–Salt Lake City–Bountiful–Layton.
- **I-80:** Bonneville Salt Flats–Grantsville (or Tooele)–Salt Lake City–Park City–Coalville–Evanston (WY).
- **I-84 and the Union Pacific:** Tremonton–Brigham City–Ogden–Morgan–Coalville–Evanston.
- **I-70:** Beaver (or Fillmore)–Richfield–Salina–Green River–Moab.
- **US-6 and the old Rio Grande:** Provo–Spanish Fork–Price–Green River–Moab, and Provo–Price directly.
- **US-40:** Salt Lake City–Park City–Heber–Roosevelt–Vernal, and Provo–Heber–Vernal.
- **US-89:**
  - Brigham City–Logan–Garden City;
  - Provo–Ephraim–Salina–Richfield–Panguitch–Kanab;
  - St. George–Hurricane–Zion–Kanab–Bryce Canyon–Panguitch (with UT-9).
- **US-191:** Flaming Gorge–Vernal–Dinosaur; Vernal–Price–Green River–Moab–Monticello–Blanding.
- **UT-24 and UT-12:** Richfield–Capitol Reef–Hanksville; Bryce Canyon–Escalante–Capitol Reef.

**Main stations: neighbouring main stations reached directly** (other states' marked *). The same in both modes unless noted.

| Station | Reaches |
| --- | --- |
| Salt Lake City | Layton, Park City, Tooele, Provo, Heber |
| Provo | Salt Lake City, Heber, Nephi, Price, Vernal, Ephraim; blocked: Tooele (Utah Lake) |
| Layton | Salt Lake City, Ogden, Park City; blocked: Tooele (Great Salt Lake) |
| Heber | Salt Lake City, Provo, Park City, Vernal |
| Park City | Salt Lake City, Layton, Ogden, Logan, Heber, Evanston*, Rock Springs*; Gentle only: Vernal |
| Ogden | Layton, Brigham City, Logan, Park City |
| Brigham City | Ogden, Logan, Burley*, American Falls*; blocked: Tooele (Great Salt Lake), Elko* |
| Logan | Ogden, Brigham City, Park City, Preston*, American Falls*, Evanston* |
| Tooele | Salt Lake City, Nephi, Elko*, Ely*; blocked: Provo, Layton and Brigham City (the lakes) |
| Vernal | Provo, Heber, Price, Moab, Rock Springs*; Gentle only: Park City |
| Price | Provo, Vernal, Ephraim, Moab; Gentle only: Richfield |
| Ephraim | Provo, Nephi, Price, Richfield |
| Nephi | Provo, Tooele, Ephraim, Richfield, Cedar City, Kanab; Gentle only: Ely* |
| Moab | Price, Vernal, Richfield, Kanab, Chinle*, Flagstaff*, Show Low* |
| Richfield | Nephi, Ephraim, Moab, Kanab; Gentle only: Price |
| Kanab | St. George, Cedar City, Nephi, Richfield, Moab; Gentle only: Flagstaff*; blocked: Lake Havasu City* |
| Cedar City | St. George, Nephi, Kanab, Ely* |
| St. George | Cedar City, Kanab, Lake Havasu City*, Ely* |

Kanab–Nephi goes through the 3-km Beaver–Garfield corner (phase 1); nothing relies on it.

**Neighbours.** I compared all 571 pairs of Idaho, Wyoming, Nevada and Arizona places near Utah (within 200 mi of each other) with this pack's passes and bridges and without them. None is opened or closed; 30 only change price.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Salt Lake City & the Wasatch | `wasatch` | Salt Lake City, Provo, Layton, Heber, Park City | 50 passengers; own 4 counties (the start's 3 plus Davis or Morgan-Summit); connect PVU–LAY (through Salt Lake City, as FrontRunner runs) |
| Ogden, Logan & the Great Salt Lake | `north` | Ogden, Brigham City, Logan, Tooele | 140 passengers; connect SLC–LOG (by Ogden and Sardine Canyon); 10 crates of produce (Brigham City, Spanish Fork, Smithfield, Tremonton, Morgan, Coalville, Grantsville) |
| Central Utah & the Uinta Basin | `central` | Vernal, Price, Ephraim, Nephi | 280 passengers; connect SLC–VNL (US-40 by Heber, open in both modes); 25 trucks (from the mountain and desert stations) |
| Canyon Country & Dixie | `south` | Moab, Richfield, Kanab, Cedar City, St. George | 450 passengers; connect SLC–STG (I-15); one high-speed train |

- **Targets** follow Wyoming's, Idaho's and Montana's four levels.
- **Each level's regions touch the earlier ones:** Weber, Box Elder and Tooele touch Davis or Salt Lake; the Uinta Basin, Carbon-Emery, Sanpete and Beaver-Juab-Millard touch Utah County; Grand-San Juan touches Carbon-Emery, and Piute-Sevier-Wayne touches Sanpete.
- **The first level has no cargo goal:** none of its stations is a farm (only Spanish Fork, a town), so it asks for the FrontRunner connection instead.

### Biomes

Following Nevada's, Arizona's, Idaho's and Wyoming's conventions:
- **`wooded`** (forested mountains over farmed valleys):
  - Cache-Rich (the Bear River Range around Cache Valley and Bear Lake);
  - Morgan-Summit (the Wasatch and the Uintas' north slope over the Weber Valley);
  - Wasatch (the Heber Valley);
  - Sanpete (the Wasatch Plateau over the Sanpete Valley).

  Idaho's Bear Lake-Caribou-Franklin and Wyoming's Lincoln-Uinta, across the lines, are wooded too.
- **`dry`:**
  - the Great Basin: Tooele, Box Elder, Beaver-Juab-Millard and Iron;
  - the Mojave's edge: Washington;
  - the Colorado Plateau: Carbon-Emery, Grand-San Juan, Garfield-Kane and Piute-Sevier-Wayne;
  - the Uinta Basin: Daggett-Duchesne-Uintah.

  Nevada's and Arizona's packs are all dry.
- **Not listed (farmland and grassland):** Salt Lake, Davis, Weber and Utah, the Wasatch Front's cities and irrigated valleys (as Idaho leaves out Ada).
- **No `forest`:** Utah's forests are on its mountains, not its valleys.
- **Judgment calls:**
  - Box Elder's east (Brigham City, Tremonton) is farmland, but most of the county is desert.
  - Piute-Sevier-Wayne has the forested Fishlake and Aquarius plateaus, but its valleys are sagebrush and Wayne is red rock.
  - The Uinta Basin region includes the Uintas' south slope.

### Checks

- **`node tools/check-pack.js UT`:** `UT: passed (18 stations, 39 towns, 0 city maps, 13 passes, 5 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js UT`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is SLC, PVU and HEB.
  - The test laid Provo–Heber (25 mi, 1 train), bought Beaver-Juab-Millard (NPH), and 5 passengers arrived in the week.
  - Levels mode opened level 1.
- **Screenshots** (`test-out/UT/`):
  - Salt Lake City, Sandy, Lehi, Provo and Spanish Fork line up along the Wasatch Front, with Utah Lake beside Provo and Heber in its green valley east of the range.
  - The labels for Parleys Summit, Provo Canyon, Daniels Summit, Spanish Fork Canyon, Soldier Summit, Echo Canyon and the Antelope Island Causeway sit where they belong.
  - The west and south are tan (dry).
  - The phone screen's first-track hint drags Salt Lake City to Heber.

### For the main agent

1. **Start:** Salt Lake, Utah and Wasatch, not Tooele: Provo–Tooele is blocked by Utah Lake, and the test warned about it.
2. **Airports:** Salt Lake City only. Provo Airport may be near the 1-million bar (I'm not sure); add it to PVU if you know it is over.
3. **Leniencies:**
   - Salt Lake City–Provo climbs at "Provo Canyon" (the line clips Lone Peak).
   - Provo–Nephi climbs at "Salt Creek Canyon" (the map puts Nebo on I-15).
   - The Antelope Island Causeway lets lines cross Great Salt Lake near it.
4. **Types:** Nephi (desert, by its region) and Price (mountain, a coal town under the Book Cliffs) are judgment calls.
5. **Colorado is still missing:** Vernal, Dinosaur, Moab, Arches, Monticello and Blanding are in place for it.
