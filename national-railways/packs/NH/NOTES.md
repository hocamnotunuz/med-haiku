# New Hampshire (NH) pack notes

## Region merges (phase 1)

**Outcome:** the main agent's merges (10 counties -> 8 regions, `STATES.NH` in `tools/build-map.js`) are sound; none is clearly wrong. The pack is built on them as they are.

Populations: `packs/NH/raw/counties.json` and `raw/places.json` (U.S. Census Bureau, 2020 estimates base). Neighbours are the `neighbors` links in counties.json. Roads and valleys are from general knowledge.

| Region | Counties | Pop | Check against the rule |
| --- | --- | --- | --- |
| White Mountains | Carroll 50,105, Coos 31,260 | 81k | Coos (31k) cannot stand alone and touches only Carroll, Grafton, Vermont and Quebec; Carroll and Coos are joined by NH-16 (Pinkham Notch), US-302 and the Saco and Androscoggin valleys, one mountain region. Right. |
| Grafton-Sullivan | Grafton 91,122, Sullivan 43,058 | 134k | The Upper Valley of the Connecticut (Lebanon, Hanover, Claremont) along I-89, I-91 and the river. Sullivan (43k) touches Grafton, Cheshire and Merrimack; Grafton is over 50k (exception: the one partner along the valley). Right, though long (Claremont to Littleton, 70 mi). |
| Belknap, Cheshire, Hillsborough, Merrimack, Rockingham, Strafford | one county each | 64k, 76k, 423k, 154k, 314k, 131k | Belknap (64k) and Cheshire (76k) are over 50k, so alone is fine. |

Map check: the neighbours match the real borders (Carroll-Coos touches Belknap, Strafford, Grafton, Quebec's Coaticook and Le Granit, and Vermont's Northeast Kingdom; Rockingham touches Essex County, Massachusetts; Hillsborough touches Essex, Middlesex and Worcester; Cheshire touches Franklin and Worcester and Windham-Windsor across the Connecticut). Nothing missing. The merged region is named "White Mountains" as it should be; "Grafton-Sullivan County" is the default name (no better one, Upper Valley is the use; left as built).

## Pack (phase 2)

Files: `packs/NH/pack.js` (8 stations, 15 towns, 5 passes, 10 bridges and ferries, 3 levels, biomes) and this file. A station's `pop` is its region's population in thousands from counties.json. New Hampshire's towns are county subdivisions, so places.json has populations for the 13 cities only; every other town's size is from general knowledge (in comments), not Census data.

### Start
`start: ["nh-hillsborough", "nh-merrimack", "nh-rockingham"]`: Manchester (metro), Concord (farm) and Portsmouth (coast). Merrimack and Rockingham both touch Hillsborough and touch each other (counties.json), so all three touch. Three types of place. The first track (pack test): Manchester-Concord, 19 mi, 5 passengers in the test week.

### Main stations (one per region, 8)
| Station | Type | Size | Why |
| --- | --- | --- | --- |
| Manchester (MNHT, Hillsborough 423k) | metro | 3 | Biggest city (115,652), the Manchester-Nashua metro of 420,000; Census point (1.7 km from Elm Street). Nashua is a town of this region (not the station). No airport: Manchester-Boston Regional is below the bar of a big one. |
| Concord (CONH, Merrimack 154k) | farm | 2 | The capital (43,997); the State House downtown (43.21,-71.54), 3.4 km from the Census point. Typed farm so the start has three types. |
| Portsmouth (PSM, Rockingham 314k) | coast | 2 | The biggest place of Rockingham with a population figure (21,960); downtown at Market Square (43.07,-70.76), 1.7 km from the Census point. Size 2 (314k is just over the guide's 300k; Manchester is 3, and Rockingham's towns are suburbs of Boston). No `port` (the Port of New Hampshire is a small cargo port, not a major port) and no `airport` (Pease International is small). Derry and Salem are bigger towns by real population but have no figures here. |
| Dover (DVNH, Strafford 131k) | farm | 2 | The seat of Strafford (32,744); Rochester (32,496) is a town. Census point. |
| Laconia (LCNH, Belknap 64k) | coast | 2 | The Lakes Region's city (16,874). Size 2 as the brief says (64k is size 1 by the guide, but it is a resort region with Weirs Beach and Motorcycle Week). Typed coast (a lake shore). Downtown (Main Street, 43.53,-71.47), 5.5 km from the Census point (the middle of the city limits). |
| Keene (KENH, Cheshire 76k) | farm | 2 | The seat of Cheshire (23,038); downtown (Central Square, 42.93,-72.28), 3.4 km from the Census point. |
| Lebanon (LBNH, Grafton-Sullivan 134k) | mountain | 2 | The Upper Valley hub (14,284); Hanover (Dartmouth) is a scenic town, Claremont (12,951) a town. Census point. |
| North Conway (NCNW, White Mountains 81k) | mountain | 1 | My call among Berlin, Gorham and North Conway. Berlin (9,423) is the only city of the region but sits in the far north; North Conway (Conway about 9,800, the Mount Washington Valley on NH-16 and US-302, the Conway Scenic Railroad) is the tourist hub and the gate to Crawford Notch, Pinkham Notch and the Kancamagus, and is the way to Maine and Massachusetts. Berlin is a town. `scenic: true`. Downtown at the railroad station (44.05,-71.13), 2 km from the Census CDP point. Size 1 at 81k, as the guide says (brief: 1 or 2). |

