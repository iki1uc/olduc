// IQ_2.item.js
// Maxi‑Item: große Darstellung, jetzt Engine‑fähig

export const IQ_2_Item = {
    id: "IQ_2",
    label: "Maxi‑Cube",
    active: true,

    size: {
        w: 120,
        h: 120
    },

    // Aktiver Anker (Startpunkt)
    anchor: "PI",

    init() {
        console.log("IQ_2 → Maxi‑Item geladen");

        // Prüfen, ob Engine existiert
        if (typeof STATION_PRUEFUNG === "function") {
            const info = STATION_PRUEFUNG("IQ_2", this.anchor);
            console.log("IQ_2 → Station‑Prüfung:", info);
        } else {
            console.warn("IQ_2 → Anker‑Engine nicht gefunden");
        }

        this.attachEvents();
    },

    attachEvents() {
        document.addEventListener("click", () => {
            console.log("IQ_2 → Interaktion erkannt");

            // Wenn Engine existiert → Domino‑Schritt
            if (typeof STATION_PRUEFUNG === "function") {
                const info = STATION_PRUEFUNG("IQ_2", this.anchor);
                console.log("IQ_2 → aktueller Anker:", info.anchor);
                console.log("IQ_2 → Modus:", info.modus);
                console.log("IQ_2 → Überleg‑Modus:", info.ueber);
                console.log("IQ_2 → Gegenhalt:", info.gegenhalt);

                // Nächster Anker
                this.anchor = info.next;
                console.log("IQ_2 → nächster Anker:", this.anchor);
            }
        });
    }
};
