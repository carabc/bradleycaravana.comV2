//DOM Variables For Menu
const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const menuSelector = document.querySelector('.menu-selector');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

btn.addEventListener('click', menuToggler);

function menuToggler() {
  if (!showMenu) {
    btn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    btn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}
