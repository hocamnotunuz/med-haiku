# Colorado (CO) pack notes

## Region merges (phase 1)

Populations: `packs/CO/raw/counties.json` and `packs/CO/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 5,773,707). Every group is connected through `neighbors`. I checked it: each member shares 28 km or more of border with another member, measured on the rings in `map.js`. Roads, rivers, passes and railways named here are well known unless marked "(moderately known)".

### Recommended (64 → 36 regions)

```
merge: [["Logan", "Phillips", "Sedgwick"], ["Morgan", "Washington", "Yuma"], ["Elbert", "Lincoln"], ["Cheyenne", "Kit Carson"], ["Bent", "Crowley", "Otero"], ["Baca", "Kiowa", "Prowers"], ["Huerfano", "Las Animas"], ["Custer", "Fremont"], ["Park", "Teller"], ["Clear Creek", "Gilpin"], ["Chaffee", "Lake"], ["Gunnison", "Hinsdale"], ["Alamosa", "Conejos", "Costilla"], ["Mineral", "Rio Grande", "Saguache"], ["Archuleta", "La Plata", "San Juan"], ["Dolores", "Montezuma"], ["Delta", "Montrose"], ["Ouray", "San Miguel"], ["Grand", "Jackson"], ["Moffat", "Rio Blanco", "Routt"]]
names: { "Cheyenne-Kit Carson": "Kit Carson-Cheyenne County" }
```

The one name: "Cheyenne-Kit Carson County" reads like the city of Cheyenne, Wyoming, which is in the game next door (the same fix as Idaho's "Valley-Boise County"). The other automatic names read well.

Alone, over 50k (14): **El Paso** (Colorado Springs), **Denver**, **Arapahoe** (Aurora), **Jefferson** (Lakewood), **Adams** (Thornton), **Larimer** (Fort Collins), **Douglas** (Castle Rock), **Boulder** (Boulder), **Weld** (Greeley), **Pueblo** (Pueblo), **Mesa** (Grand Junction), **Broomfield**, **Garfield** and **Eagle**. La Plata is over 50k too and takes Archuleta and San Juan (below).

Alone, under 50k (exceptions):
- **Summit** 31,055, Breckenridge (5,078), Silverthorne, Frisco, Dillon. I-70 comes in through the Eisenhower Tunnel and leaves over Vail Pass; Hoosier Pass (to Park) and Fremont Pass (to Lake, a 6 km border) are to the south. Its one open side is down the Blue River on CO-9 to Kremmling in Grand (moderately known). Merged there, Breckenridge would take Middle Park's station, away from the Moffat Route (see the alternative).
- **Pitkin** 17,358, Aspen (7,002) and Snowmass Village. The Roaring Fork leaves Pitkin through Eagle's Basalt and El Jebel (places.json puts both in Eagle) before Carbondale and Glenwood Springs in Garfield, so both of its valley partners are big counties. Its small neighbours are over mountains: Independence Pass (closed in winter) to Lake, the Elk Mountains to Gunnison, the Sawatch to Chaffee. Precedents: Teton (Jackson) in Wyoming and Wasatch (Heber) in Utah stay alone.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Logan + Phillips + Sedgwick | I-76 and the South Platte from Sterling to Julesburg; Holyoke on US-6 (moderately known) | Sterling (13,741) | 28,470 |
| Morgan + Washington + Yuma | I-76 at Fort Morgan and Brush; US-34 and the BNSF line from Brush through Akron, Yuma and Wray to Nebraska (moderately known) | Fort Morgan (11,601) | 43,906 |
| Elbert + Lincoln | The Palmer Divide's east side: I-70 and US-24 (Simla) both reach Limon, where US-40 and US-287 meet them (moderately known) | Limon (2,039) | 31,730 |
| Cheyenne + Kit Carson | I-70 to Burlington; US-40 and the Union Pacific's Kansas Pacific line through Kit Carson and Cheyenne Wells (moderately known) | Burlington (3,175) | 8,830 |
| Bent + Crowley + Otero | The Arkansas valley on US-50 and the BNSF (Santa Fe) main: Rocky Ford, La Junta, Las Animas. Ordway north of the river (CO-96, moderately known) | La Junta (7,324) | 30,254 |
| Baca + Kiowa + Prowers | US-287 from Eads through Lamar to Springfield and Oklahoma (moderately known); US-50 and the Santa Fe at Lamar and Holly | Lamar (7,689) | 16,957 |
| Huerfano + Las Animas | I-25 from Walsenburg to Trinidad and Raton Pass; the Spanish Peaks (moderately known) | Trinidad (8,334) | 21,376 |
| Custer + Fremont | US-50 and the Royal Gorge at Cañon City; CO-69 from Texas Creek up the Wet Mountain Valley to Westcliffe (moderately known). Fremont alone is 48,934 | Cañon City (17,129) | 53,640 |
| Park + Teller | US-24 from Ute Pass through Woodland Park and Florissant into South Park (Hartsel, Fairplay); Cripple Creek | Woodland Park (7,913) | 42,099 |
| Clear Creek + Gilpin | The gold towns on I-70 and CO-119: Idaho Springs, Georgetown (the Georgetown Loop), Central City, Black Hawk | Idaho Springs (1,786) | 15,200 |
| Chaffee + Lake | The upper Arkansas on US-24: Leadville, Buena Vista, Salida | Salida (5,677) | 26,908 |
| Gunnison + Hinsdale | CO-149 from the Gunnison valley up the Lake Fork to Lake City (moderately known) | Gunnison (6,557) | 17,705 |
| Alamosa + Conejos + Costilla | The south San Luis Valley: Alamosa, Antonito (the Cumbres & Toltec), San Luis; US-160 from La Veta Pass through Fort Garland | Alamosa (9,820) | 27,336 |
| Mineral + Rio Grande + Saguache | The west San Luis Valley and the Rio Grande on US-160: Center, Monte Vista, Del Norte, South Fork; CO-149 to Creede (moderately known) | Monte Vista (4,252) | 18,777 |
| Archuleta + La Plata + San Juan | Durango; the Durango & Silverton up the Animas; US-160 east through Bayfield to Pagosa Springs below Wolf Creek Pass. Exception: two small counties join a big one (precedent: Utah's Cache + Rich) | Durango (19,088) | 69,696 |
| Dolores + Montezuma | Mesa Verde and Cortez; Dove Creek on US-491 and Rico up CO-145 (moderately known) | Cortez (8,760) | 28,174 |
| Delta + Montrose | US-50 down the Uncompahgre to Delta and the Gunnison; the Black Canyon | Montrose (20,302) | 73,878 |
| Ouray + San Miguel | US-550 to Ridgway and Ouray; CO-62 over the Dallas Divide and CO-145 to Telluride (moderately known) | Telluride (2,630) | 12,950 |
| Grand + Jackson | Middle Park (Winter Park, Granby, Kremmling: the Moffat Route) and North Park (Walden) over Willow Creek Pass on CO-125 (moderately known) | Granby (2,079) | 17,096 |
| Moffat + Rio Blanco + Routt | The Yampa valley on US-40 (Steamboat Springs, Hayden, Craig, Dinosaur); CO-13 from Craig to Meeker; Rangely (moderately known) | Steamboat Springs (13,215) | 44,646 |

The corridors stay clean chains:
- **I-25:** Larimer/Weld, Broomfield/Adams, Denver, Arapahoe/Douglas, El Paso, Pueblo, Huerfano-Las Animas, then New Mexico.
- **I-70:** Jefferson, Clear Creek-Gilpin, Summit, Eagle, Garfield, Mesa, then Utah. East: Adams/Arapahoe, Elbert-Lincoln (Limon), Kit Carson-Cheyenne (Burlington), then Kansas.
- **I-76:** Adams, Weld, Morgan-Washington-Yuma, Logan-Phillips-Sedgwick, then Nebraska.
- **US-50:** Mesa, Delta-Montrose, Gunnison-Hinsdale, Monarch Pass, Chaffee-Lake, Custer-Fremont, Pueblo, Bent-Crowley-Otero, Baca-Kiowa-Prowers, then Kansas.
- **US-160:** Huerfano-Las Animas, La Veta Pass, Alamosa-Conejos-Costilla, Mineral-Rio Grande-Saguache, Wolf Creek Pass, Archuleta-La Plata-San Juan, Dolores-Montezuma.
- **US-40:** Utah, Moffat-Rio Blanco-Routt, Rabbit Ears Pass, Grand-Jackson, Berthoud Pass, Clear Creek-Gilpin, Jefferson.
- **The Moffat Route (Union Pacific; Amtrak's California Zephyr):** Denver, Jefferson/Boulder, Gilpin (the Moffat Tunnel's east portal; moderately known, from an approximate point), Grand (Winter Park, Granby), Eagle, Garfield (Glenwood Springs), Mesa, then Utah. The 9 km Gilpin–Grand border is where it crosses.
- **The Santa Fe main (Amtrak's Southwest Chief):** Kansas, Baca-Kiowa-Prowers (Lamar), Bent-Crowley-Otero (La Junta), Huerfano-Las Animas (Trinidad, Raton Pass), then New Mexico.
- **The Tennessee Pass line (Union Pacific, out of service; moderately known):** Pueblo, Custer-Fremont (Royal Gorge), Chaffee-Lake (Salida, Leadville), Eagle (22 km Lake–Eagle border).

Rejected:
- Garfield + Pitkin (79,044): Aspen loses its station to Rifle or Glenwood Springs, and CO-82 runs through Eagle between them.
- Lake + Pitkin (24,790): Independence Pass. Then Chaffee is alone.
- Summit + Clear Creek (Eisenhower Tunnel), Summit + Park (Hoosier Pass): the Continental Divide or the Mosquito Range between.
- Elbert alone and `["Cheyenne", "Kit Carson", "Lincoln"]` (14,504; Burlington): as good on the plains (I-70 and the Kansas Pacific in one region) and the same count, but it needs a third exception. Elbert's 26,056 live mostly near Elizabeth, Denver's edge.
- Fremont alone (48,934) and Custer with Huerfano-Las Animas (CO-69 to Walsenburg): Westcliffe's station would be Trinidad, far to the south; the Wet Mountain Valley drains to the Arkansas at Texas Creek.
- `["Delta", "Montrose", "Ouray"]` with `["Dolores", "Montezuma", "San Miguel"]`: Telluride loses its station to Cortez, over Lizard Head Pass.
- San Juan with Ouray (Red Mountain Pass) or with San Miguel (no road): Silverton's railway goes to Durango.
- Archuleta alone (13,355): its only open side is west to Durango; Wolf Creek Pass is east, and Conejos is reached only through New Mexico (Cumbres Pass).
- Jackson + Larimer (Cameron Pass, and a big county); Rio Blanco + Garfield (a big county).
- Saguache + Chaffee (Poncha Pass): splits the San Luis Valley.

### Alternative (also 36 regions)

Replace Summit alone, Grand-Jackson and Moffat-Rio Blanco-Routt with `["Grand", "Summit"]` (46,770; Breckenridge 5,078), `["Jackson", "Routt"]` (26,206; Steamboat Springs) and `["Moffat", "Rio Blanco"]` (19,821; Craig 9,062).
- Pro: no exception for Summit; the Blue River (CO-9) joins Breckenridge to Kremmling in one valley; Craig keeps a station.
- Con: Breckenridge becomes the station of Middle Park, which the railway runs through and Summit doesn't; Steamboat's region crosses Rabbit Ears Pass to North Park; the Yampa valley is split at Hayden and Craig.

### Map and data check

1. **The map looks right.** Every county is one piece and every label is inside its county. All 482 places lie inside their tagged county (the tool tags them by their point). County areas add up to about 103,500 sq mi, close to Colorado's total.
2. **Neighbours agree both ways** with the `ut-` and `wy-` regions, and none is missing. **No `az-` neighbour:** Montezuma meets Arizona (Apache County) only at the Four Corners point, as Utah's San Juan meets New Mexico. Arizona's map has no `co-` neighbour either. The 19 "coast" lines are the borders with Nebraska, Kansas, Oklahoma and New Mexico (not yet in the game).
3. **Short contacts:** Arapahoe–Lincoln 1 km, Archuleta–Rio Grande 3 km, Arapahoe–Jefferson 6 km, Lake–Summit 6 km (Fremont Pass, a real road, CO-91; moderately known), Chaffee–Pitkin 7 km, Broomfield–Jefferson 9 km, Gilpin–Grand 9 km, Kiowa–Otero 9 km. No merge relies on them. After the merges, Summit touches Chaffee-Lake only over the 6 km at Fremont Pass, and Mesa touches Gunnison-Hinsdale over 11 km.
4. **Glendale (4,612) is tagged Denver**, but it is in Arapahoe County: an enclave inside Denver. Denver's ring has no hole for it. It doesn't change a station.
5. **Berthoud (10,338) is tagged Weld.** Its Census point (40.285, -104.966) is by I-25, on land the town annexed; the old town is about 10 km west in Larimer (from memory, approx.). Matters only if it becomes a town.
6. **Westminster (116,601) is tagged Jefferson**; the city spans Adams and Jefferson. Aurora is tagged Arapahoe (it also spans Adams and Douglas).
7. **Place names to fix by hand:** "CaÃ±on City" is Cañon City. `tools/make-raw.js` reads the Gazetteer as latin1 (line 154) though the file is UTF-8, so New Mexico's names with ñ (Española) will break too. "Central" is Central City (the tool strips the Census's " city"). "City of Creede" is Creede.
8. **Places without population:** 210 CDPs (for example Highlands Ranch, Security-Widefield, Pueblo West, Ken Caryl, Evergreen) and one town, Bonanza (Saguache, listed as "Bonanza town"). No main-station choice depends on them.
9. **Main stations to decide in phase 2** (the biggest place isn't the famous one): Garfield's biggest is Rifle (10,436), not Glenwood Springs (9,958: Amtrak, the I-70/CO-82 junction). Eagle's is Gypsum (8,046), ahead of Eagle (7,509), Avon (6,062) and Vail (4,844). Adams's biggest place is Thornton (141,863), since Westminster is tagged Jefferson.
10. **Broomfield** is one ring of about 39 sq mi with Adams, Boulder, Jefferson and Weld as neighbours. Adams and Boulder don't touch on the map; Broomfield lies between.
