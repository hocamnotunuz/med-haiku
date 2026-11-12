# North Carolina (NC) pack notes

## Region merges (phase 1)

Populations from `packs/NC/raw/counties.json` and `places.json` (Census 2020 base). Every group was checked as connected through `neighbors`. Roads, rivers and rail named here are well known unless marked otherwise. Station rule: largest place in places.json.

### Recommended (100 -> 73 regions)

```
merge: [["Cherokee", "Clay", "Macon"], ["Graham", "Jackson", "Swain"], ["Alleghany", "Ashe"], ["Avery", "McDowell", "Mitchell"], ["Madison", "Yancey"], ["Davie", "Yadkin"], ["Caswell", "Person"], ["Anson", "Richmond", "Scotland"], ["Camden", "Currituck", "Pasquotank"], ["Chowan", "Gates", "Perquimans"], ["Bertie", "Hertford", "Northampton"], ["Martin", "Tyrrell", "Washington"], ["Dare", "Hyde"], ["Beaufort", "Pamlico"], ["Greene", "Jones", "Lenoir"], ["Bladen", "Columbus"], ["Polk", "Rutherford"], ["Vance", "Warren"]]
names: {}
```

No `names`, `bridges` or `join` needed (Dare + Hyde touch on the mainland; Hatteras to Ocracoke is a ferry but not needed).

| Group | Why | Station | Pop |
| --- | --- | --- | --- |
| Cherokee + Clay + Macon | US-64 across the far southwest: Murphy, Hayesville, Franklin | Franklin 4,175 | 76,872 |
| Graham + Jackson + Swain | Tuckasegee/Little Tennessee country; US-74/19 Sylva to Bryson City, then Robbinsville (Graham touches only Swain) | Sylva 2,579 | 65,253 |
| Alleghany + Ashe | US-21 / US-221 high country, Sparta to Jefferson | Sparta 1,831 | 37,465 |
| Avery + McDowell + Mitchell | Marion, up NC-226 to Spruce Pine and the Avery side (moderately known) | Marion 7,715 | 77,291 |
| Madison + Yancey | Mars Hill to Burnsville, NC-197 (moderately known) | Mars Hill 2,010 | 39,666 |
| Davie + Yadkin | I-40 / US-601 Mocksville to Yadkinville, Yadkin River | Mocksville 5,903 | 79,936 |
| Caswell + Person | US-158 Yanceyville to Roxboro | Roxboro 8,125 | 61,821 |
| Anson + Richmond + Scotland | US-74 Wadesboro, Rockingham, Hamlet, Laurinburg | Laurinburg 14,976 | 99,179 |
| Camden + Currituck + Pasquotank | Albemarle Sound / Elizabeth City, US-17 and US-158 | Elizabeth City 18,644 | 79,028 |
| Chowan + Gates + Perquimans | Edenton and the Chowan/Perquimans rivers | Edenton 4,457 | 37,193 |
| Bertie + Hertford + Northampton | Roanoke-Chowan: Ahoskie, Windsor, Murfreesboro, Gaston | Ahoskie 4,892 | 56,956 |
| Martin + Tyrrell + Washington | US-64 chain Williamston, Plymouth, Columbia | Williamston 5,248 | 36,285 |
| Dare + Hyde | Outer Banks, Hatteras to Ocracoke ferry; mainland Dare touches Hyde | Kill Devil Hills 7,644 | 41,501 |
| Beaufort + Pamlico | Pamlico River and Neuse mouth, US-17 / NC-33 | Washington 9,887 | 56,929 |
| Greene + Jones + Lenoir | Kinston and the upper Neuse; US-13 / US-258 | Kinston 19,805 | 84,751 |
| Bladen + Columbus | NC-131/US-701 Elizabethtown to Whiteville, Cape Fear and Lumber country | Whiteville 4,763 | 80,248 |
| Polk + Rutherford | Thermal Belt, US-74 / US-176 Tryon to Rutherfordton | Forest City 7,376 | 83,781 |
| Vance + Warren | I-85 / US-1 Henderson to Norlina | Henderson 15,076 | 61,208 |

