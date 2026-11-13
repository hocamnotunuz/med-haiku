// National Railways map builder. From U.S. Census Bureau county boundaries (the us-atlas
// package), each Canadian province's own open data (see CANADA below) and Natural Earth
// outlines, it makes:
//   packs/<code>/map.js  for each state in the game: its county regions (merged where small),
//                        land, coast, county borders and borders with the other states in the game
//   packs/index.js       every state (and Mexico and Canada): a rough outline, its neighbors and
//                        its name, for the clouds and the land outside the game
//
// Usage (from the national-railways folder), listing every state in the game:
//   cd tools && npm install && cd ..
//   node tools/build-map.js tools/node_modules <cache folder> CA NV AZ OR
// The cache folder keeps the downloaded country outlines (the same one build-terrain.js uses).
//
// To add a state: add it to STATES below (FIPS code, name, and either a hand-made `merge`
// list or `pop` so small counties are merged automatically), run the script with it, then
// make its pack (see PACKS.md). join: [["Island county", "Mainland county"]] puts a county of
// islands that no bridge reaches in one region with a mainland county. bridges: [["A", "B"]] makes two
// regions neighbors across water (a bridge or ferry); "NB:Westmorland" names another state's or
// province's region (that link counts once both are in the game). pop: "census" reads every county's population from the U.S.
// Census Bureau's county totals (the 2020 census base), downloaded into the cache folder, so
// nothing is typed by hand.
//
// A Canadian province (country: "CAN") is made from its census divisions instead of counties:
// see CANADA below for where each province's come from. Its populations come from Statistics
// Canada's 2021 Census tables (pop: "statcan"). merge, join and bridges work the same way.
// The two countries' maps come from different sources and share no points, so their border is
// found by distance (see "Borders between the two countries").
"use strict";
const fs = require("fs");
const path = require("path");

const { execFileSync } = require("child_process");
const MODULES = path.resolve(process.argv[2] || path.join(__dirname, "node_modules"));
const CACHE = process.argv[3] && path.resolve(process.argv[3]);
const CODES = process.argv.slice(4).map((c) => c.toUpperCase());
if (!CACHE || !CODES.length) {
  console.error("Usage: node tools/build-map.js <node_modules> <cache folder> CA NV AZ OR ...");
  process.exit(1);
}
const SMALL = 50; // counties under 50,000 people may be merged (up to 3 neighbors per region)

