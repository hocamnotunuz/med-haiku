# Wisconsin (WI) pack notes

## Region merges (phase 1)

Populations are from `packs/WI/raw/counties.json` and `packs/WI/raw/places.json` (U.S. Census Bureau, 2020 base). Geography and transport facts are from general knowledge and are marked "moderately known" where less certain. Every group was checked with a script: all members connect through `neighbors`.

### Recommended (72 -> 49 regions)

```
merge: [["Florence", "Forest", "Marinette"], ["Menominee", "Oconto", "Shawano"], ["Langlade", "Lincoln"], ["Oneida", "Vilas"], ["Door", "Kewaunee"], ["Ashland", "Bayfield", "Iron"], ["Douglas", "Washburn"], ["Burnett", "Polk"], ["Price", "Rusk", "Sawyer"], ["Clark", "Taylor"], ["Jackson", "Monroe"], ["Adams", "Juneau"], ["Green Lake", "Marquette", "Waushara"], ["Crawford", "Vernon"], ["Green", "Lafayette"], ["Iowa", "Richland"], ["Buffalo", "Trempealeau"], ["Pepin", "Pierce"]]
names: { "Oneida-Vilas": "Northwoods", "Ashland-Bayfield-Iron": "Chequamegon" }   // optional; the automatic names also work
```

No `bridges` or `join` needed (Door is joined to Kewaunee by land).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Florence + Forest + Marinette | Green Bay's north shore and the north-eastern woods: US-141 north from Marinette to Florence, US-8/WI-55 to Crandon (moderately known) | Marinette (11,119) | 55,613 |
| Menominee + Oconto + Shawano | The Menominee reservation between Oconto Falls and Shawano (WI-22, moderately known) | Shawano (9,246) | 84,083 |
| Langlade + Lincoln | Antigo and Merrill, US-45/WI-64 (moderately known), the Wisconsin Central country | Merrill (9,350) | 47,907 |
| Oneida + Vilas | Rhinelander, Minocqua, Eagle River: the Northwoods lakes, US-51/US-45 | Rhinelander (8,291) | 60,888 |
| Door + Kewaunee | The Door peninsula, WI-42 Algoma to Sturgeon Bay; Door's only land neighbour is Kewaunee | Sturgeon Bay (9,657) | 50,633 |
| Ashland + Bayfield + Iron | Lake Superior's south shore, US-2 from Hurley to Ashland, Chequamegon Bay to Washburn | Ashland (7,912) | 38,383 |
| Douglas + Washburn | US-53 from Superior south to Spooner; Superior is the only town of size | Superior (26,750) | 60,918 |
| Burnett + Polk | The St. Croix valley and northwest lakes (WI-35/WI-70, moderately known) | Amery (2,966) | 61,506 |
| Price + Rusk + Sawyer | The north-woods heart: Park Falls, Ladysmith, Hayward, all three touch each other | Ladysmith (3,222) | 46,306 |
| Clark + Taylor | Neillsville, Abbotsford, Medford (US-10 and WI-13, moderately known) | Medford (4,344) | 54,569 |
| Jackson + Monroe | I-94 from Tomah by Black River Falls to Eau Claire's edge; the Empire Builder stops at Tomah | Sparta (10,030) | 67,412 |
| Adams + Juneau | Mauston, New Lisbon, Friendship: the Wisconsin River and central sands, I-90/94 | Mauston (4,348) | 47,363 |
| Green Lake + Marquette + Waushara | The lakes and sands between Berlin, Montello and Wautoma, all three touch each other | Berlin (5,577) | 59,131 |
| Crawford + Vernon | The Driftless hills from Viroqua to the Mississippi at Prairie du Chien, WI-27/WI-60 (moderately known) | Prairie du Chien (5,524) | 46,825 |
| Green + Lafayette | Monroe and Darlington, the cheese and lead country on the Illinois line | Monroe (10,667) | 53,699 |
| Iowa + Richland | Dodgeville, Mineral Point, Richland Center, the Wisconsin River's southern bank, WI-23 (moderately known) | Richland Center (5,118) | 41,027 |
| Buffalo + Trempealeau | The Mississippi shore from Fountain City to Trempealeau, WI-35 and the BNSF/Empire Builder line | Arcadia (3,737) | 44,064 |
| Pepin + Pierce | Lake Pepin and the Great River Road to the Twin Cities edge at Prescott | River Falls (16,191) | 49,526 |

