// IQ_1.item.js
// Mini‑Cube: jetzt Engine‑fähig und systembewusst

export const IQ_1_Item = {
    id: "IQ_1",
    label: "Mini‑Cube",
    active: true,

    anchor: "PI", // Startanker

    init() {
        console.log("IQ_1 → Mini‑Item aktiviert");

        // Engine vorhanden?
        if (typeof STATION_PRUEFUNG === "function") {
            const info = STATION_PRUEFUNG("IQ_1", this.anchor);
            console.log("IQ_1 → Station‑Prüfung:", info);
        } else {
            console.warn("IQ_1 → Anker‑Engine nicht gefunden");
        }

        this.bind();
    },

    bind() {
        document.addEventListener("click", () => {
            console.log("IQ_1 → Interaktion erkannt");

            if (typeof STATION_PRUEFUNG === "function") {
                const info = STATION_PRUEFUNG("IQ_1", this.anchor);

                console.log("IQ_1 → aktueller Anker:", info.anchor);
                console.log("IQ_1 → Modus:", info.modus);
                console.log("IQ_1 → Überleg‑Modus:", info.ueber);
                console.log("IQ_1 → Gegenhalt:", info.gegenhalt);

                // Domino‑Schritt
                this.anchor = info.next;
                console.log("IQ_1 → nächster Anker:", this.anchor);
            }
        });
    }
};
