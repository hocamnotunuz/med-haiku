# National Railways

A passenger-rail strategy game set in California. Lay track between real cities, run trains, and get passengers where they are going before any station overflows.

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
| Levels | Reach each passenger goal to unlock the next region. If a level fails, retry it or continue in Endless. |

### Train types

| Train | Price | Seats | Speed | Stops at | Notes |
| --- | --- | --- | --- | --- | --- |
| Regular | $60k | 6 | 1× | every city | Cheap and reliable. |
| Commuter | $80k | 12 | 0.85× | every city | Quick boarding. Lines up to 180 mi. Bonus fares on short trips. |
| Regional | $120k | 10 | 1.25× | size 2 and up | Skips the smallest towns. |
| High-speed | $250k | 8 | 2× | size 3 and up | Needs high-speed track. From week 2. |
| Bullet | $450k | 10 | 3× | Metro cities | Needs high-speed track. From week 4. |

All the numbers live in `js/game.js` (`TUNING` and `TRAIN_TYPES`).

### Passenger styles

- **A type of place:** passengers want any Metro, Coast, Mountains, Farmland or Desert city, shown by shape.
- **A specific city:** passengers want one city, shown by its code (for example FRE = Fresno).

## Files

| File | What it does |
| --- | --- |
| `index.html` | The page: screens, buttons and the map area. |
| `style.css` | Colors, fonts and layout (light and dark themes). |
| `js/cities.js` | California's outline, the 29 cities, and the levels. |
| `js/game.js` | The rules. The `TUNING` numbers at the top set the difficulty. |
| `js/draw.js` | Draws the map, lines, stations and trains. |
| `js/ui.js` | Menus, buttons, touch/mouse input and the game loop. |
