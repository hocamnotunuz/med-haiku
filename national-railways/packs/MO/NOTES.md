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

## The pack (phase 2)

**Outcome:** the merges were applied (60 regions: St. Louis city is now its own region, `mo-st-louis-city`, and St. Louis County is `mo-st-louis-county`). The pack has 60 main stations, 106 towns, 0 passes, 48 bridges, 4 levels, no bays and no city maps.

**Sources.** Populations and points: `packs/MO/raw/` (U.S. Census Bureau, 2020). Station `pop` is the region's population in thousands from counties.json. Coordinates are places.json points rounded to 2 decimals, except where listed below. Everything added by hand (bridges, scenic places, airports, roads and railways named in comments) is well known from memory; a point marked "approx." was given from memory within about a mile. Bridge points were then snapped to the nearest point of the map's river or lake (never more than 2.3 mi away), as the earlier packs place them. A helper script (`/tmp/mo-work/`) checked every place against the region polygons in map.js and the lakes in terrain.js.

### Start

`start: ["mo-st-louis-county", "mo-st-louis-city", "mo-franklin"]`: Clayton, St. Louis and Washington. The city and Franklin both touch the county. Types: metro, metro, farm. **Franklin is farm** (it holds wine country and farms west of the Meramec; Washington is on the Missouri), so the first track, Clayton to Washington (43 mi of track), has riders; the pack test laid it and 8 passengers arrived in the first week. St. Charles was left out because it is metro as well. St. Louis city touches only St. Louis County until Illinois exists.

### Main stations (60)

All ids are unused in every other pack (the checker checks). Many natural ones were taken (TROY, CUBA, BLTN, NVDA, CMRN...), so those got an "MO" or similar ending (TRMO, CBMO, BLTM, NVMO, CMMO).

**Sizes** follow the other packs (size 2 from about 60k when the place is a real city, as in Iowa; size 1 below):
- **St. Louis city is size 5** although its region is only 302k: San Francisco (874k) is 5, and this is the core of a metro of about 2.8 million with the Arch and Lambert. St. Louis County (Clayton, 1.0M) is 4, as Omaha and Denver. St. Charles (405k) is 3. Arnold (227k), Washington (105k), Troy (60k), Farmington, Cape Girardeau, Columbia, Jefferson City, Rolla (69k), Liberty (253k), Parkville, Belton, St. Joseph, Nixa and Joplin are 2.
- **Kansas City (Jackson, 717k) is 4**, as Denver (716k). Springfield (299k) is 3, as Lincoln (323k) and Norman (296k).
- The other 41 are size 1.

**Types:** metro 15 (St. Louis and its counties, Kansas City's three counties, Columbia, Jefferson City, Cape Girardeau, St. Joseph, Springfield, Nixa, Joplin); mountain 8 (the Ozark highlands: Farmington, Cuba, Fredericktown, Rolla, Salem, Waynesville, West Plains, Branson, by Colorado's and Oklahoma's use of "mountain" for forested uplands); coast 1 (Osage Beach, a lake resort, as Iowa's Arnolds Park is typed "coast"); farm 36.

**Airports:** St. Louis Lambert International (on the city's station; the airport is in north St. Louis County at Bridgeton, but the brief puts it in "St. Louis") and Kansas City International (in Platte County's part of Kansas City, on the Kansas City station). Both are over 5 million passengers a year (from memory), the bar the other packs use. Springfield-Branson (about a million) is left out, as Lincoln and Norman have none. **No port:** St. Louis is the biggest port on the inland rivers (from memory, rank moderately known), but the other packs mark `port` only for seaports and Duluth, so none is marked.

**Points changed from the Census point:**
- **St. Louis (38.63, -90.20):** downtown by the Arch; the Census point is 2.6 mi west-southwest. St. Louis County's station, Clayton, is 7.9 mi away.
- **Clayton (38.65, -90.34):** the county seat and second downtown (offices, MetroLink, I-64), not its biggest place, Florissant (52,536, 11 mi north). It sits in the middle of the county. Florissant, Chesterfield and Kirkwood are towns.
- **St. Charles (38.78, -90.48):** the historic Main Street, county seat, the I-70 crossing of the Missouri and the Katy Trail's old town, rather than the biggest place, O'Fallon (91,332; a size-2 town here, with St. Peters and Wentzville).
- **Kansas City (39.09, -94.56):** 18th and Vine, east of downtown, to keep it 4.0 mi from the Kansas station (KCK, 39.11, -94.63). The Census point (39.12, -94.56) is 2.2 mi north; the real downtown (39.10, -94.58) is 2.9 mi from KCK.
- **Liberty (39.25, -94.42):** its square, 0.7 mi from the Census point. Independence (39.09, -94.42) is a town, at its Square (the Census point is 4 mi east). Clay's second city Gladstone is a size-2 town; Platte's is Parkville (Platte City is a town).
- **Cape Girardeau (37.31, -89.53):** downtown on the Mississippi, 2.4 mi east of the Census point.
- **Jefferson City (38.58, -92.17):** the Capitol, 0.7 mi from the Census point.
- **Springfield (37.21, -93.29):** the downtown square, 1.1 mi north of the Census point.
- **Joplin (37.08, -94.51):** downtown, 0.7 mi from the Census point.
- **Osage Beach (38.15, -92.63):** nudged 1.3 mi, because its Census point falls inside the Lake of the Ozarks on the map.
- **Waynesville** (Pulaski): the biggest place with a Census population; Fort Leonard Wood has none, and St. Robert (5,240) is 3.6 mi east.
- All other stations are at their Census points. The biggest place is the station in every region except Clayton and St. Charles, as above.

