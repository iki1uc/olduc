import { EVENTS } from "./events.js";

export const MAERCHEN = {
    pool: [
        "Es war einmal ein Funke, der größer war als die Nacht.",
        "Im Schatten einer alten Straße begann etwas Neues zu atmen.",
        "Ein kleiner Fehler wurde zu einer großen Wahrheit.",
        "Zwischen zwei Welten öffnete sich ein stiller Raum.",
        "Ein verlorener Gedanke fand seinen Weg zurück.",
        "Ein Herz erinnerte sich an etwas, das nie gesagt wurde.",
        "Ein Schritt zu früh wurde zu einem Schritt genau richtig.",
        "Ein Augenblick wurde zu einer ganzen Geschichte."
    ],

    r(){
        return this.pool[Math.floor(Math.random()*this.pool.length)];
    },

    start(){
        EVENTS.trigger("maerchen_output", {
            text: this.r(),
            time: Date.now()
        });
    }
};

// reagiert auf JEDE Technik
EVENTS.on("technik_output", () => MAERCHEN.start());
EVENTS.on("technik_start", () => MAERCHEN.start());
EVENTS.on("ueber_anker_signal", () => MAERCHEN.start());

