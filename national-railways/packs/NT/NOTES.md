# Northwest Territories (NT) pack notes

## Region merges (phase 1)

**Sources.** Populations come from `packs/NT/raw/counties.json` and `packs/NT/raw/places.json` (Statistics Canada, 2021 Census). The six divisions add up to 41,070. Only 6 places in `places.json` have a population, so the other community figures come from the table `tools/make-raw.js` reads, in its cached copy (`.terrain-cache/canada/st-98100002/98100002.csv`, 98-10-0002). Its subdivision totals match `counties.json` for every division. Distances are straight lines between `places.json` points. Borders and enclaves were checked with a script against `map.js`. Highways, winter roads, ferries and the bridge are marked "well known".

The owner wants a few huge regions. Every division is under 50,000, so the review goes by geography and travel. Two divisions are reached only through a neighbour: Region 3 (Tłı̨chǫ) and Region 2 (Sahtu). They merge. The four divisions with their own main town and road stay apart: Yellowknife, Hay River, Inuvik and Fort Simpson.

### Recommended (6 → 4 regions)

```
merge: [["Region 3", "Region 6"], ["Region 2", "Region 4"]]
bridges: none
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 3 + 6 | Region 3 is an enclave. All 1,205 km of its border is with Region 6, which is its only neighbour. It has no town of its own on a through road: Behchokǫ̀ (1,746) is on Highway 3, 95 km from Yellowknife, and Highway 3 is Yellowknife's only road south (well known). | Yellowknife (20,340) | 23,455 |
| 2 + 4 | Sahtu has no all-season road. Its only road is the Mackenzie Valley winter road from Wrigley (Region 4) to Tulita, Norman Wells and Fort Good Hope (well known). The Mackenzie Valley Highway is planned along the same line as the extension of Highway 1. The two divisions share a 577 km border. | Fort Simpson (1,100) | 5,131 |
| 5 alone | The South Slave, on Highways 1, 2, 5 and 6 (well known). It is the end of the railway from Alberta (well known). | Hay River (3,169) | 6,279 |
| 1 alone | The Beaufort Delta and the Arctic islands. Its road is the Dempster from Yukon, which continues as the Inuvik–Tuktoyaktuk Highway (well known). | Inuvik (3,137) | 6,205 |

The tool should name the merged regions "Yellowknife area (Region 3 & 6)" and "Fort Simpson area (Region 2 & 4)". Fort Simpson (1,100) is bigger than Norman Wells (673).

**Bridges.** None are needed, because every crossing lies inside one region:
- The Deh Cho Bridge: both ends are in Region 4.
- The Peel River and Tsiigehtchic ferries on the Dempster: Region 1.
- The Liard and N'Dulee ferries near Fort Simpson: Region 4.

There is no ferry across Great Slave Lake, and Regions 5 and 6 already share a border.

### Alternative (5 regions)

Keep Region 2 (Sahtu) alone, with Norman Wells (673) as its station.
- Pro: Norman Wells sits halfway along the Mackenzie: it is 466 km from Fort Simpson and 456 km from Inuvik. Great Bear Lake would get its own region.
- Con: the region would have 2,259 people and only a winter road.

Also considered and set aside: Region 2 + Region 1. No road links Sahtu and Inuvik. Fort Good Hope is 259 km from Tsiigehtchic.

### Stations by division

| Division | Station | Population |
| --- | --- | --- |
| Region 1 | Inuvik | 3,137 |
| Region 2 | Norman Wells | 673 |
| Region 3 | Behchokǫ̀ | 1,746 |
| Region 4 | Fort Simpson | 1,100 |
| Region 5 | Hay River | 3,169 |
| Region 6 | Yellowknife | 20,340 |

Other communities to use as towns. None of them has a population in `places.json`; the figures are from 98-10-0002.
- **Region 1:** Tuktoyaktuk 937, Fort McPherson 647, Aklavik 536, Ulukhaktok 408, Paulatuk 298, Tsiigehtchic 138, Sachs Harbour 104.
- **Region 2:** Délı̨nę 573, Fort Good Hope 507, Tulita 396, Colville Lake 110.
- **Region 3:** Whatì 543, Gamètì 252, Wekweètì 109.
- **Region 4:** Fort Providence 618, Fort Liard 468, Wrigley 117.
- **Region 5:** Fort Smith 2,248 (this one is in `places.json`), Fort Resolution 412, Łutselk'e 333, Enterprise 75.
- **Region 6:** Dettah 192.

### Problems found in the map and data

1. **Region 6's hole is Region 3.** The hole has Region 3's area and outline. It is the census geography's own enclave: Region 3, Unorganized lies inside Region 6, Unorganized. On the map, strips of Region 6 keep Region 3 26 km from Region 2 and 63 km from Region 4. The 3 + 6 merge removes it.
2. **Region 1's hole is a lake.** It is about 11 km² at 68.92°N, 132.62°W. The `land` array has the same hole, so it is water, not an enclave. It is harmless.
3. **The islands are drawn and belong to Region 1, as they should.** The drawn pieces are:
   - all of Banks Island (Sachs Harbour);
   - the west of Victoria Island (Ulukhaktok), cut at about 110°W;
   - Prince Patrick, Eglinton, Emerald and Brock islands;
   - the western parts of Melville, Mackenzie King and Borden islands.

   No bridge or ferry reaches them, so they are not a problem.
4. **Many communities are missing from `places.json` or have no population.** `make-raw.js` gives a municipality's population only to cities, towns and villages. NT hamlets and charter communities are "community" or "locality" in Geographical Names.
   - These are missing altogether: Tuktoyaktuk, Paulatuk, Sachs Harbour, Ulukhaktok, Enterprise, Fort McPherson, Tsiigehtchic, Fort Providence, Fort Liard, Fort Resolution and Whatì.
   - Some of these appear only as band names: Teetl'it Gwich'in (Fort McPherson), Gwichya Gwich'in (Tsiigehtchic), Deh Gáh Got'ie (Fort Providence), Acho Dene Koe (Fort Liard), Deninu K'ue (Fort Resolution) and Wha Ti (Whatì).
   - Behchokǫ̀ appears as Rae, Edzo and Dog Rib Rae.
   - Spelling mismatches lose some figures: Délı̨nę against StatCan's "Déline", and Łutselk'e against "Lutselk'e".
5. **Some points fall in water.**
   - At sea, on the coarse coast: Paulatuk (at its usual coordinates) and Mould Bay.
   - Flagged `offMap`: Kittigazuit, Whitefish Station and Fort Collinson.
   - Inside lake outlines in `terrain.js`: Rae, Whatì, Gamètì, Délı̨nę (Great Bear Lake) and Łutselk'e (Great Slave Lake).

   Phase 2 must nudge any of these that are used onto land. The four main stations are on land.
6. **The neighbours are right.** All the links into Yukon, British Columbia, Alberta and Saskatchewan are real borders:
   - Region 4 to Yukon: the Nahanni Range Road to Tungsten (well known).
   - Region 2 to Yukon: the Canol Road.

   Nunavut is missing for now. It borders Regions 1, 5 and 6.

   The Mackenzie Highway enters at the Region 4/5 corner on the 60th parallel (116.98°W). Alexandra Falls is in Region 4 and Enterprise in Region 5. This is fine.
