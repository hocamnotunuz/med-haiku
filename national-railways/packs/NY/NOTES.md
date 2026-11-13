# New York (NY) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (53 regions); the main agent also named Queens "Queens" and the Bronx "The Bronx". Phase 2 (the pack) is below.

Populations: `packs/NY/raw/counties.json` and `raw/places.json` (U.S. Census Bureau, 2020 estimates base; state total 20,205k, 62 counties). Every merged pair or chain is a `neighbors` link in counties.json. Geography (roads, rivers, rail) is from general knowledge, not data: where it is moderately known it says so.

### Recommended (62 -> 53 regions)

```
merge: [["Essex", "Franklin", "Hamilton"], ["Schuyler", "Seneca", "Yates"], ["Genesee", "Orleans"], ["Allegany", "Wyoming"], ["Chenango", "Delaware"], ["Greene", "Schoharie"], ["Cortland", "Tioga"]]
names: { "New York": "Manhattan", "Kings": "Brooklyn", "Richmond": "Staten Island", "Essex-Franklin-Hamilton": "Adirondacks" }
bridges: [["Richmond", "Kings"], ["Richmond", "New York"]]
```

(The Adirondacks name is optional; the NYC names are the important ones. Queens and Bronx already read as boroughs.)

Alone, 50k or more (46): kept as the brief lists. Montgomery (50k, Amsterdam 18,218) is borderline but stays alone.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Essex + Franklin + Hamilton | The Adirondack Park core: empty, mountainous, one region. NY-30 and NY-86 link Saranac Lake, Tupper Lake, Long Lake, Lake Placid (moderately known). Hamilton (5k) cannot stand alone | Malone 5,482 (Saranac Lake 4,961 is more central) | 90,052 |
| Schuyler + Seneca + Yates | The Finger Lakes around Seneca Lake: Watkins Glen at the south end, Penn Yan and Waterloo/Seneca Falls on the Erie Canal side. All three touch each other. The lake is a mild barrier, but the three together make one sensible region | Penn Yan 5,117 (Waterloo 4,872) | 76,479 |
| Genesee + Orleans | The Erie Canal and NY-31/NY-98 between Batavia and Albion/Medina, on the Thruway. Orleans (40k) has only big neighbours (Genesee 58k, Monroe, Niagara); Genesee is the nearest, so Genesee joins although it is over 50k (exception) | Batavia 15,591 | 98,740 |
| Allegany + Wyoming | The western plateau: NY-19 runs from Warsaw south into Allegany (moderately known); Wellsville and Warsaw are the two market towns | Wellsville 4,644 (Warsaw 3,660) | 86,994 |
| Chenango + Delaware | The Susquehanna and Chenango valleys: Norwich with Sidney, Walton and Delhi (NY-12, NY-8, I-88 near Sidney; moderately known) | Norwich 7,043 | 91,531 |
| Greene + Schoharie | The northern Catskills: NY-145 and NY-23A link Catskill, Coxsackie and Cobleskill (moderately known). Catskill is on the Hudson and Amtrak's Empire line | Cobleskill 4,259 (Catskill 3,797) | 77,650 |
| Cortland + Tioga | I-81 at Cortland, and the Southern Tier (I-86/NY-17) at Owego and Waverly. The weakest link in the list (Broome lies between them to the south); Cortland is the only real town | Cortland 17,556 | 95,252 |

Alone, under 50k (exception):
- **Lewis** 26,587, Lowville 3,341: all its neighbours are big (Jefferson 117k, Oneida, Oswego, Herkimer, St. Lawrence), and the Tug Hill plateau and the Black River valley are its own country. See the alternative.

Station rule: the largest place in places.json (as in the NM review). Exceptions: Essex-Franklin-Hamilton and Schuyler-Seneca-Yates, where the largest place is not where most people live; fine either way.

