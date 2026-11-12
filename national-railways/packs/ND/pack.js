// National Railways pack: North Dakota.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/ND/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/ND/raw.
NR.addPack({
  code: "ND",
  name: "North Dakota",
  // A game that starts here begins owning these counties (Fargo, Wahpeton and Valley City): the
  // Red River valley up I-29 and the first stretch of I-94 west. All three touch each other.
  // Wahpeton and Valley City are farm, so the first track (Fargo–Wahpeton, the nearest pair)
  // has riders.
  start: ["nd-cass", "nd-ransom-richland-sargent", "nd-barnes-griggs"],
  // Main stations: one per county region, at its biggest place, except Stanley and Mott
  // (explained below). id = the short code shown on passengers. county = region id in this
  // folder's map.js. pop = region population in thousands (2020 census). size = how busy
  // (1 to 5). level = which level unlocks it in Levels mode. scenic = a place tourists travel
  // to. North Dakota has no seaport and no airport over the game's bar (NOTES.md). Points are
  // the Census points, except Williston (NOTES.md).
  stations: [
    // Level 1: Fargo and the Red River valley
    // Fargo: North Dakota's biggest city, size 2 by its 185k (as Billings, 165k). At the Census
    // point, 2.1 mi west-southwest of downtown: downtown is on the Red River, and a line from it
    // to Grand Forks would cross the river's bends four times (NOTES.md).
    { id: "FRGO", name: "Fargo", county: "nd-cass", lat: 46.86, lon: -96.83, type: "metro", size: 2, pop: 185, main: true, level: "red" },
    // Grand Forks: the University of North Dakota and Grand Forks Air Force Base, size 2. At the
    // Census point, 2.5 mi west of downtown on the Red River (as Fargo). GFK is British
    // Columbia's Grand Forks.
    { id: "GRFK", name: "Grand Forks", county: "nd-grand-forks", lat: 47.92, lon: -97.09, type: "metro", size: 2, pop: 73, main: true, level: "red" },
    // Wahpeton: where the Red River begins, in the southern valley's sugar-beet farms.
    { id: "WAH", name: "Wahpeton", county: "nd-ransom-richland-sargent", lat: 46.27, lon: -96.61, type: "farm", size: 1, pop: 26, main: true, level: "red" },
    { id: "MYV", name: "Mayville", county: "nd-steele-traill", lat: 47.5, lon: -97.33, type: "farm", size: 1, pop: 10, main: true, level: "red" },
    { id: "GRF", name: "Grafton", county: "nd-cavalier-pembina-walsh", lat: 48.41, lon: -97.41, type: "farm", size: 1, pop: 21, main: true, level: "red" },
    // Valley City: I-94 and the old Northern Pacific cross the Sheyenne valley here.
    { id: "VLY", name: "Valley City", county: "nd-barnes-griggs", lat: 46.92, lon: -98.0, type: "farm", size: 1, pop: 13, main: true, level: "red" },
    // Level 2: Bismarck and I-94
    // Jamestown: on the James River, I-94 and the old Northern Pacific.
    { id: "JMS", name: "Jamestown", county: "nd-kidder-stutsman", lat: 46.91, lon: -98.69, type: "farm", size: 1, pop: 24, main: true, level: "central" },
    // Bismarck: the capital, size 2 by its 98k.
    { id: "BIS", name: "Bismarck", county: "nd-burleigh", lat: 46.81, lon: -100.77, type: "metro", size: 2, pop: 98, main: true, level: "central" },
    // Mandan: Bismarck's twin across the Missouri, and the ranches and Standing Rock beyond, so
    // farm (Bismarck–Mandan has riders).
    { id: "MAN", name: "Mandan", county: "nd-morton-sioux", lat: 46.83, lon: -100.89, type: "farm", size: 1, pop: 37, main: true, level: "central" },
    { id: "OKS", name: "Oakes", county: "nd-dickey-lamoure", lat: 46.14, lon: -98.09, type: "farm", size: 1, pop: 9, main: true, level: "central" },
    { id: "LTN", name: "Linton", county: "nd-emmons-logan-mcintosh", lat: 46.27, lon: -100.23, type: "farm", size: 1, pop: 8, main: true, level: "central" },
    { id: "CRN", name: "Carrington", county: "nd-eddy-foster-wells", lat: 47.45, lon: -99.13, type: "farm", size: 1, pop: 10, main: true, level: "central" },
    // Level 3: the Hi-Line, Devils Lake and Minot
    { id: "DVL", name: "Devils Lake", county: "nd-benson-nelson-ramsey", lat: 48.11, lon: -98.87, type: "farm", size: 1, pop: 21, main: true, level: "north" },
    // Rugby: the Empire Builder's stop and the geographic center of North America marker.
    { id: "RUG", name: "Rugby", county: "nd-mchenry-pierce", lat: 48.37, lon: -99.99, type: "farm", size: 1, pop: 9, main: true, level: "north" },
    { id: "ROL", name: "Rolla", county: "nd-rolette-towner", lat: 48.84, lon: -99.61, type: "farm", size: 1, pop: 14, main: true, level: "north" },
    { id: "BOT", name: "Bottineau", county: "nd-bottineau-renville", lat: 48.83, lon: -100.44, type: "farm", size: 1, pop: 9, main: true, level: "north" },
    // Minot: North Dakota's fourth city (and Minot Air Force Base), size 2 by its 70k.
    { id: "MOT", name: "Minot", county: "nd-ward", lat: 48.24, lon: -101.28, type: "metro", size: 2, pop: 70, main: true, level: "north" },
    // Garrison: on Lake Sakakawea's north shore, 10 mi north of Garrison Dam.
    { id: "GRSN", name: "Garrison", county: "nd-mclean-sheridan", lat: 47.65, lon: -101.42, type: "farm", size: 1, pop: 11, main: true, level: "north" },
    // Level 4: the Badlands and the Bakken
    // Dickinson: the southwest's city, at the edge of the Badlands (Theodore Roosevelt National
    // Park's South Unit is 35 mi west), so desert (as Glendive across the Montana line).
    { id: "DIK", name: "Dickinson", county: "nd-billings-golden-valley-stark", lat: 46.89, lon: -102.8, type: "desert", size: 1, pop: 36, main: true, level: "west" },
    // Watford City: the Bakken's oil and the Little Missouri badlands (the North Unit), so desert.
    { id: "WFC", name: "Watford City", county: "nd-dunn-mckenzie", lat: 47.8, lon: -103.27, type: "desert", size: 1, pop: 19, main: true, level: "west" },
    // Williston: the Bakken's oil capital, where the Hi-Line meets the Missouri. Metro like
    // Alberta's Fort McMurray and Manitoba's Thompson. 1.6 mi north of downtown: the map's Lake
    // Sakakawea reaches up the Missouri over downtown. The Census point is 3.2 mi north-northwest.
    { id: "WILS", name: "Williston", county: "nd-divide-williams", lat: 48.17, lon: -103.62, type: "metro", size: 1, pop: 43, main: true, level: "west" },
    // Stanley, not New Town (2,768, the biggest): Stanley (2,352) is the county seat and the
    // Empire Builder's stop on US-2 and the Hi-Line, midway between Minot and Williston. New Town
    // (a town here) sits on Lake Sakakawea at the Four Bears Bridge (NOTES.md).
    { id: "STAN", name: "Stanley", county: "nd-burke-mountrail", lat: 48.31, lon: -102.4, type: "farm", size: 1, pop: 12, main: true, level: "west" },
    // Beulah: the Knife River's lignite mines and power plants, and farms.
    { id: "BEU", name: "Beulah", county: "nd-mercer-oliver", lat: 47.27, lon: -101.77, type: "farm", size: 1, pop: 10, main: true, level: "west" },
    // Bowman: dry short-grass ranch country (as Baker across the Montana line), so desert.
    { id: "BOW", name: "Bowman", county: "nd-adams-bowman-slope", lat: 46.18, lon: -103.4, type: "desert", size: 1, pop: 6, main: true, level: "west" },
    // Mott, not New England (695): Mott (655) is the county seat, on the Cannonball in the middle
    // of the region; New England is at its northwest corner, 24 mi from Dickinson.
    { id: "MTT", name: "Mott", county: "nd-grant-hettinger", lat: 46.37, lon: -102.32, type: "farm", size: 1, pop: 5, main: true, level: "west" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park gate or visitor center (sources in NOTES.md).
  towns: [
    // Fargo and the Red River valley
    { id: "CSLT", name: "Casselton", county: "nd-cass", lat: 46.9, lon: -97.21, type: "farm", size: 1 },
    { id: "LRMR", name: "Larimore", county: "nd-grand-forks", lat: 47.91, lon: -97.63, type: "farm", size: 1 },
    { id: "LSB", name: "Lisbon", county: "nd-ransom-richland-sargent", lat: 46.44, lon: -97.68, type: "farm", size: 1 },
    { id: "HNKN", name: "Hankinson", county: "nd-ransom-richland-sargent", lat: 46.07, lon: -96.89, type: "farm", size: 1 },
    { id: "HLS", name: "Hillsboro", county: "nd-steele-traill", lat: 47.4, lon: -97.06, type: "farm", size: 1 },
    { id: "LNGD", name: "Langdon", county: "nd-cavalier-pembina-walsh", lat: 48.76, lon: -98.38, type: "farm", size: 1 },
    // Pembina: I-29's crossing to Emerson, Manitoba.
    { id: "PMB", name: "Pembina", county: "nd-cavalier-pembina-walsh", lat: 48.97, lon: -97.25, type: "farm", size: 1 },
    { id: "COOP", name: "Cooperstown", county: "nd-barnes-griggs", lat: 47.44, lon: -98.13, type: "farm", size: 1 },
    // Bismarck and I-94
    // Steele: the town in Kidder County, on I-94 (Steele County is the Mayville region).
    { id: "STEE", name: "Steele", county: "nd-kidder-stutsman", lat: 46.86, lon: -99.92, type: "farm", size: 1 },
    // Fort Abraham Lincoln State Park: Custer's last post and the On-A-Slant Mandan village.
    { id: "FTAL", name: "Fort Abraham Lincoln", county: "nd-morton-sioux", lat: 46.76, lon: -100.85, scenic: true, type: "farm", size: 1 },
    // Fort Yates: the Standing Rock Sioux Tribe's headquarters, on Lake Oahe.
    { id: "FTY", name: "Fort Yates", county: "nd-morton-sioux", lat: 46.09, lon: -100.63, type: "farm", size: 1 },
    { id: "ELLE", name: "Ellendale", county: "nd-dickey-lamoure", lat: 46.0, lon: -98.53, type: "farm", size: 1 },
    { id: "LMO", name: "LaMoure", county: "nd-dickey-lamoure", lat: 46.36, lon: -98.3, type: "farm", size: 1 },
    { id: "WSHK", name: "Wishek", county: "nd-emmons-logan-mcintosh", lat: 46.26, lon: -99.56, type: "farm", size: 1 },
    { id: "NPLN", name: "Napoleon", county: "nd-emmons-logan-mcintosh", lat: 46.5, lon: -99.77, type: "farm", size: 1 },
    { id: "HRV", name: "Harvey", county: "nd-eddy-foster-wells", lat: 47.78, lon: -99.93, type: "farm", size: 1 },
    { id: "NRK", name: "New Rockford", county: "nd-eddy-foster-wells", lat: 47.68, lon: -99.14, type: "farm", size: 1 },
    // The Hi-Line, Devils Lake and Minot
    { id: "LKO", name: "Lakota", county: "nd-benson-nelson-ramsey", lat: 48.04, lon: -98.35, type: "farm", size: 1 },
    { id: "LDS", name: "Leeds", county: "nd-benson-nelson-ramsey", lat: 48.29, lon: -99.43, type: "farm", size: 1 },
    { id: "CNDO", name: "Cando", county: "nd-rolette-towner", lat: 48.49, lon: -99.2, type: "farm", size: 1 },
    // Dunseith: on US-281 below the Turtle Mountains, the road to the International Peace Garden
    // (in Manitoba's pack).
    { id: "DNS", name: "Dunseith", county: "nd-rolette-towner", lat: 48.81, lon: -100.06, type: "farm", size: 1 },
    { id: "MOH", name: "Mohall", county: "nd-bottineau-renville", lat: 48.77, lon: -101.52, type: "farm", size: 1 },
    { id: "VLV", name: "Velva", county: "nd-mchenry-pierce", lat: 48.06, lon: -100.93, type: "farm", size: 1 },
    // Kenmare: on US-52 and the Soo Line toward Portal.
    { id: "KNM", name: "Kenmare", county: "nd-ward", lat: 48.67, lon: -102.07, type: "farm", size: 1 },
    { id: "WSB", name: "Washburn", county: "nd-mclean-sheridan", lat: 47.29, lon: -101.03, type: "farm", size: 1 },
    { id: "MCLU", name: "McClusky", county: "nd-mclean-sheridan", lat: 47.48, lon: -100.44, type: "farm", size: 1 },
    // Garrison Dam: one of the world's largest earthfill dams, which holds back Lake Sakakawea. At
    // Riverdale, the dam's town at its east end. ND-200 crosses the dam to Pick City.
    { id: "GDAM", name: "Garrison Dam", county: "nd-mclean-sheridan", lat: 47.5, lon: -101.37, scenic: true, type: "farm", size: 1 },
    // The Badlands and the Bakken
    { id: "TIO", name: "Tioga", county: "nd-divide-williams", lat: 48.4, lon: -102.94, type: "farm", size: 1 },
    { id: "CRSB", name: "Crosby", county: "nd-divide-williams", lat: 48.92, lon: -103.3, type: "farm", size: 1 },
    // New Town: the Mandan, Hidatsa and Arikara Nation's capital, at the Four Bears Bridge.
    { id: "NTWN", name: "New Town", county: "nd-burke-mountrail", lat: 47.99, lon: -102.49, type: "farm", size: 1 },
    // Portal: the Soo Line's and US-52's crossing to North Portal, Saskatchewan.
    { id: "PRTL", name: "Portal", county: "nd-burke-mountrail", lat: 48.99, lon: -102.55, type: "farm", size: 1 },
    { id: "KLDR", name: "Killdeer", county: "nd-dunn-mckenzie", lat: 47.37, lon: -102.75, type: "farm", size: 1 },
    // Theodore Roosevelt National Park's North Unit: at its entrance on US-85, south of Watford City.
    { id: "TRNU", name: "Theodore Roosevelt North Unit", county: "nd-dunn-mckenzie", lat: 47.6, lon: -103.26, scenic: true, type: "desert", size: 1 },
    { id: "HZN", name: "Hazen", county: "nd-mercer-oliver", lat: 47.3, lon: -101.63, type: "farm", size: 1 },
    // Knife River Indian Villages National Historic Site: Hidatsa earthlodge villages, by Stanton.
    { id: "KRIV", name: "Knife River Indian Villages", county: "nd-mercer-oliver", lat: 47.33, lon: -101.39, scenic: true, type: "farm", size: 1 },
    // Medora: the gateway to Theodore Roosevelt National Park's South Unit, in the Badlands.
    { id: "MDRA", name: "Medora", county: "nd-billings-golden-valley-stark", lat: 46.91, lon: -103.53, scenic: true, type: "desert", size: 1 },
    { id: "BCH", name: "Beach", county: "nd-billings-golden-valley-stark", lat: 46.92, lon: -104.0, type: "farm", size: 1 },
    // Hettinger: the town is in Adams County (Hettinger County is the Mott region).
    { id: "HTG", name: "Hettinger", county: "nd-adams-bowman-slope", lat: 46.0, lon: -102.64, type: "farm", size: 1 },
    { id: "MRMH", name: "Marmarth", county: "nd-adams-bowman-slope", lat: 46.3, lon: -103.94, type: "desert", size: 1 },
    // The Enchanted Highway: giant scrap-metal sculptures on the road from I-94 to Regent.
    { id: "ENCH", name: "Enchanted Highway", county: "nd-grant-hettinger", lat: 46.42, lon: -102.56, scenic: true, type: "farm", size: 1 },
    { id: "ELG", name: "Elgin", county: "nd-grant-hettinger", lat: 46.4, lon: -101.85, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Fargo & the Red River Valley",
      areas: ["red"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Bismarck & I-94",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Fargo to the capital, as I-94 and the old Northern Pacific run
        { kind: "connect", a: "FRGO", b: "BIS" },
        { kind: "counties", target: 10 },
      ],
    },
    {
      name: "Devils Lake, Minot & the Hi-Line",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Grand Forks to Minot, as US-2 and the Empire Builder run
        { kind: "connect", a: "GRFK", b: "MOT" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "The Badlands & the Bakken",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "BIS", b: "WILS" },
        { kind: "cargo", cargo: "trucks", target: 30 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. North Dakota is flat (the
  // Badlands along the Little Missouri are hills, not mountains): no link needs one.
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow
  // enough. Placed on the map's river or lake where it passes the town. Sources in NOTES.md.
  bridges: [
    // The Missouri and Lake Sakakawea: the only crossings between Montana and Bismarck
    ["Lewis and Clark Bridge (US-85, Williston)", 48.11, -103.64],
    ["Four Bears Bridge (New Town)", 47.98, -102.55], // ND-23 over Lake Sakakawea
    ["Garrison Dam (ND-200)", 47.5, -101.42],
    ["Missouri River bridges (Bismarck–Mandan)", 46.82, -100.82], // I-94 and the BNSF
    // The Red River (the Minnesota line): for the lines into Minnesota when it joins
    ["Red River bridge (Wahpeton–Breckenridge)", 46.27, -96.6],
    ["Red River bridges (Fargo–Moorhead)", 46.88, -96.78], // I-94 and the BNSF
    ["Red River bridges (Grand Forks–East Grand Forks)", 47.93, -97.01], // US-2 and the BNSF
    ["Red River bridge (Pembina)", 48.97, -97.23],
    // Rivers on I-94 and the old Northern Pacific
    ["Sheyenne River bridge (West Fargo)", 46.87, -96.92],
    ["Hi-Line Bridge (Valley City)", 46.93, -98.01], // the railway's high bridge over the Sheyenne valley
    ["James River bridge (Jamestown)", 46.91, -98.7],
    ["Heart River bridge (Mandan)", 46.83, -100.95],
    ["Heart River bridge (Dickinson)", 46.87, -102.79],
    // The Little Missouri: I-94 at Medora, US-85 at the North Unit, US-12 at Marmarth
    ["Little Missouri River bridge (Medora)", 46.91, -103.54],
    ["Long X Bridge (US-85)", 47.59, -103.25], // at the North Unit's entrance
    ["Little Missouri River bridge (Marmarth)", 46.29, -103.92],
    // The Souris on US-2 and the Hi-Line
    ["Souris River bridge (Towner)", 48.33, -100.46],
    ["Souris River bridge (Minot)", 48.24, -101.29],
    ["Souris River bridge (Burlington)", 48.26, -101.41],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The Badlands and dry short-grass rangeland along the Little Missouri, like Montana's
    // Dawson-Prairie-Wibaux, Carter-Fallon and Garfield-McCone-Richland across the line
    dry: ["nd-adams-bowman-slope", "nd-billings-golden-valley-stark", "nd-dunn-mckenzie"],
    // Not listed (farmland and grassland): everything else, the Red River valley's and the Drift
    // Prairie's farms, the Missouri Coteau, and the Turtle Mountains (as Manitoba's Division 5-6)
  },
});
