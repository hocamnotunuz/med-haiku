// National Railways pack: Tennessee.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests are. The county borders come from map.js and the mountains, lakes and
// rivers from terrain.js. What each field means: PACKS.md. Judgment calls and sources:
// packs/TN/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/TN/raw. Tennessee's
// 95 counties are 60 regions (merges in tools/build-map.js, STATES.TN).
NR.addPack({
  code: "TN",
  name: "Tennessee",
  // A game that starts here begins owning Shelby (Memphis), Tipton (Atoka) and Fayette-Hardeman
  // (Oakland), which all touch each other. Memphis and Atoka are metro and Oakland is farm, so the
  // first track (Atoka-Oakland, the nearest pair of different types) has riders; Memphis-Atoka
  // joins two metros, which carries nobody in "A type of place".
  start: ["tn-shelby", "tn-tipton", "tn-fayette-hardeman"],
  // Main stations: one per region, at its biggest place except where a comment says otherwise
  // (Columbia, Lebanon, Lafayette) and the downtown points noted (a Census point is the middle
  // of the city limits). id = the short code shown on passengers. county = region id in this
  // folder's map.js. pop = region population in thousands (2020 census). size = how busy (1 to
  // 5). level = which level unlocks it.
  stations: [
    // Level: west (West Tennessee: Memphis, the Delta and the Tennessee River)
    // Memphis (635,425; Shelby County 930k, the state's biggest region, size 4 like Louisville, Indianapolis and Kansas City). At the downtown riverfront by Beale Street (the Census point, 35.11, -89.97, is the middle of the city limits, 6 mi south-east): 7.9 mi from West Memphis in Arkansas. Graceland and Beale Street (scenic); Memphis International Airport (FedEx hub).
    { id: "MEM", name: "Memphis", county: "tn-shelby", lat: 35.14, lon: -90.04, airport: "Memphis International Airport", scenic: true, type: "metro", size: 4, pop: 930, main: true, level: "west" },
    // Atoka (10,013, ahead of Covington, 8,668, the seat, and Munford, 6,301): a Memphis exurb on US-51; the region 61k.
    { id: "ATO", name: "Atoka", county: "tn-tipton", lat: 35.43, lon: -89.78, type: "metro", size: 2, pop: 61, main: true, level: "west" },
    // Oakland (8,939, ahead of Bolivar, 5,199, Whiteville, 4,578 and Somerville, 3,425, the Fayette seat): the biggest place on US-64 and the Memphis side of the region; Bolivar and Somerville are towns; the two counties 67k.
    { id: "OKLD", name: "Oakland", county: "tn-fayette-hardeman", lat: 35.23, lon: -89.54, type: "farm", size: 2, pop: 67, main: true, level: "west" },
    // Dyersburg (16,167, ahead of Tiptonville, 3,984); the two counties 44k.
    { id: "DYER", name: "Dyersburg", county: "tn-dyer-lake", lat: 36.05, lon: -89.38, type: "farm", size: 2, pop: 44, main: true, level: "west" },
    // Union City (11,170, ahead of Martin, 10,825): the Obion seat and the railway town; the two counties 64k.
    { id: "UNCT", name: "Union City", county: "tn-obion-weakley", lat: 36.43, lon: -89.05, type: "farm", size: 2, pop: 64, main: true, level: "west" },
    // Brownsville (9,787, ahead of Ripley, 7,793 and Bells, 2,462): on I-40; the three counties 57k.
    { id: "BROW", name: "Brownsville", county: "tn-crockett-haywood-lauderdale", lat: 35.59, lon: -89.26, type: "farm", size: 2, pop: 57, main: true, level: "west" },
    // Jackson (68,215; Madison County 99k, size 2). At the downtown (the Census point is 35.65, -88.84, 3 mi north-west). On I-40.
    { id: "JKTN", name: "Jackson", county: "tn-madison", lat: 35.62, lon: -88.81, type: "metro", size: 2, pop: 99, main: true, level: "west" },
    // Milan (8,178, ahead of Humboldt, 7,880 and Medina, 5,129; Trenton, 4,241, is the Gibson seat); Gibson 50k.
    { id: "MILA", name: "Milan", county: "tn-gibson", lat: 35.91, lon: -88.75, type: "farm", size: 2, pop: 50, main: true, level: "west" },
    // Lexington (7,955, ahead of McKenzie, 5,541 and Huntingdon, 4,443): the Henderson seat on I-40; the two counties 56k.
    { id: "LXTN", name: "Lexington", county: "tn-carroll-henderson", lat: 35.64, lon: -88.38, type: "farm", size: 2, pop: 56, main: true, level: "west" },
    // Savannah (7,220, ahead of Henderson, 6,310 and Selmer, 4,459): the Hardin seat on the Tennessee River, by Shiloh; the three counties 70k.
    { id: "SAVA", name: "Savannah", county: "tn-chester-hardin-mcnairy", lat: 35.22, lon: -88.24, type: "farm", size: 2, pop: 70, main: true, level: "west" },
    // Paris (10,310, ahead of Camden, 3,674 and Dover, 1,827): the Henry seat (the Eiffel Tower replica); the three counties 62k.
    { id: "PRIS", name: "Paris", county: "tn-benton-henry-stewart", lat: 36.29, lon: -88.31, type: "farm", size: 2, pop: 62, main: true, level: "west" },
    // Level: middle (Middle Tennessee: Nashville, the Highland Rim and the Cumberland)
    // Nashville (Nashville-Davidson metropolitan government 689,454; Davidson County 716k, the state's second region, size 4 like Memphis). At the downtown on the Cumberland (the Census point, 36.17, -86.79, is 0.8 mi away). Music City: the Grand Ole Opry and Broadway (scenic); Nashville International Airport.
    { id: "NASH", name: "Nashville", county: "tn-davidson", lat: 36.16, lon: -86.78, airport: "Nashville International Airport", scenic: true, type: "metro", size: 4, pop: 716, main: true, level: "middle" },
    // Franklin (83,548, ahead of Brentwood, 45,378); Williamson County 248k, a Nashville suburb on I-65.
    { id: "FRIN", name: "Franklin", county: "tn-williamson", lat: 35.91, lon: -86.85, type: "metro", size: 2, pop: 248, main: true, level: "middle" },
    // Murfreesboro (152,784, ahead of Smyrna, 53,089 and La Vergne, 38,709): on I-24 and the old Nashville and Chattanooga line, Middle Tennessee State University; Rutherford County 341k (size 3).
    { id: "MFBO", name: "Murfreesboro", county: "tn-rutherford", lat: 35.85, lon: -86.42, type: "metro", size: 3, pop: 341, main: true, level: "middle" },
    // Hendersonville (61,788, ahead of Gallatin, 44,454, the Sumner seat): the biggest place, a Nashville suburb on Old Hickory Lake; the county 196k.
    { id: "HNDV", name: "Hendersonville", county: "tn-sumner", lat: 36.31, lon: -86.6, type: "metro", size: 2, pop: 196, main: true, level: "middle" },
    // Lebanon (38,484), not Mount Juliet (39,308, a Nashville commuter suburb 8 mi nearer the city, only 800 people bigger): Lebanon is the Wilson seat and I-40's market town, the middle of the county; Mount Juliet is a town; the county 148k.
    { id: "LBON", name: "Lebanon", county: "tn-wilson", lat: 36.2, lon: -86.34, type: "metro", size: 2, pop: 148, main: true, level: "middle" },
    // Clarksville (166,742; Montgomery County 220k, size 2; Fort Campbell is next door in Kentucky). At the downtown on the Cumberland (the Census point, 36.57, -87.35, is 2.7 mi north-east), on I-24.
    { id: "CLAE", name: "Clarksville", county: "tn-montgomery", lat: 36.53, lon: -87.36, type: "metro", size: 2, pop: 220, main: true, level: "middle" },
    // Springfield (18,783, ahead of White House, 13,008 and Greenbrier, 6,945): the Robertson seat on I-65 country; the county 73k.
    { id: "SPTN", name: "Springfield", county: "tn-robertson", lat: 36.49, lon: -86.87, type: "farm", size: 2, pop: 73, main: true, level: "middle" },
    // Ashland City (5,190, ahead of Pleasant View, 4,825): the Cheatham seat on the Cumberland; every neighbour is 50k or more, so Cheatham (41k) stays alone.
    { id: "ASCI", name: "Ashland City", county: "tn-cheatham", lat: 36.26, lon: -87.03, type: "farm", size: 1, pop: 41, main: true, level: "middle" },
    // Dickson (16,055, ahead of White Bluff, 3,863): on I-40, 35 mi west of Nashville; the county 54k.
    { id: "DCKS", name: "Dickson", county: "tn-dickson", lat: 36.06, lon: -87.37, type: "farm", size: 2, pop: 54, main: true, level: "middle" },
    // Waverly (4,306, ahead of Centerville, 3,525 and New Johnsonville, 1,805): the Humphreys seat, in the middle of the three counties; 52k.
    { id: "WAVE", name: "Waverly", county: "tn-hickman-houston-humphreys", lat: 36.09, lon: -87.78, type: "farm", size: 1, pop: 52, main: true, level: "middle" },
    // Columbia (41,724, the Maury seat: the Mule Capital), not Spring Hill (50,680, a Nashville-Franklin commuter city that straddles the Williamson line and is 14 mi from Franklin): Columbia is the middle of the county on I-65's US-31/US-412 hub; Spring Hill is a town; the county 101k.
    { id: "COLA", name: "Columbia", county: "tn-maury", lat: 35.62, lon: -87.04, type: "farm", size: 2, pop: 101, main: true, level: "middle" },
    // Lewisburg (12,306, ahead of Pulaski, 8,393, the Giles seat): the biggest place; the two counties 65k.
    { id: "LWSB", name: "Lewisburg", county: "tn-giles-marshall", lat: 35.45, lon: -86.79, type: "farm", size: 2, pop: 65, main: true, level: "middle" },
    // Fayetteville (7,075, the Lincoln seat; Lynchburg, the Moore seat, has no population in places.json: it is a town, with the Jack Daniel's distillery); the two counties 42k.
    { id: "FYTV", name: "Fayetteville", county: "tn-lincoln-moore", lat: 35.15, lon: -86.56, type: "farm", size: 1, pop: 42, main: true, level: "middle" },
    // Shelbyville (23,559, the Walking Horse Capital): Bedford County 50k.
    { id: "SHEE", name: "Shelbyville", county: "tn-bedford", lat: 35.5, lon: -86.45, type: "farm", size: 2, pop: 50, main: true, level: "middle" },
    // Lawrenceburg (11,638, ahead of Hohenwald, 3,668): the Lawrence seat on US-43/64; the two counties 57k.
    { id: "LWNC", name: "Lawrenceburg", county: "tn-lawrence-lewis", lat: 35.25, lon: -87.33, type: "farm", size: 2, pop: 57, main: true, level: "middle" },
    // Clifton (2,657, ahead of Waynesboro, 2,319 and Parsons, 2,101), on the Tennessee River; the three counties 36k.
    { id: "CLIF", name: "Clifton", county: "tn-decatur-perry-wayne", lat: 35.38, lon: -87.99, type: "farm", size: 1, pop: 36, main: true, level: "middle" },
    // Smithville (5,007, ahead of Woodbury, 2,702 and Carthage, 2,291): the DeKalb seat on Center Hill Lake; the three counties 54k.
    { id: "SMTH", name: "Smithville", county: "tn-cannon-dekalb-smith", lat: 35.96, lon: -85.82, type: "farm", size: 1, pop: 54, main: true, level: "middle" },
    // Lafayette (5,603), not Hartsville: places.json lists Hartsville/Trousdale County (11,609) with the whole county's population (the consolidated government; the town itself has about 2,300 people). Lafayette is the Macon seat and the biggest real town; Hartsville and Gainesboro are towns; the three counties 48k.
    { id: "LFYT", name: "Lafayette", county: "tn-jackson-macon-trousdale", lat: 36.52, lon: -86.03, type: "farm", size: 1, pop: 48, main: true, level: "middle" },
    // Cookeville (34,827), the Upper Cumberland's hub on I-40 and Tennessee Tech; Putnam County 80k.
    { id: "CKVL", name: "Cookeville", county: "tn-putnam", lat: 36.15, lon: -85.51, type: "farm", size: 2, pop: 80, main: true, level: "middle" },
    // Tullahoma (20,337, ahead of Manchester, 12,212): Arnold Air Force Base; Coffee County 58k.
    { id: "TULL", name: "Tullahoma", county: "tn-coffee", lat: 35.37, lon: -86.22, type: "farm", size: 2, pop: 58, main: true, level: "middle" },
    // Level: plateau (Chattanooga and the Cumberland Plateau)
    // Chattanooga (181,057; Hamilton County 366k, size 3). At the downtown on the Tennessee River by the Aquarium (the Census point, 35.07, -85.25, is 3.6 mi east). Lookout Mountain, Ruby Falls and the Tennessee Aquarium (scenic); Chattanooga Metropolitan Airport. Facing Georgia (later).
    { id: "CHTN", name: "Chattanooga", county: "tn-hamilton", lat: 35.05, lon: -85.31, airport: "Chattanooga Metropolitan Airport", scenic: true, type: "metro", size: 3, pop: 366, main: true, level: "plateau" },
    // Cleveland (47,807); Bradley County 109k, on I-75.
    { id: "CLVL", name: "Cleveland", county: "tn-bradley", lat: 35.18, lon: -84.87, type: "farm", size: 2, pop: 109, main: true, level: "plateau" },
    // Athens (14,084, ahead of Etowah, 3,601): the McMinn seat on I-75; the county 53k.
    { id: "ATHS", name: "Athens", county: "tn-mcminn", lat: 35.46, lon: -84.6, type: "farm", size: 2, pop: 53, main: true, level: "plateau" },
    // Dayton (7,069, ahead of Spring City, 1,944): the Rhea seat, the Scopes Trial town; the two counties 46k.
    { id: "DYTN", name: "Dayton", county: "tn-meigs-rhea", lat: 35.5, lon: -85.01, type: "farm", size: 2, pop: 46, main: true, level: "plateau" },
    // Sweetwater (6,414, ahead of Madisonville, 5,130, the Monroe seat, and Benton, 1,522, the Polk seat); the two counties 64k.
    { id: "SWTW", name: "Sweetwater", county: "tn-monroe-polk", lat: 35.6, lon: -84.47, type: "farm", size: 2, pop: 64, main: true, level: "plateau" },
    // Dunlap (5,356, ahead of Jasper, 3,613 and South Pittsburg, 3,102): the Sequatchie seat, in the middle of the Sequatchie Valley; the three counties 60k.
    { id: "DNLP", name: "Dunlap", county: "tn-bledsoe-marion-sequatchie", lat: 35.37, lon: -85.39, type: "mountain", size: 1, pop: 60, main: true, level: "plateau" },
    // Winchester (9,372, ahead of Decherd, 2,377): the Franklin seat on Tims Ford Lake; the two counties 56k.
    { id: "WNCT", name: "Winchester", county: "tn-franklin-grundy", lat: 35.19, lon: -86.1, type: "farm", size: 2, pop: 56, main: true, level: "plateau" },
    // McMinnville (13,780, the Warren seat, the Nursery Capital of the World, ahead of Sparta, 4,994); the three counties 74k.
    { id: "MCMN", name: "McMinnville", county: "tn-van-buren-warren-white", lat: 35.69, lon: -85.78, type: "farm", size: 2, pop: 74, main: true, level: "plateau" },
    // Crossville (12,056), on the Cumberland Plateau at I-40 and US-127; Cumberland County 61k.
    { id: "CRSV", name: "Crossville", county: "tn-cumberland", lat: 35.95, lon: -85.03, type: "mountain", size: 2, pop: 61, main: true, level: "plateau" },
    // Livingston (3,902, ahead of Celina, 1,418 and Byrdstown, 792): the Overton seat; the three counties 35k.
    { id: "LVGT", name: "Livingston", county: "tn-clay-overton-pickett", lat: 36.39, lon: -85.33, type: "farm", size: 1, pop: 35, main: true, level: "plateau" },
    // Oneida (3,788, ahead of Jamestown, 2,018 and Wartburg, 910): the Scott County town on US-27 by Big South Fork; the three counties 61k.
    { id: "ONDA", name: "Oneida", county: "tn-fentress-morgan-scott", lat: 36.52, lon: -84.51, type: "mountain", size: 1, pop: 61, main: true, level: "plateau" },
    // Level: east (East Tennessee: Knoxville, the Smokies and the Tri-Cities)
    // Knoxville (190,682; Knox County 479k, size 3). At the downtown on the Tennessee (the Census point, 35.97, -83.95, is 1.8 mi west; the University of Tennessee is next to it). McGhee Tyson Airport is in Alcoa (Blount County), on Knoxville's metro.
    { id: "KNX", name: "Knoxville", county: "tn-knox", lat: 35.96, lon: -83.92, airport: "McGhee Tyson Airport", type: "metro", size: 3, pop: 479, main: true, level: "east" },
    // Maryville (31,912, ahead of Alcoa, 10,966): the Blount seat, at the Smokies' foot; the county 135k.
    { id: "MRYV", name: "Maryville", county: "tn-blount", lat: 35.75, lon: -83.98, type: "metro", size: 2, pop: 135, main: true, level: "east" },
    // Oak Ridge (31,401, ahead of Clinton, 10,048, the Anderson seat): the Manhattan Project city and Oak Ridge National Laboratory; the county 77k.
    { id: "OKRG", name: "Oak Ridge", county: "tn-anderson", lat: 35.97, lon: -84.29, type: "metro", size: 2, pop: 77, main: true, level: "east" },
    // Lenoir City (10,118, ahead of Loudon, 5,993, the Loudon seat): on I-75/I-40; the county 55k.
    { id: "LNCT", name: "Lenoir City", county: "tn-loudon", lat: 35.82, lon: -84.28, type: "farm", size: 2, pop: 55, main: true, level: "east" },
    // Kingston (5,948, the Roane seat, ahead of Harriman, 5,942 and Rockwood, 5,443), at the Clinch and Tennessee rivers; the county 53k.
    { id: "KGST", name: "Kingston", county: "tn-roane", lat: 35.87, lon: -84.5, type: "farm", size: 2, pop: 53, main: true, level: "east" },
    // La Follette (7,433, ahead of Maynardville, 2,460 and Jacksboro, 2,304, the Campbell seat): on Norris Lake and the Cumberland Mountains; the two counties 59k.
    { id: "LAFL", name: "La Follette", county: "tn-campbell-union", lat: 36.37, lon: -84.13, type: "mountain", size: 2, pop: 59, main: true, level: "east" },
    // Harrogate (4,393, ahead of Bean Station, 2,961 and New Tazewell, 2,774): by Cumberland Gap on US-25E (Lincoln Memorial University); the three counties 62k.
    { id: "HRGT", name: "Harrogate", county: "tn-claiborne-grainger-hancock", lat: 36.58, lon: -83.65, type: "mountain", size: 2, pop: 62, main: true, level: "east" },
    // Jefferson City (8,413, ahead of Dandridge, 3,352): Carson-Newman University; the county 55k.
    { id: "JFCT", name: "Jefferson City", county: "tn-jefferson", lat: 36.12, lon: -83.48, type: "farm", size: 2, pop: 55, main: true, level: "east" },
    // Newport (6,859): the Cocke seat on the French Broad and I-40; all four neighbours are 50k or more, so Cocke (36k) stays alone.
    { id: "NWPR", name: "Newport", county: "tn-cocke", lat: 35.96, lon: -83.2, type: "mountain", size: 1, pop: 36, main: true, level: "east" },
    // Sevierville (17,880, ahead of Pigeon Forge, 6,404 and Gatlinburg, 3,573): the seat (Dolly Parton's home town); Pigeon Forge and Gatlinburg are scenic towns; the county 98k.
    { id: "SVRV", name: "Sevierville", county: "tn-sevier", lat: 35.89, lon: -83.58, type: "mountain", size: 2, pop: 98, main: true, level: "east" },
    // Morristown (30,448): Hamblen County 65k, on I-81.
    { id: "MRST", name: "Morristown", county: "tn-hamblen", lat: 36.2, lon: -83.3, type: "farm", size: 2, pop: 65, main: true, level: "east" },
    // Greeneville (15,488, ahead of Tusculum, 3,298): Andrew Johnson's town; Greene County 70k.
    { id: "GRVL", name: "Greeneville", county: "tn-greene", lat: 36.17, lon: -82.82, type: "farm", size: 2, pop: 70, main: true, level: "east" },
    // Church Hill (7,006, ahead of Mount Carmel, 5,479 and Rogersville, 4,670, the Hawkins seat); the county 57k.
    { id: "CHHL", name: "Church Hill", county: "tn-hawkins", lat: 36.52, lon: -82.71, type: "farm", size: 2, pop: 57, main: true, level: "east" },
    // Kingsport (55,446, ahead of Bristol, 27,132); Sullivan County 158k.
    { id: "KGSP", name: "Kingsport", county: "tn-sullivan", lat: 36.52, lon: -82.54, type: "metro", size: 2, pop: 158, main: true, level: "east" },
    // Johnson City (71,062; Washington County 133k). At the downtown (the Census point, 36.34, -82.38, is 2.7 mi north-west); East Tennessee State University.
    { id: "JOCY", name: "Johnson City", county: "tn-washington", lat: 36.31, lon: -82.35, type: "metro", size: 2, pop: 133, main: true, level: "east" },
    // Elizabethton (14,545): the Carter seat on the Doe and Watauga rivers; the county 56k.
    { id: "ELZB", name: "Elizabethton", county: "tn-carter", lat: 36.34, lon: -82.24, type: "mountain", size: 2, pop: 56, main: true, level: "east" },
    // Erwin (6,082, ahead of Unicoi, 3,830): on I-26 and the Nolichucky; all three neighbours are 50k or more, so Unicoi (18k) stays alone.
    { id: "ERWN", name: "Erwin", county: "tn-unicoi", lat: 36.15, lon: -82.41, type: "mountain", size: 1, pop: 18, main: true, level: "east" },
    // Mountain City (2,414): Johnson County (18k) is walled in by mountains, with only Carter and Sullivan as neighbours; stays alone.
    { id: "MTCY", name: "Mountain City", county: "tn-johnson", lat: 36.47, lon: -81.8, type: "mountain", size: 1, pop: 18, main: true, level: "east" },
  ],
  // Towns: about 1.5 per region, the next-biggest real places, plus scenic ones.
  towns: [
    // Anderson
    // Clinton: the Anderson seat.
    { id: "CLI", name: "Clinton", county: "tn-anderson", lat: 36.1, lon: -84.13, type: "farm", size: 1 },
    // Bedford
    { id: "WRTR", name: "Wartrace", county: "tn-bedford", lat: 35.53, lon: -86.33, type: "farm", size: 1 },
    // Benton-Henry-Stewart
    { id: "CMD", name: "Camden", county: "tn-benton-henry-stewart", lat: 36.07, lon: -88.1, type: "farm", size: 1 },
    // Dover: Fort Donelson National Battlefield (scenic), taken by Grant in February 1862.
    { id: "DOVR", name: "Dover", county: "tn-benton-henry-stewart", lat: 36.48, lon: -87.84, scenic: true, type: "farm", size: 1 },
    // Bledsoe-Marion-Sequatchie
    { id: "JSP", name: "Jasper", county: "tn-bledsoe-marion-sequatchie", lat: 35.07, lon: -85.62, type: "mountain", size: 1 },
    { id: "SPTB", name: "South Pittsburg", county: "tn-bledsoe-marion-sequatchie", lat: 35.01, lon: -85.72, type: "farm", size: 1 },
    { id: "PIK", name: "Pikeville", county: "tn-bledsoe-marion-sequatchie", lat: 35.62, lon: -85.19, type: "farm", size: 1 },
    // Blount
    // Alcoa: Alcoa's aluminum works and McGhee Tyson Airport.
    { id: "ALCO", name: "Alcoa", county: "tn-blount", lat: 35.81, lon: -83.97, type: "metro", size: 1 },
    // Townsend: the quiet side of the Great Smoky Mountains.
    { id: "TWNS", name: "Townsend", county: "tn-blount", lat: 35.68, lon: -83.75, type: "mountain", size: 1 },
    // Bradley
    // Charleston: nudged 1 km west into Bradley (the Census point is on the Hiwassee River at the county line).
    { id: "CHAN", name: "Charleston", county: "tn-bradley", lat: 35.28, lon: -84.77, type: "farm", size: 1 },
    // Campbell-Union
    // Jellico: on I-75 at the Kentucky line.
    { id: "JLCO", name: "Jellico", county: "tn-campbell-union", lat: 36.57, lon: -84.12, type: "mountain", size: 1 },
    { id: "MYNV", name: "Maynardville", county: "tn-campbell-union", lat: 36.25, lon: -83.81, type: "farm", size: 1 },
    // Cannon-DeKalb-Smith
    { id: "WDBR", name: "Woodbury", county: "tn-cannon-dekalb-smith", lat: 35.82, lon: -86.07, type: "farm", size: 1 },
    { id: "CART", name: "Carthage", county: "tn-cannon-dekalb-smith", lat: 36.26, lon: -85.94, type: "farm", size: 1 },
    // Carroll-Henderson
    { id: "MCKZ", name: "McKenzie", county: "tn-carroll-henderson", lat: 36.14, lon: -88.51, type: "farm", size: 1 },
    { id: "HNTD", name: "Huntingdon", county: "tn-carroll-henderson", lat: 36.01, lon: -88.42, type: "farm", size: 1 },
    // Carter
    // Roan Mountain: Roan Mountain's rhododendron gardens and the Appalachian Trail balds (scenic); a place with no population in places.json.
    { id: "RNMT", name: "Roan Mountain", county: "tn-carter", lat: 36.19, lon: -82.07, scenic: true, type: "mountain", size: 1 },
    // Cheatham
    { id: "PLE", name: "Pleasant View", county: "tn-cheatham", lat: 36.39, lon: -87.05, type: "farm", size: 1 },
    { id: "KNSP", name: "Kingston Springs", county: "tn-cheatham", lat: 36.08, lon: -87.11, type: "farm", size: 1 },
    // Chester-Hardin-McNairy
    // Henderson: the Chester seat.
    { id: "HEN", name: "Henderson", county: "tn-chester-hardin-mcnairy", lat: 35.44, lon: -88.66, type: "farm", size: 1 },
    { id: "SLMR", name: "Selmer", county: "tn-chester-hardin-mcnairy", lat: 35.17, lon: -88.6, type: "farm", size: 1 },
    // Shiloh: Shiloh National Military Park, the April 1862 battlefield on the Tennessee River (scenic).
    { id: "SHLO", name: "Shiloh", county: "tn-chester-hardin-mcnairy", lat: 35.11, lon: -88.36, scenic: true, type: "farm", size: 1 },
    // Claiborne-Grainger-Hancock
    // Tazewell: the Claiborne seat.
    { id: "TZWL", name: "Tazewell", county: "tn-claiborne-grainger-hancock", lat: 36.46, lon: -83.57, type: "farm", size: 1 },
    { id: "BEAN", name: "Bean Station", county: "tn-claiborne-grainger-hancock", lat: 36.34, lon: -83.29, type: "farm", size: 1 },
    // Clay-Overton-Pickett
    // Celina: the Clay seat, by Dale Hollow Lake.
    { id: "EVLN", name: "Celina", county: "tn-clay-overton-pickett", lat: 36.55, lon: -85.5, type: "farm", size: 1 },
    { id: "BYRD", name: "Byrdstown", county: "tn-clay-overton-pickett", lat: 36.57, lon: -85.13, type: "farm", size: 1 },
    // Cocke
    { id: "PRTV", name: "Parrottsville", county: "tn-cocke", lat: 36.01, lon: -83.09, type: "farm", size: 1 },
    // Coffee
    // Manchester: 12,212, on I-24, by the Bonnaroo festival grounds.
    { id: "MANR", name: "Manchester", county: "tn-coffee", lat: 35.46, lon: -86.07, type: "farm", size: 1 },
    // Crockett-Haywood-Lauderdale
    { id: "RPLY", name: "Ripley", county: "tn-crockett-haywood-lauderdale", lat: 35.75, lon: -89.53, type: "farm", size: 1 },
    { id: "ALAM", name: "Alamo", county: "tn-crockett-haywood-lauderdale", lat: 35.78, lon: -89.12, type: "farm", size: 1 },
    // Cumberland
    { id: "CBOR", name: "Crab Orchard", county: "tn-cumberland", lat: 35.91, lon: -84.88, type: "farm", size: 1 },
    // Davidson
    { id: "BLMD", name: "Belle Meade", county: "tn-davidson", lat: 36.1, lon: -86.86, type: "metro", size: 1 },
    // Decatur-Perry-Wayne
    { id: "PRNS", name: "Parsons", county: "tn-decatur-perry-wayne", lat: 35.65, lon: -88.12, type: "farm", size: 1 },
    { id: "WYNB", name: "Waynesboro", county: "tn-decatur-perry-wayne", lat: 35.32, lon: -87.76, type: "farm", size: 1 },
    // Dickson
    { id: "WTBL", name: "White Bluff", county: "tn-dickson", lat: 36.1, lon: -87.21, type: "farm", size: 1 },
    // Dyer-Lake
    // Tiptonville: the gateway to Reelfoot Lake, formed by the 1811-12 New Madrid earthquakes (scenic).
    { id: "TPVL", name: "Tiptonville", county: "tn-dyer-lake", lat: 36.38, lon: -89.48, scenic: true, type: "farm", size: 1 },
    { id: "NWBN", name: "Newbern", county: "tn-dyer-lake", lat: 36.12, lon: -89.27, type: "farm", size: 1 },
    // Fayette-Hardeman
    { id: "BOLI", name: "Bolivar", county: "tn-fayette-hardeman", lat: 35.26, lon: -89.01, type: "farm", size: 1 },
    { id: "SMRV", name: "Somerville", county: "tn-fayette-hardeman", lat: 35.23, lon: -89.38, type: "farm", size: 1 },
    // Fentress-Morgan-Scott
    // Jamestown: the Fentress seat.
    { id: "JMTN", name: "Jamestown", county: "tn-fentress-morgan-scott", lat: 36.43, lon: -84.93, type: "mountain", size: 1 },
    // Wartburg: the Morgan seat, by Frozen Head State Park.
    { id: "WRTB", name: "Wartburg", county: "tn-fentress-morgan-scott", lat: 36.1, lon: -84.59, type: "mountain", size: 1 },
    // Franklin-Grundy
    // Monteagle: on the Cumberland Plateau at I-24's Monteagle grade.
    { id: "MNTG", name: "Monteagle", county: "tn-franklin-grundy", lat: 35.24, lon: -85.85, type: "mountain", size: 1 },
    { id: "ESPG", name: "Estill Springs", county: "tn-franklin-grundy", lat: 35.26, lon: -86.13, type: "farm", size: 1 },
    // Gibson
    { id: "HUMB", name: "Humboldt", county: "tn-gibson", lat: 35.83, lon: -88.9, type: "farm", size: 1 },
    { id: "TREN", name: "Trenton", county: "tn-gibson", lat: 35.97, lon: -88.95, type: "farm", size: 1 },
    // Giles-Marshall
    { id: "PLSK", name: "Pulaski", county: "tn-giles-marshall", lat: 35.19, lon: -87.03, type: "farm", size: 1 },
    { id: "CHPH", name: "Chapel Hill", county: "tn-giles-marshall", lat: 35.63, lon: -86.7, type: "farm", size: 1 },
    // Greene
    { id: "MSHM", name: "Mosheim", county: "tn-greene", lat: 36.2, lon: -82.97, type: "farm", size: 1 },
    // Hamblen
    // Russellville: a place with no population in places.json (a CDP).
    { id: "RSLV", name: "Russellville", county: "tn-hamblen", lat: 36.26, lon: -83.2, type: "farm", size: 1 },
    // Hamilton
    { id: "GRVN", name: "East Ridge", county: "tn-hamilton", lat: 35, lon: -85.23, type: "metro", size: 2 },
    { id: "SDDS", name: "Soddy-Daisy", county: "tn-hamilton", lat: 35.26, lon: -85.17, type: "metro", size: 1 },
    // Hawkins
    // Rogersville: the Hawkins seat.
    { id: "RGVL", name: "Rogersville", county: "tn-hawkins", lat: 36.41, lon: -83, type: "farm", size: 1 },
    // Hickman-Houston-Humphreys
    { id: "CENE", name: "Centerville", county: "tn-hickman-houston-humphreys", lat: 35.83, lon: -87.44, type: "farm", size: 1 },
    { id: "NJVL", name: "New Johnsonville", county: "tn-hickman-houston-humphreys", lat: 36.02, lon: -87.97, type: "farm", size: 1 },
    // Jackson-Macon-Trousdale
    // Hartsville: the Trousdale seat on the Cumberland.
    { id: "HRTV", name: "Hartsville", county: "tn-jackson-macon-trousdale", lat: 36.39, lon: -86.16, type: "farm", size: 1 },
    { id: "GNSB", name: "Gainesboro", county: "tn-jackson-macon-trousdale", lat: 36.36, lon: -85.65, type: "farm", size: 1 },
    // Jefferson
    { id: "DNDG", name: "Dandridge", county: "tn-jefferson", lat: 36.03, lon: -83.43, type: "farm", size: 1 },
    // Johnson
    // Butler: a place with no population in places.json (a CDP), on Watauga Lake.
    { id: "BTLR", name: "Butler", county: "tn-johnson", lat: 36.36, lon: -82.04, type: "mountain", size: 1 },
    // Knox
    { id: "FRGT", name: "Farragut", county: "tn-knox", lat: 35.88, lon: -84.18, type: "metro", size: 2 },
    // Powell: a place with no population in places.json (a CDP), north of Knoxville on I-75.
    { id: "PWLL", name: "Powell", county: "tn-knox", lat: 36.04, lon: -84.03, type: "metro", size: 1 },
    // Lawrence-Lewis
    { id: "HHWD", name: "Hohenwald", county: "tn-lawrence-lewis", lat: 35.55, lon: -87.55, type: "farm", size: 1 },
    // Lincoln-Moore
    // Lynchburg: the Jack Daniel's distillery, Tennessee's best-known whiskey (scenic). places.json lists it under its metropolitan-government name, with no population.
    { id: "LYNB", name: "Lynchburg", county: "tn-lincoln-moore", lat: 35.29, lon: -86.36, scenic: true, type: "farm", size: 1 },
    // Loudon
    // Loudon: the Loudon seat.
    { id: "LDON", name: "Loudon", county: "tn-loudon", lat: 35.74, lon: -84.36, type: "farm", size: 1 },
    // Madison
    // Pinson: a place with no population in places.json (a CDP), on US-45 south of Jackson.
    { id: "PNSN", name: "Pinson", county: "tn-madison", lat: 35.48, lon: -88.74, type: "farm", size: 1 },
    { id: "THWY", name: "Three Way", county: "tn-madison", lat: 35.77, lon: -88.86, type: "farm", size: 1 },
    // Maury
    // Spring Hill: 50,680, a Nashville-Franklin commuter city.
    { id: "SPHI", name: "Spring Hill", county: "tn-maury", lat: 35.75, lon: -86.92, type: "metro", size: 2 },
    { id: "MNTP", name: "Mount Pleasant", county: "tn-maury", lat: 35.55, lon: -87.19, type: "farm", size: 1 },
    // McMinn
    { id: "ETWH", name: "Etowah", county: "tn-mcminn", lat: 35.34, lon: -84.53, type: "farm", size: 1 },
    // Meigs-Rhea
    { id: "SPCT", name: "Spring City", county: "tn-meigs-rhea", lat: 35.69, lon: -84.86, type: "farm", size: 1 },
    // Monroe-Polk
    // Madisonville: the Monroe seat.
    { id: "MADE", name: "Madisonville", county: "tn-monroe-polk", lat: 35.52, lon: -84.36, type: "farm", size: 1 },
    // Benton: the Polk seat, by the Ocoee River.
    { id: "BEN", name: "Benton", county: "tn-monroe-polk", lat: 35.17, lon: -84.65, type: "mountain", size: 1 },
    // Obion-Weakley
    { id: "MARN", name: "Martin", county: "tn-obion-weakley", lat: 36.34, lon: -88.85, type: "farm", size: 1 },
    { id: "DRSD", name: "Dresden", county: "tn-obion-weakley", lat: 36.28, lon: -88.7, type: "farm", size: 1 },
    // Putnam
    // Monterey: on the Cumberland Plateau at I-40's top.
    { id: "MNTR", name: "Monterey", county: "tn-putnam", lat: 36.14, lon: -85.26, type: "mountain", size: 1 },
    { id: "ALGD", name: "Algood", county: "tn-putnam", lat: 36.2, lon: -85.45, type: "farm", size: 1 },
    // Roane
    { id: "HRRM", name: "Harriman", county: "tn-roane", lat: 35.93, lon: -84.56, type: "farm", size: 1 },
    { id: "RKWD", name: "Rockwood", county: "tn-roane", lat: 35.87, lon: -84.67, type: "farm", size: 1 },
    // Robertson
    { id: "WHHS", name: "White House", county: "tn-robertson", lat: 36.46, lon: -86.67, type: "farm", size: 1 },
    // Rutherford
    { id: "SMYR", name: "Smyrna", county: "tn-rutherford", lat: 35.97, lon: -86.53, type: "metro", size: 2 },
    { id: "EGLV", name: "Eagleville", county: "tn-rutherford", lat: 35.74, lon: -86.65, type: "farm", size: 1 },
    // Sevier
    // Gatlinburg: the gateway to Great Smoky Mountains National Park (scenic).
    { id: "GTLB", name: "Gatlinburg", county: "tn-sevier", lat: 35.73, lon: -83.49, scenic: true, type: "mountain", size: 2 },
    // Pigeon Forge: Dollywood (scenic).
    { id: "PGFG", name: "Pigeon Forge", county: "tn-sevier", lat: 35.8, lon: -83.56, scenic: true, type: "mountain", size: 2 },
    // Shelby
    // Bartlett: a Memphis suburb (57,792).
    { id: "BRTL", name: "Bartlett", county: "tn-shelby", lat: 35.23, lon: -89.82, type: "metro", size: 2 },
    { id: "GRMT", name: "Germantown", county: "tn-shelby", lat: 35.08, lon: -89.78, type: "metro", size: 2 },
    { id: "CLRV", name: "Collierville", county: "tn-shelby", lat: 35.05, lon: -89.7, type: "metro", size: 2 },
    // Sullivan
    // Bristol: 27,132, the Tennessee half of Bristol, facing Bristol, Virginia (later).
    { id: "BRST", name: "Bristol", county: "tn-sullivan", lat: 36.56, lon: -82.22, type: "metro", size: 2 },
    // Sumner
    // Gallatin: the Sumner seat.
    { id: "GLLT", name: "Gallatin", county: "tn-sumner", lat: 36.38, lon: -86.47, type: "metro", size: 2 },
    { id: "GDLV", name: "Goodlettsville", county: "tn-sumner", lat: 36.33, lon: -86.7, type: "metro", size: 1 },
    // Tipton
    // Covington: the Tipton seat on US-51.
    { id: "COVG", name: "Covington", county: "tn-tipton", lat: 35.57, lon: -89.65, type: "farm", size: 1 },
    { id: "BRGH", name: "Brighton", county: "tn-tipton", lat: 35.48, lon: -89.74, type: "farm", size: 1 },
    // Unicoi
    { id: "UNCO", name: "Unicoi", county: "tn-unicoi", lat: 36.22, lon: -82.33, type: "mountain", size: 1 },
    // Van Buren-Warren-White
    { id: "SPRT", name: "Sparta", county: "tn-van-buren-warren-white", lat: 35.93, lon: -85.47, type: "farm", size: 1 },
    // Fall Creek Falls: Fall Creek Falls State Park, the eastern United States' tallest free-fall waterfall (256 ft; scenic), by Spencer. A well-known state park; the point is on the map by hand.
    { id: "FCFL", name: "Fall Creek Falls", county: "tn-van-buren-warren-white", lat: 35.66, lon: -85.35, scenic: true, type: "mountain", size: 1 },
    // Washington
    // Jonesborough: Tennessee's oldest town, the Washington seat.
    { id: "JNBR", name: "Jonesborough", county: "tn-washington", lat: 36.3, lon: -82.48, type: "farm", size: 1 },
    // Williamson
    { id: "BREN", name: "Brentwood", county: "tn-williamson", lat: 35.99, lon: -86.77, type: "metro", size: 2 },
    { id: "FAIW", name: "Fairview", county: "tn-williamson", lat: 35.98, lon: -87.13, type: "farm", size: 1 },
    // Wilson
    { id: "MTJL", name: "Mount Juliet", county: "tn-wilson", lat: 36.2, lon: -86.51, type: "metro", size: 2 },
  ],
  // City maps, keyed by their main station on the state map. hub = the main station's own stop
  // in the city, where riders change to and from trains. Sources in NOTES.md (City maps).
  metros: {
    NASH: {
      name: "Nashville",
      size: 4,
      stops: [
        { id: "RFS", name: "Riverfront Station", lat: 36.162, lon: -86.775, hub: true },
        { id: "GTN", name: "Germantown", lat: 36.178, lon: -86.79 },
        { id: "EAS", name: "East Nashville", lat: 36.177, lon: -86.742 },
        { id: "VAN", name: "Vanderbilt University", lat: 36.145, lon: -86.803 },
        { id: "TWS", name: "12 South", lat: 36.125, lon: -86.789 },
        { id: "GHL", name: "Green Hills", lat: 36.105, lon: -86.815 },
        { id: "BNA", name: "Airport", lat: 36.126, lon: -86.678 },
        { id: "OPR", name: "Opryland", lat: 36.207, lon: -86.693 },
        { id: "BRW", name: "Brentwood", lat: 36.033, lon: -86.783 },
        { id: "FRK", name: "Franklin", lat: 35.925, lon: -86.869 },
        { id: "HVL", name: "Hendersonville", lat: 36.305, lon: -86.62 },
      ],
    },
  },
  // Mountain passes: [name, latitude, longitude]. Real, well-known ones only (sources in NOTES.md).
  // Cumberland Gap is in Kentucky's pack. The Smokies and the Blue Ridge cross into North
  // Carolina (which comes later).
  passes: [
    ["Newfound Gap (US-441, Great Smoky Mountains)", 35.61, -83.43],
    ["Pigeon River Gorge (I-40, to North Carolina)", 35.78, -83.1],
    ["Sam's Gap (I-26, Unicoi-Madison)", 35.98, -82.6],
    ["Carver's Gap (Roan Mountain, TN-143)", 36.1, -82.11],
  ],
  // Real bridges: [name, latitude, longitude]. A river or lake crossed near one uses the real
  // bridge (cheaper, and any length); anywhere else you build a new one, if the water is narrow
  // enough. River bridges stand on the map's river where it passes the town. The Mississippi
  // crossing at Memphis matches Arkansas's pack (same name and point). Sources in NOTES.md.
  bridges: [
    // The Mississippi
    ["Hernando de Soto Bridge (I-40, Memphis–West Memphis)", 35.15, -90.08],
    ["Memphis & Arkansas Bridge (I-55, Memphis–West Memphis)", 35.12, -90.07],
    // The Tennessee
    ["Walnut Street Bridge (Chattanooga)", 35.06, -85.31],
    ["Henley Street Bridge (Knoxville)", 35.95, -83.92],
    ["Fort Loudoun Dam (US-321, Lenoir City)", 35.79, -84.24],
    ["Paris Landing Bridge (US-79, Kentucky Lake)", 36.39, -88.09],
    ["Tennessee River bridge (I-40, Kentucky Lake)", 36.01, -88],
    ["Tennessee River bridge (Savannah, TN-128)", 35.23, -88.27],
    // The Cumberland
    ["Cumberland River bridges (downtown Nashville)", 36.16, -86.77],
    ["Cumberland River bridge (Clarksville, US-79)", 36.53, -87.35],
    ["Cumberland City Bridge (TN-149, Lake Barkley)", 36.38, -87.64],
    ["Cumberland River bridge (Carthage, TN-53)", 36.25, -85.95],
    // The Duck, the Elk, the Clinch and the French Broad
    ["Duck River bridge (Columbia, US-31)", 35.62, -87.03],
    ["Duck River bridge (Shelbyville, US-231)", 35.49, -86.45],
    ["Elk River bridge (Fayetteville, US-64)", 35.15, -86.57],
    ["Clinch River bridge (Clinton, US-25W)", 36.1, -84.14],
    ["French Broad River bridge (Newport, US-25/70)", 35.96, -83.19],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills; dry = sand, cacti
  // or sagebrush. Regions not listed are green farmland (the Delta cotton and soybean fields, the
  // Nashville Basin, the Highland Rim farms, the Great Valley).
  biomes: {
    // The Smokies, the Unakas and the Cumberland Mountains
    forest: ["tn-sevier", "tn-johnson", "tn-unicoi", "tn-carter", "tn-campbell-union", "tn-fentress-morgan-scott", "tn-claiborne-grainger-hancock", "tn-monroe-polk"],
    // The rest of the hills: the Plateau, the Ridge and Valley, the Highland Rim and the lakes
    wooded: ["tn-blount", "tn-cocke", "tn-anderson", "tn-roane", "tn-greene", "tn-hawkins", "tn-washington", "tn-jefferson", "tn-hamilton", "tn-bradley", "tn-mcminn", "tn-meigs-rhea", "tn-bledsoe-marion-sequatchie", "tn-franklin-grundy", "tn-cumberland", "tn-van-buren-warren-white", "tn-cannon-dekalb-smith", "tn-clay-overton-pickett", "tn-putnam", "tn-jackson-macon-trousdale", "tn-hickman-houston-humphreys", "tn-decatur-perry-wayne", "tn-lawrence-lewis", "tn-benton-henry-stewart", "tn-chester-hardin-mcnairy", "tn-dickson", "tn-cheatham", "tn-loudon", "tn-lincoln-moore"],
  },
  levels: [
    {
      name: "Memphis & West Tennessee",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        // Memphis to Jackson, as I-40 runs
        { kind: "connect", a: "MEM", b: "JKTN" },
      ],
    },
    {
      name: "Nashville & Middle Tennessee",
      areas: ["middle"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Nashville to Murfreesboro, as I-24 runs
        { kind: "connect", a: "NASH", b: "MFBO" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "Chattanooga & the Cumberland Plateau",
      areas: ["plateau"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Nashville to Chattanooga, as I-24 runs over Monteagle
        { kind: "connect", a: "NASH", b: "CHTN" },
        { kind: "counties", target: 28 },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Knoxville, the Smokies & the Tri-Cities",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Knoxville to Johnson City, as I-40 and I-81 run
        { kind: "connect", a: "KNX", b: "JOCY" },
        { kind: "counties", target: 42 },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
});
