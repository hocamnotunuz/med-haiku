# Plan: every US state and Canadian province, at California's standard

**Status:** plan only. Nothing here is built yet. Each step starts only after you say go.

**Goal:** all 50 US states (plus Washington, D.C.) and Canada's 10 provinces playable on one connected map. Each one gets the same depth California has today. Canada's 3 territories are a decision for you (see "Decisions" at the end).

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
- Most of the work is **data and careful choices**: which city is the main station, where the real passes are. That is the part subagents do, in parallel.
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

## 6. Step 3: the subagent waves

### Who does what

| Agent | Job | Edits |
| --- | --- | --- |
| **Me (main agent)** | Foundation code, merging packs in, tests, balance, publishing | core code |
| **Pack agent** (one per state or province) | All the hand-made choices for its pack (list below) | only its own pack folder, in its own copy of the project (a git worktree) |
| **City map agent** (one per 4–5 big cities) | Neighborhoods, hubs, cable-car stops, checks water and hills | only its city maps |
| **Reviewer agent** (fresh eyes, after each wave) | Checks a sample of each pack against the source data; flags anything suspicious | nothing; it reports |
| **Look-and-feel agent** (after each wave) | Screenshots of every new state in both looks, light and dark; flags drawing problems | nothing; it reports |

### What a pack agent does

1. Review the automatic county merges: fix odd pairs, like two counties on opposite sides of a mountain range, and note bridges that count as borders.
2. Pick main stations, place types and sizes. Each exception gets a reason.
3. Pick towns (about 1.5 per region), seaports, airports and scenic places (national parks and other famous sights).
4. List the real mountain passes, gaps and canyons, and the real bridges over big rivers and bays. Every one must pass the checker: a pass must sit on a real saddle in the elevation data, a bridge must cross real water.
5. Fix biome mistakes: places where the climate map gets the forest or desert wrong.
6. Write 3–4 levels with goals.
7. Run the checker and the pack test until both pass. Write a notes file listing every judgment call and its source.

### Waves (at most 8 agents at a time; each wave waits for your OK)

| Wave | Packs | Agents |
| --- | --- | --- |
| Pilot | WA, BC | 2 + 1 reviewer |
| 1. West | ID, MT, WY, UT, CO, NM, AK, HI | 8 |
| 2. Plains & Texas | ND, SD, NE, KS, OK, TX*, MN, IA | 8 |
| 3. Midwest & South Central | MO, AR, LA, WI, IL, MI, IN, OH | 8 |
| 4. South | KY, TN, MS, AL, GA, FL, SC, NC | 8 |
| 5. Mid-Atlantic | VA, WV, MD + DC, DE, PA, NJ, NY, CT | 8 |
| 6. New England | RI, MA, VT, NH, ME | 5 |
| 7. Canada West & Centre | AB, SK, MB, ON, QC | 5 |
| 8. Canada East (+ territories?) | NB, NS, PE, NL (+ YT, NT, NU) | 4–7 |
| 9. City maps | ~35 big metros, 4–5 per agent | 7–8 |

\* Texas has 254 counties, so it may get two agents (east and west).

After every wave there are 2 reviewer runs and 1 look-and-feel run.

**All together:** about 60 pack agents, 8 city map agents, about 20 reviewer runs and about 10 look-and-feel runs, so roughly 100 agent runs over 10 waves. This is **a lot of usage**. Each pack agent is roughly like one long work session. That's why it goes wave by wave and you approve each one.

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
- **Every wave** ends with all automatic tests passing before anything is published.

---

## 8. Step 4: after each wave (main agent)

1. Merge the wave's packs. Run the checker, every browser test and the test bots.
2. Check speed and memory at phone size with the whole map open.
3. Update the README. Save to GitHub. Update the online game.
4. Show you screenshots and anything the reviewers flagged. You approve the next wave.

---

## 9. Risks

| Risk | How it's handled |
| --- | --- |
| Wrong facts from agents | Checker + downloaded data + reviewer agents |
| Too slow or too big for phones | Packs load as needed; simpler drawing when zoomed out; speed test every wave |
| Online game size limits (16 MB per file, about 500 files and 256 MB per version) | Packs are split into small files |
| Agents overwriting each other | Each agent works in its own copy and edits only its own pack; core code only by the main agent |
| Old saved games breaking | Save format version bump; old California saves still load |
| Game too long or too hard at continent size | Play starts in one state; neighbors open one at a time; test bots measure it |
| Data licenses | Sources and credits listed in the README (Statistics Canada and the climate map need credit lines) |

---

## 10. Decisions needed from you before starting

1. **Canada's territories** (Yukon, Northwest Territories, Nunavut): include them as a few huge regions, or keep them under clouds? *Recommended: include later, after the provinces.*
2. **Alaska and Hawaii:** Alaska can join by land through Canada. Hawaii is islands only. *Recommended: Alaska opens from Yukon or British Columbia. Hawaii comes last, reached by a ferry or air link.*
3. **Money across the border:** *Recommended: the US and Canada each have their own national money. Lines crossing the border are paid half and half, and their fares go to both.*
4. **Starting place:** *Recommended: you choose any state or province; California stays the default.*
5. **City maps:** *Recommended: Tier 1 list above (about 36 new cities).*
6. **Order:** *Recommended: Step 0 (own repository), then foundation, then pilot, then waves in the order above.*

---

## Appendix: brief for a pack agent (template)

> You are building the **{STATE}** pack for National Railways to the standard in `PLAN-north-america.md` section 1.
> Work only in `packs/{CODE}/` in your own worktree. Do not edit any other file.
> Start from the script outputs in `packs/{CODE}/raw/` (borders, merges, populations, city candidates, terrain).
> Use facts from those files. When you must add something by hand (a pass, a bridge, a scenic place), write its source in `packs/{CODE}/NOTES.md`.
> Finish only when `node tools/check-pack.js {CODE}` and the pack test both pass.
> Report: what you chose, every judgment call and why, anything you were unsure of, and the checker output.
