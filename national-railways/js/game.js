// National Railways: the game rules.
// Stations, lines, trains, passengers, weeks and levels. Nothing is drawn here.
(function () {
  "use strict";
  const NR = window.NR;

  // ---- Tuning: change these numbers to make the game easier or harder ----
  const T = (NR.TUNING = {
    dayLength: 10, // real seconds per in-game day
    timedWeeks: 4, // how many weeks the Timed challenge lasts
    startMoney: 400, // the home state's budget at the start, in thousands (400 = 400k)
    nationalStart: 0, // national money at the start ($k)
    newStateBudget: 200, // budget a state gets when it opens ($k)
    stateTax: 0.1, // share of every fare and cargo fee a state pays to national money
    trackPrice: 1, // $k per mile of standard track
    highSpeedPrice: 1.5, // extra $k per mile for high-speed track
    refundShare: 0.5, // share of the track cost you get back when you delete a line
    grant: 150, // $k of national money from a federal grant
    // Lines come in groups, each with its own set (see "Lines: state, national, international"):
    stateLines: [4, 10], // each open state: lines at the start, and the most it can have
    nationalLines: [2, 3], // once a country has 2 open states: lines at the start, and the most per open state
    intlLines: [1, 8], // across the US–Canada border: lines at the start, and the most
    lineColorPrice: [100, 50], // k for one more line in a group: the first one, then this much more each
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
    // Station upgrades: each level holds more riders and cargo, and riders change trains faster.
    // room: × stationRoom and yardRoom; change: × the time each rider or load takes to get on or off
    linkMiles: 60, // emergency links join two stations up to this many track miles apart
    linkPriceFactor: 20, // and cost this many times the price of normal track
    stationLevels: [
      { name: "Station", price: 0, room: 1, change: 1 },
      { name: "Interchange", price: 150, room: 2, change: 0.6 },
      { name: "Grand terminal", price: 400, room: 3, change: 0.4 },
    ],
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
  NR.SAVE_VERSION = 15; // bump when saved games from older versions no longer fit (14: each country's money; 15: line groups)

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

  // Money is counted in thousands: 400 means 400k, shown in the currency of whoever pays or gets
  // it: FB400k (Freedom Bucks, the US) or MC400k (Maple Coins, Canada), always worth the same.
  // where: a state, province or country code (the home country when left out).
  NR.money = (k, where) => {
    const sign = NR.COUNTRIES[NR.countryOf(where || NR.HOME_STATE)].sign;
    const v = Math.round(k);
    const a = Math.abs(v);
    const minus = v < 0 ? "−" : "";
    return a >= 1000 ? `${minus}${sign}${(a / 1000).toFixed(2)}M` : `${minus}${sign}${a}k`;
  };
  // A bill as money: "FB30k", or "FB15k + MC15k" when two countries share it.
  NR.billMoney = (bill) => {
    const by = {};
    for (const [p, amount] of Object.entries(bill)) {
      const c = NR.countryOf(p);
      by[c] = (by[c] || 0) + amount;
    }
    const parts = Object.entries(by).map(([c, amount]) => NR.money(amount, c));
    return parts.length ? parts.join(" + ") : NR.money(0);
  };

  // Every place on the map (county main stations and towns) and every county, of the states
  // loaded so far: worked out again each time more states load.
  NR.reindex = function () {
    NR.PLACES = [...NR.CITIES, ...NR.TOWNS];
    NR.cityById = {};
    NR.PLACES.forEach((c) => (NR.cityById[c.id] = c));
    // Counties: their shape and neighbors (from the map file) and their main station.
    NR.countyById = {};
    NR.MAP.regions.forEach((r) => (NR.countyById[r.id] = r));
    NR.mainStation = {};
    NR.CITIES.forEach((c) => (NR.mainStation[c.county] = c));
  };
  NR.reindex();
  NR.onPacksChanged(NR.reindex);
  const city = (id) => NR.cityById[id];

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
  // Each state (or province) has its own budget. Fares and cargo fees come in, and it pays for
  // its track, trains and counties. Across a border (between two states, or the US and Canada)
  // the states share: track by how much of it lies on each one's land, trains by how much of
  // their line does, and each fare by the miles the trip rode on each one's land. Each country
  // has its own national money (US national money in Freedom Bucks, Canadian federal money in
  // Maple Coins): it gets a 10% tax on its states' fares, contract rewards, grants and level
  // bonuses, and covers any of its states that runs short (a state spends its own budget first).
  // If a country's national money ends a week below zero, its richest state covers it. Money
  // never moves between countries, and can't be moved between budgets by hand.
  NR.STATE_NAMES = Object.fromEntries(Object.values(NR.AREAS).map((a) => [a.code, a.name]));
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
  // A payer is a state (its budget) or a country ("USA", "CAN": its national money).
  const isNation = (p) => !!NR.COUNTRIES[p] || p === "national";
  // A country's national money in this game: { money, income, tax, upkeep, lastWeek }.
  NR.nation = (s, country) => {
    const c = NR.countryOf(country);
    return s.nations[c] || (s.nations[c] = { money: 0, income: 0, tax: 0, upkeep: 0, lastWeek: null });
  };
  // ---- How much of a stretch of track lies on each state's land ----
  // Track runs straight between two stations. Points along it (about every 2 miles) are tested
  // against each state's land; points over water don't count. Worked out once per stretch.
  const ringBoxes = new WeakMap();
  const boxedRings = (rings) => {
    if (!ringBoxes.has(rings))
      ringBoxes.set(
        rings,
        rings.map((ring) => {
          const b = [Infinity, Infinity, -Infinity, -Infinity];
          for (let i = 0; i < ring.length; i += 2) {
            b[0] = Math.min(b[0], ring[i]);
            b[1] = Math.min(b[1], ring[i + 1]);
            b[2] = Math.max(b[2], ring[i]);
            b[3] = Math.max(b[3], ring[i + 1]);
          }
          return { ring, b };
        })
      );
    return ringBoxes.get(rings);
  };
  function inRing(x, y, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
      const xi = ring[i], yi = ring[i + 1], xj = ring[j], yj = ring[j + 1];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  // The state whose land this point is on (of the states loaded so far), or null (water)
  NR.stateAt = (lon, lat) => {
    for (const st of NR.MAP.states) {
      const rings = boxedRings(NR.MAP.stateLand[st.code]);
      if (rings.reduce((n, o) => (lon >= o.b[0] && lon <= o.b[2] && lat >= o.b[1] && lat <= o.b[3] && inRing(lon, lat, o.ring) ? !n : n), false)) return st.code;
    }
    return null;
  };
  const landCache = new Map();
  function landOn(a, b) {
    const key = (a < b ? `${a}|${b}` : `${b}|${a}`) + `|${NR.packVersion}`;
    if (landCache.has(key)) return landCache.get(key);
    const A = city(a), B = city(b);
    const n = Math.max(8, Math.min(240, Math.round(miles(A, B) / 2)));
    const land = {};
    for (let k = 0; k < n; k++) {
      const f = (k + 0.5) / n;
      const code = NR.stateAt(A.lon + (B.lon - A.lon) * f, A.lat + (B.lat - A.lat) * f);
      if (code) land[code] = (land[code] || 0) + 1;
    }
    landCache.set(key, land);
    return land;
  }
  // Who pays for the track between two stations, as [state, share] pairs: their state, or across
  // a border the states it runs through (open ones only), by how much of it is on each one's land.
  NR.segmentShares = (a, b) => {
    const sa = NR.stateOf(a), sb = NR.stateOf(b);
    if (sa === sb) return [[sa, 1]];
    const open = NR.runtime.openStates;
    let parts = Object.entries(landOn(a, b)).filter(([code]) => !open || open.has(code));
    if (!parts.length) parts = [[sa, 1], [sb, 1]]; // all water: the two states share equally
    const total = parts.reduce((n, [, k]) => n + k, 0);
    return parts.map(([code, k]) => [code, k / total]).sort((p, q) => q[1] - p[1]);
  };
  // ---------- Emergency links ----------
  // A link joins two stations close together (up to T.linkMiles of track) for emergencies. It costs
  // T.linkPriceFactor times normal track, uses no line slot, and runs its own shuttle (a Regular
  // train that can't be moved) and no other trains. Its group is "link".
  NR.isLink = (l) => l.group === "link";
  NR.linkBill = (a, b) => NR.chainBill([a, b], "standard", T.linkPriceFactor);
  NR.linkBetween = (s, a, b) => s.lines.some((l) => NR.isLink(l) && l.stops.includes(a) && l.stops.includes(b));
  // Why these two stations can't be linked, or null
  NR.linkProblem = function (s, a, b) {
    if (a === b || !NR.stationById(s, a) || !NR.stationById(s, b)) return "Pick two stations on the map.";
    const mi = NR.trackMiles(a, b);
    if (mi > T.linkMiles) return `Emergency links reach ${T.linkMiles} miles of track at most: ${city(b).name} is ${mi}.`;
    const blocked = NR.blockedReason && NR.blockedReason(a, b);
    if (blocked) return `No track from ${city(a).name} to ${city(b).name}: ${blocked}`;
    if (NR.linkBetween(s, a, b)) return `${city(a).name} and ${city(b).name} are linked already.`;
    if (NR.chainFrozen(s, [a, b])) return "Track there can't change while its state is managed.";
    if (!NR.canPay(s, NR.linkBill(a, b))) return `This link costs ${NR.billMoney(NR.linkBill(a, b))}. Not enough money yet.`;
    return null;
  };
  // Up to 5 of the nearest stations a station could be linked to (money aside), nearest first
  NR.linkOptions = (s, id) =>
    s.stations
      .filter((st) => st.id !== id)
      .map((st) => ({ id: st.id, miles: NR.trackMiles(id, st.id) }))
      .filter((o) => o.miles <= T.linkMiles && !(NR.blockedReason && NR.blockedReason(id, o.id)) && !NR.linkBetween(s, id, o.id) && !NR.chainFrozen(s, [id, o.id]))
      .sort((p, q) => p.miles - q.miles)
      .slice(0, 5)
      .map((o) => Object.assign(o, { bill: NR.linkBill(id, o.id) }));
  NR.createLink = function (s, a, b) {
    if (NR.linkProblem(s, a, b)) return null;
    NR.pay(s, NR.linkBill(a, b));
    const line = { id: s.nextId++, group: "link", color: 0, stops: [a, b], grade: "standard", tunnels: [] };
    s.lines.push(line);
    // Its shuttle comes with it
    const train = { id: s.nextId++, lineId: line.id, type: "regular", shuttle: true, i: 0, dir: 1, t: 0, moving: false, wait: 0, segLen: 1, pax: [] };
    s.trains.push(train);
    rt.dirty = true;
    train.wait = serveStation(s, train, line);
    return line;
  };
  // A line's track, as a bill (an emergency link's at its higher price); share: the part of it
  NR.trackBill = (line, share = 1) => NR.chainBill(NR.lineChain(line), line.grade, share * (NR.isLink(line) ? T.linkPriceFactor : 1), line);

  // ---------- Loop lines ----------
  // A line can close into a circle (line.loop): its last stop then joins its first, which isn't
  // repeated in line.stops. These three helpers walk any line, loop or not.
  // Every stretch of a line's track, as [from, to] pairs (a loop's last stop back to its first too)
  NR.lineLegs = (l) => {
    const legs = [];
    for (let i = 0; i + 1 < l.stops.length; i++) legs.push([l.stops[i], l.stops[i + 1]]);
    if (l.loop && l.stops.length > 2) legs.push([l.stops[l.stops.length - 1], l.stops[0]]);
    return legs;
  };
  // Its stops in track order, with a loop's first stop again at the end (for prices and bills)
  NR.lineChain = (l) => (l.loop && l.stops.length > 2 ? [...l.stops, l.stops[0]] : l.stops);
  // The stop after stop i going in direction dir: a loop wraps round, an open line ends (-1)
  NR.stepIndex = (l, i, dir) => {
    const n = i + dir;
    if (l.loop && l.stops.length > 2) return (n + l.stops.length) % l.stops.length;
    return n >= 0 && n < l.stops.length ? n : -1;
  };

  // Who pays for a line's trains (price and running costs): the states it runs through, by how
  // many of its miles are on each one's land.
  NR.lineShares = (l) => {
    const by = {};
    for (const [a, b] of NR.lineLegs(l)) {
      const mi = Math.max(1, NR.trackMiles(a, b));
      for (const [code, share] of NR.segmentShares(a, b)) by[code] = (by[code] || 0) + mi * share;
    }
    const total = Object.values(by).reduce((n, v) => n + v, 0) || 1;
    return Object.entries(by)
      .map(([code, v]) => [code, v / total])
      .sort((p, q) => q[1] - p[1]);
  };
  // One payer (the one with the biggest share)
  NR.segmentPayer = (a, b) => NR.segmentShares(a, b)[0][0];
  NR.linePayer = (l) => NR.lineShares(l)[0][0];
  NR.payerName = (p) => (isNation(p) ? NR.nationalName(p) : `the ${NR.STATE_NAMES[p]} budget`);
  // "the Oregon budget", or "the California (67%) and Nevada (33%) budgets"
  NR.sharesName = (shares) =>
    shares.length === 1 ? NR.payerName(shares[0][0]) : `the ${NR.listWords(shares.map(([p, share]) => `${NR.STATE_NAMES[p] || p} (${Math.round(share * 100)}%)`))} budgets`;
  // Add an amount to a bill, split as the shares say
  NR.addShares = (bill, shares, amount) => {
    shares.forEach(([p, share]) => NR.addToBill(bill, p, amount * share));
    return bill;
  };
  // What a new train for this line costs, as a bill
  NR.trainBill = (line, type) => NR.addShares({}, NR.lineShares(line), NR.TRAIN_TYPES[type].price);
  // A bill is { CA: 30, national: 12 }: who pays how much ($k).
  NR.addToBill = (bill, payer, amount) => {
    bill[payer] = (bill[payer] || 0) + amount;
    return bill;
  };
  // National money a bill needs from each country: its own share, plus whatever that country's
  // states can't cover themselves, like { USA: 12 }.
  NR.nationalNeeds = (s, bill) => {
    const need = {};
    for (const [p, amount] of Object.entries(bill)) {
      const c = NR.countryOf(p);
      need[c] = (need[c] || 0) + (isNation(p) ? amount : Math.max(0, amount - Math.max(0, s.states[p].budget)));
    }
    return need;
  };
  // Can every country pay its part? (Each spends only its own money.)
  NR.canPay = (s, bill) => Object.entries(NR.nationalNeeds(s, bill)).every(([c, n]) => n <= Math.max(0, NR.nation(s, c).money) + 1e-6);
  NR.pay = (s, bill) => {
    for (const [p, amount] of Object.entries(bill)) {
      const nation = NR.nation(s, p);
      if (isNation(p)) {
        nation.money -= amount;
        continue;
      }
      const st = s.states[p];
      const own = Math.min(amount, Math.max(0, st.budget));
      st.budget -= own;
      nation.money -= amount - own; // the state's national money covers the rest
    }
  };
  // Money paid back goes to whoever paid.
  NR.refund = (s, bill) => {
    for (const [p, amount] of Object.entries(bill)) {
      if (isNation(p)) NR.nation(s, p).money += amount;
      else s.states[p].budget += amount;
    }
  };
  // What a payer can spend right now: its country's national money, plus the state's own budget.
  NR.spendable = (s, payer) => Math.max(0, NR.nation(s, payer).money) + (isNation(payer) ? 0 : Math.max(0, s.states[payer].budget));

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
    NR.gameStates().forEach(({ code }) => {
      const home = code === NR.HOME_STATE;
      // liveTime: seconds the state has run without a head in charge (it gets busier over this time)
      states[code] = { open: home, budget: home ? T.startMoney : 0, liveTime: 0, weekIncome: 0, weekTax: 0, lastWeek: null, head: null };
    });
    return states;
  }

  // ---------- Starting a game ----------
  // mode: "endless" | "timed" | "levels"    style: "type" | "city"    geo: "gentle" | "tough"
  // s.money is the home country's national money (the bottom bar shows it, and grants and level
  // bonuses go there). It isn't saved by itself: it reads and writes s.nations.
  function attachMoney(s) {
    Object.defineProperty(s, "money", {
      configurable: true,
      enumerable: false,
      get: () => NR.nation(s, s.home).money,
      set: (v) => (NR.nation(s, s.home).money = v),
    });
  }
  // The states open in this game (only their land counts when track crosses a border)
  const syncOpen = (s) => (NR.runtime.openStates = new Set(Object.keys(s.states).filter((code) => s.states[code].open)));
  // opts.test: Test mode (Settings): nothing can be lost (see the overflow check below)
  NR.newGame = function (mode, style, geo, home, opts) {
    NR.setHome(home || NR.HOME_STATE);
    if (mode === "levels" && !NR.LEVELS.length) mode = "endless"; // only some states have levels
    rt.geoLevel = geo || "gentle"; // how hard real geography is (see js/geography.js)
    const s = {
      mode,
      test: !!(opts && opts.test), // Test mode: overflowing stations clear instead of ending the game
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
      nations: {}, // each country's national money (see NR.nation)
      states: makeStates(), // each state's budget, head of transportation and so on
      levelsBeaten: false,
      weekIncome: 0, // fares and cargo fees this week, all states together
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
      lineGroups: {}, // lines bought or won per group: { CA: { extra, bought }, "nat-USA": ... }
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
    attachMoney(s);
    s.money = T.nationalStart; // the home country's national money
    syncOpen(s);
    NR.START_COUNTIES.forEach((id) => ownCounty(s, id, true));
    // A start of one region (Yukon) has one main station: its nearest town of another type opens
    // with it, so the first track has riders.
    if (s.stations.length === 1) {
      const first = city(s.stations[0].id);
      const town = NR.townPool(s).filter((t) => t.type !== first.type).sort((a, b) => miles(a, first) - miles(b, first))[0];
      if (town) addStation(s, town.id, true);
    }
    openMoreStates(s); // (a start that is the whole state, like Prince Edward Island's, opens its neighbors)
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
    while (landed < n && st.cargo.length < NR.yardRoom(st)) {
      st.cargo.push({ id: s.nextId++, kind, to: "@" + kind, from: st.id });
      landed++;
    }
    return landed;
  }

  NR.stationById = (s, id) => s.stations.find((st) => st.id === id);

  // ---------- Station upgrades: Interchange and Grand terminal ----------
  // "a" or "an" before a word ("an Interchange", "a Grand terminal")
  NR.article = (word) => (/^[aeiou]/i.test(word) ? "an" : "a");
  NR.stationLevel = (st) => T.stationLevels[Math.min(st.level || 0, T.stationLevels.length - 1)];
  // Riders a station holds before it starts to overflow, and loads of cargo its yard holds
  NR.stationRoom = (st) => T.stationRoom * NR.stationLevel(st).room;
  NR.yardRoom = (st) => T.yardRoom * NR.stationLevel(st).room;
  // The next level, or null at the top; it's paid from the station's state budget
  NR.nextStationLevel = (st) => T.stationLevels[(st.level || 0) + 1] || null;
  NR.stationUpgradeBill = (st) => {
    const next = NR.nextStationLevel(st);
    return next ? { [NR.stateOf(st.id)]: next.price } : null;
  };
  // Why a station can't be upgraded now, or null
  NR.stationUpgradeProblem = function (s, st) {
    const next = NR.nextStationLevel(st);
    if (!next) return `${NR.cityById[st.id].name} is ${NR.article(NR.stationLevel(st).name)} ${NR.stationLevel(st).name} already: the biggest there is.`;
    if (NR.stateFrozen(s, NR.stateOf(st.id))) return "Its state's head of transportation manages its stations for now.";
    if (!NR.canPay(s, NR.stationUpgradeBill(st))) return `${NR.article(next.name) === "an" ? "An" : "A"} ${next.name} costs ${NR.billMoney(NR.stationUpgradeBill(st))}. Not enough money yet.`;
    return null;
  };
  NR.upgradeStation = function (s, st) {
    if (NR.stationUpgradeProblem(s, st)) return false;
    NR.pay(s, NR.stationUpgradeBill(st));
    st.level = (st.level || 0) + 1;
    emit("stationUpgraded", { id: st.id, level: st.level });
    return true;
  };
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
    // Levels open the home state's counties step by step. (Other states' packs can have levels
    // of their own: those count only in a game that starts there.)
    if (code === s.home && countyArea(id) && !s.areas.includes(countyArea(id))) {
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

  // A state's neighbors (states that share a border with it, from packs/index.js) open once you
  // own every county in it. Beating every level counts as owning the home state.
  NR.stateNeighbors = (code) => ((NR.AREAS[code] && NR.AREAS[code].neighbors) || []).filter((n) => n !== code && NR.PACKS[n]);
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
      if (!s.states[code].open || !NR.isLoaded(code)) continue; // still loading: its counties aren't known yet
      const ownAll = NR.MAP.regions.every((r) => r.state !== code || s.owned.includes(r.id));
      if (!ownAll && !(code === NR.HOME_STATE && s.levelsBeaten)) continue;
      NR.stateNeighbors(code).forEach((n) => s.states[n] && !s.states[n].open && !opened.includes(n) && opened.push(n));
    }
    opened.forEach((code) => {
      s.states[code].open = true;
      s.states[code].budget += T.newStateBudget;
    });
    if (opened.length) {
      syncOpen(s);
      emit("statesOpen", { codes: opened });
    }
  }

  // A passenger delivered here counts toward the goals of locked neighboring counties.
  function countGoals(s, stationId) {
    for (const n of NR.countyById[city(stationId).county].neighbors) {
      if (!NR.countyById[n]) continue; // across a border, in a state not loaded yet
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
        for (const [a, b] of NR.lineLegs(l)) {
          if (s.damage[segKey(a, b)]) continue; // damaged track can't be used
          next[a].push(b);
          next[b].push(a);
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

  // Trains run to the end of their line, then turn around. On a loop they go round and round.
  function nextStop(line, train) {
    let dir = train.dir;
    let n = NR.stepIndex(line, train.i, dir);
    if (n < 0) {
      dir = -dir;
      n = NR.stepIndex(line, train.i, dir);
    }
    return { n, dir };
  }
  NR.nextStop = nextStop;

  // The next station ahead where this train will actually stop.
  function nextServedStop(line, train) {
    let i = train.i;
    let dir = train.dir;
    for (let k = 0; k < line.stops.length * 2; k++) {
      let n = NR.stepIndex(line, i, dir);
      if (n < 0) {
        dir = -dir;
        n = NR.stepIndex(line, i, dir);
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
  // Fares and cargo fees go to the states the trip rode through, by the miles it rode on each
  // one's land (rode: { CA: 80, NV: 40 }, counted train by train); a trip that never left one
  // state pays all to it. Each state keeps its part less a 10% tax to its country's national money.
  function earn(s, amount, here, rode) {
    s.weekIncome += amount;
    let parts = rode ? Object.entries(rode).filter(([code, mi]) => mi > 0 && s.states[code]) : [];
    if (!parts.length) parts = [[NR.stateOf(here), 1]];
    const total = parts.reduce((n, [, mi]) => n + mi, 0);
    for (const [code, mi] of parts) {
      const part = (amount * mi) / total;
      const st = s.states[code];
      const tax = part * T.stateTax;
      st.budget += part - tax;
      st.weekIncome += part - tax; // a head of transportation splits what's left after tax
      st.weekTax += tax;
      const nation = NR.nation(s, code);
      nation.money += tax;
      nation.tax += tax;
    }
  }

  // A passenger or a load of cargo has arrived: collect the money.
  function deliverItem(s, p, here) {
    goalTick(s, p, here);
    if (p.kind) {
      const fee = NR.CARGO[p.kind].fee;
      earn(s, fee[0] + miles(city(p.from), city(here)) * fee[1], here, p.rode);
      s.cargoDelivered[p.kind]++;
      emit("deliver", { at: here, cargo: p.kind });
      return;
    }
    s.delivered++;
    earn(s, fareFor(p, here), here, p.rode);
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
    // Bigger stations (Interchange, Grand terminal) get people on and off faster
    return 0.35 + moved * (type.quick ? 0.03 : 0.08) * NR.stationLevel(st).change;
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
          const back = NR.stepIndex(line, train.i, -dir);
          if (back < 0 || s.damage[segKey(here, line.stops[back])]) {
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
      const from = line.stops[train.i];
      train.i = NR.stepIndex(line, train.i, train.dir);
      // Everyone on board rode this stretch: count its miles on each state's land (fares are
      // split that way)
      if (train.pax.length) {
        const mi = NR.trackMiles(from, line.stops[train.i]);
        const shares = NR.segmentShares(from, line.stops[train.i]);
        for (const p of train.pax) {
          const rode = p.rode || (p.rode = {});
          for (const [code, share] of shares) rode[code] = (rode[code] || 0) + mi * share;
        }
      }
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
      for (const [a, b] of NR.lineLegs(l)) keys.add(segKey(a, b));
    });
    return [...keys];
  }
  // A wildfire in a county with mountain track, or an earthquake somewhere on the network.
  function californiaEvent(s) {
    // Track in a state a head of transportation is managing is looked after for you.
    const open = allSegments(s).filter((k) => !s.damage[k] && !segFrozen(s, ...k.split("|")));
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
  NR.stateFrozen = (s, code) => !isNation(code) && NR.stateHeadState(s, code) === "managing";
  // What the state's own track and trains cost to build, in $k.
  NR.stateInfraValue = function (s, code) {
    let value = 0;
    s.lines.forEach((l) => {
      value += NR.chainBill(l.stops, l.grade, 1, l)[code] || 0;
      const share = (NR.lineShares(l).find(([p]) => p === code) || [code, 0])[1];
      NR.trainsOn(s, l).forEach((t) => (value += typeOf(t).price * share));
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
  // profit and 10% goes to national money. Each country's national money covers its own states
  // when they run short.
  function stateWeek(s) {
    const upkeepOf = {};
    s.trains.forEach((t) => {
      const line = NR.lineById(s, t.lineId);
      NR.addShares(upkeepOf, line ? NR.lineShares(line) : [[NR.countryOf(s.home), 1]], typeOf(t).upkeep);
    });
    for (const [p, amount] of Object.entries(upkeepOf)) if (isNation(p)) NR.nation(s, p).money -= amount;
    for (const [c, nation] of Object.entries(s.nations)) nation.upkeep = upkeepOf[c] || 0;
    for (const [code, st] of Object.entries(s.states)) {
      if (!st.open) continue;
      const upkeep = upkeepOf[code] || 0;
      const profit = st.weekIncome - upkeep;
      st.budget -= upkeep;
      let toNational = 0;
      if (NR.stateFrozen(s, code) && profit > 0) {
        st.budget -= profit; // the profit leaves the state: 90% to management, 10% to national money
        toNational = profit * (1 - T.managementShare);
        NR.nation(s, code).money += toNational;
      }
      st.lastWeek = { income: st.weekIncome, tax: st.weekTax, upkeep, profit, toNational };
      st.weekTax = 0;
      st.weekIncome = 0;
      if (st.budget < 0) {
        NR.nation(s, code).money += st.budget;
        emit("stateShortfall", { code, amount: -st.budget });
        st.budget = 0;
      }
    }
    // A country's national money below zero: its richest states cover it.
    for (const [country, nation] of Object.entries(s.nations)) {
      if (nation.money < 0) {
        const paid = [];
        const rich = Object.keys(s.states)
          .filter((code) => s.states[code].open && s.states[code].budget > 0 && NR.countryOf(code) === country)
          .sort((a, b) => s.states[b].budget - s.states[a].budget);
        for (const code of rich) {
          if (nation.money >= 0) break;
          const take = Math.min(-nation.money, s.states[code].budget);
          s.states[code].budget -= take;
          nation.money += take;
          paid.push({ code, amount: take });
        }
        if (paid.length) emit("nationalRefill", { country, paid });
        if (nation.money < 0) emit("nationalShort", { country, amount: -nation.money });
      }
      nation.lastWeek = { income: nation.income, tax: nation.tax, upkeep: nation.upkeep };
      nation.income = 0;
      nation.tax = 0;
    }
  }

  // ---------- One step of the game ----------
  NR.update = function (s, dt) {
    if (s.over) return;
    syncOpen(s);
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
        const calm = Math.floor(NR.stationRoom(st) / 2);
        if (st.waiting.length > calm) st.waiting.length = calm;
        st.crowd = 0;
        continue;
      }
      if (st.waiting.length > NR.stationRoom(st)) st.crowd = Math.min(1, st.crowd + dt / T.overflowSeconds);
      else st.crowd = Math.max(0, st.crowd - dt / (T.overflowSeconds * 1.5));
      if (st.crowd >= 1) {
        if (s.test) {
          // Test mode: nothing can be lost. The riders give up and leave, and the game carries on.
          st.waiting.length = 0;
          st.crowd = 0;
          emit("giveUp", { at: st.id });
          continue;
        }
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
    for (const [a, b] of NR.lineLegs(l)) m += NR.trackMiles(a, b);
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
  NR.lineValue = (l) => NR.chainPrice(NR.lineChain(l), l.grade, l);
  // The same, as a bill: each stretch is paid by its state, or by national money across a border.
  NR.chainBill = (chain, grade, share = 1, line) => {
    const bill = {};
    for (let i = 0; i + 1 < chain.length; i++)
      NR.addShares(bill, NR.segmentShares(chain[i], chain[i + 1]), NR.trackPrice(chain[i], chain[i + 1], grade, tunneled(line, chain[i], chain[i + 1])) * share);
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
  // (Track across a border stays yours, even when a state it touches is managed.)
  const segFrozen = (s, a, b) => NR.stateOf(a) === NR.stateOf(b) && NR.stateFrozen(s, NR.stateOf(a));
  NR.chainFrozen = (s, chain) => chain.some((id, i) => i > 0 && segFrozen(s, chain[i - 1], id));
  NR.lineFrozen = (s, line) => NR.chainFrozen(s, NR.lineChain(line));
  // ---------- Lines: state, national, international ----------
  // Every line belongs to a group, and each group has its own set of lines and colors:
  //   a state ("CA"): all its stops in that state, paid from the state's budget;
  //   national ("nat-USA"): across a state border inside one country, national money;
  //   international ("intl"): across the US–Canada border, half from each country.
  NR.lineGroup = (stops) => {
    const states = [...new Set(stops.map((id) => NR.stateOf(id)))];
    if (states.length === 1) return states[0];
    const countries = [...new Set(states.map((code) => NR.countryOf(code)))];
    return countries.length === 1 ? `nat-${countries[0]}` : "intl";
  };
  NR.groupKind = (g) => (g === "intl" ? "intl" : g === "link" ? "link" : /^nat-/.test(g) ? "national" : "state");
  const openCodes = (s) => Object.keys(s.states).filter((code) => s.states[code].open);
  // A group's lines at the start (base) and the most it can have right now
  function groupLimits(s, g) {
    const kind = NR.groupKind(g);
    if (kind === "state") return s.states[g] && s.states[g].open ? { base: T.stateLines[0], max: T.stateLines[1] } : { base: 0, max: 0 };
    if (kind === "national") {
      const n = openCodes(s).filter((code) => NR.countryOf(code) === g.slice(4)).length;
      return n >= 2 ? { base: T.nationalLines[0], max: T.nationalLines[1] * n } : { base: 0, max: 0 };
    }
    if (kind === "intl") return new Set(openCodes(s).map((code) => NR.countryOf(code))).size >= 2 ? { base: T.intlLines[0], max: T.intlLines[1] } : { base: 0, max: 0 };
    return { base: 0, max: 0 };
  }
  const groupRecord = (s, g) => (s.lineGroups[g] ||= { extra: 0, bought: 0 });
  NR.groupMax = (s, g) => groupLimits(s, g).max;
  // How many lines a group has now (built or free to build)
  NR.groupSlots = (s, g) => {
    const { base, max } = groupLimits(s, g);
    return Math.min(max, base + ((s.lineGroups[g] && s.lineGroups[g].extra) || 0));
  };
  NR.linesIn = (s, g) => s.lines.filter((l) => l.group === g);
  NR.colorFree = (s, g, c) => c >= 0 && c < NR.groupSlots(s, g) && !s.lines.some((l) => l.group === g && l.color === c);
  // A free line (color) in a group, or -1. (The home state's group when none is given.)
  NR.freeColor = (s, g = s.home) => {
    const n = NR.groupSlots(s, g);
    for (let c = 0; c < n; c++) if (!s.lines.some((l) => l.group === g && l.color === c)) return c;
    return -1;
  };
  // "California", "national", "international"
  NR.groupName = (g) => {
    const kind = NR.groupKind(g);
    if (kind === "state") return NR.STATE_NAMES[g];
    if (kind === "national") return NR.twoCountries() ? `${NR.COUNTRIES[g.slice(4)].adjective} national` : "national";
    return kind === "intl" ? "international" : "emergency";
  };
  // "California Golden Line", "National Golden Line", "International Golden Line 2"
  NR.lineName = (line) => {
    if (NR.isLink(line)) return `Emergency link ${city(line.stops[0]).name}–${city(line.stops[line.stops.length - 1]).name}`;
    const names = NR.LINE_NAMES;
    const name = `${names[line.color % names.length]} Line${line.color >= names.length ? ` ${Math.floor(line.color / names.length) + 1}` : ""}`;
    const group = NR.groupName(line.group);
    return `${group.charAt(0).toUpperCase()}${group.slice(1)} ${name}`;
  };
  // The lines that run through a state: its own, and national and international lines with a
  // stop in it or track across its land
  NR.linesThrough = (s, code) =>
    s.lines.filter((l) => l.group === code || (NR.groupKind(l.group) !== "state" && (l.stops.some((id) => NR.stateOf(id) === code) || NR.lineShares(l).some(([p]) => p === code))));
  // One more line in a group: the price, and who pays (a state its budget, national money, or
  // half from each country for an international line)
  NR.lineSlotPrice = (s, g) => T.lineColorPrice[0] + T.lineColorPrice[1] * ((s.lineGroups[g] && s.lineGroups[g].bought) || 0);
  NR.lineSlotBill = (s, g) => {
    const price = NR.lineSlotPrice(s, g);
    const kind = NR.groupKind(g);
    if (kind === "state") return { [g]: price };
    if (kind === "national") return { [g.slice(4)]: price };
    const countries = [...new Set(openCodes(s).map((code) => NR.countryOf(code)))];
    return Object.fromEntries(countries.map((c) => [c, price / countries.length]));
  };
  NR.canBuyLineSlot = (s, g) => NR.groupSlots(s, g) < NR.groupMax(s, g) && NR.canPay(s, NR.lineSlotBill(s, g));
  NR.buyLineSlot = function (s, g) {
    if (!NR.canBuyLineSlot(s, g)) return false;
    NR.pay(s, NR.lineSlotBill(s, g));
    const r = groupRecord(s, g);
    r.extra++;
    r.bought++;
    return true;
  };
  // The group that most needs one more line (the weekly "New line" adds it): a full group that
  // can still grow, the home state first, then the other states, national, international
  NR.lineUpgradeTarget = (s) => {
    const states = openCodes(s).sort((a, b) => (a === s.home ? -1 : b === s.home ? 1 : NR.linesIn(s, b).length - NR.linesIn(s, a).length));
    const groups = [...states, ...[...new Set(openCodes(s).map((code) => `nat-${NR.countryOf(code)}`))], "intl"];
    return groups.find((g) => NR.groupSlots(s, g) > 0 && NR.freeColor(s, g) < 0 && NR.groupSlots(s, g) < NR.groupMax(s, g)) || null;
  };
  // Extending a line can move it to another group (a state line that crosses a border becomes
  // national). The group it would move to if that group has no free line, else null.
  NR.extendProblem = function (s, line, atHead, added) {
    const all = atHead ? [...added.slice().reverse(), ...line.stops] : [...line.stops, ...added];
    const g = NR.lineGroup(all);
    return g !== line.group && NR.freeColor(s, g) < 0 ? g : null;
  };
  NR.depotCount = (s) => Object.values(s.depot).reduce((a, b) => a + b, 0);
  // The first train type waiting in the depot that can run on this line.
  // (Only passenger trains are placed automatically; cargo trains wait for you to choose a line.)
  const depotTypeFor = (s, line) =>
    Object.keys(NR.TRAIN_TYPES).find((k) => !NR.TRAIN_TYPES[k].carries && s.depot[k] > 0 && NR.canAddTrain(s, line, k).ok);

  // A new line goes to the group of its stops, in a free line of that group (null if it's full).
  NR.createLine = function (s, stops, color) {
    if (NR.chainBlocked(stops)) return null;
    const group = NR.lineGroup(stops);
    const c = NR.colorFree(s, group, color) ? color : NR.freeColor(s, group);
    if (c < 0) return null;
    const line = { id: s.nextId++, group, color: c, stops: stops.slice(), grade: "standard", tunnels: [] };
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
    if (line.loop || NR.isLink(line) || NR.chainBlocked([end, ...added]) || NR.extendProblem(s, line, atHead, added)) return false;
    NR.pay(s, NR.chainBill([end, ...added], line.grade));
    if (atHead) {
      line.stops.unshift(...added.slice().reverse());
      NR.trainsOn(s, line).forEach((t) => (t.i += added.length));
    } else {
      line.stops.push(...added);
    }
    // Across a border it joins another group (a state line becomes national), in a free line there
    const group = NR.lineGroup(line.stops);
    if (group !== line.group) {
      line.color = NR.freeColor(s, group);
      line.group = group;
    }
    rt.dirty = true;
  };

  // Close a line into a loop: track from its last stop back to its first (3 stops or more).
  // The closing stretch: [last stop, first stop]
  const closingLeg = (line) => [line.stops[line.stops.length - 1], line.stops[0]];
  NR.closeLoopBill = (line) => NR.chainBill(closingLeg(line), line.grade, 1, line);
  // Why a line can't close into a loop, or null
  NR.closeLoopProblem = function (s, line) {
    if (line.loop) return "It's a loop already.";
    if (NR.isLink(line)) return "An emergency link joins two stations only.";
    if (line.stops.length < 3) return "A loop needs 3 stations or more.";
    if (NR.chainFrozen(s, closingLeg(line))) return "Its track can't change while its state is managed.";
    const blocked = NR.chainBlocked(closingLeg(line));
    if (blocked) return `No track from ${city(closingLeg(line)[0]).name} to ${city(line.stops[0]).name}: ${blocked}`;
    if (!NR.canPay(s, NR.closeLoopBill(line))) return `Closing the loop costs ${NR.billMoney(NR.closeLoopBill(line))}. Not enough money yet.`;
    return null;
  };
  NR.closeLoop = function (s, line) {
    if (NR.closeLoopProblem(s, line)) return false;
    NR.pay(s, NR.closeLoopBill(line));
    line.loop = true;
    rt.dirty = true;
    return true;
  };
  // Open a loop again: the closing stretch is taken up, and half its price comes back.
  NR.openLoopRefund = (line) => NR.chainBill(closingLeg(line), line.grade, T.refundShare, line);
  NR.openLoop = function (s, line) {
    if (!line.loop || NR.chainFrozen(s, closingLeg(line))) return false;
    NR.refund(s, NR.openLoopRefund(line));
    const key = segKey(...closingLeg(line));
    if (line.tunnels) line.tunnels = line.tunnels.filter((k) => k !== key);
    // Trains on the closing stretch go back to the station they came from
    const last = line.stops.length - 1;
    NR.trainsOn(s, line).forEach((t) => {
      if (t.moving && ((t.i === last && t.dir === 1) || (t.i === 0 && t.dir === -1))) {
        t.moving = false;
        t.t = 0;
        t.wait = 0.5;
      }
    });
    line.loop = false;
    rt.dirty = true;
    return true;
  };

  // Price of upgrading a whole line to high-speed track, in $k.
  // The difference between high-speed and standard track (more over mountains and water).
  NR.upgradeBill = (line) => {
    const bill = {};
    for (const [a, b] of NR.lineLegs(line)) {
      const t = tunneled(line, a, b);
      NR.addShares(bill, NR.segmentShares(a, b), NR.trackPrice(a, b, "high", t) - NR.trackPrice(a, b, "standard", t));
    }
    return bill;
  };
  NR.highSpeedUpgradePrice = (line) => Object.values(NR.upgradeBill(line)).reduce((a, b) => a + b, 0);
  NR.upgradeLine = function (s, line) {
    const bill = NR.upgradeBill(line);
    if (line.grade === "high" || NR.isLink(line) || NR.lineFrozen(s, line) || !NR.canPay(s, bill)) return false;
    NR.pay(s, bill);
    line.grade = "high";
    return true;
  };

  // Can a train of this type run on this line? Returns { ok, reason, fromDepot }.
  NR.canAddTrain = function (s, line, type) {
    const t = NR.TRAIN_TYPES[type];
    if (NR.isLink(line)) return { ok: false, reason: "Emergency links run their own shuttle only" };
    if (s.week < t.unlockWeek) return { ok: false, reason: `Unlocks in week ${t.unlockWeek + 1}` };
    if (NR.lineFrozen(s, line)) return { ok: false, reason: "Frozen while managed" };
    if (t.needsHighSpeed && line.grade !== "high") return { ok: false, reason: "Needs high-speed track" };
    if (t.needsPort && !line.stops.some((id) => city(id).port)) return { ok: false, reason: "Needs a port on the line" };
    if (t.needsAirport && !line.stops.some((id) => city(id).airport)) return { ok: false, reason: "Needs an airport on the line" };
    if (t.maxLineMiles && NR.lineMiles(line) > t.maxLineMiles) return { ok: false, reason: `Only on lines up to ${t.maxLineMiles} mi` };
    if (line.stops.filter((id) => serves(type, id)).length < 2) return { ok: false, reason: "Needs 2 cities it stops at" };
    if (s.depot[type] > 0) return { ok: true, fromDepot: true };
    if (!NR.canPay(s, NR.trainBill(line, type))) return { ok: false, reason: `Costs ${NR.billMoney(NR.trainBill(line, type))}` };
    return { ok: true, fromDepot: false };
  };

  // Put a train on a line: from the depot if one is waiting, otherwise buy it.
  NR.addTrain = function (s, line, type = "regular") {
    const check = NR.canAddTrain(s, line, type);
    if (!check.ok) return false;
    if (check.fromDepot) s.depot[type]--;
    else NR.pay(s, NR.trainBill(line, type)); // the line's state, or national money across borders
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
    if (!train || train.shuttle) return false; // an emergency link's shuttle stays on it
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
      if (!t.shuttle) s.depot[t.type]++; // an emergency link's shuttle goes with it
    });
    s.trains = s.trains.filter((t) => t.lineId !== line.id);
    s.lines = s.lines.filter((l) => l !== line);
    NR.refund(s, NR.trackBill(line, T.refundShare));
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
      for (const [a, b] of NR.lineLegs(l)) {
        (next[a] ||= []).push(b);
        (next[b] ||= []).push(a);
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
      // The reward goes to the country where the job is (half each when it spans the border)
      const places = [goal.a, goal.b, goal.to, goal.from].filter((id) => id && NR.cityById[id]);
      const countries = places.length ? [...new Set(places.map((id) => NR.countryOf(NR.stateOf(id))))] : [NR.countryOf(s.home)];
      const c = makeGoal(Object.assign(goal, { id: s.nextId++, deadline: s.time + days * T.dayLength, reward: { money, train: train || null, countries } }));
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
  const rewardShares = (r) => (r.countries && r.countries.length ? r.countries : [NR.countryOf(NR.HOME_STATE)]).map((c, i, all) => [c, 1 / all.length]);
  NR.rewardText = (r) => NR.billMoney(NR.addShares({}, rewardShares(r), r.money)) + (r.train ? ` + a free ${NR.trainLabel(r.train)}` : "");

  function updateGoals(s, dt) {
    const crowded = s.stations.some((st) => st.waiting.length > NR.stationRoom(st));
    s.levelGoals.forEach((g) => refreshGoal(s, g, dt, crowded));
    for (const c of s.contracts.slice()) {
      refreshGoal(s, c, dt, crowded);
      if (c.done) {
        for (const [country, share] of rewardShares(c.reward)) NR.nation(s, country).money += c.reward.money * share; // rewards are national money
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
    grant: { title: "Federal grant", text: `${NR.money(T.grant)} of ${NR.nationalName("national")} to spend anywhere.`, ok: () => true, apply: (s) => (s.money += T.grant) },
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
      text: (s) => `One more ${NR.groupName(NR.lineUpgradeTarget(s) || s.home)} line to build with.`,
      ok: (s) => !!NR.lineUpgradeTarget(s),
      apply: (s) => {
        const g = NR.lineUpgradeTarget(s);
        if (g) groupRecord(s, g).extra++;
      },
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
  // Two upgrades to choose from. When a group's lines are all in use, one of them is "New line".
  NR.upgradeChoices = (s) => {
    const keys = shuffle(Object.keys(NR.UPGRADES).filter((k) => NR.UPGRADES[k].ok(s)));
    if (!keys.includes("line")) return keys.slice(0, 2);
    return shuffle(["line", ...keys.filter((k) => k !== "line").slice(0, 1)]);
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
    s.home = s.home || "CA"; // games saved before you could choose started in California
    NR.setHome(s.home);
    if (!s.nations) {
      // Saved before each country had its own national money (version 13): it was all the US's
      s.nations = { USA: { money: s.money || 0, income: s.nationalIncome || 0, tax: s.nationalTax || 0, upkeep: s.nationalUpkeep || 0, lastWeek: s.nationalLastWeek || null } };
      ["money", "nationalIncome", "nationalTax", "nationalUpkeep", "nationalLastWeek"].forEach((k) => delete s[k]);
      if (s.v === 13) s.v = 14;
    }
    if (!s.lineGroups) {
      // Saved before lines had groups (version 14): give each line its group, keeping its color
      // when that's free there, and enough lines in each group for the ones already built
      s.lineGroups = {};
      syncOpen(s);
      const taken = {};
      for (const l of s.lines) {
        l.group = NR.lineGroup(l.stops);
        const used = (taken[l.group] ||= new Set());
        let c = l.color;
        if (used.has(c) || c >= groupLimits(s, l.group).base) for (c = 0; used.has(c); c++);
        l.color = c;
        used.add(c);
      }
      for (const [g, used] of Object.entries(taken)) {
        const need = Math.max(...used) + 1 - groupLimits(s, g).base;
        if (need > 0) s.lineGroups[g] = { extra: need, bought: 0 };
      }
      delete s.linesUnlocked;
      delete s.linesBought;
      if (s.v === 14) s.v = NR.SAVE_VERSION;
    }
    attachMoney(s);
    syncOpen(s);
    rt.geoLevel = s.geo || "gentle";
    rt.dirty = true;
    rt.events.length = 0;
    return s;
  };
})();
