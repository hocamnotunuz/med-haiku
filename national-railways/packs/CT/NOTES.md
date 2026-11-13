# Connecticut pack: notes

Files: `packs/CT/pack.js` (8 stations, 18 towns, 0 passes, 13 bridges and ferries, 0 bays, 3 levels, biomes) and this file. Populations and coordinates are from `packs/CT/raw/` (places.json points, 2 decimals; a station's `pop` is its region's population in thousands from counties.json). Anything hand-placed is named below. Geography, bridges and ferries are from general knowledge (not from the data), as the sources below say.

## Region merges (phase 1)

Connecticut has 8 counties on the map (the Census Bureau has used planning regions since 2022; the main agent kept the 2020 county totals), 3.61 million people. Each is a region and nothing is merged: the smallest, Windham, has 117,000, well over the 50,000 line. I found nothing wrong.

- Names: "Fairfield County, Connecticut" ... "Windham County, Connecticut" are plain and right (ids `ct-fairfield`, `ct-hartford`, `ct-litchfield`, `ct-middlesex`, `ct-new-haven`, `ct-new-london`, `ct-tolland`, `ct-windham`).
- Neighbours (counties.json) match the real borders: Fairfield-Litchfield-New Haven meet at the Housatonic; Hartford touches Litchfield, New Haven, Middlesex, New London and Tolland; Middlesex touches Hartford, New Haven and New London; Tolland touches Hartford, New London and Windham; Windham touches only Tolland and New London (its other borders are Rhode Island and Massachusetts, which come later); Litchfield also has Massachusetts to come. Fairfield has Westchester, Putnam, Dutchess (a short border at Sherman) and Suffolk (ferry); Litchfield has Dutchess.
- The two ferry links are right and well known: Bridgeport-Port Jefferson (Fairfield to Suffolk) and New London-Orient Point (New London to Suffolk). Both work in the game (see Reachability).
- Every place sits in its own county (the checker confirms); one coastal or riverside point was nudged (Gillette Castle, below).

One detail for the main agent: the brief says Hartford is a metro of 1.2 million; the county (the region) is 889,000, which is what `pop` holds.

## Start

`start: ct-fairfield, ct-new-haven, ct-litchfield`. Fairfield (942k) is the biggest region and its neighbours are New Haven and Litchfield, which also touch each other. Hartford is not next to Fairfield, so it is level 2. The main stations are Bridgeport (metro), New Haven (coast) and Torrington (mountain): three types. The pack test's first track is Bridgeport to New Haven (16 mi straight, 18 mi by track; the New Haven Line and I-95), the nearest pair of different types, and 7 passengers arrived in the test week.

## Main stations (8, one per region)

IDs are unique across every `packs/*/pack.js` (checked with a script over all `id:` fields; the first choices BRPT, HRTF, NWHV, MDTN, NRCH and others were taken, so the CT-style ids `BPCT`, `TRCT` etc. are used).

| Id | Station | Region (pop k) | Type | Size | Notes |
| --- | --- | --- | --- | --- | --- |
| BPCT | Bridgeport | Fairfield (942) | metro | 4 | the biggest city (148,642); Bridgeport station (point) 1 km from the Census point; ferry terminal |
| NHVN | New Haven | New Haven (852) | coast | 3 | Union Station (point) 1.4 km from the Census point; scenic (Yale) |
| TRCT | Torrington | Litchfield (180) | mountain | 2 | downtown (Main Street), 3 km from the Census point |
| HTFD | Hartford | Hartford (889) | metro | 4 | airport (Bradley); scenic (Mark Twain House); Union Station |
| MDTW | Middletown | Middlesex (162) | farm | 2 | Census point (1.5 km from Main Street, kept) |
| VNCT | Vernon (Rockville) | Tolland (151) | farm | 2 | Rockville CDP point |
| NLCT | New London | New London (265) | coast | 2 | Union Station (point), 2 km from the Census point |
| WLMC | Willimantic | Windham (117) | farm | 1 | CDP point |

Judgment calls:

