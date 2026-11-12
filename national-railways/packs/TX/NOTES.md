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
