/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
  // -Global dan local scope 
  // global scope: variabel yang di buka bisa di akses dimana saja dalam sebuah file.
  // local scpe: hanya bisa di akses pada dalam sebuah blok saja.

  // -global :
  // let nama = "rey"
  // funtion ambilNama(){
  //   return nama;
  // }

  // console.log(nama)

  // -local :
  // funtion ambilNama(){
  //   let nama = "rey"
  //   return nama
  // }


  /// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///-nama yang muncul adalah Mariah
// -karena mengambil terlebih dahulu yang di local 
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));