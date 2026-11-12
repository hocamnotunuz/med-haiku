// National Railways pack: Kansas.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/KS/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/KS/raw.
NR.addPack({
  code: "KS",
  name: "Kansas",
  // A game that starts here begins owning these counties: Kansas City's Kansas side (Overland
  // Park and Kansas City, Kansas) and Paola, down US-69. Wyandotte and Linn-Miami both touch
  // Johnson. Paola is farm, so the first track (Overland Park–Paola, the nearest pair of
  // different types) has riders.
  start: ["ks-johnson", "ks-wyandotte", "ks-linn-miami"],
  // Main stations: one per county region, at its biggest place (every one is; no exceptions).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. airport = its name, if it has a big one. scenic = a place
  // tourists travel to. Kansas has no seaport. Points are the Census points, except Overland
  // Park's, Kansas City's and Wichita's (moved to their downtowns: NOTES.md).
  stations: [
    // Level 1: Kansas City, Topeka and Lawrence
    // Overland Park: Johnson County's biggest city, Kansas City's southern suburbs (Olathe,
    // Lenexa, Shawnee), size 3 (as Colorado's Aurora and Lakewood beside Denver). At its downtown
    // (Santa Fe Drive and 80th Street); the Census point is 6.5 miles south.
    { id: "OPK", name: "Overland Park", county: "ks-johnson", lat: 38.98, lon: -94.67, type: "metro", size: 3, pop: 610, main: true, level: "east" },
    // Kansas City, Kansas: at its downtown (Minnesota Avenue, City Hall), by the mouth of the
    // Kansas River; the Census point is 6 miles west. Size 2 (as Topeka).
    { id: "KCK", name: "Kansas City", county: "ks-wyandotte", lat: 39.11, lon: -94.63, type: "metro", size: 2, pop: 169, main: true, level: "east" },
    // Leavenworth: Fort Leavenworth and Kansas City's northwest suburbs (Lansing, Basehor).
    { id: "LEAV", name: "Leavenworth", county: "ks-leavenworth", lat: 39.32, lon: -94.92, type: "metro", size: 2, pop: 82, main: true, level: "east" },
    // Lawrence: the University of Kansas, on the Kansas River and I-70.
    { id: "LAWR", name: "Lawrence", county: "ks-douglas", lat: 38.96, lon: -95.26, type: "metro", size: 2, pop: 119, main: true, level: "east" },
    // Topeka: the capital, on the Kansas River, I-70 and the BNSF (the Southwest Chief's stop).
    { id: "TOP", name: "Topeka", county: "ks-shawnee", lat: 39.03, lon: -95.69, type: "metro", size: 2, pop: 179, main: true, level: "east" },
    // Paola: the farm towns at Kansas City's south edge on US-69 (Louisburg, Osawatomie, La Cygne).
    { id: "PAOL", name: "Paola", county: "ks-linn-miami", lat: 38.58, lon: -94.86, type: "farm", size: 1, pop: 44, main: true, level: "east" },
    // Ottawa: on I-35 and the BNSF, southwest of Kansas City.
    { id: "OTWA", name: "Ottawa", county: "ks-anderson-franklin", lat: 38.6, lon: -95.26, type: "farm", size: 1, pop: 34, main: true, level: "east" },
    // Osage City: the biggest place (Burlington, Coffey County's seat, is a town); on the BNSF
    // line from Topeka to Emporia.
    { id: "OSGC", name: "Osage City", county: "ks-coffey-osage", lat: 38.63, lon: -95.82, type: "farm", size: 1, pop: 24, main: true, level: "east" },
    // Atchison: the Missouri River town (Amelia Earhart's birthplace).
    { id: "ATCH", name: "Atchison", county: "ks-atchison-doniphan", lat: 39.56, lon: -95.14, type: "farm", size: 1, pop: 24, main: true, level: "east" },
    { id: "HLTN", name: "Holton", county: "ks-jackson-jefferson", lat: 39.47, lon: -95.73, type: "farm", size: 1, pop: 32, main: true, level: "east" },
    { id: "HIAW", name: "Hiawatha", county: "ks-brown-nemaha", lat: 39.85, lon: -95.54, type: "farm", size: 1, pop: 20, main: true, level: "east" },
    // Wamego: on the Kansas River, US-24 and the Union Pacific, between Topeka and Manhattan.
    { id: "WAMG", name: "Wamego", county: "ks-pottawatomie-wabaunsee", lat: 39.21, lon: -96.31, type: "farm", size: 1, pop: 32, main: true, level: "east" },
    // Level 2: Wichita, the Flint Hills and the Southeast
    // Wichita: Kansas's biggest city, size 4 (as Omaha and Spokane). Its airport (Eisenhower
    // National) is the state's one big airport. At downtown (Old Town), east of the Arkansas; the
    // Census point is across the river, 0.8 miles west.
    { id: "ICT", name: "Wichita", county: "ks-sedgwick", lat: 37.69, lon: -97.33, airport: "Wichita Eisenhower National Airport", type: "metro", size: 4, pop: 524, main: true, level: "south" },
    // Andover: Butler County's biggest city, Wichita's east side (Augusta, Rose Hill), so metro.
    { id: "ANDV", name: "Andover", county: "ks-butler", lat: 37.69, lon: -97.13, type: "metro", size: 2, pop: 67, main: true, level: "south" },
    // Hutchinson: the Arkansas River city and the Southwest Chief's stop. The Cosmosphere (the
    // space museum) is downtown, so scenic.
    { id: "HUT", name: "Hutchinson", county: "ks-reno", lat: 38.07, lon: -97.91, scenic: true, type: "metro", size: 2, pop: 62, main: true, level: "south" },
    // Newton: the BNSF's junction (the Southwest Chief's stop) amid Mennonite farm country.
    { id: "NWTN", name: "Newton", county: "ks-harvey-marion", lat: 38.04, lon: -97.34, type: "farm", size: 1, pop: 46, main: true, level: "south" },
    // Emporia: Emporia State University, where I-35 meets the Kansas Turnpike, so metro.
    { id: "EMP", name: "Emporia", county: "ks-chase-lyon", lat: 38.4, lon: -96.19, type: "metro", size: 1, pop: 35, main: true, level: "south" },
    // Wellington: on I-35 (the Turnpike) and the BNSF toward Oklahoma.
    { id: "WLTN", name: "Wellington", county: "ks-harper-sumner", lat: 37.28, lon: -97.41, type: "farm", size: 1, pop: 28, main: true, level: "south" },
    // Arkansas City: the biggest place by 174 people (Winfield, the county seat, is a town).
    { id: "ARKC", name: "Arkansas City", county: "ks-chautauqua-cowley", lat: 37.07, lon: -97.04, type: "farm", size: 1, pop: 38, main: true, level: "south" },
    { id: "EURK", name: "Eureka", county: "ks-elk-greenwood-woodson", lat: 37.83, lon: -96.29, type: "farm", size: 1, pop: 12, main: true, level: "south" },
    // Coffeyville: the biggest place by 251 people (Independence is a town).
    { id: "CFV", name: "Coffeyville", county: "ks-montgomery-wilson", lat: 37.03, lon: -95.65, type: "farm", size: 1, pop: 40, main: true, level: "south" },
    { id: "PRSN", name: "Parsons", county: "ks-labette-neosho", lat: 37.33, lon: -95.27, type: "farm", size: 1, pop: 36, main: true, level: "south" },
    // Pittsburg: Pittsburg State University, southeast Kansas's city, so metro.
    { id: "PTS", name: "Pittsburg", county: "ks-cherokee-crawford", lat: 37.41, lon: -94.7, type: "metro", size: 1, pop: 58, main: true, level: "south" },
    // Fort Scott: the frontier fort (Fort Scott National Historic Site) is downtown, so scenic.
    { id: "FTSC", name: "Fort Scott", county: "ks-allen-bourbon", lat: 37.83, lon: -94.7, scenic: true, type: "farm", size: 1, pop: 27, main: true, level: "south" },
    // Level 3: Manhattan, Salina and the Smoky Hills
    // Manhattan: Kansas State University, where the Big Blue meets the Kansas River.
    { id: "MHK", name: "Manhattan", county: "ks-riley", lat: 39.19, lon: -96.61, type: "metro", size: 2, pop: 72, main: true, level: "central" },
    // Junction City: Fort Riley's city, where the Republican and Smoky Hill make the Kansas River.
    { id: "JCTY", name: "Junction City", county: "ks-geary-morris", lat: 39.03, lon: -96.85, type: "metro", size: 1, pop: 42, main: true, level: "central" },
    // Abilene: the old cattle-trail railhead; the Eisenhower Presidential Library is here, so
    // scenic.
    { id: "ABIL", name: "Abilene", county: "ks-clay-dickinson", lat: 38.92, lon: -97.23, scenic: true, type: "farm", size: 1, pop: 27, main: true, level: "central" },
    { id: "MRYS", name: "Marysville", county: "ks-marshall-washington", lat: 39.84, lon: -96.64, type: "farm", size: 1, pop: 16, main: true, level: "central" },
    // Salina: where I-70 meets I-135, central Kansas's city, so metro. Size 2 by its 47k (as
    // Grand Island).
    { id: "SLN", name: "Salina", county: "ks-saline", lat: 38.81, lon: -97.61, type: "metro", size: 2, pop: 54, main: true, level: "central" },
    { id: "MCPH", name: "McPherson", county: "ks-mcpherson-rice", lat: 38.37, lon: -97.66, type: "farm", size: 1, pop: 40, main: true, level: "central" },
    { id: "CONC", name: "Concordia", county: "ks-cloud-ottawa-republic", lat: 39.57, lon: -97.65, type: "farm", size: 1, pop: 19, main: true, level: "central" },
    { id: "BELO", name: "Beloit", county: "ks-jewell-mitchell", lat: 39.46, lon: -98.11, type: "farm", size: 1, pop: 9, main: true, level: "central" },
    { id: "SMTC", name: "Smith Center", county: "ks-osborne-smith", lat: 39.77, lon: -98.78, type: "farm", size: 1, pop: 7, main: true, level: "central" },
    { id: "RUSL", name: "Russell", county: "ks-ellsworth-lincoln-russell", lat: 38.89, lon: -98.85, type: "farm", size: 1, pop: 16, main: true, level: "central" },
    // Hays: Fort Hays State University, northwest Kansas's city, so metro.
    { id: "HYS", name: "Hays", county: "ks-ellis-rush", lat: 38.88, lon: -99.32, type: "metro", size: 1, pop: 32, main: true, level: "central" },
    { id: "GRBD", name: "Great Bend", county: "ks-barton-stafford", lat: 38.36, lon: -98.8, type: "farm", size: 1, pop: 30, main: true, level: "central" },
    // Level 4: Dodge City, Garden City and the High Plains
    { id: "PRAT", name: "Pratt", county: "ks-kingman-kiowa-pratt", lat: 37.7, lon: -98.77, type: "farm", size: 1, pop: 19, main: true, level: "west" },
    { id: "MEDL", name: "Medicine Lodge", county: "ks-barber-comanche", lat: 37.29, lon: -98.58, type: "farm", size: 1, pop: 6, main: true, level: "west" },
    { id: "LARN", name: "Larned", county: "ks-edwards-pawnee", lat: 38.18, lon: -99.1, type: "farm", size: 1, pop: 9, main: true, level: "west" },
    // Dodge City: the cattle town on the Arkansas; Boot Hill and Front Street are downtown, so
    // scenic. Farm (feedlots and meatpacking), with Garden City as the west's metro.
    { id: "DDC", name: "Dodge City", county: "ks-clark-ford-gray", lat: 37.76, lon: -100.02, scenic: true, type: "farm", size: 1, pop: 42, main: true, level: "west" },
    // Garden City: western Kansas's biggest city, so metro (as Nebraska's North Platte).
    { id: "GCK", name: "Garden City", county: "ks-finney-hamilton-kearny", lat: 37.98, lon: -100.85, type: "metro", size: 1, pop: 45, main: true, level: "west" },
    { id: "ULS", name: "Ulysses", county: "ks-grant-haskell-stanton", lat: 37.58, lon: -101.35, type: "farm", size: 1, pop: 13, main: true, level: "west" },
    { id: "HUGT", name: "Hugoton", county: "ks-morton-stevens", lat: 37.17, lon: -101.34, type: "farm", size: 1, pop: 8, main: true, level: "west" },
    // Liberal: the southwest corner's city, so metro (as Nebraska's Scottsbluff).
    { id: "LBL", name: "Liberal", county: "ks-meade-seward", lat: 37.05, lon: -100.93, type: "metro", size: 1, pop: 26, main: true, level: "west" },
    { id: "SCTY", name: "Scott City", county: "ks-greeley-scott-wichita", lat: 38.48, lon: -100.9, type: "farm", size: 1, pop: 9, main: true, level: "west" },
    { id: "NESS", name: "Ness City", county: "ks-hodgeman-lane-ness", lat: 38.45, lon: -99.9, type: "farm", size: 1, pop: 6, main: true, level: "west" },
    // Goodland: on I-70 by Colorado.
    { id: "GDLD", name: "Goodland", county: "ks-cheyenne-sherman-wallace", lat: 39.35, lon: -101.71, type: "farm", size: 1, pop: 10, main: true, level: "west" },
    { id: "COLB", name: "Colby", county: "ks-logan-rawlins-thomas", lat: 39.38, lon: -101.05, type: "farm", size: 1, pop: 13, main: true, level: "west" },
    { id: "NRTN", name: "Norton", county: "ks-decatur-norton", lat: 39.84, lon: -99.89, type: "farm", size: 1, pop: 8, main: true, level: "west" },
    { id: "HILC", name: "Hill City", county: "ks-graham-sheridan", lat: 39.37, lon: -99.84, type: "farm", size: 1, pop: 5, main: true, level: "west" },
    { id: "WAKN", name: "WaKeeney", county: "ks-gove-trego", lat: 39.02, lon: -99.88, type: "farm", size: 1, pop: 6, main: true, level: "west" },
    { id: "PHLB", name: "Phillipsburg", county: "ks-phillips-rooks", lat: 39.75, lon: -99.32, type: "farm", size: 1, pop: 10, main: true, level: "west" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor center (sources in NOTES.md).
  towns: [
    // Kansas City, Topeka and Lawrence
    // Olathe: Johnson County's seat and second city, size 2 (as Colorado's Arvada).
    { id: "OLTH", name: "Olathe", county: "ks-johnson", lat: 38.88, lon: -94.82, type: "metro", size: 2 },
    { id: "SHWN", name: "Shawnee", county: "ks-johnson", lat: 39.02, lon: -94.81, type: "metro", size: 2 },
    // Bonner Springs: on the Kansas River and I-70 at Kansas City's west edge.
    { id: "BNSP", name: "Bonner Springs", county: "ks-wyandotte", lat: 39.08, lon: -94.87, type: "metro", size: 1 },
    { id: "TONG", name: "Tonganoxie", county: "ks-leavenworth", lat: 39.11, lon: -95.08, type: "farm", size: 1 },
    // Eudora: on the Kansas River between Lawrence and Kansas City.
    { id: "EUDO", name: "Eudora", county: "ks-douglas", lat: 38.93, lon: -95.09, type: "farm", size: 1 },
    { id: "SILV", name: "Silver Lake", county: "ks-shawnee", lat: 39.1, lon: -95.86, type: "farm", size: 1 },
    { id: "LOUI", name: "Louisburg", county: "ks-linn-miami", lat: 38.62, lon: -94.68, type: "farm", size: 1 },
    { id: "PLSN", name: "Pleasanton", county: "ks-linn-miami", lat: 38.18, lon: -94.71, type: "farm", size: 1 },
    { id: "GRNE", name: "Garnett", county: "ks-anderson-franklin", lat: 38.29, lon: -95.24, type: "farm", size: 1 },
    // Burlington: Coffey County's seat, on US-75 and the Neosho.
    { id: "BRLN", name: "Burlington", county: "ks-coffey-osage", lat: 38.19, lon: -95.75, type: "farm", size: 1 },
    { id: "CRBD", name: "Carbondale", county: "ks-coffey-osage", lat: 38.82, lon: -95.69, type: "farm", size: 1 },
    { id: "TROY", name: "Troy", county: "ks-atchison-doniphan", lat: 39.79, lon: -95.09, type: "farm", size: 1 },
    // Wathena: by Elwood, across the Missouri from St. Joseph.
    { id: "WATH", name: "Wathena", county: "ks-atchison-doniphan", lat: 39.76, lon: -94.93, type: "farm", size: 1 },
    { id: "OSKA", name: "Oskaloosa", county: "ks-jackson-jefferson", lat: 39.22, lon: -95.31, type: "farm", size: 1 },
    { id: "SABE", name: "Sabetha", county: "ks-brown-nemaha", lat: 39.91, lon: -95.79, type: "farm", size: 1 },
    { id: "SENC", name: "Seneca", county: "ks-brown-nemaha", lat: 39.84, lon: -96.07, type: "farm", size: 1 },
    { id: "STMY", name: "St. Marys", county: "ks-pottawatomie-wabaunsee", lat: 39.19, lon: -96.06, type: "farm", size: 1 },
    // Alma: Wabaunsee County's seat, in the Flint Hills south of the Kansas River.
    { id: "ALMW", name: "Alma", county: "ks-pottawatomie-wabaunsee", lat: 39.02, lon: -96.29, type: "farm", size: 1 },
    // Wichita, the Flint Hills and the Southeast
    // Derby: Wichita's biggest suburb, size 2 (as Nebraska's Papillion).
    { id: "DRBY", name: "Derby", county: "ks-sedgwick", lat: 37.56, lon: -97.26, type: "metro", size: 2 },
    { id: "PKCY", name: "Park City", county: "ks-sedgwick", lat: 37.81, lon: -97.33, type: "metro", size: 1 },
    // El Dorado: Butler County's seat, the oil town on the Turnpike at the Flint Hills' edge.
    { id: "ELDO", name: "El Dorado", county: "ks-butler", lat: 37.82, lon: -96.86, type: "farm", size: 1 },
    { id: "AUGU", name: "Augusta", county: "ks-butler", lat: 37.7, lon: -96.97, type: "metro", size: 1 },
    { id: "BUHL", name: "Buhler", county: "ks-reno", lat: 38.14, lon: -97.77, type: "farm", size: 1 },
    { id: "HSTN", name: "Hesston", county: "ks-harvey-marion", lat: 38.14, lon: -97.43, type: "farm", size: 1 },
    { id: "HLSB", name: "Hillsboro", county: "ks-harvey-marion", lat: 38.35, lon: -97.2, type: "farm", size: 1 },
    { id: "CTWF", name: "Cottonwood Falls", county: "ks-chase-lyon", lat: 38.37, lon: -96.54, type: "farm", size: 1 },
    // Tallgrass Prairie National Preserve: the Flint Hills' tallgrass prairie, at the visitor
    // center on K-177 north of Strong City (approx.).
    { id: "TPNP", name: "Tallgrass Prairie National Preserve", county: "ks-chase-lyon", lat: 38.43, lon: -96.56, scenic: true, type: "farm", size: 1 },
    { id: "ANTH", name: "Anthony", county: "ks-harper-sumner", lat: 37.16, lon: -98.04, type: "farm", size: 1 },
    // Winfield: Cowley County's seat, 11,786 people (Arkansas City has 11,960).
    { id: "WINF", name: "Winfield", county: "ks-chautauqua-cowley", lat: 37.24, lon: -96.98, type: "farm", size: 1 },
    { id: "SEDN", name: "Sedan", county: "ks-chautauqua-cowley", lat: 37.13, lon: -96.18, type: "farm", size: 1 },
    { id: "YTSC", name: "Yates Center", county: "ks-elk-greenwood-woodson", lat: 37.87, lon: -95.75, type: "farm", size: 1 },
    { id: "HOWD", name: "Howard", county: "ks-elk-greenwood-woodson", lat: 37.47, lon: -96.26, type: "farm", size: 1 },
    { id: "INDP", name: "Independence", county: "ks-montgomery-wilson", lat: 37.23, lon: -95.71, type: "farm", size: 1 },
    { id: "FRED", name: "Fredonia", county: "ks-montgomery-wilson", lat: 37.53, lon: -95.82, type: "farm", size: 1 },
    { id: "CHNU", name: "Chanute", county: "ks-labette-neosho", lat: 37.67, lon: -95.46, type: "farm", size: 1 },
    { id: "OSWG", name: "Oswego", county: "ks-labette-neosho", lat: 37.17, lon: -95.11, type: "farm", size: 1 },
    { id: "CLBS", name: "Columbus", county: "ks-cherokee-crawford", lat: 37.17, lon: -94.84, type: "farm", size: 1 },
    { id: "BXSP", name: "Baxter Springs", county: "ks-cherokee-crawford", lat: 37.02, lon: -94.73, type: "farm", size: 1 },
    { id: "IOLA", name: "Iola", county: "ks-allen-bourbon", lat: 37.93, lon: -95.4, type: "farm", size: 1 },
    // Manhattan, Salina and the Smoky Hills
    // Ogden: by Fort Riley, between Manhattan and Junction City.
    { id: "OGDN", name: "Ogden", county: "ks-riley", lat: 39.11, lon: -96.7, type: "farm", size: 1 },
    { id: "CGRV", name: "Council Grove", county: "ks-geary-morris", lat: 38.66, lon: -96.49, type: "farm", size: 1 },
    { id: "CLCT", name: "Clay Center", county: "ks-clay-dickinson", lat: 39.38, lon: -97.13, type: "farm", size: 1 },
    // Herington: in Dickinson County at the Morris line (places.json tags it Morris: its point is
    // 7 miles east of the town; NOTES.md).
    { id: "HRNG", name: "Herington", county: "ks-clay-dickinson", lat: 38.67, lon: -96.94, type: "farm", size: 1 },
    { id: "WASH", name: "Washington", county: "ks-marshall-washington", lat: 39.82, lon: -97.05, type: "farm", size: 1 },
    { id: "BRKV", name: "Brookville", county: "ks-saline", lat: 38.77, lon: -97.86, type: "farm", size: 1 },
    // Lindsborg: "Little Sweden", the Swedish-settled town in the Smoky Hill valley, so scenic.
    { id: "LIND", name: "Lindsborg", county: "ks-mcpherson-rice", lat: 38.58, lon: -97.67, scenic: true, type: "farm", size: 1 },
    { id: "LYON", name: "Lyons", county: "ks-mcpherson-rice", lat: 38.35, lon: -98.2, type: "farm", size: 1 },
    { id: "BLVL", name: "Belleville", county: "ks-cloud-ottawa-republic", lat: 39.82, lon: -97.63, type: "farm", size: 1 },
    { id: "MNPL", name: "Minneapolis", county: "ks-cloud-ottawa-republic", lat: 39.12, lon: -97.7, type: "farm", size: 1 },
    { id: "MANK", name: "Mankato", county: "ks-jewell-mitchell", lat: 39.79, lon: -98.21, type: "farm", size: 1 },
    // Cawker City: the World's Largest Ball of Twine, by Waconda Lake, so scenic.
    { id: "CAWK", name: "Cawker City", county: "ks-jewell-mitchell", lat: 39.51, lon: -98.43, scenic: true, type: "farm", size: 1 },
    { id: "OSBO", name: "Osborne", county: "ks-osborne-smith", lat: 39.44, lon: -98.7, type: "farm", size: 1 },
    // The geographic center of the contiguous United States: the marker northwest of Lebanon
    // (approx.).
    { id: "GCTR", name: "Geographic Center of the U.S.", county: "ks-osborne-smith", lat: 39.83, lon: -98.58, scenic: true, type: "farm", size: 1 },
    { id: "ELSW", name: "Ellsworth", county: "ks-ellsworth-lincoln-russell", lat: 38.73, lon: -98.23, type: "farm", size: 1 },
    { id: "LNCN", name: "Lincoln Center", county: "ks-ellsworth-lincoln-russell", lat: 39.04, lon: -98.15, type: "farm", size: 1 },
    { id: "ELLS", name: "Ellis", county: "ks-ellis-rush", lat: 38.93, lon: -99.56, type: "farm", size: 1 },
    { id: "LACR", name: "La Crosse", county: "ks-ellis-rush", lat: 38.53, lon: -99.31, type: "farm", size: 1 },
    { id: "STJN", name: "St. John", county: "ks-barton-stafford", lat: 38.0, lon: -98.76, type: "farm", size: 1 },
    // Cheyenne Bottoms: the great inland marsh where shorebirds stop on their migration, at
    // the wildlife area northeast of Great Bend (approx.).
    { id: "CHBT", name: "Cheyenne Bottoms", county: "ks-barton-stafford", lat: 38.47, lon: -98.66, scenic: true, type: "farm", size: 1 },
    // Dodge City, Garden City and the High Plains
    { id: "KNGM", name: "Kingman", county: "ks-kingman-kiowa-pratt", lat: 37.65, lon: -98.12, type: "farm", size: 1 },
    { id: "GRBG", name: "Greensburg", county: "ks-kingman-kiowa-pratt", lat: 37.6, lon: -99.29, type: "farm", size: 1 },
    { id: "CLDW", name: "Coldwater", county: "ks-barber-comanche", lat: 37.27, lon: -99.32, type: "farm", size: 1 },
    { id: "KINS", name: "Kinsley", county: "ks-edwards-pawnee", lat: 37.92, lon: -99.41, type: "farm", size: 1 },
    // Fort Larned National Historic Site: the Santa Fe Trail's best-kept fort, west of Larned
    // (approx.).
    { id: "FTLR", name: "Fort Larned", county: "ks-edwards-pawnee", lat: 38.18, lon: -99.22, scenic: true, type: "farm", size: 1 },
    { id: "CIMR", name: "Cimarron", county: "ks-clark-ford-gray", lat: 37.81, lon: -100.35, type: "farm", size: 1 },
    { id: "ASHD", name: "Ashland", county: "ks-clark-ford-gray", lat: 37.19, lon: -99.77, type: "farm", size: 1 },
    { id: "LAKN", name: "Lakin", county: "ks-finney-hamilton-kearny", lat: 37.94, lon: -101.26, type: "farm", size: 1 },
    { id: "SYRA", name: "Syracuse", county: "ks-finney-hamilton-kearny", lat: 37.95, lon: -101.8, type: "farm", size: 1 },
    { id: "JNCY", name: "Johnson City", county: "ks-grant-haskell-stanton", lat: 37.57, lon: -101.74, type: "farm", size: 1 },
    { id: "SUBL", name: "Sublette", county: "ks-grant-haskell-stanton", lat: 37.48, lon: -100.85, type: "farm", size: 1 },
    { id: "ELKH", name: "Elkhart", county: "ks-morton-stevens", lat: 37.0, lon: -101.89, type: "farm", size: 1 },
    { id: "MEAD", name: "Meade", county: "ks-meade-seward", lat: 37.28, lon: -100.34, type: "farm", size: 1 },
    { id: "LEOT", name: "Leoti", county: "ks-greeley-scott-wichita", lat: 38.48, lon: -101.36, type: "farm", size: 1 },
    { id: "TRIB", name: "Tribune", county: "ks-greeley-scott-wichita", lat: 38.47, lon: -101.75, type: "farm", size: 1 },
    { id: "DIGH", name: "Dighton", county: "ks-hodgeman-lane-ness", lat: 38.48, lon: -100.47, type: "farm", size: 1 },
    { id: "JETM", name: "Jetmore", county: "ks-hodgeman-lane-ness", lat: 37.99, lon: -99.88, type: "farm", size: 1 },
    { id: "STFR", name: "St. Francis", county: "ks-cheyenne-sherman-wallace", lat: 39.77, lon: -101.8, type: "farm", size: 1 },
    { id: "SHSP", name: "Sharon Springs", county: "ks-cheyenne-sherman-wallace", lat: 38.89, lon: -101.75, type: "farm", size: 1 },
    { id: "OAKL", name: "Oakley", county: "ks-logan-rawlins-thomas", lat: 39.12, lon: -100.84, type: "farm", size: 1 },
    { id: "ATWD", name: "Atwood", county: "ks-logan-rawlins-thomas", lat: 39.81, lon: -101.04, type: "farm", size: 1 },
    { id: "OBRL", name: "Oberlin", county: "ks-decatur-norton", lat: 39.82, lon: -100.53, type: "farm", size: 1 },
    { id: "HOXI", name: "Hoxie", county: "ks-graham-sheridan", lat: 39.36, lon: -100.44, type: "farm", size: 1 },
    // Nicodemus National Historic Site: the town Black homesteaders founded in 1877 (approx.).
    { id: "NICO", name: "Nicodemus", county: "ks-graham-sheridan", lat: 39.39, lon: -99.62, scenic: true, type: "farm", size: 1 },
    { id: "QUIN", name: "Quinter", county: "ks-gove-trego", lat: 39.07, lon: -100.23, type: "farm", size: 1 },
    // Monument Rocks and Castle Rock: chalk spires and buttes on the Smoky Hill plains, so desert
    // (as Nebraska's Chimney Rock). At the landmarks (approx.).
    { id: "MORK", name: "Monument Rocks", county: "ks-gove-trego", lat: 38.79, lon: -100.76, scenic: true, type: "desert", size: 1 },
    { id: "CSRK", name: "Castle Rock", county: "ks-gove-trego", lat: 38.86, lon: -100.17, scenic: true, type: "desert", size: 1 },
    { id: "PLVL", name: "Plainville", county: "ks-phillips-rooks", lat: 39.23, lon: -99.3, type: "farm", size: 1 },
    { id: "STCK", name: "Stockton", county: "ks-phillips-rooks", lat: 39.43, lon: -99.28, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Kansas City, Topeka & Lawrence",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Wichita, the Flint Hills & the Southeast",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Kansas City to Wichita, as I-35 and the Kansas Turnpike run (by Ottawa and Emporia)
        { kind: "connect", a: "OPK", b: "ICT" },
        { kind: "counties", target: 12 },
      ],
    },
    {
      name: "Manhattan, Salina & the Smoky Hills",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Topeka to Salina, up the Kansas River and the Smoky Hill (I-70 and the Union Pacific)
        { kind: "connect", a: "TOP", b: "SLN" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Dodge City, Garden City & the High Plains",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Across the state on I-70, from Kansas City to Goodland by Colorado
        { kind: "connect", a: "KCK", b: "GDLD" },
        { kind: "counties", target: 25 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Kansas's map has no mountains
  // (one hill cell, on the Nebraska line by Kirwin), so none (NOTES.md).
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river or lake where it passes the town. Sources in NOTES.md.
  bridges: [
    // The Missouri (Missouri's line; Missouri comes later and will match)
    ["Fairfax Bridge (US-69, Kansas City)", 39.15, -94.61],
    ["Centennial Bridge (Leavenworth)", 39.32, -94.9],
    ["Amelia Earhart Memorial Bridge (US-59, Atchison)", 39.56, -95.11],
    ["Pony Express Bridge (US-36, Elwood–St. Joseph)", 39.75, -94.87],
    // The Kansas River
    ["Kansas River bridges (I-70, Kansas City, Kansas)", 39.1, -94.62],
    ["Kansas River bridge (18th Street Expressway, Kansas City, Kansas)", 39.09, -94.66],
    ["Kansas River bridge (I-635, Kansas City, Kansas)", 39.09, -94.72],
    ["Kansas River bridge (K-7, Bonner Springs)", 39.05, -94.87],
    ["Kansas River bridges (Lawrence)", 38.98, -95.22], // Massachusetts Street (US-40/59), downtown to North Lawrence
    ["Kansas River bridges (Topeka)", 39.08, -95.69], // Kansas Avenue and Topeka Boulevard, downtown to North Topeka
    ["Kansas River bridge (K-99, Wamego)", 39.2, -96.3],
    ["Kansas River bridge (K-177, Manhattan)", 39.17, -96.56],
    ["Republican River bridges (Junction City)", 39.08, -96.84], // just above its meeting with the Smoky Hill
    // The Big Blue, the Republican and the Solomon
    ["Big Blue River bridge (US-24, Manhattan)", 39.2, -96.53],
    ["Big Blue River bridges (Marysville: US-36 and US-77)", 39.86, -96.65],
    ["Republican River bridge (US-24, Clay Center)", 39.38, -97.14],
    ["Republican River bridge (US-81, Concordia)", 39.59, -97.65],
    ["Republican River bridge (US-36, Scandia)", 39.8, -97.8],
    ["Big Blue River bridge (US-77, Blue Rapids)", 39.7, -96.68],
    ["Solomon River bridge (US-24, Beloit)", 39.45, -98.11],
    ["Solomon River bridge (US-81, Minneapolis)", 39.1, -97.71],
    // The Smoky Hill (on terrain.js's river: see NOTES.md, the game doesn't load it yet)
    ["Smoky Hill River bridges (Junction City)", 39.04, -96.81],
    ["Smoky Hill River bridge (US-83, north of Scott City)", 38.8, -100.87],
    ["Smoky Hill River bridge (K-15, Abilene)", 38.89, -97.21],
    ["Smoky Hill River bridges (Salina)", 38.84, -97.6],
    ["Smoky Hill River bridge (Lindsborg)", 38.56, -97.67],
    ["Smoky Hill River bridge (Ellsworth)", 38.71, -98.23],
    // The Arkansas
    ["Arkansas River bridges (Wichita)", 37.69, -97.34], // Douglas Avenue, by the Keeper of the Plains
    ["Arkansas River bridge (Main Street, Hutchinson)", 38.03, -97.93],
    ["Arkansas River bridge (US-281, Great Bend)", 38.35, -98.78],
    ["Arkansas River bridge (Larned)", 38.17, -99.1],
    ["Arkansas River bridge (US-183, Kinsley)", 37.9, -99.41],
    ["Arkansas River bridge (2nd Avenue, Dodge City)", 37.75, -100.02],
    ["Arkansas River bridge (K-23, Cimarron)", 37.8, -100.35],
    ["Arkansas River bridge (US-83, Garden City)", 37.96, -100.87],
    ["Arkansas River bridge (K-25, Lakin)", 37.92, -101.26],
    ["Arkansas River bridge (K-27, Syracuse)", 38.0, -101.8],
    ["Arkansas River bridge (US-166, Arkansas City)", 37.06, -97.07],
    // The Neosho and the Verdigris
    ["Neosho River bridge (US-75, Burlington)", 38.2, -95.73],
    ["Neosho River bridge (US-54, Iola)", 37.92, -95.43],
    ["Neosho River bridge (K-39, Chanute)", 37.67, -95.42],
    ["Neosho River bridge (US-169, Chanute–Humboldt)", 37.72, -95.45],
    ["Neosho River bridge (US-400, east of Parsons)", 37.35, -95.12],
    ["Neosho River bridge (Oswego)", 37.17, -95.09],
    ["Verdigris River bridge (US-54, west of Yates Center)", 37.85, -95.97],
    ["Verdigris River bridge (US-160, Independence)", 37.22, -95.69],
    ["Verdigris River bridge (US-166, Coffeyville)", 37.04, -95.61],
    // The Cimarron
    ["Cimarron River bridge (US-54, Arkalon)", 37.14, -100.74],
    ["Cimarron River bridge (US-83, north of Liberal)", 37.23, -100.9],
    ["Cimarron River bridge (K-25, Hugoton–Ulysses)", 37.41, -101.34],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // None listed: Kansas is farmland and prairie. The Flint Hills' tallgrass, the High Plains'
    // wheat and short-grass and the Cimarron National Grassland stay unlisted, as Nebraska's
    // Sandhills and Colorado's eastern plains (Cheyenne-Kit Carson, Baca-Kiowa-Prowers) across the
    // lines. The map has no hills for `wooded` trees (the Ozarks' edge in Cherokee County is a
    // sliver; NOTES.md).
  },
});
