/**
 * 
 * Javascript DOM (Manipulation 1)
 * 
 *    - Manipulasi Element
 *        > element.innerHTML
 *        > element.style.<property>
 *        > element.setAttribute()
 *        > element.classList
 *        > ...
 * 
 *    - Manipulasi Node
 *      pertemuan berikutnya...
 * 
 */

/**
 *  _______________________________
 * |                               |
 * |       element.innerHTML       | 
 * |_______________________________|
 */
// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>belajar javascript</em>'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'Hello World'


/**
 *  _____________________________________
 * |                                     |
 * |       element.style.<property>      | 
 * |_____________________________________|
 */
// const judul = document.querySelector('#judul')
// judul.style.color = 'lightblue'


/**
 *  ______________________________________
 * |                                      |
 * |       element.setAttribute()         | 
 * |       element.getAttribute()         | 
 * |       element.removeAttribute()      | 
 * |______________________________________|
 */
//  const judul = document.getElementsByTagName('h1')[0]
//  const link  = document.querySelector('section#a a')
//  judul.setAttribute('name', 'sandhika')
//  console.log(link.getAttribute('href'))
// //  link.removeAttribute('href')


/**
 *  _______________________________________
 * |                                       |
 * |     element.classList                 | 
 * |     element.classList.add()           | 
 * |     element.classList.remove()        | 
 * |     element.classList.toggle()        | 
 * |     element.classList.item()          | 
 * |     element.classList.contains()      | 
 * |     element.classList.replace()       | 
 * |_______________________________________|
 */
const p2 = document.querySelector('.p2')
console.log('classlist : ' + p2.classList)

// element.classList.add()      :
// menambah kelas baru
p2.classList.add('label')
console.log('add : ' + p2.classList)


// element.classList.remove()   :
// menghilangkan kelas yang ada
p2.classList.remove('label')
console.log('remove : ' + p2.classList)


// element.classList.toggle()   :
// jika sebuah elemen tidak memiliki kelas tertentu maka akan ditambahkan, jika kelas tertentu sudah ada maka dihilangkan
// output true  : kelas ditambahkan
// output false : kelas dihapus 
p2.classList.toggle('paragraph')
console.log('toggle : ' + p2.classList)


// element.classList.item()     :
// mengetahui kelas tertentu dalam sebuah elemen
// perhitungannya dimulai dari 0,1,2,3,..., dst.
p2.classList.add('satu')
p2.classList.add('dua')
p2.classList.add('tiga')
console.log('classlist : ' + p2.classList)
console.log(p2.classList.item(3))


// element.classList.contains() :
// mengecek dalam sebuah elemen apakah ada kelas tertentu
console.log(p2.classList.contains('dua'))
console.log(p2.classList.contains('lima'))


// element.classList.replace()  :
// mengganti kelas yang ada dengan kelas yang baru
console.log('classlist : ' + p2.classList)
console.log('replace   : ' + p2.classList.replace('dua', 'two'))
console.log('classlist : ' + p2.classList)

