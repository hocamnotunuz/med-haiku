# Virginia pack notes

## Region merges (phase 1)

133 areas (95 counties + 38 independent cities) to 69 regions (45 merged groups, 24 alone). Facts: populations and places from raw/counties.json and raw/places.json (Census 2020). Geography and transport (interstates, railways, rivers) from general knowledge, not from the data.

```
merge: [
  ["Fairfax County", "Fairfax city"],           // enclave city inside the county; Herndon
  ["Arlington", "Falls Church"],                // Falls Church city is a 15k enclave between Arlington and Fairfax
  ["Manassas", "Manassas Park"],                // 43k + 17k, Manassas the market town; Prince William (482k) stays alone
  ["Fredericksburg", "Spotsylvania"],           // I-95 and the Rappahannock; city is the station
  ["King George", "Westmoreland"],              // upper Northern Neck (Potomac shore, Colonial Beach)
  ["Lancaster", "Northumberland", "Richmond County"], // lower Northern Neck (Kilmarnock, Warsaw)
  ["Caroline", "Essex", "King and Queen"],      // US-17 / Rappahannock, Tappahannock
  ["King William", "New Kent", "Charles City"], // Mattaponi/Pamunkey and the lower Chickahominy, West Point
  ["Gloucester", "Mathews", "Middlesex"],       // Middle Peninsula
  ["Accomack", "Northampton"],                  // Eastern Shore, US-13
  ["Poquoson", "York"],                         // Poquoson city is a 12k enclave of the York peninsula
  ["James City", "Williamsburg"],               // Williamsburg is an enclave of James City
  ["Franklin city", "Southampton"],             // Blackwater River, Franklin
  ["Isle of Wight", "Surry"],                   // Smithfield (Surry across the James, by the Jamestown ferry)
  ["Emporia", "Greensville", "Sussex"],         // I-95 and US-58 at Emporia
  ["Colonial Heights", "Dinwiddie", "Petersburg"], // Petersburg and its ring (Dinwiddie touches Petersburg only)
  ["Hopewell", "Prince George"],                // Hopewell, Fort Lee
  ["Brunswick", "Mecklenburg"],                 // I-85 / US-58, South Hill
  ["Amelia", "Lunenburg", "Nottoway"],          // US-460 / Norfolk Southern, Blackstone (Lunenburg touches Nottoway only)
  ["Appomattox", "Buckingham", "Prince Edward"], // Farmville
  ["Amherst", "Nelson"],                        // Blue Ridge east side, US-29 / US-60
  ["Charlotte", "Halifax"],                     // Dan River country, South Boston
  ["Cumberland", "Goochland", "Powhatan"],      // James River west of Richmond, US-60
  ["Fluvanna", "Louisa"],                       // Louisa, Lake Monticello
  ["Greene", "Madison", "Orange"],              // Piedmont foot of the Blue Ridge, Orange / Gordonsville
  ["Page", "Shenandoah"],                       // Shenandoah Valley (north of Harrisonburg)
  ["Clarke", "Warren"],                         // Front Royal, I-66 / US-340
  ["Culpeper", "Rappahannock"],                 // Culpeper, US-522
  ["Albemarle", "Charlottesville"],             // Charlottesville enclave
  ["Augusta", "Staunton", "Waynesboro"],        // I-81 / I-64 at Staunton
  ["Frederick", "Winchester"],                  // Winchester enclave
  ["Rockbridge", "Buena Vista", "Lexington"],   // Lexington
  ["Alleghany", "Bath", "Covington", "Highland"], // Alleghany Highlands (4 members, see exceptions)
  ["Botetourt", "Craig"],                       // I-81 at Buchanan, Craig up Craig Creek
  ["Roanoke County", "Salem"],                  // Salem enclave
  ["Floyd", "Pulaski", "Radford"],              // New River valley south, Pulaski / Radford
  ["Carroll", "Galax", "Grayson"],              // Galax, Hillsville, I-77 / US-58
  ["Henry", "Martinsville", "Patrick"],         // US-58 and US-220
  ["Danville", "Pittsylvania"],                 // Danville, US-29 / US-58
  ["Bland", "Giles", "Tazewell"],               // I-77 (East River Mountain tunnel), Bluefield, Pearisburg; Bland joins Giles and Tazewell
  ["Smyth", "Wythe"],                           // I-81, Wytheville / Marion
  ["Buchanan", "Dickenson", "Russell"],         // coalfield hollows, Lebanon / Grundy
  ["Norton", "Wise"],                           // Big Stone Gap / Norton
  ["Lee", "Scott"],                             // far southwest (Cumberland Gap, Gate City)
  ["Bristol", "Washington"],                    // I-81 at Abingdon / Bristol
],
names: {
  "Accomack-Northampton": "Eastern Shore",
  "Alleghany-Bath-Covington-Highland": "Alleghany Highlands",
},
bridges: [["Accomack-Northampton", "Virginia Beach"]],  // Chesapeake Bay Bridge-Tunnel
```

