// National Railways: kinds of place and line names, shared by every state.
// Each state's map, stations and towns come from its pack (packs/<code>/, see js/packs.js).
window.NR = window.NR || {};

// The five kinds of place. In "type of place" mode a passenger wants to reach
// ANY station of a kind, shown by its shape.
NR.PLACE_TYPES = {
  metro: { name: "Metro", shape: "square" },
  coast: { name: "Coast", shape: "half" },
  mountain: { name: "Mountains", shape: "triangle" },
  farm: { name: "Farmland", shape: "circle" },
  desert: { name: "Desert", shape: "diamond" },
};

// Names for the line colors, in the order they unlock.
NR.LINE_NAMES = ["Golden", "Redwood", "Pacific", "Sierra", "Mojave", "Jacaranda", "Delta"];

// Main stations, towns, levels and the starting counties come from the state packs
// (packs/<code>/pack.js, see PACKS.md).
NR.assemblePacks();
