# South Carolina pack notes

## Region merges (phase 1)

Populations: Census 2020 (counties.json). Main stations: largest incorporated place in places.json.
Geography (corridors, rivers, lakes) is from general knowledge, not the data.

46 counties -> 32 regions (24 counties in 10 groups, 22 counties alone).

```
merge: [
  ["Abbeville", "Edgefield", "McCormick"],
  ["Newberry", "Saluda"],
  ["Chester", "Fairfield", "Union"],
  ["Chesterfield", "Marlboro"],
  ["Dillon", "Marion"],
  ["Clarendon", "Williamsburg"],
  ["Calhoun", "Orangeburg"],
  ["Kershaw", "Lee"],
  ["Allendale", "Bamberg", "Barnwell"],
  ["Colleton", "Hampton", "Jasper"],
],
names: {
  "Abbeville-Edgefield-McCormick": "Savannah Valley",
  "Colleton-Hampton-Jasper": "Lowcountry",
  "Chesterfield-Marlboro": "Northern Pee Dee",
},
```
No bridges or joins needed (no islands cut off).

| Group | Main station | Combined pop | Reasoning |
|---|---|---|---|
| Abbeville-Edgefield-McCormick | Abbeville 4,871 | 59,467 | Western Piedmont along the Savannah River / Lake Strom Thurmond and Sumter National Forest; chain Abbeville-McCormick-Edgefield; Greenwood (69k) stays alone as its own market |
| Newberry-Saluda | Newberry 10,707 | 56,576 | Dutch Fork / Saluda River country, Newberry the only real town; Saluda borders it |
| Chester-Fairfield-Union | Union 8,170 | 80,490 | Three mutually bordering rural Piedmont counties between I-77 and the Broad River; no big town, Union largest |
| Chesterfield-Marlboro | Bennettsville 7,017 | 69,941 | Northern Pee Dee at the North Carolina line (Cheraw, Bennettsville), US-1 / US-15 / US-401 |
| Dillon-Marion | Dillon 6,518 | 57,481 | I-95 / Little Pee Dee corridor east of Florence, Dillon-Latta-Marion-Mullins |
| Clarendon-Williamsburg | Manning 3,875 | 62,168 | US-521 / Lake Marion / Black River rural belt, Manning to Kingstree |
| Calhoun-Orangeburg | Orangeburg 13,225 | 98,343 | I-26 / US-301 corridor, St. Matthews to Orangeburg |
| Kershaw-Lee | Camden 7,791 | 81,940 | I-20 / US-15 Wateree corridor, Camden to Bishopville |
| Allendale-Bamberg-Barnwell | Barnwell 4,651 | 41,949 | Mutually bordering Savannah River Site / US-301 counties |
| Colleton-Hampton-Jasper | Hardeeville 7,488 | 85,967 | Lowcountry along I-95 and the CSX Charleston-Savannah line (Walterboro, Hampton, Ridgeland) |

### Exceptions to the 50k rule
- Kershaw (65k) + Lee (17k): Lee has no small neighbour left that is not already grouped; its neighbours are Darlington, Florence, Sumter, Kershaw, all 50k+. Kershaw shares I-20 / US-15 with Bishopville.
- Calhoun (14k) + Orangeburg (84k): Calhoun's other neighbours are Clarendon (across Lake Marion), Lexington, Richland, Sumter; Orangeburg is the I-26 / US-301 partner. Orangeburg is the main station.
- Chester-Fairfield-Union (80k) and Colleton-Hampton-Jasper (86k) are full 3-groups of small counties; both are large only because the members are 20-39k each.
- Jasper (29k) is arguably the Hilton Head / Bluffton hinterland (Beaufort 187k stays alone); kept with I-95 neighbours instead.

### Alternative
Put Jasper with Beaufort (Beaufort-Jasper 216k) and make Colleton-Hampton 57k (main Walterboro); pro: matches the Hilton Head-Bluffton-Ridgeland growth area; con: Beaufort becomes a big exception and Hardeeville/I-95 and Walterboro lose one region.
Second variant: Calhoun-Clarendon-Williamsburg (76k) with Orangeburg alone; con: Lake Marion lies between Calhoun and Clarendon.

### Map observations
- places.json has null populations for Cherokee Falls (Cherokee), Coosawhatchie (Jasper) and Ashwood (Lee); these are census-designated or unincorporated oddities, not real incorporated places; check before using them.
- Some "places" in the list (Burnettown, Pawleys Island 131, Plum Branch 79) are tiny; use only larger towns as stations.
- Neighbour lists look symmetrical and plausible; no GA link missing seen (Aiken-Richmond, Hampton-Effingham, Jasper-Chatham present). Charleston/Berkeley/Dorchester and the Horry-Georgetown coast need no bridges.
- Not checked visually: ring shapes in map.js (not printed per brief).

## Pack build (phase 2)

