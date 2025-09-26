import { test, expect } from '@playwright/test';

const path = require('path');

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
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='Alamat KTP']").click();
  await page.locator("//div[p[text()='-- Select Fasilitas E-Statement --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='Ya']").click();
  await page.locator("//div[p[text()='-- Select Kewarganegaraan --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='Indonesia']").click();
  await page.locator("//input[@type='text' and @name='npwp']").fill("3000167645389028");

  await page.locator("//textarea[@name='id_address']").fill("Jl. Tomang Raya Selatan no 12B");
  await page.locator("//input[@name='id_rt']").fill("008");
  await page.locator("//input[@name='id_rt']").fill("012");
  await page.locator("//div[p[text()='-- Select Provinsi E-KTP --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='DAERAH KHUSUS IBUKOTA JAKARTA']").click();
  await page.locator("//div[p[text()='-- Select Kota/Kabupaten E-KTP --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='JAKARTA UTARA']").click();
  await page.locator("//div[p[text()='-- Select Kecamatan E-KTP --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']").click();
  await page.locator("//div[p[text()='-- Select Kelurahan E-KTP --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']").click();

  await page.locator("//textarea[@name='domicily_address']").fill("Jl. Tomang Raya Selatan no 12B");
  await page.locator("//input[@name='domicily_rt']").fill("008");
  await page.locator("//input[@name='domicily_rw']").fill("012");
  await page.waitForTimeout(2000);
  await page.locator("//div[p[text()='-- Select Provinsi Domisili --']]").click();
  await page.locator("//li[@role='option' and normalize-space()='DAERAH KHUSUS IBUKOTA JAKARTA']").click();
  await page.locator("//div[p[text()='-- Select Kota/Kabupaten Domisili --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='JAKARTA UTARA']").click();
  await page.locator("//div[p[text()='-- Select Kecamatan Domisili --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']").click();
  await page.locator("//div[p[text()='-- Select Kelurahan Domisili --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']").click();

  await page.locator("//input[@type='text' and @name='nama_tercetak']").fill("Ini Nama Tercetak");
  await page.locator("//input[@type='text' and @name='born_place']").fill("Jakarta");
  await page.locator("//div[p[text()='-- Select Jenis Kelamin --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='Laki-laki']").click();
  await page.locator("//div[p[text()='-- Select Status Perkawinan --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='Belum Kawin']").click();
  await page.locator("//input[@name='mother_maiden_name']").fill("nama ibu Saya");
  await page.locator("//input[@name='econtact_name']").fill("Nama Kontak darurat");
  await page.locator("//input[@name='econtact_ponsel']").fill("087622348762"); 
  await page.locator("(//input[@type='checkbox'])[3]").check();
  await page.locator("//div[p[text()='-- Select Hubungan Kontak Darurat --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='Orang Tua']").click();

  await page.locator("//button[span[text()='Simpan']]").click();
  await page.locator("//button[normalize-space()='OK']").click();

  //data pekerjaan
  await page.locator("//input[@name='company_name']").fill("PT ABCD1234");
  await page.locator("//input[@name='company_telp_number']").fill("PT ABCD1234");
  await page.locator("//textarea[@name='office_address']").fill("JL. Alamat untuk PT ABCD1234");
  await page.locator("//div[p[text()='-- Select Jenis Perusahaan --']]").click();
await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='BUMN']").click();
  await page.locator("//div[p[text()='-- Select Bidang Usaha Perusahaan --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='PERUSAHAAN IT']").click(); 
  await page.locator("//div[p[text()='-- Select Profesi --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='Pegawai Swasta']").click(); 
  await page.locator("//div[p[text()='-- Select Provinsi Perusahaan --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='DAERAH KHUSUS IBUKOTA JAKARTA']").click(); 
  await page.locator("//div[p[text()='-- Select Kota/Kabupaten Perusahaan --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='JAKARTA UTARA']").click();
  await page.locator("//div[p[text()='-- Select Kecamatan Perusahaan --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']").click();
  await page.locator("//div[p[text()='-- Select Kelurahan Perusahaan --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='PENJARINGAN']").click();
  await page.locator("//div[p[text()='-- Select Jabatan --']]").click();
  await page.waitForTimeout(2000);
  await page.locator("//li[@role='option' and normalize-space()='Staff/Karyawan']").click();
  await page.locator("(//input[@type='text' and @inputmode='decimal'])[1]").fill('25000000');
  await page.locator("(//input[@type='text' and @inputmode='decimal'])[2]").fill('25000000');

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