# Brickfall Siege: MVP prototype

Working title. A 3D castle-destruction game for phones where every brick is simulated.
This folder holds the single-file prototype that is published as a claude.ai artifact.

## What is in the prototype

- One procedurally built castle: four corner towers, curtain walls with a gate and iron portcullis,
  a central keep with wooden floors and iron ring beams, and wooden houses in the courtyard.
- Castle sizes from 1,500 to 40,000 bricks, in three materials (wood, stone, metal).
- Three weapons with limited ammo: cannonball (fast, flat), bomb (explodes) and a trebuchet that
  lobs heavy boulders in a high arc over the walls. A "% destroyed" meter with stars at 20 / 40 / 60 %.
- Touch controls: tap to aim, drag to walk around, pinch to zoom. Mouse and keyboard also work.
- Settings: castle size, moving-piece budget, physics engine, sharpness, shadows, unlimited ammo, sound.
- A performance panel (frames per second, physics time, moving pieces) for testing phones.

## How the physics stays fast with huge castles

1. **Statues until touched.** Standing bricks are not in the physics engine at all. Only bricks near
   something moving get a temporary collider.
2. **Support map.** Every touching pair of bricks is a joint with a strength. Support only flows
   the way gravity works: up through bricks resting on bricks, and sideways for a limited reach
   (stone 3 bricks, wood 5, metal 8). Weight is passed down to the best-supported bricks, so it
   arches around holes. Bricks out of reach fall, and overhanging joints snap under too much weight.
3. **Toppling.** Towers and the keep fall over when a row keeps less than 45% of its footing, or
   when the weight above no longer sits over what is left. They tip toward the damaged side.
4. **Chunks.** Parts that break off fall as chunks of up to 32 bricks, with touching bricks merged
   into a few collision boxes. Chunks split further when they land hard.
5. **Budget.** Pieces that come to rest are frozen as rubble. When too many pieces move at once,
   the calmest are frozen first and extra broken bricks crumble to dust.
6. **Two engines.** Rapier (WebAssembly) is used when the device allows it, otherwise cannon-es
   (plain JavaScript) takes over automatically.

## Measured on the test machine (desktop CPU, headless browser)

| Castle | Bricks | Joints | Worst physics step during a big collapse |
|---|---|---|---|
| Medium | 5,060 | 17,286 | about 1.5 ms |
| Colossal | 40,727 | 153,583 | about 19 ms |

Phones will be slower. Use the performance panel to measure real devices.

## Damage feel (medium castle, automated tests)

- One cannonball anywhere: 0.3 to 3% of the castle falls. No single shot topples a tower.
- A tower topples after 2 to 3 cannonballs or 2 to 3 bombs at its base.
- A well-aimed game reaches 37 to 56% (1 to 2 stars); the large castle about 42%.
- Weapons grow with castle size so large castles take a similar number of shots.

## Next steps

- Measure on real phones and tune the default moving-piece budget.
- Versus mode: two castles taking turns against a computer opponent.
- More weapons (freeze, acid), more castle layouts, level progression.
- Choose the final name and art direction.
- Decide on the engine for the store release (web wrapper vs. Unity).
