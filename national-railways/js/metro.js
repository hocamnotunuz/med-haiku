// National Railways: trams, metro and cable cars inside cities.
// Each metro city has its own map of neighborhoods. Riders travel between neighborhoods,
// and to and from the city's main station, where they meet the trains across California.
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
      onlyIn: "SF",
      maxMiles: 3.5,
      about: "San Francisco's famous cable cars: slow, but riders pay double. Only between cable car stops.",
    },
  };

  // Metro cities, keyed by their main station on the state map. hub = the main station's
  // own stop in the city, where riders change to and from trains across California.
  // cable = a stop on San Francisco's cable car lines.
  NR.METROS = {
    LA: {
      name: "Los Angeles",
      size: 5,
      stops: [
        { id: "UNS", name: "Union Station", lat: 34.056, lon: -118.236, hub: true },
        { id: "HWD", name: "Hollywood", lat: 34.098, lon: -118.329 },
        { id: "SMC", name: "Santa Monica", lat: 34.019, lon: -118.491 },
        { id: "PAS", name: "Pasadena", lat: 34.148, lon: -118.145 },
        { id: "LBC", name: "Long Beach", lat: 33.768, lon: -118.195 },
        { id: "LAX", name: "LAX", lat: 33.943, lon: -118.408 },
        { id: "KTN", name: "Koreatown", lat: 34.058, lon: -118.3 },
        { id: "CUL", name: "Culver City", lat: 34.021, lon: -118.396 },
        { id: "BUR", name: "Burbank", lat: 34.181, lon: -118.309 },
        { id: "ELA", name: "East LA", lat: 34.024, lon: -118.172 },
        { id: "ING", name: "Inglewood", lat: 33.962, lon: -118.353 },
        { id: "UCL", name: "Westwood/UCLA", lat: 34.068, lon: -118.445 },
      ],
    },
    SF: {
      name: "San Francisco",
      size: 5,
      stops: [
        { id: "TTC", name: "Transit Center", lat: 37.789, lon: -122.396, hub: true, cable: true },
        { id: "USQ", name: "Union Square", lat: 37.788, lon: -122.407, cable: true },
        { id: "NOB", name: "Nob Hill", lat: 37.793, lon: -122.416, cable: true },
        { id: "FWF", name: "Fisherman's Wharf", lat: 37.808, lon: -122.417, cable: true },
        { id: "MIS", name: "Mission", lat: 37.76, lon: -122.414 },
        { id: "CAS", name: "Castro", lat: 37.762, lon: -122.435 },
        { id: "HAI", name: "Haight-Ashbury", lat: 37.77, lon: -122.447 },
        { id: "GGP", name: "Golden Gate Park", lat: 37.769, lon: -122.483 },
        { id: "SUN", name: "Sunset", lat: 37.753, lon: -122.495 },
        { id: "PRE", name: "Presidio", lat: 37.799, lon: -122.466 },
        { id: "BAY", name: "Bayview", lat: 37.729, lon: -122.392 },
        { id: "BAL", name: "Balboa Park", lat: 37.721, lon: -122.447 },
      ],
    },
    SD: {
      name: "San Diego",
      size: 4,
      stops: [
        { id: "SFD", name: "Santa Fe Depot", lat: 32.716, lon: -117.17, hub: true },
        { id: "OTN", name: "Old Town", lat: 32.755, lon: -117.199 },
        { id: "LJA", name: "La Jolla", lat: 32.842, lon: -117.274 },
        { id: "MVL", name: "Mission Valley", lat: 32.77, lon: -117.15 },
        { id: "PBH", name: "Pacific Beach", lat: 32.797, lon: -117.24 },
        { id: "CHV", name: "Chula Vista", lat: 32.64, lon: -117.084 },
        { id: "ECJ", name: "El Cajon", lat: 32.795, lon: -116.962 },
        { id: "SDU", name: "SDSU", lat: 32.775, lon: -117.071 },
        { id: "BPK", name: "Balboa Park", lat: 32.731, lon: -117.146 },
        { id: "SYS", name: "San Ysidro", lat: 32.556, lon: -117.045 },
        { id: "UTC", name: "UTC", lat: 32.871, lon: -117.211 },
      ],
    },
    SAC: {
      name: "Sacramento",
      size: 3,
      stops: [
        { id: "SVS", name: "Valley Station", lat: 38.584, lon: -121.501, hub: true },
        { id: "MID", name: "Midtown", lat: 38.574, lon: -121.478 },
        { id: "WSA", name: "West Sacramento", lat: 38.58, lon: -121.53 },
        { id: "NAT", name: "Natomas", lat: 38.646, lon: -121.519 },
        { id: "EXP", name: "Cal Expo", lat: 38.596, lon: -121.438 },
        { id: "CSU", name: "Sac State", lat: 38.561, lon: -121.424 },
        { id: "RCO", name: "Rancho Cordova", lat: 38.589, lon: -121.303 },
        { id: "FOL", name: "Folsom", lat: 38.678, lon: -121.176 },
        { id: "EKG", name: "Elk Grove", lat: 38.409, lon: -121.372 },
        { id: "SMF", name: "Airport", lat: 38.695, lon: -121.59 },
      ],
    },
    SJ: {
      name: "San Jose",
      size: 4,
      stops: [
        { id: "DIR", name: "Diridon", lat: 37.329, lon: -121.903, hub: true },
        { id: "STC", name: "Santa Clara", lat: 37.354, lon: -121.955 },
        { id: "MTV", name: "Mountain View", lat: 37.394, lon: -122.078 },
        { id: "SNV", name: "Sunnyvale", lat: 37.369, lon: -122.036 },
        { id: "MIL", name: "Milpitas", lat: 37.428, lon: -121.906 },
        { id: "CAM", name: "Campbell", lat: 37.287, lon: -121.95 },
        { id: "EVG", name: "Evergreen", lat: 37.316, lon: -121.785 },
        { id: "JTN", name: "Japantown", lat: 37.349, lon: -121.894 },
        { id: "SJC", name: "Airport", lat: 37.363, lon: -121.929 },
        { id: "LEV", name: "Levi's Stadium", lat: 37.403, lon: -121.97 },
        { id: "ALM", name: "Almaden", lat: 37.25, lon: -121.88 },
      ],
    },
  };

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
  const hubOf = (key) => NR.METROS[key].stops.find((x) => x.hub);
  NR.cityStop = stopOf;

  // ---------- Opening a city ----------
  // A city's map is available once you own its county.
  NR.cityAvailable = (s, key) => !!NR.METROS[key] && s.owned.includes(NR.cityById[key].county);
  NR.cityActive = (s, key) => !!(s.cities && s.cities[key]);

  NR.openCity = function (s, key) {
    if (!NR.cityAvailable(s, key)) return null;
    if (!s.cities[key]) {
      s.cities[key] = {
        opened: s.time,
        delivered: 0,
        lines: [],
        trains: [],
        stations: NR.METROS[key].stops.map((x) => ({ id: x.id, waiting: [], crowd: 0, spawnIn: rand(6, 14) })),
      };
      rt.cityRoutes[key] = null;
      emit("cityOpen", { key });
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
  // Price of city track between two stops for a kind of line, in $k.
  NR.cityTrackPrice = (key, mode, a, b) => legMiles(key, a, b) * NR.CITY_MODES[mode].track;

  // Can this kind of line run through these stops? Returns the reason it can't, or null.
  NR.cityModeProblem = function (key, mode, stops) {
    const m = NR.CITY_MODES[mode];
    if (m.onlyIn && m.onlyIn !== key) return `${m.name}s only run in San Francisco`;
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

  // A new line comes with its first vehicle. Returns the line, or null if you can't afford it.
  NR.cityCreateLine = function (s, key, stops, color, mode) {
    const c = s.cities[key];
    let price = NR.CITY_MODES[mode].price;
    for (let i = 0; i + 1 < stops.length; i++) price += NR.cityTrackPrice(key, mode, stops[i], stops[i + 1]);
    if (s.money < price || NR.cityModeProblem(key, mode, stops)) return null;
    s.money -= price;
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
    if (s.money < price || NR.cityModeProblem(key, line.mode, all)) return false;
    s.money -= price;
    if (atHead) {
      line.stops.unshift(...added.slice().reverse());
      NR.cityTrainsOn(c, line).forEach((t) => (t.i += added.length));
    } else line.stops.push(...added);
    rt.cityRoutes[key] = null;
    return true;
  };

  NR.cityAddVehicle = function (s, key, line) {
    const price = NR.CITY_MODES[line.mode].price;
    if (s.money < price) return false;
    s.money -= price;
    addVehicle(s, s.cities[key], line);
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
    if (!train) return false;
    const line = NR.cityLineById(c, train.lineId);
    dropRiders(s, key, c, train, line);
    c.trains = c.trains.filter((t) => t !== train);
    s.money += NR.CITY_MODES[line.mode].price * T.refundShare;
    return true;
  };

  // Delete a line: you get back half of what its track and vehicles cost.
  NR.cityDeleteLine = function (s, key, line) {
    const c = s.cities[key];
    const m = NR.CITY_MODES[line.mode];
    let value = NR.cityLineMiles(key, line) * m.track;
    NR.cityTrainsOn(c, line).forEach((t) => {
      dropRiders(s, key, c, t, line);
      value += m.price;
    });
    c.trains = c.trains.filter((t) => t.lineId !== line.id);
    c.lines = c.lines.filter((l) => l !== line);
    s.money += value * T.refundShare;
    rt.cityRoutes[key] = null;
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
    s.money += fare;
    s.weekIncome += fare;
    c.delivered++;
    emit("cityDeliver", { key, at: here });
    // A rider who came to the main station to catch a train joins the trains across California.
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
      train.segLen = Math.max(0.2, miles(stopOf(key, line.stops[train.i]), stopOf(key, line.stops[n])));
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
      const homes = metro.stops.filter((x) => !x.hub);
      const pressure = 1 + (s.time - c.opened) / 400;
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
      // Crowding: a stop that stays too full for too long ends the game, just like a station.
      for (const st of c.stations) {
        if (st.waiting.length > T.cityRoom) st.crowd = Math.min(1, st.crowd + dt / T.cityOverflowSeconds);
        else st.crowd = Math.max(0, st.crowd - dt / (T.cityOverflowSeconds * 1.5));
        if (st.crowd >= 1) {
          s.over = true;
          emit("fail", { at: key, cityStop: st.id });
          return;
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
