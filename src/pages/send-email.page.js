import { getRandomEmailContent } from "../utils/email-content.js";
import {
  locatorWait,
  locatorWaitAndClick,
  locatorWaitAndFill,
  locatorWaitClickAndType,
} from "../utils/locator.js";

export async function sendEmail(page, recipient) {
  await clickNewMessageButton(page);
  const { subject, content } = getRandomEmailContent();
  await fillRecipient(page, recipient);
  await fillSubject(page, subject);
  await fillContent(page, content);
  await clickSendButton(page);

  return {
    recipient,
    subject,
    content,
  };
}

async function clickNewMessageButton(page) {
  await locatorWaitAndClick(page, 'button[aria-label="Új üzenet"]');
  await locatorWait(page, '[aria-label="Címzett"]');
}

async function fillRecipient(page, recipient) {
  await locatorWaitClickAndType(
    page,
    '[aria-label="Címzett"]',
    `${recipient};`,
  );
}

async function fillSubject(page, subject) {
  await locatorWaitAndFill(page, '[aria-label="Tárgy"]', subject);
}

async function fillContent(page, content) {
  await locatorWaitClickAndType(
    page,
    '[aria-label="Üzenet szövege"]',
    `${content}`,
  );
}

async function clickSendButton(page) {
  await locatorWaitAndClick(page, '[aria-label="Küldés"]');
}
