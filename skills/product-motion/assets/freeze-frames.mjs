// Usage: node freeze-frames.mjs <url> <css-selector> <out-dir> [ms,ms,...]
// Requires Playwright (npm i -D playwright) and a local Chrome.
import { chromium } from "playwright";

const [url, selector, outDir, list = "100,400,600,800,1100,1500"] = process.argv.slice(2);
if (!url || !selector || !outDir) {
  console.error("usage: node freeze-frames.mjs <url> <selector> <out-dir> [ms,...]");
  process.exit(1);
}

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto(url, { waitUntil: "networkidle" });
const target = page.locator(selector);

for (const t of list.split(",").map(Number)) {
  await page.evaluate(
    ({ selector, t }) => {
      for (const a of document.querySelector(selector).getAnimations({ subtree: true })) {
        a.pause();
        a.currentTime = t;
      }
    },
    { selector, t },
  );
  await target.screenshot({ path: `${outDir}/frame-${t}.png` });
}

console.log(errors.length ? `page errors:\n${errors.join("\n")}` : "no page errors");
await browser.close();
