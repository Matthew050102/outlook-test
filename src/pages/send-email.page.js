import { getRandomEmailContent } from "../utils/email-content.js";
import {
  locatorWait,
  locatorWaitAndClick,
  locatorWaitAndFill,
  locatorWaitClickAndType,
} from "../utils/locator.js";

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
  await locatorWait(page, '[aria-label="Címzett"]');
}

async function fillEmailForm(page, emailFormBody) {
  await fillRecipient(page, emailFormBody.recipient);
  await fillSubject(page, emailFormBody.subject);
  await fillContent(page, emailFormBody.content);
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
