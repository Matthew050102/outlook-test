import { Given, When, Then } from "@cucumber/cucumber";
import { CONFIG, LOGIN_PARAMS } from "../../config.js";
import { login } from "../../pages/login.page.js";
import { sendEmail } from "../../pages/send-email.page.js";
import assert from "assert";
import { clearEmails } from "../../pages/clear-emails.page.js";
import { verifyEmail } from "../../pages/verify-email.page.js";

let email = null;

Given("I am logged into Outlook", async function () {
  await login(this.page, LOGIN_PARAMS);
});

When(
  "I send an email with random subject and content to the recipient",
  async function () {
    const recipient = CONFIG.testData.recipient;

    email = await sendEmail(this.page, recipient);
  },
);

Then(
  "the sent email subject should appear in the sent emails list",
  async function () {
    assert.ok(email?.subject, "Sent email subject is missing or not provided!");

    const isFound = await verifyEmail(this.page, email.subject);

    assert.strictEqual(
      isFound,
      true,
      `Email with subject "${email.subject}" was not found in sent emails!`,
    );
  },
);

Then("I clear the sent emails folder", async function () {
  await clearEmails(this.page);
});
