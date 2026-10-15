import {
  locatorWait,
  locatorWaitAndClick,
  locatorWaitAndFill,
} from "../utils/locator.js";

export async function login(page, loginParams) {
  const { url, email, password, stayLoggedIn } = loginParams;

  await openOutlook(page, url);

  await handleEmailSteps(page, email);
  await handlePasswordSteps(page, password);
  await handleStayLoggedIn(page, stayLoggedIn);

  await waitForLoginRedirect(page);
}

async function handleEmailSteps(page, email) {
  await fillEmail(page, email);
  await submitEmail(page);
}

async function handlePasswordSteps(page, password) {
  await choosePasswordLogin(page);
  await fillPassword(page, password);
  await submitPassword(page);
}

async function openOutlook(page, url) {
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });
}

async function fillEmail(page, email) {
  await locatorWaitAndFill(page, 'input[type="email"]', email);
}

async function submitEmail(page) {
  await locatorWaitAndClick(page, 'input[type="submit"]');
}

async function choosePasswordLogin(page) {
  await locatorWaitAndClick(page, "::-p-aria(A jelszó használata)");
}

async function fillPassword(page, password) {
  await locatorWaitAndFill(page, 'input[type="password"]', password);
}

async function submitPassword(page) {
  await locatorWaitAndClick(page, 'button[type="submit"]');
}

async function handleStayLoggedIn(page, stayLoggedIn) {
  const buttonSelector = stayLoggedIn
    ? '[data-testid="primaryButton"]'
    : '[data-testid="secondaryButton"]';

  await locatorWaitAndClick(page, buttonSelector);
}

async function waitForLoginRedirect(page) {
  await locatorWait(
    page,
    '[customtooltip="Új e-mail üzenet létrehozása. (N)"]',
  );
}
