# Yukon (YT) pack notes

Yukon is one census division (6001, 40,232 people in 2021), so it is one region, `yt-yukon`, with one main station. There was no merge review. Its neighbours in `map.js` are British Columbia's `bc-kitimat-stikine-north-coast-stikine` and `bc-northern-rockies-peace-river`. Alaska and the Northwest Territories come later, so links into them are ignored here.

**Sources.** Everything comes from `packs/YT/raw/` (Statistics Canada, 2021 Census; Natural Resources Canada's Geographical Names for places and parks):
- The station's `pop` (40) is the region's population in thousands from `counties.json`.
- Coordinates are `places.json` points rounded to 2 decimals. The one exception is Tombstone, which has no point in the raw files (see Towns).

Facts added by hand (passes, bridges, why a place is scenic, place types) are well known or have a source given below. The few from memory say so.

**Please read "For the main agent" first.** Apart from the start, the pack checks clean (0 warnings). A one-region start can't meet the checker's start rule or the pack test's, and only core code can fix that. The fix is two short changes, verified in a scratch copy.

## For the main agent

1. **The start is one region with one main station.** Two checks fail because of it:
   - **Checker:** `the starting counties' main stations are all "metro": they need at least two types of place`. The rule counts main stations only, and Yukon has one.
   - **Pack test:** `start stations: only 1 station(s): track needs two`. It also gives `lay track` (no pair to drag) and `one week` (no passengers). Towns appear only later: the first one comes 8 seconds into the game.
   - **No pack-only way out.** A second main station in the region is an error. A start county from another province is an error. Leaving out `start` removes Yukon from Settings → Start in, and then the test fails at once.
2. **Suggested fix (verified).** A one-region start also opens its nearest town of another type at once.
   - **`js/game.js`, in `newGame`,** right after `NR.START_COUNTIES.forEach((id) => ownCounty(s, id, true));`:
     ```js
     // A start of one region (Yukon) has one main station: its nearest town of another type opens
     // with it, so the first track has riders.
     if (s.stations.length === 1) {
       const first = city(s.stations[0].id);
       const town = NR.townPool(s).filter((t) => t.type !== first.type).sort((a, b) => miles(a, first) - miles(b, first))[0];
       if (town) addStation(s, town.id, true);
     }
     ```
   - **`tools/check-pack.js`:** replace the `startTypes` line with:
     ```js
     // (a start of one region also opens its nearest town of another type: js/game.js, newGame)
     const mains = p.stations.filter((x) => x.main && p.start.includes(x.county));
     const firstTown = mains.length === 1 ? p.towns.filter((t) => p.start.includes(t.county) && t.type !== mains[0].type).sort((a, b) => miles(a, mains[0]) - miles(b, mains[0]))[0] : null;
     const startTypes = new Set([...mains, ...(firstTown ? [firstTown] : [])].map((x) => x.type));
     ```
   - **Results in a scratch copy of the game** (nothing else changed):
     - `node tools/check-pack.js YT`: `YT: passed (1 stations, 11 towns, 0 city maps, 3 passes, 4 bridges), 0 errors, 0 warnings`.
     - `node tools/check-pack.js`: `All packs passed`.
     - `node tools/test-pack.js YT`: `PASSED: 16 passed, 1 warnings, 0 failed`. The start is WHI and CAR, the test laid Whitehorse–Carcross (46 mi), and 23 passengers arrived in a week.
     - The warning is structural: no Yukon county is left to buy.
   - **Other packs are unaffected.** Both changes act only when the start has exactly one main station.
3. **Levels with one area.** All three levels use the area `yukon`. After a level, the next-level message says "where 1 county can now be unlocked", but the county is already owned (the same as PE's item 4).
4. **The Stewart-Cassiar is not on the map.** Watson Lake to Prince Rupert or Terrace is blocked in both modes: 131 miles of the Cassiar and Coast mountains with no pass. BC has no town or valley route on Highway 37, and those points are BC's to add: more than 10 miles from Yukon, so this pack can't list them. Dease Lake and a Stikine crossing would be candidates. The Alaska Highway works (see "How the map plays").

## Start

`start: ["yt-yukon"]`: the whole territory, like Prince Edward Island.
- **Types.** Whitehorse is metro, and every town is mountain. In "A type of place", every town therefore has riders to and from Whitehorse from the moment it appears (towns count as places for riders).
- **Town to town.** Town-to-town trips have no riders, because the towns are all the same type. That matches the territory: everything runs through Whitehorse.
- **The first town.** With the fix above, the game opens Carcross (40 mi) together with Whitehorse.
- **Neighbours.** The start is all of Yukon, so British Columbia opens at once (the test confirms "Yukon and its neighbors are open").

## Main station

| Region | Station | Type, size | Why |
| --- | --- | --- | --- |
| Yukon (40k) | Whitehorse (WHI) | metro 1 | **The capital and only city.** Its municipality has 28,201 of the territory's 40,232 people (population centre 24,513), and the Alaska and Klondike highways meet there. **Type:** metro, like Prince George ("the north's only city of any size"), so the mountain towns have riders. **Size:** 40k is size 1 by the guide. **Placement:** the raw point (60.7242, -135.0561) is downtown by the Yukon River, 0.5 mi from the S.S. Klondike site (`parks.json`, 60.7294, -135.0472) |

- **Airport: none.** Erik Nielsen Whitehorse International carries roughly 0.3 million passengers a year (from memory).
  - That is below Charlottetown (about 0.4 million), which PE left out.
  - It is also below the smallest airports in the game: Greater Moncton (about 0.7 million) and Redmond.
  - If the bar becomes "each province's or territory's main airport", add `airport: "Erik Nielsen Whitehorse International"`.
- **Port: none.** Yukon has no seaport. Its sea route is through Skagway, Alaska.
- **ID.** WHI is unused in every pack.

## Towns (11: 7 towns and 4 scenic places)

All are size 1 and type mountain: boreal valleys between ranges, as BC (Fort Nelson, Mackenzie, Terrace) and Quebec type their northern towns. Every point is inside the region, at least 4 miles from every other place, and on the map's land, except Carcross (see below). The checker gives 0 warnings.

**Placement check** (the lesson about municipality centres). Each raw point agrees within about 1 km with its First Nation community point in `places.json`, so all sit on the real townsites:
- Watson Lake / Liard First Nation; Teslin / Teslin Tlingit Council; Carmacks / Little Salmon-Carmacks First Nation.
- Mayo / Nacho Nyak Dun; Haines Junction / Champagne and Aishihik First Nations; Ross River / Ross River Dena Council.
- Old Crow / Vuntut Gwitchin; Carcross / Carcross-Tagish First Nation.
- Dawson's point sits beside the Dawson Historical Complex and Courthouse points in `parks.json`.

| ID | Place | Point | Population (2021) | Why |
| --- | --- | --- | --- | --- |
| CAR | Carcross, **scenic** | 60.17, -134.71 | (locality) | The White Pass & Yukon Route's lakeside town on the narrows between Bennett and Nares lakes. It has the Carcross Desert and Emerald Lake on the Klondike Highway to Skagway (well known) |
| HJ | Kluane (Haines Junction), **scenic** | 60.75, -137.51 | 688 | The gateway town of Kluane National Park and Reserve, with the park's visitor centre, where the Haines Road leaves the Alaska Highway (well known). The park's own point (`parks.json`, 60.45, -137.83) is in the St. Elias icefields, 21 mi away. So the park sits at its gateway town, like BC's "Yoho (Field)" and "Wells Gray (Clearwater)" |
| TES | Teslin | 60.17, -132.72 | 239 | The Tlingit village on Teslin Lake at the Nisutlin Bay Bridge, on the Alaska Highway |
| WAT | Watson Lake | 60.06, -128.71 | 1,133 | The Alaska Highway's gateway to the Yukon (the Sign Post Forest), 4 mi north of the BC border on the map. The Robert Campbell Highway starts here (well known), and the Stewart-Cassiar joins the Alaska Highway near Upper Liard, west of town (from memory) |
| CMK | Carmacks | 62.09, -136.30 | 588 | On the Yukon River at one of its four bridges (Wikipedia: Carmacks, Yukon). The Robert Campbell Highway leaves the Klondike Highway here |
| FAR | Faro | 62.23, -133.36 | 440 | The old lead-zinc mining town in the Anvil Range (well known) |
| ROS | Ross River | 61.98, -132.45 | (locality) | The Kaska village where the Robert Campbell Highway meets the Canol Road (well known). It also keeps Faro reachable in Tough (see below) |
| MAY | Mayo | 63.59, -135.90 | 188 | The Stewart River village of the Keno Hill silver mines (well known) |
| DAW | Dawson City, **scenic** | 64.06, -139.43 | 1,577 (population centre 1,092) | The Klondike Gold Rush town, the Yukon's second town. It has the Dawson Historical Complex and Dredge No. 4 national historic sites (`parks.json`). Named "Dawson City" as it is known; its official name is "Dawson" |
| TOM | Tombstone Park, **scenic** | 64.50, -138.22 | – | Tombstone Territorial Park's granite peaks in the Ogilvie Mountains, placed at its interpretive centre on the Dempster Highway. Government of Yukon campground listing: 64.50002, -138.21767; the park page says km 71.5. Not in `parks.json`. TMB is taken by Arizona's Tombstone, so the ID is TOM |
| OLD | Old Crow | 67.57, -139.84 | (locality) | The Vuntut Gwitchin village on the Porcupine River, the Yukon's only community with no road (see below) |

**Old Crow (no road).**
- **In reality** it is reached only by air (well known); the Porcupine River and winter trails are its other links.
- **In the game** it is a town like any other. Like NL's Nain, a player reaches it by building a new line, which no road follows.
- **Its open link:** Tombstone–Old Crow (217 mi), open in both modes, with a new Porcupine River bridge. In Gentle it needs a 7 mi tunnel. In Tough it goes over North Fork Pass, with 10 mi of tunnels.
- **In Gentle** Dawson–Old Crow is also open (243 mi, tunnels up to 27 mi); in Tough it is blocked (27 mi of mountains).
- **No Eagle Plains.** Old Crow doesn't need the Dempster's halfway stop as a stepping stone, so Eagle Plains is left out.

**Carcross on the lake.**
- **The map's lake.** The terrain's unnamed lake (Natural Earth's Bennett–Nares–Tagish strip) is coarse, and it covers the narrows, which run through the townsite. So the Carcross point lies inside it, about 0.7 mi from dry land on the map.
- **Why it is left there.** The Carcross bridge sits on the same narrows, so every line from Carcross crosses the water on it at the real-bridge price. That is right, since the town straddles the narrows.
- **No problems.** No line from Carcross is blocked by the lake, and the checker gives no warning.

**Left out:**
- **Miles Canyon:** the Yukon River canyon is inside Whitehorse, about 4 mi south of downtown (from memory). That is at or under the checker's spacing, and it is a city sight rather than a destination for a train.
- **Beaver Creek, Burwash Landing and Destruction Bay** (the Alaska Highway north of Kluane):
  - Haines Junction–Burwash and Haines Junction–Destruction Bay cross 6–8 mi of Kluane Lake on the map, so they are blocked in Tough. The real road follows the lake's west shore.
  - Beaver Creek's links matter mostly once Alaska joins.
  - Kluane is already covered by Haines Junction.
- **Pelly Crossing and Stewart Crossing:** Klondike Highway villages. Carmacks–Dawson and Carmacks–Mayo are open without them, and twelve places is the brief's top end.
- **Keno City, Eagle Plains, Beaver Creek:** too small for a town, or not needed for reachability.
- **Vuntut and Ivvavik national parks, and Herschel Island:**
  - They have no road.
  - Herschel is `offMap`, and Ivvavik and Vuntut are on the Arctic coast and the Old Crow Flats.
  - Old Crow already represents the far north.

## Passes (3)

The checker found mountains near every one (0 warnings).

| Entry | Point | Source | What uses it |
| --- | --- | --- | --- |
| North Fork Pass | 64.58, -138.25 | Government of Yukon campground listing "North Fork Pass summit": 64.575394, -138.251623, Dempster km 80. A Yukon map-name index gives 64.56, -138.25. Wikipedia (Dempster Highway): the highway's highest point, 1,289 m (sources differ: 1,289–1,328 m) | Dawson–Tombstone, which was blocked in Tough with 16 mi of mountains; Tombstone–Old Crow (Tough); and lines from Mayo, Carmacks and Carcross to Tombstone. The Dempster climbs the North Klondike valley past the interpretive centre to the pass, so lines into Tombstone count as on the climb |
| Continental Divide (Alaska Highway) | 60.07, -130.94 | Government of Yukon campground listing "Continental Divide": 60.07351, -130.94199, Alaska Highway km 1120. The Yukon Geological Survey's highway map puts the crossing at km 1164 (another kilometre system, it seems), between the Rancheria (Mackenzie) and Swift (Yukon) rivers, at about 900 m | Teslin–Watson Lake, which was blocked in Tough with 19 mi of the Cassiar Mountains' north end; also Carcross–Watson Lake and Haines Junction–Watson Lake |
| Alaska Highway at Champagne | 60.79, -136.48 | Champagne, GNDB (`places.json`). **A valley route, not a pass**, like BC's Robson Valley and Skeena River valley | Whitehorse–Haines Junction, which was blocked in Tough with 28 mi of mountains; also Haines Junction–Watson Lake. See below |

**The Champagne valley route.** I sampled the map along the real highway (Whitehorse–Takhini–Champagne–Canyon–Haines Junction).
- **The real route** is flat or hills, except one 4-mile stretch near Whitehorse.
- **The straight line** runs about 4 mi south of Champagne and crosses the ridges south of the highway: 28 mi of mountains.
- **What the entry does.** It stands for the Takhini lowland the Alaska Highway uses. In the game the line shows "Alaska Highway at Champagne (slow climb)".

**Not added:**
- **White Pass and Chilkoot Pass:** they are on the BC–Alaska border, more than 10 miles from Yukon (the checker's limit), and their routes lead to Skagway, Alaska.
- **Chilkat Pass:** on the Haines Road in BC.
- **Windy Pass and the Dempster's later passes:** no line needs them.

## Bridges (4)

Positions are approximate, at the crossing in each place. The map's rivers in Yukon are Natural Earth's: the Yukon (from Hootalinqua down; not at Whitehorse or Lake Laberge), the Liard, White, Porcupine and a few others. The Teslin, Pelly, Stewart and Klondike rivers are not on the map.

| Bridge | Point | Source | What uses it (open links) |
| --- | --- | --- | --- |
| Yukon River bridge (Carmacks) | 62.10, -136.29 | Wikipedia (Carmacks, Yukon): "the site of one of the four bridges over the Yukon River"; the Klondike Highway crosses there | Carmacks–Mayo, whose crossing is 1.4 mi away (both modes) |
| Upper Liard Bridge | 60.05, -128.90 | The Alaska Highway's Liard River bridge at Upper Liard, about 7 km west of Watson Lake (Canadian Encyclopedia: Upper Liard; Structurae: "Upper Liard River Bridge"; Bell's Alaska guide). The point is the Upper Liard locality (`places.json` 60.0511, -128.9108) | Teslin–, Carcross– and Haines Junction–Watson Lake, which cross the Liard about 1 mi from it (both modes) |
| Nisutlin Bay Bridge (Teslin) | 60.16, -132.72 | The Alaska Highway's bridge over Nisutlin Bay at Teslin, the longest water span on the highway (well known) | **A marker:** no open link crosses Teslin Lake there |
| Carcross bridge | 60.17, -134.70 | The narrows between Bennett and Nares lakes at Carcross, crossed by the Klondike Highway bridge and the White Pass & Yukon Route's swing bridge (well known) | Every line from Carcross (see "Carcross on the lake") |

**Not added:**
- **Whitehorse's Robert Campbell Bridge and the Alaska Highway's Yukon River Bridge below Marsh Lake** (km 1393, Bell's Alaska guide): the map's Yukon River starts at Hootalinqua, so they would cross nothing.
- **The Teslin River bridge at Johnsons Crossing, and the Pelly, Stewart and Klondike bridges:** their rivers are not on the map, so they would trip the checker's "far from water" warning.
- **The George Black Ferry over the Yukon at Dawson:** no line crosses the river there until Alaska joins.

## How the map plays

Checked with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map.

**Inside Yukon.**
- **Counts.** Of the 49 pairs of Yukon places within 250 mi, 7 are blocked in Gentle and 24 in Tough. Every place has open links in both modes:

| Place | Open in Gentle | Open in Tough |
| --- | --- | --- |
| Whitehorse | CAR, HJ, TES, WAT, CMK, ROS, MAY | CAR, HJ, TES, WAT, CMK |
| Carcross | WHI, HJ, TES, WAT, CMK, FAR, ROS, MAY | WHI, TES, WAT, CMK, MAY |
| Kluane (Haines Junction) | WHI, CAR, TES, CMK, FAR, MAY, DAW | WHI, CMK, FAR |
| Teslin | WHI, CAR, HJ, WAT, CMK, FAR, ROS | WHI, CAR, WAT, CMK, ROS |
| Watson Lake | WHI, CAR, TES, FAR, (BC) Fort Nelson | WHI, CAR, TES, Fort Nelson |
| Carmacks | WHI, CAR, HJ, TES, FAR, ROS, MAY, DAW, TOM | WHI, CAR, HJ, TES, ROS, MAY, DAW, TOM |
| Faro | CAR, HJ, TES, WAT, CMK, ROS, MAY, DAW, TOM | HJ, ROS |
| Ross River | WHI, CAR, TES, CMK, FAR, MAY, TOM | TES, CMK, FAR, MAY |
| Mayo | WHI, CAR, HJ, CMK, FAR, ROS, DAW, TOM | CAR, CMK, ROS, DAW |
| Dawson City | HJ, CMK, FAR, MAY, TOM, OLD | CMK, MAY, TOM |
| Tombstone Park | CMK, FAR, ROS, MAY, DAW, OLD | CMK, DAW, OLD |
| Old Crow | DAW, TOM | TOM |

- **The real roads work in both modes:**
  - The Alaska Highway: Whitehorse–Teslin–Watson Lake, and Whitehorse–Haines Junction.
  - The Klondike Highway: Whitehorse–Carmacks–Dawson, and Carmacks–Mayo–Dawson.
  - The Dempster: Dawson–Tombstone.
  - The Robert Campbell Highway: Carmacks–Ross River–Faro, and Teslin–Ross River.
  - Whitehorse–Carcross.
- **Faro in Tough** connects only through Ross River (34 mi; or Haines Junction). Whitehorse–Faro is blocked in both modes (48 mi of mountains, which the map names the Cassiar Mountains), and Carmacks–Faro is blocked in Tough (16 mi). That is why Ross River is a town.
- **Blocked on purpose** (both modes): Whitehorse–Faro, Haines Junction–Ross River (61 mi of mountains in Gentle; a lake in Tough) and Watson Lake–Ross River (42 mi of mountains). The real roads go round through Carmacks or along the Robert Campbell Highway.

**To British Columbia.**
- **Whitehorse to BC's main stations directly is blocked in both modes.**
  - Fort St. John: 597 mi, with a 161-mile stretch of the Rockies.
  - Prince Rupert: 476 mi, with a 111-mile stretch of the Coast Mountains.
  - No real road goes straight, so this is right.
- **The Alaska Highway works as a chain, open in both modes:**
  - Whitehorse–Watson Lake (221 mi, or through Teslin over the Continental Divide).
  - Watson Lake–Fort Nelson (228 mi; tunnels of 20 mi in Gentle and 24 mi in Tough; four new Liard River bridges).
  - Fort Nelson–Fort St. John (190 mi).
  - Fort Nelson is a BC town, so it appears once `bc-northern-rockies-peace-river` is owned.
- **The Stewart-Cassiar does not.** Watson Lake to Prince Rupert, Terrace or Smithers is blocked in both modes (see "For the main agent", item 4).
- **Neighbours unchanged.** BC still checks clean. Every BC place lies south of 58.9°N, so lines between BC places pass nowhere near the Yukon passes and bridges.

## Levels (3)

The start already owns the only region. So the levels are checklists, and all three share the area `yukon` (the checker needs every station to have a level, and every level's areas to have a station).

| Level | Goals |
| --- | --- |
| Whitehorse & the Southern Lakes | 50 passengers; connect Whitehorse–Carcross |
| The Klondike | 140 passengers; connect Whitehorse–Dawson City |
| The Alaska Highway | 280 passengers; connect Whitehorse–Watson Lake; own 2 counties (one BC region) |

- **Targets** follow PE's and the first three levels of other packs.
- **Connect goals and towns.** Connect goals may name towns (the checker allows any place, and `connected` follows the network). Each one becomes possible once its town appears.
- **The counties goal** needs a BC region: BC opens at the start, because the start owns all of Yukon.
- **No produce or container goals:** Yukon has no farm places and no port.

## Biomes

`forest: ["yt-yukon"]`.
- **Why forest:** the Yukon's valleys are boreal spruce forest, so it has trees even on the flats. That matches BC's Stikine neighbour (`bc-kitimat-stikine-north-coast-stikine` is forest), Quebec's Nord-du-Québec and Labrador.
- **Not dry:** the southern Yukon lies in the rain shadow of the St. Elias Mountains, but it is forest, not sagebrush. The Carcross Desert is a small dune field.
- **One region, one look.** The far north is tundra, but a single region takes one look.

## Checks

- **`node tools/check-pack.js YT` (in the repository):** `YT: FAILED (1 stations, 11 towns, 0 city maps, 3 passes, 4 bridges), 1 errors, 0 warnings`. The one error is the start rule (item 1).
- **`node tools/check-pack.js` (in the repository):** every other pack passes, as before (`1 pack(s) failed`: YT).
- **`node tools/test-pack.js YT` (in the repository):** `FAILED: 13 passed, 1 warnings, 3 failed`: start stations, lay track and one week (item 1).
- **With the fix in a scratch copy:** the checker passes YT and all packs with 0 YT warnings, and the test gives `PASSED: 16 passed, 1 warnings, 0 failed`.
- **Screenshots** (arcade light, classic light, phone) look right:
  - Whitehorse sits by the southern border with Carcross just south of it.
  - Mayo is in the centre-north, and Faro and Ross River sit together in the east-centre.
  - The forest look covers the territory.
