# Alabama pack notes

## Region merges (phase 1)

Populations: Census 2020 (counties.json); stations: largest incorporated place in the group (places.json). Geography/corridors are from general knowledge (marked "well known").

### Recommended (43 regions: 27 stay alone, Chilton alone, 15 groups)

```
merge: [
  ["Franklin", "Lawrence"],
  ["Marion", "Winston"],
  ["Fayette", "Lamar", "Pickens"],
  ["Cherokee", "Cleburne", "Clay"],
  ["Coosa", "Tallapoosa"],
  ["Chambers", "Randolph"],
  ["Bibb", "Hale", "Perry"],
  ["Greene", "Marengo", "Sumter"],
  ["Dallas", "Lowndes", "Wilcox"],
  ["Choctaw", "Clarke", "Washington"],
  ["Conecuh", "Escambia", "Monroe"],
  ["Butler", "Crenshaw", "Pike"],
  ["Covington", "Geneva"],
  ["Dale", "Henry"],
  ["Barbour", "Bullock", "Macon"],
]
names: {
  "Fayette-Lamar-Pickens": "Fayette",
  "Bibb-Hale-Perry": "Cahaba Valley",
  "Greene-Marengo-Sumter": "Demopolis",
  "Dallas-Lowndes-Wilcox": "Selma",
  "Choctaw-Clarke-Washington": "Jackson",
  "Barbour-Bullock-Macon": "Eufaula-Tuskegee",
}
```
(names are optional; default alphabetical names also work.) No bridges/join needed (no islands). All groups verified connected through shared borders.

| Group | Main station | Pop (k) | Reasoning |
|---|---|---|---|
| Franklin-Lawrence | Russellville | 65 | adjacent, US-43/AL-24 farmland between Tennessee Valley and hills |
| Marion-Winston | Hamilton | 53 | US-278/US-43 hill country, Haleyville and Hamilton |
| Fayette-Lamar-Pickens | Fayette | 49 | rural west edge, US-43/US-82 toward Mississippi; <50k, no better partner |
| Cherokee-Cleburne-Clay | Centre | 54 | Weiss Lake / eastern hills, Heflin on I-20 |
| Coosa-Tallapoosa | Alexander City | 52 | Lake Martin / Coosa River |
| Chambers-Randolph | Valley | 57 | Georgia-line textile towns (Valley/Lanett, Roanoke), I-85 edge |
| Bibb-Hale-Perry | Marion | 46 | upper Black Belt / Cahaba valley; Brent and Moundville similar size |
| Greene-Marengo-Sumter | Demopolis | 39 | Tombigbee, Black Belt west; exception: all other neighbours taken |
| Dallas-Lowndes-Wilcox | Selma | 59 | Alabama River Black Belt around Selma |
| Choctaw-Clarke-Washington | Jackson | 51 | Tombigbee/Alabama river pinelands, south-west |
| Conecuh-Escambia-Monroe | Atmore | 68 | I-65 / US-84 piney woods; Monroeville, Evergreen |
| Butler-Crenshaw-Pike | Troy | 65 | US-231 / I-65 band, Greenville and Troy (well known) |
| Covington-Geneva | Andalusia | 64 | Wiregrass west, US-84 / US-331 |
| Dale-Henry | Ozark | 66 | Wiregrass, Dale 49k joins Henry; Fort Novosel at Ozark |
| Barbour-Bullock-Macon | Eufaula | 55 | US-82 corridor, Eufaula to Tuskegee |

Exceptions: **Chilton** (45k, Clanton, I-65) stays alone: near 50k, on a major corridor, every neighbour is either large or already grouped. **Greene-Marengo-Sumter** (39k) and **Bibb-Hale-Perry** (46k) stay under 50k because no extra neighbour is free. Groups over 60k (Conecuh-Escambia-Monroe 68k etc.) are fine: they are made of counties under 40k.

### Alternative
Chilton-Coosa (Clanton, 55k) + Clay-Tallapoosa (Alexander City, 55k) + Cherokee-Cleburne (Centre, 40k): Pro: Chilton gets merged and gets fewer lone regions; Con: Cherokee-Cleburne under 50k and Clanton (I-65) tied to rural Coosa. 42 regions.

### Map observations
- No Georgia or Florida neighbours yet (as expected): Alabama's east and south edges are open; Barbour, Henry, Russell, Chambers, Randolph, Cleburne, Cherokee, Geneva, Houston, Escambia, Baldwin, Covington and Dale will gain links later.
- neighbours are symmetric among Alabama counties; all 593 places carry a valid county id; no odd place names found in the data checks run.
- Not checked visually (no map rendering run): county outlines.

## Pack build (phase 2)

Result: 43 main stations, 78 towns, 13 bridges, 0 passes, 4 levels, 1 bay. `node tools/check-pack.js AL` passes with 0 errors and 0 warnings; the pack test passes (17 passed).

Station and place coordinates are the Census points in `raw/places.json`, except the downtowns listed in the pack comments (Birmingham, Mobile, Montgomery, Huntsville, Tuscaloosa, Decatur, Florence, Anniston, Pell City, Jasper, Selma, Auburn, Atmore): downtown positions are from general knowledge, 2 decimals. Station `pop` is the region's thousands from counties.json.

