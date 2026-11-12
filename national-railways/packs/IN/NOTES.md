# Indiana (IN) pack notes

## Region merges (phase 1)

92 counties to **57 regions** (28 counties of 50k+ stay alone, 27 groups, Henry and Shelby alone). Populations from `raw/counties.json`, towns from `raw/places.json`; corridor and geography facts are from general knowledge.

```
merge: [
  ["Adams", "Wells"], ["Blackford", "Jay", "Randolph"], ["Huntington", "Whitley"],
  ["Miami", "Wabash"], ["DeKalb", "Noble"], ["LaGrange", "Steuben"], ["Marshall", "Starke"],
  ["Fulton", "Pulaski", "White"], ["Carroll", "Cass"], ["Benton", "Jasper", "Newton"],
  ["Fountain", "Montgomery", "Warren"], ["Clay", "Parke", "Vermillion"], ["Owen", "Putnam"],
  ["Clinton", "Tipton"], ["Brown", "Jackson"], ["Jennings", "Ripley"],
  ["Jefferson", "Ohio", "Switzerland"], ["Scott", "Washington"], ["Crawford", "Harrison"],
  ["Perry", "Spencer"], ["Lawrence", "Martin", "Orange"], ["Daviess", "Greene"],
  ["Dubois", "Pike"], ["Gibson", "Posey"], ["Knox", "Sullivan"], ["Decatur", "Rush"],
  ["Fayette", "Franklin", "Union"],
]
names: { "Jefferson-Ohio-Switzerland": "Madison-Ohio River", "Crawford-Harrison": "Corydon-Crawford" }  (optional)
```
No bridges or joins needed (Indiana has no island counties). Every group was checked to be connected through `neighbors`.

| Group | Pop (k) | Main station (largest place) |
|---|---|---|
| Adams-Wells  | 64 | Bluffton 10317 (wells)|
| Blackford-Jay-Randolph  | 57 | Portland 6323 (jay)|
| Huntington-Whitley  | 71 | Huntington 17033 (huntington)|
| Miami-Wabash  | 67 | Peru 10957 (miami)|
| DeKalb-Noble  | 90 | Auburn 13508 (dekalb)|
| LaGrange-Steuben  | 74 | Angola 9352 (steuben)|
| Marshall-Starke  | 69 | Plymouth 10216 (marshall)|
| Fulton-Pulaski-White  | 58 | Rochester 6274 (fulton)|
| Carroll-Cass  | 58 | Logansport 18379 (cass)|
| Benton-Jasper-Newton  | 56 | Rensselaer 5730 (jasper)|
| Fountain-Montgomery-Warren  | 62 | Crawfordsville 16320 (montgomery)|
| Clay-Parke-Vermillion  | 57 | Brazil 8181 (clay)|
| Owen-Putnam  | 58 | Greencastle 9802 (putnam)|
| Clinton-Tipton  | 48 | Frankfort 16715 (clinton)|
| Brown-Jackson  | 61 | Seymour 21572 (jackson)|
| Jennings-Ripley  | 57 | Batesville 7200 (ripley)|
| Jefferson-Ohio-Switzerland  | 49 | Madison 12360 (jefferson)|
| Scott-Washington  | 52 | Scottsburg 7343 (scott)|
| Crawford-Harrison  | 51 | Corydon 3162 (harrison)|
| Perry-Spencer  | 39 | Tell City 7513 (perry)|
| Lawrence-Martin-Orange  | 75 | Bedford 13801 (lawrence)|
| Daviess-Greene  | 64 | Washington 12043 (daviess)|
| Dubois-Pike  | 56 | Jasper 16704 (dubois)|
| Gibson-Posey  | 58 | Princeton 8297 (gibson)|
| Knox-Sullivan  | 57 | Vincennes 16775 (knox)|
| Decatur-Rush  | 43 | Greensburg 12314 (decatur)|
| Fayette-Franklin-Union  | 53 | Connersville 13351 (fayette)|

