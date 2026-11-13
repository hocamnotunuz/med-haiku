// National Railways pack: Florida.
// Everything hand-made for one state: main stations, towns, levels, bridges, bays,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/FL/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/FL/raw.
// Florida's 67 counties are 52 regions (merges in tools/build-map.js, STATES.FL). Florida is flat: no passes.
NR.addPack({
  code: "FL",
  name: "Florida",
  // A game that starts here begins owning Miami-Dade (Miami), Broward (Fort Lauderdale, to the north) and
  // Collier (Naples, to the west across the Everglades); Broward and Collier both touch Miami-Dade
  // (and each other, on Alligator Alley). Miami is metro, Fort Lauderdale and Naples are coast, so the first track
  // (the nearest pair of different types, Miami-Fort Lauderdale) has riders.
  start: ["fl-miami-dade", "fl-broward", "fl-collier"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the
  // short code shown on passengers. pop = region population in thousands (2020 census). size = how
  // busy (1 to 5). level = which level unlocks it in Levels mode. Points are the Census points,
  // except where a comment says it was moved to a downtown. Every Census place is in
  // packs/FL/raw/places.json.
  stations: [
    // Level: Miami & the Gold Coast
    // Miami: the county seat and core of a 6-million metro (442,260 in the city; Miami-Dade 2,702k, the biggest region, size 5 like Atlanta and Houston). At the downtown by Bayfront Park and Government Center; the Census point (25.78, -80.21) is the middle of the city limits, 1 mile west. Miami International Airport and PortMiami (the cruise capital, and a big container port) are here. Scenic for South Beach, Wynwood and the Everglades gateway.
    { id: "MIA", name: "Miami", county: "fl-miami-dade", lat: 25.77, lon: -80.19, port: "PortMiami", airport: "Miami International Airport", scenic: true, type: "metro", size: 5, pop: 2702, main: true, level: "gold" },
    // Fort Lauderdale (182,777, ahead of Pembroke Pines, 171,180, and Hollywood, 153,035): the Broward seat and the beach and yacht city, at downtown by the New River and Brightline station; the Census point (26.14, -80.15) is 1.5 miles north. Typed coast, not metro, so the start (Miami metro, Fort Lauderdale coast, Naples coast) has riders on its first track (Miami-Fort Lauderdale). Broward 1,944k: size 5 by the guide (over 1.5 million). Port Everglades and Fort Lauderdale-Hollywood International are here.
    { id: "FLL", name: "Fort Lauderdale", county: "fl-broward", lat: 26.12, lon: -80.14, port: "Port Everglades", airport: "Fort Lauderdale-Hollywood International Airport", scenic: true, type: "coast", size: 4, pop: 1944, main: true, level: "gold" },
    // West Palm Beach (117,322, ahead of Boca Raton, 97,436): the Palm Beach seat, downtown on the Intracoastal across from Palm Beach; the Census point (26.75, -80.13) is the middle of the city limits, 4 miles inland. Palm Beach 1,492k: size 4 (just under the 1.5M line). Palm Beach International is here.
    { id: "WPB", name: "West Palm Beach", county: "fl-palm-beach", lat: 26.71, lon: -80.06, port: "Port of Palm Beach", airport: "Palm Beach International Airport", type: "coast", size: 4, pop: 1492, main: true, level: "gold" },
    // Key West (26,440): the Monroe seat and the end of the Overseas Highway (US-1) and the old Overseas Railroad, at Old Town. The county is the Keys and the Everglades coast, 83k: size 2 (a big tourist draw: the Southernmost Point, Duval Street, Hemingway Home) though the county is small.
    { id: "KYW", name: "Key West", county: "fl-monroe", lat: 24.56, lon: -81.78, scenic: true, type: "coast", size: 2, pop: 83, main: true, level: "gold" },
    // Naples (19,115, ahead of Marco Island, 15,749): the Collier seat on the Gulf, on US-41 (Tamiami Trail) and the end of I-75's Alligator Alley run. Collier 376k, size 3.
    { id: "NAPL", name: "Naples", county: "fl-collier", lat: 26.15, lon: -81.79, type: "coast", size: 3, pop: 376, main: true, level: "gold" },
    // Stuart (17,432, ahead of Indiantown, 6,561): the Martin seat on the St. Lucie River and US-1, the 'Sailfish Capital'. Martin 158k.
    { id: "STAT", name: "Stuart", county: "fl-martin", lat: 27.2, lon: -80.25, type: "coast", size: 2, pop: 158, main: true, level: "gold" },
    // Port St. Lucie (204,855, ahead of Fort Pierce, 47,528, the seat): the biggest city of the Treasure Coast on I-95 and the Turnpike. St. Lucie 329k, size 3 (as Clayton, 299k, in Georgia).
    { id: "PSL", name: "Port St. Lucie", county: "fl-st-lucie", lat: 27.28, lon: -80.39, type: "coast", size: 3, pop: 329, main: true, level: "gold" },
    // Clewiston (7,314, ahead of Okeechobee, 5,239, and LaBelle, 4,968): the sugar capital on Lake Okeechobee's south shore (US-27), the biggest place in the Glades-Hendry-Okeechobee group (phase 1). Okeechobee town is a town; this region is the lake ring.
    { id: "CLEW", name: "Clewiston", county: "fl-glades-hendry-okeechobee", lat: 26.75, lon: -80.94, type: "farm", size: 1, pop: 91, main: true, level: "gold" },
    // Level: Orlando & Central Florida
    // Orlando (307,763): the Orange seat, at downtown by Lake Eola; the Census point (28.41, -81.25) is the middle of the city limits, 11 miles south-east, near the airport. Orange 1,430k: size 4 (as Hillsborough and Duval). Orlando International Airport is here; scenic for the theme parks (Walt Disney World, Universal).
    { id: "ORLD", name: "Orlando", county: "fl-orange", lat: 28.54, lon: -81.38, airport: "Orlando International Airport", scenic: true, type: "metro", size: 4, pop: 1430, main: true, level: "central" },
    // Kissimmee (79,229, ahead of St. Cloud, 58,963): the Osceola seat and the tourist strip of US-192 next to Walt Disney World. Osceola 389k, size 3.
    { id: "KISS", name: "Kissimmee", county: "fl-osceola", lat: 28.29, lon: -81.41, type: "metro", size: 3, pop: 389, main: true, level: "central" },
    // Sanford (61,084, ahead of Altamonte Springs, 46,259): the Seminole seat on Lake Monroe and the St. Johns, end of the Auto Train, with Orlando Sanford International Airport; I-4 and the Brightline/SunRail line. Seminole 471k, size 3.
    { id: "SNFD", name: "Sanford", county: "fl-seminole", lat: 28.81, lon: -81.27, type: "metro", size: 3, pop: 471, main: true, level: "central" },
    // Clermont (43,028, ahead of Leesburg, 26,998, and Eustis, 23,198): the Lake County's biggest city, on US-27 and Florida's Turnpike at the Citrus Tower, on the Orlando side of the county; the Census point (28.53, -81.72) is the middle of the city limits, 3 miles east of the old downtown. Lake 384k, size 3.
    { id: "CLRM", name: "Clermont", county: "fl-lake", lat: 28.55, lon: -81.77, type: "metro", size: 3, pop: 384, main: true, level: "central" },
    // Lakeland (112,629): the biggest city of Polk (725k) on I-4, between Tampa and Orlando; downtown by Lake Mirror, 1.5 miles south-east of the Census point. Size 3.
    { id: "LKLD", name: "Lakeland", county: "fl-polk", lat: 28.04, lon: -81.95, type: "metro", size: 3, pop: 725, main: true, level: "central" },
    // Melbourne (84,714), not Palm Bay (119,752, a big, newer suburb 10 miles south): the old city on the Indian River Lagoon at US-1 and I-95, with the regional airport. Brevard 607k, size 3. Port Canaveral (the cruise port, north in Cape Canaveral) and Kennedy Space Center are in the county; scenic is on the town KSCV. The Census point (28.11, -80.66) is 3 miles from downtown.
    { id: "MLB", name: "Melbourne", county: "fl-brevard", lat: 28.08, lon: -80.61, port: "Port Canaveral", scenic: true, type: "coast", size: 3, pop: 607, main: true, level: "central" },
    // Daytona Beach (71,586, behind Deltona, 93,701, the inland suburb on I-4): the beach, the Speedway and I-95, the old Volusia hub; Census point (29.19, -81.10) is the middle of the city, 4 miles inland. Volusia 554k, size 3.
    { id: "DAB", name: "Daytona Beach", county: "fl-volusia", lat: 29.21, lon: -81.02, scenic: true, type: "coast", size: 3, pop: 554, main: true, level: "central" },
    // Vero Beach (16,364), not Sebastian (25,037, a town at the county's north end): the Indian River seat on US-1 and the Treasure Coast. Indian River 160k.
    { id: "VRB", name: "Vero Beach", county: "fl-indian-river", lat: 27.64, lon: -80.4, type: "coast", size: 2, pop: 160, main: true, level: "central" },
    // Ocala (63,600): the Marion seat, horse country on I-75 and US-27/441. Marion 376k, size 3. Typed farm (horse farms).
    { id: "OCL", name: "Ocala", county: "fl-marion", lat: 29.19, lon: -82.14, type: "farm", size: 3, pop: 376, main: true, level: "central" },
    // Wildwood (15,779): the Sumter hub where I-75 meets Florida's Turnpike, beside The Villages. Sumter 130k.
    { id: "WDW", name: "Wildwood", county: "fl-sumter", lat: 28.86, lon: -82.04, type: "farm", size: 2, pop: 130, main: true, level: "central" },
    // Palm Coast (89,248, ahead of Bunnell, 3,290, the seat): I-95 and the Intracoastal, a new city that holds most of the county. Flagler 115k.
    { id: "PLMC", name: "Palm Coast", county: "fl-flagler", lat: 29.54, lon: -81.24, type: "coast", size: 2, pop: 115, main: true, level: "central" },
    // Sebring (10,972, ahead of Avon Park, 9,656): the Highlands seat on US-27, with the 12 Hours of Sebring raceway. Highlands 101k.
    { id: "SBRG", name: "Sebring", county: "fl-highlands", lat: 27.47, lon: -81.45, type: "farm", size: 1, pop: 101, main: true, level: "central" },
    // Level: Tampa Bay & the Gulf Coast
    // Tampa (384,662): the Hillsborough seat, at downtown on the Hillsborough River; the Census point (27.97, -82.48) is the middle of the city limits, 1 mile north-west. Hillsborough 1,460k: size 4. Tampa International Airport and Port Tampa Bay (Florida's biggest port by tonnage) are here.
    { id: "TPA", name: "Tampa", county: "fl-hillsborough", lat: 27.95, lon: -82.46, port: "Port Tampa Bay", airport: "Tampa International Airport", type: "metro", size: 4, pop: 1460, main: true, level: "gulf" },
    // St. Petersburg (258,354, ahead of Clearwater, 117,428): the biggest city of the Pinellas peninsula, downtown on Tampa Bay; the Census point (27.76, -82.64) matches. Pinellas 959k: size 4 (Gwinnett in Georgia, 957k, is 4). Tampa Bay lies between it and Tampa: the Howard Frankland, Gandy and Courtney Campbell bridges cross it.
    { id: "STPB", name: "St. Petersburg", county: "fl-pinellas", lat: 27.77, lon: -82.64, type: "coast", size: 4, pop: 959, main: true, level: "gulf" },
    // Zephyrhills (17,187, ahead of New Port Richey, 16,698): the biggest incorporated place of a county of 562k whose people live in many unincorporated places (Wesley Chapel, Land O' Lakes, Trinity), east of I-75 and US-301.
    { id: "ZPHL", name: "Zephyrhills", county: "fl-pasco", lat: 28.24, lon: -82.18, type: "farm", size: 3, pop: 562, main: true, level: "gulf" },
    // Bradenton (55,714): the Manatee seat on the Manatee River at the foot of the Sunshine Skyway side; Manatee 400k.
    { id: "BRAD", name: "Bradenton", county: "fl-manatee", lat: 27.5, lon: -82.57, port: "Port Manatee", type: "coast", size: 3, pop: 400, main: true, level: "gulf" },
    // Sarasota (54,848), not North Port (74,799, the newer southern city): the Sarasota seat and the cultural and tourist centre, downtown on Sarasota Bay; North Port is a town. Sarasota 434k, size 3. Sarasota-Bradenton International Airport.
    { id: "SRQ", name: "Sarasota", county: "fl-sarasota", lat: 27.34, lon: -82.54, airport: "Sarasota-Bradenton International Airport", type: "coast", size: 3, pop: 434, main: true, level: "gulf" },
    // Fort Myers (86,404), ahead of Cape Coral (193,994, the biggest city, a canal suburb across the Caloosahatchee): the Lee seat, downtown on the Caloosahatchee at US-41; the Census point (26.62, -81.83) is 2 miles from downtown. Lee 761k. Southwest Florida International Airport is east of the city. Scenic for the Edison and Ford Winter Estates.
    { id: "FTMY", name: "Fort Myers", county: "fl-lee", lat: 26.64, lon: -81.87, airport: "Southwest Florida International Airport", scenic: true, type: "coast", size: 3, pop: 761, main: true, level: "gulf" },
    // Punta Gorda (19,468): the Charlotte seat on Charlotte Harbor and US-41. Charlotte 187k.
    { id: "PNTG", name: "Punta Gorda", county: "fl-charlotte", lat: 26.9, lon: -82.06, type: "coast", size: 2, pop: 187, main: true, level: "gulf" },
    // Brooksville (8,886): the Hernando seat on US-41 and US-98, between Spring Hill and the Withlacoochee State Forest; Census point (28.52, -82.40). Hernando 195k.
    { id: "BRKS", name: "Brooksville", county: "fl-hernando", lat: 28.55, lon: -82.39, type: "farm", size: 2, pop: 195, main: true, level: "gulf" },
    // Inverness (7,539): the Citrus seat on Tsala Apopka Lake and the Withlacoochee State Trail. Citrus 154k.
    { id: "INVR", name: "Inverness", county: "fl-citrus", lat: 28.84, lon: -82.34, type: "farm", size: 2, pop: 154, main: true, level: "gulf" },
    // Arcadia (7,424, ahead of Wauchula, 4,898): the DeSoto seat on the Peace River and US-17, cattle and citrus country (phase 1).
    { id: "ARDA", name: "Arcadia", county: "fl-desoto-hardee", lat: 27.22, lon: -81.86, type: "farm", size: 1, pop: 59, main: true, level: "gulf" },
    // Level: Jacksonville, North Florida & the Panhandle
    // Jacksonville (949,618): the biggest city of Florida by area, the Duval seat, downtown on the St. Johns at the Main Street Bridge; the Census point (30.34, -81.66) is the middle of the city limits (the city is the county). Duval 996k: size 4. JAXPORT and Jacksonville International are here.
    { id: "JAX", name: "Jacksonville", county: "fl-duval", lat: 30.33, lon: -81.66, port: "JAXPORT", airport: "Jacksonville International Airport", scenic: true, type: "metro", size: 4, pop: 996, main: true, level: "north" },
    // Green Cove Springs (9,781, ahead of Orange Park, 9,095, which is Jacksonville's suburb): the Clay seat on the St. Johns, US-17. Clay 218k.
    { id: "GCSP", name: "Green Cove Springs", county: "fl-clay", lat: 29.99, lon: -81.68, type: "farm", size: 2, pop: 218, main: true, level: "north" },
    // Fernandina Beach (13,046): the Nassau seat on Amelia Island, old Florida shrimping town; Nassau 90k. The island is joined to the mainland by the A1A bridge over the Intracoastal.
    { id: "FRBN", name: "Fernandina Beach", county: "fl-nassau", lat: 30.66, lon: -81.45, type: "coast", size: 1, pop: 90, main: true, level: "north" },
    // St. Augustine (14,318): the oldest city in the US (1565), the St. Johns seat, at the Castillo de San Marcos. Not the biggest place of the county of 273k (Ponte Vedra, Julington Creek and Nocatee are unincorporated). Scenic.
    { id: "SAUG", name: "St. Augustine", county: "fl-st-johns", lat: 29.9, lon: -81.31, scenic: true, type: "coast", size: 2, pop: 273, main: true, level: "north" },
    // Palatka (10,469): the Putnam seat on the St. Johns, US-17 and the CSX line. Putnam 73k.
    { id: "PLTK", name: "Palatka", county: "fl-putnam", lat: 29.64, lon: -81.68, type: "farm", size: 1, pop: 73, main: true, level: "north" },
    // Gainesville (141,137): the Alachua seat and the University of Florida's city, on I-75 and US-441; downtown (the Census point is 29.68, -82.35, in the city's middle). Alachua 278k.
    { id: "GAIN", name: "Gainesville", county: "fl-alachua", lat: 29.65, lon: -82.33, type: "metro", size: 2, pop: 278, main: true, level: "north" },
    // Lake City (12,335): the Columbia seat where I-75 meets I-10. Columbia 70k.
    { id: "LKCT", name: "Lake City", county: "fl-columbia", lat: 30.19, lon: -82.64, type: "farm", size: 1, pop: 70, main: true, level: "north" },
    // Macclenny (7,302, ahead of Starke, 5,792, and Lake Butler): the Baker seat on I-10, between Lake City and Jacksonville (phase 1).
    { id: "MCCL", name: "Macclenny", county: "fl-baker-bradford-union", lat: 30.28, lon: -82.13, type: "farm", size: 1, pop: 73, main: true, level: "north" },
    // Live Oak (6,738): the Suwannee seat at the crossing of I-10, US-90 and US-129 (phase 1 exception, 43k).
    { id: "LVOK", name: "Live Oak", county: "fl-suwannee", lat: 30.3, lon: -82.99, type: "farm", size: 1, pop: 43, main: true, level: "north" },
    // Perry (6,874): the Taylor seat and the Big Bend's lumber and paper town on US-19/27/98 (phase 1).
    { id: "PRRT", name: "Perry", county: "fl-dixie-lafayette-taylor", lat: 30.11, lon: -83.58, type: "farm", size: 1, pop: 47, main: true, level: "north" },
    // Williston (2,972, ahead of Chiefland, 2,327, and Trenton, 2,016): where US-27 meets US-41, the biggest place of Levy and Gilchrist (phase 1; Levy's seat is Bronson).
    { id: "WLST", name: "Williston", county: "fl-gilchrist-levy", lat: 29.39, lon: -82.44, type: "farm", size: 1, pop: 61, main: true, level: "north" },
    // Madison (2,913), not Jasper (3,631, the Hamilton seat on I-75): the Madison seat on I-10 in the middle of the group, between Jasper and Monticello (phase 1 call).
    { id: "MDIN", name: "Madison", county: "fl-hamilton-jefferson-madison", lat: 30.47, lon: -83.41, type: "farm", size: 1, pop: 46, main: true, level: "north" },
    // Tallahassee (196,180): the state capital, the Leon seat, downtown by the Capitol; the Census point (30.45, -84.25) is 2 miles east. Leon 292k: size 3 (Chatham, 295k, in Georgia is 3). Scenic for the Capitol and Florida State University.
    { id: "TLH", name: "Tallahassee", county: "fl-leon", lat: 30.44, lon: -84.28, airport: "Tallahassee International Airport", scenic: true, type: "metro", size: 3, pop: 292, main: true, level: "north" },
    // Quincy (7,957): the Gadsden seat on US-90 between Tallahassee and Marianna, the old tobacco country (phase 1 exception, 44k).
    { id: "QUNY", name: "Quincy", county: "fl-gadsden", lat: 30.57, lon: -84.59, type: "farm", size: 1, pop: 44, main: true, level: "north" },
    // Crawfordville, the Wakulla seat: the county has 34k of the group's 46k people and sits on US-319/98 15 miles south of Tallahassee; Apalachicola (2,333) and Carrabelle (2,614) are towns. Not in places.json with a population (a Census-designated place), the Census list has it at 30.20, -84.36 and the point used is the town centre at the courthouse (about 30.18, -84.38).
    { id: "CRRB", name: "Crawfordville", county: "fl-franklin-wakulla", lat: 30.18, lon: -84.38, type: "coast", size: 1, pop: 46, main: true, level: "north" },
    // Port St. Joe (3,361, ahead of Blountstown, 2,261, and Wewahitchka, 2,072): the Gulf seat on US-98 and the St. Joseph Bay (phase 1).
    { id: "PTSJ", name: "Port St. Joe", county: "fl-calhoun-gulf-liberty", lat: 29.82, lon: -85.31, type: "coast", size: 1, pop: 36, main: true, level: "north" },
    // Marianna (6,261, ahead of Chipley, 3,663, and Bonifay, 2,761): the Jackson seat on I-10 and the Florida Caverns State Park (phase 1).
    { id: "MRNN", name: "Marianna", county: "fl-holmes-jackson-washington", lat: 30.76, lon: -85.26, type: "farm", size: 1, pop: 92, main: true, level: "north" },
    // Panama City (33,051): the Bay seat, downtown on St. Andrew Bay; Panama City Beach, Lynn Haven and Callaway are around it. Bay 175k. The big airport (Northwest Florida Beaches International) is on the north side of West Bay.
    { id: "PCY", name: "Panama City", county: "fl-bay", lat: 30.16, lon: -85.66, port: "Port Panama City", airport: "Northwest Florida Beaches International Airport", type: "coast", size: 2, pop: 175, main: true, level: "north" },
    // Crestview (27,464, ahead of Fort Walton Beach, 20,933, which is a town): the Okaloosa seat on I-10 and US-90, the hub of the county of 212k (Eglin Air Force Base is in between).
    { id: "CRVW", name: "Crestview", county: "fl-okaloosa", lat: 30.75, lon: -86.58, type: "farm", size: 2, pop: 212, main: true, level: "north" },
    // DeFuniak Springs (5,920, a hair ahead of Freeport, 5,880): the Walton seat on I-10 and the CSX line, round Lake DeFuniak.
    { id: "DFSP", name: "DeFuniak Springs", county: "fl-walton", lat: 30.71, lon: -86.12, type: "farm", size: 1, pop: 75, main: true, level: "north" },
    // Pensacola (54,316): the Escambia seat, downtown on Pensacola Bay; the Census point (30.44, -87.19) is 3 miles inland. Escambia 322k: size 3. Scenic for Pensacola Beach and the Naval Air Station.
    { id: "PNS", name: "Pensacola", county: "fl-escambia", lat: 30.41, lon: -87.21, port: "Port of Pensacola", airport: "Pensacola International Airport", scenic: true, type: "coast", size: 3, pop: 322, main: true, level: "north" },
    // Milton (10,208, ahead of Gulf Breeze, 6,300): the Santa Rosa seat on the Blackwater River and I-10. Santa Rosa 188k.
    { id: "MILT", name: "Milton", county: "fl-santa-rosa", lat: 30.63, lon: -87.05, type: "farm", size: 2, pop: 188, main: true, level: "north" },
  ],
  // Towns: the next-biggest real places, about 1.5 per region, with the well-known scenic places. Points are the Census points
  // except where noted in packs/FL/NOTES.md.
  towns: [
    { id: "HLWD", name: "Hollywood", county: "fl-broward", lat: 26.03, lon: -80.16, type: "coast", size: 3 },
    { id: "PMBP", name: "Pembroke Pines", county: "fl-broward", lat: 26.01, lon: -80.34, type: "metro", size: 3 },
    { id: "HLH", name: "Hialeah", county: "fl-miami-dade", lat: 25.86, lon: -80.28, type: "metro", size: 4 },
    { id: "MBCH", name: "Miami Beach", county: "fl-miami-dade", lat: 25.83, lon: -80.13, scenic: true, type: "coast", size: 3 },
    { id: "HOME", name: "Homestead", county: "fl-miami-dade", lat: 25.47, lon: -80.44, type: "farm", size: 2 },
    { id: "EVGL", name: "Everglades National Park", county: "fl-miami-dade", lat: 25.39, lon: -80.58, scenic: true, type: "coast", size: 1 },
    { id: "BCRT", name: "Boca Raton", county: "fl-palm-beach", lat: 26.37, lon: -80.1, type: "metro", size: 3 },
    { id: "BOYN", name: "Boynton Beach", county: "fl-palm-beach", lat: 26.53, lon: -80.08, type: "metro", size: 2 },
    { id: "BLGL", name: "Belle Glade", county: "fl-palm-beach", lat: 26.69, lon: -80.67, type: "farm", size: 1 },
    { id: "MARA", name: "Marathon", county: "fl-monroe", lat: 24.73, lon: -81.03, type: "coast", size: 1 },
    { id: "KYLG", name: "Key Largo", county: "fl-monroe", lat: 25.12, lon: -80.41, type: "coast", size: 1 },
    { id: "EVCY", name: "Everglades City", county: "fl-collier", lat: 25.86, lon: -81.39, scenic: true, type: "coast", size: 1 },
    { id: "MRCO", name: "Marco Island", county: "fl-collier", lat: 25.94, lon: -81.72, type: "coast", size: 2 },
    { id: "FTPR", name: "Fort Pierce", county: "fl-st-lucie", lat: 27.45, lon: -80.33, type: "coast", size: 2 },
    { id: "INDT", name: "Indiantown", county: "fl-martin", lat: 27.04, lon: -80.49, type: "farm", size: 1 },
    { id: "OKCB", name: "Okeechobee", county: "fl-glades-hendry-okeechobee", lat: 27.24, lon: -80.83, type: "farm", size: 1 },
    { id: "LBLL", name: "LaBelle", county: "fl-glades-hendry-okeechobee", lat: 26.72, lon: -81.45, type: "farm", size: 1 },
    { id: "MRHV", name: "Moore Haven", county: "fl-glades-hendry-okeechobee", lat: 26.83, lon: -81.1, type: "farm", size: 1 },
    { id: "WGDW", name: "Walt Disney World", county: "fl-orange", lat: 28.42, lon: -81.58, scenic: true, type: "metro", size: 2 },
    { id: "APPK", name: "Apopka", county: "fl-orange", lat: 28.7, lon: -81.53, type: "metro", size: 2 },
    { id: "SCLD", name: "St. Cloud", county: "fl-osceola", lat: 28.25, lon: -81.28, type: "metro", size: 2 },
    { id: "ALTM", name: "Altamonte Springs", county: "fl-seminole", lat: 28.66, lon: -81.39, type: "metro", size: 2 },
    { id: "OVDO", name: "Oviedo", county: "fl-seminole", lat: 28.66, lon: -81.19, type: "metro", size: 2 },
    { id: "LSBG", name: "Leesburg", county: "fl-lake", lat: 28.81, lon: -81.88, type: "farm", size: 2 },
    { id: "ESTS", name: "Eustis", county: "fl-lake", lat: 28.86, lon: -81.68, type: "farm", size: 1 },
    { id: "WNTH", name: "Winter Haven", county: "fl-polk", lat: 28.05, lon: -81.73, type: "farm", size: 2 },
    { id: "HNSC", name: "Haines City", county: "fl-polk", lat: 28.11, lon: -81.62, type: "farm", size: 1 },
    { id: "LKWL", name: "Lake Wales", county: "fl-polk", lat: 27.92, lon: -81.6, type: "farm", size: 1 },
    { id: "TTSV", name: "Titusville", county: "fl-brevard", lat: 28.57, lon: -80.82, type: "coast", size: 2 },
    { id: "KSCV", name: "Kennedy Space Center", county: "fl-brevard", lat: 28.52, lon: -80.68, scenic: true, type: "coast", size: 1 },
    { id: "PLMB", name: "Palm Bay", county: "fl-brevard", lat: 27.96, lon: -80.66, type: "metro", size: 2 },
    { id: "DLND", name: "DeLand", county: "fl-volusia", lat: 29.02, lon: -81.29, type: "farm", size: 2 },
    { id: "DLTA", name: "Deltona", county: "fl-volusia", lat: 28.91, lon: -81.21, type: "metro", size: 2 },
    { id: "NSBH", name: "New Smyrna Beach", county: "fl-volusia", lat: 29.03, lon: -80.95, type: "coast", size: 2 },
    { id: "SBST", name: "Sebastian", county: "fl-indian-river", lat: 27.79, lon: -80.48, type: "coast", size: 1 },
    { id: "SLVR", name: "Silver Springs", county: "fl-marion", lat: 29.22, lon: -82.05, scenic: true, type: "farm", size: 1 },
    { id: "DNLN", name: "Dunnellon", county: "fl-marion", lat: 29.06, lon: -82.43, type: "farm", size: 1 },
    { id: "BSHL", name: "Bushnell", county: "fl-sumter", lat: 28.69, lon: -82.11, type: "farm", size: 1 },
    { id: "BNNL", name: "Flagler Beach", county: "fl-flagler", lat: 29.47, lon: -81.13, type: "coast", size: 1 },
    { id: "AVPK", name: "Avon Park", county: "fl-highlands", lat: 27.59, lon: -81.51, type: "farm", size: 1 },
    { id: "TRPN", name: "Tarpon Springs", county: "fl-pinellas", lat: 28.15, lon: -82.78, type: "coast", size: 1 },
    { id: "CLWT", name: "Clearwater", county: "fl-pinellas", lat: 27.97, lon: -82.8, scenic: true, type: "coast", size: 3 },
    { id: "PLTC", name: "Plant City", county: "fl-hillsborough", lat: 28.02, lon: -82.12, type: "farm", size: 2 },
    { id: "DDCY", name: "Dade City", county: "fl-pasco", lat: 28.36, lon: -82.19, type: "farm", size: 1 },
    { id: "NPRY", name: "New Port Richey", county: "fl-pasco", lat: 28.25, lon: -82.72, type: "coast", size: 2 },
    { id: "LBKY", name: "Longboat Key", county: "fl-manatee", lat: 27.4, lon: -82.64, type: "coast", size: 1 },
    { id: "VNCE", name: "Venice", county: "fl-sarasota", lat: 27.12, lon: -82.42, type: "coast", size: 2 },
    { id: "NPRT", name: "North Port", county: "fl-sarasota", lat: 27.06, lon: -82.2, type: "farm", size: 2 },
    { id: "CPCR", name: "Cape Coral", county: "fl-lee", lat: 26.64, lon: -82, type: "metro", size: 3 },
    { id: "BNTS", name: "Bonita Springs", county: "fl-lee", lat: 26.36, lon: -81.78, type: "coast", size: 2 },
    { id: "PTCH", name: "Port Charlotte", county: "fl-charlotte", lat: 26.99, lon: -82.11, type: "coast", size: 2 },
    { id: "WCHL", name: "Wauchula", county: "fl-desoto-hardee", lat: 27.55, lon: -81.81, type: "farm", size: 1 },
    { id: "WKWC", name: "Weeki Wachee", county: "fl-hernando", lat: 28.52, lon: -82.57, scenic: true, type: "coast", size: 1 },
    { id: "CRRV", name: "Crystal River", county: "fl-citrus", lat: 28.9, lon: -82.6, type: "coast", size: 1 },
    { id: "JXBC", name: "Jacksonville Beach", county: "fl-duval", lat: 30.27, lon: -81.39, type: "coast", size: 2 },
    { id: "ORPK", name: "Orange Park", county: "fl-clay", lat: 30.17, lon: -81.7, type: "metro", size: 2 },
    { id: "HLRD", name: "Hilliard", county: "fl-nassau", lat: 30.69, lon: -81.92, type: "farm", size: 1 },
    { id: "PLKA", name: "Crescent City", county: "fl-putnam", lat: 29.43, lon: -81.51, type: "farm", size: 1 },
    { id: "STAR", name: "Starke", county: "fl-baker-bradford-union", lat: 29.95, lon: -82.11, type: "farm", size: 1 },
    { id: "LKBT", name: "Lake Butler", county: "fl-baker-bradford-union", lat: 30.02, lon: -82.34, type: "farm", size: 1 },
    { id: "STAB", name: "St. Augustine Beach", county: "fl-st-johns", lat: 29.84, lon: -81.27, type: "coast", size: 1 },
    { id: "TRNN", name: "Trenton", county: "fl-gilchrist-levy", lat: 29.61, lon: -82.81, type: "farm", size: 1 },
    { id: "CHFL", name: "Chiefland", county: "fl-gilchrist-levy", lat: 29.49, lon: -82.87, type: "farm", size: 1 },
    { id: "JAPR", name: "Jasper", county: "fl-hamilton-jefferson-madison", lat: 30.46, lon: -82.93, type: "farm", size: 1 },
    { id: "MNTL", name: "Monticello", county: "fl-hamilton-jefferson-madison", lat: 30.54, lon: -83.87, type: "farm", size: 1 },
    { id: "CRCY", name: "Cross City", county: "fl-dixie-lafayette-taylor", lat: 29.64, lon: -83.12, type: "farm", size: 1 },
    { id: "MAYO", name: "Mayo", county: "fl-dixie-lafayette-taylor", lat: 30.05, lon: -83.18, type: "farm", size: 1 },
    { id: "CHTH", name: "Chattahoochee", county: "fl-gadsden", lat: 30.7, lon: -84.83, type: "farm", size: 1 },
    { id: "APLC", name: "Apalachicola", county: "fl-franklin-wakulla", lat: 29.73, lon: -84.99, type: "coast", size: 1 },
    { id: "CRBL", name: "Carrabelle", county: "fl-franklin-wakulla", lat: 29.85, lon: -84.67, type: "coast", size: 1 },
    { id: "BLNT", name: "Blountstown", county: "fl-calhoun-gulf-liberty", lat: 30.44, lon: -85.05, type: "farm", size: 1 },
    { id: "CHIP", name: "Chipley", county: "fl-holmes-jackson-washington", lat: 30.78, lon: -85.54, type: "farm", size: 1 },
    { id: "BNFY", name: "Bonifay", county: "fl-holmes-jackson-washington", lat: 30.78, lon: -85.69, type: "farm", size: 1 },
    { id: "PCBH", name: "Panama City Beach", county: "fl-bay", lat: 30.23, lon: -85.88, scenic: true, type: "coast", size: 2 },
    { id: "FWBH", name: "Fort Walton Beach", county: "fl-okaloosa", lat: 30.42, lon: -86.62, type: "coast", size: 2 },
    { id: "DSTN", name: "Destin", county: "fl-okaloosa", lat: 30.4, lon: -86.47, scenic: true, type: "coast", size: 2 },
    { id: "FPRT", name: "Freeport", county: "fl-walton", lat: 30.5, lon: -86.13, type: "farm", size: 1 },
    { id: "NVRR", name: "Navarre", county: "fl-santa-rosa", lat: 30.42, lon: -86.89, type: "coast", size: 2 },
    { id: "CNTY", name: "Century", county: "fl-escambia", lat: 30.98, lon: -87.26, type: "farm", size: 1 },
  ],
  passes: [],
  // Real bridges: [name, latitude, longitude]. Sources in NOTES.md.
  bridges: [
    // Tampa Bay, Charlotte Harbor and the Peace River
    ["Courtney Campbell Causeway (SR 60, Tampa Bay)", 27.96, -82.65],
    ["Howard Frankland Bridge (I-275, Tampa Bay)", 27.92, -82.59],
    ["Gandy Bridge (US-92, Tampa Bay)", 27.88, -82.58],
    ["Sunshine Skyway Bridge (I-275, Tampa Bay)", 27.62, -82.66],
    ["Barron Collier and Gilchrist bridges (US-41, Punta Gorda)", 26.93, -82.06],
    ["Peace River bridge (US-17, Arcadia)", 27.22, -81.87],
    // The St. Johns River, from Jacksonville to Lake Monroe
    ["Main Street Bridge (St. Johns River, Jacksonville)", 30.32, -81.66],
    ["Buckman Bridge (I-295, St. Johns River)", 30.18, -81.68],
    ["Shands Bridge (SR 16, Green Cove Springs)", 29.97, -81.62],
    ["Palatka Memorial Bridge (SR 20, St. Johns River)", 29.65, -81.64],
    ["Astor Bridge (SR 40, St. Johns River)", 29.17, -81.52],
    ["I-4 bridge (St. Johns River, Sanford)", 28.82, -81.29],
    // The Panhandle's rivers and the Suwannee
    ["Jim Woodruff Dam and US-90 bridge (Apalachicola River, Chattahoochee)", 30.69, -84.86],
    ["Blountstown bridge (SR 20, Apalachicola River)", 30.44, -85.03],
    ["John Gorrie Memorial Bridge (US-98, Apalachicola)", 29.72, -84.99],
    ["Suwannee River bridge (I-10, Ellaville)", 30.38, -83.18],
    ["Choctawhatchee River bridge (I-10, Caryville)", 30.77, -85.83],
    ["Choctawhatchee River bridge (SR 20, Bruce)", 30.46, -85.87],
    // The Georgia line
    ["St. Marys River bridge (I-95 and US-17, Kingsland-Yulee)", 30.71, -81.53],
  ],
  // Bays where water needs a bridge (sea outside these is just shore).
  bays: [
    // Tampa Bay (Old Tampa Bay, Hillsborough Bay and the main bay down to the Sunshine Skyway). The county shapes are cut at its shore, so it is sea on the map; the ring is wider than the water: land inside it stays land. Crossings: Courtney Campbell Causeway, Howard Frankland Bridge, Gandy Bridge, Sunshine Skyway.
    { name: "Tampa Bay", ring: [-82.72, 28.04, -82.56, 28.04, -82.54, 27.86, -82.58, 27.8, -82.58, 27.58, -82.76, 27.56, -82.76, 27.66, -82.74, 27.74, -82.72, 27.9] },
    // Charlotte Harbor (the Peace River's mouth, between Punta Gorda and the Cape Coral side). Crossing: the US-41 bridges at Punta Gorda.
    { name: "Charlotte Harbor", ring: [-82.22, 26.97, -82.04, 26.97, -82.04, 26.72, -82.22, 26.72] },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      "name": "Miami & the Gold Coast",
      "areas": [
        "gold"
      ],
      "goals": [
        {
          "kind": "totalPassengers",
          "target": 50
        },
        {
          "kind": "counties",
          "target": 5
        },
        {
          "kind": "connect",
          "a": "MIA",
          "b": "FLL"
        }
      ]
    },
    {
      "name": "Orlando & Central Florida",
      "areas": [
        "central"
      ],
      "goals": [
        {
          "kind": "totalPassengers",
          "target": 140
        },
        {
          "kind": "connect",
          "a": "MIA",
          "b": "WPB"
        },
        {
          "kind": "counties",
          "target": 14
        }
      ]
    },
    {
      "name": "Tampa Bay & the Gulf Coast",
      "areas": [
        "gulf"
      ],
      "goals": [
        {
          "kind": "totalPassengers",
          "target": 280
        },
        {
          "kind": "connect",
          "a": "TPA",
          "b": "STPB"
        },
        {
          "kind": "counties",
          "target": 26
        },
        {
          "kind": "cargo",
          "cargo": "containers",
          "target": 10
        }
      ]
    },
    {
      "name": "Jacksonville, North Florida & the Panhandle",
      "areas": [
        "north"
      ],
      "goals": [
        {
          "kind": "totalPassengers",
          "target": 450
        },
        {
          "kind": "connect",
          "a": "ORLD",
          "b": "JAX"
        },
        {
          "kind": "counties",
          "target": 45
        },
        {
          "kind": "hasTrain",
          "train": "highspeed",
          "target": 1
        }
      ]
    }
  ],
  // City maps, keyed by their main station on the state map. hub = the main station's own stop
  // in the city, where riders change to and from trains. Sources in NOTES.md (City maps).
  metros: {
    MIA: {
      name: "Miami",
      size: 5,
      stops: [
        { id: "MCN", name: "MiamiCentral", lat: 25.779, lon: -80.191, hub: true },
        { id: "BRK", name: "Brickell", lat: 25.762, lon: -80.192 },
        { id: "WYN", name: "Wynwood", lat: 25.801, lon: -80.199 },
        { id: "LHV", name: "Little Havana", lat: 25.766, lon: -80.225 },
        { id: "CGR", name: "Coconut Grove", lat: 25.728, lon: -80.241 },
        { id: "CGB", name: "Coral Gables", lat: 25.749, lon: -80.261 },
        { id: "MIA", name: "Miami Airport", lat: 25.795, lon: -80.287 },
        { id: "SOB", name: "South Beach", lat: 25.79, lon: -80.134 },
        { id: "KBY", name: "Key Biscayne", lat: 25.693, lon: -80.163 },
        { id: "HLH", name: "Hialeah", lat: 25.858, lon: -80.278 },
        { id: "KND", name: "Kendall", lat: 25.679, lon: -80.317 },
        { id: "HRS", name: "Hard Rock Stadium", lat: 25.958, lon: -80.239 },
      ],
    },
    TPA: {
      name: "Tampa",
      size: 4,
      stops: [
        { id: "TUS", name: "Union Station", lat: 27.949, lon: -82.455, hub: true },
        { id: "YBR", name: "Ybor City", lat: 27.96, lon: -82.438 },
        { id: "HYD", name: "Hyde Park", lat: 27.937, lon: -82.475 },
        { id: "SEM", name: "Seminole Heights", lat: 27.992, lon: -82.457 },
        { id: "USF", name: "USF", lat: 28.06, lon: -82.413 },
        { id: "TIA", name: "Tampa Airport", lat: 27.975, lon: -82.533 },
        { id: "RJS", name: "Raymond James Stadium", lat: 27.976, lon: -82.503 },
        { id: "WST", name: "Westshore", lat: 27.951, lon: -82.522 },
        { id: "BRN", name: "Brandon", lat: 27.938, lon: -82.286 },
        { id: "STP", name: "St. Petersburg", lat: 27.771, lon: -82.638 },
        { id: "CLW", name: "Clearwater", lat: 27.966, lon: -82.8 },
      ],
    },
    ORLD: {
      name: "Orlando",
      size: 4,
      stops: [
        { id: "CHS", name: "Church Street", lat: 28.54, lon: -81.382, hub: true },
        { id: "AMT", name: "Amtrak Station", lat: 28.524, lon: -81.38 },
        { id: "WPK", name: "Winter Park", lat: 28.6, lon: -81.351 },
        { id: "MIT", name: "Maitland", lat: 28.627, lon: -81.363 },
        { id: "UCF", name: "UCF", lat: 28.602, lon: -81.2 },
        { id: "MCO", name: "Orlando Airport", lat: 28.431, lon: -81.308 },
        { id: "IDR", name: "International Drive", lat: 28.425, lon: -81.469 },
        { id: "UNI", name: "Universal Orlando", lat: 28.472, lon: -81.468 },
        { id: "DSP", name: "Disney Springs", lat: 28.372, lon: -81.519 },
        { id: "SFD", name: "Sanford", lat: 28.8, lon: -81.273 },
        { id: "APK", name: "Apopka", lat: 28.676, lon: -81.512 },
        { id: "KIS", name: "Kissimmee", lat: 28.293, lon: -81.406 },
      ],
    },
  },
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    // The pine flatwoods and the Panhandle's forests, from Pensacola to the Big Bend and the Jacksonville area
    forest: ["fl-escambia","fl-santa-rosa","fl-okaloosa","fl-walton","fl-bay","fl-holmes-jackson-washington","fl-calhoun-gulf-liberty","fl-franklin-wakulla","fl-gadsden","fl-leon","fl-hamilton-jefferson-madison","fl-dixie-lafayette-taylor","fl-suwannee","fl-columbia","fl-baker-bradford-union","fl-gilchrist-levy","fl-clay","fl-putnam","fl-nassau","fl-duval","fl-st-johns","fl-flagler"],
    // The ridge country of central Florida (the Lake Wales and Brooksville ridges, the Ocala hills and the oak hammocks around Gainesville)
    wooded: ["fl-alachua","fl-marion","fl-sumter","fl-lake","fl-polk","fl-highlands","fl-hernando","fl-citrus"],
    // Not listed (farmland and grassland): the citrus and cattle country, the sugar fields and the Everglades. No `dry`: Florida has no desert.
    dry: [],
  },
});
