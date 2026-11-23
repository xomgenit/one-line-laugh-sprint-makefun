// Writes one 73-char laugh line to entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || 'out';
mkdirSync(outDir, { recursive: true });
const line =
  'I bought a standing desk to be healthier, so now I sit on a taller chair.';
writeFileSync(
  `${outDir}/entry.txt`,
  line,
);
