# Ohio (OH) pack notes

## Region merges (phase 1)

Populations: `packs/OH/raw/counties.json` and `places.json` (U.S. Census Bureau, 2020). Every group was checked for connectivity through `neighbors`. Geography and transport facts below are from general knowledge (well known unless marked).

### Recommended (88 counties to 69 regions)

```
merge: [
  ["Defiance", "Henry"], ["Paulding", "Putnam", "Van Wert"], ["Fulton", "Williams"],
  ["Auglaize", "Mercer"], ["Champaign", "Logan"], ["Hardin", "Wyandot"], ["Crawford", "Morrow"],
  ["Fayette", "Madison"], ["Clinton", "Highland"], ["Adams", "Brown"], ["Jackson", "Pike"],
  ["Gallia", "Meigs"], ["Hocking", "Vinton"], ["Morgan", "Perry"], ["Guernsey", "Monroe", "Noble"],
  ["Carroll", "Harrison"], ["Coshocton", "Holmes"],
],
names: {},
bridges/join: none
```

The 49 counties of 50k and over stay alone. Of the 39 under 50k, 36 are in the 17 groups above and 3 stay alone (exceptions below).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Defiance + Henry | Maumee valley, US-24 from Defiance to Napoleon | Defiance (17,055) | 65,942 |
| Paulding + Putnam + Van Wert | Northwest Ohio plain, US-30/US-224 and the Indiana line; Van Wert is the market town | Van Wert (11,113) | 82,172 |
| Fulton + Williams | The northwest corner, the Ohio Turnpike (I-80/90) and US-20, Wauseon to Bryan | Bryan (8,729) | 79,817 |
| Auglaize + Mercer | Grand Lake St. Marys, Wapakoneta, St. Marys, Celina; SR-29/SR-66 country | Celina (10,934) | 88,966 |
| Champaign + Logan | US-68 and US-33, Urbana to Bellefontaine | Bellefontaine (14,123) | 84,865 |
| Hardin + Wyandot | US-30/SR-67 farmland, Kenton to Upper Sandusky | Kenton (7,944) | 52,586 |
| Crawford + Morrow | US-30 and US-42, Bucyrus, Galion, Mount Gilead; the Mansfield-Marion gap | Bucyrus (11,683) | 76,961 |
| Fayette + Madison | US-62 and US-38, Washington Court House to London, the plain southwest of Columbus | Washington Court House (14,407) | 72,791 |
| Clinton + Highland | US-68/US-50/SR-73, Wilmington to Hillsboro | Wilmington (12,668) | 85,335 |
| Adams + Brown | The Ohio River hills, SR-41/SR-125, Georgetown, West Union, Ripley | Georgetown (4,458) | 71,144 |
| Jackson + Pike | Scioto-Ohio hills, SR-32/US-35 and US-23 (Waverly), Wellston | Jackson (6,252) | 59,736 |
| Gallia + Meigs | The Ohio River, SR-7, Gallipolis to Pomeroy | Gallipolis (3,312) | 51,422 |
| Hocking + Vinton | The Hocking Hills, US-33 and SR-93 | Logan (7,292) | 40,853 |
| Morgan + Perry | The Muskingum-Hocking uplands, SR-37/SR-78, New Lexington, McConnelsville | New Lexington (4,430) | 49,213 |
| Guernsey + Monroe + Noble | I-77 and I-70 at Cambridge, I-77 south by Caldwell, SR-78 to Woodsfield | Cambridge (10,088) | 65,935 |
| Carroll + Harrison | Upland east of the Tuscarawas, Carrollton and Cadiz, US-22/SR-9 | Carrollton (3,089) | 41,201 |
| Coshocton + Holmes | Walhonding valley and Amish country, US-36/SR-83 | Coshocton (11,053) | 80,820 |

Station rule: the largest place in places.json, as in NM. Carroll's Carrollton (3,089) edges Cadiz (3,059).

Exceptions, alone under 50k:
- **Shelby** 48,229 (Sidney 20,591). Almost 50k and a real I-75 city.
- **Ottawa** 40,362 (Port Clinton 6,027). The Lake Erie peninsula and the Bass islands; its four neighbours (Erie, Lucas, Sandusky, Wood) are all counties of 50k or more, and Port Clinton would lose its station to a bigger town.
- **Preble** 40,998 (Eaton 8,391). On I-70/US-35 between Dayton and Indiana; its other neighbours are Butler, Montgomery and Darke (52k, alone by the rule).

