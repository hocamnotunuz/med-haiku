# Missouri (MO) pack notes

## Region merges (phase 1)

Populations: `packs/MO/raw/counties.json` and `packs/MO/raw/places.json` (U.S. Census Bureau, 2020 base). Every group was checked for connection through `neighbors` with a helper script (all connected). Roads, rails and rivers named below are well known unless marked "(moderately known)". Station rule: the largest place in places.json, as in NM and CO.

### Recommended (114 -> 59 regions)

```
merge: [["Andrew", "Atchison", "Holt"], ["Gentry", "Nodaway", "Worth"], ["Clinton", "DeKalb"], ["Caldwell", "Daviess", "Livingston"], ["Grundy", "Harrison", "Mercer"], ["Linn", "Putnam", "Sullivan"], ["Adair", "Schuyler", "Scotland"], ["Clark", "Knox", "Lewis"], ["Chariton", "Macon", "Shelby"], ["Howard", "Randolph"], ["Marion", "Monroe", "Ralls"], ["Audrain", "Pike"], ["Montgomery", "Warren"], ["Carroll", "Ray"], ["Lafayette", "Saline"], ["Cooper", "Moniteau", "Morgan"], ["Camden", "Miller"], ["Gasconade", "Maries", "Osage"], ["Benton", "Hickory", "St. Clair"], ["Bates", "Henry"], ["Barton", "Cedar", "Vernon"], ["Dade", "Polk"], ["Dallas", "Laclede"], ["Douglas", "Webster", "Wright"], ["Lawrence", "Stone"], ["Barry", "McDonald"], ["Howell", "Oregon", "Ozark"], ["Butler", "Carter", "Ripley"], ["Dent", "Reynolds", "Shannon"], ["Phelps", "Texas"], ["Crawford", "Iron", "Washington"], ["Bollinger", "Madison", "Wayne"], ["Perry", "Ste. Genevieve"], ["Dunklin", "Stoddard"], ["New Madrid", "Pemiscot"], ["Mississippi", "Scott"]]
names: {}
```

No `names`, `bridges` or `join` are needed: the automatic names ("Andrew-Atchison-Holt County" and so on) read fine and no county in Missouri is cut off by water.

36 groups (91 counties) + 23 alone = 59 regions. Alone (23): the 21 counties of 50k and over, plus two exceptions:
- **Callaway** 44,171 (Fulton 12,595): the Missouri River lies between it and Cole, Osage and Miller; its only other small neighbour, Audrain, is already joined to Pike for Mexico (US-54 does link Fulton and Mexico, but Audrain + Callaway would be 69k and Pike would be stranded).
- **Pettis** 42,684 (Sedalia 21,735): a real hub (US-50/65, the Union Pacific Sedalia line). Its small neighbours already have a better home (Cooper-Moniteau-Morgan, Lafayette-Saline, Henry-Bates, Benton group).

### Groups, stations, populations

| Group | Why | Station | Pop |
| --- | --- | --- | --- |
| Andrew + Atchison + Holt | I-29 north of St. Joseph (chain Andrew-Holt-Atchison) | Savannah 5,067 | 27,667 |
| Gentry + Nodaway + Worth | US-71 / US-169 north-west corner around Maryville | Maryville 10,627 | 29,365 |
| Clinton + DeKalb | I-35 and US-36 around Cameron | Cameron 8,522 | 32,210 |
| Caldwell + Daviess + Livingston | US-36 / US-65 around Chillicothe | Chillicothe 9,116 | 31,792 |
| Grundy + Harrison + Mercer | US-65 Trenton to Princeton, I-35 at Bethany | Trenton 5,613 | 21,506 |
| Linn + Putnam + Sullivan | Brookfield (US-36 and the Hannibal-St. Joseph rail line), US-65 to Milan | Brookfield 4,106 | 22,550 |
| Adair + Schuyler + Scotland | Kirksville with US-63 north and US-136 | Kirksville 17,542 | 34,058 |
| Clark + Knox + Lewis | the Mississippi / US-61 north-east corner | Canton 2,770 | 20,413 |
| Chariton + Macon + Shelby | US-36 and the Macon area | Macon 5,456 | 28,723 |
| Howard + Randolph | Moberly (BNSF, US-63/24), Fayette | Moberly 13,806 | 34,862 |
| Marion + Monroe + Ralls | Hannibal and Mark Twain Lake | Hannibal 17,107 | 47,547 |
| Audrain + Pike | US-54 / US-61 Mexico to Bowling Green (moderately known) | Mexico 11,466 | 42,540 |
| Montgomery + Warren | I-70 Warrenton to Montgomery City | Warrenton 8,448 | 46,840 |
| Carroll + Ray | Missouri River north bank, Richmond / Carrollton | Richmond 6,017 | 31,656 |
| Lafayette + Saline | I-70 and US-65, Marshall, Lexington | Marshall 13,795 | 56,310 |
| Cooper + Moniteau + Morgan | Boonville, California, Versailles (US-50 / US-54) | Boonville 8,044 | 53,579 |
| Camden + Miller | Lake of the Ozarks in one region | Osage Beach 4,688 | 67,472 |
| Gasconade + Maries + Osage | Missouri River bluffs, Owensville / Hermann / Linn | Owensville 2,813 | 36,497 |
| Benton + Hickory + St. Clair | Truman Lake, Warsaw | Warsaw 2,213 | 36,949 |
| Bates + Henry | US-71 / MO-7, Clinton | Clinton 9,198 | 37,983 |
| Barton + Cedar + Vernon | US-71 Nevada to Lamar | Nevada 8,232 | 45,534 |
| Dade + Polk | MO-13 / US-54, Bolivar | Bolivar 10,768 | 39,092 |
| Dallas + Laclede | MO-32 Buffalo to Lebanon, I-44 | Lebanon 15,016 | 53,103 |
| Douglas + Webster + Wright | MO-5 from Springfield by Marshfield (I-44) to Ava, US-60 at Mountain Grove | Marshfield 7,460 | 68,853 |
| Lawrence + Stone | Aurora / Mount Vernon (I-44) with Table Rock Lake's north shore | Aurora 7,222 | 69,093 |
| Barry + McDonald | Monett, Cassville, the south-west corner | Monett 9,600 | 57,834 |
| Howell + Oregon + Ozark | US-160 corridor Gainesville - West Plains - Alton | West Plains 12,177 | 56,937 |
| Butler + Carter + Ripley | Poplar Bluff with US-67 / US-160 | Poplar Bluff 16,230 | 58,012 |
| Dent + Reynolds + Shannon | MO-19 Salem to Eminence, the Current River | Salem 4,655 | 27,539 |
| Phelps + Texas | US-63 Rolla to Licking | Rolla 19,937 | 69,128 |
| Crawford + Iron + Washington | Cuba (I-44), MO-8, the Old Lead Belt | Cuba 3,169 | 56,103 |
| Bollinger + Madison + Wayne | Fredericktown, US-67 | Fredericktown 4,429 | 34,174 |
| Perry + Ste. Genevieve | I-55 and the Mississippi | Perryville 8,550 | 37,432 |
| Dunklin + Stoddard | Kennett / Dexter, US-412 / US-60 (moderately known) | Kennett 10,510 | 56,962 |
| New Madrid + Pemiscot | Mississippi bootheel, Caruthersville | Caruthersville 5,561 | 32,090 |
| Mississippi + Scott | I-55 and Sikeston | Sikeston 16,292 | 50,627 |

