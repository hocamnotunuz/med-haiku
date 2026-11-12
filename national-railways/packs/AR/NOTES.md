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
