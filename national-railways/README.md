# National Railways

A passenger-rail strategy game set in California. Lay track between real cities, run trains, and get passengers where they are going before any station overflows.

## How to play

- **Build a line:** drag from one city to another. Keep dragging to add more stops.
- **Extend a line:** drag the tab at either end of a line to a new city.
- **Manage a line:** tap its color at the bottom of the screen to add or remove trains, or delete it.
- **Track costs miles.** Every link uses track equal to the real distance between the cities.
- **Every week** you get a new train and choose one upgrade.
- **Lose** when a station stays overcrowded too long (red ring fills up).

### Modes

| Mode | Goal |
| --- | --- |
| Endless | Play until a station overflows. |
| Timed | Four in-game weeks. Deliver as many passengers as you can. |
| Levels | Reach each passenger goal to unlock the next region. If a level fails, retry it or continue in Endless. |

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