Stay alone (24, all 50k or more, or big cities): Alexandria, Bedford, Campbell, Chesapeake, Chesterfield, Fauquier, Franklin County, Hampton, Hanover, Harrisonburg, Henrico, Loudoun, Lynchburg, Montgomery, Newport News, Norfolk, Portsmouth, Prince William, Richmond city, Roanoke city, Rockingham, Stafford, Suffolk, Virginia Beach.

Whether the merged-name key for the bridge and for Fairfax County/Fairfax city should be the alphabetical form is for the main agent to check against the tool.

## Exceptions
- Groups over 3 members: Alleghany-Bath-Covington-Highland (Covington is an enclave of Alleghany; Highland 2k and Bath 4k only touch Bath/Augusta, so they must join Alleghany).
- Over 50k but merged: Fairfax County, Spotsylvania, Albemarle, Frederick, Roanoke County, Pittsylvania, Henry, York, James City, Washington, Culpeper, Danville-Pittsylvania: each takes an enclave city or a tiny neighbour (the brief: small cities merge with the county around them). Danville (43k) takes Pittsylvania (Gretna 1k is a poor station).
- Under 50k results (a group totalling under 50k): King George-Westmoreland 45, Lancaster-Northumberland-Richmond 32, Caroline-Essex-King and Queen 49, King William-New Kent-Charles City 48, Accomack-Northampton 45, Franklin-Southampton 26, Isle of Wight-Surry 46, Emporia-Greensville-Sussex 28, Brunswick-Mecklenburg 46, Amelia-Lunenburg-Nottoway 41, Amherst-Nelson 46, Charlotte-Halifax 46, Rockbridge group 37, Alleghany Highlands 27, Botetourt-Craig 39, Norton-Wise 40, Lee-Scott 44: rural, no neighbour left to take without crossing a mountain range or a 3-member limit.
- Chains: in Colonial Heights-Dinwiddie-Petersburg, Amelia-Lunenburg-Nottoway and Bland-Giles-Tazewell the middle member (Petersburg, Nottoway, Bland) touches both others; the outer two do not touch each other.

## Alternative
Keep Danville (43k) alone and Pittsylvania (60k) alone. Pro: Danville is a real hub and keeps one station per market; con: breaks the under-50k rule for Danville and Pittsylvania's best place is Gretna, 1k.

## Stations and populations

