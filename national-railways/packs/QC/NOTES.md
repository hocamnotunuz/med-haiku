# Quebec (QC) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied exactly, giving 65 regions: the `join` (Île d'Orléans → Côte-de-Beaupré), the `names` and the six extra bridges and ferries are in `STATES.QC`. Only the Magdalens have no neighbour, until Prince Edward Island is in the game. Phase 2 kept the region ids made from the census names, such as `qc-francheville` for Trois-Rivières and `qc-kamouraska-l-islet-montmagny` for the Côte-du-Sud.

Populations come from `packs/QC/raw/counties.json` and `packs/QC/raw/places.json` (Statistics Canada, 2021 Census). Distances are straight lines between `places.json` points. Roads, railways, bridges and ferries are marked "well known" or "from memory". A script checked that every merge group is connected through `neighbors`, and that no merge relies on a bridge-only link (the tool's merge check uses land borders only, see problem 9).

Quebec has 98 divisions. **61 are under 50,000**, not 60: Shawinigan has 49,620. 25 are under 20,000.

### Recommended (98 → 65 regions)

```
merge: [["Abitibi", "Abitibi-Ouest"], ["Rouyn-Noranda", "Témiscamingue"], ["Antoine-Labelle", "La Vallée-de-la-Gatineau"], ["Les Laurentides", "Les Pays-d'en-Haut"], ["Les Collines-de-l'Outaouais", "Pontiac"], ["Argenteuil", "Papineau"], ["Shawinigan", "Mékinac", "La Tuque"], ["D'Autray", "Maskinongé"], ["Portneuf", "La Jacques-Cartier"], ["Charlevoix", "Charlevoix-Est"], ["Manicouagan", "La Haute-Côte-Nord"], ["Sept-Rivières--Caniapiscau", "Minganie--Le Golfe-du-Saint-Laurent"], ["Le Domaine-du-Roy", "Maria-Chapdelaine"], ["La Côte-de-Gaspé", "Le Rocher-Percé"], ["Bonaventure", "Avignon"], ["La Matanie", "La Haute-Gaspésie"], ["La Mitis", "La Matapédia"], ["Rivière-du-Loup", "Témiscouata", "Les Basques"], ["Montmagny", "L'Islet", "Kamouraska"], ["Bellechasse", "Les Etchemins"], ["La Nouvelle-Beauce", "Robert-Cliche"], ["Lotbinière", "L'Érable"], ["Bécancour", "Nicolet-Yamaska"], ["Le Granit", "Le Haut-Saint-François"], ["Memphrémagog", "Coaticook"], ["Le Val-Saint-François", "Les Sources"], ["Les Maskoutains", "Acton"], ["Brome-Missisquoi", "Rouville"], ["Les Jardins-de-Napierville", "Le Haut-Saint-Laurent"]]
join: [["L'Île-d'Orléans", "La Côte-de-Beaupré"]]
names: {
  "Charlevoix & Charlevoix-Est": "Charlevoix",
  "Kamouraska & L'Islet & Montmagny": "Côte-du-Sud",
  "L'Île-d'Orléans & La Côte-de-Beaupré": "Côte-de-Beaupré & Île d'Orléans",
  "La Tuque & Mékinac & Shawinigan": "Shawinigan & Haute-Mauricie",
  "Les Basques & Rivière-du-Loup & Témiscouata": "Rivière-du-Loup, Témiscouata & Basques",
  "Minganie--Le Golfe-du-Saint-Laurent & Sept-Rivières--Caniapiscau": "Sept-Rivières & Minganie",
  "Bellechasse & Les Etchemins": "Bellechasse-Etchemins",
  "Francheville": "Trois-Rivières",
  "Le Saguenay-et-son-Fjord": "Saguenay",
  "Communauté maritime des Îles-de-la-Madeleine": "Îles-de-la-Madeleine"
}
bridges: add to the list already there
  ["Pierre-De Saurel", "D'Autray"],          // Sorel-Tracy–Saint-Ignace-de-Loyola ferry, all year
  ["Rivière-du-Loup", "Charlevoix-Est"],     // Rivière-du-Loup–Saint-Siméon ferry, seasonal
  ["Les Basques", "La Haute-Côte-Nord"],     // Trois-Pistoles–Les Escoumins ferry, seasonal
  ["La Matanie", "Manicouagan"],             // Matane–Baie-Comeau and Matane–Godbout ferry, all year
  ["Avignon", "NB:Restigouche"],             // J.C. Van Horne Bridge, Pointe-à-la-Croix–Campbellton (a safeguard; see below)
  ["Minganie--Le Golfe-du-Saint-Laurent", "NL:Division No. 9"], // Blanc-Sablon–St. Barbe ferry (NL name from memory)
```

The `names` keys are the tool's joined bases (members sorted with JavaScript's default sort and joined with " & "); a script printed them. The last three rename single divisions: the tool looks `names` up for any region, merged or not. "Francheville" is the census name of the Trois-Rivières division, which players won't recognise.

