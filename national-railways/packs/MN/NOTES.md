# Minnesota (MN) pack notes

## Region merges (phase 1)

**Outcome:** the recommended list was applied as written (51 regions, with all five renames). The map, raw facts and terrain were rebuilt, and the pack (phase 2, below) is built on them. Kittson's Manitoba neighbours stay, as the main agent decided. Kittson really borders Manitoba along the 49th parallel (Noyes faces Emerson, in Division No. 2). My flag in item 2 below was only about `mb-division-no-3-4`, which meets Kittson at a single point.

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

## The pack (phase 2)

**Sources.**
- **Populations and points:** `packs/MN/raw/` (U.S. Census Bureau). Station `pop` is the region's population in thousands from `counties.json`. Coordinates are `places.json` points rounded to 2 decimals, except Minneapolis, St. Paul and Shakopee (moved to their downtowns), Rothsay (nudged off a county line) and the scenic places below.
- **Facts added by hand** (bridges, scenic places, roads and railways) are well known unless marked "moderately known". A point marked "approx." is one I gave from memory, within about a mile or two.
- **How reachability was checked:** with `NR.blockedReason` / `NR.segmentGeo` in Gentle and Tough. The game was loaded as `tools/check-pack.js` loads it, plus `js/geography.js`, with every pack's map and terrain. I checked every pair of places within 100 mi with at least one in Minnesota: 3,538 pairs, 607 of them into North Dakota, South Dakota, Manitoba and Ontario. For the neighbours, I compared their links with and without this pack's bridges. Helper scripts were in `/tmp/mn-work/`.

### Start

`start: ["mn-hennepin", "mn-ramsey", "mn-carver"]`: Minneapolis, St. Paul and Chaska. Ramsey and Carver both touch Hennepin, as Kansas's and Texas's starts do.
- **Types:** metro, metro and farm. Chaska is typed by the rest of Carver County: farmland and farm towns (Waconia, Norwood Young America, Cologne) west of its suburbs. South Dakota's Harrisburg and Nebraska's Blair are the precedents.
- **First track:** the hint pairs Minneapolis with Chaska (20 mi crow, 23 mi of track, open in both modes, no river). The pack test laid it, and 20 and 25 passengers arrived in the week, in two runs.
- **Considered and rejected:**
  - Dakota as the third county, the only one that touches both cities. Typing Lakeville, a 440k suburban county's station, as farm goes too far.
  - Anoka or Washington. Both are suburban, so the start would be all metro. Washington doesn't touch Hennepin either.
  - Leaving St. Paul out, as Ontario leaves out Peel. The capital belongs in the start, and the third county already gives the first track riders.

### Main stations (51)

Each id is unused in every other pack (the checker checks). MSP, MPL, STP, STPL, DLH, RST, CAMB, MSHL, LKV, WDB, BLN, ALX, AUS, CHF, PRN, HUT, WLM, ELY and MORA are taken elsewhere.

