/**
 * 
 * DOM (Selection 2)
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


// document.querySelector()
// mengembalikan satu elemen, jika jumlahnya banyak, hanya elemen pertama yang dikembalikan
  const p4 = document.querySelector('#b p')
  p4.style.color = 'green'
  p4.style.fontSize = '30px'

  const li2 = document.querySelector('section#b ul li:nth-child(2)')
  li2.style.backgroundColor = 'orange'


// document.querySelectorAll()  
  const paragraf = document.querySelectorAll('p')
  paragraf[1].style.backgroundColor = 'lightgreen'


// mengubah Node Root
// const sectionB = document.getElementById('b')
const sectionB = document.querySelector('section#b')
const p4 = sectionB.getElementsByTagName('p')[0]
  