Reasoning (one line each)
- Adams-Wells: Decatur/Bluffton, US-27 south of Fort Wayne, one farm plain. Blackford-Jay-Randolph: the Mississinewa/Salamonie uplands along the Ohio line, Portland-Hartford City-Winchester. Huntington-Whitley: Wabash/Eel valley, US-24 and US-30 into Fort Wayne.
- Miami-Wabash: Peru and Wabash on the Wabash River. DeKalb-Noble: Auburn-Kendallville on the Fort Wayne-Toledo rail line, I-69/US-6. LaGrange-Steuben: lake country and the Toll Road corner. Marshall-Starke: Plymouth, US-30 / US-31 corridor.
- Fulton-Pulaski-White: Tippecanoe-side farm belt (Eel and Tippecanoe rivers), Rochester/Winamac/Monticello on US-35/US-421/US-231 (weakest link, the towns are small). Carroll-Cass: Logansport and Delphi on the Wabash/Eel. Benton-Jasper-Newton: I-65 and US-41 northwest farmland, Rensselaer.
- Fountain-Montgomery-Warren: Crawfordsville on I-74/US-136 with the Wabash towns; Clay-Parke-Vermillion: the lower Wabash coal and farm strip (Brazil, Rockville, Clinton), Parke touches both others. Owen-Putnam: Greencastle and Spencer along US-231/I-70. Clinton-Tipton: Frankfort and Tipton, US-421/US-31, I-65 side.
- Brown-Jackson: Seymour with the hills (Brown has 15k and touches Jackson). Jennings-Ripley: North Vernon-Batesville, US-50 corridor. Jefferson-Ohio-Switzerland: Ohio River towns (Madison, Rising Sun, Vevay). Scott-Washington and Crawford-Harrison: Salem/Scottsburg and Corydon/English, hill country west of Louisville; Perry-Spencer: Ohio River, Tell City.
- Lawrence-Martin-Orange: Bedford, Loogootee-Paoli, limestone belt, SR-37/US-50/US-150. Daviess-Greene: Washington and Linton, US-50/US-41. Dubois-Pike: Jasper/Huntingburg on I-64 and SR-257. Gibson-Posey: Princeton and Mount Vernon (Evansville stays alone). Knox-Sullivan: Vincennes and Sullivan on the Wabash, US-41.
- Decatur-Rush: Greensburg and Rushville on I-74. Fayette-Franklin-Union: the Whitewater valley (Connersville, Brookville, Liberty).