const STATES = {
  CA: {
    fips: "06",
    name: "California",
    // Merged by hand (approved list).
    merge: [
      ["Del Norte", "Siskiyou", "Trinity"],
      ["Lassen", "Modoc"],
      ["Plumas", "Sierra"],
      ["Colusa", "Glenn"],
      ["Alpine", "Amador", "Calaveras"],
      ["Inyo", "Mono"],
      ["Mariposa", "Tuolumne"],
    ],
    // Bridges across water also count as a shared border.
    bridges: [
      ["San Francisco", "Marin"], // Golden Gate Bridge
      ["Contra Costa", "Marin"], // Richmond–San Rafael Bridge
      ["Alameda", "San Mateo"], // San Mateo Bridge
    ],
  },
  // Population in thousands (2020 census), used to merge small counties automatically.
  NV: {
    fips: "32",
    name: "Nevada",
    pop: {
      Clark: 2265, Washoe: 486, Lyon: 59, "Carson City": 59, Elko: 54, Nye: 52, Douglas: 49, Churchill: 26, Humboldt: 17,
      "White Pine": 9, Pershing: 7, Lander: 6, Mineral: 5, Lincoln: 4, Storey: 4, Eureka: 2, Esmeralda: 1,
    },
  },
  AZ: {
    fips: "04",
    name: "Arizona",
    pop: {
      Maricopa: 4421, Pima: 1043, Pinal: 425, Yavapai: 236, Mohave: 213, Yuma: 204, Coconino: 145, Cochise: 125, Navajo: 107,
      Apache: 66, Gila: 53, "Santa Cruz": 48, Graham: 39, "La Paz": 17, Greenlee: 10,
    },
  },
  // Merged by real metro and economic areas (the pilot pack agent's review of the automatic
  // merge, which had put Pasco with Pullman): the Tri-Cities' Franklin stays whole, the
  // Lewiston–Clarkston and Pullman area and the Wenatchee metro (Chelan and Douglas) are kept
  // together. San Juan County is islands with no bridge, so it joins Skagit across the water.
  // Whidbey Island (Island County) reaches Skagit over the Deception Pass Bridge.
  WA: {
    fips: "53",
    name: "Washington",
    join: [["San Juan", "Skagit"]],
    merge: [
      ["Whitman", "Asotin", "Garfield"],
      ["Columbia", "Walla Walla"],
      ["Chelan", "Douglas"],
      ["Okanogan", "Ferry"],
      ["Adams", "Lincoln"],
      ["Pend Oreille", "Stevens"],
      ["Pacific", "Wahkiakum"],
      ["Jefferson", "Mason"],
      ["Klickitat", "Skamania"],
    ],
    bridges: [["Island", "Skagit"]],
  },
  OR: {
    fips: "41",
    name: "Oregon",
    pop: {
      Multnomah: 815, Washington: 600, Clackamas: 421, Lane: 383, Marion: 346, Jackson: 223, Deschutes: 198, Linn: 129,
      Douglas: 111, Yamhill: 108, Benton: 95, Josephine: 88, Polk: 87, Umatilla: 80, Klamath: 69, Coos: 65, Columbia: 53,
      Lincoln: 50.4, Clatsop: 41, Malheur: 32, Tillamook: 27, Wasco: 27, Union: 26, Crook: 25, Jefferson: 25, "Hood River": 24,
      Curry: 23, Baker: 17, Morrow: 12, Lake: 8, Wallowa: 7, Harney: 7, Grant: 7, Gilliam: 2, Sherman: 2, Wheeler: 1,
    },
  },
  // The rest of the US: every county separate until its pack agent's review (Maryland includes DC)
  // Reviewed by the Idaho pack agent (packs/ID/NOTES.md): 44 counties to 25 regions, along real
  // routes: US-95 and the railway from Sandpoint to Bonners Ferry; the Silver Valley and the St. Joe;
  // the upper Clearwater and the Camas Prairie; the lower Payette and Weiser valleys; ID-55 to McCall;
  // Mountain Home and the Owyhee desert; the Wood River Valley; the north side of the Snake; Mini-
  // Cassia; US-93 from Arco to Salmon; I-15 north to Montana; Ashton to Driggs; Pocatello's rural west;
  // Idaho's Bear River valley. Latah (Moscow), Nez Perce (Lewiston) and Bingham (Blackfoot) stay alone.
  ID: {
    fips: "16",
    name: "Idaho",
    pop: "census",
    merge: [
      ["Bonner", "Boundary"],
      ["Benewah", "Shoshone"],
      ["Clearwater", "Idaho", "Lewis"],
      ["Gem", "Payette"],
      ["Adams", "Washington"],
      ["Boise", "Valley"],
      ["Elmore", "Owyhee"],
      ["Blaine", "Camas"],
      ["Gooding", "Jerome", "Lincoln"],
      ["Cassia", "Minidoka"],
      ["Butte", "Custer", "Lemhi"],
      ["Clark", "Jefferson"],
      ["Fremont", "Teton"],
      ["Oneida", "Power"],
      ["Bear Lake", "Caribou", "Franklin"],
    ],
    // (not to be read as the city of Boise)
    names: { "Boise-Valley": "Valley-Boise County" },
  },
  // Reviewed by the Montana pack agent (packs/MT/NOTES.md): 56 counties to 29 regions, along the
  // Hi-Line, the old Northern Pacific (I-90/I-94), the river valleys and the eastern plains (huge and
  // empty). Ravalli (the Bitterroot), Silver Bow (Butte), Lake and Lincoln (the Kootenai valley)
  // stay alone, each a valley or city of its own.
  MT: {
    fips: "30",
    name: "Montana",
    pop: "census",
    merge: [
      ["Mineral", "Sanders"],
      ["Deer Lodge", "Granite", "Powell"],
      ["Beaverhead", "Jefferson", "Madison"],
      ["Broadwater", "Meagher"],
      ["Park", "Sweet Grass"],
      ["Carbon", "Stillwater"],
      ["Golden Valley", "Musselshell", "Wheatland"],
      ["Fergus", "Judith Basin", "Petroleum"],
      ["Glacier", "Liberty", "Toole"],
      ["Pondera", "Teton"],
      ["Chouteau", "Hill"],
      ["Blaine", "Phillips"],
      ["Roosevelt", "Valley"],
      ["Daniels", "Sheridan"],
      ["Garfield", "McCone", "Richland"],
      ["Dawson", "Prairie", "Wibaux"],
      ["Carter", "Fallon"],
      ["Custer", "Powder River"],
      ["Big Horn", "Rosebud", "Treasure"],
    ],
  },
  // Reviewed by the Wyoming pack agent (packs/WY/NOTES.md): 23 counties to 15 regions. Wyoming's
  // Black Hills; the east foot of the Bighorns; the Bighorn Basin; the Green River; the southwest
  // corner on I-80; the North Platte valley; Douglas and Lusk. Campbell (Gillette), Albany (Laramie),
  // Fremont (the Wind River Basin), Park (Cody), Teton (Jackson) and Carbon (Rawlins, on I-80) stay alone.
  WY: {
    fips: "56",
    name: "Wyoming",
    pop: "census",
    merge: [
      ["Crook", "Weston"],
      ["Johnson", "Sheridan"],
      ["Big Horn", "Hot Springs", "Washakie"],
      ["Sublette", "Sweetwater"],
      ["Lincoln", "Uinta"],
      ["Goshen", "Platte"],
      ["Converse", "Niobrara"],
    ],
  },
  // Reviewed by the Utah pack agent (packs/UT/NOTES.md): 29 counties to 18 regions. Bear Lake over
  // Logan Canyon to Cache; the Weber valley and Park City; the Uinta Basin and Flaming Gorge; US-6
  // through Price Canyon; US-191 from Moab to Bluff; the Sevier Valley and Capitol Reef; Panguitch to
  // Kanab; I-15 and the Union Pacific's Los Angeles line. The Wasatch Front's counties stay apart;
  // Wasatch (Heber) and Sanpete (between the Wasatch Plateau and the San Pitch Mountains) stay alone.
  UT: {
    fips: "49",
    name: "Utah",
    pop: "census",
    merge: [
      ["Cache", "Rich"],
      ["Morgan", "Summit"],
      ["Daggett", "Duchesne", "Uintah"],
      ["Carbon", "Emery"],
      ["Grand", "San Juan"],
      ["Piute", "Sevier", "Wayne"],
      ["Garfield", "Kane"],
      ["Beaver", "Juab", "Millard"],
    ],
  },
  // Reviewed by the Colorado pack agent (packs/CO/NOTES.md): 64 counties to 36 regions. The eastern
  // plains along the South Platte, I-76, I-70 and the Arkansas; Raton Pass's approach; the Royal
  // Gorge; the Pikes Peak country; the I-70 mining towns; the upper Arkansas; the Gunnison country; the
  // San Luis Valley; Durango with Silverton and Pagosa Springs; the Four Corners; the Uncompahgre
  // valley; Telluride and Ouray; Middle Park; the Yampa valley. The Front Range's metro counties stay
  // apart; Summit (walled in by passes and the Eisenhower Tunnel) and Pitkin (Aspen) stay alone.
  CO: {
    fips: "08",
    name: "Colorado",
    pop: "census",
    merge: [
      ["Logan", "Phillips", "Sedgwick"],
      ["Morgan", "Washington", "Yuma"],
      ["Elbert", "Lincoln"],
      ["Cheyenne", "Kit Carson"],
      ["Bent", "Crowley", "Otero"],
      ["Baca", "Kiowa", "Prowers"],
      ["Huerfano", "Las Animas"],
      ["Custer", "Fremont"],
      ["Park", "Teller"],
      ["Clear Creek", "Gilpin"],
      ["Chaffee", "Lake"],
      ["Gunnison", "Hinsdale"],
      ["Alamosa", "Conejos", "Costilla"],
      ["Mineral", "Rio Grande", "Saguache"],
      ["Archuleta", "La Plata", "San Juan"],
      ["Dolores", "Montezuma"],
      ["Delta", "Montrose"],
      ["Ouray", "San Miguel"],
      ["Grand", "Jackson"],
      ["Moffat", "Rio Blanco", "Routt"],
    ],
    // (not to be read as Cheyenne, Wyoming)
    names: { "Cheyenne-Kit Carson": "Kit Carson-Cheyenne County" },
  },
  // Reviewed by the New Mexico pack agent (packs/NM/NOTES.md): 33 counties to 22 regions. US-64/87
  // from Raton to Clayton; the Canadian River at Tucumcari; I-25 and the Southwest Chief by Las Vegas;
  // the upper Rio Grande; I-40 from Moriarty to Santa Rosa; Clovis and Portales; I-25 to T or C and
  // US-60 west; I-10 and US-180 to Silver City. Los Alamos (its plateau), Lincoln (Ruidoso) and
  // Cibola (Grants) stay alone.
  NM: {
    fips: "35",
    name: "New Mexico",
    pop: "census",
    merge: [
      ["Colfax", "Union"],
      ["Harding", "Quay"],
      ["Mora", "San Miguel"],
      ["Rio Arriba", "Taos"],
      ["Guadalupe", "Torrance"],
      ["Curry", "De Baca", "Roosevelt"],
      ["Catron", "Sierra", "Socorro"],
      ["Grant", "Hidalgo", "Luna"],
    ],
  },
  // Reviewed by the Alaska pack agent (packs/AK/NOTES.md): 29 areas to 16 regions. The Alaska
  // Railroad and the Parks Highway from Mat-Su to Fairbanks (Denali, Nenana) with the Dalton; the
  // Richardson, Glenn and Alaska highways (Valdez, Glennallen, Tok); the Bering Strait; the
  // Yukon-Kuskokwim Delta; Bristol Bay; Ketchikan and Prince of Wales; the mid-panhandle; the outer
  // coast (Sitka); Lynn Canal (Juneau, Haines, Skagway). The Aleutians are one region (the Tustumena
  // ferry to Unalaska). Kodiak Island and the North Slope stay alone, like the territories' huge regions.
  AK: {
    fips: "02",
    name: "Alaska",
    pop: "census",
    join: [["Aleutians West", "Aleutians East"]],
    merge: [
      ["Denali", "Yukon-Koyukuk"],
      ["Southeast Fairbanks", "Valdez-Cordova"],
      ["Nome", "Northwest Arctic"],
      ["Bethel", "Kusilvak"],
      ["Bristol Bay", "Dillingham", "Lake and Peninsula"],
      ["Ketchikan Gateway", "Prince of Wales-Hyder"],
      ["Petersburg", "Wrangell"],
      ["Hoonah-Angoon", "Sitka", "Yakutat"],
      ["Haines", "Juneau", "Skagway"],
    ],
    names: { "Aleutians East-Aleutians West": "Aleutians Area", "Bristol Bay-Dillingham-Lake and Peninsula": "Bristol Bay Area" },
  },
  // Hawaii: 5 counties, 1.46 million people (Census 2020); 4 regions, one per island county. Kalawao
  // (Kalaupapa on Molokai, 82 people) joins Maui County, which holds the rest of Molokai. Sea links
  // stand for the regular inter-island shipping (Young Brothers' barges, and the Maui-Lanai ferry)
  // between neighbouring islands, Kauai to Oahu to Maui to the Big Island, and for Matson's ships
  // between Honolulu and Los Angeles, Hawaii's link to the mainland.
  HI: {
    fips: "15",
    name: "Hawaii",
    pop: "census",
    merge: [
      ["Kalawao", "Maui"],
    ],
    names: { "Kalawao-Maui": "Maui", "Honolulu": "Oahu", "Hawaii": "Big Island", "Kauai": "Kauai" },
    bridges: [
      ["Kauai", "Honolulu"],
      ["Honolulu", "Maui"],
      ["Maui", "Hawaii"],
      ["Honolulu", "CA:Los Angeles"],
    ],
  },
  // Reviewed by the North Dakota pack agent (packs/ND/NOTES.md): 53 counties to 25 regions, along
  // the Hi-Line (Williston, Stanley, Rugby, Devils Lake), I-94 (Dickinson, Mandan, Jamestown, Valley
  // City), the Red River valley (Grafton, Mayville, Wahpeton) and the James (Oakes). Bismarck and
  // Mandan stay apart, across the Missouri; Morton takes Sioux (Standing Rock). Fargo, Bismarck,
  // Grand Forks and Minot stay alone.
  ND: {
    fips: "38",
    name: "North Dakota",
    pop: "census",
    merge: [
      ["Divide", "Williams"],
      ["Burke", "Mountrail"],
      ["Dunn", "McKenzie"],
      ["Mercer", "Oliver"],
      ["Billings", "Golden Valley", "Stark"],
      ["Adams", "Bowman", "Slope"],
      ["Grant", "Hettinger"],
      ["Morton", "Sioux"],
      ["McLean", "Sheridan"],
      ["Bottineau", "Renville"],
      ["Rolette", "Towner"],
      ["McHenry", "Pierce"],
      ["Benson", "Nelson", "Ramsey"],
      ["Cavalier", "Pembina", "Walsh"],
      ["Steele", "Traill"],
      ["Barnes", "Griggs"],
      ["Ransom", "Richland", "Sargent"],
      ["Kidder", "Stutsman"],
      ["Eddy", "Foster", "Wells"],
      ["Emmons", "Logan", "McIntosh"],
      ["Dickey", "LaMoure"],
    ],
    names: { "Billings-Golden Valley-Stark": "Stark-Billings-Golden Valley County" },
  },
  // Reviewed by the South Dakota pack agent (packs/SD/NOTES.md): 66 counties to 30 regions. The
  // Black Hills (Spearfish, Hot Springs), the reservations (Pine Ridge, Rosebud, Cheyenne River),
  // the Missouri as a line between regions (Pierre and Fort Pierre apart, Mobridge, Chamberlain,
  // Yankton), US-12 (Aberdeen, Milbank), I-29 (Watertown, Brookings), I-90 (Mitchell) and the James
  // (Huron, Redfield). Sioux Falls, Rapid City and Lincoln stay alone, and Meade (Sturgis, 29,847):
  // the Northern Hills have only two small partners, so Lawrence or Meade must stay alone.
  SD: {
    fips: "46",
    name: "South Dakota",
    pop: "census",
    merge: [
      ["Butte", "Harding", "Lawrence"],
      ["Custer", "Fall River"],
      ["Bennett", "Oglala Lakota"],
      ["Mellette", "Todd"],
      ["Gregory", "Tripp"],
      ["Dewey", "Ziebach"],
      ["Corson", "Perkins"],
      ["Haakon", "Jackson"],
      ["Jones", "Lyman", "Stanley"],
      ["Campbell", "Walworth"],
      ["Brown", "Edmunds", "McPherson"],
      ["Hughes", "Potter", "Sully"],
      ["Hand", "Hyde"],
      ["Clark", "Faulk", "Spink"],
      ["Marshall", "Roberts"],
      ["Day", "Grant"],
      ["Codington", "Deuel", "Hamlin"],
      ["Brookings", "Moody"],
      ["Kingsbury", "Lake", "Miner"],
      ["Beadle", "Jerauld", "Sanborn"],
      ["Aurora", "Brule", "Buffalo"],
      ["Davison", "Hanson", "Hutchinson"],
      ["Charles Mix", "Douglas"],
      ["McCook", "Turner"],
      ["Bon Homme", "Yankton"],
      ["Clay", "Union"],
    ],
    names: { "Aurora-Brule-Buffalo": "Brule-Aurora-Buffalo County", "Butte-Harding-Lawrence": "Lawrence-Butte-Harding County" },
  },
  // Reviewed by the Nebraska pack agent (packs/NE/NOTES.md): 93 counties to 42 regions, along the
  // Platte and I-80 (Columbus, Lexington, North Platte, Ogallala, Sidney), the Missouri (Blair,
  // South Sioux City, Nebraska City), the Elkhorn (Norfolk, Fremont), the Republican (McCook,
  // Superior), the North Platte valley (Scottsbluff) and the Sandhills (Mullen, Broken Bow, Ord).
  // Omaha, Lincoln, Sarpy, Grand Island and Kearney stay alone, and Cherry (Valentine), bigger than
  // any group, with its neighbours' towns 41 to 84 miles away.
  NE: {
    fips: "31",
    name: "Nebraska",
    pop: "census",
    merge: [
      ["Burt", "Washington"],
      ["Dakota", "Dixon", "Thurston"],
      ["Cedar", "Wayne"],
      ["Madison", "Pierce", "Stanton"],
      ["Cuming", "Dodge"],
      ["Colfax", "Platte"],
      ["Antelope", "Knox"],
      ["Boyd", "Holt"],
      ["Brown", "Keya Paha", "Rock"],
      ["Boone", "Nance"],
      ["Hamilton", "Merrick"],
      ["Polk", "York"],
      ["Saline", "Seward"],
      ["Butler", "Saunders"],
      ["Cass", "Otoe"],
      ["Johnson", "Nemaha"],
      ["Pawnee", "Richardson"],
      ["Gage", "Jefferson"],
      ["Fillmore", "Thayer"],
      ["Adams", "Clay"],
      ["Franklin", "Nuckolls", "Webster"],
      ["Harlan", "Kearney", "Phelps"],
      ["Frontier", "Furnas"],
      ["Dawson", "Gosper"],
      ["Dundy", "Hitchcock", "Red Willow"],
      ["Chase", "Hayes", "Perkins"],
      ["Lincoln", "Logan", "McPherson"],
      ["Arthur", "Garden", "Keith"],
      ["Cheyenne", "Deuel", "Kimball"],
      ["Banner", "Morrill", "Scotts Bluff"],
      ["Dawes", "Sheridan"],
      ["Box Butte", "Sioux"],
      ["Grant", "Hooker", "Thomas"],
      ["Blaine", "Custer", "Loup"],
      ["Garfield", "Valley", "Wheeler"],
      ["Greeley", "Howard", "Sherman"],
    ],
    names: { "Lincoln-Logan-McPherson": "Logan-McPherson-Lincoln County", "Cheyenne-Deuel-Kimball": "Deuel-Kimball-Cheyenne County" },
  },
  // Reviewed by the Kansas pack agent (packs/KS/NOTES.md): 105 counties to 52 regions, along the
  // Missouri (Atchison), US-36 (Hiawatha, Marysville), the Kansas River (Wamego, Junction City),
  // I-35 and the Flint Hills (Ottawa, Emporia), the southeast's mining and river towns (Pittsburg,
  // Parsons, Coffeyville), the Santa Fe Trail and the Arkansas (Great Bend, Larned, Dodge City,
  // Garden City), US-54 (Pratt, Liberal) and I-70 (Russell, Hays, WaKeeney, Colby, Goodland). The
  // ten counties over 50k stay alone; every smaller one is merged.
  KS: {
    fips: "20",
    name: "Kansas",
    pop: "census",
    merge: [
      ["Atchison", "Doniphan"],
      ["Brown", "Nemaha"],
      ["Marshall", "Washington"],
      ["Jackson", "Jefferson"],
      ["Pottawatomie", "Wabaunsee"],
      ["Linn", "Miami"],
      ["Anderson", "Franklin"],
      ["Coffey", "Osage"],
      ["Chase", "Lyon"],
      ["Allen", "Bourbon"],
      ["Cherokee", "Crawford"],
      ["Labette", "Neosho"],
      ["Montgomery", "Wilson"],
      ["Elk", "Greenwood", "Woodson"],
      ["Chautauqua", "Cowley"],
      ["Geary", "Morris"],
      ["Clay", "Dickinson"],
      ["Harvey", "Marion"],
      ["McPherson", "Rice"],
      ["Harper", "Sumner"],
      ["Kingman", "Kiowa", "Pratt"],
      ["Barber", "Comanche"],
      ["Barton", "Stafford"],
      ["Edwards", "Pawnee"],
      ["Clark", "Ford", "Gray"],
      ["Finney", "Hamilton", "Kearny"],
      ["Grant", "Haskell", "Stanton"],
      ["Morton", "Stevens"],
      ["Meade", "Seward"],
      ["Greeley", "Scott", "Wichita"],
      ["Hodgeman", "Lane", "Ness"],
      ["Cheyenne", "Sherman", "Wallace"],
      ["Logan", "Rawlins", "Thomas"],
      ["Decatur", "Norton"],
      ["Graham", "Sheridan"],
      ["Gove", "Trego"],
      ["Ellis", "Rush"],
      ["Phillips", "Rooks"],
      ["Osborne", "Smith"],
      ["Jewell", "Mitchell"],
      ["Cloud", "Ottawa", "Republic"],
      ["Ellsworth", "Lincoln", "Russell"],
    ],
    names: { "Cheyenne-Sherman-Wallace": "Sherman-Wallace-Cheyenne County", "Greeley-Scott-Wichita": "Scott-Greeley-Wichita County" },
  },
  // Reviewed by the Oklahoma pack agent (packs/OK/NOTES.md): 77 counties to 42 regions, along US-69
  // and the Katy line (Pryor, McAlester, Durant), the Ozark edge and Grand Lake (Tahlequah, Miami),
  // I-40 (Sallisaw, Okmulgee, Weatherford, Elk City), the Ouachitas (Poteau, Idabel), I-35 and the
  // BNSF (Ponca City, Ardmore), the Cimarron and Washita valleys, old Greer County (Altus) and the
  // Panhandle (Guymon). The fifteen counties over 50k stay alone, and Logan (49,545), Oklahoma
  // City's north edge.
  OK: {
    fips: "40",
    name: "Oklahoma",
    pop: "census",
    merge: [
      ["Craig", "Mayes", "Nowata"],
      ["Delaware", "Ottawa"],
      ["Adair", "Cherokee"],
      ["Haskell", "Sequoyah"],
      ["Latimer", "Le Flore"],
      ["Atoka", "Pittsburg"],
      ["Choctaw", "McCurtain", "Pushmataha"],
      ["Bryan", "Marshall"],
      ["Carter", "Love"],
      ["Johnston", "Murray"],
      ["Coal", "Pontotoc"],
      ["Garvin", "McClain"],
      ["Hughes", "Seminole"],
      ["McIntosh", "Okmulgee"],
      ["Lincoln", "Okfuskee"],
      ["Osage", "Pawnee"],
      ["Grant", "Kay", "Noble"],
      ["Alfalfa", "Woods"],
      ["Blaine", "Kingfisher", "Major"],
      ["Ellis", "Harper", "Woodward"],
      ["Beaver", "Cimarron", "Texas"],
      ["Beckham", "Roger Mills"],
      ["Custer", "Dewey", "Washita"],
      ["Caddo", "Kiowa"],
      ["Greer", "Harmon", "Jackson"],
      ["Cotton", "Tillman"],
      ["Jefferson", "Stephens"],
    ],
  },
  // Reviewed by the Texas pack agent (packs/TX/NOTES.md): 254 counties to 150 regions. The metros'
  // counties of 50k or more stay alone (Dallas-Fort Worth, Houston, San Antonio, Austin); the rest
  // merge along the interstates and railways: the Panhandle and South Plains around their market
  // towns, the Big Country, the Hill Country (Fredericksburg, Kerrville side), the Trans-Pecos
  // (Alpine, Van Horn, Pecos), South Texas and the coast (Kingsville, Rockport, Port Lavaca, Bay
  // City), East Texas (the Big Thicket, the Piney Woods). Chambers, Cooke, Fannin and San Jacinto
  // stay alone: no small neighbour is left for them.
  TX: {
    fips: "48",
    name: "Texas",
    pop: "census",
    merge: [
      ["Dallam", "Hartley", "Oldham"],
      ["Moore", "Sherman"],
      ["Hansford", "Lipscomb", "Ochiltree"],
      ["Carson", "Hutchinson"],
      ["Gray", "Hemphill", "Roberts"],
      ["Collingsworth", "Wheeler"],
      ["Armstrong", "Donley"],
      ["Childress", "Cottle", "Hall"],
      ["Castro", "Deaf Smith", "Parmer"],
      ["Hale", "Swisher"],
      ["Briscoe", "Floyd", "Motley"],
      ["Bailey", "Lamb"],
      ["Cochran", "Hockley"],
      ["Terry", "Yoakum"],
      ["Crosby", "Dickens"],
      ["Borden", "Dawson", "Lynn"],
      ["Garza", "Kent", "Scurry"],
      ["Foard", "Hardeman", "Wilbarger"],
      ["Baylor", "King", "Knox"],
      ["Haskell", "Jones", "Stonewall"],
      ["Shackelford", "Stephens", "Throckmorton"],
      ["Callahan", "Eastland"],
      ["Archer", "Young"],
      ["Jack", "Palo Pinto"],
      ["Clay", "Montague"],
      ["Erath", "Somervell"],
      ["Bosque", "Hill"],
      ["Comanche", "Hamilton"],
      ["Brown", "Coleman"],
      ["Lampasas", "Mills", "San Saba"],
      ["Caldwell", "Gonzales"],
      ["Austin", "Colorado"],
      ["Fayette", "Lee"],
      ["Grimes", "Washington"],
      ["Burleson", "Milam"],
      ["Falls", "Robertson"],
      ["Leon", "Madison"],
      ["Freestone", "Limestone"],
      ["Concho", "Mason", "McCulloch"],
      ["Burnet", "Llano"],
      ["Blanco", "Gillespie"],
      ["Bandera", "Kendall"],
      ["Kimble", "Menard"],
      ["Edwards", "Real", "Uvalde"],
      ["Andrews", "Gaines"],
      ["Glasscock", "Howard", "Martin"],
      ["Fisher", "Mitchell", "Nolan"],
      ["Coke", "Runnels", "Sterling"],
      ["Crockett", "Schleicher", "Sutton"],
      ["Irion", "Reagan"],
      ["Crane", "Upton"],
      ["Ward", "Winkler"],
      ["Loving", "Reeves"],
      ["Pecos", "Terrell"],
      ["Brewster", "Jeff Davis", "Presidio"],
      ["Culberson", "Hudspeth"],
      ["Kinney", "Val Verde"],
      ["Dimmit", "Zavala"],
      ["Frio", "La Salle"],
      ["Atascosa", "Live Oak", "McMullen"],
      ["Bee", "Karnes"],
      ["Brooks", "Duval", "Jim Wells"],
      ["Kenedy", "Kleberg", "Willacy"],
      ["Jim Hogg", "Zapata"],
      ["Aransas", "Refugio"],
      ["Calhoun", "Jackson"],
      ["DeWitt", "Goliad", "Lavaca"],
      ["Matagorda", "Wharton"],
      ["Houston", "Trinity"],
      ["Jasper", "Newton", "Tyler"],
      ["Sabine", "San Augustine"],
      ["Panola", "Shelby"],
      ["Cass", "Marion", "Morris"],
      ["Camp", "Upshur"],
      ["Franklin", "Red River", "Titus"],
      ["Delta", "Hopkins"],
      ["Rains", "Wood"],
    ],
    names: { "Austin-Colorado": "Colorado-Austin County", "Crockett-Schleicher-Sutton": "Sutton-Crockett-Schleicher County", "Houston-Trinity": "Trinity-Houston County", "Pecos-Terrell": "Terrell-Pecos County" },
  },
  // Reviewed by the Minnesota pack agent (packs/MN/NOTES.md): 87 counties to 51 regions, along I-90
  // (Albert Lea, Fairmont, Worthington), the Minnesota River (New Ulm, the lower valley,
  // Montevideo), US-14 (Owatonna), I-94 and US-10 (Alexandria, Little Falls), the Red River valley
  // (Breckenridge, Thief River Falls, Roseau), US-2 (Bemidji, Grand Rapids), I-35 (Cloquet), the
  // North Shore (Two Harbors) and the Rainy River (International Falls). The Twin Cities' counties
  // and the others of 50k or more stay alone, and Mower (Austin, 40k), whose small neighbours have
  // better partners.
  MN: {
    fips: "27",
    name: "Minnesota",
    pop: "census",
    merge: [
      ["Goodhue", "Wabasha"],
      ["Fillmore", "Houston"],
      ["Dodge", "Steele", "Waseca"],
      ["Faribault", "Freeborn"],
      ["Jackson", "Martin"],
      ["Nobles", "Rock"],
      ["Murray", "Pipestone"],
      ["Lincoln", "Lyon"],
      ["Cottonwood", "Watonwan"],
      ["Brown", "Redwood"],
      ["Le Sueur", "Nicollet", "Sibley"],
      ["McLeod", "Meeker"],
      ["Kandiyohi", "Renville"],
      ["Chippewa", "Lac qui Parle", "Yellow Medicine"],
      ["Big Stone", "Swift"],
      ["Grant", "Stevens"],
      ["Traverse", "Wilkin"],
      ["Douglas", "Pope"],
      ["Morrison", "Todd", "Wadena"],
      ["Benton", "Mille Lacs"],
      ["Isanti", "Kanabec"],
      ["Carlton", "Pine"],
      ["Aitkin", "Itasca"],
      ["Cass", "Hubbard"],
      ["Beltrami", "Clearwater"],
      ["Becker", "Mahnomen"],
      ["Norman", "Polk"],
      ["Marshall", "Pennington", "Red Lake"],
      ["Kittson", "Roseau"],
      ["Koochiching", "Lake of the Woods"],
      ["Cook", "Lake"],
    ],
    names: { "Faribault-Freeborn": "Freeborn-Faribault County", "Lincoln-Lyon": "Lyon-Lincoln County", "Marshall-Pennington-Red Lake": "Pennington-Marshall-Red Lake County", "Norman-Polk": "Polk-Norman County", "Jackson-Martin": "Martin-Jackson County" },
  },
  // Reviewed by the Iowa pack agent (packs/IA/NOTES.md): 99 counties to 53 regions, keeping I-80,
  // I-35, I-29, US-20, US-30 and the Union Pacific, the BNSF and the California Zephyr, and the
  // Mississippi as clean chains of regions: the northwest around Sioux Center, Spencer and Fort
  // Dodge, the Loess Hills (Onawa, Glenwood), the Zephyr towns (Creston, Osceola, Ottumwa,
  // Burlington, Fort Madison), the middle (Newton, Marshalltown, Oskaloosa), the north (Mason City,
  // Charles City, Waverly) and the Mississippi towns (Decorah, Clinton, Muscatine). The eleven
  // counties of 50k or more stay alone.
  IA: {
    fips: "19",
    name: "Iowa",
    pop: "census",
    merge: [
      ["Lyon", "Sioux"],
      ["O'Brien", "Osceola"],
      ["Cherokee", "Plymouth"],
      ["Clay", "Dickinson"],
      ["Emmet", "Palo Alto"],
      ["Humboldt", "Kossuth"],
      ["Buena Vista", "Pocahontas"],
      ["Calhoun", "Webster"],
      ["Harrison", "Monona"],
      ["Crawford", "Ida"],
      ["Carroll", "Sac"],
      ["Audubon", "Shelby"],
      ["Boone", "Greene"],
      ["Adair", "Guthrie", "Madison"],
      ["Cass", "Montgomery"],
      ["Fremont", "Mills"],
      ["Page", "Taylor"],
      ["Adams", "Ringgold", "Union"],
      ["Clarke", "Decatur", "Lucas"],
      ["Appanoose", "Monroe", "Wayne"],
      ["Davis", "Wapello"],
      ["Lee", "Van Buren"],
      ["Des Moines", "Henry"],
      ["Jefferson", "Washington"],
      ["Iowa", "Keokuk"],
      ["Mahaska", "Marion"],
      ["Jasper", "Poweshiek"],
      ["Grundy", "Marshall"],
      ["Benton", "Tama"],
      ["Cerro Gordo", "Worth"],
      ["Hancock", "Winnebago"],
      ["Franklin", "Hardin"],
      ["Hamilton", "Wright"],
      ["Floyd", "Mitchell"],
      ["Chickasaw", "Howard"],
      ["Bremer", "Butler"],
      ["Allamakee", "Winneshiek"],
      ["Clayton", "Fayette"],
      ["Buchanan", "Delaware"],
      ["Cedar", "Jones"],
      ["Clinton", "Jackson"],
      ["Louisa", "Muscatine"],
    ],
    names: { "Des Moines-Henry": "Henry-Des Moines County", "Fremont-Mills": "Mills-Fremont County" },
  },
  // Reviewed by the Missouri pack agent (packs/MO/NOTES.md): 115 counties and St. Louis city to 60
  // regions, along US-36 (Maryville, Cameron, Chillicothe, Hannibal), US-63 (Kirksville), I-70
  // (Marshall), the Lake of the Ozarks (Osage Beach), I-44 (Rolla, Lebanon), the Ozarks (West
  // Plains, Poplar Bluff) and the Bootheel (Sikeston). The counties of 50k or more stay alone, and
  // St. Louis city; also Callaway (the Missouri cuts it off from Jefferson City's side) and Pettis
  // (Sedalia, a rail hub whose small neighbours have better partners).
  MO: {
    fips: "29",
    name: "Missouri",
    pop: "census",
    merge: [
      ["Andrew", "Atchison", "Holt"],
      ["Gentry", "Nodaway", "Worth"],
      ["Clinton", "DeKalb"],
      ["Caldwell", "Daviess", "Livingston"],
      ["Grundy", "Harrison", "Mercer"],
      ["Linn", "Putnam", "Sullivan"],
      ["Adair", "Schuyler", "Scotland"],
      ["Clark", "Knox", "Lewis"],
      ["Chariton", "Macon", "Shelby"],
      ["Howard", "Randolph"],
      ["Marion", "Monroe", "Ralls"],
      ["Audrain", "Pike"],
      ["Montgomery", "Warren"],
      ["Carroll", "Ray"],
      ["Lafayette", "Saline"],
      ["Cooper", "Moniteau", "Morgan"],
      ["Camden", "Miller"],
      ["Gasconade", "Maries", "Osage"],
      ["Benton", "Hickory", "St. Clair"],
      ["Bates", "Henry"],
      ["Barton", "Cedar", "Vernon"],
      ["Dade", "Polk"],
      ["Dallas", "Laclede"],
      ["Douglas", "Webster", "Wright"],
      ["Lawrence", "Stone"],
      ["Barry", "McDonald"],
      ["Howell", "Oregon", "Ozark"],
      ["Butler", "Carter", "Ripley"],
      ["Dent", "Reynolds", "Shannon"],
      ["Phelps", "Texas"],
      ["Crawford", "Iron", "Washington"],
      ["Bollinger", "Madison", "Wayne"],
      ["Perry", "Ste. Genevieve"],
      ["Dunklin", "Stoddard"],
      ["New Madrid", "Pemiscot"],
      ["Mississippi", "Scott"],
    ],
  },
  // Reviewed by the Arkansas pack agent (packs/AR/NOTES.md): 75 counties to 39 regions, along the
  // Ozarks (Harrison, Mountain Home, Berryville), the Arkansas River valley (Clarksville,
  // Dardanelle, Morrilton), the Ouachitas (Mena, Malvern), the Delta (Blytheville, Forrest City,
  // Helena-West Helena, Stuttgart, Monticello), the timber south (El Dorado, Camden, Warren) and the
  // southwest (Texarkana, Hope, De Queen). The thirteen counties of 50k or more stay alone, and
  // Crittenden (West Memphis, 48k, the Memphis edge).
  AR: {
    fips: "05",
    name: "Arkansas",
    pop: "census",
    merge: [
      ["Clay", "Greene"],
      ["Lafayette", "Miller"],
      ["Baxter", "Marion"],
      ["Mississippi", "Poinsett"],
      ["Columbia", "Union"],
      ["Independence", "Jackson"],
      ["Boone", "Newton", "Searcy"],
      ["Clark", "Hot Spring"],
      ["Carroll", "Madison"],
      ["Franklin", "Johnson"],
      ["Cleburne", "Van Buren"],
      ["Fulton", "Izard", "Stone"],
      ["Logan", "Yell"],
      ["Conway", "Perry"],
      ["Dallas", "Ouachita"],
      ["Ashley", "Bradley", "Calhoun"],
      ["Chicot", "Desha", "Drew"],
      ["Cleveland", "Grant", "Lincoln"],
      ["Cross", "St. Francis"],
      ["Lee", "Monroe", "Phillips"],
      ["Arkansas", "Prairie", "Woodruff"],
      ["Lawrence", "Randolph", "Sharp"],
      ["Hempstead", "Nevada", "Pike"],
      ["Howard", "Little River", "Sevier"],
      ["Montgomery", "Polk", "Scott"],
    ],
  },
  // Reviewed by the Louisiana pack agent (packs/LA/NOTES.md): 64 parishes to 41 regions, along I-20
  // (Minden, Ruston), the northeast Delta (Bastrop, Winnsboro, Tallulah, Vidalia), the piney woods
  // (Jena, DeRidder), Cajun prairie (Ville Platte, Jennings), the Felicianas, the River Parishes and
  // St. Bernard-Plaquemines. The parishes of 50k or more stay alone, and Natchitoches, Vernon, St.
  // Mary and Washington, whose small neighbours are all in other groups.
  LA: {
    fips: "22",
    name: "Louisiana",
    pop: "census",
    merge: [
      ["Bienville", "Claiborne", "Webster"],
      ["De Soto", "Red River", "Sabine"],
      ["Jackson", "Lincoln"],
      ["Morehouse", "Union"],
      ["Caldwell", "Franklin", "Richland"],
      ["East Carroll", "Madison", "West Carroll"],
      ["Catahoula", "Concordia", "Tensas"],
      ["Grant", "LaSalle", "Winn"],
      ["Allen", "Beauregard"],
      ["Cameron", "Jefferson Davis"],
      ["Avoyelles", "Evangeline"],
      ["East Feliciana", "St. Helena", "West Feliciana"],
      ["Pointe Coupee", "West Baton Rouge"],
      ["Assumption", "Iberville"],
      ["St. James", "St. John the Baptist"],
      ["Plaquemines", "St. Bernard"],
    ],
  },
  // Reviewed by the Wisconsin pack agent (packs/WI/NOTES.md): 72 counties to 49 regions, along the
  // north woods (Rhinelander, Merrill, Ashland, Ladysmith, Medford), the Bay of Green Bay shore
  // (Marinette, Shawano, Door-Kewaunee), the Lake Superior and St. Croix side (Superior, Amery,
  // River Falls), the Mississippi (Prairie du Chien, Arcadia), I-90/94 (Sparta, Mauston) and the
  // southwest (Monroe, Richland Center). The counties of 50k or more stay alone, and Barron (Rice
  // Lake) and Dunn (Menomonie), whose neighbours are big or already grouped.
  WI: {
    fips: "55",
    name: "Wisconsin",
    pop: "census",
    merge: [
      ["Florence", "Forest", "Marinette"],
      ["Menominee", "Oconto", "Shawano"],
      ["Langlade", "Lincoln"],
      ["Oneida", "Vilas"],
      ["Door", "Kewaunee"],
      ["Ashland", "Bayfield", "Iron"],
      ["Douglas", "Washburn"],
      ["Burnett", "Polk"],
      ["Price", "Rusk", "Sawyer"],
      ["Clark", "Taylor"],
      ["Jackson", "Monroe"],
      ["Adams", "Juneau"],
      ["Green Lake", "Marquette", "Waushara"],
      ["Crawford", "Vernon"],
      ["Green", "Lafayette"],
      ["Iowa", "Richland"],
      ["Buffalo", "Trempealeau"],
      ["Pepin", "Pierce"],
    ],
  },
  // Reviewed by the Illinois pack agent (packs/IL/NOTES.md), with two changes by the main agent
  // (Stephenson with Carroll and Jo Daviess around Freeport; Livingston with Ford and Iroquois
  // around Pontiac): 102 counties to 61 regions, along the Mississippi (Galena, Monmouth, Macomb),
  // the Illinois River (Princeton, Canton, Beardstown), I-55 (Lincoln, Taylorville), I-57 and I-70
  // (Effingham, Vandalia, Mount Vernon), the Wabash side (Paris, Robinson, Olney, Mount Carmel) and
  // Little Egypt (West Frankfort, Harrisburg, Metropolis, Anna). Chicagoland's counties and the
  // others of 50k or more stay alone, and Henry, Coles, Macoupin and Lee, whose small neighbours are
  // taken.
  IL: {
    fips: "17",
    name: "Illinois",
    pop: "census",
    merge: [
      ["Carroll", "Jo Daviess", "Stephenson"],
      ["Bureau", "Putnam", "Stark"],
      ["Marshall", "Woodford"],
      ["Henderson", "Mercer", "Warren"],
      ["Hancock", "McDonough"],
      ["Brown", "Cass", "Schuyler"],
      ["Fulton", "Mason"],
      ["Logan", "Menard"],
      ["Morgan", "Pike", "Scott"],
      ["Calhoun", "Greene", "Jersey"],
      ["Bond", "Fayette", "Montgomery"],
      ["Christian", "Shelby"],
      ["De Witt", "Piatt"],
      ["Douglas", "Moultrie"],
      ["Clark", "Edgar"],
      ["Cumberland", "Effingham"],
      ["Clay", "Jasper", "Richland"],
      ["Crawford", "Lawrence"],
      ["Edwards", "Wabash", "White"],
      ["Marion", "Wayne"],
      ["Hamilton", "Jefferson"],
      ["Clinton", "Washington"],
      ["Monroe", "Randolph"],
      ["Franklin", "Perry"],
      ["Gallatin", "Hardin", "Saline"],
      ["Johnson", "Massac", "Pope"],
      ["Alexander", "Pulaski", "Union"],
      ["Ford", "Iroquois", "Livingston"],
    ],
  },
  // Reviewed by the Michigan pack agent (packs/MI/NOTES.md): 83 counties to 54 regions: the Thumb
  // (Bad Axe), the southern tier (Coldwater), the northwest (Cadillac, Ludington, Frankfort,
  // Petoskey), the northeast (Cheboygan, Alpena, East Tawas), the middle (Big Rapids, Clare,
  // Gaylord) and the Upper Peninsula (Sault Ste. Marie, Escanaba, Menominee, Ironwood, Houghton).
  // The counties of 50k or more stay alone, and Gratiot, whose neighbours are all 50k or more. The
  // Mackinac Bridge joins the two peninsulas (Mackinaw City to St. Ignace).
  MI: {
    fips: "26",
    name: "Michigan",
    pop: "census",
    merge: [
      ["Branch", "Hillsdale"],
      ["Huron", "Sanilac"],
      ["Mecosta", "Osceola"],
      ["Lake", "Missaukee", "Wexford"],
      ["Manistee", "Mason", "Oceana"],
      ["Benzie", "Leelanau"],
      ["Antrim", "Charlevoix", "Emmet"],
      ["Cheboygan", "Montmorency", "Presque Isle"],
      ["Alcona", "Alpena", "Oscoda"],
      ["Arenac", "Iosco", "Ogemaw"],
      ["Clare", "Gladwin", "Roscommon"],
      ["Crawford", "Kalkaska", "Otsego"],
      ["Chippewa", "Luce", "Mackinac"],
      ["Alger", "Delta", "Schoolcraft"],
      ["Dickinson", "Iron", "Menominee"],
      ["Gogebic", "Ontonagon"],
      ["Baraga", "Houghton", "Keweenaw"],
    ],
    bridges: [
      ["Emmet", "Mackinac"],
      ["Cheboygan", "Mackinac"],
    ],
  },
  // Reviewed by the Indiana pack agent (packs/IN/NOTES.md), with Shelby joined to Decatur and Rush
  // along I-74 by the main agent: 92 counties to 56 regions, along I-69 and the northeast (Bluffton,
  // Auburn, Angola), US-24 and the Wabash (Logansport, Peru), the northwest (Rensselaer), I-74 and
  // the west (Crawfordsville, Brazil), the Ohio River (Madison, Corydon, Tell City) and the
  // southwest (Vincennes, Washington, Jasper). The counties of 50k or more stay alone, and Henry
  // (New Castle, 49k).
  IN: {
    fips: "18",
    name: "Indiana",
    pop: "census",
    merge: [
      ["Adams", "Wells"],
      ["Blackford", "Jay", "Randolph"],
      ["Huntington", "Whitley"],
      ["Miami", "Wabash"],
      ["DeKalb", "Noble"],
      ["LaGrange", "Steuben"],
      ["Marshall", "Starke"],
      ["Fulton", "Pulaski", "White"],
      ["Carroll", "Cass"],
      ["Benton", "Jasper", "Newton"],
      ["Fountain", "Montgomery", "Warren"],
      ["Clay", "Parke", "Vermillion"],
      ["Owen", "Putnam"],
      ["Clinton", "Tipton"],
      ["Brown", "Jackson"],
      ["Jennings", "Ripley"],
      ["Jefferson", "Ohio", "Switzerland"],
      ["Scott", "Washington"],
      ["Crawford", "Harrison"],
      ["Perry", "Spencer"],
      ["Lawrence", "Martin", "Orange"],
      ["Daviess", "Greene"],
      ["Dubois", "Pike"],
      ["Gibson", "Posey"],
      ["Knox", "Sullivan"],
      ["Decatur", "Rush", "Shelby"],
      ["Fayette", "Franklin", "Union"],
    ],
  },
  // Reviewed by the Ohio pack agent (packs/OH/NOTES.md): 88 counties to 69 regions. Forty-nine
  // counties have 50k or more and stay alone; the rest merge in the northwest (Defiance, Van Wert,
  // Bryan, Celina), the middle (Bellefontaine, Kenton, Bucyrus, Washington Court House, Wilmington),
  // the Ohio River and Appalachian southeast (Georgetown, Jackson, Gallipolis, Logan, New Lexington,
  // Cambridge) and the east (Carrollton, Coshocton). Shelby (Sidney), Ottawa (the Lake Erie
  // peninsula and islands) and Preble also stay alone: their neighbours are big or taken.
  OH: {
    fips: "39",
    name: "Ohio",
    pop: "census",
    merge: [
      ["Defiance", "Henry"],
      ["Paulding", "Putnam", "Van Wert"],
      ["Fulton", "Williams"],
      ["Auglaize", "Mercer"],
      ["Champaign", "Logan"],
      ["Hardin", "Wyandot"],
      ["Crawford", "Morrow"],
      ["Fayette", "Madison"],
      ["Clinton", "Highland"],
      ["Adams", "Brown"],
      ["Jackson", "Pike"],
      ["Gallia", "Meigs"],
      ["Hocking", "Vinton"],
      ["Morgan", "Perry"],
      ["Guernsey", "Monroe", "Noble"],
      ["Carroll", "Harrison"],
      ["Coshocton", "Holmes"],
    ],
  },
  // Reviewed by the Kentucky pack agent (packs/KY/NOTES.md): 120 counties to 60 regions, along the
  // Purchase and the lakes (Mayfield, Murray, Princeton), the Western Kentucky Parkway
  // (Madisonville, Central City), I-65 and the Green River (Glasgow, Leitchfield), Lake Cumberland
  // (Somerset's neighbours, Albany), I-75 (Corbin, London), I-64 (Shelbyville, Winchester,
  // Morehead), the Mountain Parkway and US-23 (Paintsville, Prestonsburg) and the coalfields
  // (Hazard, Harlan). The counties of 50k or more stay alone, and Boyd (Ashland, 48k).
  KY: {
    fips: "21",
    name: "Kentucky",
    pop: "census",
    merge: [
      ["Ballard", "Carlisle"],
      ["Fulton", "Graves", "Hickman"],
      ["Calloway", "Marshall"],
      ["Crittenden", "Livingston", "Lyon"],
      ["Caldwell", "Trigg"],
      ["Henderson", "Union"],
      ["Hopkins", "McLean", "Webster"],
      ["Logan", "Todd"],
      ["Allen", "Simpson"],
      ["Butler", "Edmonson", "Grayson"],
      ["Muhlenberg", "Ohio"],
      ["Breckinridge", "Hancock", "Meade"],
      ["Barren", "Metcalfe"],
      ["Green", "Hart", "Larue"],
      ["Clinton", "Cumberland", "Monroe"],
      ["Adair", "Casey"],
      ["Russell", "Wayne"],
      ["McCreary", "Whitley"],
      ["Clay", "Knox"],
      ["Marion", "Taylor"],
      ["Nelson", "Spencer", "Washington"],
      ["Anderson", "Mercer", "Woodford"],
      ["Boyle", "Garrard", "Lincoln"],
      ["Jackson", "Rockcastle"],
      ["Henry", "Shelby"],
      ["Carroll", "Gallatin", "Trimble"],
      ["Grant", "Owen"],
      ["Bracken", "Pendleton"],
      ["Fleming", "Mason", "Robertson"],
      ["Bourbon", "Harrison", "Nicholas"],
      ["Greenup", "Lewis"],
      ["Carter", "Elliott", "Rowan"],
      ["Bath", "Menifee", "Montgomery"],
      ["Clark", "Estill", "Powell"],
      ["Magoffin", "Morgan", "Wolfe"],
      ["Johnson", "Lawrence", "Martin"],
      ["Floyd", "Knott"],
      ["Leslie", "Letcher", "Perry"],
      ["Bell", "Harlan"],
      ["Breathitt", "Lee", "Owsley"],
    ],
  },
  // Reviewed by the Tennessee pack agent (packs/TN/NOTES.md): 95 counties to 60 regions, across west
  // Tennessee (Dyersburg, Union City, Brownsville, Savannah, Paris), the Tennessee valley and the
  // Highland Rim (Waverly, Lawrenceburg, Lewisburg, Fayetteville, Winchester), the Cumberland
  // Plateau (Dunlap, McMinnville, Smithville, Livingston, Oneida) and east Tennessee (La Follette,
  // Harrogate, Sweetwater, Dayton). The counties of 50k or more stay alone, and Cheatham, Cocke,
  // Johnson and Unicoi, whose neighbours are all 50k or more.
  TN: {
    fips: "47",
    name: "Tennessee",
    pop: "census",
    merge: [
      ["Dyer", "Lake"],
      ["Obion", "Weakley"],
      ["Crockett", "Haywood", "Lauderdale"],
      ["Fayette", "Hardeman"],
      ["Carroll", "Henderson"],
      ["Chester", "Hardin", "McNairy"],
      ["Benton", "Henry", "Stewart"],
      ["Hickman", "Houston", "Humphreys"],
      ["Decatur", "Perry", "Wayne"],
      ["Lawrence", "Lewis"],
      ["Giles", "Marshall"],
      ["Lincoln", "Moore"],
      ["Franklin", "Grundy"],
      ["Bledsoe", "Marion", "Sequatchie"],
      ["Van Buren", "Warren", "White"],
      ["Cannon", "DeKalb", "Smith"],
      ["Clay", "Overton", "Pickett"],
      ["Jackson", "Macon", "Trousdale"],
      ["Fentress", "Morgan", "Scott"],
      ["Campbell", "Union"],
      ["Claiborne", "Grainger", "Hancock"],
      ["Monroe", "Polk"],
      ["Meigs", "Rhea"],
    ],
  },
  // Reviewed by the Mississippi pack agent (packs/MS/NOTES.md): 82 counties to 43 regions, across
  // the northeast hills (Corinth, Booneville, Ripley, New Albany, Houston), the middle (Kosciusko,
  // Philadelphia, Louisville, Grenada, Forest), the Delta along US-61 and US-49 (Clarksdale,
  // Cleveland, Greenwood, Yazoo City, Vicksburg, Batesville), the southwest (Natchez, Brookhaven,
  // McComb, Columbia) and the Piney Woods and coast (Waynesboro, Lucedale). The counties of 50k or
  // more stay alone, and Hancock (Bay St. Louis) and Washington (Greenville, the Delta's river
  // city).
  MS: {
    fips: "28",
    name: "Mississippi",
    pop: "census",
    merge: [
      ["Alcorn", "Tishomingo"],
      ["Itawamba", "Prentiss"],
      ["Benton", "Marshall", "Tippah"],
      ["Pontotoc", "Union"],
      ["Calhoun", "Chickasaw", "Webster"],
      ["Clay", "Monroe"],
      ["Attala", "Choctaw", "Montgomery"],
      ["Leake", "Neshoba"],
      ["Kemper", "Noxubee", "Winston"],
      ["Grenada", "Yalobusha"],
      ["Clarke", "Jasper"],
      ["Newton", "Scott"],
      ["Greene", "Perry", "Wayne"],
      ["George", "Stone"],
      ["Covington", "Simpson", "Smith"],
      ["Pike", "Walthall"],
      ["Jefferson Davis", "Lawrence", "Marion"],
      ["Copiah", "Lincoln"],
      ["Amite", "Franklin", "Wilkinson"],
      ["Adams", "Claiborne", "Jefferson"],
      ["Holmes", "Humphreys", "Yazoo"],
      ["Issaquena", "Sharkey", "Warren"],
      ["Bolivar", "Sunflower"],
      ["Coahoma", "Quitman", "Tunica"],
      ["Carroll", "Leflore", "Tallahatchie"],
      ["Panola", "Tate"],
    ],
  },
  // Reviewed by the Alabama pack agent (packs/AL/NOTES.md): 67 counties to 43 regions: the northwest
  // hills (Russellville, Hamilton, Fayette), the east (Centre, Alexander City, Valley), the Black
  // Belt (Marion, Demopolis, Selma, Eufaula), the southwest (Jackson, Atmore) and the Wiregrass
  // (Troy, Andalusia, Ozark). The counties of 50k or more stay alone, and Chilton (Clanton, on
  // I-65), whose neighbours are big or taken.
  AL: {
    fips: "01",
    name: "Alabama",
    pop: "census",
    merge: [
      ["Franklin", "Lawrence"],
      ["Marion", "Winston"],
      ["Fayette", "Lamar", "Pickens"],
      ["Cherokee", "Cleburne", "Clay"],
      ["Coosa", "Tallapoosa"],
      ["Chambers", "Randolph"],
      ["Bibb", "Hale", "Perry"],
      ["Greene", "Marengo", "Sumter"],
      ["Dallas", "Lowndes", "Wilcox"],
      ["Choctaw", "Clarke", "Washington"],
      ["Conecuh", "Escambia", "Monroe"],
      ["Butler", "Crenshaw", "Pike"],
      ["Covington", "Geneva"],
      ["Dale", "Henry"],
      ["Barbour", "Bullock", "Macon"],
    ],
  },
  // Reviewed by the Georgia pack agent (packs/GA/NOTES.md): 159 counties to 93 regions. Metro
  // Atlanta's counties and the others of 50k or more stay alone; the small counties merge in groups
  // of two or three around their market towns: the southwest (Cuthbert, Richland, Americus,
  // Bainbridge, Moultrie), the Fall Line (Thomaston, Forsyth, Milledgeville's neighbours), the
  // northeast (Toccoa, Hartwell, Washington), the I-16 and US-1 belt (Swainsboro, Vidalia, Metter,
  // Baxley), the southeast (Waycross, Douglas, Folkston) and the mountains (Clayton, Blue Ridge,
  // Ellijay, Dahlonega). Baldwin, Thomas, Tift, Bryan, Oconee, Murray, Laurens, Dade, Chattooga and
  // Heard also stay alone: their neighbours are big or taken.
  GA: {
    fips: "13",
    name: "Georgia",
    pop: "census",
    merge: [
      ["Clay", "Quitman", "Randolph"],
      ["Chattahoochee", "Stewart", "Webster"],
      ["Marion", "Schley", "Taylor"],
      ["Crawford", "Macon", "Peach"],
      ["Harris", "Meriwether", "Talbot"],
      ["Pike", "Upson"],
      ["Butts", "Lamar"],
      ["Jones", "Monroe"],
      ["Jasper", "Morgan", "Putnam"],
      ["Madison", "Oglethorpe"],
      ["Franklin", "Hart"],
      ["Banks", "Stephens"],
      ["Elbert", "Lincoln", "Wilkes"],
      ["Glascock", "McDuffie", "Warren"],
      ["Greene", "Hancock", "Taliaferro"],
      ["Jefferson", "Washington"],
      ["Burke", "Jenkins", "Screven"],
      ["Emanuel", "Johnson", "Treutlen"],
      ["Montgomery", "Toombs", "Wheeler"],
      ["Bleckley", "Twiggs", "Wilkinson"],
      ["Dodge", "Pulaski", "Telfair"],
      ["Crisp", "Dooly", "Wilcox"],
      ["Ben Hill", "Irwin", "Turner"],
      ["Lee", "Worth"],
      ["Sumter", "Terrell"],
      ["Baker", "Calhoun", "Early"],
      ["Decatur", "Miller", "Seminole"],
      ["Grady", "Mitchell"],
      ["Brooks", "Colquitt"],
      ["Atkinson", "Coffee"],
      ["Berrien", "Cook", "Lanier"],
      ["Clinch", "Echols", "Ware"],
      ["Appling", "Bacon", "Jeff Davis"],
      ["Brantley", "Charlton", "Pierce"],
      ["Long", "McIntosh", "Wayne"],
      ["Candler", "Evans", "Tattnall"],
      ["Habersham", "Rabun"],
      ["Towns", "White"],
      ["Fannin", "Union"],
      ["Gilmer", "Pickens"],
      ["Dawson", "Lumpkin"],
      ["Haralson", "Polk"],
    ],
  },
  // Reviewed by the Florida pack agent (packs/FL/NOTES.md): 67 counties to 52 regions. Most of the
  // peninsula's counties are 50k or more and stay alone; the small ones merge in the Panhandle
  // (Marianna, Port St. Joe, the Franklin-Wakulla coast), the Big Bend (Madison, Perry, Williston),
  // the northeast (Macclenny), the heartland (Arcadia) and around Lake Okeechobee (Clewiston).
  // Gadsden (on I-10, between Tallahassee and the Apalachicola) and Suwannee (Live Oak, the
  // I-10/US-90 hub) also stay alone.
  FL: {
    fips: "12",
    name: "Florida",
    pop: "census",
    merge: [
      ["Holmes", "Jackson", "Washington"],
      ["Calhoun", "Gulf", "Liberty"],
      ["Franklin", "Wakulla"],
      ["Hamilton", "Jefferson", "Madison"],
      ["Dixie", "Lafayette", "Taylor"],
      ["Gilchrist", "Levy"],
      ["Baker", "Bradford", "Union"],
      ["DeSoto", "Hardee"],
      ["Glades", "Hendry", "Okeechobee"],
    ],
    // The Sunshine Skyway (I-275) across Tampa Bay
    bridges: [["Manatee", "Pinellas"]],
  },
  // Reviewed by the South Carolina pack agent (packs/SC/NOTES.md): 46 counties to 32 regions: the
  // Savannah valley (Abbeville), the Midlands (Newberry, Union, Camden, Orangeburg), the Pee Dee
  // (Bennettsville, Dillon, Manning) and the Lowcountry (Barnwell, the Colleton-Hampton-Jasper
  // group). The counties of 50k or more stay alone, except Kershaw, which takes Lee (all of Lee's
  // other neighbours are big), and Orangeburg, which takes Calhoun along I-26 (Clarendon is across
  // Lake Marion).
  SC: {
    fips: "45",
    name: "South Carolina",
    pop: "census",
    merge: [
      ["Abbeville", "Edgefield", "McCormick"],
      ["Newberry", "Saluda"],
      ["Chester", "Fairfield", "Union"],
      ["Chesterfield", "Marlboro"],
      ["Dillon", "Marion"],
      ["Clarendon", "Williamsburg"],
      ["Calhoun", "Orangeburg"],
      ["Kershaw", "Lee"],
      ["Allendale", "Bamberg", "Barnwell"],
      ["Colleton", "Hampton", "Jasper"],
    ],
  },
  // Reviewed by the North Carolina pack agent (packs/NC/NOTES.md): 100 counties to 73 regions: the
  // mountains (Franklin, Sylva, Sparta, Marion, Mars Hill, Forest City), the Piedmont edges
  // (Mocksville, Roxboro, Henderson), the Sandhills (Laurinburg), the northeast and the sounds
  // (Elizabeth City, Edenton, Ahoskie, Williamston, Kill Devil Hills, Washington) and the coastal
  // plain (Kinston, Whiteville). The counties of 50k or more stay alone; Lenoir, Columbus and
  // Rutherford take small neighbours that have no other partner; Alexander, Stokes, Transylvania,
  // Montgomery, Duplin, Edgecombe and Halifax stay alone (big neighbours, or just under 50k).
  NC: {
    fips: "37",
    name: "North Carolina",
    pop: "census",
    merge: [
      ["Cherokee", "Clay", "Macon"],
      ["Graham", "Jackson", "Swain"],
      ["Alleghany", "Ashe"],
      ["Avery", "McDowell", "Mitchell"],
      ["Madison", "Yancey"],
      ["Davie", "Yadkin"],
      ["Caswell", "Person"],
      ["Anson", "Richmond", "Scotland"],
      ["Camden", "Currituck", "Pasquotank"],
      ["Chowan", "Gates", "Perquimans"],
      ["Bertie", "Hertford", "Northampton"],
      ["Martin", "Tyrrell", "Washington"],
      ["Dare", "Hyde"],
      ["Beaufort", "Pamlico"],
      ["Greene", "Jones", "Lenoir"],
      ["Bladen", "Columbus"],
      ["Polk", "Rutherford"],
      ["Vance", "Warren"],
    ],
  },
  // Virginia: 95 counties and 38 independent cities on the map, 8.63 million people (Census 2020);
  // reviewed by the Virginia pack agent (packs/VA/NOTES.md), 69 regions. Small independent cities
  // join the county around them (even where that county is over 50,000), and rural counties under
  // 50,000 join small neighbours in one valley, plain or neck (the Alleghany Highlands group has
  // four: Covington is an enclave and Bath and Highland have no other partner). Twin names use the
  // Census names (Fairfax County and Fairfax city). Water links: the Chesapeake Bay Bridge-Tunnel
  // (the Eastern Shore to Virginia Beach), the Hampton Roads Bridge-Tunnel (Hampton to Norfolk), the
  // Monitor-Merrimac Memorial Bridge-Tunnel (Newport News to Suffolk) and the James River Bridge
  // (Newport News to Isle of Wight).
  VA: {
    fips: "51",
    name: "Virginia",
    pop: "census",
    merge: [
      ["Fairfax County", "Fairfax city"],
      ["Arlington", "Falls Church"],
      ["Manassas", "Manassas Park"],
      ["Fredericksburg", "Spotsylvania"],
      ["King George", "Westmoreland"],
      ["Lancaster", "Northumberland", "Richmond County"],
      ["Caroline", "Essex", "King and Queen"],
      ["King William", "New Kent", "Charles City"],
      ["Gloucester", "Mathews", "Middlesex"],
      ["Accomack", "Northampton"],
      ["Poquoson", "York"],
      ["James City", "Williamsburg"],
      ["Franklin city", "Southampton"],
      ["Isle of Wight", "Surry"],
      ["Emporia", "Greensville", "Sussex"],
      ["Colonial Heights", "Dinwiddie", "Petersburg"],
      ["Hopewell", "Prince George"],
      ["Brunswick", "Mecklenburg"],
      ["Amelia", "Lunenburg", "Nottoway"],
      ["Appomattox", "Buckingham", "Prince Edward"],
      ["Amherst", "Nelson"],
      ["Charlotte", "Halifax"],
      ["Cumberland", "Goochland", "Powhatan"],
      ["Fluvanna", "Louisa"],
      ["Greene", "Madison", "Orange"],
      ["Page", "Shenandoah"],
      ["Clarke", "Warren"],
      ["Culpeper", "Rappahannock"],
      ["Albemarle", "Charlottesville"],
      ["Augusta", "Staunton", "Waynesboro"],
      ["Frederick", "Winchester"],
      ["Rockbridge", "Buena Vista", "Lexington"],
      ["Alleghany", "Bath", "Covington", "Highland"],
      ["Botetourt", "Craig"],
      ["Roanoke County", "Salem"],
      ["Floyd", "Pulaski", "Radford"],
      ["Carroll", "Galax", "Grayson"],
      ["Henry", "Martinsville", "Patrick"],
      ["Danville", "Pittsylvania"],
      ["Bland", "Giles", "Tazewell"],
      ["Smyth", "Wythe"],
      ["Buchanan", "Dickenson", "Russell"],
      ["Norton", "Wise"],
      ["Lee", "Scott"],
      ["Bristol", "Washington"],
    ],
    names: {
      "Accomack-Northampton": "Eastern Shore",
      "Alleghany-Bath-Covington-Highland": "Alleghany Highlands",
      "Fairfax County-Fairfax city": "Fairfax",
      "Franklin city-Southampton": "Franklin-Southampton",
      "Lancaster-Northumberland-Richmond County": "Lancaster-Northumberland-Richmond",
      "Roanoke County-Salem": "Roanoke County-Salem",
    },
    bridges: [
      ["Northampton", "Virginia Beach"],
      ["Hampton", "Norfolk"],
      ["Newport News", "Suffolk"],
      ["Newport News", "Isle of Wight"],
    ],
  },
  // West Virginia: 55 counties, 1.79 million people (Census 2020); reviewed by the West Virginia
  // pack agent (packs/WV/NOTES.md), 32 regions. Small counties join neighbours along one valley or
  // corridor (the Ohio River, I-79, US-50, the coalfields, the Allegheny Highlands); Ohio
  // (Wheeling), Fayette (the New River Gorge), Wayne (by Huntington), Preston (the I-68 plateau) and
  // Mineral (across the Allegheny Front, Cumberland's side) stay alone under 50,000.
  WV: {
    fips: "54",
    name: "West Virginia",
    pop: "census",
    merge: [
      ["Brooke", "Hancock"],
      ["Marshall", "Wetzel"],
      ["Pleasants", "Ritchie", "Tyler"],
      ["Jackson", "Mason"],
      ["Calhoun", "Roane", "Wirt"],
      ["Braxton", "Doddridge", "Gilmer"],
      ["Lewis", "Upshur"],
      ["Barbour", "Taylor"],
      ["Clay", "Nicholas", "Webster"],
      ["Greenbrier", "Monroe", "Summers"],
      ["Pocahontas", "Randolph", "Tucker"],
      ["Grant", "Hardy", "Pendleton"],
      ["Hampshire", "Morgan"],
      ["Logan", "Mingo"],
      ["Boone", "Lincoln"],
      ["McDowell", "Wyoming"],
    ],
  },
  // Maryland and the District of Columbia: 24 counties and Baltimore city, plus the District, 6.87
  // million people (Census 2020); 20 regions. The small counties join the regions Maryland itself
  // uses: Western Maryland (Allegany and Garrett, Cumberland), the Upper Shore (Kent and Queen
  // Anne's), the Mid-Shore (Caroline, Dorchester and Talbot, Easton and Cambridge), and Somerset
  // with Salisbury's Wicomico on the Lower Shore. Water links: the Chesapeake Bay Bridge (Anne
  // Arundel to Queen Anne's) and the Harry W. Nice Memorial Bridge (US-301, Charles to King George,
  // Virginia).
  MD: {
    fips: ["24", "11"],
    name: "Maryland",
    pop: "census",
    merge: [
      ["Allegany", "Garrett"],
      ["Kent", "Queen Anne's"],
      ["Caroline", "Dorchester", "Talbot"],
      ["Somerset", "Wicomico"],
    ],
    names: { "Allegany-Garrett": "Western Maryland", "Caroline-Dorchester-Talbot": "Mid-Shore", "Kent-Queen Anne's": "Upper Shore" },
    bridges: [
      ["Anne Arundel", "Queen Anne's"],
      ["Charles", "VA:King George"],
    ],
  },
  // Delaware: 3 counties, 990,000 people (Census 2020); each county is a region (all are over
  // 50,000). New Jersey's links (the Delaware Memorial Bridge and the Cape May-Lewes Ferry) are
  // listed with New Jersey.
  DE: {
    fips: "10",
    name: "Delaware",
    pop: "census",
    merge: [
    ],
  },
  // Pennsylvania: 67 counties, 13.0 million people (Census 2020); reviewed by the Pennsylvania pack
  // agent (packs/PA/NOTES.md), 55 regions. The small counties of the Northern Tier, the Wilds and
  // the Ridge-and-Valley join neighbours along one road or valley (US-6, US-219, US-62, I-80, US-15,
  // the Juniata valley, US-30); Columbia joins Montour and Sullivan, which have no better partner,
  // and Greene (36,000) stays alone between two big neighbours.
  PA: {
    fips: "42",
    name: "Pennsylvania",
    pop: "census",
    merge: [
      ["Cameron", "Clinton"],
      ["Elk", "McKean"],
      ["Potter", "Tioga"],
      ["Forest", "Warren"],
      ["Clarion", "Jefferson"],
      ["Columbia", "Montour", "Sullivan"],
      ["Susquehanna", "Wyoming"],
      ["Snyder", "Union"],
      ["Huntingdon", "Mifflin"],
      ["Juniata", "Perry"],
      ["Bedford", "Fulton"],
    ],
  },
  // New Jersey: 21 counties, 9.29 million people (Census 2020); each county is a region (all are
  // over 50,000). Water link: the Cape May-Lewes Ferry (Cape May to Sussex, Delaware); the Delaware
  // Memorial Bridge joins Salem and New Castle, which are neighbours anyway. New York's links (the
  // Hudson tunnels and bridges, Staten Island's bridges) are listed with New York.
  NJ: {
    fips: "34",
    name: "New Jersey",
    pop: "census",
    merge: [
    ],
    bridges: [
      ["Cape May", "DE:Sussex"],
    ],
  },
  // New York: 62 counties, 20.2 million people (Census 2020); reviewed by the New York pack agent
  // (packs/NY/NOTES.md), 53 regions. New York City's five boroughs stay alone under their own names;
  // upstate, small counties join neighbours in the Adirondacks, the Finger Lakes, the Erie Canal
  // country, the Southern Tier and the northern Catskills, and Lewis (27,000, Tug Hill and the Black
  // River valley) stays alone between big neighbours. Water links: the Verrazzano-Narrows Bridge
  // (Staten Island to Brooklyn) and the Staten Island Ferry (to Manhattan).
  NY: {
    fips: "36",
    name: "New York",
    pop: "census",
    merge: [
      ["Essex", "Franklin", "Hamilton"],
      ["Schuyler", "Seneca", "Yates"],
      ["Genesee", "Orleans"],
      ["Allegany", "Wyoming"],
      ["Chenango", "Delaware"],
      ["Greene", "Schoharie"],
      ["Cortland", "Tioga"],
    ],
    names: { "New York": "Manhattan", "Kings": "Brooklyn", "Queens": "Queens", "Bronx": "The Bronx", "Richmond": "Staten Island", "Essex-Franklin-Hamilton": "Adirondacks" },
    bridges: [
      ["Richmond", "Kings"],
      ["Richmond", "New York"],
    ],
  },
  // Connecticut: the map's 8 counties (the Census Bureau has used planning regions since 2022; the
  // 2020 county totals are used), 3.61 million people (Census 2020); each county is a region (all
  // are over 50,000). Water links across Long Island Sound: the Bridgeport-Port Jefferson Ferry
  // (Fairfield to Suffolk) and the Cross Sound Ferry (New London to Orient Point, Suffolk).
  CT: {
    fips: "09",
    name: "Connecticut",
    pop: "census",
    merge: [
    ],
    bridges: [
      ["Fairfield", "NY:Suffolk"],
      ["New London", "NY:Suffolk"],
    ],
  },
  // Rhode Island: 5 counties, 1.10 million people (Census 2020); each county is a region (all are
  // over 50,000). Newport County (Aquidneck and Conanicut islands, and Tiverton and Little Compton
  // on the mainland by Massachusetts) is reached by water links: the Mount Hope Bridge (Bristol to
  // Portsmouth) and the Newport Pell and Jamestown Verrazzano bridges (Newport and Jamestown to
  // Washington County).
  RI: {
    fips: "44",
    name: "Rhode Island",
    pop: "census",
    merge: [
    ],
    bridges: [
      ["Bristol", "Newport"],
      ["Newport", "Washington"],
    ],
  },
  // Massachusetts: 14 counties, 7.03 million people (Census 2020); 13 regions. Every county is over
  // 50,000 except the islands: Dukes (Martha's Vineyard, 21,000) joins Barnstable, and Nantucket
  // (14,000, no land neighbour) comes along with them by the Hyannis ferry: Cape Cod and the
  // Islands.
  MA: {
    fips: "25",
    name: "Massachusetts",
    pop: "census",
    join: [["Nantucket", "Barnstable"]],
    merge: [
      ["Barnstable", "Dukes"],
    ],
    names: { "Barnstable-Dukes-Nantucket": "Cape Cod and the Islands" },
  },
  // Vermont: 14 counties, 643,000 people (Census 2020); 7 regions, set by the main agent. The
  // Northeast Kingdom (Caledonia, Essex, Orleans); Franklin with the Lake Champlain islands of Grand
  // Isle; Central Vermont (Washington with Lamoille, Stowe's valley, and Orange, on I-89); the
  // Connecticut valley on I-91 (Windham and Windsor); the Champlain and Otter Creek valley (Addison
  // and Rutland, US-7 and the Vermont Railway). Bennington (37,000) stays alone in the south-west
  // corner, its valley tied to Rutland's and to New York's; Chittenden (Burlington) alone.
  VT: {
    fips: "50",
    name: "Vermont",
    pop: "census",
    merge: [
      ["Caledonia", "Essex", "Orleans"],
      ["Franklin", "Grand Isle"],
      ["Lamoille", "Orange", "Washington"],
      ["Windham", "Windsor"],
      ["Addison", "Rutland"],
    ],
    names: { "Caledonia-Essex-Orleans": "Northeast Kingdom", "Lamoille-Orange-Washington": "Central Vermont" },
  },
  // New Hampshire: 10 counties, 1.38 million people (Census 2020); 8 regions, set by the main agent.
  // Coos (the North Country, 31,000) joins Carroll along NH-16 and the Saco and Androscoggin
  // valleys: the White Mountains; Sullivan (Claremont, 43,000) joins Grafton in the Upper Valley of
  // the Connecticut (Lebanon and Hanover).
  NH: {
    fips: "33",
    name: "New Hampshire",
    pop: "census",
    merge: [
      ["Carroll", "Coos"],
      ["Grafton", "Sullivan"],
    ],
    names: { "Carroll-Coos": "White Mountains" },
  },
  // Maine: 16 counties, 1.36 million people (Census 2020); 11 regions, set by the main agent. Small
  // counties pair along the coast and the valleys: Knox with Waldo (Penobscot Bay: Rockland,
  // Belfast), Lincoln with Sagadahoc (Bath and Wiscasset), Hancock with Washington (Downeast:
  // Ellsworth, Bar Harbor, Machias, Calais), Franklin with Oxford (the Western Mountains) and
  // Piscataquis with Somerset (Moosehead Lake and the woods, the railway through Jackman and
  // Greenville). Aroostook (67,000) stays alone, the size of a small state.
  ME: {
    fips: "23",
    name: "Maine",
    pop: "census",
    merge: [
      ["Knox", "Waldo"],
      ["Lincoln", "Sagadahoc"],
      ["Hancock", "Washington"],
      ["Franklin", "Oxford"],
      ["Piscataquis", "Somerset"],
    ],
    names: { "Hancock-Washington": "Downeast", "Franklin-Oxford": "Western Mountains" },
    // The CAT, Bay Ferries' summer ferry from Bar Harbor to Yarmouth, Nova Scotia
    bridges: [["Hancock", "NS:Yarmouth"]],
  },
  // Canada: regions are census divisions (in British Columbia, its regional districts). Small
  // ones are merged automatically from Statistics Canada's 2021 populations, for the pack
  // agent to review.
  BC: {
    country: "CAN",
    name: "British Columbia",
    pop: "statcan",
    // Merged along real road and ferry links (the pack agent's review, the owner's choice):
    // Fort Nelson's only road south goes to Fort St. John; the northwest along the Skeena with
    // Haida Gwaii and the Stikine; Bella Coola's only road goes to Williams Lake; the North Island;
    // the Sunshine Coast and Powell River (one coast, no road to the rest of the mainland); the
    // West Kootenay
    merge: [
      ["Northern Rockies", "Peace River"],
      ["Kitimat-Stikine", "North Coast", "Stikine"],
      ["Cariboo", "Central Coast"],
      ["Mount Waddington", "Strathcona"],
      ["qathet", "Sunshine Coast"],
      ["Central Kootenay", "Kootenay Boundary"],
    ],
    // Ferry routes count as borders, so the islands and the Sunshine Coast can be unlocked from
    // Vancouver: Tsawwassen–Swartz Bay, Horseshoe Bay–Departure Bay, Horseshoe Bay–Langdale,
    // Comox–Powell River
    bridges: [
      ["Capital", "Metro Vancouver"],
      ["Nanaimo", "Metro Vancouver"],
      ["Sunshine Coast", "Metro Vancouver"],
      ["Comox Valley", "qathet"],
    ],
  },
  // The other provinces and territories: their census divisions from Statistics Canada (see
  // CANADA below). Small ones merge automatically until each pack agent reviews them.
  // Merged by the pack agent's review: the dry east-central prairie (Hanna, Wainwright); the Peace
  // Country around Grande Prairie; Rocky Mountain House on Red Deer's road west; the southwest
  // around Lethbridge (Fort Macleod, Pincher Creek, Cardston, the Crowsnest); the Rockies (Banff
  // and Canmore with the Yellowhead corridor: Jasper, Hinton, Edson)
  AB: {
    country: "CAN",
    name: "Alberta",
    pop: "statcan",
    merge: [
      ["Division No. 4", "Division No. 7"],
      ["Division No. 18", "Division No. 19"],
      ["Division No. 8", "Division No. 9"],
      ["Division No. 2", "Division No. 3"],
      ["Division No. 14", "Division No. 15"],
    ],
  },
  // Merged by the pack agent's review: the southeast around Weyburn and Estevan; Assiniboia with
  // Moose Jaw; the southwest around Swift Current; the west-central grain country (Kindersley); the
  // northwest around the Battlefords; the Parkland around Yorkton. Melfort and the vast north (La
  // Ronge) stay on their own.
  SK: {
    country: "CAN",
    name: "Saskatchewan",
    pop: "statcan",
    merge: [
      ["Division No. 1", "Division No. 2"],
      ["Division No. 3", "Division No. 7"],
      ["Division No. 4", "Division No. 8"],
      ["Division No. 12", "Division No. 13"],
      ["Division No. 16", "Division No. 17"],
      ["Division No. 5", "Division No. 9", "Division No. 10"],
    ],
  },
  // Reviewed by the Manitoba pack agent (packs/MB/NOTES.md): 23 census divisions to 13 regions. The
  // far north looks to Thompson (the Hudson Bay Railway runs on to Gillam and Churchill); the
  // Parkland around Dauphin; the Yellowhead corridor (Neepawa); the Trans-Canada west of Winnipeg
  // to Portage la Prairie; the southwest corner; the Pembina Valley; the Interlake (Highway 6
  // north); Eastman and the Winnipeg River. Winnipeg, Steinbach, Brandon and Selkirk stay alone
  // (over 50,000), and so does The Pas (22,000): it has The Pas and Flin Flon, sits 305 km from
  // Thompson, and is where the Hudson Bay Railway starts.
  MB: {
    country: "CAN",
    name: "Manitoba",
    pop: "statcan",
    merge: [
      ["Division No. 22", "Division No. 23"],
      ["Division No. 16", "Division No. 17", "Division No. 20"],
      ["Division No. 8", "Division No. 15"],
      ["Division No. 9", "Division No. 10"],
      ["Division No. 5", "Division No. 6"],
      ["Division No. 3", "Division No. 4"],
      ["Division No. 14", "Division No. 18", "Division No. 19"],
      ["Division No. 1", "Division No. 12"],
    ],
  },
  ON: {
    country: "CAN",
    name: "Ontario",
    pop: "statcan",
    // Prince Edward County is cut off by the Bay of Quinte and the Murray Canal: the Bay Bridge
    // (Belleville, Hastings) and the Glenora Ferry (to Adolphustown, Lennox and Addington).
    // Manitoulin Island: the Chi-Cheemaun ferry (Tobermory, Bruce; summer only)
    bridges: [
      ["Prince Edward", "Hastings"],
      ["Prince Edward", "Lennox and Addington"],
      ["Manitoulin", "Bruce"],
    ],
    // Reviewed by the Ontario pack agent (packs/ON/NOTES.md): 49 census divisions to 41 regions.
    // Greater Sudbury is an enclave in Sudbury District (apart, the district would be a ring reached
    // only through the city), with Manitoulin by the Little Current bridge; Fort Frances is on
    // Highway 71 to Kenora; Highway 35 runs Lindsay to Minden; Highways 11 and 400/69 run from
    // Muskoka into Parry Sound District; Highway 11 and the Ontario Northland line join Cochrane
    // and Timiskaming; Napanee is 45 km from Kingston. Every other division has 61,000 people or more.
    merge: [
      ["Greater Sudbury", "Sudbury", "Manitoulin"],
      ["Kenora", "Rainy River"],
      ["Kawartha Lakes", "Haliburton"],
      ["Muskoka", "Parry Sound"],
      ["Cochrane", "Timiskaming"],
      ["Frontenac", "Lennox and Addington"],
    ],
    // Prince Edward's two fixed links (the Bay Bridge, the Murray Canal bridge) both go to Hastings
    join: [["Prince Edward", "Hastings"]],
    names: { "Greater Sudbury & Manitoulin & Sudbury": "Sudbury and Manitoulin" },
  },
  QC: {
    country: "CAN",
    name: "Quebec",
    pop: "statcan",
    // Islands and the St. Lawrence, crossed by real bridges: the island of Montreal (the Jacques
    // Cartier, Champlain, Mercier, Galipeault and Le Gardeur bridges, and the bridges to Laval),
    // Laval (the bridges over the Rivière des Mille Îles), the Île d'Orléans bridge, the Quebec and
    // Pierre Laporte bridges (Québec-Lévis), the Laviolette bridge (Trois-Rivières-Bécancour)
    bridges: [
      ["Montréal", "Longueuil"],
      ["Montréal", "Roussillon"],
      ["Montréal", "Vaudreuil-Soulanges"],
      ["Montréal", "L'Assomption"],
      ["Montréal", "Laval"],
      ["Laval", "Deux-Montagnes"],
      ["Laval", "Thérèse-De Blainville"],
      ["Laval", "Les Moulins"],
      ["L'Île-d'Orléans", "La Côte-de-Beaupré"],
      ["Québec", "Lévis"],
      ["Francheville", "Bécancour"],
      // The Magdalen Islands' ferry from Souris (counts once Prince Edward Island is in the game)
      ["Communauté maritime des Îles-de-la-Madeleine", "PE:Kings"],
      // St. Lawrence ferries (the Quebec pack agent's review): Sorel-Saint-Ignace-de-Loyola,
      // Rivière-du-Loup-Saint-Siméon, Trois-Pistoles-Les Escoumins, Matane-Baie-Comeau; the
      // Campbellton bridge to New Brunswick and the Blanc-Sablon-St. Barbe ferry to Newfoundland
      // (these two count once those provinces are in the game)
      ["Pierre-De Saurel", "D'Autray"],
      ["Rivière-du-Loup", "Charlevoix-Est"],
      ["Les Basques", "La Haute-Côte-Nord"],
      ["La Matanie", "Manicouagan"],
      ["Avignon", "NB:Restigouche"],
      ["Minganie--Le Golfe-du-Saint-Laurent", "NL:Division No. 9"],
    ],
    // Reviewed by the Quebec pack agent (packs/QC/NOTES.md): 98 census divisions to 65 regions,
    // along real corridors: the Abitibi CN line, Route 101 to Ville-Marie, Route 117, the
    // Laurentian A-15, Route 148, the A-50, the Saint-Maurice valley, the Chemin du Roy, the
    // Jacques-Cartier River, Charlevoix, Route 138 on the North Shore, Lac Saint-Jean, the Gaspé
    // coasts and the Matapédia valley, the Trans-Canada to New Brunswick, the Côte-du-Sud, the
    // Chaudière valley, Route 116, the Eastern Townships and the New York border farmland. Left
    // small on purpose: Nord-du-Québec (huge), La Vallée-de-l'Or (Val-d'Or), Les Appalaches
    // (Thetford Mines) and the Magdalen Islands (no neighbour until Prince Edward Island).
    merge: [
      ["Abitibi", "Abitibi-Ouest"],
      ["Rouyn-Noranda", "Témiscamingue"],
      ["Antoine-Labelle", "La Vallée-de-la-Gatineau"],
      ["Les Laurentides", "Les Pays-d'en-Haut"],
      ["Les Collines-de-l'Outaouais", "Pontiac"],
      ["Argenteuil", "Papineau"],
      ["Shawinigan", "Mékinac", "La Tuque"],
      ["D'Autray", "Maskinongé"],
      ["Portneuf", "La Jacques-Cartier"],
      ["Charlevoix", "Charlevoix-Est"],
      ["Manicouagan", "La Haute-Côte-Nord"],
      ["Sept-Rivières--Caniapiscau", "Minganie--Le Golfe-du-Saint-Laurent"],
      ["Le Domaine-du-Roy", "Maria-Chapdelaine"],
      ["La Côte-de-Gaspé", "Le Rocher-Percé"],
      ["Bonaventure", "Avignon"],
      ["La Matanie", "La Haute-Gaspésie"],
      ["La Mitis", "La Matapédia"],
      ["Rivière-du-Loup", "Témiscouata", "Les Basques"],
      ["Montmagny", "L'Islet", "Kamouraska"],
      ["Bellechasse", "Les Etchemins"],
      ["La Nouvelle-Beauce", "Robert-Cliche"],
      ["Lotbinière", "L'Érable"],
      ["Bécancour", "Nicolet-Yamaska"],
      ["Le Granit", "Le Haut-Saint-François"],
      ["Memphrémagog", "Coaticook"],
      ["Le Val-Saint-François", "Les Sources"],
      ["Les Maskoutains", "Acton"],
      ["Brome-Missisquoi", "Rouville"],
      ["Les Jardins-de-Napierville", "Le Haut-Saint-Laurent"],
    ],
    // The Île d'Orléans bridge lands in La Côte-de-Beaupré
    join: [["L'Île-d'Orléans", "La Côte-de-Beaupré"]],
    names: {
      "Charlevoix & Charlevoix-Est": "Charlevoix",
      "Kamouraska & L'Islet & Montmagny": "Côte-du-Sud",
      "L'Île-d'Orléans & La Côte-de-Beaupré": "Côte-de-Beaupré & Île d'Orléans",
      "La Tuque & Mékinac & Shawinigan": "Shawinigan & Haute-Mauricie",
      "Les Basques & Rivière-du-Loup & Témiscouata": "Rivière-du-Loup, Témiscouata & Basques",
      "Minganie--Le Golfe-du-Saint-Laurent & Sept-Rivières--Caniapiscau": "Sept-Rivières & Minganie",
      "Bellechasse & Les Etchemins": "Bellechasse-Etchemins",
      "Francheville": "Trois-Rivières",
      "Le Saguenay-et-son-Fjord": "Saguenay",
      "Communauté maritime des Îles-de-la-Madeleine": "Îles-de-la-Madeleine",
    },
  },
  NB: {
    country: "CAN",
    name: "New Brunswick",
    pop: "statcan",
    // The Confederation Bridge (Cape Jourimain to Borden-Carleton) and the Saint John-Digby ferry
    // (each counts once Prince Edward Island or Nova Scotia is in the game)
    bridges: [
      ["Westmorland", "PE:Prince"],
      ["Saint John", "NS:Digby"],
    ],
    // Reviewed by the New Brunswick pack agent (packs/NB/NOTES.md): 15 counties to 11 regions.
    // Greater Moncton (Riverview is across the Petitcodiac in Albert); the Route 11 coast from
    // Miramichi to Kent; the upper Saint John valley (Edmundston and Grand Falls); the lower Saint
    // John and Grand Lake (Oromocto). Restigouche (Campbellton), Carleton (Woodstock) and Charlotte
    // (St. Stephen, St. Andrews) stay alone: each has a real town and a border crossing.
    merge: [
      ["Albert", "Westmorland"],
      ["Kent", "Northumberland"],
      ["Madawaska", "Victoria"],
      ["Queens", "Sunbury"],
    ],
    names: { "Kent & Northumberland": "Miramichi & Kent" },
  },
  NS: {
    country: "CAN",
    name: "Nova Scotia",
    pop: "statcan",
    // The Caribou-Wood Islands ferry to Prince Edward Island and the North Sydney-Port aux Basques
    // ferry to Newfoundland (each counts once that province is in the game; the Digby ferry to
    // Saint John is listed with New Brunswick)
    bridges: [
      ["Pictou", "PE:Queens"],
      ["Cape Breton", "NL:Division No. 3"],
    ],
    // Reviewed by the Nova Scotia pack agent (packs/NS/NOTES.md): 18 counties to 12 regions. The
    // Annapolis Basin (Digby has the Saint John ferry); the South Shore on Highway 103; the
    // southern tip; Antigonish with Guysborough, its service town; Cape Breton Island outside the
    // regional municipality (Port Hawkesbury, at the causeway). Hants, Pictou (New Glasgow) and
    // Cumberland (Amherst, the land gate to New Brunswick) stay alone: each has real towns.
    merge: [
      ["Annapolis", "Digby"],
      ["Lunenburg", "Queens"],
      ["Shelburne", "Yarmouth"],
      ["Antigonish", "Guysborough"],
      ["Inverness", "Richmond", "Victoria"],
    ],
    names: { "Inverness & Richmond & Victoria": "Cabot Trail & Bras d'Or", "Shelburne & Yarmouth": "Yarmouth & Shelburne" },
  },
  PE: { country: "CAN", name: "Prince Edward Island", pop: "statcan", merge: [] }, // (all separate until its pack agent's review)
  NL: {
    country: "CAN",
    name: "Newfoundland and Labrador",
    pop: "statcan",
    // The island to Labrador: the St. Barbe-Blanc-Sablon ferry across the Strait of Belle Isle and the
    // road on to L'Anse-au-Clair. The Argentia-North Sydney ferry (the Port aux Basques ferry is listed
    // with Nova Scotia).
    bridges: [
      ["Division No. 9", "Division No. 10"],
      ["Division No. 1", "NS:Cape Breton"],
    ],
    // Reviewed by the Newfoundland and Labrador pack agent (packs/NL/NOTES.md): 11 divisions to 6
    // regions along real roads: the Eastern region on the Trans-Canada (Route 210 to the Burin
    // Peninsula, Route 230 to Bonavista); the Trans-Canada from the Port aux Basques ferry to Bay
    // St. George; the Viking Trail from Corner Brook to St. Anthony; Central (the Exploits valley,
    // Gander and Notre Dame Bay); Labrador. St. John's and the Avalon stay alone.
    merge: [
      ["Division No. 2", "Division No. 7"],
      ["Division No. 3", "Division No. 4"],
      ["Division No. 5", "Division No. 9"],
      ["Division No. 6", "Division No. 8"],
      ["Division No. 10", "Division No. 11"],
    ],
  },
  YT: { country: "CAN", name: "Yukon", pop: "statcan", merge: [] }, // (all separate until its pack agent's review)
  // Reviewed by the Northwest Territories pack agent (packs/NT/NOTES.md): 6 census regions to 4.
  // Region 3 (Tlicho, Behchoko) is an enclave inside Region 6, 95 km from Yellowknife on Highway 3;
  // the Sahtu (Region 2, Norman Wells) has no all-season road, only the winter road from Wrigley in
  // Region 4. Hay River (South Slave) and Inuvik (the Mackenzie Delta and the Arctic islands) stay
  // alone, each with its own town and road.
  NT: {
    country: "CAN",
    name: "Northwest Territories",
    pop: "statcan",
    merge: [
      ["Region 3", "Region 6"],
      ["Region 2", "Region 4"],
    ],
  },
  NU: { country: "CAN", name: "Nunavut", pop: "statcan", merge: [] }, // (all separate until its pack agent's review)
};

