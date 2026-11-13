# Ontario (ON) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied, giving 41 regions. Prince Edward is joined to Hastings, and the Chi-Cheemaun ferry (Manitoulin–Bruce) counts as a border. The Sudbury group is named "Sudbury and Manitoulin". The tools now fix Algoma's label, Greater Sudbury's population and the stray Perth.

Populations come from `packs/ON/raw/counties.json` and `packs/ON/raw/places.json` (Statistics Canada, 2021 Census). Distances are straight lines between `places.json` points. Roads, railways and bridges are marked "well known". A script checked that every merge group shares a border in `neighbors`. Ontario has 8 divisions under 50,000: Manitoulin, Rainy River, Haliburton, Sudbury District, Prince Edward, Timiskaming, Lennox and Addington, and Parry Sound. Every one of them is in a group below.

### Recommended (49 → 41 regions)

```
merge: [["Greater Sudbury", "Sudbury", "Manitoulin"], ["Kenora", "Rainy River"], ["Kawartha Lakes", "Haliburton"], ["Muskoka", "Parry Sound"], ["Cochrane", "Timiskaming"], ["Frontenac", "Lennox and Addington"]]
join: [["Prince Edward", "Hastings"]]
bridges: add ["Manitoulin", "Bruce"] to the two that are already there
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Greater Sudbury + Sudbury + Manitoulin | The district surrounds the city completely. Left alone, Sudbury would be a dead end that can only be reached through a 22k ring, although it is a CN/CP rail junction (well known). Manitoulin's only link is the Little Current bridge, then Hwy 6 to Espanola (well known), 32 km away. The three also share one public health unit, Public Health Sudbury & Districts (well known) | Sudbury (92,093, population centre) | 202,431 |
| Kenora + Rainy River | Fort Frances is 154 km from Kenora on Hwy 71 (well known), against 305 km to Thunder Bay. This is the northwest corner | Kenora (14,967) | 85,437 |
| Kawartha Lakes + Haliburton | Hwy 35 runs from Lindsay to Minden (63 km). The old Victoria Railway ran from Lindsay to Haliburton (well known). The two share a riding, Haliburton–Kawartha Lakes–Brock, and the HKPR health unit (well known). Haliburton has **no place with a population** in `places.json`, so it can't hold a station alone | Lindsay (22,367). The "Kawartha Lakes" city entry (79,247) is a point near the middle of the city, not a town | 99,818 |
| Muskoka + Parry Sound | Hwy 11 (Huntsville → Burk's Falls, 37 km) and Hwy 400/69 both run on from Muskoka into the district (well known). Parry Sound is 60 km from Huntsville. The two share the Parry Sound–Muskoka riding (well known) | Huntsville (21,147; its population centre is 6,639, while Bracebridge's is 9,884) | 113,583 |
| Cochrane + Timiskaming | The Hwy 11 and Ontario Northland corridor north of Temagami, through the clay belt and the gold camps (well known). Kirkland Lake is 102 km from Timmins but 209 km from North Bay | Timmins (41,145) | 109,387 |
| Frontenac + Lennox and Addington | Napanee is 45 km from Kingston, and Loyalist (Amherstview) sits on Kingston's edge. The two share the KFL&A health unit (well known) | Kingston (132,485) | 206,962 |
| join Prince Edward → Hastings | Both of the County's fixed links reach Hastings (well known): the Bay Bridge to Belleville, and the Hwy 33 bridge over the Murray Canal at Carrying Place to Trenton (Quinte West). It shares Hastings Prince Edward Public Health (well known) | Belleville (55,071; population centre 75,052) | 171,450 |

Left alone: every other division has at least 61,000 people. The smallest are Huron (61k), Dufferin (66k), Muskoka before the merge (67k) and Bruce (73k).

### Alternative (42 regions)

Keep Greater Sudbury alone, and merge `["Sudbury", "Manitoulin"]` instead: 36,303 people, with Espanola (5,185) as the station.
- **Pro:** the district and the island get their own station, on the road to Manitoulin.
- **Con:** the region becomes a donut, and Sudbury can only be reached through it. Espanola is only 66 km from Sudbury.

Other options I weighed and rejected:
- Timiskaming with Nipissing (116,140). Temiskaming Shores is 133 km from North Bay and 162 km from Timmins, but Kirkland Lake leans to Timmins.
- Joining Prince Edward to Lennox and Addington (70,886). Its only link would be the Glenora Ferry, and the station would be Greater Napanee (16,879).

### Names
The tool joins member names alphabetically with " & ". That would give, for example, "Greater Sudbury / Grand Sudbury & Manitoulin & Sudbury", because the census name is bilingual. A short name such as "Sudbury-Manitoulin" would read better.

### Map and data problems seen
1. **Algoma's label** (-83.91, 47.92) falls inside Sudbury District, in the lobe around Chapleau. It needs moving, for example toward Wawa or Sault Ste. Marie.
2. **Perth is listed twice.** The town in Lanark is correct (44.90, -76.25). A second "Perth" (kind `municipality`, same 6,469 people and the same csd 3509021) sits at Perth County's centre (43.50, -81.08) but is tagged `on-lanark`. Drop it in phase 2.
3. **"Sudbury" is listed twice**, both with 92,093: one at 46.50, -80.98 and one at 46.52, -80.90. "Greater Sudbury" (city) has no population.
4. **Places with no population.**
   - Haliburton County has none at all: Minden Hills, Algonquin Highlands and Highlands East have no figure, and Dysart et al is missing.
   - A "Haliburton" municipality point with no population sits in Peterborough County (44.17, -78.51).
   - Atikokan (Rainy River) has no population.
   - Prince Edward County as a municipality is missing, so Picton (4,508) is the County's biggest place.
5. **Toronto and Peel each have two zero-area sliver rings** on their shared border (around -79.59, 43.63). They look harmless.
6. **Checked and fine.**
   - Greater Sudbury is a proper hole in Sudbury District. The merge removes it.
   - Every `neighbors` list matches the real land borders as far as I know.
   - A 0.05° grid over the land found no gaps or overlaps.
   - Every place lies in its own region, apart from the stray Perth and Clachan (no population, sitting on the Elgin/Chatham-Kent line).

**Water crossings.** Add **["Manitoulin", "Bruce"]**: the MS Chi-Cheemaun car ferry runs from Tobermory to South Baymouth, in season only (well known). The ferries to Wolfe, Howe, Amherst, Pelee and Christian islands, the St. Joseph Island bridge and Moosonee–Moose Factory all stay inside one division. The Bay Bridge and the Glenora Ferry are already in the list.

## The pack (phase 2)

Everything below is in `pack.js`. Facts come from `raw/`, unless a source is named:
- populations: Statistics Canada, 2021 Census;
- places and parks: the Canadian Geographical Names Database (GNDB).

Coordinates are rounded to 2 decimals. Station `pop` is the region's population in thousands from `counties.json`. Distances are straight lines. Roads, railways, ferries and bridges marked "well known" are added by hand.

### Start

`start: ["on-toronto", "on-york", "on-durham"]`: Toronto (metro), Markham (metro) and Oshawa (coast).
- All three touch each other. Peel (Mississauga and Pearson airport) is bigger than York, but it doesn't touch Durham, and it is the obvious first region to buy.
- There are two types of place, so Toronto–Oshawa and Markham–Oshawa have riders. Oshawa is coast: Durham's cities (Pickering, Ajax, Whitby, Oshawa, Bowmanville) all line Lake Ontario, and Oshawa has a lake port. This is like Tacoma in Washington.
- The pack test laid MKM–OSH (23 mi), and 6 passengers arrived in the first week.

### Main stations (41)

| Id | Station | Region | Type | Size | Pop (k) | Level | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TOR | Toronto | Toronto | metro | 5 | 2794 | gta | at Union Station (see below) |
| MSS | Mississauga | Peel | metro | 4 | 1451 | gta | airport: Toronto Pearson International (well known) |
| MKM | Markham | York | metro | 4 | 1173 | gta | York's biggest town (338,503; Vaughan 323,132) |
| OSH | Oshawa | Durham | coast | 4 | 697 | gta | see Start |
| OKV | Oakville | Halton | metro | 4 | 597 | gta | |
| HAM | Hamilton | Hamilton | coast | 4 | 569 | gta | port: Port of Hamilton |
| SCA | St. Catharines | Niagara | metro | 3 | 478 | southwest | |
| KCH | Kitchener | Waterloo | metro | 4 | 587 | southwest | |
| LDN | London | Middlesex | metro | 4 | 501 | southwest | |
| WND | Windsor | Essex | metro | 3 | 423 | southwest | |
| GPH | Guelph | Wellington | farm | 2 | 241 | southwest | |
| BRT | Brantford | Brant | metro | 2 | 145 | southwest | |
| SRN | Sarnia | Lambton | coast | 2 | 128 | southwest | Lake Huron and the St. Clair River |
| WDS | Woodstock | Oxford | farm | 2 | 122 | southwest | |
| CHK | Chatham | Chatham-Kent | farm | 2 | 104 | southwest | the town (see below) |
| SIM | Simcoe | Haldimand-Norfolk | farm | 1 | 117 | southwest | |
| STT | St. Thomas | Elgin | farm | 1 | 95 | southwest | |
| STF | Stratford | Perth | farm | 1 | 82 | southwest | scenic: the Stratford Festival (well known) |
| GDH | Goderich | Huron | coast | 1 | 61 | southwest | not South Huron (see below) |
| OTT | Ottawa | Ottawa | metro | 4 | 1017 | east | airport: Ottawa Macdonald–Cartier International (well known) |
| KGN | Kingston | Frontenac & L&A | metro | 2 | 207 | east | |
| BLE | Belleville | Hastings & Prince Edward | farm | 2 | 171 | east | |
| PTB | Peterborough | Peterborough | metro | 2 | 148 | east | |
| CWL | Cornwall | Stormont, Dundas & Glengarry | farm | 2 | 115 | east | |
| PEM | Pembroke | Renfrew | mountain | 1 | 106 | east | not Petawawa (see below) |
| BRV | Brockville | Leeds & Grenville | coast | 1 | 104 | east | on the St. Lawrence |
| LIN | Lindsay | Haliburton & Kawartha Lakes | farm | 1 | 100 | east | see below |
| RKL | Rockland | Prescott & Russell | farm | 1 | 96 | east | see below |
| CBG | Cobourg | Northumberland | coast | 1 | 89 | east | Lake Ontario harbour and beach |
| CPL | Carleton Place | Lanark | farm | 1 | 76 | east | see below |
| BRI | Barrie | Simcoe | metro | 4 | 533 | north | |
| SUD | Sudbury | Sudbury & Manitoulin | metro | 2 | 202 | north | the north's biggest city |
| TBY | Thunder Bay | Thunder Bay | coast | 2 | 147 | north | port: Port of Thunder Bay |
| SOO | Sault Ste. Marie | Algoma | coast | 2 | 114 | north | on the St. Marys River and its canal |
| NBY | North Bay | Nipissing | mountain | 2 | 85 | north | nudged (see below) |
| TMS | Timmins | Cochrane & Timiskaming | mountain | 2 | 109 | north | gold mining in the boreal forest |
| HSV | Huntsville | Muskoka & Parry Sound | mountain | 1 | 114 | north | see below |
| OWS | Owen Sound | Grey | coast | 1 | 101 | north | Georgian Bay harbour |
| KNR | Kenora | Kenora & Rainy River | mountain | 1 | 85 | north | Lake of the Woods, the Shield |
| PEG | Port Elgin | Bruce | coast | 1 | 73 | north | see below |
| ORV | Orangeville | Dufferin | farm | 1 | 66 | north | |

**Sizes.** I followed the brief and the size guide.
- Toronto is 5.
- Size 4: the other GTA regions (Peel, York, Durham, Halton), Ottawa, Hamilton, Waterloo, Simcoe and London. All are 0.5–1.5 million.
- Size 3: Windsor (423k) and St. Catharines (478k), in the guide's 350–900k band.
- Size 2: a region of 100–300k with a real city of about 40,000 or more, or a city over 50,000. That covers Guelph, Brantford, Sarnia, Woodstock, Chatham, Kingston, Belleville, Peterborough, Cornwall, Sudbury, Thunder Bay, Sault Ste. Marie, North Bay and Timmins. This matches Red Deer, Lethbridge and Regina (2) on the Prairies.
- Everything else is 1.

**Types.**
- **Metro:** the big cities. The GTA has three metros side by side (Toronto, Mississauga, Markham), as Washington has Seattle and Everett.
- **Coast:**
  - Hamilton and Thunder Bay, the two ports.
  - Oshawa (see Start).
  - Sarnia, Goderich, Cobourg, Brockville, Owen Sound and Port Elgin, the Great Lakes and St. Lawrence harbour and beach towns.
  - Sault Ste. Marie.
- **Mountain:** the game's type for forested country, as in Manitoba and Saskatchewan. It covers the Shield and the north: Pembroke, North Bay, Timmins, Huntsville and Kenora.
- **Farm:**
  - The farm-county towns.
  - Guelph, which is like Red Deer: a 144k city whose region is Wellington County's farms, and the home of the Ontario Agricultural College.
  - Belleville, for the Quinte and Prince Edward County farms.
  - Cornwall, for the SD&G dairy counties.

  Farm also gives riders on Guelph–Kitchener, Belleville–Kingston and Cornwall–Ottawa.

**Ports and airports.**
- **Ports.** The other packs give `port` to real cargo seaports, including modest ones such as Humboldt Bay, Coos Bay and Grays Harbor. Hamilton and Thunder Bay meet that bar.
  - The Port of Hamilton is the biggest Canadian port on the Great Lakes (steel, grain, bulk; well known).
  - The Port of Thunder Bay is the Seaway's western grain port (well known).
  - Windsor, Sarnia, Goderich and Toronto handle less cargo, so they get no `port`.
- **Airports.** Pearson (Canada's busiest airport, in Mississauga) and Ottawa only.

**Exceptions to "the biggest town".**
- **Toronto** sits downtown at Union Station (43.65, -79.38; well known). The raw city point (43.74, -79.37) is the middle of the amalgamated city, in North York.
- **The amalgamated cities.** Hamilton, Kingston and Ottawa use their GNDB *locality* points at the old city centre, not the city points (43.24, -79.99; 44.31, -76.42; 45.33, -75.58), which sit out in the amalgamated suburbs.
- **Sudbury** uses the Greater Sudbury city entry (166,004) for the name and the region, placed at the "Sudbury" locality downtown (46.50, -80.98).
- **Chatham, Lindsay and Simcoe.** Each is the biggest town of a single-tier municipality whose raw point is the municipality's middle:
  - Chatham (45,171) in Chatham-Kent (104,316);
  - Lindsay (22,367) in the City of Kawartha Lakes (79,247);
  - Simcoe (16,121) in Norfolk County (67,490).
- **Goderich, not South Huron.** South Huron (10,096) is a township whose biggest place, Exeter, has 4,857. Goderich (7,881) is the biggest town, the county seat and a Lake Huron harbour.
- **Pembroke, not Petawawa.** Petawawa has 18,160 people, with a population centre of 14,405. Pembroke's population centre is 16,580, and Pembroke is the city and county seat.
- **Carleton Place, not Mississippi Mills.** Mississippi Mills (14,740) is a municipality whose biggest place, Almonte, has 6,119. Carleton Place's population centre (13,941) is the biggest town.
- **Rockland** (13,625) is the biggest town of Clarence-Rockland (26,505), the region's biggest municipality. Hawkesbury (10,194) is a town.
- **Port Elgin** (9,619) is the main town of Saugeen Shores (15,908), the biggest municipality.
- **Huntsville** (21,147) is the biggest town on `pop`. Bracebridge's population centre (9,884) is bigger than Huntsville's (6,639). Huntsville sits nearer the Parry Sound half and Algonquin.
- **North Bay** is nudged 1.6 km northeast of its raw point (46.31, -79.46) to 46.32, -79.44, off the map's Lake Nipissing. At the raw point, North Bay–Sudbury and North Bay–Timmins crossed 13 and 8 mi of the lake in Tough.

**Ids:** the checker found every id unique across all packs.

### Towns (68, about 1.7 per region)

| Region | Towns |
| --- | --- |
| Toronto, Hamilton | none: each region is one city |
| Peel | Brampton (metro 3) |
| York | Vaughan (metro 3); Newmarket (metro 2) |
| Durham | Ajax (metro 2); Port Perry (farm) |
| Halton | Burlington (metro 2) |
| Niagara | Niagara Falls (scenic, coast 2); Welland (metro) |
| Brant | Paris (farm) |
| Haldimand-Norfolk | Caledonia (farm); Port Dover (coast) |
| Waterloo | Cambridge (metro 2) |
| Wellington | Fergus (farm) |
| Oxford | Tillsonburg (farm) |
| Middlesex | Strathroy (farm) |
| Elgin | Port Stanley (coast) |
| Perth | Listowel (farm) |
| Huron | Exeter (farm) |
| Lambton | Petrolia (farm) |
| Chatham-Kent | Wallaceburg (farm) |
| Essex | Leamington (farm); Point Pelee (scenic, coast) |
| Ottawa | Kanata (metro 2) |
| Frontenac & L&A | Napanee (farm) |
| Hastings & Prince Edward | Trenton (coast); Bancroft (mountain); Sandbanks (scenic, coast) |
| Northumberland | Campbellford (farm) |
| Peterborough | Lakefield (farm) |
| Haliburton & Kawartha Lakes | Haliburton (mountain); Bobcaygeon (farm) |
| Leeds & Grenville | Gananoque (scenic, coast); Kemptville (farm) |
| Lanark | Smiths Falls (farm); Perth (farm) |
| Renfrew | Arnprior (farm); Deep River (mountain) |
| Prescott & Russell | Hawkesbury (farm) |
| SD&G | Morrisburg (farm); Alexandria (farm) |
| Simcoe | Orillia (coast); Wasaga Beach (scenic, coast) |
| Dufferin | Shelburne (farm) |
| Grey | Hanover (farm); Thornbury (coast) |
| Bruce | Tobermory (scenic, coast); Walkerton (farm) |
| Muskoka & Parry Sound | Bracebridge (mountain); Parry Sound (coast) |
| Nipissing | Algonquin Park (scenic, mountain); Sturgeon Falls (farm) |
| Sudbury & Manitoulin | Espanola (mountain); Little Current (coast); South Baymouth (coast); Killarney (scenic, mountain) |
| Algoma | Elliot Lake (mountain); Agawa Canyon (scenic, mountain); Wawa (mountain) |
| Cochrane & Timiskaming | Temiskaming Shores (farm); Kapuskasing (mountain); Moosonee (scenic, coast) |
| Thunder Bay | Kakabeka Falls (scenic, mountain); Nipigon (mountain); Geraldton (mountain); Marathon (coast) |
| Kenora & Rainy River | Atikokan (mountain); Dryden (mountain); Sioux Lookout (mountain) |

Towns are size 1 unless shown. The GTA's big second cities follow BC's Surrey (568k, size 3): Brampton (656k) and Vaughan (323k) are 3, and Newmarket, Ajax, Burlington, Cambridge and Kanata are 2. Town points are `places.json` town, city or locality points.

**Scenic places (12, with Stratford).** All are well known:
- **Niagara Falls:** the city point (43.06, -79.11).
- **Point Pelee National Park:** the southern tip of mainland Canada. Point: `parks.json`, 41.967, -82.517.
- **Sandbanks Provincial Park:** the dunes and beaches of Prince Edward County. The `parks.json` point (43.919, -77.294) is off the map's shore, so it was nudged 4 km northeast to 43.94, -77.25.
- **Gananoque:** the boat town of the Thousand Islands. Thousand Islands National Park is at `parks.json` 44.352, -75.955. The town point was nudged 1 km north, to 44.34, -76.16, off the map's Lake Ontario outline.
- **Wasaga Beach:** the long Georgian Bay beach. Point: the town, with Wasaga Beach Provincial Park beside it.
- **Tobermory:** the Bruce Peninsula National Park and Fathom Five National Marine Park (`parks.json` 45.233, -81.600 and 45.283, -81.667), and the Chi-Cheemaun terminal. Point: the GNDB locality.
- **Algonquin Park:** at the GNDB "Algonquin Park" locality on Highway 60 (45.552, -78.596). The `parks.json` point (45.837, -78.429) is in the roadless middle of the park.
- **Killarney Provincial Park:** the white quartzite La Cloche hills. Point: `parks.json`, 46.101, -81.381.
  - The raw "Killarney" town point (46.061, -80.982) is the middle of the large municipality.
  - The village (45.973, -81.513) is `offMap` and in the map's lake.
- **Agawa Canyon:** the Algoma Central Railway's tour-train stop (the tour is well known). Point: the GNDB locality "Canyon" (47.425, -84.484) on the line. That this is the railway's name for the canyon stop is from memory.
- **Moosonee:** on James Bay at the end of Ontario Northland's Polar Bear Express. No road reaches it (well known). Like Churchill in Manitoba, it is coast.
- **Kakabeka Falls:** "the Niagara of the North" on the Kaministiquia, west of Thunder Bay. Point: the GNDB locality; the park is at `parks.json` 48.399, -89.627.

**Swapped out or left out:**
- **Fort Frances** (7,466), the region's second town, is left out. Every line from it crosses Rainy Lake or Lake of the Woods:
  - to Kenora (4 mi near Kenora), Dryden, Atikokan (21 mi) and Sioux Lookout.
  - In Tough no link from it was open, even when nudged.
  - The real roads use the Highway 71 and Highway 11 crossings, and the Noden Causeway isn't well known enough to place.
  - **Atikokan** (Highway 11 and the CN line; Quetico's gateway) replaced it. It opens to Thunder Bay and Kakabeka in both modes.
  - Fort Frances can come back with the Minnesota pack, over the International Falls bridge.
- **South Baymouth** (GNDB locality, 45.56, -82.01) was added after the terrain update made Manitoulin land. It is where the Chi-Cheemaun lands, like BC's Tsawwassen. The straight Tobermory–Little Current line now crosses 3.5 mi of Manitoulin's bays, which is blocked in Tough. Tobermory–South Baymouth–Little Current is open in both modes, and it is the real route: the ferry, then Highway 6.
- **Geraldton** was added. Straight lines along Lake Superior's north shore (Nipigon–Marathon, Nipigon–Schreiber–Terrace Bay) cross 7–28 mi of the map's Lake Superior, which is blocked in both modes. Geraldton (Greenstone, 4,309; Highway 11 and the CN line) opens to Nipigon, Thunder Bay and Marathon in both modes.
- **Left out to stay near 1.5 per region:**
  - Milton, Pickering, Grimsby, Niagara-on-the-Lake, Ingersoll, St. Marys, Wingham, Grand Bend, Amherstburg, Kingsville, Port Hope and Brighton.
  - Midland, Collingwood, Gravenhurst, Kincardine, Petawawa, Casselman, Kirkland Lake, Hearst and Red Lake.
- **Fort Henry** (Kingston) is too close to the Kingston station (2.6 mi).
- **Blue Mountain:** the raw point is the middle of the Town of The Blue Mountains, not the resort.

### Passes (0)

Ontario has no mountain cells on the terrain grid, and few hill cells. Algoma has 3.4% hills, Grey 1.4% and Thunder Bay 1.2%. No link needs a pass or a tunnel.

### Water: the Great Lakes are lakes here

The brief expected the Great Lakes to sit outside the land as "coast". In fact `terrain.js` has them as **lakes** (Natural Earth outlines): Lake Huron (Georgian Bay and the North Channel included), Superior, Ontario, Erie and St. Clair. So a line across them is blocked unless it follows the shore or uses a listed bridge or ferry, and **no `bays` were needed**. Since the terrain update, lake islands of 10 km² or more are land: Manitoulin, Amherst and Wolfe Islands, and Lake of the Woods' big islands. Georgian Bay is now part of Lake Huron's outline.
- **The outlines are coarse.** They swallow some shore points:
  - North Bay was nudged (see Main stations).
  - Gananoque and Cobourg were moved 1 km north.

  For the main agent: future Great Lakes packs (MI, OH, NY, PA, WI, MN) will hit the same thing.

**Bridges and ferries that make the real crossings work.** Checked with `NR.segmentGeo` in both modes, again after the islands became land:

| Crossing | Result |
| --- | --- |
| Tobermory–South Baymouth (26 mi of water) | open in both modes, via the Tobermory–South Baymouth ferry |
| Tobermory–Mindemoya (test point) | open in both modes, via the ferry |
| Tobermory–Little Current | Gentle only. The ferry covers the Main Channel, but Tough blocks 3.5 mi of Manitoulin's bays; South Baymouth is the way through |
| Owen Sound–South Baymouth | open in both modes, via the ferry (Highway 6 and the Chi-Cheemaun) |
| On Manitoulin: South Baymouth–Little Current, South Baymouth–Mindemoya (test), Gore Bay (test)–Mindemoya, Manitowaning (test)–Little Current | open in both modes |
| On Manitoulin: Gore Bay–Little Current | Gentle only (Tough blocks 2.5 mi of bays) |
| On Manitoulin: Wikwemikong–Little Current | blocked in both modes (10 mi across Manitowaning Bay) |
| Little Current–Espanola (3.9 + 2 mi of channel) | open in both modes, via the Little Current Swing Bridge (Highway 6) |
| Mindemoya (test)–Espanola | open in both modes, via the swing bridge |
| Little Current–Sudbury | Gentle only (via the swing bridge; Highway 6 then Highway 17) |
| South Baymouth–Walkerton, South Baymouth–Hanover | Gentle only, via the ferry (see Known limit below) |
| **Away from them, blocked in both modes** | Tobermory–Parry Sound (74 mi), Tobermory–Killarney (51), Tobermory–Port Elgin (53, down the Lake Huron side), South Baymouth–Port Elgin (82), South Baymouth–Goderich (120), South Baymouth–Parry Sound, South Baymouth–Killarney (11), Little Current–Killarney (11), Little Current–Elliot Lake (20 across the North Channel), Little Current–Parry Sound, Gore Bay–Espanola and Gore Bay–Elliot Lake (tests). Little Current–Sudbury is blocked in Tough |
| Sandbanks–Belleville | open; its 1.5 mi of the bay uses the Bay Bridge |
| Sandbanks–Trenton, Picton (test)–Trenton, Wellington (test)–Trenton | open; they use the Trenton bridge at the head of the bay |
| Picton (test)–Deseronto (test) | Gentle only, via the Glenora ferry; Tough blocks 5.4 mi of the bay |
| Amherst Island (test)–Picton | open in both modes. Amherst Island is land now, so the line follows the shore. Before the update, Tough blocked it |
| Picton (test)–Kingston | Gentle only; Tough blocks 4.4 mi of Lake Ontario |
| Wellington–Cobourg, Sandbanks–Cobourg, Sandbanks–Kingston (19–43 mi of Lake Ontario) | blocked in both modes |

Notes:
- **The ferry and swing-bridge points stay away from the towns on purpose.** A crossing uses a bridge point within 3–4 miles of its stretch of water, and a stretch that starts at a shore town counts as near any point by that town. I re-checked this after the islands became land, by moving the points to the real crossings:
  - **Ferry next to Tobermory** (45.27, -81.68): Tobermory–Killarney opened in both modes across 51 mi of Lake Huron, and Tobermory–Parry Sound opened in Gentle.
  - **Ferry next to South Baymouth** (45.54, -81.99): South Baymouth–Port Elgin opened in both modes across 82 mi of Lake Huron, and South Baymouth–Goderich across 120 mi.
  - So the ferry keeps two points on the real route in mid-channel: 45.33, -81.75 (6 miles from Tobermory) and 45.39, -81.82. The old third point (45.49, -81.92) was dropped, and the mid point moved from 45.41, -81.84, because both let South Baymouth–Port Elgin through.
  - **Swing bridge at the real bridge** (45.99, -81.93, by Little Current): Little Current–Elliot Lake opened in both modes across 20 mi of the North Channel. Little Current–Espanola became blocked in Tough, because the map's 3.9-mi channel north of the town lay out of reach.
  - So the swing bridge's point stays 7 miles north of Little Current, on Highway 6's route over La Cloche Island (46.07, -81.87). The real swing bridge is at Little Current itself (well known).
- **Known limit.** In Gentle (bridge reach 4 mi), South Baymouth–Walkerton and South Baymouth–Hanover pass the ferry's Tobermory point. They count the whole 76–78 mi run down Lake Huron as the ferry, at the real-bridge price. Tough blocks them.
- **The Bay of Quinte gets no bay.** It is mostly inside Natural Earth's Lake Ontario outline already. It is also narrow: crossings are 1–2 miles, which the game allows as a new bridge in both modes (Tough allows 2 mi).
  - The real crossings are listed so that lines passing near them are cheaper: the Bay Bridge at Belleville, the Murray Canal bridge at Carrying Place, and the Glenora–Adolphustown ferry.
  - Only wider diagonal crossings are blocked in Tough.
  - The few "coast" (non-lake) patches around Adolphus Reach let Picton–Napanee (7 mi) through in both modes, as shore-following track. Highway 33 and the Glenora ferry make that the real route anyway.

### Bridges (16) and ferries (4 points on 2 routes)

Ferries (each point is named after the route plus the stretch):
- **Tobermory–South Baymouth**, the MS Chi-Cheemaun, May to October (well known). Two mid-channel points: 45.33, -81.75 and 45.39, -81.82 (see Water for why).
- **Glenora–Adolphustown**, the Glenora Ferry on Highway 33 (well known). Two points: 44.04, -77.05 and 44.05, -77.03.

Bridges. Positions are approximate (well-known crossings, not surveyed points). They are placed on the map's river where links cross it:

| Bridge | Point | Source; links that use it |
| --- | --- | --- |
| Little Current Swing Bridge (Highway 6) | 46.07, -81.87 | Well known; the point is on Highway 6's route (see above). Espanola–Little Current |
| Bay Bridge (Belleville) | 44.15, -77.39 | The Norris Whitney Bridge (well known). Sandbanks–Belleville |
| Murray Canal bridge (Carrying Place) | 44.06, -77.59 | Highway 33 to Trenton (well known locally). No tested link uses it; the Trenton bridge is nearer to those lines |
| Lorne Bridge (Brantford) | 43.14, -80.27 | The Grand in Brantford (well known locally). Brantford–Simcoe, Brantford–Woodstock, Port Dover–Brantford |
| Grand River bridge (Paris) | 43.19, -80.38 | A real crossing; the exact bridge isn't named. Paris–Brantford |
| Caledonia Bridge | 43.08, -79.94 | Argyle Street over the Grand (well known locally). Caledonia–Hamilton, Caledonia–Burlington |
| Grand River bridge (Cambridge) | 43.39, -80.34 | Hamilton–Kitchener |
| West Montrose Covered Bridge | 43.59, -80.48 | Ontario's last covered bridge (well known). Guelph–Goderich |
| Thames River bridge (London) | 42.97, -81.24 | London–Goderich, London–Woodstock, London–Stratford |
| Thames River bridge (Woodstock) | 43.14, -80.76 | London–Woodstock, Woodstock–Stratford |
| Thames River bridge (Chatham) | 42.40, -82.19 | Chatham's links to Windsor, Sarnia and Wallaceburg |
| Billings Bridge (Ottawa) | 45.39, -75.68 | The Rideau (well known). Ottawa's links to Carleton Place, Pembroke, Kanata and Arnprior |
| Rideau River bridge (Smiths Falls) | 44.90, -76.02 | Smiths Falls–Perth |
| Mississippi River bridge (Carleton Place) | 45.14, -76.14 | Pembroke–Carleton Place, Arnprior–Carleton Place |
| Trent River bridge (Trenton) | 44.10, -77.58 | Trenton–Belleville, and the Prince Edward lines to Trenton |
| Trent River bridge (Campbellford) | 44.31, -77.80 | Belleville–Lindsay, Bancroft–Campbellford, Campbellford–Lakefield |

**Not added** (a new river bridge costs only the small river price):
- The rest of the Grand, Thames and Rideau crossings.
- The French River on Sudbury–Huntsville. The Highway 69 bridge is about 10 miles from the crossing (from memory).
- **The Ottawa and St. Lawrence "crossings"**, such as Ottawa–Pembroke, Pembroke–Deep River, Brockville–Cornwall and Morrisburg's links. They are artifacts: the map's simplified river lines run along the Ontario shore. Their real bridges go to Quebec and the US and come with those packs. Morrisburg was moved 1 km north, off the river line.

### Biomes

- **forest:**
  - The north: Kenora & Rainy River, Thunder Bay, Cochrane & Timiskaming, Algoma, Sudbury & Manitoulin, and Nipissing.
  - Cottage country: Muskoka & Parry Sound, and Haliburton & Kawartha Lakes.
  - Renfrew (the Madawaska Highlands and Algonquin's east side).

  The brief suggested "wooded" for cottage country. But wooded shows trees only on hill cells, and Muskoka, Haliburton and Renfrew have none on the grid, so wooded would draw them as bare farmland. Manitoba made the same call. The cost: trees also cover Lindsay's farmland, at the south end of the Haliburton region.
- **wooded:** Hastings & Prince Edward, Frontenac & L&A, Peterborough, Lanark, Leeds & Grenville, Grey, Bruce and Simcoe. These are farm country with Shield or escarpment country in part: the Frontenac Arch and the southern edge of the Shield, the Niagara Escarpment and the Bruce Peninsula. Trees show only on their few hills.
- **dry:** none.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| 1. Toronto & the GTA | gta | TOR, MSS, MKM, OSH, OKV, HAM | 50 passengers, 5 counties, connect MSS–OSH (buy Peel; the line runs across Toronto) |
| 2. Niagara & the Southwest | southwest | SCA, KCH, LDN, WND, GPH, BRT, SRN, WDS, CHK, SIM, STT, STF, GDH | 150 passengers, connect TOR–LDN, 25 produce |
| 3. Eastern Ontario & Ottawa | east | OTT, KGN, BLE, PTB, CWL, PEM, BRV, LIN, RKL, CBG, CPL | 300 passengers, connect TOR–OTT, one high-speed train |
| 4. Georgian Bay & the North | north | BRI, SUD, TBY, SOO, NBY, TMS, HSV, OWS, KNR, PEG, ORV | 450 passengers, connect TOR–SUD, 20 containers (the Hamilton and Thunder Bay ports) |

Every level's regions touch an earlier level's:
- Niagara, Brant, Haldimand-Norfolk, Waterloo and Wellington touch Hamilton, Halton or Peel.
- Northumberland, Peterborough and Kawartha Lakes touch Durham.
- Simcoe and Dufferin touch York and Peel.

### How the map plays

Checked with `NR.segmentGeo` / `NR.blockedReason`, in both modes. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`. Two kinds of link were tested: every main station to its neighbours' main stations (Manitoba's included), and every town to its 3 nearest places.

