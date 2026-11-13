# Texas (TX) pack notes

## Region merges (phase 1)

Populations: `packs/TX/raw/counties.json` and `packs/TX/raw/places.json` (U.S. Census Bureau; the source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 29,145,459). A script checked that every group is connected through `neighbors`, has at most 3 counties and no county of 50k or more, that every county under 50k is merged or listed as an exception below, and that every name matches exactly one Texas county in us-atlas. Shared border lengths (km, in brackets) were measured on the rings in `map.js`. Station towns are the biggest place with a population in `places.json`; mileages between towns are straight lines between their `places.json` points. Roads, rivers, lakes and railways are well known unless marked "(moderately known)".

### Recommended (254 → 150 regions)

```
merge: [["Dallam", "Hartley", "Oldham"], ["Moore", "Sherman"], ["Hansford", "Lipscomb", "Ochiltree"], ["Carson", "Hutchinson"], ["Gray", "Hemphill", "Roberts"], ["Collingsworth", "Wheeler"], ["Armstrong", "Donley"], ["Childress", "Cottle", "Hall"], ["Castro", "Deaf Smith", "Parmer"], ["Hale", "Swisher"], ["Briscoe", "Floyd", "Motley"], ["Bailey", "Lamb"], ["Cochran", "Hockley"], ["Terry", "Yoakum"], ["Crosby", "Dickens"], ["Borden", "Dawson", "Lynn"], ["Garza", "Kent", "Scurry"], ["Foard", "Hardeman", "Wilbarger"], ["Baylor", "King", "Knox"], ["Haskell", "Jones", "Stonewall"], ["Shackelford", "Stephens", "Throckmorton"], ["Callahan", "Eastland"], ["Archer", "Young"], ["Jack", "Palo Pinto"], ["Clay", "Montague"], ["Erath", "Somervell"], ["Bosque", "Hill"], ["Comanche", "Hamilton"], ["Brown", "Coleman"], ["Lampasas", "Mills", "San Saba"], ["Caldwell", "Gonzales"], ["Austin", "Colorado"], ["Fayette", "Lee"], ["Grimes", "Washington"], ["Burleson", "Milam"], ["Falls", "Robertson"], ["Leon", "Madison"], ["Freestone", "Limestone"], ["Concho", "Mason", "McCulloch"], ["Burnet", "Llano"], ["Blanco", "Gillespie"], ["Bandera", "Kendall"], ["Kimble", "Menard"], ["Edwards", "Real", "Uvalde"], ["Andrews", "Gaines"], ["Glasscock", "Howard", "Martin"], ["Fisher", "Mitchell", "Nolan"], ["Coke", "Runnels", "Sterling"], ["Crockett", "Schleicher", "Sutton"], ["Irion", "Reagan"], ["Crane", "Upton"], ["Ward", "Winkler"], ["Loving", "Reeves"], ["Pecos", "Terrell"], ["Brewster", "Jeff Davis", "Presidio"], ["Culberson", "Hudspeth"], ["Kinney", "Val Verde"], ["Dimmit", "Zavala"], ["Frio", "La Salle"], ["Atascosa", "Live Oak", "McMullen"], ["Bee", "Karnes"], ["Brooks", "Duval", "Jim Wells"], ["Kenedy", "Kleberg", "Willacy"], ["Jim Hogg", "Zapata"], ["Aransas", "Refugio"], ["Calhoun", "Jackson"], ["DeWitt", "Goliad", "Lavaca"], ["Matagorda", "Wharton"], ["Houston", "Trinity"], ["Jasper", "Newton", "Tyler"], ["Sabine", "San Augustine"], ["Panola", "Shelby"], ["Cass", "Marion", "Morris"], ["Camp", "Upshur"], ["Franklin", "Red River", "Titus"], ["Delta", "Hopkins"], ["Rains", "Wood"]]
names: { "Austin-Colorado": "Colorado-Austin County", "Crockett-Schleicher-Sutton": "Sutton-Crockett-Schleicher County", "Houston-Trinity": "Trinity-Houston County", "Pecos-Terrell": "Terrell-Pecos County" }
```

77 groups (181 counties), plus 69 counties of 50k or more and 4 smaller ones alone: 150 regions. No `bridges` or `join` are needed: the barrier islands are already part of their mainland counties (see the map check).

