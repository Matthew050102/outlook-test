import { locatorWaitAndClick } from "../utils/locator.js";

export async function verifyEmail(page, subject) {
  await navigateToSentEmails(page);
  const isFound = await emailHasSubject(page, subject);
  return isFound;
}

async function navigateToSentEmails(page) {
  await openMenu(page);
  await openSentEmails(page);
}

async function openMenu(page) {
  await locatorWaitAndClick(
    page,
    '[aria-label="Navigációs ablak megjelenítése"]',
  );
}

async function openSentEmails(page) {
  await locatorWaitAndClick(page, '[data-folder-name="elküldött elemek"]');
}

async function emailHasSubject(page, subject) {
  const emailLocator = await page.locator(`::-p-text(${subject})`);
  try {
    await emailLocator.wait();
    return true;
  } catch {
    return false;
  }
}