| # | Group | Why | Main station | Population |
| --- | --- | --- | --- | --- |
| 1 | Abitibi + Abitibi-Ouest | The two Abitibi MRCs, on the old National Transcontinental (CN) line and Rte 111 (from memory). La Sarre is 85 km from Amos | Amos (12,675) | 45,290 |
| 2 | Rouyn-Noranda + Témiscamingue | Rte 101 runs south from Rouyn-Noranda to Ville-Marie and Témiscaming (from memory). Ville-Marie is 106 km away | Rouyn-Noranda (42,313) | 58,445 |
| 3 | Antoine-Labelle + La Vallée-de-la-Gatineau | The upper Laurentian and upper Gatineau forest country on Rte 117, the Montréal–Val-d'Or road (well known). Maniwaki is 41 km from Mont-Laurier | Mont-Laurier (14,180) | 57,009 |
| 4 | Les Laurentides + Les Pays-d'en-Haut | The resort corridor along A-15/Rte 117 and the P'tit Train du Nord trail (well known): Saint-Sauveur, Sainte-Adèle, Sainte-Agathe, Mont-Tremblant. Sainte-Agathe is 15 km from Sainte-Adèle | Sainte-Adèle (14,010). Saint-Sauveur has 11,580; Mont-Tremblant (10,992) is the famous one | 97,683 |
| 5 | Les Collines-de-l'Outaouais + Pontiac | Rte 148 runs along the Ottawa River from Aylmer through Luskville and Quyon (in Les Collines) to Shawville (well known). Pontiac's only other small neighbour, La Vallée-de-la-Gatineau, is in group 3. Shawville is 64 km from Gatineau | Val-des-Monts (13,328), a spread-out municipality east of Gatineau. Phase 2 may prefer Chelsea or Wakefield | 69,262 |
| 6 | Argenteuil + Papineau | The north shore of the Ottawa River: A-50 (Gatineau–Mirabel, well known) and Rte 148. Saint-André-Avellin is 57 km from Lachute | Lachute (14,100) | 59,060 |
| 7 | Shawinigan + Mékinac + La Tuque | The Saint-Maurice valley: Rte 155, and the CN line of VIA's Montréal–Jonquière train through Hervey-Jonction and La Tuque (well known). Saint-Tite is 25 km from Shawinigan, La Tuque 100 km | Shawinigan (49,620) | 77,420 |
| 8 | D'Autray + Maskinongé | The north shore between Repentigny and Trois-Rivières: A-40 and Rte 138, the Chemin du Roy (well known). Louiseville is 26 km from Berthierville | Lavaltrie (14,425), at the west end. Berthierville (4,386) is central | 81,372 |
| 9 | join L'Île-d'Orléans → La Côte-de-Beaupré | The island's only bridge lands at Boischatel (well known). The Beaupré coast faces the island across a 2 km channel | Boischatel (8,231). Beaupré's population centre has 6,342 | 37,057 |
| 10 | Portneuf + La Jacques-Cartier | The Jacques-Cartier River runs from its national park through Shannon and Pont-Rouge to Donnacona (well known). Sainte-Catherine-de-la-Jacques-Cartier is 17 km from Saint-Raymond | Saint-Raymond (11,108). Ignore the false "Laurentides" (problem 2) | 103,336 |
| 11 | Charlevoix + Charlevoix-Est | One well-known region: Rte 138, the Charlevoix railway (Québec–La Malbaie), the UNESCO biosphere reserve. Baie-Saint-Paul is 36 km from La Malbaie | La Malbaie (8,235) | 28,780 |
| 12 | Manicouagan + La Haute-Côte-Nord | Rte 138 from Tadoussac to Baie-Comeau (well known). Forestville is 86 km from Baie-Comeau | Baie-Comeau (20,687) | 40,436 |
| 13 | Sept-Rivières–Caniapiscau + Minganie | Minganie's only neighbour. Rte 138 ends at Havre-Saint-Pierre (well known), 198 km from Sept-Îles | Sept-Îles (24,569) | 48,089 |
| 14 | Le Domaine-du-Roy + Maria-Chapdelaine | The west and north shores of Lac Saint-Jean on Rte 169 (well known). Saint-Félicien is 30 km from Dolbeau-Mistassini, Roberval 40 km | Dolbeau-Mistassini (13,718) | 55,244 |
| 15 | La Côte-de-Gaspé + Le Rocher-Percé | The tip of the peninsula on Rte 132 (well known). Chandler is 55 km from Gaspé | Gaspé (15,063) | 34,766 |
| 16 | Bonaventure + Avignon | The Baie des Chaleurs coast on Rte 132. New Richmond is 20 km from Carleton-sur-Mer | Carleton-sur-Mer (4,081) | 30,972 |
| 17 | La Matanie + La Haute-Gaspésie | The peninsula's north coast on Rte 132. Sainte-Anne-des-Monts is 82 km from Matane | Matane (13,987) | 31,833 |
| 18 | La Mitis + La Matapédia | The Matapédia valley road and VIA's Ocean line, from Sainte-Flavie and Mont-Joli to Amqui (well known). Amqui is 57 km from Mont-Joli | Mont-Joli (6,384) | 35,955 |
| 19 | Rivière-du-Loup + Témiscouata + Les Basques | Rivière-du-Loup's hinterland: the Trans-Canada (A-85/Rte 185) to Edmundston (well known). Témiscouata-sur-le-Lac is 52 km away, Trois-Pistoles 42 km | Rivière-du-Loup (20,118) | 63,703 |
| 20 | Montmagny + L'Islet + Kamouraska | The Côte-du-Sud on A-20, Rte 132 and VIA's Ocean line (well known). La Pocatière is 59 km from Montmagny | Montmagny (10,999) | 61,386 |
| 21 | Bellechasse + Les Etchemins | Rte 277 runs from Lévis through Saint-Henri and Saint-Anselme to Lac-Etchemin (from memory). They shared the Bellechasse–Les Etchemins–Lévis riding (well known) | Saint-Henri (5,813), 15 km from Lévis. Lac-Etchemin (4,028) is the alternative | 54,927 |
| 22 | La Nouvelle-Beauce + Robert-Cliche | The lower Chaudière valley on A-73/Rte 173 (well known). Beauceville is 31 km from Sainte-Marie | Sainte-Marie (13,134) | 57,241 |
| 23 | Lotbinière + L'Érable | Rte 116 and the old Grand Trunk line, Lévis–Laurier-Station–Plessisville–Victoriaville (from memory). Plessisville is 37 km from Laurier-Station | Saint-Apollinaire (7,968; population centre 4,933). Plessisville's population centre is bigger (7,028) | 58,120 |
| 24 | Bécancour + Nicolet-Yamaska | The south shore facing Trois-Rivières, on Rte 132. Nicolet is 19 km from Bécancour | Bécancour (13,561) | 44,596 |
| 25 | Le Granit + Le Haut-Saint-François | The rail line from Sherbrooke through Cookshire to Lac-Mégantic and Maine (from memory). Cookshire-Eaton is 61 km from Lac-Mégantic | Lac-Mégantic (5,747) | 44,874 |
| 26 | Memphrémagog + Coaticook | The Vermont border strip south of Sherbrooke. Coaticook is 30 km from Magog | Magog (28,312) | 73,703 |
| 27 | Le Val-Saint-François + Les Sources | Richmond, Danville and Val-des-Sources (Asbestos) on Rte 116 (from memory). Richmond is 20 km from Val-des-Sources | Val-des-Sources (7,088) | 46,174 |
| 28 | Les Maskoutains + Acton | Acton Vale is 30 km from Saint-Hyacinthe on Rte 116 (from memory). Acton's only small neighbour, Le Val-Saint-François, is in group 27 | Saint-Hyacinthe (57,239) | 105,086 |
| 29 | Brome-Missisquoi + Rouville | Every neighbour of Rouville has 65,000 or more; Brome-Missisquoi is the smallest. A-10 runs through both (from memory). Cowansville is 31 km from Saint-Césaire | Cowansville (15,234) | 102,675 |
| 30 | Les Jardins-de-Napierville + Le Haut-Saint-Laurent | Farmland along the New York border. Ormstown is 33 km from Saint-Rémi | Saint-Rémi (8,957) | 52,552 |

**Left alone under 50,000 (exceptions):**
- **Nord-du-Québec (45,740).** One census division covering Jamésie, Eeyou Istchee and Kativik: about half of Quebec's land already. Station Chibougamau (7,233), on Rte 167 to Saint-Félicien and Rte 113 to Senneterre (from memory).
- **La Vallée-de-l'Or (43,347).** Val-d'Or (32,752) is Abitibi's second city and a gold-mining centre. It is 57 km from Amos and 92 km from Rouyn-Noranda, and Rte 117 from Montréal enters Abitibi here (well known). Merging it with Abitibi would take Amos's station away (see the alternative).
- **Les Appalaches (43,412).** Thetford Mines (26,072) is the asbestos-mining city (well known), the only real city between Lévis, Sherbrooke and Victoriaville. Its small neighbours pair better elsewhere (groups 22, 23, 25 and 27).
- **Îles-de-la-Madeleine (12,654).** Islands with no neighbour. The ferry from Souris already counts once Prince Edward Island is in the game. Until then the region can't be unlocked.

Every other division left alone has 51,843 people or more (the smallest are Pierre-De Saurel, Lac-Saint-Jean-Est and Beauce-Sartigan).

### Alternative (98 → 64 regions)

Replace groups 1, 2, 25 and 26 with `["La Vallée-de-l'Or", "Abitibi"]` (68,111; Val-d'Or), `["Rouyn-Noranda", "Abitibi-Ouest", "Témiscamingue"]` (78,971; Rouyn-Noranda), `["Les Appalaches", "Le Granit"]` (65,360; Thetford Mines) and `["Le Haut-Saint-François", "Coaticook"]` (41,832; Coaticook). Memphrémagog then stays alone.
- **Pro:** the 50k rule holds everywhere except the far north and the islands, and there is one region fewer.
- **Con:** Amos and Lac-Mégantic lose their stations. Rouyn-Noranda's region runs from Témiscaming to La Sarre. Thetford Mines is 66 km from Lac-Mégantic, and Coaticook and Cookshire are not a natural pair.

Other options I weighed:
- **La Tuque on its own:** `["La Tuque", "Mékinac"]` (27,800; La Tuque), with Shawinigan alone (380 short of 50k). La Tuque keeps a station, at the cost of one more region.
- **The Québec urban community's three rural MRCs** (Côte-de-Beaupré, Île d'Orléans, Jacques-Cartier; 84,870; Stoneham-et-Tewkesbury), with Portneuf alone. This needs a tool change (problem 9).
- **Rouville with Le Haut-Richelieu.** Marieville is 16 km from Saint-Jean-sur-Richelieu, against 42 km from Cowansville, but that region would reach 159,000.
- **Les Basques with Rimouski-Neigette.** Trois-Pistoles is 60 km from Rimouski against 42 km from Rivière-du-Loup.
- **Pontiac with La Vallée-de-la-Gatineau** (Rte 301, from memory). Then Antoine-Labelle goes with Les Laurentides and Les Pays-d'en-Haut stays alone (46,906).

### Water crossings

- **Add (well known):**
  - Sorel-Tracy–Saint-Ignace-de-Loyola.
  - Rivière-du-Loup–Saint-Siméon.
  - Trois-Pistoles–Les Escoumins.
  - Matane–Baie-Comeau/Godbout.

  None of these pairs are neighbours today.
