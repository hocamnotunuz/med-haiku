# Iowa (IA) pack notes

## Region merges (phase 1)

Populations come from `packs/IA/raw/counties.json` and `packs/IA/raw/places.json` (U.S. Census Bureau; the source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 3,190,427). Every group is connected through `neighbors`. I measured the shared border lengths on the rings in `map.js` (given in km below). River facts marked "terrain data" are traced from the Natural Earth rivers in `packs/IA/terrain.js` (point-in-county). Town-to-county facts come from places.json. Roads, railways and rivers named here are well known unless marked "(moderately known)".

### Recommended (99 → 53 regions)

```
merge: [["Lyon", "Sioux"], ["O'Brien", "Osceola"], ["Cherokee", "Plymouth"], ["Clay", "Dickinson"], ["Emmet", "Palo Alto"], ["Humboldt", "Kossuth"], ["Buena Vista", "Pocahontas"], ["Calhoun", "Webster"], ["Harrison", "Monona"], ["Crawford", "Ida"], ["Carroll", "Sac"], ["Audubon", "Shelby"], ["Boone", "Greene"], ["Adair", "Guthrie", "Madison"], ["Cass", "Montgomery"], ["Fremont", "Mills"], ["Page", "Taylor"], ["Adams", "Ringgold", "Union"], ["Clarke", "Decatur", "Lucas"], ["Appanoose", "Monroe", "Wayne"], ["Davis", "Wapello"], ["Lee", "Van Buren"], ["Des Moines", "Henry"], ["Jefferson", "Washington"], ["Iowa", "Keokuk"], ["Mahaska", "Marion"], ["Jasper", "Poweshiek"], ["Grundy", "Marshall"], ["Benton", "Tama"], ["Cerro Gordo", "Worth"], ["Hancock", "Winnebago"], ["Franklin", "Hardin"], ["Hamilton", "Wright"], ["Floyd", "Mitchell"], ["Chickasaw", "Howard"], ["Bremer", "Butler"], ["Allamakee", "Winneshiek"], ["Clayton", "Fayette"], ["Buchanan", "Delaware"], ["Cedar", "Jones"], ["Clinton", "Jackson"], ["Louisa", "Muscatine"]]
names: { "Des Moines-Henry": "Henry-Des Moines County", "Fremont-Mills": "Mills-Fremont County" }
```

No `bridges` or `join`: Iowa has no island or cut-off county, and every pair touches on land.

Names:
- "Des Moines-Henry County" would read as the city of Des Moines (Polk County), the precedent being Idaho's "Valley-Boise County". "Henry-Des Moines County" puts the county name second.
- "Fremont-Mills County" would read as Fremont, Nebraska, a main station (FRMT) about 60 km across the Missouri. "Mills-Fremont County" also puts first the county that holds the station (Glenwood).
- The other automatic names are kept. "Iowa-Keokuk County" cannot avoid both names: Keokuk is also a city in Lee County. Reversing it would read as "Keokuk, Iowa", so it is better as it is.

Alone, 50k and over (11): **Polk** (Des Moines 214,124), **Linn** (Cedar Rapids 137,728), **Scott** (Davenport 101,727), **Johnson** (Iowa City 74,825), **Black Hawk** (Waterloo 67,319), **Woodbury** (Sioux City 85,784), **Dallas** (Waukee 23,961), **Dubuque** (Dubuque 59,677), **Story** (Ames 66,428), **Pottawattamie** (Council Bluffs 62,792), **Warren** (Indianola 15,834).

There are no exceptions under 50k. All 88 small counties are merged, into 38 pairs and 4 triples. Iowa's small counties are mostly 10k to 25k people, each around its own seat town, so a pair usually gives a fair region. Triples are used only in the far south, where counties have 4k to 12k people.

