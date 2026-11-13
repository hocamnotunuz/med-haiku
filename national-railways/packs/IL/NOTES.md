## Region merges (phase 1)

Populations: Census 2020 (counties.json); main towns: largest place in the group (places.json). Geography notes are from general knowledge.

**Recommended** (102 counties to 63 regions: 29 big counties alone, 6 small ones alone, 28 groups)

```
merge: [
  ["Carroll", "Jo Daviess"], ["Bureau", "Putnam", "Stark"], ["Marshall", "Woodford"],
  ["Henderson", "Mercer", "Warren"], ["Hancock", "McDonough"], ["Brown", "Cass", "Schuyler"],
  ["Fulton", "Mason"], ["Logan", "Menard"], ["Morgan", "Pike", "Scott"],
  ["Calhoun", "Greene", "Jersey"], ["Bond", "Fayette", "Montgomery"], ["Christian", "Shelby"],
  ["De Witt", "Piatt"], ["Douglas", "Moultrie"], ["Clark", "Edgar"], ["Cumberland", "Effingham"],
  ["Clay", "Jasper", "Richland"], ["Crawford", "Lawrence"], ["Edwards", "Wabash", "White"],
  ["Marion", "Wayne"], ["Hamilton", "Jefferson"], ["Clinton", "Washington"],
  ["Monroe", "Randolph"], ["Franklin", "Perry"], ["Gallatin", "Hardin", "Saline"],
  ["Johnson", "Massac", "Pope"], ["Alexander", "Pulaski", "Union"], ["Ford", "Iroquois"],
]
names: none needed
bridges / join: none
```

| Group | Main station | Pop |
|---|---|---|
| Carroll, Jo Daviess | Galena | 38k |
| Bureau, Putnam, Stark | Princeton | 44k |
| Marshall, Woodford | Eureka | 50k |
| Henderson, Mercer, Warren | Monmouth | 39k |
| Hancock, McDonough | Macomb | 45k |
| Brown, Cass, Schuyler | Beardstown | 26k |
| Fulton, Mason | Canton | 47k |
| Logan, Menard | Lincoln | 40k |
| Morgan, Pike, Scott | Jacksonville | 53k |
| Calhoun, Greene, Jersey | Jerseyville | 38k |
| Bond, Fayette, Montgomery | Vandalia | 67k |
| Christian, Shelby | Taylorville | 55k |
| De Witt, Piatt | Clinton | 32k |
| Douglas, Moultrie | Tuscola | 34k |
| Clark, Edgar | Paris | 32k |
| Cumberland, Effingham | Effingham | 45k |
| Clay, Jasper, Richland | Olney | 38k |
| Crawford, Lawrence | Robinson | 34k |
| Edwards, Wabash, White | Mount Carmel | 31k |
| Marion, Wayne | Centralia | 54k |
| Hamilton, Jefferson | Mount Vernon | 45k |
| Clinton, Washington | Breese | 51k |
| Monroe, Randolph | Waterloo | 65k |
| Franklin, Perry | West Frankfort | 59k |
| Gallatin, Hardin, Saline | Harrisburg | 32k |
| Johnson, Massac, Pope | Metropolis | 31k |
| Alexander, Pulaski, Union | Anna | 28k |
| Ford, Iroquois | Watseka | 41k |

Reasoning (one line each): Carroll-Jo Daviess, the Mississippi hills (Galena, Savanna). Bureau-Putnam-Stark, Princeton and the Illinois bend. Marshall-Woodford, Illinois River north of Peoria. Henderson-Mercer-Warren and Hancock-McDonough, western Military Tract, Mississippi to Macomb. Brown-Cass-Schuyler, empty Illinois River/Sangamon bottoms. Fulton-Mason, Illinois River both banks (Canton, Havana). Logan-Menard, Lincoln and Petersburg, I-55/US-136. Morgan-Pike-Scott, Jacksonville and the Illinois-Mississippi plain. Calhoun-Greene-Jersey, the peninsula between the rivers (Calhoun is a dead end reached through Jersey). Bond-Fayette-Montgomery, the I-70/US-51 corridor (Vandalia, Litchfield, Greenville). Christian-Shelby, Taylorville to Shelbyville. De Witt-Piatt, Clinton and Monticello. Douglas-Moultrie, Tuscola and Sullivan. Clark-Edgar, Paris and Marshall. Cumberland-Effingham, I-57/70 crossing. Clay-Jasper-Richland, Olney and Flora. Crawford-Lawrence, Wabash valley (Robinson, Lawrenceville). Edwards-Wabash-White, lower Wabash and Little Wabash. Marion-Wayne, Centralia and Fairfield. Hamilton-Jefferson, Mount Vernon and McLeansboro. Clinton-Washington, Breese/Nashville along I-64. Monroe-Randolph, the Mississippi bluffs (Waterloo, Chester). Franklin-Perry, coalfield (West Frankfort, Du Quoin). Gallatin-Hardin-Saline, Ohio River and Shawnee; Massac-Pope-Johnson, Metropolis and Shawnee Forest; Alexander-Pulaski-Union, Cairo and Anna (I-57 south). Ford-Iroquois, Paxton to Watseka.

