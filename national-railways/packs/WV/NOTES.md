# West Virginia (WV) pack notes

## Region merges (phase 1)

Populations: `packs/WV/raw/counties.json` and `places.json` (U.S. Census Bureau, 2020 base). Every group is connected through `neighbors` (checked by script). Geography and corridors are well known unless marked.

### Recommended (55 -> 32 regions)

```
merge: [["Brooke", "Hancock"], ["Marshall", "Wetzel"], ["Pleasants", "Ritchie", "Tyler"], ["Jackson", "Mason"], ["Calhoun", "Roane", "Wirt"], ["Braxton", "Doddridge", "Gilmer"], ["Lewis", "Upshur"], ["Barbour", "Taylor"], ["Clay", "Nicholas", "Webster"], ["Greenbrier", "Monroe", "Summers"], ["Pocahontas", "Randolph", "Tucker"], ["Grant", "Hardy", "Pendleton"], ["Hampshire", "Morgan"], ["Logan", "Mingo"], ["Boone", "Lincoln"], ["McDowell", "Wyoming"]]
names: {}   // optional: "Brooke-Hancock": "Northern Panhandle (Weirton)" is NOT needed; automatic names read fine
bridges/join: none (no water-cut counties)
```

Alone, 50k+ (11): Kanawha (Charleston 48,812), Berkeley (Martinsburg 18,781), Monongalia (Morgantown 30,194), Cabell (Huntington 46,841), Wood (Parkersburg 29,741), Raleigh (Beckley 17,276), Harrison (Clarksburg 16,050), Mercer (Bluefield 9,639; Princeton 5,863), Jefferson (Charles Town 6,530), Putnam (Hurricane 6,966), Marion (Fairmont 18,420).

Alone, under 50k (exceptions, 5):
- Ohio 42,440 (Wheeling 27,071): a big city, the only large market on the Ohio River in the north; merging would swallow Wheeling's station. Its neighbours are Brooke (Wellsburg, other side of Hancock) and Marshall (joined to Wetzel).
- Fayette 40,483 (Oak Hill 8,177): the New River Gorge, own rail and road identity; the 3 neighbours are big (Kanawha, Raleigh) or already a group (Greenbrier, Nicholas). Nicholas would make 65k.
- Wayne 38,988 (Kenova 3,036): Tug Fork/Ohio River corner next to Huntington; Lincoln is the only small neighbour and already pairs with Boone.
- Preston 34,213 (Kingwood 2,980): large, high-plateau county, I-68 and Cheat River gorge; neighbours are Monongalia (big) or already paired.
- Mineral 26,932 (Keyser 4,869): its only WV neighbours are Grant and Hampshire, across the Allegheny Front. Maryland (Cumberland) will join later via the Potomac.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Brooke + Hancock | Northern Panhandle, Ohio River, Weirton-Follansbee steel towns | Weirton (19,158) | 51,644 |
| Marshall + Wetzel | Ohio River and Fish Creek; Moundsville to New Martinsville, WV-2 | Moundsville (8,083) | 45,036 |
| Pleasants + Ritchie + Tyler | Ohio River (St. Marys, Sistersville) with Ritchie behind, US-50 | St. Marys (1,833) | 24,400 |
| Jackson + Mason | Ohio River, I-77 (Ravenswood) and Point Pleasant | Point Pleasant (4,078) | 53,243 |
| Calhoun + Roane + Wirt | Little Kanawha / Spencer hills, rural, US-33 | Spencer (2,039) | 25,452 |
| Braxton + Doddridge + Gilmer | I-79 and US-33/50 hill country (Glenville the largest place; Sutton on I-79 is the alternative) | Glenville (1,126) | 27,671 |
| Lewis + Upshur | US-33 and I-79 from Weston to Buckhannon, one corridor | Buckhannon (5,186) | 40,846 |
| Barbour + Taylor | Tygart Valley and the B&O line, Grafton to Philippi | Grafton (4,731) | 32,169 |
| Clay + Nicholas + Webster | Gauley and Elk valleys, US-19/Summersville | Summersville (3,431) | 41,029 |
| Greenbrier + Monroe + Summers | I-64, Greenbrier and New River valleys, CSX | Lewisburg (3,924) | 57,318 |
| Pocahontas + Randolph + Tucker | Upper Monongahela/Tygart highlands, Elkins | Elkins (6,938) | 42,561 |
| Grant + Hardy + Pendleton | South Branch Potomac valley, Corridor H | Moorefield (2,520) | 31,415 |
| Hampshire + Morgan | Cacapon valley, US-50 and US-522 | Romney (1,768) | 40,160 |
| Logan + Mingo | Guyandotte and Tug Fork coalfield, Norfolk Southern | Williamson (3,080) | 56,147 |
| Boone + Lincoln | Coal River, Madison to Hamlin | Madison (2,913) | 42,265 |
| McDowell + Wyoming | Pocahontas coalfield, Welch to Mullens | Welch (3,590) | 40,504 |

