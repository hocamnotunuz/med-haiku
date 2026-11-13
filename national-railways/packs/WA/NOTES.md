# Washington pack: notes and judgment calls

Pilot pack (WA). Everything here explains `packs/WA/pack.js`.

**Data used**
- Populations, city and town coordinates: `packs/WA/raw/counties.json` and `packs/WA/raw/places.json` (U.S. Census Bureau, 2020 census base). Station `pop` is the region's population in thousands, exactly as in counties.json. Every station and town that is a census place uses that place's lat/lon rounded to 2 decimals (checked by script: 0 mismatches).
- Hand-placed points (6 scenic places, 12 passes, 20 bridges): the published coordinates of the named place, from the sources listed below (Wikipedia articles, which mostly cite USGS GNIS; NPS; WSDOT). I could not re-fetch them live in this session (the Wikimedia API refused this sandbox's requests), so a reviewer may want to spot-check them. Each one was checked against the game's own data: every pass has mountains within ~7 miles, every bridge is within 3 miles of water on the map, every scenic point is inside its county region.

**Results (28 regions):** `node tools/check-pack.js` (all packs): WA passed (28 stations, 43 towns, 12 passes, 20 bridges), 0 errors, 0 warnings; all packs passed. `node tools/test-pack.js WA`: PASSED (17 passed, 0 warnings, 0 failed).

---

## 1. County merges (28 regions)

The first version of this pack used the automatic merges (27 regions). I proposed changes, the user approved them, and the main agent rebuilt the map; this pack now follows the new regions:

| Was | Now | Why |
| --- | --- | --- |
| `wa-franklin-whitman` (Pasco + Pullman) | `wa-franklin` (Pasco, 97k) | Franklin is the Tri-Cities (Columbia Basin); Whitman is the Palouse, about 100 miles away. Franklin is over 50k on its own. |
| `wa-asotin-columbia-garfield` (Clarkston) | `wa-asotin-garfield-whitman` (Pullman, 73k) | The Palouse and the Lewis–Clark Valley together; Pullman is the biggest city, Clarkston a town. |
| `wa-walla-walla` | `wa-columbia-walla-walla` (Walla Walla, 67k) | Columbia County (Dayton, 25 miles from Walla Walla) joins Walla Walla. |
| `wa-chelan` | `wa-chelan-douglas` (Wenatchee, 122k) | The official Wenatchee metro area (East Wenatchee is in Douglas). |
| `wa-douglas-kittitas-okanogan` (Ellensburg) | `wa-kittitas` (Ellensburg, 44k) and `wa-ferry-okanogan` (Omak, 49k) | Kittitas and Douglas met only across the Columbia; Ellensburg's region had reached the Canadian border. |
| `wa-adams-ferry-lincoln` (Othello) | `wa-adams-lincoln` (Othello, 31k) | Ferry (forested Okanogan Highlands) was 130 miles from Othello and had to be drawn as dry. |

Also from the proposal: `wa-island` now neighbors `wa-san-juan-skagit` (the Deception Pass Bridge joins Whidbey and Fidalgo islands). Unchanged and fine: `wa-jefferson-mason` (Jefferson + Clallam with Mason alone would also work; not important), `wa-san-juan-skagit`, `wa-pend-oreille-stevens`, `wa-klickitat-skamania`, `wa-pacific-wahkiakum`. King–Kitsap are joined only by ferries, so they rightly aren't neighbors.

---

## 2. Main stations

One per region, at its biggest city (census 2020), with one exception:

- **Olympia, not Lacey** (`wa-thurston`): Lacey has 56,285 people, Olympia 55,369. Olympia is the state capital, the county seat and the downtown; Lacey is its suburb next door (same reasoning as Oregon City over Lake Oswego in OR).
- Othello (`wa-adams-lincoln`) is kept although it sits in its region's southwest corner: at 8,546 people it is nearly five times the next town (Ritzville, 1,752).
- Omak (`wa-ferry-okanogan`, 4,859) and Pullman (`wa-asotin-garfield-whitman`, 32,905) are their regions' biggest places. Pullman keeps the id PUL it had as a town (it's no longer a town, so the id is still unique); Omak keeps OMK the same way; Clarkston (CLR) became a town.
- **Shelton vs Port Townsend** (`wa-jefferson-mason`): Shelton is bigger (10,373 vs 10,147), so Shelton; Port Townsend is a town.

