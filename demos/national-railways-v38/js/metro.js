// National Railways: trams, metro and cable cars inside cities.
// Each metro city has its own map of neighborhoods. Riders travel between neighborhoods,
// and to and from the city's main station, where they meet the trains on the state map.
(function () {
  "use strict";
  const NR = window.NR;
  const T = NR.TUNING;
  Object.assign(T, {
    cityRoom: 12, // riders a neighborhood stop holds before it starts to overflow
    cityOverflowSeconds: 25, // seconds a stop can stay overfull before you lose
    cityLines: 5, // lines per city
    cityDetour: 1.1, // city track is a little longer than a straight line
    feedShare: 0.5, // share of train passengers arriving at the main station who ride the metro home
    outboundShare: 0.3, // share of neighborhood riders heading to the main station to catch a train
    headSettleWeeks: 3, // a new head of transportation settles in for 3 weeks (you still run the city)
    headTermWeeks: 100, // then runs the city safely for 100 weeks
    headFeeBudget: 0.8, // fee: 80% of the city budget...
    headFeeInfra: 0.5, // ...but at least 50% of the city's track and vehicle value
    managementShare: 0.9, // while managed, management keeps 90% of the profit (10% comes to you)
    cityGrant: 200, // $k a city map gets from its state's budget when it opens
    cityTax: 0.1, // share of every city fare the city pays to its state
  });

  // City vehicles. price = $k per vehicle, track = $k per mile, upkeep = $k per week,
  // speed = miles per real second, fare multiplies what riders pay.
  NR.CITY_MODES = {
    tram: { name: "Tram", vehicle: "tram", price: 40, track: 3, upkeep: 3, seats: 8, speed: 3, fare: 1, about: "Street-running light rail. Cheap to build." },
    metro: { name: "Metro", vehicle: "metro train", price: 120, track: 10, upkeep: 8, seats: 16, speed: 6, fare: 1.3, about: "Underground and fast, with lots of room. Tunnels are expensive." },
    cable: {
      name: "Cable car",
      vehicle: "cable car",
      price: 60,
      track: 8,
      upkeep: 4,
      seats: 6,
      speed: 1.2,
      fare: 2,
      maxMiles: 3.5,
      about: "San Francisco's famous cable cars: slow, but riders pay double. Only between cable car stops.",
    },
  };

  // The metro cities (their neighborhoods and stops) come from the state packs: NR.METROS,
  // keyed by the main station on the state map (packs/<code>/pack.js, see PACKS.md).

  const rt = NR.runtime;
  rt.cityRoutes = {}; // worked out from the city's lines, not saved
  const emit = (type, data) => rt.events.push(Object.assign({ type }, data));
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (list) => list[Math.floor(Math.random() * list.length)];
  function miles(a, b) {
    const rad = Math.PI / 180;
    const h = Math.sin(((b.lat - a.lat) * rad) / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(((b.lon - a.lon) * rad) / 2) ** 2;
    return 2 * 3959 * Math.asin(Math.sqrt(h));
  }
  const stopOf = (key, id) => NR.METROS[key].stops.find((x) => x.id === id);
  // Cable cars run only in cities with cable car stops (San Francisco).
  NR.cityHasMode = (key, mode) => mode !== "cable" || NR.METROS[key].stops.some((x) => x.cable);
  const cableCities = () => Object.keys(NR.METROS).filter((k) => NR.cityHasMode(k, "cable")).map((k) => NR.METROS[k].name);
  const hubOf = (key) => NR.METROS[key].stops.find((x) => x.hub);
  NR.cityStop = stopOf;

  // ---------- Opening a city ----------
  // A city's map is available once you own its county.
  NR.cityAvailable = (s, key) => !!NR.METROS[key] && s.owned.includes(NR.cityById[key].county);
  NR.cityActive = (s, key) => !!(s.cities && s.cities[key]);

  // Opening a city map moves $200k from its state's budget into the new city budget
  // (less if the state, with national money's help, can't spare it).
  NR.openCity = function (s, key) {
    if (!NR.cityAvailable(s, key)) return null;
    if (!s.cities[key]) {
      const code = NR.stateOf(key);
      const grant = Math.max(0, Math.min(T.cityGrant, NR.spendable(s, code)));
      NR.pay(s, { [code]: grant });
      s.cities[key] = {
        opened: s.time,
        delivered: 0,
        budget: grant, // the city's own money ($k): fares come in, track, vehicles and running costs go out
        liveTime: 0, // seconds the city has run without a head in charge (it gets busier over this time)
        weekIncome: 0,
        weekTax: 0,
        lastWeek: null,
        head: null, // head of transportation: { from, until } (global game time)
        lines: [],
        trains: [],
        stations: NR.METROS[key].stops.map((x) => ({ id: x.id, waiting: [], crowd: 0, spawnIn: rand(6, 14) })),
      };
      rt.cityRoutes[key] = null;
      emit("cityOpen", { key, grant });
    }
    return s.cities[key];
  };

  // ---------- Lines and vehicles ----------
  NR.cityLineById = (c, id) => c.lines.find((l) => l.id === id);
  NR.cityTrainsOn = (c, line) => c.trains.filter((t) => t.lineId === line.id);
  NR.cityFreeColor = (c) => {
    for (let k = 0; k < T.cityLines; k++) if (!c.lines.some((l) => l.color === k)) return k;
    return -1;
  };
  const legMiles = (key, a, b) => miles(stopOf(key, a), stopOf(key, b)) * T.cityDetour;
  NR.cityLineMiles = (key, l) => {
    let m = 0;
    for (let i = 0; i + 1 < l.stops.length; i++) m += legMiles(key, l.stops[i], l.stops[i + 1]);
    return m;
  };

  // ---------- Real geography in the city: hills and water (its state's terrain.js) ----------
  const B64 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  const ground = {}; // per city: { data, elev(lon, lat) in meters, water(lon, lat) }
  function groundOf(key) {
    if (ground[key]) return ground[key];
    const d = NR.TERRAIN && NR.TERRAIN.cities[key];
    if (!d) return null;
    const shapes = d.water.map((ring) => {
      const b = [Infinity, Infinity, -Infinity, -Infinity];
      for (let i = 0; i < ring.length; i += 2) {
        b[0] = Math.min(b[0], ring[i]);
        b[1] = Math.min(b[1], ring[i + 1]);
        b[2] = Math.max(b[2], ring[i]);
        b[3] = Math.max(b[3], ring[i + 1]);
      }
      return { ring, b };
    });
    const inRing = (x, y, ring) => {
      let inside = false;
      for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
        const xi = ring[i], yi = ring[i + 1], xj = ring[j], yj = ring[j + 1];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
      }
      return inside;
    };
    const cell = (lon, lat) => {
      const c = Math.min(d.cols - 1, Math.max(0, Math.floor((lon - d.box[0]) / d.step)));
      const r = Math.min(d.rows - 1, Math.max(0, Math.floor((d.box[3] - lat) / d.step)));
      return d.elev[r * d.cols + c];
    };
    return (ground[key] = {
      data: d,
      elev: (lon, lat) => {
        const ch = cell(lon, lat);
        return ch === "~" ? 0 : B64.indexOf(ch) * 12;
      },
      // Inside an odd number of outlines = water (islands are outlines inside outlines).
      water: (lon, lat) => shapes.reduce((n, o) => (lon >= o.b[0] && lon <= o.b[2] && lat >= o.b[1] && lat <= o.b[3] && inRing(lon, lat, o.ring) ? !n : n), false),
    });
  }
  // Does a stretch over water run along a shore (land within 0.4 mi on one side, all along)?
  function alongShore(gr, a, b) {
    const k = Math.cos((a.lat * Math.PI) / 180);
    const dx = (b.lon - a.lon) * k, dy = b.lat - a.lat;
    const len = Math.hypot(dx, dy) || 1;
    const landAt = (f, side) => {
      const lon = a.lon + (b.lon - a.lon) * f, lat = a.lat + (b.lat - a.lat) * f;
      for (let m = 0.05; m <= 0.4; m += 0.05) {
        const d = m / 69; // miles to degrees of latitude
        if (!gr.water(lon + (side * -dy * d) / len / k, lat + (side * dx * d) / len)) return true;
      }
      return false;
    };
    return [1, -1].some((side) => [0.25, 0.5, 0.75].every((f) => landAt(f, side)));
  }
  // What lies between two city stops: { miles, grade, water: [{miles, bridge}], shore, blocked }.
  // grade = the average climb (up or down) per mile of track, as a fraction (0.05 = 5%).
  const legCache = new Map();
  NR.cityLegGeo = function (key, a, b) {
    const ck = key + ":" + (a < b ? a + "|" + b : b + "|" + a) + ":" + (rt.geoLevel || "gentle");
    if (legCache.has(ck)) return legCache.get(ck);
    const A = stopOf(key, a < b ? a : b), B = stopOf(key, a < b ? b : a);
    const total = miles(A, B);
    const g = { miles: total, grade: 0, water: [], blocked: null };
    const gr = groundOf(key);
    if (!gr) return g;
    const lv = NR.geoSetting ? NR.geoSetting() : null;
    const n = Math.max(2, Math.ceil(total / 0.03)); // every 50 meters or so
    let climb = 0, last = null, run = 0, runStart = 0;
    const pt = (i) => ({ lon: A.lon + ((B.lon - A.lon) * i) / n, lat: A.lat + ((B.lat - A.lat) * i) / n });
    const endRun = (i) => {
      if (!run) return;
      const mi = (run * total) / n;
      run = 0;
      if (mi < 0.04) return; // a creek or a canal: no matter
      const p0 = pt(runStart), p1 = pt(i);
      // Water with land close by on the same side all along: the track follows the shore.
      if (mi > 0.3 && alongShore(gr, p0, p1)) {
        g.shore = (g.shore || 0) + mi;
        return;
      }
      // A real bridge within a mile of the crossing
      const real = (NR.TERRAIN.bridges || []).find((x) => Math.min(miles(x, p0), miles(x, p1), miles(x, { lon: (p0.lon + p1.lon) / 2, lat: (p0.lat + p1.lat) / 2 })) < 1);
      g.water.push({ miles: mi, bridge: real ? real.name : null });
      if (!real && lv && mi > lv.cityMaxWater && !g.blocked) g.blocked = `${mi.toFixed(1)} miles of open water is too wide to cross here`;
    };
    for (let i = 0; i <= n; i++) {
      const p = pt(i);
      if (gr.water(p.lon, p.lat)) {
        if (!run) runStart = i;
        run++;
        continue;
      }
      endRun(i);
      const e = gr.elev(p.lon, p.lat);
      if (last !== null) climb += Math.abs(e - last);
      last = e;
    }
    endRun(n);
    // Half the ups and downs are climbs whichever way you go.
    g.grade = total > 0 ? climb / 2 / (total * 1609) : 0;
    legCache.set(ck, g);
    return g;
  };
  // Price of city track between two stops for a kind of line, in $k: hills cost more
  // (deeper metro tunnels, steeper tram streets) and water needs a bridge or a tube.
  NR.cityTrackPrice = (key, mode, a, b) => {
    const m = NR.CITY_MODES[mode];
    const base = legMiles(key, a, b) * m.track;
    const lv = NR.geoSetting ? NR.geoSetting() : null;
    if (!lv) return base;
    const g = NR.cityLegGeo(key, a, b);
    const hill = mode === "metro" ? lv.metroHillCost : mode === "tram" ? lv.tramHillCost : 0;
    let price = base * (1 + hill * g.grade);
    if (g.shore) price += g.shore * T.cityDetour * m.track * 0.5; // along the shore: a little longer
    g.water.forEach((w) => (price += w.miles * T.cityDetour * m.track * ((w.bridge ? lv.cityRealBridgeCost : lv.cityWaterCost) - 1)));
    return price;
  };
  NR.cityLinePrice = (key, l) => {
    let p = 0;
    for (let i = 0; i + 1 < l.stops.length; i++) p += NR.cityTrackPrice(key, l.mode, l.stops[i], l.stops[i + 1]);
    return p;
  };
  // How far a vehicle effectively travels between two stops: trams slow down on hills.
  // Metro runs underground and cable cars are pulled up the hills, so neither slows.
  NR.cityTravelMiles = (key, mode, a, b) => {
    const g = NR.cityLegGeo(key, a, b);
    const lv = NR.geoSetting ? NR.geoSetting() : null;
    const slow = mode === "tram" && lv ? 1 + lv.tramClimb * g.grade : 1;
    return Math.max(0.2, g.miles * slow);
  };
  // A short description of a leg: ["steep hills", "Coronado Bridge", ...]
  NR.cityLegNotes = (key, mode, a, b) => {
    const g = NR.cityLegGeo(key, a, b);
    const out = [];
    if (g.grade >= 0.04) out.push(mode === "tram" ? "steep hills (slow)" : mode === "metro" ? "deep tunnel under hills" : "steep hills");
    else if (g.grade >= 0.02) out.push(mode === "tram" ? "hills" : mode === "metro" ? "tunnel under hills" : "hills");
    g.water.forEach((w) => out.push(w.bridge ? w.bridge : `${mode === "metro" ? "tube" : "new bridge"} over ${Math.max(0.1, w.miles).toFixed(1)} mi of water`));
    if (g.shore) out.push("along the shore");
    return out;
  };

  // Can this kind of line run through these stops? Returns the reason it can't, or null.
  NR.cityModeProblem = function (key, mode, stops) {
    const m = NR.CITY_MODES[mode];
    if (!NR.cityHasMode(key, mode)) return `${m.name}s only run in ${cableCities().join(", ")}`;
    for (let i = 0; i + 1 < stops.length; i++) {
      const g = NR.cityLegGeo(key, stops[i], stops[i + 1]);
      const between = `${stopOf(key, stops[i]).name} and ${stopOf(key, stops[i + 1]).name}`;
      if (mode === "cable" && g.water.length) return `Cable cars can't cross water (between ${between})`;
      if (g.blocked) return `No ${m.name.toLowerCase()} between ${between}: ${g.blocked}`;
    }
    if (mode === "cable") {
      if (stops.some((id) => !stopOf(key, id).cable)) return "Cable cars only run between cable car stops";
      let mi = 0;
      for (let i = 0; i + 1 < stops.length; i++) mi += legMiles(key, stops[i], stops[i + 1]);
      if (mi > m.maxMiles) return `Cable car lines can be at most ${m.maxMiles} miles long`;
    }
    return null;
  };

  function addVehicle(s, c, line) {
    const fromEnd = NR.cityTrainsOn(c, line).length % 2 === 1; // spread them out
    c.trains.push({ id: s.nextId++, lineId: line.id, i: fromEnd ? line.stops.length - 1 : 0, dir: fromEnd ? -1 : 1, t: 0, moving: false, wait: 0.5, segLen: 1, pax: [] });
  }

  // ---------- Paying for things in a city ----------
  // A city spends its own budget first; if that runs short, its state's budget pays the rest
  // (and national money after that, as for any state spending).
  NR.citySpendable = (s, key) => Math.max(0, s.cities[key].budget) + NR.spendable(s, NR.stateOf(key));
  NR.cityCanPay = (s, key, price) => NR.citySpendable(s, key) >= price - 1e-6;
  function cityPay(s, key, price) {
    const c = s.cities[key];
    const own = Math.min(price, Math.max(0, c.budget));
    c.budget -= own;
    if (price > own) NR.pay(s, { [NR.stateOf(key)]: price - own });
  }

  // A new line comes with its first vehicle. Returns the line, or null if you can't afford it.
  NR.cityCreateLine = function (s, key, stops, color, mode) {
    const c = s.cities[key];
    let price = NR.CITY_MODES[mode].price;
    for (let i = 0; i + 1 < stops.length; i++) price += NR.cityTrackPrice(key, mode, stops[i], stops[i + 1]);
    if (NR.cityFrozen(s, key) || !NR.cityCanPay(s, key, price) || NR.cityModeProblem(key, mode, stops)) return null;
    cityPay(s, key, price);
    const line = { id: s.nextId++, color, mode, stops: stops.slice() };
    c.lines.push(line);
    addVehicle(s, c, line);
    rt.cityRoutes[key] = null;
    return line;
  };

  NR.cityExtendLine = function (s, key, line, atHead, added) {
    const c = s.cities[key];
    const end = atHead ? line.stops[0] : line.stops[line.stops.length - 1];
    const chain = [end, ...added];
    const all = atHead ? [...added.slice().reverse(), ...line.stops] : [...line.stops, ...added];
    let price = 0;
    for (let i = 0; i + 1 < chain.length; i++) price += NR.cityTrackPrice(key, line.mode, chain[i], chain[i + 1]);
    if (NR.cityFrozen(s, key) || !NR.cityCanPay(s, key, price) || NR.cityModeProblem(key, line.mode, all)) return false;
    cityPay(s, key, price);
    if (atHead) {
      line.stops.unshift(...added.slice().reverse());
      NR.cityTrainsOn(c, line).forEach((t) => (t.i += added.length));
    } else line.stops.push(...added);
    rt.cityRoutes[key] = null;
    return true;
  };

  NR.cityAddVehicle = function (s, key, line) {
    const price = NR.CITY_MODES[line.mode].price;
    const c = s.cities[key];
    if (NR.cityFrozen(s, key) || !NR.cityCanPay(s, key, price)) return false;
    cityPay(s, key, price);
    addVehicle(s, c, line);
    return true;
  };

  // Riders on a vehicle taken out of service get off at its stop.
  function dropRiders(s, key, c, train, line) {
    const here = line.stops[Math.min(train.i, line.stops.length - 1)];
    const st = c.stations.find((x) => x.id === here);
    train.pax.forEach((p) => (p.to === here ? deliverRider(s, key, c, p, here, line.mode) : st.waiting.push(p)));
    train.pax = [];
  }

  // Sell a vehicle for half its price.
  NR.cityRemoveVehicle = function (s, key, trainId) {
    const c = s.cities[key];
    const train = c.trains.find((t) => t.id === trainId);
    if (!train || NR.cityFrozen(s, key)) return false;
    const line = NR.cityLineById(c, train.lineId);
    dropRiders(s, key, c, train, line);
    c.trains = c.trains.filter((t) => t !== train);
    c.budget += NR.CITY_MODES[line.mode].price * T.refundShare;
    return true;
  };

  // Delete a line: you get back half of what its track and vehicles cost.
  NR.cityDeleteLine = function (s, key, line) {
    const c = s.cities[key];
    if (NR.cityFrozen(s, key)) return false;
    const m = NR.CITY_MODES[line.mode];
    let value = NR.cityLinePrice(key, line);
    NR.cityTrainsOn(c, line).forEach((t) => {
      dropRiders(s, key, c, t, line);
      value += m.price;
    });
    c.trains = c.trains.filter((t) => t.lineId !== line.id);
    c.lines = c.lines.filter((l) => l !== line);
    c.budget += value * T.refundShare;
    rt.cityRoutes[key] = null;
    return true;
  };

  // ---------- City budget and the head of transportation ----------
  // What the city's track and vehicles cost to build, in $k.
  NR.cityInfraValue = function (key, c) {
    return c.lines.reduce((sum, l) => {
      const m = NR.CITY_MODES[l.mode];
      return sum + NR.cityLinePrice(key, l) + NR.cityTrainsOn(c, l).length * m.price;
    }, 0);
  };
  // The budget of the state a city is in (it covers the city when the city runs short).
  NR.cityState = (s, key) => s.states[NR.stateOf(key)];
  const weeks = (n) => n * T.weekLength;
  // "settling" for the first 3 weeks after hiring, then "managing" for 100 weeks, else null.
  NR.headState = function (s, key) {
    const h = s.cities[key] && s.cities[key].head;
    if (!h) return null;
    return s.time < h.from ? "settling" : "managing";
  };
  // While managed, nothing can overflow and the lines can't change.
  NR.cityFrozen = (s, key) => NR.headState(s, key) === "managing";
  NR.headFee = (s, key) => {
    const c = s.cities[key];
    return Math.round(Math.max(T.headFeeBudget * c.budget, T.headFeeInfra * NR.cityInfraValue(key, c)));
  };
  NR.hireHead = function (s, key) {
    const c = s.cities[key];
    const fee = NR.headFee(s, key);
    if (!c || c.head || !c.lines.length || !NR.cityCanPay(s, key, fee)) return false;
    cityPay(s, key, fee);
    c.head = { hired: s.time, from: s.time + weeks(T.headSettleWeeks), until: s.time + weeks(T.headSettleWeeks + T.headTermWeeks) };
    emit("headHired", { key, fee });
    return true;
  };

  // The city's network is overwhelmed: a head of transportation takes over at once and runs it
  // safely for the usual term, with its lines frozen. The fee is charged even if it leaves the
  // budgets short (the state, then national money, cover it). A head who was still settling in
  // takes over now, with no second fee.
  function takeOver(s, key, at) {
    const c = s.cities[key];
    const fee = c.head ? 0 : NR.headFee(s, key);
    if (fee) cityPay(s, key, fee);
    c.head = { hired: c.head ? c.head.hired : s.time, from: s.time, until: s.time + weeks(T.headTermWeeks), started: true, forced: true };
    for (const st of c.stations) {
      if (st.waiting.length > Math.floor(T.cityRoom / 2)) st.waiting.length = Math.floor(T.cityRoom / 2);
      st.crowd = 0;
      st.warned = false;
    }
    emit("cityTakenOver", { key, fee, at });
  }

  // Once a week: each city pays its running costs from its budget. While managed, management
  // keeps 90% of the profit and 10% goes to the state budget. If a city budget runs dry,
  // the state budget covers the rest (and national money covers the state, see js/game.js).
  NR.cityWeek = function (s) {
    for (const [key, c] of Object.entries(s.cities || {})) {
      const upkeep = c.trains.reduce((n, t) => n + NR.CITY_MODES[NR.cityLineById(c, t.lineId).mode].upkeep, 0);
      const profit = c.weekIncome - upkeep;
      c.budget -= upkeep;
      let toYou = 0;
      if (NR.cityFrozen(s, key) && profit > 0) {
        c.budget -= profit; // the profit leaves the city: 90% to management, 10% to you
        toYou = profit * (1 - T.managementShare);
        NR.cityState(s, key).budget += toYou;
      }
      c.lastWeek = { income: c.weekIncome, tax: c.weekTax || 0, upkeep, profit, toYou };
      c.weekTax = 0;
      c.weekIncome = 0;
      if (c.budget < 0) {
        NR.cityState(s, key).budget += c.budget;
        emit("cityShortfall", { key, amount: -c.budget });
        c.budget = 0;
      }
    }
  };

  NR.cityUpkeep = (s) =>
    Object.values(s.cities || {}).reduce(
      (sum, c) => sum + c.trains.reduce((n, t) => n + NR.CITY_MODES[NR.cityLineById(c, t.lineId).mode].upkeep, 0),
      0
    );
  NR.cityRidersTotal = (s) => Object.values(s.cities || {}).reduce((n, c) => n + c.delivered, 0);

  // ---------- Riders ----------
  // How many stops each stop is from every other stop, on this city's lines.
  function cityRoutes(key, c) {
    if (rt.cityRoutes[key]) return rt.cityRoutes[key];
    const next = {};
    c.stations.forEach((st) => (next[st.id] = []));
    c.lines.forEach((l) => {
      for (let i = 0; i + 1 < l.stops.length; i++) {
        next[l.stops[i]].push(l.stops[i + 1]);
        next[l.stops[i + 1]].push(l.stops[i]);
      }
    });
    const routes = {};
    c.stations.forEach((goal) => {
      const dist = { [goal.id]: 0 };
      const queue = [goal.id];
      for (let q = 0; q < queue.length; q++) {
        next[queue[q]].forEach((v) => {
          if (dist[v] === undefined) {
            dist[v] = dist[queue[q]] + 1;
            queue.push(v);
          }
        });
      }
      routes[goal.id] = dist;
    });
    return (rt.cityRoutes[key] = routes);
  }
  const away = (routes, to, at) => (routes[to] && routes[to][at] !== undefined ? routes[to][at] : Infinity);

  function deliverRider(s, key, c, p, here, mode) {
    const fare = (1.2 + miles(stopOf(key, p.from), stopOf(key, here)) * 0.08) * NR.CITY_MODES[mode].fare;
    // City fares go into the city budget, less a 10% tax to its state budget.
    const tax = fare * T.cityTax;
    c.budget += fare - tax;
    c.weekIncome += fare - tax; // a head of transportation splits what's left after tax
    c.weekTax = (c.weekTax || 0) + tax;
    NR.cityState(s, key).budget += tax;
    c.delivered++;
    emit("cityDeliver", { key, at: here });
    // A rider who came to the main station to catch a train joins the trains on the state map.
    if (p.out && stopOf(key, here).hub && NR.feedState) NR.feedState(s, key);
  }

  // Passengers arriving at a metro city's main station by train: some ride the metro home.
  NR.onStateDelivery = function (s, p, here) {
    const c = s.cities && s.cities[here];
    if (!c || p.kind || p.tourist || Math.random() > T.feedShare) return;
    const hub = hubOf(here);
    const homes = NR.METROS[here].stops.filter((x) => !x.hub);
    c.stations.find((x) => x.id === hub.id).waiting.push({ id: s.nextId++, to: pick(homes).id, from: hub.id, inbound: true });
  };

  // A vehicle has stopped: let riders off and on. Returns how long it waits.
  function serveStop(s, key, c, train, line) {
    const routes = cityRoutes(key, c);
    const here = line.stops[train.i];
    const st = c.stations.find((x) => x.id === here);
    let n = train.i + train.dir;
    if (n < 0 || n >= line.stops.length) n = train.i - train.dir;
    const next = line.stops[n];
    const closer = (p) => away(routes, p.to, next) < away(routes, p.to, here);
    let moved = 0;
    train.pax = train.pax.filter((p) => {
      if (p.to === here) {
        deliverRider(s, key, c, p, here, line.mode);
        moved++;
        return false;
      }
      if (closer(p)) return true; // stay on
      st.waiting.push(p); // change lines here
      moved++;
      return false;
    });
    const seats = NR.CITY_MODES[line.mode].seats + s.extraSeats;
    st.waiting = st.waiting.filter((p) => {
      if (train.pax.length >= seats || !closer(p)) return true;
      train.pax.push(p);
      moved++;
      return false;
    });
    return 0.3 + moved * 0.05;
  }

  function moveVehicle(s, key, c, train, dt) {
    const line = NR.cityLineById(c, train.lineId);
    if (!line) return;
    if (!train.moving) {
      train.wait -= dt;
      if (train.wait > 0) return;
      let n = train.i + train.dir;
      if (n < 0 || n >= line.stops.length) {
        train.dir = -train.dir;
        n = train.i + train.dir;
      }
      train.moving = true;
      train.t = 0;
      train.segLen = NR.cityTravelMiles(key, line.mode, line.stops[train.i], line.stops[n]); // trams slow on hills
      return;
    }
    train.t += (dt * NR.CITY_MODES[line.mode].speed) / train.segLen;
    if (train.t >= 1) {
      train.i += train.dir;
      train.t = 0;
      train.moving = false;
      train.wait = serveStop(s, key, c, train, line);
    }
  }

  // ---------- One step for every open city ----------
  NR.updateCities = function (s, dt) {
    for (const [key, c] of Object.entries(s.cities || {})) {
      const metro = NR.METROS[key];
      const hub = hubOf(key);
      if (c.head && !c.head.started && s.time >= c.head.from) {
        c.head.started = true;
        emit("headTakesOver", { key });
      }
      if (c.head && s.time >= c.head.until) {
        c.head = null; // the term is over: the city is yours again
        emit("headRetired", { key });
      }
      const managed = NR.cityFrozen(s, key);
      const homes = metro.stops.filter((x) => !x.hub);
      if (!managed) c.liveTime += dt; // the city only gets busier while you run it yourself
      const pressure = 1 + c.liveTime / (NR.geoSetting ? NR.geoSetting().cityGrowth : 400); // Gentle: busier more slowly
      // Riders appear in the neighborhoods: most cross town, some head for the main station.
      for (const st of c.stations) {
        if (st.id === hub.id) continue;
        st.spawnIn -= dt;
        if (st.spawnIn > 0) continue;
        const out = Math.random() < T.outboundShare;
        const to = out ? hub.id : pick(homes.filter((x) => x.id !== st.id)).id;
        st.waiting.push({ id: s.nextId++, to, from: st.id, out });
        st.spawnIn = (14 / (0.6 + metro.size * 0.12) / pressure) * rand(0.7, 1.3) * (NR.isNight(s) ? 1.6 : 1);
      }
      for (const train of c.trains) moveVehicle(s, key, c, train, dt);
      // Crowding: a stop that stays too full for too long overwhelms the city's network, and a
      // head of transportation takes over (the game carries on). While the head runs the city,
      // or while you are not looking at this city's map, stops are kept at most half full
      // instead (extra riders take the bus).
      const away = rt.viewing !== key;
      for (const st of c.stations) {
        if (managed || away) {
          const calm = Math.floor(T.cityRoom / 2);
          if (st.waiting.length > calm) st.waiting.length = calm;
          st.crowd = 0;
          continue;
        }
        if (st.waiting.length > T.cityRoom) st.crowd = Math.min(1, st.crowd + dt / T.cityOverflowSeconds);
        else st.crowd = Math.max(0, st.crowd - dt / (T.cityOverflowSeconds * 1.5));
        if (st.crowd >= 1) {
          if (s.test) {
            // Test mode: nothing can be lost. The riders give up and leave.
            st.waiting.length = 0;
            st.crowd = 0;
            emit("giveUp", { at: key, cityStop: st.id });
            continue;
          }
          takeOver(s, key, st.id);
          break;
        }
        if (st.crowd > 0.4 && !st.warned) {
          st.warned = true;
          emit("cityCrowd", { key, at: st.id });
        }
        if (st.crowd === 0) st.warned = false;
      }
    }
  };
})();