| Group (shared border) | Why | Main station | Population |
| --- | --- | --- | --- |
| Lyon + Sioux (56 km) | The northwest corner on the Big Sioux (terrain data). The Rock River runs from Rock Rapids by Doon to Rock Valley (moderately known). Sioux Center, Orange City and Hull are the Dutch towns at its heart | Sioux Center (8,238) | 47,799 |
| O'Brien + Osceola (38) | Sheldon and Sibley on IA-60, the four-lane from Le Mars to Worthington, Minnesota (moderately known) | Sheldon (5,511) | 20,372 |
| Cherokee + Plymouth (39) | Cherokee on the Little Sioux (terrain data) and Le Mars. The old Illinois Central (now CN) runs from Sioux City by Le Mars, Remsen and Marcus to Cherokee (moderately known) | Le Mars (10,578) | 37,356 |
| Clay + Dickinson (38) | The Iowa Great Lakes (Spirit Lake, Okoboji, Arnolds Park, Milford) and their market town Spencer, joined by US-71 (moderately known). The Little Sioux flows from Dickinson into Clay (terrain data) | Spencer (11,322) | 34,083 |
| Emmet + Palo Alto (38) | The Des Moines River's west fork from Estherville to Emmetsburg (terrain data) | Estherville (5,900) | 18,387 |
| Humboldt + Kossuth (39) | US-169 from Algona south to Humboldt and Fort Dodge. The east fork of the Des Moines meets the west fork in Humboldt County (both moderately known) | Algona (5,487) | 24,425 |
| Buena Vista + Pocahontas (39) | IA-7 and the old Illinois Central run east from Storm Lake by Newell and Fonda toward Fort Dodge (moderately known) | Storm Lake (11,263) | 27,900 |
| Calhoun + Webster (43) | Fort Dodge on the Des Moines (terrain data). US-20 runs west across Calhoun by Rockwell City; Manson and Lake City are also in Calhoun (route moderately known) | Fort Dodge (24,870) | 46,933 |
| Harrison + Monona (39) | The Loess Hills and I-29 along the Missouri (terrain data), from Missouri Valley to Onawa, plus the Little Sioux's lower course (terrain data). Missouri Valley (2,683; I-29, US-30 and the UP) is nearly as big, a phase 2 choice | Onawa (2,910) | 23,335 |
| Crawford + Ida (29) | Denison is on US-30 and the Union Pacific. US-59 runs north from it through Ida County (moderately known) | Denison (8,367) | 23,522 |
| Carroll + Sac (19) | US-71 from Carroll by Auburn to Sac City (moderately known). Carroll is on US-30 and the UP | Carroll (10,319) | 30,581 |
| Audubon + Shelby (44) | Harlan, and the Danish villages Elk Horn (Shelby) and Kimballton (Audubon) (moderately known) | Harlan (4,896) | 17,436 |
| Boone + Greene (38) | US-30 and the Union Pacific from Boone by Ogden and Grand Junction to Jefferson. The Des Moines River is at Boone (terrain data) | Boone (12,453) | 35,473 |
| Adair + Guthrie + Madison (38, 39) | I-80 west of Des Moines runs right along the Adair–Guthrie line (Adair, Casey, Menlo, Stuart; places data), then by Earlham (Madison). The group also holds Lake Panorama, Winterset with Madison County's covered bridges, and IA-92 from Winterset to Greenfield (moderately known) | Winterset (5,355) | 34,664 |
| Cass + Montgomery (19) | The East Nishnabotna from Atlantic to Red Oak, and US-71 south from Atlantic to Villisca (both moderately known). The BNSF passes Villisca and Red Oak | Atlantic (6,797) | 23,463 |
| Fremont + Mills (36) | The Loess Hills, I-29 and the Missouri (terrain data) south of Council Bluffs: Glenwood, Pacific Junction (the BNSF to Nebraska), Tabor and Hamburg | Glenwood (5,073) | 21,083 |
| Page + Taylor (37) | Clarinda and Shenandoah, then Bedford, along IA-2 (moderately known) | Clarinda (5,369) | 21,100 |
| Adams + Ringgold + Union (29, 38) | Creston, the Zephyr stop. US-34 and the BNSF run west to Corning, and US-169 south to Mount Ayr (moderately known). The Grand River flows from Union into Ringgold (terrain data) | Creston (7,542) | 20,509 |
| Clarke + Decatur + Lucas (39, 29) | Osceola, where I-35 (south to Leon and Lamoni) meets the BNSF and US-34 (east to Chariton). Osceola is the Zephyr stop | Osceola (5,412) | 26,027 |
| Appanoose + Monroe + Wayne (39, 35) | Centerville and Rathbun Lake (terrain data). IA-5 comes from Albia by Moravia, and IA-2 from Corydon (moderately known) | Centerville (5,422) | 26,388 |
| Davis + Wapello (39) | Ottumwa on the Des Moines River (terrain data), with US-63 south to Bloomfield (moderately known) | Ottumwa (25,543) | 44,545 |
| Lee + Van Buren (24) | The lower Des Moines River from Keosauqua and Bonaparte to Keokuk (terrain data: Van Buren, then Lee). Fort Madison is Iowa's only Southwest Chief stop. Keokuk (9,901) is nearly as big | Fort Madison (10,330) | 40,765 |
| Des Moines + Henry (32) | US-34 and the BNSF, with two Zephyr stops: Burlington and Mount Pleasant | Burlington (23,988) | 59,392 |
| Jefferson + Washington (19) | IA-1 from Fairfield to Washington and Kalona (moderately known). Fairfield is on US-34 and the BNSF | Fairfield (9,423) | 38,231 |
| Iowa + Keokuk (29) | The farm country south of I-80 between Grinnell and Iowa City: Williamsburg, Marengo and the Amana Colonies, then North English, Sigourney and Keota. The Iowa River passes Marengo (terrain data) | Williamsburg (3,351) | 26,691 |
| Mahaska + Marion (39) | Lake Red Rock and the Des Moines River (terrain data), with IA-163 from Pella to Oskaloosa (moderately known). Pella (10,459) is nearly as big | Oskaloosa (11,547) | 55,608 |
| Jasper + Poweshiek (40) | I-80 from Newton by Colfax to Grinnell and Brooklyn, with the Iowa Interstate (the old Rock Island) through both (railway moderately known) | Newton (15,756) | 56,464 |
| Grundy + Marshall (19) | Marshalltown on the Iowa River (terrain data) and US-30, with IA-14 north to Grundy Center (moderately known) | Marshalltown (27,584) | 52,432 |
| Benton + Tama (48) | US-30 and the Union Pacific from Tama and Toledo to Belle Plaine. Vinton is on the Cedar, and the Iowa River crosses Tama (terrain data). I-380 crosses Benton by Urbana | Vinton (4,936) | 42,717 |
| Cerro Gordo + Worth (38) | I-35 from Clear Lake and Mason City north to Northwood | Mason City (27,340) | 50,574 |
| Hancock + Winnebago (38) | US-69 from Garner to Forest City, Winnebago Industries' town (road moderately known) | Forest City (4,275) | 21,472 |
| Franklin + Hardin (39) | The Iowa River from Franklin into Hardin at Iowa Falls (terrain data), plus US-65 from Iowa Falls to Hampton (moderately known) | Iowa Falls (5,103) | 26,898 |
| Hamilton + Wright (38) | The Boone River from Eagle Grove to Webster City. I-35 crosses both counties (both moderately known) | Webster City (7,828) | 27,979 |
| Floyd + Mitchell (38) | The Cedar from Mitchell into Floyd (terrain data): St. Ansgar, Osage, Charles City. Also US-218, the Avenue of the Saints (moderately known) | Charles City (7,400) | 26,208 |
| Chickasaw + Howard (38) | The upper Wapsipinicon from Howard into Chickasaw (terrain data): Cresco, Elma, New Hampton | Cresco (3,892) | 21,476 |
| Bremer + Butler (29) | Waverly on the Cedar (terrain data), with Shell Rock, Clarksville and Parkersburg to its west | Waverly (10,395) | 39,325 |
| Allamakee + Winneshiek (46) | The Driftless hills of the northeast corner and the Upper Iowa River at Decorah. Waukon, Postville, and Lansing on the Mississippi are in Allamakee | Decorah (7,583) | 34,128 |
| Clayton + Fayette (49) | The Turkey River from Elgin and Clermont to Elkader (moderately known), plus the river towns Guttenberg and McGregor. Oelwein, the old railway town, is the biggest place | Oelwein (5,928) | 36,557 |
| Buchanan + Delaware (39) | US-20 and the old Illinois Central (now CN) from Waterloo by Jesup, Independence and Manchester toward Dubuque (railway moderately known). The Wapsipinicon is at Independence (terrain data) | Independence (6,064) | 38,046 |
| Cedar + Jones (39) | The Wapsipinicon from Anamosa into Cedar County (terrain data). Cedar also holds US-30 and UP towns (Mechanicsville, Clarence, Lowden) and I-80 towns (West Branch, Durant) | Anamosa (5,445) | 39,144 |
| Clinton + Jackson (61) | The Mississippi from Bellevue and Sabula to Clinton (terrain data), with US-61 from DeWitt to Maquoketa (moderately known) | Clinton (24,467) | 65,944 |
| Louisa + Muscatine (34) | The Mississippi below the Quad Cities. The Cedar and the Iowa meet in Louisa (terrain data), and US-61 runs from Muscatine to Wapello (moderately known) | Muscatine (23,799) | 54,070 |

