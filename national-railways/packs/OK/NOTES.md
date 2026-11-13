# Oklahoma (OK) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (42 regions, no `names`). The map, raw facts and terrain were rebuilt, and the pack (phase 2, below) is built on it.

Populations: `packs/OK/raw/counties.json` and `packs/OK/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 3,959,411). Every group is connected through `neighbors`, and I checked the shared border lengths on the rings in `map.js` (in km below). Distances between towns are straight lines between `places.json` points, in miles. Lakes, rivers and ranges marked "on the map" are in `packs/OK/terrain.js`. Roads, railways, rivers and mountains named here are well known unless marked "(moderately known)".

### Recommended (77 → 42 regions)

```
merge: [["Craig", "Mayes", "Nowata"], ["Delaware", "Ottawa"], ["Adair", "Cherokee"], ["Haskell", "Sequoyah"], ["Latimer", "Le Flore"], ["Atoka", "Pittsburg"], ["Choctaw", "McCurtain", "Pushmataha"], ["Bryan", "Marshall"], ["Carter", "Love"], ["Johnston", "Murray"], ["Coal", "Pontotoc"], ["Garvin", "McClain"], ["Hughes", "Seminole"], ["McIntosh", "Okmulgee"], ["Lincoln", "Okfuskee"], ["Osage", "Pawnee"], ["Grant", "Kay", "Noble"], ["Alfalfa", "Woods"], ["Blaine", "Kingfisher", "Major"], ["Ellis", "Harper", "Woodward"], ["Beaver", "Cimarron", "Texas"], ["Beckham", "Roger Mills"], ["Custer", "Dewey", "Washita"], ["Caddo", "Kiowa"], ["Greer", "Harmon", "Jackson"], ["Cotton", "Tillman"], ["Jefferson", "Stephens"]]
names: {}
```

No `bridges` or `join`: no Oklahoma county is cut off by water. No names are needed: the automatic ones read well. "Beaver-Cimarron-Texas County" ends in the real Texas County, so it reads as a county, not the state.

**No exceptions:** every county under 50k is merged (27 groups). **Logan** (49,545; `pop` 50 in counties.json) stays alone with the 50k counties, as the brief lists it: it is Oklahoma City's north edge (Guthrie on I-35 and the BNSF), and its small neighbours fit better elsewhere (Kingfisher 49 km of border, Lincoln 24, Noble 10).

**Alone, 50k and over (15):** Oklahoma (Oklahoma City 681,091), Tulsa (Tulsa 413,144), Cleveland (Norman 127,987), Canadian (Yukon 23,638; El Reno 16,997 is the county seat on I-40 and US-81, a phase 2 choice), Comanche (Lawton 90,387), Rogers (Claremore 19,581), Payne (Stillwater 48,381), Wagoner (Coweta 9,661; Wagoner 7,618 is the seat on US-69, a phase 2 choice), Creek (Sapulpa 21,922), Pottawatomie (Shawnee 31,281), Muskogee (Muskogee 36,875), Garfield (Enid 51,292), Grady (Chickasha 16,057), Washington (Bartlesville 37,276), Logan (Guthrie 10,753).

Station rule: the largest place in places.json, as in Colorado, New Mexico and Kansas. Where phase 2 may prefer another town, the table says so.

| Group (shared border) | Why | Main station | Population |
| --- | --- | --- | --- |
| Craig + Mayes + Nowata (29, 46 km) | US-69 and the old Katy railway (moderately known) from Pryor to Vinita (25 mi) on I-44; US-60 on to Nowata (33 mi from Pryor; moderately known). The county towns wrap round Rogers' north and east | Pryor Creek (9,455; the Census name of Pryor) | 62,476 |
| Delaware + Ottawa (34 km) | Grand Lake o' the Cherokees (on the map: Delaware, Ottawa and Mayes): Miami on I-44 and US-69 above the lake's north end, Grove 21 mi down the lake | Miami (12,988) | 70,683 |
| Adair + Cherokee (58 km) | Tahlequah, capital of the Cherokee Nation, and Stilwell 20 mi east on US-62 (moderately known): the Ozark edge (on the map) and the Illinois River | Tahlequah (16,211) | 66,577 |
| Haskell + Sequoyah (35 km) | I-40's last stretch to Fort Smith (Sallisaw, Roland, Muldrow). Stigler is 22 mi from Sallisaw, across the Arkansas at Robert S. Kerr Reservoir (on the map), which is bridged (moderately known); it is 32 mi from Poteau and 44 from McAlester. Kansas's Pottawatomie + Wabaunsee also joins across a bridged river | Sallisaw (8,518) | 50,847 |
| Latimer + Le Flore (54 km) | US-270 (moderately known) along the valley between the Ouachita ridges (on the map): Poteau, Wister Lake, Wilburton (Robbers Cave) 41 mi. Le Flore (48,130) is just under 50k | Poteau (8,805) | 57,574 |
| Atoka + Pittsburg (48 km) | US-69 and the Katy (moderately known) south from McAlester by Stringtown to Atoka, 42 mi | McAlester (18,166) | 57,918 |
| Choctaw + McCurtain + Pushmataha (57, 58 km; Choctaw–McCurtain 24) | The southeast corner below the Ouachitas: Idabel and Broken Bow (10 mi; Broken Bow Lake), US-70 west to Hugo (40 mi), US-271 up the Kiamichi valley to Antlers (16 mi from Hugo; moderately known). Hugo is the central town if phase 2 prefers it | Idabel (6,967) | 55,836 |
| Bryan + Marshall (33 km) | Lake Texoma's Oklahoma shore (on the map: Marshall and Bryan): Durant, then US-70 west by Kingston (18 mi) to Madill (23) (moderately known); US-69/75 south to Texas | Durant (18,586) | 61,373 |
| Carter + Love (54 km) | I-35 and the BNSF (Amtrak's Heartland Flyer) from Ardmore to Marietta (18 mi) and the Red River | Ardmore (24,718) | 58,151 |
| Johnston + Murray (29 km) | The Arbuckle Mountains: Sulphur (Chickasaw National Recreation Area), Davis on I-35 (12 mi), Mill Creek, Tishomingo (25 mi), the old Chickasaw capital (moderately known) | Sulphur (4,944) | 24,186 |
| Coal + Pontotoc (38 km) | Ada with Coalgate 30 mi southeast | Ada (16,478) | 43,336 |
| Garvin + McClain (67 km) | I-35 and the BNSF from Purcell to Pauls Valley (23 mi), with Newcastle and Blanchard at Oklahoma City's south edge (Colorado's Elbert + Lincoln case). Purcell (6,657) is the county seat, a Heartland Flyer stop (moderately known) and central: phase 2 may prefer it | Newcastle (10,989) | 67,319 |
| Hughes + Seminole (46 km) | Seminole, Wewoka (11 mi) and Holdenville (17) on US-270, the old Seminole oil field country (both moderately known) | Seminole (7,142) | 36,924 |
| McIntosh + Okmulgee (43 km) | I-40 from Henryetta (13 mi from Okmulgee on US-75) to Checotah (26 mi); Eufaula 31 mi, on Eufaula Lake's north half (on the map). Okmulgee is the Muscogee (Creek) Nation's capital | Okmulgee (11,301) | 55,654 |
| Lincoln + Okfuskee (19 km) | US-62 (moderately known), which crosses the short shared border, by Prague, Paden and Boley to Okemah on I-40. Lincoln holds the Turner Turnpike (I-44) and Route 66: Stroud, Chandler, Wellston. 75% of the people live in Lincoln, so phase 2 may prefer Chandler (2,857, the county seat), 36 mi from Okemah | Okemah (3,072) | 44,770 |
| Osage + Pawnee (121 km) | Keystone Lake (on the map) and OK-99 (moderately known): Pawhuska, Hominy (17 mi) and Cleveland (9 mi from Hominy). Hominy is central; Pawhuska (2,990) is the Osage Nation's capital. Osage's suburbs by Tulsa (Skiatook, Sand Springs) are tagged Tulsa in places.json | Hominy (3,329) | 61,380 |
| Grant + Kay + Noble (45, 36 km) | I-35 from Kansas by Blackwell (14 mi) and Tonkawa to Perry (33 mi), and the BNSF through Ponca City and Perry; Grant's Medford and Pond Creek on US-81 (moderately known; 37 and 41 mi, but 51 and 49 from Alva) | Ponca City (24,423) | 58,787 |
| Alfalfa + Woods (59 km) | Alva near the Kansas line, Cherokee 17 mi (the Great Salt Plains, moderately known), Waynoka 19 | Alva (5,020) | 14,325 |
| Blaine + Kingfisher + Major (49, 38 km; Kingfisher–Major 9) | The Cimarron valley (on the map) between Enid, El Reno and Woodward: Kingfisher on US-81 (the Chisholm Trail), Watonga 26 mi, Okeene, Fairview 42 | Kingfisher (4,931) | 31,699 |
| Ellis + Harper + Woodward (68, 52, 36 km) | Woodward, northwest Oklahoma's town: Shattuck 29 mi, Buffalo 31, Laverne 33. The BNSF's Southern Transcon runs by Woodward and Shattuck (moderately known) | Woodward (12,140) | 27,494 |
| Beaver + Cimarron + Texas (56, 54 km) | The Panhandle ("No Man's Land"; once one county, moderately known): Guymon on US-54 (moderately known), Hooker 19 mi, Beaver 54, Boise City 57; Black Mesa in Cimarron | Guymon (12,959) | 28,728 |
| Beckham + Roger Mills (67 km) | I-40 at Elk City, Sayre (13 mi) and Erick; Cheyenne 21 mi north (the Washita Battlefield) | Elk City (11,568) | 25,848 |
| Custer + Dewey + Washita (67, 67 km) | I-40 at Weatherford and Clinton (16 mi), and US-183 (moderately known) north to Taloga and south to Cordell (14 mi from Clinton); Canute and Foss on I-40 are in Washita | Weatherford (12,090) | 43,926 |
| Caddo + Kiowa (27 km) | The Washita valley (on the map): Anadarko, Carnegie (20 mi), Hobart (48 mi; OK-9, moderately known). Hinton on I-40 is in Caddo | Anadarko (5,744) | 35,454 |
| Greer + Harmon + Jackson (52, 51, 41 km) | Old Greer County, claimed by Texas until 1896: Altus, Mangum 19 mi, Hollis 35 | Altus (18,738) | 32,775 |
| Cotton + Tillman (32 km) | The farm belt between Lawton and the Red River: I-44 south through Cotton (by Walters and Randlett) to Wichita Falls; Frederick 36 mi from Walters. The weakest group: both look to Lawton (18 and 37 mi), which stays alone | Frederick (3,477) | 12,487 |
| Jefferson + Stephens (53 km) | US-81 and the Chisholm Trail: Duncan, Marlow (10 mi), Waurika (21; Waurika Lake) | Duncan (22,673) | 48,182 |

The corridors stay clean chains:
- **I-35 and the BNSF:** Kansas, Grant-Kay-Noble (Blackwell, Tonkawa, Perry; the BNSF by Ponca City), Logan (Guthrie), Oklahoma, Cleveland (Norman), Garvin-McClain (Purcell, Pauls Valley), Johnston-Murray (Davis, the Arbuckles), Carter-Love (Ardmore, Marietta), then Texas.
- **I-40:** Arkansas, Haskell-Sequoyah (Roland, Sallisaw), Muskogee (Webbers Falls), McIntosh-Okmulgee (Checotah, Henryetta), Lincoln-Okfuskee (Okemah), Pottawatomie (Shawnee), Oklahoma, Canadian (El Reno), Caddo-Kiowa (Hinton), Custer-Dewey-Washita (Weatherford, Clinton), Beckham-Roger Mills (Elk City, Sayre, Erick), then Texas.
- **I-44:** Missouri, Delaware-Ottawa (Miami), Craig-Mayes-Nowata (Vinita), Rogers (Claremore), Tulsa, Creek (Sapulpa, Bristow), Lincoln-Okfuskee (Stroud, Chandler), Oklahoma, Garvin-McClain (Newcastle), Grady (Chickasha), Comanche (Lawton), Cotton-Tillman (Randlett), then Texas.
- **US-69 and the Katy:** Kansas, Craig-Mayes-Nowata (Vinita, Pryor), Wagoner, Muskogee, McIntosh-Okmulgee (Checotah, Eufaula), Atoka-Pittsburg (McAlester, Atoka), Bryan-Marshall (Durant), then Texas. US-69 also runs north from Vinita through Miami.
- **US-81 (the Chisholm Trail):** Kansas, Grant-Kay-Noble (Medford, Pond Creek), Garfield (Enid), Blaine-Kingfisher-Major (Hennessey, Kingfisher), Canadian (El Reno), Grady (Chickasha), Jefferson-Stephens (Duncan, Waurika), then Texas.
- **The Panhandle:** Kansas and Texas on both sides of Beaver-Cimarron-Texas; Colorado and New Mexico at Cimarron.

Rejected:
- `["Craig", "Nowata", "Ottawa"]` with `["Delaware", "Mayes"]` (same count): Grove, the town of Delaware's 40k people, would be 35 mi from Pryor instead of 21 from Miami, and Nowata 44 mi from Miami.
- Nowata + Washington (Bartlesville is 17 mi from Nowata) with Craig + Mayes and Delaware + Ottawa: the tightest northeast, but Washington (52,455) would not stay alone.
- Grant with Alfalfa and Woods: Medford is 51 mi from Alva and 37 from Ponca City.
- Haskell + Le Flore (no river between them): Sequoyah would then need Adair, leaving Cherokee (47,080) alone, and Stigler is nearer Sallisaw.
- Sequoyah + Le Flore (Fort Smith's Oklahoma side, 87k): two counties near 50k, across the Arkansas.
- Le Flore alone (48,130) with Latimer + Pittsburg (Wilburton is 27 mi from McAlester instead of 41 from Poteau), Atoka + Bryan, Johnston + Marshall and Coal + Murray + Pontotoc (same count): an exception for a small gain. Le Flore + Pushmataha or + McCurtain: across the Ouachita ridges.
- McClain alone (Oklahoma City suburbs) with Garvin + Murray: a second exception; Colorado's Elbert + Lincoln and Kansas's Linn + Miami join a metro's edge to the country behind it.
- Choctaw + Pushmataha (Hugo) with McCurtain alone (30,821): another exception.
- Cotton + Jefferson + Stephens with Kiowa + Tillman and Caddo + Washita: Caddo + Washita has no main road between them, and Cordell's town is Clinton.

### Alternative (also 42 regions)

Replace `["Atoka", "Pittsburg"]`, `["Bryan", "Marshall"]`, `["Johnston", "Murray"]`, `["Coal", "Pontotoc"]`, `["McIntosh", "Okmulgee"]` and `["Lincoln", "Okfuskee"]` with `["McIntosh", "Pittsburg"]` (62,717; McAlester), `["Okfuskee", "Okmulgee"]` (48,020; Okmulgee), `["Atoka", "Bryan"]` (60,216; Durant), `["Johnston", "Marshall"]` (25,585; Madill 3,900), `["Coal", "Murray", "Pontotoc"]` (57,239; Ada), and Lincoln alone (33,460; Chandler).
- Pro: tighter groups: Eufaula Lake whole, with Eufaula 27 mi from McAlester on US-69; Okemah 24 mi from Okmulgee on I-40; Tishomingo 12 mi from Madill; Atoka 31 mi from Durant on US-69/75. Lincoln keeps Chandler on the Turner Turnpike; Okfuskee touches it for only 19 km, and its long borders are with big counties (as New Mexico's Cibola).
- Con: an exception (Lincoln, 33,460); Lake Texoma's shore is split between Durant's and Madill's regions; Davis on I-35 goes to Ada (37 mi).

### Map and data check

1. **The map looks right.** All 77 counties are one piece each, and every label is inside its county. County areas add up to 69,571 sq mi, within half a percent of Oklahoma's total area. Every county edge is either shared with another county or on a state line (no gaps or slivers). All 846 places lie inside their tagged county.
2. **Neighbours agree both ways** with Kansas (21 links), Colorado (Cimarron–Baca-Kiowa-Prowers) and New Mexico (Cimarron–Colfax-Union); none is missing. Cimarron also touches Kansas (Morton-Stevens) for about 1 km, because its east line (102.03°W) lies just east of the Colorado–Kansas line (102.04°W); Texas County does not touch Colorado. This looks right. The 20 "coast" lines (1,634 km) are the Texas, Arkansas and Missouri lines.
3. **Short contacts:** Canadian–McClain 0.1 km (a point, at the Canadian River), Pawnee–Tulsa 3 km, Beckham–Kiowa 4, Canadian–Cleveland 4, Beckham–Custer 5, Okmulgee–Wagoner 5. They make neighbours for unlocking; no merge depends on one. Inside groups: Kingfisher–Major 9 km (Blaine borders both), Choctaw–McCurtain 24 km (Pushmataha borders both), Lincoln–Okfuskee 19 km (crossed by US-62).
4. **Places:** 590 of the 846 have populations (incorporated places). Two Census names differ from everyday use: "Pryor Creek" (Pryor) and "New Cordell" (Cordell). Many towns share a county's name but lie in another county: Choctaw (12,173, an Oklahoma City suburb), Noble (Cleveland County), Dewey (Washington), Cleveland (Pawnee), Haskell (Muskogee), Cherokee (Alfalfa), Comanche (Stephens), Caddo (Bryan), Adair (Mayes), Washington (McClain), Kiowa (Pittsburg), McCurtain (Haskell), Delaware (Nowata), Canadian (Pittsburg) and a few smaller ones; phase 2 should take care where such a town would show next to a region of that name. Six names are used twice (Marietta, Butler, Caney, Liberty, Indianola, Shady Grove): each is a town in one county and a CDP in another, real and separate. Largest-place quirks: Osage's is Hominy (its Tulsa suburbs are tagged Tulsa), Canadian's is Yukon, Wagoner's is Coweta, and Alfalfa's is Helena (1,535), just above Cherokee (1,467), the county seat.

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/OK/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` points rounded to 2 decimals, except where noted (ten places moved to their downtowns, and the scenic places that aren't towns).
- **Facts added by hand** (bridges, scenic places, airports, roads, rivers and railways) are well known unless marked "moderately known". A point marked "approx." is one I gave from memory, within about a mile or two.
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough (`NR.runtime.geoLevel`). The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain (so Kansas's, Colorado's and New Mexico's places and bridges count too). The helper scripts lived in `/tmp/ok-work/`, outside the game.

### Start

`start: ["ok-oklahoma", "ok-canadian", "ok-cleveland"]`: Oklahoma City, El Reno and Norman. Canadian and Cleveland both touch Oklahoma County.
- **Types:** metro, farm and metro. El Reno is Canadian County's seat and farm town (wheat and cattle, Fort Reno); the county's suburbs (Yukon, Mustang) are towns.
- **First track:** the only pairs of different types are Oklahoma City–El Reno (26 mi crow) and Norman–El Reno (37). The pack test laid Oklahoma City–El Reno (30 mi of track, over the North Canadian at the Lake Overholser bridge), and 24 passengers arrived in the week (Kansas's first track got 11–13, Nebraska's 21–22).
- **Considered:** Oklahoma + Logan (Guthrie, farm) + Cleveland gives Oklahoma City–Guthrie (29 mi) but leaves the I-40 side out; Canadian is the bigger county (154k against 50k). With Yukon as Canadian's station, all three start stations would be metro (the checker's error).

### Main stations (42)

Each id is unused in every other pack (the checker checks). TUL was taken (New Mexico's Tularosa), so Tulsa is TULS. Codes are airport codes where they read well (OKC, LAW, GUY), else 3–4 letter abbreviations.

**Exceptions to "the biggest place":**
- **El Reno (16,997), not Yukon (23,638), for Canadian.** The brief asks for each metro region's station at its real centre. El Reno is the county seat in the middle of the county, on I-40, US-81 (the Chisholm Trail) and the Union Pacific. Yukon is Oklahoma City's western suburb at the county's east edge, 14 mi from downtown and 6 mi from Bethany; it is a size-2 town. This also gives the start a farm station.
- **Purcell (6,657), not Newcastle (10,989), for Garvin-McClain.** Purcell is McClain County's seat, central (Newcastle 20 mi, Pauls Valley 23), on I-35, the BNSF and the Heartland Flyer (a stop; moderately known). Newcastle sits across the Canadian from Oklahoma City, 9 mi from Norman and 8 from Moore; a station there would crowd the metro. It is a town.
- **Chandler (2,857), not Okemah (3,072), for Lincoln-Okfuskee.** Lincoln County has three quarters of the region's people (33,460 of 44,770) and Chandler is its seat, on the Turner Turnpike (I-44) and Route 66 between Oklahoma City and Tulsa. Okemah, on I-40 at the region's south-east corner, is a town.

**Close calls kept at the biggest place:**
- **Idabel (6,967), not Hugo (5,161).** McCurtain County has 55% of the region's people, and Broken Bow (4,211) is 10 mi away. Hugo is the central town (US-70 meets US-271 there; Antlers 16 mi, Idabel 40) and is a town here. The checks show Idabel reaches McAlester, Durant and Poteau, so nothing is lost.
- **Hominy (3,329), not Pawhuska (2,990).** Hominy is the biggest place and central (Pawhuska 17 mi, Cleveland 9). Pawhuska, Osage County's seat and the Osage Nation's capital, is a town.
- **Coweta (9,661), not Wagoner (7,618, the county seat).** Wagoner is a town.

**Points moved to downtown** (the lesson's bar: more than a few kilometres; downtown points from memory):
- **Tulsa** 36.15, -95.99; the Census point (36.128, -95.902) is 5.1 mi east, in the middle of the city's long limits.
- **Norman** 35.22, -97.44 (Main Street by the University of Oklahoma); the Census point is 5.5 mi east, as the city reaches Lake Thunderbird.
- **Shawnee** 35.33, -96.93; the Census point is 3.1 mi north-west.
- **Chandler** 35.70, -96.88; the Census point is 2.6 mi east.
- **Elk City** 35.41, -99.40; the Census point is 2.1 mi south-west.
- Towns: **Edmond** 35.65, -97.48 (4.1 mi), **Davis** 34.50, -97.12 (5.8 mi; its limits run down I-35 to Turner Falls), **Tuttle** 35.29, -97.81 (3.6 mi), **Walters** 34.36, -98.31 (2.7 mi) and **Pauls Valley** 34.74, -97.22 (2.1 mi).
- Oklahoma City's Census point is downtown (0.3 mi). Lawton, Ardmore, Altus and Bartlesville are 1.8–1.9 mi from their downtowns and the rest under 1.6; none was moved.

**Names:** the Census's "Pryor Creek" and "New Cordell" are written Pryor and Cordell.

**Sizes** follow the PACKS.md guide and the neighbours:
- **4** Oklahoma City (797k) and Tulsa (669k), as Denver (716k), Colorado Springs (730k), Albuquerque (676k), Omaha (585k) and Wichita (524k).
- **3** Norman (Cleveland, 296k), as Lincoln, Nebraska (323k) and Boulder (331k): the University of Oklahoma, Moore and the metro's south side.
- **2** the other single counties of 60k or more, as Kansas's (Leavenworth 82k, Hutchinson 62k): El Reno (Canadian 154k), Lawton (121k), Claremore (95k), Stillwater (82k), Coweta (81k), Sapulpa (72k), Shawnee (72k), Muskogee (66k), Enid (63k); and Bartlesville (52k, a 37k city, as Salina 54k).
- **1** Chickasha (Grady 55k) and Guthrie (Logan 50k), whose towns are 16k and 11k (as Kearney 50k), and every merged region (as Kansas's: Pittsburg's 58k region is 1).

**Types:** metro for Oklahoma City, Tulsa and their suburban counties' stations (Norman, Sapulpa, Claremore), the cities (Lawton, Stillwater, Shawnee, Muskogee, Enid, Bartlesville, Ponca City, Ardmore, McAlester) and the university and tribal-capital towns (Tahlequah, Ada, Durant), as Kansas types Emporia, Hays and Pittsburg. Coweta is farm: Wagoner County's suburbs are Broken Arrow's east side (a town in Tulsa's region). Poteau is mountain (the Ouachitas, Cavanal Hill). The rest are farm.

**Airports:** Will Rogers World Airport (Oklahoma City) and Tulsa International Airport, the state's two big airports (by the bar of Wichita, Omaha and Colorado Springs). Lawton–Fort Sill and Stillwater are small.

**No port:** the Tulsa Port of Catoosa (at the head of the McClellan–Kerr Arkansas River Navigation System) is a barge port, not a container seaport; every `port` in the game is a sea or Great Lakes port.

**Scenic stations** (tourists come from metro stations that aren't scenic, `js/game.js`, so Oklahoma City and Tulsa are not marked):
- **Guthrie:** the territorial and first state capital; its Victorian downtown is a National Historic Landmark district.
- **Claremore:** the Will Rogers Memorial Museum.
- **Sulphur:** the Chickasaw National Recreation Area (the old Platt National Park, its mineral springs and the Lake of the Arbuckles) at the edge of town.

### Towns (77: 68 towns and 9 scenic places)

About 1.8 per region (Kansas 1.7). Each is the region's next-biggest place or a town on a main line, spread out (the checker finds none under 4 mi apart). Sizes: 2 for the big suburbs (Edmond 94k, Broken Arrow 114k, Moore 63k, Midwest City 58k, Yukon 24k, the biggest city in its region); 1 for the rest. Metro for the suburbs of Oklahoma City and Tulsa (Mustang, Newcastle, Owasso, Sand Springs, Catoosa); farm elsewhere.

**Scenic towns:** Catoosa (the Blue Whale of Catoosa, Route 66's best-known roadside landmark), Fort Gibson (the 1824 frontier fort, Fort Gibson Historic Site), Clinton (the Oklahoma Route 66 Museum).

**Scenic places that aren't towns** (at the landmark, approx.):

| Place | Point | Type | Source |
| --- | --- | --- | --- |
| Wichita Mountains Wildlife Refuge | 34.74, -98.62 | mountain | The granite Wichita Mountains (Mount Scott), bison and longhorns; the refuge's middle, by the visitor center |
| Turner Falls | 34.42, -97.15 | mountain | The Arbuckle Mountains' waterfall by I-35, south of Davis |
| Beavers Bend | 34.13, -94.69 | mountain | Beavers Bend State Park on the Mountain Fork below Broken Bow Lake, north of Broken Bow |
| Talimena Scenic Drive | 34.74, -94.75 | mountain | The ridge road over Winding Stair Mountain from Talihina to Mena, Arkansas; its middle in Oklahoma |
| Tallgrass Prairie Preserve | 36.84, -96.42 | farm | The Nature Conservancy's Joseph H. Williams Tallgrass Prairie Preserve and its bison, at the headquarters north of Pawhuska (as Kansas's Tallgrass Prairie National Preserve, farm) |
| Great Salt Plains | 36.72, -98.26 | desert | The salt flat of Salt Plains National Wildlife Refuge west of Jet, where visitors dig selenite crystals (as Kansas's Monument Rocks, desert) |
| Little Sahara | 36.53, -98.88 | desert | Little Sahara State Park's sand dunes south of Waynoka, on the Cimarron's north side |
| Black Mesa | 36.92, -102.96 | mountain | Oklahoma's highest point (4,973 ft), by Kenton in the Panhandle's far corner |
| Washita Battlefield | 35.62, -99.70 | farm | Washita Battlefield National Historic Site (1868), west of Cheyenne |

**Considered and left out:**
- **The Oklahoma City National Memorial** is downtown, 0.3 mi from the station; a place there would sit on top of it, and marking Oklahoma City scenic would stop its tourists (above). The same holds for **Tulsa's Gilcrease and Philbrook museums** (2.4–2.7 mi from downtown, under the checker's 4 mi). A city map can carry them later.
- Robbers Cave (Wilburton), Quartz Mountain, the Gloss Mountains, Roman Nose, Woolaroc and the Marland Mansion: real, but less known or too close to a town.

### Passes (0) and bridges (47)

**No passes.** Oklahoma's map is flat but for 96 cells of hills, nearly all in the Ouachitas (Latimer-Le Flore 55, Choctaw-McCurtain-Pushmataha 26, Atoka-Pittsburg 6) and a few on the Ozark edge (Haskell-Sequoyah 4, Adair-Cherokee 4, Craig-Mayes-Nowata 1). One of them is a **mountain cell**, by Poteau (-94.70, 35.10). No well-known pass is there (US-270 follows the Poteau and Fourche Maline valleys). In Gentle the cell counts as hills; in Tough eight lines out of Poteau and Heavener westward tunnel 2.5–3.5 mi under it ("the Ouachita Mountains"), cheap and never blocked.

**Rivers on the map:** the Arkansas, the Canadian, the North Canadian (its upper course is named the Beaver in Texas and Cimarron counties), the Cimarron, the Washita, the Red (the Texas line), the Neosho (Grand), the Verdigris and the Illinois. **Lakes on the map:** Lake Texoma, Eufaula, Keystone, Grand Lake o' the Cherokees, Oologah, Fort Gibson, Tenkiller, Robert S. Kerr, Kaw, Canton, Hugo, Broken Bow, Wister, Waurika, Optima and Pine Creek.

**Bridges (47).** Each sits on the map's river or lake at the real crossing, or where the map's river passes the town. "Uses" is the shorter links (up to 45 mi) whose crossing is within 2 mi of the river bridge (or whose lake crossing is within 3–4 mi of the lake bridge), in Gentle.

| Bridge | Point | Source | Uses |
| --- | --- | --- | --- |
| Oklahoma River bridges (downtown Oklahoma City) | 35.46, -97.52 | I-35, I-235, Robinson and Walker over the Oklahoma River (the North Canadian) south of downtown | 11: OKC to Norman, Moore, Shawnee, Purcell, Chickasha, Newcastle |
| North Canadian River bridge (Route 66, Lake Overholser) | 35.50, -97.68 | Route 66's 1925 truss bridge below Lake Overholser (moderately known) | 5: OKC–El Reno (the first track), OKC–Yukon |
| North Canadian River bridge (US-81, El Reno) | 35.56, -97.95 | US-81 north of El Reno (moderately known) | El Reno–Kingfisher, –Guthrie |
| North Canadian River bridges (Shawnee) | 35.33, -96.96 | US-177 crosses north of Shawnee (moderately known); the map's river runs through the city's west side, so the point is there | 9: Shawnee to OKC, Norman, Midwest City, Purcell, Tecumseh |
| North Canadian River bridge (Woodward) | 36.45, -99.36 | The roads north of Woodward (moderately known) | Alva–Woodward (48 mi) |
| Beaver River bridge (Beaver) | 36.83, -100.53 | Beaver sits on the Beaver River (moderately known) | Liberal–, Meade–, Hugoton–Beaver |
| Beaver River bridge (US-54, Guymon) | 36.74, -101.44 | US-54 north-east of Guymon (moderately known) | Hugoton–Guymon |
| Canadian River bridge (I-35, Norman) | 35.17, -97.42 | I-35 at Norman's south edge | Norman–Purcell, OKC–Purcell, Moore–Purcell |
| Canadian River bridge (Purcell–Lexington) | 35.01, -97.35 | US-77 between Purcell and Lexington (moderately known) | Purcell to Ada, Shawnee, Seminole, Tecumseh |
| Canadian River bridge (I-44 and US-62, Newcastle) | 35.31, -97.57 | I-44 (the H.E. Bailey Turnpike) and US-62 at Newcastle; on the map's river, which runs 4 mi north of Newcastle | 7: OKC–Newcastle, Norman–El Reno |
| Canadian River bridge (US-81, Union City) | 35.37, -97.96 | US-81 between Union City and Minco (moderately known) | El Reno–Chickasha |
| Canadian River bridge (I-40, east of Hinton) | 35.52, -98.26 | I-40 between El Reno and Hinton (moderately known) | El Reno–Hinton, –Weatherford |
| Pony Bridge (Route 66, Bridgeport) | 35.56, -98.37 | Route 66's 38-truss William H. Murray (Pony) Bridge over the South Canadian | Watonga–Hinton |
| Arkansas River bridges (Tulsa) | 36.13, -96.00 | 11th Street (Route 66), 21st Street, I-244 and I-44 | 10: Tulsa to Sapulpa, Okmulgee, Sand Springs, Bristow |
| Arkansas River bridge (OK-97, Sand Springs) | 36.14, -96.12 | OK-97 from Sand Springs to Sapulpa (moderately known) | 7: Sand Springs to Claremore, Cleveland, Hominy |
| Keystone Dam (Keystone Lake) | 36.15, -96.25 | OK-151 over Keystone Dam | 5: Mannford–Claremore, –Owasso; Sapulpa–Hominy, –Cleveland |
| Arkansas River bridge (OK-99, Cleveland) | 36.33, -96.45 | OK-99 between Cleveland (Pawnee County) and Hominy (Osage County) (moderately known) | 9: Tulsa–, Hominy–, Pawhuska–Cleveland |
| Arkansas River bridge (US-60, Ponca City) | 36.70, -96.92 | US-60 east from Ponca City toward Pawhuska (moderately known) | Ponca City–Pawhuska |
| Arkansas River bridge (US-69, Muskogee) | 35.81, -95.36 | US-69 north of Muskogee (moderately known) | Muskogee–Wagoner, –Pryor, –Claremore |
| Arkansas River bridge (US-62, Muskogee–Fort Gibson) | 35.77, -95.30 | US-62 below the Three Forks (moderately known) | Muskogee–Tahlequah, –Fort Gibson |
| Arkansas River bridge (I-40, Webbers Falls) | 35.51, -95.12 | The I-40 bridge (rebuilt after its 2002 collapse) | None yet: the straight lines along I-40 pass south of the map's river |
| Arkansas River bridge (US-59, south of Sallisaw) | 35.36, -94.76 | US-59 from Sallisaw toward Poteau (moderately known); just below the map's Kerr Reservoir | Sallisaw–Poteau, –Heavener |
| Neosho River bridges (Miami) | 36.87, -94.88 | US-69 and I-44 by Miami (moderately known) | Miami–Vinita, –Nowata, –Grove (the lake's head) |
| Sailboat Bridge (US-59, Grand Lake) | 36.63, -94.79 | US-59's Sailboat Bridge over Grand Lake north of Grove (moderately known) | Miami–Grove, Vinita–Grove |
| Verdigris River bridge (I-44, Catoosa) | 36.24, -95.72 | The Will Rogers Turnpike between Catoosa and Claremore (moderately known) | Tulsa–, Sapulpa–, Catoosa–Claremore |
| Verdigris River bridge (US-69, north of Muskogee) | 35.85, -95.36 | US-69 by Okay, just after the Arkansas (moderately known) | Muskogee–Wagoner, –Pryor |
| Verdigris River bridge (US-60, Nowata) | 36.69, -95.56 | US-60 between Nowata and Vinita (moderately known) | Nowata–, Bartlesville–Vinita |
| Illinois River bridge (US-62, Tahlequah) | 35.90, -94.94 | US-62 east of Tahlequah, the float-trip river (moderately known) | Tahlequah–Stilwell |
| Washita River bridges (Chickasha) | 35.08, -97.93 | US-62 and US-81 at Chickasha (moderately known) | 8: Chickasha to OKC, El Reno, Newcastle, Tuttle |
| Washita River bridge (US-281, Anadarko) | 35.07, -98.28 | Anadarko on the Washita (moderately known) | Anadarko–Weatherford, –Cordell, –Hobart |
| Washita River bridge (Clinton) | 35.52, -98.95 | Clinton on the Washita, US-183 (moderately known) | 5: Clinton–Weatherford, Weatherford–Elk City |
| Washita River bridge (Pauls Valley) | 34.77, -97.23 | Pauls Valley on the Washita, OK-19 (moderately known) | 7: Purcell–, Norman–Pauls Valley |
| Washita River bridge (Davis) | 34.47, -97.12 | The Washita at Davis, at the Arbuckles' north foot (moderately known) | Davis–Ardmore, –Turner Falls |
| Roosevelt Bridge (US-70, Lake Texoma) | 34.00, -96.60 | US-70 over the lake's Washita arm, Kingston–Durant | Durant–Kingston, –Marietta |
| Cimarron River bridge (I-35, Guthrie) | 35.98, -97.41 | I-35 north of Guthrie | Guthrie–, Edmond–Perry |
| Cimarron River bridge (US-177, Perkins) | 35.97, -97.03 | US-177 at Perkins, Stillwater's road south | Stillwater–Chandler, –Shawnee |
| Cimarron River bridge (US-81, Dover) | 35.96, -97.93 | US-81 at Dover (moderately known) | Kingfisher–Enid |
| Cimarron River bridge (US-281, Waynoka) | 36.52, -98.89 | US-281 south of Waynoka (moderately known) | Woodward–, Seiling–Little Sahara |
| Cimarron River bridge (US-287, north of Boise City) | 36.93, -102.54 | US-287/385 toward Springfield, Colorado (moderately known) | Boise City–Springfield (47 mi) |
| US-69 bridge (Eufaula Lake, north of Eufaula) | 35.32, -95.57 | US-69's causeway over the North Canadian arm (moderately known) | Checotah–Eufaula, McAlester–Checotah |
| US-69 bridge (Eufaula Lake, south of Eufaula) | 35.22, -95.61 | US-69's bridge over the Canadian arm (moderately known) | Eufaula–McAlester |
| US-69 bridge (Eufaula Lake, Crowder) | 35.10, -95.68 | US-69's bridge over the southern arm by Crowder (moderately known) | Eufaula–, Checotah–McAlester |
| I-40 bridges (Eufaula Lake) | 35.46, -95.63 | I-40 over the lake's north arm west of Checotah | Henryetta–, Okemah–Checotah |
| Red River bridges: I-35 (Thackerville–Gainesville) 33.73, -97.15; US-69/75 (Colbert–Denison) 33.83, -96.54; I-44 (Randlett–Burkburnett) 34.08, -98.48; US-271 (Hugo–Paris) 33.88, -95.50 | | The main crossings into Texas (US-271 moderately known) | For Texas later |

The Eufaula bridges keep **US-69 open in Tough**: Checotah–Eufaula and Eufaula–McAlester were blocked without them (2.5 and 3 mi of lake). The Roosevelt Bridge does the same for Durant–Kingston (3.5 mi).

**Map quirks (not real crossings, so no bridge; rivers cost, they never block):**
- **Oklahoma City:** the map's North Canadian runs through downtown and then loops north-east to (35.60, -97.31), so Oklahoma City–Chandler crosses it twice and Midwest City lines once. The real river runs east from downtown, south of the Turner Turnpike.
- **Shawnee:** the map's river passes through the city and wiggles east of it (Shawnee–Okemah crosses twice, Shawnee–Seminole once); the real river is north of town.
- **Yukon–El Reno** crosses the map's river twice; I-40 stays south of it.
- **The I-40 Arkansas crossing** at Webbers Falls isn't on any straight line (above).

### How the map plays

**Counts.** Of the 3,018 pairs of places (at least one in Oklahoma) within 100 mi of each other:
- **Gentle:** one is blocked: Poteau–Hugo (89 mi), which runs 9 mi up Hugo Lake.
- **Tough:** 45 are blocked, all by reservoirs, 33 of them over 60 mi. The 12 within 60 mi: Sallisaw–Stigler (22 mi), Durant–Madill (23), Pryor–Nowata (33), Durant–Ardmore (45), Sallisaw–Eufaula (45), Sallisaw–Wilburton (46), Bartlesville–Pryor (47), Bartlesville–Mannford (47), Stilwell–Stigler (47), Coffeyville–Claremore (50), Stigler–Henryetta (51) and Coweta–Stilwell (59). They cross Robert S. Kerr Reservoir, Lake Texoma's Washita arm north of the Roosevelt Bridge, Lake Oologah, Keystone Lake, Eufaula Lake or Fort Gibson Lake away from a real crossing.
- With links up to 60 mi every Oklahoma place is in one network in Tough. The fewest open links (within 60 mi, Tough) any place has is 4 (Black Mesa, in the corner by Colorado and New Mexico); Guymon, Boise City and Idabel have 5.

**Main stations.** Every main station reaches at least three neighbouring regions' main stations directly, in both modes. Blocked in Tough only:
- **Durant–Ardmore** (45 mi): Lake Texoma's Washita arm, 2.5 mi, north of the Roosevelt Bridge. The real road (US-70) goes by Kingston and Madill, and that chain is open. Durant reaches McAlester, Idabel and Sulphur; Ardmore reaches Purcell, Duncan and Sulphur.
- **Sallisaw–McAlester** (65 mi) and **Sallisaw–Stigler** (22 mi, a town): Robert S. Kerr Reservoir, 4–5 mi. The real road (US-59 by Keota) crosses at the reservoir's east end, about 4 mi east of the straight line, so no bridge point can serve it in Tough. Sallisaw reaches Tahlequah, Muskogee, Poteau and Okmulgee; Stigler reaches McAlester, Wilburton, Eufaula and Poteau.
- **Bartlesville–Pryor** (47 mi): Lake Oologah, 3 mi. Bartlesville reaches Tulsa, Claremore, Hominy, Coffeyville and Arkansas City; Pryor reaches Claremore, Coweta, Tahlequah, Miami, Coffeyville, Parsons and Pittsburg.
- The longest neighbour links are in the west: Guymon–Woodward 117 mi (the Panhandle's one neighbour in Oklahoma), Woodward–Kingfisher 91.

**The real routes, as chains,** are open in both modes (the longest link in brackets):
- **I-35 and the BNSF north:** Oklahoma City–Edmond–Guthrie–Perry–Blackwell, then Arkansas City and Wellington, Kansas (35 mi); and Perry–Ponca City–Arkansas City (the BNSF; 32).
- **I-35 and the Heartland Flyer south:** Oklahoma City–Moore–Norman–Purcell–Pauls Valley–Davis–Ardmore–Marietta (21).
- **I-40 west:** Oklahoma City–Yukon–El Reno–Hinton–Weatherford–Clinton–Elk City–Sayre (25).
- **I-40 east:** Oklahoma City–Midwest City–Shawnee–Okemah–Henryetta–Checotah–Sallisaw–Roland (40); also Checotah–Muskogee–Sallisaw (36).
- **I-44 (the Turner and Will Rogers turnpikes):** Oklahoma City–Chandler–Stroud–Bristow–Sapulpa–Tulsa–Catoosa–Claremore–Vinita–Miami, then Baxter Springs, Kansas (39).
- **I-44 (the H.E. Bailey Turnpike):** Oklahoma City–Newcastle–Chickasha–Lawton–Walters (39).
- **US-69 and the Katy:** Parsons, Kansas–Vinita–Pryor–Wagoner–Muskogee–Checotah–Eufaula–McAlester–Atoka–Durant (48, Parsons–Vinita; 43 in Oklahoma).
- **US-75:** Coffeyville and Independence, Kansas–Bartlesville–Owasso–Tulsa–Okmulgee–Henryetta–Holdenville–Coalgate–Atoka–Durant (39).
- **US-81 (the Chisholm Trail):** Wellington, Kansas–Medford–Enid–Kingfisher–El Reno–Chickasha–Duncan–Waurika (40).
- **US-412 and the Cimarron Turnpike:** Tulsa–Sand Springs–Cleveland–Stillwater–Enid–Fairview–Woodward (52).
- **The BNSF's Southern Transcon:** Medicine Lodge, Kansas–Alva–Woodward–Shattuck (48).
- **The Panhandle:** Liberal, Kansas–Guymon–Boise City–Clayton, New Mexico (57), Hugoton–Guymon (34), Elkhart–Boise City (39) and Boise City–Springfield, Colorado (US-287 toward Lamar; 47).
- **US-62:** Tulsa–Coweta–Muskogee–Fort Gibson–Tahlequah–Stilwell (24).
- **US-70:** Lawton–Duncan–Ardmore–Madill–Kingston–Durant–Hugo–Idabel (51).
- **US-60 and US-77:** Ponca City–Pawhuska–Bartlesville–Nowata–Vinita–Miami (41).
- Others checked: Pawhuska–Hominy–Cleveland (OK-99), Miami–Grove–Tahlequah–Sallisaw–Poteau (US-59), McAlester–Wilburton–Poteau–Heavener (US-270), Clinton–Cordell–Hobart–Frederick (US-183), Lawton–Altus–Hollis (US-62), Elk City–Sayre–Mangum–Altus, Chickasha–Anadarko–Hobart, Purcell–Ada–Seminole–Shawnee, Ada–Sulphur–Ardmore, Durant–Tishomingo–Ada.

**Across the borders** (all open in both modes): Arkansas City–Ponca City (24 mi, over Kansas's US-166 Arkansas River bridge) and –Blackwell (24); Wellington–Blackwell (34) and –Medford (38); Anthony–Medford (30); Coffeyville–Bartlesville (26) and –Nowata (23); Independence–Bartlesville (36); Parsons–Vinita (47) and –Miami (38); Baxter Springs–Miami (12); Pittsburg–Miami (37); Sedan–Pawhuska (33); Medicine Lodge–Alva (35); Ashland–Buffalo (26); Coldwater–Buffalo (35); Liberal–Guymon (39) and –Beaver (28); Hugoton–Guymon (34); Elkhart–Boise City (39); Springfield, Colorado–Boise City (47); Clayton, New Mexico–Boise City (40).

**Neighbours.** Nothing in this pack blocks a line between two other states' places: Oklahoma's lakes are inside Oklahoma, but for Lake Texoma's Texas side (Texas comes later), and its bridges only open lines.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Oklahoma City & Central Oklahoma | `central` | Oklahoma City, Norman, El Reno, Guthrie, Stillwater, Shawnee, Chickasha, Purcell, Chandler, Kingfisher, Seminole | 50 passengers; own 5 counties; 10 crates of produce |
| Tulsa & Green Country | `northeast` | Tulsa, Sapulpa, Claremore, Coweta, Bartlesville, Muskogee, Okmulgee, Hominy, Pryor, Miami, Tahlequah, Sallisaw | 140 passengers; connect OKC–TULS (the Turner Turnpike and Route 66, by Chandler, Stroud, Bristow and Sapulpa; open in both modes); own 12 counties |
| Lawton, Lake Texoma & the Ouachitas | `south` | Lawton, Duncan, Frederick, Ardmore, Sulphur, Ada, Durant, McAlester, Idabel, Poteau | 280 passengers; connect OKC–ARD (I-35 and the Heartland Flyer, by Norman, Purcell, Pauls Valley and Davis; open in both modes); one high-speed train |
| Enid, Western Oklahoma & the Panhandle | `west` | Enid, Ponca City, Alva, Woodward, Guymon, Elk City, Weatherford, Anadarko, Altus | 450 passengers; connect OKC–ELKC (I-40 and Route 66, by El Reno, Weatherford and Clinton; open in both modes); own 25 counties |

- **Targets** follow Kansas's, Nebraska's and the Dakotas' four levels.
- **Areas join up:** Creek touches Lincoln-Okfuskee and Payne; Comanche touches Grady, and Coal-Pontotoc touches Pottawatomie, Garvin-McClain and Hughes-Seminole; Garfield touches Logan, and Caddo-Kiowa touches Canadian and Grady.
- **No container goal** (no port) and **no trucks goal** (Oklahoma's desert places are two scenic sand and salt flats), as Kansas.

### Biomes

- **`forest`** (trees even on the flats): Choctaw-McCurtain-Pushmataha and Latimer-Le Flore (the Ouachita National Forest's pine and oak, Kiamichi Country, Beavers Bend, the Winding Stair) and Adair-Cherokee (the Ozark plateau's oak-hickory woods round Tahlequah and the Illinois River). Eastern Oklahoma is wooded; these are its most forested regions.
- **`wooded`** (trees on the hills): Atoka-Pittsburg (the Ouachitas' foothills; the map has hill cells there), Delaware-Ottawa (the Ozark hills of Delaware County by Grand Lake) and Haskell-Sequoyah (the Ozark edge and the Sans Bois hills). The last two have few or no hill cells, so few trees show yet.
- **Not listed** (farmland and grassland): the wheat and cattle country of the centre and west, the Cross Timbers between Oklahoma City and Tulsa (post-oak scrub, thin on a flat map), the red-earth south-west and the Panhandle's short-grass, as Kansas's Morton-Stevens and Colorado's Baca-Kiowa-Prowers across the lines.
- **No `dry`:** Oklahoma has no desert; Little Sahara's dunes and the Great Salt Plains are small.

### Checks

- **`node tools/check-pack.js OK`:** `OK: passed (42 stations, 77 towns, 0 city maps, 0 passes, 47 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js OK`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is OKC, ELR and NOR. The test laid Oklahoma City–El Reno (30 mi of track, 1 train), bought Blaine-Kingfisher-Major (KFSH), and 24 passengers arrived in the week.
  - Levels mode starts at level 1 (50 passengers, 5 counties, 10 crates of produce).
- **Screenshots** (`test-out/OK/`: arcade light and dark, classic light, levels): Oklahoma City sits on the North Canadian, with El Reno to the west and Norman to the south, beside the map's Canadian. The river bridges at Lake Overholser, El Reno, Union City, Newcastle, Norman and Purcell show along the start, and the Pony Bridge and the I-40 bridge show by Hinton. The Ouachitas' forest shows in the south-east, with a few trees on the Ozark edge.

### For the main agent

1. **Three station exceptions:** El Reno (Canadian, the real centre and the start's farm station), Purcell (Garvin-McClain) and Chandler (Lincoln-Okfuskee). Idabel, Hominy and Coweta stay at the biggest place.
2. **Airports:** Will Rogers World (Oklahoma City) and Tulsa International. **No port** (Catoosa is a barge port).
3. **Points moved to downtown:** Tulsa (5.1 mi), Norman (5.5), Shawnee (3.1), Chandler (2.6), Elk City (2.1); towns Edmond, Davis, Tuttle, Walters, Pauls Valley.
4. **Sizes:** Oklahoma City and Tulsa 4, Norman 3.
5. **Four Red River bridges** are listed for Texas to match (I-35, US-69/75, I-44, US-271); Kansas's US-166 bridge at Arkansas City now serves Arkansas City–Ponca City.
6. **Tough blocks** worth knowing: Sallisaw–Stigler and Sallisaw–McAlester (Kerr Reservoir, the real crossing lies east of the straight line) and Durant–Ardmore (Lake Texoma, open by Kingston).
