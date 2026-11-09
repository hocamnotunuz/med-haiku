// National Railways: drawing. Turns the game state into pictures on the canvas.
(function () {
  "use strict";
  const NR = window.NR;
  const DISPLAY = '"Overpass", "Segoe UI", system-ui, sans-serif';
  const MONO = '"Overpass Mono", ui-monospace, Menlo, monospace';
  const COS = Math.cos((37.2 * Math.PI) / 180); // shrink longitude to match miles at California's latitude
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const ease = (t) => t * t * (3 - 2 * t);
  const backOut = (t) => 1 + 2.7 * Math.pow(t - 1, 3) + 1.7 * Math.pow(t - 1, 2);

  const view = (NR.view = { w: 1, h: 1, dpr: 1, scale: 60, cos: 1, sin: 0, ox: 0, oy: 0, r: 9, lw: 5, big: false });
  view.box = { top: 0, bottom: 0, left: 0, right: 0 };
  const pos = (NR.pos = {}); // screen position of every city
  let colors = { lines: [] };

  // Colors come from the CSS tokens in style.css, so light and dark themes both work.
  NR.readTheme = function () {
    const cs = getComputedStyle(document.documentElement);
    const get = (name) => cs.getPropertyValue(name).trim();
    colors = {
      sea: get("--sea"),
      grid: get("--grid"),
      land: get("--land"),
      coast: get("--coast"),
      station: get("--station"),
      ink: get("--ink"),
      muted: get("--muted"),
      accent: get("--accent"),
      danger: get("--danger"),
      lines: [1, 2, 3, 4, 5, 6, 7].map((n) => get("--line-" + n)),
    };
  };
  NR.lineColor = (i) => colors.lines[i] || colors.ink;

  // ---------- Fitting California on the screen ----------
  const base = (lon, lat) => [lon * COS, -lat];
  const OUTLINE = NR.OUTLINE.map(([lon, lat]) => base(lon, lat));
  const MID = OUTLINE.reduce((m, p) => [m[0] + p[0] / OUTLINE.length, m[1] + p[1] / OUTLINE.length], [0, 0]);
  const turn = (x, y, c, s) => {
    const dx = x - MID[0];
    const dy = y - MID[1];
    return [dx * c - dy * s, dx * s + dy * c];
  };

  // The state is long and diagonal, so the map may tilt a little (at most 12°)
  // when that makes it noticeably bigger on screen. The compass shows north.
  NR.layout = function (w, h, dpr, box) {
    Object.assign(view, { w, h, dpr, box });
    const bw = Math.max(60, w - box.left - box.right);
    const bh = Math.max(60, h - box.top - box.bottom);
    let best = null;
    for (let deg = -12; deg <= 12; deg += 2) {
      const a = (deg * Math.PI) / 180;
      const c = Math.cos(a);
      const s = Math.sin(a);
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const [x, y] of OUTLINE) {
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
    view.r = clamp(best.scale * 0.12, 6.5, 11);
    view.lw = clamp(best.scale * 0.075, 3.5, 6);
    view.pxPerMile = best.scale / 69;
    view.big = best.scale >= 60; // room for full city names
  };

  NR.toScreen = function (lon, lat) {
    const [x, y] = base(lon, lat);
    const [rx, ry] = turn(x, y, view.cos, view.sin);
    return [view.ox + rx * view.scale, view.oy + ry * view.scale];
  };
  const updatePositions = () => NR.CITIES.forEach((c) => (pos[c.id] = NR.toScreen(c.lon, c.lat)));

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
  function segmentOffsets(s) {
    const map = {};
    s.lines.forEach((l) => {
      for (let i = 0; i + 1 < l.stops.length; i++) (map[segKey(l.stops[i], l.stops[i + 1])] ||= []).push(l.id);
    });
    return map;
  }
  function offsetFor(segs, a, b, lineId) {
    const list = segs[segKey(a, b)];
    if (!list || list.length < 2) return 0;
    const side = a < b ? 1 : -1; // same side whichever way the train runs
    return side * (list.indexOf(lineId) - (list.length - 1) / 2) * view.lw * 1.25;
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
        out.push({ lineId: l.id, color: l.color, atHead, stationId: end, dx, dy, x: pe[0] + dx * reach, y: pe[1] + dy * reach });
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
    for (let lat = 30; lat <= 44; lat++) {
      const a = NR.toScreen(-128, lat);
      const b = NR.toScreen(-110, lat);
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
    }
    for (let lon = -128; lon <= -110; lon++) {
      const a = NR.toScreen(lon, 30);
      const b = NR.toScreen(lon, 44);
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
    }
    ctx.stroke();
    ctx.font = `500 10px ${MONO}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let lat = 33; lat <= 41; lat += 2) {
      const p = NR.toScreen(-125.6, lat);
      if (inView(p)) halo(ctx, `${lat}°N`, p[0], p[1], colors.muted, colors.sea);
    }
  }

  function drawLand(ctx) {
    ctx.beginPath();
    NR.OUTLINE.forEach(([lon, lat], i) => {
      const p = NR.toScreen(lon, lat);
      if (i) ctx.lineTo(p[0], p[1]);
      else ctx.moveTo(p[0], p[1]);
    });
    ctx.closePath();
    ctx.fillStyle = colors.land;
    ctx.fill();
    ctx.strokeStyle = colors.coast;
    ctx.lineWidth = 1.5;
    ctx.lineJoin = "round";
    ctx.stroke();
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

    const len = 100 * view.pxPerMile;
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
    halo(ctx, "100 mi", x0, y0 - 11, colors.muted, colors.sea);
  }

  function drawLines(ctx, s, segs) {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = view.lw;
    s.lines.forEach((l) => {
      ctx.strokeStyle = NR.lineColor(l.color);
      ctx.beginPath();
      for (let i = 0; i + 1 < l.stops.length; i++) {
        const [x1, y1, x2, y2] = segPoints(l.stops[i], l.stops[i + 1], offsetFor(segs, l.stops[i], l.stops[i + 1], l.id));
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.stroke();
      if (l.grade === "high") {
        // High-speed track: a dashed white stripe down the middle of the line
        ctx.save();
        ctx.lineWidth = Math.max(1.2, view.lw * 0.32);
        ctx.strokeStyle = colors.station;
        ctx.setLineDash([view.lw * 1.3, view.lw * 1.1]);
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
      ctx.strokeStyle = NR.lineColor(h.color);
      ctx.beginPath();
      ctx.moveTo(pe[0] + h.dx * view.r, pe[1] + h.dy * view.r);
      ctx.lineTo(h.x, h.y);
      ctx.moveTo(h.x - h.dy * 7, h.y + h.dx * 7);
      ctx.lineTo(h.x + h.dy * 7, h.y - h.dx * 7);
      ctx.stroke();
    });
  }

  function drawDraft(ctx, draft, pointer) {
    ctx.strokeStyle = NR.lineColor(draft.color);
    ctx.lineWidth = view.lw;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    draft.chain.forEach((id, i) => {
      const p = pos[id];
      if (i) ctx.lineTo(p[0], p[1]);
      else ctx.moveTo(p[0], p[1]);
    });
    ctx.stroke();
    if (!pointer) return;
    const last = pos[draft.chain[draft.chain.length - 1]];
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
      halo(ctx, NR.money(draft.cost), pointer.x + 16, pointer.y - 18, colors.ink, colors.land);
    }
  }

  function drawWaiting(ctx, s, st, x, y, r) {
    const n = st.waiting.length;
    if (!n) return;
    const over = n > NR.TUNING.stationRoom;
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
        NR.shapePath(ctx, NR.PLACE_TYPES[st.waiting[i].to].shape, px, py, pr);
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
        ctx.fillText(st.waiting[i].to, tx + tw / 2, ty + th / 2 + 0.5);
      }
      if (n > show) {
        ctx.textAlign = "left";
        ctx.font = `700 10px ${MONO}`;
        halo(ctx, `+${n - show}`, left + 3 * (tw + 3), y - r + 2 * (th + 3) + th / 2, colors.danger, colors.land);
      }
    }
  }

  function drawStations(ctx, s) {
    for (const st of s.stations) {
      const c = NR.cityById[st.id];
      const [x, y] = pos[st.id];
      const grow = clamp((s.time - st.born) / 0.45, 0, 1);
      const r = view.r * (c.size >= 4 ? 1.15 : 1) * (grow < 1 ? backOut(grow) : 1);
      if (r <= 0.5) continue;

      if (st.crowd > 0) {
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

      NR.shapePath(ctx, NR.PLACE_TYPES[c.type].shape, x, y, r);
      ctx.fillStyle = colors.station;
      ctx.fill();
      ctx.lineWidth = Math.max(2, r * 0.3);
      ctx.lineJoin = "miter";
      ctx.strokeStyle = colors.ink;
      ctx.stroke();

      const label = s.style === "city" ? (view.big ? `${c.id} · ${c.name}` : c.id) : view.big ? c.name : c.id;
      ctx.font = `${s.style === "city" ? 700 : 600} ${view.big ? 11 : 10}px ${DISPLAY}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      halo(ctx, label, x, y + r + 6, s.style === "city" ? colors.ink : colors.muted, colors.land);

      drawWaiting(ctx, s, st, x, y, r);
    }
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
    } else roundRect(ctx, x0, y0, L, H, type === "commuter" ? H * 0.12 : H * 0.35);
  }

  function drawTrains(ctx, s, segs) {
    const H = view.r * 1.15;
    for (const tr of s.trains) {
      const l = NR.lineById(s, tr.lineId);
      if (!l) continue;
      const a = l.stops[tr.i];
      const b = l.stops[tr.moving ? tr.i + tr.dir : NR.nextStop(l, tr).n];
      if (!a || !b) continue;
      const seats = NR.seatsOf(s, tr);
      const nose = tr.type === "bullet" ? H * 1.6 : tr.type === "highspeed" ? H : 0;
      const body = view.r * (1.9 + 0.12 * seats);
      const L = body + nose;
      const dx = (body - H * 0.6) / Math.ceil(seats / 2);
      const dot = Math.max(1.2, Math.min(dx, H / 2) * 0.28);
      const [x1, y1, x2, y2] = segPoints(a, b, offsetFor(segs, a, b, l.id));
      const e = tr.moving ? ease(Math.min(1, tr.t)) : 0;
      ctx.save();
      ctx.translate(x1 + (x2 - x1) * e, y1 + (y2 - y1) * e);
      ctx.rotate(Math.atan2(y2 - y1, x2 - x1));
      trainPath(ctx, tr.type, L, H, nose);
      ctx.fillStyle = NR.lineColor(l.color);
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = colors.station;
      ctx.stroke();
      const cars = tr.type === "commuter" ? 3 : tr.type === "regional" ? 2 : 1;
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
        ctx.beginPath();
        ctx.arc(-L / 2 + H * 0.3 + dx * (Math.floor(i / 2) + 0.5), (i % 2 ? 1 : -1) * H * 0.22, dot, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }
  }

  function drawFx(ctx, fx, now) {
    for (let i = fx.length - 1; i >= 0; i--) {
      const f = fx[i];
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

  NR.draw = function (ctx, s, ui) {
    ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
    ctx.fillStyle = colors.sea;
    ctx.fillRect(0, 0, view.w, view.h);
    updatePositions();
    drawGraticule(ctx);
    drawLand(ctx);
    if (!s) {
      drawPreview(ctx);
      return;
    }
    drawCompass(ctx);
    const segs = segmentOffsets(s);
    drawLines(ctx, s, segs);
    drawHandles(ctx, s, ui.draft);
    if (ui.draft) drawDraft(ctx, ui.draft, ui.pointer);
    drawStations(ctx, s);
    drawTrains(ctx, s, segs);
    drawFx(ctx, ui.fx, ui.now);
  };
})();
