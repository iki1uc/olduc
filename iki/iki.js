// iki.js – Basis‑Modul für die Instanz iki
// macht iki systembewusst und Engine‑fähig

console.log("iki.js → geladen");

// Startanker für diese Station
let activeAnchor = "PI";

// Prüfen, ob die Engine existiert
function initIki() {
    if (typeof STATION_PRUEFUNG === "function") {
        const info = STATION_PRUEFUNG("iki", activeAnchor);
        console.log("iki → Station‑Prüfung:", info);
    } else {
        console.warn("iki → Anker‑Engine nicht gefunden");
    }

    bindIki();
}

// Interaktionen binden
function bindIki() {
    document.addEventListener("click", () => {
        console.log("iki → Interaktion erkannt");

        if (typeof STATION_PRUEFUNG === "function") {
            const info = STATION_PRUEFUNG("iki", activeAnchor);

            console.log("iki → aktueller Anker:", info.anchor);
            console.log("iki → Modus:", info.modus);
            console.log("iki → Überleg‑Modus:", info.ueber);
            console.log("iki → Gegenhalt:", info.gegenhalt);

            // Domino‑Schritt
            activeAnchor = info.next;
            console.log("iki → nächster Anker:", activeAnchor);
        }
    });
}

// Starten
initIki();