Rejected: Gallia + Meigs + Vinton with Hocking + Perry and Morgan + Monroe + Noble (see Alternative). Adams + Pike (Pike belongs on US-23/Jackson). Fayette + Highland, Madison alone (Madison is Columbus's orbit but 44k). Fulton + Williams + Henry (4 corners too wide). Ottawa + Sandusky (a 59k county that should stay alone).

### Alternative (also 69 regions)

`["Gallia", "Meigs", "Vinton"], ["Hocking", "Perry"], ["Morgan", "Monroe", "Noble"]` in place of Gallia-Meigs, Hocking-Vinton, Morgan-Perry and Guernsey-Monroe-Noble, with Guernsey alone (38k, a fourth exception). Pro: Vinton joins the Ohio River side and Logan joins Perry in one Hocking Hills region, and Morgan-Noble-Monroe is a clean Appalachian trio. Con: Cambridge's county is left alone at 38k.

### Map review

- Neighbour lists are symmetric; every county has a place; the state totals 11,799,331 in 88 counties.
- Place names to clean up: "The Village of Indian Hill" (Hamilton), "Matamoras (New Matamoras)", "Hartford (Croton)", "Gann (Brinkhaven)", "Centerville (Thurman)", "Rome (Stout)"; "The Plains" has a null population.
- Duplicate place names across counties (Oakwood, Shawnee, Sherwood, New Haven, Lafayette, Newport, Harrisburg, Bainbridge, Shiloh, Dillonvale and others) need care in the pack.
- Indiana and Michigan neighbours exist as merged Indiana regions (`in-adams-wells`, `in-blackford-jay-randolph`, `in-dekalb-noble`, `in-fayette-franklin-union`, `in-lagrange-steuben`, `mi-branch-hillsdale`); no missing neighbours found for those borders. Lake Erie islands are not checked against the polygons.

## Phase 2: the pack (packs/OH/pack.js)

The phase-1 merges were applied exactly (69 regions). 69 main stations, 124 towns (118 chosen by script, 6 scenic by hand), 0 passes, 32 bridges, 4 levels. Checker: 0 errors, 0 warnings (all packs pass); pack test PASSED (17).

**Start:** Franklin (Columbus), Delaware and Union (Marysville), which all touch each other. Columbus and Delaware are metro, Marysville is farm. The test's first track is Delaware-Marysville (18 mi) and Columbus-Marysville is the other pair with riders.

**Stations.** Populations are the regions' (counties.json, thousands). Each station is the biggest place in places.json except:
- **Xenia (Greene):** not Beavercreek (46,560, a Dayton suburb 7 mi from Dayton, a town) or Fairborn; Xenia is the seat in the middle of the county.
- **St. Clairsville (Belmont):** not Martins Ferry (6,258, 3 mi from Wheeling, WV, whose station will come later; a town here).
- **Mentor, Mason, Brunswick, Milford, Delaware, Kent, Lancaster** are the biggest places of their counties (the brief names several); Milford (6,577) is the biggest incorporated place in Clermont.
- Downtown points (the Census point is the middle of the city limits): Columbus (Statehouse), Cleveland (Public Square), Cincinnati (Fountain Square), Toledo, Akron, Dayton, Hamilton, Canton, Lorain, Sandusky, Youngstown.
- Sizes (PACKS.md guide, judged against IN/MI): Columbus, Cleveland and Cincinnati 4 (like Indianapolis 977k); Toledo, Akron, Dayton, Hamilton (Butler 390k) and Canton 3; every other solo region 2; groups 2 if the main town has 10,000 or more, else 1; Preble and Ottawa 1.
- Types: metro for the big metros and their suburban counties (and Mansfield, Springfield, Lima, Findlay, Newark, Warren); coast for the Lake Erie shore (Lorain, Ashtabula, Sandusky, Port Clinton); mountain for Logan (the Hocking Hills gateway); farm elsewhere.
- Ports: Cleveland and Toledo (Great Lakes ports, as the brief says); Ashtabula, Lorain and Sandusky are not marked. Airports (by the IN bar, one big airport per state or metro): Cleveland Hopkins, John Glenn Columbus, and CVG on Cincinnati's station (it is in Boone County, Kentucky, until Kentucky's pack exists).
- Scenic flags on stations (a famous sight within about 4 mi of a station would be too close to be a town): Cleveland (Rock and Roll Hall of Fame), Canton (Pro Football Hall of Fame), Dayton (National Museum of the U.S. Air Force, 6 mi east), Sandusky (Cedar Point), Chillicothe (Hopewell Culture National Historical Park, NPS), Newark (Newark Earthworks, UNESCO World Heritage Site 2023). All from general knowledge.
- Exceptions kept alone are in phase 1 (Shelby, Ottawa, Preble).

**Towns (124).** Per region by size (6, 5, 4, 3, 2, 1 towns for regions of 1.2M+, 800k+, 500k+, 300k+, 90k+, others), the next-biggest places by Census population, at least 4.2 mi from every other place. Names tidied ("The Village of Indian Hill" and the CDP-style "Matamoras (New Matamoras)" never made the list). Scenic towns by hand (all from general knowledge; each inside its region, 0 checker warnings): Cuyahoga Valley National Park (NPS; Peninsula, Summit), Hocking Hills State Park (Old Man's Cave, 10 mi from Logan), Serpent Mound (Adams), Berlin (Amish Country, Holmes), Put-in-Bay (South Bass Island; the island is inside the map's Ottawa outline), Geneva-on-the-Lake (Ashtabula).

**Passes:** none. The elevation grid has no mountain cells in Ohio (the only two are in West Virginia) and 79 hills cells; the plateau is hills.

