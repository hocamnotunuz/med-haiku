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