**Alone though under 50k (exceptions):** Henry 49k (Kewanee, nearly 50k), Coles 47k (Charleston/Mattoon, two towns of 17k), Macoupin 45k, Stephenson 45k (Freeport, ringed by 50k+ counties), Livingston 36k (Pontiac; neighbours are big or taken), Lee 34k (Dixon on the Rock River, neighbours big or in other groups). Knox 50k and Ogle 52k stay alone as 50k+.

**Alternative:** pair Livingston with Ford (Pontiac-Paxton, 50k) and leave Iroquois alone (27k), and merge Lee with Bureau-Putnam-Stark (Lee-Bureau shares a border, 78k) - pro: fewer 'small alone' regions (61 total); con: Princeton group gets stretched across the Rock River/I-80 and Iroquois is left isolated.

**Map checks:** nothing clearly wrong found; neighbour lists look consistent (Cook lists no Indiana, Hamilton/Hancock Iowa/Missouri links fine, Indiana/Kentucky not yet in game as expected). Calhoun has no ferry bridge but joins Jersey so no bridge needed. Monroe-Randolph main town ties (Waterloo 11k, Columbia 11k).

(Phase 1 was applied with two changes by the main agent: Stephenson joins Carroll-Jo Daviess (station Freeport) and Livingston joins Ford-Iroquois (station Pontiac): 61 regions.)

## Pack build (phase 2)

Everything below comes from `packs/IL/raw/` (Census 2020 populations and place points) unless marked "general knowledge" (well-known geography; no outside source consulted). `pack.js` is generated for review by helper scripts under /tmp/il-work (not saved).