- **Main stations:**
  - Of 93 links, 81 are open in both modes and 6 only in Gentle: Kingston–Carleton Place (Big Rideau Lake), Lindsay–North Bay (Lake of Bays), Lindsay–Barrie (Lake Simcoe), North Bay–Huntsville (3 mi of Lake Nipissing), Timmins–Kenora and Kenora–Thompson.
  - 6 are open in neither:
    - Windsor–Chatham: 20 mi of Lake St. Clair (see below).
    - Sarnia–Goderich: the straight line runs 53 mi out over Lake Huron.
    - Sudbury–Port Elgin: the ferry border.
    - Thunder Bay–Sault Ste. Marie and Thunder Bay–Timmins: across Lake Superior.
    - Kenora–Gimli: Lake Winnipeg.
- **Every main station reaches at least two neighbouring main stations in both modes, except two:**
  - **Windsor (0).** Chatham-Kent is its only Ontario neighbour, and the straight line runs along the inside of Lake St. Clair's south shore, 20 mi of lake. Leamington joins them in both modes (Windsor–Leamington 26 mi, Leamington–Chatham 28 mi). Detroit will add more with Michigan.
  - **Thunder Bay (1: Kenora).** Lake Superior lies between it and Sault Ste. Marie and Timmins. The region is reached in both modes through Thunder Bay–Kenora and through its towns: Thunder Bay–Nipigon–Geraldton–Marathon–Wawa–Agawa Canyon–Sault Ste. Marie, every link open in both modes.
