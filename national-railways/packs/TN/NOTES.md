# Tennessee (TN) pack notes

## Region merges (phase 1)

Populations come from `packs/TN/raw/counties.json` and `packs/TN/raw/places.json` (U.S. Census Bureau, 2020 estimates base; state total 6,910,786). Every group is connected through `neighbors`. Roads, rivers and railways are named from general knowledge ("well known" unless marked). Result: **95 counties become 60 regions** (33 big counties alone, 23 groups, 4 small counties alone).

### Recommended

```
merge: [["Dyer", "Lake"], ["Obion", "Weakley"], ["Crockett", "Haywood", "Lauderdale"], ["Fayette", "Hardeman"], ["Carroll", "Henderson"], ["Chester", "Hardin", "McNairy"], ["Benton", "Henry", "Stewart"], ["Hickman", "Houston", "Humphreys"], ["Decatur", "Perry", "Wayne"], ["Lawrence", "Lewis"], ["Giles", "Marshall"], ["Lincoln", "Moore"], ["Franklin", "Grundy"], ["Bledsoe", "Marion", "Sequatchie"], ["Van Buren", "Warren", "White"], ["Cannon", "DeKalb", "Smith"], ["Clay", "Overton", "Pickett"], ["Jackson", "Macon", "Trousdale"], ["Fentress", "Morgan", "Scott"], ["Campbell", "Union"], ["Claiborne", "Grainger", "Hancock"], ["Monroe", "Polk"], ["Meigs", "Rhea"]]
names: {}
```

No `names`, `bridges` or `join` are needed. Reelfoot Lake (Lake County) touches Dyer and Obion by land.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Dyer + Lake | Mississippi bottomland; Lake is a 7k county ending at Reelfoot Lake, Dyersburg is its market | Dyersburg (16,167) | 43,817 |
| Obion + Weakley | Northwest corner: Union City (rail town) and Martin (US-45E) | Union City (11,170) | 63,696 |
| Crockett + Haywood + Lauderdale | Plain between Dyersburg and I-40: Brownsville (I-40), Ripley, Alamo; Hatchie bottoms | Brownsville (9,787) | 56,914 |
| Fayette + Hardeman | US-64 east of Memphis: Oakland, Somerville, Bolivar | Oakland (8,939) | 67,185 |
| Carroll + Henderson | I-40 around Lexington; Huntingdon and McKenzie to the north | Lexington (7,955) | 56,278 |
| Chester + Hardin + McNairy | Southwest: Savannah (Tennessee River, Shiloh), Selmer, Henderson; US-45 / US-64 | Savannah (7,220) | 70,023 |
| Benton + Henry + Stewart | Kentucky Lake and Land Between the Lakes: Paris, Camden, Dover | Paris (10,310) | 61,723 |
| Hickman + Houston + Humphreys | Duck and Tennessee river country west of Nashville: Waverly, Centerville | Waverly (4,306) | 52,187 |
| Decatur + Perry + Wayne | Lower Tennessee River / Natchez Trace hills: Clifton, Waynesboro, Parsons | Clifton (2,657) | 36,049 |
| Lawrence + Lewis | US-43/64: Lawrenceburg and Hohenwald | Lawrenceburg (11,638) | 56,743 |
| Giles + Marshall | Southern Middle Tennessee along I-65 and US-31: Pulaski, Lewisburg | Lewisburg (12,306) | 64,668 |
| Lincoln + Moore | Elk River, Fayetteville and Lynchburg (Moore touches only Lincoln of the small ones) | Fayetteville (7,075) | 41,788 |
| Franklin + Grundy | Winchester at the foot of the Cumberland Plateau; Monteagle, Tracy City above | Winchester (9,372) | 56,298 |
| Bledsoe + Marion + Sequatchie | Sequatchie Valley (Pikeville, Dunlap) to Jasper, South Pittsburg and I-24 | Dunlap (5,356) | 59,580 |
| Van Buren + Warren + White | Caney Fork country: McMinnville, Sparta, Spencer | McMinnville (13,780) | 74,468 |
| Cannon + DeKalb + Smith | Center Hill Lake and Caney Fork: Smithville, Woodbury, Carthage | Smithville (5,007) | 54,498 |
| Clay + Overton + Pickett | Upper Cumberland, Dale Hollow Lake: Livingston, Celina, Byrdstown | Livingston (3,902) | 35,093 |
| Jackson + Macon + Trousdale | Cumberland River hills northeast of Nashville: Lafayette, Hartsville, Gainesboro | Lafayette (5,603) | 48,443 |
| Fentress + Morgan + Scott | Cumberland Plateau and Big South Fork: Oneida, Jamestown, Wartburg | Oneida (3,788) | 61,365 |
| Campbell + Union | Norris Lake and I-75 at La Follette; Maynardville toward Knoxville | La Follette (7,433) | 59,079 |
| Claiborne + Grainger + Hancock | Powell and Clinch valleys (Cumberland Gap, Clinch Mountain): Harrogate, Tazewell, Bean Station, Sneedville | Harrogate (4,393) | 62,232 |
| Monroe + Polk | Tellico and Hiwassee country in the southeast: Sweetwater, Madisonville, Benton | Sweetwater (6,414) | 63,792 |
| Meigs + Rhea | Tennessee River valley: Dayton, Spring City, Decatur | Dayton (7,069) | 45,628 |

