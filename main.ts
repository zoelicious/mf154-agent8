import fs from "node:fs";
import path from "node:path";

// The excuse, in two beats: the denial, then the rollback that makes it
// someone else's fault — specifically, last Thursday's version of me.
const denial =
  "I did not forget the deadline. My checkpoint rolled back to last Thursday,";
const punchline =
  " and last Thursday's version of me had not been told about it yet.";

const text = denial + punchline;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
