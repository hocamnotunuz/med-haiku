# New Mexico (NM) pack notes

## Region merges (phase 1)

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
