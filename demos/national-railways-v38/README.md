# National Railways, version 38 (frozen demo)

This folder is a frozen copy of **National Railways version 38**, the game as it was published on
2026-11-11: California, Nevada, Arizona, Oregon, Washington and British Columbia, with the city maps
of Los Angeles, San Francisco, San Diego, Sacramento and San Jose.

- **Source:** commit `b731b0d` ("British Columbia joins the game (pilot province)",
  full hash b731b0d32418dc333e0ca716ff48df49222dd657, the `national-railways/` folder). Every file here is that commit's file, byte for byte, and
  matches what was published as version 38 (40 files; the published index.html only adds the page
  wrapper the artifact host puts around every page).
- **Published separately** as the artifact "National Railways Demo (v38)". That artifact is never
  updated.
- **Frozen:** nothing may edit this folder: no tool, no pack agent, no later change. The game
  keeps growing in `national-railways/` (version 39: all of Canada and the US).

To play it locally, serve this folder (for example `python3 -m http.server` here) and open
`index.html` in a browser.
