// National Railways pack: Oklahoma.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// and where the forests and deserts are. The county borders come from map.js and the
// mountains, lakes and rivers from terrain.js. What each field means: PACKS.md. Judgment calls
// and sources: packs/OK/NOTES.md. Cities and populations: U.S. Census Bureau (2020), packs/OK/raw.
NR.addPack({
  code: "OK",
  name: "Oklahoma",
  // A game that starts here begins owning these counties: Oklahoma City, El Reno (Canadian
  // County, west on I-40) and Norman (Cleveland County, south on I-35). Both touch Oklahoma
  // County. El Reno is farm, so the first track (Oklahoma City–El Reno, the nearest pair of
  // different types) has riders.
  start: ["ok-oklahoma", "ok-canadian", "ok-cleveland"],
  // Main stations: one per county region, at its biggest place except where a comment says why.
  // id = the short code shown on passengers. county = region id in this folder's map.js.
  // pop = region population in thousands (2020 census). size = how busy (1 to 5). level = which
  // level unlocks it in Levels mode. airport = its name, if it has a big one. scenic = a place
  // tourists travel to. Oklahoma has no seaport. Points are the Census points, except Tulsa's,
  // Norman's, Shawnee's, Chandler's and Elk City's (moved to their downtowns: NOTES.md).
  stations: [
    // Level 1: Oklahoma City and central Oklahoma
    // Oklahoma City: the capital and biggest city, size 4 (as Denver, Albuquerque and Omaha).
    // Will Rogers World Airport is the state's biggest. The Census point is downtown.
    { id: "OKC", name: "Oklahoma City", county: "ok-oklahoma", lat: 35.47, lon: -97.51, airport: "Will Rogers World Airport", type: "metro", size: 4, pop: 797, main: true, level: "central" },
    // Norman: the University of Oklahoma, Moore and the south side of the metro. At downtown
    // (Main Street, by the campus); the Census point is 5.5 miles east, by Lake Thunderbird's
    // side of the city. Size 3 (as Lincoln, Nebraska, 323k, and Boulder, 331k).
    { id: "NOR", name: "Norman", county: "ok-cleveland", lat: 35.22, lon: -97.44, type: "metro", size: 3, pop: 296, main: true, level: "central" },
    // El Reno, not Yukon (the biggest place, 23,638): El Reno (16,997) is the county seat, in the
    // middle of the county on I-40, US-81 and the Union Pacific; Yukon is Oklahoma City's western
    // suburb at the county's east edge, 14 miles from downtown, and is a town here. Farm (wheat
    // and cattle; Fort Reno), so the start has riders.
    { id: "ELR", name: "El Reno", county: "ok-canadian", lat: 35.54, lon: -97.96, type: "farm", size: 2, pop: 154, main: true, level: "central" },
    // Guthrie: the territorial capital; its Victorian downtown is a National Historic Landmark
    // district, so scenic. On I-35 and the BNSF north of Oklahoma City.
    { id: "GTH", name: "Guthrie", county: "ok-logan", lat: 35.88, lon: -97.41, scenic: true, type: "farm", size: 1, pop: 50, main: true, level: "central" },
    // Stillwater: Oklahoma State University.
    { id: "STIL", name: "Stillwater", county: "ok-payne", lat: 36.13, lon: -97.07, type: "metro", size: 2, pop: 82, main: true, level: "central" },
    // Shawnee: at downtown (Main Street); the Census point is 3.1 miles north-west.
    { id: "SHAW", name: "Shawnee", county: "ok-pottawatomie", lat: 35.33, lon: -96.93, type: "metro", size: 2, pop: 72, main: true, level: "central" },
    { id: "CHKA", name: "Chickasha", county: "ok-grady", lat: 35.04, lon: -97.95, type: "farm", size: 1, pop: 55, main: true, level: "central" },
    // Purcell, not Newcastle (the biggest place, 10,989): Purcell (6,657) is McClain County's
    // seat, in the middle of the region on I-35, the BNSF and the Heartland Flyer, 20 miles from
    // Newcastle and 23 from Pauls Valley. Newcastle sits at Oklahoma City's edge, 9 miles from
    // Norman; it is a town here.
    { id: "PURC", name: "Purcell", county: "ok-garvin-mcclain", lat: 35.02, lon: -97.37, type: "farm", size: 1, pop: 67, main: true, level: "central" },
    // Chandler, not Okemah (the biggest place by 215 people): Chandler (2,857) is Lincoln County's
    // seat, and Lincoln has three quarters of the region's people; it is on the Turner Turnpike
    // (I-44) and Route 66 between Oklahoma City and Tulsa. At downtown; the Census point is 2.6
    // miles east. Okemah, on I-40, is a town.
    { id: "CHND", name: "Chandler", county: "ok-lincoln-okfuskee", lat: 35.7, lon: -96.88, type: "farm", size: 1, pop: 45, main: true, level: "central" },
    { id: "KFSH", name: "Kingfisher", county: "ok-blaine-kingfisher-major", lat: 35.84, lon: -97.94, type: "farm", size: 1, pop: 32, main: true, level: "central" },
    // Seminole: the oil town of the Greater Seminole field.
    { id: "SEMI", name: "Seminole", county: "ok-hughes-seminole", lat: 35.23, lon: -96.65, type: "farm", size: 1, pop: 37, main: true, level: "central" },
    // Level 2: Tulsa and Green Country
    // Tulsa: size 4 (669k, as Omaha's 585k and Colorado Springs' 730k), with Tulsa International
    // Airport. At downtown; the Census point is 5.1 miles east, in the middle of the city limits.
    { id: "TULS", name: "Tulsa", county: "ok-tulsa", lat: 36.15, lon: -95.99, airport: "Tulsa International Airport", type: "metro", size: 4, pop: 669, main: true, level: "northeast" },
    // Sapulpa: Tulsa's south-west suburb on I-44 and Route 66.
    { id: "SAPU", name: "Sapulpa", county: "ok-creek", lat: 36.0, lon: -96.12, type: "metro", size: 2, pop: 72, main: true, level: "northeast" },
    // Claremore: Tulsa's north-east suburb on I-44; the Will Rogers Memorial Museum is here, so
    // scenic.
    { id: "CLM", name: "Claremore", county: "ok-rogers", lat: 36.31, lon: -95.61, scenic: true, type: "metro", size: 2, pop: 95, main: true, level: "northeast" },
    // Coweta: the biggest place (Wagoner, the county seat, is a town). Farm: Wagoner County's
    // suburbs are Broken Arrow's east side (a town in Tulsa's region); the rest is farmland by
    // Fort Gibson Lake.
    { id: "COWT", name: "Coweta", county: "ok-wagoner", lat: 35.97, lon: -95.67, type: "farm", size: 2, pop: 81, main: true, level: "northeast" },
    // Bartlesville: the oil city of Phillips Petroleum.
    { id: "BART", name: "Bartlesville", county: "ok-washington", lat: 36.74, lon: -95.95, type: "metro", size: 2, pop: 52, main: true, level: "northeast" },
    // Muskogee: where the Arkansas, Verdigris and Grand rivers meet; US-69 and the Muskogee
    // Turnpike.
    { id: "MUSK", name: "Muskogee", county: "ok-muskogee", lat: 35.74, lon: -95.36, type: "metro", size: 2, pop: 66, main: true, level: "northeast" },
    // Okmulgee: the Muscogee (Creek) Nation's capital, on US-75.
    { id: "OKMG", name: "Okmulgee", county: "ok-mcintosh-okmulgee", lat: 35.63, lon: -95.95, type: "farm", size: 1, pop: 56, main: true, level: "northeast" },
    // Hominy: the biggest place, between Pawhuska (17 miles) and Cleveland (9). Osage ranch
    // country.
    { id: "HMNY", name: "Hominy", county: "ok-osage-pawnee", lat: 36.42, lon: -96.39, type: "farm", size: 1, pop: 61, main: true, level: "northeast" },
    // Pryor (the Census name is Pryor Creek): on US-69 and the old Katy line.
    { id: "PRY", name: "Pryor", county: "ok-craig-mayes-nowata", lat: 36.3, lon: -95.31, type: "farm", size: 1, pop: 62, main: true, level: "northeast" },
    // Miami: on I-44 and US-69 by Kansas and Missouri, above Grand Lake.
    { id: "MIAM", name: "Miami", county: "ok-delaware-ottawa", lat: 36.89, lon: -94.87, type: "farm", size: 1, pop: 71, main: true, level: "northeast" },
    // Tahlequah: the Cherokee Nation's capital and Northeastern State University, so metro (as
    // Kansas's Pittsburg and Emporia).
    { id: "TAHL", name: "Tahlequah", county: "ok-adair-cherokee", lat: 35.91, lon: -94.98, type: "metro", size: 1, pop: 67, main: true, level: "northeast" },
    // Sallisaw: on I-40 toward Fort Smith.
    { id: "SLSW", name: "Sallisaw", county: "ok-haskell-sequoyah", lat: 35.46, lon: -94.81, type: "farm", size: 1, pop: 51, main: true, level: "northeast" },
    // Level 3: Lawton, Lake Texoma and the Ouachitas
    // Lawton: Fort Sill and the Wichita Mountains.
    { id: "LAW", name: "Lawton", county: "ok-comanche", lat: 34.62, lon: -98.42, type: "metro", size: 2, pop: 121, main: true, level: "south" },
    // Duncan: on US-81, the old Chisholm Trail; oil and cattle.
    { id: "DNCN", name: "Duncan", county: "ok-jefferson-stephens", lat: 34.48, lon: -97.96, type: "farm", size: 1, pop: 48, main: true, level: "south" },
    { id: "FRDK", name: "Frederick", county: "ok-cotton-tillman", lat: 34.35, lon: -98.99, type: "farm", size: 1, pop: 12, main: true, level: "south" },
    // Ardmore: southern Oklahoma's city on I-35, so metro.
    { id: "ARD", name: "Ardmore", county: "ok-carter-love", lat: 34.2, lon: -97.13, type: "metro", size: 1, pop: 58, main: true, level: "south" },
    // Sulphur: the Chickasaw National Recreation Area (Platt National Park, its springs and
    // the Lake of the Arbuckles) is at the edge of town, so scenic.
    { id: "SULP", name: "Sulphur", county: "ok-johnston-murray", lat: 34.5, lon: -96.99, scenic: true, type: "farm", size: 1, pop: 24, main: true, level: "south" },
    // Ada: East Central University and the Chickasaw Nation's headquarters, so metro.
    { id: "ADA", name: "Ada", county: "ok-coal-pontotoc", lat: 34.77, lon: -96.67, type: "metro", size: 1, pop: 43, main: true, level: "south" },
    // Durant: Southeastern Oklahoma State University and the Choctaw Nation's headquarters, by
    // Lake Texoma, so metro.
    { id: "DUR", name: "Durant", county: "ok-bryan-marshall", lat: 34.0, lon: -96.39, type: "metro", size: 1, pop: 61, main: true, level: "south" },
    // McAlester: south-east Oklahoma's city on US-69, so metro.
    { id: "MCAL", name: "McAlester", county: "ok-atoka-pittsburg", lat: 34.93, lon: -95.77, type: "metro", size: 1, pop: 58, main: true, level: "south" },
    // Idabel: the biggest place, in McCurtain County (55% of the region's people), with Broken
    // Bow 10 miles away. Hugo, the central town, is a town here (NOTES.md).
    { id: "IDBL", name: "Idabel", county: "ok-choctaw-mccurtain-pushmataha", lat: 33.91, lon: -94.82, type: "farm", size: 1, pop: 56, main: true, level: "south" },
    // Poteau: in the Ouachita Mountains (Cavanal Hill, Winding Stair), so mountain.
    { id: "POTU", name: "Poteau", county: "ok-latimer-le-flore", lat: 35.07, lon: -94.61, type: "mountain", size: 1, pop: 58, main: true, level: "south" },
    // Level 4: Enid, western Oklahoma and the Panhandle
    // Enid: north-west Oklahoma's city (Vance Air Force Base, the grain elevators).
    { id: "ENID", name: "Enid", county: "ok-garfield", lat: 36.41, lon: -97.87, type: "metro", size: 2, pop: 63, main: true, level: "west" },
    // Ponca City: north-central Oklahoma's city by the Arkansas, so metro.
    { id: "PNCA", name: "Ponca City", county: "ok-grant-kay-noble", lat: 36.72, lon: -97.07, type: "metro", size: 1, pop: 59, main: true, level: "west" },
    { id: "ALVA", name: "Alva", county: "ok-alfalfa-woods", lat: 36.79, lon: -98.66, type: "farm", size: 1, pop: 14, main: true, level: "west" },
    // Woodward: on the BNSF's Southern Transcon and the North Canadian.
    { id: "WDWD", name: "Woodward", county: "ok-ellis-harper-woodward", lat: 36.42, lon: -99.4, type: "farm", size: 1, pop: 27, main: true, level: "west" },
    // Guymon: the Panhandle's town (pork and feedlots).
    { id: "GUY", name: "Guymon", county: "ok-beaver-cimarron-texas", lat: 36.69, lon: -101.48, type: "farm", size: 1, pop: 29, main: true, level: "west" },
    // Elk City: on I-40 and Route 66. At downtown; the Census point is 2.1 miles south-west.
    { id: "ELKC", name: "Elk City", county: "ok-beckham-roger-mills", lat: 35.41, lon: -99.4, type: "farm", size: 1, pop: 26, main: true, level: "west" },
    // Weatherford: on I-40 (Southwestern Oklahoma State University).
    { id: "WEA", name: "Weatherford", county: "ok-custer-dewey-washita", lat: 35.54, lon: -98.69, type: "farm", size: 1, pop: 44, main: true, level: "west" },
    { id: "ANDK", name: "Anadarko", county: "ok-caddo-kiowa", lat: 35.07, lon: -98.24, type: "farm", size: 1, pop: 35, main: true, level: "west" },
    // Altus: cotton and wheat, and Altus Air Force Base.
    { id: "ALTS", name: "Altus", county: "ok-greer-harmon-jackson", lat: 34.66, lon: -99.31, type: "farm", size: 1, pop: 33, main: true, level: "west" },
  ],
  // Towns: they appear over time, but only inside counties you own. Same fields, without level.
  // Scenic places that aren't towns sit at their landmark or visitor center (sources in NOTES.md).
  towns: [
    // Oklahoma City and central Oklahoma
    // Edmond: Oklahoma City's biggest suburb (94k), size 2 (as Kansas's Olathe). At downtown;
    // the Census point is 4.1 miles east.
    { id: "EDMD", name: "Edmond", county: "ok-oklahoma", lat: 35.65, lon: -97.48, type: "metro", size: 2 },
    { id: "MWC", name: "Midwest City", county: "ok-oklahoma", lat: 35.46, lon: -97.37, type: "metro", size: 2 },
    { id: "MOOR", name: "Moore", county: "ok-cleveland", lat: 35.33, lon: -97.47, type: "metro", size: 2 },
    // Yukon: Canadian County's biggest city, Oklahoma City's western suburb on I-40.
    { id: "YUKN", name: "Yukon", county: "ok-canadian", lat: 35.52, lon: -97.77, type: "metro", size: 2 },
    { id: "MUST", name: "Mustang", county: "ok-canadian", lat: 35.39, lon: -97.73, type: "metro", size: 1 },
    // Langston: Langston University.
    { id: "LANG", name: "Langston", county: "ok-logan", lat: 35.93, lon: -97.28, type: "farm", size: 1 },
    // Cushing: the oil pipeline and tank-farm hub.
    { id: "CUSH", name: "Cushing", county: "ok-payne", lat: 35.98, lon: -96.76, type: "farm", size: 1 },
    { id: "TECU", name: "Tecumseh", county: "ok-pottawatomie", lat: 35.26, lon: -96.93, type: "farm", size: 1 },
    // Tuttle: at the town (the Census point is 3.6 miles north-east, in the city's farmland).
    { id: "TUTL", name: "Tuttle", county: "ok-grady", lat: 35.29, lon: -97.81, type: "farm", size: 1 },
    // Newcastle: the biggest place in Garvin-McClain, at Oklahoma City's south-west edge on I-44.
    { id: "NWCS", name: "Newcastle", county: "ok-garvin-mcclain", lat: 35.24, lon: -97.6, type: "metro", size: 1 },
    // Pauls Valley: Garvin County's seat on I-35 and the Washita. At downtown; the Census point is
    // 2.1 miles south.
    { id: "PVLY", name: "Pauls Valley", county: "ok-garvin-mcclain", lat: 34.74, lon: -97.22, type: "farm", size: 1 },
    // Okemah: Okfuskee County's seat on I-40 (the region's biggest place, 3,072).
    { id: "OKEM", name: "Okemah", county: "ok-lincoln-okfuskee", lat: 35.43, lon: -96.3, type: "farm", size: 1 },
    // Stroud: on the Turner Turnpike and Route 66.
    { id: "STRD", name: "Stroud", county: "ok-lincoln-okfuskee", lat: 35.77, lon: -96.65, type: "farm", size: 1 },
    { id: "WATG", name: "Watonga", county: "ok-blaine-kingfisher-major", lat: 35.85, lon: -98.4, type: "farm", size: 1 },
    { id: "FRVW", name: "Fairview", county: "ok-blaine-kingfisher-major", lat: 36.27, lon: -98.48, type: "farm", size: 1 },
    { id: "HLDV", name: "Holdenville", county: "ok-hughes-seminole", lat: 35.08, lon: -96.4, type: "farm", size: 1 },
    // Tulsa and Green Country
    // Broken Arrow: Tulsa's biggest suburb (114k), size 2.
    { id: "BKAR", name: "Broken Arrow", county: "ok-tulsa", lat: 36.04, lon: -95.78, type: "metro", size: 2 },
    { id: "OWAS", name: "Owasso", county: "ok-tulsa", lat: 36.29, lon: -95.84, type: "metro", size: 1 },
    { id: "SDSP", name: "Sand Springs", county: "ok-tulsa", lat: 36.14, lon: -96.13, type: "metro", size: 1 },
    // Catoosa: the Blue Whale of Catoosa, Route 66's best-known roadside landmark, so scenic.
    { id: "CATO", name: "Catoosa", county: "ok-rogers", lat: 36.18, lon: -95.77, scenic: true, type: "metro", size: 1 },
    // Wagoner: Wagoner County's seat on US-69, by Fort Gibson Lake.
    { id: "WAGN", name: "Wagoner", county: "ok-wagoner", lat: 35.97, lon: -95.38, type: "farm", size: 1 },
    { id: "BRIS", name: "Bristow", county: "ok-creek", lat: 35.83, lon: -96.39, type: "farm", size: 1 },
    // Mannford: on Keystone Lake.
    { id: "MANF", name: "Mannford", county: "ok-creek", lat: 36.13, lon: -96.33, type: "farm", size: 1 },
    // Fort Gibson: the 1824 frontier fort (Fort Gibson Historic Site), so scenic.
    { id: "FTGB", name: "Fort Gibson", county: "ok-muskogee", lat: 35.78, lon: -95.26, scenic: true, type: "farm", size: 1 },
    { id: "HNRT", name: "Henryetta", county: "ok-mcintosh-okmulgee", lat: 35.44, lon: -95.99, type: "farm", size: 1 },
    // Checotah: where I-40 meets US-69.
    { id: "CHEC", name: "Checotah", county: "ok-mcintosh-okmulgee", lat: 35.48, lon: -95.52, type: "farm", size: 1 },
    // Eufaula: on Eufaula Lake, Oklahoma's biggest.
    { id: "EUFA", name: "Eufaula", county: "ok-mcintosh-okmulgee", lat: 35.29, lon: -95.59, type: "farm", size: 1 },
    // Pawhuska: Osage County's seat and the Osage Nation's capital.
    { id: "PAWH", name: "Pawhuska", county: "ok-osage-pawnee", lat: 36.67, lon: -96.33, type: "farm", size: 1 },
    { id: "CLEV", name: "Cleveland", county: "ok-osage-pawnee", lat: 36.31, lon: -96.47, type: "farm", size: 1 },
    // Tallgrass Prairie Preserve: the largest protected tallgrass prairie, with its bison herd,
    // at the headquarters north of Pawhuska (approx.).
    { id: "TGPP", name: "Tallgrass Prairie Preserve", county: "ok-osage-pawnee", lat: 36.84, lon: -96.42, scenic: true, type: "farm", size: 1 },
    { id: "VINI", name: "Vinita", county: "ok-craig-mayes-nowata", lat: 36.65, lon: -95.16, type: "farm", size: 1 },
    { id: "NOWA", name: "Nowata", county: "ok-craig-mayes-nowata", lat: 36.7, lon: -95.64, type: "farm", size: 1 },
    // Grove: Grand Lake's town.
    { id: "GROV", name: "Grove", county: "ok-delaware-ottawa", lat: 36.59, lon: -94.79, type: "farm", size: 1 },
    { id: "STLW", name: "Stilwell", county: "ok-adair-cherokee", lat: 35.81, lon: -94.63, type: "farm", size: 1 },
    { id: "STGL", name: "Stigler", county: "ok-haskell-sequoyah", lat: 35.26, lon: -95.12, type: "farm", size: 1 },
    // Roland: across the Arkansas from Fort Smith, on I-40.
    { id: "RLND", name: "Roland", county: "ok-haskell-sequoyah", lat: 35.41, lon: -94.51, type: "farm", size: 1 },
    // Lawton, Lake Texoma and the Ouachitas
    { id: "ELGN", name: "Elgin", county: "ok-comanche", lat: 34.79, lon: -98.3, type: "farm", size: 1 },
    // Wichita Mountains Wildlife Refuge: granite peaks (Mount Scott), bison and longhorns, in the
    // refuge's middle by the visitor center (approx.).
    { id: "WMWR", name: "Wichita Mountains Wildlife Refuge", county: "ok-comanche", lat: 34.74, lon: -98.62, scenic: true, type: "mountain", size: 1 },
    { id: "MRLW", name: "Marlow", county: "ok-jefferson-stephens", lat: 34.63, lon: -97.96, type: "farm", size: 1 },
    { id: "WAUR", name: "Waurika", county: "ok-jefferson-stephens", lat: 34.18, lon: -98.03, type: "farm", size: 1 },
    // Walters: Cotton County's seat, at the town (the Census point is 2.7 miles west).
    { id: "WLTR", name: "Walters", county: "ok-cotton-tillman", lat: 34.36, lon: -98.31, type: "farm", size: 1 },
    { id: "MARI", name: "Marietta", county: "ok-carter-love", lat: 33.94, lon: -97.12, type: "farm", size: 1 },
    { id: "TISH", name: "Tishomingo", county: "ok-johnston-murray", lat: 34.24, lon: -96.68, type: "farm", size: 1 },
    // Davis: on I-35 at the Arbuckles' north foot. At downtown; the Census point is 5.8 miles
    // south-west, as the city's limits run down I-35 to Turner Falls.
    { id: "DAVS", name: "Davis", county: "ok-johnston-murray", lat: 34.5, lon: -97.12, type: "farm", size: 1 },
    // Turner Falls: the Arbuckle Mountains' waterfall by I-35 (approx.).
    { id: "TFLS", name: "Turner Falls", county: "ok-johnston-murray", lat: 34.42, lon: -97.15, scenic: true, type: "mountain", size: 1 },
    { id: "CGT", name: "Coalgate", county: "ok-coal-pontotoc", lat: 34.53, lon: -96.22, type: "farm", size: 1 },
    { id: "MADL", name: "Madill", county: "ok-bryan-marshall", lat: 34.09, lon: -96.77, type: "farm", size: 1 },
    // Kingston: on Lake Texoma, by the Roosevelt Bridge.
    { id: "KNGS", name: "Kingston", county: "ok-bryan-marshall", lat: 34.0, lon: -96.71, type: "farm", size: 1 },
    { id: "ATOK", name: "Atoka", county: "ok-atoka-pittsburg", lat: 34.39, lon: -96.13, type: "farm", size: 1 },
    // Hugo: Choctaw County's seat, where US-70 meets US-271 by Hugo Lake.
    { id: "HUGO", name: "Hugo", county: "ok-choctaw-mccurtain-pushmataha", lat: 34.01, lon: -95.51, type: "farm", size: 1 },
    { id: "BKBW", name: "Broken Bow", county: "ok-choctaw-mccurtain-pushmataha", lat: 34.03, lon: -94.74, type: "farm", size: 1 },
    // Beavers Bend State Park: the Mountain Fork's pine-forested valley below Broken Bow Lake
    // (approx.).
    { id: "BBSP", name: "Beavers Bend", county: "ok-choctaw-mccurtain-pushmataha", lat: 34.13, lon: -94.69, scenic: true, type: "mountain", size: 1 },
    { id: "ANTL", name: "Antlers", county: "ok-choctaw-mccurtain-pushmataha", lat: 34.23, lon: -95.62, type: "farm", size: 1 },
    { id: "WILB", name: "Wilburton", county: "ok-latimer-le-flore", lat: 34.92, lon: -95.3, type: "farm", size: 1 },
    { id: "HVNR", name: "Heavener", county: "ok-latimer-le-flore", lat: 34.89, lon: -94.61, type: "farm", size: 1 },
    // Talimena Scenic Drive: the ridge road over Winding Stair Mountain from Talihina to Arkansas,
    // at its middle in Oklahoma (approx.).
    { id: "TALI", name: "Talimena Scenic Drive", county: "ok-latimer-le-flore", lat: 34.74, lon: -94.75, scenic: true, type: "mountain", size: 1 },
    // Enid, western Oklahoma and the Panhandle
    { id: "WAUK", name: "Waukomis", county: "ok-garfield", lat: 36.29, lon: -97.9, type: "farm", size: 1 },
    { id: "BLKW", name: "Blackwell", county: "ok-grant-kay-noble", lat: 36.8, lon: -97.3, type: "farm", size: 1 },
    // Perry: Noble County's seat on I-35 and the BNSF.
    { id: "PERY", name: "Perry", county: "ok-grant-kay-noble", lat: 36.28, lon: -97.31, type: "farm", size: 1 },
    // Medford: Grant County's seat on US-81.
    { id: "MDFD", name: "Medford", county: "ok-grant-kay-noble", lat: 36.8, lon: -97.74, type: "farm", size: 1 },
    { id: "CHER", name: "Cherokee", county: "ok-alfalfa-woods", lat: 36.75, lon: -98.36, type: "farm", size: 1 },
    // The Great Salt Plains: the salt flat west of Jet, where visitors dig selenite crystals
    // (approx.), so desert (as Kansas's Monument Rocks).
    { id: "GSPL", name: "Great Salt Plains", county: "ok-alfalfa-woods", lat: 36.72, lon: -98.26, scenic: true, type: "desert", size: 1 },
    // Little Sahara State Park: sand dunes by the Cimarron south of Waynoka (approx.), so desert.
    { id: "LSAH", name: "Little Sahara", county: "ok-alfalfa-woods", lat: 36.53, lon: -98.88, scenic: true, type: "desert", size: 1 },
    { id: "SHTK", name: "Shattuck", county: "ok-ellis-harper-woodward", lat: 36.27, lon: -99.88, type: "farm", size: 1 },
    { id: "BUFF", name: "Buffalo", county: "ok-ellis-harper-woodward", lat: 36.83, lon: -99.64, type: "farm", size: 1 },
    { id: "BEAV", name: "Beaver", county: "ok-beaver-cimarron-texas", lat: 36.82, lon: -100.52, type: "farm", size: 1 },
    { id: "BOIS", name: "Boise City", county: "ok-beaver-cimarron-texas", lat: 36.73, lon: -102.51, type: "farm", size: 1 },
    // Black Mesa: Oklahoma's highest point (4,973 feet), by Kenton in the Panhandle's far corner
    // (approx.).
    { id: "BMSA", name: "Black Mesa", county: "ok-beaver-cimarron-texas", lat: 36.92, lon: -102.96, scenic: true, type: "mountain", size: 1 },
    { id: "SAYR", name: "Sayre", county: "ok-beckham-roger-mills", lat: 35.3, lon: -99.63, type: "farm", size: 1 },
    // Washita Battlefield National Historic Site, west of Cheyenne (approx.).
    { id: "WABF", name: "Washita Battlefield", county: "ok-beckham-roger-mills", lat: 35.62, lon: -99.7, scenic: true, type: "farm", size: 1 },
    // Clinton: the Oklahoma Route 66 Museum, so scenic.
    { id: "CLIN", name: "Clinton", county: "ok-custer-dewey-washita", lat: 35.51, lon: -98.97, scenic: true, type: "farm", size: 1 },
    // Cordell (the Census name is New Cordell): Washita County's seat.
    { id: "CORD", name: "Cordell", county: "ok-custer-dewey-washita", lat: 35.3, lon: -98.98, type: "farm", size: 1 },
    { id: "SEIL", name: "Seiling", county: "ok-custer-dewey-washita", lat: 36.14, lon: -98.93, type: "farm", size: 1 },
    { id: "HOBT", name: "Hobart", county: "ok-caddo-kiowa", lat: 35.02, lon: -99.09, type: "farm", size: 1 },
    // Hinton: on I-40 by the Canadian.
    { id: "HNTN", name: "Hinton", county: "ok-caddo-kiowa", lat: 35.49, lon: -98.35, type: "farm", size: 1 },
    { id: "MNGM", name: "Mangum", county: "ok-greer-harmon-jackson", lat: 34.88, lon: -99.5, type: "farm", size: 1 },
    { id: "HOLS", name: "Hollis", county: "ok-greer-harmon-jackson", lat: 34.69, lon: -99.92, type: "farm", size: 1 },
  ],
  // Levels mode (when the game starts here): finish every goal on a level's checklist to open
  // the next part of the state. Goal kinds are described in js/game.js ("Goals and contracts").
  levels: [
    {
      name: "Oklahoma City & Central Oklahoma",
      areas: ["central"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 5 },
        { kind: "cargo", cargo: "produce", target: 10 },
      ],
    },
    {
      name: "Tulsa & Green Country",
      areas: ["northeast"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        // Oklahoma City to Tulsa, as the Turner Turnpike (I-44) and Route 66 run (by Chandler,
        // Stroud, Bristow and Sapulpa)
        { kind: "connect", a: "OKC", b: "TULS" },
        { kind: "counties", target: 12 },
      ],
    },
    {
      name: "Lawton, Lake Texoma & the Ouachitas",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        // Oklahoma City to Ardmore down I-35 and the Heartland Flyer's line (by Norman, Purcell,
        // Pauls Valley and Davis)
        { kind: "connect", a: "OKC", b: "ARD" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
    {
      name: "Enid, Western Oklahoma & the Panhandle",
      areas: ["west"],
      goals: [
        { kind: "totalPassengers", target: 450 },
        // West on I-40 and Route 66, from Oklahoma City to Elk City (by El Reno, Weatherford and
        // Clinton)
        { kind: "connect", a: "OKC", b: "ELKC" },
        { kind: "counties", target: 25 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Oklahoma's map is flat but for
  // the Ouachitas' hills in the south-east and one mountain cell by Poteau, so none (NOTES.md).
  passes: [],
  // Real bridges: [name, latitude, longitude]. Water crossed near one uses the real bridge
  // (cheaper, and any length); anywhere else you build a new bridge, if the water is narrow enough.
  // Placed on the map's river or lake where the real crossing is, or where the map's river passes
  // the town. Sources in NOTES.md.
  bridges: [
    // The North Canadian (the Oklahoma River at Oklahoma City) and the Beaver (its upper course)
    ["Oklahoma River bridges (downtown Oklahoma City)", 35.46, -97.52],
    ["North Canadian River bridge (Route 66, Lake Overholser)", 35.5, -97.68],
    ["North Canadian River bridge (US-81, El Reno)", 35.56, -97.95],
    ["North Canadian River bridges (Shawnee)", 35.33, -96.96],
    ["North Canadian River bridge (Woodward)", 36.45, -99.36],
    ["Beaver River bridge (Beaver)", 36.83, -100.53],
    ["Beaver River bridge (US-54, Guymon)", 36.74, -101.44],
    // The Canadian
    ["Canadian River bridge (I-35, Norman)", 35.17, -97.42],
    ["Canadian River bridge (Purcell–Lexington)", 35.01, -97.35],
    ["Canadian River bridge (I-44 and US-62, Newcastle)", 35.31, -97.57],
    ["Canadian River bridge (US-81, Union City)", 35.37, -97.96],
    ["Canadian River bridge (I-40, east of Hinton)", 35.52, -98.26],
    ["Pony Bridge (Route 66, Bridgeport)", 35.56, -98.37],
    // The Arkansas
    ["Arkansas River bridges (Tulsa)", 36.13, -96.0],
    ["Arkansas River bridge (OK-97, Sand Springs)", 36.14, -96.12],
    ["Keystone Dam (Keystone Lake)", 36.15, -96.25],
    ["Arkansas River bridge (OK-99, Cleveland)", 36.33, -96.45],
    ["Arkansas River bridge (US-60, Ponca City)", 36.7, -96.92],
    ["Arkansas River bridge (US-69, Muskogee)", 35.81, -95.36],
    ["Arkansas River bridge (US-62, Muskogee–Fort Gibson)", 35.77, -95.3],
    ["Arkansas River bridge (I-40, Webbers Falls)", 35.51, -95.12],
    ["Arkansas River bridge (US-59, south of Sallisaw)", 35.36, -94.76],
    // The Neosho (Grand), the Verdigris and the Illinois
    ["Neosho River bridges (Miami)", 36.87, -94.88],
    ["Sailboat Bridge (US-59, Grand Lake)", 36.63, -94.79],
    ["Verdigris River bridge (I-44, Catoosa)", 36.24, -95.72],
    ["Verdigris River bridge (US-69, north of Muskogee)", 35.85, -95.36],
    ["Verdigris River bridge (US-60, Nowata)", 36.69, -95.56],
    ["Illinois River bridge (US-62, Tahlequah)", 35.9, -94.94],
    // The Washita
    ["Washita River bridges (Chickasha)", 35.08, -97.93],
    ["Washita River bridge (US-281, Anadarko)", 35.07, -98.28],
    ["Washita River bridge (Clinton)", 35.52, -98.95],
    ["Washita River bridge (Pauls Valley)", 34.77, -97.23],
    ["Washita River bridge (Davis)", 34.47, -97.12],
    ["Roosevelt Bridge (US-70, Lake Texoma)", 34.0, -96.6],
    // The Cimarron
    ["Cimarron River bridge (I-35, Guthrie)", 35.98, -97.41],
    ["Cimarron River bridge (US-177, Perkins)", 35.97, -97.03],
    ["Cimarron River bridge (US-81, Dover)", 35.96, -97.93],
    ["Cimarron River bridge (US-281, Waynoka)", 36.52, -98.89],
    ["Cimarron River bridge (US-287, north of Boise City)", 36.93, -102.54],
    // Eufaula Lake
    ["US-69 bridge (Eufaula Lake, north of Eufaula)", 35.32, -95.57],
    ["US-69 bridge (Eufaula Lake, south of Eufaula)", 35.22, -95.61],
    ["US-69 bridge (Eufaula Lake, Crowder)", 35.1, -95.68],
    ["I-40 bridges (Eufaula Lake)", 35.46, -95.63],
    // The Red River (Texas's line; Texas comes later and will match)
    ["Red River bridge (I-35, Thackerville–Gainesville)", 33.73, -97.15],
    ["Red River bridge (US-69/75, Colbert–Denison)", 33.83, -96.54],
    ["Red River bridge (I-44, Randlett–Burkburnett)", 34.08, -98.48],
    ["Red River bridge (US-271, Hugo–Paris)", 33.88, -95.5],
  ],
  // Cartoon look: forest = trees even on the flats; wooded = trees on the hills;
  // dry = sand, cacti or sagebrush. Counties not listed are green farmland and grassland.
  biomes: {
    // The Ouachita National Forest's pine and oak (Kiamichi Country, Beavers Bend, the Winding
    // Stair) and the Ozark plateau's oak-hickory woods round Tahlequah and the Illinois River
    forest: ["ok-adair-cherokee", "ok-choctaw-mccurtain-pushmataha", "ok-latimer-le-flore"],
    // Trees on the hills: the Ouachitas' foothills round McAlester and the Ozark edge by Grand
    // Lake and Sallisaw
    wooded: ["ok-atoka-pittsburg", "ok-delaware-ottawa", "ok-haskell-sequoyah"],
    // Not listed (farmland and grassland): the wheat and cattle country of the centre and west,
    // the Cross Timbers between Oklahoma City and Tulsa, the red-earth south-west and the
    // Panhandle's short-grass (as Kansas's Morton-Stevens and Colorado's Baca-Kiowa-Prowers
    // across the lines). No `dry`: Oklahoma has no desert; Little Sahara's dunes and the Great
    // Salt Plains are small.
  },
});
