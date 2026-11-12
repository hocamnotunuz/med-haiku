# Mississippi (MS) pack notes

## Region merges (phase 1)

Populations: `packs/MS/raw/counties.json` and `packs/MS/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base; state total 2,961,306). Every group was checked as connected through `neighbors` (a script under /tmp/ms-work), and stations are the largest place with a population in places.json. Roads, rivers and railways are well known unless marked "(moderately known)". Border lengths were not measured.

### Recommended (82 -> 43 regions)

```
merge: [["Alcorn", "Tishomingo"], ["Itawamba", "Prentiss"], ["Benton", "Marshall", "Tippah"], ["Pontotoc", "Union"], ["Calhoun", "Chickasaw", "Webster"], ["Clay", "Monroe"], ["Attala", "Choctaw", "Montgomery"], ["Leake", "Neshoba"], ["Kemper", "Noxubee", "Winston"], ["Grenada", "Yalobusha"], ["Clarke", "Jasper"], ["Newton", "Scott"], ["Greene", "Perry", "Wayne"], ["George", "Stone"], ["Covington", "Simpson", "Smith"], ["Pike", "Walthall"], ["Jefferson Davis", "Lawrence", "Marion"], ["Copiah", "Lincoln"], ["Amite", "Franklin", "Wilkinson"], ["Adams", "Claiborne", "Jefferson"], ["Holmes", "Humphreys", "Yazoo"], ["Issaquena", "Sharkey", "Warren"], ["Bolivar", "Sunflower"], ["Coahoma", "Quitman", "Tunica"], ["Carroll", "Leflore", "Tallahatchie"], ["Panola", "Tate"]]
names: {}
bridges / join: none needed (the Mississippi River is the state line; the coast counties touch along land)
```

26 groups + 17 single counties = 43 regions. No `names` are needed (automatic names like "Alcorn-Tishomingo County" are fine); optional: "Issaquena-Sharkey-Warren" could be called "Vicksburg" style but there is no clash, so leave it.

Alone, 50k and over (15): Hinds, Harrison, DeSoto, Rankin, Jackson, Madison, Lee, Forrest, Lauderdale, Jones, Lamar, Lowndes, Lafayette, Pearl River, Oktibbeha.

Alone, under 50k (the 2 exceptions):
- **Hancock** 46k (Diamondhead 9,522, Bay St. Louis 9,289): I-10/US-90 coast with Stennis; its only neighbours are Harrison (209k) and Pearl River (56k), both big. Merging would take a Gulf Coast station.
- **Washington** 45k (Greenville 29,691): the Delta's one real city on the river (US-82, US-61). Its neighbours Bolivar and Sunflower pair up (Cleveland/Indianola), and Humphreys/Sharkey/Issaquena are better placed elsewhere.

### Groups

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Alcorn + Tishomingo | NE corner: US-72 (Corinth to Iuka), the old Memphis and Charleston railway (moderately known) | Corinth (14,629) | 53,600 |
| Itawamba + Prentiss | Booneville and Fulton, east of the Tupelo area; both border Lee but neither has a road reason to join it | Booneville (9,117) | 48,868 |
| Benton + Marshall + Tippah | Hills north of US-78/I-22: Holly Springs, Ashland, Ripley by MS-4 (moderately known). Tippah joins through Benton (chain) | Holly Springs (6,961) | 63,218 |
| Pontotoc + Union | Pontotoc Ridge, MS-15 between Pontotoc and New Albany (moderately known), I-22/US-78 | New Albany (7,622) | 58,978 |
| Calhoun + Chickasaw + Webster | Hill country: Houston, Calhoun City, Eupora (MS-8/9/15, moderately known) | Houston (3,799) | 40,297 |
| Clay + Monroe | Amory/Aberdeen and West Point, the Tombigbee valley south of Tupelo; US-45 and US-45 Alt (moderately known) | West Point (10,104) | 52,810 |
| Attala + Choctaw + Montgomery | Kosciusko, Winona (I-55/US-51) and Ackerman (US-82) around the Natchez Trace | Kosciusko (7,110) | 35,954 |
| Leake + Neshoba | Carthage and Philadelphia on MS-16; the Choctaw reservation spans both | Philadelphia (7,120) | 50,364 |
| Kemper + Noxubee + Winston | Louisville, De Kalb, Macon: US-45 north of Meridian toward Columbus | Louisville (6,076) | 36,977 |
| Grenada + Yalobusha | I-55: Grenada and Water Valley | Grenada (12,697) | 34,111 |
| Clarke + Jasper | US-11 and the Norfolk Southern Meridian-Laurel line through Quitman and Heidelberg (moderately known) | Quitman (2,062) | 31,977 |
| Newton + Scott | I-20 between Jackson and Meridian: Forest, Morton, Newton | Forest (5,432) | 49,285 |
| Greene + Perry + Wayne | SE Pine Belt: Waynesboro (US-45/84), Leakesville, Richton (US-98) | Waynesboro (4,567) | 44,826 |
| George + Stone | De Soto National Forest: Wiggins (US-49), Lucedale (US-98) | Wiggins (4,268) | 42,683 |
| Covington + Simpson + Smith | US-49 south of Jackson: Magee, Mendenhall, Collins | Magee (4,027) | 58,500 |
| Pike + Walthall | McComb on I-55/US-98 and Tylertown | McComb (12,410) | 54,210 |
| Jefferson Davis + Lawrence + Marion | Columbia, Monticello, Prentiss, a triangle on US-84/US-98 | Columbia (5,874) | 47,770 |
| Copiah + Lincoln | I-55: Hazlehurst, Crystal Springs, Brookhaven (Copiah-Lincoln Community College sits in both) | Brookhaven (11,672) | 63,276 |
| Amite + Franklin + Wilkinson | SW corner triangle: Liberty/Gloster, Meadville/Bude (US-84), Centreville/Woodville (US-61) | Centreville (1,254) | 28,989 |
| Adams + Claiborne + Jefferson | US-61 and the Natchez Trace: Natchez, Fayette, Port Gibson | Natchez (14,504) | 45,929 |
| Holmes + Humphreys + Yazoo | Yazoo City, Belzoni (US-49W), Lexington/Durant (I-55); the Yazoo Basin | Yazoo City (10,320) | 51,549 |
| Issaquena + Sharkey + Warren | US-61 from Vicksburg north to Rolling Fork; the Delta south of the Yazoo | Vicksburg (21,560) | 49,854 |
| Bolivar + Sunflower | Cleveland and Indianola, central Delta (US-61, US-49W, US-82) | Cleveland (11,200) | 56,952 |
| Coahoma + Quitman + Tunica | Northern Delta on US-61: Tunica, Marks, Clarksdale | Clarksdale (14,890) | 37,349 |
| Carroll + Leflore + Tallahatchie | Greenwood, Charleston, Carrollton (US-82, US-49E) | Greenwood (14,500) | 51,053 |
| Panola + Tate | I-55 north of Grenada: Batesville and Senatobia | Senatobia (8,354) | 61,270 |

The Station rule is the largest place, as in NM/CO. Exceptions to the "under 50k" rule: none in groups (every merged county is under 50k; some groups total over 50k, as allowed). Weak links worth a look: Amite-Franklin-Wilkinson (28,989, three tiny towns), Clarke-Jasper (a 2,000-person station), and the Benton chain (Tippah only touches Benton and Union, not Marshall).

Corridors stay clean: I-55 runs Desoto, Panola-Tate, Grenada-Yalobusha, Attala-Choctaw-Montgomery, Holmes-Humphreys-Yazoo, Madison/Hinds/Rankin, Copiah-Lincoln, Pike-Walthall. I-20: Warren (Issaquena-Sharkey-Warren), Hinds, Rankin, Newton-Scott, Lauderdale. US-49: Rankin, Covington-Simpson-Smith, Forrest, Harrison.

### Alternative (43 regions as well)

Replace `["Attala","Choctaw","Montgomery"]`, `["Leake","Neshoba"]`, `["Kemper","Noxubee","Winston"]`, `["Calhoun","Chickasaw","Webster"]` and the lone Oktibbeha with: `["Choctaw","Montgomery","Webster"]` (28k, Winona), `["Attala","Leake"]` (39k, Kosciusko), `["Kemper","Neshoba","Winston"]` (56k, Philadelphia), `["Noxubee","Oktibbeha"]` (62k, Starkville), `["Calhoun","Chickasaw","Pontotoc"]` (Pontotoc) and `["Union","Tippah"]`, `["Benton","Marshall"]` (Holly Springs). Pro: Kosciusko-Carthage on MS-35 and Neshoba-Winston-Kemper hold together, and Benton-Marshall is a straight pair. Con: it merges Oktibbeha (52k), against the rule, and Winona/Eupora/Ackerman (28k) is a weak region.

### Map observations (from the data, nothing blocking)
- 82 regions, all neighbours symmetric, no Alabama neighbours yet (expected: "later"); Louisiana, Tennessee and Arkansas appear as `la-`, `tn-`, `ar-`. Adams touches the merged `la-catahoula-concordia-tensas`, Hancock `la-st-tammany`.
- Every place with coordinates lies inside its county on the map except Wesson, which the data puts in Copiah but whose point falls just inside Lincoln (it straddles the county line; harmless).
- places.json: 128 of 427 places have no population (CDPs). Stations come from the largest with data, but many small counties' towns are blank (e.g. Jefferson Davis has only Prentiss and Bassfield). Odd names: "Pearl River" (a Choctaw CDP in Neshoba, clashes with Pearl River County and the Pearl city in Rankin), "Bogue Chitto" (CDPs in both Neshoba and Lincoln), "Alcorn State University" (a CDP in Claiborne), "Hide-A-Way Lake" (Pearl River). Diamondhead is typed "city" and is Hancock's largest.
- Counties.json `pop` is rounded to thousands (Issaquena shows 1); sums above use the exact county figures.

## Phase 2: the pack

43 stations (one per region), 65 towns (1.5 per region; 2 scenic: Biloxi, Gulf Islands National Seashore, plus 5 scenic stations), 0 passes, 19 bridges, 1 bay, 4 levels. `node tools/check-pack.js MS` passes with 0 errors and 0 warnings, all packs pass, and `node tools/test-pack.js MS` passes (17 of 17). The pack file is written from a spec (helper scripts in /tmp/ms-work); town points come straight from places.json.

### Start
Hinds (Jackson), Madison and Holmes-Humphreys-Yazoo, all touching each other. Jackson and Madison are metro and Yazoo City is farm, so the first track (Madison-Yazoo City, 36 miles, laid by the pack test) has riders. (Rankin was left out of the start because Pearl and Brandon are also metro; with it the start would have been all one type.)

### Stations: calls beyond "biggest place"
- **Sizes:** Jackson 3 (the county is 228k; it is a 600,000-person metro and the capital, judged against Little Rock 3 and Baton Rouge 3); the other regions of 50k or more 2; every merged and smaller region 1 (Hancock 46k, Washington 45k included), as Louisiana. DeSoto (Southaven) and Rankin (Pearl) and Madison are `metro` size 2.
- **Moved to downtown** (Census point more than a few km away): Jackson (the Capitol), Hattiesburg, Meridian, Tupelo, Columbus, Oxford (the Square), Vicksburg, Greenville, Gulfport (the port), Corinth, Greenwood, Clarksdale, Brookhaven, McComb, Pascagoula, Bay St. Louis. Coordinates for these are well-known downtown points rounded to 0.01 degrees.
- **Natchez** is nudged 2 miles south-east of the old downtown (31.53, -91.38) to sit just over 4 miles from Louisiana's Vidalia station across the river; no warning is left.
- **Gloster** for Amite-Franklin-Wilkinson, not Centreville (1,254): Centreville is in the far south-west corner by Wilkinson, Gloster (900, on US-24) is in the middle of the three counties. Centreville and Woodville are towns.
- **Quitman** for Clarke-Jasper (2,062, the biggest, on US-45 toward Meridian and Waynesboro, the seat of Clarke). Heidelberg (640), the middle of the US-11 and railway line through the two counties, is too small; Bay Springs and Heidelberg are towns.
- **Bay St. Louis** for Hancock, not Diamondhead (9,522 against 9,289, a gated community by I-10 without a downtown). Diamondhead is a town.
- **Pearl** for Rankin (the biggest, 27,106) rather than Brandon (25,137, the seat, a town). Jackson-Medgar Evers International Airport is marked here (the airport is in Rankin County, at Pearl and Flowood; moderately known, so check).
- **Senatobia** over Batesville and **New Albany** over Pontotoc: the biggest places, as phase 1 said.
- **Purvis** for Lamar (the seat; the county's people are mostly Hattiesburg's south-west suburbs).
- Ports: **Port of Gulfport** and **Port of Pascagoula** (the two real deep-water seaports; Ingalls Shipbuilding is at Pascagoula). Airports: **Gulfport-Biloxi International** (on Gulfport) and **Jackson-Medgar Evers International** (on Pearl) by the bar the other packs use (Little Rock, Baton Rouge, Rogers).
- IDs are unique across all packs (Jackson JAN, Gulfport GPT, Tupelo TUP, Pearl PRL; where the natural code was taken, MDMS, GNWD, GRVM, CMBS, CLMA, WYBO, BNVM, NALB and HSTM are used).
- Types: `coast` for Bay St. Louis, Gulfport, Pascagoula; `metro` for Jackson, Madison, Pearl, Southaven, Hattiesburg, Meridian, Oxford, Tupelo, Columbus, Starkville; `farm` for the rest (Delta cotton, hills, pine country). No mountains or desert.

### Towns and scenic places
The next-biggest places by Census population, spaced at least 4 miles apart. None for Forrest (Petal is 3 miles from Hattiesburg), Lafayette (Oxford is the only place of size), Lauderdale has Marion and Oktibbeha has Maben. Horn Lake (26,736) is left out (4.0 miles from Southaven). **Baldwyn** is nudged 1 km south to sit inside Lee. Scenic (all well known):
- **Natchez** (antebellum homes), **Vicksburg** (the National Military Park), **Tupelo** (Elvis Presley's Birthplace), **Oxford** (Ole Miss and Rowan Oak), **Clarksdale** (the Delta blues): on their stations.
- **Biloxi** (the Gulf beaches and casinos; at downtown, 30.40, -88.89) and **Gulf Islands National Seashore** (30.39, -88.79: the Mississippi district headquarters and Davis Bayou at Ocean Springs; the islands lie out in the Sound). Not added: the Natchez Trace as a place (it is a road through six regions), Windsor Ruins, Beauvoir.

### Water, bridges and the bay
- **Rivers and lakes on the map:** the Mississippi, the Pearl, the Yazoo, the Big Black, the Big Sunflower, the Tombigbee, and six reservoirs (Ross Barnett, Grenada, Arkabutla, Sardis, Enid, Pickwick). Rivers only cost more (a new bridge); lakes block, except in Gentle where a new bridge up to 8 miles works.
- **Mississippi:** the same four crossings as the neighbours, at the same points: Vicksburg (I-20; Louisiana's pack), Natchez-Vidalia (US-84; Louisiana's), Greenville (US-82; Arkansas's) and Helena (US-49; Arkansas's).
- **Pearl:** I-20 and I-55 at Jackson; the Ross Barnett Reservoir dam (Spillway Road) and the Natchez Trace Parkway bridge over Pelahatchie Bay (moderately known; approximate); US-84 at Monticello and US-98 at Columbia (towns on the Pearl); I-59 at Picayune-Slidell (approximate; Louisiana's pack lists only I-10 at Slidell).
- **Others:** US-82 over the Yazoo at Greenwood, US-49 at Yazoo City, I-20 over the Big Black at Bovina (approximate), US-82 over the Tombigbee at Columbus, and **I-55 over Arkabutla Lake** (moderately known: the interstate crosses the lake near Coldwater; added so Southaven-Senatobia stays open in Tough).
- **Gulf coast:** US-90 bridges at Bay St. Louis, Biloxi Bay and the Pascagoula River (well known). The map's land has a gap for **St. Louis Bay** only (Biloxi Bay and the Pascagoula are inside the county shapes), so `bays` has one ring around St. Louis Bay, wider than the water (land inside stays land). The other two US-90 bridges sit by the coast and cost nothing extra.
- All coordinates are general knowledge, within about a mile, snapped onto the map's river or lake by a script; the checker is happy with them (none is more than 3 miles from water). The bridges marked approximate or moderately known are the ones to double check.
- Not listed: crossings of the Grenada and Sardis reservoirs (Houston-Grenada and Oxford-Senatobia stay blocked in Tough: I know of no well-known highway bridge there), the Pearl at Carthage, the Yazoo at Redwood.

### Reachability (`NR.blockedReason`, Gentle and Tough)
- **Gentle:** every neighbouring pair of main stations, in Mississippi and across the borders, is open. **Tough:** open except three pairs, all lake crossings with real alternatives: Madison-Forest (Ross Barnett Reservoir, 4 miles; Madison reaches Pearl, Jackson and Yazoo City, Forest reaches Pearl and Morton's neighbours), Grenada-Houston (Grenada Lake, 14 miles) and Oxford-Senatobia (Sardis Lake, 3 miles). No main station has fewer than two open neighbours in either mode.
- Every town has an open link to one of its four nearest main stations in both modes.
- **Corridors open as chains in both modes:** I-55 (Memphis, Southaven, Senatobia, Grenada, Kosciusko, Yazoo City, Jackson, Brookhaven, McComb, Hammond), I-20 (Tallulah, Vicksburg, Jackson, Pearl, Forest, Meridian), US-49 (Jackson, Pearl, Magee, Hattiesburg, Wiggins, Gulfport; and north Jackson, Yazoo City, Cleveland, Clarksdale), US-61 (Vidalia, Natchez, Vicksburg, Greenville, Cleveland, Clarksdale, Southaven), US-90/I-10 (Slidell, Bay St. Louis, Gulfport, Pascagoula), I-59 (Slidell, Picayune, Hattiesburg, Laurel, Quitman, Meridian), US-45 (Meridian, Louisville, Columbus, West Point, Tupelo, Booneville, Corinth), I-22/US-78 (Memphis, Southaven, Holly Springs, New Albany, Tupelo).
- **Across the borders (all open):** Southaven-Memphis (and West Memphis), Holly Springs-Oakland, Corinth-Savannah and Oakland (TN), Vicksburg-Tallulah and Vidalia, Natchez-Vidalia, McComb-Hammond and Bogalusa, Bay St. Louis and Picayune-Slidell, Greenville-Monticello AR, Cleveland and Clarksdale-Helena (AR).

### Levels
1. Jackson & the capital region (8 regions): 50 passengers, 5 counties, 10 crates of produce.
2. The Delta, Natchez & the southwest (11): 140 passengers, connect Jackson to Greenville (by Vicksburg), 15 counties.
3. The Pine Belt & the Gulf coast (11): 280 passengers, connect Hattiesburg to Gulfport (US-49), one high-speed train.
4. The hills & the north (13): 450 passengers, connect Southaven to Tupelo (US-78, I-22), 30 counties.
Goal values follow Louisiana, Arkansas and Tennessee.

### Biomes
`forest`: the Pine Belt and the Gulf plain (Forrest, Lamar, Jones, George-Stone, Greene-Perry-Wayne, Pearl River, Hancock, Harrison, Jackson, Covington-Simpson-Smith, Jefferson Davis-Lawrence-Marion, Pike-Walthall, Clarke-Jasper) and the Homochitto country (Amite-Franklin-Wilkinson), as Louisiana's Florida Parishes and Arkansas's pine belt. `wooded`: the north-east and central hills, Rankin, Copiah-Lincoln and the Natchez bluffs. Unlisted (farmland): the Delta, the Black Prairie (Columbus, Starkville, West Point), the Yazoo Basin, Hinds and Madison. No `dry`.

### Unsure
- Jackson-Medgar Evers sits in Rankin County (Pearl/Flowood): marked on Pearl; check.
- The Natchez Trace bridge over Pelahatchie Bay, the Pearl at I-59 and the Big Black at I-20 are approximate; the I-55 crossing of Arkabutla Lake is moderately known.
- Gloster, Quitman and Bay St. Louis as stations are judgment calls (above).
- The start leaves Rankin out of the first three counties on purpose (types).
