// National Railways pack: New Jersey.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/NJ/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/NJ/raw.
// New Jersey's 21 counties are 21 regions (all are over 50,000, so nothing is merged: tools/build-map.js, STATES.NJ).
NR.addPack({
  code: "NJ",
  name: "New Jersey",
  // A game that starts here begins owning Essex (Newark, the heart of the state), Union (Elizabeth) and Morris
  // (Morristown): Union and Morris both touch Essex and each other. Newark and Elizabeth are metro and Morristown is
  // mountain (the Highlands), so the first track (Newark to Morristown, the Morristown Line / I-280 and I-287,
  // 17 mi) has riders.
  start: ["nj-essex", "nj-union", "nj-morris"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code
  // shown on passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. Points are the Census points (every Census place is in
  // packs/NJ/raw/places.json) unless a comment says otherwise. New Jersey's many townships are not Census
  // places with a population, so the well-known centre is used and said in the comment.
  stations: [
    // Level: Newark, the Hudson waterfront and the Bergen suburbs, the New Jersey core of the New York metro
    // Newark (311,553): the biggest city, Penn Station (Amtrak and NJ Transit's Northeast Corridor hub), Newark Liberty Airport (EWR, in the city and Elizabeth) and Port Newark-Elizabeth, the container port of the Port of New York and New Jersey (the biggest on the East Coast). A core city of the New York metro, like Baltimore (4). The point is Penn Station's neighbourhood, 1 mi from the Census point. Region 863k, size 4.
    { id: "NWK", name: "Newark", county: "nj-essex", lat: 40.73, lon: -74.17, port: "Port Newark-Elizabeth", airport: "Newark Liberty International Airport", type: "metro", size: 4, pop: 863, main: true, level: "gateway" },
    // Jersey City (292,751): the second-biggest city, the "Wall Street West" waterfront opposite Lower Manhattan, PATH and the Hudson-Bergen Light Rail. Hudson is the densest county in the country; a core city of the New York metro like Baltimore, so size 4 although the region is 725k. Scenic for Liberty State Park (the Statue of Liberty and Ellis Island ferries leave from it, 1 mi from the point), so no separate town there. Region 725k.
    { id: "JC", name: "Jersey City", county: "nj-hudson", lat: 40.71, lon: -74.06, scenic: true, type: "metro", size: 4, pop: 725, main: true, level: "gateway" },
    // Hackensack (46,033): the biggest place and the Bergen seat, on NJ-17, I-80 and the Pascack Valley Line. Region 956k, size 4: it is above the 900k top of the size-3 band and the biggest region of the state, like Prince George's, Maryland (967k, size 4). Montgomery, Pennsylvania (857k) is size 3 as it is under 900k. A suburban county (Paramus, Fort Lee, Ridgewood), but with the Meadowlands and the George Washington Bridge approach.
    { id: "HKSK", name: "Hackensack", county: "nj-bergen", lat: 40.89, lon: -74.05, type: "metro", size: 4, pop: 956, main: true, level: "gateway" },
    // Elizabeth (137,312): the biggest city of Union County, on the Northeast Corridor, with Elizabeth's half of Port Newark-Elizabeth and the Newark Airport (both on Newark's station). The point is the Elizabeth station, 1 mi west of the Census point. Region 575k, size 3.
    { id: "ELNJ", name: "Elizabeth", county: "nj-union", lat: 40.67, lon: -74.21, type: "metro", size: 3, pop: 575, main: true, level: "gateway" },
    // Level: the northern highlands and the Skylands
    // Paterson (159,760): the biggest city of Passaic County and the "Silk City" at the Great Falls of the Passaic, a National Historical Park (NPS), so scenic (the falls are 1 mi from the Census point). The point is City Hall downtown. Region 525k, size 3.
    { id: "PTSN", name: "Paterson", county: "nj-passaic", lat: 40.92, lon: -74.17, scenic: true, type: "metro", size: 3, pop: 525, main: true, level: "highlands" },
    // Morristown (20,178): the biggest place and the Morris seat on the Morristown Line, I-287 and NJ-24, in the New Jersey Highlands (Jockey Hollow, the Watchung and Schooley's mountains). Typed mountain so the start (Essex, Union, Morris) has two types of place. Region 509k, size 3.
    { id: "MRNJ", name: "Morristown", county: "nj-morris", lat: 40.8, lon: -74.48, type: "mountain", size: 3, pop: 509, main: true, level: "highlands" },
    // Newton (8,366): the Sussex seat on US-206 and NJ-94, in the Kittatinny Valley under High Point (Hopatcong, 14,365, is a lake town at the south edge). Region 144k, size 2 (like PA's 140-210k regions).
    { id: "NTNJ", name: "Newton", county: "nj-sussex", lat: 41.05, lon: -74.75, type: "mountain", size: 2, pop: 144, main: true, level: "highlands" },
    // Phillipsburg (15,252): the biggest place of Warren County, on the Delaware across from Easton, Pennsylvania (I-78 and US-22; the Easton bridges are in the Pennsylvania pack). Hackettstown (10,248) is a town. Region 110k, size 1.
    { id: "PHBG", name: "Phillipsburg", county: "nj-warren", lat: 40.69, lon: -75.18, type: "farm", size: 1, pop: 110, main: true, level: "highlands" },
    // Flemington (4,881): the Hunterdon seat on US-202 and NJ-12, in the middle of the county (all its places are small; Lambertville and Clinton are towns). Region 129k, size 1.
    { id: "FLMN", name: "Flemington", county: "nj-hunterdon", lat: 40.51, lon: -74.86, type: "farm", size: 1, pop: 129, main: true, level: "highlands" },
    // Level: Central Jersey and the Jersey Shore
    // New Brunswick (55,255): the Middlesex seat, Rutgers University and the Northeast Corridor, on the Raritan. Perth Amboy (55,447) is 200 people bigger but at the Raritan Bay edge, so it is a town. Edison and Woodbridge are townships with no Census population and sit next to the city. The point is the train station, 1 mi from the Census point. Region 863k, size 3.
    { id: "NBNJ", name: "New Brunswick", county: "nj-middlesex", lat: 40.49, lon: -74.45, type: "metro", size: 3, pop: 863, main: true, level: "central" },
    // Somerville (12,350): the Somerset seat on the Raritan Valley Line and US-206 and US-22 (the biggest place, North Plainfield 22,806, is a suburb on Plainfield's border; Bridgewater is a township with no population and is 3.5 mi from Somerville). Region 345k, size 2 (just under the 350k line).
    { id: "SVNJ", name: "Somerville", county: "nj-somerset", lat: 40.57, lon: -74.61, type: "metro", size: 2, pop: 345, main: true, level: "central" },
    // Long Branch (31,660): the biggest place of Monmouth County, a Jersey Shore city on the North Jersey Coast Line (Freehold, the seat, 12,536, and Asbury Park are towns). Region 644k, size 3.
    { id: "LGBR", name: "Long Branch", county: "nj-monmouth", lat: 40.3, lon: -73.99, type: "coast", size: 3, pop: 644, main: true, level: "central" },
    // Toms River (a township with no Census population, the Ocean County seat; the biggest Census place, Point Pleasant, 18,951, is on the Monmouth line): the downtown and the courthouse (the Census point of the township CDP is 3 mi north), on Barnegat Bay at NJ-37 and the Garden State Parkway. Region 637k, size 3.
    { id: "TMRV", name: "Toms River", county: "nj-ocean", lat: 39.95, lon: -74.2, type: "coast", size: 3, pop: 637, main: true, level: "central" },
    // Atlantic City (38,491): the biggest place, the Boardwalk and casinos on Absecon Island, the famous Jersey Shore resort, so scenic. Atlantic City International Airport is small (not an airport here). Region 275k, size 2 (a resort of about 27 million visitors a year, but the region is under 300k).
    { id: "ACNJ", name: "Atlantic City", county: "nj-atlantic", lat: 39.38, lon: -74.44, scenic: true, type: "coast", size: 2, pop: 275, main: true, level: "central" },
    // Cape May (2,772): the Victorian seaside resort and National Historic Landmark city at the tip of the state, and the New Jersey terminal of the Cape May-Lewes Ferry to Delaware, so it is the main station although Ocean City (11,236) is bigger (a town). Region 95k, size 1.
    { id: "CPMY", name: "Cape May", county: "nj-cape-may", lat: 38.94, lon: -74.9, scenic: true, type: "coast", size: 1, pop: 95, main: true, level: "central" },
    // Level: the Delaware Valley and South Jersey
    // Trenton (90,858): the state capital, on the Northeast Corridor and the Delaware, with the bridges to Morrisville (in the Pennsylvania pack). The point is the State House. Region 387k, size 3.
    { id: "TRNJ", name: "Trenton", county: "nj-mercer", lat: 40.22, lon: -74.76, type: "metro", size: 3, pop: 387, main: true, level: "delaware" },
    // Mount Holly (a township with no Census population, the Burlington County seat, on NJ-38 and US-206 in the middle of the county; the biggest Census place, Burlington city, 9,740, is a town on the Delaware): the centre of the township. Region 462k, size 3. The county is Philadelphia's farm and pine country, so typed farm.
    { id: "MHNJ", name: "Mount Holly", county: "nj-burlington", lat: 39.99, lon: -74.79, type: "farm", size: 3, pop: 462, main: true, level: "delaware" },
    // Camden (71,775): the biggest place of Camden County, the New Jersey end of the Benjamin Franklin Bridge, the PATCO Speedline and the River Line, across from Philadelphia. The point is the downtown waterfront, 1 mi from the Census point. Its Broadway and Beckett Street terminals are small, not container ports. Region 523k, size 3.
    { id: "CMNJ", name: "Camden", county: "nj-camden", lat: 39.94, lon: -75.12, type: "metro", size: 3, pop: 523, main: true, level: "delaware" },
    // Woodbury (9,959): the Gloucester seat on NJ-45 and the River Line corridor (Glassboro, 23,155, is bigger, but at the south end of the county and is a town). Region 302k, size 2.
    { id: "WDNJ", name: "Woodbury", county: "nj-gloucester", lat: 39.84, lon: -75.15, type: "metro", size: 2, pop: 302, main: true, level: "delaware" },
    // Salem (5,297): the Salem seat and the oldest English settlement on the Delaware (Penns Grove, 4,840, at the Delaware Memorial Bridge is a town). Region 65k, size 1.
    { id: "SANJ", name: "Salem", county: "nj-salem", lat: 39.57, lon: -75.47, type: "farm", size: 1, pop: 65, main: true, level: "delaware" },
    // Vineland (60,788): the biggest city of Cumberland County and South Jersey's farm centre (Millville and Bridgeton are towns). Region 154k, size 2.
    { id: "VNLD", name: "Vineland", county: "nj-cumberland", lat: 39.47, lon: -75, type: "farm", size: 2, pop: 154, main: true, level: "delaware" },
  ],
  // Towns that appear over time: the next-biggest real places of each region, spread out, plus well-known scenic
  // places (scenic: true, see NOTES.md).
  towns: [
    // Atlantic County
    { id: "HMNJ", name: "Hammonton", county: "nj-atlantic", lat: 39.66, lon: -74.77, type: "farm", size: 1 },
    { id: "EGHC", name: "Egg Harbor City", county: "nj-atlantic", lat: 39.56, lon: -74.6, type: "farm", size: 1 },
    // Bergen County
    { id: "RDGW", name: "Ridgewood", county: "nj-bergen", lat: 40.98, lon: -74.11, type: "metro", size: 1 },
    // Fort Lee (40,173): the George Washington Bridge's New Jersey end, on the Hudson Palisades
    { id: "FTLE", name: "Fort Lee", county: "nj-bergen", lat: 40.85, lon: -73.97, type: "metro", size: 1 },
    // Burlington County
    { id: "BLNJ", name: "Burlington", county: "nj-burlington", lat: 40.08, lon: -74.85, type: "farm", size: 1 },
    // Batsto Village (Wharton State Forest, the iron and glass town in the Pine Barrens; NJ Pinelands Commission, NJ State Parks)
    { id: "BTSO", name: "Batsto Village", county: "nj-burlington", lat: 39.64, lon: -74.65, scenic: true, type: "farm", size: 1 },
    // Camden County
    // Cherry Hill: the biggest suburb (a township of about 75,000, no Census population in the files; the point is the CDP at the Cherry Hill Mall)
    { id: "CHNJ", name: "Cherry Hill", county: "nj-camden", lat: 39.94, lon: -75.01, type: "metro", size: 1 },
    { id: "LDWD", name: "Lindenwold", county: "nj-camden", lat: 39.82, lon: -74.99, type: "metro", size: 1 },
    // Cape May County
    // Wildwood (5,153): the Wildwoods Boardwalk and the doo-wop motels (National Register district)
    { id: "WLDW", name: "Wildwood", county: "nj-cape-may", lat: 38.99, lon: -74.82, scenic: true, type: "coast", size: 1 },
    // Ocean City (11,236): "America's Greatest Family Resort", the Boardwalk, the biggest place of the county
    { id: "OCNJ", name: "Ocean City", county: "nj-cape-may", lat: 39.27, lon: -74.6, scenic: true, type: "coast", size: 1 },
    // Cumberland County
    { id: "MLVL", name: "Millville", county: "nj-cumberland", lat: 39.39, lon: -75.05, type: "farm", size: 1 },
    { id: "BRDG", name: "Bridgeton", county: "nj-cumberland", lat: 39.43, lon: -75.23, type: "farm", size: 1 },
    // Essex County
    // West Orange: the Edison laboratory (Thomas Edison National Historical Park, NPS, Main Street); a township with no Census population in the files
    { id: "WORG", name: "West Orange", county: "nj-essex", lat: 40.79, lon: -74.24, scenic: true, type: "metro", size: 1 },
    // Gloucester County
    { id: "GLBR", name: "Glassboro", county: "nj-gloucester", lat: 39.7, lon: -75.11, type: "farm", size: 1 },
    // Hudson County
    { id: "BYNE", name: "Bayonne", county: "nj-hudson", lat: 40.66, lon: -74.11, type: "metro", size: 1 },
    { id: "UNCY", name: "Union City", county: "nj-hudson", lat: 40.77, lon: -74.03, type: "metro", size: 1 },
    // Hunterdon County
    // Lambertville (4,141): the Delaware river town opposite New Hope, Pennsylvania
    { id: "LMVL", name: "Lambertville", county: "nj-hunterdon", lat: 40.37, lon: -74.94, type: "farm", size: 1 },
    { id: "CLNJ", name: "Clinton", county: "nj-hunterdon", lat: 40.64, lon: -74.92, type: "farm", size: 1 },
    // Mercer County
    // Princeton (30,676): Princeton University and the borough on the Northeast Corridor spur (the Dinky); the best-known university town in the state
    { id: "PRNJ", name: "Princeton", county: "nj-mercer", lat: 40.36, lon: -74.67, scenic: true, type: "metro", size: 1 },
    // Hamilton: the big township east of Trenton (about 92,000, no Census population in the files; the point is the CDP of Hamilton Square)
    { id: "HANJ", name: "Hamilton", county: "nj-mercer", lat: 40.23, lon: -74.65, type: "metro", size: 1 },
    // Middlesex County
    { id: "PRAM", name: "Perth Amboy", county: "nj-middlesex", lat: 40.52, lon: -74.27, type: "metro", size: 1 },
    // Monmouth County
    // Asbury Park (15,194): the Boardwalk, the Stone Pony and the Convention Hall, the Jersey Shore music town
    { id: "ASPK", name: "Asbury Park", county: "nj-monmouth", lat: 40.22, lon: -74.01, scenic: true, type: "coast", size: 1 },
    { id: "FRHD", name: "Freehold", county: "nj-monmouth", lat: 40.26, lon: -74.28, type: "farm", size: 1 },
    // Sandy Hook (Gateway National Recreation Area, NPS: the beaches and the 1764 lighthouse, the oldest working one in the country). The spit is thin and the map's shore cuts it off, so the point sits on the map's land a little south of the visitor center, as the checker needs.
    { id: "SDHK", name: "Sandy Hook", county: "nj-monmouth", lat: 40.43, lon: -73.99, scenic: true, type: "coast", size: 1 },
    // Morris County
    { id: "DVNJ", name: "Dover", county: "nj-morris", lat: 40.89, lon: -74.56, type: "mountain", size: 1 },
    // Parsippany: the biggest township (about 56,000, no Census population in the files; the point is the CDP)
    { id: "PANJ", name: "Parsippany", county: "nj-morris", lat: 40.86, lon: -74.41, type: "metro", size: 1 },
    // Ocean County
    // Lakewood: the biggest place of the county (about 135,000; a township with no Census population in the files; the point is the CDP)
    { id: "LKNJ", name: "Lakewood", county: "nj-ocean", lat: 40.09, lon: -74.21, type: "metro", size: 2 },
    { id: "PPNJ", name: "Point Pleasant", county: "nj-ocean", lat: 40.08, lon: -74.07, type: "coast", size: 1 },
    // Seaside Heights (2,437): the Boardwalk and the amusement piers
    { id: "SSHT", name: "Seaside Heights", county: "nj-ocean", lat: 39.94, lon: -74.08, scenic: true, type: "coast", size: 1 },
    // Barnegat Light (643): Barnegat Lighthouse ("Old Barney", 1859, Barnegat Lighthouse State Park) at the north end of Long Beach Island
    { id: "BNLT", name: "Barnegat Light", county: "nj-ocean", lat: 39.76, lon: -74.11, scenic: true, type: "coast", size: 1 },
    // Passaic County
    { id: "CFNJ", name: "Clifton", county: "nj-passaic", lat: 40.86, lon: -74.16, type: "metro", size: 2 },
    // Wayne: the big township west of Paterson (about 55,000, not a Census place in the files; the centre of the township)
    { id: "WYNE", name: "Wayne", county: "nj-passaic", lat: 40.93, lon: -74.27, type: "metro", size: 1 },
    // Salem County
    { id: "PNGV", name: "Penns Grove", county: "nj-salem", lat: 39.73, lon: -75.47, type: "farm", size: 1 },
    // Somerset County
    { id: "BNNJ", name: "Bernardsville", county: "nj-somerset", lat: 40.73, lon: -74.59, type: "metro", size: 1 },
    // Sussex County
    { id: "HPCG", name: "Hopatcong", county: "nj-sussex", lat: 40.95, lon: -74.66, type: "mountain", size: 1 },
    // High Point State Park: the 1,803 ft summit, the highest point in New Jersey, and its monument (NJ State Parks)
    { id: "HPNJ", name: "High Point", county: "nj-sussex", lat: 41.32, lon: -74.66, scenic: true, type: "mountain", size: 1 },
    // Union County
    { id: "PFNJ", name: "Plainfield", county: "nj-union", lat: 40.62, lon: -74.42, type: "metro", size: 1 },
    // Warren County
    { id: "HKTN", name: "Hackettstown", county: "nj-warren", lat: 40.85, lon: -74.82, type: "farm", size: 1 },
  ],
  // Real passes and tunnels: [name, latitude, longitude]. See NOTES.md for sources.
  // (none: the Kittatinny Ridge and the Highlands are hills on the map, no mountains)
  passes: [],
  // Real bridges: [name, latitude, longitude]. See NOTES.md for sources. The Delaware River bridges (Philadelphia,
  // Trenton, New Hope, Easton, the Water Gap, Milford) are in the Pennsylvania pack and the Delaware Memorial Bridge and
  // the Cape May-Lewes Ferry in Delaware's; they serve New Jersey too. The Hudson, Newark Bay, Kill van Kull and Raritan Bay
  // crossings come with New York.
  bridges: [],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The Pine Barrens (the Pinelands National Reserve: Wharton State Forest, the Brendan T. Byrne State Forest, Bass River)
    forest: ["nj-burlington", "nj-ocean", "nj-atlantic"],
    // The Highlands and the Kittatinny ridge (Ringwood, Wawayanda, Stokes, Worthington and Allamuchy forests)
    wooded: ["nj-sussex", "nj-warren", "nj-morris", "nj-passaic"],
    // Not listed (farmland): the suburbs and cities of the north-east, the Raritan, Delaware and Garden State farm belts
    // (Hunterdon, Somerset, Monmouth, Mercer, Salem, Cumberland, Gloucester, Cape May). No dry.
  },
  levels: [
    {
      name: "Newark & the Gateway",
      areas: ["gateway"],
      goals: [
        { kind: "totalPassengers", target: 80 },
        // The Northeast Corridor between Newark and Jersey City (Hudson)
        { kind: "connect", a: "NWK", b: "JC" },
        { kind: "counties", target: 3 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "Highlands & Skylands",
      areas: ["highlands"],
      goals: [
        { kind: "totalPassengers", target: 180 },
        // Morristown to Newton, as I-80 and the NJ-23 and US-206 corridor run into Sussex
        { kind: "connect", a: "MRNJ", b: "NTNJ" },
        { kind: "counties", target: 4 },
      ],
    },
    {
      name: "Central Jersey & the Shore",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 300 },
        // New Brunswick to Long Branch, as NJ-18 and the North Jersey Coast Line run
        { kind: "connect", a: "NBNJ", b: "LGBR" },
        { kind: "counties", target: 5 },
      ],
    },
    {
      name: "The Delaware Valley & South Jersey",
      areas: ["delaware"],
      goals: [
        { kind: "totalPassengers", target: 420 },
        // Trenton to Camden, as US-130 and the River Line run along the Delaware
        { kind: "connect", a: "TRNJ", b: "CMNJ" },
        { kind: "counties", target: 5 },
      ],
    },
  ],
});
