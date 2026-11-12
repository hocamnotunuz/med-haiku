# North Dakota (ND) pack notes

## Region merges (phase 1)

Populations: `packs/ND/raw/counties.json` and `packs/ND/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 779,079). Every group is connected through `neighbors` (checked), and the shared border lengths (km) were measured on the rings in `map.js`. Roads, rivers, railways and reservations named here are well known unless marked "(moderately known)".

### Recommended (53 → 25 regions)

```
merge: [["Divide", "Williams"], ["Burke", "Mountrail"], ["Dunn", "McKenzie"], ["Mercer", "Oliver"], ["Billings", "Golden Valley", "Stark"], ["Adams", "Bowman", "Slope"], ["Grant", "Hettinger"], ["Morton", "Sioux"], ["McLean", "Sheridan"], ["Bottineau", "Renville"], ["Rolette", "Towner"], ["McHenry", "Pierce"], ["Benson", "Nelson", "Ramsey"], ["Cavalier", "Pembina", "Walsh"], ["Steele", "Traill"], ["Barnes", "Griggs"], ["Ransom", "Richland", "Sargent"], ["Kidder", "Stutsman"], ["Eddy", "Foster", "Wells"], ["Emmons", "Logan", "McIntosh"], ["Dickey", "LaMoure"]]
names: { "Billings-Golden Valley-Stark": "Stark-Billings-Golden Valley County" }
```

- No `bridges` or `join`: no county is cut off by water.
- The groups are listed in alphabetical order because the tool sorts a group's counties that way for its name and id, whatever order they are listed in. So the `names` key is the alphabetical one.
- The one rename keeps the name from starting with "Billings": Billings, Montana is the station of the Yellowstone region next door. This is the same fix as Colorado's "Kit Carson-Cheyenne County". Stark (Dickinson) comes first, then the counties follow I-94 west: Billings (Medora), then Golden Valley (Beach). Golden Valley is also the name of a Montana county.

**Alone, over 50k (4):** Cass (Fargo 125,952), Burleigh (Bismarck 73,626), Grand Forks (Grand Forks 59,169), Ward (Minot 48,385). No county under 50k stays alone.

**Bismarck and Mandan stay apart.**
- Burleigh is over 50k, and the standard keeps such a county alone.
- Mandan (24,186) is the state's eighth-largest place and the gateway west. I-94 and the old Northern Pacific (BNSF) main line cross the Missouri between the two cities and run on to Dickinson.
- Merging them would cost a strong station and make one 132k region. The cities stay neighbours across their bridges, so the I-94 chain stays clean.
- Morton takes Sioux (Standing Rock) instead.

| Group (border km) | Why | Main station | Population |
| --- | --- | --- | --- |
| Divide + Williams (86) | The northwest corner. Williston is on US-2 and the Hi-Line (Empire Builder). Divide (Crosby) lies north of it along the Canadian line | Williston (29,169) | 43,140 |
| Burke + Mountrail (48) | North of Lake Sakakawea: Stanley on US-2 (Empire Builder stop), New Town and Parshall (Fort Berthold), and Burke's towns to the north (Powers Lake, Bowbells, and Portal, the Soo Line crossing to Saskatchewan, moderately known) | New Town (2,768). Stanley (2,352) is the county seat and the railway town, a phase 2 choice | 11,991 |
| Dunn + McKenzie (89) | Bakken oil country south of the lake: Watford City on US-85, Killdeer, and the Little Missouri badlands (TRNP North Unit) | Watford City (6,217) | 18,802 |
| Mercer + Oliver (70) | The Missouri's west bank above Mandan: Beulah, Hazen and Stanton on the Knife River, and Center. Lignite mines and power plants (moderately known) | Beulah (3,058) | 10,229 |
| Billings + Golden Valley + Stark (54, 82) | I-94 and the old NP main line west from Dickinson by Belfield, Medora (TRNP South Unit) and Beach to Montana | Dickinson (25,674) | 36,324 |
| Adams + Bowman + Slope (37, 81) | The southwest corner: US-12 and the old Milwaukee Road from Marmarth by Bowman to Hettinger (moderately known), and US-85 north by Amidon | Bowman (1,469) | 5,908 |
| Grant + Hettinger (54) | The upper Cannonball River country: Mott, New England, Regent, Elgin, Carson (moderately known) | New England (695). Mott (655, the county seat) is nearly tied | 4,782 |
| Morton + Sioux (43) | Mandan and the Missouri's west bank south to Fort Yates and Standing Rock (ND-1806, moderately known). South of Bismarck there is no crossing in North Dakota (moderately known) | Mandan (24,186) | 37,183 |
| McLean + Sheridan (64) | US-83 between Bismarck and Minot (Wilton, Washburn, Underwood, Max), Garrison Dam, and McClusky's farmland east of it | Garrison (1,468) | 11,045 |
| Bottineau + Renville (82) | The border strip north of Minot: Mohall, Glenburn, Westhope, and Bottineau at the west end of the Turtle Mountains. The Souris River crosses both (moderately known) | Bottineau (2,191) | 8,666 |
| Rolette + Towner (53) | The Turtle Mountain reservation (Belcourt), Rolla and Dunseith (Peace Garden), and the prairie east to Cando | Rolla (1,217) | 14,353 |
| McHenry + Pierce (83) | US-2 and the Hi-Line from Rugby (Empire Builder stop, the geographic center of North America marker) by Towner and Granville toward Minot. Velva is on the Souris (moderately known) | Rugby (2,510) | 9,349 |
| Benson + Nelson + Ramsey (108, 48) | Devils Lake and its basin: Spirit Lake Nation (Fort Totten), and US-2/Hi-Line east to Lakota | Devils Lake (7,183) | 20,570 |
| Cavalier + Pembina + Walsh (52, 29, 57) | The northeast corner: I-29 and the Red River to the Pembina–Emerson crossing, Grafton, Park River, and west by the Pembina Gorge to Langdon (moderately known) | Grafton (4,171) | 21,125 |
| Steele + Traill (50) | Red River valley between Fargo and Grand Forks: I-29 at Hillsboro, Mayville, then west to Finley and Hope | Mayville (1,847) | 9,793 |
| Barnes + Griggs (38) | I-94 and the old NP main line at Valley City, and the Sheyenne River north to Lake Ashtabula and Cooperstown (moderately known) | Valley City (6,582) | 13,151 |
| Ransom + Richland + Sargent (38, 56, 42) | The southeast corner: Wahpeton, where the Red River begins, I-29, Lisbon and Enderlin, and the Sheyenne National Grassland (moderately known) | Wahpeton (8,016) | 26,084 |
| Kidder + Stutsman (79) | I-94 and the NP main line from Jamestown west by Medina, Tappen and Steele. The James River runs south from Jamestown | Jamestown (15,847) | 23,976 |
| Eddy + Foster + Wells (58, 31, 29) | The middle of the state: US-52/281 cross at Carrington, with New Rockford north and Harvey and Fessenden northwest (moderately known) | Carrington (2,081) | 9,724 |
| Emmons + Logan + McIntosh (42, 38, 65) | South-central farm towns: Linton on US-83, and Napoleon, Wishek and Ashley (moderately known) | Linton (1,068) | 7,708 |
| Dickey + LaMoure (75) | The James River valley south of Jamestown: LaMoure, Edgeley, Oakes and Ellendale (moderately known) | Oakes (1,797) | 9,088 |

Station rule: the largest place in places.json, as in New Mexico and Montana.

The corridors stay clean chains:
- **I-94 / old NP (BNSF):** Cass, Barnes-Griggs, Kidder-Stutsman, Burleigh, Morton-Sioux, Stark-Billings-Golden Valley, then Montana (Dawson-Prairie-Wibaux).
- **Empire Builder, then US-2 / Hi-Line:** Cass (Fargo), Steele-Traill, Grand Forks, Benson-Nelson-Ramsey (Devils Lake), McHenry-Pierce (Rugby), Ward (Minot), Burke-Mountrail (Stanley), Divide-Williams (Williston), then Montana (Roosevelt-Valley). Each Amtrak stop lies in its own region.
- **I-29:** Ransom-Richland-Sargent, Cass, Steele-Traill, Grand Forks, Cavalier-Pembina-Walsh, then Manitoba.
- **US-83:** Emmons-Logan-McIntosh, Burleigh, McLean-Sheridan, Ward.
- **US-85:** Adams-Bowman-Slope, Stark-Billings-Golden Valley (Belfield), Dunn-McKenzie, Divide-Williams.

Rejected:
- **Burleigh + Morton:** see above.
- **Williams + McKenzie** (the Bakken around Williston): Watford City would lose its station, and the Missouri lies between them. **Williams + Mountrail** (US-2; 50,739): Stanley and New Town would lose their station.
- **Mercer + McLean** (Garrison Dam): across the Missouri. **Oliver + Morton** (Center to Mandan) is reasonable, but Mercer would then need Dunn and McKenzie would need Mountrail. That is the alternative below.
- **Grant + Hettinger + Sioux** (the Cannonball River): Fort Yates's roads lead north to Mandan, and New England would be Standing Rock's station.
- **Adams + Grant + Hettinger with Bowman + Slope:** the same count. It keeps the town and the county of Hettinger together (station Hettinger, 1,069). But it splits US-12 and the old Milwaukee Road, and leaves Bowman-Slope at 3,700.
- **Bottineau + Rolette** (all of the Turtle Mountains): Renville could then pair only with Burke (4,480, Mohall), and Mountrail would have to take McLean, a long arc along the lake's north shore.
- **Barnes + Griggs + Ransom** (the Sheyenne valley through Valley City, Fort Ransom and Lisbon), with Richland + Sargent: the same count and better balanced (18,851 and 20,384). But Barnes and Ransom share only 27 km, and Ransom, Richland and Sargent make a compact block.
- **Towner instead of Nelson with Ramsey:** Nelson would then have no good partner. It touches Benson and Steele for only 8 km each, and Grand Forks stays alone.

### Alternative (24 regions)

Replace `["Divide", "Williams"]`, `["Burke", "Mountrail"]`, `["Dunn", "McKenzie"]` and `["Mercer", "Oliver"]` with these three:

| Group | Main station | Population |
| --- | --- | --- |
| `["Burke", "Divide", "Williams"]` | Williston | 45,337 |
| `["McKenzie", "Mountrail"]` | Watford City | 24,502 |
| `["Dunn", "Mercer", "Oliver"]` | Beulah | 14,323 |

- **Pro:** one region fewer. The Bakken heart around the Four Bears Bridge (New Town to Four Bears Village and Watford City) is one region.
- **Con:** it crosses Lake Sakakawea on its only bridge in that stretch (moderately known). Stanley and New Town lose their station. Killdeer's market is Dickinson, not Beulah.

### Map and data check

1. **The map looks right.**
   - All 53 counties are one piece each, and every label is inside its county.
   - The areas add up to about 70,180 sq mi, close to North Dakota's total with water (about 70,700).
   - All 406 places lie inside their tagged county except North River (city, 57, Cass). It is already flagged `offMap`: it sits on the Red River north of Fargo, just outside the simplified line.
2. **Neighbours agree both ways** inside the state and with Montana, Saskatchewan and Manitoba (20 cross-border links). Bottineau–`sk-division-no-1-2` is right: the Saskatchewan–Manitoba line meets the 49th parallel at about 101.36°W, inside Bottineau's north edge (about 10 km).
   - Missing as expected: Minnesota (Richland, Cass, Traill, Grand Forks, Walsh, Pembina).
   - Missing as expected: South Dakota (Bowman, Adams, Sioux, Emmons, McIntosh, Dickey, Sargent, Richland).
3. **Short contacts:** Dickey–Ransom 2 km, LaMoure–McIntosh 3, Adams–Slope 6, Kidder–Sheridan 6, Mercer–Stark 7, Benson–Nelson 8, Nelson–Steele 8, Eddy–Griggs 9. No merge depends on any of them.
4. **Canada line drawing (cosmetic, tool side):**
   - From the Montana corner to 103.21°W, the 49th parallel along Divide (about 61 km) is in neither ND's `stateBorders` nor its `coast`, because `ND-SK-0` starts at 103.21°W. Saskatchewan's map draws that stretch as coast.
   - ND's `coast` also has a piece at 49°N from 101.50 to 101.13°W (about 27 km, Bottineau). It lies on top of `ND-SK-0` and `MB-ND-0`.
5. **Names:**
   - The towns of Hettinger (Adams County), Towner (McHenry) and Steele (Kidder) lie outside the regions named after their counties (Grant-Hettinger, Rolette-Towner, Steele-Traill). Phase 2 should avoid them as towns or say where they are.
   - Other towns with a county's name: Cavalier is in Pembina, the same region, which is fine. Also Golden Valley (Mercer), Mercer (McLean), McHenry (Foster), Adams (Walsh), Dickey (LaMoure) and Logan (CDP, Ward).
   - The Census name "Canton City (Hensel)" (Pembina, 32) needs the parenthesis dropped if it is ever used.
6. **Places without population:** all 51 are CDPs. Among them are Belcourt (the Turtle Mountain reservation's main community, in Rolette), Fort Totten, Cannon Ball, Mandaree, Four Bears Village, White Shield, Minot AFB and Grand Forks AFB. No station depends on them. Rolla is Rolette-Towner's station by the rule; Belcourt could be chosen only with a population from another source.
