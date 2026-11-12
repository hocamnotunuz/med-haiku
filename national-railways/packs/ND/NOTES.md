# North Dakota (ND) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (25 regions, with the `Stark-Billings-Golden Valley County` rename). The map and raw facts were rebuilt, and the pack (phase 2, below) is built on it. The Canada-line drawing quirk (item 4 of the map check) is left to the map tool.

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

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/ND/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` points rounded to 2 decimals, except Williston (moved, below) and the scenic places marked approx.
- **Facts added by hand** (bridges, scenic places, roads and railways) are well known unless marked "approx." (a point I gave from memory, within about a mile or two) or "moderately known".
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain. To test a bridge, it was taken out of the pack (then `NR.packsChanged()`), and every pair was compared.

### Start

`start: ["nd-cass", "nd-ransom-richland-sargent", "nd-barnes-griggs"]`: Fargo, Wahpeton and Valley City. All three touch each other.
- **Types:** metro, farm and farm.
- **First track:** the hint pairs Fargo with Wahpeton (42 mi crow, 48 mi of track, open in both modes), metro to farm, up the Red River valley along I-29. The pack test laid it, and 11 and 12 passengers arrived in the week in two runs.
- **Considered:** Steele-Traill (Mayville) instead of Ransom-Richland-Sargent. It touches Cass and Barnes-Griggs too, but Wahpeton (26k region, 8,016 in town) gives the first track more riders than Mayville (10k region, 1,847 in town).
- **Note:** the map's Red River bends west between Fargo and Wahpeton, so the straight Fargo–Wahpeton line crosses it twice (two new river bridges, about FB20k in Gentle). The test's budget covered it easily.

### Main stations (25)

Each id is unused in every other pack (the checker checks). FAR, FGO, GFK, MIN, WIL, MDN, VCY, WAT, CAR, GAR, MAY, OAK and LIN are taken.

**Sizes** follow the PACKS.md guide and the neighbours (Billings 165k and Brandon 71k are 2): **2** for the four regions over 50k (Fargo 185k, Bismarck 98k, Grand Forks 73k, Minot 70k), **1** for the rest.

**Types:** 5 metro, 17 farm, 3 desert.
- North Dakota is farm country, as Saskatchewan and Manitoba are typed across the border.
- The Badlands stations are desert, as Montana types Glendive and Baker across the line.
- No mountain or coast: the Turtle Mountains are low wooded hills, and Manitoba types its side (Killarney, the Peace Garden) as farm.

| Station | Region, pop | Type, size | Why |
| --- | --- | --- | --- |
| Fargo (FRGO) | Cass, 185k | metro 2 | Biggest city (125,952). **Census point kept** (46.86, -96.83), 2.1 mi west-southwest of downtown. Downtown is on the Red River (the state line): a line from there to downtown Grand Forks would cross the map's river bends four times. From the Census points it crosses no Red River bend at all. West Fargo (38,632) is left out: it is 3.3 mi from this point (the checker warns under 4) |
| Grand Forks (GRFK) | Grand Forks, 73k | metro 2 | UND and the Air Force Base. **Census point kept** (47.92, -97.09), 2.5 mi west of downtown on the Red River, for the same reason |
| Wahpeton (WAH) | Ransom-Richland-Sargent, 26k | farm 1 | Biggest (8,016; Lisbon 2,202). Where the Red River begins |
| Mayville (MYV) | Steele-Traill, 10k | farm 1 | Biggest (1,847; Hillsboro 1,649) |
| Grafton (GRF) | Cavalier-Pembina-Walsh, 21k | farm 1 | Biggest (4,171; Langdon 1,906). GRA was free too; GRF reads as Grafton |
| Valley City (VLY) | Barnes-Griggs, 13k | farm 1 | Biggest (6,582). I-94 and the old Northern Pacific cross the Sheyenne valley here |
| Jamestown (JMS) | Kidder-Stutsman, 24k | farm 1 | Biggest (15,847). On the James River and I-94 |
| Bismarck (BIS) | Burleigh, 98k | metro 2 | The capital (73,626) |
| Mandan (MAN) | Morton-Sioux, 37k | farm 1 | Biggest (24,186). Farm (the ranches and Standing Rock beyond the town), so Bismarck–Mandan has riders. MAN was free |
| Oakes (OKS) | Dickey-LaMoure, 9k | farm 1 | Biggest (1,797; Ellendale 1,123) |
| Linton (LTN) | Emmons-Logan-McIntosh, 8k | farm 1 | Biggest (1,068; Wishek 860) |
| Carrington (CRN) | Eddy-Foster-Wells, 10k | farm 1 | Biggest (2,081; Harvey 1,648) |
| Devils Lake (DVL) | Benson-Nelson-Ramsey, 21k | farm 1 | Biggest (7,183). Farm, not coast: a farm-service town on a prairie lake (Manitoba's Gimli, coast, is a harbour town on Lake Winnipeg) |
| Rugby (RUG) | McHenry-Pierce, 9k | farm 1 | Biggest (2,510). Empire Builder stop; the geographic center of North America marker |
| Rolla (ROL) | Rolette-Towner, 14k | farm 1 | Biggest place with a population (1,217; Cando 1,121). Belcourt, the Turtle Mountain reservation's main community, is a CDP with no population in the data |
| Bottineau (BOT) | Bottineau-Renville, 9k | farm 1 | Biggest (2,191) |
| Minot (MOT) | Ward, 70k | metro 2 | Biggest (48,385). Minot Air Force Base |
| Garrison (GRSN) | McLean-Sheridan, 11k | farm 1 | Biggest (1,468; Washburn 1,299). On Lake Sakakawea's north shore (see "How the map plays") |
| Dickinson (DIK) | Stark-Billings-Golden Valley, 36k | desert 1 | Biggest (25,674). The Badlands' city (the South Unit at Medora is 34 mi west), typed like Glendive across the line. DCK is taken |
| Watford City (WFC) | Dunn-McKenzie, 19k | desert 1 | Biggest (6,217). Bakken oil and the Little Missouri badlands (the North Unit) |
| Williston (WILS) | Divide-Williams, 43k | metro 1 | Biggest (29,169). The Bakken's oil capital, typed metro like Alberta's Fort McMurray and Manitoba's Thompson. **Moved** to 48.17, -103.62, 1.6 mi north of downtown. The map's Lake Sakakawea reaches up the Missouri over downtown (about 48.15, -103.62), and the Census point (48.19, -103.65) is 3.2 mi north-northwest |
| Stanley (STAN) | Burke-Mountrail, 12k | farm 1 | **Not the biggest** (New Town 2,768; Stanley 2,352). Stanley is the county seat and the Empire Builder's stop on US-2 and the Hi-Line, midway between Minot (52 mi) and Williston (57 mi), so the Hi-Line is a chain of main stations. New Town is a town here, at the Four Bears Bridge |
| Beulah (BEU) | Mercer-Oliver, 10k | farm 1 | Biggest (3,058; Hazen 2,280). The Knife River's coal mines and power plants (moderately known) |
| Bowman (BOW) | Adams-Bowman-Slope, 6k | desert 1 | Biggest (1,469). Dry short-grass ranch country, as Baker across the line |
| Mott (MTT) | Grant-Hettinger, 5k | farm 1 | **Not the biggest** (New England 695; Mott 655): nearly tied. Mott is the county seat, on the Cannonball in the middle of the region. New England is at its northwest corner, 24 mi from Dickinson. MOTT would read too much like MOT (Minot) |

**No airports.**
- The bar the other packs use is about 1 million passengers a year. Montana left out Billings Logan at about 0.9–1.0 million.
- Fargo's Hector International is about the same size (from memory) and is left out the same way. If the main agent wants it, add `airport: "Hector International"` to FRGO.
- Bismarck, Minot, Grand Forks and Williston are well below the bar.

**No ports.**

### Towns (41: 35 towns and 6 scenic places)

Every town is inside its region. The checker gives no spacing warnings. The closest pairs are Fort Abraham Lincoln–Bismarck (5.1 mi), Fort Abraham Lincoln–Mandan (5.2) and Beulah–Hazen (6.9). Populations are from `places.json`.

| Region | Towns |
| --- | --- |
| Cass | Casselton (2,479, on I-94) |
| Grand Forks | Larimore (1,258, on US-2 and the Hi-Line) |
| Ransom-Richland-Sargent | Lisbon (2,202); Hankinson (919) |
| Steele-Traill | Hillsboro (1,649, on I-29) |
| Cavalier-Pembina-Walsh | Langdon (1,906); Pembina (512, I-29's crossing to Emerson, Manitoba) |
| Barnes-Griggs | Cooperstown (983) |
| Kidder-Stutsman | Steele (665, on I-94; the town in Kidder County, not Steele County) |
| Burleigh | none (see below) |
| Morton-Sioux | **Fort Abraham Lincoln** (scenic); Fort Yates (178, the Standing Rock Sioux Tribe's headquarters) |
| Dickey-LaMoure | Ellendale (1,123); LaMoure (761) |
| Emmons-Logan-McIntosh | Wishek (860); Napoleon (752) |
| Eddy-Foster-Wells | Harvey (1,648, on US-52); New Rockford (1,360, on US-281) |
| Benson-Nelson-Ramsey | Lakota (685) and Leeds (442), both on US-2 and the Hi-Line |
| McHenry-Pierce | Velva (1,096, on US-52 and the Souris) |
| Rolette-Towner | Cando (1,121); Dunseith (637, on US-281 to the International Peace Garden) |
| Bottineau-Renville | Mohall (699) |
| Ward | Kenmare (956, on US-52 and the Soo Line toward Portal) |
| McLean-Sheridan | Washburn (1,299, on US-83); McClusky (324); **Garrison Dam** (scenic) |
| Stark-Billings-Golden Valley | **Medora** (117, scenic); Beach (979, on I-94 near Montana) |
| Dunn-McKenzie | Killdeer (937); **Theodore Roosevelt North Unit** (scenic) |
| Divide-Williams | Tioga (2,206, on US-2); Crosby (1,068) |
| Burke-Mountrail | New Town (2,768); Portal (123, the Soo Line and US-52 crossing to North Portal, Saskatchewan) |
| Mercer-Oliver | Hazen (2,280); **Knife River Indian Villages** (scenic) |
| Adams-Bowman-Slope | Hettinger (1,069; the town is in Adams County, and Hettinger County is the Mott region); Marmarth (100, on US-12 and the Little Missouri) |
| Grant-Hettinger | **Enchanted Highway** (scenic); Elgin (543) |

**Scenic places** (all well known):

| Place | Point | What it is |
| --- | --- | --- |
| Medora | 46.91, -103.53 | The gateway town of Theodore Roosevelt National Park's South Unit, on I-94 in the Badlands |
| Theodore Roosevelt North Unit | 47.60, -103.26 approx. | The park's North Unit entrance on US-85, south of Watford City, by the Long X Bridge over the Little Missouri |
| Fort Abraham Lincoln | 46.76, -100.85 approx. | Fort Abraham Lincoln State Park on ND-1806 south of Mandan: Custer's last post (1876) and the On-A-Slant Mandan village |
| Knife River Indian Villages | 47.33, -101.39 approx. | Knife River Indian Villages National Historic Site by Stanton: Hidatsa earthlodge villages, where Lewis and Clark met Sakakawea |
| Enchanted Highway | 46.42, -102.56 (Regent's Census point) | Giant scrap-metal sculptures along the 32 mi road from I-94 (Gladstone) south to Regent |
| Garrison Dam | 47.50, -101.37 (Riverdale's Census point, 221) | One of the world's largest earthfill dams (1953), which holds back Lake Sakakawea. Riverdale is the dam's town at its east end. It is also the link across the lake (see below) |

**Left out:**
- **Too close to a main station:** West Fargo (3.3 mi from Fargo's point), Lincoln (4.3 mi from Bismarck), Burlington and Surrey (Minot), Belfield (between Dickinson and Medora).
- **Burleigh has no town.** Its other places have under 150 people (Wing, Regan) or are CDPs. Fort Abraham Lincoln, across the river, serves Bismarck too.
- **Cut to keep about 1.6 towns per region:** New Salem (on I-94, Salem Sue) and Park River. Mandan–Dickinson (90 mi) is open in both modes without New Salem.
- **International Peace Garden:** it is in Manitoba's pack (IPG, 49.01, -100.07). Dunseith links to it in both modes (14 mi), and a second copy on the US side would be 1 km away.
- **Pembina Gorge, Lake Metigoshe, Fort Union Trading Post:** less well known, or (Fort Union) right on the Montana line by Williston.

### Passes (0) and bridges (19)

**No passes.** North Dakota's map has no mountains at all, only five hill cells, so no link needs a pass. The Badlands along the Little Missouri are hills on the map.

The checker gives no warnings: every bridge is within 3 mi of a river or lake on the map.

| Bridge | Point | Source | What uses it |
| --- | --- | --- | --- |
| Lewis and Clark Bridge (US-85, Williston) | 48.11, -103.64 approx. | US-85 over the Missouri south of Williston (well known) | The map's Lake Sakakawea runs up to Williston, so the bridge **opens in Tough** Williston to Watford City, Dickinson, the North Unit, Medora, Beach, and Sidney, Glendive and Wibaux in Montana, plus Plentywood–Watford City and Culbertson–New Town |
| Four Bears Bridge (New Town) | 47.98, -102.55 approx. | ND-23 over Lake Sakakawea at New Town (well known) | New Town's lines west (Williston, Tioga, Culbertson). Watford City–New Town follows the shore. Watford City–Stanley (53 mi, 3 mi of lake) stays blocked in Tough; the chain Watford City–New Town–Stanley is open |
| Garrison Dam (ND-200) | 47.50, -101.42 | ND-200 runs along the dam (well known; the dam's point) | **Opens in Tough** Garrison–Garrison Dam; Minot, Stanley, Kenmare and Mohall to Garrison Dam; Garrison, Minot and Mohall to Knife River Indian Villages; Velva–Hazen. This makes the US-83 / ND-200 chain Bismarck–Washburn–Garrison Dam–Garrison–Minot |
| Missouri River bridges (Bismarck–Mandan) | 46.82, -100.82 | I-94 and the BNSF bridge (well known) | Bismarck–Mandan and every Bismarck line west |
| Red River bridges at Wahpeton–Breckenridge, Fargo–Moorhead and Grand Forks–East Grand Forks | 46.27, -96.60; 46.88, -96.78; 47.93, -97.01 | The main crossings into Minnesota (I-94 and the BNSF at Fargo; US-2 and the BNSF at Grand Forks), all well known | Nothing yet: they are on the map's river for Minnesota's pack. Grand Forks' point is where the map's simplified river passes the city, about 1 mi east of the real Sorlie Bridge |
| Red River bridge (Pembina) | 48.97, -97.23 | The Pembina–St. Vincent bridge (moderately known) | Pembina–Steinbach and Pembina–Whiteshell in Manitoba (cheaper); Minnesota later |
| Sheyenne River bridge (West Fargo) | 46.87, -96.92 | I-94 over the Sheyenne at West Fargo | Fargo to Valley City, Jamestown and Casselton |
| Hi-Line Bridge (Valley City) | 46.93, -98.01 approx. | The Northern Pacific's 1908 high bridge over the Sheyenne valley (well known) | Valley City's lines west, north and south |
| James River bridge (Jamestown) | 46.91, -98.70 | Downtown Jamestown | Jamestown's lines east, north and south |
| Heart River bridges at Mandan and Dickinson | 46.83, -100.95; 46.87, -102.79 | I-94 over the Heart west of Mandan; the Heart through Dickinson | Mandan's lines west and southwest; Dickinson's lines south |
| Little Missouri River bridge (Medora) | 46.91, -103.54 | I-94 at Medora | Medora's lines west (Wibaux, Glendive, Baker, Sidney) and Dickinson–Beach |
| Long X Bridge (US-85) | 47.59, -103.25 approx. | US-85 over the Little Missouri at the North Unit's entrance (moderately known) | US-85: Dickinson–North Unit and Dickinson–Williston, and the North Unit's lines south and west |
| Little Missouri River bridge (Marmarth) | 46.29, -103.92 | US-12 at Marmarth | Bowman–Marmarth and Bowman–Baker (US-12 into Montana) |
| Souris River bridges at Towner, Minot and Burlington | 48.33, -100.46; 48.24, -101.29; 48.26, -101.41 | US-2 crosses the Souris by Towner and at Burlington; Minot's downtown bridges (Broadway) | Rugby–Minot (the Hi-Line); Minot's lines south; Minot–Stanley and Minot–Tioga |

**Not added:**
- Snake Creek Embankment (US-83 between Lake Sakakawea and Lake Audubon): less well known, and the Garrison Dam link does the job.
- The Washburn bridge (ND-200A) and the Missouri crossings at the Montana line: no main line needs them, and they are less well known.
- Lake Oahe has **no crossing in North Dakota** (moderately known): Fort Yates links to the rest of the state through Mandan only.

### How the map plays

**Counts.** Of the 805 pairs of places (at least one in North Dakota) within 100 mi of each other:
- 5 are blocked in Gentle and 60 in Tough: 52 across Lake Sakakawea, 7 across Lake Oahe and 1 across Devils Lake;
- with links up to 100 mi, every North Dakota place is in one network in both modes;
- the fewest open links any place has is 9 (Hankinson, in the southeast corner).

**The real routes, as chains,** are open in both modes:
- **I-94 / old Northern Pacific:** Fargo–Casselton–Valley City–Jamestown–Steele–Bismarck–Mandan–Dickinson–Medora–Beach, then Wibaux and Glendive in Montana.
- **US-2 / Hi-Line (Empire Builder):** Fargo–Hillsboro (or Mayville)–Grand Forks–Larimore–Lakota–Devils Lake–Leeds–Rugby–Minot–Stanley–Tioga–Williston, then Culbertson in Montana.
- **I-29:** Hankinson–Wahpeton–Fargo–Hillsboro–Grand Forks–Grafton–Pembina, then Altona, Steinbach and Winnipeg in Manitoba (the Pembina–Emerson crossing).
- **US-83:** Linton–Bismarck–Washburn–Garrison Dam–Garrison–Minot–Bottineau.
- **US-85:** Bowman–Dickinson–North Unit–Watford City–Williston–Crosby, with Watford City–Sidney into Montana.
- **US-52 / Soo Line:** Jamestown–Carrington–Harvey–Velva–Minot–Kenmare–Portal, then Estevan and Weyburn in Saskatchewan.
- **US-281:** Jamestown–Carrington–New Rockford–Devils Lake–Cando–Rolla–Dunseith, then the International Peace Garden.
- **US-12:** Marmarth–Bowman–Hettinger, with Bowman–Baker into Montana.
- **Others:** Hettinger–Mott–Elgin–Mandan; Dickinson–Enchanted Highway–Mott; Dickinson–Killdeer–Watford City; Beulah–Hazen–Knife River Indian Villages–Garrison Dam; Mandan–Fort Abraham Lincoln–Fort Yates; Grafton–Langdon–Cando; Wahpeton–Lisbon–Valley City; Oakes–LaMoure–Jamestown; Linton–Wishek–Napoleon–Jamestown; Minot–Mohall–Bottineau; Williston–Crosby–Estevan.

**Main stations: neighbouring main stations reached directly** (other states' and provinces' marked *). The same in both modes unless noted.

| Station | Reaches |
| --- | --- |
| Fargo | Valley City, Wahpeton, Mayville |
| Grand Forks | Devils Lake, Grafton, Mayville |
| Wahpeton | Valley City, Fargo, Oakes |
| Mayville | Valley City, Devils Lake, Fargo, Grand Forks |
| Grafton | Steinbach*, Winkler*, Devils Lake, Grand Forks, Rolla |
| Valley City | Devils Lake, Fargo, Oakes, Carrington, Jamestown, Wahpeton, Mayville |
| Jamestown | Valley City, Bismarck, Oakes, Carrington, Linton; blocked: Garrison (138 mi, the lake) |
| Bismarck | Linton, Jamestown, Beulah, Mandan; Gentle only: Garrison |
| Mandan | Bowman, Dickinson, Bismarck, Linton, Mott, Beulah |
| Oakes | Valley City, Linton, Jamestown, Wahpeton |
| Linton | Bismarck, Oakes, Jamestown, Mandan |
| Carrington | Valley City, Devils Lake, Jamestown, Rugby; Gentle only: Garrison |
| Devils Lake | Valley City, Grafton, Carrington, Grand Forks, Rugby, Rolla, Mayville |
| Rugby | Devils Lake, Bottineau, Carrington, Garrison, Rolla, Minot |
| Rolla | Winkler*, Virden*, Devils Lake, Bottineau, Grafton, Rugby |
| Bottineau | Virden*, Stanley, Rugby, Rolla, Minot, Weyburn* |
| Minot | Bottineau, Stanley, Rugby, Garrison |
| Garrison | Stanley, Rugby, Minot; Gentle only: Bismarck, Watford City, Carrington, Beulah; blocked: Jamestown |
| Dickinson | Baker*, Glendive*, Bowman, Watford City, Mott, Beulah, Mandan |
| Watford City | Glendive*, Sidney*, Dickinson, Williston, Beulah; Gentle only: Stanley, Garrison |
| Williston | Plentywood*, Glasgow*, Stanley, Watford City, Weyburn* |
| Stanley | Bottineau, Williston, Garrison, Minot, Weyburn*; Gentle only: Watford City |
| Beulah | Dickinson, Bismarck, Watford City, Mandan; Gentle only: Garrison |
| Bowman | Baker*, Dickinson, Mott, Mandan |
| Mott | Bowman, Dickinson, Mandan |

**Where geography doesn't allow more:**
- **Garrison, in Tough,** reaches three neighbouring main stations (Minot, Stanley, Rugby) but nothing south of the lake directly. The town sits on Lake Sakakawea's north shore, so a straight line south crosses 4–7 mi of the lake away from the dam. Its own region's southern towns and Bismarck are reached through the Garrison Dam town (Garrison–Garrison Dam 11 mi, then Washburn and Bismarck, or Beulah and Hazen), as ND-200 and US-83 really go.
- **Watford City–Stanley** (53 mi) crosses the lake 13 mi from the Four Bears Bridge: blocked in Tough. Watford City–New Town–Stanley is open in both.
- **Fort Yates** reaches nothing across Lake Oahe in Tough (Linton, Wishek, Napoleon, Bismarck), as no bridge crosses it in the state. Mandan–Fort Yates (53 mi) and Fort Abraham Lincoln–Fort Yates are open.

**Neighbours.** I compared the 473 pairs of Montana, Saskatchewan and Manitoba places within 300 mi of each other whose line passes over North Dakota, with this pack's bridges and without them.
- 4 change. Two of them open in Tough: Estevan–Broadus (281 mi) and Moosomin–Glendive (253 mi), long lines across Lake Sakakawea near the Lewis and Clark Bridge.
- None closes, and no link under 100 mi changes.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Fargo & the Red River Valley | `red` | Fargo, Grand Forks, Wahpeton, Mayville, Grafton, Valley City | 50 passengers; own 5 counties; 10 crates of produce (the valley's farms to Fargo or Grand Forks) |
| Bismarck & I-94 | `central` | Jamestown, Bismarck, Mandan, Oakes, Linton, Carrington | 140 passengers; connect FRGO–BIS (I-94, open in both modes); own 10 counties |
| Devils Lake, Minot & the Hi-Line | `north` | Devils Lake, Rugby, Rolla, Bottineau, Minot, Garrison | 280 passengers; connect GRFK–MOT (US-2 and the Empire Builder, open in both modes); one high-speed train |
| The Badlands & the Bakken | `west` | Dickinson, Watford City, Williston, Stanley, Beulah, Bowman, Mott | 450 passengers; connect BIS–WILS (by Dickinson and Watford City, or by Minot and Stanley; open in both modes); 30 trucks (from the desert stations and towns: Dickinson, Watford City, Bowman, Medora, the North Unit, Marmarth) |

- **Targets** follow Montana's, Saskatchewan's and Manitoba's four levels.
- **No container goal:** North Dakota has no port.

### Biomes

- **`dry`** (the Badlands and dry short-grass rangeland along the Little Missouri): Dunn-McKenzie, Stark-Billings-Golden Valley, Adams-Bowman-Slope. This follows Montana's dry Dawson-Prairie-Wibaux, Carter-Fallon and Garfield-McCone-Richland across the line.
- **No `forest` or `wooded`.** The Turtle Mountains (Rolette-Towner, Bottineau-Renville) and the Pembina Gorge are small wooded uplands in farm counties. Manitoba leaves its Turtle Mountain side (Division 5-6) unlisted too.
- **Not listed (farmland and grassland):** everything else, the Red River valley, the Drift Prairie and the Missouri Coteau. Divide-Williams and Burke-Mountrail are wheat and oil country, like Montana's unlisted Roosevelt-Valley and Daniels-Sheridan. Grant-Hettinger and Morton-Sioux are grassland and could be dry: a judgment call.

### Checks

- **`node tools/check-pack.js ND`:** `ND: passed (25 stations, 41 towns, 0 city maps, 0 passes, 19 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js ND`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is FRGO, WAH and VLY. The test laid Fargo–Wahpeton (48 mi, 1 train) and bought Benson-Nelson-Ramsey (DVL). 11 passengers arrived in the week (12 in an earlier run).
  - Levels mode starts at level 1.
- **Screenshots** (`test-out/ND/`: arcade light, classic light, levels):
  - Fargo and Wahpeton sit by the Red River on the state's east edge, with Valley City on the Sheyenne.
  - Devils Lake sits on its lake, and Lake Sakakawea and the Missouri cross the west.
  - The tan dry Badlands counties are in the southwest, beside Montana.

### For the main agent

1. **Airports:** none. Fargo's Hector International is near the 1-million bar, as Billings Logan is (from memory). If wanted, add `airport: "Hector International"` to FRGO.
2. **Fargo and Grand Forks stay at their Census points** (2.1 and 2.5 mi from downtown), so the Fargo–Grand Forks line doesn't cross the map's Red River bends. Williston is moved 1.6 mi north of downtown, which is under the map's Lake Sakakawea.
3. **Stanley and Mott** are main stations instead of the biggest places (New Town, New England). The reasons are above.
4. **Red River bridges** at Wahpeton, Fargo, Grand Forks and Pembina are on the map's river for Minnesota's pack to match.
5. **Garrison Dam** is a scenic town that also carries the lake crossing. Without it, the McLean-Sheridan station can't reach its own region's south or Bismarck in Tough.
6. **Names:** the towns of Hettinger (Adams-Bowman-Slope) and Steele (Kidder-Stutsman) are used, with comments. Towner (McHenry) isn't used.
7. **South Dakota and Minnesota are still missing.** Bowman, Hettinger, Mott, Fort Yates, Linton, Wishek, Ellendale, Oakes, Hankinson and Wahpeton face South Dakota. Wahpeton, Fargo, Hillsboro, Grand Forks, Grafton and Pembina face Minnesota.
