# Rhode Island pack: notes

Files: `packs/RI/pack.js` (5 stations, 11 towns, 0 passes, 7 bridges and ferry points, 2 bays, 3 levels, biomes) and this file. Populations and coordinates are from `packs/RI/raw/` (places.json points, 2 decimals; a station's `pop` is its region's population in thousands from counties.json). Anything hand-placed is named below. Bridges, ferries and scenic places are from general knowledge (not from the data); the sources are named below. Coordinates of bridges are approximate (within about a mile).

## Region merges (phase 1)

Rhode Island has 5 counties, 1.10 million people (Census 2020). Each is a region and nothing is merged: the smallest, Bristol (50,789), is just over the 50,000 line. I found nothing wrong.

- Names ("Bristol County, Rhode Island" ... "Washington County, Rhode Island") are plain and right (ids `ri-bristol`, `ri-kent`, `ri-newport`, `ri-providence`, `ri-washington`).
- Neighbours (counties.json) match the real land borders: Providence touches Bristol (East Providence with Barrington), Kent (Cranston with Warwick) and Windham CT (Burrillville to Foster); Kent touches Providence, Washington, and Windham and New London CT (Coventry and West Greenwich); Washington touches Kent, and New London CT. Providence and Washington do not touch (Exeter and Foster only meet Kent), which is right. Massachusetts (Providence to Attleboro, Newport/Tiverton to Fall River) comes later.
- Newport County has no land neighbour in the game (its mainland part, Tiverton and Little Compton, borders Massachusetts only), so the two water links in STATES.RI are right: Bristol to Newport (the Mount Hope Bridge) and Newport to Washington (the Newport Pell and Jamestown Verrazzano bridges). Both work in the game (see Reachability). The Sakonnet River Bridge, also real, joins Tiverton to Portsmouth.
- Every place sits in its own county (the checker confirms; nothing was nudged).

## Start

