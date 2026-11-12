# Montana (MT) pack notes

## Region merges (phase 1)

Populations: `packs/MT/raw/counties.json` and `packs/MT/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 1,084,244). Every group is connected through `neighbors` (checked: each member borders another member). Roads, rivers and railways named are well known unless marked "(moderately known)".

### Recommended (56 → 29 regions)

```
merge: [["Mineral", "Sanders"], ["Deer Lodge", "Granite", "Powell"], ["Beaverhead", "Jefferson", "Madison"], ["Broadwater", "Meagher"], ["Park", "Sweet Grass"], ["Carbon", "Stillwater"], ["Golden Valley", "Musselshell", "Wheatland"], ["Fergus", "Judith Basin", "Petroleum"], ["Glacier", "Liberty", "Toole"], ["Pondera", "Teton"], ["Chouteau", "Hill"], ["Blaine", "Phillips"], ["Roosevelt", "Valley"], ["Daniels", "Sheridan"], ["Garfield", "McCone", "Richland"], ["Dawson", "Prairie", "Wibaux"], ["Carter", "Fallon"], ["Custer", "Powder River"], ["Big Horn", "Rosebud", "Treasure"]]
```

No `names` needed: the automatic names read well ("Deer Lodge-Granite-Powell County" holds both Deer Lodge County and the town of Deer Lodge).

Alone, over 50k: Yellowstone (Billings 117,150), Gallatin (Bozeman 53,542), Missoula (Missoula 74,131), Flathead (Kalispell 24,737), Cascade (Great Falls 60,473), Lewis and Clark (Helena 32,101).

Alone, under 50k (exceptions):
- **Ravalli** 44,171, Hamilton (4,692): the Bitterroot Valley on US-93, walled in by the Bitterroot and Sapphire ranges; its small neighbours (Granite, Deer Lodge, Beaverhead) are all over the mountains.
- **Silver Bow** 35,132, Butte (34,496): Montana's fifth city, bigger than Helena and Kalispell, at the I-15/I-90 junction on the Continental Divide (Homestake Pass east, Elk Park north).
- **Lake** 31,142, Polson (5,147): the Mission Valley and Flathead Lake on US-93 between Missoula and Kalispell. Its only small neighbour, Sanders, is needed by Mineral.
- **Lincoln** 19,672, Libby (2,779): the Kootenai valley, US-2 and the BNSF Hi-Line from Idaho through Troy and Libby. Its only small neighbour, Sanders, is in the Clark Fork valley across the Cabinet Mountains.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Mineral + Sanders | Lower Clark Fork: I-90 at Superior and St. Regis; the old Northern Pacific through Plains and Thompson Falls (MT-135 links them, moderately known) | Thompson Falls (1,334) | 16,929 |
| Deer Lodge + Granite + Powell | Head of the Clark Fork: Anaconda, the Deer Lodge Valley and I-90 to Garrison and Drummond; Philipsburg's Flint Creek valley (MT-1, moderately known) | Anaconda (9,424; the Census place is the whole consolidated county) | 19,679 |
| Beaverhead + Jefferson + Madison | The Jefferson River and its forks: Dillon on I-15, Twin Bridges, Whitehall, the Boulder River, the Madison valley (Ennis) | Dillon (3,878) | 30,083 |
| Broadwater + Meagher | US-12 from Townsend (Missouri, Canyon Ferry) to White Sulphur Springs | Townsend (1,804) | 8,699 |
| Park + Sweet Grass | Upper Yellowstone: Gardiner, Paradise Valley, Livingston; I-90 and the old NP east to Big Timber | Livingston (8,454) | 20,867 |
| Carbon + Stillwater | Beartooth Front: Red Lodge, Absarokee, Columbus on I-90 (MT-78, moderately known) | Red Lodge (2,257); Columbus (1,860) is on the railway | 19,435 |
| Golden Valley + Musselshell + Wheatland | Musselshell River valley on US-12 and the old Milwaukee Road: Harlowton, Ryegate, Roundup | Roundup (1,743) | 7,631 |
| Fergus + Judith Basin + Petroleum | The Judith Basin (US-87 Stanford to Lewistown) and MT-200 east to Winnett | Lewistown (5,955) | 13,958 |
| Glacier + Liberty + Toole | Hi-Line west: Browning, Cut Bank, Shelby, Chester; I-15 to the Sweetgrass crossing | Shelby (3,173); Cut Bank (3,064) is nearly tied | 20,708 |
| Pondera + Teton | Rocky Mountain Front farms: US-89 at Choteau, I-15 at Conrad, Valier | Conrad (2,319) | 12,129 |
| Chouteau + Hill | US-87 from Havre via Big Sandy to Fort Benton on the Missouri | Havre (9,359) | 22,209 |
| Blaine + Phillips | Milk River and the Hi-Line: Harlem, Chinook, Malta; Fort Belknap reservation spans both | Malta (1,860) | 11,264 |
| Roosevelt + Valley | Hi-Line east: Glasgow, Nashua, Wolf Point, Poplar, Culbertson; Fort Peck reservation and dam | Glasgow (3,201); Wolf Point (2,635) | 18,374 |
| Daniels + Sheridan | Border wheat country: Scobey to Plentywood (MT-5, moderately known) | Plentywood (1,671) | 5,203 |
| Garfield + McCone + Richland | MT-200 across the Big Open: Jordan, Circle, Sidney on the lower Yellowstone (moderately known) | Sidney (6,344) | 14,392 |
| Dawson + Prairie + Wibaux | I-94 and the old NP down the Yellowstone: Terry, Glendive, Wibaux to North Dakota | Glendive (4,874) | 10,972 |
| Carter + Fallon | Southeast corner: Baker to Ekalaka (MT-7, moderately known) | Baker (1,799) | 4,460 |
| Custer + Powder River | Miles City on I-94 and MT-59 south to Broadus (moderately known) | Miles City (8,362) | 13,566 |
| Big Horn + Rosebud + Treasure | Crow and Northern Cheyenne reservations (US-212), Hardin on I-90, Colstrip, I-94 via Hysham and Forsyth | Hardin (3,820) | 22,220 |

The Hi-Line stays a clean chain of regions: Lincoln, Flathead, Glacier-Liberty-Toole, Chouteau-Hill, Blaine-Phillips, Roosevelt-Valley, then North Dakota. So does the old Northern Pacific / I-90 / I-94: Missoula, Deer Lodge-Granite-Powell (Garrison), Lewis and Clark, Broadwater-Meagher, Gallatin, Park-Sweet Grass, Carbon-Stillwater (Columbus), Yellowstone, Big Horn-Rosebud-Treasure, Custer-Powder River, Dawson-Prairie-Wibaux.

Rejected:
- Custer + Garfield (MT-59 to Jordan): they touch for only about 2 km (see the map check).
- Lake + Sanders (43,540): leaves Mineral alone; Lake faces Missoula and Kalispell.
- Jefferson + Broadwater: the Elkhorn Mountains lie between Boulder and Townsend.
- Dawson + Richland (lower Yellowstone): Sidney (6,344) would take Glendive's station.

### Alternative (28 regions)

Same list, but `["Lincoln", "Mineral", "Sanders"]` (36,601; Libby) instead of Lincoln alone and Mineral + Sanders, and `["Deer Lodge", "Silver Bow"]` (44,556; Butte) plus `["Granite", "Powell"]` (10,255; Deer Lodge) instead of Silver Bow alone and Deer Lodge + Granite + Powell.
- Pro: one region fewer, and only Ravalli and Lake stay alone under 50k; Butte and Anaconda were one mining and smelting district.
- Con: Libby and Superior are in different valleys with the Cabinet Mountains between; Anaconda loses its station, the Deer Lodge Valley is split, and the town of Deer Lodge sits outside the region named "Deer Lodge" (it is in Powell County).

### Map and data check

1. **The map looks right.** All 497 places lie inside their tagged county, every label is inside its county, and every county is one piece. County areas are close to the real ones (Beaverhead about 5,540 sq mi, Phillips about 5,180). Gallatin and Park include their parts of Yellowstone National Park (West Yellowstone is in Gallatin, Gardiner in Park). Neighbours agree on both sides with the `id-`, `bc-`, `ab-` and `sk-` regions.
2. **Corner-only neighbours.** Inside Montana, Custer–Garfield share about 2 km and Deer Lodge–Ravalli under 1 km (Census topology; both listed). Across the border the tool's 0.03° tolerance adds four corner contacts: Glacier–`bc-east-kootenay` and Flathead–`ab-division-no-2-3` (they meet only at the BC/Alberta/Montana corner), Lincoln–`bc-central-kootenay-kootenay-boundary` (about 1.5 km), and Valley–`sk-division-no-4-8`, which do not touch at all (a 2.3 km gap; Phillips is in between). Harmless for the merges; the last one is a false neighbour for unlocking.
3. **Missing neighbours (expected, until those states arrive):** Wyoming: Gallatin, Park, Carbon, Big Horn, Powder River, Carter. North Dakota: Sheridan, Roosevelt, Richland, Wibaux, Fallon. South Dakota: Carter (and Fallon for a few km).
4. **Places without population:** all 369 are CDPs (for example Lockwood, Evergreen, Big Sky, Montana City, Lame Deer, Crow Agency, Gardiner). No main-station choice depends on them.
5. **Names:** the Census calls Butte "Butte-Silver Bow (balance)" and Anaconda "Anaconda-Deer Lodge County"; show them as "Butte" and "Anaconda". The town of Choteau (Teton County) is not in Chouteau County (spelled differently).
