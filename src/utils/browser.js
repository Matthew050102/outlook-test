import puppeteer from "puppeteer";

export function launchBrowser(isDebugMode) {
  return puppeteer.launch({
    headless: !isDebugMode,
    slowMo: isDebugMode ? 50 : 15,
  });
}

export async function initBrowserPage(browser) {
  const page = await browser.newPage();

  await page.evaluateOnNewDocument(() => {
    navigator.registerProtocolHandler = () => {};
  });

  return page;
}

export function handleError(error) {
  console.error("Hiba történt a teszt futása közben: ", error);
}

export function closeBrowser(browser, isDebugMode) {
  if (!isDebugMode) {
    return browser.close();
  }
}
