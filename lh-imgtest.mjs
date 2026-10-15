import sharp from 'sharp';
import fs from 'node:fs';

const dir = 'public/images/gameplay';
const pngs = fs.readdirSync(dir).filter((f) => f.endsWith('.png'));
console.log('pngs', pngs.length);
for (const f of pngs.slice(0, 3)) {
  for (const w of [640, 960]) {
    const cur = fs.statSync(`${dir}/${f.replace('.png', '')}-${w}.webp`).size;
    const res = [];
    for (const q of [82, 75, 70]) {
      const b = await sharp(`${dir}/${f}`).resize({ width: w }).webp({ quality: q, effort: 6 }).toBuffer();
      res.push(`q${q}=${(b.length / 1024).toFixed(1)}K`);
    }
    console.log(f, w, `current=${(cur / 1024).toFixed(1)}K`, res.join(' '));
  }
}