**IDs:** checked unique across all packs (the checker confirms). Avoided VAN/VIC (reserved for BC): Washington's Vancouver is **VWA**. I also avoided ids that big future cities will want: CLE (Cleveland) → Cle Elum is CEL; DAY (Dayton, OH) → Dayton WA is DYT; EDM (Edmonton) → Edmonds is EDS; CHY (Cheyenne) → Cheney is CNY; PRO (Provo) → Prosser is PSR. SPV was taken, so Spokane Valley is SVY.

**Types** (what the region is mostly like; ties broken toward variety along the main corridors):

| Type | Stations | Why |
| --- | --- | --- |
| metro | Seattle, Everett, Vancouver, Olympia, Spokane | The big cities. Olympia is a metro like Salem (OR) |
| coast | Tacoma, Bremerton, Oak Harbor, Bellingham, Port Angeles, Aberdeen, Raymond | Saltwater towns: port on Commencement Bay, navy yard, island, bay, strait, harbor, Willapa Bay |
| farm | Mount Vernon, Centralia, Yakima, Pasco, Moses Lake, Wenatchee, Goldendale, Walla Walla, Othello, Pullman | Skagit Valley; Chehalis valley; Yakima Valley (apples, hops); Franklin County irrigation; Columbia Basin Project; "Apple Capital of the World"; Klickitat Valley ranches; wheat and onions; potatoes; the Palouse |
| mountain | Ellensburg, Omak, Longview, Shelton, Colville | Kittitas runs from the Cascade crest at Snoqualmie Pass and is half national forest; Okanogan and Ferry are the North Cascades' east slope and the Okanogan Highlands; Cowlitz is timber country up to Mount St. Helens (like Roseburg, OR); Mason/Jefferson are the Olympics; the Selkirks |
| desert | Kennewick | The Tri-Cities get about 7 inches of rain a year (shrub-steppe) |

