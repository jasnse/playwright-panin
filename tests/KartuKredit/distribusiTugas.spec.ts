import { test, expect } from '@playwright/test';

test('distribusi Tugas', async ({page}) => {


const username_field = page.locator("//input[@id='userName']")
const password_field = page.locator("//input[@id='password']")
const button = page.locator("//button[@type='submit']")
const button_profile = page.locator("(//button[@type='button'])[3]")
const logout = page.locator("//li[.//span[normalize-space(text())='Logout']]")
const loginBenar = {
  username: "SALESDCP_SPV_SKY_002",
  password: "P1234567!b"
};

await page.goto('https://panin-ccpl-sites.skyworx.co.id/');
  await expect(page).toHaveURL('https://panin-ccpl-sites.skyworx.co.id/')

  await username_field.waitFor();
  await username_field.fill(loginBenar.username)

  await password_field.waitFor();
  await password_field.fill(loginBenar.password)

  await button.waitFor
  await button.click();

  await page.locator("//button[h2[text()='Distribusi Tugas DCP']]").click();
  const isChecked = await page.locator("(//input[@type='checkbox'])[2]").isChecked();
  if (!isChecked) {
  await page.locator("(//input[@type='checkbox'])[2]").check();
}
  await page.locator("//button[contains(text(), 'Distribusi')]").click();
  await page.locator("//input[@role='combobox']").click();
  await page.locator("//li[@role='option' and normalize-space()='SALESDCP STAFF SKY 002']").click();
  await page.locator("//button[@type='submit']").click();
  await page.locator("//button[normalize-space()='Submit']").click();
  await page.locator("//button[normalize-space()='OK']").click();

await button_profile.waitFor
await button_profile.click();
await logout.waitFor
await logout.click();


})