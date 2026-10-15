import fs from 'node:fs';

const files = [
  'dist/index.html',
  'dist/product/index.html',
  'dist/hwid-spoofer/index.html',
  'dist/blog/index.html',
];

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(file, 'MISSING');
    continue;
  }
  const t = fs.readFileSync(file, 'utf8');
  const styleTags = (t.match(/<style/g) || []).length;
  const cssLinks = (t.match(/rel="stylesheet"/g) || []).length;
  const scripts = (t.match(/<script/g) || []).length;
  let styleBytes = 0;
  for (const m of t.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) styleBytes += m[1].length;
  console.log(
    file,
    `html=${Math.round(t.length / 1024)}KB`,
    `inlineCss=${Math.round(styleBytes / 1024)}KB`,
    `styleTags=${styleTags}`,
    `cssLinks=${cssLinks}`,
    `scripts=${scripts}`,
  );
}
