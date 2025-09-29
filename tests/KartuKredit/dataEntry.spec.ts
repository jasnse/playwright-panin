import { test, expect } from '@playwright/test';

const path = require('path');

async function clickIfExists(locator: import('@playwright/test').Locator) {
  if (await locator.count() > 0) {
    await locator.click();
  }
}

async function fillIfExists(locator: import('@playwright/test').Locator, value: string) {
  if (await locator.count() > 0) {
    await locator.fill(value);
  }
}

async function checkCheckboxIfNotChecked(locator: import('@playwright/test').Locator) {
  if (await locator.count() > 0) {          // Cek apakah element ada
    if (!(await locator.isChecked())) {     // Cek apakah belum dicentang
      await locator.check();                // Centang
    }
    // Kalau sudah dicentang, otomatis dilewati
  }
}


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
  //await page.locator("(//button[@aria-label='edit'])[1]").click();
const editButton = page.locator("(//button[@aria-label='edit'])[1]");
await editButton.scrollIntoViewIfNeeded();
await editButton.click();

  //Data Sales
  await page.locator("//button[span[text()='Simpan']]").click();
  await page.locator("//button[normalize-space()='OK']").click();

  //Data Pemohon
  await clickIfExists(page.locator("//div[p[text()='-- Select Pengiriman Kartu --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='Alamat KTP']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Fasilitas E-Statement --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='Ya']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kewarganegaraan --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='Indonesia']"))
  await fillIfExists(page.locator("//input[@type='text' and @name='npwp']"), "3000167645389028");

  await fillIfExists(page.locator("//textarea[@name='id_address']"), "Jl. Tomang Raya Selatan no 12B");
  await fillIfExists(page.locator("//input[@name='id_rt']"), "008");
  await fillIfExists(page.locator("//input[@name='id_rt']"), "012");
  await clickIfExists(page.locator("//div[p[text()='-- Select Provinsi E-KTP --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='DAERAH KHUSUS IBUKOTA JAKARTA']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kota/Kabupaten E-KTP --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='JAKARTA UTARA']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kecamatan E-KTP --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kelurahan E-KTP --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']"))

  await fillIfExists(page.locator("//textarea[@name='domicily_address']"), "Jl. Tomang Raya Selatan no 12B");
  await fillIfExists(page.locator("//input[@name='domicily_rt']"), "008");
  await fillIfExists(page.locator("//input[@name='domicily_rw']"), "012");
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//div[p[text()='-- Select Provinsi Domisili --']]"))
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='DAERAH KHUSUS IBUKOTA JAKARTA']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kota/Kabupaten Domisili --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='JAKARTA UTARA']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kecamatan Domisili --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kelurahan Domisili --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']"))

  await fillIfExists(page.locator("//input[@type='text' and @name='nama_tercetak']"), "Ini Nama Tercetak");
  await fillIfExists(page.locator("//input[@type='text' and @name='born_place']"), "Jakarta");
  await clickIfExists(page.locator("//div[p[text()='-- Select Jenis Kelamin --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='Laki-laki']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Status Perkawinan --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='Belum Kawin']"))
  await fillIfExists(page.locator("//input[@name='mother_maiden_name']"), "nama ibu Saya");
  await fillIfExists(page.locator("//input[@name='econtact_name']"), "Nama Kontak darurat");
  await fillIfExists(page.locator("//input[@name='econtact_ponsel']"), "087622348762"); 
  await checkCheckboxIfNotChecked(page.locator("(//input[@type='checkbox'])[3]"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Hubungan Kontak Darurat --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='Orang Tua']"))

  await page.locator("//button[span[text()='Simpan']]").click();
  await page.locator("//button[normalize-space()='OK']").click();

  //data pekerjaan
  await fillIfExists(page.locator("//input[@name='company_name']"), "PT ABCD1234");
  await fillIfExists(page.locator("//input[@name='company_telp_number']"), "PT ABCD1234");
  await fillIfExists(page.locator("//textarea[@name='office_address']"), "JL. Alamat untuk PT ABCD1234");
  await clickIfExists(page.locator("//div[p[text()='-- Select Jenis Perusahaan --']]"))
await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='BUMN']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Bidang Usaha Perusahaan --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='PERUSAHAAN IT']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Profesi --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='Pegawai Swasta']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Provinsi Perusahaan --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='DAERAH KHUSUS IBUKOTA JAKARTA']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kota/Kabupaten Perusahaan --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='JAKARTA UTARA']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kecamatan Perusahaan --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Kelurahan Perusahaan --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']"))
  await clickIfExists(page.locator("//div[p[text()='-- Select Jabatan --']]"))
  await page.waitForTimeout(2000);
  await clickIfExists(page.locator("//li[@role='option' and normalize-space()='Staff/Karyawan']"))
  await fillIfExists(page.locator("(//input[@type='text' and @inputmode='decimal'])[1]"), '25000000');
  await fillIfExists(page.locator("(//input[@type='text' and @inputmode='decimal'])[2]"), '25000000');

  await page.locator("//button[span[text()='Simpan']]").click();
  await page.locator("//button[normalize-space()='OK']").click();

  //upload dokumen
    const buttonUpload = page.locator("//button[@aria-label='upload']")

  for(let i=0; i<10; i++) {
    if(i % 2 === 0) {
        await buttonUpload.nth(i).click();
        const fileInput = page.locator('input[type="file"][accept=".pdf, .jpeg, .jpg, .png"]');
        const filePath = path.join(__dirname, '..', 'sampe KTP.jpeg');
        await fileInput.setInputFiles(filePath);
        await page.locator("//button[normalize-space()='OK']").click();
        await page.locator("//button[normalize-space()='Save & Upload']").click();
         await page.locator("//button[normalize-space()='OK']").click(); 
    }
  }

  //Kartu tambahan
  await page.locator("//button[normalize-space(text())='Kartu Tambahan']").click();

  //Pelaporan Slik
  await page.locator("//button[normalize-space(text())='Pelaporan SLIK']").click();
  await page.locator("//button[@type='button' and normalize-space(.//span[text()='Simpan & Isi Memo'])]").click();
  await page.locator("//button[normalize-space()='OK']").click();
  await page.locator("//textarea[@aria-label='Masukkan memo Anda']").fill("hallo memo");
  await page.locator("//button[normalize-space(text())='Simpan Memo']").click();
  await page.locator("//button[normalize-space()='OK']").click();

  //SLA Kredit
  await page.locator("//button[normalize-space(text())='SLA Kredit']").click();
  await page.locator("//button[@type='button' and normalize-space(.//span[text()='Selesai'])]").click();
  await page.locator("//button[normalize-space()='OK']").click();





await button_profile.waitFor
await button_profile.click();
await logout.waitFor
await logout.click();

})