# Plan: every US state and Canadian province, at California's standard

**Status:** approved. The decisions in section 10 are settled (the recommended choices). Step 0 has started. Each later step still starts only after you say go.

**Goal:** all 50 US states (plus Washington, D.C.) and Canada's 10 provinces playable on one connected map. Each one gets the same depth California has today. Canada's 3 territories are a decision for you (see "Decisions" at the end).

---

## Progress

| Step | Status |
| --- | --- |
| 0. Own repository | **Postponed** (your choice). Everything is ready to move with its full history whenever you want. |
| 1.1 Packs | **Done for hand-made content:** `packs/<code>/pack.js` for CA, NV, AZ, OR (stations, towns, levels, start, city maps, passes, bridges, bays, biomes). Generated map and terrain data still load all at once; splitting them comes with the speed work (1.6). |
| 1.2 Map projection | **Done:** Lambert conformal conic, centered on the open states. Fixed outlines are worked out once per projection (faster), clouds are kept as a picture, and the Classic relief is laid in 64 pieces that follow the curve. |
| 1.3 California-only shortcuts | **Done, but one item moved to 1.6:** bays, forests and deserts, cable cars, messages and screen text are general now. The rule for where the sea ends at the Mexican and Washington borders needs real outlines of the land outside the game; a general rule changed 544 routes, so it waits for the terrain rebuild in 1.6. |
| 1.4 Choose where to start | **Done:** Settings → Start in (California, Nevada, Arizona, Oregon), from each pack's starting counties. Neighbors open once you own all of a state. Levels mode only where a pack has levels. Best scores per home state. |
| 1.5 Two countries' money | **Done.** Each pack says its `country` (the US when left out). Each country has its own national money: **Freedom Bucks** (US, shown as FB400k) and **Maple Coins** (Canadian federal money, MC400k), always worth the same. Every amount shows the currency of whoever pays or gets it. **Every border** (state or US–Canada) is shared by the states and provinces by land: track by how much of it lies on each one's land, a line's trains by how much of the line does, and each fare by the miles the trip rode on each one's land (counted train by train). National money no longer pays for border track or trains: it gets taxes, rewards and grants, and covers its own states. Money never moves between countries: a country that runs short is covered only by its own states or provinces. Contract rewards go to the country where the job is; grants and level bonuses to the home country. The bottom bar shows the home country's money ("National", or "Federal" when starting in Canada); the Budgets panel shows both. Saved games from before still load. Tested with a pretend Canadian Nevada; Canada's real provinces come with the pilot (British Columbia). |
| 1.6 Speed and memory | **Done.** Map and terrain data per state (`packs/<code>/map.js`, `terrain.js`, relief pictures), and real outlines of every state, Mexico and Canada (`packs/index.js`), now used to tell land from sea outside the game and for the cartoon map and clouds. Also done: packs load only when needed (the home state at the start, neighbors of open states in the background; states not loaded yet are drawn and fogged from their rough outline). Speed test with all 50 states (3,142 counties) **done**: loading all of them takes about a quarter to a third of a second and about 30 MB of memory. A still frame takes 4–20 ms. Redrawing everything after the camera stops takes 70–160 ms in the Classic look and 135–280 ms in the Arcade look (measured in a browser without a graphics card, so real phones and computers should do better). Fixes it needed: locked counties drawn as one shape, relief pictures only drawn when on screen, the land layer kept as a picture, tiny line points skipped, shallow water only along real coasts, gentle hills left out when zoomed far out, clouds remembering where they go, clouds reaching the far north when zoomed out (the map is curved), and closed-state names that no longer pile up on each other. |
| 1.7 Pack checker | **Done (first version):** `tools/check-pack.js`, explained in `PACKS.md`. |
| 1.8 Pack test | **Done:** `node tools/test-pack.js <code>` plays a short game in that state in a real browser (start, lay track by dragging, buy a county, one week, save and load, city maps, Levels) and takes screenshots in both looks, light and dark, and on a phone. Every current pack passes. On its first run it found a real problem: Oregon started with three metros, so in the default style nobody rode the first track. Oregon now starts with Portland, Oregon City and St. Helens, and the checker makes sure every start has at least two types of place. It also showed clouds from closed states spilling far over open land on phones: clouds at an open state's edge are now smaller. |
| 1.9 Pilot (WA, then BC) | **Washington done.** Census-based tools first: `build-map.js` reads county populations from the Census (`pop: "census"`) and joins island counties (`join`); `make-raw.js` writes each pack's raw facts (county populations, every city and town). One pack agent built Washington: 28 regions (merged by real metro areas, the user's choice after the agent's review), 43 towns with 9 scenic places, 12 passes, 20 bridges (the Columbia crossings to Oregon too), Levels from Puget Sound to the Inland Northwest; Tacoma became Coast so Seattle–Tacoma has riders. It found a real bug (levels locked other states' counties forever), now fixed. Checker and pack test pass; every pass, bridge and scenic place was spot-checked. **British Columbia: done** (22 regions, 35 towns, 26 passes and valley routes, 10 bridges, 8 ferry routes acting as bridges over 8 strait "bays", 4 levels; checker and pack test pass). **The rest of Canada is prepared:** the other nine provinces' maps come from Statistics Canada's census divisions (its map service answers scripts), with raw facts made. Prepared before BC's pack: The map tool has a Canadian path: BC's 29 census divisions (27 regional districts, Northern Rockies and the Stikine Region) from DataBC's open map service, trimmed to BC's own 1:250,000 coastline (Natural Earth's world coastline put six coastal cities in the sea), with 2021 populations from Statistics Canada's tables (its boundary files can't be downloaded by a script). The US and Canadian maps come from different sources, so their border is found by distance: the 49th parallel is now a real border between Washington and BC (not a coast), and regions on both sides are neighbors. Canada in `packs/index.js` is now its 13 provinces and territories, with neighbors across the border. `make-raw.js` writes BC's raw facts: region populations, 2,303 official places from the Canadian Geographical Names Database (181 with populations, from municipalities or population centres) and 1,169 parks. BC's terrain is built (relief drawn coarser: the province is huge). BC is in the pack list with an empty, Canadian pack, so every game now has two countries ("US national money"). US maps are unchanged except Washington's border. **Your decisions for the BC agent:** real ferry routes (Tsawwassen–Swartz Bay, Horseshoe Bay–Departure Bay, Prince Rupert–Haida Gwaii...) work like bridges, so track reaches Vancouver Island and Haida Gwaii only there, at a high price (the straits are marked as water); and the agent first reviews the automatic region merges (which made the whole far north one region) and proposes a list for you to choose, as with Washington. |

---

## 1. What "California's standard" means

Every state or province is finished only when it has all of these. California's numbers show the target.

| # | Part | California today |
| --- | --- | --- |
| 1 | Real county borders. Counties under 50,000 people merged with up to 2 small neighbors | 58 counties → 49 regions |
| 2 | One main station per region, at its biggest city (exceptions written down) | 49 main stations |
| 3 | Each station has a place type (Metro, Coast, Mountains, Farmland, Desert), a size from 1 to 5, and its population | all set |
| 4 | Towns that appear as the game goes on | 72 towns |
| 5 | Seaports (containers), airports (flights), scenic places (tourists) | set per station |
| 6 | Levels mode: 3–4 levels with goals | 4 levels |
| 7 | Real geography: mountains, lakes, rivers, coasts, bays | from elevation data |
| 8 | Real mountain passes and real bridges (they change track prices and train speeds) | 114 passes, 21 bridges (4 states) |
| 9 | Gentle and Tough difficulty both play fairly | checked by test bots |
| 10 | Cartoon look: forests, deserts, peaks and snow in the right places | hand-picked lists today |
| 11 | Classic look: shaded relief | relief picture |
| 12 | City maps for big cities: neighborhoods, trams, metro, cable cars, real water and hills | LA, SF, SD, Sacramento, San Jose |
| 13 | State budget, taxes, head of transportation, clouds until it opens | built into the rules |
| 14 | Automatic tests pass; test-bot games last a fair time | 15 test runs |
| 15 | Documented in the README | yes |

---

## 2. How big the job is

| | Today (4 states) | All US + Canada (estimate) |
| --- | --- | --- |
| States / provinces | 4 | 51 + 10 (+3 territories) |
| Counties | 126 | ~3,140 US counties + 293 Canadian census divisions |
| Regions after merging | 94 | roughly 1,700–2,100 |
| Main stations | 94 | roughly 1,700–2,100 |
| Towns | 151 | roughly 3,000–4,000 |
| City maps | 5 | ~35–40 recommended (big metros only) |
| Map data size (without pictures) | ~350 KB | roughly 15–30 MB, so it must load a piece at a time |

Some numbers are estimates and get exact once the scripts in step 4 run.

**What this means:**
- The game can't load all of North America at once on a phone. Each state or province becomes a **pack** (its own set of data files) that loads only when it's on screen or open.
- Most of the work is **data and careful choices**: which city is the main station, where the real passes are. That is the part subagents do, **one state at a time**.
- Changes to the game's **rules and drawing code** stay with one agent (me), done before the subagents start, so nobody steps on anybody else's work.

---

## 3. Step 0: before anything else

**Move the game into its own GitHub repository.** At this size it needs its own project: its own history, its own issues, room for many agents' branches. I can walk you through it.

---

## 4. Step 1: foundation (one agent at a time, no parallel work)

These change the game's core, so they're done carefully in order, with all tests passing after each one. The four current states must keep working throughout.

1. **Packs.** Split today's single map, terrain and cities files into one pack per state: `packs/CA/`, `packs/NV/`, … Each pack holds:
   - its borders and regions
   - its terrain grid, lakes, rivers, passes and bridges
   - its stations, towns and levels
   - its cartoon details (biomes)
   - its city maps

   The game loads packs as needed.
2. **Map projection.** Today the map squeezes east–west distances by a fixed amount that's right for California only (`COS` in `js/draw.js`). That breaks for Florida, and badly for northern Canada. Switch to a proper map projection for all of North America (a "Lambert conformal conic", the kind used for continent maps). Distances in miles are already worked out correctly at any latitude.
3. **Remove California-only shortcuts.** Several things are written specially for California today:
   - the San Francisco Bay outline and the "foreign land" rule in `js/geography.js`
   - the forest and desert county lists in `js/cartoon.js`
   - the starting counties, the levels and the line color names

   All of these move into the packs as data.
4. **Choose where to start.** The player picks a home state or province (California stays the default). Owning all of a state opens its **neighbors**, worked out from the real borders.
5. **Two countries' money**, if you choose it (see Decisions): US national money and Canadian federal money, with fair rules for lines that cross the border.
6. **Speed and memory.** These must hold even with every pack open:
   - draw only what's on screen, and simpler borders when zoomed out
   - one cartoon picture cache per pack
   - only open states run the rules
   - saved games keep working
   - a frame-time and memory check at phone size
7. **Pack checker** (`tools/check-pack.js`). An automatic inspector that every pack must pass. See section 7.
8. **Pack test** (one browser test for any pack). It opens the state, lays track, runs a week of game time, and takes screenshots in both looks, light and dark.
9. **Pilot:** Washington state and British Columbia, done end to end by one subagent each, with me watching closely. This tests the whole pipeline and the subagent instructions. Both get fixed before scaling up.

---

## 5. Step 2: data that scripts make (no hand work, so no made-up facts)

Scripts download and process official data. Agents start from this data instead of typing facts from memory.

| Data | Source (license) |
| --- | --- |
| US county borders | U.S. Census Bureau (public domain), through the `us-atlas` package already used |
| Canadian census division borders | Statistics Canada, 2021 Census boundary files (Open Government Licence – Canada) |
| Populations for merging and station sizes | Census 2020 county totals; Statistics Canada 2021 census divisions |
| City and town candidates with populations | Census Gazetteer places; Statistics Canada population centres |
| Elevation (mountains, passes check) | AWS Terrain Tiles (already used) |
| Lakes and rivers | Natural Earth (public domain, already used) |
| Coasts and water for city maps | Census TIGER (US); Statistics Canada / CanVec hydrography (Canada) |
| Forests, grassland, desert, tundra for the cartoon map | a world climate map (Köppen–Geiger, CC BY 4.0) instead of hand-made county lists |

Known special cases the scripts must handle:
- Virginia's independent cities
- Alaska's boroughs and census areas
- Louisiana's parishes
- Connecticut (its counties were replaced by planning regions in 2022)
- Quebec's many small regional counties
- islands linked by bridges or ferries

---

## 6. Step 3: the subagents, one state at a time

**Rule: only one subagent works at any moment, and it does exactly one state or province.** When it finishes, I check its work, merge it, and only then does the next one start. That keeps usage low and steady, and you can stop after any state.

### Who does what

| Agent | Job | Edits |
| --- | --- | --- |
| **Me (main agent)** | Foundation code, checking and merging each pack, tests, balance, publishing; I also look over each state's screenshots | core code |
| **Pack agent** (one state or province per run) | All the hand-made choices for that one pack (list below) | only that pack's folder |
| **City map agent** (one state's big cities per run, later) | Neighborhoods, hubs, cable-car stops, checks water and hills | only that state's city maps |
| **Reviewer agent** (every 5th state, or when the checker flags trouble) | Checks a sample of the latest packs against the source data; flags anything suspicious. Can run on a smaller, cheaper model | nothing; it reports |

### What a pack agent does

1. Review the automatic county merges: fix odd pairs, like two counties on opposite sides of a mountain range, and note bridges that count as borders.
2. Pick main stations, place types and sizes. Each exception gets a reason.
3. Pick towns (about 1.5 per region), seaports, airports and scenic places (national parks and other famous sights).
4. List the real mountain passes, gaps and canyons, and the real bridges over big rivers and bays. Every one must pass the checker: a pass must sit on a real saddle in the elevation data, a bridge must cross real water.
5. Fix biome mistakes: places where the climate map gets the forest or desert wrong.
6. Write 3–4 levels with goals.
7. Run the checker and the pack test until both pass. Write a notes file listing every judgment call and its source.

### The order (one after another)

States are done in this order, neighbor by neighbor, so each new one joins the map next to finished ones. After each **group**, I update the online game and you say whether to continue. You can also stop or change the order after any single state.

| Group | States and provinces, in order |
| --- | --- |
| Pilot | WA, then BC (I watch these two closely and fix the method) |
| 1. West | ID, MT, WY, UT, CO, NM, AK, HI |
| 2. Plains & Texas | ND, SD, NE, KS, OK, TX\*, MN, IA |
| 3. Midwest & South Central | MO, AR, LA, WI, IL, MI, IN, OH |
| 4. South | KY, TN, MS, AL, GA, FL, SC, NC |
| 5. Mid-Atlantic | VA, WV, MD (with DC), DE, PA, NJ, NY, CT |
| 6. New England | RI, MA, VT, NH, ME |
| 7. Canada West & Centre | AB, SK, MB, ON, QC |
| 8. Canada East (+ territories?) | NB, NS, PE, NL (+ YT, NT, NU) |
| 9. City maps | one state's big cities per run, after the states are done |

\* Texas has 254 counties. If one run can't finish it, a second run continues the same state; it is still one state at a time.

### How much usage

- **About 58 pack runs:** one per state or province, plus the 3 territories if you include them.
- **About 25 city-map runs:** one per state or province that has big cities.
- **About 12 reviewer runs:** every 5th state, plus any needed when the checker flags something.
- **No separate look-and-feel agents:** I check the screenshots the pack test takes.

That's roughly 95 runs, about the same total as running them side by side. But **only one runs at a time**, each run is small, and you can pause whenever you like, so usage stays low and spread out instead of coming in big bursts. It takes longer in calendar time.

**Other ways it saves usage:**
- Each agent gets a short brief and data that the scripts already prepared, so it doesn't spend effort re-reading the whole game.
- The automatic checker does most of the checking, so fewer reviewer runs are needed.
- Reviews can use a smaller, cheaper model.
- Lessons from each state go into the brief for the next one, so later runs need fewer fixes.

### Suggested city maps (Tier 1: US metros of about 2 million people or more, and Canada's six biggest)

- **US:** New York, Chicago, Dallas–Fort Worth, Houston, Washington DC, Philadelphia, Miami, Atlanta, Boston, Phoenix, Seattle, Detroit, Minneapolis–St. Paul, Tampa, Denver, Baltimore, St. Louis, Orlando, Charlotte, San Antonio, Portland, Austin, Pittsburgh, Las Vegas, Cincinnati, Kansas City, Columbus, Indianapolis, Cleveland, Nashville
- **Canada:** Toronto, Montreal, Vancouver, Calgary, Edmonton, Ottawa
- **Already done:** LA, San Francisco, San Diego, Sacramento, San Jose

---

## 7. How we keep the agents honest

Agents can sound sure and still be wrong (a pass in the wrong place, a misspelled town). So nothing is trusted on an agent's word:

- **The checker tests every pack automatically:**
  - every station sits inside its own region
  - stations aren't too close together
  - IDs are unique and names match the source data
  - populations match the downloaded tables
  - passes sit on real saddles; bridges cross real water
  - every region has a main station
  - levels point at real stations
- **Facts come from downloaded data**, not memory, wherever possible. The notes file lists the source of each hand-made choice.
- **Reviewer agents** with no stake in the work check samples against sources.
- **Test bots** play the new states (the economy bots we already have) to check game length and difficulty.
- **Every state** must pass all automatic tests before it is merged, and every group before anything is published.

---

## 8. Step 4: after each state, and after each group (main agent)

**After each state:**
1. Run the checker and the pack test. Look over the screenshots.
2. Merge the pack and save to GitHub.
3. Add anything learned to the pack agent brief.

**After each group:**
1. Run every browser test and the test bots.
2. Check speed and memory at phone size with the whole map open.
3. Update the README and the online game.
4. Show you screenshots and anything the reviewers flagged. You decide whether to continue.

---

## 9. Risks

| Risk | How it's handled |
| --- | --- |
| Wrong facts from agents | Checker + downloaded data + reviewer agents |
| Too slow or too big for phones | Packs load as needed; simpler drawing when zoomed out; speed test after every group |
| Online game size limits (16 MB per file, about 500 files and 256 MB per version) | Packs are split into small files |
| Agents overwriting each other | Only one agent works at a time, and it edits only its own pack; core code only by the main agent |
| Old saved games breaking | Save format version bump; old California saves still load |
| Game too long or too hard at continent size | Play starts in one state; neighbors open one at a time; test bots measure it |
| Data licenses | Sources and credits listed in the README (Statistics Canada and the climate map need credit lines) |

---

## 10. Decisions (settled)

1. **Canada's territories** (Yukon, Northwest Territories, Nunavut): included **later**, after the provinces, as a few huge regions.
2. **Alaska and Hawaii:** Alaska opens by land from Yukon or British Columbia. Hawaii comes last, reached by a ferry or air link.
3. **Money across the border:** the US and Canada each have their own national money, in their own currency: **Freedom Bucks** in the US (shown as FB400k) and **Maple Coins** in Canada (shown as MC400k). The two are pegged 1 to 1, so nothing ever needs converting: 100 Freedom Bucks are worth 100 Maple Coins. Every amount shows the currency of whoever pays or receives it (a US state's budget in Freedom Bucks, a Canadian province's in Maple Coins). Across every border (between two states, or the US and Canada) the states and provinces share by land: track by how much of it lies on each one's land, trains by how much of their line does, and fares by the miles each trip rode on each one's land.
4. **Starting place:** you choose any state or province; California stays the default.
5. **City maps:** the Tier 1 list in section 6 (36 new cities).
6. **Order:** Step 0 (own repository), then foundation, then the pilot, then one state at a time in the order in section 6.

---

## 11. Finishing all of Canada and the US (the owner's request: complete everything, then publish once)

The online game stays at version 38 (California to British Columbia) until **every** province, territory and state is done, checked and tested. Then it is published once. Work is still saved to GitHub as it goes (that is only the safety copy).

### Order
1. **Canada:** Alberta (in progress) → Saskatchewan → Manitoba → Ontario → Quebec → New Brunswick → Nova Scotia → Prince Edward Island → Newfoundland and Labrador → Yukon → Northwest Territories → Nunavut (the territories as a few huge regions, as decided).
2. **US West:** Idaho, Montana, Wyoming, Utah, Colorado, New Mexico, Alaska (opens from Yukon and British Columbia).
3. **Plains & Texas:** North Dakota, South Dakota, Nebraska, Kansas, Oklahoma, Texas, Minnesota, Iowa.
4. **Midwest & South Central:** Missouri, Arkansas, Louisiana, Wisconsin, Illinois, Michigan, Indiana, Ohio.
5. **South:** Kentucky, Tennessee, Mississippi, Alabama, Georgia, Florida, South Carolina, North Carolina.
6. **Mid-Atlantic:** Virginia, West Virginia, Maryland (with DC), Delaware, Pennsylvania, New Jersey, New York, Connecticut.
7. **New England:** Rhode Island, Massachusetts, Vermont, New Hampshire, Maine.
8. **Hawaii** last (islands, reached by a sea link).

### For each state or province
1. **Me:** add it to the map tool, register it (empty pack), build the maps of everything in the game, check that its regions add up to its land, make its raw facts (populations, places, parks in Canada) and its terrain (rivers, ranges).
2. **Its pack agent, phase 1:** reviews which small regions to merge and recommends a list. I apply the recommendation (the owner's choice for BC; from Alberta on I follow the agent's recommendation and list them in the report).
3. **Its pack agent, phase 2:** main stations, towns, scenic places, start, passes, bridges, ferries and water, biomes, levels, notes; the checker and the pack test must pass.
4. **Me:** spot-check its facts and screenshots, fix any tool bug it finds, save to GitHub.
5. **After each group:** every game test and every pack test, a speed check with everything loaded, and a progress note to the owner (no publishing).

### Tool work still to do (as each comes up)
- **Links across water between states and provinces** that count as borders for unlocking: Confederation Bridge (PEI–New Brunswick), the Newfoundland ferries, the Mackinac Bridge, the Detroit, St. Clair, Niagara and St. Lawrence crossings if the map doesn't already join them, the Hawaiian islands, and Hawaii's sea link.
- **Special counties:** Virginia's independent cities, Louisiana's parishes, Alaska's boroughs and census areas (names and labels), Connecticut (2020 populations for its old counties), DC with Maryland.
- **Terrain:** the big US rivers (Mississippi, Missouri, Ohio, Tennessee, Arkansas, Red, Rio Grande, Platte...) and eastern ranges (Appalachians, Ozarks...).
- **The finished map:** a speed test with all of North America, the start menu with every home, opening order across the border.

### Size
About 57 more packs, two agent phases each. One at a time that is roughly 35–45 hours of agent work; the tokens add up to about 25 million.

## Appendix: brief for a pack agent (template)

> You are building the **{STATE}** pack for National Railways to the standard in `PLAN-north-america.md` section 1.
> Work only in `packs/{CODE}/`. Do not edit any other file. You are the only agent working right now; do just this one state.
> Start from the script outputs in `packs/{CODE}/raw/` (borders, merges, populations, city candidates, terrain).
> Use facts from those files. When you must add something by hand (a pass, a bridge, a scenic place), write its source in `packs/{CODE}/NOTES.md`.
> Finish only when `node tools/check-pack.js {CODE}` and the pack test both pass.
> Report: what you chose, every judgment call and why, anything you were unsure of, and the checker output.

**Before the agent starts (main agent):**
1. Add the state to `STATES` in `tools/build-map.js` with `pop: "census"` (or `merge` lists) and `join` for island counties no bridge reaches; run `build-map.js` with every state, then `build-terrain.js`, then `node tools/make-raw.js <cache> {CODE}`.
2. Add `{CODE}` to `NR.PACK_LIST` and a `<script>` tag for `packs/{CODE}/pack.js` in `index.html`, with an empty starter `pack.js`, so the pack test can run.
3. Check the raw data: islands, rivers and ranges the terrain tool doesn't name yet (add them to `RIVERS` and `RANGE_NAMES` in `build-terrain.js`).

**Learned from the Washington pilot (add to every brief):**
- Never run the map, terrain or raw tools: they rewrite other states. Propose merge changes in the report instead (Washington's automatic merges put Pasco with Pullman; the user chose real metro areas).
- `start` needs two types of place; also make the **two biggest neighboring cities** different types where it's honest (Tacoma became Coast so Seattle–Tacoma carries riders from the start).
- Ids must be unique across all packs, and should leave obvious codes free for big cities still to come (reserved so far: VAN, VIC for British Columbia).
- Bridges across a border river (the Columbia between Washington and Oregon) belong to whichever pack is built later, which then lists them all.
- Puget Sound-style inland seas are already water on the map; check with a few points before adding `bays`.
- Websites like Wikipedia may refuse automated requests: coordinates for passes and bridges can come from memory, but the checker's terrain tests must pass and the source goes in NOTES.md for a reviewer to spot-check.
- Levels in a non-home state are ignored (they count only in a game that starts there), so every state may have its own levels.