// ---------- Canadian provinces: regions from each province's own open data ----------
// British Columbia: its 27 regional districts, the Northern Rockies Regional Municipality and the
// unincorporated Stikine Region (together its 29 census divisions), from DataBC's open map
// service (Open Government Licence – British Columbia). Their borders reach out into the sea, so
// they are trimmed to the land: BC's 1:250,000 coastline (the mainland and every island of 25
// km² or more, from the same service). Populations: Statistics Canada, 2021 Census, table 98-10-0007 (Statistics Canada Open
// Licence), matched by census division. (Statistics Canada's own boundary files can't be
// downloaded by a script: its file server turns automated downloads away.)
// Every other province and territory: its census divisions from Statistics Canada's 2021
// cartographic boundary files (already cut at the shore), through its map service
// (geo.statcan.gc.ca), which answers scripts. Islets under 25 km² are left out.
const CANADA = {
  BC: {
    source: "databc",
    sgc: "59", // the province's Statistics Canada code
    wfs: [
      ["WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_REGIONAL_DISTRICTS_SP", "bc-regional-districts.json"],
      ["WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_MUNICIPALITIES_SP", "northern-rockies.json", "ADMIN_AREA_NAME LIKE '%Northern Rockies%'"],
    ],
    // The land: polygons of this layer with these tags, islands of at least minArea m²
    land: { layer: "WHSE_BASEMAPPING.NTS_BC_COASTLINE_POLYS_125M", file: "bc-coast-250k.json", tags: ["MAINLAND", "ISLAND"], minArea: 25e6 },
    // Statistics Canada still uses the old names of three regional districts
    statcanNames: { "Metro Vancouver": "Greater Vancouver", qathet: "Powell River", "North Coast": "Skeena-Queen Charlotte" },
  },
  AB: { sgc: "48" },
  SK: { sgc: "47" },
  MB: { sgc: "46" },
  ON: { sgc: "35" },
  QC: { sgc: "24" },
  NB: { sgc: "13" },
  NS: { sgc: "12" },
  PE: { sgc: "11" },
  NL: { sgc: "10" },
  YT: { sgc: "60" },
  NT: { sgc: "61" },
  NU: { sgc: "62" },
};
// Where a state's map comes from: the US Census, DataBC, or Statistics Canada. Two maps from
// different sources share no points, so their border is found by distance (see below).
const sourceOf = (code) => (STATES[code].country === "CAN" ? CANADA[code].source || "statcan" : "census");
// What a kind of census division is called after its name ("Simcoe County", "Peel Region");
// numbered ones ("Division No. 6") are named after their biggest town instead (see below)
const CD_KIND = { CTY: "County", CT: "County", UC: "Counties", RM: "Region", DM: "District", DIS: "District", REG: "Region", RD: "Regional District" };
const numbered = (name) => /^(Division No\.|Region) \d+$/.test(name);
// The biggest municipality of a census division (2021 population), for naming numbered ones
let csdCache = null;
// Census subdivision types that can be countryside around a town: rural municipalities
// (Manitoba's "Rockwood" around Stonewall, "St. Andrews" around Selkirk), municipal districts,
// special areas, improvement districts and unorganized land. (Some Manitoba "rural municipalities"
// are a town and its countryside, merged in 2015: Gimli, Killarney - Turtle Mountain.)
const RURAL_TYPES = new Set(["RM", "MD", "SA", "ID", "NO", "SNO", "UNO"]);
const URBAN_TYPES = new Set(["CY", "C", "CV", "T", "TV", "V", "VL"]); // cities, towns, villages (not Quebec's Cree and Naskapi "villages", VC and VN)
function biggestTown(cd) {
  if (!csdCache) {
    const service = "https://geo.statcan.gc.ca/geo_wa/rest/services/2021/Cartographic_boundary_files/MapServer/9/query";
    const list = JSON.parse(fs.readFileSync(download(`${service}?where=1%3D1&outFields=CSDUID,CSDTYPE&returnGeometry=false&f=json`, path.join(CACHE, "canada", "csd-types.json")), "utf8"));
    if (list.exceededTransferLimit) throw new Error("Census subdivision types: the answer was cut short");
    const type = Object.fromEntries(list.features.map((f) => [f.attributes.CSDUID, f.attributes.CSDTYPE]));
    csdCache = [];
    for (const r of readCsv(statcanTable("98100002")).slice(1))
      if (r[2] && r[2].slice(4, 9) === "A0005") csdCache.push({ code: r[2].slice(-7), name: r[1], pop: +r[4], type: type[r[2].slice(-7)] });
  }
  // (not unorganized areas, subdivisions, rural municipalities like "Sherwood No. 159" or reserves "... 135")
  // (rural municipalities don't count: "Clearwater County", "Municipal District of ...")
  const towns = csdCache.filter((c) => c.code.startsWith(cd) && !/Unorganized|Subd\.|No\. \d+$| \d+[A-Z]?$|County|Municipal District|Improvement District|Special Area/.test(c.name));
  towns.sort((a, b) => b.pop - a.pop);
  // The biggest, unless it's countryside and a city, town or village has at least half its people
  const big = towns[0];
  const town = big && RURAL_TYPES.has(big.type) && towns.find((c) => URBAN_TYPES.has(c.type) && c.pop >= big.pop / 2);
  return town || big;
}
function download(url, file) {
  if (fs.existsSync(file) && fs.statSync(file).size > 0) return file;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  console.log(`downloading ${url}`);
  // (to a temporary name first: a download cut off halfway must not stay in the cache; a
  // connection cut off is tried again, up to four times)
  for (let attempt = 1; ; attempt++) {
    try {
      execFileSync("curl", ["-sS", "-f", "-m", "600", "--retry", "3", "-o", file + ".part", url]);
      break;
    } catch (e) {
      if (attempt >= 4) throw e;
      execFileSync("sleep", [String(2 ** attempt)]);
    }
  }
  fs.renameSync(file + ".part", file);
  return file;
}
// A Statistics Canada table (2021 Census population and dwelling counts), unzipped in the cache
function statcanTable(table) {
  const dir = path.join(CACHE, "canada", `st-${table}`);
  const file = path.join(dir, `${table}.csv`);
  if (!fs.existsSync(file)) {
    const zip = download(`https://www150.statcan.gc.ca/n1/en/tbl/csv/${table}-eng.zip`, path.join(CACHE, "canada", `st-${table}.zip`));
    fs.mkdirSync(dir, { recursive: true });
    execFileSync("unzip", ["-o", "-q", zip, "-d", dir]);
  }
  return file;
}
// A CSV file's rows (fields may be quoted)
function readCsv(file) {
  const rows = [];
  for (const line of fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "").split(/\r?\n/)) {
    if (!line) continue;
    const row = [];
    let field = "", quoted = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (quoted) {
        if (c === '"' && line[i + 1] === '"') (field += '"'), i++;
        else if (c === '"') quoted = false;
        else field += c;
      } else if (c === '"') quoted = true;
      else if (c === ",") row.push(field), (field = "");
      else field += c;
    }
    row.push(field);
    rows.push(row);
  }
  return rows;
}
// Census divisions: name and 2021 population (thousands), by code ("5915")
let cdCache = null;
function censusDivisions() {
  if (cdCache) return cdCache;
  cdCache = {};
  for (const r of readCsv(statcanTable("98100007")).slice(1)) if (r[2] && r[2].slice(4, 9) === "A0003") cdCache[r[2].slice(-4)] = { name: r[1], pop: +r[4] / 1000 };
  return cdCache;
}
const letters = (t) => t.toLowerCase().replace(/[^a-z]/g, "");
const bboxArea = (ring) => {
  const xs = ring.map((q) => q[0]), ys = ring.map((q) => q[1]);
  return (Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys));
};
// A ring's area in km² (approximately: fine for telling islets from islands)
function kmArea(ring) {
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) a += (ring[j][0] - ring[i][0]) * (ring[j][1] + ring[i][1]);
  return Math.abs(a / 2) * 111.3 * 111.3 * Math.cos((ring[0][1] * Math.PI) / 180);
}
// The census divisions of these provinces as one topology (shared borders are exact inside it)
// Topologies are rounded to a grid over their extent: with the extent fixed (all of North America,
// not just the provinces in the game), adding a province doesn't move every other province's
// points by a few metres (which tipped coastal towns in and out of their regions)
const ANCHOR = { type: "MultiPoint", coordinates: [[-180, 10], [-50, 85]] };
function canadaTopology(codes) {
  const ts = require(path.join(MODULES, "topojson-server"));
  const tsimp = require(path.join(MODULES, "topojson-simplify"));
  const pc = require(path.join(MODULES, "polygon-clipping"));
  // Natural Earth's 1:10m provinces: only for a province with no coastline of its own (see land)
  let neCache = null;
  const ne = () =>
    (neCache ||= JSON.parse(
      fs.readFileSync(
        download(
          "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson",
          path.join(CACHE, "ne", "ne_10m_admin_1_states_provinces.geojson")
        ),
        "utf8"
      )
    ));
  const cds = censusDivisions();
  const features = [];
  for (const code of codes) {
    const cfg = CANADA[code];
    if (!cfg) throw new Error(`No map source for ${STATES[code].name} yet (add it to CANADA)`);
    if (sourceOf(code) === "statcan") {
      // One request per census division (a whole big province at once is too much for the server)
      const service = "https://geo.statcan.gc.ca/geo_wa/rest/services/2021/Cartographic_boundary_files/MapServer/4/query";
      const where = (w) => `?where=${encodeURIComponent(w)}&outFields=CDUID,CDNAME,CDTYPE&outSR=4326`;
      const list = JSON.parse(fs.readFileSync(download(`${service}${where(`PRUID='${cfg.sgc}'`)}&f=json&returnGeometry=false`, path.join(CACHE, "canada", `cd-${cfg.sgc}-list.json`)), "utf8"));
      const cds = list.features.map((f) => f.attributes.CDUID).sort();
      // (Qikiqtaaluk, Baffin Island and the High Arctic, is too big for the server in full: it comes
      // with points closer than about 10 m dropped)
      const LIGHTER = { 6204: "&maxAllowableOffset=0.0001" };
      const all = cds.flatMap((cd) => JSON.parse(fs.readFileSync(download(`${service}${where(`CDUID='${cd}'`)}&f=geojson&geometryPrecision=5&returnGeometry=true${LIGHTER[cd] || ""}`, path.join(CACHE, "canada", "cd", `${cd}.json`)), "utf8")).features);
      // Lighter before the shared borders are worked out (the full files are too big for that):
      // repeated points dropped and islets under 25 km² left out (each division keeps its biggest
      // piece). Every division keeps its points as they came (5 decimals, about 1 m), so both
      // sides of a shared border stay exactly the same. (Rounding to 4 decimals made some
      // outlines touch themselves, which splits them later, and rounding only the others broke
      // the borders between the two kinds: Manitoba's Division 19 and 22 stopped being neighbours.)
      const lighter = (ring, k) => {
        const out = [];
        for (const [x, y] of ring) {
          const q = [Math.round(x * k) / k, Math.round(y * k) / k];
          const last = out[out.length - 1];
          if (!last || last[0] !== q[0] || last[1] !== q[1]) out.push(q);
        }
        return out;
      };
      for (const f of all) {
        const raw = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
        const k = 1e5;
        const polys = raw.map((poly) => poly.map((ring) => lighter(ring, k)).filter((ring) => ring.length >= 4));
        const areas = polys.map((poly) => (poly.length ? kmArea(poly[0]) : 0));
        const biggest = Math.max(...areas);
        f.geometry = { type: "MultiPolygon", coordinates: polys.filter((poly, i) => poly.length && (areas[i] >= 25 || areas[i] === biggest)) };
      }
      for (const f of all) {
        const { CDUID, CDNAME, CDTYPE } = f.properties;
        // "Division No.  6", "Stormont, Dundas and Glengarry", "Greater Sudbury / Grand Sudbury"
        const name = CDNAME.replace(/\s+/g, " ").replace(/, /g, " ").replace(/ \/ .*$/, "");
        features.push({ type: "Feature", id: CDUID, properties: { name, kind: CD_KIND[CDTYPE] || "", numbered: numbered(name), state: code }, geometry: f.geometry });
      }
      continue;
    }
    for (const [layer, file, filter] of cfg.wfs) {
      const url =
        `https://openmaps.gov.bc.ca/geo/pub/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=pub:${layer}` +
        `&outputFormat=application/json&srsName=EPSG:4326` +
        (filter ? `&CQL_FILTER=${encodeURIComponent(filter)}` : "");
      for (const f of JSON.parse(fs.readFileSync(download(url, path.join(CACHE, "canada", file)), "utf8")).features) {
        const official = f.properties.ADMIN_AREA_NAME;
        const short = official.replace(/^Regional District of /, "").replace(/ Regional (District|Municipality)$/, "").replace(/ Region \(Unincorporated\)$/, "");
        const kind = / Regional Municipality$/.test(official) ? "Regional Municipality" : / Region \(Unincorporated\)$/.test(official) ? "Region" : "Regional District";
        const statcanName = cfg.statcanNames[short] || short;
        const cd = Object.keys(cds).find((k) => k.slice(0, 2) === cfg.sgc && letters(cds[k].name) === letters(statcanName));
        if (!cd) throw new Error(`No census division matches ${official}`);
        features.push({ type: "Feature", id: cd, properties: { name: short, kind, state: code }, geometry: f.geometry });
      }
    }
    const missing = Object.keys(cds).filter((k) => k.slice(0, 2) === cfg.sgc && !features.some((f) => f.id === k));
    if (missing.length) throw new Error(`${STATES[code].name}: no map for census divisions ${missing.join(", ")}`);
  }
  // Shared borders, simplified to about the US map's detail (a point every few miles)
  const shared = ts.topology({ regions: { type: "FeatureCollection", features }, anchor: ANCHOR }, 1e6);
  // (a degree of longitude shrinks toward the pole, so north of 60° a point's weight is its real
  // area: the Arctic islands' coasts get the same detail as the south's instead of three times more)
  const weight = (t) => tsimp.planarTriangleArea(t) * Math.min(1, Math.cos((((t[0][1] + t[1][1] + t[2][1]) / 3) * Math.PI) / 180) / 0.5);
  const simple = tsimp.simplify(tsimp.presimplify(shared, weight), 4e-4);
  const smooth = tc.feature(simple, simple.objects.regions).features;
  // Trimmed to the land, smoothed to about the US map's detail: the province's own coastline
  // (see land above), or else its Natural Earth outline (1:10m, less exact on the coast)
  const out = [];
  const wfsUrl = (layer, filter) =>
    `https://openmaps.gov.bc.ca/geo/pub/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=pub:${layer}` +
    `&outputFormat=application/json&srsName=EPSG:4326&count=10000` +
    (filter ? `&CQL_FILTER=${encodeURIComponent(filter)}` : "");
  for (const code of codes) {
    const cfg = CANADA[code];
    if (sourceOf(code) === "statcan") {
      // Already cut at the shore: just leave out the islets (keeping each region's biggest piece)
      for (const r of smooth.filter((x) => x.properties.state === code)) {
        const polys = r.geometry.type === "Polygon" ? [r.geometry.coordinates] : r.geometry.coordinates;
        const biggest = Math.max(...polys.map((poly) => kmArea(poly[0])));
        const kept = polys.filter((poly) => kmArea(poly[0]) >= 25 || kmArea(poly[0]) === biggest);
        out.push({ type: "Feature", id: r.id, properties: r.properties, geometry: { type: "MultiPolygon", coordinates: kept } });
      }
      continue;
    }
    let polys;
    if (cfg.land) {
      const all = JSON.parse(fs.readFileSync(download(wfsUrl(cfg.land.layer), path.join(CACHE, "canada", cfg.land.file)), "utf8")).features;
      polys = all
        .filter((f) => cfg.land.tags.includes(f.properties.QCST_TAG) && (f.properties.QCST_TAG !== "ISLAND" || f.properties.FEATURE_AREA_SQM >= cfg.land.minArea))
        .flatMap((f) => (f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates));
    } else {
      const f = ne().features.find((x) => x.properties.adm0_a3 === "CAN" && x.properties.postal === code);
      polys = (f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates).filter((poly) => bboxArea(poly[0]) >= 0.02);
    }
    const land = polys.map((poly) => poly.map((ring) => simplify(ring, 0.012)).filter((ring) => ring.length >= 4)).filter((poly) => poly.length);
    for (const r of smooth.filter((x) => x.properties.state === code)) {
      const piece = pc.intersection(r.geometry.type === "Polygon" ? [r.geometry.coordinates] : r.geometry.coordinates, land);
      if (!piece.length) throw new Error(`${r.properties.name} has no land`);
      out.push({ type: "Feature", id: r.id, properties: r.properties, geometry: { type: "MultiPolygon", coordinates: piece } });
    }
  }
  return ts.topology({ regions: { type: "FeatureCollection", features: out }, anchor: ANCHOR }, 1e6);
}

