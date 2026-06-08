// Triangle Axes Pixel 01 – Achsen- und Pixelverrechnung im Dreieck
// Kombiniert OP, iki1uc und Scan/Toolator zu einem verrechenbaren Datenraum

export const TRIANGLE_AXES_PIXEL = {
    id: "TRIANGLE-AXES-PIXEL-01",
    version: "1.0",
    created: "2026-06-08",
    purpose: "Achsen- und Pixelverrechnung für iki2li",

    compute(op, iki1uc, scan) {
        const triangle = {
            A: op,          // Bedeutung / Richtung
            B: iki1uc,      // Achsen / Struktur
            C: scan         // Pixel / Messwerte
        };

        return {
            triangle,
            axes: iki1uc.axes || null,
            pixels: scan.pixels || null,
            combined: {
                axisPixelRelation: (iki1uc.axes && scan.pixels)
                    ? `${iki1uc.axes.length} Achsen gegen ${scan.pixels.length} Pixel`
                    : "unvollständig"
            },
            timestamp: Date.now()
        }
    }
}

