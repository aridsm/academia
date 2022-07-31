//menu mobile

const btnMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

const showMenuMobile = () => {
  btnMobile.classList.toggle('active');
  menu.classList.toggle('active')
}

const hideMenu = (e) => {
  if (e.target !== btnMobile && !btnMobile.contains(e.target)) {
    btnMobile.classList.remove('active');
    menu.classList.remove('active')
  }
}

btnMobile.addEventListener('click', showMenuMobile)
window.addEventListener('click', hideMenu)

//modal 

const modal = document.querySelector('#modal')
const btnFecharModal = document.querySelector('#modal .btn-fechar')
const listaGaleria = document.querySelectorAll('#galeria ul li button')
const backdropModal = document.querySelector('.backdrop')

function showModal(src, alt, descricao) {
  modal.classList.add('show');
  const img = modal.querySelector('.content img');
  const p = modal.querySelector('.content p');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);
  p.innerText = descricao

}

function fecharModal() {
  modal.classList.remove('show')
}

listaGaleria.forEach(li => {
  const img = li.querySelector('img');
  const src = img.getAttribute('src');
  const alt = img.getAttribute('alt');
  const descricao = li.dataset.descricao;
  li.addEventListener('click', () => {
    showModal(src, alt, descricao)
  })
})

btnFecharModal.addEventListener('click', fecharModal)
backdropModal.addEventListener('click', fecharModal)

// animacao ao scroll

const animaElements = document.querySelectorAll('[data-anima]');

function animaScroll() {
  const scroll_page = window.pageYOffset + window.innerHeight * 0.8;

  animaElements.forEach(element => {
    const element_to_top = element.getBoundingClientRect().top + window.pageYOffset;
    if (scroll_page > element_to_top) {
      element.classList.add('animated')
    }
  })
}
animaScroll()
window.addEventListener('scroll', animaScroll)