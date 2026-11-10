# National Railways

A passenger-rail strategy game set in California and its neighbors. Lay track between real cities, run trains, and get passengers where they are going before any station overflows. Own all of California and Nevada, Arizona and Oregon open next.

## The map

Four states share one map: **California, Nevada, Arizona and Oregon**, divided into their real counties (U.S. Census Bureau borders). Counties with fewer than 50,000 people are merged with small neighbors into regions such as **Del Norte-Siskiyou-Trinity County**:

| State | Counties | Regions | Towns |
| --- | --- | --- | --- |
| California | 58 | 49 | 72 |
| Nevada | 17 | 9 | 19 |
| Arizona | 15 | 12 | 31 |
| Oregon | 36 | 24 | 29 |

Every region has one main station at its biggest city, with a few exceptions to keep stations apart or names clear: Yuba County uses Wheatland (its larger towns sit across the river from Yuba City), Clackamas County uses Oregon City (Lake Oswego is right next to Portland), and Pinal County uses Casa Grande (the city of Maricopa shares its name with Maricopa County). Regions outside California are named with their state, like "Clark County, Nevada".

### Two looks: Arcade and Classic

**Settings → Look** on the start screen switches between two ways of drawing the game. The choice changes the picture only, never the rules, and is remembered in your browser.

