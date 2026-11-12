# Utah (UT) pack notes

## Region merges (phase 1)

Populations: `packs/UT/raw/counties.json` and `packs/UT/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 3,271,614). Every group is connected through `neighbors`. I checked it: each member shares 40 km or more of border with another member, measured on the rings in `map.js`. Roads, rivers, passes and railways named here are well known unless marked "(moderately known)".

### Recommended (29 → 18 regions)

```
merge: [["Cache", "Rich"], ["Morgan", "Summit"], ["Daggett", "Duchesne", "Uintah"], ["Carbon", "Emery"], ["Grand", "San Juan"], ["Piute", "Sevier", "Wayne"], ["Garfield", "Kane"], ["Beaver", "Juab", "Millard"]]
```

No `names` needed. The automatic names read well ("Morgan-Summit County", "Daggett-Duchesne-Uintah County").

Alone, over 50k: **Salt Lake** (Salt Lake City), **Utah** (Provo), **Davis** (Layton), **Weber** (Ogden), **Washington** (St. George), **Tooele** (Tooele), **Box Elder** (Brigham City) and **Iron** (Cedar City). Cache is over 50k too and takes Rich (below).

Alone, under 50k (exceptions):
- **Wasatch** 34,782, Heber (16,867) and Midway (6,000): the Heber Valley, reached from Provo up Provo Canyon (US-189), from Park City on US-40, and from the Uinta Basin over Daniels Summit (moderately known). Merged with Summit, Heber would take the station from Park City (8,393). Merged with Duchesne, it would split the Uinta Basin.
- **Sanpete** 28,437, Ephraim (5,607), Mount Pleasant, Gunnison and Manti: the Sanpete Valley on US-89. The Wasatch Plateau lies east (towards Emery) and the San Pitch Mountains west (towards Nephi). Its only open-valley partner is Sevier, which is needed for Piute and Wayne (see the alternative).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Cache + Rich | Bear Lake (Garden City) and the Bear River valley (Randolph, Woodruff). Its only Utah road to the rest of the state is US-89 over Logan Canyon. Other roads leave through Wyoming (to Evanston) or Idaho (moderately known). Merging a tiny county into a bigger one is an exception, with a precedent: Washington's Columbia + Walla Walla | Logan (52,806) | 135,671 |
| Morgan + Summit | The Weber River from Kamas and Coalville to Morgan. I-84 and the Union Pacific's Overland Route run down Weber Canyon to Echo, and I-80 runs from Parleys Summit through Park City and Echo Canyon to Wyoming | Park City (8,393) | 54,661 |
| Daggett + Duchesne + Uintah | The Uinta Basin on US-40 (Duchesne, Roosevelt, Vernal) and Flaming Gorge (Manila, Dutch John), reached from Vernal on US-191 | Vernal (10,077) | 56,152 |
| Carbon + Emery | Castle Country (moderately known): US-6 and the Union Pacific (the old Rio Grande) from Soldier Summit down Price Canyon to Helper, Price and Green River. Castle Dale and Huntington are in Castle Valley | Price (8,209) | 30,242 |
| Grand + San Juan | Canyon country on US-191: Moab, Monticello, Blanding and Bluff. It holds Arches, Canyonlands and Monument Valley | Moab (5,353) | 24,177 |
| Piute + Sevier + Wayne | The Sevier Valley on US-89 and I-70 (Salina, Richfield, Monroe), up the valley to Marysvale, Junction and Circleville. UT-24 runs from Sigurd to Loa, Torrey and Capitol Reef (moderately known) | Richfield (8,148) | 25,437 |
| Garfield + Kane | US-89 from Panguitch through Long Valley to Kanab (moderately known). Bryce Canyon, Grand Staircase–Escalante and Lake Powell's west shore | Kanab (4,677) | 12,752 |
| Beaver + Juab + Millard | I-15 through the west desert: Nephi, Scipio, Fillmore, Cove Fort (where I-70 begins) and Beaver. Delta and Milford are on the Union Pacific's Los Angeles line (moderately known) | Nephi (6,442) | 31,832 |

The corridors stay clean chains:
- **I-15:** Box Elder, Weber, Davis, Salt Lake, Utah, Beaver-Juab-Millard, Iron, Washington, then Arizona.
- **I-80:** Tooele, Salt Lake, Morgan-Summit, then Wyoming.
- **I-84 and the Union Pacific's Overland Route:** Box Elder, Weber, Morgan-Summit, then Wyoming.
- **I-70:** Beaver-Juab-Millard, Piute-Sevier-Wayne, Carbon-Emery, Grand-San Juan, then Colorado.
- **US-6 and the old Rio Grande:** Utah, Carbon-Emery, Grand-San Juan.
- **US-40:** Wasatch, Daggett-Duchesne-Uintah, then Colorado.
- **US-191:** Wyoming, Daggett-Duchesne-Uintah, Carbon-Emery, Grand-San Juan, then Arizona.
- **The Union Pacific's Los Angeles line:** Utah, Beaver-Juab-Millard, Iron, then Nevada.

Rejected:
- Summit + Wasatch (77,149), or with Morgan as well (89,443): Heber takes Park City's station. Without Summit, Morgan is left with only Rich, over mountains.
- Rich + Morgan + Summit (57,174): Bear Lake has no Utah road to either county. The Bear River leaves Summit through Evanston, Wyoming.
- Wasatch + Duchesne (54,386): Daniels Summit lies between, and Roosevelt would be split from Vernal.
- Carbon + Emery + Grand (39,906): Moab loses its station to Price, and San Juan is left alone.
- Juab + Sanpete (40,215): the San Pitch Mountains lie between (UT-132, Salt Creek Canyon; moderately known), and Nephi would take Sanpete's station.
- Kane + Washington: Zion lies between, and St. George is a metro.

### Alternative (also 18 regions)

Replace Piute-Sevier-Wayne, Garfield-Kane and Sanpete alone with `["Sanpete", "Sevier"]` (49,945; Richfield), `["Garfield", "Piute", "Wayne"]` (9,015; Panguitch 1,727) and **Kane** alone (7,666; Kanab).
- Pro: the Sanpete and Sevier valleys meet on US-89 at Gunnison and Salina (nearly 50k). UT-12 puts Bryce, Escalante and Capitol Reef in one region.
- Con: Ephraim and Manti lose their station, Kane stands alone at 7.7k, and the emptiest region gets a 1,700-person main station.

### Map and data check

1. **The map looks right.** All 334 places lie inside their tagged county. Every label is inside its county, and every county is one piece. County areas add up to about 84,800 sq mi, which matches Utah's total area with water.
2. **Hooper (Weber, 9,091): its Census point (41.163, -112.342) is on Fremont Island**, inside the island hole of `terrain.js`'s Great Salt Lake, about 7 km off the east shore. The town itself is on the shore west of Roy. Do not use the raw point for a town.
3. **Great Salt Lake.** `terrain.js` draws it with two islands as land: Antelope, which is in Davis's polygon, and Fremont, in Weber's. Most of the lake is in Box Elder. The **Davis–Tooele border (39 km) runs entirely through the lake**, so they are neighbours only across water. This is harmless, because Salt Lake borders both. Box Elder–Weber is half lake and half land. Box Elder–Tooele is mostly land, on the salt flats.
4. **Neighbours agree both ways** with the `id-`, `wy-`, `nv-` and `az-` regions, and none is missing. Short contacts: Daggett–Duchesne 2 km, Beaver–Garfield 3 km, Cache–`id-oneida-power` 4 km, Summit–`wy-sublette-sweetwater` 4 km, Salt Lake–Wasatch 5 km, Beaver–Sevier 7 km, Rich–Weber 11 km, Morgan–Salt Lake 12 km, Carbon–Sanpete 12 km and Duchesne–Utah 13 km. No merge relies on them. After the merges, the 3 km Beaver–Garfield corner is the only contact between Beaver-Juab-Millard and Garfield-Kane.
5. **Colorado is missing (expected):** Daggett, Uintah, Grand and San Juan are on the open edge. San Juan meets New Mexico only at the Four Corners point.
6. **Region ids in other states.** After the rebuild, the Idaho, Wyoming, Nevada and Arizona maps will list the new `ut-` ids. Nothing outside `packs/UT` names a `ut-` id (grep).
7. **Terrain, for phase 2.** There is an unnamed "Lake" near the Bear River's mouth (41.5 N, 112.2 W). Only the Colorado, Green, Bear and White rivers and the Wasatch Range are named. The Sevier, Virgin, San Juan, Weber and Provo rivers and the Uinta Mountains are not.
8. **Places without population:** all 79 are CDPs (for example Snyderville, Maeser, Fort Duchesne, Spanish Valley, Oljato-Monument Valley). No main-station choice depends on them.
9. **Names:** "Utah County, Utah" holds Provo, and Logan is in Cache. Stations should be named by town.
