# Kentucky (KY) pack notes

## Region merges (phase 1)

Populations: `packs/KY/raw/counties.json` and `places.json` (U.S. Census Bureau, 2020). Every group was checked as connected through `neighbors` by a script. Roads, rivers and railways named are well known unless marked "(moderately known)". Stations are the largest place in places.json with a population (the NM/CO rule).

### Recommended (120 -> 60 regions)

```
merge: [["Ballard","Carlisle"],["Fulton","Graves","Hickman"],["Calloway","Marshall"],["Crittenden","Livingston","Lyon"],["Caldwell","Trigg"],["Henderson","Union"],["Hopkins","McLean","Webster"],["Logan","Todd"],["Allen","Simpson"],["Butler","Edmonson","Grayson"],["Muhlenberg","Ohio"],["Breckinridge","Hancock","Meade"],["Barren","Metcalfe"],["Green","Hart","Larue"],["Clinton","Cumberland","Monroe"],["Adair","Casey"],["Russell","Wayne"],["McCreary","Whitley"],["Clay","Knox"],["Marion","Taylor"],["Nelson","Spencer","Washington"],["Anderson","Mercer","Woodford"],["Boyle","Garrard","Lincoln"],["Jackson","Rockcastle"],["Henry","Shelby"],["Carroll","Gallatin","Trimble"],["Grant","Owen"],["Bracken","Pendleton"],["Fleming","Mason","Robertson"],["Bourbon","Harrison","Nicholas"],["Greenup","Lewis"],["Carter","Elliott","Rowan"],["Bath","Menifee","Montgomery"],["Clark","Estill","Powell"],["Magoffin","Morgan","Wolfe"],["Johnson","Lawrence","Martin"],["Floyd","Knott"],["Leslie","Letcher","Perry"],["Bell","Harlan"],["Breathitt","Lee","Owsley"]]
names: {}   (optional: see naming note)
bridges/join: none
```

Alone, 50k or more (19, as the brief lists). Alone under 50k (1 exception): **Boyd** 48,258 (Ashland 21,627): 1.7k short of 50k, and its neighbours are Greenup (Flatwoods, a separate market) and Lawrence (taken by Johnson, US-23). Merging Boyd + Greenup would make an 84k Ashland region (see alternative).

