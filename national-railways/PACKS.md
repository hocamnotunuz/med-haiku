# State packs

Every state (and later every Canadian province) has a **pack**: `packs/<code>/pack.js`. It holds everything hand-made for that state. The rest comes from data tools:

| Comes from | What |
| --- | --- |
| `js/map.js` (made by `tools/build-map.js`) | Land, state and county borders, county regions and their neighbors |
| `js/terrain.js` (made by `tools/build-terrain.js`) | Mountains grid, lakes, rivers, city hills and water |
| **the pack** (hand-made) | Main stations, towns, levels, starting counties, city maps, passes, bridges, bays, biomes |

`js/packs.js` lists the packs (`NR.PACK_LIST`, in load order) and collects them into the lists the game uses. `index.html` loads each pack with a `<script>` tag.

**Every pack must pass the checker before it joins the game:**

```
node tools/check-pack.js CA        # one pack
node tools/check-pack.js           # all packs
```

Errors must be fixed. Warnings are worth a look but can be fine (for example, a pass in low hills).

---

## Fields

A pack is one call: `NR.addPack({ ... })`.

| Field | Needed | What it is |
| --- | --- | --- |
| `code` | yes | Two-letter code, the same as the folder and as in `js/map.js` (`"CA"`) |
| `name` | yes | The name, exactly as in `js/map.js` (`"California"`) |
| `stations` | yes | Main stations: **exactly one per county region** (see below) |
| `towns` | yes | Towns that appear over time inside counties you own |
| `passes` | yes (may be empty) | Real mountain passes, canyons and gaps: `[name, latitude, longitude]` |
| `bridges` | yes (may be empty) | Real bridges: `[name, latitude, longitude]` |
| `biomes` | recommended | Cartoon look: `{ forest: [...], wooded: [...], dry: [...] }` lists of region ids |
| `start` | to be a starting state | County region ids a game starting here begins owning: usually the biggest city's county and two neighbors (they should touch each other). States with `start` appear under Settings → Start in |
| `levels` | optional | Levels mode campaign (3–4 levels), used when the game starts in this state. Without it, Levels mode isn't offered for this state |
| `metros` | if it has big cities | City maps, keyed by a main station id |
| `bays` | if any | Bays where water needs a bridge: `{ name, ring: [lon, lat, lon, lat, ...] }` |

### Main stations (`stations`)

One per county region, at the region's biggest city. Where you pick another city, say why in a comment. Example:

```js
{ id: "LA", name: "Los Angeles", county: "los-angeles", lat: 34.05, lon: -118.24, type: "metro", size: 5, pop: 10014, main: true, level: "south" },
```

| Field | Rule |
| --- | --- |
| `id` | 2–4 capital letters or digits, starting with a letter. Shown on passengers, so make it recognizable (`SF`, `FRE` for Fresno). **Unique across all packs.** |
| `name` | The city's name |
| `county` | The region id from `js/map.js` (`"los-angeles"`, `"nv-clark"`) |
| `lat`, `lon` | The city center, 2 decimals. Must be inside its county |
| `type` | `metro`, `coast`, `mountain`, `farm` or `desert`: what the place is mostly like |
| `size` | 1 to 5, how busy (guide below) |
| `pop` | The **county region's** population in thousands (2020 census) |
| `main` | Always `true` |
| `level` | Home state with levels only: which level's area it belongs to |
| `port` | The seaport's name, if it has one (container cargo) |
| `airport` | The airport's name, if it has a big one (flights) |
| `scenic` | `true` for a place tourists travel to (a national park, a famous sight) |

**Size guide** (from California, Nevada, Arizona and Oregon):

| Size | Region population | Example |
| --- | --- | --- |
| 5 | big metro, usually over 1.5 million | Los Angeles, Phoenix, San Diego |
| 4 | about 0.5–2.5 million | Riverside, Reno, Sacramento |
| 3 | about 350,000–900,000 | Bakersfield, Eugene |
| 2 | about 60,000–300,000 | Carson City |
| 1 | under about 140,000, rural | most merged rural regions |

### Towns (`towns`)

The same fields as stations, but **without** `main`, `pop` and `level`. Aim for about 1.5 towns per region: the next-biggest real towns, spread out (the checker warns about places under 4 miles apart). Most towns are size 1. A big second city can be size 2–4 (Long Beach is 4).

### Passes and bridges

These are **real** places only. Each needs a name and coordinates (2 decimals). Write a source in a comment when it's not well known.

- **A pass** lets track cross mountains near it: it costs more and trains slow down on the climb. Anywhere else, mountains need a tunnel. The checker warns about a pass with no mountains within about 7 miles.
- **A bridge** lets track cross water near it at a normal price, at any width. The checker warns about a bridge far from any river, lake, bay or coast on the map.

### Biomes (cartoon look)

| Kind | Looks like | Example |
| --- | --- | --- |
| `forest` | trees even on the flats | the foggy north coast, western Oregon's coast |
| `wooded` | trees on the hills | Sierra Nevada foothills, the Cascades |
| `dry` | sand, cacti in the hot south, sagebrush in the cooler north | Nevada, Arizona, the Mojave |
| not listed | green farmland and grassland | the Central Valley |

### City maps (`metros`)

Keyed by a main station id. Each has a `name`, a `size` and 10–12 `stops` (the checker needs at least 6). Each stop has an `id` (2–4 capital letters, unique within the city), a `name`, `lat` and `lon`. Exactly one stop has `hub: true`: the main station, where riders change to and from trains. Stops marked `cable: true` can have cable car lines (only where real cable cars run). After adding a city map, run `tools/build-terrain.js`: it works out the city's area from its stops and gives it hills and water.

---

## Adding a state

1. **Map:** add the state to `tools/build-map.js` (its FIPS code, and either a merge list or populations so small counties merge automatically). Run it with every state's code.
2. **Pack:** create `packs/<code>/pack.js` with the fields above. Add the code to `NR.PACK_LIST` in `js/packs.js` and a `<script>` tag in `index.html`.
3. **Terrain:** run `tools/build-terrain.js` (it reads the passes from the packs, and makes hills and water for city maps).
4. **Check:** run `node tools/check-pack.js <code>` until it passes with no errors.
5. **Test:** run the game's browser tests, and play it in both looks (Arcade and Classic).
