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