| Group | Why | Station | Pop |
| --- | --- | --- | --- |
| Ballard + Carlisle | Mississippi bottoms, US-51/60 (Wickliffe, Bardwell) | La Center 881 | 12,550 |
| Fulton + Graves + Hickman | far southwest: Hickman links Fulton and Mayfield (US-45/51) | Mayfield 10,022 | 47,688 |
| Calloway + Marshall | Murray and Benton, US-641, Kentucky Lake | Murray 17,752 | 69,208 |
| Crittenden + Livingston + Lyon | the lakes (Barkley and Kentucky), Land Between the Lakes, Smithland/Eddyville/Marion | Marion 2,912 | 26,561 |
| Caldwell + Trigg | Princeton and Cadiz, I-24 corridor (moderately known), Lake Barkley | Princeton 6,266 | 26,700 |
| Henderson + Union | Ohio River, US-41 Henderson to Morganfield | Henderson 28,207 | 58,468 |
| Hopkins + McLean + Webster | Madisonville, Pennyrile coalfield, Western Ky Parkway | Madisonville 19,553 | 67,588 |
| Logan + Todd | US-68/79 Russellville to Elkton, Pennyrile | Russellville 7,165 | 39,677 |
| Allen + Simpson | I-65 / US-31W south of Bowling Green (Franklin, Scottsville) | Franklin 10,193 | 40,181 |
| Butler + Edmonson + Grayson | Green River, Mammoth Cave, Western Ky Parkway (Leitchfield) | Leitchfield 6,405 | 50,922 |
| Muhlenberg + Ohio | Western Ky Parkway, Green River coalfield | Central City 5,823 | 54,704 |
| Breckinridge + Hancock + Meade | Ohio River and US-60 (Hawesville, Hardinsburg, Brandenburg) | Brandenburg 2,890 | 59,533 |
| Barren + Metcalfe | Glasgow, Cumberland Parkway (moderately known) | Glasgow 15,025 | 54,771 |
| Green + Hart + Larue | I-65 country (Munfordville, Horse Cave), Hodgenville | Hodgenville 3,234 | 45,252 |
| Clinton + Cumberland + Monroe | Cumberland River, Tompkinsville to Burkesville | Tompkinsville 2,302 | 26,473 |
| Adair + Casey | Columbia and Liberty, US-127 | Columbia 4,847 | 34,843 |
| Russell + Wayne | Lake Cumberland shores, Russell Springs and Monticello | Monticello 5,749 | 37,550 |
| McCreary + Whitley | I-75 and the CSX line, Corbin/Williamsburg, Big South Fork | Corbin 7,843 | 53,600 |
| Clay + Knox | US-421 / KY-11, Manchester to Barbourville | Barbourville 3,214 | 50,536 |
| Marion + Taylor | KY-55 Lebanon to Campbellsville | Campbellsville 11,452 | 45,599 |
| Nelson + Spencer + Washington | Bardstown, Bluegrass Parkway | Bardstown 13,565 | 78,189 |
| Anderson + Mercer + Woodford | around the Kentucky River palisades; Anderson is the middle county | Lawrenceburg 11,727 | 73,380 |
| Boyle + Garrard + Lincoln | Danville, Stanford, Lancaster, US-27/150 | Danville 17,241 | 71,841 |
| Jackson + Rockcastle | I-75 / US-25 at Mount Vernon | Mount Vernon 2,452 | 28,993 |
| Henry + Shelby | I-64, Shelbyville to Eminence | Shelbyville 17,291 | 63,782 |
| Carroll + Gallatin + Trimble | Ohio River, I-71 at Carrollton | Carrollton 3,881 | 27,959 |
| Grant + Owen | I-75 at Williamstown, Owenton | Crittenden 4,020 (Williamstown 3,899 is the seat) | 36,212 |
| Bracken + Pendleton | Ohio River / US-27 (Brooksville, Falmouth) | Falmouth 2,217 | 23,049 |
| Fleming + Mason + Robertson | Maysville and its hinterland | Maysville 8,874 | 34,404 |
| Bourbon + Harrison + Nicholas | US-27 Paris to Cynthiana | Paris 10,169 | 46,470 |
| Greenup + Lewis | Ohio River, KY-10 / US-23 | Flatwoods 7,323 | 49,041 |
| Carter + Elliott + Rowan | I-64 (Grayson, Olive Hill, Morehead) | Morehead 7,148 | 58,634 |
| Bath + Menifee + Montgomery | I-64 / US-60 at Mount Sterling | Mount Sterling 7,555 | 46,970 |
| Clark + Estill + Powell | I-64 Winchester, Mountain Parkway (Stanton) | Winchester 19,148 | 64,276 |
| Magoffin + Morgan + Wolfe | Mountain Parkway (Campton, West Liberty, Salyersville) | West Liberty 3,221 | 31,931 |
| Johnson + Lawrence + Martin | US-23 Big Sandy (Louisa, Paintsville) | Paintsville 4,322 | 50,260 |
| Floyd + Knott | Prestonsburg, KY-80/US-23 | Prestonsburg 3,921 | 50,187 |
| Leslie + Letcher + Perry | KY-15 Hazard to Whitesburg, KY-80 to Hyden | Hazard 5,257 | 60,533 |
| Bell + Harlan | US-119 / US-25E, Cumberland Gap, Pineville | Middlesborough 9,403 | 50,933 |
| Breathitt + Lee + Owsley | the Kentucky River forks (Jackson, Beattyville, Booneville) | Jackson 2,241 | 25,159 |

Exceptions to "merge under 50k": Boyd (above). Over-50k groups of small counties are accepted where a market town ties them (Henderson+Union, Nelson group, Calloway+Marshall) because both partners are under 50k.

Naming note: the automatic names read well. Station names that repeat county names: Marion (in Crittenden group), Crittenden (in Grant-Owen), Jackson (in Breathitt group), Franklin (in Allen-Simpson), Carlisle: station names are per place, so no clash unless the UI shows the county name; the main agent may prefer Williamstown for Grant-Owen.

### Alternative (59 regions)

Boyd + Greenup (Ashland-Flatwoods, 84,199, station Ashland), Fleming + Lewis + Mason (Maysville) and Bracken + Pendleton + Robertson. Pro: no exception, whole Ohio River tri-state strip together. Con: an 84k region of two metro counties and Robertson's thin link.

