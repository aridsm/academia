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