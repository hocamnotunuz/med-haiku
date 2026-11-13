# South Dakota (SD) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (30 regions, with both renames). The corner contacts (item 3 of the map check) stay; the main agent judged them harmless. The map and raw facts were rebuilt, and the pack (phase 2, below) is built on it. Region ids follow the alphabetical names: `sd-aurora-brule-buffalo` (shown as Brule-Aurora-Buffalo County) and `sd-butte-harding-lawrence` (Lawrence-Butte-Harding County).

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

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/SD/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` points rounded to 2 decimals, except the scenic places that aren't towns (marked approx. where I gave the point from memory, within about a mile).
- **Facts added by hand** (bridges, scenic places, the airport, roads and railways) are well known unless marked "moderately known" or "from memory".
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough (`NR.runtime.geoLevel`). The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain. To test a bridge, it was taken out of the pack (then `NR.packsChanged()`), and every pair was compared.

### Start

`start: ["sd-minnehaha", "sd-lincoln", "sd-mccook-turner"]`: Sioux Falls, Harrisburg and Salem. All three touch each other (Minnehaha–Lincoln 26 km, Minnehaha–McCook-Turner 55 km, Lincoln–Turner 46 km).
- **Types:** metro, farm and farm.
- **First track:** both the game's hint and the pack test pair Sioux Falls with Harrisburg (8 mi crow, 9 mi of track, open in both modes, over the Big Sioux at a real bridge point). The pack test laid it, and 19 passengers arrived in the week (18 in an earlier run with Sioux Falls–Salem, 41 mi).
- **Why Harrisburg is farm:** with Harrisburg typed metro, the game's first-track hint (the nearest pair from the first station, whatever the types) suggested Sioux Falls–Harrisburg, a metro pair with no riders. Lincoln County is Sioux Falls's south side and suburbs (Harrisburg, Tea) plus the Big Sioux valley's farm towns (Canton, Lennox, Worthing). It is typed by the farm towns, as Colorado types Lakewood mountain to give its start two types.
- **Considered:** Minnehaha + Brookings-Moody + Kingsbury-Lake-Miner (Sioux Falls–Madison first, 38 mi). It works, but it leaves out Sioux Falls's own south side.

### Main stations (30)

Each id is unused in every other pack (the checker checks). SPF, STG, HSP, MLR, SIS, MDS, CHB, MTC, SLM, BKG, HUR, MAD and SAL are taken.

**Sizes** follow the PACKS.md guide and the neighbours (Fargo 185k, Bismarck 98k and Minot 70k are 2): **2** for the three regions over 50k (Sioux Falls 197k, Rapid City 109k, Harrisburg 65k), **1** for the rest.

**Types:** 4 metro, 21 farm, 3 desert, 2 mountain.
- East River is farm country, as North Dakota is typed across the line.
- Metro: Sioux Falls, Rapid City, Aberdeen (the third city, 28,491, as Gillette and Williston) and Pierre (the capital, as Bismarck and Cheyenne).
- Desert: the Badlands and the dry short-grass rangeland in the northwest (Philip, Pine Ridge, Lemmon), as North Dakota types Dickinson and Bowman and Montana types Baker across the line.
- Mountain: the Black Hills (Spearfish, Hot Springs), as Wyoming types Newcastle. Sturgis is farm (most of Meade County is ranch land), so the I-90 chain Rapid City–Sturgis–Spearfish has riders at every step.
- No coast: South Dakota has no sea coast, and the Missouri's reservoirs are lakes (North Dakota types Devils Lake farm).

| Station | Region, pop | Type, size | Why |
| --- | --- | --- | --- |
| Sioux Falls (FSD) | Minnehaha, 197k | metro 2 | Biggest city (192,718). **Airport:** Sioux Falls Regional (see below). FSD is its airport code |
| Harrisburg (HBG) | Lincoln, 65k | farm 2 | Biggest place in the county (6,738; Tea 5,600, Canton 3,074). Sioux Falls's south side is in Lincoln County too, but places.json gives the whole city to Minnehaha. Farm: see "Start". 7.7 mi from Sioux Falls's point |
| Salem (SLEM) | McCook-Turner, 14k | farm 1 | Biggest (1,335; Parker 1,195). Near I-90 west of Sioux Falls |
| Brookings (BKS) | Brookings-Moody, 41k | farm 1 | Biggest (23,370). South Dakota State University, the land-grant college, on I-29. Farm, so I-29 Sioux Falls–Brookings has riders |
| Madison (MDSN) | Kingsbury-Lake-Miner, 19k | farm 1 | Biggest (6,191). Dakota State University |
| Vermillion (VRM) | Clay-Union, 32k | farm 1 | Biggest (11,697). The University of South Dakota |
| Yankton (YKN) | Bon Homme-Yankton, 30k | farm 1 | Biggest (15,441). On the Missouri below Gavins Point Dam. Its airport code is YKN |
| Mitchell (MTCH) | Davison-Hanson-Hutchinson, 31k | farm 1, scenic | Biggest (15,660). The Corn Palace, a famous roadside sight, is downtown (about a mile from the point), so the station itself is scenic: a separate town there would be under 4 mi away |
| Wagner (WGN) | Charles Mix-Douglas, 12k | farm 1 | Biggest (1,487; Platte 1,294). The Yankton Sioux Tribe's town |
| Huron (HON) | Beadle-Jerauld-Sanborn, 23k | farm 1 | Biggest (14,252). On the James and US-14. HON is its airport code (HUR is taken) |
| Watertown (WTN) | Codington-Deuel-Hamlin, 39k | farm 1 | Biggest (22,658). On the Big Sioux and I-29. The Census point is about 2 mi west of downtown (from memory); kept, as it keeps the station off the map's Big Sioux |
| Milbank (MBK) | Day-Grant, 13k | farm 1 | Biggest (3,544) |
| Sisseton (SISS) | Marshall-Roberts, 15k | farm 1 | Biggest (2,479). On I-29 below Lake Traverse; the Lake Traverse Reservation |
| Redfield (RDF) | Clark-Faulk-Spink, 12k | farm 1 | Biggest (2,217) |
| Aberdeen (ABR) | Brown-Edmunds-McPherson, 45k | metro 1 | Biggest (28,491). The third city (Northern State University). ABR is its airport code |
| Chamberlain (CBN) | Brule-Aurora-Buffalo, 10k | farm 1 | Biggest (2,474). Where I-90 crosses the Missouri |
| Miller (MILL) | Hand-Hyde, 4k | farm 1 | Biggest (1,348; Highmore 680) |
| Pierre (PIR) | Hughes-Potter-Sully, 22k | metro 1 | Biggest (14,085). The capital. Its point is 3.0 mi from Fort Pierre's (the checker's one warning, below) |
| Mobridge (MBG) | Campbell-Walworth, 7k | farm 1 | Biggest (3,261). Where US-12 and the old Milwaukee Road cross Lake Oahe |
| Fort Pierre (FPR) | Jones-Lyman-Stanley, 8k | farm 1 | Biggest (2,121). Pierre's twin across the Missouri, and the ranches west of it |
| Winner (WNR) | Gregory-Tripp, 10k | farm 1 | Biggest (2,915) |
| Mission (MIS) | Mellette-Todd, 11k | farm 1 | Biggest place with a population (1,154). Rosebud, the Rosebud Sioux Tribe's headquarters, is a CDP (a town here) |
| Eagle Butte (EGB) | Dewey-Ziebach, 8k | farm 1 | Biggest (1,257). The Cheyenne River Sioux Tribe's headquarters |
| Philip (PHP) | Haakon-Jackson, 5k | desert 1 | Biggest (764; Kadoka 545). On US-14 at the Badlands' north edge. PHP is its airport code |
| Pine Ridge (PRG) | Bennett-Oglala Lakota, 17k | desert 1 | **Not the biggest place with a population** (Martin 933, in Bennett County). Pine Ridge is the Oglala Sioux Tribe's capital and the region's biggest community: about 3,000 people (from memory; a CDP, so places.json has no population). 13,671 of the region's 17,046 people live in Oglala Lakota County, whose only place with a population is Batesland (75). Martin is a town here. The Census point (43.03, -102.55) is 2 mi north of the Nebraska line |
| Rapid City (RAP) | Pennington, 109k | metro 2 | Biggest (74,719). The Black Hills' gateway. RAP is its airport code |
| Sturgis (STRG) | Meade, 30k | farm 1 | Biggest (7,094). On I-90 at the Black Hills' northeast foot (the motorcycle rally) |
| Spearfish (SPE) | Lawrence-Butte-Harding, 37k | mountain 1 | Biggest (12,197). The Northern Hills: Spearfish Canyon, Lead and Deadwood. The Census point is about 2 mi east of downtown (from memory); kept |
| Hot Springs (HOTS) | Custer-Fall River, 15k | mountain 1 | Biggest (3,390). The southern Black Hills (Wind Cave, Custer State Park) |
| Lemmon (LEM) | Corson-Perkins, 7k | desert 1 | Biggest (1,161; McLaughlin 567). On US-12 at the North Dakota line, 23 mi from Hettinger |

**Points:** every station is at its Census point. I compared the cities' points with their downtowns (from memory): all are within about 2 mi (Sioux Falls 0.4, Rapid City 0.9, Aberdeen 0.9, Pierre 1.6, Mitchell 1.4, Yankton 1.3, Spearfish 1.9, Watertown 2.1). None needed moving.

**Airport: Sioux Falls Regional only.**
- The bar the other packs use is about 1 million passengers a year (Montana: Bozeman and Missoula in, Billings Logan out at about 0.9–1.0 million).
- Sioux Falls Regional is South Dakota's busiest airport, over the bar at about 1.2–1.3 million passengers a year (from memory).
- **Left out:** Rapid City Regional, below the bar (from memory, under 1 million). If the main agent wants it, add `airport: "Rapid City Regional"` to RAP.

**No ports.**

### Towns (60: 52 towns and 8 scenic places)

Every town is inside its region, and the checker gives no spacing warnings. The closest pairs are Pierre–Fort Pierre (3.0 mi, two stations), Crazy Horse Memorial–Custer (4.9), Box Elder–Rapid City (7.5), Harrisburg–Sioux Falls (7.7), Brandon–Sioux Falls (8.3) and Deadwood–Spearfish (8.5). Populations are from `places.json`.

| Region | Towns |
| --- | --- |
| Minnehaha | Brandon (11,023, a Sioux Falls suburb, metro); Dell Rapids (3,993, on I-29) |
| Lincoln | Canton (3,074, the county seat, on US-18); Lennox (2,416) |
| McCook-Turner | Parker (1,195); Centerville (922) |
| Brookings-Moody | Flandreau (2,374, the Flandreau Santee Sioux Tribe's town, near I-29) |
| Kingsbury-Lake-Miner | **De Smet** (1,061, scenic); Howard (853) |
| Clay-Union | North Sioux City (3,044, I-29's crossing to Sioux City, Iowa, metro); Beresford (2,175, on I-29) |
| Bon Homme-Yankton | Springfield (1,916); Scotland (784) |
| Davison-Hanson-Hutchinson | Parkston (1,563); Freeman (1,332) |
| Charles Mix-Douglas | Platte (1,294, the Platte–Winner Bridge's east end); Pickstown (226, Fort Randall Dam's town) |
| Beadle-Jerauld-Sanborn | Wessington Springs (771); Woonsocket (631) |
| Codington-Deuel-Hamlin | Clear Lake (1,216); Estelline (749, near I-29) |
| Day-Grant | Webster (1,729, on US-12); Big Stone City (412, across Big Stone Lake from Ortonville, Minnesota) |
| Marshall-Roberts | Britton (1,222) |
| Clark-Faulk-Spink | Clark (1,146) and Faulkton (829), both on US-212 |
| Brown-Edmunds-McPherson | Groton (1,388) and Ipswich (932), both on US-12 |
| Brule-Aurora-Buffalo | Plankinton (776, on I-90); Fort Thompson (CDP, the Crow Creek Sioux Tribe's town at Big Bend Dam) |
| Hand-Hyde | Highmore (680, on US-14) |
| Hughes-Potter-Sully | Gettysburg (1,103, where US-83 meets US-212); Onida (662, on US-83) |
| Campbell-Walworth | Herreid (415, on US-83 toward Linton, ND) |
| Jones-Lyman-Stanley | Murdo (470) and Presho (471), both on I-90 |
| Gregory-Tripp | Gregory (1,227, on US-18) |
| Mellette-Todd | White River (538, on US-83); Rosebud (CDP, the Rosebud Sioux Tribe's headquarters) |
| Dewey-Ziebach | Timber Lake (514); Dupree (495) |
| Haakon-Jackson | Kadoka (545, on I-90); **Badlands National Park** (scenic) |
| Bennett-Oglala Lakota | Martin (933, on US-18); Wounded Knee (CDP, the 1890 massacre site and the 1973 occupation, northeast of Pine Ridge) |
| Pennington | Box Elder (11,838, Ellsworth Air Force Base, metro); Wall (697, Wall Drug, on I-90 at the Badlands' north entrance); **Mount Rushmore** (scenic) |
| Meade | Summerset (2,972, between Rapid City and Sturgis on I-90, metro); Faith (368, on US-212) |
| Lawrence-Butte-Harding | **Deadwood** (1,153, scenic); **Spearfish Canyon** (scenic); Belle Fourche (5,611, on US-85); Buffalo (348, on US-85 toward Bowman, ND) |
| Corson-Perkins | McLaughlin (567, on US-12, Standing Rock); Bison (305) |
| Custer-Fall River | Custer (1,920); **Crazy Horse Memorial**, **Custer State Park** and **Wind Cave** (scenic) |

**Town types:** farm, except the suburbs (Brandon, North Sioux City, Box Elder, Summerset: metro), the West River towns in the dry regions and Wall (desert), and the Black Hills towns (mountain).

**Scenic places** (all well known; points marked approx. are from memory):

| Place | Point | What it is |
| --- | --- | --- |
| Mount Rushmore | 43.88, -103.46 | Mount Rushmore National Memorial, above Keystone (Pennington County) |
| Crazy Horse Memorial | 43.84, -103.62 | The mountain carving north of Custer on US-16/385 (Custer County). 4.9 mi from Custer's point |
| Custer State Park | 43.76, -103.36 approx. | At the State Game Lodge on US-16A: the park's bison herd, the Needles Highway and the Wildlife Loop |
| Wind Cave | 43.56, -103.48 | Wind Cave National Park's visitor center, north of Hot Springs on US-385 |
| Badlands National Park | 43.75, -101.94 | The Ben Reifel Visitor Center at Cedar Pass by Interior (Jackson County), on the Badlands Loop between I-90 at Cactus Flat and Wall |
| Deadwood | 44.39, -103.72 (Census point) | The Black Hills gold-rush town (Wild Bill Hickok), a National Historic Landmark district |
| Spearfish Canyon | 44.36, -103.95 approx. | At Savoy (Roughlock Falls), midway up the canyon on US-14A south of Spearfish |
| De Smet | 44.39, -97.55 (Census point) | Laura Ingalls Wilder's "Little Town on the Prairie" (the Ingalls Homestead), on US-14 |

The Corn Palace is Mitchell's station (scenic, above).

**Left out:**
- **Falls Park** (Sioux Falls): 1.3 mi from Sioux Falls's point (a town there would be under 4 mi away). Sioux Falls is not marked scenic: Falls Park is a city park.
- **Jewel Cave, Bear Butte, Keystone, Hill City, Lead:** Custer-Fall River already has three scenic places, and Keystone (1.9 mi) and Hill City (6.5 mi) sit by Mount Rushmore; Lead is 3 mi from Deadwood; Bear Butte is less well known.
- **Tea** (5,600): 6.0 mi from Harrisburg and 7.5 from Sioux Falls. **Volga** (6.7 mi from Brookings), **Oacoma** (1.8 mi from Chamberlain, across the river), **Lower Brule** and **Kyle**: cut to keep about 1.7 towns per region.

### Passes (0) and bridges (20)

**No passes.** South Dakota's map has no mountain cells at all (11,561 flat, 131 hills: the Black Hills and a few buttes), so no link needs a pass, and the checker finds no mountains.

The checker gives no bridge warnings: every bridge is within 3 mi of a river or lake on the map. The map's water: Lake Oahe (from Oahe Dam to North Dakota) and Lake Francis Case are lakes; Lake Sharpe (between them) and the Missouri below Fort Randall Dam are drawn as the Missouri River.

| Bridge | Point | Source | What uses it |
| --- | --- | --- | --- |
| Missouri River bridge (Mobridge, US-12) | 45.54, -100.46 | US-12 and the old Milwaukee Road bridge west of Mobridge (well known: the town is named for it) | **Opens in Tough** Mobridge to Eagle Butte, Lemmon, Timber Lake, Dupree, Faith and Bison, and Herreid–Eagle Butte. US-12 west to McLaughlin and Lemmon |
| US-212 bridge over Lake Oahe (Forest City) | 45.00, -100.35 | US-212 crosses Lake Oahe west of Gettysburg (moderately known). The map's coarse lake has two arms on US-212's line here (1 mi and 3 mi); the point sits between them (about 2 mi from each), about 3 mi west of the real bridge | **Opens in Tough** Gettysburg–Eagle Butte: the US-212 chain |
| Missouri River bridges (Pierre–Fort Pierre) | 44.37, -100.35 | US-14/83 and the railway (the old Chicago & North Western) | Pierre–Fort Pierre, and Pierre's lines west and southwest (Philip, Mission) |
| Big Bend Dam (SD-47) | 44.05, -99.45 | SD-47 crosses the dam between Fort Thompson and Lower Brule (moderately known) | Fort Thompson's lines west (Presho, Murdo, Fort Pierre) |
| Missouri River bridge (Chamberlain, I-90) | 43.79, -99.35 | I-90 over Lake Francis Case between Chamberlain and Oacoma | I-90 (Chamberlain–Presho), Chamberlain–Fort Pierre, Chamberlain–Mission |
| Platte–Winner Bridge (SD-44) | 43.38, -99.10 approx. | SD-44 over Lake Francis Case (well known by name) | Platte–Winner |
| Fort Randall Dam (US-18/281) | 43.06, -98.55 | US-18 and US-281 cross the Missouri on the dam at Pickstown | Nothing yet: the map's lake ends at the dam, so Pickstown–Gregory passes south of it. For lines into Nebraska later |
| Discovery Bridge (US-81, Yankton) | 42.87, -97.39 | US-81 over the Missouri at Yankton (2008, beside the old Meridian Bridge) | Lines into Nebraska later; today Vermillion–Wagner |
| Vermillion–Newcastle Bridge (SD-19) | 42.74, -96.93 | SD-19 / NE-15 over the Missouri south of Vermillion (moderately known). On the map's river where it passes the town | Lines into Nebraska later |
| Big Sioux River bridges (downtown, west and south Sioux Falls) | 43.55, -96.72; 43.56, -96.77; 43.51, -96.74 | The Big Sioux loops around Sioux Falls's west and south sides, then north through downtown and Falls Park, under many street and highway bridges (well known). Three points on the map's river | Sioux Falls's lines south (Harrisburg, Lennox, the first track), west (Salem, Madison) and east (Brandon). Without the west and south points those lines each needed a new bridge |
| Big Sioux River bridge (US-14, Brookings) | 44.30, -96.87 | US-14 crosses the Big Sioux west of Brookings | Brookings–De Smet (US-14) |
| Big Sioux River bridges (Watertown) | 44.92, -97.14 | Watertown's bridges over the Big Sioux | Watertown–Milbank and Watertown–Sisseton, Watertown–Clear Lake |
| James River bridge (I-90, Mitchell) | 43.71, -97.97 | I-90 crosses the James east of Mitchell | I-90: Mitchell to Salem and Sioux Falls |
| James River bridges (Huron) | 44.36, -98.19 | Huron sits on the James | Huron's lines east and south (Sioux Falls, Brookings, Madison, Watertown, Milbank) |
| James River bridge (US-12, Aberdeen) | 45.45, -98.26 | US-12 crosses the James between Aberdeen and Groton | US-12 east: Aberdeen to Groton, Webster and Milbank |
| Cheyenne River bridge (I-90, Wasta) | 44.04, -102.45 | I-90 crosses the Cheyenne at Wasta, between Wall and Rapid City (moderately known) | I-90 (Wall–Box Elder) and Philip–Rapid City |
| White River bridge (US-83) | 43.72, -100.73 | US-83 crosses the White River north of the town of White River (the road certainly crosses it; moderately known) | US-83: Murdo–White River |
| Belle Fourche River bridge (US-85, Belle Fourche) | 44.67, -103.85 | US-85 crosses the Belle Fourche at the town | US-85: Belle Fourche–Buffalo |

**Not added:**
- **Oahe Dam** (SD-1804/1806 runs across it): no main line needs it; Pierre–Onida–Gettysburg runs on the east bank.
- **Other Cheyenne River crossings** (SD-63 and SD-73 near Eagle Butte and Philip): less well known. Philip–Eagle Butte (69 mi) is open in both modes, with one new river bridge.
- **The Missouri below Yankton toward Vermillion:** the map's river wiggles north across the straight line (two new bridges on Vermillion–Yankton, which really runs on the north bank on SD-50). Not a real crossing, so no bridge.

### How the map plays

**Counts.** Of the 1,327 pairs of places (at least one in South Dakota) within 100 mi of each other:
- 2 are blocked in Gentle (Pierre–Eagle Butte 61 mi and Onida–Faith 99 mi, across Lake Oahe away from any bridge) and 35 in Tough (33 across Lake Oahe, 2 across Lake Francis Case);
- with links up to 100 mi, every South Dakota place is in one network in both modes;
- the fewest open links any place has in Tough is 16 (Eagle Butte, across Lake Oahe from most of the state).

**The real routes, as chains,** are open in both modes:
- **I-90:** Sioux Falls–Salem–Mitchell–Plankinton–Chamberlain–Presho–Murdo–Kadoka–Wall–Box Elder–Rapid City–Summerset–Sturgis–Spearfish, then Sundance (Wyoming); Rapid City–Newcastle and Spearfish–Newcastle too.
- **I-29:** North Sioux City–Beresford–Lennox–Sioux Falls–Dell Rapids–Flandreau–Brookings–Estelline–Watertown–Sisseton, then Hankinson and Wahpeton (North Dakota, toward Fargo).
- **US-14 (and the old C&NW line, now the Rapid City, Pierre & Eastern, moderately known):** Brookings–De Smet–Huron–Miller–Highmore–Pierre–Fort Pierre–Philip–Wall.
- **US-212:** Watertown–Clark–Redfield–Faulkton–Gettysburg–Eagle Butte (over the Forest City bridge)–Faith–Belle Fourche. Belle Fourche–Broadus (Montana's corner, 93 mi) is open too.
- **US-12 (the old Milwaukee Road):** Big Stone City–Milbank–Webster–Groton–Aberdeen–Ipswich–Mobridge–McLaughlin–Lemmon, then Hettinger (North Dakota).
- **US-83:** Linton (North Dakota)–Herreid–Gettysburg–Onida–Pierre–Fort Pierre–Murdo–White River–Mission.
- **US-85:** Deadwood–Spearfish–Belle Fourche–Buffalo, then Bowman (North Dakota).
- **US-18 (moderately known):** Canton–Freeman–Parkston–Pickstown–Gregory–Winner–Mission–Martin–Pine Ridge–Hot Springs.
- **US-281:** Aberdeen–Redfield–Huron–Woonsocket–Plankinton–Wagner–Pickstown.
- **The Black Hills loop:** Rapid City–Mount Rushmore–Crazy Horse Memorial–Custer–Custer State Park–Wind Cave–Hot Springs.

**Main stations: neighbouring main stations reached directly** (other states' marked *). The same in both modes unless noted.

| Station | Reaches |
| --- | --- |
| Sioux Falls | Brookings, Madison, Harrisburg, Salem |
| Harrisburg | Vermillion, Salem, Sioux Falls |
| Salem | Yankton, Vermillion, Mitchell, Madison, Harrisburg, Sioux Falls |
| Brookings | Watertown, Madison, Sioux Falls |
| Madison | Huron, Brookings, Redfield, Watertown, Mitchell, Salem, Sioux Falls |
| Vermillion | Yankton, Harrisburg, Salem |
| Yankton | Wagner, Vermillion, Mitchell, Salem |
| Mitchell | Chamberlain, Huron, Yankton, Wagner, Madison, Salem |
| Wagner | Chamberlain, Yankton, Mitchell, Fort Pierre (a corner contact); Gentle only: Winner |
| Huron | Chamberlain, Redfield, Mitchell, Miller, Madison |
| Watertown | Brookings, Redfield, Milbank, Madison |
| Milbank | Aberdeen, Redfield, Watertown, Sisseton |
| Sisseton | Wahpeton*, Aberdeen, Milbank |
| Redfield | Huron, Aberdeen, Watertown, Milbank, Miller, Pierre, Madison |
| Aberdeen | Oakes*, Linton*, Wahpeton*, Mobridge, Redfield, Milbank, Pierre, Sisseton |
| Chamberlain | Huron, Wagner, Mitchell, Miller, Fort Pierre |
| Miller | Chamberlain, Huron, Redfield, Pierre, Fort Pierre |
| Pierre | Aberdeen, Redfield, Miller, Fort Pierre; Gentle only: Mobridge; blocked: Eagle Butte |
| Mobridge | Linton*, Aberdeen, Lemmon, Eagle Butte; Gentle only: Pierre |
| Fort Pierre | Chamberlain, Wagner, Winner, Philip, Miller, Pierre, Mission; Gentle only: Eagle Butte |
| Winner | Fort Pierre, Mission; Gentle only: Wagner |
| Mission | Pine Ridge, Winner, Philip, Fort Pierre |
| Eagle Butte | Mobridge, Lemmon, Philip, Sturgis; Gentle only: Fort Pierre; blocked: Pierre |
| Philip | Pine Ridge, Eagle Butte, Fort Pierre, Sturgis, Mission, Rapid City |
| Pine Ridge | Hot Springs, Philip, Mission, Rapid City |
| Rapid City | Pine Ridge, Spearfish, Hot Springs, Philip, Sturgis, Newcastle* |
| Sturgis | Spearfish, Lemmon, Eagle Butte, Philip, Rapid City |
| Spearfish | Baker*, Bowman*, Lemmon, Sturgis, Rapid City, Newcastle* |
| Hot Springs | Pine Ridge, Rapid City, Douglas*, Newcastle* |
| Lemmon | Bowman*, Linton*, Mandan*, Spearfish, Mobridge, Eagle Butte, Sturgis |

**Where geography doesn't allow more:**
- **Pierre–Eagle Butte** (61 mi) is blocked in both modes: the straight line crosses about 10 mi of Lake Oahe. Pierre reaches Eagle Butte by Onida and Gettysburg and the US-212 bridge, as the roads go. Fort Pierre–Eagle Butte (60 mi, four arms of the lake on the line) is Gentle only.
- **Pierre–Mobridge** (80 mi) and **Wagner–Winner** (82 mi) are Gentle only: the lines cross the lakes away from a bridge. US-83 (Pierre–Onida–Gettysburg–Herreid or Mobridge) and the Platte–Winner Bridge (Platte–Winner) are open in both.
- **Winner** reaches only two neighbouring main stations in Tough (Fort Pierre, Mission): its other neighbour is Wagner, across Lake Francis Case. Platte, Wagner's town at the bridge, links to it.

**Neighbours.** I compared the 174 pairs of North Dakota, Montana and Wyoming places within 300 mi of each other whose line passes over South Dakota, with this pack's bridges and without them: none changes. The cross-border links the brief asks for are open in both modes: Spearfish–Sundance (I-90) and Rapid City/Spearfish/Hot Springs–Newcastle (Wyoming); Buffalo–Bowman and Spearfish–Bowman (US-85); Lemmon–Hettinger and Lemmon–Bowman (US-12); Herreid–Linton and Mobridge–Linton (US-83); Sisseton–Hankinson and Sisseton–Wahpeton (I-29 toward Fargo); Belle Fourche–Broadus and Buffalo–Ekalaka and Baker (Montana's corner, US-212).

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Sioux Falls & the Southeast | `southeast` | Sioux Falls, Harrisburg, Salem, Brookings, Madison, Vermillion, Yankton | 50 passengers; own 5 counties; 10 crates of produce |
| The James River & the Glacial Lakes | `east` | Mitchell, Wagner, Huron, Watertown, Milbank, Sisseton, Redfield, Aberdeen | 140 passengers; connect FSD–ABR (by I-29 and Watertown or by Huron and Redfield; open in both modes); own 10 counties |
| Pierre & the Missouri | `missouri` | Chamberlain, Miller, Pierre, Mobridge, Fort Pierre, Winner, Mission, Eagle Butte | 280 passengers; connect FSD–PIR (by Huron and US-14, or I-90 and Chamberlain; open in both modes); one high-speed train |
| The Badlands & the Black Hills | `west` | Philip, Pine Ridge, Rapid City, Sturgis, Spearfish, Hot Springs, Lemmon | 450 passengers; connect FSD–RAP (I-90 across the state, over the Chamberlain bridge; open in both modes); 30 trucks (from the desert and mountain stations and towns: the Badlands, the Black Hills, Lemmon) |

- **Targets** follow North Dakota's, Wyoming's and Montana's four levels.
- Each level's regions touch the levels before it (Davison-Hanson-Hutchinson touches McCook-Turner; Brule-Aurora-Buffalo and Hand-Hyde touch Beadle-Jerauld-Sanborn; Haakon-Jackson touches Jones-Lyman-Stanley).
- **No container goal:** South Dakota has no port.

### Biomes

- **`wooded`** (trees on the hills: the Black Hills' ponderosa pine): Pennington, Lawrence-Butte-Harding, Custer-Fall River and Meade, as Wyoming's Crook-Weston. On the map the trees fall on the Black Hills' hill cells; the plains of Harding, Butte, Fall River and Meade stay grass.
- **`dry`** (the Badlands and dry short-grass rangeland): Haakon-Jackson, Bennett-Oglala Lakota (the Badlands' North Unit edge and South Unit) and Corson-Perkins (next to North Dakota's dry Adams-Bowman-Slope and Montana's Carter-Fallon).
- **No `forest`.**
- **Not listed (farmland and grassland):** East River's farms, and the rest of West River's mixed-grass rangeland (Dewey-Ziebach, Jones-Lyman-Stanley, Mellette-Todd, Gregory-Tripp). North Dakota left its grassland (Grant-Hettinger, Morton-Sioux) unlisted the same way. Dewey-Ziebach could be dry: a judgment call.

### Checks

- **`node tools/check-pack.js SD`:** `SD: passed (30 stations, 60 towns, 0 city maps, 0 passes, 20 bridges), 0 errors, 1 warnings`.
  - The warning: `PIR and FPR are only 3.0 miles apart`. Pierre and Fort Pierre are twin towns facing each other across the Missouri, joined by the US-14/83 bridges (as Bismarck and Mandan, about 5 mi apart in North Dakota's pack). Each is its region's biggest place, and the river between them is the line between the two regions, so both stay.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js SD`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is FSD, HBG and SLEM. The test laid Sioux Falls–Harrisburg (9 mi, 1 train) and bought Bon Homme-Yankton (YKN). 19 passengers arrived in the week.
  - Levels mode starts at level 1.
- **Screenshots** (`test-out/SD/`: arcade light, classic light, levels):
  - Sioux Falls, Brandon, Harrisburg and Canton sit by the Big Sioux in the southeast corner, Salem to the west and Yankton on the Missouri.
  - Lake Oahe, the Missouri (Lake Sharpe) and Lake Francis Case cross the middle of the state.
  - The Black Hills' trees are in the west, and the tan dry regions are the Badlands and the northwest.

### For the main agent

1. **Harrisburg is typed farm** so the game's first-track hint (Sioux Falls–Harrisburg) has riders. If the hint learns to prefer two types, Harrisburg could be metro.
2. **Airports:** Sioux Falls Regional only. Rapid City Regional is below the 1-million bar (from memory); add `airport: "Rapid City Regional"` to RAP if the bar is lower.
3. **The Forest City bridge point** sits about 3 mi west of the real bridge, between the map's two arms of Lake Oahe on US-212's line.
