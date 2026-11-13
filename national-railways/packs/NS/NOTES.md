# Nova Scotia (NS) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied, with the names "Cabot Trail & Bras d'Or" and "Yarmouth & Shelburne": 12 regions. The merged region ids are:
- `ns-annapolis-digby`
- `ns-lunenburg-queens`
- `ns-shelburne-yarmouth`
- `ns-antigonish-guysborough`
- `ns-inverness-richmond-victoria`

The other seven counties stay single regions.

The main agent has since fixed problems 1–4 below in `make-raw.js`:
- Sydney now has 30,960; Kingston, Greenwood, Enfield and Lantz take their joint population centres.
- Chester village shows 1,371.
- The county-municipality entries no longer copy their towns' numbers, and the five Centrevilles get no population.
- Off-map places now go to the region with the nearest outline.

Problem 5 is settled in phase 2: the stations are placed on land.

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

## The pack (phase 2)

Everything here comes from `packs/NS/raw/` (Statistics Canada, 2021 Census; Natural Resources Canada's Geographical Names for places and parks). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` or `parks.json` points rounded to 2 decimals, except where a comment in `pack.js` says why one moved. Facts added by hand (bridges, the causeway, ferries, why a place is scenic, place types) are well-known facts and are marked as such. The few I'm less sure of are marked "from memory".

### Start

`start: ["ns-halifax", "ns-hants", "ns-lunenburg-queens"]`: Halifax, Hants and Lunenburg & Queens, each touching the other two. Their stations are three different types: Halifax metro, Windsor farm and Bridgewater coast.
- Colchester (Truro) is the other neighbour of both Halifax and Hants. It would give only metro and farm.
- The pack test laid Halifax–Windsor (42 mi), and 6 passengers arrived in the first week.

### Main stations (12)

| Region | Station | Type, size | Why |
| --- | --- | --- | --- |
| Halifax (440k) | Halifax (HFX) | metro 3 | **Placement:** downtown, by City Hall above the harbour (44.65, -63.58), on the map's land. The raw point (44.87, -63.72) is the middle of the regional municipality, 25 km northwest in the woods. **Size:** 440k is size 3 by the guide (350,000–900,000), like Windsor, Ontario (423k). **Port:** the Port of Halifax, a container port (well known). **Airport:** Halifax Stanfield International, the province's international airport (well known) |
| Hants (45k) | Windsor (WIN) | farm 1 | **An exception.** Hants has no town: East Hants (22,892) and West Hants (19,509) are rural municipalities. Enfield–Lantz has the bigger population centre (6,583 to Windsor's 5,514), but it is Halifax's commuter belt on Highway 102, by the airport and 20 mi from Halifax (well known); it is a town here. Windsor is the Avon River town on the Halifax–Valley road, among the Avon dykelands (well known) |
| Lunenburg & Queens (59k) | Bridgewater (BWT) | coast 1 | The South Shore's biggest town (8,790), on the LaHave River's estuary |
| Colchester (51k) | Truro (TRU) | farm 1 | The "Hub Town", where the railways to Halifax, Moncton and Cape Breton meet, with the agricultural campus at Bible Hill (well known). Population centre 23,583 |
| Kings (63k) | Kentville (KTV) | farm 1 | The Annapolis Valley's town (population centre 14,905), among the apple orchards (well known) |
| Annapolis & Digby (38k) | Digby (DIG) | coast 1 | The biggest town (2,001). It is the scallop port and has the year-round ferry to Saint John (well known) |
| Yarmouth & Shelburne (39k) | Yarmouth (YAR) | coast 1 | The fishing port at the southwest tip (6,829; population centre 7,848) |
| Cumberland (31k) | Amherst (AMH) | farm 1 | On the Chignecto isthmus by the Amherst and Tantramar marshes (well known), the land gate to New Brunswick |
| Pictou (44k) | New Glasgow (NGL) | metro 1 | The middle of Pictou County's industrial towns (population centre 19,316). Stellarton, Westville and Trenton are within 3 mi. Metro like Manitoba's Thompson (47k, metro 1) |
| Antigonish & Guysborough (28k) | Antigonish (ANT) | farm 1 | St. Francis Xavier University's town (well known) in a farming county |
| Cabot Trail & Bras d'Or (34k) | Port Hawkesbury (PHB) | coast 1 | The biggest town (3,210), at the Cape Breton end of the Canso Causeway. The deep-water port is at Point Tupper (well known) |
| Cape Breton (98k) | Sydney (SYD) | metro 2 | Downtown on the harbour's south arm, 0.5 km east of the raw point. Population centre "Cape Breton - Sydney", 30,960 |

Types alternate along the main lines, so most neighbouring stations exchange riders in "A type of place":
- **Metro–farm:** Halifax–Truro, Halifax–Windsor, Truro–New Glasgow, New Glasgow–Antigonish.
- **Farm–coast:** Antigonish–Port Hawkesbury, Kentville–Digby.
- **Coast–metro:** Port Hawkesbury–Sydney.

Some neighbours share a type. These are filled by towns of other types:
- the South Shore and southwest coast (Bridgewater, Digby and Yarmouth are all coast);
- Windsor–Kentville and Truro–Amherst (all farm).

Halifax at size 3 is the only station over 2. Sydney (98k) is size 2, like New Brunswick's Saint John (77k).

### Towns (30: 19 towns and 11 scenic places)

That is 1.6 towns per region plus the scenic places, close to New Brunswick (15 + 10 for 11 regions). Every place is at least 4 miles from every other place. Every one sits inside its own region and on the map's land; the checker gives 0 warnings.

- **Halifax:**
  - Bedford (metro 2): the suburb at the head of Bedford Basin, 7 mi from the station. There is no population for it in the data, since it is part of the Halifax population centre; size 2 is a judgment, like New Brunswick's Dieppe.
  - Sheet Harbour (coast): the Eastern Shore's village and port.
  - **Scenic:** Peggys Cove (the lighthouse on the granite shore, well known). Its point is shore water on the map, so it moved 1 km north (44.51, -63.91).
  - **Dartmouth is left out.** Its downtown is 1 mi from the Halifax station across the harbour, and both its raw point and its real downtown are in the harbour on the coarse coast.
- **Hants:**
  - Enfield (metro 1; population centre Enfield–Lantz, 6,583): the commuter belt by the airport.
  - Hantsport (coast; population centre 1,542): the small port on the Avon estuary.
- **Kings:**
  - Greenwood (farm; population centre Kingston–Greenwood, 7,118): CFB Greenwood, the air force base (well known).
  - **Scenic:** Grand-Pré (farm): the Acadian dykelands, a UNESCO World Heritage landscape (well known; National Historic Site in `parks.json`).
  - **Wolfville (5,057) is left out:** it is 2.6 mi from Grand-Pré. Acadia University is there.
- **Annapolis & Digby:**
  - Church Point (coast): Université Sainte-Anne on the Acadian French Shore of Clare (well known). It moved 0.5 mi inland onto the map's land.
  - **Scenic:** Annapolis Royal (farm): Fort Anne and Port-Royal, both National Historic Sites in `parks.json`.
  - **Scenic:** Kejimkujik (mountain, as Quebec and New Brunswick type forest places): the national park, at its park point.
  - **Middleton (1,873) is left out:** it is 6.5 mi from Greenwood.
- **Yarmouth & Shelburne:**
  - Shelburne (coast): the Loyalist town (1,644; well known).
  - Barrington (coast): the lobster ports of Barrington and Cape Sable Island (municipality 6,523; well known).
- **Lunenburg & Queens:**
  - Liverpool (coast; population centre 2,546): at the mouth of the Mersey River.
  - Chester (coast; population centre 1,371): on Mahone Bay.
  - **Scenic:** Lunenburg: the UNESCO Old Town and the Bluenose's home port (well known).
- **Colchester:** Tatamagouche (coast): the village on the Northumberland Strait.
- **Cumberland:**
  - Springhill (mountain; population centre 2,654): the coal-mining town of the mine disasters, in the Cobequid hills (well known). Quebec calls mining towns "mountain".
  - Parrsboro (coast): on the Minas Basin.
  - **Scenic:** Joggins (coast): the UNESCO fossil cliffs, at the park point.
- **Pictou:** Pictou (coast): where the Hector landed its Scottish settlers in 1773 (well known), 3.5 mi from the Caribou ferry terminal. Stellarton, Westville and Trenton are all within 4 mi of New Glasgow.
- **Antigonish & Guysborough:**
  - Canso (coast): the old fishing port at the mainland's eastern tip. It moved 0.5 mi inland.
  - **Scenic:** Sherbrooke Village (farm): the living-history village on the St. Mary's River (well known).
- **Cabot Trail & Bras d'Or:**
  - Chéticamp (coast): the Acadian village on the Cabot Trail at the park's west gate (well known).
  - Inverness (coast; population centre 1,228): the old coal town with the long beach.
  - St. Peter's (coast): at the St. Peters Canal (National Historic Site in `parks.json`).
  - **Scenic:** Baddeck (coast): the Alexander Graham Bell National Historic Site on the Bras d'Or, where the Cabot Trail begins (well known).
  - **Scenic:** Cape Breton Highlands (mountain): the national park, at its park point.
- **Cape Breton:**
  - Glace Bay (coast; population centre 16,915): the coal town with the Miners' Museum (well known).
  - North Sydney (coast): the ferry port to Newfoundland (well known).
  - **Scenic:** Louisbourg (coast): the town by the Fortress of Louisbourg. The fortress's park point (45.89, -59.98) is shore water on the map, so the town's point is used, 3 km northeast across the harbour.

### Water

**What the map has:**
- **Lakes in `terrain.js`:** Lake Rossignol, Lake Ainslie and an unnamed lake by the Mira River.
- **One river:** the Salmon, through Truro.
- **Everything else is sea outside the land.** Plain sea means track follows the shore. That includes the Bras d'Or, Halifax Harbour, the Minas Basin, the Bay of Fundy and the Strait of Canso.

**Bays (4).** Rough rings drawn with a script that maps land, regions and towns on a grid. Land inside a ring stays land. Each ring stays a few km off the shores that tested lines run along.

1. **The Bay of Fundy.**
   - **Extent:** from New Brunswick's Grand Manan bay (66.1°W) to Cape Chignecto. It stays 8–10 km off New Brunswick's shore and 5 km off North Mountain and Digby Neck.
   - **Effect:** water between Saint John and Nova Scotia needs the ferry. Without it, track from Saint John would "follow the shore" across 30–40 mi of open bay.
   - **New Brunswick links still open:** Saint John–St. Martins, St. Martins–Fundy, Saint John–St. Stephen, Blacks Harbour–Saint John and Sackville–Amherst were re-tested.
2. **The Minas Basin.** The Minas Channel east of Cape Chignecto, the basin and Cobequid Bay. There is no crossing (well known); the way round is via Truro.
3. **St. Georges Bay,** with the gulf off Port Hood and Mabou up to Inverness.
4. **The Strait of Canso and Chedabucto Bay,** out to Canso and Isle Madame.

Bays 3 and 4 follow from Cape Breton Island's only fixed link being the Canso Causeway (well known). The water between the island and the mainland is therefore bay.

**The Bras d'Or Lake stays shore water on purpose.** It is sea on the map. I tried two rings:
- **The whole lake:** it blocked Port Hawkesbury–Sydney in both modes. The line crosses 25 mi of the lake, no real crossing is near it, and Port Hawkesbury is Sydney's only neighbouring main station.
- **Only the channels north of the Barra Strait:** in Tough it blocked Baddeck to Sydney, North Sydney and Glace Bay. Those lines cross 4–5 mi of St. Andrews Channel, 6 mi south of the Seal Island Bridge (Highway 105's real crossing).

As shore water, these lines follow the shore, as Highways 105 and 4 go round the lake (well known). The Seal Island Bridge and the Barra Strait bridge are listed as markers.

**Halifax Harbour also stays shore water.** On the map the Narrows are under 1 mi wide, so lines cross as flat ground. The Macdonald and MacKay bridges are markers, like New Brunswick's Harbour Bridge.

**Left as shore water** (for the Prince Edward Island agent):
- The Northumberland Strait: no Nova Scotia place lies across it until Prince Edward Island is in the game.
- Chignecto Bay: Joggins–Hopewell Rocks follows the shore for 5–8 mi.

**Bridges, the causeway and ferries (9).** Positions are approximate.

| Crossing | Point | Use |
| --- | --- | --- |
| Canso Causeway | 45.65, -61.42 | Aulds Cove–Port Hastings (well known). Antigonish–Port Hawkesbury (1.5 mi of the strait) and Antigonish–St. Peter's use it in both modes |
| Salmon River bridge (Truro) | 45.37, -63.29 | Truro's crossings to Bible Hill (well known that Truro straddles the river; the spot is from memory). Truro's links north (Amherst, Tatamagouche, New Glasgow) use it. New Glasgow–Truro also crosses the river's upper course near 45.46, -63.00, where it takes the new-bridge price |
| Saint John–Digby ferry (Digby Gut) | 44.80, -65.83 | The year-round ferry (well known), a point outside the Digby Gut on the route. Its name groups with New Brunswick's "(Saint John side)" point. Digby–Saint John uses it in both modes (29 mi of bay). New Brunswick's point (45.19, -66.04) is 5.5 mi off Saint John, outside this bay, so other Saint John lines can't use it |
| Macdonald Bridge, MacKay Bridge | 44.66, -63.58; 44.68, -63.60 | Markers (see above; well known) |
| Seal Island Bridge, Barra Strait Bridge | 46.21, -60.55; 45.96, -60.79 | Markers. Seal Island is Highway 105 over the Great Bras d'Or (well known). Barra Strait is the road bridge from Iona to Grand Narrows (from memory) |
| Caribou–Wood Islands ferry (Caribou side), North Sydney–Port aux Basques ferry (North Sydney side) | 45.77, -62.69; 46.27, -60.18 | The Nova Scotia ends of the ferries to Prince Edward Island and Newfoundland (well known). They count once those provinces are in the game. Neither sits in a bay yet |

**Passes: none.** The terrain grid has hills on the Cobequids, the North and South Mountains, around Antigonish and in the Cape Breton Highlands. It has only 6 mountain cells, all in the Cape Breton Highlands. One tested link meets them: Chéticamp–Baddeck in Tough has a 3.5 mi tunnel, well under the 15 mi limit.

### How the map plays

Checked with `NR.segmentGeo` / `NR.blockedReason` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`. Two kinds of link were tested: every main station to its neighbours' main stations (New Brunswick's included), and every town to its 3 nearest places.

- **Main stations: 20 links.** 19 are open in both modes.
  - **Bridgewater–Yarmouth is open in Gentle only:** the line crosses 7.5 mi of Lake Rossignol, Nova Scotia's biggest lake, and has no real crossing. In Tough the player goes Yarmouth–Shelburne–Liverpool–Bridgewater (each open in both modes) or via Digby. Yarmouth therefore reaches 2 neighbouring main stations in Gentle and 1 in Tough.
  - **Reach per station (Gentle/Tough):**
    - HFX 4, WIN 4, BWT 5/4, TRU 5, KTV 3, DIG 4 (with Saint John), YAR 2/1.
    - AMH 2 (Truro and Moncton), NGL 2, ANT 4, PHB 2.
    - SYD 1: Port Hawkesbury, its only neighbouring region; Newfoundland is not in the game.
  - **Cape Breton is reachable by the causeway in both modes.** Port Hawkesbury–Sydney is open in both: 25 mi of the Bras d'Or followed as shore.
- **Towns: 90 links.** 86 are open in both modes.
  - **Every town has an open link in both modes.**
  - Open in Gentle only: Parrsboro–Grand-Pré (13 mi across the Minas Basin) and Canso–St. Peter's (8 mi of Chedabucto Bay).
  - Open in neither: Canso–Port Hawkesbury (17 mi of Chedabucto Bay).
- **Blocked on purpose** (checked separately):
  - Saint John to Annapolis Royal, Kentville and Yarmouth (28–37 mi of the Bay of Fundy, away from the ferry).
  - St. Martins–Digby.
  - Windsor–Parrsboro (12 mi of the Minas Basin).
  - Pictou, New Glasgow and Antigonish to Inverness (19–26 mi of St. Georges Bay).
- **Still open:** Kentville–Parrsboro crosses only 1.5 mi of the basin on the coarse map, at the Minas Passage, so it stays open.

### Levels (4)

| Level | Area (stations) | Goals |
| --- | --- | --- |
| Halifax & the South Shore | halifax: HFX, WIN, BWT, TRU | 50 passengers; own 4 counties; 10 containers (Halifax's port) |
| The Annapolis Valley & the Southwest | valley: KTV, DIG, YAR | 140 passengers; connect Halifax–Digby; 25 produce |
| The North Shore | north: AMH, NGL, ANT | 280 passengers; connect Halifax–Amherst; a high-speed train |
| Cape Breton Island | capebreton: PHB, SYD | 450 passengers; connect Halifax–Sydney; 30 trucks |

Each level's regions touch the earlier ones:
- Kings and Annapolis & Digby touch Hants or Lunenburg & Queens; Yarmouth & Shelburne touches Lunenburg & Queens.
- Cumberland, Pictou and Antigonish & Guysborough touch Colchester.
- Cabot Trail & Bras d'Or touches Antigonish & Guysborough, and Cape Breton touches it.

The goals and passenger targets follow New Brunswick's (11 regions).

### Biomes

Most of Nova Scotia is forest (well known). The convention follows New Brunswick's.
- **forest:** Halifax, Lunenburg & Queens, Yarmouth & Shelburne, Antigonish & Guysborough, and Cabot Trail & Bras d'Or. These are the wooded South Shore and southwest, the Eastern Shore, Guysborough's woods and the Cape Breton Highlands. Halifax's regional municipality is mostly forest and lakes outside the city, like New Brunswick's York.
- **wooded:** Annapolis & Digby, Hants, Colchester, Cumberland, Pictou and Cape Breton. These are farms and towns under the North and South Mountains, the Cobequids and the hills.
- **not listed (farmland):** Kings, the Annapolis Valley, the province's main farmland (well known).

### For the main agent

1. **The Bras d'Or decision** (see Water). If you prefer it as a bay, Port Hawkesbury–Sydney needs an exception first, or Sydney is cut off from its only neighbour.
2. **Lake Rossignol blocks Bridgewater–Yarmouth in Tough** (see above).
3. **Blocked-line messages suggest unrelated bridges.** The game names the nearest real bridges of any kind. For example, "13 miles across the Minas Basin ... like the MacKay Bridge, Macdonald Bridge or Salmon River bridge (Truro)", and St. Georges Bay suggests the Barra Strait Bridge and the Caribou ferry. New Brunswick's notes show the same (Jemseg). The game could suggest only bridges in or next to the same bay.
4. **For the Maine agent:** the seasonal Yarmouth–Bar Harbor ferry (well known) could be `["Yarmouth", "ME:Hancock"]` in `build-map.js`, with a Yarmouth-side point.
5. **For the Prince Edward Island and Newfoundland agents:** the Caribou and North Sydney ferry points are above. The Northumberland Strait and Cabot Strait are plain shore water today.

### Checks

- `node tools/check-pack.js NS`: `NS: passed (12 stations, 30 towns, 0 city maps, 0 passes, 9 bridges), 0 errors, 0 warnings`. All packs pass, and New Brunswick still has 0 warnings.
- `node tools/test-pack.js NS`: `PASSED: 17 passed, 0 warnings, 0 failed`. It laid Halifax–Windsor, 6 passengers arrived in the first week, and it bought Annapolis & Digby.
- **Screenshots** (arcade light, classic light, levels): all looked right.
  - The stations sit on land: Halifax on the harbour's west shore, Digby on the Annapolis Basin and Bridgewater inland.
  - The region names show, including "Cabot Trail & Bras d'Or" and "Yarmouth & Shelburne".
  - The forest covers all but the Valley.
  - The levels view shows the Halifax start. The MacKay and Macdonald bridge labels overlap Halifax's port and airport icons a little.
