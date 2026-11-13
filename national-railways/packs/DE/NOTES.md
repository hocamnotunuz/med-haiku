# Delaware pack notes

## Region merges (phase 1)

3 counties become 3 regions (`STATES.DE` in `tools/build-map.js`, empty `merge`; regions in `raw/counties.json`). All three are over 50,000, so none is merged, which follows the rule.

| Region | Population | Verdict |
|---|---|---|
| New Castle | 571k | Alone, fine. |
| Kent | 182k | Alone, fine. |
| Sussex | 237k | Alone, fine. |

Neighbours checked against the map and `counties.json`: New Castle touches Kent, Cecil and Kent-Queen Anne's (MD); Kent touches New Castle, Sussex and the two Upper/Mid-Shore regions; Sussex touches Kent, Mid-Shore, Somerset-Wicomico and Worcester. Nothing is missing, no place is in the wrong region, and the names are plain. No merge is wrong. Remark: the map draws no rivers or lakes in Delaware, so the Chesapeake and Delaware Canal does not show; the Delaware River and Bay are water outside the land and are handled by a `bays` polygon (below).

## Start

`start: ["de-new-castle", "de-kent", "de-sussex"]`, the whole state. New Castle (biggest) touches only Kent, and Sussex touches only Kent, so "the biggest plus two neighbours that touch it" would be New Castle and Kent only; with just 3 regions I took all three (each next to an earlier one, so the checker's chain rule holds). Types: Wilmington metro, Dover and Georgetown farm (two types). The pack test lays Wilmington to Dover (46 mi, metro to farm), 13 passengers in the first week. The test warns "no county can be bought next to the start": fine, since the start covers the whole state (Maryland opens once all of Delaware is owned).

## Stations (3, one per region)

- pop = region population in thousands from `raw/counties.json`; coordinates are the Census points from `raw/places.json` (Wilmington 39.74, -75.53; Dover 39.16, -75.52; Georgetown 38.69, -75.39). Wilmington's point is about 1 mi from the downtown Amtrak station: not moved.
- **Wilmington**, metro, size 3 (571k; guide 350-900k; the Delaware end of the Philadelphia metro; Amtrak Northeast Corridor, I-95). **Dover**, farm, size 2 (the capital, 182k; Maryland's Salisbury is farm size 2 at 128k, Towson is 3 at 855k). **Georgetown**, farm, size 2 (237k).
- **Sussex: Georgetown, not the biggest town.** Milford (11,185) is the biggest but on the Kent line, 21 mi from Dover; Seaford (7,946) is at the west edge. Georgetown (7,141) is the county seat in the middle (US-113, DE-404), 15-17 mi from Milford and Rehoboth. Milford and Seaford are towns. Typed farm (inland); the beach side is carried by the coast towns Lewes and Rehoboth Beach.
- **Port of Wilmington** on Wilmington: a real, state-owned port (cars, fruit, bananas, bulk) on the Christina and Delaware rivers; smaller than Baltimore's, but the packs give ports to size-3 regions like Mobile and Hueneme (and Alaska's smaller ports), so it stays. Source: general knowledge (Diamond State Port Corporation). No airport: New Castle Airport is small and Philadelphia's airport comes with Pennsylvania.
- Ids (unique across every `packs/*/pack.js`, checked): WLDE, DVDE, GTDE; towns NWRK, MDTD, WTHR, SMYD, BOHK, MLFD, SEAF, LWDE, RHBE.

## Towns (9, 3 per region) and scenic places

Newark (30,619, University of Delaware), Middletown (23,196), Smyrna (12,880), Milford (11,185), Seaford (7,946): the biggest next towns, from `raw/places.json`. Elsmere (6,234) and New Castle (5,549) are only 2 and 5 mi from Wilmington, Millsboro (6,899), Georgetown's neighbour, was left out to keep the number small (the brief asks for 6 to 9). Scenic (`scenic: true`), all real and well known:
- **Winterthur** (39.81, -75.60): the Winterthur Museum, Garden & Library, the du Pont estate in the Brandywine Valley (not in places.json; point from general knowledge, inside New Castle).
- **Bombay Hook** (39.26, -75.46): Bombay Hook National Wildlife Refuge, the salt marsh on Delaware Bay (U.S. Fish & Wildlife Service; visitor center point, inside Kent).
- **Lewes** (38.78, -75.14, the Census point): the "First Town in the First State", Cape Henlopen State Park and the Cape May ferry terminal. Cape Henlopen is not a separate town (2.7 mi away).
- **Rehoboth Beach** (38.72, -75.08, the Census point): the "Nation's Summer Capital", Boardwalk and beaches.
- Not added: Fort Delaware (on Pea Patch Island in the river, which the map has no land for), Bethany Beach (kept to 9 towns).
- All places are at least 5 mi apart (Lewes to Rehoboth Beach is the closest, 5 mi). No nudges were needed; the checker has 0 warnings.

## Passes, bridges, water

- **Passes: none.** Delaware is flat (highest point 448 ft).
- **Bridges** (the map draws no rivers or lakes in Delaware, so no inland bridges are needed): the **Delaware Memorial Bridge** (I-295, New Castle to Deepwater, New Jersey; 39.69, -75.52, Wikipedia: 39 41' N 75 31' W) and the **Cape May-Lewes Ferry** (the Lewes terminal at 38.79, -75.12; Delaware River and Bay Authority), so New Jersey's track can cross later. Chesapeake and Delaware Canal bridges (Summit, St. Georges, Reedy Point) are not added: the canal is not on the map.
- **Bays: Delaware Bay**, one polygon from the Memorial Bridge down the river and bay to the mouth between Cape Henlopen and Cape May. The west edge is built from Delaware's coast in `map.js` (first water east of the land, +0.012 deg, every 0.03 deg of latitude, checked in code so no vertex is on land); the New Jersey shore (east edge) is approximate from general knowledge and kept a little inside the water, so any overlap with New Jersey's land would be harmless (land inside a bay still counts as land) and New Jersey can adjust it. The Rehoboth and Indian River bays are left out (small, nothing real blocked).

## Biomes

wooded: Sussex (the pine woods and the Great Cypress Swamp, as Maryland's Somerset-Wicomico Lower Shore is wooded next door; Worcester next door is forest, but Sussex is mostly farms with woods, so wooded). Not listed (farmland): New Castle and Kent. No forest, no dry.

## Levels (3)

1. Wilmington & New Castle County (`newcastle`): 40 passengers, 10 containers (the Port of Wilmington).
2. Dover & Kent County (`kent`): 100 passengers, connect Wilmington and Dover, 2 counties.
3. Sussex County & the Beaches (`sussex`): 160 passengers, connect Dover and Georgetown, 3 counties.

Only 3 regions, so one level each (areas open additively, so the connect goals span earlier levels).

## Reachability (NR.blockedReason, loaded as check-pack does plus js/geography.js; script in /tmp/de-work/reach.js)

- Gentle: open for every pair checked (all within 45 mi): Wilmington-Dover, Dover-Georgetown, and each town to its neighbours (Newark, Middletown, Winterthur, Smyrna, Bombay Hook, Milford, Seaford, Lewes, Rehoboth Beach). Links into MD, all open: Wilmington-Elkton (I-95/US-40) and Newark-Elkton, Wilmington-North East and Aberdeen, Middletown-Elkton (US-301 to Chestertown), Dover-Chestertown, Dover-Easton and Denton (US-50/404 side), Georgetown-Salisbury (US-13), Georgetown-Ocean City and Berlin (US-113/DE-404), Georgetown-Easton, Seaford-Salisbury, Lewes and Rehoboth Beach-Ocean City.
- Tough: the same, except **Wilmington-Dover (40 mi direct) is blocked** (3 mi across Delaware Bay is too wide for a new bridge) and Wilmington-Smyrna, which cut across the Delaware River's wide west bulge near Reedy Point and Artificial Island: that is real water (the line is over the river, and US-13 bends inland). The chain works in both modes through Middletown: Wilmington-Middletown (23 mi), Middletown-Dover (22 mi) and Middletown-Smyrna-Dover. In Gentle the direct line is allowed (the first track, 46 mi, and the pack test use it). Dover-Aberdeen in Tough is blocked over the Chesapeake Bay (4 mi); that is a Maryland pair (Aberdeen is in MD, not a Delaware link). Other Maryland corridors: I-95 Baltimore, Aberdeen, Elkton, Wilmington (via Newark and Elkton: open); US-13 Salisbury, Georgetown, Dover.
- Every main station reaches both its main neighbours in Gentle; in Tough Wilmington reaches Dover through Middletown, and Dover and Georgetown reach each other directly (33 mi) and Georgetown reaches Salisbury, Ocean City and Easton.
- Delaware Bay's northern end (the Memorial Bridge) and mouth (the ferry) have no Delaware-side link beyond the two bridge points: New Jersey comes later.

## Checks

`node tools/check-pack.js DE`: 0 errors, 0 warnings. `node tools/check-pack.js`: all packs passed. `node tools/test-pack.js DE`: PASSED, 16 passed, 1 warning (the whole state is the start), 0 failed. The screenshot `test-out/DE/DE-arcade-light.png` shows Wilmington, Dover and Georgetown on the right spots, and the Delaware Memorial Bridge and Cape May-Lewes Ferry labels on the bay.

## Main agent's review

- **Coordinates:** every station, town, scenic place and both bridge points checked against their real locations; all within about a mile.
- **Wilmington–Dover in Tough:** the straight line runs over the Delaware River's real bulge at Port Penn and Augustine Beach (the shore there lies west of both cities), so it is blocked in Tough; the chain through Middletown is open, as the real railway runs inland. Accepted.
- **Start = the whole state:** Sussex touches only Kent, so the three regions are the start (as in Prince Edward Island's pack); the test's warning that no county can be bought next to the start is expected, and the player grows into Maryland, Pennsylvania and New Jersey.
- **Checks:** `check-pack` DE passed (3 stations, 9 towns, 2 bridges), 0 errors, 0 warnings; all packs passed; `test-pack` DE passed (16 passed, 1 expected warning).
