# Wyoming (WY) pack notes

## Region merges (phase 1)

Populations: `packs/WY/raw/counties.json` and `packs/WY/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 576,850). Every group is connected through `neighbors` (checked: each member borders another member, all along 80 km or more). Roads, rivers, passes and railways named are well known unless marked "(moderately known)".

### Recommended (23 → 15 regions)

```
merge: [["Crook", "Weston"], ["Johnson", "Sheridan"], ["Big Horn", "Hot Springs", "Washakie"], ["Sublette", "Sweetwater"], ["Lincoln", "Uinta"], ["Goshen", "Platte"], ["Converse", "Niobrara"]]
```

No `names` needed. The automatic names read well enough ("Big Horn-Hot Springs-Washakie County", "Johnson-Sheridan County").

Alone, over 50k: **Laramie** (Cheyenne 65,156; 100,512) and **Natrona** (Casper 59,096; 79,966).

Alone, under 50k (exceptions; Wyoming is the smallest state, and a strict 50k rule would leave about 8 regions):
- **Campbell** 47,030, Gillette (33,412): Wyoming's third city, nearly 50k, the Powder River Basin coal field; I-90 and the BNSF/UP coal lines.
- **Albany** 37,069, Laramie (31,405): the university town on the Laramie Plains, between the Laramie Range (Sherman Hill, I-80's summit) and the Medicine Bow Mountains.
- **Fremont** 39,235, Riverton (10,687) and Lander (7,544): the Wind River Basin and Reservation, walled in by the Wind River Range (west), the Owl Creek Mountains (north, the Wind River Canyon) and the Absarokas.
- **Park** 29,627, Cody (10,040) and Powell (6,414): Yellowstone's east gate (Sylvan Pass) and Buffalo Bill Reservoir; its small neighbours are needed by the Bighorn River group.
- **Teton** 23,323, Jackson (10,758): Jackson Hole, Grand Teton and the south half of Yellowstone. Every road out crosses a pass or canyon: Teton Pass to Idaho, Togwotee Pass to Dubois, the Hoback to Pinedale, the Snake River Canyon to Star Valley.
- **Carbon** 14,535, Rawlins (8,239): I-80 and the Union Pacific between Laramie and Rock Springs, plus the upper North Platte (Saratoga, Encampment). Joining either neighbour on I-80 would take Rawlins's station (see the alternative).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Crook + Weston | Wyoming's Black Hills: Devils Tower, Sundance and Moorcroft on I-90; Newcastle and Upton on the BNSF line to Edgemont, SD (moderately known) | Newcastle (3,367) | 14,014 |
| Johnson + Sheridan | East foot of the Bighorn Mountains: Sheridan on I-90, Buffalo where I-25 meets I-90, Kaycee | Sheridan (18,739) | 39,367 |
| Big Horn + Hot Springs + Washakie | The Bighorn River down the Bighorn Basin: Thermopolis below the Wind River Canyon, Worland, Basin, Greybull, Lovell; US-20 and the BNSF line to Montana (moderately known) | Worland (4,767) | 23,821 |
| Sublette + Sweetwater | The Green River from the Upper Green (Pinedale) to Green River and Flaming Gorge; US-191 Pinedale–Farson–Rock Springs | Rock Springs (23,523) | 50,997 |
| Lincoln + Uinta | The southwest corner: I-80 to Utah at Evanston, US-189 to Kemmerer, the Bear River (Evanston, Cokeville; moderately known); Star Valley (Afton) comes with Lincoln | Evanston (11,761) | 40,027 |
| Goshen + Platte | The North Platte from Glendo and Guernsey past Fort Laramie to Torrington (the Oregon Trail); I-25 at Wheatland | Torrington (6,123) | 21,105 |
| Converse + Niobrara | Douglas and Glenrock on I-25 and the North Platte; US-18/20 east to Lusk and the UP coal line via Lusk (moderately known) | Douglas (6,381) | 16,222 |

Every town over 6,000 gets a station except three that share a region with a bigger town (Green River, Lander, Powell).

The three corridors stay clean chains: I-80 / the Union Pacific: Laramie, Albany, Carbon, Sublette-Sweetwater, Lincoln-Uinta, then Utah. I-25: Laramie, Goshen-Platte, Converse-Niobrara, Natrona, Johnson-Sheridan, then Montana. I-90: Johnson-Sheridan, Campbell, Crook-Weston, then South Dakota. The Bighorn Basin runs Natrona, Fremont, Big Horn-Hot Springs-Washakie, Park, then Montana.

Rejected:
- Teton + Sublette (Hoback, 32k): Jackson and the parks deserve their own region; the Hoback Rim and Gros Ventre Range lie between.
- Fremont + Hot Springs (Wind River Canyon, 44k): the Owl Creek Mountains lie between; Thermopolis is the head of the Bighorn Basin.
- Sheridan + Big Horn, Johnson + Washakie: the Bighorn Mountains lie between (US-14, US-16 over Powder River Pass).
- Lincoln + Sublette (US-189, 28k): leaves Uinta alone with only Sweetwater as a partner, and Evanston would lose its station.
- Goshen + Niobrara + Platte (24.6k): leaves Converse alone at 13.8k.

### Alternative (14 regions)

Same list plus `["Albany", "Carbon"]` (51,604; Laramie) instead of Albany and Carbon alone.
- Pro: one region fewer and one exception fewer; I-80 and the UP cross the Laramie Plains to Rawlins with no range on the way (the Medicine Bows lie south).
- Con: Rawlins (8,239) loses its station, the I-80 chain is one region shorter, and the region covers about 12,250 sq mi.

A second option (same count): Park + Big Horn (41,150; Cody, Powell, Lovell along the Shoshone River) and Hot Springs + Washakie (12,298; Worland). It splits the Bighorn River and puts Cody in a merged region.

### Map and data check

1. **The map looks right.** All 205 places lie inside their tagged county (none in the wrong one), every label is inside its county, and every county is one piece. County areas add up to about 97,750 sq mi (Sweetwater about 10,500 sq mi, Fremont 9,200), which matches Wyoming's total area with water.
2. **Yellowstone and its lakes.** The park is split between Park County (Mammoth, Tower, Norris, Canyon) and Teton County (Old Faithful, West Thumb, Grant Village, Lake Village). Yellowstone Lake and Jackson Lake are in Teton. The county shapes include the lakes; `terrain.js` draws them (Natural Earth), together with Flaming Gorge, Seminoe, Pathfinder, Glendo, Boysen, Buffalo Bill, Palisades and Ocean Lake. Bighorn Lake (Bighorn Canyon, which reaches Lovell), Fontenelle and Keyhole reservoirs are not in Natural Earth's set; this does not matter for the merges.
3. **Neighbours agree both ways** with the `id-` and `mt-` regions. Teton touches `id-bonneville`, `id-fremont-teton` and `mt-gallatin`; Park touches `mt-gallatin`, `mt-park-sweet-grass` and `mt-carbon-stillwater`. The northwest corner of Wyoming is Park County.
4. **Short contacts (Census topology):** Carbon–Converse about 1 km (a corner; after merging it would let Rawlins unlock Douglas-Lusk), Crook–`mt-custer-powder-river` about 3 km, Converse–Johnson about 5 km, Fremont–Washakie about 6 km, Park–Washakie about 10 km. No merge relies on them.
5. **Missing neighbours (expected, until those states arrive):** Utah: Uinta, Lincoln, Sweetwater. Colorado: Sweetwater, Carbon, Albany, Laramie. Nebraska: Laramie, Goshen, Niobrara. South Dakota: Niobrara, Weston, Crook.
6. **Places without population:** all 106 are CDPs (for example Mammoth, Alta, Fox Farm-College, Fort Bridger). No main-station choice depends on them; Jackson is Teton's only incorporated place.
7. **Names:** Laramie County holds Cheyenne, and the city of Laramie is in Albany County. The pack should name stations by town so players are not confused. Big Horn County, Wyoming borders Big Horn County, Montana (`mt-big-horn-rosebud-treasure`).
