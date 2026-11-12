# Florida pack notes

## Region merges (phase 1)

Source: packs/FL/raw/counties.json (Census 2020) and places.json. Geography (interstates, rivers) from general knowledge.

```
merge: [
  ["Holmes", "Jackson", "Washington"],
  ["Calhoun", "Gulf", "Liberty"],
  ["Franklin", "Wakulla"],
  ["Hamilton", "Jefferson", "Madison"],
  ["Dixie", "Lafayette", "Taylor"],
  ["Gilchrist", "Levy"],
  ["Baker", "Bradford", "Union"],
  ["DeSoto", "Hardee"],
  ["Glades", "Hendry", "Okeechobee"],
]
names: { "Glades-Hendry-Okeechobee": "Lake Okeechobee", "Dixie-Lafayette-Taylor": "Big Bend", "Calhoun-Gulf-Liberty": "Apalachicola Valley" }
```
No bridges or joins needed. Result: 52 regions (67 - 24 merged counties + 9 groups). Gadsden and Suwannee stay alone.

| Group | Pop (k) | Main station | Why |
|---|---|---|---|
| Holmes-Jackson-Washington | 92 | Marianna (6.3k; Chipley 3.7k) | Jackson borders both; I-10/US-90 corridor in the western Panhandle |
| Calhoun-Gulf-Liberty | 36 | Port St. Joe (3.4k; Blountstown 2.3k) | Mutually bordering; Apalachicola River / Gulf shore, empty country |
| Franklin-Wakulla | 46 | Carrabelle (2.6k; Apalachicola 2.3k) | Border; US-98 Forgotten Coast. Wakulla has no incorporated town above Sopchoppy 0.4k |
| Hamilton-Jefferson-Madison | 47 | Madison (2.9k; Jasper 3.6k is larger) | Madison borders both; I-10 / I-75 rural north-central |
| Dixie-Lafayette-Taylor | 47 | Perry (6.9k) | Big Bend coast, US-19/98, no interstate; Taylor borders both |
| Gilchrist-Levy | 61 | Williston (3.0k; Trenton 2.0k) | Border; Suwannee-Santa Fe country, US-27/19 |
| Baker-Bradford-Union | 72 | Macclenny (7.3k; Starke 5.8k) | Baker borders both; Raiford prison area, between Jacksonville and Gainesville (I-10/US-301) |
| DeSoto-Hardee | 59 | Arcadia (7.4k; Wauchula 4.9k) | Border; Peace River citrus/cattle country |
| Glades-Hendry-Okeechobee | 92 | Clewiston (7.3k; Okeechobee 5.2k) | Lake Okeechobee ring (Okeechobee borders Glades; Glades borders Hendry); sugar and cattle |

Exceptions to the under-50k rule: Gadsden (44k, Quincy 8.0k) alone: sits between Tallahassee (292k) and Jackson on I-10, and the Apalachicola River separates it from the west; it neighbours only Liberty, Jackson and Leon. Suwannee (43k, Live Oak 6.7k) alone: the I-10/US-90/US-129 hub, all neighbours are tiny and already grouped. Groups of 36 to 47k remain under 50k: no sensible neighbours exist (all other neighbours are large or already in a group).

## Alternative
Gadsden-Liberty (52k, Quincy) with Calhoun-Franklin-Gulf (40k), Wakulla-Jefferson (49k), Hamilton-Madison-Suwannee (75k), Okeechobee alone and Glades-Hendry (52k).
Pro: no county under 50k left alone, Okeechobee not strung out from Clewiston. Con: Liberty is tiny and mid-river; one big Big Bend gap (Madison-Suwannee) region; 51 regions.

## Map oddities (checked data only)
- Zero/null-population places are census-designated places without a population (Crawfordville, Eastpoint, Steinhatchee, Aucilla, Day, Hosford, Southeast Arcadia, Buckhead Ridge, Cypress Quarters, Taylor Creek...): for Wakulla the largest place with a population is Sopchoppy 0.4k though the county seat Crawfordville has none listed; use care when choosing stations.
- Monroe lists only Collier and Miami-Dade as neighbours (Keys connect to the mainland by US-1 into Miami-Dade; fine, no bridge needed).
- No asymmetric or isolated neighbours found. Not checked visually: shapes of the map.
