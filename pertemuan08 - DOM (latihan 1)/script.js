const btnUbahWarna = document.getElementById('btnUbahWarna') 
// const body = document.getElementsByTagName('body')[0]
// khusus untuk body, kita bisa menggunakan : document.body
btnUbahWarna.addEventListener('click', function() {
  document.body.classList.toggle('biru-muda')
})


const btnUbahWarna2 = document.createElement('button')
const btnText       = document.createTextNode('Acak Warna')
btnUbahWarna2.appendChild(btnText)
btnUbahWarna2.setAttribute('type', 'button')
btnUbahWarna.after(btnUbahWarna2)

btnUbahWarna2.addEventListener('click', function() {
  const r = Math.round( Math.random() * 255 + 1) // pembulatan -> menghasilkan bilangan antara 1-255
  const g = Math.round( Math.random() * 255 + 1) 
  const b = Math.round( Math.random() * 255 + 1) 
  document.body.style.backgroundColor = 'rgb('+ r + ',' + g +',' + b + ')'
})

const sliderRed   = document.querySelector('input[name=slider-red]')
const sliderGreen = document.querySelector('input[name=slider-green]')
const sliderBlue  = document.querySelector('input[name=slider-blue]')

sliderRed.addEventListener('input', () => {
  const r = sliderRed.value
  const g = sliderGreen.value
  const b = sliderBlue.value
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

sliderGreen.addEventListener('input', () => {
  const r = sliderRed.value
  const g = sliderGreen.value
  const b = sliderBlue.value
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

sliderBlue.addEventListener('input', () => {
  const r = sliderRed.value
  const g = sliderGreen.value
  const b = sliderBlue.value
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})


document.body.addEventListener('mousemove', function(e) {
  // posisi mouse
  // e.clientX

  // ukuran browser
  // terletak dalam object window, bukan object document (tombol close, minimize, dll) *bagian putihnya saja
  // window.innerWidth

  const xPos = Math.round(e.clientX / window.innerWidth * 255)
  const yPos = Math.round(e.clientY / window.innerHeight * 255)

  document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)'
})
