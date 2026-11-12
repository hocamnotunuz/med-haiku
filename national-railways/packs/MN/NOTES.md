# Minnesota (MN) pack notes

## Region merges (phase 1)

Populations: `packs/MN/raw/counties.json` and `packs/MN/raw/places.json` (U.S. Census Bureau; the files' source is the 2020 estimates base, `ESTIMATESBASE2020`; the state total is 5,706,804). Every group is connected through `neighbors`, and I checked the shared border lengths on the rings in `map.js` (given in km below). Roads, rivers and railways named here are well known unless marked "(moderately known)".

### Recommended (87 → 51 regions)

```
merge: [["Goodhue", "Wabasha"], ["Fillmore", "Houston"], ["Dodge", "Steele", "Waseca"], ["Faribault", "Freeborn"], ["Jackson", "Martin"], ["Nobles", "Rock"], ["Murray", "Pipestone"], ["Lincoln", "Lyon"], ["Cottonwood", "Watonwan"], ["Brown", "Redwood"], ["Le Sueur", "Nicollet", "Sibley"], ["McLeod", "Meeker"], ["Kandiyohi", "Renville"], ["Chippewa", "Lac qui Parle", "Yellow Medicine"], ["Big Stone", "Swift"], ["Grant", "Stevens"], ["Traverse", "Wilkin"], ["Douglas", "Pope"], ["Morrison", "Todd", "Wadena"], ["Benton", "Mille Lacs"], ["Isanti", "Kanabec"], ["Carlton", "Pine"], ["Aitkin", "Itasca"], ["Cass", "Hubbard"], ["Beltrami", "Clearwater"], ["Becker", "Mahnomen"], ["Norman", "Polk"], ["Marshall", "Pennington", "Red Lake"], ["Kittson", "Roseau"], ["Koochiching", "Lake of the Woods"], ["Cook", "Lake"]]
names: { "Faribault-Freeborn": "Freeborn-Faribault County", "Lincoln-Lyon": "Lyon-Lincoln County", "Marshall-Pennington-Red Lake": "Pennington-Marshall-Red Lake County", "Norman-Polk": "Polk-Norman County", "Jackson-Martin": "Martin-Jackson County" }
```

No `bridges` or `join`: there are no islands, and the Northwest Angle is part of Lake of the Woods County's single outline (through the lake). It touches Manitoba by land, and that neighbour is listed.

The names follow Nebraska's `Logan-McPherson-Lincoln` and Texas's `Trinity-Houston`: no merged name should start with a city that is a station elsewhere. Faribault is Rice County's main town, next door. Marshall is Lyon County's town. Lincoln is in Nebraska, Norman in Oklahoma and Jackson in Wyoming. Each new name starts with the station's county. Smaller towns elsewhere (Douglas AZ, Cottonwood AZ, Fillmore UT, Grant NE) are left alone.

Alone, 50k or more (19): Hennepin, Ramsey, Dakota, Anoka, Washington, St. Louis, Olmsted, Stearns, Scott, Wright, Carver, Sherburne, Blue Earth, Rice, Crow Wing, Clay, Otter Tail, Chisago and Winona (49,666, which rounds to 50).

Alone, under 50k (one exception):
- **Mower** 40,033, Austin (26,177), on I-90 and US-218. Each of its small neighbours has a better partner: Dodge goes with Owatonna on US-14, Fillmore with Houston in the Root River country, and Freeborn with Faribault on I-90. Joining Freeborn would take Albert Lea's (18,495) station. Idaho set the precedent by keeping Latah, Nez Perce and Bingham (40k to 47k) alone.

| Group (border km) | Why | Main station | Population |
| --- | --- | --- | --- |
| Goodhue + Wabasha (53) | Lake Pepin: US-61 and the BNSF river line (Amtrak's Empire Builder) from Red Wing by Lake City to Wabasha | Red Wing (16,540) | 68,964 |
| Fillmore + Houston (38) | The bluff country of the Root River (Lanesboro, Rushford, Houston; MN-16, moderately known). La Crescent faces La Crosse | La Crescent (5,337) | 40,083 |
| Dodge + Steele + Waseca (39, 39) | US-14 between Mankato and Rochester: Waseca, Owatonna, Dodge Center, Kasson | Owatonna (26,430) | 77,235 |
| Faribault + Freeborn (39) | I-90 from Blue Earth by Alden to Albert Lea | Albert Lea (18,495) | 44,812 |
| Jackson + Martin (39) | I-90 from Jackson by Sherburn to Fairmont | Fairmont (10,467) | 30,021 |
| Nobles + Rock (39) | I-90 from Worthington by Adrian to Luverne | Worthington (13,941) | 31,982 |
| Murray + Pipestone (39) | The Coteau des Prairies: Pipestone (the national monument) and Slayton by Lake Shetek | Pipestone (4,211) | 17,588 |
| Lincoln + Lyon (49) | Marshall is the market town; US-14 runs by Tracy, Balaton and Tyler to Lake Benton (moderately known) | Marshall (13,890) | 31,161 |
| Cottonwood + Watonwan (29) | MN-60 from Windom by Mountain Lake to St. James and Madelia (moderately known) | Windom (4,807); St. James 4,796 is a near tie | 22,775 |
| Brown + Redwood (53) | US-14 from New Ulm by Sleepy Eye and Springfield to Lamberton and Walnut Grove, plus Redwood Falls up the Minnesota River (moderately known) | New Ulm (14,127) | 41,347 |
| Le Sueur + Nicollet + Sibley (28, 55; Le Sueur–Sibley 11) | The lower Minnesota River: US-169 by St. Peter and Le Sueur, and Henderson, Gaylord and Arlington on the west side | North Mankato (14,276), across the river from Mankato; St. Peter (12,068) is the phase 2 alternative | 77,941 |
| McLeod + Meeker (29) | Hutchinson and Litchfield, about 20 miles apart (MN-22, moderately known) | Hutchinson (14,605) | 60,175 |
| Kandiyohi + Renville (39) | US-71 from Willmar south to Olivia, toward the Minnesota River at Morton (moderately known) | Willmar (21,021) | 58,450 |
| Chippewa + Lac qui Parle + Yellow Medicine (35, 33; LqP–YM 71) | The upper Minnesota River from Lac qui Parle lake by Montevideo to Granite Falls, with Madison, Dawson and Canby on the prairie behind | Montevideo (5,401) | 28,847 |
| Big Stone + Swift (26) | US-12 from Benson to Ortonville at Big Stone Lake (moderately known) | Benson (3,483) | 14,998 |
| Grant + Stevens (38) | Morris (the University of Minnesota's Morris campus) with Herman, Hoffman and Elbow Lake | Morris (5,107) | 15,748 |
| Traverse + Wilkin (24) | The Bois de Sioux along the North Dakota line, from Lake Traverse by Wheaton to Breckenridge and Wahpeton, where the Red River begins (US-75, moderately known) | Breckenridge (3,440) | 9,865 |
| Douglas + Pope (48) | Alexandria and Glenwood on Lake Minnewaska, 15 miles apart (MN-29, moderately known) | Alexandria (14,350) | 50,302 |
| Morrison + Todd + Wadena (64, 32) | US-10 and the BNSF main line (the Empire Builder stops at Staples) from Little Falls by Motley and Staples to Wadena, plus Long Prairie (MN-27, moderately known) | Little Falls (9,128) | 73,354 |
| Benton + Mille Lacs (29) | St. Cloud's east side (Sauk Rapids, Foley) and MN-23 to Milaca (moderately known); Princeton is on US-169 | Sauk Rapids (13,857), across the river from St. Cloud | 67,849 |
| Isanti + Kanabec (29) | Cambridge and Mora on MN-65 (moderately known) | Cambridge (9,621) | 57,168 |
| Carlton + Pine (58) | I-35 from Pine City by Hinckley, Sandstone and Moose Lake to Cloquet | Cloquet (12,566) | 65,080 |
| Aitkin + Itasca (55) | The Mississippi from Grand Rapids down to Aitkin, and US-169 by Hill City | Grand Rapids (11,090) | 60,720 |
| Cass + Hubbard (77) | The Leech Lake and Heartland lake country: Park Rapids, Nevis, Akeley and Walker (MN-34 and the Heartland Trail, moderately known) | Park Rapids (4,147) | 51,440 |
| Beltrami + Clearwater (98) | US-2 and the BNSF from Bemidji by Shevlin to Bagley | Bemidji (15,430) | 54,766 |
| Becker + Mahnomen (39) | US-59 from Detroit Lakes by Waubun to Mahnomen, on the White Earth Reservation (moderately known) | Detroit Lakes (10,021) | 40,580 |
| Norman + Polk (59) | The Red River valley from East Grand Forks and Crookston south to Ada and Halstad | East Grand Forks (9,176), across from Grand Forks; Crookston (7,486) is the alternative | 37,628 |
| Marshall + Pennington + Red Lake (67, 61) | Thief River Falls with Red Lake Falls on the Red Lake River, and Warren and Newfolden | Thief River Falls (8,863) | 26,955 |
| Kittson + Roseau (52) | MN-11 along the Canadian line from Karlstad and Greenbush to Roseau and Warroad (moderately known) | Roseau (2,745) | 19,557 |
| Koochiching + Lake of the Woods (37) | The Rainy River: MN-11 from International Falls to Baudette (moderately known) | International Falls (5,808) | 15,829 |
| Cook + Lake (81) | The North Shore: MN-61 from Two Harbors by Silver Bay to Grand Marais | Two Harbors (3,637) | 16,504 |

Station rule: the largest place in places.json, as in Colorado and New Mexico.

Rejected:
- Freeborn + Mower (I-90, 71k): Albert Lea loses its station to Austin.
- Dodge + Mower, to avoid the Mower exception: Kasson and Dodge Center look along US-14 to Rochester and Owatonna, not to Austin (40 miles).
- Brown + Nicollet: New Ulm (14,127) would lose its station to North Mankato (14,276).
- Redwood + Renville (across the river at Redwood Falls): Brown would then need Watonwan, and the I-90 pairs would come apart (Cottonwood + Jackson, Faribault + Martin, Freeborn + Waseca).
- Kandiyohi + Meeker (US-12) with McLeod + Sibley and Le Sueur + Nicollet: Renville would be left for Chippewa, with Olivia about 40 miles from Montevideo.
- Benton alone (St. Cloud's east side): possible, but Mille Lacs would then need Morrison (Little Falls), which Princeton and Milaca do not look to, or Isanti, which pushes Kanabec, Pine and Carlton apart.
- Benton + Morrison (US-10): Little Falls loses its station to Sauk Rapids.
- Kittson + Marshall (US-75) and Lake of the Woods + Roseau: Koochiching would then need Itasca or Beltrami, and the north would come apart.

### Alternative (also 51 regions)

Replace `["Cass", "Hubbard"]`, `["Beltrami", "Clearwater"]`, `["Becker", "Mahnomen"]` and `["Morrison", "Todd", "Wadena"]` with `["Beltrami", "Cass"]` (76,328; Bemidji), `["Becker", "Clearwater", "Mahnomen"]` (49,108; Detroit Lakes), `["Hubbard", "Wadena"]` (35,412; Wadena) and `["Morrison", "Todd"]` (59,292; Little Falls).
- Pro: the White Earth Reservation is in one region, Cass Lake and Walker go with Bemidji, and US-71 joins Wadena to Park Rapids.
- Con: Bagley (Clearwater's seat, 25 miles from Bemidji on US-2) gets Detroit Lakes as its station. Park Rapids (4,147) loses its station to Wadena (4,331), and Beltrami and Cass touch for only 23 km.

A smaller variant, 50 regions: `["Big Stone", "Traverse", "Wilkin"]` (15,033; Breckenridge) and `["Grant", "Stevens", "Swift"]` (25,578; Morris) in place of the three western pairs. US-75 would run along the border lakes in one region, but Ortonville would be about 75 miles from its station.

### Map and data check

1. **The map looks right.** All 87 counties are one piece each, and every label is inside its county. Areas match the Census total areas less Lake Superior: the state is 84,201 sq mi, Lake of the Woods 1,775, Beltrami 3,045, Hennepin 608 and Ramsey 169. The Northwest Angle (tip at 49.385°N) is in Lake of the Woods County.
2. **Neighbours agree both ways** with the `nd-`, `sd-`, `mb-` and `on-` regions, and none is missing. One is doubtful: Kittson and `mb-division-no-3-4` list each other but do not touch on the map (about 2 km apart). In reality they meet only at a point in the Red River, since Emerson is in Division No. 2. It is harmless, but it could be dropped.
3. **Short contacts (corners, 2 km or less):** Mower–Steele 0, Clay–`nd-ransom-richland-sargent` 1, Cottonwood–Nobles 1, Dodge–Rice 1, Hennepin–Sherburne 1, Jackson–Watonwan 1, Lyon–Pipestone 1, Murray–Rock 1, Douglas–Stearns 2, Marshall–`nd-grand-forks` 2. Also short: Lac qui Parle–Swift 6, Cass–Todd 7. No merge depends on any of them.
4. **Places:** all 914 lie inside their tagged county. 854 are cities with populations; the 60 CDPs have none. Repeated names, all real and separate: Big Lake (Sherburne city; Carlton CDP), St. Anthony (Hennepin city; a Stearns city of 92), Rice Lake (St. Louis city; Clearwater CDP), Elbow Lake (Grant city; Becker CDP), Twin Lakes (Freeborn city; Mahnomen CDP), and Mahnomen (the city; also a CDP in St. Louis County near Duluth, which could confuse). Cass County's largest place is Lake Shore (1,064), a Gull Lake resort town by Nisswa, not Walker (973, the seat). This would matter only if Cass stood alone. Four stations sit next to a bigger one: North Mankato (Mankato), Sauk Rapids (St. Cloud), East Grand Forks (Grand Forks, ND) and La Crescent (La Crosse, WI, later); phase 2 may prefer to keep or move them.
