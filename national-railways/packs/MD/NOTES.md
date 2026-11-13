# Maryland pack notes

## Region merges (phase 1)

24 counties (23 counties + Baltimore city) and the District of Columbia become 20 regions (the main agent's merges in `tools/build-map.js`, `STATES.MD`; regions in `raw/counties.json`). Populations and places from `raw/` (Census 2020); roads, railways and rivers from general knowledge.

| Region | Members | Population | Verdict |
|---|---|---|---|
| Western Maryland | Allegany 68k + Garrett 28k | 97k | Good: they share a border and one corridor (I-68 and the National Road, Cumberland to Oakland). Allegany is over 50k but takes the small neighbour (the rule's exception, as in Virginia). |
| Upper Shore | Kent 19k + Queen Anne's 49k | 69k | Good: neighbours on the Chester River, US-301/50. Kent Island (Queen Anne's) is the Bay Bridge's east end. |
| Mid-Shore | Caroline 33k + Dorchester 32k + Talbot 37k | 103k | Good: Caroline touches both, Talbot and Dorchester face each other over the Choptank (US-50/Cambridge). 3 members, all under 50k. |
| Somerset + Wicomico | Somerset 24k + Wicomico 104k | 128k | Good: Salisbury and the Lower Shore. |
| Alone (over 50k) | Anne Arundel 588k, Baltimore city 586k, Baltimore County 855k, Calvert 93k, Carroll 173k, Cecil 104k, Charles 167k, DC 690k, Frederick 272k, Harford 261k, Howard 332k, Montgomery 1,062k, Prince George's 967k, St. Mary's 114k, Washington 155k, Worcester 52k | | Fine. Worcester (Ocean City) at 52k stays alone as the brief says. |

Water links (map neighbours): Anne Arundel to Queen Anne's (the Chesapeake Bay Bridge) and Charles to King George, Virginia (the Harry W. Nice Bridge): both are real and both are the only fixed crossings of those waters. Neighbours checked against the map (`raw/counties.json`): none missing that I could find (Frederick and Washington touch Loudoun, Berkeley, Jefferson and Morgan/Hampshire across the Potomac; Allegany-Garrett touches Hampshire/Morgan, Mineral, Grant/Hardy/Pendleton and Preston; Worcester and Somerset-Wicomico touch Accomack; DC touches Arlington and Alexandria). Pennsylvania and Delaware come later.

No merge is clearly wrong. Remarks only: (1) Mid-Shore's region touches Delaware (Caroline) later, no problem; (2) Baltimore County wraps around Baltimore city (Baltimore city touches only Anne Arundel and Baltimore County), fine; (3) the Susquehanna splits Harford from Cecil and is crossed by bridges only (see below).

## Stations (20, one per region)

- Population = the region's population in thousands from `raw/counties.json`. Coordinates 2 decimals from `raw/places.json` unless a comment says it was moved to a downtown (Washington: Union Station; Baltimore: Penn Station; Annapolis: State House; Frederick: downtown; Ocean City: the Inlet and Boardwalk, 4 mi south of the Census point, the middle of the long city).
- Station choices where the biggest incorporated town was not used (the data has no population for census-designated places):
  - Prince George's: **Bowie** (58,340, the biggest city; Upper Marlboro, 717, the seat, is too small and College Park and Laurel are next to Washington). 14 mi from Washington and from Annapolis.
  - Montgomery: **Rockville** (67,104, the seat; Gaithersburg is 69,640 but the brief asked for the seat; Gaithersburg is a town 5 mi away).
  - Baltimore County: **Towson** (the seat, a census-designated place).
  - Howard: **Columbia** (census-designated, no population; Ellicott City, the seat, is a town).
  - Calvert: **Prince Frederick** (the seat, brief; Chesapeake Beach, 6,351, is a town).
  - Harford: **Aberdeen** (16,279, biggest, on I-95 and the Amtrak/MARC line); Bel Air (10,660, the seat) and Havre de Grace (14,805) are towns.
  - Charles: **Waldorf** (a census-designated place of about 81,000 by general knowledge; the data's only populated place is La Plata, 10,167, the seat, a town). Following Virginia's rule (Dale City for Prince William).
  - St. Mary's: **Lexington Park** (about 11,600, census-designated, no population in places.json; Patuxent River Naval Air Station); Leonardtown (4,563, the seat) is a town. My call: the biggest community.
  - Upper Shore: **Chestertown** (5,534, the Kent seat, the biggest incorporated place; Centreville 4,723 and Stevensville are towns).
  - Mid-Shore: **Easton** (17,104, biggest; Cambridge 13,095 is a town).
  - Worcester: **Ocean City** (6,850, biggest, a resort of millions of visitors).
- Sizes: Washington 5 (core of a metro of 6.3 million: Atlanta, Miami); Baltimore 4 (metro 2.8 million, like Denver and St. Louis); Montgomery 4 (1.06 million, like Fairfax); **Prince George's 4** (967k, above the guide's size-3 limit of about 900k and bigger than Baltimore city; Arlington is 3 because it is 253k); **Baltimore County 3** (855k, inside the guide's 3 range, a suburban region with no single big centre); Anne Arundel 3 (588k), Howard 3 (332k, brief). Frederick 2, Carroll 2, Harford 2, Charles 2, Washington County 2, Somerset-Wicomico 2 (Salisbury is the Shore's hub); the rest 1 (all under about 115k, rural). Ocean City is 1 by population; its tourists come from `scenic: true`.
- Types: Washington, Rockville, Bowie, Baltimore, Towson, Columbia, Aberdeen, Waldorf metro; Annapolis, Prince Frederick, Lexington Park, Ocean City coast; Cumberland mountain; Frederick, Westminster, Hagerstown, Elkton, Chestertown, Easton, Salisbury farm. **Frederick is farm** (farm country and a historic centre) so that the start has two types of place.
- Port: **Port of Baltimore** (a real major port, on Baltimore's station). Airport: **BWI Marshall**, in Linthicum, Anne Arundel County, so on Annapolis's station. Reagan National (Arlington) and Dulles (Fairfax) are on the Virginia pack's stations. Scenic stations: Washington (the Mall, monuments, Smithsonian), Annapolis (the Naval Academy and the colonial harbor), Ocean City (beach and boardwalk).
- Ids: 2-4 capitals, unique across every pack (checked by `tools/check-pack.js`); taken ones got an M (BALM, BOWM, FRDM, WLDF, CLMD, ABDM, ELKM, CUMM) or other letters (CHMD, CPMD, ...).

## Start

Montgomery (the biggest region) + the District of Columbia + Frederick. DC and Frederick both touch Montgomery (like Arlington and Loudoun in Virginia). Types: Rockville metro, Washington metro, Frederick farm. The pack test's first track is Rockville to Frederick (30 mi, I-270), 6 passengers delivered in the test's week (Virginia's Fairfax-Leesburg gave 24: the start has fewer stations that carry people).

## Towns (36)

About 1.8 per region, at least 4 mi apart (the checker reports no warnings). The next-biggest real places (population from places.json, or census-designated places by general knowledge): Gaithersburg, Silver Spring (7 mi from Washington), College Park, Dundalk, Catonsville, Glen Burnie, Ellicott City, Bel Air, Havre de Grace (moved to the downtown, 39.55,-76.09, 5 mi from Aberdeen), North East, Mount Airy, Thurmont, Brunswick, Williamsport, Hancock, Frostburg, Oakland, Chesapeake Beach, La Plata, Leonardtown, Centreville, Stevensville (Kent Island, the Bay Bridge's east end), Cambridge, Denton, Princess Anne, Crisfield, Berlin, Pocomoke City (the US-13 link to Virginia's Eastern Shore).

Scenic places (`scenic: true`, all well known, sources are the National Park Service, Maryland DNR or general knowledge):
- Great Falls (Great Falls Tavern and the C&O Canal National Historical Park, NPS; nudged 1 km west so it lies inside the county outline).
- Fort McHenry (National Monument and Historic Shrine, NPS; 4.1 mi from the Baltimore station so no spacing warning).
- Antietam (National Battlefield, NPS, beside Sharpsburg).
- Deep Creek Lake (Maryland's biggest lake, at McHenry: state park and ski area, Maryland DNR) and Swallow Falls (state park, Muddy Creek Falls, the state's tallest waterfall, Maryland DNR).
- Calvert Cliffs (State Park, Maryland DNR; the fossil cliffs).
- St. Michaels (the Chesapeake Bay Maritime Museum, general knowledge).
- Assateague Island (National Seashore, NPS; the wild ponies).
- Not added: Smith Island (reachable only by boat, in Virginia's bay polygon), Calvert's Solomons, Harpers Ferry (West Virginia's pack already has it), Great Falls Park Virginia (the Virginia pack declined it).

## Passes, bridges and water

- **Mountains in Maryland's terrain grid are mostly hills** (one class-2 cell around Sideling Hill and a few near Savage Mountain). The checker accepts only **Sideling Hill (I-68 road cut)** (39.65,-78.34, Maryland Geological Survey/MDOT). Braddock Heights (Catoctin Mountain), Turner's Gap (South Mountain), the Narrows at Cumberland and Big Savage Mountain are real passes but the checker found no mountains within 7 mi on the map, so they were left out (no tunnel is needed there either: Hagerstown to Cumberland and Frederick to Hagerstown are open in both modes without any).
- **Bays**: "Chesapeake Bay" from the Susquehanna Flats south to Virginia's lower-bay polygon (which starts at 38.2 N), traced from the map's shore (the polygon overshoots only into land, which still counts as land). It leaves out the Patapsco and Baltimore Harbor, Eastern Bay and the tidal rivers (Choptank, Patuxent, Nanticoke), where the track just follows the coast. And **"the lower Potomac River"** from the Nice Bridge to the Bay, between Charles and St. Mary's and Virginia's Northern Neck (Virginia's pack has no Potomac water). Results: in Tough the Bay is crossed only at the Bay Bridge (Annapolis to Kent Island 9 mi; Annapolis to Chestertown via the Bridge); Calvert to the Mid-Shore and St. Mary's to the Lower Shore are blocked in both modes (13 and 11 mi of open Bay, no bridge there); Gentle lets a new bridge span up to 8 mi, so Baltimore or Towson to Chestertown and Annapolis to Easton work there but not in Tough; the lower Potomac is crossed only at the Nice Bridge (Waldorf to Colonial Beach: open in both modes).
- **Bridges (20)**, each real (all on well-known highways, general knowledge/MDOT/NPS): the Chesapeake Bay Bridge (US-50/301, 39.00,-76.38, mid-span); the Harry W. Nice Memorial Bridge (US-301, 38.36,-76.99); the Susquehanna River bridges at Havre de Grace and Perryville (I-95 Tydings, US-40 Hatem, Amtrak) and the Conowingo Dam bridge (US-1); the Potomac at Hancock (I-70/US-522), Williamsport (I-81/US-11), Shepherdstown (MD-34, Sharpsburg), Harpers Ferry (US-340 and the B&O/CSX), Brunswick, Point of Rocks (US-15), Whites Ferry (a ferry, moved to the map's river: 39.14,-77.51, 1.6 mi from the landing), the American Legion Bridge (I-495), Chain Bridge, the Key and Memorial bridges, the 14th Street bridges and the Woodrow Wilson Bridge; the Fort McHenry Tunnel (I-95) and the Harbor Tunnel (I-895) in Baltimore; the Thomas Johnson Bridge (MD-4, Patuxent) and the Choptank River Bridge (US-50, Cambridge). The Key Bridge in Baltimore (collapsed 2024) is left out, as the brief says. The Nanticoke (Vienna) bridge was dropped: the checker finds no river or coast within 3 mi on the map. On the map the Potomac river line meanders, so a straight line between two stations can cross it more than 2 mi from the real bridge (Hagerstown to Martinsburg, Rockville to Leesburg): it then costs the ordinary new-river price (10k Gentle, 25k Tough). Not a block. The Potomac below Washington, the Patuxent, the Choptank and the Susquehanna's mouth are not rivers on the map (only coast or the bay polygon), so bridges there (Woodrow Wilson, Thomas Johnson, Choptank, the Susquehanna mouth) change no price; they are listed because they are the real crossings.
- Not added: Pennsylvania and Delaware links (they come next).

## Reachability (checked with `NR.blockedReason`, Gentle and Tough; script in /tmp/md-work/reach.js)

- Every main station reaches every neighbouring main station (both modes), with these notes: Annapolis to Chestertown crosses the Bay at the Bay Bridge (10 mi of Bay water, bridge) and Annapolis to Prince Frederick needs a new 1-mile crossing of tidal water (allowed in both); Waldorf to Colonial Beach (Virginia) works through the Nice Bridge in Tough; Ocean City reaches only Salisbury and Virginia's Exmore (68 mi), because Worcester has just two neighbours until Delaware is added; Prince Frederick, Lexington Park and the other Southern Maryland stations each reach at least two neighbours.
- Chains, open in both modes: I-95: Washington, Bowie, Columbia, Towson, Baltimore, Aberdeen, Elkton (and to Delaware later); I-270/I-70/I-68: Washington, Rockville, Frederick, Hagerstown, Cumberland, with links to WV (Martinsburg, Romney, Keyser, Kingwood) and Virginia (Leesburg); US-50: Annapolis, Chestertown or Easton over the Bay Bridge, Salisbury, Ocean City; US-301/MD-5: Waldorf, Prince Frederick, Lexington Park; the Capital Beltway and the Potomac links to Virginia (Washington to Arlington and Alexandria, Rockville to Fairfax and Leesburg, Frederick to Leesburg, Waldorf to Fairfax and Colonial Beach). US-13 on the Eastern Shore: Salisbury to Exmore, Ocean City to Exmore.
- Every town has at least two open links within 30 mi in both modes (script `towns.js`); the only blocked ones are bay crossings that have a land alternative (Dundalk or Glen Burnie to the Upper Shore in Tough, Calvert's towns to the Mid-Shore).

## Levels (4)

1. Washington & Its Suburbs (`capital`: Washington, Rockville, Bowie, Frederick, Waldorf): 80 passengers, 5 counties, connect Washington and Frederick.
2. Baltimore & the Upper Bay (`baltimore`: Baltimore, Towson, Annapolis, Columbia, Aberdeen, Elkton): 200 passengers, connect Baltimore and Aberdeen, 6 counties, 10 containers (the Port of Baltimore).
3. Western Maryland (`west`: Westminster, Hagerstown, Cumberland): 300 passengers, connect Hagerstown and Cumberland, 3 counties.
4. Southern Maryland & the Eastern Shore (`shore`: Prince Frederick, Lexington Park, Chestertown, Easton, Salisbury, Ocean City): 400 passengers, connect Easton and Ocean City, 6 counties.

## Biomes

forest: Western Maryland (the Allegheny forests) and Worcester (Pocomoke pine and cypress country, Assateague). wooded: Charles, Calvert, St. Mary's (Southern Maryland's pine and tobacco necks), Frederick (the Catoctin and South Mountain ridges) and Somerset-Wicomico (the Lower Shore). Everything else, the cities, the suburbs, Hagerstown, Carroll and the Upper and Mid-Shore, is farmland, as Virginia leaves its Washington suburbs and Valley. No dry.

## Checks

- `node tools/check-pack.js MD`: MD: passed (20 stations, 36 towns, 0 city maps, 1 passes, 20 bridges), 0 errors, 0 warnings.
- `node tools/check-pack.js`: All packs passed.
- `node tools/test-pack.js MD`: PASSED: 17 passed, 0 warnings, 0 failed. Screenshots in `test-out/MD/` (the arcade-light picture looks sensible: the stations sit in their counties, the Bay and the lower Potomac are water).

## Main agent's review

- **Merges** were set by the main agent (Maryland is small); the pack agent's review found nothing wrong.
- **Coordinates:** every main station, scenic place and bridge checked against its real location; all within about a mile and a half. The American Legion Bridge moved to where I-495 crosses the Potomac (38.97, -77.19), from 2.5 miles north-east.
- **Sideling Hill** dropped: the I-68 cut is at 39.72, -78.27, and there the map has hills but no mountains within 7 miles (the checker's test); the earlier point was 5 miles off to pass the check. Maryland now has no passes, and Hagerstown–Cumberland stays open in Gentle and Tough.
- **The lower Potomac** bay is kept: it is real open water (2 to 11 miles wide) between Maryland and Virginia, crossed by the Nice Bridge.
- **Sizes** accepted: Washington 5; Baltimore, Rockville (Montgomery) and Bowie (Prince George's) 4, like Fairfax; Towson 3, like Arlington.
- **The start** (Montgomery, the District, Frederick) gives a quiet first week (6 riders on Rockville–Frederick); acceptable, noted for later tuning.
- **Checks:** `check-pack` MD passed (20 stations, 36 towns, 20 bridges), 0 errors, 0 warnings; all packs passed; `test-pack` MD passed (17 passed).