- **Towns:**
  - Of 204 links (after the island update), 183 are open in both modes, 13 only in Gentle (Tobermory–Little Current is new among them), and 8 in neither.
  - The ones open in neither:
    - Tobermory–Port Elgin;
    - Parry Sound–Thornbury;
    - Little Current–Killarney (listed twice);
    - South Baymouth–Killarney;
    - Elliot Lake–Little Current;
    - Moosonee–Temiskaming Shores (Lake Abitibi);
    - Marathon–Nipigon (Lake Superior).
  - **Every town has an open link in both modes.**
- **Manitoba:** Kenora–Beausejour is open in both modes.
- **Kenora and Lake of the Woods, after the update:**
  - Kenora–Beausejour and Atikokan–Thunder Bay are open in both modes.
  - Kenora–Dryden is still Gentle only (5.5 mi of Eagle Lake).
  - Fort Frances (re-tested at 48.61 and 48.62, -93.39) is still blocked in Tough: 4 mi of Lake of the Woods near Kenora, and 21–25 mi of Rainy Lake towards Atikokan. Atikokan stays in its place.
- **Michigan, Minnesota, New York and Quebec** aren't in the game, so links into them were ignored.

### Data problems seen (for the main agent)

1. **The Great Lakes are lakes in `terrain.js`** (see Water). That is fine for play here, but it isn't what the brief assumed. Since the terrain update, Manitoulin and the other big islands are land.
2. **`places.json` still has "municipality" duplicates where a county shares a town's name.** Each sits near the county's middle and carries the town's population:
   - "Simcoe" (16,121) at 44.45, -79.69 in Simcoe County;
   - "Peterborough" (83,651) at 44.57, -78.26;
   - "Renfrew" (8,190) at 45.50, -77.09;
   - "Waterloo" (121,436) at 43.49, -80.50.

   The Perth fix should apply to these too. A "Haliburton" municipality point with no population still sits in Peterborough County (44.17, -78.51).
