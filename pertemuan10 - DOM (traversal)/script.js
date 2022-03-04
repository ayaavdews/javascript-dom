/**
 * 
 * DOM Traversal (Penelusuran DOM)
 * 
 *    - Langkah
 *      1. menyeleksi sebuah elemen terlebih dahulu menggunakan DOM selection.
 *      2. setelah elemen terseleksi, kita akan memilih elemen lain berdasarkan
 *         elemen yang kita seleksi tadi.
 * 
 * 
 *    - DOM Traversal Method
 *       ________________________ _________
 *      |                        |         |
 *      |         Method         |  Hasil  |
 *      |________________________|_________|
 *      | parentNode             | node    |
 *      | parentElement          | element |
 *      | nextSibling            | node    | 
 *      | nextElementSibling     | element |
 *      | previousSibling        | node    |    
 *      | previousElementSibling | element |
 *      |________________________|_________|
 * 
 */


// const btnClose = document.querySelector('.close')
// const card     = document.querySelector('.card')

// btnClose.addEventListener('click', () => {
//   card.style.display = 'none'
// })


// DOM Traversal
const btnClose = document.querySelectorAll('.close')

// for(let i=0; i<btnClose.length; i++) {
//   btnClose[i].addEventListener('click', (e) => {
//     // close[i].parentElement.style.display = 'none'
//     e.target.parentElement.style.display = 'none'
//   })
// }

btnClose.forEach((event) => {
  event.addEventListener('click', (e) => {
    e.target.parentElement.style.display = 'none'
  })
})



const nama = document.querySelector('.nama')
console.log(nama)               // contactOne
console.log(nama.parentElement) // card
console.log(nama.parentNode)    // card
console.log(nama.parentElement.parentElement) // container

console.log(nama.nextSibling)  // text (enter)
console.log(nama.nextElementSibling)  // <span class="telp">08123456789</span>
console.log(nama.previousElementSibling)  // <img src="img/contact1.png" width="96" height="96">
console.log(nama.previousElementSibling.previousElementSibling)  // null