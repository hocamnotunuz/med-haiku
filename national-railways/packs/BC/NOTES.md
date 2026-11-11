# British Columbia pack: notes

## Region merges (phase 1)

**Outcome:** the owner picked the recommended list (22 regions). The two data issues below are fixed in `make-raw.js`, and ferries now count as borders for unlocking.

Populations: `raw/counties.json` (Statistics Canada, 2021 Census) and `raw/places.json`.
Every group below was checked against the neighbours in `counties.json` (each member borders
another member). Highway, rail and ferry facts are well-known ones, named where used.

### Recommended: 29 → 22 regions

```
merge: [["Northern Rockies", "Peace River"], ["Kitimat-Stikine", "North Coast", "Stikine"], ["Cariboo", "Central Coast"], ["Mount Waddington", "Strathcona"], ["qathet", "Sunshine Coast"], ["Central Kootenay", "Kootenay Boundary"]]
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Northern Rockies + Peace River | Fort Nelson's only road south is the Alaska Highway to Fort St. John | Fort St. John (21,465) | 66,010 |
| Kitimat-Stikine + North Coast + Stikine | Northwest BC: Hwy 16 and the CN line down the Skeena to Prince Rupert; Hwy 37 (Stewart-Cassiar) north through Dease Lake into the Stikine; Haida Gwaii by the Prince Rupert–Skidegate ferry | Prince Rupert (12,300; the port). Terrace (12,017) is a near-tie, if you'd rather have the hub | 56,654 |
| Cariboo + Central Coast | Bella Coola's only road is Hwy 20 to Williams Lake | Williams Lake (10,947) | 66,513 |
| Mount Waddington + Strathcona | The North Island: Hwy 19 Campbell River–Port McNeill–Port Hardy | Campbell River (35,519) | 58,989 |
| qathet + Sunshine Coast | One coast along Hwy 101, joined by the Earls Cove–Saltery Bay ferry; neither has a road to the rest of the mainland | Powell River (13,943). Sechelt (10,847) is one ferry closer to Vancouver | 53,666 |
| Central Kootenay + Kootenay Boundary | The West Kootenay: Trail–Castlegar–Nelson (Hwys 22 and 3A) | Nelson (11,106) | 95,661 |

Left alone though under 50k:
- **Alberni-Clayoquot** (33.5k, Port Alberni): its only road, Hwy 4, goes to Nanaimo RD; no road to its one small neighbour, Strathcona.
- **Bulkley-Nechako** (37.7k, Smithers): the Hwy 16 stretch between Prince George and Terrace; its sensible partner group (Kitimat-Stikine) is full.

### Alternatives

A. **Fewer merges (23 regions):**
```
merge: [["Northern Rockies", "Peace River"], ["Kitimat-Stikine", "Stikine"], ["Cariboo", "Central Coast"], ["Mount Waddington", "Strathcona"], ["qathet", "Sunshine Coast"], ["Central Kootenay", "Kootenay Boundary"]]
```
Pro: Terrace (38,473) and Prince Rupert/Haida Gwaii (18,181) each keep a station. Con: two main stations about 145 km apart on the Skeena; North Coast is small.

B. **Strict California rule (20 regions):** the recommended list plus
`["Alberni-Clayoquot", "Nanaimo"]` (203,888, Nanaimo) and `["Bulkley-Nechako", "Fraser-Fort George"]` (134,716, Prince George).
Pro: no region under 50k. Con: Port Alberni/Tofino and Smithers (about 370 km from Prince George) lose their stations.

(No merges, 29 regions: Stikine, 683 people, and Central Coast, 3,582, would each get a main station. Not recommended.)

### Map and data issues found

1. `raw/places.json` puts **Port McNeill** (2,356) and **Alert Bay** in Strathcona. Both are `offMap` (off the simplified coast), and `tools/make-raw.js` then picks the nearest region *label*; their census codes (5943…) say Mount Waddington. Harmless with the recommended merge; the better fix is to use the first 4 digits of a place's CSD code when it has one.
2. Seven `community` entries reuse a municipality's population by name: Squamish (placed in Metro Vancouver, 23,819), Osoyoos, Penticton, New Westminster, Campbell River, Lytton, Ashcroft. Towns in phase 2 must ignore these duplicates.
3. Regions and neighbours otherwise look right. Strathcona and Mount Waddington include mainland inlets, so they border Cariboo, Squamish-Lillooet and qathet by land (empty Coast Mountains, no road). The Sunshine Coast, qathet, Vancouver Island and Haida Gwaii reach the rest of BC only by water, so the ferry bridges (Horseshoe Bay–Langdale, Little River (Comox)–Powell River, Tsawwassen–Swartz Bay, Horseshoe Bay–Departure Bay, Tsawwassen–Duke Point, Prince Rupert–Skidegate) should also count as borders for unlocking.

## The pack (phase 2)

Everything below is in `pack.js`. Facts come from `raw/` (Statistics Canada 2021 populations; the Canadian Geographical Names Database for places and parks) unless a source is named. Coordinates are rounded to 2 decimals (ferry points: up to 3).

### Start

`start: ["bc-metro-vancouver", "bc-fraser-valley", "bc-squamish-lillooet"]`. These are the only BC regions that touch Metro Vancouver by land; Capital, Nanaimo and the Sunshine Coast are across the water. Their main stations are Vancouver (metro), Abbotsford (farm) and Squamish (mountain). The pack test lays VAN–SQU over the Sea-to-Sky entry.

### Main stations (22)

| Id | Station | Region | Type | Size | Pop (k) | Level | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| VAN | Vancouver | Metro Vancouver | metro | 5 | 2643 | south | Port of Vancouver; Vancouver International |
| ABB | Abbotsford | Fraser Valley | farm | 3 | 324 | south | dairy, berries, poultry |
| SQU | Squamish | Squamish-Lillooet | mountain | 1 | 50 | south | biggest municipality (23,819; Whistler 13,982) |
| VIC | Victoria | Capital | coast | 3 | 415 | south | **exception**: Saanich is bigger (117,735 to 91,867), but Victoria is the capital and the centre of a population centre of 363,222; Victoria International |
| NAN | Nanaimo | Nanaimo | coast | 2 | 170 | south | ferry port |
| DUN | Duncan | Cowichan Valley | farm | 1 | 89 | south | **exception**: North Cowichan (31,990) is the rural district around Duncan (5,047; population centre 24,358) |
| PWR | Powell River | Sunshine Coast-qathet | coast | 1 | 54 | south | phase-1 pick |
| KAM | Kamloops | Thompson-Nicola | desert | 2 | 144 | interior | semi-arid grassland and sagebrush |
| KEL | Kelowna | Central Okanagan | metro | 2 | 222 | interior | Kelowna International |
| VER | Vernon | North Okanagan | farm | 1 | 92 | interior | Armstrong and Spallumcheen farms |
| PEN | Penticton | Okanagan-Similkameen | farm | 1 | 90 | interior | orchards and vineyards |
| SAR | Salmon Arm | Columbia-Shuswap | mountain | 1 | 57 | interior | Shuswap, Monashees, Selkirks |
| NEL | Nelson | Central Kootenay-Kootenay Boundary | mountain | 1 | 96 | interior | phase-1 pick |
| CRB | Cranbrook | East Kootenay | mountain | 1 | 66 | interior | |
| PAB | Port Alberni | Alberni-Clayoquot | coast | 1 | 34 | island | |
| CTN | Courtenay | Comox Valley | farm | 1 | 72 | island | |
| CRV | Campbell River | Mount Waddington-Strathcona | coast | 1 | 59 | island | phase-1 pick |
| WLK | Williams Lake | Cariboo-Central Coast | farm | 1 | 67 | island | cattle ranching; phase-1 pick |
| PG | Prince George | Fraser-Fort George | metro | 2 | 97 | north | the north's only city of any size |
| SMI | Smithers | Bulkley-Nechako | mountain | 1 | 38 | north | |
| PRU | Prince Rupert | Kitimat-Stikine-North Coast-Stikine | coast | 1 | 57 | north | Port of Prince Rupert (Fairview container terminal); biggest municipality (12,300; Terrace 12,017) |
| FSJ | Fort St. John | Northern Rockies-Peace River | farm | 1 | 66 | north | Peace River grain country |

- **Ports:** only Vancouver and Prince Rupert.
- **Airports:** Vancouver International, Victoria International and Kelowna International.
- **Sizes:** follow the PACKS.md guide. Abbotsford (324k) is a 3 because the Fraser Valley is one busy urban corridor (Abbotsford, Chilliwack, Mission). Kelowna stays a 2, as Washington's Bellingham and Yakima are.
- **Types:** Victoria is coast, not metro, so Vancouver–Victoria has riders (like Tacoma in Washington). Prince George is metro because the north needs a destination for produce and trucks.
- **Ids:** VAN and VIC as reserved. All 57 ids were checked unique against every pack; SQM (Sequim) is taken, so Squamish is SQU.

### Towns (35, about 1.6 per region)

| Region | Towns |
| --- | --- |
| Metro Vancouver | Surrey (metro 3); Tsawwassen (coast, the ferry terminal) |
| Capital | Langford (metro 2); Sidney (coast, by Swartz Bay) |
| Fraser Valley | Chilliwack (farm 2); Hope (mountain) |
| Squamish-Lillooet | Whistler (scenic, mountain 2); Lillooet |
| Sunshine Coast-qathet | Sechelt |
| Cowichan Valley | Ladysmith |
| Nanaimo | Parksville |
| Alberni-Clayoquot | Tofino (scenic: Pacific Rim National Park Reserve, Clayoquot Sound) |
| Mount Waddington-Strathcona | Gold River |
| Thompson-Nicola | Merritt (farm); Wells Gray (Clearwater) (scenic) |
| Okanagan-Similkameen | Osoyoos (scenic, desert); Princeton |
| Columbia-Shuswap | Revelstoke (scenic: Mount Revelstoke and Glacier national parks); Golden; Yoho (Field) (scenic) |
| Central Kootenay-Kootenay Boundary | Trail; Grand Forks (farm); Creston (farm) |
| East Kootenay | Fernie; Radium Hot Springs (scenic: Kootenay National Park) |
| Cariboo-Central Coast | Quesnel; Barkerville (scenic: the historic gold rush town) |
| Fraser-Fort George | Mackenzie; Mount Robson (scenic) |
| Bulkley-Nechako | Vanderhoof (farm) |
| Kitimat-Stikine-North Coast-Stikine | Terrace; Kitimat (coast); Haida Gwaii (scenic, coast) |
| Northern Rockies-Peace River | Dawson Creek (farm); Fort Nelson |

Towns are size 1 and the same type as their main station unless shown. Coordinates come from `places.json`:
- Scenic places sit at their gateway towns: Tofino, Field (Yoho), Revelstoke, Radium Hot Springs, Clearwater (Wells Gray Park) and Osoyoos.
- Barkerville and Mount Robson use their own GNDB localities. The Mount Robson locality (53.03, -119.23) is by the park's visitor area at the foot of the mountain.
- Haida Gwaii sits at Skidegate, where the ferry lands and the Haida Heritage Centre is. Gwaii Haanas (`parks.json`, 52.35, -131.43) is on southern Moresby Island, which has no road.

Changes from the obvious picks, and why:
- **Sechelt** is `offMap` (just off the outline): moved from 49.47 to 49.48 °N, about 0.7 miles onto land. Sidney, Ladysmith and Tofino are also `offMap` but their rounded points are inside their regions.
- **Port Hardy dropped** for Gold River. Campbell River–Port Hardy crosses 54 miles of mountains on the map, more than a tunnel can take even in Gentle, and there is no real pass to name. Gold River is reachable in Gentle.
- **Bella Coola dropped.** Williams Lake–Bella Coola crosses 44 miles of Coast Mountains, and Heckman Pass sits 14 miles off that line (Gentle reaches 12). Bella Coola would have been unreachable.
- **Grand Forks added** so the Okanagan and the Kootenays join along Highway 3 (Anarchist Summit and Bonanza Pass).
- **No town for Central Okanagan, North Okanagan or Comox Valley.** West Kelowna isn't in `places.json`, and Comox is 3.4 miles from Courtenay (the checker wants 4).

### Passes (26)

The checker found mountains near every one (0 warnings).

Real passes, with coordinates from Wikipedia's article for each:
- Coquihalla Pass, Allison Pass, Kootenay Pass, Bonanza Pass, Richter Pass, Monashee Pass, Eagle Pass (British Columbia), Kicking Horse Pass, Yellowhead Pass, Pine Pass, Cayoosh Pass and Heckman Pass.
- Anarchist Summit: placed at Anarchist Mountain (Wikipedia: Anarchist Mountain). Highway 3 climbs over the mountain's flank, and the article gives no point for the highway summit.

From GNDB localities in `places.json`:
- Rogers Pass (51.30, -117.52).
- Crowsnest Pass, at the Crowsnest locality (49.63, -114.68).
- Fraser Canyon, at Hells Gate (49.78, -121.45).
- Summit Lake on the Alaska Highway (58.65, -124.63), the highway's highest point.

**Valley routes.** These are not passes. BC's railways and highways follow river valleys through ranges, and the map's mountain cells (about 5 km) fill those valleys in. Without these entries the main lines would need impossible tunnels: Terrace was unreachable, and Squamish was cut off in Tough. Each sits at a real named place on the route, like Washington's Yakima River Canyon:

| Entry | Placed at | What uses it |
| --- | --- | --- |
| Howe Sound (Sea-to-Sky Highway) | Lions Bay (GNDB), 49.46, -123.24 | Highway 99 and the old BC Rail line along the sound's east shore (Wikipedia: Sea-to-Sky Highway). Placed at Lions Bay, not Squamish, so lines from Squamish west over the mountains to the Sunshine Coast don't count as using it |
| Cheakamus Canyon | 49.85, -123.15, **approximate** | Highway 99 and the rail line north of Squamish (Wikipedia: Sea-to-Sky Highway; no coordinates found) |
| Canal Flats | the village (GNDB), 50.16, -115.81 | the Rocky Mountain Trench's low divide between Columbia Lake and the Kootenay River (Highways 93/95) |
| Robson Valley | Dunster (GNDB), 53.12, -119.84 | Highway 16 and CN along the upper Fraser in the Trench, toward the Yellowhead Pass |
| North Thompson valley | Little Fort (GNDB), 51.42, -120.21 | Highway 5 and CN's main line, Kamloops to Valemount |
| Kitselas Canyon | 54.60, -128.43 (Wikipedia: Kitselas Canyon) | the Skeena above Terrace (Highway 16 and CN) |
| Skeena River valley | Exstew (GNDB), 54.39, -129.10 | Highway 16 and CN to Prince Rupert |
| Port Alberni Summit ("the Hump") | 49.26, -124.68, **approximate** | Highway 4. Wikipedia (British Columbia Highway 4) puts it on the Nanaimo / Alberni-Clayoquot boundary west of Cameron Lake; placed where the map's boundary crosses the highway's line |
| Sutton Pass | 49.24, -125.32, **approximate** | Highway 4 to Tofino. Wikipedia (British Columbia Highway 4): up the Taylor River west of Sproat Lake; no coordinates given |

### Bridges (10) and ferries (22 points on 8 routes)

**Bridges:**
- Lions Gate and Ironworkers Memorial (Burrard Inlet).
- W. R. Bennett Bridge (Okanagan Lake) and the Big Orange Bridge (Nelson, Kootenay Lake's West Arm).
- Overlanders Bridge (the Thompson at Kamloops).
- The Columbia at Castlegar (Kinnaird Bridge), Trail (Victoria Street Bridge) and Revelstoke.
- Simon Fraser Bridge (the Fraser at Prince George).
- Peace River Bridge (the Alaska Highway at Taylor).

All are well known; their coordinates are approximate (at the crossing in each town).

**Lower Fraser crossings left out** (Port Mann, Pattullo, Alex Fraser, Golden Ears, Mission, Agassiz–Rosedale). The map has no lower Fraser: `terrain.js`'s Fraser ends near Lillooet, and the land outline fills the river in. Those bridges would do nothing and would trip the checker's "far from water" warning.

**Ferries** (BC Ferries routes; Port Angeles–Victoria is Black Ball Ferry Line's MV Coho). Each is listed as bridge entries with points along the crossing, named after the route plus the stretch:
- Tsawwassen–Swartz Bay (4 points: Tsawwassen, mid-strait, Active Pass, Swanson Channel).
- Tsawwassen–Duke Point (3).
- Horseshoe Bay–Departure Bay (3).
- Horseshoe Bay–Langdale (3).
- Comox–Powell River (3).
- Port Angeles–Victoria (2, on the Canadian half).
- Prince Rupert–Skidegate (2: Chatham Sound, and off Graham Island).
- Earls Cove–Saltery Bay (2).

Notes on the ferries:
- **Prince Rupert–Skidegate** crosses 90 miles of open water. The checker wants bridge points within 10 miles of land, and the game counts a crossing as using a bridge when a point is within 3 to 4 miles of the water stretch. So there is one point at each side. The Graham Island one is 17 miles out, so lines from Terrace or Kitimat to Skidegate don't count as using the ferry.
- **Earls Cove–Saltery Bay** is listed for the record only. Jervis Inlet and Malaspina Strait are left out of the bays, so the two halves of the Sunshine Coast region join along the shore, as Sechelt–Powell River needs. A bay there would block that line, because it passes 9 miles from the ferry.
- **Anacortes–Sidney** (Washington State Ferries) is left out: it has been suspended since 2020.

### Bays (8): the straits

The bays are, in order: Howe Sound, Haro Strait, Strait of Juan de Fuca, Strait of Georgia, Johnstone Strait, Queen Charlotte Strait, Queen Charlotte Sound and Hecate Strait (the last also covers Chatham Sound and the BC half of Dixon Entrance). They are rough rings that may overlap land, and a crossing takes the name of the first ring that holds it.

Choices:
- **The Strait of Georgia ring stops 2–4 miles off Vancouver Island's east coast and runs along the Gulf Islands' outer shores.** So track along the island's coast (Victoria–Duncan–Nanaimo–Courtenay–Campbell River) and in the channels behind the Gulf Islands follows the shore. In Tough those channels (more than 2 miles wide) would otherwise block Vancouver–Duncan.
- **Malaspina Strait, Jervis Inlet, Burrard Inlet/English Bay and Saanich Inlet are left out.** Track there follows the shore.
- **Haro Strait reaches the San Juan Islands' west shores (US waters).** The Canadian half alone is only 2–4 miles wide, so lines from Washington would have reached Sidney or Victoria over a short new bridge. Washington's own links are unchanged: its link table is the same as before (160 open in both modes, 11 Tough-only blocks, 2 blocked in both), including Friday Harbor–Port Angeles and Friday Harbor–Sequim.
- **Juan de Fuca and the Strait of Georgia's south edge follow the international boundary.** Puget Sound is untouched.

**Verification** with `NR.blockedReason` / `NR.segmentGeo`, loading the game the way `tools/check-pack.js` does plus `js/geography.js`, in both modes:

Allowed, using a ferry:

| Link | Ferry used |
| --- | --- |
| VAN–NAN | Tsawwassen–Duke Point, 22 mi of strait |
| VAN–VIC | Tsawwassen–Swartz Bay: mid-strait for 14 mi, Swanson Channel for 17 mi of Haro Strait |
| Tsawwassen–Sidney | Tsawwassen–Swartz Bay |
| VAN–Sechelt | Horseshoe Bay–Langdale and Horseshoe Bay–Departure Bay |
| PWR–CTN | Comox–Powell River |
| PRU–Haida Gwaii | Prince Rupert–Skidegate, 92 mi |
| Port Angeles–VIC | Port Angeles–Victoria |

Blocked in both modes ("too wide for a new bridge"):

| Link | Water |
| --- | --- |
| Sechelt–Parksville | 17 mi, Strait of Georgia |
| PWR–NAN | 11 mi |
| PWR–Parksville | 15 mi |
| VAN–CTN | 25 mi |
| Tsawwassen–VIC | Haro Strait 20 mi / Strait of Georgia 12 mi |
| Kitimat–Haida Gwaii, Terrace–Haida Gwaii | 63–67 mi, Hecate Strait |
| CRV–Haida Gwaii | 198 mi, Queen Charlotte Sound |
| Friday Harbor–Sidney, Friday Harbor–VIC | 11 mi and 9 mi, Haro Strait |

A straight Vancouver–Nanaimo line *is* a ferry line: it runs between the Horseshoe Bay and Tsawwassen routes. The crossings away from ferries (the ones above) are blocked.

**Known limit.** Gentle allows a new bridge of up to 8 miles over any bay (the game's rule). So Abbotsford–VIC (8 mi of Haro Strait, after crossing Washington) and Anacortes–VIC (6 mi) are allowed in Gentle at new-bridge prices. Tough blocks them.

### Biomes

- **forest:** the wet coast: Alberni-Clayoquot, Comox Valley, Cowichan Valley, Nanaimo, Mount Waddington-Strathcona, Sunshine Coast-qathet, Kitimat-Stikine-North Coast-Stikine.
- **wooded:** the rest of the forested south and the north: Capital, Metro Vancouver, Fraser Valley, Squamish-Lillooet, North Okanagan, Columbia-Shuswap, both Kootenay regions, Cariboo-Central Coast, Fraser-Fort George, Bulkley-Nechako.
- **dry:** the Thompson and the Okanagan: Thompson-Nicola, Okanagan-Similkameen, Central Okanagan.
- **farmland (not listed):** Northern Rockies-Peace River (the Peace River country).

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| 1. Vancouver & Victoria | south | VAN, ABB, SQU, VIC, NAN, DUN, PWR | 50 passengers, 5 counties, 10 containers (Port of Vancouver to the Abbotsford/Duncan farms) |
| 2. Okanagan & Kootenays | interior | KAM, KEL, VER, PEN, SAR, NEL, CRB | 140 passengers, connect VAN–KEL (Coquihalla), 25 produce |
| 3. Vancouver Island & Cariboo | island | PAB, CTN, CRV, WLK | 280 passengers, connect VIC–CTN (the old E&N route), one high-speed train |
| 4. Northern BC | north | PG, SMI, PRU, FSJ | 450 passengers, connect VAN–PRU, 16 counties |

Every level's regions touch an earlier level's regions.

### How the map plays

- **Gentle:** every station and town can be joined to every other.
- **Tough:** every station and town can be joined too, but two main stations need towns as stepping stones:
  - **Cranbrook** goes through Radium Hot Springs (Canal Flats) and Golden. Straight lines to Nelson or Creston cross 35–39 miles of the Purcells, and no real pass lies near them.
  - **Fort St. John** goes through Mackenzie or Dawson Creek over Pine Pass. The straight Prince George–Fort St. John line crosses 28 miles of the Hart Ranges, 40 miles east of Pine Pass.
  - Washington, Oregon and California join all their main stations in Tough without towns, so this is worth knowing.

Of the 140 neighbour and nearby-town links tested, 98 are open in both modes, 27 only in Gentle and 15 in neither. Most are long or roadless lines, such as Fort St. John–Prince Rupert.
