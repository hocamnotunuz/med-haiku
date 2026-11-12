# Arkansas (AR) pack notes

## Region merges (phase 1)

Populations: `packs/AR/raw/counties.json` and `packs/AR/raw/places.json` (U.S. Census Bureau, 2020 estimates base; state total 3,011k). Every group was checked as connected through `neighbors` (script under /tmp/ar-work). Roads, rivers, railways and mountains named here are well known unless marked "(moderately known)". Station rule: the largest place in places.json, as in NM and CO.

### Recommended (75 -> 39 regions)

```
merge: [["Clay", "Greene"], ["Lafayette", "Miller"], ["Baxter", "Marion"], ["Mississippi", "Poinsett"], ["Columbia", "Union"], ["Independence", "Jackson"], ["Boone", "Newton", "Searcy"], ["Clark", "Hot Spring"], ["Carroll", "Madison"], ["Franklin", "Johnson"], ["Cleburne", "Van Buren"], ["Fulton", "Izard", "Stone"], ["Logan", "Yell"], ["Conway", "Perry"], ["Dallas", "Ouachita"], ["Ashley", "Bradley", "Calhoun"], ["Chicot", "Desha", "Drew"], ["Cleveland", "Grant", "Lincoln"], ["Cross", "St. Francis"], ["Lee", "Monroe", "Phillips"], ["Arkansas", "Prairie", "Woodruff"], ["Lawrence", "Randolph", "Sharp"], ["Hempstead", "Nevada", "Pike"], ["Howard", "Little River", "Sevier"], ["Montgomery", "Polk", "Scott"]]
names: {}
bridges / join: none
```

Alone, 50k and over (13): Pulaski, Benton, Washington, Sebastian, Faulkner, Saline, Craighead, Garland, White, Lonoke, Jefferson, Pope, Crawford.
Alone, under 50k (1, the exception): **Crittenden** 48,156 (West Memphis 24,515). It is 2k short of 50k, sits at the Memphis edge on I-40/I-55, and its neighbours (Mississippi, Cross, St. Francis, Lee, Poinsett) each belong more naturally to another group. No names are needed.

| Group | Why | Station | Pop |
| --- | --- | --- | --- |
| Clay + Greene | Northeast corner, Crowley's Ridge/US-49 and US-62; Paragould is the hub | Paragould 29,546 | 60,286 |
| Lafayette + Miller | Texarkana and the Red River country, US-71 south (moderately known) | Texarkana 29,387 | 48,904 |
| Baxter + Marion | White River lakes, Bull Shoals and Norfork; US-62/412 | Mountain Home 12,824 | 58,456 |
| Mississippi + Poinsett | Delta cotton land, I-55 and I-555 (moderately known) | Blytheville 13,408 | 63,647 |
| Columbia + Union | South Arkansas oil country, US-82/167 | El Dorado 17,757 | 61,850 |
| Independence + Jackson | White River valley, Batesville to Newport | Batesville 11,199 | 54,696 |
| Boone + Newton + Searcy | Harrison hub, US-65 and the Buffalo River country; AR-7 to Jasper (moderately known) | Harrison 13,070 | 52,423 |
| Clark + Hot Spring | I-30 and the Union Pacific, Malvern to Arkadelphia | Malvern 10,857 | 54,489 |
| Carroll + Madison | Ozarks east of Benton/Washington, US-412 | Berryville 5,678 | 44,776 |
| Franklin + Johnson | Arkansas River valley, US-64 (Ozark to Clarksville), Union Pacific line | Clarksville 9,365 | 42,852 |
| Cleburne + Van Buren | Greers Ferry Lake, US-65 | Heber Springs 6,969 | 40,505 |
| Fulton + Izard + Stone | North-central Ozarks; AR-9 and US-62/412 | Cherokee Village 4,785 | 38,006 |
| Logan + Yell | Between the Arkansas River and the Ouachitas, AR-10/22 (moderately known) | Dardanelle 4,513 | 41,384 |
| Conway + Perry | Arkansas River, I-40 at Morrilton | Morrilton 6,989 | 30,728 |
| Dallas + Ouachita | US-79 Fordyce to Camden | Camden 10,617 | 29,128 |
| Ashley + Bradley + Calhoun | Southeast pine country, US-278/63 (moderately known) | Warren 5,455 | 34,343 |
| Chicot + Desha + Drew | Delta south, US-65/278, Mississippi River | Monticello 8,438 | 38,954 |
| Cleveland + Grant + Lincoln | Pine Bluff and Little Rock fringe, US-167/65 | Sheridan 4,984 | 38,446 |
| Cross + St. Francis | I-40 and US-64, Forrest City to Wynne | Forrest City 13,016 | 39,922 |
| Lee + Monroe + Phillips | Mississippi River, Helena, Marianna | Helena-West Helena 9,588 | 31,966 |
| Arkansas + Prairie + Woodruff | Grand Prairie rice land; White and Arkansas rivers | Stuttgart 8,266 | 31,707 |
| Lawrence + Randolph + Sharp | US-63/67, Black and Spring rivers | Pocahontas 7,391 | 52,069 |
| Hempstead + Nevada + Pike | I-30 at Hope, US-67/278 | Hope 8,944 | 38,550 |
| Howard + Little River + Sevier | Southwest, US-71 and the KCS line (moderately known) | De Queen 6,105 | 40,651 |
| Montgomery + Polk + Scott | Ouachita Mountains, US-71/270, Talimena | Mena 5,586 | 37,533 |


