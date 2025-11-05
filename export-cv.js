const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://cv-chooky.netlify.app", { waitUntil: "networkidle2" });
  await page.pdf({
    path: "VoManhCuong_CV.pdf",
    format: "A4",
    printBackground: true,
    margin: { top: "0", bottom: "0" }
  });
  await browser.close();
})();
