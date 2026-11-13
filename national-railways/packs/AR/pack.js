// National Railways pack: Arkansas.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/AR/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/AR/raw.
NR.addPack({
  code: "AR",
  name: "Arkansas",
  // A game that starts here begins owning these counties: Pulaski (Little Rock), Faulkner
  // (Conway, west on I-40) and Lonoke (Cabot, north-east on US-67). All three touch each other.
  // Cabot is farm, so the first track (Little Rock-Cabot, the nearest pair of different types)
  // has riders.
  start: ["ar-pulaski", "ar-faulkner", "ar-lonoke"],
  // Main stations: one per county region, at its biggest place except where a comment says why.
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. airport = its name, if it has a big one. scenic = a place
  // tourists travel to. Arkansas has no seaport (its river ports are not marked: NOTES.md).
  // Points are the Census points, except where a comment says it was moved to a downtown.
  stations: [
    // Level 1: Little Rock and central Arkansas
    // Little Rock: the capital and biggest city, size 3 (as Bakersfield and Eugene's range of 350,000 to 900,000), with
    // Clinton National Airport, the state's biggest. At downtown (the Capitol, the river and the Clinton Presidential
    // Center, so scenic); the Census point is 4 miles south-west, in the middle of the city limits. North Little Rock
    // (across the river) is not a town here: its downtown is under 4 miles away.
    { id: "LIT", name: "Little Rock", county: "ar-pulaski", lat: 34.75, lon: -92.29, airport: "Clinton National Airport", scenic: true, type: "metro", size: 3, pop: 399, main: true, level: "central" },
    // Conway: the University of Central Arkansas and two other colleges, on I-40 and the Union Pacific. At downtown;
    // the Census point is 2 miles south-west.
    { id: "CWY", name: "Conway", county: "ar-faulkner", lat: 35.09, lon: -92.44, type: "metro", size: 2, pop: 123, main: true, level: "central" },
    // Cabot, the biggest place in Lonoke County (the county seat, Lonoke, has 4,268): Little Rock's north-east commuter
    // suburb on US-67, in rice and farm country, so farm and the start
    // has riders.
    { id: "CAB", name: "Cabot", county: "ar-lonoke", lat: 34.98, lon: -92.03, type: "farm", size: 2, pop: 74, main: true, level: "central" },
    // Benton: Saline County's seat and biggest city, Little Rock's south-west suburb on I-30. At downtown; the Census
    // point is 1 mile north-east. Bryant (20,660) is a town.
    { id: "BNTA", name: "Benton", county: "ar-saline", lat: 34.57, lon: -92.59, type: "metro", size: 2, pop: 123, main: true, level: "central" },
    // Pine Bluff: on the Arkansas River and US-65, an old cotton and river port and the Pine Bluff Arsenal, so farm. At
    // downtown; the Census point is 1.6 miles south-west.
    { id: "PNB", name: "Pine Bluff", county: "ar-jefferson", lat: 34.23, lon: -92.00, type: "farm", size: 2, pop: 67, main: true, level: "central" },
    // Hot Springs: Hot Springs National Park (Bathhouse Row, in the middle of town) in the Ouachita Mountains, so
    // mountain and scenic. At downtown; the Census point is 0.7 miles south.
    { id: "HTSP", name: "Hot Springs", county: "ar-garland", lat: 34.50, lon: -93.05, scenic: true, type: "mountain", size: 2, pop: 100, main: true, level: "central" },
    // Searcy: White County's seat on US-67 and the Little Red River (Harding University), so farm (the county is
    // rice and soybean country). At downtown; the Census point is 0.6 miles south-west.
    { id: "SRCY", name: "Searcy", county: "ar-white", lat: 35.25, lon: -91.74, type: "farm", size: 2, pop: 77, main: true, level: "central" },
    // Morrilton: Conway County's seat on I-40 and the Union Pacific, and the biggest place of Conway-Perry. At downtown;
    // the Census point is 0.7 miles north-west.
    { id: "MRLT", name: "Morrilton", county: "ar-conway-perry", lat: 35.15, lon: -92.74, type: "farm", size: 1, pop: 31, main: true, level: "central" },
    // Sheridan: the biggest place (4,984) and Grant County's seat on US-167 between Little Rock and Pine Bluff; it has half
    // the region's people. Rison (Cleveland) and Star City (Lincoln) are 25 miles away, so Sheridan is the natural centre
    // of the region's north end. At downtown; the Census point is 2.7 miles west.
    { id: "SHRD", name: "Sheridan", county: "ar-cleveland-grant-lincoln", lat: 34.31, lon: -92.40, type: "farm", size: 1, pop: 38, main: true, level: "central" },
    // Malvern, not Arkadelphia (10,384, a close second): Malvern (10,857) is the biggest place and Hot Spring County's seat,
    // on I-30 and the Union Pacific (brick and clay); Arkadelphia, the college town, is a town here. At downtown.
    { id: "MLVN", name: "Malvern", county: "ar-clark-hot-spring", lat: 34.36, lon: -92.81, type: "farm", size: 1, pop: 54, main: true, level: "central" },
    // Level 2: the River Valley, Northwest Arkansas and the Ozarks
    // Rogers: the biggest place in Benton County (69,912), on I-49 and the Arkansas & Missouri Railroad. At downtown; the
    // Census point is 2 miles south-west. Northwest Arkansas National Airport (at Highfill, in Benton County) is the state's
    // second-busiest, so it is Rogers's. Bentonville (Walmart, Crystal Bridges) is a scenic town 5 miles west.
    { id: "ROG", name: "Rogers", county: "ar-benton", lat: 36.33, lon: -94.12, airport: "Northwest Arkansas National Airport", type: "metro", size: 2, pop: 284, main: true, level: "west" },
    // Fayetteville: the University of Arkansas, on I-49 and Razorback country. At downtown (the Census point is 0.4 miles
    // off). Springdale (87,320) is a town 9 miles north.
    { id: "FAY", name: "Fayetteville", county: "ar-washington", lat: 36.06, lon: -94.16, type: "metro", size: 2, pop: 246, main: true, level: "west" },
    // Fort Smith: the old frontier fort and Arkansas's second city, by the Oklahoma line. At downtown on the Arkansas
    // (Garrison Avenue); the Census point is 4 miles south-east. It is 5 miles from Roland, Oklahoma's station.
    { id: "FSAR", name: "Fort Smith", county: "ar-sebastian", lat: 35.38, lon: -94.43, type: "metro", size: 2, pop: 128, main: true, level: "west" },
    // Van Buren: Crawford County's seat across the Arkansas from Fort Smith, on I-40 and I-540 (6 miles from Fort
    // Smith's station). Its old Main Street is a National Register district. Farm, as the part of the Fort Smith metro
    // around it is farms and exurbs.
    { id: "VBAR", name: "Van Buren", county: "ar-crawford", lat: 35.44, lon: -94.35, type: "farm", size: 2, pop: 60, main: true, level: "west" },
    // Russellville: Arkansas Tech University and Arkansas Nuclear One, on I-40, the Union Pacific and Lake Dardanelle.
    // At downtown; the Census point is 0.6 miles west.
    { id: "RUSV", name: "Russellville", county: "ar-pope", lat: 35.28, lon: -93.13, type: "metro", size: 2, pop: 63, main: true, level: "west" },
    // Clarksville: the biggest place (9,365) and Johnson County's seat on I-40 and the Union Pacific (the University of
    // the Ozarks; peaches). At downtown; the Census point is 1.4 miles south-west. Ozark (Franklin County) is a town.
    { id: "CLKS", name: "Clarksville", county: "ar-franklin-johnson", lat: 35.47, lon: -93.47, type: "farm", size: 1, pop: 43, main: true, level: "west" },
    // Booneville, not Dardanelle (4,513, the biggest place): Dardanelle is 4 miles from Russellville's station across the
    // lake, so it would crowd it. Booneville (3,812) is Logan County's southern seat in the Petit Jean-Poteau valley on
    // AR-10 and AR-23 (moderately known), with Paris (the northern seat) a town.
    { id: "BOVL", name: "Booneville", county: "ar-logan-yell", lat: 35.14, lon: -93.92, type: "farm", size: 1, pop: 41, main: true, level: "west" },
    // Harrison: the biggest place, in the Ozarks on US-65 and the Buffalo National River's side. At downtown; the Census
    // point is 1.2 miles north-east.
    { id: "HRS", name: "Harrison", county: "ar-boone-newton-searcy", lat: 36.24, lon: -93.11, type: "mountain", size: 1, pop: 52, main: true, level: "west" },
    // Mountain Home: the biggest place of Baxter-Marion, between Bull Shoals and Norfork lakes on US-62/412 (retirement and
    // fishing). At downtown; the Census point is 0.5 miles away.
    { id: "MTNH", name: "Mountain Home", county: "ar-baxter-marion", lat: 36.34, lon: -92.38, type: "mountain", size: 1, pop: 58, main: true, level: "west" },
    // Berryville: the biggest place, Carroll County's seat on US-62 in the Ozarks, east of Beaver Lake. At downtown; the
    // Census point is 0.2 miles away. Eureka Springs is a scenic town 10 miles west.
    { id: "BRYV", name: "Berryville", county: "ar-carroll-madison", lat: 36.37, lon: -93.57, type: "mountain", size: 1, pop: 45, main: true, level: "west" },
    // Heber Springs: the biggest place of Cleburne-Van Buren, Cleburne County's seat on Greers Ferry Lake in the Ozark foothills.
    // At downtown; the Census point is 0.6 miles away.
    { id: "HBSP", name: "Heber Springs", county: "ar-cleburne-van-buren", lat: 35.50, lon: -92.03, type: "mountain", size: 1, pop: 41, main: true, level: "west" },
    // Level 3: the Delta and north-east Arkansas
    // Jonesboro: Arkansas State University and the biggest city of the north-east, on US-63 and the Union Pacific. At
    // downtown; the Census point is 1.7 miles south-east.
    { id: "JBR", name: "Jonesboro", county: "ar-craighead", lat: 35.84, lon: -90.70, type: "metro", size: 2, pop: 111, main: true, level: "east" },
    // Paragould: the biggest place of Clay-Greene on US-49 and US-412 at Crowley's Ridge, in rice and soybean country. At
    // downtown; the Census point is 0.3 miles away.
    { id: "PGLD", name: "Paragould", county: "ar-clay-greene", lat: 36.06, lon: -90.50, type: "farm", size: 2, pop: 60, main: true, level: "east" },
    // Pocahontas: the biggest place of the three, on the Black River at US-62 and US-67 (the Eleven Point country and
    // the Delta's edge).
    { id: "POCA", name: "Pocahontas", county: "ar-lawrence-randolph-sharp", lat: 36.26, lon: -90.97, type: "farm", size: 1, pop: 52, main: true, level: "east" },
    // Batesville: the biggest place, on the White River (Lyon College, Arkansas's oldest city by its river landing).
    // At downtown; the Census point is 0.3 miles away.
    { id: "BTSV", name: "Batesville", county: "ar-independence-jackson", lat: 35.77, lon: -91.64, type: "metro", size: 1, pop: 55, main: true, level: "east" },
    // Blytheville: the biggest place, on I-55 and the BNSF in the north-east corner's cotton country (the old Eaker Air
    // Force Base). At downtown; the Census point is 0.4 miles away.
    { id: "BLYV", name: "Blytheville", county: "ar-mississippi-poinsett", lat: 35.93, lon: -89.92, type: "farm", size: 2, pop: 64, main: true, level: "east" },
    // West Memphis: where I-40 and I-55 cross the Mississippi from Memphis (the Hernando de Soto Bridge is 8 miles east),
    // so metro. 8 miles from Memphis's downtown. At downtown; the Census point is 0.4 miles south-east.
    { id: "WMP", name: "West Memphis", county: "ar-crittenden", lat: 35.15, lon: -90.19, type: "metro", size: 1, pop: 48, main: true, level: "east" },
    // Forrest City: the biggest place, St. Francis County's seat on I-40 and the Union Pacific (Crowley's Ridge).
    { id: "FRC", name: "Forrest City", county: "ar-cross-st-francis", lat: 35.01, lon: -90.79, type: "farm", size: 1, pop: 40, main: true, level: "east" },
    // Helena-West Helena: the biggest place, on the Mississippi (a river town, the blues' King Biscuit Festival). At old
    // Helena's downtown on the river; the Census point is 1.2 miles west.
    { id: "HEL", name: "Helena-West Helena", county: "ar-lee-monroe-phillips", lat: 34.53, lon: -90.60, type: "farm", size: 1, pop: 32, main: true, level: "east" },
    // Stuttgart: the Rice and Duck Capital of the World, in the Grand Prairie.
    { id: "STUT", name: "Stuttgart", county: "ar-arkansas-prairie-woodruff", lat: 34.50, lon: -91.55, type: "farm", size: 1, pop: 32, main: true, level: "east" },
    // Mountain View, not Cherokee Village (4,785, the biggest place): Mountain View (2,866) is Stone County's seat and the
    // Ozark Folk Center's town (folk music), on AR-9 and AR-14 in the Ozarks, so mountain and scenic. Cherokee Village, a
    // retirement community at the region's east edge by the Spring River (Sharp and Fulton counties), is a town, with
    // Melbourne (Izard's seat) too.
    { id: "MTVA", name: "Mountain View", county: "ar-fulton-izard-stone", lat: 35.86, lon: -92.11, scenic: true, type: "mountain", size: 1, pop: 38, main: true, level: "east" },
    // Level 4: south Arkansas, the Ouachitas and the Red River
    // El Dorado: the 1920s oil boom town (the biggest place of Columbia-Union), on US-167 and US-82. At downtown; the Census
    // point is 0.9 miles north-west. Magnolia, the other seat, is a town.
    { id: "ELD", name: "El Dorado", county: "ar-columbia-union", lat: 33.21, lon: -92.67, type: "farm", size: 2, pop: 62, main: true, level: "south" },
    // Camden: the biggest place, on the Ouachita River, US-79 and US-278. At downtown; the Census point is 0.4 miles away.
    { id: "CMDN", name: "Camden", county: "ar-dallas-ouachita", lat: 33.58, lon: -92.84, type: "farm", size: 1, pop: 29, main: true, level: "south" },
    // Warren, not Crossett (4,828): Warren (5,455) is the biggest place, Bradley County's seat on US-63 (the Pink Tomato
    // Festival), in the middle of the region; Crossett, in the south, is a town.
    { id: "WARN", name: "Warren", county: "ar-ashley-bradley-calhoun", lat: 33.61, lon: -92.06, type: "farm", size: 1, pop: 34, main: true, level: "south" },
    // Monticello: the biggest place, Drew County's seat on US-278 and US-425, in the pine and soybean land; Dumas and
    // Lake Village are towns.
    { id: "MTCE", name: "Monticello", county: "ar-chicot-desha-drew", lat: 33.63, lon: -91.79, type: "farm", size: 1, pop: 39, main: true, level: "south" },
    // Hope: the biggest place, on I-30 and the Union Pacific (the watermelon town and Bill Clinton's birthplace).
    { id: "HOPE", name: "Hope", county: "ar-hempstead-nevada-pike", lat: 33.67, lon: -93.59, type: "farm", size: 1, pop: 39, main: true, level: "south" },
    // De Queen: the biggest place, Sevier County's seat on US-70 and US-71 and the Kansas City Southern's old line
    // (poultry).
    { id: "DQN", name: "De Queen", county: "ar-howard-little-river-sevier", lat: 34.04, lon: -94.34, type: "farm", size: 1, pop: 41, main: true, level: "south" },
    // Mena: the biggest place, in the Ouachitas by Rich Mountain on US-71 and US-59 (the Kansas City Southern's western
    // line from Texarkana). At downtown; the Census point is 0.4 miles away.
    { id: "MNA", name: "Mena", county: "ar-montgomery-polk-scott", lat: 34.58, lon: -94.24, type: "mountain", size: 1, pop: 38, main: true, level: "south" },
    // Texarkana: the Arkansas half of the twin city, on I-30 and I-49 (the Union Pacific). Moved 1.2 miles east of the Census
    // point, to Arkansas Boulevard's side of the city, so that it is 4.7 miles from the Texas station (downtown
    // Texarkana's State Line Avenue is on the Texas line). Texarkana Regional Airport is here but small. Size 1: the
    // Arkansas side has 29,387 people.
    { id: "TXA", name: "Texarkana", county: "ar-lafayette-miller", lat: 33.44, lon: -93.97, type: "metro", size: 1, pop: 49, main: true, level: "south" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor centre (sources in NOTES.md).
  towns: [
    // Sherwood: Little Rock's north-east suburb on US-67 (32,762).
    { id: "SHWD", name: "Sherwood", county: "ar-pulaski", lat: 34.85, lon: -92.20, type: "metro", size: 2 },
    // Jacksonville: Little Rock Air Force Base, on US-67 (29,487).
    { id: "JCKV", name: "Jacksonville", county: "ar-pulaski", lat: 34.88, lon: -92.13, type: "metro", size: 2 },
    // Maumelle: the planned city on the river's north bank, west of Little Rock.
    { id: "MAUM", name: "Maumelle", county: "ar-pulaski", lat: 34.85, lon: -92.40, type: "metro", size: 1 },
    { id: "GRBR", name: "Greenbrier", county: "ar-faulkner", lat: 35.23, lon: -92.38, type: "farm", size: 1 },
    // Lonoke: the county seat, on I-40 and US-70.
    { id: "LNOK", name: "Lonoke", county: "ar-lonoke", lat: 34.79, lon: -91.90, type: "farm", size: 1 },
    // Bryant: Little Rock's south-west suburb on I-30 (20,660).
    { id: "BRYT", name: "Bryant", county: "ar-saline", lat: 34.62, lon: -92.49, type: "metro", size: 1 },
    { id: "WTHL", name: "White Hall", county: "ar-jefferson", lat: 34.28, lon: -92.10, type: "farm", size: 1 },
    // Mountain Pine: the Ouachitas' pine-timber town on US-270.
    { id: "MTPN", name: "Mountain Pine", county: "ar-garland", lat: 34.57, lon: -93.17, type: "mountain", size: 1 },
    { id: "BEEB", name: "Beebe", county: "ar-white", lat: 35.07, lon: -91.88, type: "farm", size: 1 },
    { id: "PRYV", name: "Perryville", county: "ar-conway-perry", lat: 35.01, lon: -92.80, type: "farm", size: 1 },
    // Petit Jean State Park: Arkansas's first state park (Cedar Falls and Mather Lodge) on Petit Jean Mountain, at the lodge (approx.), so scenic.
    { id: "PTJN", name: "Petit Jean State Park", county: "ar-conway-perry", lat: 35.12, lon: -92.93, scenic: true, type: "mountain", size: 1 },
    { id: "STRC", name: "Star City", county: "ar-cleveland-grant-lincoln", lat: 33.94, lon: -91.84, type: "farm", size: 1 },
    // Arkadelphia: Henderson State and Ouachita Baptist universities, on I-30 (10,384, close behind Malvern).
    { id: "ARKD", name: "Arkadelphia", county: "ar-clark-hot-spring", lat: 34.12, lon: -93.06, type: "metro", size: 1 },
    // Bentonville: Walmart's home and Crystal Bridges Museum of American Art (and the Walmart Museum on the square), so scenic. At downtown; the Census point is 1.5 miles south-west.
    { id: "BNTV", name: "Bentonville", county: "ar-benton", lat: 36.37, lon: -94.21, scenic: true, type: "metro", size: 2 },
    // Siloam Springs: by the Oklahoma line on US-412 and the Illinois River, John Brown University.
    { id: "SILO", name: "Siloam Springs", county: "ar-benton", lat: 36.19, lon: -94.54, type: "farm", size: 1 },
    // Bella Vista: the retirement city on the Missouri line, on US-71 and I-49.
    { id: "BLVS", name: "Bella Vista", county: "ar-benton", lat: 36.47, lon: -94.27, type: "metro", size: 1 },
    // Springdale: the poultry capital (Tyson Foods) and the biggest suburb on I-49 (87,320). At downtown; the Census point is 1 mile west.
    { id: "SPRD", name: "Springdale", county: "ar-washington", lat: 36.19, lon: -94.14, type: "metro", size: 2 },
    // Prairie Grove: the battlefield town of the 1862 Civil War battle, on US-62.
    { id: "PRGV", name: "Prairie Grove", county: "ar-washington", lat: 35.99, lon: -94.30, type: "farm", size: 1 },
    // Alma: the spinach capital, on I-40.
    { id: "ALMR", name: "Alma", county: "ar-crawford", lat: 35.48, lon: -94.22, type: "farm", size: 1 },
    // Greenwood: Sebastian County's other seat, on US-71.
    { id: "GRWD", name: "Greenwood", county: "ar-sebastian", lat: 35.22, lon: -94.26, type: "farm", size: 1 },
    // Eureka Springs: the Victorian spa town in the Ozarks (a National Historic District), so scenic. At downtown; the Census point is 0.3 miles away.
    { id: "EURS", name: "Eureka Springs", county: "ar-carroll-madison", lat: 36.40, lon: -93.74, scenic: true, type: "mountain", size: 1 },
    // Huntsville: Madison County's seat on US-412 and AR-23.
    { id: "HNTS", name: "Huntsville", county: "ar-carroll-madison", lat: 36.09, lon: -93.74, type: "mountain", size: 1 },
    // Ozark: Franklin County's seat on the Arkansas River and US-64.
    { id: "OZRK", name: "Ozark", county: "ar-franklin-johnson", lat: 35.49, lon: -93.83, type: "farm", size: 1 },
    // Paris: Logan County's northern seat, on AR-22 and AR-309, the gateway to Mount Magazine.
    { id: "PARA", name: "Paris", county: "ar-logan-yell", lat: 35.29, lon: -93.73, type: "farm", size: 1 },
    // Mount Magazine: Arkansas's highest point (2,753 feet), a state park with the lodge, on the ridge south of Paris (approx., at the park's summit lodge).
    { id: "MTMG", name: "Mount Magazine", county: "ar-logan-yell", lat: 35.17, lon: -93.65, scenic: true, type: "mountain", size: 1 },
    // Atkins: the pickle capital, on I-40.
    { id: "ATKA", name: "Atkins", county: "ar-pope", lat: 35.24, lon: -92.94, type: "farm", size: 1 },
    // Jasper: Newton County's seat, in the Buffalo River country on AR-7.
    { id: "JASP", name: "Jasper", county: "ar-boone-newton-searcy", lat: 36.01, lon: -93.19, type: "mountain", size: 1 },
    // Buffalo National River: America's first national river, run through the Ozarks, at Ponca (the Lost Valley and Hemmed-in Hollow trails) (approx.), so scenic.
    { id: "BFNR", name: "Buffalo National River", county: "ar-boone-newton-searcy", lat: 36.03, lon: -93.36, scenic: true, type: "mountain", size: 1 },
    // Marshall: Searcy County's seat on US-65.
    { id: "MRSA", name: "Marshall", county: "ar-boone-newton-searcy", lat: 35.91, lon: -92.65, type: "mountain", size: 1 },
    // Yellville: Marion County's seat on US-62 and the White River's side.
    { id: "YLVL", name: "Yellville", county: "ar-baxter-marion", lat: 36.23, lon: -92.69, type: "mountain", size: 1 },
    // Bull Shoals: the town by the 1951 dam on the White River (Bull Shoals Lake and the trout fishery below).
    { id: "BSDM", name: "Bull Shoals Dam", county: "ar-baxter-marion", lat: 36.37, lon: -92.58, type: "mountain", size: 1 },
    // Clinton: Van Buren County's seat on US-65, in the Ozarks.
    { id: "CLNA", name: "Clinton", county: "ar-cleburne-van-buren", lat: 35.58, lon: -92.46, type: "mountain", size: 1 },
    // Cherokee Village: the retirement community (4,785), the region's biggest place, by the Spring River.
    { id: "CHKV", name: "Cherokee Village", county: "ar-fulton-izard-stone", lat: 36.29, lon: -91.57, type: "mountain", size: 1 },
    // Melbourne: Izard County's seat on AR-9.
    { id: "MLBR", name: "Melbourne", county: "ar-fulton-izard-stone", lat: 36.06, lon: -91.88, type: "mountain", size: 1 },
    // Blanchard Springs Caverns: the Ozark National Forest's show cave north-west of Mountain View (approx., at the visitor centre), so scenic.
    { id: "BLCS", name: "Blanchard Springs Caverns", county: "ar-fulton-izard-stone", lat: 35.96, lon: -92.18, scenic: true, type: "mountain", size: 1 },
    { id: "BRKL", name: "Brookland", county: "ar-craighead", lat: 35.90, lon: -90.57, type: "farm", size: 1 },
    // Piggott: Clay County's seat in the north-east corner (Hemingway's Pfeiffer House is here).
    { id: "PGGT", name: "Piggott", county: "ar-clay-greene", lat: 36.39, lon: -90.20, type: "farm", size: 1 },
    // Walnut Ridge: Lawrence County's seat on US-67.
    { id: "WLNR", name: "Walnut Ridge", county: "ar-lawrence-randolph-sharp", lat: 36.07, lon: -90.95, type: "farm", size: 1 },
    // Cave City: the watermelon capital, on US-167.
    { id: "CVCT", name: "Cave City", county: "ar-lawrence-randolph-sharp", lat: 35.95, lon: -91.55, type: "farm", size: 1 },
    // Newport: Jackson County's seat on the White River, US-67 and I-57? (US-67). At downtown; the Census point is 3 miles east.
    { id: "NWPT", name: "Newport", county: "ar-independence-jackson", lat: 35.61, lon: -91.28, type: "farm", size: 1 },
    // Osceola: Mississippi County's other seat, on the Mississippi.
    { id: "OSCL", name: "Osceola", county: "ar-mississippi-poinsett", lat: 35.70, lon: -89.97, type: "farm", size: 1 },
    // Trumann: Poinsett County's biggest place, on US-63 and Crowley's Ridge.
    { id: "TRMN", name: "Trumann", county: "ar-mississippi-poinsett", lat: 35.68, lon: -90.53, type: "farm", size: 1 },
    { id: "ERLE", name: "Earle", county: "ar-crittenden", lat: 35.27, lon: -90.46, type: "farm", size: 1 },
    // Wynne: Cross County's seat on US-64 and the Union Pacific.
    { id: "WYNN", name: "Wynne", county: "ar-cross-st-francis", lat: 35.23, lon: -90.79, type: "farm", size: 1 },
    // Brinkley: on I-40 and the Union Pacific, Monroe County's biggest place.
    { id: "BRKY", name: "Brinkley", county: "ar-lee-monroe-phillips", lat: 34.89, lon: -91.19, type: "farm", size: 1 },
    // Marianna: Lee County's seat on US-79, by Crowley's Ridge.
    { id: "MRNA", name: "Marianna", county: "ar-lee-monroe-phillips", lat: 34.77, lon: -90.77, type: "farm", size: 1 },
    // DeWitt: Arkansas County's seat.
    { id: "DWIT", name: "DeWitt", county: "ar-arkansas-prairie-woodruff", lat: 34.29, lon: -91.34, type: "farm", size: 1 },
    // Des Arc: Prairie County's seat on the White River.
    { id: "DSRC", name: "Des Arc", county: "ar-arkansas-prairie-woodruff", lat: 34.98, lon: -91.51, type: "farm", size: 1 },
    // Magnolia: Columbia County's seat and Southern Arkansas University, on US-82 and US-371.
    { id: "MGNL", name: "Magnolia", county: "ar-columbia-union", lat: 33.28, lon: -93.23, type: "metro", size: 1 },
    // Fordyce: Dallas County's seat, where Bear Bryant played, on US-79.
    { id: "FRDC", name: "Fordyce", county: "ar-dallas-ouachita", lat: 33.82, lon: -92.42, type: "farm", size: 1 },
    // Crossett: the pine-lumber and paper-mill town on US-82.
    { id: "CROS", name: "Crossett", county: "ar-ashley-bradley-calhoun", lat: 33.13, lon: -91.96, type: "farm", size: 1 },
    // Dumas: Desha County's biggest place on US-65.
    { id: "DUMA", name: "Dumas", county: "ar-chicot-desha-drew", lat: 33.88, lon: -91.49, type: "farm", size: 1 },
    // Lake Village: Chicot County's seat on Lake Chicot, Arkansas's biggest natural lake, on US-65/82.
    { id: "LKVA", name: "Lake Village", county: "ar-chicot-desha-drew", lat: 33.33, lon: -91.28, type: "farm", size: 1 },
    // Prescott: Nevada County's seat on I-30, US-67 and the Union Pacific.
    { id: "PRSC", name: "Prescott", county: "ar-hempstead-nevada-pike", lat: 33.80, lon: -93.39, type: "farm", size: 1 },
    // Crater of Diamonds State Park: the only diamond site in the world open to the public (you keep what you find), by Murfreesboro (approx., at the park entrance), so scenic.
    { id: "CODS", name: "Crater of Diamonds State Park", county: "ar-hempstead-nevada-pike", lat: 34.03, lon: -93.67, scenic: true, type: "farm", size: 1 },
    // Ashdown: Little River County's seat on US-71 and the Kansas City Southern.
    { id: "ASDN", name: "Ashdown", county: "ar-howard-little-river-sevier", lat: 33.67, lon: -94.13, type: "farm", size: 1 },
    // Nashville: Howard County's seat on US-70 and US-371 (peaches).
    { id: "NSHV", name: "Nashville", county: "ar-howard-little-river-sevier", lat: 33.94, lon: -93.85, type: "farm", size: 1 },
    // Waldron: Scott County's seat on US-71 and US-248.
    { id: "WLDR", name: "Waldron", county: "ar-montgomery-polk-scott", lat: 34.90, lon: -94.09, type: "mountain", size: 1 },
    // Mount Ida: Montgomery County's seat, the quartz crystal capital, on US-270 in the Ouachitas.
    { id: "MTID", name: "Mount Ida", county: "ar-montgomery-polk-scott", lat: 34.55, lon: -93.63, type: "mountain", size: 1 },
    // Stamps: on US-82 and US-371 in Lafayette County (the other towns of the region are Texarkana's suburbs).
    { id: "STMP", name: "Stamps", county: "ar-lafayette-miller", lat: 33.35, lon: -93.50, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Little Rock & Central Arkansas",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "The River Valley, Northwest Arkansas & the Ozarks",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Little Rock to Fort Smith, as I-40 runs up the Arkansas valley (by Conway, Morrilton,
        // Russellville, Clarksville and Ozark)
        { kind: "connect", a: "LIT", b: "FSAR" },
        { kind: "counties", target: 12 },
      ],
    },
    {
      name: "The Delta & Northeast Arkansas",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Little Rock to West Memphis, the rest of I-40 across the Delta (by Lonoke, Brinkley
        // and Forrest City)
        { kind: "connect", a: "LIT", b: "WMP" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "South Arkansas, the Ouachitas & the Red River",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Little Rock to Texarkana, as I-30 runs (by Benton, Malvern, Arkadelphia and Hope)
        { kind: "connect", a: "LIT", b: "TXA" },
        { kind: "counties", target: 25 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. NOTES.md says why there are none.
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river or lake where the real crossing is, or where the map's river passes
  // the town. Sources in NOTES.md.
  bridges: [
    // The Arkansas
    ["Garrison Avenue Bridge (US-64, Fort Smith–Van Buren)", 35.40, -94.43],
    ["Arkansas River bridge (I-40 and I-540, Van Buren)", 35.42, -94.36],
    ["Arkansas River bridge (US-64, Ozark)", 35.49, -93.84],
    ["Arkansas River bridge (AR-7, Dardanelle Lock and Dam)", 35.24, -93.16],
    ["Arkansas River bridge (AR-9, Morrilton–Perryville)", 35.13, -92.77],
    ["Toad Suck Ferry Lock and Dam bridge (US-60, Conway)", 35.08, -92.56],
    ["Arkansas River bridges (downtown Little Rock–North Little Rock)", 34.75, -92.27],
    ["Big Dam Bridge (Murray Lock and Dam, Little Rock)", 34.78, -92.31],
    ["Arkansas River bridge (US-65 and I-530, Pine Bluff)", 34.25, -91.97],
    // The Mississippi
    ["Hernando de Soto Bridge (I-40, Memphis–West Memphis)", 35.15, -90.08],
    ["Helena Bridge (US-49, Helena–Mississippi)", 34.51, -90.58],
    ["Greenville Bridge (US-82, Lake Village–Greenville)", 33.36, -91.15],
    // The White, Black, Little Red and St. Francis
    ["White River bridge (Batesville)", 35.76, -91.65],
    ["White River bridge (US-64, Augusta)", 35.27, -91.39],
    ["White River bridge (AR-38, Des Arc)", 34.98, -91.48],
    ["White River bridge (I-40, De Valls Bluff)", 34.80, -91.43],
    ["White River bridge (US-79, Clarendon)", 34.68, -91.33],
    ["Cotter Bridge (US-62/412, Cotter)", 36.27, -92.52],
    ["White River bridge (AR-5, Calico Rock)", 36.11, -92.15],
    ["Beaver Bridge (AR-187, Beaver Lake)", 36.46, -93.82],
    ["Black River bridge (US-62/67, Pocahontas)", 36.25, -90.97],
    ["Black River bridge (US-63, Black Rock)", 36.11, -91.11],
    ["St. Francis River bridge (US-63, Marked Tree)", 35.53, -90.43],
    ["St. Francis River bridge (US-70, Madison)", 34.99, -90.60],
    ["Little Red River bridge (US-67, Searcy–Judsonia)", 35.27, -91.70],
    ["Illinois River bridge (US-412, Siloam Springs)", 36.13, -94.57],
    // The Ouachita and the Red
    ["Ouachita River bridge (US-79, Camden)", 33.59, -92.81],
    ["Ouachita River bridge (I-30 and US-67, Arkadelphia)", 34.12, -93.04],
    ["Red River bridge (US-67, Fulton)", 33.60, -93.82],
    ["Red River bridge (US-71, Garland City)", 33.38, -93.69],
    // Lake dams and causeways
    ["Bull Shoals Dam (Bull Shoals Lake)", 36.37, -92.58],
    ["Norfork Dam (Norfork Lake)", 36.25, -92.23],
    ["Greers Ferry Dam (Greers Ferry Lake)", 35.52, -92.00],
    ["Blakely Mountain Dam (Lake Ouachita)", 34.58, -93.20],
    ["AR-7 bridge (Lake Hamilton, Hot Springs)", 34.45, -93.07],
    ["DeGray Dam (DeGray Lake)", 34.22, -93.11],
    ["Millwood Dam (Millwood Lake)", 33.70, -93.97],
    ["Narrows Dam (Lake Greeson)", 34.15, -93.72],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    // The Ozarks' oak-hickory woods (as Missouri's Howell-Oregon-Ozark and Taney and Oklahoma's
    // Adair-Cherokee), the Ouachitas' pine and oak and south Arkansas's pine belt (as Texas's
    // Bowie across the Red River and Oklahoma's Choctaw-McCurtain-Pushmataha)
    forest: ["ar-boone-newton-searcy", "ar-baxter-marion", "ar-fulton-izard-stone", "ar-carroll-madison", "ar-cleburne-van-buren", "ar-montgomery-polk-scott", "ar-clark-hot-spring", "ar-garland", "ar-hempstead-nevada-pike", "ar-howard-little-river-sevier", "ar-lafayette-miller", "ar-columbia-union", "ar-dallas-ouachita", "ar-ashley-bradley-calhoun", "ar-cleveland-grant-lincoln"],
    // Trees on the hills: the Ozark edge, the Arkansas valley's ridges and the Ouachita foothills
    wooded: ["ar-benton", "ar-washington", "ar-crawford", "ar-sebastian", "ar-franklin-johnson", "ar-logan-yell", "ar-pope", "ar-conway-perry", "ar-saline", "ar-lawrence-randolph-sharp", "ar-independence-jackson"],
    // Not listed (farmland and grassland): the Delta's cotton, rice and soybean fields, Crowley's
    // Ridge and the central plain round Little Rock. No `dry`: Arkansas has no desert.
  },
});
