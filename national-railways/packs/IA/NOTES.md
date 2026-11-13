# Iowa (IA) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (53 regions, with both renames: "Henry-Des Moines County" and "Mills-Fremont County"). The map and raw facts were rebuilt, and the pack (phase 2, below) is built on it.

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

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/IA/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` points rounded to 2 decimals, except six stations moved to their downtowns or for spacing (below) and the five scenic places that aren't towns.
- **Facts added by hand** (bridges, scenic places, the airports, roads, rivers and railways) are well known unless marked "moderately known". A point marked "approx." is one I gave from memory, within about a mile.
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough (`NR.runtime.geoLevel`). The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map, terrain and bridges, so Minnesota's, South Dakota's and Nebraska's places count too. The scripts are in `/tmp/ia-work/` (not part of the game).

### Start

`start: ["ia-polk", "ia-dallas", "ia-warren"]`: Des Moines, Waukee and Indianola, the Des Moines metro. Dallas and Warren both touch Polk (41 and 39 km).
- **Types:** metro, metro and farm. Waukee stays metro: it is Des Moines's west side, and Dallas County's suburbs (Waukee, part of West Des Moines, Clive and Urbandale) hold most of its people.
- **Indianola is farm.** Warren County is typed by its farms south of Norwalk and Indianola (Carlisle, Milo, New Virginia), as Minnesota types Chaska and South Dakota types Harrisburg.
- **First track:** the nearest pair of different types is Des Moines–Indianola: 16 mi as the crow flies, laid as 19 mi of track. It is flat and crosses no river; the map's Des Moines River stays east of the line. The pack test laid it, and 22 passengers arrived in the week.
- **Considered:** Polk + Dallas + Story (Ames). Ames is a metro too, so the start's types would hinge on Waukee alone, and Ames is 30 mi off. Warren keeps the start to the Des Moines metro.

### Main stations (53)

Each id is unused in every other pack (the checker checks). DSM (De Smet, South Dakota), BURL (Burlington, Colorado), DAV, WAT, MSHL, NEWT, OSKA, CLIN, STRT and MTPL were taken. So Des Moines is DM (2 letters, as SF), Burlington BUR, Clinton CLNT, Newton NWT, Oskaloosa OSK, Stuart STUA and Mount Pleasant MPLT. Airport codes are used where they read well: CID, DVN, DBQ, MCW, FOD, OTM, MTW. Sioux City is SXC (its airport code, SUX, reads badly).

**Sizes** follow the other packs: size 2 from about 62k (Grand Island 63k, Moorhead 65k) and size 1 below.
- **Des Moines is size 4.** Polk's 492k is the low end of size 4, as Wichita (524k) and Reno (486k), the biggest cities of their states. Boise (495k) is 3, so 3 would also fit; I chose 4 for Iowa's capital and its metro of about 700,000, the size of Omaha's region next door (585k, size 4).
- **Size 2:** Cedar Rapids (230k), Davenport, Iowa City, Waterloo, Sioux City, Waukee, Dubuque, Ames, Council Bluffs (94k) and Clinton-Jackson (66k).
- **Size 1:** the rest, from Henry-Des Moines (59k) down.

**Types:**
- **Metro:** the ten big counties' cities (Waukee included). Also four regional cities of 24k–28k that stand 45 mi or more from a bigger city, as Nebraska types Norfolk and Kearney: Mason City, Fort Dodge, Ottumwa and Burlington.
- **Farm:** everything else. This includes Clinton, Muscatine, Marshalltown and Newton, river and factory towns within 40 mi of a metro. Typed farm (by their counties' farms), Davenport–Clinton, Ames–Marshalltown and Des Moines–Newton have riders. Minnesota types its Mississippi towns Winona and Red Wing farm the same way.
- No mountain, desert or coast station: Iowa is farmland from river to river.

**Airports:** Des Moines International (DM) and The Eastern Iowa Airport (Cedar Rapids, CID). They are Iowa's two busiest, each well over a million passengers a year (from memory), the bar the other packs use. Quad City International is in Moline, Illinois (for that state's pack), and Sioux Gateway is small.

**Scenic stations:**
- Des Moines, for the Iowa State Fair (about a million visitors each August), well known.
- Winterset, for the covered bridges of Madison County (the novel and film "The Bridges of Madison County") and John Wayne's birthplace.

**Points moved from the Census point** (the Census point is the middle of the city limits):
- **Des Moines:** downtown (41.59, -93.62), 1.3 mi north-northwest of the Census point, as the brief asks.
- **Council Bluffs:** downtown (41.26, -95.85), 1.7 mi north of the Census point and 4.7 mi east of Omaha's station.
- **Davenport:** downtown on the Mississippi (41.52, -90.58), 2.8 mi southeast of the Census point, by the Centennial and Government bridges. The Illinois pack's Rock Island County station (Moline or Rock Island) should stand 4 mi from it.
- **Clinton:** downtown on the river (41.84, -90.19), 2.7 mi east of the Census point.
- **Dubuque:** downtown by the bridges (42.50, -90.67), 1.9 mi east of the Census point.
- **Sioux City:** 42.52, -96.39, on the north side, 1.7 mi north of the Census point and 1.9 mi from downtown. Downtown (and the Census point) are 2.8 mi from South Sioux City's station (Nebraska, 42.46, -96.41) across the Missouri. Here it stands 4.3 mi from it and 5.6 mi from North Sioux City (a South Dakota town).
- **Every other station** is at its Census point. Fort Madison's is 1.8 mi (2.9 km) west of its downtown, Burlington's and Muscatine's about 1 mi: within a few kilometres, so kept.

| Station | Region, pop | Type, size | Biggest place (next) and notes |
| --- | --- | --- | --- |
| Des Moines (DM) | Polk, 492k | metro 4, airport, scenic | 214,124 (West Des Moines 68,728, a town). Downtown |
| Waukee (WKE) | Dallas, 100k | metro 2 | 23,961 (Perry 7,843). West Des Moines reaches into Dallas but is tagged Polk, as the brief says |
| Indianola (INDI) | Warren, 52k | farm 1 | 15,834 (Norwalk 12,800). Simpson College. Farm: see "Start" |
| Ames (AMES) | Story, 99k | metro 2 | 66,428. Iowa State University, I-35 and the Union Pacific |
| Boone (BOON) | Boone-Greene, 35k | farm 1 | 12,453 (Jefferson 4,182). US-30 and the Union Pacific, by the Des Moines River |
| Webster City (WEBC) | Hamilton-Wright, 28k | farm 1 | 7,828 (Eagle Grove 3,607). US-20 |
| Marshalltown (MTW) | Grundy-Marshall, 52k | farm 1 | 27,584 (Grundy Center 2,802). US-30, the Union Pacific, the Iowa River |
| Newton (NWT) | Jasper-Poweshiek, 56k | farm 1 | 15,756 (Grinnell 9,553). I-80 |
| Oskaloosa (OSK) | Mahaska-Marion, 56k | farm 1 | 11,547 (Pella 10,459, a scenic town here) |
| Winterset (WINT) | Adair-Guthrie-Madison, 35k | farm 1, scenic | 5,355 (Greenfield 2,061). **Kept** at its group's east end: the biggest town by far (2.6 times Greenfield), scenic, and 20 mi from Des Moines. Greenfield, Stuart (I-80) and Guthrie Center are towns, so the west has places too |
| Osceola (OSCE) | Clarke-Decatur-Lucas, 26k | farm 1 | 5,412 (Chariton 4,196). I-35 and the Zephyr's stop |
| Cedar Rapids (CID) | Linn, 230k | metro 2, airport | 137,728 (Marion 41,536) |
| Iowa City (IC) | Johnson, 153k | metro 2 | 74,825 (Coralville 22,331). The University of Iowa |
| Davenport (DVN) | Scott, 175k | metro 2 | 101,727 (Bettendorf 39,097). Downtown |
| Waterloo (WLOO) | Black Hawk, 131k | metro 2 | 67,319 (Cedar Falls 40,726) |
| Vinton (VNTN) | Benton-Tama, 43k | farm 1 | 4,936 (Tama 3,126). On the Cedar |
| Williamsburg (WMBG) | Iowa-Keokuk, 27k | farm 1 | 3,351 (Marengo 2,438). I-80, by the Amana Colonies |
| Anamosa (ANAM) | Cedar-Jones, 39k | farm 1 | 5,445 (Monticello 4,043). The Wapsipinicon |
| Muscatine (MUSC) | Louisa-Muscatine, 54k | farm 1 | 23,799 (West Liberty 3,860). The Mississippi |
| Clinton (CLNT) | Clinton-Jackson, 66k | farm 2 | 24,467 (Maquoketa 6,130). Downtown. Farm: see "Types" |
| Fairfield (FAIR) | Jefferson-Washington, 38k | farm 1 | 9,423 (Washington 7,361). US-34 and the BNSF |
| Burlington (BUR) | Henry-Des Moines, 59k | metro 1 | 23,988 (Mount Pleasant 9,273). The Zephyr's first Iowa stop |
| Fort Madison (FTMD) | Lee-Van Buren, 41k | farm 1 | 10,330 (Keokuk 9,901, a town). The Southwest Chief's stop |
| Ottumwa (OTM) | Davis-Wapello, 45k | metro 1 | 25,543 (Bloomfield 2,682). The Des Moines River, the Zephyr |
| Centerville (CTVL) | Appanoose-Monroe-Wayne, 26k | farm 1 | 5,422 (Albia 3,716). Below Rathbun Lake |
| Dubuque (DBQ) | Dubuque, 99k | metro 2 | 59,677 (Asbury 5,948). Downtown |
| Waverly (WVRL) | Bremer-Butler, 39k | farm 1 | 10,395. Wartburg College, the Cedar, US-218 |
| Independence (INDE) | Buchanan-Delaware, 38k | farm 1 | 6,064 (Manchester 5,074). US-20, the Wapsipinicon |
| Oelwein (OELW) | Clayton-Fayette, 37k | farm 1 | 5,928 (West Union 2,484). **Kept** at its group's southwest edge: more than twice the next town, the old Chicago Great Western hub (moderately known). West Union, and Guttenberg on the Mississippi, are towns, so the Clayton side has places too |
| Decorah (DCR) | Allamakee-Winneshiek, 34k | farm 1 | 7,583 (Waukon 3,826). Luther College, the Upper Iowa River |
| Cresco (CRCO) | Chickasaw-Howard, 21k | farm 1 | 3,892 (New Hampton 3,497) |
| Charles City (CHCY) | Floyd-Mitchell, 26k | farm 1 | 7,400 (Osage 3,632). The Cedar, US-218 |
| Mason City (MCW) | Cerro Gordo-Worth, 51k | metro 1 | 27,340 (Clear Lake 7,676). I-35; Meredith Willson's "River City" |
| Iowa Falls (IOWF) | Franklin-Hardin, 27k | farm 1 | 5,103 (Hampton 4,338). The Iowa River, US-20 |
| Forest City (FRCY) | Hancock-Winnebago, 21k | farm 1 | 4,275 (Garner 3,061). Winnebago Industries |
| Algona (ALGO) | Humboldt-Kossuth, 24k | farm 1 | 5,487 (Humboldt 4,788) |
| Fort Dodge (FOD) | Calhoun-Webster, 47k | metro 1 | 24,870 (Rockwell City 2,261). The Des Moines River, US-20 |
| Sioux City (SXC) | Woodbury, 106k | metro 2 | 85,784 (Sergeant Bluff 5,014). North side: see above |
| Council Bluffs (CB) | Pottawattamie, 94k | metro 2 | 62,792. Downtown. Carter Lake (3,792), an Iowa city cut off on the Nebraska side of the Missouri, 2 mi from Omaha's station, is left out |
| Le Mars (LEMR) | Cherokee-Plymouth, 37k | farm 1 | 10,578 (Cherokee 5,196). "The Ice Cream Capital of the World" (Blue Bunny) |
| Sioux Center (SCTR) | Lyon-Sioux, 48k | farm 1 | 8,238 (Orange City 6,271). Dordt University |
| Sheldon (SHDN) | O'Brien-Osceola, 20k | farm 1 | 5,511 (Sibley 2,854) |
| Spencer (SPEN) | Clay-Dickinson, 34k | farm 1 | 11,322 (Spirit Lake 5,440). The Little Sioux |
| Estherville (ESTV) | Emmet-Palo Alto, 18k | farm 1 | 5,900 (Emmetsburg 3,698). The Des Moines River |
| Storm Lake (STLK) | Buena Vista-Pocahontas, 28k | farm 1 | 11,263 (Alta 2,088). Buena Vista University |
| Carroll (CARR) | Carroll-Sac, 31k | farm 1 | 10,319 (Sac City 2,062). US-30 and the UP |
| Denison (DENI) | Crawford-Ida, 24k | farm 1 | 8,367 (Ida Grove 2,053). US-30 and the UP |
| Onawa (ONAW) | Harrison-Monona, 23k | farm 1 | 2,910 (Missouri Valley 2,683, a town). I-29 |
| Harlan (HARL) | Audubon-Shelby, 17k | farm 1 | 4,896 (Audubon 2,058) |
| Atlantic (ATLC) | Cass-Montgomery, 23k | farm 1 | 6,797 (Red Oak 5,595, a town) |
| Glenwood (GLEN) | Mills-Fremont, 21k | farm 1 | 5,073 (Sidney 1,065). In the Omaha metro, but Mills is farms and Loess Hills, so farm |
| Clarinda (CLRD) | Page-Taylor, 21k | farm 1 | 5,369 (Shenandoah 4,926, a town) |
| Creston (CRST) | Adams-Ringgold-Union, 21k | farm 1 | 7,542 (Mount Ayr 1,626). The Zephyr's stop |

### Towns (81: 76 towns and 5 scenic places that aren't towns)

About 1.5 per region (53 regions): the next-biggest towns, chosen to spread out and to stand on the main routes (I-80, I-35, I-29, US-20, US-30, US-218, the Zephyr, the river roads). Every town is inside its region and at least 4 mi from every other place in the pack (the checker gives no warnings). Towns are farm and size 1, except the suburbs. West Des Moines, Ankeny, Marion, Bettendorf and Cedar Falls are metro 2; Coralville, Le Claire, Norwalk and Sergeant Bluff are metro 1. Arnolds Park is coast (below).

| Region | Towns (population) |
| --- | --- |
| Polk | West Des Moines (68,728), Ankeny (68,062) |
| Dallas | Perry (7,843) |
| Warren | Norwalk (12,800) |
| Story | Nevada (6,926), Story City (3,345; I-35) |
| Boone-Greene | Jefferson (4,182; US-30) |
| Hamilton-Wright | Eagle Grove (3,607) |
| Grundy-Marshall | Grundy Center (2,802) |
| Jasper-Poweshiek | Grinnell (9,553; Grinnell College), Colfax (2,255; I-80) |
| Mahaska-Marion | Pella (10,459; scenic), Knoxville (7,584) |
| Adair-Guthrie-Madison | Stuart (1,785; I-80), Greenfield (2,061), Guthrie Center (1,588) |
| Clarke-Decatur-Lucas | Chariton (4,196), Lamoni (1,964; I-35 at the Missouri line) |
| Linn | Marion (41,536) |
| Johnson | Coralville (22,331). North Liberty (20,482) is 2.8 mi from Coralville, so left out |
| Scott | Bettendorf (39,097), Le Claire (4,714; the I-80 bridge) |
| Black Hawk | Cedar Falls (40,726) |
| Benton-Tama | Tama (3,126; Toledo is 1.5 mi away), Belle Plaine (2,331) |
| Iowa-Keokuk | Amana Colonies (scenic), Sigourney (2,006) |
| Cedar-Jones | Monticello (4,043), Tipton (3,152), West Branch (2,506; scenic) |
| Louisa-Muscatine | West Liberty (3,860), Wapello (2,085) |
| Clinton-Jackson | Maquoketa (6,130), DeWitt (5,515), Maquoketa Caves (scenic) |
| Jefferson-Washington | Washington (7,361), Kalona (2,635) |
| Henry-Des Moines | Mount Pleasant (9,273; the Zephyr) |
| Lee-Van Buren | Keokuk (9,901), Keosauqua (933) |
| Davis-Wapello | Bloomfield (2,682), Eldon (787; scenic) |
| Appanoose-Monroe-Wayne | Albia (3,716) |
| Dubuque | Field of Dreams (scenic), Cascade (2,388). Dyersville (4,479) is 3.4 mi from the Field of Dreams, which stands for it |
| Bremer-Butler | Parkersburg (2,015) |
| Buchanan-Delaware | Manchester (5,074) |
| Clayton-Fayette | West Union (2,484), Guttenberg (1,816) |
| Allamakee-Winneshiek | Waukon (3,826), Effigy Mounds (scenic) |
| Chickasaw-Howard | New Hampton (3,497) |
| Floyd-Mitchell | Osage (3,632) |
| Cerro Gordo-Worth | Clear Lake (7,676), Northwood (2,072; I-35) |
| Franklin-Hardin | Hampton (4,338) |
| Hancock-Winnebago | Garner (3,061) |
| Humboldt-Kossuth | Humboldt (4,788) |
| Calhoun-Webster | Rockwell City (2,261) |
| Woodbury | Sergeant Bluff (5,014) |
| Pottawattamie | Avoca (1,684; I-80) |
| Cherokee-Plymouth | Cherokee (5,196), Akron (1,554; the Big Sioux) |
| Lyon-Sioux | Orange City (6,271), Rock Rapids (2,610) |
| O'Brien-Osceola | Sibley (2,854) |
| Clay-Dickinson | Spirit Lake (5,440), Arnolds Park (1,107; scenic, coast) |
| Emmet-Palo Alto | Emmetsburg (3,698) |
| Buena Vista-Pocahontas | Pocahontas (1,870) |
| Carroll-Sac | Sac City (2,062) |
| Crawford-Ida | Ida Grove (2,053) |
| Harrison-Monona | Missouri Valley (2,683), Loess Hills (scenic) |
| Audubon-Shelby | Audubon (2,058) |
| Cass-Montgomery | Red Oak (5,595; the BNSF) |
| Mills-Fremont | Hamburg (893; I-29 at the Missouri line) |
| Page-Taylor | Shenandoah (4,926), Bedford (1,501) |
| Adams-Ringgold-Union | Corning (1,567; the BNSF), Mount Ayr (1,626) |

**Scenic places (9), all well known:**
- **Pella:** the Dutch town, with Tulip Time each May and the Vermeer windmill.
- **Amana Colonies:** the seven villages of the Amana Society, German Pietists who came in 1855. At the Census point of Amana, the main village.
- **West Branch:** Herbert Hoover's birthplace: the Herbert Hoover National Historic Site and his presidential library.
- **Maquoketa Caves:** the state park's limestone caves and natural bridge, northwest of Maquoketa (approx.). The brief names it; it is the least famous of the nine (moderately known).
- **Eldon:** the house in Grant Wood's "American Gothic" (1930), with a visitor center.
- **Field of Dreams:** the ball field from the 1989 film, on its farm 3 mi northeast of Dyersville (approx.).
- **Effigy Mounds:** the national monument's 200-odd mounds above the Mississippi, 31 of them shaped as bears and birds, at the visitor center north of Marquette (approx.). The point falls in Allamakee, by the Clayton line.
- **Arnolds Park:** the old amusement park and beaches on West Okoboji, the heart of the Iowa Great Lakes. It is typed coast, a beach resort, as Nebraska types Lake McConaughy. The map has no Okoboji lakes, so the type carries it.
- **Loess Hills:** the wind-blown silt bluffs along the Missouri, at the Loess Hills State Forest's visitor center in Pisgah (its Census point).

Not added:
- the Surf Ballroom (Clear Lake, where Buddy Holly played his last show; Clear Lake is a plain town);
- the Kate Shelley High Bridge (a bridge entry here);
- the Grotto of the Redemption (West Bend);
- Ledges and Backbone state parks;
- the Little Brown Church (Nashua).

Each is moderately known.

### Passes (0) and bridges (55)

**No passes.** Iowa's map has no mountain cells: 9,179 flat and 1 hill cell (the Mississippi bluffs at Lansing). No link needs a pass.

**Rivers on the map:**
- **Border rivers:** the Mississippi (the whole Wisconsin and Illinois line), the Missouri (the Nebraska line) and the Big Sioux (the South Dakota line).
- **Inside Iowa:** the Des Moines (from Estherville), the Cedar, the Iowa, the Wapsipinicon, the Little Sioux, and the Thompson and Grand (in the south).
- **Not on the map:** the Raccoon, the Skunk, the Boone, the Nishnabotnas, the Floyd, the Maquoketa, the Turkey and the Upper Iowa. So no bridge is listed for them; the Raccoon meets the Des Moines in downtown Des Moines, where a bridge is listed.
- **Lakes:** Lake Red Rock and Rathbun Lake, each under 2 mi wide. A new bridge crosses either in both modes, except Rathbun lengthwise in Tough (below), so no lake bridge is listed.

The checker gives no bridge warnings: every bridge is within 3 mi of a river on the map. Each sits on the map's river where it passes the town, at or near the town's real crossing. "Uses" counts the links of up to 45 mi whose river crossing is within 2 mi of the bridge, in Gentle.

| Bridge | Point | Source | Uses |
| --- | --- | --- | --- |
| Black Hawk Bridge (Lansing) | 43.37, -91.20 | The cantilever bridge from Lansing to Wisconsin | Wisconsin later |
| Mississippi River bridge (US-18, Marquette–Prairie du Chien) | 43.04, -91.16 | US-18 to Prairie du Chien, Wisconsin | Wisconsin later |
| Julien Dubuque Bridge (US-20) | 42.50, -90.65 | US-20 from downtown Dubuque to East Dubuque, Illinois | Illinois later |
| Dubuque–Wisconsin Bridge (US-61/151) | 42.52, -90.64 | US-61/151 to Wisconsin, north of downtown | Wisconsin later |
| Savanna–Sabula Bridge (US-52) | 42.07, -90.16 | US-52 from Sabula, Iowa's island town, to Savanna, Illinois (moderately known) | Illinois later |
| Mississippi River bridges (Clinton: US-30 and the Union Pacific) | 41.84, -90.19 | The Gateway Bridge (US-30) and the Union Pacific's main line bridge | Illinois later |
| I-80 Mississippi River bridge (Le Claire) | 41.60, -90.36 | I-80 from Le Claire to Rapids City, Illinois | Illinois later |
| I-74 Bridge (Bettendorf–Moline) | 41.53, -90.52 | I-74 between Bettendorf and Moline | Illinois later |
| Mississippi River bridges (Davenport–Rock Island) | 41.52, -90.58 | The Centennial Bridge (US-67) and the Government Bridge (the Arsenal's road and rail bridge) from downtown Davenport | Davenport–Wapello; Illinois later |
| Norbert F. Beckey Bridge (IA-92, Muscatine) | 41.41, -91.03 | IA-92 from downtown Muscatine to Illinois (moderately known) | Illinois later |
| Mississippi River bridges (Burlington: US-34 and the BNSF) | 40.81, -91.10 | The Great River Bridge (US-34) and the BNSF bridge (the Zephyr's line) | Illinois later |
| Fort Madison Toll Bridge (the BNSF and IA-2) | 40.63, -91.30 | The double-deck swing bridge: the BNSF (the Southwest Chief) below, the road above | Illinois later |
| Mississippi River bridges (Keokuk–Hamilton) | 40.40, -91.38 | US-136 and the rail bridge by Lock and Dam 19 | Illinois later |
| Missouri River bridges (Omaha–Council Bluffs: I-480 and the Union Pacific) | 41.26, -95.92 | Nebraska's point and name | 8, among them Council Bluffs–Omaha |
| Missouri River bridge (I-80, Omaha–Council Bluffs) | 41.23, -95.92 | Nebraska's | 6, among them Glenwood–Omaha |
| Missouri River bridges (Plattsmouth: US-34 and the BNSF) | 41.01, -95.87 | Nebraska's | 6, among them Glenwood–Plattsmouth (the Zephyr) |
| Missouri River bridge (Nebraska City) | 40.68, -95.84 | Nebraska's | 5, among them Glenwood–Nebraska City |
| Missouri River bridge (US-30, Blair) | 41.55, -96.08 | Nebraska's | Missouri Valley–Blair, Harlan–Blair |
| Missouri River bridge (Decatur) | 42.02, -96.22 | Nebraska's | None yet: no Nebraska place stands at Decatur (Onawa–Tekamah crosses 8 mi south of it) |
| Missouri River bridges (South Sioux City–Sioux City) | 42.48, -96.39 | Nebraska's | Sioux City–South Sioux City and 4 more |
| Big Sioux River bridge (I-29, Sioux City–North Sioux City) | 42.52, -96.48 | I-29 crosses the Big Sioux just above its mouth | Sioux City–North Sioux City and 4 more |
| Big Sioux River bridge (Akron) | 42.84, -96.57 | Akron's road into South Dakota (moderately known) | 7, Akron to Vermillion, Canton and Beresford |
| Big Sioux River bridge (US-18, Canton) | 43.29, -96.58 | US-18 from Inwood to Canton, South Dakota (moderately known) | Le Mars, Sioux Center, Sheldon and Orange City to Canton |
| Des Moines River bridge (Estherville) | 43.40, -94.84 | Estherville sits on the river | 7, among them Spencer–Estherville and Estherville–Fairmont |
| Des Moines River bridge (US-18, Emmetsburg) | 43.11, -94.71 | US-18 west of Emmetsburg (moderately known) | Spencer–Emmetsburg and 3 more |
| Des Moines River bridge (Humboldt) | 42.72, -94.23 | Humboldt and Dakota City on the river | 4 |
| Des Moines River bridges (Fort Dodge) | 42.50, -94.19 | Downtown Fort Dodge's bridges | 4, among them Fort Dodge–Rockwell City |
| Des Moines River bridges (Boone: US-30 and the Kate Shelley High Bridge) | 42.05, -93.93 | US-30 and the Union Pacific's Kate Shelley High Bridge cross the valley west of Boone. The map's river is 1 mi from the high bridge | Boone–Jefferson, Ames–Jefferson |
| I-35/80 Des Moines River bridge (Saylorville) | 41.67, -93.68 | I-35/80 crosses the river on Des Moines's north side, below Saylorville Dam (moderately known) | 5, among them Waukee–Ankeny |
| Des Moines River bridges (downtown Des Moines) | 41.59, -93.61 | Downtown's bridges (Grand, Locust, Court Avenue), where the Raccoon comes in | 10, among them Des Moines–Ames and Des Moines–Newton |
| Des Moines River bridges (Ottumwa) | 41.00, -92.42 | Downtown Ottumwa's bridges (US-63 to the south side) | Ottumwa–Centerville, –Bloomfield, –Albia |
| Des Moines River bridge (Eldon) | 40.91, -92.22 | Eldon sits on the river (moderately known) | Centerville–Eldon, Bloomfield–Eldon |
| Des Moines River bridge (IA-1, Keosauqua) | 40.73, -91.96 | IA-1 crosses the river's bend at Keosauqua | Burlington, Fort Madison and Keokuk to Keosauqua |
| Cedar River bridge (Charles City) | 43.06, -92.68 | Charles City sits on the Cedar | 8, among them Waterloo–Charles City and Charles City–Mason City |
| Cedar River bridge (Waverly) | 42.73, -92.47 | Waverly sits on the Cedar | 5 |
| Cedar River bridge (US-218, Janesville) | 42.66, -92.46 | US-218 crosses the Cedar at Janesville, between Waterloo and Waverly (moderately known) | Waterloo–Waverly and 3 more |
| Cedar River bridge (Cedar Falls) | 42.54, -92.44 | Cedar Falls sits on the Cedar | 5 |
| Cedar River bridges (downtown Waterloo) | 42.50, -92.34 | Downtown Waterloo's bridges | 7 |
| Cedar River bridge (Vinton) | 42.18, -92.02 | Vinton sits on the Cedar | 3 |
| Cedar River bridges (downtown Cedar Rapids) | 41.98, -91.67 | Downtown's bridges (and the Union Pacific's) | 8, among them Cedar Rapids–Anamosa and –Independence |
| Cedar River bridge (I-80) | 41.62, -91.15 | I-80 crosses the Cedar between West Branch and Wilton (moderately known; approx.) | Davenport–West Branch and 2 more; Iowa City–Davenport crosses 1.8 mi from it and uses it too |
| Iowa River bridge (US-61, Wapello) | 41.18, -91.19 | US-61 crosses the Iowa River at Wapello. The map names the river here the Cedar (the Cedar joins the Iowa just upstream) | 6, Burlington, Fort Madison and Fairfield to Wapello |
| Iowa River bridge (US-65, Iowa Falls) | 42.52, -93.26 | Iowa Falls sits on the river | 9 |
| Iowa River bridge (IA-14, Marshalltown) | 42.06, -92.91 | IA-14 north from Marshalltown (moderately known) | Marshalltown–Waterloo and 4 more |
| Iowa River bridge (US-63, Tama) | 41.95, -92.58 | US-63 between Tama and Toledo | Newton, Grinnell and Colfax to Tama |
| Iowa River bridge (Amana) | 41.78, -91.87 | The Amana Colonies' road over the Iowa (US-151/IA-220, moderately known) | 11, among them Cedar Rapids–Williamsburg |
| I-380 Iowa River bridge (North Liberty) | 41.79, -91.60 | I-380 crosses the Iowa River (Coralville Lake's arm) north of North Liberty (moderately known; approx.) | Cedar Rapids–Iowa City and 3 more |
| Iowa River bridge (I-80, Coralville) | 41.68, -91.56 | I-80 at Coralville | Cedar Rapids–Iowa City and 5 more |
| Iowa River bridges (downtown Iowa City) | 41.66, -91.54 | Iowa City's bridges by the university | 8 |
| Wapsipinicon River bridge (Independence) | 42.47, -91.89 | Independence sits on the Wapsipinicon | 5 |
| Wapsipinicon River bridge (Anamosa) | 42.09, -91.29 | Anamosa sits on the Wapsipinicon | 10 |
| Wapsipinicon River bridge (US-61, DeWitt) | 41.77, -90.56 | US-61 crosses the Wapsipinicon south of DeWitt (moderately known) | Davenport–DeWitt and 3 more |
| Little Sioux River bridge (Spencer) | 43.13, -95.15 | Spencer sits on the Little Sioux | 3 |
| Little Sioux River bridge (US-71, Sioux Rapids) | 42.90, -95.18 | US-71 at Sioux Rapids (moderately known) | Spencer–Storm Lake |
| Little Sioux River bridge (Cherokee) | 42.75, -95.56 | Cherokee sits on the Little Sioux | 4 |

**Map quirks (not real crossings, so no bridge):**
- **The Mississippi's bends:** Keokuk–Fort Madison, Le Claire–Clinton and Dubuque–Guttenberg cut across bends into Illinois or Wisconsin on a straight line. Each crosses the map's river twice and pays two new river bridges, though the real roads (US-61, US-67, US-52) stay in Iowa. A river never blocks track, so this is cost only.
- **The Cedar's headwaters:** the map's Cedar enters from Minnesota in Worth County, by Northwood. The real Cedar runs about 15 mi east, through Mitchell County. Mason City–Albert Lea and Osage–Albert Lea pay for new Cedar bridges.
- **Other new crossings on the main routes** are where the real roads cross small rivers or the map's lines wiggle:
  - Webster City–Iowa Falls (the Iowa River, twice near Alden);
  - Marshalltown–Tama (the Iowa River);
  - Waverly–Charles City (the Cedar near Plainfield);
  - Waterloo–New Hampton (the Wapsipinicon);
  - Missouri Valley–Onawa (the Little Sioux near its mouth);
  - Sioux City–Ida Grove (the Little Sioux);
  - Lamoni–Osceola and Osceola–Creston (the Thompson).
- **Not added:** a US-20 bridge at Correctionville and Hawarden's and Eddyville's bridges (no link in the pack uses them), and the Bellevue (US-34) and Mormon (I-680) bridges over the Missouri (Nebraska left them out too).

### How the map plays

**Counts.** Of the 4,800 pairs of places (at least one in Iowa, among Iowa's, Minnesota's, South Dakota's and Nebraska's places) within 100 mi of each other:
- **Gentle:** none are blocked.
- **Tough:** 2 are blocked: Centerville–Knoxville (43 mi) and Centerville–Colfax. Both run lengthwise down Rathbun Lake, 2 mi of water. Centerville reaches Knoxville's region by Chariton, Albia or Osceola, all open.
- With links up to 60 mi, every Iowa place is in one network in both modes. The fewest open links (up to 50 mi) any Iowa place has is 4: Keokuk, in the southeast corner, until Illinois and Missouri join.

**Main stations.** Every main station reaches every neighbouring main station directly, in both modes. The fewest neighbouring main stations is Waukee's 3 (Des Moines, Boone, Winterset). Across the state lines (all open in both modes):
- **Minnesota:** Decorah–Chatfield, Cresco–Chatfield, Cresco–Austin, Charles City–Austin, Mason City–Albert Lea, Mason City–Austin, Forest City–Albert Lea, Algona–Albert Lea, Algona–Fairmont, Estherville–Fairmont, Spencer–Fairmont, Sheldon–Fairmont, Sheldon–Worthington, Sioux Center–Worthington.
- **South Dakota:** Sioux City–Vermillion, Le Mars–Vermillion, Sioux Center–Vermillion, Sioux Center–Harrisburg, Sioux Center–Sioux Falls.
- **Nebraska:** Sioux City–South Sioux City, Onawa–South Sioux City, Onawa–Blair, Council Bluffs–Blair, –Omaha and –Bellevue, Glenwood–Bellevue and –Nebraska City.

**The links the brief names** are all open in both modes:
- **I-29:** Sioux City–North Sioux City (6 mi), then Sioux Falls (South Dakota's chain). Akron–Vermillion (19 mi); Sioux Center–Sioux Falls (43 mi) and –Canton.
- **I-80:** Council Bluffs–Omaha (5 mi).
- **US-20:** Sioux City–South Sioux City (4 mi).
- **I-35:** Northwood–Albert Lea (16 mi) and Mason City–Albert Lea (35 mi).
- **US-218 and US-63:** Osage–Austin (28 mi), Charles City–Austin (45 mi), Cresco–Rochester (48 mi), Cresco–Chatfield (33 mi).
- **US-71:** Spirit Lake–Jackson (16 mi), Arnolds Park–Jackson (20 mi).
- **US-75 and US-59:** Rock Rapids–Luverne (15 mi), Sibley–Worthington (17 mi), Sheldon–Worthington (33 mi), Rock Rapids–Sioux Falls (29 mi).
- **I-90's area:** Estherville–Fairmont (25 mi), Forest City–Albert Lea (30 mi), Algona–Fairmont (40 mi) and Algona–Blue Earth (39 mi).

**The real routes, as chains,** are open in both modes. The longest link is in brackets; new river bridges are listed above.
- **I-80:** Omaha–Council Bluffs–Avoca–Atlantic–Stuart–Waukee–Des Moines–Colfax–Newton–Grinnell–Williamsburg–Coralville–Iowa City–West Branch–Davenport (41 mi). Every river on it has a real bridge.
- **I-35** (by the pack's nearest places; north of Story City the interstate runs between Webster City and Iowa Falls): Lamoni–Osceola–Indianola–Des Moines–Ames–Story City–Webster City–Iowa Falls–Clear Lake–Mason City–Northwood–Albert Lea (43 mi). Webster City–Clear Lake (52 mi) also works.
- **I-29:** Hamburg–Glenwood–Council Bluffs–Missouri Valley–Onawa–Sergeant Bluff–Sioux City–North Sioux City (34 mi).
- **I-380:** Iowa City–Cedar Rapids–Vinton–Waterloo (28 mi). All real bridges.
- **US-20:** South Sioux City–Sioux City–Ida Grove–Sac City–Fort Dodge–Webster City–Iowa Falls–Parkersburg–Cedar Falls–Waterloo–Independence–Manchester–Field of Dreams–Dubuque (49 mi).
- **US-30 and the Union Pacific:** Blair–Missouri Valley–Denison–Carroll–Jefferson–Boone–Ames–Nevada–Marshalltown–Tama–Belle Plaine–Cedar Rapids–Anamosa–DeWitt–Clinton (43 mi). Cedar Rapids–Tipton–Clinton also works.
- **The BNSF (the California Zephyr):** Burlington–Mount Pleasant–Fairfield–Ottumwa–Albia–Chariton–Osceola–Creston–Corning–Red Oak–Glenwood–Plattsmouth (30 mi).
- **US-218 (the Avenue of the Saints):** Keokuk–Fort Madison–Mount Pleasant–Washington–Iowa City–Cedar Rapids–Vinton–Waterloo–Waverly–Charles City–Osage–Austin (28 mi).
- **US-63:** Ottumwa–Oskaloosa–Grinnell–Tama–Waterloo–New Hampton–Cresco (39 mi).
- **US-61 and the river:** Keokuk–Fort Madison–Burlington–Wapello–Muscatine–Davenport–DeWitt–Maquoketa–Dubuque (30 mi). Also Davenport–Le Claire–Clinton–Maquoketa–Dubuque–Guttenberg–Effigy Mounds–Waukon (30 mi).
- **US-71:** Clarinda–Red Oak–Atlantic–Audubon–Carroll–Sac City–Storm Lake–Spencer–Arnolds Park–Spirit Lake–Jackson, Minnesota (35 mi). All real bridges.
- **US-151:** Cedar Rapids–Anamosa–Monticello–Cascade–Dubuque (23 mi). All real bridges.

**Neighbours.** Nothing in this pack blocks a line between two other states' places: Iowa adds no lake or bay, only bridges. The seven Missouri bridges repeat Nebraska's points and names, as Minnesota repeats North Dakota's Red River bridges.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Des Moines & Central Iowa | `central` | Des Moines, Waukee, Indianola, Ames, Boone, Webster City, Marshalltown, Newton, Oskaloosa, Winterset, Osceola (11) | 50 passengers; own 5 counties; 10 crates of produce |
| Cedar Rapids, Iowa City & the Quad Cities | `east` | Cedar Rapids, Iowa City, Davenport, Waterloo, Vinton, Williamsburg, Anamosa, Muscatine, Clinton, Fairfield, Burlington, Fort Madison, Ottumwa, Centerville (14) | 140 passengers; connect DM–DVN (I-80 by Newton, Grinnell and Iowa City; open in both modes); own 14 counties |
| Dubuque, Mason City & the North | `north` | Dubuque, Waverly, Independence, Oelwein, Decorah, Cresco, Charles City, Mason City, Iowa Falls, Forest City, Algona, Fort Dodge (12) | 280 passengers; connect DM–MCW (I-35 by Ames; open in both modes); one high-speed train |
| Sioux City, Council Bluffs & the West | `west` | Sioux City, Council Bluffs, Le Mars, Sioux Center, Sheldon, Spencer, Estherville, Storm Lake, Carroll, Denison, Onawa, Harlan, Atlantic, Glenwood, Clarinda, Creston (16) | 450 passengers; connect DVN–CB (river to river across the state on I-80; open in both modes); own 25 counties |

- **Targets** follow Nebraska's and Minnesota's four levels.
- **Areas join up:** each level's regions touch the levels before it.
  - Level 2 to level 1: Benton-Tama–Grundy-Marshall, Iowa-Keokuk–Jasper-Poweshiek, Davis-Wapello–Mahaska-Marion.
  - Level 3 to levels 1 and 2: Bremer-Butler–Black Hawk, Franklin-Hardin–Hamilton-Wright, Calhoun-Webster–Boone-Greene, Dubuque–Cedar-Jones.
  - Level 4 to level 1: Carroll-Sac–Boone-Greene, Audubon-Shelby–Adair-Guthrie-Madison, Adams-Ringgold-Union–Clarke-Decatur-Lucas.
- **No trucks or container goal:** Iowa has no desert or mountain places and no seaport. The last level counts counties instead, as Nebraska's does.

### Biomes

- **`wooded`** (trees on the hills): Allamakee-Winneshiek and Clayton-Fayette, the Driftless Area's bluffs along the Mississippi, the Upper Iowa, the Yellow and the Turkey ("Little Switzerland"). This matches Minnesota's Fillmore-Houston across the line. The map's one hill cell is at Lansing, so Allamakee-Winneshiek shows a few trees. The rest is listed for when the map's hills improve, as Nebraska lists Dawes-Sheridan.
- **Not listed** (farmland and grassland): the rest of the state.
  - Dubuque and Jackson have bluffs only along the river, and farms make up most of the land.
  - The Loess Hills are prairie ridges with woods in their draws, too thin a strip for a county-wide setting. Nebraska leaves the Missouri's wooded bluffs across the river unlisted for the same reason.
  - No `forest` and no `dry`.

### Checks

- **`node tools/check-pack.js IA`:** `IA: passed (53 stations, 81 towns, 0 city maps, 0 passes, 55 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js IA`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is DM, WKE and INDI. The test laid Des Moines–Indianola (19 mi, 1 train) and bought Adair-Guthrie-Madison (WINT). 22 passengers arrived in the week.
  - Levels mode starts at level 1.
- **Screenshots** (`test-out/IA/`: arcade light, classic light, levels):
  - Des Moines sits on the Des Moines River, with its airport and scenic marks, Waukee to the west and Indianola to the south. Winterset and Guthrie Center are in the bought region.
  - The Des Moines, Cedar, Iowa, Wapsipinicon and Little Sioux cross the state with their bridge marks. Lake Red Rock shows in Mahaska-Marion.
  - Nebraska, South Dakota and Minnesota show beyond the clouds.

### For the main agent

1. **Des Moines is size 4** (Polk 492k, as Wichita and Reno). Make it 3 if Boise's 3 (495k) is the better guide.
2. **Airports:** Des Moines International and The Eastern Iowa Airport (Cedar Rapids), from memory over a million passengers a year each. Quad City International (Moline) belongs to Illinois.
3. **Stations off their Census points:**
   - At their downtowns: Des Moines, Council Bluffs, Davenport, Dubuque, Clinton.
   - Sioux City, on its north side, to stand 4.3 mi from South Sioux City.
   - Illinois's Rock Island County station should keep 4 mi from Davenport's downtown point (41.52, -90.58).
4. **Thirteen Mississippi bridges** are listed for Wisconsin and Illinois to match: Lansing, Marquette, Dubuque (two), Sabula, Clinton, Le Claire (I-80), Bettendorf (I-74), Davenport–Rock Island, Muscatine, Burlington, Fort Madison and Keokuk. The seven Missouri bridges repeat Nebraska's.
5. **Moderately known picks:** Maquoketa Caves (scenic, the brief's suggestion), Oelwein's railway history, and the bridge points marked "moderately known" or "approx." in the bridge table.
6. **Tough:** Centerville–Knoxville and Centerville–Colfax are blocked by Rathbun Lake. I found no well-known bridge or causeway over the lake to list.
