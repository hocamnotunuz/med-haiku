// National Railways: the game rules.
// Stations, lines, trains, passengers, weeks and levels. Nothing is drawn here.
(function () {
  "use strict";
  const NR = window.NR;

  // ---- Tuning: change these numbers to make the game easier or harder ----
  const T = (NR.TUNING = {
    dayLength: 10, // real seconds per in-game day
    timedWeeks: 4, // how many weeks the Timed challenge lasts
    startMoney: 400, // money at the start, in thousands of dollars ($k)
    trackPrice: 1, // $k per mile of standard track
    highSpeedPrice: 1.5, // extra $k per mile for high-speed track
    refundShare: 0.5, // share of the track cost you get back when you delete a line
    grant: 150, // $k from a state grant
    startLines: 3, // line colors available at the start
    maxLines: 7,
    startTrains: 3, // Regular trains in the depot at the start
    trainSpeed: 110, // map miles per real second for a Regular train
    rushEvery: [30, 45], // seconds between rush hours (random in this range)
    rushLength: 10, // seconds a rush hour lasts
    stationRoom: 8, // passengers a station holds before it starts to overflow
    overflowSeconds: 20, // seconds a station can stay overfull before you lose
    trackDetour: 1.15, // track is a little longer than a straight line
    firstCityAfter: 8, // seconds until the first new city appears
    cityEvery: [14, 22], // seconds between new cities (random in this range)
    levelReward: 150, // $k for finishing a level
    yardRoom: 12, // loads of cargo a station's yard holds (more is turned away)
    cargoEvery: [10, 16], // seconds between loads of produce or trucks at a station
    shipEvery: [35, 55], // seconds between ships docking at one of your ports
    shipLoad: 8, // containers a ship unloads
  });
  T.weekLength = T.dayLength * 7;
  NR.DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  NR.SAVE_VERSION = 5; // bump when saved games from older versions no longer fit

  // ---- Train types ----
  // price and upkeep (per week) in $k. speed is compared with a Regular train.
  // fare multiplies what passengers pay. stops: "all", a minimum city size (1-5), or "metro".
  // unlockWeek: the first week it can be used (0 = week 1).
  NR.TRAIN_TYPES = {
    regular: { name: "Regular", price: 60, upkeep: 6, seats: 6, speed: 1, fare: 1, stops: "all", unlockWeek: 0, about: "Stops everywhere. Cheap and reliable." },
    commuter: {
      name: "Commuter",
      price: 80,
      upkeep: 8,
      seats: 12,
      speed: 0.85,
      fare: 1,
      stops: "all",
      unlockWeek: 0,
      quick: true,
      maxLineMiles: 180,
      about: "Lots of seats and quick boarding, for short lines up to 180 mi. Great in rush hour.",
    },
    regional: { name: "Regional", price: 120, upkeep: 12, seats: 10, speed: 1.25, fare: 1.2, stops: 2, unlockWeek: 0, about: "Faster, with more seats. Skips the smallest towns." },
    highspeed: {
      name: "High-speed",
      price: 250,
      upkeep: 25,
      seats: 8,
      speed: 2,
      fare: 1.6,
      stops: 3,
      unlockWeek: 1,
      needsHighSpeed: true,
      about: "Twice as fast. Stops only at bigger cities. Needs high-speed track.",
    },
    bullet: {
      name: "Bullet",
      price: 450,
      upkeep: 45,
      seats: 10,
      speed: 3,
      fare: 2,
      stops: "metro",
      unlockWeek: 3,
      needsHighSpeed: true,
      about: "Three times as fast. Stops only at Metro cities. Needs high-speed track.",
    },
    // Cargo trains carry one kind of cargo each (no passengers). seats = loads they hold.
    freight: {
      name: "Freight",
      price: 100,
      upkeep: 8,
      seats: 10,
      speed: 0.8,
      fare: 1,
      stops: "all",
      unlockWeek: 0,
      carries: ["produce"],
      about: "Carries crates of produce from Farmland towns to Metro cities. No passengers.",
    },
    dock: {
      name: "Dock train",
      price: 120,
      upkeep: 10,
      seats: 16,
      speed: 0.7,
      fare: 1,
      stops: "all",
      unlockWeek: 0,
      carries: ["containers"],
      needsPort: true,
      about: "Moves shipping containers from ports to Desert and Farmland warehouses. Needs a port on its line.",
    },
    truck: {
      name: "Truck bypass",
      price: 140,
      upkeep: 12,
      seats: 6,
      speed: 1.1,
      fare: 1,
      stops: "all",
      unlockWeek: 1,
      carries: ["trucks"],
      about: "Carries trucks on flat cars from Desert and Mountain towns to Metro cities, taking them off the highway.",
    },
  };

  // ---- Cargo ----
  // Each kind is made at some stations, wanted at stations of the `to` types,
  // and moved only by trains that carry it. fee: [base $k, extra $k per mile].
  NR.CARGO = {
    produce: { name: "Produce", unit: "crates", from: "Farmland towns", to: ["metro"], fee: [3, 0.015] },
    containers: { name: "Containers", unit: "containers", from: "ports, when a ship docks", to: ["desert", "farm"], fee: [4, 0.02] },
    trucks: { name: "Trucks", unit: "trucks", from: "Desert and Mountain towns (from week 2)", to: ["metro"], fee: [5, 0.025] },
  };
  // What a train type holds: "seats" for passengers, or its cargo's unit.
  NR.unitOf = (key) => (NR.TRAIN_TYPES[key].carries ? NR.CARGO[NR.TRAIN_TYPES[key].carries[0]].unit : "seats");

  // Money is counted in thousands of dollars: 400 means $400k.
  NR.money = (k) => {
    const v = Math.round(k);
    const a = Math.abs(v);
    const sign = v < 0 ? "−" : "";
    return a >= 1000 ? `${sign}$${(a / 1000).toFixed(2)}M` : `${sign}$${a}k`;
  };

  // Every place on the map: county main stations and towns.
  NR.PLACES = [...NR.CITIES, ...NR.TOWNS];
  NR.cityById = {};
  NR.PLACES.forEach((c) => (NR.cityById[c.id] = c));
  const city = (id) => NR.cityById[id];
  // Counties: their shape and neighbors (from the map file) and their main station.
  NR.countyById = {};
  NR.MAP.regions.forEach((r) => (NR.countyById[r.id] = r));
  NR.mainStation = {};
  NR.CITIES.forEach((c) => (NR.mainStation[c.county] = c));

  // Great-circle distance between two cities, in miles.
  function miles(a, b) {
    const rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad;
    const dLon = (b.lon - a.lon) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
    return 2 * 3959 * Math.asin(Math.sqrt(h));
  }
  NR.trackMiles = (a, b) => Math.round(miles(city(a), city(b)) * T.trackDetour);
  NR.crowMiles = (a, b) => miles(city(a), city(b));
  // Price of laying track between two cities, in $k.
  NR.trackPrice = (a, b, grade) => NR.trackMiles(a, b) * (T.trackPrice + (grade === "high" ? T.highSpeedPrice : 0));

  // Data that is worked out from the game state instead of being saved.
  const rt = (NR.runtime = { routes: {}, dirty: true, events: [] });
  const emit = (type, data) => rt.events.push(Object.assign({ type }, data));

  const rand = (a, b) => a + Math.random() * (b - a);
  function pickWeighted(items, weightOf) {
    const weights = items.map((it) => Math.max(0, weightOf(it)));
    const total = weights.reduce((sum, w) => sum + w, 0);
    if (total <= 0) return null;
    let r = Math.random() * total;
    for (let i = 0; i < items.length; i++) {
      r -= weights[i];
      if (r <= 0) return items[i];
    }
    return items[items.length - 1];
  }
  function shuffle(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }
  const allAreas = () => [...new Set(NR.CITIES.map((c) => c.level))];

  // ---------- Starting a game ----------
  // mode: "endless" | "timed" | "levels"    style: "type" | "city"
  NR.newGame = function (mode, style) {
    const s = {
      mode,
      style,
      time: 0,
      delivered: 0,
      week: 0,
      stations: [],
      lines: [],
      trains: [],
      v: NR.SAVE_VERSION,
      money: T.startMoney,
      weekIncome: 0,
      lastWeek: null,
      depot: Object.fromEntries(Object.keys(NR.TRAIN_TYPES).map((k) => [k, k === "regular" ? T.startTrains : 0])),
      cargoDelivered: Object.fromEntries(Object.keys(NR.CARGO).map((k) => [k, 0])),
      shipIn: rand(15, 25), // the first ship comes early
      linesUnlocked: T.startLines,
      extraSeats: 0,
      speed: T.trainSpeed,
      speedUps: 0,
      rush: null,
      rushIn: rand(T.rushEvery[0], T.rushEvery[1]),
      level: 0,
      levelDone: false,
      areas: mode === "levels" ? NR.LEVELS[0].areas.slice() : allAreas(), // parts of the state that are open
      owned: [], // counties you own
      goalProgress: {}, // passengers counted toward each county's free-unlock goal
      nextCityIn: T.firstCityAfter,
      nextId: 1,
      over: false,
    };
    NR.START_COUNTIES.forEach((id) => ownCounty(s, id, true));
    rt.dirty = true;
    rt.events.length = 0;
    return s;
  };

  function addStation(s, id, atStart) {
    s.stations.push({ id, waiting: [], cargo: [], crowd: 0, spawnIn: rand(2, 5), cargoIn: rand(4, 10), born: atStart ? -10 : s.time });
    rt.dirty = true;
  }

  // Put cargo in a station's yard. Returns how many loads fit.
  function addCargo(s, st, kind, n) {
    let landed = 0;
    while (landed < n && st.cargo.length < T.yardRoom) {
      st.cargo.push({ id: s.nextId++, kind, to: "@" + kind, from: st.id });
      landed++;
    }
    return landed;
  }

  NR.stationById = (s, id) => s.stations.find((st) => st.id === id);
  NR.lineById = (s, id) => s.lines.find((l) => l.id === id);
  NR.trainsOn = (s, line) => s.trains.filter((t) => t.lineId === line.id);
  // Towns that can still appear: inside counties you own, not on the map yet.
  NR.townPool = (s) => NR.TOWNS.filter((t) => s.owned.includes(t.county) && !NR.stationById(s, t.id));

  function addNextCity(s) {
    const pool = NR.townPool(s);
    if (!pool.length) return;
    // Cities close to the existing map are more likely to appear next.
    const pick = pickWeighted(pool, (c) => {
      let near = Infinity;
      s.stations.forEach((st) => (near = Math.min(near, miles(c, city(st.id)))));
      return (0.6 + c.size * 0.2) / Math.pow(Math.max(near, 30) / 100, 2);
    });
    addStation(s, pick.id, false);
    emit("city", { id: pick.id });
  }

  // ---------- Counties: unlocked one by one ----------
  const countyArea = (id) => NR.mainStation[id].level;
  // Price in $k: bigger counties cost more (pop is in thousands of people).
  NR.countyPrice = (id) => Math.round(40 + NR.mainStation[id].pop * 0.05);
  // Free unlock: deliver this many passengers to your stations next to the county.
  NR.countyGoal = (id) => Math.max(15, Math.min(80, Math.round(15 + NR.mainStation[id].pop / 50)));

  // Where a county stands: { owned } or { ok, price, goal, progress } or { ok: false, reason }.
  NR.countyStatus = function (s, id) {
    if (s.owned.includes(id)) return { owned: true };
    if (!s.areas.includes(countyArea(id))) {
      const lv = NR.LEVELS.findIndex((l) => l.areas.includes(countyArea(id)));
      return { ok: false, reason: `Opens in level ${lv + 1}` };
    }
    if (!NR.countyById[id].neighbors.some((n) => s.owned.includes(n))) return { ok: false, reason: "Own a neighboring county first" };
    return { ok: true, price: NR.countyPrice(id), goal: NR.countyGoal(id), progress: s.goalProgress[id] || 0 };
  };

  function ownCounty(s, id, atStart) {
    if (s.owned.includes(id)) return;
    s.owned.push(id);
    delete s.goalProgress[id];
    addStation(s, NR.mainStation[id].id, atStart);
  }

  // Unlock a county: pay its price, or free when its goal is reached.
  NR.unlockCounty = function (s, id, free) {
    const st = NR.countyStatus(s, id);
    if (!st.ok) return false;
    if (!free) {
      if (s.money < st.price) return false;
      s.money -= st.price;
    }
    ownCounty(s, id, false);
    emit("county", { id, free: !!free });
    return true;
  };

  // A passenger delivered here counts toward the goals of locked neighboring counties.
  function countGoals(s, stationId) {
    for (const n of NR.countyById[city(stationId).county].neighbors) {
      if (!NR.countyStatus(s, n).ok) continue;
      s.goalProgress[n] = (s.goalProgress[n] || 0) + 1;
      if (s.goalProgress[n] >= NR.countyGoal(n)) NR.unlockCounty(s, n, true);
    }
  }

  // ---------- Where passengers want to go ----------
  // Does stopping at this station finish the trip of a passenger heading for `to`?
  function arrives(s, stationId, to) {
    return s.style === "type" ? city(stationId).type === to : stationId === to;
  }
  NR.arrives = arrives;

  function pickDestination(s, st) {
    if (s.style === "type") {
      const own = city(st.id).type;
      const types = [...new Set(s.stations.map((x) => city(x.id).type))].filter((t) => t !== own);
      return types.length ? types[Math.floor(Math.random() * types.length)] : null;
    }
    const pick = pickWeighted(
      s.stations.filter((x) => x.id !== st.id),
      (x) => city(x.id).size
    );
    return pick ? pick.id : null;
  }

  // Cargo is delivered at a station of one of its `to` types (never back where it started).
  const cargoArrives = (stationId, kind) => NR.CARGO[kind].to.includes(city(stationId).type);
  // Does stopping here finish this passenger's or this load's trip?
  function itemArrives(s, stationId, p) {
    return p.kind ? stationId !== p.from && cargoArrives(stationId, p.kind) : arrives(s, stationId, p.to);
  }

  // For every destination, count how many stops each station is from it.
  // Passengers and cargo use this to decide which train to take and where to change.
  // Passengers ride lines with passenger trains (or no trains yet); each kind of cargo
  // rides only lines that have a train for it. Cargo destinations are keyed "@produce" etc.
  function rebuildRoutes(s) {
    const kindsOn = {};
    s.trains.forEach((t) => (kindsOn[t.lineId] ||= []).push(...(typeOf(t).carries || ["passengers"])));
    const graph = (useLine) => {
      const next = {};
      s.stations.forEach((st) => (next[st.id] = []));
      s.lines.forEach((l) => {
        if (!useLine(l)) return;
        for (let i = 0; i + 1 < l.stops.length; i++) {
          next[l.stops[i]].push(l.stops[i + 1]);
          next[l.stops[i + 1]].push(l.stops[i]);
        }
      });
      return next;
    };
    const distances = (next, isGoal) => {
      const dist = {};
      const queue = [];
      s.stations.forEach((st) => {
        if (isGoal(st.id)) {
          dist[st.id] = 0;
          queue.push(st.id);
        }
      });
      for (let q = 0; q < queue.length; q++) {
        const u = queue[q];
        next[u].forEach((v) => {
          if (dist[v] === undefined) {
            dist[v] = dist[u] + 1;
            queue.push(v);
          }
        });
      }
      return dist;
    };
    rt.routes = {};
    const people = graph((l) => !kindsOn[l.id] || kindsOn[l.id].includes("passengers"));
    const goals = s.style === "type" ? [...new Set(s.stations.map((st) => city(st.id).type))] : s.stations.map((st) => st.id);
    goals.forEach((goal) => (rt.routes[goal] = distances(people, (id) => arrives(s, id, goal))));
    Object.keys(NR.CARGO).forEach((kind) => {
      const freight = graph((l) => (kindsOn[l.id] || []).includes(kind));
      rt.routes["@" + kind] = distances(freight, (id) => cargoArrives(id, kind));
    });
    rt.dirty = false;
  }
  function stopsAway(to, stationId) {
    const d = rt.routes[to];
    return d && d[stationId] !== undefined ? d[stationId] : Infinity;
  }

  // ---------- Trains ----------
  const typeOf = (train) => NR.TRAIN_TYPES[train.type] || NR.TRAIN_TYPES.regular;
  NR.seatsOf = (s, train) => typeOf(train).seats + s.extraSeats;

  // Does this kind of train stop at this station? Express trains skip small places.
  function serves(type, stationId) {
    const rule = NR.TRAIN_TYPES[type].stops;
    const c = city(stationId);
    if (rule === "all") return true;
    if (rule === "metro") return c.type === "metro";
    return c.size >= rule;
  }
  NR.serves = serves;

  // Trains run to the end of their line, then turn around.
  function nextStop(line, train) {
    let dir = train.dir;
    let n = train.i + dir;
    if (n < 0 || n >= line.stops.length) {
      dir = -dir;
      n = train.i + dir;
    }
    return { n, dir };
  }
  NR.nextStop = nextStop;

  // The next station ahead where this train will actually stop.
  function nextServedStop(line, train) {
    let i = train.i;
    let dir = train.dir;
    for (let k = 0; k < line.stops.length * 2; k++) {
      let n = i + dir;
      if (n < 0 || n >= line.stops.length) {
        dir = -dir;
        n = i + dir;
      }
      i = n;
      if (serves(train.type, line.stops[i])) return line.stops[i];
    }
    return null;
  }

  // What a passenger pays on arrival, in $k: more for longer trips and faster trains.
  function fareFor(p, here) {
    const trip = p.from ? miles(city(p.from), city(here)) : 50;
    let fare = (2 + trip * 0.02) * (p.premium || 1);
    if (p.commuter && trip < 120) fare *= 1.3; // commuters pay a bonus on short trips
    return fare;
  }
  function earn(s, amount) {
    s.money += amount;
    s.weekIncome += amount;
  }

  // A passenger or a load of cargo has arrived: collect the money.
  function deliverItem(s, p, here) {
    if (p.kind) {
      const fee = NR.CARGO[p.kind].fee;
      earn(s, fee[0] + miles(city(p.from), city(here)) * fee[1]);
      s.cargoDelivered[p.kind]++;
      emit("deliver", { at: here, cargo: p.kind });
      return;
    }
    s.delivered++;
    earn(s, fareFor(p, here));
    emit("deliver", { at: here });
    countGoals(s, here);
  }

  // A train has stopped: unload and load. Passenger trains use the platform (st.waiting),
  // cargo trains use the yard (st.cargo). Returns how long the train waits.
  function serveStation(s, train, line) {
    if (rt.dirty) rebuildRoutes(s);
    const here = line.stops[train.i];
    if (!serves(train.type, here)) return 0; // express trains run straight through
    const type = typeOf(train);
    const st = NR.stationById(s, here);
    const nextId = nextServedStop(line, train);
    const closer = (p) => nextId !== null && stopsAway(p.to, nextId) < stopsAway(p.to, here);
    let moved = 0;
    train.pax = train.pax.filter((p) => {
      if (itemArrives(s, here, p)) {
        deliverItem(s, p, here);
        moved++;
        return false;
      }
      if (closer(p)) return true; // stay on board
      (p.kind ? st.cargo : st.waiting).push(p); // change trains here
      moved++;
      return false;
    });
    const seats = NR.seatsOf(s, train);
    const board = (list) =>
      list.filter((p) => {
        if (train.pax.length >= seats || !closer(p)) return true;
        if (type.carries ? !type.carries.includes(p.kind) : p.kind) return true; // not this train's load
        if (!type.carries) {
          p.premium = Math.max(p.premium || 1, type.fare);
          if (train.type === "commuter") p.commuter = true;
        }
        train.pax.push(p);
        moved++;
        return false;
      });
    if (type.carries) st.cargo = board(st.cargo);
    else st.waiting = board(st.waiting);
    return 0.35 + moved * (type.quick ? 0.03 : 0.08);
  }

  function updateTrain(s, train, dt) {
    const line = NR.lineById(s, train.lineId);
    if (!line) return;
    if (!train.moving) {
      train.wait -= dt;
      if (train.wait > 0) return;
      const { n, dir } = nextStop(line, train);
      train.dir = dir;
      train.moving = true;
      train.t = 0;
      train.segLen = Math.max(1, miles(city(line.stops[train.i]), city(line.stops[n])));
      return;
    }
    train.t += (dt * s.speed * typeOf(train).speed) / train.segLen;
    if (train.t >= 1) {
      train.i += train.dir;
      train.t = 0;
      train.moving = false;
      train.wait = serveStation(s, train, line);
    }
  }

  // ---------- One step of the game ----------
  NR.update = function (s, dt) {
    if (s.over) return;
    if (rt.dirty) rebuildRoutes(s);
    s.time += dt;

    // A new city joins the map now and then.
    s.nextCityIn -= dt;
    if (s.nextCityIn <= 0) {
      addNextCity(s);
      s.nextCityIn = rand(T.cityEvery[0], T.cityEvery[1]);
    }

    // Rush hour: one big city suddenly gets very busy for a while.
    if (s.rush) {
      s.rush.left -= dt;
      if (s.rush.left <= 0) s.rush = null;
    } else {
      s.rushIn -= dt;
      if (s.rushIn <= 0) {
        const big = s.stations.filter((st) => city(st.id).size >= 4);
        if (big.length) {
          const st = big[Math.floor(Math.random() * big.length)];
          s.rush = { at: st.id, left: T.rushLength };
          st.spawnIn = Math.min(st.spawnIn, 0.4);
          emit("rush", { at: st.id });
        }
        s.rushIn = rand(T.rushEvery[0], T.rushEvery[1]);
      }
    }

    // Passengers appear. Busy cities make more, and everything speeds up over time.
    const pressure = 1 + s.time / 240;
    s.stations.forEach((st) => {
      st.spawnIn -= dt;
      if (st.spawnIn <= 0) {
        const to = pickDestination(s, st);
        if (to) st.waiting.push({ id: s.nextId++, to, from: st.id });
        const rushBoost = s.rush && s.rush.at === st.id ? 3 : 1;
        st.spawnIn = (11 / (0.6 + 0.25 * city(st.id).size) / pressure / rushBoost) * rand(0.7, 1.3);
      }
    });

    // Cargo: farms send produce, desert and mountain towns send trucks (once Truck bypass
    // trains exist), and ships bring containers to your ports.
    const trucksOn = s.week >= NR.TRAIN_TYPES.truck.unlockWeek;
    s.stations.forEach((st) => {
      const t = city(st.id).type;
      const kind = t === "farm" ? "produce" : trucksOn && (t === "desert" || t === "mountain") ? "trucks" : null;
      if (!kind) return;
      st.cargoIn -= dt;
      if (st.cargoIn > 0) return;
      addCargo(s, st, kind, 1);
      st.cargoIn = rand(T.cargoEvery[0], T.cargoEvery[1]) / (0.7 + 0.15 * city(st.id).size);
    });
    s.shipIn -= dt;
    if (s.shipIn <= 0) {
      const ports = s.stations.filter((st) => city(st.id).port);
      if (ports.length) {
        const st = ports[Math.floor(Math.random() * ports.length)];
        emit("ship", { at: st.id, landed: addCargo(s, st, "containers", T.shipLoad) });
      }
      s.shipIn = rand(T.shipEvery[0], T.shipEvery[1]);
    }

    if (rt.dirty) rebuildRoutes(s);
    s.trains.forEach((tr) => updateTrain(s, tr, dt));

    // Overcrowding: a station that stays too full for too long ends the game.
    for (const st of s.stations) {
      if (st.waiting.length > T.stationRoom) st.crowd = Math.min(1, st.crowd + dt / T.overflowSeconds);
      else st.crowd = Math.max(0, st.crowd - dt / (T.overflowSeconds * 1.5));
      if (st.crowd >= 1) {
        s.over = true;
        emit("fail", { at: st.id });
        return;
      }
    }

    // A new week starts every 7 days.
    const week = Math.floor(s.time / T.weekLength);
    if (week > s.week) {
      s.week = week;
      // Pay the running costs of every train on the map.
      const upkeep = s.trains.reduce((sum, t) => sum + typeOf(t).upkeep, 0);
      s.money -= upkeep;
      s.lastWeek = { income: s.weekIncome, upkeep };
      s.weekIncome = 0;
      if (s.mode === "timed" && week >= T.timedWeeks) {
        s.over = true;
        emit("timeup", {});
        return;
      }
      emit("week", { week });
    }

    if (s.mode === "levels" && !s.levelDone && s.delivered >= NR.LEVELS[s.level].goal) {
      s.levelDone = true;
      emit("level", { level: s.level });
    }
  };

  // ---------- Building lines ----------
  NR.lineMiles = (l) => {
    let m = 0;
    for (let i = 0; i + 1 < l.stops.length; i++) m += NR.trackMiles(l.stops[i], l.stops[i + 1]);
    return m;
  };
  // What the track of a line cost to build, in $k.
  NR.lineValue = (l) => NR.lineMiles(l) * (T.trackPrice + (l.grade === "high" ? T.highSpeedPrice : 0));
  // Price of track through a list of stops, in $k.
  NR.chainPrice = (chain, grade) => {
    let p = 0;
    for (let i = 0; i + 1 < chain.length; i++) p += NR.trackPrice(chain[i], chain[i + 1], grade);
    return p;
  };
  NR.freeColor = (s) => {
    for (let c = 0; c < s.linesUnlocked; c++) if (!s.lines.some((l) => l.color === c)) return c;
    return -1;
  };
  NR.depotCount = (s) => Object.values(s.depot).reduce((a, b) => a + b, 0);
  // The first train type waiting in the depot that can run on this line.
  const depotTypeFor = (s, line) => Object.keys(NR.TRAIN_TYPES).find((k) => s.depot[k] > 0 && NR.canAddTrain(s, line, k).ok);

  NR.createLine = function (s, stops, color) {
    const line = { id: s.nextId++, color, stops: stops.slice(), grade: "standard" };
    s.money -= NR.chainPrice(stops, "standard");
    s.lines.push(line);
    rt.dirty = true;
    const type = depotTypeFor(s, line);
    if (type) NR.addTrain(s, line, type);
    return line;
  };

  // added = new stops in the order they were dragged, starting next to the old end.
  NR.extendLine = function (s, line, atHead, added) {
    const end = atHead ? line.stops[0] : line.stops[line.stops.length - 1];
    s.money -= NR.chainPrice([end, ...added], line.grade);
    if (atHead) {
      line.stops.unshift(...added.slice().reverse());
      NR.trainsOn(s, line).forEach((t) => (t.i += added.length));
    } else {
      line.stops.push(...added);
    }
    rt.dirty = true;
  };

  // Price of upgrading a whole line to high-speed track, in $k.
  NR.highSpeedUpgradePrice = (line) => NR.lineMiles(line) * T.highSpeedPrice;
  NR.upgradeLine = function (s, line) {
    const price = NR.highSpeedUpgradePrice(line);
    if (line.grade === "high" || s.money < price) return false;
    s.money -= price;
    line.grade = "high";
    return true;
  };

  // Can a train of this type run on this line? Returns { ok, reason, fromDepot }.
  NR.canAddTrain = function (s, line, type) {
    const t = NR.TRAIN_TYPES[type];
    if (s.week < t.unlockWeek) return { ok: false, reason: `Unlocks in week ${t.unlockWeek + 1}` };
    if (t.needsHighSpeed && line.grade !== "high") return { ok: false, reason: "Needs high-speed track" };
    if (t.needsPort && !line.stops.some((id) => city(id).port)) return { ok: false, reason: "Needs a port on the line" };
    if (t.maxLineMiles && NR.lineMiles(line) > t.maxLineMiles) return { ok: false, reason: `Only on lines up to ${t.maxLineMiles} mi` };
    if (line.stops.filter((id) => serves(type, id)).length < 2) return { ok: false, reason: "Needs 2 cities it stops at" };
    if (s.depot[type] > 0) return { ok: true, fromDepot: true };
    if (s.money < t.price) return { ok: false, reason: `Costs ${NR.money(t.price)}` };
    return { ok: true, fromDepot: false };
  };

  // Put a train on a line: from the depot if one is waiting, otherwise buy it.
  NR.addTrain = function (s, line, type = "regular") {
    const check = NR.canAddTrain(s, line, type);
    if (!check.ok) return false;
    if (check.fromDepot) s.depot[type]--;
    else s.money -= NR.TRAIN_TYPES[type].price;
    const fromEnd = NR.trainsOn(s, line).length % 2 === 1; // spread trains out
    const train = {
      id: s.nextId++,
      lineId: line.id,
      type,
      i: fromEnd ? line.stops.length - 1 : 0,
      dir: fromEnd ? -1 : 1,
      t: 0,
      moving: false,
      wait: 0,
      segLen: 1,
      pax: [],
    };
    s.trains.push(train);
    rt.dirty = true; // which lines carry what has changed
    train.wait = serveStation(s, train, line);
    return true;
  };

  // Passengers and cargo on a train that leaves service get off at its last station.
  function dropOff(s, train, line) {
    const here = line.stops[Math.min(train.i, line.stops.length - 1)];
    const st = NR.stationById(s, here);
    train.pax.forEach((p) => {
      if (itemArrives(s, here, p)) deliverItem(s, p, here);
      else (p.kind ? st.cargo : st.waiting).push(p);
    });
    train.pax = [];
  }

  // Take one train off its line and send it back to the depot.
  NR.removeTrain = function (s, trainId) {
    const train = s.trains.find((t) => t.id === trainId);
    if (!train) return false;
    const line = NR.lineById(s, train.lineId);
    if (line) dropOff(s, train, line);
    s.trains = s.trains.filter((t) => t !== train);
    s.depot[train.type]++;
    rt.dirty = true;
    return true;
  };

  // Delete a line: its trains go back to the depot and part of the track cost comes back.
  NR.deleteLine = function (s, line) {
    NR.trainsOn(s, line).forEach((t) => {
      dropOff(s, t, line);
      s.depot[t.type]++;
    });
    s.trains = s.trains.filter((t) => t.lineId !== line.id);
    s.lines = s.lines.filter((l) => l !== line);
    s.money += NR.lineValue(line) * T.refundShare;
    rt.dirty = true;
  };

  // Put trains waiting in the depot onto lines that have none.
  NR.assignIdleTrains = function (s) {
    s.lines.forEach((l) => {
      if (NR.trainsOn(s, l).length) return;
      const type = depotTypeFor(s, l);
      if (type) NR.addTrain(s, l, type);
    });
  };

  // ---------- Weekly upgrades ----------
  NR.UPGRADES = {
    grant: { title: "State grant", text: `${NR.money(T.grant)} to spend on track and trains.`, ok: () => true, apply: (s) => (s.money += T.grant) },
    regional: {
      title: "Free Regional train",
      text: "A faster train with 10 seats, waiting in your depot.",
      ok: () => true,
      apply: (s) => {
        s.depot.regional++;
        NR.assignIdleTrains(s);
      },
    },
    highspeed: {
      title: "Free High-speed train",
      text: "Twice as fast. Runs on high-speed track.",
      ok: (s) => s.week >= NR.TRAIN_TYPES.highspeed.unlockWeek,
      apply: (s) => (s.depot.highspeed += 1),
    },
    line: {
      title: "New line",
      text: "One more line color to build with.",
      ok: (s) => s.linesUnlocked < T.maxLines,
      apply: (s) => s.linesUnlocked++,
    },
    freight: {
      title: "Free Freight train",
      text: "Moves produce from Farmland towns to Metro cities. Waiting in your depot.",
      ok: () => true,
      apply: (s) => (s.depot.freight += 1),
    },
    seats: { title: "Bigger trains", text: "Every train gets 2 more seats or room for cargo.", ok: (s) => s.extraSeats < 6, apply: (s) => (s.extraSeats += 2) },
    speed: {
      title: "Faster trains",
      text: "Every train runs 15% faster.",
      ok: (s) => s.speedUps < 3,
      apply: (s) => {
        s.speed *= 1.15;
        s.speedUps++;
      },
    },
  };
  NR.upgradeChoices = (s) => shuffle(Object.keys(NR.UPGRADES).filter((k) => NR.UPGRADES[k].ok(s))).slice(0, 2);
  // Every week a new Regular train arrives in the depot.
  NR.weekBonus = (s) => {
    s.depot.regular++;
    NR.assignIdleTrains(s);
  };

  // ---------- Levels ----------
  NR.nextLevel = function (s) {
    s.money += T.levelReward;
    s.levelDone = false;
    if (s.level + 1 >= NR.LEVELS.length) {
      s.mode = "endless"; // every level beaten: carry on in Endless
      return;
    }
    s.level++;
    NR.LEVELS[s.level].areas.forEach((a) => {
      if (!s.areas.includes(a)) s.areas.push(a); // its counties can now be unlocked
    });
  };

  // After a failed level: keep the network and switch to Endless.
  NR.continueEndless = function (s, stationId) {
    const st = NR.stationById(s, stationId);
    if (st) st.waiting = [];
    s.stations.forEach((x) => (x.crowd = 0));
    s.mode = "endless";
    s.areas = allAreas();
    s.over = false;
  };

  // ---------- Saving a copy (used for "Retry level") ----------
  NR.save = (s) => JSON.stringify(s);
  NR.load = (text) => {
    const s = JSON.parse(text);
    rt.dirty = true;
    rt.events.length = 0;
    return s;
  };
})();
