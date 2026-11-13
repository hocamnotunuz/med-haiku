# Hawaii (HI) pack notes

## Region merges (phase 1)

**Outcome:** the main agent's merges (5 counties -> 4 regions, `STATES.HI` in `tools/build-map.js`) are sound; none is clearly wrong. The pack is built on them as they are.

Populations: `packs/HI/raw/counties.json` and `raw/places.json` (U.S. Census Bureau, 2020 estimates base). Neighbours are the `neighbors` links in counties.json (the sea links); islands and roads are from general knowledge.

| Region | Counties | Pop | Check |
| --- | --- | --- | --- |
| Oahu (`hi-honolulu`) | Honolulu 1,016,507 | 1,017k | Alone, far over 50,000 (all of Oahu, plus the Northwestern Hawaiian Islands, which have no people). Right. |
| Maui (`hi-kalawao-maui`) | Kalawao 80 + Maui 164,756 | 165k | Kalawao (Kalaupapa, 82 people, the leprosy settlement on Molokai's north shore, now a national historical park) is on Molokai, and Maui County holds the rest of Molokai (Kaunakakai) with Maui, Lanai and Kahoolawe: the right partner, and the only one (Kalawao has no border with another county). Right. The name "Maui" suits it. |
| Big Island (`hi-hawaii`) | Hawaii 200,635 | 201k | Alone, over 50,000. Right. |
| Kauai (`hi-kauai`) | Kauai 73,296 | 73k | Alone, over 50,000 (with Niihau, privately owned and 84 people). Right. |

Neighbours (all sea links, `bridges` in the tool): Kauai-Oahu, Oahu-Maui, Maui-Big Island (inter-island barges and the Maui-Lanai ferry) and Oahu-Los Angeles (Matson). The real shipping pattern matches: Young Brothers' barges run Honolulu to Nawiliwili (Kauai), Kahului (Maui), Kaunakakai (Molokai) and Hilo and Kawaihae (Big Island). No link is missing (Oahu and Maui are the hubs); Big Island-Oahu is not a link (a line from Honolulu to Hilo goes through Maui, as the barges do, and the pack blocks the direct one). No place is in the wrong region (each place in places.json sits in its own county's region). Niihau, Kahoolawe and the Northwestern Hawaiian Islands are tiny or empty and do not matter.

## Files

`packs/HI/pack.js` (4 stations, 15 towns, 2 passes, 5 ferry and barge points, 1 bay, 2 levels, biomes) and this file. Every Hawaiian place is a census-designated place, so `places.json` has a population only for Urban Honolulu (350,963); every other size is from general knowledge (said in the comments). A station's `pop` is its region's population in thousands from counties.json. The map has no lakes, rivers or ranges (Hawaii's streams are too small for it), so no river bridges are needed.

## Stations

Start: **Oahu, Maui and Kauai** (HNL metro, OGG coast, LIH farm). Both Maui and Kauai have a sea link to Oahu (the checker accepts sea-linked regions as touching: no warning). Oahu is the biggest region by far; the pack test lays the first track HNL-OGG (108 mi by its own count; 94 mi crow, the nearest pair of different types), metro to coast, and one passenger arrived in the week.

| Station | Type | Size | Why |
| --- | --- | --- | --- |
| Honolulu (HNL, Oahu 1,017k) | metro | 4 | Urban Honolulu (350,963), the capital, a metro of 1.0 million (all of Oahu), like Rochester, Buffalo and Hartford (size 4; nothing else here is above 2). Port: Honolulu Harbor, Hawaii's main commercial harbour (the hub of the barge network and the container port that serves the state; Matson's ships to Los Angeles). Airport: Daniel K. Inouye International (the state's main airport). The Census point (21.32, -157.85) is up the Nuuanu valley; the station is downtown at Aloha Tower and the harbour (21.31, -157.86), 1.5 miles from it. Waikiki (3 miles east) is left out as a town (under 4 miles from the station). |
| Kahului (OGG, Maui 165k) | coast | 2 | Maui's commercial centre (26,337) with Kahului Harbor (Maui's deep-water harbour, the barges and cruise ships) and Kahului Airport (OGG, the state's second airport). Wailuku (the county seat, 17,700) is 3 miles away: too close for a town. Size 2 (pop 165k), as the brief says. Airport yes; port left out (Honolulu is the only big port by the other packs' bar; Kahului Harbor is small by cargo). |
| Lihue (LIH, Kauai 73k) | farm | 1 | The county seat (6,455) and the biggest centre of Kauai with Lihue Airport (LIH, the island's only big airport; about 3 million passengers before 2020, above the Bangor/Portland bar) and Nawiliwili Harbor (barges only; no port flag). Size 1 (73k, like Maine's 67k to 87k regions); the brief allows 1 or 2. Farm: the island's sugar and coffee fields (Grove Farm, Kauai Coffee) so that the start has three types. |
| Hilo (ITO, Big Island 201k) | mountain | 2 | The county seat and biggest town (about 45,700), at Hilo Bay under Mauna Kea and Mauna Loa and the gate to Hawaii Volcanoes National Park. My call over Kailua-Kona (about 22,000, the airport and resort side), which is a town (size 2, with Kona International Airport). Hilo's own airport (ITO) is smaller; the airport flag goes to Kona by the brief. Typed mountain for the volcanoes (the island has no Metro or Farm town of Hilo's size, and Hilo is the wet side of a volcano; Kona is coast). Size 2 (201k). |