for (const code of CODES) if (!STATES[code]) throw new Error(`Unknown state ${code}. Known: ${Object.keys(STATES).join(", ")}`);
const topo = JSON.parse(fs.readFileSync(path.join(MODULES, "us-atlas", "counties-10m.json"), "utf8"));
const tc = require(path.join(MODULES, "topojson-client"));
const isCanadian = (code) => STATES[code].country === "CAN";
const US_CODES = CODES.filter((c) => !isCanadian(c));
const CA_CODES = CODES.filter(isCanadian);

// Every county (or Canadian census division) of the chosen states, which state it is in, and its
// neighbors. The US counties and the Canadian regions are two topologies.
// (a state's fips may list several codes: Maryland includes DC)
const fipsList = (c) => [].concat(STATES[c].fips);
const fipsToCode = Object.fromEntries(US_CODES.flatMap((c) => fipsList(c).map((f) => [f, c])));
const usCounties = topo.objects.counties.geometries.filter((g) => fipsToCode[String(g.id).slice(0, 2)]);
const canTopo = CA_CODES.length ? canadaTopology(CA_CODES) : null;
const canRegions = canTopo ? canTopo.objects.regions.geometries : [];
const counties = [...usCounties, ...canRegions];
const stateByGeom = new Map([...usCounties.map((g) => [g, fipsToCode[String(g.id).slice(0, 2)]]), ...canRegions.map((g) => [g, g.properties.state])]);
const stateOf = (g) => stateByGeom.get(g);
const topoOf = (code) => (isCanadian(code) ? canTopo : topo);
const geomsOf = (code) => (isCanadian(code) ? canRegions : usCounties);
const neighbors = [...tc.neighbors(usCounties), ...tc.neighbors(canRegions).map((list) => list.map((j) => j + usCounties.length))];
const find = (code, name) => {
  const matches = counties.map((g, i) => i).filter((i) => stateOf(counties[i]) === code && counties[i].properties.name === name);
  // (two counties with one name, like Virginia's Richmond city and Richmond County: use the full name)
  const full = isCanadian(code) || matches.length === 1 ? [] : counties.map((g, i) => i).filter((i) => stateOf(counties[i]) === code && censusNames()[String(counties[i].id)] === name);
  const i = matches.length === 1 ? matches[0] : full[0];
  if (i === undefined) throw new Error(matches.length > 1 ? `Two counties called ${name} in ${STATES[code].name}: use the full name, like "${name} County" or "${name} city"` : `No county called ${name} in ${STATES[code].name}`);
  return i;
};

