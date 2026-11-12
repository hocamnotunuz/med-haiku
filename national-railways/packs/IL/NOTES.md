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
