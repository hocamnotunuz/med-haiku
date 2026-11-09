# National Railways

A passenger-rail strategy game set in California. Lay track between real cities, run trains, and get passengers where they are going before any station overflows.

## The map

California is divided into its real counties (U.S. Census Bureau borders). Counties with fewer than 50,000 people are merged with small neighbors into regions such as **Del Norte-Siskiyou-Trinity County**, which turns 58 counties into **49 regions**. Every region has one main station at its biggest city (Yuba County uses Wheatland, because its larger towns sit across the river from Yuba City), plus up to five **towns** (71 in all).

### Unlocking counties

- Every game starts with **Los Angeles, Ventura and Riverside** counties.
- Counties next to yours have a dashed orange outline and a tag like `$85k · 0/33`. Tap one to see its details.
- **Pay** to unlock it now (bigger counties cost more), or unlock it **for free** by delivering the goal number of passengers to your stations next to it.
- When a county is unlocked, its main station opens right away. Its towns then appear over time.
- In **Levels** mode, finishing a level opens the next part of the state, so its counties can be unlocked.
- Bridges count as borders: Golden Gate (San Francisco–Marin), Richmond–San Rafael (Contra Costa–Marin) and San Mateo (Alameda–San Mateo).

Pinch or scroll to zoom, drag empty map to move around, or use the + / − buttons.

## How to play

- **Build a line:** drag from one city to another. Keep dragging to add more stops.
- **Extend a line:** drag the tab at either end of a line to a new city.
- **Manage a line:** tap its color at the bottom of the screen to buy trains, send them to the depot, upgrade to high-speed track, or delete the line.
- **Money:** track costs $1k per mile (high-speed track $2.5k per mile). Passengers pay a fare when they arrive: more for long trips and fast trains. Every train costs a little to run each week.
- **Every week** a new Regular train arrives and you choose one upgrade.
- **Rush hour:** now and then a big city gets very busy for a few seconds. Commuter trains help.
- **Lose** when a station stays overcrowded too long (red ring fills up).

### Modes

| Mode | Goal |
| --- | --- |
| Endless | Play until a station overflows. |
| Timed | Four in-game weeks. Deliver as many passengers as you can. |
| Levels | Finish each level's 3-goal checklist to open the next part of the state. If a level fails, retry it or continue in Endless. |

### Train types

| Train | Price | Seats | Speed | Stops at | Notes |
| --- | --- | --- | --- | --- | --- |
| Regular | $60k | 6 | 1× | every city | Cheap and reliable. |
| Commuter | $80k | 12 | 0.85× | every city | Quick boarding. Lines up to 180 mi. Bonus fares on short trips. |
| Regional | $120k | 10 | 1.25× | size 2 and up | Skips the smallest towns. |
| High-speed | $250k | 8 | 2× | size 3 and up | Needs high-speed track. From week 2. |
| Bullet | $450k | 10 | 3× | Metro cities | Needs high-speed track. From week 4. |
| Freight | $100k | 10 crates | 0.8× | every city | Produce only. |
| Dock train | $120k | 16 containers | 0.7× | every city | Containers only. Needs a port on its line. |
| Truck bypass | $140k | 6 trucks | 1.1× | every city | Trucks only. From week 2. |
| Night train | $160k | 8 | 1.3× | size 2 and up | Runs only at night (21:00–05:00). Extra bonus on trips of 200+ miles. From week 2. |
| Scenic train | $130k | 10 | 0.7× | every city | Tourists only; they pay double on it. |
| Airport express | $150k | 10 | 1.6× | every city | Quick boarding. Needs an airport on its line. |
| Work train | $90k | – | 0.9× | every city | Carries nothing. Repairs damaged track on its line. |

### Day, night and events