Many groups end above 50k (Phelps + Texas 69k, Lawrence + Stone 69k, Douglas + Webster + Wright 69k): the extra county is small and has no other home (as Cherokee + Crawford in Kansas).

Corridors stay clean chains: I-70 (Jackson, Lafayette-Saline, Cooper-Moniteau-Morgan, Boone, Callaway, Montgomery-Warren, St. Charles, St. Louis); I-44 (St. Louis, Franklin, Crawford group, Phelps-Texas, Dallas-Laclede, Douglas-Webster-Wright, Greene, Lawrence-Stone, Jasper); I-55 (St. Louis, Jefferson, Perry-Ste. Genevieve, Cape Girardeau, Mississippi-Scott, New Madrid-Pemiscot); I-29/I-35 (Kansas City, Platte/Clay, Clinton-DeKalb, Grundy-Harrison-Mercer; Buchanan, Andrew-Atchison-Holt); US-36 (Clinton-DeKalb, Caldwell group, Linn group, Chariton-Macon-Shelby, Marion group).

### Rejected / considered
- Stone + Taney (the Branson / Table Rock area): Taney is over 50k and stays alone. Stone joins Lawrence (Crane to Aurora) instead.
- Audrain + Callaway (Fulton-Mexico on US-54): leaves Pike with nobody.
- Hannibal group with Lewis (US-61): Lewis goes with Clark and Knox instead, so Hannibal stays under 50k.
- Butler + Wayne (US-67): Wayne goes down the Fredericktown / Piedmont side.
- Dallas + Webster: Buffalo's road (MO-32) leads to Lebanon.
- Bates + Cass: Cass is over 50k.

### Alternative (59 regions, same count)
`Camden` alone; `["Maries", "Miller", "Osage"]` (46k, Eldon 4,414) and `["Gasconade", "Montgomery", "Warren"]` (62k, Warrenton) replace Camden-Miller, Gasconade-Maries-Osage and Montgomery-Warren. Pro: Camden (43k) stays a county of its own, which adds one more "alone under 50k" exception for the sake of nothing; con: the Lake of the Ozarks is split between two regions (Osage Beach in Camden, Lake Ozark and Eldon in Miller), and Gasconade joins I-70 towns it has little road contact with.

### Things that look wrong on the map
1. **St. Louis city is missing.** counties.json has 114 regions (St. Louis County only; FIPS 29189), no 29510 (independent city, 301,578 people). The state total is 5,853,324, not 6,154,913. In map.js `mo-st-louis` has one ring of about 0.14 square degrees (roughly the county's 520 square miles), so the city's land is probably a hole. places.json assigns "St. Louis" (301,565) to `mo-st-louis`, so the county shows 1,004k with the city's station but not its land. The brief's "separate areas" does not match the data. Fix in tools/build-map.js (add 29510 as its own region or fold it into St. Louis County) before the pack is built.
2. Newton lists `ks-cherokee-crawford` as a neighbour. Newton County only meets Kansas at a corner (the Jasper/Newton line is on the Kansas border): it is probably a point contact. Jasper's link is the real one. Check the shared length.
3. places.json gives no population for CDPs and military posts (Fort Leonard Wood in Pulaski, Whiteman AFB in Johnson), so Pulaski's station is Waynesville (5,421) and the largest town of Pulaski is understated. Incorporated Philadelphia (Marion) and Fairdealing (Ripley) have null population too.
4. Illinois, Arkansas, Tennessee and Kentucky are not in the game yet, so the Mississippi-side counties (Clark, Lewis, Marion, Pike, Lincoln, St. Charles, St. Louis, Jefferson, Ste. Genevieve, Perry, Cape Girardeau, Scott, Mississippi, New Madrid, Pemiscot) and the southern tier have no neighbours across the river or border for now.
