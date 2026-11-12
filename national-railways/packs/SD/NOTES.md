# South Dakota (SD) pack notes

## Region merges (phase 1)

Populations: `packs/SD/raw/counties.json` and `packs/SD/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 886,668). Every group is connected through `neighbors` (checked with a script), and the shared border lengths (km) were measured on the rings in `map.js`. Roads, rivers, dams, railways and reservations named here are well known unless marked "(moderately known)".

### Recommended (66 → 30 regions)

```
merge: [["Butte", "Harding", "Lawrence"], ["Custer", "Fall River"], ["Bennett", "Oglala Lakota"], ["Mellette", "Todd"], ["Gregory", "Tripp"], ["Dewey", "Ziebach"], ["Corson", "Perkins"], ["Haakon", "Jackson"], ["Jones", "Lyman", "Stanley"], ["Campbell", "Walworth"], ["Brown", "Edmunds", "McPherson"], ["Hughes", "Potter", "Sully"], ["Hand", "Hyde"], ["Clark", "Faulk", "Spink"], ["Marshall", "Roberts"], ["Day", "Grant"], ["Codington", "Deuel", "Hamlin"], ["Brookings", "Moody"], ["Kingsbury", "Lake", "Miner"], ["Beadle", "Jerauld", "Sanborn"], ["Aurora", "Brule", "Buffalo"], ["Davison", "Hanson", "Hutchinson"], ["Charles Mix", "Douglas"], ["McCook", "Turner"], ["Bon Homme", "Yankton"], ["Clay", "Union"]]
names: { "Aurora-Brule-Buffalo": "Brule-Aurora-Buffalo County", "Butte-Harding-Lawrence": "Lawrence-Butte-Harding County" }
```

- No `bridges` or `join`: no county is cut off by water.
- Groups are written in alphabetical order, as the tool names them, so the `names` keys are the alphabetical ones.
- Two renames, the same fix as Colorado's "Kit Carson-Cheyenne County" and North Dakota's "Stark-Billings-Golden Valley County":
  - "Aurora-Brule-Buffalo County" would start with Aurora, Colorado's metro station. Aurora, SD is also a town in Brookings County, in another region. Brule (Chamberlain) goes first.
  - "Butte-Harding-Lawrence County" would start with Butte, Montana's station. Lawrence (Spearfish) goes first, then north along US-85 to Butte (Belle Fourche) and Harding.
- **The Missouri stays a line.** No region straddles it (North Dakota kept it that way too). Each crossing joins two regions: Mobridge (Campbell-Walworth / Corson-Perkins), US-212 at Forest City (Hughes-Potter-Sully / Dewey-Ziebach, moderately known), Pierre and Fort Pierre (Hughes-Potter-Sully / Jones-Lyman-Stanley), Big Bend Dam and Chamberlain on I-90 (Brule-Aurora-Buffalo / Jones-Lyman-Stanley), and Fort Randall Dam (Charles Mix-Douglas / Gregory-Tripp, moderately known).

**Alone, over 50k (3):**
- **Minnehaha:** Sioux Falls (192,718).
- **Pennington:** Rapid City (74,719).
- **Lincoln:** Harrisburg (6,738) is its largest listed place. Sioux Falls spans Minnehaha and Lincoln, but places.json gives the whole city to Minnehaha. The station is a phase 2 choice.

**Alone, under 50k (the one exception):**
- **Meade** 29,847: Sturgis (7,094), plus Rapid City's northern edge on I-90 (Summerset 2,972, Piedmont 1,043). The Northern Hills have three counties: Lawrence 25.8k, Meade 29.8k and Butte 10.2k. Their only small partners are Butte and Harding. So one of Lawrence and Meade stays alone, unless Spearfish and Sturgis share a region (Lawrence + Meade = 55,618, above the 50k line, and one of them loses its station). Meade's other small neighbours are empty prairie: Perkins (Lemmon), Ziebach (Cheyenne River) and Haakon (a 0.3 km corner).

| Group (border km) | Why | Main station | Population |
| --- | --- | --- | --- |
| Lawrence + Butte + Harding (40, 85) | The Northern Hills: Spearfish, Lead, Deadwood. US-85 runs north by Belle Fourche (10 mi from Spearfish) and Buffalo to Bowman, ND (moderately known) | Spearfish (12,197) | 37,325 |
| Custer + Fall River (85) | The southern Black Hills: Custer and Wind Cave, then US-385 to Hot Springs and Edgemont (moderately known) | Hot Springs (3,390) | 15,289 |
| Bennett + Oglala Lakota (46) | The Pine Ridge Reservation, with US-18 from Pine Ridge to Martin (moderately known) | Martin (933) by the largest-place rule. Pine Ridge (a CDP, no population in places.json) is the real centre: a phase 2 choice | 17,046 |
| Mellette + Todd (82) | The Rosebud country: Mission and Rosebud, with US-83 north to White River (moderately known) | Mission (1,154) | 11,243 |
| Gregory + Tripp (56) | Winner, and US-18 east by Colome, Gregory and Burke toward Fort Randall Dam (moderately known) | Winner (2,915) | 9,625 |
| Dewey + Ziebach (110) | The Cheyenne River Reservation (Eagle Butte), on US-212 (moderately known) | Eagle Butte (1,257) | 7,657 |
| Corson + Perkins (52) | The Grand River country (Standing Rock in Corson, Shadehill in Perkins). US-12 and the old Milwaukee Road run from Mobridge's bridge by McLaughlin and McIntosh to Lemmon (moderately known) | Lemmon (1,161). McLaughlin (567) is nearer most of Corson's people: a phase 2 choice | 6,745 |
| Haakon + Jackson (75) | The Badlands' east end: Philip on US-14, Kadoka on I-90, and Interior and Wanblee. SD-73 joins Philip and Kadoka (moderately known) | Philip (764) | 4,677 |
| Jones + Lyman + Stanley (52, 54, 37) | Pierre's West River side: Fort Pierre, US-83 south to Vivian and Murdo, and I-90 from Murdo by Presho to Oacoma (moderately known), plus Lower Brule | Fort Pierre (2,121) | 7,618 |
| Campbell + Walworth (56) | Mobridge on Lake Oahe, and US-83 north by Selby to Herreid (moderately known) | Mobridge (3,261) | 6,694 |
| Brown + Edmunds + McPherson (38, 38) | Aberdeen, and US-12 west by Ipswich, Roscoe and Bowdle, plus Leola and Eureka to the northwest (moderately known) | Aberdeen (28,491) | 44,700 |
| Hughes + Potter + Sully (67, 58) | Pierre and Oahe Dam, and US-83 north by Onida to Gettysburg along Lake Oahe's east shore (moderately known) | Pierre (14,085) | 21,688 |
| Hand + Hyde (79) | US-14 between Huron and Pierre: Miller and Highmore (moderately known) | Miller (1,348) | 4,402 |
| Clark + Faulk + Spink (58, 38) | US-212 west from Watertown's edge: Clark, Redfield (also on US-281) and Faulkton (moderately known) | Redfield (2,217) | 12,326 |
| Marshall + Roberts (42) | The northeast corner: Sisseton on I-29 and Lake Traverse, the Lake Traverse Reservation, and Britton (moderately known) | Sisseton (2,479) | 14,581 |
| Day + Grant (16) | US-12 and the old Milwaukee Road from Webster and Waubay to Milbank and Big Stone City (moderately known). Day, Grant and Roberts meet near Summit, where US-12 meets I-29 | Milbank (3,544) | 13,014 |
| Codington + Deuel + Hamlin (48, 29; Codington–Deuel 19) | Watertown, and I-29 south toward Brookings, near Castlewood, Clear Lake and Estelline. From the map, I-29 seems to run through Deuel's west edge (moderately known) | Watertown (22,658) | 38,782 |
| Brookings + Moody (35) | I-29 from Sioux Falls's county line by Flandreau (Egan, Colman) to Brookings | Brookings (23,370) | 40,702 |
| Kingsbury + Lake + Miner (19, 38, 38) | Madison, with Howard to the west and De Smet, Arlington and Lake Preston on US-14 to the north (moderately known) | Madison (6,191) | 18,547 |
| Beadle + Jerauld + Sanborn (29, 38, 29) | Huron on US-14 and the James, with Wessington Springs and Woonsocket to the south (moderately known) | Huron (14,252) | 23,145 |
| Brule + Aurora + Buffalo (49, 34) | I-90 from Plankinton by White Lake and Kimball to Chamberlain on the Missouri, plus Fort Thompson, Big Bend Dam and Crow Creek (moderately known) | Chamberlain (2,474) | 9,934 |
| Davison + Hanson + Hutchinson (39, 29; Davison–Hutchinson 12) | Mitchell, I-90 east by Alexandria, and the farm towns to the south: Parkston (about 20 miles away), Freeman, Menno and Emery (moderately known) | Mitchell (15,660) | 30,840 |
| Charles Mix + Douglas (67) | Lake Francis Case's east shore: Platte, Pickstown (Fort Randall Dam), Lake Andes, and Wagner (Yankton Sioux), plus Armour and Corsica (moderately known) | Wagner (1,487) | 12,215 |
| McCook + Turner (22) | Sioux Falls's western farm belt: I-90 at Montrose and Salem, then Parker, Marion, Centerville, Viborg and Hurley to the south. There is no market town; Sioux Falls stays alone | Salem (1,335); Parker (1,195) is close | 14,342 |
| Bon Homme + Yankton (35) | The Missouri at Gavins Point Dam and Lewis and Clark Lake: Yankton, Springfield, Tyndall and Avon | Yankton (15,441) | 30,308 |
| Clay + Union (42) | The Missouri bottoms below Yankton: Vermillion (University of South Dakota), and I-29 by Beresford, Elk Point and North Sioux City. Union touches only Clay and Lincoln | Vermillion (11,697) | 31,785 |

Station rule: the largest place in places.json, as in New Mexico and North Dakota. The phase 2 choices are noted in the table (Pine Ridge, McLaughlin, Lincoln's).

The corridors stay clean chains:
- **I-90:** Minnehaha, McCook-Turner, Davison-Hanson-Hutchinson, Brule-Aurora-Buffalo, (the Missouri), Jones-Lyman-Stanley, Haakon-Jackson, Pennington, Meade, Lawrence-Butte-Harding, then Wyoming (Crook-Weston).
- **I-29:** Clay-Union, Lincoln, Minnehaha, Brookings-Moody, Codington-Deuel-Hamlin, Day-Grant (a short stretch of Grant south of Summit), Marshall-Roberts, then North Dakota.
- **US-14:** Brookings-Moody, Kingsbury-Lake-Miner, Beadle-Jerauld-Sanborn, Hand-Hyde, Hughes-Potter-Sully, Jones-Lyman-Stanley, Haakon-Jackson, Pennington (Wall).
- **US-212:** Codington-Deuel-Hamlin, Clark-Faulk-Spink, Hughes-Potter-Sully (Gettysburg), Dewey-Ziebach, Meade (Faith), Lawrence-Butte-Harding (Newell, Belle Fourche).
- **US-12:** Day-Grant, Brown-Edmunds-McPherson, Campbell-Walworth, Corson-Perkins, then North Dakota (Adams-Bowman-Slope).
- **US-83:** North Dakota, Campbell-Walworth, Hughes-Potter-Sully, Jones-Lyman-Stanley, Mellette-Todd, then Nebraska.
- **US-18 (moderately known):** Lincoln, McCook-Turner, Davison-Hanson-Hutchinson, Charles Mix-Douglas, Gregory-Tripp, Mellette-Todd, Bennett-Oglala Lakota, Custer-Fall River.

Rejected:
- **Hughes + Stanley** (Pierre and Fort Pierre), **Brule + Lyman** (Chamberlain and Oacoma), **Walworth + Corson** (Mobridge's bridge): each would put one region across the Missouri. Pierre is the alternative below.
- **Lawrence alone with Butte + Harding** (Belle Fourche, 11,554): one region more and a second Black Hills exception. **Lawrence + Meade:** 55,618, and Sturgis or Spearfish loses its station.
- **Corson + Dewey + Ziebach**, with Harding + Perkins and Butte + Lawrence: the same count, but it puts Standing Rock and Cheyenne River together and leaves Harding-Perkins at 4,152.
- **Grant + Roberts with Day + Marshall:** the same count and longer borders (61 km each), but Sisseton loses its station to Milbank.
- **Day + Marshall + Roberts with Deuel + Grant** (Clark then joins Watertown, and Faulk + Spink): Deuel-Grant would hold I-29 on both sides of Watertown, and Deuel–Grant is a weak tie.
- **Brookings + Kingsbury** (US-14) **with Lake + Miner + Moody** (SD-34, moderately known): the same count. But Moody lies on I-29 between Sioux Falls and Brookings.
- **Hutchinson + Turner** (US-18): no market town, and Parkston is about 20 miles from Mitchell.
- **Oglala Lakota with Fall River or Custer:** Hot Springs would become Pine Ridge's station.
- **Union alone** (16,818): it touches only Clay and Lincoln.
- **Brown alone** (38,304): North Dakota merged its 30–45k hubs (Williston, Dickinson).
- **Lyman + Tripp + Gregory** (the 98 km border, US-183 south from Presho, moderately known): Lyman's towns face Chamberlain and Pierre, not Winner.

### Alternative (30 regions): Pierre and Fort Pierre together

Replace `["Hughes", "Potter", "Sully"]`, `["Jones", "Lyman", "Stanley"]` and `["Campbell", "Walworth"]` with these three:

| Group | Main station | Population |
| --- | --- | --- |
| `["Hughes", "Stanley", "Sully"]` | Pierre | 22,196 |
| `["Jones", "Lyman"]` | Presho (471) | 4,637 |
| `["Campbell", "Potter", "Walworth"]` | Mobridge | 9,167 |

- **Pro:** Pierre and Fort Pierre (2,121) are one town on the Missouri, joined by its bridges.
- **Con:** one region straddles the Missouri, and Fort Pierre loses its station. Jones-Lyman is left with a 471-person station, and Gettysburg goes to Mobridge, about 60 miles away.

### Map and data check

1. **The map looks right.**
   - All 66 counties are one piece each, and every label is inside its county.
   - The areas add up to about 76,700 sq mi, close to South Dakota's total with water (about 77,000).
   - All 485 places lie inside their tagged county; none is off the map.
   - Oglala Lakota has its current FIPS code (46102).
   - The 16 "coast" lines are the Minnesota, Iowa and Nebraska lines (not in the game yet).
2. **Neighbours agree both ways** with North Dakota (Adams-Bowman-Slope, Dickey-LaMoure, Emmons-Logan-McIntosh, Morton-Sioux, Ransom-Richland-Sargent), Montana (Carter-Fallon) and Wyoming (Crook-Weston, Converse-Niobrara). None is missing.
3. **Five corner contacts are listed as neighbours** (0.1–0.5 km of shared line): Brown–Faulk, Charles Mix–Lyman (in the Missouri), Haakon–Meade, Kingsbury–Sanborn and McPherson–Walworth. No merge uses them. They let a player unlock across a corner, while two states that meet only at a point are not neighbours. The main agent may want to drop them.
4. **Shortest real links in the groups:** Davison–Hutchinson 12 km (Hanson also joins them, 29 km), Day–Grant 16 km, Codington–Deuel 19 km (Hamlin also joins them, 29 km), Kingsbury–Lake 19 km (both touch Miner, 38 km).
5. **Places:**
   - Only 309 of the 485 have populations. Oglala Lakota's only one is Batesland (75): Pine Ridge, Kyle, Oglala and others are CDPs without one. Rosebud (Todd), Lower Brule (Lyman), Fort Thompson (Buffalo) and Wanblee (Jackson) have none either.
   - Places named like a county that lie in another county: Aurora (Brookings), Tripp (Hutchinson), Buffalo (Harding), Mellette (Spink).
   - Clear Lake appears twice: the city in Deuel (1,216) and a CDP in Marshall.
   - Hillsview (McPherson) is a town with a population of 0 in the file.
   - There are 63 "… Colony" CDPs with no populations.
   - Station names used elsewhere in the game: Salem (Oregon's metro) and Brookings (Oregon). They are phase 2 matters.
