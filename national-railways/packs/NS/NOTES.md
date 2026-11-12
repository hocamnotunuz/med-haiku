# Nova Scotia (NS) pack notes

## Region merges (phase 1)

Populations come from `packs/NS/raw/counties.json` and `packs/NS/raw/places.json` (Statistics Canada, 2021 Census; the 18 counties add up to 969,383). Where a population centre is missing from `places.json`, the figure comes from the table `tools/make-raw.js` reads, Statistics Canada 98-10-0011, in its cached copy (`.terrain-cache/canada/st-98100011/`). Distances are straight lines between `places.json` points. Highways, ferries, the causeway and the old railway are marked "well known". A script checked that each group is joined through `neighbors` and listed the resulting 12 regions and their neighbours.

Nova Scotia has 18 counties, and 14 of them are under 50,000. The list below gives 12 regions. Five groups follow the rule. Three counties under 50,000 stay alone (Hants, Pictou and Cumberland), and each of them has a real town.

### Recommended (18 → 12 regions)

```
merge: [["Annapolis", "Digby"], ["Lunenburg", "Queens"], ["Shelburne", "Yarmouth"], ["Antigonish", "Guysborough"], ["Inverness", "Richmond", "Victoria"]]
names: { "Inverness & Richmond & Victoria": "Cabot Trail & Bras d'Or" }   // optional: "Shelburne & Yarmouth": "Yarmouth & Shelburne"
bridges: none to add
```

| # | Group | Why | Main station | Population |
| --- | --- | --- | --- | --- |
| 1 | Annapolis + Digby | The Annapolis Basin and the lower valley, on Highway 101 and the old Dominion Atlantic line (well known). Digby is 23 km from Annapolis Royal and holds the Saint John ferry. Annapolis's biggest town is Middleton (1,873) | Digby (2,001), the biggest town in the group and the ferry port | 38,314 |
| 2 | Lunenburg + Queens | The South Shore along Highway 103 (well known). Liverpool (population centre 2,546) is 41 km from Bridgewater. Lunenburg (48,599) is just under the line | Bridgewater (8,790) | 59,100 |
| 3 | Shelburne + Yarmouth | The southern tip on Highway 103: Yarmouth, Barrington, Cape Sable Island and Shelburne. Shelburne town is 64 km from Yarmouth | Yarmouth (6,829; population centre 7,848) | 38,651 |
| 4 | Antigonish + Guysborough | Antigonish is Guysborough's service town. Highway 7 runs to Sherbrooke (53 km) and Highway 104/16 to Guysborough and Canso (well known). The Canso Causeway's mainland end falls in this group either way (see problem 6) | Antigonish (4,656; population centre 5,620) | 27,502 |
| 5 | Inverness + Richmond + Victoria | Cape Breton Island outside the Cape Breton Regional Municipality. Inverness borders both of the others, and all three surround the Bras d'Or Lake. The Cabot Trail runs through Inverness and Victoria (well known). Richmond (8,914) and Victoria (7,441) are too small to stand alone. The joined name is clumsy and repeats NB's "Victoria", so it gets a short name | Port Hawkesbury (3,210; population centre 2,998). It is the biggest town and sits at the causeway, 49 km from Antigonish | 33,701 |
| 6 | Hants alone | An exception. At 45,140 it is 90% of the line. Its only small neighbour is Lunenburg, across the South Mountain with no corridor between them. Colchester and Kings are over 50k | Windsor (population centre 5,514; merged into West Hants in 2020, well known), at the Avon crossing 58 km from Halifax. Enfield–Lantz (population centre 6,583) is bigger, but it is a Highway 102 commuter belt at the Halifax line | 45,140 |
| 7 | Pictou alone | An exception. At 43,657 it has five towns and the fourth-biggest population centre in the data, New Glasgow (19,316). It also has the Caribou–Wood Islands ferry. Pairing it with Antigonish would leave Guysborough without a partner | New Glasgow (9,471; population centre 19,316) | 43,657 |
| 8 | Cumberland alone | An exception. Its only Nova Scotia neighbour is Colchester (51k). Amherst is the land gate to New Brunswick at the Chignecto isthmus, on the Trans-Canada and the VIA Ocean line (well known) | Amherst (9,404; population centre 9,548) | 30,538 |
| 9–12 | Halifax, Cape Breton, Kings, Colchester | Each is over 50k | Halifax (439,819; population centre 348,634); Sydney (see problem 1); Kentville (6,630; population centre 14,905); Truro (12,954; population centre 23,583) | 440,072; 98,318; 62,914; 51,476 |