Station rule: the largest place in places.json. Three choices are closer than the others:
- Fort Madison over Keokuk (both in Lee).
- Oskaloosa over Pella.
- Onawa over Missouri Valley.

Two stations sit at the edge of their group:
- **Winterset** in Adair-Guthrie-Madison, about 60 to 70 km from Greenfield and Guthrie Center.
- **Oelwein** in Clayton-Fayette, about 75 km from Guttenberg.

The corridors stay clean chains:
- **I-80:** Pottawattamie, Cass-Montgomery, Adair-Guthrie-Madison, Dallas, Polk, Jasper-Poweshiek, Iowa-Keokuk, Johnson, Cedar-Jones, Scott.
- **I-35:** Missouri, Clarke-Decatur-Lucas, Warren, Polk, Story, Hamilton-Wright, Franklin-Hardin (Alexander, Latimer), Cerro Gordo-Worth, then Minnesota.
- **I-29 and the Missouri:** Fremont-Mills, Pottawattamie, Harrison-Monona, Woodbury, then South Dakota.
- **I-380:** Johnson, Linn, Benton-Tama, Black Hawk.
- **US-20:** Woodbury, Crawford-Ida (Holstein), Carroll-Sac (Early), Calhoun-Webster, Hamilton-Wright, Franklin-Hardin, then Grundy-Marshall or Bremer-Butler along their shared line, Black Hawk, Buchanan-Delaware, Dubuque (Dyersville).
- **US-30 and the Union Pacific:** Harrison-Monona (Missouri Valley, Logan, Dunlap), Crawford-Ida, Carroll-Sac, Boone-Greene, Story, Grundy-Marshall, Benton-Tama, Linn, Cedar-Jones, Clinton-Jackson.
- **BNSF and the California Zephyr:** Henry-Des Moines (Burlington, Mount Pleasant), Jefferson-Washington (Fairfield), Davis-Wapello (Ottumwa), Appanoose-Monroe-Wayne (Albia), Clarke-Decatur-Lucas (Chariton, Osceola), Adams-Ringgold-Union (Creston, Corning), Cass-Montgomery (Villisca, Red Oak), Mills-Fremont (Pacific Junction), then Nebraska.
- **The Mississippi:** Allamakee-Winneshiek, Clayton-Fayette, Dubuque, Clinton-Jackson, Scott, Louisa-Muscatine, Henry-Des Moines, Lee-Van Buren.
- **US-218 and the Avenue of the Saints (moderately known):** Lee-Van Buren, Henry-Des Moines, Jefferson-Washington, Johnson, Linn, Black Hawk, Bremer-Butler, Floyd-Mitchell, then Minnesota.

