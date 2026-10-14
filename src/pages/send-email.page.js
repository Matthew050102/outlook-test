import { getRandomEmailContent } from "../utils/email-content.js";
import { locatorWaitAndClick, locatorWaitAndFill } from "../utils/locator.js";

export async function sendEmail(page, recipient) {
  await openEmailForm(page);
  const emailFormBody = await initEmailFormBody(recipient);
  await fillEmailForm(page, emailFormBody);
  await clickSendButton(page);

  return emailFormBody;
}

async function initEmailFormBody(recipient) {
  const { subject, content } = getRandomEmailContent();

  return {
    recipient,
    subject,
    content,
  };
}

async function openEmailForm(page) {
  await locatorWaitAndClick(page, 'button[aria-label="Új üzenet"]');
  await page.locator('[aria-label="Címzett"]').wait();
}

async function fillEmailForm(page, emailFormBody) {
  await fillRecipient(page, emailFormBody.recipient);
  await fillSubject(page, emailFormBody.subject);
  await fillContent(page, emailFormBody.content);
}

async function fillRecipient(page, recipient) {
  await locatorWaitAndClick(page, '[aria-label="Címzett"]');
  await page.keyboard.type(`${recipient};`);
}

async function fillSubject(page, subject) {
  await locatorWaitAndFill(page, '[aria-label="Tárgy"]', subject);
}

async function fillContent(page, content) {
  await locatorWaitAndClick(page, '[aria-label="Üzenet szövege"]');
  await page.keyboard.type(`${content}`);
}

async function clickSendButton(page) {
  await locatorWaitAndClick(page, '[aria-label="Küldés"]');
}