Judgment calls:
- Sizes: Birmingham 4 (Jefferson 674k, as Louisville/Memphis); Huntsville and Mobile 3 (388k, 415k, as Little Rock/Chattanooga); regions of about 100-300k are 2 (Montgomery, Tuscaloosa, Alabaster, Daphne, Auburn, Decatur, Anniston, Gadsden, Dothan); all others 1. Daphne's size 2 is for Baldwin's 232k.
- Types: coast = Mobile and Daphne; mountain = Scottsboro and Fort Payne (Appalachian edge); metro = cities of 100k+ and the Birmingham/Montgomery suburbs; farm elsewhere.
- Start: Jefferson, Shelby, St. Clair (all touch). Birmingham and Alabaster are metro, Pell City is farm; the pack test lays Birmingham-Pell City and carries riders. Pell City is picked over Moody (13,186 vs 12,934) because it is the seat and a separate I-20 town, where Moody is a Birmingham suburb (a town).
- Anniston is picked over Oxford (22,091 vs 21,563): the county seat, Oxford is a town 4 miles away. Muscle Shoals (16,299) over Sheffield and Tuscumbia. Daphne (27,463) over Fairhope and Foley.
- `places.json` puts Atmore at 31.12, -87.46, which is about 7 miles north of the real downtown (31.02, -87.49, general knowledge); the station is at downtown.
- Airports (by the bar of the other packs): Birmingham-Shuttlesworth and Huntsville International. Port: Port of Mobile only (a real major seaport).
- No passes: Alabama's map has only 3 mountain cells (two on the Georgia/Tennessee line, one near Sand Mountain), no main line crosses them, and the checker finds none to attach a pass to.
- Biomes: forest = the Gulf plain and south-west pine country (Mobile, Baldwin, Conecuh-Escambia-Monroe, Choctaw-Clarke-Washington, Covington-Geneva, Butler-Crenshaw-Pike); wooded = the hills of the north and east; unlisted = the Tennessee Valley, Black Belt and Wiregrass farmland.
- Levels: Birmingham (9 regions), Tennessee Valley & Northeast (15), Montgomery & the East (10), Mobile Bay & the Gulf (9). Goals follow I-20/59, I-65, US-80 and the Mobile Bay crossing.

Scenic places (all well known): Birmingham (Civil Rights District), Montgomery (Capitol, Rosa Parks Museum, Civil Rights Memorial), Selma (Edmund Pettus Bridge), Huntsville (U.S. Space & Rocket Center), Mobile (USS Alabama), Muscle Shoals (FAME Studios, Muscle Shoals Sound), Tuskegee (Tuskegee University, Tuskegee Airmen National Historic Site), Gulf Shores (Gulf State Park beaches, with Orange Beach), Little River Canyon (National Preserve on Lookout Mountain, near Fort Payne, 34.40, -85.62, approximate), Cheaha Mountain (highest point of Alabama, 2,407 ft, Cheaha State Park, 33.49, -85.81, approximate).

Bridges (real; coordinates approximate to 2 decimals, all general knowledge, none more than 3 miles from the map's water per the checker):
- Mobile Bay: the I-10 Jubilee Parkway Bayway, the Battleship Parkway and Causeway (US-90/98), the Mobile Bay Ferry (Fort Morgan-Dauphin Island) and the Dauphin Island Bridge (AL-193). The Wallace (I-10) and Bankhead (US-90) tunnels are not listed: they run under the Mobile River on land on this map, and a bridge point at Mobile's station would make every line leaving Mobile "near a bridge", opening Mobile to Fairhope, Foley and Gulf Shores straight across the bay.
- The Tennessee: Wilson Dam and the O'Neal Bridge (US-43) at Florence, the US-431 Guntersville Bridge. Weiss Lake: the AL-68 bridge at Cedar Bluff.
- Black Warrior, Alabama, Tombigbee: the Hugh Thomas Bridge (Tuscaloosa-Northport), the I-65 Alabama River bridge at Montgomery, the Edmund Pettus Bridge (Selma), the US-80 bridge at Demopolis, and the Dillingham Street Bridge across the Chattahoochee at Phenix City-Columbus (for Georgia later).

Mobile Bay: the `bays` ring is a box over the bay (-88.12 to -87.80, 30.20 to 30.68); land inside it stays land. On this map the Mobile-Tensaw Delta is all land, so Mobile-Daphne, Mobile-Bay Minette and Prichard-Daphne are open in Gentle and Tough with no bay water to cross (as the real Bayway and Causeway do). Lines across the open bay need a real crossing near them (Gentle 4 miles, Tough 3 miles of the line): Bayou La Batre-Foley (13 miles) and Bayou La Batre-Gulf Shores (19 miles) are blocked in both modes; Mobile-Fairhope and Mobile-Gulf Shores are open in Gentle (the line passes within 4 miles of the Bayway) and blocked in Tough; Mobile-Foley is open in both (9 miles of bay, near the Bayway); Daphne-Fairhope stays on the Eastern Shore and is open.

Reachability (checked with `NR.blockedReason` in Gentle and Tough): every main station has at least 2 open neighbouring main stations in both modes; every town has an open link. Only one adjacent pair is blocked in Tough: Centre-Fort Payne (3 miles across Weiss Lake; I could not confirm the right real bridge, so none is added). Corridors open as chains in both modes: I-65 (Pulaski-Athens-Decatur-Cullman-Birmingham-Alabaster-Clanton-Prattville-Montgomery-Greenville-Evergreen-Atmore-Mobile), I-20/59 (Meridian-Livingston-Eutaw-Tuscaloosa-Birmingham), I-20 east (Birmingham-Pell City-Lincoln-Anniston-Heflin), I-59 (Birmingham-Gadsden-Fort Payne-Chattanooga), I-85 (Montgomery-Tuskegee-Auburn-Opelika-Valley), US-72 (Corinth-Muscle Shoals-Florence-Decatur-Huntsville-Scottsboro-Stevenson-Chattanooga), US-431/231, US-80, US-45, US-98, I-10 (Pascagoula-Mobile-Daphne). Links to MS and TN: all 27 adjacent main-station pairs across the border are open in both modes.
