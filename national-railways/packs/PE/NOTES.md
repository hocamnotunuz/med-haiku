# Prince Edward Island (PE) pack notes

Prince Edward Island has three counties, and each one is its own region:

| Region | Population (2021) | Main station |
| --- | --- | --- |
| `pe-queens` | 89,770 | Charlottetown |
| `pe-prince` | 46,234 | Summerside |
| `pe-kings` | 18,327 | Montague |

There was no merge review. The region links across the water were already in `map.js`:
- Prince ↔ New Brunswick's `nb-albert-westmorland` (the Confederation Bridge);
- Queens ↔ Nova Scotia's `ns-pictou` (the Wood Islands ferry);
- Kings ↔ Quebec's Magdalen Islands (the Souris ferry).

**Sources.** Everything comes from `packs/PE/raw/` (Statistics Canada, 2021 Census; Natural Resources Canada's Geographical Names for places and parks):
- Station `pop` is the region's population in thousands from `counties.json`.
- Coordinates are `places.json` or `parks.json` points rounded to 2 decimals, except where a comment says why one moved.

Facts added by hand (bridges, ferries, why a place is scenic, place types) are well known. The few that are from memory say so.

**Please read "For the main agent" first.** The pack checks clean, but the pack test fails because of a crash in the core code. It passes with a one-line guard (verified in a scratch copy).

## Start

`start: ["pe-queens", "pe-prince", "pe-kings"]`, as briefed: Queens and its two neighbours, which is the whole island.
- The main stations are three different types: Charlottetown metro, Summerside coast and Montague farm. So all three pairs exchange riders in "A type of place".
- The pack test laid Charlottetown–Montague (27 mi), and 6 passengers arrived in the first week.
- The start covers the whole province, which has consequences (items 2–4 below).

## Main stations (3)

| Region | Station | Type, size | Why |
| --- | --- | --- | --- |
| Queens (90k) | Charlottetown (CHA) | metro 2 | **The capital.** The raw city point (46.24, -63.13) is downtown, a few hundred metres from Province House (`parks.json` 46.236, -63.128). **Size:** 90k is size 2 by the guide (60,000–300,000), like Sydney (98k) and Saint John (77k). Municipality 38,809; population centre 52,390 |
| Prince (46k) | Summerside (SUM) | coast 1 | **The second city** (16,001), on its waterfront on Bedeque Bay (well known). The raw point (46.40, -63.79) is downtown. **Type:** coast rather than farm, so the start has three types (Montague is farm) and Summerside–Moncton is coast–metro |
| Kings (18k) | Montague (MNT) | farm 1 | **Montague, not Souris.** Montague is the biggest population centre in Kings (1,896; Souris town has 1,079) and the county's main service town (well known). Souris, the Magdalen ferry port at the east end, is a town. **Type:** farm, for the farms of southern Kings, which gives Kings a second type next to coast Souris. **Data:** `places.json` lists Montague in `pe-queens` with a population of 74. The region comes from the nearest label, and the 74 looks like a leftover from before Montague merged into Three Rivers in 2018 (from memory). On the map the point (46.17, -62.65) is inside Kings, and the checker agrees |

**IDs** CHA, SUM and MNT are unique across every pack (checked against all stations and towns). CTN was taken by BC's Courtenay and MTG by QC's Matagami.

**Airport: none.**
- Charlottetown Airport carries about 0.4 million passengers a year. Passenger numbers here are from memory.
- The smallest airports in other packs carry more: Greater Moncton (about 0.7 million) and Redmond.
- New Brunswick left out Fredericton's airport, which is about Charlottetown's size.
- If the bar is "each province's main airport", add `airport: "Charlottetown Airport"` to CHA.

**Port: none.** Charlottetown's port takes cruise ships and bulk cargo, not containers (well known). Summerside and Souris are not container ports either.

## Towns (10: 6 towns and 4 scenic places)

That is 2 towns per region plus the scenic places. Every place is at least 4 miles from every other place, sits inside its own county and is on the map's land; the checker gives 0 warnings.

**Queens**
- Wood Islands (coast, 45.97, -62.75): where the ferry to Caribou leaves (well known). It is a locality with no population in the data, but it is the island's end of the Nova Scotia crossing (see Water).
- **Scenic:** Cavendish (coast, 46.49, -63.38): Green Gables, L.M. Montgomery's Cavendish National Historic Site (`parks.json`), by the national park's beaches (well known).
- **Scenic:** PEI National Park (coast, 46.42, -63.19): the dunes and red-sand beaches of the north shore (well known). The park's point (46.433, -63.20) is in the sea on the map, so the town uses Brackley Beach's point, 1 mi south-east, inside the park.
- **Left out:**
  - Stratford (10,927): 2.8 mi from Charlottetown, across the Hillsborough River.
  - Cornwall (6,574): 4.4 mi from Charlottetown, a suburb (left out to keep places spread out).
  - North Rustico (648): 3.9 mi from Cavendish.
  - Victoria: its point is in the sea on the map.

**Prince**
- Kensington (farm; 1,812, population centre 1,743): the service town of central Prince County's farms.
- O'Leary (farm; 876): West Prince's potato country, with the Canadian Potato Museum (well known).
- Tignish (coast; 744): the Acadian fishing town near North Cape (well known). North Cape's own point is in the sea on the map.
- **Scenic:** Borden-Carleton (coast; 788): the island end of the Confederation Bridge, with Gateway Village (well known).
- **Left out:**
  - Alberton (1,301): 9.6–10.6 mi from O'Leary and Tignish, between them.
  - Wellington (1,811) and Kinkora (1,285): villages between Summerside and the larger towns.
  - Miscouche: 4.4 mi from Summerside.

**Kings**
- Souris (coast; 1,079): the fishing port where the ferry to the Magdalen Islands leaves (well known).
- Morell (farm; 1,209): the north-shore village on the Morell River by St. Peters Bay.
- **Scenic:** East Point (coast, 46.45, -62.00): the lighthouse at the island's eastern tip (well known).
- **Left out:**
  - Georgetown: Kings' old shire town. Its point is in the sea on the map, and it is 5.7 mi from Montague.
  - Murray Harbour (628).
  - Basin Head: its singing sands are well known, but it is not in `parks.json`, and East Point and Souris already cover that end.

## Water

**The map.**
- The terrain grid is all flat: no hills, lakes or rivers.
- All water is sea outside the land, and plain sea means track follows the shore.
- Without a bay, any line from the island to New Brunswick or Nova Scotia "followed the shore" across the Northumberland Strait (13–40 km of open water).

**Bays (2).** The rings were drawn from a grid printout of the map's land, regions and towns. Land inside a ring stays land.

1. **The Northumberland Strait.**
   - **Extent:** from north of North Cape and off West Point to Cape George, where it meets Nova Scotia's St. Georges Bay along the same vertices. The edges stay 1–4 km off both shores. Egmont, Bedeque and Hillsborough Bays, Baie Verte, Shediac Bay and Tatamagouche Bay stay shore water, so lines along the coasts are unchanged.
   - **At Caribou:** the Nova Scotia edge runs onto the shore, so the bay reaches the ferry dock.
   - **Real crossings:** the Confederation Bridge (12.9 km, Borden-Carleton–Cape Jourimain, opened 1997) and the Caribou–Wood Islands ferry (Northumberland Ferries, seasonal) are its only crossings (well known).
2. **The Gulf of St. Lawrence between Kings and Cape Breton.**
   - **Extent:** from the strait's east end and St. Georges Bay's north edge up to a line from East Point to off Inverness. Its west edge is 9–20 km off Kings' east coast, so East Point–Wood Islands and Souris–Montague still follow the shore.
   - **What it blocks:** without it, East Point–Inverness (36 mi of open gulf) was open as shore water.
   - **Neighbours' bays:** neither ring overlaps the NB, NS or QC bays. Nova Scotia's St. Georges Bay shares its edge from Cape George to (-62.0, 46.05) and on to its north tip; Quebec's gulf ring stays north of 47.4°N.

**Bridges and ferries (5 points, 3 crossings).** Positions are approximate; each follows the line of the real crossing.

| Crossing | Points | Matches |
| --- | --- | --- |
| Confederation Bridge | Borden-Carleton end (46.24, -63.69); mid-strait (46.20, -63.75) | New Brunswick's "(New Brunswick end)" (46.18, -63.79). The three points lie on one line, Borden-Carleton to Cape Jourimain |
| Caribou–Wood Islands ferry | Wood Islands side (45.90, -62.72); mid-strait (45.84, -62.70) | Nova Scotia's "(Caribou side)" (45.77, -62.69), on the line from the Wood Islands terminal to Caribou. The PE names use Nova Scotia's "Caribou–Wood Islands ferry", so the game joins all three into one crossing. The Wood Islands-side point is about 5 mi out from the Wood Islands town, so other lines from it don't count as using the ferry |
| Souris–Cap-aux-Meules ferry | off East Point (46.49, -62.00) | Quebec's "(Magdalen side)". The ship rounds East Point on its way north (from memory: the crossing is about 134 km, against 118 km in a straight line). **A marker only:** the gulf it crosses is shore water, and Montague and Souris to the Magdalens are open in both modes. The point is outside both rings, so it lends itself to no other line. A point off Souris would have let Souris–Antigonish and Souris–Inverness cross the gulf ring in Gentle |

**Passes: none** (the island is flat).

## How the map plays

Checked with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map.

**On the island:**
- All 59 pairs of PE places within 60 mi are open in both modes, so every town has open links.
- Charlottetown–Summerside, Charlottetown–Montague and Summerside–Montague are open in both modes.

**Across the strait, open in both modes:**
- **The Confederation Bridge:**
  - Charlottetown–Moncton and Charlottetown–Dieppe. The line passes over the bridge's New Brunswick end, so it uses the bridge for its 12 mi of strait.
  - Borden-Carleton to Moncton, Dieppe, Shediac, Sackville, Hopewell Rocks, Amherst and Joggins.
- **The Wood Islands ferry:** Wood Islands, Montague and Morell to New Glasgow and Pictou.
- **The Souris ferry:** Montague and Souris to the Magdalen Islands (shore water).

**Not open: Summerside–Moncton and Charlottetown–New Glasgow** (the brief asked for both). Both are blocked in both modes, because the straight lines miss the real crossings.
- **Summerside–Moncton:**
  - It crosses 19 mi of strait south-west of Summerside. Its line passes 12 mi from the nearest bridge point.
  - Summerside's lines to Moncton, Shediac and Sackville pass 10–12 mi from the nearest bridge point (Amherst, Nova Scotia: 7 mi).
  - The real road runs Summerside–Borden-Carleton (11 mi east) and then over the bridge. In the game that is Summerside–Borden-Carleton–Moncton, or Charlottetown–Moncton.
- **Charlottetown–New Glasgow** (and Charlottetown–Pictou):
  - It crosses 18 mi of strait west of Point Prim. It passes 5.5–6.5 mi from the ferry's PE points.
  - Its bay stretch ends on the Nova Scotia shore 4.5 mi from the Caribou point (the radius is 4 mi in Gentle, 3 in Tough).
  - The real route is the Trans-Canada to Wood Islands, then the ferry. In the game that is Charlottetown–Wood Islands–New Glasgow, or Montague–New Glasgow.
- **Not faked.** Making either line open would mean a bridge point off the real crossing, or leaving the strait as shore water. Both would break "crossings away from them are blocked".
- **What the player sees.** The blocked message names the real crossing: "19 miles across the Northumberland Strait ... like the Confederation Bridge", and for New Glasgow "... the Caribou–Wood Islands ferry".
- **Playability.** Borden-Carleton and Wood Islands are towns, so they appear soon after their county is owned; towns near existing stations come first. A main-station link that works at once is Charlottetown–Moncton.

**Blocked on purpose** (both modes unless noted):
- **To Nova Scotia:**
  - Summerside to Amherst, Sackville and Joggins.
  - Charlottetown, Wood Islands, Montague and Cavendish to Tatamagouche.
  - Montague and East Point to Antigonish.
- **To New Brunswick:**
  - O'Leary to Bouctouche, Shediac, Kouchibouguac and Moncton.
  - Tignish to Bouctouche and Kouchibouguac.
  - Kensington and Summerside to Shediac and Moncton.
- **To Cape Breton:** East Point and Souris to Inverness.
- **Open in Gentle only:**
  - Wood Islands to Antigonish and Truro: they pass within 4 mi of the ferry.
  - Summerside, Borden-Carleton and Kensington to Springhill, and Kensington–Amherst: they pass within 4 mi of a Confederation Bridge point.

**Quirks of the point system** (open, and acceptable):
- **Lines that pass Borden-Carleton** count as using the bridge whatever their direction: Summerside–Tatamagouche, and Cavendish–Amherst. The bridge is the real way off the island there.
- **Gentle-only links on Nova Scotia's points:**
  - East Point–Pictou is open in Gentle via the Caribou point.
  - Souris–Port Hawkesbury is open in Gentle via Nova Scotia's Canso Causeway point, which is next to Port Hawkesbury, despite 51 mi of bay.

**Neighbours unchanged.** Every pair of NB, NS and QC places within 50 mi (1,801 pairs) gives the same result in both modes with and without the PE bays.

## Levels (3)

The start already owns all three counties. So the levels are checklists only, and their areas just group the stations.

| Level | Area (station) | Goals |
| --- | --- | --- |
| Charlottetown & Queens | queens: CHA | 50 passengers; connect Charlottetown–Summerside |
| Summerside & Prince | prince: SUM | 140 passengers; 25 produce (Montague, Kensington, O'Leary and Morell farms to Charlottetown) |
| Kings & the Points East | kings: MNT | 280 passengers; connect Summerside–Montague; a high-speed train |

**Goals left out:**
- **No "counties" goal:** all PE counties are owned from the start, and other provinces stay closed until the levels are beaten.
- **No containers** (no port) and **no trucks** (no mountain or desert places).
- **Targets** follow the first three levels of New Brunswick and Nova Scotia.
- **"Points East"** is the island's eastern tourism region (the Points East Coastal Drive, well known).

## Biomes

None listed: the whole island is farmland, "the Garden of the Gulf" (well known).
- Kings and West Prince have woodlots, but the land is flat and mostly farmed.
- "Wooded" (trees on hills) and "forest" (trees even on the flats, like New Brunswick's interior) would both look wrong.

## For the main agent

1. **Core crash: the pack test fails at "test run".** The error is `TypeError: Cannot read properties of undefined (reading 'state')` at `NR.countyStatus` (js/game.js:693), called from `countGoals`.
   - **Cause:** when passengers arrive at a station, `countGoals` checks every neighbouring county, including the cross-strait ones (`nb-albert-westmorland`, `ns-pictou`, the Magdalens). The browser only loads the maps of open states and their state neighbours. Those maps aren't loaded, so `NR.countyById[n]` is undefined. Every PE station has such a neighbour.
   - **Not PE-specific:** a node run that loads maps like the browser crashes the same way in a New Brunswick game when passengers reach Moncton (its neighbour `pe-prince`). New Glasgow (NS) and the Magdalen Islands (QC) are exposed too. The NB and NS tests pass only because they lay other lines.
   - **One-line fix**, in `countGoals` before `countyStatus`: `if (!NR.countyById[n]) continue;` (or the same guard in `countyStatus`).
   - **Verified:** with that line in a scratch copy of the game (nothing else changed), `node tools/test-pack.js PE` gives `PASSED: 15 passed, 2 warnings, 0 failed`. Its screenshots are in `test-out/PE/`.
2. **PE has no state neighbours.** In `packs/index.js`, `NR.AREAS.PE.neighbors` is `[]`, and NB, NS and QC don't list PE: `build-map.js` finds province neighbours by outline only.
   - **Effect:** PE never opens in an NB, NS or QC game, and owning PE opens nothing. The test warns "has no neighbors in the game yet".
   - **Fix (`build-map.js`):** add a state-neighbour pair for every region neighbour that crosses a state line (PE–NB, PE–NS, PE–QC, and later NL–NS by the Port aux Basques ferry). That also loads the maps item 1 needs.
3. **Whole-island start.** `newGame` owns the start counties with `ownCounty` and never calls `openMoreStates`. So in Endless and Timed, the neighbours wouldn't open even after item 2; only beating the last level opens them. Either:
   - call `openMoreStates(s)` after the start loop, and relax the test's "only this state open" check for starts that cover the whole state; or
   - start with Queens + Prince (`["pe-queens", "pe-prince"]`, metro and coast), so that buying Kings opens the neighbours.
4. **Small UI text.** After a level, the next-level message says "where 1 county can now be unlocked", but the county is already owned.
5. **Summerside–Moncton and Charlottetown–New Glasgow are blocked** (see "How the map plays"). The bridge's main-station link is Charlottetown–Moncton; the ferry's runs through the Wood Islands town.
6. **Open gulf.** The gulf between the island, the Magdalens and Cape Breton north of East Point is shore water, so East Point and Souris to Chéticamp are open. Nova Scotia's notes left the Cabot Strait the same way.
7. **Unrelated bridge suggestions.** Blocked messages still suggest unrelated crossings: East Point–Inverness suggests the Souris ferry and the Barra Strait Bridge. Nova Scotia's notes report the same.

## Checks

- `node tools/check-pack.js PE`: `PE: passed (3 stations, 10 towns, 0 city maps, 0 passes, 5 bridges), 0 errors, 0 warnings`.
- `node tools/check-pack.js`: `All packs passed`. New Brunswick, Nova Scotia and Quebec still have 0 warnings.
- `node tools/test-pack.js PE` in the repository: `FAILED: 7 passed, 2 warnings, 1 failed` (item 1).
  - The two warnings are structural: there are no state neighbours, and no county is left to buy because the start covers the whole island.
  - With the one-line guard (scratch copy): `PASSED: 15 passed, 2 warnings, 0 failed`.
- **Screenshots** (arcade light, classic light, levels) looked right:
  - All three stations sit on land: Charlottetown at the harbour mouth, Summerside on the Bedeque Bay shore and Montague inland in Kings.
  - The county names show. The bridge labels sit in the strait south of Borden-Carleton, and the ferry label south of Kings.
