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
