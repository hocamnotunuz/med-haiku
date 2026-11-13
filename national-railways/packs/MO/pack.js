// National Railways pack: Missouri.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/MO/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/MO/raw.
NR.addPack({
  code: "MO",
  name: "Missouri",
  // A game that starts here begins owning these regions: St. Louis County (Clayton), the city of
  // St. Louis and Franklin County (Washington, farm). The city and Franklin both touch the county.
  // Franklin is farm, so the first track (Clayton-Washington, the nearest pair of different types)
  // has riders.
  start: ["mo-st-louis-county", "mo-st-louis-city", "mo-franklin"],
  // Main stations: one per region, at its biggest place unless a comment says why not.
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. airport = its name, if it has a big one. scenic = a place
  // tourists travel to. No port is marked: Missouri has no seaport (St. Louis's river port is not
  // marked: NOTES.md). Points are the Census points, except where a comment says otherwise.
  stations: [
    // Level 1: St. Louis and eastern Missouri
    // St. Louis (the independent city): downtown by the Gateway Arch and the riverfront; the Census point is 2.6 mi west-southwest. Size 4, like Denver and Kansas City (cores of metros of 2 to 3 million); the pack agent first chose 5.
    { id: "STL", name: "St. Louis", county: "mo-st-louis-city", lat: 38.63, lon: -90.2, airport: "St. Louis Lambert International Airport", scenic: true, type: "metro", size: 4, pop: 302, main: true, level: "stl" },
    // Clayton: the county seat and second downtown (offices, MetroLink, I-64), 8 mi from St. Louis's station. The county's biggest place, Florissant (52,536), is a town.
    { id: "CLYT", name: "Clayton", county: "mo-st-louis-county", lat: 38.65, lon: -90.34, type: "metro", size: 4, pop: 1004, main: true, level: "stl" },
    // St. Charles: the county seat on the Missouri, the I-70 crossing and the Katy Trail's old town, at its historic Main Street. O'Fallon (91,332) is the biggest place and is a town.
    { id: "STCM", name: "St. Charles", county: "mo-st-charles", lat: 38.78, lon: -90.48, type: "metro", size: 3, pop: 405, main: true, level: "stl" },
    // Arnold: Jefferson County's biggest city, St. Louis's south side on I-55.
    { id: "ARND", name: "Arnold", county: "mo-jefferson", lat: 38.43, lon: -90.37, type: "metro", size: 2, pop: 227, main: true, level: "stl" },
    // Washington: on the Missouri, US-50 and the Amtrak Missouri River Runner. Farm: Franklin County is typed by its farms and wine country, so the start has riders.
    { id: "WSMO", name: "Washington", county: "mo-franklin", lat: 38.55, lon: -91.02, type: "farm", size: 2, pop: 105, main: true, level: "stl" },
    // Troy: Lincoln County's biggest place, on US-61, 40 mi from St. Louis.
    { id: "TRMO", name: "Troy", county: "mo-lincoln", lat: 38.97, lon: -90.97, type: "farm", size: 2, pop: 60, main: true, level: "stl" },
    // Warrenton: I-70 at the west edge of St. Louis's exurbs.
    { id: "WRTN", name: "Warrenton", county: "mo-montgomery-warren", lat: 38.82, lon: -91.14, type: "farm", size: 1, pop: 47, main: true, level: "stl" },
    // Farmington: the Lead Belt, at the foot of the St. Francois Mountains.
    { id: "FRMG", name: "Farmington", county: "mo-st-francois", lat: 37.78, lon: -90.43, type: "mountain", size: 2, pop: 67, main: true, level: "stl" },
    // Perryville: I-55, biggest place; Ste. Genevieve (5,001) is a scenic town.
    { id: "PRVL", name: "Perryville", county: "mo-perry-ste-genevieve", lat: 37.73, lon: -89.88, type: "farm", size: 1, pop: 37, main: true, level: "stl" },
    // Cape Girardeau: moved to its downtown on the Mississippi (the Census point is 2.4 mi west).
    { id: "CPGD", name: "Cape Girardeau", county: "mo-cape-girardeau", lat: 37.31, lon: -89.53, type: "metro", size: 2, pop: 82, main: true, level: "stl" },
    // Cuba: on I-44 and old Route 66, biggest place.
    { id: "CBMO", name: "Cuba", county: "mo-crawford-iron-washington", lat: 38.07, lon: -91.41, type: "mountain", size: 1, pop: 56, main: true, level: "stl" },
    // Owensville: biggest place; Hermann (2,187) is a scenic town.
    { id: "OWNV", name: "Owensville", county: "mo-gasconade-maries-osage", lat: 38.35, lon: -91.5, type: "farm", size: 1, pop: 36, main: true, level: "stl" },
    // Mexico: US-54, biggest place.
    { id: "MXMO", name: "Mexico", county: "mo-audrain-pike", lat: 39.16, lon: -91.87, type: "farm", size: 1, pop: 43, main: true, level: "stl" },
    // Fredericktown: biggest place, at the edge of the St. Francois Mountains.
    { id: "FDTN", name: "Fredericktown", county: "mo-bollinger-madison-wayne", lat: 37.56, lon: -90.3, type: "mountain", size: 1, pop: 34, main: true, level: "stl" },
    // Level 2: Columbia, Jefferson City and the Lake of the Ozarks
    // Columbia: the University of Missouri, on I-70 and US-63.
    { id: "COLM", name: "Columbia", county: "mo-boone", lat: 38.95, lon: -92.33, type: "metro", size: 2, pop: 184, main: true, level: "central" },
    // Jefferson City: the capital, at the Capitol on the Missouri (the Census point is 0.7 mi south).
    { id: "JFCY", name: "Jefferson City", county: "mo-cole", lat: 38.58, lon: -92.17, type: "metro", size: 2, pop: 77, main: true, level: "central" },
    // Fulton: biggest place and the seat (Westminster College).
    { id: "FLTN", name: "Fulton", county: "mo-callaway", lat: 38.86, lon: -91.95, type: "farm", size: 1, pop: 44, main: true, level: "central" },
    // Boonville: biggest place, on the Missouri and I-70.
    { id: "BNVL", name: "Boonville", county: "mo-cooper-moniteau-morgan", lat: 38.96, lon: -92.75, type: "farm", size: 1, pop: 54, main: true, level: "central" },
    // Moberly: biggest place, on US-63 and the BNSF.
    { id: "MBRL", name: "Moberly", county: "mo-howard-randolph", lat: 39.42, lon: -92.44, type: "farm", size: 1, pop: 35, main: true, level: "central" },
    // Osage Beach: biggest place, on the Lake of the Ozarks (Eldon 4,414 is nearly as big). Moved 1.3 mi from the Census point, which falls in the lake on the map.
    { id: "OSBH", name: "Osage Beach", county: "mo-camden-miller", lat: 38.15, lon: -92.63, type: "coast", size: 1, pop: 67, main: true, level: "central" },
    // Sedalia: the Missouri State Fair (each August) and Scott Joplin's town, on the Katy Trail and the Union Pacific; biggest place. Scenic for the fair.
    { id: "SDLA", name: "Sedalia", county: "mo-pettis", lat: 38.71, lon: -93.23, scenic: true, type: "farm", size: 1, pop: 43, main: true, level: "central" },
    // Warsaw: biggest place, by Truman Lake.
    { id: "WRSW", name: "Warsaw", county: "mo-benton-hickory-st-clair", lat: 38.25, lon: -93.37, type: "farm", size: 1, pop: 37, main: true, level: "central" },
    // Waynesville: biggest place with a Census population (Fort Leonard Wood has none); St. Robert (5,240) is 3.6 mi east and not a separate town.
    { id: "WYNV", name: "Waynesville", county: "mo-pulaski", lat: 37.82, lon: -92.22, type: "mountain", size: 1, pop: 54, main: true, level: "central" },
    // Rolla: Missouri S&T, on I-44.
    { id: "ROLA", name: "Rolla", county: "mo-phelps-texas", lat: 37.95, lon: -91.76, type: "mountain", size: 2, pop: 69, main: true, level: "central" },
    // Salem: biggest place, MO-19 into the Current River country.
    { id: "SALM", name: "Salem", county: "mo-dent-reynolds-shannon", lat: 37.64, lon: -91.53, type: "mountain", size: 1, pop: 28, main: true, level: "central" },
    // Hannibal: Mark Twain's boyhood town on the Mississippi; scenic.
    { id: "HNBL", name: "Hannibal", county: "mo-marion-monroe-ralls", lat: 39.71, lon: -91.39, scenic: true, type: "farm", size: 1, pop: 48, main: true, level: "central" },
    // Macon: biggest place, on US-36.
    { id: "MCNM", name: "Macon", county: "mo-chariton-macon-shelby", lat: 39.74, lon: -92.47, type: "farm", size: 1, pop: 29, main: true, level: "central" },
    // Marshall: biggest place; I-70's towns Odessa and Lexington are towns here.
    { id: "MRSH", name: "Marshall", county: "mo-lafayette-saline", lat: 39.12, lon: -93.2, type: "farm", size: 1, pop: 56, main: true, level: "central" },
    // Richmond: biggest place.
    { id: "RCMD", name: "Richmond", county: "mo-carroll-ray", lat: 39.28, lon: -93.97, type: "farm", size: 1, pop: 32, main: true, level: "central" },
    // Warrensburg: University of Central Missouri, US-50 and the Amtrak Missouri River Runner.
    { id: "WRBG", name: "Warrensburg", county: "mo-johnson", lat: 38.76, lon: -93.73, type: "farm", size: 1, pop: 54, main: true, level: "central" },
    // Level 3: Kansas City and the north and west
    // Kansas City: downtown and Midtown, set at 18th and Vine (39.09, -94.56), 1.5 mi east of the Power & Light District, so that it stands 4 mi from Kansas City, Kansas (the Census point is 2.5 mi north). Size 4 as Omaha (585k) and Denver (716k). The city also spans Clay and Platte.
    { id: "KC", name: "Kansas City", county: "mo-jackson", lat: 39.09, lon: -94.56, airport: "Kansas City International Airport", scenic: true, type: "metro", size: 4, pop: 717, main: true, level: "west" },
    // Liberty: the seat and biggest city (Gladstone, 27,068, is a town).
    { id: "LBMO", name: "Liberty", county: "mo-clay", lat: 39.25, lon: -94.42, type: "metro", size: 2, pop: 253, main: true, level: "west" },
    // Parkville: the biggest place in Platte (Platte City 4,773 is the seat); KCI airport is in Kansas City, not here.
    { id: "PKVL", name: "Parkville", county: "mo-platte", lat: 39.21, lon: -94.7, type: "metro", size: 2, pop: 107, main: true, level: "west" },
    // Belton: biggest place, on US-71 and I-49 south of Kansas City.
    { id: "BLTM", name: "Belton", county: "mo-cass", lat: 38.82, lon: -94.53, type: "metro", size: 2, pop: 108, main: true, level: "west" },
    // St. Joseph: biggest city of northwest Missouri, on the Missouri, I-29 and US-36.
    { id: "STJO", name: "St. Joseph", county: "mo-buchanan", lat: 39.76, lon: -94.82, type: "metro", size: 2, pop: 85, main: true, level: "west" },
    // Cameron: I-35 and US-36, biggest place.
    { id: "CMMO", name: "Cameron", county: "mo-clinton-dekalb", lat: 39.74, lon: -94.23, type: "farm", size: 1, pop: 32, main: true, level: "west" },
    // Savannah: biggest place, by St. Joseph on I-29.
    { id: "SVNH", name: "Savannah", county: "mo-andrew-atchison-holt", lat: 39.94, lon: -94.83, type: "farm", size: 1, pop: 28, main: true, level: "west" },
    // Maryville: Northwest Missouri State, biggest place.
    { id: "MRVL", name: "Maryville", county: "mo-gentry-nodaway-worth", lat: 40.34, lon: -94.87, type: "farm", size: 1, pop: 29, main: true, level: "west" },
    // Chillicothe: biggest place, on US-36 and US-65.
    { id: "CHLC", name: "Chillicothe", county: "mo-caldwell-daviess-livingston", lat: 39.8, lon: -93.55, type: "farm", size: 1, pop: 32, main: true, level: "west" },
    // Trenton: biggest place, on US-65.
    { id: "TNMO", name: "Trenton", county: "mo-grundy-harrison-mercer", lat: 40.08, lon: -93.6, type: "farm", size: 1, pop: 22, main: true, level: "west" },
    // Brookfield: biggest place, on US-36 and the BNSF.
    { id: "BKFD", name: "Brookfield", county: "mo-linn-putnam-sullivan", lat: 39.79, lon: -93.08, type: "farm", size: 1, pop: 23, main: true, level: "west" },
    // Kirksville: Truman State University, biggest place.
    { id: "KRKV", name: "Kirksville", county: "mo-adair-schuyler-scotland", lat: 40.2, lon: -92.57, type: "farm", size: 1, pop: 34, main: true, level: "west" },
    // Canton: biggest place, on the Mississippi (Kahoka 1,962 is a town).
    { id: "CNMO", name: "Canton", county: "mo-clark-knox-lewis", lat: 40.13, lon: -91.53, type: "farm", size: 1, pop: 20, main: true, level: "west" },
    // Clinton: biggest place.
    { id: "CLTN", name: "Clinton", county: "mo-bates-henry", lat: 38.37, lon: -93.77, type: "farm", size: 1, pop: 38, main: true, level: "west" },
    // Level 4: Springfield, the Ozarks and the Bootheel
    // Springfield: Missouri's third city, at its downtown square (Census point 1.1 mi south). Size 3 as Lincoln (323k) and Norman (296k).
    { id: "SPFD", name: "Springfield", county: "mo-greene", lat: 37.21, lon: -93.29, type: "metro", size: 3, pop: 299, main: true, level: "south" },
    // Nixa: biggest place, Springfield's south side (Ozark, 21,279, is a town).
    { id: "NIXA", name: "Nixa", county: "mo-christian", lat: 37.05, lon: -93.3, type: "metro", size: 2, pop: 89, main: true, level: "south" },
    // Branson: the Ozarks' show town on Lake Taneycomo; scenic.
    { id: "BRSN", name: "Branson", county: "mo-taney", lat: 36.64, lon: -93.22, scenic: true, type: "mountain", size: 1, pop: 56, main: true, level: "south" },
    // Neosho: biggest place.
    { id: "NSHO", name: "Neosho", county: "mo-newton", lat: 36.85, lon: -94.4, type: "farm", size: 1, pop: 59, main: true, level: "south" },
    // Joplin: at its downtown, 0.7 mi from the Census point; I-44 and the BNSF.
    { id: "JPLN", name: "Joplin", county: "mo-jasper", lat: 37.08, lon: -94.51, type: "metro", size: 2, pop: 123, main: true, level: "south" },
    // Monett: biggest place, on US-60 and the BNSF.
    { id: "MNTT", name: "Monett", county: "mo-barry-mcdonald", lat: 36.92, lon: -93.93, type: "farm", size: 1, pop: 58, main: true, level: "south" },
    // Aurora: biggest place; Mount Vernon (4,524) is a town.
    { id: "AURR", name: "Aurora", county: "mo-lawrence-stone", lat: 36.97, lon: -93.72, type: "farm", size: 1, pop: 69, main: true, level: "south" },
    // Bolivar: biggest place.
    { id: "BLVR", name: "Bolivar", county: "mo-dade-polk", lat: 37.61, lon: -93.42, type: "farm", size: 1, pop: 39, main: true, level: "south" },
    // Lebanon: biggest place, on I-44.
    { id: "LBNN", name: "Lebanon", county: "mo-dallas-laclede", lat: 37.67, lon: -92.66, type: "farm", size: 1, pop: 53, main: true, level: "south" },
    // Marshfield: biggest place, on I-44 east of Springfield.
    { id: "MRFD", name: "Marshfield", county: "mo-douglas-webster-wright", lat: 37.34, lon: -92.91, type: "farm", size: 1, pop: 69, main: true, level: "south" },
    // West Plains: biggest place, in the Ozark highlands.
    { id: "WTPL", name: "West Plains", county: "mo-howell-oregon-ozark", lat: 36.74, lon: -91.87, type: "mountain", size: 1, pop: 57, main: true, level: "south" },
    // Poplar Bluff: biggest place, on the Black River and US-67.
    { id: "PLBF", name: "Poplar Bluff", county: "mo-butler-carter-ripley", lat: 36.76, lon: -90.41, type: "farm", size: 1, pop: 58, main: true, level: "south" },
    // Sikeston: biggest place, on I-55.
    { id: "SKST", name: "Sikeston", county: "mo-mississippi-scott", lat: 36.89, lon: -89.59, type: "farm", size: 1, pop: 51, main: true, level: "south" },
    // Caruthersville: biggest place, on the Mississippi in the Bootheel.
    { id: "CRVL", name: "Caruthersville", county: "mo-new-madrid-pemiscot", lat: 36.18, lon: -89.67, type: "farm", size: 1, pop: 32, main: true, level: "south" },
    // Kennett: biggest place, in the Bootheel.
    { id: "KNNT", name: "Kennett", county: "mo-dunklin-stoddard", lat: 36.24, lon: -90.05, type: "farm", size: 1, pop: 57, main: true, level: "south" },
    // Nevada: biggest place, on US-71.
    { id: "NVMO", name: "Nevada", county: "mo-barton-cedar-vernon", lat: 37.84, lon: -94.35, type: "farm", size: 1, pop: 46, main: true, level: "south" },
  ],
  // Towns: appear over time inside the counties you own. The next-biggest real places, spread out,
  // plus the well-known scenic ones (each in NOTES.md).
  towns: [
    // Level 1: St. Louis and eastern Missouri
    // Bowling Green: Pike County's seat, on US-54/61.
    { id: "BGMO", name: "Bowling Green", county: "mo-audrain-pike", lat: 39.34, lon: -91.2, type: "farm", size: 1 },
    // Louisiana: the Mississippi river town, with the Champ Clark Bridge.
    { id: "LSMO", name: "Louisiana", county: "mo-audrain-pike", lat: 39.44, lon: -91.06, type: "farm", size: 1 },
    // Piedmont: Wayne County's biggest place, on US-67.
    { id: "PDMT", name: "Piedmont", county: "mo-bollinger-madison-wayne", lat: 37.15, lon: -90.7, type: "mountain", size: 1 },
    // Marble Hill: Bollinger County's seat.
    { id: "MBHL", name: "Marble Hill", county: "mo-bollinger-madison-wayne", lat: 37.3, lon: -89.98, type: "farm", size: 1 },
    // Jackson: Cape Girardeau County's seat, on I-55.
    { id: "JKMO", name: "Jackson", county: "mo-cape-girardeau", lat: 37.38, lon: -89.65, type: "farm", size: 1 },
    // Potosi: Washington County's seat, in the Old Lead Belt.
    { id: "PTSI", name: "Potosi", county: "mo-crawford-iron-washington", lat: 37.93, lon: -90.77, type: "mountain", size: 1 },
    // Elephant Rocks State Park: granite boulders by Graniteville, Iron County (point approx.).
    { id: "ELRK", name: "Elephant Rocks State Park", county: "mo-crawford-iron-washington", lat: 37.65, lon: -90.69, scenic: true, type: "mountain", size: 1 },
    // Pacific: on I-44 and the Meramec, at St. Louis County's west edge.
    { id: "PCFC", name: "Pacific", county: "mo-franklin", lat: 38.48, lon: -90.75, type: "farm", size: 1 },
    // Meramec Caverns: the show cave by Stanton, off I-44 (Jesse James legend; point approx.).
    { id: "MRCV", name: "Meramec Caverns", county: "mo-franklin", lat: 38.25, lon: -91.1, scenic: true, type: "mountain", size: 1 },
    // Hermann: Missouri's German wine town on the Missouri; scenic.
    { id: "HRMN", name: "Hermann", county: "mo-gasconade-maries-osage", lat: 38.7, lon: -91.43, scenic: true, type: "farm", size: 1 },
    // Linn: Osage County's seat.
    { id: "LNMO", name: "Linn", county: "mo-gasconade-maries-osage", lat: 38.48, lon: -91.84, type: "farm", size: 1 },
    // Festus: south Jefferson County, on I-55.
    { id: "FSTS", name: "Festus", county: "mo-jefferson", lat: 38.22, lon: -90.41, type: "farm", size: 1 },
    // De Soto: Jefferson County's southwest.
    { id: "DSMO", name: "De Soto", county: "mo-jefferson", lat: 38.14, lon: -90.56, type: "farm", size: 1 },
    // Elsberry: on the Mississippi's bluffs, US-79.
    { id: "ELSB", name: "Elsberry", county: "mo-lincoln", lat: 39.17, lon: -90.79, type: "farm", size: 1 },
    // Montgomery City: Montgomery County's seat, on I-70.
    { id: "MNCT", name: "Montgomery City", county: "mo-montgomery-warren", lat: 38.97, lon: -91.5, type: "farm", size: 1 },
    // Wright City: on I-70 in Warren County.
    { id: "WRCT", name: "Wright City", county: "mo-montgomery-warren", lat: 38.83, lon: -91.04, type: "farm", size: 1 },
    // Sainte Genevieve: Missouri's oldest town (French colonial; national historical park); scenic.
    { id: "STGV", name: "Ste. Genevieve", county: "mo-perry-ste-genevieve", lat: 37.98, lon: -90.05, scenic: true, type: "farm", size: 1 },
    // O'Fallon: St. Charles County's biggest city (91k), size 2.
    { id: "OFLN", name: "O'Fallon", county: "mo-st-charles", lat: 38.78, lon: -90.72, type: "metro", size: 2 },
    // St. Peters: 58k, on I-70.
    { id: "STPT", name: "St. Peters", county: "mo-st-charles", lat: 38.78, lon: -90.6, type: "metro", size: 2 },
    // Wentzville: the west end, on I-70 and I-64.
    { id: "WNTZ", name: "Wentzville", county: "mo-st-charles", lat: 38.82, lon: -90.87, type: "metro", size: 1 },
    // Bonne Terre: old lead-mining town.
    { id: "BNTR", name: "Bonne Terre", county: "mo-st-francois", lat: 37.92, lon: -90.54, type: "mountain", size: 1 },
    // Florissant: St. Louis County's biggest place.
    { id: "FLMO", name: "Florissant", county: "mo-st-louis-county", lat: 38.8, lon: -90.33, type: "metro", size: 2 },
    // Chesterfield: the west county, by I-64.
    { id: "CHST", name: "Chesterfield", county: "mo-st-louis-county", lat: 38.66, lon: -90.58, type: "metro", size: 2 },
    // Kirkwood: old railroad suburb with Amtrak's stop.
    { id: "KRKW", name: "Kirkwood", county: "mo-st-louis-county", lat: 38.58, lon: -90.42, type: "metro", size: 1 },
    // Level 2: Columbia, Jefferson City and the Lake of the Ozarks
    // Cole Camp: Benton County's German farm town.
    { id: "CLCP", name: "Cole Camp", county: "mo-benton-hickory-st-clair", lat: 38.46, lon: -93.2, type: "farm", size: 1 },
    // Appleton City: St. Clair County's biggest place, on US-52.
    { id: "APPL", name: "Appleton City", county: "mo-benton-hickory-st-clair", lat: 38.19, lon: -94.03, type: "farm", size: 1 },
    // Ashland: Columbia's south suburb on US-63.
    { id: "ASMO", name: "Ashland", county: "mo-boone", lat: 38.81, lon: -92.24, type: "metro", size: 1 },
    // Centralia: north Boone, on US-22.
    { id: "CTRL", name: "Centralia", county: "mo-boone", lat: 39.21, lon: -92.13, type: "farm", size: 1 },
    // Rocheport: the Katy Trail's best-known town, on the Missouri by the tunnel and the I-70 bridge.
    { id: "RCHP", name: "Rocheport", county: "mo-boone", lat: 38.98, lon: -92.56, scenic: true, type: "farm", size: 1 },
    // Holts Summit: Jefferson City's northern suburb across the river.
    { id: "HLSM", name: "Holts Summit", county: "mo-callaway", lat: 38.65, lon: -92.11, type: "metro", size: 1 },
    // Eldon: Miller County's biggest place, on US-54.
    { id: "ELMO", name: "Eldon", county: "mo-camden-miller", lat: 38.35, lon: -92.58, type: "farm", size: 1 },
    // Ha Ha Tonka State Park: a castle ruin, karst bluffs and springs above the Lake of the Ozarks (point approx.).
    { id: "HHTK", name: "Ha Ha Tonka State Park", county: "mo-camden-miller", lat: 37.97, lon: -92.76, scenic: true, type: "farm", size: 1 },
    // Carrollton: Carroll County's seat, on the Missouri's north bank.
    { id: "CRMO", name: "Carrollton", county: "mo-carroll-ray", lat: 39.36, lon: -93.5, type: "farm", size: 1 },
    // Shelbina: Shelby County's biggest place, on US-36.
    { id: "SHBN", name: "Shelbina", county: "mo-chariton-macon-shelby", lat: 39.69, lon: -92.04, type: "farm", size: 1 },
    // Salisbury: Chariton County's biggest place.
    { id: "SLMO", name: "Salisbury", county: "mo-chariton-macon-shelby", lat: 39.42, lon: -92.8, type: "farm", size: 1 },
    // Wardsville: south of Jefferson City on US-50.
    { id: "WRDV", name: "Wardsville", county: "mo-cole", lat: 38.49, lon: -92.18, type: "farm", size: 1 },
    // California: Moniteau County's seat, on US-50.
    { id: "CLMO", name: "California", county: "mo-cooper-moniteau-morgan", lat: 38.63, lon: -92.57, type: "farm", size: 1 },
    // Versailles: Morgan County's seat.
    { id: "VRSL", name: "Versailles", county: "mo-cooper-moniteau-morgan", lat: 38.43, lon: -92.85, type: "farm", size: 1 },
    // Ellington: Reynolds County's biggest place.
    { id: "ELNG", name: "Ellington", county: "mo-dent-reynolds-shannon", lat: 37.24, lon: -90.97, type: "mountain", size: 1 },
    // Johnson's Shut-Ins State Park: water-carved rock pools on the East Fork Black River, Reynolds County (point approx.).
    { id: "JSHI", name: "Johnson's Shut-Ins State Park", county: "mo-dent-reynolds-shannon", lat: 37.54, lon: -90.84, scenic: true, type: "mountain", size: 1 },
    // Winona: Shannon County, on the Current River.
    { id: "WNNA", name: "Winona", county: "mo-dent-reynolds-shannon", lat: 37, lon: -91.33, type: "mountain", size: 1 },
    // Fayette: Howard County's seat.
    { id: "FYTT", name: "Fayette", county: "mo-howard-randolph", lat: 39.15, lon: -92.69, type: "farm", size: 1 },
    // Knob Noster: by Whiteman Air Force Base.
    { id: "KNNS", name: "Knob Noster", county: "mo-johnson", lat: 38.77, lon: -93.56, type: "farm", size: 1 },
    // Holden: west Johnson County, on US-50.
    { id: "HLMO", name: "Holden", county: "mo-johnson", lat: 38.71, lon: -93.99, type: "farm", size: 1 },
    // Odessa: on I-70 and the Union Pacific.
    { id: "ODMO", name: "Odessa", county: "mo-lafayette-saline", lat: 39, lon: -93.97, type: "farm", size: 1 },
    // Lexington: the Missouri river town (Battle of Lexington).
    { id: "LXMO", name: "Lexington", county: "mo-lafayette-saline", lat: 39.18, lon: -93.87, type: "farm", size: 1 },
    // Palmyra: Marion County's seat, on US-61.
    { id: "PLMY", name: "Palmyra", county: "mo-marion-monroe-ralls", lat: 39.8, lon: -91.53, type: "farm", size: 1 },
    // Monroe City: Monroe County's biggest place, on US-36.
    { id: "MNRC", name: "Monroe City", county: "mo-marion-monroe-ralls", lat: 39.65, lon: -91.73, type: "farm", size: 1 },
    // St. James: on I-44 and Route 66.
    { id: "SJMO", name: "St. James", county: "mo-phelps-texas", lat: 38, lon: -91.61, type: "farm", size: 1 },
    // Houston: Texas County's seat.
    { id: "HSMO", name: "Houston", county: "mo-phelps-texas", lat: 37.32, lon: -91.96, type: "mountain", size: 1 },
    // Richland: northwest Pulaski County.
    { id: "RCLD", name: "Richland", county: "mo-pulaski", lat: 37.86, lon: -92.4, type: "mountain", size: 1 },
    // Level 3: Kansas City and the north and west
    // Memphis: Scotland County's seat, on US-136.
    { id: "MPMO", name: "Memphis", county: "mo-adair-schuyler-scotland", lat: 40.46, lon: -92.17, type: "farm", size: 1 },
    // Tarkio: I-29 country in Atchison County.
    { id: "TRKO", name: "Tarkio", county: "mo-andrew-atchison-holt", lat: 40.44, lon: -95.38, type: "farm", size: 1 },
    // Mound City: Holt County's seat, by I-29.
    { id: "MDCT", name: "Mound City", county: "mo-andrew-atchison-holt", lat: 40.14, lon: -95.23, type: "farm", size: 1 },
    // Butler: Bates County's seat.
    { id: "BTMO", name: "Butler", county: "mo-bates-henry", lat: 38.26, lon: -94.34, type: "farm", size: 1 },
    // Windsor: on US-65 and the Katy Trail area, Henry County.
    { id: "WNMO", name: "Windsor", county: "mo-bates-henry", lat: 38.53, lon: -93.52, type: "farm", size: 1 },
    // Gallatin: Daviess County's seat.
    { id: "GLTN", name: "Gallatin", county: "mo-caldwell-daviess-livingston", lat: 39.91, lon: -93.96, type: "farm", size: 1 },
    // Hamilton: Caldwell County's biggest place, on US-36.
    { id: "HMMO", name: "Hamilton", county: "mo-caldwell-daviess-livingston", lat: 39.74, lon: -94, type: "farm", size: 1 },
    // Harrisonville: Cass County's seat, on US-71.
    { id: "HRVL", name: "Harrisonville", county: "mo-cass", lat: 38.65, lon: -94.35, type: "farm", size: 1 },
    // Pleasant Hill: on the Union Pacific, by Kansas City's south-east edge.
    { id: "PLHL", name: "Pleasant Hill", county: "mo-cass", lat: 38.81, lon: -94.27, type: "farm", size: 1 },
    // Kahoka: Clark County's seat, on US-136.
    { id: "KHKA", name: "Kahoka", county: "mo-clark-knox-lewis", lat: 40.42, lon: -91.72, type: "farm", size: 1 },
    // Edina: Knox County's seat.
    { id: "EDMO", name: "Edina", county: "mo-clark-knox-lewis", lat: 40.17, lon: -92.17, type: "farm", size: 1 },
    // Gladstone: Kansas City's north-side suburb, size 2 as Olathe.
    { id: "GLDS", name: "Gladstone", county: "mo-clay", lat: 39.21, lon: -94.56, type: "metro", size: 2 },
    // Excelsior Springs: the old spa town.
    { id: "EXSP", name: "Excelsior Springs", county: "mo-clay", lat: 39.34, lon: -94.24, type: "farm", size: 1 },
    // Smithville: by Smithville Lake.
    { id: "SMVL", name: "Smithville", county: "mo-clay", lat: 39.4, lon: -94.57, type: "farm", size: 1 },
    // Plattsburg: Clinton County's seat.
    { id: "PLTB", name: "Plattsburg", county: "mo-clinton-dekalb", lat: 39.55, lon: -94.46, type: "farm", size: 1 },
    // Maysville: DeKalb County's seat.
    { id: "MYSV", name: "Maysville", county: "mo-clinton-dekalb", lat: 39.89, lon: -94.37, type: "farm", size: 1 },
    // Albany: Gentry County's seat.
    { id: "ALBM", name: "Albany", county: "mo-gentry-nodaway-worth", lat: 40.25, lon: -94.33, type: "farm", size: 1 },
    // Grant City: Worth County's seat.
    { id: "GCMO", name: "Grant City", county: "mo-gentry-nodaway-worth", lat: 40.49, lon: -94.41, type: "farm", size: 1 },
    // Bethany: Harrison County's seat, on I-35.
    { id: "BTHN", name: "Bethany", county: "mo-grundy-harrison-mercer", lat: 40.27, lon: -94.03, type: "farm", size: 1 },
    // Princeton: Mercer County's seat, on US-136.
    { id: "PRMO", name: "Princeton", county: "mo-grundy-harrison-mercer", lat: 40.4, lon: -93.59, type: "farm", size: 1 },
    // Independence: Harry Truman's home city, at its Square (the Census point is 4 mi east). Size 2 as its 123k.
    { id: "IDMO", name: "Independence", county: "mo-jackson", lat: 39.09, lon: -94.42, type: "metro", size: 2 },
    // Lee's Summit: Kansas City's south-east suburb, size 2.
    { id: "LSMT", name: "Lee's Summit", county: "mo-jackson", lat: 38.92, lon: -94.38, type: "metro", size: 2 },
    // Blue Springs: on I-70 east of Independence.
    { id: "BLSP", name: "Blue Springs", county: "mo-jackson", lat: 39.01, lon: -94.27, type: "metro", size: 1 },
    // Milan: Sullivan County's seat, on US-65.
    { id: "MLMO", name: "Milan", county: "mo-linn-putnam-sullivan", lat: 40.2, lon: -93.12, type: "farm", size: 1 },
    // Unionville: Putnam County's seat.
    { id: "UNVL", name: "Unionville", county: "mo-linn-putnam-sullivan", lat: 40.48, lon: -93, type: "farm", size: 1 },
    // Platte City: Platte County's seat, near the airport.
    { id: "PLCT", name: "Platte City", county: "mo-platte", lat: 39.36, lon: -94.76, type: "farm", size: 1 },
    // Level 4: Springfield, the Ozarks and the Bootheel
    // Cassville: Barry County's seat, by Roaring River.
    { id: "CSMO", name: "Cassville", county: "mo-barry-mcdonald", lat: 36.68, lon: -93.87, type: "farm", size: 1 },
    // Noel: on the Elk River in McDonald County, at the Oklahoma line.
    { id: "NOEL", name: "Noel", county: "mo-barry-mcdonald", lat: 36.54, lon: -94.49, type: "farm", size: 1 },
    // Lamar: Barton County's seat, birthplace of Harry Truman, on US-71.
    { id: "LMMO", name: "Lamar", county: "mo-barton-cedar-vernon", lat: 37.49, lon: -94.28, type: "farm", size: 1 },
    // El Dorado Springs: Cedar County's biggest place.
    { id: "EDRS", name: "El Dorado Springs", county: "mo-barton-cedar-vernon", lat: 37.87, lon: -94.02, type: "farm", size: 1 },
    // Doniphan: Ripley County's seat, on the Current River.
    { id: "DNPH", name: "Doniphan", county: "mo-butler-carter-ripley", lat: 36.62, lon: -90.82, type: "farm", size: 1 },
    // Van Buren: Carter County's seat, at the Ozark National Scenic Riverways.
    { id: "VNBR", name: "Van Buren", county: "mo-butler-carter-ripley", lat: 37.01, lon: -91.01, type: "mountain", size: 1 },
    // Ozark: Christian County's seat, on US-65.
    { id: "OZMO", name: "Ozark", county: "mo-christian", lat: 37.03, lon: -93.22, type: "metro", size: 1 },
    // Greenfield: Dade County's seat.
    { id: "GFMO", name: "Greenfield", county: "mo-dade-polk", lat: 37.42, lon: -93.84, type: "farm", size: 1 },
    // Buffalo: Dallas County's seat.
    { id: "BFMO", name: "Buffalo", county: "mo-dallas-laclede", lat: 37.65, lon: -93.1, type: "farm", size: 1 },
    // Bennett Springs State Park: a big spring and trout stream in Laclede County (point approx.).
    { id: "BSMO", name: "Bennett Spring State Park", county: "mo-dallas-laclede", lat: 37.72, lon: -92.86, scenic: true, type: "farm", size: 1 },
    // Mountain Grove: Wright County's biggest place, on US-60.
    { id: "MTGV", name: "Mountain Grove", county: "mo-douglas-webster-wright", lat: 37.13, lon: -92.27, type: "farm", size: 1 },
    // Ava: Douglas County's seat.
    { id: "AVMO", name: "Ava", county: "mo-douglas-webster-wright", lat: 36.96, lon: -92.67, type: "farm", size: 1 },
    // Dexter: Stoddard County's biggest place, on US-60.
    { id: "DXTR", name: "Dexter", county: "mo-dunklin-stoddard", lat: 36.79, lon: -89.96, type: "farm", size: 1 },
    // Malden: Dunklin County's second city.
    { id: "MLDN", name: "Malden", county: "mo-dunklin-stoddard", lat: 36.6, lon: -90, type: "farm", size: 1 },
    // Republic: Springfield's southwest suburb, on the Frisco route.
    { id: "RPBL", name: "Republic", county: "mo-greene", lat: 37.17, lon: -93.41, type: "metro", size: 1 },
    // Thayer: Oregon County's biggest place, on the old Frisco line.
    { id: "THYR", name: "Thayer", county: "mo-howell-oregon-ozark", lat: 36.52, lon: -91.54, type: "mountain", size: 1 },
    // Mountain View: Howell County's second town.
    { id: "MTVW", name: "Mountain View", county: "mo-howell-oregon-ozark", lat: 36.99, lon: -91.7, type: "mountain", size: 1 },
    // Carthage: Jasper County's seat, on Route 66.
    { id: "CRTG", name: "Carthage", county: "mo-jasper", lat: 37.15, lon: -94.33, type: "farm", size: 1 },
    // Webb City: the old Tri-State mining town.
    { id: "WBCT", name: "Webb City", county: "mo-jasper", lat: 37.14, lon: -94.47, type: "metro", size: 1 },
    // Mount Vernon: Lawrence County's seat, on I-44.
    { id: "MTVR", name: "Mount Vernon", county: "mo-lawrence-stone", lat: 37.1, lon: -93.82, type: "farm", size: 1 },
    // Kimberling City: by Table Rock Lake.
    { id: "KMBC", name: "Kimberling City", county: "mo-lawrence-stone", lat: 36.65, lon: -93.42, type: "coast", size: 1 },
    // Charleston: Mississippi County's seat.
    { id: "CHRL", name: "Charleston", county: "mo-mississippi-scott", lat: 36.92, lon: -89.33, type: "farm", size: 1 },
    // Scott City: on I-55 north of Sikeston.
    { id: "SCCT", name: "Scott City", county: "mo-mississippi-scott", lat: 37.22, lon: -89.54, type: "farm", size: 1 },
    // New Madrid: the Mississippi town of the 1811-12 earthquakes.
    { id: "NWMD", name: "New Madrid", county: "mo-new-madrid-pemiscot", lat: 36.59, lon: -89.55, type: "farm", size: 1 },
    // Portageville: New Madrid County's biggest place.
    { id: "PRTG", name: "Portageville", county: "mo-new-madrid-pemiscot", lat: 36.43, lon: -89.7, type: "farm", size: 1 },
    // Seneca: by the Oklahoma line.
    { id: "SNMO", name: "Seneca", county: "mo-newton", lat: 36.84, lon: -94.61, type: "farm", size: 1 },
    // Granby: Newton County's lead-mining town.
    { id: "GRNB", name: "Granby", county: "mo-newton", lat: 36.92, lon: -94.26, type: "farm", size: 1 },
    // Forsyth: Taney County's seat, on Lake Taneycomo's east.
    { id: "FRSY", name: "Forsyth", county: "mo-taney", lat: 36.69, lon: -93.1, type: "farm", size: 1 },
    // Silver Dollar City: the Ozarks theme park west of Branson (point approx.).
    { id: "SDCT", name: "Silver Dollar City", county: "mo-lawrence-stone", lat: 36.67, lon: -93.34, scenic: true, type: "mountain", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "St. Louis & the East",
      areas: ["stl"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Columbia, Jefferson City & the Lake of the Ozarks",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // St. Louis County to Columbia, as I-70 runs (by St. Charles and Warrenton)
        { kind: "connect", a: "CLYT", b: "COLM" },
        { kind: "counties", target: 12 },
      ],
    },
    {
      name: "Kansas City, St. Joseph & the North",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Columbia to Kansas City, the rest of I-70 across the state
        { kind: "connect", a: "COLM", b: "KC" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Springfield, the Ozarks & the Bootheel",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // St. Louis County to Springfield, as I-44 runs (by Rolla and Lebanon)
        { kind: "connect", a: "CLYT", b: "SPFD" },
        { kind: "counties", target: 25 },
      ],
    },
  ],
  // City maps, keyed by their main station on the state map. hub = the main station's own stop
  // in the city, where riders change to and from trains. Sources in NOTES.md (City maps).
  metros: {
    STL: {
      name: "St. Louis",
      size: 4,
      stops: [
        { id: "GTC", name: "Gateway Transportation Center", lat: 38.627, lon: -90.206, hub: true },
        { id: "ARC", name: "Gateway Arch", lat: 38.625, lon: -90.185 },
        { id: "SOU", name: "Soulard", lat: 38.611, lon: -90.208 },
        { id: "CWE", name: "Central West End", lat: 38.645, lon: -90.261 },
        { id: "GRC", name: "Grand Center", lat: 38.64, lon: -90.23 },
        { id: "FPK", name: "Forest Park", lat: 38.635, lon: -90.291 },
        { id: "WSU", name: "Washington University", lat: 38.648, lon: -90.311 },
        { id: "HIL", name: "The Hill", lat: 38.617, lon: -90.275 },
        { id: "CLY", name: "Clayton", lat: 38.648, lon: -90.335 },
        { id: "STL", name: "Lambert Airport", lat: 38.748, lon: -90.37 },
        { id: "ESL", name: "East St. Louis", lat: 38.625, lon: -90.151 },
        { id: "KWD", name: "Kirkwood", lat: 38.581, lon: -90.407 },
      ],
    },
    KC: {
      name: "Kansas City",
      size: 4,
      stops: [
        { id: "UNS", name: "Union Station", lat: 39.085, lon: -94.586, hub: true },
        { id: "PLD", name: "Power & Light District", lat: 39.101, lon: -94.581 },
        { id: "EVN", name: "18th & Vine", lat: 39.091, lon: -94.563 },
        { id: "PLZ", name: "Country Club Plaza", lat: 39.043, lon: -94.595 },
        { id: "UMK", name: "UMKC", lat: 39.034, lon: -94.577 },
        { id: "KCK", name: "Kansas City, Kansas", lat: 39.114, lon: -94.627 },
        { id: "MCI", name: "Airport", lat: 39.298, lon: -94.714 },
        { id: "TSC", name: "Truman Sports Complex", lat: 39.049, lon: -94.484 },
        { id: "IND", name: "Independence", lat: 39.091, lon: -94.415 },
        { id: "OPK", name: "Overland Park", lat: 38.983, lon: -94.671 },
        { id: "NKC", name: "North Kansas City", lat: 39.13, lon: -94.563 },
        { id: "LSS", name: "Lee's Summit", lat: 38.911, lon: -94.382 },
      ],
    },
  },
  // Real mountain passes and gaps: [name, latitude, longitude]. Missouri's map has no mountains
  // (the Ozarks are hills on its grid), so none (NOTES.md).
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river or lake where it passes the town. Sources in NOTES.md.
  bridges: [
    // The Mississippi (the Illinois, Kentucky and Tennessee line; those states come later and will match)
    ["Eads Bridge (St. Louis)", 38.64, -90.20],
    ["Poplar Street Bridge (I-55/64/70, St. Louis)", 38.63, -90.20],
    ["Stan Musial Veterans Memorial Bridge (I-70, St. Louis)", 38.65, -90.20],
    ["Martin Luther King Bridge (St. Louis)", 38.64, -90.20],
    ["Merchants Bridge (St. Louis)", 38.69, -90.20],
    ["Chain of Rocks Bridge (I-270)", 38.77, -90.17],
    ["Clark Bridge (US-67, Alton)", 38.88, -90.17],
    ["Jefferson Barracks Bridge (I-255)", 38.47, -90.30],
    ["Mark Twain Memorial Bridge (US-36, Hannibal)", 39.71, -91.35],
    ["Champ Clark Bridge (US-54, Louisiana)", 39.45, -91.04],
    ["Bayview Bridge (US-24, Quincy)", 39.94, -91.44],
    ["Canton Bridge (Canton–Meyer)", 40.13, -91.51],
    ["Bill Emerson Memorial Bridge (Cape Girardeau)", 37.31, -89.52],
    ["Chester Bridge (Route 51)", 37.90, -89.85],
    ["Ste. Genevieve–Modoc Bridge (Route 32)", 37.96, -90.00],
    ["Thebes Bridge", 37.22, -89.47],
    ["Cairo Mississippi River Bridge (US-60/62)", 36.98, -89.17],
    ["Caruthersville Bridge (I-155)", 36.19, -89.65],
    // The Missouri (the Kansas, Nebraska and Iowa stretch matches their packs)
    ["Heart of America Bridge and ASB Bridge (Kansas City)", 39.12, -94.58],
    ["Christopher S. Bond Bridge (I-29/35, Kansas City)", 39.13, -94.56],
    ["Hermann Bridge (Route 19)", 38.70, -91.44],
    ["Washington Bridge (Route 47)", 38.55, -91.01],
    ["Jefferson City Bridge (US-54/63)", 38.59, -92.17],
    ["Boonville Bridge (Route 5)", 38.97, -92.75],
    ["Rocheport Bridge (I-70)", 38.97, -92.57],
    ["Glasgow Bridge (Route 240)", 39.22, -92.86],
    ["Lexington Bridge (US-24)", 39.20, -93.88],
    ["Waverly Bridge (US-65)", 39.22, -93.52],
    ["Blanchette Memorial Bridge (I-70, St. Charles)", 38.79, -90.49],
    ["Daniel Boone Bridge (I-64, Chesterfield)", 38.69, -90.64],
    ["Rulo Bridge (US-159)", 40.05, -95.42],
    ["Brownville Bridge (Route 136)", 40.39, -95.66],
    // Lakes
    ["Grand Glaize Bridge (US-54, Osage Beach)", 38.12, -92.64],
    ["Lake of the Ozarks Community Bridge (Route 242)", 38.18, -92.64],
    ["Bagnell Dam (Route 242? Lake Ozark)", 38.21, -92.63],
    ["Hurricane Deck Bridge (Route 5)", 38.09, -92.82],
    ["Truman Lake bridge (US-65, Warsaw)", 38.24, -93.41],
    ["Table Rock Lake bridge (Route 13, Kimberling City)", 36.64, -93.40],
    ["Table Rock Dam (Route 165/Route 65 bridge)", 36.60, -93.31],
    // Other rivers
    ["Black River bridge (US-67, Poplar Bluff)", 36.77, -90.39],
    ["Current River bridge (Van Buren)", 37.00, -91.03],
    ["Current River bridge (Doniphan)", 36.62, -90.85],
    ["Meramec River bridge (I-44, Pacific)", 38.46, -90.72],
    ["Meramec River bridge (Route 8, Steelville)", 37.99, -91.37],
    ["Meramec River bridge (I-44, Valley Park)", 38.55, -90.50],
    ["Grand River bridge (Gallatin)", 39.92, -93.95],
    ["Osage River bridge (Tuscumbia)", 38.23, -92.47],
    ["Platte River bridge (Platte City)", 39.37, -94.78],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    // The Ozark highlands' oak-hickory and pine woods (Mark Twain National Forest, the Current and
    // Black rivers, the St. Francois Mountains' granite knobs), as Oklahoma's Ozark plateau across the line
    forest: ["mo-dent-reynolds-shannon", "mo-howell-oregon-ozark", "mo-butler-carter-ripley", "mo-crawford-iron-washington", "mo-bollinger-madison-wayne", "mo-phelps-texas", "mo-douglas-webster-wright", "mo-taney"],
    // Trees on the hills: the Ozarks' edges and the Missouri River breaks
    wooded: ["mo-st-francois", "mo-jefferson", "mo-franklin", "mo-gasconade-maries-osage", "mo-camden-miller", "mo-benton-hickory-st-clair", "mo-pulaski", "mo-dallas-laclede", "mo-lawrence-stone", "mo-barry-mcdonald", "mo-christian", "mo-perry-ste-genevieve", "mo-cooper-moniteau-morgan"],
    // Not listed (farmland and grassland): the prairies and farms of the north and west, the
    // Missouri and Mississippi bottoms and the Bootheel's cotton, rice and soybean fields.
  },
});
