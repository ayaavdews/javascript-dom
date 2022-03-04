/**
 * 
 * Javascript DOM (Manipulation 3)
 * 
 *    - Manipulasi Node 
 *      > document.createElement()
 *      > document.createTextNode()
 *      > node.appendChild()
 *      > node.insertBefore()
 *      > parentNode.removeChild()
 *      > parentNode.replaceChilid()
 *      > ...
 *    
 *    - Manipulas Node (method baru)
 *      > parentNode.append()
 *      > parentNode.prepend()
 *      > childNode.before()
 *      > childNode.after()
 *      > childNode.remove()
 *      > childNode.replaceWith()
 *      >
 */


// document.createElement() : membuat elemen baru
const p = document.createElement('p')
// document.createTextNode()
const teks = document.createTextNode('paragraf baru')
// node.appendChild() : simpan text ke dalam paragraf
p.appendChild(teks)
// simpan p diakhir section a
// appendChild : menyimpan ke akhir dari sebuah elemen parent
const sectionA = document.getElementById('a')
sectionA.appendChild(p)


const li = document.createElement('li')
const teks2 = document.createTextNode('item 1.5')
li.appendChild(teks2)
const ul  = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')
ul.insertBefore(li, li2)


// parentNode.removeChild()
const ig = document.getElementsByTagName('a')[0];
sectionA.removeChild(ig)


// parentNode.replaceChilid()
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2 = document.createElement('h2')
const judul = document.createTextNode('Judul Baru')
h2.appendChild(judul)

sectionB.replaceChild(h2, p4) // parameter : nodeBaru, nodeLama



p.style.backgroundColor = 'salmon'
li.style.backgroundColor = 'salmon'
h2.style.backgroundColor = 'salmon'
