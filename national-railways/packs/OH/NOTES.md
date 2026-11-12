# Ohio (OH) pack notes

## Region merges (phase 1)

Populations: `packs/OH/raw/counties.json` and `places.json` (U.S. Census Bureau, 2020). Every group was checked for connectivity through `neighbors`. Geography and transport facts below are from general knowledge (well known unless marked).

### Recommended (88 counties to 69 regions)

```
merge: [
  ["Defiance", "Henry"], ["Paulding", "Putnam", "Van Wert"], ["Fulton", "Williams"],
  ["Auglaize", "Mercer"], ["Champaign", "Logan"], ["Hardin", "Wyandot"], ["Crawford", "Morrow"],
  ["Fayette", "Madison"], ["Clinton", "Highland"], ["Adams", "Brown"], ["Jackson", "Pike"],
  ["Gallia", "Meigs"], ["Hocking", "Vinton"], ["Morgan", "Perry"], ["Guernsey", "Monroe", "Noble"],
  ["Carroll", "Harrison"], ["Coshocton", "Holmes"],
],
names: {},
bridges/join: none
```

The 49 counties of 50k and over stay alone. Of the 39 under 50k, 36 are in the 17 groups above and 3 stay alone (exceptions below).

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Defiance + Henry | Maumee valley, US-24 from Defiance to Napoleon | Defiance (17,055) | 65,942 |
| Paulding + Putnam + Van Wert | Northwest Ohio plain, US-30/US-224 and the Indiana line; Van Wert is the market town | Van Wert (11,113) | 82,172 |
| Fulton + Williams | The northwest corner, the Ohio Turnpike (I-80/90) and US-20, Wauseon to Bryan | Bryan (8,729) | 79,817 |
| Auglaize + Mercer | Grand Lake St. Marys, Wapakoneta, St. Marys, Celina; SR-29/SR-66 country | Celina (10,934) | 88,966 |
| Champaign + Logan | US-68 and US-33, Urbana to Bellefontaine | Bellefontaine (14,123) | 84,865 |
| Hardin + Wyandot | US-30/SR-67 farmland, Kenton to Upper Sandusky | Kenton (7,944) | 52,586 |
| Crawford + Morrow | US-30 and US-42, Bucyrus, Galion, Mount Gilead; the Mansfield-Marion gap | Bucyrus (11,683) | 76,961 |
| Fayette + Madison | US-62 and US-38, Washington Court House to London, the plain southwest of Columbus | Washington Court House (14,407) | 72,791 |
| Clinton + Highland | US-68/US-50/SR-73, Wilmington to Hillsboro | Wilmington (12,668) | 85,335 |
| Adams + Brown | The Ohio River hills, SR-41/SR-125, Georgetown, West Union, Ripley | Georgetown (4,458) | 71,144 |
| Jackson + Pike | Scioto-Ohio hills, SR-32/US-35 and US-23 (Waverly), Wellston | Jackson (6,252) | 59,736 |
| Gallia + Meigs | The Ohio River, SR-7, Gallipolis to Pomeroy | Gallipolis (3,312) | 51,422 |
| Hocking + Vinton | The Hocking Hills, US-33 and SR-93 | Logan (7,292) | 40,853 |
| Morgan + Perry | The Muskingum-Hocking uplands, SR-37/SR-78, New Lexington, McConnelsville | New Lexington (4,430) | 49,213 |
| Guernsey + Monroe + Noble | I-77 and I-70 at Cambridge, I-77 south by Caldwell, SR-78 to Woodsfield | Cambridge (10,088) | 65,935 |
| Carroll + Harrison | Upland east of the Tuscarawas, Carrollton and Cadiz, US-22/SR-9 | Carrollton (3,089) | 41,201 |
| Coshocton + Holmes | Walhonding valley and Amish country, US-36/SR-83 | Coshocton (11,053) | 80,820 |

Station rule: the largest place in places.json, as in NM. Carroll's Carrollton (3,089) edges Cadiz (3,059).

Exceptions, alone under 50k:
- **Shelby** 48,229 (Sidney 20,591). Almost 50k and a real I-75 city.
- **Ottawa** 40,362 (Port Clinton 6,027). The Lake Erie peninsula and the Bass islands; its four neighbours (Erie, Lucas, Sandusky, Wood) are all counties of 50k or more, and Port Clinton would lose its station to a bigger town.
- **Preble** 40,998 (Eaton 8,391). On I-70/US-35 between Dayton and Indiana; its other neighbours are Butler, Montgomery and Darke (52k, alone by the rule).

Rejected: Gallia + Meigs + Vinton with Hocking + Perry and Morgan + Monroe + Noble (see Alternative). Adams + Pike (Pike belongs on US-23/Jackson). Fayette + Highland, Madison alone (Madison is Columbus's orbit but 44k). Fulton + Williams + Henry (4 corners too wide). Ottawa + Sandusky (a 59k county that should stay alone).

### Alternative (also 69 regions)

`["Gallia", "Meigs", "Vinton"], ["Hocking", "Perry"], ["Morgan", "Monroe", "Noble"]` in place of Gallia-Meigs, Hocking-Vinton, Morgan-Perry and Guernsey-Monroe-Noble, with Guernsey alone (38k, a fourth exception). Pro: Vinton joins the Ohio River side and Logan joins Perry in one Hocking Hills region, and Morgan-Noble-Monroe is a clean Appalachian trio. Con: Cambridge's county is left alone at 38k.

### Map review

- Neighbour lists are symmetric; every county has a place; the state totals 11,799,331 in 88 counties.
- Place names to clean up: "The Village of Indian Hill" (Hamilton), "Matamoras (New Matamoras)", "Hartford (Croton)", "Gann (Brinkhaven)", "Centerville (Thurman)", "Rome (Stout)"; "The Plains" has a null population.
- Duplicate place names across counties (Oakwood, Shawnee, Sherwood, New Haven, Lafayette, Newport, Harrisburg, Bainbridge, Shiloh, Dillonvale and others) need care in the pack.
- Indiana and Michigan neighbours exist as merged Indiana regions (`in-adams-wells`, `in-blackford-jay-randolph`, `in-dekalb-noble`, `in-fayette-franklin-union`, `in-lagrange-steuben`, `mi-branch-hillsdale`); no missing neighbours found for those borders. Lake Erie islands are not checked against the polygons.
