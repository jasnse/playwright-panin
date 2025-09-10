import { test, expect } from '@playwright/test';

test('positive case 5.1 - Pengajuan awal WNI', async ({ page }) => {
    const username_field = page.locator("//input[@id='userName']")
    const password_field = page.locator("//input[@id='password']")
    const button = page.locator("//button[@type='submit']")
    const button_profile = page.locator("(//button[@type='button'])[3]")
    const logout = page.locator("//li[.//span[normalize-space(text())='Logout']]")

    const loginBenar = {
  username: "SALESCBG_STAFF_SKY_005",
  password: "P1234567!b"
};

  await page.goto('https://panin-ccpl-site.skyworx.co.id/');

  await username_field.waitFor();
  await username_field.fill(loginBenar.username)

  await password_field.waitFor();
  await password_field.fill(loginBenar.password)

  await button.waitFor
  await button.click();
  await expect(page).toHaveURL('https://panin-ccpl-site.skyworx.co.id/app/pengajuan-awal');

  //pengajuan awal WNI
  const button_tambah = page.locator("//button[.//span[normalize-space()='TAMBAH DATA']]")
  await button_tambah.click();

  const kategori_produk = page.locator("(//input[@role='combobox'])[1]")
  await kategori_produk.click();
  const option_kategoriProduk = page.locator("//li[@role='option' and normalize-space()='Kredit Express Panin']")
  await expect(option_kategoriProduk).toBeVisible();
  await option_kategoriProduk.click();

  const tipe_pengajuan = page.locator("(//input[@role='combobox'])[2]")
  await tipe_pengajuan.click();
  const option_tipePengajuan = page.locator("//li[@role='option' and normalize-space()='Pengajuan Baru (New KEP)']")
  await expect(option_tipePengajuan).toBeVisible();
  await option_tipePengajuan.click();

  const jangkaWaktu = page.locator("(//input[@role='combobox'])[3]")
  await jangkaWaktu.click();
  const option_jangkaWaktu = page.locator("//li[@role='option' and normalize-space()='24 Bulan']")
  await expect(option_jangkaWaktu).toBeVisible();
  await option_jangkaWaktu.click();

  const jumlahPinjaman = page.locator("//input[@id='jumlahPinjaman']")
  await jumlahPinjaman.fill("25000000")

  const status_wargaNegara = page.locator("//input[@id='statusKewarganegaraan']")
  status_wargaNegara.click();
  const option_statusWargaNegara = page.locator("//li[@role='option' and normalize-space()='WNI']")
  await expect(option_statusWargaNegara).toBeVisible
  option_statusWargaNegara.click();

  const inputKTPNo = page.locator("//input[@placeholder='Masukkan Nomor KTP']")
  const inputKTPName = page.locator("//input[@placeholder='Masukkan Nama Sesuai KTP']")
await expect(inputKTPNo).toBeVisible
await inputKTPNo.fill("3000123456789384");
await expect(inputKTPName).toBeVisible
await inputKTPName.fill("Jason Theofillus Gunawan");

const tanggalLahir = page.locator("//input[@placeholder='Masukkan Tanggal Lahir']")
await tanggalLahir.type("05092003")

const ponsel = page.locator("//input[@placeholder='Masukkan Ponsel']")
await ponsel.fill("085211821384")

const email = page.locator("//input[@placeholder='Masukkan Email']")
await email.fill("jasonoke03@gmail.com")

const channel = page.locator("//input[@id='channel']")
await channel.click();
const option_channel = page.locator("//li[@role='option' and normalize-space()='MYPANIN']")
await expect(option_channel).toBeVisible
await option_channel.click();

const submit1 = page.locator("//button[@type='submit']")
await expect(submit1).toBeVisible
submit1.click();
const submit2 = page.locator("(//button[normalize-space()='Submit'])[2]")
await expect(submit2).toBeVisible
submit2.click();
const buttonOk = page.locator("//button[normalize-space()='OK']")
await expect(buttonOk).toBeVisible
buttonOk.click();

//logout
  await button_profile.waitFor
  await button_profile.click();
  await logout.waitFor
  await logout.click();


});

