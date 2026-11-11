# British Columbia pack: notes

## Region merges (phase 1)

Populations: `raw/counties.json` (Statistics Canada, 2021 Census) and `raw/places.json`.
Every group below was checked against the neighbours in `counties.json` (each member borders
another member). Highway, rail and ferry facts are well-known ones, named where used.

### Recommended: 29 → 22 regions

```
merge: [["Northern Rockies", "Peace River"], ["Kitimat-Stikine", "North Coast", "Stikine"], ["Cariboo", "Central Coast"], ["Mount Waddington", "Strathcona"], ["qathet", "Sunshine Coast"], ["Central Kootenay", "Kootenay Boundary"]]
```

| Group | Why | Main station | Population |
| --- | --- | --- | --- |
| Northern Rockies + Peace River | Fort Nelson's only road south is the Alaska Highway to Fort St. John | Fort St. John (21,465) | 66,010 |
| Kitimat-Stikine + North Coast + Stikine | Northwest BC: Hwy 16 and the CN line down the Skeena to Prince Rupert; Hwy 37 (Stewart-Cassiar) north through Dease Lake into the Stikine; Haida Gwaii by the Prince Rupert–Skidegate ferry | Prince Rupert (12,300; the port). Terrace (12,017) is a near-tie, if you'd rather have the hub | 56,654 |
| Cariboo + Central Coast | Bella Coola's only road is Hwy 20 to Williams Lake | Williams Lake (10,947) | 66,513 |
| Mount Waddington + Strathcona | The North Island: Hwy 19 Campbell River–Port McNeill–Port Hardy | Campbell River (35,519) | 58,989 |
| qathet + Sunshine Coast | One coast along Hwy 101, joined by the Earls Cove–Saltery Bay ferry; neither has a road to the rest of the mainland | Powell River (13,943). Sechelt (10,847) is one ferry closer to Vancouver | 53,666 |
| Central Kootenay + Kootenay Boundary | The West Kootenay: Trail–Castlegar–Nelson (Hwys 22 and 3A) | Nelson (11,106) | 95,661 |

Left alone though under 50k:
- **Alberni-Clayoquot** (33.5k, Port Alberni): its only road, Hwy 4, goes to Nanaimo RD; no road to its one small neighbour, Strathcona.
- **Bulkley-Nechako** (37.7k, Smithers): the Hwy 16 stretch between Prince George and Terrace; its sensible partner group (Kitimat-Stikine) is full.

### Alternatives

A. **Fewer merges (23 regions):**
```
merge: [["Northern Rockies", "Peace River"], ["Kitimat-Stikine", "Stikine"], ["Cariboo", "Central Coast"], ["Mount Waddington", "Strathcona"], ["qathet", "Sunshine Coast"], ["Central Kootenay", "Kootenay Boundary"]]
```
Pro: Terrace (38,473) and Prince Rupert/Haida Gwaii (18,181) each keep a station. Con: two main stations about 145 km apart on the Skeena; North Coast is small.

B. **Strict California rule (20 regions):** the recommended list plus
`["Alberni-Clayoquot", "Nanaimo"]` (203,888, Nanaimo) and `["Bulkley-Nechako", "Fraser-Fort George"]` (134,716, Prince George).
Pro: no region under 50k. Con: Port Alberni/Tofino and Smithers (about 370 km from Prince George) lose their stations.

(No merges, 29 regions: Stikine, 683 people, and Central Coast, 3,582, would each get a main station. Not recommended.)

### Map and data issues found

1. `raw/places.json` puts **Port McNeill** (2,356) and **Alert Bay** in Strathcona. Both are `offMap` (off the simplified coast), and `tools/make-raw.js` then picks the nearest region *label*; their census codes (5943…) say Mount Waddington. Harmless with the recommended merge; the better fix is to use the first 4 digits of a place's CSD code when it has one.
2. Seven `community` entries reuse a municipality's population by name: Squamish (placed in Metro Vancouver, 23,819), Osoyoos, Penticton, New Westminster, Campbell River, Lytton, Ashcroft. Towns in phase 2 must ignore these duplicates.
3. Regions and neighbours otherwise look right. Strathcona and Mount Waddington include mainland inlets, so they border Cariboo, Squamish-Lillooet and qathet by land (empty Coast Mountains, no road). The Sunshine Coast, qathet, Vancouver Island and Haida Gwaii reach the rest of BC only by water, so the ferry bridges (Horseshoe Bay–Langdale, Little River (Comox)–Powell River, Tsawwassen–Swartz Bay, Horseshoe Bay–Departure Bay, Tsawwassen–Duke Point, Prince Rupert–Skidegate) should also count as borders for unlocking.
