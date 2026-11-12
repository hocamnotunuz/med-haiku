// National Railways pack: Quebec (Canada, so its money is Maple Coins).
// Everything hand-made for one province: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The census division borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/QC/NOTES.md. Cities and populations: Statistics Canada (2021), packs/QC/raw.
NR.addPack({
  code: "QC",
  name: "Quebec",
  country: "CAN",
  // A game that starts here begins owning Montréal, Laval and Vaudreuil-Soulanges: both touch
  // Montréal. Montréal and Laval are metro, and Vaudreuil-Dorion is coast (the peninsula between
  // the Lake of Two Mountains and Lac Saint-Louis), so the first track has riders. Longueuil, across
  // the St. Lawrence, is the obvious first region to buy.
  start: ["qc-montreal", "qc-laval", "qc-vaudreuil-soulanges"],
  // Main stations: one per region, at its biggest town (exceptions are explained).
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = the region's population in thousands (2021 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  // scenic = a place tourists travel to.
  stations: [
    // Level 1: Montréal and its suburbs
    // Montréal: downtown, by Gare Centrale (the raw city point, 45.51, -73.55, is in Old Montréal).
    { id: "MTL", name: "Montréal", county: "qc-montreal", lat: 45.5, lon: -73.57, port: "Port of Montréal", airport: "Montréal–Trudeau International", type: "metro", size: 5, pop: 2004, main: true, level: "montreal" },
    // Laval: at its downtown by the Montmorency métro station (the raw point, 45.55, -73.74, is in Chomedey).
    { id: "LAV", name: "Laval", county: "qc-laval", lat: 45.56, lon: -73.72, type: "metro", size: 4, pop: 438, main: true, level: "montreal" },
    // Longueuil: Vieux-Longueuil, facing Montréal across the Jacques-Cartier bridge (the raw point,
    // 45.51, -73.43, is the middle of the merged city, in Saint-Hubert); 1 km east of the métro so it
    // stands 4 miles from Montréal's station.
    { id: "LGL", name: "Longueuil", county: "qc-longueuil", lat: 45.54, lon: -73.5, type: "metro", size: 4, pop: 437, main: true, level: "montreal" },
    { id: "CHG", name: "Châteauguay", county: "qc-roussillon", lat: 45.36, lon: -73.75, type: "metro", size: 2, pop: 186, main: true, level: "montreal" },
    // Vaudreuil-Dorion: the peninsula between the Lake of Two Mountains and Lac Saint-Louis, so coast.
    { id: "VDR", name: "Vaudreuil-Dorion", county: "qc-vaudreuil-soulanges", lat: 45.4, lon: -74.04, type: "coast", size: 2, pop: 163, main: true, level: "montreal" },
    // Terrebonne: Vieux-Terrebonne on the Rivière des Mille Îles, moved 1 km north onto land (the raw
    // point, 45.69, -73.63, is in the river).
    { id: "TBN", name: "Terrebonne", county: "qc-les-moulins", lat: 45.7, lon: -73.64, type: "metro", size: 2, pop: 171, main: true, level: "montreal" },
    { id: "BLN", name: "Blainville", county: "qc-therese-de-blainville", lat: 45.68, lon: -73.87, type: "metro", size: 2, pop: 164, main: true, level: "montreal" },
    { id: "SEU", name: "Saint-Eustache", county: "qc-deux-montagnes", lat: 45.56, lon: -73.89, type: "metro", size: 2, pop: 102, main: true, level: "montreal" },
    { id: "RPG", name: "Repentigny", county: "qc-l-assomption", lat: 45.74, lon: -73.45, type: "metro", size: 2, pop: 128, main: true, level: "montreal" },
    // Sainte-Julie: the suburb of a farm region (Varennes, Verchères, Saint-Amable), so farm.
    { id: "SJL", name: "Sainte-Julie", county: "qc-marguerite-d-youville", lat: 45.59, lon: -73.33, type: "farm", size: 1, pop: 80, main: true, level: "montreal" },
    { id: "CHB", name: "Chambly", county: "qc-la-vallee-du-richelieu", lat: 45.45, lon: -73.29, type: "metro", size: 2, pop: 132, main: true, level: "montreal" },
    // Mirabel: one big municipality, mostly the farmland around its airport, so farm.
    { id: "MIR", name: "Mirabel", county: "qc-mirabel", lat: 45.66, lon: -74.0, type: "farm", size: 1, pop: 61, main: true, level: "montreal" },
    // Level 2: Montérégie, the Eastern Townships and Centre-du-Québec
    // Salaberry-de-Valleyfield: on Lac Saint-François and the Beauharnois Canal, so coast.
    { id: "VLF", name: "Salaberry-de-Valleyfield", county: "qc-beauharnois-salaberry", lat: 45.26, lon: -74.13, type: "coast", size: 1, pop: 68, main: true, level: "south" },
    { id: "SRM", name: "Saint-Rémi", county: "qc-le-haut-saint-laurent-les-jardins-de-napierville", lat: 45.26, lon: -73.61, type: "farm", size: 1, pop: 53, main: true, level: "south" },
    { id: "SJR", name: "Saint-Jean-sur-Richelieu", county: "qc-le-haut-richelieu", lat: 45.31, lon: -73.25, type: "metro", size: 2, pop: 121, main: true, level: "south" },
    { id: "CWV", name: "Cowansville", county: "qc-brome-missisquoi-rouville", lat: 45.2, lon: -72.74, type: "farm", size: 1, pop: 103, main: true, level: "south" },
    { id: "GBY", name: "Granby", county: "qc-la-haute-yamaska", lat: 45.4, lon: -72.72, type: "metro", size: 2, pop: 93, main: true, level: "south" },
    // Saint-Hyacinthe: Quebec's agri-food capital (its agricultural technopole and the veterinary
    // school), so farm, like Guelph in Ontario.
    { id: "SHY", name: "Saint-Hyacinthe", county: "qc-acton-les-maskoutains", lat: 45.63, lon: -72.95, type: "farm", size: 2, pop: 105, main: true, level: "south" },
    // Sorel-Tracy: at the mouth of the Richelieu on the St. Lawrence (shipyards, the Sorel islands), so coast.
    { id: "SOR", name: "Sorel-Tracy", county: "qc-pierre-de-saurel", lat: 46.04, lon: -73.11, type: "coast", size: 1, pop: 52, main: true, level: "south" },
    { id: "DRU", name: "Drummondville", county: "qc-drummond", lat: 45.88, lon: -72.48, type: "metro", size: 2, pop: 108, main: true, level: "south" },
    { id: "SHE", name: "Sherbrooke", county: "qc-sherbrooke", lat: 45.4, lon: -71.89, type: "metro", size: 2, pop: 173, main: true, level: "south" },
    // Magog: on Lac Memphrémagog at the foot of Mont Orford, in the Townships' hills, so mountain.
    { id: "MAG", name: "Magog", county: "qc-coaticook-memphremagog", lat: 45.27, lon: -72.15, type: "mountain", size: 1, pop: 74, main: true, level: "south" },
    // Val-des-Sources (Asbestos until 2020): the town by the old Jeffrey mine, in farm country.
    { id: "VDS", name: "Val-des-Sources", county: "qc-le-val-saint-francois-les-sources", lat: 45.78, lon: -71.94, type: "farm", size: 1, pop: 46, main: true, level: "south" },
    // Lac-Mégantic: by Mont Mégantic, in the Appalachian forest, so mountain.
    { id: "LMG", name: "Lac-Mégantic", county: "qc-le-granit-le-haut-saint-francois", lat: 45.57, lon: -70.88, type: "mountain", size: 1, pop: 45, main: true, level: "south" },
    // Victoriaville: the Bois-Francs' city (dairy and maple country), so farm.
    { id: "VTV", name: "Victoriaville", county: "qc-arthabaska", lat: 46.06, lon: -71.96, type: "farm", size: 1, pop: 74, main: true, level: "south" },
    { id: "BEC", name: "Bécancour", county: "qc-becancour-nicolet-yamaska", lat: 46.35, lon: -72.43, type: "farm", size: 1, pop: 45, main: true, level: "south" },
    // Thetford Mines: the asbestos-mining town in the Appalachian hills, so mountain.
    { id: "THM", name: "Thetford Mines", county: "qc-les-appalaches", lat: 46.09, lon: -71.3, type: "mountain", size: 1, pop: 43, main: true, level: "south" },
    // Level 3: the Laurentians, Lanaudière, the Outaouais, Mauricie and Abitibi
    { id: "SJM", name: "Saint-Jérôme", county: "qc-la-riviere-du-nord", lat: 45.78, lon: -74.0, type: "metro", size: 2, pop: 140, main: true, level: "west" },
    // Saint-Lin–Laurentides: the biggest town (population centre 15,768; the raw city point has no
    // population, and the same population centre is wrongly copied onto points elsewhere).
    { id: "SLL", name: "Saint-Lin–Laurentides", county: "qc-montcalm", lat: 45.85, lon: -73.76, type: "farm", size: 1, pop: 59, main: true, level: "west" },
    { id: "JOL", name: "Joliette", county: "qc-joliette", lat: 46.02, lon: -73.44, type: "farm", size: 1, pop: 71, main: true, level: "west" },
    // Rawdon: the gateway to Lanaudière's Laurentian lakes and forests, so mountain.
    { id: "RWD", name: "Rawdon", county: "qc-matawinie", lat: 46.04, lon: -73.71, type: "mountain", size: 1, pop: 56, main: true, level: "west" },
    { id: "LVT", name: "Lavaltrie", county: "qc-d-autray-maskinonge", lat: 45.88, lon: -73.28, type: "farm", size: 1, pop: 81, main: true, level: "west" },
    // Sainte-Adèle: the Laurentians' ski and resort country, so mountain.
    { id: "SAD", name: "Sainte-Adèle", county: "qc-les-laurentides-les-pays-d-en-haut", lat: 45.96, lon: -74.14, type: "mountain", size: 1, pop: 98, main: true, level: "west" },
    { id: "LCH", name: "Lachute", county: "qc-argenteuil-papineau", lat: 45.66, lon: -74.34, type: "farm", size: 1, pop: 59, main: true, level: "west" },
    // Gatineau: at Hull, across the Ottawa River from Parliament Hill.
    { id: "GAT", name: "Gatineau", county: "qc-gatineau", lat: 45.43, lon: -75.71, type: "metro", size: 3, pop: 291, main: true, level: "west" },
    // Val-des-Monts: the biggest municipality (13,328), in the Gatineau Hills, so mountain.
    { id: "VDM", name: "Val-des-Monts", county: "qc-les-collines-de-l-outaouais-pontiac", lat: 45.66, lon: -75.73, type: "mountain", size: 1, pop: 69, main: true, level: "west" },
    { id: "MLR", name: "Mont-Laurier", county: "qc-antoine-labelle-la-vallee-de-la-gatineau", lat: 46.55, lon: -75.5, type: "mountain", size: 1, pop: 57, main: true, level: "west" },
    { id: "TR", name: "Trois-Rivières", county: "qc-francheville", lat: 46.34, lon: -72.55, type: "metro", size: 2, pop: 158, main: true, level: "west" },
    // Shawinigan: the hydro and aluminium city at the gate of La Mauricie, whose region runs up the
    // Saint-Maurice into the forest of the Haute-Mauricie, so mountain.
    { id: "SHW", name: "Shawinigan", county: "qc-la-tuque-mekinac-shawinigan", lat: 46.54, lon: -72.75, type: "mountain", size: 1, pop: 77, main: true, level: "west" },
    // Rouyn-Noranda and Val-d'Or: copper and gold mining towns in the boreal forest, so mountain.
    { id: "RYN", name: "Rouyn-Noranda", county: "qc-rouyn-noranda-temiscamingue", lat: 48.24, lon: -79.02, type: "mountain", size: 1, pop: 58, main: true, level: "west" },
    { id: "VDO", name: "Val-d'Or", county: "qc-la-vallee-de-l-or", lat: 48.1, lon: -77.79, type: "mountain", size: 1, pop: 43, main: true, level: "west" },
    // Amos: the farm town of Abitibi's clay belt, so farm (like Temiskaming Shores in Ontario).
    { id: "AMS", name: "Amos", county: "qc-abitibi-abitibi-ouest", lat: 48.56, lon: -78.11, type: "farm", size: 1, pop: 45, main: true, level: "west" },
    // Chibougamau: the mining and forestry town at the southern edge of the far north.
    { id: "CBM", name: "Chibougamau", county: "qc-nord-du-quebec", lat: 49.91, lon: -74.37, type: "mountain", size: 1, pop: 46, main: true, level: "west" },
    // Level 4: Québec City and the East
    // Québec: the old city, a UNESCO World Heritage Site, so scenic.
    { id: "QUE", name: "Québec", county: "qc-quebec", lat: 46.81, lon: -71.21, port: "Port of Québec", airport: "Québec City Jean Lesage International", scenic: true, type: "metro", size: 4, pop: 589, main: true, level: "east" },
    // Lévis: the raw city point (46.76, -71.24) is the middle of the merged city, at Saint-Romuald by
    // the bridges; moved 1 km south so it isn't on top of Québec (Vieux-Lévis faces the old city).
    { id: "LEV", name: "Lévis", county: "qc-levis", lat: 46.75, lon: -71.24, type: "metro", size: 2, pop: 150, main: true, level: "east" },
    // Saint-Raymond: at the foot of the Laurentians (the Bras-du-Nord valley), so mountain.
    { id: "SRY", name: "Saint-Raymond", county: "qc-la-jacques-cartier-portneuf", lat: 46.89, lon: -71.83, type: "mountain", size: 1, pop: 103, main: true, level: "east" },
    // Beaupré rather than Boischatel: Boischatel (8,231) is a suburb inside Québec's population
    // centre; Beaupré's population centre (6,342, with Sainte-Anne-de-Beaupré) is the region's
    // biggest town. Mont-Sainte-Anne rises behind it, so mountain.
    { id: "BPR", name: "Beaupré", county: "qc-l-ile-d-orleans-la-cote-de-beaupre", lat: 47.04, lon: -70.9, type: "mountain", size: 1, pop: 37, main: true, level: "east" },
    // La Malbaie: the old resort on the St. Lawrence (the Manoir Richelieu), so coast.
    { id: "LMB", name: "La Malbaie", county: "qc-charlevoix-charlevoix-est", lat: 47.65, lon: -70.15, type: "coast", size: 1, pop: 29, main: true, level: "east" },
    { id: "SNH", name: "Saint-Henri", county: "qc-bellechasse-les-etchemins", lat: 46.7, lon: -71.07, type: "farm", size: 1, pop: 55, main: true, level: "east" },
    { id: "SMR", name: "Sainte-Marie", county: "qc-la-nouvelle-beauce-robert-cliche", lat: 46.44, lon: -71.02, type: "farm", size: 1, pop: 57, main: true, level: "east" },
    // Saint-Georges: the Beauce's city, in maple and dairy country, so farm.
    { id: "SGE", name: "Saint-Georges", county: "qc-beauce-sartigan", lat: 46.12, lon: -70.67, type: "farm", size: 1, pop: 53, main: true, level: "east" },
    // Plessisville rather than Saint-Apollinaire (7,968): Plessisville's population centre (7,028)
    // is the biggest town; Saint-Apollinaire's is 4,933.
    { id: "PLS", name: "Plessisville", county: "qc-l-erable-lotbiniere", lat: 46.22, lon: -71.77, type: "farm", size: 1, pop: 58, main: true, level: "east" },
    // Montmagny: on the St. Lawrence (the snow geese, the ferry to Isle-aux-Grues), so coast.
    { id: "MMG", name: "Montmagny", county: "qc-kamouraska-l-islet-montmagny", lat: 46.98, lon: -70.56, type: "coast", size: 1, pop: 61, main: true, level: "east" },
    { id: "RDL", name: "Rivière-du-Loup", county: "qc-les-basques-riviere-du-loup-temiscouata", lat: 47.84, lon: -69.54, type: "coast", size: 1, pop: 64, main: true, level: "east" },
    { id: "RIM", name: "Rimouski", county: "qc-rimouski-neigette", lat: 48.45, lon: -68.53, type: "coast", size: 1, pop: 57, main: true, level: "east" },
    // Mont-Joli: at the head of the Matapédia valley, among La Mitis' farms, so farm.
    { id: "MJL", name: "Mont-Joli", county: "qc-la-matapedia-la-mitis", lat: 48.59, lon: -68.19, type: "farm", size: 1, pop: 36, main: true, level: "east" },
    { id: "MTN", name: "Matane", county: "qc-la-haute-gaspesie-la-matanie", lat: 48.84, lon: -67.53, type: "coast", size: 1, pop: 32, main: true, level: "east" },
    { id: "GSP", name: "Gaspé", county: "qc-la-cote-de-gaspe-le-rocher-perce", lat: 48.82, lon: -64.48, type: "coast", size: 1, pop: 35, main: true, level: "east" },
    // Carleton-sur-Mer: on the Baie des Chaleurs; moved 1 km north onto the map's land.
    { id: "CSM", name: "Carleton-sur-Mer", county: "qc-avignon-bonaventure", lat: 48.11, lon: -66.12, type: "coast", size: 1, pop: 31, main: true, level: "east" },
    // Îles-de-la-Madeleine: at Cap-aux-Meules, where the ferry from Souris lands. The islands draw
    // visitors from all over Quebec, so scenic. No neighbour until Prince Edward Island is in the game.
    { id: "IDM", name: "Îles-de-la-Madeleine", county: "qc-communaute-maritime-des-iles-de-la-madeleine", lat: 47.38, lon: -61.86, scenic: true, type: "coast", size: 1, pop: 13, main: true, level: "east" },
    // Saguenay: downtown Chicoutimi. Its port is at Grande-Anse, on the fjord at La Baie.
    { id: "SAG", name: "Saguenay", county: "qc-le-saguenay-et-son-fjord", lat: 48.43, lon: -71.06, port: "Port of Saguenay", type: "metro", size: 2, pop: 168, main: true, level: "east" },
    // Alma: in the Lac-Saint-Jean farm lowlands, so farm.
    { id: "ALM", name: "Alma", county: "qc-lac-saint-jean-est", lat: 48.55, lon: -71.65, type: "farm", size: 1, pop: 52, main: true, level: "east" },
    // Dolbeau-Mistassini: the forestry town north of the lake, at the edge of the boreal forest.
    { id: "DOL", name: "Dolbeau-Mistassini", county: "qc-le-domaine-du-roy-maria-chapdelaine", lat: 48.88, lon: -72.23, type: "mountain", size: 1, pop: 55, main: true, level: "east" },
    { id: "BCM", name: "Baie-Comeau", county: "qc-la-haute-cote-nord-manicouagan", lat: 49.22, lon: -68.15, type: "coast", size: 1, pop: 40, main: true, level: "east" },
    // Sept-Îles: the iron-ore port at the end of the railways from Labrador and Schefferville.
    { id: "SEP", name: "Sept-Îles", county: "qc-minganie-le-golfe-du-saint-laurent-sept-rivieres-caniapiscau", lat: 50.21, lon: -66.39, port: "Port of Sept-Îles", type: "coast", size: 1, pop: 48, main: true, level: "east" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point or townsite (sources in NOTES.md).
  towns: [
    // Montréal and its suburbs
    { id: "PTC", name: "Pointe-Claire", county: "qc-montreal", lat: 45.45, lon: -73.82, type: "metro", size: 1 },
    { id: "BRS", name: "Brossard", county: "qc-longueuil", lat: 45.46, lon: -73.47, type: "metro", size: 2 },
    { id: "BCV", name: "Boucherville", county: "qc-longueuil", lat: 45.6, lon: -73.45, type: "metro", size: 1 },
    { id: "SCT", name: "Saint-Constant", county: "qc-roussillon", lat: 45.37, lon: -73.57, type: "metro", size: 1 },
    { id: "HUD", name: "Hudson", county: "qc-vaudreuil-soulanges", lat: 45.46, lon: -74.14, type: "coast", size: 1 },
    { id: "RGD", name: "Rigaud", county: "qc-vaudreuil-soulanges", lat: 45.48, lon: -74.3, type: "farm", size: 1 },
    { id: "MSC", name: "Mascouche", county: "qc-les-moulins", lat: 45.76, lon: -73.6, type: "metro", size: 1 },
    { id: "SAP", name: "Sainte-Anne-des-Plaines", county: "qc-therese-de-blainville", lat: 45.76, lon: -73.82, type: "farm", size: 1 },
    // Oka: the Parc national d'Oka (its beach and the Calvary), the abbey, and the ferry to Hudson.
    { id: "OKA", name: "Oka", county: "qc-deux-montagnes", lat: 45.48, lon: -74.02, scenic: true, type: "coast", size: 1 },
    { id: "LAS", name: "L'Assomption", county: "qc-l-assomption", lat: 45.81, lon: -73.43, type: "farm", size: 1 },
    { id: "VRN", name: "Varennes", county: "qc-marguerite-d-youville", lat: 45.68, lon: -73.43, type: "coast", size: 1 },
    { id: "MHI", name: "Mont-Saint-Hilaire", county: "qc-la-vallee-du-richelieu", lat: 45.57, lon: -73.19, type: "farm", size: 1 },
    // Montérégie, the Eastern Townships and Centre-du-Québec
    { id: "BHN", name: "Beauharnois", county: "qc-beauharnois-salaberry", lat: 45.31, lon: -73.88, type: "coast", size: 1 },
    { id: "ORM", name: "Ormstown", county: "qc-le-haut-saint-laurent-les-jardins-de-napierville", lat: 45.13, lon: -74.0, type: "farm", size: 1 },
    { id: "LCL", name: "Lacolle", county: "qc-le-haut-richelieu", lat: 45.08, lon: -73.37, type: "farm", size: 1 },
    { id: "BRO", name: "Bromont", county: "qc-brome-missisquoi-rouville", lat: 45.32, lon: -72.65, type: "mountain", size: 1 },
    { id: "MRV", name: "Marieville", county: "qc-brome-missisquoi-rouville", lat: 45.43, lon: -73.16, type: "farm", size: 1 },
    { id: "WLO", name: "Waterloo", county: "qc-la-haute-yamaska", lat: 45.34, lon: -72.52, type: "farm", size: 1 },
    { id: "ACV", name: "Acton Vale", county: "qc-acton-les-maskoutains", lat: 45.65, lon: -72.56, type: "farm", size: 1 },
    { id: "CTK", name: "Coaticook", county: "qc-coaticook-memphremagog", lat: 45.13, lon: -71.8, type: "farm", size: 1 },
    // Mont-Orford: the Parc national du Mont-Orford (ski hill, lakes), at its park point.
    { id: "ORF", name: "Mont-Orford", county: "qc-coaticook-memphremagog", lat: 45.33, lon: -72.22, scenic: true, type: "mountain", size: 1 },
    { id: "WDR", name: "Windsor", county: "qc-le-val-saint-francois-les-sources", lat: 45.57, lon: -72.01, type: "farm", size: 1 },
    { id: "RCM", name: "Richmond", county: "qc-le-val-saint-francois-les-sources", lat: 45.67, lon: -72.15, type: "farm", size: 1 },
    { id: "EAN", name: "East Angus", county: "qc-le-granit-le-haut-saint-francois", lat: 45.48, lon: -71.66, type: "farm", size: 1 },
    // Mont-Mégantic: the observatory and the first International Dark Sky Reserve, at its park point.
    { id: "MMT", name: "Mont-Mégantic", county: "qc-le-granit-le-haut-saint-francois", lat: 45.45, lon: -71.16, scenic: true, type: "mountain", size: 1 },
    { id: "WRW", name: "Warwick", county: "qc-arthabaska", lat: 45.95, lon: -71.99, type: "farm", size: 1 },
    { id: "NCL", name: "Nicolet", county: "qc-becancour-nicolet-yamaska", lat: 46.23, lon: -72.62, type: "coast", size: 1 },
    { id: "DSR", name: "Disraeli", county: "qc-les-appalaches", lat: 45.9, lon: -71.36, type: "mountain", size: 1 },
    // The Laurentians, Lanaudière, the Outaouais and Mauricie
    { id: "PVO", name: "Prévost", county: "qc-la-riviere-du-nord", lat: 45.86, lon: -74.07, type: "mountain", size: 1 },
    { id: "SJU", name: "Sainte-Julienne", county: "qc-montcalm", lat: 45.97, lon: -73.72, type: "farm", size: 1 },
    { id: "SDN", name: "Saint-Donat", county: "qc-matawinie", lat: 46.32, lon: -74.22, type: "mountain", size: 1 },
    { id: "SMS", name: "Saint-Michel-des-Saints", county: "qc-matawinie", lat: 46.68, lon: -73.92, type: "mountain", size: 1 },
    // Berthierville: by Saint-Ignace-de-Loyola, where the ferry from Sorel lands.
    { id: "BTV", name: "Berthierville", county: "qc-d-autray-maskinonge", lat: 46.08, lon: -73.18, type: "farm", size: 1 },
    { id: "LSV", name: "Louiseville", county: "qc-d-autray-maskinonge", lat: 46.26, lon: -72.94, type: "farm", size: 1 },
    // Mont-Tremblant: the ski resort's village at the foot of the mountain (the city point, 46.12,
    // -74.60, is Saint-Jovite).
    { id: "MTB", name: "Mont-Tremblant", county: "qc-les-laurentides-les-pays-d-en-haut", lat: 46.21, lon: -74.58, scenic: true, type: "mountain", size: 1 },
    { id: "SAM", name: "Sainte-Agathe-des-Monts", county: "qc-les-laurentides-les-pays-d-en-haut", lat: 46.05, lon: -74.28, type: "mountain", size: 1 },
    // Montebello: the Château Montebello, the big log hotel on the Ottawa River.
    { id: "MTO", name: "Montebello", county: "qc-argenteuil-papineau", lat: 45.65, lon: -74.94, scenic: true, type: "coast", size: 1 },
    { id: "THS", name: "Thurso", county: "qc-argenteuil-papineau", lat: 45.6, lon: -75.24, type: "farm", size: 1 },
    { id: "AYL", name: "Aylmer", county: "qc-gatineau", lat: 45.4, lon: -75.84, type: "metro", size: 1 },
    { id: "BKM", name: "Buckingham", county: "qc-gatineau", lat: 45.59, lon: -75.42, type: "metro", size: 1 },
    // Chelsea: Gatineau Park's visitor centre and the way into the park.
    { id: "CLS", name: "Chelsea", county: "qc-les-collines-de-l-outaouais-pontiac", lat: 45.5, lon: -75.8, scenic: true, type: "mountain", size: 1 },
    { id: "SHV", name: "Shawville", county: "qc-les-collines-de-l-outaouais-pontiac", lat: 45.6, lon: -76.49, type: "farm", size: 1 },
    { id: "MNW", name: "Maniwaki", county: "qc-antoine-labelle-la-vallee-de-la-gatineau", lat: 46.37, lon: -75.98, type: "mountain", size: 1 },
    { id: "RRG", name: "Rivière-Rouge", county: "qc-antoine-labelle-la-vallee-de-la-gatineau", lat: 46.41, lon: -74.87, type: "mountain", size: 1 },
    { id: "SAPR", name: "Sainte-Anne-de-la-Pérade", county: "qc-francheville", lat: 46.58, lon: -72.2, type: "coast", size: 1 },
    { id: "LTQ", name: "La Tuque", county: "qc-la-tuque-mekinac-shawinigan", lat: 47.44, lon: -72.78, type: "mountain", size: 1 },
    { id: "STIT", name: "Saint-Tite", county: "qc-la-tuque-mekinac-shawinigan", lat: 46.73, lon: -72.56, type: "farm", size: 1 },
    // La Mauricie National Park, at its park point.
    { id: "PNM", name: "La Mauricie", county: "qc-la-tuque-mekinac-shawinigan", lat: 46.8, lon: -72.97, scenic: true, type: "mountain", size: 1 },
    // Abitibi-Témiscamingue and the far north
    { id: "VMR", name: "Ville-Marie", county: "qc-rouyn-noranda-temiscamingue", lat: 47.33, lon: -79.44, type: "farm", size: 1 },
    { id: "TMG", name: "Témiscaming", county: "qc-rouyn-noranda-temiscamingue", lat: 46.72, lon: -79.09, type: "mountain", size: 1 },
    { id: "MLT", name: "Malartic", county: "qc-la-vallee-de-l-or", lat: 48.14, lon: -78.13, type: "mountain", size: 1 },
    { id: "SNT", name: "Senneterre", county: "qc-la-vallee-de-l-or", lat: 48.39, lon: -77.24, type: "mountain", size: 1 },
    { id: "LSR", name: "La Sarre", county: "qc-abitibi-abitibi-ouest", lat: 48.81, lon: -79.2, type: "farm", size: 1 },
    { id: "MTG", name: "Matagami", county: "qc-nord-du-quebec", lat: 49.76, lon: -77.62, type: "mountain", size: 1 },
    // Radisson: the town of the La Grande dams (the Robert-Bourassa generating station). Nudged 5 km
    // west of the village (53.79, -77.62): there, every line south crossed an arm of the map's La
    // Grande 2 reservoir and was blocked in Tough.
    { id: "RDN", name: "Radisson", county: "qc-nord-du-quebec", lat: 53.79, lon: -77.7, type: "mountain", size: 1 },
    // Kuujjuaq: Nunavik's biggest village, near Ungava Bay; no road reaches it.
    { id: "KUU", name: "Kuujjuaq", county: "qc-nord-du-quebec", lat: 58.11, lon: -68.4, type: "coast", size: 1 },
    // Québec City and the East
    { id: "SAU", name: "Saint-Augustin-de-Desmaures", county: "qc-quebec", lat: 46.75, lon: -71.46, type: "metro", size: 1 },
    { id: "DNC", name: "Donnacona", county: "qc-la-jacques-cartier-portneuf", lat: 46.68, lon: -71.73, type: "coast", size: 1 },
    { id: "STN", name: "Stoneham", county: "qc-la-jacques-cartier-portneuf", lat: 47.0, lon: -71.36, type: "mountain", size: 1 },
    // Montmorency Falls, taller than Niagara, on the Boischatel side of the gorge.
    { id: "CMY", name: "Chute-Montmorency", county: "qc-l-ile-d-orleans-la-cote-de-beaupre", lat: 46.89, lon: -71.14, scenic: true, type: "coast", size: 1 },
    // Île d'Orléans: its farms, orchards and old villages, at Saint-Laurent-de-l'Île-d'Orléans.
    { id: "IOR", name: "Île d'Orléans", county: "qc-l-ile-d-orleans-la-cote-de-beaupre", lat: 46.87, lon: -71.02, scenic: true, type: "farm", size: 1 },
    { id: "BSP", name: "Baie-Saint-Paul", county: "qc-charlevoix-charlevoix-est", lat: 47.44, lon: -70.51, scenic: true, type: "mountain", size: 1 },
    // Saint-Siméon: where the ferry from Rivière-du-Loup lands; moved 1 km inland onto the map's land.
    { id: "IAC", name: "L'Isle-aux-Coudres", county: "qc-charlevoix-charlevoix-est", lat: 47.42, lon: -70.39, type: "coast", size: 1 },
    { id: "SSI", name: "Saint-Siméon", county: "qc-charlevoix-charlevoix-est", lat: 47.84, lon: -69.89, type: "coast", size: 1 },
    { id: "LEC", name: "Lac-Etchemin", county: "qc-bellechasse-les-etchemins", lat: 46.4, lon: -70.5, type: "mountain", size: 1 },
    { id: "BCE", name: "Beauceville", county: "qc-la-nouvelle-beauce-robert-cliche", lat: 46.21, lon: -70.78, type: "farm", size: 1 },
    { id: "SAPL", name: "Saint-Apollinaire", county: "qc-l-erable-lotbiniere", lat: 46.62, lon: -71.52, type: "farm", size: 1 },
    { id: "PCV", name: "Princeville", county: "qc-l-erable-lotbiniere", lat: 46.17, lon: -71.88, type: "farm", size: 1 },
    { id: "LPC", name: "La Pocatière", county: "qc-kamouraska-l-islet-montmagny", lat: 47.37, lon: -70.03, type: "farm", size: 1 },
    // Saint-Jean-Port-Joli: the woodcarvers' village; moved inland onto the map's land.
    { id: "SJPJ", name: "Saint-Jean-Port-Joli", county: "qc-kamouraska-l-islet-montmagny", lat: 47.21, lon: -70.27, type: "coast", size: 1 },
    // Trois-Pistoles: where the ferry to Les Escoumins leaves.
    { id: "TPL", name: "Trois-Pistoles", county: "qc-les-basques-riviere-du-loup-temiscouata", lat: 48.13, lon: -69.18, type: "coast", size: 1 },
    { id: "TSL", name: "Témiscouata-sur-le-Lac", county: "qc-les-basques-riviere-du-loup-temiscouata", lat: 47.68, lon: -68.88, type: "mountain", size: 1 },
    // Le Bic: the Parc national du Bic, its capes and coves.
    { id: "BIC", name: "Le Bic", county: "qc-rimouski-neigette", lat: 48.37, lon: -68.7, scenic: true, type: "coast", size: 1 },
    { id: "AMQ", name: "Amqui", county: "qc-la-matapedia-la-mitis", lat: 48.46, lon: -67.43, type: "mountain", size: 1 },
    // Jardins de Métis: the Reford Gardens at Grand-Métis.
    { id: "JDM", name: "Jardins de Métis", county: "qc-la-matapedia-la-mitis", lat: 48.62, lon: -68.11, scenic: true, type: "coast", size: 1 },
    { id: "SADM", name: "Sainte-Anne-des-Monts", county: "qc-la-haute-gaspesie-la-matanie", lat: 49.12, lon: -66.49, type: "coast", size: 1 },
    // Parc national de la Gaspésie: Mont Albert and the Chic-Chocs, at its park point.
    { id: "PNG", name: "Parc de la Gaspésie", county: "qc-la-haute-gaspesie-la-matanie", lat: 48.93, lon: -66.28, scenic: true, type: "mountain", size: 1 },
    // Percé: the Rocher Percé and Bonaventure Island's gannets.
    { id: "PRE", name: "Percé", county: "qc-la-cote-de-gaspe-le-rocher-perce", lat: 48.52, lon: -64.21, scenic: true, type: "coast", size: 1 },
    { id: "CHD", name: "Chandler", county: "qc-la-cote-de-gaspe-le-rocher-perce", lat: 48.35, lon: -64.68, type: "coast", size: 1 },
    // Forillon National Park, at its park point.
    { id: "FRL", name: "Forillon", county: "qc-la-cote-de-gaspe-le-rocher-perce", lat: 48.9, lon: -64.35, scenic: true, type: "coast", size: 1 },
    { id: "BNV", name: "Bonaventure", county: "qc-avignon-bonaventure", lat: 48.05, lon: -65.49, type: "coast", size: 1 },
    // Pointe-à-la-Croix: the J.C. Van Horne Bridge over the Restigouche to Campbellton, New Brunswick.
    { id: "PAC", name: "Pointe-à-la-Croix", county: "qc-avignon-bonaventure", lat: 48.03, lon: -66.7, type: "mountain", size: 1 },
    { id: "JNQ", name: "Jonquière", county: "qc-le-saguenay-et-son-fjord", lat: 48.42, lon: -71.25, type: "metro", size: 2 },
    { id: "LBA", name: "La Baie", county: "qc-le-saguenay-et-son-fjord", lat: 48.33, lon: -70.88, type: "coast", size: 1 },
    { id: "MBT", name: "Métabetchouan", county: "qc-lac-saint-jean-est", lat: 48.43, lon: -71.87, type: "farm", size: 1 },
    { id: "RBV", name: "Roberval", county: "qc-le-domaine-du-roy-maria-chapdelaine", lat: 48.52, lon: -72.22, type: "farm", size: 1 },
    { id: "SFC", name: "Saint-Félicien", county: "qc-le-domaine-du-roy-maria-chapdelaine", lat: 48.65, lon: -72.45, type: "farm", size: 1 },
    // Val-Jalbert: the ghost mill village by its waterfall.
    { id: "VJB", name: "Val-Jalbert", county: "qc-le-domaine-du-roy-maria-chapdelaine", lat: 48.45, lon: -72.16, scenic: true, type: "mountain", size: 1 },
    // Tadoussac: whale watching where the Saguenay meets the St. Lawrence.
    { id: "TDS", name: "Tadoussac", county: "qc-la-haute-cote-nord-manicouagan", lat: 48.15, lon: -69.72, scenic: true, type: "coast", size: 1 },
    // Les Escoumins: where the ferry from Trois-Pistoles lands.
    { id: "ESM", name: "Les Escoumins", county: "qc-la-haute-cote-nord-manicouagan", lat: 48.35, lon: -69.41, type: "coast", size: 1 },
    { id: "FRV", name: "Forestville", county: "qc-la-haute-cote-nord-manicouagan", lat: 48.74, lon: -69.08, type: "coast", size: 1 },
    { id: "PCT", name: "Port-Cartier", county: "qc-minganie-le-golfe-du-saint-laurent-sept-rivieres-caniapiscau", lat: 50.02, lon: -66.88, type: "coast", size: 1 },
    // Havre-Saint-Pierre: the Mingan Archipelago's limestone monoliths.
    { id: "HSP", name: "Havre-Saint-Pierre", county: "qc-minganie-le-golfe-du-saint-laurent-sept-rivieres-caniapiscau", lat: 50.24, lon: -63.6, scenic: true, type: "coast", size: 1 },
    { id: "FRM", name: "Fermont", county: "qc-minganie-le-golfe-du-saint-laurent-sept-rivieres-caniapiscau", lat: 52.8, lon: -67.09, type: "mountain", size: 1 },
  ],
  levels: [
    {
      name: "Montréal",
      areas: ["montreal"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "connect", a: "LGL", b: "LAV" },
      ],
    },
    {
      name: "Montérégie & the Eastern Townships",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 150 },
        { kind: "connect", a: "MTL", b: "SHE" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "The Laurentians, the Outaouais & Mauricie",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 300 },
        { kind: "connect", a: "MTL", b: "GAT" },
        { kind: "cargo", cargo: "trucks", target: 20 },
      ],
    },
    {
      name: "Québec City & the East",
      areas: ["east"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "MTL", b: "QUE" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. See NOTES.md.
  passes: [],
  // Real bridges and ferries: [name, latitude, longitude]. Water or a river crossed near one uses the
  // real crossing (cheaper); anywhere else you build a new bridge, if the water is narrow enough.
  // Positions are approximate (well-known crossings, not surveyed points). Ferry points lie out on
  // the route, away from the towns, so other lines from the same town don't count as using them.
  bridges: [
    // The St. Lawrence at Montréal (and the A-40 over the Rivière des Prairies at its mouth)
    ["Pont Honoré-Mercier", 45.42, -73.66],
    ["Pont Victoria", 45.49, -73.53],
    ["Pont Samuel-De Champlain", 45.47, -73.52],
    ["Pont Jacques-Cartier", 45.52, -73.54],
    ["Pont-tunnel Louis-Hippolyte-La Fontaine", 45.59, -73.5],
    ["Pont Charles-De Gaulle", 45.7, -73.48],
    // The Ottawa's mouth, from the West Island to Île Perrot and Vaudreuil
    ["Pont Galipeault", 45.4, -73.95],
    ["Pont de l'Île-aux-Tourtes", 45.42, -73.99],
    // Sorel-Tracy–Saint-Ignace-de-Loyola ferry, all year (to Berthierville)
    ["Sorel–Saint-Ignace-de-Loyola ferry (Sorel side)", 46.05, -73.12],
    ["Sorel–Saint-Ignace-de-Loyola ferry (Saint-Ignace side)", 46.06, -73.13],
    // Trois-Rivières–Bécancour
    ["Pont Laviolette", 46.31, -72.56],
    // Québec–Lévis: the two bridges at Sainte-Foy, and the ferry between the old towns
    ["Pont de Québec", 46.75, -71.29],
    ["Pont Pierre-Laporte", 46.74, -71.28],
    ["Québec–Lévis ferry (Québec side)", 46.81, -71.2],
    ["Québec–Lévis ferry (Lévis side)", 46.81, -71.19],
    ["Pont de l'Île-d'Orléans", 46.87, -71.12],
    // Tadoussac–Baie-Sainte-Catherine ferry over the mouth of the Saguenay, free, around the clock. The
    // map has the fjord as land, so the crossing is open anyway; the point marks the real crossing.
    ["Tadoussac–Baie-Sainte-Catherine ferry", 48.13, -69.72],
    // Rivière-du-Loup–Saint-Siméon ferry, spring to January
    // One point, in mid-river: points nearer either end let diagonal lines (Rivière-du-Loup–La Malbaie,
    // Trois-Pistoles–Saint-Siméon) count as using the ferry (see NOTES.md).
    ["Rivière-du-Loup–Saint-Siméon ferry (mid-river)", 47.85, -69.72],
    // Trois-Pistoles–Les Escoumins ferry, summer
    // (the points sit on the Les Escoumins half: nearer Trois-Pistoles they let Baie-Comeau–Rivière-du-Loup
    // count as using the ferry)
    ["Trois-Pistoles–Les Escoumins ferry (mid-river)", 48.24, -69.3],
    ["Trois-Pistoles–Les Escoumins ferry (north)", 48.27, -69.33],
    // Matane–Baie-Comeau ferry, all year (the same ship also sails to Godbout)
    // (the middle of the route is over 10 miles from land, too far out for a point)
    ["Matane–Baie-Comeau ferry (south)", 48.93, -67.66],
    ["Matane–Baie-Comeau ferry (north)", 49.09, -68.0],
    // Souris (Prince Edward Island)–Cap-aux-Meules ferry: its Magdalen end, off Havre-Aubert (the
    // islands' only link; it counts once Prince Edward Island is in the game)
    ["Souris–Cap-aux-Meules ferry (Magdalen side)", 47.3, -61.93],
    // The Saguenay at Chicoutimi
    ["Pont Dubuc", 48.43, -71.09],
    ["Pont de Sainte-Anne", 48.43, -71.07],
    // The Ottawa River to Ontario
    ["Pont du Portage", 45.42, -75.71],
    ["Pont Macdonald-Cartier", 45.44, -75.7],
    ["Pont Champlain (Ottawa)", 45.4, -75.76],
    ["Pont du Long-Sault", 45.62, -74.6],
    ["Ottawa River bridge (Témiscaming)", 46.71, -79.1], // to Thorne, Ontario
    // Rivers, where the links cross the map's rivers
    ["Pont Gouin (Saint-Jean-sur-Richelieu)", 45.31, -73.25], // the Richelieu, to Iberville
    ["Richelieu bridge (Chambly)", 45.45, -73.27],
    ["Pont Jordi-Bonet (Beloeil)", 45.56, -73.21],
    ["Richelieu bridge (Sorel-Tracy)", 46.03, -73.13],
    ["Saint-François bridge (Sherbrooke)", 45.41, -71.89],
    ["Saint-François bridge (Windsor)", 45.57, -72.02],
    ["Saint-François bridge (Richmond)", 45.67, -72.16], // to Melbourne
    ["Saint-François bridge (Drummondville)", 45.88, -72.48],
    ["Yamaska bridge (Saint-Hyacinthe)", 45.63, -72.95],
    ["Chaudière bridge (Lac-Mégantic)", 45.57, -70.88], // where the river leaves the lake
    ["Chaudière bridge (Saint-Georges)", 46.12, -70.68],
    ["Chaudière bridge (Beauceville)", 46.21, -70.78],
    ["Chaudière bridge (Sainte-Marie)", 46.44, -71.03],
    ["Pont d'aluminium (Arvida)", 48.44, -71.18], // the Saguenay at Shipshaw, the first aluminium bridge
    ["Saguenay bridge (Alma)", 48.55, -71.66], // the Grande Décharge
    ["Matapédia bridge (Amqui)", 48.46, -67.43],
  ],
  // The St. Lawrence lies outside the land: without these, any track over it would just follow
  // the shore. Inside them, water needs a real bridge or ferry (or a new bridge where it's narrow).
  bays: [
    {
      name: "the St. Lawrence River",
      ring: [
        -73.644, 45.405, -73.696, 45.42, -73.656, 45.435, -73.628, 45.45, -73.6, 45.465, -73.572, 45.48, -73.55, 45.495, -73.542, 45.51,
        -73.538, 45.525, -73.532, 45.54, -73.522, 45.555, -73.512, 45.57, -73.502, 45.585, -73.496, 45.6, -73.492, 45.615, -73.49, 45.63,
        -73.486, 45.645, -73.482, 45.66, -73.56, 45.675, -73.536, 45.69, -73.528, 45.705, -73.47, 45.72, -73.4, 45.776, -73.375, 45.802,
        -73.35, 45.824, -73.325, 45.837, -73.3, 45.854, -73.275, 45.878, -73.25, 45.907, -73.225, 45.939, -73.2, 45.969, -73.175, 46.072,
        -73.15, 46.095, -73.125, 46.116, -73.1, 46.133, -73.075, 46.141, -73.05, 46.149, -73.025, 46.159, -73, 46.186, -72.975, 46.196,
        -72.95, 46.204, -72.925, 46.212, -72.9, 46.225, -72.875, 46.241, -72.85, 46.256, -72.825, 46.257, -72.8, 46.257, -72.775, 46.268,
        -72.75, 46.277, -72.725, 46.28, -72.7, 46.277, -72.675, 46.274, -72.65, 46.278, -72.625, 46.285, -72.6, 46.29, -72.575, 46.302,
        -72.55, 46.322, -72.525, 46.343, -72.5, 46.364, -72.475, 46.38, -72.45, 46.391, -72.425, 46.401, -72.4, 46.411, -72.375, 46.423,
        -72.35, 46.433, -72.325, 46.44, -72.3, 46.446, -72.275, 46.451, -72.25, 46.477, -72.225, 46.526, -72.2, 46.549, -72.175, 46.559,
        -72.15, 46.572, -72.125, 46.577, -72.1, 46.58, -72.075, 46.581, -72.05, 46.583, -72.025, 46.591, -72, 46.609, -71.975, 46.624,
        -71.95, 46.634, -71.925, 46.645, -71.9, 46.676, -71.875, 46.682, -71.85, 46.685, -71.825, 46.679, -71.8, 46.67, -71.775, 46.664,
        -71.75, 46.664, -71.725, 46.663, -71.7, 46.663, -71.675, 46.669, -71.65, 46.679, -71.625, 46.688, -71.6, 46.695, -71.575, 46.701,
        -71.55, 46.705, -71.525, 46.71, -71.5, 46.716, -71.475, 46.72, -71.45, 46.724, -71.425, 46.728, -71.4, 46.732, -71.375, 46.738,
        -71.35, 46.741, -71.325, 46.743, -71.32, 46.742, -71.315, 46.742, -71.31, 46.743, -71.305, 46.742, -71.3, 46.742, -71.295, 46.743,
        -71.29, 46.744, -71.285, 46.746, -71.28, 46.75, -71.275, 46.752, -71.27, 46.754, -71.265, 46.756, -71.26, 46.76, -71.255, 46.762,
        -71.25, 46.764, -71.245, 46.766, -71.24, 46.77, -71.235, 46.774, -71.23, 46.78, -71.225, 46.784, -71.22, 46.788, -71.215, 46.792,
        -71.21, 46.796, -71.205, 46.802, -71.2, 46.846, -71.195, 46.848, -71.19, 46.852, -71.185, 46.854, -71.18, 46.858, -71.175, 46.862,
        -71.17, 46.864, -71.165, 46.868, -71.16, 46.87, -71.155, 46.874, -71.15, 46.876, -71.145, 46.88, -71.14, 46.848, -71.135, 46.848,
        -71.13, 46.848, -71.125, 46.848, -71.12, 46.848, -71.115, 46.848, -71.11, 46.848, -71.105, 46.848, -71.1, 46.846, -71.075, 46.846,
        -71.05, 46.848, -71.025, 46.852, -71, 46.858, -70.975, 46.874, -70.95, 46.892, -70.925, 46.902, -70.9, 46.912, -70.875, 46.926,
        -70.85, 46.952, -70.825, 46.976, -70.8, 47.012, -70.8, 46.918, -70.825, 46.9, -70.85, 46.892, -70.875, 46.898, -70.9, 46.888, -70.925, 46.88,
        -70.95, 46.864, -70.975, 46.848, -71, 46.84, -71.025, 46.84, -71.05, 46.838, -71.075, 46.836, -71.1, 46.836, -71.105, 46.836, -71.11, 46.836,
        -71.115, 46.836, -71.12, 46.838, -71.125, 46.838, -71.13, 46.838, -71.135, 46.838, -71.14, 46.838, -71.145, 46.838, -71.15, 46.838,
        -71.155, 46.838, -71.16, 46.838, -71.165, 46.834, -71.17, 46.826, -71.175, 46.82, -71.18, 46.812, -71.185, 46.806, -71.19, 46.798,
        -71.195, 46.792, -71.2, 46.788, -71.205, 46.784, -71.21, 46.782, -71.215, 46.778, -71.22, 46.776, -71.225, 46.774, -71.23, 46.77,
        -71.235, 46.768, -71.24, 46.764, -71.245, 46.762, -71.25, 46.758, -71.255, 46.756, -71.26, 46.754, -71.265, 46.752, -71.27, 46.75,
        -71.275, 46.748, -71.28, 46.746, -71.285, 46.746, -71.29, 46.744, -71.295, 46.741, -71.3, 46.74, -71.305, 46.738, -71.31, 46.737,
        -71.315, 46.736, -71.32, 46.734, -71.325, 46.733, -71.35, 46.725, -71.375, 46.716, -71.4, 46.708, -71.425, 46.704, -71.45, 46.7,
        -71.475, 46.696, -71.5, 46.692, -71.525, 46.686, -71.55, 46.679, -71.575, 46.673, -71.6, 46.663, -71.625, 46.65, -71.65, 46.641,
        -71.675, 46.641, -71.7, 46.639, -71.725, 46.639, -71.75, 46.638, -71.775, 46.636, -71.8, 46.646, -71.825, 46.661, -71.85, 46.669,
        -71.875, 46.656, -71.9, 46.644, -71.925, 46.631, -71.95, 46.62, -71.975, 46.6, -72, 46.579, -72.025, 46.567, -72.05, 46.563, -72.075, 46.565,
        -72.1, 46.566, -72.125, 46.559, -72.15, 46.55, -72.175, 46.537, -72.2, 46.517, -72.225, 46.46, -72.25, 46.431, -72.275, 46.419,
        -72.3, 46.408, -72.325, 46.404, -72.35, 46.399, -72.375, 46.395, -72.4, 46.391, -72.425, 46.385, -72.45, 46.379, -72.475, 46.362,
        -72.5, 46.344, -72.525, 46.325, -72.55, 46.308, -72.575, 46.294, -72.6, 46.282, -72.625, 46.267, -72.65, 46.252, -72.675, 46.194,
        -72.7, 46.183, -72.725, 46.174, -72.75, 46.163, -72.775, 46.154, -72.8, 46.147, -72.825, 46.141, -72.85, 46.134, -72.875, 46.127,
        -72.9, 46.121, -72.925, 46.074, -72.95, 46.088, -72.975, 46.084, -73, 46.074, -73.025, 46.065, -73.05, 46.061, -73.075, 46.057,
        -73.1, 46.053, -73.125, 46.05, -73.15, 46.045, -73.175, 45.998, -73.2, 45.959, -73.225, 45.879, -73.25, 45.855, -73.275, 45.84,
        -73.3, 45.822, -73.325, 45.807, -73.35, 45.79, -73.375, 45.77, -73.4, 45.748, -73.432, 45.72, -73.44, 45.705, -73.444, 45.69,
        -73.446, 45.675, -73.45, 45.66, -73.454, 45.645, -73.458, 45.63, -73.462, 45.615, -73.466, 45.6, -73.476, 45.585, -73.492, 45.57,
        -73.51, 45.555, -73.526, 45.54, -73.528, 45.525, -73.524, 45.51, -73.518, 45.495, -73.512, 45.48, -73.508, 45.465, -73.502, 45.45,
        -73.498, 45.435, -73.51, 45.42, -73.528, 45.405,
      ],
    },
    {
      name: "the St. Lawrence Estuary",
      ring: [
        -70.8, 47.012, -70.75, 47.046, -70.7, 47.086, -70.65, 47.141, -70.6, 47.202, -70.55, 47.28, -70.5, 47.344, -70.45, 47.387, -70.4, 47.403,
        -70.35, 47.42, -70.3, 47.426, -70.25, 47.44, -70.2, 47.531, -70.15, 47.571, -70.1, 47.622, -70.05, 47.642, -70, 47.664, -69.95, 47.715,
        -69.9, 47.762, -69.85, 47.835, -69.8, 47.881, -69.75, 47.954, -69.7, 48.01, -69.65, 48.038, -69.6, 48.084, -69.55, 48.103, -69.5, 48.142,
        -69.45, 48.167, -69.4, 48.205, -69.35, 48.268, -69.3, 48.327, -69.25, 48.43, -69.2, 48.463, -69.15, 48.441, -69.1, 48.499, -69.05, 48.622,
        -69, 48.645, -68.95, 48.666, -68.9, 48.703, -68.85, 48.719, -68.8, 48.76, -68.75, 48.773, -68.7, 48.78, -68.65, 48.819, -68.6, 48.928,
        -68.55, 48.944, -68.5, 48.949, -68.45, 48.956, -68.4, 48.984, -68.35, 48.948, -68.3, 49.061, -68.25, 49.062, -68.2, 49.078, -68.15, 49.082,
        -68.1, 49.142, -68.05, 49.156, -68, 49.159, -67.95, 49.158, -67.9, 49.17, -67.85, 49.157, -67.8, 49.161, -67.75, 49.18, -67.7, 49.186,
        -67.65, 49.19, -67.6, 49.197, -67.55, 49.199, -67.5, 49.202, -67.45, 49.2, -67.4, 49.196, -67.35, 49.226, -67.3, 49.278, -67.25, 49.325,
        -67.2, 49.52, -67.15, 49.672, -67.1, 49.721, -67.05, 49.704, -67, 49.743, -66.95, 49.858, -66.9, 49.889, -66.85, 49.899, -66.8, 49.909,
        -66.75, 49.914, -66.7, 49.987, -66.65, 50.005, -66.6, 50.019, -66.55, 50.029, -66.5, 50.117, -66.45, 50.148, -66.4, 50.119, -66.35, 50.068,
        -66.3, 50.084, -66.25, 50.086, -66.2, 50.086, -66.15, 50.07, -66.1, 50.107, -66.05, 50.09, -66, 50.136, -66, 49.228, -66.05, 49.224,
        -66.1, 49.217, -66.15, 49.21, -66.2, 49.211, -66.25, 49.211, -66.3, 49.215, -66.35, 49.238, -66.4, 49.232, -66.45, 49.192, -66.5, 49.143,
        -66.55, 49.133, -66.6, 49.123, -66.65, 49.118, -66.7, 49.106, -66.75, 49.09, -66.8, 49.064, -66.85, 49.051, -66.9, 49.041, -66.95, 49.022,
        -67, 49.003, -67.05, 48.985, -67.1, 48.969, -67.15, 48.95, -67.2, 48.939, -67.25, 48.93, -67.3, 48.913, -67.35, 48.906, -67.4, 48.891,
        -67.45, 48.871, -67.5, 48.864, -67.55, 48.852, -67.6, 48.826, -67.65, 48.81, -67.7, 48.794, -67.75, 48.779, -67.8, 48.763, -67.85, 48.747,
        -67.9, 48.727, -67.95, 48.697, -68, 48.68, -68.05, 48.677, -68.1, 48.645, -68.15, 48.639, -68.2, 48.632, -68.25, 48.61, -68.3, 48.585,
        -68.35, 48.559, -68.4, 48.541, -68.45, 48.528, -68.5, 48.491, -68.55, 48.447, -68.6, 48.434, -68.65, 48.409, -68.7, 48.385, -68.75, 48.363,
        -68.8, 48.356, -68.85, 48.336, -68.9, 48.317, -68.95, 48.298, -69, 48.262, -69.05, 48.233, -69.1, 48.2, -69.15, 48.163, -69.2, 48.122,
        -69.25, 48.095, -69.3, 48.061, -69.35, 48.029, -69.4, 48.02, -69.45, 47.988, -69.5, 47.954, -69.55, 47.882, -69.6, 47.788, -69.65, 47.742,
        -69.7, 47.708, -69.75, 47.655, -69.8, 47.616, -69.85, 47.591, -69.9, 47.536, -69.95, 47.522, -70, 47.495, -70.05, 47.392, -70.1, 47.345,
        -70.15, 47.33, -70.2, 47.305, -70.25, 47.238, -70.3, 47.185, -70.35, 47.149, -70.4, 47.114, -70.45, 47.065, -70.5, 47.022, -70.55, 47,
        -70.6, 46.991, -70.65, 46.975, -70.7, 46.95, -70.75, 46.928, -70.8, 46.918,
      ],
    },
    {
      name: "the Gulf of St. Lawrence",
      ring: [
        -66, 50.135, -65.75, 50.14, -65.5, 50.165, -65.25, 50.18, -65, 50.15, -64.75, 50.15, -64.5, 50.185, -64.25, 50.15, -64, 50.17, -63.75, 50.17,
        -63.5, 50.13, -63.25, 50.11, -63, 50.19, -62.75, 50.155, -62.5, 50.15, -62.25, 50.125, -62, 50.09, -61.75, 50.01, -61.5, 50.025,
        -61.25, 50.065, -61, 50.08, -60.75, 50.165, -60.5, 50.11, -60.25, 50.205, -60, 50.23, -59.75, 50.31, -59.5, 50.435, -59.25, 50.63,
        -59, 50.655, -58.75, 50.88, -58.5, 50.88, -58.25, 50.88, -58, 50.88, -57.75, 50.88, -57.5, 50.88, -57.25, 50.88, -57.1, 51.5, -57.15, 51.3,
        -57.6, 50.7, -58.1, 49.9, -58.35, 49.4, -58.7, 49, -59.5, 48.4, -59.6, 47.8, -61.3, 47.85, -62.3, 47.85, -63.6, 47.4, -64.45, 47.85,
        -64.95, 47.78, -65.65, 47.6, -65.85, 47.88, -66, 47.93, -66, 48.06, -65.9, 48.07, -65.8, 48.02, -65.7, 48.005, -65.6, 47.975, -65.5, 47.94,
        -65.4, 47.9, -65.3, 47.905, -65.2, 47.93, -65.1, 47.98, -65, 48.02, -64.9, 48.075, -64.8, 48.1, -64.7, 48.2, -64.6, 48.265, -64.5, 48.29,
        -64.4, 48.31, -64.15, 48.42, -64.06, 48.6, -64.06, 48.76, -64.12, 48.86, -64.25, 48.908, -64.35, 48.978, -64.45, 49.041, -64.55, 49.092,
        -64.65, 49.124, -64.75, 49.148, -64.85, 49.19, -64.95, 49.214, -65.05, 49.226, -65.15, 49.235, -65.25, 49.241, -65.35, 49.256,
        -65.45, 49.259, -65.55, 49.262, -65.65, 49.256, -65.75, 49.244, -65.85, 49.232, -65.95, 49.232,
      ],
    },
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Regions not listed are green farmland and grassland.
  biomes: {
    // The boreal forest and the Canadian Shield: the far north, the North Shore, Saguenay–Lac-Saint-Jean,
    // the Haute-Mauricie, Abitibi-Témiscamingue, the Laurentians and the Outaouais hills, and the
    // forested mountains of Charlevoix, the Laurentides wildlife reserve and the Gaspé peninsula.
    // Their farms are thin strips along the rivers, lakes and coasts.
    forest: [
      "qc-nord-du-quebec",
      "qc-minganie-le-golfe-du-saint-laurent-sept-rivieres-caniapiscau",
      "qc-la-haute-cote-nord-manicouagan",
      "qc-le-saguenay-et-son-fjord",
      "qc-le-domaine-du-roy-maria-chapdelaine",
      "qc-lac-saint-jean-est",
      "qc-la-tuque-mekinac-shawinigan",
      "qc-la-vallee-de-l-or",
      "qc-rouyn-noranda-temiscamingue",
      "qc-abitibi-abitibi-ouest",
      "qc-antoine-labelle-la-vallee-de-la-gatineau",
      "qc-matawinie",
      "qc-les-laurentides-les-pays-d-en-haut",
      "qc-les-collines-de-l-outaouais-pontiac",
      "qc-charlevoix-charlevoix-est",
      "qc-la-jacques-cartier-portneuf",
      "qc-l-ile-d-orleans-la-cote-de-beaupre",
      "qc-la-haute-gaspesie-la-matanie",
      "qc-la-cote-de-gaspe-le-rocher-perce",
      "qc-avignon-bonaventure",
      "qc-la-matapedia-la-mitis",
    ],
    // Farm country with wooded hills: the Appalachian plateau of the Bas-Saint-Laurent, the Côte-du-Sud,
    // Bellechasse and the Beauce, the Eastern Townships' hills, and the Laurentians' southern edge
    // (Argenteuil, Saint-Jérôme's north, Lanaudière's north shore). Trees show only on their hills.
    wooded: [
      "qc-rimouski-neigette",
      "qc-les-basques-riviere-du-loup-temiscouata",
      "qc-kamouraska-l-islet-montmagny",
      "qc-bellechasse-les-etchemins",
      "qc-beauce-sartigan",
      "qc-les-appalaches",
      "qc-le-granit-le-haut-saint-francois",
      "qc-coaticook-memphremagog",
      "qc-brome-missisquoi-rouville",
      "qc-argenteuil-papineau",
      "qc-d-autray-maskinonge",
      "qc-la-riviere-du-nord",
    ],
  },
});
