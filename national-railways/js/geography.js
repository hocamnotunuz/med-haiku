// National Railways: real geography on the state map.
// Mountains, bays, lakes and rivers (from js/terrain.js) make track cost more, slow trains
// down, or need a tunnel or a bridge. Two settings: Gentle (the default) and Tough.
(function () {
  "use strict";
  const NR = window.NR;
  const T = NR.TUNING;
  const G = NR.TERRAIN;
  const rt = NR.runtime;

  // ---- The two difficulty settings ----
  // Costs multiply the normal price of track for those miles. Speeds multiply train speed.
  NR.GEO = {
    gentle: {
      name: "Gentle",
      about: "Passengers increase slowly. Geography costs a little more and slows trains a little.",
      growth: 600, // passengers: a state gets this much busier every 600 seconds you run it (+100%)
      cityGrowth: 1000, // the same for city neighborhoods
      townEvery: [25, 40], // seconds between new towns
      hillCost: 1.25, // hills
      hillSpeed: 0.9,
      passCost: 2, // over a real mountain pass
      climbSpeed: 0.6, // trains climbing a pass
      tunnelCost: 4, // through a mountain (no slowing)
      maxTunnel: 40, // miles of mountain one tunnel can go through
      minRange: 4, // mountains thinner than this (miles) count as hills
      passRadius: 12, // track this close to a pass (miles) goes over it...
      passApproach: 20, // ...and so do the mountains this far (miles) before and after it
      coastCost: 1.6, // where a straight line would run out to sea, track follows the coast
      coastSpeed: 0.7,
      coastSkip: 3, // a little sea (miles) along the coast is ignored
      shoreSkim: 3, // water with land this close (miles) to one side: track follows the shore
      realBridgeCost: 3, // over water at a real bridge (Golden Gate, Bay Bridge...)
      newBridgeCost: 6, // a new bridge anywhere else
      maxNewBridge: 8, // the widest water (miles) a new bridge can cross
      bridgeRadius: 4, // water this close to a real bridge (miles) uses it
      riverBridge: 10, // $k for a new bridge over a river
      realRiverBridge: 3, // $k to use an existing river bridge
      // City maps (see js/metro.js). Grade = average climb per mile of track.
      tramClimb: 8, // trams: trip time × (1 + tramClimb × grade)
      tramHillCost: 3, // trams: price × (1 + tramHillCost × grade)
      metroHillCost: 4, // metro: deeper tunnels under hills, price × (1 + metroHillCost × grade)
      cityWaterCost: 4, // a new bridge (or tube) over city water, per mile
      cityRealBridgeCost: 2, // using a real bridge (Coronado Bridge, Tower Bridge...)
      cityMaxWater: 3, // the widest city water (miles) a new crossing can span
    },
    tough: {
      name: "Tough",
      about: "Passengers increase faster. Mountains, water and rivers are real obstacles: pricey, slow, and some routes are impossible without the right pass or bridge.",
      growth: 240,
      cityGrowth: 400,
      townEvery: [14, 22],
      hillCost: 1.5,
      hillSpeed: 0.8,
      passCost: 3,
      climbSpeed: 0.4,
      tunnelCost: 7,
      maxTunnel: 15,
      minRange: 2,
      passRadius: 9,
      passApproach: 15,
      coastCost: 2.2,
      coastSpeed: 0.55,
      coastSkip: 1.5,
      shoreSkim: 2,
      realBridgeCost: 4,
      newBridgeCost: 10,
      maxNewBridge: 2,
      bridgeRadius: 3,
      riverBridge: 25,
      realRiverBridge: 5,
      tramClimb: 14,
      tramHillCost: 5,
      metroHillCost: 6,
      cityWaterCost: 7,
      cityRealBridgeCost: 3,
      cityMaxWater: 1,
    },
  };
  // The setting of the game being played (set when a game starts or loads).
  const L = () => NR.GEO[rt.geoLevel] || NR.GEO.gentle;
  NR.geoSetting = L;

  // ---- Reading the terrain ----
  // The mountains grid: 0 flat, 1 hills, 2 mountains, 3 high mountains;
  // 4 to 7 the same for land outside the four states (Mexico, Utah...).
  const grid = new Uint8Array(G.cols * G.rows);
  {
    let i = 0;
    G.grid.replace(/([A-H])(\d*)/g, (_, ch, n) => {
      const len = n ? Number(n) : 1;
      grid.fill("ABCDEFGH".indexOf(ch), i, i + len);
      i += len;
      return "";
    });
  }
  const cellAt = (lon, lat) => {
    const c = Math.floor((lon - G.box[0]) / G.step);
    const r = Math.floor((G.box[3] - lat) / G.step);
    return c < 0 || r < 0 || c >= G.cols || r >= G.rows ? 0 : grid[r * G.cols + c];
  };
  NR.terrainAt = (lon, lat) => cellAt(lon, lat) & 3;
  function inRing(x, y, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
      const xi = ring[i], yi = ring[i + 1], xj = ring[j], yj = ring[j + 1];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  const boxOf = (ring) => {
    const b = [Infinity, Infinity, -Infinity, -Infinity];
    for (let i = 0; i < ring.length; i += 2) {
      b[0] = Math.min(b[0], ring[i]);
      b[1] = Math.min(b[1], ring[i + 1]);
      b[2] = Math.max(b[2], ring[i]);
      b[3] = Math.max(b[3], ring[i + 1]);
    }
    return b;
  };
  const landRings = NR.MAP.land.map((ring) => ({ ring, box: boxOf(ring) }));
  const lakes = G.lakes.map((l) => ({ name: l.name, ring: l.ring, box: boxOf(l.ring) }));
  const inside = (list, x, y) => list.reduce((n, o) => (x >= o.box[0] && x <= o.box[2] && y >= o.box[1] && y <= o.box[3] && inRing(x, y, o.ring) ? !n : n), false);
  // San Francisco Bay (with San Pablo and Suisun bays): water here needs a bridge.
  // Elsewhere, sea between two coastal stations just means track follows the coast.
  const SF_BAY = [-122.49, 37.8, -122.49, 37.85, -122.53, 37.9, -122.56, 38.0, -122.55, 38.16, -122.25, 38.16, -121.85, 38.13, -121.55, 38.09, -121.55, 37.98, -122.0, 37.98, -122.28, 37.84, -122.0, 37.45, -121.9, 37.41, -122.16, 37.41, -122.41, 37.6, -122.38, 37.72, -122.39, 37.8];
  // Land in a neighboring state or country. The Pacific is only to the west: anything east of
  // San Diego's coast (or north of Oregon's coast) that isn't ours is someone else's land.
  const foreignLand = (lon, lat) => lon > -117.13 || (lat > 46.1 && lon > -123.95) || cellAt(lon, lat) >= 4;
  function waterAt(lon, lat) {
    const lake = lakes.find((l) => lon >= l.box[0] && lon <= l.box[2] && lat >= l.box[1] && lat <= l.box[3] && inRing(lon, lat, l.ring));
    if (lake) return { kind: "lake", name: lake.name };
    if (inside(landRings, lon, lat) || foreignLand(lon, lat)) return null; // our land, or a neighbor's
    return inRing(lon, lat, SF_BAY) ? { kind: "bay", name: "San Francisco Bay" } : { kind: "coast" };
  }

  // ---- Distances, in miles ----
  const MI_LAT = 69.05;
  const miLon = (lat) => 69.17 * Math.cos((lat * Math.PI) / 180);
  // Distance from point p to the straight piece a-b (all {lon, lat}), in miles.
  function distToPiece(p, a, b) {
    const k = miLon((a.lat + b.lat) / 2);
    const ax = a.lon * k, ay = a.lat * MI_LAT, bx = b.lon * k, by = b.lat * MI_LAT, px = p.lon * k, py = p.lat * MI_LAT;
    const dx = bx - ax, dy = by - ay;
    const t = dx || dy ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy))) : 0;
    return Math.hypot(px - ax - t * dx, py - ay - t * dy);
  }
  // Does the line a-b run along a shore? True if dry land lies within d miles on the same
  // side at a quarter, half and three quarters of the way (a crossing has water on both sides).
  function alongShore(a, b, d) {
    const k = miLon((a.lat + b.lat) / 2);
    const dx = (b.lon - a.lon) * k, dy = (b.lat - a.lat) * MI_LAT;
    const len = Math.hypot(dx, dy) || 1;
    const landAt = (f, side) => {
      const p = { lon: a.lon + (b.lon - a.lon) * f, lat: a.lat + (b.lat - a.lat) * f };
      for (let m = 0.5; m <= d; m += 0.5) if (!waterAt(p.lon + (side * -dy * m) / len / k, p.lat + (side * dx * m) / len / MI_LAT)) return true;
      return false;
    };
    return [1, -1].some((side) => [0.25, 0.5, 0.75].every((f) => landAt(f, side)));
  }
  const nearest = (list, a, b, radius) => {
    let best = null;
    for (const x of list) {
      const d = distToPiece(x, a, b);
      if (d <= radius && (!best || d < best.d)) best = { name: x.name, d };
    }
    return best;
  };
  // Do pieces p1-p2 and p3-p4 cross? (lon, lat arrays)
  function crosses(x1, y1, x2, y2, x3, y3, x4, y4) {
    const d = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3);
    if (!d) return null;
    const t = ((x3 - x1) * (y4 - y3) - (y3 - y1) * (x4 - x3)) / d;
    const u = ((x3 - x1) * (y2 - y1) - (y3 - y1) * (x2 - x1)) / d;
    return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? t : null;
  }

  // ---- What lies between two stations ----
  // Returns { miles, flat, hills, coast, passes: [{name, miles}], tunnels: [{miles, range}],
  //           water: [{miles, kind, name, bridge, isNew}], rivers: [{name, bridge}], blocked }
  // All lengths are in miles along the straight line between the stations.
  const STEP = 0.5; // look at the ground every half mile
  const cache = new Map();
  NR.segmentGeo = function (a, b) {
    const key = (a < b ? a + "|" + b : b + "|" + a) + "|" + (rt.geoLevel || "gentle");
    if (cache.has(key)) return cache.get(key);
    const A = NR.cityById[a < b ? a : b], B = NR.cityById[a < b ? b : a];
    const lv = L();
    const total = NR.crowMiles(A.id, B.id);
    const n = Math.max(1, Math.ceil(total / STEP));
    const step = total / n;
    const pt = (i) => ({ lon: A.lon + ((B.lon - A.lon) * (i + 0.5)) / n, lat: A.lat + ((B.lat - A.lat) * (i + 0.5)) / n });
    const kind = []; // per sample: "flat" | "hills" | "mountain" | "lake" | "bay" | "coast"
    const waterName = [];
    for (let i = 0; i < n; i++) {
      const p = pt(i);
      const w = waterAt(p.lon, p.lat);
      if (w) {
        kind.push(w.kind);
        waterName.push(w.name);
        continue;
      }
      const t = NR.terrainAt(p.lon, p.lat);
      kind.push(t >= 2 ? "mountain" : t === 1 ? "hills" : "flat");
      waterName.push(null);
    }
    const g = { miles: total, flat: 0, hills: 0, coast: 0, passes: [], tunnels: [], water: [], rivers: [], blocked: null };
    // Runs of the same kind of ground, joining runs split by a short gap.
    const runs = [];
    for (let i = 0; i < n; ) {
      let j = i;
      while (j < n && kind[j] === kind[i]) j++;
      runs.push({ kind: kind[i], from: i, to: j, name: waterName[i] });
      i = j;
    }
    // Mountains split by a short valley (under 2 miles) are one crossing.
    for (let r = 1; r + 1 < runs.length; r++) {
      if (runs[r - 1].kind === "mountain" && runs[r + 1].kind === "mountain" && (runs[r].to - runs[r].from) * step < 2 && !["lake", "bay"].includes(runs[r].kind)) {
        runs[r - 1].to = runs[r + 1].to;
        runs.splice(r, 2);
        r--;
      }
    }
    const rangeNames = [];
    for (const run of runs) {
      const mi = (run.to - run.from) * step;
      const a1 = pt(run.from), b1 = pt(run.to - 1);
      if (run.kind === "flat") g.flat += mi;
      else if (run.kind === "hills") g.hills += mi;
      else if (run.kind === "mountain") {
        if (mi < lv.minRange) {
          g.hills += mi; // a thin ridge: just hills
          continue;
        }
        // A pass counts if it is near this stretch, or near the line just before or after it
        // (the climb up to a pass is part of going over it).
        const ext = Math.round(lv.passApproach / step);
        const pass = nearest(G.passes, pt(Math.max(0, run.from - ext)), pt(Math.min(n - 1, run.to - 1 + ext)), lv.passRadius);
        if (pass) g.passes.push({ name: pass.name, miles: mi });
        else {
          const range = rangeAt(a1, b1);
          g.tunnels.push({ miles: mi, range });
          if (mi > lv.maxTunnel && !g.blocked) {
            const near = [...G.passes].sort((x, y) => distToPiece(x, a1, b1) - distToPiece(y, a1, b1)).slice(0, 2).map((x) => x.name);
            g.blocked = `${Math.round(mi)} miles of mountains${range ? ` (${range})` : ""} is too much to tunnel through. Go over a pass instead, like ${near.join(" or ")}.`;
          }
          if (range) rangeNames.push(range);
        }
      } else if (run.kind === "coast") {
        if (mi <= lv.coastSkip) g.flat += mi;
        else g.coast += mi; // track follows the shore: longer and slower
      } else {
        // A bay or a lake: along its shore, over a real bridge, over a new bridge, or too wide
        if (mi <= 0.6 && run.kind === "lake") {
          g.flat += mi; // just the edge of a lake
          continue;
        }
        if (mi > 2 && alongShore(a1, b1, lv.shoreSkim)) {
          g.coast += mi; // the track can follow the shore instead
          continue;
        }
        const real = nearest(G.bridges, a1, b1, lv.bridgeRadius);
        const w = { miles: mi, kind: run.kind, name: run.name, bridge: real ? real.name : null, isNew: !real };
        g.water.push(w);
        if (!real && mi > lv.maxNewBridge && !g.blocked)
          g.blocked = `${Math.round(mi)} miles across ${run.name} is too wide for a new bridge. Go around it, or cross at a real bridge${
            run.kind === "bay" ? " like the Golden Gate, Bay Bridge or San Mateo Bridge" : ""
          }.`;
      }
    }
    // Rivers: every crossing needs a bridge (cheap where a real one stands).
    const seen = [];
    for (const r of G.rivers) {
      for (let i = 0; i + 3 < r.line.length; i += 2) {
        const t = crosses(A.lon, A.lat, B.lon, B.lat, r.line[i], r.line[i + 1], r.line[i + 2], r.line[i + 3]);
        if (t === null) continue;
        const at = t * total;
        if (seen.some((x) => x.name === r.name && Math.abs(x.at - at) < 3)) continue; // the same crossing
        seen.push({ name: r.name, at });
        const p = { lon: A.lon + (B.lon - A.lon) * t, lat: A.lat + (B.lat - A.lat) * t };
        if (waterAt(p.lon, p.lat)) continue; // inside a lake or a bay: already a bridge there
        const real = nearest(G.bridges, p, p, 2);
        g.rivers.push({ name: r.name, bridge: real ? real.name : null });
      }
    }
    cache.set(key, g);
    return g;
  };
  // The name of the mountain range at a stretch, from Natural Earth (if known).
  function rangeAt(a, b) {
    const mid = { lon: (a.lon + b.lon) / 2, lat: (a.lat + b.lat) / 2 };
    const r = (G.ranges || []).find((x) => inRing(mid.lon, mid.lat, x.ring));
    return r ? r.name : null;
  }

  // ---- Prices and speeds ----
  const detour = () => T.trackDetour;
  const perMile = (grade) => T.trackPrice + (grade === "high" ? T.highSpeedPrice : 0);
  // Miles of track, weighted by how hard the ground is (1 mile of flat ground = 1).
  NR.hardMiles = function (a, b, tunneled) {
    const g = NR.segmentGeo(a, b);
    const lv = L();
    let m = g.flat + g.hills * lv.hillCost + g.coast * lv.coastCost;
    g.passes.forEach((p) => (m += p.miles * (tunneled ? lv.tunnelCost : lv.passCost)));
    g.tunnels.forEach((t) => (m += t.miles * lv.tunnelCost));
    g.water.forEach((w) => (m += w.miles * (w.isNew ? lv.newBridgeCost : lv.realBridgeCost)));
    return m * detour();
  };
  // $k for the river bridges between two stations.
  NR.riverCost = (a, b) => NR.segmentGeo(a, b).rivers.reduce((sum, r) => sum + (r.bridge ? L().realRiverBridge : L().riverBridge), 0);
  // Price of track between two stations, in $k (grade "high" = high-speed track).
  NR.trackPrice = (a, b, grade, tunneled) => NR.hardMiles(a, b, tunneled) * perMile(grade) + NR.riverCost(a, b);
  // Is the pass between these stops already tunneled on this line?
  NR.tunneled = (line, a, b) => !!(line && line.tunnels && line.tunnels.includes(NR.segKey(a, b)));
  // How far a train effectively travels between two stops (slower over passes, hills and along the coast).
  NR.travelMiles = function (line, a, b) {
    const g = NR.segmentGeo(a, b);
    const lv = L();
    const tunneled = NR.tunneled(line, a, b);
    let m = g.flat + g.hills / lv.hillSpeed + g.coast / lv.coastSpeed;
    g.passes.forEach((p) => (m += tunneled ? p.miles : p.miles / lv.climbSpeed));
    g.tunnels.forEach((t) => (m += t.miles));
    g.water.forEach((w) => (m += w.miles));
    return Math.max(1, m);
  };
  // Why track can't be built between two stations, or null.
  NR.blockedReason = (a, b) => NR.segmentGeo(a, b).blocked;
  // A short description of what the track crosses: ["Cajon Pass (slow climb)", "tunnels 12 mi", ...]
  NR.geoNotes = function (a, b, line) {
    const g = NR.segmentGeo(a, b);
    const out = [];
    const tunneled = NR.tunneled(line, a, b);
    const once = (text) => !out.includes(text) && out.push(text);
    g.passes.forEach((p) => once(tunneled ? `tunnel under ${p.name}` : `${p.name} (slow climb)`));
    const tunnelMi = g.tunnels.reduce((sum, t) => sum + t.miles, 0);
    if (tunnelMi) {
      const ranges = [...new Set(g.tunnels.map((t) => t.range).filter(Boolean))];
      out.push(`${g.tunnels.length > 1 ? "tunnels" : "tunnel"} ${Math.round(tunnelMi)} mi${ranges.length ? ` (${ranges.join(", ")})` : ""}`);
    }
    g.water.forEach((w) => once(w.bridge ? w.bridge : `new bridge ${Math.max(1, Math.round(w.miles))} mi over ${w.name}`));
    const rivers = {};
    g.rivers.forEach((r) => (rivers[r.bridge || `${r.name} River bridge`] = (rivers[r.bridge || `${r.name} River bridge`] || 0) + 1));
    Object.entries(rivers).forEach(([text, k]) => out.push(k > 1 ? `${text} ×${k}` : text));
    if (g.coast > 0) out.push("along the shore");
    if (g.hills > g.miles * 0.3) out.push("hills");
    return out;
  };
  // Dig tunnels under the passes of a line: trains no longer slow down there.
  NR.tunnelBill = function (s, line) {
    const bill = {};
    for (let i = 0; i + 1 < line.stops.length; i++) {
      const [a, b] = [line.stops[i], line.stops[i + 1]];
      if (NR.tunneled(line, a, b)) continue;
      const mi = NR.segmentGeo(a, b).passes.reduce((sum, p) => sum + p.miles, 0);
      if (mi) NR.addToBill(bill, NR.segmentPayer(a, b), mi * detour() * (L().tunnelCost - L().passCost) * perMile(line.grade));
    }
    return bill;
  };
  NR.digTunnels = function (s, line) {
    const bill = NR.tunnelBill(s, line);
    if (!Object.keys(bill).length || NR.lineFrozen(s, line) || !NR.canPay(s, bill)) return false;
    NR.pay(s, bill);
    line.tunnels = line.tunnels || [];
    for (let i = 0; i + 1 < line.stops.length; i++) {
      const key = NR.segKey(line.stops[i], line.stops[i + 1]);
      if (NR.segmentGeo(line.stops[i], line.stops[i + 1]).passes.length && !line.tunnels.includes(key)) line.tunnels.push(key);
    }
    return true;
  };
})();
