// National Railways pack: Iowa.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/IA/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/IA/raw.
NR.addPack({
  code: "IA",
  name: "Iowa",
  // A game that starts here begins owning these counties (Des Moines, Waukee and Indianola: the
  // Des Moines metro). Dallas and Warren both touch Polk. Indianola is farm, so the first track
  // (Des Moines–Indianola, the nearest pair of different types) has riders.
  start: ["ia-polk", "ia-dallas", "ia-warren"],
  // Main stations: one per county region, at its biggest place (every one is; no exceptions).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. airport = its name, if it has a big one. scenic = a place
  // tourists travel to. Iowa has no seaport. Points are the Census points, except Des Moines,
  // Council Bluffs, Davenport, Dubuque and Clinton (at their downtowns) and Sioux City (NOTES.md).
  stations: [
    // Level 1: Des Moines and central Iowa
    // Des Moines: the capital and Iowa's biggest city, size 4 (Polk's 492k, as Wichita's 524k and
    // Reno's 486k, the biggest cities of their states). Downtown, 1.3 mi northwest of the Census
    // point. Des Moines International is the state's busiest airport. The Iowa State Fair, on the
    // east side, draws a million visitors each August, so scenic.
    { id: "DM", name: "Des Moines", county: "ia-polk", lat: 41.59, lon: -93.62, airport: "Des Moines International", scenic: true, type: "metro", size: 4, pop: 492, main: true, level: "central" },
    // Waukee: Dallas County's biggest city, Des Moines's fast-growing west side, size 2 by its 100k.
    { id: "WKE", name: "Waukee", county: "ia-dallas", lat: 41.59, lon: -93.88, type: "metro", size: 2, pop: 100, main: true, level: "central" },
    // Indianola: Simpson College and the National Balloon Classic. Typed by the rest of Warren
    // County, farms south of Des Moines's suburbs (as Minnesota types Chaska), so farm: the start
    // then has riders on its first track.
    { id: "INDI", name: "Indianola", county: "ia-warren", lat: 41.36, lon: -93.57, type: "farm", size: 1, pop: 52, main: true, level: "central" },
    // Ames: Iowa State University, on I-35 and the Union Pacific, size 2 by its 99k.
    { id: "AMES", name: "Ames", county: "ia-story", lat: 42.03, lon: -93.62, type: "metro", size: 2, pop: 99, main: true, level: "central" },
    // Boone: on US-30 and the Union Pacific, by the Des Moines River.
    { id: "BOON", name: "Boone", county: "ia-boone-greene", lat: 42.05, lon: -93.87, type: "farm", size: 1, pop: 35, main: true, level: "central" },
    // Webster City: on US-20 and the Boone River.
    { id: "WEBC", name: "Webster City", county: "ia-hamilton-wright", lat: 42.46, lon: -93.82, type: "farm", size: 1, pop: 28, main: true, level: "central" },
    // Marshalltown: on US-30, the Union Pacific and the Iowa River, with Grundy County's farms, so
    // farm (Ames–Marshalltown then has riders).
    { id: "MTW", name: "Marshalltown", county: "ia-grundy-marshall", lat: 42.03, lon: -92.91, type: "farm", size: 1, pop: 52, main: true, level: "central" },
    // Newton: on I-80 east of Des Moines, with Grinnell (a town here) farther east.
    { id: "NWT", name: "Newton", county: "ia-jasper-poweshiek", lat: 41.7, lon: -93.04, type: "farm", size: 1, pop: 56, main: true, level: "central" },
    // Oskaloosa: Mahaska County's seat; Pella (a town here) is nearly as big.
    { id: "OSK", name: "Oskaloosa", county: "ia-mahaska-marion", lat: 41.29, lon: -92.64, type: "farm", size: 1, pop: 56, main: true, level: "central" },
    // Winterset: Madison County's covered bridges ("The Bridges of Madison County") and John Wayne's
    // birthplace, so scenic. At the east end of its group, the biggest town by far.
    { id: "WINT", name: "Winterset", county: "ia-adair-guthrie-madison", lat: 41.35, lon: -94.02, scenic: true, type: "farm", size: 1, pop: 35, main: true, level: "central" },
    // Osceola: where I-35 crosses the BNSF; the California Zephyr's stop.
    { id: "OSCE", name: "Osceola", county: "ia-clarke-decatur-lucas", lat: 41.03, lon: -93.79, type: "farm", size: 1, pop: 26, main: true, level: "central" },
    // Level 2: Cedar Rapids, Iowa City and the Quad Cities
    // Cedar Rapids: Iowa's second city, on the Cedar River, size 2 by its 230k (as Fargo and Sioux
    // Falls; Lincoln's 323k is 3). The Eastern Iowa Airport is the state's second airport.
    { id: "CID", name: "Cedar Rapids", county: "ia-linn", lat: 41.97, lon: -91.68, airport: "The Eastern Iowa Airport", type: "metro", size: 2, pop: 230, main: true, level: "east" },
    // Iowa City: the University of Iowa and the Old Capitol, on the Iowa River and I-80.
    { id: "IC", name: "Iowa City", county: "ia-johnson", lat: 41.66, lon: -91.53, type: "metro", size: 2, pop: 153, main: true, level: "east" },
    // Davenport: the biggest of the Quad Cities, on the Mississippi. Downtown, by the bridges to
    // Rock Island (Illinois); the Census point is 2.8 mi northwest.
    { id: "DVN", name: "Davenport", county: "ia-scott", lat: 41.52, lon: -90.58, type: "metro", size: 2, pop: 175, main: true, level: "east" },
    // Waterloo: with Cedar Falls (a town here), the Cedar Valley's city; John Deere's tractor works.
    { id: "WLOO", name: "Waterloo", county: "ia-black-hawk", lat: 42.49, lon: -92.35, type: "metro", size: 2, pop: 131, main: true, level: "east" },
    // Vinton: on the Cedar River; Tama and Toledo (the Meskwaki Settlement) and Belle Plaine on the
    // Union Pacific are towns here.
    { id: "VNTN", name: "Vinton", county: "ia-benton-tama", lat: 42.16, lon: -92.03, type: "farm", size: 1, pop: 43, main: true, level: "east" },
    // Williamsburg: on I-80, by the Amana Colonies (a scenic place here).
    { id: "WMBG", name: "Williamsburg", county: "ia-iowa-keokuk", lat: 41.67, lon: -92.01, type: "farm", size: 1, pop: 27, main: true, level: "east" },
    // Anamosa: on the Wapsipinicon (Grant Wood's Stone City is just west).
    { id: "ANAM", name: "Anamosa", county: "ia-cedar-jones", lat: 42.11, lon: -91.28, type: "farm", size: 1, pop: 39, main: true, level: "east" },
    // Muscatine: on the Mississippi below the Quad Cities.
    { id: "MUSC", name: "Muscatine", county: "ia-louisa-muscatine", lat: 41.42, lon: -91.07, type: "farm", size: 1, pop: 54, main: true, level: "east" },
    // Clinton: on the Mississippi and the Union Pacific's bridge to Illinois, with Jackson County's
    // farms and bluffs, so farm (Davenport–Clinton then has riders). Size 2 by its 66k. Downtown, by
    // the river; the Census point is 2.7 mi west.
    { id: "CLNT", name: "Clinton", county: "ia-clinton-jackson", lat: 41.84, lon: -90.19, type: "farm", size: 2, pop: 66, main: true, level: "east" },
    // Fairfield: on US-34 and the BNSF (Maharishi International University).
    { id: "FAIR", name: "Fairfield", county: "ia-jefferson-washington", lat: 41.01, lon: -91.97, type: "farm", size: 1, pop: 38, main: true, level: "east" },
    // Burlington: southeast Iowa's river city, the California Zephyr's first Iowa stop, so metro (as
    // Norfolk, Nebraska). Mount Pleasant, the next stop, is a town here.
    { id: "BUR", name: "Burlington", county: "ia-des-moines-henry", lat: 40.81, lon: -91.12, type: "metro", size: 1, pop: 59, main: true, level: "east" },
    // Fort Madison: the Southwest Chief's Iowa stop, on the BNSF's Mississippi bridge (10,330;
    // Keokuk, 9,901, is a town here).
    { id: "FTMD", name: "Fort Madison", county: "ia-lee-van-buren", lat: 40.62, lon: -91.35, type: "farm", size: 1, pop: 41, main: true, level: "east" },
    // Ottumwa: southeast Iowa's biggest city, on the Des Moines River, the Zephyr's stop, so metro (as
    // Norfolk, Nebraska).
    { id: "OTM", name: "Ottumwa", county: "ia-davis-wapello", lat: 41.02, lon: -92.42, type: "metro", size: 1, pop: 45, main: true, level: "east" },
    // Centerville: below Rathbun Lake (on the map), Appanoose County's seat.
    { id: "CTVL", name: "Centerville", county: "ia-appanoose-monroe-wayne", lat: 40.73, lon: -92.87, type: "farm", size: 1, pop: 26, main: true, level: "east" },
    // Level 3: Dubuque, Mason City and the north
    // Dubuque: Iowa's oldest city, on the Mississippi bluffs, size 2 by its 99k. Downtown, by the
    // bridges to Illinois and Wisconsin; the Census point is 1.9 mi west.
    { id: "DBQ", name: "Dubuque", county: "ia-dubuque", lat: 42.5, lon: -90.67, type: "metro", size: 2, pop: 99, main: true, level: "north" },
    // Waverly: on the Cedar River and US-218 (Wartburg College).
    { id: "WVRL", name: "Waverly", county: "ia-bremer-butler", lat: 42.72, lon: -92.47, type: "farm", size: 1, pop: 39, main: true, level: "north" },
    // Independence: on US-20 and the Wapsipinicon.
    { id: "INDE", name: "Independence", county: "ia-buchanan-delaware", lat: 42.46, lon: -91.9, type: "farm", size: 1, pop: 38, main: true, level: "north" },
    // Oelwein: the old Chicago Great Western railway town, the biggest in Fayette and Clayton
    // counties (at their southwest edge).
    { id: "OELW", name: "Oelwein", county: "ia-clayton-fayette", lat: 42.67, lon: -91.91, type: "farm", size: 1, pop: 37, main: true, level: "north" },
    // Decorah: Luther College, on the Upper Iowa River in the Driftless Area's bluffs.
    { id: "DCR", name: "Decorah", county: "ia-allamakee-winneshiek", lat: 43.3, lon: -91.78, type: "farm", size: 1, pop: 34, main: true, level: "north" },
    { id: "CRCO", name: "Cresco", county: "ia-chickasaw-howard", lat: 43.37, lon: -92.12, type: "farm", size: 1, pop: 21, main: true, level: "north" },
    // Charles City: on the Cedar River and US-218, the Avenue of the Saints.
    { id: "CHCY", name: "Charles City", county: "ia-floyd-mitchell", lat: 43.06, lon: -92.67, type: "farm", size: 1, pop: 26, main: true, level: "north" },
    // Mason City: north Iowa's city, on I-35 ("The Music Man"'s River City), so metro (as Norfolk,
    // Nebraska).
    { id: "MCW", name: "Mason City", county: "ia-cerro-gordo-worth", lat: 43.15, lon: -93.2, type: "metro", size: 1, pop: 51, main: true, level: "north" },
    // Iowa Falls: on the Iowa River and US-20.
    { id: "IOWF", name: "Iowa Falls", county: "ia-franklin-hardin", lat: 42.52, lon: -93.27, type: "farm", size: 1, pop: 27, main: true, level: "north" },
    // Forest City: Winnebago Industries' town.
    { id: "FRCY", name: "Forest City", county: "ia-hancock-winnebago", lat: 43.26, lon: -93.64, type: "farm", size: 1, pop: 21, main: true, level: "north" },
    { id: "ALGO", name: "Algona", county: "ia-humboldt-kossuth", lat: 43.08, lon: -94.23, type: "farm", size: 1, pop: 24, main: true, level: "north" },
    // Fort Dodge: north-central Iowa's city, on the Des Moines River and US-20, so metro (as Norfolk,
    // Nebraska).
    { id: "FOD", name: "Fort Dodge", county: "ia-calhoun-webster", lat: 42.51, lon: -94.18, type: "metro", size: 1, pop: 47, main: true, level: "north" },
    // Level 4: Sioux City, Council Bluffs and the west
    // Sioux City: on the Missouri where Iowa, Nebraska and South Dakota meet, size 2 by its 106k. On
    // its north side, 1.7 mi north of the Census point (1.9 mi from downtown), to stand 4.3 mi from
    // South Sioux City's station across the river (NOTES.md).
    { id: "SXC", name: "Sioux City", county: "ia-woodbury", lat: 42.52, lon: -96.39, type: "metro", size: 2, pop: 106, main: true, level: "west" },
    // Council Bluffs: across the Missouri from Omaha, size 2 by its 94k. At its downtown, 4.7 mi east
    // of Omaha's station; the Census point is 1.7 mi south.
    { id: "CB", name: "Council Bluffs", county: "ia-pottawattamie", lat: 41.26, lon: -95.85, type: "metro", size: 2, pop: 94, main: true, level: "west" },
    // Le Mars: "the Ice Cream Capital of the World" (Blue Bunny), on the Floyd River.
    { id: "LEMR", name: "Le Mars", county: "ia-cherokee-plymouth", lat: 42.78, lon: -96.17, type: "farm", size: 1, pop: 37, main: true, level: "west" },
    // Sioux Center: the Dutch farm towns of the northwest corner (Dordt University).
    { id: "SCTR", name: "Sioux Center", county: "ia-lyon-sioux", lat: 43.07, lon: -96.17, type: "farm", size: 1, pop: 48, main: true, level: "west" },
    { id: "SHDN", name: "Sheldon", county: "ia-o-brien-osceola", lat: 43.18, lon: -95.84, type: "farm", size: 1, pop: 20, main: true, level: "west" },
    // Spencer: the market town of the Iowa Great Lakes, on the Little Sioux.
    { id: "SPEN", name: "Spencer", county: "ia-clay-dickinson", lat: 43.15, lon: -95.15, type: "farm", size: 1, pop: 34, main: true, level: "west" },
    { id: "ESTV", name: "Estherville", county: "ia-emmet-palo-alto", lat: 43.4, lon: -94.83, type: "farm", size: 1, pop: 18, main: true, level: "west" },
    // Storm Lake: on its lake (Buena Vista University).
    { id: "STLK", name: "Storm Lake", county: "ia-buena-vista-pocahontas", lat: 42.64, lon: -95.2, type: "farm", size: 1, pop: 28, main: true, level: "west" },
    // Carroll: on US-30 and the Union Pacific.
    { id: "CARR", name: "Carroll", county: "ia-carroll-sac", lat: 42.07, lon: -94.86, type: "farm", size: 1, pop: 31, main: true, level: "west" },
    // Denison: on US-30 and the Union Pacific (Donna Reed's hometown).
    { id: "DENI", name: "Denison", county: "ia-crawford-ida", lat: 42.02, lon: -95.35, type: "farm", size: 1, pop: 24, main: true, level: "west" },
    // Onawa (2,910), by a little over Missouri Valley (2,683, a town here): on I-29 by the Missouri.
    { id: "ONAW", name: "Onawa", county: "ia-harrison-monona", lat: 42.03, lon: -96.09, type: "farm", size: 1, pop: 23, main: true, level: "west" },
    { id: "HARL", name: "Harlan", county: "ia-audubon-shelby", lat: 41.65, lon: -95.33, type: "farm", size: 1, pop: 17, main: true, level: "west" },
    // Atlantic: on the East Nishnabotna, just south of I-80.
    { id: "ATLC", name: "Atlantic", county: "ia-cass-montgomery", lat: 41.39, lon: -95.02, type: "farm", size: 1, pop: 23, main: true, level: "west" },
    // Glenwood: Mills County's seat, in the Loess Hills south of Council Bluffs.
    { id: "GLEN", name: "Glenwood", county: "ia-fremont-mills", lat: 41.04, lon: -95.74, type: "farm", size: 1, pop: 21, main: true, level: "west" },
    { id: "CLRD", name: "Clarinda", county: "ia-page-taylor", lat: 40.74, lon: -95.03, type: "farm", size: 1, pop: 21, main: true, level: "west" },
    // Creston: the California Zephyr's stop, on US-34 and the BNSF.
    { id: "CRST", name: "Creston", county: "ia-adams-ringgold-union", lat: 41.06, lon: -94.36, type: "farm", size: 1, pop: 21, main: true, level: "west" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor center (sources in NOTES.md).
  towns: [
    // Des Moines and central Iowa
    { id: "WDSM", name: "West Des Moines", county: "ia-polk", lat: 41.55, lon: -93.78, type: "metro", size: 2 },
    { id: "ANKY", name: "Ankeny", county: "ia-polk", lat: 41.73, lon: -93.6, type: "metro", size: 2 },
    // Perry: Dallas County's farm town, northwest of Des Moines.
    { id: "PRRY", name: "Perry", county: "ia-dallas", lat: 41.84, lon: -94.09, type: "farm", size: 1 },
    { id: "NWLK", name: "Norwalk", county: "ia-warren", lat: 41.48, lon: -93.7, type: "metro", size: 1 },
    { id: "NVDA", name: "Nevada", county: "ia-story", lat: 42.02, lon: -93.47, type: "farm", size: 1 },
    // Story City: on I-35 north of Ames.
    { id: "STYC", name: "Story City", county: "ia-story", lat: 42.19, lon: -93.59, type: "farm", size: 1 },
    { id: "JFSN", name: "Jefferson", county: "ia-boone-greene", lat: 42.02, lon: -94.38, type: "farm", size: 1 },
    { id: "EGGV", name: "Eagle Grove", county: "ia-hamilton-wright", lat: 42.67, lon: -93.9, type: "farm", size: 1 },
    { id: "GRCT", name: "Grundy Center", county: "ia-grundy-marshall", lat: 42.36, lon: -92.77, type: "farm", size: 1 },
    // Grinnell: Grinnell College, on I-80.
    { id: "GRNL", name: "Grinnell", county: "ia-jasper-poweshiek", lat: 41.74, lon: -92.72, type: "farm", size: 1 },
    { id: "CLFX", name: "Colfax", county: "ia-jasper-poweshiek", lat: 41.68, lon: -93.24, type: "farm", size: 1 },
    // Pella: the Dutch town (Tulip Time each May, the Vermeer windmill), so scenic.
    { id: "PELA", name: "Pella", county: "ia-mahaska-marion", lat: 41.4, lon: -92.92, scenic: true, type: "farm", size: 1 },
    { id: "KNXV", name: "Knoxville", county: "ia-mahaska-marion", lat: 41.32, lon: -93.1, type: "farm", size: 1 },
    // Stuart: on I-80, where it runs along the Adair–Guthrie county line.
    { id: "STUA", name: "Stuart", county: "ia-adair-guthrie-madison", lat: 41.5, lon: -94.32, type: "farm", size: 1 },
    { id: "GRFD", name: "Greenfield", county: "ia-adair-guthrie-madison", lat: 41.31, lon: -94.46, type: "farm", size: 1 },
    { id: "GTHC", name: "Guthrie Center", county: "ia-adair-guthrie-madison", lat: 41.68, lon: -94.5, type: "farm", size: 1 },
    { id: "CHRT", name: "Chariton", county: "ia-clarke-decatur-lucas", lat: 41.02, lon: -93.31, type: "farm", size: 1 },
    // Lamoni: Graceland University, on I-35 at the Missouri line.
    { id: "LMNI", name: "Lamoni", county: "ia-clarke-decatur-lucas", lat: 40.62, lon: -93.93, type: "farm", size: 1 },
    // Cedar Rapids, Iowa City and the Quad Cities
    { id: "MRIO", name: "Marion", county: "ia-linn", lat: 42.05, lon: -91.59, type: "metro", size: 2 },
    { id: "CRLV", name: "Coralville", county: "ia-johnson", lat: 41.7, lon: -91.6, type: "metro", size: 1 },
    { id: "BTDF", name: "Bettendorf", county: "ia-scott", lat: 41.57, lon: -90.48, type: "metro", size: 2 },
    // Le Claire: Buffalo Bill Cody's birthplace, where I-80 crosses the Mississippi.
    { id: "LCLR", name: "Le Claire", county: "ia-scott", lat: 41.6, lon: -90.38, type: "metro", size: 1 },
    // Cedar Falls: the University of Northern Iowa, Waterloo's twin on the Cedar.
    { id: "CDRF", name: "Cedar Falls", county: "ia-black-hawk", lat: 42.52, lon: -92.45, type: "metro", size: 2 },
    // Tama: by Toledo and the Meskwaki Settlement, on US-30 and the Union Pacific.
    { id: "TAMA", name: "Tama", county: "ia-benton-tama", lat: 41.97, lon: -92.57, type: "farm", size: 1 },
    { id: "BLPL", name: "Belle Plaine", county: "ia-benton-tama", lat: 41.9, lon: -92.28, type: "farm", size: 1 },
    // Amana Colonies: the seven villages of the Amana Society, founded by German Pietists in 1855
    // (at Amana, the main village).
    { id: "AMNA", name: "Amana Colonies", county: "ia-iowa-keokuk", lat: 41.8, lon: -91.88, scenic: true, type: "farm", size: 1 },
    { id: "SGNY", name: "Sigourney", county: "ia-iowa-keokuk", lat: 41.33, lon: -92.2, type: "farm", size: 1 },
    { id: "MTCL", name: "Monticello", county: "ia-cedar-jones", lat: 42.23, lon: -91.19, type: "farm", size: 1 },
    { id: "TPTN", name: "Tipton", county: "ia-cedar-jones", lat: 41.77, lon: -91.13, type: "farm", size: 1 },
    // West Branch: Herbert Hoover's birthplace (the Herbert Hoover National Historic Site and his
    // presidential library), so scenic.
    { id: "WBRH", name: "West Branch", county: "ia-cedar-jones", lat: 41.67, lon: -91.34, scenic: true, type: "farm", size: 1 },
    { id: "WLIB", name: "West Liberty", county: "ia-louisa-muscatine", lat: 41.57, lon: -91.26, type: "farm", size: 1 },
    { id: "WPLO", name: "Wapello", county: "ia-louisa-muscatine", lat: 41.18, lon: -91.19, type: "farm", size: 1 },
    { id: "MQKT", name: "Maquoketa", county: "ia-clinton-jackson", lat: 42.06, lon: -90.66, type: "farm", size: 1 },
    { id: "DWTT", name: "DeWitt", county: "ia-clinton-jackson", lat: 41.82, lon: -90.54, type: "farm", size: 1 },
    // Maquoketa Caves State Park: limestone caves and a natural bridge, northwest of Maquoketa
    // (approx.).
    { id: "MQCV", name: "Maquoketa Caves", county: "ia-clinton-jackson", lat: 42.12, lon: -90.78, scenic: true, type: "farm", size: 1 },
    { id: "WSHN", name: "Washington", county: "ia-jefferson-washington", lat: 41.3, lon: -91.69, type: "farm", size: 1 },
    // Kalona: the Amish and Mennonite farm town.
    { id: "KLNA", name: "Kalona", county: "ia-jefferson-washington", lat: 41.49, lon: -91.7, type: "farm", size: 1 },
    // Mount Pleasant: the California Zephyr's stop between Burlington and Ottumwa.
    { id: "MPLT", name: "Mount Pleasant", county: "ia-des-moines-henry", lat: 40.96, lon: -91.55, type: "farm", size: 1 },
    // Keokuk: at the Des Moines River's mouth, by the Mississippi's Lock and Dam 19.
    { id: "KEOK", name: "Keokuk", county: "ia-lee-van-buren", lat: 40.41, lon: -91.4, type: "farm", size: 1 },
    // Keosauqua: Van Buren County's seat, in the Des Moines River's bend (the villages of Bentonsport
    // and Bonaparte).
    { id: "KSQA", name: "Keosauqua", county: "ia-lee-van-buren", lat: 40.73, lon: -91.96, type: "farm", size: 1 },
    { id: "BLMF", name: "Bloomfield", county: "ia-davis-wapello", lat: 40.75, lon: -92.42, type: "farm", size: 1 },
    // Eldon: the house in Grant Wood's painting "American Gothic" (1930), with its visitor center,
    // so scenic.
    { id: "ELDN", name: "Eldon", county: "ia-davis-wapello", lat: 40.92, lon: -92.22, scenic: true, type: "farm", size: 1 },
    { id: "ALBI", name: "Albia", county: "ia-appanoose-monroe-wayne", lat: 41.03, lon: -92.8, type: "farm", size: 1 },
    // Dubuque, Mason City and the north
    // Field of Dreams: the baseball field from the 1989 film, on a farm 3 mi northeast of Dyersville
    // (approx.).
    { id: "FDRM", name: "Field of Dreams", county: "ia-dubuque", lat: 42.5, lon: -91.06, scenic: true, type: "farm", size: 1 },
    { id: "CSCD", name: "Cascade", county: "ia-dubuque", lat: 42.3, lon: -91.0, type: "farm", size: 1 },
    { id: "PKBG", name: "Parkersburg", county: "ia-bremer-butler", lat: 42.57, lon: -92.78, type: "farm", size: 1 },
    { id: "MNCH", name: "Manchester", county: "ia-buchanan-delaware", lat: 42.49, lon: -91.46, type: "farm", size: 1 },
    { id: "WUNI", name: "West Union", county: "ia-clayton-fayette", lat: 42.96, lon: -91.81, type: "farm", size: 1 },
    // Guttenberg: on the Mississippi, below the bluffs.
    { id: "GTBG", name: "Guttenberg", county: "ia-clayton-fayette", lat: 42.79, lon: -91.11, type: "farm", size: 1 },
    { id: "WKON", name: "Waukon", county: "ia-allamakee-winneshiek", lat: 43.27, lon: -91.48, type: "farm", size: 1 },
    // Effigy Mounds National Monument: some 200 Native American mounds, 31 of them shaped as bears
    // and birds, on the bluffs above the Mississippi; at the visitor center north of Marquette
    // (approx.).
    { id: "EFMD", name: "Effigy Mounds", county: "ia-allamakee-winneshiek", lat: 43.09, lon: -91.19, scenic: true, type: "farm", size: 1 },
    { id: "NHMP", name: "New Hampton", county: "ia-chickasaw-howard", lat: 43.06, lon: -92.31, type: "farm", size: 1 },
    { id: "OSAG", name: "Osage", county: "ia-floyd-mitchell", lat: 43.28, lon: -92.81, type: "farm", size: 1 },
    // Clear Lake: the lake resort west of Mason City (the Surf Ballroom, Buddy Holly's last concert).
    { id: "CLLK", name: "Clear Lake", county: "ia-cerro-gordo-worth", lat: 43.14, lon: -93.37, type: "farm", size: 1 },
    // Northwood: on I-35 toward Albert Lea, Minnesota.
    { id: "NRWD", name: "Northwood", county: "ia-cerro-gordo-worth", lat: 43.44, lon: -93.22, type: "farm", size: 1 },
    { id: "HMPT", name: "Hampton", county: "ia-franklin-hardin", lat: 42.74, lon: -93.2, type: "farm", size: 1 },
    { id: "GRNR", name: "Garner", county: "ia-hancock-winnebago", lat: 43.1, lon: -93.6, type: "farm", size: 1 },
    { id: "HMBT", name: "Humboldt", county: "ia-humboldt-kossuth", lat: 42.72, lon: -94.22, type: "farm", size: 1 },
    { id: "RKWC", name: "Rockwell City", county: "ia-calhoun-webster", lat: 42.4, lon: -94.63, type: "farm", size: 1 },
    // Sioux City, Council Bluffs and the west
    // Sergeant Bluff: Sioux City's south side (Sioux Gateway Airport).
    { id: "SGBF", name: "Sergeant Bluff", county: "ia-woodbury", lat: 42.4, lon: -96.35, type: "metro", size: 1 },
    // Avoca: on I-80 east of Council Bluffs.
    { id: "AVCA", name: "Avoca", county: "ia-pottawattamie", lat: 41.48, lon: -95.34, type: "farm", size: 1 },
    { id: "CHKE", name: "Cherokee", county: "ia-cherokee-plymouth", lat: 42.75, lon: -95.55, type: "farm", size: 1 },
    // Akron: on the Big Sioux, across from South Dakota.
    { id: "AKRN", name: "Akron", county: "ia-cherokee-plymouth", lat: 42.83, lon: -96.56, type: "farm", size: 1 },
    { id: "ORCY", name: "Orange City", county: "ia-lyon-sioux", lat: 43.0, lon: -96.06, type: "farm", size: 1 },
    { id: "RKRP", name: "Rock Rapids", county: "ia-lyon-sioux", lat: 43.43, lon: -96.17, type: "farm", size: 1 },
    { id: "SBLY", name: "Sibley", county: "ia-o-brien-osceola", lat: 43.4, lon: -95.74, type: "farm", size: 1 },
    { id: "SPLK", name: "Spirit Lake", county: "ia-clay-dickinson", lat: 43.42, lon: -95.11, type: "farm", size: 1 },
    // Arnolds Park: the old amusement park and beaches on West Okoboji, the heart of the Iowa Great
    // Lakes' resorts, so scenic and coast (as Nebraska types Lake McConaughy).
    { id: "ARPK", name: "Arnolds Park", county: "ia-clay-dickinson", lat: 43.36, lon: -95.13, scenic: true, type: "coast", size: 1 },
    { id: "EMBG", name: "Emmetsburg", county: "ia-emmet-palo-alto", lat: 43.11, lon: -94.68, type: "farm", size: 1 },
    { id: "PCHT", name: "Pocahontas", county: "ia-buena-vista-pocahontas", lat: 42.74, lon: -94.67, type: "farm", size: 1 },
    { id: "SACC", name: "Sac City", county: "ia-carroll-sac", lat: 42.42, lon: -95.0, type: "farm", size: 1 },
    { id: "IDAG", name: "Ida Grove", county: "ia-crawford-ida", lat: 42.34, lon: -95.47, type: "farm", size: 1 },
    // Missouri Valley: where I-29 meets US-30 and the Union Pacific.
    { id: "MOVY", name: "Missouri Valley", county: "ia-harrison-monona", lat: 41.56, lon: -95.9, type: "farm", size: 1 },
    // The Loess Hills: bluffs of wind-blown silt along the Missouri, matched in depth only in China,
    // at the Loess Hills State Forest's visitor center in Pisgah.
    { id: "LSHL", name: "Loess Hills", county: "ia-harrison-monona", lat: 41.83, lon: -95.93, scenic: true, type: "farm", size: 1 },
    { id: "AUDB", name: "Audubon", county: "ia-audubon-shelby", lat: 41.72, lon: -94.93, type: "farm", size: 1 },
    { id: "RDOK", name: "Red Oak", county: "ia-cass-montgomery", lat: 41.01, lon: -95.22, type: "farm", size: 1 },
    // Hamburg: on I-29 at the Missouri line.
    { id: "HMBG", name: "Hamburg", county: "ia-fremont-mills", lat: 40.61, lon: -95.65, type: "farm", size: 1 },
    { id: "SHND", name: "Shenandoah", county: "ia-page-taylor", lat: 40.76, lon: -95.37, type: "farm", size: 1 },
    { id: "BDFD", name: "Bedford", county: "ia-page-taylor", lat: 40.67, lon: -94.72, type: "farm", size: 1 },
    { id: "CRNG", name: "Corning", county: "ia-adams-ringgold-union", lat: 40.99, lon: -94.74, type: "farm", size: 1 },
    { id: "MTAY", name: "Mount Ayr", county: "ia-adams-ringgold-union", lat: 40.71, lon: -94.24, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Des Moines & Central Iowa",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Cedar Rapids, Iowa City & the Quad Cities",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Des Moines to Davenport, as I-80 runs (by Newton, Grinnell and Iowa City)
        { kind: "connect", a: "DM", b: "DVN" },
        { kind: "counties", target: 14 },
      ],
    },
    {
      name: "Dubuque, Mason City & the North",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Des Moines to Mason City, as I-35 runs (by Ames)
        { kind: "connect", a: "DM", b: "MCW" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Sioux City, Council Bluffs & the West",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // River to river: Davenport to Council Bluffs, across the state on I-80
        { kind: "connect", a: "DVN", b: "CB" },
        { kind: "counties", target: 25 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Iowa's map has no mountains (one
  // hill cell), so none (NOTES.md).
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river or lake where it passes the town. Sources in NOTES.md.
  bridges: [
    // The Mississippi (the Wisconsin and Illinois line; those states come later and will match)
    ["Black Hawk Bridge (Lansing)", 43.37, -91.2],
    ["Mississippi River bridge (US-18, Marquette–Prairie du Chien)", 43.04, -91.16],
    ["Julien Dubuque Bridge (US-20)", 42.5, -90.65],
    ["Dubuque–Wisconsin Bridge (US-61/151)", 42.52, -90.64],
    ["Savanna–Sabula Bridge (US-52)", 42.07, -90.16],
    ["Mississippi River bridges (Clinton: US-30 and the Union Pacific)", 41.84, -90.19],
    ["I-80 Mississippi River bridge (Le Claire)", 41.6, -90.36],
    ["I-74 Bridge (Bettendorf–Moline)", 41.53, -90.52],
    ["Mississippi River bridges (Davenport–Rock Island)", 41.52, -90.58], // the Centennial and Government bridges
    ["Norbert F. Beckey Bridge (IA-92, Muscatine)", 41.41, -91.03],
    ["Mississippi River bridges (Burlington: US-34 and the BNSF)", 40.81, -91.1],
    ["Fort Madison Toll Bridge (the BNSF and IA-2)", 40.63, -91.3],
    ["Mississippi River bridges (Keokuk–Hamilton)", 40.4, -91.38],
    // The Missouri (the Nebraska line): the same points as Nebraska's pack
    ["Missouri River bridges (Omaha–Council Bluffs: I-480 and the Union Pacific)", 41.26, -95.92],
    ["Missouri River bridge (I-80, Omaha–Council Bluffs)", 41.23, -95.92],
    ["Missouri River bridges (Plattsmouth: US-34 and the BNSF)", 41.01, -95.87],
    ["Missouri River bridge (Nebraska City)", 40.68, -95.84],
    ["Missouri River bridge (US-30, Blair)", 41.55, -96.08],
    ["Missouri River bridge (Decatur)", 42.02, -96.22],
    ["Missouri River bridges (South Sioux City–Sioux City)", 42.48, -96.39],
    // The Big Sioux (the South Dakota line)
    ["Big Sioux River bridge (I-29, Sioux City–North Sioux City)", 42.52, -96.48],
    ["Big Sioux River bridge (Akron)", 42.84, -96.57],
    ["Big Sioux River bridge (US-18, Canton)", 43.29, -96.58],
    // The Des Moines, from Estherville down to Keosauqua
    ["Des Moines River bridge (Estherville)", 43.4, -94.84],
    ["Des Moines River bridge (US-18, Emmetsburg)", 43.11, -94.71],
    ["Des Moines River bridge (Humboldt)", 42.72, -94.23],
    ["Des Moines River bridges (Fort Dodge)", 42.5, -94.19],
    ["Des Moines River bridges (Boone: US-30 and the Kate Shelley High Bridge)", 42.05, -93.93],
    ["I-35/80 Des Moines River bridge (Saylorville)", 41.67, -93.68],
    ["Des Moines River bridges (downtown Des Moines)", 41.59, -93.61],
    ["Des Moines River bridges (Ottumwa)", 41.0, -92.42],
    ["Des Moines River bridge (Eldon)", 40.91, -92.22],
    ["Des Moines River bridge (IA-1, Keosauqua)", 40.73, -91.96],
    // The Cedar
    ["Cedar River bridge (Charles City)", 43.06, -92.68],
    ["Cedar River bridge (Waverly)", 42.73, -92.47],
    ["Cedar River bridge (US-218, Janesville)", 42.66, -92.46],
    ["Cedar River bridge (Cedar Falls)", 42.54, -92.44],
    ["Cedar River bridges (downtown Waterloo)", 42.5, -92.34],
    ["Cedar River bridge (Vinton)", 42.18, -92.02],
    ["Cedar River bridges (downtown Cedar Rapids)", 41.98, -91.67],
    ["Cedar River bridge (I-80)", 41.62, -91.15],
    ["Iowa River bridge (US-61, Wapello)", 41.18, -91.19], // the map calls the river here the Cedar
    // The Iowa
    ["Iowa River bridge (US-65, Iowa Falls)", 42.52, -93.26],
    ["Iowa River bridge (IA-14, Marshalltown)", 42.06, -92.91],
    ["Iowa River bridge (US-63, Tama)", 41.95, -92.58],
    ["Iowa River bridge (Amana)", 41.78, -91.87],
    ["I-380 Iowa River bridge (North Liberty)", 41.79, -91.6],
    ["Iowa River bridge (I-80, Coralville)", 41.68, -91.56],
    ["Iowa River bridges (downtown Iowa City)", 41.66, -91.54],
    // The Wapsipinicon
    ["Wapsipinicon River bridge (Independence)", 42.47, -91.89],
    ["Wapsipinicon River bridge (Anamosa)", 42.09, -91.29],
    ["Wapsipinicon River bridge (US-61, DeWitt)", 41.77, -90.56],
    // The Little Sioux
    ["Little Sioux River bridge (Spencer)", 43.13, -95.15],
    ["Little Sioux River bridge (US-71, Sioux Rapids)", 42.9, -95.18],
    ["Little Sioux River bridge (Cherokee)", 42.75, -95.56],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The Driftless Area's bluffs along the Mississippi and the Upper Iowa, the Turkey and the
    // Yellow ("Little Switzerland"): farms on the ridges, woods on the bluffs, as Minnesota's
    // Fillmore-Houston across the line
    wooded: ["ia-allamakee-winneshiek", "ia-clayton-fayette"],
    // Not listed (farmland and grassland): the rest of the state, corn and soybean country from
    // the Missouri to the Mississippi, the Loess Hills' prairie ridges included.
  },
});
