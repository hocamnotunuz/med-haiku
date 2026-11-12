# Wisconsin (WI) pack notes

## Region merges (phase 1)

Populations are from `packs/WI/raw/counties.json` and `packs/WI/raw/places.json` (U.S. Census Bureau, 2020 base). Geography and transport facts are from general knowledge and are marked "moderately known" where less certain. Every group was checked with a script: all members connect through `neighbors`.

### Recommended (72 -> 49 regions)

```
merge: [["Florence", "Forest", "Marinette"], ["Menominee", "Oconto", "Shawano"], ["Langlade", "Lincoln"], ["Oneida", "Vilas"], ["Door", "Kewaunee"], ["Ashland", "Bayfield", "Iron"], ["Douglas", "Washburn"], ["Burnett", "Polk"], ["Price", "Rusk", "Sawyer"], ["Clark", "Taylor"], ["Jackson", "Monroe"], ["Adams", "Juneau"], ["Green Lake", "Marquette", "Waushara"], ["Crawford", "Vernon"], ["Green", "Lafayette"], ["Iowa", "Richland"], ["Buffalo", "Trempealeau"], ["Pepin", "Pierce"]]
names: { "Oneida-Vilas": "Northwoods", "Ashland-Bayfield-Iron": "Chequamegon" }   // optional; the automatic names also work
```

No `bridges` or `join` needed (Door is joined to Kewaunee by land).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Florence + Forest + Marinette | Green Bay's north shore and the north-eastern woods: US-141 north from Marinette to Florence, US-8/WI-55 to Crandon (moderately known) | Marinette (11,119) | 55,613 |
| Menominee + Oconto + Shawano | The Menominee reservation between Oconto Falls and Shawano (WI-22, moderately known) | Shawano (9,246) | 84,083 |
| Langlade + Lincoln | Antigo and Merrill, US-45/WI-64 (moderately known), the Wisconsin Central country | Merrill (9,350) | 47,907 |
| Oneida + Vilas | Rhinelander, Minocqua, Eagle River: the Northwoods lakes, US-51/US-45 | Rhinelander (8,291) | 60,888 |
| Door + Kewaunee | The Door peninsula, WI-42 Algoma to Sturgeon Bay; Door's only land neighbour is Kewaunee | Sturgeon Bay (9,657) | 50,633 |
| Ashland + Bayfield + Iron | Lake Superior's south shore, US-2 from Hurley to Ashland, Chequamegon Bay to Washburn | Ashland (7,912) | 38,383 |
| Douglas + Washburn | US-53 from Superior south to Spooner; Superior is the only town of size | Superior (26,750) | 60,918 |
| Burnett + Polk | The St. Croix valley and northwest lakes (WI-35/WI-70, moderately known) | Amery (2,966) | 61,506 |
| Price + Rusk + Sawyer | The north-woods heart: Park Falls, Ladysmith, Hayward, all three touch each other | Ladysmith (3,222) | 46,306 |
| Clark + Taylor | Neillsville, Abbotsford, Medford (US-10 and WI-13, moderately known) | Medford (4,344) | 54,569 |
| Jackson + Monroe | I-94 from Tomah by Black River Falls to Eau Claire's edge; the Empire Builder stops at Tomah | Sparta (10,030) | 67,412 |
| Adams + Juneau | Mauston, New Lisbon, Friendship: the Wisconsin River and central sands, I-90/94 | Mauston (4,348) | 47,363 |
| Green Lake + Marquette + Waushara | The lakes and sands between Berlin, Montello and Wautoma, all three touch each other | Berlin (5,577) | 59,131 |
| Crawford + Vernon | The Driftless hills from Viroqua to the Mississippi at Prairie du Chien, WI-27/WI-60 (moderately known) | Prairie du Chien (5,524) | 46,825 |
| Green + Lafayette | Monroe and Darlington, the cheese and lead country on the Illinois line | Monroe (10,667) | 53,699 |
| Iowa + Richland | Dodgeville, Mineral Point, Richland Center, the Wisconsin River's southern bank, WI-23 (moderately known) | Richland Center (5,118) | 41,027 |
| Buffalo + Trempealeau | The Mississippi shore from Fountain City to Trempealeau, WI-35 and the BNSF/Empire Builder line | Arcadia (3,737) | 44,064 |
| Pepin + Pierce | Lake Pepin and the Great River Road to the Twin Cities edge at Prescott | River Falls (16,191) | 49,526 |

Station rule: the largest place in places.json. Alternative stations: Crawford + Vernon could use Viroqua (4,508, the middle of the group); Menominee + Oconto + Shawano is unevenly shaped (Oconto 4,610 is on the coast).

Alone, under 50k (exceptions):
- **Barron** 46,726 (Rice Lake 9,050): within 7% of 50k, a hub on US-8/US-53 with no merge that makes a corridor.
- **Dunn** 45,425 (Menomonie 16,845): on I-94 between Eau Claire (106k) and Hudson; all neighbours are big or already grouped.

Alone, 50k and over: the other 27 counties (Calumet, Grant, Waupaca, Columbia, Sauk and the bigger ones). 49 regions = 18 groups + 2 + 29.

### Alternative
Split Marinette + Oconto (US-41 shore, 81k, Marinette) and put Florence + Forest + Langlade (33k, Antigo) together, with Lincoln + Taylor (WI-64, 48k, Merrill) and Clark + Jackson (US-95, 56k, Black River Falls), leaving Menominee + Shawano (45k) and Monroe alone (46k). Pro: Marinette-Oconto is the stronger shore corridor. Con: Florence and Forest then sit in an odd group, and Monroe becomes a third exception.

### Map issues
- places.json has many places with `pop: null` (CDPs and towns): Keshena and Legend Lake (Menominee), Florence, Argonne, Laona, Minocqua, Boulder Junction, Lac du Flambeau, Elcho, Arkdale, Seymour (Eau Claire), Turtle Lake (Walworth). Minocqua, Lac du Flambeau and Keshena are well-known places; with null pops the station rule skips them.
- Duplicate names: "Superior" appears twice in Douglas (26,750 and 678); "Waukesha", "Pewaukee" are each a city and a village in Waukesha. Same for "Seymour"/"Turtle Lake" in different counties.
- Door has only Kewaunee as neighbour (correct by land; Marinette and Brown are across the bay), Marinette has no Michigan neighbour yet (later).
- Not otherwise checked: county shapes and `rings` (not printed, by brief).
