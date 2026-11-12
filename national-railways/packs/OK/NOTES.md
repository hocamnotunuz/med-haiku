# Oklahoma (OK) pack notes

## Region merges (phase 1)

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