**Names.** Each rename keeps the precedent's rule (Valley-Boise, Kit Carson-Cheyenne): a county name that is also a station elsewhere in the game does not lead.
- "Austin-Colorado County" reads as the capital (Travis's station) and the state.
- "Houston-Trinity County" reads as the city of Houston.
- Crockett is the station town of Houston-Trinity.
- Pecos is the station town of Loving-Reeves.

Other names read well. "Moore-Sherman" and "Jasper-Newton-Tyler" already put Sherman and Tyler (station towns of Grayson and Smith) last.

**Alone, 50k and over (69):**
- **The metros:** Harris, Fort Bend, Montgomery, Brazoria, Galveston, Waller, Liberty; Dallas, Tarrant, Collin, Denton, Ellis, Johnson, Parker, Kaufman, Rockwall, Hunt, Wise, Hood; Bexar, Comal, Guadalupe, Medina, Wilson; Travis, Williamson, Hays, Bastrop.
- **East Texas:** Smith, Gregg, Harrison, Rusk, Nacogdoches, Angelina, Cherokee, Anderson, Henderson, Van Zandt, Bowie, Polk, Walker.
- **The Gulf coast:** Jefferson, Orange, Hardin, Victoria, Nueces, San Patricio.
- **South Texas and the Valley:** Cameron, Hidalgo, Starr, Webb, Maverick.
- **Central Texas:** Bell, McLennan, Coryell, Brazos, Navarro.
- **North Texas:** Grayson, Lamar, Wichita, Taylor.
- **The Panhandle:** Potter, Randall.
- **The South Plains:** Lubbock.
- **West Texas:** El Paso, Midland, Ector, Tom Green.
- **The Hill Country:** Kerr.

Wilson is 49,753 in the file. The `pop` field rounds it to 50, and the brief's list counts it as 50k, so it stays alone. Polk (50,125), Lamar (50,081) and Cherokee (50,413) are just over 50k. Atascosa (48,977) and Burnet (49,127) are under 50k, so they are merged.

**Alone, under 50k (the exceptions):**
- **Chambers** 46,562 (Mont Belvieu 7,724, Anahuac). Every neighbour is big: Harris, Liberty, Jefferson and Galveston.
- **Cooke** 41,670 (Gainesville 17,380). Its town is on I-35 and the Red River north of Denton. Its only small neighbour, Montague, belongs with Clay on US-287 and US-82 out of Wichita Falls. Cooke + Montague (61.7k) would push Clay onto Archer and unravel the Archer, Young and Jack groups.
- **Fannin** 35,661 (Bonham 10,405), on US-82 between Sherman and Paris. Its only small neighbour, Delta, touches it for 6 km and goes with Hopkins (Cooper is 16 mi from Sulphur Springs).
- **San Jacinto** 27,397 (Shepherd 2,095, Coldspring, Lake Livingston's west shore). Its only small neighbour is Trinity (21 km), which goes with Houston County on US-287. The alternative below removes this exception.

### The groups

| Group (shared border, km) | Why | Main station | Population |
| --- | --- | --- | --- |
| **The Panhandle** | | | |
| Dallam + Hartley + Oldham (79, 79) | The northwest ranch country (the old XIT). Dalhart sits on the Dallam–Hartley line. US-385 runs Dalhart–Channing–Vega (moderately known), and Vega and Adrian are on I-40 | Dalhart (8,442) | 14,256 |
| Moore + Sherman (49) | US-287 north from Amarillo by Dumas and Cactus to Stratford and Oklahoma | Dumas (14,500) | 24,139 |
| Hansford + Lipscomb + Ochiltree (49, 49) | The top row on the Oklahoma line: Spearman, Perryton, Booker (TX-15, moderately known) | Perryton (8,487) | 18,342 |
| Carson + Hutchinson (48) | Borger and the Canadian River breaks, with Panhandle, White Deer and Groom. TX-207 runs Panhandle–Borger, 22 mi (moderately known). Hutchinson's other small neighbours go north (Hansford) and east (Roberts) | Borger (12,552) | 26,412 |
| Gray + Hemphill + Roberts (49, 49) | US-60 and the BNSF Transcon from Pampa by Miami to Canadian (moderately known) | Pampa (16,868) | 25,441 |
| Collingsworth + Wheeler (49) | US-83 from Shamrock (I-40) to Wellington, 25 mi | Wellington (1,890). Shamrock (1,794), on I-40, is a phase 2 option | 7,639 |
| Armstrong + Donley (48) | US-287 and the BNSF (Fort Worth & Denver) southeast of Amarillo: Claude and Clarendon | Clarendon (1,882) | 5,110 |
| Childress + Cottle + Hall (39, 48; Cottle–Hall 9) | Childress, where US-287 (Memphis, Estelline) meets US-83 south to Paducah | Childress (5,737) | 10,862 |
| Castro + Deaf Smith + Parmer (33, 47, 48) | Hereford's feedlot country. US-60 and the BNSF Transcon run from Farwell by Bovina and Friona to Hereford (moderately known). Dimmitt is 20 mi south on US-385 | Hereford (14,971) | 35,827 |
| **The South Plains** | | | |
| Hale + Swisher (40) | I-27 between Amarillo and Lubbock: Tulia, Kress, Plainview | Plainview (20,183) | 39,498 |
| Briscoe + Floyd + Motley (39, 53; Briscoe–Motley 9) | The Caprock edge. Floydada, Lockney and Silverton are on the plain; Quitaque (Caprock Canyons) and Matador are below it. US-70 runs Floydada–Matador (moderately known) | Floydada (2,678) | 7,892 |
| Bailey + Lamb (54) | US-84 from Clovis by Muleshoe to Littlefield and Lubbock (moderately known) | Littlefield (5,960) | 19,952 |
| Cochran + Hockley (49) | Levelland and Morton (25 mi), west of Lubbock toward New Mexico | Levelland (12,651) | 24,089 |
| Terry + Yoakum (48) | Brownfield, Plains and Denver City, southwest of Lubbock toward Hobbs | Brownfield (8,938) | 19,525 |
| Crosby + Dickens (48) | US-82 east of Lubbock and down the Caprock: Ralls, Crosbyton, Dickens, Spur (moderately known) | Ralls (1,662). Crosbyton (1,495) is the seat | 6,898 |
| Borden + Dawson + Lynn (48, 36; Borden–Lynn 12) | US-87 south from Lubbock by Tahoka to Lamesa. Gail (Borden, no Census population) is east of Lamesa on US-180 (moderately known) | Lamesa (8,674) | 18,681 |
| Garza + Kent + Scurry (47, 36; Garza–Scurry 13) | US-84 and the BNSF from Lubbock by Post to Snyder. Jayton is on US-380 east of Post (moderately known) | Snyder (11,430) | 23,505 |
| **North Texas** | | | |
| Foard + Hardeman + Wilbarger (57, 28, 35) | US-287 and the BNSF (Fort Worth & Denver) from Quanah to Vernon. Crowell is 27 mi west of Vernon | Vernon (10,082) | 17,531 |
| Baylor + King + Knox (37, 49) | US-82 west from Seymour by Benjamin to Guthrie (the Four Sixes), with Munday and Knox City (moderately known) | Seymour (2,588) | 7,084 |
| Haskell + Jones + Stonewall (35, 49; Jones–Stonewall 14) | US-277 north from Abilene by Anson and Stamford to Haskell. Aspermont is west on US-380 (moderately known) | Haskell (3,093). Stamford (2,897), a Jones town, is tagged Haskell. Anson (2,291) is the Jones seat | 26,311 |
| Shackelford + Stephens + Throckmorton (49, 35; Stephens–Throckmorton 13) | Albany, Breckenridge and Throckmorton. US-180 runs Albany–Breckenridge and US-283 runs Albany–Throckmorton (moderately known) | Breckenridge (5,186) | 13,646 |
| Callahan + Eastland (48) | I-20 and the UP (Texas & Pacific) east of Abilene: Clyde, Baird, Cisco, Eastland, Ranger | Cisco (3,888). Clyde (3,807) and Eastland (3,604) are close | 31,428 |
| Archer + Young (50) | The ranch and oil country south of Wichita Falls. Olney lies 18 mi from Archer City and 21 mi from Graham | Graham (8,729) | 26,423 |
| Jack + Palo Pinto (35) | US-281 from Jacksboro to Mineral Wells, 28 mi (moderately known). This is the Cross Timbers west of Fort Worth | Mineral Wells (14,813) | 36,886 |
| Clay + Montague (47) | US-287 and the BNSF (Fort Worth & Denver) from Wichita Falls by Henrietta to Bowie. US-82 runs Henrietta–Nocona | Bowie (5,434). The name is also Texarkana's county, a phase 2 point | 30,187 |
| **Central Texas** | | | |
| Erath + Somervell (18) | Stephenville and Glen Rose (on the Paluxy), 28 mi apart on US-67 (moderately known) | Stephenville (20,961) | 51,748 |
| Bosque + Hill (78) | Lake Whitney on the Brazos lies between them. Hillsboro is where I-35E and I-35W split. Clifton, Meridian and Whitney | Hillsboro (8,190) | 54,102 |
| Comanche + Hamilton (44) | Comanche, De Leon, Hamilton and Hico. TX-36 runs Comanche–Hamilton (moderately known) | Comanche (4,210) | 21,813 |
| Brown + Coleman (68) | Brownwood and Coleman, 27 mi apart on US-84 by Santa Anna (moderately known) | Brownwood (18,882) | 45,779 |
| Lampasas + Mills + San Saba (36, 40, 82) | US-190 from San Saba and US-183 from Goldthwaite meet at Lometa and run on to Lampasas (moderately known) | Lampasas (7,284) | 31,806 |
| Caldwell + Gonzales (36) | US-183 from Lockhart by Luling (I-10) to Gonzales, down the San Marcos River (moderately known). Caldwell's other small neighbour, Fayette, touches it for 0.5 km | Lockhart (14,376) | 65,538 |
| Austin + Colorado (58) | I-10 west of Houston's edge: Sealy, Columbus and Weimar, with Bellville and Eagle Lake | Sealy (6,839) | 50,723 |
| Fayette + Lee (29) | La Grange and Giddings, 19 mi apart on US-77 (moderately known). Schulenburg and Flatonia are on I-10 | Giddings (4,982). La Grange (4,386) is close | 41,916 |
| Grimes + Washington (15) | Brenham and Navasota (24 mi) face each other across the Brazos at Washington-on-the-Brazos (TX-105, moderately known) | Brenham (17,358) | 65,101 |
| Burleson + Milam (38) | Caldwell, Somerville, Cameron and Rockdale, between Bryan and Temple. TX-36 runs Caldwell–Cameron (moderately known) | Rockdale (5,330). Cameron (5,312) is the seat | 42,390 |
| Falls + Robertson (26) | TX-6 from Waco down the Brazos bottoms by Marlin, Calvert and Hearne to Bryan | Marlin (5,453) | 33,721 |
| Leon + Madison (49) | I-45 between Huntsville and Corsicana: Madisonville, Centerville, Buffalo | Madisonville (4,424) | 29,179 |
| Freestone + Limestone (49) | US-84 from Fairfield (I-45) by Teague to Mexia, plus Groesbeck (moderately known) | Mexia (6,898) | 41,588 |
| **The Hill Country** | | | |
| Concho + Mason + McCulloch (45, 38) | US-87 from San Angelo by Eden to Brady and Mason (moderately known) | Brady (5,115) | 14,884 |
| Burnet + Llano (69) | The Highland Lakes: Buchanan, Inks and LBJ lie along the line between them. Horseshoe Bay and Kingsland straddle it (moderately known). Burnet is under 50k (49,127) | Marble Falls (7,063) | 70,375 |
| Blanco + Gillespie (40) | The LBJ country on US-290: Johnson City, Stonewall, Fredericksburg (28 mi) | Fredericksburg (11,003) | 38,101 |
| Bandera + Kendall (15) | San Antonio's western Hill Country: Boerne on I-10 and Bandera on the Medina, linked by TX-46 (moderately known). Bandera's other small neighbours, Real and Uvalde, are in the canyon group | Boerne (17,865) | 65,119 |
| Kimble + Menard (60) | US-83 north from Junction (I-10) to Menard | Junction (2,446) | 6,245 |
| Edwards + Real + Uvalde (79, 40; Edwards–Uvalde 9) | The Nueces and Frio canyons down to Uvalde: TX-55 Rocksprings–Camp Wood–Uvalde and US-83 Leakey–Concan–Uvalde (moderately known) | Uvalde (15,220) | 28,757 |
| **West Texas and the Trans-Pecos** | | | |
| Andrews + Gaines (80) | US-385 north from Odessa by Andrews to Seminole (moderately known): the Permian Basin's north edge | Andrews (13,486) | 40,205 |
| Glasscock + Howard + Martin (41, 49; Glasscock–Martin 8) | I-20 and the UP (Texas & Pacific) from Midland by Stanton to Big Spring, with Garden City to the south | Big Spring (26,310) | 41,217 |
| Fisher + Mitchell + Nolan (48, 49) | I-20 and the UP by Colorado City, Roscoe and Sweetwater. Roby and Rotan lie north of Sweetwater | Sweetwater (10,617) | 27,397 |
| Coke + Runnels + Sterling (43, 43) | San Angelo's north: Ballinger and Winters, Robert Lee and Bronte, Sterling City. TX-158 runs Sterling City–Robert Lee–Ballinger (moderately known) | Ballinger (3,624) | 14,553 |
| Crockett + Schleicher + Sutton (42, 46, 81) | I-10 from Ozona to Sonora, and US-277 from Sonora by Eldorado to San Angelo | Sonora (2,502). Ozona is a CDP | 8,917 |
| Irion + Reagan (50) | US-67 west from San Angelo by Mertzon and Barnhart to Big Lake (moderately known) | Big Lake (2,968) | 4,897 |
| Crane + Upton (63) | US-385 south from Odessa by Crane to McCamey, plus Rankin (moderately known) | Crane (3,476) | 7,982 |
| Ward + Winkler (50) | Monahans and Kermit (14 mi), with I-20 at Monahans. Monahans, Ward's seat, is tagged Winkler (see the map check), so the two counties stay together | Monahans (7,836) | 19,431 |
| Loving + Reeves (63) | The Delaware Basin: Pecos on I-20 and the UP (Texas & Pacific), Mentone, and Orla on US-285 (moderately known) | Pecos (12,919; "Town of Pecos" in places.json) | 14,806 |
| Pecos + Terrell (143) | I-10 at Fort Stockton. US-285 runs south to Sanderson, on US-90 and the Sunset Route (moderately known) | Fort Stockton (8,469) | 15,958 |
| Brewster + Jeff Davis + Presidio (45, 116, 128) | The Big Bend: US-90 and the UP Sunset Route by Alpine and Marfa (Amtrak's Sunset Limited stops at Alpine), Fort Davis, and US-67 to Presidio | Alpine (6,039) | 17,676 |
| Culberson + Hudspeth (150) | I-10 and the Sunset Route from El Paso's edge by Sierra Blanca to Van Horn, with Dell City and the Guadalupe Mountains | Van Horn (1,933) | 5,388 |
| Kinney + Val Verde (49) | US-90 and the Sunset Route from Del Rio to Brackettville, 29 mi, plus Amistad Reservoir. Val Verde is 47,585 | Del Rio (34,693) | 50,717 |
| **South Texas and the Valley** | | | |
| Dimmit + Zavala (69) | The Winter Garden: Crystal City and Carrizo Springs on US-83 | Crystal City (6,345) | 18,281 |
| Frio + La Salle (58) | I-35 south of San Antonio: Pearsall, Dilley, Cotulla, Encinal | Pearsall (8,772) | 25,052 |
| Atascosa + Live Oak + McMullen (30, 50, 62) | US-281 and I-37 south of San Antonio: Pleasanton, Jourdanton, Three Rivers, George West. Tilden lies in the brush country between (TX-16, TX-72; moderately known). Atascosa is 48,977 | Pleasanton (10,647) | 60,909 |
| Bee + Karnes (24) | US-181 from San Antonio by Karnes City and Kenedy to Beeville (29 mi from Kenedy) | Beeville (13,672) | 45,757 |
| Brooks + Duval + Jim Wells (17, 29, 89) | Alice's brush country: US-281 Falfurrias–Premont–Alice and TX-44 Alice–San Diego–Freer (moderately known) | Alice (17,878) | 55,801 |
| Kenedy + Kleberg + Willacy (40, 54) | US-77 (I-69E) across the King and Kenedy ranches from Kingsville by Sarita to Raymondville. Willacy's only small neighbour is Kenedy | Kingsville (25,406) | 51,555 |
| Jim Hogg + Zapata (54) | Falcon Lake and US-83 at Zapata, with Hebbronville to the east (TX-16, moderately known). Zapata's only small neighbour is Jim Hogg | Zapata (a CDP, no population: neither county has an incorporated place) | 18,722 |
| **The Gulf coast** | | | |
| Aransas + Refugio (52) | Copano Bay: Rockport, Fulton, Refugio, Woodsboro (Rockport–Refugio 23 mi) | Rockport (10,084) | 30,573 |
| Calhoun + Jackson (41) | Lavaca Bay: Port Lavaca and Point Comfort, with Edna 25 mi inland | Port Lavaca (11,549) | 35,095 |
| DeWitt + Goliad + Lavaca (33, 40) | US-183 from Goliad to Cuero, and US-77A from Cuero by Yoakum to Hallettsville (moderately known) | Cuero (8,143) | 47,177 |
| Matagorda + Wharton (52) | The lower Colorado River: Wharton and Bay City (25 mi), with El Campo on US-59 | Bay City (18,053) | 77,825 |
| **East Texas** | | | |
| Houston + Trinity (58) | US-287 from Crockett to Groveton through the Davy Crockett National Forest (moderately known) | Crockett (6,333) | 35,674 |
| Jasper + Newton + Tyler (102, 90) | US-190 from Woodville by Jasper to Newton through the Big Thicket pinewoods (moderately known). Tyler's only small neighbour is Jasper | Jasper (6,877) | 64,993 |
| Sabine + San Augustine (52) | Toledo Bend and the Sabine National Forest: San Augustine, Hemphill, Pineland | San Augustine (1,919) | 17,815 |
| Panola + Shelby (47) | Carthage and Center (26 mi); US-59 runs Carthage–Tenaha (moderately known). Panola's only small neighbour is Shelby | Carthage (6,561) | 46,514 |
| Cass + Marion + Morris (57, 43; Marion–Morris 5) | Northeast of Marshall: Atlanta, Linden, Jefferson, Hughes Springs, Daingerfield. US-59 runs Atlanta–Jefferson (moderately known) | Atlanta (5,430) | 50,149 |
| Camp + Upshur (40) | Gilmer and Pittsburg, 18 mi apart on US-271 (moderately known) | Gilmer (4,843) | 53,358 |
| Franklin + Red River + Titus (17, 40, 31) | I-30 by Mount Vernon to Mount Pleasant, and US-271 north to Talco and Bogata (moderately known). Clarksville is 32 mi from Mount Pleasant | Mount Pleasant (16,081) | 53,185 |
| Delta + Hopkins (58) | Cooper and Sulphur Springs, 16 mi apart; I-30 at Sulphur Springs | Sulphur Springs (15,940) | 42,022 |
| Rains + Wood (27) | The lake country north of Tyler: Emory, Quitman, Mineola, Winnsboro. US-69 runs Emory–Mineola (moderately known) | Mineola (4,826) | 57,000 |

**Corridors:**
- **I-35** (Laredo to Gainesville) passes Webb, Frio-La Salle, Medina, Bexar, Comal, Hays, Travis, Williamson, Bell, McLennan, Bosque-Hill (Hillsboro), then Ellis/Johnson, Dallas/Tarrant, Denton and Cooke.
- **I-45** passes Galveston, Harris, Montgomery, Walker, Leon-Madison, Freestone-Limestone (Fairfield), Navarro and Dallas.
- **I-20** passes Loving-Reeves, Ward-Winkler, Ector, Midland, Glasscock-Howard-Martin, Fisher-Mitchell-Nolan, Taylor, Callahan-Eastland, Jack-Palo Pinto's south edge, Parker, Tarrant, Dallas, Kaufman, Van Zandt, Smith, Gregg and Harrison.
- **I-10** passes El Paso, Culberson-Hudspeth, Pecos-Terrell, Crockett-Schleicher-Sutton, Kimble-Menard, Kerr, Bandera-Kendall, Bexar, Guadalupe, Caldwell-Gonzales (Luling), Fayette-Lee, Austin-Colorado, Waller, Harris, Chambers and Jefferson.
- **I-27** passes Randall, Hale-Swisher and Lubbock. **I-40** passes Oldham, Potter, Carson, Gray and Wheeler.
- **US-287** passes Armstrong-Donley, Childress-Cottle-Hall, Foard-Hardeman-Wilbarger, Wichita and Clay-Montague.
- **US-83 / the Valley** passes Cameron, Hidalgo, Starr, Jim Hogg-Zapata (Zapata) and Webb.

### Alternative (149 regions)

Replace these seven regions:
- `["Houston", "Trinity"]`
- `["Leon", "Madison"]`
- `["Grimes", "Washington"]`
- `["Austin", "Colorado"]`
- `["Fayette", "Lee"]`
- `["Burleson", "Milam"]`
- San Jacinto alone

with these six:

| Group | Main station | Population |
| --- | --- | --- |
| `["San Jacinto", "Trinity"]` | Trinity (2,339) | 40,999 |
| `["Houston", "Leon"]` | Crockett | 37,789 |
| `["Grimes", "Madison"]` | Navasota (7,656) | 42,761 |
| `["Austin", "Washington"]` | Brenham | 65,967 |
| `["Colorado", "Fayette"]` | La Grange (4,386) | 44,991 |
| `["Burleson", "Lee", "Milam"]` | Rockdale | 59,873 |

All six are connected and checked.
- **Pro:** there is no San Jacinto exception, and the region count drops by one. Lake Livingston's west shore is one region, La Grange and Columbus share the Colorado River, and Bellville–Brenham follows TX-36 (moderately known).
- **Con:** it cuts US-287 (Crockett–Groveton) and the I-45 pair (Madisonville–Centerville). Rockdale would be the station for Giddings and Caldwell. "Austin-Washington County" would need a new name.

### Summary by area

| Area | Counties | Regions | Groups | Alone, 50k+ | Alone, under 50k | Population |
| --- | --- | --- | --- | --- | --- | --- |
| The metros (DFW, Houston, San Antonio, Austin) | 29 | 29 | 0 | 28 | 1 (Chambers) | 19.47M |
| East Texas | 35 | 23 | 9 | 13 | 1 (San Jacinto) | 1.55M |
| The Gulf coast | 15 | 10 | 4 | 6 | 0 | 1.10M |
| South Texas and the Valley | 22 | 12 | 7 | 5 | 0 | 1.96M |
| The Hill Country | 15 | 7 | 6 | 1 | 0 | 0.28M |
| Central Texas | 32 | 18 | 13 | 5 | 0 | 1.58M |
| North Texas | 26 | 14 | 8 | 4 | 2 (Cooke, Fannin) | 0.73M |
| The Panhandle | 25 | 11 | 9 | 2 | 0 | 0.43M |
| The South Plains | 20 | 9 | 8 | 1 | 0 | 0.47M |
| West Texas and the Trans-Pecos | 35 | 17 | 13 | 4 | 0 | 1.59M |
| **Total** | **254** | **150** | **77** | **69** | **4** | **29.15M** |

The areas are rough. Abilene (Taylor) and its ring are counted in North Texas. San Angelo, Sweetwater and the Permian are counted in West Texas. Erath, Comanche, Hamilton, Brown and Coleman are counted in Central Texas.

### Map and data check

1. **The map looks right.** It has 254 counties, each with its label inside. The land is one ring of 265,923 sq mi, which equals the counties' sum and falls between Texas's land area (about 261,000) and its total area (about 268,600). The barrier islands are extra rings of their mainland counties: Aransas (3 rings), Galveston (3), and Calhoun, Cameron, Kenedy, Kleberg, Nueces and Willacy (2 each). So no `bridges` or `join` are needed.
2. **Neighbours agree both ways** with the 7 `nm-` regions and the 9 `ok-` regions in their maps, and none is missing.
3. **Corner contacts.** Seventeen county pairs touch for under 3 km, mostly corners of the Panhandle's survey grid:
   - Under 1 km: Hansford–Roberts 0.1, Atascosa–La Salle 0.1, Lipscomb–Roberts 0.3, Borden–Mitchell 0.3, Carson–Moore 0.4, Delta–Franklin 0.4, Delta–Red River 0.4, Caldwell–Fayette 0.5, Carson–Roberts 0.7, Gaines–Martin 0.7, Freestone–Henderson 0.8, Moore–Oldham 0.9.
   - 1 to 3 km: Dimmit–Frio 1.1, Callahan–Jones 1.7, Eastland–Shackelford 1.7, Colorado–Jackson 2.6, Morris–Upshur 3.0.

   No merge depends on them. After merging, four pairs of regions still touch only at such a point, and the tool counts them as neighbours:
   - Borden-Dawson-Lynn / Fisher-Mitchell-Nolan (0.3 km)
   - Freestone-Limestone / Henderson (0.8 km)
   - Callahan-Eastland / Haskell-Jones-Stonewall (1.7 km)
   - Austin-Colorado / Calhoun-Jackson (2.6 km)
4. **Places off the land.** There are 1,863 places, 1,224 of them with populations. All but three lie inside their tagged county. The three are in the water: Corpus Christi (1.5 km off Nueces's shore, in the bay), Texas City (just off Galveston's edge) and Aransas Pass (1.9 km off, tagged Aransas; the city spans San Patricio, Aransas and Nueces, moderately known). Phase 2 should place their stations by hand if it uses them.
5. **Places that look wrong** (all are kept inside their groups):
   - **Monahans** (7,836) is Ward's county seat (well known), but its Census point and tag fall in Winkler. As a result, Ward's biggest listed place is Thorntonville (562).
   - **Stamford** (2,897), a Jones County town (moderately known), is tagged Haskell.
   - **Yoakum** (5,904) straddles DeWitt and Lavaca and is tagged Lavaca.
6. **Odd names and possible clashes:**
   - "Town of Pecos" is the Census name; the station should read "Pecos".
   - Ten counties have no incorporated place: Borden (Gail), Crockett (Ozona), Glasscock (Garden City), Jim Hogg (Hebbronville), Kenedy (Sarita), King (Guthrie), Loving (Mentone), McMullen (Tilden), Terrell (Sanderson) and Zapata (Zapata). Only Jim Hogg-Zapata is left with no populated station.
   - Bastrop and Elgin both show exactly 9,692 (different geoids). This is worth checking before phase 2 picks Bastrop's station.
   - Twenty-one names appear in two or three counties. Most are Starr County colonias named like towns elsewhere (Mesquite, San Juan, Lago Vista, Rancho Viejo, El Cenizo, Santa Rosa). Three are pairs of real incorporated places: Reno (Lamar, Parker), Lakeside (Tarrant, San Patricio) and Oak Ridge (Kaufman, Cooke). Medina is also a CDP in Zapata County.
   - The station Bowie (Montague) shares its name with Bowie County (Texarkana).

## The pack (phase 2, part A: main stations, start, levels, biomes)

Texas is built by two agents. **Part A** (this section) made the 150 main stations, the start, the levels and the biomes. **Part B** adds the towns and scenic places, the passes, the bridges and the bays, checks reachability and runs the pack test; until then `towns`, `passes`, `bridges` and `bays` are empty and the checker's only warning is "too few towns".

**Sources.**
- **Populations and points:** `packs/TX/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are the `places.json` points rounded to 2 decimals, except the stations moved to their downtowns (listed below).
- **Facts added by hand** (roads, railways, universities, ranches, airports, ports) are well known unless marked "moderately known". Downtown points are from memory (well known city centres, within about half a mile). Airport passenger counts are from memory (approx., 2019).
- **Checks:** the game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain. The helper scripts lived in `/tmp/tx-work/`, outside the game.

### Start

`start: ["tx-harris", "tx-galveston", "tx-fort-bend"]`: Houston, Galveston and Sugar Land. Galveston and Fort Bend both touch Harris.
- **Types:** metro, coast and metro.
- **First track:** `NR.firstTrackPair` picks Houston–Galveston (46.7 mi crow, metro to coast) in both Gentle and Tough, not blocked. It runs down the I-45 corridor by League City and Texas City and crosses 5 mi of open water from Texas City (29.37, -94.88) to Galveston's north shore (29.32, -94.82), which the map counts as coast today (track follows the shore; no bay yet). Houston is size 5 and Galveston 3, so it has riders, and it is the old Galveston, Houston & Henderson line and the Interurban's route (well known).
- **Considered:** Harris + Fort Bend + Waller (Prairie View, farm) keeps the first track on land (Houston–Prairie View, 43 mi), but Galveston is the classic pair and gives the start a port (two, with Houston's) for the level 1 container goal. Brazoria (Pearland) is metro, so it would not help the types.

### Main stations (150)

**Ids** are unused in every other pack (the checker checks). Taken codes: DAL (Dallas, Oregon) so Dallas is **DLS**; AUS (Austin, Nevada) so Austin is **ATX** (its nickname); SAT (St. Anthony) so San Antonio is **SA** (as LA, SF, SD); LBB (Little Bighorn Battlefield) so Lubbock is **LBK**; BRO, VCT, BMT and KIL so Brownsville, Victoria, Beaumont and Killeen are **BRWN**, **VICT**, **BMNT** and **KLN**; GRBY (Granby, Colorado) so Granbury is **GNBY**; CNTN, HLSB and PLSN so Canton, Hillsboro and Pleasanton are **CTON**, **HBRO** and **PLTN**. College Station is **BCS** (Bryan–College Station).

**Exceptions to "the biggest place"** (each also in a comment in `pack.js`):
- **Galveston (53,695), not League City (114,348), for Galveston County.** Galveston is the seat, the island city at the end of I-45, the Port of Galveston and the county's scenic place (the Strand, the East End, the beaches). League City is Houston's Clear Lake suburb at the county's north edge, 21 mi from downtown Houston; it is for a town. The same call as Oklahoma's El Reno over Yukon.
- **Seguin (29,439), not Schertz (42,017), for Guadalupe.** Seguin is the seat, in the middle of the county on I-10 and the Guadalupe. Schertz is San Antonio's north-east suburb on I-35 by Randolph Air Force Base at the county's west edge; on this map its city hall (29.55, -98.27) falls in Bexar.
- **Cleburne (31,285), not Burleson (47,643), for Johnson.** Cleburne is the seat, in the middle of the county, on US-67, the BNSF and Amtrak's Texas Eagle (a stop). Burleson is Fort Worth's southern suburb at the Tarrant line, 14 mi from downtown Fort Worth.
- **Prairie View (8,192), not Katy (21,882), for Waller.** Katy is tagged Waller because its Census point falls in the city's Waller County part (north-west of I-10), but its old downtown (29.79, -95.82) is not in Waller: it falls in Fort Bend's outline on this map, and the old town is on the Harris side (moderately known). Prairie View, the biggest place centred in the county, has Prairie View A&M University and sits on US-290 by Hempstead, the seat. Katy belongs to Houston's side as a town.
- **Shamrock (1,794), not Wellington (1,890), for Collingsworth-Wheeler.** Wheeler County has two thirds of the region's people (4,988 of 7,639), and Shamrock, its biggest place, is where I-40 (Route 66; the U-Drop Inn) meets US-83: the link to Oklahoma's Elk City. Wellington, 96 people bigger, is Collingsworth's seat 25 mi south; the phase-1 review named Shamrock as the option.
- **Bastrop for Bastrop County:** `places.json` gives Bastrop and Elgin exactly 9,692 each (a quirk the phase-1 review flagged). Bastrop is the seat, in the middle of the county where TX-71 crosses the Colorado; Elgin is at the north edge on US-290.
- **Zapata for Jim Hogg-Zapata** (a CDP with no population), as the phase-1 review says: neither county has an incorporated place. Zapata is Zapata County's seat on US-83 by Falcon Lake; Hebbronville is the other choice.
- **Canyon for Randall:** Amarillo straddles Potter and Randall, and its Census point is in Potter, so Amarillo is Potter's station and Canyon (the seat, West Texas A&M) is Randall's biggest place with its centre in the county.
- **Conroe for Montgomery:** The Woodlands is bigger but a CDP with no population in `places.json`; Conroe is the seat and the biggest incorporated city.
- **Names and tags:** "Town of Pecos" is written Pecos. Monahans is Ward's seat although tagged Winkler (same region). Haskell is the biggest place in its region (Stamford, tagged Haskell, is a Jones County town). Bowie is the Montague County town.

**Close calls kept at the biggest place** (the default rule: Galveston, Seguin and Cleburne are the only suburbs at a big city's edge passed over for a central seat, each a real town of its own on a main line): Dayton over Liberty (the seat, 497 fewer), Rockdale over Cameron (18 fewer), Giddings over La Grange (596 fewer), Cisco over Clyde and Eastland, Ralls over Crosbyton, Mineola and Mexia over their counties' seats, Lumberton over Silsbee and Kountze, Mont Belvieu over Anahuac, Copperas Cove over Gatesville, Portland over Sinton, Forney over Terrell and Kaufman, Pearland over Angleton, and in the metros Plano (over Frisco and McKinney), Round Rock (over Cedar Park and Georgetown), Killeen (over Temple), College Station (over Bryan) and Sugar Land (over Richmond).

**Points moved to downtown** (1.5 mi or more from the Census point; well known downtowns, from memory):
- **Far off:** Corpus Christi 27.80, -97.40 (the Census point is 14.2 mi east, in Corpus Christi Bay), Galveston 29.30, -94.80 (the Strand; 12.7 mi south-west, mid-island), Monahans 31.59, -102.89 (12.3 mi west, in Winkler), Brownsville 25.90, -97.50 (by the Gateway International Bridge; 7.3 mi north-east), El Paso 31.76, -106.49 (San Jacinto Plaza; 7.0 mi north-east), Laredo 27.50, -99.51 (San Agustín Plaza; 4.4 mi north), Childress 34.43, -100.21 (4.1 mi west: the city's limits take in its airport).
- **2–4 mi:** Dayton 3.7, San Antonio (Alamo Plaza) 3.6, Plano 3.5, College Station 3.5 (Texas A&M's Academic Plaza by Northgate: the city has no old downtown), Waco 3.0, Pecos 2.9, Killeen 2.9, Beaumont 2.7, Texarkana 2.7, Lubbock 2.6, Midland 2.6, Odessa 2.6, Fort Worth (Sundance Square) 2.5, Orange 2.5, Tyler 2.3, Dallas 2.2, Houston 2.1, Austin (the Capitol) 2.1, Victoria 2.1, Wichita Falls 2.1, Pearland 2.0, Conroe 2.0, Longview 2.0, McAllen 2.0, Mineral Wells 2.0.
- **1.5–2 mi:** Greenville 1.9, Weatherford 1.7, Round Rock 1.7, Vernon 1.7, Rockwall 1.5.
- **Rockport** is at 28.03, -97.05, by the harbor 0.7 mi north of downtown (28.02, -97.05), which this map's coastline leaves in Aransas Bay; the Census point is 1.4 mi north.
- Every other station is at its Census point (rounded); the rest are under 1.5 mi from their downtowns.

**Sizes** follow the PACKS.md guide and the neighbours (the region's population decides; the town's own size only splits 1 from 2):
- **5:** Houston (Harris 4.73M), Dallas (2.61M), Fort Worth (Tarrant 2.11M) and San Antonio (Bexar 2.01M), as Los Angeles, Phoenix (4.42M), Seattle (King 2.27M) and Las Vegas (2.27M). Fort Worth itself (919k) is bigger than Seattle or San Francisco, both size 5.
- **4:** Austin (Travis 1.29M), as Denver (716k), Sacramento (1.59M) and Salt Lake City (1.19M); Denver's metro (2.9M) is bigger than Austin's (2.3M), and the guide's 5 is "usually over 1.5 million". Plano (Collin 1.07M) and Denton (906k) as Concord (Contra Costa 1.17M), Tacoma (921k) and Everett (828k); Sugar Land (Fort Bend 823k) as Everett. El Paso (866k) and McAllen (Hidalgo 871k) as Tucson (1.04M), Albuquerque (676k) and Oklahoma City (797k): the cores of their own metros. (Bakersfield, 909k, is 3; McAllen could be 3 if the main agent prefers.)
- **3:** Conroe (Montgomery 620k) and Round Rock (Williamson 609k), as Overland Park (610k) and Aurora (655k); Brownsville (Cameron 421k), Pearland (Brazoria 372k), Killeen (Bell 371k), Corpus Christi (Nueces 353k), Galveston (351k) and Lubbock (311k), as Lincoln (323k), Boulder (331k) and Eugene (383k).
- **2:** single counties of 75k–300k, and of 60k–75k with a city of about 20k or more or in a big metro (Laredo 267k as Regina 277k, Waco, Beaumont, San Marcos, College Station, Tyler, Waxahachie, Cleburne, Seguin, Midland, Odessa, New Braunfels, Weatherford, Forney, Abilene, Canyon, Sherman, Wichita Falls, Longview, San Angelo, Amarillo, Rockwall, Greenville, Bastrop, Texarkana, Dayton, Victoria, Lufkin, Orange, Copperas Cove, Athens, Huntsville, Marshall, Portland, Decatur, Granbury, Nacogdoches), and Bay City (Matagorda-Wharton 78k, the one merged region of 75k or more).
- **1:** the other merged regions (Boerne's Bandera-Kendall, 65k, and Lockhart's Caldwell-Gonzales, 66k, among them) and the counties under 60k (Kerrville 53k, Eagle Pass 58k, Paris 50k), as Kansas's and Oklahoma's (Ardmore 58k, Pittsburg 58k are 1).

**Types:**
- **metro (50):** the four big cities, Austin, El Paso and the metro counties' stations (Sugar Land, Conroe, Pearland, Plano, Denton, Round Rock, San Marcos, the DFW ring's cities, Seguin, New Braunfels, Boerne, Killeen, Copperas Cove), the regional cities (Waco, Tyler, Longview, Marshall, Texarkana, Paris, Sherman, Corsicana, Lufkin, Victoria, Orange, Laredo, McAllen, Eagle Pass, Kerrville, Lubbock, Amarillo, Midland, Abilene, San Angelo, Wichita Falls, Big Spring) and the university towns (College Station, Huntsville, Nacogdoches, Canyon), as Kansas types Emporia, Hays and Pittsburg.
- **coast (7):** Galveston, Beaumont (with Port Arthur and Sabine Pass), Port Lavaca, Rockport, Portland, Corpus Christi and Brownsville.
- **desert (9):** the Trans-Pecos and the Permian Basin (Van Horn, Fort Stockton, Pecos, Monahans, Crane, Andrews, Odessa, Big Lake), as New Mexico's Hobbs and Carlsbad, and Del Rio (the Chihuahuan Desert's east edge: Amistad, Seminole Canyon).
- **mountain (1):** Alpine (the Davis Mountains' foothills at 4,500 ft; the region is 28% hill and mountain cells on the map), as New Mexico's Ruidoso.
- **farm (83):** the rest: farm towns, ranch country, timber country (the Piney Woods: Texas has no forest type, as Oklahoma's Idabel), and some judgment calls: Prairie View (Waller's farms, though a university town), Stephenville (Erath's dairies, though Tarleton State), Kingsville (the King Ranch), Mont Belvieu and Dayton (rice and cattle), Decatur and Granbury (DFW's ranch edge), Bastrop and Lockhart (Austin's farm edge), Brownwood.

**Airports** (the bar of the other packs: about a million passengers a year): George Bush Intercontinental (Houston), Dallas/Fort Worth International (Fort Worth: its terminals are in Tarrant County on this map, 32.90, -97.04), Dallas Love Field (Dallas; over 15 million), Austin–Bergstrom International, San Antonio International, El Paso International (about 4 million), Lubbock Preston Smith International and Midland International Air and Space Port (each about a million or a little more, approx.). **Left out:** Houston Hobby (one airport per station), McAllen (about 0.9 million), Amarillo (about 0.8 million), Corpus Christi (about 0.7 million), Valley International (Harlingen), Brownsville, Laredo and Killeen (all approx., from memory). The main agent can add McAllen or Amarillo if the bar is lower (Moncton is about 0.7 million).

**Ports** (seaports, well known): the Port of Houston (Houston: the Ship Channel, Barbours Cut and Bayport container terminals), the Port of Corpus Christi, the Port of Beaumont, the Port of Galveston and the Port of Brownsville. Port Freeport (Brazoria) and Port Arthur are real ports but their towns aren't stations (Pearland and Beaumont are), so they are for part B's towns if wanted.

**Scenic stations:** Galveston (coast) and Fredericksburg (farm: the German Hill Country town, wineries, the National Museum of the Pacific War). San Antonio is **not** marked: tourists leave from metro stations that aren't scenic (`js/game.js`), so the big cities stay unmarked (as Oklahoma City, Tulsa and the other packs' big metros); the Alamo, the River Walk and the missions are for part B's scenic towns.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Houston & the Gulf Coast | `houston` | 26: the Houston metro (Harris, Fort Bend, Montgomery, Brazoria, Galveston, Waller, Liberty, Chambers), the Golden Triangle and the Big Thicket (Beaumont, Orange, Lumberton, Jasper, Livingston, Shepherd), Huntsville, the Brazos Valley (College Station, Brenham, Rockdale, Madisonville, Crockett) and the coast to Victoria (Sealy, Giddings, Bay City, Port Lavaca, Victoria, Cuero) | 50 passengers; own 5 counties; 10 containers (the Port of Houston, Galveston and Beaumont) |
| Dallas–Fort Worth & East Texas | `dfw` | 42: the twelve DFW regions, the Red River towns (Gainesville to Texarkana), the Piney Woods' north (Tyler, Longview, Marshall, Nacogdoches, Lufkin...) and Waco, Hillsboro, Stephenville, Mineral Wells and Bowie | 140 passengers; connect HOU–DLS (I-45, by Conroe, Huntsville, Madisonville and Corsicana); own 15 counties |
| Austin, San Antonio & South Texas | `south` | 34: Austin's and San Antonio's regions, Killeen, the Hill Country (Lampasas, Marble Falls, Fredericksburg, Kerrville, Uvalde), the border (Del Rio to Brownsville), the Valley and the Coastal Bend | 280 passengers; connect HOU–SA (I-10 and the Sunset Route, by Sealy, Giddings or Columbus, Lockhart or Luling, and Seguin); one high-speed train |
| West Texas & the Panhandle | `west` | 48: the Panhandle, the South Plains, the Rolling Plains and Wichita Falls, the Big Country, San Angelo, the Permian Basin, the Trans-Pecos and El Paso | 450 passengers; connect ABI–MIDL (I-20 and the Texas & Pacific, by Sweetwater and Big Spring); 25 trucks (the desert towns') |

- **Targets** follow the neighbours' four levels (Oklahoma, Kansas, New Mexico); the container goal follows California's level 1 (Los Angeles's ports), the trucks goal New Mexico's.
- **Areas join up:** Leon-Madison and Houston-Trinity (level 1) touch Freestone-Limestone, Anderson and Angelina (level 2); Fayette-Lee and DeWitt-Goliad-Lavaca (level 1) touch Bastrop, Caldwell-Gonzales and Bee-Karnes (level 3); Kerr and Lampasas-Mills-San Saba (level 3) and Erath-Somervell and Jack-Palo Pinto (level 2) touch level 4's Kimble-Menard, Brown-Coleman, Comanche-Hamilton and Archer-Young.

### Biomes

- **`forest`** (trees even on the flats): the Piney Woods. The Angelina, Davy Crockett, Sabine and Sam Houston national forests (Angelina, Houston-Trinity, Sabine-San Augustine, Walker, Montgomery, San Jacinto), the Big Thicket (Hardin, Jasper-Newton-Tyler, Polk, Orange) and the pine and hardwood belt from Texarkana to Nacogdoches (Bowie, Cass-Marion-Morris, Camp-Upshur, Gregg, Smith, Harrison, Rusk, Panola-Shelby, Cherokee, Nacogdoches), as Oklahoma's Choctaw-McCurtain-Pushmataha across the Red River.
- **`wooded`** (trees on the hills): the Piney Woods' west edge and the Post Oak Savannah (Anderson, Henderson, Van Zandt, Rains-Wood, Franklin-Red River-Titus, Leon-Madison, Grimes-Washington, Liberty, and Bastrop's Lost Pines), the Cross Timbers (Clay-Montague, Jack-Palo Pinto, Hood, Erath-Somervell, Comanche-Hamilton) and the Hill Country (Comal, Bandera-Kendall, Kerr, Blanco-Gillespie, Burnet-Llano, Lampasas-Mills-San Saba, Kimble-Menard, Edwards-Real-Uvalde). The map has no hill cells there, so few trees show (as Oklahoma's Delaware-Ottawa); they are listed for when it does.
- **`dry`** (sand and cacti): the Chihuahuan Desert (El Paso, Culberson-Hudspeth, Brewster-Jeff Davis-Presidio, Loving-Reeves, Pecos-Terrell, Kinney-Val Verde), as New Mexico's Doña Ana, Otero, Eddy and Lea across the line; the Permian Basin's sandhills and oil fields (Ward-Winkler, Crane-Upton, Ector, Midland, Andrews-Gaines); and the Rio Grande's brush country of prickly pear and mesquite (Maverick, Dimmit-Zavala, Webb, Jim Hogg-Zapata, Starr).
- **Not listed** (farmland and grassland): the Panhandle and the South Plains (wheat, cotton, feedlots; as Oklahoma's Panhandle and New Mexico's Curry and Quay across the lines), the Rolling Plains and the Big Country, the Blackland Prairie from Sherman to San Antonio, the Edwards Plateau's ranches west of the Hill Country (Sonora, Big Lake, San Angelo), the coastal prairie's rice and cattle, the Valley's irrigated farms (Hidalgo, Cameron) and the Coastal Bend.

### Checks (part A)

- **`node tools/check-pack.js TX`:** `TX: passed (150 stations, 0 towns, 0 city maps, 0 passes, 0 bridges), 0 errors, 1 warnings` (the warning: "only 0 towns for 150 regions", expected until part B).
- **`node tools/check-pack.js`:** `All packs passed.`
- **Spacing:** the closest two stations are Corpus Christi and Portland, 7.5 mi apart across Nueces Bay.

### For part B (the second agent)

1. **The first track** is Houston–Galveston. Its straight line crosses 5 mi of water from Texas City (29.37, -94.88) to Galveston's north shore (29.32, -94.82). If the Galveston Bay ring covers that water, Tough needs a bridge point within 3 mi of it (a Galveston Causeway point at about 29.31, -94.88 would be 2.8 mi from that stretch, just inside; Gentle allows 4 mi, and new bridges up to 8 mi).
2. **Neighbouring stations with no bridges or bays yet:** every station reaches at least two neighbouring stations in both modes. Blocked in Gentle: Crockett–Shepherd (Lake Livingston) and Canton–Greenville (Lake Tawakoni). Blocked in Tough as well: Dallas–Rockwall (Lake Ray Hubbard: the I-30 bridge), Brenham–Rockdale (Somerville Lake), Jasper–San Augustine (Sam Rayburn Reservoir), Alice–Pleasanton (Choke Canyon Reservoir), Del Rio–Fort Stockton (Amistad Reservoir) and Rio Grande City–Zapata (Falcon Lake). The bays will add more.
3. **Links into Oklahoma and New Mexico** (station to station) are all open in both modes today. Gainesville–Ardmore already uses Oklahoma's I-35 Red River bridge; the straight lines Sherman/Bonham/Paris–Durant, Paris/Mount Pleasant/Texarkana–Idabel, Vernon/Bowie/Wichita Falls–Frederick, Bowie–Ardmore and Duncan, and Childress/Vernon–Altus cross the Red River more than 2 mi (the river-bridge radius) from Oklahoma's four bridges, so they pay for new river bridges until part B adds Texas's (Sherman–Durant passes 2.3 mi from the US-69/75 bridge); Pecos–Carlsbad and Pecos–Hobbs cross the Pecos; Pampa–Woodward the Canadian. Van Horn–Alamogordo tunnels 11 mi (the Guadalupe/Sacramento highlands).
4. **Towns that were station candidates:** League City, Texas City (its Census point is in the water), Schertz, Burleson, Katy (Harris or Fort Bend: its Census point is in Waller), Wellington, Elgin, Temple, Bryan, Frisco, McKinney, Arlington, Liberty, Anahuac, Hempstead, La Grange, Cameron, Gatesville, Georgetown, Cedar Park, Edinburg, Harlingen, Port Arthur, Freeport, Lake Jackson.
5. **Scenic places near stations:** the Alamo is at San Antonio's station (29.42, -98.49), so a scenic town there would be under 4 mi; Mission San José (about 4 mi south) or the missions' trail clears the spacing warning. Galveston and Fredericksburg are already scenic stations.

## The pack (phase 2, part B: towns, passes, bridges, bays, checks)

Part B added the towns and scenic places, the pass, the bridges and the bays, checked reachability and ran the pack test. **Part A's work is unchanged**: no station, start, level or biome was touched (no check forced a change); the only edit outside part B's fields is the header comment, which now mentions bays.

**Sources.** Town points and populations: `packs/TX/raw/places.json` (U.S. Census Bureau), rounded to 2 decimals. Everything added by hand (scenic places, bridges, ferries, the pass, the bays' outlines) is real; well known unless marked "moderately known", points from memory (approx.) and then placed on the map's own river, lake or bay where the checks need it. The checks loaded the game as `tools/check-pack.js` does, plus `js/geography.js`, with every pack's map and terrain; the helper scripts lived in `/tmp/tx-work/`.

### Towns (249: 230 towns and 19 scenic places)

About 1.5 per region (230 for 150; Oklahoma 1.8, Kansas 1.7). Each is the region's next-biggest place, a county seat of a merged region, or a town on a main line, spread out (the checker finds none under 4 mi apart). The metros get more: Harris 5 (and 2 scenic), Dallas, Tarrant 4, Collin, Denton, Williamson, Brazoria, Galveston, Hidalgo, El Paso 3, Bexar 2 (and 1 scenic); most other regions 1 or 2. **Midland has none**: its only populated place is Midland. All 25 of part A's "station candidates" are towns (League City, Texas City, Schertz, Burleson, Katy, Wellington, Elgin, Temple, Bryan, Frisco, McKinney, Arlington, Liberty, Anahuac, Hempstead, La Grange, Cameron, Gatesville, Georgetown, Cedar Park, Edinburg, Harlingen, Port Arthur, Freeport, Lake Jackson).

- **Sizes:** 3 for Arlington (394k), Irving (257k) and Garland (246k), as Fremont, Santa Clarita and Henderson (Long Beach, 466k, is 4); 2 for the suburbs and second cities of about 50k–200k (Pasadena, Baytown, Missouri City, The Woodlands, League City, Texas City, Port Arthur, Bryan, Grand Prairie, Mesquite, North Richland Hills, Mansfield, Frisco, McKinney, Allen, Carrollton, Lewisville, Flower Mound, Burleson, Temple, Pflugerville, Cedar Park, Georgetown, Edinburg, Mission, Harlingen), as Olathe, Edmond and Yukon; 1 for the rest.
- **Types:** metro (51) for the big metros' suburbs and Commerce (East Texas A&M); coast (9) for Freeport, Texas City, Bolivar Peninsula, Port Arthur, Palacios, Port Aransas, Aransas Pass, South Padre Island and Padre Island National Seashore; desert (13) for the Permian and Trans-Pecos towns (as part A's stations) and Palo Duro Canyon; mountain (3) for Fort Davis, McDonald Observatory and Guadalupe Mountains National Park; farm (173) elsewhere.
- **Port:** Freeport has **Port Freeport** (its Velasco container terminal). Port Arthur's and Texas City's ports are mainly refinery and bulk cargo, and Beaumont (Port Arthur's station) already has a port, so they have none.
- **Points moved** from the Census point (downtowns, well known; each has a comment in `pack.js`): Grand Prairie 4.6 mi (its limits run south to Joe Pool Lake), Texas City 3.7 (the Census point is in Galveston Bay, as the city takes in the Texas City Dike), Temple 3.0, Port Arthur 3.0, Aransas Pass 2.9 (the Census point, tagged Aransas, is in Redfish Bay; downtown is in its San Patricio County part), Arlington 2.8, McKinney 2.6, Denison 2.4, Georgetown 2.2, Burkburnett 1.8, Burleson 1.7, Edinburg 1.5, Mansfield, Belton and Kilgore 1.3, Mesquite and Pflugerville 1.2, Rosenberg 1.0, Lewisville 0.9, Freeport 0.5. Every other town is at its Census point (rounded). **Katy** is at its old downtown (29.79, -95.82), on I-10 at the corner of Harris, Waller and Fort Bend; on this map that point is in Harris (part A's note thought Fort Bend's outline), so Katy is a Harris town; its Census point, 1.2 mi west, is in its Waller part. **Schertz** is 1.2 mi north of its Census point, which is 3.7 mi from Universal City. **Carrollton** stays at its Census point in its Denton County part (its old downtown is in Dallas County).
- **CDPs** (no population in raw/), chosen where a region's incorporated places were too small or too close: The Woodlands (about 115k), Bolivar Peninsula (Crystal Beach and Gilchrist), Bloomington (Victoria's only other places are CDPs), Canyon Lake, Quemado (Maverick's only incorporated place is Eagle Pass), Hebbronville and San Ygnacio (Jim Hogg-Zapata has no incorporated place), Sarita (Kenedy's seat), Guthrie (King's seat), Gail (Borden's), Garden City (Glasscock's), Ozona (Crockett's), Mentone (Loving's), Sanderson (Terrell's), Fort Davis (Jeff Davis's), Marathon, Sierra Blanca (Hudspeth's), West Odessa and Christoval.
- **Ids:** where the obvious code is taken in another pack, a variant: NEWT (Newton), BLVE (Bellville), CLWL (Caldwell), TRTY (Trinity), BGPT (Bridgeport), CPER (Cooper), GRRN (Garrison), EASL (Eastland), TAYR (Taylor), JHCY (Johnson City), MRTX (Morton), ANTX (Anthony), EGIN (Elgin), HNGT (Huntington), HENR (Henrietta).

**Scenic places (19).** South Padre Island, Marfa and Fort Davis are towns at their Census points; the other 16 are at the landmark (approx.). Tourists leave from metro stations that aren't scenic, so the big cities stay unmarked (part A), and these places carry the Alamo, the space center and the parks.

| Place | Point | Type | Source |
| --- | --- | --- | --- |
| Johnson Space Center | 29.56, -95.09 | metro | NASA's Mission Control and Space Center Houston, at Clear Lake (brief) |
| San Jacinto Battleground | 29.75, -95.09 | metro | The San Jacinto Monument, where Texas won its independence (1836), on the Ship Channel |
| Big Thicket | 30.46, -94.39 | farm | Big Thicket National Preserve, at its visitor center on US-69 north of Kountze (brief) |
| Washington-on-the-Brazos | 30.33, -96.16 | farm | Where Texas declared its independence (1836); the state historic site |
| Caddo Lake | 32.68, -94.18 | farm | Texas's natural lake of cypress swamp and bayous, at Caddo Lake State Park by Karnack |
| Texas State Railroad | 31.80, -95.19 | farm | The state park's steam and diesel trains between Rusk and Palestine, at the Rusk depot west of Rusk (it replaces Rusk as Cherokee's town: they would be 2.3 mi apart) |
| San Antonio Missions | 29.36, -98.48 | metro | The national historical park's four missions (a World Heritage Site with the Alamo), at Mission San José, 4.2 mi south of San Antonio's station at the Alamo (brief; part A's note) |
| Natural Bridge Caverns | 29.69, -98.34 | farm | Texas's biggest show cave, between San Antonio and New Braunfels |
| LBJ Ranch | 30.24, -98.62 | farm | Lyndon B. Johnson National Historical Park, the "Texas White House" by Stonewall |
| Enchanted Rock | 30.49, -98.82 | farm | The pink granite dome of Enchanted Rock State Natural Area, north of Fredericksburg (in Gillespie on this map) (brief) |
| South Padre Island | 26.12, -97.17 | coast | The beach resort at the Laguna Madre's mouth (a town; Census point) |
| Padre Island National Seashore | 27.43, -97.30 | coast | The longest undeveloped barrier island, at the Malaquite visitor center (brief) |
| Cadillac Ranch | 35.19, -101.99 | farm | The ten half-buried Cadillacs by I-40 (Route 66) west of Amarillo, in Potter (brief) |
| Palo Duro Canyon | 34.98, -101.70 | desert | The country's second-largest canyon, at the state park's entrance east of Canyon (as Kansas's Monument Rocks and Utah's Canyonlands, desert) (brief) |
| Marfa | 30.31, -104.03 | desert | Donald Judd's Chinati Foundation and the Marfa lights (a town; Census point) (brief) |
| Fort Davis | 30.58, -103.89 | mountain | Fort Davis National Historic Site in the Davis Mountains (a CDP; Census point) (brief) |
| McDonald Observatory | 30.68, -104.02 | mountain | The University of Texas's telescopes on Mount Locke and their star parties (brief) |
| Big Bend National Park | 29.33, -103.21 | desert | The Chisos Mountains and the Rio Grande's canyons, at Panther Junction, the park headquarters (brief) |
| Guadalupe Mountains National Park | 31.89, -104.82 | mountain | Guadalupe Peak (Texas's highest, 8,751 ft) and El Capitan, at the Pine Springs visitor center on US-62/180 (brief) |

Galveston and Fredericksburg are scenic stations (part A).

**Considered and left out:** the Alamo and the River Walk (at San Antonio's station; the missions stand for them), the Fort Worth Stockyards (2.9 mi from Fort Worth's station), AT&T Stadium (Arlington is a town), Dinosaur Valley State Park (Glen Rose is a town), Hueco Tanks, Monahans Sandhills, Caprock Canyons, Garner State Park, Seminole Canyon, Goliad's Presidio La Bahía (Goliad is a town), Luckenbach, Langtry (Judge Roy Bean; not a Census place), and SpaceX's Starbase at Boca Chica (famous, but its city dates from 2025 and it is not a park or sight in the usual sense): real, but less known, too close to a station or town, or not in raw/.

### Passes (1)

The map has 34 mountain cells in Texas, all in the Trans-Pecos: the Chisos (Big Bend), the Davis Mountains, the Chinati Mountains and Sierra Vieja, the Van Horn and Eagle mountains, the Guadalupe Mountains (Guadalupe Peak's cell is high mountains) and one Franklin Mountains cell at El Paso.

- **Guadalupe Pass** (31.87, -104.83; approx.): US-62/180 over the Guadalupe Mountains by Pine Springs, El Paso to Carlsbad (brief). In Tough it carries El Paso–, Dell City–, Socorro– and Horizon City–Guadalupe Mountains National Park over the range (they would tunnel 3 mi without it).
- **No other pass is needed.** No line on I-10 by Van Horn, US-90 (Paisano Pass between Alpine and Marfa) or TX-17 (Wild Rose Pass) crosses a mountain run long enough to count (the checker would also warn that Paisano Pass has no mountain cell within 7 mi). Elsewhere lines tunnel at most 14 mi (Horizon City–Ruidoso, New Mexico), so nothing is blocked by mountains in either mode: Alpine–Big Bend tunnels 7 mi in Tough, Van Horn–Presidio 9–12 mi, Socorro–Anthony 3 mi under the Franklin Mountains' cell.

### Bridges (88) and bays (5)

**Water on the map:** the rivers are the Rio Grande, the Red (with its Prairie Dog Town Fork in the Panhandle), the Canadian, the Brazos, the Colorado, the Trinity, the Neches, the Sabine, the Guadalupe, the San Antonio (the map also names the Medina so, by Bandera and Castroville), the Nueces, the Pecos, the White, and Oklahoma's Washita and Beaver. 36 reservoirs (part A's list). **The bays:** Galveston Bay (with Trinity, East and West bays), Corpus Christi and Nueces bays, Aransas and Copano bays, San Antonio Bay and the Laguna Madre are open water on the map, outside the county outlines. **Matagorda Bay, Lavaca Bay, Espiritu Santo Bay and Sabine Lake are land on this map** (inside the county outlines), so no ring would do anything there; the Houston Ship Channel above Morgan's Point is too narrow to show (land).

**Bays (5 rings)**, rough outlines over the water inside the barrier islands (land inside a ring stays land): Galveston Bay (its seaward edge along Galveston Island and the Bolivar Peninsula's real line, as the map leaves out the peninsula's west third), Corpus Christi Bay (with Nueces, Oso and Redfish bays, edged by Mustang Island), the Laguna Madre (with Baffin Bay, from the JFK Causeway to Port Isabel, edged by Padre Island), Aransas Bay (with Copano and St. Charles bays, edged by San José Island) and San Antonio Bay (with Espiritu Santo Bay's open part, edged by Matagorda Island). Water outside them is the Gulf: track follows the coast.

**Bridges (88).** Each is a real crossing, placed on the map's river, lake or bay where the real one is, or where the map's river passes the town (the checker finds none more than 3 mi from water). "Uses" are examples of links up to 60 mi that cross water near it (Gentle).

| Group | Bridges (point) | Notes and uses |
| --- | --- | --- |
| Galveston Bay | Galveston Causeway (I-45) 29.32, -94.88; Bolivar ferry (Galveston–Port Bolivar) 29.35, -94.77; Fred Hartman Bridge (TX-146, La Porte–Baytown) 29.70, -95.02 | The brief's crossings. The causeway carries the first track (below) and Texas City–, League City–, Johnson Space Center–Galveston; the ferry Galveston–Bolivar Peninsula; the Fred Hartman Bridge Baytown–Texas City (Gentle) |
| The Golden Triangle | Rainbow Bridge (TX-87, Port Arthur–Bridge City) 29.99, -93.87; Neches River bridges (I-10, Beaumont) 30.09, -94.09; Sabine River bridge (I-10, Orange) 30.09, -93.72 | Beaumont–Orange and –Vidor. The Rainbow Bridge (brief) and the Sabine bridge serve no line yet (Sabine Lake is land; Louisiana comes later) |
| Corpus Christi and the Laguna Madre | Harbor Bridge (US-181, Corpus Christi) 27.81, -97.40; Nueces Bay Causeway (US-181) 27.85, -97.37; JFK Causeway (Padre Island) 27.63, -97.27; TX-361 causeway (Redfish Bay, Aransas Pass) 27.89, -97.12; Port Aransas ferry (Harbor Island–Port Aransas) 27.84, -97.07; Copano Bay Causeway (TX-35) 28.11, -97.03; Queen Isabella Causeway (Port Isabel–South Padre Island) 26.08, -97.20 | Corpus Christi–Portland, –Aransas Pass, –Sinton; Aransas Pass–Port Aransas (the TX-361 causeway: the ferry's channel is land on this map); Rockport–Port Lavaca and –Victoria; Brownsville–, Los Fresnos–South Padre Island. TX-361 causeway and the Copano Bay Causeway moderately known |
| The Rio Grande | Rio Grande bridges (El Paso) 31.76, -106.49; (Laredo) 27.50, -99.51; Rio Grande bridge (Eagle Pass) 28.70, -100.49; Rio Grande bridges (Brownsville) 25.90, -97.50 | The international bridges. The map's river runs through these stations, so every line from them "crosses" it there |
| The Red River and Lake Texoma | Red River bridges: TX-78 (Bonham–Durant) 33.76, -96.25; US-81 (Ringgold–Terral) 33.88, -97.94; US-183 (Oklaunion–Davidson) 34.22, -99.17; US-283 (Vernon–Altus) 34.42, -99.29; US-83 (north of Childress) 34.58, -100.21 and US-287 (Estelline) 34.56, -100.39 over the Prairie Dog Town Fork; Denison Dam (TX-91) 33.83, -96.57; Willis Bridge (US-377) 33.88, -96.84 | With Oklahoma's four (I-35, US-69/75, I-44, US-271), unchanged. Bonham–Durant, Vernon–Frederick, Vernon–Altus, Childress–Wellington and –Shamrock, Clarendon–Childress, Denison–Kingston, Whitesboro–Kingston and –Madill. All but Denison Dam moderately known |
| The Canadian | US-287 (north of Amarillo) 35.47, -101.88; US-385 (Channing–Vega) 35.55, -102.34; TX-207 (Borger) 35.75, -101.44; US-60/83 (Canadian) 35.95, -100.37 | Amarillo–Dumas, Vega–Channing, Canadian–Shattuck. US-385 and TX-207 moderately known |
| The Trinity | Downtown Dallas 32.77, -96.81; TX-31 (Trinidad) 32.15, -96.11; US-59 (Goodrich) 30.57, -94.95; US-90 (Liberty) 30.05, -94.84; I-10 (Wallisville) 29.87, -94.75 (approx.) | Dallas–Grand Prairie, –Arlington, –Midlothian (27 links); Athens–Corsicana; Livingston–Shepherd and –Dayton; Dayton–Liberty; Mont Belvieu–Beaumont |
| The Brazos | US-277 (Seymour) 33.59, -99.26; US-180 (Palo Pinto) 32.80, -98.18; US-377 (Granbury) 32.44, -97.76; I-35 (Waco) 31.62, -97.13; Waco (the 1870 suspension bridge and Washington Avenue) 31.58, -97.11; TX-7 (Marlin) 31.27, -96.93; TX-21 (west of Bryan) 30.63, -96.55; TX-105 (Washington) 30.34, -96.13; US-290 (Hempstead) 30.12, -96.17; I-10 (San Felipe) 29.80, -96.06; Richmond–Rosenberg 29.59, -95.75; US-59 (Sugar Land) 29.57, -95.66 | The map's river at Waco runs 2–4 mi from the real one, so I-35's point is on the map's river 4 mi north of the real bridge (Hillsboro–, West–Waco) and the downtown bridges' 2 mi east (Mexia–Waco). College Station–Rockdale, Brenham–Navasota and –Hempstead, Sealy–Tomball, Houston–Rosenberg, Sugar Land–Rosenberg, Granbury–Fort Worth. US-180, TX-7, TX-21 moderately known |
| The Colorado | I-20 (Colorado City) 32.37, -100.87; US-83 (Ballinger) 31.74, -99.96; US-281 (Marble Falls) 30.56, -98.28; Congress Avenue Bridge (Austin) 30.26, -97.75; Bastrop 30.10, -97.33; La Grange 29.90, -96.88; I-10 (Columbus) 29.71, -96.54; TX-35 (Bay City) 28.98, -96.00 | Austin–San Marcos, –Lockhart, –Kyle (21 links); Bastrop–Lockhart; Columbus–Sealy; Ballinger–San Angelo; Big Spring–Colorado City |
| The Neches and the Sabine | Neches: TX-64 (Canton–Tyler) 32.43, -95.53; TX-31 (Lake Palestine) 32.31, -95.45; US-175 (Frankston–Jacksonville) 32.03, -95.43; US-79 (Jacksonville–Palestine) 31.87, -95.44; US-59 (south of Diboll) 31.13, -94.78. Sabine: US-69 (Mineola) 32.62, -95.47; I-20 (Kilgore–Longview) 32.47, -94.87 (approx.); US-259 (Longview) 32.43, -94.76; TX-43 (Tatum–Marshall) 32.39, -94.53; US-59 (Marshall–Carthage) 32.31, -94.34 | Canton–Tyler, Tyler–Athens, Jacksonville–Palestine, Livingston–Lufkin, Mineola–Tyler, Tyler–Longview, Longview–Henderson, Marshall–Henderson and –Carthage. All moderately known |
| The Guadalupe, Medina, San Antonio and Nueces | Guadalupe: Kerrville 30.04, -99.13; New Braunfels 29.70, -98.12; I-10 (Lake Placid) 29.57, -98.03; Seguin 29.55, -97.97; Gonzales 29.50, -97.45; Cuero 29.11, -97.33; Victoria 28.80, -97.03. Medina: TX-16 (Bandera) 29.73, -99.07; US-90 (Castroville) 29.36, -98.89. San Antonio: Floresville 29.14, -98.19; Goliad 28.66, -97.38. Nueces: US-90 (west of Uvalde) 29.24, -99.92; I-35 (Cotulla) 28.42, -99.24; US-281 (George West) 28.34, -98.11 | San Antonio–Seguin (I-10), New Braunfels–Seguin and –San Marcos, Hondo–Castroville, Floresville–Pleasanton, Goliad–Refugio, Beeville–George West, Uvalde–Brackettville, Cotulla–Laredo |
| The Pecos | I-20 (east of Pecos) 31.45, -103.39; TX-18 (Grandfalls) 31.33, -102.87; I-10 (Sheffield) 30.76, -101.83; Pecos River High Bridge (US-90) 29.69, -101.36 | Monahans–Pecos and –Fort Stockton, Fort Stockton–Ozona and –Sonora (I-10). The High Bridge (with the Union Pacific's beside it) serves no line yet |
| Reservoirs | I-30 bridge (Lake Ray Hubbard) 32.88, -96.52; TX-334 bridge (Cedar Creek Reservoir) 32.33, -96.17; I-35E bridge (Lewisville Lake) 33.10, -97.04; US-190 bridge (Lake Livingston, Onalaska) 30.80, -95.16; US-190 bridge (B. A. Steinhagen Lake) 30.83, -94.20; US-90 bridges (Amistad Reservoir) 29.52, -101.04 | Dallas–Rockwall (part A's note), Garland–Rockwall; Gun Barrel City–Kerens, –Ennis; Dallas–Denton; Huntsville–Onalaska, Crockett–Shepherd; Jasper–Woodville. TX-334 and B. A. Steinhagen moderately known; Amistad's serves no line yet |

**Left out:** Sam Rayburn's TX-147 and TX-103 bridges and US-59 over Wright Patman Lake (the map's lakes don't meet the lines that would use them, and Jasper–San Augustine's straight line crosses an arm US-96 goes round), the San Luis Pass bridge (Galveston–Freeport is open along the coast), and new Red River points for Sherman/Denison–Durant (2.3 mi from Oklahoma's US-69/75 bridge: they pay for a new river bridge rather than list the same bridge twice).

### Water verification

- **The first track:** `NR.firstTrackPair` gives **Houston–Galveston** in both modes (46.7 mi, metro to coast). Its line crosses 5.0 mi of Galveston Bay, now a bay, over the **Galveston Causeway (I-45)**, about 2.3 mi from the line's water: open in Gentle and Tough. The pack test laid it (54 mi of track) and 25 passengers arrived in the week.
- **At the real crossings, open in both modes:** Texas City–, League City–, Johnson Space Center–Galveston (the causeway); Galveston–Bolivar Peninsula (the ferry); Corpus Christi–Portland (US-181); Aransas Pass–Port Aransas (TX-361); Brownsville– and Los Fresnos–South Padre Island (Queen Isabella); Rockport–Port Lavaca (Copano Bay Causeway); Dallas–Rockwall (I-30); Denison–Kingston (Denison Dam); Huntsville–Onalaska (US-190); Jasper–Woodville; Dallas–Denton (I-35E); Gun Barrel City–Kerens (TX-334).
- **Away from them, blocked:** Texas City–Bolivar Peninsula (12 mi of bay), Mont Belvieu–Texas City (16), Johnson Space Center–Anahuac (20) and Port Aransas–Kingsville in both modes; in Tough also Baytown–Texas City (13 mi over the bay's middle), Bolivar Peninsula–Anahuac (East Bay), Humble–Galveston, Port Aransas–Portland and –Rockport, Rockport–Refugio and –Beeville (Copano Bay), Harlingen– and Raymondville–South Padre Island (7–9 mi of the Laguna Madre), Portland–Padre Island National Seashore, Denison–Ardmore and Sherman–Madill (Lake Texoma), Livingston–Huntsville (Lake Livingston, south of the US-190 bridge), Jasper–San Augustine (Sam Rayburn), Athens–Waxahachie (Cedar Creek, south of TX-334), Rockwall–Frisco (Lake Ray Hubbard's north end) and Denton–Whitesboro (Ray Roberts Lake).
- **One quirk:** a bridge counts for a whole water run if it is within reach of any part of it, so **Port Aransas–Corpus Christi** (16 mi across Corpus Christi Bay) is open in both modes: the Harbor Bridge is at its Corpus Christi end. In Gentle, Baytown–Texas City (the Fred Hartman Bridge) and Portland–Padre Island National Seashore are open the same way.

### How the map plays

**Counts.** Of the 10,006 pairs of places (at least one in Texas; with New Mexico's and Oklahoma's) within 100 mi of each other:
- **Gentle:** 75 are blocked, 21 of them within 60 mi: Galveston Bay 56 (crossing its middle, away from the causeway and the ferry), the Laguna Madre 3, Corpus Christi Bay 4, Lake Tawakoni 4, Lake Texoma 2, Lake Livingston 2, and one each by Sam Rayburn, Hugo Lake, Aransas Bay and Falcon Lake.
- **Tough:** 469 are blocked, 122 within 60 mi, all by water: Galveston Bay 87, Lake Texoma 58, Lake Tawakoni 50, Ray Roberts 48, Lake Livingston 37, Sam Rayburn 30, Lake Ray Hubbard 17, Aransas Bay 15, the Laguna Madre 14, Cedar Creek 12, Lewisville 12, Lake Fork 11, Corpus Christi Bay 10, Canyon Lake 10, Lake Whitney 9, Lake Conroe 8, Falcon Lake 8 and a few others. Mountains block nothing.

**Main stations.** Each of the 150 reaches every neighbouring region's main station directly in Gentle (423 neighbour links, none blocked), and all but four links in Tough; every station reaches at least two (Brownsville has only two neighbouring regions, both open). Blocked in Tough only:
- **Alice–Pleasanton** (87 mi, Choke Canyon Reservoir) and **Jasper–San Augustine** (43 mi, Sam Rayburn), as part A found.
- **Athens–Waxahachie** (61 mi): Cedar Creek Reservoir's south end, south of the TX-334 bridge.
- **Beeville–Rockport** (50 mi): Copano Bay. The real road goes round its west end by Sinton.
- Part A's other Tough blocks are open now: Dallas–Rockwall (the I-30 bridge), Crockett–Shepherd (the US-190 bridge; also no longer blocked in Gentle), and Brenham–Rockdale, Del Rio–Fort Stockton (now over the US-90 Amistad bridges), Rio Grande City–Zapata and Canton–Greenville (already open when part B began).

**Towns.** Every town has open links in both modes, and every town reaches its own region's main station in both, except **Refugio–Rockport in Tough** (Copano Bay; Refugio reaches 8 places within 40 mi). Big Bend National Park's nearest places are Marathon (61 mi) and Alpine (76 mi), both open.

**The real routes, as chains** (open in both modes; the longest link in brackets):
- **I-45:** Galveston–Texas City–League City–Houston–The Woodlands–Conroe–Willis–New Waverly–Huntsville–Madisonville–Centerville–Fairfield–Corsicana–Ennis–Dallas (34).
- **I-35:** Laredo–Cotulla–Dilley–Pearsall–San Antonio–New Braunfels–San Marcos–Kyle–Austin–Round Rock–Georgetown–Belton–Temple–Waco–West–Hillsboro–Waxahachie–Dallas (67, Laredo–Cotulla); I-35W Hillsboro–Burleson–Fort Worth–Denton (39); Dallas–Lewisville–Denton–Gainesville–Ardmore, Oklahoma (39).
- **I-10:** El Paso–Socorro–Sierra Blanca–Van Horn–Balmorhea–Fort Stockton–Ozona–Sonora–Junction–Kerrville–Boerne–San Antonio (100, Fort Stockton–Ozona) and San Antonio–Seguin–Luling–Schulenburg–Columbus–Sealy–Katy–Houston–Baytown–Mont Belvieu–Beaumont–Vidor–Orange (49).
- **I-20:** Pecos–Monahans–Odessa–Midland–Stanton–Big Spring–Colorado City–Sweetwater–Merkel–Abilene–Cisco–Eastland–Weatherford–Fort Worth–Arlington–Grand Prairie–Dallas–Mesquite–Forney–Terrell–Wills Point–Canton–Lindale–Tyler–Kilgore–Longview–Hallsville–Marshall (64, Eastland–Weatherford).
- **I-30:** Dallas–Mesquite–Rockwall–Royse City–Greenville–Sulphur Springs–Mount Vernon–Mount Pleasant–New Boston–Texarkana (38). **I-27:** Lubbock–Plainview–Tulia–Canyon–Amarillo (43). **I-40:** Tucumcari, New Mexico–Vega–Amarillo–McLean–Shamrock–Elk City, Oklahoma (72, Tucumcari–Vega).
- **US-287:** Fort Worth–Decatur–Bowie–Henrietta–Wichita Falls–Electra–Vernon–Quanah–Childress–Memphis–Clarendon–Claude–Amarillo–Dumas–Stratford–Boise City, Oklahoma (46).
- **US-59 (I-69):** Laredo–Freer–George West–Beeville–Goliad–Victoria–Edna–El Campo–Rosenberg–Sugar Land–Houston–Humble–Shepherd–Livingston–Diboll–Lufkin–Nacogdoches–Garrison–Carthage–Marshall–Jefferson–Atlanta–Texarkana (60). **US-77 (I-69E):** Victoria–Refugio–Sinton–Robstown–Kingsville–Sarita–Raymondville–Harlingen–Brownsville (51).
- **US-83:** Brownsville–Harlingen–McAllen–Mission–Rio Grande City–Zapata–San Ygnacio–Laredo (45) and Laredo–Carrizo Springs–Crystal City–Uvalde–Leakey–Junction–Menard–Eden–Ballinger–Abilene (74).
- **US-90 and the Sunset Route:** San Antonio–Castroville–Hondo–Uvalde–Brackettville–Del Rio–Sanderson–Marathon–Alpine–Marfa–Van Horn–Sierra Blanca–El Paso (106, Del Rio–Sanderson).
- **US-281:** San Antonio–Pleasanton–George West–Alice–Falfurrias–Edinburg–McAllen (64) and San Antonio–Johnson City–Marble Falls–Burnet–Lampasas–Hamilton–Stephenville–Mineral Wells–Jacksboro–Wichita Falls (59).
- **US-290:** Houston–Prairie View–Hempstead–Brenham–Giddings–Elgin–Austin–Dripping Springs–Johnson City–Fredericksburg (43). **US-75:** Dallas–Plano–Allen–McKinney–Sherman–Denison–Durant, Oklahoma (30).
- **US-82:** New Boston–Clarksville–Paris–Honey Grove–Bonham–Sherman–Whitesboro–Gainesville–Muenster–Nocona–Henrietta–Wichita Falls–Seymour–Guthrie–Spur–Ralls–Lubbock–Brownfield (62).
- Others checked: TX-6 Waco–Marlin–Hearne–College Station–Navasota–Hempstead–Houston; College Station–Caldwell–Rockdale–Taylor–Round Rock; Austin–Lockhart–Seguin–San Antonio; Galveston–Bolivar Peninsula–Port Arthur–Beaumont; Corpus Christi–Portland–Aransas Pass–Port Aransas; Corpus Christi–Padre Island National Seashore; Brownsville–Los Fresnos–South Padre Island.

**Into New Mexico and Oklahoma** (all open in both modes): El Paso–Las Cruces (43 mi) and Anthony–Las Cruces (I-10), El Paso–Sunland Park; El Paso–Guadalupe Mountains–Carlsbad (US-62/180, over Guadalupe Pass in Tough); Fort Stockton–Pecos–Carlsbad (US-285, 81); Pecos–Hobbs, Lubbock–Brownfield–Seminole–Hobbs (US-62/180), Andrews– and Denver City–Hobbs; Lubbock–Littlefield–Muleshoe–Farwell–Clovis (US-84 and the BNSF), Plainview–Hereford–Farwell–Clovis (US-70) and Hereford–Clovis; Vega–Tucumcari (I-40, 72); Amarillo–Dumas–Dalhart–Texline–Clayton (US-87) and Dumas–Stratford–Boise City (US-287), Dalhart–Boise City; Perryton– and Spearman–Guymon; Shamrock–Elk City and –Sayre (I-40); Perryton– and Canadian–Woodward; Vernon–Altus (US-283), Childress–Altus, Vernon–Frederick (US-183); Wichita Falls–Lawton (I-44's bridge), Burkburnett–Lawton; Bowie–Duncan (US-81); Gainesville–Ardmore and –Marietta (I-35's bridge); Sherman–, Denison– and Bonham–Durant (US-75 and TX-78); Denison–Kingston (Denison Dam); Paris–Hugo (US-271's bridge); Paris–, Clarksville–, Mount Pleasant– and Texarkana–Idabel. Of the 351 cross-border pairs within 70 mi, 2 are blocked in Gentle (Gainesville–Durant and Whitesboro–Atoka, along 8–11 mi of Lake Texoma) and 24 in Tough (Lake Texoma's, Ray Roberts's, Lewisville's and Wright Patman's crossings away from their bridges).

**Neighbours.** Texas's bays and bridges only touch lines with a Texas end; Oklahoma's and New Mexico's links between their own places are unchanged.

**Map quirks (not real crossings, so no bridge; rivers cost, they never block):**
- The map's **Rio Grande** wiggles across the straight lines Del Rio–Eagle Pass (5 crossings), Laredo–Zapata and El Paso–Socorro, where the real roads stay in Texas; and the lines El Paso–Socorro and Del Rio–Sanderson run a few miles over land the map counts as neither Texas nor Mexico ("along the shore").
- The map's **Brazos** runs 2–4 mi east of Waco's real river (see the bridges) and crosses Waco–Marlin near Marlin (the real TX-6 crosses at Waco); its **Trinity** and **Neches** cross several East Texas lines (Crockett–Madisonville, Mexia–Palestine, Crockett–Lufkin) 3–5 mi from the real bridges, so those pay for new ones.

### Checks (part B)

- **`node tools/check-pack.js TX`:** `TX: passed (150 stations, 249 towns, 0 city maps, 1 passes, 88 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js TX`:** `PASSED: 17 passed, 0 warnings, 0 failed`. The start is HOU, GALV and SGL; the test laid Houston–Galveston (54 mi of track, 1 train), bought Brazoria County (PRLD), and 25 passengers arrived in the week. Levels mode starts at level 1 (50 passengers, 5 counties, 10 containers).
- **Screenshots** (`test-out/TX/`): the levels view (zoomed on the start) shows Houston in the middle of Harris, Sugar Land by the map's Brazos and Galveston (port and scenic marks) at the island's east end, with Galveston and Trinity bays as water and the bridges' labels: the Galveston Causeway and the Bolivar ferry by Galveston, the Fred Hartman Bridge at the bay's head, the Trinity at Liberty and Wallisville, and the Brazos at Washington, Hempstead, San Felipe, Richmond and Sugar Land (the last two labels overlap at that zoom). The phone view shows the same with the Piney Woods' trees to the north and US-190 over Lake Livingston. The arcade and classic views show all of Texas: the desert biome in the Trans-Pecos, the Permian and the brush country, and the start's stations by the coast.

### For the main agent (part B)

1. **Counts:** 249 towns (230 and 19 scenic), 1 pass (Guadalupe Pass), 88 bridges, 5 bays. No station, start, level or biome changed.
2. **Unsure:** many bridge points are approximate (the map's rivers are simplified, so they sit on the map's river near the real crossing); the moderately known ones are marked above. Arlington could be size 4 (Long Beach, 466k, is 4; Mesa, 504k, is 4). Port Aransas–Corpus Christi is open across Corpus Christi Bay by the bridge-radius rule (above).
3. **Tough blocks** worth knowing: Alice–Pleasanton, Jasper–San Augustine, Athens–Waxahachie and Beeville–Rockport among neighbouring stations; Refugio–Rockport for a town.

## City maps

Four `metros` (10-12 stops each, one hub, no cable stops). Every stop is a real place at its real location (3 decimals, from my own knowledge of the places; no outside lookups). All stops are at least 1 mile apart and within 25 miles of the state map's main station (checked in code). Previews (`tools/build-terrain.js` in preview mode) were checked by eye and in code against the water shapes: no stop in water or within 250 m of it. The checker's "no hills and water yet" warnings are expected until the main agent builds the city terrain.

- **DLS, "Dallas–Fort Worth" (size 5, 12 stops, farthest Plano 17.6 mi).** Hub: Dallas Union Station (DART and Amtrak). Stops: Deep Ellum, Uptown, Love Field, Fair Park, Bishop Arts (Oak Cliff), SMU / Park Cities, DFW Airport, Las Colinas (Irving), Arlington Stadiums (AT&T Stadium and Globe Life Field district), Downtown Plano, UT Dallas (Richardson). **Fort Worth is left out**: its downtown is about 30 miles from Dallas Union Station, over the 25-mile limit, and it has its own main station on the state map.
- **HOU, "Houston" (size 5, 12 stops, farthest Johnson Space Center 21.8 mi).** Hub: the Amtrak station on Washington Avenue (downtown, 0.8 mi from the state map point), not a transit station. Stops: Midtown, Museum District, Texas Medical Center, University of Houston, The Heights, Galleria / Uptown, Hobby Airport, Bush Intercontinental Airport, Pasadena, Johnson Space Center, Sugar Land. Left out: Galveston, The Woodlands and Katy (over 25 mi), Rice University and Montrose (within a mile of other stops).
- **SA, "San Antonio" (size 5, 12 stops, farthest UTSA 13.7 mi).** Hub: Sunset Station (Amtrak and VIA). Stops: Market Square, The Pearl, Southtown, Frost Bank Center, Trinity University, UTSA, San Antonio Airport, Mission San Jose, Alamo Heights, South Texas Medical Center, Port San Antonio. The Alamo and the River Walk are left out as separate stops: they are under a mile from Sunset Station and Market Square, so Market Square stands for downtown.
- **ATX, "Austin" (size 4, 12 stops, farthest Cedar Park 16.9 mi).** Hub: the MetroRail Downtown Station (4th and Trinity), not the Amtrak station (it is in the east, Pleasant Valley Road). Stops: UT Austin, South Congress, The Domain, Austin-Bergstrom Airport, Zilker Park, Hyde Park, Circuit of the Americas, Round Rock, Cedar Park, Pflugerville, Mueller. Left out: San Marcos (over 25 mi), the State Capitol (under a mile from the hub).

Unsure: the stop points are my best positions for the places (a few hundred metres), not surveyed; Mission San Jose and Port San Antonio are the least exact.

- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
