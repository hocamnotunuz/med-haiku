# Idaho (ID) pack notes

## Region merges (phase 1)

Populations: `packs/ID/raw/counties.json` and `packs/ID/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`, which is within a few people of the 2020 Census counts). Every pair below shares a border in `neighbors` (checked). Roads, rivers and railways named are well known unless marked otherwise.

### Recommended (44 → 25 regions)

```
merge: [["Bonner", "Boundary"], ["Benewah", "Shoshone"], ["Clearwater", "Idaho", "Lewis"], ["Gem", "Payette"], ["Adams", "Washington"], ["Boise", "Valley"], ["Elmore", "Owyhee"], ["Blaine", "Camas"], ["Gooding", "Jerome", "Lincoln"], ["Cassia", "Minidoka"], ["Butte", "Custer", "Lemhi"], ["Clark", "Jefferson"], ["Fremont", "Teton"], ["Oneida", "Power"], ["Bear Lake", "Caribou", "Franklin"]]
```

Alone, over 50k: Ada (Boise City 235,719), Canyon (Nampa 100,308), Kootenai (Coeur d'Alene 54,642), Bonneville (Idaho Falls 65,599), Twin Falls (Twin Falls 51,811), Bannock (Pocatello 56,327), Madison (Rexburg 39,427).

Alone, under 50k (exceptions):
- **Latah** 39,523, Moscow (25,452): the University of Idaho town on the Palouse. Its neighbours are Lewiston, a separate city below the Lewiston Hill grade, or the small forest counties.
- **Nez Perce** 42,091, Lewiston (34,207): where the Snake and Clearwater rivers meet, and the inland seaport at the head of the Columbia–Snake barge route.
- **Bingham** 47,983, Blackfoot (12,428): almost 50k, and the I-15 town between Idaho Falls and Pocatello.

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Bonner + Boundary | US-95 and the rail lines from Sandpoint north to Bonners Ferry and the BC border | Sandpoint (8,657) | 59,160 |
| Benewah + Shoshone | Silver Valley (I-90) and the St. Joe River (old Milwaukee Road from Avery to St. Maries) | St. Maries (2,358); Kellogg (2,316) is nearly tied | 22,699 |
| Clearwater + Idaho + Lewis | Upper Clearwater on US-12 (Orofino, Kamiah, Kooskia) and the Camas Prairie on US-95 | Grangeville (3,319); Orofino (3,227) is close | 28,801 |
| Gem + Payette | Lower Payette River farm valley: Emmett, New Plymouth, Payette | Payette (8,127) | 44,511 |
| Adams + Washington | Weiser River valley on US-95: Weiser, Cambridge, Council, New Meadows | Weiser (5,629) | 14,880 |
| Boise + Valley | ID-55 up the Payette canyon to Cascade and McCall, plus the Boise Basin | McCall (3,682) | 19,358 |
| Elmore + Owyhee | Mountain Home and the empty Owyhee desert; ID-51/ID-78 link Bruneau, Grand View and Marsing along the Snake (moderately well known) | Mountain Home (16,040) | 40,580 |
| Blaine + Camas | Wood River Valley and the Camas Prairie (US-20; Camas Creek drains to the Big Wood) | Hailey (9,172) | 25,352 |
| Gooding + Jerome + Lincoln | North side of the Snake on I-84/US-93; the UP main line runs through Shoshone and Gooding | Jerome (12,358) | 44,970 |
| Cassia + Minidoka | "Mini-Cassia": Burley and Rupert/Heyburn across the Snake | Burley (11,723) | 46,274 |
| Butte + Custer + Lemhi | US-93 runs Arco–Mackay (Big Lost River) and Challis–Salmon (Salmon River) | Salmon (3,124) | 14,834 |
| Clark + Jefferson | I-15 and the UP Montana line north through Roberts and Dubois to Monida Pass | Rigby (5,041) | 31,679 |
| Fremont + Teton | Ashton–Tetonia–Driggs on ID-32/33; gateways to Yellowstone and Teton Pass | St. Anthony (3,697) | 25,018 |
| Oneida + Power | Pocatello's rural west and south; ID-37/38 run via Rockland and Holbrook (the weakest link) | American Falls (4,561) | 12,442 |
| Bear Lake + Caribou + Franklin | Idaho's Bear River valley: Montpelier, Soda Springs (US-30, UP), Grace, Preston (ID-34) | Preston (5,595); Soda Springs (3,130) is more central | 27,591 |

US-95 stays a clean chain of regions: Bonner-Boundary, Kootenai, Benewah-Shoshone (Plummer), Latah, Nez Perce, Clearwater-Idaho-Lewis, Adams-Washington, then Gem-Payette or Canyon.

Rejected:
- Latah + Benewah (49,054): leaves Shoshone (13,168) alone.
- Jerome into Twin Falls (one metro over the Perrine Bridge): costs the north-side station.
- Owyhee into Canyon: Homedale and Marsing face Caldwell, but Canyon would then reach Nevada.
- Teton + Madison: Teton Valley connects more simply to Ashton.

### Alternative (24 regions)

Same list, but add `["Latah", "Nez Perce"]` (81,614; main station Lewiston).
- Pro: it mirrors Washington's Asotin-Garfield-Whitman (Pullman with Clarkston) and removes two exceptions.
- Con: Moscow loses its main station, and the region spans the Lewiston Hill grade.

A west-central variant also works, with the same count: [Payette, Washington], [Boise, Gem], [Adams, Valley]. It keeps McCall and New Meadows together but splits the Weiser valley.

### Map and data check

1. **The map looks right.** All 236 places lie inside their tagged county, every label is inside its county, and no county is in several pieces. A 0.02° grid found no gaps and no overlaps. County areas match the real ones (Idaho County about 8,470 sq mi, Owyhee about 7,640). Neighbours agree on both sides with the `wa-`, `or-`, `nv-` and `bc-` regions.
2. **Missing neighbours (expected, until those states arrive):**
   - Montana: Boundary, Bonner, Shoshone, Clearwater, Idaho, Lemhi, Clark and Fremont.
   - Wyoming: Fremont, Teton, Bonneville, Caribou and Bear Lake.
   - Utah: Bear Lake, Franklin, Oneida and Cassia.
3. **Places without population:** Hamer (Jefferson) and Lost River (Custer) are incorporated cities with `pop: null`. The other 36 are CDPs (for example Fort Hall, Garden Valley, Mountain Home AFB).
4. **Names:** the Census calls the capital "Boise City", so show it as "Boise". The region name "Boise-Valley County" can be mistaken for the city of Boise.