Rejected: Mississippi alone and Greene alone (both under 50k with ready partners); Logan + Franklin (Arkansas River splits them from Yell); Union alone (39k, Columbia has no better partner).

### Alternative (40 regions)

Replace `["Lafayette","Miller"]`, `["Columbia","Union"]`, `["Hempstead","Nevada","Pike"]`, `["Howard","Little River","Sevier"]` with Miller alone (43k, Texarkana), Union alone (39k, El Dorado), `["Columbia","Lafayette","Nevada"]` (Magnolia 11,163), `["Hempstead","Howard","Pike"]` (Hope) and `["Little River","Sevier"]` (De Queen): Pro: Texarkana and El Dorado keep their own stations. Con: more regions, two under-50k exceptions.

### Map and data check

1. All 75 counties are a single ring each, labels are inside their county, and all 625 places lie inside their tagged county. Neighbours are symmetric within AR.
2. Neighbours: MO, OK and TX links look right (Miller-Bowie, Little River-Bowie, Sebastian/Crawford-OK). Louisiana, Mississippi and Tennessee links are absent (they come later); Mississippi County, Crittenden and Phillips (the river) border TN/MS across the Mississippi.
3. 125 of 625 places have no population (not incorporated). Duplicate names are real separate places: Salem (Fulton/Saline), Sulphur Springs (Benton/Jefferson), Oak Grove (Carroll/Pope), Midway (Hot Spring/Baxter).
4. Texarkana: the Arkansas city is in Miller; the Texas twin is in Bowie (TX pack).

## The pack (phase 2)

**Outcome:** the phase 1 list was applied (39 regions). `pack.js` has 39 main stations, 60 towns (9 of them scenic), 0 passes, 38 bridges and 4 levels. Checks: `node tools/check-pack.js AR` 0 errors and 0 warnings; all packs pass; `node tools/test-pack.js AR` PASSED (17 passed, 0 failed). The arcade screenshot looks right (Little Rock, Conway, Cabot and Jacksonville on the start counties).

**Sources.** Populations and Census points: `packs/AR/raw/` (U.S. Census Bureau, 2020). Station `pop` is the region's population in thousands from counties.json. Roads, railways, rivers and places are well known unless marked "moderately known". A point marked "approx." is from memory, within a mile or two.

### Start
`ar-pulaski`, `ar-faulkner` and `ar-lonoke`: they all touch each other. Little Rock and Conway are metro and Cabot is farm, so the first track (Little Rock-Cabot, 25 miles) has riders. The test laid it and 20 passengers arrived in a week.

