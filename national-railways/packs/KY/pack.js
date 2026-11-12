// National Railways pack: Kentucky.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests are. The county borders come from map.js and the mountains, lakes and
// rivers from terrain.js. What each field means: PACKS.md. Judgment calls and sources:
// packs/KY/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/KY/raw. Kentucky's
// 120 counties are 60 regions (merges in tools/build-map.js, STATES.KY).
NR.addPack({
  code: "KY",
  name: "Kentucky",
  // A game that starts here begins owning Jefferson (Louisville), Bullitt (Mount Washington) and
  // Hardin (Elizabethtown), which all touch each other. Louisville and Mount Washington are metro
  // and Elizabethtown is farm, so the first track (Mount Washington-Elizabethtown, the nearest
  // pair of different types) has riders; Louisville-Mount Washington joins two metros, which
  // carries nobody in "A type of place".
  start: ["ky-jefferson", "ky-bullitt", "ky-hardin"],
  // Main stations: one per region, at its biggest place except Williamstown (not Crittenden) and
  // the downtown points noted (a Census point is the middle of the city limits). id = the short
  // code shown on passengers. county = region id in this folder's map.js. pop = region population
  // in thousands (2020 census). size = how busy (1 to 5). level = which level unlocks it.
  stations: [
    // Level: louisville (Louisville and the Knobs)
    // Lawrenceburg (11,727, ahead of Versailles, 10,350 and Harrodsburg, 9,067); the regions 73k.
    { id: "LWR", name: "Lawrenceburg", county: "ky-anderson-mercer-woodford", lat: 38.03, lon: -84.9, type: "farm", size: 2, pop: 73, main: true, level: "louisville" },
    // Danville (17,241, ahead of Lancaster, 3,899 and Stanford, 3,657); the regions 72k.
    { id: "DANV", name: "Danville", county: "ky-boyle-garrard-lincoln", lat: 37.64, lon: -84.78, type: "farm", size: 2, pop: 72, main: true, level: "louisville" },
    // Brandenburg (2,890, ahead of Hardinsburg, 2,384 and Lewisport, 1,771); the regions 60k.
    { id: "BRAN", name: "Brandenburg", county: "ky-breckinridge-hancock-meade", lat: 38, lon: -86.18, type: "farm", size: 1, pop: 60, main: true, level: "louisville" },
    // Mount Washington (18,097, ahead of Shepherdsville, 14,220 and Hillview, 8,640); the region 82k.
    { id: "MTWA", name: "Mount Washington", county: "ky-bullitt", lat: 38.04, lon: -85.56, type: "metro", size: 2, pop: 82, main: true, level: "louisville" },
    // Carrollton (3,881, ahead of Warsaw, 1,760 and Milton, 586); the regions 28k.
    { id: "CAON", name: "Carrollton", county: "ky-carroll-gallatin-trimble", lat: 38.68, lon: -85.17, type: "farm", size: 1, pop: 28, main: true, level: "louisville" },
    // Frankfort (28,608); the region 52k.
    { id: "FRRT", name: "Frankfort", county: "ky-franklin", lat: 38.2, lon: -84.87, type: "farm", size: 2, pop: 52, main: true, level: "louisville" },
    // Hodgenville (3,234, ahead of Horse Cave, 2,219 and Greensburg, 2,180); the regions 45k.
    { id: "HODG", name: "Hodgenville", county: "ky-green-hart-larue", lat: 37.56, lon: -85.73, type: "farm", size: 1, pop: 45, main: true, level: "louisville" },
    // Elizabethtown (31,390, ahead of Radcliff, 23,022 and Vine Grove, 6,571); the region 111k.
    { id: "ELIZ", name: "Elizabethtown", county: "ky-hardin", lat: 37.7, lon: -85.88, type: "farm", size: 2, pop: 111, main: true, level: "louisville" },
    // Shelbyville (17,291, ahead of Simpsonville, 2,975 and Eminence, 2,709); the regions 64k.
    { id: "SHLB", name: "Shelbyville", county: "ky-henry-shelby", lat: 38.21, lon: -85.23, type: "farm", size: 2, pop: 64, main: true, level: "louisville" },
    // Louisville (Louisville/Jefferson County metro government 631,976; Jefferson County 783k, the state's biggest region, size 4 like Indianapolis, Omaha and Kansas City). At the downtown waterfront (the Census point, 38.17, -85.65, is the middle of the metro-government limits): 5.5 mi from Jeffersonville and 4.8 mi from New Albany (Indiana's stations), the Kennedy, Clark Memorial and Sherman Minton bridges between. Louisville Muhammad Ali International Airport (SDF, also UPS's Worldport hub). Churchill Downs (3 mi south of downtown) is scenic and marked on the station. SDF is the airport code (LOU is taken in Nova Scotia).
    { id: "SDF", name: "Louisville", county: "ky-jefferson", lat: 38.25, lon: -85.76, airport: "Louisville Muhammad Ali International Airport", scenic: true, type: "metro", size: 4, pop: 783, main: true, level: "louisville" },
    // Campbellsville (11,452, ahead of Lebanon, 6,283 and Loretto, 717); the regions 46k.
    { id: "CAMP", name: "Campbellsville", county: "ky-marion-taylor", lat: 37.34, lon: -85.35, type: "farm", size: 2, pop: 46, main: true, level: "louisville" },
    // Bardstown (13,565, ahead of Springfield, 2,853), the seat of Nelson, the Bourbon Capital of the World (the Kentucky Bourbon Trail distilleries, Federal Hill/My Old Kentucky Home State Park) and the Bluegrass Parkway; scenic is marked on the station; the three counties 78k.
    { id: "BARD", name: "Bardstown", county: "ky-nelson-spencer-washington", lat: 37.82, lon: -85.46, scenic: true, type: "farm", size: 2, pop: 78, main: true, level: "louisville" },
    // La Grange (10,053, ahead of Crestwood, 6,191 and Pewee Valley, 1,587); the region 68k.
    { id: "LG", name: "La Grange", county: "ky-oldham", lat: 38.4, lon: -85.38, type: "metro", size: 2, pop: 68, main: true, level: "louisville" },
    // Level: bluegrass (Lexington, the Bluegrass and Northern Kentucky)
    // Mount Sterling (7,555, ahead of Jeffersonville, 1,704 and Owingsville, 1,592); the regions 47k.
    { id: "MTST", name: "Mount Sterling", county: "ky-bath-menifee-montgomery", lat: 38.07, lon: -83.95, type: "farm", size: 1, pop: 47, main: true, level: "bluegrass" },
    // Florence (31,954), the biggest place of Boone and Northern Kentucky's second city, on I-71/I-75 (the Florence Y'all water tower); the county 136k. The big airport, CVG (Hebron, in Boone County), is marked on Cincinnati's station in Ohio's pack (the Cincinnati/Northern Kentucky metro's airport), not here.
    { id: "FLOR", name: "Florence", county: "ky-boone", lat: 38.99, lon: -84.65, type: "metro", size: 2, pop: 136, main: true, level: "bluegrass" },
    // Paris (10,169, ahead of Cynthiana, 6,334 and Carlisle, 2,093); the regions 46k.
    { id: "PAIS", name: "Paris", county: "ky-bourbon-harrison-nicholas", lat: 38.2, lon: -84.27, type: "farm", size: 2, pop: 46, main: true, level: "bluegrass" },
    // Falmouth (2,217, ahead of Augusta, 1,098 and Brooksville, 655); the regions 23k.
    { id: "FALM", name: "Falmouth", county: "ky-bracken-pendleton", lat: 38.67, lon: -84.33, type: "farm", size: 1, pop: 23, main: true, level: "bluegrass" },
    // Fort Thomas (17,435, ahead of Newport, 14,160, and Alexandria, 10,346), the Cincinnati suburb on the hills over the Ohio River. Newport (the seat, 39.09, -84.49) lies 1.7 mi from the Census point and 1.5 mi from Cincinnati's riverfront, too close to be a separate place; the station is put at the south end of Fort Thomas (39.06, -84.45) so it is 4.2 mi from Cincinnati's station and 4.1 mi from Covington's; the county 93k.
    { id: "FTHO", name: "Fort Thomas", county: "ky-campbell", lat: 39.06, lon: -84.45, type: "metro", size: 2, pop: 93, main: true, level: "bluegrass" },
    // Winchester (19,148, ahead of Stanton, 3,248 and Irvine, 2,358); the regions 64k.
    { id: "WINC", name: "Winchester", county: "ky-clark-estill-powell", lat: 38, lon: -84.19, type: "farm", size: 2, pop: 64, main: true, level: "bluegrass" },
    // Lexington (322,564, the Lexington-Fayette urban county; the county is one city; size 3, the second city of Kentucky and the Horse Capital of the World). At the downtown courthouse (the Census point is 38.04, -84.46). Blue Grass Airport.
    { id: "LEX", name: "Lexington", county: "ky-fayette", lat: 38.05, lon: -84.5, airport: "Blue Grass Airport", type: "metro", size: 3, pop: 323, main: true, level: "bluegrass" },
    // Maysville (8,874, ahead of Flemingsburg, 2,956 and Mount Olivet, 345); the regions 34k.
    { id: "MAYS", name: "Maysville", county: "ky-fleming-mason-robertson", lat: 38.65, lon: -83.79, type: "farm", size: 1, pop: 34, main: true, level: "bluegrass" },
    // Williamstown (3,899, the seat of Grant, in the middle of the region on I-75), not Crittenden (4,020, a northern exurb of Northern Kentucky 11 mi away that would also clash in name with Crittenden County); Dry Ridge (2,164) and Owenton (1,682, Owen's seat) are towns here; the two counties 36k.
    { id: "WLMT", name: "Williamstown", county: "ky-grant-owen", lat: 38.64, lon: -84.57, type: "farm", size: 1, pop: 36, main: true, level: "bluegrass" },
    // Mount Vernon (2,452, ahead of Brodhead, 1,118 and McKee, 805); the regions 29k.
    { id: "MNTV", name: "Mount Vernon", county: "ky-jackson-rockcastle", lat: 37.36, lon: -84.33, type: "farm", size: 1, pop: 29, main: true, level: "bluegrass" },
    // Nicholasville (31,115, ahead of Wilmore, 6,005 and Keene, 100); the region 53k.
    { id: "NICH", name: "Nicholasville", county: "ky-jessamine", lat: 37.89, lon: -84.57, type: "metro", size: 2, pop: 53, main: true, level: "bluegrass" },
    // Covington (40,949, ahead of Independence, 28,688), the seat on the Ohio River facing Cincinnati (4.5 mi from Cincinnati's station; Roebling and Brent Spence bridges); the county 169k. At the Census point (the city's centre), not the riverfront, so it keeps 4 mi from Cincinnati.
    { id: "COV", name: "Covington", county: "ky-kenton", lat: 39.04, lon: -84.52, type: "metro", size: 2, pop: 169, main: true, level: "bluegrass" },
    // London (7,572); the region 63k.
    { id: "LNDN", name: "London", county: "ky-laurel", lat: 37.11, lon: -84.08, type: "farm", size: 2, pop: 63, main: true, level: "bluegrass" },
    // Richmond (34,589, ahead of Berea, 15,547); the region 93k.
    { id: "RIND", name: "Richmond", county: "ky-madison", lat: 37.73, lon: -84.3, type: "metro", size: 2, pop: 93, main: true, level: "bluegrass" },
    // Somerset (11,923, ahead of Ferguson, 860 and Burnside, 703); the region 65k.
    { id: "SOME", name: "Somerset", county: "ky-pulaski", lat: 37.09, lon: -84.61, type: "farm", size: 2, pop: 65, main: true, level: "bluegrass" },
    // Georgetown (37,549, ahead of Stamping Ground, 780 and Sadieville, 320); the region 57k.
    { id: "GEWN", name: "Georgetown", county: "ky-scott", lat: 38.26, lon: -84.53, type: "metro", size: 2, pop: 57, main: true, level: "bluegrass" },
    // Level: east (the Appalachian coalfield and Ashland)
    // Middlesborough (9,403, ahead of Harlan, 1,989), the Cumberland Gap city on US-25E and the old Louisville & Nashville railway. The Cumberland Gap National Historical Park (NPS, the gap itself 3 mi south-east of town, on the Virginia and Tennessee lines) is scenic and marked on the station; the two counties 51k.
    { id: "MDSB", name: "Middlesborough", county: "ky-bell-harlan", lat: 36.61, lon: -83.72, scenic: true, type: "mountain", size: 1, pop: 51, main: true, level: "east" },
    // Ashland (21,627, ahead of Catlettsburg, 1,776); the region 48k.
    { id: "ASND", name: "Ashland", county: "ky-boyd", lat: 38.46, lon: -82.65, type: "farm", size: 2, pop: 48, main: true, level: "east" },
    // Jackson (2,241, ahead of Beattyville, 2,175 and Booneville, 164); the regions 25k.
    { id: "JKSN", name: "Jackson", county: "ky-breathitt-lee-owsley", lat: 37.57, lon: -83.38, type: "mountain", size: 1, pop: 25, main: true, level: "east" },
    // Morehead (7,148, ahead of Grayson, 3,840 and Olive Hill, 1,582); the regions 59k.
    { id: "MORE", name: "Morehead", county: "ky-carter-elliott-rowan", lat: 38.19, lon: -83.45, type: "farm", size: 1, pop: 59, main: true, level: "east" },
    // Barbourville (3,214, ahead of Manchester, 1,520); the regions 51k.
    { id: "BRBR", name: "Barbourville", county: "ky-clay-knox", lat: 36.87, lon: -83.88, type: "mountain", size: 1, pop: 51, main: true, level: "east" },
    // Prestonsburg (3,921, ahead of Hindman, 705 and Martin, 513); the regions 50k.
    { id: "PRST", name: "Prestonsburg", county: "ky-floyd-knott", lat: 37.68, lon: -82.77, type: "mountain", size: 1, pop: 50, main: true, level: "east" },
    // Flatwoods (7,323, ahead of Russell, 3,746), the Ohio River town next to Raceland and Russell, opposite Ironton, Ohio (Ironton-Russell Bridge). The Census point (38.52, -82.72) is 2.2 mi from Ironton's station, so it is moved to 38.55, -82.76 (Raceland-Flatwoods), 4.3 mi away, still in Greenup County; the two counties 49k.
    { id: "FLAT", name: "Flatwoods", county: "ky-greenup-lewis", lat: 38.55, lon: -82.76, type: "farm", size: 1, pop: 49, main: true, level: "east" },
    // Paintsville (4,322, ahead of Louisa, 2,677 and Inez, 545); the regions 50k.
    { id: "PNTS", name: "Paintsville", county: "ky-johnson-lawrence-martin", lat: 37.82, lon: -82.81, type: "mountain", size: 1, pop: 50, main: true, level: "east" },
    // Hazard (5,257, ahead of Jenkins, 1,904 and Whitesburg, 1,772); the regions 61k.
    { id: "HAZA", name: "Hazard", county: "ky-leslie-letcher-perry", lat: 37.26, lon: -83.2, type: "mountain", size: 1, pop: 61, main: true, level: "east" },
    // West Liberty (3,221, ahead of Salyersville, 1,589 and Campton, 315); the regions 32k.
    { id: "WL", name: "West Liberty", county: "ky-magoffin-morgan-wolfe", lat: 37.92, lon: -83.27, type: "mountain", size: 1, pop: 32, main: true, level: "east" },
    // Corbin (7,843, ahead of Williamsburg, 5,331); the regions 54k.
    { id: "CORB", name: "Corbin", county: "ky-mccreary-whitley", lat: 36.93, lon: -84.1, type: "mountain", size: 1, pop: 54, main: true, level: "east" },
    // Pikeville (7,758, ahead of Coal Run Village, 1,667 and Elkhorn City, 1,037); the region 59k.
    { id: "PIKE", name: "Pikeville", county: "ky-pike", lat: 37.48, lon: -82.53, type: "mountain", size: 2, pop: 59, main: true, level: "east" },
    // Level: west (Bowling Green, Owensboro, Paducah and the Pennyrile)
    // Columbia (4,847, ahead of Liberty, 2,030); the regions 35k.
    { id: "COIA", name: "Columbia", county: "ky-adair-casey", lat: 37.1, lon: -85.31, type: "farm", size: 1, pop: 35, main: true, level: "west" },
    // Franklin (10,193, ahead of Scottsville, 4,296); the regions 40k.
    { id: "FRA", name: "Franklin", county: "ky-allen-simpson", lat: 36.72, lon: -86.56, type: "farm", size: 2, pop: 40, main: true, level: "west" },
    // La Center (881, ahead of Bardwell, 710 and Wickliffe, 666); the regions 13k.
    { id: "LCTR", name: "La Center", county: "ky-ballard-carlisle", lat: 37.07, lon: -88.98, type: "farm", size: 1, pop: 13, main: true, level: "west" },
    // Glasgow (15,025, ahead of Cave City, 2,357 and Edmonton, 1,683); the regions 55k.
    { id: "GLAS", name: "Glasgow", county: "ky-barren-metcalfe", lat: 37, lon: -85.93, type: "farm", size: 2, pop: 55, main: true, level: "west" },
    // Leitchfield (6,405, ahead of Morgantown, 2,506 and Clarkson, 936); the regions 51k.
    { id: "LEIT", name: "Leitchfield", county: "ky-butler-edmonson-grayson", lat: 37.49, lon: -86.28, type: "farm", size: 1, pop: 51, main: true, level: "west" },
    // Princeton (6,266, ahead of Cadiz, 2,538 and Fredonia, 373); the regions 27k.
    { id: "PRIN", name: "Princeton", county: "ky-caldwell-trigg", lat: 37.11, lon: -87.88, type: "farm", size: 1, pop: 27, main: true, level: "west" },
    // Murray (17,752, ahead of Benton, 4,762 and Calvert City, 2,516); the regions 69k.
    { id: "MURR", name: "Murray", county: "ky-calloway-marshall", lat: 36.61, lon: -88.32, type: "farm", size: 2, pop: 69, main: true, level: "west" },
    // Hopkinsville (31,175, ahead of Oak Grove, 7,935 and Pembroke, 862); the region 73k.
    { id: "HOPK", name: "Hopkinsville", county: "ky-christian", lat: 36.84, lon: -87.47, type: "farm", size: 2, pop: 73, main: true, level: "west" },
    // Tompkinsville (2,302, ahead of Albany, 1,759 and Burkesville, 1,379); the regions 26k.
    { id: "TOMP", name: "Tompkinsville", county: "ky-clinton-cumberland-monroe", lat: 36.7, lon: -85.69, type: "farm", size: 1, pop: 26, main: true, level: "west" },
    // Marion (2,912, ahead of Eddyville, 2,378 and Salem, 718); the regions 27k.
    { id: "MAON", name: "Marion", county: "ky-crittenden-livingston-lyon", lat: 37.33, lon: -88.08, type: "farm", size: 1, pop: 27, main: true, level: "west" },
    // Owensboro (60,234, the third biggest city of Kentucky), the seat on the Ohio River and US-60/US-231, with the William H. Natcher Bridge to Indiana. At the downtown riverfront (the Census point, 37.76, -87.12, is 1.2 mi south-west); the county 103k.
    { id: "OWEN", name: "Owensboro", county: "ky-daviess", lat: 37.77, lon: -87.11, type: "metro", size: 2, pop: 103, main: true, level: "west" },
    // Mayfield (10,022, ahead of Hickman, 2,360 and Fulton, 2,359); the regions 48k.
    { id: "MAYF", name: "Mayfield", county: "ky-fulton-graves-hickman", lat: 36.74, lon: -88.64, type: "farm", size: 2, pop: 48, main: true, level: "west" },
    // Henderson (28,207, ahead of Morganfield, 3,255 and Sturgis, 1,739); the regions 58k.
    { id: "HEND", name: "Henderson", county: "ky-henderson-union", lat: 37.84, lon: -87.58, type: "metro", size: 2, pop: 58, main: true, level: "west" },
    // Madisonville (19,553, ahead of Providence, 2,892 and Dawson Springs, 2,457); the regions 68k.
    { id: "MALE", name: "Madisonville", county: "ky-hopkins-mclean-webster", lat: 37.34, lon: -87.5, type: "farm", size: 2, pop: 68, main: true, level: "west" },
    // Russellville (7,165, ahead of Elkton, 2,060 and Auburn, 1,592); the regions 40k.
    { id: "RUSS", name: "Russellville", county: "ky-logan-todd", lat: 36.84, lon: -86.9, type: "farm", size: 1, pop: 40, main: true, level: "west" },
    // Paducah (27,124), the seat where the Tennessee River meets the Ohio, on I-24, the Illinois Central/Canadian National line and the Irvin S. Cobb Bridge to Metropolis. At the downtown riverfront (the Census point, 37.07, -88.64, is 2.5 mi south-west); the county 68k.
    { id: "PADU", name: "Paducah", county: "ky-mccracken", lat: 37.08, lon: -88.6, type: "metro", size: 2, pop: 68, main: true, level: "west" },
    // Central City (5,823, ahead of Greenville, 4,491 and Beaver Dam, 3,537); the regions 55k.
    { id: "CNTC", name: "Central City", county: "ky-muhlenberg-ohio", lat: 37.3, lon: -87.13, type: "farm", size: 1, pop: 55, main: true, level: "west" },
    // Monticello (5,749, ahead of Russell Springs, 2,723 and Jamestown, 1,860); the regions 38k.
    { id: "MONT", name: "Monticello", county: "ky-russell-wayne", lat: 36.84, lon: -84.85, type: "farm", size: 1, pop: 38, main: true, level: "west" },
    // Bowling Green (72,311, ahead of Smiths Grove, 754 and Plum Springs, 500); the region 135k.
    { id: "BWG", name: "Bowling Green", county: "ky-warren", lat: 36.98, lon: -86.44, type: "metro", size: 2, pop: 135, main: true, level: "west" },
  ],
  // Towns: the next-biggest real places (2020 census, at least 4 mi from every other place) and the
  // well-known scenic ones, spread out (id = short code; scenic = tourists travel there).
  towns: [
    // Adair-Casey
    // Liberty (2,030).
    { id: "LIBE", name: "Liberty", county: "ky-adair-casey", lat: 37.32, lon: -84.93, type: "farm", size: 1 },
    // Allen-Simpson
    // Scottsville (4,296).
    { id: "SCTT", name: "Scottsville", county: "ky-allen-simpson", lat: 36.75, lon: -86.21, type: "farm", size: 1 },
    // Anderson-Mercer-Woodford
    // Shaker Village of Pleasant Hill (a National Historic Landmark, 25 mi south-west of Lexington, Mercer County); scenic.
    { id: "SHKR", name: "Shaker Village of Pleasant Hill", county: "ky-anderson-mercer-woodford", lat: 37.82, lon: -84.75, scenic: true, type: "farm", size: 1 },
    // Versailles (10,350).
    { id: "VRS", name: "Versailles", county: "ky-anderson-mercer-woodford", lat: 38.05, lon: -84.72, type: "farm", size: 1 },
    // Ballard-Carlisle
    // Bardwell (710).
    { id: "BRDW", name: "Bardwell", county: "ky-ballard-carlisle", lat: 36.88, lon: -89.01, type: "farm", size: 1 },
    // Barren-Metcalfe
    // Cave City (2,357).
    { id: "CC", name: "Cave City", county: "ky-barren-metcalfe", lat: 37.14, lon: -85.96, type: "farm", size: 1 },
    // Edmonton (1,683).
    { id: "EDMN", name: "Edmonton", county: "ky-barren-metcalfe", lat: 36.99, lon: -85.62, type: "farm", size: 1 },
    // Bath-Menifee-Montgomery
    // Jeffersonville (1,704).
    { id: "JFFR", name: "Jeffersonville", county: "ky-bath-menifee-montgomery", lat: 37.97, lon: -83.86, type: "farm", size: 1 },
    // Owingsville (1,592).
    { id: "OWIN", name: "Owingsville", county: "ky-bath-menifee-montgomery", lat: 38.14, lon: -83.76, type: "farm", size: 1 },
    // Bell-Harlan
    // Harlan (1,989).
    { id: "HRL", name: "Harlan", county: "ky-bell-harlan", lat: 36.84, lon: -83.32, type: "mountain", size: 1 },
    // Cumberland (1,948).
    { id: "CUMB", name: "Cumberland", county: "ky-bell-harlan", lat: 36.99, lon: -83, type: "mountain", size: 1 },
    // Boone
    // Walton (5,461).
    { id: "WALT", name: "Walton", county: "ky-boone", lat: 38.86, lon: -84.61, type: "metro", size: 1 },
    // Bourbon-Harrison-Nicholas
    // Cynthiana (6,334).
    { id: "CYNT", name: "Cynthiana", county: "ky-bourbon-harrison-nicholas", lat: 38.38, lon: -84.3, type: "farm", size: 1 },
    // Carlisle (2,093).
    { id: "CARL", name: "Carlisle", county: "ky-bourbon-harrison-nicholas", lat: 38.32, lon: -84.03, type: "farm", size: 1 },
    // Boyle-Garrard-Lincoln
    // Lancaster (3,899).
    { id: "LNC", name: "Lancaster", county: "ky-boyle-garrard-lincoln", lat: 37.62, lon: -84.58, type: "farm", size: 1 },
    // Stanford (3,657).
    { id: "STNF", name: "Stanford", county: "ky-boyle-garrard-lincoln", lat: 37.53, lon: -84.66, type: "farm", size: 1 },
    // Bracken-Pendleton
    // Augusta (1,098).
    { id: "AGST", name: "Augusta", county: "ky-bracken-pendleton", lat: 38.77, lon: -84, type: "farm", size: 1 },
    // Breathitt-Lee-Owsley
    // Beattyville (2,175).
    { id: "BEAT", name: "Beattyville", county: "ky-breathitt-lee-owsley", lat: 37.59, lon: -83.71, type: "mountain", size: 1 },
    // Breckinridge-Hancock-Meade
    // Hardinsburg (2,384).
    { id: "HARD", name: "Hardinsburg", county: "ky-breckinridge-hancock-meade", lat: 37.77, lon: -86.45, type: "farm", size: 1 },
    // Lewisport (1,771).
    { id: "LEWI", name: "Lewisport", county: "ky-breckinridge-hancock-meade", lat: 37.93, lon: -86.9, type: "farm", size: 1 },
    // Bullitt
    // Shepherdsville (14,220).
    { id: "SHPH", name: "Shepherdsville", county: "ky-bullitt", lat: 37.98, lon: -85.7, type: "metro", size: 1 },
    // Hillview (8,640).
    { id: "HLLV", name: "Hillview", county: "ky-bullitt", lat: 38.06, lon: -85.7, type: "metro", size: 1 },
    // Butler-Edmonson-Grayson
    // Mammoth Cave National Park (NPS; the world's longest known cave system, a World Heritage Site), in Edmonson County; scenic.
    { id: "MCAV", name: "Mammoth Cave National Park", county: "ky-butler-edmonson-grayson", lat: 37.19, lon: -86.1, scenic: true, type: "mountain", size: 1 },
    // Morgantown (2,506).
    { id: "MORG", name: "Morgantown", county: "ky-butler-edmonson-grayson", lat: 37.22, lon: -86.7, type: "farm", size: 1 },
    // Caldwell-Trigg
    // Land Between the Lakes National Recreation Area (the peninsula between Kentucky Lake and Lake Barkley, US Forest Service; Golden Pond, Trigg County); scenic.
    { id: "LBLK", name: "Land Between the Lakes", county: "ky-caldwell-trigg", lat: 36.8, lon: -88.08, scenic: true, type: "farm", size: 1 },
    // Calloway-Marshall
    // Benton (4,762).
    { id: "BENT", name: "Benton", county: "ky-calloway-marshall", lat: 36.85, lon: -88.36, type: "farm", size: 1 },
    // Calvert City (2,516).
    { id: "CALV", name: "Calvert City", county: "ky-calloway-marshall", lat: 37.05, lon: -88.4, type: "farm", size: 1 },
    // Campbell
    // Alexandria (10,346).
    { id: "ALXN", name: "Alexandria", county: "ky-campbell", lat: 38.97, lon: -84.38, type: "metro", size: 1 },
    // Carroll-Gallatin-Trimble
    // Warsaw (1,760).
    { id: "WRS", name: "Warsaw", county: "ky-carroll-gallatin-trimble", lat: 38.78, lon: -84.89, type: "farm", size: 1 },
    // Carter-Elliott-Rowan
    // Grayson (3,840).
    { id: "GRAY", name: "Grayson", county: "ky-carter-elliott-rowan", lat: 38.33, lon: -82.94, type: "farm", size: 1 },
    // Olive Hill (1,582).
    { id: "OH", name: "Olive Hill", county: "ky-carter-elliott-rowan", lat: 38.31, lon: -83.17, type: "farm", size: 1 },
    // Christian
    // Oak Grove (7,935).
    { id: "OAKG", name: "Oak Grove", county: "ky-christian", lat: 36.67, lon: -87.42, type: "farm", size: 1 },
    // Pembroke (862).
    { id: "PEMB", name: "Pembroke", county: "ky-christian", lat: 36.77, lon: -87.36, type: "farm", size: 1 },
    // Clark-Estill-Powell
    // Red River Gorge (Daniel Boone National Forest's geological area, with Natural Bridge State Resort Park, Powell County); scenic.
    { id: "RRGR", name: "Red River Gorge", county: "ky-clark-estill-powell", lat: 37.78, lon: -83.68, scenic: true, type: "mountain", size: 1 },
    // Stanton (3,248).
    { id: "STON", name: "Stanton", county: "ky-clark-estill-powell", lat: 37.85, lon: -83.86, type: "farm", size: 1 },
    // Clay-Knox
    // Manchester (1,520).
    { id: "MANC", name: "Manchester", county: "ky-clay-knox", lat: 37.15, lon: -83.76, type: "mountain", size: 1 },
    // Clinton-Cumberland-Monroe
    // Albany (1,759).
    { id: "ALBA", name: "Albany", county: "ky-clinton-cumberland-monroe", lat: 36.69, lon: -85.14, type: "farm", size: 1 },
    // Crittenden-Livingston-Lyon
    // Eddyville (2,378).
    { id: "EDDY", name: "Eddyville", county: "ky-crittenden-livingston-lyon", lat: 37.08, lon: -88.07, type: "farm", size: 1 },
    // Daviess
    // Whitesville (580).
    { id: "WHIT", name: "Whitesville", county: "ky-daviess", lat: 37.68, lon: -86.87, type: "metro", size: 1 },
    // Fayette
    // Kentucky Horse Park (a state park with the International Museum of the Horse, off I-75 north of Lexington), in Fayette County; scenic.
    { id: "KHP", name: "Kentucky Horse Park", county: "ky-fayette", lat: 38.14, lon: -84.53, scenic: true, type: "metro", size: 1 },
    // Fleming-Mason-Robertson
    // Flemingsburg (2,956).
    { id: "FLEM", name: "Flemingsburg", county: "ky-fleming-mason-robertson", lat: 38.42, lon: -83.74, type: "farm", size: 1 },
    // Floyd-Knott
    // Hindman (705).
    { id: "HIND", name: "Hindman", county: "ky-floyd-knott", lat: 37.34, lon: -82.98, type: "mountain", size: 1 },
    // Martin (513).
    { id: "MAIN", name: "Martin", county: "ky-floyd-knott", lat: 37.57, lon: -82.76, type: "mountain", size: 1 },
    // Fulton-Graves-Hickman
    // Hickman (2,360).
    { id: "HCKM", name: "Hickman", county: "ky-fulton-graves-hickman", lat: 36.57, lon: -89.18, type: "farm", size: 1 },
    // Fulton (2,359).
    { id: "FULT", name: "Fulton", county: "ky-fulton-graves-hickman", lat: 36.51, lon: -88.88, type: "farm", size: 1 },
    // Grant-Owen
    // Crittenden (4,020).
    { id: "CRIT", name: "Crittenden", county: "ky-grant-owen", lat: 38.79, lon: -84.6, type: "farm", size: 1 },
    // Owenton (1,682).
    { id: "OWNT", name: "Owenton", county: "ky-grant-owen", lat: 38.54, lon: -84.84, type: "farm", size: 1 },
    // Green-Hart-Larue
    // Greensburg (2,180).
    { id: "GRNS", name: "Greensburg", county: "ky-green-hart-larue", lat: 37.26, lon: -85.49, type: "farm", size: 1 },
    // Munfordville (1,685).
    { id: "MUNF", name: "Munfordville", county: "ky-green-hart-larue", lat: 37.28, lon: -85.9, type: "farm", size: 1 },
    // Greenup-Lewis
    // Vanceburg (1,428).
    { id: "VANC", name: "Vanceburg", county: "ky-greenup-lewis", lat: 38.59, lon: -83.32, type: "farm", size: 1 },
    // Hardin
    // Radcliff (23,022).
    { id: "RADC", name: "Radcliff", county: "ky-hardin", lat: 37.82, lon: -85.94, type: "farm", size: 2 },
    // West Point (950).
    { id: "WPNT", name: "West Point", county: "ky-hardin", lat: 37.98, lon: -85.95, type: "farm", size: 1 },
    // Henderson-Union
    // Morganfield (3,255).
    { id: "MRGN", name: "Morganfield", county: "ky-henderson-union", lat: 37.69, lon: -87.88, type: "metro", size: 1 },
    // Sturgis (1,739).
    { id: "STU", name: "Sturgis", county: "ky-henderson-union", lat: 37.55, lon: -87.99, type: "metro", size: 1 },
    // Henry-Shelby
    // Simpsonville (2,975).
    { id: "SIMP", name: "Simpsonville", county: "ky-henry-shelby", lat: 38.22, lon: -85.35, type: "farm", size: 1 },
    // Eminence (2,709).
    { id: "EMIN", name: "Eminence", county: "ky-henry-shelby", lat: 38.36, lon: -85.18, type: "farm", size: 1 },
    // Hopkins-Mclean-Webster
    // Providence (2,892).
    { id: "PROV", name: "Providence", county: "ky-hopkins-mclean-webster", lat: 37.4, lon: -87.75, type: "farm", size: 1 },
    // Dawson Springs (2,457).
    { id: "DWSP", name: "Dawson Springs", county: "ky-hopkins-mclean-webster", lat: 37.17, lon: -87.69, type: "farm", size: 1 },
    // Jackson-Rockcastle
    // Brodhead (1,118).
    { id: "BROD", name: "Brodhead", county: "ky-jackson-rockcastle", lat: 37.41, lon: -84.42, type: "farm", size: 1 },
    // Jefferson
    // Jeffersontown (29,233).
    { id: "JTWN", name: "Jeffersontown", county: "ky-jefferson", lat: 38.21, lon: -85.57, type: "metro", size: 2 },
    // St. Matthews (17,561).
    { id: "STMT", name: "St. Matthews", county: "ky-jefferson", lat: 38.25, lon: -85.64, type: "metro", size: 1 },
    // Shively (15,642).
    { id: "SHIV", name: "Shively", county: "ky-jefferson", lat: 38.2, lon: -85.81, type: "metro", size: 1 },
    // Prospect (4,595).
    { id: "PRSP", name: "Prospect", county: "ky-jefferson", lat: 38.35, lon: -85.61, type: "metro", size: 1 },
    // Anchorage (2,500).
    { id: "ANCH", name: "Anchorage", county: "ky-jefferson", lat: 38.27, lon: -85.54, type: "metro", size: 1 },
    // Jessamine
    // Wilmore (6,005).
    { id: "WIRE", name: "Wilmore", county: "ky-jessamine", lat: 37.88, lon: -84.66, type: "metro", size: 1 },
    // Johnson-Lawrence-Martin
    // Louisa (2,677).
    { id: "LOUS", name: "Louisa", county: "ky-johnson-lawrence-martin", lat: 38.11, lon: -82.62, type: "mountain", size: 1 },
    // Inez (545).
    { id: "INEZ", name: "Inez", county: "ky-johnson-lawrence-martin", lat: 37.87, lon: -82.54, type: "mountain", size: 1 },
    // Kenton
    // Independence (28,688).
    { id: "INCE", name: "Independence", county: "ky-kenton", lat: 38.96, lon: -84.55, type: "metro", size: 2 },
    // Erlanger (19,592).
    { id: "ERLA", name: "Erlanger", county: "ky-kenton", lat: 39.04, lon: -84.6, type: "metro", size: 2 },
    // Leslie-Letcher-Perry
    // Jenkins (1,904).
    { id: "JENK", name: "Jenkins", county: "ky-leslie-letcher-perry", lat: 37.17, lon: -82.65, type: "mountain", size: 1 },
    // Whitesburg (1,772).
    { id: "WHTS", name: "Whitesburg", county: "ky-leslie-letcher-perry", lat: 37.12, lon: -82.82, type: "mountain", size: 1 },
    // Logan-Todd
    // Elkton (2,060).
    { id: "ELON", name: "Elkton", county: "ky-logan-todd", lat: 36.82, lon: -87.16, type: "farm", size: 1 },
    // Auburn (1,592).
    { id: "AUBU", name: "Auburn", county: "ky-logan-todd", lat: 36.86, lon: -86.71, type: "farm", size: 1 },
    // Madison
    // Berea (15,547).
    { id: "BERE", name: "Berea", county: "ky-madison", lat: 37.59, lon: -84.29, type: "metro", size: 1 },
    // Magoffin-Morgan-Wolfe
    // Salyersville (1,589).
    { id: "SALY", name: "Salyersville", county: "ky-magoffin-morgan-wolfe", lat: 37.74, lon: -83.06, type: "mountain", size: 1 },
    // Marion-Taylor
    // Lebanon (6,283).
    { id: "LEON", name: "Lebanon", county: "ky-marion-taylor", lat: 37.57, lon: -85.26, type: "farm", size: 1 },
    // Loretto (717).
    { id: "LORE", name: "Loretto", county: "ky-marion-taylor", lat: 37.64, lon: -85.39, type: "farm", size: 1 },
    // Mccreary-Whitley
    // Cumberland Falls (Cumberland Falls State Resort Park, the 'Niagara of the South', on the Whitley-McCreary line, off US-25W); scenic.
    { id: "CUMF", name: "Cumberland Falls", county: "ky-mccreary-whitley", lat: 36.84, lon: -84.35, scenic: true, type: "mountain", size: 1 },
    // Williamsburg (5,331).
    { id: "WLLM", name: "Williamsburg", county: "ky-mccreary-whitley", lat: 36.74, lon: -84.17, type: "mountain", size: 1 },
    // Muhlenberg-Ohio
    // Greenville (4,491).
    { id: "GRLE", name: "Greenville", county: "ky-muhlenberg-ohio", lat: 37.21, lon: -87.18, type: "farm", size: 1 },
    // Beaver Dam (3,537).
    { id: "BD", name: "Beaver Dam", county: "ky-muhlenberg-ohio", lat: 37.4, lon: -86.87, type: "farm", size: 1 },
    // Nelson-Spencer-Washington
    // Springfield (2,853).
    { id: "SPLD", name: "Springfield", county: "ky-nelson-spencer-washington", lat: 37.69, lon: -85.22, type: "farm", size: 1 },
    // Taylorsville (1,252).
    { id: "TAY", name: "Taylorsville", county: "ky-nelson-spencer-washington", lat: 38.03, lon: -85.35, type: "farm", size: 1 },
    // Oldham
    // Crestwood (6,191).
    { id: "CRES", name: "Crestwood", county: "ky-oldham", lat: 38.34, lon: -85.48, type: "metro", size: 1 },
    // Pike
    // Elkhorn City (1,037).
    { id: "EC", name: "Elkhorn City", county: "ky-pike", lat: 37.32, lon: -82.35, type: "mountain", size: 1 },
    // Pulaski
    // Burnside (703).
    { id: "BURN", name: "Burnside", county: "ky-pulaski", lat: 37, lon: -84.64, type: "farm", size: 1 },
    // Science Hill (652).
    { id: "SH", name: "Science Hill", county: "ky-pulaski", lat: 37.17, lon: -84.63, type: "farm", size: 1 },
    // Russell-Wayne
    // Russell Springs (2,723).
    { id: "RSPR", name: "Russell Springs", county: "ky-russell-wayne", lat: 37.05, lon: -85.08, type: "farm", size: 1 },
    // Jamestown (1,860).
    { id: "JAME", name: "Jamestown", county: "ky-russell-wayne", lat: 36.99, lon: -85.06, type: "farm", size: 1 },
    // Scott
    // Stamping Ground (780).
    { id: "STMG", name: "Stamping Ground", county: "ky-scott", lat: 38.27, lon: -84.68, type: "metro", size: 1 },
    // Warren
    // Smiths Grove (754).
    { id: "SMTG", name: "Smiths Grove", county: "ky-warren", lat: 37.05, lon: -86.21, type: "metro", size: 1 },
    // Plum Springs (500).
    { id: "PLMS", name: "Plum Springs", county: "ky-warren", lat: 37.02, lon: -86.38, type: "metro", size: 1 },
  ],
  // Mountain passes: [name, latitude, longitude]
  passes: [
    ["Cumberland Gap (US-25E, Middlesborough)", 36.6, -83.67],
    ["Pine Mountain Gap (Cumberland River, Pineville)", 36.76, -83.7],
  ],
  // Real bridges: [name, latitude, longitude]. A river or lake crossed near one uses the real
  // bridge (cheaper, and any length); anywhere else you build a new one, if the water is narrow
  // enough. River bridges stand on the map's river where it passes the town. The Ohio River
  // crossings of Louisville, Evansville, Cincinnati, Portsmouth, Paducah and Cairo are in the
  // Indiana, Illinois, Missouri and Ohio packs (same names and points); the ones below are the
  // Kentucky side's own (sources in NOTES.md).
  bridges: [
    ["Kentucky River bridges (Frankfort)", 38.19, -84.88],
    ["Tyrone Bridge (US-62, Anderson–Woodford)", 38.04, -84.85],
    ["Brooklyn Bridge (US-27, Mercer–Jessamine)", 37.8, -84.65],
    ["Clays Ferry Bridge (I-75, Fayette–Madison)", 37.87, -84.39],
    ["Boonesborough Bridge (KY-627, Clark–Madison)", 37.89, -84.27],
    ["Valley View Ferry (Kentucky River, Jessamine–Madison)", 37.84, -84.49],
    ["Kentucky River bridge (Carrollton, US-42)", 38.67, -85.17],
    ["North Fork Kentucky River bridge (Hazard)", 37.27, -83.19],
    ["Licking River bridges (Covington–Newport)", 39.05, -84.49],
    ["Licking River bridge (Falmouth, US-27)", 38.67, -84.3],
    ["Licking River bridge (Blue Licks, US-68)", 38.43, -84],
    ["Licking River bridge (Farmers, US-60)", 38.15, -83.62],
    ["Licking River bridge (West Liberty)", 37.92, -83.27],
    ["Licking River bridge (Salyersville)", 37.74, -83.07],
    ["Burnside Bridge (US-27, Lake Cumberland)", 36.99, -84.6],
    ["Cumberland River bridge (Barbourville, US-25E)", 36.86, -83.88],
    ["Smithland Bridge (US-60, Cumberland River)", 37.14, -88.41],
    ["Salt River bridge (Taylorsville, KY-55)", 38.03, -85.35],
    ["Green River bridge (Spottsville, US-60)", 37.81, -87.34],
    ["Green River bridge (Munfordville, I-65)", 37.27, -85.89],
    ["Tennessee River bridge (Paducah, I-24)", 37.08, -88.57],
    ["Eggner's Ferry Bridge (US-68/KY-80, Kentucky Lake)", 36.8, -88.12],
    ["Lake Barkley Bridge (US-68/KY-80, Cadiz)", 36.8, -87.95],
    ["Kentucky Dam bridge (US-62/US-641, Kentucky Lake)", 37.01, -88.27],
    ["Lake Barkley Bridge (I-24, Kuttawa)", 37.06, -88.09],
    ["Simon Kenton Memorial Bridge (US-62/68, Maysville–Aberdeen)", 38.67, -83.76],
    ["Simeon Willis Memorial Bridge (Ashland–Ironton)", 38.5, -82.66],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills; dry = sand, cacti
  // or sagebrush. Regions not listed are green farmland (the Bluegrass, the Pennyrile, the Purchase).
  biomes: {
    // The Cumberland Plateau's coalfield mountains and the Daniel Boone National Forest's core
    forest: ["ky-bell-harlan", "ky-pike", "ky-floyd-knott", "ky-leslie-letcher-perry", "ky-breathitt-lee-owsley", "ky-magoffin-morgan-wolfe", "ky-johnson-lawrence-martin", "ky-clay-knox", "ky-mccreary-whitley"],
    // The rest of the hills: the Knobs, the Eastern Coalfield's edge, the Ohio River hills, the
    // Mammoth Cave country, the Lakes and Lake Cumberland
    wooded: ["ky-carter-elliott-rowan", "ky-bath-menifee-montgomery", "ky-clark-estill-powell", "ky-jackson-rockcastle", "ky-laurel", "ky-pulaski", "ky-russell-wayne", "ky-adair-casey", "ky-clinton-cumberland-monroe", "ky-boyd", "ky-greenup-lewis", "ky-fleming-mason-robertson", "ky-bracken-pendleton", "ky-butler-edmonson-grayson", "ky-breckinridge-hancock-meade", "ky-green-hart-larue", "ky-crittenden-livingston-lyon", "ky-caldwell-trigg", "ky-boyle-garrard-lincoln"],
  },
  levels: [
    {
      name: "Louisville & the Knobs",
      areas: ["louisville"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        // Louisville to Elizabethtown, as I-65 runs
        { kind: "connect", a: "SDF", b: "ELIZ" },
      ],
    },
    {
      name: "Lexington, the Bluegrass & Northern Kentucky",
      areas: ["bluegrass"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Louisville to Lexington, as I-64 runs
        { kind: "connect", a: "SDF", b: "LEX" },
        { kind: "counties", target: 15 },
      ],
    },
    {
      name: "Eastern Kentucky: Ashland, Hazard & the Coalfield",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Lexington to Ashland, as I-64 runs
        { kind: "connect", a: "LEX", b: "ASND" },
        { kind: "counties", target: 28 },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Western Kentucky, the Pennyrile & the Purchase",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // Louisville to Bowling Green, as I-65 runs
        { kind: "connect", a: "SDF", b: "BWG" },
        { kind: "counties", target: 40 },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
});
