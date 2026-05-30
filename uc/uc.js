// uc.js – Basis‑Modul für die Instanz uc
// macht uc systembewusst und Engine‑fähig

console.log("uc.js → geladen");

// Startanker für diese Station
let activeAnchor = "PI";

// Prüfen, ob die Engine existiert
function initUc() {
    if (typeof STATION_PRUEFUNG === "function") {
        const info = STATION_PRUEFUNG("uc", activeAnchor);
        console.log("uc → Station‑Prüfung:", info);
    } else {
        console.warn("uc → Anker‑Engine nicht gefunden");
    }

    bindUc();
}

// Interaktionen binden
function bindUc() {
    document.addEventListener("click", () => {
        console.log("uc → Interaktion erkannt");

        if (typeof STATION_PRUEFUNG === "function") {
            const info = STATION_PRUEFUNG("uc", activeAnchor);

            console.log("uc → aktueller Anker:", info.anchor);
            console.log("uc → Modus:", info.modus);
            console.log("uc → Überleg‑Modus:", info.ueber);
            console.log("uc → Gegenhalt:", info.gegenhalt);

            // Domino‑Schritt
            activeAnchor = info.next;
            console.log("uc → nächster Anker:", activeAnchor);
        }
    });
}

// Starten
initUc();

