# Michigan (MI) pack notes

## Region merges (phase 1)

Populations: `packs/MI/raw/counties.json` and `places.json` (U.S. Census Bureau, 2020; state total 10,077,674). Every group was checked as connected through `neighbors`. Roads, railways and geography are from well-known facts, not data.

### Recommended (83 -> 54 regions)

```
merge: [["Branch", "Hillsdale"], ["Huron", "Sanilac"], ["Mecosta", "Osceola"], ["Lake", "Missaukee", "Wexford"], ["Manistee", "Mason", "Oceana"], ["Benzie", "Leelanau"], ["Antrim", "Charlevoix", "Emmet"], ["Cheboygan", "Montmorency", "Presque Isle"], ["Alcona", "Alpena", "Oscoda"], ["Arenac", "Iosco", "Ogemaw"], ["Clare", "Gladwin", "Roscommon"], ["Crawford", "Kalkaska", "Otsego"], ["Chippewa", "Luce", "Mackinac"], ["Alger", "Delta", "Schoolcraft"], ["Dickinson", "Iron", "Menominee"], ["Gogebic", "Ontonagon"], ["Baraga", "Houghton", "Keweenaw"]]
bridges: [["Emmet", "Mackinac"], ["Cheboygan", "Mackinac"]]
names: {}
```

(Check with the tool that bridge names may be county names when the counties are merged; otherwise use the group names.) No `names` needed; the automatic ones read fine. The 36 counties of 50k or more stay alone, and so does Gratiot (below).

| Group | Pop | Main station (places.json) | Why |
|---|---|---|---|
| Branch-Hillsdale | 90,627 | Coldwater 13,827 (Hillsdale 8,040 is the alternative) | US-12 southern tier, one farm plain |
| Huron-Sanilac | 72,010 | Bad Axe 3,026 | the Thumb, M-53 and the lake shore; Sandusky 2,710 is the other town |
| Mecosta-Osceola | 62,598 | Big Rapids 7,730 | US-131 (Big Rapids, Reed City) |
| Lake-Missaukee-Wexford | 60,826 | Cadillac 10,367 | Cadillac, US-131/M-55; Lake City, Baldwin |
| Manistee-Mason-Oceana | 80,739 | Ludington 7,653 | Lake Michigan shore, US-31 (Ludington, Manistee, Hart) |
| Benzie-Leelanau | 40,264 | Frankfort 1,249 (Suttons Bay 571 is far smaller) | M-22 shore, Sleeping Bear; below 50k, see exceptions |
| Antrim-Charlevoix-Emmet | 83,593 | Petoskey 5,869 | Little Traverse Bay and US-31 (Petoskey, Charlevoix, Boyne City, Elk Rapids); Mackinaw City is in Emmet |
| Cheboygan-Montmorency-Presque Isle | 47,732 | Cheboygan 4,770 (Rogers City 2,851) | I-75/US-23 north-east, forest |
| Alcona-Alpena-Oscoda | 47,301 | Alpena 10,209 | US-23 Lake Huron shore, Alpena is the only real town |
| Arenac-Iosco-Ogemaw | 60,998 | East Tawas 2,668 (West Branch 2,347 on I-75) | Saginaw Bay/US-23 and I-75 |
| Clare-Gladwin-Roscommon | 79,705 | Clare 3,260 (Gladwin 3,069; Roscommon only 981) | US-10/US-127, Houghton Lake |
| Crawford-Kalkaska-Otsego | 56,021 | Gaylord 4,284 (Grayling 1,855 and Kalkaska 2,190 are on the same I-75/US-131 corridor) | northern forest plateau |
| Chippewa-Luce-Mackinac | 54,027 | Sault Ste. Marie 13,336 | eastern Upper Peninsula, I-75, the Mackinac Bridge (St. Ignace 2,306) |
| Alger-Delta-Schoolcraft | 53,789 | Escanaba 12,420 | US-2 / M-28 Lake Michigan and Superior shore, Manistique, Munising |
| Dickinson-Iron-Menominee | 61,087 | Menominee 8,483 (Iron Mountain 7,519 plus Kingsford 5,142 is more central) | Menominee Range, US-2/US-141, Wisconsin border |
| Gogebic-Ontonagon | 20,189 | Ironwood 5,042 | far western Upper Peninsula; below 50k, see exceptions |
| Baraga-Houghton-Keweenaw | 47,553 | Houghton 8,389 | Keweenaw, Houghton-Hancock, L'Anse |

