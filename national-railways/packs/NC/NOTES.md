# North Carolina (NC) pack notes

## Region merges (phase 1)

Populations from `packs/NC/raw/counties.json` and `places.json` (Census 2020 base). Every group was checked as connected through `neighbors`. Roads, rivers and rail named here are well known unless marked otherwise. Station rule: largest place in places.json.

### Recommended (100 -> 73 regions)

```
merge: [["Cherokee", "Clay", "Macon"], ["Graham", "Jackson", "Swain"], ["Alleghany", "Ashe"], ["Avery", "McDowell", "Mitchell"], ["Madison", "Yancey"], ["Davie", "Yadkin"], ["Caswell", "Person"], ["Anson", "Richmond", "Scotland"], ["Camden", "Currituck", "Pasquotank"], ["Chowan", "Gates", "Perquimans"], ["Bertie", "Hertford", "Northampton"], ["Martin", "Tyrrell", "Washington"], ["Dare", "Hyde"], ["Beaufort", "Pamlico"], ["Greene", "Jones", "Lenoir"], ["Bladen", "Columbus"], ["Polk", "Rutherford"], ["Vance", "Warren"]]
names: {}
```

No `names`, `bridges` or `join` needed (Dare + Hyde touch on the mainland; Hatteras to Ocracoke is a ferry but not needed).

| Group | Why | Station | Pop |
| --- | --- | --- | --- |
| Cherokee + Clay + Macon | US-64 across the far southwest: Murphy, Hayesville, Franklin | Franklin 4,175 | 76,872 |
| Graham + Jackson + Swain | Tuckasegee/Little Tennessee country; US-74/19 Sylva to Bryson City, then Robbinsville (Graham touches only Swain) | Sylva 2,579 | 65,253 |
| Alleghany + Ashe | US-21 / US-221 high country, Sparta to Jefferson | Sparta 1,831 | 37,465 |
| Avery + McDowell + Mitchell | Marion, up NC-226 to Spruce Pine and the Avery side (moderately known) | Marion 7,715 | 77,291 |
| Madison + Yancey | Mars Hill to Burnsville, NC-197 (moderately known) | Mars Hill 2,010 | 39,666 |
| Davie + Yadkin | I-40 / US-601 Mocksville to Yadkinville, Yadkin River | Mocksville 5,903 | 79,936 |
| Caswell + Person | US-158 Yanceyville to Roxboro | Roxboro 8,125 | 61,821 |
| Anson + Richmond + Scotland | US-74 Wadesboro, Rockingham, Hamlet, Laurinburg | Laurinburg 14,976 | 99,179 |
| Camden + Currituck + Pasquotank | Albemarle Sound / Elizabeth City, US-17 and US-158 | Elizabeth City 18,644 | 79,028 |
| Chowan + Gates + Perquimans | Edenton and the Chowan/Perquimans rivers | Edenton 4,457 | 37,193 |
| Bertie + Hertford + Northampton | Roanoke-Chowan: Ahoskie, Windsor, Murfreesboro, Gaston | Ahoskie 4,892 | 56,956 |
| Martin + Tyrrell + Washington | US-64 chain Williamston, Plymouth, Columbia | Williamston 5,248 | 36,285 |
| Dare + Hyde | Outer Banks, Hatteras to Ocracoke ferry; mainland Dare touches Hyde | Kill Devil Hills 7,644 | 41,501 |
| Beaufort + Pamlico | Pamlico River and Neuse mouth, US-17 / NC-33 | Washington 9,887 | 56,929 |
| Greene + Jones + Lenoir | Kinston and the upper Neuse; US-13 / US-258 | Kinston 19,805 | 84,751 |
| Bladen + Columbus | NC-131/US-701 Elizabethtown to Whiteville, Cape Fear and Lumber country | Whiteville 4,763 | 80,248 |
| Polk + Rutherford | Thermal Belt, US-74 / US-176 Tryon to Rutherfordton | Forest City 7,376 | 83,781 |
| Vance + Warren | I-85 / US-1 Henderson to Norlina | Henderson 15,076 | 61,208 |

Exceptions (alone under 50k, all neighbours 50k or more, or at the line):
- Alexander 36k (Taylorsville): Caldwell, Catawba, Iredell, Wilkes all big.
- Stokes 45k (King, Walnut Cove): Forsyth, Rockingham, Surry all big.
- Transylvania 33k (Brevard 7,759): Henderson and Haywood big; Jackson over the Balsam/US-64 ridge is a long way round.
- Montgomery 26k (Troy, Biscoe): Uwharrie hills, all neighbours big except Richmond (needed for Anson-Richmond-Scotland).
- Duplin 49k, Edgecombe 49k, Halifax 49k: 1k under the line, real towns (Wallace, Tarboro, Roanoke Rapids).
Rule bends (merged with a county at or over 50k): Lenoir 55k (takes Greene, Jones), Columbus 51k (takes Bladen), Rutherford 64k (takes Polk 19k). Each small county has only big neighbours otherwise.

Over 50k and alone: the other 51 listed in the brief (Wake, Mecklenburg ... Hoke, Watauga, Sampson, Pender, Granville), minus Lenoir, Columbus, Rutherford. Total 73 regions: 18 groups + 7 exceptions + 48 large counties.

### Alternative (74 regions)
Use `["Avery", "Mitchell", "Yancey"]` (the Toe River valley, Spruce Pine) and leave McDowell (45k, Marion) and Madison (21k, Mars Hill) alone. Pro: the natural valley; con: two more exceptions.
Second variation: `["Anson", "Montgomery", "Richmond"]` and Scotland alone (Laurinburg is a 15k town); same count.

### Map observations
- Dare has no `nc-tyrrell` neighbour, and Tyrrell/Hyde/Dare meet on the Alligator River peninsula in reality; Dare lists only Currituck and Hyde. Not blocking.
- Currituck and Dare Outer Banks sections are joined only by 4WD beach / the Mid-Currituck bridge (uncertain); ignored.
- places.json has 226 places with null population (CDPs such as Cherokee, Hatteras, Camden, Engelhard); Cherokee is assigned to Swain (partly Jackson).
- All neighbour relations are symmetric.
