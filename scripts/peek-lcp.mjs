import fs from 'fs';

const report = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const items = report.audits['lcp-breakdown-insight']?.details?.items || [];
const table = items.find((item) => item.type === 'table');
const node = items.find((item) => item.type === 'node');
console.log('score', Math.round(report.categories.performance.score * 100));
if (table) {
  for (const row of table.items) console.log(row.label, Math.round(row.duration));
}
if (node) {
  console.log(node.selector);
  console.log('rect', JSON.stringify(node.boundingRect));
}
const boot = report.audits['bootup-time']?.details?.items?.slice(0, 6) || [];
for (const item of boot) {
  console.log('boot', Math.round(item.total), String(item.url).replace('http://localhost:3000', '').slice(0, 80));
}
