// National Railways pack: Georgia.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/GA/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/GA/raw.
// Georgia's 159 counties are 93 regions (merges in tools/build-map.js, STATES.GA).
NR.addPack({
  code: "GA",
  name: "Georgia",
  // A game that starts here begins owning Fulton (Atlanta), Fayette (Peachtree City, to the south)
  // and Coweta (Newnan, to the south-west); Fayette and Coweta both touch Fulton and each other.
  // Atlanta and Peachtree City are metro and Newnan is farm, so the first track (the nearest pair
  // of different types, Peachtree City-Newnan) has riders; Atlanta-Peachtree City joins two metros,
  // which carries nobody in "A type of place".
  start: ["ga-fulton", "ga-fayette", "ga-coweta"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the
  // short code shown on passengers. pop = region population in thousands (2020 census). size = how
  // busy (1 to 5). level = which level unlocks it in Levels mode. Points are the Census points,
  // except where a comment says it was moved to a downtown. Every Census place is in
  // packs/GA/raw/places.json.
  stations: [
    // Level: Atlanta & the metro, west Georgia
    // Atlanta: the state capital and the core of a 6-million metro (498,736 in the city; Fulton County 1,067k, the biggest region, size 5 like Houston, Dallas and Phoenix). At Five Points downtown; the Census point (33.76, -84.42) is the middle of the city limits, 2 miles west. Hartsfield-Jackson, the world's busiest airport, is in the city. Scenic for the Martin Luther King Jr. National Historical Park and the Georgia Aquarium.
    { id: "ATL", name: "Atlanta", county: "ga-fulton", lat: 33.75, lon: -84.39, airport: "Hartsfield-Jackson Atlanta International Airport", scenic: true, type: "metro", size: 5, pop: 1067, main: true, level: "atlanta" },
    // Decatur (24,942), not Stonecrest (59,188, a new city in the far east of the county, 33.68, -84.15) or Brookhaven (56,795) or Dunwoody (51,665): the DeKalb seat and the old railroad town, 5 miles from Five Points on the MARTA and Georgia Railroad line. DeKalb 764k, size 4 like Houston's suburbs.
    { id: "DCGA", name: "Decatur", county: "ga-dekalb", lat: 33.77, lon: -84.30, type: "metro", size: 4, pop: 764, main: true, level: "atlanta" },
    // Marietta (61,073, ahead of Smyrna, 56,201): the Cobb seat, at the Square. Cobb County 766k, size 4.
    { id: "MRTA", name: "Marietta", county: "ga-cobb", lat: 33.95, lon: -84.54, type: "metro", size: 4, pop: 766, main: true, level: "atlanta" },
    // Lawrenceville (30,679), not Peachtree Corners (42,261, a suburb on the Fulton line) or Duluth (31,872): the Gwinnett seat (phase 1 review). Gwinnett 957k, size 4.
    { id: "LWRC", name: "Lawrenceville", county: "ga-gwinnett", lat: 33.96, lon: -83.99, type: "metro", size: 4, pop: 957, main: true, level: "atlanta" },
    // Forest Park (19,823, ahead of Riverdale, 15,035, and Jonesboro, the seat): beside Hartsfield-Jackson and Fort Gillem on I-75. Clayton 299k, size 3 (as Chatham, 295k).
    { id: "FRPK", name: "Forest Park", county: "ga-clayton", lat: 33.62, lon: -84.36, type: "metro", size: 3, pop: 299, main: true, level: "atlanta" },
    // Stockbridge (35,686, ahead of McDonough, 29,058, the seat), on I-75. Henry 241k.
    { id: "STKB", name: "Stockbridge", county: "ga-henry", lat: 33.53, lon: -84.23, type: "metro", size: 2, pop: 241, main: true, level: "atlanta" },
    // Woodstock (35,109, ahead of Canton, 32,956, the seat, 11 miles north): on I-575. Cherokee 267k.
    { id: "WDST", name: "Woodstock", county: "ga-cherokee", lat: 34.10, lon: -84.51, type: "metro", size: 2, pop: 267, main: true, level: "atlanta" },
    // Cumming (7,325): the Forsyth seat and the only Census place in a county of 251k, on GA-400 and Lake Lanier.
    { id: "CMNG", name: "Cumming", county: "ga-forsyth", lat: 34.21, lon: -84.13, type: "metro", size: 2, pop: 251, main: true, level: "atlanta" },
    // Douglasville (34,663): the Douglas seat, on I-20 west of Atlanta. Douglas 144k.
    { id: "DGVL", name: "Douglasville", county: "ga-douglas", lat: 33.74, lon: -84.70, type: "metro", size: 2, pop: 144, main: true, level: "atlanta" },
    // Peachtree City (38,257, ahead of Fayetteville, 18,944, the seat; places.json lists it as "Peachtree"): the planned golf-cart town on GA-74. Fayette 119k.
    { id: "PTCY", name: "Peachtree City", county: "ga-fayette", lat: 33.40, lon: -84.60, type: "metro", size: 2, pop: 119, main: true, level: "atlanta" },
    // Conyers (17,312): the Rockdale seat, on I-20 east of Atlanta. Rockdale 94k.
    { id: "CNYR", name: "Conyers", county: "ga-rockdale", lat: 33.66, lon: -83.98, type: "metro", size: 2, pop: 94, main: true, level: "atlanta" },
    // Covington (14,200): the Newton seat, on I-20.
    { id: "CVTN", name: "Covington", county: "ga-newton", lat: 33.61, lon: -83.85, type: "metro", size: 2, pop: 113, main: true, level: "atlanta" },
    // Dallas (14,053): the Paulding seat on US-278, an Atlanta exurb of 169k.
    { id: "DLGA", name: "Dallas", county: "ga-paulding", lat: 33.92, lon: -84.84, type: "metro", size: 2, pop: 169, main: true, level: "atlanta" },
    // Winder (18,322, ahead of Braselton, 13,418): the Barrow seat on US-29/GA-316.
    { id: "WNDR", name: "Winder", county: "ga-barrow", lat: 33.99, lon: -83.72, type: "metro", size: 1, pop: 84, main: true, level: "atlanta" },
    // Gainesville (42,348): on Lake Lanier at the foot of the Blue Ridge, the Hall seat and the poultry capital. Hall 203k.
    { id: "GNSV", name: "Gainesville", county: "ga-hall", lat: 34.29, lon: -83.83, type: "metro", size: 2, pop: 203, main: true, level: "atlanta" },
    // Newnan (42,548): the Coweta seat on I-85, a historic town (the "City of Homes") with horse country around it; typed farm (not metro) so the start has two types of place. Coweta 146k.
    { id: "NWNN", name: "Newnan", county: "ga-coweta", lat: 33.38, lon: -84.77, type: "farm", size: 2, pop: 146, main: true, level: "atlanta" },
    // Griffin (23,506): the Spalding seat on US-19/41 south of Atlanta.
    { id: "GRFN", name: "Griffin", county: "ga-spalding", lat: 33.24, lon: -84.27, type: "farm", size: 1, pop: 67, main: true, level: "atlanta" },
    // Monroe (14,959, ahead of Loganville, 14,127): the Walton seat on US-78. Walton 97k.
    { id: "MNGA", name: "Monroe", county: "ga-walton", lat: 33.80, lon: -83.72, type: "metro", size: 2, pop: 97, main: true, level: "atlanta" },
    // Carrollton (26,828): West Georgia on US-27 and US-78. Carroll 119k.
    { id: "CRRT", name: "Carrollton", county: "ga-carroll", lat: 33.58, lon: -85.08, type: "farm", size: 2, pop: 119, main: true, level: "atlanta" },
    // Cartersville (23,152): the Bartow seat on I-75, by the Etowah Mounds. Bartow 109k.
    { id: "CRTV", name: "Cartersville", county: "ga-bartow", lat: 34.16, lon: -84.80, type: "farm", size: 2, pop: 109, main: true, level: "atlanta" },
    // Barnesville (6,121, ahead of Jackson, 5,523, the Butts seat on I-75): Lamar's seat on US-41/GA-18.
    { id: "BNSV", name: "Barnesville", county: "ga-butts-lamar", lat: 33.05, lon: -84.15, type: "farm", size: 1, pop: 44, main: true, level: "atlanta" },
    // LaGrange (30,866): the Troup seat on I-85, the Callaway textile town.
    { id: "LGRG", name: "LaGrange", county: "ga-troup", lat: 33.03, lon: -85.04, type: "farm", size: 1, pop: 69, main: true, level: "atlanta" },
    // Franklin (957): the Heard seat on the Chattahoochee, the largest place in the county of 11k.
    { id: "FRKL", name: "Franklin", county: "ga-heard", lat: 33.28, lon: -85.10, type: "farm", size: 1, pop: 11, main: true, level: "atlanta" },
    // Thomaston (9,823): the Upson seat on US-19/GA-74.
    { id: "TMST", name: "Thomaston", county: "ga-pike-upson", lat: 32.89, lon: -84.33, type: "farm", size: 1, pop: 47, main: true, level: "atlanta" },
    // Level: North Georgia & the Blue Ridge
    // Calhoun (16,971): the Gordon seat on I-75 and the Oostanaula.
    { id: "CLHN", name: "Calhoun", county: "ga-gordon", lat: 34.50, lon: -84.93, type: "farm", size: 1, pop: 58, main: true, level: "north" },
    // Dalton (34,457): the carpet capital of the world on I-75, the Whitfield seat. Whitfield 103k.
    { id: "DLTN", name: "Dalton", county: "ga-whitfield", lat: 34.77, lon: -84.97, type: "metro", size: 2, pop: 103, main: true, level: "north" },
    // Chatsworth (4,891): the Murray seat on US-411 below the Cohutta Mountains.
    { id: "CHTS", name: "Chatsworth", county: "ga-murray", lat: 34.78, lon: -84.78, type: "mountain", size: 1, pop: 40, main: true, level: "north" },
    // Fort Oglethorpe (10,349, ahead of Ringgold, 3,402, the seat on I-75): a Chattanooga suburb beside Chickamauga and Chattanooga National Military Park. Chattanooga is about 8 miles away.
    { id: "FTOG", name: "Fort Oglethorpe", county: "ga-catoosa", lat: 34.93, lon: -85.25, type: "metro", size: 1, pop: 68, main: true, level: "north" },
    // LaFayette (6,891, ahead of Rossville, 3,976, which is Chattanooga's suburb): the Walker seat on US-27.
    { id: "LAFG", name: "LaFayette", county: "ga-walker", lat: 34.71, lon: -85.28, type: "farm", size: 1, pop: 68, main: true, level: "north" },
    // Trenton (2,189): the Dade seat on Lookout Mountain, by I-59.
    { id: "TRNG", name: "Trenton", county: "ga-dade", lat: 34.87, lon: -85.51, type: "mountain", size: 1, pop: 16, main: true, level: "north" },
    // Summerville (4,431): the Chattooga seat on US-27 between Rome and Alabama.
    { id: "SUMM", name: "Summerville", county: "ga-chattooga", lat: 34.48, lon: -85.35, type: "farm", size: 1, pop: 25, main: true, level: "north" },
    // Rome (37,735): the city of seven hills where the Etowah and Oostanaula make the Coosa, the Floyd seat. At downtown (Broad Street); the Census point is 1 mile west. Floyd 99k.
    { id: "ROME", name: "Rome", county: "ga-floyd", lat: 34.26, lon: -85.17, type: "metro", size: 2, pop: 99, main: true, level: "north" },
    // Cedartown (10,189, ahead of Bremen, 7,193): the Polk seat on US-27/US-278 beside Alabama.
    { id: "CDTN", name: "Cedartown", county: "ga-haralson-polk", lat: 34.02, lon: -85.25, type: "farm", size: 1, pop: 73, main: true, level: "north" },
    // Jasper (4,093, ahead of Ellijay, 1,859, the Gilmer seat): the Pickens seat on GA-515, the Appalachian Parkway.
    { id: "JSPG", name: "Jasper", county: "ga-gilmer-pickens", lat: 34.47, lon: -84.44, type: "mountain", size: 1, pop: 65, main: true, level: "north" },
    // Blue Ridge (1,254, ahead of McCaysville, 1,142 and Blairsville, 616): the Fannin seat, the Blue Ridge Scenic Railway town.
    { id: "BLRG", name: "Blue Ridge", county: "ga-fannin-union", lat: 34.87, lon: -84.32, type: "mountain", size: 1, pop: 50, main: true, level: "north" },
    // Cleveland (3,510): the White seat on US-129/GA-75, gateway to Helen and the Chattahoochee headwaters.
    { id: "CLVG", name: "Cleveland", county: "ga-towns-white", lat: 34.60, lon: -83.76, type: "mountain", size: 1, pop: 40, main: true, level: "north" },
    // Cornelia (4,516): the Habersham town on US-23/441, the gateway to Tallulah Gorge and Rabun's Clayton.
    { id: "CRNL", name: "Cornelia", county: "ga-habersham-rabun", lat: 34.52, lon: -83.53, type: "mountain", size: 1, pop: 63, main: true, level: "north" },
    // Toccoa (9,156): the Stephens seat on US-123/I-85 and Toccoa Falls.
    { id: "TCCO", name: "Toccoa", county: "ga-banks-stephens", lat: 34.58, lon: -83.33, type: "mountain", size: 1, pop: 45, main: true, level: "north" },
    // Hartwell (4,461): the Hart seat on Lake Hartwell.
    { id: "HTWL", name: "Hartwell", county: "ga-franklin-hart", lat: 34.35, lon: -82.93, type: "farm", size: 1, pop: 49, main: true, level: "north" },
    // Dahlonega (7,526, ahead of Dawsonville, 3,732): the site of America's first major gold rush (1828-9) and a mountain wine town; University of North Georgia. Scenic.
    { id: "DHLN", name: "Dahlonega", county: "ga-dawson-lumpkin", lat: 34.53, lon: -83.98, scenic: true, type: "mountain", size: 1, pop: 60, main: true, level: "north" },
    // Jefferson (13,262, ahead of Commerce, 7,429): the Jackson seat on US-129/I-85.
    { id: "JFRS", name: "Jefferson", county: "ga-jackson", lat: 34.14, lon: -83.60, type: "farm", size: 1, pop: 76, main: true, level: "north" },
    // Comer (1,516, ahead of Crawford, 827 and Danielsville, 785, the Madison seat): on GA-72 and US-29.
    { id: "COMR", name: "Comer", county: "ga-madison-oglethorpe", lat: 34.06, lon: -83.13, type: "farm", size: 1, pop: 45, main: true, level: "north" },
    // Athens (127,362; the Census name is Athens-Clarke): the University of Georgia and the music scene. Clarke 129k, size 2.
    { id: "ATHG", name: "Athens", county: "ga-clarke", lat: 33.95, lon: -83.37, type: "metro", size: 2, pop: 129, main: true, level: "north" },
    // Watkinsville (2,891, ahead of Bogart, 1,278): the Oconee seat, an Athens suburb on US-441/129.
    { id: "WTKV", name: "Watkinsville", county: "ga-oconee", lat: 33.86, lon: -83.40, type: "metro", size: 1, pop: 42, main: true, level: "north" },
    // Level: Macon, Columbus, Augusta & Middle Georgia
    // Manchester (3,588, ahead of Hamilton, 1,676 and Pine Mountain, 1,217): US-27/GA-85 at the foot of Pine Mountain.
    { id: "MNCS", name: "Manchester", county: "ga-harris-meriwether-talbot", lat: 32.86, lon: -84.63, type: "farm", size: 1, pop: 61, main: true, level: "middle" },
    // Columbus (206,919): the Muscogee seat and Fort Moore/Fort Benning's city on the Chattahoochee, facing Phenix City, Alabama. Downtown (32.46, -84.99) is 1 mile from Phenix City's station, so the point is on the city's east side (the Wynnton district), about 4 miles from it; the Census point (32.51, -84.87) is 8 miles east of it. Muscogee 207k, size 2 (as Augusta).
    { id: "CLBG", name: "Columbus", county: "ga-muscogee", lat: 32.48, lon: -84.94, type: "metro", size: 2, pop: 207, main: true, level: "middle" },
    // Richland (1,368), the phase-1 call (NOTES, group stations): the Cusseta-Chattahoochee unified government (9,566) is the whole county and Fort Moore has no place entry. On US-27 and GA-520; Cusseta is a town.
    { id: "RCHG", name: "Richland", county: "ga-chattahoochee-stewart-webster", lat: 32.09, lon: -84.66, type: "farm", size: 1, pop: 17, main: true, level: "middle" },
    // Butler (1,873, ahead of Ellaville, 1,594 and Buena Vista, 1,585): the Taylor seat on GA-96/GA-19.
    { id: "BUTL", name: "Butler", county: "ga-marion-schley-taylor", lat: 32.56, lon: -84.24, type: "farm", size: 1, pop: 20, main: true, level: "middle" },
    // Cuthbert (3,144): the Randolph seat on US-82 and GA-27.
    { id: "CTBT", name: "Cuthbert", county: "ga-clay-quitman-randolph", lat: 31.77, lon: -84.79, type: "farm", size: 1, pop: 12, main: true, level: "middle" },
    // Blakely (5,373, ahead of Morgan, 1,742 and Edison, 1,231): the Early seat on US-27/GA-62, the peanut monument.
    { id: "BKLY", name: "Blakely", county: "ga-baker-calhoun-early", lat: 31.38, lon: -84.93, type: "farm", size: 1, pop: 19, main: true, level: "middle" },
    // Americus (16,237): the Sumter seat on US-19 and Georgia Southwestern.
    { id: "AMRC", name: "Americus", county: "ga-sumter-terrell", lat: 32.07, lon: -84.22, type: "farm", size: 1, pop: 39, main: true, level: "middle" },
    // Macon (the Census name is Macon-Bibb, 157,347): at downtown on the Ocmulgee (Cherry Street); the Census point is 4 miles south-west. Bibb 157k, size 2.
    { id: "MACN", name: "Macon", county: "ga-bibb", lat: 32.84, lon: -83.63, type: "metro", size: 2, pop: 157, main: true, level: "middle" },
    // Warner Robins (80,365): Robins Air Force Base, the Houston seat is Perry (20,624). Houston 164k, size 2.
    { id: "WRBN", name: "Warner Robins", county: "ga-houston", lat: 32.60, lon: -83.65, type: "metro", size: 2, pop: 164, main: true, level: "middle" },
    // Fort Valley (8,788): the Peach seat on GA-49, Fort Valley State University and the peach packing sheds.
    { id: "FTVL", name: "Fort Valley", county: "ga-crawford-macon-peach", lat: 32.55, lon: -83.88, type: "farm", size: 1, pop: 52, main: true, level: "middle" },
    // Forsyth (4,508): the Monroe seat on I-75 north of Macon.
    { id: "FRSG", name: "Forsyth", county: "ga-jones-monroe", lat: 33.04, lon: -83.93, type: "farm", size: 1, pop: 56, main: true, level: "middle" },
    // Eatonton (6,307, ahead of Madison, 4,436): the Putnam seat on US-441, Lake Sinclair and the Joel Chandler Harris home.
    { id: "ETTN", name: "Eatonton", county: "ga-jasper-morgan-putnam", lat: 33.33, lon: -83.39, type: "farm", size: 1, pop: 57, main: true, level: "middle" },
    // Milledgeville (17,085): Georgia's capital until 1868 and the Baldwin seat on the Oconee.
    { id: "MLDG", name: "Milledgeville", county: "ga-baldwin", lat: 33.09, lon: -83.24, type: "farm", size: 1, pop: 44, main: true, level: "middle" },
    // Greensboro (3,645): the Greene seat on I-20 and Lake Oconee.
    { id: "GRNG", name: "Greensboro", county: "ga-greene-hancock-taliaferro", lat: 33.56, lon: -83.19, type: "farm", size: 1, pop: 29, main: true, level: "middle" },
    // Cochran (5,030): the Bleckley seat on US-23/129.
    { id: "CCHR", name: "Cochran", county: "ga-bleckley-twiggs-wilkinson", lat: 32.39, lon: -83.35, type: "farm", size: 1, pop: 29, main: true, level: "middle" },
    // Dublin (16,076): the Laurens seat on I-16 and the Oconee.
    { id: "DBLN", name: "Dublin", county: "ga-laurens", lat: 32.54, lon: -82.93, type: "farm", size: 1, pop: 50, main: true, level: "middle" },
    // Eastman (5,658), the phase-1 call (NOTES): the Dodge seat and hub of US-23/341, not McRae-Helena (6,257, a merged city of an odd name; McRae is a town).
    { id: "ESTM", name: "Eastman", county: "ga-dodge-pulaski-telfair", lat: 32.20, lon: -83.17, type: "farm", size: 1, pop: 42, main: true, level: "middle" },
    // Cordele (10,239): the Crisp seat on I-75, the watermelon capital.
    { id: "CRDL", name: "Cordele", county: "ga-crisp-dooly-wilcox", lat: 31.96, lon: -83.77, type: "farm", size: 1, pop: 40, main: true, level: "middle" },
    // Elberton (4,634): the Elbert seat, the granite capital of the world, by Lake Richard B. Russell.
    { id: "ELBR", name: "Elberton", county: "ga-elbert-lincoln-wilkes", lat: 34.11, lon: -82.87, type: "farm", size: 1, pop: 37, main: true, level: "middle" },
    // Thomson (6,811): the McDuffie seat on I-20 and US-78.
    { id: "THOM", name: "Thomson", county: "ga-glascock-mcduffie-warren", lat: 33.47, lon: -82.50, type: "farm", size: 1, pop: 30, main: true, level: "middle" },
    // Augusta (the Census name is Augusta-Richmond County, 202,077): the Savannah River city, home of the Masters and Fort Gordon. At downtown (Broad Street); the Census point is the middle of the consolidated city, 9 miles south-west. Richmond 207k, size 2.
    { id: "AUG", name: "Augusta", county: "ga-richmond", lat: 33.47, lon: -81.97, type: "metro", size: 2, pop: 207, main: true, level: "middle" },
    // Grovetown (15,572, ahead of Harlem, 3,571): the largest Census place in Columbia County (156k), an Augusta suburb on I-20 (Evans and Martinez are unincorporated and have no entry in places.json).
    { id: "GRVG", name: "Grovetown", county: "ga-columbia", lat: 33.45, lon: -82.21, type: "metro", size: 2, pop: 156, main: true, level: "middle" },
    // Sandersville (5,814): the Washington seat, kaolin country.
    { id: "SNDV", name: "Sandersville", county: "ga-jefferson-washington", lat: 32.98, lon: -82.81, type: "farm", size: 1, pop: 36, main: true, level: "middle" },
    // Waynesboro (5,798): the Burke seat on US-25, "the bird dog capital".
    { id: "WAYG", name: "Waynesboro", county: "ga-burke-jenkins-screven", lat: 33.09, lon: -82.01, type: "farm", size: 1, pop: 47, main: true, level: "middle" },
    // Swainsboro (7,427): the Emanuel seat on US-1/GA-80.
    { id: "SWNS", name: "Swainsboro", county: "ga-emanuel-johnson-treutlen", lat: 32.59, lon: -82.33, type: "farm", size: 1, pop: 38, main: true, level: "middle" },
    // Level: Savannah, the Coast & South Georgia
    // Savannah (147,774): the Chatham seat, Oglethorpe's 1733 city. At the historic district and the river front (City Hall); the Census point (32.02, -81.20) is the middle of the city limits, 8 miles south-west. Port of Savannah (Garden City, the third busiest U.S. container port) and Savannah/Hilton Head International Airport. Scenic for the Historic District. Chatham 295k, size 3 (as Clayton).
    { id: "SAV", name: "Savannah", county: "ga-chatham", lat: 32.08, lon: -81.09, port: "Port of Savannah", airport: "Savannah/Hilton Head International Airport", scenic: true, type: "coast", size: 3, pop: 295, main: true, level: "south" },
    // Rincon (10,942, ahead of Springfield, 2,707, the seat): a Savannah suburb on GA-21.
    { id: "RNCN", name: "Rincon", county: "ga-effingham", lat: 32.29, lon: -81.24, type: "metro", size: 1, pop: 65, main: true, level: "south" },
    // Richmond Hill (16,653): a Savannah suburb on I-95 and the Ogeechee, with Fort McAllister.
    { id: "RCHH", name: "Richmond Hill", county: "ga-bryan", lat: 31.90, lon: -81.31, type: "coast", size: 1, pop: 45, main: true, level: "south" },
    // Hinesville (34,889): the Liberty seat beside Fort Stewart, on US-84/I-95.
    { id: "HNSV", name: "Hinesville", county: "ga-liberty", lat: 31.83, lon: -81.62, type: "metro", size: 1, pop: 65, main: true, level: "south" },
    // Statesboro (33,434): Georgia Southern University, the Bulloch seat on US-301/US-80.
    { id: "STSB", name: "Statesboro", county: "ga-bulloch", lat: 32.44, lon: -81.78, type: "farm", size: 1, pop: 80, main: true, level: "south" },
    // Metter (4,001), the phase-1 call (NOTES): on I-16 and the rail line, not Glennville (5,268), the larger but off I-16.
    { id: "MTTR", name: "Metter", county: "ga-candler-evans-tattnall", lat: 32.39, lon: -82.06, type: "farm", size: 1, pop: 46, main: true, level: "south" },
    // Vidalia (10,778): the sweet onion capital on US-1/US-280.
    { id: "VIDA", name: "Vidalia", county: "ga-montgomery-toombs-wheeler", lat: 32.21, lon: -82.40, type: "farm", size: 1, pop: 43, main: true, level: "south" },
    // Jesup (9,815): the Wayne seat on US-341/US-301 and the CSX line.
    { id: "JSUP", name: "Jesup", county: "ga-long-mcintosh-wayne", lat: 31.59, lon: -81.90, type: "farm", size: 1, pop: 57, main: true, level: "south" },
    // Brunswick (15,214): the Glynn seat on the Brunswick River, the gateway to St. Simons and Jekyll Islands. At downtown (Newcastle Street); the Census point is 2 miles east. Port of Brunswick (the main U.S. roll-on/roll-off auto port). Glynn 85k, size 2.
    { id: "BRWK", name: "Brunswick", county: "ga-glynn", lat: 31.15, lon: -81.49, port: "Port of Brunswick", type: "coast", size: 2, pop: 85, main: true, level: "south" },
    // St. Marys (18,469, a few hundred ahead of Kingsland, 18,243, on I-95): the Florida-line port and the gateway to Cumberland Island National Seashore by ferry; Kingsland is a town. Scenic.
    { id: "STMR", name: "St. Marys", county: "ga-camden", lat: 30.75, lon: -81.57, scenic: true, type: "coast", size: 1, pop: 55, main: true, level: "south" },
    // Folkston (4,522): the Charlton seat on US-1/US-23, the CSX Folkston Funnel, and the east gate of the Okefenokee.
    { id: "FLKS", name: "Folkston", county: "ga-brantley-charlton-pierce", lat: 30.84, lon: -82.01, type: "farm", size: 1, pop: 50, main: true, level: "south" },
    // Waycross (13,944): the CSX rail city and the Ware seat, gateway to the Okefenokee Swamp.
    { id: "WYCR", name: "Waycross", county: "ga-clinch-echols-ware", lat: 31.21, lon: -82.36, type: "farm", size: 1, pop: 47, main: true, level: "south" },
    // Baxley (4,990): the Appling seat on US-1/US-341.
    { id: "BXLY", name: "Baxley", county: "ga-appling-bacon-jeff-davis", lat: 31.76, lon: -82.35, type: "farm", size: 1, pop: 44, main: true, level: "south" },
    // Douglas (11,729): the Coffee seat on US-441/GA-32.
    { id: "DGLS", name: "Douglas", county: "ga-atkinson-coffee", lat: 31.51, lon: -82.85, type: "farm", size: 1, pop: 51, main: true, level: "south" },
    // Adel (5,575): the Cook seat on I-75.
    { id: "ADEL", name: "Adel", county: "ga-berrien-cook-lanier", lat: 31.12, lon: -83.43, type: "farm", size: 1, pop: 45, main: true, level: "south" },
    // Moultrie (14,635): the Colquitt seat on US-319 and the Sunbelt Expo.
    { id: "MLTR", name: "Moultrie", county: "ga-brooks-colquitt", lat: 31.18, lon: -83.79, type: "farm", size: 1, pop: 62, main: true, level: "south" },
    // Valdosta (55,389): the Lowndes seat on I-75 and Valdosta State University. At downtown; the Census point is 1 mile north. Lowndes 118k.
    { id: "VLDS", name: "Valdosta", county: "ga-lowndes", lat: 30.83, lon: -83.28, type: "metro", size: 2, pop: 118, main: true, level: "south" },
    // Thomasville (18,875): the City of Roses on US-19/US-319, the Thomas seat.
    { id: "TMSV", name: "Thomasville", county: "ga-thomas", lat: 30.84, lon: -83.98, type: "farm", size: 1, pop: 46, main: true, level: "south" },
    // Tifton (17,061): the Tift seat on I-75 and the Georgia Museum of Agriculture.
    { id: "TFTN", name: "Tifton", county: "ga-tift", lat: 31.46, lon: -83.52, type: "farm", size: 1, pop: 41, main: true, level: "south" },
    // Sylvester (5,628, ahead of Leesburg, 3,483, Lee's seat beside Albany): the Worth seat on US-82/US-19.
    { id: "SLVS", name: "Sylvester", county: "ga-lee-worth", lat: 31.53, lon: -83.83, type: "farm", size: 1, pop: 54, main: true, level: "south" },
    // Albany (69,652): the Dougherty seat on the Flint River, the biggest city of south-west Georgia (86k, size 2 as the cities of this size in the other packs). At downtown (Pine Avenue); the Census point is 1 mile west.
    { id: "ALBG", name: "Albany", county: "ga-dougherty", lat: 31.58, lon: -84.16, type: "metro", size: 2, pop: 86, main: true, level: "south" },
    // Fitzgerald (9,023): the Ben Hill seat on US-129/GA-107.
    { id: "FTZG", name: "Fitzgerald", county: "ga-ben-hill-irwin-turner", lat: 31.71, lon: -83.25, type: "farm", size: 1, pop: 36, main: true, level: "south" },
    // Cairo (10,183, ahead of Camilla, 5,192): the Grady seat on US-84/US-19.
    { id: "CAIG", name: "Cairo", county: "ga-grady-mitchell", lat: 30.88, lon: -84.21, type: "farm", size: 1, pop: 48, main: true, level: "south" },
    // Bainbridge (14,506): the Decatur seat on the Flint and Lake Seminole, on US-84/US-27.
    { id: "BNBR", name: "Bainbridge", county: "ga-decatur-miller-seminole", lat: 30.91, lon: -84.57, type: "farm", size: 1, pop: 45, main: true, level: "south" },
  ],
  // Towns: appear over time inside counties you own. About 1.5 per region, the biggest places that are not main stations
  // (Census 2020: packs/GA/raw/places.json), kept about 4 miles from every station and other town, plus the real scenic places
  // (scenic: true; sources in NOTES.md). Places on the Census list keep the Census point except where a comment says so.
  towns: [
    // Metro Atlanta, the west and the south of the metro
    // Atlanta (fulton)
    { id: "SNDY", name: "Sandy Springs", county: "ga-fulton", lat: 33.93, lon: -84.37, type: "metro", size: 2 },
    { id: "RSWL", name: "Roswell", county: "ga-fulton", lat: 34.04, lon: -84.35, type: "metro", size: 2 },
    { id: "STHF", name: "South Fulton", county: "ga-fulton", lat: 33.64, lon: -84.58, type: "metro", size: 2 },
    { id: "ALPH", name: "Alpharetta", county: "ga-fulton", lat: 34.07, lon: -84.27, type: "metro", size: 2 },
    { id: "JHNS", name: "Johns Creek", county: "ga-fulton", lat: 34.03, lon: -84.2, type: "metro", size: 2 },
    { id: "CLLG", name: "College Park", county: "ga-fulton", lat: 33.64, lon: -84.46, type: "metro", size: 1 },
    // Decatur (dekalb)
    { id: "STNC", name: "Stonecrest", county: "ga-dekalb", lat: 33.68, lon: -84.15, type: "metro", size: 2 },
    { id: "BROB", name: "Brookhaven", county: "ga-dekalb", lat: 33.86, lon: -84.34, type: "metro", size: 2 },
    { id: "TCKR", name: "Tucker", county: "ga-dekalb", lat: 33.85, lon: -84.2, type: "metro", size: 1 },
    // Stone Mountain: scenic: Stone Mountain Park (the granite dome and Confederate memorial carving, the state's most visited park); placed at the mountain, 3 miles east of the city's Census point, so that it stays 4 miles from Tucker
    { id: "STNM", name: "Stone Mountain", county: "ga-dekalb", lat: 33.8, lon: -84.14, scenic: true, type: "metro", size: 1 },
    // Marietta (cobb)
    { id: "SMYS", name: "Smyrna", county: "ga-cobb", lat: 33.86, lon: -84.52, type: "metro", size: 2 },
    { id: "KENN", name: "Kennesaw", county: "ga-cobb", lat: 34.03, lon: -84.62, type: "metro", size: 1 },
    { id: "PWDR", name: "Powder Springs", county: "ga-cobb", lat: 33.86, lon: -84.68, type: "metro", size: 1 },
    // Lawrenceville (gwinnett)
    { id: "PCCH", name: "Peachtree Corners", county: "ga-gwinnett", lat: 33.97, lon: -84.23, type: "metro", size: 1 },
    { id: "SWN", name: "Suwanee", county: "ga-gwinnett", lat: 34.05, lon: -84.07, type: "metro", size: 1 },
    { id: "SNLL", name: "Snellville", county: "ga-gwinnett", lat: 33.86, lon: -84.01, type: "metro", size: 1 },
    { id: "BFRD", name: "Buford", county: "ga-gwinnett", lat: 34.12, lon: -83.99, type: "metro", size: 1 },
    { id: "LLBR", name: "Lilburn", county: "ga-gwinnett", lat: 33.89, lon: -84.14, type: "metro", size: 1 },
    // Forest Park (clayton)
    { id: "RVRD", name: "Riverdale", county: "ga-clayton", lat: 33.56, lon: -84.41, type: "metro", size: 1 },
    { id: "LVJY", name: "Lovejoy", county: "ga-clayton", lat: 33.44, lon: -84.32, type: "metro", size: 1 },
    { id: "JONE", name: "Jonesboro", county: "ga-clayton", lat: 33.52, lon: -84.35, type: "metro", size: 1 },
    // Stockbridge (henry)
    { id: "MCDN", name: "McDonough", county: "ga-henry", lat: 33.44, lon: -84.15, type: "metro", size: 1 },
    { id: "LCST", name: "Locust Grove", county: "ga-henry", lat: 33.35, lon: -84.1, type: "metro", size: 1 },
    { id: "HAMP", name: "Hampton", county: "ga-henry", lat: 33.38, lon: -84.3, type: "metro", size: 1 },
    // Woodstock (cherokee)
    { id: "CANC", name: "Canton", county: "ga-cherokee", lat: 34.25, lon: -84.49, type: "metro", size: 1 },
    { id: "HLLY", name: "Holly Springs", county: "ga-cherokee", lat: 34.17, lon: -84.48, type: "metro", size: 1 },
    { id: "BLLG", name: "Ball Ground", county: "ga-cherokee", lat: 34.34, lon: -84.37, type: "metro", size: 1 },
    // Peachtree City (fayette)
    { id: "FAYF", name: "Fayetteville", county: "ga-fayette", lat: 33.45, lon: -84.47, type: "metro", size: 1 },
    { id: "TYRN", name: "Tyrone", county: "ga-fayette", lat: 33.48, lon: -84.59, type: "metro", size: 1 },
    // Covington (newton)
    { id: "MANM", name: "Mansfield", county: "ga-newton", lat: 33.52, lon: -83.73, type: "metro", size: 1 },
    // Dallas (paulding)
    { id: "HIRA", name: "Hiram", county: "ga-paulding", lat: 33.89, lon: -84.75, type: "metro", size: 1 },
    // Winder (barrow)
    { id: "BRSL", name: "Braselton", county: "ga-barrow", lat: 34.11, lon: -83.81, type: "metro", size: 1 },
    { id: "ABRN", name: "Auburn", county: "ga-barrow", lat: 34.02, lon: -83.83, type: "metro", size: 1 },
    // Gainesville (hall)
    { id: "FLWR", name: "Flowery Branch", county: "ga-hall", lat: 34.17, lon: -83.92, type: "metro", size: 1 },
    { id: "OKWD", name: "Oakwood", county: "ga-hall", lat: 34.22, lon: -83.88, type: "metro", size: 1 },
    { id: "LULA", name: "Lula", county: "ga-hall", lat: 34.4, lon: -83.66, type: "farm", size: 1 },
    // Newnan (coweta)
    { id: "SENO", name: "Senoia", county: "ga-coweta", lat: 33.31, lon: -84.55, type: "farm", size: 1 },
    { id: "GRAG", name: "Grantville", county: "ga-coweta", lat: 33.24, lon: -84.83, type: "farm", size: 1 },
    // Monroe (walton)
    { id: "LGNV", name: "Loganville", county: "ga-walton", lat: 33.84, lon: -83.9, type: "metro", size: 1 },
    { id: "SCLC", name: "Social Circle", county: "ga-walton", lat: 33.65, lon: -83.71, type: "farm", size: 1 },
    // Carrollton (carroll)
    { id: "VLLR", name: "Villa Rica", county: "ga-carroll", lat: 33.73, lon: -84.92, type: "metro", size: 1 },
    { id: "TEMP", name: "Temple", county: "ga-carroll", lat: 33.73, lon: -85.03, type: "farm", size: 1 },
    { id: "BWDN", name: "Bowdon", county: "ga-carroll", lat: 33.54, lon: -85.25, type: "farm", size: 1 },
    // Cartersville (bartow)
    { id: "ADRS", name: "Adairsville", county: "ga-bartow", lat: 34.37, lon: -84.92, type: "farm", size: 1 },
    { id: "EHRL", name: "Euharlee", county: "ga-bartow", lat: 34.14, lon: -84.93, type: "farm", size: 1 },
    { id: "WHIW", name: "White", county: "ga-bartow", lat: 34.28, lon: -84.75, type: "farm", size: 1 },
    // Barnesville (butts-lamar)
    { id: "JACJ", name: "Jackson", county: "ga-butts-lamar", lat: 33.29, lon: -83.97, type: "farm", size: 1 },
    // LaGrange (troup)
    { id: "WPST", name: "West Point", county: "ga-troup", lat: 32.9, lon: -85.14, type: "farm", size: 1 },
    { id: "HGNS", name: "Hogansville", county: "ga-troup", lat: 33.17, lon: -84.9, type: "farm", size: 1 },
    // Franklin (heard)
    { id: "CENC", name: "Centralhatchee", county: "ga-heard", lat: 33.37, lon: -85.1, type: "farm", size: 1 },
    // Thomaston (pike-upson)
    { id: "ZBLN", name: "Zebulon", county: "ga-pike-upson", lat: 33.09, lon: -84.34, type: "farm", size: 1 },
    // North Georgia: the mountains, the northwest and the northeast
    // Calhoun (gordon)
    { id: "RSC", name: "Resaca", county: "ga-gordon", lat: 34.58, lon: -84.94, type: "farm", size: 1 },
    { id: "FAIF", name: "Fairmount", county: "ga-gordon", lat: 34.44, lon: -84.7, type: "farm", size: 1 },
    // Dalton (whitfield)
    { id: "VRNL", name: "Varnell", county: "ga-whitfield", lat: 34.9, lon: -84.97, type: "farm", size: 1 },
    { id: "TNNL", name: "Tunnel Hill", county: "ga-whitfield", lat: 34.86, lon: -85.04, type: "farm", size: 1 },
    { id: "CHTT", name: "Cohutta", county: "ga-whitfield", lat: 34.96, lon: -84.97, type: "farm", size: 1 },
    // Fort Oglethorpe (catoosa)
    { id: "RNGG", name: "Ringgold", county: "ga-catoosa", lat: 34.91, lon: -85.12, type: "mountain", size: 1 },
    // LaFayette (walker)
    // Lookout Mountain: scenic: Rock City Gardens and the Battles for Chattanooga overlook, on Lookout Mountain, Georgia
    { id: "LKTM", name: "Lookout Mountain", county: "ga-walker", lat: 34.97, lon: -85.36, scenic: true, type: "mountain", size: 1 },
    { id: "CHCK", name: "Chickamauga", county: "ga-walker", lat: 34.88, lon: -85.29, type: "farm", size: 1 },
    // Summerville (chattooga)
    { id: "TRN", name: "Trion", county: "ga-chattooga", lat: 34.55, lon: -85.31, type: "farm", size: 1 },
    // Rome (floyd)
    { id: "CVSP", name: "Cave Spring", county: "ga-floyd", lat: 34.11, lon: -85.34, type: "farm", size: 1 },
    // Cedartown (haralson-polk)
    { id: "BREM", name: "Bremen", county: "ga-haralson-polk", lat: 33.71, lon: -85.15, type: "farm", size: 1 },
    { id: "RCKM", name: "Rockmart", county: "ga-haralson-polk", lat: 34.01, lon: -85.05, type: "farm", size: 1 },
    // Jasper (gilmer-pickens)
    { id: "ELLJ", name: "Ellijay", county: "ga-gilmer-pickens", lat: 34.69, lon: -84.48, type: "mountain", size: 1 },
    // Blue Ridge (fannin-union)
    // Brasstown Bald: scenic: Georgia's highest point (4,784 ft), in the Chattahoochee National Forest; on the Towns-Union line, moved 1 km west so that it sits in the Union half of the region
    { id: "BRSS", name: "Brasstown Bald", county: "ga-fannin-union", lat: 34.87, lon: -83.82, scenic: true, type: "mountain", size: 1 },
    // Cleveland (towns-white)
    { id: "HWSS", name: "Hiawassee", county: "ga-towns-white", lat: 34.95, lon: -83.75, type: "mountain", size: 1 },
    // Helen: scenic: the Alpine-style Bavarian village on the Chattahoochee (Unicoi State Park, Anna Ruby Falls)
    { id: "HELE", name: "Helen", county: "ga-towns-white", lat: 34.71, lon: -83.73, scenic: true, type: "mountain", size: 1 },
    // Cornelia (habersham-rabun)
    // Tallulah Gorge: scenic: Tallulah Gorge State Park (a two-mile gorge, 1,000 ft deep, and Karl Wallenda's 1970 wire walk)
    { id: "TLLL", name: "Tallulah Gorge", county: "ga-habersham-rabun", lat: 34.74, lon: -83.39, scenic: true, type: "mountain", size: 1 },
    { id: "CLAY", name: "Clayton", county: "ga-habersham-rabun", lat: 34.88, lon: -83.4, type: "mountain", size: 1 },
    // Toccoa (banks-stephens)
    { id: "MAYM", name: "Maysville", county: "ga-banks-stephens", lat: 34.26, lon: -83.55, type: "mountain", size: 1 },
    // Hartwell (franklin-hart)
    { id: "RYST", name: "Royston", county: "ga-franklin-hart", lat: 34.29, lon: -83.11, type: "farm", size: 1 },
    // Dahlonega (dawson-lumpkin)
    // Amicalola Falls: scenic: Amicalola Falls State Park (729 ft, the tallest cascading waterfall in Georgia) and the approach trail to the Appalachian Trail
    { id: "AMCL", name: "Amicalola Falls", county: "ga-dawson-lumpkin", lat: 34.56, lon: -84.25, scenic: true, type: "mountain", size: 1 },
    // Jefferson (jackson)
    { id: "CMMR", name: "Commerce", county: "ga-jackson", lat: 34.21, lon: -83.48, type: "farm", size: 1 },
    { id: "ARCA", name: "Arcade", county: "ga-jackson", lat: 34.07, lon: -83.53, type: "farm", size: 1 },
    // Comer (madison-oglethorpe)
    { id: "CRWF", name: "Crawford", county: "ga-madison-oglethorpe", lat: 33.88, lon: -83.16, type: "farm", size: 1 },
    // Athens (clarke)
    { id: "WNTR", name: "Winterville", county: "ga-clarke", lat: 33.97, lon: -83.28, type: "farm", size: 1 },
    // Watkinsville (oconee)
    { id: "BGRT", name: "Bogart", county: "ga-oconee", lat: 33.95, lon: -83.53, type: "metro", size: 1 },
    // Middle Georgia: Macon, Columbus, Augusta and the Piedmont
    // Manchester (harris-meriwether-talbot)
    // Callaway Gardens: scenic: Callaway Gardens (Pine Mountain, a 13,000-acre garden resort and the Cason J. Callaway Memorial Chapel)
    { id: "CLLW", name: "Callaway Gardens", county: "ga-harris-meriwether-talbot", lat: 32.84, lon: -84.85, scenic: true, type: "farm", size: 1 },
    // Warm Springs: scenic: Franklin D. Roosevelt's Little White House (a Georgia State Historic Site); moved 1 mile west of the Census point to stay 4 miles from Manchester
    { id: "WRMS", name: "Warm Springs", county: "ga-harris-meriwether-talbot", lat: 32.89, lon: -84.7, scenic: true, type: "farm", size: 1 },
    // Richland (chattahoochee-stewart-webster)
    // Providence Canyon: scenic: Providence Canyon State Park, 'Georgia's Little Grand Canyon' (eroded farmland canyons in Stewart County)
    { id: "PRVD", name: "Providence Canyon", county: "ga-chattahoochee-stewart-webster", lat: 32.07, lon: -84.92, scenic: true, type: "farm", size: 1 },
    // Cusseta: the Chattahoochee County seat, at the town (the Census point is the county's middle, at Fort Moore); a place the phase-1 review named
    { id: "CSST", name: "Cusseta", county: "ga-chattahoochee-stewart-webster", lat: 32.31, lon: -84.77, type: "farm", size: 1 },
    // Preston: the Webster County seat, at the town (the Census point is a mile and a half off); named by the phase-1 review
    { id: "PRES", name: "Preston", county: "ga-chattahoochee-stewart-webster", lat: 32.06, lon: -84.54, type: "farm", size: 1 },
    { id: "LMPK", name: "Lumpkin", county: "ga-chattahoochee-stewart-webster", lat: 32.05, lon: -84.8, type: "farm", size: 1 },
    // Butler (marion-schley-taylor)
    { id: "ELLV", name: "Ellaville", county: "ga-marion-schley-taylor", lat: 32.24, lon: -84.31, type: "farm", size: 1 },
    // Cuthbert (clay-quitman-randolph)
    // Georgetown: the Quitman County seat on the Chattahoochee; moved 3 miles east of the town, inside the county, to stay about 5 miles from Alabama's Eufaula station
    { id: "GEOG", name: "Georgetown", county: "ga-clay-quitman-randolph", lat: 31.87, lon: -85.06, type: "farm", size: 1 },
    { id: "FRTG", name: "Fort Gaines", county: "ga-clay-quitman-randolph", lat: 31.63, lon: -85.06, type: "farm", size: 1 },
    // Blakely (baker-calhoun-early)
    { id: "MORX", name: "Morgan", county: "ga-baker-calhoun-early", lat: 31.54, lon: -84.6, type: "farm", size: 1 },
    // Americus (sumter-terrell)
    // Plains: scenic: Jimmy Carter National Historical Park (his boyhood home, the train depot campaign headquarters)
    { id: "PLNS", name: "Plains", county: "ga-sumter-terrell", lat: 32.03, lon: -84.39, scenic: true, type: "farm", size: 1 },
    // Andersonville: scenic: Andersonville National Historic Site (the Civil War prison camp and the National Prisoner of War Museum)
    { id: "ANDE", name: "Andersonville", county: "ga-sumter-terrell", lat: 32.2, lon: -84.15, scenic: true, type: "farm", size: 1 },
    { id: "DWSN", name: "Dawson", county: "ga-sumter-terrell", lat: 31.77, lon: -84.44, type: "farm", size: 1 },
    // Warner Robins (houston)
    { id: "PERR", name: "Perry", county: "ga-houston", lat: 32.47, lon: -83.73, type: "farm", size: 1 },
    // Fort Valley (crawford-macon-peach)
    { id: "BYRO", name: "Byron", county: "ga-crawford-macon-peach", lat: 32.65, lon: -83.75, type: "farm", size: 1 },
    // Forsyth (jones-monroe)
    { id: "GRY", name: "Gray", county: "ga-jones-monroe", lat: 33, lon: -83.54, type: "farm", size: 1 },
    // Eatonton (jasper-morgan-putnam)
    { id: "MADM", name: "Madison", county: "ga-jasper-morgan-putnam", lat: 33.58, lon: -83.48, type: "farm", size: 1 },
    { id: "MONM", name: "Monticello", county: "ga-jasper-morgan-putnam", lat: 33.3, lon: -83.69, type: "farm", size: 1 },
    // Greensboro (greene-hancock-taliaferro)
    { id: "UNNP", name: "Union Point", county: "ga-greene-hancock-taliaferro", lat: 33.62, lon: -83.08, type: "farm", size: 1 },
    // Cochran (bleckley-twiggs-wilkinson)
    { id: "GORD", name: "Gordon", county: "ga-bleckley-twiggs-wilkinson", lat: 32.89, lon: -83.33, type: "farm", size: 1 },
    // Dublin (laurens)
    { id: "CDWL", name: "Cadwell", county: "ga-laurens", lat: 32.34, lon: -83.04, type: "farm", size: 1 },
    // Eastman (dodge-pulaski-telfair)
    // McRae: the 'McRae-Helena' city, at the Census point
    { id: "MCR", name: "McRae", county: "ga-dodge-pulaski-telfair", lat: 32.06, lon: -82.9, type: "farm", size: 1 },
    // Cordele (crisp-dooly-wilcox)
    { id: "UNDL", name: "Unadilla", county: "ga-crisp-dooly-wilcox", lat: 32.26, lon: -83.74, type: "farm", size: 1 },
    // Elberton (elbert-lincoln-wilkes)
    { id: "WASW", name: "Washington", county: "ga-elbert-lincoln-wilkes", lat: 33.73, lon: -82.74, type: "farm", size: 1 },
    // Thomson (glascock-mcduffie-warren)
    { id: "WARW", name: "Warrenton", county: "ga-glascock-mcduffie-warren", lat: 33.41, lon: -82.67, type: "farm", size: 1 },
    // Augusta (richmond)
    { id: "HPHZ", name: "Hephzibah", county: "ga-richmond", lat: 33.29, lon: -82.1, type: "metro", size: 1 },
    { id: "BLYT", name: "Blythe", county: "ga-richmond", lat: 33.3, lon: -82.21, type: "farm", size: 1 },
    // Grovetown (columbia)
    { id: "HRLM", name: "Harlem", county: "ga-columbia", lat: 33.44, lon: -82.32, type: "farm", size: 1 },
    // Sandersville (jefferson-washington)
    { id: "LOUL", name: "Louisville", county: "ga-jefferson-washington", lat: 32.99, lon: -82.4, type: "farm", size: 1 },
    // Waynesboro (burke-jenkins-screven)
    { id: "MLLN", name: "Millen", county: "ga-burke-jenkins-screven", lat: 32.81, lon: -81.94, type: "farm", size: 1 },
    // Swainsboro (emanuel-johnson-treutlen)
    { id: "WRGH", name: "Wrightsville", county: "ga-emanuel-johnson-treutlen", lat: 32.73, lon: -82.72, type: "farm", size: 1 },
    // The coast, Savannah and south Georgia
    // Savannah (chatham)
    { id: "PLR", name: "Pooler", county: "ga-chatham", lat: 32.11, lon: -81.26, type: "metro", size: 1 },
    { id: "PRTW", name: "Port Wentworth", county: "ga-chatham", lat: 32.19, lon: -81.21, type: "metro", size: 1 },
    { id: "GCRD", name: "Garden City", county: "ga-chatham", lat: 32.09, lon: -81.18, type: "metro", size: 1 },
    // Tybee Island: scenic: the Atlantic beach, with the Tybee Island Light Station, 15 miles east of Savannah
    { id: "TYBS", name: "Tybee Island", county: "ga-chatham", lat: 32.01, lon: -80.86, scenic: true, type: "coast", size: 1 },
    // Rincon (effingham)
    { id: "SPRS", name: "Springfield", county: "ga-effingham", lat: 32.36, lon: -81.3, type: "farm", size: 1 },
    { id: "GYTN", name: "Guyton", county: "ga-effingham", lat: 32.33, lon: -81.39, type: "farm", size: 1 },
    // Richmond Hill (bryan)
    { id: "PMBR", name: "Pembroke", county: "ga-bryan", lat: 32.14, lon: -81.62, type: "farm", size: 1 },
    // Hinesville (liberty)
    { id: "WLTH", name: "Walthourville", county: "ga-liberty", lat: 31.77, lon: -81.62, type: "farm", size: 1 },
    { id: "MDWY", name: "Midway", county: "ga-liberty", lat: 31.8, lon: -81.42, type: "coast", size: 1 },
    // Statesboro (bulloch)
    { id: "BROG", name: "Brooklet", county: "ga-bulloch", lat: 32.39, lon: -81.67, type: "farm", size: 1 },
    { id: "PORP", name: "Portal", county: "ga-bulloch", lat: 32.54, lon: -81.93, type: "farm", size: 1 },
    // Metter (candler-evans-tattnall)
    { id: "GLNN", name: "Glennville", county: "ga-candler-evans-tattnall", lat: 31.94, lon: -81.93, type: "farm", size: 1 },
    // Vidalia (montgomery-toombs-wheeler)
    { id: "LYNS", name: "Lyons", county: "ga-montgomery-toombs-wheeler", lat: 32.2, lon: -82.32, type: "farm", size: 1 },
    // Jesup (long-mcintosh-wayne)
    { id: "LDWC", name: "Ludowici", county: "ga-long-mcintosh-wayne", lat: 31.71, lon: -81.74, type: "farm", size: 1 },
    { id: "DRN", name: "Darien", county: "ga-long-mcintosh-wayne", lat: 31.34, lon: -81.42, type: "coast", size: 1 },
    // Brunswick (glynn)
    // St. Simons Island: scenic: the Golden Isles' main island (the St. Simons Island Light, Fort Frederica National Monument), reached by the F.J. Torras Causeway; not in the Census list as a place (a CDP with no figure)
    { id: "STSM", name: "St. Simons Island", county: "ga-glynn", lat: 31.18, lon: -81.39, scenic: true, type: "coast", size: 1 },
    // Jekyll Island: scenic: the Jekyll Island Club National Historic Landmark District (the millionaires' winter colony) and the state park, reached by the Jekyll Island Causeway
    { id: "JKYL", name: "Jekyll Island", county: "ga-glynn", lat: 31.06, lon: -81.42, scenic: true, type: "coast", size: 1 },
    // St. Marys (camden)
    // Kingsland: 18,243: just behind St. Marys (the main station), on I-95 and the Georgia end of the Okefenokee and Cumberland Island road
    { id: "KINK", name: "Kingsland", county: "ga-camden", lat: 30.85, lon: -81.79, type: "coast", size: 1 },
    { id: "WDBN", name: "Woodbine", county: "ga-camden", lat: 30.96, lon: -81.72, type: "coast", size: 1 },
    // Folkston (brantley-charlton-pierce)
    // Okefenokee Swamp: scenic: Stephen C. Foster State Park, the swamp's western entrance in the Okefenokee National Wildlife Refuge (the largest blackwater swamp in North America)
    { id: "OKFN", name: "Okefenokee Swamp", county: "ga-brantley-charlton-pierce", lat: 30.83, lon: -82.36, scenic: true, type: "farm", size: 1 },
    // Waycross (clinch-echols-ware)
    // Statenville: the Echols County seat near the Florida line; named by the phase-1 review
    { id: "STTN", name: "Statenville", county: "ga-clinch-echols-ware", lat: 30.7, lon: -83.03, type: "farm", size: 1 },
    { id: "HMRV", name: "Homerville", county: "ga-clinch-echols-ware", lat: 31.04, lon: -82.74, type: "farm", size: 1 },
    // Baxley (appling-bacon-jeff-davis)
    { id: "HAZL", name: "Hazlehurst", county: "ga-appling-bacon-jeff-davis", lat: 31.86, lon: -82.6, type: "farm", size: 1 },
    // Douglas (atkinson-coffee)
    { id: "NCHL", name: "Nicholls", county: "ga-atkinson-coffee", lat: 31.52, lon: -82.64, type: "farm", size: 1 },
    // Adel (berrien-cook-lanier)
    { id: "NASN", name: "Nashville", county: "ga-berrien-cook-lanier", lat: 31.21, lon: -83.25, type: "farm", size: 1 },
    // Moultrie (brooks-colquitt)
    { id: "QUIT", name: "Quitman", county: "ga-brooks-colquitt", lat: 30.78, lon: -83.56, type: "farm", size: 1 },
    { id: "NRMN", name: "Norman Park", county: "ga-brooks-colquitt", lat: 31.27, lon: -83.68, type: "farm", size: 1 },
    // Valdosta (lowndes)
    { id: "HHR", name: "Hahira", county: "ga-lowndes", lat: 31, lon: -83.38, type: "farm", size: 1 },
    { id: "LPK", name: "Lake Park", county: "ga-lowndes", lat: 30.69, lon: -83.19, type: "farm", size: 1 },
    // Thomasville (thomas)
    { id: "BSTN", name: "Boston", county: "ga-thomas", lat: 30.79, lon: -83.79, type: "farm", size: 1 },
    // Tifton (tift)
    { id: "OMG", name: "Omega", county: "ga-tift", lat: 31.34, lon: -83.59, type: "farm", size: 1 },
    // Sylvester (lee-worth)
    { id: "LSBR", name: "Leesburg", county: "ga-lee-worth", lat: 31.73, lon: -84.17, type: "farm", size: 1 },
    // Fitzgerald (ben-hill-irwin-turner)
    { id: "ASHB", name: "Ashburn", county: "ga-ben-hill-irwin-turner", lat: 31.71, lon: -83.65, type: "farm", size: 1 },
    // Cairo (grady-mitchell)
    { id: "CMLL", name: "Camilla", county: "ga-grady-mitchell", lat: 31.23, lon: -84.21, type: "farm", size: 1 },
    // Bainbridge (decatur-miller-seminole)
    { id: "DNLS", name: "Donalsonville", county: "ga-decatur-miller-seminole", lat: 31.04, lon: -84.88, type: "farm", size: 1 },
  ],
  // Real passes, canyons and gaps: [name, latitude, longitude]. The Blue Ridge on the map is a thin strip of mountains along the
  // Tennessee and North Carolina lines (the map's mountains do not go below about 2,000 ft elsewhere in Georgia), so only the well-known
  // gaps of the roads that cross it are listed (sources in NOTES.md).
  passes: [
    ["Neels Gap (US-19/129)", 34.74, -83.92],
    ["Unicoi Gap (GA-17/75)", 34.76, -83.72],
    ["Dicks Creek Gap (US-76)", 34.88, -83.8],
    ["Woody Gap (GA-60)", 34.68, -84.0],
    ["Hogpen Gap (GA-348)", 34.72, -83.81],
    ["Rabun Gap (US-23/441)", 34.96, -83.39],
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge (cheaper, and any length);
  // anywhere else you build a new bridge, if the water is narrow enough. Points are the well-known crossings, on the map's
  // lakes and rivers where they pass a main station (sources in NOTES.md); the map's lake outlines are simplified, so a point can sit
  // a mile or two off the real structure.
  bridges: [
    // Lake Lanier (the Chattahoochee and the Chestatee arms): the dam and the road bridges from south to north
    ["Buford Dam (GA-20)", 34.16, -84.07],
    ["Browns Bridge (GA-369)", 34.25, -83.99],
    ["Dawsonville Highway bridge (GA-53)", 34.31, -83.95],
    ["Thompson Bridge (GA-60)", 34.34, -83.89],
    ["Keith Bridge (GA-306)", 34.36, -83.99],
    ["Belton Bridge (Chattahoochee arm)", 34.4, -83.89],
    // The Savannah River dams (Hartwell, Richard B. Russell, J. Strom Thurmond: the Georgia-South Carolina line), Lake Allatoona, Lake Chatuge, Lake Sinclair
    ["Hartwell Dam (US-29)", 34.36, -82.82],
    ["Richard B. Russell Dam (GA-72)", 34.03, -82.6],
    ["J. Strom Thurmond Dam (US-221)", 33.66, -82.2],
    ["Allatoona Dam (Cartersville)", 34.16, -84.73],
    ["Highway 92 bridge (Lake Allatoona, Acworth)", 34.1, -84.62],
    ["Lake Chatuge bridge (US-76, Hiawassee)", 34.95, -83.78],
    ["Sinclair Dam (GA-212)", 33.14, -83.2],
    // The Chattahoochee: Atlanta, West Point, Columbus, Lake Walter F. George, Fort Gaines and Lake Seminole
    ["Chattahoochee River bridge (I-75, Cobb-Atlanta)", 33.86, -84.46],
    ["Chattahoochee River bridge (I-20, west Atlanta)", 33.75, -84.57],
    ["Chattahoochee River bridge (GA-400, Sandy Springs-Alpharetta)", 33.99, -84.27],
    ["Chattahoochee River bridge (I-85, West Point)", 32.87, -85.17],
    ["Dillingham Street Bridge (Columbus-Phenix City)", 32.47, -85],
    ["Eufaula bridge (US-82, Lake Walter F. George)", 31.9, -85.12],
    ["Walter F. George Dam road (Fort Gaines-Abbeville)", 31.63, -85.06],
    ["Lake Seminole bridge (US-84, Bainbridge)", 30.9, -84.59],
    // The Flint, the Ocmulgee, the Oconee, the Altamaha
    ["Flint River bridge (US-82, Albany)", 31.58, -84.15],
    ["Otis Redding Bridge (Ocmulgee River, Macon)", 32.84, -83.62],
    ["Ocmulgee River bridge (US-129, Hawkinsville)", 32.28, -83.47],
    ["Oconee River bridge (US-78, Athens)", 33.94, -83.4],
    ["Oconee River bridge (US-441, Athens)", 33.9, -83.39],
    ["Oconee River bridge (I-20, Greensboro)", 33.57, -83.27],
    ["Oconee River bridge (US-441, Milledgeville)", 33.09, -83.22],
    ["Oconee River bridge (US-441, Dublin)", 32.54, -82.9],
    ["Altamaha River bridge (US-341, Jesup-Doctortown)", 31.64, -81.82],
    // The Savannah River and the coast
    ["Fifth Street Bridge (Savannah River, Augusta)", 33.47, -81.96],
    ["Houlihan Bridge (US-17, Savannah River, Port Wentworth)", 32.14, -81.14],
    ["Ogeechee River bridge (I-95, Richmond Hill)", 31.93, -81.27],
    ["Satilla River bridge (US-17, Woodbine)", 30.96, -81.68],
    ["Eugene Talmadge Memorial Bridge (US-17, Savannah)", 32.09, -81.07],
    ["Sidney Lanier Bridge (US-17, Brunswick)", 31.13, -81.49],
    ["F.J. Torras Causeway (St. Simons Island)", 31.16, -81.42],
    ["Jekyll Island Causeway", 31.09, -81.44],
  ],
  // Bays where water needs a bridge. The map's land runs out around the Golden Isles and the Savannah River's mouth, where the
  // sounds between the islands and the mainland are real water (NOTES.md); the causeways above cross them.
  bays: [
    { name: "Savannah River mouth and Tybee Roads", ring: [-81.1, 32.06, -80.8, 32.06, -80.8, 31.9, -81.1, 31.9] },
    { name: "St. Simons Sound", ring: [-81.52, 31.17, -81.3, 31.17, -81.3, 31.03, -81.52, 31.03] },
    { name: "St. Andrew Sound", ring: [-81.5, 31.02, -81.36, 31.02, -81.36, 30.9, -81.5, 30.9] },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Atlanta & the Metro",
      areas: ["atlanta"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        // Atlanta to Marietta, as I-75 and the old Western & Atlantic line run
        { kind: "connect", a: "ATL", b: "MRTA" },
      ],
    },
    {
      name: "North Georgia & the Blue Ridge",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Atlanta to Dalton, as I-75 runs by Cartersville and Calhoun
        { kind: "connect", a: "ATL", b: "DLTN" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "Macon, Columbus & Middle Georgia",
      areas: ["middle"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Atlanta to Macon, as I-75 runs south through Henry and Monroe
        { kind: "connect", a: "ATL", b: "MACN" },
        { kind: "counties", target: 32 },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Savannah, the Coast & South Georgia",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Macon to Savannah, as I-16 runs through Dublin and Metter
        { kind: "connect", a: "MACN", b: "SAV" },
        { kind: "counties", target: 50 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  // City maps, keyed by their main station on the state map. hub = the main station's own stop
  // in the city, where riders change to and from trains. No cable cars here.
  metros: {
    ATL: {
      name: "Atlanta",
      size: 5,
      stops: [
        { id: "FPT", name: "Five Points", lat: 33.754, lon: -84.391, hub: true },
        { id: "MID", name: "Midtown", lat: 33.789, lon: -84.387 },
        { id: "BUK", name: "Buckhead", lat: 33.847, lon: -84.368 },
        { id: "GT", name: "Georgia Tech", lat: 33.7756, lon: -84.3963 },
        { id: "DEC", name: "Decatur", lat: 33.775, lon: -84.296 },
        { id: "EMO", name: "Emory University", lat: 33.792, lon: -84.324 },
        { id: "ATL", name: "Hartsfield-Jackson Airport", lat: 33.64, lon: -84.427 },
        { id: "LFP", name: "Little Five Points", lat: 33.764, lon: -84.349 },
        { id: "WND", name: "West End", lat: 33.736, lon: -84.413 },
        { id: "CBL", name: "Cumberland (Truist Park)", lat: 33.891, lon: -84.468 },
        { id: "SSP", name: "Sandy Springs", lat: 33.932, lon: -84.351 },
        { id: "MAR", name: "Marietta", lat: 33.953, lon: -84.55 },
      ],
    },
  },
  biomes: {
    // The pine flatwoods of the coastal plain, from the Okefenokee and the Altamaha to the Savannah River
    forest: ["ga-chatham", "ga-effingham", "ga-bryan", "ga-liberty", "ga-bulloch", "ga-candler-evans-tattnall", "ga-long-mcintosh-wayne", "ga-glynn", "ga-camden", "ga-brantley-charlton-pierce", "ga-clinch-echols-ware", "ga-appling-bacon-jeff-davis", "ga-atkinson-coffee", "ga-berrien-cook-lanier", "ga-burke-jenkins-screven", "ga-emanuel-johnson-treutlen", "ga-montgomery-toombs-wheeler", "ga-laurens"],
    // The Blue Ridge, the Ridge and Valley, Atlanta's tree-covered Piedmont and the hills of the
    // Fall Line (Columbus, Macon, Augusta) and the Piedmont east of Macon
    wooded: ["ga-fulton", "ga-dekalb", "ga-cobb", "ga-gwinnett", "ga-clayton", "ga-henry", "ga-cherokee", "ga-forsyth", "ga-douglas", "ga-fayette", "ga-rockdale", "ga-newton", "ga-paulding", "ga-barrow", "ga-hall", "ga-coweta", "ga-spalding", "ga-walton", "ga-carroll", "ga-bartow", "ga-butts-lamar", "ga-troup", "ga-heard", "ga-pike-upson", "ga-gordon", "ga-whitfield", "ga-murray", "ga-catoosa", "ga-walker", "ga-dade", "ga-chattooga", "ga-floyd", "ga-haralson-polk", "ga-gilmer-pickens", "ga-fannin-union", "ga-towns-white", "ga-habersham-rabun", "ga-banks-stephens", "ga-franklin-hart", "ga-dawson-lumpkin", "ga-jackson", "ga-madison-oglethorpe", "ga-clarke", "ga-oconee", "ga-harris-meriwether-talbot", "ga-jones-monroe", "ga-jasper-morgan-putnam", "ga-baldwin", "ga-greene-hancock-taliaferro", "ga-elbert-lincoln-wilkes", "ga-glascock-mcduffie-warren", "ga-richmond", "ga-columbia", "ga-muscogee", "ga-bibb", "ga-jefferson-washington", "ga-bleckley-twiggs-wilkinson"],
    // Not listed (farmland and grassland): the cotton, peanut and pecan country of south-west and south Georgia, the Black Belt strip and the Dougherty Plain. No `dry`: Georgia has no desert.
  },
});