Weak points: Braxton-Doddridge-Gilmer joins through Gilmer only; Clay-Nicholas-Webster is mountain road country. Stations are tiny (Marlinton-sized), which is normal for WV.

### Alternative

Make Marshall + Ohio (73k, Wheeling-Moundsville) and Wetzel + Doddridge + Tyler; pro: one Ohio River market; con: Wheeling's station gets huge and Wetzel's ridges are cut oddly. Or pair Mineral with Hampshire (50,026, US-50, Romney/Keyser) with Morgan alone; con: Morgan is cut off from US-522.

### Map observations

- Mineral lists only Grant and Hampshire (Maryland/Pennsylvania come later): fine.
- 208 of 439 places have no population (CDPs, e.g. Falling Waters, Alum Creek); main stations above all have one.
- Odd place names: "Ranson corporation", "Bath (Berkeley Springs)", "Addison (Webster Springs)", "Womelsdorf (Coalton)".
- No county cut oddly or missing found from the neighbour lists; I did not inspect rings.

## Pack (phase 2)

Built in `packs/WV/pack.js` (32 stations, 55 towns incl. 7 scenic, 3 passes, 15 bridges, 4 levels). Populations and coordinates from `raw/`; every comment in pack.js says why a station is where it is.

**Start:** Kanawha (Charleston, metro) + Putnam (Hurricane, farm) + Boone-Lincoln (Madison, mountain); Putnam and Boone-Lincoln both touch Kanawha and each other. The pack test's first track is Charleston-Hurricane (25 mi, I-64), with riders (6 passengers in a week).

**Ids:** 2-4 capitals, unique across all packs (checked by the checker). Where a natural code was taken by another pack (many were) the id is the first two letters + WV (CHWV Charleston, HUWV Huntington, BEWV Beckley, CLWV Clarksburg, FAWV Fairmont, WIWV Williamson) or a close variant.

**Sizes:** 2 for Charleston, Huntington, Morgantown, Parkersburg, Wheeling, Martinsburg, Beckley and Clarksburg; every other region 1 (Culpeper 60k is 1 in the Virginia pack). I do not think Charleston (181k, metro about 210k) deserves 3: Lexington (323k) is the first 3. Wheeling is size 2 at 42k because of the city (27k) and its history, as the main agent asked.
**Types:** metro for the real cities (Charleston, Huntington, Morgantown, Parkersburg, Wheeling, Weirton, Clarksburg, Fairmont, Martinsburg); farm for the rural valleys and the Ohio River and Eastern Panhandle farm regions (Putnam, Wayne, Jackson-Mason, Calhoun-Roane-Wirt, Pleasants-Ritchie-Tyler, Marshall-Wetzel, Lewis-Upshur, Barbour-Taylor, Preston, Hampshire-Morgan, Jefferson); mountain for the coalfields and high Alleghenies (the rest).
**Airport:** Charleston (Yeager Airport) only, the state's biggest; Huntington Tri-State, Morgantown, Wheeling-Ohio County and Clarksburg's North Central are small and do not meet the bar the other packs use (Roanoke is the smallest). **Port:** none. Huntington is well known as the biggest inland port by tonnage on the Ohio (Port of Huntington Tri-State), but Ohio and Kentucky give none to Cincinnati or Louisville, so I left it out; the main agent can add `port: "Port of Huntington Tri-State"` to HUWV.

