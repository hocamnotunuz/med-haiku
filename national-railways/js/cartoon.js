// National Railways: the cartoon look ("Arcade" in Settings, the default). The same real
// geography as the classic map, painted like a picture book: hills and mountains as layered
// flat shapes with little peaks on top (green where it's forested, brown where it's dry, snow
// on the highest), pine trees in the forests, cacti and sagebrush in the deserts, waves in
// the sea, and rivers and lakes with outlines.
(function () {
  "use strict";
  const NR = window.NR;
  const C = (NR.cartoon = {});
  C.on = () => document.documentElement.dataset.look !== "classic";

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
      riverEdge: get("--toon-river-edge"),
      river: get("--river"),
      land: get("--land"),
    };
    cache.key = "";
  };

  // ---------- What grows where (by county) ----------
  // Trees even on the flats: the foggy north coast and western Oregon's coast and valleys.
  const FOREST = new Set(["humboldt", "del-norte-siskiyou-trinity", "mendocino", "or-clatsop-tillamook", "or-lincoln", "or-coos-curry", "or-josephine", "or-douglas"]);
  // Trees on the hills: the Sierra Nevada, the Cascades, the northern Coast Ranges, the Santa Cruz Mountains.
  const WOODED = new Set(["shasta", "tehama", "butte", "yuba", "plumas-sierra", "nevada", "placer", "el-dorado", "alpine-amador-calaveras", "mariposa-tuolumne", "madera", "fresno", "tulare", "lake", "colusa-glenn", "sonoma", "marin", "napa", "santa-cruz", "san-mateo"]);
  // Dry: Nevada, Arizona, the California deserts and Oregon's high desert.
  const DRY = new Set(["imperial", "inyo-mono", "riverside", "san-bernardino", "lassen-modoc", "or-malheur", "or-grant-harney-lake", "or-crook-deschutes", "or-gilliam-sherman-wheeler", "or-morrow-umatilla"]);
  const kindOf = (id) => (DRY.has(id) || /^(nv|az)-/.test(id) ? 4 : FOREST.has(id) ? 3 : WOODED.has(id) || /^or-/.test(id) ? 2 : 1);

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

  // ---------- The state map's grid: height, county kind, lakes ----------
  let G = null;
  function prepare() {
    if (G) return G;
    const T = NR.TERRAIN;
    const { cols, rows, step } = T;
    const lon0 = T.box[0], lat1 = T.box[3];
    const code = new Uint8Array(cols * rows); // 0-3 heights in the four states, 4-7 outside them
    let i = 0;
    for (const m of T.grid.matchAll(/([A-H])(\d*)/g)) {
      const n = m[2] ? +m[2] : 1;
      code.fill(m[1].charCodeAt(0) - 65, i, i + n);
      i += n;
    }
    // One pixel per cell: the kind of county (red) and lakes (green)
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
      g.beginPath();
      r.rings.forEach(trace);
      g.fillStyle = `rgb(${kindOf(r.id) * 50},0,0)`;
      g.fill("evenodd");
    }
    g.globalCompositeOperation = "lighter";
    g.beginPath();
    T.lakes.forEach((l) => trace(l.ring));
    g.fillStyle = "rgb(0,255,0)";
    g.fill("evenodd");
    const px = g.getImageData(0, 0, cols, rows).data;
    const kind = new Uint8Array(cols * rows);
    const lake = new Uint8Array(cols * rows);
    for (let k = 0; k < cols * rows; k++) {
      kind[k] = Math.round(px[k * 4] / 50);
      lake[k] = px[k * 4 + 1] > 127 ? 1 : 0;
    }
    const level = (k) => code[k] & 3;
    const outside = (k) => code[k] >= 4;
    // Land outside the four states (Mexico, Utah, Idaho...), grown by a cell so it meets their borders.
    const near = (k, f) => {
      const c = k % cols, r = (k - c) / cols;
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const cc = c + dc, rr = r + dr;
          if (cc >= 0 && rr >= 0 && cc < cols && rr < rows && f(rr * cols + cc)) return true;
        }
      return false;
    };
    const grown = new Uint8Array(cols * rows);
    for (let k = 0; k < cols * rows; k++) grown[k] = near(k, outside) ? 1 : 0;
    G = {
      cols,
      rows,
      step,
      lon0,
      lat0: T.box[1],
      lat1,
      code,
      kind,
      lake,
      level,
      outside: outlines((k) => grown[k], cols, rows, lon0, lat1, step, 8, 400),
      dry: outlines((k) => kind[k] === 4 || (kind[k] === 0 && !outside(k) && near(k, (j) => kind[j] === 4)), cols, rows, lon0, lat1, step, 8),
      terraces: [1, 2, 3].map((t) => outlines((k) => !outside(k) && level(k) >= t, cols, rows, lon0, lat1, step, t === 1 ? 14 : t === 2 ? 8 : 4)),
    };
    G.icons = placeIcons(G);
    G.waves = placeWaves(G);
    return G;
  }

  // A steady random number for each place, so the trees don't jump around.
  const hash = (a, b, c) => {
    let h = (a * 374761393 + b * 668265263 + c * 2147483647) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };

  // Icons on a jittered grid, in five sizes of grid (16, 8, 4, 2 and 1 cells apart):
  // the map uses whichever keeps them about 26 pixels apart at the current zoom.
  const BLOCKS = [16, 8, 4, 2, 1];
  function placeIcons(g) {
    return BLOCKS.map((n, li) => {
      const list = [];
      for (let br = 0; br * n < g.rows; br++)
        for (let bc = 0; bc * n < g.cols; bc++) {
          const c = Math.min(g.cols - 1, bc * n + Math.floor(hash(bc, br, li * 7 + 1) * n));
          const r = Math.min(g.rows - 1, br * n + Math.floor(hash(bc, br, li * 7 + 2) * n));
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

  // Little waves out at sea, away from the coast, in four spacings (like the icons).
  const WAVE_STEPS = [1.4, 0.7, 0.35, 0.175];
  function placeWaves(g) {
    return WAVE_STEPS.map((step) => wavesAt(g, step));
  }
  function wavesAt(g, step) {
    const list = [];
    for (let lat = 28; lat < 49.5; lat += step)
      for (let lon = -131; lon < -114; lon += step) {
        const i = Math.round(lon / step), j = Math.round(lat / step);
        const x = lon + step * (0.15 + 0.7 * hash(i, j, 91)), y = lat + step * (0.15 + 0.7 * hash(i, j, 92));
        const c = Math.floor((x - g.lon0) / g.step), r = Math.floor((g.lat1 - y) / g.step);
        if (c >= -2 && r >= -2 && c < g.cols + 2 && r < g.rows + 2) {
          // Inside the grid: open sea only, two cells clear of any land
          let clear = true;
          for (let dr = -2; dr <= 2 && clear; dr++)
            for (let dc = -2; dc <= 2 && clear; dc++) {
              const cc = c + dc, rr = r + dr;
              if (cc < 0 || rr < 0 || cc >= g.cols || rr >= g.rows) continue;
              const k = rr * g.cols + cc;
              if (g.kind[k] || g.code[k] >= 4) clear = false;
            }
          if (!clear) continue;
        } else if (!(x < g.lon0 || (y < g.lat0 && x < -117.3))) continue; // outside the grid: only the open Pacific
        list.push({ lon: x, lat: y, w: 0.8 + 0.4 * hash(i, j, 93) });
      }
    return list;
  }

  // ---------- Drawing helpers ----------
  let coarse = false; // zoomed out: draw the coarser copies
  function traceRings(ctx, rings, project, cull) {
    for (const ring of rings) {
      if (cull && !cull(ring.box)) continue;
      const p = coarse ? ring.coarse : ring.pts;
      if (!p) continue;
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

  // ---------- The state map, drawn once per camera position and kept in a picture ----------
  // While the map is being moved or zoomed, the last picture is moved and stretched to match,
  // and it is drawn again properly once the map has been still for a moment.
  const cache = { canvas: null, key: "", seen: "", since: 0, a: null, b: null };
  // Everything under the counties, borders and the network: sea and waves, the coast's
  // shallow water, land, deserts, hills and mountains, rivers, lakes, trees and cacti.
  C.drawState = function (ctx) {
    const view = NR.view;
    const a = NR.toScreen(-120, 37), b = NR.toScreen(-118, 35);
    const key = [view.w, view.h, view.dpr, a[0].toFixed(2), a[1].toFixed(2), b[0].toFixed(2), b[1].toFixed(2)].join("|");
    if (!cache.canvas) cache.canvas = document.createElement("canvas");
    const cv = cache.canvas;
    const now = performance.now();
    if (key !== cache.seen) {
      cache.seen = key;
      cache.since = now;
    }
    const sameSize = cv.width === Math.round(view.w * view.dpr) && cv.height === Math.round(view.h * view.dpr);
    if (cache.key !== key && cache.key && sameSize && now - cache.since < 150) {
      // Moving: the old picture, moved and scaled so its two marks land where they are now
      const k = Math.hypot(b[0] - a[0], b[1] - a[1]) / Math.hypot(cache.b[0] - cache.a[0], cache.b[1] - cache.a[1]);
      ctx.save();
      ctx.setTransform(k, 0, 0, k, (a[0] - cache.a[0] * k) * view.dpr, (a[1] - cache.a[1] * k) * view.dpr);
      ctx.drawImage(cv, 0, 0);
      ctx.restore();
      return;
    }
    if (cache.key !== key) {
      cv.width = Math.max(1, Math.round(view.w * view.dpr));
      cv.height = Math.max(1, Math.round(view.h * view.dpr));
      const g = cv.getContext("2d");
      g.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
      paintState(g, view);
      cache.key = key;
      cache.a = a;
      cache.b = b;
    }
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(cv, 0, 0);
    ctx.restore();
  };

  function paintState(ctx, view) {
    const g = prepare();
    const P = NR.toScreen;
    const cull = culler(P, view.w, view.h);
    const a = P(-119, 37), b = P(-119, 38);
    const ppd = Math.hypot(b[0] - a[0], b[1] - a[1]); // pixels per degree of latitude
    coarse = g.step * ppd < 9; // a grid cell is under 9 pixels
    // Waves
    ctx.lineCap = "round";
    ctx.strokeStyle = K.wave;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    let wl = WAVE_STEPS.findIndex((st) => st * ppd < 50);
    wl = wl < 0 ? WAVE_STEPS.length - 1 : Math.max(0, wl - 1);
    for (const wv of g.waves[wl]) {
      const [x, y] = P(wv.lon, wv.lat);
      if (x < -20 || y < -20 || x > view.w + 20 || y > view.h + 20) continue;
      const w = Math.min(10, Math.max(5, WAVE_STEPS[wl] * ppd * 0.12)) * wv.w;
      ctx.moveTo(x - w, y);
      ctx.quadraticCurveTo(x - w / 2, y - w * 0.6, x, y);
      ctx.quadraticCurveTo(x + w / 2, y - w * 0.6, x + w, y);
    }
    ctx.stroke();
    // Shallow water along every coast: two bands under the land
    const landPath = () => {
      ctx.beginPath();
      NR.MAP.land.forEach((ring) => traceFlat(ctx, ring, P, true));
      traceRings(ctx, g.outside, P, cull);
    };
    landPath();
    ctx.lineJoin = "round";
    ctx.strokeStyle = K.shallow;
    ctx.lineWidth = 18;
    ctx.stroke();
    ctx.strokeStyle = K.foam;
    ctx.lineWidth = 7;
    ctx.stroke();
    // Land outside the four states, then the states' own land
    ctx.beginPath();
    traceRings(ctx, g.outside, P, cull);
    ctx.fillStyle = K.outside;
    ctx.fill();
    ctx.beginPath();
    NR.MAP.land.forEach((ring) => traceFlat(ctx, ring, P, true));
    ctx.fillStyle = K.land;
    ctx.fill("evenodd");
    ctx.save();
    ctx.clip("evenodd");
    // Deserts: sand
    ctx.beginPath();
    traceRings(ctx, g.dry, P, cull);
    ctx.fillStyle = K.sand;
    ctx.fill("evenodd");
    // Hills, mountains and the high peaks: layers of see-through color with a soft edge
    for (let t = 1; t <= 3; t++) {
      ctx.beginPath();
      traceRings(ctx, g.terraces[t - 1], P, cull);
      ctx.fillStyle = K.tint[t];
      ctx.fill("evenodd");
      ctx.strokeStyle = K.edge;
      ctx.lineWidth = t === 1 ? 1 : 1.4;
      ctx.stroke();
    }
    ctx.restore();
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
    lakes(ctx, NR.TERRAIN.lakes.map((l) => l.ring), P);
    // Mountains, trees and cacti, back to front
    const sizes = BLOCKS.map((n) => n * g.step * ppd);
    let li = sizes.findIndex((px) => px < 24);
    li = li < 0 ? BLOCKS.length - 1 : Math.max(0, li - 1);
    const spacing = sizes[li];
    const s = Math.min(34, Math.max(12, spacing * 1.05));
    const shown = [];
    for (const it of g.icons[li]) {
      const [x, y] = P(it.lon, it.lat);
      if (x < -40 || y < -10 || x > view.w + 40 || y > view.h + 50) continue;
      shown.push([y, x, it]);
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
