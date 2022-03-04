function getPilihanComputer() {
  const comp = Math.random()
  if(comp < 0.34) {return 'gajah'} 
  if(comp>=0.34 && comp<=0.67) {return 'orang'} 
  return 'semut'
}

function getHasil(comp, player) {
  if(player == comp) {return 'SERI'}
  if(player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH'
  if(player == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH'
  if(player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH'
}

// const pGajah = document.querySelector('.gajah')
// const pOrang = document.querySelector('.orang')
// const pSemut = document.querySelector('.semut')
// pGajah.addEventListener('click', () => {
//   const comp   = getPilihanComputer()
//   const player = pGajah.className
//   const hasil = getHasil(comp, player)

//   const imgKomputer = document.querySelector('.img-komputer')
//   imgKomputer.setAttribute('src', 'img/'+comp+'.png')

//   const info = document.querySelector('.info')
//   info.innerHTML = hasil
// })

function putar() {
  const imgComputer = document.querySelector('.img-komputer')
  const gambar = ['gajah', 'orang', 'semut']
  let i = 0
  const waktuMulai = new Date().getTime()
  // setInterval() : fungsi untuk melakukan sesuatu secara berulang-ulang, selama interval tertentu
  setInterval(function() {
    if(new Date().getTime() - waktuMulai > 1500) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
    if(i == gambar.length) i=0
  }, 150)
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach((pil)=> {
  pil.addEventListener('click', () => {
    const comp   = getPilihanComputer()
    const player = pil.className
    const hasil  = getHasil(comp, player)

    putar()

    setTimeout(function() {
      const imgKomputer = document.querySelector('.img-komputer')
      imgKomputer.setAttribute('src', 'img/'+comp+'.png')
  
      const info = document.querySelector('.info')
      info.innerHTML = hasil
    }, 1500)

  })
})

