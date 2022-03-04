/**
 * 
 * DOM (Selection 1)
 * merupakan tahap awal ketika ingin melakukan manipulasi/penelusuran pada DOM.
 * 
 *    - DOM Selection Method :
 *       __________________________ ________________
 *      |                          |                |
 *      |          Method          |     Hasil      |
 *      |__________________________|________________|
 *      | getElementById()         | element        |
 *      | getElementsByTagName()   | HTMLCollection |
 *      | getElementsByClassName() | HTMLCollection |
 *      | querySelector()          | element        |
 *      | querySelectorAll()       | nodeList       |
 *      |__________________________|________________|
 * 
 */

// document.getElementById()
const judul = document.getElementById('judul')
judul.style.color = 'red' // hasilnya inline css
judul.style.backgroundColor = '#ccc'
judul.innerHTML = 'Sandhika Galih'


// document.getElementsByTagName()
const p = document.getElementsByTagName('p')
for(let i=0; i<p.length; i++) {
  p[i].style.backgroundColor = 'lightblue'
}
// const h1 = document.getElementsByTagName('h1') // error, karena masih berbentuk HTMLCollection, maka harus diubah menjadi element dahulu.
const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px'


// document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'Ini diubah dari javascript'