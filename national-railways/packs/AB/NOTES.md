# Alberta (AB) pack notes

## Region merges (phase 1)

Populations: `packs/AB/raw/counties.json` and `packs/AB/raw/places.json` (Statistics Canada, 2021 Census). All pairs below share a border in `neighbors`.

### Recommended (19 → 14 regions)

```
merge: [["Division No. 4", "Division No. 7"], ["Division No. 18", "Division No. 19"], ["Division No. 8", "Division No. 9"], ["Division No. 2", "Division No. 3"], ["Division No. 14", "Division No. 15"]]
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| 4 + 7 | Two small regions: the dry east-central prairie on the Saskatchewan line (Hanna, Oyen, Consort + Coronation, Provost, Stettler, Wainwright) | Wainwright (6,606) | 49,904 |
| 18 + 19 | Greenview (Valleyview, Fox Creek, Grande Cache) looks to Grande Prairie: Hwy 43 and Hwy 40 both lead there (well known) | Grande Prairie (64,141) | 134,393 |
| 8 + 9 | Rocky Mountain House is on Hwy 11, the Red Deer–Sylvan Lake road west (well known); no distinct place in Div. 9 | Red Deer (100,844) | 234,039 |
| 2 + 3 | Southwest towns (Fort Macleod, Pincher Creek, Cardston, Magrath, all under 4,000) look to Lethbridge. The Crowsnest route (Hwy 3) runs Lethbridge–Fort Macleod–Pincher Creek, and the region still borders East Kootenay | Lethbridge (98,406) | 219,281 |
| 14 + 15 | The Rockies: Bow Valley (Canmore, Banff) and the Yellowhead (Jasper–Hinton–Edson, Hwy 16 and the CN main line, well known), joined by the Icefields Parkway | Canmore (15,990) | 66,352 |

Rejected: the tool's automatic rule would give [4, 7], [9, 14, 18] and [3, 15]. [9, 14, 18] is a 600 km foothills arc with no common road (Rocky looks to Red Deer, Valleyview to Grande Prairie); [3, 15] puts Cardston and Claresholm with Banff and Jasper.

Main station note: Wainwright is the biggest town but sits at the far north-east of 4 + 7; Stettler (5,695) is more central. Rule followed; an exception could be written down.

### Alternative (15 regions)

Same, but Division No. 14 stays alone: `[["Division No. 4", "Division No. 7"], ["Division No. 18", "Division No. 19"], ["Division No. 8", "Division No. 9"], ["Division No. 2", "Division No. 3"]]`.
Pro: Hinton/Edson keep a station on the Edmonton–Jasper corridor and Canmore's region stays the compact Bow Valley. Con: two regions under 50k (Hinton 28,617; Canmore 37,735).

### Map and data problems seen

1. **Gap between Divisions 2 and 5.** A diagonal strip of about 970 km² (from about 50.3°N 113.3°W to 50.75°N 111.75°W) is in no region in `map.js`. Duchess (1,053), Southesk and Armada fall in it. Each division is drawn in two pieces: Div. 2 has a detached Bassano/Rosemary piece, Div. 5 a detached Lomond piece. Both counties are really one piece, so this looks like a geometry error in the build.
2. **Places outside Alberta.** 756 of 2,592 places in `places.json` lie outside the province but are tagged with an Alberta division. Examples: 487 BC places in Div. 15 (Kamloops, Princeton), Dawson Creek in 19, Elkford in 6, Fort Smith (NWT) in 16, and Saskatchewan towns (Maple Creek, Leader, Kindersley, Macklin) in 1, 4, 7 and 10. All have no population except Lloydminster, so filter them when you choose towns. A BC "Valleyview" near Kamloops is tagged Div. 15, which clashes with Valleyview, Alberta.
3. **Lloydminster.** Its point (109.98°W) is just inside Saskatchewan. Its 31,582 is the whole two-province population centre, but Division 10's total counts only the Alberta part.
4. **Names from municipalities only.** Div. 16 is called "Wood Buffalo area", but its station should be Fort McMurray (68,002). In Div. 18 Grande Cache (3,037, a locality) is bigger than Valleyview (1,673); this only matters if Div. 18 stays alone.
5. **Missing populations.** Municipality of Crowsnest Pass (only Coleman, 1,441, has a number), Lac La Biche, and Taber (municipality missing; population centre 8,978).
6. The neighbours look right. Div. 1 (Medicine Hat) touches only 2 and 4, and Div. 16 only 12 and 17, until Saskatchewan arrives.