- **Already neighbours:** Tadoussac–Baie-Sainte-Catherine (La Haute-Côte-Nord and Charlevoix-Est), and every bridge in the current list.
- **Inside one division:** Île-aux-Coudres, Isle-aux-Grues, L'Isle-Verte, Anticosti and the Lower North Shore boats.
- **Optional:** `["Vaudreuil-Soulanges", "Deux-Montagnes"]`, the Hudson–Oka ferry (seasonal). Both sides already touch Montréal or Laval, so it adds little.
- **Left out:** the Rimouski–Forestville ferry, because I'm not sure it still runs.
- **For later provinces:**
  - **Avignon–Restigouche (NB):** the J.C. Van Horne Bridge, in case the river border doesn't touch.
  - **Minganie–Newfoundland's Northern Peninsula (NL):** the Blanc-Sablon–St. Barbe ferry. Check NL's division name when it is built.

### Map and data problems seen

1. **Betsiamites (Pessamit, a 2,104 population centre) is tagged `qc-rimouski-neigette`.** Its point (48.94, -68.64) is on the North Shore, just offshore and in no region. It belongs to Manicouagan.
2. **The "Laurentides" population centre (15,768) is given to three points.** That figure is Saint-Lin–Laurentides in Montcalm. The other two points are in Antoine-Labelle (46.43, -74.98, kind municipality) and Portneuf (47.14, -72.28). There it outranks Mont-Laurier and Saint-Raymond, so ignore it when picking stations. The "Saint-Lin–Laurentides" city point itself has no population.
3. **"Domaine-Ouellet" (3,391, a population centre) appears in both L'Assomption and Maskinongé.** At most one of them is right.
4. **"Pontiac" (the municipality, 6,142, in Les Collines) has a second point at (46.05, -76.92).** That point lies inside the Pontiac MRC. The village point (45.53, -76.00, near Luskville) is the right one.
5. **Points just offshore, in no region.** These include Terrebonne (the biggest place in Les Moulins), Varennes, Sainte-Catherine, Pincourt, Les Îles-de-la-Madeleine, Sainte-Anne-des-Monts, Neuville, Oka and Saint-Ignace-de-Loyola (its island is under 25 km² and was left out). Phase 2 should nudge stations onto land.
6. **Names.**
   - "Sept-Rivières--Caniapiscau" and "Minganie--Le Golfe-du-Saint-Laurent" carry Statistics Canada's double hyphen, its ASCII stand-in for a dash.
   - "Francheville" and "Le Saguenay-et-son-Fjord" are census names for Trois-Rivières and Saguenay.

   The `names` above fix all of these.
7. **The far north is a single region**, because Nord-du-Québec is one census division. Sept-Rivières–Caniapiscau has two detached pieces between 54.6° and 55°N, split off by the Labrador border. 55°N is the Côte-Nord/Nord-du-Québec line (from memory), so this looks right.
8. **`neighbors` look right.** I found no false or missing land border. The ferry pairs above are the only missing links.
9. **Tool limit: an island can't join a merge group.**
   - The merge check (`build-map.js`, around line 649) uses land borders only, so a merge that includes L'Île-d'Orléans would throw.
   - `join` and `merge` on the same mainland would conflict: the merge overwrites the mainland's group, and the island is left in a stale array.
   - That's why Orléans is a `join` and La Jacques-Cartier goes with Portneuf. If the tool let `join` add the island to its mainland's merge group, the urban-community option above becomes possible.

## The pack (phase 2)

Everything below is in `pack.js`. Facts come from `raw/` unless another source is named:
- populations: Statistics Canada, 2021 Census;
- places and parks: the Canadian Geographical Names Database (GNDB).

Coordinates are rounded to 2 decimals. Station `pop` is the region's population in thousands from `counties.json` (a script checked all 65). Distances are straight lines. Roads, railways, ferries, bridges and sights marked "well known" are added by hand. A few positions are "from memory", and these are marked too.

### Start

`start: ["qc-montreal", "qc-laval", "qc-vaudreuil-soulanges"]`: Montréal (metro), Laval (metro) and Vaudreuil-Dorion (coast).
- Laval and Vaudreuil-Soulanges both touch Montréal.
- Longueuil is as big as Laval, but Montréal, Laval and Longueuil are all metro, so in "type of place" mode the first track would carry nobody (the checker refuses it).
- **Why Vaudreuil-Dorion is coast:** it sits on the peninsula where the Ottawa meets the St. Lawrence, between the Lake of Two Mountains and Lac Saint-Louis. The region's towns (Hudson, Île-Perrot, Pincourt, Coteau-du-Lac, Rigaud) all line those lakes (well known). This is like Oshawa in Ontario.
- **Pack test:** it laid Laval–Vaudreuil-Dorion (22 mi), and 16 passengers arrived in the first week. Longueuil, across the Jacques-Cartier bridge, is the obvious first region to buy.

### Main stations (65)

