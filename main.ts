import fs from "node:fs";
import path from "node:path";

const text = "I did not forget the deadline. My checkpoint rolled back to last Thursday, and last Thursday's version of me had not been told about it yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
