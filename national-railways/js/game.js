// National Railways: the game rules.
// Stations, lines, trains, passengers, weeks and levels. Nothing is drawn here.
(function () {
  "use strict";
  const NR = window.NR;

  // ---- Tuning: change these numbers to make the game easier or harder ----
  const T = (NR.TUNING = {
    dayLength: 10, // real seconds per in-game day
    timedWeeks: 4, // how many weeks the Timed challenge lasts
    startMoney: 400, // the home state's budget at the start, in thousands of dollars ($k)
    nationalStart: 0, // national money at the start ($k)
    newStateBudget: 200, // budget a state gets when it opens ($k)
    stateTax: 0.1, // share of every fare and cargo fee a state pays to national money
    trackPrice: 1, // $k per mile of standard track
    highSpeedPrice: 1.5, // extra $k per mile for high-speed track
    refundShare: 0.5, // share of the track cost you get back when you delete a line
    grant: 150, // $k of national money from a federal grant
    startLines: 3, // line colors available at the start
    maxLines: 7,
    lineColorPrice: [100, 50], // $k for a line color bought with money: the first one, then this much more each
    startTrains: 3, // Regular trains in the depot at the start
    trainSpeed: 110, // map miles per real second for a Regular train
    rushEvery: [30, 45], // seconds between rush hours (random in this range)
    rushLength: 10, // seconds a rush hour lasts
    stationRoom: 8, // passengers a station holds before it starts to overflow
    overflowSeconds: 20, // seconds a station can stay overfull before you lose
    trackDetour: 1.15, // track is a little longer than a straight line
    firstCityAfter: 8, // seconds until the first new city appears
    cityEvery: [14, 22], // seconds between new towns (random in this range; Gentle uses NR.GEO's townEvery)
    levelReward: 150, // $k for finishing a level
    yardRoom: 12, // loads of cargo a station's yard holds (more is turned away)
    cargoEvery: [10, 16], // seconds between loads of produce or trucks at a station
    shipEvery: [35, 55], // seconds between ships docking at one of your ports
    shipLoad: 8, // containers a ship unloads
    flightEvery: [40, 60], // seconds between flights landing at one of your airports
    flightLoad: 5, // travelers off each flight
    touristEvery: [6, 10], // seconds between tourists on weekdays (three times as often at weekends)
    firstEvent: 630, // seconds before the first earthquake or wildfire (9 weeks: they start in week 10)
    eventEvery: [60, 100], // seconds between earthquakes and wildfires
    selfRepair: 30, // seconds until damaged track mends by itself (3 days)
    fireStretches: 2, // stretches of track a wildfire can damage
    newStationGrace: 25, // seconds before a brand-new station's first passengers
    repairTime: 4, // seconds a Work train needs to repair a stretch of track
  });
  T.weekLength = T.dayLength * 7;
  NR.DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  NR.SAVE_VERSION = 13; // bump when saved games from older versions no longer fit

  // ---- Time of day: night runs from 21:00 to 05:00 ----
  NR.hourOf = (s) => ((s.time % T.dayLength) / T.dayLength) * 24;
  NR.isNight = (s) => {
    const h = NR.hourOf(s);
    return h >= 21 || h < 5;
  };
  // How dark it is, from 0 (day) to 1 (night), fading at dusk (19-21) and dawn (5-7).
  NR.nightAmount = (s) => {
    const h = NR.hourOf(s);
    if (h >= 21 || h < 5) return 1;
    if (h >= 19) return (h - 19) / 2;
    if (h < 7) return 1 - (h - 5) / 2;
    return 0;
  };
  // A stretch of track between two stations, the same whichever way you go.
  const segKey = (a, b) => (a < b ? a + "|" + b : b + "|" + a);
  NR.segKey = segKey;

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
    night: {
      name: "Night train",
      price: 160,
      upkeep: 14,
      seats: 8,
      speed: 1.3,
      fare: 1.8,
      stops: 2,
      unlockWeek: 1,
      nightOnly: true,
      about: "Sleeper train: runs only at night (21:00 to 05:00), with an extra bonus on trips of 200 miles or more. Skips the smallest towns.",
    },
    scenic: {
      name: "Scenic train",
      price: 130,
      upkeep: 10,
      seats: 10,
      speed: 0.7,
      fare: 1,
      stops: "all",
      unlockWeek: 0,
      touristsOnly: true,
      about: "Glass-roofed train for tourists only. Tourists pay double on it.",
    },
    airport: {
      name: "Airport express",
      price: 150,
      upkeep: 12,
      seats: 10,
      speed: 1.6,
      fare: 1.5,
      stops: "all",
      unlockWeek: 0,
      quick: true,
      needsAirport: true,
      about: "Fast, quick-boarding train for air travelers and everyone else. Needs an airport on its line.",
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
    work: {
      name: "Work train",
      price: 90,
      upkeep: 6,
      seats: 0,
      speed: 0.9,
      fare: 1,
      stops: "all",
      unlockWeek: 0,
      carries: [],
      repairs: true,
      about: "Carries nothing. Repairs track on its line that earthquakes or wildfires damaged.",
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
  // A train type's name as a noun: "High-speed train", "Dock train" (not "Dock train train").
  NR.trainLabel = (key) => {
    const name = NR.TRAIN_TYPES[key].name;
    return /train$/i.test(name) ? name : `${name} train`;
  };
  // What a train type holds: "seats" for passengers, or its cargo's unit.
  NR.unitOf = (key) => {
    const t = NR.TRAIN_TYPES[key];
    if (t.repairs) return "repair crew";
    return t.carries ? NR.CARGO[t.carries[0]].unit : "seats";
  };

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
  // Price of laying track between two cities on flat ground, in $k. js/geography.js replaces
  // this with a price that includes mountains, water and rivers.
  NR.trackPrice = (a, b, grade) => NR.trackMiles(a, b) * (T.trackPrice + (grade === "high" ? T.highSpeedPrice : 0));

  // ---------- States and budgets ----------
  // Each state has its own budget. Fares and cargo fees for trips inside the state go in, and it
  // pays for track, trains and counties inside the state. National money gets fares for trips
  // that cross a state border, contract rewards, grants and level bonuses; it pays for track and
  // trains that cross a border, and covers any state that runs short (a state spends its own
  // budget first, then national money). If national money ends a week below zero, the richest
  // state covers it. Money can't be moved between budgets by hand.
  NR.STATE_NAMES = Object.fromEntries(NR.MAP.states.map((x) => [x.code, x.name]));
  // The home state: where a game starts, with its pack's starting counties and levels.
  // Any state whose pack lists starting counties can be home (California is the default).
  NR.homeChoices = () => NR.PACK_LIST.filter((code) => NR.PACKS[code] && NR.PACKS[code].start && NR.PACKS[code].start.length);
  NR.setHome = function (code) {
    const home = NR.homeChoices().includes(code) ? code : NR.homeChoices()[0];
    NR.HOME_PACK = home;
    NR.HOME_STATE = home;
    NR.START_COUNTIES = NR.PACKS[home].start;
    NR.LEVELS = NR.PACKS[home].levels || [];
  };
  NR.hasLevels = (code) => !!(NR.PACKS[code] && NR.PACKS[code].levels && NR.PACKS[code].levels.length);
  NR.setHome(NR.HOME_PACK);
  // "A, B and C" or "A, B or C"
  NR.listWords = (words, last = "and") => (words.length > 1 ? `${words.slice(0, -1).join(", ")} ${last} ${words[words.length - 1]}` : words[0] || "");
  NR.stateOf = (stationId) => NR.countyById[city(stationId).county].state;
  // Who pays for the track between two stations: their state, or national money across a border.
  NR.segmentPayer = (a, b) => (NR.stateOf(a) === NR.stateOf(b) ? NR.stateOf(a) : "national");
  // Who pays for a line's trains: its state if the whole line is in one state, otherwise national money.
  NR.linePayer = (l) => {
    const first = NR.stateOf(l.stops[0]);
    return l.stops.every((id) => NR.stateOf(id) === first) ? first : "national";
  };
  NR.payerName = (p) => (p === "national" ? "national money" : `the ${NR.STATE_NAMES[p]} budget`);
  // A bill is { CA: 30, national: 12 }: who pays how much ($k).
  NR.addToBill = (bill, payer, amount) => {
    bill[payer] = (bill[payer] || 0) + amount;
    return bill;
  };
  // National money a bill needs: its own share, plus whatever the states can't cover themselves.
  NR.nationalNeed = (s, bill) =>
    Object.entries(bill).reduce((n, [p, amount]) => n + (p === "national" ? amount : Math.max(0, amount - Math.max(0, s.states[p].budget))), 0);
  NR.canPay = (s, bill) => NR.nationalNeed(s, bill) <= Math.max(0, s.money) + 1e-6;
  NR.pay = (s, bill) => {
    for (const [p, amount] of Object.entries(bill)) {
      if (p === "national") {
        s.money -= amount;
        continue;
      }
      const st = s.states[p];
      const own = Math.min(amount, Math.max(0, st.budget));
      st.budget -= own;
      s.money -= amount - own; // national money covers the rest
    }
  };
  // Money paid back goes to whoever paid.
  NR.refund = (s, bill) => {
    for (const [p, amount] of Object.entries(bill)) {
      if (p === "national") s.money += amount;
      else s.states[p].budget += amount;
    }
  };
  // What a payer can spend right now: national money, plus the state's own budget.
  NR.spendable = (s, payer) => Math.max(0, s.money) + (payer === "national" ? 0 : Math.max(0, s.states[payer].budget));

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
  const allAreas = () => [...new Set(NR.CITIES.map((c) => c.level).filter(Boolean))];
  function makeStates() {
    const states = {};
    NR.MAP.states.forEach(({ code }) => {
      const home = code === NR.HOME_STATE;
      // liveTime: seconds the state has run without a head in charge (it gets busier over this time)
      states[code] = { open: home, budget: home ? T.startMoney : 0, liveTime: 0, weekIncome: 0, weekTax: 0, lastWeek: null, head: null };
    });
    return states;
  }

  // ---------- Starting a game ----------
  // mode: "endless" | "timed" | "levels"    style: "type" | "city"    geo: "gentle" | "tough"
  NR.newGame = function (mode, style, geo, home) {
    NR.setHome(home || NR.HOME_STATE);
    if (mode === "levels" && !NR.LEVELS.length) mode = "endless"; // only some states have levels
    rt.geoLevel = geo || "gentle"; // how hard real geography is (see js/geography.js)
    const s = {
      mode,
      home: NR.HOME_STATE,
      style,
      geo: rt.geoLevel,
      time: 0,
      delivered: 0,
      week: 0,
      stations: [],
      lines: [],
      trains: [],
      v: NR.SAVE_VERSION,
      money: T.nationalStart, // national money
      states: makeStates(), // each state's budget, head of transportation and so on
      levelsBeaten: false,
      weekIncome: 0, // fares and cargo fees this week, all states together
      nationalIncome: 0, // fares for trips across a state border this week
      nationalTax: 0, // taxes paid by the states this week
      nationalLastWeek: null,
      lastWeek: null,
      depot: Object.fromEntries(Object.keys(NR.TRAIN_TYPES).map((k) => [k, k === "regular" ? T.startTrains : 0])),
      cargoDelivered: Object.fromEntries(Object.keys(NR.CARGO).map((k) => [k, 0])),
      shipIn: rand(15, 25), // the first ship comes early
      flightIn: 30,
      touristIn: rand(5, 10),
      eventIn: T.firstEvent,
      damage: {}, // stretches of track closed by an earthquake or wildfire: { "A|B": { since, cause } }
      fire: null, // a wildfire burning: { county, left }
      cities: {}, // city tram and metro networks you have opened (see js/metro.js)
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
      levelGoals: mode === "levels" ? makeLevelGoals(0) : [], // the current level's checklist
      contracts: [], // optional jobs on the contracts board
      contractIn: 20, // seconds until the first contract is offered
      contractsDone: 0,
      nextCityIn: T.firstCityAfter,
      nextId: 1,
      over: false,
    };
    NR.START_COUNTIES.forEach((id) => ownCounty(s, id, true));
    rt.dirty = true;
    rt.events.length = 0;
    rt.viewing = null; // the state map
    return s;
  };

  // A station that opens during the game gets a head start before its first passengers.
  function addStation(s, id, atStart) {
    s.stations.push({ id, waiting: [], cargo: [], crowd: 0, spawnIn: (atStart ? 0 : T.newStationGrace) + rand(2, 5), cargoIn: rand(4, 10), born: atStart ? -10 : s.time });
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
  // Towns that can still appear: inside counties you own, not on the map yet
  // (and not in a state a head of transportation is managing).
  NR.townPool = (s) => NR.TOWNS.filter((t) => s.owned.includes(t.county) && !NR.stationById(s, t.id) && !NR.stateFrozen(s, NR.stateOf(t.id)));

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
  NR.countyGoal = (id) => Math.max(45, Math.min(240, Math.round(45 + NR.mainStation[id].pop / 17)));

  // Where a county stands: { owned } or { ok, price, goal, progress } or { ok: false, reason }.
  NR.countyStatus = function (s, id) {
    if (s.owned.includes(id)) return { owned: true };
    const code = NR.countyById[id].state;
    if (!s.states[code].open) return { ok: false, reason: `Opens once you own all of ${NR.opensAfter(s, code)}` };
    if (NR.stateFrozen(s, code)) return { ok: false, reason: `Frozen while ${NR.STATE_NAMES[code]} is managed` };
    if (countyArea(id) && !s.areas.includes(countyArea(id))) {
      const lv = NR.LEVELS.findIndex((l) => l.areas.includes(countyArea(id)));
      return { ok: false, reason: `Opens in level ${lv + 1}` };
    }
    if (!NR.countyById[id].neighbors.some((n) => s.owned.includes(n))) return { ok: false, reason: "Own a neighboring county first" };
    return { ok: true, price: NR.countyPrice(id), goal: NR.countyGoal(id), progress: s.goalProgress[id] || 0, payer: code };
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
      const bill = { [st.payer]: st.price }; // a county is paid for from its state's budget
      if (!NR.canPay(s, bill)) return false;
      NR.pay(s, bill);
    }
    ownCounty(s, id, false);
    emit("county", { id, free: !!free });
    openMoreStates(s);
    return true;
  };

  // A state's neighbors (states with a county next to one of its counties) open once you own
  // every county in it. Beating every level counts as owning the home state.
  let stateNeighbors = null;
  NR.stateNeighbors = (code) => {
    if (!stateNeighbors) {
      stateNeighbors = {};
      NR.MAP.regions.forEach((r) =>
        r.neighbors.forEach((n) => {
          const other = NR.countyById[n] && NR.countyById[n].state;
          if (other && other !== r.state) (stateNeighbors[r.state] = stateNeighbors[r.state] || new Set()).add(other);
        })
      );
    }
    return [...(stateNeighbors[code] || [])];
  };
  // Which open state you'd need to own all of for this closed state to open ("Nevada or Oregon").
  NR.opensAfter = (s, code) => {
    const near = NR.stateNeighbors(code).filter((n) => s.states[n]);
    const open = near.filter((n) => s.states[n].open);
    if (open.length) return NR.listWords(open.map((n) => NR.STATE_NAMES[n]), "or");
    // None of its neighbors is open yet: "California or Nevada, after they open"
    return `${NR.listWords(near.map((n) => NR.STATE_NAMES[n]), "or")}, after ${near.length > 1 ? "they open" : "it opens"}`;
  };
  function openMoreStates(s) {
    const opened = [];
    for (const code of Object.keys(s.states)) {
      if (!s.states[code].open) continue;
      const ownAll = NR.MAP.regions.every((r) => r.state !== code || s.owned.includes(r.id));
      if (!ownAll && !(code === NR.HOME_STATE && s.levelsBeaten)) continue;
      NR.stateNeighbors(code).forEach((n) => s.states[n] && !s.states[n].open && !opened.includes(n) && opened.push(n));
    }
    opened.forEach((code) => {
      s.states[code].open = true;
      s.states[code].budget += T.newStateBudget;
    });
    if (opened.length) emit("statesOpen", { codes: opened });
  }

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
    if (to === "@scenic") return !!city(stationId).scenic; // tourists: any scenic place
    return s.style === "type" ? city(stationId).type === to : stationId === to;
  }
  NR.arrives = arrives;

  // A rider from a city's neighborhoods reaches the main station and boards the trains.
  NR.feedState = function (s, key) {
    const st = NR.stationById(s, key);
    const to = st && pickDestination(s, st);
    if (to) st.waiting.push({ id: s.nextId++, to, from: key, fromCity: true });
  };

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
          if (s.damage[segKey(l.stops[i], l.stops[i + 1])]) continue; // damaged track can't be used
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
    goals.push("@scenic");
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
    if (p.sleeper && trip >= 200) fare *= 1.5; // a night in a sleeper on a long trip
    if (p.tourist) fare *= p.scenic ? 2.4 : 1.2; // tourists pay more, double on a Scenic train
    return fare;
  }
  // Fares and cargo fees go into the budget of the state where the trip happened, less a 10%
  // tax that goes to national money. A trip from one state to another pays national money.
  function earn(s, amount, here, from) {
    s.weekIncome += amount;
    if (from && NR.cityById[from] && NR.stateOf(from) !== NR.stateOf(here)) {
      s.money += amount;
      s.nationalIncome += amount;
      return;
    }
    const st = s.states[NR.stateOf(here)];
    const tax = amount * T.stateTax;
    st.budget += amount - tax;
    st.weekIncome += amount - tax; // a head of transportation splits what's left after tax
    st.weekTax += tax;
    s.money += tax;
    s.nationalTax += tax;
  }

  // A passenger or a load of cargo has arrived: collect the money.
  function deliverItem(s, p, here) {
    goalTick(s, p, here);
    if (p.kind) {
      const fee = NR.CARGO[p.kind].fee;
      earn(s, fee[0] + miles(city(p.from), city(here)) * fee[1], here, p.from);
      s.cargoDelivered[p.kind]++;
      emit("deliver", { at: here, cargo: p.kind });
      return;
    }
    s.delivered++;
    earn(s, fareFor(p, here), here, p.from);
    emit("deliver", { at: here });
    countGoals(s, here);
    if (NR.onStateDelivery) NR.onStateDelivery(s, p, here);
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
        if (type.touristsOnly && !p.tourist) return true; // Scenic trains take tourists only
        if (!type.carries) {
          p.premium = Math.max(p.premium || 1, type.fare);
          if (train.type === "commuter") p.commuter = true;
          if (train.type === "night") p.sleeper = true;
          if (train.type === "scenic") p.scenic = true;
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
      const type = typeOf(train);
      if (type.nightOnly && !NR.isNight(s)) return; // sleeper trains wait for nightfall
      let { n, dir } = nextStop(line, train);
      const here = line.stops[train.i];
      const key = segKey(here, line.stops[n]);
      if (s.damage[key]) {
        if (type.repairs) {
          // Work train: stop and repair, then carry on.
          if (train.repairing !== key) {
            train.repairing = key;
            train.wait = T.repairTime;
            return;
          }
          delete s.damage[key];
          train.repairing = null;
          rt.dirty = true;
          emit("repaired", { key, byWorkTrain: true });
        } else {
          // Other trains turn back at the damage, or wait if they are boxed in.
          const back = train.i - dir;
          if (back < 0 || back >= line.stops.length || s.damage[segKey(here, line.stops[back])]) {
            train.wait = 0.5;
            return;
          }
          dir = -dir;
          n = back;
        }
      }
      train.dir = dir;
      train.moving = true;
      train.t = 0;
      // Slower over mountain passes, hills and along the coast (see js/geography.js)
      train.segLen = NR.travelMiles ? NR.travelMiles(line, line.stops[train.i], line.stops[n]) : Math.max(1, miles(city(line.stops[train.i]), city(line.stops[n])));
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

  // ---------- Earthquakes and wildfires ----------
  // Every stretch of track on the map (each counted once).
  function allSegments(s) {
    const keys = new Set();
    s.lines.forEach((l) => {
      for (let i = 0; i + 1 < l.stops.length; i++) keys.add(segKey(l.stops[i], l.stops[i + 1]));
    });
    return [...keys];
  }
  // A wildfire in a county with mountain track, or an earthquake somewhere on the network.
  function californiaEvent(s) {
    // Track in a state a head of transportation is managing is looked after for you.
    const open = allSegments(s).filter((k) => !s.damage[k] && !NR.stateFrozen(s, NR.segmentPayer(...k.split("|"))));
    if (open.length < 2) return; // not much track yet: nothing happens
    const fireCounties = [...new Set(open.flatMap((k) => k.split("|")).filter((id) => city(id).type === "mountain").map((id) => city(id).county))];
    if (fireCounties.length && Math.random() < 0.5) {
      const county = pick(fireCounties);
      const hit = open.filter((k) => k.split("|").some((id) => city(id).county === county)).slice(0, T.fireStretches);
      hit.forEach((k) => (s.damage[k] = { since: s.time, cause: "fire" }));
      s.fire = { county, left: 3 * T.dayLength };
      emit("fire", { county, keys: hit });
    } else {
      const k = pick(open);
      s.damage[k] = { since: s.time, cause: "quake" };
      emit("quake", { key: k });
    }
    rt.dirty = true;
    sendWorkTrain(s);
  }

  // A Work train waiting in the depot goes by itself to a damaged line that has none.
  function sendWorkTrain(s) {
    if (!s.depot.work) return;
    const damaged = s.lines.filter(
      (l) => l.stops.some((id, i) => i && s.damage[segKey(l.stops[i - 1], id)]) && !NR.trainsOn(s, l).some((t) => t.type === "work")
    );
    for (const line of damaged) {
      if (NR.addTrain(s, line, "work")) {
        emit("workSent", { lineId: line.id, color: line.color });
        return;
      }
    }
  }

  // ---------- State budgets and heads of transportation ----------
  // A head of transportation works for a state just like for a city (see js/metro.js):
  // 3 weeks settling in (you still run the state), then 100 weeks managing it safely
  // (stations never overflow, track and trains inside the state are frozen, no new counties
  // or towns, management keeps 90% of the state's profit), then the state is yours again.
  const weeks = (n) => n * T.weekLength;
  NR.stateHeadState = function (s, code) {
    const h = s.states[code] && s.states[code].head;
    if (!h) return null;
    return s.time < h.from ? "settling" : "managing";
  };
  NR.stateFrozen = (s, code) => code !== "national" && NR.stateHeadState(s, code) === "managing";
  // What the state's own track and trains cost to build, in $k.
  NR.stateInfraValue = function (s, code) {
    let value = 0;
    s.lines.forEach((l) => {
      value += NR.chainBill(l.stops, l.grade, 1, l)[code] || 0;
      if (NR.linePayer(l) === code) NR.trainsOn(s, l).forEach((t) => (value += typeOf(t).price));
    });
    return value;
  };
  NR.stateHeadFee = (s, code) => Math.round(Math.max(T.headFeeBudget * s.states[code].budget, T.headFeeInfra * NR.stateInfraValue(s, code)));
  // Why a head can't be hired right now, or null if one can.
  NR.stateHeadProblem = function (s, code) {
    const st = s.states[code];
    if (!st.open) return "This state isn't open yet";
    if (st.head) return "A head of transportation is already in charge";
    if (!NR.stateInfraValue(s, code)) return "Build some track in the state first";
    if (!NR.canPay(s, { [code]: NR.stateHeadFee(s, code) })) return "Not enough money";
    return null;
  };
  NR.hireStateHead = function (s, code) {
    if (NR.stateHeadProblem(s, code)) return false;
    const fee = NR.stateHeadFee(s, code);
    NR.pay(s, { [code]: fee });
    s.states[code].head = { hired: s.time, from: s.time + weeks(T.headSettleWeeks), until: s.time + weeks(T.headSettleWeeks + T.headTermWeeks) };
    emit("stateHeadHired", { code, fee });
    return true;
  };

  // Every step: each state's clock, and its head of transportation starting or retiring.
  function updateStates(s, dt) {
    for (const [code, st] of Object.entries(s.states)) {
      if (!st.open) continue;
      if (st.head && !st.head.started && s.time >= st.head.from) {
        st.head.started = true;
        emit("stateHeadTakesOver", { code });
      }
      if (st.head && s.time >= st.head.until) {
        st.head = null; // the term is over: the state is yours again
        emit("stateHeadRetired", { code });
      }
      if (!NR.stateFrozen(s, code)) st.liveTime += dt; // a state only gets busier while you run it yourself
    }
  }

  // Once a week: each state pays the running costs of its own trains, and national money pays
  // for trains on lines that cross a border. While managed, management keeps 90% of a state's
  // profit and 10% goes to national money. National money covers any state that runs short.
  function stateWeek(s) {
    const upkeepOf = {};
    s.trains.forEach((t) => {
      const line = NR.lineById(s, t.lineId);
      NR.addToBill(upkeepOf, line ? NR.linePayer(line) : "national", typeOf(t).upkeep);
    });
    s.money -= upkeepOf.national || 0;
    s.nationalUpkeep = upkeepOf.national || 0;
    for (const [code, st] of Object.entries(s.states)) {
      if (!st.open) continue;
      const upkeep = upkeepOf[code] || 0;
      const profit = st.weekIncome - upkeep;
      st.budget -= upkeep;
      let toNational = 0;
      if (NR.stateFrozen(s, code) && profit > 0) {
        st.budget -= profit; // the profit leaves the state: 90% to management, 10% to national money
        toNational = profit * (1 - T.managementShare);
        s.money += toNational;
      }
      st.lastWeek = { income: st.weekIncome, tax: st.weekTax, upkeep, profit, toNational };
      st.weekTax = 0;
      st.weekIncome = 0;
      if (st.budget < 0) {
        s.money += st.budget;
        emit("stateShortfall", { code, amount: -st.budget });
        st.budget = 0;
      }
    }
    // National money below zero: the richest states cover it.
    if (s.money < 0) {
      const paid = [];
      const rich = Object.keys(s.states)
        .filter((code) => s.states[code].open && s.states[code].budget > 0)
        .sort((a, b) => s.states[b].budget - s.states[a].budget);
      for (const code of rich) {
        if (s.money >= 0) break;
        const take = Math.min(-s.money, s.states[code].budget);
        s.states[code].budget -= take;
        s.money += take;
        paid.push({ code, amount: take });
      }
      if (paid.length) emit("nationalRefill", { paid });
      if (s.money < 0) emit("nationalShort", { amount: -s.money });
    }
    s.nationalLastWeek = { income: s.nationalIncome, tax: s.nationalTax, upkeep: s.nationalUpkeep };
    s.nationalIncome = 0;
    s.nationalTax = 0;
  }

  // ---------- One step of the game ----------
  NR.update = function (s, dt) {
    if (s.over) return;
    if (rt.dirty) rebuildRoutes(s);
    s.time += dt;
    updateStates(s, dt);

    // A new city joins the map now and then.
    s.nextCityIn -= dt;
    if (s.nextCityIn <= 0) {
      addNextCity(s);
      const every = (NR.geoSetting && NR.geoSetting().townEvery) || T.cityEvery; // Gentle: towns come more slowly
      s.nextCityIn = rand(every[0], every[1]);
    }

    // Rush hour: one big city suddenly gets very busy for a while.
    if (s.rush) {
      s.rush.left -= dt;
      if (s.rush.left <= 0) s.rush = null;
    } else {
      s.rushIn -= dt;
      if (s.rushIn <= 0) {
        const settled = (st) => s.time - st.born > T.newStationGrace; // not brand-new stations
        const big = s.stations.filter((st) => city(st.id).size >= 4 && settled(st));
        if (big.length) {
          const st = big[Math.floor(Math.random() * big.length)];
          s.rush = { at: st.id, left: T.rushLength };
          st.spawnIn = Math.min(st.spawnIn, 0.4);
          emit("rush", { at: st.id });
        }
        s.rushIn = rand(T.rushEvery[0], T.rushEvery[1]);
      }
    }

    // Passengers appear. Busy cities make more, and each state gets busier the longer you run it.
    s.stations.forEach((st) => {
      // Gentle: busier more slowly than Tough (NR.GEO in js/geography.js)
      const pressure = 1 + s.states[NR.stateOf(st.id)].liveTime / (NR.geoSetting ? NR.geoSetting().growth : 240);
      st.spawnIn -= dt;
      if (st.spawnIn <= 0) {
        const to = pickDestination(s, st);
        if (to) st.waiting.push({ id: s.nextId++, to, from: st.id });
        const rushBoost = s.rush && s.rush.at === st.id ? 3 : 1;
        const nightCalm = NR.isNight(s) ? 0.6 : 1; // fewer people travel at night
        const viaCity = s.cities[st.id] ? 0.7 : 1; // with a city network, many trips start in the neighborhoods
        st.spawnIn = (11 / (0.6 + 0.25 * city(st.id).size) / pressure / rushBoost / nightCalm / viaCity) * rand(0.7, 1.3);
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

    // Tourists leave Metro cities for scenic places, three times as often at weekends.
    if (s.stations.some((st) => city(st.id).scenic)) {
      s.touristIn -= dt;
      if (s.touristIn <= 0) {
        const metros = s.stations.filter((st) => city(st.id).type === "metro" && !city(st.id).scenic);
        if (metros.length) {
          const st = pick(metros);
          st.waiting.push({ id: s.nextId++, to: "@scenic", from: st.id, tourist: true });
        }
        const weekend = Math.floor(s.time / T.dayLength) % 7 >= 5;
        s.touristIn = rand(T.touristEvery[0], T.touristEvery[1]) / (weekend ? 3 : 1);
      }
    }

    // Flights land at your airports with a burst of travelers.
    s.flightIn -= dt;
    if (s.flightIn <= 0) {
      const airports = s.stations.filter((st) => city(st.id).airport && s.time - st.born > T.newStationGrace); // not brand-new stations
      if (airports.length) {
        const st = pick(airports);
        let landed = 0;
        for (; landed < T.flightLoad; landed++) {
          const to = pickDestination(s, st);
          if (!to) break;
          st.waiting.push({ id: s.nextId++, to, from: st.id, air: true });
        }
        if (landed) emit("flight", { at: st.id, landed });
      }
      s.flightIn = rand(T.flightEvery[0], T.flightEvery[1]);
    }

    // Earthquakes and wildfires damage track. It mends by itself after a week,
    // or right away when a Work train reaches it.
    s.eventIn -= dt;
    if (s.eventIn <= 0) {
      californiaEvent(s);
      s.eventIn = rand(T.eventEvery[0], T.eventEvery[1]);
    }
    for (const [key, d] of Object.entries(s.damage)) {
      if (s.time - d.since > T.selfRepair) {
        delete s.damage[key];
        rt.dirty = true;
        emit("repaired", { key, byWorkTrain: false });
      }
    }
    if (s.fire) {
      s.fire.left -= dt;
      if (s.fire.left <= 0) s.fire = null;
    }

    if (rt.dirty) rebuildRoutes(s);
    s.trains.forEach((tr) => updateTrain(s, tr, dt));
    updateGoals(s, dt);
    if (NR.updateCities) {
      NR.updateCities(s, dt); // trams, metro and cable cars (js/metro.js)
      if (s.over) return;
    }

    // Overcrowding: a station that stays too full for too long ends the game.
    // While a head of transportation manages a state, or while you are looking at a city map
    // (rt.viewing, set by js/ui.js), stations are kept at most half full instead (extra
    // passengers take the bus): only the map you're looking at can be lost.
    for (const st of s.stations) {
      if (rt.viewing || NR.stateFrozen(s, NR.stateOf(st.id))) {
        const calm = Math.floor(T.stationRoom / 2);
        if (st.waiting.length > calm) st.waiting.length = calm;
        st.crowd = 0;
        continue;
      }
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
      if (NR.cityWeek) NR.cityWeek(s); // each city pays its own running costs from its budget
      stateWeek(s); // each state pays for its trains; national money for trains across borders
      s.lastWeek = { income: s.weekIncome, upkeep };
      s.weekIncome = 0;
      if (s.mode === "timed" && week >= T.timedWeeks) {
        s.over = true;
        emit("timeup", {});
        return;
      }
      emit("week", { week });
    }

    if (s.mode === "levels" && !s.levelDone && s.levelGoals.length && s.levelGoals.every((g) => g.done)) {
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
  // Is a stretch of a line's track dug as a tunnel under a pass? (js/geography.js)
  const tunneled = (line, a, b) => !!(NR.tunneled && NR.tunneled(line, a, b));
  // Price of track through a list of stops, in $k (line: the line it belongs to, if any).
  NR.chainPrice = (chain, grade, line) => {
    let p = 0;
    for (let i = 0; i + 1 < chain.length; i++) p += NR.trackPrice(chain[i], chain[i + 1], grade, tunneled(line, chain[i], chain[i + 1]));
    return p;
  };
  // What the track of a line cost to build, in $k.
  NR.lineValue = (l) => NR.chainPrice(l.stops, l.grade, l);
  // The same, as a bill: each stretch is paid by its state, or by national money across a border.
  NR.chainBill = (chain, grade, share = 1, line) => {
    const bill = {};
    for (let i = 0; i + 1 < chain.length; i++)
      NR.addToBill(bill, NR.segmentPayer(chain[i], chain[i + 1]), NR.trackPrice(chain[i], chain[i + 1], grade, tunneled(line, chain[i], chain[i + 1])) * share);
    return bill;
  };
  // Why track can't be laid through these stops (mountains too wide, water too wide), or null.
  NR.chainBlocked = (chain) => {
    for (let i = 0; i + 1 < chain.length; i++) {
      const why = NR.blockedReason && NR.blockedReason(chain[i], chain[i + 1]);
      if (why) return why;
    }
    return null;
  };
  // Track inside a state that a head of transportation is managing can't change.
  NR.chainFrozen = (s, chain) => chain.some((id, i) => i > 0 && NR.stateFrozen(s, NR.segmentPayer(chain[i - 1], id)));
  NR.lineFrozen = (s, line) => NR.chainFrozen(s, line.stops);
  NR.freeColor = (s) => {
    for (let c = 0; c < s.linesUnlocked; c++) if (!s.lines.some((l) => l.color === c)) return c;
    return -1;
  };
  NR.depotCount = (s) => Object.values(s.depot).reduce((a, b) => a + b, 0);
  // The first train type waiting in the depot that can run on this line.
  // (Only passenger trains are placed automatically; cargo trains wait for you to choose a line.)
  const depotTypeFor = (s, line) =>
    Object.keys(NR.TRAIN_TYPES).find((k) => !NR.TRAIN_TYPES[k].carries && s.depot[k] > 0 && NR.canAddTrain(s, line, k).ok);

  NR.createLine = function (s, stops, color) {
    if (NR.chainBlocked(stops)) return null;
    const line = { id: s.nextId++, color, stops: stops.slice(), grade: "standard", tunnels: [] };
    NR.pay(s, NR.chainBill(stops, "standard"));
    s.lines.push(line);
    rt.dirty = true;
    const type = depotTypeFor(s, line);
    if (type) NR.addTrain(s, line, type);
    return line;
  };

  // added = new stops in the order they were dragged, starting next to the old end.
  NR.extendLine = function (s, line, atHead, added) {
    const end = atHead ? line.stops[0] : line.stops[line.stops.length - 1];
    if (NR.chainBlocked([end, ...added])) return false;
    NR.pay(s, NR.chainBill([end, ...added], line.grade));
    if (atHead) {
      line.stops.unshift(...added.slice().reverse());
      NR.trainsOn(s, line).forEach((t) => (t.i += added.length));
    } else {
      line.stops.push(...added);
    }
    rt.dirty = true;
  };

  // Price of upgrading a whole line to high-speed track, in $k.
  // The difference between high-speed and standard track (more over mountains and water).
  NR.upgradeBill = (line) => {
    const bill = {};
    for (let i = 0; i + 1 < line.stops.length; i++) {
      const [a, b] = [line.stops[i], line.stops[i + 1]];
      const t = tunneled(line, a, b);
      NR.addToBill(bill, NR.segmentPayer(a, b), NR.trackPrice(a, b, "high", t) - NR.trackPrice(a, b, "standard", t));
    }
    return bill;
  };
  NR.highSpeedUpgradePrice = (line) => Object.values(NR.upgradeBill(line)).reduce((a, b) => a + b, 0);
  NR.upgradeLine = function (s, line) {
    const bill = NR.upgradeBill(line);
    if (line.grade === "high" || NR.lineFrozen(s, line) || !NR.canPay(s, bill)) return false;
    NR.pay(s, bill);
    line.grade = "high";
    return true;
  };

  // Can a train of this type run on this line? Returns { ok, reason, fromDepot }.
  NR.canAddTrain = function (s, line, type) {
    const t = NR.TRAIN_TYPES[type];
    if (s.week < t.unlockWeek) return { ok: false, reason: `Unlocks in week ${t.unlockWeek + 1}` };
    if (NR.lineFrozen(s, line)) return { ok: false, reason: "Frozen while managed" };
    if (t.needsHighSpeed && line.grade !== "high") return { ok: false, reason: "Needs high-speed track" };
    if (t.needsPort && !line.stops.some((id) => city(id).port)) return { ok: false, reason: "Needs a port on the line" };
    if (t.needsAirport && !line.stops.some((id) => city(id).airport)) return { ok: false, reason: "Needs an airport on the line" };
    if (t.maxLineMiles && NR.lineMiles(line) > t.maxLineMiles) return { ok: false, reason: `Only on lines up to ${t.maxLineMiles} mi` };
    if (line.stops.filter((id) => serves(type, id)).length < 2) return { ok: false, reason: "Needs 2 cities it stops at" };
    if (s.depot[type] > 0) return { ok: true, fromDepot: true };
    if (!NR.canPay(s, { [NR.linePayer(line)]: t.price })) return { ok: false, reason: `Costs ${NR.money(t.price)}` };
    return { ok: true, fromDepot: false };
  };

  // Put a train on a line: from the depot if one is waiting, otherwise buy it.
  NR.addTrain = function (s, line, type = "regular") {
    const check = NR.canAddTrain(s, line, type);
    if (!check.ok) return false;
    if (check.fromDepot) s.depot[type]--;
    else NR.pay(s, { [NR.linePayer(line)]: NR.TRAIN_TYPES[type].price }); // the line's state, or national money across borders
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
    if (line && NR.lineFrozen(s, line)) return false;
    if (line) dropOff(s, train, line);
    s.trains = s.trains.filter((t) => t !== train);
    s.depot[train.type]++;
    rt.dirty = true;
    return true;
  };

  // Delete a line: its trains go back to the depot and part of the track cost comes back.
  NR.deleteLine = function (s, line) {
    if (NR.lineFrozen(s, line)) return false;
    NR.trainsOn(s, line).forEach((t) => {
      dropOff(s, t, line);
      s.depot[t.type]++;
    });
    s.trains = s.trains.filter((t) => t.lineId !== line.id);
    s.lines = s.lines.filter((l) => l !== line);
    NR.refund(s, NR.chainBill(line.stops, line.grade, T.refundShare, line));
    rt.dirty = true;
    return true;
  };

  // Put trains waiting in the depot onto lines that have none.
  NR.assignIdleTrains = function (s) {
    s.lines.forEach((l) => {
      if (NR.trainsOn(s, l).length) return;
      const type = depotTypeFor(s, l);
      if (type) NR.addTrain(s, l, type);
    });
  };

  // ---------- Goals and contracts ----------
  // Level checklists and contracts are both lists of goals: { kind, target, progress, done } plus details.
  //   totalPassengers  passengers delivered since the game began
  //   passengers       passengers delivered while the goal is active
  //   route            passengers from station `a` delivered at station `b`
  //   cargo            loads of `cargo` delivered (only `from` one station / `to` one station, if given)
  //   counties         counties owned
  //   connect          stations `a` and `b` joined by rail (target 1)
  //   hasTrain         trains of type `train` running
  //   noCrowding       seconds in a row with no overcrowded station
  const makeGoal = (spec) => Object.assign({ target: 1, progress: 0, done: false }, spec);
  function makeLevelGoals(level) {
    return NR.LEVELS[level].goals.map(makeGoal);
  }

  // Can you ride from station a to station b on your lines (any trains)?
  function connected(s, a, b) {
    if (!NR.stationById(s, a) || !NR.stationById(s, b)) return false;
    const next = {};
    s.lines.forEach((l) => {
      for (let i = 0; i + 1 < l.stops.length; i++) {
        (next[l.stops[i]] ||= []).push(l.stops[i + 1]);
        (next[l.stops[i + 1]] ||= []).push(l.stops[i]);
      }
    });
    const seen = new Set([a]);
    const queue = [a];
    for (let q = 0; q < queue.length; q++) (next[queue[q]] || []).forEach((v) => !seen.has(v) && (seen.add(v), queue.push(v)));
    return seen.has(b);
  }
  NR.connected = connected;

  // Goals whose progress is read from the game state rather than counted.
  const stateGoal = {
    totalPassengers: (s) => s.delivered,
    counties: (s) => s.owned.length,
    connect: (s, g) => (connected(s, g.a, g.b) ? 1 : 0),
    hasTrain: (s, g) => s.trains.filter((t) => t.type === g.train).length,
  };

  // Plain-language description of a goal, for the screen.
  NR.describeGoal = function (g) {
    const name = (id) => city(id).name;
    const loads = { produce: "crates of produce", containers: "containers", trucks: "trucks" };
    switch (g.kind) {
      case "totalPassengers":
        return `Deliver ${g.target} passengers in total`;
      case "passengers":
        return `Deliver ${g.target} passengers`;
      case "tourists":
        return `Bring ${g.target} tourists to scenic places`;
      case "route":
        return `Deliver ${g.target} passengers from ${name(g.a)} to ${name(g.b)}`;
      case "cargo":
        if (g.cargo === "trucks") return `Take ${g.target} trucks off the road`;
        return `Move ${g.target} ${loads[g.cargo]}` + (g.from ? ` from the ${city(g.from).port || name(g.from)}` : "") + (g.to ? ` to ${name(g.to)}` : "");
      case "counties":
        return `Own ${g.target} counties`;
      case "connect":
        return `Connect ${name(g.a)} and ${name(g.b)} by rail`;
      case "hasTrain":
        return g.target > 1 ? `Run ${g.target} ${NR.trainLabel(g.train)}s` : `Run a ${NR.trainLabel(g.train)}`;
      case "noCrowding":
        return `Keep every station uncrowded for ${Math.round(g.target / T.dayLength)} days in a row`;
      default:
        return g.kind;
    }
  };
  // Progress for the screen, like "6/15".
  NR.goalProgressText = (g) =>
    g.kind === "noCrowding"
      ? `${Math.min(Math.floor(g.progress / T.dayLength), Math.round(g.target / T.dayLength))}/${Math.round(g.target / T.dayLength)} days`
      : g.kind === "connect"
        ? g.progress ? "Connected" : "Not yet"
        : `${Math.min(Math.floor(g.progress), g.target)}/${g.target}`;

  // A delivery counts toward goals that track deliveries.
  function goalTick(s, p, here) {
    for (const g of [...s.contracts, ...s.levelGoals]) {
      if (g.done) continue;
      if (g.kind === "passengers" && !p.kind) g.progress++;
      else if (g.kind === "tourists" && p.tourist) g.progress++;
      else if (g.kind === "route" && !p.kind && p.from === g.a && here === g.b) g.progress++;
      else if (g.kind === "cargo" && p.kind === g.cargo && (!g.from || p.from === g.from) && (!g.to || here === g.to)) g.progress++;
    }
  }

  function refreshGoal(s, g, dt, crowded) {
    if (g.done) return;
    if (stateGoal[g.kind]) g.progress = stateGoal[g.kind](s, g);
    else if (g.kind === "noCrowding") g.progress = crowded ? 0 : g.progress + dt;
    if (g.progress >= g.target) g.done = true;
  }

  // ---- Contract offers ----
  const pick = (list) => list[Math.floor(Math.random() * list.length)];
  const roll = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  // Two stations on the map between minMi and maxMi apart (and passing `test`), or null.
  function stationPair(s, minMi, maxMi, test) {
    const ids = s.stations.map((st) => st.id);
    for (let tries = 0; tries < 40; tries++) {
      const a = pick(ids);
      const b = pick(ids);
      if (a === b) continue;
      const d = miles(city(a), city(b));
      if (d >= minMi && d <= maxMi && (!test || test(a, b))) return { a, b, d };
    }
    return null;
  }
  // A free cargo train as a reward, but only if you don't have that kind of train yet.
  const starterTrain = (s, type) => (s.trains.some((t) => t.type === type) || s.depot[type] ? null : type);

  // Each contract kind: how often it comes up, and how to make one (null if it doesn't fit right now).
  // days = time allowed, money = reward in $k, train = a free train as an extra reward.
  const CONTRACTS = [
    {
      weight: 3,
      make: (s) => {
        // In "type of place" mode a passenger only travels to a different kind of place.
        const p = stationPair(s, 30, 250, (a, b) => s.style === "city" || city(a).type !== city(b).type);
        if (!p) return null;
        const n = roll(8, 15);
        return { kind: "route", a: p.a, b: p.b, target: n, days: 14, money: Math.round(40 + n * 4 + p.d * 0.3) };
      },
    },
    {
      weight: 2,
      make: (s) => {
        const p = stationPair(s, 40, 300, (a, b) => !connected(s, a, b));
        return p && { kind: "connect", a: p.a, b: p.b, days: 7, money: Math.round(60 + p.d * 0.4) };
      },
    },
    {
      weight: 2,
      make: (s) => {
        const metros = s.stations.filter((st) => city(st.id).type === "metro");
        if (!metros.length || !s.stations.some((st) => city(st.id).type === "farm")) return null;
        const n = roll(8, 14);
        return { kind: "cargo", cargo: "produce", to: pick(metros).id, target: n, days: 14, money: 60 + n * 8, train: starterTrain(s, "freight") };
      },
    },
    {
      weight: 2,
      make: (s) => {
        const ports = s.stations.filter((st) => city(st.id).port);
        if (!ports.length) return null;
        const n = roll(8, 16);
        return { kind: "cargo", cargo: "containers", from: pick(ports).id, target: n, days: 14, money: 70 + n * 8, train: starterTrain(s, "dock") };
      },
    },
    {
      weight: 1,
      make: (s) =>
        s.week < NR.TRAIN_TYPES.truck.unlockWeek ? null : { kind: "cargo", cargo: "trucks", target: 10, days: 14, money: 150, train: starterTrain(s, "truck") },
    },
    {
      weight: 1,
      make: (s) =>
        NR.MAP.regions.filter((r) => NR.countyStatus(s, r.id).ok).length < 2 ? null : { kind: "counties", target: s.owned.length + 2, days: 14, money: 120 },
    },
    { weight: 1, make: () => ({ kind: "noCrowding", target: 3 * T.dayLength, days: 7, money: 90 }) },
    {
      weight: 1,
      make: (s) =>
        s.stations.some((st) => city(st.id).scenic) ? { kind: "tourists", target: roll(6, 10), days: 14, money: 130, train: starterTrain(s, "scenic") } : null,
    },
  ];

  function offerContract(s) {
    for (let tries = 0; tries < 12; tries++) {
      const spec = pickWeighted(CONTRACTS, (c) => c.weight).make(s);
      if (!spec) continue;
      const same = (c) => c.kind === spec.kind && c.a === spec.a && c.b === spec.b && c.cargo === spec.cargo;
      if (s.contracts.some(same)) continue;
      const { days, money, train, ...goal } = spec;
      const c = makeGoal(Object.assign(goal, { id: s.nextId++, deadline: s.time + days * T.dayLength, reward: { money, train: train || null } }));
      if (stateGoal[c.kind]) c.progress = stateGoal[c.kind](s, c);
      s.contracts.push(c);
      emit("contract", { id: c.id });
      return c;
    }
    return null;
  }

  // Turn down a contract you don't want (makes room for another).
  NR.dismissContract = function (s, id) {
    s.contracts = s.contracts.filter((c) => c.id !== id);
  };
  // What a contract pays, as text.
  NR.rewardText = (r) => NR.money(r.money) + (r.train ? ` + a free ${NR.trainLabel(r.train)}` : "");

  function updateGoals(s, dt) {
    const crowded = s.stations.some((st) => st.waiting.length > T.stationRoom);
    s.levelGoals.forEach((g) => refreshGoal(s, g, dt, crowded));
    for (const c of s.contracts.slice()) {
      refreshGoal(s, c, dt, crowded);
      if (c.done) {
        s.money += c.reward.money; // rewards are national money
        if (c.reward.train) s.depot[c.reward.train]++;
        s.contracts = s.contracts.filter((x) => x !== c);
        s.contractsDone++;
        emit("contractDone", { text: NR.describeGoal(c), reward: c.reward });
      } else if (s.time > c.deadline) {
        s.contracts = s.contracts.filter((x) => x !== c);
        emit("contractExpired", { text: NR.describeGoal(c) });
      }
    }
    s.contractIn -= dt;
    if (s.contractIn <= 0) {
      if (s.contracts.length < 3) offerContract(s);
      s.contractIn = rand(30, 50);
    }
  }

  // ---------- Weekly upgrades ----------
  NR.UPGRADES = {
    grant: { title: "Federal grant", text: `${NR.money(T.grant)} of national money to spend anywhere.`, ok: () => true, apply: (s) => (s.money += T.grant) },
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
  // Two upgrades to choose from. When every line color is in use, one of them is always "New line".
  NR.upgradeChoices = (s) => {
    const keys = shuffle(Object.keys(NR.UPGRADES).filter((k) => NR.UPGRADES[k].ok(s)));
    if (NR.freeColor(s) >= 0 || !keys.includes("line")) return keys.slice(0, 2);
    return shuffle(["line", ...keys.filter((k) => k !== "line").slice(0, 1)]);
  };

  // ---------- Buying a line color ----------
  // A new line color costs money: national money pays, and the richest states cover what it can't.
  NR.lineColorPrice = (s) => T.lineColorPrice[0] + T.lineColorPrice[1] * Math.max(0, s.linesBought || 0);
  const nationalReach = (s) => Math.max(0, s.money) + Object.values(s.states).reduce((n, st) => n + (st.open ? Math.max(0, st.budget) : 0), 0);
  NR.canBuyLineColor = (s) => s.linesUnlocked < T.maxLines && nationalReach(s) >= NR.lineColorPrice(s);
  NR.buyLineColor = function (s) {
    if (!NR.canBuyLineColor(s)) return false;
    let left = NR.lineColorPrice(s);
    const own = Math.min(left, Math.max(0, s.money));
    s.money -= own;
    left -= own;
    for (const st of Object.values(s.states).filter((x) => x.open).sort((a, b) => b.budget - a.budget)) {
      if (left <= 0) break;
      const take = Math.min(left, Math.max(0, st.budget));
      st.budget -= take;
      left -= take;
    }
    s.linesUnlocked++;
    s.linesBought = (s.linesBought || 0) + 1;
    return true;
  };
  // The week when earthquakes and wildfires begin (counted from 0, like s.week).
  NR.disasterWeek = () => Math.round(T.firstEvent / T.weekLength);
  // Every week a new Regular train arrives in the depot. The week disasters begin,
  // a free Work train arrives too, so you can repair track straight away.
  NR.weekBonus = (s) => {
    s.depot.regular++;
    if (s.week === NR.disasterWeek() && !s.workTrainGift) {
      s.depot.work++;
      s.workTrainGift = true;
    }
    NR.assignIdleTrains(s);
  };

  // ---------- Levels ----------
  NR.nextLevel = function (s) {
    s.money += T.levelReward;
    s.levelDone = false;
    if (s.level + 1 >= NR.LEVELS.length) {
      s.mode = "endless"; // every level beaten: carry on in Endless
      s.levelGoals = [];
      s.levelsBeaten = true;
      openMoreStates(s); // the neighboring states open
      return;
    }
    s.level++;
    NR.LEVELS[s.level].areas.forEach((a) => {
      if (!s.areas.includes(a)) s.areas.push(a); // its counties can now be unlocked
    });
    s.levelGoals = makeLevelGoals(s.level);
  };

  // After a failed level: keep the network and switch to Endless.
  NR.continueEndless = function (s, stationId) {
    const st = NR.stationById(s, stationId);
    if (st) st.waiting = [];
    s.stations.forEach((x) => (x.crowd = 0));
    s.mode = "endless";
    s.areas = allAreas();
    s.levelGoals = [];
    s.over = false;
  };

  // ---------- Saving a copy (used for "Retry level") ----------
  NR.save = (s) => JSON.stringify(s);
  NR.load = (text) => {
    const s = JSON.parse(text);
    NR.setHome(s.home || "CA"); // games saved before you could choose started in California
    rt.geoLevel = s.geo || "gentle";
    rt.dirty = true;
    rt.events.length = 0;
    return s;
  };
})();
