// National Railways pack: South Carolina.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/SC/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/SC/raw.
// South Carolina's 46 counties are 32 regions (merges in tools/build-map.js, STATES.SC).
NR.addPack({
  code: "SC",
  name: "South Carolina",
  // A game that starts here begins owning Greenville (the biggest region), Anderson (to the south-west)
  // and Pickens (to the west); Anderson and Pickens both touch Greenville and each other. Greenville is
  // metro, Anderson farm and Pickens mountain, so the first track has riders.
  start: ["sc-greenville", "sc-anderson", "sc-pickens"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the
  // short code shown on passengers. pop = region population in thousands (2020 census). size = how
  // busy (1 to 5). level = which level unlocks it in Levels mode. Points are the Census points,
  // except where a comment says it was moved to a downtown. Every Census place is in
  // packs/SC/raw/places.json.
  stations: [
    // Level: The Upstate: Greenville, Spartanburg and the Blue Ridge foothills
    // Greenville (70,796): downtown at Main Street and the Reedy River falls; the Census point is the middle of the city limits. Greenville County 526k, the biggest region in the state, size 3 (as Charleston and Richland: all under 0.9 million). The airport (GSP, in Greer on the Spartanburg line) is Greenville-Spartanburg International.
    { id: "GVSC", name: "Greenville", county: "sc-greenville", lat: 34.85, lon: -82.40, airport: "Greenville-Spartanburg International Airport", type: "metro", size: 3, pop: 526, main: true, level: "upstate" },
    // Spartanburg (38,732): the seat, downtown on the Norfolk Southern/CSX lines and I-85 and I-26. Spartanburg County 328k, size 3 (Clayton, GA, 299k, is 3).
    { id: "SPBG", name: "Spartanburg", county: "sc-spartanburg", lat: 34.95, lon: -81.93, type: "metro", size: 3, pop: 328, main: true, level: "upstate" },
    // Anderson (29,456): the seat, downtown (the Census point is 1 mile away). Anderson 204k, size 2. Typed farm so the start (Greenville metro, Anderson farm, Pickens mountain) has three types.
    { id: "ANSC", name: "Anderson", county: "sc-anderson", lat: 34.50, lon: -82.65, type: "farm", size: 2, pop: 204, main: true, level: "upstate" },
    // Easley (22,965), ahead of Clemson (17,681) and the seat Pickens (3,395): the county's biggest place, on US-123 between Greenville and Clemson. Typed mountain: Pickens County reaches the Blue Ridge Escarpment (Table Rock, Caesars Head side). Pickens 131k, size 2.
    { id: "ESLY", name: "Easley", county: "sc-pickens", lat: 34.83, lon: -82.60, type: "mountain", size: 2, pop: 131, main: true, level: "upstate" },
    // Seneca (8,845), ahead of Walhalla (4,073, the seat): on US-123 and Lake Keowee's foothill country at the Blue Ridge foot. Oconee 79k.
    { id: "SNCA", name: "Seneca", county: "sc-oconee", lat: 34.69, lon: -82.95, type: "mountain", size: 1, pop: 79, main: true, level: "upstate" },
    // Gaffney (12,764): the Cherokee seat on I-85, the peach (Peachoid) town. Cherokee 56k.
    { id: "GFFN", name: "Gaffney", county: "sc-cherokee", lat: 35.07, lon: -81.65, type: "farm", size: 1, pop: 56, main: true, level: "upstate" },
    // Laurens (9,367, ahead of Clinton, 7,634): the seat on US-76 and US-221. Laurens 68k.
    { id: "LRNS", name: "Laurens", county: "sc-laurens", lat: 34.50, lon: -82.01, type: "farm", size: 1, pop: 68, main: true, level: "upstate" },
    // Greenwood (22,558): the seat and market town of the Lakelands, on Lake Greenwood, US-25 and US-72. Greenwood 69k.
    { id: "GWSC", name: "Greenwood", county: "sc-greenwood", lat: 34.19, lon: -82.16, type: "farm", size: 1, pop: 69, main: true, level: "upstate" },
    // Union (8,170), ahead of Chester (5,278) and Winnsboro (3,380): the biggest of the three counties' towns and the Union seat, in the north-west of the group; Chester (I-77) and Winnsboro (the Fairfield seat) are towns. Group 80k.
    { id: "UNSC", name: "Union", county: "sc-chester-fairfield-union", lat: 34.72, lon: -81.62, type: "farm", size: 1, pop: 80, main: true, level: "upstate" },
    // Abbeville (4,871), ahead of Edgefield (3,909) and McCormick (2,236): the seat and the 'birthplace and deathbed of the Confederacy' opera-house town. Group 59k.
    { id: "ABSC", name: "Abbeville", county: "sc-abbeville-edgefield-mccormick", lat: 34.18, lon: -82.38, type: "farm", size: 1, pop: 59, main: true, level: "upstate" },
    // Level: The Midlands: Columbia, Aiken, the Catawba and the Wateree
    // Columbia (136,810): the state capital, at the Statehouse on Gervais and Main (the Census point 34.04,-80.91 is the middle of the city limits, 7 miles east). Richland 416k, size 3. The airport (CAE) is in Lexington County in fact; the pack puts it here as the capital's airport.
    { id: "CLSC", name: "Columbia", county: "sc-richland", lat: 34.00, lon: -81.03, airport: "Columbia Metropolitan Airport", type: "metro", size: 3, pop: 416, main: true, level: "midlands" },
    // Lexington (23,552), ahead of West Columbia (17,497) and Cayce (13,770), which are Columbia's suburbs across the Congaree and under 4 miles from the Statehouse: the seat on US-1 and Lake Murray's dam side. Lexington 294k, size 2.
    { id: "LXNG", name: "Lexington", county: "sc-lexington", lat: 33.98, lon: -81.24, type: "farm", size: 2, pop: 294, main: true, level: "midlands" },
    // Aiken (32,108), ahead of North Augusta (24,430): the seat and horse country (Hitchcock Woods) on US-1 and I-20. North Augusta is a town, 4 miles from Augusta's station across the Savannah. Aiken 169k, size 2.
    { id: "AKSC", name: "Aiken", county: "sc-aiken", lat: 33.56, lon: -81.72, type: "farm", size: 2, pop: 169, main: true, level: "midlands" },
    // Newberry (10,707): the seat and opera-house town on I-26 and the Saluda/Broad divide. Group 57k.
    { id: "NWBR", name: "Newberry", county: "sc-newberry-saluda", lat: 34.28, lon: -81.62, type: "farm", size: 1, pop: 57, main: true, level: "midlands" },
    // Camden (7,791), ahead of Bishopville (3,016): the oldest inland city (1732), Kershaw seat on I-20 and US-521/US-1. Group 82k (an exception: Lee has no small neighbour left).
    { id: "CMSC", name: "Camden", county: "sc-kershaw-lee", lat: 34.25, lon: -80.61, type: "farm", size: 1, pop: 82, main: true, level: "midlands" },
    // Lancaster (8,522): the seat on US-521 and the Catawba, with Indian Land growing into Charlotte's suburbs. Lancaster 96k.
    { id: "LNSC", name: "Lancaster", county: "sc-lancaster", lat: 34.72, lon: -80.77, type: "farm", size: 1, pop: 96, main: true, level: "midlands" },
    // Rock Hill (74,416): the biggest city of York County on I-77 and the Catawba, at downtown (the Census point is 2 miles north-east). Charlotte's future station (Uptown, 35.23, -80.84) will be 22 miles away. York 282k, size 2.
    { id: "RKHL", name: "Rock Hill", county: "sc-york", lat: 34.92, lon: -81.03, type: "metro", size: 2, pop: 282, main: true, level: "midlands" },
    // Sumter (43,469): the seat, downtown (the Census point is 4 miles east, at Shaw AFB side). On US-76/378 and US-15. Sumter 106k.
    { id: "SMTR", name: "Sumter", county: "sc-sumter", lat: 33.92, lon: -80.34, type: "farm", size: 2, pop: 106, main: true, level: "midlands" },
    // Orangeburg (13,225), ahead of St. Matthews (1,845, the Calhoun seat): the seat on I-26/I-95 and US-301 with South Carolina State University. Calhoun 14k + Orangeburg 84k = 98k (phase 1).
    { id: "ORBG", name: "Orangeburg", county: "sc-calhoun-orangeburg", lat: 33.49, lon: -80.86, type: "farm", size: 1, pop: 98, main: true, level: "midlands" },
    // Level: The Pee Dee and the Grand Strand
    // Florence (40,111): the Pee Dee hub where I-95 and I-20 meet, at downtown (the Census point is 2 miles south-west). Florence 137k, size 2.
    { id: "FLSC", name: "Florence", county: "sc-florence", lat: 34.20, lon: -79.76, type: "metro", size: 2, pop: 137, main: true, level: "pee-dee" },
    // Hartsville (7,441), ahead of Darlington (6,209, the seat): the Sonoco headquarters town and Coker University, the biggest. Darlington is a town. Darlington 63k.
    { id: "HRSC", name: "Hartsville", county: "sc-darlington", lat: 34.37, lon: -80.07, type: "farm", size: 1, pop: 63, main: true, level: "pee-dee" },
    // Bennettsville (7,017), ahead of Cheraw (5,024) and Pageland (2,477): the Marlboro seat; Cheraw (US-52, the Pee Dee, Chesterfield State Park side) is a town. Group 70k (phase 1).
    { id: "BNNT", name: "Bennettsville", county: "sc-chesterfield-marlboro", lat: 34.63, lon: -79.69, type: "farm", size: 1, pop: 70, main: true, level: "pee-dee" },
    // Dillon (6,518), ahead of Marion (6,444) and Mullins (4,026): the Dillon seat on I-95 at the North Carolina line (South of the Border). Marion and Mullins are towns. Group 57k.
    { id: "DLLN", name: "Dillon", county: "sc-dillon-marion", lat: 34.42, lon: -79.37, type: "farm", size: 1, pop: 57, main: true, level: "pee-dee" },
    // Manning (3,875), ahead of Kingstree (3,248): the Clarendon seat on I-95 and US-301 beside Lake Marion; Kingstree (the Williamsburg seat, on the Black River) is a town. Group 62k.
    { id: "MNSC", name: "Manning", county: "sc-clarendon-williamsburg", lat: 33.70, lon: -80.21, type: "farm", size: 1, pop: 62, main: true, level: "pee-dee" },
    // Myrtle Beach (35,699), ahead of Conway (24,981, the seat): the Grand Strand resort, at the Boardwalk and Pier (the Census point is 2 miles north-west); Conway is a town. Horry 351k, size 3 (a resort of 18 million visitors a year; the airport is MYR).
    { id: "MYRT", name: "Myrtle Beach", county: "sc-horry", lat: 33.69, lon: -78.89, airport: "Myrtle Beach International Airport", scenic: true, type: "coast", size: 3, pop: 351, main: true, level: "pee-dee" },
    // Georgetown (8,403): the historic harbor town and seat on Winyah Bay, the third oldest city in the state, with the steel mill and a small port. Georgetown 63k.
    { id: "GTSC", name: "Georgetown", county: "sc-georgetown", lat: 33.37, lon: -79.29, type: "coast", size: 1, pop: 63, main: true, level: "pee-dee" },
    // Level: The Lowcountry: Charleston, Beaufort and the coast
    // Charleston (150,410): at the downtown peninsula, Meeting and Broad (the Census point 32.83,-79.97 is the middle of the city limits, 5 miles north). Port of Charleston: the 8th busiest US container port (Wando Welch and Leatherman terminals). Charleston International (CHS, in North Charleston). Charleston 408k, size 3.
    { id: "CHSC", name: "Charleston", county: "sc-charleston", lat: 32.78, lon: -79.93, port: "Port of Charleston", airport: "Charleston International Airport", scenic: true, type: "coast", size: 3, pop: 408, main: true, level: "lowcountry" },
    // Goose Creek (45,967), ahead of Hanahan (20,322) and the seat Moncks Corner (13,307): the Charleston suburb on US-52, typed metro with Charleston coast and Summerville farm for the start's mix. Berkeley 230k, size 2.
    { id: "GSCK", name: "Goose Creek", county: "sc-berkeley", lat: 32.98, lon: -80.03, type: "metro", size: 2, pop: 230, main: true, level: "lowcountry" },
    // Summerville (50,985): the seat and Flower Town in the Pines, on US-78 and the CSX line. Dorchester 161k, size 2.
    { id: "SMSC", name: "Summerville", county: "sc-dorchester", lat: 33.02, lon: -80.18, type: "farm", size: 2, pop: 161, main: true, level: "lowcountry" },
    // Hilton Head Island (37,666), ahead of Bluffton (27,718), Port Royal (14,227) and the seat Beaufort (13,601): the resort island (Harbour Town, Sea Pines), reached by the US-278 bridges; the Census point 32.19,-80.74 is nudged to Coligny/the middle of the island. Beaufort (the 1711 seat, Parris Island side) and Bluffton are towns. Beaufort 187k, size 2. The Savannah/Hilton Head airport is Georgia's (SAV).
    { id: "HHI", name: "Hilton Head Island", county: "sc-beaufort", lat: 32.21, lon: -80.74, scenic: true, type: "coast", size: 2, pop: 187, main: true, level: "lowcountry" },
    // Walterboro (5,523), ahead of Hardeeville (7,488), Ridgeland (3,765) and Hampton (2,706): the Colleton seat on I-95 and US-17A at the centre of the group (Hardeeville is 45 miles away in the south-west corner, a Savannah suburb on the Georgia line, so it is a town and keeps the I-95 and US-17 link to Georgia). Group 86k.
    { id: "WLBO", name: "Walterboro", county: "sc-colleton-hampton-jasper", lat: 32.90, lon: -80.67, type: "farm", size: 1, pop: 86, main: true, level: "lowcountry" },
    // Barnwell (4,651), ahead of Denmark (3,180), Bamberg (3,075) and Williston (2,890): the seat on US-278 and US-301 next to the Savannah River Site. Group 42k.
    { id: "BRNW", name: "Barnwell", county: "sc-allendale-bamberg-barnwell", lat: 33.24, lon: -81.37, type: "farm", size: 1, pop: 42, main: true, level: "lowcountry" },
  ],
  // Towns: about 1.5 per region, the next-biggest real places and a few well-known scenic ones
  // (scenic: true; sources in NOTES.md).
  towns: [
    { id: "GRES", name: "Greer", county: "sc-greenville", lat: 34.94, lon: -82.23, type: "metro", size: 1 },
    { id: "CHSP", name: "Caesars Head State Park", county: "sc-greenville", lat: 35.11, lon: -82.63, scenic: true, type: "mountain", size: 1 },
    { id: "WDRF", name: "Woodruff", county: "sc-spartanburg", lat: 34.74, lon: -82.04, type: "farm", size: 1 },
    { id: "WLL", name: "Williamston", county: "sc-anderson", lat: 34.62, lon: -82.48, type: "farm", size: 1 },
    { id: "CLES", name: "Clemson", county: "sc-pickens", lat: 34.68, lon: -82.84, type: "mountain", size: 1 },
    { id: "TRSP", name: "Table Rock State Park", county: "sc-pickens", lat: 35.03, lon: -82.70, scenic: true, type: "mountain", size: 1 },
    { id: "WLHL", name: "Walhalla", county: "sc-oconee", lat: 34.77, lon: -83.06, type: "mountain", size: 1 },
    { id: "BLCK", name: "Blacksburg", county: "sc-cherokee", lat: 35.12, lon: -81.52, type: "farm", size: 1 },
    { id: "CNB", name: "Cowpens National Battlefield", county: "sc-cherokee", lat: 35.14, lon: -81.81, scenic: true, type: "farm", size: 1 },
    { id: "CLIS", name: "Clinton", county: "sc-laurens", lat: 34.47, lon: -81.88, type: "farm", size: 1 },
    { id: "NS", name: "Ninety Six", county: "sc-greenwood", lat: 34.17, lon: -82.02, type: "farm", size: 1 },
    { id: "CHSS", name: "Chester", county: "sc-chester-fairfield-union", lat: 34.70, lon: -81.21, type: "farm", size: 1 },
    { id: "WNNS", name: "Winnsboro", county: "sc-chester-fairfield-union", lat: 34.37, lon: -81.09, type: "farm", size: 1 },
    { id: "DGFL", name: "Edgefield", county: "sc-abbeville-edgefield-mccormick", lat: 33.79, lon: -81.93, type: "farm", size: 1 },
    { id: "MCCR", name: "McCormick", county: "sc-abbeville-edgefield-mccormick", lat: 33.91, lon: -82.29, type: "farm", size: 1 },
    { id: "BLYS", name: "Blythewood", county: "sc-richland", lat: 34.21, lon: -81.01, type: "metro", size: 1 },
    { id: "CNP", name: "Congaree National Park", county: "sc-richland", lat: 33.79, lon: -80.78, scenic: true, type: "farm", size: 1 },
    { id: "BTSB", name: "Batesburg-Leesville", county: "sc-lexington", lat: 33.91, lon: -81.53, type: "farm", size: 1 },
    { id: "NA", name: "North Augusta", county: "sc-aiken", lat: 33.53, lon: -81.93, type: "metro", size: 1 },
    { id: "SALU", name: "Saluda", county: "sc-newberry-saluda", lat: 34.00, lon: -81.77, type: "farm", size: 1 },
    { id: "BSHP", name: "Bishopville", county: "sc-kershaw-lee", lat: 34.22, lon: -80.25, type: "farm", size: 1 },
    { id: "KRSH", name: "Kershaw", county: "sc-lancaster", lat: 34.55, lon: -80.59, type: "farm", size: 1 },
    { id: "FM", name: "Fort Mill", county: "sc-york", lat: 35.01, lon: -80.94, type: "metro", size: 1 },
    { id: "YORS", name: "York", county: "sc-york", lat: 35.00, lon: -81.23, type: "farm", size: 1 },
    { id: "SM", name: "St. Matthews", county: "sc-calhoun-orangeburg", lat: 33.66, lon: -80.78, type: "farm", size: 1 },
    { id: "LC", name: "Lake City", county: "sc-florence", lat: 33.87, lon: -79.75, type: "farm", size: 1 },
    { id: "DRLN", name: "Darlington", county: "sc-darlington", lat: 34.30, lon: -79.87, type: "farm", size: 1 },
    { id: "CHRW", name: "Cheraw", county: "sc-chesterfield-marlboro", lat: 34.70, lon: -79.88, type: "farm", size: 1 },
    { id: "MARS", name: "Marion", county: "sc-dillon-marion", lat: 34.18, lon: -79.40, type: "farm", size: 1 },
    { id: "MULL", name: "Mullins", county: "sc-dillon-marion", lat: 34.20, lon: -79.25, type: "farm", size: 1 },
    { id: "KNSC", name: "Kingstree", county: "sc-clarendon-williamsburg", lat: 33.67, lon: -79.83, type: "farm", size: 1 },
    { id: "CNWY", name: "Conway", county: "sc-horry", lat: 33.84, lon: -79.05, type: "farm", size: 1 },
    { id: "NMB", name: "North Myrtle Beach", county: "sc-horry", lat: 33.82, lon: -78.68, type: "coast", size: 1 },
    { id: "BG", name: "Brookgreen Gardens", county: "sc-georgetown", lat: 33.52, lon: -79.10, scenic: true, type: "coast", size: 1 },
    { id: "NDRW", name: "Andrews", county: "sc-georgetown", lat: 33.45, lon: -79.57, type: "farm", size: 1 },
    { id: "MP", name: "Mount Pleasant", county: "sc-charleston", lat: 32.83, lon: -79.84, type: "coast", size: 2 },
    { id: "KI", name: "Kiawah Island", county: "sc-charleston", lat: 32.61, lon: -80.08, scenic: true, type: "coast", size: 1 },
    { id: "MC", name: "Moncks Corner", county: "sc-berkeley", lat: 33.20, lon: -80.01, type: "farm", size: 1 },
    { id: "MPSC", name: "Middleton Place", county: "sc-dorchester", lat: 32.90, lon: -80.14, scenic: true, type: "farm", size: 1 },
    { id: "SG", name: "St. George", county: "sc-dorchester", lat: 33.19, lon: -80.58, type: "farm", size: 1 },
    { id: "BFRT", name: "Beaufort", county: "sc-beaufort", lat: 32.43, lon: -80.67, type: "coast", size: 1 },
    { id: "BLFF", name: "Bluffton", county: "sc-beaufort", lat: 32.24, lon: -80.86, type: "coast", size: 1 },
    { id: "HRDV", name: "Hardeeville", county: "sc-colleton-hampton-jasper", lat: 32.28, lon: -81.08, type: "farm", size: 1 },
    { id: "RDGL", name: "Ridgeland", county: "sc-colleton-hampton-jasper", lat: 32.48, lon: -80.99, type: "farm", size: 1 },
    { id: "HMP", name: "Hampton", county: "sc-colleton-hampton-jasper", lat: 32.87, lon: -81.11, type: "farm", size: 1 },
    { id: "BMBR", name: "Bamberg", county: "sc-allendale-bamberg-barnwell", lat: 33.30, lon: -81.03, type: "farm", size: 1 },
    { id: "ALLE", name: "Allendale", county: "sc-allendale-bamberg-barnwell", lat: 33.01, lon: -81.31, type: "farm", size: 1 },
  ],
  // Real passes: [name, latitude, longitude]. See NOTES.md.
  passes: [
  ],
  // Real bridges: [name, latitude, longitude]. See NOTES.md for sources.
  bridges: [
    // Charleston Harbor: the Cooper and Ashley rivers (the Ravenel Bridge, the I-526 Don Holt Bridge, the US-17 Ashley River bridge)
    ["Arthur Ravenel Jr. Bridge (Cooper River, Charleston-Mount Pleasant)", 32.8, -79.91],
    ["Don Holt Bridge (I-526, Cooper River)", 32.88, -79.96],
    ["Ashley River bridge (US-17, Charleston)", 32.79, -79.96],
    // Santee Cooper lakes: Lake Moultrie's Pinopolis Dam (SC-6) and I-95 across Lake Marion; Lake Murray's dam (SC-6)
    ["Pinopolis Dam (SC-6, Lake Moultrie)", 33.22, -80.03],
    ["I-95 causeway (Lake Marion)", 33.5, -80.32],
    ["Lake Murray Dam (SC-6)", 34.06, -81.21],
    // The Congaree at Columbia, the Waccamaw at Conway
    ["Gervais Street Bridge (Congaree River, Columbia)", 34, -81.05],
    ["Waccamaw River bridge (US-501, Conway)", 33.84, -79.04],
  ],
  bays: [
  ],
  levels: [
    {
      name: "Greenville & the Upstate",
      areas: ["upstate"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        // Greenville to Spartanburg, as I-85 and the old Southern line run
        { kind: "connect", a: "GVSC", b: "SPBG" },
      ],
    },
    {
      name: "Columbia & the Midlands",
      areas: ["midlands"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Greenville to Columbia, as I-26 runs by Newberry
        { kind: "connect", a: "GVSC", b: "CLSC" },
        { kind: "counties", target: 14 },
      ],
    },
    {
      name: "The Pee Dee & the Grand Strand",
      areas: ["pee-dee"],
      goals: [
        { kind: "totalPassengers", target: 260 },
        // Columbia to Florence, as I-20 runs by Camden
        { kind: "connect", a: "CLSC", b: "FLSC" },
        { kind: "counties", target: 22 },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Charleston & the Lowcountry",
      areas: ["lowcountry"],
      goals: [
        { kind: "totalPassengers", target: 420 },
        // Columbia to Charleston, as I-26 runs by Orangeburg and Summerville
        { kind: "connect", a: "CLSC", b: "CHSC" },
        { kind: "counties", target: 30 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The pine flatwoods and swamps of the coastal plain and the Pee Dee
    forest: ["sc-charleston", "sc-berkeley", "sc-dorchester", "sc-beaufort", "sc-colleton-hampton-jasper", "sc-georgetown", "sc-horry", "sc-clarendon-williamsburg", "sc-dillon-marion", "sc-allendale-bamberg-barnwell", "sc-calhoun-orangeburg"],
    // The Piedmont, the Blue Ridge foothills and the Sandhills
    wooded: ["sc-greenville", "sc-spartanburg", "sc-pickens", "sc-oconee", "sc-cherokee", "sc-laurens", "sc-anderson", "sc-greenwood", "sc-chester-fairfield-union", "sc-abbeville-edgefield-mccormick", "sc-newberry-saluda", "sc-lancaster", "sc-york", "sc-kershaw-lee", "sc-lexington", "sc-aiken"],
    // Not listed (farmland): the Midlands and Pee Dee cotton, tobacco and soybean fields. No dry.
  },
});
