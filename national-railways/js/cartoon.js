// National Railways: the cartoon look ("Arcade" in Settings, the default). The same real
// geography as the classic map, painted like a picture book: hills and mountains as layered
// flat shapes with little peaks on top (green where it's forested, brown where it's dry, snow
// on the highest), pine trees in the forests, cacti and sagebrush in the deserts, waves in
// the sea, and rivers and lakes with outlines.
(function () {
  "use strict";
  const NR = window.NR;
  const C = (NR.cartoon = {});
  C.on = () => document.documentElement.dataset.look === "arcade";

  // ---------- Colors: the --toon-* tokens in style.css (light and dark) ----------
  let K = {};
  C.readTheme = function () {
    const cs = getComputedStyle(document.documentElement);
    const get = (n) => cs.getPropertyValue(n).trim();
    const pair = (n) => [get(n), get(n + "-shade")];
    K = {
      outline: get("--toon-outline"),
      shallow: get("--toon-shallow"),
      foam: get("--toon-foam"),
      wave: get("--toon-wave"),
      sand: get("--toon-sand"),
      outside: get("--toon-outside"),
      tint: [null, get("--toon-hills"), get("--toon-mountains"), get("--toon-peaks")],
      edge: get("--toon-terrace-edge"),
      green: pair("--toon-green"),
      brown: pair("--toon-brown"),
      rock: pair("--toon-rock"),
      snow: get("--toon-snow"),
      tree: pair("--toon-tree"),
      trunk: get("--toon-trunk"),
      cactus: get("--toon-cactus"),
      sage: get("--toon-sage"),
      bush: get("--toon-bush"),
      lake: get("--toon-lake"),
      fog: get("--toon-fog"),
      fogShade: get("--toon-fog-shade"),
      fogEdge: get("--toon-fog-edge"),
      riverEdge: get("--toon-river-edge"),
      river: get("--river"),
      land: get("--land"),
    };
    cache.key = "";
    fogCache.key = "";
  };

  // ---------- What grows where (by county, from the state packs' biomes) ----------
  // forest: trees even on the flats. wooded: trees on the hills. dry: sand, cacti, sagebrush.
  const KINDS = { wooded: 2, forest: 3, dry: 4 };
  const kindOf = (id) => KINDS[NR.BIOMES[id]] || 1;

  // ---------- Outlines of grid cells, as smooth rings ----------
  // Marching squares over the squares between cell centers. Each square gives up to two pieces
  // of outline, always walked with the inside on the right, so the pieces join up into rings.
  // Edges of a square: 0 top, 1 right, 2 bottom, 3 left. Corners: top-left 8, top-right 4, bottom-right 2, bottom-left 1.
  const CASES = [[], [[3, 2]], [[2, 1]], [[3, 1]], [[1, 0]], [[3, 2], [1, 0]], [[2, 0]], [[3, 0]], [[0, 3]], [[0, 2]], [[0, 3], [2, 1]], [[0, 1]], [[1, 3]], [[1, 2]], [[2, 3]], []];
  const EDGE = [
    [1, 0],
    [2, 1],
    [1, 2],
    [0, 1],
  ]; // edge midpoints in half cells from the square's top-left corner
  function outlines(test, cols, rows, lon0, lat1, step, minPoints, pad = 0) {
    // pad: cells past the grid's edge that copy the edge, so shapes don't stop dead at the edge
    const at = (c, r) => {
      if (c < -pad || r < -pad || c >= cols + pad || r >= rows + pad) return 0;
      return test(Math.min(rows - 1, Math.max(0, r)) * cols + Math.min(cols - 1, Math.max(0, c))) ? 1 : 0;
    };
    const next = new Map();
    for (let r = -1 - pad; r < rows + pad; r++)
      for (let c = -1 - pad; c < cols + pad; c++) {
        const n = (at(c, r) << 3) | (at(c + 1, r) << 2) | (at(c + 1, r + 1) << 1) | at(c, r + 1);
        for (const [a, b] of CASES[n]) {
          const ka = (2 * (c + pad) + 2 + EDGE[a][0]) * 8192 + (2 * (r + pad) + 2 + EDGE[a][1]);
          const kb = (2 * (c + pad) + 2 + EDGE[b][0]) * 8192 + (2 * (r + pad) + 2 + EDGE[b][1]);
          next.set(ka, kb);
        }
      }
    const rings = [];
    const seen = new Set();
    for (const start of next.keys()) {
      if (seen.has(start)) continue;
      const pts = [];
      let k = start;
      while (k !== undefined && !seen.has(k)) {
        seen.add(k);
        pts.push([Math.floor(k / 8192) / 2 - 1 - pad + 0.5, (k % 8192) / 2 - 1 - pad + 0.5]); // in cells from the grid's corner
        k = next.get(k);
      }
      if (pts.length < minPoints) continue;
      const round = smooth(smooth(pts));
      const ring = toRing(round, lon0, lat1, step, 0.34);
      // A coarser copy for when the map is zoomed out (tiny shapes left out)
      ring.coarse = pts.length >= 12 ? toRing(round, lon0, lat1, step, 1.1).pts : null;
      rings.push(ring);
    }
    return rings;
  }
  // Chaikin's corner cutting: stair steps become round blobs.
  function smooth(pts) {
    const out = [];
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i], q = pts[(i + 1) % pts.length];
      out.push([p[0] * 0.75 + q[0] * 0.25, p[1] * 0.75 + q[1] * 0.25], [p[0] * 0.25 + q[0] * 0.75, p[1] * 0.25 + q[1] * 0.75]);
    }
    return out;
  }
  // To longitude, latitude pairs, dropping points closer than `gap` cells to the last one kept.
  function toRing(pts, lon0, lat1, step, gap) {
    const kept = [];
    for (const p of pts) {
      const last = kept[kept.length - 1];
      if (!last || Math.hypot(p[0] - last[0], p[1] - last[1]) >= gap) kept.push(p);
    }
    // Points in the middle of a straight stretch add nothing
    const keep = kept.filter((p, i) => {
      const a = kept[(i + kept.length - 1) % kept.length], b = kept[(i + 1) % kept.length];
      return Math.abs((p[0] - a[0]) * (b[1] - a[1]) - (p[1] - a[1]) * (b[0] - a[0])) > 0.002 * Math.hypot(b[0] - a[0], b[1] - a[1]) || kept.length < 4;
    });
    const flat = [];
    const box = [Infinity, Infinity, -Infinity, -Infinity];
    for (const p of keep) {
      const lon = lon0 + p[0] * step, lat = lat1 - p[1] * step;
      flat.push(lon, lat);
      box[0] = Math.min(box[0], lon);
      box[1] = Math.min(box[1], lat);
      box[2] = Math.max(box[2], lon);
      box[3] = Math.max(box[3], lat);
    }
    return { pts: flat, box };
  }

  // ---------- Each state's grid: height, county kind, lakes ----------
  // Worked out once per state (and again if its terrain changes): the kind of county under
  // each cell, the lakes, the sand and hill shapes, and where the icons go.
  const packPrep = {};
  function prepPack(code) {
    const t = NR.TERRAIN.grids.find((x) => x.code === code);
    if (!t) return null;
    if (packPrep[code] && packPrep[code].cells === t.cells) return packPrep[code];
    const { cols, rows, step } = t;
    const lon0 = t.box[0], lat1 = t.box[3];
    // One pixel per cell: the kind of county (red, this state's counties only) and lakes (green)
    const cv = document.createElement("canvas");
    cv.width = cols;
    cv.height = rows;
    const g = cv.getContext("2d", { willReadFrequently: true });
    g.setTransform(1 / step, 0, 0, -1 / step, -lon0 / step, lat1 / step);
    const trace = (ring) => {
      g.moveTo(ring[0], ring[1]);
      for (let k = 2; k < ring.length; k += 2) g.lineTo(ring[k], ring[k + 1]);
      g.closePath();
    };
    for (const r of NR.MAP.regions) {
      if (r.state !== code) continue;
      g.beginPath();
      r.rings.forEach(trace);
      g.fillStyle = `rgb(${kindOf(r.id) * 50},0,0)`;
      g.fill("evenodd");
    }
    g.globalCompositeOperation = "lighter";
    g.beginPath();
    NR.TERRAIN.lakes.forEach((l) => [l.ring, ...(l.holes || [])].forEach(trace)); // (islands: holes)
    g.fillStyle = "rgb(0,255,0)";
    g.fill("evenodd");
    const px = g.getImageData(0, 0, cols, rows).data;
    const kind = new Uint8Array(cols * rows);
    const lake = new Uint8Array(cols * rows);
    for (let k = 0; k < cols * rows; k++) {
      kind[k] = Math.round(px[k * 4] / 50);
      lake[k] = px[k * 4 + 1] > 127 ? 1 : 0;
    }
    const level = (k) => t.cells[k];
    const near = (k, f) => {
      const c = k % cols, r = (k - c) / cols;
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const cc = c + dc, rr = r + dr;
          if (cc >= 0 && rr >= 0 && cc < cols && rr < rows && f(rr * cols + cc)) return true;
        }
      return false;
    };
    const p = {
      code,
      t,
      cells: t.cells,
      cols,
      rows,
      step,
      lon0,
      lat1,
      kind,
      lake,
      level,
      // Shapes are drawn clipped to the state, so they may run a little past its borders
      dry: outlines((k) => kind[k] === 4 || (kind[k] === 0 && near(k, (j) => kind[j] === 4)), cols, rows, lon0, lat1, step, 8),
      terraces: [1, 2, 3].map((lv) => outlines((k) => level(k) >= lv, cols, rows, lon0, lat1, step, lv === 1 ? 14 : lv === 2 ? 8 : 4)),
    };
    p.icons = placeIcons(p);
    return (packPrep[code] = p);
  }

  // A steady random number for each place, so the trees don't jump around.
  const hash = (a, b, c) => {
    let h = (a * 374761393 + b * 668265263 + c * 2147483647) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };

  // Icons on a jittered grid, in five sizes of grid (16, 8, 4, 2 and 1 cells apart):
  // the map uses whichever keeps them about 26 pixels apart at the current zoom. The grid is
  // counted from 0° (not from each state's corner), so icons sit in the same places whichever
  // states are loaded, and each state only places icons on its own land.
  const BLOCKS = [16, 8, 4, 2, 1];
  function placeIcons(g) {
    const ac0 = Math.round(g.lon0 / g.step), ar0 = Math.round(-g.lat1 / g.step); // the grid's corner, counted from 0°
    return BLOCKS.map((n, li) => {
      const list = [];
      for (let br = Math.floor(ar0 / n); br * n < ar0 + g.rows; br++)
        for (let bc = Math.floor(ac0 / n); bc * n < ac0 + g.cols; bc++) {
          const c = bc * n + Math.floor(hash(bc, br, li * 7 + 1) * n) - ac0;
          const r = br * n + Math.floor(hash(bc, br, li * 7 + 2) * n) - ar0;
          if (c < 0 || r < 0 || c >= g.cols || r >= g.rows) continue;
          const k = r * g.cols + c;
          const kind = g.kind[k];
          if (!kind || g.lake[k]) continue;
          const lv = g.level(k);
          const lon = g.lon0 + (c + 0.2 + 0.6 * hash(bc, br, li * 7 + 3)) * g.step;
          const lat = g.lat1 - (r + 0.2 + 0.6 * hash(bc, br, li * 7 + 4)) * g.step;
          const roll = hash(bc, br, li * 7 + 5);
          const size = 0.85 + 0.3 * hash(bc, br, li * 7 + 6);
          const dry = kind === 4;
          const hot = dry && lat < 36.6;
          let type = null;
          if (lv === 3) type = "snow";
          else if (lv === 2) type = kind === 2 || kind === 3 ? "green" : dry && roll < 0.4 ? "mesa" : "brown";
          else if (lv === 1) {
            if (kind === 2 || kind === 3) type = "trees";
            else if (dry) type = roll < 0.3 ? (hot ? "cactus" : "sage") : null;
            else type = roll < 0.55 ? "hill" : null;
          } else if (kind === 3) type = roll < 0.4 ? "tree" : null;
          else if (dry) type = roll < 0.13 ? (hot ? "cactus" : "sage") : null;
          if (type) list.push({ lon, lat, type, size, flip: roll < 0.5 });
        }
      return list;
    });
  }

  // ---------- The whole map: where the land is (for waves) ----------
  // A coarse picture of all land on the map (every state, Mexico and Canada, from
  // packs/index.js), 0.1° a cell, grown by two cells: waves only go on open sea.
  const WORLD = { lon0: -190, lat1: 85, step: 0.1, cols: 1400, rows: 720 };
  let openSea = null;
  function seaMask() {
    if (openSea) return openSea;
    const { lon0, lat1, step, cols, rows } = WORLD;
    const cv = document.createElement("canvas");
    cv.width = cols;
    cv.height = rows;
    const g = cv.getContext("2d", { willReadFrequently: true });
    g.setTransform(1 / step, 0, 0, -1 / step, -lon0 / step, lat1 / step);
    g.beginPath();
    for (const a of Object.values(NR.AREAS))
      for (const ring of a.outline) {
        g.moveTo(ring[0], ring[1]);
        for (let k = 2; k < ring.length; k += 2) g.lineTo(ring[k], ring[k + 1]);
        g.closePath();
      }
    g.fillStyle = "#fff";
    g.fill("evenodd");
    const px = g.getImageData(0, 0, cols, rows).data;
    const land = new Uint8Array(cols * rows);
    for (let k = 0; k < cols * rows; k++) land[k] = px[k * 4 + 3] > 20 ? 1 : 0;
    openSea = new Uint8Array(cols * rows);
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) {
        let clear = true;
        for (let dr = -2; dr <= 2 && clear; dr++)
          for (let dc = -2; dc <= 2 && clear; dc++) {
            const rr = r + dr, cc = c + dc;
            if (rr >= 0 && cc >= 0 && rr < rows && cc < cols && land[rr * cols + cc]) clear = false;
          }
        openSea[r * cols + c] = clear ? 1 : 0;
      }
    return openSea;
  }
  const isOpenSea = (lon, lat) => {
    const c = Math.floor((lon - WORLD.lon0) / WORLD.step), r = Math.floor((WORLD.lat1 - lat) / WORLD.step);
    return c < 0 || r < 0 || c >= WORLD.cols || r >= WORLD.rows ? true : !!seaMask()[r * WORLD.cols + c];
  };
  // The longitude and latitude the screen covers. The map is curved (the middle of the top edge
  // can be further north than its corners), so it looks at points all along the screen's edges.
  function screenBox(view) {
    let lon0 = Infinity, lon1 = -Infinity, lat0 = Infinity, lat1 = -Infinity;
    const edge = [];
    for (let k = 0; k <= 8; k++) {
      const f = k / 8;
      edge.push([f * view.w, 0], [f * view.w, view.h], [0, f * view.h], [view.w, f * view.h]);
    }
    for (const [x, y] of edge) {
      const [lon, lat] = NR.fromScreen(x, y);
      lon0 = Math.min(lon0, lon);
      lon1 = Math.max(lon1, lon);
      lat0 = Math.min(lat0, lat);
      lat1 = Math.max(lat1, lat);
    }
    return [lon0, lat0, lon1, lat1];
  }
  // Little waves out at sea, on a jittered grid in four spacings (about 50 pixels apart).
  const WAVE_STEPS = [1.4, 0.7, 0.35, 0.175];
  function wavesOnScreen(view, ppd) {
    let wl = WAVE_STEPS.findIndex((st) => st * ppd < 50);
    wl = wl < 0 ? WAVE_STEPS.length - 1 : Math.max(0, wl - 1);
    const step = WAVE_STEPS[wl];
    const [lon0, lat0, lon1, lat1] = screenBox(view);
    const list = [];
    for (let j = Math.floor(lat0 / step) - 1; j <= Math.ceil(lat1 / step); j++)
      for (let i = Math.floor(lon0 / step) - 1; i <= Math.ceil(lon1 / step); i++) {
        const x = (i + 0.15 + 0.7 * hash(i, j, 91)) * step, y = (j + 0.15 + 0.7 * hash(i, j, 92)) * step;
        if (isOpenSea(x, y)) list.push({ lon: x, lat: y, w: 0.8 + 0.4 * hash(i, j, 93) });
      }
    return { list, step };
  }

  // ---------- Drawing helpers ----------
  let coarse = false; // zoomed out: draw the coarser copies
  function traceRings(ctx, rings, project, cull) {
    for (const ring of rings) {
      if (cull && !cull(ring.box)) continue;
      const p = coarse ? ring.coarse : ring.pts;
      if (!p) continue;
      if (project === NR.toScreen) {
        NR.traceList(ctx, p, true); // the state map: fast, with remembered positions
        continue;
      }
      let q = project(p[0], p[1]);
      ctx.moveTo(q[0], q[1]);
      for (let i = 2; i < p.length; i += 2) {
        q = project(p[i], p[i + 1]);
        ctx.lineTo(q[0], q[1]);
      }
      ctx.closePath();
    }
  }
  function traceFlat(ctx, list, project, close) {
    if (project === NR.toScreen) return NR.traceList(ctx, list, close);
    let q = project(list[0], list[1]);
    ctx.moveTo(q[0], q[1]);
    for (let i = 2; i < list.length; i += 2) {
      q = project(list[i], list[i + 1]);
      ctx.lineTo(q[0], q[1]);
    }
    if (close) ctx.closePath();
  }
  // Is a longitude/latitude box on the screen at all?
  function culler(project, w, h) {
    return (b) => {
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (const [lon, lat] of [
        [b[0], b[1]],
        [b[2], b[1]],
        [b[0], b[3]],
        [b[2], b[3]],
      ]) {
        const q = project(lon, lat);
        x0 = Math.min(x0, q[0]);
        y0 = Math.min(y0, q[1]);
        x1 = Math.max(x1, q[0]);
        y1 = Math.max(y1, q[1]);
      }
      return x1 > -20 && y1 > -20 && x0 < w + 20 && y0 < h + 20;
    };
  }

  // A mountain: lit on the left, shaded on the right, with a snowy cap on the highest.
  function peak(ctx, x, y, s, kind, flip) {
    const [lit, shade] = kind === "snow" ? K.rock : kind === "green" ? K.green : K.brown;
    const w = s * (kind === "snow" ? 1.15 : 1.05);
    const h = s * (kind === "snow" ? 0.95 : 0.72);
    const tx = x + (flip ? 0.06 : -0.06) * w; // the top leans a little to one side
    const body = () => {
      ctx.beginPath();
      ctx.moveTo(x - w / 2, y);
      ctx.lineTo(tx - w * 0.07, y - h * 0.93);
      ctx.quadraticCurveTo(tx, y - h * 1.04, tx + w * 0.07, y - h * 0.93);
      ctx.lineTo(x + w / 2, y);
      ctx.closePath();
    };
    body();
    ctx.fillStyle = lit;
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(tx + w * 0.03, y - h * 0.97);
    ctx.lineTo(x + w / 2, y);
    ctx.lineTo(x + w * 0.12, y);
    ctx.quadraticCurveTo(tx + w * 0.16, y - h * 0.45, tx + w * 0.03, y - h * 0.97);
    ctx.fillStyle = shade;
    ctx.fill();
    if (kind === "snow") {
      const d = h * 0.4;
      const hw = (w / 2) * (d / h);
      ctx.beginPath();
      ctx.moveTo(tx, y - h * 1.0);
      ctx.lineTo(tx - hw, y - h + d);
      ctx.lineTo(tx - hw * 0.35, y - h + d * 0.72);
      ctx.lineTo(tx + hw * 0.05, y - h + d * 1.02);
      ctx.lineTo(tx + hw * 0.5, y - h + d * 0.7);
      ctx.lineTo(tx + hw, y - h + d);
      ctx.closePath();
      ctx.fillStyle = K.snow;
      ctx.fill();
    }
    body();
    ctx.lineWidth = Math.max(1, s * 0.07);
    ctx.lineJoin = "round";
    ctx.strokeStyle = K.outline;
    ctx.stroke();
  }
  // A desert mesa: a flat-topped butte of red rock with a lighter band.
  function mesa(ctx, x, y, s, flip) {
    const w = s * 1.05, h = s * 0.48, top = w * (flip ? 0.42 : 0.5);
    const body = () => {
      ctx.beginPath();
      ctx.moveTo(x - w / 2, y);
      ctx.lineTo(x - top / 2 - w * 0.06, y - h * 0.55);
      ctx.lineTo(x - top / 2, y - h);
      ctx.lineTo(x + top / 2, y - h);
      ctx.lineTo(x + top / 2 + w * 0.06, y - h * 0.55);
      ctx.lineTo(x + w / 2, y);
      ctx.closePath();
    };
    body();
    ctx.fillStyle = K.brown[0];
    ctx.fill();
    ctx.fillStyle = K.brown[1];
    ctx.fillRect(x - top / 2 - w * 0.04, y - h * 0.62, top + w * 0.08, h * 0.16);
    ctx.beginPath();
    ctx.moveTo(x + top / 2, y - h);
    ctx.lineTo(x + top / 2 + w * 0.06, y - h * 0.55);
    ctx.lineTo(x + w / 2, y);
    ctx.lineTo(x + top * 0.15, y);
    ctx.closePath();
    ctx.fill();
    body();
    ctx.lineWidth = Math.max(1, s * 0.07);
    ctx.lineJoin = "round";
    ctx.strokeStyle = K.outline;
    ctx.stroke();
  }
  // A pine tree: a trunk and two tiers of branches.
  function pine(ctx, x, y, s) {
    const w = s * 0.5, h = s * 0.85;
    ctx.fillStyle = K.trunk;
    ctx.fillRect(x - w * 0.09, y - h * 0.2, w * 0.18, h * 0.2);
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x + w * 0.34, y - h * 0.56);
    ctx.lineTo(x + w * 0.2, y - h * 0.56);
    ctx.lineTo(x + w * 0.5, y - h * 0.17);
    ctx.lineTo(x - w * 0.5, y - h * 0.17);
    ctx.lineTo(x - w * 0.2, y - h * 0.56);
    ctx.lineTo(x - w * 0.34, y - h * 0.56);
    ctx.closePath();
    ctx.fillStyle = K.tree[0];
    ctx.fill();
    ctx.lineWidth = Math.max(1, s * 0.06);
    ctx.lineJoin = "round";
    ctx.strokeStyle = K.outline;
    ctx.stroke();
  }
  // A saguaro-style cactus: a trunk and two arms, drawn as a fat outlined line.
  function cactus(ctx, x, y, s, flip) {
    const h = s * 0.75, a = s * 0.2 * (flip ? -1 : 1), t = Math.max(2, s * 0.13);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - h);
    ctx.moveTo(x - a, y - h * 0.78);
    ctx.lineTo(x - a, y - h * 0.48);
    ctx.lineTo(x, y - h * 0.48);
    ctx.moveTo(x + a, y - h * 0.62);
    ctx.lineTo(x + a, y - h * 0.34);
    ctx.lineTo(x, y - h * 0.34);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = K.outline;
    ctx.lineWidth = t + Math.max(2, s * 0.1);
    ctx.stroke();
    ctx.strokeStyle = K.cactus;
    ctx.lineWidth = t;
    ctx.stroke();
  }
  // A round bush (sagebrush in the high desert) or a green rolling hill.
  function bush(ctx, x, y, s, color) {
    const r = s * 0.16;
    ctx.beginPath();
    ctx.arc(x - r * 0.9, y - r * 0.8, r, Math.PI * 0.5, Math.PI * 1.6);
    ctx.arc(x, y - r * 1.5, r * 1.15, Math.PI * 1.05, Math.PI * 1.95);
    ctx.arc(x + r * 0.9, y - r * 0.8, r, Math.PI * 1.4, Math.PI * 0.5);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = Math.max(1, s * 0.06);
    ctx.strokeStyle = K.outline;
    ctx.stroke();
  }
  function hill(ctx, x, y, s) {
    const w = s * 0.8, h = s * 0.32;
    ctx.beginPath();
    ctx.moveTo(x - w / 2, y);
    ctx.bezierCurveTo(x - w * 0.35, y - h * 1.3, x + w * 0.35, y - h * 1.3, x + w / 2, y);
    ctx.closePath();
    ctx.fillStyle = K.green[0];
    ctx.fill();
    ctx.lineWidth = Math.max(1, s * 0.06);
    ctx.strokeStyle = K.outline;
    ctx.stroke();
  }
  function icon(ctx, it, x, y, s) {
    switch (it.type) {
      case "snow":
      case "green":
      case "brown":
        peak(ctx, x, y, s, it.type, it.flip);
        break;
      case "mesa":
        mesa(ctx, x, y, s, it.flip);
        break;
      case "trees":
        pine(ctx, x - s * 0.2, y - s * 0.08, s * 0.85);
        pine(ctx, x + s * 0.18, y, s);
        break;
      case "tree":
        pine(ctx, x, y, s * 0.9);
        break;
      case "cactus":
        cactus(ctx, x, y, s * 0.85, it.flip);
        break;
      case "sage":
        ctx.fillStyle = K.trunk;
        ctx.fillRect(x - s * 0.03, y - s * 0.12, s * 0.06, s * 0.12);
        bush(ctx, x, y - s * 0.08, s * 0.62, K.sage);
        break;
      case "hill":
        hill(ctx, x, y, s);
        break;
    }
  }

  // ---------- Pictures kept between frames ----------
  // The cartoon map and the clouds are drawn into pictures that are only redrawn when the view
  // (or what they show) changes. While the map is being moved or zoomed, the last picture is
  // moved and stretched to match, and drawn again properly once the map has been still a moment.
  const cache = { canvas: null, key: "", cam: "", seen: "", since: 0, a: null, b: null };
  const fogCache = { canvas: null, key: "", cam: "", seen: "", since: 0, a: null, b: null };
  function keptPicture(store, ctx, key, paint, dx = 0, dy = 0) {
    const view = NR.view;
    const a = NR.toScreen(-120, 37), b = NR.toScreen(-118, 35);
    const cam = [view.w, view.h, view.dpr, a[0].toFixed(2), a[1].toFixed(2), b[0].toFixed(2), b[1].toFixed(2)].join("|");
    const full = cam + "#" + key;
    if (!store.canvas) store.canvas = document.createElement("canvas");
    const cv = store.canvas;
    const now = performance.now();
    if (cam !== store.seen) {
      store.seen = cam;
      store.since = now;
    }
    const sameSize = cv.width === Math.round(view.w * view.dpr) && cv.height === Math.round(view.h * view.dpr);
    if (store.key !== full && store.key && store.cam !== cam && sameSize && now - store.since < 150) {
      // Moving: the old picture, moved and scaled so its two marks land where they are now
      const k = Math.hypot(b[0] - a[0], b[1] - a[1]) / Math.hypot(store.b[0] - store.a[0], store.b[1] - store.a[1]);
      ctx.save();
      ctx.setTransform(k, 0, 0, k, (a[0] - store.a[0] * k + dx) * view.dpr, (a[1] - store.a[1] * k + dy) * view.dpr);
      ctx.drawImage(cv, 0, 0);
      ctx.restore();
      return;
    }
    if (store.key !== full) {
      cv.width = Math.max(1, Math.round(view.w * view.dpr));
      cv.height = Math.max(1, Math.round(view.h * view.dpr));
      const g = cv.getContext("2d");
      g.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
      store.empty = paint(g, view) === false; // nothing to show: skip drawing the picture
      store.key = full;
      store.cam = cam;
      store.a = a;
      store.b = b;
    }
    if (store.empty) return;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, dx * view.dpr, dy * view.dpr);
    ctx.drawImage(cv, 0, 0);
    ctx.restore();
  }
  // Everything under the counties, borders and the network: sea and waves, the coast's
  // shallow water, land, deserts, hills and mountains, rivers, lakes, trees and cacti.
  C.drawState = (ctx) => keptPicture(cache, ctx, `v${NR.packVersion}`, paintState);
  C.keptPicture = keptPicture; // also used for the land layer in js/draw.js
  // Smooth outlines of a state's mountains (mountains and high mountains), for the faint
  // mountain areas of the Neo minimalist look (js/draw.js). Worked out once per state.
  const mountainCache = {};
  C.mountainRings = function (code) {
    const t = NR.TERRAIN.grids.find((x) => x.code === code);
    if (!t) return [];
    if (!mountainCache[code] || mountainCache[code].cells !== t.cells)
      mountainCache[code] = { cells: t.cells, rings: outlines((k) => t.cells[k] >= 2, t.cols, t.rows, t.box[0], t.box[3], t.step, 8) };
    return mountainCache[code].rings;
  };
  C.traceRings = (ctx, rings) => traceRings(ctx, rings, NR.toScreen);

  function paintState(ctx, view) {
    const P = NR.toScreen;
    const cull = culler(P, view.w, view.h);
    const [clon, clat] = NR.fromScreen(view.w / 2, view.h / 2);
    const a = P(clon, clat), b = P(clon, clat + 1);
    const ppd = Math.hypot(b[0] - a[0], b[1] - a[1]); // pixels per degree of latitude, mid-screen
    const packs = NR.MAP.states.map((st) => prepPack(st.code)).filter(Boolean);
    coarse = 0.05 * ppd < 9; // a grid cell is under 9 pixels
    const tiny = 0.05 * ppd < 4;
    // Waves
    const waves = wavesOnScreen(view, ppd);
    ctx.lineCap = "round";
    ctx.strokeStyle = K.wave;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    for (const wv of waves.list) {
      const [x, y] = P(wv.lon, wv.lat);
      if (x < -20 || y < -20 || x > view.w + 20 || y > view.h + 20) continue;
      const w = Math.min(10, Math.max(5, waves.step * ppd * 0.12)) * wv.w;
      ctx.moveTo(x - w, y);
      ctx.quadraticCurveTo(x - w / 2, y - w * 0.6, x, y);
      ctx.quadraticCurveTo(x + w / 2, y - w * 0.6, x + w, y);
    }
    ctx.stroke();
    // Shallow water along every coast (the game's states and the land outside them): two bands under the land
    const outside = NR.unloadedAreas().filter((ar) => cull(ar.box));
    // (along real coasts only: borders between states are covered by land anyway)
    ctx.beginPath();
    NR.MAP.coast.forEach((line) => traceFlat(ctx, line, P, false));
    outside.forEach((ar) => ar.outline.forEach((ring) => traceFlat(ctx, ring, P, true)));
    ctx.lineJoin = "round";
    ctx.strokeStyle = K.shallow;
    ctx.lineWidth = 18;
    ctx.stroke();
    ctx.strokeStyle = K.foam;
    ctx.lineWidth = 7;
    ctx.stroke();
    // Land outside the game, then the states' own land
    ctx.fillStyle = K.outside;
    for (const ar of outside) {
      ctx.beginPath();
      ar.outline.forEach((ring) => traceFlat(ctx, ring, P, true));
      ctx.fill("evenodd");
    }
    ctx.beginPath();
    NR.MAP.land.forEach((ring) => traceFlat(ctx, ring, P, true));
    ctx.fillStyle = K.land;
    ctx.fill("evenodd");
    // Each state: sand in the deserts, then hills, mountains and the high peaks as layers of
    // see-through color with a soft edge, kept inside the state
    for (const p of packs) {
      if (!cull(p.t.box)) continue;
      ctx.save();
      ctx.beginPath();
      NR.MAP.stateLand[p.code].forEach((ring) => traceFlat(ctx, ring, P, true));
      ctx.clip("evenodd");
      ctx.beginPath();
      traceRings(ctx, p.dry, P, cull);
      ctx.fillStyle = K.sand;
      ctx.fill("evenodd");
      // Zoomed far out (a grid cell under 4 pixels), gentle hills hardly show: leave them out
      for (let t = tiny ? 2 : 1; t <= 3; t++) {
        ctx.beginPath();
        traceRings(ctx, p.terraces[t - 1], P, cull);
        ctx.fillStyle = K.tint[t];
        ctx.fill("evenodd");
        if (tiny) continue;
        ctx.strokeStyle = K.edge;
        ctx.lineWidth = t === 1 ? 1 : 1.4;
        ctx.stroke();
      }
      ctx.restore();
    }
    // Rivers: blue with a darker edge
    const zoomW = Math.min(3.6, Math.max(1.6, ppd / 40));
    ctx.beginPath();
    NR.TERRAIN.rivers.forEach((r) => traceFlat(ctx, r.line, P, false));
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = K.riverEdge;
    ctx.lineWidth = zoomW + 2.2;
    ctx.stroke();
    ctx.strokeStyle = K.river;
    ctx.lineWidth = zoomW;
    ctx.stroke();
    // Lakes: blue, a lighter band along the shore inside, and an outline
    lakes(ctx, NR.TERRAIN.lakes.flatMap((l) => [l.ring, ...(l.holes || [])]), P); // (islands: holes)
    // Mountains, trees and cacti, back to front
    const sizes = BLOCKS.map((n) => n * 0.05 * ppd);
    let li = sizes.findIndex((px) => px < 24);
    li = li < 0 ? BLOCKS.length - 1 : Math.max(0, li - 1);
    const spacing = sizes[li];
    const s = Math.min(34, Math.max(12, spacing * 1.05));
    const shown = [];
    for (const p of packs) {
      if (!cull(p.t.box)) continue;
      for (const it of p.icons[li]) {
        const [x, y] = P(it.lon, it.lat);
        if (x < -40 || y < -10 || x > view.w + 40 || y > view.h + 50) continue;
        shown.push([y, x, it]);
      }
    }
    shown.sort((p, q) => p[0] - q[0]);
    for (const [y, x, it] of shown) icon(ctx, it, x, y, s * it.size);
  }

  function lakes(ctx, rings, P) {
    ctx.beginPath();
    rings.forEach((ring) => traceFlat(ctx, ring, P, true));
    ctx.fillStyle = K.lake;
    ctx.fill("evenodd");
    ctx.save();
    ctx.clip("evenodd");
    ctx.strokeStyle = K.shallow;
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = K.riverEdge;
    ctx.lineWidth = 1.6;
    ctx.stroke();
  }

  // ---------- Fog over the closed states and the land outside the game ----------
  // Puffy cartoon clouds that drift a little. A state's clouds puff up and fade away when it opens.
  const fogSeenClosed = {};
  const fogOpenedAt = {};
  C.fogColor = () => K.fog;
  // Is this place under fog? (closed: the states not open yet)
  function inRing(x, y, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
      const xi = ring[i], yi = ring[i + 1], xj = ring[j], yj = ring[j + 1];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  // Rings with their boxes, for quick "is this place inside?" tests
  const ringSet = (rings) =>
    rings.map((ring) => {
      const b = [Infinity, Infinity, -Infinity, -Infinity];
      for (let i = 0; i < ring.length; i += 2) {
        b[0] = Math.min(b[0], ring[i]);
        b[1] = Math.min(b[1], ring[i + 1]);
        b[2] = Math.max(b[2], ring[i]);
        b[3] = Math.max(b[3], ring[i + 1]);
      }
      return { ring, b };
    });
  const inSet = (set, lon, lat) => set.reduce((n, o) => (lon >= o.b[0] && lon <= o.b[2] && lat >= o.b[1] && lat <= o.b[3] && inRing(lon, lat, o.ring) ? !n : n), false);
  const landSets = new WeakMap();
  const setOf = (rings) => landSets.get(rings) || (landSets.set(rings, ringSet(rings)), landSets.get(rings));
  // Is this place under fog? Returns a closed state's code, "outside" (land outside the game),
  // OPEN (an open state's land: no fog) or null (the sea).
  const OPEN = "@open";
  function fogAt(lon, lat, closed) {
    for (const st of NR.MAP.states) {
      const set = setOf(NR.MAP.stateLand[st.code]);
      if (inSet(set, lon, lat)) return closed.has(st.code) ? st.code : OPEN;
    }
    for (const code of closed) {
      const ar = NR.AREAS[code];
      if (NR.isLoaded(code) || !ar) continue;
      if (lon >= ar.box[0] && lon <= ar.box[2] && lat >= ar.box[1] && lat <= ar.box[3] && inSet(setOf(ar.outline), lon, lat)) return code;
    }
    for (const ar of NR.outsideAreas())
      if (lon >= ar.box[0] && lon <= ar.box[2] && lat >= ar.box[1] && lat <= ar.box[3] && inSet(setOf(ar.outline), lon, lat)) return "outside";
    return null;
  }
  let fogLayer = null;
  // Paints fog over these areas ("outside" or state codes): a solid base, then the clouds.
  function paintFog(ctx, codes, puffs, view, cull) {
    const P = NR.toScreen;
    ctx.fillStyle = K.fog;
    for (const code of codes) {
      ctx.save();
      if (code === "outside") {
        // The land outside the game (its rough outlines), never over the game's own states
        ctx.beginPath();
        ctx.rect(-50, -50, view.w + 100, view.h + 100);
        NR.MAP.land.forEach((ring) => traceFlat(ctx, ring, P, true));
        ctx.clip("evenodd");
        for (const ar of NR.outsideAreas()) {
          if (!cull(ar.box)) continue;
          ctx.beginPath();
          ar.outline.forEach((ring) => traceFlat(ctx, ring, P, true));
          ctx.fill("evenodd");
        }
      } else {
        if (!NR.isLoaded(code)) {
          // Not loaded yet: its rough outline, kept off the loaded states' land
          ctx.beginPath();
          ctx.rect(-50, -50, view.w + 100, view.h + 100);
          NR.MAP.land.forEach((ring) => traceFlat(ctx, ring, P, true));
          ctx.clip("evenodd");
        }
        ctx.beginPath();
        NR.landOf(code).forEach((ring) => traceFlat(ctx, ring, P, true));
        ctx.fill("evenodd");
      }
      ctx.restore();
    }
    if (!puffs.length) return;
    // A cloud: three round puffs, with a shaded underside and a soft outline around the whole bank
    const shape = (p, grow, dy) => {
      const { x, y, r } = p;
      ctx.moveTo(x + r + grow, y + dy);
      ctx.arc(x, y + dy, r + grow, 0, Math.PI * 2);
      ctx.moveTo(x - r * 0.75 + r * 0.72 + grow, y + r * 0.3 + dy);
      ctx.arc(x - r * 0.75, y + r * 0.3 + dy, r * 0.72 + grow, 0, Math.PI * 2);
      ctx.moveTo(x + r * 0.8 + r * 0.68 + grow, y + r * 0.32 + dy);
      ctx.arc(x + r * 0.8, y + r * 0.32 + dy, r * 0.68 + grow, 0, Math.PI * 2);
    };
    const under = (p) => p.r * 0.14;
    const layer = (grow, low, color) => {
      ctx.beginPath();
      puffs.forEach((p) => shape(p, grow, low ? under(p) : 0));
      ctx.fillStyle = color;
      ctx.fill();
    };
    layer(2, false, K.fogEdge);
    layer(2, true, K.fogEdge);
    layer(0, true, K.fogShade);
    // The white tops last, back to front, so every cloud keeps its shaded underside
    ctx.fillStyle = K.fog;
    for (const p of puffs) {
      ctx.beginPath();
      shape(p, 0, -p.r * 0.06);
      ctx.fill();
    }
  }
  // The puffs over these areas ("outside" or state codes). clearing: state code -> 0..1 while
  // its clouds swell and drift apart as they fade.
  // Which area each lattice point is in, remembered while the closed states and the spacing stay
  // the same (so a state's clouds clearing for a moment cost little per frame)
  const fogMemo = { key: "", cells: new Map() };
  function cloudPuffs(codes, closed, clearing, view) {
    const P = NR.toScreen;
    const [clon, clat] = NR.fromScreen(view.w / 2, view.h / 2);
    const a = P(clon, clat), b = P(clon, clat + 1);
    const ppd = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const STEPS = [3.2, 1.6, 0.8, 0.4, 0.2, 0.1, 0.05];
    const step = STEPS.find((st) => st * ppd < 46 * 2) || 0.05; // about 46 pixels apart
    const [lon0, lat0, lon1, lat1] = screenBox(view);
    const memoKey = `${step}|${[...closed].sort().join(",")}|${NR.packVersion}`;
    if (fogMemo.key !== memoKey || fogMemo.cells.size > 40000) {
      fogMemo.key = memoKey;
      fogMemo.cells = new Map();
    }
    // Each lattice point sits somewhere in its cell (jittered), and remembers what's under it
    const spot = (i, j) => [(i + 0.15 + 0.7 * hash(i, j, 61)) * step, (j + 0.15 + 0.7 * hash(i, j, 62)) * step];
    const areaAt = (i, j) => {
      const id = (i + 50000) * 100000 + (j + 50000);
      let code = fogMemo.cells.get(id);
      if (code === undefined) fogMemo.cells.set(id, (code = fogAt(...spot(i, j), closed)));
      return code;
    };
    const puffs = [];
    for (let j = Math.floor(lat0 / step) - 1; j <= Math.ceil(lat1 / step) + 1; j++)
      for (let i = Math.floor(lon0 / step) - 1; i <= Math.ceil(lon1 / step) + 1; i++) {
        const code = areaAt(i, j);
        if (!code || code === OPEN || !codes.includes(code)) continue;
        const t = clearing[code] || 0;
        const [x, y] = P(...spot(i, j));
        let r = step * ppd * 0.42 * (0.85 + 0.35 * hash(i, j, 64));
        // A cloud next to an open state shrinks so it only just crosses the border, and the
        // state's own land (the counties you play in) stays in view
        let edge = false;
        for (let dj = -1; dj <= 1 && !edge; dj++) for (let di = -1; di <= 1 && !edge; di++) edge = areaAt(i + di, j + dj) === OPEN;
        if (edge) {
          let near = Infinity;
          for (const f of [0.4, 0.7, 1, 1.3, 1.6]) {
            for (let k = 0; k < 8 && near === Infinity; k++) {
              const q = NR.fromScreen(x + Math.cos((k * Math.PI) / 4) * f * r, y + Math.sin((k * Math.PI) / 4) * f * r);
              if (fogAt(q[0], q[1], closed) === OPEN) near = f * r;
            }
            if (near < Infinity) break;
          }
          if (near < Infinity) r = Math.max(r * 0.3, near / 1.5); // its side puffs reach about 1.5 r
        }
        r *= 1 + t * 0.6;
        puffs.push({ code, x: x + t * (x - view.w / 2) * 0.4, y, r });
      }
    return puffs.sort((p, q) => p.y - q.y);
  }
  C.drawFog = function (ctx, s, now) {
    const view = NR.view;
    // Which states are closed, and which opened a moment ago (their fog is clearing)
    const closed = new Set();
    const clearing = {};
    for (const code of Object.keys(s.states)) {
      if (!s.states[code].open) {
        closed.add(code);
        fogSeenClosed[code] = true;
        delete fogOpenedAt[code];
      } else if (fogSeenClosed[code]) {
        if (!fogOpenedAt[code]) fogOpenedAt[code] = now;
        const t = (now - fogOpenedAt[code]) / 1800;
        if (t < 1) {
          closed.add(code);
          clearing[code] = t;
        }
      }
    }
    // The whole cloud bank drifts gently back and forth
    const time = now / 1000;
    const dx = Math.sin(time * 0.35) * 3, dy = Math.cos(time * 0.27) * 1.5;
    // The fog that stays: a kept picture, redrawn only when the view or the closed states change
    const staying = ["outside", ...[...closed].filter((c) => clearing[c] === undefined)];
    keptPicture(fogCache, ctx, `${staying.join(",")}v${NR.packVersion}`, (c, v) => {
      const puffs = cloudPuffs(staying, closed, {}, v);
      if (!puffs.length) return false; // no fog anywhere on screen
      paintFog(c, staying, puffs, v, culler(NR.toScreen, v.w, v.h));
    }, dx, dy);
    // Fog that is clearing: drawn whole on a separate layer, then laid over the map see-through,
    // so it fades evenly instead of turning grey
    const fading = Object.keys(clearing);
    if (!fading.length) return;
    const t = Math.max(...fading.map((c) => clearing[c]));
    if (!fogLayer) fogLayer = document.createElement("canvas");
    if (fogLayer.width !== ctx.canvas.width || fogLayer.height !== ctx.canvas.height) {
      fogLayer.width = ctx.canvas.width;
      fogLayer.height = ctx.canvas.height;
    }
    const lc = fogLayer.getContext("2d");
    lc.setTransform(1, 0, 0, 1, 0, 0);
    lc.clearRect(0, 0, fogLayer.width, fogLayer.height);
    lc.setTransform(ctx.getTransform());
    paintFog(lc, fading, cloudPuffs(fading, closed, clearing, view), view, culler(NR.toScreen, view.w, view.h));
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, dx * view.dpr, dy * view.dpr);
    ctx.globalAlpha = 1 - t;
    ctx.drawImage(fogLayer, 0, 0);
    ctx.restore();
  };

  // ---------- City maps: hills as layers, water with a lighter shore ----------
  const B64 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  const cityShapes = {};
  function cityGround(key) {
    if (cityShapes[key]) return cityShapes[key];
    const d = NR.TERRAIN.cities[key];
    const meters = (k) => (d.elev[k] === "~" ? 0 : B64.indexOf(d.elev[k]) * 12);
    return (cityShapes[key] = [50, 150, 300].map((m) => outlines((k) => meters(k) >= m, d.cols, d.rows, d.box[0], d.box[3], d.step, 6)));
  }
  // Draws the city's detailed area (already clipped to its box by the caller).
  C.drawCity = function (ctx, key, project) {
    const d = NR.TERRAIN.cities[key];
    const terraces = cityGround(key);
    const [x0, y0, x1, y1] = d.box;
    const tl = project(x0, y1), br = project(x1, y0);
    ctx.fillStyle = K.land;
    ctx.fillRect(tl[0], tl[1], br[0] - tl[0], br[1] - tl[1]);
    terraces.forEach((rings, i) => {
      ctx.beginPath();
      traceRings(ctx, rings, project);
      ctx.fillStyle = K.tint[i + 1];
      ctx.fill("evenodd");
      ctx.strokeStyle = K.edge;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });
    // Water: a wide pale band along the shore, then the water itself
    ctx.beginPath();
    d.water.forEach((ring) => traceFlat(ctx, ring, project, true));
    ctx.fillStyle = K.lake;
    ctx.fill("evenodd");
    ctx.save();
    ctx.clip("evenodd");
    ctx.strokeStyle = K.shallow;
    ctx.lineWidth = 16;
    ctx.stroke();
    ctx.strokeStyle = K.foam;
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = K.outline;
    ctx.lineWidth = 2;
    ctx.stroke();
  };
})();