3. **`parks.json` county mix-ups:**
   - Sandbanks Provincial Park is tagged Northumberland (its point is off the map's Prince Edward shore).
   - Sioux Narrows Provincial Park, and the `offMap` place Sioux Narrows, are tagged Thunder Bay; they are in Kenora District.
4. **"Killarney" (town, 397)** is the municipality's middle (46.06, -80.98), 40 km from the village.
5. **No population for some places:** Atikokan, Nipigon and Kakabeka Falls have none in `places.json`. They are used as towns, where `pop` isn't needed.
6. **The ferry warning** (below) is the checker measuring distance to lake *edges*. A ferry point in the middle of a big lake is "far from water".

### Checks

- `node tools/check-pack.js ON` (after the island update): "ON: passed (41 stations, 68 towns, 0 city maps, 0 passes, 20 bridges), 0 errors, 1 warnings".
  - The warning: `bridge "Tobermory–South Baymouth ferry (mid-channel)" is more than 3 miles from any river, lake, bay or coast on the map`.
  - That point is in the middle of the Main Channel, inside the map's Lake Huron, over 3 miles from any shore. The check measures distance to lake edges, not whether a point is in a lake.
  - It has to stay mid-channel: points near either terminal let lines across Georgian Bay or down Lake Huron use the ferry (see Water).
- `node tools/test-pack.js ON`: "PASSED: 17 passed, 0 warnings, 0 failed", both before and after the island update. The test laid MKM–OSH and bought Haliburton & Kawartha Lakes (LIN).
- **Screenshots** (arcade light, classic dark, phone, levels):
  - The start shows Toronto on the lakeshore, Markham north of it and Oshawa east, with Peel, Simcoe, Haliburton & Kawartha Lakes, Peterborough and Northumberland for sale.
  - Trees cover the north and cottage country; the south is farmland.
  - The levels picture shows the Grand River, West Montrose, Cambridge, Trenton, Campbellford, Bay Bridge, Murray Canal and Glenora labels.
  - Manitoba shows as "Opens once you own all of Ontario".

## Main agent's review
- Belleville's station moved from 44.26, -77.37 (the middle of the City of Belleville in the raw place list, 10 km north of town) to downtown on the Bay of Quinte, 44.17, -77.38 (well known). Other stations sit within a few kilometres of their towns.


## City maps

Added by the city map agent (`metros`). Every stop is a real place at its real location (3 decimals); each map has 12 stops, one hub, no cable stops. Previews (water, hills) were run in preview mode only; every stop was checked against the preview's water rings (even-odd) and the land/water grid: none sits in water. Real terrain still to be built by the main agent.

### Toronto (TOR, size 5)

- Stops: Union Station (hub), University of Toronto, Greektown (Danforth), Yonge-Eglinton, North York Centre, Scarborough Town Centre, Pearson Airport, Mississauga City Centre, Etobicoke (Kipling), The Beaches, Billy Bishop Airport, Vaughan Metropolitan Centre.
- Source: Locations from general knowledge of the places (Union Station, University of Toronto St. George campus, Danforth/Greektown, Yonge-Eglinton, North York Centre, Scarborough Town Centre, Toronto Pearson, Mississauga City Centre, Kipling, The Beaches, Billy Bishop Toronto City Airport, Vaughan Metropolitan Centre); checked against the preview (CanVec water, StatCan land).
- Left out: Brampton, Markham, Pickering and Oakville (more than 25 miles or too thin a map); Billy Bishop is a few hundred metres from the shore on the island strip.

### Ottawa (OTT, size 4)

- Stops: Ottawa Station (hub), Parliament Hill, Lansdowne Park, Carleton University, Airport, Kanata, Orléans, Barrhaven, Aylmer, Gatineau, Westboro, Vanier.
- Source: Ottawa Station (VIA, Tremblay Road), Parliament Hill, Lansdowne Park, Carleton University, Ottawa Macdonald-Cartier Airport, Kanata, Orléans, Barrhaven, Westboro, Vanier, and Aylmer and Gatineau in Quebec; general knowledge of the places, checked against the preview.
- Left out: Hull and ByWard Market (under 1 mile from Parliament Hill, so folded into it). Parliament Hill was moved a few hundred metres south of the river bluff because the first point fell in a river cell.

- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
