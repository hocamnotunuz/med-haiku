# Brickfall Siege: MVP prototype

Working title. A 3D castle-destruction game for phones where every brick is simulated.
This folder holds the single-file prototype that is published as a claude.ai artifact.

## What is in the prototype

- One procedurally built castle: four corner towers, curtain walls with a gate and iron portcullis,
  a central keep with wooden floors and iron ring beams, and wooden houses in the courtyard.
- Castle sizes from 1,500 to 40,000 bricks, in three materials (wood, stone, metal).
- Cannonball and bomb, limited ammo, a "% destroyed" meter with stars at 20 / 40 / 60 %.
- Touch controls: tap to aim, drag to walk around, pinch to zoom. Mouse and keyboard also work.
- Settings: castle size, moving-piece budget, physics engine, sharpness, shadows, unlimited ammo, sound.
- A performance panel (frames per second, physics time, moving pieces) for testing phones.

## How the physics stays fast with huge castles

1. **Statues until touched.** Standing bricks are not in the physics engine at all. Only bricks near
   something moving get a temporary collider.
2. **Support map.** Every touching pair of bricks is a joint with a strength. A structure check
   finds bricks that no longer reach the ground and passes each brick's weight down to the bricks
   holding it. Overloaded joints break, crushed bricks crumble to dust, unsupported parts fall.
3. **Chunks.** Parts that break off fall as chunks of up to 32 bricks, with touching bricks merged
   into a few collision boxes. Chunks split further when they land hard.
4. **Budget.** Pieces that come to rest are frozen as rubble. When too many pieces move at once,
   the calmest are frozen first and extra broken bricks crumble to dust.
5. **Two engines.** Rapier (WebAssembly) is used when the device allows it, otherwise cannon-es
   (plain JavaScript) takes over automatically.

## Measured on the test machine (desktop CPU, headless browser)

| Castle | Bricks | Joints | Worst physics step during a big collapse |
|---|---|---|---|
| Medium | 5,060 | 17,286 | about 1.5 ms |
| Colossal | 40,727 | 153,583 | about 19 ms |

Phones will be slower. Use the performance panel to measure real devices.

## Next steps

- Measure on real phones and tune the default moving-piece budget.
- Versus mode: two castles taking turns against a computer opponent.
- More weapons (freeze, acid), more castle layouts, level progression.
- Choose the final name and art direction.
- Decide on the engine for the store release (web wrapper vs. Unity).
