// National Railways pack: Texas.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges, bays,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/TX/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/TX/raw.
NR.addPack({
  code: "TX",
  name: "Texas",
  // A game that starts here begins owning these counties: Houston (Harris County), Galveston
  // (south-east down I-45) and Sugar Land (Fort Bend County, south-west on US-59). Both touch
  // Harris. Galveston is coast, so the first track (Houston–Galveston, the nearest pair of
  // different types) has riders.
  start: ["tx-harris", "tx-galveston", "tx-fort-bend"],
  // Main stations: one per county region, at its biggest place except where a comment says why.
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. port, airport = their names, if it has a big one. scenic = a
  // place tourists travel to. Points are the Census points, except where a comment says the
  // station is at the downtown (NOTES.md).
  stations: [
    // Level 1: Houston and the Gulf Coast
    // Houston: the state's biggest city, size 5 (as Los Angeles and Phoenix). The Port of Houston
    // (the Ship Channel, with the Barbours Cut and Bayport container terminals) is the Gulf's
    // busiest; George Bush Intercontinental is the bigger of its two big airports (Hobby is the
    // other: one per station). At downtown (City Hall); the Census point is 2.1 miles north-west.
    { id: "HOU", name: "Houston", county: "tx-harris", lat: 29.76, lon: -95.37, port: "Port of Houston", airport: "George Bush Intercontinental", type: "metro", size: 5, pop: 4731, main: true, level: "houston" },
    // Sugar Land: Fort Bend's biggest city (Richmond, the seat, is smaller), size 4 by its 823k (as
    // Everett's 828k).
    { id: "SGL", name: "Sugar Land", county: "tx-fort-bend", lat: 29.59, lon: -95.63, type: "metro", size: 4, pop: 823, main: true, level: "houston" },
    // Conroe: the seat and the biggest incorporated city (The Woodlands is a CDP with no population
    // in raw/), size 3 by its 620k (as Overland Park and Aurora). At the courthouse square; the
    // Census point is 2 miles north-west.
    { id: "CONR", name: "Conroe", county: "tx-montgomery", lat: 30.31, lon: -95.46, type: "metro", size: 3, pop: 620, main: true, level: "houston" },
    // Pearland: Brazoria's biggest city by far (126k; Lake Jackson 28k), Houston's southern suburb
    // on TX-35, size 3. At its old townsite (Main Street and Broadway); the Census point is 2 miles
    // west. Port Freeport, on the county's coast, is for a town.
    { id: "PRLD", name: "Pearland", county: "tx-brazoria", lat: 29.56, lon: -95.29, type: "metro", size: 3, pop: 372, main: true, level: "houston" },
    // Galveston, not League City (114,348, the biggest): Galveston (53,695) is the seat, the island
    // city at the end of I-45, the Port of Galveston (cruise ships and cargo) and scenic (the
    // Strand, the Victorian East End, the beaches); League City is Houston's Clear Lake suburb at
    // the county's north edge, 21 miles from downtown Houston, and is for a town (as Oklahoma's El
    // Reno over Yukon). At downtown (the Strand); the Census point is 12.7 miles south-west, in the
    // middle of the island-long city limits. Coast, so the first track (Houston–Galveston) has
    // riders.
    { id: "GALV", name: "Galveston", county: "tx-galveston", lat: 29.3, lon: -94.8, port: "Port of Galveston", scenic: true, type: "coast", size: 3, pop: 351, main: true, level: "houston" },
    // Prairie View, not Katy (21,882, tagged Waller): Katy's Census point falls in its Waller
    // County part, but its old downtown is not in Waller (it falls in Fort Bend's outline on this
    // map; the old town is on the Harris side). Prairie View (8,192) is the biggest place centred
    // in the county, with Prairie View A&M University, on US-290 by Hempstead (the seat). Waller
    // County is ranches and farms (Hempstead's watermelons), so farm.
    { id: "PVW", name: "Prairie View", county: "tx-waller", lat: 30.08, lon: -95.98, type: "farm", size: 1, pop: 57, main: true, level: "houston" },
    // Dayton: the biggest place by 497 people (Liberty, the seat, 8 miles east on US-90 and the
    // Trinity, is a town). Rice, cattle and timber, so farm; size 2 by its 92k. At downtown; the
    // Census point is 3.7 miles south-west.
    { id: "DAYT", name: "Dayton", county: "tx-liberty", lat: 30.05, lon: -94.89, type: "farm", size: 2, pop: 92, main: true, level: "houston" },
    // Mont Belvieu: the biggest place (Anahuac, the seat, is a town), at Baytown's east edge by
    // I-10, over the salt domes that store the Gulf's natural gas liquids. Chambers County is rice
    // farms, cattle and Trinity Bay's marshes, so farm.
    { id: "MTBV", name: "Mont Belvieu", county: "tx-chambers", lat: 29.85, lon: -94.87, type: "farm", size: 1, pop: 47, main: true, level: "houston" },
    // Beaumont: the Golden Triangle's city on the Neches, with Port Arthur and Sabine Pass on the
    // Gulf, so coast. The Port of Beaumont is one of the country's busiest by tonnage (military
    // cargo). At downtown; the Census point is 2.7 miles west.
    { id: "BMNT", name: "Beaumont", county: "tx-jefferson", lat: 30.08, lon: -94.1, port: "Port of Beaumont", type: "coast", size: 2, pop: 257, main: true, level: "houston" },
    // Orange: on the Sabine at the Louisiana line (I-10), with its shipyards and Chemical Row; size
    // 2 by its 85k. At downtown by the river; the Census point is 2.5 miles north.
    { id: "ORNG", name: "Orange", county: "tx-orange", lat: 30.09, lon: -93.74, type: "metro", size: 2, pop: 85, main: true, level: "houston" },
    // Lumberton: the biggest place (twice Silsbee), Beaumont's northern suburb on US-69 at the Big
    // Thicket's south edge. Timber country, so farm.
    { id: "LMBT", name: "Lumberton", county: "tx-hardin", lat: 30.25, lon: -94.21, type: "farm", size: 1, pop: 56, main: true, level: "houston" },
    // Jasper: on US-96 and US-190 in the Big Thicket's pinewoods, below Sam Rayburn Reservoir.
    // Timber country, so farm (there is no forest type: as Oklahoma's Idabel).
    { id: "JSPR", name: "Jasper", county: "tx-jasper-newton-tyler", lat: 30.92, lon: -93.99, type: "farm", size: 1, pop: 65, main: true, level: "houston" },
    // Livingston: on US-59 (I-69) by Lake Livingston; the Alabama-Coushatta reservation is east of
    // town.
    { id: "LVNG", name: "Livingston", county: "tx-polk", lat: 30.71, lon: -94.94, type: "farm", size: 1, pop: 50, main: true, level: "houston" },
    // Shepherd: the biggest place (Coldspring, the seat, is a town), on US-59 by the Sam Houston
    // National Forest.
    { id: "SHPD", name: "Shepherd", county: "tx-san-jacinto", lat: 30.49, lon: -95.01, type: "farm", size: 1, pop: 27, main: true, level: "houston" },
    // Huntsville: Sam Houston State University and the prison system's headquarters, on I-45, so
    // metro; size 2 by its 76k.
    { id: "HNTV", name: "Huntsville", county: "tx-walker", lat: 30.7, lon: -95.55, type: "metro", size: 2, pop: 76, main: true, level: "houston" },
    // Brenham: Blue Bell's creamery town on US-290, with Washington-on-the-Brazos (where Texas
    // declared independence) 15 miles north-east.
    { id: "BRNH", name: "Brenham", county: "tx-grimes-washington", lat: 30.16, lon: -96.4, type: "farm", size: 1, pop: 65, main: true, level: "houston" },
    // Sealy: on I-10 west of Katy.
    { id: "SEAL", name: "Sealy", county: "tx-austin-colorado", lat: 29.76, lon: -96.16, type: "farm", size: 1, pop: 51, main: true, level: "houston" },
    // Bay City: the seat on the lower Colorado, inland from Matagorda Bay; rice and cotton, so
    // farm. Size 2 by its 78k.
    { id: "BAYC", name: "Bay City", county: "tx-matagorda-wharton", lat: 28.98, lon: -95.96, type: "farm", size: 2, pop: 78, main: true, level: "houston" },
    // Port Lavaca: on Lavaca Bay (the causeway to Point Comfort's plants), so coast.
    { id: "PTLV", name: "Port Lavaca", county: "tx-calhoun-jackson", lat: 28.62, lon: -96.63, type: "coast", size: 1, pop: 35, main: true, level: "houston" },
    // Victoria: the Crossroads, between Houston, San Antonio and Corpus Christi, so metro (size 2).
    // At downtown (De Leon Plaza); the Census point is 2.1 miles north-east.
    { id: "VICT", name: "Victoria", county: "tx-victoria", lat: 28.8, lon: -97, type: "metro", size: 2, pop: 91, main: true, level: "houston" },
    // College Station: Texas A&M University; the biggest city (Bryan, the seat, is a town). At the
    // campus (Academic Plaza, by Northgate), as the city has no old downtown; the Census point is
    // 3.5 miles south-east.
    { id: "BCS", name: "College Station", county: "tx-brazos", lat: 30.62, lon: -96.34, type: "metro", size: 2, pop: 234, main: true, level: "houston" },
    // Rockdale: the biggest place by 18 people (Cameron, Milam's seat, is a town), on US-79 and the
    // Union Pacific.
    { id: "RKDL", name: "Rockdale", county: "tx-burleson-milam", lat: 30.66, lon: -97.01, type: "farm", size: 1, pop: 42, main: true, level: "houston" },
    // Madisonville: on I-45 between Houston and Dallas.
    { id: "MDVL", name: "Madisonville", county: "tx-leon-madison", lat: 30.95, lon: -95.91, type: "farm", size: 1, pop: 29, main: true, level: "houston" },
    // Crockett: on US-287 and TX-21 (El Camino Real), between the Davy Crockett National Forest and
    // the Trinity.
    { id: "CRKT", name: "Crockett", county: "tx-houston-trinity", lat: 31.32, lon: -95.46, type: "farm", size: 1, pop: 36, main: true, level: "houston" },
    // Giddings: the biggest place (La Grange, 596 fewer, is a town), where US-290 meets US-77.
    { id: "GDNG", name: "Giddings", county: "tx-fayette-lee", lat: 30.18, lon: -96.93, type: "farm", size: 1, pop: 42, main: true, level: "houston" },
    // Cuero: on the Guadalupe where US-183 meets US-87 (Turkeyfest).
    { id: "CUER", name: "Cuero", county: "tx-dewitt-goliad-lavaca", lat: 29.1, lon: -97.29, type: "farm", size: 1, pop: 47, main: true, level: "houston" },
    // Level 2: Dallas–Fort Worth, North and East Texas
    // Dallas: size 5 (2.6M). Dallas Love Field is its own big airport (DFW International's
    // terminals are in Tarrant County, Fort Worth's region). At downtown (City Hall and Main
    // Street); the Census point is 2.2 miles north-east.
    { id: "DLS", name: "Dallas", county: "tx-dallas", lat: 32.78, lon: -96.8, airport: "Dallas Love Field", type: "metro", size: 5, pop: 2611, main: true, level: "dfw" },
    // Fort Worth: size 5 by Tarrant's 2.1M (as Seattle's King County, 2.3M; the city, 919k, is
    // bigger than Seattle or San Francisco). Dallas/Fort Worth International's terminals are in
    // Tarrant County. At downtown (Sundance Square); the Census point is 2.5 miles north-west.
    { id: "FTW", name: "Fort Worth", county: "tx-tarrant", lat: 32.75, lon: -97.33, airport: "Dallas/Fort Worth International", type: "metro", size: 5, pop: 2111, main: true, level: "dfw" },
    // Plano: Collin's biggest city (Frisco and McKinney, the seat, are towns), size 4 by its 1.07M
    // (as Concord's Contra Costa, 1.17M). At downtown Plano (15th Street and the DART station); the
    // Census point is 3.5 miles north-west.
    { id: "PLNO", name: "Plano", county: "tx-collin", lat: 33.02, lon: -96.7, type: "metro", size: 4, pop: 1066, main: true, level: "dfw" },
    // Denton: the seat and biggest city (the University of North Texas and Texas Woman's
    // University), size 4 by its 906k (as Tacoma's Pierce, 921k).
    { id: "DTN", name: "Denton", county: "tx-denton", lat: 33.22, lon: -97.14, type: "metro", size: 4, pop: 906, main: true, level: "dfw" },
    // Waxahachie: the seat and biggest city, on I-35E south of Dallas.
    { id: "WAXA", name: "Waxahachie", county: "tx-ellis", lat: 32.4, lon: -96.84, type: "metro", size: 2, pop: 192, main: true, level: "dfw" },
    // Cleburne, not Burleson (47,643, the biggest): Cleburne (31,285) is the seat in the middle of
    // the county, on US-67, the BNSF and Amtrak's Texas Eagle; Burleson is Fort Worth's southern
    // suburb at the Tarrant line, 14 miles from downtown Fort Worth, and is for a town (as
    // Oklahoma's El Reno over Yukon).
    { id: "CLBN", name: "Cleburne", county: "tx-johnson", lat: 32.35, lon: -97.41, type: "metro", size: 2, pop: 180, main: true, level: "dfw" },
    // Forney: the biggest place (Terrell and Kaufman, the seat, are towns), Dallas's eastern suburb
    // on US-80.
    { id: "FRNY", name: "Forney", county: "tx-kaufman", lat: 32.74, lon: -96.45, type: "metro", size: 2, pop: 145, main: true, level: "dfw" },
    // Rockwall: the seat, on Lake Ray Hubbard's east shore and I-30. At the courthouse square; the
    // Census point is 1.5 miles south-east.
    { id: "RKWL", name: "Rockwall", county: "tx-rockwall", lat: 32.93, lon: -96.46, type: "metro", size: 2, pop: 108, main: true, level: "dfw" },
    // Weatherford: the seat, on I-20 west of Fort Worth. At the courthouse square; the Census point
    // is 1.7 miles east.
    { id: "WFRD", name: "Weatherford", county: "tx-parker", lat: 32.76, lon: -97.8, type: "metro", size: 2, pop: 148, main: true, level: "dfw" },
    // Greenville: on I-30 in the Blackland Prairie, north-east of Dallas. At downtown; the Census
    // point is 1.9 miles south.
    { id: "GRNV", name: "Greenville", county: "tx-hunt", lat: 33.14, lon: -96.11, type: "metro", size: 2, pop: 100, main: true, level: "dfw" },
    // Decatur: the seat, where US-287 meets US-380; ranches and the Barnett Shale's gas wells, so
    // farm. Size 2 by its 69k (Fort Worth's north-west edge).
    { id: "DCTR", name: "Decatur", county: "tx-wise", lat: 33.23, lon: -97.59, type: "farm", size: 2, pop: 69, main: true, level: "dfw" },
    // Granbury: the seat, with its old square on Lake Granbury (the Brazos); ranches and the lake,
    // so farm. Size 2 by its 62k (Fort Worth's south-west edge).
    { id: "GNBY", name: "Granbury", county: "tx-hood", lat: 32.43, lon: -97.78, type: "farm", size: 2, pop: 62, main: true, level: "dfw" },
    // Sherman: with Denison, Texoma's twin cities on US-75 by Lake Texoma.
    { id: "SHRM", name: "Sherman", county: "tx-grayson", lat: 33.63, lon: -96.63, type: "metro", size: 2, pop: 136, main: true, level: "dfw" },
    // Gainesville: on I-35 and the BNSF (Amtrak's Heartland Flyer) by the Red River.
    { id: "GNVL", name: "Gainesville", county: "tx-cooke", lat: 33.64, lon: -97.15, type: "farm", size: 1, pop: 42, main: true, level: "dfw" },
    // Bonham: on US-82 between Sherman and Paris (Sam Rayburn's home town).
    { id: "BONH", name: "Bonham", county: "tx-fannin", lat: 33.59, lon: -96.19, type: "farm", size: 1, pop: 36, main: true, level: "dfw" },
    // Paris: north-east Texas's city on US-82 and US-271 (its Eiffel Tower wears a cowboy hat), so
    // metro (as Oklahoma's Ardmore).
    { id: "PARS", name: "Paris", county: "tx-lamar", lat: 33.67, lon: -95.55, type: "metro", size: 1, pop: 50, main: true, level: "dfw" },
    // Sulphur Springs: on I-30, in Texas's dairy country, so farm.
    { id: "SLSP", name: "Sulphur Springs", county: "tx-delta-hopkins", lat: 33.14, lon: -95.61, type: "farm", size: 1, pop: 42, main: true, level: "dfw" },
    // Mount Pleasant: where I-30 meets US-271.
    { id: "MTPL", name: "Mount Pleasant", county: "tx-franklin-red-river-titus", lat: 33.16, lon: -94.97, type: "farm", size: 1, pop: 53, main: true, level: "dfw" },
    // Texarkana: the Texas half of the twin city, on I-30 and the Union Pacific (Amtrak's Texas
    // Eagle). At downtown by State Line Avenue; the Census point is 2.7 miles north-west.
    { id: "TXK", name: "Texarkana", county: "tx-bowie", lat: 33.43, lon: -94.05, type: "metro", size: 2, pop: 93, main: true, level: "dfw" },
    // Atlanta: the biggest place, on US-59 by Wright Patman Lake. Jefferson, the old riverport, is
    // a town.
    { id: "ATLT", name: "Atlanta", county: "tx-cass-marion-morris", lat: 33.11, lon: -94.17, type: "farm", size: 1, pop: 50, main: true, level: "dfw" },
    // Gilmer: the biggest place, Upshur's seat (Upshur is the bigger county).
    { id: "GLMR", name: "Gilmer", county: "tx-camp-upshur", lat: 32.73, lon: -94.95, type: "farm", size: 1, pop: 53, main: true, level: "dfw" },
    // Mineola: the biggest place, on US-80 and the Union Pacific (Amtrak's Texas Eagle).
    { id: "MNLA", name: "Mineola", county: "tx-rains-wood", lat: 32.65, lon: -95.48, type: "farm", size: 1, pop: 57, main: true, level: "dfw" },
    // Canton: the seat, on I-20 (First Monday Trade Days).
    { id: "CTON", name: "Canton", county: "tx-van-zandt", lat: 32.55, lon: -95.86, type: "farm", size: 1, pop: 60, main: true, level: "dfw" },
    // Tyler: the Rose City, east Texas's biggest city, so metro (size 2). At downtown (the square);
    // the Census point is 2.3 miles south.
    { id: "TYLR", name: "Tyler", county: "tx-smith", lat: 32.35, lon: -95.3, type: "metro", size: 2, pop: 233, main: true, level: "dfw" },
    // Longview: the East Texas oil field's city on I-20 and the Union Pacific (Amtrak's Texas
    // Eagle). At downtown; the Census point is 2 miles north-west.
    { id: "LGVW", name: "Longview", county: "tx-gregg", lat: 32.5, lon: -94.74, type: "metro", size: 2, pop: 124, main: true, level: "dfw" },
    // Marshall: on I-20 and the Union Pacific (Amtrak's Texas Eagle), with East Texas Baptist
    // University; size 2 by its 69k.
    { id: "MSHL", name: "Marshall", county: "tx-harrison", lat: 32.54, lon: -94.35, type: "metro", size: 2, pop: 69, main: true, level: "dfw" },
    // Henderson: the seat, by the East Texas oil field's discovery well.
    { id: "HNDR", name: "Henderson", county: "tx-rusk", lat: 32.16, lon: -94.8, type: "farm", size: 1, pop: 52, main: true, level: "dfw" },
    // Carthage: the biggest place, Panola's seat on US-59 (Center, Shelby's seat, is a town).
    { id: "CRTH", name: "Carthage", county: "tx-panola-shelby", lat: 32.15, lon: -94.34, type: "farm", size: 1, pop: 47, main: true, level: "dfw" },
    // Jacksonville: the biggest place (Rusk, the seat, is a town), on US-69 and US-79.
    { id: "JKVL", name: "Jacksonville", county: "tx-cherokee", lat: 31.96, lon: -95.27, type: "farm", size: 1, pop: 50, main: true, level: "dfw" },
    // Palestine: on US-79 and the Union Pacific (Amtrak's Texas Eagle), at the Texas State
    // Railroad's east end.
    { id: "PLST", name: "Palestine", county: "tx-anderson", lat: 31.75, lon: -95.65, type: "farm", size: 1, pop: 58, main: true, level: "dfw" },
    // Athens: the seat, by Cedar Creek Reservoir; size 2 by its 82k.
    { id: "ATHN", name: "Athens", county: "tx-henderson", lat: 32.2, lon: -95.83, type: "farm", size: 2, pop: 82, main: true, level: "dfw" },
    // Corsicana: on I-45 south of Dallas, the region's city (Navarro College), so metro.
    { id: "CRSC", name: "Corsicana", county: "tx-navarro", lat: 32.08, lon: -96.47, type: "metro", size: 1, pop: 53, main: true, level: "dfw" },
    // Mexia: the biggest place, on US-84 and TX-14 (Groesbeck and Fairfield, the seats, are towns).
    { id: "MEXI", name: "Mexia", county: "tx-freestone-limestone", lat: 31.68, lon: -96.48, type: "farm", size: 1, pop: 42, main: true, level: "dfw" },
    // Nacogdoches: Texas's oldest town, with Stephen F. Austin State University, so metro (size 2).
    { id: "NAC", name: "Nacogdoches", county: "tx-nacogdoches", lat: 31.61, lon: -94.65, type: "metro", size: 2, pop: 65, main: true, level: "dfw" },
    // Lufkin: Deep East Texas's timber city on US-59, so metro (size 2).
    { id: "LUFK", name: "Lufkin", county: "tx-angelina", lat: 31.32, lon: -94.73, type: "metro", size: 2, pop: 86, main: true, level: "dfw" },
    // San Augustine: the biggest place, between the Angelina and Sabine national forests.
    { id: "SNAU", name: "San Augustine", county: "tx-sabine-san-augustine", lat: 31.53, lon: -94.11, type: "farm", size: 1, pop: 18, main: true, level: "dfw" },
    // Waco: on I-35 and the Brazos (Baylor University), so metro (size 2). At downtown by the
    // Brazos; the Census point is 3 miles west.
    { id: "WACO", name: "Waco", county: "tx-mclennan", lat: 31.55, lon: -97.14, type: "metro", size: 2, pop: 261, main: true, level: "dfw" },
    // Marlin: the biggest place, on TX-6 down the Brazos bottoms.
    { id: "MRLN", name: "Marlin", county: "tx-falls-robertson", lat: 31.31, lon: -96.89, type: "farm", size: 1, pop: 34, main: true, level: "dfw" },
    // Hillsboro: where I-35W and I-35E split, between Lake Whitney and the Blackland Prairie.
    { id: "HBRO", name: "Hillsboro", county: "tx-bosque-hill", lat: 32.01, lon: -97.11, type: "farm", size: 1, pop: 54, main: true, level: "dfw" },
    // Stephenville: Tarleton State University, but Erath is the Cross Timbers' dairy and ranch
    // county, so farm.
    { id: "STPH", name: "Stephenville", county: "tx-erath-somervell", lat: 32.21, lon: -98.22, type: "farm", size: 1, pop: 52, main: true, level: "dfw" },
    // Mineral Wells: the old spa town (the Baker Hotel) where US-180 meets US-281, below Possum
    // Kingdom's hills. At downtown; the Census point is 2 miles north-east.
    { id: "MWLS", name: "Mineral Wells", county: "tx-jack-palo-pinto", lat: 32.81, lon: -98.11, type: "farm", size: 1, pop: 37, main: true, level: "dfw" },
    // Bowie: on US-287 and US-81 (the town is in Montague County, not Texarkana's Bowie County).
    { id: "BOWI", name: "Bowie", county: "tx-clay-montague", lat: 33.56, lon: -97.85, type: "farm", size: 1, pop: 30, main: true, level: "dfw" },
    // Level 3: Austin, San Antonio and South Texas
    // Austin: the capital, size 4 by Travis's 1.29M (as Denver, Sacramento and Salt Lake City;
    // Denver's metro is bigger than Austin's). Austin–Bergstrom International is its airport. At
    // the Capitol and Congress Avenue; the Census point is 2.1 miles north-west.
    { id: "ATX", name: "Austin", county: "tx-travis", lat: 30.27, lon: -97.74, airport: "Austin–Bergstrom International", type: "metro", size: 4, pop: 1290, main: true, level: "south" },
    // Round Rock: Williamson's biggest city (Cedar Park and Georgetown, the seat, are towns), size
    // 3 by its 609k (as Overland Park and Aurora). At downtown (Main Street); the Census point is
    // 1.7 miles north-east.
    { id: "RRCK", name: "Round Rock", county: "tx-williamson", lat: 30.51, lon: -97.68, type: "metro", size: 3, pop: 609, main: true, level: "south" },
    // San Marcos: the seat and biggest city, with Texas State University, on I-35 between Austin
    // and San Antonio, so metro.
    { id: "SMTX", name: "San Marcos", county: "tx-hays", lat: 29.87, lon: -97.94, type: "metro", size: 2, pop: 241, main: true, level: "south" },
    // Bastrop: tied with Elgin in raw/ (9,692 each, a data quirk). Bastrop is the seat, in the
    // middle of the county where TX-71 crosses the Colorado; Elgin is at the north edge on US-290
    // and is a town. The Lost Pines and farms at Austin's east edge, so farm; size 2 by its 97k.
    { id: "BAST", name: "Bastrop", county: "tx-bastrop", lat: 30.11, lon: -97.32, type: "farm", size: 2, pop: 97, main: true, level: "south" },
    // Lockhart: the biggest place and Caldwell's seat on US-183 (Texas's barbecue capital); cattle
    // and farms, so farm.
    { id: "LKHT", name: "Lockhart", county: "tx-caldwell-gonzales", lat: 29.88, lon: -97.68, type: "farm", size: 1, pop: 66, main: true, level: "south" },
    // San Antonio: size 5 (2.0M); San Antonio International is its airport. Not marked scenic, as
    // tourists leave from metro stations that aren't scenic (js/game.js): the Alamo, the River Walk
    // and the Spanish missions are for scenic towns. At downtown (Alamo Plaza); the Census point is
    // 3.6 miles north-west.
    { id: "SA", name: "San Antonio", county: "tx-bexar", lat: 29.42, lon: -98.49, airport: "San Antonio International", type: "metro", size: 5, pop: 2009, main: true, level: "south" },
    // New Braunfels: the seat and biggest city, on I-35 where the Comal meets the Guadalupe
    // (Gruene, Schlitterbahn).
    { id: "NBR", name: "New Braunfels", county: "tx-comal", lat: 29.7, lon: -98.12, type: "metro", size: 2, pop: 161, main: true, level: "south" },
    // Seguin, not Schertz (42,017, the biggest): Seguin (29,439) is the seat, in the middle of the
    // county on I-10 and the Guadalupe; Schertz is San Antonio's north-east suburb on I-35 by
    // Randolph Air Force Base, at the county's west edge (its city hall falls in Bexar on this
    // map), and is for a town.
    { id: "SEGN", name: "Seguin", county: "tx-guadalupe", lat: 29.59, lon: -97.97, type: "metro", size: 2, pop: 173, main: true, level: "south" },
    // Floresville: the seat, on US-181 (the peanut festival).
    { id: "FLRS", name: "Floresville", county: "tx-wilson", lat: 29.15, lon: -98.17, type: "farm", size: 1, pop: 50, main: true, level: "south" },
    // Hondo: the seat, on US-90 and the Union Pacific's Sunset Route west of San Antonio.
    { id: "HOND", name: "Hondo", county: "tx-medina", lat: 29.35, lon: -99.16, type: "farm", size: 1, pop: 51, main: true, level: "south" },
    // Boerne: the biggest place, San Antonio's Hill Country suburb on I-10, so metro; Bandera, the
    // "Cowboy Capital of the World", is a town.
    { id: "BOER", name: "Boerne", county: "tx-bandera-kendall", lat: 29.78, lon: -98.73, type: "metro", size: 1, pop: 65, main: true, level: "south" },
    // Pleasanton: the biggest place, on US-281 and I-37 south of San Antonio.
    { id: "PLTN", name: "Pleasanton", county: "tx-atascosa-live-oak-mcmullen", lat: 28.96, lon: -98.5, type: "farm", size: 1, pop: 61, main: true, level: "south" },
    // Killeen: Bell's biggest city, by Fort Cavazos (Fort Hood), size 3 by its 371k. Temple, on
    // I-35 and the BNSF, is a town. At downtown; the Census point is 2.9 miles south.
    { id: "KLN", name: "Killeen", county: "tx-bell", lat: 31.12, lon: -97.73, type: "metro", size: 3, pop: 371, main: true, level: "south" },
    // Copperas Cove: the biggest city (Gatesville, the seat, is a town), at Fort Cavazos's west
    // gate; size 2 by its 83k.
    { id: "CPCV", name: "Copperas Cove", county: "tx-coryell", lat: 31.12, lon: -97.91, type: "metro", size: 2, pop: 83, main: true, level: "south" },
    // Lampasas: where US-183 meets US-190 and the BNSF.
    { id: "LAMP", name: "Lampasas", county: "tx-lampasas-mills-san-saba", lat: 31.06, lon: -98.18, type: "farm", size: 1, pop: 32, main: true, level: "south" },
    // Marble Falls: the biggest place, on US-281 in the Highland Lakes; ranches, so farm.
    { id: "MBFL", name: "Marble Falls", county: "tx-burnet-llano", lat: 30.56, lon: -98.28, type: "farm", size: 1, pop: 70, main: true, level: "south" },
    // Fredericksburg: the German Hill Country town on US-290 (peaches, wineries, the National
    // Museum of the Pacific War), so scenic.
    { id: "FBG", name: "Fredericksburg", county: "tx-blanco-gillespie", lat: 30.27, lon: -98.88, scenic: true, type: "farm", size: 1, pop: 38, main: true, level: "south" },
    // Kerrville: the Hill Country's city, on I-10 and the Guadalupe, so metro.
    { id: "KERV", name: "Kerrville", county: "tx-kerr", lat: 30.04, lon: -99.13, type: "metro", size: 1, pop: 53, main: true, level: "south" },
    // Uvalde: where US-90 meets US-83, below the Frio and Nueces canyons.
    { id: "UVLD", name: "Uvalde", county: "tx-edwards-real-uvalde", lat: 29.22, lon: -99.78, type: "farm", size: 1, pop: 29, main: true, level: "south" },
    // Pearsall: on I-35 between San Antonio and Laredo; peanuts and cattle.
    { id: "PRSL", name: "Pearsall", county: "tx-frio-la-salle", lat: 28.89, lon: -99.1, type: "farm", size: 1, pop: 25, main: true, level: "south" },
    // Crystal City: the Winter Garden's "Spinach Capital" (Popeye's statue).
    { id: "CRYC", name: "Crystal City", county: "tx-dimmit-zavala", lat: 28.69, lon: -99.83, type: "farm", size: 1, pop: 18, main: true, level: "south" },
    // Eagle Pass: the border city on the Rio Grande (US-57, and the Union Pacific's bridge to
    // Piedras Negras), so metro.
    { id: "EGPS", name: "Eagle Pass", county: "tx-maverick", lat: 28.71, lon: -100.48, type: "metro", size: 1, pop: 58, main: true, level: "south" },
    // Del Rio: on US-90 by Amistad Reservoir, where the Chihuahuan Desert begins (Seminole Canyon's
    // rock art), so desert.
    { id: "DLRO", name: "Del Rio", county: "tx-kinney-val-verde", lat: 29.37, lon: -100.88, type: "desert", size: 1, pop: 51, main: true, level: "south" },
    // Laredo: the biggest land port on the Mexican border (I-35, and the Union Pacific and Kansas
    // City Southern bridges), so metro. Size 2 by its 267k (as Regina, 277k). At downtown (San
    // Agustín Plaza); the Census point is 4.4 miles north.
    { id: "LRD", name: "Laredo", county: "tx-webb", lat: 27.5, lon: -99.51, type: "metro", size: 2, pop: 267, main: true, level: "south" },
    // Zapata: neither county has an incorporated place, so the station is at Zapata (a CDP), Zapata
    // County's seat on US-83 by Falcon Lake. Ranch country, so farm.
    { id: "ZAPA", name: "Zapata", county: "tx-jim-hogg-zapata", lat: 26.9, lon: -99.26, type: "farm", size: 1, pop: 19, main: true, level: "south" },
    // Rio Grande City: Starr's seat and biggest city, on US-83; farms and ranches, so farm.
    { id: "RGC", name: "Rio Grande City", county: "tx-starr", lat: 26.38, lon: -98.82, type: "farm", size: 1, pop: 66, main: true, level: "south" },
    // McAllen: the Rio Grande Valley's biggest city, size 4 by Hidalgo's 871k (as El Paso, 866k,
    // and Tacoma, 921k). Its airport (about 0.9 million a year) is under the bar. At downtown (Main
    // Street); the Census point is 2 miles north-west.
    { id: "MCLN", name: "McAllen", county: "tx-hidalgo", lat: 26.2, lon: -98.23, type: "metro", size: 4, pop: 871, main: true, level: "south" },
    // Brownsville: the Port of Brownsville (its ship channel) and South Padre Island, so coast;
    // size 3 by its 421k. At downtown by the Gateway International Bridge; the Census point is 7.3
    // miles north-east, in the middle of the city's limits.
    { id: "BRWN", name: "Brownsville", county: "tx-cameron", lat: 25.9, lon: -97.5, port: "Port of Brownsville", type: "coast", size: 3, pop: 421, main: true, level: "south" },
    // Kingsville: the King Ranch's town (and Texas A&M–Kingsville), so farm.
    { id: "KGVL", name: "Kingsville", county: "tx-kenedy-kleberg-willacy", lat: 27.51, lon: -97.86, type: "farm", size: 1, pop: 52, main: true, level: "south" },
    // Alice: the seat of Jim Wells, where US-281 meets TX-44.
    { id: "ALCE", name: "Alice", county: "tx-brooks-duval-jim-wells", lat: 27.76, lon: -98.07, type: "farm", size: 1, pop: 56, main: true, level: "south" },
    // Corpus Christi: the Coastal Bend's city, so coast, size 3 by its 353k. The Port of Corpus
    // Christi is one of the country's biggest by tonnage. At downtown on the bayfront; the Census
    // point is 14 miles east, in Corpus Christi Bay (the city's limits take in the bay and part of
    // Padre Island). Its airport (about 0.7 million) is under the bar.
    { id: "CRP", name: "Corpus Christi", county: "tx-nueces", lat: 27.8, lon: -97.4, port: "Port of Corpus Christi", type: "coast", size: 3, pop: 353, main: true, level: "south" },
    // Portland: the biggest place, across Nueces Bay from Corpus Christi on US-181, on Corpus
    // Christi Bay, so coast. Size 2 by its 69k.
    { id: "PTLD", name: "Portland", county: "tx-san-patricio", lat: 27.89, lon: -97.33, type: "coast", size: 2, pop: 69, main: true, level: "south" },
    // Rockport: on Aransas Bay (Fulton, the art colony), so coast. By the harbor, 0.7 miles north
    // of downtown, which this map's coastline leaves in the water; the Census point is 1.4 miles
    // north.
    { id: "RKPT", name: "Rockport", county: "tx-aransas-refugio", lat: 28.03, lon: -97.05, type: "coast", size: 1, pop: 31, main: true, level: "south" },
    // Beeville: where US-59 meets US-181.
    { id: "BEEV", name: "Beeville", county: "tx-bee-karnes", lat: 28.41, lon: -97.75, type: "farm", size: 1, pop: 46, main: true, level: "south" },
    // Level 4: West Texas and the Panhandle
    // Dalhart: the XIT Ranch's town, where US-87 meets US-54 and the Union Pacific crosses the
    // BNSF.
    { id: "DLHT", name: "Dalhart", county: "tx-dallam-hartley-oldham", lat: 36.06, lon: -102.51, type: "farm", size: 1, pop: 14, main: true, level: "west" },
    // Dumas: on US-287 north of Amarillo; feedlots and the meatpacking plant.
    { id: "DUMS", name: "Dumas", county: "tx-moore-sherman", lat: 35.86, lon: -101.97, type: "farm", size: 1, pop: 24, main: true, level: "west" },
    // Perryton: wheat and cattle on US-83 by Oklahoma.
    { id: "PRTN", name: "Perryton", county: "tx-hansford-lipscomb-ochiltree", lat: 36.39, lon: -100.8, type: "farm", size: 1, pop: 18, main: true, level: "west" },
    // Borger: the oil and refinery town above the Canadian, by Lake Meredith.
    { id: "BRGR", name: "Borger", county: "tx-carson-hutchinson", lat: 35.66, lon: -101.4, type: "farm", size: 1, pop: 26, main: true, level: "west" },
    // Pampa: on US-60 and the BNSF's Transcon.
    { id: "PAMP", name: "Pampa", county: "tx-gray-hemphill-roberts", lat: 35.55, lon: -100.97, type: "farm", size: 1, pop: 25, main: true, level: "west" },
    // Shamrock, not Wellington (1,890, 96 more people): Shamrock is the biggest place in Wheeler
    // County, which has two thirds of the region's people, where I-40 (Route 66) meets US-83 (the
    // U-Drop Inn). Wellington, Collingsworth's seat, is a town.
    { id: "SHAM", name: "Shamrock", county: "tx-collingsworth-wheeler", lat: 35.22, lon: -100.25, type: "farm", size: 1, pop: 8, main: true, level: "west" },
    // Clarendon: on US-287 and the BNSF south-east of Amarillo.
    { id: "CLRN", name: "Clarendon", county: "tx-armstrong-donley", lat: 34.94, lon: -100.89, type: "farm", size: 1, pop: 5, main: true, level: "west" },
    // Childress: where US-287 meets US-83. At downtown; the Census point is 4.1 miles west, as the
    // city's limits take in its airport.
    { id: "CHLD", name: "Childress", county: "tx-childress-cottle-hall", lat: 34.43, lon: -100.21, type: "farm", size: 1, pop: 11, main: true, level: "west" },
    // Hereford: the "Beef Capital" (feedlots) on US-60 and the BNSF's Transcon.
    { id: "HRFD", name: "Hereford", county: "tx-castro-deaf-smith-parmer", lat: 34.82, lon: -102.4, type: "farm", size: 1, pop: 36, main: true, level: "west" },
    // Amarillo: the Panhandle's city on I-40 and I-27, so metro, size 2 by Potter's 119k (the
    // city's south half is in Randall). Its airport (about 0.8 million a year) is under the bar.
    { id: "AMA", name: "Amarillo", county: "tx-potter", lat: 35.2, lon: -101.83, type: "metro", size: 2, pop: 119, main: true, level: "west" },
    // Canyon: Randall's biggest place with its centre in the county (Amarillo's south side counts
    // toward Amarillo, whose Census point is in Potter): the seat, West Texas A&M University and
    // the Panhandle-Plains Historical Museum, 12 miles from Palo Duro Canyon. A college town with
    // Amarillo's south side, so metro (size 2).
    { id: "CNYN", name: "Canyon", county: "tx-randall", lat: 34.99, lon: -101.92, type: "metro", size: 2, pop: 141, main: true, level: "west" },
    // Lubbock: the South Plains' city (Texas Tech), size 3 by its 311k (as Lincoln, 323k). Lubbock
    // Preston Smith International is at the bar (about a million a year). At downtown; the Census
    // point is 2.6 miles south-west.
    { id: "LBK", name: "Lubbock", county: "tx-lubbock", lat: 33.58, lon: -101.85, airport: "Lubbock Preston Smith International", type: "metro", size: 3, pop: 311, main: true, level: "west" },
    // Plainview: on I-27 between Amarillo and Lubbock; cotton and feedlots.
    { id: "PLVW", name: "Plainview", county: "tx-hale-swisher", lat: 34.19, lon: -101.72, type: "farm", size: 1, pop: 39, main: true, level: "west" },
    // Floydada: at the Caprock's edge (the "Pumpkin Capital").
    { id: "FLYD", name: "Floydada", county: "tx-briscoe-floyd-motley", lat: 33.98, lon: -101.34, type: "farm", size: 1, pop: 8, main: true, level: "west" },
    // Littlefield: on US-84 between Lubbock and Clovis.
    { id: "LTFD", name: "Littlefield", county: "tx-bailey-lamb", lat: 33.92, lon: -102.33, type: "farm", size: 1, pop: 20, main: true, level: "west" },
    // Levelland: west of Lubbock (South Plains College); cotton and oil.
    { id: "LVLD", name: "Levelland", county: "tx-cochran-hockley", lat: 33.58, lon: -102.36, type: "farm", size: 1, pop: 24, main: true, level: "west" },
    // Brownfield: on US-62/82 south-west of Lubbock.
    { id: "BRFD", name: "Brownfield", county: "tx-terry-yoakum", lat: 33.18, lon: -102.27, type: "farm", size: 1, pop: 20, main: true, level: "west" },
    // Ralls: the biggest place by 167 people (Crosbyton, the seat, is a town), on US-82.
    { id: "RALS", name: "Ralls", county: "tx-crosby-dickens", lat: 33.68, lon: -101.38, type: "farm", size: 1, pop: 7, main: true, level: "west" },
    // Lamesa: cotton country where US-87 meets US-180.
    { id: "LMSA", name: "Lamesa", county: "tx-borden-dawson-lynn", lat: 32.73, lon: -101.95, type: "farm", size: 1, pop: 19, main: true, level: "west" },
    // Snyder: oil and cotton, where US-84 meets US-180.
    { id: "SNYD", name: "Snyder", county: "tx-garza-kent-scurry", lat: 32.71, lon: -100.91, type: "farm", size: 1, pop: 24, main: true, level: "west" },
    // Vernon: on US-287 and the BNSF (the Waggoner Ranch). At downtown; the Census point is 1.7
    // miles west.
    { id: "VRNN", name: "Vernon", county: "tx-foard-hardeman-wilbarger", lat: 34.15, lon: -99.27, type: "farm", size: 1, pop: 18, main: true, level: "west" },
    // Seymour: where US-82 meets US-183 and US-283.
    { id: "SYMR", name: "Seymour", county: "tx-baylor-king-knox", lat: 33.6, lon: -99.26, type: "farm", size: 1, pop: 7, main: true, level: "west" },
    // Haskell: the biggest place (Stamford, a Jones County town tagged Haskell in raw/, and Anson,
    // Jones's seat, are towns).
    { id: "HSKL", name: "Haskell", county: "tx-haskell-jones-stonewall", lat: 33.16, lon: -99.73, type: "farm", size: 1, pop: 26, main: true, level: "west" },
    // Breckenridge: oil and ranches, where US-180 meets US-183.
    { id: "BRKR", name: "Breckenridge", county: "tx-shackelford-stephens-throckmorton", lat: 32.76, lon: -98.91, type: "farm", size: 1, pop: 14, main: true, level: "west" },
    // Cisco: the biggest place by 81 people (Clyde and Eastland are towns), on I-20 where US-183
    // crosses.
    { id: "CSCO", name: "Cisco", county: "tx-callahan-eastland", lat: 32.39, lon: -98.98, type: "farm", size: 1, pop: 31, main: true, level: "west" },
    // Graham: Young's seat, north of Possum Kingdom Lake.
    { id: "GRHM", name: "Graham", county: "tx-archer-young", lat: 33.1, lon: -98.58, type: "farm", size: 1, pop: 26, main: true, level: "west" },
    // Wichita Falls: north Texas's city (Sheppard Air Force Base, Midwestern State University), so
    // metro (size 2). At downtown; the Census point is 2.1 miles west.
    { id: "WFLS", name: "Wichita Falls", county: "tx-wichita", lat: 33.91, lon: -98.49, type: "metro", size: 2, pop: 129, main: true, level: "west" },
    // Abilene: the Big Country's city on I-20 (Dyess Air Force Base, three universities), so metro
    // (size 2).
    { id: "ABI", name: "Abilene", county: "tx-taylor", lat: 32.45, lon: -99.74, type: "metro", size: 2, pop: 143, main: true, level: "west" },
    // Sweetwater: on I-20 and the Union Pacific; wind farms and the rattlesnake roundup.
    { id: "SWTR", name: "Sweetwater", county: "tx-fisher-mitchell-nolan", lat: 32.47, lon: -100.41, type: "farm", size: 1, pop: 27, main: true, level: "west" },
    // Ballinger: where US-67 meets US-83 on the Colorado.
    { id: "BLNG", name: "Ballinger", county: "tx-coke-runnels-sterling", lat: 31.74, lon: -99.96, type: "farm", size: 1, pop: 15, main: true, level: "west" },
    // San Angelo: the Concho Valley's city (Goodfellow Air Force Base, Angelo State), so metro
    // (size 2).
    { id: "SANG", name: "San Angelo", county: "tx-tom-green", lat: 31.44, lon: -100.45, type: "metro", size: 2, pop: 120, main: true, level: "west" },
    // Brownwood: Howard Payne University, where US-67, US-84 and US-377 meet; ranches and Lake
    // Brownwood, so farm.
    { id: "BRWD", name: "Brownwood", county: "tx-brown-coleman", lat: 31.71, lon: -98.98, type: "farm", size: 1, pop: 46, main: true, level: "west" },
    // Comanche: the biggest place, where US-67 meets US-377.
    { id: "CMCH", name: "Comanche", county: "tx-comanche-hamilton", lat: 31.9, lon: -98.6, type: "farm", size: 1, pop: 22, main: true, level: "west" },
    // Brady: the "Heart of Texas", by the state's geographic centre.
    { id: "BRDY", name: "Brady", county: "tx-concho-mason-mcculloch", lat: 31.12, lon: -99.35, type: "farm", size: 1, pop: 15, main: true, level: "west" },
    // Junction: on I-10 where the North and South Llano meet.
    { id: "JNCT", name: "Junction", county: "tx-kimble-menard", lat: 30.49, lon: -99.77, type: "farm", size: 1, pop: 6, main: true, level: "west" },
    // Sonora: on I-10 (the Caverns of Sonora); sheep and goat ranches, so farm. Ozona is a CDP and
    // a town.
    { id: "SONR", name: "Sonora", county: "tx-crockett-schleicher-sutton", lat: 30.57, lon: -100.64, type: "farm", size: 1, pop: 9, main: true, level: "west" },
    // Big Lake: where the Permian Basin's oil was found (Santa Rita No. 1, 1923, the University of
    // Texas's oil), so desert (as New Mexico's Hobbs).
    { id: "BGLK", name: "Big Lake", county: "tx-irion-reagan", lat: 31.19, lon: -101.45, type: "desert", size: 1, pop: 5, main: true, level: "west" },
    // Big Spring: the region's city, on I-20 and the Union Pacific (Texas & Pacific), so metro.
    { id: "BGSP", name: "Big Spring", county: "tx-glasscock-howard-martin", lat: 32.24, lon: -101.49, type: "metro", size: 1, pop: 41, main: true, level: "west" },
    // Midland: the Permian Basin's business city (the "Tall City"), so metro (size 2). Midland
    // International is over the bar (over a million a year). At downtown; the Census point is 2.6
    // miles north-west.
    { id: "MIDL", name: "Midland", county: "tx-midland", lat: 32, lon: -102.08, airport: "Midland International Air and Space Port", type: "metro", size: 2, pop: 170, main: true, level: "west" },
    // Odessa: the oil field's service city in the sandhills (the meteor crater), so desert (as
    // Hobbs); size 2. At downtown; the Census point is 2.6 miles north-east.
    { id: "ODSA", name: "Odessa", county: "tx-ector", lat: 31.85, lon: -102.37, type: "desert", size: 2, pop: 165, main: true, level: "west" },
    // Andrews: the Permian Basin's north edge on US-385, so desert.
    { id: "ANDR", name: "Andrews", county: "tx-andrews-gaines", lat: 32.32, lon: -102.55, type: "desert", size: 1, pop: 40, main: true, level: "west" },
    // Crane: the oil town on US-385, so desert.
    { id: "CRAN", name: "Crane", county: "tx-crane-upton", lat: 31.39, lon: -102.35, type: "desert", size: 1, pop: 8, main: true, level: "west" },
    // Monahans: Ward's seat, on I-20 by the Monahans Sandhills, so desert. Its Census point is 12
    // miles west, in Winkler County (it is tagged Winkler in raw/); the station is at the town.
    { id: "MNHN", name: "Monahans", county: "tx-ward-winkler", lat: 31.59, lon: -102.89, type: "desert", size: 1, pop: 19, main: true, level: "west" },
    // Pecos ("Town of Pecos" in raw/): on I-20 and the Union Pacific (Texas & Pacific) by the Pecos
    // River, home of the world's first rodeo. At downtown; the Census point is 2.9 miles
    // south-west.
    { id: "PCOS", name: "Pecos", county: "tx-loving-reeves", lat: 31.42, lon: -103.49, type: "desert", size: 1, pop: 15, main: true, level: "west" },
    // Fort Stockton: on I-10 at Comanche Springs (the old fort).
    { id: "FTSK", name: "Fort Stockton", county: "tx-pecos-terrell", lat: 30.89, lon: -102.88, type: "desert", size: 1, pop: 16, main: true, level: "west" },
    // Alpine: the Big Bend's town (Sul Ross State, Amtrak's Sunset Limited) at 4,500 feet in the
    // Davis Mountains' foothills, so mountain (as New Mexico's Ruidoso).
    { id: "ALPN", name: "Alpine", county: "tx-brewster-jeff-davis-presidio", lat: 30.36, lon: -103.66, type: "mountain", size: 1, pop: 18, main: true, level: "west" },
    // Van Horn: on I-10 and the Union Pacific's Sunset Route below the Sierra Diablo, in the
    // Chihuahuan Desert, so desert.
    { id: "VNHN", name: "Van Horn", county: "tx-culberson-hudspeth", lat: 31.04, lon: -104.83, type: "desert", size: 1, pop: 5, main: true, level: "west" },
    // El Paso: size 4 by its 866k (as Tucson, 1.04M, and Albuquerque, 676k). El Paso International
    // is its airport. At downtown (San Jacinto Plaza); the Census point is 7 miles north-east, in
    // the middle of the city's limits around the Franklin Mountains.
    { id: "ELP", name: "El Paso", county: "tx-el-paso", lat: 31.76, lon: -106.49, airport: "El Paso International", type: "metro", size: 4, pop: 866, main: true, level: "west" },
  ],
  // Towns: they appear over time in the counties you own. Most are the region's next-biggest
  // places, spread out; scenic ones are places tourists travel to. Points are the Census points,
  // except where a comment says otherwise (NOTES.md).
  towns: [
    // Houston and the Gulf Coast
    // Pasadena: Houston's biggest suburb (152k), on the Ship Channel, size 2.
    { id: "PSDN", name: "Pasadena", county: "tx-harris", lat: 29.66, lon: -95.15, type: "metro", size: 2 },
    // Baytown: across the San Jacinto from La Porte (the Fred Hartman Bridge), size 2.
    { id: "BYTN", name: "Baytown", county: "tx-harris", lat: 29.76, lon: -94.97, type: "metro", size: 2 },
    // Humble: by George Bush Intercontinental, on US-59 (I-69).
    { id: "HMBL", name: "Humble", county: "tx-harris", lat: 29.99, lon: -95.26, type: "metro", size: 1 },
    { id: "TMBL", name: "Tomball", county: "tx-harris", lat: 30.1, lon: -95.62, type: "metro", size: 1 },
    // Johnson Space Center: NASA's Mission Control and Space Center Houston, at Clear Lake.
    { id: "JSC", name: "Johnson Space Center", county: "tx-harris", lat: 29.56, lon: -95.09, scenic: true, type: "metro", size: 1 },
    // San Jacinto Battleground: the monument where Texas won its independence (1836), on the Ship
    // Channel.
    { id: "SJAC", name: "San Jacinto Battleground", county: "tx-harris", lat: 29.75, lon: -95.09, scenic: true, type: "metro", size: 1 },
    { id: "MSCY", name: "Missouri City", county: "tx-fort-bend", lat: 29.56, lon: -95.54, type: "metro", size: 2 },
    // Rosenberg: on US-59 and the BNSF, by Richmond (the seat). At downtown; the Census point is 1
    // mile south-west.
    { id: "RSBG", name: "Rosenberg", county: "tx-fort-bend", lat: 29.56, lon: -95.81, type: "metro", size: 1 },
    // Katy: at its old downtown on I-10, at the corner of Harris, Waller and Fort Bend counties (on
    // the Harris side on this map; the Census point, 1.2 miles west, is in its Waller County part).
    { id: "KATY", name: "Katy", county: "tx-harris", lat: 29.79, lon: -95.82, type: "metro", size: 1 },
    // The Woodlands: the planned town (about 115k, a CDP with no population in raw/), size 2.
    { id: "WDLD", name: "The Woodlands", county: "tx-montgomery", lat: 30.17, lon: -95.51, type: "metro", size: 2 },
    // Willis: on I-45 by Lake Conroe.
    { id: "WLLS", name: "Willis", county: "tx-montgomery", lat: 30.43, lon: -95.48, type: "farm", size: 1 },
    { id: "ALVN", name: "Alvin", county: "tx-brazoria", lat: 29.42, lon: -95.22, type: "metro", size: 1 },
    // Lake Jackson: Dow Chemical's planned town at Brazosport.
    { id: "LKJN", name: "Lake Jackson", county: "tx-brazoria", lat: 29.05, lon: -95.45, type: "metro", size: 1 },
    // Freeport: Port Freeport (its Velasco container terminal) at the Brazos's old mouth. At
    // downtown; the Census point is 0.5 miles south-east.
    { id: "FRPT", name: "Freeport", county: "tx-brazoria", lat: 28.95, lon: -95.36, port: "Port Freeport", type: "coast", size: 1 },
    // League City: Galveston County's biggest city (114k), Houston's Clear Lake suburb, size 2.
    { id: "LGCY", name: "League City", county: "tx-galveston", lat: 29.49, lon: -95.11, type: "metro", size: 2 },
    // Texas City: the refinery port on Galveston Bay (52k). At downtown; the Census point (29.43,
    // -94.89) is in the bay, as the city takes in the Texas City Dike.
    { id: "TXCY", name: "Texas City", county: "tx-galveston", lat: 29.38, lon: -94.9, type: "coast", size: 2 },
    // Bolivar Peninsula: Crystal Beach and Gilchrist's beach towns (a CDP), by the Bolivar ferry
    // from Galveston or TX-87 from High Island.
    { id: "BOLP", name: "Bolivar Peninsula", county: "tx-galveston", lat: 29.49, lon: -94.57, type: "coast", size: 1 },
    // Hempstead: Waller County's seat, where US-290 meets TX-6.
    { id: "HMPS", name: "Hempstead", county: "tx-waller", lat: 30.1, lon: -96.08, type: "farm", size: 1 },
    // Liberty: Liberty County's seat, on the Trinity and US-90.
    { id: "LBTY", name: "Liberty", county: "tx-liberty", lat: 30.04, lon: -94.79, type: "farm", size: 1 },
    // Anahuac: Chambers County's seat, on Trinity Bay.
    { id: "ANHC", name: "Anahuac", county: "tx-chambers", lat: 29.77, lon: -94.68, type: "farm", size: 1 },
    // The Golden Triangle and the Big Thicket
    // Port Arthur: the refinery city on Sabine Lake (56k), size 2. At downtown (Procter Street);
    // the Census point is 3 miles north-east.
    { id: "PTAR", name: "Port Arthur", county: "tx-jefferson", lat: 29.87, lon: -93.93, type: "coast", size: 2 },
    { id: "VIDR", name: "Vidor", county: "tx-orange", lat: 30.13, lon: -93.99, type: "farm", size: 1 },
    { id: "SLSB", name: "Silsbee", county: "tx-hardin", lat: 30.35, lon: -94.18, type: "farm", size: 1 },
    // Big Thicket National Preserve: the "biological crossroads" of pine, cypress swamp and
    // prairie, at its visitor center north of Kountze (approx.).
    { id: "BTNP", name: "Big Thicket", county: "tx-hardin", lat: 30.46, lon: -94.39, scenic: true, type: "farm", size: 1 },
    // Woodville: Tyler County's seat.
    { id: "WDVL", name: "Woodville", county: "tx-jasper-newton-tyler", lat: 30.77, lon: -94.42, type: "farm", size: 1 },
    { id: "NEWT", name: "Newton", county: "tx-jasper-newton-tyler", lat: 30.85, lon: -93.75, type: "farm", size: 1 },
    // Onalaska: on Lake Livingston.
    { id: "ONLK", name: "Onalaska", county: "tx-polk", lat: 30.82, lon: -95.11, type: "farm", size: 1 },
    // Coldspring: San Jacinto County's seat.
    { id: "CLSP", name: "Coldspring", county: "tx-san-jacinto", lat: 30.59, lon: -95.13, type: "farm", size: 1 },
    { id: "NWVY", name: "New Waverly", county: "tx-walker", lat: 30.54, lon: -95.48, type: "farm", size: 1 },
    // The Brazos Valley and the coast to Victoria
    // Bryan: Brazos County's seat (84k), size 2.
    { id: "BRYN", name: "Bryan", county: "tx-brazos", lat: 30.67, lon: -96.38, type: "metro", size: 2 },
    { id: "NVST", name: "Navasota", county: "tx-grimes-washington", lat: 30.39, lon: -96.09, type: "farm", size: 1 },
    // Washington-on-the-Brazos: where Texas declared its independence (1836); the state historic
    // site.
    { id: "WOTB", name: "Washington-on-the-Brazos", county: "tx-grimes-washington", lat: 30.33, lon: -96.16, scenic: true, type: "farm", size: 1 },
    // Columbus: Colorado County's seat, on I-10 and the Colorado.
    { id: "CLMS", name: "Columbus", county: "tx-austin-colorado", lat: 29.7, lon: -96.56, type: "farm", size: 1 },
    // Bellville: Austin County's seat.
    { id: "BLVE", name: "Bellville", county: "tx-austin-colorado", lat: 29.95, lon: -96.26, type: "farm", size: 1 },
    // La Grange: Fayette County's seat, on the Colorado.
    { id: "LGRN", name: "La Grange", county: "tx-fayette-lee", lat: 29.91, lon: -96.88, type: "farm", size: 1 },
    { id: "SCHL", name: "Schulenburg", county: "tx-fayette-lee", lat: 29.68, lon: -96.91, type: "farm", size: 1 },
    // Cameron: Milam County's seat.
    { id: "CMRN", name: "Cameron", county: "tx-burleson-milam", lat: 30.86, lon: -96.98, type: "farm", size: 1 },
    // Caldwell: Burleson County's seat.
    { id: "CLWL", name: "Caldwell", county: "tx-burleson-milam", lat: 30.53, lon: -96.7, type: "farm", size: 1 },
    // Centerville: Leon County's seat, on I-45.
    { id: "CNTV", name: "Centerville", county: "tx-leon-madison", lat: 31.26, lon: -95.98, type: "farm", size: 1 },
    { id: "TRTY", name: "Trinity", county: "tx-houston-trinity", lat: 30.94, lon: -95.37, type: "farm", size: 1 },
    // Groveton: Trinity County's seat.
    { id: "GRVT", name: "Groveton", county: "tx-houston-trinity", lat: 31.06, lon: -95.13, type: "farm", size: 1 },
    { id: "ELCP", name: "El Campo", county: "tx-matagorda-wharton", lat: 29.2, lon: -96.27, type: "farm", size: 1 },
    // Palacios: the shrimp port on Tres Palacios Bay.
    { id: "PLCS", name: "Palacios", county: "tx-matagorda-wharton", lat: 28.71, lon: -96.23, type: "coast", size: 1 },
    // Edna: Jackson County's seat.
    { id: "EDNA", name: "Edna", county: "tx-calhoun-jackson", lat: 28.98, lon: -96.65, type: "farm", size: 1 },
    // Bloomington: a CDP south of Victoria toward Port Lavaca (the county's only other places are
    // CDPs).
    { id: "BLMG", name: "Bloomington", county: "tx-victoria", lat: 28.65, lon: -96.9, type: "farm", size: 1 },
    // Yoakum: on the DeWitt–Lavaca line (tagged Lavaca).
    { id: "YOAK", name: "Yoakum", county: "tx-dewitt-goliad-lavaca", lat: 29.29, lon: -97.15, type: "farm", size: 1 },
    // Goliad: Goliad County's seat, by Presidio La Bahía.
    { id: "GLAD", name: "Goliad", county: "tx-dewitt-goliad-lavaca", lat: 28.67, lon: -97.39, type: "farm", size: 1 },
    // Dallas–Fort Worth
    // Irving: 257k (Las Colinas), size 3 (as Fremont and Santa Clarita).
    { id: "IRVN", name: "Irving", county: "tx-dallas", lat: 32.86, lon: -96.97, type: "metro", size: 3 },
    // Garland: 246k, size 3.
    { id: "GRLD", name: "Garland", county: "tx-dallas", lat: 32.91, lon: -96.63, type: "metro", size: 3 },
    // Grand Prairie: 196k, size 2. At downtown; the Census point is 4.6 miles south, as the city
    // runs south to Joe Pool Lake.
    { id: "GRPR", name: "Grand Prairie", county: "tx-dallas", lat: 32.75, lon: -97, type: "metro", size: 2 },
    // Mesquite: 150k, size 2. At downtown; the Census point is 1.2 miles south-east.
    { id: "MSQT", name: "Mesquite", county: "tx-dallas", lat: 32.77, lon: -96.6, type: "metro", size: 2 },
    // Arlington: Texas's seventh city (394k), between Dallas and Fort Worth, with AT&T Stadium and
    // Globe Life Field, size 3 (as Henderson and Irvine; Long Beach, 466k, is 4). At downtown; the
    // Census point is 2.8 miles south.
    { id: "ARLN", name: "Arlington", county: "tx-tarrant", lat: 32.74, lon: -97.11, type: "metro", size: 3 },
    { id: "NRHL", name: "North Richland Hills", county: "tx-tarrant", lat: 32.86, lon: -97.22, type: "metro", size: 2 },
    // Mansfield: at downtown; the Census point is 1.3 miles north-east.
    { id: "MNSF", name: "Mansfield", county: "tx-tarrant", lat: 32.56, lon: -97.14, type: "metro", size: 2 },
    // Grapevine: its old Main Street by DFW Airport.
    { id: "GRPV", name: "Grapevine", county: "tx-tarrant", lat: 32.94, lon: -97.08, type: "metro", size: 1 },
    // Frisco: 201k, size 2 (as Oceanside and Lancaster).
    { id: "FRSC", name: "Frisco", county: "tx-collin", lat: 33.16, lon: -96.82, type: "metro", size: 2 },
    // McKinney: Collin County's seat (195k), size 2. At its old square; the Census point is 2.6
    // miles west.
    { id: "MCKN", name: "McKinney", county: "tx-collin", lat: 33.2, lon: -96.62, type: "metro", size: 2 },
    { id: "ALLN", name: "Allen", county: "tx-collin", lat: 33.11, lon: -96.67, type: "metro", size: 2 },
    // Carrollton: 133k, size 2. At its Census point, in its Denton County part (its old downtown is
    // in Dallas County).
    { id: "CRLT", name: "Carrollton", county: "tx-denton", lat: 32.99, lon: -96.9, type: "metro", size: 2 },
    // Lewisville: 126k, size 2. At downtown; the Census point is 0.9 miles east.
    { id: "LWVL", name: "Lewisville", county: "tx-denton", lat: 33.05, lon: -96.99, type: "metro", size: 2 },
    { id: "FLMD", name: "Flower Mound", county: "tx-denton", lat: 33.04, lon: -97.11, type: "metro", size: 2 },
    { id: "MDLT", name: "Midlothian", county: "tx-ellis", lat: 32.47, lon: -96.99, type: "metro", size: 1 },
    // Ennis: the Czech railroad town on I-45.
    { id: "ENNS", name: "Ennis", county: "tx-ellis", lat: 32.33, lon: -96.63, type: "farm", size: 1 },
    // Burleson: Johnson County's biggest city (48k), Fort Worth's southern suburb, size 2 (as
    // Yukon). At downtown; the Census point is 1.7 miles south.
    { id: "BRLS", name: "Burleson", county: "tx-johnson", lat: 32.54, lon: -97.32, type: "metro", size: 2 },
    // Terrell: on I-20 east of Forney.
    { id: "TRRL", name: "Terrell", county: "tx-kaufman", lat: 32.74, lon: -96.29, type: "farm", size: 1 },
    // Kaufman: Kaufman County's seat.
    { id: "KFMN", name: "Kaufman", county: "tx-kaufman", lat: 32.58, lon: -96.32, type: "farm", size: 1 },
    // Royse City: on I-30 east of Rockwall.
    { id: "RYSC", name: "Royse City", county: "tx-rockwall", lat: 32.98, lon: -96.32, type: "metro", size: 1 },
    { id: "ALDO", name: "Aledo", county: "tx-parker", lat: 32.7, lon: -97.61, type: "metro", size: 1 },
    // Commerce: East Texas A&M University.
    { id: "CMRC", name: "Commerce", county: "tx-hunt", lat: 33.24, lon: -95.9, type: "metro", size: 1 },
    { id: "BGPT", name: "Bridgeport", county: "tx-wise", lat: 33.21, lon: -97.77, type: "farm", size: 1 },
    { id: "TOLR", name: "Tolar", county: "tx-hood", lat: 32.39, lon: -97.92, type: "farm", size: 1 },
    // North Texas and the Red River
    // Denison: the Katy railroad's town on the Red River (Eisenhower's birthplace). At downtown;
    // the Census point is 2.4 miles west.
    { id: "DNSN", name: "Denison", county: "tx-grayson", lat: 33.76, lon: -96.54, type: "metro", size: 1 },
    { id: "WTSB", name: "Whitesboro", county: "tx-grayson", lat: 33.66, lon: -96.9, type: "farm", size: 1 },
    { id: "MNST", name: "Muenster", county: "tx-cooke", lat: 33.65, lon: -97.38, type: "farm", size: 1 },
    { id: "HNGV", name: "Honey Grove", county: "tx-fannin", lat: 33.59, lon: -95.91, type: "farm", size: 1 },
    { id: "BLSM", name: "Blossom", county: "tx-lamar", lat: 33.66, lon: -95.38, type: "farm", size: 1 },
    // Cooper: Delta County's seat.
    { id: "CPER", name: "Cooper", county: "tx-delta-hopkins", lat: 33.37, lon: -95.69, type: "farm", size: 1 },
    // Clarksville: Red River County's seat.
    { id: "CLKV", name: "Clarksville", county: "tx-franklin-red-river-titus", lat: 33.61, lon: -95.06, type: "farm", size: 1 },
    // Mount Vernon: Franklin County's seat, on I-30.
    { id: "MTVN", name: "Mount Vernon", county: "tx-franklin-red-river-titus", lat: 33.18, lon: -95.22, type: "farm", size: 1 },
    // New Boston: Bowie County's seat, on I-30.
    { id: "NWBS", name: "New Boston", county: "tx-bowie", lat: 33.46, lon: -94.42, type: "farm", size: 1 },
    // Jefferson: the old steamboat port on Big Cypress Bayou, Marion County's seat.
    { id: "JFRN", name: "Jefferson", county: "tx-cass-marion-morris", lat: 32.76, lon: -94.35, type: "farm", size: 1 },
    // Daingerfield: Morris County's seat.
    { id: "DNGF", name: "Daingerfield", county: "tx-cass-marion-morris", lat: 33.03, lon: -94.73, type: "farm", size: 1 },
    // Pittsburg: Camp County's seat.
    { id: "PTSB", name: "Pittsburg", county: "tx-camp-upshur", lat: 33, lon: -94.97, type: "farm", size: 1 },
    { id: "WNSB", name: "Winnsboro", county: "tx-rains-wood", lat: 32.96, lon: -95.29, type: "farm", size: 1 },
    // Emory: Rains County's seat, by Lake Tawakoni.
    { id: "EMRY", name: "Emory", county: "tx-rains-wood", lat: 32.88, lon: -95.77, type: "farm", size: 1 },
    { id: "WLPT", name: "Wills Point", county: "tx-van-zandt", lat: 32.71, lon: -96, type: "farm", size: 1 },
    { id: "LNDL", name: "Lindale", county: "tx-smith", lat: 32.49, lon: -95.41, type: "farm", size: 1 },
    { id: "BLRD", name: "Bullard", county: "tx-smith", lat: 32.14, lon: -95.32, type: "farm", size: 1 },
    // Kilgore: the East Texas oil field's town. At downtown; the Census point is 1.3 miles east.
    { id: "KLGR", name: "Kilgore", county: "tx-gregg", lat: 32.39, lon: -94.88, type: "farm", size: 1 },
    { id: "HLSV", name: "Hallsville", county: "tx-harrison", lat: 32.5, lon: -94.57, type: "farm", size: 1 },
    // Caddo Lake: Texas's natural lake, a maze of cypress swamp and bayous, at Caddo Lake State
    // Park by Karnack.
    { id: "CDLK", name: "Caddo Lake", county: "tx-harrison", lat: 32.68, lon: -94.18, scenic: true, type: "farm", size: 1 },
    { id: "OVTN", name: "Overton", county: "tx-rusk", lat: 32.28, lon: -94.97, type: "farm", size: 1 },
    // Center: Shelby County's seat.
    { id: "CNTR", name: "Center", county: "tx-panola-shelby", lat: 31.79, lon: -94.18, type: "farm", size: 1 },
    // Texas State Railroad: the steam and diesel trains through the piney woods between Rusk and
    // Palestine, at the Rusk depot west of town (approx.).
    { id: "TSRR", name: "Texas State Railroad", county: "tx-cherokee", lat: 31.8, lon: -95.19, scenic: true, type: "farm", size: 1 },
    { id: "ALTO", name: "Alto", county: "tx-cherokee", lat: 31.65, lon: -95.07, type: "farm", size: 1 },
    { id: "FRKS", name: "Frankston", county: "tx-anderson", lat: 32.06, lon: -95.5, type: "farm", size: 1 },
    // Gun Barrel City: on Cedar Creek Reservoir.
    { id: "GBCY", name: "Gun Barrel City", county: "tx-henderson", lat: 32.33, lon: -96.13, type: "farm", size: 1 },
    { id: "KRNS", name: "Kerens", county: "tx-navarro", lat: 32.13, lon: -96.23, type: "farm", size: 1 },
    // Fairfield: Freestone County's seat, on I-45.
    { id: "FRFD", name: "Fairfield", county: "tx-freestone-limestone", lat: 31.72, lon: -96.17, type: "farm", size: 1 },
    // Groesbeck: Limestone County's seat.
    { id: "GRBK", name: "Groesbeck", county: "tx-freestone-limestone", lat: 31.53, lon: -96.53, type: "farm", size: 1 },
    { id: "GRRN", name: "Garrison", county: "tx-nacogdoches", lat: 31.83, lon: -94.49, type: "farm", size: 1 },
    // Diboll: the sawmill town on US-59.
    { id: "DBLL", name: "Diboll", county: "tx-angelina", lat: 31.19, lon: -94.78, type: "farm", size: 1 },
    // Hemphill: Sabine County's seat, by Toledo Bend.
    { id: "HMPH", name: "Hemphill", county: "tx-sabine-san-augustine", lat: 31.34, lon: -93.85, type: "farm", size: 1 },
    // Central Texas
    { id: "HWTT", name: "Hewitt", county: "tx-mclennan", lat: 31.45, lon: -97.19, type: "metro", size: 1 },
    // West: the Czech bakery town on I-35.
    { id: "WEST", name: "West", county: "tx-mclennan", lat: 31.8, lon: -97.09, type: "farm", size: 1 },
    // Temple: Bell County's second city (82k; Baylor Scott & White, the Santa Fe's old shops), size
    // 2. At downtown; the Census point is 3 miles west.
    { id: "TMPL", name: "Temple", county: "tx-bell", lat: 31.1, lon: -97.34, type: "metro", size: 2 },
    // Belton: Bell County's seat (University of Mary Hardin-Baylor). At downtown; the Census point
    // is 1.3 miles south-west.
    { id: "BLTN", name: "Belton", county: "tx-bell", lat: 31.06, lon: -97.46, type: "metro", size: 1 },
    // Gatesville: Coryell County's seat.
    { id: "GTVL", name: "Gatesville", county: "tx-coryell", lat: 31.44, lon: -97.75, type: "farm", size: 1 },
    // Hearne: the Union Pacific junction on the Brazos bottoms.
    { id: "HRNE", name: "Hearne", county: "tx-falls-robertson", lat: 30.88, lon: -96.6, type: "farm", size: 1 },
    { id: "CLFT", name: "Clifton", county: "tx-bosque-hill", lat: 31.78, lon: -97.58, type: "farm", size: 1 },
    // Glen Rose: Somervell County's seat on the Paluxy, by Dinosaur Valley State Park.
    { id: "GLRS", name: "Glen Rose", county: "tx-erath-somervell", lat: 32.25, lon: -97.75, type: "farm", size: 1 },
    { id: "HMLT", name: "Hamilton", county: "tx-comanche-hamilton", lat: 31.7, lon: -98.12, type: "farm", size: 1 },
    { id: "SNSB", name: "San Saba", county: "tx-lampasas-mills-san-saba", lat: 31.2, lon: -98.72, type: "farm", size: 1 },
    { id: "GLDT", name: "Goldthwaite", county: "tx-lampasas-mills-san-saba", lat: 31.45, lon: -98.57, type: "farm", size: 1 },
    { id: "CLMN", name: "Coleman", county: "tx-brown-coleman", lat: 31.83, lon: -99.42, type: "farm", size: 1 },
    // Jacksboro: Jack County's seat.
    { id: "JKSB", name: "Jacksboro", county: "tx-jack-palo-pinto", lat: 33.23, lon: -98.16, type: "farm", size: 1 },
    // Henrietta: Clay County's seat, on US-287.
    { id: "HENR", name: "Henrietta", county: "tx-clay-montague", lat: 33.81, lon: -98.19, type: "farm", size: 1 },
    { id: "NCNA", name: "Nocona", county: "tx-clay-montague", lat: 33.78, lon: -97.73, type: "farm", size: 1 },
    { id: "OLNY", name: "Olney", county: "tx-archer-young", lat: 33.36, lon: -98.76, type: "farm", size: 1 },
    // Burkburnett: on I-44 at the Red River. At downtown; the Census point is 1.8 miles south.
    { id: "BKBT", name: "Burkburnett", county: "tx-wichita", lat: 34.1, lon: -98.57, type: "farm", size: 1 },
    { id: "ELCT", name: "Electra", county: "tx-wichita", lat: 34.03, lon: -98.92, type: "farm", size: 1 },
    // Quanah: Hardeman County's seat, on US-287.
    { id: "QNAH", name: "Quanah", county: "tx-foard-hardeman-wilbarger", lat: 34.3, lon: -99.74, type: "farm", size: 1 },
    { id: "CRWL", name: "Crowell", county: "tx-foard-hardeman-wilbarger", lat: 33.98, lon: -99.72, type: "farm", size: 1 },
    { id: "MNDY", name: "Munday", county: "tx-baylor-king-knox", lat: 33.45, lon: -99.62, type: "farm", size: 1 },
    // Guthrie: King County's seat (a CDP), at the Four Sixes ranch.
    { id: "GTHR", name: "Guthrie", county: "tx-baylor-king-knox", lat: 33.62, lon: -100.33, type: "farm", size: 1 },
    // Stamford: a Jones County town (tagged Haskell), home of the Texas Cowboy Reunion.
    { id: "STMF", name: "Stamford", county: "tx-haskell-jones-stonewall", lat: 33.05, lon: -99.6, type: "farm", size: 1 },
    // Anson: Jones County's seat.
    { id: "ANSN", name: "Anson", county: "tx-haskell-jones-stonewall", lat: 32.75, lon: -99.9, type: "farm", size: 1 },
    { id: "ASPM", name: "Aspermont", county: "tx-haskell-jones-stonewall", lat: 33.14, lon: -100.22, type: "farm", size: 1 },
    { id: "ALBY", name: "Albany", county: "tx-shackelford-stephens-throckmorton", lat: 32.73, lon: -99.3, type: "farm", size: 1 },
    { id: "THRK", name: "Throckmorton", county: "tx-shackelford-stephens-throckmorton", lat: 33.18, lon: -99.18, type: "farm", size: 1 },
    { id: "EASL", name: "Eastland", county: "tx-callahan-eastland", lat: 32.4, lon: -98.82, type: "farm", size: 1 },
    { id: "MRKL", name: "Merkel", county: "tx-taylor", lat: 32.47, lon: -100.01, type: "farm", size: 1 },
    // Austin, San Antonio and the Hill Country
    // Pflugerville: 65k, size 2. At downtown; the Census point is 1.2 miles north-east.
    { id: "PFLG", name: "Pflugerville", county: "tx-travis", lat: 30.44, lon: -97.62, type: "metro", size: 2 },
    // Lakeway: on Lake Travis.
    { id: "LKWY", name: "Lakeway", county: "tx-travis", lat: 30.36, lon: -97.99, type: "metro", size: 1 },
    { id: "CDPK", name: "Cedar Park", county: "tx-williamson", lat: 30.51, lon: -97.82, type: "metro", size: 2 },
    // Georgetown: Williamson County's seat (67k; Southwestern University), size 2. At its square;
    // the Census point is 2.2 miles north-west.
    { id: "GRGT", name: "Georgetown", county: "tx-williamson", lat: 30.64, lon: -97.68, type: "metro", size: 2 },
    { id: "TAYR", name: "Taylor", county: "tx-williamson", lat: 30.57, lon: -97.43, type: "farm", size: 1 },
    { id: "KYLE", name: "Kyle", county: "tx-hays", lat: 29.99, lon: -97.88, type: "metro", size: 1 },
    { id: "DRSP", name: "Dripping Springs", county: "tx-hays", lat: 30.2, lon: -98.09, type: "farm", size: 1 },
    // Elgin: the sausage town on US-290 (Bastrop's twin in raw/: both 9,692).
    { id: "EGIN", name: "Elgin", county: "tx-bastrop", lat: 30.35, lon: -97.39, type: "farm", size: 1 },
    // Universal City: by Randolph Air Force Base.
    { id: "UNVC", name: "Universal City", county: "tx-bexar", lat: 29.55, lon: -98.31, type: "metro", size: 1 },
    { id: "HLTS", name: "Helotes", county: "tx-bexar", lat: 29.58, lon: -98.68, type: "metro", size: 1 },
    // San Antonio Missions: the four Spanish missions of the national historical park (with the
    // Alamo, a World Heritage Site), at Mission San José, 4 miles south of the Alamo.
    { id: "SAMS", name: "San Antonio Missions", county: "tx-bexar", lat: 29.36, lon: -98.48, scenic: true, type: "metro", size: 1 },
    // Canyon Lake: the lake town (a CDP).
    { id: "CNLK", name: "Canyon Lake", county: "tx-comal", lat: 29.88, lon: -98.26, type: "farm", size: 1 },
    // Natural Bridge Caverns: Texas's biggest show cave, between San Antonio and New Braunfels.
    { id: "NBCV", name: "Natural Bridge Caverns", county: "tx-comal", lat: 29.69, lon: -98.34, scenic: true, type: "farm", size: 1 },
    // Schertz: by Randolph Air Force Base on I-35, 1.2 miles north of its Census point (which is
    // 3.7 miles from Universal City).
    { id: "SCHZ", name: "Schertz", county: "tx-guadalupe", lat: 29.58, lon: -98.25, type: "metro", size: 1 },
    { id: "LVRN", name: "La Vernia", county: "tx-wilson", lat: 29.35, lon: -98.13, type: "farm", size: 1 },
    // Castroville: the Alsatian town on US-90.
    { id: "CSVL", name: "Castroville", county: "tx-medina", lat: 29.36, lon: -98.85, type: "farm", size: 1 },
    { id: "INGR", name: "Ingram", county: "tx-kerr", lat: 30.08, lon: -99.24, type: "farm", size: 1 },
    // Bandera: Bandera County's seat, the "Cowboy Capital of the World".
    { id: "BNDR", name: "Bandera", county: "tx-bandera-kendall", lat: 29.73, lon: -99.07, type: "farm", size: 1 },
    // Johnson City: Blanco County's seat, LBJ's boyhood home.
    { id: "JHCY", name: "Johnson City", county: "tx-blanco-gillespie", lat: 30.27, lon: -98.41, type: "farm", size: 1 },
    // LBJ Ranch: Lyndon B. Johnson National Historical Park, the "Texas White House" by Stonewall.
    { id: "LBJR", name: "LBJ Ranch", county: "tx-blanco-gillespie", lat: 30.24, lon: -98.62, scenic: true, type: "farm", size: 1 },
    // Enchanted Rock: the pink granite dome north of Fredericksburg (the state natural area).
    { id: "ENRK", name: "Enchanted Rock", county: "tx-blanco-gillespie", lat: 30.49, lon: -98.82, scenic: true, type: "farm", size: 1 },
    // Burnet: Burnet County's seat.
    { id: "BRNT", name: "Burnet", county: "tx-burnet-llano", lat: 30.75, lon: -98.24, type: "farm", size: 1 },
    // Llano: Llano County's seat.
    { id: "LLNO", name: "Llano", county: "tx-burnet-llano", lat: 30.75, lon: -98.68, type: "farm", size: 1 },
    { id: "MNRD", name: "Menard", county: "tx-kimble-menard", lat: 30.92, lon: -99.78, type: "farm", size: 1 },
    // Rocksprings: Edwards County's seat.
    { id: "RCKS", name: "Rocksprings", county: "tx-edwards-real-uvalde", lat: 30.02, lon: -100.21, type: "farm", size: 1 },
    // Leakey: Real County's seat, on the Frio.
    { id: "LKEY", name: "Leakey", county: "tx-edwards-real-uvalde", lat: 29.73, lon: -99.76, type: "farm", size: 1 },
    { id: "MASN", name: "Mason", county: "tx-concho-mason-mcculloch", lat: 30.75, lon: -99.23, type: "farm", size: 1 },
    { id: "EDEN", name: "Eden", county: "tx-concho-mason-mcculloch", lat: 31.22, lon: -99.84, type: "farm", size: 1 },
    // South Texas and the Valley
    { id: "DLLY", name: "Dilley", county: "tx-frio-la-salle", lat: 28.67, lon: -99.18, type: "farm", size: 1 },
    // Cotulla: La Salle County's seat, on I-35.
    { id: "CTLA", name: "Cotulla", county: "tx-frio-la-salle", lat: 28.44, lon: -99.24, type: "farm", size: 1 },
    // Poteet: the strawberry town.
    { id: "POTE", name: "Poteet", county: "tx-atascosa-live-oak-mcmullen", lat: 29.04, lon: -98.57, type: "farm", size: 1 },
    // George West: Live Oak County's seat, where US-59 meets US-281 and I-37.
    { id: "GWST", name: "George West", county: "tx-atascosa-live-oak-mcmullen", lat: 28.33, lon: -98.12, type: "farm", size: 1 },
    { id: "KNDY", name: "Kenedy", county: "tx-bee-karnes", lat: 28.81, lon: -97.85, type: "farm", size: 1 },
    // Carrizo Springs: Dimmit County's seat.
    { id: "CZSP", name: "Carrizo Springs", county: "tx-dimmit-zavala", lat: 28.53, lon: -99.86, type: "farm", size: 1 },
    // Quemado: a CDP up the Rio Grande from Eagle Pass (the county's only incorporated place is
    // Eagle Pass).
    { id: "QMDO", name: "Quemado", county: "tx-maverick", lat: 28.95, lon: -100.62, type: "farm", size: 1 },
    // Brackettville: Kinney County's seat, by old Fort Clark.
    { id: "BKVL", name: "Brackettville", county: "tx-kinney-val-verde", lat: 29.32, lon: -100.41, type: "farm", size: 1 },
    { id: "RBRV", name: "Rio Bravo", county: "tx-webb", lat: 27.36, lon: -99.48, type: "farm", size: 1 },
    // Hebbronville: Jim Hogg County's seat (a CDP).
    { id: "HBVL", name: "Hebbronville", county: "tx-jim-hogg-zapata", lat: 27.33, lon: -98.69, type: "farm", size: 1 },
    // San Ygnacio: the 1830s sandstone river town on US-83 (a CDP).
    { id: "SNYG", name: "San Ygnacio", county: "tx-jim-hogg-zapata", lat: 27.05, lon: -99.42, type: "farm", size: 1 },
    // Roma: the old river port's historic district on the bluffs.
    { id: "ROMA", name: "Roma", county: "tx-starr", lat: 26.41, lon: -99, type: "farm", size: 1 },
    // Edinburg: Hidalgo County's seat (100k; the University of Texas Rio Grande Valley), size 2. At
    // downtown; the Census point is 1.5 miles north.
    { id: "EDNB", name: "Edinburg", county: "tx-hidalgo", lat: 26.3, lon: -98.16, type: "metro", size: 2 },
    // Mission: 86k, size 2.
    { id: "MISN", name: "Mission", county: "tx-hidalgo", lat: 26.2, lon: -98.33, type: "metro", size: 2 },
    { id: "WSLC", name: "Weslaco", county: "tx-hidalgo", lat: 26.16, lon: -97.99, type: "farm", size: 1 },
    // Harlingen: 72k (Valley International Airport), size 2.
    { id: "HRLN", name: "Harlingen", county: "tx-cameron", lat: 26.19, lon: -97.7, type: "metro", size: 2 },
    { id: "LSFR", name: "Los Fresnos", county: "tx-cameron", lat: 26.07, lon: -97.49, type: "farm", size: 1 },
    // South Padre Island: the beach resort at the Laguna Madre's mouth, over the Queen Isabella
    // Causeway from Port Isabel.
    { id: "SPI", name: "South Padre Island", county: "tx-cameron", lat: 26.12, lon: -97.17, scenic: true, type: "coast", size: 1 },
    // Raymondville: Willacy County's seat.
    { id: "RMVL", name: "Raymondville", county: "tx-kenedy-kleberg-willacy", lat: 26.48, lon: -97.78, type: "farm", size: 1 },
    // Sarita: Kenedy County's seat (a CDP), on US-77 across the Kenedy Ranch.
    { id: "SRTA", name: "Sarita", county: "tx-kenedy-kleberg-willacy", lat: 27.22, lon: -97.8, type: "farm", size: 1 },
    // Padre Island National Seashore: the world's longest undeveloped barrier island, at the
    // Malaquite visitor center (approx.).
    { id: "PINS", name: "Padre Island National Seashore", county: "tx-kenedy-kleberg-willacy", lat: 27.43, lon: -97.3, scenic: true, type: "coast", size: 1 },
    // Falfurrias: Brooks County's seat.
    { id: "FLFR", name: "Falfurrias", county: "tx-brooks-duval-jim-wells", lat: 27.22, lon: -98.15, type: "farm", size: 1 },
    { id: "FREE", name: "Freer", county: "tx-brooks-duval-jim-wells", lat: 27.88, lon: -98.62, type: "farm", size: 1 },
    { id: "RBTN", name: "Robstown", county: "tx-nueces", lat: 27.79, lon: -97.67, type: "farm", size: 1 },
    // Port Aransas: the beach town at Mustang Island's north end, by the ferry from Harbor Island.
    { id: "PTAS", name: "Port Aransas", county: "tx-nueces", lat: 27.82, lon: -97.09, type: "coast", size: 1 },
    // Sinton: San Patricio County's seat.
    { id: "SNTN", name: "Sinton", county: "tx-san-patricio", lat: 28.04, lon: -97.51, type: "farm", size: 1 },
    // Aransas Pass: at downtown, in its San Patricio County part (the Census point, tagged Aransas,
    // is in Redfish Bay).
    { id: "ARNP", name: "Aransas Pass", county: "tx-san-patricio", lat: 27.91, lon: -97.15, type: "coast", size: 1 },
    // Refugio: Refugio County's seat.
    { id: "RFGO", name: "Refugio", county: "tx-aransas-refugio", lat: 28.31, lon: -97.27, type: "farm", size: 1 },
    // The Panhandle and the South Plains
    // Cadillac Ranch: the ten half-buried Cadillacs by I-40 (old Route 66) west of Amarillo.
    { id: "CDRN", name: "Cadillac Ranch", county: "tx-potter", lat: 35.19, lon: -101.99, scenic: true, type: "farm", size: 1 },
    // Palo Duro Canyon: the country's second-largest canyon, at the state park's entrance east of
    // Canyon (approx.).
    { id: "PDCN", name: "Palo Duro Canyon", county: "tx-randall", lat: 34.98, lon: -101.7, scenic: true, type: "desert", size: 1 },
    // Vega: Oldham County's seat, on I-40 (Route 66).
    { id: "VEGA", name: "Vega", county: "tx-dallam-hartley-oldham", lat: 35.25, lon: -102.43, type: "farm", size: 1 },
    // Texline: on US-87 and the BNSF at the New Mexico line, toward Clayton.
    { id: "TXLN", name: "Texline", county: "tx-dallam-hartley-oldham", lat: 36.38, lon: -103.02, type: "farm", size: 1 },
    // Channing: Hartley County's seat, the XIT Ranch's old headquarters.
    { id: "CHNG", name: "Channing", county: "tx-dallam-hartley-oldham", lat: 35.68, lon: -102.33, type: "farm", size: 1 },
    // Stratford: Sherman County's seat, on US-287 toward Boise City.
    { id: "STFD", name: "Stratford", county: "tx-moore-sherman", lat: 36.34, lon: -102.08, type: "farm", size: 1 },
    // Spearman: Hansford County's seat.
    { id: "SPMN", name: "Spearman", county: "tx-hansford-lipscomb-ochiltree", lat: 36.2, lon: -101.19, type: "farm", size: 1 },
    // Panhandle: Carson County's seat.
    { id: "PNHD", name: "Panhandle", county: "tx-carson-hutchinson", lat: 35.35, lon: -101.38, type: "farm", size: 1 },
    // Canadian: Hemphill County's seat, on the Canadian River and US-60.
    { id: "CNDN", name: "Canadian", county: "tx-gray-hemphill-roberts", lat: 35.91, lon: -100.38, type: "farm", size: 1 },
    // McLean: on I-40 (Route 66).
    { id: "MCLE", name: "McLean", county: "tx-gray-hemphill-roberts", lat: 35.23, lon: -100.6, type: "farm", size: 1 },
    // Wellington: Collingsworth County's seat.
    { id: "WLGT", name: "Wellington", county: "tx-collingsworth-wheeler", lat: 34.85, lon: -100.21, type: "farm", size: 1 },
    // Wheeler: Wheeler County's seat.
    { id: "WHLR", name: "Wheeler", county: "tx-collingsworth-wheeler", lat: 35.44, lon: -100.28, type: "farm", size: 1 },
    // Claude: Armstrong County's seat, on US-287.
    { id: "CLDE", name: "Claude", county: "tx-armstrong-donley", lat: 35.11, lon: -101.36, type: "farm", size: 1 },
    // Memphis: Hall County's seat, on US-287.
    { id: "MMPH", name: "Memphis", county: "tx-childress-cottle-hall", lat: 34.73, lon: -100.54, type: "farm", size: 1 },
    // Paducah: Cottle County's seat.
    { id: "PDCH", name: "Paducah", county: "tx-childress-cottle-hall", lat: 34.01, lon: -100.3, type: "farm", size: 1 },
    // Dimmitt: Castro County's seat.
    { id: "DMTT", name: "Dimmitt", county: "tx-castro-deaf-smith-parmer", lat: 34.55, lon: -102.31, type: "farm", size: 1 },
    // Farwell: Parmer County's seat, at the New Mexico line opposite Texico (Clovis is 9 miles on).
    { id: "FRWL", name: "Farwell", county: "tx-castro-deaf-smith-parmer", lat: 34.39, lon: -103.04, type: "farm", size: 1 },
    // Tulia: Swisher County's seat, on I-27.
    { id: "TULA", name: "Tulia", county: "tx-hale-swisher", lat: 34.54, lon: -101.77, type: "farm", size: 1 },
    // Silverton: Briscoe County's seat.
    { id: "SLVT", name: "Silverton", county: "tx-briscoe-floyd-motley", lat: 34.47, lon: -101.3, type: "farm", size: 1 },
    // Matador: Motley County's seat.
    { id: "MTDR", name: "Matador", county: "tx-briscoe-floyd-motley", lat: 34.02, lon: -100.82, type: "farm", size: 1 },
    // Muleshoe: Bailey County's seat, on US-84 toward Clovis.
    { id: "MLSH", name: "Muleshoe", county: "tx-bailey-lamb", lat: 34.23, lon: -102.73, type: "farm", size: 1 },
    // Morton: Cochran County's seat.
    { id: "MRTX", name: "Morton", county: "tx-cochran-hockley", lat: 33.72, lon: -102.76, type: "farm", size: 1 },
    // Slaton: the Santa Fe's division town south-east of Lubbock.
    { id: "SLTN", name: "Slaton", county: "tx-lubbock", lat: 33.45, lon: -101.65, type: "farm", size: 1 },
    { id: "WLFF", name: "Wolfforth", county: "tx-lubbock", lat: 33.51, lon: -102.01, type: "farm", size: 1 },
    { id: "DNVC", name: "Denver City", county: "tx-terry-yoakum", lat: 32.97, lon: -102.83, type: "farm", size: 1 },
    { id: "SPUR", name: "Spur", county: "tx-crosby-dickens", lat: 33.48, lon: -100.85, type: "farm", size: 1 },
    // Tahoka: Lynn County's seat, on US-87.
    { id: "THKA", name: "Tahoka", county: "tx-borden-dawson-lynn", lat: 33.16, lon: -101.8, type: "farm", size: 1 },
    // Gail: Borden County's seat (a CDP).
    { id: "GAIL", name: "Gail", county: "tx-borden-dawson-lynn", lat: 32.77, lon: -101.46, type: "farm", size: 1 },
    // Post: Garza County's seat, C. W. Post's town at the Caprock's foot.
    { id: "POST", name: "Post", county: "tx-garza-kent-scurry", lat: 33.19, lon: -101.38, type: "farm", size: 1 },
    // Jayton: Kent County's seat.
    { id: "JAYT", name: "Jayton", county: "tx-garza-kent-scurry", lat: 33.25, lon: -100.57, type: "farm", size: 1 },
    // West Texas and the Trans-Pecos
    // West Odessa: a CDP (about 25k) on Odessa's west side.
    { id: "WODS", name: "West Odessa", county: "tx-ector", lat: 31.84, lon: -102.5, type: "desert", size: 1 },
    // Seminole: Gaines County's seat.
    { id: "SMNL", name: "Seminole", county: "tx-andrews-gaines", lat: 32.72, lon: -102.65, type: "farm", size: 1 },
    // Stanton: Martin County's seat, on I-20.
    { id: "STNN", name: "Stanton", county: "tx-glasscock-howard-martin", lat: 32.13, lon: -101.79, type: "farm", size: 1 },
    // Garden City: Glasscock County's seat (a CDP).
    { id: "GRDC", name: "Garden City", county: "tx-glasscock-howard-martin", lat: 31.87, lon: -101.49, type: "farm", size: 1 },
    // Colorado City: Mitchell County's seat, on I-20.
    { id: "CLRC", name: "Colorado City", county: "tx-fisher-mitchell-nolan", lat: 32.4, lon: -100.86, type: "farm", size: 1 },
    { id: "ROTN", name: "Rotan", county: "tx-fisher-mitchell-nolan", lat: 32.85, lon: -100.47, type: "farm", size: 1 },
    // Robert Lee: Coke County's seat.
    { id: "RBLE", name: "Robert Lee", county: "tx-coke-runnels-sterling", lat: 31.9, lon: -100.48, type: "farm", size: 1 },
    // Sterling City: Sterling County's seat.
    { id: "STCY", name: "Sterling City", county: "tx-coke-runnels-sterling", lat: 31.84, lon: -100.99, type: "farm", size: 1 },
    // Christoval: on the South Concho (a CDP).
    { id: "CHRV", name: "Christoval", county: "tx-tom-green", lat: 31.2, lon: -100.49, type: "farm", size: 1 },
    // Eldorado: Schleicher County's seat.
    { id: "ELDR", name: "Eldorado", county: "tx-crockett-schleicher-sutton", lat: 30.86, lon: -100.6, type: "farm", size: 1 },
    // Ozona: Crockett County's seat, on I-10 (a CDP).
    { id: "OZNA", name: "Ozona", county: "tx-crockett-schleicher-sutton", lat: 30.71, lon: -101.21, type: "farm", size: 1 },
    // Mertzon: Irion County's seat.
    { id: "MRTZ", name: "Mertzon", county: "tx-irion-reagan", lat: 31.26, lon: -100.82, type: "farm", size: 1 },
    { id: "MCMY", name: "McCamey", county: "tx-crane-upton", lat: 31.13, lon: -102.22, type: "desert", size: 1 },
    // Kermit: Winkler County's seat.
    { id: "KRMT", name: "Kermit", county: "tx-ward-winkler", lat: 31.85, lon: -103.09, type: "desert", size: 1 },
    // Balmorhea: by the state park's spring-fed pool.
    { id: "BLMH", name: "Balmorhea", county: "tx-loving-reeves", lat: 30.98, lon: -103.74, type: "desert", size: 1 },
    // Mentone: Loving County's seat (a CDP), the least populated county in the country.
    { id: "MNTN", name: "Mentone", county: "tx-loving-reeves", lat: 31.71, lon: -103.6, type: "desert", size: 1 },
    // Sanderson: Terrell County's seat (a CDP), on US-90 and the Sunset Route.
    { id: "SNDS", name: "Sanderson", county: "tx-pecos-terrell", lat: 30.15, lon: -102.41, type: "desert", size: 1 },
    // Marfa: Presidio County's seat, with Donald Judd's Chinati Foundation and the Marfa lights.
    { id: "MRFA", name: "Marfa", county: "tx-brewster-jeff-davis-presidio", lat: 30.31, lon: -104.03, scenic: true, type: "desert", size: 1 },
    // Presidio: on the Rio Grande at Ojinaga, US-67's end.
    { id: "PRSD", name: "Presidio", county: "tx-brewster-jeff-davis-presidio", lat: 29.56, lon: -104.37, type: "desert", size: 1 },
    // Fort Davis: Jeff Davis County's seat (a CDP) and the frontier fort's national historic site,
    // in the Davis Mountains.
    { id: "FTDV", name: "Fort Davis", county: "tx-brewster-jeff-davis-presidio", lat: 30.58, lon: -103.89, scenic: true, type: "mountain", size: 1 },
    // McDonald Observatory: the University of Texas's telescopes on Mount Locke (its star parties).
    { id: "MCDO", name: "McDonald Observatory", county: "tx-brewster-jeff-davis-presidio", lat: 30.68, lon: -104.02, scenic: true, type: "mountain", size: 1 },
    // Marathon: on US-90 and the Sunset Route, the gateway to Big Bend (a CDP).
    { id: "MRTH", name: "Marathon", county: "tx-brewster-jeff-davis-presidio", lat: 30.22, lon: -103.24, type: "desert", size: 1 },
    // Big Bend National Park: the Chisos Mountains and the Rio Grande's canyons, at Panther
    // Junction (the park headquarters).
    { id: "BBNP", name: "Big Bend National Park", county: "tx-brewster-jeff-davis-presidio", lat: 29.33, lon: -103.21, scenic: true, type: "desert", size: 1 },
    // Sierra Blanca: Hudspeth County's seat (a CDP), on I-10 and the Sunset Route.
    { id: "SRBL", name: "Sierra Blanca", county: "tx-culberson-hudspeth", lat: 31.18, lon: -105.34, type: "desert", size: 1 },
    { id: "DLCY", name: "Dell City", county: "tx-culberson-hudspeth", lat: 31.93, lon: -105.2, type: "desert", size: 1 },
    // Guadalupe Mountains National Park: Guadalupe Peak (Texas's highest, 8,751 feet) and El
    // Capitan, at the Pine Springs visitor center on US-62/180.
    { id: "GMNP", name: "Guadalupe Mountains National Park", county: "tx-culberson-hudspeth", lat: 31.89, lon: -104.82, scenic: true, type: "mountain", size: 1 },
    // Socorro: by the Socorro mission on the Mission Trail.
    { id: "SCRO", name: "Socorro", county: "tx-el-paso", lat: 31.64, lon: -106.26, type: "metro", size: 1 },
    { id: "HRZC", name: "Horizon City", county: "tx-el-paso", lat: 31.68, lon: -106.19, type: "metro", size: 1 },
    // Anthony: on I-10 at the New Mexico line.
    { id: "ANTX", name: "Anthony", county: "tx-el-paso", lat: 31.99, lon: -106.6, type: "farm", size: 1 },
    // Luling: the oil and watermelon town on I-10 and the San Marcos.
    { id: "LULN", name: "Luling", county: "tx-caldwell-gonzales", lat: 29.68, lon: -97.65, type: "farm", size: 1 },
    // Gonzales: Gonzales County's seat, where the Texas Revolution's first shot was fired ("Come
    // and Take It").
    { id: "GNZL", name: "Gonzales", county: "tx-caldwell-gonzales", lat: 29.51, lon: -97.45, type: "farm", size: 1 },
  ],
  levels: [
    {
      name: "Houston & the Gulf Coast",
      areas: ["houston"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        // The Port of Houston's containers
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Dallas–Fort Worth & East Texas",
      areas: ["dfw"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Houston to Dallas, as I-45 runs (by Conroe, Huntsville, Madisonville and Corsicana)
        { kind: "connect", a: "HOU", b: "DLS" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "Austin, San Antonio & South Texas",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Houston to San Antonio, as I-10 and the Sunset Route run (by Sealy, Seguin)
        { kind: "connect", a: "HOU", b: "SA" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "West Texas & the Panhandle",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Abilene to Midland, as I-20 and the Texas & Pacific run (by Sweetwater and Big Spring)
        { kind: "connect", a: "ABI", b: "MIDL" },
        // Trucks from the Permian Basin's and the Trans-Pecos's desert towns
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
  ],
  // Real mountain passes and canyons: [name, latitude, longitude]. Texas's map is flat but for a
  // few mountain cells in the Trans-Pecos (NOTES.md).
  passes: [
    ["Guadalupe Pass", 31.87, -104.83], // US-62/180 over the Guadalupe Mountains, El Paso to Carlsbad (approx.)
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river, lake or bay where the real crossing is, or where the map's river
  // passes the town. Sources in NOTES.md.
  bridges: [
    // Galveston Bay and the Houston Ship Channel
    ["Galveston Causeway (I-45)", 29.32, -94.88], // the first track (Houston–Galveston) crosses here
    ["Bolivar ferry (Galveston–Port Bolivar)", 29.35, -94.77], // the state's free ferry over Bolivar Roads
    ["Fred Hartman Bridge (TX-146, La Porte–Baytown)", 29.7, -95.02], // the Ship Channel is too narrow to show here
    // The Golden Triangle
    ["Rainbow Bridge (TX-87, Port Arthur–Bridge City)", 29.99, -93.87],
    ["Neches River bridges (I-10, Beaumont)", 30.09, -94.09],
    ["Sabine River bridge (I-10, Orange)", 30.09, -93.72], // to Louisiana, later
    // Corpus Christi, Aransas Bay and the Laguna Madre
    ["Harbor Bridge (US-181, Corpus Christi)", 27.81, -97.4],
    ["Nueces Bay Causeway (US-181)", 27.85, -97.37],
    ["JFK Causeway (Padre Island)", 27.63, -97.27],
    ["TX-361 causeway (Redfish Bay, Aransas Pass)", 27.89, -97.12],
    ["Port Aransas ferry (Harbor Island–Port Aransas)", 27.84, -97.07], // its channel is land on this map
    ["Copano Bay Causeway (TX-35)", 28.11, -97.03],
    ["Queen Isabella Causeway (Port Isabel–South Padre Island)", 26.08, -97.2],
    // The Rio Grande: the map's river passes these stations (the international bridges)
    ["Rio Grande bridges (El Paso)", 31.76, -106.49],
    ["Rio Grande bridges (Laredo)", 27.5, -99.51],
    ["Rio Grande bridge (Eagle Pass)", 28.7, -100.49],
    ["Rio Grande bridges (Brownsville)", 25.9, -97.5],
    // The Red River (the Oklahoma line; Oklahoma's pack has the I-35, US-69/75, I-44 and
    // US-271 bridges) and its Prairie Dog Town Fork in the Panhandle
    ["Red River bridge (TX-78, Bonham–Durant)", 33.76, -96.25],
    ["Red River bridge (US-81, Ringgold–Terral)", 33.88, -97.94],
    ["Red River bridge (US-183, Oklaunion–Davidson)", 34.22, -99.17],
    ["Red River bridge (US-283, Vernon–Altus)", 34.42, -99.29],
    ["Red River bridge (US-83, north of Childress)", 34.58, -100.21],
    ["Red River bridge (US-287, Estelline)", 34.56, -100.39],
    ["Denison Dam (TX-91, Lake Texoma)", 33.83, -96.57],
    ["Willis Bridge (US-377, Lake Texoma)", 33.88, -96.84],
    // The Canadian
    ["Canadian River bridge (US-287, north of Amarillo)", 35.47, -101.88],
    ["Canadian River bridge (US-385, Channing–Vega)", 35.55, -102.34],
    ["Canadian River bridge (TX-207, Borger)", 35.75, -101.44],
    ["Canadian River bridge (US-60/83, Canadian)", 35.95, -100.37],
    // The Trinity
    ["Trinity River bridges (downtown Dallas)", 32.77, -96.81],
    ["Trinity River bridge (TX-31, Trinidad)", 32.15, -96.11],
    ["Trinity River bridge (US-59, Goodrich)", 30.57, -94.95],
    ["Trinity River bridge (US-90, Liberty)", 30.05, -94.84],
    ["Trinity River bridge (I-10, Wallisville)", 29.87, -94.75], // approx.
    // The Brazos
    ["Brazos River bridge (US-277, Seymour)", 33.59, -99.26],
    ["Brazos River bridge (US-180, Palo Pinto)", 32.8, -98.18],
    ["Brazos River bridge (US-377, Granbury)", 32.44, -97.76],
    ["Brazos River bridge (I-35, Waco)", 31.62, -97.13], // on the map's river, 4 mi north of the real one
    ["Brazos River bridges (Waco)", 31.58, -97.11], // the 1870 suspension bridge and Washington Avenue; on the map's river, 2 mi east
    ["Brazos River bridge (TX-7, Marlin)", 31.27, -96.93],
    ["Brazos River bridge (TX-21, west of Bryan)", 30.63, -96.55],
    ["Brazos River bridge (TX-105, Washington)", 30.34, -96.13],
    ["Brazos River bridge (US-290, Hempstead)", 30.12, -96.17],
    ["Brazos River bridge (I-10, San Felipe)", 29.8, -96.06],
    ["Brazos River bridges (Richmond–Rosenberg)", 29.59, -95.75],
    ["Brazos River bridge (US-59, Sugar Land)", 29.57, -95.66],
    // The Colorado
    ["Colorado River bridge (I-20, Colorado City)", 32.37, -100.87],
    ["Colorado River bridge (US-83, Ballinger)", 31.74, -99.96],
    ["Colorado River bridge (US-281, Marble Falls)", 30.56, -98.28],
    ["Congress Avenue Bridge (Austin)", 30.26, -97.75],
    ["Colorado River bridges (Bastrop)", 30.1, -97.33],
    ["Colorado River bridges (La Grange)", 29.9, -96.88],
    ["Colorado River bridge (I-10, Columbus)", 29.71, -96.54],
    ["Colorado River bridge (TX-35, Bay City)", 28.98, -96.0],
    // The Neches and the Sabine in East Texas
    ["Neches River bridge (TX-64, Canton–Tyler)", 32.43, -95.53],
    ["Neches River bridge (TX-31, Lake Palestine)", 32.31, -95.45],
    ["Neches River bridge (US-175, Frankston–Jacksonville)", 32.03, -95.43],
    ["Neches River bridge (US-79, Jacksonville–Palestine)", 31.87, -95.44],
    ["Neches River bridge (US-59, south of Diboll)", 31.13, -94.78],
    ["Sabine River bridge (US-69, Mineola)", 32.62, -95.47],
    ["Sabine River bridge (I-20, Kilgore–Longview)", 32.47, -94.87], // approx.
    ["Sabine River bridge (US-259, Longview)", 32.43, -94.76],
    ["Sabine River bridge (TX-43, Tatum–Marshall)", 32.39, -94.53],
    ["Sabine River bridge (US-59, Marshall–Carthage)", 32.31, -94.34],
    // The Guadalupe, the San Antonio (with the Medina, which the map names San Antonio) and the Nueces
    ["Guadalupe River bridges (Kerrville)", 30.04, -99.13],
    ["Guadalupe River bridges (New Braunfels)", 29.7, -98.12],
    ["Guadalupe River bridge (I-10, Lake Placid)", 29.57, -98.03],
    ["Guadalupe River bridge (Seguin)", 29.55, -97.97],
    ["Guadalupe River bridge (Gonzales)", 29.5, -97.45],
    ["Guadalupe River bridge (Cuero)", 29.11, -97.33],
    ["Guadalupe River bridges (Victoria)", 28.8, -97.03],
    ["Medina River bridge (TX-16, Bandera)", 29.73, -99.07],
    ["Medina River bridge (US-90, Castroville)", 29.36, -98.89],
    ["San Antonio River bridge (Floresville)", 29.14, -98.19],
    ["San Antonio River bridge (Goliad)", 28.66, -97.38],
    ["Nueces River bridge (US-90, west of Uvalde)", 29.24, -99.92],
    ["Nueces River bridge (I-35, Cotulla)", 28.42, -99.24],
    ["Nueces River bridge (US-281, George West)", 28.34, -98.11],
    // The Pecos
    ["Pecos River bridge (I-20, east of Pecos)", 31.45, -103.39],
    ["Pecos River bridge (TX-18, Grandfalls)", 31.33, -102.87],
    ["Pecos River bridge (I-10, Sheffield)", 30.76, -101.83],
    ["Pecos River High Bridge (US-90)", 29.69, -101.36], // with the Union Pacific's high bridge beside it
    // Reservoirs: the main roads' crossings
    ["I-30 bridge (Lake Ray Hubbard)", 32.88, -96.52],
    ["TX-334 bridge (Cedar Creek Reservoir)", 32.33, -96.17],
    ["I-35E bridge (Lewisville Lake)", 33.1, -97.04],
    ["US-190 bridge (Lake Livingston, Onalaska)", 30.8, -95.16],
    ["US-190 bridge (B. A. Steinhagen Lake)", 30.83, -94.2],
    ["US-90 bridges (Amistad Reservoir)", 29.52, -101.04],
  ],
  // Bays where water needs a bridge: { name, ring: [lon, lat, ...] }. Rough outlines over the
  // water inside the barrier islands (land inside a ring stays land). Matagorda and Lavaca bays
  // and Sabine Lake are land on this map (inside the county outlines), so they need none (NOTES.md).
  bays: [
    {
      name: "Galveston Bay", // with Trinity, East and West bays and the Ship Channel's mouth
      ring: [-95.05, 29.72, -94.95, 29.79, -94.8, 29.81, -94.65, 29.8, -94.62, 29.7, -94.68, 29.6, -94.55, 29.58, -94.45, 29.62, -94.36, 29.6, -94.38, 29.555, -94.5, 29.51, -94.6, 29.47, -94.66, 29.44, -94.72, 29.4, -94.76, 29.37, -94.72, 29.34, -94.8, 29.3, -94.9, 29.245, -95.0, 29.19, -95.1, 29.12, -95.13, 29.085, -95.18, 29.1, -95.22, 29.2, -95.1, 29.35, -95.06, 29.5],
    },
    {
      name: "Corpus Christi Bay", // with Nueces, Oso and Redfish bays
      ring: [-97.56, 27.9, -97.4, 27.92, -97.2, 27.93, -97.12, 27.93, -97.07, 27.87, -97.04, 27.84, -97.1, 27.76, -97.16, 27.68, -97.22, 27.62, -97.4, 27.62, -97.42, 27.7, -97.4, 27.78, -97.56, 27.82],
    },
    {
      name: "the Laguna Madre", // with Baffin Bay, from the JFK Causeway to Port Isabel
      ring: [-97.22, 27.62, -97.26, 27.55, -97.29, 27.5, -97.31, 27.44, -97.33, 27.37, -97.36, 27.25, -97.385, 27.0, -97.37, 26.86, -97.33, 26.71, -97.3, 26.62, -97.24, 26.44, -97.21, 26.3, -97.18, 26.2, -97.165, 26.07, -97.3, 26.05, -97.42, 26.3, -97.52, 26.6, -97.48, 26.9, -97.5, 27.2, -97.72, 27.26, -97.7, 27.35, -97.45, 27.42, -97.4, 27.62],
    },
    {
      name: "Aransas Bay", // with Copano and St. Charles bays
      ring: [-97.12, 27.93, -97.07, 27.87, -97.03, 27.88, -96.94, 28.0, -96.85, 28.08, -96.8, 28.14, -96.84, 28.22, -96.92, 28.26, -97.0, 28.22, -97.1, 28.22, -97.24, 28.16, -97.24, 28.06, -97.16, 28.0],
    },
    {
      name: "San Antonio Bay", // with Espiritu Santo Bay, inside Matagorda Island
      ring: [-96.8, 28.14, -96.84, 28.22, -96.83, 28.32, -96.85, 28.42, -96.7, 28.45, -96.42, 28.43, -96.4, 28.38, -96.55, 28.27, -96.7, 28.17],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The Piney Woods: the Angelina, Davy Crockett, Sabine and Sam Houston national forests, the
    // Big Thicket and the pine and hardwood belt from Texarkana to Orange (as Oklahoma's
    // Choctaw-McCurtain-Pushmataha across the Red River)
    forest: [
      "tx-angelina", "tx-bowie", "tx-camp-upshur", "tx-cass-marion-morris", "tx-cherokee",
      "tx-gregg", "tx-hardin", "tx-harrison", "tx-houston-trinity", "tx-jasper-newton-tyler",
      "tx-montgomery", "tx-nacogdoches", "tx-orange", "tx-panola-shelby", "tx-polk", "tx-rusk",
      "tx-sabine-san-augustine", "tx-san-jacinto", "tx-smith", "tx-walker",
    ],
    // Woods with farms and pasture: the Piney Woods' west edge and the Post Oak Savannah (the
    // Lost Pines by Bastrop), the Cross Timbers west of Fort Worth, and the Hill Country's oak and
    // juniper (Texas's map is flat but for the Trans-Pecos, so these show few trees)
    wooded: [
      "tx-anderson", "tx-bandera-kendall", "tx-bastrop", "tx-blanco-gillespie", "tx-burnet-llano",
      "tx-clay-montague", "tx-comal", "tx-comanche-hamilton", "tx-edwards-real-uvalde",
      "tx-erath-somervell", "tx-franklin-red-river-titus", "tx-grimes-washington", "tx-henderson",
      "tx-hood", "tx-jack-palo-pinto", "tx-kerr", "tx-kimble-menard", "tx-lampasas-mills-san-saba",
      "tx-leon-madison", "tx-liberty", "tx-rains-wood", "tx-van-zandt",
    ],
    // The Chihuahuan Desert (El Paso, the Big Bend, the Guadalupe and Davis mountains, the Pecos
    // valley: New Mexico's Doña Ana, Otero, Eddy and Lea are dry across the line), the Permian
    // Basin's sandhills and the Rio Grande's brush country from Del Rio to Rio Grande City
    dry: [
      "tx-andrews-gaines", "tx-brewster-jeff-davis-presidio", "tx-crane-upton",
      "tx-culberson-hudspeth", "tx-dimmit-zavala", "tx-ector", "tx-el-paso", "tx-jim-hogg-zapata",
      "tx-kinney-val-verde", "tx-loving-reeves", "tx-maverick", "tx-midland", "tx-pecos-terrell",
      "tx-starr", "tx-ward-winkler", "tx-webb",
    ],
    // Not listed (farmland and grassland): the Panhandle's and South Plains' wheat, cotton and
    // feedlots (as Oklahoma's Panhandle and New Mexico's Curry and Quay), the Rolling Plains and
    // the Big Country, the Blackland Prairie from Sherman to San Antonio, the Edwards Plateau's
    // ranches west of the Hill Country, the coastal prairie's rice and cattle, and the Valley's
    // irrigated farms.
  },
});
