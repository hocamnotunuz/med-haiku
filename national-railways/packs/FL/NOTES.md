# Florida pack notes

## Region merges (phase 1)

Source: packs/FL/raw/counties.json (Census 2020) and places.json. Geography (interstates, rivers) from general knowledge.

```
merge: [
  ["Holmes", "Jackson", "Washington"],
  ["Calhoun", "Gulf", "Liberty"],
  ["Franklin", "Wakulla"],
  ["Hamilton", "Jefferson", "Madison"],
  ["Dixie", "Lafayette", "Taylor"],
  ["Gilchrist", "Levy"],
  ["Baker", "Bradford", "Union"],
  ["DeSoto", "Hardee"],
  ["Glades", "Hendry", "Okeechobee"],
]
names: { "Glades-Hendry-Okeechobee": "Lake Okeechobee", "Dixie-Lafayette-Taylor": "Big Bend", "Calhoun-Gulf-Liberty": "Apalachicola Valley" }
```
No bridges or joins needed. Result: 52 regions (67 - 24 merged counties + 9 groups). Gadsden and Suwannee stay alone.

| Group | Pop (k) | Main station | Why |
|---|---|---|---|
| Holmes-Jackson-Washington | 92 | Marianna (6.3k; Chipley 3.7k) | Jackson borders both; I-10/US-90 corridor in the western Panhandle |
| Calhoun-Gulf-Liberty | 36 | Port St. Joe (3.4k; Blountstown 2.3k) | Mutually bordering; Apalachicola River / Gulf shore, empty country |
| Franklin-Wakulla | 46 | Carrabelle (2.6k; Apalachicola 2.3k) | Border; US-98 Forgotten Coast. Wakulla has no incorporated town above Sopchoppy 0.4k |
| Hamilton-Jefferson-Madison | 47 | Madison (2.9k; Jasper 3.6k is larger) | Madison borders both; I-10 / I-75 rural north-central |
| Dixie-Lafayette-Taylor | 47 | Perry (6.9k) | Big Bend coast, US-19/98, no interstate; Taylor borders both |
| Gilchrist-Levy | 61 | Williston (3.0k; Trenton 2.0k) | Border; Suwannee-Santa Fe country, US-27/19 |
| Baker-Bradford-Union | 72 | Macclenny (7.3k; Starke 5.8k) | Baker borders both; Raiford prison area, between Jacksonville and Gainesville (I-10/US-301) |
| DeSoto-Hardee | 59 | Arcadia (7.4k; Wauchula 4.9k) | Border; Peace River citrus/cattle country |
| Glades-Hendry-Okeechobee | 92 | Clewiston (7.3k; Okeechobee 5.2k) | Lake Okeechobee ring (Okeechobee borders Glades; Glades borders Hendry); sugar and cattle |

Exceptions to the under-50k rule: Gadsden (44k, Quincy 8.0k) alone: sits between Tallahassee (292k) and Jackson on I-10, and the Apalachicola River separates it from the west; it neighbours only Liberty, Jackson and Leon. Suwannee (43k, Live Oak 6.7k) alone: the I-10/US-90/US-129 hub, all neighbours are tiny and already grouped. Groups of 36 to 47k remain under 50k: no sensible neighbours exist (all other neighbours are large or already in a group).

## Alternative
Gadsden-Liberty (52k, Quincy) with Calhoun-Franklin-Gulf (40k), Wakulla-Jefferson (49k), Hamilton-Madison-Suwannee (75k), Okeechobee alone and Glades-Hendry (52k).
Pro: no county under 50k left alone, Okeechobee not strung out from Clewiston. Con: Liberty is tiny and mid-river; one big Big Bend gap (Madison-Suwannee) region; 51 regions.

## Map oddities (checked data only)
- Zero/null-population places are census-designated places without a population (Crawfordville, Eastpoint, Steinhatchee, Aucilla, Day, Hosford, Southeast Arcadia, Buckhead Ridge, Cypress Quarters, Taylor Creek...): for Wakulla the largest place with a population is Sopchoppy 0.4k though the county seat Crawfordville has none listed; use care when choosing stations.
- Monroe lists only Collier and Miami-Dade as neighbours (Keys connect to the mainland by US-1 into Miami-Dade; fine, no bridge needed).
- No asymmetric or isolated neighbours found. Not checked visually: shapes of the map.

## Phase 2: the pack

Everything in `pack.js` comes from `raw/counties.json` (populations, thousands, 2020 Census) and `raw/places.json` (Census places and points), except what is listed below as added by hand. Geography and transport facts are from general knowledge; where a coordinate is approximate it says so.

