/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */


/** @module Login-Script */
/**
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
*Membuat variabel inputEmailElement untuk tamplian input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
 * Membuat variabel inputPasswordElement untuk tampilan input password.
 * @constant {HTMLElement}
 */
const inputPasswordElement = document.querySelector('#inputPassword');


  /**
   * Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
   * @constant {string}
   */
const expectedEmail = 'admin@dicoding.com';


  /**
   * Membuat variabel expectedPassword untuk menyimpan informasi email sementara.
   * @Constant {string}
   */
const expectedPassword = 'superpassword';


/* Comment : Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  
  /**
   * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
   * @constant {string}
   */
  const email = inputEmailElement.value;
  
  
  /**
   * Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
   * @constant {string}
   */
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
