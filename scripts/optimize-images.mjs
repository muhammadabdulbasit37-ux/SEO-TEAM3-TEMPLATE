import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
/** Widths each directory's pages request (see `src/utils/responsiveImage.ts`). */
const dirs = [
  { dir: 'public/images/gameplay', widths: [400, 512, 640, 960] },
  { dir: 'public/images/hwid-spoofer', widths: [640, 960] },
];
const brandWidths = [32, 64, 128, 512];

async function optimizeBrandLogo() {
  const master = path.join(root, 'public/images/brand/eft-cheats-logo.webp');
  if (!fs.existsSync(master)) return;

  for (const width of brandWidths) {
    const output = path.join(root, 'public/images/brand', `eft-cheats-logo-${width}.webp`);
    await sharp(master)
      .resize(width, width, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 85, effort: 4 })
      .toFile(output);
    console.log(`Wrote ${path.relative(root, output)}`);
  }
}

async function optimizeDir(relativeDir, widths) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir).filter((file) => {
    if (/-\d+\.webp$/i.test(file)) return false;
    return /\.png$/i.test(file) || /\.webp$/i.test(file);
  });

  for (const file of files) {
    const input = path.join(dir, file);
    const base = file.replace(/\.(png|webp)$/i, '');

    for (const width of widths) {
      const output = path.join(dir, `${base}-${width}.webp`);
      await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toFile(output);
      console.log(`Wrote ${path.relative(root, output)}`);
    }
  }
}

for (const { dir, widths } of dirs) {
  await optimizeDir(dir, widths);
}

await optimizeBrandLogo();

console.log('Image optimization complete.');
