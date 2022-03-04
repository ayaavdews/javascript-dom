/**
 * 
 * Javascript DOM (Events)
 * 
 *    -   Events      !=           Even
 *      (kejadian)           (genap/meskipun)
 * 
 *    - Definisi : Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM
 *                 kejadian tersebut bisa dilakukan oleh user (mouse event, keyboard event, dll) atau,
 *                 dilakukan secara otomatis oleh API (animasi selesai dijalankan, halaman selesai di load, dll)
 * 
 *    - Cara menerapkan/mendengarkan event
 *      > Event Handler
 *          * inline HTML attribute
 *          * Element method
 *      > addEventListener() *terbaru daripada event handler
 * 
 *    - Event List : 
 *      > Mouse Event         > Focus Event       > CSS Animation & Transition Event
 *      > Keyboard Event      > View Event        > Drag & Drop Event
 *      > Resources Event     > Form Event        > Dll.
 * 
 */

// event handler (inline HTML attribute)
 function ubahWarnaP2() {
  const p2 = document.querySelector('.p2')
  p2.style.backgroundColor = 'lightblue'
}


// event handler (element method)
function ubahWarnaP3() {
  p3.style.backgroundColor = 'salmon'
}
const p3 = document.querySelector('.p3')
p3.onclick = ubahWarnaP3


// addEventListener()
const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function() {
  p4.style.backgroundColor = 'lightgreen'

  const ul = document.querySelector('section#b ul')
  const li = document.createElement('li')
  const text = document.createTextNode('item baru')
  li.appendChild(text)
  ul.appendChild(li)
})


/**
 * 
 * Perbedaan Event Handler & addEventListener
 *    - Event Handler    : perubahan yang terakhir dilakukan akan 'menimpa' perubahan sebelumnya.
 *    - addEventListener : perubahan yang terakhir dilakukan akan 'menambah' perubahan sebelumnya.
 * 
 */