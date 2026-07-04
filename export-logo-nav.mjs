import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1080 });
await page.goto('http://localhost:3000/logo-export.html', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1200));

// Crop to just the logo content area (icon + CM + AUTOMATES text)
await page.screenshot({
  path: './logo-cmautomates-nav.png',
  clip: { x: 110, y: 430, width: 820, height: 255 }
});
await browser.close();
console.log('Done — logo-cmautomates-nav.png saved (860x260)');
