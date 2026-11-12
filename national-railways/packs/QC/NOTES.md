# Quebec (QC) pack notes

## Region merges (phase 1)

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