**Station choices:**
- Fayette: Oak Hill (8,177, the biggest) over Fayetteville (2,911, the seat). Fayetteville is 7 mi away and is covered by the scenic "New River Gorge" point at the bridge (38.07, -81.08), so it is not a separate town.
- Braxton-Doddridge-Gilmer: Sutton (864) over Glenville (1,126, the biggest). Sutton is the I-79 interchange, the point that links to Summersville and Weston; Glenville (US-33, Little Kanawha) is a town.
- Charles Town: moved to downtown (39.29, -77.86), 2.5 mi north-east of the Census point (the middle of the city limits). Ranson adjoins it (1.6 mi) so it is not a town. Parkersburg is at downtown (39.27, -81.56), 1.4 mi north-west of the Census point, on the Parkersburg-Belpre Bridge. All other stations are at the Census points.
- Williamson (Mingo) is the biggest place of Logan-Mingo and sits on the Tug Fork at the Kentucky line; Logan is a town.
- Names tidied: Ranson, Berkeley Springs, Webster Springs (and Coalton) were not used as stations.

**Towns:** the next-biggest real places, spread at least 4 mi apart (the checker gave no spacing warning). Three places near county outlines were nudged 1 km inside (Piedmont, Carpendale, New Cumberland). Scenic places (all well known; coordinates are the park, falls or rocks): Harpers Ferry (National Historical Park), Berkeley Springs (the spa town, State Park), Seneca Rocks (Pendleton County; National Recreation Area), Cass Scenic Railroad (Cass State Park), Blackwater Falls (State Park, near Davis), New River Gorge (National Park and Preserve, the bridge), The Greenbrier (resort at White Sulphur Springs). Not used: Spruce Knob and Dolly Sods (they sit on county lines and are less central).

**Passes (3, all moderately known; coordinates approximate, checked only that mountains are near):**
- Allegheny Mountain (I-64 and the C&O between White Sulphur Springs and Covington): 37.80, -80.12. Source: Wikipedia, Interstate 64 in West Virginia / Virginia (state line on Allegheny Mountain).
- Big Bend Tunnel (C&O, Talcott, Summers County; John Henry): 37.64, -80.79. Source: Wikipedia, Big Bend Tunnel.
- Kingwood Tunnel (B&O, Tunnelton): 39.39, -79.75. Source: Wikipedia, Kingwood Tunnel.
- Not added: Cranberry Summit (B&O, Terra Alta): the checker found no mountains within 7 mi, so it was removed. Corridor H (US-48) over the Allegheny Front: I was not sure of an exact well-known point, so none. The East River Mountain Tunnel is already in the Virginia pack (not duplicated).

**Bridges (15), sources in each name:** the Ohio crossings at Chester, Weirton, Wheeling (Fort Henry), Williamstown, Parkersburg and Point Pleasant are in the Ohio pack, Ashland-Ironton in Kentucky's; they are not repeated. Added here: Wheeling Suspension Bridge (1849, well known), Hannibal Bridge (WV-7, New Martinsville), St. Marys Bridge (WV-2, to Newport, Ohio), the Sistersville-Fly ferry (WV-2; moderately known), Robert C. Byrd Bridge (US-52, Huntington to Chesapeake, Ohio; the point is approximate), the Big Sandy bridges at Kenova-Catlettsburg, the Tug Fork bridge at Williamson, the Kanawha bridges at Charleston and St. Albans-Nitro, the New River Gorge Bridge (US-19), the Monongahela bridges at Morgantown and Fairmont (Million Dollar Bridge), the Shenandoah bridges at Harpers Ferry, the Greenbrier bridge at Ronceverte and the Guyandotte bridges at Logan. Coordinates are 2 decimals from maps; the checker found each near water. No `bays`: West Virginia has no big water.

