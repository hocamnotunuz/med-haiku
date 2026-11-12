// National Railways pack: North Carolina.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/NC/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/NC/raw.
// North Carolina's 100 counties are 73 regions (merges in tools/build-map.js, STATES.NC).
NR.addPack({
  code: "NC",
  name: "North Carolina",
  // A game that starts here begins owning Wake (Raleigh, the biggest region), Durham (to the north-west)
  // and Johnston (to the south-east); Durham and Johnston both touch Wake. Raleigh and Durham are metro and
  // Clayton (Johnston) is farm, so the first track (Raleigh-Clayton) has riders.
  start: ["nc-wake", "nc-durham", "nc-johnston"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the
  // short code shown on passengers. pop = region population in thousands (2020 census). size = how
  // busy (1 to 5). level = which level unlocks it in Levels mode. Points are the Census points,
  // except where a comment says it was moved to a downtown. Every Census place is in
  // packs/NC/raw/places.json.
  stations: [
    // Level: The Triangle and the tobacco belt: Raleigh, Durham, Chapel Hill and the eastern Piedmont
    // Raleigh (467,867): downtown at the Capitol and Fayetteville Street (the Census point is the middle of the city limits, 3.5 mi north). Wake County 1,129k is the state's biggest region, size 4, like Denver, St. Louis and Kansas City (the cores of metros of 1.5 to 3 million; size 5 is for Atlanta, Miami, Houston and the like). The pack agent first chose 5.
    { id: "RAL", name: "Raleigh", county: "nc-wake", lat: 35.78, lon: -78.64, airport: "Raleigh-Durham International Airport", type: "metro", size: 4, pop: 1129, main: true, level: "triangle" },
    // Durham (283,662): downtown by the old tobacco district and the Durham Amtrak/Duke side (the Census point is 1 mi south). Durham 325k, size 3 (Greenville SC 526k and Charleston SC 408k are 3). 21 mi from Raleigh.
    { id: "DURH", name: "Durham", county: "nc-durham", lat: 35.99, lon: -78.9, type: "metro", size: 3, pop: 325, main: true, level: "triangle" },
    // Chapel Hill (62,270): downtown on Franklin Street at the University of North Carolina (the Census point is 2 mi north-east). Carrboro (21,291) is under 3 mi away, so it is not a town. Orange 149k, size 2.
    { id: "CPHL", name: "Chapel Hill", county: "nc-orange", lat: 35.91, lon: -79.06, type: "metro", size: 2, pop: 149, main: true, level: "triangle" },
    // Clayton (26,317): the biggest place, a Raleigh exurb on US-70 / I-40 (the seat Smithfield, 11,306, is a town). Typed farm (tobacco, cotton and soybean country) so the start's first track, Raleigh-Clayton, has riders. Johnston 216k, size 2.
    { id: "CLYN", name: "Clayton", county: "nc-johnston", lat: 35.66, lon: -78.45, type: "farm", size: 2, pop: 216, main: true, level: "triangle" },
    // Louisburg (3,055): the Franklin seat and the biggest place, on US-401 (Franklinton, 2,457, is a town). Franklin 69k.
    { id: "LSBN", name: "Louisburg", county: "nc-franklin", lat: 36.1, lon: -78.3, type: "farm", size: 1, pop: 69, main: true, level: "triangle" },
    // Oxford (8,789): the Granville seat on US-15/I-85 (Butner, 7,955, is a town; Creedmoor is under 4 mi from it). Granville 61k.
    { id: "OXFN", name: "Oxford", county: "nc-granville", lat: 36.32, lon: -78.59, type: "farm", size: 1, pop: 61, main: true, level: "triangle" },
    // Henderson (15,076): the Vance seat on I-85 and US-1 and the biggest place of the group; Warrenton is a town. Group 61k.
    { id: "HNDN", name: "Henderson", county: "nc-vance-warren", lat: 36.33, lon: -78.41, type: "farm", size: 1, pop: 61, main: true, level: "triangle" },
    // Roxboro (8,125): the Person seat on US-501 and the biggest place; Yanceyville (the Caswell seat) is a town. Group 62k.
    { id: "RXBR", name: "Roxboro", county: "nc-caswell-person", lat: 36.39, lon: -78.98, type: "farm", size: 1, pop: 62, main: true, level: "triangle" },
    // Siler City (7,713): the biggest place, on US-64 and the poultry belt in the west of the county; Pittsboro (the seat, 4,543) is a town. Chatham 76k.
    { id: "SLCY", name: "Siler City", county: "nc-chatham", lat: 35.73, lon: -79.46, type: "farm", size: 1, pop: 76, main: true, level: "triangle" },
    // Sanford (30,193): the Lee seat on US-1 and US-421, the brick-making town. Lee 63k.
    { id: "SNFN", name: "Sanford", county: "nc-lee", lat: 35.5, lon: -79.17, type: "farm", size: 1, pop: 63, main: true, level: "triangle" },
    // Dunn (8,453): the biggest place on I-95 and US-421 (Lillington is the seat, Angier a Raleigh exurb; both are towns). Harnett 134k.
    { id: "DUNN", name: "Dunn", county: "nc-harnett", lat: 35.31, lon: -78.61, type: "farm", size: 1, pop: 134, main: true, level: "triangle" },
    // Burlington (57,318): downtown (the Census point is 2 mi south-west), on I-40/I-85 and the Norfolk Southern main line between the Triangle and the Triad. Alamance 171k, size 2.
    { id: "BRLC", name: "Burlington", county: "nc-alamance", lat: 36.09, lon: -79.44, type: "metro", size: 2, pop: 171, main: true, level: "triangle" },
    // Rocky Mount (54,336): downtown on the Tar River and the CSX/Amtrak Carolinian line (the Census point is 2 mi north, in the city limits' middle; the city straddles Nash and Edgecombe). Nash 95k.
    { id: "RKMT", name: "Rocky Mount", county: "nc-nash", lat: 35.94, lon: -77.8, type: "metro", size: 2, pop: 95, main: true, level: "triangle" },
    // Wilson (47,869): downtown on US-301 and the CSX/Amtrak line, the 'tobacco capital' (the Census point is 1 mi north-east). Wilson 79k.
    { id: "WLSN", name: "Wilson", county: "nc-wilson", lat: 35.72, lon: -77.92, type: "farm", size: 1, pop: 79, main: true, level: "triangle" },
    // Goldsboro (33,657): the Wayne seat on US-70 and I-795, next to Seymour Johnson Air Force Base. Wayne 117k, size 2.
    { id: "GLDB", name: "Goldsboro", county: "nc-wayne", lat: 35.38, lon: -77.97, type: "farm", size: 2, pop: 117, main: true, level: "triangle" },
    // Tarboro (10,709): the Edgecombe seat on the Tar River and US-64 (Rocky Mount straddles the Nash line to the west). Edgecombe 49k.
    { id: "TRBR", name: "Tarboro", county: "nc-edgecombe", lat: 35.91, lon: -77.56, type: "farm", size: 1, pop: 49, main: true, level: "triangle" },
    // Roanoke Rapids (15,240): the biggest place, on I-95 and the Roanoke River (Weldon, the Lake Gaston side, 1,443, is a town). Halifax 49k.
    { id: "RNKR", name: "Roanoke Rapids", county: "nc-halifax", lat: 36.45, lon: -77.65, type: "farm", size: 1, pop: 49, main: true, level: "triangle" },
    // Level: The Piedmont: Charlotte, the Triad and the Catawba and Yadkin valleys
    // Greensboro (299,182): downtown at Elm and Market (the Census point is 2 mi north-west). Guilford 541k, size 3 (Greenville SC 526k is 3). High Point (114,161) is 13 mi away and a town. Piedmont Triad International (GSO) is in Guilford County.
    { id: "GSO", name: "Greensboro", county: "nc-guilford", lat: 36.07, lon: -79.79, airport: "Piedmont Triad International Airport", type: "metro", size: 3, pop: 541, main: true, level: "piedmont" },
    // Winston-Salem (249,558): downtown (the Census point is 1 mi west). Forsyth 383k, size 3. 27 mi from Greensboro.
    { id: "WSNC", name: "Winston-Salem", county: "nc-forsyth", lat: 36.1, lon: -80.24, type: "metro", size: 3, pop: 383, main: true, level: "piedmont" },
    // Asheboro (27,180): the Randolph seat on US-64 and US-220, the biggest place (Archdale, 11,890, is a High Point suburb and a town). Randolph 144k.
    { id: "ASBR", name: "Asheboro", county: "nc-randolph", lat: 35.72, lon: -79.81, type: "farm", size: 2, pop: 144, main: true, level: "piedmont" },
    // Eden (15,409): the biggest place, on the Dan River at the Virginia line (US-29/US-311); Reidsville (14,585, 11 mi south on US-29 and the Norfolk Southern line) is a town. Rockingham 91k.
    { id: "EDEC", name: "Eden", county: "nc-rockingham", lat: 36.5, lon: -79.74, type: "farm", size: 1, pop: 91, main: true, level: "piedmont" },
    // Thomasville (27,169): the biggest place, on I-85 and the Norfolk Southern line; Lexington (19,627, the seat and Lexington barbecue town) is a town 10 mi south-west. Davidson 169k.
    { id: "THMN", name: "Thomasville", county: "nc-davidson", lat: 35.88, lon: -80.08, type: "farm", size: 2, pop: 169, main: true, level: "piedmont" },
    // Mocksville (5,903): the biggest place, on I-40 and US-601 (Yadkinville and Bermuda Run are towns). Group 80k.
    { id: "MCKV", name: "Mocksville", county: "nc-davie-yadkin", lat: 35.9, lon: -80.56, type: "farm", size: 1, pop: 80, main: true, level: "piedmont" },
    // King (7,203): the biggest place, on US-52 and the Winston-Salem side (Walnut Cove is a town; the seat Danbury, 186, is tiny). Stokes 45k, kept alone: every neighbour is 50k or more.
    { id: "KINN", name: "King", county: "nc-stokes", lat: 36.27, lon: -80.36, type: "farm", size: 1, pop: 45, main: true, level: "piedmont" },
    // Mount Airy (10,673): the biggest place, on US-52 at the Virginia line, the 'Mayberry' town of Andy Griffith's boyhood. Surry 71k.
    { id: "MTAR", name: "Mount Airy", county: "nc-surry", lat: 36.51, lon: -80.61, type: "farm", size: 1, pop: 71, main: true, level: "piedmont" },
    // Troy (2,858): the Montgomery seat in the Uwharrie hills (Biscoe is a town). Montgomery 26k, kept alone: every neighbour is 50k or more except Richmond, which is in the US-74 group.
    { id: "TRON", name: "Troy", county: "nc-montgomery", lat: 35.36, lon: -79.89, type: "farm", size: 1, pop: 26, main: true, level: "piedmont" },
    // Albemarle (16,420): the Stanly seat on NC-24/27 and US-52 near the Yadkin and Lake Tillery. Stanly 63k.
    { id: "ALBC", name: "Albemarle", county: "nc-stanly", lat: 35.36, lon: -80.19, type: "farm", size: 1, pop: 63, main: true, level: "piedmont" },
    // Salisbury (35,555): downtown on the Norfolk Southern/Amtrak line and I-85 (the Census point is 1 mi north-west). Rowan 147k.
    { id: "SALS", name: "Salisbury", county: "nc-rowan", lat: 35.67, lon: -80.47, type: "farm", size: 2, pop: 147, main: true, level: "piedmont" },
    // Concord (105,307): downtown (the Census point is 3.5 mi west, near the Speedway side); Kannapolis (53,128) is a town 7 mi north. Cabarrus 226k.
    { id: "CNRD", name: "Concord", county: "nc-cabarrus", lat: 35.41, lon: -80.58, type: "metro", size: 2, pop: 226, main: true, level: "piedmont" },
    // Charlotte (874,629): Uptown at Trade and Tryon (the Census point 35.21,-80.83 is the middle of the city limits, 2 mi south). Mecklenburg 1,116k, size 4, like Denver and St. Louis (metros of about 2.8 million). The pack agent first chose 5.
    { id: "CLTE", name: "Charlotte", county: "nc-mecklenburg", lat: 35.23, lon: -80.84, airport: "Charlotte Douglas International Airport", type: "metro", size: 4, pop: 1116, main: true, level: "piedmont" },
    // Indian Trail (40,089): the biggest place, a Charlotte suburb on US-74; Monroe (34,619, the seat) is a town 7 mi south-east. Union 238k.
    { id: "INTR", name: "Indian Trail", county: "nc-union", lat: 35.07, lon: -80.65, type: "metro", size: 2, pop: 238, main: true, level: "piedmont" },
    // Gastonia (80,409): downtown on I-85 and the Norfolk Southern line (the Census point is 1 mi south). Gaston 228k.
    { id: "GSTN", name: "Gastonia", county: "nc-gaston", lat: 35.26, lon: -81.19, type: "metro", size: 2, pop: 228, main: true, level: "piedmont" },
    // Lincolnton (11,091): the Lincoln seat and biggest place, on NC-150 and NC-27 between Lake Norman and the South Fork Catawba. Lincoln 87k.
    { id: "LCLN", name: "Lincolnton", county: "nc-lincoln", lat: 35.48, lon: -81.24, type: "farm", size: 1, pop: 87, main: true, level: "piedmont" },
    // Shelby (21,917): the Cleveland seat on US-74 and the Broad River side. Cleveland 100k.
    { id: "SHLN", name: "Shelby", county: "nc-cleveland", lat: 35.29, lon: -81.55, type: "farm", size: 2, pop: 100, main: true, level: "piedmont" },
    // Mooresville (50,282): the biggest place, on Lake Norman and I-77 (a Charlotte suburb, 22 mi from Uptown); Statesville (28,461, the seat at the I-40/I-77 crossing) is a town 18 mi north. Iredell 187k.
    { id: "MRSC", name: "Mooresville", county: "nc-iredell", lat: 35.58, lon: -80.83, type: "metro", size: 2, pop: 187, main: true, level: "piedmont" },
    // Hickory (43,558): downtown on I-40 and the Catawba Valley's furniture belt (the Census point is 1 mi north-east). Catawba 161k.
    { id: "HCKR", name: "Hickory", county: "nc-catawba", lat: 35.73, lon: -81.34, type: "farm", size: 2, pop: 161, main: true, level: "piedmont" },
    // Taylorsville (2,317): the only real place, the Alexander seat on NC-16. Alexander 36k, kept alone: Caldwell, Catawba, Iredell and Wilkes all have 50k or more.
    { id: "TYLN", name: "Taylorsville", county: "nc-alexander", lat: 35.92, lon: -81.18, type: "farm", size: 1, pop: 36, main: true, level: "piedmont" },
    // Lenoir (18,362): the Caldwell seat in the Blue Ridge foothills on US-321 and the Yadkin Valley railway; Granite Falls is a town. Caldwell 81k.
    { id: "LNR", name: "Lenoir", county: "nc-caldwell", lat: 35.91, lon: -81.52, type: "farm", size: 1, pop: 81, main: true, level: "piedmont" },
    // Laurinburg (14,976): the biggest place of the three (Rockingham 9,246 is the Richmond seat; Wadesboro the Anson seat; both are towns on US-74). Group 99k, an exception to the 3-county rule: it is already a full group.
    { id: "LRBG", name: "Laurinburg", county: "nc-anson-richmond-scotland", lat: 34.76, lon: -79.48, type: "farm", size: 1, pop: 99, main: true, level: "piedmont" },
    // Pinehurst (17,579): the biggest place and the famous golf resort (Pinehurst No. 2, scenic); Southern Pines (15,587, 4.6 mi east at downtown) is a town. Moore 100k.
    { id: "PNHR", name: "Pinehurst", county: "nc-moore", lat: 35.2, lon: -79.47, scenic: true, type: "farm", size: 2, pop: 100, main: true, level: "piedmont" },
    // Level: The Blue Ridge: Asheville and the western mountains
    // Asheville (94,763): downtown at Pack Square (the Census point is 1.5 mi south-west). Buncombe 269k, size 3 (Clayton County GA 299k and Pensacola's Escambia are 3; Asheville is the Blue Ridge's metro). Asheville Regional (AVL) is in Henderson County at the Buncombe line, listed here as the region's airport.
    { id: "ASHE", name: "Asheville", county: "nc-buncombe", lat: 35.6, lon: -82.55, airport: "Asheville Regional Airport", type: "mountain", size: 3, pop: 269, main: true, level: "mountains" },
    // Hendersonville (15,155): the Henderson seat on I-26 and US-64, the apple country at the foot of the Saluda Grade. Henderson 116k.
    { id: "HNVL", name: "Hendersonville", county: "nc-henderson", lat: 35.32, lon: -82.46, type: "mountain", size: 2, pop: 116, main: true, level: "mountains" },
    // Waynesville (10,144): the Haywood seat in the Pigeon River valley on US-23/74 and the Blue Ridge Parkway (Canton, the paper-mill town, is a town). Haywood 62k.
    { id: "WYNS", name: "Waynesville", county: "nc-haywood", lat: 35.49, lon: -83, type: "mountain", size: 1, pop: 62, main: true, level: "mountains" },
    // Brevard (7,759): the Transylvania seat on US-64/276, the Land of Waterfalls at the Pisgah National Forest. Transylvania 33k, kept alone: Henderson and Haywood are 50k or more and Jackson lies over the Balsam ridge.
    { id: "BRVD", name: "Brevard", county: "nc-transylvania", lat: 35.25, lon: -82.73, type: "mountain", size: 1, pop: 33, main: true, level: "mountains" },
    // Forest City (7,376): the biggest place, on US-74/221 and the Rutherford side (Rutherfordton, the seat, and Tryon, the Polk town, are towns). Group 84k, an exception: Polk (19k) has only Henderson (116k) and Rutherford as neighbours in the state.
    { id: "FRCN", name: "Forest City", county: "nc-polk-rutherford", lat: 35.33, lon: -81.87, type: "farm", size: 1, pop: 84, main: true, level: "mountains" },
    // Morganton (17,461): downtown, the Burke seat on I-40 and the Norfolk Southern line (the Census point is 1 mi south). Burke 88k.
    { id: "MRGC", name: "Morganton", county: "nc-burke", lat: 35.75, lon: -81.69, type: "farm", size: 1, pop: 88, main: true, level: "mountains" },
    // Marion (7,715): the biggest place, the McDowell seat on I-40 and US-221 at the foot of the Blue Ridge (Spruce Pine and Banner Elk are towns). Group 77k.
    { id: "MROC", name: "Marion", county: "nc-avery-mcdowell-mitchell", lat: 35.68, lon: -82, type: "mountain", size: 1, pop: 77, main: true, level: "mountains" },
    // Mars Hill (2,010): the biggest place of the two counties, on US-19/23 and I-26's Asheville side; Burnsville (the Yancey seat, 1,615, 18 mi east) and Marshall are towns, Mount Mitchell scenic. Chosen by population as the rule says. Group 40k.
    { id: "MRSS", name: "Mars Hill", county: "nc-madison-yancey", lat: 35.83, lon: -82.55, type: "mountain", size: 1, pop: 40, main: true, level: "mountains" },
    // Boone (19,115): downtown at King Street and Appalachian State University (the Census point is 1 mi south-east). Watauga 54k.
    { id: "BOOC", name: "Boone", county: "nc-watauga", lat: 36.22, lon: -81.67, type: "mountain", size: 1, pop: 54, main: true, level: "mountains" },
    // North Wilkesboro (4,391): the biggest place on US-421 and the Yadkin River (Wilkesboro, 2 mi west, is the seat and not a separate town; MerleFest). Wilkes 66k.
    { id: "NWKB", name: "North Wilkesboro", county: "nc-wilkes", lat: 36.17, lon: -81.14, type: "farm", size: 1, pop: 66, main: true, level: "mountains" },
    // Sparta (1,831): the biggest place, the Alleghany seat on US-21 (Jefferson, the Ashe seat, is a town). Group 37k.
    { id: "SPRC", name: "Sparta", county: "nc-alleghany-ashe", lat: 36.5, lon: -81.12, type: "mountain", size: 1, pop: 37, main: true, level: "mountains" },
    // Franklin (4,175): the biggest place, the Macon seat on US-441 and the Little Tennessee; Murphy, Andrews and Hayesville are towns on US-64/19. Group 77k.
    { id: "FRKC", name: "Franklin", county: "nc-cherokee-clay-macon", lat: 35.18, lon: -83.38, type: "mountain", size: 1, pop: 77, main: true, level: "mountains" },
    // Sylva (2,579): the biggest place, the Jackson seat on US-23/74 and the Tuckasegee; Bryson City and Robbinsville are towns. Group 65k.
    { id: "SYLN", name: "Sylva", county: "nc-graham-jackson-swain", lat: 35.38, lon: -83.22, type: "mountain", size: 1, pop: 65, main: true, level: "mountains" },
    // Level: The Coastal Plain and the coast: Fayetteville, Wilmington and the Outer Banks
    // Fayetteville (208,473): downtown on Hay Street and the Cape Fear River (the Census point is 5 mi west); next to Fort Liberty (Bragg). Cumberland 335k, size 3 (Spartanburg SC 328k is 3).
    { id: "FAYT", name: "Fayetteville", county: "nc-cumberland", lat: 35.05, lon: -78.88, type: "metro", size: 3, pop: 335, main: true, level: "coast" },
    // Lumberton (19,295): the Robeson seat on I-95 and the Lumber River. Robeson 117k.
    { id: "LMBR", name: "Lumberton", county: "nc-robeson", lat: 34.63, lon: -79.02, type: "farm", size: 2, pop: 117, main: true, level: "coast" },
    // Raeford (4,558): the Hoke seat and only real place, on US-401 at Fort Liberty. Hoke 52k.
    { id: "RFRD", name: "Raeford", county: "nc-hoke", lat: 34.98, lon: -79.23, type: "farm", size: 1, pop: 52, main: true, level: "coast" },
    // Clinton (8,379): the Sampson seat on US-421 and I-40. Sampson 59k.
    { id: "CLNC", name: "Clinton", county: "nc-sampson", lat: 35, lon: -78.33, type: "farm", size: 1, pop: 59, main: true, level: "coast" },
    // Wallace (3,417): the biggest place, on I-40 and US-117 (Warsaw is a town). Duplin 49k, kept alone: 1k under the line, the hog and turkey belt.
    { id: "WLLC", name: "Wallace", county: "nc-duplin", lat: 34.74, lon: -77.99, type: "farm", size: 1, pop: 49, main: true, level: "coast" },
    // Whiteville (4,763): the Columbus seat on US-74/76 and the biggest place (Elizabethtown, the Bladen seat, and Tabor City are towns). Group 80k.
    { id: "WHVL", name: "Whiteville", county: "nc-bladen-columbus", lat: 34.33, lon: -78.7, type: "farm", size: 1, pop: 80, main: true, level: "coast" },
    // Leland (23,358): the biggest place, on US-17 across the Cape Fear from Wilmington (Southport and Shallotte are towns). Brunswick 137k.
    { id: "LLNN", name: "Leland", county: "nc-brunswick", lat: 34.22, lon: -78.04, type: "coast", size: 2, pop: 137, main: true, level: "coast" },
    // Burgaw (3,083): the Pender seat at the centre, on US-117, I-40 and the CSX line, chosen over Surf City (3,865), which is on Topsail Island across the Intracoastal Waterway. Pender 60k.
    { id: "BRGW", name: "Burgaw", county: "nc-pender", lat: 34.55, lon: -77.92, type: "farm", size: 1, pop: 60, main: true, level: "coast" },
    // Wilmington (115,460): downtown on the Cape Fear riverfront (the Census point is 4 mi south-east). New Hanover 226k, size 2. Port of Wilmington is a North Carolina State Port (container terminals); Wilmington International (ILM) is in the county.
    { id: "WLMG", name: "Wilmington", county: "nc-new-hanover", lat: 34.24, lon: -77.95, port: "Port of Wilmington", airport: "Wilmington International Airport", type: "coast", size: 2, pop: 226, main: true, level: "coast" },
    // Jacksonville (72,732): downtown on the New River next to Camp Lejeune (the Census point is 2 mi south-east). Onslow 205k.
    { id: "JAXN", name: "Jacksonville", county: "nc-onslow", lat: 34.75, lon: -77.43, type: "metro", size: 2, pop: 205, main: true, level: "coast" },
    // Morehead City (9,562): the biggest place and a state port (the deep-water Port of Morehead City, bulk and breakbulk cargo); Beaufort is a town. Carteret 68k.
    { id: "MRHD", name: "Morehead City", county: "nc-carteret", lat: 34.73, lon: -76.74, port: "Port of Morehead City", type: "coast", size: 1, pop: 68, main: true, level: "coast" },
    // New Bern (31,287): downtown at the Neuse and Trent rivers (the Census point is 2 mi south-west). Craven 101k.
    { id: "NEWB", name: "New Bern", county: "nc-craven", lat: 35.11, lon: -77.04, type: "coast", size: 2, pop: 101, main: true, level: "coast" },
    // Greenville (87,640): downtown at East Carolina University (the Census point is 1 mi south). Pitt 170k.
    { id: "GRNC", name: "Greenville", county: "nc-pitt", lat: 35.61, lon: -77.37, type: "metro", size: 2, pop: 170, main: true, level: "coast" },
    // Kinston (19,805): the biggest place, the Lenoir seat on the Neuse River and US-70; Snow Hill and La Grange are towns. Group 85k.
    { id: "KNST", name: "Kinston", county: "nc-greene-jones-lenoir", lat: 35.28, lon: -77.59, type: "farm", size: 1, pop: 85, main: true, level: "coast" },
    // Washington (9,887): the Beaufort seat on the Pamlico River at the mouth of the Tar ('Little Washington', 9,887). Group 57k.
    { id: "WASN", name: "Washington", county: "nc-beaufort-pamlico", lat: 35.56, lon: -77.05, type: "coast", size: 1, pop: 57, main: true, level: "coast" },
    // Williamston (5,248): the biggest place on the Roanoke River and US-17/64; Plymouth and Robersonville are towns. Group 36k.
    { id: "WLMN", name: "Williamston", county: "nc-martin-tyrrell-washington", lat: 35.85, lon: -77.07, type: "farm", size: 1, pop: 36, main: true, level: "coast" },
    // Ahoskie (4,892): the biggest place, on US-13 and US-158 in the Roanoke-Chowan country. Group 57k.
    { id: "AHSK", name: "Ahoskie", county: "nc-bertie-hertford-northampton", lat: 36.28, lon: -76.99, type: "farm", size: 1, pop: 57, main: true, level: "coast" },
    // Edenton (4,457): the biggest place and the Chowan seat on Albemarle Sound (Hertford and Gatesville are towns). Group 37k.
    { id: "EDNT", name: "Edenton", county: "nc-chowan-gates-perquimans", lat: 36.06, lon: -76.6, type: "coast", size: 1, pop: 37, main: true, level: "coast" },
    // Elizabeth City (18,644): downtown on the Pasquotank River (the Census point is 1 mi south-west). Group 79k.
    { id: "ELZC", name: "Elizabeth City", county: "nc-camden-currituck-pasquotank", lat: 36.3, lon: -76.25, type: "coast", size: 1, pop: 79, main: true, level: "coast" },
    // Kill Devil Hills (7,644): the biggest place, on US-158 / NC-12 in the middle of the Outer Banks next to the Wright Brothers National Memorial (scenic); Manteo, the Dare seat on Roanoke Island, 8 mi south, is a town. Group 42k.
    { id: "KDH", name: "Kill Devil Hills", county: "nc-dare-hyde", lat: 36.02, lon: -75.67, scenic: true, type: "coast", size: 1, pop: 42, main: true, level: "coast" },
  ],
  // Towns: about 1.5 per region, the next-biggest real places and a few well-known scenic ones
  // (scenic: true; sources in NOTES.md).
  towns: [
    { id: "CARY", name: "Cary", county: "nc-wake", lat: 35.78, lon: -78.82, type: "metro", size: 2 },
    { id: "WKFR", name: "Wake Forest", county: "nc-wake", lat: 35.96, lon: -78.51, type: "metro", size: 1 },
    { id: "FQVR", name: "Fuquay-Varina", county: "nc-wake", lat: 35.6, lon: -78.78, type: "farm", size: 1 },
    { id: "ZBLC", name: "Zebulon", county: "nc-wake", lat: 35.83, lon: -78.31, type: "farm", size: 1 },
    { id: "HLSN", name: "Hillsborough", county: "nc-orange", lat: 36.08, lon: -79.1, type: "farm", size: 1 },
    { id: "SMTS", name: "Smithfield", county: "nc-johnston", lat: 35.52, lon: -78.35, type: "farm", size: 1 },
    { id: "BNSC", name: "Benson", county: "nc-johnston", lat: 35.39, lon: -78.54, type: "farm", size: 1 },
    { id: "FRKE", name: "Franklinton", county: "nc-franklin", lat: 36.1, lon: -78.46, type: "farm", size: 1 },
    { id: "BTNR", name: "Butner", county: "nc-granville", lat: 36.13, lon: -78.74, type: "farm", size: 1 },
    { id: "WRNT", name: "Warrenton", county: "nc-vance-warren", lat: 36.4, lon: -78.16, type: "farm", size: 1 },
    { id: "YNCV", name: "Yanceyville", county: "nc-caswell-person", lat: 36.41, lon: -79.33, type: "farm", size: 1 },
    { id: "PTBR", name: "Pittsboro", county: "nc-chatham", lat: 35.73, lon: -79.17, type: "farm", size: 1 },
    { id: "BWAY", name: "Broadway", county: "nc-lee", lat: 35.46, lon: -79.06, type: "farm", size: 1 },
    { id: "LLTN", name: "Lillington", county: "nc-harnett", lat: 35.41, lon: -78.81, type: "farm", size: 1 },
    { id: "ANGR", name: "Angier", county: "nc-harnett", lat: 35.51, lon: -78.74, type: "farm", size: 1 },
    { id: "MBNE", name: "Mebane", county: "nc-alamance", lat: 36.08, lon: -79.28, type: "farm", size: 1 },
    { id: "NSHN", name: "Nashville", county: "nc-nash", lat: 35.97, lon: -77.96, type: "farm", size: 1 },
    { id: "ELMC", name: "Elm City", county: "nc-wilson", lat: 35.8, lon: -77.86, type: "farm", size: 1 },
    { id: "MTOL", name: "Mount Olive", county: "nc-wayne", lat: 35.2, lon: -78.07, type: "farm", size: 1 },
    { id: "FRMC", name: "Fremont", county: "nc-wayne", lat: 35.54, lon: -77.98, type: "farm", size: 1 },
    { id: "PNTP", name: "Pinetops", county: "nc-edgecombe", lat: 35.79, lon: -77.64, type: "farm", size: 1 },
    { id: "ENFD", name: "Enfield", county: "nc-halifax", lat: 36.18, lon: -77.67, type: "farm", size: 1 },
    { id: "SCNK", name: "Scotland Neck", county: "nc-halifax", lat: 36.13, lon: -77.42, type: "farm", size: 1 },
    { id: "HGPT", name: "High Point", county: "nc-guilford", lat: 35.99, lon: -79.99, type: "metro", size: 2 },
    { id: "SMFD", name: "Summerfield", county: "nc-guilford", lat: 36.2, lon: -79.9, type: "farm", size: 1 },
    { id: "KRNV", name: "Kernersville", county: "nc-forsyth", lat: 36.11, lon: -80.08, type: "metro", size: 1 },
    { id: "CLMC", name: "Clemmons", county: "nc-forsyth", lat: 36.03, lon: -80.39, type: "farm", size: 1 },
    { id: "ACDL", name: "Archdale", county: "nc-randolph", lat: 35.9, lon: -79.96, type: "farm", size: 1 },
    { id: "RDVL", name: "Reidsville", county: "nc-rockingham", lat: 36.34, lon: -79.67, type: "farm", size: 1 },
    { id: "LXNC", name: "Lexington", county: "nc-davidson", lat: 35.82, lon: -80.25, type: "farm", size: 1 },
    { id: "YDKV", name: "Yadkinville", county: "nc-davie-yadkin", lat: 36.13, lon: -80.66, type: "farm", size: 1 },
    { id: "WCOV", name: "Walnut Cove", county: "nc-stokes", lat: 36.29, lon: -80.14, type: "farm", size: 1 },
    { id: "HGRK", name: "Hanging Rock State Park", county: "nc-stokes", lat: 36.39, lon: -80.26, scenic: true, type: "mountain", size: 1 },
    { id: "ELKN", name: "Elkin", county: "nc-surry", lat: 36.26, lon: -80.85, type: "farm", size: 1 },
    { id: "DBSN", name: "Dobson", county: "nc-surry", lat: 36.39, lon: -80.72, type: "farm", size: 1 },
    { id: "PLTS", name: "Pilot Mountain State Park", county: "nc-surry", lat: 36.34, lon: -80.47, scenic: true, type: "mountain", size: 1 },
    { id: "BSCO", name: "Biscoe", county: "nc-montgomery", lat: 35.36, lon: -79.78, type: "farm", size: 1 },
    { id: "NRWN", name: "Norwood", county: "nc-stanly", lat: 35.23, lon: -80.11, type: "farm", size: 1 },
    { id: "CHGV", name: "China Grove", county: "nc-rowan", lat: 35.57, lon: -80.57, type: "farm", size: 1 },
    { id: "KNPL", name: "Kannapolis", county: "nc-cabarrus", lat: 35.48, lon: -80.65, type: "metro", size: 2 },
    { id: "HRSB", name: "Harrisburg", county: "nc-cabarrus", lat: 35.31, lon: -80.65, type: "farm", size: 1 },
    { id: "HNTC", name: "Huntersville", county: "nc-mecklenburg", lat: 35.41, lon: -80.87, type: "metro", size: 2 },
    { id: "MTTH", name: "Matthews", county: "nc-mecklenburg", lat: 35.12, lon: -80.72, type: "metro", size: 1 },
    { id: "MNRN", name: "Monroe", county: "nc-union", lat: 35, lon: -80.56, type: "farm", size: 1 },
    { id: "WXHW", name: "Waxhaw", county: "nc-union", lat: 34.94, lon: -80.74, type: "farm", size: 1 },
    { id: "MTHL", name: "Mount Holly", county: "nc-gaston", lat: 35.31, lon: -81.01, type: "farm", size: 1 },
    { id: "BLMT", name: "Belmont", county: "nc-gaston", lat: 35.22, lon: -81.04, type: "farm", size: 1 },
    { id: "KGMT", name: "Kings Mountain", county: "nc-cleveland", lat: 35.24, lon: -81.35, type: "farm", size: 1 },
    { id: "BLSN", name: "Boiling Springs", county: "nc-cleveland", lat: 35.25, lon: -81.66, type: "farm", size: 1 },
    { id: "STVC", name: "Statesville", county: "nc-iredell", lat: 35.79, lon: -80.87, type: "farm", size: 1 },
    { id: "TRTM", name: "Troutman", county: "nc-iredell", lat: 35.7, lon: -80.89, type: "farm", size: 1 },
    { id: "NWTC", name: "Newton", county: "nc-catawba", lat: 35.66, lon: -81.23, type: "farm", size: 1 },
    { id: "GRFC", name: "Granite Falls", county: "nc-caldwell", lat: 35.8, lon: -81.42, type: "farm", size: 1 },
    { id: "RKNC", name: "Rockingham", county: "nc-anson-richmond-scotland", lat: 34.94, lon: -79.76, type: "farm", size: 1 },
    { id: "WDSB", name: "Wadesboro", county: "nc-anson-richmond-scotland", lat: 34.96, lon: -80.07, type: "farm", size: 1 },
    { id: "SPNP", name: "Southern Pines", county: "nc-moore", lat: 35.18, lon: -79.39, type: "farm", size: 1 },
    { id: "BLMS", name: "Black Mountain", county: "nc-buncombe", lat: 35.62, lon: -82.33, type: "mountain", size: 1 },
    { id: "BLTC", name: "Biltmore Estate", county: "nc-buncombe", lat: 35.54, lon: -82.54, scenic: true, type: "mountain", size: 1 },
    { id: "CRGG", name: "Blue Ridge Parkway (Craggy Gardens)", county: "nc-buncombe", lat: 35.7, lon: -82.38, scenic: true, type: "mountain", size: 1 },
    { id: "FLCH", name: "Fletcher", county: "nc-henderson", lat: 35.43, lon: -82.51, type: "mountain", size: 1 },
    { id: "CNTS", name: "Canton", county: "nc-haywood", lat: 35.54, lon: -82.85, type: "mountain", size: 1 },
    { id: "RSMN", name: "Rosman", county: "nc-transylvania", lat: 35.15, lon: -82.82, type: "mountain", size: 1 },
    { id: "TRYN", name: "Tryon", county: "nc-polk-rutherford", lat: 35.21, lon: -82.24, type: "mountain", size: 1 },
    { id: "RTHF", name: "Rutherfordton", county: "nc-polk-rutherford", lat: 35.36, lon: -81.96, type: "farm", size: 1 },
    { id: "CHRN", name: "Chimney Rock State Park", county: "nc-polk-rutherford", lat: 35.44, lon: -82.25, scenic: true, type: "mountain", size: 1 },
    { id: "VLDN", name: "Valdese", county: "nc-burke", lat: 35.76, lon: -81.57, type: "farm", size: 1 },
    { id: "SPNE", name: "Spruce Pine", county: "nc-avery-mcdowell-mitchell", lat: 35.91, lon: -82.07, type: "mountain", size: 1 },
    { id: "BNKE", name: "Banner Elk", county: "nc-avery-mcdowell-mitchell", lat: 36.16, lon: -81.87, type: "mountain", size: 1 },
    { id: "OLDF", name: "Old Fort", county: "nc-avery-mcdowell-mitchell", lat: 35.63, lon: -82.18, type: "mountain", size: 1 },
    { id: "GFMT", name: "Grandfather Mountain", county: "nc-avery-mcdowell-mitchell", lat: 36.1, lon: -81.83, scenic: true, type: "mountain", size: 1 },
    { id: "BRNN", name: "Burnsville", county: "nc-madison-yancey", lat: 35.92, lon: -82.3, type: "mountain", size: 1 },
    { id: "MRSE", name: "Marshall", county: "nc-madison-yancey", lat: 35.8, lon: -82.68, type: "mountain", size: 1 },
    { id: "MMIT", name: "Mount Mitchell State Park", county: "nc-madison-yancey", lat: 35.76, lon: -82.27, scenic: true, type: "mountain", size: 1 },
    { id: "BLRK", name: "The Blowing Rock", county: "nc-watauga", lat: 36.13, lon: -81.67, scenic: true, type: "mountain", size: 1 },
    { id: "RNDA", name: "Ronda", county: "nc-wilkes", lat: 36.22, lon: -80.94, type: "farm", size: 1 },
    { id: "JFSC", name: "Jefferson", county: "nc-alleghany-ashe", lat: 36.42, lon: -81.47, type: "mountain", size: 1 },
    { id: "MRPN", name: "Murphy", county: "nc-cherokee-clay-macon", lat: 35.09, lon: -84.02, type: "mountain", size: 1 },
    { id: "NDRN", name: "Andrews", county: "nc-cherokee-clay-macon", lat: 35.2, lon: -83.83, type: "mountain", size: 1 },
    { id: "HYSV", name: "Hayesville", county: "nc-cherokee-clay-macon", lat: 35.05, lon: -83.82, type: "mountain", size: 1 },
    { id: "HGLD", name: "Highlands", county: "nc-cherokee-clay-macon", lat: 35.05, lon: -83.2, type: "mountain", size: 1 },
    { id: "BRSC", name: "Bryson City", county: "nc-graham-jackson-swain", lat: 35.43, lon: -83.45, type: "mountain", size: 1 },
    { id: "RBBV", name: "Robbinsville", county: "nc-graham-jackson-swain", lat: 35.32, lon: -83.81, type: "mountain", size: 1 },
    { id: "GSMT", name: "Great Smoky Mountains National Park (Cherokee)", county: "nc-graham-jackson-swain", lat: 35.51, lon: -83.31, scenic: true, type: "mountain", size: 1 },
    { id: "HPML", name: "Hope Mills", county: "nc-cumberland", lat: 34.97, lon: -78.96, type: "metro", size: 1 },
    { id: "SPLN", name: "Spring Lake", county: "nc-cumberland", lat: 35.18, lon: -78.99, type: "farm", size: 1 },
    { id: "PMBK", name: "Pembroke", county: "nc-robeson", lat: 34.68, lon: -79.19, type: "farm", size: 1 },
    { id: "RDSP", name: "Red Springs", county: "nc-robeson", lat: 34.81, lon: -79.18, type: "farm", size: 1 },
    { id: "RSBR", name: "Roseboro", county: "nc-sampson", lat: 34.96, lon: -78.51, type: "farm", size: 1 },
    { id: "WRSN", name: "Warsaw", county: "nc-duplin", lat: 35, lon: -78.09, type: "farm", size: 1 },
    { id: "ELZT", name: "Elizabethtown", county: "nc-bladen-columbus", lat: 34.62, lon: -78.61, type: "farm", size: 1 },
    { id: "TBRC", name: "Tabor City", county: "nc-bladen-columbus", lat: 34.15, lon: -78.87, type: "farm", size: 1 },
    { id: "STHP", name: "Southport", county: "nc-brunswick", lat: 33.93, lon: -78.01, type: "coast", size: 1 },
    { id: "SHLT", name: "Shallotte", county: "nc-brunswick", lat: 33.98, lon: -78.38, type: "coast", size: 1 },
    { id: "SFCY", name: "Surf City", county: "nc-pender", lat: 34.44, lon: -77.53, type: "coast", size: 1 },
    { id: "CRLB", name: "Carolina Beach", county: "nc-new-hanover", lat: 34.04, lon: -77.9, type: "coast", size: 1 },
    { id: "WRBH", name: "Wrightsville Beach", county: "nc-new-hanover", lat: 34.21, lon: -77.8, type: "coast", size: 1 },
    { id: "SWBR", name: "Swansboro", county: "nc-onslow", lat: 34.69, lon: -77.13, type: "coast", size: 1 },
    { id: "BFNC", name: "Beaufort", county: "nc-carteret", lat: 34.72, lon: -76.65, type: "coast", size: 1 },
    { id: "NWPN", name: "Newport", county: "nc-carteret", lat: 34.77, lon: -76.88, type: "farm", size: 1 },
    { id: "EMRL", name: "Emerald Isle", county: "nc-carteret", lat: 34.66, lon: -77.03, type: "coast", size: 1 },
    { id: "CPLK", name: "Cape Lookout National Seashore", county: "nc-carteret", lat: 34.62, lon: -76.54, scenic: true, type: "coast", size: 1 },
    { id: "HVLK", name: "Havelock", county: "nc-craven", lat: 34.91, lon: -76.9, type: "farm", size: 1 },
    { id: "WNTV", name: "Winterville", county: "nc-pitt", lat: 35.53, lon: -77.4, type: "farm", size: 1 },
    { id: "FRMV", name: "Farmville", county: "nc-pitt", lat: 35.6, lon: -77.59, type: "farm", size: 1 },
    { id: "SNHL", name: "Snow Hill", county: "nc-greene-jones-lenoir", lat: 35.45, lon: -77.68, type: "farm", size: 1 },
    { id: "LAGN", name: "La Grange", county: "nc-greene-jones-lenoir", lat: 35.31, lon: -77.79, type: "farm", size: 1 },
    { id: "MYSN", name: "Maysville", county: "nc-greene-jones-lenoir", lat: 34.91, lon: -77.23, type: "farm", size: 1 },
    { id: "BLHV", name: "Belhaven", county: "nc-beaufort-pamlico", lat: 35.54, lon: -76.62, type: "coast", size: 1 },
    { id: "BYBR", name: "Bayboro", county: "nc-beaufort-pamlico", lat: 35.15, lon: -76.77, type: "coast", size: 1 },
    { id: "ORNT", name: "Oriental", county: "nc-beaufort-pamlico", lat: 35.03, lon: -76.68, type: "coast", size: 1 },
    { id: "PLYN", name: "Plymouth", county: "nc-martin-tyrrell-washington", lat: 35.86, lon: -76.75, type: "farm", size: 1 },
    { id: "RBSV", name: "Robersonville", county: "nc-martin-tyrrell-washington", lat: 35.82, lon: -77.25, type: "farm", size: 1 },
    { id: "CLME", name: "Columbia", county: "nc-martin-tyrrell-washington", lat: 35.92, lon: -76.25, type: "farm", size: 1 },
    { id: "WNDS", name: "Windsor", county: "nc-bertie-hertford-northampton", lat: 35.99, lon: -76.94, type: "farm", size: 1 },
    { id: "MRFS", name: "Murfreesboro", county: "nc-bertie-hertford-northampton", lat: 36.44, lon: -77.1, type: "farm", size: 1 },
    { id: "HRTF", name: "Hertford", county: "nc-chowan-gates-perquimans", lat: 36.18, lon: -76.47, type: "coast", size: 1 },
    { id: "GTSV", name: "Gatesville", county: "nc-chowan-gates-perquimans", lat: 36.41, lon: -76.75, type: "farm", size: 1 },
    { id: "CMDC", name: "Camden", county: "nc-camden-currituck-pasquotank", lat: 36.33, lon: -76.17, type: "farm", size: 1 },
    { id: "CNJK", name: "Coinjock", county: "nc-camden-currituck-pasquotank", lat: 36.35, lon: -75.95, type: "coast", size: 1 },
    { id: "CRLC", name: "Currituck Beach Lighthouse (Corolla)", county: "nc-camden-currituck-pasquotank", lat: 36.38, lon: -75.83, scenic: true, type: "coast", size: 1 },
    { id: "MNTS", name: "Manteo", county: "nc-dare-hyde", lat: 35.9, lon: -75.65, type: "coast", size: 1 },
    { id: "HTRS", name: "Cape Hatteras Lighthouse (Buxton)", county: "nc-dare-hyde", lat: 35.25, lon: -75.53, scenic: true, type: "coast", size: 1 },
    { id: "OCRK", name: "Ocracoke", county: "nc-dare-hyde", lat: 35.07, lon: -76, scenic: true, type: "coast", size: 1 },
    { id: "RDNT", name: "Rodanthe", county: "nc-dare-hyde", lat: 35.6, lon: -75.47, type: "coast", size: 1 },
    { id: "HTRV", name: "Hatteras", county: "nc-dare-hyde", lat: 35.22, lon: -75.69, type: "coast", size: 1 },
    { id: "SWQT", name: "Swan Quarter", county: "nc-dare-hyde", lat: 35.41, lon: -76.32, type: "farm", size: 1 },
  ],
  // Real passes: [name, latitude, longitude]. See NOTES.md for sources. Tennessee's pack already lists
  // Newfound Gap, the Pigeon River Gorge (I-40), Sam's Gap (I-26) and Carver's Gap on the state line.
  passes: [
    // Swannanoa Gap: I-40, US-70 and the Norfolk Southern Old Fort loop cross the Blue Ridge Escarpment here between Old Fort (McDowell) and Black Mountain (Buncombe)
    ["Swannanoa Gap (I-40 and US-70, Old Fort to Black Mountain)", 35.63, -82.31],
    // Hickory Nut Gap: US-74A between Fairview (Buncombe) and Chimney Rock (Rutherford)
    ["Hickory Nut Gap (US-74A, Fairview to Chimney Rock)", 35.46, -82.36],
    // Saluda Gap: I-26 and the Saluda Grade railway, the steepest main-line standard-gauge climb in the US, at Saluda
    ["Saluda Gap (I-26 and the Saluda Grade, Polk-Henderson)", 35.23, -82.35],
    // Balsam Gap: US-74/23 and the Blue Ridge Parkway between Waynesville and Sylva
    ["Balsam Gap (US-74/23, Haywood-Jackson)", 35.45, -83.09],
    // Soco Gap: US-19 and the Blue Ridge Parkway between Maggie Valley (Haywood) and Cherokee (Swain/Jackson)
    ["Soco Gap (US-19, Maggie Valley to Cherokee)", 35.51, -83.12],
    // Winding Stair Gap: US-64 west of Franklin, on the Appalachian Trail
    ["Winding Stair Gap (US-64, Franklin to Murphy)", 35.15, -83.48],
  ],
  // Real bridges: [name, latitude, longitude]. See NOTES.md for sources.
  bridges: [
    // Wright Memorial Bridge: US-158 from Point Harbor (Currituck) to Kitty Hawk over Currituck Sound
    ["Wright Memorial Bridge (US-158, Currituck Sound)", 36.07, -75.78],
    // Virginia Dare Memorial Bridge: US-64/264 from Manns Harbor to Roanoke Island over Croatan Sound
    ["Virginia Dare Memorial Bridge (US-64/264, Croatan Sound)", 35.91, -75.72],
    // Washington Baum Bridge: US-64/264 from Roanoke Island to Whalebone/Nags Head over Roanoke Sound
    ["Washington Baum Bridge (US-64/264, Roanoke Sound)", 35.92, -75.64],
    // Marc Basnight Bridge: NC-12 over Oregon Inlet, between Bodie and Hatteras islands (opened 2019, replacing the Bonner Bridge)
    ["Marc Basnight Bridge (NC-12, Oregon Inlet)", 35.77, -75.53],
    // The free state ferry across Hatteras Inlet that links NC-12 on Hatteras Island and Ocracoke Island (about 60 minutes)
    ["Hatteras-Ocracoke ferry (NC-12, Hatteras Inlet)", 35.19, -75.77],
    // Albemarle Sound Bridge: US-17 from Edenton (Chowan) over the Chowan River's mouth into Bertie County
    ["Albemarle Sound Bridge (US-17, Edenton)", 36.04, -76.66],
    // Chowan River bridge: US-158 at Winton (Hertford)
    ["Chowan River bridge (US-158, Winton)", 36.4, -76.92],
    ["Pamlico River Bridge (US-17, Washington)", 35.54, -77.05],
    // Cape Fear Memorial Bridge: US-17/74/76/421 between Wilmington and Brunswick County
    ["Cape Fear Memorial Bridge (Wilmington)", 34.24, -77.96],
    ["Person Street Bridge (Cape Fear River, Fayetteville)", 35.05, -78.84],
    ["Cape Fear River bridge (US-421, Lillington)", 35.41, -78.81],
    ["Cape Fear River bridge (US-701, Elizabethtown)", 34.63, -78.59],
    ["Neuse River bridge (US-70, Kinston)", 35.25, -77.59],
    ["Neuse River bridge (US-70, Goldsboro)", 35.34, -77.96],
    ["Neuse River bridge (US-70/301, Smithfield)", 35.52, -78.35],
    ["Tar River bridge (US-264, Greenville)", 35.61, -77.34],
    ["Tar River bridge (US-64, Tarboro)", 35.89, -77.53],
    ["Tar River bridge (US-64/301, Rocky Mount)", 35.96, -77.8],
    ["I-95 Roanoke River bridge (Roanoke Rapids)", 36.44, -77.61],
    ["Roanoke River bridge (US-17, Williamston)", 35.87, -77.03],
    ["Roanoke River bridge (US-64, Plymouth)", 35.87, -76.75],
    ["Dan River bridge (US-29, Eden)", 36.48, -79.74],
    ["Yadkin River bridge (US-421, Wilkesboro)", 36.14, -81.17],
    ["Yadkin River bridge (US-21, Elkin)", 36.24, -80.85],
    ["Pee Dee River bridge (US-74, Rockingham-Wadesboro)", 34.97, -79.87],
    ["Catawba River bridge (I-85, Belmont-Charlotte)", 35.22, -81.01],
    ["French Broad River bridge (Smoky Park Bridge, I-40, Asheville)", 35.6, -82.58],
    ["Lake Norman bridge (NC-150)", 35.56, -80.99],
    ["Cowans Ford Dam (NC-73, Lake Norman)", 35.43, -80.96],
    ["Jordan Lake bridge (US-64)", 35.74, -79.04],
  ],
  // Water that blocks track except at the bridges and ferries above (the sounds lie outside the counties' land).
  bays: [
    {
      name: "Currituck Sound", // outside the counties' land; crossed at the Wright Memorial Bridge
      ring: [-75.84, 36.15, -75.74, 36.15, -75.72, 36, -75.82, 36],
    },
    {
      name: "Albemarle Sound", // outside the counties' land; crossed at the Albemarle Sound Bridge (US-17) and the Chowan River bridge
      ring: [-76.78, 36, -76.1, 36, -76, 36.06, -76.1, 36.11, -76.78, 36.11],
    },
    {
      name: "Croatan and Roanoke Sounds", // Roanoke Island's two channels; crossed at the Virginia Dare and Washington Baum bridges
      ring: [-75.85, 36, -75.6, 36, -75.58, 35.82, -75.62, 35.76, -75.85, 35.76],
    },
    {
      name: "Pamlico Sound", // between the Outer Banks and the mainland; crossed at the Marc Basnight Bridge and the Hatteras-Ocracoke ferry
      ring: [-75.85, 35.76, -75.62, 35.76, -75.52, 35.74, -75.49, 35.55, -75.51, 35.35, -75.6, 35.26, -75.72, 35.24, -75.88, 35.17, -76, 35.08, -76.1, 35.04, -76.25, 34.95, -76.4, 34.85, -76.55, 34.72, -76.75, 34.85, -76.75, 35.4, -76.35, 35.55, -76, 35.65],
    },
    {
      name: "Hatteras Inlet", // the channel between Hatteras and Ocracoke islands (the ferry)
      ring: [-75.82, 35.15, -75.7, 35.15, -75.7, 35.24, -75.82, 35.24],
    },
  ],
  levels: [
    {
      name: "Raleigh, Durham & the Triangle",
      areas: ["triangle"],
      goals: [
        { kind: "totalPassengers", target: 60 },
        { kind: "counties", target: 8 },
        // Raleigh to Rocky Mount, as US-64/I-495 and the CSX line run
        { kind: "connect", a: "RAL", b: "RKMT" },
      ],
    },
    {
      name: "Greensboro, Charlotte & the Piedmont",
      areas: ["piedmont"],
      goals: [
        { kind: "totalPassengers", target: 160 },
        // Greensboro to Charlotte, as I-85 and the Norfolk Southern/Amtrak line run
        { kind: "connect", a: "GSO", b: "CLTE" },
        { kind: "counties", target: 24 },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Asheville & the Blue Ridge",
      areas: ["mountains"],
      goals: [
        { kind: "totalPassengers", target: 300 },
        // Charlotte to Asheville, as I-40 and I-26 over the Blue Ridge run
        { kind: "connect", a: "CLTE", b: "ASHE" },
        { kind: "counties", target: 36 },
      ],
    },
    {
      name: "Wilmington & the Coast",
      areas: ["coast"],
      goals: [
        { kind: "totalPassengers", target: 500 },
        // Raleigh to Wilmington, as I-40 runs
        { kind: "connect", a: "RAL", b: "WLMG" },
        { kind: "counties", target: 55 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The pine flatwoods, Sandhills, swamps and the high Blue Ridge and Smokies
    forest: ["nc-new-hanover", "nc-brunswick", "nc-pender", "nc-onslow", "nc-carteret", "nc-craven", "nc-beaufort-pamlico", "nc-camden-currituck-pasquotank", "nc-chowan-gates-perquimans", "nc-dare-hyde", "nc-bladen-columbus", "nc-robeson", "nc-duplin", "nc-hoke", "nc-cumberland", "nc-moore", "nc-bertie-hertford-northampton", "nc-martin-tyrrell-washington", "nc-graham-jackson-swain", "nc-cherokee-clay-macon", "nc-haywood", "nc-transylvania", "nc-avery-mcdowell-mitchell", "nc-madison-yancey", "nc-alleghany-ashe", "nc-watauga"],
    // The Piedmont, the Blue Ridge foothills and the Asheville basin
    wooded: ["nc-alamance", "nc-alexander", "nc-burke", "nc-cabarrus", "nc-caldwell", "nc-caswell-person", "nc-catawba", "nc-chatham", "nc-cleveland", "nc-davidson", "nc-davie-yadkin", "nc-durham", "nc-forsyth", "nc-gaston", "nc-granville", "nc-guilford", "nc-iredell", "nc-lee", "nc-lincoln", "nc-mecklenburg", "nc-montgomery", "nc-orange", "nc-polk-rutherford", "nc-randolph", "nc-rockingham", "nc-rowan", "nc-stanly", "nc-stokes", "nc-surry", "nc-union", "nc-wake", "nc-wilkes", "nc-buncombe", "nc-henderson", "nc-anson-richmond-scotland", "nc-harnett"],
    // Not listed (farmland): the tobacco, cotton and soybean fields of the inner coastal plain. No dry.
  },
});
