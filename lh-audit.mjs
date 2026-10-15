import { execSync } from 'node:child_process';
import fs from 'node:fs';

const pages = process.argv[2]
  ? process.argv[2].split(',')
  : ['/', '/product/', '/hwid-spoofer/', '/blog/', '/faq/', '/forum/', '/support/', '/about/', '/privacy/', '/terms/', '/es/', '/de/product/'];
const modes = (process.argv[3] || 'mobile,desktop').split(',');

const flags = {
  mobile:
    '--form-factor=mobile --screenEmulation.mobile --screenEmulation.width=375 --screenEmulation.height=667 --screenEmulation.deviceScaleFactor=2 --throttling.rttMs=150 --throttling.throughputKbps=1638.4 --throttling.cpuSlowdownMultiplier=4',
  desktop: '--preset=desktop',
};

const out = [];
for (const mode of modes) {
  for (const p of pages) {
    const file = `lh-tmp.json`;
    try {
      execSync(
        `npx lighthouse http://localhost:3000${p} --quiet --throttling-method=simulate ${flags[mode]} --output=json --output-path=${file} --chrome-flags="--headless=new"`,
        { stdio: 'ignore' },
      );
    } catch {}
    const r = JSON.parse(fs.readFileSync(file, 'utf8'));
    const cats = Object.fromEntries(Object.entries(r.categories).map(([k, v]) => [k, Math.round(v.score * 100)]));
    const fails = Object.values(r.audits)
      .filter((a) => a.score !== null && a.score < 1 && !['manual', 'notApplicable', 'informative'].includes(a.scoreDisplayMode))
      .map((a) => `${a.id}(${a.score}${a.displayValue ? ' ' + a.displayValue : ''})`);
    const m = (id) => r.audits[id]?.displayValue;
    const row = { mode, p, ...cats, FCP: m('first-contentful-paint'), LCP: m('largest-contentful-paint'), TBT: m('total-blocking-time'), CLS: m('cumulative-layout-shift'), fails };
    out.push(row);
    console.log(JSON.stringify(row));
  }
}
fs.writeFileSync('lh-audit-result.json', JSON.stringify(out, null, 1));
fs.rmSync('lh-tmp.json', { force: true });
