# Manitoba (MB) pack notes

## Region merges (phase 1)

Populations come from `packs/MB/raw/counties.json` and `packs/MB/raw/places.json` (Statistics Canada, 2021 Census). To predict the names the tool will give, the census subdivision populations come from table 98-10-0002 in the build cache, the same table the tool reads. Distances are straight lines between `places.json` points. Roads and railways are marked "well known" or "from memory". A script checked that every group shares a border in `neighbors`.

### Recommended (23 → 13 regions)

```
merge: [["Division No. 22", "Division No. 23"], ["Division No. 16", "Division No. 17", "Division No. 20"], ["Division No. 8", "Division No. 15"], ["Division No. 9", "Division No. 10"], ["Division No. 5", "Division No. 6"], ["Division No. 3", "Division No. 4"], ["Division No. 14", "Division No. 18", "Division No. 19"], ["Division No. 1", "Division No. 12"]]
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 22 + 23 | The far north looks to Thompson. Gillam is 207 km away, Lynn Lake 232 km and Churchill 403 km. The Hudson Bay Railway runs north to Gillam and Churchill (well known) | Thompson (13,035) | 46,916 |
| 16 + 17 + 20 | The Parkland around Dauphin. Roblin is 91 km away, Russell 96 km and Swan River 136 km. Hwy 10 runs from Dauphin to Swan River (well known) | Dauphin (8,368) | 41,575 |
| 8 + 15 | The Yellowhead corridor: Gladstone, then Neepawa, then Minnedosa (well known). Gladstone is 37 km from Neepawa | Neepawa (5,685) | 37,181 |
| 9 + 10 | The Trans-Canada corridor from Winnipeg's edge through Headingley and Elie to Portage (well known). Elie is 39 km from Portage | Portage la Prairie (13,270) | 37,252 |
| 5 + 6 | The southwest corner along the Saskatchewan and US borders: Virden, Melita (65 km away), Boissevain and Killarney | Virden (3,118) | 23,232 |
| 3 + 4 | The Pembina Valley. Manitou is 44 km from Winkler and Pilot Mound 69 km | Winkler (13,745) | 67,028 |
| 14 + 18 + 19 | The Interlake (Stonewall, Teulon, Gimli, Arborg) with the lands around Lake Winnipeg. Div. 19's biggest communities, Peguis (3,053) and Fisher River (1,449), are Interlake reserves. Hwy 6, the road from Winnipeg to Grand Rapids and Thompson (well known), runs through Div. 14, 18, 19 and then 21 | Gimli (6,569) | 61,766 |
| 1 + 12 | Eastman and the Winnipeg River country: Beausejour, Lac du Bonnet (39 km away), Pinawa, Pine Falls (61 km away) and the Whiteshell | Oakbank (5,041) | 44,977 |

Left alone:
- **Over 50k:** Winnipeg (Div. 11, 753,938), Steinbach (Div. 2, 83,878), Brandon (Div. 7, 70,896) and Selkirk (Div. 13, 51,643).
- **Exception: Div. 21 (The Pas, 21,871).** It has two real towns: The Pas (5,639; its population centre is 7,302) and Flin Flon (4,722). It covers about 62,000 km² and is a cluster of its own on the Saskatchewan side, 305 km from Thompson. The Pas is where the Hudson Bay Railway begins (well known). This is like Saskatchewan's Div. 18 (La Ronge), which also stayed alone.

**Main stations.**
- **Gimli** is chosen on `pop`, which counts the whole municipality (6,569). Its population centre is only 2,345, so Stonewall (5,046) is the bigger town on the ground. Gimli is the more central of the two.
- **Oakbank** (5,041, a population centre) beats Beausejour (3,307). Beausejour is the more central service town.
- **Churchill (870)** becomes a town in the Thompson region. If the owner wants it as its own destination, keep Div. 23 alone (14 regions). Even then, the biggest-town rule makes Gillam (1,007) the station.

**Names the tool will give.** The tool names a merged region after the biggest subdivision among all its members. Manitoba's rural municipalities have no "No. N" in their names, so they pass its town filter. The results:
- "Rockwood area (Division No. 14 & 18 & 19)": the station is Gimli.
- "Killarney - Turtle Mountain area (Division No. 5 & 6)": the station is Virden. Killarney's municipality has 3,520 people; Virden has 3,118.
- "Springfield area (Division No. 1 & 12)": fine, because Oakbank is in Springfield.
- Div. 13 stays "St. Andrews area": the station is Selkirk.

The others take their station's name: Thompson, Dauphin, Neepawa, Portage la Prairie, Winkler and The Pas.

### Alternative (also 13 regions)

Replace `[16, 17, 20]`, `[8, 15]` and `[9, 10]` with `[17, 20]`, `[15, 16]` and `[8, 9, 10]`. That gives Dauphin 31,630, Neepawa 33,249 and Portage la Prairie 51,129.
- **Pro:** Div. 8's bigger half joins its nearer hub. MacGregor is 35 km from Portage and Treherne 48 km, against 57 km and 86 km from Neepawa.
- **Con:** Russell is 142 km from Neepawa but 96 km from Dauphin, and Roblin is closer still to Dauphin (91 km). Portage's group would also reach Winnipeg's city limits.

### Map and data problems seen

1. **Four real borders are missing from `neighbors`.** This holds on both sides (SK's map doesn't list them either). In `map.js` the rings share these edges exactly:
   - Div. 19–22: 157 km along about 53.38°N, east of Lake Winnipeg.
   - Div. 20 and SK Div. 14: 54 km.
   - Div. 21 and SK Div. 14: 43 km.
   - Div. 23 and SK Div. 18: 468 km.

   The likely cause: the tool keeps 5 decimals for divisions whose outlines touch themselves at 4 decimals. That applies to 4619, 4620, 4621 and 4623, while 4622, 4714 and 4718 get 4 decimals. The two sides of a shared border then don't match in the topology. The tool should be fixed. Until then, the four links can be added as `bridges`: `[["Division No. 19", "Division No. 22"], ["Division No. 20", "SK:Division No. 14"], ["Division No. 21", "SK:Division No. 14"], ["Division No. 23", "SK:Division No. 18"]]`.
2. **Region names come from rural municipalities, not towns** (see above). Today's names are Alexander, Springfield, Rockwood, St. Andrews, Macdonald, North Norfolk, Lorne and so on. Div. 19 is "Pauingassi First Nation area" because Pauingassi has no 2021 count (blank in the table, so its population reads as 0) and is the only subdivision there without a reserve number. The merge hides that one.
3. **Div. 4, 8 and 19 have no place with a population in `places.json`**, so none of them could hold a main station alone. They're merged above.
4. **`places.json` mix-ups to avoid in phase 2.**
   - A "Roblin" community in Div. 4 (49.10, -99.29, near Cartwright) carries Roblin town's 1,603.
   - A "Russell" community (50.73, -101.37) repeats Russell town's 1,622.
   - "Lorette" appears twice, both with 3,230.
   - Flin Flon has 4,722 (population centre); its Manitoba subdivision has 4,940.
   - On the map, Winnipeg Beach (Div. 18, 1,439) falls inside Div. 13's shape and Dunnottar (Div. 13) inside Div. 19's. That comes from simplifying the shore.
5. **Div. 20 and 21 don't touch.** A strip of Div. 19 (Baden, Barrows, Powell) lies across Hwy 10 between Swan River and The Pas. That is real census geography. With the merges, the Parkland reaches The Pas through the Interlake group, or through SK Div. 14 once problem 1 is fixed.
6. **Checked and fine.**
   - Each region is one ring.
   - A 0.05° grid over the land found no gaps or overlaps.
   - Every label is inside its region.
   - Every place lies in a region except Nunalla, which is already marked `offMap`.

**Water crossings.** None are needed. Lakes Winnipeg, Manitoba and Winnipegosis all have land borders around them, and their ferries and causeways (Hecla, Matheson Island) stay inside one region. Ontario, North Dakota and Minnesota aren't in the game yet, so Div. 1, 2, 3, 4, 5, 19, 22 and 23 show no neighbours across those borders for now.