| id | Station | Region | Type | Size | Region pop (k) | Level | Town pop |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MPLS | Minneapolis | Hennepin County | metro | 5 | 1282 | metro | 429,988 |
| SPL | St. Paul | Ramsey County | metro | 4 | 552 | metro | 311,516 |
| LKVL | Lakeville | Dakota County | metro | 3 | 440 | metro | 69,497 |
| BLNE | Blaine | Anoka County | metro | 3 | 364 | metro | 70,216 |
| WDBY | Woodbury | Washington County | metro | 2 | 268 | metro | 75,106 |
| SHK | Shakopee | Scott County | metro | 2 | 151 | metro | 43,701 |
| CSK | Chaska | Carver County | farm | 2 | 107 | metro | 27,812 |
| BUFL | Buffalo | Wright County | farm | 2 | 141 | metro | 16,180 |
| ELKR | Elk River | Sherburne County | farm | 2 | 97 | metro | 25,841 |
| NBRN | North Branch | Chisago County | farm | 1 | 57 | metro | 10,788 |
| CMBG | Cambridge | Isanti-Kanabec County | farm | 1 | 57 | metro | 9,621 |
| ROCH | Rochester | Olmsted County | metro | 2 | 163 | south | 121,392 |
| FBT | Faribault | Rice County | farm | 2 | 67 | south | 24,456 |
| RWG | Red Wing | Goodhue-Wabasha County | farm | 2 | 69 | south | 16,540 |
| WNA | Winona | Winona County | farm | 1 | 50 | south | 25,997 |
| CHTF | Chatfield | Fillmore-Houston County | farm | 1 | 40 | south | 3,000 |
| AUST | Austin | Mower County | farm | 1 | 40 | south | 26,177 |
| OWA | Owatonna | Dodge-Steele-Waseca County | farm | 2 | 77 | south | 26,430 |
| ALEA | Albert Lea | Freeborn-Faribault County | farm | 1 | 45 | south | 18,495 |
| MKT | Mankato | Blue Earth County | metro | 2 | 69 | south | 44,516 |
| SPTR | St. Peter | Le Sueur-Nicollet-Sibley County | farm | 2 | 78 | south | 12,068 |
| NULM | New Ulm | Brown-Redwood County | farm | 1 | 41 | south | 14,127 |
| WDM | Windom | Cottonwood-Watonwan County | farm | 1 | 23 | south | 4,807 |
| FMNT | Fairmont | Martin-Jackson County | farm | 1 | 30 | south | 10,467 |
| WTG | Worthington | Nobles-Rock County | farm | 1 | 32 | south | 13,941 |
| PIP | Pipestone | Murray-Pipestone County | farm | 1 | 18 | south | 4,211 |
| MRSL | Marshall | Lyon-Lincoln County | farm | 1 | 31 | south | 13,890 |
| STC | St. Cloud | Stearns County | metro | 2 | 158 | west | 69,606 |
| HTCH | Hutchinson | McLeod-Meeker County | farm | 1 | 60 | west | 14,605 |
| WLMR | Willmar | Kandiyohi-Renville County | farm | 1 | 58 | west | 21,021 |
| MVDO | Montevideo | Chippewa-Lac qui Parle-Yellow Medicine County | farm | 1 | 29 | west | 5,401 |
| BNSN | Benson | Big Stone-Swift County | farm | 1 | 15 | west | 3,483 |
| MORR | Morris | Grant-Stevens County | farm | 1 | 16 | west | 5,107 |
| WHTN | Wheaton | Traverse-Wilkin County | farm | 1 | 10 | west | 1,458 |
| ALEX | Alexandria | Douglas-Pope County | farm | 1 | 50 | west | 14,350 |
| FFM | Fergus Falls | Otter Tail County | farm | 1 | 60 | west | 14,124 |
| MHD | Moorhead | Clay County | farm | 2 | 65 | west | 44,510 |
| LTF | Little Falls | Morrison-Todd-Wadena County | farm | 2 | 73 | west | 9,128 |
| PRNC | Princeton | Benton-Mille Lacs County | farm | 2 | 68 | west | 5,002 |
| DUL | Duluth | St. Louis County | coast | 2 | 200 | north | 86,721 |
| TWOH | Two Harbors | Cook-Lake County | coast | 1 | 17 | north | 3,637 |
| CLQ | Cloquet | Carlton-Pine County | mountain | 2 | 65 | north | 12,566 |
| BRND | Brainerd | Crow Wing County | mountain | 2 | 66 | north | 14,403 |
| GRPD | Grand Rapids | Aitkin-Itasca County | mountain | 1 | 61 | north | 11,090 |
| PKRP | Park Rapids | Cass-Hubbard County | mountain | 1 | 51 | north | 4,147 |
| BJI | Bemidji | Beltrami-Clearwater County | mountain | 1 | 55 | north | 15,430 |
| DTL | Detroit Lakes | Becker-Mahnomen County | farm | 1 | 41 | north | 10,021 |
| CKN | Crookston | Polk-Norman County | farm | 1 | 38 | north | 7,486 |
| TRF | Thief River Falls | Pennington-Marshall-Red Lake County | farm | 1 | 27 | north | 8,863 |
| RSAU | Roseau | Kittson-Roseau County | farm | 1 | 20 | north | 2,745 |
| IFLS | International Falls | Koochiching-Lake of the Woods County | mountain | 1 | 16 | north | 5,808 |

