const bttMod = document.querySelector('.btt-modalidades')
const navMod = document.querySelector('.modalidades-btt nav')

function modMenu() {
  navMod.classList.toggle('ativo')
  this.classList.toggle('ativo');
  if (navMod.classList.contains('ativo')){
    this.setAttribute('aria-expanded', 'true')
  } else {
    this.setAttribute('aria-expanded', 'false')
  }
}

bttMod.addEventListener('click', modMenu)


/* btn menu */
const bttMobile = document.querySelector('.btt-menu')
const menuNav = document.querySelector('.js-menu-nav')

function menuAtivo() {
  menuNav.classList.toggle('ativo')
  bttMobile.classList.toggle('ativo')
}

bttMobile.addEventListener('click', menuAtivo)





function fechar(element) {

  if ((element.target.classList.contains('btt-modalidades') == false)) {
    navMod.classList.remove('ativo');
    bttMod.classList.remove('ativo')
  }

}
window.addEventListener('click', fechar)


/* modalidades */

var bttModalidades = document.querySelectorAll('.coluna1-mod .btts-mod-planos')
var contModalidades = document.querySelectorAll('.troca-mod')


bttModalidades.forEach((item, index) => {
  item.addEventListener('click', function() {
    bttModalidades.forEach((item) => {
      item.classList.remove('ativo')
    })
    bttModalidades[index].classList.add('ativo')
    contModalidades.forEach((item) => {
      item.classList.remove('ativo')
    })
    contModalidades[index].classList.add('ativo')

  })
})

var bttPlanos = document.querySelectorAll('.planos-btt .btts-mod-planos')
var contPlanos = document.querySelectorAll('.troca-planos')


bttPlanos.forEach((item, index) => {
  item.addEventListener('click', function() {
    bttPlanos.forEach((item) => {
      item.classList.remove('ativo')
    })
    bttPlanos[index].classList.add('ativo')
    contPlanos.forEach((item) => {
      item.classList.remove('ativo')
    })
    contPlanos[index].classList.add('ativo')

  })
})

/* troca setas */


var indice = 1;
mudarSlide(indice)

function antSlide() {
  mudarSlide(indice -= 1)
}

function proxSlide() {
  mudarSlide(indice += 1)
}


function mudarSlide(n) {
  var i;
  if (n > contPlanos.length - 1) {indice = 0}
  if (n < 0) {indice = contPlanos.length - 1}

  contPlanos.forEach((item) => {
    item.classList.remove('ativo')
  })

  bttPlanos.forEach((item) => {
    item.classList.remove('ativo')
  })

  bttPlanos[indice].classList.add('ativo')
  contPlanos[indice].classList.add('ativo')
}



AOS.init();