// County populations in thousands, by FIPS code, from the Census Bureau's county totals
// (ESTIMATESBASE2020, the 2020 census base). Downloaded once into the cache folder.
let censusCache = null;
function censusPop() {
  if (censusCache) return censusCache;
  const file = path.join(CACHE, "census", "co-est2023-alldata.csv");
  if (!fs.existsSync(file)) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    execFileSync("curl", ["-sS", "-f", "-m", "300", "--retry", "3", "-o", file, "https://www2.census.gov/programs-surveys/popest/datasets/2020-2023/counties/totals/co-est2023-alldata.csv"]);
  }
  const rows = fs.readFileSync(file, "latin1").split(/\r?\n/).filter(Boolean).map((l) => l.split(","));
  const col = (name) => rows[0].indexOf(name);
  censusCache = {};
  for (const r of rows.slice(1)) if (r[col("SUMLEV")] === "050") censusCache[r[col("STATE")] + r[col("COUNTY")]] = +r[col("ESTIMATESBASE2020")] / 1000;
  // Counties that changed after the map's (2017) boundaries: Connecticut's old counties became
  // planning regions in 2022, and Alaska's Valdez-Cordova split in 2019. Their populations
  // come from the 2010–2020 county totals (POPESTIMATE2020)
  const old = path.join(CACHE, "census", "co-est2020-alldata.csv");
  if (!fs.existsSync(old))
    execFileSync("curl", ["-sS", "-f", "-m", "300", "--retry", "3", "-o", old, "https://www2.census.gov/programs-surveys/popest/datasets/2010-2020/counties/totals/co-est2020-alldata.csv"]);
  const orows = fs.readFileSync(old, "latin1").split(/\r?\n/).filter(Boolean).map((l) => l.split(","));
  const ocol = (name) => orows[0].indexOf(name);
  for (const r of orows.slice(1))
    if (r[ocol("SUMLEV")] === "050" && !(r[ocol("STATE")] + r[ocol("COUNTY")] in censusCache)) censusCache[r[ocol("STATE")] + r[ocol("COUNTY")]] = +r[ocol("POPESTIMATE2020")] / 1000;
  // Split before 2020: Valdez-Cordova = Chugach + Copper River
  const SPLIT = { "02261": ["02063", "02066"] };
  for (const [was, now] of Object.entries(SPLIT)) if (!(was in censusCache)) censusCache[was] = now.reduce((n, f) => n + (censusCache[f] || 0), 0);
  return censusCache;
}
// Each county's full name from the Census Bureau ("Kern County", "Orleans Parish", "Richmond city",
// "Bethel Census Area"), by FIPS code (the same two files)
let censusNameCache = null;
function censusNames() {
  if (censusNameCache) return censusNameCache;
  censusPop();
  censusNameCache = {};
  for (const f of ["co-est2020-alldata.csv", "co-est2023-alldata.csv"]) {
    const rows = fs.readFileSync(path.join(CACHE, "census", f), "latin1").split(/\r?\n/).filter(Boolean).map((l) => l.split(","));
    const col = (name) => rows[0].indexOf(name);
    for (const r of rows.slice(1)) if (r[col("SUMLEV")] === "050") censusNameCache[r[col("STATE")] + r[col("COUNTY")]] = r[col("CTYNAME")];
  }
  censusNameCache["02261"] ||= "Valdez-Cordova Census Area";
  return censusNameCache;
}

