# Maine (ME) pack notes

## Region merges (phase 1)

**Outcome:** the main agent's merges (16 counties -> 11 regions, `STATES.ME` in `tools/build-map.js`) are sound; none is clearly wrong. The pack is built on them as they are.

Populations: `packs/ME/raw/counties.json` and `raw/places.json` (U.S. Census Bureau, 2020 estimates base). Neighbours are the `neighbors` links in counties.json. Roads and valleys are from general knowledge.

| Region | Counties | Pop | Check |
| --- | --- | --- | --- |
| Knox-Waldo | Knox 40,604 + Waldo 39,596 | 80k | Both under 50,000, both on Penobscot Bay and touching; US-1 runs through both (Rockland, Camden, Belfast). Right. |
| Lincoln-Sagadahoc | Lincoln 35,248 + Sagadahoc 36,703 | 72k | Both under 50,000, touching, one coast with US-1 (Bath, Wiscasset, Damariscotta, Boothbay). Right. |
| Downeast | Hancock 55,482 + Washington 31,090 | 87k | Washington (31k) cannot stand alone; it touches Hancock, Penobscot and Aroostook, and US-1 and ME-9 run along one coast from Ellsworth to Calais. Hancock is over 50,000 but is the only sensible partner. Right. The CAT water link (Bar Harbor to Yarmouth) starts here. |
| Western Mountains | Franklin 29,452 + Oxford 57,765 | 87k | Franklin (29k) needs a partner; Oxford is the neighbour on the same mountains and valleys (US-2, ME-4, ME-26, ME-17, the Androscoggin and Sandy River valleys). Right. Region id is `me-franklin-oxford`. |
| Piscataquis-Somerset | Piscataquis 16,801 + Somerset 50,481 | 67k | Piscataquis (17k) is the smallest county; Somerset is its neighbour along Moosehead Lake, the Kennebec and US-201 (Skowhegan, Greenville, Dover-Foxcroft). Right. |
| Aroostook | alone 67,099 | 67k | A county the size of a small state, 100+ miles from anything: an exception. Right. |
| Androscoggin, Cumberland, Kennebec, Penobscot, York | alone | 111k, 303k, 125k, 152k, 212k | All over 50,000. Right. |