Exceptions under 50k that stay alone: Henry (49k, New Castle, I-70/SR-3; borders four bigger counties) and Shelby (45k, Shelbyville on I-74, in Indianapolis's suburban reach). Perry-Spencer is 39k: Dubois (44k) and Warrick (64k) are its other neighbours, and Spencer/Perry are a river strip. Decatur-Rush is 43k (I-74 pair), Clinton-Tipton 48k, Jefferson-Ohio-Switzerland 49k.

## Alternative
South-east variant: Jefferson-Scott, Ohio-Ripley-Switzerland (45k), Jennings-Washington... Pro: Ohio River links stay with the valley counties; con: Madison-Scottsburg are 30 km of hills apart and Clark County lies between.
A north variant: Noble-LaGrange (87k) with DeKalb-Steuben (77k), keeping Kendallville and Lagrange together; con: the Auburn-Kendallville I-69/rail line is split.

## Observations on the map
- Hammond is the largest place of Lake (77,854; Gary was chosen in phase 2); Gary (69,089) is the steel city on the South Shore Line; main agent may prefer Gary or Hammond.
- Marion County's top place is named "Indianapolis city (balance)"; use "Indianapolis". Many places have `pop: null` (CDPs, e.g. Cordry Sweetwater Lakes in Brown, Everton in Fayette); the main station must come from places with a population.
- Several counties' biggest place is not the county seat or best hub: Boone (Zionsville, seat is Lebanon), Hancock/Greenfield, Warrick (Boonville 6.7k; Newburgh is bigger in practice but a CDP/town), Dearborn (Lawrenceburg 5k) - pick by hand.
- counties.json neighbours are symmetric; Ohio and Kentucky neighbours are absent as stated. I did not inspect map.js shapes (no tools run).

## Phase 2: the pack (packs/IN/pack.js)

Applied merges: the phase-1 list with one change by the coordinator: Shelby joins Decatur-Rush (region `in-decatur-rush-shelby`, 88k, station Shelbyville, the biggest place and on I-74). 56 regions, 56 stations, 90 towns, 0 passes, 41 bridges, 4 levels. Checker: 0 errors, 0 warnings; pack test PASSED (17).

**Start:** Marion, Hamilton, Boone (all touch each other). Indianapolis and Carmel are metro, Lebanon is farm: the first track (Carmel-Lebanon, 22 mi) has riders.

**Station judgment calls**
- Indianapolis size 4 (977k; Columbus/Denver/Kansas City class), at Monument Circle, with Indianapolis International Airport (the only airport; Fort Wayne, South Bend and Evansville are regional and below the bar). Hamilton, Allen and Lake are size 3 (347k, 385k, 499k); every other region is size 1 or 2 (2 for a main city of 10k or more).
- Gary for Lake (Hammond is bigger, 77.9k vs 69.1k, and is a size 3 town at 9 mi, between Gary and Chicago): Gary is the county's historic and transport centre (I-65, I-80/94, US-20, the South Shore, the airport). 25 mi from Chicago's Loop station.
- Lebanon for Boone (Zionsville 30.6k is a commuter suburb, a town); Boonville for Warrick (Newburgh, an Ohio River town, is a town); Lawrenceburg for Dearborn (the seat; Aurora is a town, moved 4 mi away); Plainfield for Hendricks (biggest); Carmel for Hamilton (99,752 vs Fishers 99,046); Jeffersonville and New Albany kept as the Louisville stations: Jeffersonville at its city-limits centre 38.32, -85.71 (5.5 mi from the Louisville's downtown, 38.25, -85.76, where Kentucky's will go) rather than downtown (2.8 mi); New Albany at 38.30, -85.82 (4.4 mi from Louisville's, 5.9 mi from Jeffersonville's).
- Downtown points (the Census point is the middle of the city limits): Indianapolis, Carmel (Arts and Design District), Fort Wayne, South Bend, Muncie, Kokomo, Anderson, Terre Haute, Evansville, Michigan City, Bloomington, Madison, Lafayette, Gary, Vincennes, Columbus, Logansport.
- Port: Portage (Port of Indiana-Burns Harbor, the state's Great Lakes port at the Dunes; the other two Ports of Indiana, Jeffersonville and Mount Vernon, are not marked). Source: Ports of Indiana.
- Scenic flags on stations: South Bend (University of Notre Dame, 2 mi from downtown so not a separate town), Columbus (architecture: Saarinen, Pei, Weese), Vincennes (George Rogers Clark National Historical Park, NPS), Madison (National Historic Landmark district).
- Types: metro = the Indianapolis, Fort Wayne, Chicago-edge and university/industrial cities; coast = the Lake Michigan shore (Portage, Michigan City, the Dunes); farm = most; mountain = only the Brown County/French Lick/Turkey Run hill towns (Indiana has no mountains; the type is the look of the visitors).

**Towns (90):** the next biggest places in each region (populations from places.json) and these scenic places: Indianapolis Motor Speedway (Speedway, 39.80, -86.24), Conner Prairie (Fishers), Indiana Dunes National Park (NPS; 41.65, -87.06), Shipshewana (Amish country), Turkey Run State Park (Indiana DNR, near Marshall, Parke), Nashville (Brown County), French Lick (with West Baden Springs), New Harmony (Harmonists and Owenites; National Historic Landmark), Santa Claus (the town and Holiday World), Battle Ground (Tippecanoe Battlefield, 1811). Hammond is the biggest town (size 3). Zionsville is at its village centre (39.96, -86.28), not the Census point. All came from places.json except the scenic ones whose coordinates are well-known (2 decimals) and Aurora (39.06, -84.91, nudged from Aurora's centre so it is 4 mi from Lawrenceburg).

**Passes:** none (no mountains on the map; the highest ground, the southern hills, is hills).

**Bridges (41; names real, points snapped to the map's river within 1-3 mi from the real location; from general knowledge, not looked up):**
- Ohio: Twin Bridges (US-41, Evansville-Henderson); Sherman Minton (I-64), Kennedy (I-65), Clark Memorial (Second Street) and Lewis and Clark (I-265) at Louisville; Milton-Madison (US-421); Matthew E. Welsh (Mauckport-Brandenburg); Tell City-Troy Ferry; William H. Natcher (Rockport-Owensboro, US-231); Combs-Hehl (I-275, Lawrenceburg); Rising Sun-Rabbit Hash Ferry; Markland Dam (Vevay).
- Wabash: Harmony Way (New Harmony-Grayville, SR-14); Lincoln Memorial (Vincennes, the same name and point as Illinois's pack); Terre Haute (I-70, US-40); Covington; Attica; Lafayette; Delphi; Logansport; Peru; Wabash; Huntington; Bluffton. Illinois's pack has Mount Carmel and Vincennes, so Mount Carmel is not repeated.
- White: Indianapolis, Noblesville, Anderson, Muncie, Martinsville, Spencer, Petersburg. Tippecanoe: Monticello, Winamac. St. Joseph: South Bend, Mishawaka, Elkhart, Fort Wayne; St. Marys: Fort Wayne, Decatur; Maumee: Fort Wayne; Big Blue: Shelbyville.
- The Monroe, Patoka and Brookville lakes are not bridged: no main or town link is blocked by them (tested), and I did not want to guess at their causeways.

**Water and reachability (tested with NR.blockedReason, Gentle and Tough):** every main station has at least two open links to its nearest four neighbours within 60 mi, and every town has an open link, in both modes. Chains open in both modes: I-65 (Gary-Rensselaer-Lafayette-Lebanon-Indianapolis-Greenwood-Columbus-Seymour-Scottsburg-Jeffersonville), I-69 (Angola-Fort Wayne-Huntington-Marion-Muncie-Anderson-Indianapolis-Martinsville-Bloomington-Bedford-Washington-Princeton-Evansville), I-70 (Terre Haute-Brazil-Greencastle-Plainfield-Indianapolis-Greenfield-New Castle-Richmond), I-74 (Crawfordsville-Lebanon-Indianapolis-Shelbyville-Batesville), I-80/90 and the South Shore (Hammond-Gary-Portage-Michigan City-South Bend-Elkhart-Angola), US-41/I-64 (Terre Haute-Vincennes-Princeton-Evansville), US-31, and the Ohio River (Evansville-Tell City-Corydon-New Albany-Madison-Lawrenceburg). Links into Illinois (Gary-Chicago via Hammond, Gary-Kankakee, Rensselaer-Kankakee, Terre Haute-Danville and -Marshall, Vincennes-Mount Carmel and -Lawrenceville) and Michigan (South Bend-Dowagiac and -Benton Harbor, Elkhart-Sturgis, Angola-Coldwater, Michigan City-Niles) are open in both modes. **Exceptions:** in Tough, Gary-Chicago directly is refused (19 mi across the corner of Lake Michigan): the chain Chicago-Hammond-Gary works; and Michigan City-Benton Harbor across the lake (36 mi) is refused as it should be (go by South Bend or Niles). Rivers need no bridge to be crossed, only cost more (the real bridges above make them cheap).

**Biomes:** forest (Hoosier National Forest hills): Brown-Jackson, Lawrence-Martin-Orange, Crawford-Harrison, Perry-Spencer. Wooded: Monroe, Owen-Putnam, Scott-Washington, Clay-Parke-Vermillion, Jefferson-Ohio-Switzerland, Dearborn, Jennings-Ripley, Fayette-Franklin-Union, Morgan, Daviess-Greene, Dubois-Pike, Porter, LaPorte. The rest is farmland (the Corn Belt). No dry areas.

**Levels (4):** 1 Indianapolis & Central Indiana (9 regions); 2 Fort Wayne & the East (14); 3 Lake Michigan, the North & the Wabash (14); 4 Southern Indiana & the Ohio River (19). Goals: passengers 50/140/280/450; connect Indianapolis-Anderson, Indianapolis-Fort Wayne (I-69), Indianapolis-Gary (I-65), Indianapolis-Evansville (I-69); counties 5/15/30; containers 10 in level 3 (Burns Harbor), trucks 30 in level 4, a high-speed train in level 3.

**IDs:** unique across all packs (HMND is Louisiana's, so Hammond is HAMM; WAB.. so Wabash is WABA); checked by the checker.

**Not sure:** the Kentucky bridge names and the Rising Sun, Tell City and Markland crossings (from general knowledge); the Lewis and Clark bridge snaps 3 mi from the real point because the map's Ohio is simplified there.