**Stations that are not the biggest place** (comments in `pack.js`):
- **Buffalo** (16,180), not Otsego (19,966): Buffalo is the county seat in the middle of Wright County. Otsego is a spread-out city at the county's corner, 5 mi across the Mississippi from Elk River's station. Otsego is a town.
- **Chatfield** (3,000), not La Crescent (5,337): La Crescent faces La Crosse, Wisconsin, across the Mississippi, which will have its own station. Chatfield is the next biggest, on the Root River's North Branch, 18 mi from Rochester. La Crescent and Caledonia are towns.
- **St. Peter** (12,068), not North Mankato (14,276), as the brief says: North Mankato is 3 mi from Mankato's station.
- **Princeton** (5,002), not Sauk Rapids (13,857): Sauk Rapids is St. Cloud's twin across the Mississippi, 4.4 mi from its station. My choice: Princeton is the next biggest place, on US-169, and the town of Mille Lacs County's farm country. Milaca (the seat, central) and Foley (Benton's seat, 2,706) were the alternatives. Milaca is a town.
- **Crookston** (7,486), not East Grand Forks (9,176), as the brief says: Crookston is Polk County's seat, on US-2.
- **Wheaton** (1,458), not Breckenridge (3,440): Breckenridge faces Wahpeton, North Dakota's station, 1.3 mi away across the Red River. This is the same rule as above. Wheaton is Traverse County's seat.
- **Windom** (4,807) over St. James (4,796): the bigger by 11 people, and on US-71 and the Des Moines River. St. James is a town.

**Points moved from the Census point:**
- Minneapolis, to downtown, 1 mi north.
- St. Paul, to downtown, 0.7 mi east. The point sits on the map's simplified Mississippi, and every line from it uses the downtown bridge, as the real ones do.
- Shakopee, to its downtown on the Minnesota River, 3 mi northwest of the Census point. The Census point is southeast of the city's centre. Downtown Shakopee is 4.2 mi from Chaska's station.

**Points kept:**
- Duluth stays at its Census point, 1.8 mi west-southwest of downtown, because the map's Lake Superior covers downtown and Canal Park.
- St. Cloud stays at its Census point, 2.3 mi south-southwest of downtown. That is within the brief's few kilometres, as North Dakota's Grand Forks is at 2.5 mi.
- The other stations are at their Census points. For the cities I checked, these lie within about 2 mi of downtown (Lakeville, Chaska and Elk River are the farthest, at 1.9 mi).

**Sizes** (PACKS.md guide, judged against the other packs):
- **5: Minneapolis** (Hennepin 1,282k). It is the core of a 3.7-million metro, between Denver's (3.0M) and Seattle's (4.0M). Hennepin is nearly twice Denver County (716k, size 4). Portland (815k) and San Francisco (874k) are 5 as the cores of smaller metros.
- **4: St. Paul** (552k), as Omaha (585k) and Spokane (539k).
- **3: Lakeville and Blaine** (440k and 364k), as Colorado's Thornton and Aurora and Utah's Layton.
- **2: everything from 65k up:**
  - Woodbury, Shakopee, Chaska, Buffalo and Elk River, the suburban counties of 97k to 268k.
  - Duluth, Rochester and St. Cloud, as Fargo, Billings and Sioux Falls.
  - Mankato and Moorhead, as Minot and Grand Forks.
  - Faribault, Brainerd, Red Wing, Owatonna, St. Peter, Little Falls, Princeton and Cloquet, the regions of 65k to 78k, as New Mexico's Española (75k) and Clovis (69k) and Colorado's Montrose (74k).
- **1: the rest**, up to 61k (Grand Rapids, Fergus Falls and Hutchinson are at 60k to 61k).

**Types:**
- **Metro (9):** Minneapolis, St. Paul, Lakeville, Blaine, Woodbury, Shakopee, Rochester, St. Cloud, Mankato.
- **Coast (2):** Duluth (the port) and Two Harbors (the North Shore).
- **Mountain (6):** Cloquet, Brainerd, Grand Rapids, Park Rapids, Bemidji and International Falls. Mountain is the game's type for forested country: Ontario's Kenora and Manitoba's Lac du Bonnet use it for the same Shield and lake country.
- **Farm (34):** the rest.
  - Moorhead is farm so Fargo–Moorhead has riders. This follows North Dakota's Mandan and South Dakota's Fort Pierre.
  - Detroit Lakes is farm: Becker's west is Red River valley prairie, and Manitoba's Beausejour, also on the forest's edge, is farm too.
- **Scenic stations:** Rochester (the Mayo Clinic, downtown; world famous, and on the brief's list) and Pipestone (Pipestone National Monument, at the town's north edge).
- **Port:** Duluth, "Port of Duluth-Superior". It is the Great Lakes' westernmost port, and the brief names it.
- **Airport:** Minneapolis, "Minneapolis–Saint Paul International". It is in Hennepin County, between the two cities, and is the only Minnesota airport over the other packs' bar. Duluth and Rochester have small regional airports (from memory: well under a million passengers a year).

### Towns (90: 81 towns and 9 scenic places)

**Towns by level area:**
- **Metro area (16):** Bloomington, Brooklyn Park, Minnehaha Falls, Roseville, Eagan, Hastings, Coon Rapids, Stillwater, Cottage Grove, New Prague, Waconia, Monticello, Otsego, Zimmerman, Lindstrom, Mora.
- **South (24):** Stewartville, Northfield, Lake City, Cannon Falls, Wabasha, St. Charles, La Crescent, Caledonia, Grand Meadow, Waseca, Kasson, Blue Earth, Wells, Lake Crystal, Le Sueur, Gaylord, Redwood Falls, Walnut Grove, St. James, Jackson, Luverne, Slayton, Tracy, Tyler.
- **West (20):** Sartell, Sauk Centre, Litchfield, Glencoe, Olivia, Granite Falls, Madison, Ortonville, Elbow Lake, Browns Valley, Rothsay, Glenwood, Perham, Pelican Rapids, Barnesville, Hawley, Wadena, Long Prairie, Milaca, Onamia.
- **North (30):** Hibbing, Virginia, Ely, Orr, Pine City, Moose Lake, Crosby, Pequot Lakes, Aitkin, Deer River, Walker, Cass Lake, Pine River, Itasca State Park, Bagley, Mahnomen, Ada, Fosston, Warren, Hallock, Warroad, Baudette, Littlefork, Voyageurs National Park, Gooseberry Falls, Split Rock Lighthouse, Silver Bay, Lutsen, Grand Marais, Grand Portage.

Bloomington, Brooklyn Park, Eagan and Coon Rapids (64k to 90k) are size 2. All other towns are size 1.

**How towns were chosen:**
- **The default:** the next-biggest towns, spread out. The checker gives no spacing warnings.
- **Picked for a corridor rather than their size:**
  - **Cass Lake** carries US-2 between Lake Winnibigoshish and Cass Lake. Without it, Grand Rapids–Bemidji and Deer River–Bemidji are Gentle only.
  - **Silver Bay and Lutsen** carry the North Shore. Without them, Split Rock to Grand Marais is 60 mi of map lake, blocked in both modes.
  - **Orr and Littlefork** give International Falls links south on US-53 and US-71. Without them, its only town links within 60 mi are Baudette and Voyageurs.
  - **Tyler and Rothsay** give Lincoln and Wilkin counties a town.
- **Left out, each a twin across a river from another region's or state's station:** East Grand Forks (3.3 mi from Grand Forks), Breckenridge (1.3 mi from Wahpeton), North Mankato (3 mi from Mankato) and Sauk Rapids (4.4 mi from St. Cloud).
- **Kept, but near a neighbour's town:**
  - Ortonville is kept as Big Stone-Swift's town (2,017; US-12), though South Dakota's Big Stone City town is 1.5 mi away across the outlet of Big Stone Lake.
  - La Crescent faces La Crosse, Wisconsin, which comes later.

**Scenic places** (all well known):

| Place | Point | Notes |
| --- | --- | --- |
| Minnehaha Falls | 44.92, -93.21 approx. | The falls in Minnehaha Regional Park, Minneapolis |
| Lake City | Census point | On Lake Pepin, the Mississippi's widest natural stretch, and where water skiing was invented (1922) |
| Walnut Grove | Census point | Laura Ingalls Wilder's Plum Creek and museum. The *Little House on the Prairie* TV series is set here. South Dakota's De Smet is the precedent |
| Ely | Census point | The gateway to the Boundary Waters Canoe Area Wilderness |
| Itasca State Park | 47.24, -95.21 approx. | The Mississippi's headwaters at Lake Itasca's outlet (Clearwater County) |
| Voyageurs National Park | 48.58, -93.18 | The Rainy Lake Visitor Center (about 48.58, -93.16, approx.) is under the map's Rainy Lake, so moved 0.9 mi west |
| Gooseberry Falls | 47.15, -91.48 | The state park on MN-61 (about 47.14, -91.47), moved 0.8 mi inland off the map's lake |
| Split Rock Lighthouse | 47.22, -91.38 | The lighthouse (about 47.20, -91.37), moved 1.5 mi inland off the map's lake |
| Grand Portage | 47.97, -89.69 | Grand Portage National Monument (about 47.96, -89.68), moved 0.8 mi inland |

Lutsen is a town (Lutsen Mountains, the ski area; a Census CDP point), not a scenic place. The Mall of America (Bloomington) and Jay Cooke State Park were considered and left out: the brief lists only natural and historic sights, and a mall is not one.

### Passes (0) and bridges (45)

**No passes.** Minnesota's map has no mountain cells at all, only 22 hill cells, in the southeast's bluffs and the Arrowhead.

**Bridges.** Each point is on the map's river where it passes the town. Where that is more than about a mile from the real bridge, the distance is given. The checker gives no warnings. Rivers never block track; a real bridge makes a river crossing cheaper: FB3k against FB10k for a new one in Gentle, FB5k against FB25k in Tough. "Uses" counts the links (within 100 mi, Tough) whose river crossing uses the bridge.

| Bridge | Point | Source | Uses |
| --- | --- | --- | --- |
| Mississippi River bridge (Bemidji) | 47.48, -94.88 | The river between Lake Bemidji and Lake Irving (moderately known) | 18 |
| Mississippi River bridge (Grand Rapids) | 47.22, -93.54 | US-169 (Pokegama Avenue), 1 mi from it (moderately known) | 12 |
| Mississippi River bridge (Aitkin) | 46.55, -93.72 | US-169, 1.6 mi from it (moderately known) | 6 |
| Mississippi River bridge (Brainerd) | 46.36, -94.21 | Downtown Brainerd, MN-210 (moderately known) | 21 |
| Mississippi River bridge (Little Falls) | 45.98, -94.37 | Downtown Little Falls, MN-27 (moderately known) | 19 |
| Sartell Bridge | 45.61, -94.21 | Sartell (moderately known) | 32 |
| Mississippi River bridges (St. Cloud) | 45.55, -94.16 | Downtown St. Cloud: DeSoto and University bridges | 24 |
| Mississippi River bridge (MN-25, Monticello–Big Lake) | 45.31, -93.79 | Moderately known | 31 |
| MN-101 Mississippi River bridge (Elk River–Otsego) | 45.29, -93.58 | MN-101 links I-94 to US-10 and US-169 (moderately known) | 41 |
| Anoka–Champlin Bridge (US-169) | 45.19, -93.40 | Moderately known | 25 |
| I-694 Mississippi River bridge (Brooklyn Center–Fridley) | 45.07, -93.29 | Moderately known | 40 |
| Mississippi River bridges (downtown Minneapolis) | 44.98, -93.25 | Hennepin Avenue and Stone Arch bridges | 44 |
| Ford Parkway Bridge (Minneapolis–St. Paul) | 44.92, -93.21 | The Intercity Bridge at Lock and Dam No. 1 | 46 |
| Mississippi River bridges (downtown St. Paul) | 44.94, -93.08 | Wabasha Street and Robert Street bridges | 91 |
| Wakota Bridge (I-494) | 44.87, -93.03 | South St. Paul–Newport | 30 |
| Mendota Bridge (MN-55) | 44.88, -93.19 | The Minnesota River at Fort Snelling | 72 |
| I-35W Minnesota River bridge (Bloomington–Burnsville) | 44.82, -93.29 | Where I-35W meets the map's river, 1.5 mi north of the real crossing | 60 |
| Minnesota River bridges (Shakopee) | 44.81, -93.52 | US-169 and Holmes Street | 56 |
| Minnesota River bridge (MN-41, Chaska) | 44.79, -93.60 | Moderately known | 44 |
| Minnesota River bridge (Le Sueur) | 44.47, -93.94 | US-169, 1.4 mi from it (moderately known) | 29 |
| Minnesota River bridge (St. Peter) | 44.33, -93.96 | Broadway, MN-99 (moderately known) | 44 |
| Minnesota River bridges (Mankato–North Mankato) | 44.18, -94.02 | Veterans Memorial Bridge, 1.5 mi from it (moderately known) | 10 |
| Minnesota River bridge (New Ulm) | 44.32, -94.45 | US-14 and MN-15 (moderately known) | 51 |
| Minnesota River bridge (Morton–Redwood Falls) | 44.57, -95.06 | US-71 (moderately known) | 23 |
| Minnesota River bridge (Granite Falls) | 44.81, -95.54 | Downtown Granite Falls (moderately known) | 42 |
| Minnesota River bridge (Montevideo) | 44.93, -95.73 | Montevideo's bridge, 1.2 mi from the map's point (moderately known) | 17 |
| Minnesota River bridge (US-12, Ortonville) | 45.30, -96.46 | At Big Stone Lake's outlet, to Big Stone City, South Dakota (moderately known) | 43 |
| Hastings Bridge (US-61) | 44.76, -92.85 | The 2013 arch bridge | 28 |
| Red Wing Bridge (US-63) | 44.60, -92.51 | On the map's river, 1.9 mi from the real one; for Wisconsin | 14 |
| Wabasha–Nelson Bridge | 44.39, -92.03 | For Wisconsin | 0 |
| Winona Bridge | 44.07, -91.64 | For Wisconsin | 1 |
| Mississippi River bridges (La Crescent–La Crosse) | 43.82, -91.28 | US-14/61 into La Crosse; for Wisconsin | 0 |
| I-94 St. Croix River bridge (Lakeland–Hudson) | 44.97, -92.77 | For Wisconsin | 2 |
| St. Croix River bridges (Stillwater) | 45.04, -92.79 | The St. Croix Crossing (2017) and the Stillwater Lift Bridge; for Wisconsin | 1 |
| St. Croix River bridge (US-8, Taylors Falls) | 45.41, -92.67 | 1.3 mi from it (moderately known); for Wisconsin | 0 |
| Red River bridge (Wahpeton–Breckenridge), Red River bridges (Fargo–Moorhead), (Grand Forks–East Grand Forks), Red River bridge (Pembina) | 46.27, -96.60; 46.88, -96.78; 47.93, -97.01; 48.97, -97.23 | North Dakota's names and points, unchanged, so they stay when North Dakota isn't loaded | 23, 18, 5, 4 |
| Fort Frances–International Falls International Bridge | 48.61, -93.40 | Highway 11 / US-53 and US-71 | 3 |
| Baudette–Rainy River International Bridge | 48.72, -94.59 | Highway 11 / MN-72 | 2 |
| Blatnik Bridge (I-535, Duluth–Superior) | 46.74, -92.10 | For Wisconsin | 0 |
| Bong Bridge (US-2, Duluth–Superior) | 46.73, -92.13 | For Wisconsin | 0 |
| Des Moines River bridge (Windom) | 43.85, -95.13 | US-71, 1.5 mi from it (moderately known) | 15 |
| Des Moines River bridge (Jackson) | 43.61, -95.00 | US-71 and I-90 (moderately known) | 11 |

**Not added:**
- The Pigeon River crossing (Highway 61 to Thunder Bay): the map has no river there, and Grand Portage–Thunder Bay is open anyway.
- The Prescott (US-10) and Dresbach (I-90) crossings into Wisconsin: they are less well known, and Hastings and La Crescent cover them.
- I-90's Big Sioux River crossing near Brandon, South Dakota: it is South Dakota's river (see "For the main agent").
- Lakes: Mille Lacs, Leech, Winnibigoshish, the Red Lakes and Lake of the Woods have no road crossings. Rainy Lake has none either; I-Falls' and Baudette's bridges cross the Rainy River.

**Neighbours.** I compared 1,337 pairs of North Dakota, South Dakota, Manitoba and Ontario places whose lines pass over Minnesota, with this pack's bridges and without them.
- No link opens or closes.
- Seven Big Stone City lines into North Dakota now use the Ortonville bridge and become cheaper.

### How the map plays

**Counts.** Of the 3,538 pairs of places within 100 mi (at least one in Minnesota):
- 40 are blocked in Gentle and 75 in Tough. In Tough, Mille Lacs Lake blocks 25, Leech Lake 12, Lake Superior 7 (the North Shore's long lines), Lake of the Woods 5, Winnibigoshish 4, and the rest are smaller lakes;
- with links up to 100 mi, every Minnesota place is in one network in both modes;
- the fewest open links any Minnesota place has within 100 mi is 4 (Grand Portage).

**The real routes, as chains,** are all open in both modes:
- **I-94:** Fargo–Moorhead–Fergus Falls–Alexandria–Sauk Centre–St. Cloud–Monticello–Otsego–Brooklyn Park–Minneapolis.
- **US-10 and the Empire Builder:** Fargo–Moorhead–Hawley–Detroit Lakes–Perham–Wadena–Little Falls–St. Cloud–Elk River–Coon Rapids–Minneapolis.
- **I-35:** Albert Lea–Owatonna–Faribault–Lakeville–Minneapolis, and St. Paul–Blaine–North Branch–Pine City–Moose Lake–Cloquet–Duluth.
- **I-90:** Sioux Falls–Luverne–Worthington–Jackson–Fairmont–Blue Earth–Albert Lea–Austin–Grand Meadow–Stewartville–St. Charles–Winona–La Crescent.
- **US-2:** Grand Forks–Crookston–Fosston–Bagley–Bemidji–Cass Lake–Deer River–Grand Rapids–Duluth.
- **US-169 and the Iron Range:** Princeton–Milaca–Onamia–Crosby–Aitkin–Grand Rapids–Hibbing–Virginia–Ely. Onamia–Crosby follows Mille Lacs Lake's west shore. Onamia–Aitkin, straight across the lake, is blocked.
- **US-53:** Virginia–Orr–International Falls.
- **The Minnesota River valley:** Ortonville–Montevideo–Granite Falls–Redwood Falls–New Ulm–Mankato–St. Peter–Le Sueur–Shakopee–Minneapolis.
- **The North Shore (MN-61):** Duluth–Two Harbors–Gooseberry Falls–Split Rock Lighthouse–Silver Bay–Lutsen–Grand Marais–Grand Portage–Thunder Bay.
- **The Mississippi below the Twin Cities:** Minneapolis–St. Paul–Hastings–Red Wing–Lake City–Wabasha–Winona–La Crescent.
- **US-71:** Jackson–Windom–Redwood Falls–Olivia–Willmar–Sauk Centre–Long Prairie–Wadena–Park Rapids–Bemidji–International Falls, with Littlefork on the way.
- **US-75:** Luverne–Pipestone–Madison–Ortonville–Wheaton–Wahpeton–Moorhead–Ada–Crookston–Warren–Hallock, then Altona, Manitoba.

**Main stations: neighbouring main stations reached directly** (other states' and provinces' marked *). The same in both modes unless noted.

| Station | Reaches |
| --- | --- |
| Minneapolis | Blaine, Chaska, Lakeville, St. Paul, Shakopee, Elk River, Buffalo |
| St. Paul | Blaine, Lakeville, Minneapolis, Woodbury |
| Lakeville | Red Wing, Minneapolis, St. Paul, Faribault, Shakopee, Woodbury |
| Blaine | North Branch, Minneapolis, Cambridge, St. Paul, Elk River, Woodbury |
| Woodbury | Blaine, North Branch, Lakeville, St. Paul |
| Shakopee | Chaska, Lakeville, Minneapolis, St. Peter, Faribault |
| Chaska | Minneapolis, St. Peter, Hutchinson, Shakopee, Buffalo |
| Buffalo | Chaska, Minneapolis, Hutchinson, Elk River, St. Cloud |
| Elk River | Blaine, Princeton, Minneapolis, Cambridge, St. Cloud, Buffalo |
| North Branch | Blaine, Cloquet, Cambridge, Woodbury |
| Cambridge | Grand Rapids, Blaine, Princeton, Cloquet, North Branch, Elk River |
| Rochester | Owatonna, Chatfield, Red Wing, Austin, Winona |
| Faribault | Lakeville, Owatonna, Red Wing, St. Peter, Shakopee |
| Red Wing | Lakeville, Owatonna, Rochester, Faribault, Winona |
| Winona | Chatfield, Red Wing, Rochester |
| Chatfield | Austin, Rochester, Winona |
| Austin | Owatonna, Albert Lea, Chatfield, Rochester |
| Owatonna | Mankato, Albert Lea, Red Wing, St. Peter, Austin, Rochester, Faribault |
| Albert Lea | Mankato, Owatonna, Fairmont, Austin |
| Mankato | New Ulm, Windom, Owatonna, Albert Lea, Fairmont, St. Peter |
| St. Peter | Mankato, New Ulm, Chaska, Owatonna, Willmar, Hutchinson, Faribault, Shakopee |
| New Ulm | Mankato, Montevideo, Windom, Willmar, St. Peter, Marshall, Pipestone |
| Windom | Mankato, New Ulm, Fairmont, Pipestone, Worthington |
| Fairmont | Mankato, Windom, Albert Lea, Worthington |
| Worthington | Windom, Fairmont, Pipestone, Sioux Falls* |
| Pipestone | New Ulm, Windom, Marshall, Worthington, Brookings* |
| Marshall | New Ulm, Montevideo, Pipestone, Brookings*, Watertown* |
| St. Cloud | Princeton, Alexandria, Willmar, Hutchinson, Little Falls, Elk River, Buffalo |
| Hutchinson | Chaska, Willmar, St. Peter, St. Cloud, Buffalo |
| Willmar | Benson, New Ulm, Montevideo, Alexandria, St. Peter, Hutchinson, St. Cloud |
| Montevideo | Benson, New Ulm, Willmar, Marshall, Watertown*, Milbank* |
| Benson | Montevideo, Alexandria, Morris, Willmar, Wheaton, Milbank*, Sisseton* |
| Morris | Benson, Alexandria, Fergus Falls, Wheaton |
| Wheaton | Benson, Moorhead, Morris, Fergus Falls, Wahpeton*, Sisseton* |
| Alexandria | Benson, Morris, Willmar, Little Falls, Fergus Falls, St. Cloud |
| Fergus Falls | Detroit Lakes, Moorhead, Alexandria, Morris, Little Falls, Wheaton |
| Moorhead | Detroit Lakes, Crookston, Fergus Falls, Wheaton, Fargo*, Wahpeton* |
| Little Falls | Detroit Lakes, Princeton, Park Rapids, Brainerd, Alexandria, Fergus Falls, St. Cloud |
| Princeton | Brainerd, Cambridge, Little Falls, Elk River, St. Cloud; Gentle only: Grand Rapids (115 mi) |
| Duluth | Grand Rapids, Cloquet, Two Harbors, International Falls; blocked: Kenora* (236 mi) |
| Two Harbors | Duluth; blocked: Kenora* (231 mi), Thunder Bay* (147 mi) |
| Cloquet | Grand Rapids, North Branch, Cambridge, Duluth |
| Brainerd | Grand Rapids, Princeton, Little Falls; Gentle only: Park Rapids (56 mi) |
| Grand Rapids | Cloquet, Park Rapids, Brainerd, Cambridge, International Falls, Duluth; Gentle only: Bemidji (66 mi), Princeton (115 mi) |
| Park Rapids | Grand Rapids, Detroit Lakes, Bemidji, Little Falls; Gentle only: Brainerd (56 mi) |
| Bemidji | Detroit Lakes, Park Rapids, International Falls, Thief River Falls, Crookston; Gentle only: Grand Rapids (66 mi); blocked: Roseau (102 mi) |
| Detroit Lakes | Bemidji, Park Rapids, Moorhead, Little Falls, Crookston, Fergus Falls |
| Crookston | Detroit Lakes, Bemidji, Moorhead, Thief River Falls, Fargo*, Grand Forks*, Mayville* |
| Thief River Falls | Bemidji, Roseau, Crookston, Grafton*, Grand Forks* |
| Roseau | Beausejour*, Steinbach*, Winkler*, International Falls, Thief River Falls, Grafton*; blocked: Bemidji (102 mi) |
| International Falls | Grand Rapids, Bemidji, Roseau, Duluth; Gentle only: Kenora* (97 mi); blocked: Beausejour* (173 mi) |

**Where geography doesn't allow more:**
- **Two Harbors** reaches only Duluth among neighbouring main stations. Its other neighbours are Ontario's Kenora & Rainy River (231 mi) and Thunder Bay (147 mi, blocked by Lake Superior). Its own region's towns reach Thunder Bay: Grand Portage (35 mi) and Grand Marais (66 mi), both open in both modes.
- **Grand Rapids–Bemidji** (66 mi) crosses 5.5 mi of the map's Cass Lake: Gentle only. The US-2 chain through Deer River and Cass Lake (the town) is open in both modes.
- **Brainerd–Park Rapids** (56 mi) crosses 2.5 mi of Gull Lake: Gentle only. Brainerd–Pine River–Park Rapids and Brainerd–Pequot Lakes–Pine River are open.
- **Bemidji–Roseau** (102 mi) crosses the Red Lakes: blocked. Bemidji–Thief River Falls–Roseau is open, as MN-89 really goes around the lakes' west end.
- **Princeton–Grand Rapids** (115 mi) crosses Mille Lacs Lake: Gentle only. The US-169 chain through Onamia, Crosby and Aitkin is open.
- **International Falls–Kenora** (97 mi) is Gentle only. In Tough it crosses Rainy Lake and 1.5 to 4 mi stretches of Lake of the Woods near Kenora, too far from Minnesota for a bridge point (Ontario's notes found the same for Fort Frances).

**Across the borders** (open in both modes unless noted):
- **North Dakota:**
  - I-94 and US-10: Moorhead–Fargo, 4 mi, over the shared Fargo–Moorhead bridge.
  - US-2: Crookston–Grand Forks, 25 mi. It pays one new Red River bridge, because North Dakota's Grand Forks point is 2.5 mi west of downtown.
  - Wheaton–Wahpeton (32 mi); Thief River Falls and Roseau–Grafton; Crookston–Mayville.
- **South Dakota:**
  - I-90: Luverne–Sioux Falls (27 mi) and Worthington–Sioux Falls (57 mi).
  - US-14: Pipestone–Brookings, Marshall–Brookings, Tyler–Brookings.
  - US-12: Ortonville–Milbank (11 mi) and Benson–Milbank.
  - Wheaton–Sisseton and Benson–Sisseton.
- **Manitoba** (US-75 and the Noyes–Emerson crossing):
  - Hallock–Altona (36 mi), Hallock–Winkler, Hallock–Steinbach and Hallock–Winnipeg (77 mi).
  - Roseau–Steinbach, Roseau–Beausejour and Roseau–Whiteshell; Warroad–Whiteshell.
- **Ontario:**
  - Grand Portage–Thunder Bay (35 mi), Grand Portage–Kakabeka Falls and Grand Marais–Thunder Bay.
  - Ely–Atikokan (60 mi, a new bridge over 1.5 mi of Lac la Croix).
  - International Falls–Kenora is Gentle only (above).
  - **Baudette–Rainy River and International Falls–Fort Frances can't be checked:** Ontario's pack has no place at Rainy River or Fort Frances. Its notes leave Fort Frances out and say it "can come back with the Minnesota pack, over the International Falls bridge". Both bridges are in this pack, on the map's Rainy River.

### Levels (4)

| Level | Area | Stations | Goals |
| --- | --- | --- | --- |
| Minneapolis–St. Paul | `metro` | Minneapolis, St. Paul, Lakeville, Blaine, Woodbury, Shakopee, Chaska, Buffalo, Elk River, North Branch, Cambridge | 50 passengers; own 5 counties; 10 crates of produce (the farm ring to the cities) |
| Rochester, Mankato & the South | `south` | Rochester, Faribault, Red Wing, Winona, Chatfield, Austin, Owatonna, Albert Lea, Mankato, St. Peter, New Ulm, Windom, Fairmont, Worthington, Pipestone, Marshall | 140 passengers; connect MPLS–ROCH (US-52, open in both modes); own 15 counties |
| St. Cloud, the Prairie & the Red River | `west` | St. Cloud, Hutchinson, Willmar, Montevideo, Benson, Morris, Wheaton, Alexandria, Fergus Falls, Moorhead, Little Falls, Princeton | 280 passengers; connect MPLS–MHD (I-94 or US-10, open in both modes); one high-speed train |
| The North Woods & Lake Superior | `north` | Duluth, Two Harbors, Cloquet, Brainerd, Grand Rapids, Park Rapids, Bemidji, Detroit Lakes, Crookston, Thief River Falls, Roseau, International Falls | 450 passengers; connect MPLS–DUL (I-35, open in both modes); 25 trucks (from the mountain stations and towns of the North Woods) |

- **Targets** follow the Dakotas', Colorado's and Texas's four levels. Level 2 asks for 15 counties of the 27 open by then.
- **No container goal:** the only port is Duluth, a bulk port, which sits in level 4. Trucks suit the North Woods better.

### Biomes

- **`forest`** (the North Woods): St. Louis, Cook-Lake, Koochiching-Lake of the Woods, Aitkin-Itasca, Beltrami-Clearwater, Cass-Hubbard, Crow Wing and Carlton-Pine. They are pine, spruce and birch on the Shield and the lake country. Ontario lists its Kenora & Rainy River and Thunder Bay as forest across the line.
- **`wooded`** (the Driftless Area's bluffs along the Mississippi): Goodhue-Wabasha, Winona and Fillmore-Houston. They have farms on the ridges and woods on the steep bluffs, which are most of the map's hill cells.
- **Not listed (farmland and grassland):** the prairie, the Red River valley, the Twin Cities, and the farm-and-forest edge (Kittson-Roseau, Becker-Mahnomen, Morrison-Todd-Wadena, Benton-Mille Lacs, Isanti-Kanabec), where farms make up most of the land. That last group is a judgment call. Kittson-Roseau faces Manitoba's forest-listed Division 1-12, but Kittson is Red River valley farmland.

### Checks

- **`node tools/check-pack.js MN`:** `MN: passed (51 stations, 90 towns, 0 city maps, 0 passes, 45 bridges), 0 errors, 0 warnings`.
- **`node tools/check-pack.js`:** `All packs passed.`
- **`node tools/test-pack.js MN`:** `PASSED: 17 passed, 0 warnings, 0 failed`.
  - The start is MPLS, SPL and CSK. The test laid Minneapolis–Chaska (23 mi, 1 train) and bought Anoka (BLNE). 20 and 25 passengers arrived in the week, in two runs.
  - Levels mode starts at level 1.
- **Screenshots** (`test-out/MN/`: arcade light, classic light, levels):
  - The five renamed regions show their new names.
  - The North Woods' trees are in the north. Lake Superior, the Red Lakes, Leech Lake, Mille Lacs and Lake of the Woods are drawn.
  - Minneapolis and St. Paul sit by the Mississippi with the airport mark, and Chaska is on the Minnesota.
  - The bridge names line the Mississippi and the Minnesota through the metro.

### For the main agent

1. **Airport:** only Minneapolis–Saint Paul International. **Port:** only Duluth.
2. **Twin towns across rivers are left out** (East Grand Forks, Breckenridge, North Mankato, Sauk Rapids), and the region stations avoid them: Crookston, Wheaton, St. Peter and Princeton. Two towns sit near a neighbour's place:
   - **Ortonville** is 1.5 mi from South Dakota's Big Stone City town.
   - **La Crescent** faces La Crosse, which comes with Wisconsin.
3. **Wisconsin's crossings are ready,** for Wisconsin's pack to match:
   - The St. Croix at Hudson (I-94), Stillwater and Taylors Falls.
   - The Mississippi at Hastings, Red Wing, Wabasha, Winona and La Crescent.
   - Duluth–Superior: the Blatnik and Bong bridges.
4. **Ontario:** Fort Frances and Rainy River have no place in Ontario's pack. If Ontario adds Fort Frances, the International Falls bridge is on the map's Rainy River (48.61, -93.40). In Tough, Minnesota reaches Ontario through Grand Portage, Grand Marais and Ely.
5. **South Dakota:** I-90's crossing of the Big Sioux east of Sioux Falls has no bridge point. Worthington–Sioux Falls and Luverne–Sioux Falls each pay one new river bridge. South Dakota's pack could add one near Brandon.
6. **North Dakota:** Crookston–Grand Forks pays one new Red River bridge, as above. If wanted, the shared Grand Forks bridge point could sit nearer the line, but that is North Dakota's call.
7. **Judgment calls worth a look:**
   - Minneapolis at size 5 (4 would match Denver).
   - Chaska typed farm for the start.
   - Rochester scenic for the Mayo Clinic.
   - Chatfield and Princeton as stations.

## City maps

**Minneapolis–St. Paul (MPLS, size 5, 12 stops).** One map for both downtowns, keyed by Minneapolis's station. Hub: Target Field Station (the downtown Minneapolis rail and transit hub: Metro Blue and Green lines, Northstar). Stops: Target Field Station, St. Paul Union Depot (Amtrak Empire Builder, Green Line), University of Minnesota (East Bank), Airport (MSP, Lindbergh terminal), Mall of America (Bloomington), Uptown, Northeast Minneapolis, U.S. Bank Stadium, Edina, Midway (Allianz Field), St. Louis Park, Minnehaha Falls. Furthest stop 9.2 mi from the state map's station; closest pair 1.2 mi. Coordinates are from memory (3 decimals, approximate to a few hundred metres); the places are well known. Preview: no stop in water; St. Paul Union Depot and the University sit 200-450 m from the Mississippi's shore, on land. Left out: the outer suburbs (Maple Grove, Woodbury, Lakeville), to keep stops about a mile apart.

- **Main agent's review of the city maps:** every stop checked against its real location; hills and water built (CITIES_ONLY); `test-pack` passed.