| Group | Population | Station (places.json) |
|---|---|---|
| Fairfax County + Fairfax city | 1174k | Herndon 25k |
| Arlington + Falls Church | 254k | Arlington 0k |
| Manassas + Manassas Park | 60k | Manassas 43k |
| Fredericksburg + Spotsylvania | 168k | Fredericksburg 28k |
| King George + Westmoreland | 45k | Colonial Beach 4k |
| Lancaster + Northumberland + Richmond County | 32k | Warsaw 2k |
| Caroline + Essex + King and Queen | 49k | Tappahannock 2k |
| King William + New Kent + Charles City | 48k | West Point 3k |
| Gloucester + Mathews + Middlesex | 59k | Urbanna 0k |
| Accomack + Northampton | 45k | Chincoteague 3k |
| Poquoson + York | 82k | Poquoson 12k |
| James City + Williamsburg | 93k | Williamsburg 15k |
| Franklin city + Southampton | 26k | Franklin 8k |
| Isle of Wight + Surry | 46k | Smithfield 9k |
| Emporia + Greensville + Sussex | 28k | Emporia 6k |
| Colonial Heights + Dinwiddie + Petersburg | 79k | Petersburg 33k |
| Hopewell + Prince George | 66k | Hopewell 23k |
| Brunswick + Mecklenburg | 46k | South Hill 5k |
| Amelia + Lunenburg + Nottoway | 41k | Blackstone 3k |
| Appomattox + Buckingham + Prince Edward | 55k | Farmville 7k |
| Amherst + Nelson | 46k | Amherst 2k |
| Charlotte + Halifax | 46k | South Boston 8k |
| Cumberland + Goochland + Powhatan | 65k | Cumberland 0k |
| Fluvanna + Louisa | 65k | Louisa 2k |
| Greene + Madison + Orange | 71k | Orange 5k |
| Page + Shenandoah | 68k | Strasburg 7k |
| Clarke + Warren | 56k | Front Royal 15k |
| Culpeper + Rappahannock | 60k | Culpeper 20k |
| Albemarle + Charlottesville | 159k | Charlottesville 47k |
| Augusta + Staunton + Waynesboro | 125k | Staunton 26k |
| Frederick + Winchester | 119k | Winchester 28k |
| Rockbridge + Buena Vista + Lexington | 37k | Lexington 7k |
| Alleghany + Bath + Covington + Highland | 27k | Covington 6k |
| Botetourt + Craig | 39k | Buchanan 1k |
| Roanoke County + Salem | 122k | Salem 25k |
| Floyd + Pulaski + Radford | 65k | Radford 16k |
| Carroll + Galax + Grayson | 51k | Galax 7k |
| Henry + Martinsville + Patrick | 82k | Martinsville 13k |
| Danville + Pittsylvania | 103k | Danville 43k |
| Bland + Giles + Tazewell | 63k | Richlands 5k |
| Smyth + Wythe | 58k | Wytheville 8k |
| Buchanan + Dickenson + Russell | 60k | Lebanon 3k |
| Norton + Wise | 40k | Big Stone Gap 5k |
| Lee + Scott | 44k | Gate City 2k |
| Bristol + Washington | 71k | Bristol 17k |

Station overrides: Fairfax County+city: Herndon (25k); Arlington+Falls Church: Arlington (no population in places.json; Falls Church 15k is listed under the wrong county); Gloucester-Mathews-Middlesex: Gloucester Courthouse (not Urbanna); Accomack-Northampton: Exmore (mainland, central; not Chincoteague, an island); Cumberland-Goochland-Powhatan: Powhatan.

## Map check
- Places in the wrong county: Falls Church (14.7k) is under va-fairfax-county, Manassas Park (17.2k) under va-prince-william, though both are independent cities.
- Regions with no place of their own: James City, Greensville, Falls Church, Manassas Park (the city places exist under other counties); Arlington's place has pop 0 and Fort Lee has null pop.
- Eastern Shore has no land neighbour (only each other): needs the bridge to Virginia Beach. Chincoteague is the largest place but is on an island.
- Bristol touches only Washington and Tennessee (fine). Highland touches only Augusta and Bath.
- Many Virginia places have pop 0 (CDPs): stations for Albemarle-style groups work, but small county groups (Cumberland, Goochland, Powhatan, Gloucester) rely on 0-1k places.

## Phase 2: the pack (stations, towns, passes, bridges, water, levels)

The merge list above was applied (69 regions; names "Fairfax", "Franklin-Southampton", "Lancaster-Northumberland-Richmond", "Roanoke County-Salem" were set by the main agent). Populations and coordinates come from packs/VA/raw (Census 2020); the facts about roads, railways and sights are general knowledge, flagged where not certain. Every station has its reasoning in a comment in pack.js.