### Exceptions

- **Gratiot (42k) stays alone:** every neighbour (Clinton, Isabella, Midland, Montcalm, Saginaw, Shiawassee) is 50k or more.
- **Gogebic-Ontonagon (20k):** only two counties; no other neighbour fits (Iron is better with Iron Mountain, Houghton is across the Keweenaw ridge). It is the smallest region, accepted because the area is remote.
- **Benzie-Leelanau (40k):** Manistee is better kept with Mason, and Grand Traverse (95k) stays alone.
- **Groups of 47k-48k** (Cheboygan..., Alcona..., Baraga...): the only remaining neighbours are already used or are on the other side of a divide; within the 3-county limit.
- The Mackinac Bridge (Emmet/Cheboygan with Mackinac) is the only link between the two peninsulas.

### Alternative

Gogebic-Iron-Ontonagon (32k) with Dickinson-Menominee (49k): gives Gogebic a third county, but Iron River is much closer to Iron Mountain than to Ironwood. Another: Leelanau-Benzie-Manistee (65k) plus Mason-Oceana (56k): ties the Leelanau Peninsula to the south, away from Traverse City.

### Map notes (things to check)

- 212 of the 745 places have `pop: null` (unincorporated CDPs), including Houghton Lake (Roscommon), Mio (Oscoda), Copper Harbor (Keweenaw), Grand Marais (Alger); these are real places that cannot be chosen as stations by population, and Roscommon, Oscoda and Keweenaw have few other options.
- counties.json gives Mackinac no Lower Peninsula neighbour, hence the bridges. Isle Royale (Keweenaw), Beaver and Mackinac islands exist only as part of their counties.
- No asymmetric neighbours found, county populations sum to 10,077,674 (matches the state total).

**Outcome of phase 1:** the list and the two Mackinac Bridge links were applied as written (54 regions).

## Pack (phase 2)

Built from `packs/MI/raw/` (U.S. Census Bureau, 2020): station `pop` = the region's population in thousands from counties.json; lat/lon from places.json to 2 decimals, except the downtown points below. Roads, railways, bridges and landmarks are well known unless marked "(moderately known)".

**Counts:** 54 main stations, 92 towns (1.7 per region), 0 passes, 35 bridges, 4 levels, no city maps, no `bays`. `node tools/check-pack.js MI`: 0 errors, 2 warnings (Escanaba and Rogers City, 0.3 and 0.1 mi outside the simplified coast: fine for lake harbours); all packs pass; `node tools/test-pack.js MI`: PASSED (17 passed).

### Start
`mi-wayne`, `mi-washtenaw`, `mi-monroe` (all three touch each other). Detroit and Ann Arbor are metro, Monroe is coast (a Lake Erie harbour), so the first track (Ann Arbor-Monroe, 36 mi, the nearest pair of different types) has riders, as the pack test confirms. The three metro suburbs (Oakland, Macomb) are the first to buy.

