# Saskatchewan (SK) pack notes

## Region merges (phase 1)

Populations: `packs/SK/raw/counties.json` and `packs/SK/raw/places.json` (Statistics Canada, 2021 Census). Where `places.json` has no number (North Battleford, Lloydminster), the number comes from Statistics Canada table 98-10-0002 in the build cache, the same table the map tool uses for names. Distances are straight lines between `places.json` points. Highways are named only where well known. Every group below shares a border in `neighbors`; this was checked with a script.

### Recommended (18 → 11 regions)

```
merge: [["Division No. 1", "Division No. 2"], ["Division No. 3", "Division No. 7"], ["Division No. 4", "Division No. 8"], ["Division No. 12", "Division No. 13"], ["Division No. 16", "Division No. 17"], ["Division No. 5", "Division No. 9", "Division No. 10"]]
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 1 + 2 | The southeast oil and coal country: Weyburn and Estevan, 85 km apart on Hwy 39 (well known) | Weyburn (11,019) | 52,848 |
| 3 + 7 | Assiniboia and Gravelbourg (both about 90 km away) look north to Moose Jaw. Hwy 2 runs from Moose Jaw to Assiniboia (well known) | Moose Jaw (33,665) | 59,675 |
| 4 + 8 | The southwest: Maple Creek is on the Trans-Canada west of Swift Current (well known), and Shaunavon is 84 km south of it | Swift Current (16,750) | 41,712 |
| 12 + 13 | West-central grain and oil country: Rosetown, Biggar, Kindersley, Unity. Hwy 7 runs Saskatoon–Rosetown–Kindersley (well known) | Kindersley (4,567) | 45,255 |
| 16 + 17 | The northwest looks to the Battlefords: the Yellowhead runs to Lloydminster (127 km) and Hwy 4 to Meadow Lake (152 km) (well known). This also fixes the Lloydminster clash (see below) | North Battleford (13,836) | 85,827 |
| 5 + 9 + 10 | The east-central Parkland around Yorkton. Melville is 40 km away. Foam Lake and Wynyard are on the Yellowhead west of Yorkton (well known). Div. 10 sits in the same east–west band as Div. 9 | Yorkton (16,280) | 84,113 |

Left alone: Regina (Div. 6, 276,564), Saskatoon (Div. 11, 326,109) and Prince Albert (Div. 15, 88,988) are over 50k. There are two exceptions:
- **Div. 14 (Melfort, 35,428).** It has real towns: Melfort (5,955), Nipawin (4,570) and Tisdale (2,962). Its small neighbours don't fit. Div. 9 and 10 are already in Yorkton's group of three, and Div. 10's biggest towns sit 124–154 km from Melfort on the Yellowhead. Div. 18 is the north. Div. 15 is Prince Albert, which is already big.
- **Div. 18 (La Ronge, 35,986).** It covers half the province: boreal forest and the Shield, about 47.5 square degrees against 2–5 for the others. Its towns reach the south by three different roads: La Ronge to Prince Albert (Hwy 2, well known), La Loche towards Meadow Lake, and Creighton towards Div. 14. Any merge would put its station 200+ km south of the north.

**Main stations.**
- **Weyburn.** The tool names a merge after the biggest town among *all* its members, not after the biggest town of the biggest member. So 1 + 2 becomes "Weyburn area (Division No. 1 & 2)". Weyburn (11,019) narrowly beats Estevan (10,851), which becomes a town.
- **North Battleford.** At 13,836 it beats Lloydminster (Part), 11,843, so 16 + 17 is named "North Battleford area". That keeps the name away from Alberta's Lloydminster station.
- **Kindersley.** It sits on the Alberta edge of its group; Rosetown (2,507) and Biggar (2,133) are more central. As in Alberta's Wainwright case, the rule (biggest town) was followed.
- **La Ronge (2,521).** La Loche (2,514) is nearly tied, but La Ronge's population centre is 5,317 with Air Ronge.

**Rejected.**
- **The tool's automatic merge.** It gave [1, 5, 9] and [10, 14, 18]; Manitoba's map still holds those ids. The first runs from Estevan to Kamsack across three trade areas. The second puts Wynyard with La Ronge.
- **The Battlefords together: [12, 16] + [13, 17].** [13, 17] would be named "Lloydminster area", which clashes with Alberta's station. It would also stretch about 300 km along the border, from Kindersley to Pierceland.

### Alternative (also 11 regions)

```
merge: [["Division No. 1", "Division No. 2"], ["Division No. 3", "Division No. 7"], ["Division No. 4", "Division No. 8"], ["Division No. 12", "Division No. 13"], ["Division No. 16", "Division No. 17"], ["Division No. 5", "Division No. 9"], ["Division No. 10", "Division No. 14"]]
```

The difference: Yorkton (5 + 9) has 67,630 people, and Melfort (10 + 14) has 51,911.
- **Pro:** no lone Div. 14, so fewer regions are under 50k.
- **Con:** Div. 10's main towns (Wynyard, Foam Lake) are Yellowhead towns that look to Yorkton and Saskatoon. Their only link to Melfort is the north–south line Raymore–Watson–Naicam–Melfort. Those towns all lie near 104.5°W; that this is Hwy 6 is from memory, so check it.

### Map and data problems seen

1. **Saskatchewan and Manitoba aren't linked.** Manitoba's `map.js` and `raw/counties.json` name SK neighbours `sk-division-no-1-5-9` and `sk-division-no-10-14-18`, ids from the old automatic merge that no longer exist. SK's `map.js` lists no Manitoba neighbours at all, although Divisions 1, 5, 9, 14 and 18 touch Manitoba. So no neighbour link crosses the SK–MB border right now. Rebuild both after the merge is applied, then check that each side lists the other.
2. **Missing populations in `places.json`.**
   - North Battleford has `pop: null`. Two subdivisions share the name: the city (13,836) and CSD 4716027 (104).
   - Lloydminster also has `pop: null`. Its Saskatchewan part is 11,843 (CSD 4717029).
   - The tool names regions from the table, so the region names come out right. Phase 2 needs to take these numbers from the table.
3. **The Battlefords are split.** Battleford (4,400) is in Div. 12 and North Battleford in Div. 16, about 3 km apart across the river. With 12 + 13, Battleford ends up in Kindersley's region next to the North Battleford station. Div. 12 is currently named "Battleford area".
4. **Kindersley looks inconsistent.** The municipality has 4,567 people but its population centre only 2,938; the latter looks low.
5. **A degenerate land ring.** `map.js` `land` has a one-point ring at (-107.078, 51.478) near Outlook. It looks harmless.
6. **Checked and fine.**
   - Each of the 18 regions is one ring.
   - A 0.05° grid over the land found no gaps or overlaps.
   - All 2,217 places are inside Saskatchewan. West Poplar, a border crossing, sits about 50 m south of 49°N.
   - The AB–SK neighbours match on both sides.