### Start
`["fl-miami-dade", "fl-broward", "fl-collier"]`: Miami-Dade plus two regions that touch it (Broward and Collier also touch each other, on Alligator Alley). Miami is metro, Fort Lauderdale and Naples are coast, so the nearest pair of different types is Miami-Fort Lauderdale (28 miles of track in the pack test, with riders). Fort Lauderdale is typed coast (beaches, yachts, Port Everglades) for that reason. Pack test: PASSED (17 passed).

### Main stations (52, one per region)
Station calls, where not the biggest place:
- Miami, Fort Lauderdale, West Palm Beach, Tampa, St. Petersburg, Orlando, Jacksonville, Tallahassee, Pensacola, Fort Myers, Gainesville, Panama City, Key West, St. Augustine, Sarasota, Lakeland, Melbourne, Daytona Beach, Vero Beach and the other big-city stations are at their downtowns (a Census point is the middle of the city limits: Orlando's is 11 miles from downtown, near the airport; West Palm Beach's 4 miles inland); the comment on each station says so.
- Melbourne (84,714) over Palm Bay (119,752): the old city, the regional airport and US-1/I-95 hub; Palm Bay is a town. Fort Myers (86,404) over Cape Coral (193,994): the Lee seat and the downtown on the Caloosahatchee; Cape Coral is a town (size 3). Sarasota (54,848) over North Port (74,799): the real centre of the county; North Port is a town. Vero Beach (16,364) over Sebastian (25,037): the Indian River seat. Daytona Beach (71,586) over Deltona (93,701): beach, I-95, Speedway; Deltona is a town. Pasco keeps Zephyrhills (17,187, the biggest incorporated place, as the brief asks).
- Franklin-Wakulla: **Crawfordville**, not Apalachicola (2,333) or Carrabelle (2,614). Wakulla holds 34k of the group's 46k people and Crawfordville is its seat, on US-319/98, 15 miles south of Tallahassee. It is a Census-designated place with no population in places.json; point (30.18, -84.38) is the town centre at the courthouse (the Census list has 30.20, -84.36). Apalachicola and Carrabelle are towns.
- Hamilton-Jefferson-Madison: **Madison** (2,913), not Jasper (3,631): in the middle of the group, on I-10 between Jasper and Monticello (Jasper, on I-75, is a town).
- Okaloosa: Crestview (27,464, ahead of Fort Walton Beach, 20,933; I-10 hub); Fort Walton Beach and Destin are towns. Walton: DeFuniak Springs (5,920, a hair ahead of Freeport, 5,880). Calhoun-Gulf-Liberty: Port St. Joe (3,361). Glades-Hendry-Okeechobee: Clewiston (7,314) as in phase 1; Okeechobee and LaBelle are towns (see water below).
- Sizes (guide plus the other packs, Atlanta/Fulton 1,067k being 5): Miami-Dade 5; Broward 5 (1,944k, over the 1.5M line); Palm Beach, Hillsborough, Orange, Duval, Pinellas 4; Lee, Polk, Brevard, Pasco, Volusia, Seminole, Sarasota, Manatee, Osceola, Lake, Collier, Marion, St. Lucie, Escambia, Leon 3 (about 290k and up, as Clayton and Chatham, 295-299k, are 3 in Georgia); 100k to 290k 2 (and Monroe, a big tourist draw at 83k); the rest 1.
- Airports (the bar of the other packs: Savannah, Baton Rouge and Gulfport count): Miami, Fort Lauderdale-Hollywood, Palm Beach, Orlando, Tampa, Jacksonville, Southwest Florida (Fort Myers), Sarasota-Bradenton, Tallahassee, Pensacola and Northwest Florida Beaches (Panama City). Daytona Beach, Melbourne, Orlando Sanford and Key West airports are left out (small or secondary).
- Ports: PortMiami, Port Everglades, Port of Palm Beach (West Palm Beach), Port Canaveral (on the Melbourne station: the Brevard region's port; it is in Cape Canaveral, a few miles north), Port Tampa Bay, Port Manatee (Bradenton station), JAXPORT, Port Panama City and the Port of Pensacola. These are real, named container or bulk ports; the smaller ones (Pensacola, Panama City, Palm Beach, Manatee) are about the level of Brunswick in Georgia.
- IDs are unique across every `packs/*/pack.js` (checked by `tools/check-pack.js`, no errors). Where the natural code was taken (FTL, NPL, ORL, STU, ...) a near one was used (FLL, NAPL, ORLD, STAT, ...).

### All stations

| Id | Station | Region | Type | Size | Pop (k) | Level | Extras |
|---|---|---|---|---|---|---|---|
| MIA | Miami | miami-dade | metro | 5 | 2702 | gold | airport, port, scenic |
| FLL | Fort Lauderdale | broward | coast | 5 | 1944 | gold | airport, port, scenic |
| WPB | West Palm Beach | palm-beach | coast | 4 | 1492 | gold | airport, port |
| KYW | Key West | monroe | coast | 2 | 83 | gold | scenic |
| NAPL | Naples | collier | coast | 3 | 376 | gold |  |
| STAT | Stuart | martin | coast | 2 | 158 | gold |  |
| PSL | Port St. Lucie | st-lucie | coast | 3 | 329 | gold |  |
| CLEW | Clewiston | glades-hendry-okeechobee | farm | 1 | 91 | gold |  |
| ORLD | Orlando | orange | metro | 4 | 1430 | central | airport, scenic |
| KISS | Kissimmee | osceola | metro | 3 | 389 | central |  |
| SNFD | Sanford | seminole | metro | 3 | 471 | central |  |
| CLRM | Clermont | lake | metro | 3 | 384 | central |  |
| LKLD | Lakeland | polk | metro | 3 | 725 | central |  |
| MLB | Melbourne | brevard | coast | 3 | 607 | central | port, scenic |
| DAB | Daytona Beach | volusia | coast | 3 | 554 | central | scenic |
| VRB | Vero Beach | indian-river | coast | 2 | 160 | central |  |
| OCL | Ocala | marion | farm | 3 | 376 | central |  |
| WDW | Wildwood | sumter | farm | 2 | 130 | central |  |
| PLMC | Palm Coast | flagler | coast | 2 | 115 | central |  |
| SBRG | Sebring | highlands | farm | 1 | 101 | central |  |
| TPA | Tampa | hillsborough | metro | 4 | 1460 | gulf | airport, port |
| STPB | St. Petersburg | pinellas | coast | 4 | 959 | gulf |  |
| ZPHL | Zephyrhills | pasco | farm | 3 | 562 | gulf |  |
| BRAD | Bradenton | manatee | coast | 3 | 400 | gulf | port |
| SRQ | Sarasota | sarasota | coast | 3 | 434 | gulf | airport |
| FTMY | Fort Myers | lee | coast | 3 | 761 | gulf | airport, scenic |
| PNTG | Punta Gorda | charlotte | coast | 2 | 187 | gulf |  |
| BRKS | Brooksville | hernando | farm | 2 | 195 | gulf |  |
| INVR | Inverness | citrus | farm | 2 | 154 | gulf |  |
| ARDA | Arcadia | desoto-hardee | farm | 1 | 59 | gulf |  |
| JAX | Jacksonville | duval | metro | 4 | 996 | north | airport, port, scenic |
| GCSP | Green Cove Springs | clay | farm | 2 | 218 | north |  |
| FRBN | Fernandina Beach | nassau | coast | 1 | 90 | north |  |
| SAUG | St. Augustine | st-johns | coast | 2 | 273 | north | scenic |
| PLTK | Palatka | putnam | farm | 1 | 73 | north |  |
| GAIN | Gainesville | alachua | metro | 2 | 278 | north |  |
| LKCT | Lake City | columbia | farm | 1 | 70 | north |  |
| MCCL | Macclenny | baker-bradford-union | farm | 1 | 73 | north |  |
| LVOK | Live Oak | suwannee | farm | 1 | 43 | north |  |
| PRRT | Perry | dixie-lafayette-taylor | farm | 1 | 47 | north |  |
| WLST | Williston | gilchrist-levy | farm | 1 | 61 | north |  |
| MDIN | Madison | hamilton-jefferson-madison | farm | 1 | 46 | north |  |
| TLH | Tallahassee | leon | metro | 3 | 292 | north | airport, scenic |
| QUNY | Quincy | gadsden | farm | 1 | 44 | north |  |
| CRRB | Crawfordville | franklin-wakulla | coast | 1 | 46 | north |  |
| PTSJ | Port St. Joe | calhoun-gulf-liberty | coast | 1 | 36 | north |  |
| MRNN | Marianna | holmes-jackson-washington | farm | 1 | 92 | north |  |
| PCY | Panama City | bay | coast | 2 | 175 | north | airport, port |
| CRVW | Crestview | okaloosa | farm | 2 | 212 | north |  |
| DFSP | DeFuniak Springs | walton | farm | 1 | 75 | north |  |
| PNS | Pensacola | escambia | coast | 3 | 322 | north | airport, port, scenic |
| MILT | Milton | santa-rosa | farm | 2 | 188 | north |  |

### Towns (79) and scenic places
79 towns for 52 regions (1.5 per region), all from places.json (Census places, 2020 populations) and placed at the Census point unless a station is within 4 miles. Moved by hand: Hialeah (25.86, -80.28), Miami Beach (25.83, -80.13; the Census point 25.81, -80.15 is 3.7 miles from Miami's downtown), Marco Island (25.94, -81.72), Fort Pierce (downtown, 27.45, -80.33), St. Cloud (28.25, -81.28), Leesburg (downtown, 28.81, -81.88), Clearwater (27.97, -82.80 at the Clearwater Beach side).

Scenic places (`scenic: true`), all well known: Miami (South Beach, the Everglades gateway), Fort Lauderdale (beach), Key West, Orlando, Jacksonville, Tallahassee (the Capitol), Pensacola (Pensacola Beach and the Naval Air Station), St. Augustine (oldest city in the US, Castillo de San Marcos), Fort Myers (Edison and Ford Winter Estates), Daytona Beach (the Speedway and the beach), and towns Miami Beach, Everglades National Park (point 25.39, -80.58, the Ernest F. Coe Visitor Center at the main entrance, inside Miami-Dade), Everglades City (the Ten Thousand Islands gateway), Walt Disney World (Magic Kingdom, 28.42, -81.58, in Orange County), Kennedy Space Center (the Visitor Complex, 28.52, -80.68), Silver Springs (the state park, 29.22, -82.05), Clearwater (Clearwater Beach), Weeki Wachee (the state park and mermaid show, 28.52, -82.57), Panama City Beach and Destin. The Dry Tortugas have no rail and are skipped.

### Passes
None: Florida is flat (the highest ground, Britton Hill in Walton County at 345 feet, is not on the map's mountains grid).

### Bays and water
- **Tampa Bay** (`bays`): on the map the county shapes are cut at the shore, so the bay is sea. The ring (Old Tampa Bay, the main bay, the Sunshine Skyway mouth) is wider than the water, because land inside a ring stays land. Its east edge stops short of Hillsborough Bay and the Cockroach Bay shore, so a Bradenton-Tampa line (which in life goes round by US-41/I-75) stays open. Real bridges listed: Courtney Campbell Causeway (SR 60), Howard Frankland (I-275), Gandy (US-92), Sunshine Skyway (I-275). Points are approximate mid-spans (to about a mile). Verified with `NR.blockedReason`: St. Petersburg-Tampa, St. Petersburg-Zephyrhills, Clearwater-Tampa and Bradenton-St. Petersburg are open in Gentle (St. Petersburg-Tampa and Clearwater-Tampa also open in Tough); Bradenton-St. Petersburg (9 miles across the mouth, a bay run not near a bridge in the test line) is blocked in Tough and open in Gentle (the Skyway is near the line).
- **Charlotte Harbor** (`bays`): a small ring over the harbor's head and the Peace River's mouth; crossing at the US-41 bridges at Punta Gorda (Barron Collier and Gilchrist bridges). Punta Gorda-Cape Coral, Punta Gorda-Fort Myers and Port Charlotte-Fort Myers are open in both modes (the lines follow the shore); the ring only prices lines that cut across the harbor head.
- **Not bays** (checked on the map): Biscayne Bay, Pensacola Bay, Choctawhatchee Bay and St. Andrew Bay lie inside the county shapes on this map (the shapes include the bays), so they are land here and cannot block; no ring is added, no causeway bridges listed (Rickenbacker, MacArthur, Mid-Bay and so on). The Indian River Lagoon is land too. The Keys: the map has them as islands in sea; sea outside bays never blocks, so Key West-Marathon-Key Largo-Miami are open in both modes (Overseas Highway), and Key West is reachable. (The Seven Mile Bridge is not listed because it would not change anything.)
- **Lakes**: Lake Okeechobee blocks every line across it (22 to 28 miles) in both modes, as it should: Clewiston-West Palm Beach, Clewiston-Stuart, Clewiston-Port St. Lucie, Clewiston-Vero Beach and Clewiston-Kissimmee are blocked; Clewiston reaches Fort Myers, Naples, Fort Lauderdale and Moore Haven by land. The town of Okeechobee, on the north shore, cannot link to the Clewiston station (27 miles across the lake); it links to Indiantown and Sebring. In Tough also: Lake Apopka blocks Clermont-Sanford and Clermont-Daytona (Clermont still reaches Orlando, Lakeland and Wildwood); Lake Monroe would block Daytona Beach-Sanford, which the I-4 bridge listed below opens; Oviedo-Sanford stays blocked in Tough (Oviedo links to Altamonte Springs and Orlando).
- **Bridges (19)**: all real; points are the well-known crossing on the map's river or lake, accurate to about a mile or two (the map's rivers are simplified). Tampa Bay and Charlotte Harbor as above, plus the Peace River bridge (US-17, Arcadia). The St. Johns River: Main Street Bridge (Jacksonville), Buckman Bridge (I-295), Shands Bridge (SR 16, Green Cove Springs), Palatka Memorial Bridge (SR 20), Astor Bridge (SR 40), the I-4 bridge at Sanford (Lake Monroe; the point is approximate). The Apalachicola/Chattahoochee: Jim Woodruff Dam and the US-90 bridge at Chattahoochee, the SR 20 bridge at Blountstown, the John Gorrie Memorial Bridge (US-98, Apalachicola). The Suwannee: the I-10 bridge near Ellaville. The Choctawhatchee: I-10 at Caryville and SR 20 at Bruce. The Georgia line: the St. Marys River bridges of I-95 and US-17 (Kingsland-Yulee, at 30.71, -81.53; Georgia's pack lists none, so this is the Florida side's crossing). The checker gives no warning on any of them. Some rivers on the map (the Withlacoochee, Santa Fe, Ocklawaha, Ochlockonee, Escambia, the upper St. Johns near Cocoa) have no bridge listed: I did not know their crossing points well enough, so lines there simply pay for a new bridge.

### Reachability (via `NR.blockedReason` on every pair of neighbouring main stations: 106 pairs inside Florida and 22 across the Alabama and Georgia lines)
- Gentle: 5 pairs blocked (all across Lake Okeechobee, listed above). Tough: 7 (the five and Lake Apopka's two). Every Florida main station reaches at least two neighbouring main stations in both modes.
- Every town has an open link to something within 60 miles in both modes. Only the town Okeechobee cannot link to its own station (the lake).
- The corridors work as chains in both modes: I-95 (Jacksonville-St. Augustine-Palm Coast-Daytona Beach-New Smyrna Beach-Titusville-Melbourne-Vero Beach-Port St. Lucie-Stuart-West Palm Beach-Fort Lauderdale-Miami), I-4 (Tampa-Lakeland-Kissimmee-Orlando-Sanford-Daytona Beach), I-75 (Lake City-Gainesville-Ocala-Wildwood-Zephyrhills-Tampa, and Fort Myers-Naples and Alligator Alley Naples-Fort Lauderdale, 102 miles with no town between), I-10 (Pensacola-Milton-Crestview-DeFuniak Springs-Marianna-Quincy-Tallahassee-Madison-Live Oak-Lake City-Macclenny-Jacksonville), the Panhandle's US-98 and US-231 line, the Overseas Highway (Miami-Key Largo-Marathon-Key West) and the Big Bend (Live Oak-Perry-Williston, no interstate).
- Across the border (all open in both modes): Fernandina Beach-St. Marys (I-95/US-17 to Kingsland), Lake City and Madison to Valdosta and Waycross (I-75), Madison and Tallahassee to Thomasville (US-19/319), Tallahassee and Quincy to Cairo and Bainbridge (US-27, US-19), Marianna to Bainbridge (US-90) and Dothan (US-231), Pensacola to Daphne (I-10) and Atmore (US-29), Crestview, Milton and DeFuniak Springs to Atmore and Andalusia (US-29, US-331).

### Levels (4)
1. Miami & the Gold Coast (8 regions): 50 passengers, 5 counties, connect Miami-Fort Lauderdale.
2. Orlando & Central Florida (12): 140 passengers, connect Miami-West Palm Beach, 14 counties.
3. Tampa Bay & the Gulf Coast (10): 280 passengers, connect Tampa-St. Petersburg (over the bay), 26 counties, 10 containers (Port Tampa Bay).
4. Jacksonville, North Florida & the Panhandle (22): 450 passengers, connect Orlando-Jacksonville (I-95/I-4), 45 counties, a high-speed train.

### Biomes
`forest`: the pine flatwoods of the Panhandle, the Big Bend and the north-east (22 regions); `wooded`: the central ridge and Ocala/Gainesville hills (8 regions); no `dry`; the rest (the south, the citrus and cattle country, the Everglades, the coasts) is farmland and grassland.

### For the main agent (map issues)
- Manatee and Pinellas are not neighbours in counties.json, although the Sunshine Skyway joins them: the pack's bridge makes the line possible only for a player who already owns both; a `bridges: [["Manatee", "Pinellas"]]` in build-map would open it as an unlock path.
- Biscayne, Pensacola, Choctawhatchee and St. Andrew bays are land on the map (in the county shapes), so they cannot block lines; Tampa Bay and Charlotte Harbor are cut out.
- Places with a null population in places.json are Census-designated places (Crawfordville, Eastpoint, Navarre, Port Charlotte, Key Largo, Silver Springs, Spring Hill and others); they are real towns but have no number. Navarre (30.42, -86.89) and Port Charlotte (26.99, -82.11) are used as towns.
- The Okeechobee region is cut in two by the lake (Okeechobee town north, Clewiston and Moore Haven south).
- Bradenton and Tampa are separated by the bay on the map though they are neighbours; the straight line is open because the ring stops short of the eastern shore.

## Main agent's review

- **Fort Lauderdale is size 4, not 5:** Broward (1.94M) is the same size as Santa Clara County, whose San Jose is 4; size 5 is for the cores of the biggest metros (Miami, Los Angeles, Houston, Atlanta).
- **The Sunshine Skyway joins Manatee and Pinellas** as neighbours (bridges in STATES.FL), so either can be unlocked from the other across Tampa Bay, as the pack agent suggested.
- Florida's smaller bays (Biscayne, Pensacola, Choctawhatchee, St. Andrew) are inside the county shapes on the US map, so they are land in the game and don't block track: a limit of the map's data.

## City maps

### Miami (MIA, size 5, 12 stops)

Stops: MiamiCentral, Brickell, Wynwood, Little Havana, Coconut Grove, Coral Gables, Miami Airport, South Beach, Key Biscayne, Hialeah, Kendall, Hard Rock Stadium.

Hub: MiamiCentral (Brightline station, 600 NE 1st Ave; the Miami Intermodal Center at the airport is not used as the hub). Key Biscayne and South Beach are islands, checked as land in the water data. Left out: Homestead, Fort Lauderdale (further than 25 mi or its own city map). Sources: Brightline/MiamiCentral station, City of Miami neighborhood and Miami-Dade municipality locations (public gazetteer coordinates), Hard Rock Stadium, Miami International Airport.

Brickell, Coconut Grove sit 400 m from the bay shore (land).

Checked: every stop within 25 miles of the main station and at least 1 mile apart (the two Aerial Tram stops excepted); no stop in water in the preview data (checked in code and by picture); the hill/water terrain is not built yet.

### Tampa (TPA, size 4, 11 stops)

Stops: Union Station, Ybor City, Hyde Park, Seminole Heights, USF, Tampa Airport, Raymond James Stadium, Westshore, Brandon, St. Petersburg, Clearwater.

Hub: Tampa Union Station (601 N Nebraska Ave, Amtrak). St. Petersburg and Clearwater are across Tampa Bay and checked as land. Left out: Lakeland, Bradenton, Plant City (over 25 mi). Sources: Amtrak Tampa Union Station, USF, Tampa International Airport, Raymond James Stadium, Ybor City Historic District, public gazetteer coordinates for the cities.

Checked: every stop within 25 miles of the main station and at least 1 mile apart (the two Aerial Tram stops excepted); no stop in water in the preview data (checked in code and by picture); the hill/water terrain is not built yet.

### Orlando (ORLD, size 4, 12 stops)

Stops: Church Street, Amtrak Station, Winter Park, Maitland, UCF, Orlando Airport, International Drive, Universal Orlando, Disney Springs, Sanford, Apopka, Kissimmee.

Hub: Church Street station (SunRail, downtown). The Amtrak station (Sligh Blvd) is a separate stop 1.1 mi south. Left out: Lake Buena Vista/Celebration, Clermont (over 25 mi or inside Disney Springs' reach). Sources: SunRail and Amtrak station lists, UCF, Orlando International Airport, Universal Orlando, Disney Springs, public gazetteer coordinates for the cities.

Checked: every stop within 25 miles of the main station and at least 1 mile apart (the two Aerial Tram stops excepted); no stop in water in the preview data (checked in code and by picture); the hill/water terrain is not built yet.


- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
