# Massachusetts pack: notes

Files: `packs/MA/pack.js` (12 stations, 30 towns, 2 passes, 17 bridges and ferries, 2 bays, 4 levels, biomes) and this file. Populations and coordinates are from `packs/MA/raw/` (places.json points, 2 decimals; a station's `pop` is its region's population in thousands from counties.json). Anything hand-placed is named below. Geography, bridges, ferries and passes are from general knowledge (not from the data); the bridge and pass coordinates are approximate (about 1 mile), as said below.

## Region merges (phase 1)

Massachusetts has 14 counties (7.03 million) and 12 regions on the map. Every county is over 50,000 except the islands: Dukes (Martha's Vineyard, 21k) is merged with Barnstable (229k, which is not small itself) and Nantucket (14k, no land neighbour) is joined to them: Cape Cod and the Islands (264k, `ma-barnstable-dukes-nantucket`). The other 11 counties are regions, the smallest being Franklin (71k). I found nothing clearly wrong.

- The island merge is the one exception to "small counties join up to 2 small neighbours that share a border": the islands share no land border with anything, and the Cape is the only mainland they have any link to (the Woods Hole and Hyannis ferries). It is right and is the only sensible grouping. The id is long but fine; the name "Cape Cod and the Islands, Massachusetts" is plain and right.
- Neighbours (counties.json) match the real borders: Suffolk touches Essex (Revere to Lynn), Middlesex and Norfolk; Essex touches Middlesex and Suffolk (New Hampshire comes later); Middlesex touches Essex, Norfolk, Suffolk and Worcester; Norfolk touches Bristol, Middlesex, Plymouth, Suffolk, Worcester and Rhode Island's Providence; Plymouth touches Barnstable (only at the Cape Cod Canal), Bristol and Norfolk; Bristol touches Norfolk, Plymouth and Rhode Island's Bristol, Newport (Fall River to Tiverton) and Providence; Worcester touches Connecticut's Tolland and Windham, Rhode Island's Providence and the five Massachusetts regions around it; Hampden touches Connecticut's Hartford, Litchfield and Tolland; Berkshire touches Connecticut's Litchfield and New York's Columbia, Dutchess and Rensselaer (Vermont comes later); Franklin touches Berkshire, Hampshire and Worcester (not Hampden: right; Vermont and New Hampshire come later).
- Every place sits in its own region (the checker confirms); only Provincetown (the tip of the Cape) needed a nudge of 0.01 degrees west.

## Start

`start: ma-suffolk, ma-middlesex, ma-norfolk`. Suffolk is Boston; Middlesex (1.63 million) is the biggest region and Norfolk is the South Shore; all three touch each other. The main stations are Boston (metro), Lowell (metro) and Quincy (coast): two types. The pack test's first track is Boston to Quincy (7 mi straight, 8 mi by track; the Red Line and I-93) and passengers arrive (15 to 19 in the test week).

## Main stations (12, one per region)

IDs are unique across every `packs/*/pack.js` (checked by `check-pack`; the first choices QNCY, SPFD, NHMP, GRNF and others were taken, so SPMA, NHMA, GFMA, QNMA are used).

| Id | Station | Region (pop k) | Type | Size | Notes |
| --- | --- | --- | --- | --- | --- |
| BOS | Boston | Suffolk (801) | metro | 5 | port (Conley Terminal), airport (Logan), scenic (Freedom Trail); South Station point, 3.5 km from the Census point |
| LWL | Lowell | Middlesex (1632) | metro | 4 | Census point; Cambridge left out (below) |
| QNMA | Quincy | Norfolk (726) | coast | 3 | Census point |
| LYNN | Lynn | Essex (810) | coast | 3 | downtown point, 2 km from the Census point |
| BKTN | Brockton | Plymouth (531) | metro | 3 | Census point |
| NBMA | New Bedford | Bristol (579) | coast | 3 | downtown point, 2.8 km from the Census point |
| HYN | Hyannis | Cape Cod and the Islands (264) | coast | 2 | a village (a CDP, not in places.json) |
| WORC | Worcester | Worcester (862) | metro | 3 | Census point |
| SPMA | Springfield | Hampden (466) | metro | 3 | downtown point, 4 km from the Census point |
| NHMA | Northampton | Hampshire (162) | farm | 2 | downtown point, 3 km from the Census point |
| GFMA | Greenfield | Franklin (71) | farm | 1 | downtown point, 3 km from the Census point |
| PTFD | Pittsfield | Berkshire (129) | mountain | 2 | Census point, 1.1 km from Park Square |

Judgment calls:

- **Middlesex: Lowell, not Cambridge or Framingham.** Cambridge (118,395) is the biggest city of the county but its downtown (Harvard Square) is 3.4 mi from Boston's, one built-up area on the map: two main stations there would overlap (the checker warns under 4 miles) and the first track would be a 3-mile hop. Lowell (115,553, the next biggest) is 24 mi north on the Merrimack, with its own mill-city identity and rail line, and spreads the map. Cambridge is left out, not made a town, for the same spacing reason (it would be 3.4 mi from Boston). Framingham (72,377) is a size 2 town. Lowell is size 4 like Fairfield CT and Westchester NY, because the region is 1.63 million (the biggest in the pack and the 5th biggest region in the whole game); Boston alone is 5.
- **Sizes** (PACKS.md guide, judged against CT, NJ, NY): Boston 5 (the core of a metro of 4.9 million, like Philadelphia and Washington). Middlesex 4. **Worcester 3, not 4**: the region is 862k, under the 900k top of the size-3 band, the same as New Haven CT (852k) and Montgomery PA (857k) and only 6% above Essex (810k), which is 3; Bergen NJ (956k) and Hartford (889k, the capital with a 1.2 million metro) are 4 because they are bigger or part of a bigger metro. Worcester is the biggest city (206k) of any size-3 region, so I would not object to a 4 (the main agent decides). Essex, Norfolk, Bristol, Plymouth and Hampden 3 (810k, 726k, 579k, 531k and 466k: all in the 350k-900k band). Cape Cod and the Islands 2 (264k, in the 60k-300k band, though the summer population is many times that), Hampshire 2 (162k), Berkshire 2 (129k), Franklin 1 (71k, the rural convention: Windham CT 117k and Bristol RI 51k are 1).
- **Quincy, not Dedham**, for Norfolk: Quincy (101,614) is the biggest place and on the Red Line, I-93 and Quincy Bay; Dedham (the seat, about 25,000) is a town (DDHM). Typed coast so the start has two types.
- **Lynn, not Lawrence or Salem**, for Essex: Lynn (101,264) is the biggest city; Lawrence (89,149) is the Merrimack town LWMA (size 2) and Salem a scenic town. Lynn and Salem use downtown points (Lynn station 42.46,-70.95; Salem 42.52,-70.90) so that they are 4.9 mi apart (the Census points are 3.6 mi apart).
- **Brockton, not Plymouth**, for Plymouth County: Brockton (105,659) is the biggest city; Plymouth (about 61,000) is a CDP with no population in the files and a scenic town (Plymouth Rock, the Mayflower II).
- **New Bedford, not Fall River**, for Bristol: New Bedford (101,088) is a little bigger than Fall River (93,984); Fall River is on the Rhode Island line and is a size 2 scenic town (Battleship Cove). The Port of New Bedford is the top fishing port of the country by value but is not a container port, so no `port`.
- **Hyannis, not Barnstable**: places.json has "Barnstable Town" (48,914, the town as a whole, Census point 41.66,-70.36) but no village; Hyannis is the commercial and transport centre of the Cape (the Transportation Center, the Cape Cod Central Railroad, the airport and the Nantucket and Vineyard ferries) and the main-station point is its centre (41.65,-70.28), not the Census point of the whole town. Not in the files: from general knowledge.
- **Northampton, not Amherst**, for Hampshire: Amherst (39,263) is a little bigger than Northampton (29,573) but Northampton is the brief's choice, the county seat, on I-91 and the Connecticut, and the Amtrak (Vermonter) stop; Amherst (UMass) is a town (AMMA, 8 mi east). Typed farm (the valley farms).
- **Types**: Boston and Lowell, Brockton, Worcester and Springfield metro; Quincy, Lynn, New Bedford and Hyannis coast; Northampton and Greenfield farm; Pittsfield mountain (the Berkshires). Hampden's Springfield is metro though the valley is farmland, as Hartford.
- **Port**: Boston only (the Conley Container Terminal is the one container port of New England; Massport). Fishing and cargo harbours (New Bedford, Gloucester, Fall River's Battleship Cove, Salem) are not container ports (the Newark and Buffalo bar used in the other packs). **Airport**: Boston Logan only (about 42 million passengers a year before 2020: a big airport by the bar of Albany, Syracuse and Rochester in NY and Bradley in CT). Worcester Regional, Hyannis's Cape Cod Gateway, Springfield's Barnes and Pittsfield are small. Springfield is served by Bradley, which is Hartford's station in the Connecticut pack.
- **Scenic stations**: Boston only (the Freedom Trail, Fenway, Harvard and the harbour). Lowell National Historical Park, Springfield's Basketball Hall of Fame and the Armory and Northampton's Smith College are well known but left unflagged, to keep the scenic places to the real tourist destinations (below).

## Towns (30)

About 1.5 per region (18) plus 14 scenic places: the next-biggest real towns, spread out (the checker finds none under 4 miles apart).

| Region | Towns |
| --- | --- |
| Suffolk | Revere |
| Middlesex | Framingham (size 2), Lexington (scenic), Concord (scenic) |
| Essex | Lawrence (size 2), Haverhill, Salem (scenic), Gloucester (scenic), Newburyport |
| Norfolk | Dedham, Weymouth, Franklin |
| Plymouth | Plymouth (scenic), Bridgewater |
| Bristol | Fall River (size 2, scenic), Taunton, Attleboro |
| Hampden | Holyoke, Westfield |
| Hampshire | Amherst |
| Franklin | Shelburne Falls (scenic) |
| Berkshire | North Adams (scenic), Lenox (scenic), Great Barrington |
| Worcester | Fitchburg, Sturbridge (scenic) |
| Cape Cod and the Islands | Provincetown (scenic), Woods Hole, Oak Bluffs (scenic), Nantucket (scenic) |

Populations are the Census figures (places.json) where the place is a city or "Town" (Weymouth 57,442, Franklin 33,272, Amherst 39,263, Bridgewater 28,624 are Census "Town" places); the others are CDPs or villages with no population in the files, so the comments give approximate figures (general knowledge, rounded). The sizes follow NJ and CT (cities of 90,000-135,000 are 2 or 3; the rest 1).

Left out on purpose: Cambridge (3.4 mi from Boston, above); Somerville, Chelsea, Malden, Medford, Everett, Newton, Waltham and Brookline (inside the Boston built-up area, under 7 mi from Boston, no spacing); Beverly (4.7 mi from Salem); Rockport (3.5 mi from Gloucester: Cape Ann is Gloucester); Peabody; Braintree (3 mi from Quincy); Chicopee (3.4 mi from Holyoke and 5 mi from Springfield: Holyoke is the better known); Leominster (6 mi from Fitchburg); Southbridge (3.8 mi from Sturbridge); Barnstable, Falmouth and Edgartown (covered by Hyannis, Woods Hole and Oak Bluffs); Stockbridge (6 mi from Lenox); Mount Greylock (5 mi from North Adams); Walden Pond (1.5 mi from Concord's centre: part of Concord); the Cape Cod National Seashore (covered by Provincetown, whose Race Point and Herring Cove beaches are in it, and the Cape's spine, Hyannis to Provincetown, which the game draws as one coast line); Old Sturbridge Village is Sturbridge.

Points: Census points, except where a comment in the pack says that downtown or the real place was used (Boston, Lynn, Salem, Gloucester, New Bedford, Springfield, Northampton, Greenfield, Fall River, Holyoke, Westfield, Framingham, Revere). Concord, Hyannis and a few other places are not in places.json: the points are from general knowledge (the town centre).

Scenic places (all well known; sources: NPS, MassWildlife, the institutions' own pages, not Census):
- **Lexington** (the Battle Green, April 19, 1775) and **Concord** (the North Bridge, Walden Pond, Orchard House): both are part of Minute Man National Historical Park (NPS).
- **Salem**: the witch trials of 1692 and the Salem Maritime National Historic Site (NPS, established 1938, the first National Historic Site).
- **Gloucester**: "America's oldest seaport" (1623), the Fishermen's Memorial and Rocky Neck, Cape Ann.
- **Plymouth**: Plymouth Rock, the Mayflower II and Plimoth Patuxet Museums (1620).
- **Fall River**: Battleship Cove (USS Massachusetts and the largest collection of preserved warships in the world; Battleship Cove).
- **Shelburne Falls**: the Bridge of Flowers (1929) and the Glacial Potholes on the Mohawk Trail (Shelburne Falls Area Women's Club; DCR).
- **North Adams**: MASS MoCA (opened 1999, one of the biggest contemporary art museums in the US) and the Mohawk Trail (the first scenic road of New England, 1914); Mount Greylock (3,489 ft, the highest point of the state, Mount Greylock State Reservation, DCR) is 5 mi south.
- **Lenox**: Tanglewood, the summer home of the Boston Symphony Orchestra since 1937 (BSO).
- **Sturbridge**: Old Sturbridge Village (1946, the largest living-history museum in the Northeast; osv.org).
- **Provincetown**: the Pilgrim Monument (1910) and the first landing of the Mayflower (1620), with the Cape Cod National Seashore's Race Point and Herring Cove beaches (NPS). The Census point (42.06,-70.18) was just outside the map's simplified outline, so the point was nudged to 42.05,-70.19.
- **Oak Bluffs** (Martha's Vineyard): the Camp Meeting Association's gingerbread cottages and the Flying Horses Carousel (1876, a National Historic Landmark, the oldest operating platform carousel in the US).
- **Nantucket**: the whaling town's cobblestone Main Street and the Whaling Museum; the whole island is a National Historic Landmark district.
- Boston (the main station, above).
- Revere Beach (the first public beach in the US, 1896) and Lowell National Historical Park were considered and not flagged.

## Passes (2)

Only the Hoosac Range at North Adams is mountains on the map (about two grid cells at 42.65-42.8 N, 73.0-73.3 W: Greylock and the Hoosac and Taconic edges). The Berkshire and Taconic hills and the Pioneer Valley's traprock ridges are hills on the map, so Jacob's Ladder (US-20) was left out: the checker would warn that no mountains are within 7 mi.

- **Mohawk Trail** (MA-2 over the Hoosac Range at Whitcomb Summit, 2,173 ft, between Florida and North Adams; the first scenic road in New England, 1914): 42.68, -72.98. The summit is about 42.68, -72.98 (general knowledge; within about a mile).
- **Hoosac Tunnel** (the 4.75-mile Boston & Maine railway tunnel under the Hoosac Range from Florida to North Adams, opened 1875 after 24 years): 42.66, -73.03, the middle of its line between the portals (general knowledge; within 1-2 mi, approximate).

Both let Greenfield or Shelburne Falls to North Adams go over the range at pass price in Tough (without them it is a 2-mile tunnel; Gentle treats the 2-mile range as hills anyway). North Adams to Troy (NY) crosses 3 mi of the Taconic edge near the state line, a tunnel in Tough; Petersburg Pass (NY-2) is in New York's area and was left out.

## Bridges and ferries (17)

Real, on the map's rivers where the main lines cross them. The Census river lines are simplified (up to about a mile off) so points are nudged along the line (said below). Coordinates are from general knowledge, approximate to about 1 mile.

Connecticut River (the map draws it; Springfield, Holyoke and Northampton sit beside it):
- **Memorial Bridge** (MA-147, Springfield to West Springfield; the rail bridge beside it carries the Amtrak and CSX lines): 42.11, -72.60. Springfield-Westfield uses it.
- **Willimansett Bridge** (MA-116, Chicopee to Holyoke): 42.19, -72.61. Springfield-Holyoke and Springfield-Northampton use it.
- **Calvin Coolidge Memorial Bridge** (MA-9, Northampton to Hadley): 42.33, -72.61. Northampton-Amherst uses it.
- **Sunderland Bridge** (MA-116, Sunderland to Whately): 42.48, -72.58. The real bridge is at about 42.47, -72.59; nudged 0.6 mi to the map's river line so that Amherst-Greenfield uses it.
- **Gill-Montague Bridge** (Turners Falls to Gill): 42.6, -72.56. Greenfield-Worcester and Greenfield-Fitchburg use it.

Merrimack:
- **Lowell** (the I-495 and Lowell Connector bridges; the old Rourke and Aiken Street bridges are 2 mi west): 42.66, -71.29, nudged east onto the map's river line, where Lowell-Lawrence and Lowell-Haverhill cross.
- **Duck Bridge and the Casey Bridge** (Lawrence): 42.71, -71.16.
- **Comeau and Basiliere bridges and the Haverhill rail bridge** (Haverhill to Bradford; the Haverhill Line and the Downeaster): 42.77, -71.10 (the real bridges are 42.77, -71.08, about 1 mi east; nudged to cover the map's two nearby crossings).
- **Whittier Bridge (I-95) and the Newburyport bridges** (US-1 and the Chain Bridge): 42.84, -70.88. No line needs them yet (no station on the north bank until New Hampshire comes).

Housatonic:
- **Pittsfield** (US-20 and the Boston & Albany line cross it in the city; the map's river line runs through the station point): 42.45, -73.26. Every Pittsfield line crosses it here.
- **Great Barrington** (US-7 and MA-23): 42.19, -73.36.

Cape Cod Canal (not drawn on the map: the Cape is joined to the mainland there, so the bridges cost nothing and only mark the real crossings, as the brief asked; the Bourne Bridge point was moved 1 mi west, onto the Buzzards Bay side, to keep it within 3 mi of the map's coast):
- **Bourne Bridge** (US-6 and MA-28; 1935): 41.74, -70.62.
- **Sagamore Bridge** (US-6 and MA-3; 1935): 41.78, -70.54.

Ferries (the sounds are `bays`, so these are the only ways across):
- **Steamship Authority, Woods Hole terminal** (to Vineyard Haven and Oak Bluffs; Woods Hole station is at the terminal): 41.52, -70.67. **Oak Bluffs terminal**: 41.46, -70.56.
- **Steamship Authority and Hy-Line, Hyannis terminals** (to Nantucket, and Hy-Line to Oak Bluffs in season): 41.65, -70.28. **Nantucket, Steamboat Wharf**: 41.29, -70.10.

Left out: the Connecticut crossing between Springfield and Hartford (the map's river line crosses at Enfield, 42.04, -72.61, 7 mi from the nearest certain real crossing, in Connecticut's area; Springfield-Hartford and Springfield-Vernon pay a new river bridge); the second crossing of the line Springfield to Northampton (the map's river bends back near South Hadley; the real route stays on one bank); Haverhill to Newburyport (the Rocks Village Bridge is not certain); the Housatonic at Stockbridge (Lenox to Great Barrington); the Charles River, Boston Harbor and Mystic River bridges and tunnels (not drawn on the map); the Taunton River's Braga Bridge at Fall River (not drawn); New Bedford's Seastreak ferry to Martha's Vineyard and the Cuttyhunk ferry; the Plymouth and Boston to Provincetown seasonal ferries (below).

## Water: bays

Decided with `NR.blockedReason` in Gentle and Tough (`/tmp/ma-work/reach.js`, `pair.js`, `chains.js`).

- **Nantucket and Vineyard Sounds** (bay): without it every island link was an open coast crossing at coast price (Hyannis to Nantucket 28 mi, 24 mi "coast"). With it, Hyannis-Nantucket, Hyannis-Oak Bluffs and Woods Hole-Oak Bluffs open only through the four ferry points; Boston, Quincy and the mainland to Oak Bluffs are blocked in both modes (10 mi of sound).
- **Buzzards Bay** (bay): without it New Bedford-Hyannis and New Bedford-Brockton-style lines across the bay were open (New Bedford to Hyannis 34 mi). With it New Bedford-Hyannis (8 mi of water) and Fall River-Hyannis are blocked in Gentle and Tough: the Cape is reached from the mainland over the canal from Brockton, Plymouth or Quincy. New Bedford to Woods Hole is still open because the Woods Hole ferry point sits at that shore (the real ferries from New Bedford to Martha's Vineyard run there): a known quirk.
- **Cape Cod Bay**: no bay. Hyannis, Plymouth and Boston to Provincetown cross the bay as "coast": track follows the shore at coast price and speed, which is how the real line runs (Route 6 and the old Old Colony railroad along the Cape's arm), and Plymouth and Boston have seasonal ferries to Provincetown. A bay with Provincetown ferry points opened the same lines, and one without them blocked Hyannis to Plymouth (29 mi, a land route over the Sagamore Bridge) in Tough, so there was nothing a bay would have fixed.
- **Boston Harbor**: no bay. The harbour water between the stations is narrow and crossed by tunnels and bridges (Sumner, Callahan, Ted Williams, Tobin, Longfellow); every Boston link is open in both modes (Quincy 7 mi, Lynn 9, Revere 5, Weymouth 11, Plymouth 34).
- **Quabbin Reservoir** (a lake on the map, not a bay): blocks, correctly, the lines straight across it in Tough (Lowell, Framingham, Concord, Lexington or Fitchburg to Amherst and Northampton; Greenfield to Sturbridge) because there is no real bridge or rail line across it: the roads and the Worcester and Mass Pike lines go round it (Worcester-Springfield and Fitchburg-Greenfield are open). In Gentle nothing is blocked there (the new-bridge cap is 8 mi): lines across it just pay the lake price.
- Rivers: the Connecticut, the Merrimack and the Housatonic cost a new river bridge ($10k Gentle, $25k Tough) unless a real bridge point is within 2 mi of the crossing; see Bridges.

## Biomes

- `forest` (trees even on the flats): Plymouth County (Myles Standish State Forest, the pine barrens) and Cape Cod and the Islands (pitch pine and scrub oak), like NJ's Pine Barrens.
- `wooded`: Berkshire, Franklin, Hampshire (the Berkshires, Hoosac Range, Quabbin, the hill towns) and Worcester (the central uplands: Wachusett, the state forests), like NY's Columbia and Washington.
- Not listed (farmland): Suffolk, Middlesex, Norfolk, Essex (Boston and its suburbs), Bristol (the South Coast) and Hampden (the Connecticut valley floor). No dry.

## Levels (4)

1. **Boston & the Inner Suburbs** (`boston`: BOS, LWL, QNMA, LYNN; the start): 100 passengers; connect Boston and Lowell (the Lowell Line, I-93); own 4 counties; move 10 containers (the Port of Boston, as NJ's Newark and MD's Baltimore).
2. **The South Shore, the South Coast & the Cape** (`south`: BKTN, NBMA, HYN): 240 passengers; connect Brockton and Hyannis (MA-24 / MA-3 / US-6 over the canal bridges); own 7 counties.
3. **Worcester & the Pioneer Valley** (`valley`: WORC, SPMA, NHMA, GFMA): 400 passengers; connect Worcester and Springfield (I-90, the Worcester Line); own 11 counties.
4. **The Berkshires** (`berkshires`: PTFD): 560 passengers; connect Springfield and Pittsfield (the Mass Pike and the Boston & Albany line over the Berkshire hills); own 12 counties (every one).

County targets are the running total (the owned counties), as CT's 3, 6, 8. Four levels for 12 regions (NJ has 21 regions and four levels): the 100/240/400/560 targets follow NJ's 80/180/300/420, a little higher for the bigger state.

## Reachability (`NR.blockedReason`, Gentle and Tough)

Checked with scripts that load the game as `tools/check-pack.js` does plus `js/geography.js` (`/tmp/ma-work/load.js`, `conn.js`, `chains.js`).

- Every main station reaches at least two neighbouring main stations in both modes: Boston (Quincy 7 mi, Lynn 9, Brockton 19, Lowell 24, Worcester 39, Providence 41), Lowell (Lynn 23, Boston 24, Quincy 31, Worcester 36), Quincy (Boston, Brockton 12, Lynn 14, Providence 37), Lynn (Boston, Quincy, Lowell, Brockton), Brockton (Quincy, Boston, Providence 27, Bristol RI 30, New Bedford 31), New Bedford (Bristol RI 18, Newport 22, Providence 28, Brockton 31), Hyannis (Plymouth town 29 mi; Brockton 48 and Quincy 56 by track; Boston is 63, over the 60-mile emergency-link limit, so Hyannis reaches its neighbours Brockton and Quincy; the ferries to Nantucket, Oak Bluffs and Woods Hole), Worcester (Lowell 36, Providence 37, Boston 39, Springfield 41, Northampton 43, Willimantic 43), Springfield (Northampton 15, Vernon 18, Hartford 24, Greenfield 33, Willimantic 33, Torrington 35, Pittsfield 42), Northampton (Springfield, Greenfield 18, Pittsfield 33, Hartford 39), Greenfield (Northampton 18, Springfield 33, Pittsfield 35), Pittsfield (Albany 29, Troy 29, Hudson 30, Northampton 33, Catskill 35, Greenfield 35, Springfield 42).
- Not open on purpose: New Bedford to Hyannis (Buzzards Bay: the Cape is reached over the canal) and, in Tough only, New Bedford to Warwick (Narragansett Bay, Rhode Island's own bay).
- Every town has an open link to a main station or town within 4-27 mi in both modes (Gentle and Tough); the longest are Provincetown (25 mi to Plymouth, 28 to Hyannis) and Nantucket (28 mi to Hyannis, by ferry), which are the far ends of the Cape.
- Chains, all open in both modes: the Northeast Corridor / I-95 Providence-Attleboro-Dedham-Boston, I-95 and the Newburyport-Rockport lines Boston-Lynn-Salem-Newburyport and Boston-Revere-Lynn-Salem-Gloucester, the Haverhill Line Boston-Lawrence-Haverhill, I-495 Franklin-Framingham-Lowell-Lawrence-Haverhill-Newburyport, the Lowell Line, the Fitchburg Line Boston-Lexington-Concord-Fitchburg, the South Shore Boston-Quincy-Weymouth-Plymouth-Hyannis (over the canal) and Boston-Brockton-Hyannis, the South Coast Boston-Brockton-New Bedford and Providence-Fall River-New Bedford (I-195), the Mass Pike Boston-Framingham-Worcester-Sturbridge-Springfield-Westfield-Pittsfield-Chatham (NY), Pittsfield-Albany, Troy and Hudson (NY), I-91 Hartford (CT)-Springfield-Holyoke-Northampton-Greenfield, MA-2 Worcester-Fitchburg-Greenfield-Shelburne Falls-North Adams (over the Mohawk Trail), North Adams-Pittsfield, US-7 Pittsfield-Lenox-Great Barrington-Kent Falls (CT), Great Barrington-Torrington, Worcester-Providence (RI), Franklin-Providence, Brockton-Providence, Fall River-Tiverton-Newport and Fall River-Bristol (RI), Springfield-Vernon and Springfield-Torrington (CT), Worcester-Willimantic and Sturbridge-Putnam (CT), North Adams-Hoosick Falls (NY), and the island ferries Hyannis-Nantucket, Hyannis-Oak Bluffs, Woods Hole-Oak Bluffs and Oak Bluffs-Nantucket (the Hy-Line inter-island ferry exists; it is open here because both terminals are ferry points).
- Links into the neighbours: Connecticut (Springfield-Hartford 24 mi, -Vernon 18, -Torrington 35; Great Barrington-Torrington 30; Worcester-Willimantic 43), New York (Pittsfield-Albany 29, -Troy 29, -Hudson 30, -Catskill 35, -Chatham 18; North Adams-Hoosick Falls 18), Rhode Island (Worcester-Providence 37, Franklin-Woonsocket 7, Attleboro-Pawtucket 6, Fall River-Tiverton 4, Brockton-Providence 27, New Bedford-Bristol and Newport RI). New Hampshire and Vermont come next: no links yet. The one gap is the Connecticut River crossing at Springfield-Hartford (above).

## Checks

- `node tools/check-pack.js MA`: passed (12 stations, 30 towns, 0 city maps, 2 passes, 17 bridges), 0 errors, 0 warnings.
- `node tools/check-pack.js`: All packs passed.
- `node tools/test-pack.js MA`: PASSED: 17 passed, 0 warnings, 0 failed (start counties Middlesex, Norfolk and Suffolk; first track Boston-Quincy, 8 mi; 15 to 19 passengers in the test week).
- Screenshots (`test-out/MA/MA-arcade-light.png`, `MA-levels.png`): Boston, Lowell and Quincy sit on land in the right places (Quincy on the coast, Boston at the harbour shore), New Bedford is on the South Coast and the Cape and the islands are drawn. The bridge and ferry labels crowd along the rivers and the Cape (as CT's did).

## Unsure

- Worcester size 3 versus 4 (above); Lowell as the Middlesex station and Cambridge left out (above).
- The coordinates of the Hoosac Tunnel (a midpoint, 1-2 mi), the Lowell, Lawrence, Haverhill, Northampton and Sunderland bridges and the Hyannis, Oak Bluffs and Nantucket ferry points are from general knowledge and approximate (about 1 mi).
- The unbridged Merrimack crossing Haverhill-Newburyport and the unbridged Connecticut crossing Springfield-Hartford pay the new-bridge price (not blocked).

## Main agent's review

- **Merges** were set by the main agent (Massachusetts is small): Nantucket joins Cape Cod and Martha's Vineyard by the Hyannis ferry; the pack agent found nothing wrong.
- **Coordinates:** every station, town, scenic place, pass and bridge or ferry point checked against its real location; all within about a mile and a half.
- **Accepted:** Lowell for Middlesex (Cambridge, 3.4 mi from Boston, would crowd it); Worcester 3 (862,000, level with New Haven and Montgomery, Pennsylvania at 3).
- **Checks:** `check-pack` MA passed (12 stations, 30 towns, 2 passes, 17 bridges), 0 errors, 0 warnings; all packs passed; `test-pack` MA passed (17 passed).