### Stations
- 69 main stations, one per region, at its biggest place (places.json), except: Fairfax (the county seat in Fairfax city, not Herndon, as the main agent asked), Arlington (Courthouse/Rosslyn), Dale City (Prince William's biggest community, a Census-designated place with no population in places.json), Stafford Courthouse, Glen Allen (Henrico), Chesterfield Court House, Powhatan (the central county seat of Cumberland-Goochland-Powhatan), Gloucester Courthouse (the Gloucester seat; Urbanna, 491, is the only incorporated place), Exmore (central on the Eastern Shore; Chincoteague is on an island). Places with no population are marked as such in comments.
- Downtown points, where the Census point (the middle of the city limits) was more than a few km off: Richmond, Norfolk, Virginia Beach (Oceanfront), Chesapeake (Great Bridge), Newport News, Hampton, Portsmouth, Suffolk, Alexandria (Old Town), Fredericksburg, Charlottesville, Lynchburg, Roanoke, Salem, Martinsville, Danville, Petersburg, Bristol (nudged to stay on the Virginia side of State Street). Norfolk and Portsmouth were also moved apart (Ghent and Midtown) because downtown Norfolk and Olde Towne Portsmouth are under 1 mi apart across the Elizabeth River.
- Sizes (the guide plus the main agent's notes): Fairfax, Richmond, Norfolk, Virginia Beach 4; Arlington, Alexandria, Dale City (Prince William), Leesburg (Loudoun), Glen Allen (Henrico), Chesterfield 3; Chesapeake, Newport News, Hampton, Portsmouth, Suffolk, Roanoke, Stafford, Fredericksburg, Charlottesville, Lynchburg, Manassas, Hanover, Salem, Staunton (125k), Winchester (120k), Blacksburg (100k), Danville (103k) and Bristol (71k) 2; everything else 1 (under about 100k, rural). Raising Chesapeake (249k) to 3 would match "2-3"; it follows the guide table (2 is 60-300k).
- Types: Leesburg is farm (hunt, horse and wine country) so that the start's first track (Fairfax or Arlington to Leesburg) carries riders; the Blue Ridge, Allegheny and coalfield stations are mountain; Hampton Roads shore, Northern Neck, Middle Peninsula and Eastern Shore stations are coast; the Washington suburbs, Richmond, Roanoke, Norfolk, Chesapeake, Portsmouth and Newport News are metro.
- Ports (the Port of Virginia: Norfolk International Terminals, Portsmouth Marine Terminal, Newport News Marine Terminal) and airports (Washington Dulles, in the Fairfax region, since it lies on the Fairfax-Loudoun line; Reagan National in Arlington; Richmond International in Henrico; Norfolk International; Roanoke-Blacksburg Regional) follow the bar of the NC and FL packs (big commercial airports and real container ports only).
- Ids: 2-4 capitals, unique across every pack (checked). Because so many four-letter forms were already taken by other states' towns, a taken id is written with a V (for Virginia), for example RICV (Richmond), LEEV (Leesburg), ALEV (Alexandria).
- Start: Fairfax, Arlington and Loudoun (the biggest region and two regions that touch it). Fairfax and Arlington are metro, Leesburg farm, so the pack test's first track (Fairfax-Leesburg, 26 mi) has riders (pack test: 24 passengers in a week).

### Towns (108)
About 1.5 per region, spread at least 4 mi apart: the next-biggest incorporated places, or Census-designated places where a region has few (marked as such in the data, no population). Left out on purpose: Colonial Heights (3 mi from Petersburg), Falls Church and Manassas Park (inside the stations' own metro regions, under 3 mi), Vinton (3 mi from Roanoke), Halifax (3 mi from South Boston), Gloucester Point (2.3 mi from Yorktown, across the Coleman Bridge), Herndon (under 3 mi from Reston), Fort Lee (under 4 mi from Hopewell). The three warnings left in the checker are border points 0.2-0.4 mi outside the simplified county outline (Poquoson, Jamestown, Shenandoah National Park), which the checker calls fine.
- Scenic places (scenic: true): Virginia Beach (the Oceanfront), Williamsburg (Colonial Williamsburg), Charlottesville (Monticello, 2 mi south-east, and the University's Lawn; a World Heritage Site, so the station itself is scenic rather than a separate Monticello town 2 mi away), Yorktown (the battlefield, National Park Service), Jamestown (Historic Jamestowne), Mount Vernon (Washington's estate), Luray (Luray Caverns), Shenandoah National Park (Big Meadows on Skyline Drive, 38.52,-78.44, in Madison County), Natural Bridge (state park, Rockbridge), Hot Springs (the Homestead resort, Bath County), Peaks of Otter (Blue Ridge Parkway, Bedford County), Mabry Mill (Meadows of Dan, Blue Ridge Parkway, Patrick County), Grayson Highlands (state park and Mount Rogers, 36.63,-81.49), Appomattox Court House (the surrender, National Historical Park; the Park is 3 mi north-east of the town), The Breaks (Breaks Interstate Park, Dickenson County), Chincoteague (the wildlife refuge and Assateague Island, on the Eastern Shore). Coordinates of the sights are from memory to the nearest hundredth of a degree and rely on the checker's inside-its-county test.
- Not added: Great Falls Park (under 6 mi from Reston and Tysons) and the Potomac bridges to Maryland and DC (those states come later, no bridge points added).

### Passes (12)
All real gaps and grades; the coordinates are to the nearest hundredth of a degree from general knowledge (USGS names), so the checker's "mountains within 7 mi" test is the check on each: Rockfish Gap (I-64/US-250 at Afton), Swift Run Gap (US-33), Thornton Gap (US-211), Chester Gap (US-522), Manassas Gap (I-66 at Linden), Goshen Pass (VA-39, the Maury River), Buford's Gap (US-460 and the Norfolk Southern Roanoke-Lynchburg line, Bedford County; the point is approximate), the Christiansburg grade (I-81 and the Norfolk Southern at the Eastern Continental Divide), Big Walker Mountain Tunnel and East River Mountain Tunnel (I-77; the tunnel points are approximate), Big Stone Gap (US-23/58, the Powell River's gap) and Pound Gap (US-23 into Kentucky; KY's pack did not list it). Cumberland Gap is already in Kentucky's pack. Dropped because the checker found no mountains within 7 mi on the terrain grid: Ashby Gap, Snickers Gap and Fancy Gap (all real, but the Blue Ridge there is too low for the 0.05-degree grid).

### Bridges (9) and water
- Bridge points: Hampton Roads Bridge-Tunnel (I-64, Hampton-Norfolk), Monitor-Merrimac Memorial Bridge-Tunnel (I-664, Newport News-Suffolk), James River Bridge (US-17, Newport News-Isle of Wight), the Chesapeake Bay Bridge-Tunnel (three points: Virginia Beach end, middle at Thimble Shoal/Fisherman Island, Eastern Shore end), the Coleman Bridge (US-17, Yorktown-Gloucester Point, 37.25,-76.50), the Downing Bridge (US-360, Tappahannock-Warsaw, 37.93,-76.82) and the Robert O. Norris Jr. Bridge (VA-3, Rappahannock, Lancaster-Middlesex). The Norris Bridge point (37.62,-76.44) and the Downing Bridge point are from memory and are approximate (a mile or two); the Virginia Department of Transportation lists all of these.
- Not added: bridges at Richmond (the James is not drawn as a river on the terrain map, so no crossing is charged and the checker would warn that the point is far from water), the Varina-Enon and Hopewell bridges (same reason), and the Potomac crossings (Maryland and DC come later).
- Bays: two, because the Census county shapes stop at the shore and track along open water is otherwise "coast" (free). "Hampton Roads" covers the James mouth between the Peninsula and the Southside; "Chesapeake Bay" covers the lower bay from the Rappahannock to Cape Henry, the York River mouth and the sea between Cape Charles and the Oceanfront. With them, Hampton-Norfolk, Newport News-Suffolk and Newport News-Smithfield cross at the real bridge-tunnels, the Eastern Shore reaches Virginia Beach only by the Bay Bridge-Tunnel, and Poquoson-Gloucester cannot be laid directly in Tough (the Coleman Bridge lies 5 mi off the straight line; the chain Poquoson-Yorktown-Gloucester works).

### Reachability (NR.blockedReason, Gentle and Tough)
- No neighbouring pair of main stations is blocked in Gentle. In Tough two are: South Boston-South Hill (an arm of the John H. Kerr Reservoir, 2 mi wide, no real bridge point added; both stations still reach 6 other stations) and Gloucester Courthouse-Poquoson (the chain through Yorktown works; Gloucester also reaches Williamsburg and Tappahannock).
- Stations with fewer than 2 neighbours by geography: Manassas (inside Prince William, one region next to it: Dale City), Harrisonburg (inside Rockingham), Roanoke city (inside Roanoke County-Salem), Exmore (the Eastern Shore: only Virginia Beach, by the Bay Bridge-Tunnel, 48 mi).
- Every town has an open link to another place within 35 mi in both modes.
- Corridors checked as chains of main stations and towns, open in both modes (except Southside South Boston-South Hill in Tough): I-95 (Alexandria, Dale City, Stafford, Fredericksburg, Ashland, Richmond, Petersburg, Emporia to Roanoke Rapids NC), I-66 (Arlington to Strasburg), I-81 (Winchester to Bristol and Kingsport TN), I-64 (Norfolk, Hampton, Newport News, Williamsburg, Richmond, Louisa, Charlottesville, Staunton, Covington), I-85 (Petersburg, South Hill, Henderson NC), US-29 (Culpeper to Danville and Eden NC), US-58 (Emporia, Franklin, Suffolk, Norfolk; Danville to Gate City), US-460 (Petersburg to Roanoke), I-77 (Wytheville to Mount Airy NC, Galax), the coalfield chain (Bristol to Big Stone Gap), Chesapeake-Elizabeth City NC, Danville-Eden-Greensboro NC. Links into Tennessee (Bristol, Gate City, Big Stone Gap, Lebanon to Kingsport and Johnson City), North Carolina (South Boston, South Hill, Emporia, Franklin, Suffolk, Chesapeake, Martinsville, Danville, Galax, Wytheville) and Kentucky (Big Stone Gap to Hazard and Pikeville) are open in both modes.

### Levels (4)
1. Washington's Virginia & the Rappahannock (15 stations): 80 passengers, 7 counties, connect Fairfax and Fredericksburg (I-95/VRE).
2. Richmond & the Piedmont (20): 200 passengers, connect Richmond and Charlottesville (I-64/CSX), 20 counties, a high-speed train.
3. Hampton Roads & the Tidewater (13): 350 passengers, connect Norfolk and Richmond (I-64), 32 counties, 10 containers (the Port of Virginia).
4. The Valley, Roanoke & Southwest Virginia (21): 500 passengers, connect Staunton and Bristol (I-81), 48 counties.
The county targets count every county owned (cumulative, like NC's 8, 24, 36, 55).

### Biomes
forest: the high Alleghenies and coalfield (Alleghany Highlands, Bland-Giles-Tazewell, Buchanan-Dickenson-Russell, Norton-Wise, Lee-Scott, Botetourt-Craig, Amherst-Nelson, Carroll-Galax-Grayson) and the pine flatwoods and Dismal Swamp of Southside and the Southside Tidewater (Chesapeake, Suffolk, Franklin-Southampton, Emporia-Greensville-Sussex, Isle of Wight-Surry, Hopewell-Prince George, Petersburg-Dinwiddie). wooded: the Piedmont, Blue Ridge and Valley foothills and the Tidewater necks and Northern Neck. Not listed (farmland): the Shenandoah Valley (Augusta, Rockingham, Harrisonburg, Frederick), the Eastern Shore, the Washington suburbs and the big cities. No dry. This follows NC's convention.

### Unsure
Coordinates of the passes and tunnels and of the Norris and Downing bridges (to about a mile); Dale City as the Prince William station (it is the largest community by common knowledge, but places.json has no population for it); the sizes for Chesapeake and Roanoke; whether Poquoson (12k) should be moved to Yorktown for York County's 70k (kept: the biggest place wins). The 'Kerr Reservoir' blockage in Tough is left as geography.

## Main agent's review

- **Coordinates:** every main station and scenic place checked against its real location; all within about a mile and a half of downtown, the courthouse or the site.
- **Poquoson** moved to the city centre (37.12, -76.35): the Census point (37.13, -76.30) is the middle of the city limits, out in the marshes by the bay.
- **The James River:** Natural Earth labels the James "Cowpasture" from the Cowpasture's mouth at Iron Gate all the way to Hopewell, so the map had no James. `tools/build-terrain.js` now names that stretch the James (river 789, below 37.80° N or east of 79.3° W), and Virginia's terrain was rebuilt. Bridges added on it where the main lines cross: Richmond (I-95, the Mayo and Manchester bridges), the Varina-Enon Bridge (I-295), the John Lynch Memorial Bridge at Lynchburg (US-29 Business) and the US-11 bridge at Buchanan (Virginia Department of Transportation).
- **Kerr Lake:** South Boston to South Hill was blocked in Tough (2 miles of the John H. Kerr Reservoir). Added the US-58 bridges at Clarksville and the town of Clarksville (1,301, from places.json; id CKVA, since CLKV is Texas's), so the Southside chain South Boston–Clarksville–South Hill is open in Gentle and Tough.
- **Sizes:** accepted. Roanoke 2 matches the other packs' metros of about 300,000 (Evansville, Peoria, Shreveport, Montgomery 2); Chesapeake 2 is a Norfolk suburb.
- **Checks:** `check-pack` VA passed (69 stations, 109 towns, 12 passes, 14 bridges), 0 errors, 2 warnings (Jamestown and Shenandoah National Park 0.2 mi outside the simplified outline); all packs passed; `test-pack` VA passed (17 passed).
