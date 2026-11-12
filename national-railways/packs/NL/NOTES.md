# Newfoundland and Labrador (NL) pack notes

## Region merges (phase 1)

Populations come from `packs/NL/raw/counties.json` and `packs/NL/raw/places.json` (Statistics Canada, 2021 Census). The 11 divisions add up to 510,550. Where `places.json` has no figure, the number comes from the tables `tools/make-raw.js` reads, in their cached copies (`.terrain-cache/canada/st-98100002/` for municipalities, `st-98100011/` for population centres). Distances are straight lines between `places.json` points. Highways, ferries and the railway are marked "well known". A script checked each group's shared border in `map.js`.

Division 1 (St. John's, 271,878) is the only one over 50,000. All of the others are small, so each one joins a neighbour along a real road. There are no exceptions.

### Recommended (11 → 6 regions)

```
merge: [["Division No. 2", "Division No. 7"], ["Division No. 3", "Division No. 4"], ["Division No. 5", "Division No. 9"], ["Division No. 6", "Division No. 8"], ["Division No. 10", "Division No. 11"]]
bridges: none to add (the four already listed cover the Argentia, Port aux Basques and St. Barbe ferries)
names: none. The tool names numbered divisions after their biggest town and ignores `names` for them (build-map.js, "Region names and ids").
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 1 alone | Over 50k: the Avalon | St. John's (110,525; population centre 185,565) | 271,878 |
| 2 + 7 | The Eastern region on the Trans-Canada. The Burin Peninsula Highway (Route 210) leaves the TCH at Goobies, next to the D1/D2/D7 corner, and Route 230 runs from Clarenville to Bonavista (well known). The shared border is 87 km | Clarenville (6,704). Marystown (5,204) is 142 km away | 52,436 |
| 3 + 4 | The southwest: the TCH from the Port aux Basques ferry up the Codroy Valley to Bay St. George (well known). The shared border is 166 km | Stephenville (6,540; population centre 7,344), which is also the name the tool gives. Phase 2 could pick Channel-Port aux Basques (3,547), the ferry port, instead: it is 115 km further on and 173 km from Corner Brook, where Stephenville is only 61 km | 33,173 |
| 5 + 9 | Corner Brook and Deer Lake with the Northern Peninsula on the Viking Trail (Route 430), which runs from Deer Lake through Gros Morne to St. Anthony (well known). The shared border is 264 km | Corner Brook (19,333) | 55,129 |
| 6 + 8 | Central: the Exploits valley, Gander and Notre Dame Bay (Lewisporte is 55 km from Grand Falls-Windsor). It also fixes a split, because on the map Division 8 is two pieces that Division 6 separates at Botwood | Grand Falls-Windsor (13,853) | 71,279 |
| 10 + 11 | Labrador. Nunatsiavut (2,323) has no road and only one other land neighbour (Nord-du-Québec) | Happy Valley-Goose Bay (8,040 in the 98-10-0002 table; see problem 1) | 26,655 |

**Labrador West.** Labrador City (7,412) and Wabush (1,964) are 435 km from Happy Valley-Goose Bay. Together they are the biggest population centre in Labrador (9,011). I would keep the station at Happy Valley-Goose Bay for three reasons:
- It is the name the tool gives.
- It sits in the middle, 310 km from L'Anse-au-Clair, where the St. Barbe ferry and the island side come in.
- It is the region's service centre (well known).

Phase 2 should add Labrador City as a `towns` entry and note its links to Quebec: the QNS&L railway from Sept-Îles and Route 389 (both well known). Putting the station at Labrador City instead would favour the Quebec side, but the ferry side would then be 692 km away.

### Alternative (7 regions)

Keep Division 5 (Corner Brook, 40,396) and Division 9 (Northern Peninsula, 14,733) apart.
- Pro: the island's second city gets its own station. Gros Morne, L'Anse aux Meadows and the St. Barbe ferry get one too.
- Con: these are two exceptions, and Division 9 is only 30% of the line, with St. Anthony (2,180) as its station.

Also considered and set aside:
- `[3, 4, 5]` with Division 9 alone. It gives 6 regions and the whole TCH west coast in one region, but it still leaves a 15k exception.
- `[9, 10, 11]` across the Strait of Belle Isle. The tool refuses it: merges count only land borders, and the bridges are added afterwards.

### Problems found in the map and data

1. **Happy Valley-Goose Bay has no population in `places.json`.** The Geographical Names spelling "Happy Valley - Goose Bay" misses Statistics Canada's "Happy Valley-Goose Bay" (municipality 8,040, population centre 6,996). Cartwright ("Cartwright, Labrador", 439), Trinity ("Trinity (Trinity Bay)", 76), Woody Point (244), Rose Blanche-Harbour Le Cou (344), McIver's (575) and both Seal Coves are missed the same way.
2. **Gander is in Division 6**, not 8: its census subdivision code is 1006009. Division 8's towns are Lewisporte, Springdale, Twillingate, Fogo Island and Baie Verte.
3. **Division 8 is two pieces.** The pieces are Lewisporte with Gander Bay, and Springdale with Baie Verte. Division 6 reaches the coast between them at Botwood and Norris Arm, and the data puts both of those towns in Division 6, so the split looks real. The 6 + 8 merge removes it.
4. **Division 11 is three pieces:** the Nain and Torngat block, the Hopedale and Makkovik block, and Rigolet. Division 10 land separates them, and Division 10 has a small patch at Voisey's Bay inside Division 11. All of this disappears in the 10 + 11 merge.
5. **Division 3 is cut oddly.** It runs 340 km along a south coast with no coastal road. Its west end (Port aux Basques and Burgeo, by Route 480) looks to Stephenville. Its east end (Bay d'Espoir, Harbour Breton and Conne River) looks to Grand Falls-Windsor by Route 360 (well known). Its borders with Division 2 (Fortune Bay) and Division 7 (79 km, interior) have no roads, but they are harmless.
6. **Islands.** Fogo Island, Bell Island, New World Island and Twillingate, Random Island, Merasheen, Groais and Belle Isle are all drawn. The Change Islands and Ramea are under the tool's 25 km² cut, so their towns fall in water. Rigolet, Argentia (the ferry terminal) and Codroy also fall in the sea on the coarse coast. Phase 2 must nudge these onto land.
7. **The neighbours are right otherwise.** No place sits inside the wrong region: every place on land falls in its listed division, and the 345 that fall in the water have their listed division as the nearest outline. For later, the Fortune–Saint-Pierre ferry goes to France, which is not in the game.
