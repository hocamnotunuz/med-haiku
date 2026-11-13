# Nebraska (NE) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (42 regions, with both renames). The map and raw facts were rebuilt, and the pack (phase 2, below) is built on it.

Populations: `packs/NE/raw/counties.json` and `packs/NE/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 1,961,965). Every group is connected through `neighbors`, and I measured the shared border lengths on the rings in `map.js` (given in km below). Distances between towns are straight lines between their `places.json` points. Roads, rivers and railways named here are well known unless marked "(moderately known)".

### Recommended (93 → 42 regions)

```
merge: [
  ["Burt", "Washington"], ["Dakota", "Dixon", "Thurston"], ["Cedar", "Wayne"], ["Madison", "Pierce", "Stanton"],
  ["Cuming", "Dodge"], ["Colfax", "Platte"], ["Antelope", "Knox"], ["Boyd", "Holt"], ["Brown", "Keya Paha", "Rock"],
  ["Boone", "Nance"], ["Hamilton", "Merrick"], ["Polk", "York"], ["Saline", "Seward"], ["Butler", "Saunders"],
  ["Cass", "Otoe"], ["Johnson", "Nemaha"], ["Pawnee", "Richardson"], ["Gage", "Jefferson"], ["Fillmore", "Thayer"],
  ["Adams", "Clay"], ["Franklin", "Nuckolls", "Webster"], ["Harlan", "Kearney", "Phelps"], ["Frontier", "Furnas"],
  ["Dawson", "Gosper"], ["Dundy", "Hitchcock", "Red Willow"], ["Chase", "Hayes", "Perkins"],
  ["Lincoln", "Logan", "McPherson"], ["Arthur", "Garden", "Keith"], ["Cheyenne", "Deuel", "Kimball"],
  ["Banner", "Morrill", "Scotts Bluff"], ["Dawes", "Sheridan"], ["Box Butte", "Sioux"], ["Grant", "Hooker", "Thomas"],
  ["Blaine", "Custer", "Loup"], ["Garfield", "Valley", "Wheeler"], ["Greeley", "Howard", "Sherman"],
]
names: { "Lincoln-Logan-McPherson": "Logan-McPherson-Lincoln County", "Cheyenne-Deuel-Kimball": "Deuel-Kimball-Cheyenne County" }
```

The two names follow Colorado's "Kit Carson-Cheyenne County" and Idaho's "Valley-Boise County": "Lincoln-Logan-McPherson County" would read as the city of Lincoln (Lancaster County), and "Cheyenne-Deuel-Kimball County" as Cheyenne, Wyoming, whose region (Laramie) touches Kimball. The other automatic names clash with nothing. "Harlan-Kearney-Phelps" holds Kearney County (Minden), not the city of Kearney (Buffalo), but it does not start with it.

Alone, over 50k (5): **Douglas** (Omaha 491,870), **Lancaster** (Lincoln 291,138), **Sarpy** (Bellevue 65,068), **Hall** (Grand Island 53,139), **Buffalo** (Kearney 33,798; 50,084 people, just over the line).

Alone, under 50k (the one exception):
- **Cherry** 5,453 (Valentine 2,630). Nebraska's biggest county: 6,007 sq mi on the map, more than any group in this list (the largest is Logan-McPherson-Lincoln at 4,011). Each neighbour already anchors its own group, and its towns are far from Valentine: Springview 41 mi, Ainsworth 42, Mullen 63, Gordon 84. Joining Cherry to any of them makes a region of 8,000 sq mi or more, with the station at one end.

| Group (shared border) | Why | Main station | Population |
| --- | --- | --- | --- |
| Burt + Washington (27 km) | US-75 up the Missouri from Blair to Tekamah (17 mi) (moderately known) | Blair (7,793) | 27,586 |
| Dakota + Dixon + Thurston (35, 30 km) | Sioux City's Nebraska side: South Sioux City and Dakota City, Ponca on the Missouri (17 mi), and US-75/US-77 north through the Winnebago and Omaha reservations (Winnebago 16 mi, Pender 29) (moderately known) | South Sioux City (14,043) | 33,977 |
| Cedar + Wayne (29 km) | Wayne (Wayne State College) is the town for Laurel (14 mi), Randolph and Hartington (30 mi) | Wayne (5,972) | 18,079 |
| Madison + Pierce + Stanton (38, 39 km) | Norfolk, with Stanton (12 mi) and Pierce (13 mi) on US-275 and the Elkhorn | Norfolk (25,911) | 48,758 |
| Cuming + Dodge (29 km) | The Elkhorn valley and US-275 from Fremont through Scribner and Hooper to West Point (30 mi) and Wisner | Fremont (27,128) | 46,181 |
| Colfax + Platte (40 km) | US-30 and the Union Pacific along the Platte: Schuyler is 15 mi from Columbus | Columbus (24,029) | 44,875 |
| Antelope + Knox (38 km) | NE-14 north from Neligh (US-275) to Creighton (24 mi), Bloomfield, Verdigre and Niobrara on the Missouri (moderately known) | Neligh (1,536) | 14,685 |
| Boyd + Holt (85 km) | O'Neill, where US-20, US-275 and US-281 meet; US-281 runs north over the Niobrara to Spencer (29 mi) (moderately known) | O'Neill (3,580) | 11,930 |
| Brown + Keya Paha + Rock (47, 73, 37 km) | US-20 and the Cowboy Trail through Ainsworth, Long Pine and Bassett (16 mi), with Springview (20 mi) across the Niobrara (moderately known) | Ainsworth (1,613) | 4,927 |
| Boone + Nance (42 km) | Albion and St. Edward, with Fullerton (22 mi) and Genoa on the Loup; NE-14 (moderately known) | Albion (1,696) | 8,751 |
| Hamilton + Merrick (52 km) | Grand Island's east side, across the Platte: NE-14 from Aurora on I-80 to Central City (17 mi) on US-30 and the Union Pacific (moderately known) | Aurora (4,680) | 17,089 |
| Polk + York (38 km) | US-81 north from York to Stromsburg (17 mi) and Osceola (21 mi) | York (8,065) | 19,341 |
| Saline + Seward (38 km) | Lincoln's west side down the Big Blue: Seward, Milford and Crete (21 mi), Wilber (moderately known). I-80 at Seward, the BNSF and the Zephyr through Crete | Seward (7,644) | 32,375 |
| Butler + Saunders (45 km) | South of the Platte west of Omaha: Wahoo, Ashland (18 mi) and David City (27 mi) | Wahoo (4,816) | 30,655 |
| Cass + Otoe (53 km) | US-75 along the Missouri: Plattsmouth and Nebraska City (23 mi) (moderately known) | Nebraska City (7,218) | 42,514 |
| Johnson + Nemaha (29 km) | US-136 from Tecumseh to Auburn (18 mi) and the river at Brownville (moderately known) | Auburn (3,471) | 12,360 |
| Pawnee + Richardson (29 km) | The southeast corner: Falls City and Pawnee City (29 mi) | Falls City (4,139) | 10,417 |
| Gage + Jefferson (39 km) | Beatrice on the Big Blue and Fairbury on the Little Blue, 24 mi apart on US-136 (moderately known) | Beatrice (12,257) | 28,947 |
| Fillmore + Thayer (38 km) | US-81 from Geneva to Hebron (25 mi) | Geneva (2,137) | 10,592 |
| Adams + Clay (39 km) | Hastings with Clay Center (18 mi), Sutton and Harvard, on US-6 and the BNSF (moderately known) | Hastings (25,144) | 37,298 |
| Franklin + Nuckolls + Webster (39, 39 km) | The Republican valley down to Kansas: Franklin, Red Cloud and Superior (25 mi), on US-136 (moderately known) | Superior (1,822) | 10,384 |
| Harlan + Kearney + Phelps (38, 34 km) | Holdrege between Minden (22 mi; US-6/34 and the BNSF) and Alma (23 mi; US-183, Harlan County Lake) (moderately known) | Holdrege (5,515) | 18,730 |
| Frontier + Furnas (9 km) | Medicine Creek from Curtis and Harry Strunk Lake down to Cambridge, which lies about 4 mi south of that short border; then the Republican, US-6/34 and the BNSF through Arapahoe and Oxford (moderately known) | Cambridge (1,074) | 7,147 |
| Dawson + Gosper (29 km) | Lexington, with US-283 south to Elwood (14 mi) and Johnson Lake; Cozad and Gothenburg on I-80 and the Union Pacific (US-283 and the lake moderately known) | Lexington (10,662) | 26,004 |
| Dundy + Hitchcock + Red Willow (39, 39 km) | The upper Republican: US-34 and the BNSF west from McCook through Culbertson, Trenton and Stratton to Benkelman (50 mi) (moderately known) | McCook (7,428) | 14,970 |
| Chase + Hayes + Perkins (60, 39 km) | The high plains: NE-61 from Grant (23 mi) to Imperial, and Hayes Center (32 mi) (moderately known) | Imperial (2,065) | 7,610 |
| Lincoln + Logan + McPherson (39, 46 km) | North Platte and the empty Sandhills north of it: US-83 to Stapleton (28 mi), US-97 to Tryon (moderately known) | North Platte (23,405) | 35,792 |
| Arthur + Garden + Keith (48, 25 km) | Ogallala and Lake McConaughy: US-26 up the North Platte to Lewellen and Oshkosh (38 mi), NE-61 north to Arthur (31 mi) (roads moderately known) | Ogallala (4,874) | 10,630 |
| Cheyenne + Deuel + Kimball (24, 44 km) | I-80 and the Union Pacific's line to Cheyenne: Big Springs, Chappell, Sidney, Kimball (the railway moderately known) | Sidney (6,404) | 14,740 |
| Banner + Morrill + Scotts Bluff (57, 34 km) | The North Platte valley around Scottsbluff and Gering: US-26 to Bayard (19 mi), Chimney Rock and Bridgeport (32 mi). Banner is the tableland south of Gering, on NE-71 (moderately known) | Scottsbluff (14,444) | 41,332 |
| Dawes + Sheridan (64 km) | US-20 along the Pine Ridge: Chadron, Hay Springs (19 mi), Rushville (28) and Gordon (40) (moderately known) | Chadron (5,207) | 13,325 |
| Box Butte + Sioux (52 km) | Alliance and the upper Niobrara: Hemingford, Box Butte Reservoir, Agate Fossil Beds (moderately known). See the note below | Alliance (8,164) | 11,973 |
| Grant + Hooker + Thomas (39, 39 km) | NE-2 and the BNSF's Sandhills line: Thedford, Mullen (25 mi) and Hyannis (37 mi); the Dismal and Middle Loup rivers; the Nebraska National Forest at Halsey (moderately known) | Mullen (498) | 1,989 |
| Blaine + Custer + Loup (47, 39, 38 km) | Broken Bow, with NE-2 west through Anselmo to Dunning (38 mi) and the North Loup towns of Brewster and Taylor (29 mi) (moderately known) | Broken Bow (3,529) | 11,569 |
| Garfield + Valley + Wheeler (38, 39 km) | The North Loup at Ord and Burwell (17 mi), with Bartlett (27 mi) and Ericson on the Cedar (moderately known) | Ord (2,112) | 6,644 |
| Greeley + Howard + Sherman (38, 39 km) | Where the Loups meet at St. Paul: north to Greeley Center (23 mi) and Spalding, and up the Middle Loup to Loup City (27 mi) (moderately known) | St. Paul (2,416) | 11,618 |

Station rule: the largest place in places.json, as in Colorado and New Mexico. Close calls for phase 2:
- **Saline + Seward:** Seward 7,644 against Crete 7,587. Crete (19 mi from Lincoln, on the Zephyr's line) is as good a station.
- **Cass + Otoe:** Nebraska City 7,218 against Plattsmouth 6,601. Cass holds 63% of the people, and Plattsmouth is 20 mi from Omaha.
- **Franklin + Nuckolls + Webster:** Superior 1,822; Red Cloud (967, Willa Cather's town) is the better-known one.
- **Frontier + Furnas:** Cambridge 1,074; Arapahoe 998, Curtis 809. **Grant + Hooker + Thomas:** Mullen 498 (Thedford, on US-83, is the crossroads).

Box Butte + Sioux: Sioux's 1,131 people are split between Harrison (on US-20, 46 mi from Chadron, 65 from Alliance) and ranches south toward Mitchell and Scottsbluff. Box Butte is still the right home: with Dawes, Sheridan would go to Alliance (Hay Springs and Gordon are 41 and 59 mi from Alliance, 19 and 40 from Chadron); with Scotts Bluff, Morrill would leave the valley; and Box Butte cannot stay alone.

The corridors stay clean chains:
- **I-80:** Wyoming, Deuel-Kimball-Cheyenne, Arthur-Garden-Keith, Logan-McPherson-Lincoln, Dawson-Gosper, Buffalo, Hall, Hamilton-Merrick, Polk-York, Saline-Seward, Lancaster, Cass-Otoe, Sarpy, Douglas.
- **Union Pacific main line:** Douglas, Cuming-Dodge (Fremont), Colfax-Platte (Schuyler, Columbus), Hamilton-Merrick (Central City), Hall, Buffalo, Dawson-Gosper, Logan-McPherson-Lincoln (North Platte), Arthur-Garden-Keith (Ogallala), then Colorado, and back in through Deuel to Sidney and Kimball.
- **BNSF / California Zephyr:** Lancaster, Saline-Seward (Crete), Fillmore-Thayer, Adams-Clay (Hastings), Harlan-Kearney-Phelps (Holdrege), Frontier-Furnas, Dundy-Hitchcock-Red Willow (McCook), then Colorado (towns between the Zephyr's stops moderately known).
- **US-81:** Kansas, Fillmore-Thayer, Polk-York, Colfax-Platte, Madison-Pierce-Stanton. **US-275:** Douglas, Cuming-Dodge, Madison-Pierce-Stanton, Antelope-Knox, Boyd-Holt.
- **US-75 and the Missouri:** Dakota-Dixon-Thurston, Burt-Washington, Douglas, Sarpy, Cass-Otoe, Johnson-Nemaha, Pawnee-Richardson.
- **US-20:** Box Butte-Sioux (Harrison), Dawes-Sheridan, Cherry, Brown-Keya Paha-Rock, Boyd-Holt, then east to South Sioux City.
- **The Republican:** Dundy-Hitchcock-Red Willow, Frontier-Furnas, Harlan-Kearney-Phelps (Alma), Franklin-Nuckolls-Webster. **The North Platte:** Banner-Morrill-Scotts Bluff, Arthur-Garden-Keith.
- **NE-2 / BNSF Sandhills line:** Hall, Buffalo (Ravenna), Greeley-Howard-Sherman (Litchfield), Blaine-Custer-Loup, Grant-Hooker-Thomas, Dawes-Sheridan (its Sandhills south), Box Butte-Sioux (Alliance) (moderately known).

Rejected:
- Cherry merged, for no exception: `["Cherry", "Keya Paha"]` with `["Brown", "Rock"]` (same count) puts Springview with Valentine (41 mi) instead of Ainsworth and Bassett (20 mi). `["Brown", "Cherry", "Keya Paha"]` with `["Boyd", "Holt", "Rock"]` (41 regions) splits Ainsworth and Bassett, 16 mi apart, and Ainsworth loses its station.
- `["Box Butte", "Dawes", "Sheridan"]` (Alliance): Chadron (5,207) loses its station. `["Box Butte", "Sheridan"]` with `["Dawes", "Sioux"]`: 5,125 people go to the farther town instead of Sioux's 1,131.
- `["Banner", "Scotts Bluff", "Sioux"]` with `["Box Butte", "Morrill"]`: splits the North Platte valley (Bayard is 19 mi from Scottsbluff, and Chimney Rock is in Morrill).
- `["Dawson", "Frontier", "Gosper"]`, `["Furnas", "Harlan"]`, `["Kearney", "Phelps"]` (same count, and no merge on a 9 km border): Alma is 44 mi from Cambridge but 23 from Holdrege, and Curtis is 41 mi from Lexington.
- `["Dodge", "Saunders"]` (Wahoo is 17 mi from Fremont): a 59,500-person region of two good-sized counties, and it pushes Cuming to Stanton and breaks the Norfolk group.
- `["Seward", "York"]` on I-80: two equal towns 26 mi apart; Seward loses its station.
- Dixon with Wayne (Wakefield is 8 mi from Wayne): Ponca and most of Dixon look to South Sioux City (17 mi).
- `["Cedar", "Knox"]` (Lewis and Clark Lake) with `["Antelope", "Boone"]`, `["Merrick", "Nance"]` and `["Hamilton", "Polk", "York"]`: the same count, but Aurora (4,680) and Neligh lose their stations to York and Albion.

### Alternative (42 regions)

Replace the seven southeast groups `["Saline", "Seward"]`, `["Butler", "Saunders"]`, `["Cass", "Otoe"]`, `["Johnson", "Nemaha"]`, `["Pawnee", "Richardson"]`, `["Gage", "Jefferson"]`, `["Fillmore", "Thayer"]` with `["Butler", "Seward"]` (Seward, 25,982), `["Cass", "Saunders"]` (Plattsmouth, 48,885), `["Johnson", "Otoe"]` (Nebraska City, 21,197), `["Nemaha", "Richardson"]` (Falls City, 14,945), `["Gage", "Pawnee"]` (Beatrice, 24,252), `["Fillmore", "Saline"]` (Crete, 20,326) and `["Jefferson", "Thayer"]` (Fairbury, 12,273).
- Pro: Plattsmouth (6,601), Crete (7,587) and Fairbury (3,965) keep stations instead of Wahoo (4,816), Auburn (3,471) and Geneva (2,137).
- Con: looser links. Plattsmouth is 40 mi from Wahoo, and Cass and Saunders meet for only 14 km, south of Ashland. Geneva is 34 mi from Crete. Tecumseh is 27 mi from Nebraska City but 18 from Auburn.

### Map and data check

1. **The map looks right.** All 93 counties are one piece each, and every label is inside its county. County areas add up to about 77,375 sq mi, which matches Nebraska's total. All 593 places lie inside their tagged county.
2. **Neighbours agree both ways** with the `wy-` regions (Converse-Niobrara, Goshen-Platte, Laramie), the `sd-` regions (Bennett-Oglala Lakota, Bon Homme-Yankton, Charles Mix-Douglas, Clay-Union, Custer-Fall River, Gregory-Tripp, Mellette-Todd) and the `co-` regions (Logan-Phillips-Sedgwick, Morgan-Washington-Yuma, Weld). None is missing. East of Boyd the South Dakota line is the Missouri, so Knox, Cedar, Dixon and Dakota touch South Dakota across the river (a phase 2 matter for bridges). The 16 "coast" lines are the Kansas line along 40°N and the Missouri below Sioux City (Iowa and Missouri), states not yet in the game.
3. **Corner contacts** (survey-grid offsets): 0 km (a point) for Butler–Dodge, Clay–Webster, Deuel–Perkins, Fillmore–Nuckolls and Howard–Nance; 1–2 km for Adams–Buffalo, Adams–Hamilton, Arthur–Hooker, Blaine–Logan, Brown–Loup, Buffalo–Howard, Custer–Garfield, Dundy–Hayes, Frontier–Hitchcock, Furnas–Phelps, Greeley–Sherman, Holt–Loup, Morrill–Sheridan and Valley–Wheeler. Only Frontier–Furnas (9 km) carries a merge on its own, and Cambridge sits right below it. Valley–Wheeler, Greeley–Sherman, Hayes–Perkins (8 km) and Dixon–Thurston (10 km) lie inside groups that a third county links.
4. **Places:** 527 of the 593 have populations; the 65 CDPs have none. So Banner (Harrisburg) and McPherson (Tryon) have no place with a population, and both merge. Odd names: "Howard City (Boelus)" is the Census name of the village known as Boelus; "Greeley Center" is the county seat usually called Greeley (moderately known); Monowi has population 0 (the famous one-person village). Wakefield (8 mi from Wayne) and Emerson sit on county lines and are tagged Dixon, which puts them with South Sioux City. Names to watch in phase 2: the town of Grant is in Perkins (Chase-Hayes-Perkins), not in Grant County; the town of Madison is in the Norfolk group; Lincoln and Kearney counties hold North Platte and Minden, not the cities of those names.

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/NE/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` points rounded to 2 decimals, except Omaha's station (downtown) and the scenic places that aren't towns.
- **Facts added by hand** (bridges, scenic places, the airport, roads, rivers and railways) are well known unless marked "moderately known". A point marked "approx." is one I gave from memory, within about a mile.
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough (`NR.runtime.geoLevel`). The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain (so South Dakota's, Wyoming's and Colorado's places and bridges count too).

### Start

`start: ["ne-douglas", "ne-sarpy", "ne-burt-washington"]`: Omaha, Bellevue and Blair. Sarpy and Burt-Washington both touch Douglas (34 and 33 km).
- **Types:** metro, metro and farm. Bellevue stays metro: Sarpy is Omaha's suburbs (Bellevue, Papillion, La Vista, Gretna), with no farm or hill country to type it by, as Colorado types Lakewood or South Dakota types Harrisburg.
- **First track:** the nearest pair of different types is Omaha–Blair (22 mi crow, 25 mi of track; Omaha–Bellevue is 7 mi but two metros). It is flat and crosses no river (the line stays west of the Missouri). The pack test laid it, and 21–22 passengers arrived in the week (two runs).
- **Considered:** Douglas + Sarpy + Butler-Saunders (all three touch each other). Its first track would be Omaha–Wahoo, 36 mi across the Elkhorn and the Platte with two new river bridges. Blair is closer and on the Missouri side, so I took Burt-Washington.

### Main stations (42)

Each id is unused in every other pack (the checker checks). BLV, NPL, FMT, MCK, ALN, SNY, STP, YRK, SEW, WAH, AUB, SUP, CBG, ALB, AUR, WYN and COL were taken, so some ids have four letters (BELV, NPLT, FRMT, MCCK, ALLI, SIDN, STPA, YORK, WAHO, AUBN, SUPR, CAMB, ALBN, AURO, WAYN, COLU). ORD (Chicago's airport code) is left free: Ord is ORDN. Airport codes are used where they read well (OMA, LNK, GRI, HSI, OGA, CDR, VTN, ONL, BBW, IML, HDE, ANW, LXN).

**Every station is at its region's biggest place** (no exceptions). Close calls from phase 1: Seward (7,644) over Crete (7,587), Nebraska City (7,218) over Plattsmouth (6,601), Superior (1,822) over Red Cloud (967), Cambridge (1,074) over Arapahoe (998), Mullen (498) over Thedford (210). The runners-up are towns.

**Points:** every station is at its Census point except **Omaha**, moved to downtown (41.26, -95.94: the Old Market and the riverfront). The Census point (41.26, -96.05) is 5.9 mi west, out by 72nd Street. I compared the other cities' points with their downtowns (from memory): all are within about 2 mi (Bellevue 1.9 from Olde Towne, Lincoln 1.2 from the Capitol, Grand Island 1.0; Norfolk, Hastings, Kearney, Fremont, Columbus, North Platte, Scottsbluff and South Sioux City under 1). None needed moving.

**Sizes** follow the PACKS.md guide and the neighbours: **4** Omaha (585k; Spokane 539k and Reno 486k are 4), **3** Lincoln (323k; Boulder 331k, Eugene 383k), **2** Bellevue (191k) and Grand Island (63k; Minot 70k, Harrisburg 65k), **1** the rest (Buffalo 50k is 1, as Aberdeen 45k and Gillette).

**Types.** Nebraska is farm country: 33 stations are farm. Metro (9): Omaha, Bellevue, Lincoln, Grand Island, Kearney (the University of Nebraska at Kearney), Norfolk (the northeast's city), South Sioux City (the Nebraska side of Sioux City, as South Dakota's North Sioux City), North Platte (the railroad city, Bailey Yard) and Scottsbluff (the Panhandle's city). The west needs North Platte and Scottsbluff as metros: otherwise every station from Lexington to Wyoming would be farm and the lines between them would carry no riders. Fremont (27k), Hastings (25k) and Columbus (24k) stay farm: each sits next to a metro (Omaha, Grand Island, Norfolk) and amid farms, so their lines have riders both ways.

| Station (id) | Region, pop | Type, size | Why |
| --- | --- | --- | --- |
| Omaha (OMA) | Douglas, 585k | metro 4, **airport** | Biggest (491,870). Downtown (above). Eppley Airfield |
| Bellevue (BELV) | Sarpy, 191k | metro 2 | Biggest (65,068). Offutt Air Force Base |
| Lincoln (LNK) | Lancaster, 323k | metro 3 | The capital (291,138); the University of Nebraska |
| Blair (BLR) | Burt-Washington, 28k | farm 1 | Biggest (7,793). US-75 up the Missouri |
| Wahoo (WAHO) | Butler-Saunders, 31k | farm 1 | Biggest (4,816) |
| Fremont (FRMT) | Cuming-Dodge, 46k | farm 1 | Biggest (27,128). On the Platte, the Union Pacific and US-30/275 |
| Seward (SWD) | Saline-Seward, 32k | farm 1 | Biggest (7,644). I-80 and the Big Blue |
| Nebraska City (NEBC) | Cass-Otoe, 43k | farm 1, **scenic** | Biggest (7,218). Arbor Day's home: Arbor Lodge and the Arbor Day Farm |
| Auburn (AUBN) | Johnson-Nemaha, 12k | farm 1 | Biggest (3,471) |
| Falls City (FCY) | Pawnee-Richardson, 10k | farm 1 | Biggest (4,139) |
| Beatrice (BEA) | Gage-Jefferson, 29k | farm 1 | Biggest (12,257). The Big Blue and US-77 |
| Columbus (COLU) | Colfax-Platte, 45k | farm 1 | Biggest (24,029). Where the Loup meets the Platte; US-30, US-81, the Union Pacific |
| York (YORK) | Polk-York, 19k | farm 1 | Biggest (8,065). I-80 and US-81 |
| Aurora (AURO) | Hamilton-Merrick, 17k | farm 1 | Biggest (4,680) |
| Grand Island (GRI) | Hall, 63k | metro 2 | Biggest (53,139). Nebraska's fourth city |
| Hastings (HSI) | Adams-Clay, 37k | farm 1 | Biggest (25,144). The California Zephyr's stop |
| Geneva (GENV) | Fillmore-Thayer, 11k | farm 1 | Biggest (2,137). US-81 |
| Norfolk (NFK) | Madison-Pierce-Stanton, 49k | metro 1 | Biggest (25,911). Northeast Nebraska's city, on the Elkhorn |
| South Sioux City (SSC) | Dakota-Dixon-Thurston, 34k | metro 1 | Biggest (14,043). Across the Missouri from Sioux City |
| Wayne (WAYN) | Cedar-Wayne, 18k | farm 1 | Biggest (5,972). Wayne State College |
| Neligh (NLG) | Antelope-Knox, 15k | farm 1 | Biggest (1,536). On the Elkhorn |
| Albion (ALBN) | Boone-Nance, 9k | farm 1 | Biggest (1,696) |
| Kearney (KRN) | Buffalo, 50k | metro 1, **scenic** | Biggest (33,798). The Great Platte River Road Archway spans I-80 at its east edge |
| Holdrege (HDE) | Harlan-Kearney-Phelps, 19k | farm 1 | Biggest (5,515). The Zephyr's stop |
| Superior (SUPR) | Franklin-Nuckolls-Webster, 10k | farm 1 | Biggest (1,822). On the Republican |
| Lexington (LXN) | Dawson-Gosper, 26k | farm 1 | Biggest (10,662). I-80 and the Union Pacific |
| Cambridge (CAMB) | Frontier-Furnas, 7k | farm 1 | Biggest (1,074) |
| St. Paul (STPA) | Greeley-Howard-Sherman, 12k | farm 1 | Biggest (2,416) |
| Ord (ORDN) | Garfield-Valley-Wheeler, 7k | farm 1 | Biggest (2,112) |
| Broken Bow (BBW) | Blaine-Custer-Loup, 12k | farm 1 | Biggest (3,529). NE-2 and the BNSF where the Sandhills begin |
| O'Neill (ONL) | Boyd-Holt, 12k | farm 1 | Biggest (3,580) |
| Ainsworth (ANW) | Brown-Keya Paha-Rock, 5k | farm 1 | Biggest (1,613) |
| North Platte (NPLT) | Logan-McPherson-Lincoln, 36k | metro 1 | Biggest (23,405). The Union Pacific's Bailey Yard |
| McCook (MCCK) | Dundy-Hitchcock-Red Willow, 15k | farm 1 | Biggest (7,428). The Zephyr's stop |
| Imperial (IML) | Chase-Hayes-Perkins, 8k | farm 1 | Biggest (2,065) |
| Ogallala (OGA) | Arthur-Garden-Keith, 11k | farm 1 | Biggest (4,874) |
| Sidney (SIDN) | Deuel-Kimball-Cheyenne, 15k | farm 1 | Biggest (6,404) |
| Scottsbluff (SBF) | Banner-Morrill-Scotts Bluff, 41k | metro 1 | Biggest (14,444; Gering 8,623 across the river) |
| Alliance (ALLI) | Box Butte-Sioux, 12k | farm 1, **scenic** | Biggest (8,164). The BNSF's coal-train town. Carhenge, 3 mi north |
| Chadron (CDR) | Dawes-Sheridan, 13k | farm 1 | Biggest (5,207). Chadron State College |
| Valentine (VTN) | Cherry, 5k | farm 1 | Biggest (2,630). The Niobrara; US-20 and US-83 |
| Mullen (MUL) | Grant-Hooker-Thomas, 2k | farm 1 | Biggest (498). NE-2 and the BNSF |

**Airport: Eppley Airfield (Omaha) only.** It is Nebraska's busiest airport, far over the bar of about 1 million passengers a year (about 4–5 million, from memory). **Left out:** Lincoln Airport and the small regional airports (Grand Island, Kearney, North Platte, Scottsbluff), all well under the bar. If the main agent wants Lincoln, add `airport: "Lincoln Airport"` to LNK.

**No ports.** The Missouri carries barges, but no Nebraska river terminal is a major port.

**Scenic stations:** Nebraska City (Arbor Lodge State Historical Park and the Arbor Day Farm are on its west side, about 1 mi from the point), Kearney (the Archway, about 4 mi east of the point, over I-80) and Alliance (Carhenge, the car replica of Stonehenge, about 3 mi north on US-385). Each is too close to its town to be a separate place (the checker warns under 4 mi), so the town carries the flag, as South Dakota does with Mitchell's Corn Palace.

### Towns (68: 60 towns and 8 scenic places)

About 1.6 per region. Every town is inside its region. The checker's one spacing warning is below. The next closest pairs are Beatrice–Homestead (4.4 mi), Ralston–Papillion (4.6), Gibbon–Rowe Sanctuary (5.9), Ogallala–Lake McConaughy (6.1), Papillion–Gretna (6.3) and Omaha–Ralston (6.7). Populations are from `places.json`. Types are farm unless noted.

| Region | Towns |
| --- | --- |
| Douglas | Ralston (6,488, an Omaha suburb, metro); Valley (3,038, on the Platte and the Union Pacific) |
| Sarpy | Papillion (24,168, metro, size 2 like Colorado's suburbs); Gretna (9,255, where I-80 crosses the Platte, metro) |
| Lancaster | Waverly (4,277, metro); Hickman (2,602) |
| Burt-Washington | Tekamah (1,714) |
| Butler-Saunders | David City (3,005); Ashland (3,079, on I-80 by the Platte) |
| Cuming-Dodge | West Point (3,503, on the Elkhorn) |
| Saline-Seward | Crete (7,587, Doane University, the Zephyr's line); Wilber (1,979) |
| Cass-Otoe | Plattsmouth (6,601); Syracuse (1,938) |
| Johnson-Nemaha | Tecumseh (1,701) |
| Pawnee-Richardson | Pawnee City (867) |
| Gage-Jefferson | Fairbury (3,965); **Homestead National Historical Park** (scenic) |
| Colfax-Platte | Schuyler (6,545) |
| Polk-York | Stromsburg (1,149, US-81) |
| Hamilton-Merrick | Central City (3,027, US-30 and the Union Pacific) |
| Hall | Wood River (1,179) |
| Adams-Clay | Sutton (1,448) |
| Fillmore-Thayer | Hebron (1,457, US-81) |
| Madison-Pierce-Stanton | Madison (2,281); Pierce (1,847) |
| Dakota-Dixon-Thurston | Wakefield (1,527); Winnebago (921, the Winnebago Tribe's town) |
| Cedar-Wayne | Hartington (1,515) |
| Antelope-Knox | Creighton (1,151); Crofton (756, across Lewis and Clark Lake from Yankton) |
| Boone-Nance | Fullerton (1,253) |
| Buffalo | Gibbon (1,880); **Rowe Sanctuary** (scenic) |
| Harlan-Kearney-Phelps | Minden (3,121); Alma (1,037, on Harlan County Lake) |
| Franklin-Nuckolls-Webster | Red Cloud (967, Willa Cather's hometown) |
| Dawson-Gosper | Cozad (3,991); Gothenburg (3,486) |
| Frontier-Furnas | Curtis (809) |
| Greeley-Howard-Sherman | Loup City (1,052) |
| Garfield-Valley-Wheeler | Burwell (1,091) |
| Blaine-Custer-Loup | Arnold (593); Taylor (142) |
| Boyd-Holt | Atkinson (1,308); Spencer (406, US-281 north of the Niobrara) |
| Brown-Keya Paha-Rock | Bassett (541); Springview (236) |
| Logan-McPherson-Lincoln | Sutherland (1,306); Stapleton (269, US-83) |
| Dundy-Hitchcock-Red Willow | Benkelman (822); Trenton (514) |
| Chase-Hayes-Perkins | Grant (1,193; Perkins County's seat, not in Grant County) |
| Arthur-Garden-Keith | Oshkosh (811); **Lake McConaughy** (scenic, coast) |
| Deuel-Kimball-Cheyenne | Kimball (2,293); Chappell (841) |
| Banner-Morrill-Scotts Bluff | Bridgeport (1,463); **Chimney Rock** and **Scotts Bluff National Monument** (scenic, desert) |
| Box Butte-Sioux | Harrison (236, desert); **Toadstool Geologic Park** (scenic, desert) |
| Dawes-Sheridan | Gordon (1,506); **Fort Robinson** (scenic, mountain) |
| Cherry | Cody (165, US-20 west); **Smith Falls** (scenic) |
| Grant-Hooker-Thomas | Thedford (210, where US-83 meets NE-2); Hyannis (162) |

**Left out on purpose:** Gering (8,623) is 2.8 mi from Scottsbluff across the North Platte; the monument stands for it. La Vista (16,749) is 3 mi from Papillion. Crawford (842) is 2.6 mi from Fort Robinson. Dakota City (2,085) is 2.8 mi from South Sioux City.

**Scenic places (8)** (points approx., at the landmark or visitor center):

| Place | Point | Why it is well known |
| --- | --- | --- |
| Chimney Rock | 41.70, -103.35 | The Oregon Trail's best-known landmark (a National Historic Site), south of Bayard. Desert: an eroded clay-and-sandstone spire on the dry bluffs |
| Scotts Bluff National Monument | 41.83, -103.71 | The bluff over Gering and Mitchell Pass on the Oregon Trail (National Park Service). Desert, as Chimney Rock |
| Toadstool Geologic Park | 42.86, -103.58 | "Nebraska's badlands" in the Oglala National Grassland, northwest of Crawford (moderately known). Desert, as South Dakota's Badlands |
| Fort Robinson | 42.67, -103.47 | Fort Robinson State Park, the old Army post where Crazy Horse was killed, among the Pine Ridge's pine-covered buttes west of Crawford. Mountain, by its buttes (a judgment call; farm would also do) |
| Smith Falls | 42.89, -100.31 | Smith Falls State Park, Nebraska's highest waterfall, on the Niobrara National Scenic River east of Valentine (the river's canoeing stretch) |
| Lake McConaughy | 41.21, -101.67 | Nebraska's biggest lake (the reservoir behind Kingsley Dam), known for its white-sand beaches. At the visitor center by the dam, on land. Coast, as Manitoba types Gimli on Lake Winnipeg |
| Rowe Sanctuary | 40.67, -98.89 | Audubon's Rowe Sanctuary on the Platte south of Gibbon, the best-known place to watch the sandhill crane migration (half a million cranes each March). The map puts the point in Buffalo County |
| Homestead National Historical Park | 40.29, -96.83 | The National Park Service site of one of the first Homestead Act claims, about 4 mi west of Beatrice on NE-4 |

**Considered and left out:** the Great Platte River Road Archway (carried by Kearney, above), Carhenge (Alliance), Arbor Lodge (Nebraska City), Agate Fossil Beds and Ash Hollow (less well known), Omaha's Henry Doorly Zoo (inside the city, under 4 mi from the station), and the Buffalo Bill Ranch and Golden Spike Tower at North Platte (too close to the station, and less well known).

### Passes (0) and bridges (44)

**No passes.** Nebraska's map has no mountain cells: 11,878 flat and 2 hill cells (the Wildcat Hills south of Gering, and the bluffs by Harlan County Dam). No link needs a pass, and the Pine Ridge and the Wildcat Hills are hills.

**Rivers on the map:** the Missouri (the whole Iowa and South Dakota line), the Platte (from about 25 mi east of North Platte), the North Platte and the South Platte (the map joins them at about 100.3°W, not at North Platte), the Loup (St. Paul to Columbus only), the Elkhorn, the Big Blue, the Republican, the Niobrara, the White and the Beaver (mostly in Kansas). There is no Little Blue and no North or Middle Loup. **Lakes:** Lake McConaughy and Harlan County Reservoir.

The checker gives no bridge warnings: every bridge is within 3 mi of a river or lake on the map. Each sits on the map's river where it passes the town, near the town's real crossing as far as I know (exceptions noted). "Uses" lists the shorter links (up to 45 mi) whose river crossing is within 2 mi of the bridge, in Gentle.

| Bridge | Point | Source | Uses |
| --- | --- | --- | --- |
| Missouri River bridges (Omaha–Council Bluffs: I-480 and the Union Pacific) | 41.26, -95.92 | Downtown Omaha's I-480 bridge and the Union Pacific's bridge to Council Bluffs | For Iowa later |
| Missouri River bridge (I-80, Omaha–Council Bluffs) | 41.23, -95.92 | I-80 crosses the Missouri south of downtown | For Iowa later |
| Missouri River bridges (Plattsmouth: US-34 and the BNSF) | 41.01, -95.87 | The US-34 bridge and the BNSF bridge (the Burlington's old main line) at Plattsmouth (moderately known) | For Iowa later |
| Missouri River bridge (Nebraska City) | 40.68, -95.84 | NE-2 / IA-2 at Nebraska City | For Iowa later |
| Missouri River bridge (US-30, Blair) | 41.55, -96.08 | US-30 crosses the Missouri east of Blair | For Iowa later |
| Missouri River bridge (Decatur) | 42.02, -96.22 | The Decatur bridge to Onawa, Iowa (moderately known). On the map's river, 1 mi from the town | For Iowa later |
| Missouri River bridges (South Sioux City–Sioux City) | 42.48, -96.39 | US-20/US-75 and I-129 bridges between the two cities | For Iowa later |
| Chief Standing Bear Memorial Bridge (Niobrara) | 42.79, -97.97 | NE-14/SD-37 over the Missouri between Niobrara and Springfield, South Dakota, opened 1998 (moderately known) | Nothing yet: Niobrara is not a town here, and Crofton–Springfield crosses 7 mi east of it (a new bridge). For lines from western Knox County |
| Platte River bridge (I-80, Ashland) | 41.06, -96.30 | I-80 crosses the Platte between Gretna and Ashland (Mahoney State Park) | 12, among them Omaha–Waverly, Lincoln–Ralston, Gretna–Lincoln, Omaha–Ashland |
| Elkhorn River bridge (Waterloo) | 41.29, -96.28 | US-275 and the Union Pacific cross the Elkhorn at Waterloo, west of Omaha (moderately known) | Omaha–Valley, Fremont–Papillion |
| Elkhorn River bridge (US-30, Arlington) | 41.47, -96.39 | US-30 crosses the Elkhorn between Arlington and Fremont (moderately known) | Blair–Fremont |
| Platte River bridge (US-77, Fremont) | 41.41, -96.50 | US-77 south from Fremont toward Wahoo and Lincoln | Fremont–Lincoln, Fremont–Wahoo, Ashland–Fremont |
| Platte River bridge (US-81, Columbus) | 41.39, -97.37 | US-81 south from Columbus | Columbus–York, Columbus–Stromsburg |
| Loup River bridge (US-81, Columbus) | 41.41, -97.36 | US-81 crosses the Loup at Columbus's south edge | Columbus–Seward, Columbus–York |
| Loup River bridge (NE-14, Fullerton) | 41.34, -97.99 | NE-14 south from Fullerton (moderately known) | Aurora–Fullerton, Albion–Central City, Fullerton–Grand Island |
| Platte River bridge (NE-14, Central City) | 41.07, -98.00 | NE-14 south from Central City to Aurora (moderately known) | Aurora–Central City, Central City–Sutton |
| Platte River bridge (US-281, Grand Island) | 40.82, -98.37 | US-281 south from Grand Island to I-80 | Grand Island–Hastings |
| Platte River bridge (US-34, Grand Island–Aurora) | 40.90, -98.26 | US-34 east from Grand Island (moderately known) | Aurora–Grand Island, Grand Island–York |
| Platte River bridge (Kearney) | 40.67, -99.08 | 2nd Avenue, from downtown Kearney to I-80 | Kearney–Holdrege, Kearney–Minden, Kearney–Alma |
| Platte River bridge (US-283, Lexington) | 40.74, -99.73 | US-283 south from Lexington to I-80 | Holdrege–Lexington |
| Platte River bridge (Gothenburg) | 40.92, -100.16 | From Gothenburg to I-80 | Gothenburg–North Platte, Cambridge–Gothenburg, Curtis–Gothenburg |
| South Platte River bridge (US-83, North Platte) | 41.14, -100.75 | US-83 south from downtown to I-80 | North Platte–Stapleton, Arnold–North Platte |
| North Platte River bridge (US-83, North Platte) | 41.19, -100.74 | US-83 north from downtown. On the map's river, which runs 2 mi north of the real one | North Platte–Stapleton |
| South Platte River bridge (NE-61, Ogallala) | 41.12, -101.72 | NE-61 south from Ogallala to I-80 | Ogallala–Imperial, Ogallala–Grant |
| Kingsley Dam (NE-61) | 41.22, -101.67 | NE-61 runs across Kingsley Dam, which holds Lake McConaughy (moderately known) | **Opens in Tough:** Ogallala–Hyannis (NE-61 north) and Alliance–Lake McConaughy. Also used by Lake McConaughy–Mullen |
| North Platte River bridge (NE-27, Oshkosh) | 41.40, -102.34 | NE-27 south from Oshkosh toward Chappell (moderately known) | Ogallala–Oshkosh, Oshkosh–Sidney, Oshkosh–Julesburg, Chappell–Oshkosh |
| North Platte River bridge (US-385, Bridgeport) | 41.69, -103.10 | US-385 north from Bridgeport (moderately known) | Alliance–Bridgeport |
| North Platte River bridges (Scottsbluff–Gering) | 41.87, -103.66 | Broadway / NE-71 between the twin cities | Scottsbluff–Kimball, –Bridgeport, –Chimney Rock, –Scotts Bluff, –Torrington |
| Elkhorn River bridge (West Point) | 41.83, -96.73 | West Point sits on the Elkhorn | Columbus–West Point, Norfolk–West Point |
| Elkhorn River bridges (Norfolk) | 42.00, -97.43 | Norfolk sits on the Elkhorn (US-81 crosses it south of downtown) | Columbus–Norfolk, Albion–Norfolk |
| Elkhorn River bridge (Neligh) | 42.12, -98.04 | Neligh sits on the Elkhorn (the Neligh Mill) | Albion–Neligh |
| Big Blue River bridge (Stromsburg) | 41.10, -97.59 | US-81 at Stromsburg, on the Big Blue (moderately known) | York–Stromsburg, Geneva–Stromsburg |
| Big Blue River bridge (Seward) | 40.91, -97.09 | Seward sits on the Big Blue | Lincoln–Seward and 7 more |
| Big Blue River bridge (Crete) | 40.62, -96.96 | Crete sits on the Big Blue | Crete–York, Crete–Geneva, Crete–Fairbury |
| Big Blue River bridge (Beatrice) | 40.27, -96.75 | Beatrice sits on the Big Blue | Beatrice–Fairbury, Beatrice–Homestead, Beatrice–Hebron |
| Republican River bridge (US-83, McCook) | 40.21, -100.62 | US-83 south from McCook | Curtis–McCook; Kansas later |
| Republican River bridge (Cambridge) | 40.30, -100.17 | The road south from Cambridge (moderately known) | Cambridge–Lexington, –Gothenburg, –Curtis |
| Republican River bridge (US-183, Alma) | 40.11, -99.37 | US-183 at Alma, at the head of Harlan County Lake | Alma–Kearney, Alma–Holdrege, Alma–Minden |
| Republican River bridge (US-281, Red Cloud) | 40.08, -98.52 | US-281 south from Red Cloud | Kansas later |
| Republican River bridge (NE-14, Superior) | 40.03, -98.06 | NE-14 at Superior (moderately known) | Hastings–Superior, Geneva–Superior, Hebron–Superior |
| Niobrara River bridge (US-83, Valentine) | 42.85, -100.53 | US-83 south from Valentine | Ainsworth–Valentine, Broken Bow–Valentine, Mullen–Valentine |
| Niobrara River bridge (US-281, Spencer) | 42.81, -98.69 | US-281 at the Spencer Dam (moderately known) | O'Neill–Spencer |
| Niobrara River bridge (US-385, Alliance–Chadron) | 42.46, -102.94 | US-385 crosses the Niobrara between Alliance and Chadron (the road certainly crosses it; moderately known) | Alliance–Chadron |
| White River bridge (US-20, Crawford) | 42.67, -103.45 | US-20 along the White River at Crawford and Fort Robinson (moderately known). On the map's river between the two | Chadron–Fort Robinson, Fort Robinson–Scottsbluff, Alliance–Fort Robinson |

**Map quirks (not real crossings, so no bridge):**
- **The Platte forks:** the map joins the North and South Platte about 25 mi east of North Platte, so Lexington–North Platte crosses the "South Platte" near Maxwell and pays one new river bridge.
- **The Missouri below South Sioux City:** the map's river bends west of Dakota City, so South Sioux City's lines south (to Blair, Tekamah) pay one new Missouri bridge, though the real roads stay in Nebraska.
- **Omaha–Fremont** crosses the map's Elkhorn 6 mi north of Waterloo and pays one new bridge.
- **Elsewhere,** longer lines cross the map's wiggling rivers away from towns and pay for new bridges (cost only: a river never blocks track). Examples: Ogallala–Scottsbluff crosses the North Platte at Bayard and Minatare, and Chadron–Valentine crosses the Niobrara twice.
- **Not added:** Harlan County Dam (no link needs it), the Brownville (US-136) and Rulo bridges into Missouri, and the Bellevue bridge (Iowa and Missouri later). A bridge at Bayard (NE-92 to Chimney Rock) was left out: Scottsbluff–Chimney Rock crosses at Scottsbluff.

### How the map plays

**Counts.** Of the 2,341 pairs of places (at least one in Nebraska) within 100 mi of each other:
- **Gentle:** none are blocked.
- **Tough:** 9 are blocked. Eight are Nebraska towns to South Dakota towns across Lake Francis Case, away from its bridges: Platte, Plankinton, Woonsocket and Wessington Springs from Spencer, and Platte from O'Neill, Neligh and Atkinson, plus Springview–Parkston. The real roads cross at Fort Randall Dam, which is open: Spencer–Pickstown, and O'Neill–Plankinton over the dam. The ninth is Grant–Hyannis (80 mi), across Lake McConaughy about 4 mi west of Kingsley Dam (just past the 3-mi reach of a bridge in Tough). Grant–Ogallala–Hyannis is open.
- With links up to 100 mi, every Nebraska place is in one network in both modes. The fewest open links any place has is 20 (Scotts Bluff National Monument, in the corner by Wyoming).

**Main stations.** Every main station reaches every neighbouring main station directly, in both modes, with one exception. **Chadron–Ogallala** (135 mi; Garden and Sheridan touch) is blocked in Tough: it crosses Lake McConaughy away from the dam. Ogallala reaches Chadron's region by Oshkosh, Alliance or Mullen. The fewest neighbouring main stations is Falls City's 2 (Auburn, Beatrice): Kansas and Missouri are not in the game yet. Others in other states reached directly (all open in both modes):
- **South Dakota:** Vermillion (from South Sioux City and Wayne); Yankton (from Wayne and Neligh); Wagner (from Neligh and O'Neill); Winner (from O'Neill and Ainsworth); Mission (from Valentine); Pine Ridge (from Valentine and Chadron); Hot Springs (from Alliance and Chadron).
- **Wyoming:** Cheyenne (from Sidney and Scottsbluff); Torrington (from Scottsbluff and Alliance); Douglas (from Alliance).
- **Colorado:** Sterling (from Sidney and Imperial); Fort Morgan (from Imperial and McCook); Greeley (from Sidney).

**The real routes, as chains,** are open in both modes (the longest link in brackets):
- **I-80:** Kimball–Sidney–Chappell–Ogallala–Sutherland–North Platte–Gothenburg–Cozad–Lexington–Kearney–Gibbon–Grand Island–Aurora–York–Seward–Lincoln–Waverly–Ashland–Gretna–Omaha (39 mi). In Wyoming: Kimball–Pine Bluffs–Cheyenne.
- **The Union Pacific (Overland Route):** Omaha–Valley–Fremont–Schuyler–Columbus–Central City–Grand Island–Wood River–Gibbon–Kearney–Lexington–Cozad–Gothenburg–North Platte–Sutherland–Ogallala (40 mi), then Julesburg and Sterling (Colorado). Its line to Cheyenne: Julesburg–Chappell–Sidney–Kimball–Pine Bluffs–Cheyenne.
- **The BNSF (the California Zephyr):** Omaha–Lincoln–Crete–Geneva–Sutton–Hastings–Minden–Holdrege–Cambridge–McCook–Trenton–Benkelman, then Wray, Colorado (50 mi). Geneva stands for Fillmore County's towns on the line (Exeter and Fairmont, moderately known).
- **US-81:** Hebron–Geneva–York–Stromsburg–Columbus–Madison–Norfolk (32 mi). North of Norfolk the pack's nearest towns, Pierce and Hartington, lead on to Yankton (32 mi), and Crofton–Yankton crosses at the Discovery Bridge.
- **US-275:** Omaha–Fremont–West Point–Norfolk–Neligh–O'Neill (39 mi).
- **The Missouri towns (US-75 and US-73):** Falls City–Auburn–Nebraska City–Plattsmouth–Bellevue–Omaha–Blair–Tekamah–Winnebago–South Sioux City (34 mi), then North Sioux City.
- **US-20:** Harrison–Fort Robinson–Chadron–Gordon–Cody–Valentine–Ainsworth–Bassett–Atkinson–O'Neill (49 mi). East of O'Neill, US-20's towns are small; O'Neill–Creighton–Hartington–Wayne–South Sioux City is open (38 mi). Harrison–Lusk reaches Wyoming.
- **US-26 and the North Platte valley:** Torrington (Wyoming)–Scottsbluff–Chimney Rock–Bridgeport–Oshkosh–Lake McConaughy–Ogallala (42 mi).
- **US-385:** Sidney–Bridgeport–Alliance–Chadron–Hot Springs, South Dakota (51 mi).
- **US-83:** McCook–North Platte–Stapleton–Thedford–Valentine–Mission, South Dakota, toward Pierre (65 mi).
- **NE-2 and the BNSF's Sandhills line (moderately known):** Grand Island–Loup City (the nearest town to Litchfield, on the line)–Broken Bow–Thedford–Mullen–Hyannis–Alliance (62 mi).
- **US-281:** Red Cloud–Hastings–Grand Island–St. Paul–O'Neill–Spencer (87 mi from St. Paul to O'Neill: there is no town between). Spencer–Pickstown reaches Fort Randall Dam.
- **The Republican:** Benkelman–Trenton–McCook–Cambridge–Alma–Red Cloud–Superior (45 mi).
- **Other links the brief names:** Kimball–Cheyenne (I-80); Chappell–Julesburg and Sidney–Sterling (the Union Pacific); Scottsbluff–Torrington (US-26); Chadron–Hot Springs (US-385) and Chadron–Pine Ridge; Valentine–Mission (US-83) and Valentine–Winner; Crofton–Yankton and Hartington–Yankton (US-81, the Discovery Bridge); Crofton–Springfield (the Chief Standing Bear Bridge); South Sioux City–North Sioux City; Imperial–Holyoke and Benkelman–Wray (Colorado).

**Neighbours.** Nothing in this pack blocks a line between two other states' places: no Nebraska bridge or lake is in South Dakota, Wyoming or Colorado. Kingsley Dam only opens lines.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Omaha, Lincoln & the Missouri | `east` | Omaha, Bellevue, Lincoln, Blair, Wahoo, Fremont, Seward, Nebraska City, Auburn, Falls City, Beatrice | 50 passengers; own 5 counties; 10 crates of produce |
| The Platte & the Northeast | `platte` | Columbus, York, Aurora, Grand Island, Hastings, Geneva, Norfolk, South Sioux City, Wayne, Neligh, Albion | 140 passengers; connect OMA–GRI (up the Platte by the Union Pacific's towns, or I-80 by Lincoln and York; open in both modes); own 12 counties |
| Kearney, the Republican & the Loups | `central` | Kearney, Holdrege, Superior, Lexington, Cambridge, St. Paul, Ord, Broken Bow, O'Neill, Ainsworth | 280 passengers; connect LNK–HDE (the Zephyr's line by Crete, Geneva and Hastings; open in both modes); one high-speed train |
| North Platte, the Sandhills & the Panhandle | `west` | North Platte, McCook, Imperial, Ogallala, Sidney, Scottsbluff, Alliance, Chadron, Valentine, Mullen | 450 passengers; connect OMA–SBF (across the state by I-80 and the North Platte valley; open in both modes); own 25 counties |

- **Targets** follow South Dakota's, North Dakota's and Montana's four levels.
- **Areas join up:** each level's regions touch the levels before it. Colfax-Platte touches Cuming-Dodge and Butler-Saunders; Buffalo touches Hall; Logan-McPherson-Lincoln touches Dawson-Gosper and Frontier-Furnas.
- **No trucks goal:** Nebraska's desert and mountain places are only five towns in the far west, so a trucks goal would be slow. Its last level counts counties instead, as Wyoming's and Montana's do.
- **No container goal:** Nebraska has no port.

### Biomes

- **`wooded`** (trees on the hills): Banner-Morrill-Scotts Bluff (the Wildcat Hills' ponderosa pine, on the map's one western hill cell) and Dawes-Sheridan (the Pine Ridge's pine, as South Dakota's Black Hills). The map has no hill cells on the Pine Ridge, so Dawes-Sheridan shows no trees yet. It is listed for when the map's hills improve.
- **`dry`** (short-grass and badlands): Box Butte-Sioux. Sioux County, two-thirds of the region, is dry ranch land with Toadstool's badlands, next to South Dakota's dry Bennett-Oglala Lakota. A judgment call: Box Butte's tableland is farmed, and Wyoming leaves Converse-Niobrara (across the line) unlisted.
- **No `forest`.** The Missouri's wooded bluffs (Fontenelle Forest, Indian Cave) are too thin for a county-wide setting.
- **Not listed (farmland and grassland):** the east's farms, the Platte and Republican valleys, the Panhandle's wheat and irrigated valleys (as Colorado's Logan-Phillips-Sedgwick and Wyoming's Goshen-Platte across the lines), and the Sandhills. The Sandhills are grass-covered dunes with wet meadows and lakes, ranched like grassland, not sagebrush or sand. Listing them `dry` would paint a fifth of the state as desert.

### Checks

- **`node tools/check-pack.js NE`:** `NE: passed (42 stations, 68 towns, 0 city maps, 0 passes, 44 bridges), 0 errors, 1 warnings`.
  - The warning: `SBF and SBNM are only 3.8 miles apart`. Scotts Bluff National Monument rises over Gering, Scottsbluff's twin across the North Platte. The point is at the visitor center by Mitchell Pass, and the monument is the Panhandle's best-known sight, so it stays (as South Dakota keeps Pierre and Fort Pierre 3 mi apart).
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js NE`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is OMA, BELV and BLR. The test laid Omaha–Blair (25 mi, 1 train) and bought Butler-Saunders (WAHO). 21 and 22 passengers arrived in the week (two runs).
  - Levels mode starts at level 1.
- **Screenshots** (`test-out/NE/`: arcade light, classic light, levels):
  - Omaha sits on the Missouri with Bellevue below it, Blair up the river and Wahoo to the west. The Platte and the Elkhorn wind past Fremont and Ashland, with their bridge marks.
  - The Platte, the North Platte and the Republican cross the state, and Lake McConaughy shows above Ogallala.
  - The tan dry region is Box Butte-Sioux, in the northwest corner.

### For the main agent

1. **Airports:** Eppley Airfield only. Lincoln Airport is below the 1-million bar (from memory). Add `airport: "Lincoln Airport"` to LNK if the bar is lower.
2. **Omaha's station is at downtown** (5.9 mi east of the Census point), by the Missouri bridges to Council Bluffs.
3. **Eight Missouri River bridges** are listed for Iowa (and Missouri) to match: Omaha (I-480/UP and I-80), Plattsmouth, Nebraska City, Blair, Decatur, South Sioux City–Sioux City, and Niobrara–Springfield (South Dakota, already in the game).
4. **North Platte and Scottsbluff are typed metro** so the west's lines have riders. Fort Robinson is typed mountain and Lake McConaughy coast (judgment calls, noted above).