Station rule: the largest place with a population in places.json.

Alone under 50k (exceptions, 4):
- **Cheatham** 41,064 (Ashland City 5,190): every neighbour is 50k or more (Davidson, Robertson, Montgomery, Dickson, Williamson).
- **Cocke** 35,999 (Newport 6,859): all four neighbours are 50k or more (Greene, Hamblen, Jefferson, Sevier).
- **Johnson** 17,949 (Mountain City 2,414): its only neighbours are Carter (56k) and Sullivan (158k); mountain-walled.
- **Unicoi** 17,925 (Erwin 6,082): neighbours are Carter, Greene, Washington, all 50k or more.

Alone, 50k or more (33): as in the brief (Shelby, Davidson, Knox, Hamilton, Rutherford, Williamson, Montgomery, Sumner, Sullivan, Wilson, Blount, Washington, Bradley, Maury, Madison, Sevier, Putnam, Anderson, Robertson, Greene, Hamblen, Cumberland, Tipton, Coffee, Hawkins, Carter, Jefferson, Loudon, Dickson, McMinn, Roane, Bedford, Gibson).

Groups over 50k combined are fine (the 50k rule is for single counties); the largest is Van Buren + Warren + White at 74k.

### Alternative (57 regions)

Same list, but `["Carter", "Johnson", "Unicoi"]` (92k, station Elizabethton) in place of the three separate regions. Pro: no 18k stand-alone regions in the northeast. Con: it breaks the "50k county stays alone" rule (Carter) and Mountain City ends up in a region with a station about 35 miles away over mountain roads (US-321 / TN-91, moderately known).

Other options considered:
- Campbell + Scott (I-75 at Jellico) with Fentress + Morgan, Union + Claiborne...: more combinations, no better market logic.
- Hardeman + Chester + McNairy with Fayette alone: rejected, Fayette is a Memphis exurb county of 42k and Hardeman's US-64 link runs to Oakland.
- Obion + Lake + Dyer (75k) with Weakley + Henry: the same count; Dyer's Dyersburg and Union City are two real markets.
- Giles + Lincoln (+ Moore) with Marshall alone: Marshall's neighbours are all large or Giles/Lincoln, so the split gains nothing.

### Things to check on the map and data
- Nothing is cut oddly that I could see: 95 regions in `map.js`, one per county; neighbours are symmetric. Shelby touches only Fayette and Tipton in Tennessee (plus Arkansas, and Mississippi later).
- `places.json`: `Hartsville/Trousdale County` carries the whole county population (11,609) because the Census lists the consolidated government; the town itself is about 2,300. Do not use it as a station in Jackson-Macon-Trousdale (Lafayette 5,603 is the station). Same pattern, no population: `Lynchburg, Moore County metropolitan government`, so Lincoln + Moore uses Fayetteville.
- `Nashville-Davidson metropolitan government (balance)` is a long name for a label; "Nashville" is better in the pack.
- Many small places have `pop: null` (CDPs and unincorporated places: Karns, Powell, Ooltewah, Seymour, Sewanee...). Only populated places should be stations. Two "Halls" exist (Lauderdale, a city; Knox, a CDP).
- Neighbours that will appear later (Mississippi, Alabama, Georgia, North Carolina, Virginia) are absent as expected.