`start: ri-providence, ri-kent, ri-bristol`. Providence (661k) is the biggest region, and Kent and Bristol both touch it (they do not touch each other, so the checker's "each next to an earlier one" is met). Main stations: Providence metro, Warwick coast, Bristol coast: two types. The pack test's first track is Providence to Warwick (8 mi straight, 10 mi by track: the Northeast Corridor and I-95) and 24 passengers arrived in the test week. The game prefers a pair that includes the first start station and different types, nearest first: Warwick (8.3 mi) comes before Bristol (12.4 mi).

## Main stations (5, one per region)

IDs are unique across every `packs/*/pack.js` (the checker confirms; PVD, WRWK, NWRI, BRRI, WKRI were free; NWPT and WKFD are taken by Oregon and Nebraska).

| Id | Station | Region (pop k) | Type | Size | Notes |
| --- | --- | --- | --- | --- | --- |
| PVD | Providence | Providence (661) | metro | 4 | the capital and the biggest city (190,931); Census point (0.5 km from the station) |
| WRWK | Warwick | Kent (170) | coast | 2 | Rhode Island T. F. Green International Airport; Census point |
| BRRI | Bristol | Bristol (51) | coast | 1 | the town centre (Hope Street and the Common), not in the Census files |
| NWRI | Newport | Newport (86) | coast | 2 | scenic (mansions and the Cliff Walk); downtown at the harbour |
| WKRI | Wakefield | Washington (130) | farm | 2 | Wakefield-Peace Dale CDP point (South Kingstown) |

Judgment calls:

- **Sizes** (PACKS.md guide, judged against CT and NJ): Providence 4 (661k is in the 500k-2.5M band; metro of 1.6 million; Hartford, 889k, is 4 as the capital and a metro of 1.2 million). Warwick 2 (170k, the 60,000-300,000 band; I did not take 3 because the region is under 350k, as for New London, 265k, in the CT pack; the airport is the reason it is a main station in the game's terms, not a bigger size). Newport 2 (86k, the brief's call: the tourist city; the same band as Warwick). Wakefield 2 (130k: it sits between Windham CT's 117k, size 1, and Tolland's 151k, size 2; I took 2 so that it is not smaller than Newport, which has fewer people). Bristol 1 (51k, rural by the guide).
- **Warwick** is the biggest place of Kent (82,829); West Warwick (about 31,000) is a town.
- **Bristol** (the town, about 22,500) rather than Barrington (about 17,000, a town here) or Warren (about 11,000): the biggest town of the county and the Mount Hope Bridge crossing. The Census files list only cities and CDPs, and none of the three is in them, so the point is hand-placed at the Common on Hope Street (41.68, -71.27).
- **Wakefield**, not Westerly or Narragansett: South Kingstown (31,931 in 2020, the biggest town of the county) has its seat and shops in Wakefield, near the University of Rhode Island and Kingston Amtrak station; it is central between Warwick (18 mi), North Kingstown (9 mi) and Westerly (17 mi). Westerly (23,359) is the biggest Census place of the county but sits in the far corner by Connecticut, so it is a town. Narragansett Pier (the Towers, the beaches) is only 2 mi from Wakefield (the checker warns under 4), so it is left out.
- **Types**: Providence metro; Warwick coast (39 miles of Narragansett Bay shore; this also gives the start two types and the first track riders); Bristol and Newport coast; Wakefield farm (South County's farms, the university and the mill villages, with the beaches in the towns). Not mountain or desert.
- **Airport**: Warwick only (T. F. Green, about 3.7 million passengers a year in 2023, the state's only airline airport; the bar of Albany, 2.7 million, and Hartford's Bradley, 6 million, in the other packs). **Port**: none. ProvPort (Providence) and Davisville/Quonset (North Kingstown, a car-import port) are small, not container ports (the Newark and Buffalo bar). So the levels have no cargo goal.
- **Scenic station**: Newport (the Gilded Age mansions, The Preservation Society of Newport County; the Cliff Walk, a National Recreation Trail; the International Tennis Hall of Fame).

## Towns (11)

Spread out: the checker finds none under 4 miles apart. Populations are from places.json where the place is a city; Rhode Island's towns are county subdivisions, so the others are CDPs or towns with no population in the files (as in CT and NJ), with approximate 2020 figures from the Census in the comments.

| Region | Towns |
| --- | --- |
| Providence | Pawtucket, Cranston, Woonsocket |
| Kent | West Warwick |
| Bristol | Barrington |
| Newport | Portsmouth, Tiverton |
| Washington | Westerly, Watch Hill (scenic), Block Island (scenic), North Kingstown |

- Sizes: all 1. Cranston (82,930) and Pawtucket (75,608) are under the 90,000 line I used for size 2 in the CT pack (Norwalk 91k and Danbury 86k are 2 there: Cranston is close, but it is a suburb of the size-4 city).
- Not used because they are under 4 miles from a station or another town: East Providence (47,131, 3 mi from Providence), Central Falls (22,582, 1 mi from Pawtucket), Narragansett (2 mi from Wakefield), Jamestown and Middletown (3 mi from Newport), East Greenwich (3.5 mi from Warwick). Coventry and Scituate are small and rural.
- **Portsmouth and Tiverton** are towns on Aquidneck Island and the mainland shore of Newport County; Tiverton is the part of the county by Massachusetts. Both Census points are used (Newport East and Melville are off the map or too close).
- **North Kingstown** (27,732; Wickford and Quonset Point): the way from Newport over the Jamestown Verrazzano Bridge to South County. The point (41.57, -71.45) is Wickford village. Without it the Newport to Wakefield line does not meet a real bridge on the West Passage in Tough.
- Types: Pawtucket and Cranston and West Warwick metro; Woonsocket, Portsmouth and Tiverton farm (the Blackstone Valley and the farms of the islands); Barrington, Westerly, Watch Hill, Block Island and North Kingstown coast.

Scenic places (all well known; sources: the institutions' own pages, NPS, RI DEM, not Census):
- **Watch Hill** (Westerly CDP, 41.32, -71.85): the Flying Horse Carousel (about 1883, the oldest in the country, a National Historic Landmark; Watch Hill Lighthouse, 1856).
- **Block Island** (New Shoreham): Old Harbor (the ferry landing, 41.17, -71.56), the Mohegan Bluffs and the Southeast Light (a National Historic Landmark; the island is a Nature Conservancy "Last Great Place"). It is part of Washington County and is drawn on the map as an island of the county (a ring south of the mainland). The brief's "ferry from Point Judith" is the Block Island Ferry from the Galilee State Pier.
- **Newport** (a scenic main station): above.
- Not used: Narragansett (the Towers, Narragansett Town Beach; 2 mi from Wakefield) and Point Judith Light (it lies outside the map's simplified outline by about 3 mi).

## Passes: none

Rhode Island has no mountains (the highest point, Jerimoth Hill, is 812 ft; the grid shows flat and a little hills), and the brief says none. The checker would warn about a pass with no mountains nearby.

## Bridges and ferries (7)

Real, well known and on the main routes. The map has no rivers in Rhode Island, so no river costs apply; the points make the bay crossings cheap and allowed. Their coordinates are approximate (to about a mile) and the checker finds each within 3 miles of the coast or a bay.

- **Washington Bridge** (I-195, Providence to East Providence over the Seekonk River), 41.81, -71.38. The Seekonk is too narrow for the map: the map has Providence and East Providence as one piece of land, so no water is drawn there. The point is kept (the brief names it) and does cheaply what the game allows for the line from Providence to Bristol across the bay's head.
- **Mount Hope Bridge** (RI-114, 1929, Bristol to Portsmouth), 41.64, -71.27.
- **Sakonnet River Bridge** (RI-24, 2012, Tiverton to Portsmouth; replacing the Stone Bridge), 41.62, -71.21.
- **Claiborne Pell Newport Bridge** (RI-138, 1969, Newport to Jamestown, the East Passage), 41.51, -71.35.
- **Jamestown Verrazzano Bridge** (RI-138, 1992, Jamestown to North Kingstown, the West Passage), 41.55, -71.41.
- **Block Island Ferry**, Galilee State Pier (Narragansett), 41.38, -71.51 and Old Harbor (New Shoreham), 41.17, -71.55: the route is named as one ferry (two points, as for the Cross Sound Ferry in CT).
- The Connecticut crossings (the Pawcatuck River at Westerly) are not on the map as a river, so nothing is listed. The Amtrak line and US-1 cross it, and the CT pack lists none there; the link to Connecticut works without it (below).

## Bays (2)

Only the water counts: land inside an outline is ignored by the game, so the rings are generous on the land side. Elsewhere sea between two coastal stations just means the track follows the coast.
- **Narragansett Bay**, one ring for the Bay with its East and West Passages and the Providence River, Mount Hope Bay and the Sakonnet River; closed at the mouth at Newport and Point Judith (lat 41.435-41.455) and at the Sakonnet's mouth (lat 41.47), so the open Atlantic outside is only coast.
- **Block Island Sound**: the 13 miles of open sea between Point Judith and Block Island (the ferry is the only way over).

## Reachability (NR.blockedReason, Gentle and Tough)

Checked for every pair of places within 30 miles (script in /tmp/ri-work). Every station and town has at least 3 open links in both modes.
- **Open in both modes**: Providence to Warwick (I-95 and the Northeast Corridor), Warwick to Wakefield (US-1, 18 mi, with a 1 mi new bridge over Greenwich Bay, allowed in Tough), Wakefield to Westerly, Westerly to New London CT (14.6 mi), Providence to Bristol (12 mi, over the head of the bay by the Washington Bridge: 0.5 mi of new bridge), Providence to Woonsocket, Woonsocket to Putnam CT (22 mi, US-44 and RI-146), Providence to Putnam and Willimantic CT (I-395 and US-6), Wakefield to Mystic CT (24.6 mi), Providence to Norwich CT (40 mi).
- **Newport** is open from Bristol (13 mi, down the west shore of Aquidneck Island with the Mount Hope Bridge) and from Wakefield (10 mi, over the Pell Bridge) in both modes. It is also open from Warwick, North Kingstown (9 mi, Pell Bridge) and Portsmouth. Block Island is open from Wakefield and Newport (the ferry) in both modes.
- **Blocked in Tough (open water, no bridge)**: Warwick to Bristol (3 mi of bay), Warwick to Barrington, Bristol to West Warwick, Bristol to North Kingstown, Barrington to North Kingstown (8 mi, blocked in Gentle too), Portsmouth to West Warwick, Block Island to Westerly, Watch Hill and Mystic (no ferry). The players go around by Providence, as the roads do.
- Because a bridge point lets any line crossing water near it through, whatever the width, a few long lines across the Bay (Providence to Newport, 23 mi) are open when they pass a real bridge within 3 mi: that is the game's rule.

## Biomes

`wooded`: Providence, Kent and Washington (the forests of the west: Scituate, Burrillville, West Greenwich, Arcadia and the Pawcatuck country; following CT's wooded Windham, New London and Tolland). Bristol and Newport are not listed (farmland: the East Bay and the islands). No forest and no dry.

## Levels (3)

1. **Providence & the Head of the Bay** (area `bay`: Providence, Warwick, Bristol: the start): 60 passengers, connect Providence and Warwick, own 3 counties.
2. **Newport & the Islands** (area `islands`: Newport): 140 passengers, connect Bristol and Newport (the Mount Hope Bridge), own 4 counties.
3. **South County** (area `south`: Wakefield): 240 passengers, connect Newport and Wakefield (the Pell and Jamestown bridges), own 5 counties.
No cargo goal (no container port, see above).

## Checks

`node tools/check-pack.js RI`: 0 errors, 0 warnings. `node tools/check-pack.js`: All packs passed. `node tools/test-pack.js RI`: PASSED (17 passed, 0 warnings, 0 failed). Screenshots (`test-out/RI/`): Providence, Warwick and Bristol sit apart and in their places; the Bay is shown as water between Kent and the Bristol peninsula and Aquidneck Island with the bridge labels; Newport sits on the island.

## For the main agent

- Nothing to change in the merges.
- The Block Island and Block Island Sound pieces are my addition (the brief said "if you want"): drop the town, the two ferry points and the second bay together if you prefer not to have them.
- The Mount Hope and Sakonnet bridge labels overlap on the map at the default zoom (the points are 3 mi apart); the Newport Pell and Jamestown Verrazzano labels too. The checker does not mind.

## Main agent's review

- **Coordinates:** every station, town, scenic place and bridge or ferry point checked against its real location; all within about a mile.
- **Kept:** Block Island (the town, the two ferry points and the Block Island Sound bay): it is part of Washington County on the map and a well-known place.
- **Long lines across the Bay** (Providence–Newport) are open because a bridge point lets any line near it cross: the game's rule everywhere, accepted.
- **Checks:** `check-pack` RI passed (5 stations, 11 towns, 7 bridges), 0 errors, 0 warnings; all packs passed; `test-pack` RI passed (17 passed).
