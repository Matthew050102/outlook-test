import { locatorWait, locatorWaitAndClick } from "../utils/locator.js";

export async function clearEmails(page) {
  await clickClearButton(page);
  await clickClearEmailsButton(page);
  await waitForEmptyFolder(page);
}

async function clickClearButton(page) {
  await locatorWaitAndClick(page, 'button[aria-label="Mappa ürítése"]');
}

async function clickClearEmailsButton(page) {
  await locatorWaitAndClick(page, "::-p-text(Az összes törlése)");
}

async function waitForEmptyFolder(page) {
  await locatorWait(page, "::-p-text(Üres a(z) Elküldve mappa)");
}