## Pack (phase 2)

Built from `packs/TN/raw/` (U.S. Census Bureau, 2020 estimates base). 60 main stations, 97 towns, 4 passes, 17 bridges, 4 levels. `node tools/check-pack.js TN`: 0 errors, 0 warnings (all packs pass). `node tools/test-pack.js TN`: PASSED, 17 passed, 0 failed. Station `pop` is the region's population in thousands from counties.json; lat/lon come from places.json except where noted. Roads, rivers and parks named below are well known unless marked "(moderately known)".

### Start
`["tn-shelby", "tn-tipton", "tn-fayette-hardeman"]` (they touch each other). Memphis and Atoka are metro, Oakland is farm, so the first track (Atoka-Oakland, 22 mi, the nearest pair of different types) has riders; the pack test lays it and 13 passengers arrive in a week. Memphis-Atoka joins two metros and carries nobody.

### Stations (types and sizes)
- Sizes by the guide, judged against the other packs: Memphis 4 (930k) and Nashville 4 (716k), like Louisville, Indianapolis and Kansas City; Knoxville 3 (479k), Chattanooga 3 (366k), Murfreesboro 3 (Rutherford 341k, as Lexington is 3 in Kentucky); 2 for regions of about 55k and up (and for Jackson-sized hubs); 1 for the small rural ones.
- Types: metro for the big cities and the Nashville, Memphis and Knoxville suburbs (Franklin, Murfreesboro, Hendersonville, Lebanon, Atoka, Maryville, Oak Ridge, Clarksville, Kingsport, Johnson City, Jackson); mountain for the Smokies, Unaka, Cumberland Mountains and Plateau (Sevierville, Newport, Elizabethton, Erwin, Mountain City, Harrogate, La Follette, Oneida, Crossville, Dunlap); farm for the rest. No coast or desert.
- Airports: Memphis International (FedEx hub), Nashville International, Chattanooga Metropolitan and McGhee Tyson (marked on Knoxville's station, as Kentucky marks Louisville and Lexington; McGhee Tyson itself is in Alcoa, Blount County, on Knoxville's metro). Bar: the airports other packs mark. No ports: the Port of Memphis is a river port.
- Scenic stations: Memphis (Graceland, Beale Street), Nashville (Grand Ole Opry, Broadway), Chattanooga (Lookout Mountain, Ruby Falls, the Tennessee Aquarium; Rock City is across the line in Georgia).
- IDs: 2 to 4 capitals, checked unique across every `packs/*/pack.js` (the clashes with other packs' towns were resolved with a script, so a few are less obvious than they might be: ATO Atoka, BROW Brownsville, PRIS Paris, SPTN Springfield, WAVE Waverly, COLA Columbia, TULL Tullahoma, MRYV Maryville).

Station calls that are not the biggest place:
- **Columbia** (41,724, the Maury seat, on the Duck River) for Maury, not **Spring Hill** (50,680): Spring Hill is a Nashville-Franklin commuter city that straddles the Williamson line, 14 mi from Franklin; Columbia is the county's centre at the US-31/US-412 hub. Spring Hill is a town.
- **Lebanon** (38,484) for Wilson, not **Mount Juliet** (39,308, 800 people more): Lebanon is the seat and I-40's market town in the middle of the county; Mount Juliet, 8 mi nearer Nashville, is a town.
- **Lafayette** (5,603) for Jackson-Macon-Trousdale: places.json's "Hartsville/Trousdale County" carries the whole county's population (11,609) because of the consolidated government; the town has about 2,300 people. Lafayette is the Macon seat and the biggest real town; Hartsville and Gainesboro are towns.
- **Fayetteville** (7,075) for Lincoln-Moore: Lynchburg (Moore) has no population in places.json (metropolitan government); it is a scenic town (Jack Daniel's).
- **Oakland** (8,939) for Fayette-Hardeman: the biggest place and on the Memphis side of US-64 (Bolivar 5,199, Somerville 3,425 and Whiteville 4,578 are inland and smaller; Bolivar and Somerville are towns).
- **Atoka** (10,013, ahead of the Tipton seat Covington, 8,668): the biggest place; Covington is a town.
- **Sweetwater** (6,414, ahead of Madisonville 5,130): the biggest place of Monroe-Polk; Madisonville and Benton are towns.
- Every other station is the region's biggest place in places.json.

Downtown points (a Census point is the middle of the city limits; moved where more than a few km off):
- Memphis 35.14, -90.04 (the Census point 35.11, -89.97 is 6 mi south-east): 7.9 mi from West Memphis (AR's pack), so no clash.
- Nashville 36.16, -86.78 (0.8 mi); Knoxville 35.96, -83.92 (1.8 mi); Chattanooga 35.05, -85.31 (3.6 mi, the Aquarium and the river); Jackson 35.62, -88.81 (3 mi); Clarksville 36.53, -87.36 (2.7 mi, on the Cumberland); Johnson City 36.31, -82.35 (2.7 mi). Other stations stay at the Census point.

### Towns (97, about 1.6 per region)
The next-biggest real places, spread out (the checker's 4 mi rule). Dropped for it: La Vergne (3.8 mi from Smyrna: Eagleville instead). Towns with no population in places.json (CDPs): Pinson, Powell, Russellville, Butler, Roan Mountain, Lynchburg. Fall Creek Falls is the only hand-placed point (35.66, -85.35). One nudge: Charleston (Bradley) 1 km west to 35.28, -84.77 (the Census point sat 0.1 mi outside the county outline, on the Hiwassee).

Scenic towns (8), all well known: Gatlinburg (gateway to Great Smoky Mountains National Park), Pigeon Forge (Dollywood), Shiloh (Shiloh National Military Park, April 1862; the point is the CDP "Shiloh" in places.json), Dover (Fort Donelson National Battlefield, February 1862), Tiptonville (Reelfoot Lake, from the 1811-12 New Madrid earthquakes), Lynchburg (the Jack Daniel's distillery), Roan Mountain (the rhododendron gardens and Appalachian Trail balds), Fall Creek Falls (the state park, 256 ft; the point is by hand, near Spencer, and falls in the Van Buren part of the region).
Not marked: Graceland and Beale Street (on Memphis), the Opry (on Nashville), Dollywood is in Pigeon Forge.

### Passes (4)
Only where the map's mountain cells are near (the checker warns otherwise), all well known: Newfound Gap (US-441, the Smokies crest), the Pigeon River Gorge (I-40 into North Carolina), Sam's Gap (I-26 over the Unakas), Carver's Gap (TN-143 at Roan Mountain). Monteagle (I-24) is a real, well-known grade, but the map has no mountains within 7 miles of it (the Plateau is hills there) and the checker warns, so it is not listed; the town Monteagle is. Cumberland Gap is in Kentucky's pack. Approximate coordinates for the four (moderately known).

### Bridges (17)
River bridges stand on the map's river where it passes the town; the checker finds all within 3 mi of water. Mississippi: Hernando de Soto (I-40; same name and point as Arkansas's pack) and the Memphis & Arkansas Bridge (I-55; added here). Tennessee: Walnut Street Bridge (Chattanooga), Henley Street Bridge (Knoxville), Fort Loudoun Dam (US-321 at Lenoir City), the Paris Landing Bridge (US-79, Kentucky Lake), the I-40 Kentucky Lake bridge, and Savannah (TN-128). Cumberland: downtown Nashville, Clarksville (US-79), the Cumberland City Bridge (TN-149), Carthage (TN-53). Others: Duck River at Columbia (US-31) and Shelbyville (US-231), the Elk River at Fayetteville (US-64), the Clinch at Clinton (US-25W), the French Broad at Newport (US-25/70). Positions are approximate (moderately known) and two were moved to the map's water: the Paris Landing point sits at 36.39, -88.09 (the real bridge is a little north of it) so that Paris-Dover and Paris-Clarksville reach it in Tough; the Savannah point is on the map's river, 3 km west of the town (the real bridge is east of it). Kentucky's pack lists the Land Between the Lakes crossings (US-68/80) on the Kentucky side; none duplicated. The Caruthersville (I-155) crossing is Missouri's (36.19, -89.65).

### Biomes
Forest: Sevier, Johnson, Unicoi, Carter, Campbell-Union, Fentress-Morgan-Scott, Claiborne-Grainger-Hancock, Monroe-Polk (the Smokies, Unakas, Cumberland Mountains and Cherokee National Forest). Wooded: the rest of East Tennessee's hills and valleys, the Plateau, the Highland Rim, Land Between the Lakes (Benton-Henry-Stewart), the southern Hatchie and Tennessee River hills (Chester-Hardin-McNairy), Dickson, Cheatham and Lincoln-Moore. Farmland (unlisted): the Delta and West Tennessee plain, the Nashville Basin and the Great Valley's floor. No dry.

### Levels (4, in this order)
- West ("Memphis & West Tennessee", 11 regions): 50 passengers, 5 counties, connect Memphis-Jackson (I-40).
- Middle ("Nashville & Middle Tennessee", 20): 140, connect Nashville-Murfreesboro (I-24), 15 counties.
- Plateau ("Chattanooga & the Cumberland Plateau", 11): 280, connect Nashville-Chattanooga (I-24), 28 counties, a high-speed train.
- East ("Knoxville, the Smokies & the Tri-Cities", 18): 450, connect Knoxville-Johnson City (I-40 and I-81), 42 counties, 30 trucks.
Every station has a level. The goal counts follow Kentucky's.

### Reachability (NR.blockedReason, Gentle and Tough)
All 170 pairs of neighbouring main stations (including Kentucky, Arkansas and Missouri) are open in Gentle. In Tough, three pairs stay blocked, all wide-lake pairs: Paris-Waverly (2 mi of Kentucky Lake: the I-40 bridge is 12 mi south, so use Camden, which is open to both Paris and Waverly), Paris-Princeton, KY (5 mi of Lake Barkley) and Harrogate-Morristown (2.5 mi of Cherokee Lake: the real crossings are not on the map). Every station reaches at least 2 neighbouring main stations (Mountain City, with only Carter and Sullivan beside it, is the minimum; nearly all reach 4 or more); all 97 towns have an open link to their own station in both modes. Chains checked in both modes: I-40 (Memphis, Atoka, Brownsville, Jackson, Lexington, Paris, Camden, Waverly, Dickson, Nashville, Lebanon, Smithville, Cookeville, Crossville, Kingston, Knoxville, Jefferson City, Newport), I-24 (Hopkinsville, Clarksville, Nashville, Murfreesboro, Tullahoma, Winchester, Chattanooga), I-65 (Bowling Green, Franklin KY, Springfield, Nashville, Franklin, Columbia, Lewisburg), I-75 (Corbin, La Follette, Knoxville, Lenoir City, Athens, Cleveland, Chattanooga), US-25E (Knoxville, Harrogate, Middlesborough), I-81/I-26 (Knoxville to Kingsport, Johnson City, Erwin), US-51 and I-155 to Kentucky and the Missouri Bootheel, I-40/I-55 to West Memphis, and the Plateau, Smokies and Tennessee Valley links. The only tunnel on a neighbouring pair is Oneida-Oak Ridge (10.5 mi in the Cumberland Mountains; Tough allows 15).

### Not sure
Bridge and pass coordinates (approximate, above); whether Paris-Waverly and Harrogate-Morristown should have a real bridge on the map in Tough (I know of none I can place with confidence); size 3 for Murfreesboro; the type of Oak Ridge (metro) and Sweetwater (farm); Fall Creek Falls' exact point and county.

## City maps

**Nashville (NASH, size 4, 11 stops).** Hub: Riverfront Station (Music City Star terminal on the Cumberland, by Broadway and the Ryman area; Music City Central is the bus hub, not used). Stops: Riverfront Station, Germantown, East Nashville, Vanderbilt University, 12 South (id TWS, since ids need letters only), Green Hills, Airport (BNA), Opryland, Brentwood, Franklin, Hendersonville. Furthest 17.0 mi, closest pair 1.4 mi. Left out: Murfreesboro (about 30 mi), Gallatin, Lebanon, Mt. Juliet. The Cumberland is the only wide water: Riverfront Station is 200 m from it in the preview, on land. Coordinates from memory, 3 decimals, good to a few hundred metres.

- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
