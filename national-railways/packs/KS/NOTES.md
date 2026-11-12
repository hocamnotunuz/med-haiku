# Kansas (KS) pack notes

## Region merges (phase 1)

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
