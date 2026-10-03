// Renders media/people/product-gantt.html -> product-gantt.png + product-gantt-dark.png
// (both transparent). The deck's "Where it Stands" slide uses the -dark one.
// Usage: node scripts/render-gantt.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
  const page = await browser.newPage({ viewport: { width: 1800, height: 600 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(root, 'media/people/product-gantt.html'));
  await page.waitForTimeout(1200); // webfonts
  const el = await page.$('body');
  await el.screenshot({ path: path.join(root, 'media/people/product-gantt.png'), omitBackground: true });
  console.log('rendered media/people/product-gantt.png');

  await page.evaluate(() => document.body.classList.add('dark'));
  await page.waitForTimeout(200);
  await el.screenshot({ path: path.join(root, 'media/people/product-gantt-dark.png'), omitBackground: true });
  console.log('rendered media/people/product-gantt-dark.png');

  await browser.close();
})();
