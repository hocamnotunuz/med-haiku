# Pennsylvania (PA) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (55 regions, no `names`). The phase 2 build is below.

Populations: `packs/PA/raw/counties.json` and `places.json` (U.S. Census Bureau, 2020). Shared border lengths (km) were measured on the rings in `map.js`. Roads, rivers and railways are well known unless marked "(moderately known)".

### Recommended (67 -> 55 regions)

```
merge: [["Cameron", "Clinton"], ["Elk", "McKean"], ["Potter", "Tioga"], ["Forest", "Warren"], ["Clarion", "Jefferson"], ["Columbia", "Montour", "Sullivan"], ["Susquehanna", "Wyoming"], ["Snyder", "Union"], ["Huntingdon", "Mifflin"], ["Juniata", "Perry"], ["Bedford", "Fulton"]]
names: {}
```

No `names`, `bridges` or `join` needed (no water cuts; the automatic names read well and clash with nothing, ).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Cameron + Clinton (31 km) | PA-120 along the West Branch Susquehanna and Sinnemahoning Creek, Emporium to Renovo to Lock Haven (moderately known) | Lock Haven (8,111) | 41,986 |
| Elk + McKean (49 km) | US-219 from Ridgway and St. Marys north by Johnsonburg and Kane to Bradford | St. Marys (12,742) | 71,430 |
| Potter + Tioga (51 km) | US-6 across the Endless Mountains: Coudersport, Galeton, Pine Creek, Wellsboro, Mansfield | Wellsboro (3,470) | 57,450 |
| Forest + Warren (47 km) | US-62 and the Allegheny River through the Allegheny National Forest, Warren to Tionesta | Warren (9,400) | 45,558 |
| Clarion + Jefferson (31 km) | I-80 and US-322: Clarion, Brookville, Punxsutawney (US-119/PA-36) | Punxsutawney (5,768) | 81,740 |
| Columbia + Montour + Sullivan (36, 13 km) | Bloomsburg and Danville on US-11 and I-80 along the North Branch Susquehanna (Berwick 10,327 too); PA-42 runs north from Bloomsburg to Eagles Mere and Laporte (moderately known) | Bloomsburg (12,708) | 88,705 |
| Susquehanna + Wyoming (34 km) | US-6 and PA-29 (Montrose to Tunkhannock, moderately known) | Forest City (1,780) or Tunkhannock (1,765); phase 2 may prefer Tunkhannock (central, on US-6) | 64,506 |
| Snyder + Union (50 km) | US-15 and the Susquehanna: Selinsgrove, Lewisburg, Mifflinburg; the Sunbury hub is next door | Selinsgrove (5,715) | 82,415 |
| Huntingdon + Mifflin (63 km) | The Juniata valley, US-22/322 and the old PRR main line (Norfolk Southern Pittsburgh Line): Huntingdon, Mount Union, Lewistown | Lewistown (8,573) | 90,221 |
| Juniata + Perry (78 km) | The same valley downstream: Mifflintown, Newport, Marysville to the Susquehanna at Harrisburg's edge, US-22/322 | Marysville (2,655) | 69,338 |
| Bedford + Fulton (56 km) | US-30 and the Turnpike at Breezewood, McConnellsburg to Bedford | Bedford (2,868) | 62,132 |

Exceptions to the 50k rule:
- **Columbia** (65k) is in a group because Montour (18k) has no better partner: it touches only Columbia (36 km), Lycoming and Northumberland. Danville and Bloomsburg are 10 miles apart on the same road. Sullivan (6k) joins here because PA-42 links it to Bloomsburg; its other roads lead to Lycoming or Bradford.
- **Clarion + Jefferson (82k)** and **Huntingdon + Mifflin (90k)** are large pairs but join only counties under 50k.
- **Greene** stays alone (36k, Waynesburg 4,001): its only Pennsylvania neighbours are Washington (209k, 51 km) and Fayette (129k, 38 km), both large. Same logic as Los Alamos in NM.
- **Pike** (59k), **Wayne** (51k) and **Bradford** (60k) stay alone as 50k+ counties. Bradford's neighbour Tioga is better with Potter.

Alone, 50k and over: all other counties (44, listed in the brief), unchanged.

