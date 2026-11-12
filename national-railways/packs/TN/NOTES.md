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