- **Arcade** (the default): a cartoon map. Hills and mountains are flat layers with little peaks on top: green where the real mountains are forested (Sierra Nevada, Cascades, Coast Ranges), brown where they are dry, with snowcaps on the highest. Forests have pine trees; the deserts are sandy, with cacti in the hot south (Mojave, Sonoran), sagebrush in the cooler north (Great Basin, Oregon's high desert) and red-rock mesas. The sea has waves and every coast a band of shallow water; rivers and lakes are outlined. Lines, stations and trains have dark outlines, and the buttons are chunky. Counties you don't own yet sit under a light fog. States that aren't open yet, and the land outside the four states (Mexico, Utah, Idaho, Washington, New Mexico), are hidden under drifting cartoon clouds; when a state opens, its clouds puff up and fade away.
- **Classic**: a calm atlas-style map with shaded relief.

Both looks have a light and a dark version that follow your device.

### Real geography

The map shows real mountains (cartoon peaks in the Arcade look, shaded relief in Classic), lakes, rivers, mountain passes (⌃) and real bridges (=). Zoom in to see the names. They change what track costs and how fast trains go:

- **Hills** cost a little more and slow trains a little.
- **Mountains** must be crossed **over a real pass** (Donner Pass, Cajon Pass, Tejon Pass, Siskiyou Summit, Santiam Pass and about 120 more) or **through a tunnel**. Over a pass, track costs more and trains slow down on the climb. A tunnel costs much more but trains keep their speed. Some ranges are too wide to tunnel: the game tells you which passes are nearest. Later, **Dig tunnels under the passes** in a line's panel speeds its trains up.
- **Bays and lakes** need a bridge. Real bridges (Golden Gate, Bay Bridge, San Mateo, Richmond-San Rafael, Carquinez, the Colorado River crossings and others) are cheaper and can be any length; a new bridge costs more and can only span narrow water. Track can't run over open water, but where a straight line would cut across the sea between two coastal towns, it follows the shore instead (longer, so pricier and slower).
- **Rivers** (Sacramento, Colorado, Columbia, Willamette and others) need a small bridge, cheaper where a real one stands.
- While you drag a line, the label next to the price says what the last stretch crosses. A line's panel lists everything it crosses.

**Difficulty: Gentle** (the default) or **Tough**, chosen under **Settings** on the start screen. It sets how fast passengers increase as well as how hard geography is.

| | Gentle | Tough |
| --- | --- | --- |
| New towns appear every | 25–40 seconds | 14–22 seconds |
| Passengers: twice as many as at the start after | 10 minutes (cities 16⅔) | 4 minutes (cities 6⅔) |
| Hills: price / train speed | ×1.25 / ×0.9 | ×1.5 / ×0.8 |
| Over a pass: price / train speed | ×2 / ×0.6 | ×3 / ×0.4 |
| Tunnel: price / longest | ×4 / 40 mi | ×7 / 15 mi |
| Pass counts if the track passes within | 12 mi (plus 20 mi of approach) | 9 mi (plus 15 mi of approach) |
| Along the shore: price / train speed | ×1.6 / ×0.7 | ×2.2 / ×0.55 |
| Real bridge / new bridge, price per mile | ×3 / ×6 | ×4 / ×10 |
| Widest new bridge | 8 mi | 2 mi |
| River bridge: new / real | FB10k / FB3k | FB25k / FB5k |

All these numbers live in `js/geography.js` (`NR.GEO`).

### Opening more states

- **Choose your home state** under **Settings → Start in**: California (the default, around Los Angeles), Nevada (Las Vegas), Arizona (Phoenix) or Oregon (Portland). Levels mode is only in California for now. Best scores are kept per home state.
- The other states are hidden under clouds (shaded darker in the Classic look) until they open.
- A state's **neighbors open once you own every county in it** (in Levels mode, also when you finish the last level). Each newly opened state starts with a FB200k budget, and the map zooms out to show it. The clouds say which state to finish to open them.
- Their counties are then unlocked like the home state's: next to one you own, by paying or by reaching the free-unlock goal.

### Unlocking counties

- Every game starts with **Los Angeles, Ventura and Riverside** counties.
- Counties next to yours have a dashed orange outline and a tag like `FB85k · 0/33`. Tap one to see its details.
- **Pay** to unlock it now (bigger counties cost more), or unlock it **for free** by delivering the goal number of passengers to your stations next to it: 45 passengers for the smallest counties, up to 240 for the biggest (45 plus 1 for every 17,000 people).
- When a county is unlocked, its main station opens right away. Its towns then appear over time.
- In **Levels** mode, finishing a level opens the next part of the state, so its counties can be unlocked.
- Bridges count as borders: Golden Gate (San Francisco–Marin), Richmond–San Rafael (Contra Costa–Marin) and San Mateo (Alameda–San Mateo).

Pinch or scroll to zoom, drag empty map to move around, or use the + / − buttons. A new game starts zoomed in on your first stations; the frame button switches between your network and the whole map. On phones the legend folds behind a **Legend** button.

## How to play

- **Build a line:** drag from one city to another. Keep dragging to add more stops. Before your first line, an orange arrow shows where to drag.
- **Extend a line:** drag from its last station (or from the round + tab at its end) to a new city. To start a new line at a station that ends another line, drag from the other city to it instead.
- **Manage a line:** tap its color at the bottom of the screen to buy trains, send them to the depot, upgrade to high-speed track, or delete the line. Trains you can use on that line are listed first; the others wait under **More trains**, with the reason they can't run yet.
- **Out of colors?** Dragging from any station that ends a line then extends that line (the shortest one, if several end there), even at a busy hub like Los Angeles.
- **More line colors:** you start with 3. When all are in use, a **+** chip appears at the bottom: tap it twice to buy another color (FB100k, then FB150k, FB200k and so on, up to 7 lines) from national money (the richest state covers what it can't). The weekly upgrade choice also always includes **New line** while every color is in use.
- **Money:** track costs FB1k per mile (high-speed track FB2.5k per mile). Passengers pay a fare when they arrive: more for long trips and fast trains. Every train costs a little to run each week. Who pays is explained under **Budgets** below.
- **Every week** a new Regular train arrives and you choose one upgrade.
- **Rush hour:** now and then a big city gets very busy for a few seconds. Commuter trains help.
- **New stations** (towns that appear, and main stations of counties you unlock) get about 25 seconds before their first passengers, so you have time to connect them. Rush hours and flights leave them alone during that time.
- **Lose** when a station stays overcrowded too long (red ring fills up). The game-over screen says why: never connected, no train stopping there, damaged track, or not enough trains. **Show on map** takes you to the station; **Back to results** returns to the card.
- **Stations you can't see:** an arrow at the edge of the screen points to any station off-screen that is new, not yet on a line, or crowded (red). Tap the arrow to go there. When a new station appears outside the view, the map zooms out to show all your stations (not while you are drawing a line).
- **Counties:** a county's panel also says what connecting its main station would cost, and from where.
- **Contracts:** tap a "New contract" message to open the list.

### Modes

| Mode | Goal |
| --- | --- |
| Endless | Play until a station overflows. |
| Timed | Four in-game weeks. Deliver as many passengers as you can. |
| Levels | Finish each level's 3-goal checklist to open the next part of the state. If a level fails, retry it or continue in Endless. |

### Train types

| Train | Price | Seats | Speed | Stops at | Notes |
| --- | --- | --- | --- | --- | --- |
| Regular | FB60k | 6 | 1× | every city | Cheap and reliable. |
| Commuter | FB80k | 12 | 0.85× | every city | Quick boarding. Lines up to 180 mi. Bonus fares on short trips. |
| Regional | FB120k | 10 | 1.25× | size 2 and up | Skips the smallest towns. |
| High-speed | FB250k | 8 | 2× | size 3 and up | Needs high-speed track. From week 2. |
| Bullet | FB450k | 10 | 3× | Metro cities | Needs high-speed track. From week 4. |
| Freight | FB100k | 10 crates | 0.8× | every city | Produce only. |
| Dock train | FB120k | 16 containers | 0.7× | every city | Containers only. Needs a port on its line. |
| Truck bypass | FB140k | 6 trucks | 1.1× | every city | Trucks only. From week 2. |
| Night train | FB160k | 8 | 1.3× | size 2 and up | Runs only at night (21:00–05:00). Extra bonus on trips of 200+ miles. From week 2. |
| Scenic train | FB130k | 10 | 0.7× | every city | Tourists only; they pay double on it. |
| Airport express | FB150k | 10 | 1.6× | every city | Quick boarding. Needs an airport on its line. |
| Work train | FB90k | – | 0.9× | every city | Carries nothing. Repairs damaged track on its line. |

### Day, night and events

- **Day and night:** each day runs from 00:00 to 24:00 (10 seconds). The map darkens at night and fewer people travel.
- **Tourists (★)** leave Metro cities for scenic places, three times as often at weekends. California: Yosemite Valley, South Lake Tahoe, Big Sur, Death Valley, Mount Shasta, Mammoth Lakes, Napa, Three Rivers. Nevada: Boulder City (Hoover Dam), Mount Charleston, Virginia City, Great Basin National Park. Arizona: Grand Canyon Village, Sedona, Page, Monument Valley, Chinle (Canyon de Chelly), Tombstone, Mount Lemmon. Oregon: Multnomah Falls, Mount Hood, Silver Falls, Crater Lake, Cannon Beach, Joseph (Wallowa Lake).
- **Flights** land at airports (✈) with 5 travelers at a time: LAX, SFO (San Mateo), San Diego, San José, Oakland, Sacramento, Ontario, Fresno, Palm Springs, Las Vegas, Reno, Phoenix, Tucson, Portland, Eugene, Medford and Redmond.
- **Earthquakes and wildfires** (from week 10) damage track (red ✕): an earthquake one stretch, a wildfire up to two around a mountain county. Trains turn back at the damage. A Work train on that line repairs it in a few seconds (a free one arrives the week they begin, and a Work train waiting in your depot goes to a damaged line by itself); otherwise it mends after 3 days.

### City maps: trams, metro and cable cars

Los Angeles, San Francisco, San Diego, Sacramento and San Jose have their own city maps (an **M** badge on the station). Once you own the county, tap the station and choose **Open city map**. **← California** takes you back.

| Line | Track | Vehicle | Riders | Notes |
| --- | --- | --- | --- | --- |
| Tram | FB3k/mi | FB40k | 8 | Street-running, cheap. |
| Metro | FB10k/mi | FB120k | 16 | Fast; riders pay ×1.3. |
| Cable car | FB8k/mi | FB60k | 6 | San Francisco only, between cable car stops (Transit Center, Union Square, Nob Hill, Fisherman's Wharf), up to 3.5 miles; riders pay ×2. |

- Riders appear in the neighborhoods: most cross town, some (orange tags) head for the main station to catch a train and then join the trains across California.
- **Hills and water:** each city map shows its real hills and water (San Francisco's hills, the Hollywood Hills, San Diego Bay and Mission Bay, the Sacramento and American rivers). Trams slow down on hills (Castro to Haight-Ashbury is a 6% climb). Metro tunnels under hills cost more but don't slow down. Cable cars climb at full speed but can't cross water. Water needs a bridge (or a tube for the metro): cheaper at a real bridge like the Coronado Bridge or Tower Bridge, and impossible if too wide. Lines can run along a shore.
- Half of the train passengers arriving at the city's main station ride the metro home.
- A city keeps running once opened. A neighborhood that stays overcrowded ends the game, like a station, but **only the map you're looking at can be lost**: while you're on a city map, the state map and the other cities keep running (trains, passengers, money, weeks) with their stations kept at most half full, and while you're on the state map, every city is kept that way. When you come back to a map, it's live again.
- Up to 5 lines per city. Sell vehicles or delete lines to get half the price back.

#### City budget and head of transportation

- **Each city has its own budget.** Opening a city map moves **FB200k** from its state's budget into it. City fares go into it, less a 10% tax to the state; city track, vehicles and weekly running costs are paid from it. When it runs short, the state budget pays the rest (for building as well as running costs). Tap **City budget** on the city map to see it.
- **Head of transportation:** hire one from the city budget. Fee: the higher of 80% of the city budget or 50% of the city's track and vehicle value.
  1. **Settling in (3 weeks):** the head does nothing yet; you keep the city running (it can still be lost).
  2. **Managed (100 weeks):** the city runs safely (stops never overflow, kept at most half full), its lines are frozen, and management keeps 90% of its profit; 10% goes to the state budget each week. The city doesn't get busier while managed.
  3. **Retired:** the city is yours again (live, can grow, can be lost). You can hire a new head.

### Budgets: national money and each state

Tap the money at the bottom (**National** and **California**, or **4 states** once more are open) to open the **Budgets** panel.

| Money | What comes in | What it pays for |
| --- | --- | --- |
| Each state's budget (California starts with FB400k) | Fares and cargo fees for trips inside the state, its share of fares for trips that cross a border (by the miles they rode on its land), all less 10% tax, and 10% tax on its cities' fares | Track between two of its own stations, its share of track across a border (by how much of it is on its land), trains on its lines (shared the same way on a line across a border), its counties, its head of transportation, FB200k for each city map it opens, and its cities when they run short |
| National money (starts at FB0) | 10% tax on every state's fares and cargo fees, contract rewards, federal grants, level bonuses, 10% of a managed state's profit | Any state that runs short, and new line colors |

- **Across a border, the states share by land.** Track runs straight between two stations: if 80 of its 120 miles are on California's land and 40 on Nevada's, California pays 2/3 and Nevada 1/3. Water and states that aren't open don't count. A line's trains (their price and running costs) are shared by how many of the line's miles are on each state's land. Each passenger's fare is split by the miles they actually rode on each state's land, train by train: a trip from Los Angeles through Las Vegas to Phoenix pays California, Nevada and Arizona. The line panel shows each state's share.
- A state spends its own budget first; if that isn't enough, national money pays the rest. If a state budget is empty at the end of a week, national money pays its running costs.
- If national money ends a week below zero, the richest state budget covers it (then the next richest).
- **Taxes:** a city pays 10% of its fares to its state, and a state pays 10% of its fares and cargo fees to national money, as they are earned. (A state doesn't pay tax again on the tax it gets from its cities.) While a head of transportation runs a city or state, the tax is paid first and management splits what's left. The Budgets panel and the City budget panel show last week's taxes.
- **Money can't be moved between budgets by hand.** It only moves by these rules.

**Currency.** Money in the US is counted in **Freedom Bucks** (shown as FB400k). Canada, when its provinces join the game, has its own **federal money** in **Maple Coins** (shown as MC400k). The two are always worth the same (1 to 1), so nothing ever needs converting. Every amount is shown in the currency of whoever pays or gets it: a US state's budget in Freedom Bucks, a Canadian province's in Maple Coins.

- Each country's national money is separate and never pays for the other country. If a country's national money ends a week below zero, only its own states (or provinces) cover it.
- The US–Canada border works like a state border: a US state and a Canadian province share track, trains and fares by land, each in its own currency (Washington's share in Freedom Bucks, British Columbia's in Maple Coins).
- Contract rewards go to the country where the job is (half each if it spans the border). Federal grants and level bonuses go to your home country (where you started). The bottom bar shows your home country's national money; the Budgets panel shows both once a province is open.
- The line panel says who pays for each line, and the county panel says which budget pays to unlock it.

#### A state's head of transportation

Works just like a city's, using the same numbers:

- **Fee:** the higher of 80% of the state budget or 50% of the state's own track and trains. Tap **Hire** twice to confirm.
- **Settling in (3 weeks):** nothing changes yet; you keep the state running.
- **Managed (100 weeks):** the state's stations never overflow (they are kept at most half full), earthquakes and wildfires leave its track alone, and it doesn't get busier. But its track and trains are frozen, no new counties or towns open there, and management keeps 90% of the state's profit (10% goes to national money). Lines that cross a border stay yours.
- **Retired:** the state is yours again, and you can hire a new head.

### Cargo

Cargo shares the map with passengers. It waits in a **yard** to the left of each station (up to 12 loads; extra loads are turned away) and never ends your game, but it pays well.

| Cargo | Made at | Delivered to | Moved by |
| --- | --- | --- | --- |
| Produce (green crates) | Farmland towns | Metro cities | Freight |
| Containers (rust) | Ports, when a ship docks (8 at a time) | Desert and Farmland warehouses | Dock train |
| Trucks (gray) | Desert and Mountain towns, from week 2 | Metro cities | Truck bypass |

Ports (anchor symbol): Port of Hueneme (Oxnard), Port of Long Beach, Port of San Diego, Port of Oakland, Humboldt Bay (Eureka), Port of Portland and Port of Coos Bay.

All the numbers live in `js/game.js` (`TUNING` and `TRAIN_TYPES`).

### Goals and contracts

Tap the **clipboard** on the bottom bar.

- **Contracts** (every mode): optional jobs offered every 30–50 seconds, up to 3 at a time, each with a deadline and a reward (money, sometimes a free train). Kinds: passengers between two cities, moving produce or containers, taking trucks off the road, connecting two cities by rail, owning more counties, and keeping every station uncrowded for 3 days. Dismiss one to make room.
- **Level checklists** (Levels mode):

| Level | Goals |
| --- | --- |
| 1 Southern California | 50 passengers in total · own 5 counties · move 10 containers |
| 2 Central Valley | 140 passengers in total · move 25 crates of produce · connect Bakersfield and Fresno |
| 3 Bay Area & Sierra Nevada | 280 passengers in total · connect Los Angeles and San Francisco · run a High-speed train |
| 4 Northern California | 450 passengers in total · own 30 counties · take 30 trucks off the road |

### Passenger styles

- **A type of place:** passengers want any Metro, Coast, Mountains, Farmland or Desert city, shown by shape.
- **A specific city:** passengers want one city, shown by its code (for example FRE = Fresno).

## Files

| File | What it does |
| --- | --- |
| `index.html` | The page: screens, buttons and the map area. |
| `style.css` | Colors, fonts and layout (light and dark themes, Arcade and Classic looks). |
| `packs/index.js` | Every state (and Mexico and Canada) as a rough outline, with its neighbors: for the clouds and the land outside the game. Generated: do not edit by hand. |
| `packs/<code>/map.js` | One per state in the game: its county regions, land, coast and borders. Generated: do not edit by hand. |
| `packs/<code>/terrain.js` | One per state: real geography (the mountains grid, lakes, rivers, named ranges, and its city maps' hills and water). Generated: do not edit by hand. |
| `packs/<code>/relief.png`, `city-<key>.png` | Shaded relief (mountain shading) for the state and each of its city maps (Classic look). Generated. |
| `js/geography.js` | The geography rules: passes, tunnels, bridges, prices and train speeds, Gentle and Tough. |
| `js/packs.js` | Lists the state packs, loads each state's map and terrain when needed (the home state at the start, the neighbors of open states in the background), and collects them into the game's lists. |
| `packs/<code>/pack.js` | One per state: its main stations, towns, levels, starting counties, city maps, mountain passes, bridges, bays and biomes (hand-made). See `PACKS.md`. |
| `js/cities.js` | The kinds of place and line names shared by every state. |
| `tools/build-map.js` | Rebuilds `packs/index.js` and each state's `map.js` from Census data and Natural Earth outlines (see below). |
| `tools/build-terrain.js` | Rebuilds every state's geography (terrain file and relief pictures) from elevation, Natural Earth and Census data. It reads the city maps and passes from the packs. |
| `tools/check-pack.js` | Checks the state packs for mistakes (`node tools/check-pack.js`). Every pack must pass. |
| `tools/test-pack.js` | Plays a short game in one state in a real browser and takes screenshots (`node tools/test-pack.js CA`). Every pack must pass. |
| `js/game.js` | The rules. The `TUNING` numbers at the top set the difficulty. |
| `js/metro.js` | City maps: neighborhoods, trams, metro and cable cars. |
| `js/cartoon.js` | The Arcade look's cartoon map: hills, peaks, trees, cacti, waves, rivers and lakes, drawn from the terrain file. |
| `js/draw.js` | Draws the map, lines, stations and trains. The map uses a Lambert conformal conic projection centered on the open states (the usual one for maps of the US and Canada). |
| `js/ui.js` | Menus, buttons, touch/mouse input and the game loop. |

## Rebuilding the map (or adding a state)

The map file is generated from U.S. Census Bureau county boundaries (the `us-atlas` package):

```
cd national-railways/tools
npm install
cd ..
node tools/build-map.js tools/node_modules <cache folder> CA NV AZ OR
node tools/build-terrain.js tools/node_modules .terrain-cache
```

`build-terrain.js` downloads its data into the cache folder (about 30 MB, so a second run takes seconds) and needs `curl` and `unzip`. Run it after `build-map.js`, and again after adding city maps or editing the passes in the packs.

Data: county shapes and city coastlines from the U.S. Census Bureau; elevation from [AWS Terrain Tiles](https://registry.opendata.aws/terrain-tiles/) (SRTM, USGS and other public sources); lakes, rivers and mountain range names from [Natural Earth](https://www.naturalearthdata.com/) (public domain).

To add another state later: add it to `STATES` in `tools/build-map.js` (its FIPS code, and either a list of which small counties to merge or a table of county populations so small ones merge automatically), add its code to the command above, run it, then make its pack: `packs/<code>/pack.js` with its main stations, towns, passes and bridges (`PACKS.md` explains every field), and check it with `node tools/check-pack.js <code>` and `node tools/test-pack.js <code>`. Every game starts in the `start` counties of the home pack (`NR.HOME_PACK` in `js/packs.js`, California), and owning all of a state opens its neighbors.