Main stations are spaced well: Halifax–Windsor 58 km, Windsor–Kentville 30 km, Kentville–Digby 112 km, Digby–Yarmouth 91 km, Yarmouth–Bridgewater 141 km, Truro–Amherst 89 km, Truro–New Glasgow 55 km, New Glasgow–Antigonish 51 km, Antigonish–Port Hawkesbury 49 km and Port Hawkesbury–Sydney 107 km.

### Alternative

The "Tri-County" layout: `[["Digby", "Shelburne", "Yarmouth"], ["Annapolis", "Kings"], ["Lunenburg", "Queens"], ...]`, which gives 11 regions. Pro: it uses two well-known real regions, the Annapolis Valley (84,166, station Kentville) and the Yarmouth-led Tri-County (55,713). Con: the Digby ferry lands 91 km from its station, Kings is over the line, and the thin southwest loses a station.

Also considered and set aside:
- Antigonish + Guysborough + Pictou (71,159, 11 regions). New Glasgow would be 94 km from the causeway (Aulds Cove).
- Lunenburg alone, with Queens + Shelburne, Digby + Yarmouth and Annapolis alone (13 regions). Annapolis has no town over 1,900.

### Problems found in the map and data

1. **Sydney has no population.** Statistics Canada names its population centre "Cape Breton - Sydney" (30,960 in 98-10-0011), so the name match misses it. "Kingston - Greenwood" (7,118, Kings) and "Enfield - Lantz" (6,583) are missed the same way. Glace Bay (16,915) is the biggest place `places.json` gives for Cape Breton. Sydney is still the station: it is the biggest built-up area and the regional municipality's centre, with the harbour and the airport (well known). North Sydney's ferry is 9 km away. `make-raw.js` could split " - " names.
2. **One population centre is copied onto several places.** Centreville (1,159) appears in Cape Breton, Digby, Inverness, Kings and Shelburne, and Brookside (1,439) in Colchester and Halifax. Only one of each is real; I would guess the Kings Centreville, from memory.
3. **Some populations are wrong.** Chester "village" shows 10,693, which is the District of Chester; the village is population centre 1,371. The "Antigonish" and "Pictou" county-municipality entries copy their towns' 4,656 and 3,107. The "Inverness" county-municipality entry shows the village's population centre (1,228). Clare, Argyle, Barrington, Guysborough (4,585) and St. Mary's are district municipalities, not towns.
4. **Off-map coastal places go to the wrong county.** `nearestRegion` picks the nearest *label*, not the nearest outline. As a result:
   - Halifax's Peggys Cove, Tantallon, Terence Bay, Prospect, West Dover and Rockingham, plus the Peggys Cove Preservation Area, Africville and D'Anville's Encampment, are listed in Hants.
   - Point Tupper (Richmond, by the causeway) is listed in Guysborough.
   - Whitehead (Guysborough) and Iona and Grand Narrows (Victoria side of the Barra Strait) are listed in Richmond.
   - The Sable Island park (Halifax) and the Canso Islands site (Guysborough) are listed in Richmond.

   Phase 2 must check each town's region. Peggys Cove is an obvious scenic place for Halifax.
5. **The coarse coast puts some places in the water.** Downtown Dartmouth, Eastern Passage, Tantallon, Peggys Cove and Arichat all fall in the water. Phase 2 will need to nudge them onto land.
6. **The causeway link hangs on one point.** Inverness and Guysborough share a single vertex (-61.419, 45.645), and the Strait of Canso is water on either side of it. Aulds Cove, the causeway's mainland end, falls inside Antigonish on the map. With Antigonish and Guysborough merged, this doesn't matter. If the link were ever lost, `bridges: [["Inverness", "Guysborough"]]` (the Canso Causeway, well known) would restore it.
7. **Small, harmless leftovers.** The land outline has two zero-area rings, at (-65.81, 43.63) and (-65.50, 43.50). Sable Island is not drawn. Victoria's Washabuck/Iona peninsula is a separate ring, Boularderie Island is split between Victoria and Cape Breton, and Long Island (Digby), Cape Sable Island (Shelburne) and Isle Madame (Richmond) are rings of their own counties. All of these are harmless.
8. **The neighbours look right otherwise.** Cumberland touches only Colchester and New Brunswick, and nothing crosses the Minas Basin. For later, the seasonal Yarmouth–Bar Harbor ferry (well known) could be `bridges: [["Yarmouth", "ME:Hancock"]]` once Maine is in.
