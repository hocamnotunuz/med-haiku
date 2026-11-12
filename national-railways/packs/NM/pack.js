// National Railways pack: New Mexico.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/NM/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/NM/raw.
NR.addPack({
  code: "NM",
  name: "New Mexico",
  // A game that starts here begins owning these counties (Albuquerque, Los Lunas and Santa Fe):
  // the Rail Runner's line from the Rio Grande valley's farms to the capital. Both touch
  // Bernalillo. Los Lunas is farm, so the first track (Albuquerque–Los Lunas, the nearest pair,
  // about 20 mi) has riders.
  start: ["nm-bernalillo", "nm-valencia", "nm-santa-fe"],
  // Main stations: one per county region, at its biggest place, except Los Alamos (no Census
  // population: its townsite). id = the short code shown on passengers. county = region id in
  // this folder's map.js. pop = region population in thousands (2020 census). size = how busy
  // (1 to 5). level = which level unlocks it in Levels mode. airport = its name, if it has a big
  // one. scenic = a place tourists travel to. Points are the Census points, except six moved
  // to downtown (Albuquerque, Santa Fe, Los Lunas, Farmington, Clovis, Hobbs; NOTES.md).
  stations: [
    // Level 1: Albuquerque, Santa Fe and the Rio Grande
    // Albuquerque: size 3 by its 676k. The Sunport is New Mexico's one big airport. At the
    // Alvarado Transportation Center downtown (Amtrak and the Rail Runner); the Census point is
    // 1.5 mi north.
    { id: "ABQ", name: "Albuquerque", county: "nm-bernalillo", lat: 35.08, lon: -106.65, airport: "Albuquerque International Sunport", type: "metro", size: 3, pop: 676, main: true, level: "rio" },
    // Los Lunas, not Belen (the BNSF's junction, 7,363): Los Lunas is the county seat and over
    // twice Belen's size (17,250), and nearer Albuquerque. Belen is a town. Valencia is the Rio
    // Grande valley's farms (Bosque Farms, Peralta), so farm. At the village centre; the Census
    // point is 3 mi west, out on the mesa.
    { id: "LLN", name: "Los Lunas", county: "nm-valencia", lat: 34.81, lon: -106.73, type: "farm", size: 2, pop: 76, main: true, level: "rio" },
    // Santa Fe: the capital, size 2 by its 155k; scenic (the Plaza, the Palace of the
    // Governors, Canyon Road). At the Plaza; the Census point is 3 mi southwest.
    { id: "SFE", name: "Santa Fe", county: "nm-santa-fe", lat: 35.69, lon: -105.94, scenic: true, type: "metro", size: 2, pop: 155, main: true, level: "rio" },
    { id: "RRN", name: "Rio Rancho", county: "nm-sandoval", lat: 35.29, lon: -106.7, type: "metro", size: 2, pop: 149, main: true, level: "rio" },
    // Los Alamos: its towns are Census CDPs (no population in raw/), so the station is at the
    // townsite (Fuller Lodge, the Bradbury Science Museum). The Pajarito Plateau on the Jemez
    // Mountains' flank, so mountain; scenic (the Manhattan Project National Historical Park).
    { id: "LAMO", name: "Los Alamos", county: "nm-los-alamos", lat: 35.88, lon: -106.3, scenic: true, type: "mountain", size: 1, pop: 19, main: true, level: "rio" },
    // Española: the region is the Sangre de Cristo and the upper Rio Grande (Taos, Questa, Chama),
    // so mountain. Size 2 by its 75k.
    { id: "ESPA", name: "Española", county: "nm-rio-arriba-taos", lat: 36.0, lon: -106.07, type: "mountain", size: 2, pop: 75, main: true, level: "rio" },
    // Santa Rosa: I-40 and the Pecos; the region is plains and the Estancia Valley's bean farms
    // and ranches, so farm.
    { id: "SRSA", name: "Santa Rosa", county: "nm-guadalupe-torrance", lat: 34.94, lon: -104.68, type: "farm", size: 1, pop: 20, main: true, level: "rio" },
    // Level 2: Route 66 and the Santa Fe Trail
    // Grants: El Malpais's lava, Mount Taylor and the uranium belt, so desert.
    { id: "GNT", name: "Grants", county: "nm-cibola", lat: 35.15, lon: -107.83, type: "desert", size: 1, pop: 27, main: true, level: "north" },
    // Gallup: the Navajo and Zuni country's trading town on I-40 and the Santa Fe, so desert.
    { id: "GUP", name: "Gallup", county: "nm-mckinley", lat: 35.51, lon: -108.74, type: "desert", size: 2, pop: 73, main: true, level: "north" },
    // Farmington: the Four Corners' desert (Shiprock, Chaco, the Bisti badlands), as Cortez.
    // At downtown (Main Street); the Census point is 2 mi northeast.
    { id: "FMN", name: "Farmington", county: "nm-san-juan", lat: 36.73, lon: -108.21, type: "desert", size: 2, pop: 122, main: true, level: "north" },
    // Las Vegas: where the Sangre de Cristo meets the plains (Hermit's Peak, the Mora valley,
    // the Pecos), so mountain.
    { id: "LVG", name: "Las Vegas", county: "nm-mora-san-miguel", lat: 35.6, lon: -105.22, type: "mountain", size: 1, pop: 31, main: true, level: "north" },
    // Raton: at the foot of Raton Pass, so mountain (as Trinidad on the other side).
    { id: "RTN", name: "Raton", county: "nm-colfax-union", lat: 36.89, lon: -104.44, type: "mountain", size: 1, pop: 16, main: true, level: "north" },
    // Tucumcari and Clovis: the plains' ranches, wheat, peanuts and dairies, so farm.
    { id: "TCC", name: "Tucumcari", county: "nm-harding-quay", lat: 35.17, lon: -103.7, type: "farm", size: 1, pop: 9, main: true, level: "north" },
    // Clovis: size 2 by its 69k. At downtown (Main Street and the BNSF station); the Census
    // point is 3 mi north.
    { id: "CVN", name: "Clovis", county: "nm-curry-de-baca-roosevelt", lat: 34.4, lon: -103.21, type: "farm", size: 2, pop: 69, main: true, level: "north" },
    // Level 3: the Rio Grande south and the Gila
    // Socorro: the Rio Grande's desert valley (Bosque del Apache, the VLA's plain), so desert.
    { id: "SOC", name: "Socorro", county: "nm-catron-sierra-socorro", lat: 34.05, lon: -106.91, type: "desert", size: 1, pop: 32, main: true, level: "south" },
    // Las Cruces: New Mexico's second city, so metro, size 2 by its 220k.
    { id: "LCR", name: "Las Cruces", county: "nm-dona-ana", lat: 32.33, lon: -106.79, type: "metro", size: 2, pop: 220, main: true, level: "south" },
    // Deming: the Chihuahuan Desert on I-10, so desert.
    { id: "DMN", name: "Deming", county: "nm-grant-hidalgo-luna", lat: 32.26, lon: -107.75, type: "desert", size: 1, pop: 58, main: true, level: "south" },
    // Alamogordo: the Tularosa Basin (White Sands), so desert. Size 2 by its 68k.
    { id: "ALMO", name: "Alamogordo", county: "nm-otero", lat: 32.88, lon: -105.96, type: "desert", size: 2, pop: 68, main: true, level: "south" },
    // Level 4: the Sacramentos, the Pecos and the Permian Basin
    // Ruidoso: the Sacramento Mountains' resort town (Ski Apache, the racetrack), so mountain.
    { id: "RUI", name: "Ruidoso", county: "nm-lincoln", lat: 33.35, lon: -105.67, type: "mountain", size: 1, pop: 20, main: true, level: "pecos" },
    // Roswell: the Pecos valley's irrigated farms and dairies, so farm. Size 2 by its 65k.
    { id: "ROW", name: "Roswell", county: "nm-chaves", lat: 33.37, lon: -104.53, type: "farm", size: 2, pop: 65, main: true, level: "pecos" },
    // Carlsbad: the Chihuahuan Desert (potash, oil, the caverns), so desert. Size 2 by its 62k.
    { id: "CBAD", name: "Carlsbad", county: "nm-eddy", lat: 32.4, lon: -104.24, type: "desert", size: 2, pop: 62, main: true, level: "pecos" },
    // Hobbs: the Permian Basin's oil field, so desert. Size 2 by its 74k. At downtown; the
    // Census point is 2 mi northwest.
    { id: "HOB", name: "Hobbs", county: "nm-lea", lat: 32.7, lon: -103.14, type: "desert", size: 2, pop: 74, main: true, level: "pecos" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Points are the Census points, except Belen, Truth or Consequences and Carrizozo (moved to the
  // town, NOTES.md). Scenic places that aren't towns sit at their landmark or visitor center
  // (sources in NOTES.md).
  towns: [
    // Albuquerque and the middle Rio Grande
    // Tijeras: in Tijeras Canyon, where I-40 crosses between the Sandias and the Manzanos.
    { id: "TIJ", name: "Tijeras", county: "nm-bernalillo", lat: 35.09, lon: -106.38, type: "mountain", size: 1 },
    // Sandia Peak Tramway: the aerial tram up the Sandias' west face, at its base.
    { id: "SNDP", name: "Sandia Peak Tramway", county: "nm-bernalillo", lat: 35.19, lon: -106.48, scenic: true, type: "mountain", size: 1 },
    // Bernalillo: the town on the Rio Grande (and the Rail Runner) at the foot of the Sandias.
    { id: "BRNL", name: "Bernalillo", county: "nm-sandoval", lat: 35.31, lon: -106.55, type: "metro", size: 1 },
    { id: "JEM", name: "Jemez Springs", county: "nm-sandoval", lat: 35.77, lon: -106.69, type: "mountain", size: 1 },
    // Cuba: on US-550 between Albuquerque and Farmington.
    { id: "CUBA", name: "Cuba", county: "nm-sandoval", lat: 36.01, lon: -106.97, type: "desert", size: 1 },
    { id: "EDG", name: "Edgewood", county: "nm-santa-fe", lat: 35.13, lon: -106.22, type: "metro", size: 1 },
    // Lamy: Santa Fe's Amtrak stop on the Southwest Chief.
    { id: "LAMY", name: "Lamy", county: "nm-santa-fe", lat: 35.49, lon: -105.89, type: "desert", size: 1 },
    // Bandelier: the cliff dwellings of Frijoles Canyon, at the visitor center.
    { id: "BNDL", name: "Bandelier", county: "nm-los-alamos", lat: 35.78, lon: -106.27, scenic: true, type: "mountain", size: 1 },
    // Belen: the "Hub City", where the BNSF's Transcon meets its line to El Paso, and the Rail
    // Runner's south end. At downtown (the Harvey House); the Census point is 7 mi north.
    { id: "BELN", name: "Belen", county: "nm-valencia", lat: 34.66, lon: -106.78, type: "farm", size: 1 },
    // Route 66 and the Four Corners
    { id: "LAG", name: "Laguna", county: "nm-cibola", lat: 35.05, lon: -107.4, type: "desert", size: 1 },
    // Acoma: Sky City, the pueblo on its mesa.
    { id: "ACMA", name: "Acoma Pueblo", county: "nm-cibola", lat: 34.9, lon: -107.58, scenic: true, type: "desert", size: 1 },
    { id: "THR", name: "Thoreau", county: "nm-mckinley", lat: 35.42, lon: -108.2, type: "desert", size: 1 },
    { id: "ZUNI", name: "Zuni Pueblo", county: "nm-mckinley", lat: 35.07, lon: -108.86, type: "desert", size: 1 },
    { id: "AZT", name: "Aztec", county: "nm-san-juan", lat: 36.82, lon: -107.97, type: "farm", size: 1 },
    { id: "BLM", name: "Bloomfield", county: "nm-san-juan", lat: 36.74, lon: -107.97, type: "desert", size: 1 },
    // Shiprock: the volcanic neck on the Navajo Nation, at the rock.
    { id: "SHPK", name: "Shiprock", county: "nm-san-juan", lat: 36.69, lon: -108.84, scenic: true, type: "desert", size: 1 },
    // Chaco Canyon: Chaco Culture National Historical Park, at Pueblo Bonito.
    { id: "CHCO", name: "Chaco Canyon", county: "nm-san-juan", lat: 36.06, lon: -107.96, scenic: true, type: "desert", size: 1 },
    // The north
    // Taos: the plaza and the art colony; Taos Pueblo is 3 mi north, so scenic.
    { id: "TAOS", name: "Taos", county: "nm-rio-arriba-taos", lat: 36.39, lon: -105.58, scenic: true, type: "mountain", size: 1 },
    // Chama: the Cumbres & Toltec Scenic Railroad's New Mexico end.
    { id: "CHMA", name: "Chama", county: "nm-rio-arriba-taos", lat: 36.89, lon: -106.58, type: "mountain", size: 1 },
    // Ghost Ranch: the red cliffs Georgia O'Keeffe painted, by Abiquiu.
    { id: "GHR", name: "Ghost Ranch", county: "nm-rio-arriba-taos", lat: 36.33, lon: -106.47, scenic: true, type: "desert", size: 1 },
    { id: "QST", name: "Questa", county: "nm-rio-arriba-taos", lat: 36.71, lon: -105.6, type: "mountain", size: 1 },
    // Angel Fire: the ski resort in the Moreno Valley.
    { id: "ANGF", name: "Angel Fire", county: "nm-colfax-union", lat: 36.38, lon: -105.26, type: "mountain", size: 1 },
    // Springer: on I-25 and the BNSF where the Santa Fe Trail's Cimarron cutoff came in.
    { id: "SPGR", name: "Springer", county: "nm-colfax-union", lat: 36.37, lon: -104.6, type: "farm", size: 1 },
    { id: "CLY", name: "Clayton", county: "nm-colfax-union", lat: 36.45, lon: -103.15, type: "farm", size: 1 },
    // Capulin Volcano: the cinder cone on the plains (a national monument), at its visitor center.
    { id: "CAPV", name: "Capulin Volcano", county: "nm-colfax-union", lat: 36.78, lon: -103.97, scenic: true, type: "farm", size: 1 },
    { id: "PCS", name: "Pecos", county: "nm-mora-san-miguel", lat: 35.58, lon: -105.68, type: "mountain", size: 1 },
    { id: "MORA", name: "Mora", county: "nm-mora-san-miguel", lat: 35.96, lon: -105.33, type: "mountain", size: 1 },
    { id: "WGM", name: "Wagon Mound", county: "nm-mora-san-miguel", lat: 36.0, lon: -104.71, type: "farm", size: 1 },
    // Logan: at Ute Lake on the Canadian.
    { id: "LGN", name: "Logan", county: "nm-harding-quay", lat: 35.36, lon: -103.45, type: "farm", size: 1 },
    { id: "ROY", name: "Roy", county: "nm-harding-quay", lat: 35.95, lon: -104.2, type: "farm", size: 1 },
    // The plains east of the Manzanos
    { id: "MRTY", name: "Moriarty", county: "nm-guadalupe-torrance", lat: 35.0, lon: -106.04, type: "farm", size: 1 },
    { id: "MTNR", name: "Mountainair", county: "nm-guadalupe-torrance", lat: 34.52, lon: -106.24, type: "farm", size: 1 },
    // Vaughn: where the BNSF's Transcon crosses the Union Pacific's Tucumcari line.
    { id: "VGHN", name: "Vaughn", county: "nm-guadalupe-torrance", lat: 34.61, lon: -105.21, type: "farm", size: 1 },
    { id: "PORT", name: "Portales", county: "nm-curry-de-baca-roosevelt", lat: 34.18, lon: -103.36, type: "farm", size: 1 },
    // Fort Sumner: the Pecos, Bosque Redondo and Billy the Kid's grave.
    { id: "FTSM", name: "Fort Sumner", county: "nm-curry-de-baca-roosevelt", lat: 34.49, lon: -104.22, type: "farm", size: 1 },
    // The south
    // Truth or Consequences: the hot springs town below Elephant Butte Lake. At downtown; the
    // Census point is 8 mi north.
    { id: "TORC", name: "Truth or Consequences", county: "nm-catron-sierra-socorro", lat: 33.13, lon: -107.25, type: "desert", size: 1 },
    { id: "MGDL", name: "Magdalena", county: "nm-catron-sierra-socorro", lat: 34.11, lon: -107.23, type: "desert", size: 1 },
    // Reserve: the Gila country's county seat (Catron).
    { id: "RSRV", name: "Reserve", county: "nm-catron-sierra-socorro", lat: 33.71, lon: -108.76, type: "mountain", size: 1 },
    // Very Large Array: the radio telescope's dishes on the Plains of San Agustin.
    { id: "VLA", name: "Very Large Array", county: "nm-catron-sierra-socorro", lat: 34.08, lon: -107.62, scenic: true, type: "desert", size: 1 },
    // Gila Cliff Dwellings: the Mogollon cliff houses in the Gila Wilderness.
    { id: "GILA", name: "Gila Cliff Dwellings", county: "nm-catron-sierra-socorro", lat: 33.23, lon: -108.27, scenic: true, type: "mountain", size: 1 },
    // Hatch: the chile capital, on the Rio Grande.
    { id: "HAT", name: "Hatch", county: "nm-dona-ana", lat: 32.67, lon: -107.16, type: "farm", size: 1 },
    { id: "SLP", name: "Sunland Park", county: "nm-dona-ana", lat: 31.82, lon: -106.6, type: "metro", size: 1 },
    // Silver City: the Gila's copper and college town.
    { id: "SVC", name: "Silver City", county: "nm-grant-hidalgo-luna", lat: 32.78, lon: -108.27, type: "mountain", size: 1 },
    { id: "LDBG", name: "Lordsburg", county: "nm-grant-hidalgo-luna", lat: 32.34, lon: -108.7, type: "desert", size: 1 },
    { id: "CLMB", name: "Columbus", county: "nm-grant-hidalgo-luna", lat: 31.83, lon: -107.64, type: "desert", size: 1 },
    { id: "TUL", name: "Tularosa", county: "nm-otero", lat: 33.08, lon: -106.02, type: "farm", size: 1 },
    { id: "CLDC", name: "Cloudcroft", county: "nm-otero", lat: 32.95, lon: -105.73, type: "mountain", size: 1 },
    // White Sands: the gypsum dunes (a national park), at the visitor center on US-70.
    { id: "WSA", name: "White Sands", county: "nm-otero", lat: 32.78, lon: -106.17, scenic: true, type: "desert", size: 1 },
    // Carrizozo: where US-54 and US-380 cross. At the town; the Census point is 2 mi east.
    { id: "CZZ", name: "Carrizozo", county: "nm-lincoln", lat: 33.64, lon: -105.88, type: "desert", size: 1 },
    // Capitan: Smokey Bear's home.
    { id: "CAP", name: "Capitan", county: "nm-lincoln", lat: 33.54, lon: -105.6, type: "mountain", size: 1 },
    // The Pecos and the Permian Basin
    { id: "DXT", name: "Dexter", county: "nm-chaves", lat: 33.19, lon: -104.37, type: "farm", size: 1 },
    { id: "ART", name: "Artesia", county: "nm-eddy", lat: 32.85, lon: -104.42, type: "desert", size: 1 },
    // Carlsbad Caverns: the national park's caves, at the visitor center.
    { id: "CCAV", name: "Carlsbad Caverns", county: "nm-eddy", lat: 32.18, lon: -104.44, scenic: true, type: "desert", size: 1 },
    { id: "LOV", name: "Lovington", county: "nm-lea", lat: 32.94, lon: -103.35, type: "desert", size: 1 },
    { id: "EUN", name: "Eunice", county: "nm-lea", lat: 32.44, lon: -103.15, type: "desert", size: 1 },
    { id: "JAL", name: "Jal", county: "nm-lea", lat: 32.11, lon: -103.19, type: "desert", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Albuquerque & Santa Fe",
      areas: ["rio"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Route 66 & the Santa Fe Trail",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Gallup to Tucumcari, as I-40 (Route 66) runs
        { kind: "connect", a: "GUP", b: "TCC" },
        { kind: "counties", target: 12 },
      ],
    },
    {
      name: "The Rio Grande & the Gila",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Down I-25 to Las Cruces
        { kind: "connect", a: "ABQ", b: "LCR" },
        { kind: "cargo", cargo: "trucks", target: 25 },
      ],
    },
    {
      name: "The Pecos & the Permian Basin",
      areas: ["pecos"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        { kind: "connect", a: "ABQ", b: "CBAD" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
  ],
  // Real mountain passes and canyons: [name, latitude, longitude]. Track that crosses mountains
  // near one goes over the pass (it costs more and trains climb slowly); anywhere else,
  // mountains need a tunnel. Points from memory (approx.); sources in NOTES.md. Raton Pass and
  // Cumbres Pass are in Colorado's pack.
  passes: [
    ["Tijeras Canyon", 35.08, -106.4], // I-40 (Route 66) between the Sandias and the Manzanos
    ["Glorieta Pass", 35.58, -105.77], // I-25 and the BNSF (Amtrak's Southwest Chief), Santa Fe to Las Vegas
    ["Rio Grande Gorge", 36.27, -105.79], // NM-68 along the river, Española to Taos
    ["Palo Flechado Pass", 36.39, -105.37], // US-64, Taos to Angel Fire
    ["Cimarron Canyon", 36.53, -105.17], // US-64, Eagle Nest to Cimarron
    ["San Augustin Pass", 32.43, -106.56], // US-70 over the Organ Mountains, Las Cruces to White Sands
    ["Emory Pass", 32.91, -107.76], // NM-152 over the Black Range, Silver City to Hillsboro
  ],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow
  // enough. River bridges sit on the map's river where it passes the town.
  bridges: [
    // The Rio Grande
    ["Rio Grande Gorge Bridge", 36.48, -105.73], // US-64, 650 feet over the gorge west of Taos
    ["Rio Grande bridge (Española)", 36.0, -106.08],
    ["Otowi Bridge", 35.87, -106.14], // NM-502 to Los Alamos
    ["Rio Grande bridge (Bernalillo)", 35.32, -106.57], // US-550
    ["Paseo del Norte Bridge", 35.18, -106.67], // Albuquerque's north side, to Rio Rancho
    ["Rio Grande bridges (Albuquerque)", 35.08, -106.68], // Central Avenue and I-40
    ["Rio Grande bridge (Isleta)", 34.89, -106.71], // the BNSF (Southwest Chief, Rail Runner) at Isleta Pueblo
    ["Rio Grande bridge (Los Lunas)", 34.81, -106.72], // NM-6
    ["Rio Grande bridge (Belen)", 34.66, -106.75],
    ["Rio Grande bridge (Truth or Consequences)", 33.13, -107.25],
    ["Rio Grande bridge (Hatch)", 32.67, -107.16],
    ["Rio Grande bridge (Las Cruces)", 32.32, -106.84], // US-70 (Picacho Avenue)
    // The Rio Chama
    ["Rio Chama bridge (Abiquiu)", 36.22, -106.3], // US-84
    // The Pecos
    ["Pecos River bridge (Santa Rosa)", 34.95, -104.66],
    ["Pecos River bridge (Fort Sumner)", 34.47, -104.23],
    ["Pecos River bridge (Artesia)", 32.85, -104.3], // US-82
    ["Pecos River bridge (Carlsbad)", 32.41, -104.15], // US-62/180; on the map's river, 4 mi east of the real one
    // The San Juan, the Animas and the Canadian
    ["San Juan River bridge (Farmington)", 36.74, -108.2],
    ["San Juan River bridge (Bloomfield)", 36.72, -107.98],
    ["San Juan River bridge (Shiprock)", 36.79, -108.67], // US-491
    ["Animas River bridge (Aztec)", 36.83, -108.0],
    ["Canadian River bridge (Logan)", 35.37, -103.41], // US-54 below Ute Dam
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // Los Alamos: ponderosa pine on the Pajarito Plateau, 7,300 feet up
    forest: ["nm-los-alamos"],
    // Forested mountains over valleys and plains: the Sangre de Cristo, the Jemez, the
    // Sacramentos and Raton Mesa (Colorado's Huerfano-Las Animas is wooded across the line)
    wooded: ["nm-colfax-union", "nm-lincoln", "nm-mora-san-miguel", "nm-rio-arriba-taos", "nm-sandoval", "nm-santa-fe"],
    // The deserts: the Rio Grande's valley and basins, the Four Corners and the Navajo country
    // (Arizona's Apache is dry across the line), the Gila and the Chihuahuan Desert, and the
    // Pecos valley and the Permian Basin
    dry: [
      "nm-bernalillo", "nm-catron-sierra-socorro", "nm-chaves", "nm-cibola", "nm-dona-ana", "nm-eddy",
      "nm-grant-hidalgo-luna", "nm-lea", "nm-mckinley", "nm-otero", "nm-san-juan", "nm-valencia",
    ],
    // Not listed (farmland and grassland): the eastern plains (Harding-Quay, Curry-De Baca-
    // Roosevelt, Guadalupe-Torrance).
  },
});