- **Sizes** (PACKS.md guide, judged against NY, NJ and the earlier packs): Hartford 4 (889k; the capital and a metro of 1.2 million, like Rochester, 759k, and Buffalo, 954k, size 4; the other 889k-ish regions: Essex NJ 863k is 4 as a core city, Montgomery PA 857k is 3). Fairfield 4 (942k is just over the 900k top of the size-3 band, and it is part of the New York metro like Westchester 1.0M and Bergen 956k, both 4). New Haven 3 (852k, under 900k: Montgomery PA 857k is 3; Yale; a metro of 860,000). New London 2 (265k is in the 60,000-300,000 band; I did not take 3 because the region is under 350k, even with the Navy submarine base and the casinos). Litchfield 2 (180k), Middlesex 2 (162k), Tolland 2 (151k, over Sussex NJ's 144k which is 2), Windham 1 (117k, like Warren NJ 110k).
- **Bridgeport, not Stamford**, for Fairfield: Bridgeport is the biggest city, the Sound ferry leaves from it and it is the one the Long Island link needs; Stamford (135,451, the Metro-North and Amtrak hub and the corporate centre) is the town STMD, size 3 (the biggest town of the pack, next to the corridor into New York).
- **New London, not Norwich**, for New London County: Norwich (40,129) is bigger than New London (27,374) but is up the Thames; New London has Amtrak, the Cross Sound Ferry and the harbour (the Naval Submarine Base is in Groton across the river). Norwich is the town NRWI (14 mi away). The pack's ferry link needs the main station at the ferry.
- **Tolland**: no town has a Census population. Vernon (Rockville), the biggest town of the county (about 30,000, on I-84), was chosen over Storrs (UConn, a town STRS here) and Tolland (the seat, small). The point is the Rockville CDP (`places.json`).
- **Windham**: Willimantic (CDP, about 17,500 in 2020) rather than Danielson (4,166, the only Census place with a population) or Putnam; Putnam is a town (PTNM). Danielson is left out (7 mi from Putnam).
- **Types**: New Haven is typed coast (so the start has two types and the first track has riders) and Torrington mountain (the Litchfield Hills, only hills on the map, but the town type is how the place feels, as Morristown NJ). Other regions: Hartford and Bridgeport metro; Middletown, Vernon and Willimantic farm (the river valley and the Quiet Corner), New London coast.
- **Airport**: Hartford only (Bradley International, Windsor Locks, about 6 million passengers a year: a big airport by the bar of Albany, Syracuse and Rochester in the NY pack). Sikorsky (Bridgeport/Stratford), Tweed New Haven and Groton are small. **Port**: none. The Port of New Haven, Bridgeport and New London are small harbours, not container ports (the Newark and Buffalo bar). So the levels have no cargo goal.
- **Scenic stations**: New Haven (Yale University, founded 1701: the brief's "Yale (New Haven's station itself)") and Hartford (the Mark Twain House and the Harriet Beecher Stowe Center, both National Historic Landmarks).

## Towns (18)

Spread out (the checker finds none under 4 miles apart). About 1.5 per region (13) plus 5 scenic places.

| Region | Towns |
| --- | --- |
| Fairfield | Stamford (size 3), Norwalk, Danbury (size 2 each) |
| Hartford | New Britain, Bristol |
| Litchfield | New Milford, Litchfield (scenic), Kent Falls (scenic) |
| Middlesex | Old Saybrook, Essex (scenic), Gillette Castle (scenic) |
| New Haven | Waterbury (size 2), Meriden, Milford |
| New London | Norwich, Mystic (scenic) |
| Tolland | Storrs |
| Windham | Putnam |

Populations are the Census figures (places.json) where the place is a city or borough; the rest are CDPs with no population (as in NJ). Points: Census points, except where a comment in the pack says downtown was used (Stamford downtown at the Transportation Center, 3 km from the Census point, and Norwich at Franklin Square). The sizes follow NJ (cities of 90,000-135,000 are 2 or 3; the rest 1).

Scenic places (all well known; sources: the institutions' own pages, NPS and CT DEEP, not Census):
- **Litchfield**: the 1700s village green and historic district (a National Historic Landmark district; Litchfield Hills, White Memorial Conservation Center).
- **Kent Falls**: Kent Falls State Park, the 250 ft cascade beside US-7 (CT DEEP).
- **Essex**: the Essex Steam Train and Riverboat (Valley Railroad, 1971), a best-known tourist railway of the state.
- **Gillette Castle**: Gillette Castle State Park, East Haddam (CT DEEP; the 1919 castle of William Gillette). The real point (41.42, -72.43) is just outside Middlesex's simplified outline on the river, so the point was nudged 0.6 mi west to 41.42, -72.44, as the checker asked.
- **Mystic**: Mystic Seaport Museum and Mystic Aquarium (Mystic CDP point 41.36, -71.96).
- Hartford and New Haven (scenic main stations, above).
- Not used: the Litchfield Hills as a separate place (covered by Litchfield and Kent Falls), Yale (it is New Haven's station).

## Passes: none

The map has no mountains in Connecticut (the terrain grid shows only hills in the north-west and north), and the brief says no passes. The checker would warn about a pass with no mountains nearby.

## Bridges and ferries (13)

Real, well known and on the main lines. Only rivers on the map count for the river cost (the Connecticut and the Housatonic are the only two in `terrain.js`); the Thames and the Sound are not rivers on the map, but the points are still real and the checker accepts them (the coast is within 3 miles). The Sound itself is the NY pack's one bay, `Long Island Sound` (a rectangle from -73.76 to -72 and 40.92 to 41.35), which blocks a crossing wider than the limit unless a ferry or bridge point is near; I added no bay here.

Connecticut River (the map's line is simplified and runs about 2 miles from the real river at Middletown, so two points are nudged along the line, said below):
- **Raymond E. Baldwin Bridge (I-95) and Amtrak's Connecticut River Bridge, Old Saybrook to Old Lyme** (41.31, -72.34): the brief's point; 4 mi from the end of the map's river line, on the coast.
- **Chester-Hadlyme Ferry** (CT-148; 41.40, -72.42; the ferry has run since 1769; CT DOT). Approximate.
- **Goodspeed Bridge** (CT-82, East Haddam, in front of the Goodspeed Opera House; 41.45, -72.46).
- **Arrigoni Bridge** (CT-66 and CT-17, Middletown to Portland; 41.57, -72.63). The real bridge is at 41.56, -72.65; the point was nudged 1 mi toward the map's river line so that the Middletown-Willimantic and Middletown-Vernon lines use it.
- **Bulkeley Bridge (I-84/US-44) and Founders Bridge, Hartford to East Hartford** (41.77, -72.66; the brief's).

Housatonic:
- **Moses Wheeler Bridge (I-95) and the Devon Bridge (Amtrak), Stratford to Milford** (41.21, -73.11; the brief's). Bridgeport-Milford and Bridgeport-New Haven both use it.
- **Derby-Shelton Bridge** (CT-34; 41.32, -73.08).
- **Rochambeau Bridge** (I-84, Newtown to Southbury, over Lake Lillinonah; 41.45, -73.31). The coordinates are from memory and approximate (within 1 mi), placed on the map's river line where the Danbury-Waterbury line crosses it.
- **New Milford bridge** (US-202, Bridge Street; 41.58, -73.41).

Thames and the Sound:
- **Gold Star Memorial Bridge (I-95) and Amtrak's Thames River Bridge, New London to Groton** (41.34, -72.09; the brief's).
- **Bridgeport & Port Jefferson Ferry**, Bridgeport terminal (41.17, -73.18). The Long Island end (Port Jefferson, `PTJF`) is already a NY town.
- **Cross Sound Ferry**, New London terminal (41.35, -72.09) and Orient Point terminal (41.16, -72.31). Orient Point has no NY place, so a second point sits at the Suffolk end.

Left out on purpose: the Rocky Hill-Glastonbury Ferry, the Bulls Bridge and West Cornwall covered bridges, and the Merritt Parkway and Cos Cob bridges (no corridor needs them).

## Biomes

- `wooded`: Litchfield (the Litchfield Hills), Tolland, Windham (the Quiet Corner), Middlesex (Cockaponset State Forest and the Connecticut River valley's wooded east bank) and New London (Pachaug and the eastern uplands). NY's neighbours Putnam, Rockland, Orange, Columbia and Washington are also `wooded`.
- Not listed (farmland): Fairfield, New Haven and Hartford (suburban and valley farmland, like Westchester, Nassau and Essex NJ). No `forest` (nothing like the Pine Barrens or the Adirondacks) and no `dry`.

## Levels (3)

1. **Fairfield, New Haven & the Gold Coast** (`shore`: BPCT, NHVN, TRCT): 80 passengers; connect Bridgeport and New Haven (the New Haven Line and I-95); own 3 counties (the start area, as NJ's first level).
2. **Hartford & the Connecticut Valley** (`valley`: HTFD, MDTW, VNCT): 200 passengers; connect Hartford and Middletown (I-91 and CT-9); own 6 counties.
3. **The Thames Valley & the Quiet Corner** (`east`: NLCT, WLMC): 320 passengers; connect New London and Willimantic (CT-32 and US-6); own 8 counties (every one).

Three levels, because the state has only 8 regions: NJ has 21 regions and four levels. No cargo goal (no port).

## Reachability (`NR.blockedReason`, Gentle and Tough)

Checked with a script over every CT main station and town (`/tmp/ct-work/all.js`, `reach.js`).

- Every main station reaches its neighbouring main stations in both modes, with no blocked link: Bridgeport (New Haven 16 mi, Torrington 43, Brewster 27, Yonkers 41, Poughkeepsie 52, Patchogue 30 by the ferry), New Haven (Bridgeport, Hartford 35, Torrington 36, Middletown 22), Torrington (Hartford 23, Poughkeepsie 42), Hartford (Middletown 15, Vernon 14, New London 42), Middletown (New London 33), Vernon (Willimantic 16, New London 40), New London (Willimantic 26, Patchogue 63 by the Cross Sound Ferry), Willimantic.
- Every town has an open link to a main station or town within 7-20 mi (Gentle and Tough).
- Chains, all open in both modes: I-95 / the New Haven Line Yonkers-Stamford-Norwalk-Bridgeport-Milford-New Haven-Old Saybrook-New London-Mystic; I-84 Brewster-Danbury-Waterbury-Hartford (Danbury-Waterbury uses the Rochambeau Bridge in Tough and Gentle: river `(b)` real); the Hartford Line New Haven-Meriden-Hartford; CT-8 and the Waterbury Branch New Haven-Waterbury-Torrington; CT-9 Hartford-Middletown-Old Saybrook; US-7 Danbury-New Milford-Kent Falls and Brewster-Danbury; I-395 and CT-32 New London-Norwich-Willimantic-Vernon.
- Into New York: Danbury-Brewster 7 mi, Stamford-White Plains 11, Yonkers-Stamford 21 (I-95), and the Sound crossings Bridgeport-Port Jefferson (15 mi bay, ferry), Bridgeport-Patchogue and New London-Patchogue (35 mi of bay, via the Cross Sound Ferry points) all open in both modes. Norwalk-Huntington is blocked in both modes (open Sound with no ferry between them, which is correct and matches the NY pack's own rule).
- Not covered by a real bridge (the river is crossed with a new bridge at the normal river cost; no line is blocked): Middletown to New London and Norwich (the Connecticut, 5 mi south of the Arrigoni point; the real road goes round by Old Saybrook), Bridgeport to Torrington (the Housatonic near Stevenson Dam), Poughkeepsie to Torrington (near Kent), Bridgeport to Waterbury (Housatonic at Derby, on CT-8; the Derby-Shelton Bridge is 4 mi south of this crossing).

## Checks

- `node tools/check-pack.js CT`: passed (8 stations, 18 towns, 0 city maps, 0 passes, 13 bridges), 0 errors, 0 warnings.
- `node tools/check-pack.js`: All packs passed (the Hell Gate and Triborough warnings are NY's, from earlier).
- `node tools/test-pack.js CT`: PASSED: 17 passed, 0 warnings, 0 failed (start counties Fairfield, Litchfield and New Haven; first track Bridgeport-New Haven, 18 mi).
- Screenshots (`test-out/CT/CT-arcade-light.png`): the three start stations, Hartford, Danbury and New Milford sit on land in the right places and the bridge names show along the rivers. The labels of the ferry and bridge points overlap on the coast near Bridgeport and New London.

## Unsure

- Coordinates of the Rochambeau Bridge and the Chester-Hadlyme Ferry are approximate (within about 1 mi).
- Size 4 for Fairfield and Hartford versus 3: judged against NY and NJ as above; the main agent may prefer 3 for Hartford (889k, under 900k) if the metro of 1.2 million is not counted.
- Willimantic and Rockville populations are not in the Census files.

## Main agent's review

- **Coordinates:** every station, town, scenic place and bridge checked against its real location; all within about a mile. The Cross Sound Ferry's Orient Point point moved to the terminal at the tip of the North Fork (41.16, -72.24; it was in Orient village, 3.6 mi west), and the New York pack gained an **Orient Point** town there, so the ferry has a town at each end: New London–Orient Point and Orient Point–Riverhead are open in Gentle and Tough. The Arrigoni Bridge carries CT-66 and CT-17 (state routes), not a US route.
- **Sizes** accepted: Bridgeport and Hartford 4 (Hartford's metro is 1.2 million, like Buffalo and Rochester 4), New Haven 3.
- **Checks:** `check-pack` CT passed (8 stations, 18 towns, 13 bridges), 0 errors, 0 warnings; all packs passed; `test-pack` CT passed (17 passed).
