# New Mexico (NM) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (22 regions, no `names`). The map and raw facts were rebuilt, and the pack (phase 2, below) is built on it.

Populations: `packs/NM/raw/counties.json` and `packs/NM/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 2,117,525). Every group is connected through `neighbors`, and I checked the shared border lengths on the rings in `map.js` (given in km below). Roads, rivers, passes and railways named here are well known unless marked "(moderately known)".

### Recommended (33 → 22 regions)

```
merge: [["Colfax", "Union"], ["Harding", "Quay"], ["Mora", "San Miguel"], ["Rio Arriba", "Taos"], ["Guadalupe", "Torrance"], ["Curry", "De Baca", "Roosevelt"], ["Catron", "Sierra", "Socorro"], ["Grant", "Hidalgo", "Luna"]]
names: {}
```

No names are needed: the automatic ones ("Colfax-Union County", "Curry-De Baca-Roosevelt County", "Grant-Hidalgo-Luna County" and so on) read well and clash with nothing in the game.

Alone, over 50k (11): **Bernalillo** (Albuquerque 564,584), **Doña Ana** (Las Cruces 111,382), **Santa Fe** (Santa Fe 87,505), **Sandoval** (Rio Rancho 104,044), **San Juan** (Farmington 46,613), **Valencia** (Los Lunas 17,250; Belen 7,363 is the railway town, a phase 2 choice), **Lea** (Hobbs 40,521), **McKinley** (Gallup 21,909), **Otero** (Alamogordo 30,927), **Chaves** (Roswell 48,441), **Eddy** (Carlsbad 32,237).

Alone, under 50k (the exceptions):
- **Los Alamos** 19,420. The town sits on the Pajarito Plateau. NM-502 climbs to it from the Rio Grande at Otowi and Pojoaque (Santa Fe County), and NM-4 crosses the Jemez Mountains to Sandoval (moderately known). Its only small neighbour, Rio Arriba, touches it for just 4 km. Joining Santa Fe (155k) would take its station, as Garfield would take Aspen's in Colorado (precedent: Pitkin alone). Note: its towns are CDPs, so places.json has no population for the station (Los Alamos).
- **Lincoln** 20,266, Ruidoso (7,681), Capitan, Carrizozo: the Sacramento Mountains. The valleys out of Ruidoso lead to big counties: US-70 through Mescalero to Tularosa and Alamogordo (Otero), and the Hondo valley (US-70/380) to Roswell (Chaves). Its small neighbours lie across empty country: US-380 over the Jornada del Muerto and the Malpais to Socorro, and the Corona plains to Torrance, Guadalupe and De Baca.
- **Cibola** 27,175, Grants (9,154), Milan, and the Laguna and Acoma pueblos, on I-40 and the BNSF Transcon. Its long borders are with big counties: McKinley (206 km, Gallup), Valencia, Bernalillo and Sandoval. Its small neighbours lie across El Malpais and pueblo land. Socorro has no through road to it. Catron's roads run to Socorro (US-60, NM-12) and Silver City (US-180); only minor roads (NM-36 by Fence Lake) reach Grants.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Colfax + Union (87 km) | The high plains east of Raton Pass: US-64/87 from Raton by Capulin Volcano and Folsom to Clayton. Colfax also holds I-25 and the Southwest Chief south through Springer (both well known) | Raton (6,046) | 16,466 |
| Harding + Quay (62 km) | The Canadian River country: Ute Lake at Logan, then NM-39 to Mosquero and Roy (moderately known). Tucumcari is on I-40 and the Union Pacific's Tucumcari line | Tucumcari (5,279) | 9,396 |
| Mora + San Miguel (126 km) | I-25 and the Southwest Chief north from Las Vegas through Watrous and Wagon Mound. NM-518 runs from Las Vegas up to Mora (moderately known) | Las Vegas (13,216) | 31,386 |
| Rio Arriba + Taos (142 km) | The upper Rio Grande: the gorge and NM-68 from Taos down to Española. US-285 runs by Ojo Caliente and Tres Piedras, and US-64 by Chama and Tierra Amarilla (moderately known) | Española (10,543) | 74,850 |
| Guadalupe + Torrance (79 km) | The plains east of the Manzanos: I-40 from Moriarty by Clines Corners to Santa Rosa, plus US-60 and the Transcon from Mountainair by Willard and Encino to Vaughn (moderately known). This is Colorado's Elbert + Lincoln case (exurbs at a metro's edge joined to the plains behind) | Santa Rosa (2,857) | 19,502 |
| Curry + De Baca + Roosevelt (98, 58 km) | Clovis and Portales on US-70. US-60/84 and the Transcon run from Fort Sumner through Taiban and Melrose to Clovis, crossing Roosevelt's north tip (checked on the map) | Clovis (38,551) | 69,309 |
| Catron + Sierra + Socorro (123, 124 km) | I-25 and the Rio Grande from Socorro to Elephant Butte and T or C. US-60 runs west by Magdalena, Datil, Pie Town and Quemado to Arizona. The VLA's Plains of San Agustin lie in Socorro and Catron. Socorro is the hub | Socorro (8,703) | 31,744 |
| Grant + Hidalgo + Luna (180, 142 km) | The southwest corner. I-10 and the Sunset Route (Amtrak's Sunset Limited) run from Deming through Grant's southern tail to Lordsburg. US-180 runs from Deming up the Mimbres side to Silver City, and NM-90 from Lordsburg to Silver City (moderately known) | Deming (14,771) | 57,796 |

Station rule: the largest place in places.json, as in Colorado. For Guadalupe + Torrance, 77% of the people live in Torrance around Moriarty (1,943) and Estancia (1,254). Moriarty would be the station closer to them if phase 2 prefers that.

The corridors stay clean chains:
- **I-25:** Colorado, Colfax-Union, Mora-San Miguel, Santa Fe, Sandoval, Bernalillo, Valencia, Catron-Sierra-Socorro, Doña Ana, then Texas.
- **I-40:** Texas, Harding-Quay, Guadalupe-Torrance, (Santa Fe at Edgewood), Bernalillo, Cibola, McKinley, then Arizona.
- **Southwest Chief:** Colorado, Colfax-Union (Raton), Mora-San Miguel (Las Vegas), Santa Fe (Lamy), Bernalillo, then west to Cibola (Grants) and McKinley (Gallup).
- **BNSF Transcon:** Texas, Curry-De Baca-Roosevelt (Clovis, Fort Sumner), Guadalupe-Torrance (Vaughn, Mountainair), Valencia (Belen), Cibola, McKinley.
- **I-10 / Sunset Route:** Arizona, Grant-Hidalgo-Luna, Doña Ana, then Texas.
- **US-70:** Grant-Hidalgo-Luna, Doña Ana, Otero, Lincoln, Chaves, Curry-De Baca-Roosevelt.
- **US-285:** Colorado, Rio Arriba-Taos, Santa Fe, Guadalupe-Torrance, Chaves, Eddy, then Texas.
- **Rail Runner:** Santa Fe, Sandoval, Bernalillo, Valencia, all alone.

Rejected:
- Hidalgo + Luna: they touch only for 9 km at the Mexican border. I-10 between Deming and Lordsburg crosses about 30 km of Grant, and Hachita is in Grant too.
- Torrance alone, with `["De Baca", "Guadalupe", "Quay"]`, `["Curry", "Roosevelt"]` and `["Colfax", "Harding", "Union"]`: the same count, but a fourth exception. The Estancia Valley lies open to the plains on its east.
- `["Guadalupe", "Quay", "Torrance"]` with `["Colfax", "Harding", "Union"]` (21 regions): the whole of I-40 / Route 66 in one region, but Tucumcari would be the station for people about 175 miles away in Moriarty.
- `["Curry", "Quay", "Roosevelt"]` with `["De Baca", "Guadalupe", "Torrance"]`: Tucumcari loses its station to Clovis.
- Colfax + Taos (the Enchanted Circle on US-64): Palo Flechado Pass and Cimarron Canyon cross the Sangre de Cristos between them, and Rio Arriba would then be left alone at 40k.
- Mora + Taos (NM-518 over the mountains): the Mora valley's town is Las Vegas.
- Los Alamos + Rio Arriba (only a 4 km contact). Los Alamos + Santa Fe (it loses its station).
- `["Catron", "Cibola"]` with `["Sierra", "Socorro"]`: the same count and no Cibola exception, but it cuts Catron's US-60 country and the VLA plain off from Socorro, along a minor road.
- Cibola + McKinley (Grants loses its station to Gallup). Lincoln + Otero or + Chaves (Ruidoso loses its station). Lincoln + Socorro (US-380 crosses about 70 empty miles).
- Grant + Sierra: Emory Pass over the Black Range.

### Alternative (23 regions)

Replace `["Grant", "Hidalgo", "Luna"]` and `["Catron", "Sierra", "Socorro"]` with `["Catron", "Grant", "Hidalgo"]` (35,947; Silver City 9,709), Luna alone (25,426; Deming) and `["Sierra", "Socorro"]` (28,167; Socorro).
- Pro: Silver City keeps a station. US-180 joins the Gila country (Glenwood, Reserve) to it, and the Socorro region is a clean stretch of I-25.
- Con: one more region and a fourth exception (Luna is an open basin with no wall). Catron's US-60 towns and the VLA are cut off from Socorro.

### Map and data check

1. **The map looks right.** All 33 counties are one piece each and every label is inside its county. County areas add up to 121,594 sq mi, which matches New Mexico's total. All 527 places lie inside their tagged county (none off the map). Names with ñ read correctly (Española, Doña Ana, Peñasco, Cañoncito).
2. **Neighbours agree both ways** with the `co-` regions (Alamosa-Conejos-Costilla, Archuleta-La Plata-San Juan, Baca-Kiowa-Prowers, Dolores-Montezuma, Huerfano-Las Animas) and the `az-` regions (Apache, Cochise-Santa Cruz, Graham-Greenlee). None is missing. There is no `ut-` neighbour, which is right: San Juan meets Utah only at the Four Corners point. The 13 "coast" lines are the Texas and Oklahoma line on the east, plus the whole south line (Mexico, and Texas along 32°N) as one piece.
3. **Short contacts:** Los Alamos–Rio Arriba 4 km, Hidalgo–Luna 9 km (at the Mexican border only), Mora–Santa Fe 12 km, Lincoln–Sierra 12 km, Cibola–Sandoval 17 km, Quay–Roosevelt 19 km, Bernalillo–Santa Fe 19 km. No merge depends on any of them: Grant links Hidalgo and Luna.
4. **Places:** only 105 of the 527 have populations (incorporated places), so county seats like Mora, Tierra Amarilla and Los Alamos have none. Edgewood (6,181), the biggest town near Moriarty, is in Santa Fe County, which is right. Española straddles the Rio Arriba–Santa Fe line and is tagged Rio Arriba, which is also right. Possibly confusing names: Santa Clara (1,635) is the village by Silver City (Grant), not Santa Clara Pueblo (Rio Arriba). Valencia is also a CDP near Glorieta in Santa Fe County. Ten CDP names are used twice in different counties (San Ysidro, Placitas, Torreon, Valencia, Mountain View, La Cueva, San Antonito, San Jose, La Madera, Arroyo Hondo); these are real, separate places.

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/NM/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Station and town coordinates are `places.json` points rounded to 2 decimals, except where noted.
- **Facts added by hand** (passes, bridges, scenic places, the airport, roads and railways) are well known unless marked "moderately known". A point marked "approx." is one I gave from memory, within about a mile or two.
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain. To test a pass, it was taken out of the pack (then `NR.packsChanged()`), and the pairs that used it were tested again.

### Start

`start: ["nm-bernalillo", "nm-valencia", "nm-santa-fe"]`: Albuquerque, Los Lunas and Santa Fe. This is the Rail Runner's line from the Rio Grande valley's farms to the capital. Valencia and Santa Fe both touch Bernalillo.
- **Types:** Albuquerque and Santa Fe are metro and Los Lunas is farm, so there are two types of place.
- **First track:** Albuquerque–Los Lunas, the nearest pair (about 20 mi), metro to farm. The pack test laid it (22 mi, 1 train), and 6–7 passengers arrived in the week (two runs).
- **Why not Sandoval (Rio Rancho):** Albuquerque–Rio Rancho (15 mi) would be the first track, and both are metro suburbs, so it would carry nobody. Colorado had the same problem and typed Lakewood mountain instead. Here a farm county touches Albuquerque, so no type has to be stretched. Rio Rancho is the natural first purchase.
- **Costs:** in Tough, Albuquerque–Santa Fe tunnels 8 mi under the Sandias' north end (see "How the map plays"). The first track crosses the map's Rio Grande twice (the river wiggles), once at the Isleta bridge.

### Main stations (22)

Every station is at its region's biggest place in `places.json`. Los Lunas over Belen is the coordinator's call left to me (below). Los Alamos has no Census population for its town: its station is at the townsite, with the region's population as always.

| Station | Region | Type | Size | Notes |
| --- | --- | --- | --- | --- |
| Albuquerque (ABQ) | Bernalillo 676k | metro | 3 | Airport: Albuquerque International Sunport, New Mexico's one big airport. Santa Fe Regional and Las Cruces's are small, and El Paso's is in Texas |
| Los Lunas (LLN) | Valencia 76k | farm | 2 | The Rio Grande valley's farms (Bosque Farms, Peralta) |
| Santa Fe (SFE) | Santa Fe 155k | metro | 2 | The capital. Scenic: the Plaza, the Palace of the Governors, Canyon Road |
| Rio Rancho (RRN) | Sandoval 149k | metro | 2 | The Census point is kept: the city has no downtown |
| Los Alamos (LAMO) | Los Alamos 19k | mountain | 1 | The Pajarito Plateau. Scenic: the Manhattan Project National Historical Park and the Bradbury Science Museum |
| Española (ESPA) | Rio Arriba-Taos 75k | mountain | 2 | The region is the Sangre de Cristo, the Tusas and the upper Rio Grande (Taos, Questa, Chama) |
| Santa Rosa (SRSA) | Guadalupe-Torrance 20k | farm | 1 | The plains and the Estancia Valley's ranches and pinto beans |
| Grants (GNT) | Cibola 27k | desert | 1 | El Malpais, the Acoma mesas, the uranium belt |
| Gallup (GUP) | McKinley 73k | desert | 2 | The Navajo and Zuni country's trading town |
| Farmington (FMN) | San Juan 122k | desert | 2 | The Four Corners (as Colorado's Cortez) |
| Las Vegas (LVG) | Mora-San Miguel 31k | mountain | 1 | Where the Sangre de Cristo meets the plains |
| Raton (RTN) | Colfax-Union 16k | mountain | 1 | At the foot of Raton Pass (as Trinidad on Colorado's side) |
| Tucumcari (TCC) | Harding-Quay 9k | farm | 1 | The plains' ranches (as Colorado's plains stations) |
| Clovis (CVN) | Curry-De Baca-Roosevelt 69k | farm | 2 | Peanuts (Portales), wheat, dairies, cattle |
| Socorro (SOC) | Catron-Sierra-Socorro 32k | desert | 1 | The Rio Grande's desert valley, Bosque del Apache, the VLA's plain |
| Las Cruces (LCR) | Doña Ana 220k | metro | 2 | New Mexico's second city |
| Deming (DMN) | Grant-Hidalgo-Luna 58k | desert | 1 | The Chihuahuan Desert. Size 1 at 58k, as Colorado's Vail (56k) |
| Alamogordo (ALMO) | Otero 68k | desert | 2 | The Tularosa Basin and White Sands |
| Ruidoso (RUI) | Lincoln 20k | mountain | 1 | The Sacramento Mountains' resort (Ski Apache, Ruidoso Downs) |
| Roswell (ROW) | Chaves 65k | farm | 2 | The Pecos valley's irrigated farms and dairies (as La Junta on the Arkansas) |
| Carlsbad (CBAD) | Eddy 62k | desert | 2 | The Chihuahuan Desert (potash, oil, the caverns) |
| Hobbs (HOB) | Lea 74k | desert | 2 | The Permian Basin's oil field |

**Overall:** 4 metro, 5 farm, 5 mountain, 8 desert. Sizes follow Colorado's: 60k or more is size 2, the rest size 1, and Albuquerque is size 3. Ids are unique across every pack (checked; `ALM`, `ESP`, `CLV`, `LAM`, `SRO`, `BLN`, `FSM` and others were already taken).

**Los Lunas, not Belen (the coordinator's question).**
- For Los Lunas: it is the biggest place (17,250 to Belen's 7,363) and the county seat, and it is nearer Albuquerque, so the start's first track is short.
- For Belen: it is the railway town. The BNSF's Transcon (through Abo Canyon) meets its line to El Paso there, and the Rail Runner ends there.
- **The choice:** Los Lunas by the rule. Belen is a town, 11 mi south, so the junction is still on the map.

**Points moved from the Census point** (the Census point is the middle of the city limits):

| Place | Census point | Pack point | Why |
| --- | --- | --- | --- |
| Albuquerque | 35.10, -106.65 | 35.08, -106.65 | The Alvarado Transportation Center downtown (Amtrak and the Rail Runner), 1.7 mi south |
| Santa Fe | 35.66, -105.98 | 35.69, -105.94 | The Plaza; the Census point is 3 mi southwest |
| Los Lunas | 34.80, -106.79 | 34.81, -106.73 | The village centre (Main Street, NM-6); the Census point is 3.4 mi west, on the mesa |
| Farmington | 36.75, -108.18 | 36.73, -108.21 | Downtown (Main Street); 2.4 mi |
| Clovis | 34.44, -103.19 | 34.40, -103.21 | Downtown (Main Street, the BNSF station); 2.8 mi |
| Hobbs | 32.73, -103.16 | 32.70, -103.14 | Downtown; 2.3 mi |
| Los Alamos | 35.89, -106.29 (the CDP) | 35.88, -106.30 | The townsite (Fuller Lodge); 1 mi |
| Belen (town) | 34.77, -106.81 | 34.66, -106.78 | Downtown (the Harvey House, the BNSF yard); the Census point is 7.6 mi north |
| Truth or Consequences (town) | 33.24, -107.28 | 33.13, -107.25 | Downtown (the hot springs, the I-25 bridge); 7.6 mi |
| Carrizozo (town) | 33.64, -105.84 | 33.64, -105.88 | The US-54 and US-380 crossing; 2.2 mi |

Las Cruces (1.9 mi), Roswell, Carlsbad, Gallup, Raton, Alamogordo and the rest keep their Census points: each is within about 2.5 mi of downtown.

### Towns (56: 44 towns and 12 scenic places)

About 2.5 per region (Colorado has 2.1), spread out: no two places are under 4 mi apart (the checker gives no warnings). Most are the next-biggest incorporated places. A few are Census CDPs (no population in raw/), chosen for what they are: Lamy, Laguna, Zuni Pueblo, Thoreau, Mora, Chaco and the scenic places.

**Railway and road towns:**
- **Lamy:** Santa Fe's Amtrak stop on the Southwest Chief.
- **Belen:** the BNSF's junction and the Rail Runner's south end.
- **Vaughn:** where the BNSF's Transcon crosses the Union Pacific's Tucumcari line (moderately known).
- **Springer, Wagon Mound:** I-25 and the Southwest Chief's line.
- **Chama:** the Cumbres & Toltec's New Mexico end, opposite Colorado's Antonito.
- **Fort Sumner:** the Transcon and the Pecos.
- **Thoreau, Laguna:** I-40 and the Transcon.
- **Carrizozo:** US-54 and US-380.
- **Hatch:** the chile capital (well known).
- **Lordsburg, Columbus:** Lordsburg is on I-10; Columbus is at the border (Pancho Villa's raid).

**Scenic places**, each at its landmark or visitor center (points approx.):

| Place | Point | What |
| --- | --- | --- |
| Sandia Peak Tramway | 35.19, -106.48 | The aerial tramway up the Sandias, at its base |
| Bandelier | 35.78, -106.27 | Bandelier National Monument's cliff dwellings in Frijoles Canyon, at the visitor center (in Los Alamos County on this map) |
| Acoma Pueblo | 34.90, -107.58 | Sky City, the pueblo on its mesa |
| Shiprock | 36.69, -108.84 | The volcanic neck on the Navajo Nation, at the rock (the town of Shiprock is 10 mi northeast) |
| Chaco Canyon | 36.06, -107.96 | Chaco Culture National Historical Park, at Pueblo Bonito |
| Taos | 36.39, -105.58 (Census) | The town and art colony; Taos Pueblo (a World Heritage Site) is 3 mi north, too close to be a second place |
| Ghost Ranch | 36.33, -106.47 | The red cliffs by Abiquiu that Georgia O'Keeffe painted |
| Capulin Volcano | 36.78, -103.97 | The cinder cone (a national monument), at the visitor center |
| Very Large Array | 34.08, -107.62 | The radio telescope on the Plains of San Agustin |
| Gila Cliff Dwellings | 33.23, -108.27 | The national monument in the Gila Wilderness (in Catron on this map, just north of Grant's line) |
| White Sands | 32.78, -106.17 | White Sands National Park, at the visitor center on US-70 |
| Carlsbad Caverns | 32.18, -104.44 | The national park's caves, at the visitor center |

Santa Fe and Los Alamos are scenic main stations. Roswell is not marked scenic: the UFO museum is real, but Roswell is a farm town first.

**Left out:**
- **Too close to another place:** White Rock (4.0 mi from Bandelier), Rio Communities and Bosque Farms (under 4 mi from Belen or Los Lunas), Mesilla (3.5 mi from Las Cruces), Ruidoso Downs, Milan.
- **Not famous enough beyond the state:** El Morro, Pecos National Historical Park (2 mi from Pecos), Salinas Pueblo Missions, Valles Caldera, Tent Rocks and Spaceport America.

### Passes (7) and bridges (22)

The checker gives no warnings: every pass has mountains within ~7 mi, and every bridge is within 3 mi of a river on the map. **Most of New Mexico is open ground on this map.** Only the Sangre de Cristo, the Jemez, the Sandias and Manzanos, the Sacramentos, the Organs, the Black Range and the Mogollon country have mountain cells, so few passes are needed.

**How the counts were made:** "used" counts pairs of places within 100 mi (New Mexico's places, and the neighbours' places near New Mexico) whose line goes over the pass. "Critical" pairs are blocked without it. The counts are given as Gentle / Tough.

| Pass | Point | Source | Used | What uses it |
| --- | --- | --- | --- | --- |
| Tijeras Canyon | 35.08, -106.40 approx. | I-40 (Route 66) between the Sandias and the Manzanos | 29 / 43 | Albuquerque–Edgewood, and in Tough Albuquerque–Tijeras and –Lamy; never critical. **Leniency:** in Gentle it also takes Albuquerque–Santa Fe, whose straight line clips the Sandias' north end (I-25 really goes round by Bernalillo) |
| Glorieta Pass | 35.58, -105.77 approx. | I-25 and the BNSF (Amtrak's Southwest Chief) from Santa Fe to Las Vegas; the Civil War battle | 27 / 25 | Santa Fe–Las Vegas, Santa Fe–Pecos. Critical in Tough for 7 lines across the Sangre de Cristo's south end, such as Lamy–Taos and Bernalillo–Mora |
| Rio Grande Gorge | 36.27, -105.79 approx. (Pilar) | NM-68, the river road from Española (Velarde, Embudo) up to Taos | 5 / 7 | Santa Fe–Taos and Rio Rancho–Taos in Tough |
| Palo Flechado Pass | 36.39, -105.37 approx. | US-64 from Taos to Angel Fire (moderately known) | 32 / 26 | Taos–Angel Fire; critical in Tough for 6, such as Santa Fe–Angel Fire and Las Vegas–Questa |
| Cimarron Canyon | 36.53, -105.17 approx. | US-64 from Eagle Nest down the Cimarron to Cimarron (a state park; moderately known) | 12 / 9 | Raton–Taos, Questa–Springer; critical in Tough for Questa–Roy |
| San Augustin Pass | 32.43, -106.56 | US-70 over the Organ Mountains, Las Cruces to White Sands | 0 / 3 | Las Cruces–Alamogordo, –Cloudcroft and –White Sands in Tough. In Gentle, the Organs are too thin to count as mountains |
| Emory Pass | 32.91, -107.76 | NM-152 over the Black Range, from the Mimbres to Hillsboro (moderately known) | 1 / 2 | Truth or Consequences–Silver City, Gila Cliff Dwellings–Hatch |
| (Raton Pass, Colorado's) | 36.99, -104.49 | I-25 and the BNSF | 0 / 5 | Raton–Trinidad, Raton–Pueblo in Tough |
| (Cumbres Pass, Colorado's) | 37.02, -106.45 | The Cumbres & Toltec | 6 / 11 | Chama–Antonito and Chama to the San Luis Valley; critical in Tough for Chama–South Fork and Questa–Pagosa Springs |

**Not added:**
- **La Bajada Hill and Apache Canyon:** the map has only hills there (the checker would warn), and no line needs them. Glorieta Pass covers I-25's climb.
- **Abo Canyon** (the Transcon and US-60, Mountainair to Belen; moderately known): there are no mountain cells on the line, and Belen–Mountainair is open.
- **The Sacramentos** (US-70 by Mescalero, US-82 by High Rolls to Cloudcroft): Alamogordo–Ruidoso and Alamogordo–Cloudcroft are open in both modes (3 mi tunnels in Tough).
- **The Jemez** (NM-4, NM-502): Los Alamos–Jemez Springs is open (short tunnels in Tough).
- **Bobcat Pass, US Hill and the passes over the Mogollon and San Mateo mountains:** no line needs them.

**Bridges.** River bridges sit on the map's river where the town's lines cross it. A line that crosses the river within 2 mi of one pays the real bridge's price. They change prices only: no river or lake blocks a line here. Lines that use each (the same in both modes):

| Bridge | Point | Uses | Note |
| --- | --- | --- | --- |
| Rio Grande Gorge Bridge | 36.48, -105.73 | 2 | US-64, 650 ft over the gorge west of Taos |
| Rio Grande: Española, Bernalillo (US-550), Albuquerque (Central Avenue and I-40), Los Lunas (NM-6), Belen, Truth or Consequences, Hatch | 36.00, -106.08; 35.32, -106.57; 35.08, -106.68; 34.81, -106.72; 34.66, -106.75; 33.13, -107.25; 32.67, -107.16 | 11, 10, 10, 11, 7, 6, 6 | |
| Otowi Bridge | 35.87, -106.14 | 4 | NM-502 to Los Alamos |
| Paseo del Norte Bridge | 35.18, -106.67 | 5 | Albuquerque's north side (moderately known). It takes Albuquerque–Rio Rancho |
| Rio Grande bridge (Isleta) | 34.89, -106.71 approx. | 4 | The BNSF (Southwest Chief, Rail Runner) at Isleta Pueblo (moderately known). It takes one of the start track's two crossings |
| Rio Grande bridge (Las Cruces) | 32.32, -106.84 | 3 | US-70 (Picacho Avenue); takes Las Cruces–Deming |
| Rio Chama bridge (Abiquiu) | 36.22, -106.30 | 2 | US-84 (moderately known) |
| Pecos: Santa Rosa, Fort Sumner, Artesia (US-82) | 34.95, -104.66; 34.47, -104.23; 32.85, -104.30 | 3, 3, 2 | |
| Pecos River bridge (Carlsbad) | 32.41, -104.15 | 3 | US-62/180. The map's Pecos runs about 4 mi east of the real river here, so the bridge sits on the map's river where Carlsbad's lines to Hobbs and Eunice cross it (as Colorado did at Glenwood Springs) |
| San Juan: Farmington, Bloomfield, Shiprock (US-491) | 36.74, -108.20; 36.72, -107.98; 36.79, -108.67 | 15, 8, 1 | |
| Animas River bridge (Aztec) | 36.83, -108.00 | 7 | |
| Canadian River bridge (Logan) | 35.37, -103.41 | 1 | US-54 below Ute Dam |

**Removed after testing:**
- **The US-380 bridge at San Antonio:** no line crosses near it. Socorro's lines east cross the map's river 7 mi further north.
- **The Pecos bridge east of Roswell:** Roswell's lines to Hobbs and Clovis cross 7–8 mi south and north of it.
- **No bridge at Socorro itself:** I know of no well-known one. Its lines east pay for a new river bridge.

**Lakes:** Elephant Butte, Caballo, Navajo, Conchas, Ute, Brantley and Red Bluff block nothing. No line between places crosses more than a lake's edge, or the track follows the shore.

### How the map plays

**Counts.** Of the 852 pairs of New Mexico places within 100 mi of each other or of a neighbouring state's place:
- **Gentle:** 1 is blocked (Questa–Walsenburg, across the Sangre de Cristo).
- **Tough:** 16 are blocked. All cross the Sangre de Cristo away from a road (Santa Fe or Española to Mora, Las Vegas or Springer), or cross the San Juans to Lake City and Creede, or cross the Culebra Range to Colorado's La Veta and San Luis.
- **One network:** with links up to 100 mi, every New Mexico place is in one network in both modes.
- **Links:** every place has at least 5 open links within 100 mi. The fewest are Clovis (5), Jal (6), and Columbus and Eunice (7), all by the Texas and Mexico lines.

**The real routes, as chains,** are open in both modes:
- **I-25:** Trinidad*–Raton–Springer–Wagon Mound–Las Vegas–Pecos–Santa Fe–Bernalillo–Albuquerque–Los Lunas–Belen–Socorro–Truth or Consequences–Hatch–Las Cruces–Sunland Park.
- **I-40:** Window Rock*–Gallup–Thoreau–Grants–Laguna–Albuquerque–Tijeras–Moriarty–Santa Rosa–Tucumcari (also Holbrook*–Gallup).
- **I-10:** Willcox*–Lordsburg–Deming–Las Cruces.
- **The Transcon:** Clovis–Fort Sumner–Vaughn–Mountainair–Belen–Grants–Gallup.
- **US-70:** Lordsburg–Deming–Las Cruces–White Sands–Alamogordo–Tularosa–Ruidoso–Roswell–Portales–Clovis.
- **US-285:** Antonito*–Española–Santa Fe–Vaughn–Roswell–Artesia–Carlsbad.
- **US-54:** Tucumcari–Santa Rosa–Vaughn–Carrizozo–Tularosa–Alamogordo.
- **US-380:** Socorro–Carrizozo–Capitan–Roswell.
- **US-550:** Albuquerque–Bernalillo–Cuba–Bloomfield–Aztec–Durango*.
- **US-491:** Gallup–Shiprock–Farmington–Cortez*.
- **US-64:** Farmington–Bloomfield–Chama–Taos–Angel Fire–Raton–Clayton.
- **The Cumbres & Toltec:** Chama–Antonito*.
- **Others:** US-180 (Deming–Silver City–Reserve), US-60 (Socorro–Magdalena–the VLA), and Lea County's Hobbs–Lovington–Roswell and Hobbs–Eunice–Jal–Carlsbad.

(* another state's place.)

**Main stations: neighbouring main stations reached directly** (other states' marked *). The same in both modes unless noted.

| Station | Reaches |
| --- | --- |
| Albuquerque | Grants, Santa Rosa, Rio Rancho, Santa Fe, Los Lunas |
| Los Lunas | Albuquerque, Socorro, Grants, Santa Rosa |
| Santa Fe | Albuquerque, Santa Rosa, Los Alamos, Las Vegas, Española, Rio Rancho |
| Rio Rancho | Albuquerque, Grants, Los Alamos, Gallup, Española, Farmington, Santa Fe |
| Los Alamos | Española, Rio Rancho, Santa Fe |
| Española | Alamosa*, Durango*, Raton, Los Alamos, Farmington, Rio Rancho, Santa Fe; Gentle only: Las Vegas |
| Santa Rosa | Albuquerque, Socorro, Clovis, Tucumcari, Ruidoso, Las Vegas, Santa Fe, Los Lunas |
| Grants | Chinle*, Albuquerque, Socorro, Gallup, Rio Rancho, Los Lunas |
| Gallup | Chinle*, Grants, Farmington, Rio Rancho |
| Farmington | Chinle*, Durango*, Cortez*, Gallup, Española, Rio Rancho |
| Las Vegas | Raton, Santa Rosa, Tucumcari, Santa Fe; Gentle only: Española |
| Raton | Alamosa*, Lamar*, Trinidad*, Tucumcari, Las Vegas, Española |
| Tucumcari | Raton, Clovis, Santa Rosa, Las Vegas |
| Clovis | Roswell, Santa Rosa, Tucumcari, Hobbs, Ruidoso |
| Socorro | Chinle*, Safford*, Grants, Las Cruces, Deming, Santa Rosa, Ruidoso, Alamogordo, Los Lunas |
| Las Cruces | Socorro, Deming, Alamogordo |
| Deming | Safford*, Socorro, Las Cruces; Gentle only: Sierra Vista* |
| Alamogordo | Socorro, Roswell, Las Cruces, Carlsbad, Ruidoso |
| Ruidoso | Socorro, Roswell, Clovis, Santa Rosa, Alamogordo |
| Roswell | Clovis, Carlsbad, Hobbs, Ruidoso, Alamogordo |
| Carlsbad | Roswell, Hobbs, Alamogordo |
| Hobbs | Roswell, Clovis, Carlsbad |

Every main station reaches at least three neighbouring main stations in both modes. The two Tough-only gaps:
- **Española–Las Vegas** crosses the Sangre de Cristo. The real roads go round by Santa Fe.
- **Deming–Sierra Vista** is 148 mi across Arizona's ranges. The real road is I-10 by Willcox.

**Costs in Tough worth knowing:**
- **Albuquerque–Santa Fe** tunnels 8 mi under the Sandias' north end. The real line (the Rail Runner, I-25) goes round by Bernalillo, and Albuquerque–Bernalillo–Santa Fe is all open ground.
- **Silver City–Reserve** has an 11.5 mi tunnel under the Mogollon country (under Tough's 15 mi limit).

**Neighbours.** I compared all 494 pairs of the neighbouring states' places near New Mexico (within 200 mi of each other), with this pack's passes and bridges and without them. None is opened or closed. One price changes: Pagosa Springs–Chinle crosses the San Juan near a New Mexico bridge.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Albuquerque & Santa Fe | `rio` | Albuquerque, Los Lunas, Santa Fe, Rio Rancho, Los Alamos, Española, Santa Rosa | 50 passengers; own 5 counties; 10 crates of produce (Los Lunas, Santa Rosa, and the farm towns Belen, Moriarty, Mountainair and Vaughn) |
| Route 66 & the Santa Fe Trail | `north` | Grants, Gallup, Farmington, Las Vegas, Raton, Tucumcari, Clovis | 140 passengers; connect GUP–TCC (I-40); own 12 counties |
| The Rio Grande & the Gila | `south` | Socorro, Las Cruces, Deming, Alamogordo | 280 passengers; connect ABQ–LCR (I-25); 25 trucks (from the desert and mountain stations) |
| The Pecos & the Permian Basin | `pecos` | Ruidoso, Roswell, Carlsbad, Hobbs | 450 passengers; connect ABQ–CBAD (by US-285 or by Alamogordo; open in both modes); one high-speed train |

- **Targets** follow Colorado's four levels.
- **Each level's regions touch the earlier ones:**
  - Level 1: Sandoval and Guadalupe-Torrance touch Bernalillo; Los Alamos and Rio Arriba-Taos touch Santa Fe.
  - Level 2: Cibola touches Bernalillo and Valencia; McKinley touches Cibola and Sandoval; San Juan touches Sandoval and Rio Arriba-Taos; Mora-San Miguel touches Santa Fe; Colfax-Union touches Rio Arriba-Taos; Harding-Quay and Curry-De Baca-Roosevelt touch Guadalupe-Torrance.
  - Level 3: Catron-Sierra-Socorro touches Valencia, Cibola and Guadalupe-Torrance; Doña Ana, Grant-Hidalgo-Luna and Otero touch Catron-Sierra-Socorro.
  - Level 4: Lincoln touches Catron-Sierra-Socorro, Guadalupe-Torrance and Otero; Chaves touches Curry-De Baca-Roosevelt; Eddy touches Otero; Lea touches Curry-De Baca-Roosevelt.

### Biomes

Following Arizona's (every county dry) and Colorado's conventions:
- **`forest`:** Los Alamos. The townsite is in ponderosa pine on the Pajarito Plateau, 7,300 ft up (as Colorado's Summit).
- **`wooded`** (trees on the hills, so the valleys and plains stay grassland):
  - the Sangre de Cristo counties: Rio Arriba-Taos, Santa Fe, Mora-San Miguel and Colfax-Union (with Raton Mesa; Colorado's Huerfano-Las Animas is wooded across the line);
  - Sandoval (the Jemez Mountains and Valles Caldera);
  - Lincoln (the Sacramentos and the Capitans).
- **`dry`:**
  - the Rio Grande's basins: Bernalillo, Valencia, Catron-Sierra-Socorro and Doña Ana;
  - the Four Corners and the Navajo and Zuni country: San Juan, McKinley and Cibola (Arizona's Apache is dry across the line);
  - the Chihuahuan Desert: Grant-Hidalgo-Luna, Otero, Chaves, Eddy and Lea.
- **Not listed (farmland and grassland):** the eastern plains (Harding-Quay, Curry-De Baca-Roosevelt, Guadalupe-Torrance).
- **Judgment calls:**
  - Catron-Sierra-Socorro is dry, though Catron is mostly the Gila's forest: most of the region is Socorro's and Sierra's desert.
  - Otero is dry, though the Sacramentos above Cloudcroft are forested: the Tularosa Basin and Otero Mesa are most of it.
  - Grant-Hidalgo-Luna is dry, though the Gila National Forest covers Grant's north.
  - Lea and Chaves are dry, though the Llano Estacado's grassland reaches their northern parts.
  - Bernalillo is dry, though the Sandias are wooded: Albuquerque is high desert (as Arizona's Maricopa).

### Checks

- **`node tools/check-pack.js NM`:** `NM: passed (22 stations, 56 towns, 0 city maps, 7 passes, 22 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js NM`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is ABQ, LLN and SFE.
  - The test laid Albuquerque–Los Lunas (22 mi, 1 train), bought Catron-Sierra-Socorro (SOC), and 6–7 passengers arrived in the week (two runs).
  - Levels mode opened level 1 (50 passengers, 5 counties, 10 crates of produce).
- **Screenshots** (`test-out/NM/`):
  - Albuquerque sits on the Rio Grande with Los Lunas below it and Santa Fe and Lamy to the northeast.
  - The Sangre de Cristo and Jemez counties show trees and peaks; the south and west are tan (dry) with cacti, and the eastern plains are green.
  - The phone screen's first-track hint drags Albuquerque to Los Lunas.

### For the main agent

1. **Start:** Albuquerque, Los Lunas (farm) and Santa Fe, rather than Rio Rancho: Albuquerque–Rio Rancho would be two metros on the first track.
2. **Valencia:** Los Lunas by the rule; Belen is a town.
3. **Airport:** only the Sunport.
4. **Leniencies:** Tijeras Canyon takes Albuquerque–Santa Fe in Gentle. Glorieta, Palo Flechado and Cimarron Canyon open some lines across the Sangre de Cristo's south end in Tough.
5. **Bridges placed on the map's river, not the real one:** Carlsbad (4 mi east of the real river) and Isleta (approx.).
6. **Texas and Oklahoma:** Clovis, Portales, Tucumcari, Logan, Clayton, Hobbs, Lovington, Eunice, Jal, Carlsbad and Sunland Park are near the lines. Sunland Park is next to El Paso, and Clayton and Logan are on US-87 and US-54 to Dalhart.
