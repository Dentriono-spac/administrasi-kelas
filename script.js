// ======================================
// ADMINISTRASI KELAS
// SCRIPT UTAMA
// ======================================


// Membuka aplikasi Absensi QR
function bukaAbsensi() {

  window.location.href =
    "https://dentriono-spac.github.io/absensi-qr-sekolah/";

}


// Membuka aplikasi Perpustakaan
function bukaPerpustakaan() {

  window.location.href =
    "https://dentriono-spac.github.io/perpustakaan-sekolah/";

}


// Membuka Portofolio TRIONO, S.Pd.
function bukaPortofolio() {
  
  window.location.href =
    "https://sites.google.com/guru.sd.belajar.id/dentriono";
  
}

// Menu yang belum dibuat
function menuBelumTersedia(namaMenu) {

  alert(
    "Menu " + namaMenu +
    " sedang dalam tahap pengembangan.\n\n" +
    "Nanti akan kita sambungkan ke sistem Administrasi Kelas."
  );

}
