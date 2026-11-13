# Kansas (KS) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (52 regions, with both renames). The map, raw facts and terrain were rebuilt, and the pack (phase 2, below) is built on it.

Populations: `packs/KS/raw/counties.json` and `packs/KS/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 2,937,835). Every group is connected through `neighbors`, and I checked the shared border lengths on the rings in `map.js` (given in km where it matters). Distances between towns are straight lines between `places.json` points, in miles. Roads, rivers and railways named here are well known unless marked "(moderately known)".

### Recommended (105 → 52 regions)

```
merge: [["Atchison", "Doniphan"], ["Brown", "Nemaha"], ["Marshall", "Washington"], ["Jackson", "Jefferson"], ["Pottawatomie", "Wabaunsee"], ["Linn", "Miami"], ["Anderson", "Franklin"], ["Coffey", "Osage"], ["Chase", "Lyon"], ["Allen", "Bourbon"], ["Cherokee", "Crawford"], ["Labette", "Neosho"], ["Montgomery", "Wilson"], ["Elk", "Greenwood", "Woodson"], ["Chautauqua", "Cowley"], ["Geary", "Morris"], ["Clay", "Dickinson"], ["Harvey", "Marion"], ["McPherson", "Rice"], ["Harper", "Sumner"], ["Kingman", "Kiowa", "Pratt"], ["Barber", "Comanche"], ["Barton", "Stafford"], ["Edwards", "Pawnee"], ["Clark", "Ford", "Gray"], ["Finney", "Hamilton", "Kearny"], ["Grant", "Haskell", "Stanton"], ["Morton", "Stevens"], ["Meade", "Seward"], ["Greeley", "Scott", "Wichita"], ["Hodgeman", "Lane", "Ness"], ["Cheyenne", "Sherman", "Wallace"], ["Logan", "Rawlins", "Thomas"], ["Decatur", "Norton"], ["Graham", "Sheridan"], ["Gove", "Trego"], ["Ellis", "Rush"], ["Phillips", "Rooks"], ["Osborne", "Smith"], ["Jewell", "Mitchell"], ["Cloud", "Ottawa", "Republic"], ["Ellsworth", "Lincoln", "Russell"]]
names: { "Cheyenne-Sherman-Wallace": "Sherman-Wallace-Cheyenne County", "Greeley-Scott-Wichita": "Scott-Greeley-Wichita County" }
```

No `bridges` or `join`: no Kansas county is cut off by water.

The two names follow Colorado's "Kit Carson-Cheyenne County" and Nebraska's "Deuel-Kimball-Cheyenne County". "Cheyenne-Sherman-Wallace County" would read as Cheyenne, Wyoming. "Greeley-Scott-Wichita County" would read as Greeley, Colorado (Colorado is next door), and it is Scott City's region. Wichita County stays in the name but not first, as in Nebraska's "Harlan-Kearney-Phelps". The other automatic names clash with nothing.

**Alone, over 50k (10):** Johnson (Overland Park 197,249), Sedgwick (Wichita 397,547), Shawnee (Topeka 126,610), Wyandotte (Kansas City 156,609), Douglas (Lawrence 94,928), Leavenworth (Leavenworth 37,351), Riley (Manhattan 54,109), Butler (Andover 14,898; El Dorado 12,876 is the county seat on the Turnpike, a phase 2 choice), Reno (Hutchinson 40,022), Saline (Salina 46,883).

**No exceptions:** every county under 50k is merged. One group goes over 50k: Cherokee + Crawford (58,338).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Atchison + Doniphan | The Missouri River bluffs above Leavenworth: Atchison, with Troy 16 mi and Wathena 18 | Atchison (10,885) | 23,856 |
| Brown + Nemaha | US-36: Hiawatha, Sabetha 14 mi, Seneca 28 | Hiawatha (3,274) | 19,775 |
| Marshall + Washington | US-36 and the Pony Express country: Marysville, Washington 22 mi, Hanover | Marysville (3,440) | 15,564 |
| Jackson + Jefferson | North of Topeka: Holton on US-75, Valley Falls 17 mi, Oskaloosa 28 | Holton (3,399) | 31,591 |
| Pottawatomie + Wabaunsee | The Kansas River between Topeka and Manhattan: US-24 and the Union Pacific on the north bank, I-70 on the south. Bridged at Wamego; Alma 13 mi | Wamego (4,849) | 32,219 |
| Linn + Miami | Kansas City's south edge on US-69 and the Marais des Cygnes (moderately known): Paola, Louisburg, Osawatomie, La Cygne 17 mi, Pleasanton 29. Colorado's Elbert + Lincoln case | Paola (5,769) | 43,785 |
| Anderson + Franklin | I-35 at Ottawa; Garnett 22 mi south on US-59 (moderately known) | Ottawa (12,630) | 33,817 |
| Coffey + Osage | US-75 (moderately known) from Lyndon to Burlington, between Topeka and Emporia; Osage City is on the BNSF line Topeka–Emporia (moderately known) | Osage City (2,861) | 24,124 |
| Chase + Lyon | Emporia and the Flint Hills' heart: US-50 and the BNSF to Strong City (Tallgrass Prairie preserve), the Kansas Turnpike. Cottonwood Falls 19 mi | Emporia (24,138) | 34,751 |
| Allen + Bourbon | US-54 from Fort Scott to Iola (39 mi) | Fort Scott (7,556) | 26,884 |
| Cherokee + Crawford | Pittsburg and the old coal and lead-zinc district by Joplin: Columbus 18 mi, Baxter Springs 27, Galena | Pittsburg (20,646) | 58,338 |
| Labette + Neosho | The Neosho valley (moderately known): Parsons, Erie 16 mi, Chanute 26, Oswego | Parsons (9,606) | 36,091 |
| Montgomery + Wilson | The Verdigris valley (moderately known): Coffeyville, Independence, Neodesha 13 mi from Independence, Fredonia | Coffeyville (8,830) | 40,121 |
| Elk + Greenwood + Woodson (50, 34 km) | The Flint Hills' south end: Eureka, with Howard 25 mi and Yates Center 29 (US-54, moderately known) | Eureka (2,330) | 11,627 |
| Chautauqua + Cowley | Cowley's two cities with the hills to their east on US-166 (moderately known): Cedar Vale 30 mi, Sedan 47 | Arkansas City (11,960) | 37,938 |
| Geary + Morris | Junction City (Fort Riley), Herington 23 mi, Council Grove 32 (the Santa Fe Trail) | Junction City (22,932) | 42,126 |
| Clay + Dickinson | Abilene on I-70 and the Union Pacific; Clay Center 32 mi north (K-15, moderately known) | Abilene (6,464) | 26,511 |
| Harvey + Marion | Newton; US-50 and the BNSF east through Peabody and Florence (moderately known); Hesston, Hillsboro 23 mi | Newton (18,597) | 45,853 |
| McPherson + Rice | US-56 (moderately known): McPherson, Lindsborg, Lyons 29 mi, Sterling | McPherson (14,080) | 39,647 |
| Harper + Sumner | I-35, the Turnpike and the BNSF south to Oklahoma at Wellington; Anthony 36 mi | Wellington (7,706) | 27,866 |
| Kingman + Kiowa + Pratt (29, 29 km) | US-54/400 west of Wichita: Kingman 36 mi east of Pratt, Greensburg 29 west | Pratt (6,598) | 19,087 |
| Barber + Comanche | The Gypsum Hills on the Oklahoma line, US-160 (moderately known): Coldwater 41 mi | Medicine Lodge (1,776) | 5,913 |
| Barton + Stafford | Great Bend and US-281 (moderately known) to St. John, 25 mi; Cheyenne Bottoms and Quivira, the two great wetlands | Great Bend (14,741) | 29,565 |
| Edwards + Pawnee | The Santa Fe Trail, US-56 and the BNSF (Southwest Chief route, moderately known): Larned (Fort Larned), Kinsley 25 mi | Larned (3,768) | 9,157 |
| Clark + Ford + Gray (49, 50 km) | Dodge City: the Arkansas valley west to Cimarron (18 mi), and south to Minneola (22) and Ashland (42) | Dodge City (27,793) | 41,935 |
| Finney + Hamilton + Kearny (60, 60 km) | The Arkansas valley: US-50 and the Southwest Chief from Garden City by Holcomb, Lakin (22 mi) and Syracuse (52) to Colorado | Garden City (28,145) | 44,965 |
| Grant + Haskell + Stanton (39, 39 km) | Ulysses, with Johnson City 21 mi west and Sublette 29 east | Ulysses (5,791) | 13,218 |
| Morton + Stevens | US-56 (moderately known): Hugoton, Elkhart 33 mi, the Cimarron National Grassland | Hugoton (3,752) | 7,949 |
| Meade + Seward | US-54 (moderately known) from Liberal by Plains to Meade, 36 mi | Liberal (19,832) | 26,025 |
| Greeley + Scott + Wichita (49, 49 km) | K-96 (moderately known) west from Scott City: Leoti 25 mi, Tribune 46 | Scott City (4,113) | 8,587 |
| Hodgeman + Lane + Ness (56, 48 km) | Ness City, with Jetmore 32 mi south on US-283 (moderately known) and Dighton 30 west | Ness City (1,344) | 5,976 |
| Cheyenne + Sherman + Wallace (54, 49 km) | The Colorado line: Goodland on I-70, St. Francis 30 mi north and Sharon Springs 31 south (K-27, moderately known); Mount Sunflower | Goodland (4,465) | 10,054 |
| Logan + Rawlins + Thomas (50, 56 km) | Colby on I-70, Oakley 21 mi south, Atwood 29 north | Colby (5,621) | 13,254 |
| Decatur + Norton | US-36: Norton, Oberlin 34 mi | Norton (2,754) | 8,221 |
| Graham + Sheridan | US-24 (moderately known): Hill City, Hoxie 32 mi; Nicodemus | Hill City (1,407) | 4,854 |
| Gove + Trego | I-70 and the Union Pacific: WaKeeney, Quinter 19 mi; Monument Rocks | WaKeeney (1,793) | 5,527 |
| Ellis + Rush | Hays and US-183 south to La Crosse, 24 mi | Hays (21,116) | 31,886 |
| Phillips + Rooks | US-183 (moderately known): Phillipsburg, Stockton 23 mi, Plainville 36 | Phillipsburg (2,344) | 9,891 |
| Osborne + Smith | US-281 (moderately known): Smith Center, Osborne 23 mi; the center of the 48 states by Lebanon | Smith Center (1,576) | 7,069 |
| Jewell + Mitchell | Beloit and Waconda Lake; Mankato 23 mi | Beloit (3,405) | 8,721 |
| Cloud + Ottawa + Republic (48, 48 km) | US-81 north of Salina: Concordia, Belleville 18 mi, Minneapolis 31 | Concordia (5,103) | 19,433 |
| Ellsworth + Lincoln + Russell (19, 29, 48 km) | I-70 and the Union Pacific from Russell to Ellsworth (35 mi), and the Post Rock country by Wilson Lake (moderately known); Lincoln Center 39 mi | Russell (4,399) | 16,013 |

Station rule: the largest place in places.json, as in Colorado and New Mexico. Close calls for phase 2: Osage City (2,861) against Burlington (2,636, the more central county seat on US-75); Coffeyville (8,830) against Independence (8,579, the county seat, 13 mi from Neodesha); Arkansas City (11,960) against Winfield (11,786, the county seat); Parsons (9,606) against Chanute (8,742); Russell (4,399) against Ellsworth (3,074, more central).

The corridors stay clean chains:
- **I-70 / Union Pacific:** from Kansas City, Douglas, Shawnee, Pottawatomie-Wabaunsee, Riley (the railway at Manhattan), Geary-Morris, Clay-Dickinson, Saline, Ellsworth-Lincoln-Russell, Ellis-Rush, Gove-Trego, Logan-Rawlins-Thomas, Sherman-Wallace-Cheyenne, then Colorado. West of Oakley the railway leaves I-70 for Sharon Springs (moderately known), and both end in the same region.
- **I-35 / Kansas Turnpike:** Wyandotte, Johnson, Anderson-Franklin, Coffey-Osage (Lebo, moderately known), Chase-Lyon, Butler, Sedgwick, Harper-Sumner, then Oklahoma.
- **Southwest Chief / Arkansas valley:** from Kansas City, Douglas, Shawnee, Coffey-Osage, Chase-Lyon, Harvey-Marion, Reno, McPherson-Rice (Sterling), Barton-Stafford, Edwards-Pawnee, Clark-Ford-Gray, Finney-Hamilton-Kearny, then Colorado. The stops (Lawrence, Topeka, Newton, Hutchinson, Dodge City, Garden City) are well known; the towns between them moderately known.
- **US-81 / I-135:** Sedgwick, Harvey-Marion, McPherson-Rice, Saline, Cloud-Ottawa-Republic, then Nebraska.
- **US-54:** Allen-Bourbon (Fort Scott, Iola), Elk-Greenwood-Woodson (Yates Center, Eureka), Butler, Sedgwick, Kingman-Kiowa-Pratt, Clark-Ford-Gray (Bucklin, Minneola), Meade-Seward (the towns moderately known).
- **US-36:** Atchison-Doniphan, Brown-Nemaha, Marshall-Washington, Cloud-Ottawa-Republic, Jewell-Mitchell, Osborne-Smith, Phillips-Rooks, Decatur-Norton, Logan-Rawlins-Thomas, Sherman-Wallace-Cheyenne.
- **US-69:** Johnson, Linn-Miami, Allen-Bourbon, Cherokee-Crawford.

Rejected:
- Miami alone with `["Bourbon", "Linn"]` (Pleasanton is 24 mi from Fort Scott): an exception for a county at a metro's edge, which Colorado (Elbert + Lincoln) and New Mexico (Guadalupe + Torrance) join to the country behind instead.
- `["Franklin", "Miami"]`: 60k, and Paola, Louisburg and Osawatomie (15k between them) lose to Ottawa.
- `["Dickinson", "Geary"]` on I-70: Abilene (21 mi from Junction City) loses its station.
- `["Chase", "Morris"]` as a Flint Hills region (Council Grove–Cottonwood Falls, 21 mi): Emporia then needs Osage or Coffey and every group to the north shifts.
- `["Barber", "Clark", "Comanche"]`: Ashland is 66 mi from Medicine Lodge but 42 from Dodge City (Minneola 22). Jetmore (17 mi from Dodge City) goes to Ness City instead, on US-283.
- `["Chautauqua", "Montgomery"]` (Sedan is 30 mi from Coffeyville): Cowley then needs Elk, and Wilson, Greenwood and Woodson split badly.
- `["Ellis", "Russell"]` on I-70 (25 mi) with `["Ellsworth", "Lincoln"]`: the same count, but Russell loses its station and Rush goes to Ness City.
- `["Lincoln", "Ottawa"]` with `["Ellsworth", "Russell"]` and `["Cloud", "Republic"]`: one more region, and "Lincoln-Ottawa County" reads as Lincoln, Nebraska (the town of Ottawa is in Franklin).
- `["Greeley", "Wallace"]`, `["Greeley", "Hamilton"]` or `["Hamilton", "Stanton"]`: one more region of under 5k each. Syracuse belongs to the Arkansas valley.
- `["Atchison", "Jefferson"]` (US-59) with `["Brown", "Doniphan"]` (US-36) and Nemaha with Jackson: equally good. The list keeps Hiawatha–Sabetha (14 mi) and Atchison–Troy (16 mi) together.

### Alternative (also 52 regions)

Replace `["Allen", "Bourbon"]`, `["Cherokee", "Crawford"]` and `["Labette", "Neosho"]` with `["Bourbon", "Crawford"]` (53,333; Pittsburg, Fort Scott 29 mi on US-69), `["Cherokee", "Labette"]` (39,558; Parsons, Oswego 14 mi, Baxter Springs 36) and `["Allen", "Neosho"]` (28,422; Chanute, Iola 18 mi on US-169).
- Pro: tighter groups (the 39 mi Fort Scott–Iola stretch goes), and Chanute (8,742) keeps a station.
- Con: Fort Scott loses its station to Pittsburg, and Cherokee's mining towns (Columbus 18 mi, Baxter Springs 27 from Pittsburg) go to Parsons.

### Map and data check

1. **The map looks right.** All 105 counties are one piece each and every label is inside its county. County areas add up to 82,218 sq mi, which matches Kansas's total. All 740 places lie inside their tagged county.
2. **Neighbours agree both ways**, within Kansas and with the `ne-` and `co-` regions; none is missing. Corner touches: Cheyenne–Kit Carson-Cheyenne (CO) 1 km, Decatur–Frontier-Furnas (NE) 1 km, Doniphan–Pawnee-Richardson (NE) 3 km (the Missouri River bend). Missouri and Oklahoma have no neighbours yet, as expected.
3. **Short contacts inside Kansas** (the survey jogs where county corners nearly meet): Montgomery–Neosho 0.35 km, Rush–Russell 0.6, Ellis–Osborne 1.0, Rooks–Trego 1.2, Ellis–Ness 1.3, Decatur–Thomas 1.5, Finney–Ness 1.6, and about ten more of 2–3 km (Rawlins–Sherman, Stanton–Stevens, Hamilton–Wichita, Kearny–Scott...). They are real enough, but they make neighbours that only touch at a point (Montgomery–Neosho especially). No merge depends on any of them; the shortest link used is Ellsworth–Russell, 19 km. Sedgwick–Cowley share one point and are rightly not neighbours.
4. **Places:** 626 of the 740 have populations; the 114 CDPs have none. Odd entries: "Greeley County unified government (balance)" (410) is the rest of Greeley County outside Tribune, not a town, so phase 2 should skip it; "Kickapoo Site 1, 2, 5, 6, 7" are CDPs on the Kickapoo reservation (Brown). Herington (2,112) is tagged Morris because its point (38.697, −96.807) lies about 7 mi east of the town, which sits just inside Dickinson at about −96.94 (moderately known); it changes no station, but it matters if Herington becomes a town. "Lincoln Center" is the Census name of Lincoln, Lincoln County's seat.
5. **Names to watch in phase 2:** places named like a county but in another county: Wichita (Sedgwick), Shawnee (Johnson), Ottawa (Franklin), Johnson City (Stanton), Kiowa (Barber), Wilson (Ellsworth), Logan (Phillips), Greeley (Anderson), Linn (Washington), Hamilton (Greenwood), Sedgwick (Harvey), Elk City (Montgomery), Cherokee (Crawford), and smaller ones (Chase, Lane, Allen, Seward). So the town of Ottawa is the Anderson-Franklin station, while Ottawa County is in Concordia's region, and Wichita County is Leoti's, not Wichita's.

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/KS/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` points rounded to 2 decimals, except where noted (Overland Park, Kansas City and Wichita at their downtowns, Herington at the town, and the scenic places that aren't towns).
- **Facts added by hand** (bridges, scenic places, the airport, roads, rivers and railways) are well known unless marked "moderately known". A point marked "approx." is one I gave from memory, within about a mile.
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough (`NR.runtime.geoLevel`). The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain (so Nebraska's and Colorado's places and bridges count too). The helper scripts lived in `/tmp/ks-work/`, outside the game.

### Start

`start: ["ks-johnson", "ks-wyandotte", "ks-linn-miami"]`: Overland Park, Kansas City and Paola. Wyandotte and Linn-Miami both touch Johnson (31 and 39 km).
- **Types:** metro, metro and farm. Johnson and Wyandotte are Kansas City's Kansas side, both metro. Linn-Miami (Paola, Louisburg, Osawatomie, La Cygne) is the farm country at the metro's south edge on US-69 (Colorado's Elbert + Lincoln case).
- **First track:** the only pair of different types is Overland Park–Paola (29 mi crow, 34 mi of track; Kansas City–Paola is 38). It is flat and crosses no river. The pack test laid it, and 13, 12 and 11 passengers arrived in the week (three runs).
- **Considered:** Johnson + Wyandotte + Leavenworth (Kansas City's three Kansas counties) would need Leavenworth typed farm, which it isn't (Fort Leavenworth, Lansing, Basehor). Johnson + Douglas + Linn-Miami would put Lawrence ahead of Kansas City, Kansas.

### Main stations (52)

Each id is unused in every other pack (the checker checks). GBD and GLD were taken (Arizona's Gila Bend, BC's Golden), so Great Bend is GRBD and Goodland GDLD. Airport codes are used where they read well (ICT, TOP, KCK, MHK, HUT, SLN, EMP, PTS, CFV, DDC, GCK, ULS, LBL, HYS); the rest are 4-letter abbreviations.

**Every station is at its region's biggest place** (no exceptions). Close calls from phase 1: Osage City (2,861) over Burlington (2,636, Coffey County's seat, my call as the brief allows: the rule, and Osage County is two-thirds of the region); Coffeyville (8,830) over Independence (8,579); Arkansas City (11,960) over Winfield (11,786); Parsons (9,606) over Chanute (8,742); Russell (4,399) over Ellsworth (3,074). The runners-up are towns.

**Points:** every station is at its Census point except three, moved to downtown:
- **Overland Park:** at its downtown (Santa Fe Drive and 80th Street, 38.98, -94.67). The Census point (38.89, -94.69) is 6.5 mi south, in the middle of the city's long southern limits.
- **Kansas City, Kansas:** at its downtown (Minnesota Avenue and City Hall, 39.11, -94.63), by the mouth of the Kansas River. The Census point (39.12, -94.74) is 6.2 mi west.
- **Wichita:** at downtown (Old Town, 37.69, -97.33), on the east bank of the Arkansas. The Census point (37.69, -97.35) is 0.8 mi west, across the map's river, so lines from Wichita north and east (Andover, Newton, Derby) would have paid for a river bridge they don't need.
- I compared the other cities' points with their downtowns (from memory): Topeka 1.3 mi (the Capitol), Lawrence 1.6, Manhattan 2.1, Salina 1.9, Hutchinson 1.2, Leavenworth 0.8, Andover 1.9, Garden City 1.2, Great Bend 1.9, Coffeyville 2.0, the rest under 1.2. None of these needed moving (Nebraska's bar: about 2 mi).

**Sizes** follow the PACKS.md guide and the neighbours:
- **4** Wichita (524k): Kansas's biggest city, with its own airport, as Omaha (585k), Spokane and Reno.
- **3** Overland Park (Johnson, 610k): Kansas City's suburbs (Overland Park, Olathe, Shawnee, Lenexa), as Colorado's Aurora (655k), Lakewood (583k) and Thornton (520k) beside Denver's 4, and Oregon's Hillsboro (600k). Missouri's Kansas City should be the metro's 4. If the main agent prefers 4 by population, it's a one-number change.
- **2** Topeka (179k), Kansas City (169k), Lawrence (119k), Leavenworth (82k), Manhattan (72k), Andover (Butler, 67k), Hutchinson (Reno, 62k) and Salina (54k; its city of 46,883 is Grand Island's size, and Grand Island is 2).
- **1** the rest (Cherokee-Crawford's 58k is 1: Pittsburg has 20,646, as Kearney is 1 at 50k).

**Types.** 36 stations are farm. Metro (16): Overland Park, Kansas City, Leavenworth, Lawrence, Topeka, Wichita, Andover, Hutchinson, Emporia (Emporia State), Pittsburg (Pittsburg State), Manhattan (Kansas State), Junction City (Fort Riley), Salina, Hays (Fort Hays State), Garden City and Liberal.
- **The west needs metros** so its lines have riders (as Nebraska typed North Platte and Scottsbluff): Hays, Garden City and Liberal, spread across the High Plains.
- **Dodge City is farm** (feedlots and meatpacking), so Garden City–Dodge City, the Southwest Chief's two western stops 48 mi apart, has riders. Garden City is the metro by its 28,145 to Dodge City's 27,793.
- **Andover is metro:** Butler's three biggest towns (Andover, Augusta, Rose Hill) are Wichita's eastern suburbs, as Nebraska types Bellevue. El Dorado, the oil town on the Turnpike, is a farm town.
- **Junction City is metro** (Fort Riley's city of 22,932), with farm Abilene and Wamego on either side of the Manhattan–Junction City pair.
- **Newton, McPherson, Great Bend, Dodge City, Ottawa and Atchison stay farm** (10,000–28,000 people, amid farms, each next to a metro), as Nebraska's Fremont, Hastings and Columbus.

| Station (id) | Region, pop | Type, size | Why |
| --- | --- | --- | --- |
| Overland Park (OPK) | Johnson, 610k | metro 3 | Biggest (197,249). Downtown (above) |
| Kansas City (KCK) | Wyandotte, 169k | metro 2 | Biggest (156,609). Downtown (above) |
| Leavenworth (LEAV) | Leavenworth, 82k | metro 2 | Biggest (37,351). Fort Leavenworth; Kansas City's northwest suburbs |
| Lawrence (LAWR) | Douglas, 119k | metro 2 | Biggest (94,928). The University of Kansas |
| Topeka (TOP) | Shawnee, 179k | metro 2 | The capital (126,610) |
| Paola (PAOL) | Linn-Miami, 44k | farm 1 | Biggest (5,769). US-69 |
| Ottawa (OTWA) | Anderson-Franklin, 34k | farm 1 | Biggest (12,630). I-35 and the BNSF |
| Osage City (OSGC) | Coffey-Osage, 24k | farm 1 | Biggest (2,861). The BNSF from Topeka to Emporia (moderately known) |
| Atchison (ATCH) | Atchison-Doniphan, 24k | farm 1 | Biggest (10,885). The Missouri River town |
| Holton (HLTN) | Jackson-Jefferson, 32k | farm 1 | Biggest (3,399). US-75 |
| Hiawatha (HIAW) | Brown-Nemaha, 20k | farm 1 | Biggest (3,274). US-36 |
| Wamego (WAMG) | Pottawatomie-Wabaunsee, 32k | farm 1 | Biggest (4,849). The Kansas River, US-24, the Union Pacific |
| Wichita (ICT) | Sedgwick, 524k | metro 4, **airport** | Biggest (397,547). Downtown (above). Wichita Eisenhower National Airport |
| Andover (ANDV) | Butler, 67k | metro 2 | Biggest (14,898). Wichita's east side |
| Hutchinson (HUT) | Reno, 62k | metro 2, **scenic** | Biggest (40,022). The Cosmosphere; the Southwest Chief's stop |
| Newton (NWTN) | Harvey-Marion, 46k | farm 1 | Biggest (18,597). The Southwest Chief's stop; US-50, I-135 |
| Emporia (EMP) | Chase-Lyon, 35k | metro 1 | Biggest (24,138). Emporia State; I-35 meets the Kansas Turnpike |
| Wellington (WLTN) | Harper-Sumner, 28k | farm 1 | Biggest (7,706). I-35 and the BNSF south |
| Arkansas City (ARKC) | Chautauqua-Cowley, 38k | farm 1 | Biggest (11,960) |
| Eureka (EURK) | Elk-Greenwood-Woodson, 12k | farm 1 | Biggest (2,330). US-54 |
| Coffeyville (CFV) | Montgomery-Wilson, 40k | farm 1 | Biggest (8,830) |
| Parsons (PRSN) | Labette-Neosho, 36k | farm 1 | Biggest (9,606) |
| Pittsburg (PTS) | Cherokee-Crawford, 58k | metro 1 | Biggest (20,646). Pittsburg State |
| Fort Scott (FTSC) | Allen-Bourbon, 27k | farm 1, **scenic** | Biggest (7,556). Fort Scott National Historic Site, downtown |
| Manhattan (MHK) | Riley, 72k | metro 2 | Biggest (54,109). Kansas State University |
| Junction City (JCTY) | Geary-Morris, 42k | metro 1 | Biggest (22,932). Fort Riley |
| Abilene (ABIL) | Clay-Dickinson, 27k | farm 1, **scenic** | Biggest (6,464). The Eisenhower Presidential Library |
| Marysville (MRYS) | Marshall-Washington, 16k | farm 1 | Biggest (3,440). US-36, US-77 |
| Salina (SLN) | Saline, 54k | metro 2 | Biggest (46,883). I-70 meets I-135 |
| McPherson (MCPH) | McPherson-Rice, 40k | farm 1 | Biggest (14,080) |
| Concordia (CONC) | Cloud-Ottawa-Republic, 19k | farm 1 | Biggest (5,103). US-81 |
| Beloit (BELO) | Jewell-Mitchell, 9k | farm 1 | Biggest (3,405) |
| Smith Center (SMTC) | Osborne-Smith, 7k | farm 1 | Biggest (1,576). US-36, US-281 |
| Russell (RUSL) | Ellsworth-Lincoln-Russell, 16k | farm 1 | Biggest (4,399). I-70 |
| Hays (HYS) | Ellis-Rush, 32k | metro 1 | Biggest (21,116). Fort Hays State |
| Great Bend (GRBD) | Barton-Stafford, 30k | farm 1 | Biggest (14,741) |
| Pratt (PRAT) | Kingman-Kiowa-Pratt, 19k | farm 1 | Biggest (6,598). US-54/400 |
| Medicine Lodge (MEDL) | Barber-Comanche, 6k | farm 1 | Biggest (1,776) |
| Larned (LARN) | Edwards-Pawnee, 9k | farm 1 | Biggest (3,768) |
| Dodge City (DDC) | Clark-Ford-Gray, 42k | farm 1, **scenic** | Biggest (27,793). Boot Hill and Front Street |
| Garden City (GCK) | Finney-Hamilton-Kearny, 45k | metro 1 | Biggest (28,145). Western Kansas's biggest city |
| Ulysses (ULS) | Grant-Haskell-Stanton, 13k | farm 1 | Biggest (5,791) |
| Hugoton (HUGT) | Morton-Stevens, 8k | farm 1 | Biggest (3,752) |
| Liberal (LBL) | Meade-Seward, 26k | metro 1 | Biggest (19,832). The southwest corner's city |
| Scott City (SCTY) | Scott-Greeley-Wichita, 9k | farm 1 | Biggest (4,113) |
| Ness City (NESS) | Hodgeman-Lane-Ness, 6k | farm 1 | Biggest (1,344) |
| Goodland (GDLD) | Sherman-Wallace-Cheyenne, 10k | farm 1 | Biggest (4,465). I-70 by Colorado |
| Colby (COLB) | Logan-Rawlins-Thomas, 13k | farm 1 | Biggest (5,621). I-70 |
| Norton (NRTN) | Decatur-Norton, 8k | farm 1 | Biggest (2,754) |
| Hill City (HILC) | Graham-Sheridan, 5k | farm 1 | Biggest (1,407) |
| WaKeeney (WAKN) | Gove-Trego, 6k | farm 1 | Biggest (1,793). I-70 |
| Phillipsburg (PHLB) | Phillips-Rooks, 10k | farm 1 | Biggest (2,344) |

**Airport: Wichita Eisenhower National Airport only.** It handles about 1.5–1.8 million passengers a year (from memory), over the bar of about 1 million that the other packs use (Nebraska: Eppley only). Kansas City International is in Missouri (Missouri's pack). **Left out:** Manhattan Regional, Topeka's Forbes Field, Salina, Hays, Garden City, Dodge City and Liberal, all far under the bar.

**No ports.** The Missouri carries barges, but Kansas City's river terminals are on the Missouri side.

**Scenic stations:** Hutchinson (the Cosmosphere, the space museum, downtown), Fort Scott (Fort Scott National Historic Site, the restored 1842 fort, downtown), Abilene (the Eisenhower Presidential Library and Museum, in town) and Dodge City (the Boot Hill Museum on Front Street, downtown). Each sight is in its town, so the town carries the flag, as Nebraska does with Nebraska City and South Dakota with Mitchell.

### Towns (88: 79 towns and 9 scenic places)

About 1.7 per region. Every town is inside its region, and the checker gives no spacing warning (the closest pair is Cottonwood Falls–Tallgrass Prairie National Preserve, 4.3 mi). Populations are from `places.json`. Types are farm unless noted.

| Region | Towns |
| --- | --- |
| Johnson | Olathe (141,285, the county seat, metro 2, as Colorado's Arvada); Shawnee (67,313, metro 2) |
| Wyandotte | Bonner Springs (7,820, on the Kansas River and I-70, metro) |
| Leavenworth | Tonganoxie (5,569) |
| Douglas | Eudora (6,413, on the Kansas River toward Kansas City) |
| Shawnee | Silver Lake (1,345) |
| Linn-Miami | Louisburg (4,968, US-69); Pleasanton (1,213, US-69) |
| Anderson-Franklin | Garnett (3,241) |
| Coffey-Osage | Burlington (2,636, Coffey County's seat, US-75 and the Neosho); Carbondale (1,352) |
| Atchison-Doniphan | Troy (964); Wathena (1,250, by Elwood, across the Missouri from St. Joseph) |
| Jackson-Jefferson | Oskaloosa (1,101) |
| Brown-Nemaha | Sabetha (2,543); Seneca (2,136) |
| Pottawatomie-Wabaunsee | St. Marys (2,755); Alma (804, Wabaunsee County's seat) |
| Sedgwick | Derby (25,661, metro 2, as Nebraska's Papillion); Park City (8,347, metro) |
| Butler | El Dorado (12,876, the county seat on the Turnpike); Augusta (9,249, metro) |
| Reno | Buhler (1,320) |
| Harvey-Marion | Hesston (3,498); Hillsboro (2,739) |
| Chase-Lyon | Cottonwood Falls (849); **Tallgrass Prairie National Preserve** (scenic) |
| Harper-Sumner | Anthony (2,101) |
| Chautauqua-Cowley | Winfield (11,786, the county seat); Sedan (1,003) |
| Elk-Greenwood-Woodson | Yates Center (1,354); Howard (573) |
| Montgomery-Wilson | Independence (8,579); Fredonia (2,152) |
| Labette-Neosho | Chanute (8,742); Oswego (1,671) |
| Cherokee-Crawford | Columbus (2,925); Baxter Springs (3,891) |
| Allen-Bourbon | Iola (5,396) |
| Riley | Ogden (1,667, by Fort Riley) |
| Geary-Morris | Council Grove (2,140, on the Santa Fe Trail) |
| Clay-Dickinson | Clay Center (4,191); Herington (2,112; see below) |
| Marshall-Washington | Washington (1,071) |
| Saline | Brookville (245, the Union Pacific's old railroad town west of Salina) |
| McPherson-Rice | Lindsborg (3,781, **scenic**); Lyons (3,611) |
| Cloud-Ottawa-Republic | Belleville (2,002); Minneapolis (1,940) |
| Jewell-Mitchell | Mankato (838); Cawker City (459, **scenic**) |
| Osborne-Smith | Osborne (1,327); **Geographic Center of the U.S.** (scenic) |
| Ellsworth-Lincoln-Russell | Ellsworth (3,074); Lincoln Center (1,166, the Census name of Lincoln, the county seat) |
| Ellis-Rush | Ellis (1,960); La Crosse (1,259) |
| Barton-Stafford | St. John (1,226); **Cheyenne Bottoms** (scenic) |
| Kingman-Kiowa-Pratt | Kingman (3,106); Greensburg (728) |
| Barber-Comanche | Coldwater (685) |
| Edwards-Pawnee | Kinsley (1,456); **Fort Larned** (scenic) |
| Clark-Ford-Gray | Cimarron (1,980); Ashland (785) |
| Finney-Hamilton-Kearny | Lakin (2,209); Syracuse (1,828) |
| Grant-Haskell-Stanton | Johnson City (1,463); Sublette (1,413) |
| Morton-Stevens | Elkhart (1,885) |
| Meade-Seward | Meade (1,505) |
| Scott-Greeley-Wichita | Leoti (1,478); Tribune (772) |
| Hodgeman-Lane-Ness | Dighton (966); Jetmore (770) |
| Sherman-Wallace-Cheyenne | St. Francis (1,271); Sharon Springs (752) |
| Logan-Rawlins-Thomas | Oakley (2,049); Atwood (1,291) |
| Decatur-Norton | Oberlin (1,638) |
| Graham-Sheridan | Hoxie (1,210); **Nicodemus** (scenic) |
| Gove-Trego | Quinter (931); **Monument Rocks** and **Castle Rock** (scenic, desert) |
| Phillips-Rooks | Plainville (1,746); Stockton (1,480) |

- **Herington** (2,112) is placed at the town (38.67, -96.94, approx.), just inside Dickinson County, in Clay-Dickinson. `places.json` tags it Morris because its Census point (38.70, -96.81) lies 7 mi east of the town (phase 1, and the brief).
- **Not used:** "Greeley County unified government (balance)" (the county outside Tribune, not a town). Grandview Plaza (1.7 mi from Junction City), North Newton (2.7 mi from Newton), South Hutchinson (3.6 mi from Hutchinson), Frontenac (3.5 mi from Pittsburg), Elwood (2.4 mi from Wathena), Strong City (2.0 mi from Cottonwood Falls), Lansing (5.5 mi from Leavenworth, left out to keep the Kansas City side uncrowded) and Lenexa (3.5 mi from Shawnee).
- **Names:** Lincoln Center is the official name (the town calls itself Lincoln; the Census name also avoids a mix-up with Lincoln, Nebraska). The towns named like other counties (phase 1, point 5) are placed by their own county: Shawnee in Johnson, Kiowa (not used) in Barber, Ottawa (the Anderson-Franklin station) in Franklin, while Ottawa County is Concordia's.

**Scenic places (9)** (points approx., at the landmark or visitor center):

| Place | Point | Why it is well known |
| --- | --- | --- |
| Tallgrass Prairie National Preserve | 38.43, -96.56 | The National Park Service's preserve of the Flint Hills' tallgrass prairie (Spring Hill Ranch), on K-177 north of Strong City |
| Lindsborg | town point | "Little Sweden": the Swedish-settled town with its Dala horses, Bethany College and the Swedish festivals |
| Cawker City | town point | The World's Largest Ball of Twine (the famous roadside sight), by Waconda Lake |
| Geographic Center of the U.S. | 39.83, -98.58 | The marker for the geographic center of the 48 contiguous states, northwest of Lebanon |
| Cheyenne Bottoms | 38.47, -98.66 | The great inland marsh northeast of Great Bend, where much of North America's shorebird migration stops (a wetland of international importance) |
| Fort Larned | 38.18, -99.22 | Fort Larned National Historic Site, the best-preserved Santa Fe Trail fort, 6 mi west of Larned |
| Nicodemus | 39.39, -99.62 | Nicodemus National Historic Site, the town Black homesteaders founded in 1877 |
| Monument Rocks | 38.79, -100.76 | The chalk spires (a National Natural Landmark) on the Smoky Hill plains south of Oakley. Desert, as Nebraska's Chimney Rock |
| Castle Rock | 38.86, -100.17 | The chalk butte south of Quinter, the other well-known landmark of the Smoky Hill chalk. Desert, as Monument Rocks |

**Considered and left out:** the Big Well (Greensburg), the Garden of Eden (Lucas), the Oz Museum (Wamego), Big Brutus (West Mineral), the Hollenberg Pony Express Station (Hanover) and Strataca, the salt mine museum (Hutchinson): less well known. Quivira National Wildlife Refuge (Cheyenne Bottoms stands for the wetlands), Brown v. Board of Education National Historic Site (in Topeka, under 4 mi from the station), Konza Prairie (the Tallgrass Preserve stands for the Flint Hills), Little Jerusalem Badlands (opened 2019, Logan County) and Mount Sunflower (Kansas's highest point, a ranch marker).

### Passes (0) and bridges (50)

**No passes.** Kansas's map has no mountain cells: 10,163 flat cells and one hill cell (on the Nebraska line by Kirwin Reservoir). No link needs a pass.

**Rivers on the map:** the Missouri (the Missouri line), the Kansas (Junction City to Kansas City), the Big Blue (Tuttle Creek Lake to Manhattan, and Marysville north), the Republican, the Solomon (Waconda Lake to Solomon), the Smoky Hill (see the warning below), the Arkansas, the Neosho (from John Redmond Reservoir; a short piece above Emporia), the Verdigris, the Cimarron and pieces of the Beaver. There is no Saline, Walnut, Little Arkansas, Marais des Cygnes or Pawnee. **Lakes:** Tuttle Creek, Milford, Perry, Clinton, Melvern, Marion, John Redmond, Cheney, El Dorado, Waconda and Kirwin.

**A game bug the checker shows (for the main agent): the Smoky Hill from Gove County to Junction City is missing in the game.** `terrain.js` has the Smoky Hill in two pieces that start at the same point (-100.872, 38.803): 5 points west to Wallace County and 75 points east to Junction City. Both get the id `Smoky Hill@-100.872,38.803`, and `js/packs.js` keeps one copy of each id (`unique`), so the long piece is dropped: it isn't drawn, and lines crossing it pay nothing. The same id rule also drops differing copies of rivers shared between states (Kansas's longer Beaver loses to Nebraska's; also Yellowstone, Red, Missouri, Colorado and others across the West and Canada). I listed the real Smoky Hill bridges (Junction City, Abilene, Salina, Lindsborg, Ellsworth, and US-83 north of Scott City) so they work once it loads. Until then the checker warns that four of them are more than 3 mi from a river, and their bridge marks show on dry land in the screenshots. A fix: give rivers a unique id (for example add the point count or the last point), or merge copies by id keeping the longest.

**Bridges (50).** Each sits on the map's river where it passes the town, near the town's real crossing as far as I know (exceptions noted). "Uses" lists the shorter links (up to 45 mi) whose river crossing is within 2 mi of the bridge, in Gentle, with the Smoky Hill loaded (simulated).

| Bridge | Point | Source | Uses |
| --- | --- | --- | --- |
| Fairfax Bridge (US-69, Kansas City) | 39.15, -94.61 | US-69 over the Missouri from Kansas City, Kansas (Fairfax) to Riverside, Missouri (moderately known) | For Missouri later |
| Centennial Bridge (Leavenworth) | 39.32, -94.90 | K-92 over the Missouri at Leavenworth, to Platte County, Missouri (moderately known) | For Missouri later |
| Amelia Earhart Memorial Bridge (US-59, Atchison) | 39.56, -95.11 | US-59 over the Missouri at Atchison (opened 2012) | For Missouri later |
| Pony Express Bridge (US-36, Elwood–St. Joseph) | 39.75, -94.87 | US-36 over the Missouri between Elwood and St. Joseph, Missouri | For Missouri later |
| Kansas River bridges (I-70, Kansas City, Kansas) | 39.10, -94.62 | I-70 (the Lewis and Clark Viaduct) and the downtown bridges near the Kansas River's mouth | Overland Park–Kansas City, Kansas City–Louisburg |
| Kansas River bridge (18th Street Expressway, Kansas City, Kansas) | 39.09, -94.66 | US-69's 18th Street Expressway bridge (moderately known) | Kansas City–Shawnee, –Olathe, –Paola, –Eudora |
| Kansas River bridge (I-635, Kansas City, Kansas) | 39.09, -94.72 | I-635 crosses the Kansas River in Kansas City, Kansas (moderately known) | Overland Park–Leavenworth, Kansas City–Lawrence |
| Kansas River bridge (K-7, Bonner Springs) | 39.05, -94.87 | K-7 crosses the Kansas River at Bonner Springs (moderately known) | 9, among them Overland Park–Tonganoxie, Leavenworth–Olathe, Bonner Springs–Olathe and –Paola |
| Kansas River bridges (Lawrence) | 38.98, -95.22 | Massachusetts Street (US-40/59) from downtown to North Lawrence | Leavenworth–Lawrence, Lawrence–Bonner Springs, –Tonganoxie |
| Kansas River bridges (Topeka) | 39.08, -95.69 | Kansas Avenue and Topeka Boulevard, from downtown to North Topeka | Topeka–Holton, Holton–Carbondale |
| Kansas River bridge (K-99, Wamego) | 39.20, -96.30 | K-99 south from Wamego to I-70 (moderately known) | Topeka–Wamego and 5 more |
| Kansas River bridge (K-177, Manhattan) | 39.17, -96.56 | K-177 south from downtown Manhattan to I-70 | Manhattan–Silver Lake, –Alma |
| Republican River bridges (Junction City) | 39.08, -96.84 | The Republican at Junction City, just above its meeting with the Smoky Hill (the roads north, US-77 and K-18, certainly cross it; moderately known) | Manhattan–Abilene |
| Big Blue River bridge (US-24, Manhattan) | 39.20, -96.53 | US-24 east from Manhattan over the Big Blue | Wamego–Manhattan, Manhattan–St. Marys |
| Big Blue River bridges (Marysville: US-36 and US-77) | 39.86, -96.65 | US-36 and US-77 cross the Big Blue at Marysville | Marysville–Beatrice, –Fairbury, –Homestead, –Washington |
| Republican River bridge (US-24, Clay Center) | 39.38, -97.14 | US-24 at Clay Center, on the Republican (moderately known) | Junction City–, Abilene–, Minneapolis–Clay Center |
| Republican River bridge (US-81, Concordia) | 39.59, -97.65 | US-81 north from Concordia | Concordia–Superior, –Hebron, –Belleville |
| Republican River bridge (US-36, Scandia) | 39.80, -97.80 | US-36 crosses the Republican at Scandia, west of Belleville (moderately known) | Belleville–Mankato |
| Big Blue River bridge (US-77, Blue Rapids) | 39.70, -96.68 | US-77 at Blue Rapids, on the Big Blue (moderately known) | Junction City–Marysville (57 mi, US-77) |
| Solomon River bridge (US-24, Beloit) | 39.45, -98.11 | Beloit sits on the Solomon | Beloit–Lincoln Center |
| Solomon River bridge (US-81, Minneapolis) | 39.10, -97.71 | US-81 crosses the Solomon at Minneapolis (moderately known); on the map's river 1.4 mi south of the town | Salina–Minneapolis and 4 more |
| Smoky Hill River bridges (Junction City) | 39.04, -96.81 | The Smoky Hill at Junction City's east side (the roads east certainly cross it; moderately known) | Wamego–, St. Marys–, Alma–, Ogden–Junction City |
| Smoky Hill River bridge (US-83, north of Scott City) | 38.80, -100.87 | US-83 crosses the Smoky Hill between Scott City and Oakley | Scott City–Oakley |
| Smoky Hill River bridge (K-15, Abilene) | 38.89, -97.21 | K-15 south from Abilene (moderately known) | Abilene–Hillsboro, –Herington |
| Smoky Hill River bridges (Salina) | 38.84, -97.60 | The Smoky Hill winds through Salina | Junction City–, Abilene–Salina, Abilene–Brookville |
| Smoky Hill River bridge (Lindsborg) | 38.56, -97.67 | The Smoky Hill passes Lindsborg's south side (moderately known) | Salina–McPherson and 5 more |
| Smoky Hill River bridge (Ellsworth) | 38.71, -98.23 | The roads south from Ellsworth cross the Smoky Hill (moderately known) | Great Bend–, Lyons–Ellsworth, Ellsworth–Cheyenne Bottoms |
| Arkansas River bridges (Wichita) | 37.69, -97.34 | Douglas Avenue and the downtown bridges, by the Keeper of the Plains | Wichita–Hutchinson, –Wellington, –Kingman, Park City–Wellington |
| Arkansas River bridge (Main Street, Hutchinson) | 38.03, -97.93 | Main Street (K-61) from downtown to South Hutchinson | Hutchinson–Kingman |
| Arkansas River bridge (US-281, Great Bend) | 38.35, -98.78 | US-281 south from Great Bend | Great Bend–St. John |
| Arkansas River bridge (Larned) | 38.17, -99.10 | The road south from Larned (the town is on the river's north bank; moderately known) | Pratt–, St. John–, Greensburg–Larned |
| Arkansas River bridge (US-183, Kinsley) | 37.90, -99.41 | US-183 south from Kinsley to Greensburg | Pratt–Kinsley, Greensburg–Kinsley |
| Arkansas River bridge (2nd Avenue, Dodge City) | 37.75, -100.02 | US-283/US-56 south from downtown Dodge City | Dodge City–Ashland, –Meade |
| Arkansas River bridge (K-23, Cimarron) | 37.80, -100.35 | K-23 south from Cimarron (moderately known) | Dodge City–Cimarron, Cimarron–Sublette, –Meade |
| Arkansas River bridge (US-83, Garden City) | 37.96, -100.87 | US-83 (Main Street) south from downtown Garden City | Garden City–Ulysses, –Sublette |
| Arkansas River bridge (K-25, Lakin) | 37.92, -101.26 | K-25 south from Lakin (moderately known) | Ulysses–, Sublette–Lakin |
| Arkansas River bridge (K-27, Syracuse) | 38.00, -101.80 | K-27 north from Syracuse to Tribune (moderately known) | Syracuse–Leoti, –Tribune |
| Arkansas River bridge (US-166, Arkansas City) | 37.06, -97.07 | US-166 west from Arkansas City over the Arkansas (moderately known) | For Oklahoma later |
| Neosho River bridge (US-75, Burlington) | 38.20, -95.73 | US-75 at Burlington, on the Neosho | Ottawa–, Garnett–, Iola–Burlington |
| Neosho River bridge (US-54, Iola) | 37.92, -95.43 | US-54 west from Iola | Yates Center–, Fredonia–Iola |
| Neosho River bridge (K-39, Chanute) | 37.67, -95.42 | K-39 east from Chanute (moderately known) | Fort Scott–Chanute |
| Neosho River bridge (US-169, Chanute–Humboldt) | 37.72, -95.45 | US-169 between Chanute and Humboldt (Humboldt is on the river's east bank; moderately known) | Garnett–, Iola–Chanute |
| Neosho River bridge (US-400, east of Parsons) | 37.35, -95.12 | The road east from Parsons certainly crosses the Neosho (moderately known) | Parsons–Pittsburg |
| Neosho River bridge (Oswego) | 37.17, -95.09 | Oswego sits on the Neosho (US-59/US-160; moderately known) | Pittsburg–, Columbus–Oswego |
| Verdigris River bridge (US-54, west of Yates Center) | 37.85, -95.97 | US-54 crosses the Verdigris between Yates Center and Eureka (moderately known) | Eureka–Yates Center |
| Verdigris River bridge (US-160, Independence) | 37.22, -95.69 | US-160 east from Independence | Parsons–, Oswego–Independence |
| Verdigris River bridge (US-166, Coffeyville) | 37.04, -95.61 | US-166/US-169 at Coffeyville | Coffeyville–Parsons, –Oswego |
| Cimarron River bridge (US-54, Arkalon) | 37.14, -100.74 | US-54 over the Cimarron at Arkalon Park, northeast of Liberal (moderately known) | Liberal–Meade |
| Cimarron River bridge (US-83, north of Liberal) | 37.23, -100.90 | US-83 crosses the Cimarron between Liberal and Sublette | Liberal–Sublette |
| Cimarron River bridge (K-25, Hugoton–Ulysses) | 37.41, -101.34 | K-25 crosses the Cimarron between Hugoton and Ulysses (moderately known) | Ulysses–Hugoton |

**Map quirks (not real crossings, so no bridge; rivers cost, they never block):**
- **The Kansas River between Topeka and Manhattan** bulges north on the map (to 39.23 near Belvue, and 39.21 east of Manhattan), across US-24 and the Union Pacific. So St. Marys–Wamego pays two new river bridges and Manhattan–Wamego one, though the real roads stay on the north bank. Silver Lake sits on the map's river, so its lines south and west pay one.
- **Kansas City to Leavenworth** clips the Missouri three times (the straight line runs into Missouri at Parkville); the real road (K-5, K-7) stays in Kansas.
- **Lawrence to Overland Park** crosses the map's Kansas River twice near Eudora; K-10 stays on the south bank.
- **The Arkansas** wiggles across the Southwest Chief's line at Holcomb and between Lakin and Syracuse, and across the line from Dodge City to Cimarron. The real line stays on the north bank.
- **Derby to Wellington** and Arkansas City to Derby cross the Arkansas south of Wichita (the real I-35 and US-77 cross it near Mulvane and Oxford).

### How the map plays

**Counts.** Of the 3,355 pairs of places (at least one in Kansas) within 100 mi of each other:
- **Gentle:** none are blocked.
- **Tough:** 18 are blocked, all by reservoirs, 16 of them over 60 mi. Seven cross Marion Reservoir (Hillsboro to Wamego, St. Marys, Silver Lake and Alma; Hesston–Wamego; Council Grove to Hutchinson and Buhler). Five cross Tuttle Creek Lake (Manhattan to Marysville, Beatrice and Homestead; Marysville–Tallgrass Prairie; Fairbury–Alma). Three cross Waconda Lake (Cawker City to Ellsworth and Lyons; Salina–Smith Center), two Cheney Reservoir (McPherson–Anthony, Pratt–Park City) and one Harlan County Reservoir in Nebraska (Hill City–Minden).
- With links up to 100 mi every Kansas place is in one network in both modes. The fewest open links any place has is 12 (Elkhart, in the corner by Colorado and Oklahoma).

**Main stations.** Every main station reaches every neighbouring main station directly, in both modes, with one exception. **Manhattan–Marysville** (45 mi; Riley and Marshall-Washington touch) is blocked in Tough: the line runs up Tuttle Creek Lake and crosses it twice, the second time 3 mi wide, about 20 mi north of the dam, with no real crossing within 3 mi. The real roads go around it too: US-77 by Junction City and Blue Rapids (Junction City–Marysville is open in both modes), or over Tuttle Creek Dam and the Randolph bridge (moderately known). Manhattan reaches Wamego, Junction City and Abilene. The fewest neighbouring main stations is 2: Kansas City (Overland Park, Leavenworth) and Pittsburg (Fort Scott, Parsons), with Missouri not yet in the game. Others in other states reached directly (all open in both modes):
- **Nebraska:** Falls City (from Atchison, Hiawatha and Marysville); Beatrice (from Marysville); Geneva (from Concordia); Superior (from Concordia, Beloit, Smith Center and Phillipsburg); Holdrege (from Phillipsburg); Cambridge (from Norton); McCook (from Goodland, Colby and Norton).
- **Colorado:** Burlington (from Goodland and Scott City); Fort Morgan (from Goodland); Lamar (from Garden City, Ulysses, Hugoton and Scott City).

**The real routes, as chains,** are open in both modes (the longest link in brackets):
- **I-70:** Kansas City–Bonner Springs–Lawrence–Topeka–Wamego–Manhattan–Ogden–Junction City–Abilene–Salina–Brookville–Russell–Hays–Ellis–WaKeeney–Quinter–Oakley–Colby–Goodland, then Burlington and Limon, Colorado (54 mi in Kansas, Brookville–Russell, where the towns between are small; Burlington–Limon is 76).
- **The Union Pacific (the Kansas Pacific line):** the same to Salina, then Brookville–Ellsworth–Russell–Hays–Ellis–WaKeeney–Quinter–Oakley–Sharon Springs, then Cheyenne Wells, Colorado (51 mi).
- **I-35 and the Kansas Turnpike:** Kansas City–Shawnee–Olathe–Ottawa–Burlington–Emporia–Cottonwood Falls–El Dorado–Andover–Wichita–Derby–Wellington (42 mi). Burlington stands for Lebo and Cottonwood Falls for the Turnpike's Chase County stretch.
- **The Southwest Chief (BNSF):** Kansas City–Lawrence–Topeka–Carbondale–Osage City–Emporia–Cottonwood Falls–Hillsboro (for Florence and Peabody)–Newton–Hutchinson–Lyons (for Sterling)–Great Bend–Larned–Kinsley–Dodge City–Cimarron–Garden City–Lakin–Syracuse, then Lamar and La Junta, Colorado (36 mi in Kansas, Cottonwood Falls–Hillsboro; Syracuse–Lamar 45, Lamar–La Junta 52).
- **US-81 / I-135:** Wichita–Park City–Newton–Hesston–McPherson–Lindsborg–Salina–Minneapolis–Concordia–Belleville, then Hebron, Nebraska (31 mi).
- **US-77:** Arkansas City–Winfield–Augusta–El Dorado–Hillsboro–Herington–Junction City–Marysville, then Beatrice, Nebraska (57 mi, Junction City–Marysville).
- **US-75:** Topeka–Holton–Sabetha, then Falls City, Nebraska (31 mi).
- **US-83:** Liberal–Sublette–Garden City–Scott City–Oakley–Colby–Oberlin, then McCook, Nebraska (44 mi).
- **US-54:** Fort Scott–Iola–Yates Center–Eureka–El Dorado–Augusta–Andover–Wichita–Kingman–Pratt–Greensburg–Meade–Liberal (62 mi, Greensburg–Meade).
- **US-69:** Overland Park–Louisburg–Paola–Pleasanton–Fort Scott–Pittsburg–Columbus–Baxter Springs (29 mi).
- **US-36:** Wathena–Troy–Hiawatha–Sabetha–Seneca–Marysville–Washington–Belleville–Mankato–Smith Center–Phillipsburg–Norton–Oberlin–Atwood–St. Francis (40 mi).
- **US-24:** Topeka–Silver Lake–St. Marys–Wamego–Manhattan–Clay Center–Beloit–Cawker City–Osborne–Stockton–Hill City–Hoxie–Colby (53 mi).
- **The Missouri towns:** Kansas City–Leavenworth–Atchison–Troy–Wathena (21 mi).
- **Southeast Kansas:** Ottawa–Garnett–Iola–Chanute–Parsons–Oswego (26 mi) and Arkansas City–Sedan–Coffeyville–Independence–Parsons–Pittsburg (48 mi).

**Neighbours.** Nothing in this pack blocks a line between two other states' places: Kansas's lakes are all inside Kansas, and its bridges only open lines. The four Missouri bridges wait for Missouri.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Kansas City, Topeka & Lawrence | `east` | Overland Park, Kansas City, Leavenworth, Lawrence, Topeka, Paola, Ottawa, Osage City, Atchison, Holton, Hiawatha, Wamego | 50 passengers; own 5 counties; 10 crates of produce |
| Wichita, the Flint Hills & the Southeast | `south` | Wichita, Andover, Hutchinson, Newton, Emporia, Wellington, Arkansas City, Eureka, Coffeyville, Parsons, Pittsburg, Fort Scott | 140 passengers; connect OPK–ICT (Kansas City to Wichita, as I-35 and the Turnpike run by Ottawa and Emporia; open in both modes); own 12 counties |
| Manhattan, Salina & the Smoky Hills | `central` | Manhattan, Junction City, Abilene, Marysville, Salina, McPherson, Concordia, Beloit, Smith Center, Russell, Hays, Great Bend | 280 passengers; connect TOP–SLN (up the Kansas River and the Smoky Hill by Wamego, Manhattan and Junction City; open in both modes); one high-speed train |
| Dodge City, Garden City & the High Plains | `west` | Pratt, Medicine Lodge, Larned, Dodge City, Garden City, Ulysses, Hugoton, Liberal, Scott City, Ness City, Goodland, Colby, Norton, Hill City, WaKeeney, Phillipsburg | 450 passengers; connect KCK–GDLD (across the state on I-70; open in both modes); own 25 counties |

- **Targets** follow Nebraska's, South Dakota's and North Dakota's four levels.
- **Areas join up:** each level's regions touch the levels before it. Chase-Lyon touches Coffey-Osage and Pottawatomie-Wabaunsee, and Allen-Bourbon touches Linn-Miami; Riley touches Pottawatomie-Wabaunsee, and Clay-Dickinson and McPherson-Rice touch the south; Kingman-Kiowa-Pratt touches Sedgwick and Reno, and Phillips-Rooks touches Osborne-Smith and Ellis-Rush.
- **No trucks goal:** Kansas's only desert places are Monument Rocks and Castle Rock, so a trucks goal would be slow. Its last level counts counties instead, as Nebraska's does.
- **No container goal:** Kansas has no port.

### Biomes

**None listed** (the pack keeps an empty `biomes` with the reasons in a comment):
- Kansas is farmland and prairie: the Flint Hills' tallgrass (the largest tallgrass prairie left), the wheat and grazing land of the plains, the High Plains' short-grass and irrigated circles, and the Cimarron National Grassland's sand sage. All of it reads as "farmland and grassland", as Nebraska's Sandhills and Colorado's eastern plains (Cheyenne-Kit Carson, Baca-Kiowa-Prowers) across the lines.
- **No `dry`:** Kansas has no desert or sagebrush steppe; the southwest's sand-sage prairie is grassland, and Colorado and Nebraska leave the regions across the line unlisted.
- **No `wooded`/`forest`:** the oak-hickory woods of the far east (the Ozarks' edge in Cherokee County, the Missouri's bluffs, the Chautauqua Hills) are thin, and the map has no hills to put trees on (one hill cell, by Kirwin). Missouri may list its Ozarks later.

### Checks

- **`node tools/check-pack.js KS`:** `KS: passed (52 stations, 88 towns, 0 city maps, 0 passes, 50 bridges), 0 errors, 4 warnings`.
  - The four warnings are the Smoky Hill bridges at Abilene, Salina, Lindsborg and Ellsworth: "more than 3 miles from any river, lake, bay or coast on the map". They are on `terrain.js`'s Smoky Hill, which the game drops (the bug above). The Junction City and Scott City Smoky Hill bridges don't warn because other rivers are within 3 mi.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js KS`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is OPK, KCK and PAOL. The test laid Overland Park–Paola (34 mi, 1 train) and bought Allen-Bourbon (FTSC). 11–13 passengers arrived in the week (three runs). Nebraska's first track (Omaha–Blair, 25 mi) got 21–22; Paola is 34 mi of track away, the nearest farm station to Overland Park.
  - Levels mode starts at level 1.
- **Screenshots** (`test-out/KS/`: arcade light, classic light, levels):
  - Kansas City sits at the Kansas River's mouth on the Missouri, with Overland Park south of it and Paola down US-69; Leavenworth and Lawrence are next door. The Kansas River's bridges show at Bonner Springs, Lawrence, Topeka and Wamego.
  - The Arkansas crosses the south with its reservoirs (Cheney, El Dorado, Marion) and the Republican, Solomon and Kansas rivers cross the north. The Smoky Hill is missing between Gove County and Junction City (the bug above), so its bridge marks at Salina, Abilene, Lindsborg, Ellsworth and Junction City sit on dry land.

### For the main agent

1. **The Smoky Hill bug** (above): one of its two pieces in `terrain.js` is dropped by `unique` in `js/packs.js` because both share an id. The same rule drops differing copies of rivers shared between states. Kansas's Smoky Hill bridges are already listed for when it loads.
2. **Airports:** Wichita Eisenhower National only.
3. **Points moved to downtown:** Overland Park (6.5 mi north of its Census point), Kansas City, Kansas (6.2 mi east) and Wichita (0.8 mi east, across the map's Arkansas). Herington is placed at the town, in Dickinson.
4. **Sizes:** Overland Park (Johnson, 610k) is 3 as a suburb (as Aurora and Lakewood), Wichita (524k) 4. Swap if you prefer population order.
5. **Four Missouri River bridges** are listed for Missouri to match: the Fairfax Bridge (Kansas City), the Centennial Bridge (Leavenworth), the Amelia Earhart Memorial Bridge (Atchison) and the Pony Express Bridge (Elwood–St. Joseph). The US-166 bridge at Arkansas City waits for Oklahoma.