Corridors stay clean chains: PRR/Turnpike (Lancaster, Dauphin, Juniata-Perry, Huntingdon-Mifflin, Blair, Cambria, Westmoreland, Allegheny), I-80 (Clarion-Jefferson, Clearfield, Centre, Columbia-Montour-Sullivan, Luzerne), US-15 (Snyder-Union, Lycoming, Tioga-Potter), US-6 (Wayne, Susquehanna-Wyoming, Bradford, Potter-Tioga, McKean), I-81 (Dauphin, Schuylkill/Lebanon, Luzerne, Lackawanna, Susquehanna-Wyoming).

### Alternative (also 55 regions)

```
merge: [["Cameron", "Elk", "McKean"], ["Potter", "Tioga"], ["Forest", "Warren"], ["Clarion", "Jefferson"], ["Columbia", "Montour"], ["Sullivan", "Susquehanna", "Wyoming"], ["Snyder", "Union"], ["Huntingdon", "Mifflin"], ["Juniata", "Perry"], ["Bedford", "Fulton"]]
```
Pro: Columbia-Montour is a clean pair and Cameron joins St. Marys (58 km border). Con: Clinton is left alone at 37k (a new exception), Sullivan to Wyoming is only 19 km on minor roads (PA-87, moderately known).

### Rejected
- Montour + Northumberland: Sunbury would be the station and Columbia (Berwick) would stay alone with Sullivan.
- Sullivan + Bradford (51 km border): no road link worth the name between Laporte and Towanda.
- Tioga + Bradford: Potter would be left alone, and Wellsboro and Sayre are far apart.
- Fulton + Franklin (172k) or Fulton + Huntingdon (26 km): Bedford is the US-30 / Turnpike link.
- Mifflin + Juniata with Perry alone: Perry is Harrisburg-side and would be a fresh exception.
- Forest + Venango: Venango is 50k and already fine alone; US-62 at Tionesta leads to Warren equally.
- Elk + Warren: only a corner contact (under 1 km).

### Map review (things that look wrong)
- **Mount Union** (2,307) is placed in Mifflin by the map polygon and places.json; I believe it is a Huntingdon County borough (moderately sure, from memory). It sits about 1 km from the line. It would not change the merge (the two are in one group), only which county tallies it.
- **Birmingham borough** (Blair per places.json, Huntingdon polygon) and **Saltsburg** (Westmoreland per places.json, Indiana polygon): two places whose recorded county disagrees with the polygon at the edge (Saltsburg lies on the county line in reality). Minor.
- **Near-zero neighbour contacts** listed in counties.json: Elk-Warren (under 1 km), Butler-Clarion (under 1 km), Juniata-Northumberland (1), Blair-Clearfield (1), Clinton-Union (3), Franklin-Juniata (4). Probably corner contacts; do not use them for merges or travel links.
- 989 of the 2,002 places have `pop: null` (CDPs and unincorporated villages); all main stations I recommend have populations. Names clashing with counties: Bradford (city in McKean, Bradford County), Washington, Lebanon, Indiana, Franklin (Venango), Warren, Union (the county).
- Station names for big counties from places.json include "Murrysville municipality" (Westmoreland; Greensburg is the county seat), "Bristol borough" (Bucks) and "Palmerton borough" (Carbon; Jim Thorpe and Lehighton are close) are all worth a look in phase 2.
- Neighbours: no asymmetries and no missing PA-PA contacts; only MD, OH, WV and DE appear as outside neighbours, as expected.

## Pack (phase 2)

`packs/PA/pack.js` was generated from helper files in `/tmp/pa-work/` (stations, towns, bridges) and is plain data. Checks: `node tools/check-pack.js PA` passed with 0 errors and 2 warnings (explained below), `node tools/check-pack.js` passed for all packs, and `node tools/test-pack.js PA` PASSED (17 of 17). I looked at the arcade-light and levels screenshots: stations and the start look right.

### Start
Philadelphia + Montgomery + Bucks (each touches the other two). Types: Philadelphia metro, Norristown metro, Doylestown farm. The pack test's first track is Norristown to Doylestown (20 mi); `NR.firstTrackPair` gives Philadelphia to Doylestown (21 mi). 14 passengers arrived in the test week.

