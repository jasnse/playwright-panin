import { test, expect } from '@playwright/test';

test('data Entry', async ({page}) => {

const username_field = page.locator("//input[@id='userName']")
const password_field = page.locator("//input[@id='password']")
const button = page.locator("//button[@type='submit']")
const button_profile = page.locator("(//button[@type='button'])[3]")
const logout = page.locator("//li[.//span[normalize-space(text())='Logout']]")
const loginBenar = {
  username: "SALESDCP_STAFF_SKY_002",
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

  await page.locator("//button[h2[text()='Data Pengajuan']]").click();
  await page.locator("(//button[@aria-label='edit'])[1]").click();

  //Data Sales
  await page.locator("//button[span[text()='Simpan']]").click();
  await page.locator("//button[normalize-space()='OK']").click();

  //Data Pemohon
  await page.locator("//div[p[text()='-- Select Pengiriman Kartu --']]").click();
  await page.locator("//li[@role='option' and normalize-space()='Alamat KTP']").click();
  await page.locator("//div[p[text()='-- Select Fasilitas E-Statement --']]").click();
  await page.locator("//li[@role='option' and normalize-space()='Ya']").click();
  await page.locator("//div[p[text()='-- Select Kewarganegaraan --']]").click();
  await page.locator("//li[@role='option' and normalize-space()='Indonesia']").click();

await button_profile.waitFor
await button_profile.click();
await logout.waitFor
await logout.click();

})