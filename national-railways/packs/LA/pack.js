// National Railways pack: Louisiana.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/LA/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/LA/raw.
// Louisiana has parishes, not counties: a region's name is its parishes (without "Parish").
NR.addPack({
  code: "LA",
  name: "Louisiana",
  // A game that starts here begins owning these regions: Orleans (New Orleans), Jefferson (Kenner,
  // up the river by the airport) and St. Tammany (Slidell, across Lake Pontchartrain). All three touch
  // each other. New Orleans is coast and Kenner is metro, so the first track (the nearest pair of
  // different types, New Orleans-Kenner) has riders.
  start: ["la-orleans", "la-jefferson", "la-st-tammany"],
  // Main stations: one per region, at its biggest place except where a comment says why.
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. port, airport = their names, if it has a big one. scenic = a
  // place tourists travel to. Points are the Census points, except where a comment says it was
  // moved to a downtown. Places of the same Census city list are in packs/LA/raw/places.json.
  stations: [
    // Level 1: New Orleans and the river parishes
    // New Orleans: the state's biggest city, a metro of 1.3 million with the Port of New Orleans (a major
    // port on the Mississippi) and the French Quarter. Size 4 (judged against Omaha and St. Louis; the
    // parish alone is 384,000, but it is the core of the metro). At the French Quarter and downtown; the Census
    // point is 6 miles north-east, in the middle of the city limits.
    { id: "NOLA", name: "New Orleans", county: "la-orleans", lat: 29.95, lon: -90.07, port: "Port of New Orleans", scenic: true, type: "coast", size: 4, pop: 384, main: true, level: "neworleans" },
    // Kenner, not Metairie (Metairie is a CDP with no Census place, and 5 miles from New Orleans): the biggest city of
    // Jefferson Parish (66,463), on I-10 by Louis Armstrong New Orleans International Airport, the state's big airport.
    // At the Rivertown downtown; the Census point is 1.5 miles north.
    { id: "KENR", name: "Kenner", county: "la-jefferson", lat: 29.99, lon: -90.24, airport: "Louis Armstrong New Orleans International Airport", type: "metro", size: 3, pop: 441, main: true, level: "neworleans" },
    // Slidell, the biggest city of St. Tammany (28,754), on I-10, I-12 and the Norfolk Southern at the east end of
    // Lake Pontchartrain. At downtown (Olde Towne); the Census point is 1 mile north-west.
    { id: "SLDL", name: "Slidell", county: "la-st-tammany", lat: 30.28, lon: -89.78, type: "metro", size: 2, pop: 265, main: true, level: "neworleans" },
    // Chalmette, the natural centre of St. Bernard Parish (a CDP: no Census population), with the Chalmette Battlefield, the
    // refinery and the Mississippi, 6 miles down-river of New Orleans. Plaquemines' places (Belle Chasse, Buras) are
    // CDPs too. It sits at the old city centre; the Census point is 0.5 mile south-west.
    { id: "CHAL", name: "Chalmette", county: "la-plaquemines-st-bernard", lat: 29.94, lon: -89.96, type: "coast", size: 1, pop: 67, main: true, level: "neworleans" },
    // Destrehan, in St. Charles Parish (every place there is a CDP with no Census population: Destrehan, Luling and Norco
    // are the biggest by general knowledge): on River Road by the I-310 and the Hale Boggs Bridge, with Destrehan Plantation.
    { id: "DSTR", name: "Destrehan", county: "la-st-charles", lat: 29.97, lon: -90.35, type: "farm", size: 1, pop: 53, main: true, level: "neworleans" },
    // LaPlace: St. John the Baptist's centre (a CDP, no Census population) on I-10 and US-61 at Lake Pontchartrain, with the Port of
    // South Louisiana (the busiest port by tonnage in the western hemisphere, its quays run through the two parishes).
    // St. James's Lutcher (3,138) is the only place of the region with a Census population but is a river village.
    { id: "LAPL", name: "LaPlace", county: "la-st-james-st-john-the-baptist", lat: 30.07, lon: -90.48, port: "Port of South Louisiana", type: "farm", size: 1, pop: 63, main: true, level: "neworleans" },
    // Thibodaux: Lafourche's biggest city (15,939) and seat, on Bayou Lafourche and LA-1 (Nicholls State University), in the sugar-cane country.
    // At downtown; the Census point is 0.7 miles south.
    { id: "THIB", name: "Thibodaux", county: "la-lafourche", lat: 29.80, lon: -90.82, type: "farm", size: 2, pop: 98, main: true, level: "neworleans" },
    // Houma: Terrebonne's biggest city (33,408) and seat, on the Intracoastal Waterway and US-90 in the bayou country, a shipbuilding and oilfield-service port.
    // At downtown; the Census point is 1.4 miles south.
    { id: "HOUM", name: "Houma", county: "la-terrebonne", lat: 29.60, lon: -90.72, type: "coast", size: 2, pop: 110, main: true, level: "neworleans" },

    // Level 2: Baton Rouge and the Florida Parishes
    // Baton Rouge: the capital and second city, the State Capitol and the Port of Greater Baton Rouge (on the Mississippi, the 10th biggest port by tonnage, moderately known),
    // Baton Rouge Metropolitan Airport, size 3. At the State Capitol and downtown; the Census point is 2 miles south-east.
    { id: "BTR", name: "Baton Rouge", county: "la-east-baton-rouge", lat: 30.45, lon: -91.19, port: "Port of Greater Baton Rouge", airport: "Baton Rouge Metropolitan Airport", type: "metro", size: 3, pop: 457, main: true, level: "baton" },
    // Denham Springs: the biggest city of Livingston Parish (9,335), Baton Rouge's east suburb on I-12 and the Amite River. At downtown; the Census point is 0.5 miles away.
    { id: "DNSP", name: "Denham Springs", county: "la-livingston", lat: 30.48, lon: -90.96, type: "metro", size: 2, pop: 142, main: true, level: "baton" },
    // Gonzales: the biggest city of Ascension Parish (12,224), on I-10 and I-310 between Baton Rouge and New Orleans, the Jambalaya capital (moderately known). At downtown;
    // the Census point is 2 miles south.
    { id: "GONZ", name: "Gonzales", county: "la-ascension", lat: 30.24, lon: -90.92, type: "metro", size: 2, pop: 126, main: true, level: "baton" },
    // Plaquemine, not St. Gabriel (6,435, 0.2k larger): Iberville's seat and an old river town on the Mississippi with its lock and the state museum; it is 11
    // miles from Baton Rouge, where St. Gabriel (a suburb on I-10) is a town. Assumption's Napoleonville (545) is the region's other town.
    { id: "PLQN", name: "Plaquemine", county: "la-assumption-iberville", lat: 30.29, lon: -91.24, type: "farm", size: 1, pop: 51, main: true, level: "baton" },
    // Addis, the biggest place (6,729) of West Baton Rouge on LA-1 and I-10 down-river of Baton Rouge: Port Allen (4,937) is 2.5 miles across the river from the
    // Capitol and New Roads (4,554, Pointe Coupee) is 25 miles away, so Addis is the natural centre and 9 miles from Baton Rouge.
    { id: "ADDS", name: "Addis", county: "la-pointe-coupee-west-baton-rouge", lat: 30.36, lon: -91.26, type: "farm", size: 1, pop: 48, main: true, level: "baton" },
    // Jackson: the biggest place (3,995) of East Feliciana, St. Helena and West Feliciana, on LA-10 and US-61 in the rolling Felicianas. At downtown.
    { id: "JKLA", name: "Jackson", county: "la-east-feliciana-st-helena-west-feliciana", lat: 30.84, lon: -91.21, type: "farm", size: 1, pop: 46, main: true, level: "baton" },
    // Hammond: Tangipahoa's biggest city (19,623) on I-12 and I-55 (Southeastern Louisiana University and the strawberry and Canadian National country).
    // At downtown; the Census point is 1.5 miles north.
    { id: "HMND", name: "Hammond", county: "la-tangipahoa", lat: 30.50, lon: -90.46, type: "farm", size: 2, pop: 133, main: true, level: "baton" },
    // Bogalusa: Washington's biggest city (10,655), the paper-mill town on the Pearl River and the Canadian National, in the Pine Belt. At downtown.
    { id: "BOGA", name: "Bogalusa", county: "la-washington", lat: 30.79, lon: -89.85, type: "farm", size: 1, pop: 45, main: true, level: "baton" },

    // Level 3: Acadiana and the south-west
    // Lafayette: Acadiana's capital and the state's fourth-biggest city (121,400), on I-10 and I-49, with the University of Louisiana. At downtown; the Census point is 1 mile west.
    { id: "LAFA", name: "Lafayette", county: "la-lafayette", lat: 30.22, lon: -92.02, type: "metro", size: 2, pop: 242, main: true, level: "acadiana" },
    // New Iberia: Iberia's biggest city (28,519) on US-90 and the Teche (Tabasco's Avery Island is 8 miles south-west, a town), in the sugar-cane country. At downtown;
    // the Census point is 1 mile away.
    { id: "NWIB", name: "New Iberia", county: "la-iberia", lat: 30.00, lon: -91.82, type: "farm", size: 1, pop: 70, main: true, level: "acadiana" },
    // Breaux Bridge: St. Martin's biggest place (7,506), the Crawfish capital, by I-10 and the Atchafalaya Basin. At downtown.
    { id: "BXBR", name: "Breaux Bridge", county: "la-st-martin", lat: 30.27, lon: -91.90, type: "farm", size: 1, pop: 52, main: true, level: "acadiana" },
    // Morgan City: St. Mary's biggest city (11,472, 49,406 region) on US-90 and the Atchafalaya River, a port and oil-service town (the Shrimp and Petroleum Festival). At downtown.
    { id: "MGNC", name: "Morgan City", county: "la-st-mary", lat: 29.70, lon: -91.21, type: "coast", size: 1, pop: 49, main: true, level: "acadiana" },
    // Abbeville: Vermilion's biggest city (11,198), on Vermilion River and Vermilion Bay, in the rice, crawfish and sugar-cane country. At downtown.
    { id: "ABVL", name: "Abbeville", county: "la-vermilion", lat: 29.97, lon: -92.13, type: "coast", size: 1, pop: 57, main: true, level: "acadiana" },
    // Crowley: Acadia's biggest city (11,706), the rice capital on I-10 and the Union Pacific, in the Rice country. At downtown.
    { id: "CRLY", name: "Crowley", county: "la-acadia", lat: 30.21, lon: -92.37, type: "farm", size: 1, pop: 58, main: true, level: "acadiana" },
    // Opelousas: St. Landry's seat and biggest city (15,841), on I-49 and US-190 in the Cajun-Creole prairie (the Zydeco country). At downtown.
    { id: "OPLS", name: "Opelousas", county: "la-st-landry", lat: 30.53, lon: -92.08, type: "farm", size: 1, pop: 83, main: true, level: "acadiana" },
    // Ville Platte, the biggest place (6,310) of Avoyelles and Evangeline: the Cajun prairie town on LA-13 and US-167; Marksville (5,070), the seat of Avoyelles, is 40 miles away.
    { id: "VLPL", name: "Ville Platte", county: "la-avoyelles-evangeline", lat: 30.69, lon: -92.27, type: "farm", size: 1, pop: 72, main: true, level: "acadiana" },
    // Jennings: the biggest place (9,838) of Cameron and Jefferson Davis, on I-10 and the Union Pacific, in the rice and oilfield country (the first oil well in Louisiana, 1901). At downtown;
    // Cameron (the empty marsh) has no Census population.
    { id: "JNNG", name: "Jennings", county: "la-cameron-jefferson-davis", lat: 30.22, lon: -92.66, type: "farm", size: 1, pop: 38, main: true, level: "acadiana" },
    // Lake Charles: the Calcasieu's city (84,938), on I-10 and the Calcasieu River with the Port of Lake Charles (a major ship-channel port and petrochemical centre, moderately known). At downtown on the lake;
    // the Census point is 2 miles south-west. Its casinos are in Westlake.
    { id: "LKCH", name: "Lake Charles", county: "la-calcasieu", lat: 30.23, lon: -93.22, port: "Port of Lake Charles", type: "coast", size: 2, pop: 217, main: true, level: "acadiana" },
    // DeRidder: the biggest place (9,851) of Allen and Beauregard, the Beauregard seat on US-171 and US-190 in the pine woods by the Texas border and the Kansas City Southern. At downtown.
    { id: "DRDR", name: "DeRidder", county: "la-allen-beauregard", lat: 30.85, lon: -93.29, type: "farm", size: 1, pop: 59, main: true, level: "acadiana" },
    // Leesville: Vernon's seat and biggest city (5,685) on US-171 and Fort Johnson (the old Fort Polk), in the pine woods. At downtown; New Llano (2,212) is the adjoining town, too close to be a town.
    { id: "LEES", name: "Leesville", county: "la-vernon", lat: 31.14, lon: -93.26, type: "farm", size: 1, pop: 49, main: true, level: "acadiana" },

    // Level 4: the north: Shreveport, the Red River and the delta
    // Shreveport: the biggest city of the north (187,601) on I-20, I-49 and the Red River, with Shreveport Regional Airport (not marked: it is small). At downtown, 5 miles from the Bossier City station.
    // The Census point is 4.6 miles south-west.
    { id: "SHRV", name: "Shreveport", county: "la-caddo", lat: 32.51, lon: -93.75, type: "metro", size: 2, pop: 238, main: true, level: "north" },
    // Bossier City: the biggest city of Bossier (62,716), across the Red from Shreveport (Barksdale Air Force Base, casinos). Moved east from its downtown (1.5 miles from Shreveport's) to Airline Drive,
    // 5 miles from the Shreveport station; the Census point is 4 miles further east.
    { id: "BSCY", name: "Bossier City", county: "la-bossier", lat: 32.52, lon: -93.67, type: "metro", size: 2, pop: 129, main: true, level: "north" },
    // Minden: the biggest place (11,918) of Bienville, Claiborne and Webster, on I-20 and the Union Pacific. At downtown.
    { id: "MDLA", name: "Minden", county: "la-bienville-claiborne-webster", lat: 32.62, lon: -93.29, type: "farm", size: 1, pop: 64, main: true, level: "north" },
    // Mansfield: the biggest place (4,718) and De Soto's seat on US-171 in the pine hills, the Civil War battlefield of 1864 (moderately known). At downtown.
    { id: "MFLD", name: "Mansfield", county: "la-de-soto-red-river-sabine", lat: 32.04, lon: -93.70, type: "farm", size: 1, pop: 57, main: true, level: "north" },
    // Natchitoches: Natchitoches (18,046), the oldest permanent settlement of the Louisiana Purchase on the Cane River Lake, with its historic district (Steel Magnolias): scenic, on I-49.
    // At the historic downtown; the Census point is 2 miles south.
    { id: "NTCH", name: "Natchitoches", county: "la-natchitoches", lat: 31.76, lon: -93.09, scenic: true, type: "farm", size: 1, pop: 38, main: true, level: "north" },
    // Alexandria: Rapides's seat and biggest city (45,262) at the centre of the state, on the Red River, I-49 and the Kansas City Southern (Pineville across the river is 1.5 miles away: not a town).
    // At downtown by the Red River.
    { id: "ALXA", name: "Alexandria", county: "la-rapides", lat: 31.31, lon: -92.45, type: "metro", size: 2, pop: 130, main: true, level: "north" },
    // Jena: the biggest place (4,161) of Grant, LaSalle and Winn (Winnfield, 4,144, is the other seat), on US-84 and US-165 in the pine hills. Jena is the biggest by 17 people.
    { id: "JENA", name: "Jena", county: "la-grant-lasalle-winn", lat: 31.68, lon: -92.13, type: "farm", size: 1, pop: 51, main: true, level: "north" },
    // Ruston: the biggest place of Jackson and Lincoln (22,163), the Louisiana Tech university town on I-20 and the Union Pacific. At downtown.
    { id: "RSTN", name: "Ruston", county: "la-jackson-lincoln", lat: 32.52, lon: -92.64, type: "metro", size: 1, pop: 63, main: true, level: "north" },
    // Monroe: Ouachita's seat and biggest city (47,697), on the Ouachita River, I-20 and the Union Pacific. At downtown; West Monroe (13,093) across the river is 2 miles from it, so it is not a town.
    { id: "MNRO", name: "Monroe", county: "la-ouachita", lat: 32.51, lon: -92.11, type: "metro", size: 2, pop: 160, main: true, level: "north" },
    // Bastrop: Morehouse's seat and biggest place (9,677) of Morehouse and Union, on US-165 and US-425 (paper and gas). At downtown.
    { id: "BSTP", name: "Bastrop", county: "la-morehouse-union", lat: 32.77, lon: -91.91, type: "farm", size: 1, pop: 47, main: true, level: "north" },
    // Winnsboro, the biggest place (4,861) of Caldwell, Franklin and Richland, on LA-15 and US-425 in the cotton, soybean and corn delta (Franklin's seat). At downtown.
    { id: "WNBR", name: "Winnsboro", county: "la-caldwell-franklin-richland", lat: 32.16, lon: -91.72, type: "farm", size: 1, pop: 49, main: true, level: "north" },
    // Tallulah: Madison's seat and the biggest place (6,299) of East Carroll, Madison and West Carroll, on I-20 and US-65 in the Mississippi Delta. At downtown.
    { id: "TLLH", name: "Tallulah", county: "la-east-carroll-madison-west-carroll", lat: 32.41, lon: -91.19, type: "farm", size: 1, pop: 27, main: true, level: "north" },
    // Vidalia: the biggest place (4,025) of Catahoula, Concordia and Tensas, on the Mississippi across from Natchez (the Natchez-Vidalia Bridge, US-84). At downtown.
    { id: "VDLA", name: "Vidalia", county: "la-catahoula-concordia-tensas", lat: 31.57, lon: -91.43, type: "farm", size: 1, pop: 32, main: true, level: "north" },
  ],
  // Towns appear over time inside regions you own. Same fields without main, pop and level.
  towns: [
    { id: "RAYN", name: "Rayne", county: "la-acadia", lat: 30.24, lon: -92.27, type: "farm", size: 1 },
    { id: "OKDL", name: "Oakdale", county: "la-allen-beauregard", lat: 30.82, lon: -92.66, type: "farm", size: 1 },
    { id: "KNDR", name: "Kinder", county: "la-allen-beauregard", lat: 30.48, lon: -92.85, type: "farm", size: 1 },
    { id: "DNVL", name: "Donaldsonville", county: "la-ascension", lat: 30.10, lon: -90.99, type: "farm", size: 1 },
    { id: "SGBR", name: "St. Gabriel", county: "la-assumption-iberville", lat: 30.26, lon: -91.10, type: "metro", size: 1 },
    { id: "NPVL", name: "Napoleonville", county: "la-assumption-iberville", lat: 29.94, lon: -91.03, type: "farm", size: 1 },
    { id: "MRKS", name: "Marksville", county: "la-avoyelles-evangeline", lat: 31.13, lon: -92.07, type: "farm", size: 1 },
    { id: "MAMO", name: "Mamou", county: "la-avoyelles-evangeline", lat: 30.63, lon: -92.42, type: "farm", size: 1 },
    { id: "BNKI", name: "Bunkie", county: "la-avoyelles-evangeline", lat: 30.95, lon: -92.19, type: "farm", size: 1 },
    { id: "SPHL", name: "Springhill", county: "la-bienville-claiborne-webster", lat: 33.00, lon: -93.46, type: "farm", size: 1 },
    { id: "HOMR", name: "Homer", county: "la-bienville-claiborne-webster", lat: 32.79, lon: -93.06, type: "farm", size: 1 },
    { id: "HGTN", name: "Haughton", county: "la-bossier", lat: 32.53, lon: -93.50, type: "metro", size: 1 },
    { id: "BLCH", name: "Blanchard", county: "la-caddo", lat: 32.60, lon: -93.88, type: "metro", size: 1 },
    { id: "VVIA", name: "Vivian", county: "la-caddo", lat: 32.87, lon: -93.99, type: "farm", size: 1 },
    { id: "GRNW", name: "Greenwood", county: "la-caddo", lat: 32.43, lon: -93.96, type: "farm", size: 1 },
    { id: "SLPH", name: "Sulphur", county: "la-calcasieu", lat: 30.23, lon: -93.37, type: "coast", size: 2 },
    { id: "VNLA", name: "Vinton", county: "la-calcasieu", lat: 30.19, lon: -93.58, type: "farm", size: 1 },
    { id: "IOWA", name: "Iowa", county: "la-calcasieu", lat: 30.24, lon: -93.01, type: "farm", size: 1 },
    { id: "RYVL", name: "Rayville", county: "la-caldwell-franklin-richland", lat: 32.47, lon: -91.76, type: "farm", size: 1 },
    { id: "DLHI", name: "Delhi", county: "la-caldwell-franklin-richland", lat: 32.45, lon: -91.49, type: "farm", size: 1 },
    { id: "WLSH", name: "Welsh", county: "la-cameron-jefferson-davis", lat: 30.24, lon: -92.81, type: "farm", size: 1 },
    // Cameron: where the Creole Nature Trail (an All-American Road, LA-27 along the Gulf marsh) meets the Calcasieu ship-channel ferry; the Sabine and Cameron Prairie refuges
    { id: "CMRL", name: "Cameron", county: "la-cameron-jefferson-davis", lat: 29.80, lon: -93.29, scenic: true, type: "coast", size: 1 },
    { id: "FRDY", name: "Ferriday", county: "la-catahoula-concordia-tensas", lat: 31.63, lon: -91.56, type: "farm", size: 1 },
    { id: "JNVL", name: "Jonesville", county: "la-catahoula-concordia-tensas", lat: 31.62, lon: -91.83, type: "farm", size: 1 },
    { id: "STJS", name: "St. Joseph", county: "la-catahoula-concordia-tensas", lat: 31.92, lon: -91.24, type: "farm", size: 1 },
    { id: "MANY", name: "Many", county: "la-de-soto-red-river-sabine", lat: 31.57, lon: -93.48, type: "farm", size: 1 },
    { id: "CSHT", name: "Coushatta", county: "la-de-soto-red-river-sabine", lat: 32.03, lon: -93.34, type: "farm", size: 1 },
    { id: "ZCHR", name: "Zachary", county: "la-east-baton-rouge", lat: 30.65, lon: -91.16, type: "metro", size: 1 },
    { id: "CNTL", name: "Central", county: "la-east-baton-rouge", lat: 30.56, lon: -91.04, type: "metro", size: 1 },
    { id: "LKPR", name: "Lake Providence", county: "la-east-carroll-madison-west-carroll", lat: 32.80, lon: -91.18, type: "farm", size: 1 },
    { id: "OKGV", name: "Oak Grove", county: "la-east-carroll-madison-west-carroll", lat: 32.86, lon: -91.39, type: "farm", size: 1 },
    // Poverty Point: the World Heritage Site (the 3,400-year-old earthworks of Poverty Point, near Epps)
    { id: "PVPT", name: "Poverty Point", county: "la-east-carroll-madison-west-carroll", lat: 32.64, lon: -91.41, scenic: true, type: "farm", size: 1 },
    { id: "SFRV", name: "St. Francisville", county: "la-east-feliciana-st-helena-west-feliciana", lat: 30.78, lon: -91.38, type: "farm", size: 1 },
    { id: "CLNL", name: "Clinton", county: "la-east-feliciana-st-helena-west-feliciana", lat: 30.86, lon: -91.02, type: "farm", size: 1 },
    { id: "GRSB", name: "Greensburg", county: "la-east-feliciana-st-helena-west-feliciana", lat: 30.83, lon: -90.67, type: "farm", size: 1 },
    { id: "WNFD", name: "Winnfield", county: "la-grant-lasalle-winn", lat: 31.92, lon: -92.64, type: "farm", size: 1 },
    { id: "CFLA", name: "Colfax", county: "la-grant-lasalle-winn", lat: 31.52, lon: -92.70, type: "farm", size: 1 },
    { id: "JNRT", name: "Jeanerette", county: "la-iberia", lat: 29.92, lon: -91.68, type: "farm", size: 1 },
    // Avery Island: the salt dome of the Tabasco sauce factory, Jungle Gardens and the bird sanctuary
    { id: "AVRY", name: "Avery Island", county: "la-iberia", lat: 29.90, lon: -91.91, scenic: true, type: "farm", size: 1 },
    { id: "JNSB", name: "Jonesboro", county: "la-jackson-lincoln", lat: 32.24, lon: -92.72, type: "farm", size: 1 },
    // Grand Isle: the barrier island and Louisiana's only inhabited one (beach, the Grand Isle State Park), at the end of LA-1
    { id: "GRIS", name: "Grand Isle", county: "la-jefferson", lat: 29.21, lon: -90.03, scenic: true, type: "coast", size: 1 },
    { id: "WSWG", name: "Westwego", county: "la-jefferson", lat: 29.91, lon: -90.14, type: "metro", size: 1 },
    { id: "BRSD", name: "Broussard", county: "la-lafayette", lat: 30.15, lon: -91.96, type: "metro", size: 1 },
    { id: "CRNC", name: "Carencro", county: "la-lafayette", lat: 30.32, lon: -92.04, type: "metro", size: 1 },
    { id: "LCKP", name: "Lockport", county: "la-lafourche", lat: 29.64, lon: -90.53, type: "farm", size: 1 },
    { id: "GMDW", name: "Golden Meadow", county: "la-lafourche", lat: 29.39, lon: -90.26, type: "coast", size: 1 },
    { id: "WLKL", name: "Walker", county: "la-livingston", lat: 30.49, lon: -90.87, type: "farm", size: 1 },
    { id: "FMVL", name: "Farmerville", county: "la-morehouse-union", lat: 32.78, lon: -92.40, type: "farm", size: 1 },
    { id: "CMPT", name: "Campti", county: "la-natchitoches", lat: 31.90, lon: -93.12, type: "farm", size: 1 },
    { id: "STLN", name: "Sterlington", county: "la-ouachita", lat: 32.69, lon: -92.06, type: "farm", size: 1 },
    { id: "BCHS", name: "Belle Chasse", county: "la-plaquemines-st-bernard", lat: 29.85, lon: -90.00, type: "coast", size: 1 },
    { id: "BURS", name: "Buras", county: "la-plaquemines-st-bernard", lat: 29.35, lon: -89.52, type: "coast", size: 1 },
    { id: "NWRD", name: "New Roads", county: "la-pointe-coupee-west-baton-rouge", lat: 30.70, lon: -91.43, type: "farm", size: 1 },
    { id: "BALL", name: "Ball", county: "la-rapides", lat: 31.42, lon: -92.41, type: "metro", size: 1 },
    { id: "GLNM", name: "Glenmora", county: "la-rapides", lat: 30.97, lon: -92.58, type: "farm", size: 1 },
    { id: "BOUT", name: "Boutte", county: "la-st-charles", lat: 29.89, lon: -90.39, type: "farm", size: 1 },
    { id: "LTCL", name: "Lutcher", county: "la-st-james-st-john-the-baptist", lat: 30.06, lon: -90.71, type: "farm", size: 1 },
    // Oak Alley Plantation: the avenue of 28 live oaks on the River Road at Vacherie
    { id: "OKAL", name: "Oak Alley Plantation", county: "la-st-james-st-john-the-baptist", lat: 30.00, lon: -90.78, scenic: true, type: "farm", size: 1 },
    { id: "EUNC", name: "Eunice", county: "la-st-landry", lat: 30.49, lon: -92.42, type: "farm", size: 1 },
    { id: "STMV", name: "St. Martinville", county: "la-st-martin", lat: 30.13, lon: -91.83, type: "farm", size: 1 },
    // Atchafalaya Basin: the biggest swamp in the country, reached at Henderson (I-10 exit 115, the swamp tours)
    { id: "ATFB", name: "Atchafalaya Basin", county: "la-st-martin", lat: 30.32, lon: -91.80, scenic: true, type: "farm", size: 1 },
    { id: "FRNK", name: "Franklin", county: "la-st-mary", lat: 29.78, lon: -91.51, type: "farm", size: 1 },
    { id: "PTTR", name: "Patterson", county: "la-st-mary", lat: 29.69, lon: -91.31, type: "coast", size: 1 },
    { id: "CVGT", name: "Covington", county: "la-st-tammany", lat: 30.48, lon: -90.10, type: "metro", size: 1 },
    { id: "MNVL", name: "Mandeville", county: "la-st-tammany", lat: 30.38, lon: -90.07, type: "metro", size: 1 },
    { id: "PNCH", name: "Ponchatoula", county: "la-tangipahoa", lat: 30.44, lon: -90.44, type: "farm", size: 1 },
    { id: "AMIT", name: "Amite", county: "la-tangipahoa", lat: 30.73, lon: -90.52, type: "farm", size: 1 },
    { id: "CHVN", name: "Chauvin", county: "la-terrebonne", lat: 29.45, lon: -90.59, type: "coast", size: 1 },
    { id: "KPLN", name: "Kaplan", county: "la-vermilion", lat: 30.00, lon: -92.28, type: "farm", size: 1 },
    { id: "RSPN", name: "Rosepine", county: "la-vernon", lat: 30.92, lon: -93.29, type: "farm", size: 1 },
    { id: "FRKT", name: "Franklinton", county: "la-washington", lat: 30.85, lon: -90.15, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "New Orleans & the River Parishes",
      areas: ["neworleans"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Baton Rouge & the Florida Parishes",
      areas: ["baton"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // New Orleans to Baton Rouge, as I-10 runs up the river (by Kenner, LaPlace and Gonzales)
        { kind: "connect", a: "NOLA", b: "BTR" },
        { kind: "counties", target: 12 },
      ],
    },
    {
      name: "Acadiana & the South-west",
      areas: ["acadiana"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Baton Rouge to Lafayette, I-10 over the Atchafalaya Basin
        { kind: "connect", a: "BTR", b: "LAFA" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Shreveport, the Red River & the Delta",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Shreveport to Alexandria, as I-49 runs (by Natchitoches)
        { kind: "connect", a: "SHRV", b: "ALXA" },
        { kind: "counties", target: 25 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Louisiana is flat (its highest point is
  // Driskill Mountain, 535 ft), so none.
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river or lake where the real crossing is. Sources in NOTES.md.
  bridges: [
    // Lake Pontchartrain: the Causeway (24 miles, Metairie to Mandeville; three points along it) and the I-10 Twin Span and the US-90 Rigolets bridge in the east
    ["Lake Pontchartrain Causeway (south end, Metairie)", 30.05, -90.13],
    ["Lake Pontchartrain Causeway (middle)", 30.19, -90.11],
    ["Lake Pontchartrain Causeway (north end, Mandeville)", 30.33, -90.09],
    ["Twin Span Bridge (I-10, Slidell–New Orleans East)", 30.15, -89.86],
    ["Rigolets Bridge (US-90)", 30.17, -89.74],
    ["Pass Manchac bridges (I-55 and US-51)", 30.29, -90.41],
    // The Mississippi
    ["Crescent City Connection (US-90, New Orleans–Algiers)", 29.95, -90.04],
    ["Huey P. Long Bridge (US-90, Jefferson)", 29.95, -90.17],
    ["Hale Boggs Bridge (I-310, Luling–Destrehan)", 29.95, -90.36],
    ["Gramercy Bridge (LA-3213, Gramercy–Wallace)", 30.05, -90.68],
    ["Sunshine Bridge (LA-70, Donaldsonville)", 30.12, -90.95],
    ["Horace Wilkinson Bridge (I-10, Baton Rouge)", 30.44, -91.19],
    ["Huey P. Long Bridge (US-190, Baton Rouge)", 30.46, -91.19],
    ["Audubon Bridge (LA-10, New Roads–St. Francisville)", 30.75, -91.41],
    ["Natchez–Vidalia Bridge (US-84)", 31.57, -91.44],
    ["Vicksburg Bridge (I-20)", 32.33, -90.91],
    // The Red, the Ouachita and the Black
    ["Texas Street Bridge (Shreveport–Bossier City)", 32.53, -93.74],
    ["Red River bridge (US-71, Coushatta)", 32.00, -93.36],
    ["Red River bridge (US-84, Colfax)", 31.52, -92.72],
    ["Jackson Street Bridge (Alexandria–Pineville)", 31.31, -92.44],
    ["Ouachita River bridge (US-80, Monroe–West Monroe)", 32.51, -92.13],
    ["Ouachita River bridge (US-165, Columbia)", 32.11, -92.07],
    ["Black River bridge (US-84, Jonesville)", 31.62, -91.81],
    // The Sabine, the Calcasieu, the Mermentau, the Amite and the Pearl
    ["Sabine River bridge (I-10, Orange)", 30.09, -93.72],
    ["Calcasieu River bridge (I-10, Lake Charles)", 30.24, -93.24],
    ["Cameron Ferry (LA-27, Calcasieu Ship Channel)", 29.80, -93.33],
    ["Mermentau River bridge (I-10, Mermentau)", 30.17, -92.61],
    ["Amite River bridge (I-12, Denham Springs)", 30.45, -90.98],
    ["Pearl River bridge (I-10, Slidell)", 30.38, -89.73],
    // The Atchafalaya at Morgan City
    ["Long-Allen Bridge (US-90, Morgan City)", 29.70, -91.21],
    // The Atchafalaya upstream (added by the main agent once the river was on the map; on the
    // map's river, within a few miles of the real crossings)
    ["Atchafalaya Basin Bridge (I-10)", 30.33, -91.62],
    ["Atchafalaya River bridge (US-190, Krotz Springs)", 30.52, -91.73],
    ["Atchafalaya River bridge (LA-1, Simmesport)", 30.98, -91.8],
  ],
  // Bays: water inside one of these outlines needs a bridge (elsewhere, sea between two
  // coastal stations just means the track follows the coast). ring = longitude, latitude pairs.
  bays: [
    {
      // The parishes are cut at its shore, so it is sea on the map: track crosses only at the Causeway, the Twin Span, the Rigolets bridge or around the shore.
      // The ring is wider than the lake: land inside it stays land.
      name: "Lake Pontchartrain",
      ring: [-90.42, 30.10, -90.40, 30.27, -90.15, 30.40, -89.95, 30.38, -89.80, 30.30, -89.68, 30.20, -89.68, 30.08, -89.85, 30.00, -90.10, 30.00, -90.35, 30.05],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    // The pine flats and the cypress swamps: the Piney Woods of Vernon, Beauregard and Allen, the Kisatchie hills, the north-west pine belt,
    // the Florida Parishes, and the swamp parishes of the south-east (as Arkansas's pine belt, Texas's Piney Woods)
    forest: ["la-allen-beauregard", "la-vernon", "la-natchitoches", "la-grant-lasalle-winn", "la-bienville-claiborne-webster", "la-de-soto-red-river-sabine", "la-jackson-lincoln", "la-rapides", "la-washington", "la-st-tammany", "la-livingston", "la-tangipahoa", "la-east-feliciana-st-helena-west-feliciana", "la-st-charles", "la-st-james-st-john-the-baptist", "la-lafourche", "la-terrebonne", "la-st-mary", "la-assumption-iberville"],
    // The bottomland hardwoods of the Delta and the Ouachita and Red valleys
    wooded: ["la-caddo", "la-bossier", "la-ouachita", "la-morehouse-union", "la-caldwell-franklin-richland", "la-catahoula-concordia-tensas", "la-east-carroll-madison-west-carroll"],
    // Not listed (farmland and grassland): the Cajun prairie (rice and crawfish), the sugar-cane country, the river parishes and the marsh. No `dry`: Louisiana has no desert.
  },
});