test('positive case 5.2 - Pengajuan awal WNA', async ({ page }) => {

    const username_field = page.locator("//input[@id='userName']")
    const password_field = page.locator("//input[@id='password']")
    const button = page.locator("//button[@type='submit']")
    const button_profile = page.locator("(//button[@type='button'])[3]")
    const logout = page.locator("//li[.//span[normalize-space(text())='Logout']]")

    const loginBenar = {
  username: "SALESCBG_STAFF_SKY_006",
  password: "P1234567!b"
};

  await page.goto('https://panin-ccpl-site.skyworx.co.id/');

  await username_field.waitFor();
  await username_field.fill(loginBenar.username)

  await password_field.waitFor();
  await password_field.fill(loginBenar.password)

  await button.waitFor
  await button.click();
  await expect(page).toHaveURL('https://panin-ccpl-site.skyworx.co.id/app/pengajuan-awal');

  //pengajuan awal WNA
  const button_tambah = page.locator("//button[.//span[normalize-space()='TAMBAH DATA']]")
  await button_tambah.click();

  const kategori_produk = page.locator("(//input[@role='combobox'])[1]")
  await kategori_produk.click();
  const option_kategoriProduk = page.locator("//li[@role='option' and normalize-space()='Kredit Express Panin']")
  await expect(option_kategoriProduk).toBeVisible();
  await option_kategoriProduk.click();

  const tipe_pengajuan = page.locator("(//input[@role='combobox'])[2]")
  await tipe_pengajuan.click();
  const option_tipePengajuan = page.locator("//li[@role='option' and normalize-space()='Pengajuan Baru (New KEP)']")
  await expect(option_tipePengajuan).toBeVisible();
  await option_tipePengajuan.click();

  const jangkaWaktu = page.locator("(//input[@role='combobox'])[3]")
  await jangkaWaktu.click();
  const option_jangkaWaktu = page.locator("//li[@role='option' and normalize-space()='24 Bulan']")
  await expect(option_jangkaWaktu).toBeVisible();
  await option_jangkaWaktu.click();

  const jumlahPinjaman = page.locator("//input[@id='jumlahPinjaman']")
  await jumlahPinjaman.fill("25000000")

  const status_wargaNegara = page.locator("//input[@id='statusKewarganegaraan']")
  status_wargaNegara.click();
  const option_statusWargaNegara = page.locator("//li[@role='option' and normalize-space()='WNI']")
  await expect(option_statusWargaNegara).toBeVisible
  option_statusWargaNegara.click();

  const inputKITASNo = page.locator("//input[@placeholder='Masukkan Nomor KITAS']")
  const inputKITASName = page.locator("//input[@placeholder='Masukkan Nama Sesuai KITAS']")
await expect(inputKITASNo).toBeVisible
await inputKITASNo.fill("3000123456789384");
await expect(inputKITASName).toBeVisible
await inputKITASName.fill("Jason Theofillus Gunawan");

const tanggalLahir = page.locator("//input[@placeholder='Masukkan Tanggal Lahir']")
await tanggalLahir.type("05092003")

const ponsel = page.locator("//input[@placeholder='Masukkan Ponsel']")
await ponsel.fill("085211821384")

const email = page.locator("//input[@placeholder='Masukkan Email']")
await email.fill("jasonoke03@gmail.com")

const channel = page.locator("//input[@id='channel']")
await channel.click();
const option_channel = page.locator("//li[@role='option' and normalize-space()='MYPANIN']")
await expect(option_channel).toBeVisible
await option_channel.click();

const submit1 = page.locator("//button[@type='submit']")
submit1.click();
const submit2 = page.locator("(//button[normalize-space()='Submit'])[2]")
await expect(submit2).toBeVisible
submit2.click();
const buttonOk = page.locator("//button[normalize-space()='OK']")
await expect(buttonOk).toBeVisible
buttonOk.click();

//logout
  await button_profile.waitFor
  await button_profile.click();
  await logout.waitFor
  await logout.click();


});