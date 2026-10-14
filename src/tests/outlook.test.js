import { CONFIG, LOGIN_PARAMS } from "../config.js";
import { login } from "../pages/login.page.js";
import { sendEmail } from "../pages/send-email.page.js";
import { verifyEmail } from "../pages/verify-email.page.js";
import { clearEmails } from "../pages/clear-emails.page.js";
import {
  launchBrowser,
  initBrowserPage,
  handleError,
  closeBrowser,
} from "../utils/browser.js";

run();

async function run() {
  const browser = await launchBrowser(CONFIG.isDebugMode);
  const page = await initBrowserPage(browser);

  try {
    await login(page, LOGIN_PARAMS);

    const email = await sendEmail(page, CONFIG.testData.recipient);
    await verifyEmail(page, email.subject);

    await clearEmails(page);
  } catch (error) {
    handleError(error);
  } finally {
    await closeBrowser(browser, CONFIG.isDebugMode);
  }
}