// ---------- Which region each county belongs to ----------
const groupOf = new Map(); // county index -> list of county indexes in its region
for (const code of CODES) {
  const cfg = STATES[code];
  const mine = counties.map((g, i) => i).filter((i) => stateOf(counties[i]) === code);
  // Islands with no bridge first: each joins the mainland county named with it (across water,
  // so they don't share a border)
  for (const [island, mainland] of cfg.join || []) {
    const members = [find(code, island), find(code, mainland)];
    members.forEach((i) => groupOf.set(i, members));
  }
  if (cfg.merge) {
    for (const names of cfg.merge) {
      const members = names.map((n) => find(code, n));
      for (const i of members) {
        if (members.length > 1 && !members.some((j) => j !== i && neighbors[i].includes(j))) {
          throw new Error(`${counties[i].properties.name} does not border the rest of its group`);
        }
      }
      // (an island joined to one of the group comes along: Nantucket with Barnstable and Dukes)
      for (const [island, mainland] of cfg.join || []) {
        const a = find(code, island), b = find(code, mainland);
        if (members.includes(b) && !members.includes(a)) members.push(a);
      }
      members.forEach((i) => groupOf.set(i, members));
    }
  } else if (cfg.pop) {
    // Automatic: smallest counties first, each joined by its smallest small neighbors (at most 3 per region).
    const pop = (i) => {
      const p =
        cfg.pop === "census"
          ? censusPop()[String(counties[i].id)]
          : cfg.pop === "statcan"
            ? (censusDivisions()[String(counties[i].id)] || {}).pop
            : cfg.pop[counties[i].properties.name];
      if (p === undefined) throw new Error(`No population for ${counties[i].properties.name}, ${cfg.name}`);
      return p;
    };
    const near = (group) => [...new Set(group.flatMap((i) => neighbors[i]))].filter((j) => stateOf(counties[j]) === code && !group.includes(j));
    const small = mine.filter((i) => pop(i) < SMALL).sort((a, b) => pop(a) - pop(b));
    for (const i of small) {
      if (groupOf.has(i)) continue;
      const group = [i];
      while (group.length < 3) {
        const next = near(group).filter((j) => !groupOf.has(j) && pop(j) < SMALL).sort((a, b) => pop(a) - pop(b))[0];
        if (next === undefined) break;
        group.push(next);
      }
      if (group.length === 1) {
        // No small neighbor left: join a neighboring merged region with room, or the smallest neighbor.
        const room = near(group)
          .map((j) => groupOf.get(j))
          .filter((g) => g && g.length < 3)
          .sort((a, b) => a.reduce((n, j) => n + pop(j), 0) - b.reduce((n, j) => n + pop(j), 0))[0];
        if (room) {
          room.push(i);
          groupOf.set(i, room);
          continue;
        }
        const partner = near(group).filter((j) => !groupOf.has(j)).sort((a, b) => pop(a) - pop(b))[0];
        if (partner !== undefined) group.push(partner);
      }
      group.forEach((j) => groupOf.set(j, group));
    }
  }
  mine.forEach((i) => groupOf.has(i) || groupOf.set(i, [i]));
}

