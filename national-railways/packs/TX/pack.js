// National Railways pack: Texas.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
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
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // (Added in part B of the build: NOTES.md.)
  towns: [],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
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
  // Real mountain passes and canyons: [name, latitude, longitude]. (Part B.)
  passes: [],
  // Real bridges: [name, latitude, longitude]. (Part B.)
  bridges: [],
  // Bays where water needs a bridge: { name, ring: [lon, lat, ...] }. (Part B.)
  bays: [],
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