Exceptions (alone under 50k, all neighbours 50k or more, or at the line):
- Alexander 36k (Taylorsville): Caldwell, Catawba, Iredell, Wilkes all big.
- Stokes 45k (King, Walnut Cove): Forsyth, Rockingham, Surry all big.
- Transylvania 33k (Brevard 7,759): Henderson and Haywood big; Jackson over the Balsam/US-64 ridge is a long way round.
- Montgomery 26k (Troy, Biscoe): Uwharrie hills, all neighbours big except Richmond (needed for Anson-Richmond-Scotland).
- Duplin 49k, Edgecombe 49k, Halifax 49k: 1k under the line, real towns (Wallace, Tarboro, Roanoke Rapids).
Rule bends (merged with a county at or over 50k): Lenoir 55k (takes Greene, Jones), Columbus 51k (takes Bladen), Rutherford 64k (takes Polk 19k). Each small county has only big neighbours otherwise.

Over 50k and alone: the other 51 listed in the brief (Wake, Mecklenburg ... Hoke, Watauga, Sampson, Pender, Granville), minus Lenoir, Columbus, Rutherford. Total 73 regions: 18 groups + 7 exceptions + 48 large counties.

### Alternative (74 regions)
Use `["Avery", "Mitchell", "Yancey"]` (the Toe River valley, Spruce Pine) and leave McDowell (45k, Marion) and Madison (21k, Mars Hill) alone. Pro: the natural valley; con: two more exceptions.
Second variation: `["Anson", "Montgomery", "Richmond"]` and Scotland alone (Laurinburg is a 15k town); same count.

### Map observations
- Dare has no `nc-tyrrell` neighbour, and Tyrrell/Hyde/Dare meet on the Alligator River peninsula in reality; Dare lists only Currituck and Hyde. Not blocking.
- Currituck and Dare Outer Banks sections are joined only by 4WD beach / the Mid-Currituck bridge (uncertain); ignored.
- places.json has 226 places with null population (CDPs such as Cherokee, Hatteras, Camden, Engelhard); Cherokee is assigned to Swain (partly Jackson).
- All neighbour relations are symmetric.

## Pack build (phase 2)

The phase 1 list was applied as written (73 regions). `packs/NC/pack.js` has 73 main stations (one per region), 126 towns (13 of them scenic places), 6 passes, 30 bridges (2 of them Outer Banks ferry/bridge points), 4 bays and 4 levels. Populations are the region totals from `raw/counties.json` (thousands); coordinates are `raw/places.json` points rounded to 2 decimals unless a comment in `pack.js` says the point was moved to a downtown (the Census point is the middle of the city limits). The file was written from a helper under `/tmp/nc-work/` (not part of the game). Station and town ids are unique across all packs (checked by `tools/check-pack.js`); many obvious codes were already taken, so some are odd (Charlotte is `CLTE`, Asheville `ASHE`).