IDs: natural ones were taken by other packs (MHT, MNCH, DOVR, PORT, LEB, LCN, ...) so Manchester is MNHT, Concord CONH, Dover DVNH, Laconia LCNH, Keene KENH, Lebanon LBNH. Town ids PTNH, WRSB, BRLH, MTWS replaced PTBR, WEIR, BRNH, MTWA (taken by NC, WV, TX, KY). The checker confirms every id is unique across all packs.

### Towns (15)
Hillsborough: Nashua (91,334, size 2; downtown 3.5 km from the Census point), Peterborough (the MacDowell Colony). Rockingham: Exeter (the Downeaster stop), Hampton Beach (scenic; nudged from -70.81 to -70.82 to sit inside the county's coastline). Merrimack: Franklin (8,738), Canterbury Shaker Village (scenic). Strafford: Rochester. Belknap: Weirs Beach (scenic). Cheshire: Mount Monadnock (scenic). Grafton-Sullivan: Hanover (scenic), Claremont (12,951), Littleton. White Mountains: Berlin (9,423), Mount Washington (scenic), Wolfeboro (scenic). Somersworth (11,860) left out (4 mi from Dover) and Derry, Salem, Hampton left out to keep the spread; Hudson, Hooksett, Durham and Meredith are too close to a station.

Scenic places (well known; sources: Wikipedia, the National Park Service, state park pages): Hampton Beach (State Park and the boardwalk), Canterbury Shaker Village (National Historic Landmark, 1792-1992), Weirs Beach (Winnipesaukee boardwalk and the M/S Mount Washington), Mount Monadnock (Monadnock State Park, 3,165 ft), Hanover (Dartmouth College, 1769), Mount Washington (6,288 ft, the Cog Railway of 1869 and the Auto Road), Wolfeboro ("the oldest summer resort in America"), North Conway (Conway Scenic Railroad). Not added: Bretton Woods (6 mi from Mount Washington), Franconia Notch (already a pass), the Kancamagus (a pass), Portsmouth's Strawbery Banke (Portsmouth is a station).

### Passes (5; no checker warning, mountains within 7 mi of each; sources Wikipedia, USGS, NH DOT route pages)
Franconia Notch (I-93 and US-3, 44.14,-71.68), Crawford Notch (US-302 and the Conway Scenic Railroad, 44.21,-71.41), Pinkham Notch (NH-16, 44.26,-71.25), Kancamagus Pass (NH-112, 44.02,-71.41) and Dixville Notch (NH-26, 44.87,-71.30). All at their real points, none moved.

### Bridges and ferries (10; general knowledge, not verified to the metre)
- **The Merrimack** (on the map): Nashua (Everett Turnpike area, 42.76,-71.47), Manchester (the Amoskeag Bridge on I-293 and the Queen City Bridge, 42.99,-71.47) and Concord (I-93 and the Sewalls Falls Bridge, 43.23,-71.52). The brief named the three cities; the individual bridge names are from general knowledge and the points are the river at each city, so verify the names if they are shown to players.
- **The Piscataqua** (the Maine border): the Memorial Bridge, the Sarah Mildred Long Bridge and the I-95 Piscataqua River Bridge (Portsmouth to Kittery), for Maine's pack.
- **The Androscoggin** (Berlin, NH-16) and **the Saco** (Conway and North Conway, NH-16 and US-302).
- **Lake Winnipesaukee**: two landings of the M/S Mount Washington (Weirs Beach 43.62,-71.46 and Wolfeboro 43.59,-71.21), the lake's real excursion ship. Added because Laconia-Wolfeboro and Laconia-North Conway were blocked in Tough (5 mi of open lake; the road goes round by Alton or Moultonborough, which a straight line cannot). With them both are open.
- The Connecticut's bridges are in packs/VT/pack.js and are not repeated.

### Biomes
Forest: the White Mountains and Grafton-Sullivan (the White Mountain National Forest, the North Country forests, the Upper Valley hills). Wooded: Belknap, Cheshire, Merrimack and Strafford. Not listed: Hillsborough and Rockingham (the valley cities and the Seacoast). No dry. Follows Vermont's and Massachusetts's treatment of hill regions.

### Levels (3; the brief's 2-3)
- **Manchester, Concord & the Seacoast** (`merrimack`: the start): 80 passengers, connect Manchester and Concord (I-93, 19 mi). No counties goal (only the three starting counties).
- **Dover & the Lakes Region** (`lakes`: Strafford, Belknap): 200 passengers, connect Concord and Laconia (I-93), 5 counties.
- **The Monadnock Region, the Upper Valley & the White Mountains** (`uplands`: Cheshire, Grafton-Sullivan, White Mountains): 360 passengers, connect Keene and Lebanon (NH-12A and the Connecticut valley), 8 counties.
No cargo goal: no port.

### Reachability (`NR.blockedReason`, Gentle and Tough; helper scripts in /tmp/nh-work)
- Every main station and town has open links in both modes (5 or more within 45 mi, 4 for Mount Washington). Mains reaching at least two other mains within 45 mi: Manchester, Concord, Portsmouth, Dover, Laconia and Keene. Lebanon (Concord 46 mi, Keene 49) and North Conway (Laconia 40 mi, Dover 61, Lebanon 63) are far from the other mains, as the real towns are; each has at least two open links to mains in both modes.
- Chains open in both modes (all 25 tested): I-93 (Lowell, Nashua, Manchester, Concord, Franklin, Laconia, Weirs Beach, and on to Littleton); I-95 and the Downeaster (Newburyport, Hampton Beach, Portsmouth; Haverhill, Exeter, Dover); NH-16 (Portsmouth, Dover, Rochester, North Conway, Mount Washington, Berlin); NH-101 (Portsmouth, Exeter, Manchester, Peterborough, Keene); I-89 (Manchester, Concord, Claremont, Lebanon, White River Junction); Keene-Claremont-Lebanon; Keene-Brattleboro and -Bellows Falls; Lebanon-Hanover-Littleton-Berlin; Keene-Greenfield, Littleton-St. Johnsbury, Berlin-Mount Washington. Links into MA (Lowell, Lawrence, Haverhill, Newburyport, Greenfield), VT (Brattleboro, Bellows Falls, White River Junction, St. Johnsbury) work. Quebec: no Quebec town is within 45 mi of a NH place in the packs; the US-3 Pittsburg-Chartierville crossing has no NH town near it, so no direct link (Berlin to Lac-Megantic or Coaticook is far).
- Tough-only block left in place: Concord-North Conway direct (7 mi across Lake Winnipesaukee; open via Laconia).

### Unsure
- Bridge names in Nashua, Manchester and Concord (the points are the river at each city). Crawford Notch and Pinkham Notch pass points are at the saddles to 2 decimals. The first track pays little (5 riders a week).

### Checks
`node tools/check-pack.js NH`: passed, 0 errors, 0 warnings (8 stations, 15 towns, 0 city maps, 5 passes, 10 bridges). `node tools/check-pack.js`: all packs passed. `node tools/test-pack.js NH`: PASSED, 17 passed, 0 warnings, 0 failed. Screenshots in `test-out/NH/`: Manchester, Concord and Portsmouth sit in the south of the state, Laconia above them, the White Mountains and Upper Valley regions in the north.

## Main agent's review

- **Merges** were set by the main agent (New Hampshire is small): the White Mountains (Coos with Carroll) and Grafton with Sullivan; the pack agent found nothing wrong.
- **Coordinates:** every station, town, scenic place, notch and bridge or ferry point checked against its real location; all within about a mile and a half.
- **Accepted:** North Conway for the White Mountains (the valley's centre and the way to Maine), the Lake Winnipesaukee boat landings as crossing points (real: the M/S Mount Washington's ports), Laconia 2.
- **Checks:** `check-pack` NH passed (8 stations, 15 towns, 5 passes, 10 bridges), 0 errors, 0 warnings; all packs passed; `test-pack` NH passed (17 passed).