### Stations (55, one per region)
Population = region population in thousands (counties.json); lat/lon 2 decimals from places.json unless noted. Ids: 2-4 capitals, unique across all packs (checker). Taken ids got P or other letters (NRPA, CSPA, MLPA, HBPA, YKPA, GBPA, CBPA, NWPA, PVPA, WBRO, MDPA, JTPA, SOPA). Each station has a comment in `pack.js` with the town's population.
- **Moved to a downtown** (more than a few km from the Census point): Philadelphia (30th Street Station, 39.96,-75.18; the Census point is the middle of the long city), Harrisburg (Capitol, 40.26,-76.88), Pittsburgh (the Point, 40.44,-80.00), Scranton and Wilkes-Barre (the city centres, 41.41,-75.66 and 41.25,-75.88; within 1 mi of the points).
- **Not the biggest place** (judgment calls, each with its reason in the comment): Bucks **Doylestown** (the seat, central, farm type for the start; Bristol 9,863 is at the south-east edge, Levittown is a census-designated place with no population in the data and is a town); Westmoreland **Greensburg** (seat; Murrysville is a long 56 sq mi municipality at the Allegheny edge, a town); Carbon **Jim Thorpe** (seat, scenic; Palmerton at the east edge is a town); Pike **Milford** (seat; Matamoras at the corner is a town); Armstrong **Kittanning** (seat; Vandergrift is in the south-west corner); Bradford **Towanda** (seat, central; Sayre is at the New York line, a town); Juniata-Perry **Newport** (central on US-22/322; Marysville is a town with the Rockville Bridge); Clarion-Jefferson **Brookville** (I-80 and US-322, central; Punxsutawney and Clarion are towns); Susquehanna-Wyoming **Tunkhannock** (central, US-6; Forest City 1,780 beats it by 15 people at the east edge). Montgomery **Norristown** (seat; Pottstown 23,438 and Lansdale are towns), Delaware **Chester**, Mercer **Hermitage** (Sharon is 3 mi west at the Ohio border and is not a separate town: it would break the spacing rule), Beaver **Aliquippa**, Monroe **East Stroudsburg**.
- **Sizes**: Philadelphia 5 (metro 6.2 million, like Atlanta and Miami); Pittsburgh 4 (2.4 million, like Cleveland and Cincinnati); 3 for Montgomery 857k (like Baltimore County 855k), Bucks, Delaware, Chester, Lancaster, Berks, York, Lehigh (Allentown), Harrisburg (the capital, metro 590k), Westmoreland 355k and Luzerne 326k (Wilkes-Barre); 2 for Northampton (Bethlehem, 313k: the Lehigh Valley metro is shared, Allentown 3 and Bethlehem 2), Lackawanna (Scranton, 216k: the Scranton-Wilkes-Barre metro is shared, Wilkes-Barre 3 and Scranton 2), Cumberland (Carlisle, shares the Harrisburg metro), Erie 271k, Washington, Butler, Beaver, Monroe, Centre, Franklin, Lebanon, Schuylkill (all 140-210k) and Johnstown and Altoona (123-133k, just under the guide's 140k line but the real cities of the Alleghenies: one size up); 1 for everything else (under 140k).
- **Types**: Philadelphia suburbs metro (Doylestown farm); Lancaster, Lebanon, Adams, Franklin and the central valleys farm; Poconos, coal region, Allegheny plateau and Laurel Highlands mountain (Jim Thorpe, East Stroudsburg, Pottsville, Johnstown, Altoona, Somerset, Uniontown, DuBois, Oil City, Warren, St. Marys, Lock Haven, Wellsboro, Bedford, Brookville, Milford); Erie coast.
- **Port**: Port of Philadelphia (Packer Avenue and Tioga marine terminals, a real major port). **Airports**: Philadelphia International (in Philadelphia County) and Pittsburgh International (Findlay Township, Allegheny County), the only two by the bar the other packs use (Harrisburg, Allentown and Erie airports are small). No Pittsburgh or Erie port: the Port of Pittsburgh (inland river tonnage) and Erie's port are not major container ports (Cincinnati, Louisville and Cleveland-style rules in the other packs).
- **Scenic stations**: Jim Thorpe (the Lehigh Gorge, Victorian town), Gettysburg (Gettysburg National Military Park, NPS), Scranton (Steamtown National Historic Site, NPS).

### Towns (99)
About 1.8 per region: the next-biggest incorporated places (populations in places.json), at least 5 mi from every other place, with the biggest regions getting 2 to 3. Philadelphia has none (the county is one city). Regions with fewer: only one town where the next place was too close (Lehigh: Macungie, since Emmaus is 3.6 mi from Allentown and Slatington 3.5 mi from Palmerton; Lebanon: Myerstown, since Palmyra is 3.5 mi from Hershey). CDP towns with no population in the data: Levittown (40.15,-74.85, general knowledge for the point), Hershey, Intercourse, Valley Forge, Longwood Gardens and the scenic points below. **Nudged to lie inside the region**: Vandergrift (40.62,-79.58, about 1.5 mi from the Census point, on the Kiski River border) and Matamoras (41.36,-74.71, 0.9 mi, on the Delaware).
Scenic towns (all well known; sources in parentheses): Presque Isle (Presque Isle State Park, Pennsylvania DCNR), Flight 93 Memorial (National Park Service), Horseshoe Curve (NHL, Railroaders Memorial Museum; it sits in hills on the map so there is no pass for it), Fallingwater (Frank Lloyd Wright, NHL and UNESCO), Hershey (Hersheypark and Chocolate World), Intercourse (Amish country), Delaware Water Gap (NPS National Recreation Area), Pine Creek Gorge (Leonard Harrison State Park, DCNR), Cherry Springs (DCNR dark-sky park), Kinzua Bridge (DCNR state park), Valley Forge (NPS), Longwood Gardens. Coordinates are 2-decimal general knowledge, checked inside their regions by the checker.
Not added: Ohiopyle (Fallingwater is 3 mi away), Grey Towers, Eagles Mere, Ricketts Glen, Steamtown (on Scranton's station), Independence Hall and the Liberty Bell (inside Philadelphia's station).

### Warnings (explained)
- **ESBG and DEGA are 2.9 mi apart**: the Delaware Water Gap is the Poconos' best-known sight and is in the borough 2.9 mi from East Stroudsburg; kept as a scenic town on purpose.
- **Presque Isle is 0.8 mi outside Erie's outline**: the peninsula in Lake Erie is thin and the simplified outline cuts it; the checker calls it fine for a coastal place.

### Passes (2) and why not more
The map's ridges are mostly hills, so the checker (mountains within about 7 mi) accepts only two real gaps: **Lewistown Narrows** (40.57,-77.58, the Juniata through Jacks Mountain on US-22/322 and the Pittsburgh Line) and the **Juniata gap at Mount Union** (40.38,-77.88). Both are well known (Pennsylvania Railroad main line; coordinates moderately precise). Not added because the map has hills only there and I did not move them: Horseshoe Curve and the Gallitzin tunnels, Allegheny Mountain, Tuscarora, Kittatinny and Blue Mountain tunnels (PA Turnpike), Sideling Hill, the Lehigh Gap, the Delaware Water Gap, the Susquehanna gaps at Duncannon and Marysville, and Pine Creek Gorge.

### Bridges (60)
All sit within 3 mi of water on the map (checker: no warning). Real, well known; coordinates 2 decimals, moderately precise (within about a mile). Delaware: Ben Franklin, Walt Whitman, Betsy Ross, Tacony-Palmyra, Burlington-Bristol, Trenton-Morrisville, New Hope-Lambertville, Easton-Phillipsburg, the Water Gap (I-80), Milford-Montague and Matamoras-Port Jervis (they will serve New Jersey and New York when those packs arrive). Schuylkill: Philadelphia (30th Street and Market), the Falls Bridge, Conshohocken, Norristown, Phoenixville, Pottstown and Reading. Lehigh: Allentown, Bethlehem, Jim Thorpe. Susquehanna: Harrisburg (Market Street and Harvey Taylor), the Rockville Bridge (Marysville), Columbia-Wrightsville, Sunbury-Northumberland, Selinsgrove-Shamokin Dam, Danville, Bloomsburg, Berwick, Wilkes-Barre, Pittston, Tunkhannock, Towanda; West Branch: Williamsport, Lock Haven, Milton, Jersey Shore. Juniata: Newport, Mifflintown, Lewistown, Mount Union, Huntingdon. West: Pittsburgh (the Allegheny bridges, Smithfield Street, the Fort Pitt and West End bridges), Homestead, McKeesport, Elizabeth, Charleroi-Monessen, Brownsville, Ambridge-Aliquippa, Beaver-Rochester, Tarentum, Kittanning, Franklin, Oil City, Warren, Vandergrift-Leechburg (Kiski), Connellsville (Youghiogheny) and Johnstown (Conemaugh). The Conowingo and the Potomac are Maryland's, the Ohio River crossings at Chester-East Liverpool and Wheeling are Ohio's and West Virginia's. Rivers on the map need a bridge only for cost (a new one costs more): I added bridges where the main lines' direct links cross a river more than 2 mi from one; some long straight links (for example Tunkhannock to Towanda along the Susquehanna's bends) still pay for new bridges.
No `bays` (Lake Erie is the map's lake; Presque Isle Bay, Raystown Lake, Pymatuning and the Allegheny Reservoir need no bridge points because no main link crosses them).

### Reachability (`NR.blockedReason`, Gentle and Tough)
Every pair of places within 45 mi (1,409 pairs) is open in both modes: no block anywhere, and every main station reaches at least four neighbouring main stations in both. Corridor chains checked in both modes and all open: the Pennsylvania Railroad/Turnpike (Philadelphia, West Chester, Lancaster, Harrisburg, Newport, Lewistown, Altoona, Johnstown, Greensburg, Pittsburgh), I-80 (East Stroudsburg to Hermitage), I-81 (Chambersburg to Scranton), I-78 (Philadelphia, Reading, Allentown, Bethlehem, East Stroudsburg), I-79 (Waynesburg to Erie), US-15 (Gettysburg to Wellsboro), I-95 (Philadelphia, Chester), the Ohio River (Pittsburgh, Aliquippa, New Castle, Hermitage). Links into other states, all open: Philadelphia, Norristown, Chester and West Chester to Wilmington; Lancaster and York to Bel Air and Havre de Grace; York and Gettysburg to Westminster; Chambersburg to Hagerstown; Bedford to Cumberland and Hancock; Somerset to Frostburg and Cumberland; Pittsburgh to Weirton and Toronto (Ohio); Washington and Uniontown to Morgantown; Beaver, Butler and New Castle to East Liverpool, Hubbard and Youngstown; Meadville and Erie to Conneaut. Mountains never block in the map's grid (they are hills), so Tough shows only higher prices (for example Lewistown to Johnstown 114 against 100 in Gentle).

### Levels (4)
1. **Philadelphia & the Delaware Valley** (southeast, 11 regions): 80 passengers, 5 counties, connect Philadelphia and Allentown, 10 containers (the port).
2. **Harrisburg & the Susquehanna Valley** (susquehanna, 13): 200 passengers, connect Harrisburg and York (I-83), 6 counties.
3. **The Northeast & the Northern Tier** (northeast, 12): 300 passengers, connect Scranton and Wilkes-Barre (I-81), 5 counties.
4. **Pittsburgh & the Western Plateau** (west, 19): 450 passengers, connect Pittsburgh and Altoona (the Pennsylvania Railroad main line), 8 counties.

### Biomes
Forest: the Pennsylvania Wilds (Potter-Tioga, Cameron-Clinton, Elk-McKean, Forest-Warren, Clearfield, Clarion-Jefferson) and Pike. Wooded: the Ridge-and-Valley and plateau counties, the Poconos and coal hills, and the Pittsburgh hills (28 regions, listed in `pack.js`). Farmland (not listed): the south-east, the Lebanon, Cumberland and Lancaster valleys, York and Adams, and the north-west plain (Erie, Crawford, Mercer, Lawrence, Butler). No dry.

### Unsure
Coordinates of scenic places and bridges are general knowledge, accurate to about a mile; Mount Union is in Mifflin on the map (the region merges it with Huntingdon anyway). The Lewistown Narrows point is moderately precise.

## Main agent's review

- **Coordinates:** every main station, scenic place, pass and the main bridges checked against their real locations. Moved to the real centres: Jim Thorpe (40.88, -75.73; was 2.7 mi west), Williamsport (41.24, -77.00; downtown, was 2 mi west), St. Marys (41.43, -78.56; was 3 mi north-east). The Lewistown Narrows pass moved to the middle of the Narrows between Lewistown and Mifflintown (40.57, -77.49), where US-22/322 and the railway follow the Juniata; the checker accepts it there.
- **Sizes:** accepted, except Williamsport 1 → 2 (Lycoming 114,000, a metro of its own, like Altoona and State College 2).
- **Links checked** (Gentle and Tough, open): Philadelphia–Wilmington, the Pennsylvania Railroad chain Harrisburg–Altoona–Johnstown–Pittsburgh, Pittsburgh–Wheeling, Erie–Meadville, St. Marys–DuBois, Jim Thorpe–Allentown.
- **Checks:** `check-pack` PA passed (55 stations, 99 towns, 2 passes, 60 bridges), 0 errors, 2 warnings (explained above); all packs passed; `test-pack` PA passed (17 passed).
