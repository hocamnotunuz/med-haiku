# New Brunswick (NB) pack notes

## Region merges (phase 1)

Populations come from `packs/NB/raw/counties.json` and `packs/NB/raw/places.json` (Statistics Canada, 2021 Census; the 15 counties add up to 775,610). Distances are straight lines between `places.json` points. Highways, bridges and ferries are marked "well known". A script checked that each group borders itself through `neighbors` and printed the resulting 11 regions and their neighbours. None of the groups depends on a bridge.

New Brunswick has 15 counties. Ten are under 50,000. The automatic rule would give about 9 regions, but it would pair Albert with Kings (splitting Greater Moncton) and join Victoria, Carleton and Restigouche across 200 km of forest. This list keeps 11 regions: three small counties stay alone, and each one has a real town and a border crossing.

### Recommended (15 → 11 regions)

```
merge: [["Albert", "Westmorland"], ["Kent", "Northumberland"], ["Madawaska", "Victoria"], ["Queens", "Sunbury"]]
names: { "Kent & Northumberland": "Miramichi & Kent" }   // optional
bridges: none to add
```

| # | Group | Why | Main station | Population |
| --- | --- | --- | --- | --- |
| 1 | Albert + Westmorland | Greater Moncton. Riverview (20,584, two-thirds of Albert) is 5 km from Moncton, across the Petitcodiac (well known). Albert's other neighbours, Kings and Saint John, are also over 50k. Fundy National Park (Alma) and Hopewell Rocks are scenic places for phase 2 | Moncton (79,470; population centre 119,785) | 194,325 |
| 2 | Kent + Northumberland | The Acadian and Miramichi coast on Route 11 (Shediac, Bouctouche, Richibucto, Kouchibouguac, Miramichi; well known). Richibucto is 58 km from Miramichi. Bouctouche is 41 km from Moncton, but Westmorland is already the biggest region. Kent has no populated town in the data (problem 1) | Miramichi (17,692) | 77,174 |
| 3 | Madawaska + Victoria | The upper Saint John valley on the Trans-Canada (Route 2; well known). Grand Falls (5,220, Victoria's main town) is 56 km from Edmundston and 101 km from Woodstock | Edmundston (16,437) | 50,915 |
| 4 | Queens + Sunbury | The lower Saint John River and Grand Lake: Oromocto, Gagetown, Minto, Chipman, CFB Gagetown (well known). Gagetown is 25 km from Oromocto and Chipman 59 km. Charlotte, the only other small neighbour, faces the Fundy shore, not the river | Oromocto (9,045) | 38,862 |
| 5 | Restigouche alone | An exception. Campbellton has the bridge to Quebec and a VIA Ocean stop (well known). Its small neighbours lie past 75–140 km of forest (Saint-Quentin–Grand Falls is 57 km, Campbellton–Edmundston 139 km) | Campbellton (7,047; population centre 8,833) | 30,700 |
| 6 | Carleton alone | An exception. Woodstock is a real town and the crossing to Houlton, Maine, which comes later (well known). It is also the potato and covered-bridge country of Hartland and Florenceville. Its neighbours are Victoria (group 3) and York (105k) | Woodstock (5,553) | 26,360 |
| 7 | Charlotte alone | An exception: the Fundy Isles (Grand Manan, Deer Island, Campobello), St. Andrews, and the St. Stephen–Calais crossing to Maine (well known). Its only corridor (Route 1) runs to Saint John, 99 km away | St. Stephen (4,510) | 26,015 |
| 8–11 | York, Gloucester, Saint John, Kings | Each over 50k | Fredericton (63,116); Bathurst (see problem 5); Saint John (69,895); Quispamsis (18,768) by the rule | 105,261; 78,256; 76,558; 71,184 |

The joined names read fine, so the one name is optional: "Miramichi & Kent" is what people call the area. Ontario also has a Northumberland County.

No bridges or ferries need adding. Grand Manan (from Blacks Harbour), Deer Island (from Letete) and Campobello all stay inside Charlotte, and Lamèque and Miscou stay inside Gloucester; all of these are already rings of their county. Campobello's road bridge goes to Lubec, Maine.

### Alternative

`["Carleton", "Victoria"]` with Madawaska alone (Carleton + Victoria = 44,672; Madawaska = 32,603). Pro: the populations are more even, and the county left alone is the stronger one (Edmundston is a city of 16,437). Con: it puts Grand Falls with Woodstock (101 km) instead of Edmundston (56 km). A three-county upper valley (Madawaska + Victoria + Carleton, 77,275, 10 regions) is also possible. It would stretch 146 km from Edmundston to Woodstock.

### Problems found in the map and data

1. **Most towns have no population.** Only 52 of the 2,291 places have one. GeoNames uses the municipalities created by New Brunswick's 2023 reform (Beausoleil, Grand-Bouctouche, Tantramar, Beaurivage and others), which the 2021 Census doesn't have. The old towns are listed as localities with `pop: null`: Bouctouche, Richibucto, Rexton, Sackville, Dalhousie, Beresford, Lamèque, Nackawic, Florenceville-Bristol, Perth-Andover, Plaster Rock, Saint-Léonard, Minto, Gagetown, St. George, Blacks Harbour, Petitcodiac, Rogersville and Cap-Pelé. No place in Kent has a population. Phase 2 will need these for its towns, so `tools/make-raw.js` might match localities to the 2021 town and village names.
2. **Grand Manan village shows 139.** This looks like the parish remainder. From memory, the village has about 2,400 people.
3. **The Saint John city point is outside the map.** It sits 0.5 km off its county's outline, in the harbour, where the coast is coarse. Phase 2 needs to nudge the station inland. Campobello Island and Heron Bay/Baie-des-Hérons are also just offshore.
4. **Madawaska is drawn as two rings.** They meet along a line from (−68.18, 47.73) south to near Edmundston, and their points differ slightly there (−68.24, 47.47 and −68.23, 47.46). Look for a hairline seam. Kent also has a detached ring at Cocagne/Grande-Digue, which is joined to the rest by land in reality. Both cases are harmless, since each piece stays in its own region.
5. **Gloucester's station.** Tracadie (16,043) is bigger than Bathurst (12,157) as a municipality, but it is a spread-out regional municipality: the Tracadie-Sheila population centre has 4,528, Bathurst's has 15,985. Bathurst should be the station, written down as an exception.
6. **Kings' biggest town is a suburb.** Quispamsis is 22 km from Saint John. Sussex (4,440; population centre 5,447) is 66 km away and would spread the stations better. This is a phase-2 exception to consider.
7. **The neighbours look right.** No place falls inside the wrong county. Nova Scotia (Cumberland, at the Chignecto isthmus) and Maine are missing only because they aren't built yet.
