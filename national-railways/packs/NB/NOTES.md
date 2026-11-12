# New Brunswick (NB) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied exactly, with the name "Miramichi & Kent": 11 regions. The region ids are `nb-albert-westmorland`, `nb-kent-northumberland`, `nb-madawaska-victoria` and `nb-queens-sunbury`, plus the seven single counties. Since then the main agent has fixed problems 1 and 2 below: a locality now takes the 2021 population of the town of its name (Sackville 6,099, Bouctouche 2,513, Dalhousie 3,223...), and Grand Manan shows the village's 2,595. Problems 3, 5 and 6 are settled in phase 2 (Saint John moved onto land, Bathurst and Sussex as stations).

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

## The pack (phase 2)

Everything here comes from `packs/NB/raw/` (Statistics Canada, 2021 Census; Natural Resources Canada's Geographical Names for places and parks). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` or `parks.json` points rounded to 2 decimals, except where a comment in `pack.js` says why one moved. Facts added by hand (bridges, the ferry, why a place is scenic, place types) are well-known facts and are marked as such. The few I'm less sure of are marked "from memory".

### Start

`start: ["nb-albert-westmorland", "nb-saint-john", "nb-kings"]`. This is Greater Moncton, the biggest region (194,325 people), with Saint John and Kings, and each of the three touches the other two. Their stations are three different types: Moncton is metro, Saint John coast and Sussex farm. The pack test laid Saint John–Sussex (47 mi), and 7 passengers arrived in the first week.

### Main stations (11)

| Region | Station | Type, size | Why |
| --- | --- | --- | --- |
| Albert & Westmorland (194k) | Moncton (MCT) | metro 2 | The biggest region: 194k is in the "about 60,000–300,000" band, like Sherbrooke and Saguenay. Placed downtown on Main Street (46.09, -64.78); the raw point is 2 km northwest. **Airport:** Greater Moncton Roméo LeBlanc International, the busiest in the province (well known). It is the province's only airport in the game; Fredericton's and Saint John's airports are smaller, and Saskatchewan and Manitoba also list one or two |
| York (105k) | Fredericton (FRD) | metro 2 | The capital. Placed at the south edge of downtown (45.95, -66.64), 1.5 km from City Hall, kept south of the map's river line: downtown is on the south bank and the simplified line runs through it |
| Saint John (77k) | Saint John (SNJ) | coast 2 | Uptown, by King's Square (45.27, -66.06). The raw point (45.26, -66.04) is 0.5 km out in the harbour. **Port:** Port Saint John, which has a container terminal (well known). Coast rather than metro, so that Moncton–Saint John–Fredericton trains carry riders in "A type of place" |
| Kings (71k) | Sussex (SSX) | farm 1 | **An exception.** Quispamsis (18,768) is the biggest town, but it and Rothesay are Saint John's suburbs in the Kennebecasis Valley, 22 km from its station. Sussex (4,440; population centre 5,447) is the county's own town, 66 km from Saint John and 70 km from Moncton. It is the valley's dairy centre, on the Trans-Canada and the Moncton–Saint John railway (well known). Quispamsis is a town (metro 2) |
| Charlotte (26k) | St. Stephen (STS) | coast 1 | On the St. Croix estuary, across from Calais, Maine. The raw point is used; downtown, 2 km northeast, is shore water on the map |
| Queens & Sunbury (39k) | Oromocto (OMO) | farm 1 | The town of CFB Gagetown, in a region of river intervales and Grand Lake |
| Carleton (26k) | Woodstock (WSK) | farm 1 | The potato belt of the Saint John valley |
| Miramichi & Kent (77k) | Miramichi (MRM) | coast 1 | On the Miramichi estuary. The raw point is used: it sits between the old towns of Chatham and Newcastle (each 3–6 km away), on the south side of the map's river line |
| Gloucester (78k) | Bathurst (BTH) | coast 1 | **An exception.** Tracadie (16,043) is a regional municipality spread along the shore, and its population centre has only 4,528; Bathurst's has 15,985. Placed at 47.61, -65.65, 1 km south of the harbour: from the raw point at the harbour mouth (47.63, -65.63), lines to Campbellton and Caraquet crossed 0.5–2 mi of the harbour, which Quebec's gulf bay covers |
| Restigouche (31k) | Campbellton (CBT) | mountain 1 | Below Sugarloaf Mountain, with the Restigouche uplands' forest behind it (Quebec calls forest towns "mountain") |
| Madawaska & Victoria (51k) | Edmundston (EDN) | mountain 1 | The paper-mill city in the Appalachian hills. Placed downtown at the meeting of the Madawaska and the Saint John (47.37, -68.32); the raw point is 3 km northeast |

Most stations are size 1, as in Quebec, where Rivière-du-Loup (64k) and Joliette (71k) are size 1. Moncton, Fredericton and Saint John are real cities of 63,000–79,000 and are size 2.

### Towns (25: 15 towns and 10 scenic places)

That is 1.4 towns per region plus the scenic places, close to Saskatchewan (18 for 11 regions) and Manitoba (23 for 13). Every town is at least 4 miles from every other place, and every one sits inside its own region (checked).

- **Albert & Westmorland:**
  - Dieppe (metro 2; 28,114, Moncton's twin city, 4.4 mi from its station).
  - Shediac (coast; Parlee Beach and the "lobster capital", well known).
  - Sackville (farm; Mount Allison University on the Tantramar Marshes' dykelands, well known).
  - **Scenic:** Hopewell Rocks (the flowerpot rocks of the Fundy tides; the park point is shore water on the map, so it moved 1 km west) and Fundy National Park (at its park point, mountain for the Caledonia Highlands' forest).
  - Riverview (20,584) is left out: it is across the river from downtown Moncton, 3 mi from the station.
- **Saint John:** St. Martins (scenic: its sea caves and the start of the Fundy Trail Parkway, whose park point is 9 km east; well known).
- **Kings:** Quispamsis (metro 2).
- **Charlotte:**
  - Blacks Harbour (where the Grand Manan ferry leaves).
  - **Scenic:** Saint Andrews (the seaside resort, the Algonquin hotel and whale watching, well known) and Grand Manan (the island's whales and cliffs, well known).
  - Campobello (Roosevelt Campobello International Park) is left out. Its road link is the bridge to Lubec, Maine, and its only link inside Canada is a summer ferry via Deer Island, which the game can't show.
- **York:**
  - McAdam (the railway village at the Maine border with the big old CPR station, a National Historic Site; mountain for its forest).
  - Kings Landing (scenic: the living-history Loyalist village, at its park point).
- **Queens & Sunbury:**
  - Minto (coast: the old coal-mining village by Grand Lake).
  - Gagetown (farm: the village on the west bank of the Saint John that CFB Gagetown is named after).
- **Carleton:** Hartland (scenic: the world's longest covered bridge, well known).
- **Miramichi & Kent:**
  - Bouctouche (Le Pays de la Sagouine and the dune, well known).
  - Doaktown (mountain: on the Southwest Miramichi salmon river, in the forest).
  - Kouchibouguac (scenic: the national park's dunes and lagoons, at its park point).
- **Gloucester:**
  - Tracadie (at the Tracadie-Sheila population centre's point).
  - Caraquet.
  - Village Historique Acadien (scenic, farm, at its park point).
- **Restigouche:**
  - Dalhousie (the port on the Baie des Chaleurs).
  - Saint-Quentin (mountain: the town in the Restigouche uplands).
- **Madawaska & Victoria:**
  - Perth-Andover (farm: potato country).
  - Grand Falls (scenic: the falls and gorge of the Saint John, well known). Placed just east of the map's river line (47.05, -67.73), on the east bank.

Left out on purpose:
- **Magnetic Hill** is inside Moncton.
- **Mount Carleton** is deep in the woods and has no town.
- **Miscou Island** has its park point in Quebec's gulf bay, off the map's land.
- **Sugarloaf** is 3 km from Campbellton's station.

### Water

**What the map has:**
- **Rivers, as lines in `terrain.js`:** the Saint John (Edmundston to Grand Bay; the line ends 8 km before Saint John's harbour), the Miramichi (to Miramichi), the Petitcodiac (to Moncton), the upper Restigouche and the Matapédia.
- **Lakes:** Grand Lake and the Chiputneticook Lakes.
- **Shore water:** the Petitcodiac estuary at Moncton, the Miramichi estuary and bay, the Restigouche estuary and the Saint John harbour are outside the land. That makes them plain shore water: track follows the shore.
- **Quebec's "Gulf of St. Lawrence" bay** already covers the Baie des Chaleurs east of 66°W, including Bathurst harbour and the water off Caraquet and Miscou.

**Bays (1).** "The Bay of Fundy off Grand Manan" covers the open bay around the island, from the Maine coast to 66.1°W.
- Its north edge stays 5–10 km off the mainland, Campobello and Deer Island. So the Saint John–St. Stephen coast, Passamaquoddy Bay and Letete are plain shore water.
- Land inside the ring stays land.
- Grand Manan is 30 km out, so without the bay, track would just "follow the shore" to it.

Left out:
- **The Northumberland Strait** (no New Brunswick place lies across it until Prince Edward Island is in the game) and the **Bay of Fundy toward Nova Scotia** (the same). Both are for the PE and NS agents.
- **The Miramichi bay.** The 2 mi of it on Miramichi–Tracadie is cheaper as shore water than as a bay that needs the Centennial Bridge.

**Ferry: Blacks Harbour–Grand Manan (to North Head), all year (well known).** It has two points on the route, at 44.92, -66.77 and 44.84, -66.76: inside the bay, and 10 km or more from either town. Blacks Harbour–Grand Manan uses it (10 mi of bay) in both modes.

**Bridges (20).** Positions are approximate: well-known crossings, not surveyed points. A script found where tested links cross the map's rivers; most points sit within 2 miles of such a crossing. The table says which tested links use each one (in both modes).

| Bridge | Point | Use |
| --- | --- | --- |
| Gunningsville Bridge, Petitcodiac causeway | 46.08, -64.77; 46.07, -64.82 | Moncton–Riverview (well known). Moncton–Sussex uses the causeway. Moncton's other links south cross the river's estuary, which is shore water, so they need no river bridge |
| Westmorland Street Bridge, Princess Margaret Bridge | 45.96, -66.64; 45.95, -66.61 | Fredericton's two road bridges (well known). Fredericton–Miramichi, –Minto and –Doaktown use Westmorland Street. Princess Margaret serves lines southeast, such as Fredericton–Gagetown (not one of the tested links) |
| Saint John River bridge (Oromocto) | 45.87, -66.44 | Oromocto to Burton (the Burton bridge, from memory). Oromocto–Miramichi, Oromocto–Minto |
| Trans-Canada bridge (Jemseg) | 45.82, -66.15 | Where Route 2 crosses the Saint John between Oromocto and Jemseg (from memory; the exact spot is approximate). Oromocto–Sussex. It also lets Gagetown–Minto cross the south end of Grand Lake (4 mi), which is roughly the real road via Jemseg |
| Harbour Bridge (Saint John) | 45.27, -66.08 | Marks the real crossing of the river's mouth (well known). The map's river line ends at Grand Bay, so no link uses it |
| Saint John River bridge (Woodstock) | 46.14, -67.57 | Woodstock to the east bank (from memory). Fredericton–Woodstock |
| Hartland Covered Bridge | 46.30, -67.52 | The real crossing (well known). No tested link crosses within 2 miles; Hartland–Woodstock crosses the line 2.3 mi south |
| Perth-Andover bridge | 46.73, -67.72 | Between Perth and Andover (well known). Grand Falls–Perth-Andover |
| Saint John River bridge (Grand Falls) | 47.04, -67.74 | Grand Falls–Perth-Andover (with the Perth-Andover bridge) |
| Saint-Léonard–Van Buren bridge, Edmundston–Madawaska bridge | 47.16, -67.93; 47.36, -68.33 | The international bridges to Maine (well known). The straight lines from Edmundston down the valley cut across the river's southern bend, through Maine's land (which counts as land). Edmundston's four links south and east use the Edmundston bridge. At Saint-Léonard the river is a strip of shore water on the map, so Grand Falls–Edmundston needs no river bridge there |
| Centennial Bridge, Morrissy Bridge (Miramichi) | 47.02, -65.50; 46.99, -65.57 | The Miramichi at Miramichi (from memory: Centennial, Route 8/11 at Chatham; Morrissy, at Newcastle). Campbellton–Miramichi (Centennial); Edmundston–Miramichi (Morrissy) |
| J.C. Van Horne Bridge | 48.00, -66.69 | Campbellton–Pointe-à-la-Croix (well known; Quebec's notes left it for this pack). The estuary is shore water, so it only marks the real crossing |
| Confederation Bridge (New Brunswick end), Saint John–Digby ferry (Saint John side) | 46.18, -63.79; 45.19, -66.04 | Allowed by the brief: they sit off New Brunswick and count once Prince Edward Island or Nova Scotia is in the game. Neither is inside a bay yet, so they change nothing today |

The remaining river crossings take the small new-river-bridge price. Examples are the upper Miramichi near Doaktown and Blackville, the Saint John at Mactaquac and below Gagetown, and the Matapédia on Campbellton's Quebec links. I don't know the names of bridges there well enough to list them.

**Passes: none.** The terrain grid has hills (class 1) near Edmundston, Campbellton, Sussex and the Fundy highlands, but no mountains within 7 miles of any New Brunswick link. No tested link has a tunnel or a pass. In Tough, a few long lines that weren't tested (Edmundston–Tracadie, Saint-Quentin–Rimouski, Moncton–Rimouski) cross 2.5–3.5 mi of terrain that counts as mountains. These are short tunnels, well under the limit.

### How the map plays

Checked with `NR.segmentGeo` / `NR.blockedReason` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`. Two kinds of link were tested: every main station to its neighbours' main stations (Quebec's included), and every town to its 3 nearest places.

- **Main stations: 26 links.** 25 are open in both modes.
  - **Moncton–Oromocto** is open in Gentle only: the line crosses 8.5 mi of Grand Lake. The real road goes round its south end at Jemseg.
  - **Every main station reaches at least two neighbouring main stations in both modes:** MCT 4/3 (Gentle/Tough), SNJ 3, SSX 4, STS 4, FRD 5, OMO 5/4, WSK 2, MRM 6, BTH 2, CBT 7, EDN 5. Woodstock and Bathurst have only two neighbouring regions each.
  - The Quebec links are all open: Campbellton to Carleton-sur-Mer, Mont-Joli, Rimouski and Rivière-du-Loup, and Edmundston–Rivière-du-Loup. Campbellton–Carleton-sur-Mer runs 15 mi along the Restigouche shore.
- **Towns: 75 links.** 70 are open in both modes.
  - **Every town has an open link in both modes.**
  - 4 are open in Gentle only:
    - Grand Manan to Saint Andrews (7.4 mi of bay) and to St. Stephen (7.9 mi). Gentle allows a new bridge up to 8 mi.
    - Village Historique Acadien–Bonaventure (Quebec), 7.9 mi of the gulf bay.
    - In Tough, Grand Manan's only open link of its three is the ferry to Blacks Harbour, as in reality.
  - 1 is open in neither: Caraquet–Bonaventure, across the Baie des Chaleurs (10 mi).
- **Blocked on purpose:** Grand Manan to Saint John (26 mi of bay) and to St. Martins (33 mi).

### Levels (4)

| Level | Area (stations) | Goals |
| --- | --- | --- |
| Moncton & the Fundy Shore | fundy: MCT, SNJ, SSX, STS | 50 passengers; own 4 counties; 10 containers (Saint John's port) |
| Fredericton & the Saint John Valley | valley: FRD, OMO, WSK | 140 passengers; connect Saint John–Fredericton; 25 produce |
| The Miramichi & the Acadian Coast | northeast: MRM, BTH | 280 passengers; connect Moncton–Bathurst; a high-speed train |
| Restigouche & Madawaska | north: CBT, EDN | 450 passengers; connect Fredericton–Edmundston; 30 trucks |

Each level's regions touch the earlier ones:
- Queens & Sunbury touches Albert & Westmorland, Kings and Charlotte; York touches Charlotte.
- Miramichi & Kent touches Albert & Westmorland, Queens & Sunbury and York.
- Restigouche and Madawaska & Victoria touch Miramichi & Kent and Gloucester (and York and Carleton).

The passenger targets are Saskatchewan's (also 11 regions).

### Biomes

New Brunswick is about 85% forest (well known). The convention follows Quebec's.
- **forest:** Miramichi & Kent, Restigouche, Gloucester, York, Queens & Sunbury and Charlotte. These are the Acadian forest uplands, where farms are thin strips along the rivers and coasts.
- **wooded:** Albert & Westmorland (the Tantramar and Memramcook farmland under the Caledonia Highlands), Kings (the Kennebecasis dairy valley in the Fundy hills), Saint John, and Madawaska & Victoria (Grand Falls' potato fields below the Madawaska hills).
- **not listed (farmland):** Carleton, the potato belt, the province's main farmland (well known).

### For the main agent

1. **Madawaska & Victoria is still two rings** that meet north of Edmundston (phase 1, problem 4). No seam shows in the screenshots.
2. **The Saint John River line ends at Grand Bay,** 8 km short of the harbour, so Saint John's real bridges (Harbour, Reversing Falls) can't sit on it. The Harbour Bridge point only marks the crossing.
3. **The Hartland Covered Bridge point is 2.3 mi from where Hartland–Woodstock crosses the map's river.** The simplified line runs west of the real channel there. I left the bridge at its real place, so Hartland–Woodstock pays the new-bridge price.
4. **For the Prince Edward Island and Nova Scotia agents:** the Confederation Bridge and Digby ferry points above are New Brunswick's ends. The Northumberland Strait and the Bay of Fundy between Saint John and Digby are plain shore water today. "The Bay of Fundy off Grand Manan" stops at 66.1°W.
5. **For the Maine agent:** Grand Manan Channel lies inside the Grand Manan bay ring, which reaches the Maine coast at 67.2°W.

### Checks

- `node tools/check-pack.js NB`: `NB: passed (11 stations, 25 towns, 0 city maps, 0 passes, 20 bridges), 0 errors, 0 warnings`.
- `node tools/test-pack.js NB`: `PASSED: 17 passed, 0 warnings, 0 failed`. It laid Saint John–Sussex, 7 passengers arrived in the first week, and it bought Charlotte.
- **Screenshots** (arcade light, classic light, levels): all looked right.
  - The forest covers the province except Carleton's farmland.
  - The stations sit on land: Saint John on its harbour shore, Moncton by the river.
  - The Saint John River and Grand Lake are drawn.
  - The levels view shows the Moncton start with the bridge labels. Moncton's two bridge labels overlap a little.