IDs: the natural ones were free (HNL, OGG, LIH) except HIL (Oregon's); Hilo is ITO (its airport code). All ids are unique across packs (the checker confirms).

## Towns (15, 8 of them scenic)

Oahu: Kailua (the windward town, 38,635; Kailua Beach), Kapolei (the west side's "second city", Ko Olina), Pearl Harbor (scenic: the USS Arizona Memorial, 21.37, -157.95), Haleiwa (scenic: the North Shore's surf town). Maui: Lahaina (the whaling capital and west Maui resort; **the 2023 fire destroyed much of it**, but it is still the well-known town and is being rebuilt), Kihei (21,423, the beach town), Haleakala (scenic: Haleakala National Park, 10,023 ft), Kaunakakai (Molokai's main town, about 3,400, the harbour), Lanai City (3,102, the only town of Lanai). Kauai: Kapaa (10,699, the east side), Hanalei (scenic: Hanalei Bay, the north shore), Waimea Canyon (scenic: "the Grand Canyon of the Pacific"). Big Island: Kailua-Kona (size 2, airport: Kona International Airport at Keahole, 7 miles north of town), Volcano (scenic: Hawaii Volcanoes National Park and Kilauea), Waimea (the Parker Ranch town, also Kamuela), Mauna Kea (scenic: the 13,803-foot summit and the observatories).

Left out on purpose: Waikiki and Diamond Head (under 4 miles from Honolulu), Hana (the Road to Hana) and Kalaupapa (the Molokai peninsula; both would sit inside the outline, but Maui already has five towns and two scenic places, so they are left out to keep the island from crowding), Wailuku (3 miles from Kahului), Poipu and the Na Pali Coast (Kauai already has Waimea Canyon and Hanalei, within 10 miles of them), Akaka Falls (12 miles from Hilo, Volcano and Mauna Kea are the Big Island's scenic places). All places sit inside their region (checked; none needed a nudge).

## Passes (2)

- **Nuuanu Pali** (the Pali Highway and its tunnels over the Koolau, Honolulu to Kailua; 21.37, -157.79). The checker finds mountains there. The Likelike Highway and H-3 tunnels are the same range: one pass covers them. On the 3.5-mile grid the Koolau is mostly hills between Honolulu and Kailua, so Honolulu-Kailua is a plain link; the pass sits at the real saddle for the lines that cross the range (Kailua-Kapolei, Kailua-Pearl Harbor).
- **Saddle Road** (the Daniel K. Inouye Highway between Mauna Kea and Mauna Loa, Hilo to Kona; 19.70, -155.47; the summit of the road is about 6,600 ft; position approximate). The checker finds mountains there; Kona-Mauna Kea and Waimea-Mauna Kea use it. Hilo-Kona is a plain link on the map's grid (no mountain cells on the line).

Skipped: the Haleakala Highway (a road up to the summit, not a crossing: Kahului-Hilo goes over the north flank as a 10-mile tunnel, within Tough's 15 miles) and Kolekole Pass (the Waianae range, near Schofield: no line here needs it).

## Water: five ferry and barge points and one bay

The map's channels are sea, which does not block track by itself, so a **bay** called "the channels between the islands" covers the water between Kauai, Oahu, Maui (with Molokai and Lanai) and the Big Island (land inside the polygon is still land). Without a real crossing, track over it is "too wide" in Gentle (over 8 miles) and Tough (over 2). **Five points** open the real routes (Young Brothers' barges and the Lahaina-Manele ferry, general knowledge: Young Brothers' Hawaii barge services (Honolulu, Nawiliwili, Kahului, Kaunakakai, Hilo, Kawaihae) and Expeditions' Lahaina to Manele Bay ferry):

1. **Kauai Channel** (21.93, -159.26): off Nawiliwili, on the Honolulu-Lihue line (79 miles of water).
2. **Kaiwi Channel** (21.24, -157.58): between Oahu and Molokai (Honolulu to Kaunakakai and Kahului).
3. **Kalohi Channel** (21.01, -156.85): between Molokai, Lanai and Maui (Kaunakakai to Kahului).
4. **Auau Channel** (20.87, -156.76): Lahaina to Manele Bay (Lanai), 10 miles.
5. **Alenuihaha Channel** (20.37, -155.86): Kahului to Hilo (and Kawaihae), 51 miles.

The checker wants each point within 10 miles of the land, so the Kauai and Kaiwi points are placed near the shore of the nearest island (not mid-channel), still on the lines.

**Verified with `NR.blockedReason`** (Gentle and Tough give the same result for all of these): the main chain **Lihue - Honolulu - Kahului - Hilo - Kailua-Kona** is open (HNL-LIH, HNL-OGG, OGG-ITO and ITO-KONA each open; Hilo-Waimea too); Honolulu-Hilo, Kahului-Lihue and Lihue-Lanai City are blocked (the barges go through Honolulu and Kahului, and Lanai is reached by the Auau ferry from Lahaina or Kahului only: Lanai City-Lahaina and Lanai City-Kahului open, Lanai-Molokai blocked). Molokai is open to Honolulu, Kahului, Lahaina and Kihei (the barge route). Every station and every town has at least two open links, most 4 to 13, all within its island except Lihue's (Honolulu). Known side effect: a point opens the whole water run it is near (a bridge "at any width"), so a few long lines of towns on different islands are open too (Kailua-Kona to Kailua or Hanalei, over 150 miles; Lihue to Kapolei or Pearl Harbor; Kihei to Kapolei): they cost a lot (real-bridge price per mile of sea) and are not in the way of the main routes. Not tuned further.

**Honolulu to Los Angeles:** the bay stops short of the open Pacific (its northeast edge is cut just off Oahu's east coast, so the straight line from Honolulu runs out of land into open sea with no bay): `NR.blockedReason("HNL", "LA")` is **null in both Gentle and Tough**. The line is 2,560 miles ("coast" water, outside any bay), so it is absurdly expensive, but not blocked (the regions' link is the shipping route, as in build-map). Earlier drafts with the bay over the whole sea blocked it (a 214-mile "bay"); the notch fixes that.

## Biomes

Forest: `hi-kauai` (the Garden Isle's rainforest to the coast, Waimea Canyon and Hanalei). Wooded: `hi-honolulu` (the Koolau and Waianae ranges), `hi-kalawao-maui` (Haleakala and the West Maui Mountains) and `hi-hawaii` (Mauna Kea, Mauna Loa, the Hamakua coast). No `dry` region (the leeward lava and the Kona side are dry, but each region is mostly green in the cartoon look; no region is a desert).

## Levels (2)

Two levels for four regions (the brief allows 2 or 3): **Oahu, Maui & Kauai** (`west`: HNL, OGG, LIH; the start; 50 passengers, 10 containers from the port, connect Honolulu and Kahului) and **The Big Island** (`big`: ITO; 140 passengers, connect Kahului and Hilo, run a high-speed train). A third level would have one region only, so there is none.

## Checks

- `node tools/check-pack.js HI`: passed, 0 errors, 0 warnings. `node tools/check-pack.js`: All packs passed.
- `node tools/test-pack.js HI`: 16 passed, 1 warning, **1 failed: "picture classic light: the map looks blank (7 colors)"** (the threshold is 8). The look is not blank: the screenshot shows the islands, the railway and California's outline; the Hawaii and California frame is mostly sea (the first camera must show the stations, and the neighbours in the frame include California across the Pacific), so few colours. The arcade, dark and phone pictures are fine (the islands look right: Honolulu on Oahu's south coast, Kahului on the isthmus of Maui, Lihue on Kauai's east coast, Hilo on the Big Island's east coast). The warning is the OGG-LIH link blocked (as designed: Kauai links only to Oahu). This failure looks like a test limitation for an island state; the main agent decides.

## Main agent's review

- **Coordinates:** every station, town, scenic place and pass checked against its real location; all within about a mile. The barge and ferry points sit on their routes where the lines leave the harbours, so the game opens the crossings there (as with Maine's CAT ferry).
- **The pack test's pictures** framed the whole open map: once all of Hawaii is yours, California opens across the sea, and the frame was mostly ocean (the test's "blank map" check failed at 7 colors). `tools/test-pack.js` now frames the home state's main stations for its pictures and samples the map on a finer grid (small islands in a wide sea were missed). In a game, the map still zooms out to Hawaii and California together when California opens (geography: 2,400 miles of Pacific); the camera can be zoomed back in.
- **Checks:** `check-pack` HI passed (4 stations, 16 towns, 2 passes, 5 bridges), 0 errors, 0 warnings; all packs passed; `test-pack` HI passed (17 passed, 1 expected warning: Kahului–Lihue blocked across the channels).