Rejected:
- **Marshall + Tama** (the Iowa River and US-30, the strongest pair on its own). Grundy's other partners (Butler, Hardin) are needed elsewhere, so it strands Grundy and pushes Benton onto Iowa County and Jefferson onto Wapello. Washington and the far south then need at least one more region, with weaker pairs.
- **Sioux + O'Brien and Lyon + Osceola:** this cuts the Rock River tie (Rock Rapids to Rock Valley), and Sheldon loses its station.
- **Plymouth alone** (Le Mars, in Sioux City's orbit) with Cherokee + Ida: a 25.7k exception with no wall around it.
- **Emmet + Kossuth + Palo Alto with Humboldt + Webster** (one fewer region): Algona's country would get Estherville, in the far corner, as its station, and Calhoun is left with no good partner.
- **Hamilton + Hardin (US-20) with Franklin + Wright:** Iowa Falls loses its station to Webster City, and Hampton (4,338) gets one instead.
- **Buchanan + Fayette with Clayton + Delaware** (IA-13 from Manchester to Elkader, moderately known): workable, but Manchester and Independence would be split from their shared stretch of US-20.
- **Clinton + Cedar (US-30) with Jackson + Jones** (Maquoketa 6,130 as station): Jackson's river towns would be cut from Clinton, and Cedar touches Clinton for only 19 km.
- **Boone + Greene + Guthrie with Adair + Madison:** this splits the I-80 towns on the Adair–Guthrie line.
- **Madison + Clarke:** the two touch for only 19 km, and Winterset looks to Des Moines, not to Osceola.
- **Iowa + Washington with Jefferson + Keokuk:** they touch for only 9 km.
- **Clarke + Lucas + Monroe (the whole Zephyr line) with Appanoose + Decatur + Wayne (IA-2):** Lamoni and Leon are 25 km from Osceola but 70 km from Centerville.

### Alternative (also 53 regions)

Replace `["Allamakee", "Winneshiek"]` and `["Clayton", "Fayette"]` with `["Allamakee", "Clayton"]` (31,111; Waukon 3,826) and `["Fayette", "Winneshiek"]` (39,574; Decorah 7,583).
- Pro: the two Mississippi bluff counties sit together (Lansing, Harpers Ferry, Marquette, McGregor, Guttenberg; Effigy Mounds spans them, moderately known), and Waukon gets a station.
- Con: Oelwein (5,928) loses its station to Decorah, about 70 km away, and Waukon is cut from Decorah, 30 km off.

### Map and data check

1. **The map looks right.**
   - All 99 counties are one piece each, and every label is inside its county.
   - County areas add up to about 56,050 sq mi, which matches Iowa's total area (about 56,270 sq mi, land 55,860).
   - All 1,026 places lie inside their tagged county: 940 incorporated places with populations, and 86 CDPs without.
2. **Neighbours agree both ways**, inside Iowa and with the other states' regions:
   - Minnesota: `mn-` Nobles-Rock, Martin-Jackson, Freeborn-Faribault, Mower, Fillmore-Houston.
   - South Dakota: `sd-` Lincoln, Minnehaha, Clay-Union.
   - Nebraska: `ne-` Dakota-Dixon-Thurston, Burt-Washington, Douglas, Sarpy, Cass-Otoe.
   - None is missing. Lyon's contact with Minnehaha is at the Big Sioux where the Minnesota line meets it.
   - The 18 "coast" lines are the Mississippi (Wisconsin and Illinois, not yet in the game) and the Missouri state line. One of them is a zero-length two-point stub at (-90.95, 41.07), on the Mississippi at the Louisa–Des Moines line. It is harmless.
3. **Short contacts** (jogs in the survey grid):
   - Marion–Polk 2 km.
   - Cerro Gordo–Mitchell 5 km.
   - Iowa–Washington 9 km.
   - Jasper–Mahaska 9 km.
   - About 10 km each: Black Hawk–Butler, Boone–Polk, Carroll–Guthrie, Cass–Shelby, Cedar–Linn, Cherokee–Woodbury, Clinton–Jones, Crawford–Harrison, Dallas–Greene, Henry–Van Buren, Jasper–Story, Johnson–Louisa, Keokuk–Poweshiek, Pocahontas–Webster and Webster–Wright.
   - Chickasaw–Winneshiek 14 km.
   - No merge uses any of these. The shortest borders used are 19 km: Carroll–Sac, Cass–Montgomery, Jefferson–Washington and Grundy–Marshall. Each carries the road that links the two towns (US-71, US-71, IA-1, IA-14; moderately known).
4. **Places:**
   - West Des Moines (68,728), Clive, Urbandale and Grimes reach into Dallas County but are tagged Polk, which is right for where most of their people live. So Dallas's biggest place is Waukee (23,961).
   - Fayette's biggest place is Oelwein, not its seat West Union. Iowa County's is Williamsburg, not its seat Marengo.
   - Some names could confuse:
     - Beaverdale is a CDP in Des Moines County, not the Des Moines neighbourhood.
     - Marion is both a Linn County city (41,536) and Pella's county.
     - Jefferson is Greene's seat, while Jefferson County is Fairfield's.
     - Osceola is Clarke's town, while Osceola County is in the northwest.
     - Webster City is in Hamilton, while Webster County is Fort Dodge's.
     - Keokuk is a city in Lee and also a county (Sigourney).
     - Fremont is also a town in Mahaska (698).
   - Le Claire is written with a space, as the Census writes it. Maharishi Vedic City (Jefferson) is a real city.
