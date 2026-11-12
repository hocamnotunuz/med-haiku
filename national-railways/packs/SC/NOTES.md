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