- **Day and night:** each day runs from 00:00 to 24:00 (10 seconds). The map darkens at night and fewer people travel.
- **Tourists (★)** leave Metro cities for scenic places (Yosemite Valley, South Lake Tahoe, Big Sur, Death Valley, Mount Shasta, Mammoth Lakes, Napa, Three Rivers), three times as often at weekends.
- **Flights** land at airports (✈) with 5 travelers at a time: LAX, SFO (San Mateo), San Diego, San José, Oakland, Sacramento, Ontario, Fresno and Palm Springs.
- **Earthquakes and wildfires** (from week 3) damage track (red ✕). Trains turn back at the damage. A Work train on that line repairs it in a few seconds; otherwise it mends after 3 weeks.

### City maps: trams, metro and cable cars

Los Angeles, San Francisco, San Diego, Sacramento and San Jose have their own city maps (an **M** badge on the station). Once you own the county, tap the station and choose **Open city map**. **← California** takes you back.

| Line | Track | Vehicle | Riders | Notes |
| --- | --- | --- | --- | --- |
| Tram | $3k/mi | $40k | 8 | Street-running, cheap. |
| Metro | $10k/mi | $120k | 16 | Fast; riders pay ×1.3. |
| Cable car | $8k/mi | $60k | 6 | San Francisco only, between cable car stops (Transit Center, Union Square, Nob Hill, Fisherman's Wharf), up to 3.5 miles; riders pay ×2. |

- Riders appear in the neighborhoods: most cross town, some (orange tags) head for the main station to catch a train and then join the trains across California.
- Half of the train passengers arriving at the city's main station ride the metro home.
- A city keeps running once opened. A neighborhood that stays overcrowded ends the game, like a station; you get a warning if you are away.
- Up to 5 lines per city. Sell vehicles or delete lines to get half the price back.

#### City budget and head of transportation

- **Each city has its own budget.** City fares go into it; city track, vehicles and weekly running costs are paid from it. Move money in or out with **City budget** on the city map. If a city budget runs dry, your main money covers the rest.
- **Head of transportation:** hire one from the city budget. Fee: the higher of 80% of the city budget or 50% of the city's track and vehicle value.
  1. **Settling in (3 weeks):** the head does nothing yet; you keep the city running (it can still be lost).
  2. **Managed (100 weeks):** the city runs safely (stops never overflow, kept at most half full), its lines are frozen, and management keeps 90% of its profit; 10% comes to your main money each week. The city doesn't get busier while managed.
  3. **Retired:** the city is yours again (live, can grow, can be lost). You can hire a new head.

### Cargo

Cargo shares the map with passengers. It waits in a **yard** to the left of each station (up to 12 loads; extra loads are turned away) and never ends your game, but it pays well.

| Cargo | Made at | Delivered to | Moved by |
| --- | --- | --- | --- |
| Produce (green crates) | Farmland towns | Metro cities | Freight |
| Containers (rust) | Ports, when a ship docks (8 at a time) | Desert and Farmland warehouses | Dock train |
| Trucks (gray) | Desert and Mountain towns, from week 2 | Metro cities | Truck bypass |

Ports (anchor symbol): Port of Hueneme (Oxnard), Port of Long Beach, Port of San Diego, Port of Oakland and Humboldt Bay (Eureka).

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
| `style.css` | Colors, fonts and layout (light and dark themes). |
| `js/map-california.js` | California's land, county borders and county regions. Generated: do not edit by hand. |
| `js/cities.js` | The 49 county main stations, the 71 towns, and the levels. |
| `tools/build-map.js` | Rebuilds the map file from Census data (see below). |
| `js/game.js` | The rules. The `TUNING` numbers at the top set the difficulty. |
| `js/metro.js` | City maps: neighborhoods, trams, metro and cable cars. |
| `js/draw.js` | Draws the map, lines, stations and trains. |
| `js/ui.js` | Menus, buttons, touch/mouse input and the game loop. |

## Rebuilding the map (or adding a state)

The map file is generated from U.S. Census Bureau county boundaries (the `us-atlas` package):

```
cd national-railways/tools
npm install
cd ..
node tools/build-map.js tools/node_modules CA
```

To add another state later: add it to `STATES` in `tools/build-map.js` (its FIPS code, which small counties to merge, and any bridges), run the script, then list its main stations and towns in `js/cities.js`.