### Stations
- **Sizes:** Little Rock (399k) 3; regions of about 60k and over with a real city 2 (Rogers, Fayetteville, Fort Smith, Conway, Benton, Cabot, Jonesboro, Hot Springs, Pine Bluff, Searcy, Russellville, Van Buren, Paragould, Blytheville, El Dorado); everything else 1. Tulsa and Oklahoma City are 4 in the OK pack, so Little Rock stays 3.
- **Types:** metro for the university and big-city regions; mountain for the Ozarks and Ouachitas (Hot Springs, Harrison, Mountain Home, Berryville, Heber Springs, Mountain View, Mena); the rest farm (the Delta's rice, cotton and soybeans, and the pine belt).
- **Airports:** Little Rock (Clinton National) and Rogers (Northwest Arkansas National, at Highfill, in Benton County). Both are the state's big commercial airports. No port: the Arkansas River's ports (Little Rock, Pine Bluff) are not seaports.
- **Moved to downtown** (Census point more than a few km away): Little Rock, Pine Bluff, Fort Smith (4 miles; also keeps it 5 miles from OK's Roland), Rogers, Sheridan, Texarkana (see below) and others by under 2 miles (see the pack's comments).
- **Not the biggest place:**
  - Booneville (3,812) for Dardanelle (4,513): Dardanelle is 4 miles from Russellville's station.
  - Malvern (10,857) is the biggest, kept over Arkadelphia (10,384).
  - Mountain View (2,866) for Cherokee Village (4,785): it is Stone's seat, the Ozark Folk Center's town and central to the region; Cherokee Village is at the east edge (a town).
  - Warren (5,455) is the biggest; Crossett is a town.
  - Sheridan (4,984) is the biggest and a call too: it is the north end of a long thin region (Grant, Cleveland, Lincoln) on US-167. Rison (966), the centre, is too small.
  - Van Buren (Crawford) and Rogers (Benton, not Bentonville) are the biggest places.
- **Texarkana** (Miller-Lafayette): moved from the Census point (33.44, -93.99, 3.3 miles from Texas's TXK) 1.2 miles east to 33.44, -93.97, so that it is 4.7 miles from TXK. The Arkansas half's downtown is on the state line.
- **North Little Rock** (64,602) is not a town: its centre is under 4 miles from Little Rock's station. Sherwood, Jacksonville and Maumelle are the towns of Pulaski. Marion (13,769, Crittenden) is not a town either (4 miles from West Memphis).
- **West Memphis** faces Memphis (8 miles) and the Hernando de Soto Bridge. **Fort Smith** is 5 miles from Roland (OK) and Poteau is 27 miles away. **Texarkana** is 4.7 miles from Texas's.

### Scenic places (all well known)
Hot Springs National Park (the station), Little Rock (the station: Clinton Presidential Center and Central High School National Historic Site), Mountain View (the station: Ozark Folk Center), Bentonville (Crystal Bridges Museum of American Art; the Walmart Museum), Eureka Springs (the Victorian spa town, a National Historic District), Petit Jean State Park (approx., at Mather Lodge), Mount Magazine (approx., the state park's lodge on the highest point in Arkansas, 2,753 feet), Buffalo National River (approx., at Ponca, Newton County), Blanchard Springs Caverns (approx., the visitor centre, Stone County), Crater of Diamonds State Park (approx., near Murfreesboro). I did not add Hot Springs Village or Lake Ouachita State Park (the lake would have taken the point).

### Biomes
`forest`: the Ozarks (Boone-Newton-Searcy, Baxter-Marion, Fulton-Izard-Stone, Carroll-Madison, Cleburne-Van Buren), the Ouachitas (Montgomery-Polk-Scott, Clark-Hot Spring, Garland) and the south's pine belt (Hempstead, Howard, Lafayette-Miller, Columbia-Union, Dallas-Ouachita, Ashley-Bradley-Calhoun, Cleveland-Grant-Lincoln). That matches MO's Howell-Oregon-Ozark and Taney, OK's Adair-Cherokee and Choctaw-McCurtain-Pushmataha, and TX's Bowie. `wooded`: the Ozark edge and the Arkansas valley's ridges (Benton, Washington, Crawford, Sebastian, Franklin-Johnson, Logan-Yell, Pope, Conway-Perry, Saline, Lawrence-Randolph-Sharp, Independence-Jackson). The Delta and the central plain are farmland. `dry`: none.

### Levels
Central (10 regions around Little Rock), West (11: the Arkansas valley, Northwest Arkansas and the Ozarks), East (10: the Delta, north-east and Mountain View), South (8). Goals follow the other packs: passengers 50/140/280/450, and connect Little Rock to Fort Smith (I-40), West Memphis (I-40) and Texarkana (I-30).

### Bridges (38) and water
Rivers never block track here; a bridge only makes a crossing cheaper (and lets track cross a lake). Every bridge sits on the map's river or lake (snapped to the nearest river point, within about 2 miles of the real place), checked with a script. Real and well known:
- **The Arkansas:** Garrison Avenue Bridge (US-64, Fort Smith-Van Buren) and the I-40/I-540 bridge at Van Buren; Ozark (US-64); Dardanelle (AR-7, at the lock and dam); Morrilton-Perryville (AR-9, moderately known); Toad Suck Ferry Lock and Dam (US-60, Conway); downtown Little Rock (the I-30, Broadway, Main Street and Junction bridges) and the Big Dam Bridge (Murray Lock and Dam); Pine Bluff (US-65 and I-530, moderately known).
- **The Mississippi:** the Hernando de Soto Bridge (I-40, Memphis-West Memphis), the Helena Bridge (US-49) and the Greenville Bridge (US-82, Lake Village). Tennessee and Mississippi come later and will match.
- **The White and others:** Batesville, Augusta (US-64), Des Arc (AR-38), De Valls Bluff (I-40), Clarendon (US-79), Cotter Bridge (US-62/412), Calico Rock (AR-5), Beaver Bridge (AR-187), Black River (Pocahontas, Black Rock), the St. Francis (Marked Tree; Madison on US-70, moderately known), the Little Red (Searcy-Judsonia), the Illinois River at Siloam Springs (US-412), the Ouachita (Camden, Arkadelphia).
- **The Red River:** Fulton (US-67) and Garland City (US-71), moderately known; the Oklahoma pack's Red River bridges are at the Texas-Oklahoma line, not here. Texas has none listed on the Arkansas side.
- **Lake dams and causeways:** Bull Shoals, Norfork, Greers Ferry, Blakely Mountain (Lake Ouachita), DeGray, Millwood and Narrows (Lake Greeson) dams, and the AR-7 bridge over Lake Hamilton (moderately known).
- **Passes:** none. The map has only 5 mountain cells in the state (Mount Magazine and the Polk County Ouachitas) and no line the pack tests is blocked by them: the checker has nothing to flag, and every neighbouring pair of main stations is open.

### Reachability (`NR.blockedReason`, with `NR.runtime.geoLevel` "gentle" and "tough")
Script under /tmp/ar-work (loads every pack as `tools/check-pack.js` does, plus `js/geography.js`).
- Every pair of main stations in neighbouring regions (counties.json `neighbors`, including the MO, OK and TX stations across the border) is open in Gentle. In Tough there is one blocked pair: Berryville and Aurora, Missouri (Table Rock Lake is 2 miles across, too wide for a new bridge). Berryville still reaches Harrison, Huntsville and Branson, and no corridor depends on it.
- Every station reaches at least two other stations within 60 miles; every town has an open link (Lake Village's nearest are Monticello and Dumas, 38 to 40 miles).
- Corridors, open as chains in both modes: I-40 (Sallisaw, Fort Smith, Van Buren, Ozark, Clarksville, Russellville, Morrilton, Conway, Little Rock, Cabot, Brinkley, Forrest City, West Memphis); I-30 (Little Rock, Benton, Malvern, Arkadelphia, Hope, Texarkana, then Texas's Texarkana); I-49 and US-71 (Joplin, Neosho, Bentonville, Rogers, Fayetteville, Van Buren, Fort Smith); US-71 south (Fort Smith, Waldron, Mena, De Queen, Ashdown); US-67 (Little Rock, Cabot, Searcy, Newport, Walnut Ridge, Pocahontas, Poplar Bluff); I-55 (West Memphis, Blytheville, Kennett); US-65 (Little Rock, Pine Bluff, Monticello; and Conway to Hot Springs).
- Into the neighbours: Joplin and Neosho (I-49), Branson (US-65), Poplar Bluff (US-67), Sallisaw (I-40), Poteau (US-59/271) and Texarkana, Texas (I-30).

### Not sure
- Some bridge points are moderately known (marked above) and sit up to 2 miles from the real place, because the map's rivers are simplified.
- Sizes of the mid-sized regions (1 or 2) follow OK's Lawton, Stillwater and Chickasha; the main agent may want to adjust.
- Level 3 holds Mountain View (north-central) because its neighbours in Fulton-Izard-Stone and Sharp are in the east.
