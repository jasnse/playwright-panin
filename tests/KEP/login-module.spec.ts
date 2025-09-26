import { test, expect } from '@playwright/test';



// test('Open Web Panin', async ({ page }) => {
//   await page.goto('https://panin-ccpl-sites.skyworx.co.id/');
// });

//positive case 1
test('Positive case 1 - berhasil Login', async ({ page }) => {
    const username_field = page.locator("//input[@id='userName']")
    const password_field = page.locator("//input[@id='password']")
    const button = page.locator("//button[@type='submit']")
    const button_profile = page.locator("(//button[@type='button'])[3]")
    const logout = page.locator("//li[.//span[normalize-space(text())='Logout']]")

    const loginBenar = {
  username: "SALESCBG_STAFF_SKY_004",
  password: "P1234567!b"
};

  await page.goto('https://panin-ccpl-sites.skyworx.co.id');
  await expect(page).toHaveURL('https://panin-ccpl-sites.skyworx.co.id')

  await username_field.waitFor();
  await username_field.fill(loginBenar.username)

  await password_field.waitFor();
  await password_field.fill(loginBenar.password)

  await button.waitFor
  await button.click();

  await expect(page).toHaveURL('https://panin-ccpl-sites.skyworx.co.id/app/pengajuan-awal');

  await button_profile.waitFor
  await button_profile.click();
  await logout.waitFor
  await logout.click();

});