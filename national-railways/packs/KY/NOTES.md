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
