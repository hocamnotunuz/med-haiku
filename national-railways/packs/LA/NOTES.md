# Louisiana notes

## Region merges (phase 1)

Data: counties.json (Census 2020 pops) and places.json. Geography (interstates, rivers) is from general knowledge. Parishes are written without "Parish".

### Recommended: 64 parishes -> 41 regions

```
merge: [
  ["Bienville", "Claiborne", "Webster"],
  ["De Soto", "Red River", "Sabine"],
  ["Jackson", "Lincoln"],
  ["Morehouse", "Union"],
  ["Caldwell", "Franklin", "Richland"],
  ["East Carroll", "Madison", "West Carroll"],
  ["Catahoula", "Concordia", "Tensas"],
  ["Grant", "LaSalle", "Winn"],
  ["Allen", "Beauregard"],
  ["Cameron", "Jefferson Davis"],
  ["Avoyelles", "Evangeline"],
  ["East Feliciana", "St. Helena", "West Feliciana"],
  ["Pointe Coupee", "West Baton Rouge"],
  ["Assumption", "Iberville"],
  ["St. James", "St. John the Baptist"],
  ["Plaquemines", "St. Bernard"],
]
names: { "St. James-St. John the Baptist": "River Parishes", "Plaquemines-St. Bernard": "Lower Mississippi", "East Carroll-Madison-West Carroll": "Northeast Delta", "Catahoula-Concordia-Tensas": "Concordia Delta" }  // optional
bridges / join: none needed
```

Not merged (stay alone): the 21 parishes of 50k+, plus four under 50k: Natchitoches (38k, I-49 college/market town of 18k, isolated in the middle), Vernon (49k, Fort Johnson/Leesville, within 1k of the line), St. Mary (49k, Morgan City on US-90, within 1k), Washington (45k, Bogalusa, borders only two big parishes).

| Group | Main station | Pop |
|---|---|---|
| Bienville-Claiborne-Webster (I-20/US-79 hills, around Minden) | Minden 11,918 | 64,117 |
| De Soto-Red River-Sabine (Red River + US-171, Mansfield) | Mansfield 4,718 | 56,580 |
| Jackson-Lincoln (I-20, Ruston) | Ruston 22,163 | 63,437 |
| Morehouse-Union (Bastrop; Union borders Ouachita) | Bastrop 9,677 | 46,743 |
| Caldwell-Franklin-Richland (Ouachita/Boeuf valley, Winnsboro-Rayville) | Winnsboro 4,861 | 49,460 |
| East Carroll-Madison-West Carroll (north-east delta) | Tallulah 6,299 | 27,233 |
| Catahoula-Concordia-Tensas (Mississippi/Black River, Vidalia-Ferriday) | Vidalia 4,025 | 31,732 |
| Grant-LaSalle-Winn (US-167 piney hills) | Jena 4,161 (Winnfield 4,144 nearly equal) | 50,721 |
| Allen-Beauregard (DeRidder, Oakdale, US-190/171) | DeRidder 9,851 | 59,307 |
| Cameron-Jefferson Davis (Cameron is empty marsh, no town on the map; Jennings on I-10) | Jennings 9,838 | 37,868 |
| Avoyelles-Evangeline (Cajun prairie, Ville Platte-Marksville) | Ville Platte 6,310 | 72,034 |
| East Feliciana-St. Helena-West Feliciana (Felicianas, Jackson/Clinton/St. Francisville) | Jackson 3,995 | 45,771 |
| Pointe Coupee-West Baton Rouge (west bank, Port Allen/New Roads) | Addis 6,729 (Port Allen 4,937) | 47,957 |
| Assumption-Iberville (Plaquemine, Bayou Lafourche, I-10 west of Baton Rouge) | St. Gabriel 6,435 (Plaquemine 6,275) | 51,288 |
| St. James-St. John the Baptist (River Road, one string of river towns) | Laplace (no pop in places.json; Lutcher 3,138 is the largest with a pop) | 62,678 |
| Plaquemines-St. Bernard (south-east of New Orleans, Chalmette/Belle Chasse) | Chalmette (no pop in places.json) | 67,280 |

Exceptions to the 50k rule: Avoyelles+Evangeline (72k), Plaquemines+St. Bernard (67k), Jackson+Lincoln (63k, Lincoln alone is 48k) and Allen+Beauregard (59k) end well above 50k, to avoid leaving tiny orphans (Jackson 15k, Allen 23k). Cameron-Jefferson Davis is only 38k, because Cameron's other neighbours (Calcasieu, Vermilion) are big. Groups of 3 with a river between (Pointe Coupee) were kept at 2.

