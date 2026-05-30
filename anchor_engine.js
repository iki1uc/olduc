// --- ANKER ENGINE v4 ---
// robust, mit Fallbacks, Gewichtung, Meta-Infos

const ANKER_DEFS = {
  PI: {
    modell: "Analyse",
    modus: "Koop",
    ueber: "Meta",
    next: "Gauner",
    gewicht: 1.0
  },
  Gauner: {
    modell: "Trick",
    modus: "GegenKoop",
    ueber: "Spiegel",
    next: "Ort",
    gewicht: 0.9
  },
  Ort: {
    modell: "Raum",
    modus: "Koop",
    ueber: "Fixpunkt",
    next: "Ereignis",
    gewicht: 0.8
  },
  Ereignis: {
    modell: "Impuls",
    modus: "Koop",
    ueber: "Auslöser",
    next: "Stimmung",
    gewicht: 1.1
  },
  Stimmung: {
    modell: "Feld",
    modus: "GegenKoop",
    ueber: "Feldwechsel",
    next: "Trichter",
    gewicht: 1.2
  },
  Trichter: {
    modell: "Essenz",
    modus: "Koop",
    ueber: "Verdichtung",
    next: "PI",
    gewicht: 1.3
  }
};

const ANKER_FALLBACK = "PI";

function normalizeAnchor(name){
  if(!name || !ANKER_DEFS[name]) return ANKER_FALLBACK;
  return name;
}

// --- ENGINE: Vollständige Prüfung ---
function ANKER_CHECK(name) {
  const key = normalizeAnchor(name);
  const def = ANKER_DEFS[key];

  return {
    name: key,
    modell: def.modell,
    modus: def.modus,
    ueber: def.ueber,
    next: def.next,
    gewicht: def.gewicht
  };
}

// --- ENGINE: Gegenhalten ---
function ANKER_GEGENHALT(name) {
  const info = ANKER_CHECK(name);
  const gegen = info.modus === "Koop" ? "GegenKoop" : "Koop";

  return {
    anchor: info.name,
    gegen,
    ueber_spiegel: info.ueber,
    gewicht_spiegel: info.gewicht
  };
}

// --- ENGINE: Station prüft alles ---
function STATION_PRUEFUNG(stationName, anchorName) {
  const a = ANKER_CHECK(anchorName);
  const g = ANKER_GEGENHALT(anchorName);

  return {
    station: stationName || "unbekannt",
    anchor: a.name,
    modell: a.modell,
    modus: a.modus,
    ueber: a.ueber,
    next: a.next,
    gewicht: a.gewicht,
    gegenhalt: g.gegen,
    ueber_spiegel: g.ueber_spiegel,
    gewicht_spiegel: g.gewicht_spiegel
  };
}

console.log("Anker-Engine v4 geladen");
