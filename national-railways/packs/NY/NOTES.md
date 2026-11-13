# New York (NY) pack notes

## Region merges (phase 1)

Populations: `packs/NY/raw/counties.json` and `raw/places.json` (U.S. Census Bureau, 2020 estimates base; state total 20,205k, 62 counties). Every merged pair or chain is a `neighbors` link in counties.json. Geography (roads, rivers, rail) is from general knowledge, not data: where it is moderately known it says so.

### Recommended (62 -> 53 regions)

```
merge: [["Essex", "Franklin", "Hamilton"], ["Schuyler", "Seneca", "Yates"], ["Genesee", "Orleans"], ["Allegany", "Wyoming"], ["Chenango", "Delaware"], ["Greene", "Schoharie"], ["Cortland", "Tioga"]]
names: { "New York": "Manhattan", "Kings": "Brooklyn", "Richmond": "Staten Island", "Essex-Franklin-Hamilton": "Adirondacks" }
bridges: [["Richmond", "Kings"], ["Richmond", "New York"]]
```

(The Adirondacks name is optional; the NYC names are the important ones. Queens and Bronx already read as boroughs.)

Alone, 50k or more (46): kept as the brief lists. Montgomery (50k, Amsterdam 18,218) is borderline but stays alone.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Essex + Franklin + Hamilton | The Adirondack Park core: empty, mountainous, one region. NY-30 and NY-86 link Saranac Lake, Tupper Lake, Long Lake, Lake Placid (moderately known). Hamilton (5k) cannot stand alone | Malone 5,482 (Saranac Lake 4,961 is more central) | 90,052 |
| Schuyler + Seneca + Yates | The Finger Lakes around Seneca Lake: Watkins Glen at the south end, Penn Yan and Waterloo/Seneca Falls on the Erie Canal side. All three touch each other. The lake is a mild barrier, but the three together make one sensible region | Penn Yan 5,117 (Waterloo 4,872) | 76,479 |
| Genesee + Orleans | The Erie Canal and NY-31/NY-98 between Batavia and Albion/Medina, on the Thruway. Orleans (40k) has only big neighbours (Genesee 58k, Monroe, Niagara); Genesee is the nearest, so Genesee joins although it is over 50k (exception) | Batavia 15,591 | 98,740 |
| Allegany + Wyoming | The western plateau: NY-19 runs from Warsaw south into Allegany (moderately known); Wellsville and Warsaw are the two market towns | Wellsville 4,644 (Warsaw 3,660) | 86,994 |
| Chenango + Delaware | The Susquehanna and Chenango valleys: Norwich with Sidney, Walton and Delhi (NY-12, NY-8, I-88 near Sidney; moderately known) | Norwich 7,043 | 91,531 |
| Greene + Schoharie | The northern Catskills: NY-145 and NY-23A link Catskill, Coxsackie and Cobleskill (moderately known). Catskill is on the Hudson and Amtrak's Empire line | Cobleskill 4,259 (Catskill 3,797) | 77,650 |
| Cortland + Tioga | I-81 at Cortland, and the Southern Tier (I-86/NY-17) at Owego and Waverly. The weakest link in the list (Broome lies between them to the south); Cortland is the only real town | Cortland 17,556 | 95,252 |

Alone, under 50k (exception):
- **Lewis** 26,587, Lowville 3,341: all its neighbours are big (Jefferson 117k, Oneida, Oswego, Herkimer, St. Lawrence), and the Tug Hill plateau and the Black River valley are its own country. See the alternative.

Station rule: the largest place in places.json (as in the NM review). Exceptions: Essex-Franklin-Hamilton and Schuyler-Seneca-Yates, where the largest place is not where most people live; fine either way.

Rejected:
- Hamilton + Herkimer / Warren: both are 60k or more and would leave Essex-Franklin as a pair; the Adirondack triple is cleaner.
- Orleans + Genesee + Wyoming (one 139k region): Medina to Warsaw is too far for one station.
- Tioga + Chemung or Broome: both are big counties.
- Delaware + Greene + Schoharie (a Catskills triple): leaves Chenango + Cortland, and Tioga alone; Delaware's valley is the Susquehanna, not the Hudson.

### Alternative (55 regions)

`merge: [["Essex", "Franklin", "Hamilton"], ["Schuyler", "Seneca", "Yates"], ["Genesee", "Orleans"], ["Allegany", "Wyoming"], ["Chenango", "Cortland"], ["Delaware", "Schoharie"]]`, with Greene and Tioga alone. Pro: no weak Cortland-Tioga link, and Chenango-Cortland are the I-81/NY-13 neighbours. Con: two more regions and two exceptions (Greene 48k, Tioga 48k).

### Group stations and populations

See the table. Everything else keeps its county's largest place as station. Big counties by largest place: Albany (Albany 99,239), Erie (Buffalo), Monroe (Rochester), Onondaga (Syracuse), Oneida (Utica), Westchester (Yonkers 211,584), Nassau (Hempstead 59,183), Suffolk (Lindenhurst 27,146), Orange (Kiryas Joel 32,951), Rockland (Spring Valley), Columbia (Hudson 5,894), Putnam (Brewster 2,510).

### Things on the map that look wrong

1. **The five boroughs have one place only.** places.json has "New York" (8,804,199) in `ny-kings` and nothing in Queens, Bronx, New York (Manhattan) or Richmond. They cannot get a station from places.json: the pack will need hand-placed stations (Manhattan, Brooklyn, Queens, Bronx, Staten Island) and the city's population split by county (Kings 2,736k, Queens 2,405k, New York 1,694k, Bronx 1,473k, Richmond 496k). The Kings station "New York" clashes with the county renamed "Manhattan".
2. **Richmond has no New York neighbour** (only nj-hudson, nj-middlesex, nj-union), hence the two bridges. Verrazzano-Narrows (Richmond to Kings) and the Staten Island Ferry (Richmond to Manhattan) are well known.
3. **697 places have a null population** (Seneca Falls, Elizabethtown, Keeseville, Long Lake, Amagansett and many more): towns and CDPs without Census place counts. They are still usable as names, but the largest place of a county may be a smaller town than the real one: Essex's top place is Lake Placid; Seneca Falls (Seneca) should outrank Waterloo.
4. **Akwesasne** is placed in Franklin (a reservation, split with Quebec and Ontario; fine but an odd name for a station).
5. **Putnam lists Rockland as a neighbour.** Westchester lies between them on the Hudson, as far as I know; this may be a polygon touching in the river. Worth checking; it changes nothing in the merges (all three stay alone).
6. **Nassau and Suffolk** neighbours are right (Queens, then Suffolk). Kings-Nassau are not neighbours, which is correct. Connecticut ferries come later.
7. Staten Island's only Jersey links are the Goethals, Outerbridge and Bayonne bridges (nj-hudson, nj-middlesex, nj-union are listed); well known and consistent.
