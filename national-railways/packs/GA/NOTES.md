# Georgia (GA) pack notes

## Region merges (phase 1)

Populations: `packs/GA/raw/counties.json` and `packs/GA/raw/places.json` (U.S. Census Bureau, 2020 base). Every group is connected through `neighbors` (checked by script). Roads and rail facts are from general knowledge (well known unless marked moderately known).

### Recommended (159 to 93 regions)

```
merge: [["Clay", "Quitman", "Randolph"], ["Chattahoochee", "Stewart", "Webster"], ["Marion", "Schley", "Taylor"], ["Crawford", "Macon", "Peach"], ["Harris", "Meriwether", "Talbot"], ["Pike", "Upson"], ["Butts", "Lamar"], ["Jones", "Monroe"], ["Jasper", "Morgan", "Putnam"], ["Madison", "Oglethorpe"], ["Franklin", "Hart"], ["Banks", "Stephens"], ["Elbert", "Lincoln", "Wilkes"], ["Glascock", "McDuffie", "Warren"], ["Greene", "Hancock", "Taliaferro"], ["Jefferson", "Washington"], ["Burke", "Jenkins", "Screven"], ["Emanuel", "Johnson", "Treutlen"], ["Montgomery", "Toombs", "Wheeler"], ["Bleckley", "Twiggs", "Wilkinson"], ["Dodge", "Pulaski", "Telfair"], ["Crisp", "Dooly", "Wilcox"], ["Ben Hill", "Irwin", "Turner"], ["Lee", "Worth"], ["Sumter", "Terrell"], ["Baker", "Calhoun", "Early"], ["Decatur", "Miller", "Seminole"], ["Grady", "Mitchell"], ["Brooks", "Colquitt"], ["Atkinson", "Coffee"], ["Berrien", "Cook", "Lanier"], ["Clinch", "Echols", "Ware"], ["Appling", "Bacon", "Jeff Davis"], ["Brantley", "Charlton", "Pierce"], ["Long", "McIntosh", "Wayne"], ["Candler", "Evans", "Tattnall"], ["Habersham", "Rabun"], ["Towns", "White"], ["Fannin", "Union"], ["Gilmer", "Pickens"], ["Dawson", "Lumpkin"], ["Haralson", "Polk"]]
names: {}
```

