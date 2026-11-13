# Pennsylvania (PA) pack notes

## Region merges (phase 1)

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
