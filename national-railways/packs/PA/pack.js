// National Railways pack: Pennsylvania.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests are. The county borders come from map.js and the mountains, lakes and
// rivers from terrain.js. What each field means: PACKS.md. Judgment calls and sources:
// packs/PA/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/PA/raw.
// Pennsylvania's 67 counties are 55 regions (merges in tools/build-map.js, STATES.PA).
NR.addPack({
  code: "PA",
  name: "Pennsylvania",
  // A game that starts here begins owning Philadelphia (the biggest region), Montgomery and Bucks; both touch
  // Philadelphia and each other. Philadelphia and Norristown are metro and Doylestown is farm, so the first
  // track (Norristown to Doylestown, the nearest pair of different types) has riders.
  start: ["pa-philadelphia", "pa-montgomery", "pa-bucks"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code
  // shown on passengers (ids that other packs use got a P or other letters). pop = region population in
  // thousands (2020 census). size = how busy (1 to 5). level = which level unlocks it in Levels mode.
  // Points are the Census points, except where a comment says it was moved to a downtown.
  stations: [
    // Level: Philadelphia, its suburbs and the Lehigh Valley: the Delaware Valley, I-76, I-476 and I-78
    // Philadelphia (1,603,793): 30th Street Station, the Amtrak Northeast Corridor and Keystone hub beside Center City and the Schuylkill (the Census point is the middle of the long city limits, 5 mi north-east). The core of a metro of 6.2 million (like Atlanta or Miami), size 5, the biggest region of the state. A real major port (Packer Avenue and Tioga marine terminals on the Delaware) and Philadelphia International Airport (PHL, in the county), so both sit on this station.
    { id: "PHL", name: "Philadelphia", county: "pa-philadelphia", lat: 39.96, lon: -75.18, port: "Port of Philadelphia", airport: "Philadelphia International Airport", type: "metro", size: 5, pop: 1604, main: true, level: "southeast" },
    // Norristown (35,795): the Montgomery seat on the Schuylkill, I-276/PA Turnpike and SEPTA's Manayunk/Norristown line (Pottstown, Lansdale and Conshohocken are towns). Region 857k, size 3 like Baltimore County (855k).
    { id: "NRPA", name: "Norristown", county: "pa-montgomery", lat: 40.12, lon: -75.34, type: "metro", size: 3, pop: 857, main: true, level: "southeast" },
    // Doylestown (8,304): the Bucks seat, a historic county-town (Mercer Museum, Fonthill) in farm country on US-202 and US-611, in the middle of the county. The biggest place, Bristol (9,863), is a mill town on the Delaware at the south-east edge, and Levittown (a census-designated place, no population in places.json) is the real urban centre on I-95 and is a town here. Typed farm so the start (Philadelphia, Montgomery, Bucks) has two types of place. Region 647k, size 3.
    { id: "DOYL", name: "Doylestown", county: "pa-bucks", lat: 40.31, lon: -75.13, type: "farm", size: 3, pop: 647, main: true, level: "southeast" },
    // Chester (32,611): the biggest city of Delaware County, a port and rail city on the Delaware, I-95 and the Amtrak/SEPTA lines (Media, the seat, is a town). Region 577k, size 3.
    { id: "CSPA", name: "Chester", county: "pa-delaware", lat: 39.85, lon: -75.37, type: "metro", size: 3, pop: 577, main: true, level: "southeast" },
    // West Chester (18,670): the Chester County seat on US-202 and PA-100, the biggest place with Phoenixville (18,610) a close second and a town here. Region 534k, size 3.
    { id: "WCHS", name: "West Chester", county: "pa-chester", lat: 39.96, lon: -75.61, type: "metro", size: 3, pop: 534, main: true, level: "southeast" },
    // Lancaster (58,056): the heart of the Pennsylvania Dutch (Amish) farm country, on US-30 and the Amtrak Keystone line. Region 553k, metro 550k: size 3. Typed farm.
    { id: "LNPA", name: "Lancaster", county: "pa-lancaster", lat: 40.04, lon: -76.3, type: "farm", size: 3, pop: 553, main: true, level: "southeast" },
    // Reading (95,098): the Berks seat on the Schuylkill, US-422 and the old Reading Railroad. Region 429k, size 3.
    { id: "RDNG", name: "Reading", county: "pa-berks", lat: 40.34, lon: -75.93, type: "metro", size: 3, pop: 429, main: true, level: "southeast" },
    // Allentown (125,855): the third city of the state, on the Lehigh, I-78 and US-22. The Lehigh Valley metro (Lehigh and Northampton, 860k) is shared: Allentown 3 and Bethlehem 2.
    { id: "ALNT", name: "Allentown", county: "pa-lehigh", lat: 40.59, lon: -75.48, type: "metro", size: 3, pop: 375, main: true, level: "southeast" },
    // Bethlehem (75,792): the old Bethlehem Steel city on the Lehigh, I-78 and US-22, 5 mi from Allentown (Easton, 28,128, is a town). Region 313k, size 2 because the metro is shared with Allentown (size 3).
    { id: "BTHL", name: "Bethlehem", county: "pa-northampton", lat: 40.63, lon: -75.37, type: "metro", size: 2, pop: 313, main: true, level: "southeast" },
    // Jim Thorpe (4,505): the Carbon seat, a Victorian railroad town in the Lehigh Gorge (the Lehigh Gorge Scenic Railway, the Old Jail), on US-209 and the PA Turnpike's Northeast Extension. Chosen over Palmerton (5,597, at the east edge) and Lehighton (5,249). Region 65k, size 1.
    { id: "JMTH", name: "Jim Thorpe", county: "pa-carbon", lat: 40.88, lon: -75.73, scenic: true, type: "mountain", size: 1, pop: 65, main: true, level: "southeast" },
    // East Stroudsburg (9,669): the biggest place of the Poconos, on I-80 and US-209, next to Stroudsburg (5,940, the seat). Region 168k, size 2.
    { id: "ESBG", name: "East Stroudsburg", county: "pa-monroe", lat: 41, lon: -75.17, type: "mountain", size: 2, pop: 168, main: true, level: "southeast" },
    // Level: Harrisburg and the Susquehanna Valley: the Cumberland and Lebanon valleys, York, and the Juniata
    // Harrisburg (50,087): the state capital on the Susquehanna, at the Capitol and the Amtrak Keystone station (the Census point is 1.5 mi north). Metro 590k (Dauphin, Cumberland, Perry), shared with Carlisle (size 2): Harrisburg 3 as the capital. Region 286k.
    { id: "HBPA", name: "Harrisburg", county: "pa-dauphin", lat: 40.26, lon: -76.88, type: "metro", size: 3, pop: 286, main: true, level: "susquehanna" },
    // Lebanon (26,820): the Lebanon seat on I-78 and PA-72 in the Lebanon Valley. Region 143k, size 2.
    { id: "LBPA", name: "Lebanon", county: "pa-lebanon", lat: 40.34, lon: -76.42, type: "farm", size: 2, pop: 143, main: true, level: "susquehanna" },
    // York (44,798): the York seat on I-83 and US-30 and the old Northern Central line. Region 456k, size 3.
    { id: "YKPA", name: "York", county: "pa-york", lat: 39.96, lon: -76.73, type: "metro", size: 3, pop: 456, main: true, level: "susquehanna" },
    // Gettysburg (7,108): the Adams seat on US-15 and US-30, Gettysburg National Military Park (the 1863 battlefield, NPS), the biggest sight of the south. Region 104k, size 1.
    { id: "GBPA", name: "Gettysburg", county: "pa-adams", lat: 39.83, lon: -77.23, scenic: true, type: "farm", size: 1, pop: 104, main: true, level: "susquehanna" },
    // Chambersburg (21,900): the Franklin seat on I-81 and US-30 in the Cumberland Valley (Waynesboro, 11,038, is a town). Region 156k, size 2.
    { id: "CBPA", name: "Chambersburg", county: "pa-franklin", lat: 39.93, lon: -77.66, type: "farm", size: 2, pop: 156, main: true, level: "susquehanna" },
    // Carlisle (20,115): the Cumberland seat at I-81 and the PA Turnpike, with Mechanicsburg and Camp Hill on the Harrisburg side. Region 259k, size 2.
    { id: "CLPA", name: "Carlisle", county: "pa-cumberland", lat: 40.2, lon: -77.2, type: "metro", size: 2, pop: 259, main: true, level: "susquehanna" },
    // Newport (1,484): the middle of the region on US-22/322 and the Juniata, 13 mi from Mifflintown and 12 mi from Duncannon, instead of Marysville (2,655, at the south-east edge of Perry beside Harrisburg). Region 69k, size 1.
    { id: "NWPA", name: "Newport", county: "pa-juniata-perry", lat: 40.48, lon: -77.13, type: "farm", size: 1, pop: 69, main: true, level: "susquehanna" },
    // Selinsgrove (5,715): the biggest place on US-11/15 on the Susquehanna, Susquehanna University (Lewisburg, 5,159, with Bucknell, is a town). Region 82k, size 1.
    { id: "SELG", name: "Selinsgrove", county: "pa-snyder-union", lat: 40.8, lon: -76.87, type: "farm", size: 1, pop: 82, main: true, level: "susquehanna" },
    // Lewistown (8,573): the Mifflin seat on the Juniata and US-22/322 in the Narrows, the biggest place (Huntingdon, 6,819, is a town). Region 90k, size 1.
    { id: "LEWS", name: "Lewistown", county: "pa-huntingdon-mifflin", lat: 40.6, lon: -77.57, type: "farm", size: 1, pop: 90, main: true, level: "susquehanna" },
    // Bedford (2,868): the Bedford seat at the PA Turnpike and US-30/220, Old Bedford Village (McConnellsburg, 1,148, the Fulton seat, is a town). Region 62k, size 1.
    { id: "BDPA", name: "Bedford", county: "pa-bedford-fulton", lat: 40.02, lon: -78.5, type: "mountain", size: 1, pop: 62, main: true, level: "susquehanna" },
    // Pottsville (13,349): the Schuylkill seat in the anthracite coal region on the Schuylkill and PA-61 (Yuengling Brewery, 1829). Region 143k, size 2.
    { id: "PVPA", name: "Pottsville", county: "pa-schuylkill", lat: 40.68, lon: -76.21, type: "mountain", size: 2, pop: 143, main: true, level: "susquehanna" },
    // Sunbury (9,716): the Northumberland seat at the fork of the Susquehanna's two branches, US-11/15. Region 92k, size 1.
    { id: "SNBY", name: "Sunbury", county: "pa-northumberland", lat: 40.86, lon: -76.79, type: "farm", size: 1, pop: 92, main: true, level: "susquehanna" },
    // State College (40,495): Penn State and the Nittany Valley on US-322 and I-99 (Bellefonte, 6,075, the seat, is a town). Region 158k, size 2.
    { id: "SCPA", name: "State College", county: "pa-centre", lat: 40.79, lon: -77.86, type: "metro", size: 2, pop: 158, main: true, level: "susquehanna" },
    // Level: The Northeast and the Northern Tier: Scranton and Wilkes-Barre, I-81, I-80 and US-6
    // Scranton (76,335): downtown at Lackawanna Avenue and the Steamtown National Historic Site (NPS), the Electric City on I-81 and I-84 (the Census point is the same place). Scenic: Steamtown and the Lackawanna Coal Mine. Metro 570k with Wilkes-Barre (Luzerne), shared: Scranton 2 (216k) and Wilkes-Barre 3 (326k).
    { id: "SCRA", name: "Scranton", county: "pa-lackawanna", lat: 41.41, lon: -75.66, scenic: true, type: "metro", size: 2, pop: 216, main: true, level: "northeast" },
    // Wilkes-Barre (44,325): the Luzerne seat on the Susquehanna at Public Square, I-81 and I-476, the anthracite capital (Hazleton, 29,937, is a town). Region 326k, size 3.
    { id: "WBRE", name: "Wilkes-Barre", county: "pa-luzerne", lat: 41.25, lon: -75.88, type: "metro", size: 3, pop: 326, main: true, level: "northeast" },
    // Honesdale (4,466): the Wayne seat on US-6, the start of the old D&H Canal and the Stourbridge Lion's town. Region 51k, size 1.
    { id: "HNDL", name: "Honesdale", county: "pa-wayne", lat: 41.58, lon: -75.25, type: "farm", size: 1, pop: 51, main: true, level: "northeast" },
    // Milford (1,105): the Pike seat on US-6/209 and the Delaware, Grey Towers (Pinchot). Matamoras (2,362) is at the far corner on I-84 and is a town. Region 59k, size 1.
    { id: "MLPA", name: "Milford", county: "pa-pike", lat: 41.32, lon: -74.8, type: "mountain", size: 1, pop: 59, main: true, level: "northeast" },
    // Tunkhannock (1,765): the Wyoming seat on the Susquehanna and US-6, the middle of the region (Forest City, 1,780, is at its eastern edge near Lackawanna; they tie). Region 65k, size 1.
    { id: "TNKH", name: "Tunkhannock", county: "pa-susquehanna-wyoming", lat: 41.54, lon: -75.95, type: "farm", size: 1, pop: 65, main: true, level: "northeast" },
    // Towanda (2,799): the Bradford seat on the Susquehanna and US-6, the middle of the county, instead of Sayre (5,463, at the New York line). Region 60k, size 1.
    { id: "TWDA", name: "Towanda", county: "pa-bradford", lat: 41.77, lon: -76.45, type: "farm", size: 1, pop: 60, main: true, level: "northeast" },
    // Wellsboro (3,470): the Tioga seat on US-6, the gateway of the Pine Creek Gorge (Coudersport, 2,380, the Potter seat, and Mansfield are towns). Region 57k, size 1.
    { id: "WBRO", name: "Wellsboro", county: "pa-potter-tioga", lat: 41.75, lon: -77.3, type: "mountain", size: 1, pop: 57, main: true, level: "northeast" },
    // Bloomsburg (12,708): the Columbia seat on the Susquehanna, I-80 and US-11 (Berwick, 10,327, and Danville, 4,246, are towns). Region 89k, size 1.
    { id: "BLPA", name: "Bloomsburg", county: "pa-columbia-montour-sullivan", lat: 41, lon: -76.46, type: "farm", size: 1, pop: 89, main: true, level: "northeast" },
    // Williamsport (27,761): the Lycoming seat on the West Branch of the Susquehanna, US-15 and US-220, home of the Little League World Series. Region 114k, size 1.
    { id: "WMPT", name: "Williamsport", county: "pa-lycoming", lat: 41.24, lon: -77, type: "metro", size: 2, pop: 114, main: true, level: "northeast" },
    // Lock Haven (8,111): the Clinton seat on the West Branch and US-220, the biggest place of the region (Emporium, 1,924, the Cameron seat, is a town). Region 42k, size 1.
    { id: "LKHV", name: "Lock Haven", county: "pa-cameron-clinton", lat: 41.14, lon: -77.45, type: "mountain", size: 1, pop: 42, main: true, level: "northeast" },
    // St. Marys (12,742): the biggest place on US-219/PA-120 in the Allegheny plateau (Bradford, 7,842, and Ridgway are towns). Region 71k, size 1.
    { id: "STMS", name: "St. Marys", county: "pa-elk-mckean", lat: 41.43, lon: -78.56, type: "mountain", size: 1, pop: 71, main: true, level: "northeast" },
    // DuBois (7,510): the biggest place of Clearfield on I-80 and US-219 (Clearfield, 5,957, the seat, is a town). Region 81k, size 1.
    { id: "DUBS", name: "DuBois", county: "pa-clearfield", lat: 41.12, lon: -78.76, type: "mountain", size: 1, pop: 81, main: true, level: "northeast" },
    // Level: Pittsburgh and the western plateau: I-79, I-76 and the Pennsylvania Railroad's mountain line
    // Pittsburgh (302,955): the Golden Triangle at the Point where the Allegheny and Monongahela make the Ohio (the Census point is 1 mi east). Metro 2.4 million (like Cleveland and Cincinnati), size 4. Pittsburgh International Airport (PIT) is in Findlay Township, in the county.
    { id: "PIT", name: "Pittsburgh", county: "pa-allegheny", lat: 40.44, lon: -80, airport: "Pittsburgh International Airport", type: "metro", size: 4, pop: 1251, main: true, level: "west" },
    // Greensburg (14,927): the Westmoreland seat on US-30 and the Norfolk Southern line, instead of Murrysville (20,991, a long municipality of 56 sq mi on the Allegheny edge). Region 355k, size 3.
    { id: "GRPA", name: "Greensburg", county: "pa-westmoreland", lat: 40.31, lon: -79.54, type: "metro", size: 3, pop: 355, main: true, level: "west" },
    // Washington (13,168): the county seat on I-70 and I-79 (the station is named after the city; the county shares its name). Region 209k, size 2.
    { id: "WSPA", name: "Washington", county: "pa-washington", lat: 40.17, lon: -80.25, type: "metro", size: 2, pop: 209, main: true, level: "west" },
    // Aliquippa (9,242): the biggest place of Beaver County on the Ohio, PA-51 (Beaver Falls, 9,002, and Beaver, the seat, are close behind). Region 168k, size 2.
    { id: "ALIQ", name: "Aliquippa", county: "pa-beaver", lat: 40.62, lon: -80.26, type: "metro", size: 2, pop: 168, main: true, level: "west" },
    // Butler (13,495): the Butler seat on US-422 and PA-8 (the station is named after the city). Region 194k, size 2.
    { id: "BTPA", name: "Butler", county: "pa-butler", lat: 40.86, lon: -79.9, type: "metro", size: 2, pop: 194, main: true, level: "west" },
    // New Castle (21,936): the Lawrence seat on the Shenango and I-376/US-422 near the Ohio line. Region 86k, size 1.
    { id: "NCPA", name: "New Castle", county: "pa-lawrence", lat: 41, lon: -80.35, type: "farm", size: 1, pop: 86, main: true, level: "west" },
    // Hermitage (16,233): the biggest city of Mercer, on I-80/I-376 and US-62 beside Sharon (13,149, at the Ohio border). Region 111k, size 1.
    { id: "HRMT", name: "Hermitage", county: "pa-mercer", lat: 41.23, lon: -80.44, type: "metro", size: 1, pop: 111, main: true, level: "west" },
    // Meadville (13,035): the Crawford seat on I-79 and US-322 (Titusville, 5,268, with the Drake Well, is a town). Region 84k, size 1.
    { id: "MDPA", name: "Meadville", county: "pa-crawford", lat: 41.65, lon: -80.15, type: "farm", size: 1, pop: 84, main: true, level: "west" },
    // Erie (94,852): Pennsylvania's Lake Erie city, on I-90 and I-79, the Amtrak Lake Shore line and the bay at Presque Isle. Region 271k, size 2.
    { id: "ERPA", name: "Erie", county: "pa-erie", lat: 42.12, lon: -80.07, type: "coast", size: 2, pop: 271, main: true, level: "west" },
    // Oil City (9,612): the biggest place of Venango on the Allegheny River and PA-8/US-62, where the world's first oil boom began (Franklin, 6,078, the seat, is a town). Region 50k, size 1.
    { id: "OLCT", name: "Oil City", county: "pa-venango", lat: 41.43, lon: -79.71, type: "mountain", size: 1, pop: 50, main: true, level: "west" },
    // Warren (9,400): the Warren seat on the Allegheny River and US-6/62, the biggest place of the Allegheny National Forest region (Tionesta, 431, is the Forest seat). Region 46k, size 1.
    { id: "WRPA", name: "Warren", county: "pa-forest-warren", lat: 41.84, lon: -79.14, type: "mountain", size: 1, pop: 46, main: true, level: "west" },
    // Brookville (3,991): the Jefferson seat on I-80 and US-322/PA-36, in the middle of the region, instead of Punxsutawney (5,768, at the south edge, a town) or Clarion (3,931, at the west end). Region 82k, size 1.
    { id: "BKPA", name: "Brookville", county: "pa-clarion-jefferson", lat: 41.16, lon: -79.08, type: "mountain", size: 1, pop: 82, main: true, level: "west" },
    // Kittanning (3,925): the Armstrong seat on the Allegheny River and US-422/PA-28, in the middle of the county, instead of Vandergrift (5,070, in the south-west corner next to Westmoreland). Region 66k, size 1.
    { id: "KTNG", name: "Kittanning", county: "pa-armstrong", lat: 40.83, lon: -79.52, type: "farm", size: 1, pop: 66, main: true, level: "west" },
    // Indiana (14,045): the Indiana seat on US-119/422, Indiana University of Pennsylvania (the station is named after the borough; the county shares its name). Region 83k, size 1.
    { id: "IDPA", name: "Indiana", county: "pa-indiana", lat: 40.62, lon: -79.16, type: "farm", size: 1, pop: 83, main: true, level: "west" },
    // Uniontown (9,984): the Fayette seat on US-40 (the National Road) and US-119 at the Laurel Highlands. Region 129k, size 1.
    { id: "UNPA", name: "Uniontown", county: "pa-fayette", lat: 39.9, lon: -79.72, type: "mountain", size: 1, pop: 129, main: true, level: "west" },
    // Waynesburg (4,001): the Greene seat on US-19 and PA-21, the south-west corner of the state next to West Virginia. Region 36k, size 1.
    { id: "WBPA", name: "Waynesburg", county: "pa-greene", lat: 39.9, lon: -80.19, type: "farm", size: 1, pop: 36, main: true, level: "west" },
    // Somerset (6,051): the Somerset seat on the PA Turnpike and US-219, the Laurel Highlands. Region 74k, size 1.
    { id: "SOPA", name: "Somerset", county: "pa-somerset", lat: 40.01, lon: -79.08, type: "mountain", size: 1, pop: 74, main: true, level: "west" },
    // Johnstown (18,414): the Cambria seat at the Conemaugh, the 1889 flood city on US-219/22. Region 133k, size 2 because Johnstown is a real city of the Alleghenies (just under the 140k line).
    { id: "JTPA", name: "Johnstown", county: "pa-cambria", lat: 40.33, lon: -78.92, type: "mountain", size: 2, pop: 133, main: true, level: "west" },
    // Altoona (43,973): the Blair seat and the Pennsylvania Railroad's mountain shops city at the foot of the Allegheny Front, I-99 and US-220. Region 123k, size 2 for the same reason as Johnstown.
    { id: "ALPA", name: "Altoona", county: "pa-blair", lat: 40.51, lon: -78.4, type: "mountain", size: 2, pop: 123, main: true, level: "west" },
  ],
  // Towns that appear over time: the next-biggest real places of each region (Census points; the places.json
  // population is in NOTES.md), spread out (at least 5 mi from every other place), plus well-known scenic places
  // (scenic: true, sources in NOTES.md).
  towns: [
    // montgomery
    { id: "POTT", name: "Pottstown", county: "pa-montgomery", lat: 40.25, lon: -75.64, type: "metro", size: 2 },
    { id: "LANP", name: "Lansdale", county: "pa-montgomery", lat: 40.24, lon: -75.28, type: "metro", size: 1 },
    // Valley Forge National Historical Park, Washington's 1777-78 winter camp (National Park Service), at the visitor center in Upper Merion.
    { id: "VAFO", name: "Valley Forge", county: "pa-montgomery", lat: 40.1, lon: -75.44, scenic: true, type: "metro", size: 1 },
    // bucks
    // Levittown, the biggest community of Bucks (census-designated place, no population in places.json; the 1950s planned town on US-1 and I-95).
    { id: "LEVI", name: "Levittown", county: "pa-bucks", lat: 40.15, lon: -74.85, type: "metro", size: 2 },
    { id: "MORP", name: "Morrisville", county: "pa-bucks", lat: 40.21, lon: -74.78, type: "metro", size: 1 },
    { id: "QUAK", name: "Quakertown", county: "pa-bucks", lat: 40.44, lon: -75.35, type: "farm", size: 1 },
    // delaware
    { id: "MEDP", name: "Media", county: "pa-delaware", lat: 39.92, lon: -75.39, type: "metro", size: 1 },
    { id: "COLL", name: "Collingdale", county: "pa-delaware", lat: 39.92, lon: -75.28, type: "metro", size: 1 },
    // chester
    { id: "PHOE", name: "Phoenixville", county: "pa-chester", lat: 40.14, lon: -75.52, type: "metro", size: 2 },
    { id: "COAT", name: "Coatesville", county: "pa-chester", lat: 39.99, lon: -75.82, type: "farm", size: 1 },
    // Longwood Gardens, the du Pont gardens at Kennett Square (well-known botanical garden).
    { id: "LGAR", name: "Longwood Gardens", county: "pa-chester", lat: 39.87, lon: -75.67, scenic: true, type: "farm", size: 1 },
    // lancaster
    { id: "EPHR", name: "Ephrata", county: "pa-lancaster", lat: 40.18, lon: -76.18, type: "farm", size: 2 },
    { id: "ELIP", name: "Elizabethtown", county: "pa-lancaster", lat: 40.15, lon: -76.6, type: "farm", size: 1 },
    { id: "COLP", name: "Columbia", county: "pa-lancaster", lat: 40.03, lon: -76.5, type: "farm", size: 1 },
    // Intercourse, the best-known village of Lancaster County's Amish country (census-designated place; Kitchen Kettle Village, the Amish Farm).
    { id: "INTE", name: "Intercourse", county: "pa-lancaster", lat: 40.04, lon: -76.11, scenic: true, type: "farm", size: 1 },
    // berks
    { id: "BIRD", name: "Birdsboro", county: "pa-berks", lat: 40.26, lon: -75.81, type: "metro", size: 1 },
    { id: "HAMB", name: "Hamburg", county: "pa-berks", lat: 40.56, lon: -75.98, type: "farm", size: 1 },
    { id: "BOYE", name: "Boyertown", county: "pa-berks", lat: 40.33, lon: -75.64, type: "farm", size: 1 },
    // lehigh
    { id: "MACU", name: "Macungie", county: "pa-lehigh", lat: 40.52, lon: -75.55, type: "farm", size: 1 },
    // northampton
    { id: "EASP", name: "Easton", county: "pa-northampton", lat: 40.69, lon: -75.22, type: "metro", size: 2 },
    { id: "NORP", name: "Northampton", county: "pa-northampton", lat: 40.69, lon: -75.49, type: "metro", size: 1 },
    // carbon
    { id: "PALM", name: "Palmerton", county: "pa-carbon", lat: 40.8, lon: -75.62, type: "mountain", size: 1 },
    // monroe
    { id: "MOPO", name: "Mount Pocono", county: "pa-monroe", lat: 41.12, lon: -75.36, type: "mountain", size: 1 },
    // Delaware Water Gap, the gorge of the Delaware through Kittatinny Ridge (Delaware Water Gap National Recreation Area, NPS), at the borough. It is 2.6 mi from East Stroudsburg's station (the checker's spacing warning): the Gap is the sight.
    { id: "DEGA", name: "Delaware Water Gap", county: "pa-monroe", lat: 40.97, lon: -75.13, scenic: true, type: "mountain", size: 1 },
    // dauphin
    { id: "MIDP", name: "Middletown", county: "pa-dauphin", lat: 40.2, lon: -76.73, type: "metro", size: 1 },
    { id: "MILP", name: "Millersburg", county: "pa-dauphin", lat: 40.54, lon: -76.95, type: "farm", size: 1 },
    // Hershey (Hersheypark, Chocolate World and the Hershey chocolate town), a census-designated place in Derry Township.
    { id: "HERS", name: "Hershey", county: "pa-dauphin", lat: 40.29, lon: -76.65, scenic: true, type: "farm", size: 2 },
    // lebanon
    { id: "MYER", name: "Myerstown", county: "pa-lebanon", lat: 40.37, lon: -76.31, type: "farm", size: 1 },
    // york
    { id: "HANO", name: "Hanover", county: "pa-york", lat: 39.81, lon: -76.98, type: "metro", size: 2 },
    { id: "RELI", name: "Red Lion", county: "pa-york", lat: 39.9, lon: -76.61, type: "farm", size: 1 },
    { id: "NEFR", name: "New Freedom", county: "pa-york", lat: 39.74, lon: -76.7, type: "farm", size: 1 },
    // adams
    { id: "LITT", name: "Littlestown", county: "pa-adams", lat: 39.75, lon: -77.09, type: "farm", size: 1 },
    // franklin
    { id: "WAYP", name: "Waynesboro", county: "pa-franklin", lat: 39.75, lon: -77.58, type: "farm", size: 1 },
    { id: "GREP", name: "Greencastle", county: "pa-franklin", lat: 39.79, lon: -77.73, type: "farm", size: 1 },
    // cumberland
    { id: "MECH", name: "Mechanicsburg", county: "pa-cumberland", lat: 40.21, lon: -77.01, type: "metro", size: 1 },
    { id: "SHIP", name: "Shippensburg", county: "pa-cumberland", lat: 40.05, lon: -77.52, type: "farm", size: 1 },
    // juniata-perry
    { id: "MARP", name: "Marysville", county: "pa-juniata-perry", lat: 40.34, lon: -76.93, type: "farm", size: 1 },
    { id: "MIFF", name: "Mifflintown", county: "pa-juniata-perry", lat: 40.57, lon: -77.4, type: "farm", size: 1 },
    // snyder-union
    { id: "LEWP", name: "Lewisburg", county: "pa-snyder-union", lat: 40.96, lon: -76.89, type: "farm", size: 1 },
    // huntingdon-mifflin
    { id: "HUNP", name: "Huntingdon", county: "pa-huntingdon-mifflin", lat: 40.5, lon: -78.01, type: "farm", size: 1 },
    { id: "MUNI", name: "Mount Union", county: "pa-huntingdon-mifflin", lat: 40.38, lon: -77.88, type: "farm", size: 1 },
    // bedford-fulton
    { id: "EVER", name: "Everett", county: "pa-bedford-fulton", lat: 40.01, lon: -78.36, type: "mountain", size: 1 },
    { id: "MCCP", name: "McConnellsburg", county: "pa-bedford-fulton", lat: 39.93, lon: -78, type: "mountain", size: 1 },
    // schuylkill
    { id: "TAMP", name: "Tamaqua", county: "pa-schuylkill", lat: 40.8, lon: -75.93, type: "mountain", size: 1 },
    // northumberland
    { id: "SHAP", name: "Shamokin", county: "pa-northumberland", lat: 40.79, lon: -76.56, type: "farm", size: 1 },
    // centre
    { id: "BETE", name: "Bellefonte", county: "pa-centre", lat: 40.91, lon: -77.77, type: "mountain", size: 1 },
    { id: "PHIP", name: "Philipsburg", county: "pa-centre", lat: 40.89, lon: -78.22, type: "mountain", size: 1 },
    // lackawanna
    { id: "CARB", name: "Carbondale", county: "pa-lackawanna", lat: 41.57, lon: -75.5, type: "mountain", size: 1 },
    { id: "BLAK", name: "Blakely", county: "pa-lackawanna", lat: 41.49, lon: -75.6, type: "metro", size: 1 },
    // luzerne
    { id: "HAZP", name: "Hazleton", county: "pa-luzerne", lat: 40.95, lon: -75.97, type: "mountain", size: 2 },
    { id: "PITT", name: "Pittston", county: "pa-luzerne", lat: 41.33, lon: -75.79, type: "metro", size: 1 },
    // wayne
    { id: "HAWL", name: "Hawley", county: "pa-wayne", lat: 41.48, lon: -75.18, type: "farm", size: 1 },
    // pike
    { id: "MATA", name: "Matamoras", county: "pa-pike", lat: 41.36, lon: -74.71, type: "mountain", size: 1 },
    // susquehanna-wyoming
    { id: "FOCI", name: "Forest City", county: "pa-susquehanna-wyoming", lat: 41.65, lon: -75.47, type: "farm", size: 1 },
    { id: "MONP", name: "Montrose", county: "pa-susquehanna-wyoming", lat: 41.83, lon: -75.88, type: "farm", size: 1 },
    // bradford
    { id: "SAYP", name: "Sayre", county: "pa-bradford", lat: 41.99, lon: -76.52, type: "farm", size: 1 },
    // potter-tioga
    { id: "MANP", name: "Mansfield", county: "pa-potter-tioga", lat: 41.81, lon: -77.08, type: "mountain", size: 1 },
    { id: "COUD", name: "Coudersport", county: "pa-potter-tioga", lat: 41.78, lon: -78.02, type: "mountain", size: 1 },
    // Pine Creek Gorge, the Pennsylvania Grand Canyon (Leonard Harrison State Park, 47 mi long and 1,450 ft deep; Pennsylvania DCNR).
    { id: "PIGO", name: "Pine Creek Gorge", county: "pa-potter-tioga", lat: 41.7, lon: -77.45, scenic: true, type: "mountain", size: 1 },
    // Cherry Springs State Park, a world-famous dark-sky park (Pennsylvania DCNR).
    { id: "CSPR", name: "Cherry Springs", county: "pa-potter-tioga", lat: 41.66, lon: -77.82, scenic: true, type: "mountain", size: 1 },
    // columbia-montour-sullivan
    { id: "BERW", name: "Berwick", county: "pa-columbia-montour-sullivan", lat: 41.06, lon: -76.25, type: "farm", size: 1 },
    { id: "DANP", name: "Danville", county: "pa-columbia-montour-sullivan", lat: 40.96, lon: -76.61, type: "farm", size: 1 },
    // lycoming
    { id: "JESH", name: "Jersey Shore", county: "pa-lycoming", lat: 41.2, lon: -77.27, type: "farm", size: 1 },
    // cameron-clinton
    { id: "EMPP", name: "Emporium", county: "pa-cameron-clinton", lat: 41.51, lon: -78.23, type: "mountain", size: 1 },
    // elk-mckean
    { id: "BRAP", name: "Bradford", county: "pa-elk-mckean", lat: 41.96, lon: -78.64, type: "mountain", size: 1 },
    // Kinzua Bridge State Park and the Skywalk on the ruins of the 1882 railroad viaduct (Pennsylvania DCNR).
    { id: "KIBR", name: "Kinzua Bridge", county: "pa-elk-mckean", lat: 41.76, lon: -78.58, scenic: true, type: "mountain", size: 1 },
    // clearfield
    { id: "CLEA", name: "Clearfield", county: "pa-clearfield", lat: 41.02, lon: -78.44, type: "mountain", size: 1 },
    // allegheny
    { id: "BEPA", name: "Bethel Park", county: "pa-allegheny", lat: 40.32, lon: -80.04, type: "metro", size: 2 },
    { id: "MOLE", name: "Monroeville", county: "pa-allegheny", lat: 40.43, lon: -79.76, type: "metro", size: 2 },
    { id: "WEMI", name: "West Mifflin", county: "pa-allegheny", lat: 40.36, lon: -79.91, type: "metro", size: 1 },
    // westmoreland
    { id: "MURP", name: "Murrysville", county: "pa-westmoreland", lat: 40.44, lon: -79.66, type: "metro", size: 2 },
    { id: "NEKE", name: "New Kensington", county: "pa-westmoreland", lat: 40.57, lon: -79.75, type: "metro", size: 1 },
    // washington
    { id: "CANO", name: "Canonsburg", county: "pa-washington", lat: 40.26, lon: -80.19, type: "metro", size: 1 },
    { id: "CALI", name: "California", county: "pa-washington", lat: 40.07, lon: -79.91, type: "metro", size: 1 },
    // beaver
    { id: "BEFA", name: "Beaver Falls", county: "pa-beaver", lat: 40.76, lon: -80.32, type: "metro", size: 1 },
    { id: "OHIO", name: "Ohioville", county: "pa-beaver", lat: 40.68, lon: -80.48, type: "farm", size: 1 },
    // butler
    { id: "ZELI", name: "Zelienople", county: "pa-butler", lat: 40.79, lon: -80.14, type: "metro", size: 1 },
    { id: "SLRO", name: "Slippery Rock", county: "pa-butler", lat: 41.07, lon: -80.06, type: "farm", size: 1 },
    // lawrence
    { id: "ELCI", name: "Ellwood City", county: "pa-lawrence", lat: 40.86, lon: -80.28, type: "metro", size: 1 },
    // mercer
    { id: "GRCI", name: "Grove City", county: "pa-mercer", lat: 41.16, lon: -80.09, type: "farm", size: 1 },
    // crawford
    { id: "TITU", name: "Titusville", county: "pa-crawford", lat: 41.63, lon: -79.67, type: "farm", size: 1 },
    // erie
    { id: "CORR", name: "Corry", county: "pa-erie", lat: 41.93, lon: -79.63, type: "farm", size: 1 },
    { id: "EDIN", name: "Edinboro", county: "pa-erie", lat: 41.88, lon: -80.12, type: "farm", size: 1 },
    // Presque Isle State Park (the sandy peninsula in Lake Erie, Pennsylvania's only surf beach; Pennsylvania DCNR), at the west end of the peninsula.
    { id: "PISL", name: "Presque Isle", county: "pa-erie", lat: 42.16, lon: -80.14, scenic: true, type: "coast", size: 1 },
    // venango
    { id: "FRAP", name: "Franklin", county: "pa-venango", lat: 41.38, lon: -79.83, type: "farm", size: 1 },
    // forest-warren
    { id: "YOUN", name: "Youngsville", county: "pa-forest-warren", lat: 41.85, lon: -79.32, type: "mountain", size: 1 },
    { id: "TION", name: "Tionesta", county: "pa-forest-warren", lat: 41.5, lon: -79.45, type: "mountain", size: 1 },
    // clarion-jefferson
    { id: "PUNX", name: "Punxsutawney", county: "pa-clarion-jefferson", lat: 40.94, lon: -78.97, type: "mountain", size: 1 },
    { id: "CLAP", name: "Clarion", county: "pa-clarion-jefferson", lat: 41.21, lon: -79.38, type: "mountain", size: 1 },
    // armstrong
    { id: "VAND", name: "Vandergrift", county: "pa-armstrong", lat: 40.62, lon: -79.58, type: "farm", size: 1 },
    // indiana
    { id: "HOCI", name: "Homer City", county: "pa-indiana", lat: 40.54, lon: -79.16, type: "farm", size: 1 },
    // fayette
    { id: "CONP", name: "Connellsville", county: "pa-fayette", lat: 40.02, lon: -79.59, type: "mountain", size: 1 },
    // Fallingwater, Frank Lloyd Wright's house over Bear Run at Mill Run (National Historic Landmark, UNESCO World Heritage Site).
    { id: "FALL", name: "Fallingwater", county: "pa-fayette", lat: 39.91, lon: -79.47, scenic: true, type: "mountain", size: 1 },
    // greene
    { id: "CARM", name: "Carmichaels", county: "pa-greene", lat: 39.9, lon: -79.97, type: "farm", size: 1 },
    // somerset
    { id: "WINP", name: "Windber", county: "pa-somerset", lat: 40.24, lon: -78.82, type: "mountain", size: 1 },
    // Flight 93 National Memorial near Shanksville (National Park Service).
    { id: "FLME", name: "Flight 93 Memorial", county: "pa-somerset", lat: 40.05, lon: -78.9, scenic: true, type: "mountain", size: 1 },
    // cambria
    { id: "EBEN", name: "Ebensburg", county: "pa-cambria", lat: 40.49, lon: -78.73, type: "mountain", size: 1 },
    // blair
    { id: "TYRO", name: "Tyrone", county: "pa-blair", lat: 40.68, lon: -78.25, type: "mountain", size: 1 },
    // Horseshoe Curve, the Pennsylvania Railroad's curve up the Allegheny Front (National Historic Landmark; Railroaders Memorial Museum).
    { id: "HOCU", name: "Horseshoe Curve", county: "pa-blair", lat: 40.49, lon: -78.48, scenic: true, type: "mountain", size: 1 },
  ],
  // City maps, keyed by their main stations (Philadelphia, Pittsburgh). Sources in NOTES.md.
  metros: {
    PHL: {
      name: "Philadelphia",
      size: 5,
      stops: [
        { id: "TSS", name: "30th Street Station", lat: 39.956, lon: -75.182, hub: true },
        { id: "CHC", name: "Center City", lat: 39.953, lon: -75.164 },
        { id: "STD", name: "Stadium District", lat: 39.901, lon: -75.168 },
        { id: "PHA", name: "Airport", lat: 39.872, lon: -75.241 },
        { id: "TEM", name: "Temple University", lat: 39.981, lon: -75.155 },
        { id: "GER", name: "Germantown", lat: 40.035, lon: -75.174 },
        { id: "MAN", name: "Manayunk", lat: 40.026, lon: -75.226 },
        { id: "FRK", name: "Frankford", lat: 40.023, lon: -75.078 },
        { id: "CAM", name: "Camden", lat: 39.943, lon: -75.121 },
        { id: "CHE", name: "Chester", lat: 39.849, lon: -75.356 },
        { id: "KOP", name: "King of Prussia", lat: 40.089, lon: -75.383 },
        { id: "UDB", name: "Upper Darby", lat: 39.962, lon: -75.259 },
      ],
    },
    PIT: {
      name: "Pittsburgh",
      size: 4,
      stops: [
        { id: "PGH", name: "Downtown", lat: 40.443, lon: -80, hub: true },
        { id: "STS", name: "Station Square", lat: 40.435, lon: -80.01, cable: true },
        { id: "MTW", name: "Mount Washington", lat: 40.438, lon: -80.018, cable: true }, // Grandview Avenue at the Duquesne Incline's top (main agent)
        { id: "OAK", name: "Oakland", lat: 40.444, lon: -79.953 },
        { id: "SQH", name: "Squirrel Hill", lat: 40.437, lon: -79.923 },
        { id: "ELB", name: "East Liberty", lat: 40.465, lon: -79.926 },
        { id: "STP", name: "Strip District", lat: 40.452, lon: -79.985 },
        { id: "SSD", name: "South Side", lat: 40.428, lon: -79.975 },
        { id: "PIA", name: "Airport", lat: 40.491, lon: -80.233 },
        { id: "SWK", name: "Sewickley", lat: 40.536, lon: -80.185 },
        { id: "MON", name: "Monroeville", lat: 40.421, lon: -79.788 },
        { id: "MTL", name: "Mt. Lebanon", lat: 40.377, lon: -80.04 },
      ],
    },
  },
  // Real mountain passes and gaps: [name, latitude, longitude]. See NOTES.md for sources. The map's ridges are
  // mostly hills, so only these gaps (where the grid has mountains within about 7 miles) are accepted; the
  // Horseshoe Curve, the Gallitzin tunnels and the Turnpike tunnels lie in hills on the map and need none.
  passes: [
    ["Lewistown Narrows (the Juniata between Lewistown and Mifflintown, US-22/322 and the Norfolk Southern Pittsburgh Line)",40.57,-77.49],
    ["Juniata River gap at Mount Union (US-22 and the Pittsburgh Line)",40.38,-77.88],
  ],
  // Real bridges: [name, latitude, longitude]. See NOTES.md for sources. Ohio's, West Virginia's and Maryland's
  // packs list the Ohio, Monongahela, Susquehanna (Conowingo) and Potomac crossings on their own sides; the
  // Delaware bridges serve New Jersey and New York when they come.
  bridges: [
    ["Benjamin Franklin Bridge (I-676, Philadelphia to Camden)",39.95,-75.13],
    ["Walt Whitman Bridge (I-76, Philadelphia to Gloucester City)",39.9,-75.13],
    ["Betsy Ross Bridge (NJ-90, Philadelphia to Pennsauken)",39.99,-75.07],
    ["Tacony-Palmyra Bridge (NJ-73, Philadelphia to Palmyra)",40.01,-75.04],
    ["Burlington-Bristol Bridge (US-13)",40.1,-74.86],
    ["Trenton-Morrisville bridges (US-1, Calhoun Street and the Trenton Makes bridge)",40.21,-74.77],
    ["New Hope-Lambertville Bridge (US-202)",40.37,-74.95],
    ["Easton-Phillipsburg bridges (I-78 and US-22)",40.69,-75.2],
    ["Delaware Water Gap Toll Bridge (I-80)",40.97,-75.13],
    ["Milford-Montague Bridge (US-206)",41.32,-74.8],
    ["Matamoras-Port Jervis Bridge (US-6)",41.37,-74.7],
    ["Schuylkill River bridges (Philadelphia, 30th Street and the Market Street bridge)",39.95,-75.18],
    ["Falls Bridge (Schuylkill River, Philadelphia)",40,-75.19],
    ["Schuylkill River bridges (Conshohocken, I-476 and the Matsonford Bridge)",40.08,-75.3],
    ["Schuylkill River bridges (Norristown, Main Street and Swede Street)",40.11,-75.35],
    ["Schuylkill River bridge (Phoenixville)",40.13,-75.52],
    ["Schuylkill River bridge (Pottstown)",40.25,-75.65],
    ["Schuylkill River bridges (Reading, Penn Street Bridge)",40.34,-75.93],
    ["Lehigh River bridges (Allentown, Hamilton Street Bridge)",40.6,-75.47],
    ["Lehigh River bridges (Bethlehem, Hill-to-Hill Bridge)",40.62,-75.38],
    ["Lehigh River bridges (Jim Thorpe and Lehighton)",40.85,-75.75],
    ["Susquehanna River bridges (Harrisburg, Market Street and Harvey Taylor bridges)",40.26,-76.89],
    ["Rockville Bridge (the Pennsylvania Railroad's stone arch, Marysville)",40.32,-76.92],
    ["Columbia-Wrightsville Bridge (US-30)",40.03,-76.52],
    ["Susquehanna River bridges (Sunbury and Northumberland)",40.87,-76.79],
    ["Susquehanna River bridge (Selinsgrove to Shamokin Dam, US-11/15)",40.83,-76.83],
    ["Susquehanna River bridge (Danville)",40.96,-76.6],
    ["Susquehanna River bridges (Bloomsburg)",41,-76.45],
    ["Susquehanna River bridge (Berwick to Nescopeck)",41.05,-76.25],
    ["Susquehanna River bridges (Wilkes-Barre, Market Street Bridge)",41.25,-75.88],
    ["Susquehanna River bridges (Pittston)",41.33,-75.79],
    ["Susquehanna River bridge (Tunkhannock, US-6)",41.54,-75.95],
    ["Susquehanna River bridge (Towanda)",41.77,-76.44],
    ["West Branch Susquehanna bridges (Milton, US-642 and the Milton-Lewisburg bridges)",40.98,-76.86],
    ["West Branch Susquehanna bridges (Williamsport)",41.24,-77.02],
    ["West Branch Susquehanna bridge (Jersey Shore, US-220)",41.2,-77.27],
    ["West Branch Susquehanna bridge (Lock Haven)",41.14,-77.45],
    ["Juniata River bridge (Newport)",40.48,-77.13],
    ["Juniata River bridge (Mifflintown)",40.57,-77.4],
    ["Juniata River bridge (Lewistown)",40.6,-77.57],
    ["Juniata River bridge (Mount Union)",40.38,-77.88],
    ["Juniata River bridges (Huntingdon)",40.49,-78.01],
    ["Allegheny River bridges (Pittsburgh, the Sixth, Seventh and Ninth Street bridges)",40.45,-80],
    ["Smithfield Street Bridge (Monongahela River, Pittsburgh)",40.44,-80],
    ["Ohio River bridges (Pittsburgh, the Fort Pitt and West End bridges)",40.44,-80.03],
    ["Monongahela River bridge (Homestead, Homestead Grays Bridge)",40.41,-79.92],
    ["Monongahela River bridges (McKeesport)",40.34,-79.86],
    ["Monongahela River bridge (Elizabeth)",40.27,-79.89],
    ["Monongahela River bridge (Charleroi to Monessen)",40.15,-79.9],
    ["Monongahela River bridge (Brownsville)",40.02,-79.89],
    ["Ohio River bridge (Ambridge to Aliquippa)",40.6,-80.23],
    ["Ohio River bridge (Beaver to Rochester)",40.7,-80.3],
    ["Allegheny River bridge (Tarentum)",40.6,-79.76],
    ["Allegheny River bridge (Kittanning)",40.82,-79.52],
    ["Allegheny River bridges (Franklin)",41.39,-79.83],
    ["Allegheny River bridges (Oil City)",41.43,-79.71],
    ["Allegheny River bridge (Warren)",41.84,-79.15],
    ["Kiskiminetas River bridge (Vandergrift to Leechburg)",40.63,-79.6],
    ["Youghiogheny River bridge (Connellsville)",40.02,-79.59],
    ["Conemaugh River bridges (Johnstown)",40.33,-78.92],
  ],
  levels: [
    {
      name: "Philadelphia & the Delaware Valley",
      areas: ["southeast"],
      goals: [
        { kind: "totalPassengers", target: 80 },
        { kind: "counties", target: 5 },
        // Philadelphia to Allentown, as I-476 and the Lehigh Valley run
        { kind: "connect", a: "PHL", b: "ALNT" },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Harrisburg & the Susquehanna Valley",
      areas: ["susquehanna"],
      goals: [
        { kind: "totalPassengers", target: 200 },
        // Harrisburg to York, as I-83 runs
        { kind: "connect", a: "HBPA", b: "YKPA" },
        { kind: "counties", target: 6 },
      ],
    },
    {
      name: "The Northeast & the Northern Tier",
      areas: ["northeast"],
      goals: [
        { kind: "totalPassengers", target: 300 },
        // Scranton to Wilkes-Barre, as I-81 runs
        { kind: "connect", a: "SCRA", b: "WBRE" },
        { kind: "counties", target: 5 },
      ],
    },
    {
      name: "Pittsburgh & the Western Plateau",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Pittsburgh to Altoona, as the Pennsylvania Railroad's main line runs
        { kind: "connect", a: "PIT", b: "ALPA" },
        { kind: "counties", target: 8 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The Pennsylvania Wilds (the Allegheny National Forest, Pine Creek and the Elk and Moshannon forests) and the Pike woods
    forest: ["pa-potter-tioga", "pa-cameron-clinton", "pa-elk-mckean", "pa-forest-warren", "pa-clearfield", "pa-clarion-jefferson", "pa-pike"],
    // The Ridge-and-Valley ridges, the Poconos, the coal hills and the Allegheny plateau and Laurel Highlands
    wooded: ["pa-bradford", "pa-susquehanna-wyoming", "pa-wayne", "pa-monroe", "pa-carbon", "pa-schuylkill", "pa-lackawanna", "pa-luzerne", "pa-columbia-montour-sullivan", "pa-lycoming", "pa-northumberland", "pa-snyder-union", "pa-centre", "pa-huntingdon-mifflin", "pa-juniata-perry", "pa-bedford-fulton", "pa-blair", "pa-cambria", "pa-somerset", "pa-fayette", "pa-greene", "pa-indiana", "pa-armstrong", "pa-venango", "pa-westmoreland", "pa-allegheny", "pa-washington", "pa-beaver"],
    // Not listed (farmland): the south-east and the Susquehanna lowlands (Philadelphia, Lancaster, York, Lebanon, Berks, Lehigh),
    // the Cumberland Valley, and the north-west plain (Erie, Crawford, Mercer, Lawrence, Butler). No dry.
  },
});
