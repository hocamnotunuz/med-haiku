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
- Hammond is the main station of Lake (largest place 77,854); Gary (69,089) is the steel city on the South Shore Line; main agent may prefer Gary or Hammond.
- Marion County's top place is named "Indianapolis city (balance)"; use "Indianapolis". Many places have `pop: null` (CDPs, e.g. Cordry Sweetwater Lakes in Brown, Everton in Fayette); the main station must come from places with a population.
- Several counties' biggest place is not the county seat or best hub: Boone (Zionsville, seat is Lebanon), Hancock/Greenfield, Warrick (Boonville 6.7k; Newburgh is bigger in practice but a CDP/town), Dearborn (Lawrenceburg 5k) - pick by hand.
- counties.json neighbours are symmetric; Ohio and Kentucky neighbours are absent as stated. I did not inspect map.js shapes (no tools run).
