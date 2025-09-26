import { test, expect } from '@playwright/test';

test('pengajuanAwal', async ({ page }) => {
    const username_field = page.locator("//input[@id='userName']")
    const password_field = page.locator("//input[@id='password']")
    const button = page.locator("//button[@type='submit']")
    const button_profile = page.locator("(//button[@type='button'])[3]")
    const logout = page.locator("//li[.//span[normalize-space(text())='Logout']]")

    //tentukan tipe pengajuan
    const tipePengajuan ="Kartu Kredit Individu (CCI)"

    const loginBenar = {
  username: "SALESCBG_STAFF_SKY_004",
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

    await expect(page).toHaveURL('https://panin-ccpl-sites.skyworx.co.id/app/dashboard-sales-cbg');
    await page.locator("//a[@href='/app/pengajuan-awal']").click();


  const button_tambah = page.locator("//button[.//span[normalize-space()='TAMBAH DATA']]")
  await button_tambah.click();

  const kategori_produk = page.locator("(//input[@role='combobox'])[1]")
  await kategori_produk.click();
  const option_kategoriProduk = page.locator("//li[@role='option' and normalize-space()='Credit Card']")
  await expect(option_kategoriProduk).toBeVisible();
  await option_kategoriProduk.click();

    const tipe_pengajuan = page.locator("(//input[@role='combobox'])[2]")
  await tipe_pengajuan.click();
  await page.locator(`//li[@role='option' and normalize-space()='${tipePengajuan}']`).click();


  switch(tipePengajuan) {
    case "Kartu Kredit Individu (CCI)":
      await page.locator("(//input[@role='combobox'])[3]").click();
      await page.locator("//li[@role='option' and normalize-space()='New Visa Platinum']").click();
      await page.locator("(//input[@role='combobox'])[4]").click();
      await page.locator("//li[@role='option' and normalize-space()='WNI']").click();
      await page.locator("(//input[@role='combobox'])[5]").click();
      await page.locator("//li[@role='option' and normalize-space()='E-KTP']").click();
      await page.locator("//input[@placeholder='Masukkan Nomor KTP/Paspor']").fill("3000167645389028");
      await page.locator("//input[@placeholder='Masukkan Nama Sesuai KTP']").fill("Asep Kurniawan Setiadi");
      await page.locator("//input[@placeholder='Masukkan Tanggal Lahir']").type("05092003");
      await page.locator("//input[@placeholder='Masukkan Ponsel']").fill("085211625342");
      await page.locator("//input[@placeholder='Masukkan Email']").fill("Asep.kurniawan@gmail.com");
      await page.locator("(//input[@role='combobox'])[6]").click();
      await page.locator("//li[@role='option' and normalize-space()='MYPANIN']").click();

      await page.locator("//button[@type='submit']").click();
      await page.locator("(//button[normalize-space()='Submit'])[2]").click();
      await page.locator("//button[normalize-space()='OK']").click();

    break;

    default:
      break
  }



  await button_profile.waitFor
  await button_profile.click();
  await logout.waitFor
  await logout.click();

});