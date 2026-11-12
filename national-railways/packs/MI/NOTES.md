# Michigan (MI) pack notes

## Region merges (phase 1)

Populations: `packs/MI/raw/counties.json` and `places.json` (U.S. Census Bureau, 2020; state total 10,077,674). Every group was checked as connected through `neighbors`. Roads, railways and geography are from well-known facts, not data.

### Recommended (83 -> 54 regions)

```
merge: [["Branch", "Hillsdale"], ["Huron", "Sanilac"], ["Mecosta", "Osceola"], ["Lake", "Missaukee", "Wexford"], ["Manistee", "Mason", "Oceana"], ["Benzie", "Leelanau"], ["Antrim", "Charlevoix", "Emmet"], ["Cheboygan", "Montmorency", "Presque Isle"], ["Alcona", "Alpena", "Oscoda"], ["Arenac", "Iosco", "Ogemaw"], ["Clare", "Gladwin", "Roscommon"], ["Crawford", "Kalkaska", "Otsego"], ["Chippewa", "Luce", "Mackinac"], ["Alger", "Delta", "Schoolcraft"], ["Dickinson", "Iron", "Menominee"], ["Gogebic", "Ontonagon"], ["Baraga", "Houghton", "Keweenaw"]]
bridges: [["Emmet", "Mackinac"], ["Cheboygan", "Mackinac"]]
names: {}
```

(Check with the tool that bridge names may be county names when the counties are merged; otherwise use the group names.) No `names` needed; the automatic ones read fine. The 36 counties of 50k or more stay alone, and so does Gratiot (below).

| Group | Pop | Main station (places.json) | Why |
|---|---|---|---|
| Branch-Hillsdale | 90,627 | Coldwater 13,827 (Hillsdale 8,040 is the alternative) | US-12 southern tier, one farm plain |
| Huron-Sanilac | 72,010 | Bad Axe 3,026 | the Thumb, M-53 and the lake shore; Sandusky 2,710 is the other town |
| Mecosta-Osceola | 62,598 | Big Rapids 7,730 | US-131 (Big Rapids, Reed City) |
| Lake-Missaukee-Wexford | 60,826 | Cadillac 10,367 | Cadillac, US-131/M-55; Lake City, Baldwin |
| Manistee-Mason-Oceana | 80,739 | Ludington 7,653 | Lake Michigan shore, US-31 (Ludington, Manistee, Hart) |
| Benzie-Leelanau | 40,264 | Frankfort 1,249 (Suttons Bay 571 is far smaller) | M-22 shore, Sleeping Bear; below 50k, see exceptions |
| Antrim-Charlevoix-Emmet | 83,593 | Petoskey 5,869 | Little Traverse Bay and US-31 (Petoskey, Charlevoix, Boyne City, Elk Rapids); Mackinaw City is in Emmet |
| Cheboygan-Montmorency-Presque Isle | 47,732 | Cheboygan 4,770 (Rogers City 2,851) | I-75/US-23 north-east, forest |
| Alcona-Alpena-Oscoda | 47,301 | Alpena 10,209 | US-23 Lake Huron shore, Alpena is the only real town |
| Arenac-Iosco-Ogemaw | 60,998 | East Tawas 2,668 (West Branch 2,347 on I-75) | Saginaw Bay/US-23 and I-75 |
| Clare-Gladwin-Roscommon | 79,705 | Clare 3,260 (Gladwin 3,069; Roscommon only 981) | US-10/US-127, Houghton Lake |
| Crawford-Kalkaska-Otsego | 56,021 | Gaylord 4,284 (Grayling 1,855 and Kalkaska 2,190 are on the same I-75/US-131 corridor) | northern forest plateau |
| Chippewa-Luce-Mackinac | 54,027 | Sault Ste. Marie 13,336 | eastern Upper Peninsula, I-75, the Mackinac Bridge (St. Ignace 2,306) |
| Alger-Delta-Schoolcraft | 53,789 | Escanaba 12,420 | US-2 / M-28 Lake Michigan and Superior shore, Manistique, Munising |
| Dickinson-Iron-Menominee | 61,087 | Menominee 8,483 (Iron Mountain 7,519 plus Kingsford 5,142 is more central) | Menominee Range, US-2/US-141, Wisconsin border |
| Gogebic-Ontonagon | 20,189 | Ironwood 5,042 | far western Upper Peninsula; below 50k, see exceptions |
| Baraga-Houghton-Keweenaw | 47,553 | Houghton 8,389 | Keweenaw, Houghton-Hancock, L'Anse |

### Exceptions

- **Gratiot (42k) stays alone:** every neighbour (Clinton, Isabella, Midland, Montcalm, Saginaw, Shiawassee) is 50k or more.
- **Gogebic-Ontonagon (20k):** only two counties; no other neighbour fits (Iron is better with Iron Mountain, Houghton is across the Keweenaw ridge). It is the smallest region, accepted because the area is remote.
- **Benzie-Leelanau (40k):** Manistee is better kept with Mason, and Grand Traverse (95k) stays alone.
- **Groups of 47k-48k** (Cheboygan..., Alcona..., Baraga...): the only remaining neighbours are already used or are on the other side of a divide; within the 3-county limit.
- The Mackinac Bridge (Emmet/Cheboygan with Mackinac) is the only link between the two peninsulas.

### Alternative

Gogebic-Iron-Ontonagon (32k) with Dickinson-Menominee (49k): gives Gogebic a third county, but Iron River is much closer to Iron Mountain than to Ironwood. Another: Leelanau-Benzie-Manistee (65k) plus Mason-Oceana (56k): ties the Leelanau Peninsula to the south, away from Traverse City.

### Map notes (things to check)

- 212 of the 745 places have `pop: null` (unincorporated CDPs), including Houghton Lake (Roscommon), Mio (Oscoda), Copper Harbor (Keweenaw), Grand Marais (Alger); these are real places that cannot be chosen as stations by population, and Roscommon, Oscoda and Keweenaw have few other options.
- counties.json gives Mackinac no Lower Peninsula neighbour, hence the bridges. Isle Royale (Keweenaw), Beaver and Mackinac islands exist only as part of their counties.
- No asymmetric neighbours found, county populations sum to 10,077,674 (matches the state total).