**Biomes:** forest for the high Alleghenies and coalfield regions, wooded for the Ohio River, Kanawha and Mon valleys and the middle hills, unlisted (farmland) for Berkeley and Jefferson in the Shenandoah Valley. No dry.

**Levels (4):** 1 Charleston and the Kanawha Valley (8 regions; 60 passengers, 6 counties, connect Charleston-Huntington); 2 the coalfields and the New River (6; 150, connect Charleston-Beckley, 11 counties); 3 the Ohio River and the Monongahela (11; 280, connect Charleston-Clarksburg, 20 counties); 4 the Alleghenies and the Eastern Panhandle (7; 420, connect Morgantown-Martinsburg, 28 counties). Counties are cumulative as in Virginia.

**Reachability** (`NR.blockedReason`, Gentle and Tough): no link under 45 mi between neighbouring stations is blocked in either mode; every town has an open link. In Tough the terrain grid shows only short tunnels in West Virginia (nothing over 3 mi), so nothing needed a pass: chains open in both modes: I-79 (Charleston, Sutton, Weston, Clarksburg, Bridgeport, Fairmont, Morgantown), the Turnpike (Charleston, Madison, Beckley, Bluefield, Princeton), I-64 (Huntington, Charleston, Oak Hill, Lewisburg, Covington VA), I-77 (Charleston, Ripley, Ravenswood, Parkersburg), US-50 (Parkersburg, Salem, Clarksburg, Kingwood, Keyser, Romney, Winchester VA), US-33 (Spencer, Sutton, Buckhannon, Elkins), the Ohio River (Weirton-Steubenville, Wheeling, Parkersburg-Marietta, Point Pleasant-Gallipolis, Huntington-Ironton/South Point, Kenova-Ashland), Williamson to Pikeville KY, Bluefield-Wytheville (VA I-77; one pass: Big Walker Mountain, Tough), Martinsburg-Winchester and Charles Town-Winchester (I-81). Weak spots: Welch-Williamson crosses the Tug Fork twice (new bridges, no real one listed) and the thin 45-mi gaps in the south and east (Moorefield links only Romney and Keyser; Wheeling links only Moundsville and Weirton; Martinsburg links Romney and Charles Town) are geography, not blocks.
Checks: `node tools/check-pack.js WV`: 0 errors, 0 warnings; `node tools/check-pack.js`: All packs passed; `node tools/test-pack.js WV`: PASSED: 17 passed, 0 warnings, 0 failed. I looked at `test-out/WV/WV-arcade-light.png`: the start (Charleston, Hurricane, Madison) sits sensibly and the first track runs Charleston-Hurricane.

## Main agent's review

- **Coordinates:** every main station, scenic place, pass and bridge checked against its real location; all within about a mile. The St. Marys Bridge was moved to the town (39.39, -81.21), where the Hi Carpenter Memorial Bridge crosses the Ohio, from 2.5 miles downstream.
- **Shared crossings:** the Ohio River bridges in the Ohio pack (Chester, Steubenville–Weirton, the Fort Henry Bridge at Wheeling, Williamstown–Marietta, Parkersburg–Belpre, Pomeroy–Mason, Point Pleasant) and Kentucky's Ashland–Ironton bridge serve West Virginia too; not repeated here.
- **Sizes:** accepted (no region reaches 350,000; the eight cities of 40,000 to 180,000 people, or their metros, are 2).
- **Links checked** (Gentle and Tough, open): Parkersburg–Bluefield, Point Pleasant–Huntington, Martinsburg–Keyser, Elkins–Moorefield.
- **Checks:** `check-pack` WV passed (32 stations, 55 towns, 3 passes, 15 bridges), 0 errors, 0 warnings; all packs passed; `test-pack` WV passed (17 passed).
