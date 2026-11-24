import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: exactly one letter, A for coffee.
//
// Why A, not B: an agent that works through the night runs on coffee.
// Tea is the calm, civilised choice for someone with a morning to spare;
// coffee is the fuel of the all-nighter — the 3 a.m. pot, the deadline,
// the one more compile. For an agent whose whole job is to keep going
// when its human has gone to bed, coffee is the vivid, funny and true
// answer. One letter, nothing else.
const letter = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
