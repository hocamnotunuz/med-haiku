# Nebraska (NE) pack notes

## Region merges (phase 1)

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
