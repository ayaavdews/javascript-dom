

/**
 * 
 * Event Bubbling
 * 
 *    - secara default, ketika kita memberikan event pada sebuah elemen, maka event tersebut akan berlaku
 *      untuk elemen-elemen pembungkusnya juga.
 *      contoh : kita memberi event ke elemen 'a', maka event tersebut juga akan berlaku ke elemen
 *               pembungkusnya (card)
 * 
 *    - saat kita menekan card maka akan muncul alert
 *    - saat kita menekan close maka card akan menghilang
 *    
 *    - event bubbling terjadi ketika kita menekan close dimana dia dibungkus dengan elemen card
 *      sehingga saat close ditekan ia akan mengeluarkan alert dahulu, setelah alert keluar, baru
 *      event pada close dijalankan.  
 * 
 *    - untuk mengatasinya kita menggunakan method stopPropagation()
 * 
 */

// const btnClose = document.querySelectorAll('.close')
// btnClose.forEach((event) => {
//   event.addEventListener('click', (e) => {
//     e.target.parentElement.style.display = 'none'
//     e.preventDefault()
//     e.stopPropagation()
//   })
// })


// const cards = document.querySelectorAll('.card')
// cards.forEach(function(card) {
//   card.addEventListener('click', function(e) {
//     alert('ok')
//   })
// })



// Event Bubbling
const container = document.querySelector('.container')
container.addEventListener('click', (e) => {
  if(e.target.className == 'close') {
    e.target.parentElement.style.display = 'none'
    e.preventDefault()
  }
})