Rejected:
- Hamilton + Herkimer / Warren: both are 60k or more and would leave Essex-Franklin as a pair; the Adirondack triple is cleaner.
- Orleans + Genesee + Wyoming (one 139k region): Medina to Warsaw is too far for one station.
- Tioga + Chemung or Broome: both are big counties.
- Delaware + Greene + Schoharie (a Catskills triple): leaves Chenango + Cortland, and Tioga alone; Delaware's valley is the Susquehanna, not the Hudson.

### Alternative (55 regions)

`merge: [["Essex", "Franklin", "Hamilton"], ["Schuyler", "Seneca", "Yates"], ["Genesee", "Orleans"], ["Allegany", "Wyoming"], ["Chenango", "Cortland"], ["Delaware", "Schoharie"]]`, with Greene and Tioga alone. Pro: no weak Cortland-Tioga link, and Chenango-Cortland are the I-81/NY-13 neighbours. Con: two more regions and two exceptions (Greene 48k, Tioga 48k).

### Group stations and populations

See the table. Everything else keeps its county's largest place as station. Big counties by largest place: Albany (Albany 99,239), Erie (Buffalo), Monroe (Rochester), Onondaga (Syracuse), Oneida (Utica), Westchester (Yonkers 211,584), Nassau (Hempstead 59,183), Suffolk (Lindenhurst 27,146), Orange (Kiryas Joel 32,951), Rockland (Spring Valley), Columbia (Hudson 5,894), Putnam (Brewster 2,510).

### Things on the map that look wrong

1. **The five boroughs have one place only.** places.json has "New York" (8,804,199) in `ny-kings` and nothing in Queens, Bronx, New York (Manhattan) or Richmond. They cannot get a station from places.json: the pack will need hand-placed stations (Manhattan, Brooklyn, Queens, Bronx, Staten Island) and the city's population split by county (Kings 2,736k, Queens 2,405k, New York 1,694k, Bronx 1,473k, Richmond 496k). The Kings station "New York" clashes with the county renamed "Manhattan".
2. **Richmond has no New York neighbour** (only nj-hudson, nj-middlesex, nj-union), hence the two bridges. Verrazzano-Narrows (Richmond to Kings) and the Staten Island Ferry (Richmond to Manhattan) are well known.
3. **697 places have a null population** (Seneca Falls, Elizabethtown, Keeseville, Long Lake, Amagansett and many more): towns and CDPs without Census place counts. They are still usable as names, but the largest place of a county may be a smaller town than the real one: Essex's top place is Lake Placid; Seneca Falls (Seneca) should outrank Waterloo.
4. **Akwesasne** is placed in Franklin (a reservation, split with Quebec and Ontario; fine but an odd name for a station).
5. **Putnam lists Rockland as a neighbour.** Westchester lies between them on the Hudson, as far as I know; this may be a polygon touching in the river. Worth checking; it changes nothing in the merges (all three stay alone).
6. **Nassau and Suffolk** neighbours are right (Queens, then Suffolk). Kings-Nassau are not neighbours, which is correct. Connecticut ferries come later.
7. Staten Island's only Jersey links are the Goethals, Outerbridge and Bayonne bridges (nj-hudson, nj-middlesex, nj-union are listed); well known and consistent.

## Pack (phase 2)

Files: `packs/NY/pack.js` (53 stations, 104 towns, 6 passes, 64 bridges, 1 bay, 4 levels, biomes) and this file. Populations and coordinates are from `packs/NY/raw/` (places.json points, 2 decimals; a station's `pop` is its region's population in thousands from counties.json). Anything hand-placed is named below. Geography, bridges and passes are from general knowledge (not from the data); bridge and pass points are good to about a mile.

