# West Virginia (WV) pack notes

## Region merges (phase 1)

Populations: `packs/WV/raw/counties.json` and `places.json` (U.S. Census Bureau, 2020 base). Every group is connected through `neighbors` (checked by script). Geography and corridors are well known unless marked.

### Recommended (55 -> 32 regions)

```
merge: [["Brooke", "Hancock"], ["Marshall", "Wetzel"], ["Pleasants", "Ritchie", "Tyler"], ["Jackson", "Mason"], ["Calhoun", "Roane", "Wirt"], ["Braxton", "Doddridge", "Gilmer"], ["Lewis", "Upshur"], ["Barbour", "Taylor"], ["Clay", "Nicholas", "Webster"], ["Greenbrier", "Monroe", "Summers"], ["Pocahontas", "Randolph", "Tucker"], ["Grant", "Hardy", "Pendleton"], ["Hampshire", "Morgan"], ["Logan", "Mingo"], ["Boone", "Lincoln"], ["McDowell", "Wyoming"]]
names: {}   // optional: "Brooke-Hancock": "Northern Panhandle (Weirton)" is NOT needed; automatic names read fine
bridges/join: none (no water-cut counties)
```

Alone, 50k+ (11): Kanawha (Charleston 48,812), Berkeley (Martinsburg 18,781), Monongalia (Morgantown 30,194), Cabell (Huntington 46,841), Wood (Parkersburg 29,741), Raleigh (Beckley 17,276), Harrison (Clarksburg 16,050), Mercer (Bluefield 9,639; Princeton 5,863), Jefferson (Charles Town 6,530), Putnam (Hurricane 6,966), Marion (Fairmont 18,420).

Alone, under 50k (exceptions, 5):
- Ohio 42,440 (Wheeling 27,071): a big city, the only large market on the Ohio River in the north; merging would swallow Wheeling's station. Its neighbours are Brooke (Wellsburg, other side of Hancock) and Marshall (joined to Wetzel).
- Fayette 40,483 (Oak Hill 8,177): the New River Gorge, own rail and road identity; the 3 neighbours are big (Kanawha, Raleigh) or already a group (Greenbrier, Nicholas). Nicholas would make 65k.
- Wayne 38,988 (Kenova 3,036): Tug Fork/Ohio River corner next to Huntington; Lincoln is the only small neighbour and already pairs with Boone.
- Preston 34,213 (Kingwood 2,980): large, high-plateau county, I-68 and Cheat River gorge; neighbours are Monongalia (big) or already paired.
- Mineral 26,932 (Keyser 4,869): its only WV neighbours are Grant and Hampshire, across the Allegheny Front. Maryland (Cumberland) will join later via the Potomac.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Brooke + Hancock | Northern Panhandle, Ohio River, Weirton-Follansbee steel towns | Weirton (19,158) | 51,644 |
| Marshall + Wetzel | Ohio River and Fish Creek; Moundsville to New Martinsville, WV-2 | Moundsville (8,083) | 45,036 |
| Pleasants + Ritchie + Tyler | Ohio River (St. Marys, Sistersville) with Ritchie behind, US-50 | St. Marys (1,833) | 24,400 |
| Jackson + Mason | Ohio River, I-77 (Ravenswood) and Point Pleasant | Point Pleasant (4,078) | 53,243 |
| Calhoun + Roane + Wirt | Little Kanawha / Spencer hills, rural, US-33 | Spencer (2,039) | 25,452 |
| Braxton + Doddridge + Gilmer | I-79 and US-33/50 hill country (Glenville the largest place; Sutton on I-79 is the alternative) | Glenville (1,126) | 27,671 |
| Lewis + Upshur | US-33 and I-79 from Weston to Buckhannon, one corridor | Buckhannon (5,186) | 40,846 |
| Barbour + Taylor | Tygart Valley and the B&O line, Grafton to Philippi | Grafton (4,731) | 32,169 |
| Clay + Nicholas + Webster | Gauley and Elk valleys, US-19/Summersville | Summersville (3,431) | 41,029 |
| Greenbrier + Monroe + Summers | I-64, Greenbrier and New River valleys, CSX | Lewisburg (3,924) | 57,318 |
| Pocahontas + Randolph + Tucker | Upper Monongahela/Tygart highlands, Elkins | Elkins (6,938) | 42,561 |
| Grant + Hardy + Pendleton | South Branch Potomac valley, Corridor H | Moorefield (2,520) | 31,415 |
| Hampshire + Morgan | Cacapon valley, US-50 and US-522 | Romney (1,768) | 40,160 |
| Logan + Mingo | Guyandotte and Tug Fork coalfield, Norfolk Southern | Williamson (3,080) | 56,147 |
| Boone + Lincoln | Coal River, Madison to Hamlin | Madison (2,913) | 42,265 |
| McDowell + Wyoming | Pocahontas coalfield, Welch to Mullens | Welch (3,590) | 40,504 |

Weak points: Braxton-Doddridge-Gilmer joins through Gilmer only; Clay-Nicholas-Webster is mountain road country. Stations are tiny (Marlinton-sized), which is normal for WV.

### Alternative

Make Marshall + Ohio (73k, Wheeling-Moundsville) and Wetzel + Doddridge + Tyler; pro: one Ohio River market; con: Wheeling's station gets huge and Wetzel's ridges are cut oddly. Or pair Mineral with Hampshire (50,026, US-50, Romney/Keyser) with Morgan alone; con: Morgan is cut off from US-522.

### Map observations

- Mineral lists only Grant and Hampshire (Maryland/Pennsylvania come later): fine.
- 208 of 439 places have no population (CDPs, e.g. Falling Waters, Alum Creek); main stations above all have one.
- Odd place names: "Ranson corporation", "Bath (Berkeley Springs)", "Addison (Webster Springs)", "Womelsdorf (Coalton)".
- No county cut oddly or missing found from the neighbour lists; I did not inspect rings.