**Bridges (32; names real, points snapped to the map's rivers within 0-2 mi; the real positions are from general knowledge, not looked up):**
- The Ohio River (Kentucky, West Virginia come later): Roebling Suspension Bridge and the Brent Spence Bridge (Cincinnati-Covington), the Carl Perkins Bridge (US-23, Portsmouth-South Shore), the Ironton-Russell Bridge, the Silver Memorial Bridge (Gallipolis-Point Pleasant), the Pomeroy-Mason Bridge, the Parkersburg-Belpre Bridge, the Williamstown-Marietta Bridge, the Fort Henry Bridge (I-70, Wheeling-Bridgeport), the Veterans Memorial Bridge (Steubenville-Weirton), the Jennings Randolph Bridge (East Liverpool-Chester). Indiana's pack has the Combs-Hehl bridge at Lawrenceburg.
- Scioto: Columbus, Circleville, Chillicothe, Portsmouth. Great Miami: Dayton, Hamilton, Middletown, Troy, Piqua, Sidney. Maumee: Toledo, Perrysburg-Maumee, Napoleon, Defiance. Muskingum: Zanesville (the Y-Bridge), Marietta, Coshocton. St. Marys: St. Marys.
- Lake Erie, three entries that a line needs (tested): the Thomas Edison Memorial Bridge (SR-2) over Sandusky Bay, which the map draws as lake water between Port Clinton and Sandusky (Port Clinton-Norwalk and Port Clinton-Tiffin crossed it); the Vermilion River bridge (US-6), standing for the shore line Lorain-Vermilion-Huron-Sandusky, which the map's simplified coast would otherwise treat as 18 mi of open lake; and the Miller Boat Line ferry (Catawba-Put-in-Bay).
- Not bridged: Grand Lake St. Marys and Mosquito Creek and Pymatuning reservoirs (the brief says reservoirs block except at real crossings; I did not want to guess at the causeways). The only link this blocks is Celina-Sidney in Tough.

**Water and reachability (NR.blockedReason, both modes):** Gentle: every main station has all of its 4 nearest neighbours within 60 mi open, and every town has an open link. Tough: every station has at least 3 of its 4 open (blocked: Celina-Sidney across Grand Lake, and Port Clinton-Tiffin across the Sandusky Bay arm), every town has an open link. Chains open in both modes: I-71 (Cleveland, Brunswick, Ashland, Mansfield, Delaware, Columbus, Washington Court House, Wilmington, Mason, Cincinnati), I-75 (Monroe MI, Toledo, Bowling Green, Findlay, Lima, Sidney, Troy, Dayton, Hamilton, Cincinnati), I-70 (Richmond IN, Eaton, Dayton, Springfield, Washington Court House, Columbus, Newark, Zanesville, Cambridge, St. Clairsville), I-90 and the shore (Angola IN, Bryan, Toledo, Fremont, Sandusky, Lorain, Cleveland, Mentor, Ashtabula), I-77/I-76 (Cleveland, Akron, Canton, New Philadelphia, Cambridge, Marietta; Akron-Kent-Youngstown), US-23 (Columbus, Circleville, Chillicothe, Portsmouth; north to Delaware, Marion, Findlay), US-33 (Columbus, Lancaster, Logan, Athens), US-35, US-24 and US-30 from Fort Wayne (Defiance, Van Wert, Lima), Cincinnati-Lawrenceburg IN, Toledo-Monroe MI, the Ohio River and Muskingum chains.

**Biomes:** forest (Wayne National Forest, Shawnee State Forest and the south-east hills): Hocking-Vinton, Athens, Gallia-Meigs, Lawrence, Morgan-Perry, Jackson-Pike, Adams-Brown, Scioto, Washington. Wooded: Guernsey-Monroe-Noble, Carroll-Harrison, Belmont, Jefferson, Tuscarawas, Coshocton-Holmes, Muskingum, Knox, Columbiana, Ross, Clinton-Highland, Hamilton, Clermont, Geauga, Ashtabula, Fairfield, Licking. The rest is farmland. No dry areas.

**Levels (4):** 1 Columbus & Central Ohio (16 regions, area "central"); 2 Cincinnati, Dayton & the Ohio River (18, "southwest"); 3 Cleveland, Akron & the Northeast (20, "northeast"); 4 Toledo, the Northwest & Appalachian Ohio (15, "northwest"). Goals: passengers 50/140/280/450; connect Columbus-Mansfield, Columbus-Cincinnati, Columbus-Cleveland (all I-71), Cleveland-Toledo; counties 5/15/40; containers 10 in level 3 (the Port of Cleveland), trucks 30 in level 4.

**IDs:** unique across all packs (checked by the checker): the main cities are CMH, CLE, CIN, TOL, AKRO, DAY, HMTN, CANT, YNG; other ids are made from the names (MANS is Mansfield, since MNSF is another pack's).

**Not sure:** the real coordinates of the three Lake Erie crossings and the Ohio River bridges (general knowledge; they sit within 3 mi of the map's water); whether Put-in-Bay should be a town at all (it is a seasonal island); Hamilton (63k) as Butler's station next to bigger Middletown/Fairfield suburbs is the Census choice.