### Towns (106)

About 1.8 per region, the next-biggest real places, spread out (the checker finds none under 4 mi apart). The St. Louis, Kansas City, Springfield and Lake of the Ozarks areas have more, from the suburbs (size 2: Florissant, Chesterfield, O'Fallon, St. Peters, Gladstone, Independence, Lee's Summit). Most are county seats. Kansas City's other towns are Blue Springs and Independence; the south west has Republic, Ozark, Webb City and Carthage.

**Scenic places (14, all well known):** St. Louis (the Gateway Arch), Kansas City (barbecue, jazz and the museums), Sedalia (the Missouri State Fair), Hannibal (Mark Twain's boyhood home), Branson (the show town on Lake Taneycomo), Silver Dollar City (the theme park near Branson West, in Stone County: Lawrence-Stone), Rocheport (the Katy Trail's best-known town), Ha Ha Tonka State Park (the castle ruin above the Lake of the Ozarks, approx.), Elephant Rocks State Park (granite boulders, Iron County, approx.), Bennett Springs State Park (a big spring and trout stream, approx.), Johnson's Shut-Ins State Park (Reynolds County, approx.), Meramec Caverns (Stanton, approx.), Hermann (the German wine town on the Missouri) and Sainte Genevieve (Missouri's oldest town, a national historical park). Region membership was checked: Elephant Rocks is at 37.64, -90.63 (moved 0.7 mi: the map puts the line at 37.65 in St. Francois), and Silver Dollar City is in the Lawrence-Stone region (it is in Stone County).
Not used: Taum Sauk Mountain (the state's high point, a place with no town), the Gateway Arch as its own point (the city station is scenic), and Truman Library (Independence is a town).

### Levels (4)

Areas by regions (60): **stl** (14: St. Louis city and county, St. Charles, Jefferson, Franklin, Lincoln, Montgomery-Warren, St. Francois, Perry-Ste. Genevieve, Cape Girardeau, Crawford-Iron-Washington, Gasconade-Maries-Osage, Audrain-Pike, Bollinger-Madison-Wayne), **central** (16: Boone, Cole, Callaway, Cooper-Moniteau-Morgan, Howard-Randolph, Camden-Miller, Pettis, Benton-Hickory-St. Clair, Pulaski, Phelps-Texas, Dent-Reynolds-Shannon, Marion-Monroe-Ralls, Chariton-Macon-Shelby, Lafayette-Saline, Carroll-Ray, Johnson), **west** (14: Jackson, Clay, Platte, Cass, Buchanan, Clinton-DeKalb, Andrew-Atchison-Holt, Gentry-Nodaway-Worth, Caldwell-Daviess-Livingston, Grundy-Harrison-Mercer, Linn-Putnam-Sullivan, Adair-Schuyler-Scotland, Clark-Knox-Lewis, Bates-Henry) and **south** (16: Greene, Christian, Taney, Newton, Jasper, Barry-McDonald, Lawrence-Stone, Dade-Polk, Dallas-Laclede, Douglas-Webster-Wright, Howell-Oregon-Ozark, Butler-Carter-Ripley, Mississippi-Scott, New Madrid-Pemiscot, Dunklin-Stoddard, Barton-Cedar-Vernon).
1. St. Louis & the East: 50 passengers, 5 counties, 10 crates of produce.
2. Columbia, Jefferson City & the Lake of the Ozarks: 140 passengers, connect Clayton to Columbia (I-70), 12 counties.
3. Kansas City, St. Joseph & the North: 280 passengers, connect Columbia to Kansas City (the rest of I-70), a high-speed train.
4. Springfield, the Ozarks & the Bootheel: 450 passengers, connect Clayton to Springfield (I-44), 25 counties.
(The pack test starts Levels mode and reads level 1.)

### Passes, bridges, water, biomes

**Passes: none.** The map's grid has 90 hill cells and no mountain cell, so a pass would have nothing to cross (the checker warns for any pass without mountains within about 7 mi). The Ozarks, Taum Sauk and the Missouri bluffs are hills here.

**Geography code reads** (js/geography.js): rivers never block, they only cost a bridge ($10k, or $3k at a real bridge in Gentle); the only blockers are lakes (more than 8 mi in Gentle, 2 mi in Tough) with no real bridge within 4 (3) mi of the line. So the bridge list matters most for track costs, the big lakes in Tough, and for consistency with the neighbours.

**Bridges (48), all real and well known; points snapped to the map's rivers and lakes:**
- **Mississippi (18):** St. Louis (Eads, Poplar Street, Martin Luther King, Stan Musial Veterans Memorial, Merchants (rail), Chain of Rocks (I-270)), Alton (Clark Bridge, Missouri side of the river), Jefferson Barracks (I-255), Hannibal (Mark Twain Memorial Bridge, US-36), Louisiana (Champ Clark Bridge, US-54), Quincy (Bayview Bridge, US-24), Canton, Cape Girardeau (Bill Emerson Memorial), Chester (Route 51), Ste. Genevieve-Modoc (Route 32, opened 2022, moderately known), Thebes (rail), Cairo (US-60/62, moderately known) and Caruthersville (I-155).
- **Missouri (15):** Kansas City (Heart of America and ASB bridges; Christopher S. Bond Bridge, I-29/35), St. Charles (Blanchette, I-70), Chesterfield (Daniel Boone Bridge, I-64), Washington (Route 47), Hermann (Route 19), Jefferson City (US-54/63), Boonville (Route 5), Rocheport (I-70), Glasgow (Route 240), Lexington (US-24), Waverly (US-65), and the Nebraska line at Rulo (US-159) and Brownville (Route 136). Kansas's pack has Fairfax, Leavenworth, Atchison and the Pony Express bridge (St. Joseph), which this pack does not repeat.
- **Lakes (6):** the Lake of the Ozarks (Grand Glaize Bridge, US-54; the Community Bridge, Route 242; Bagnell Dam; the Hurricane Deck Bridge, Route 5, approx.), Truman Lake (US-65, Warsaw) and Table Rock Lake (Kimberling City bridge, Route 13; the dam, Route 65 side: moderately known). Left out: Bull Shoals (the map's lake line is 7 mi from the Theodosia bridge; the lake runs into Arkansas) and Stockton, Pomme de Terre, Wappapello and Mark Twain lakes (no main line crosses them).
- **Other rivers (7):** the Meramec (I-44 at Valley Park and at Pacific; Route 8 at Steelville), the Black (US-67, Poplar Bluff), the Current (Van Buren, Doniphan), the Grand (Gallatin), the Osage (Tuscumbia) and the Platte (Platte City).
- Not listed (no certain location): the Gasconade, Salt and Des Moines rivers' bridges; the Chouteau and St. Joseph bridges.

**Bays:** none. No water in Missouri is a bay; Lake Taneycomo and the lakes above are on the terrain's lake list.

**Biomes:**
- **forest:** the Ozark highlands (Dent-Reynolds-Shannon, Howell-Oregon-Ozark, Butler-Carter-Ripley, Crawford-Iron-Washington, Bollinger-Madison-Wayne, Phelps-Texas, Douglas-Webster-Wright, Taney): the Mark Twain National Forest and the Ozark National Scenic Riverways, as Oklahoma's Ozark plateau across the line.
- **wooded:** St. Francois, Jefferson, Franklin, Gasconade-Maries-Osage, Camden-Miller, Benton-Hickory-St. Clair, Pulaski, Dallas-Laclede, Lawrence-Stone, Barry-McDonald, Christian, Perry-Ste. Genevieve and Cooper-Moniteau-Morgan: the Ozarks' edges and the Missouri River bluffs.
- **not listed:** the northern and western prairies and farms, the river bottoms and the Bootheel. No `dry`.

### Reachability (Gentle and Tough)

Checked with `NR.blockedReason`, loading the game as `tools/check-pack.js` does plus `js/geography.js`, with every pack's map, terrain and bridges (so Iowa's, Kansas's, Nebraska's and Oklahoma's stations count).
- **Neighbours:** all 177 neighbouring pairs of main stations (inside Missouri and across the Kansas, Iowa, Nebraska and Oklahoma lines) are open in both modes. Every Missouri station has at least two open neighbours except St. Louis city (its only neighbour is St. Louis County until Illinois exists).
- **Towns:** every town has an open link to its region's station in both modes.
- **Chains, open in both modes:** I-70 (St. Louis, Clayton, St. Charles, Warrenton, Fulton, Columbia, Boonville, Marshall, Kansas City); I-44 (Clayton, Washington, Cuba, Rolla, Lebanon, Marshfield, Springfield, Aurora, Joplin); I-55 (St. Louis, Clayton, Arnold, Perryville, Cape Girardeau, Sikeston, Caruthersville); I-29/I-35 (St. Joseph, Savannah, Cameron, Liberty, Kansas City); US-36 (St. Joseph, Cameron, Chillicothe, Brookfield, Macon, Hannibal); US-71 (Kansas City, Belton, Clinton, Nevada, Neosho); US-54/63 (Columbia, Jefferson City, Salem); the Missouri (Kansas City, Parkville, St. Joseph); US-61 (St. Louis, St. Charles, Troy, Mexico, Hannibal, Canton).
- **Links into other states** (all open): Kansas City to Kansas City and Overland Park (Kansas), Parkville to Leavenworth and Atchison, Belton to Overland Park and Paola, Joplin and Neosho to Pittsburg and to Miami (Oklahoma, Neosho 26 mi), Nevada to Fort Scott, Savannah and Maryville to the Iowa and Nebraska stations across the Missouri's corner.
- **Not checked:** Illinois, Arkansas, Tennessee and Kentucky (they do not exist yet). The Mississippi bridges listed above match what those states will place.

### First track and screenshots

The pack test laid Clayton to Washington (43 mi, 1 train) and 8 passengers arrived in the first week; it bought the Crawford-Iron-Washington region, saved and loaded, started Levels mode and took the Arcade/Classic, light/dark and phone pictures (`test-out/MO/`). In the arcade picture the stations sit sensibly: Clayton, St. Louis and Washington along the Missouri, Cuba on I-44 and the Ozarks' forest and "mountain" stations in the south east.

### Unsure

- **Hurricane Deck, Ha Ha Tonka, Elephant Rocks, Bennett Springs, Johnson's Shut-Ins, Meramec Caverns, Ste. Genevieve-Modoc and Cairo:** locations approximate (within about a mile); sizes and names are right.
- **St. Louis size 5 and port:** a judgment call (see above).
- **Springfield size 3**, **Clayton and St. Charles instead of Florissant and O'Fallon**, and **Franklin as the farm start**: judgment calls, easy to change.

## Main agent's review

- **St. Louis is size 4, not 5:** like Denver and Kansas City, the cores of metros of 2 to 3 million (Denver 4, Kansas City 4, Omaha 4; size 5 is for Los Angeles, Phoenix, Houston, Minneapolis and the like).
- **Moved to the real places:** Branson to its downtown (36.64, -93.22; the Census point is 7 km southwest), Elephant Rocks State Park to the park (37.65, -90.69), Bennett Spring State Park (its real name) to the park (37.72, -92.86).
- check-pack MO: 0 errors, 0 warnings; test-pack MO passed after the changes.

## City maps

**St. Louis (STL, size 4, 12 stops).** Hub: the Gateway Transportation Center (Amtrak and MetroLink, next to Union Station). Stops: Gateway Transportation Center, Gateway Arch, Soulard, Central West End, Grand Center, Forest Park, Washington University, The Hill, Clayton, Lambert Airport, East St. Louis (Illinois, across the Mississippi), Kirkwood. Furthest 12.3 mi, closest pair 1.1 mi. Left out: St. Charles and Chesterfield (the Missouri River side), Belleville (Illinois). The Arch stop sits on the west bank, 90 m from the water in the preview (land); East St. Louis is on the east bank (land).

**Kansas City (KC, size 4, 12 stops).** Hub: Union Station (Amtrak Missouri River Runner, KC Streetcar), 2 mi west of the state map's point. Stops: Union Station, Power & Light District, 18th & Vine, Country Club Plaza, UMKC, Kansas City, Kansas (downtown), Airport (MCI), Truman Sports Complex (Arrowhead and Kauffman stadiums), Independence, Overland Park (Kansas), North Kansas City, Lee's Summit. Furthest 16.6 mi, closest pair 1.1 mi. Left out: Olathe, Lawrence (too far), Liberty and the Legends (Kansas) district. The map crosses into Kansas for two stops.

Sources: general knowledge of each place (neighborhoods, stadiums, airports, stations). Coordinates from memory, 3 decimals, good to a few hundred metres; no stop is in water in the terrain preview (checked against the water shapes and one picture each).

- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
