import fs from 'fs';
const report = JSON.parse(fs.readFileSync('lh-product.json', 'utf8'));
const items = report.audits['lcp-breakdown-insight'].details.items;
const table = items.find((item) => item.type === 'table');
const node = items.find((item) => item.type === 'node');
for (const row of table.items) console.log(row.label, Math.round(row.duration));
console.log(node.selector);
console.log(node.snippet.slice(0, 180));