Station rule: the largest place in places.json. Alternative stations: Crawford + Vernon could use Viroqua (4,508, the middle of the group); Menominee + Oconto + Shawano is unevenly shaped (Oconto 4,610 is on the coast).

Alone, under 50k (exceptions):
- **Barron** 46,726 (Rice Lake 9,050): within 7% of 50k, a hub on US-8/US-53 with no merge that makes a corridor.
- **Dunn** 45,425 (Menomonie 16,845): on I-94 between Eau Claire (106k) and Hudson; all neighbours are big or already grouped.

Alone, 50k and over: the other 27 counties (Calumet, Grant, Waupaca, Columbia, Sauk and the bigger ones). 49 regions = 18 groups + 2 + 29.

### Alternative
Split Marinette + Oconto (US-41 shore, 81k, Marinette) and put Florence + Forest + Langlade (33k, Antigo) together, with Lincoln + Taylor (WI-64, 48k, Merrill) and Clark + Jackson (US-95, 56k, Black River Falls), leaving Menominee + Shawano (45k) and Monroe alone (46k). Pro: Marinette-Oconto is the stronger shore corridor. Con: Florence and Forest then sit in an odd group, and Monroe becomes a third exception.

### Map issues
- places.json has many places with `pop: null` (CDPs and towns): Keshena and Legend Lake (Menominee), Florence, Argonne, Laona, Minocqua, Boulder Junction, Lac du Flambeau, Elcho, Arkdale, Seymour (Eau Claire), Turtle Lake (Walworth). Minocqua, Lac du Flambeau and Keshena are well-known places; with null pops the station rule skips them.
- Duplicate names: "Superior" appears twice in Douglas (26,750 and 678); "Waukesha", "Pewaukee" are each a city and a village in Waukesha. Same for "Seymour"/"Turtle Lake" in different counties.
- Door has only Kewaunee as neighbour (correct by land; Marinette and Brown are across the bay), Marinette has no Michigan neighbour yet (later).
- Not otherwise checked: county shapes and `rings` (not printed, by brief).

**Outcome of phase 1:** the list was applied as written (49 regions, without the optional nicknames).

## Pack (phase 2)

Built from `packs/WI/raw/` (U.S. Census Bureau, 2020 base): station `pop` = the region's population in thousands from counties.json; lat/lon from places.json to 2 decimals, except where noted. Geography and transport facts are from general knowledge (well known unless marked).

**Counts:** 49 main stations, 73 towns, 0 passes, 38 bridges, 4 levels, no city maps, no `bays`. `node tools/check-pack.js WI`: 0 errors, 0 warnings; all packs pass; `node tools/test-pack.js WI`: PASSED (17 passed).

### Start
`wi-milwaukee`, `wi-waukesha`, `wi-racine` (Racine and Waukesha both touch Milwaukee and each other). Types: Milwaukee and Waukesha metro, Racine coast (a Lake Michigan harbour), so the first track is Milwaukee-Racine (26 mi) and carries riders. Ozaukee was left out because it does not touch Waukesha.

