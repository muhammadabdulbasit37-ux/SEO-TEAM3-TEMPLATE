import fs from 'fs';

for (const file of ['dist/index.html', 'dist/product/index.html', 'dist/hwid-spoofer/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
  let inline = 0;
  let count = 0;
  for (const match of scripts) {
    if (/src=/.test(match[1])) continue;
    inline += match[2].length;
    count += 1;
  }
  console.log(file, 'inline scripts', count, 'chars', inline, 'html', html.length);
}
