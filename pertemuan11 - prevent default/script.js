/**
 * 
 * Prevent Default
 * 
 *    - sebuah method yang berada didalam event, yang bertujuan menghentikan aksi default yang dilakukan sebuah elemen
 * 
 */

const btnClose = document.querySelectorAll('.close')
btnClose.forEach((event) => {
  event.addEventListener('click', (e) => {
    e.target.parentElement.style.display = 'none'
    e.preventDefault()
  })
})