### Start
`start: ["ny-new-york", "ny-kings", "ny-queens"]`: Manhattan, Brooklyn and Queens. Brooklyn and Queens both touch Manhattan (counties.json neighbours) and each other. Manhattan and Queens are metro and Brooklyn is coast, so there are two types of place; the first track is Manhattan to Brooklyn (4 mi, the nearest pair of different types; the pack test lays it and 20 passengers arrive in a week). Brooklyn is typed coast (Downtown Brooklyn is on the harbour; Coney Island and the Atlantic beaches) so that the starting trio has two types.

### Main stations (one per region, 53)
Sizes follow the brief: Manhattan, Brooklyn and Queens 5; the Bronx 4 (1.47 million, under the 1.5 million line of the size guide); Staten Island 3; Nassau, Suffolk and Westchester 4; Buffalo and Rochester 4 (metros of 1.1 million, like Cleveland); Albany, Syracuse, Newburgh and Spring Valley 3; Poughkeepsie, Kingston, Troy, Schenectady, Saratoga Springs, Utica, Binghamton, Niagara Falls, Ithaca and Brewster 2 (Ithaca and Brewster are exceptions: a university city like State College, and a commuter county); every other region 1. Types: metro for the cities, coast for the Lake Erie, Ontario and Champlain ports and Long Island's shore, mountain for the Adirondacks and Catskills, farm for the rest.

Hand-placed (places.json has no place for the boroughs): **Manhattan** at Penn Station (40.75,-73.99), **Brooklyn** at Downtown Brooklyn and Atlantic Terminal (40.69,-73.98), **Queens** at Jamaica (40.70,-73.81), **The Bronx** at Fordham Plaza (40.86,-73.89), **Staten Island** at St. George (40.64,-74.08). places.json files the whole city ("New York", 8,804,199) under Kings; none of the five stations uses it. Downtown points instead of the Census points, each within 1-3 mi of them: Yonkers (40.93,-73.90), Newburgh (41.50,-74.01), Albany (42.65,-73.76, the Capitol and rail station), Schenectady (42.81,-73.94), Utica (43.10,-75.23), Syracuse (43.05,-76.15), Buffalo (42.89,-78.87), Rochester (43.16,-77.61).

