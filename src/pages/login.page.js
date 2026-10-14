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
  await page.locator('input[type="email"]').fill(email);
}

async function submitEmail(page) {
  await page.locator('input[type="submit"]').click();
}

async function choosePasswordLogin(page) {
  await page.locator("::-p-aria(A jelszó használata)").click();
}

async function fillPassword(page, password) {
  await page.locator('input[type="password"]').fill(password);
}

async function submitPassword(page) {
  await page.locator('button[type="submit"]').click();
}

async function handleStayLoggedIn(page, stayLoggedIn) {
  const buttonSelector = stayLoggedIn
    ? '[data-testid="primaryButton"]'
    : '[data-testid="secondaryButton"]';

  await page.locator(buttonSelector).click();
}

async function waitForLoginRedirect(page) {
  await page
    .locator('[customtooltip="Új e-mail üzenet létrehozása. (N)"]')
    .wait();
}
