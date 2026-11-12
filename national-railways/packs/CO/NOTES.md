# Colorado (CO) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (36 regions, with the name "Kit Carson-Cheyenne County"; the region id stays `co-cheyenne-kit-carson`). The map and raw facts were rebuilt, and the Gazetteer is now read as UTF-8 (Cañon City is right). The pack (phase 2, below) is built on it.

Populations: `packs/CO/raw/counties.json` and `packs/CO/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 5,773,707). Every group is connected through `neighbors`. I checked it: each member shares 28 km or more of border with another member, measured on the rings in `map.js`. Roads, rivers, passes and railways named here are well known unless marked "(moderately known)".

### Recommended (64 → 36 regions)

```
merge: [["Logan", "Phillips", "Sedgwick"], ["Morgan", "Washington", "Yuma"], ["Elbert", "Lincoln"], ["Cheyenne", "Kit Carson"], ["Bent", "Crowley", "Otero"], ["Baca", "Kiowa", "Prowers"], ["Huerfano", "Las Animas"], ["Custer", "Fremont"], ["Park", "Teller"], ["Clear Creek", "Gilpin"], ["Chaffee", "Lake"], ["Gunnison", "Hinsdale"], ["Alamosa", "Conejos", "Costilla"], ["Mineral", "Rio Grande", "Saguache"], ["Archuleta", "La Plata", "San Juan"], ["Dolores", "Montezuma"], ["Delta", "Montrose"], ["Ouray", "San Miguel"], ["Grand", "Jackson"], ["Moffat", "Rio Blanco", "Routt"]]
names: { "Cheyenne-Kit Carson": "Kit Carson-Cheyenne County" }
```

The one name: "Cheyenne-Kit Carson County" reads like the city of Cheyenne, Wyoming, which is in the game next door (the same fix as Idaho's "Valley-Boise County"). The other automatic names read well.

Alone, over 50k (14): **El Paso** (Colorado Springs), **Denver**, **Arapahoe** (Aurora), **Jefferson** (Lakewood), **Adams** (Thornton), **Larimer** (Fort Collins), **Douglas** (Castle Rock), **Boulder** (Boulder), **Weld** (Greeley), **Pueblo** (Pueblo), **Mesa** (Grand Junction), **Broomfield**, **Garfield** and **Eagle**. La Plata is over 50k too and takes Archuleta and San Juan (below).

Alone, under 50k (exceptions):
- **Summit** 31,055, Breckenridge (5,078), Silverthorne, Frisco, Dillon. I-70 comes in through the Eisenhower Tunnel and leaves over Vail Pass; Hoosier Pass (to Park) and Fremont Pass (to Lake, a 6 km border) are to the south. Its one open side is down the Blue River on CO-9 to Kremmling in Grand (moderately known). Merged there, Breckenridge would take Middle Park's station, away from the Moffat Route (see the alternative).
- **Pitkin** 17,358, Aspen (7,002) and Snowmass Village. The Roaring Fork leaves Pitkin through Eagle's Basalt and El Jebel (places.json puts both in Eagle) before Carbondale and Glenwood Springs in Garfield, so both of its valley partners are big counties. Its small neighbours are over mountains: Independence Pass (closed in winter) to Lake, the Elk Mountains to Gunnison, the Sawatch to Chaffee. Precedents: Teton (Jackson) in Wyoming and Wasatch (Heber) in Utah stay alone.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Logan + Phillips + Sedgwick | I-76 and the South Platte from Sterling to Julesburg; Holyoke on US-6 (moderately known) | Sterling (13,741) | 28,470 |
| Morgan + Washington + Yuma | I-76 at Fort Morgan and Brush; US-34 and the BNSF line from Brush through Akron, Yuma and Wray to Nebraska (moderately known) | Fort Morgan (11,601) | 43,906 |
| Elbert + Lincoln | The Palmer Divide's east side: I-70 and US-24 (Simla) both reach Limon, where US-40 and US-287 meet them (moderately known) | Limon (2,039) | 31,730 |
| Cheyenne + Kit Carson | I-70 to Burlington; US-40 and the Union Pacific's Kansas Pacific line through Kit Carson and Cheyenne Wells (moderately known) | Burlington (3,175) | 8,830 |
| Bent + Crowley + Otero | The Arkansas valley on US-50 and the BNSF (Santa Fe) main: Rocky Ford, La Junta, Las Animas. Ordway north of the river (CO-96, moderately known) | La Junta (7,324) | 30,254 |
| Baca + Kiowa + Prowers | US-287 from Eads through Lamar to Springfield and Oklahoma (moderately known); US-50 and the Santa Fe at Lamar and Holly | Lamar (7,689) | 16,957 |
| Huerfano + Las Animas | I-25 from Walsenburg to Trinidad and Raton Pass; the Spanish Peaks (moderately known) | Trinidad (8,334) | 21,376 |
| Custer + Fremont | US-50 and the Royal Gorge at Cañon City; CO-69 from Texas Creek up the Wet Mountain Valley to Westcliffe (moderately known). Fremont alone is 48,934 | Cañon City (17,129) | 53,640 |
| Park + Teller | US-24 from Ute Pass through Woodland Park and Florissant into South Park (Hartsel, Fairplay); Cripple Creek | Woodland Park (7,913) | 42,099 |
| Clear Creek + Gilpin | The gold towns on I-70 and CO-119: Idaho Springs, Georgetown (the Georgetown Loop), Central City, Black Hawk | Idaho Springs (1,786) | 15,200 |
| Chaffee + Lake | The upper Arkansas on US-24: Leadville, Buena Vista, Salida | Salida (5,677) | 26,908 |
| Gunnison + Hinsdale | CO-149 from the Gunnison valley up the Lake Fork to Lake City (moderately known) | Gunnison (6,557) | 17,705 |
| Alamosa + Conejos + Costilla | The south San Luis Valley: Alamosa, Antonito (the Cumbres & Toltec), San Luis; US-160 from La Veta Pass through Fort Garland | Alamosa (9,820) | 27,336 |
| Mineral + Rio Grande + Saguache | The west San Luis Valley and the Rio Grande on US-160: Center, Monte Vista, Del Norte, South Fork; CO-149 to Creede (moderately known) | Monte Vista (4,252) | 18,777 |
| Archuleta + La Plata + San Juan | Durango; the Durango & Silverton up the Animas; US-160 east through Bayfield to Pagosa Springs below Wolf Creek Pass. Exception: two small counties join a big one (precedent: Utah's Cache + Rich) | Durango (19,088) | 69,696 |
| Dolores + Montezuma | Mesa Verde and Cortez; Dove Creek on US-491 and Rico up CO-145 (moderately known) | Cortez (8,760) | 28,174 |
| Delta + Montrose | US-50 down the Uncompahgre to Delta and the Gunnison; the Black Canyon | Montrose (20,302) | 73,878 |
| Ouray + San Miguel | US-550 to Ridgway and Ouray; CO-62 over the Dallas Divide and CO-145 to Telluride (moderately known) | Telluride (2,630) | 12,950 |
| Grand + Jackson | Middle Park (Winter Park, Granby, Kremmling: the Moffat Route) and North Park (Walden) over Willow Creek Pass on CO-125 (moderately known) | Granby (2,079) | 17,096 |
| Moffat + Rio Blanco + Routt | The Yampa valley on US-40 (Steamboat Springs, Hayden, Craig, Dinosaur); CO-13 from Craig to Meeker; Rangely (moderately known) | Steamboat Springs (13,215) | 44,646 |

The corridors stay clean chains:
- **I-25:** Larimer/Weld, Broomfield/Adams, Denver, Arapahoe/Douglas, El Paso, Pueblo, Huerfano-Las Animas, then New Mexico.
- **I-70:** Jefferson, Clear Creek-Gilpin, Summit, Eagle, Garfield, Mesa, then Utah. East: Adams/Arapahoe, Elbert-Lincoln (Limon), Kit Carson-Cheyenne (Burlington), then Kansas.
- **I-76:** Adams, Weld, Morgan-Washington-Yuma, Logan-Phillips-Sedgwick, then Nebraska.
- **US-50:** Mesa, Delta-Montrose, Gunnison-Hinsdale, Monarch Pass, Chaffee-Lake, Custer-Fremont, Pueblo, Bent-Crowley-Otero, Baca-Kiowa-Prowers, then Kansas.
- **US-160:** Huerfano-Las Animas, La Veta Pass, Alamosa-Conejos-Costilla, Mineral-Rio Grande-Saguache, Wolf Creek Pass, Archuleta-La Plata-San Juan, Dolores-Montezuma.
- **US-40:** Utah, Moffat-Rio Blanco-Routt, Rabbit Ears Pass, Grand-Jackson, Berthoud Pass, Clear Creek-Gilpin, Jefferson.
- **The Moffat Route (Union Pacific; Amtrak's California Zephyr):** Denver, Jefferson/Boulder, Gilpin (the Moffat Tunnel's east portal; moderately known, from an approximate point), Grand (Winter Park, Granby), Eagle, Garfield (Glenwood Springs), Mesa, then Utah. The 9 km Gilpin–Grand border is where it crosses.
- **The Santa Fe main (Amtrak's Southwest Chief):** Kansas, Baca-Kiowa-Prowers (Lamar), Bent-Crowley-Otero (La Junta), Huerfano-Las Animas (Trinidad, Raton Pass), then New Mexico.
- **The Tennessee Pass line (Union Pacific, out of service; moderately known):** Pueblo, Custer-Fremont (Royal Gorge), Chaffee-Lake (Salida, Leadville), Eagle (22 km Lake–Eagle border).

Rejected:
- Garfield + Pitkin (79,044): Aspen loses its station to Rifle or Glenwood Springs, and CO-82 runs through Eagle between them.
- Lake + Pitkin (24,790): Independence Pass. Then Chaffee is alone.
- Summit + Clear Creek (Eisenhower Tunnel), Summit + Park (Hoosier Pass): the Continental Divide or the Mosquito Range between.
- Elbert alone and `["Cheyenne", "Kit Carson", "Lincoln"]` (14,504; Burlington): as good on the plains (I-70 and the Kansas Pacific in one region) and the same count, but it needs a third exception. Elbert's 26,056 live mostly near Elizabeth, Denver's edge.
- Fremont alone (48,934) and Custer with Huerfano-Las Animas (CO-69 to Walsenburg): Westcliffe's station would be Trinidad, far to the south; the Wet Mountain Valley drains to the Arkansas at Texas Creek.
- `["Delta", "Montrose", "Ouray"]` with `["Dolores", "Montezuma", "San Miguel"]`: Telluride loses its station to Cortez, over Lizard Head Pass.
- San Juan with Ouray (Red Mountain Pass) or with San Miguel (no road): Silverton's railway goes to Durango.
- Archuleta alone (13,355): its only open side is west to Durango; Wolf Creek Pass is east, and Conejos is reached only through New Mexico (Cumbres Pass).
- Jackson + Larimer (Cameron Pass, and a big county); Rio Blanco + Garfield (a big county).
- Saguache + Chaffee (Poncha Pass): splits the San Luis Valley.

### Alternative (also 36 regions)

Replace Summit alone, Grand-Jackson and Moffat-Rio Blanco-Routt with `["Grand", "Summit"]` (46,770; Breckenridge 5,078), `["Jackson", "Routt"]` (26,206; Steamboat Springs) and `["Moffat", "Rio Blanco"]` (19,821; Craig 9,062).
- Pro: no exception for Summit; the Blue River (CO-9) joins Breckenridge to Kremmling in one valley; Craig keeps a station.
- Con: Breckenridge becomes the station of Middle Park, which the railway runs through and Summit doesn't; Steamboat's region crosses Rabbit Ears Pass to North Park; the Yampa valley is split at Hayden and Craig.

### Map and data check

1. **The map looks right.** Every county is one piece and every label is inside its county. All 482 places lie inside their tagged county (the tool tags them by their point). County areas add up to about 103,500 sq mi, close to Colorado's total.
2. **Neighbours agree both ways** with the `ut-` and `wy-` regions, and none is missing. **No `az-` neighbour:** Montezuma meets Arizona (Apache County) only at the Four Corners point, as Utah's San Juan meets New Mexico. Arizona's map has no `co-` neighbour either. The 19 "coast" lines are the borders with Nebraska, Kansas, Oklahoma and New Mexico (not yet in the game).
3. **Short contacts:** Arapahoe–Lincoln 1 km, Archuleta–Rio Grande 3 km, Arapahoe–Jefferson 6 km, Lake–Summit 6 km (Fremont Pass, a real road, CO-91; moderately known), Chaffee–Pitkin 7 km, Broomfield–Jefferson 9 km, Gilpin–Grand 9 km, Kiowa–Otero 9 km. No merge relies on them. After the merges, Summit touches Chaffee-Lake only over the 6 km at Fremont Pass, and Mesa touches Gunnison-Hinsdale over 11 km.
4. **Glendale (4,612) is tagged Denver**, but it is in Arapahoe County: an enclave inside Denver. Denver's ring has no hole for it. It doesn't change a station.
5. **Berthoud (10,338) is tagged Weld.** Its Census point (40.285, -104.966) is by I-25, on land the town annexed; the old town is about 10 km west in Larimer (from memory, approx.). Matters only if it becomes a town.
6. **Westminster (116,601) is tagged Jefferson**; the city spans Adams and Jefferson. Aurora is tagged Arapahoe (it also spans Adams and Douglas).
7. **Place names to fix by hand:** "CaÃ±on City" is Cañon City. `tools/make-raw.js` reads the Gazetteer as latin1 (line 154) though the file is UTF-8, so New Mexico's names with ñ (Española) will break too. "Central" is Central City (the tool strips the Census's " city"). "City of Creede" is Creede.
8. **Places without population:** 210 CDPs (for example Highlands Ranch, Security-Widefield, Pueblo West, Ken Caryl, Evergreen) and one town, Bonanza (Saguache, listed as "Bonanza town"). No main-station choice depends on them.
9. **Main stations to decide in phase 2** (the biggest place isn't the famous one): Garfield's biggest is Rifle (10,436), not Glenwood Springs (9,958: Amtrak, the I-70/CO-82 junction). Eagle's is Gypsum (8,046), ahead of Eagle (7,509), Avon (6,062) and Vail (4,844). Adams's biggest place is Thornton (141,863), since Westminster is tagged Jefferson.
10. **Broomfield** is one ring of about 39 sq mi with Adams, Boulder, Jefferson and Weld as neighbours. Adams and Boulder don't touch on the map; Broomfield lies between.

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/CO/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Station and town coordinates are `places.json` points rounded to 2 decimals, except where noted.
- **Facts added by hand** (passes, bridges, scenic places, airports, roads and railways) are well known unless marked "moderately known". A point marked "approx." is one I gave from memory, within about a mile or two.
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain. To test a pass, it was taken out of the pack and the pairs that used it were tested again.

### Start

`start: ["co-denver", "co-jefferson", "co-arapahoe"]`: Denver, Lakewood and Aurora. Jefferson and Arapahoe both touch Denver and each other (6 km).
- **The problem:** Denver's only neighbours are Adams, Arapahoe and Jefferson, all metro counties. Three metros give the first track no riders in "A type of place" (the checker refuses it).
- **The fix:** Lakewood (Jefferson) is typed **mountain**, by its county. Most of Jefferson's 781 sq mi is the Front Range's foothills: Red Rocks, Morrison, Evergreen, Conifer, and Golden at the mouth of Clear Creek Canyon. Utah typed Nephi by its region in the same way. It is a judgment call: Lakewood itself is a suburb at the foot of the hogback.
- **First track:** Denver–Lakewood (the nearest pair, about 8 mi). The pack test laid it (9 mi of track), and 23 passengers arrived in the week.
- Adams (Thornton) would do as the third county, but Aurora is the bigger city.

### Main stations (36)

Every station is at its region's biggest place in `places.json`, except two (below). Five points are moved from the Census point (the city's middle) to downtown:

| Station | Census point | Pack point | Why |
| --- | --- | --- | --- |
| Denver | 39.76, -104.88 | 39.75, -104.99 | Downtown (Union Station, the 16th Street Mall, the Capitol); the Census point is 6 mi east, near the old Stapleton airport's site |
| Colorado Springs | 38.87, -104.76 | 38.83, -104.82 | Downtown (Pikes Peak Avenue and Tejon Street); 4 mi |
| Aurora | 39.70, -104.72 | 39.71, -104.82 | Aurora's municipal center at Alameda Avenue and I-225 (approx.; moderately known); the Census point is 5 mi east, out on the plains by E-470. Aurora has no old downtown to speak of |
| Fort Collins | 40.55, -105.06 | 40.59, -105.08 | Old Town; 3 mi |
| Greeley | 40.41, -104.77 | 40.42, -104.69 | Downtown (8th Avenue); 4 mi |

The other points are within about 2 mi of downtown and stay at the Census point. Lakewood (2.2 mi west of Belmar), Boulder (1.5 mi east of Pearl Street) and Granby (1.8 mi south of its US-40 main street) are the furthest. Thornton has no downtown, and its point is the city's middle.

**Two exceptions to "the biggest place":**
- **Garfield: Glenwood Springs (9,958), not Rifle (10,436).** The two differ by 478 people. Glenwood Springs is the county seat and the Amtrak stop (the California Zephyr). It is also the junction of I-70 and CO-82 to Aspen, at the foot of Glenwood Canyon, with its hot springs. Rifle is a town.
- **Eagle: Vail (4,844), not Gypsum (8,046).** The Vail valley is known by Vail: the ski resort, and the I-70 town under Vail Pass. Gypsum is a town by Eagle County's airport and is a town here. If the main agent prefers the rule, swap in `{ id: "GYP", name: "Gypsum", lat: 39.62, lon: -106.96, type: "mountain" }` and make Vail a scenic town.

**Ids:** each id is unused in every other pack (the checker checks). LKW, CNC, GBY, BRK, STE, LMN, BUR and others were taken, so some ids have four letters (LKWD, GRBY, BREK, STRL, BURL). Airport codes are used where they read well (DEN, COS, GJT, DRO, ASE, TEX, GUC, CEZ, MTJ, ALS, TAD).

**Sizes:**
- **4:** Denver (716k) and Colorado Springs (730k), as the brief says. Salt Lake City (1.19 million) and Spokane (539k) are 4.
- **3:** Aurora (655k), Lakewood (583k), Thornton (520k), Fort Collins (359k), Castle Rock (358k), Boulder (331k) and Greeley (329k). Provo (659k), Layton (363k), Salem (346k) and Saskatoon (326k) are 3.
- **2:** Pueblo (168k), Grand Junction (156k), Broomfield (74k), Montrose (74k), Durango (70k) and Glenwood Springs (62k), by the size guide's 60k–300k. Tooele (73k) is 2.
- **1:** the rest, including Vail (56k) and Cañon City (54k), which are under 60k (Utah's Box Elder is 1 at 58k).

**Types:** 10 metro, 15 mountain, 10 farm, 1 desert.

| Station | Region, pop | Type, size | Why |
| --- | --- | --- | --- |
| Denver (DEN) | Denver, 716k | metro 4, **airport** | The capital (715,524) |
| Aurora (AUR) | Arapahoe, 655k | metro 3 | Biggest (386,325; Centennial 108,425) |
| Lakewood (LKWD) | Jefferson, 583k | mountain 3 | Biggest (155,973; Arvada 124,343). Typed by its county for the start (above) |
| Thornton (THN) | Adams, 520k | metro 3 | Biggest (141,863; Commerce City 62,428) |
| Broomfield (BRF) | Broomfield, 74k | metro 2 | The city and county (74,105) |
| Boulder (BOU) | Boulder, 331k | metro 3 | Biggest (108,254; Longmont 98,905). The University of Colorado |
| Castle Rock (CRO) | Douglas, 358k | metro 3 | Biggest (73,160; Parker 58,523). Highlands Ranch is bigger but is a CDP with no population in raw/ |
| Greeley (GRE) | Weld, 329k | farm 3 | Biggest (108,794). Weld is Colorado's biggest farm county (cattle feedlots, dairies, sugar beets; moderately known), so farm, as Fresno and Bakersfield are |
| Fort Collins (FTC) | Larimer, 359k | metro 3 | Biggest (169,826). Colorado State University |
| Colorado Springs (COS) | El Paso, 730k | metro 4, **airport** | Biggest (479,021) |
| Pueblo (PUB) | Pueblo, 168k | metro 2 | Biggest (111,871). The steel city on the Arkansas |
| Sterling (STRL) | Logan-Phillips-Sedgwick, 28k | farm 1 | Biggest (13,741). The plains' wheat, corn and cattle |
| Fort Morgan (FTM) | Morgan-Washington-Yuma, 44k | farm 1 | Biggest (11,601) |
| Limon (LIM) | Elbert-Lincoln, 32k | farm 1 | Biggest (2,039; Elizabeth 1,674) |
| Burlington (BURL) | Kit Carson-Cheyenne, 9k | farm 1 | Biggest (3,175) |
| La Junta (LAJ) | Bent-Crowley-Otero, 30k | farm 1 | Biggest (7,324). The Arkansas valley's irrigated farms (Rocky Ford melons) |
| Lamar (LMR) | Baca-Kiowa-Prowers, 17k | farm 1 | Biggest (7,689) |
| Trinidad (TAD) | Huerfano-Las Animas, 21k | mountain 1 | Biggest (8,334). The coal town at the foot of Raton Pass and Fishers Peak (as Utah types Price) |
| Idaho Springs (IDS) | Clear Creek-Gilpin, 15k | mountain 1 | Biggest (1,786) |
| Woodland Park (WPK) | Park-Teller, 42k | mountain 1 | Biggest (7,913). Up Ute Pass behind Pikes Peak |
| Cañon City (CCY) | Custer-Fremont, 54k | mountain 1 | Biggest (17,129). Where the Arkansas leaves the Royal Gorge |
| Salida (SLD) | Chaffee-Lake, 27k | mountain 1 | Biggest (5,677). The upper Arkansas under the Sawatch |
| Breckenridge (BREK) | Summit, 31k | mountain 1, **scenic** | Biggest (5,078). Ski resort |
| Vail (VAI) | Eagle, 56k | mountain 1, **scenic** | The exception above. Ski resort |
| Glenwood Springs (GWS) | Garfield, 62k | mountain 2 | The exception above |
| Aspen (ASE) | Pitkin, 17k | mountain 1, **scenic** | Biggest (7,002). Ski resort |
| Granby (GRBY) | Grand-Jackson, 17k | mountain 1 | Biggest (2,079). Middle Park, on the Moffat Route |
| Steamboat Springs (SBS) | Moffat-Rio Blanco-Routt, 45k | mountain 1, **scenic** | Biggest (13,215). Ski resort |
| Grand Junction (GJT) | Mesa, 156k | metro 2 | Biggest (65,609). The Western Slope's city (as Logan and Billings are metro) |
| Montrose (MTJ) | Delta-Montrose, 74k | farm 2 | Biggest (20,302). The Uncompahgre valley's irrigated farms (Olathe sweet corn and Delta County's orchards; moderately known) |
| Gunnison (GUC) | Gunnison-Hinsdale, 18k | mountain 1 | Biggest (6,557) |
| Telluride (TEX) | Ouray-San Miguel, 13k | mountain 1, **scenic** | Biggest (2,630). The ski town in its box canyon |
| Durango (DRO) | Archuleta-La Plata-San Juan, 70k | mountain 2 | Biggest (19,088) |
| Cortez (CEZ) | Dolores-Montezuma, 28k | desert 1 | Biggest (8,760). The Four Corners' high desert (Mesa Verde, Hovenweep) |
| Alamosa (ALS) | Alamosa-Conejos-Costilla, 27k | farm 1 | Biggest (9,820). The San Luis Valley's irrigated potatoes and barley (moderately known) |
| Monte Vista (MVT) | Mineral-Rio Grande-Saguache, 19k | farm 1 | Biggest (4,252) |

**Scenic main stations:** the five big ski towns, Breckenridge, Vail, Aspen, Steamboat Springs and Telluride, as Utah marks Park City and Wyoming marks Jackson.

**Airports:** Denver International (well known: one of the busiest airports in the world) and Colorado Springs Airport.
- The bar the other packs use is about 1 million passengers a year (Bozeman, Missoula, Eugene and Redmond have airports).
- From memory, Colorado Springs carries well over that (moderately known). If the main agent knows otherwise, remove `airport` from COS.
- Grand Junction, Eagle County (Vail), Aspen, Montrose, Durango, Gunnison and Steamboat's Hayden airport are all well under it (from memory), so they are left out.
- **Ports:** none.

### Towns (77: 65 towns and 12 scenic places)

Every town is inside its region, and the checker gives no spacing warnings. Populations are from `places.json`.

| Region | Towns |
| --- | --- |
| Arapahoe | Centennial (108,425, metro 2); Deer Trail (1,074, farm: wheat country on I-70) |
| Jefferson | Arvada (124,343, metro 2); Golden (20,410, mountain: the mouth of Clear Creek Canyon); **Red Rocks** |
| Adams | Brighton (40,072, farm: the county seat where its farmland begins); Bennett (2,869, farm) |
| Douglas | Parker (58,523, metro 2); Highlands Ranch (a CDP: no population in raw/, metro 2) |
| Boulder | Longmont (98,905, metro 2); Nederland (1,467, mountain) |
| Weld | Erie (30,057, metro); Windsor (32,712, metro) |
| Larimer | Loveland (76,364, metro 2); **Estes Park** |
| El Paso | Fountain (29,810, metro); Monument (10,400, metro); **Garden of the Gods**; **Pikes Peak** |
| Pueblo | Pueblo West (a CDP, metro); Boone (307, farm: the Arkansas valley east of Pueblo) |
| Logan-Phillips-Sedgwick | Holyoke (2,346, farm); Julesburg (1,302, farm) |
| Morgan-Washington-Yuma | Akron (1,767, farm); Wray (2,336, farm) |
| Elbert-Lincoln | Elizabeth (1,674, farm); Hugo (782, farm) |
| Kit Carson-Cheyenne | Cheyenne Wells (754, farm); Stratton (659, farm) |
| Bent-Crowley-Otero | Rocky Ford (3,874, farm); Las Animas (2,308, farm); **Bent's Old Fort** |
| Baca-Kiowa-Prowers | Springfield (1,330, farm); Eads (676, farm) |
| Huerfano-Las Animas | Walsenburg (3,048, farm: ranch country on I-25); La Veta (858, mountain: under the Spanish Peaks) |
| Clear Creek-Gilpin | Georgetown (1,119, mountain: the Georgetown Loop Railroad) |
| Park-Teller | Cripple Creek (1,155, mountain); Fairplay (731, mountain: South Park) |
| Custer-Fremont | **Royal Gorge**; Westcliffe (424, farm: the Wet Mountain Valley's ranches) |
| Chaffee-Lake | Leadville (2,632, mountain); Buena Vista (2,853, mountain) |
| Summit | Silverthorne (4,405, mountain) |
| Eagle | Gypsum (8,046, mountain); Basalt (3,994, mountain: Eagle County's end of the Roaring Fork) |
| Garfield | Rifle (10,436, farm: ranching and natural gas); Carbondale (6,439, mountain: under Mount Sopris) |
| Pitkin | Snowmass Village (3,097, mountain); **Maroon Bells** |
| Grand-Jackson | Winter Park (1,036, mountain: the Moffat Tunnel's west portal); Kremmling (1,506, farm); Walden (607, farm: North Park) |
| Moffat-Rio Blanco-Routt | Craig (9,062, desert); Meeker (2,375, farm); Rangely (2,304, desert). Craig and Rangely are sagebrush, coal and oil towns, as Rock Springs and Vernal are |
| Mesa | Fruita (13,397, farm); Palisade (2,564, farm: peaches); **Colorado National Monument** |
| Delta-Montrose | Delta (9,043, farm); Paonia (1,448, farm: the North Fork's orchards); **Black Canyon** |
| Gunnison-Hinsdale | Crested Butte (1,646, mountain); Lake City (435, mountain) |
| Ouray-San Miguel | Ouray (899, mountain); Norwood (533, farm) |
| Archuleta-La Plata-San Juan | Pagosa Springs (1,605, mountain); **Silverton** |
| Dolores-Montezuma | **Mesa Verde**; Mancos (1,197, farm); Dove Creek (633, farm: pinto beans on US-491) |
| Alamosa-Conejos-Costilla | **Great Sand Dunes**; Antonito (641, farm: the Cumbres & Toltec's Colorado end); San Luis (601, farm: Colorado's oldest town, 1851) |
| Mineral-Rio Grande-Saguache | South Fork (513, mountain: the foot of Wolf Creek Pass); Creede (260, mountain; the Census calls it "City of Creede"); Saguache (538, farm) |

**Scenic places** (all well known unless marked; points approx. unless they are Census points):

| Place | Point | What it is |
| --- | --- | --- |
| Red Rocks | 39.67, -105.21 approx. | Red Rocks Amphitheatre in the sandstone at Morrison |
| Estes Park | 40.37, -105.53 (Census) | The town at Rocky Mountain National Park's east entrance, up the Big Thompson Canyon. It stands for the park: the park's visitor centers are within 3 mi of town and would crowd it |
| Garden of the Gods | 38.88, -104.87 approx. | The red rock park, at its visitor center |
| Pikes Peak | 38.84, -105.04 approx. | "America's Mountain", at the summit (the Pikes Peak Highway and the cog railway). The summit is in El Paso County |
| Bent's Old Fort | 38.04, -103.43 approx. | The Santa Fe Trail's adobe trading post (a National Historic Site) on the Arkansas between La Junta and Las Animas (moderately known) |
| Royal Gorge | 38.46, -105.33 approx. | The Royal Gorge Bridge, the suspension bridge high over the Arkansas west of Cañon City |
| Maroon Bells | 39.10, -106.94 approx. | The twin peaks over Maroon Lake, at the lake |
| Colorado National Monument | 39.10, -108.73 approx. | The canyons above the Grand Valley, at the Saddlehorn visitor center (4.1 mi from Fruita) |
| Black Canyon | 38.58, -107.74 approx. | Black Canyon of the Gunnison National Park, at the South Rim visitor center |
| Silverton | 37.81, -107.66 (Census) | The mining town at the end of the Durango & Silverton Narrow Gauge Railroad |
| Mesa Verde | 37.18, -108.49 approx. | Mesa Verde National Park's cliff dwellings, at Chapin Mesa (the museum by Spruce Tree House) |
| Great Sand Dunes | 37.73, -105.51 approx. | Great Sand Dunes National Park, at the visitor center (inside Alamosa County) |

**Left out:**
- **Glendale** is in Arapahoe County (an enclave inside Denver), but the map puts its point in Denver's region. It would be 4.4 mi from Denver's station, and is left out.
- **Berthoud**'s Census point is in Weld, but the town is in Larimer. It is left out (Loveland and Longmont are near).
- **Westminster** spans Adams and Jefferson and is left out (Arvada, Thornton and Broomfield are around it).
- **Too close to another place (under 4 mi):** Central City (3.1 mi) and Black Hawk (3.6 mi) from Idaho Springs, Mountain Village (2.2 mi from Telluride), Manitou Springs (2.5 mi from Garden of the Gods), Mount Crested Butte (2.8 mi from Crested Butte).
- **Two towns are enough for a metro county:** Englewood, Littleton, Commerce City, Northglenn, Wheat Ridge, Lafayette, Louisville, Evans, Johnstown and Wellington are left out; so are Florence (Cañon City), Frisco and Dillon (Summit has one town), and Avon (8.5 mi from Vail; Gypsum and Basalt spread Eagle's towns better).
- **Not added (less needed or less well known):** Dinosaur National Monument (Utah's pack has it, at the quarry), Hanging Lake, Florissant Fossil Beds, Hovenweep, the Four Corners Monument (on the Navajo Nation, at the point where the four states meet), the Air Force Academy, Grand Lake, Keystone and Copper Mountain.

### Passes (28) and bridges (31)

The checker gives no warnings: every pass has mountains within ~7 mi, and every bridge is within 3 mi of a river or lake on the map.

**How the counts were made:** "used" counts pairs of places within 100 mi (Colorado's places and the neighbours' places near Colorado) whose line goes over the pass. "Critical" pairs are blocked without it.

| Pass | Point | Source | What uses it |
| --- | --- | --- | --- |
| Moffat Tunnel | 39.90, -105.70 approx. (the tunnel's middle) | The Union Pacific's 6.2-mile tunnel under James Peak, the old Denver & Salt Lake (Amtrak's California Zephyr), East Portal to Winter Park | Denver, Boulder and Idaho Springs to Winter Park and Granby (63 lines in Gentle, 73 in Tough). Never critical: Berthoud Pass is 8 mi away |
| Berthoud Pass | 39.80, -105.78 approx. | US-40 from Empire over the Divide to Winter Park | Georgetown's lines; critical in Tough for 4 |
| Eisenhower Tunnel | 39.68, -105.92 approx. | I-70's tunnel under the Divide, Georgetown to Silverthorne | Idaho Springs–Breckenridge and Idaho Springs–Silverthorne; critical in Tough for 11, such as Castle Rock–Silverthorne |
| Vail Pass | 39.53, -106.22 | I-70 from Copper Mountain to Vail | Breckenridge–Vail; critical in Tough for 14 |
| Glenwood Canyon | 39.58, -107.25 approx. | I-70 and the Union Pacific along the Colorado from Dotsero to Glenwood Springs | Vail–Glenwood Springs, Glenwood Springs–Rifle, Aspen–Glenwood Springs; critical in Tough for 12 |
| De Beque Canyon | 39.20, -108.30 approx. | I-70 and the Union Pacific along the Colorado from Palisade to De Beque (moderately known) | Palisade–Rifle (I-70) was blocked in Tough (19 mi of mountains). Critical in Tough for 7 |
| McClure Pass | 39.12, -107.29 | CO-133 from Carbondale up the Crystal River to Paonia (moderately known) | Carbondale–Paonia; critical in Tough for 35. See the leniency note below |
| Tennessee Pass | 39.36, -106.31 | US-24 and the old Rio Grande (Union Pacific, out of service) from Leadville to Minturn | Leadville–Vail, Leadville–Aspen; critical in Tough for 12 |
| Hoosier Pass | 39.36, -106.06 | CO-9 from Breckenridge to Alma and Fairplay | Breckenridge–Fairplay, Breckenridge–Leadville |
| Kenosha Pass | 39.41, -105.76 | US-285 from Denver into South Park | Denver–Fairplay; critical in Tough for 14, such as Colorado Springs–Breckenridge |
| Independence Pass | 39.11, -106.56 | CO-82 from Twin Lakes to Aspen (closed in winter) | Aspen's lines east; critical in Tough for 20 |
| Clear Creek Canyon | 39.74, -105.30 approx. | US-6 from Golden up Clear Creek to I-70 (the old Colorado Central's route) | Denver, Lakewood and Golden to Idaho Springs (103 lines in Gentle, 115 in Tough) |
| Boulder Canyon | 40.00, -105.38 approx. | CO-119 from Boulder to Nederland | Boulder–Nederland, Boulder–Granby |
| Big Thompson Canyon | 40.42, -105.30 approx. | US-34 from Loveland to Estes Park | Fort Collins–Estes Park, Fort Collins–Granby |
| Trail Ridge Road | 40.41, -105.75 approx. | US-34 over Rocky Mountain National Park, Estes Park to Grand Lake (closed in winter) | Estes Park's lines west; Granby–Estes Park stays blocked in Tough (the road climbs far north of the straight line) |
| Cameron Pass | 40.52, -105.89 | CO-14 from the Poudre Canyon to Walden (moderately known) | Fort Collins–Walden in Gentle (blocked in Tough: the road runs north up the Poudre) |
| Ute Pass | 38.90, -104.96 approx. | US-24 from Manitou Springs up to Woodland Park | Colorado Springs–Woodland Park (81 lines in Gentle, 125 in Tough) |
| Royal Gorge | 38.46, -105.32 approx. | The Arkansas's gorge, with the Royal Gorge Route Railroad on its floor; US-50 goes around it | Cañon City–Salida, Cañon City–Westcliffe |
| Monarch Pass | 38.50, -106.33 | US-50 from Salida to Gunnison | Salida–Gunnison; critical in Tough for 8 |
| Poncha Pass | 38.42, -106.08 | US-285 from Salida into the San Luis Valley (moderately known) | Salida–Saguache, Salida–Monte Vista; Buena Vista–Saguache was blocked in Tough |
| La Veta Pass | 37.61, -105.18 approx. | US-160 from Walsenburg to Fort Garland and Alamosa | Alamosa–La Veta in Tough |
| Raton Pass | 36.99, -104.49 | I-25 and the BNSF (Amtrak's Southwest Chief) from Trinidad to Raton | Nothing yet: it is for New Mexico |
| Wolf Creek Pass | 37.48, -106.80 | US-160 from South Fork to Pagosa Springs | South Fork–Pagosa Springs; critical in Tough for 4. Monte Vista–Pagosa Springs is blocked in Tough (the line runs 10 mi south of the pass), so I added South Fork as a town at the foot of the pass |
| Red Mountain Pass | 37.90, -107.71 | US-550, the Million Dollar Highway, Silverton to Ouray | Silverton–Ouray; critical in Tough for 19, such as Gunnison–Silverton |
| Animas Canyon | 37.60, -107.75 approx. | The Durango & Silverton Narrow Gauge Railroad's gorge up the Animas River | Durango–Silverton (it took Red Mountain Pass's name before) |
| Dallas Divide | 38.08, -107.83 approx. | CO-62 from Ridgway to Placerville and Telluride (moderately known) | Montrose–Telluride, Montrose–Ouray |
| Lizard Head Pass | 37.81, -107.91 | CO-145 from Rico to Telluride, on the San Juan Skyway (moderately known) | Telluride–Cortez, Telluride–Durango |
| Cumbres Pass | 37.02, -106.45 | The Cumbres & Toltec Scenic Railroad from Antonito to Chama, New Mexico | One line in Gentle: it is for New Mexico |

**Leniencies (as Utah's, Wyoming's and Idaho's notes describe):**
- **McClure Pass** opens some long lines across the Elk Mountains' west end in Tough (Aspen–Grand Junction, Aspen–Delta, Vail–Paonia), because they pass within its radius. The real roads go around by Glenwood Springs.
- **Independence Pass** does the same for a few lines over the Sawatch (Woodland Park–Aspen, Salida–Gypsum).
- **Red Mountain Pass** takes Ouray–Telluride (the real road goes round by Ridgway; Imogene Pass is a jeep road) and some lines across the San Juans in Tough (Telluride–Monte Vista).
- **Dallas Divide** opens a few long lines in Gentle (Montrose–Pagosa Springs, Telluride–Maroon Bells).
- **Clear Creek Canyon** takes Denver–Idaho Springs. I-70 itself climbs Mount Vernon Canyon and Floyd Hill just south of it.

**Not added:**
- **Rabbit Ears Pass** (US-40, Kremmling to Steamboat): the map has only hills at the pass, with the Park Range's mountains 3 cells west, so the checker would warn. Granby–Steamboat Springs is open in both modes (short tunnels in Tough).
- **Loveland Pass:** 3 mi from the Eisenhower Tunnel, which takes I-70's lines.
- **Fremont Pass** (CO-91, Copper Mountain to Leadville): Breckenridge–Leadville goes by Hoosier Pass.
- **Poudre Canyon** (CO-14): only Fort Collins–Walden in Tough would use it.
- **Gore Canyon and Byers Canyon** (the Moffat Route and US-40 along the Colorado): Granby–Kremmling and Kremmling–Gypsum are open.
- **Cottonwood, Kebler, Slumgullion, Spring Creek, Molas, Coal Bank, Cerro Summit, Wilkerson, Trout Creek and Douglas passes:** no line needs them, or they are seasonal or gravel roads.

**Bridges.** River bridges sit on the map's river where it passes the town; a line that crosses the river within 2 mi of one pays the real bridge's price. They change prices only: no river blocks a line.

| Bridge | Point | Lines that use it (Gentle) |
| --- | --- | --- |
| South Platte: Littleton, Denver, Commerce City, Brighton, Evans, Fort Morgan, Sterling, Julesburg | 39.61, -105.04; 39.76, -105.03; 39.84, -104.95; 39.99, -104.84; 40.38, -104.69; 40.28, -103.80; 40.63, -103.19; 40.98, -102.26 | 30, 42, 24, 16, 17, 2, 10, 3 |
| South Platte (Fairplay) | 39.22, -106.00 | 37: the river's Middle Fork in South Park, which every line from Denver into South Park crosses |
| Arkansas: Buena Vista, Salida, Cañon City, Pueblo, La Junta, Lamar | 38.83, -106.15; 38.53, -106.00; 38.45, -105.23; 38.26, -104.61; 38.02, -103.54; 38.12, -102.63 | 17, 16, 38, 7, 2, 5 |
| Royal Gorge Bridge | 38.46, -105.33 | 18 |
| Colorado: Kremmling, Glenwood Springs, Palisade, Grand Junction, Fruita | 40.07, -106.39; 39.57, -107.33; 39.12, -108.37; 39.08, -108.56; 39.16, -108.72 | 6, 6, 9, 20, 17 |
| Gunnison: Gunnison, Delta | 38.55, -106.95; 38.76, -108.09 | 13, 16 |
| White (Meeker), Yampa (Steamboat Springs, Craig) | 40.03, -107.91; 40.48, -106.83; 40.50, -107.55 | 14, 7, 12 |
| Rio Grande: Alamosa, Monte Vista, South Fork | 37.49, -105.84; 37.60, -106.14; 37.68, -106.63 | 7, 9, 9 |
| Animas (Durango) | 37.27, -107.87 | 7 |
| Purgatoire (Trinidad) | 37.16, -104.50 | 0: it is for I-25 south to Raton Pass and New Mexico |

- **Glenwood Springs:** the map's Colorado runs 2 mi north of the town, so the bridge (really the Grand Avenue Bridge, by the station) sits on the map's river.
- **The Royal Gorge Bridge** is a road and foot bridge, not a railway bridge, but it is the real crossing of the gorge.
- **Lakes:** Blue Mesa Reservoir and Lake Granby are crossed by a few lines with new bridges of 1–2 mi. Greeley–Kremmling is blocked in Tough by Lake Granby (2 mi), and no real route goes that way. No bridge is added: US-50's Blue Mesa bridges and US-34 along Lake Granby are not needed by any line.

### How the map plays

**Counts.** Of the 2,097 pairs of Colorado places within 100 mi of each other or of a neighbouring state's place:
- 9 are blocked in Gentle and 144 in Tough. Nearly all cross the Elk Mountains, the Sawatch, the San Juans or the Gore and Park ranges away from a road;
- with links up to 100 mi, every Colorado place is in one network in both modes;
- every place has at least 6 open links within 100 mi in both modes. The fewest are Julesburg (6), Holyoke and Springfield (7), all on the Nebraska, Kansas and Oklahoma lines, which are not in the game yet.

**The real routes, as chains,** are open in both modes:
- **I-25:** Fort Collins–Loveland–Longmont–Broomfield–Denver–Centennial–Castle Rock–Monument–Colorado Springs–Fountain–Pueblo–Walsenburg–Trinidad. Also Loveland–Erie–Thornton–Denver.
- **I-70 west:** Denver–Lakewood–Idaho Springs–Silverthorne–Vail–Gypsum–Glenwood Springs–Rifle–Palisade–Grand Junction (in Tough, Palisade–Rifle needs De Beque Canyon). Also Denver–Idaho Springs–Breckenridge–Vail–Glenwood Springs–Grand Junction.
- **I-70 east:** Denver–Aurora–Bennett–Deer Trail–Limon–Stratton–Burlington.
- **I-76:** Denver–Thornton–Brighton–Fort Morgan–Sterling–Julesburg.
- **US-50:** Grand Junction–Delta–Montrose–Gunnison–Salida–Cañon City–Pueblo–Rocky Ford–La Junta–Las Animas–Lamar.
- **US-160:** Walsenburg–La Veta–Alamosa–Monte Vista–South Fork–Pagosa Springs–Durango–Mancos–Cortez.
- **The Moffat Route and US-40:** Denver–Winter Park–Granby–Kremmling–Gypsum–Glenwood Springs–Rifle–Grand Junction; Denver–Idaho Springs–Winter Park–Granby–Kremmling–Steamboat Springs–Craig–Rangely.
- **US-24 and US-285:** Colorado Springs–Woodland Park–Fairplay–Breckenridge; Denver–Fairplay–Buena Vista–Salida; Pueblo–Cañon City–Salida–Buena Vista–Leadville–Vail.
- **US-550:** Durango–Silverton–Ouray–Montrose.
- **CO-82:** Glenwood Springs–Carbondale–Basalt–Aspen; Aspen–Leadville over Independence Pass.

**Main stations: neighbouring main stations reached directly** (other states' marked *). The same in both modes unless noted.

| Station | Reaches |
| --- | --- |
| Denver | Thornton, Aurora, Lakewood |
| Aurora | Thornton, Denver, Castle Rock, Limon, Lakewood, Fort Morgan |
| Lakewood | Thornton, Aurora, Boulder, Broomfield, Idaho Springs, Denver, Castle Rock, Woodland Park |
| Thornton | Aurora, Broomfield, Denver, Lakewood, Fort Morgan, Greeley |
| Broomfield | Thornton, Boulder, Lakewood, Greeley |
| Boulder | Broomfield, Idaho Springs, Granby, Lakewood, Fort Collins, Greeley |
| Castle Rock | Aurora, Colorado Springs, Limon, Lakewood, Woodland Park |
| Greeley | Thornton, Boulder, Broomfield, Fort Collins, Sterling, Fort Morgan, Cheyenne* |
| Fort Collins | Boulder, Granby, Greeley, Laramie*, Cheyenne* |
| Colorado Springs | Cañon City, Castle Rock, Limon, Woodland Park, Pueblo |
| Pueblo | La Junta, Cañon City, Colorado Springs, Trinidad |
| Sterling | Fort Morgan, Greeley |
| Fort Morgan | Thornton, Aurora, Burlington, Limon, Sterling, Greeley |
| Limon | Aurora, Lamar, La Junta, Burlington, Castle Rock, Colorado Springs, Fort Morgan |
| Burlington | Lamar, Limon, Fort Morgan |
| La Junta | Lamar, Limon, Trinidad, Pueblo |
| Lamar | La Junta, Burlington, Limon, Trinidad |
| Trinidad | Alamosa, Lamar, La Junta, Cañon City, Pueblo; Gentle only: Monte Vista |
| Idaho Springs | Boulder, Granby, Lakewood, Woodland Park, Breckenridge |
| Woodland Park | Salida, Idaho Springs, Cañon City, Castle Rock, Colorado Springs, Lakewood, Breckenridge |
| Cañon City | Salida, Colorado Springs, Trinidad, Monte Vista, Woodland Park, Pueblo |
| Salida | Cañon City, Vail, Gunnison, Monte Vista, Woodland Park, Aspen, Breckenridge |
| Breckenridge | Salida, Idaho Springs, Vail, Granby, Woodland Park |
| Vail | Salida, Glenwood Springs, Steamboat Springs, Breckenridge; Gentle only: Granby, Aspen |
| Glenwood Springs | Vail, Grand Junction, Steamboat Springs, Aspen, Vernal*, Moab* |
| Aspen | Salida, Glenwood Springs, Grand Junction; Gentle only: Vail, Gunnison |
| Granby | Boulder, Idaho Springs, Fort Collins, Steamboat Springs, Breckenridge, Laramie*, Rawlins*; Gentle only: Vail |
| Steamboat Springs | Vail, Glenwood Springs, Granby, Vernal*, Rawlins*, Rock Springs* |
| Grand Junction | Montrose, Glenwood Springs, Aspen, Moab*; Gentle only: Gunnison |
| Montrose | Gunnison, Grand Junction, Telluride, Moab* |
| Gunnison | Durango, Salida, Montrose, Monte Vista, Telluride; Gentle only: Grand Junction, Aspen |
| Telluride | Durango, Montrose, Cortez, Gunnison, Moab* |
| Durango | Alamosa, Cortez, Gunnison, Monte Vista, Telluride |
| Cortez | Durango, Telluride, Moab* |
| Alamosa | Durango, Trinidad, Monte Vista |
| Monte Vista | Alamosa, Durango, Salida, Cañon City, Gunnison; Gentle only: Trinidad |

Every main station reaches at least two neighbouring main stations in both modes. The Tough-only gaps (Vail–Aspen, Vail–Granby, Gunnison–Aspen, Gunnison–Grand Junction, Trinidad–Monte Vista) have no direct road over the mountains between them. Their real roads go round by Glenwood Springs, Kremmling, Montrose and La Veta Pass, and those links are open.

**Neighbours.** I compared all 168 pairs of the neighbouring states' places near Colorado (within 200 mi of each other) with this pack's passes and bridges and without them. None is opened or closed.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Denver, Boulder & Greeley | `denver` | Denver, Aurora, Lakewood, Thornton, Broomfield, Boulder, Castle Rock, Greeley | 50 passengers; own 5 counties; 10 crates of produce (Greeley, and the farm towns Brighton, Bennett and Deer Trail) |
| The Front Range & the Plains | `front` | Fort Collins, Colorado Springs, Pueblo, Sterling, Fort Morgan, Limon, Burlington, La Junta, Lamar, Trinidad | 140 passengers; connect FTC–PUB (I-25); own 12 counties |
| The Rockies | `rockies` | Idaho Springs, Woodland Park, Cañon City, Salida, Breckenridge, Vail, Glenwood Springs, Aspen, Granby, Steamboat Springs | 280 passengers; connect DEN–GWS (over the Divide by I-70 or the Moffat Tunnel, open in both modes); 25 trucks (from the mountain stations) |
| The Western Slope & the San Juans | `west` | Grand Junction, Montrose, Gunnison, Telluride, Durango, Cortez, Alamosa, Monte Vista | 450 passengers; connect DEN–DRO (US-160 by Alamosa and Wolf Creek Pass, or US-50 and US-550; open in both modes); one high-speed train |

- **Targets** follow Utah's, Wyoming's and California's four levels.
- **Each level's regions touch the earlier ones:**
  - Level 1: Adams, Broomfield, Boulder, Douglas and Weld all touch the start, or each other.
  - Level 2: Larimer touches Weld and Boulder; El Paso touches Douglas; the plains regions touch Adams, Arapahoe, Weld and each other; Bent-Crowley-Otero and Huerfano-Las Animas touch Pueblo.
  - Level 3: Clear Creek-Gilpin and Park-Teller touch Jefferson; Grand-Jackson touches Boulder and Larimer; Custer-Fremont touches El Paso and Pueblo; the rest touch each other.
  - Level 4: Mesa touches Garfield; Gunnison-Hinsdale touches Chaffee-Lake; Alamosa touches Huerfano-Las Animas; Mineral-Rio Grande-Saguache touches Custer-Fremont and Chaffee-Lake.
- **Level 1 has a cargo goal**, because Greeley is a farm station.

### Biomes

Following Utah's and Wyoming's conventions:
- **`forest`** (trees even on the flats): Clear Creek-Gilpin and Summit. Their valleys are 8,000–9,500 ft up, in lodgepole pine and spruce (as Wyoming's Teton).
- **`wooded`** (trees on the hills):
  - the Front Range counties: Jefferson, Boulder, Larimer, Douglas and El Paso. Their western halves are the forested foothills, and "wooded" puts trees only on the hills, so their plains stay farmland;
  - the mountain counties: Park-Teller, Custer-Fremont, Chaffee-Lake, Eagle, Garfield, Pitkin, Grand-Jackson, Gunnison-Hinsdale, Ouray-San Miguel and Archuleta-La Plata-San Juan;
  - Huerfano-Las Animas (the Spanish Peaks and Raton Mesa over the plains).
- **`dry`:**
  - the San Luis Valley (Alamosa-Conejos-Costilla, Mineral-Rio Grande-Saguache): a high desert, about 7 inches of rain a year (moderately known);
  - the Four Corners (Dolores-Montezuma);
  - the Grand Valley (Mesa) and the Uncompahgre's adobe desert (Delta-Montrose);
  - the northwest's sagebrush (Moffat-Rio Blanco-Routt). Utah's Uinta Basin and Wyoming's Carbon and Sublette-Sweetwater are dry across the lines.
- **Not listed (farmland and grassland):** Denver, Adams, Arapahoe, Broomfield, Weld and Pueblo, and the eastern plains (Utah leaves out the Wasatch Front).
- **Judgment calls:**
  - The Front Range metro counties are wooded, unlike Utah's Wasatch Front, because most of their area is foothills.
  - Moffat-Rio Blanco-Routt is dry, though Routt (Steamboat) is green mountains: most of the region is Moffat's and Rio Blanco's sagebrush.
  - Delta-Montrose is dry, though Grand Mesa and the Uncompahgre Plateau above it are forested.

### Checks

- **`node tools/check-pack.js CO`:** `CO: passed (36 stations, 77 towns, 0 city maps, 28 passes, 31 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js CO`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is DEN, LKWD and AUR.
  - The test laid Denver–Lakewood (9 mi, 1 train), bought Adams (THN), and 23 passengers arrived in the week.
  - Levels mode opened level 1 (50 passengers, 5 counties, 10 crates of produce).
- **Screenshots** (`test-out/CO/`):
  - The start's three stations sit together on the South Platte, with Lakewood's mountain mark at the foot of Jefferson's wooded foothills.
  - Boulder Canyon, Clear Creek Canyon, Big Thompson Canyon and Ute Pass are labelled along the Front Range.
  - The mountains fill the west; the San Luis Valley, the southwest, Mesa and the northwest are tan (dry), and the plains are green.
  - The phone screen's first-track hint drags Denver to Lakewood.

### For the main agent

1. **Start:** Denver, Jefferson and Arapahoe, with Lakewood typed mountain (Denver's neighbours are all metro counties).
2. **Station exceptions:** Glenwood Springs over Rifle (478 people fewer) and Vail over Gypsum. To follow the rule strictly instead, see "Two exceptions" above.
3. **Airports:** Denver International and Colorado Springs. Colorado Springs is over the 1-million bar from memory (moderately known).
4. **Leniencies:** McClure Pass, Independence Pass, Red Mountain Pass and Dallas Divide open some long lines across the Elks and the San Juans in Tough. Clear Creek Canyon takes I-70's Denver–Idaho Springs.
5. **New Mexico, Kansas, Nebraska and Oklahoma:** Raton Pass, Cumbres Pass and the Trinidad bridge are in place for New Mexico. Julesburg, Holyoke, Wray, Burlington, Cheyenne Wells, Lamar and Springfield are near the eastern lines.
