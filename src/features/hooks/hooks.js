import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import {
  launchBrowser,
  handleError,
  closeBrowser,
  initBrowserPage,
} from "../../utils/browser.js";
import { CONFIG } from "../../config.js";

setDefaultTimeout(CONFIG.gherkinTimeout);

Before(async function () {
  try {
    this.browser = await launchBrowser(CONFIG.isDebugMode);
    this.page = await initBrowserPage(this.browser);
  } catch (error) {
    handleError(error);
    throw error;
  }
});

After(async function (scenario) {
  try {
    if (scenario.result?.status === "FAILED") {
      console.warn(`The Scenario "${scenario.pickle.name}" has failed.`);

      if (this.page) {
        await this.page.screenshot({
          path: "./src/features/error/error-screenshot.png",
          fullPage: true,
        });
      }
    }
  } catch (error) {
    handleError(error);
  } finally {
    if (this.browser) {
      await closeBrowser(this.browser, CONFIG.isDebugMode);
    }
  }
});