### Map observations

- 120 regions, symmetric neighbours, all labels in range, no empty regions.
- **Fulton** has two rings: Kentucky Bend, the real detached piece across the Mississippi (in Missouri's side). Fine, but its station must stay in the main part (Fulton/Hickman).
- places.json: 138 of 555 places have no population (CDPs, e.g. Oneida, McKee-area Annville); county-seat CDPs such as Hindman are fine. Corbin is credited to Whitley though the city straddles Knox and Laurel.
- Long names: "Louisville/Jefferson County metro government (balance)", "Lexington-Fayette urban county": phase 2 should use Louisville and Lexington.
- Only IL, MO, IN, OH neighbours exist (no WV/VA/TN yet), as expected.

## Phase 2: the pack (packs/KY/pack.js)

The phase-1 merges were applied exactly (60 regions). 60 main stations, 92 towns (86 chosen by script, 6 scenic by hand), 2 passes, 27 bridges, 4 levels. Checker: 0 errors, 0 warnings (all packs pass); pack test PASSED (17). Roads, rivers, railways, parks and bridges named here are from general knowledge, not looked up, unless a source is given; bridge points were snapped to the map's rivers and lakes by script.

**Start:** Jefferson (Louisville), Bullitt (Mount Washington) and Hardin (Elizabethtown), which all touch each other (the I-65 corridor). Louisville and Mount Washington are metro, Elizabethtown is farm, so the first track (Mount Washington-Elizabethtown, the test's pair, 34 mi) has riders; Louisville-Mount Washington joins two metros, which carries nobody in "A type of place".

**Stations.** Each is the biggest place in places.json (2020 Census) except:
- **Williamstown (Grant-Owen):** the seat in the middle of the region on I-75; Crittenden (4,020) is a northern Grant exurb of Northern Kentucky, 11 mi away, and clashes in name with Crittenden County.
- **Fort Thomas (Campbell)** is the biggest place (17,435), but its Census point is 3.1 mi from Cincinnati's station and Newport (14,160) is 1.5 mi; the point is moved to 39.06, -84.45 (the south end of Fort Thomas), 4.2 mi from Cincinnati's station and 4.1 mi from Covington's.
- **Flatwoods (Greenup-Lewis)** is moved from 38.52, -82.72 (2.2 mi from Ironton, Ohio's station) to 38.55, -82.76, 4.3 mi away, still in Greenup County.
- **Downtown points** (the Census point is the middle of the city limits): Louisville (38.25, -85.76, the waterfront: 5.5 mi from Jeffersonville's station and 4.8 mi from New Albany's, as Indiana's pack expects), Lexington (38.05, -84.50, the courthouse), Owensboro (37.77, -87.11), Paducah (37.08, -88.60). Covington's Census point (4.5 mi from Cincinnati's station) is kept, not the riverfront.
- Fulton-Graves-Hickman has its station in Mayfield (Graves), not in the Kentucky Bend piece of Fulton.
- Ids: Louisville is **SDF** (the airport code; LOU is Louisbourg in Nova Scotia). Other ids are made from the names; unique across all packs (the checker checks).
- **Types:** metro for Louisville, Lexington, Northern Kentucky (Covington, Florence, Fort Thomas), the Louisville and Lexington suburbs (Mount Washington, La Grange, Nicholasville, Georgetown), and the bigger cities (Bowling Green, Owensboro, Paducah, Richmond, Henderson, with Evansville across the river). Mountain for the Appalachian coalfield and the Cumberland Plateau (Bell-Harlan, Pike, Floyd-Knott, Leslie-Letcher-Perry, Breathitt-Lee-Owsley, Magoffin-Morgan-Wolfe, Johnson-Lawrence-Martin, Clay-Knox, McCreary-Whitley). Farm for the rest (37). No coast or desert.
- **Sizes** (PACKS.md guide, judged against OH/IN): Louisville 4 (783k, like Indianapolis 977k, Omaha, Kansas City); Lexington 3 (323k, a hair under the 350k line, but the state's second city with an airport, like Dayton and Canton in Ohio); every solo region of 50k or more 2; groups 2 if the main town has 10,000 or more (Franklin, Lawrenceburg, Mayfield, Murray, Henderson, Madisonville, Glasgow, Campbellsville, Bardstown, Danville, Shelbyville, Paris, Winchester), else 1. Boyd (the alone exception) 2.
- **Airports:** Louisville Muhammad Ali International (SDF) and Blue Grass Airport (Lexington; about the bar of Cedar Rapids and Wichita in the other packs). CVG is on Cincinnati's station in Ohio's pack. No ports (the river ports of Louisville, Owensboro and Paducah are not Great Lakes or sea giants).
- **Scenic on stations** (a famous sight within 4 mi of a station): Louisville (Churchill Downs, 3 mi south of downtown), Middlesborough (Cumberland Gap National Historical Park, 3 mi south-east), Bardstown (the Kentucky Bourbon Trail, My Old Kentucky Home State Park).

**Towns (92).** Per region: 5 for Jefferson, 3 for Fayette, 2 for regions of 35k and over, else 1 (fewer where a place would be within 4 mi of another station or town, or under 500 people: Fayette, Daviess, McCracken, Laurel and Franklin have fewer). The next-biggest places by Census population, at least 4.1 mi from every place in every pack. Scenic towns by hand (each inside its region, from general knowledge): Mammoth Cave National Park (NPS, a World Heritage Site; Edmonson), the Kentucky Horse Park (Fayette), Red River Gorge (Powell; with Natural Bridge State Resort Park), Cumberland Falls (Cumberland Falls State Resort Park, Whitley-McCreary), Land Between the Lakes (the national recreation area, Trigg), the Shaker Village of Pleasant Hill (Mercer). The coordinates are approximate points inside the right counties.

**Passes (2).** The grid has 49 mountain cells (Pine Mountain and Cumberland Mountain around Middlesborough, Harlan and Cumberland, and a few at the Virginia line): Cumberland Gap (US-25E, 36.60, -83.67) and the Pine Mountain gap at Pineville (where the Cumberland River cuts the ridge, 36.76, -83.70). Middlesborough-Harlan crosses 7 mi of mountains (a tunnel in both modes, under the 15 mi Tough limit); Harlan-Cumberland 10 mi. Pound Gap (Letcher-Virginia) is not listed: it has no mountain cell nearby and no line needs it until Virginia exists.

**Bridges (27 here, plus the shared ones).** Shared Ohio River crossings are in the Indiana, Illinois, Missouri and Ohio packs with the same names (the Kennedy, Clark Memorial, Sherman Minton and Lewis and Clark bridges, Twin Bridges at Evansville-Henderson, Natcher, Welsh, Combs-Hehl, Roebling and Brent Spence, Carl Perkins at Portsmouth, Ironton-Russell, Irvin S. Cobb at Paducah, the Cairo bridges). Kentucky's own:
- The Kentucky River: Frankfort, the Tyrone Bridge (US-62), the Brooklyn Bridge (US-27), Clays Ferry (I-75), Boonesborough, Valley View Ferry, Carrollton (US-42) and Hazard.
- The Licking: Covington-Newport, Falmouth, Blue Licks (US-68), Farmers (US-60), West Liberty and Salyersville.
- Lakes and the rest: the Eggner's Ferry Bridge (US-68/KY-80, Kentucky Lake), the Lake Barkley bridges at Cadiz (US-68/KY-80) and Kuttawa (I-24), the Kentucky Dam bridge (US-62/641), the Tennessee River at Paducah (I-24), the Smithland Bridge (Cumberland), the Burnside Bridge (US-27, Lake Cumberland), the Cumberland at Barbourville, the Salt at Taylorsville, the Green at Spottsville (US-60) and Munfordville (I-65).
- The Ohio: the Simon Kenton Memorial Bridge (Maysville-Aberdeen) and the Simeon Willis Memorial Bridge (Ashland-Ironton); the Ashland one is the least sure (from memory).
- Real coordinates are from general knowledge, not looked up; every point sits within 1 mi of the map's river or lake except the Maysville one (0.9 mi) and the Frankfort one (0.9 mi).
- Not bridged: the Green River crossings of the Western Kentucky Parkway and Central City-Owensboro, Lake Cumberland's arms between Columbia and Monticello (no real crossing I am sure of), and the Levisa Fork/Big Sandy valley (West Virginia is not in the game).

**Reachability (NR.blockedReason, both modes).** Gentle: every main station has all of its 4 nearest main stations (within 60 mi) open, and every town has an open link. Tough: every station has at least 3 of its 4 open; the three exceptions are Columbia-Monticello (4 mi across Lake Cumberland; both stations have other open links) and Murray-Princeton (5 mi along Lake Barkley and the Land Between the Lakes; Murray has Mayfield, Calloway-Benton and Hopkinsville). Chains open in both modes (Tough too): I-64 (Jeffersonville, Louisville, Shelbyville, Frankfort, Lexington, Winchester, Mount Sterling, Morehead, Ashland, Ironton), I-65 (Jeffersonville, Louisville, Mount Washington, Elizabethtown, Hodgenville, Glasgow, Bowling Green, Franklin), I-75 (Cincinnati, Covington, Florence, Williamstown, Georgetown, Lexington, Richmond, Mount Vernon, London, Corbin, Middlesborough), I-71 (Cincinnati, Florence, Carrollton, La Grange, Louisville), I-24/I-69 and the Western Kentucky Parkway (Metropolis, Paducah, Mayfield, Princeton, Hopkinsville, Marion, Henderson, Madisonville, Evansville), US-41, US-23 (Portsmouth, Flatwoods, Ashland, Paintsville, Prestonsburg, Pikeville), the Mountain Parkway (Winchester, West Liberty, Paintsville, Prestonsburg, Hazard), the Bluegrass Parkway, US-27, the Cumberland Parkway, US-68 (Bowling Green, Russellville, Hopkinsville, Murray). Links into Illinois, Missouri, Indiana and Ohio: every KY station or town within 25 mi of an Indiana, Ohio, Illinois or Missouri place has an open link in both modes (Cincinnati, Jeffersonville and New Albany, Evansville, Metropolis, Cairo, Portsmouth, Ironton, Georgetown OH, Madison IN, Corydon, Tell City and others).

**Biomes:** forest: the coalfield mountains (Bell-Harlan, Pike, Floyd-Knott, Leslie-Letcher-Perry, Breathitt-Lee-Owsley, Magoffin-Morgan-Wolfe, Johnson-Lawrence-Martin, Clay-Knox, McCreary-Whitley). Wooded: the Daniel Boone National Forest edge, the Knobs, the Ohio River hills, Mammoth Cave country and the lakes (Carter-Elliott-Rowan, Bath-Menifee-Montgomery, Clark-Estill-Powell, Jackson-Rockcastle, Laurel, Pulaski, Russell-Wayne, Adair-Casey, Clinton-Cumberland-Monroe, Boyd, Greenup-Lewis, Fleming-Mason-Robertson, Bracken-Pendleton, Butler-Edmonson-Grayson, Breckinridge-Hancock-Meade, Green-Hart-Larue, Crittenden-Livingston-Lyon, Caldwell-Trigg, Boyle-Garrard-Lincoln). The Bluegrass, the Pennyrile and the Purchase are farmland. No dry areas.

**Levels (4):** Louisville & the Knobs (13 regions, "louisville"; passengers 50, own 5 counties, connect Louisville-Elizabethtown, I-65); Lexington, the Bluegrass & Northern Kentucky (16, "bluegrass"; 140, connect Louisville-Lexington, I-64, 15 counties); Eastern Kentucky (12, "east"; 280, connect Lexington-Ashland, I-64, 28 counties, a high-speed train); Western Kentucky, the Pennyrile & the Purchase (19, "west"; 450, connect Louisville-Bowling Green, I-65, 40 counties, 30 trucks). No containers goal (no port).

**Not sure:** the Simeon Willis bridge point; whether Lexington should be size 3 or 2; approximate scenic coordinates; whether the three Northern Kentucky metro stations (Covington, Florence, Fort Thomas) and Cincinnati being all metro leaves too few riders for the Cincinnati area in "A type of place" (their riders come from Grant-Owen, Bracken-Pendleton and the rest); Corbin's Census place is credited to Whitley though it straddles Knox and Laurel. The terrain's rivers in eastern Kentucky around Prestonsburg and Pikeville are labelled "Licking" (a line near 37.52, -82.93 is far from the real Licking River, which flows north from Salyersville); I did not bridge those crossings.