32 main stations (one per region), 47 towns, 0 passes, 8 bridges, 0 bays, 4 levels (Upstate, Midlands, Pee Dee and Grand Strand, Lowcountry), biomes forest and wooded (no dry). Populations and coordinates come from packs/SC/raw; station comments in pack.js give the Census place populations. Ids were generated to be unique across every packs/*/pack.js (the checker confirms).

### Judgment calls
- **Start:** Greenville (526k, the biggest), Anderson and Pickens (both touch Greenville and each other). Types metro, farm, mountain, so the first track (Greenville-Easley, 13 mi) has riders. A Charleston start (Charleston, Berkeley, Dorchester) would also work but Greenville is the biggest.
- **Colleton-Hampton-Jasper:** Walterboro (central, I-95 and US-17A, the Colleton seat) not Hardeeville (the biggest, 45 miles away in the Georgia corner). Hardeeville, Ridgeland and Hampton are towns, so the I-95 and US-17 link to Savannah stays open.
- **Clarendon-Williamsburg:** Manning (biggest, on I-95, US-301, Lake Marion); Kingstree is a town.
- **Beaufort:** Hilton Head Island (biggest, resort island). Beaufort and Bluffton are towns. The map's land runs continuously to the island, so no bay or bridge is needed; no Hilton Head bridge was added.
- **Aiken:** Aiken town (biggest). North Augusta (24k) is a town at 33.53, -81.93, about 4 miles from Augusta's station (33.47, -81.97) across the Savannah.
- **Columbia:** at the Statehouse (34.00, -81.03). The Census point is 7 miles east. Columbia Metropolitan Airport is actually in Lexington County (West Columbia/Cayce); listed on Richland as the capital's airport (CAE, a mid-size airport; remove if the bar is higher).
- **Rock Hill** at downtown; Charlotte's future station (Uptown, 35.23, -80.84) is about 22 miles away, so the 4-mile spacing is not an issue.
- **Charleston** at the downtown peninsula (32.78, -79.93). Port of Charleston and Charleston International (CHS airport, in North Charleston) are real. Sizes: Greenville, Richland, Charleston, Spartanburg and Horry are 3; the rest follow the PACKS.md guide, rural groups are 1.
- **Lexington** (town) rather than West Columbia or Cayce, which are under 4 miles from the Statehouse.
- **Airports:** Greenville-Spartanburg (GSP), Columbia (CAE), Charleston (CHS), Myrtle Beach (MYR). Savannah/Hilton Head is Georgia's.

### Scenic places (all real and well known)
Charleston's historic district (the Charleston station), Hilton Head Island and Myrtle Beach (their stations), Caesars Head State Park (35.11, -82.63) and Table Rock State Park (35.03, -82.70) in the Blue Ridge Escarpment, Cowpens National Battlefield (Cherokee County, National Park Service), Congaree National Park (33.79, -80.78, Richland County, NPS), Brookgreen Gardens (33.52, -79.10, Georgetown County, Murrells Inlet), Kiawah Island (32.61, -80.08), Middleton Place (32.90, -80.14, Dorchester County, on the Ashley River). Fort Sumter is on a harbor island that is water on the map, so it is not a point.

### Bridges (well known; points are within a mile or two of the real structure)
Arthur Ravenel Jr. Bridge, Don Holt Bridge (I-526) and the US-17 Ashley River bridge at Charleston; Pinopolis Dam (SC-6, Lake Moultrie); I-95 across Lake Marion (position approximate, on the map's lake); Lake Murray Dam (SC-6); Gervais Street Bridge (Congaree, Columbia); the US-501 Waccamaw bridge at Conway. The Savannah crossings are Georgia's (Fifth Street Bridge, Augusta; Houlihan Bridge, US-17; Hartwell, Russell and Thurmond dams). A Woods Memorial Bridge (Beaufort) point was dropped because the map has no water there.

### Passes
None: the Blue Ridge edge is only along the North Carolina line and the checker finds no mountains on any line; Caesars Head and Sassafras were not needed.

### Reachability (NR.blockedReason in Gentle and Tough)
Every main station reaches 3 or more neighbouring stations (Myrtle Beach 2, Hilton Head 1: its only neighbour is Colleton-Hampton-Jasper), and every town links to its main station, in both modes. The one blocked pair in Tough is Lexington-Newberry, across Lake Murray (4 miles, the dam is 5 miles from the line); both have other open neighbours (Columbia, Aiken...), and I-26 goes through Columbia. Chains open in both modes: I-26 (Greenville, Spartanburg, Newberry, Columbia, Orangeburg, Summerville, Charleston), I-95 (Savannah, Hardeeville, Walterboro, Orangeburg, Manning, Florence, Dillon), I-20 (Augusta, Aiken, Lexington, Columbia, Camden, Florence), I-77 (Columbia, Chester, Rock Hill), US-17 coast (Savannah to Myrtle Beach) and the Upstate (Greenwood, Laurens, Greenville, Easley, Seneca, Anderson). Georgia: Hartwell, Elberton, Augusta and Savannah all link to South Carolina stations; Toccoa-Anderson and Royston-Anderson are blocked in Tough by Lake Hartwell (no I-85 bridge point was added since its position is uncertain), Hartwell-Anderson is open.

### Checks
`node tools/check-pack.js SC`: passed, 0 errors, 0 warnings. All packs passed. `node tools/test-pack.js SC`: PASSED, 17 passed, 0 warnings, 0 failed. Screenshot SC-arcade-light.png: the start (Greenville, Anderson, Pickens) and the first track Greenville-Easley look right.
