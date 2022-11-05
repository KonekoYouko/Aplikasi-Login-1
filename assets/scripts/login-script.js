/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Comment : Membuat Variabel untuk setiap elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Comment : Membuat Variabel untuk menyimpan email dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi kli pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /* Comment : Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  
  /* Comment : Memastikan bahwa nilai email dan nilai password sesuai dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
  
   /* Comment : Jika sesuai program akan berpindah ke home */ 
    goToHome();
    
  } else {
    
     /* comment : jika program tidak sesuai maka akan menampilkan informasi bahwa input yang dimasukkan salah */
    showPopUp();
  }
});