No `names` needed: the automatic ones ("Clay-Quitman-Randolph County" and so on) read well. No `bridges` or `join` needed (Georgia's coast has no island counties on the map).

Rule used: every county under 50,000 joins up to 2 small neighbours (groups of 3), keeping a county of 40k+ with its own market town alone, and combining a 30-50k county with one neighbour only if that gives one corridor. Combined populations run 12k to 73k; a few groups pass 50k because the neighbour was the only one left (Brooks-Colquitt 62k, Habersham-Rabun 63k, Haralson-Polk 73k).

### Alone under 50k (10 exceptions)
- **Baldwin** 43,789 (Milledgeville 17,085): its small neighbours are taken by better-fitting groups (Hancock, Washington, Wilkinson, Jones, Putnam).
- **Bryan** 44,741 (Richmond Hill 16,653): Savannah suburb on I-95; neighbours are big counties or Evans (inland, other corridor).
- **Chattooga** 24,970 (Summerville): neighbours are Floyd, Walker (big) and Alabama.
- **Dade** 16,249 (Trenton): neighbours are Walker (big), Alabama, Tennessee.
- **Heard** 11,409 (Franklin): all neighbours are Carroll, Coweta, Troup (big) and Alabama.
- **Laurens** 49,570 (Dublin 16,076): 430 under the line, I-16/I-75 hub, a market town for the small counties around.
- **Murray** 39,976 (Chatsworth): neighbours Gordon, Whitfield (big), Fannin and Gilmer sit in the mountain groups.
- **Oconee** 41,798 (Watkinsville): Athens suburb ringed by Clarke, Barrow, Walton (big).
- **Thomas** 45,791 (Thomasville 18,875): near 50k, its small neighbours go to Grady-Mitchell and Brooks-Colquitt.
- **Tift** 41,357 (Tifton 17,061): near 50k, I-75 market town; neighbours are placed with other groups.

Alone, 50k and over: 42 counties, as in the brief (Laurens is 49,570 in the data, listed as 50k in the brief).

### Alternative
Thomas + Brooks (62k, Thomasville) and Colquitt + Cook (63k, Moultrie), Berrien-Lanier-Atkinson (36k), Coffee alone. Pro: Thomasville and Moultrie each anchor a group; con: one more exception (Coffee) and two big groups.

### Groups, main stations and populations
Main station = the largest incorporated place in the group, except Richland (Chattahoochee-Stewart-Webster; the larger entry is the Cusseta-Chattahoochee unified government, the whole county, and Fort Moore has no place entry), Metter (Candler-Evans-Tattnall: on I-16 and the rail line, against Glennville 5,268, which is the larger but off I-16) and Eastman (Dodge-Pulaski-Telfair: hub of US-23/341; McRae-Helena 6,257 is the larger but an oddly named merged city).

| Group | Why | Main station | Pop |
| --- | --- | --- | --- |
| Clay + Quitman + Randolph | Southwest Georgia, three tiny counties around the Chattahoochee and US-82 at Cuthbert and Fort Gaines (moderately known) | Cuthbert (3,144) | 11,503 |
| Chattahoochee + Stewart + Webster | US-27 south from Columbus through Cusseta (Fort Moore), Lumpkin and Richland to Preston (well known road) | Richland (1,368) | 17,228 |
| Marion + Schley + Taylor | Three tiny neighbours around Buena Vista, Ellaville and Butler (US-19, GA-26) | Butler (1,873) | 19,867 |
| Crawford + Macon + Peach | The Fort Valley, Roberta and Montezuma area west of I-75; Peach holds Fort Valley, the largest town | Fort Valley (8,788) | 52,194 |
| Harris + Meriwether + Talbot | The Pine Mountain ridge, Hamilton, Manchester and Talbotton (US-27, moderately known) | Manchester (3,588) | 61,021 |
| Pike + Upson | Thomaston and Zebulon, the upper Flint River and US-19 | Thomaston (9,823) | 46,589 |
| Butts + Lamar | Jackson and Barnesville, I-75 and the Flint River north of Macon | Barnesville (6,121) | 43,934 |
| Jones + Monroe | The Forsyth, Gray and I-75 corridor north of Macon (both border Bibb) | Forsyth (4,508) | 56,309 |
| Jasper + Morgan + Putnam | Lake Oconee and Sinclair: Eatonton, Madison, Monticello (I-20 passes Morgan) | Eatonton (6,307) | 56,736 |
| Madison + Oglethorpe | The upper Broad River country east of Athens (Comer, Danielsville, Lexington) | Comer (1,516) | 44,954 |
| Franklin + Hart | Lake Hartwell: Hartwell and Royston, the Savannah River line | Hartwell (4,461) | 49,253 |
| Banks + Stephens | US-441 and I-85 around Toccoa and Maysville | Toccoa (9,156) | 44,814 |
| Elbert + Lincoln + Wilkes | Lake Richard B. Russell and Clarks Hill: Elberton, Washington, Lincolnton | Elberton (4,634) | 36,889 |
| Glascock + McDuffie + Warren | The Thomson area on I-20 and US-78 west of Augusta, with Warrenton and Gibson | Thomson (6,811) | 29,725 |
| Greene + Hancock + Taliaferro | I-20 central Piedmont: Greensboro, Sparta, Crawfordville | Greensboro (3,645) | 29,208 |
| Jefferson + Washington | Sandersville and Louisville on the Central of Georgia line (moderately known) | Sandersville (5,814) | 35,704 |
| Burke + Jenkins + Screven | Savannah River counties south of Augusta: Waynesboro, Millen, Sylvania | Waynesboro (5,798) | 47,335 |
| Emanuel + Johnson + Treutlen | Swainsboro, Wrightsville and Soperton on the Ohoopee and the Oconee | Swainsboro (7,427) | 38,359 |
| Montgomery + Toombs + Wheeler | Vidalia, Mount Vernon, Alamo (US-1, US-280) | Vidalia (10,778) | 43,116 |
| Bleckley + Twiggs + Wilkinson | Cochran, Jeffersonville and Irwinton, US-23/129 east of Macon | Cochran (5,030) | 29,484 |
| Dodge + Pulaski + Telfair | Ocmulgee valley: Eastman, Hawkinsville, McRae-Helena (US-23, US-341) | Eastman (5,658) | 42,331 |
| Crisp + Dooly + Wilcox | The I-75 corridor at Cordele, Vienna and Abbeville | Cordele (10,239) | 40,101 |
| Ben Hill + Irwin + Turner | Fitzgerald, Ocilla and Ashburn (US-129, US-41/I-75 edge) | Fitzgerald (9,023) | 35,860 |
| Lee + Worth | Leesburg and Sylvester on US-82/US-19, beside Albany | Sylvester (5,628) | 53,938 |
| Sumter + Terrell | Americus and Dawson, US-19 and Georgia Southwestern | Americus (16,237) | 38,799 |
| Baker + Calhoun + Early | Blakely, Newton and Morgan, the Chattahoochee side of southwest Georgia | Blakely (5,373) | 19,299 |
| Decatur + Miller + Seminole | Bainbridge, Colquitt and Donalsonville, Lake Seminole and the Flint | Bainbridge (14,506) | 44,520 |
| Grady + Mitchell | Cairo and Camilla, US-84/US-19 | Cairo (10,183) | 47,999 |
| Brooks + Colquitt | Moultrie and Quitman, US-319/US-84 near the Florida line | Moultrie (14,635) | 62,193 |
| Atkinson + Coffee | Douglas and Pearson, US-441/US-221 | Douglas (11,729) | 51,378 |
| Berrien + Cook + Lanier | Adel on I-75, Nashville and Lakeland | Adel (5,575) | 45,274 |
| Clinch + Echols + Ware | Waycross and the Okefenokee (Homerville, Statenville); Waycross is the CSX rail city | Waycross (13,944) | 46,692 |
| Appling + Bacon + Jeff Davis | Baxley, Alma and Hazlehurst, US-1/US-341/US-23 | Baxley (4,990) | 44,364 |
| Brantley + Charlton + Pierce | Folkston (CSX flyover), Blackshear, Nahunta; the east side of the Okefenokee | Folkston (4,522) | 50,252 |
| Long + McIntosh + Wayne | Jesup (CSX/US-341) with Ludowici and Darien, to the coast | Jesup (9,815) | 57,270 |
| Candler + Evans + Tattnall | I-16 east of Dublin: Metter, Claxton, Glennville | Metter (4,001) | 46,045 |
| Habersham + Rabun | US-441 and Tallulah Gorge: Cornelia, Clayton | Cornelia (4,516) | 62,912 |
| Towns + White | Cleveland, Helen and Hiawassee, the Blue Ridge foothills | Cleveland (3,510) | 40,485 |
| Fannin + Union | Blue Ridge and Blairsville, the Toccoa River and US-76/US-19/129 | Blue Ridge (1,254) | 49,949 |
| Gilmer + Pickens | Ellijay and Jasper, GA-515 (the Appalachian Parkway) | Jasper (4,093) | 64,561 |
| Dawson + Lumpkin | Dahlonega and Dawsonville, GA-400/US-19 | Dahlonega (7,526) | 60,284 |
| Haralson + Polk | Cedartown and Bremen, US-278/US-27, the Alabama line | Cedartown (10,189) | 72,768 |


### Map check
- Neighbours are symmetric, every county has places, and every place names a real county.
- Place names to clean up: "Augusta-Richmond County consolidated government (balance)", "Athens-Clarke County unified government (balance)", "Macon-Bibb County", "Cusseta-Chattahoochee County unified government", "Webster County unified government", "Georgetown-Quitman County unified government", "Echols County consolidated government", "McRae-Helena". They should read Augusta, Athens, Macon, Cusseta, Preston (or Webster), Georgetown, Statenville, McRae.
- Places with no population (census-designated places, no Census figure in places.json): Candler-McAfee, Sautee-Nacoochee, "Appling" (Columbia) and "Buckhead" (Bryan). Check the last: Buckhead in Bryan County is a small community, not Atlanta's Buckhead, so harmless, but they cannot be main stations.
- Biggest places: Gwinnett shows Peachtree Corners (42k) first, Cobb shows Marietta (61k), Clayton Forest Park (20k): fine as main stations for metro counties, though Lawrenceville (county seat) is the better name for Gwinnett; Forsyth County has only Cumming (7k).
- Alabama and Tennessee neighbours are present; Florida, South Carolina and North Carolina are missing, so Echols, Lowndes, Thomas, Brooks, Decatur, Seminole, Miller, Early, Charlton, Camden, Chatham, Richmond, Rabun, Towns and others have no cross-border link yet (expected).

## Pack part A: stations, start, levels, biomes (phase 2)

Stations (93, one per region): populations and points from `packs/GA/raw/` (`pop` = region population in thousands; points are Census points to 2 decimals unless moved). The reason for every pick that is not the biggest place, and every downtown move, is in a comment above its station in `pack.js`. Towns, passes, bridges and bays are left empty for part B.

**Calls**
- **Atlanta metro** (Fulton 1,067k size 5; Cobb 766k, DeKalb 764k, Gwinnett 957k size 4; Clayton 299k size 3; Henry, Cherokee, Forsyth, Douglas, Fayette, Rockdale, Newton, Paulding, Hall, Walton size 2): each at its own centre, spaced about 4 miles or more. Atlanta is at Five Points; DeKalb is **Decatur** (24,942) and not Stonecrest, Brookhaven or Dunwoody, the county seat and old railroad town; Gwinnett is Lawrenceville, as the phase-1 review asked; Fayette is Peachtree City (the Census list calls it "Peachtree"); Cherokee is Woodstock (bigger than the seat, Canton, which is a town for part B).
- **Sizes** follow the size guide and the other packs (Texas, Arizona): about 290k and over size 3 (Clayton, Chatham), 90k to 290k size 2 for the cities, rural regions size 1; Albany (86k) and Brunswick (85k) are size 2 for their ports and as the biggest cities of their areas.
- **Downtown moves** (Census point is the middle of the city limits): Atlanta (Five Points, 2 mi), Savannah (historic district, 8 mi), Augusta (Broad Street, 9 mi), Macon (Cherry Street, 4 mi), Brunswick, Albany, Valdosta, Rome. **Columbus** is at its east side (Wynnton, 32.48, -84.94), 4 miles from Alabama's Phenix City station, because downtown Columbus is 1 mile from it.
- **Group stations** as the review decided: Richland, Metter, Eastman; plain names Augusta, Athens, Macon. Close calls: St. Marys (18,469) over Kingsland (18,243, a town); Grovetown for Columbia County (Evans and Martinez are unincorporated and not in places.json).
- **Ports and airports:** Port of Savannah (Garden City; the Georgia Ports Authority's main container terminal) and Port of Brunswick (autos and roll-on/roll-off) are the two seaports; Hartsfield-Jackson (Atlanta) and Savannah/Hilton Head International are the airports.
- **Scenic stations:** Atlanta (Martin Luther King Jr. National Historical Park, Georgia Aquarium), Savannah (Historic District), Dahlonega (the 1828 gold rush, National Park Service and state history), St. Marys (Cumberland Island National Seashore ferry). All well known; more scenic places go in as towns in part B.
- **Types:** metro for the Atlanta ring and the cities (Augusta, Columbus, Macon, Athens, Albany, Valdosta, Warner Robins, Rome, Dalton, Gainesville); coast for Savannah, Brunswick, St. Marys and Richmond Hill; mountain for the Blue Ridge and Cumberland Plateau towns (Dahlonega, Cleveland, Blue Ridge, Jasper, Cornelia, Toccoa, Trenton, Chatsworth); farm elsewhere. **Newnan (Coweta) is typed farm** (horse country and a historic town, but also an Atlanta exurb) so the start has two types.
- **Start:** Fulton, Fayette and Coweta (Fayette and Coweta touch Fulton and each other). First track: Peachtree City (metro) to Newnan (farm), about 12 miles.
- **Levels (4):** Atlanta & the Metro (24 regions: the ring plus Troup, Heard, Pike-Upson), North Georgia & the Blue Ridge (20, with Athens), Macon, Columbus & Middle Georgia (25, with Augusta), Savannah, the Coast & South Georgia (24, with Albany and Valdosta). Goals: connect Atlanta-Marietta (I-75), Atlanta-Dalton (I-75), Atlanta-Macon (I-75), Macon-Savannah (I-16); counties 5, 15, 32, 50; passengers 50, 140, 280, 450; a high-speed train and 10 containers.
- **Biomes:** forest for the pine flatwoods of the coastal plain (Savannah and the coast, the Okefenokee side, the Altamaha and Ohoopee country); wooded for the north, Atlanta's Piedmont and the Fall Line hills; no `dry`; the rest is farmland (south-west and south Georgia).
- IDs checked unique across every `packs/*/pack.js`; those clashing with other states' codes got a trailing letter G or a variant (ATHG, MACN, CLBG).