| Id | Station | Region | Type | Size | Pop (k) | Level | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MTL | Montréal | Montréal | metro | 5 | 2004 | montreal | port: Port of Montréal; airport: Montréal–Trudeau International |
| LAV | Laval | Laval | metro | 4 | 438 | montreal |  |
| LGL | Longueuil | Longueuil | metro | 4 | 437 | montreal |  |
| CHG | Châteauguay | Roussillon | metro | 2 | 186 | montreal |  |
| VDR | Vaudreuil-Dorion | Vaudreuil-Soulanges | coast | 2 | 163 | montreal |  |
| TBN | Terrebonne | Les Moulins | metro | 2 | 171 | montreal |  |
| BLN | Blainville | Thérèse-De Blainville | metro | 2 | 164 | montreal |  |
| SEU | Saint-Eustache | Deux-Montagnes | metro | 2 | 102 | montreal |  |
| RPG | Repentigny | L'Assomption | metro | 2 | 128 | montreal |  |
| SJL | Sainte-Julie | Marguerite-D'Youville | farm | 1 | 80 | montreal |  |
| CHB | Chambly | La Vallée-du-Richelieu | metro | 2 | 132 | montreal |  |
| MIR | Mirabel | Mirabel | farm | 1 | 61 | montreal |  |
| VLF | Salaberry-de-Valleyfield | Beauharnois-Salaberry | coast | 1 | 68 | south |  |
| SRM | Saint-Rémi | Le Haut-Saint-Laurent & Les Jardins-de-Napierville | farm | 1 | 53 | south |  |
| SJR | Saint-Jean-sur-Richelieu | Le Haut-Richelieu | metro | 2 | 121 | south |  |
| CWV | Cowansville | Brome-Missisquoi & Rouville | farm | 1 | 103 | south |  |
| GBY | Granby | La Haute-Yamaska | metro | 2 | 93 | south |  |
| SHY | Saint-Hyacinthe | Acton & Les Maskoutains | farm | 2 | 105 | south |  |
| SOR | Sorel-Tracy | Pierre-De Saurel | coast | 1 | 52 | south |  |
| DRU | Drummondville | Drummond | metro | 2 | 108 | south |  |
| SHE | Sherbrooke | Sherbrooke | metro | 2 | 173 | south |  |
| MAG | Magog | Coaticook & Memphrémagog | mountain | 1 | 74 | south |  |
| VDS | Val-des-Sources | Le Val-Saint-François & Les Sources | farm | 1 | 46 | south |  |
| LMG | Lac-Mégantic | Le Granit & Le Haut-Saint-François | mountain | 1 | 45 | south |  |
| VTV | Victoriaville | Arthabaska | farm | 1 | 74 | south |  |
| BEC | Bécancour | Bécancour & Nicolet-Yamaska | farm | 1 | 45 | south |  |
| THM | Thetford Mines | Les Appalaches | mountain | 1 | 43 | south |  |
| SJM | Saint-Jérôme | La Rivière-du-Nord | metro | 2 | 140 | west |  |
| SLL | Saint-Lin–Laurentides | Montcalm | farm | 1 | 59 | west |  |
| JOL | Joliette | Joliette | farm | 1 | 71 | west |  |
| RWD | Rawdon | Matawinie | mountain | 1 | 56 | west |  |
| LVT | Lavaltrie | D'Autray & Maskinongé | farm | 1 | 81 | west |  |
| SAD | Sainte-Adèle | Les Laurentides & Les Pays-d'en-Haut | mountain | 1 | 98 | west |  |
| LCH | Lachute | Argenteuil & Papineau | farm | 1 | 59 | west |  |
| GAT | Gatineau | Gatineau | metro | 3 | 291 | west |  |
| VDM | Val-des-Monts | Les Collines-de-l'Outaouais & Pontiac | mountain | 1 | 69 | west |  |
| MLR | Mont-Laurier | Antoine-Labelle & La Vallée-de-la-Gatineau | mountain | 1 | 57 | west |  |
| TR | Trois-Rivières | Trois-Rivières | metro | 2 | 158 | west |  |
| SHW | Shawinigan | Shawinigan & Haute-Mauricie | mountain | 1 | 77 | west |  |
| RYN | Rouyn-Noranda | Rouyn-Noranda & Témiscamingue | mountain | 1 | 58 | west |  |
| VDO | Val-d'Or | La Vallée-de-l'Or | mountain | 1 | 43 | west |  |
| AMS | Amos | Abitibi & Abitibi-Ouest | farm | 1 | 45 | west |  |
| CBM | Chibougamau | Nord-du-Québec | mountain | 1 | 46 | west |  |
| QUE | Québec | Québec | metro | 4 | 589 | east | port: Port of Québec; airport: Québec City Jean Lesage International; scenic |
| LEV | Lévis | Lévis | metro | 2 | 150 | east |  |
| SRY | Saint-Raymond | La Jacques-Cartier & Portneuf | mountain | 1 | 103 | east |  |
| BPR | Beaupré | Côte-de-Beaupré & Île d'Orléans | mountain | 1 | 37 | east |  |
| LMB | La Malbaie | Charlevoix | coast | 1 | 29 | east |  |
| SNH | Saint-Henri | Bellechasse-Etchemins | farm | 1 | 55 | east |  |
| SMR | Sainte-Marie | La Nouvelle-Beauce & Robert-Cliche | farm | 1 | 57 | east |  |
| SGE | Saint-Georges | Beauce-Sartigan | farm | 1 | 53 | east |  |
| PLS | Plessisville | L'Érable & Lotbinière | farm | 1 | 58 | east |  |
| MMG | Montmagny | Côte-du-Sud | coast | 1 | 61 | east |  |
| RDL | Rivière-du-Loup | Rivière-du-Loup, Témiscouata & Basques | coast | 1 | 64 | east |  |
| RIM | Rimouski | Rimouski-Neigette | coast | 1 | 57 | east |  |
| MJL | Mont-Joli | La Matapédia & La Mitis | farm | 1 | 36 | east |  |
| MTN | Matane | La Haute-Gaspésie & La Matanie | coast | 1 | 32 | east |  |
| GSP | Gaspé | La Côte-de-Gaspé & Le Rocher-Percé | coast | 1 | 35 | east |  |
| CSM | Carleton-sur-Mer | Avignon & Bonaventure | coast | 1 | 31 | east |  |
| IDM | Îles-de-la-Madeleine | Îles-de-la-Madeleine | coast | 1 | 13 | east | scenic |
| SAG | Saguenay | Saguenay | metro | 2 | 168 | east | port: Port of Saguenay |
| ALM | Alma | Lac-Saint-Jean-Est | farm | 1 | 52 | east |  |
| DOL | Dolbeau-Mistassini | Le Domaine-du-Roy & Maria-Chapdelaine | mountain | 1 | 55 | east |  |
| BCM | Baie-Comeau | La Haute-Côte-Nord & Manicouagan | coast | 1 | 40 | east |  |
| SEP | Sept-Îles | Sept-Rivières & Minganie | coast | 1 | 48 | east | port: Port of Sept-Îles |

