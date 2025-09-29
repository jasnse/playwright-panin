import { test, expect } from '@playwright/test';

async function clickIfExists(locator: import('@playwright/test').Locator) {
  if (await locator.count() > 0) {
    await locator.click();
  }
}

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

await page.goto('https://panin-ccpl-sites.skyworx.co.id/');
  await expect(page).toHaveURL('https://panin-ccpl-sites.skyworx.co.id/')

  await username_field.waitFor();
  await username_field.fill(loginBenar.username)
  await password_field.waitFor();
  await password_field.fill(loginBenar.password)
  await button.waitFor
  await button.click();

await page.locator("//button[h2[text()='Analis Kredit']]").click();
const editButton = page.locator("(//button[@aria-label='edit'])[1]");
await editButton.scrollIntoViewIfNeeded();
await editButton.click();


   await page.waitForTimeout(2000);
for(let i = 0; i<6; i++){
await page.locator("//button[@class='absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 rounded-full shadow-md z-10']").click();
}

   await page.waitForTimeout(2000);
await page.locator("//button[text()='Persetujuan Kredit']").click();
await page.locator("(//input[@type='text' and @inputmode='decimal'])[3]").fill("50000000");
await clickIfExists(page.locator("//div[p[text()='-- Select Jenis Kartu Yang Disetujui --']]"))
   await page.waitForTimeout(2000);
await clickIfExists(page.locator("(//li[@role='option' and normalize-space()='New Visa Platinum'])[1]"))

await clickIfExists(page.locator("//div[p[text()='-- Select Keputusan --']]"))
   await page.waitForTimeout(2000);
await clickIfExists(page.locator("//li[@role='option' and normalize-space()='Approved']"))

await page.locator("//button[.//span[text()='Submit & Lanjut']]").click();
await page.locator("//button[normalize-space()='OK']").click();
await page.locator("//button[normalize-space()='Lanjutkan']").click();

await page.locator("//button[normalize-space()='SLA Kredit']").click();
await page.locator("//button[.//span[text()='Selesai']]").click();
await page.locator("//button[normalize-space()='OK']").click();

await button_profile.waitFor
await button_profile.click();
await logout.waitFor
await logout.click();

})