### Alternative (40 regions)
Merge Vernon, Beauregard and Allen into one (109k total, Leesville/DeRidder, Fort Johnson). Pro: one region fewer, Vernon is not a lone 49k. Con: a very large piney-woods region and Allen-Evangeline link lost.
Second variant: Grant joins Natchitoches instead of Winn-LaSalle (Natchitoches-Grant 60k, Caldwell-LaSalle-Winn 39k): keeps I-49 together, Con: weaker Jena/Winnfield link.

### Map oddities
- The following neighbour pairs look doubtful and may be river-point contacts only: Avoyelles-West Feliciana, West Baton Rouge-East Feliciana, Lafourche-St. James. They are not used by the recommended merges, but they give the player extra unlock links across the Mississippi (West Baton Rouge/East Feliciana and Avoyelles/West Feliciana).
- Places with no population (CDPs without Census place estimates): Laplace, Chalmette, Arabi, Violet, Belle Chasse, Cameron, Hackberry, Bayou Cane (Terrebonne), and others in St. Bernard, Plaquemines, St. John, Cameron, Assumption. Chalmette and Laplace need a population from the build brief for them to be station sites; "New Orleans Station" (in Plaquemines) looks like an odd place name, and "Pleasure Bend" and "Bayou Corne" are tiny.
- Not checked: land cut oddly, missing land (map.js rings not inspected, per the brief).

## Phase 2: the pack

41 stations (one per region), 71 towns (1.7 per region; 8 scenic), 0 passes, 30 bridges, 1 bay, 4 levels. The checker passes with 0 errors and 0 warnings, all packs pass, and `node tools/test-pack.js LA` passes (17 of 17).

### Start
Orleans, Jefferson and St. Tammany (all touch each other). New Orleans is `coast` and Kenner is `metro`, so the first track (nearest pair of different types, New Orleans-Kenner, 12 miles) has riders; the pack test lays it.

### Stations: calls beyond "biggest place"
- Sizes follow the guide: New Orleans 4 (the parish is 384k but it is the core of a 1.3 million metro; judged against Omaha and St. Louis), Kenner and Baton Rouge 3, the other 50k+ regions 2, rural merged regions 1; Lafourche and Terrebonne (98k, 110k) 2.
- Moved to downtown (Census point more than a few km away): New Orleans (French Quarter/CBD), Baton Rouge (State Capitol), Shreveport, Lake Charles, Natchitoches (historic district), Gonzales, Houma, Monroe, Lafayette. The old Census points are in `raw/places.json`.
- Kenner, not Metairie (a CDP with no population, 5 miles from New Orleans): Jefferson's biggest city (66,463) and the site of Louis Armstrong New Orleans International, the only big airport marked (with Baton Rouge Metropolitan Airport, the state's second).
- Bossier City is put at Airline Drive (32.52, -93.67), 5 miles from Shreveport's downtown station (its own downtown is 1.5 miles from Shreveport's). Monroe at downtown; West Monroe (2 miles) and Pineville (1.5 miles from Alexandria) are not towns.
- CDP centres with no Census population, chosen by general knowledge: LaPlace (30.07, -90.48, the Census place point), Chalmette, Destrehan (St. Charles: Destrehan, Luling and Norco are the biggest CDPs, none in the data). The pop shown is the region's.
- Plaquemine rather than St. Gabriel (6,275 against 6,435, but Plaquemine is the seat and an old river town; St. Gabriel is a town). Addis (the biggest place of its region, 8 miles from Baton Rouge) rather than Port Allen (2.5 miles across the river from the Capitol) or New Roads (a town).
- Jena over Winnfield (4,161 against 4,144, a tie; Winnfield is a town); Ville Platte over Marksville (a town).
- Ports (only the real major ones): Port of New Orleans, Port of South Louisiana (LaPlace; the biggest by tonnage in the western hemisphere, so well known), Port of Greater Baton Rouge, Port of Lake Charles. Port Fourchon (Lafourche, offshore oil supply) is not marked. Airports: Louis Armstrong New Orleans International and Baton Rouge Metropolitan only (Shreveport Regional, Lafayette Regional and the others are small).
- IDs are unique across all packs; where a natural code was taken (KNR, JCKS, CRWL, SHV, MNDN, MNSF, ALEX, GRWD and others) a different one is used (KENR, JKLA, CRLY, SHRV, MDLA, MFLD, ALXA, GRNW...).
- Types: `coast` for New Orleans, Chalmette, Houma, Morgan City, Abbeville, Lake Charles; `metro` for the bigger cities and suburbs; `farm` for the rest (sugar cane, rice, cotton, pine country). No mountains or desert.

