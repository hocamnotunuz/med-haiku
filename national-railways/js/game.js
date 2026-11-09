// National Railways: the game rules.
// Stations, lines, trains, passengers, weeks and levels. Nothing is drawn here.
(function () {
  "use strict";
  const NR = window.NR;

  // ---- Tuning: change these numbers to make the game easier or harder ----
  const T = (NR.TUNING = {
    dayLength: 10, // real seconds per in-game day
    timedWeeks: 4, // how many weeks the Timed challenge lasts
    startTrack: 500, // miles of track at the start
    startLines: 3, // line colors available at the start
    maxLines: 7,
    startTrains: 3,
    trainSeats: 6,
    trainSpeed: 110, // map miles per real second
    stationRoom: 8, // passengers a station holds before it starts to overflow
    overflowSeconds: 20, // seconds a station can stay overfull before you lose
    trackDetour: 1.15, // track is a little longer than a straight line
    firstCityAfter: 8, // seconds until the first new city appears
    cityEvery: [14, 22], // seconds between new cities (random in this range)
    levelReward: 150, // miles of track for finishing a level
  });
  T.weekLength = T.dayLength * 7;
  NR.DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  NR.cityById = {};
  NR.CITIES.forEach((c) => (NR.cityById[c.id] = c));
  const city = (id) => NR.cityById[id];

  // Great-circle distance between two cities, in miles.
  function miles(a, b) {
    const rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad;
    const dLon = (b.lon - a.lon) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
    return 2 * 3959 * Math.asin(Math.sqrt(h));
  }
  NR.trackCost = (a, b) => Math.round(miles(city(a), city(b)) * T.trackDetour);

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
  const allRegions = () => [...new Set(NR.CITIES.map((c) => c.region))];

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
      freeTrains: T.startTrains,
      linesUnlocked: T.startLines,
      trackTotal: T.startTrack,
      seats: T.trainSeats,
      speed: T.trainSpeed,
      speedUps: 0,
      level: 0,
      levelDone: false,
      regions: mode === "levels" ? NR.LEVELS[0].regions.slice() : allRegions(),
      nextCityIn: T.firstCityAfter,
      nextId: 1,
      over: false,
    };
    NR.START_CITIES.forEach((id) => addStation(s, id, true));
    rt.dirty = true;
    rt.events.length = 0;
    return s;
  };

  function addStation(s, id, atStart) {
    s.stations.push({ id, waiting: [], crowd: 0, spawnIn: rand(2, 5), born: atStart ? -10 : s.time });
    rt.dirty = true;
  }

  NR.stationById = (s, id) => s.stations.find((st) => st.id === id);
  NR.lineById = (s, id) => s.lines.find((l) => l.id === id);
  NR.trainsOn = (s, line) => s.trains.filter((t) => t.lineId === line.id);
  NR.cityPool = (s) => NR.CITIES.filter((c) => s.regions.includes(c.region) && !NR.stationById(s, c.id));

  function addNextCity(s) {
    const pool = NR.cityPool(s);
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

  // For every destination, count how many stops each station is from it.
  // Passengers use this to decide which train to take and where to change.
  function rebuildRoutes(s) {
    const next = {};
    s.stations.forEach((st) => (next[st.id] = []));
    s.lines.forEach((l) => {
      for (let i = 0; i + 1 < l.stops.length; i++) {
        next[l.stops[i]].push(l.stops[i + 1]);
        next[l.stops[i + 1]].push(l.stops[i]);
      }
    });
    const goals = s.style === "type" ? [...new Set(s.stations.map((st) => city(st.id).type))] : s.stations.map((st) => st.id);
    rt.routes = {};
    goals.forEach((goal) => {
      const dist = {};
      const queue = [];
      s.stations.forEach((st) => {
        if (arrives(s, st.id, goal)) {
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
      rt.routes[goal] = dist;
    });
    rt.dirty = false;
  }
  function stopsAway(to, stationId) {
    const d = rt.routes[to];
    return d && d[stationId] !== undefined ? d[stationId] : Infinity;
  }

  // ---------- Trains ----------
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

  // A train has stopped: let passengers off and on. Returns how long it waits.
  function serveStation(s, train, line) {
    if (rt.dirty) rebuildRoutes(s);
    const here = line.stops[train.i];
    const st = NR.stationById(s, here);
    const next = line.stops[nextStop(line, train).n];
    let moved = 0;
    train.pax = train.pax.filter((p) => {
      if (arrives(s, here, p.to)) {
        s.delivered++;
        moved++;
        emit("deliver", { at: here });
        return false;
      }
      if (stopsAway(p.to, next) < stopsAway(p.to, here)) return true; // stay on board
      st.waiting.push(p); // change trains here
      moved++;
      return false;
    });
    st.waiting = st.waiting.filter((p) => {
      if (train.pax.length >= s.seats) return true;
      if (stopsAway(p.to, next) < stopsAway(p.to, here)) {
        train.pax.push(p);
        moved++;
        return false;
      }
      return true;
    });
    return 0.35 + moved * 0.08;
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
    train.t += (dt * s.speed) / train.segLen;
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

    // Passengers appear. Busy cities make more, and everything speeds up over time.
    const pressure = 1 + s.time / 240;
    s.stations.forEach((st) => {
      st.spawnIn -= dt;
      if (st.spawnIn <= 0) {
        const to = pickDestination(s, st);
        if (to) st.waiting.push({ id: s.nextId++, to });
        st.spawnIn = (11 / (0.6 + 0.25 * city(st.id).size) / pressure) * rand(0.7, 1.3);
      }
    });

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
    for (let i = 0; i + 1 < l.stops.length; i++) m += NR.trackCost(l.stops[i], l.stops[i + 1]);
    return m;
  };
  NR.trackLeft = (s) => s.trackTotal - s.lines.reduce((m, l) => m + NR.lineMiles(l), 0);
  NR.freeColor = (s) => {
    for (let c = 0; c < s.linesUnlocked; c++) if (!s.lines.some((l) => l.color === c)) return c;
    return -1;
  };

  NR.createLine = function (s, stops, color) {
    const line = { id: s.nextId++, color, stops: stops.slice() };
    s.lines.push(line);
    rt.dirty = true;
    NR.addTrain(s, line);
    return line;
  };

  // added = new stops in the order they were dragged, starting next to the old end.
  NR.extendLine = function (s, line, atHead, added) {
    if (atHead) {
      line.stops.unshift(...added.slice().reverse());
      NR.trainsOn(s, line).forEach((t) => (t.i += added.length));
    } else {
      line.stops.push(...added);
    }
    rt.dirty = true;
  };

  NR.addTrain = function (s, line) {
    if (s.freeTrains <= 0) return false;
    s.freeTrains--;
    const fromEnd = NR.trainsOn(s, line).length % 2 === 1; // spread trains out
    const train = {
      id: s.nextId++,
      lineId: line.id,
      i: fromEnd ? line.stops.length - 1 : 0,
      dir: fromEnd ? -1 : 1,
      t: 0,
      moving: false,
      wait: 0,
      segLen: 1,
      pax: [],
    };
    s.trains.push(train);
    train.wait = serveStation(s, train, line);
    return true;
  };

  // Passengers on a train that leaves service get off at its last station.
  function dropOff(s, train, line) {
    const here = line.stops[Math.min(train.i, line.stops.length - 1)];
    const st = NR.stationById(s, here);
    train.pax.forEach((p) => {
      if (arrives(s, here, p.to)) s.delivered++;
      else st.waiting.push(p);
    });
    train.pax = [];
  }

  NR.removeTrain = function (s, line) {
    const list = NR.trainsOn(s, line);
    if (!list.length) return false;
    const train = list.reduce((a, b) => (b.pax.length < a.pax.length ? b : a));
    dropOff(s, train, line);
    s.trains = s.trains.filter((t) => t !== train);
    s.freeTrains++;
    return true;
  };

  NR.deleteLine = function (s, line) {
    NR.trainsOn(s, line).forEach((t) => {
      dropOff(s, t, line);
      s.freeTrains++;
    });
    s.trains = s.trains.filter((t) => t.lineId !== line.id);
    s.lines = s.lines.filter((l) => l !== line);
    rt.dirty = true;
  };

  // Give free trains to lines that have none.
  NR.assignIdleTrains = function (s) {
    s.lines.forEach((l) => {
      if (s.freeTrains > 0 && !NR.trainsOn(s, l).length) NR.addTrain(s, l);
    });
  };

  // ---------- Weekly upgrades ----------
  NR.UPGRADES = {
    track: { title: "More track", text: "+200 miles of track to build with.", ok: () => true, apply: (s) => (s.trackTotal += 200) },
    line: {
      title: "New line",
      text: "One more line color to build with.",
      ok: (s) => s.linesUnlocked < T.maxLines,
      apply: (s) => s.linesUnlocked++,
    },
    train: {
      title: "Extra train",
      text: "One more train for any line.",
      ok: () => true,
      apply: (s) => {
        s.freeTrains++;
        NR.assignIdleTrains(s);
      },
    },
    seats: { title: "Bigger trains", text: "Every train gets 2 more seats.", ok: (s) => s.seats < 14, apply: (s) => (s.seats += 2) },
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
  NR.weekBonus = (s) => {
    s.freeTrains++;
    NR.assignIdleTrains(s);
  };

  // ---------- Levels ----------
  NR.nextLevel = function (s) {
    s.trackTotal += T.levelReward;
    s.levelDone = false;
    if (s.level + 1 >= NR.LEVELS.length) {
      s.mode = "endless"; // every level beaten: carry on in Endless
      return;
    }
    s.level++;
    NR.LEVELS[s.level].regions.forEach((r) => {
      if (!s.regions.includes(r)) s.regions.push(r);
    });
    s.nextCityIn = 2;
  };

  // After a failed level: keep the network and switch to Endless.
  NR.continueEndless = function (s, stationId) {
    const st = NR.stationById(s, stationId);
    if (st) st.waiting = [];
    s.stations.forEach((x) => (x.crowd = 0));
    s.mode = "endless";
    s.regions = allRegions();
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