// ---------- Region names and ids ----------
const idOf = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const regionKey = new Map(); // county index -> region id
const regionInfo = new Map(); // region id -> { name, state, members }
// A county named like another in its state (Missouri's St. Louis County and St. Louis city,
// Baltimore, Virginia's Richmond, Roanoke, Fairfax and Franklin) goes by its full Census name,
// or the two would share one region id and one would be lost
const twinName = new Set();
for (const [, members] of groupOf)
  for (const j of members) {
    const st = stateOf(counties[j]);
    if (!isCanadian(st) && counties.some((g, k) => k !== j && stateOf(g) === st && g.properties.name === counties[j].properties.name)) twinName.add(j);
  }
const nameOf = (j) => (twinName.has(j) && censusNames()[String(counties[j].id)]) || counties[j].properties.name;
for (const [i, members] of groupOf) {
  const code = stateOf(counties[i]);
  const base = members.every((j) => counties[j].properties.numbered)
    ? `${counties[members[0]].properties.name.replace(/ \d+$/, "")} ${members.map((j) => +counties[j].properties.name.match(/\d+$/)[0]).sort((a, b) => a - b).join("-")}`
    : members.map(nameOf).sort().join(sourceOf(code) === "statcan" ? " & " : "-");
  const id = code === "CA" ? idOf(base) : `${code.toLowerCase()}-${idOf(base)}`; // California keeps its old ids
  // "Kern County"; in Canada "Capital Regional District", "Simcoe County", "Charlevoix", or
  // for numbered census divisions "Calgary area (Division No. 6)"
  const kinds = [...new Set(members.map((j) => counties[j].properties.kind))];
  let label;
  if (isCanadian(code) && members.every((j) => counties[j].properties.numbered)) {
    const nums = members.map((j) => +counties[j].properties.name.match(/\d+$/)[0]).sort((a, b) => a - b);
    const word = counties[members[0]].properties.name.replace(/ \d+$/, "");
    const big = members.map((j) => biggestTown(String(counties[j].id))).filter(Boolean).sort((a, b) => b.pop - a.pop)[0];
    label = `${big ? big.name.replace(/ \(Part\)$/, "") : STATES[code].name} area (${word} ${nums.join(" & ")})`;
  } else if (STATES[code].names && STATES[code].names[base]) label = STATES[code].names[base]; // a better name for a merged region
  else if (isCanadian(code)) label = kinds.length === 1 && kinds[0] ? `${base} ${kinds[0]}` : sourceOf(code) === "databc" ? `${base} Regional District` : base;
  else if (code === "CA" || code === "NV" || code === "AZ" || code === "OR" || code === "WA") label = /City$/.test(base) ? base : `${base} County`;
  else {
    // The Census Bureau's own names: "Orleans Parish", "Bethel Census Area", "Richmond city"; a
    // merged region gets its members' kind when they share one ("Adams-Lincoln County")
    const full = members.map((j) => censusNames()[String(counties[j].id)] || `${counties[j].properties.name} County`);
    const kindOf = (f, j) => f.slice(counties[j].properties.name.length).trim();
    const kinds = [...new Set(full.map((f, k) => kindOf(f, members[k])))];
    const kind = (kinds.length === 1 ? kinds[0] : code === "AK" ? "Area" : "County").replace(/^city$/, "City"); // (Alaska has no counties)
    label = members.length === 1 ? full[0].replace(/ city$/, " City") : `${base} ${kind}`;
  }
  regionKey.set(i, id);
  // (the District of Columbia is in Maryland's pack but is not in Maryland: just "District of Columbia")
  const dc = members.every((j) => String(counties[j].id) === "11001");
  regionInfo.set(id, { name: code === "CA" || dc ? label : `${label}, ${STATES[code].name}`, state: code, members });
}

// Round to 3 decimals (about 100 m) and drop repeated points. Alaska's westernmost islands lie
// past the date line (east longitudes): put them just west of -180°, next to the rest of Alaska.
const flat = (ring) => {
  const out = [];
  let lastX = null;
  let lastY = null;
  for (const [x, y] of ring) {
    const rx = Math.round((x > 0 ? x - 360 : x) * 1000) / 1000;
    const ry = Math.round(y * 1000) / 1000;
    if (rx === lastX && ry === lastY) continue;
    out.push(rx, ry);
    lastX = rx;
    lastY = ry;
  }
  return out;
};
const collection = (geoms) => ({ type: "GeometryCollection", geometries: geoms });

// Each state's own land, county borders between its regions, borders with the other states
// in the game, and its coast (with the borders of land that isn't in the game: other states,
// Mexico, Canada), drawn as the outer edge of the map.
const indexOf = new Map(counties.map((g, i) => [g, i]));
const allCounties = topo.objects.counties.geometries;
const fipsOf = (g) => String(g.id).slice(0, 2);
const inGame = new Set(US_CODES.flatMap(fipsList));
const stateLand = Object.fromEntries(
  CODES.map((code) => [code, tc.merge(topoOf(code), counties.filter((g) => stateOf(g) === code)).coordinates.flatMap((poly) => poly.map(flat))])
);
const borders = Object.fromEntries(
  CODES.map((code) => [
    code,
    tc
      .mesh(topoOf(code), collection(geomsOf(code)), (a, b) => a !== b && stateOf(a) === code && stateOf(b) === code && regionKey.get(indexOf.get(a)) !== regionKey.get(indexOf.get(b)))
      .coordinates.map(flat),
  ])
);
const coast = Object.fromEntries(
  CODES.map((code) => {
    // A province's edge: its outer edge (other provinces in the game are in the same topology)
    if (isCanadian(code)) return [code, tc.mesh(canTopo, collection(canRegions), (a, b) => a === b && stateOf(a) === code).coordinates.map(flat)];
    const mine = new Set(fipsList(code));
    const lines = tc.mesh(topo, collection(allCounties), (a, b) => {
      const fa = fipsOf(a), fb = fipsOf(b);
      if (a === b) return mine.has(fa);
      return (mine.has(fa) && !inGame.has(fb)) || (mine.has(fb) && !inGame.has(fa));
    });
    return [code, lines.coordinates.map(flat)];
  })
);
// Borders between two states in the game: listed in both states' packs, with the same id.
const stateBorders = Object.fromEntries(CODES.map((code) => [code, []]));
for (let i = 0; i < CODES.length; i++)
  for (let j = i + 1; j < CODES.length; j++) {
    const [A, B] = [CODES[i], CODES[j]].sort();
    if (sourceOf(A) !== sourceOf(B)) continue; // between maps from different sources: found by distance, below
    const lines = tc.mesh(topoOf(A), collection(geomsOf(A)), (a, b) => (stateOf(a) === A && stateOf(b) === B) || (stateOf(a) === B && stateOf(b) === A)).coordinates;
    lines.forEach((line, k) => {
      const item = { id: `${A}-${B}-${k}`, line: flat(line) };
      stateBorders[A].push(item);
      stateBorders[B].push(item);
    });
  }

// A flat ring's area (square degrees)
const flatArea = (r) => {
  let a = 0;
  for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) a += (r[j] - r[i]) * (r[j + 1] + r[i + 1]);
  return a / 2;
};
// One label point per region: the centroid of its largest piece.
const cosLat = Math.cos((40 * Math.PI) / 180);
function centroid(ring) {
  let a = 0;
  let cx = 0;
  let cy = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [x0, y0] = [ring[j][0] * cosLat, ring[j][1]];
    const [x1, y1] = [ring[i][0] * cosLat, ring[i][1]];
    const f = x0 * y1 - x1 * y0;
    a += f;
    cx += (x0 + x1) * f;
    cy += (y0 + y1) * f;
  }
  return { area: Math.abs(a / 2), lon: cx / (3 * a) / cosLat, lat: cy / (3 * a) };
}
// A label spot inside a polygon (with its holes): its centroid when that's inside; otherwise (a
// bent region like Ontario's Algoma, which wraps around part of Sudbury District) the inside
// point on a grid that is farthest from the polygon's edges.
function insideSpot(poly, best) {
  const inPoly = (x, y) => poly.reduce((s, ring) => {
    let c = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i], [xj, yj] = ring[j];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
    }
    return c ? !s : s;
  }, false);
  if (inPoly(best.lon, best.lat)) return best;
  const xs = poly[0].map((p) => p[0]), ys = poly[0].map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const edge = (x, y) => {
    let d = Infinity;
    for (const ring of poly)
      for (let i = 1; i < ring.length; i++) {
        const [ax, ay] = ring[i - 1], [bx, by] = ring[i];
        const dx = (bx - ax) * cosLat, dy = by - ay, px = (x - ax) * cosLat, py = y - ay;
        const t = Math.max(0, Math.min(1, (px * dx + py * dy) / (dx * dx + dy * dy || 1)));
        d = Math.min(d, Math.hypot(px - t * dx, py - t * dy));
      }
    return d;
  };
  let spot = best, far = -1;
  for (let a = 0; a < 30; a++)
    for (let b = 0; b < 30; b++) {
      const x = x0 + ((a + 0.5) * (x1 - x0)) / 30, y = y0 + ((b + 0.5) * (y1 - y0)) / 30;
      if (!inPoly(x, y)) continue;
      const d = edge(x, y);
      if (d > far) (far = d), (spot = { ...best, lon: x, lat: y });
    }
  return spot;
}
const regions = [...regionInfo.entries()]
  .sort((a, b) => (a[1].state === b[1].state ? a[1].name.localeCompare(b[1].name) : CODES.indexOf(a[1].state) - CODES.indexOf(b[1].state)))
  .map(([id, info]) => {
    const shape = tc.merge(topoOf(info.state), info.members.map((i) => counties[i]));
    const biggest = shape.coordinates.map((poly) => ({ poly, c: centroid(poly[0]) })).sort((a, b) => b.c.area - a.c.area)[0];
    const best = insideSpot(biggest.poly, biggest.c);
    const near = new Set();
    info.members.forEach((i) => neighbors[i].forEach((j) => near.add(regionKey.get(j))));
    const cfg = STATES[info.state];
    // Bridges and ferries that count as borders. A name may be another state's ("NB:Westmorland"):
    // such a link counts only once that state is in the game too.
    const where = (name) => {
      const m = name.match(/^([A-Z]{2}):(.*)$/);
      if (!m) return regionKey.get(find(info.state, name));
      return CODES.includes(m[1]) ? regionKey.get(find(m[1], m[2])) : null;
    };
    const links = [...(cfg.bridges || []), ...Object.entries(STATES).filter(([code]) => code !== info.state && CODES.includes(code)).flatMap(([code, other]) => (other.bridges || []).filter(([x, y]) => /^[A-Z]{2}:/.test(x) || /^[A-Z]{2}:/.test(y)).map(([x, y]) => [/^[A-Z]{2}:/.test(x) ? x : `${code}:${x}`, /^[A-Z]{2}:/.test(y) ? y : `${code}:${y}`]))];
    for (const [a, b] of links) {
      const ra = where(a);
      const rb = where(b);
      if (!ra || !rb) continue;
      if (ra === id) near.add(rb);
      if (rb === id) near.add(ra);
    }
    near.delete(id);
    return {
      id,
      name: info.name,
      state: info.state,
      fips: info.members.map((i) => String(counties[i].id)).sort(),
      label: [Math.round(best.lon * 100) / 100, Math.round(best.lat * 100) / 100],
      neighbors: [...near].sort(),
      // (rings with no area are slivers where merged members' borders meet: left out)
      rings: shape.coordinates.flatMap((poly) => poly.map(flat)).filter((ring) => Math.abs(flatArea(ring)) > 1e-6),
    };
  });