### Towns and scenic places
About 1.7 per region, the next-biggest places by the Census (several are CDPs without population: Belle Chasse, Buras, Chauvin, Cameron). Orleans has none (its only place is New Orleans). Scenic places (all well known; coordinates from the town point or the site):
- **French Quarter** (New Orleans, on the station), **Natchitoches** historic district (on the station: the oldest permanent settlement of the Louisiana Purchase, "Steel Magnolias").
- **Grand Isle** (29.21, -90.03: the inhabited barrier island, state park; Census place point).
- **Oak Alley Plantation** (30.00, -90.78, Vacherie).
- **Avery Island** (29.90, -91.91: Tabasco, Jungle Gardens).
- **Atchafalaya Basin** (30.32, -91.80: at Henderson, I-10 exit 115, the swamp tours; Census point for Henderson).
- **Cameron** (29.80, -93.29: the Creole Nature Trail, an All-American Road, and the Calcasieu Ship Channel ferry; Census place point).
- **Poverty Point** (32.64, -91.41: the World Heritage Site near Epps, West Carroll).
Not added: Port Fourchon, Rosedown (St. Francisville is a plain town), the plantations of River Road other than Oak Alley.

### Water, bridges and the bay
- `bays`: one ring, **Lake Pontchartrain** (and the Rigolets and Lake Borgne's western edge), wider than the lake: land inside the ring stays land (it is water only where the parishes' land is cut). Track crosses only at the bridges below or goes around. Lake Borgne's open water and Barataria Bay are not bays: track follows the coast there (Grand Isle to Golden Meadow and Buras to Chalmette are open in both modes).
- Lake Pontchartrain bridges: the **Causeway** (24 miles, Metairie 30.03, -90.13 to Mandeville 30.36, -90.08: three points on the straight line between the real ends: 30.05, 30.19, 30.33), the **I-10 Twin Span** (Slidell to New Orleans East; the midpoint is approximate: 30.15, -89.86), the **Rigolets Bridge (US-90)** (approximate: 30.17, -89.74), and the **I-55/US-51 bridges at Pass Manchac** (30.29, -90.41, at the north-east corner of Lake Maurepas, approximate). The US-11 bridge runs beside the Twin Span, so it has no separate point.
- Mississippi: Crescent City Connection, Huey P. Long (Jefferson), Hale Boggs (I-310), Gramercy (Veterans Memorial), Sunshine, Baton Rouge's Horace Wilkinson (I-10) and Huey P. Long (US-190), the Audubon Bridge (New Roads-St. Francisville), Natchez-Vidalia and Vicksburg. Coordinates are approximate (within about a mile, snapped onto the map's river line, as the other packs do, so the bridge is inside the crossing's radius).
- Other rivers: the Red (Shreveport's Texas Street Bridge, Coushatta, Colfax, Alexandria's Jackson Street Bridge), the Ouachita (Monroe-West Monroe US-80, Columbia), the Black (Jonesville), the Sabine (I-10 at Orange, the same point as Texas's pack), the Calcasieu (I-10 at Lake Charles; the Cameron Ferry), the Mermentau (I-10), the Amite (I-12) and the Pearl (I-10). Morgan City's Long-Allen Bridge (US-90) is by Grand Lake.
- Not listed: the I-10 Atchafalaya Basin Bridge and the Melville and Krotz Springs crossings (the Atchafalaya is not a river on the map, its basin is land inside the parishes, so 8 miles from any water on the map: the checker would warn), and Texas's US-190 Sabine crossing (Texas's pack has no such bridge; the Sabine and Toledo Bend are not crossed by any Louisiana link in Gentle).
- All bridge sources: general knowledge of the interstates and US and state routes (Wikipedia-level facts: bridge names and the towns they join); none is invented. The approximate ones are marked above.
- Sources for the rest: Census places for populations; the OpenStreetMap-style geography of I-10, I-12, I-20, I-49, I-55, US-90, US-167 and US-165 is general knowledge.

