import { mkdirSync, writeFileSync } from 'node:fs';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || 'out';
mkdirSync(outDir, { recursive: true });
writeFileSync(
  `${outDir}/entry.txt`,
  'I bought a standing desk to be healthier, so now I sit on a taller chair.',
);
