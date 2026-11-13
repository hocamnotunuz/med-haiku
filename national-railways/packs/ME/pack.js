// National Railways pack: Maine.
// Everything hand-made for one state: main stations, towns, levels, mountain passes, bridges,
// the CAT ferry and the water around it, and where the forests are. The county borders come from
// map.js and the mountains, lakes and rivers from terrain.js. What each field means: PACKS.md.
// Judgment calls and sources: packs/ME/NOTES.md. Cities and populations: U.S. Census Bureau (2020),
// packs/ME/raw.
// Maine's 16 counties are 11 regions (tools/build-map.js, STATES.ME): Knox with Waldo (Penobscot Bay),
// Lincoln with Sagadahoc (Bath and the Boothbays), Hancock with Washington (Downeast), Franklin with
// Oxford (the Western Mountains) and Piscataquis with Somerset (Moosehead Lake and the woods); Aroostook,
// Androscoggin, Cumberland, Kennebec, Penobscot and York stand alone. Maine's towns are county
// subdivisions, so the files give a population only to its 23 cities: every other place's size is from
// general knowledge (said in the comments), not Census data.
NR.addPack({
  code: "ME",
  name: "Maine",
  // A game that starts here begins owning Cumberland (Portland, the biggest region), York (Biddeford and
  // Saco) and Androscoggin (Lewiston and Auburn): York and Androscoggin both touch Cumberland (I-295 and
  // the Maine Turnpike). Portland is metro, Biddeford coast and Lewiston farm, so the first track has riders.
  start: ["me-cumberland", "me-york", "me-androscoggin"],
  // Main stations: one per region, at its biggest place except where a comment says why. id = the short
  // code shown on passengers. pop = region population in thousands (2020 census). size = how busy (1 to 5).
  // level = which level unlocks it in Levels mode. port, airport = their names, if it has one.
  stations: [
    // Level: Portland and southern Maine (the start)
    // Portland (68,405): the state's metropolis, a metro of about 550,000 (Cumberland County 303,000, the
    // biggest region by far). The Port of Portland is the biggest tonnage port of New England (the oil
    // pipeline to Montreal and the Portland Harbor terminals, the Maine State Pier's container and cruise
    // traffic) and Portland International Jetport is Maine's busiest airport (about 1.9 million passengers
    // in 2019, 8 airlines). The Census point (43.63, -70.19) is in Casco Bay, off the map's land: the point is
    // downtown, at Monument Square (the Old Port is just east)
    { id: "PWM", name: "Portland", county: "me-cumberland", lat: 43.66, lon: -70.26, port: "Port of Portland", airport: "Portland International Jetport", type: "metro", size: 3, pop: 303, main: true, level: "south" },
    // Biddeford (22,546): the biggest city of York County, with Saco (20,380) across the Saco River: the
    // old mill twins on Saco Bay (the Pepperell and Biddeford mills), I-95 and the Downeaster. York has Sanford
    // (21,976, inland, a town here) and the beaches of Old Orchard, Kennebunkport and Ogunquit, so coast.
    // The point is downtown Biddeford (City Hall), 7 km northwest of the Census point (the middle of the
    // city limits, on the coast side)
    { id: "BIDD", name: "Biddeford", county: "me-york", lat: 43.49, lon: -70.45, type: "coast", size: 2, pop: 212, main: true, level: "south" },
    // Lewiston (37,124): the state's second city, on the Androscoggin Falls opposite Auburn (24,055), the old
    // mill twins of Lewiston-Auburn (metro of 111,000); the Maine Turnpike. Typed farm so that the start has
    // two types of place besides Portland's (Lewiston is the farm and mill valley of the Androscoggin, Auburn
    // is a town of this region's 3.7 miles away, left out, too close). The point is downtown Lewiston (City Hall
    // and Kennedy Park), 3 km west of the Census point (the middle of the city limits)
    { id: "LEW", name: "Lewiston", county: "me-androscoggin", lat: 44.1, lon: -70.21, type: "farm", size: 2, pop: 111, main: true, level: "south" },
    // Bath (8,767): the City of Ships on the Kennebec (Bath Iron Works, the Maine Maritime Museum) and the
    // biggest place of Lincoln and Sagadahoc; US-1 and the Sagadahoc Bridge. Downtown, 3 km south of the Census
    // point (the middle of the city limits). Coast.
    { id: "BTME", name: "Bath", county: "me-lincoln-sagadahoc", lat: 43.91, lon: -69.82, type: "coast", size: 1, pop: 72, main: true, level: "south" },
    // Level: the Kennebec valley, the midcoast and the Western Mountains
    // Augusta (18,900): the state capital (the State House, Charles Bulfinch's design, 1832) on the Kennebec
    // at the head of the tide, on I-95; the biggest city of Kennebec County (Waterville, 16,682, is a town
    // here). The point is the State House (44.31, -69.78), 4 km southwest of the Census point
    // (the middle of the city limits). Typed farm (the Kennebec valley's farmland and government).
    { id: "AUME", name: "Augusta", county: "me-kennebec", lat: 44.31, lon: -69.78, type: "farm", size: 2, pop: 125, main: true, level: "valley" },
    // Rockland (6,941): the midcoast's working port and centre on Penobscot Bay (the ferries to Vinalhaven, North
    // Haven and Matinicus, the Farnsworth Art Museum, the Maine Lobster Festival), at the same size as Belfast
    // (6,938, a town). Downtown (Main Street), 3 km south of the Census point (the middle of the city limits). Coast.
    { id: "RKLD", name: "Rockland", county: "me-knox-waldo", lat: 44.1, lon: -69.11, type: "coast", size: 1, pop: 80, main: true, level: "valley" },
    // Skowhegan (about 8,600, no place population in the files): the seat of Somerset County, on the Kennebec
    // at its falls (US-201 and US-2, the Skowhegan State Fair) and the biggest place of the Piscataquis-Somerset
    // region; Dover-Foxcroft (about 4,100, the seat of Piscataquis) and Greenville (Moosehead Lake, about 1,600)
    // are towns here. Skowhegan is the south edge of the woods, the gate to them. Farm (the Kennebec valley's farms).
    { id: "SKWG", name: "Skowhegan", county: "me-piscataquis-somerset", lat: 44.77, lon: -69.72, type: "farm", size: 1, pop: 67, main: true, level: "valley" },
    // Farmington (about 7,600, no place population in the files): the seat of Franklin County, UMaine
    // Farmington, on ME-4, ME-27 and US-2 with the gates to Sugarloaf and Rangeley; the biggest place of the
    // Franklin-Oxford region (Rumford is about 5,800, Norway about 5,100: towns here). Mountain.
    { id: "FMGT", name: "Farmington", county: "me-franklin-oxford", lat: 44.67, lon: -70.15, type: "mountain", size: 1, pop: 87, main: true, level: "valley" },
    // Level: Bangor, Downeast and the County
    // Bangor (31,739): the city of northern and eastern Maine on the Penobscot (the Paul Bunyan statue, Stephen King's
    // home, I-95 and I-395), the biggest place north of Augusta. Bangor International Airport is a large
    // transatlantic gateway (Maine's second airport, with troop flights), so it has an airport; the Greater Bangor metro is
    // about 150,000. The point is downtown (Harlow Street), 3 km south of the Census point (the middle
    // of the city limits)
    { id: "BNGR", name: "Bangor", county: "me-penobscot", lat: 44.8, lon: -68.77, airport: "Bangor International Airport", type: "metro", size: 2, pop: 152, main: true, level: "north" },
    // Ellsworth (8,398): the seat of Hancock County and the gate to Mount Desert Island and Acadia National Park
    // (US-1 and ME-3), the biggest city of the Hancock-Washington region (Bar Harbor, about 5,100, is its tourist
    // town here). The point is downtown, 6 km southeast of the Census point (the middle of the city
    // limits). Coast.
    { id: "ELME", name: "Ellsworth", county: "me-hancock-washington", lat: 44.54, lon: -68.42, type: "coast", size: 1, pop: 87, main: true, level: "north" },
    // Presque Isle (8,793): the biggest city of Aroostook, the potato county, on the Aroostook River at US-1
    // and US-163 (the University of Maine at Presque Isle, the old Loring Air Force Base is 12 miles away); Caribou
    // (7,390) is a town here. Farm. The point is downtown (Main Street), 2 km west of the Census point.
    { id: "PRQI", name: "Presque Isle", county: "me-aroostook", lat: 46.68, lon: -68.02, type: "farm", size: 1, pop: 67, main: true, level: "north" },
  ],
  // Towns: they appear over time, but only inside regions you own. Same fields, without level.
  // Scenic places that aren't towns sit at their park's point (sources in NOTES.md).
  towns: [
    // Portland and Cumberland
    // Brunswick (about 21,000, no place population in the files): Bowdoin College and the old Naval Air Station,
    // on the Androscoggin across from Topsham
    { id: "BRME", name: "Brunswick", county: "me-cumberland", lat: 43.91, lon: -69.96, type: "coast", size: 2 },
    // Freeport: L.L.Bean's flagship store, the outlet town, on Casco Bay
    { id: "FPME", name: "Freeport", county: "me-cumberland", lat: 43.86, lon: -70.1, type: "coast", size: 1 },
    // Portland Head Light: the oldest lighthouse of Maine (1791), in Fort Williams Park, Cape Elizabeth
    { id: "PHLT", name: "Portland Head Light", county: "me-cumberland", lat: 43.62, lon: -70.21, scenic: true, type: "coast", size: 1 },
    // York County
    // Sanford (21,976): the inland city of York County, on the Mousam River (the old Goodall mills)
    { id: "SFME", name: "Sanford", county: "me-york", lat: 43.42, lon: -70.76, type: "farm", size: 2 },
    // Kennebunkport: the seaside resort and summer home of the Bush family, with Dock Square
    { id: "KPT", name: "Kennebunkport", county: "me-york", lat: 43.36, lon: -70.47, scenic: true, type: "coast", size: 1 },
    // Old Orchard Beach: the pier and the 7 miles of Saco Bay beach, Maine's oldest beach resort
    { id: "OOB", name: "Old Orchard Beach", county: "me-york", lat: 43.52, lon: -70.38, scenic: true, type: "coast", size: 1 },
    // Androscoggin
    // Lisbon Falls: the mill village on the Androscoggin, at the Maine Turnpike's Lisbon exit and US-196
    { id: "LFME", name: "Lisbon Falls", county: "me-androscoggin", lat: 44.01, lon: -70.06, type: "farm", size: 1 },
    // Lincoln and Sagadahoc
    // Boothbay Harbor: the boating resort, with Boothbay's gardens and the Maine State Aquarium
    { id: "BHBM", name: "Boothbay Harbor", county: "me-lincoln-sagadahoc", lat: 43.86, lon: -69.63, scenic: true, type: "coast", size: 1 },
    // Damariscotta: the Damariscotta River's oyster town, on US-1
    { id: "DAMC", name: "Damariscotta", county: "me-lincoln-sagadahoc", lat: 44.03, lon: -69.52, type: "coast", size: 1 },
    // Kennebec
    // Waterville (16,682): Colby College, on the Kennebec at the I-95 and US-201 crossing
    { id: "WTVL", name: "Waterville", county: "me-kennebec", lat: 44.55, lon: -69.65, type: "farm", size: 2 },
    // Gardiner (5,960): the old Kennebec River town below Augusta, on the first of the river's I-295 bridges
    { id: "GARD", name: "Gardiner", county: "me-kennebec", lat: 44.2, lon: -69.78, type: "farm", size: 1 },
    // Knox and Waldo
    // Camden: the harbour with the Camden Hills (Mount Battie), the windjammers and the state park
    { id: "CMME", name: "Camden", county: "me-knox-waldo", lat: 44.21, lon: -69.07, scenic: true, type: "coast", size: 1 },
    // Belfast (6,938): the Waldo County seat at the head of Penobscot Bay
    { id: "BELF", name: "Belfast", county: "me-knox-waldo", lat: 44.43, lon: -69.01, type: "coast", size: 1 },
    // Downeast
    // Bar Harbor: Mount Desert Island and Acadia National Park, with Cadillac Mountain; also the CAT's port
    { id: "BARH", name: "Bar Harbor", county: "me-hancock-washington", lat: 44.39, lon: -68.2, scenic: true, type: "coast", size: 1 },
    // Calais (3,081): the St. Croix River city, across from St. Stephen, New Brunswick (US-1 and ME-9)
    { id: "CALA", name: "Calais", county: "me-hancock-washington", lat: 45.18, lon: -67.28, type: "coast", size: 1 },
    // Machias: the Washington County seat on the Machias River, the blueberry barrens' centre
    { id: "MACH", name: "Machias", county: "me-hancock-washington", lat: 44.71, lon: -67.46, type: "coast", size: 1 },
    // Penobscot
    // Old Town (7,435): on the Penobscot, with Orono and the University of Maine (Orono is 3 km from the Old Town city's edge)
    { id: "OLDT", name: "Old Town", county: "me-penobscot", lat: 44.93, lon: -68.65, type: "farm", size: 1 },
    // Millinocket: the paper-mill town and the gate to Baxter State Park and Katahdin
    { id: "MLNK", name: "Millinocket", county: "me-penobscot", lat: 45.66, lon: -68.7, type: "mountain", size: 1 },
    // Aroostook
    // Houlton: the I-95 border town opposite Woodstock, New Brunswick, the county seat of the south
    { id: "HOLT", name: "Houlton", county: "me-aroostook", lat: 46.13, lon: -67.84, type: "farm", size: 1 },
    // Caribou (7,390): the potato town and Aroostook's second city
    { id: "CRBU", name: "Caribou", county: "me-aroostook", lat: 46.86, lon: -68.01, type: "farm", size: 1 },
    // Fort Kent: the end of US-1, on the Saint John River across from Clair, New Brunswick
    { id: "FTKT", name: "Fort Kent", county: "me-aroostook", lat: 47.25, lon: -68.59, type: "mountain", size: 1 },
    // Piscataquis and Somerset
    // Greenville: the town at the foot of Moosehead Lake, Maine's biggest lake (the steamship Katahdin, Mount Kineo, rafting on the Kennebec)
    { id: "GRME", name: "Greenville", county: "me-piscataquis-somerset", lat: 45.46, lon: -69.58, scenic: true, type: "mountain", size: 1 },
    // Dover-Foxcroft: the Piscataquis County seat, on ME-15 and ME-16
    { id: "DFOX", name: "Dover-Foxcroft", county: "me-piscataquis-somerset", lat: 45.18, lon: -69.23, type: "farm", size: 1 },
    // Katahdin: Maine's highest mountain (5,270 ft) and the end of the Appalachian Trail, at Baxter State Park
    { id: "KTHN", name: "Mount Katahdin", county: "me-piscataquis-somerset", lat: 45.9, lon: -68.92, scenic: true, type: "mountain", size: 1 },
    // Franklin and Oxford
    // Rumford: the paper-mill town on the Androscoggin, at its Falls
    { id: "RUMF", name: "Rumford", county: "me-franklin-oxford", lat: 44.55, lon: -70.55, type: "mountain", size: 1 },
    // Rangeley: the lakes and the Saddleback and Sugarloaf mountains, the Rangeley Lakes region
    { id: "RGLY", name: "Rangeley", county: "me-franklin-oxford", lat: 44.97, lon: -70.65, scenic: true, type: "mountain", size: 1 },
    // Fryeburg: the Fryeburg Fair, on US-302 and the Saco, with the road to Conway, New Hampshire
    { id: "FRYB", name: "Fryeburg", county: "me-franklin-oxford", lat: 44.02, lon: -70.97, type: "farm", size: 1 },
  ],
  levels: [
    {
      name: "Portland & Southern Maine",
      areas: ["south"],
      goals: [
        { kind: "totalPassengers", target: 50 },
        { kind: "counties", target: 4 },
        { kind: "cargo", cargo: "containers", target: 10 },
      ],
    },
    {
      name: "The Kennebec Valley & the Western Mountains",
      areas: ["valley"],
      goals: [
        { kind: "totalPassengers", target: 140 },
        { kind: "connect", a: "PWM", b: "AUME" },
        { kind: "cargo", cargo: "produce", target: 25 },
      ],
    },
    {
      name: "Bangor, Downeast & the County",
      areas: ["north"],
      goals: [
        { kind: "totalPassengers", target: 280 },
        { kind: "connect", a: "AUME", b: "BNGR" },
        { kind: "hasTrain", train: "highspeed", target: 1 },
      ],
    },
  ],
  // Real mountain passes and gaps: [name, latitude, longitude]. Maine's mountains are in the west and
  // around Katahdin; the only well-known gap on a road the game's links use is Grafton Notch. See NOTES.md.
  passes: [
    ["Grafton Notch (ME-26 between Old Speck and Baldpate Mountain, Newry to Upton)", 44.58, -70.95],
  ],
  // Real bridges and ferries: [name, latitude, longitude]. Water or a river crossed near one uses the
  // real crossing (cheaper); anywhere else you build a new bridge, if the water is narrow enough.
  // Positions are approximate (well-known crossings, not surveyed points). The ferry's point lies out
  // on the route, away from the towns, so other lines from the same town don't count as using it.
  bridges: [
    // The Saco at Biddeford and Saco: the Main Street and the Veterans Memorial bridges
    ["Saco River bridges at Biddeford and Saco (Main Street and the Veterans Memorial Bridge)", 43.49, -70.45],
    // The Androscoggin at Lewiston and Auburn (the Longley Bridge and the Veterans Memorial Bridge), at Rumford
    // and Mexico (US-2) and at Brunswick and Topsham (the Frank J. Wood Bridge, US-201)
    ["Androscoggin River bridges at Lewiston and Auburn (the Longley and Veterans Memorial bridges)", 44.1, -70.22],
    ["Androscoggin River bridges at Rumford and Mexico (US-2)", 44.55, -70.54],
    ["Frank J. Wood Bridge (US-201, Brunswick to Topsham)", 43.92, -69.96],
    // The Kennebec: Gardiner and Randolph, Augusta (the Memorial Bridge), Waterville and Winslow (the Carter Memorial
    // Bridge) and Skowhegan (the bridges to the island downtown, US-201). The map's river ends above Bath, so the
    // Sagadahoc and Carlton bridges there are left out (NOTES.md)
    ["Gardiner-Randolph Bridge (over the Kennebec)", 44.2, -69.77],
    ["Memorial Bridge (Augusta, over the Kennebec)", 44.31, -69.77],
    ["Father Curran Bridge (Augusta, over the Kennebec)", 44.32, -69.76],
    ["Carter Memorial Bridge (Waterville to Winslow, over the Kennebec)", 44.55, -69.63],
    ["Kennebec River bridges at Skowhegan (US-201 and the island downtown)", 44.76, -69.72],
    // The Penobscot: Bangor and Brewer (the Joshua Chamberlain Bridge), Old Town and Milford, and the
    // Penobscot Narrows Bridge (US-1 between Prospect and Verona Island, by Bucksport)
    ["Joshua Chamberlain Bridge (Bangor to Brewer, over the Penobscot)", 44.8, -68.77],
    ["Penobscot River bridge (Old Town to Milford)", 44.94, -68.65],
    ["Penobscot Narrows Bridge (US-1, Prospect to Verona Island)", 44.57, -68.81],
    // The Aroostook at Presque Isle (US-1)
    ["Aroostook River bridge at Presque Isle (US-1)", 46.71, -68.02],
    // The international bridges to New Brunswick: Calais and St. Stephen on the St. Croix (the Ferry Point
    // and Milltown bridges) and Fort Kent and Clair on the Saint John
    ["Ferry Point Bridge (Calais to St. Stephen, over the St. Croix)", 45.19, -67.28],
    ["Milltown International Bridge (Calais to Milltown, over the St. Croix)", 45.18, -67.3],
    ["Fort Kent-Clair bridge (over the Saint John)", 47.26, -68.6],
    // The CAT, Bay Ferries' high-speed ferry from Bar Harbor to Yarmouth, Nova Scotia (summer): a point out
    // on the route, off the Schoodic Peninsula
    ["Bar Harbor-Yarmouth ferry (the CAT, on its route out of Frenchman Bay)", 44.32, -67.95],
  ],
  // The open water that needs a bridge or a ferry: Penobscot Bay (the 20 miles from Rockland and Camden to
  // Castine, Deer Isle and the Blue Hill peninsula) and the Gulf of Maine on the CAT's route from Bar Harbor
  // to Yarmouth. Casco Bay needs none (the lines between Portland, Freeport, Brunswick and Bath keep to its shore).
  bays: [
    {
      name: "Penobscot Bay",
      ring: [-68.98, 44.1, -68.98, 44.42, -68.85, 44.46, -68.72, 44.4, -68.6, 44.3, -68.52, 44.2, -68.58, 44.05, -68.9, 44.0],
    },
    {
      name: "the Gulf of Maine on the CAT ferry's route",
      ring: [-68.25, 44.24, -68.05, 44.33, -67.5, 44.32, -66.9, 44.12, -66.45, 43.95, -66.38, 43.8, -66.45, 43.62, -67.0, 43.72, -67.6, 43.95, -68.1, 44.1],
    },
  ],
  biomes: {
    forest: ["me-piscataquis-somerset", "me-penobscot", "me-hancock-washington"],
    wooded: ["me-franklin-oxford", "me-knox-waldo", "me-lincoln-sagadahoc", "me-androscoggin", "me-kennebec"],
  },
});