Not the biggest place (reason in the pack comments): Suffolk **Patchogue** (Lindenhurst is at the Nassau edge; Patchogue is mid-county near MacArthur Airport), Orange **Newburgh** (not Kiryas Joel or Middletown: the Hudson crossing), Greene-Schoharie **Catskill** (62% of the region lives in Greene; phase 1 had said Cobleskill), Herkimer **Herkimer** (Ilion is 3 mi away), Washington **Fort Edward** (Hudson Falls is 3.5 mi from Glens Falls, under the checker's 4 mi spacing; Fort Edward has the Amtrak stop), Adirondacks **Saranac Lake** (Malone is at the north edge; Malone is a town), Schuyler-Seneca-Yates **Seneca Falls** (no population in places.json; the biggest real place of the three, on the Erie Canal). Kept as the biggest: Yonkers (White Plains is a town), Spring Valley (New City has no population in the data), Brewster (Carmel has none either).

IDs are 2-4 capitals, unique across every pack (the checker confirms it). Where the natural code was taken by another state, the id ends in NY (ALNY, BFNY, RCNY, SYNY, TRNY, GENY and others) or uses other letters.

### Ports and airports
- **Port:** only the Port of Buffalo (a Great Lakes port, like Cleveland, Toledo, Milwaukee and Chicago in the other packs). The Port of New York and New Jersey is already on Newark's station; Red Hook (Brooklyn) and Howland Hook (Staten Island) belong to the same port, so none is added here. Albany's and Oswego's small ports are below the bar.
- **Airports** (the other packs' bar: the metro's commercial airport): John F. Kennedy (on Queens, where it is), LaGuardia (on the town Flushing, 3 mi from the field), Buffalo Niagara, Frederick Douglass Greater Rochester, Albany International, Syracuse Hancock, Westchester County (on the town White Plains; the field is in Harrison, 3 mi east), Long Island MacArthur (on Patchogue; the field is in Islip, 6 mi). Not added: Stewart, Ithaca, Binghamton, Elmira, Plattsburgh and the small regionals.

### Towns (104, about 2 per region; the big regions have more)
From places.json by name where the place is there (each comment gives its Census population); places without a figure are real towns with no Census place population (Montauk, Huntington, Riverhead, Hicksville, Woodstock, Hyde Park, North Creek and others, said in each comment). Spaced at least 4 mi apart. Dropped for spacing: the Statue of Liberty (3.1 mi from Brooklyn; Liberty State Park is in the New Jersey pack), Beacon (2.6 mi from Newburgh), Tarrytown (3 mi from Nyack), Tonawanda (2.8 mi from North Tonawanda), Cold Spring (2.1 mi from West Point).

Hand-placed: Harlem (40.81,-73.95), Coney Island (40.58,-73.98), Rockaway Beach (40.59,-73.82), Flushing (40.76,-73.83), Bear Mountain (41.31,-74.01), West Point at the Academy (41.39,-73.96; the Census point 41.36,-74.02 is 3 mi south-west, next to Bear Mountain), Duanesburg (42.76,-74.13), Letchworth State Park (42.58,-78.04, Middle Falls), Chautauqua Institution (42.21,-79.47), and **Ausable Chasm**, nudged 2-3 mi west to 44.52,-73.50 (into Clinton): the chasm is at about 44.52,-73.45, on the county line at Keeseville, which the simplified outline puts outside Clinton.

Scenic places (all well known; sources NPS, NYS Parks and the institutions' own pages, not Census): Saratoga Springs (Saratoga Race Course, 1863), Niagara Falls, Corning (Corning Museum of Glass), Seneca Falls (Women's Rights National Historical Park), Coney Island, Rockaway Beach (Gateway National Recreation Area), Southampton (the Hamptons), Montauk (the Point Lighthouse), West Point (the U.S. Military Academy), Bear Mountain (state park), Hyde Park (FDR Home and Vanderbilt Mansion, NPS), Woodstock, Cooperstown (Baseball Hall of Fame), Lake George, Lake Placid (the Olympic village), Alexandria Bay (Thousand Islands), Letchworth State Park, Chautauqua Institution, Watkins Glen (State Park gorge), Ausable Chasm. Fire Island and Jones Beach are barrier islands outside the county outlines and are left out.

### Passes (6; general knowledge; each has mountains within 7 mi in terrain.js)
Only the Catskills and the High Peaks have mountains in terrain.js (the rest of the state is hills).
- Catskills: Pine Hill and Highmount (NY-28, Kingston to Margaretville), Stony Clove Notch (NY-214, Phoenicia to Hunter), Kaaterskill Clove (NY-23A, Palenville to Haines Falls).
- Adirondacks: Cascade Pass (NY-73), Wilmington Notch (NY-86), Chapel Pond Pass (NY-73), around Lake Placid and Keene Valley.
Ramapo Pass (I-87 at Suffern) is not listed: terrain.js shows only hills there, and the checker would warn.

### Bridges (64; general knowledge; names, roads and spans from the owners' pages and Wikipedia)
- Hudson: the Holland and Lincoln tunnels and the North River Tunnels, George Washington, Mario Cuomo (Tappan Zee), Bear Mountain, Newburgh-Beacon, Mid-Hudson, Kingston-Rhinecliff, Rip Van Winkle, Hudson-Athens, Castleton, Dunn Memorial and the Livingston Avenue rail bridge (Albany), Green Island (Troy), Cohoes-Waterford, Schuylerville, Fort Edward-Hudson Falls, Glens Falls.
- East and Harlem rivers: Brooklyn, Manhattan, Williamsburg, Queensboro, Hell Gate, Triborough (RFK), Whitestone, Throgs Neck. Harbour: Verrazzano-Narrows, the Staten Island Ferry (a point mid-harbour), Bayonne, Goethals, Outerbridge.
- Mohawk (Schenectady, Amsterdam, Fultonville-Fonda, Canajoharie, St. Johnsville, Little Falls, Herkimer, Utica), Susquehanna (Binghamton, Owego, Oneonta, Sidney), Chemung (Elmira, Corning, Waverly-Sayre), Genesee (Rochester, Portage Viaduct, Wellsville), Allegheny (Olean, Salamanca), Delaware (Hancock, Callicoon, Narrowsburg; Port Jervis and Milford are in the Pennsylvania pack), Black (Watertown, Carthage), Raquette (Potsdam, Massena).
- To Ontario: the Peace Bridge, Rainbow, Whirlpool Rapids, Lewiston-Queenston, the Thousand Islands Bridge, Ogdensburg-Prescott and the Seaway International Bridge. Quebec needs none (I-87 at Champlain-Lacolle is a land border).
- Left out: the Lake Champlain crossings (Crown Point bridge, the Plattsburgh-Grand Isle and Essex-Charlotte ferries) wait for Vermont, and the Long Island Sound ferries (Port Jefferson-Bridgeport, Orient Point-New London) for Connecticut.
Three checker warnings stay: the **Mario Cuomo**, **Hell Gate** and **RFK** points are more than 3 mi from any water on the map, because the county outlines cover the Hudson at Tarrytown and the East River and no river line is drawn within 3 mi. The bridges are real and stay.

### Bays (1)
- **Long Island Sound** (a rectangle from the Throgs Neck east to Orient Point; land wins over a bay, so the rectangle only works on open water): a crossing of the Sound from Westchester or the Bronx to Nassau or Suffolk is blocked where it is wider than the new-bridge limit (Port Jefferson to New Rochelle is 13 mi: blocked in Gentle and Tough), as no bridge crosses it.
- The Upper and Lower bays are not drawn: the harbour is narrow (the Narrows is 1.5 mi, the ferry crossing 5 mi), and the geography rule lets track follow a shore across water with land within 3 mi (2 in Tough). I tried the two rings and they changed nothing, so I took them out. Jamaica Bay, the Great South Bay, the East River and the Hudson are inside the county outlines (land), so they need no bay either. Lake Erie, Lake Ontario, Oneida Lake and the Finger Lakes already block as lakes.

### Levels (4)
- **New York City & Long Island** (8 regions: the boroughs, Nassau, Suffolk, Westchester): 150 passengers, 5 counties, connect Manhattan and Hempstead (the LIRR).
- **The Hudson Valley & the Capital District** (12: Putnam up to Saratoga): 250 passengers, connect Poughkeepsie and Albany, 8 counties.
- **The Mohawk Valley & the North Country** (16: the Mohawk Valley, Syracuse, the Adirondacks and the St. Lawrence): 350 passengers, connect Utica and Syracuse, 10 counties.
- **Buffalo, Rochester & the Southern Tier** (17: Western New York, the Finger Lakes, the Southern Tier): 450 passengers, connect Rochester and Buffalo, 12 counties.
No cargo goal: only Buffalo has a port.

### Biomes
Forest: the Adirondack core (Essex-Franklin-Hamilton). Wooded: Warren, Lewis, St. Lawrence, Herkimer, Fulton, Clinton, Washington, Greene-Schoharie, Ulster, Sullivan, Chenango-Delaware, Otsego, Putnam, Rockland, Orange, Columbia, Cortland-Tioga, Broome, Allegany-Wyoming, Cattaraugus, Chautauqua, Steuben, Chemung, Schuyler-Seneca-Yates and Tompkins (the Adirondack edges and Tug Hill, the Catskills, the Highlands, the Taconics, and the Allegheny and Southern Tier plateau). Not listed (farmland): the Lake Ontario plain and the Erie Canal country, the Hudson and Mohawk valleys, Long Island and the city. No dry.

### Reachability (`NR.blockedReason`, Gentle and Tough; helper scripts in /tmp/ny-work)
- Every station and every town has at least one open link of 60 mi or less (the emergency-link range), and every main station has two or more main stations of any state in reach, in both modes.
- Every pair of neighbouring regions is open in both modes except: Jamestown-Buffalo (Tough only: 9 mi of Lake Erie on the straight line; Buffalo-Dunkirk-Jamestown and Buffalo-Olean are open), Watertown-Oswego (both: Lake Ontario, 15 mi; via Lowville it is open), Watertown-Kingston, Ontario (Tough only: Lake Ontario; Watertown-Brockville is open) and Oneida-Oswego (Tough only: Oneida Lake; Oneida-Syracuse-Oswego is open).
- Chains open in both modes: the Empire Corridor (Manhattan, Yonkers, Poughkeepsie, Hudson, Albany, Schenectady, Amsterdam, Herkimer, Utica, Syracuse, Auburn, Newark, Rochester, Batavia, Buffalo); the Hudson west bank (Manhattan, Spring Valley, Newburgh, Kingston, Catskill, Albany); Metro-North's Hudson Line; the Northway (Albany, Saratoga Springs, Glens Falls, Saranac Lake, Plattsburgh, Saint-Jean-sur-Richelieu); I-81 (Scranton, Binghamton, Cortland, Syracuse, Watertown, Brockville); I-88 (Binghamton, Oneonta, Catskill, Albany); the Southern Tier (Erie, Jamestown, Olean, Wellsville, Corning, Elmira, Cortland); the Quickway (Binghamton, Norwich, Monticello, Newburgh, Spring Valley, Manhattan); Long Island (Manhattan, Queens, Hempstead, Patchogue); the boroughs; Staten Island to Elizabeth, Jersey City and Newark; Niagara (Buffalo, Niagara Falls, St. Catharines); Massena-Cornwall; the Pennsylvania line (Elmira-Towanda, Binghamton-Tunkhannock, Monticello-Honesdale, Newburgh-Milford).
- A straight line that crosses a river away from a listed bridge pays for a new bridge: Catskill-Kingston (it crosses the Hudson near Saugerties, where there is no bridge), Poughkeepsie-Newburgh, Troy-Fort Edward.

### Unsure
- Bridge and pass coordinates are by hand, good to about a mile; the ids that end in NY are unusual but unique.
- Hell Gate, RFK and Mario Cuomo warnings are left (above).

## Main agent's review

- **Coordinates:** every main station, scenic place and pass checked against its real location; all within about two miles. Niagara Falls' station moved to the city's downtown by the falls (43.09, -79.05; the Census point, 2.4 mi east, is the middle of the city limits), and Ausable Chasm to the chasm itself (44.52, -73.46), 0.7 mi off the simplified Clinton outline.
- **Sizes** accepted: Manhattan, Brooklyn and Queens 5; the Bronx, Nassau, Suffolk, Westchester, Buffalo and Rochester 4; Staten Island, Albany, Syracuse, Newburgh and Spring Valley 3.
- **Bays:** only Long Island Sound; the county outlines cover the Hudson, the East River and New York Harbor, so a bay there changes nothing (the harbour crossings are bridge points anyway). The three bridge warnings (the Mario Cuomo, Hell Gate and RFK bridges) are for that reason; the bridges are real.
- **Links checked** (Gentle and Tough, open): Manhattan–Staten Island, Staten Island–Elizabeth, Manhattan–Newark, Buffalo–Niagara Falls, Binghamton–Scranton.
- **Checks:** `check-pack` NY passed (53 stations, 104 towns, 6 passes, 64 bridges), 0 errors, 4 warnings (above); all packs passed; `test-pack` NY passed (17 passed).
- **Orient Point** (added with the Connecticut pack): a coastal town at the Cross Sound Ferry's terminal (41.16, -72.25), 0.2 mi off the simplified outline, so the ferry from New London lands at a town.