### Stations
- **Sizes** (region population, as the other packs): Detroit 5 (Wayne 1,794k; Minneapolis 1,282k is 5); Troy (Oakland 1,274k), Warren (Macomb 881k) and Grand Rapids (Kent 658k) 4 (like Naperville 933k and St. Paul 552k); Ann Arbor (372k) and Flint (406k) 3; Lansing, Kalamazoo, Saginaw, Muskegon, Holland, Jackson, Battle Creek, Monroe, Howell, Port Huron, Traverse City and a few 60k-100k regions with a city of 10k or more (Adrian, Ionia, Owosso, Coldwater, Midland, Marquette, Mount Pleasant, Bay City, Charlotte) 2; the rest 1.
- **Types:** metro for the big cities and Detroit suburbs; coast for Great Lakes harbours (Monroe, Port Huron, Benton Harbor, South Haven, Holland, Muskegon, Manistee, Frankfort, Traverse City, Petoskey, Cheboygan, Alpena, East Tawas, Bay City, Sault Ste. Marie, Escanaba, Marquette); mountain, the game's type for forested country (as Wisconsin's and Minnesota's North Woods), for Cadillac, Gaylord and the Upper Peninsula inland towns (Iron Mountain, Ironwood, Houghton); farm for the rest.
- **Downtowns** (the Census point is the middle of the city limits): Detroit (Grand Circus Park, 42.35, -83.07; the Census point is 4 mi north-west; kept 4.9 mi from Windsor's station, the true downtown at 42.33, -83.05 would be 3.7 mi), Ann Arbor, Lansing (the Capitol), Flint, Kalamazoo, Battle Creek (3 mi east of the Census point), Grand Rapids, Muskegon, Saginaw, Traverse City, Petoskey (3 mi east), Marquette, Escanaba, Port Huron (the Census point is 1 mi north; 5.8 mi from Sarnia). Sault Ste. Marie at 46.49, -84.36 is 4.8 mi from Ontario's station (46.56, -84.35).
- **Exceptions to "biggest place":** **Benton Harbor** over Niles (11,985): the lake-shore centre (I-94/I-196, the Amtrak stop, the harbour, Whirlpool; St. Joseph, 7,860, is a mile and a half away and left out as a twin); Niles is a town. **Manistee** over Ludington (7,653): the middle of the group and the only way to give Frankfort two open neighbours in Tough (the map's Lake Michigan bulge blocks Frankfort-Ludington directly); Ludington (the S.S. Badger car ferry to Manitowoc) is a town. **Iron Mountain** over Menominee (8,483): Menominee faces Marinette's station 1.5 mi across the river, so it is left out; Iron Mountain (7,519) with Kingsford (5,142, left out as a twin) is the Menominee Range's centre. **Houghton** over Hancock: a mile apart; Hancock is left out. All other stations are the biggest place in places.json.
- **Ports and airports:** Port of Detroit (a real Great Lakes port) and Detroit Metropolitan Wayne County Airport (Romulus, in Wayne) on Detroit; Gerald R. Ford International Airport (Cascade Township, Kent) on Grand Rapids. The other packs mark airports down to Eugene and Wichita; Michigan's other airports (Flint Bishop, Lansing, Traverse City) are small. No other port is marked.
- **Scenic stations:** Holland (the Tulip Time festival), Traverse City (the National Cherry Festival; Grand Traverse Bay).

### Towns
92, the next-biggest real places spread out (the checker finds none under 4 mi apart), 4 to 5 mi at least: Detroit's suburbs (Dearborn, Livonia, Westland, Taylor), Oakland (Southfield, Farmington Hills, Rochester Hills, Pontiac), Macomb (Sterling Heights, St. Clair Shores, Mount Clemens, New Baltimore), the Grand Rapids and Lansing suburbs and so on. Left out as twins facing another station: **Menominee** (Marinette), **Hancock** (Houghton), **St. Joseph** and **Kingsford**. Corridor towns added because the map's lake outlines block some straight links: **Standish** and **Au Gres** (US-23 round Saginaw Bay: Bay City-East Tawas is blocked as the crow flies), **Naubinway** (US-2 on the Lake Michigan shore; a CDP, point from places.json), **Brimley** (CDP, M-221 to the Soo) and **Chatham** (217; the M-28/M-94 crossroads) in the Upper Peninsula, **Elk Rapids** (US-31 on Grand Traverse Bay), **Roscommon** and **Harrison** (US-27 and US-127 round Houghton Lake), **L'Anse** and **Ontonagon**.
- **Scenic towns** (each real and well known): **Dearborn** (the Henry Ford museum and Greenfield Village), **Frankenmuth** (Michigan's Little Bavaria, Bronner's), **Mackinac Island** (the Grand Hotel; the car-free island; place point from places.json, 582 people), **Munising** (gateway to Pictured Rocks National Lakeshore), **Copper Harbor** (the Keweenaw's tip, Fort Wilkins; a CDP, point from places.json), **Empire** (gateway to Sleeping Bear Dunes National Lakeshore). Not made: Isle Royale (no rail), Tahquamenon Falls (near Paradise, which has no Census place; Newberry, the county seat 25 mi away, is a plain town).
- A few corridor towns are tiny (Chatham 217, Naubinway, Brimley, Au Gres 954, Roscommon 981, Copper Harbor, Empire 348, Mackinac Island 582); each is a real, named place on the route.

### Water and bridges (35)
- **No passes:** the map has no mountains in Michigan (the Porcupine Mountains and the Huron Mountains are hills).
- **Straits and borders:** the **Mackinac Bridge** (I-75, 5 mi, Mackinaw City to St. Ignace; 1957) as two points (45.80, -84.73 and 45.84, -84.73) along it; the **Ambassador Bridge** (1929, 42.31, -83.07) and the **Detroit-Windsor Tunnel** (1930, 42.32, -83.04); the **Blue Water Bridge** (Port Huron-Sarnia, 1938, 43.00, -82.42); the **Sault Ste. Marie International Bridge** (1962, 46.51, -84.36); the **Portage Lake Lift Bridge** (US-41, Houghton-Hancock, 47.12, -88.57). The **Mackinac Island ferries** (Arnold Transit, Shepler's, Star Line, from St. Ignace and Mackinaw City) as one point on the route (45.87, -84.68), 4 mi out so that no other crossing uses it; without it Mackinac Island cannot be reached in Tough. Coordinates are from general knowledge, to 2 decimals; the checker finds each within 3 mi of water.
- **Rivers** (the ones on the map: Grand, Kalamazoo, St. Joseph, Muskegon, Flint, Menominee): 28 bridges, each snapped to the map's river where it passes the town (all within 2 mi of the town): Grand at Jackson, Eaton Rapids, Lansing, Grand Ledge, Portland, Ionia, Lowell, Grand Rapids and Grand Haven; Kalamazoo at Albion, Marshall, Battle Creek, Galesburg, Kalamazoo, Plainwell and Allegan; St. Joseph at Three Rivers, Constantine, Niles, Berrien Springs and St. Joseph-Benton Harbor; Muskegon at Evart, Big Rapids and Newaygo; Flint at Flint and Flushing; Menominee at Kingsford (US-2 to Florence, Wisconsin; moderately known). The Marinette-Menominee crossing is in Wisconsin's pack. The Saginaw, Detroit and River Raisin are not rivers on the map; the St. Clair River's crossing is the Blue Water Bridge; the Black rivers and the Tahquamenon are on the map but no main line crosses them.
- **No `bays`:** the Great Lakes, Lake St. Clair and the St. Marys River are lakes on the map already.

### Reachability (`NR.blockedReason`, Gentle and Tough)
- **Open in both:** Detroit-Windsor, Port Huron-Sarnia, Sault Ste. Marie-Sault Ste. Marie (Ontario), Mackinaw City-St. Ignace, St. Ignace-Cheboygan, Mackinaw City-Petoskey, Mackinac Island-Mackinaw City, Marquette-Escanaba, Iron Mountain-Marinette (Wisconsin), Ironwood-Hurley (Wisconsin), Iron Mountain-Ironwood, Houghton-Iron Mountain.
- **I-94 / Wolverine chain** Detroit-Ann Arbor-Jackson-Battle Creek-Kalamazoo-Benton Harbor; **I-196** Grand Rapids-Holland-South Haven-Benton Harbor; **I-96** Lansing-Grand Rapids-Muskegon (Detroit-Howell-Lansing); **I-75** Detroit-Flint-Saginaw-Bay City, then West Branch-Grayling-Gaylord-Mackinaw City-St. Ignace-Sault Ste. Marie; **US-131** Grand Rapids-Big Rapids-Cadillac-Gaylord; **I-69** Lansing-Flint-Port Huron; **US-23** Bay City-Standish-Au Gres-East Tawas; **US-2** Sault Ste. Marie-Newberry-Naubinway-Manistique-Gladstone-Escanaba, and Marquette-Chatham-Munising; **US-41** Marquette-Negaunee-L'Anse-Houghton: all open in both modes, as chains of stations and towns.
- **Every station has at least two open neighbouring stations in both modes**, counting Ontario's and Wisconsin's. Station pairs that are blocked as the crow flies (each has an open chain through towns, listed above): Bay City-East Tawas (Saginaw Bay), Cheboygan-Sault Ste. Marie (Lake Huron), Houghton-Marquette (Keweenaw Bay: via L'Anse); in Tough also Clare-Gaylord (Houghton Lake: via Roscommon), Petoskey-Traverse City (Lake Michigan: via Elk Rapids and Kalkaska; in Gentle via Elk Rapids), Gaylord-Traverse City (Elk Lake: via Kalkaska), Escanaba-Sault Ste. Marie (via Newberry and Manistique), Detroit-Port Huron (Lake St. Clair: via Warren). Detroit-Port Huron is the only I-94/I-69 pair a player would notice.
- Not checked: Indiana, Ohio and Illinois links (they come later), Frankfort-Ludington (the Badger ferry to Manitowoc is not modelled).

### Levels (4)
1. Detroit & the South-East (10 regions: Wayne, Oakland, Macomb, Washtenaw, Livingston, Monroe, Lenawee, Lapeer, St. Clair, Genesee): 50 passengers, 5 counties, 10 containers (the Port of Detroit).
2. Lansing & the South (14): 140 passengers, Detroit-Lansing (I-96), 15 counties.
3. Grand Rapids, the Lakeshore & Saginaw Bay (16): 280 passengers, Lansing-Grand Rapids (I-96), a high-speed train.
4. Northern Michigan & the Upper Peninsula (14): 450 passengers, Traverse City-Sault Ste. Marie (across the Mackinac Bridge), 25 trucks.

### Biomes
`forest`: the Upper Peninsula and the northern Lower Peninsula's pine and hardwood country (Marquette, Alger-Delta-Schoolcraft, Chippewa-Luce-Mackinac, Dickinson-Iron-Menominee, Gogebic-Ontonagon, Baraga-Houghton-Keweenaw, Antrim-Charlevoix-Emmet, Cheboygan-Montmorency-Presque Isle, Alcona-Alpena-Oscoda, Crawford-Kalkaska-Otsego, Arenac-Iosco-Ogemaw, Clare-Gladwin-Roscommon, Lake-Missaukee-Wexford), as Wisconsin's and Minnesota's North Woods. `wooded`: the lake-shore dunes and orchards and the river woods (Manistee-Mason-Oceana, Benzie-Leelanau, Grand Traverse, Mecosta-Osceola, Newaygo). No `dry`. The rest is farmland.

### Unsure
- Menominee River bridge at Kingsford for US-2 to Florence: moderately known (the brief named Iron Mountain-Florence).
- Station choices Manistee and Benton Harbor are mine (reasons above); Ludington and Niles are the alternatives (Ludington would leave Frankfort with one open neighbour in Tough).
- Sizes of Oakland and Macomb (4) judged against Naperville (933k, size 4), not 5.

## City maps

**Detroit (`DET`, size 5, 12 stops, hub New Center Amtrak station).** I chose the Amtrak station in New Center (42.368,-83.078, 1.3 mi from the state map's downtown station) as the hub because it is the real railway station; Downtown (Campus Martius / Greektown, 42.336,-83.049) is a separate stop. Stops: New Center, Downtown, Corktown (Michigan Central), Hamtramck, Windsor (Ontario, across the river; the city map crosses the border), Grosse Pointe, Dearborn, Detroit Metro Airport, Livonia, Southfield, Royal Oak, Warren. Furthest stop Metro Airport, 17.2 mi; closest pair 1.4 mi. All coordinates from general knowledge.
- Preview (`/tmp/city-midwest/preview-DET.png`): the Detroit River and Lake St. Clair are water. Downtown was moved north (Campus Martius is a quarter mile from the river) so it sits on land; Windsor is on the south bank, on land. Belle Isle was tried first and dropped (it sat on the river edge in the preview) in favour of Hamtramck.
- Left out: Ann Arbor (about 34 mi), Sterling Heights, Pontiac, Midtown/Wayne State (under 1 mi from New Center), Belle Isle.

- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
