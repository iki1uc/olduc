// --- ANKER ENGINE v3 ---
// Jeder Anker kennt: Modell, Modus, Überleg-Modus, Gegenhalt

const ANKER_MODELL = {
  PI:        "Analyse",
  Gauner:    "Trick",
  Ort:       "Raum",
  Ereignis:  "Impuls",
  Stimmung:  "Feld",
  Trichter:  "Essenz"
};

const ANKER_MODUS = {
  PI:        "Koop",
  Gauner:    "GegenKoop",
  Ort:       "Koop",
  Ereignis:  "Koop",
  Stimmung:  "GegenKoop",
  Trichter:  "Koop"
};

// Höhere Modi (Überleg-Modus)
const ANKER_UEBER = {
  PI:        "Meta",
  Gauner:    "Spiegel",
  Ort:       "Fixpunkt",
  Ereignis:  "Auslöser",
  Stimmung:  "Feldwechsel",
  Trichter:  "Verdichtung"
};

// Domino-Kette
const ANKER_NEXT = {
  PI:        "Gauner",
  Gauner:    "Ort",
  Ort:       "Ereignis",
  Ereignis:  "Stimmung",
  Stimmung:  "Trichter",
  Trichter:  "PI"
};

// --- ENGINE: Vollständige Prüfung ---
function ANKER_CHECK(name) {
  return {
    name,
    modell: ANKER_MODELL[name],
    modus: ANKER_MODUS[name],
    ueber: ANKER_UEBER[name],
    next: ANKER_NEXT[name]
  };
}

// --- ENGINE: Gegenhalten ---
function ANKER_GEGENHALT(name) {
  const info = ANKER_CHECK(name);

  return {
    anchor: name,
    gegen: info.modus === "Koop" ? "GegenKoop" : "Koop",
    ueber_spiegel: info.ueber
  };
}

// --- ENGINE: Station prüft alles ---
function STATION_PRUEFUNG(stationName, anchorName) {
  const a = ANKER_CHECK(anchorName);
  const g = ANKER_GEGENHALT(anchorName);

  return {
    station: stationName,
    anchor: anchorName,
    modell: a.modell,
    modus: a.modus,
    ueber: a.ueber,
    next: a.next,
    gegenhalt: g.gegen,
    ueber_spiegel: g.ueber_spiegel
  };
}

console.log("Anker-Engine v3 geladen");

