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
