import * as Plot from "../_npm/@observablehq/plot@0.6.16/b7d4b5b4.js";
import { FileAttachment, resize } from "../_observablehq/stdlib.046b693f.js";

export async function Chart() {
    const gistemp = await FileAttachment({"name":"../data/gistemp.csv","mimeType":"text/csv","path":"../_file/data/gistemp.08e51068.csv","lastModified":1739455633971,"size":27014}, import.meta.url).csv({ typed: true });
    return resize((width) =>
        Plot.plot({
            width,
            y: { grid: true },
            color: { scheme: "burd" },
            marks: [Plot.dot(gistemp, { x: "Date", y: "Anomaly", stroke: "Anomaly" }), Plot.ruleY([0])]
        })
    );
}