**Counts:** 61 stations (one per region), 90 towns (1.5 per region), 0 passes (no mountains on the map; the Shawnee hills and the Driftless bluffs are hills), 37 bridges, 4 levels, no `bays`, no `metros` (Chicago's city map comes later).

**Start:** Cook (Chicago, metro), Lake (Waukegan, coast) and McHenry (Crystal Lake, metro): all three touch each other. `NR.firstTrackPair` gives Chicago to Waukegan (40 mi, metro to coast), so the first track has riders. (The pack test lays WKG-CLKE, its own nearest different-type pair, which also passes.)

**Station ids:** 2-4 capitals, unique across every `packs/*/pack.js` (checked: no duplicates). Where the natural code was taken by another state (Chico's CHI, Aurora's AUR in Colorado, Quincy's QCY in California and so on) an Illinois code is used, ending in I or L or a longer name (CHGO, AURL, QNCY...).

**Sizes (against the other packs and the PACKS.md guide):** Cook 5276k size 5; DuPage 933k size 4 (as Milwaukee's 939k); Lake 714k, Will 697k, Kane 517k size 3; every other region of 100k or more, and Danville 74k and Quincy 66k (cities of 29k and 39k), size 2; all the rest size 1. Rockford (285k) is size 2 like Green Bay (269k) and Cedar Rapids (230k). Madison (266k) and St. Clair (257k) are size 2.

**Types:** metro for the big city cores and suburbs (Chicagoland, Rockford, the Quad Cities, Peoria, Bloomington, Champaign, Decatur, Springfield, Madison, St. Clair); coast for Waukegan and Highland Park (Lake Michigan harbour towns, as Kenosha and Racine); mountain for the Shawnee hills (Carbondale, Harrisburg, Anna and the Cave-in-Rock, Vienna and Garden of the Gods towns, as Minnesota and Wisconsin use mountain for the forested north); farm for everything else (Illinois is the Corn Belt).

**Downtown moves (a Census point is the middle of the city limits):** Chicago (Loop 41.88,-87.63, 3 mi from the point 41.84,-87.68), Naperville 41.77,-88.15, Waukegan 42.36,-87.84, Joliet 41.52,-88.08 (4 mi east), Aurora 41.76,-88.32, Crystal Lake 42.24,-88.32, Morris 41.36,-88.42, Rockford 42.27,-89.09, Peoria 40.69,-89.59 (4.5 mi south of its point, which is in the northern suburbs; downtown on the river), Quincy 39.93,-91.40, Springfield 39.80,-89.65, Decatur 39.84,-88.95, Champaign 40.12,-88.24, Bloomington 40.48,-89.00, Metropolis 37.15,-88.73. Moline: the Census point (41.48,-90.49) is 1 km from the exact limits, moved to 41.49,-90.50, 4.6 mi from Davenport's station (Iowa).

**Spacing / left-out twins:** East St. Louis (faces St. Louis's station), Rock Island (3 mi from Davenport), Urbana (3 mi from Champaign), Normal (2.5 mi from Bloomington), Rock Falls (2 mi from Sterling), East Peoria (2.5 mi from Peoria), Collinsville (3.5 mi from Cahokia Mounds) and Savanna (the Mississippi Palisades scenic place stands in for it) are not placed. The checker reports 0 warnings.

**Airports and ports:** Chicago holds O'Hare International Airport (in the city; Midway is also in the city) and the Port of Chicago (Calumet Harbor, the Great Lakes' biggest port by general knowledge). No other airport reaches the bar of the other packs (Cook is the one big one).

**Region choices where the biggest place is not obvious:** Charleston (17,280) over Mattoon (16,893); Vandalia (7,457) over Greenville (7,079); West Frankfort (7,275) over Benton (6,713); Waterloo (11,013) over Columbia (11,011); Granite City (27,566, 8 mi from St. Louis's station) over Edwardsville and Alton, which are towns; Belleville, not East St. Louis; Freeport (23,967) leads its group; Oswego (34,602) is Kendall's biggest, with Yorkville the seat as a town; Joliet's region has Bolingbrook and Plainfield as towns.

**Scenic places** (all `scenic: true`; stations Chicago, Springfield and Metropolis, and towns): Chicago's lakefront (Millennium Park, Navy Pier); Springfield (the Lincoln Home, Old State Capitol, Lincoln's Tomb: Lincoln Home National Historic Site); Metropolis (the Superman statue and Fort Massac State Park); Oak Park (Frank Lloyd Wright's home and studio; Unity Temple); Galena (a National Historic Landmark district, Grant's home); Mississippi Palisades State Park (42.14,-90.15, general knowledge; north of Savanna); Starved Rock State Park (41.32,-89.00, general knowledge; the state's most visited); Nauvoo (40.55,-91.38, general knowledge; the Mormon settlement, a National Historic Landmark); Lincoln's New Salem (40.02,-89.84; State Historic Site near Petersburg, Wikipedia); Cahokia Mounds (38.66,-90.06; UNESCO World Heritage Site, Collinsville, Madison County); Cave-In-Rock State Park (37.47,-88.16; the Ohio River cave, from places.json); the Garden of the Gods Recreation Area (about 37.60,-88.40; Shawnee National Forest, in Saline County by the map's outline). All the coordinates were checked to lie in their region by the checker.

**Bridges (all general knowledge, placed on the map's river at the town; each is the one the main lines use):**
- Illinois River (the map's river also carries the Kankakee up to Kankakee): Kankakee-Bradley, Morris (I-80), Ottawa (the Fox joins the Illinois here; US-6 and the Ottawa bridges), Peru-LaSalle (I-39 and the IL-251 bridges), Hennepin (IL-26), Henry (IL-18), Lacon (IL-17), Chillicothe (IL-29), Peoria-East Peoria (the Murray Baker I-74, Bob Michel and Franklin Street bridges), Pekin (US-24), Havana (US-136), Beardstown (US-67), Meredosia (IL-104), the Joe Page Bridge at Hardin (IL-16/100, into Calhoun County).
- Rock River: Rockford, Byron, Oregon, Dixon, Sterling-Rock Falls, Moline-Milan (the mouth). Fox River (Illinois): Carpentersville, Elgin, St. Charles-Geneva-Batavia, Aurora, Oswego-Montgomery, Yorkville (the Fox is on the map).
- Kaskaskia: Vandalia (I-70/US-51), Carlyle (US-50, at the south tip of Carlyle Lake), the Lake Shelbyville bridge (IL-16, Shelbyville), Rend Lake (the I-57 crossing, from memory of the interstate; the lake is also a block), Sangamon at Petersburg (IL-97).
- Wabash and Ohio (Indiana and Kentucky come later): Mount Carmel, the Lincoln Memorial Bridge (US-50, Lawrenceville to Vincennes), the Shawneetown Bridge (US-45/IL-13 to Kentucky), the Cave-In-Rock ferry, the Irvin S. Cobb Bridge (Brookport to Paducah) and the Cairo Ohio River bridges.
- The Mississippi crossings (the Quad Cities, Clinton, Burlington, Keokuk, Quincy's Bayview, Hannibal, Alton's Clark Bridge, St. Louis's Eads, Poplar Street and Stan Musial, Chester, Cape Girardeau and Cairo) are already in the Iowa and Missouri packs with their names; none is repeated here.

**Biomes:** forest: Johnson-Massac-Pope, Alexander-Pulaski-Union, Gallatin-Hardin-Saline (Shawnee National Forest); wooded: Carroll-Jo Daviess-Stephenson (Driftless bluffs), Calhoun-Greene-Jersey, Monroe-Randolph (Mississippi bluffs), Jackson, Williamson, Franklin-Perry (the wooded hills), Morgan-Pike-Scott, Brown-Cass-Schuyler (Illinois River bluffs). The rest is farmland and prairie. No `dry`.

**Levels:** (1) Chicagoland (Cook, DuPage, Lake, McHenry, Kane, Will, Kendall, Kankakee, Grundy, DeKalb: 10 stations); (2) Rockford, the Quad Cities and the north-west (15: Winnebago to Henderson-Mercer-Warren, Hancock-McDonough, Adams); (3) Peoria, Springfield, Champaign and the prairie (19); (4) Metro East and Little Egypt (17, with Jerseyville). Goals are the same kinds as Wisconsin and California; connect goals follow I-90 (Chicago to Rockford), I-55 (Chicago to Springfield) and I-57 (Chicago to Carbondale).

**Reachability (NR.blockedReason, Gentle and Tough):** every main station links to every neighbouring main station inside and across the border (IA, MO, WI) with no block; no town without an open link. The only neighbouring pair that needs a new bridge is Charleston-Taylorville (1.5 mi over the Kaskaskia arm of Lake Shelbyville, cheap and allowed). Named chains all pass in both modes: I-94 (Milwaukee, Racine, Kenosha, Waukegan, Chicago), I-90 (Chicago, Crystal Lake, Belvidere, Rockford, Janesville, Madison), I-39 (Rockford to Bloomington), I-55 (Chicago to St. Louis), I-57 (Chicago to Carbondale and Anna), I-74 (Davenport to Danville), I-80 (Joliet to the Quad Cities), I-88, I-72 (Hannibal to Champaign), I-64 and I-70 to St. Louis, US-34 (Burlington to Galesburg), US-20 (Dubuque to Rockford), Quincy to Hannibal, Illinois River (Peoria to Ottawa), the Wabash line (Paris to Mount Carmel). Chicago to Milwaukee direct is blocked by Lake Michigan (37 mi): the lake-shore chain works.

**Checks:** `node tools/check-pack.js IL` 0 errors, 0 warnings; `node tools/check-pack.js` all packs passed; `node tools/test-pack.js IL` PASSED (17 passed, 0 failed). Screenshot looked at: `test-out/IL/IL-arcade-light.png` (the three start stations at the lake, the state outlined, the rivers).

**Unsure:** the Rend Lake (I-57) bridge point and the Peru-LaSalle bridge names are from general knowledge; the scenic coordinates marked general knowledge are approximate (within a mile or two). Illinois has size-2 regions with small cities (Quincy, Danville) by the 60k-plus rule used in other packs.

## City maps

**Chicago (`CHGO`, size 5, 12 stops, hub Union Station).** Union Station (41.879,-87.640, Amtrak and Metra, 0.5 mi from the state map's Loop station), Streeterville, Lincoln Park, Wrigleyville (Wrigley Field), Wicker Park, Chinatown, Hyde Park (University of Chicago), Oak Park, Evanston (downtown), Skokie, O'Hare Airport, Midway Airport. Furthest stop O'Hare, 15.6 mi; closest pair 1.4 mi. All coordinates from general knowledge (neighbourhood centres, rounded to 3 decimals).
- Preview (`/tmp/city-midwest/preview-CHGO.png`): Lake Michigan is water. Navy Pier sat on the shore, so the stop is Streeterville (41.893,-87.620), a few hundred metres inland; Evanston moved 0.005 deg west off the shore. No stop in water.
- Left out: Gary and Hammond (Indiana, 20-25 mi, too close to the 25-mile limit or in another state), Naperville, Aurora, Joliet, Schaumburg and Waukegan (over 25 mi), Cicero and Bridgeport (too near Midway and Chinatown).
- Unsure: nothing placed that I am unsure of; Evanston, Skokie and Oak Park are the village centres.

- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