**Tacoma is coast (the user's choice):** a big port city on Commencement Bay, like Oxnard/Ventura in California. It also gives Seattle–Tacoma riders in the default style (I had first typed it metro because Pierce County is mostly suburbs). The start is now Seattle (metro) with Tacoma and Bremerton (coast).

Unsure calls: **Longview** (mountain or farm; it's really a mill and port town), **Kennewick** (desert or farm), **Ellensburg** (mountain or farm: the town itself is in the Kittitas Valley's hay farms).

**Sizes** follow the PACKS.md guide: Seattle 5 (2.27M); Tacoma, Everett 4 (921k, 828k); **Spokane 4** (539k: the hub of the Inland Northwest, like Reno at 486k); Vancouver 3 (503k); 2 for about 100k–300k cities (Olympia 295k, Bremerton, Yakima, Bellingham, Kennewick, Mount Vernon 147k, **Wenatchee 122k** (the Wenatchee metro), **Pasco 97k** (a 77k city in the Tri-Cities, like Corvallis at 95k in OR)); 1 for the rest, the rural regions (Pullman 73k, Walla Walla 67k, Omak 49k, Ellensburg 44k, Othello 31k and the others).

**Ports** (sparingly, like CA's 5 and OR's 2): Port of Seattle and Port of Tacoma (the two big container ports, the Northwest Seaport Alliance); **Port of Vancouver USA** (a major Columbia River deep-draft seaport: grain, autos, bulk); **Port of Grays Harbor** at Aberdeen (Washington's deep-water port on the open Pacific: autos, grain, logs; the same kind of port as OR's Coos Bay and CA's Humboldt Bay). Left out: Everett (small container port), Longview, Kalama, Anacortes, Port Angeles (bulk or logs only). If four is too many, drop Grays Harbor first.

**Airports:** Seattle–Tacoma International (on the Seattle station, as CA puts San Diego's on SD) and Spokane International. Left out: Tri-Cities (Pasco), Paine Field (Everett) and Bellingham, which are much smaller than OR's Eugene and Medford and would make airports less special.

---

## 3. Towns (43, about 1.5 per region)

The next-biggest census towns of each region, skipping ones under about 4 miles from a station (Lacey, Tumwater, Kelso, College Place, East Wenatchee, Hoquiam, Port Orchard, Chehalis, Okanogan), plus real sights. Bigger regions get more (King 4). Columbia-Walla Walla gets Dayton (College Place is 3 miles from Walla Walla). Franklin gets Connell (5,439), its next-biggest town; Asotin-Garfield-Whitman gets Clarkston and Palouse Falls; Ferry-Okanogan gets Republic and Grand Coulee Dam; Kittitas gets Cle Elum.

- **King:** Bellevue (metro, 3: a big edge city, like CA's Irvine or Fremont), Kent (metro, 2), Snoqualmie (mountain: the falls and the foot of the Cascades), Enumclaw (farm: dairy plateau; picked over closer suburbs for spread, and so Level 1 has a farm town near the ports for containers).
- **Pierce:** Lakewood (metro, 2), Mount Rainier (scenic).
- **Snohomish:** Marysville (metro, 2), Edmonds (coast: ferry town).
- **Others:** Yelm (farm), Bainbridge Island (coast), Langley (coast), Anacortes (coast), Friday Harbor (scenic), Lynden (farm), Sequim (farm: lavender), Port Townsend (coast), Ocean Shores (coast), Long Beach (coast), Morton (mountain: gateway to White Pass and Rainier), Woodland (farm), Camas (metro), Battle Ground (farm), Leavenworth (scenic), Cle Elum (mountain), Sunnyside (farm), Ephrata (farm), Richland (desert, 2: Hanford), Prosser (farm: wine), Connell (farm), Stevenson (mountain: the Gorge), Spokane Valley (metro, 2), Cheney (farm), Newport (mountain), Clarkston (mountain: at the mouth of Hells Canyon below the Blue Mountains), Ritzville (farm), Republic (mountain), Dayton (farm).

**Scenic places (9; CA has 8, OR 6).** Hand-placed ones sit at the visitor center or viewpoint:

| Town | Where | Source |
| --- | --- | --- |
| Mount Rainier | Paradise (Jackson Visitor Center), 46.79, -121.74, Pierce County | NPS Mount Rainier; Wikipedia: Paradise, Washington |
| Hurricane Ridge | Hurricane Ridge Visitor Center, Olympic National Park, 47.97, -123.50 | NPS Olympic; Wikipedia: Hurricane Ridge |
| North Cascades | Diablo Lake Vista Point on SR 20, 48.71, -121.10 (Whatcom County) | NPS North Cascades; WSDOT SR 20; Wikipedia: Diablo Lake |
| Mount St. Helens | Johnston Ridge Observatory, 46.28, -122.22 (Skamania County) | USFS Mount St. Helens NVM; Wikipedia: Johnston Ridge Observatory |
| Grand Coulee Dam | the dam, 47.96, -118.98 (falls in the Ferry-Okanogan region) | U.S. Bureau of Reclamation; Wikipedia: Grand Coulee Dam |
| Palouse Falls | Palouse Falls State Park, 46.66, -118.22. The falls are on the Palouse River, the Franklin–Whitman line; the map puts this point in Asotin-Garfield-Whitman, so that's its county | Washington State Parks; Wikipedia: Palouse Falls (the state waterfall) |
| Friday Harbor | San Juan Islands (census town) | places.json |
| Leavenworth | Bavarian village (census town) | places.json |
| Lake Chelan | the city of Chelan at the foot of the lake (census town, named for the lake) | places.json |

Considered and left out to keep scenic places special: Snoqualmie Falls (Snoqualmie is a plain town instead), Mount Baker, Hoh Rain Forest, Lake Quinault, Long Beach and Port Townsend (kept as plain coast towns), Winthrop, Dry Falls, Maryhill.

Reachability (checked with the game's own terrain code): Mount Rainier is reached over Chinook Pass from Tacoma in Gentle and from Centralia in Tough (Tacoma–Paradise is 17 miles of tunnel, over Tough's 15). North Cascades is reached over Washington Pass from Omak in both; from the west (Mount Vernon) only in Gentle, which matches the real Skagit gorge.

---

## 4. Start and levels

**Start:** `wa-king`, `wa-pierce`, `wa-kitsap` (Seattle metro; Tacoma and Bremerton coast). King–Pierce and Pierce–Kitsap touch by land. Two types, so the first track has riders, and since Tacoma became coast, Seattle–Tacoma carries riders too. The pack test laid Seattle–Bremerton (21 miles, track follows the Sound's shore) and 4 to 9 passengers arrived in the first week (three runs). The alternatives were worse: Chelan-Douglas or Kittitas would put a Cascade crossing in the first track.

**Levels** (format and goal kinds as in CA):

| Level | Area | Regions | Goals |
| --- | --- | --- | --- |
| 1 Puget Sound | `sound` | King, Pierce, Kitsap, Snohomish, Thurston, Island, San Juan-Skagit (7) | 50 passengers; own 5 counties; 10 containers (from Seattle/Tacoma to Mount Vernon or the farm towns Enumclaw, Yelm) |
| 2 Western Washington | `west` | Whatcom, Clallam, Jefferson-Mason, Grays Harbor, Pacific-Wahkiakum, Lewis, Cowlitz, Clark (8) | 140 passengers; connect Seattle–Vancouver (the I-5 line); 25 crates of produce |
| 3 Cascades & Columbia Basin | `central` | Chelan-Douglas, Kittitas, Yakima, Grant, Benton, Franklin, Klickitat-Skamania (7) | 280 passengers; connect Seattle–Wenatchee (over the Cascades); 1 high-speed train |
| 4 Inland Northwest & the Okanogan | `east` | Spokane, Asotin-Garfield-Whitman, Columbia-Walla Walla, Adams-Lincoln, Pend Oreille-Stevens, Ferry-Okanogan (6) | 450 passengers; connect Seattle–Spokane; own 20 of 28 counties |

Franklin is in Level 3 with Benton (the Tri-Cities). Ferry-Okanogan is in Level 4 (it borders Level 1–3 regions, so it can be reached when Level 4 opens) to keep the levels about the same size; it could as well be Level 3. The level is still named "Inland Northwest" in the pack.

**Core-code issue for the main agent (not fixable from a pack):** `NR.countyStatus` (js/game.js) locks any county whose main station has a `level` not in `s.areas`, whatever state it's in, and `NR.nextLevel` doesn't widen `s.areas` when the last level is beaten. Until now only CA had levels and its neighbors had none, so it never showed. With WA levels: in a CA Levels game, once Oregon is owned and Washington opens, WA counties would say "Opens in level 0" forever; and in a WA Levels game, CA counties would be locked the same way. Suggested fix: apply the level check only to the home state's counties (`code === NR.HOME_STATE`), or set `s.areas = allAreas()` when the levels are beaten.

---

## 5. Passes (12)

All have mountains within ~7 miles on the map (checker: 0 warnings). None repeat Oregon's (its Columbia River Gorge entries cover the Washington bank too; checked: Vancouver–Goldendale uses them).

| Pass | lat, lon | What it is | Source |
| --- | --- | --- | --- |
| Washington Pass | 48.53, -120.65 | SR 20 (North Cascades Highway) | Wikipedia: Washington Pass; WSDOT SR 20 |
| Stevens Pass | 47.75, -121.09 | US 2; BNSF Cascade Tunnel below it | Wikipedia: Stevens Pass |
| Tumwater Canyon | 47.64, -120.70 | US 2 along the Wenatchee River above Leavenworth; the Great Northern's route until 1929 (mid-canyon point) | Wikipedia: Tumwater Canyon; WSDOT US 2 |
| Snoqualmie Pass | 47.42, -121.41 | I-90 | Wikipedia: Snoqualmie Pass |
| Stampede Pass | 47.28, -121.34 | the Northern Pacific (now BNSF) line and tunnel | Wikipedia: Stampede Pass |
| Chinook Pass | 46.87, -121.52 | SR 410 | Wikipedia: Chinook Pass |
| White Pass | 46.64, -121.39 | US 12 | Wikipedia: White Pass (Washington) |
| Blewett Pass | 47.33, -120.58 | US 97 Wenatchee–Ellensburg; the highway's summit is officially Swauk Pass, universally called Blewett Pass | Wikipedia: Blewett Pass; WSDOT US 97 |
| Yakima River Canyon | 46.85, -120.48 | SR 821 and the old Northern Pacific line, Ellensburg–Selah (at the BLM Umtanum recreation site) | BLM Yakima River Canyon; WSDOT SR 821 |
| Satus Pass | 45.98, -120.65 | US 97 over the Simcoe Mountains | Wikipedia: Satus Pass; WSDOT US 97 |
| Loup Loup Pass | 48.39, -119.90 | SR 20, Twisp–Okanogan | Wikipedia: Loup Loup Pass |
| Sherman Pass | 48.61, -118.46 | SR 20, Republic–Kettle Falls (highest highway pass in WA) | Wikipedia: Sherman Pass |

Left out: Wallula Gap, Union Gap and Alpowa Summit (real, but only hills on the map, so they would change nothing and warn); Rainy Pass and Cayuse Pass (within 5 miles of Washington and Chinook passes); Wauconda Summit (SR 20; I wasn't sure of its exact coordinates). There is no real pass across the Olympics (no road crosses them): Port Angeles–Shelton straight across is blocked in Tough (39 miles of mountains), but Port Angeles–Port Townsend–Bremerton and Port Angeles–Seattle work, which matches the real roads.

Route check (game terrain code, Gentle and Tough): Seattle–Wenatchee, Everett–Wenatchee, Seattle–Ellensburg, Tacoma–Yakima, Centralia–Yakima, Ellensburg–Wenatchee, Vancouver–Goldendale, Mount Vernon/Bellingham–Omak, Omak–Colville, Omak–Wenatchee, Spokane–Colville, Clarkston–Walla Walla and the coast routes are all buildable in both. Only Port Angeles–Aberdeen (straight across the Olympics) is blocked in both, as in reality.

---

## 6. Bridges (20)

All within 3 miles of water on the map (checker: 0 warnings).

| Bridge | lat, lon | Source |
| --- | --- | --- |
| Tacoma Narrows Bridge | 47.27, -122.55 | WSDOT; Wikipedia |
| Hood Canal Bridge | 47.86, -122.63 | WSDOT; Wikipedia |
| Deception Pass Bridge | 48.41, -122.64 | WSDOT; Wikipedia |
| Evergreen Point Floating Bridge (SR 520) | 47.64, -122.26 | WSDOT; Wikipedia |
| Lacey V. Murrow Bridge (I-90) | 47.59, -122.26 | WSDOT; Wikipedia |
| I-5 Skagit River Bridge (Mount Vernon) | 48.45, -122.34 | WSDOT; Wikipedia |
| Astoria–Megler Bridge | 46.22, -123.86 | ODOT; Wikipedia |
| Lewis and Clark Bridge (Longview) | 46.11, -122.96 | WSDOT; Wikipedia |
| Interstate Bridge (I-5) | 45.62, -122.67 | WSDOT/ODOT; Wikipedia |
| Glenn Jackson Bridge (I-205) | 45.60, -122.55 | Wikipedia. Placed on its Washington half (the bridge spans about 45.58–45.61): the map's Columbia line hugs the Washington shore there, and at mid-span (45.59) it would sit 2.1 miles from it, beyond the 2-mile range in which a river crossing uses a real bridge |
| Bridge of the Gods | 45.66, -121.90 | Wikipedia |
| Hood River Bridge | 45.71, -121.49 | Port of Hood River; Wikipedia |
| The Dalles Bridge (US 197) | 45.62, -121.13 | Wikipedia |
| Sam Hill Memorial Bridge (US 97, Biggs–Maryhill) | 45.67, -120.83 | Wikipedia |
| Umatilla Bridge (I-82) | 45.93, -119.33 | Wikipedia |
| Vantage Bridge (I-90) | 46.95, -119.97 | WSDOT; Wikipedia |
| George Sellar Bridge (Wenatchee) | 47.43, -120.31 | WSDOT (Senator George Sellar Bridge) |
| Vernita Bridge (SR 24) | 46.64, -119.73 | WSDOT; Wikipedia. The only crossing of the Hanford Reach (Yakima–Othello/Moses Lake) |
| Cable Bridge (Kennewick–Pasco) | 46.22, -119.11 | Wikipedia (Ed Hendler Bridge) |
| Snake River bridge (Clarkston–Lewiston, US 12) | 46.42, -117.04 | WSDOT/ITD US 12. Named descriptively: I wasn't sure of its proper name |

Things the main agent should know:
- **Puget Sound, Hood Canal and the Strait are open sea on the map, not bays.** Track across them is priced as "following the shore", so the Tacoma Narrows, Hood Canal and Deception Pass bridges currently change no prices (they are listed as real bridges for later). I did not add a Puget Sound bay: a bay would block Seattle–Bremerton and similar crossings (14+ miles of water, served by ferries not bridges) unless the shore rule rescues them. Lake Washington is a lake in the terrain and its two floating bridges are used (Seattle–Wenatchee goes over the I-90 bridge).
- **The map's Columbia/Snake lines are simplified** (Natural Earth; it labels the lower Snake "Columbia"), so a straight track crosses a mile or more from the real bridge. Examples: Vancouver–Portland crosses 2.7 miles from the Interstate Bridge, Kennewick–Pasco 2.3 miles from the Cable Bridge, Kennewick–Hermiston 3.7 miles from the Umatilla Bridge (a real bridge counts within 2 miles); those pairs pay for a new river bridge. Lines that do use the real bridges: Vancouver–Gresham (Glenn Jackson), Longview–St. Helens (Lewis and Clark), Goldendale–The Dalles, Pasco–Hermiston (Cable Bridge), Mount Vernon–Bellingham (Skagit).
- Left out: the Blue Bridge (US 395) and the I-182 bridge in the Tri-Cities (unsure of exact coordinates; one Tri-Cities bridge seemed enough), the Chehalis River Bridge in Aberdeen, Columbia crossings at Beebe, Bridgeport, Grand Coulee and Kettle Falls, and the Agate Pass and Puget Island bridges.

---

## 7. Bays and biomes

**Bays:** none. Puget Sound, Hood Canal, the Strait of Juan de Fuca, Grays Harbor, Willapa Bay and the Columbia estuary are already water outside every county shape; Lake Washington, Lake Chelan, Banks Lake, Potholes Reservoir and Lake Roosevelt are lakes in the terrain.

**Biomes**, matching the Oregon pack and the Oregon regions across the border:
- **forest** (trees on the flats too): Clallam, Jefferson-Mason, Grays Harbor, Pacific-Wahkiakum (across from OR's forest Clatsop-Tillamook), Kitsap.
- **wooded** (trees on the hills): the Puget Sound counties (King, Pierce, Snohomish, Thurston, Island, San Juan-Skagit, Whatcom), Lewis, Cowlitz, Clark (like OR's Columbia and Multnomah), the east-slope Cascades and highlands (Chelan-Douglas, Kittitas, Ferry-Okanogan, Klickitat-Skamania, Pend Oreille-Stevens) and Spokane (ponderosa pine). Ferry's forests now draw as forest with Okanogan instead of as sagebrush.
- **dry**: the Columbia Basin: Grant, Benton, Franklin, Yakima, Adams-Lincoln (scablands, potatoes and dryland wheat), Columbia-Walla Walla (like OR's Morrow-Umatilla next door; Oregon's wheat country is "dry" too).
- **farmland** (not listed): Asotin-Garfield-Whitman, the Palouse (the brief).

Unsure: Chelan-Douglas and Kittitas (wooded, though Douglas and eastern Kittitas are sagebrush and wheat), Columbia-Walla Walla (dry or farmland; Columbia County reaches the Blue Mountains), Yakima (dry, though its west is Cascade forest).

---

## 8. Screenshots looked at

`WA-arcade-light.png`, `WA-classic-light.png`, `WA-levels.png`, `WA-phone.png`: stations sit at their cities (Seattle, Tacoma, Bremerton, Kent, Snoqualmie, Wenatchee visible), the Cascades read as a wall with pass markers at the crossings, bridge markers sit on the Columbia, the Basin is tan and the Palouse green, Level 1 only offers Puget Sound counties, and the phone view fits. Nothing looked broken. After the new merges `WA-arcade-light.png` shows 28 regions, Tacoma with the coast symbol, Ferry-Okanogan wooded, Franklin dry and the Palouse green.

## City maps

### Seattle (SEA, size 5, 12 stops)

Stops: King Street Station, Queen Anne, Seattle Center, Capitol Hill, University of Washington, Ballard, Fremont, West Seattle, Sea-Tac Airport, Bellevue, Kirkland, Columbia City.

Hub: King Street Station (Amtrak, Sounder), 1.8 mi from the state map's main station at Seattle Center side. Puget Sound, Lake Union and Lake Washington are water; Bellevue and Kirkland are across the lake (land). Left out: Tacoma (30 mi), Everett, Bremerton. Sources: Amtrak King Street Station, University of Washington, Seattle Center, Sea-Tac Airport, public gazetteer coordinates for neighborhoods and cities.

Fremont was moved a few hundred metres off the Ship Canal; Kirkland sits 400 m from the lake shore.

Checked: every stop within 25 miles of the main station and at least 1 mile apart (the two Aerial Tram stops excepted); no stop in water in the preview data (checked in code and by picture); the hill/water terrain is not built yet.


- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