**Sizes.** These follow the brief and Ontario's rule.
- Montréal is 5.
- Size 4: Québec, Laval and Longueuil (0.4–0.6 million, and they are the province's next-biggest cities).
- Size 3: Gatineau (291k). It is just under the guide's 350k band, but it is the Quebec half of the 1.4-million Ottawa–Gatineau area (well known). Ontario gave Windsor (423k) a 3.
- Size 2: a region of 100–300k with a real city of about 40,000 or more, or a city over 50,000. That covers:
  - Lévis, Saguenay, Sherbrooke and Trois-Rivières;
  - Saint-Jérôme, Saint-Jean-sur-Richelieu, Drummondville, Saint-Hyacinthe and Granby;
  - the Montréal suburbs of 100–190k: Châteauguay, Vaudreuil-Dorion, Terrebonne, Blainville, Saint-Eustache, Repentigny and Chambly.
- Size 1: everything else. This includes Valleyfield (42,787 in a 68k region), Victoriaville (47,760 in 74k), Rimouski (48,935 in 57k) and Shawinigan (49,620, just under 50,000). Ontario's rule puts them at 1.

**Types.**
- **Metro:** the big cities and the Montréal suburbs, plus Trois-Rivières, Sherbrooke, Saguenay, Lévis, Gatineau, Granby, Drummondville, Saint-Jean and Saint-Jérôme.
- **Coast:**
  - the St. Lawrence and gulf towns: La Malbaie, Montmagny, Rivière-du-Loup, Rimouski, Matane, Gaspé, Carleton-sur-Mer, Baie-Comeau, Sept-Îles and the Magdalens;
  - Sorel-Tracy, at the mouth of the Richelieu, with its shipyards (well known);
  - Valleyfield, on Lac Saint-François and the Beauharnois Canal;
  - Vaudreuil-Dorion (see Start).
- **Mountain:** the game's type for forested hill country, as in Ontario.
  - The Laurentians: Sainte-Adèle, Rawdon, Mont-Laurier and Val-des-Monts.
  - The Mauricie and the Shield: Shawinigan, Rouyn-Noranda, Val-d'Or, Chibougamau and Dolbeau-Mistassini.
  - The Appalachians: Lac-Mégantic, Thetford Mines and Magog (at the foot of Mont Orford).
  - Saint-Raymond, at the foot of the Laurentians.
  - Beaupré, under Mont-Sainte-Anne.
- **Farm:** the farm towns. These are:
  - Saint-Hyacinthe, Quebec's agri-food capital, with its agricultural technopole and veterinary school (well known); this is like Guelph in Ontario;
  - Victoriaville, Cowansville, Saint-Rémi (the market gardens of the Jardins-de-Napierville), Mirabel (mostly farmland around its airport) and Sainte-Julie;
  - Joliette, Lavaltrie, Saint-Lin–Laurentides, Lachute, Amos (the Abitibi clay belt) and Alma (the Lac-Saint-Jean lowlands);
  - Plessisville, Bécancour, Val-des-Sources, Saint-Henri, Sainte-Marie, Saint-Georges and Mont-Joli.

**Ports and airports.**
- **Ports.** They follow the bar of the other packs, which give `port` to real cargo seaports (Coos Bay, Grays Harbor, Hamilton, Thunder Bay):
  - **Port of Montréal:** a container port (well known);
  - **Port of Québec:** a deep-water port (well known);
  - **Port of Sept-Îles:** iron ore, at the end of the railways from Labrador and Schefferville (well known);
  - **Port of Saguenay:** its Grande-Anse terminal is on the fjord at La Baie (well known).

  No `port` for Trois-Rivières, Bécancour, Baie-Comeau or Gaspé, which are smaller.
- **Airports.** Montréal–Trudeau International (at Dorval, on the island) and Québec City Jean Lesage International only.

**Scenic main stations.**
- **Québec:** Old Québec is a UNESCO World Heritage Site (well known).
- **Îles-de-la-Madeleine:** a well-known holiday destination.

**Exceptions to "the biggest town", and moved points.**
- **Montréal** sits downtown by Gare Centrale (45.50, -73.57; well known). The raw city point (45.51, -73.55) is in Old Montréal.
- **Laval** sits at its downtown by the Montmorency métro (45.56, -73.72; well known). The raw point (45.55, -73.74) is in Chomedey.
- **Longueuil** sits in Vieux-Longueuil (45.54, -73.50). The raw point (45.51, -73.43) is the merged city's middle, in Saint-Hubert. The station is about 1 km east of the métro, so it stands 4 miles from Montréal's station: closer, the checker warns.
- **Terrebonne:** its raw point (45.69, -73.63) is in the Rivière des Mille Îles, so it was moved 1 km north onto land (45.70, -73.64).
- **Lévis:** the raw city point (46.76, -71.24) is the middle of the merged city, at Saint-Romuald by the bridges. The station is 1 km south of it (46.75, -71.24). Vieux-Lévis faces Old Québec only 2 km away, and at the raw point the two stations were 3.7 miles apart.
- **Carleton-sur-Mer** was moved 1 km north (48.11, -66.12), off the map's shore.
- **Saint-Lin–Laurentides (Montcalm).** The city point has no population. The region's biggest place is the "Laurentides" population centre (15,768), which is this town, so the station sits at the city point (45.85, -73.76). The same population centre is copied wrongly onto points in Antoine-Labelle and Portneuf (phase 1, problem 2); those were ignored.
- **Beaupré rather than Boischatel** (8,231). Boischatel is a suburb inside Québec's population centre. Beaupré's population centre (6,342, which includes Sainte-Anne-de-Beaupré) is the region's biggest stand-alone town, at the foot of Mont-Sainte-Anne.
- **Plessisville rather than Saint-Apollinaire** (7,968). Plessisville's population centre (7,028) is bigger than Saint-Apollinaire's (4,933).
- **Saint-Henri** (5,813) is kept as the biggest town on `pop`, although it is only 15 km from Lévis. Lac-Etchemin (4,028) is a town.
- **Val-des-Monts** (13,328) is kept as the biggest municipality. It is a spread-out place in the Gatineau Hills, with no single town. Chelsea (Gatineau Park) is a scenic town instead.
- **Lavaltrie** (14,425) is kept as the biggest town, at the west end of its region. Berthierville (where the Sorel ferry lands) and Louiseville are towns.
- **Dolbeau-Mistassini** (13,718) is the biggest town. Roberval and Saint-Félicien are towns.

**Ids:** every id is unique across all packs (the checker). Draft ids that clashed with other packs were renamed (Mont-Saint-Hilaire is `MHI`, Bromont `BRO`, Percé `PRE` and so on).

### Towns (94, about 1.45 per region)

| Region | Towns |
| --- | --- |
| Montréal | Pointe-Claire (metro) |
| Longueuil | Brossard (metro 2); Boucherville (metro) |
| Roussillon | Saint-Constant (metro) |
| Vaudreuil-Soulanges | Hudson (coast); Rigaud (farm) |
| Les Moulins | Mascouche (metro) |
| Thérèse-De Blainville | Sainte-Anne-des-Plaines (farm) |
| Deux-Montagnes | Oka (scenic, coast) |
| L'Assomption | L'Assomption (farm) |
| Marguerite-D'Youville | Varennes (coast) |
| La Vallée-du-Richelieu | Mont-Saint-Hilaire (farm) |
| Beauharnois-Salaberry | Beauharnois (coast) |
| Le Haut-Saint-Laurent & Les Jardins-de-Napierville | Ormstown (farm) |
| Le Haut-Richelieu | Lacolle (farm) |
| Brome-Missisquoi & Rouville | Bromont (mountain); Marieville (farm) |
| La Haute-Yamaska | Waterloo (farm) |
| Acton & Les Maskoutains | Acton Vale (farm) |
| Coaticook & Memphrémagog | Coaticook (farm); Mont-Orford (scenic, mountain) |
| Le Val-Saint-François & Les Sources | Windsor (farm); Richmond (farm) |
| Le Granit & Le Haut-Saint-François | East Angus (farm); Mont-Mégantic (scenic, mountain) |
| Arthabaska | Warwick (farm) |
| Bécancour & Nicolet-Yamaska | Nicolet (coast) |
| Les Appalaches | Disraeli (mountain) |
| La Rivière-du-Nord | Prévost (mountain) |
| Montcalm | Sainte-Julienne (farm) |
| Matawinie | Saint-Donat (mountain); Saint-Michel-des-Saints (mountain) |
| D'Autray & Maskinongé | Berthierville (farm); Louiseville (farm) |
| Les Laurentides & Les Pays-d'en-Haut | Mont-Tremblant (scenic, mountain); Sainte-Agathe-des-Monts (mountain) |
| Argenteuil & Papineau | Montebello (scenic, coast); Thurso (farm) |
| Gatineau | Aylmer (metro); Buckingham (metro) |
| Les Collines-de-l'Outaouais & Pontiac | Chelsea (scenic, mountain); Shawville (farm) |
| Antoine-Labelle & La Vallée-de-la-Gatineau | Maniwaki (mountain); Rivière-Rouge (mountain) |
| Trois-Rivières | Sainte-Anne-de-la-Pérade (coast) |
| Shawinigan & Haute-Mauricie | La Tuque (mountain); Saint-Tite (farm); La Mauricie (scenic, mountain) |
| Rouyn-Noranda & Témiscamingue | Ville-Marie (farm); Témiscaming (mountain) |
| La Vallée-de-l'Or | Malartic (mountain); Senneterre (mountain) |
| Abitibi & Abitibi-Ouest | La Sarre (farm) |
| Nord-du-Québec | Matagami (mountain); Radisson (mountain); Kuujjuaq (coast) |
| Québec | Saint-Augustin-de-Desmaures (metro) |
| La Jacques-Cartier & Portneuf | Donnacona (coast); Stoneham (mountain) |
| Côte-de-Beaupré & Île d'Orléans | Chute-Montmorency (scenic, coast); Île d'Orléans (scenic, farm) |
| Charlevoix | Baie-Saint-Paul (scenic, mountain); L'Isle-aux-Coudres (coast); Saint-Siméon (coast) |
| Bellechasse-Etchemins | Lac-Etchemin (mountain) |
| La Nouvelle-Beauce & Robert-Cliche | Beauceville (farm) |
| L'Érable & Lotbinière | Saint-Apollinaire (farm); Princeville (farm) |
| Côte-du-Sud | La Pocatière (farm); Saint-Jean-Port-Joli (coast) |
| Rivière-du-Loup, Témiscouata & Basques | Trois-Pistoles (coast); Témiscouata-sur-le-Lac (mountain) |
| Rimouski-Neigette | Le Bic (scenic, coast) |
| La Matapédia & La Mitis | Amqui (mountain); Jardins de Métis (scenic, coast) |
| La Haute-Gaspésie & La Matanie | Sainte-Anne-des-Monts (coast); Parc de la Gaspésie (scenic, mountain) |
| La Côte-de-Gaspé & Le Rocher-Percé | Percé (scenic, coast); Chandler (coast); Forillon (scenic, coast) |
| Avignon & Bonaventure | Bonaventure (coast); Pointe-à-la-Croix (mountain) |
| Saguenay | Jonquière (metro 2); La Baie (coast) |
| Lac-Saint-Jean-Est | Métabetchouan (farm) |
| Le Domaine-du-Roy & Maria-Chapdelaine | Roberval (farm); Saint-Félicien (farm); Val-Jalbert (scenic, mountain) |
| La Haute-Côte-Nord & Manicouagan | Tadoussac (scenic, coast); Les Escoumins (coast); Forestville (coast) |
| Sept-Rivières & Minganie | Port-Cartier (coast); Havre-Saint-Pierre (scenic, coast); Fermont (mountain) |

Towns are size 1 unless shown; Brossard (91,525) and Jonquière (the Saguenay borough) are 2, like Ontario's second cities. Town points are `places.json` town, city, village or locality points unless noted. No towns in Laval, Lévis, Sherbrooke, Joliette and Mirabel (single cities, or nothing far enough from the station), Drummond, Pierre-De Saurel and Beauce-Sartigan (no second town worth it), or the Magdalens.

**Scenic places (18 towns).** All are well known.

| Town | What | Point |
| --- | --- | --- |
| Oka | Parc national d'Oka (the beach, the Calvary) and the abbey | `parks.json` 45.478, -74.024 |
| Mont-Orford | Parc national du Mont-Orford (ski hill, lakes) | `parks.json` 45.333, -72.217 |
| Mont-Mégantic | the observatory, in the first International Dark Sky Reserve | `parks.json` 45.449, -71.164 |
| Mont-Tremblant | the ski resort | its village at the foot of the mountain, 46.21, -74.58 (from memory). The city point, 46.12, -74.60, is Saint-Jovite, 10 km south |
| Montebello | the Château Montebello, the big log hotel | the village |
| Chelsea | Gatineau Park's main entrance and visitor centre | the village; the park is at `parks.json` 45.567, -75.950 |
| La Mauricie | La Mauricie National Park | `parks.json` 46.80, -72.967 |
| Chute-Montmorency | Montmorency Falls, taller than Niagara | 46.89, -71.14, on the Boischatel side of the gorge, in the Beaupré region. The park's point, 46.889, -71.146, falls in Québec's region on the map |
| Île d'Orléans | the island's farms, orchards and old villages | Saint-Laurent-de-l'Île-d'Orléans |
| Baie-Saint-Paul | Charlevoix's art town | the city |
| Le Bic | Parc national du Bic | the village; the park is at `parks.json` 48.35, -68.783 |
| Jardins de Métis | the Reford Gardens | the Grand-Métis village point (48.62, -68.11), 4.2 miles from Mont-Joli |
| Parc de la Gaspésie | Mont Albert and the Chic-Chocs | `parks.json` 48.933, -66.283 |
| Percé | the Rocher Percé and Bonaventure Island's gannets | the city |
| Forillon | Forillon National Park | `parks.json` 48.90, -64.35 |
| Val-Jalbert | the ghost mill village by its falls | the GNDB locality |
| Tadoussac | whale watching where the Saguenay meets the St. Lawrence (the Saguenay–St. Lawrence Marine Park) | the town |
| Havre-Saint-Pierre | the Mingan Archipelago's limestone monoliths | the village |

**Ferry towns.** They are there so the ferries have someone to carry, like South Baymouth in Ontario:
- Berthierville, for the Sorel ferry (it lands at Saint-Ignace-de-Loyola, next door);
- Saint-Siméon (1,139), moved 1 km inland onto the map's land;
- Trois-Pistoles and Les Escoumins.

L'Isle-aux-Coudres is a town too, but its ferry needs no point (see Water).

**Other moved points:**
- Saint-Jean-Port-Joli is just inland of the map's shore.
- Mascouche was moved 1 km north (45.76, -73.60), 4 miles from Terrebonne.
- **Radisson** was nudged 5 km west of the village (53.79, -77.70). At the village (53.79, -77.62), every line south crossed an arm of the map's La Grande 2 reservoir and was blocked in Tough. Moved, it opens to Amos, Val-d'Or and Kuujjuaq in both modes.

**Left out:**
- **Raw-data mistakes:** Betsiamites (Pessamit; its population centre is tagged Rimouski-Neigette, but it is on the North Shore). The "Laurentides" points in Antoine-Labelle and Portneuf. The duplicate "Domaine-Ouellet". The second "Pontiac" point.
- **Too close to a station:** Lennoxville, which is 2.7 miles from Sherbrooke.
- **Not well-known enough to call scenic:** Radisson's dams. Radisson stays as a plain town.
- **To stay near 1.5 per region:** Sainte-Luce, Kamouraska, New Richmond, Chisasibi, Mistissini and Fort-Coulonge.

### Passes (0)

Quebec has only a few mountain cells on the terrain grid. They are in:
- the Chic-Chocs;
- the Charlevoix and Saguenay highlands;
- the Laurentides wildlife reserve;
- the hills behind Sept-Îles;
- the interior of the Gaspé peninsula.

No tested link is blocked by mountains. The longest tunnels are short:
- La Malbaie–Saguenay, 11 mi;
- Sainte-Anne-des-Monts–Gaspé, 9 mi;
- Matane–Gaspé, 7 mi;
- Saguenay–Sept-Îles, 3 mi (Tough).

These are all under the 15-mile Tough limit. The roads there (Routes 170 and 381, Route 132 round the peninsula) follow valleys and shores, and I know of no well-known named pass to put on them. Like Ontario, there are none.

### Water: the St. Lawrence

**What the map has:**
- **The St. Lawrence** is outside the land from Lac Saint-Louis to the gulf, and so are Lac Saint-Louis, the Lake of Two Mountains, Lac Saint-François and Lac Memphrémagog (Statistics Canada's boundaries are cut at the shore).
- **The Saguenay fjord is land.** Its census divisions aren't cut at the fjord, and no river line runs below Chicoutimi. A bay can't change that, because land always wins over a bay. So the fjord never blocks track. For the main agent: this needs a terrain or map change if the fjord should matter.
- **Lac Saint-Jean, Lac Mistassini and the reservoirs** are terrain lakes, and they block wide crossings.
- **The Rivière des Prairies and the Rivière des Mille Îles** are mostly land on the map. Montréal–Laval track crosses freely.

**Bays (3).** Each was built by a script from the map's own water, and every ring stays just inside the water, so no station or town lies inside a bay (checked):
- **"the St. Lawrence River":** from the Mercier bridge to Île d'Orléans.
  - Past Montréal, the ring follows the main channel south of the island.
  - Lac Saint-Louis and the Lake of Two Mountains are left as plain shore water.
  - Past Québec, the ring keeps to the south channel of Île d'Orléans. The north channel, by the island's bridge, is too narrow to matter.
- **"the St. Lawrence Estuary":** from Île d'Orléans to the line of Sainte-Anne-des-Monts and Sept-Îles.
  - Its south edge is just inside the south shore.
  - Its north edge stays about 4 km off Charlevoix, then about 13 km off the North Shore from Tadoussac on. Without that strip, lines between North Shore towns cut across the shore's curves offshore and were blocked: Baie-Comeau–Sept-Îles crossed 29 mi of bay. With the strip, they follow the shore.
- **"the Gulf of St. Lawrence":** the open gulf from the Gaspé coast and Anticosti to Blanc-Sablon, off Newfoundland's west coast, and north of the Magdalens. It includes the Baie des Chaleurs east of Carleton, about 11 km off the Gaspé coast, and New Brunswick's north shore. Gaspé Bay is left out, so Gaspé–Percé follows the shore.
  - The Magdalens are outside the ring, so their ferry from Souris is Prince Edward Island's business.
  - For the PE agent: the Magdalens–Souris crossing is plain shore water south of 47.85°N.

**Ferries (6 routes, 10 points).** Each is "X–Y ferry (part)":
- **Sorel–Saint-Ignace-de-Loyola**, all year: two points by Sorel. The route is only 2–3 km long.
- **Québec–Lévis**: two mid-river points.
- **Tadoussac–Baie-Sainte-Catherine**, free, around the clock: one point at the fjord's mouth. The fjord is land on the map, so it changes nothing.
- **Rivière-du-Loup–Saint-Siméon**, spring to January: one point in mid-river (47.85, -69.72).
  - With points nearer Rivière-du-Loup (47.85, -69.65), Rivière-du-Loup–La Malbaie opened across 20 mi of estuary.
  - With points nearer Saint-Siméon (47.85, -69.79 or -69.82), Trois-Pistoles–Saint-Siméon opened across 33 mi.
- **Trois-Pistoles–Les Escoumins**, summer: two points on the Les Escoumins half (48.24, -69.30 and 48.27, -69.33). A point nearer Trois-Pistoles (48.19–48.23) let Baie-Comeau–Rivière-du-Loup open across 83 mi, because that line passes Trois-Pistoles.
- **Matane–Baie-Comeau**, all year (the same ship also sails to Godbout): two points, 13 km off Matane and 10 km off Baie-Comeau. The middle of the route is over 10 miles from land, which the checker refuses.
- **Souris–Cap-aux-Meules**: one point off Havre-Aubert, the islands' only link.

Left out:
- **The Isle-aux-Coudres ferry.** The map's channel is narrow shore water, so L'Isle-aux-Coudres opens to Baie-Saint-Paul and La Malbaie without it. A point in the channel only let L'Isle-aux-Coudres–La Pocatière open across 13 mi of the estuary in Gentle.
- **The Rimouski–Forestville ferry**, because I'm not sure it still runs.

**Bridges (35).** Positions are approximate: well-known crossings, not surveyed points.

| Bridge | Point | Use (links that cross near it) |
| --- | --- | --- |
| Pont Honoré-Mercier | 45.42, -73.66 | Châteauguay–Montréal, Châteauguay–Longueuil |
| Pont Jacques-Cartier | 45.52, -73.54 | Montréal–Longueuil, Longueuil–Laval, Châteauguay–Longueuil, Montréal–Boucherville |
| Pont Victoria | 45.49, -73.53 | Brossard–Montréal |
| Pont Samuel-De Champlain | 45.47, -73.52 | the real crossing; no tested link uses it (the Victoria and Jacques-Cartier points are nearer) |
| Pont-tunnel Louis-Hippolyte-La Fontaine | 45.59, -73.50 | Montréal's east end to Boucherville; no tested link uses it |
| Pont Charles-De Gaulle | 45.70, -73.48 | A-40 at the island's east tip: Laval–Repentigny, Repentigny–Varennes |
| Pont Galipeault, Pont de l'Île-aux-Tourtes | 45.40, -73.95; 45.42, -73.99 | the West Island to Île Perrot and Vaudreuil. That water is plain shore water, so these change nothing; they record the real crossings |
| Pont Laviolette | 46.31, -72.56 | Trois-Rivières–Bécancour |
| Pont de Québec, Pont Pierre-Laporte | 46.75, -71.29; 46.74, -71.28 | the two bridges at Sainte-Foy: Lévis–Saint-Augustin; Lévis–Saint-Apollinaire (over the Chaudière's mouth) |
| Pont de l'Île-d'Orléans | 46.87, -71.12 | Québec–Île d'Orléans, Lévis–Île d'Orléans, Lévis–Beaupré |
| Pont Dubuc, Pont de Sainte-Anne | 48.43, -71.09; 48.43, -71.07 | the Saguenay at Chicoutimi: Saguenay–Dolbeau, Saguenay–Chibougamau (both via Pont Dubuc) |
| Pont d'aluminium (Arvida) | 48.44, -71.18 | the first aluminium bridge, over the Saguenay at Shipshaw (well known); Alma–Saguenay |
| Saguenay bridge (Alma) | 48.55, -71.66 | the Grande Décharge; Alma–Dolbeau |
| Pont du Portage, Pont Macdonald-Cartier, Pont Champlain (Ottawa) | 45.42, -75.71; 45.44, -75.70; 45.40, -75.76 | Aylmer–Gatineau (Portage); Gatineau–Val-des-Monts, Gatineau–Chelsea, Ottawa–Val-des-Monts, Ottawa–Chelsea and Gatineau–Lachute (Macdonald-Cartier). The map's Ottawa River line runs north of Hull, so Gatineau–Ottawa itself crosses only the Rideau |
| Pont du Long-Sault | 45.62, -74.60 | Grenville–Hawkesbury; Lachute–Ottawa, Lachute–Rockland |
| Ottawa River bridge (Témiscaming) | 46.71, -79.10 | to Thorne, Ontario: Témiscaming–North Bay, Témiscaming–Sturgeon Falls |
| Pont Gouin (Saint-Jean-sur-Richelieu) | 45.31, -73.25 | Saint-Jean's links west (Châteauguay, Saint-Rémi, Lacolle) |
| Richelieu bridges at Chambly, Beloeil (Pont Jordi-Bonet) and Sorel-Tracy | 45.45, -73.27; 45.56, -73.21; 46.03, -73.13 | Chambly's links east; Sainte-Julie–Mont-Saint-Hilaire; Sorel–Lavaltrie |
| Saint-François bridges at Sherbrooke, Windsor, Richmond (to Melbourne) and Drummondville | 45.41, -71.89; 45.57, -72.02; 45.67, -72.16; 45.88, -72.48 | the Townships' and Drummondville's links |
| Yamaska bridge (Saint-Hyacinthe) | 45.63, -72.95 | Saint-Hyacinthe's five links |
| Chaudière bridges at Lac-Mégantic, Saint-Georges, Beauceville and Sainte-Marie | 45.57, -70.88; 46.12, -70.68; 46.21, -70.78; 46.44, -71.03 | the Beauce and Lac-Mégantic links |
| Matapédia bridge (Amqui) | 48.46, -67.43 | Amqui–Matane, Amqui–Sainte-Anne-des-Monts |

The river bridges were placed where tested links cross the map's rivers (a script found them). Their names say "X bridge (town)" where I'm not sure of the bridge's own name. Ontario did the same. Crossings with no bridge listed pay the small new-river-bridge price.

**Checked with `NR.blockedReason`, in both modes.** The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`.

| Crossing | Result |
| --- | --- |
| Montréal–Longueuil, Châteauguay–Montréal, Laval–Longueuil, Montréal–Boucherville, Brossard–Montréal, Laval–Repentigny | open, via the Jacques-Cartier, Mercier, Victoria and Charles-De Gaulle bridges |
| Trois-Rivières–Bécancour, Trois-Rivières–Nicolet | open, via the Laviolette bridge |
| Québec–Lévis, Québec–Saint-Henri | open, via the Québec–Lévis ferry |
| Lévis–Île d'Orléans, Lévis–Beaupré | open, via the Île d'Orléans bridge |
| Sorel–Berthierville, Sorel–Louiseville | open, via the Sorel ferry |
| Rivière-du-Loup–Saint-Siméon | open, via its ferry |
| Trois-Pistoles–Les Escoumins, Témiscouata-sur-le-Lac–Les Escoumins | open, via the Trois-Pistoles ferry |
| Matane–Baie-Comeau | open, via its ferry |
| Tadoussac–Saint-Siméon, Saint-Siméon–La Malbaie, L'Isle-aux-Coudres–Baie-Saint-Paul | open, as land or along the shore |
| **Away from the crossings, blocked in both modes:** | |
| across the estuary | Rivière-du-Loup–Tadoussac (12 mi), Rivière-du-Loup–La Malbaie (20), Trois-Pistoles–Tadoussac, Rimouski–Baie-Comeau (43), Rimouski–Forestville (24), Le Bic–Forestville, Baie-Comeau–Rivière-du-Loup (83), La Pocatière–La Malbaie, La Pocatière–Saint-Siméon, Baie-Saint-Paul–Saint-Jean-Port-Joli, L'Isle-aux-Coudres–Saint-Jean-Port-Joli |
| across the river and Lac Saint-Pierre | Montmagny–Beaupré (9 mi), Louiseville–Nicolet (9) |
| across the gulf | Port-Cartier–Sainte-Anne-des-Monts (55 mi), Havre-Saint-Pierre to Gaspé, Percé or Forillon (50–60 mi) |

**Known limits:**
- **Sorel–Bécancour** follows the shore in Gentle. In Tough it counts its 24 mi down Lac Saint-Pierre as the Sorel ferry, because the ferry is right at Sorel. Without the ferry it would be blocked.
- **Trois-Pistoles–Saint-Siméon** opens in Gentle via the Rivière-du-Loup ferry (it passes within 4 miles of its point).
- **Saint-Augustin and Donnacona to Saint-Apollinaire** (2–3 mi of river) take a new bridge, where no real one exists.

### How the map plays

Checked with `NR.segmentGeo` / `NR.blockedReason`, in both modes. Two kinds of link were tested: every main station to its neighbours' main stations (Ontario's included), and every town to its 3 nearest places.

- **Main stations: 158 links.**
  - 143 are open in both modes.
  - 9 are open in Gentle only:
    - Lavaltrie–Trois-Rivières (18 mi of Lac Saint-Pierre in Tough);
    - Val-des-Monts–Val-d'Or;
    - Rouyn-Noranda, Amos and Chibougamau to Timmins;
    - Chibougamau to Shawinigan, Saguenay and Sept-Îles;
    - Saguenay–Sept-Îles.

    The northern ones are blocked in Tough by lakes and reservoirs of 3–8 mi.
  - 6 are open in neither:
    - Mont-Laurier–Val-d'Or (the Cabonga and Dozois reservoirs, 11–14 mi);
    - Dolbeau–Shawinigan and Chibougamau–Dolbeau (lakes);
    - Baie-Comeau–La Malbaie (the straight line runs down the estuary; the towns along the North Shore join them);
    - Rivière-du-Loup–La Malbaie and Baie-Comeau–Rivière-du-Loup (both across the estuary).
- **Every main station reaches at least two neighbouring main stations in both modes, except two:**
  - **Sept-Îles (3 in Gentle, 1 in Tough: Baie-Comeau).** Saguenay–Sept-Îles crosses 3 mi of an unnamed lake, and Chibougamau–Sept-Îles crosses the Outardes 4 reservoir. Port-Cartier opens to both Sept-Îles and Baie-Comeau.
  - **Îles-de-la-Madeleine (0).** It has no neighbour until Prince Edward Island is in the game.
- **Towns: 238 links.**
  - 219 are open in both modes.
  - 6 are open in Gentle only: Malartic's links, Radisson's to Matagami and Chibougamau, Bonaventure–Pointe-à-la-Croix and Métabetchouan–Roberval.
  - 13 are open in neither: all of them across the estuary, the gulf, Lac Saint-Pierre or Lac Saint-Jean.
  - **Every town has an open link in both modes.** Havre-Saint-Pierre's 3 nearest places are across the gulf, but Havre-Saint-Pierre–Sept-Îles (108 mi along the shore) is open in both modes.
- **Ontario:** these are open in both modes:
  - Gatineau–Ottawa, Val-des-Monts–Ottawa, Lachute–Ottawa and Lachute–Hawkesbury;
  - Vaudreuil-Dorion–Cornwall, Vaudreuil-Dorion–Hawkesbury and Valleyfield–Cornwall;
  - Shawville–Pembroke, Rouyn-Noranda–North Bay, Rouyn-Noranda–Pembroke and Témiscaming–North Bay.

### Biomes

- **forest:** the boreal forest and the Shield, where farms are thin strips along the rivers, lakes and coasts. That is:
  - the far north and the North Shore;
  - Saguenay–Lac-Saint-Jean;
  - the Haute-Mauricie and Abitibi-Témiscamingue;
  - the Laurentians (Antoine-Labelle, Matawinie, Les Laurentides) and the Outaouais hills;
  - the mountain regions: Charlevoix, Portneuf–Jacques-Cartier and Beaupré (the Laurentides wildlife reserve), and the whole Gaspé peninsula with the Matapédia valley.

  As in Ontario, "wooded" would draw most of these as bare farmland, because they have few hill cells. The cost is trees over the Lac-Saint-Jean lowlands, Abitibi's clay belt and Portneuf's farms.
- **wooded:** farm country with wooded hills. That is:
  - the Appalachian plateau of the Bas-Saint-Laurent (Rimouski, Rivière-du-Loup–Témiscouata);
  - the Côte-du-Sud, Bellechasse-Etchemins and Beauce-Sartigan;
  - Les Appalaches, Le Granit, and the Townships' Coaticook–Memphrémagog and Brome-Missisquoi;
  - the Laurentians' southern edge: Argenteuil-Papineau, La Rivière-du-Nord and D'Autray-Maskinongé.
- **Not listed (farmland):** the St. Lawrence lowlands, Montérégie, Centre-du-Québec, the Beauce's lower valley, Lanaudière's plain, the Montréal and Québec areas, and the Magdalens.
- **dry:** none.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| 1. Montréal | montreal | MTL, LAV, LGL, CHG, VDR, TBN, BLN, SEU, RPG, SJL, CHB, MIR | 50 passengers, 5 counties, connect LGL–LAV (buy Longueuil; the line crosses Montréal island) |
| 2. Montérégie & the Eastern Townships | south | VLF, SRM, SJR, CWV, GBY, SHY, SOR, DRU, SHE, MAG, VDS, LMG, VTV, BEC, THM | 150 passengers, connect MTL–SHE, 25 produce |
| 3. The Laurentians, the Outaouais & Mauricie | west | SJM, SLL, JOL, RWD, LVT, SAD, LCH, GAT, VDM, MLR, TR, SHW, RYN, VDO, AMS, CBM | 300 passengers, connect MTL–GAT, 20 trucks (its mountain towns) |
| 4. Québec City & the East | east | QUE, LEV, SRY, BPR, LMB, SNH, SMR, SGE, PLS, MMG, RDL, RIM, MJL, MTN, GSP, CSM, IDM, SAG, ALM, DOL, BCM, SEP | 450 passengers, connect MTL–QUE, one high-speed train |

Every level's regions touch an earlier level's:
- Level 2 touches Roussillon, the Richelieu valley and Marguerite-D'Youville.
- Level 3 touches Mirabel, Thérèse-De Blainville, Les Moulins and L'Assomption. Abitibi and the far north join through the Outaouais and the Haute-Mauricie.
- Level 4 joins through Lotbinière (it touches Arthabaska and Bécancour) and Portneuf (it touches Trois-Rivières and La Tuque).

The Magdalens can't be bought until Prince Edward Island is in the game.

### For the main agent

1. **The Saguenay fjord is land** (see Water). The map's census divisions aren't cut there and the terrain has no river line below Chicoutimi, so nothing blocks track across it, and a bay can't change that.
2. **There is a gap of "sea" at the Quebec–Labrador border.** For example, 51.8°N, 65°W and 52.0°N, 63°W read as open water, not land: neither Quebec's map nor Newfoundland and Labrador's rough outline covers them. Lines through there would follow the "shore". Worth a look when Newfoundland and Labrador is built.
3. **The Natural Earth Ottawa River line passes north of Hull.** Gatineau–Ottawa crosses no river, while Gatineau's links north do. The three Gatineau bridges cover both.
4. **For the Prince Edward Island agent:** the Souris–Cap-aux-Meules ferry has a point at the Magdalen end (47.30, -61.93). The water south of 47.85°N is not in any QC bay.
5. **For the New Brunswick agent:** the J.C. Van Horne Bridge (Pointe-à-la-Croix–Campbellton) is not listed here. The Restigouche estuary west of Carleton is plain shore water, and Pointe-à-la-Croix is a town ready for it. The QC gulf bay covers the Baie des Chaleurs east of 66°W.
6. **The raw-data problems from phase 1 still stand.** They are Betsiamites/Pessamit, "Laurentides", "Domaine-Ouellet", the second "Pontiac" and the offshore points. None are used.

### Checks

- `node tools/check-pack.js QC`: `QC: passed (65 stations, 94 towns, 0 city maps, 0 passes, 46 bridges), 0 errors, 0 warnings`.
- `node tools/test-pack.js QC`: `PASSED: 17 passed, 0 warnings, 0 failed`. The pack test laid Laval–Vaudreuil-Dorion; 16 passengers arrived in the first week; it bought Beauharnois-Salaberry.
- **Screenshots:**
  - **arcade-light:** forest over the Shield and the north, and the St. Lawrence and the gulf drawn as water.
  - **levels:** the Montréal start, with the bridge labels on the river.
  - **phone:** the three start stations fit.

  They looked right.


## City maps

Added by the city map agent (`metros`). Every stop is a real place at its real location (3 decimals); each map has 12 stops, one hub, no cable stops. Previews (water, hills) were run in preview mode only; every stop was checked against the preview's water rings (even-odd) and the land/water grid: none sits in water. Real terrain still to be built by the main agent.

### Montréal (MTL, size 5)

- Stops: Gare Centrale (hub), Vieux-Montréal, Université de Montréal, Mont Royal, Plateau-Mont-Royal, Trudeau Airport, Laval (Montmorency), Longueuil, Olympic Stadium, Verdun, Notre-Dame-de-Grâce, Brossard.
- Source: Gare Centrale, Vieux-Montréal, Université de Montréal, Parc du Mont-Royal, Plateau-Mont-Royal, Trudeau Airport, Laval (Montmorency), Longueuil, Olympic Stadium, Verdun, Notre-Dame-de-Grâce, Brossard; general knowledge, checked against the preview.
- Left out: the West Island (Pointe-Claire, Dorval) and Laval's Centre-ville beyond Montmorency. Vieux-Montréal is about 0.9 mile from Gare Centrale, the closest pair.

- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
