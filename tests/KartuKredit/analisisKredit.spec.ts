import { test, expect } from '@playwright/test';

test('Analisis Kredit', async ({page}) => {

const username_field = page.locator("//input[@id='userName']")
const password_field = page.locator("//input[@id='password']")
const button = page.locator("//button[@type='submit']")
const button_profile = page.locator("(//button[@type='button'])[3]")
const logout = page.locator("//li[.//span[normalize-space(text())='Logout']]")
const loginBenar = {
  username: "ANALYST_STAFF_SKY_001",
  password: "P1234567!b"
};

  await page.locator("//button[h2[text()='Analis Kredit']]").click();
  const editButton = page.locator("(//button[@aria-label='edit'])[1]");
await editButton.scrollIntoViewIfNeeded();
await editButton.click();





await button_profile.waitFor
await button_profile.click();
await logout.waitFor
await logout.click();

})