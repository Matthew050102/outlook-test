import { locatorWaitAndClick } from "../utils/locator.js";

export async function clearEmails(page) {
  await clickClearButton(page);
  await clickClearEmailsButton(page);
}

async function clickClearButton(page) {
  await locatorWaitAndClick(page, 'button[aria-label="Mappa ürítése"]');
}

async function clickClearEmailsButton(page) {
  await locatorWaitAndClick(page, "::-p-text(Az összes törlése)");
}
