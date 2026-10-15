import { execSync } from 'node:child_process';
import fs from 'node:fs';

const jobs = [
  ['desktop', '/', ['label-content-name-mismatch', 'aria-required-children', 'aria-required-parent', 'agent-accessibility-tree', 'image-delivery-insight', 'layout-shifts']],
  ['desktop', '/forum/', ['color-contrast']],
  ['desktop', '/support/', ['heading-order']],
  ['desktop', '/product/', ['image-delivery-insight']],
  ['mobile', '/product/', ['image-delivery-insight', 'mainthread-work-breakdown', 'bootup-time', 'long-tasks']],
  ['mobile', '/blog/', ['forced-reflow-insight']],
  ['mobile', '/faq/', ['long-tasks', 'bootup-time']],
  ['mobile', '/privacy/', ['is-crawlable']],
];
const flags = {
  mobile:
    '--form-factor=mobile --screenEmulation.mobile --screenEmulation.width=375 --screenEmulation.height=667 --screenEmulation.deviceScaleFactor=2 --throttling.rttMs=150 --throttling.throughputKbps=1638.4 --throttling.cpuSlowdownMultiplier=4',
  desktop: '--preset=desktop',
};
const strip = (v) => {
  if (v && typeof v === 'object') {
    if (v.type === 'node') return { sel: v.selector, snip: v.snippet?.slice(0, 220), label: v.nodeLabel?.slice(0, 80) };
    if (Array.isArray(v)) return v.map(strip);
    return Object.fromEntries(Object.entries(v).filter(([k]) => !['boundingRect', 'lhId', 'path'].includes(k)).map(([k, x]) => [k, strip(x)]));
  }
  return v;
};
for (const [mode, p, ids] of jobs) {
  try {
    execSync(`npx lighthouse http://localhost:3000${p} --quiet --throttling-method=simulate ${flags[mode]} --output=json --output-path=lh-tmp.json --chrome-flags="--headless=new"`, { stdio: 'ignore' });
  } catch {}
  const r = JSON.parse(fs.readFileSync('lh-tmp.json', 'utf8'));
  console.log(`\n===== ${mode} ${p} perf=${r.categories.performance.score * 100}`);
  for (const id of ids) {
    const a = r.audits[id];
    if (!a) continue;
    console.log(`--- ${id} score=${a.score} ${a.displayValue ?? ''}`);
    const items = a.details?.items ?? [];
    console.log(JSON.stringify(strip(items.slice(0, 8))).slice(0, 3000));
  }
}
fs.rmSync('lh-tmp.json', { force: true });