// ---------- Borders between the two countries ----------
// The US map and a province's map share no points. Where a state's edge runs within NEAR of a
// province's land, that stretch is their border: it leaves both edges (coasts), the US side's line
// becomes the border (listed in both packs, like any border between two states in the game), and
// the regions on either side of it become neighbors.
const NEAR = 0.012; // degrees: about a kilometre
// Is a point within tol of any of these rings' edges? (a grid of the edges, for speed)
function edgeGrid(rings) {
  const cell = 0.05;
  const grid = new Map();
  for (const r of rings)
    for (let i = 0; i + 3 < r.length; i += 2) {
      const s = [r[i], r[i + 1], r[i + 2], r[i + 3]];
      for (let x = Math.floor(Math.min(s[0], s[2]) / cell); x <= Math.floor(Math.max(s[0], s[2]) / cell); x++)
        for (let y = Math.floor(Math.min(s[1], s[3]) / cell); y <= Math.floor(Math.max(s[1], s[3]) / cell); y++) {
          const k = `${x},${y}`;
          if (!grid.has(k)) grid.set(k, []);
          grid.get(k).push(s);
        }
    }
  const dist = (x, y, s) => {
    const k = Math.cos((y * Math.PI) / 180); // longitude degrees are shorter in the north
    const ax = s[0] * k, ay = s[1], bx = s[2] * k, by = s[3], px = x * k;
    const dx = bx - ax, dy = by - ay, len = dx * dx + dy * dy;
    const t = len ? Math.max(0, Math.min(1, ((px - ax) * dx + (y - ay) * dy) / len)) : 0;
    return Math.hypot(px - ax - t * dx, y - ay - t * dy);
  };
  return (x, y, tol) => {
    const cx = Math.floor(x / cell), cy = Math.floor(y / cell);
    for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const s of grid.get(`${cx + i},${cy + j}`) || []) if (dist(x, y, s) < tol) return true;
    return false;
  };
}
// Points along a flat ring or line, at least every step degrees (straight borders like the 49th
// parallel have only their two ends)
function* along(ring, step) {
  for (let i = 0; i + 3 < ring.length; i += 2) {
    const n = Math.max(1, Math.ceil(Math.hypot(ring[i + 2] - ring[i], ring[i + 3] - ring[i + 1]) / step));
    for (let k = 0; k < n; k++) yield [ring[i] + ((ring[i + 2] - ring[i]) * k) / n, ring[i + 1] + ((ring[i + 3] - ring[i + 1]) * k) / n];
  }
}
// Split lines into the stretches near the other land and the rest. Lines are tested at points
// every 0.02° along them, not just at their corners: one straight stretch of the 49th parallel can
// run along two states (Saskatchewan's, from Montana into North Dakota), and is split where it
// leaves each. The extra points are dropped again, except where a stretch ends.
function splitNear(lines, near) {
  const out = { near: [], far: [] };
  for (const line of lines) {
    const pts = [], corner = [];
    for (let i = 0; i + 3 < line.length; i += 2) {
      const n = Math.max(1, Math.ceil(Math.hypot(line[i + 2] - line[i], line[i + 3] - line[i + 1]) / 0.02));
      for (let k = 0; k < n; k++) {
        pts.push(Math.round((line[i] + ((line[i + 2] - line[i]) * k) / n) * 1000) / 1000, Math.round((line[i + 1] + ((line[i + 3] - line[i + 1]) * k) / n) * 1000) / 1000);
        corner.push(k === 0);
      }
    }
    pts.push(line[line.length - 2], line[line.length - 1]);
    corner.push(true);
    const n = pts.length / 2;
    const close = Array.from({ length: n }, (_, i) => near(pts[2 * i], pts[2 * i + 1], NEAR));
    const seg = Array.from({ length: n - 1 }, (_, k) => close[k] && close[k + 1]);
    let k0 = 0;
    for (let k = 1; k <= seg.length; k++)
      if (k === seg.length || seg[k] !== seg[k0]) {
        const piece = [];
        for (let i = k0; i <= k; i++) if (corner[i] || i === k0 || i === k) piece.push(pts[2 * i], pts[2 * i + 1]);
        (seg[k0] ? out.near : out.far).push(piece);
        k0 = k;
      }
  }
  return out;
}
// Regions count as neighbors across such a border within NEIGHBOR of each other (a little more
// than NEAR: rivers like the Detroit and St. Clair separate the two maps' shores)
const NEIGHBOR = 0.03;
const crossPairs = [];
for (let i = 0; i < CODES.length; i++) for (let j = i + 1; j < CODES.length; j++) if (sourceOf(CODES[i]) !== sourceOf(CODES[j])) crossPairs.push([CODES[i], CODES[j]]);
// Bounding boxes, to skip pairs nowhere near each other
const ringBox = (rings) => {
  const b = [Infinity, Infinity, -Infinity, -Infinity];
  for (const r of rings) for (let i = 0; i < r.length; i += 2) (b[0] = Math.min(b[0], r[i])), (b[1] = Math.min(b[1], r[i + 1])), (b[2] = Math.max(b[2], r[i])), (b[3] = Math.max(b[3], r[i + 1]));
  return b;
};
const boxNear = (p, q, d) => p[0] - d < q[2] && q[0] - d < p[2] && p[1] - d < q[3] && q[1] - d < p[3];
for (const [A, B] of crossPairs) {
  if (!boxNear(ringBox(stateLand[A]), ringBox(stateLand[B]), NEIGHBOR)) continue;
    const nearB = edgeGrid(stateLand[B]);
    const a = splitNear(coast[A], nearB);
    coast[A] = a.far;
    coast[B] = splitNear(coast[B], edgeGrid(stateLand[A])).far;
    const [X, Y] = [A, B].sort();
    a.near.forEach((line, k) => {
      const item = { id: `${X}-${Y}-${k}`, line };
      stateBorders[A].push(item);
      stateBorders[B].push(item);
    });
    for (const s of regions.filter((x) => x.state === B)) {
      const nearS = edgeGrid(s.rings);
      for (const r of regions.filter((x) => x.state === A)) {
        let hits = 0;
        if (!boxNear(ringBox(r.rings), ringBox(s.rings), NEIGHBOR)) continue;
        for (const ring of r.rings) for (const [x, y] of along(ring, 0.02)) if (hits < 2 && nearS(x, y, NEIGHBOR)) hits++;
        if (hits < 2) continue;
        r.neighbors = [...new Set([...r.neighbors, s.id])].sort();
        s.neighbors = [...new Set([...s.neighbors, r.id])].sort();
      }
    }
    if (a.near.length) console.log(`${A}–${B} border: ${a.near.length} lines, ${a.near.reduce((n, l) => n + l.length / 2, 0)} points`);
  }

// ---------- Every state (and Mexico and Canada): rough outlines, for packs/index.js ----------
const POSTAL = {
  "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL", "13": "GA", "15": "HI", "16": "ID",
  "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME", "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS", "29": "MO",
  "30": "MT", "31": "NE", "32": "NV", "33": "NH", "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH", "40": "OK", "41": "OR", "42": "PA",
  "44": "RI", "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI", "56": "WY",
};
// Douglas-Peucker on one ring of [x, y] points (the ring is closed: first point = last).
function simplify(pts, tol) {
  if (pts.length < 4) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  // Split a closed ring at its farthest point from the start, so both halves simplify well.
  let far = 0;
  for (let i = 1; i < pts.length - 1; i++) if (Math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1]) > Math.hypot(pts[far][0] - pts[0][0], pts[far][1] - pts[0][1])) far = i;
  keep[far] = 1;
  const stack = [
    [0, far],
    [far, pts.length - 1],
  ];
  while (stack.length) {
    const [a, b] = stack.pop();
    let best = -1, dist = 0;
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy);
    for (let i = a + 1; i < b; i++) {
      const d = len ? Math.abs(dx * (ay - pts[i][1]) - dy * (ax - pts[i][0])) / len : Math.hypot(pts[i][0] - ax, pts[i][1] - ay);
      if (d > dist) (dist = d), (best = i);
    }
    if (dist > tol) {
      keep[best] = 1;
      stack.push([a, best], [best, b]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}
// Rough outlines: simplified, leaving out islands smaller than about 0.01 square degrees
// (roughly 30 square miles), which don't matter for clouds or for telling land from sea.
const roughRings = (polys, tol) =>
  polys
    .flat()
    .filter((ring) => {
      const xs = ring.map((p) => p[0]), ys = ring.map((p) => p[1]);
      return (Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys)) >= 0.01;
    })
    .map((ring) => simplify(ring, tol))
    .filter((ring) => ring.length >= 4)
    // Alaska's westernmost islands lie past the date line: put them just west of -180°
    .map((ring) => flat(ring.map(([x, y]) => [Math.round((x > 0 ? x - 360 : x) * 100) / 100, Math.round(y * 100) / 100])))
    .filter((ring) => ring.length >= 8);
const boxOf = (rings) => {
  const b = [Infinity, Infinity, -Infinity, -Infinity];
  rings.forEach((ring) => {
    for (let i = 0; i < ring.length; i += 2) {
      b[0] = Math.min(b[0], ring[i]);
      b[1] = Math.min(b[1], ring[i + 1]);
      b[2] = Math.max(b[2], ring[i]);
      b[3] = Math.max(b[3], ring[i + 1]);
    }
  });
  return b.map((v) => Math.round(v * 100) / 100);
};
const statesTopo = JSON.parse(fs.readFileSync(path.join(MODULES, "us-atlas", "states-10m.json"), "utf8"));
const stateGeoms = statesTopo.objects.states.geometries.filter((g) => POSTAL[g.id]);
const stateNear = tc.neighbors(stateGeoms);
// A state that is part of another state's pack (DC, in Maryland's) has no outline of its own
const partOf = Object.fromEntries(Object.entries(STATES).flatMap(([code, cfg]) => [].concat(cfg.fips || []).slice(1).map((f) => [POSTAL[f], code])));
const areas = stateGeoms.filter((g) => !partOf[POSTAL[g.id]]).map((g) => {
  const i = stateGeoms.indexOf(g);
  const geom = tc.feature(statesTopo, g).geometry;
  const outline = roughRings(geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates, POSTAL[g.id] === "AK" ? 0.03 : 0.01);
  // (two pieces of the same state can touch, so leave the state itself out)
  const near = [...new Set(stateNear[i].filter((j) => j !== i).map((j) => partOf[POSTAL[stateGeoms[j].id]] || POSTAL[stateGeoms[j].id]))].filter((code) => code !== POSTAL[g.id]).sort();
  return { code: POSTAL[g.id], name: g.properties.name, country: "USA", box: boxOf(outline), neighbors: near, outline };
});
// Mexico, from Natural Earth (public domain), 1:50m
const neFile = path.join(CACHE, "ne", "ne_50m_admin_0_countries.geojson");
if (!fs.existsSync(neFile)) {
  fs.mkdirSync(path.dirname(neFile), { recursive: true });
  execFileSync("curl", ["-sS", "-f", "-m", "120", "--retry", "3", "-o", neFile, "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson"]);
}
for (const f of JSON.parse(fs.readFileSync(neFile, "utf8")).features) {
  const code = { MEX: "MEX" }[f.properties.ADM0_A3];
  if (!code) continue;
  const outline = roughRings(f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates, 0.02);
  areas.push({ code, name: f.properties.NAME, country: code, box: boxOf(outline), neighbors: [], outline });
}
// Canada's provinces and territories ("BC", "AB"...), from Natural Earth (public domain), 1:50m
const ne1File = download(
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_1_states_provinces.geojson",
  path.join(CACHE, "ne", "ne_50m_admin_1_states_provinces.geojson")
);
for (const f of JSON.parse(fs.readFileSync(ne1File, "utf8")).features) {
  if (f.properties.adm0_a3 !== "CAN") continue;
  const outline = roughRings(f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates, 0.03);
  areas.push({ code: f.properties.postal, name: f.properties.name_en || f.properties.name, country: "CAN", box: boxOf(outline), neighbors: [], outline });
}
// Neighbors across the US–Canada border, and between provinces: outlines within about 10 km of
// each other along at least 3 points (the outlines are rough, and come from different sources)
{
  const TOL = 0.1;
  const can = areas.filter((a) => a.country === "CAN");
  const near = (a, b) => a.box[0] - TOL < b.box[2] && b.box[0] - TOL < a.box[2] && a.box[1] - TOL < b.box[3] && b.box[1] - TOL < a.box[3];
  for (const b of can) {
    const close = edgeGrid(b.outline);
    for (const a of areas.filter((x) => x !== b && (x.country === "USA" || (x.country === "CAN" && x.code < b.code)) && near(x, b))) {
      // (and along at least about 30 km: Manitoba and the Northwest Territories meet at one point)
      let hits = 0, x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const ring of a.outline)
        for (const [x, y] of along(ring, 0.05))
          if (close(x, y, TOL)) (hits++), (x0 = Math.min(x0, x)), (x1 = Math.max(x1, x)), (y0 = Math.min(y0, y)), (y1 = Math.max(y1, y));
      if (hits < 3 || Math.max((x1 - x0) * Math.cos((y0 * Math.PI) / 180), y1 - y0) < 0.3) continue;
      a.neighbors = [...new Set([...a.neighbors, b.code])].sort();
      b.neighbors = [...new Set([...b.neighbors, a.code])].sort();
    }
  }
}
// A bridge or ferry listed between two states or provinces (the Confederation Bridge, the ferries
// to Prince Edward Island and Newfoundland) makes them neighbours too, so one opens from the other
for (const [code, cfg] of Object.entries(STATES))
  for (const pair of cfg.bridges || [])
    for (const name of pair) {
      const m = name.match(/^([A-Z]{2}):/);
      const a = areas.find((x) => x.code === code), b = m && areas.find((x) => x.code === m[1]);
      if (!a || !b || a === b) continue;
      a.neighbors = [...new Set([...a.neighbors, b.code])].sort();
      b.neighbors = [...new Set([...b.neighbors, a.code])].sort();
    }
// And two states or provinces in the game whose regions are neighbours are neighbours (Nunavut and
// Labrador share a short border on Killiniq Island, too short for the outline test above)
for (const r of regions)
  for (const n of r.neighbors) {
    const other = regions.find((q) => q.id === n);
    const a = other && areas.find((x) => x.code === r.state), b = other && areas.find((x) => x.code === other.state);
    if (!a || !b || a === b) continue;
    a.neighbors = [...new Set([...a.neighbors, b.code])].sort();
    b.neighbors = [...new Set([...b.neighbors, a.code])].sort();
  }
areas.sort((a, b) => a.code.localeCompare(b.code));

// ---------- Write ----------
const header = (what, canadian) =>
  [
    `// National Railways: ${what}.`,
    canadian
      ? "// Generated by tools/build-map.js from the province's census divisions (see CANADA in the tool),\n// Statistics Canada's 2021 Census and Natural Earth outlines. Do not edit by hand: change the tool and run it again."
      : "// Generated by tools/build-map.js from U.S. Census Bureau county boundaries (us-atlas 3.0.1)\n// and Natural Earth country outlines. Do not edit by hand: change the tool and run it again.",
    "// Rings and lines are flat lists of longitude, latitude pairs.",
  ].join("\n");
const lines = (list, indent) => list.map((x) => indent + JSON.stringify(x)).join(",\n");
for (const code of CODES) {
  const mine = regions.filter((r) => r.state === code);
  const text = `${header(`map of ${STATES[code].name} (its ${isCanadian(code) ? "census division" : "county"} regions, land, coast and borders)`, isCanadian(code))}
NR.addPackMap({
  code: "${code}",
  regions: [
${lines(mine, "    ")}
  ],
  land: [
${lines(stateLand[code], "    ")}
  ],
  coast: [
${lines(coast[code], "    ")}
  ],
  borders: [
${lines(borders[code], "    ")}
  ],
  stateBorders: [
${lines(stateBorders[code], "    ")}
  ],
});
`;
  const out = path.join(__dirname, "..", "packs", code, "map.js");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, text);
  console.log(`Wrote packs/${code}/map.js: ${counties.filter((g) => stateOf(g) === code).length} ${isCanadian(code) ? "census divisions" : "counties"} → ${mine.length} regions, ${Math.round(fs.statSync(out).size / 1024)} KB`);
}
const indexText = `${header("every state, Mexico, and Canada's provinces and territories: rough outlines, neighbors and names")}
// Used for the clouds over land that isn't open, and to tell land from sea outside the game.
NR.addAreas([
${lines(areas, "  ")}
]);
`;
fs.writeFileSync(path.join(__dirname, "..", "packs", "index.js"), indexText);
console.log(`Wrote packs/index.js: ${areas.length} areas, ${Math.round(Buffer.byteLength(indexText) / 1024)} KB`);
for (const r of regions) if (r.fips.length > 1 && r.state !== "CA") console.log(`  merged: ${r.name}`);
