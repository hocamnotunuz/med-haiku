// National Railways: drawing. Turns the game state into pictures on the canvas.
(function () {
  "use strict";
  const NR = window.NR;
  // Fonts for text on the map: from the --font-display and --font-mono tokens (they change with the look).
  let DISPLAY = '"Overpass", "Segoe UI", system-ui, sans-serif';
  let MONO = '"Overpass Mono", ui-monospace, Menlo, monospace';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const ease = (t) => t * t * (3 - 2 * t);
  const backOut = (t) => 1 + 2.7 * Math.pow(t - 1, 3) + 1.7 * Math.pow(t - 1, 2);

  const view = (NR.view = { w: 1, h: 1, dpr: 1, scale: 60, cos: 1, sin: 0, ox: 0, oy: 0, r: 9, lw: 5, big: false });
  view.box = { top: 0, bottom: 0, left: 0, right: 0 };
  const pos = (NR.pos = {}); // screen position of every city
  let colors = { lines: [] };
  let toon = false; // the cartoon look (js/cartoon.js)
  // The Neo minimalist look: a flat transit-map style. miniHints: with faint mountain areas and
  // every county border (otherwise bare: only the counties you own are outlined).
  let mini = false;
  let miniHints = false;

  // Colors come from the CSS tokens in style.css, so light and dark themes both work.
  NR.readTheme = function () {
    const cs = getComputedStyle(document.documentElement);
    const get = (name) => cs.getPropertyValue(name).trim();
    colors = {
      sea: get("--sea"),
      grid: get("--grid"),
      land: get("--land"),
      coast: get("--coast"),
      county: get("--county"),
      countyText: get("--county-text"),
      locked: get("--locked"),
      river: get("--river"),
      relief: parseFloat(get("--relief")) || 0.8,
      panel: get("--panel"),
      cargo: { produce: get("--produce"), containers: get("--container"), trucks: get("--truck") },
      night: get("--night"),
      work: get("--work"),
      station: get("--station"),
      ink: get("--ink"),
      outline: get("--toon-outline") || get("--ink"), // cartoon outlines and shadows
      closed: get("--closed") || get("--locked"), // states not open yet, and land outside the game (Neo minimalist)
      hill: get("--hill") || "rgba(0, 0, 0, 0.06)", // faint mountain areas (Neo minimalist)
      muted: get("--muted"),
      accent: get("--accent"),
      accentInk: get("--accent-ink"),
      danger: get("--danger"),
      lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => get("--line-" + n)),
    };
    DISPLAY = get("--font-display") || DISPLAY;
    MONO = get("--font-mono") || MONO;
    toon = NR.cartoon.on();
    mini = document.documentElement.dataset.look === "minimal";
    miniHints = document.documentElement.dataset.miniBg === "hints";
    NR.cartoon.readTheme();
    palettes = null; // the line color sets are made again from the new colors
    if (typeof landStore !== "undefined") landStore.key = ""; // colors changed: draw the land again
  };
  NR.lineColor = (i) => colors.lines[i] || colors.ink;
  // Each group of lines has its own color set: bright for state lines, deep for national lines
  // (mixed toward black), pastel for international lines (mixed toward white).
  const mixHex = (hex, to, k) => {
    const m = /^#([0-9a-f]{6})$/i.exec((hex || "").trim());
    if (!m) return hex;
    const n = parseInt(m[1], 16);
    return "#" + [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v + (to - v) * k).toString(16).padStart(2, "0")).join("");
  };
  let palettes = null;
  function paletteFor(kind) {
    if (!palettes) {
      const cs = getComputedStyle(document.documentElement);
      const deep = parseFloat(cs.getPropertyValue("--line-deep")) || 0.35;
      const pastel = parseFloat(cs.getPropertyValue("--line-pastel")) || 0.48;
      palettes = { state: colors.lines, national: colors.lines.map((c) => mixHex(c, 0, deep)), intl: colors.lines.map((c) => mixHex(c, 255, pastel)) };
    }
    return palettes[kind] || palettes.state;
  }
  NR.groupColor = (group, c) => {
    const p = paletteFor(group ? NR.groupKind(group) : "state");
    return c >= 0 ? p[c % p.length] || colors.ink : colors.muted;
  };
  NR.lineColorOf = (line) => NR.groupColor(line.group, line.color);
  // International lines are drawn twice as thick
  const lineWidthOf = (line, lw) => (line.group === "intl" ? lw * 2 : lw);

  // ---------- Map projection ----------
  // Lambert conformal conic, the usual projection for maps of the US and Canada: shapes stay
  // true, and north is straight up in the middle of the map. It is centered on the open states,
  // with its two standard parallels a sixth of the way in from their south and north edges.
  // Units are degrees of latitude (one is about 69 miles); y grows downward, like the screen.
  const RAD = Math.PI / 180;
  const proj = { lon0: -119.5, n: 0.6, F: 1, rho0: 0 };
  const rhoOf = (phi) => ((180 / Math.PI) * proj.F) / Math.pow(Math.tan(Math.PI / 4 + phi / 2), proj.n);
  function setProjection(lon0, latS, latN) {
    const p1 = (latS + (latN - latS) / 6) * RAD, p2 = (latN - (latN - latS) / 6) * RAD;
    const t = (p) => Math.tan(Math.PI / 4 + p / 2);
    proj.n = Math.abs(p2 - p1) < 1e-6 ? Math.sin(p1) : Math.log(Math.cos(p1) / Math.cos(p2)) / Math.log(t(p2) / t(p1));
    proj.F = (Math.cos(p1) * Math.pow(t(p1), proj.n)) / proj.n;
    proj.lon0 = lon0;
    proj.rho0 = rhoOf(((latS + latN) / 2) * RAD);
  }
  const base = (lon, lat) => {
    const rho = rhoOf(lat * RAD);
    const th = proj.n * (lon - proj.lon0) * RAD;
    return [rho * Math.sin(th), rho * Math.cos(th) - proj.rho0];
  };
  // The opposite of base: longitude and latitude from map units.
  const unbase = (x, y) => {
    const yy = y + proj.rho0;
    const rho = Math.hypot(x, yy);
    const lon = proj.lon0 + Math.atan2(x, yy) / proj.n / RAD;
    const lat = (2 * Math.atan(Math.pow(((180 / Math.PI) * proj.F) / rho, 1 / proj.n)) - Math.PI / 2) / RAD;
    return [lon, lat];
  };

  // Borders, coasts, rivers and other fixed outlines: their map units are worked out once per
  // projection and kept, so each frame only has to move and scale them onto the screen.
  let projVersion = 0;
  const projCache = new WeakMap();
  function projected(list) {
    let c = projCache.get(list);
    if (!c || c.v !== projVersion) {
      const xy = new Float64Array(list.length);
      for (let i = 0; i < list.length; i += 2) {
        const p = base(list[i], list[i + 1]);
        xy[i] = p[0];
        xy[i + 1] = p[1];
      }
      c = { v: projVersion, xy };
      projCache.set(list, c);
    }
    return c.xy;
  }
  // Adds a flat list of longitude, latitude pairs to the current path, on the state map.
  NR.traceList = function (ctx, list, close) {
    if (list.length < 2) return;
    const xy = projected(list);
    // Screen = camera(offset(scale(tilt(map units - middle)))), as one linear step
    const k = view.scale * cam.zoom, c = view.cos * k, s = view.sin * k;
    const ex = cam.x + view.ox * cam.zoom - MID[0] * c + MID[1] * s;
    const ey = cam.y + view.oy * cam.zoom - MID[0] * s - MID[1] * c;
    let px = xy[0] * c - xy[1] * s + ex, py = xy[0] * s + xy[1] * c + ey;
    ctx.moveTo(px, py);
    // Points closer than about half a pixel to the last one drawn add nothing you can see: skip them
    const last = xy.length - 2;
    for (let i = 2; i < xy.length; i += 2) {
      const x = xy[i] * c - xy[i + 1] * s + ex, y = xy[i] * s + xy[i + 1] * c + ey;
      if (i < last && Math.abs(x - px) + Math.abs(y - py) < 0.6) continue;
      ctx.lineTo(x, y);
      px = x;
      py = y;
    }
    if (close) ctx.closePath();
  };

  // ---------- Fitting the open states on the screen ----------
  const ringPoints = (ring) => {
    const pts = [];
    for (let i = 0; i < ring.length; i += 2) pts.push(base(ring[i], ring[i + 1]));
    return pts;
  };
  let ALL = [];
  let MID = [0, 0];
  let fitted = "";
  let maxTilt = 12;
  // Fit the map to these states (the ones open in the game). Returns true if that changed.
  NR.fitStates = function (codes) {
    // Fit again once a state's exact map has loaded (until then its rough outline is used)
    const key = codes.join(",") + "|" + codes.map((code) => (NR.isLoaded(code) ? 1 : 0)).join("");
    if (key === fitted) return false;
    fitted = key;
    maxTilt = codes.length === 1 ? 12 : 0; // a state on its own may tilt (long, diagonal California does)
    // Center the projection on these states
    let lon0 = Infinity, lon1 = -Infinity, lat0 = Infinity, lat1 = -Infinity;
    codes.forEach((code) =>
      NR.landOf(code).forEach((ring) => {
        for (let i = 0; i < ring.length; i += 2) {
          lon0 = Math.min(lon0, ring[i]);
          lon1 = Math.max(lon1, ring[i]);
          lat0 = Math.min(lat0, ring[i + 1]);
          lat1 = Math.max(lat1, ring[i + 1]);
        }
      })
    );
    setProjection((lon0 + lon1) / 2, lat0, lat1);
    projVersion++;
    ALL = codes.flatMap((code) => NR.landOf(code).flatMap(ringPoints));
    MID = ALL.reduce((m, p) => [m[0] + p[0] / ALL.length, m[1] + p[1] / ALL.length], [0, 0]);
    return true;
  };
  NR.fitStates([NR.HOME_STATE]);
  const turn = (x, y, c, s) => {
    const dx = x - MID[0];
    const dy = y - MID[1];
    return [dx * c - dy * s, dx * s + dy * c];
  };

  // California is long and diagonal, so the map may tilt a little (at most 12°)
  // when that makes it noticeably bigger on screen. The compass shows north.
  NR.layout = function (w, h, dpr, box) {
    Object.assign(view, { w, h, dpr, box });
    const bw = Math.max(60, w - box.left - box.right);
    const bh = Math.max(60, h - box.top - box.bottom);
    let best = null;
    for (let deg = -maxTilt; deg <= maxTilt; deg += 2) {
      const a = (deg * Math.PI) / 180;
      const c = Math.cos(a);
      const s = Math.sin(a);
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const [x, y] of ALL) {
        const [rx, ry] = turn(x, y, c, s);
        x0 = Math.min(x0, rx);
        x1 = Math.max(x1, rx);
        y0 = Math.min(y0, ry);
        y1 = Math.max(y1, ry);
      }
      const scale = Math.min(bw / (x1 - x0), bh / (y1 - y0));
      const score = scale * (1 - Math.abs(deg) / 200);
      if (!best || score > best.score) best = { score, scale, c, s, x0, x1, y0, y1 };
    }
    view.scale = best.scale;
    view.cos = best.c;
    view.sin = best.s;
    view.ox = box.left + bw / 2 - ((best.x0 + best.x1) / 2) * best.scale;
    view.oy = box.top + bh / 2 - ((best.y0 + best.y1) / 2) * best.scale;
    view.baseR = clamp(best.scale * 0.12, 6.5, 11);
    view.baseLw = clamp(best.scale * 0.075, 3.5, 6);
    // Where the whole state sits on screen before zooming.
    view.map = { x0: view.ox + best.x0 * best.scale, x1: view.ox + best.x1 * best.scale, y0: view.oy + best.y0 * best.scale, y1: view.oy + best.y1 * best.scale };
    NR.setCamera(cam.zoom, cam.x, cam.y);
  };

  // ---------- Zooming and moving the map ----------
  // The camera zooms the fitted map by cam.zoom and shifts it by cam.x, cam.y pixels.
  const cam = (NR.camera = { zoom: 1, x: 0, y: 0, max: 6 });
  NR.setCamera = function (zoom, x, y) {
    cam.zoom = clamp(zoom, 1, cam.max);
    // Keep the state on screen. Its edges may come inside the screen only by a margin
    // (none at full view, up to 40% of the screen once zoomed in), so cities near the
    // border can still be brought to the middle.
    const m = view.map;
    const b = view.box;
    const slack = Math.min(1, cam.zoom - 1) * 0.4;
    const keep = (v, a, c, s) => clamp(v, Math.min(a, c) - s, Math.max(a, c) + s);
    cam.x = keep(x, view.w - b.right - m.x1 * cam.zoom, b.left - m.x0 * cam.zoom, slack * (view.w - b.left - b.right));
    cam.y = keep(y, view.h - b.bottom - m.y1 * cam.zoom, b.top - m.y0 * cam.zoom, slack * (view.h - b.top - b.bottom));
    // Stations and lines grow a little when zoomed in, but much less than the map.
    const grow = Math.min(1.5, 1 + (cam.zoom - 1) * 0.15);
    view.r = view.baseR * grow;
    view.lw = view.baseLw * grow;
    view.zoomScale = view.scale * cam.zoom;
    view.pxPerMile = view.zoomScale / 69;
    view.big = view.zoomScale >= 60; // room for full city names
    view.showCounties = view.zoomScale >= 100; // room for county names
  };
  NR.zoomAt = (sx, sy, factor) => {
    const z = clamp(cam.zoom * factor, 1, cam.max);
    const k = z / cam.zoom;
    NR.setCamera(z, sx - (sx - cam.x) * k, sy - (sy - cam.y) * k);
  };
  NR.panBy = (dx, dy) => NR.setCamera(cam.zoom, cam.x + dx, cam.y + dy);
  // Move the map so this station is in the middle of the screen.
  NR.centerOnStation = (id) => {
    const c = NR.cityById[id];
    const [sx, sy] = NR.toScreen(c.lon, c.lat);
    const [vx, vy] = NR.viewCenter();
    NR.panBy(vx - sx, vy - sy);
  };
  // Is this screen point inside the visible map area (between the top and bottom bars)?
  NR.onScreen = (x, y, margin = 10) => x > view.box.left + margin && x < view.w - view.box.right - margin && y > view.box.top + margin && y < view.h - view.box.bottom - margin;
  NR.resetCamera = () => NR.setCamera(1, 0, 0);
  // Zoom in on these places ([longitude, latitude] pairs) with some room around them.
  NR.focusOn = function (places, maxZoom = 4) {
    if (!places.length) return NR.resetCamera();
    NR.setCamera(1, 0, 0);
    const pts = places.map(([lon, lat]) => NR.toScreen(lon, lat));
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const w = Math.max(40, Math.max(...xs) - Math.min(...xs)) * 1.5;
    const h = Math.max(40, Math.max(...ys) - Math.min(...ys)) * 1.5;
    const b = view.box;
    const z = clamp(Math.min((view.w - b.left - b.right) / w, (view.h - b.top - b.bottom) / h), 1, Math.min(maxZoom, cam.max));
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    const [vx, vy] = NR.viewCenter();
    NR.setCamera(z, vx - cx * z, vy - cy * z);
  };
  // The middle of the map area on screen (used by the zoom buttons).
  NR.viewCenter = () => [(view.box.left + view.w - view.box.right) / 2, (view.box.top + view.h - view.box.bottom) / 2];

  NR.toScreen = function (lon, lat) {
    const [x, y] = base(lon, lat);
    const [rx, ry] = turn(x, y, view.cos, view.sin);
    return [cam.x + (view.ox + rx * view.scale) * cam.zoom, cam.y + (view.oy + ry * view.scale) * cam.zoom];
  };
  const updatePositions = () => NR.PLACES.forEach((c) => (pos[c.id] = NR.toScreen(c.lon, c.lat)));

  // The opposite of toScreen: which longitude and latitude is under this screen point?
  NR.fromScreen = function (sx, sy) {
    const rx = ((sx - cam.x) / cam.zoom - view.ox) / view.scale;
    const ry = ((sy - cam.y) / cam.zoom - view.oy) / view.scale;
    const dx = rx * view.cos + ry * view.sin; // undo the tilt
    const dy = -rx * view.sin + ry * view.cos;
    return unbase(dx + MID[0], dy + MID[1]);
  };
  // Is a point inside a flat ring of longitude, latitude pairs?
  function inRing(x, y, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
      const xi = ring[i];
      const yi = ring[i + 1];
      const xj = ring[j];
      const yj = ring[j + 1];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  // Which county is under this screen point (or null for the sea)?
  NR.hitCounty = function (sx, sy) {
    const [lon, lat] = NR.fromScreen(sx, sy);
    const r = NR.MAP.regions.find((reg) => reg.rings.reduce((inside, ring) => (inRing(lon, lat, ring) ? !inside : inside), false));
    return r ? r.id : null;
  };

  // ---------- Shapes for each type of place ----------
  NR.shapePath = function (ctx, shape, x, y, r) {
    ctx.beginPath();
    if (shape === "circle") ctx.arc(x, y, r, 0, Math.PI * 2);
    else if (shape === "square") {
      const k = r * 0.88;
      ctx.rect(x - k, y - k, 2 * k, 2 * k);
    } else if (shape === "triangle") {
      const k = r * 1.2;
      ctx.moveTo(x, y - k);
      ctx.lineTo(x + k * 0.95, y + k * 0.65);
      ctx.lineTo(x - k * 0.95, y + k * 0.65);
      ctx.closePath();
    } else if (shape === "diamond") {
      const k = r * 1.2;
      ctx.moveTo(x, y - k);
      ctx.lineTo(x + k, y);
      ctx.lineTo(x, y + k);
      ctx.lineTo(x - k, y);
      ctx.closePath();
    } else if (shape === "half") {
      const k = r * 1.15; // a sun setting over the sea
      ctx.arc(x, y + k * 0.4, k, Math.PI, 0);
      ctx.closePath();
    } else if (shape === "star") {
      // five-pointed star: tourists and scenic places
      for (let i = 0; i < 10; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 5;
        const k = i % 2 ? r * 0.55 : r * 1.25;
        if (i) ctx.lineTo(x + Math.cos(a) * k, y + Math.sin(a) * k);
        else ctx.moveTo(x + Math.cos(a) * k, y + Math.sin(a) * k);
      }
      ctx.closePath();
    }
  };

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // ---------- Lines that share track sit side by side ----------
  const segKey = (a, b) => (a < b ? a + "|" + b : b + "|" + a);
  // Transit-map track (Neo minimalist): straight, then one 45° bend, so every stretch runs across,
  // up and down, or diagonally. Only the drawing changes: prices and travel times don't.
  function octo(x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1, ax = Math.abs(dx), ay = Math.abs(dy);
    if (ax < 1 || ay < 1 || Math.abs(ax - ay) < 1) return [x1, y1, x2, y2];
    return ax > ay ? [x1, y1, x1 + Math.sign(dx) * (ax - ay), y1, x2, y2] : [x1, y1, x1, y1 + Math.sign(dy) * (ay - ax), x2, y2];
  }
  // The points a stretch of a line is drawn through, from a to b. The bend is worked out in one
  // fixed order of the two stations, so trains follow the same bends whichever way they run.
  function trackPath(a, b, off) {
    const p = segPoints(a, b, off);
    if (!mini) return p;
    if (a < b) return octo(p[0], p[1], p[2], p[3]);
    const q = octo(p[2], p[3], p[0], p[1]);
    const out = [];
    for (let i = q.length - 2; i >= 0; i -= 2) out.push(q[i], q[i + 1]);
    return out;
  }
  // The point and direction a fraction e of the way along a path
  function along(pts, e) {
    const lens = [];
    let total = 0;
    for (let i = 0; i + 2 < pts.length; i += 2) {
      const l = Math.hypot(pts[i + 2] - pts[i], pts[i + 3] - pts[i + 1]);
      lens.push(l);
      total += l;
    }
    let d = e * total;
    for (let k = 0; k < lens.length; k++) {
      const i = k * 2;
      if (d <= lens[k] || k === lens.length - 1) {
        const f = lens[k] ? Math.min(1, d / lens[k]) : 0;
        return [pts[i] + (pts[i + 2] - pts[i]) * f, pts[i + 1] + (pts[i + 3] - pts[i + 1]) * f, Math.atan2(pts[i + 3] - pts[i + 1], pts[i + 2] - pts[i])];
      }
      d -= lens[k];
    }
    return [pts[0], pts[1], 0];
  }

  function segmentOffsets(s) {
    const map = {};
    s.lines.forEach((l) => {
      for (const [a, b] of NR.lineLegs(l)) {
        const list = (map[segKey(a, b)] ||= []);
        list.push(l.id);
        if (l.group === "intl") list.wide = true; // a wide international line needs more room
      }
    });
    return map;
  }
  function offsetFor(segs, a, b, lineId) {
    const list = segs[segKey(a, b)];
    if (!list || list.length < 2) return 0;
    const side = a < b ? 1 : -1; // same side whichever way the train runs
    return side * (list.indexOf(lineId) - (list.length - 1) / 2) * view.lw * 1.25 * (list.wide ? 1.6 : 1);
  }
  function segPoints(a, b, off) {
    const pa = pos[a];
    const pb = pos[b];
    const dx = pb[0] - pa[0];
    const dy = pb[1] - pa[1];
    const len = Math.hypot(dx, dy) || 1;
    const nx = (-dy / len) * off;
    const ny = (dx / len) * off;
    return [pa[0] + nx, pa[1] + ny, pb[0] + nx, pb[1] + ny];
  }

  // ---------- Line-end tabs (drag them to extend a line) ----------
  NR.lineHandles = function (s) {
    const out = [];
    for (const l of s.lines) {
      if (l.loop) continue; // a loop has no ends
      const n = l.stops.length;
      for (const atHead of [true, false]) {
        const end = atHead ? l.stops[0] : l.stops[n - 1];
        const prev = atHead ? l.stops[1] : l.stops[n - 2];
        const pe = pos[end];
        const pp = pos[prev];
        const len = Math.hypot(pe[0] - pp[0], pe[1] - pp[1]) || 1;
        const dx = (pe[0] - pp[0]) / len;
        const dy = (pe[1] - pp[1]) / len;
        const reach = view.r + 18;
        out.push({ lineId: l.id, group: l.group, color: l.color, atHead, stationId: end, dx, dy, x: pe[0] + dx * reach, y: pe[1] + dy * reach });
      }
    }
    return out;
  };

  // ---------- Finding what is under a finger or the mouse ----------
  NR.hitStation = function (s, x, y, extra) {
    let best = null;
    let bestD = view.r + extra;
    s.stations.forEach((st) => {
      const p = pos[st.id];
      const d = Math.hypot(p[0] - x, p[1] - y);
      if (d < bestD) {
        bestD = d;
        best = st.id;
      }
    });
    return best ? { id: best, d: bestD } : null;
  };
  NR.hitHandle = function (s, x, y, extra) {
    let best = null;
    let bestD = 10 + extra;
    NR.lineHandles(s).forEach((h) => {
      const d = Math.hypot(h.x - x, h.y - y);
      if (d < bestD) {
        bestD = d;
        best = Object.assign({ d }, h);
      }
    });
    return best;
  };

  // ---------- Drawing ----------
  function halo(ctx, text, x, y, fill, haloColor) {
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    ctx.strokeStyle = haloColor;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = fill;
    ctx.fillText(text, x, y);
  }
  const inView = (p) => p[0] > 20 && p[0] < view.w - 20 && p[1] > 20 && p[1] < view.h - 20;

  function drawGraticule(ctx) {
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    // Parallels curve in this projection, so each line is drawn a degree at a time
    for (let lat = 30; lat <= 48; lat++)
      for (let lon = -128; lon <= -107; lon++) {
        const p = NR.toScreen(lon, lat);
        if (lon === -128) ctx.moveTo(p[0], p[1]);
        else ctx.lineTo(p[0], p[1]);
      }
    for (let lon = -128; lon <= -107; lon++)
      for (let lat = 30; lat <= 48; lat++) {
        const p = NR.toScreen(lon, lat);
        if (lat === 30) ctx.moveTo(p[0], p[1]);
        else ctx.lineTo(p[0], p[1]);
      }
    ctx.stroke();
    ctx.font = `500 10px ${MONO}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let lat = 33; lat <= 47; lat += 2) {
      const p = NR.toScreen(-125.6, lat);
      if (inView(p)) halo(ctx, `${lat}°N`, p[0], p[1], colors.muted, colors.sea);
    }
  }

  // Adds a flat list of longitude, latitude pairs to the current path.
  const tracePath = (ctx, list, close) => NR.traceList(ctx, list, close);

  // ---------- Real geography: shaded mountains, lakes, rivers, passes and bridges ----------
  // Shaded relief pictures (each state's terrain.js says which part of the map each one covers).
  const reliefImages = {};
  function reliefImage(info) {
    if (!reliefImages[info.src]) {
      const img = new Image();
      img.src = info.src;
      reliefImages[info.src] = img;
    }
    const img = reliefImages[info.src];
    return img.complete && img.naturalWidth ? img : null;
  }
  // Draw a relief picture stretched over its longitude/latitude box, through `project`.
  // The state map's projection curves, so there it is laid down in 8 x 8 pieces that follow it.
  function drawRelief(ctx, info, project, alpha) {
    const img = reliefImage(info);
    if (!img) return;
    const [x0, y0, x1, y1] = info.box;
    const W = img.naturalWidth, H = img.naturalHeight;
    // Pieces about 2° across are close enough to the curve (a small state needs just one)
    const n = project === NR.toScreen ? Math.min(8, Math.max(1, Math.ceil(Math.max(x1 - x0, y1 - y0) / 2))) : 1;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.imageSmoothingEnabled = true;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        const sx = (W * i) / n, sy = (H * j) / n, sw = W / n, sh = H / n;
        const lonA = x0 + ((x1 - x0) * i) / n, lonB = x0 + ((x1 - x0) * (i + 1)) / n;
        const latA = y1 - ((y1 - y0) * j) / n, latB = y1 - ((y1 - y0) * (j + 1)) / n;
        const tl = project(lonA, latA), tr = project(lonB, latA), bl = project(lonA, latB);
        // Each piece reaches half a screen pixel into the next, which hides the seams
        // (a wider overlap would show as a lighter or darker strip).
        const ex = n > 1 ? (0.5 * sw) / (Math.hypot(tr[0] - tl[0], tr[1] - tl[1]) || 1) : 0;
        const ey = n > 1 ? (0.5 * sh) / (Math.hypot(bl[0] - tl[0], bl[1] - tl[1]) || 1) : 0;
        ctx.save();
        ctx.transform((tr[0] - tl[0]) / sw, (tr[1] - tl[1]) / sw, (bl[0] - tl[0]) / sh, (bl[1] - tl[1]) / sh, tl[0], tl[1]);
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw + ex, sh + ey);
        ctx.restore();
      }
    ctx.restore();
  }
  NR.drawRelief = drawRelief;
  function drawWaterways(ctx) {
    const G = NR.TERRAIN;
    // Rivers
    ctx.beginPath();
    G.rivers.forEach((r) => tracePath(ctx, r.line, false));
    ctx.strokeStyle = colors.river;
    ctx.lineWidth = Math.min(2.4, 1 + (cam.zoom - 1) * 0.25);
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();
    // Lakes
    ctx.beginPath();
    G.lakes.forEach((l) => tracePath(ctx, l.ring, true));
    ctx.fillStyle = colors.sea;
    ctx.fill();
    ctx.strokeStyle = colors.coast;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  // Passes (a small peak) and real bridges (two bars), with their names once zoomed in.
  function drawCrossings(ctx) {
    if (view.zoomScale < 110) return;
    const G = NR.TERRAIN;
    const named = view.zoomScale >= 260;
    ctx.font = `600 9px ${MONO}`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    const onScreen = (x, y) => x > -40 && x < view.w + 40 && y > -20 && y < view.h + 20;
    for (const p of G.passes) {
      const [x, y] = NR.toScreen(p.lon, p.lat);
      if (!onScreen(x, y)) continue;
      ctx.beginPath();
      ctx.moveTo(x - 5, y + 3);
      ctx.lineTo(x, y - 3);
      ctx.lineTo(x + 5, y + 3);
      ctx.strokeStyle = colors.panel;
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.strokeStyle = colors.muted;
      ctx.lineWidth = 1.6;
      ctx.stroke();
      if (named) halo(ctx, p.name, x + 8, y, colors.muted, colors.land);
    }
    for (const b of G.bridges) {
      const [x, y] = NR.toScreen(b.lon, b.lat);
      if (!onScreen(x, y)) continue;
      ctx.fillStyle = colors.panel;
      ctx.fillRect(x - 5, y - 4, 10, 8);
      ctx.fillStyle = colors.river;
      ctx.fillRect(x - 4, y - 3, 8, 1.6);
      ctx.fillRect(x - 4, y + 1.4, 8, 1.6);
      if (named) halo(ctx, b.name, x + 8, y, colors.river, colors.land);
    }
  }

  // Is any of this longitude/latitude box on the screen?
  function boxOnScreen(b) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const [lon, lat] of [
      [b[0], b[1]],
      [b[2], b[1]],
      [b[0], b[3]],
      [b[2], b[3]],
      [(b[0] + b[2]) / 2, b[3]],
      [(b[0] + b[2]) / 2, b[1]],
    ]) {
      const p = NR.toScreen(lon, lat);
      x0 = Math.min(x0, p[0]);
      y0 = Math.min(y0, p[1]);
      x1 = Math.max(x1, p[0]);
      y1 = Math.max(y1, p[1]);
    }
    return x1 > 0 && y1 > 0 && x0 < view.w && y0 < view.h;
  }
  // The land layer (land, shading, borders, coast; the Classic look's relief too) changes only
  // when the view moves, counties are bought or states open, so it is kept as a picture.
  const landStore = { canvas: null, key: "", cam: "", seen: "", since: 0, a: null, b: null };
  function drawLand(ctx, s, selected) {
    const open = s ? Object.keys(s.states).filter((code) => s.states[code].open).join("") : "";
    const key = [toon ? "toon" : mini ? `mini-${miniHints}` : "classic", NR.packVersion, s ? `${s.owned.length}:${s.owned[s.owned.length - 1]}` : "-", open].join("|");
    NR.cartoon.keptPicture(landStore, ctx, key, (g) => paintLand(g, s));
    if (!s) return;
    // Counties you can unlock now: a dashed outline. The county you tapped: a solid one.
    // (Only counties next to one you own can be unlocked.)
    const near = new Set();
    s.owned.forEach((id) => NR.countyById[id] && NR.countyById[id].neighbors.forEach((n) => near.add(n)));
    ctx.save();
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    near.forEach((id) => {
      const r = NR.countyById[id];
      if (r && id !== selected && NR.countyStatus(s, id).ok) r.rings.forEach((ring) => tracePath(ctx, ring, true));
    });
    ctx.stroke();
    if (selected && NR.countyById[selected]) {
      ctx.setLineDash([]);
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      NR.countyById[selected].rings.forEach((ring) => tracePath(ctx, ring, true));
      ctx.stroke();
    }
    ctx.restore();
  }
  function paintLand(ctx, s) {
    if (mini) return paintMinimal(ctx, s);
    if (!toon) {
      ctx.beginPath();
      NR.MAP.land.forEach((ring) => tracePath(ctx, ring, true));
      ctx.fillStyle = colors.land;
      ctx.fill("evenodd");
      // Shaded mountains: each state's picture, kept inside the state (states on screen only)
      for (const r of NR.TERRAIN.reliefs) {
        if (!boxOnScreen(r.box)) continue;
        ctx.save();
        ctx.beginPath();
        NR.MAP.stateLand[r.code].forEach((ring) => tracePath(ctx, ring, true));
        ctx.clip("evenodd");
        drawRelief(ctx, r, NR.toScreen, colors.relief);
        ctx.restore();
      }
      // States of the game whose map hasn't loaded yet: their rough outline
      ctx.beginPath();
      NR.gameStates().forEach(({ code }) => !NR.isLoaded(code) && NR.landOf(code).forEach((ring) => tracePath(ctx, ring, true)));
      ctx.fillStyle = colors.land;
      ctx.fill("evenodd");
    }
    if (s) {
      // Counties you don't own yet are shaded: all the land, with the counties you own cut out
      // (much quicker than tracing every county you don't own, once there are thousands).
      ctx.beginPath();
      NR.MAP.land.forEach((ring) => tracePath(ctx, ring, true));
      s.owned.forEach((id) => NR.countyById[id] && NR.countyById[id].rings.forEach((ring) => tracePath(ctx, ring, true)));
      ctx.fillStyle = colors.locked;
      ctx.fill("evenodd");
      // States that aren't open yet are shaded twice as dark (the cartoon look covers them in fog instead).
      if (!toon) {
        ctx.beginPath();
        Object.keys(s.states).forEach((code) => {
          if (!s.states[code].open) NR.landOf(code).forEach((ring) => tracePath(ctx, ring, true));
        });
        ctx.fill("evenodd");
      }
    }
    if (!toon) drawWaterways(ctx);
    // County borders (dotted in the cartoon look)
    ctx.beginPath();
    NR.MAP.borders.forEach((line) => tracePath(ctx, line, false));
    ctx.strokeStyle = colors.county;
    ctx.lineWidth = toon ? 1.4 : 1;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    if (toon) ctx.setLineDash([0.1, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
    // Coastline, then the borders between states (thicker; dashed in the cartoon look)
    ctx.beginPath();
    NR.MAP.coast.forEach((line) => tracePath(ctx, line, false));
    ctx.strokeStyle = colors.coast;
    ctx.lineWidth = toon ? 2.2 : 1.5;
    ctx.stroke();
    ctx.beginPath();
    NR.MAP.stateBorders.forEach((line) => tracePath(ctx, line, false));
    if (toon) {
      ctx.strokeStyle = colors.land;
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.strokeStyle = colors.coast;
      ctx.lineWidth = 2.4;
      ctx.setLineDash([7, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
    } else {
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  }

  // ---------- The Neo minimalist look: flat land and water, fine borders ----------
  function paintMinimal(ctx, s) {
    // Land outside the game (Canada, Mexico) and states not loaded yet: flat, a shade darker
    ctx.beginPath();
    NR.outsideAreas().forEach((ar) => ar.outline.forEach((ring) => tracePath(ctx, ring, true)));
    NR.gameStates().forEach(({ code }) => !NR.isLoaded(code) && NR.landOf(code).forEach((ring) => tracePath(ctx, ring, true)));
    ctx.fillStyle = colors.closed;
    ctx.fill("evenodd");
    ctx.beginPath();
    NR.MAP.land.forEach((ring) => tracePath(ctx, ring, true));
    ctx.fillStyle = colors.land;
    ctx.fill("evenodd");
    if (miniHints) paintHills(ctx);
    if (s) {
      // Counties you don't own yet: a faint tint (all the land, with the counties you own cut out)
      ctx.beginPath();
      NR.MAP.land.forEach((ring) => tracePath(ctx, ring, true));
      s.owned.forEach((id) => NR.countyById[id] && NR.countyById[id].rings.forEach((ring) => tracePath(ctx, ring, true)));
      ctx.fillStyle = colors.locked;
      ctx.fill("evenodd");
      // States that aren't open yet: flat grey
      ctx.beginPath();
      Object.keys(s.states).forEach((code) => !s.states[code].open && NR.landOf(code).forEach((ring) => tracePath(ctx, ring, true)));
      ctx.fillStyle = colors.closed;
      ctx.fill("evenodd");
    }
    drawWaterways(ctx);
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    // County borders: every one as a hairline, or (bare) only around the counties you own
    ctx.beginPath();
    if (miniHints || !s) NR.MAP.borders.forEach((line) => tracePath(ctx, line, false));
    else s.owned.forEach((id) => NR.countyById[id] && NR.countyById[id].rings.forEach((ring) => tracePath(ctx, ring, true)));
    ctx.strokeStyle = colors.county;
    ctx.lineWidth = 1;
    ctx.stroke();
    // A fine coastline and fine state borders
    ctx.beginPath();
    NR.MAP.coast.forEach((line) => tracePath(ctx, line, false));
    ctx.strokeStyle = colors.coast;
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.beginPath();
    NR.MAP.stateBorders.forEach((line) => tracePath(ctx, line, false));
    ctx.lineWidth = 1.6;
    ctx.stroke();
  }
  // Faint mountain areas (the "hints" background): each state's mountains as smooth flat shapes,
  // kept inside the state (states on screen only)
  function paintHills(ctx) {
    for (const g of NR.TERRAIN.grids) {
      if (!boxOnScreen(g.box) || !NR.MAP.stateLand[g.code]) continue;
      ctx.save();
      ctx.beginPath();
      NR.MAP.stateLand[g.code].forEach((ring) => tracePath(ctx, ring, true));
      ctx.clip("evenodd");
      ctx.beginPath();
      NR.cartoon.traceRings(ctx, NR.cartoon.mountainRings(g.code));
      ctx.fillStyle = colors.hill;
      ctx.fill("evenodd");
      ctx.restore();
    }
  }

  // Price and goal tags on counties you can unlock now.
  function drawCountyTags(ctx, s) {
    ctx.font = `700 10px ${MONO}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (const r of NR.MAP.regions) {
      const st = NR.countyStatus(s, r.id);
      if (!st.ok) continue;
      const p = NR.toScreen(r.label[0], r.label[1]);
      const y = p[1] + (view.showCounties ? 14 : 0);
      // Small map: just the price. Room to spare: price and goal progress.
      const text = view.big ? `${NR.money(st.price, st.payer)} · ${st.progress}/${st.goal}` : NR.money(st.price, st.payer);
      const w = ctx.measureText(text).width + 12;
      roundRect(ctx, p[0] - w / 2, y - 8, w, 16, 8);
      ctx.fillStyle = colors.panel;
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = colors.accent;
      ctx.stroke();
      ctx.fillStyle = colors.ink;
      ctx.fillText(text, p[0], y + 0.5);
    }
  }

  // County names, once there is room for them.
  function drawCountyNames(ctx) {
    if (!view.showCounties) return;
    ctx.font = `600 9px ${MONO}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    if ("letterSpacing" in ctx) ctx.letterSpacing = "1px";
    for (const r of NR.MAP.regions) {
      const p = NR.toScreen(r.label[0], r.label[1]);
      if (p[0] < -100 || p[0] > view.w + 100 || p[1] < -50 || p[1] > view.h + 50) continue;
      // Long merged names go on several lines: DEL NORTE- / SISKIYOU- / TRINITY
      const parts = r.name.replace(/, .*$/, "").replace(/ County$/, "").toUpperCase().split("-");
      const lines = parts.length > 1 && r.name.length > 18 ? parts.map((s, i) => (i < parts.length - 1 ? s + "-" : s)) : [parts.join("-")];
      lines.forEach((text, i) => halo(ctx, text, p[0], p[1] + (i - (lines.length - 1) / 2) * 11, colors.countyText, colors.land));
    }
    if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
  }

  // States that aren't open yet: their name, and when they open, over the part you can see.
  // Points on a grid inside each state are worked out once; each frame uses the visible ones.
  const stateGrid = {};
  function gridOf(code) {
    const rings = NR.landOf(code); // the rough outline until the state's map loads
    if (stateGrid[code] && stateGrid[code].rings === rings) return stateGrid[code].pts;
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    rings.forEach((ring) => {
      for (let i = 0; i < ring.length; i += 2) {
        x0 = Math.min(x0, ring[i]);
        x1 = Math.max(x1, ring[i]);
        y0 = Math.min(y0, ring[i + 1]);
        y1 = Math.max(y1, ring[i + 1]);
      }
    });
    const pts = [];
    for (let lon = x0; lon <= x1; lon += 0.3)
      for (let lat = y0; lat <= y1; lat += 0.3) if (rings.reduce((inside, ring) => (inRing(lon, lat, ring) ? !inside : inside), false)) pts.push([lon, lat]);
    stateGrid[code] = { rings, pts };
    return pts;
  }
  function drawClosedStates(ctx, s) {
    const b = view.box;
    const spots = [];
    for (const code of Object.keys(s.states)) {
      if (s.states[code].open) continue;
      let x = 0, y = 0, n = 0, x0 = Infinity, x1 = -Infinity;
      for (const [lon, lat] of gridOf(code)) {
        const p = NR.toScreen(lon, lat);
        if (p[0] < b.left + 50 || p[0] > view.w - b.right - 50 || p[1] < b.top + 20 || p[1] > view.h - b.bottom - 20) continue;
        x += p[0];
        y += p[1];
        x0 = Math.min(x0, p[0]);
        x1 = Math.max(x1, p[0]);
        n++;
      }
      if (n < 4) continue; // hardly any of it on screen
      spots.push({ code, x: x / n, y: y / n, n, wide: x1 - x0 });
    }
    // Bigger states first; a label that would cover one already drawn is left out (zoomed far
    // out, with many states closed), and the "Opens once…" line shows only where it fits
    spots.sort((p, q) => q.n - p.n);
    const taken = [];
    const free = (r) => !taken.some((t) => r[0] < t[2] && r[2] > t[0] && r[1] < t[3] && r[3] > t[1]);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const back = toon ? NR.cartoon.fogColor() : mini ? colors.closed : colors.land; // the names sit on the fog in the cartoon look
    for (const { code, x, y, wide } of spots) {
      const name = NR.STATE_NAMES[code].toUpperCase();
      const more = `Opens once you own all of ${NR.opensAfter(s, code)}`;
      ctx.font = `700 12px ${MONO}`;
      if ("letterSpacing" in ctx) ctx.letterSpacing = "2px";
      const nw = ctx.measureText(name).width;
      if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
      ctx.font = `500 10px ${MONO}`;
      const mw = ctx.measureText(more).width;
      const nameBox = [x - nw / 2 - 4, y - 15, x + nw / 2 + 4, y + 1];
      const bothBox = [Math.min(nameBox[0], x - mw / 2 - 4), y - 15, Math.max(nameBox[2], x + mw / 2 + 4), y + 16];
      const withMore = mw <= Math.max(wide * 1.4, 160) && free(bothBox);
      if (!withMore && !free(nameBox)) continue;
      taken.push(withMore ? bothBox : nameBox);
      ctx.font = `700 12px ${MONO}`;
      if ("letterSpacing" in ctx) ctx.letterSpacing = "2px";
      halo(ctx, name, x, withMore ? y - 7 : y, colors.muted, back);
      if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
      if (!withMore) continue;
      ctx.font = `500 10px ${MONO}`;
      halo(ctx, more, x, y + 9, colors.muted, back);
    }
  }

  // North arrow and a 100-mile scale bar in the corner of the map.
  function drawCompass(ctx) {
    const cx = view.box.left + 20;
    const cy = view.h - view.box.bottom - 20;
    const nx = view.sin;
    const ny = -view.cos;
    ctx.beginPath();
    ctx.arc(cx, cy, 15, 0, Math.PI * 2);
    ctx.fillStyle = colors.land;
    ctx.fill();
    ctx.strokeStyle = colors.coast;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + nx * 11, cy + ny * 11);
    ctx.lineTo(cx - nx * 7 - ny * 5, cy - ny * 7 + nx * 5);
    ctx.lineTo(cx - nx * 3, cy - ny * 3);
    ctx.lineTo(cx - nx * 7 + ny * 5, cy - ny * 7 - nx * 5);
    ctx.closePath();
    ctx.fillStyle = colors.ink;
    ctx.fill();
    ctx.font = `800 10px ${DISPLAY}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    halo(ctx, "N", cx + nx * 23, cy + ny * 23, colors.ink, colors.sea);

    // Scale bar: the longest of these distances that fits in about 130 pixels.
    const miles = [200, 100, 50, 20, 10].find((m) => m * view.pxPerMile <= 130) || 10;
    const len = miles * view.pxPerMile;
    const x0 = cx + 26;
    const y0 = cy + 9;
    ctx.strokeStyle = colors.ink;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x0, y0 - 4);
    ctx.lineTo(x0, y0);
    ctx.lineTo(x0 + len, y0);
    ctx.lineTo(x0 + len, y0 - 4);
    ctx.stroke();
    ctx.font = `500 10px ${MONO}`;
    ctx.textAlign = "left";
    halo(ctx, `${miles} mi`, x0, y0 - 11, colors.muted, colors.sea);
  }

  function drawLines(ctx, s, segs) {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const lw = (busy.far ? Math.max(2, view.lw * 0.65) : view.lw) * (mini ? 1.2 : 1); // thinner when zoomed out; bolder in Neo minimalist
    if (toon) {
      // Cartoon look: a dark outline under all the lines first
      ctx.strokeStyle = colors.outline;
      for (const wide of [false, true]) {
        ctx.lineWidth = (wide ? lw * 2 : lw) + (busy.far ? 3 : 4);
        ctx.beginPath();
        s.lines.forEach((l) => {
          if ((l.group === "intl") !== wide) return;
          for (const [a, b] of NR.lineLegs(l)) {
            const [x1, y1, x2, y2] = segPoints(a, b, offsetFor(segs, a, b, l.id));
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
          }
        });
        ctx.stroke();
      }
    }
    s.lines.forEach((l) => {
      ctx.lineWidth = lineWidthOf(l, lw);
      ctx.strokeStyle = NR.lineColorOf(l);
      ctx.beginPath();
      NR.lineLegs(l).forEach(([a, b], i) => {
        const p = trackPath(a, b, offsetFor(segs, a, b, l.id));
        if (i === 0 || !mini) ctx.moveTo(p[0], p[1]);
        else ctx.lineTo(p[0], p[1]); // Neo minimalist: one continuous line through its stations
        for (let k = 2; k < p.length; k += 2) ctx.lineTo(p[k], p[k + 1]);
      });
      if (mini && l.loop) ctx.closePath(); // a clean join where a loop meets itself
      ctx.stroke();
      if (l.grade === "high") {
        // High-speed track: a dashed white stripe down the middle of the line
        ctx.save();
        ctx.lineWidth = Math.max(1.2, lineWidthOf(l, lw) * 0.32);
        ctx.strokeStyle = colors.station;
        ctx.setLineDash([lw * 1.3, lw * 1.1]);
        ctx.stroke();
        ctx.restore();
      }
    });
  }

  function drawHandles(ctx, s, draft) {
    ctx.lineCap = "round";
    ctx.lineWidth = view.lw;
    NR.lineHandles(s).forEach((h) => {
      if (draft && draft.kind === "extend" && draft.lineId === h.lineId && draft.atHead === h.atHead) return;
      const pe = pos[h.stationId];
      const color = NR.groupColor(h.group, h.color);
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(pe[0] + h.dx * view.r, pe[1] + h.dy * view.r);
      ctx.lineTo(h.x, h.y);
      ctx.stroke();
      // A round tab with a "+" at the end: drag it (or the end station) to extend the line.
      const r = Math.max(7, view.lw * 1.3);
      ctx.beginPath();
      ctx.arc(h.x, h.y, r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      if (toon) {
        ctx.strokeStyle = colors.outline;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.strokeStyle = colors.panel;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(h.x - r * 0.5, h.y);
      ctx.lineTo(h.x + r * 0.5, h.y);
      ctx.moveTo(h.x, h.y - r * 0.5);
      ctx.lineTo(h.x, h.y + r * 0.5);
      ctx.stroke();
      ctx.lineWidth = view.lw;
    });
  }

  function drawDraft(ctx, draft, pointer, P = pos) {
    ctx.strokeStyle = NR.groupColor(draft.group, draft.color); // (muted while its group is full)
    ctx.lineWidth = view.lw;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    draft.chain.forEach((id, i) => {
      const p = P[id];
      if (i) ctx.lineTo(p[0], p[1]);
      else ctx.moveTo(p[0], p[1]);
    });
    ctx.stroke();
    if (!pointer) return;
    const last = P[draft.chain[draft.chain.length - 1]];
    ctx.setLineDash([view.lw * 1.4, view.lw * 1.6]);
    ctx.globalAlpha = 0.75;
    ctx.beginPath();
    ctx.moveTo(last[0], last[1]);
    ctx.lineTo(pointer.x, pointer.y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
    if (draft.cost > 0) {
      ctx.font = `700 11px ${MONO}`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      halo(ctx, NR.money(draft.cost, NR.stateOf(draft.city || draft.chain[draft.chain.length - 1])), pointer.x + 16, pointer.y - 18, colors.ink, colors.land);
      // What the last stretch crosses: a pass, a tunnel, a bridge...
      if (draft.note) {
        ctx.font = `600 10px ${MONO}`;
        halo(ctx, draft.note, pointer.x + 16, pointer.y - 4, colors.muted, colors.land);
      }
    }
  }

  // ---- Busy maps ----
  // Where stations sit close together on the screen (zoomed out on a big network), each one is
  // drawn simpler: a fullness meter instead of rows of riders and cargo, and no small markers.
  // When most stations on screen are that close, the view counts as zoomed out: towns get
  // smaller, lines and trains thinner, and only main stations are named. Zoom in and the full
  // detail comes back. Worked out once per frame.
  const TIGHT = 40; // pixels from a station to its nearest neighbor
  let busy = { tight: new Set(), far: false };
  function measureBusy(s) {
    const grid = new Map();
    const cellOf = (x, y) => Math.floor(x / TIGHT) * 100003 + Math.floor(y / TIGHT);
    for (const st of s.stations) {
      const p = pos[st.id];
      if (!p) continue;
      const k = cellOf(p[0], p[1]);
      if (!grid.has(k)) grid.set(k, []);
      grid.get(k).push(st.id);
    }
    const tight = new Set();
    let visible = 0, tightVisible = 0;
    for (const st of s.stations) {
      const p = pos[st.id];
      if (!p) continue;
      const [x, y] = p;
      const ci = Math.floor(x / TIGHT), cj = Math.floor(y / TIGHT);
      let near = false;
      for (let di = -1; di <= 1 && !near; di++)
        for (let dj = -1; dj <= 1 && !near; dj++)
          for (const id of grid.get((ci + di) * 100003 + (cj + dj)) || []) {
            if (id === st.id) continue;
            const q = pos[id];
            if (Math.hypot(q[0] - x, q[1] - y) < TIGHT) {
              near = true;
              break;
            }
          }
      if (near) tight.add(st.id);
      if (x > -20 && y > -20 && x < view.w + 20 && y < view.h + 20) {
        visible++;
        if (near) tightVisible++;
      }
    }
    busy = { tight, far: visible > 12 && tightVisible > visible * 0.4 };
  }
  // A station's fullness at a glance (busy maps): a short bar to its right, green, then yellow,
  // then red once it is over its room and the overflow clock is running.
  function drawMeter(ctx, st, x, y, r) {
    const n = st.waiting.length;
    if (!n) return;
    const room = NR.stationRoom(st);
    const f = Math.min(1, n / room);
    const w = Math.max(10, r * 1.7), h = 3.5;
    const bx = x + r + 3, by = y - h / 2;
    roundRect(ctx, bx, by, w, h, h / 2);
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = colors.ink;
    ctx.fill();
    ctx.globalAlpha = 1;
    roundRect(ctx, bx, by, Math.max(h, w * f), h, h / 2);
    ctx.fillStyle = n > room ? colors.danger : f > 0.6 ? colors.accent : colors.cargo.produce;
    ctx.fill();
  }

  function drawWaiting(ctx, s, st, x, y, r) {
    const n = st.waiting.length;
    if (!n) return;
    const over = n > NR.stationRoom(st);
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    if (s.style === "type") {
      const pr = Math.max(2.6, r * 0.42);
      const gap = pr * 2.6;
      const show = Math.min(n, 12);
      // Passengers wait to the right of the station, or to the left near the screen edge.
      const width = 4 * gap + 16;
      const left = x + r + 8 + width > view.w - 6 ? x - r - 8 - width : x + r + 8;
      for (let i = 0; i < show; i++) {
        const px = left + pr + (i % 4) * gap;
        const py = y - r * 0.55 + Math.floor(i / 4) * gap;
        const p = st.waiting[i];
        NR.shapePath(ctx, p.tourist ? "star" : NR.PLACE_TYPES[p.to].shape, px, py, pr);
        ctx.fillStyle = over ? colors.danger : colors.ink;
        ctx.fill();
      }
      if (n > show) {
        ctx.font = `700 10px ${MONO}`;
        halo(ctx, `+${n - show}`, left + 4 * gap, y - r * 0.55 + 2 * gap, colors.danger, colors.land);
      }
    } else {
      const tw = 22;
      const th = 12;
      const show = Math.min(n, 9);
      const width = 3 * (tw + 3) + 18;
      const left = x + r + 6 + width > view.w - 6 ? x - r - 6 - width : x + r + 6;
      ctx.font = `700 9px ${MONO}`;
      ctx.textAlign = "center";
      for (let i = 0; i < show; i++) {
        const tx = left + (i % 3) * (tw + 3);
        const ty = y - r + Math.floor(i / 3) * (th + 3);
        roundRect(ctx, tx, ty, tw, th, 3);
        ctx.fillStyle = over ? colors.danger : colors.ink;
        ctx.fill();
        ctx.fillStyle = colors.station;
        ctx.fillText(st.waiting[i].tourist ? "★" : st.waiting[i].to, tx + tw / 2, ty + th / 2 + 0.5);
      }
      if (n > show) {
        ctx.textAlign = "left";
        ctx.font = `700 10px ${MONO}`;
        halo(ctx, `+${n - show}`, left + 3 * (tw + 3), y - r + 2 * (th + 3) + th / 2, colors.danger, colors.land);
      }
    }
  }

  // One load of cargo: a square crate of produce, a long container, or a truck with its cab.
  function cargoIcon(ctx, kind, x, y, k) {
    ctx.fillStyle = colors.cargo[kind];
    if (kind === "produce") ctx.fillRect(x - k, y - k, 2 * k, 2 * k);
    else if (kind === "containers") ctx.fillRect(x - k * 1.6, y - k * 0.9, k * 3.2, k * 1.8);
    else {
      ctx.fillRect(x - k * 1.6, y - k * 0.9, k * 2.2, k * 1.8); // trailer
      ctx.fillRect(x + k * 0.8, y - k * 0.4, k * 0.9, k * 1.3); // cab
    }
  }

  // The cargo yard: loads waiting to the left of the station.
  function drawYard(ctx, st, x, y, r) {
    const n = st.cargo.length;
    if (!n) return;
    const k = Math.max(2, r * 0.32);
    const gapX = k * 4;
    const gapY = k * 2.8;
    const show = Math.min(n, 6);
    for (let i = 0; i < show; i++) {
      cargoIcon(ctx, st.cargo[i].kind, x - r - 8 - k * 1.6 - (i % 3) * gapX, y - r * 0.4 + Math.floor(i / 3) * gapY, k);
    }
    if (n > show) {
      ctx.font = `700 9px ${MONO}`;
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      halo(ctx, `+${n - show}`, x - r - 8 - 3 * gapX, y - r * 0.4 + 2 * gapY, colors.muted, colors.land);
    }
  }

  // A small anchor next to stations that have a seaport.
  function drawAnchor(ctx, x, y, k) {
    ctx.save();
    ctx.strokeStyle = colors.ink;
    ctx.lineWidth = 1.4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(x, y - k * 1.1, k * 0.35, 0, Math.PI * 2); // ring
    ctx.moveTo(x, y - k * 0.75);
    ctx.lineTo(x, y + k); // shank
    ctx.moveTo(x - k * 0.6, y - k * 0.3);
    ctx.lineTo(x + k * 0.6, y - k * 0.3); // stock
    ctx.moveTo(x - k, y + k * 0.25);
    ctx.quadraticCurveTo(x - k * 0.8, y + k, x, y + k); // left fluke
    ctx.quadraticCurveTo(x + k * 0.8, y + k, x + k, y + k * 0.25); // right fluke
    ctx.stroke();
    ctx.restore();
  }

  // "M" badge: this station has a city map with trams and metro. Filled once opened,
  // red when a stop in that city is getting crowded.
  function drawMetroBadge(ctx, s, key, x, y) {
    const c = s.cities[key];
    const crowded = c && c.stations.some((st) => st.crowd >= 0.5);
    const managed = c && NR.cityFrozen(s, key);
    roundRect(ctx, x - 7, y - 7, 14, 14, 3);
    ctx.fillStyle = crowded ? colors.danger : managed ? colors.ink : c ? colors.accent : colors.panel;
    ctx.fill();
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = c ? colors.panel : colors.ink;
    ctx.stroke();
    ctx.font = `800 9px ${DISPLAY}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = managed ? colors.panel : c ? colors.accentInk : colors.ink;
    ctx.fillText("M", x, y + 0.5);
  }

  // A small plane seen from above, pointing up: stations with an airport.
  function drawPlane(ctx, x, y, k) {
    ctx.save();
    ctx.fillStyle = colors.ink;
    ctx.beginPath();
    ctx.moveTo(x, y - k * 1.2); // nose
    ctx.lineTo(x + k * 0.22, y - k * 0.3);
    ctx.lineTo(x + k * 1.1, y + k * 0.15); // right wing
    ctx.lineTo(x + k * 1.1, y + k * 0.4);
    ctx.lineTo(x + k * 0.22, y + k * 0.2);
    ctx.lineTo(x + k * 0.18, y + k * 0.8);
    ctx.lineTo(x + k * 0.5, y + k * 1.05); // tail
    ctx.lineTo(x - k * 0.5, y + k * 1.05);
    ctx.lineTo(x - k * 0.18, y + k * 0.8);
    ctx.lineTo(x - k * 0.22, y + k * 0.2);
    ctx.lineTo(x - k * 1.1, y + k * 0.4); // left wing
    ctx.lineTo(x - k * 1.1, y + k * 0.15);
    ctx.lineTo(x - k * 0.22, y - k * 0.3);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // Track damaged by an earthquake or wildfire: a red dashed line with a cross in the middle.
  function drawDamage(ctx, s) {
    for (const key of Object.keys(s.damage)) {
      const [a, b] = key.split("|");
      const pa = pos[a];
      const pb = pos[b];
      if (!pa || !pb) continue;
      ctx.save();
      ctx.strokeStyle = colors.danger;
      ctx.lineWidth = Math.max(2, view.lw * 0.7);
      ctx.setLineDash([view.lw, view.lw * 1.2]);
      ctx.beginPath();
      ctx.moveTo(pa[0], pa[1]);
      ctx.lineTo(pb[0], pb[1]);
      ctx.stroke();
      const mx = (pa[0] + pb[0]) / 2;
      const my = (pa[1] + pb[1]) / 2;
      const k = 6;
      ctx.setLineDash([]);
      ctx.lineCap = "round";
      ctx.strokeStyle = colors.station;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(mx - k, my - k);
      ctx.lineTo(mx + k, my + k);
      ctx.moveTo(mx + k, my - k);
      ctx.lineTo(mx - k, my + k);
      ctx.stroke();
      ctx.strokeStyle = colors.danger;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }
  }

  // A wildfire: the county glows.
  function drawFire(ctx, s, now) {
    if (!s.fire) return;
    const r = NR.countyById[s.fire.county];
    ctx.save();
    ctx.globalAlpha = 0.18 + 0.1 * Math.sin(now / 250);
    ctx.fillStyle = colors.danger;
    ctx.beginPath();
    r.rings.forEach((ring) => tracePath(ctx, ring, true));
    ctx.fill("evenodd");
    ctx.restore();
  }

  // Station names go below the station, or above when that spot is taken, so they don't
  // overlap. Bigger places get their spot first. In "a specific city" mode every code is shown.
  function drawStationLabels(ctx, labels, mustShow) {
    labels.sort((a, b) => b.rank - a.rank);
    const placed = [];
    const taken = (x0, x1, y0, y1) => placed.some((p) => x0 < p.x1 && x1 > p.x0 && y0 < p.y1 && y1 > p.y0);
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (const l of labels) {
      ctx.font = l.font;
      const w = ctx.measureText(l.text).width + 4;
      const h = 13;
      const spots = [l.y + l.r + 6, l.y - l.r - (l.marked ? 20 : 6) - h];
      let y = spots.find((ty) => !taken(l.x - w / 2, l.x + w / 2, ty, ty + h));
      if (y === undefined) {
        if (!mustShow) continue;
        y = spots[0];
      }
      placed.push({ x0: l.x - w / 2, x1: l.x + w / 2, y0: y, y1: y + h });
      halo(ctx, l.text, l.x, y, l.color, colors.land);
    }
  }

  function drawStations(ctx, s) {
    const labels = [];
    for (const st of s.stations) {
      const c = NR.cityById[st.id];
      const [x, y] = pos[st.id];
      const grow = clamp((s.time - st.born) / 0.45, 0, 1);
      const small = busy.far && !c.main ? 0.62 : 1; // towns are smaller when zoomed out
      const level = st.level || 0; // Interchange (1) and Grand terminal (2) are a little bigger
      const r = view.r * (c.size >= 4 ? 1.15 : 1) * (1 + 0.12 * level) * small * (grow < 1 ? backOut(grow) : 1);
      if (r <= 0.5) continue;
      const tight = busy.tight.has(st.id);

      // The overflow warning: a red ring that fills up, shown once the clock is half way
      if (st.crowd >= 0.5) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = colors.danger;
        ctx.globalAlpha = 0.22;
        ctx.beginPath();
        ctx.arc(x, y, r + 7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(x, y, r + 7, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * st.crowd);
        ctx.stroke();
      }

      if (s.rush && s.rush.at === st.id) {
        // Rush hour: a turning dashed ring
        ctx.save();
        ctx.lineWidth = 2;
        ctx.strokeStyle = colors.accent;
        ctx.setLineDash([5, 4]);
        ctx.lineDashOffset = -s.time * 12;
        ctx.beginPath();
        ctx.arc(x, y, r + 13, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      if (toon) {
        // Cartoon look: a solid shadow just below the station
        NR.shapePath(ctx, NR.PLACE_TYPES[c.type].shape, x, y + Math.max(2.5, r * 0.35), r + 1);
        ctx.fillStyle = colors.outline;
        ctx.fill();
      }
      NR.shapePath(ctx, NR.PLACE_TYPES[c.type].shape, x, y, r);
      ctx.fillStyle = colors.station;
      ctx.fill();
      ctx.lineWidth = Math.max(2, r * 0.3);
      ctx.lineJoin = toon ? "round" : "miter";
      ctx.strokeStyle = colors.ink;
      ctx.stroke();
      // Upgraded stations: one ring for an Interchange, two for a Grand terminal
      for (let k = 1; k <= level; k++) {
        NR.shapePath(ctx, NR.PLACE_TYPES[c.type].shape, x, y, r + k * Math.max(3.5, r * 0.38));
        ctx.lineWidth = Math.max(1.4, r * 0.14);
        ctx.stroke();
      }

      // Zoomed out, only main stations are named
      if (!(busy.far && !c.main))
        labels.push({
          text: s.style === "city" ? (view.big ? `${c.id} · ${c.name}` : c.id) : view.big ? c.name : c.id,
          font: `${s.style === "city" ? 700 : 600} ${view.big ? 11 : 10}px ${DISPLAY}`,
          color: s.style === "city" ? colors.ink : colors.muted,
          x,
          y,
          r,
          rank: c.size + (c.main ? 0.5 : 0),
          marked: !!(c.port || c.airport || c.scenic),
        });

      if (tight) {
        drawMeter(ctx, st, x, y, r); // close to other stations: just how full it is
      } else {
        drawWaiting(ctx, s, st, x, y, r);
        drawYard(ctx, st, x, y, r);
      }
      // Small markers above the station: anchor (port), plane (airport), star (scenic place)
      const k = Math.max(4, r * 0.55);
      if (tight) {
        if (NR.METROS && NR.METROS[st.id] && NR.cityAvailable(s, st.id)) drawMetroBadge(ctx, s, st.id, x - r - 9, y - r - 6);
        continue;
      }
      let mx = x + r + 4;
      if (c.port) {
        drawAnchor(ctx, mx, y - r - 4, k);
        mx += k * 2.6;
      }
      if (c.airport) {
        drawPlane(ctx, mx, y - r - 4, k);
        mx += k * 2.6;
      }
      if (c.scenic) {
        NR.shapePath(ctx, "star", mx, y - r - 4, k * 0.9);
        ctx.fillStyle = colors.accent;
        ctx.fill();
      }
      if (NR.METROS && NR.METROS[st.id] && NR.cityAvailable(s, st.id)) drawMetroBadge(ctx, s, st.id, x - r - 9, y - r - 6);
    }
    // (In "a specific city" every code is shown, except when zoomed out: then none overlap)
    drawStationLabels(ctx, labels, s.style === "city" && !busy.far);
  }

  // Arrows at the edge of the screen pointing to stations you can't see that need you:
  // new ones, ones not on any line yet, and crowded ones (red). Tap an arrow to go there.
  NR.offscreenMarks = [];
  function drawOffscreen(ctx, s) {
    NR.offscreenMarks = [];
    const b = view.box;
    const x0 = b.left + 18, x1 = view.w - b.right - 18, y0 = b.top + 18, y1 = view.h - b.bottom - 18;
    if (x1 <= x0 || y1 <= y0) return;
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    // At most 8 arrows, the most urgent first: crowded stations (the fullest first), then new
    // ones, then ones not on a line yet, each group nearest first. A big network would
    // otherwise ring the screen with them.
    const onLine = new Set(s.lines.flatMap((l) => l.stops));
    const wanted = [];
    for (const st of s.stations) {
      const [x, y] = pos[st.id];
      if (x >= x0 - 6 && x <= x1 + 6 && y >= y0 - 6 && y <= y1 + 6) continue; // on screen
      const fresh = st.born > 0 && s.time - st.born < 20;
      const lonely = !onLine.has(st.id);
      if (!(st.crowd > 0 || fresh || lonely)) continue;
      const urgency = st.crowd > 0 ? 2 + st.crowd : fresh ? 1 : 0;
      wanted.push({ st, urgency, far: Math.hypot(x - cx, y - cy) });
    }
    wanted.sort((a, b) => b.urgency - a.urgency || a.far - b.far);
    for (const { st } of wanted.slice(0, 8)) {
      const [x, y] = pos[st.id];
      // Where the line from the middle of the screen to the station leaves the screen
      const dx = x - cx, dy = y - cy;
      const t = Math.min(dx ? (dx > 0 ? x1 - cx : x0 - cx) / dx : Infinity, dy ? (dy > 0 ? y1 - cy : y0 - cy) / dy : Infinity);
      let ax = cx + dx * t, ay = cy + dy * t;
      const len = Math.hypot(dx, dy) || 1;
      const ux = dx / len, uy = dy / len;
      // Arrows that would overlap are moved apart along the edge.
      for (let k = 0; k < 6 && NR.offscreenMarks.some((m) => Math.hypot(m.x - ax, m.y - ay) < 30); k++) {
        ax = clamp(ax - uy * 30, x0, x1);
        ay = clamp(ay + ux * 30, y0, y1);
      }
      const color = st.crowd > 0 ? colors.danger : colors.accent;
      ctx.beginPath();
      ctx.moveTo(ax + ux * 9, ay + uy * 9);
      ctx.lineTo(ax - ux * 6 - uy * 8, ay - uy * 6 + ux * 8);
      ctx.lineTo(ax - ux * 6 + uy * 8, ay - uy * 6 - ux * 8);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = colors.panel;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.font = `700 10px ${MONO}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      halo(ctx, st.id, ax - ux * 22, ay - uy * 18, color, colors.land);
      NR.offscreenMarks.push({ id: st.id, x: ax, y: ay });
    }
  }

  // Before the first line: a moving dashed arrow from Los Angeles to its nearest neighbor.
  function drawFirstTrackHint(ctx, s, now) {
    const from = s.stations[0] && s.stations[0].id;
    const others = s.stations.filter((st) => st.id !== from);
    if (!from || !others.length) return;
    const to = others.reduce((a, b) => (NR.crowMiles(from, a.id) <= NR.crowMiles(from, b.id) ? a : b)).id;
    const [x1, y1] = pos[from], [x2, y2] = pos[to];
    const len = Math.hypot(x2 - x1, y2 - y1);
    if (len < 30) return;
    const ux = (x2 - x1) / len, uy = (y2 - y1) / len;
    const a = [x1 + ux * (view.r + 6), y1 + uy * (view.r + 6)], b = [x2 - ux * (view.r + 10), y2 - uy * (view.r + 10)];
    ctx.save();
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.setLineDash([8, 7]);
    ctx.lineDashOffset = -((now || 0) / 40);
    ctx.globalAlpha = 0.6 + 0.4 * Math.sin((now || 0) / 300);
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(b[0] - ux * 10 - uy * 7, b[1] - uy * 10 + ux * 7);
    ctx.lineTo(b[0], b[1]);
    ctx.lineTo(b[0] - ux * 10 + uy * 7, b[1] - uy * 10 - ux * 7);
    ctx.stroke();
    ctx.restore();
    ctx.font = `700 11px ${MONO}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    halo(ctx, "Drag", (a[0] + b[0]) / 2 - uy * 14, (a[1] + b[1]) / 2 + ux * 14 - 4, colors.accent, colors.land);
  }

  // Each train type has its own outline: Regular is one car, Regional two cars,
  // Commuter three boxy cars, High-speed and Bullet have a pointed nose.
  function trainPath(ctx, type, L, H, nose) {
    const x0 = -L / 2;
    const x1 = L / 2;
    const y0 = -H / 2;
    const y1 = H / 2;
    if (nose > 0) {
      const k = H * 0.3;
      ctx.beginPath();
      ctx.moveTo(x0 + k, y0);
      ctx.lineTo(x1 - nose, y0);
      ctx.quadraticCurveTo(x1, y0, x1, y1 * 0.25);
      ctx.quadraticCurveTo(x1, y1, x1 - nose * 0.6, y1);
      ctx.lineTo(x0 + k, y1);
      ctx.arcTo(x0, y1, x0, y0, k);
      ctx.arcTo(x0, y0, x0 + k, y0, k);
      ctx.closePath();
    } else roundRect(ctx, x0, y0, L, H, type === "commuter" || NR.TRAIN_TYPES[type].carries ? H * 0.12 : H * 0.35);
  }

  function drawTrains(ctx, s, segs) {
    const k = busy.far ? 0.7 : 1; // smaller when zoomed out
    const H = view.r * 1.15 * k;
    for (const tr of s.trains) {
      const l = NR.lineById(s, tr.lineId);
      if (!l) continue;
      const a = l.stops[tr.i];
      const b = l.stops[tr.moving ? NR.stepIndex(l, tr.i, tr.dir) : NR.nextStop(l, tr).n];
      if (!a || !b) continue;
      const seats = NR.seatsOf(s, tr);
      const nose = tr.type === "bullet" ? H * 1.6 : tr.type === "highspeed" ? H : tr.type === "airport" ? H * 0.6 : 0;
      const body = view.r * (1.9 + 0.12 * seats) * k;
      const L = body + nose;
      const dx = (body - H * 0.6) / Math.ceil(seats / 2);
      const dot = Math.max(1.2, Math.min(dx, H / 2) * 0.28);
      const e = tr.moving ? ease(Math.min(1, tr.t)) : 0;
      const [tx, ty, angle] = along(trackPath(a, b, offsetFor(segs, a, b, l.id)), e);
      ctx.save();
      ctx.translate(tx, ty);
      ctx.rotate(angle);
      trainPath(ctx, tr.type, L, H, nose);
      ctx.fillStyle = tr.type === "work" ? colors.work : NR.lineColorOf(l);
      ctx.fill();
      ctx.save();
      ctx.clip();
      if (tr.type === "night") {
        ctx.fillStyle = colors.ink; // sleeper: a dark roof
        ctx.globalAlpha = 0.45;
        ctx.fillRect(-L / 2, -H / 2, L, H * 0.42);
      } else if (tr.type === "scenic") {
        ctx.fillStyle = colors.station; // scenic: a glass roof
        ctx.globalAlpha = 0.6;
        ctx.fillRect(-L / 2, -H / 2, L, H * 0.4);
      } else if (tr.type === "work") {
        ctx.strokeStyle = colors.ink; // work train: warning stripes
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = -L / 2; x < L / 2 + H; x += H * 0.9) {
          ctx.moveTo(x, H / 2);
          ctx.lineTo(x + H * 0.6, -H / 2);
        }
        ctx.stroke();
      }
      ctx.restore();
      ctx.lineWidth = toon ? 2 : 1.5;
      ctx.strokeStyle = toon ? colors.outline : tr.type === "work" ? colors.ink : colors.station;
      ctx.stroke();
      const isCargo = (NR.TRAIN_TYPES[tr.type].carries || []).length > 0;
      const cars = isCargo ? 4 : tr.type === "commuter" ? 3 : tr.type === "regional" || tr.type === "night" ? 2 : 1;
      if (cars > 1) {
        ctx.beginPath();
        for (let c = 1; c < cars; c++) {
          const x = -L / 2 + (body * c) / cars;
          ctx.moveTo(x, -H / 2);
          ctx.lineTo(x, H / 2);
        }
        ctx.stroke();
      }
      ctx.fillStyle = colors.station;
      tr.pax.forEach((p, i) => {
        const px = -L / 2 + H * 0.3 + dx * (Math.floor(i / 2) + 0.5);
        const py = (i % 2 ? 1 : -1) * H * 0.22;
        if (p.kind) {
          // Cargo: a small square in the cargo's color, with a light edge so it shows on any line color
          ctx.fillStyle = colors.station;
          ctx.fillRect(px - dot * 1.5, py - dot * 1.5, dot * 3, dot * 3);
          ctx.fillStyle = colors.cargo[p.kind];
          ctx.fillRect(px - dot, py - dot, dot * 2, dot * 2);
          return;
        }
        ctx.fillStyle = colors.station;
        ctx.beginPath();
        ctx.arc(px, py, dot, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }
  }

  function drawFx(ctx, fx, now) {
    for (let i = fx.length - 1; i >= 0; i--) {
      const f = fx[i];
      if (f.city) continue; // drawn on the city map
      const life = f.kind === "city" ? 1600 : 600;
      const t = (now - f.t0) / life;
      const p = pos[f.at];
      if (t >= 1 || !p) {
        fx.splice(i, 1);
        continue;
      }
      ctx.globalAlpha = (1 - t) * (f.kind === "city" ? 0.9 : 0.5);
      ctx.strokeStyle = f.kind === "city" ? colors.accent : colors.ink;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(p[0], p[1], view.r + 4 + t * (f.kind === "city" ? 28 : 12), 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  // Before a game starts: every city, faintly, as a preview.
  function drawPreview(ctx) {
    ctx.globalAlpha = 0.45;
    NR.CITIES.forEach((c) => {
      NR.shapePath(ctx, NR.PLACE_TYPES[c.type].shape, pos[c.id][0], pos[c.id][1], view.r * 0.8);
      ctx.fillStyle = colors.station;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = colors.ink;
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
  }

  // ---------- City maps: trams, metro and cable cars ----------
  const cityPos = (NR.cityPos = {}); // screen position of each stop in the open city
  const cv = { cos: 1, s: 1, ox: 0, oy: 0 }; // the city map's own scale (north up)
  const cityPt = (lon, lat) => [cv.ox + lon * cv.cos * cv.s, cv.oy - lat * cv.s];

  // Fit a city's stops into the map area, leaving room around them for labels and riders.
  function layoutCity(key) {
    const stops = NR.METROS[key].stops;
    cv.cos = Math.cos((stops[0].lat * Math.PI) / 180);
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    stops.forEach((p) => {
      x0 = Math.min(x0, p.lon * cv.cos);
      x1 = Math.max(x1, p.lon * cv.cos);
      y0 = Math.min(y0, -p.lat);
      y1 = Math.max(y1, -p.lat);
    });
    const b = view.box;
    const bw = Math.max(80, view.w - b.left - b.right - 140);
    const bh = Math.max(80, view.h - b.top - b.bottom - 80);
    cv.s = Math.min(bw / (x1 - x0), bh / (y1 - y0));
    cv.ox = b.left + 70 + (bw - (x1 - x0) * cv.s) / 2 - x0 * cv.s;
    cv.oy = b.top + 40 + (bh - (y1 - y0) * cv.s) / 2 - y0 * cv.s;
    for (const k of Object.keys(cityPos)) delete cityPos[k];
    stops.forEach((p) => (cityPos[p.id] = cityPt(p.lon, p.lat)));
  }
  function traceCity(ctx, list, close) {
    for (let i = 0; i < list.length; i += 2) {
      const p = cityPt(list[i], list[i + 1]);
      if (i) ctx.lineTo(p[0], p[1]);
      else ctx.moveTo(p[0], p[1]);
    }
    if (close) ctx.closePath();
  }
  const cityR = () => view.baseR * 1.15;
  const cityLw = () => view.baseLw * 1.1;

  // Lines sharing a stretch sit side by side, as on the state map.
  function citySegs(c) {
    const map = {};
    c.lines.forEach((l) => {
      for (let i = 0; i + 1 < l.stops.length; i++) (map[segKey(l.stops[i], l.stops[i + 1])] ||= []).push(l.id);
    });
    return map;
  }
  function cityLeg(segs, a, b, lineId) {
    const list = segs[segKey(a, b)] || [lineId];
    const off = list.length < 2 ? 0 : (a < b ? 1 : -1) * (list.indexOf(lineId) - (list.length - 1) / 2) * cityLw() * 1.4;
    const pa = cityPos[a];
    const pb = cityPos[b];
    const len = Math.hypot(pb[0] - pa[0], pb[1] - pa[1]) || 1;
    const nx = (-(pb[1] - pa[1]) / len) * off;
    const ny = ((pb[0] - pa[0]) / len) * off;
    return [pa[0] + nx, pa[1] + ny, pb[0] + nx, pb[1] + ny];
  }

  // Tabs at both ends of each city line (drag them to extend the line).
  NR.cityHandles = function (c) {
    const out = [];
    for (const l of c.lines) {
      const n = l.stops.length;
      for (const atHead of [true, false]) {
        const end = atHead ? l.stops[0] : l.stops[n - 1];
        const prev = atHead ? l.stops[1] : l.stops[n - 2];
        const pe = cityPos[end];
        const pp = cityPos[prev];
        const len = Math.hypot(pe[0] - pp[0], pe[1] - pp[1]) || 1;
        const dx = (pe[0] - pp[0]) / len;
        const dy = (pe[1] - pp[1]) / len;
        const reach = cityR() + 18;
        out.push({ lineId: l.id, color: l.color, atHead, stationId: end, dx, dy, x: pe[0] + dx * reach, y: pe[1] + dy * reach });
      }
    }
    return out;
  };
  NR.hitCityStop = function (c, x, y, extra) {
    let best = null;
    let bestD = cityR() + extra;
    c.stations.forEach((st) => {
      const p = cityPos[st.id];
      const d = p ? Math.hypot(p[0] - x, p[1] - y) : Infinity;
      if (d < bestD) {
        bestD = d;
        best = st.id;
      }
    });
    return best ? { id: best, d: bestD } : null;
  };
  NR.hitCityHandle = function (c, x, y, extra) {
    let best = null;
    let bestD = 10 + extra;
    NR.cityHandles(c).forEach((h) => {
      const d = Math.hypot(h.x - x, h.y - y);
      if (d < bestD) {
        bestD = d;
        best = Object.assign({ d }, h);
      }
    });
    return best;
  };

  function drawCity(ctx, s, key, ui) {
    layoutCity(key);
    const c = s.cities[key];
    const r = cityR();
    const lw = cityLw();
    // Land and coast (the same Census map, zoomed in), county borders, and the night
    ctx.beginPath();
    NR.MAP.land.forEach((ring) => traceCity(ctx, ring, true));
    ctx.fillStyle = colors.land;
    ctx.fill("evenodd");
    ctx.beginPath();
    NR.MAP.borders.forEach((line) => traceCity(ctx, line, false));
    ctx.strokeStyle = colors.county;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    NR.MAP.coast.forEach((line) => traceCity(ctx, line, false));
    ctx.strokeStyle = colors.coast;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // The city itself in detail: hills (shaded relief) and water (bays, harbors, rivers, lakes).
    // Outside the detailed area the map is dimmed.
    const geo = NR.TERRAIN && NR.TERRAIN.cities[key];
    if (geo) {
      const [x0, y0, x1, y1] = geo.box;
      const tl = cityPt(x0, y1), br = cityPt(x1, y0);
      ctx.save();
      ctx.beginPath();
      ctx.rect(tl[0], tl[1], br[0] - tl[0], br[1] - tl[1]);
      ctx.clip();
      if (toon) NR.cartoon.drawCity(ctx, key, cityPt);
      else {
        ctx.fillStyle = colors.land;
        ctx.fillRect(tl[0], tl[1], br[0] - tl[0], br[1] - tl[1]);
        if (!mini) NR.drawRelief(ctx, geo.relief, cityPt, colors.relief);
        ctx.beginPath();
        geo.water.forEach((ring) => traceCity(ctx, ring, true));
        ctx.fillStyle = colors.sea;
        ctx.fill("evenodd");
        ctx.strokeStyle = colors.coast;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      ctx.restore();
      ctx.beginPath();
      ctx.rect(0, 0, view.w, view.h);
      ctx.rect(tl[0], tl[1], br[0] - tl[0], br[1] - tl[1]);
      ctx.fillStyle = colors.locked;
      ctx.fill("evenodd");
    }
    const dark = NR.nightAmount(s);
    if (dark > 0) {
      ctx.globalAlpha = dark;
      ctx.fillStyle = colors.night;
      ctx.fillRect(0, 0, view.w, view.h);
      ctx.globalAlpha = 1;
    }

    // Lines: metro thick with a dark edge (tunnels), tram thinner, cable car with ties
    const segs = citySegs(c);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const l of c.lines) {
      const width = l.mode === "metro" ? lw * 1.35 : lw * 0.85;
      ctx.beginPath();
      for (let i = 0; i + 1 < l.stops.length; i++) {
        const [x1, y1, x2, y2] = cityLeg(segs, l.stops[i], l.stops[i + 1], l.id);
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      if (l.mode === "metro") {
        ctx.lineWidth = width + 3;
        ctx.strokeStyle = colors.ink;
        ctx.stroke();
      } else if (l.mode === "cable") {
        ctx.save();
        ctx.setLineDash([2, 5]);
        ctx.lineCap = "butt";
        ctx.lineWidth = width + 6;
        ctx.strokeStyle = colors.ink;
        ctx.stroke();
        ctx.restore();
      }
      ctx.lineWidth = width;
      ctx.strokeStyle = NR.lineColor(l.color);
      ctx.stroke();
    }
    // Line-end tabs
    ctx.lineWidth = lw * 0.85;
    NR.cityHandles(c).forEach((h) => {
      if (ui.draft && ui.draft.kind === "extend" && ui.draft.lineId === h.lineId && ui.draft.atHead === h.atHead) return;
      const pe = cityPos[h.stationId];
      ctx.strokeStyle = NR.lineColor(h.color);
      ctx.beginPath();
      ctx.moveTo(pe[0] + h.dx * r, pe[1] + h.dy * r);
      ctx.lineTo(h.x, h.y);
      ctx.moveTo(h.x - h.dy * 7, h.y + h.dx * 7);
      ctx.lineTo(h.x + h.dy * 7, h.y - h.dx * 7);
      ctx.stroke();
    });
    if (ui.draft) drawDraft(ctx, ui.draft, ui.pointer, cityPos);

    // Stops, with riders waiting beside them
    for (const st of c.stations) {
      const stop = NR.cityStop(key, st.id);
      const [x, y] = cityPos[st.id];
      if (st.crowd >= 0.5) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = colors.danger;
        ctx.globalAlpha = 0.22;
        ctx.beginPath();
        ctx.arc(x, y, r + 7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(x, y, r + 7, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * st.crowd);
        ctx.stroke();
      }
      if (stop.hub) {
        // The main station: where riders change to and from trains on the state map
        roundRect(ctx, x - r * 1.15, y - r * 1.15, r * 2.3, r * 2.3, r * 0.35);
        ctx.fillStyle = colors.ink;
        ctx.fill();
        roundRect(ctx, x - r * 0.5, y - r * 0.5, r, r, r * 0.2);
        ctx.fillStyle = colors.station;
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = colors.station;
        ctx.fill();
        ctx.lineWidth = Math.max(2, r * 0.3);
        ctx.strokeStyle = colors.ink;
        ctx.stroke();
      }
      if (stop.cable) {
        // a little cable car: this stop is on the cable car network
        roundRect(ctx, x + r + 3, y - r - 8, 10, 6, 2);
        ctx.fillStyle = colors.cargo.containers;
        ctx.fill();
      }
      ctx.font = `${stop.hub ? 700 : 600} 11px ${DISPLAY}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      halo(ctx, stop.name, x, y + r + 6, stop.hub ? colors.ink : colors.muted, colors.land);
      // Riders as tags with where they are going; orange ones are off to catch a train
      const n = st.waiting.length;
      if (n) {
        const tw = 24;
        const th = 12;
        const show = Math.min(n, 9);
        ctx.font = `700 9px ${MONO}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        for (let i = 0; i < show; i++) {
          const p = st.waiting[i];
          const tx = x + r + 6 + (i % 3) * (tw + 3);
          const ty = y - r + Math.floor(i / 3) * (th + 3);
          roundRect(ctx, tx, ty, tw, th, 3);
          ctx.fillStyle = n > NR.TUNING.cityRoom ? colors.danger : p.out ? colors.accent : colors.ink;
          ctx.fill();
          ctx.fillStyle = colors.station;
          ctx.fillText(p.to, tx + tw / 2, ty + th / 2 + 0.5);
        }
        if (n > show) {
          ctx.textAlign = "left";
          ctx.font = `700 10px ${MONO}`;
          halo(ctx, `+${n - show}`, x + r + 6 + 3 * (tw + 3), y - r + 2 * (th + 3) + th / 2, colors.danger, colors.land);
        }
      }
    }

    // Vehicles
    for (const tr of c.trains) {
      const l = NR.cityLineById(c, tr.lineId);
      if (!l) continue;
      let n = tr.i + tr.dir;
      if (n < 0 || n >= l.stops.length) n = tr.i - tr.dir;
      const a = l.stops[tr.i];
      const b = l.stops[n];
      if (!a || !b) continue;
      const [x1, y1, x2, y2] = cityLeg(segs, a, b, l.id);
      const e = tr.moving ? ease(Math.min(1, tr.t)) : 0;
      const L = r * (l.mode === "metro" ? 3.2 : l.mode === "cable" ? 1.7 : 2.3);
      const H = r * 1.05;
      ctx.save();
      ctx.translate(x1 + (x2 - x1) * e, y1 + (y2 - y1) * e);
      ctx.rotate(Math.atan2(y2 - y1, x2 - x1));
      roundRect(ctx, -L / 2, -H / 2, L, H, l.mode === "tram" ? H * 0.5 : H * 0.2);
      ctx.fillStyle = NR.lineColor(l.color);
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = l.mode === "metro" ? colors.ink : colors.station;
      ctx.stroke();
      ctx.fillStyle = colors.station;
      const per = Math.max(1, Math.ceil(tr.pax.length / 2));
      tr.pax.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(-L / 2 + H * 0.35 + ((L - H * 0.7) / per) * (Math.floor(i / 2) + 0.5), (i % 2 ? 1 : -1) * H * 0.2, Math.max(1.1, H * 0.11), 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    // Delivery rings for this city
    for (let i = ui.fx.length - 1; i >= 0; i--) {
      const f = ui.fx[i];
      if (f.city !== key) continue;
      const t = (ui.now - f.t0) / 600;
      const p = cityPos[f.at];
      if (t >= 1 || !p) {
        ui.fx.splice(i, 1);
        continue;
      }
      ctx.globalAlpha = (1 - t) * 0.5;
      ctx.strokeStyle = colors.ink;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(p[0], p[1], r + 4 + t * 12, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // Scale bar (north is up on city maps)
    const pxPerMile = cv.s / 69;
    const mi = [20, 10, 5, 2, 1, 0.5].find((m) => m * pxPerMile <= 130) || 0.5;
    const x0 = view.box.left + 8;
    const y0 = view.h - view.box.bottom - 12;
    ctx.strokeStyle = colors.ink;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x0, y0 - 4);
    ctx.lineTo(x0, y0);
    ctx.lineTo(x0 + mi * pxPerMile, y0);
    ctx.lineTo(x0 + mi * pxPerMile, y0 - 4);
    ctx.stroke();
    ctx.font = `500 10px ${MONO}`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    halo(ctx, `${mi} mi · north is up`, x0, y0 - 11, colors.muted, colors.sea);
  }

  NR.draw = function (ctx, s, ui) {
    ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
    ctx.fillStyle = colors.sea;
    ctx.fillRect(0, 0, view.w, view.h);
    if (s && ui.city && s.cities[ui.city]) {
      drawCity(ctx, s, ui.city, ui);
      return;
    }
    // Fit the map to the open states (it zooms out when new states open).
    const open = s && s.states ? Object.keys(s.states).filter((code) => s.states[code].open) : [NR.HOME_STATE];
    if (NR.fitStates(open) && view.box) {
      NR.layout(view.w, view.h, view.dpr, view.box);
      NR.resetCamera();
    }
    updatePositions();
    if (s) measureBusy(s);
    if (toon) NR.cartoon.drawState(ctx);
    else if (!mini) drawGraticule(ctx);
    drawLand(ctx, s, ui.county);
    if (!s) {
      drawPreview(ctx);
      return;
    }
    drawFire(ctx, s, ui.now);
    drawCrossings(ctx);
    drawCountyNames(ctx);
    if (toon) NR.cartoon.drawFog(ctx, s, ui.now || performance.now());
    drawClosedStates(ctx, s);
    drawCountyTags(ctx, s);
    drawCompass(ctx);
    // Night: the map darkens, while lines and stations stay bright like city lights.
    const dark = NR.nightAmount(s);
    if (dark > 0) {
      ctx.globalAlpha = dark;
      ctx.fillStyle = colors.night;
      ctx.fillRect(0, 0, view.w, view.h);
      ctx.globalAlpha = 1;
    }
    const segs = segmentOffsets(s);
    drawLines(ctx, s, segs);
    drawDamage(ctx, s);
    drawHandles(ctx, s, ui.draft);
    if (ui.draft) drawDraft(ctx, ui.draft, ui.pointer);
    drawStations(ctx, s);
    if (!s.lines.length && !ui.draft) drawFirstTrackHint(ctx, s, ui.now);
    drawOffscreen(ctx, s);
    drawTrains(ctx, s, segs);
    drawFx(ctx, ui.fx, ui.now);
  };
})();