### Stations
- **Sizes** (by region population, as the other packs): Milwaukee 939k is size 5 (Portland's 815k is 5; Minneapolis's 1,282k is 5; Omaha 585k is 4); Madison 562k size 4; Waukesha 407k size 3; 65k and over size 2; below that size 1.
- **Types:** metro for the big cities (Milwaukee, Waukesha, Mequon, Madison, Green Bay, Appleton, Oshkosh, La Crosse, Eau Claire); coast for Lake Michigan and Lake Superior harbour cities (Racine, Kenosha, Sheboygan, Manitowoc, Sturgeon Bay, Marinette, Superior, Ashland); mountain for the North Woods (Rhinelander, Ladysmith), the game's type for forested country, as Minnesota's; farm for the rest.
- **Downtowns** (the Census point is the middle of the city limits): Milwaukee (City Hall, 43.04, -87.91; the Census point is 4 mi west), Madison (the Capitol Square, 43.07, -89.38), Waukesha, Racine, Kenosha, Sheboygan, Manitowoc, Green Bay, Appleton, Oshkosh, Wausau, Janesville, La Crosse (43.81, -91.25, on the river), Eau Claire, Chippewa Falls: each within 1-4 mi of the Census point.
- **Superior** stays at its Census point (46.69, -92.08): downtown (46.72, -92.10) is 3.6 mi from Duluth's station (Minnesota's pack), under the 4 mi rule; the point is 5.7 mi away.
- **Dodgeville**, not Richland Center (5,118; biggest by 135 people): Iowa County's seat on US-151 (Madison to Dubuque), with Mineral Point, Taliesin and the House on the Rock nearby; Richland Center is a town.
- **Sparta** (10,030), by 464 over Tomah (a town, where I-90 and I-94 meet). **Marshfield** (18,933) by 63 over Wisconsin Rapids (a town). **Whitewater** (16,141) over Elkhorn and Lake Geneva (towns).
- **Marinette** faces Menominee, Michigan across the Menominee River (1.5 mi); Michigan's pack (later) should either take Menominee as a town or move its station. **Hurley** (a town here) faces Ironwood, Michigan likewise.
- **Ports and airports:** Port of Milwaukee and Milwaukee Mitchell International Airport on Milwaukee (the only airport, as Eppley is Omaha's); the Port of Duluth-Superior on Superior as well as Duluth: the port is one harbour, but Superior holds its own coal, grain and ore docks (general knowledge). Green Bay, Marinette, Ashland and Manitowoc have small commercial ports, not given.
- **Scenic stations:** Green Bay (Lambeau Field, the Packers' stadium, in Ashwaubenon next to it), Baraboo (Circus World and Devil's Lake State Park, 3 mi south, too close for a separate town), Sturgeon Bay (Door County, the peninsula of lighthouses and orchards).

### Towns
About 1.5 per region (73), the next-biggest real towns, spread out (the checker finds none under 4 mi apart). Left out because each is a twin facing another station: Prescott (3 mi from Minnesota's Hastings), Onalaska stays (La Crosse's suburb, 5.6 mi). Scenic: Lake Geneva (Geneva Lake resort), Wisconsin Dells (the gorge and waterparks; placed 1 km off the Census point in Columbia County, the Dells' Census point), Taliesin (43.14, -90.07, Iowa County; Frank Lloyd Wright's home, Wikipedia), House on the Rock (43.09, -90.14, Iowa County, Wikipedia), Sister Bay (Door County's resort village; nudged 2 km south-east, inside the county's outline), Minocqua (the Northwoods lakes; a CDP with no Census population, its point is from places.json), Bayfield (the Apostle Islands gateway, nudged 2 km inland to 46.81, -90.84). New London was nudged 1 km north-east to stay inside Outagamie County.

### Water and bridges
- No passes: the map has no mountains in Wisconsin (a few hills in the Driftless Area).
- Rivers on the map never block track; they add $10k (Gentle) or $25k (Tough) a crossing unless a real bridge is within 2 mi. The list covers every river city the main lines cross: the Wisconsin (Eagle River to Boscobel), the Chippewa and Black, the Fox and Wolf (Green Bay to Oshkosh and Berlin), the Menominee (Marinette), the Rock and the Fox in the south-east. Each is placed on the map's river where it passes the town (the town's name is in the bridge's name; a city of this size has bridges there, general knowledge).
- Not repeated here (already in Minnesota's and Iowa's packs, which every state shares): the Mississippi at La Crosse-La Crescent, Winona, Wabasha, Red Wing, Hastings, Prairie du Chien-Marquette and Dubuque; the St. Croix at Hudson, Stillwater and Taylors Falls; Duluth-Superior (Blatnik and Bong). Checked open: Hudson-Woodbury, River Falls-Lakeville, La Crosse-Winona/Chatfield, Prairie du Chien-Decorah/Oelwein, Platteville-Dubuque, Superior-Duluth/Cloquet, Amery-North Branch.
- No `bays`: Green Bay and Chequamegon Bay are part of the Lake Michigan and Lake Superior outlines, and no line was found to need one.
- **Known limits in Tough mode** (Gentle has none): Fond du Lac-Harrison is blocked (18 mi across Lake Winnebago; Fond du Lac reaches Oshkosh and its other neighbours); Milwaukee-Sheboygan direct is blocked (the map's lake outline; go Milwaukee-Mequon-Sheboygan); the Bayfield peninsula (Bayfield) cannot reach Ashland (the map's Lake Superior outline cuts across Chequamegon Bay; the real road runs round the bay), but Bayfield links to Superior and Hayward.

### Reachability
Every main station has at least two open neighbour links in Gentle and Tough (script on `NR.blockedReason`, all 49 stations against their `neighbors` in counties.json). Corridors checked as chains in both: I-94 (Milwaukee, Madison, Mauston, Sparta, Eau Claire, Menomonie, Hudson, Minneapolis), I-90 (Madison to Winona), I-43 (Milwaukee, Mequon, Sheboygan, Manitowoc, Green Bay), the Fox valley and US-41 (Milwaukee to Marinette), I-39 (Janesville to Rhinelander), I-94 south (Milwaukee, Racine, Kenosha), US-151 (Madison, Dodgeville, Platteville, Dubuque), US-53/US-2 (Eau Claire to Duluth), US-18 (Dodgeville, Prairie du Chien, Decorah), US-8, the Mississippi (Hudson, River Falls, La Crosse), US-10, Door County (Green Bay, Sturgeon Bay, Manitowoc), the North Woods (Rhinelander, Ladysmith, Ashland). Every town has an open link in both modes except Bayfield-Ashland in Tough (above).

### Biomes
`forest`: the North Woods (Ashland-Bayfield-Iron, Douglas-Washburn, Price-Rusk-Sawyer, Oneida-Vilas, Florence-Forest-Marinette, Langlade-Lincoln, Burnett-Polk), as Minnesota's across the line. `wooded`: the Driftless bluffs (La Crosse, Buffalo-Trempealeau, Crawford-Vernon, Iowa-Richland, Grant, Jackson-Monroe, Pepin-Pierce), the central sands (Adams-Juneau), Baraboo's bluffs (Sauk), the north-west woods (Barron, Chippewa, Eau Claire, Clark-Taylor), the Door peninsula and Menominee-Oconto-Shawano. Not listed: the south-east, Madison's plain, the Fox valley and the dairy middle. No `dry`.

### Levels
1. Milwaukee & the Lake Michigan Shore (`metro`, 11 stations: Milwaukee, Waukesha, Ozaukee, Washington, Racine, Kenosha, Walworth, Jefferson, Dodge, Sheboygan, Fond du Lac): 50 passengers, 5 counties, 10 containers (Milwaukee's port).
2. Madison & the South-West (`south`, 10): 140 passengers, Milwaukee-Madison connected, 15 counties.
3. The Fox Valley, Green Bay & Central Wisconsin (`east`, 12): 280 passengers, Milwaukee-Green Bay connected, a high-speed train.
4. The West, the Mississippi & the North Woods (`west`, 16): 450 passengers, Madison-La Crosse connected, 25 loads of trucks.

## Main agent's review

- **Milwaukee is size 4, not 5:** like St. Louis, Denver and Kansas City (cores of metros of 1.5 to 3 million: St. Louis 4, Denver 4, Kansas City 4); size 5 is for Los Angeles, Phoenix, Houston, Minneapolis and the like.