### Start
`["nc-wake", "nc-durham", "nc-johnston"]`: Wake (Raleigh, 1,129k, the biggest region; Charlotte's Mecklenburg is 1,116k) with Durham and Johnston, both touching Wake. Raleigh and Durham are metro, Clayton (Johnston) is farm, so the first track is Raleigh-Clayton (16 mi), which the pack test lays and which carried riders (27 passengers in the first week). Durham-Johnston do not touch each other (the checker only needs each to touch an earlier one).

### Sizes (judged against the other packs)
Raleigh and Charlotte 5 (Atlanta's Fulton, 1,067k, is 5); Greensboro (541k), Winston-Salem (383k), Fayetteville (335k), Durham (325k), Asheville (269k) are 3, as Greenville SC (526k), Spartanburg SC (328k), Clayton GA (299k) and Florida's 292k regions are 3. 100k to 240k regions are 2 (Concord, Gastonia, Wilmington, Indian Trail, Mooresville, Jacksonville, New Bern, Greenville, Hickory, Burlington, Rocky Mount, Chapel Hill, Pinehurst, Hendersonville and so on). Region populations under about 100k are size 1, except where the biggest place is a real city (Rocky Mount 95k is 2, Nash). Types: metro for the cities over about 60k and the Charlotte and Triangle suburbs, mountain for the Blue Ridge, coast for the ocean and the sounds, farm for the rest. Airports follow the bar the other packs use (Knoxville, Lexington, Myrtle Beach, Pensacola are listed): Charlotte Douglas, Raleigh-Durham, Piedmont Triad, Asheville Regional, Wilmington International. Ports: Port of Wilmington (container terminals) and Port of Morehead City (the other North Carolina State Port); both are real state ports, and Morehead City is bulk and breakbulk, so the pack lists it by the bar of Port of Pascagoula and Port Manatee.

### Station calls (not the biggest place, or a point moved)
- **Downtown points** (the Census point is more than a few km from downtown): Raleigh (Capitol), Durham, Chapel Hill, Burlington, Rocky Mount, Wilson, Greensboro, Winston-Salem, Salisbury, Concord, Charlotte (Uptown, as South Carolina's notes expect), Gastonia, Hickory, Morganton, Boone, Asheville (Pack Square), Fayetteville, Wilmington, Jacksonville, New Bern, Greenville, Elizabeth City, Pinehurst (village centre). The Census point is the middle of the city limits.
- **Pender: Burgaw** (3,083) not Surf City (3,865): Burgaw is the seat on I-40, US-117 and the CSX line at the centre; Surf City is on Topsail Island across the Intracoastal Waterway (it is a town).
- **Madison-Yancey: Mars Hill** (2,010) by population, not Burnsville (1,615, the Yancey seat, a town 18 mi east, with Mount Mitchell scenic). Mars Hill is on the Asheville side.
- **Dare-Hyde: Kill Devil Hills** (7,644) over Manteo (1,595): the biggest place, in the middle of the Outer Banks, next to the Wright Brothers National Memorial (the station is scenic). Manteo (Roanoke Island) is a town.
- **Chatham: Siler City** (7,713) over Pittsboro (4,543). Johnston: Clayton (26,317) over the seat Smithfield. Union: Indian Trail over Monroe. Iredell: Mooresville over Statesville. Rockingham: Eden over Reidsville (11 mi south). Davidson: Thomasville over Lexington. Biggest places by the rule; the others are towns.
- Rule bends and exceptions are in the phase 1 section above.

### Towns (126)
About 1.5 per region, next-biggest real places from places.json, spread at least 4 mi apart (the checker's warning level; none left). Dropped as too close to a station: Carrboro, Creedmoor, Graham, Conover, Princeville, Hamlet, Wilkesboro, Maggie Valley and Aberdeen. Beach and Outer Banks towns on islands (Ocracoke, Rodanthe, Hatteras village) are placed at their Census points (null population places), Rodanthe by hand at 35.60, -75.47 (the south end of the Rodanthe-Waves-Salvo stretch of NC-12), because the straight lines between stations cannot follow Hatteras Island's curve: without a town in the middle, Manteo-Hatteras would cut across Pamlico Sound. Emerald Isle, Oriental and Ocracoke are within 0.1 mi of their county's simplified outline (warnings, fine for a coast).

### Scenic places (all real and well known)
Stations: Pinehurst (the golf resort), Kill Devil Hills (Wright Brothers National Memorial). Towns (hand-placed points): Biltmore Estate (35.54, -82.54), Blue Ridge Parkway at Craggy Gardens (35.70, -82.38, approximate), Mount Mitchell State Park (35.76, -82.27, the highest point east of the Mississippi), Grandfather Mountain (36.10, -81.83), The Blowing Rock (36.13, -81.67), Chimney Rock State Park (35.44, -82.25), Great Smoky Mountains National Park at Cherokee (35.51, -83.31, the Oconaluftee entrance), Hanging Rock State Park (36.39, -80.26), Pilot Mountain State Park (36.34, -80.47), Cape Lookout National Seashore (34.62, -76.54, the lighthouse), Currituck Beach Lighthouse at Corolla (36.38, -75.83), Cape Hatteras Lighthouse at Buxton (35.25, -75.53), Ocracoke (the village). Sources: the National Park Service (Blue Ridge Parkway, Great Smoky Mountains, Cape Hatteras, Cape Lookout, Wright Brothers) and North Carolina State Parks. Points are within a mile or two. Linville Falls and Carl Sandburg Home were left out (too close to other places or uncertain on the map).

### Passes (6; Tennessee's Newfound Gap, Pigeon River Gorge, Sam's Gap and Carver's Gap are not repeated, and the links into TN use them)
Swannanoa Gap (I-40/US-70, Old Fort-Black Mountain), Hickory Nut Gap (US-74A, Fairview-Chimney Rock), Saluda Gap (I-26 and the Saluda Grade), Balsam Gap (US-74/23), Soco Gap (US-19), Winding Stair Gap (US-64 west of Franklin). All are well-known gaps on the Blue Ridge and Great Smokies; the coordinates are to a mile or two and Balsam Gap, Soco Gap and Hickory Nut Gap are the least exact (moderately known). The checker finds mountains near each. **Left out:** Deep Gap (US-421): the map has only hills there and Boone-North Wilkesboro needed no tunnel. Wayah Gap: no main link needed it. In Tough the biggest tunnels between main stations are Marion-Mars Hill (12 mi) and Waynesville-Brevard (13 mi), both under the 15-mile limit; nothing is refused.

### Bridges (30) and bays (4)
Real structures: **Outer Banks:** the Wright Memorial Bridge (US-158, Currituck Sound), the Virginia Dare Memorial Bridge (US-64/264, Croatan Sound), the Washington Baum Bridge (Roanoke Sound), the Marc Basnight Bridge (Oregon Inlet, opened 2019 to replace the Bonner Bridge) and the Hatteras-Ocracoke ferry (NC-12; state ferry); **Albemarle:** the Albemarle Sound Bridge (US-17, Edenton) and the Chowan River bridge (US-158, Winton); **rivers on the main lines:** Pamlico River (Washington, US-17), Tar (Greenville, Tarboro, Rocky Mount), Neuse (Kinston, Goldsboro, Smithfield), Cape Fear (Wilmington's Memorial Bridge, Fayetteville's Person Street, Lillington, Elizabethtown), Roanoke (I-95 at Roanoke Rapids, Williamston, Plymouth), Dan (Eden), Yadkin (Wilkesboro, Elkin), Pee Dee (US-74), Catawba (I-85), French Broad (Smoky Park Bridge, Asheville); **lakes:** Lake Norman (NC-150 and Cowans Ford Dam, NC-73) and Jordan Lake (US-64). Points on the map's rivers are snapped within a mile or two of the real structure (the Neuse at New Bern is left out: the map's Neuse ends 4 mi from the town, so the checker would warn). The NC-150 point on Lake Norman (35.56, -80.99) is approximate (moderately known). Sources: well-known US and NC highway bridges (NCDOT, Wikipedia).

Bays (rings of the sounds that lie outside the counties' land, so a line cannot cut across them): **Currituck Sound** (narrow ring at the Wright Memorial Bridge), **Albemarle Sound** (Edenton side), **Croatan and Roanoke Sounds**, **Pamlico Sound** (Outer Banks to the mainland) and **Hatteras Inlet** (the ferry). The rings stay west of the barrier islands so the Atlantic is not inside them.

### Reachability (checked with `NR.blockedReason`, 211 neighbouring main pairs in both modes, plus towns)
- Gentle: no neighbouring pair is blocked. Tough: no pair is blocked after the Lake Norman and Jordan Lake bridges were added; Elizabeth City-Kill Devil Hills crosses Currituck Sound at the Wright Memorial Bridge (4.0 mi water, open in both modes); Manteo-Columbia crosses at the Virginia Dare Bridge (open in both); Manteo-Rodanthe-Cape Hatteras Lighthouse and Hatteras-Ocracoke are open chains (the ferry is within the inlet ring but the line is mostly "coast", so it is not forced).
- Crossings away from the bridges: Elizabeth City-Columbia (7.4 mi of Albemarle Sound) and Kill Devil Hills to Hatteras (the whole of Pamlico Sound) are blocked in Tough; Gentle lets 8 mi or less be a new (dear) bridge, as everywhere else in the game, and treats a line passing near a real bridge as bridged (the game's rule).
- Kill Devil Hills has one direct main-station link (Elizabeth City, over the Wright Memorial Bridge). Its other routes are chains through towns (Kill Devil Hills-Manteo-Columbia-Williamston over the Virginia Dare Bridge, and down Hatteras Island). A straight line from the Outer Banks to Williamston or Washington would cross open sound, which is blocked in Tough.
- Every town has an open link within 45 miles in both modes (checked; none without).
- Corridors (every consecutive main pair open in both modes, or a chain through towns where the gap is over 60 mi): I-85 (Gaffney SC, Gastonia, Charlotte, Concord, Salisbury, Thomasville, Greensboro, Burlington, Durham, Oxford, Henderson); I-40 (Wilmington, Burgaw, Wallace, Clinton, Clayton, Raleigh, Durham, Burlington, Greensboro, Winston-Salem, Mocksville, Hickory, Morganton, Marion, Asheville, Waynesville, then Newport TN over the Pigeon River Gorge); I-95 (Dillon SC, Lumberton, Fayetteville, Dunn, Clayton, Wilson, Rocky Mount, Roanoke Rapids); I-77 (Rock Hill SC, Charlotte, Mooresville, then Mount Airy through Statesville, Elkin and Dobson: 65 mi); I-26 (Spartanburg SC, Hendersonville, Asheville, Mars Hill, Greeneville TN over Sam's Gap); US-74 (Charlotte, Indian Trail, Monroe, Wadesboro, Rockingham, Laurinburg (each pair open; the 70-mi Indian Trail-Laurinburg gap is bridged by those towns), Lumberton, Whiteville, Leland, Wilmington); US-17 (Wilmington, Leland, Myrtle Beach SC via North Myrtle Beach; north through Jacksonville, New Bern, Washington, Williamston, Ahoskie, Edenton, Elizabeth City); US-64, US-70, US-421 and the Blue Ridge links to Georgia (Franklin to Cornelia over Rabun Gap, to Cleveland over Unicoi Gap) and TN (Sylva to Maryville over Newfound Gap, Marion to Elizabethton over Carver's Gap).

### Levels (4)
1. **Raleigh, Durham and the Triangle** (17 regions: the Triangle and the tobacco belt): 60 passengers, 8 counties, connect Raleigh and Rocky Mount.
2. **Greensboro, Charlotte and the Piedmont** (23): 160 passengers, connect Greensboro and Charlotte, 24 counties, a high-speed train.
3. **Asheville and the Blue Ridge** (13): 300 passengers, connect Charlotte and Asheville, 36 counties.
4. **Wilmington and the Coast** (20: Fayetteville, the Sandhills, Wilmington, the Albemarle and the Outer Banks): 500 passengers, connect Raleigh and Wilmington, 55 counties, 10 containers (Port of Wilmington).
County targets are cumulative, as in the other packs.

### Biomes
`forest`: the coastal plain's swamps and pines (Wilmington, Brunswick, Pender, Onslow, Carteret, Craven, Beaufort-Pamlico, the Albemarle regions, Dare-Hyde, Bladen-Columbus, Robeson, Duplin, Hoke, Cumberland, Moore, Roanoke-Chowan, Martin-Tyrrell-Washington) and the high Blue Ridge and Smokies (Graham-Jackson-Swain, Cherokee-Clay-Macon, Haywood, Transylvania, Avery-McDowell-Mitchell, Madison-Yancey, Alleghany-Ashe, Watauga), as Tennessee does for Sevier, Johnson and Carter. `wooded`: the Piedmont, the foothills, Buncombe and Henderson, the Sandhills' Harnett and the Pee Dee group, as South Carolina does for its Piedmont. Unlisted (farmland): the tobacco, cotton and soybean fields of the inner plain (Johnston, Franklin, Vance-Warren, Nash, Wilson, Wayne, Edgecombe, Halifax, Greene-Jones-Lenoir, Pitt, Sampson). No `dry`.

### Map observations still open
- Dare has no `nc-tyrrell` neighbour in counties.json (see phase 1). Hatteras Island and the Outer Banks are only a few cells wide in the land layer, so Ocracoke, Rodanthe and Buxton sit on, or within 0.1 mi of, the county outline.
- The Neuse River line on the map stops about 4 mi short of New Bern (the estuary is treated as sea), so the Neuse bridge at New Bern is not listed.

## Main agent's review

- **Raleigh and Charlotte are size 4, not 5:** like Denver, St. Louis and Kansas City, the cores of metros of 1.5 to 3 million (Charlotte's is about 2.7 million, Raleigh's 1.4 million); size 5 is for the cores of the biggest metros (Atlanta, Miami, Houston, Minneapolis, Detroit).
