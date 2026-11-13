// National Railways pack: New Hampshire.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/NH/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/NH/raw.
// New Hampshire's 10 counties are 8 regions (tools/build-map.js, STATES.NH): Coos joins Carroll as the White Mountains
// and Sullivan joins Grafton as the Upper Valley; Belknap, Cheshire, Hillsborough, Merrimack, Rockingham and Strafford
// stand alone. The Connecticut is the border with Vermont (its bridges are in packs/VT/pack.js), the Piscataqua with
// Maine, and the state line with Massachusetts is crossed by I-93, US-3, I-95 and the Downeaster.
NR.addPack({
  code: "NH",
  name: "New Hampshire",
  // A game that starts here begins owning Hillsborough (Manchester and Nashua, the biggest region), Merrimack (Concord)
  // and Rockingham (Portsmouth): Merrimack and Rockingham both touch Hillsborough and touch each other (I-93 and
  // I-95 / NH-101). Manchester is metro, Concord farm and Portsmouth coast, so the first track has riders.
  start: ["nh-hillsborough", "nh-merrimack", "nh-rockingham"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code shown on
  // passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which level
  // unlocks it in Levels mode. New Hampshire's towns are county subdivisions, so the files give a population only to its
  // 13 cities; the other places are well-known centres and the comment says so.
  stations: [
    // Level: Manchester, Concord and the Seacoast (the start)
    // Manchester (115,652): the biggest city of northern New England, on the Merrimack at the Amoskeag Falls (the old Amoskeag mills), I-93 and
    // I-293, the core of the Manchester-Nashua metro of 420,000 and of Hillsborough County; Manchester-Boston Regional Airport is a regional
    // airport, below the bar of a big one. Census point (1.7 km from Elm Street)
    { id: "MNHT", name: "Manchester", county: "nh-hillsborough", lat: 42.98, lon: -71.44, type: "metro", size: 3, pop: 423, main: true, level: "merrimack" },
    // Concord (43,997): the state capital, on the Merrimack and I-93 / I-89 and US-3 (the State House, the oldest in the country still
    // used by its legislature). Typed farm so that the start has three types of place. The point is the State House downtown, 3.4 km from the Census
    // point (the middle of the city limits)
    { id: "CONH", name: "Concord", county: "nh-merrimack", lat: 43.21, lon: -71.54, type: "farm", size: 2, pop: 154, main: true, level: "merrimack" },
    // Portsmouth (21,960): the Seacoast's old port and centre on the Piscataqua at the Maine line (Strawbery Banke, I-95 and the Memorial Bridge to Kittery),
    // the biggest place of Rockingham County (the Downeaster stops at Exeter and Dover, not here) and the edge of the Boston area. Not a port or airport for the
    // game: the Port of New Hampshire is a small cargo port and Pease is a small airport. Downtown point (Market Square), 1.7 km from the Census point
    { id: "PSM", name: "Portsmouth", county: "nh-rockingham", lat: 43.07, lon: -70.76, type: "coast", size: 2, pop: 314, main: true, level: "merrimack" },
    // Level: Dover and the Lakes Region
    // Dover (32,744): the oldest permanent settlement of the state (1623) and the seat of Strafford County, on the Cocheco at the head of the Piscataqua
    // estuary, on the Downeaster and the Spaulding Turnpike (NH-16); Rochester (32,496) is almost as big (a town here)
    { id: "DVNH", name: "Dover", county: "nh-strafford", lat: 43.19, lon: -70.88, type: "farm", size: 2, pop: 131, main: true, level: "lakes" },
    // Laconia (16,874): "the City on the Lakes", the seat of Belknap County and the centre of the Lakes Region on Lake Winnipesaukee, Opechee and Winnisquam,
    // on I-93, US-3 and NH-11 (Laconia Motorcycle Week). Typed coast (a lake shore resort), size 2 as the brief says although the region is 64k.
    // The point is downtown (Main Street), 5.5 km south of the Census point (the middle of the city limits, at the Weirs side)
    { id: "LCNH", name: "Laconia", county: "nh-belknap", lat: 43.53, lon: -71.47, type: "coast", size: 2, pop: 64, main: true, level: "lakes" },
    // Level: the Monadnock Region, the Upper Valley and the White Mountains
    // Keene (23,038): the seat of Cheshire County and the biggest place of the south-west corner, on NH-9, NH-12 and NH-101 near Mount Monadnock (Keene State College,
    // the Pumpkin Festival). Downtown point (Central Square), 3.4 km from the Census point
    { id: "KENH", name: "Keene", county: "nh-cheshire", lat: 42.93, lon: -72.28, type: "farm", size: 2, pop: 76, main: true, level: "uplands" },
    // Lebanon (14,284): the hub of the Upper Valley on the Connecticut (Dartmouth-Hitchcock Medical Center, I-89 and I-91, the Advance Transit and the Lebanon airport),
    // across the river from White River Junction, the biggest place of Grafton and Sullivan. Hanover (Dartmouth) is a scenic town here. Census point
    { id: "LBNH", name: "Lebanon", county: "nh-grafton-sullivan", lat: 43.64, lon: -72.25, type: "mountain", size: 2, pop: 134, main: true, level: "uplands" },
    // North Conway (Conway about 9,800, no place population in the files): the centre of the Mount Washington Valley on NH-16 and US-302 (the Conway Scenic Railroad, Cranmore, the outlet
    // shops), the biggest cluster of the White Mountains region. Berlin (9,423, the only city of the region, in the north on the Androscoggin) is a town here: North Conway is the
    // tourist hub, the gate to Crawford Notch, Pinkham Notch and the Kancamagus, and the way to Maine and Massachusetts. Downtown (the railroad station), 2 km from the Census point
    { id: "NCNW", name: "North Conway", county: "nh-carroll-coos", lat: 44.05, lon: -71.13, scenic: true, type: "mountain", size: 1, pop: 81, main: true, level: "uplands" },
  ],
  // Towns that appear over time: the next-biggest real places of each region, spread out, plus well-known scenic
  // places (scenic: true, see NOTES.md).
  towns: [
    // Hillsborough
    // Nashua (91,334): the second city of the state on the Merrimack and the Nashua, on the Everett Turnpike and US-3, 15 mi south of Manchester and the way to Lowell, Massachusetts. Downtown (Main Street), 3.5 km from the Census point
    { id: "NSH", name: "Nashua", county: "nh-hillsborough", lat: 42.77, lon: -71.47, type: "metro", size: 2 },
    // Peterborough (a town with no place population in the files, about 6,400): the Monadnock Region's arts town (the MacDowell Colony) on US-202 and NH-101
    { id: "PTNH", name: "Peterborough", county: "nh-hillsborough", lat: 42.88, lon: -71.96, type: "farm", size: 1 },
    // Rockingham
    // Exeter (a town, about 16,000): the Phillips Exeter Academy town on the Squamscott and the Downeaster (Amtrak's Boston to Brunswick service), NH-101 and NH-27
    { id: "EXTR", name: "Exeter", county: "nh-rockingham", lat: 42.98, lon: -70.95, type: "coast", size: 1 },
    // Hampton Beach (a village of Hampton): the state's best-known beach (Hampton Beach State Park, the Seashell, the boardwalk) on NH-1A, 10 mi south of Portsmouth
    { id: "HMPB", name: "Hampton Beach", county: "nh-rockingham", lat: 42.91, lon: -70.82, scenic: true, type: "coast", size: 1 },
    // Merrimack
    // Franklin (8,738): "the Three Rivers City" where the Pemigewasset and the Winnipesaukee meet to form the Merrimack, on US-3 and the Northern Rail Trail, 18 mi north of Concord
    { id: "FRNH", name: "Franklin", county: "nh-merrimack", lat: 43.45, lon: -71.67, type: "farm", size: 1 },
    // Canterbury Shaker Village (in Canterbury, no place in the files): a National Historic Landmark and museum of the Shakers (1792 to 1992), on Shaker Road 12 mi north of Concord
    { id: "CNTB", name: "Canterbury Shaker Village", county: "nh-merrimack", lat: 43.34, lon: -71.56, scenic: true, type: "farm", size: 1 },
    // Strafford
    // Rochester (32,496): the second city of the county and the "Lilac City" on the Cocheco and NH-16 (the Spaulding Turnpike), 7 mi from Dover; Somersworth (11,860, 4 mi from Dover) is left out as too close
    { id: "RCNH", name: "Rochester", county: "nh-strafford", lat: 43.3, lon: -70.98, type: "farm", size: 1 },
    // Belknap
    // The Weirs (Weirs Beach, in Laconia): the Winnipesaukee boardwalk and the dock of the M/S Mount Washington cruise ship, Funspot and the Weirs Beach drive-in, the lake's best-known resort
    { id: "WRSB", name: "Weirs Beach", county: "nh-belknap", lat: 43.62, lon: -71.47, scenic: true, type: "coast", size: 1 },
    // Cheshire
    // Mount Monadnock (in Jaffrey and Dublin): the most-climbed mountain of the world by some counts (3,165 ft) and the namesake of "monadnock", Monadnock State Park, 14 mi east of Keene
    { id: "MNDK", name: "Mount Monadnock", county: "nh-cheshire", lat: 42.86, lon: -72.11, scenic: true, type: "mountain", size: 1 },
    // Grafton and Sullivan
    // Hanover (a town with no place population in the files, about 11,800): Dartmouth College (1769) and the Dartmouth Green on the Connecticut, across the Ledyard Bridge from Norwich, Vermont
    { id: "HNVR", name: "Hanover", county: "nh-grafton-sullivan", lat: 43.7, lon: -72.29, scenic: true, type: "farm", size: 1 },
    // Claremont (12,951): the Sugar River mill city (the Claremont Opera House) on NH-103 and NH-12A, across the Connecticut from Ascutney, Vermont
    { id: "CLNH", name: "Claremont", county: "nh-grafton-sullivan", lat: 43.39, lon: -72.33, type: "farm", size: 1 },
    // Littleton (a town, about 6,000): the main town of the northern Grafton county (the Littleton Main Street, Chutters candy counter, Palatine Bridge) on I-93 and US-302, 8 mi from Franconia Notch to the south
    { id: "LTNH", name: "Littleton", county: "nh-grafton-sullivan", lat: 44.31, lon: -71.77, type: "mountain", size: 1 },
    // White Mountains
    // Berlin (9,423): the "City That Trees Built" on the Androscoggin (the paper mill), the biggest place of Coos County and the north of the region, on NH-16 and NH-110
    { id: "BRLH", name: "Berlin", county: "nh-carroll-coos", lat: 44.48, lon: -71.28, type: "mountain", size: 1 },
    // Mount Washington (the summit, 6,288 ft, the highest peak of the Northeast, in Sargent's Purchase): the Cog Railway (1869, the first mountain-climbing cog railway) and the Auto Road
    { id: "MTWS", name: "Mount Washington", county: "nh-carroll-coos", lat: 44.27, lon: -71.3, scenic: true, type: "mountain", size: 1 },
    // Wolfeboro (a town, about 6,400): "the oldest summer resort in America" on Lake Winnipesaukee (the Wolfeboro Inn, the Libby Museum) on NH-28 and NH-109
    { id: "WLFB", name: "Wolfeboro", county: "nh-carroll-coos", lat: 43.59, lon: -71.21, scenic: true, type: "coast", size: 1 },
  ],
  // Real passes: [name, latitude, longitude]. See NOTES.md for sources.
  passes: [
    ["Franconia Notch (I-93 and US-3 between Cannon Mountain and Mount Lafayette, Lincoln to Franconia)", 44.14, -71.68],
    ["Crawford Notch (US-302 and the old Maine Central Mountain Division, now the Conway Scenic Railroad, Bartlett to Carroll)", 44.21, -71.41],
    ["Pinkham Notch (NH-16 between Mount Washington and the Wildcat range, Jackson to Gorham)", 44.26, -71.25],
    ["Kancamagus Pass (NH-112, the Kancamagus Highway, Lincoln to Conway)", 44.02, -71.41],
    ["Dixville Notch (NH-26 between Dixville Peak and Sanguinary Ridge, Colebrook to Errol)", 44.87, -71.3],
  ],
  // Real bridges and ferries: [name, latitude, longitude]. See NOTES.md for sources. The rivers on the map are the
  // Merrimack, the Connecticut (its bridges are in packs/VT/pack.js), the Androscoggin, the Saco and Lake Winnipesaukee.
  bridges: [
    // The Merrimack River, from Nashua up
    ["Merrimack River bridges at Nashua (the Everett Turnpike and the Main Street area bridges)", 42.76, -71.47],
    ["Merrimack River bridges at Manchester (the Amoskeag Bridge on I-293 and the Queen City Bridge)", 42.99, -71.47],
    ["Merrimack River bridges at Concord (I-93 and the Sewalls Falls Bridge)", 43.23, -71.52],
    // The Piscataqua River (the Maine border)
    ["Memorial Bridge (US-1 Bypass, Portsmouth to Kittery)", 43.08, -70.75],
    ["Sarah Mildred Long Bridge (US-1 Bypass, Portsmouth to Kittery)", 43.08, -70.74],
    ["Piscataqua River Bridge (I-95, Portsmouth to Kittery)", 43.1, -70.74],
    // The Androscoggin and the Saco
    ["Androscoggin River bridges at Berlin (NH-16 and the Main Street bridge)", 44.47, -71.18],
    // Lake Winnipesaukee: the M/S Mount Washington cruise ship (the lake's excursion and mail boat) calls at the Weirs, Wolfeboro, Alton Bay and Meredith
    ["M/S Mount Washington (Weirs Beach landing, Lake Winnipesaukee)", 43.62, -71.46],
    ["M/S Mount Washington (Wolfeboro landing, Lake Winnipesaukee)", 43.59, -71.21],
    ["Saco River bridges at Conway and North Conway (NH-16 and US-302)", 44.0, -71.12],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The White Mountains and the North Country (the White Mountain National Forest and the Nash Stream and Connecticut Lakes forests) and the Upper Valley's
    // forest-covered hills
    forest: ["nh-carroll-coos", "nh-grafton-sullivan"],
    // The Lakes Region, the Monadnock hills, the Merrimack valley's hills and the Strafford uplands
    wooded: ["nh-belknap", "nh-cheshire", "nh-merrimack", "nh-strafford"],
    // Not listed (farmland): Hillsborough (the Merrimack valley's cities) and the Seacoast of Rockingham. No dry.
  },
  levels: [
    {
      name: "Manchester, Concord & the Seacoast",
      areas: ["merrimack"],
      goals: [
        { kind: "totalPassengers", target: 80 },
        // Manchester to Concord, as I-93 and the Merrimack valley run
        { kind: "connect", a: "MNHT", b: "CONH" },
      ],
    },
    {
      name: "Dover & the Lakes Region",
      areas: ["lakes"],
      goals: [
        { kind: "totalPassengers", target: 200 },
        // Concord to Laconia, as I-93 and the Merrimack and Pemigewasset valleys run
        { kind: "connect", a: "CONH", b: "LCNH" },
        { kind: "counties", target: 5 },
      ],
    },
    {
      name: "The Monadnock Region, the Upper Valley & the White Mountains",
      areas: ["uplands"],
      goals: [
        { kind: "totalPassengers", target: 360 },
        // Keene to Lebanon, as NH-12A and the Connecticut valley run (the Connecticut bridges at Windsor and White River Junction are in Vermont's pack)
        { kind: "connect", a: "KENH", b: "LBNH" },
        { kind: "counties", target: 8 },
      ],
    },
  ],
});
