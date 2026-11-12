# Ontario (ON) pack notes

## Region merges (phase 1)

Populations come from `packs/ON/raw/counties.json` and `packs/ON/raw/places.json` (Statistics Canada, 2021 Census). Distances are straight lines between `places.json` points. Roads, railways and bridges are marked "well known". A script checked that every merge group shares a border in `neighbors`. Ontario has 8 divisions under 50,000: Manitoulin, Rainy River, Haliburton, Sudbury District, Prince Edward, Timiskaming, Lennox and Addington, and Parry Sound. Every one of them is in a group below.

### Recommended (49 → 41 regions)

```
merge: [["Greater Sudbury", "Sudbury", "Manitoulin"], ["Kenora", "Rainy River"], ["Kawartha Lakes", "Haliburton"], ["Muskoka", "Parry Sound"], ["Cochrane", "Timiskaming"], ["Frontenac", "Lennox and Addington"]]
join: [["Prince Edward", "Hastings"]]
bridges: add ["Manitoulin", "Bruce"] to the two that are already there
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Greater Sudbury + Sudbury + Manitoulin | The district surrounds the city completely. Left alone, Sudbury would be a dead end that can only be reached through a 22k ring, although it is a CN/CP rail junction (well known). Manitoulin's only link is the Little Current bridge, then Hwy 6 to Espanola (well known), 32 km away. The three also share one public health unit, Public Health Sudbury & Districts (well known) | Sudbury (92,093, population centre) | 202,431 |
| Kenora + Rainy River | Fort Frances is 154 km from Kenora on Hwy 71 (well known), against 305 km to Thunder Bay. This is the northwest corner | Kenora (14,967) | 85,437 |
| Kawartha Lakes + Haliburton | Hwy 35 runs from Lindsay to Minden (63 km). The old Victoria Railway ran from Lindsay to Haliburton (well known). The two share a riding, Haliburton–Kawartha Lakes–Brock, and the HKPR health unit (well known). Haliburton has **no place with a population** in `places.json`, so it can't hold a station alone | Lindsay (22,367). The "Kawartha Lakes" city entry (79,247) is a point near the middle of the city, not a town | 99,818 |
| Muskoka + Parry Sound | Hwy 11 (Huntsville → Burk's Falls, 37 km) and Hwy 400/69 both run on from Muskoka into the district (well known). Parry Sound is 60 km from Huntsville. The two share the Parry Sound–Muskoka riding (well known) | Huntsville (21,147; its population centre is 6,639, while Bracebridge's is 9,884) | 113,583 |
| Cochrane + Timiskaming | The Hwy 11 and Ontario Northland corridor north of Temagami, through the clay belt and the gold camps (well known). Kirkland Lake is 102 km from Timmins but 209 km from North Bay | Timmins (41,145) | 109,387 |
| Frontenac + Lennox and Addington | Napanee is 45 km from Kingston, and Loyalist (Amherstview) sits on Kingston's edge. The two share the KFL&A health unit (well known) | Kingston (132,485) | 206,962 |
| join Prince Edward → Hastings | Both of the County's fixed links reach Hastings (well known): the Bay Bridge to Belleville, and the Hwy 33 bridge over the Murray Canal at Carrying Place to Trenton (Quinte West). It shares Hastings Prince Edward Public Health (well known) | Belleville (55,071; population centre 75,052) | 171,450 |

Left alone: every other division has at least 61,000 people. The smallest are Huron (61k), Dufferin (66k), Muskoka before the merge (67k) and Bruce (73k).

### Alternative (42 regions)

Keep Greater Sudbury alone, and merge `["Sudbury", "Manitoulin"]` instead: 36,303 people, with Espanola (5,185) as the station.
- **Pro:** the district and the island get their own station, on the road to Manitoulin.
- **Con:** the region becomes a donut, and Sudbury can only be reached through it. Espanola is only 66 km from Sudbury.

Other options I weighed and rejected:
- Timiskaming with Nipissing (116,140). Temiskaming Shores is 133 km from North Bay and 162 km from Timmins, but Kirkland Lake leans to Timmins.
- Joining Prince Edward to Lennox and Addington (70,886). Its only link would be the Glenora Ferry, and the station would be Greater Napanee (16,879).

### Names
The tool joins member names alphabetically with " & ". That would give, for example, "Greater Sudbury / Grand Sudbury & Manitoulin & Sudbury", because the census name is bilingual. A short name such as "Sudbury-Manitoulin" would read better.

### Map and data problems seen
1. **Algoma's label** (-83.91, 47.92) falls inside Sudbury District, in the lobe around Chapleau. It needs moving, for example toward Wawa or Sault Ste. Marie.
2. **Perth is listed twice.** The town in Lanark is correct (44.90, -76.25). A second "Perth" (kind `municipality`, same 6,469 people and the same csd 3509021) sits at Perth County's centre (43.50, -81.08) but is tagged `on-lanark`. Drop it in phase 2.
3. **"Sudbury" is listed twice**, both with 92,093: one at 46.50, -80.98 and one at 46.52, -80.90. "Greater Sudbury" (city) has no population.
4. **Places with no population.**
   - Haliburton County has none at all: Minden Hills, Algonquin Highlands and Highlands East have no figure, and Dysart et al is missing.
   - A "Haliburton" municipality point with no population sits in Peterborough County (44.17, -78.51).
   - Atikokan (Rainy River) has no population.
   - Prince Edward County as a municipality is missing, so Picton (4,508) is the County's biggest place.
5. **Toronto and Peel each have two zero-area sliver rings** on their shared border (around -79.59, 43.63). They look harmless.
6. **Checked and fine.**
   - Greater Sudbury is a proper hole in Sudbury District. The merge removes it.
   - Every `neighbors` list matches the real land borders as far as I know.
   - A 0.05° grid over the land found no gaps or overlaps.
   - Every place lies in its own region, apart from the stray Perth and Clachan (no population, sitting on the Elgin/Chatham-Kent line).

**Water crossings.** Add **["Manitoulin", "Bruce"]**: the MS Chi-Cheemaun car ferry runs from Tobermory to South Baymouth, in season only (well known). The ferries to Wolfe, Howe, Amherst, Pelee and Christian islands, the St. Joseph Island bridge and Moosonee–Moose Factory all stay inside one division. The Bay Bridge and the Glenora Ferry are already in the list.