No place is in the wrong region (each place name in places.json sits in its own county's region), no neighbours are missing, and the merged names are fine ("Downeast", "Western Mountains"; the others show their joint names). Piscataquis-Somerset does not touch Downeast; Hancock-Washington touches Aroostook, Penobscot and Knox-Waldo.

## Files

`packs/ME/pack.js` (11 stations, 27 towns, 1 pass, 17 bridges and ferry points, 2 bays, 3 levels, biomes) and this file. A station's `pop` is its region's population in thousands from counties.json. Maine's towns are county subdivisions, so places.json has populations for the 23 cities only (the rest are CDPs without a number); other sizes are from general knowledge (in comments), not Census data.

## Stations

Start: **Cumberland, York, Androscoggin** (PWM metro, BIDD coast, LEW farm). York and Androscoggin both touch Cumberland (not each other). The pack test lays the first track PWM-BIDD (17 mi, across the Saco at Biddeford), metro to coast.

| Station | Type | Size | Why |
| --- | --- | --- | --- |
| Portland (PWM, Cumberland 303k) | metro | 3 | The biggest city, a metro of 550,000, the biggest region; size 3 as the brief says. Port (the biggest tonnage port of New England, Maine State Pier) and airport (Portland International Jetport, the busiest in Maine) by the other packs' bar. The Census point (43.63, -70.19) is in Casco Bay off the map's land (`offMap`); the point is downtown at Monument Square (43.66, -70.26). |
| Biddeford (BIDD, York 212k) | coast | 2 | Biggest city of York County (22,546; Sanford 21,976, Saco 20,380 are almost the same size). Downtown, 7 km from the Census point (the middle of the city limits). Saco is not a separate town (1.5 mi away). Typed coast (Saco Bay). |
| Lewiston (LEW, Androscoggin 111k) | farm | 2 | The second city (37,124) with Auburn across the river; typed farm so the start has two types and Lewiston is not a second metro. Downtown, 3 km west of the Census point. Auburn is left out as a town (3.7 mi away). |
| Bath (BTME, Lincoln-Sagadahoc 72k) | coast | 1 | Biggest place of the region (8,767); the City of Ships. Downtown, 3 km south of the Census point. |
| Augusta (AUME, Kennebec 125k) | farm | 2 | The capital (18,900, the biggest city of Kennebec; Waterville 16,682 is a town). The State House (44.31, -69.78), 4 km from the Census point. |
| Rockland (RKLD, Knox-Waldo 80k) | coast | 1 | Rockland (6,941) and Belfast (6,938) are tied; Rockland is the midcoast's working port (the Vinalhaven and North Haven ferries, the Lobster Festival). Belfast is a town. Downtown, 3 km south of the Census point. |
| Skowhegan (SKWG, Piscataquis-Somerset 67k) | farm | 1 | My call among Skowhegan, Dover-Foxcroft and Greenville (no place populations in the files): Skowhegan (about 8,600, Somerset's seat, US-201 and US-2) is the biggest and the gate to the woods; Dover-Foxcroft (about 4,100) and Greenville (about 1,600, Moosehead Lake) are towns. |
| Farmington (FMGT, Franklin-Oxford 87k) | mountain | 1 | My call among Farmington (about 7,600, Franklin's seat, UMaine Farmington, the gate to Sugarloaf and Rangeley), Rumford (about 5,800) and Norway (about 5,100). Rumford is a town. |
| Bangor (BNGR, Penobscot 152k) | metro | 2 | The city of northern Maine (31,739), Greater Bangor about 150,000. Bangor International Airport (a large transatlantic gateway) by the bar. Downtown (Harlow Street), 3 km south of the Census point. |
| Ellsworth (ELME, Hancock-Washington 87k) | coast | 1 | The biggest city of the region (8,398; Bar Harbor is a town, a tourist place of about 5,100). The gate to Acadia. Downtown, 6 km from the Census point. |
| Presque Isle (PRQI, Aroostook 67k) | farm | 1 | The biggest city of Aroostook (8,793; Caribou 7,390 is a town). Downtown, 2 km from the Census point. |

IDs: natural ones were taken by other packs (BGR, AUG, BTH, RKL, ELL, FRM and others), so Bath is BTME, Bangor BNGR, Biddeford BIDD, Rockland RKLD, Augusta AUME, Ellsworth ELME, Skowhegan SKWG, Farmington FMGT, Presque Isle PRQI; Portland is PWM and Lewiston LEW (free). All unique across packs (the checker confirms).

## Towns (27, 9 of them scenic)

Cumberland: Brunswick (size 2, about 21,000), Freeport (L.L.Bean), Portland Head Light (scenic: the oldest lighthouse of Maine, Fort Williams Park, Cape Elizabeth). York: Sanford (21,976, size 2), Kennebunkport (scenic), Old Orchard Beach (scenic: the pier and Saco Bay beach). Androscoggin: Lisbon Falls. Lincoln-Sagadahoc: Boothbay Harbor (scenic), Damariscotta. Kennebec: Waterville (16,682, size 2), Gardiner. Knox-Waldo: Camden (scenic: Camden Hills, windjammers), Belfast. Downeast: Bar Harbor (scenic: Acadia National Park, Cadillac Mountain; the ferry port), Calais, Machias. Penobscot: Old Town, Millinocket (the gate to Baxter State Park). Aroostook: Houlton (the I-95 border town opposite Woodstock, NB), Caribou, Fort Kent (the end of US-1). Piscataquis-Somerset: Greenville (scenic: Moosehead Lake), Dover-Foxcroft, Mount Katahdin (scenic: Maine's highest mountain and the end of the Appalachian Trail, Baxter State Park). Franklin-Oxford: Rumford, Rangeley (scenic: the Rangeley Lakes), Fryeburg (the Fryeburg Fair; the way to Conway and North Conway, NH).

Left out on purpose: Ogunquit, Pemaquid Point (well known but too many scenic places for the region), Auburn (3.7 mi from Lewiston), Saco (1.5 mi from Biddeford), South Portland (2.6 mi from Portland), Kittery (2 mi from Portsmouth, NH). Coordinates are well-known downtown points; Calais was nudged 1 km into the region (its river and border outline). All places sit inside their region (checked).

## Passes (1)

Grafton Notch (ME-26 between Old Speck and Baldpate Mountain, 44.58, -70.95): the checker finds mountains there; used by the Rumford to Berlin (NH) link. Skipped: the Height of Land (ME-17 near Rangeley: the map has only hills within 7 miles, so it would be a checker warning), Evans Notch (mostly New Hampshire's), the Jackman railway and US-201 (hills only on the map), Katahdin (no road over it). The tunnels the map finds in Maine are short (2 to 9 miles: Rangeley, Fryeburg, Katahdin) and nothing is blocked in Tough.

## Bridges (17, one of them a ferry point) and bays (2)

Sources: general knowledge (Wikipedia and Maine DOT bridge names); positions are approximate.
- **Saco** (Biddeford-Saco, the Main Street and Veterans Memorial bridges, 43.49, -70.45). **Androscoggin**: Lewiston-Auburn (the Longley and Veterans Memorial bridges), Rumford-Mexico (US-2) and Brunswick-Topsham (the Frank J. Wood Bridge, US-201). **Kennebec**: Gardiner-Randolph, Augusta (the Memorial Bridge and the Father Curran Bridge), Waterville-Winslow (the Carter Memorial Bridge) and Skowhegan (US-201 and the island downtown; named as "river bridges at Skowhegan", like NH's). **Penobscot**: Bangor-Brewer (the Joshua Chamberlain Bridge), Old Town-Milford and the Penobscot Narrows Bridge (US-1, Prospect to Verona Island). **Aroostook** at Presque Isle (US-1). **St. Croix**: Calais-St. Stephen (the Ferry Point and Milltown bridges). **Saint John**: Fort Kent-Clair.
- **The CAT** (Bay Ferries' summer high-speed ferry, Bar Harbor to Yarmouth): one point, "Bar Harbor-Yarmouth ferry (the CAT, Bar Harbor side)" at 44.32, -67.95, off the Schoodic Peninsula, on the straight line to Yarmouth. A Yarmouth-side point is not allowed in this pack (the checker wants every point within 10 miles of Maine); one point is enough (see below), so NS needs nothing. The bay "the Gulf of Maine on the CAT ferry's route" is a band around that line, so the crossing is the ferry (82 miles of it) rather than coast.
- **Penobscot Bay** (a ring from Rockland and Camden to Castine, Deer Isle and the Blue Hill peninsula): Rockland to Ellsworth is blocked (15 miles across the bay; the way is Rockland-Belfast-Ellsworth over the Narrows). Casco Bay needs no ring (Portland, Freeport, Brunswick and Bath links keep to its shore and nothing is blocked there); Frenchman Bay is not drawn on the map (its water is part of the simplified land), so no ring.
- **Left out:** the Sagadahoc and Carlton bridges at Bath (the map's Kennebec ends above Bath and the coast there is more than 3 miles away, so the checker warned; no link crosses a river there); the Lubec-Campobello FDR Bridge (NB's pack has no Campobello place, so no link uses it); the Houlton-Woodstock crossing (a land border, no water on the map); the Piscataqua bridges (NH's pack) and the Edmundston-Madawaska and Saint-Léonard-Van Buren bridges (NB's pack). Not bridged: the Saco at Fryeburg and the Kennebec at Norridgewock (new-bridge price, no sure bridge name).

## Biomes

forest: Piscataquis-Somerset, Penobscot, Downeast (the north woods and the Downeast barrens and spruce). wooded: Franklin-Oxford, Knox-Waldo, Lincoln-Sagadahoc, Androscoggin, Kennebec. Not listed (farmland): Aroostook (the potato county), Cumberland, York. No dry.

## Levels (3, 11 regions)

1. **Portland & Southern Maine** (`south`: Cumberland, York, Androscoggin, Lincoln-Sagadahoc): 50 passengers, 4 counties, 10 containers (Portland's port).
2. **The Kennebec Valley & the Western Mountains** (`valley`: Kennebec, Knox-Waldo, Piscataquis-Somerset, Franklin-Oxford): 140 passengers, connect PWM and AUME, 25 produce.
3. **Bangor, Downeast & the County** (`north`: Penobscot, Downeast, Aroostook): 280 passengers, connect AUME and BNGR, a high-speed train.

## Reachability (NR.blockedReason, Gentle and Tough)

- **Every link between two Maine places within 70 miles is open in both modes** (all 27 towns and 11 stations tested). Only the intended ones are blocked: Ellsworth-Rockland and Ellsworth-Yarmouth (the bays), Rockland-Bangor in Tough (Penobscot Bay's head; open via Belfast), Skowhegan-Presque Isle in Tough (mountains).
- **Main stations and their neighbours:** every station reaches at least two neighbouring main stations (LEW 4, PWM 4, AUME 5, BTME 4, RKLD 3, SKWG 4, FMGT 4, BNGR 3, BIDD 2 in Maine plus NH, ELME 1 in Maine: Bangor, with the Rockland route through Belfast; PRQI: Houlton and Caribou are towns, Bangor is 135 miles away and open, and WSK and EDN in NB are 42 and 50 miles).
- **Chains (all open in both modes, bridges at the main river crossings):** the coast road US-1 / I-295 (Portsmouth, Biddeford, Portland, Freeport, Brunswick, Bath, Damariscotta, Rockland, Camden, Belfast, Ellsworth, Bar Harbor), US-1 Downeast (Ellsworth, Machias, Calais, St. Stephen), I-95 / the Maine Turnpike (Portland, Lewiston, Augusta, Waterville, Bangor, Houlton, Presque Isle, Caribou, Fort Kent, Edmundston), US-2 (Rumford, Farmington, Skowhegan, Bangor), US-302 (Portland, Fryeburg, North Conway), the Katahdin route (Bangor, Millinocket, Mount Katahdin) and the woods (Skowhegan, Greenville, Dover-Foxcroft, Millinocket).
- **Links out:** NH: Biddeford-Portsmouth (33 mi), Sanford-Dover, Fryeburg-North Conway (8 mi), Rumford-Berlin over Grafton Notch; NB: Houlton-Woodstock (12 mi), Calais-St. Stephen, Fort Kent-Edmundston (15 mi), Presque Isle-Perth-Andover; NS: Bar Harbor-Yarmouth (110 mi, the ferry in both modes); QC: Rangeley-Lac-Mégantic (43 mi) and Fort Kent-Témiscouata (33 mi) are open (no Quebec place near Jackman).

## Unsure

- Bridge and notch coordinates are 2-decimal approximations of well-known places; the bridge names for the Skowhegan, Old Town-Milford and Gardiner-Randolph crossings are the least certain. The Penobscot Bay and Gulf of Maine rings are hand-drawn around the water the lines cross.
- Portland and Portland Head Light are 3.7 miles apart (checker warning, kept: the lighthouse is Portland's best-known sight and a real place 3.7 miles from Monument Square).

## Checks

`node tools/check-pack.js ME`: passed, 0 errors, 1 warning (Portland and Portland Head Light 3.7 miles apart; 11 stations, 27 towns, 0 city maps, 1 pass, 17 bridges). `node tools/check-pack.js`: all packs passed. `node tools/test-pack.js ME`: PASSED, 17 passed, 0 warnings, 0 failed. Screenshots in `test-out/ME/`: Portland, Biddeford and Lewiston at the south end of the state, Augusta and Brunswick above them, the five fogged regions in the north.

## Main agent's review

- **Merges** were set by the main agent (Maine is small), with the CAT ferry link to Nova Scotia; the pack agent found nothing wrong.
- **Coordinates:** every station, town, scenic place, pass and bridge checked against its real location; all within about a mile.
- **The CAT ferry point** stays on the ferry's route just out of Frenchman Bay (44.32, -67.95): the game opens a water crossing near a bridge or ferry point, and the Gulf of Maine water (a bay here) begins offshore, so a point at the Bar Harbor terminal would not open Bar Harbor–Yarmouth (tried: blocked); on the route it is open in Gentle and Tough.
- **Checks:** `check-pack` ME passed (11 stations, 27 towns, 1 pass, 17 bridges), 0 errors, 1 warning (Portland Head Light 3.7 mi from Portland, kept); all packs passed; `test-pack` ME passed (17 passed).
