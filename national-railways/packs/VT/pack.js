// National Railways pack: Vermont.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/VT/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/VT/raw.
// Vermont's 14 counties are 7 regions (tools/build-map.js, STATES.VT): the Northeast Kingdom (Caledonia, Essex and
// Orleans), Franklin with Grand Isle (the Lake Champlain islands), Central Vermont (Washington, Lamoille and Orange),
// the Connecticut valley (Windham and Windsor), Addison with Rutland (US-7 and Otter Creek), and Bennington and
// Chittenden (Burlington) alone. Lake Champlain and the Connecticut are real borders with New York and New Hampshire:
// the bridges and ferries below are the real crossings.
NR.addPack({
  code: "VT",
  name: "Vermont",
  // A game that starts here begins owning Chittenden (Burlington, the biggest region), Franklin and Grand Isle (St.
  // Albans) and Central Vermont (Montpelier): all three touch each other (Chittenden touches both, and Franklin
  // touches Central along the Franklin and Lamoille county line). Burlington is metro, St. Albans farm and Montpelier mountain, so the
  // first track (Burlington to St. Albans, I-89 and US-7, 24 mi) has riders.
  start: ["vt-chittenden", "vt-franklin-grand-isle", "vt-lamoille-orange-washington"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short code shown on
  // passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which level
  // unlocks it in Levels mode. Points are the Census points (every Census place is in packs/VT/raw/places.json) unless
  // a comment says the downtown was used. Vermont's towns are county subdivisions, so the files give a population only
  // to its cities and villages; the other places are the well-known centres and the comment says so.
  stations: [
    // Level: Burlington, St. Albans and Montpelier (the start)
    // Burlington (44,742): the biggest city of Vermont, on Lake Champlain, I-89, US-7 and the Ethan Allen Express, the core of a metro of 225,000 (the University of Vermont, Church Street Marketplace) and the home of Burlington International Airport (the state's one big airport, about 1.4 million passengers a year before 2020). Region 168k, the biggest of the state: size 2, like the other 100-300k regions (the metro is small next to every other state's). The point is downtown (Church Street), 2.7 km from the Census point, which is the middle of the city limits out on the lake.
    { id: "BTVT", name: "Burlington", county: "vt-chittenden", lat: 44.48, lon: -73.21, airport: "Burlington International Airport", type: "metro", size: 2, pop: 168, main: true, level: "champlain" },
    // St. Albans (6,863): the biggest city of Franklin County (the dairy county, "the Dairy Capital") and Grand Isle, on I-89, US-7 and the Vermonter, 15 mi south of the Quebec line at Highgate Springs. Typed farm so that the start has three types of place. Region 57k, size 1.
    { id: "SAVT", name: "St. Albans", county: "vt-franklin-grand-isle", lat: 44.81, lon: -73.08, type: "farm", size: 1, pop: 57, main: true, level: "champlain" },
    // Montpelier (8,084): the state capital, the smallest in the country, in the Winooski valley on I-89, US-2 and VT-12. Barre (8,489) is a little bigger by the Census but is the granite town 5 mi south-east (a town here): the brief's choice is Montpelier, the capital and the way to Burlington. Typed mountain (the Green Mountains, Camel's Hump and Stowe all lie in this region). Region 115k (Washington, Lamoille and Orange), size 2. The point is the Census point, 1 km from the State House.
    { id: "MPLR", name: "Montpelier", county: "vt-lamoille-orange-washington", lat: 44.27, lon: -72.57, type: "mountain", size: 2, pop: 115, main: true, level: "champlain" },
    // Level: Rutland and the south-west
    // Rutland (15,815): "the Marble City", the second city of Vermont and the biggest of Addison and Rutland counties, on US-7 and US-4 at the foot of Killington, the end of the Ethan Allen Express and the Vermont Railway's hub. Middlebury (the Addison seat, about 9,000) is the biggest town of Addison County but is a town here. Typed mountain (Killington, Pico and the Green Mountain National Forest). Region 98k, size 2 (like Fairbanks, 96k, and Prince George, 97k).
    { id: "RUT", name: "Rutland", county: "vt-addison-rutland", lat: 43.61, lon: -72.98, type: "mountain", size: 2, pop: 98, main: true, level: "southwest" },
    // Bennington (about 15,000, the town; a CDP with no population in the files): the biggest place of the south-west corner and the Bennington Battle Monument (1891, 306 ft, the tallest structure in Vermont, for the 1777 battle) and the Bennington Museum, on US-7 and VT-9. North Bennington (1,716, a village in the files) is a village of the town 5 mi north. Typed mountain (Mount Anthony, the Taconics and the Green Mountains). Region 37k, size 1. The point is downtown (Main Street at Bank Street), 2 km from the Census point; the Battle Monument is 2 mi north-west in Old Bennington, so the station is scenic.
    { id: "BENN", name: "Bennington", county: "vt-bennington", lat: 42.88, lon: -73.2, scenic: true, type: "mountain", size: 1, pop: 37, main: true, level: "southwest" },
    // Level: the Northeast Kingdom and the Connecticut valley
    // St. Johnsbury (about 7,300 in the town, a CDP with no population in the files): the "Hub of the Northeast Kingdom", the seat of Caledonia County and the biggest place of the region, on I-91, US-2 and US-5 (the Fairbanks Museum, the Athenaeum and the Fairbanks Scales). Newport (4,453) is the biggest place with a population in the files and is a town here (the Lake Memphremagog town, 37 mi north). Typed mountain (the Kingdom's hills, Burke Mountain and the Willoughby Gap). Region 64k, size 1. The point is downtown (Eastern Avenue and Main Street), 1.4 km from the Census point.
    { id: "SJVT", name: "St. Johnsbury", county: "vt-caledonia-essex-orleans", lat: 44.42, lon: -72.02, type: "mountain", size: 1, pop: 64, main: true, level: "kingdom" },
    // Brattleboro (about 12,000 in the town, a CDP with no population in the files): the biggest place of Windham County and of the south of the Connecticut valley, on I-91, the Connecticut (the Brooks Memorial Bridge to New Hampshire) and the Vermonter, 8 mi from the Massachusetts line (Greenfield is 18 mi). The region (Windham and Windsor, 104k) runs from here to the Upper Valley: Bellows Falls (2,788) and White River Junction (the rail and highway junction of the north) are towns here. Typed farm (the valley's farms and the river meadows). Size 2 (104k). The point is downtown (Main Street at the Connecticut), 1.3 km from the Census point.
    { id: "BRAT", name: "Brattleboro", county: "vt-windham-windsor", lat: 42.85, lon: -72.56, type: "farm", size: 2, pop: 104, main: true, level: "kingdom" },
  ],
  // Towns that appear over time: the next-biggest real places of each region, spread out, plus well-known scenic
  // places (scenic: true, see NOTES.md).
  towns: [
    // Chittenden
    // Essex Junction (10,602): the railway and highway junction on the Winooski (Amtrak's Ethan Allen Express and Vermonter, the Vermont Route 15 and 2A), 5 mi east of Burlington, the biggest of the suburbs after South Burlington (20,280, 3.3 mi from the downtown point and too close to Burlington's)
    { id: "ESXJ", name: "Essex Junction", county: "vt-chittenden", lat: 44.49, lon: -73.11, type: "metro", size: 1 },
    // Shelburne (about 7,700, a CDP with no population in the files): the Shelburne Museum (a 45-acre museum of Americana) and Shelburne Farms (a working farm and National Historic Landmark on the lake), 7 mi south of Burlington on US-7
    { id: "SHVT", name: "Shelburne", county: "vt-chittenden", lat: 44.38, lon: -73.22, scenic: true, type: "farm", size: 1 },
    // Franklin and Grand Isle
    // Swanton (2,350): the Missisquoi River town on US-7 and the Vermonter (it runs on to St. Albans and Montreal), 8 mi from St. Albans, on the way to the Highgate Springs border crossing
    { id: "SWNT", name: "Swanton", county: "vt-franklin-grand-isle", lat: 44.92, lon: -73.12, type: "farm", size: 1 },
    // South Hero (a CDP with no population in the files): the biggest town of the Grand Isle islands, on US-2 across the Sand Bar Bridge, with the orchards and vineyards of the island and the Grand Isle ferry to Plattsburgh
    { id: "SHRO", name: "South Hero", county: "vt-franklin-grand-isle", lat: 44.65, lon: -73.3, type: "coast", size: 1 },
    // Northeast Kingdom
    // Newport (4,453): "the Gem of the Kingdom" on Lake Memphremagog at the Canadian line (the Newport-Derby Line corridor of I-91, 6 mi from the Derby Line border crossing to Stanstead, Quebec)
    { id: "NWPV", name: "Newport", county: "vt-caledonia-essex-orleans", lat: 44.94, lon: -72.21, type: "coast", size: 1 },
    // Lake Willoughby (in Westmore, no population in the files): the deep glacial lake between Mount Pisgah and Mount Hor, the "Lake Willoughby Gap" and the best-known landscape of the Northeast Kingdom (a National Natural Landmark, Willoughby State Forest)
    { id: "WLBY", name: "Lake Willoughby", county: "vt-caledonia-essex-orleans", lat: 44.74, lon: -72.06, scenic: true, type: "mountain", size: 1 },
    // Central Vermont
    // Barre (8,489): "the Granite Capital of the World" (the Rock of Ages quarries, the Hope Cemetery), 5 mi south-east of Montpelier on VT-14 and I-89, the biggest city of the region by the Census
    { id: "BARV", name: "Barre", county: "vt-lamoille-orange-washington", lat: 44.2, lon: -72.51, type: "mountain", size: 1 },
    // Stowe (a CDP with no population in the files, about 5,000): Vermont's best-known ski town under Mount Mansfield (the highest peak, 4,393 ft), the Trapp Family Lodge and Smugglers' Notch on VT-108
    { id: "STWE", name: "Stowe", county: "vt-lamoille-orange-washington", lat: 44.47, lon: -72.68, scenic: true, type: "mountain", size: 1 },
    // Randolph (a CDP with no population in the files, about 4,800): the seat of the south of the region (Orange County's biggest village) on I-89 and VT-66 and the Vermont Granite and Green Mountain railways
    { id: "RNDV", name: "Randolph", county: "vt-lamoille-orange-washington", lat: 43.93, lon: -72.67, type: "farm", size: 1 },
    // Addison and Rutland
    // Middlebury (a CDP with no population in the files, about 9,000): Middlebury College and the falls of Otter Creek, the seat of Addison County and the biggest town of the north of the region, on US-7 and VT-125
    { id: "MDBY", name: "Middlebury", county: "vt-addison-rutland", lat: 44.01, lon: -73.16, type: "farm", size: 1 },
    // Fair Haven (a CDP with no population in the files): the slate town on US-4 at the New York line, the way to Whitehall (the Poultney River and the southern end of Lake Champlain)
    { id: "FRHV", name: "Fair Haven", county: "vt-addison-rutland", lat: 43.59, lon: -73.27, type: "farm", size: 1 },
    // Killington (Killington Village, no population in the files): the biggest ski resort in the East (Killington and Pico) on US-4 at Sherburne Pass, 10 mi east of Rutland
    { id: "KLNG", name: "Killington", county: "vt-addison-rutland", lat: 43.65, lon: -72.78, scenic: true, type: "mountain", size: 1 },
    // Windham and Windsor
    // Bellows Falls (2,788): the Connecticut River falls, the Vilas Bridge to Walpole, New Hampshire, and the Green Mountain Railroad's Vermonter stop, 20 mi north of Brattleboro on I-91
    { id: "BLFL", name: "Bellows Falls", county: "vt-windham-windsor", lat: 43.13, lon: -72.46, type: "farm", size: 1 },
    // Springfield (about 9,000, a CDP with no population in the files): "the Precision Valley" of the machine-tool makers (Jones & Lamson, Fellows Gear Shaper) on the Black River and VT-11, 4 mi from the Connecticut
    { id: "SPVT", name: "Springfield", county: "vt-windham-windsor", lat: 43.3, lon: -72.48, type: "farm", size: 1 },
    // White River Junction (a CDP with no population in the files, in the town of Hartford): the rail and highway junction of the Upper Valley (I-89 and I-91, the Vermonter), across the Connecticut from Lebanon and Hanover, New Hampshire
    { id: "WRJ", name: "White River Junction", county: "vt-windham-windsor", lat: 43.65, lon: -72.33, type: "metro", size: 1 },
    // Woodstock (937 in the village): the best-known village of the state (the Billings Farm and Museum, the Marsh-Billings-Rockefeller National Historical Park and the covered bridges) on US-4
    { id: "WDVT", name: "Woodstock", county: "vt-windham-windsor", lat: 43.62, lon: -72.52, scenic: true, type: "farm", size: 1 },
    // Bennington
    // Manchester (772 in the village, Manchester Center and the town together about 4,300): Hildene (Robert Todd Lincoln's house), the Equinox resort and the outlet shops under Mount Equinox, on US-7 and VT-11 / VT-30, 20 mi north of Bennington
    { id: "MNVT", name: "Manchester", county: "vt-bennington", lat: 43.16, lon: -73.07, scenic: true, type: "mountain", size: 1 },
  ],
  // Real passes: [name, latitude, longitude]. See NOTES.md for sources.
  passes: [
    ["Bolton Gap (I-89 and the Winooski River through the Green Mountains, Richmond to Waterbury)", 44.37, -72.88],
    ["Smugglers' Notch (VT-108 between Mount Mansfield and the Sterling Range, Stowe to Jeffersonville)", 44.55, -72.79],
    ["Appalachian Gap (VT-17 over the Green Mountains, Waitsfield to Bristol)", 44.21, -72.93],
    ["Middlebury Gap (VT-125 over the Green Mountains, Ripton to Hancock)", 43.94, -72.96],
    ["Brandon Gap (VT-73 over the Green Mountains, Brandon to Rochester)", 43.85, -72.95],
    ["Sherburne Pass (US-4 over the Green Mountains, Killington)", 43.65, -72.82],
    ["Hogback Mountain (VT-9 over the Green Mountains, Bennington to Brattleboro)", 42.86, -72.92],
  ],
  // Real bridges and ferries: [name, latitude, longitude]. See NOTES.md for sources.
  bridges: [
    // Lake Champlain: the real crossings (bridges and the Lake Champlain Transportation ferries)
    ["Sand Bar Bridge (US-2, Milton to South Hero)", 44.64, -73.24],
    ["Swanton-Alburgh Bridge (VT-78, the Missisquoi Bay Bridge)", 44.94, -73.18],
    ["Rouses Point Bridge (US-2, Alburgh to Rouses Point, New York)", 44.99, -73.35],
    ["Lake Champlain Bridge (VT-125 and NY-185, Chimney Point to Crown Point)", 44.03, -73.42],
    ["Grand Isle to Plattsburgh ferry (Gordon Landing)", 44.72, -73.3],
    ["Charlotte to Essex ferry (Charlotte)", 44.3, -73.29],
    ["Burlington to Port Kent ferry (mid-lake, the crossing from the Burlington waterfront to Port Kent, New York)", 44.5, -73.31],
    // The Connecticut River (the New Hampshire border), from the south up
    ["Brooks Memorial Bridge (VT-9, Brattleboro to Chesterfield, New Hampshire)", 42.86, -72.55],
    ["Vilas Bridge (Bellows Falls to Walpole, New Hampshire)", 43.13, -72.45],
    ["Cornish-Windsor Covered Bridge (Windsor to Cornish, New Hampshire)", 43.48, -72.38],
    ["Connecticut River bridges at White River Junction (I-89, I-91 and the rail bridge to West Lebanon, New Hampshire)", 43.65, -72.32],
    ["Ledyard Bridge (Norwich to Hanover, New Hampshire)", 43.7, -72.3],
    // The Winooski River
    ["Winooski Main Street Bridge (Burlington to Winooski)", 44.5, -73.19],
    ["Richmond Winooski River bridges (I-89 and US-2)", 44.4, -73],
    ["Waterbury Winooski River bridges (US-2 and the rail line)", 44.34, -72.76],
    ["Montpelier Winooski River bridges (US-2 and the State Street bridges)", 44.26, -72.58],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills.
  biomes: {
    // The Northeast Kingdom: the biggest unbroken forest of Vermont (Victory and Willoughby state forests, the
    // Nulhegan Basin)
    forest: ["vt-caledonia-essex-orleans"],
    // The Green Mountains and the hill country: Central Vermont, the Green Mountain National Forest side of Addison and
    // Rutland, the Connecticut valley's hills and Bennington's Taconic and Green Mountain edges
    wooded: ["vt-lamoille-orange-washington", "vt-addison-rutland", "vt-windham-windsor", "vt-bennington"],
    // Not listed (farmland): the Champlain valley of Chittenden and Franklin and Grand Isle. No dry.
  },
  levels: [
    {
      name: "Burlington, St. Albans & Montpelier",
      areas: ["champlain"],
      goals: [
        { kind: "totalPassengers", target: 60 },
        // Burlington to Montpelier, as I-89 and the Winooski valley run (over Bolton Gap)
        { kind: "connect", a: "BTVT", b: "MPLR" },
      ],
    },
    {
      name: "Rutland & the South-West",
      areas: ["southwest"],
      goals: [
        { kind: "totalPassengers", target: 160 },
        // Rutland to Bennington, as US-7 and the Vermont Railway's western corridor run
        { kind: "connect", a: "RUT", b: "BENN" },
        { kind: "counties", target: 5 },
      ],
    },
    {
      name: "The Northeast Kingdom & the Connecticut Valley",
      areas: ["kingdom"],
      goals: [
        { kind: "totalPassengers", target: 300 },
        // Brattleboro to St. Johnsbury, the length of I-91 and the Connecticut
        { kind: "connect", a: "BRAT", b: "SJVT" },
        { kind: "counties", target: 7 },
      ],
    },
  ],
});