### Reachability (`NR.blockedReason`, Gentle and Tough)
- Every neighbouring pair of main stations is open in both modes except three, all lake crossings with real alternatives: **Hammond-LaPlace** (Tough: 11 miles across Lake Maurepas; open in Gentle; Hammond reaches Slidell, Denham Springs and others, and LaPlace reaches Kenner, Gonzales, Thibodaux, Destrehan), **Mansfield-San Augustine** (Tough: Toledo Bend, 4 miles) and **Jena-Ville Platte** (Tough: Catahoula Lake, 3 miles). No main station has fewer than two open neighbours in either mode.
- Every town has an open link to a main station within 60 miles (Grand Isle to Golden Meadow, Houma, Thibodaux, New Orleans; Buras to Chalmette and Belle Chasse). Grand Isle to Kenner is blocked in Tough only by distance.
- Corridors open as chains in both modes: I-10 (Beaumont, Orange, Lake Charles, Jennings, Crowley, Lafayette, Breaux Bridge, Plaquemine, Baton Rouge, Gonzales, LaPlace, Kenner, New Orleans, Slidell), I-12 (Baton Rouge, Denham Springs, Hammond, Slidell), I-49 (Lafayette, Opelousas, Alexandria, Natchitoches, Shreveport, Bossier City, Texarkana), I-20 (Marshall TX, Shreveport, Bossier City, Minden, Ruston, Monroe, Tallulah), US-90 (Lafayette, New Iberia, Morgan City, Houma, Thibodaux, Destrehan, Kenner), US-167 (El Dorado AR, Bastrop, Monroe, Alexandria, Ville Platte, Opelousas), US-165 (Monticello AR, Bastrop, Monroe, Jena, Alexandria, DeRidder, Lake Charles), US-171 (Shreveport, Mansfield, Minden).
- Into the neighbours: Orange and Beaumont (I-10), Marshall (I-20), Texarkana (I-30 and I-49/US-71 from Bossier City), El Dorado and Monticello (US-167, US-165) and Jasper/Newton (DeRidder) are open.

### Levels
1. New Orleans and the river parishes (8 regions): 50 passengers, 5 counties, 10 crates of produce.
2. Baton Rouge and the Florida Parishes (8): 140 passengers, connect New Orleans to Baton Rouge (I-10), 12 counties.
3. Acadiana and the south-west (12): 280 passengers, connect Baton Rouge to Lafayette (I-10), one high-speed train.
4. Shreveport, the Red River and the delta (13): 450 passengers, connect Shreveport to Alexandria (I-49), 25 counties.
Goal values follow Arkansas, Missouri and the other packs.

### Biomes
`forest`: the Piney Woods and Kisatchie hills (Vernon, Allen-Beauregard, Natchitoches, Grant-LaSalle-Winn, the north-west pine belt, Rapides), the Florida Parishes and the cypress swamp parishes of the south-east (as Texas's Piney Woods and Arkansas's pine belt). `wooded`: the bottomland hardwoods of the delta and the Ouachita and Red valleys. Unlisted (farmland): the Cajun prairie (rice, crawfish), sugar-cane country, the river parishes and the marsh. No `dry`.

### Unsure
- Approximate bridge coordinates (marked above); the Pass Manchac point had to sit 3.5 miles from the line Hammond-LaPlace (so Tough still blocks that one pair).
- Plaquemine versus St. Gabriel, Addis versus Port Allen, and Jena versus Winnfield are close calls.
- Phase 1's doubtful neighbour pairs (Avoyelles-West Feliciana, West Baton Rouge-East Feliciana, Lafourche-St. James) were removed or merged away by the merge list: the merged map's neighbours (counties.json) look right.

## Main agent's review

- **The Atchafalaya is on the map now.** Natural Earth calls it "Atchafalaya River", which the terrain tool's river list didn't match; the tool now takes it (as "Atchafalaya") and Louisiana's terrain is rebuilt. Its main channel runs from Simmesport past Krotz Springs and the I-10 crossing to Morgan City. Added bridges, on the map's river: the Atchafalaya Basin Bridge (I-10), US-190 at Krotz Springs and LA-1 at Simmesport (the Long-Allen Bridge at Morgan City was already listed). Rivers never block track, so no link closes; lines across the basin now pay one river crossing (cheap at those bridges).
