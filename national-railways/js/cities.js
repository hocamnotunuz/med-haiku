// National Railways: map data for California.
// Everything the game knows about the map lives in this file.
window.NR = window.NR || {};

// The five kinds of place. In "type of place" mode a passenger wants to reach
// ANY city of a kind, shown by its shape.
NR.PLACE_TYPES = {
  metro: { name: "Metro", shape: "square" },
  coast: { name: "Coast", shape: "half" },
  mountain: { name: "Mountains", shape: "triangle" },
  farm: { name: "Farmland", shape: "circle" },
  desert: { name: "Desert", shape: "diamond" },
};

// Names for the line colors, in the order they unlock.
NR.LINE_NAMES = ["Golden", "Redwood", "Pacific", "Sierra", "Mojave", "Jacaranda", "Delta"];

// The California border as [longitude, latitude] points, going clockwise
// from the Oregon border at the coast.
NR.OUTLINE = [
  [-124.21, 42.0], // Oregon border at the coast
  [-120.0, 42.0], // northeast corner
  [-120.0, 39.0], // Lake Tahoe
  [-114.63, 35.0], // Colorado River, end of the long diagonal border
  [-114.57, 34.8],
  [-114.37, 34.46],
  [-114.13, 34.27],
  [-114.43, 34.08],
  [-114.53, 33.93],
  [-114.5, 33.65],
  [-114.72, 33.41],
  [-114.7, 33.09],
  [-114.47, 32.84],
  [-114.72, 32.72], // Yuma
  [-117.12, 32.53], // Mexican border at the Pacific
  [-117.25, 32.7],
  [-117.28, 33.0],
  [-117.4, 33.2],
  [-117.71, 33.46],
  [-117.93, 33.61],
  [-118.17, 33.75],
  [-118.41, 33.74],
  [-118.52, 34.03],
  [-118.8, 34.0],
  [-119.06, 34.09],
  [-119.28, 34.27],
  [-119.7, 34.4],
  [-120.47, 34.45], // Point Conception
  [-120.65, 34.58],
  [-120.64, 34.9],
  [-120.63, 35.14],
  [-120.87, 35.37],
  [-121.19, 35.64],
  [-121.5, 36.0],
  [-121.9, 36.3],
  [-121.95, 36.56],
  [-121.8, 36.8], // Monterey Bay
  [-122.03, 36.95],
  [-122.4, 37.2],
  [-122.5, 37.5],
  [-122.51, 37.78], // San Francisco
  [-122.7, 37.9],
  [-123.02, 38.0], // Point Reyes
  [-123.05, 38.3],
  [-123.7, 38.95], // Point Arena
  [-123.83, 39.36],
  [-123.85, 39.83],
  [-124.1, 40.1],
  [-124.41, 40.44], // Cape Mendocino
  [-124.2, 40.8],
  [-124.15, 41.06],
  [-124.1, 41.5],
  [-124.21, 41.75],
];

// Cities. id = the short code shown on passengers. size = how busy (1 to 5).
// region = which level unlocks the city.
NR.CITIES = [
  // Southern California
  { id: "LA", name: "Los Angeles", lat: 34.05, lon: -118.24, type: "metro", size: 5, region: "south" },
  { id: "SD", name: "San Diego", lat: 32.72, lon: -117.16, type: "metro", size: 4, region: "south" },
  { id: "SB", name: "Santa Barbara", lat: 34.42, lon: -119.7, type: "coast", size: 2, region: "south" },
  { id: "OSD", name: "Oceanside", lat: 33.2, lon: -117.38, type: "coast", size: 2, region: "south" },
  { id: "PSP", name: "Palm Springs", lat: 33.83, lon: -116.55, type: "desert", size: 2, region: "south" },
  { id: "BBR", name: "Big Bear Lake", lat: 34.24, lon: -116.91, type: "mountain", size: 1, region: "south" },
  { id: "BAR", name: "Barstow", lat: 34.9, lon: -117.02, type: "desert", size: 1, region: "south" },
  { id: "ELC", name: "El Centro", lat: 32.79, lon: -115.56, type: "desert", size: 1, region: "south" },
  { id: "NDL", name: "Needles", lat: 34.85, lon: -114.61, type: "desert", size: 1, region: "south" },
  // Central Valley and Central Coast
  { id: "BAK", name: "Bakersfield", lat: 35.37, lon: -119.02, type: "farm", size: 3, region: "central" },
  { id: "FRE", name: "Fresno", lat: 36.74, lon: -119.79, type: "farm", size: 3, region: "central" },
  { id: "VIS", name: "Visalia", lat: 36.33, lon: -119.29, type: "farm", size: 2, region: "central" },
  { id: "SLO", name: "San Luis Obispo", lat: 35.28, lon: -120.66, type: "coast", size: 2, region: "central" },
  { id: "MER", name: "Merced", lat: 37.3, lon: -120.48, type: "farm", size: 1, region: "central" },
  { id: "DV", name: "Death Valley", lat: 36.46, lon: -116.87, type: "desert", size: 1, region: "central" },
  // Bay Area and Sierra Nevada
  { id: "SF", name: "San Francisco", lat: 37.77, lon: -122.42, type: "metro", size: 5, region: "bay" },
  { id: "SJ", name: "San Jose", lat: 37.34, lon: -121.89, type: "metro", size: 4, region: "bay" },
  { id: "SAC", name: "Sacramento", lat: 38.58, lon: -121.49, type: "metro", size: 4, region: "bay" },
  { id: "MRY", name: "Monterey", lat: 36.6, lon: -121.89, type: "coast", size: 2, region: "bay" },
  { id: "MOD", name: "Modesto", lat: 37.64, lon: -120.99, type: "farm", size: 2, region: "bay" },
  { id: "TAH", name: "South Lake Tahoe", lat: 38.94, lon: -119.98, type: "mountain", size: 2, region: "bay" },
  { id: "YOS", name: "Yosemite Valley", lat: 37.75, lon: -119.59, type: "mountain", size: 2, region: "bay" },
  { id: "MAM", name: "Mammoth Lakes", lat: 37.65, lon: -118.97, type: "mountain", size: 1, region: "bay" },
  // Northern California
  { id: "SRO", name: "Santa Rosa", lat: 38.44, lon: -122.71, type: "farm", size: 2, region: "north" },
  { id: "CHI", name: "Chico", lat: 39.73, lon: -121.84, type: "farm", size: 2, region: "north" },
  { id: "RDD", name: "Redding", lat: 40.59, lon: -122.39, type: "farm", size: 2, region: "north" },
  { id: "SHA", name: "Mount Shasta", lat: 41.31, lon: -122.31, type: "mountain", size: 1, region: "north" },
  { id: "EKA", name: "Eureka", lat: 40.8, lon: -124.16, type: "coast", size: 2, region: "north" },
  { id: "FB", name: "Fort Bragg", lat: 39.45, lon: -123.8, type: "coast", size: 1, region: "north" },
];

// Level mode: deliver this many passengers in total to unlock the next region.
NR.LEVELS = [
  { name: "Southern California", regions: ["south"], goal: 50 },
  { name: "Central Valley", regions: ["central"], goal: 140 },
  { name: "Bay Area & Sierra Nevada", regions: ["bay"], goal: 280 },
  { name: "Northern California", regions: ["north"], goal: 450 },
];

// Every game starts with these three cities.
NR.START_CITIES = ["LA", "SB", "PSP"];
