export async function locatorWait(page, selector) {
  const locator = await page.locator(selector);
  await locator.wait();

  return locator;
}

export async function locatorWaitAndClick(page, selector) {
  const locator = await locatorWait(page, selector);
  await locator.click();

  return locator;
}

export async function locatorWaitClickAndType(page, selector, text) {
  const locator = await locatorWaitAndClick(page, selector);
  await page.keyboard.type(text);

  return locator;
}

export async function locatorWaitAndFill(page, selector, content) {
  const locator = await locatorWait(page, selector);
  await locator.fill(content);

  return locator;
}
