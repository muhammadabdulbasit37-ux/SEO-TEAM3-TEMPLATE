import fs from 'node:fs';

for (const page of ['dist/index.html', 'dist/product/index.html']) {
  const t = fs.readFileSync(page, 'utf8');
  const css = [...t.matchAll(/href="(\/_astro\/[^"]+\.css)"/g)].map((m) => m[1]);
  console.log(page);
  for (const href of css) {
    const file = `dist${href}`;
    const kb = fs.existsSync(file) ? Math.round(fs.statSync(file).size / 1024) : 0;
    console.log(' ', href, `${kb}KB`);
  }
}
