// ##### ##### Animations ##### #####

const hamb = document.getElementById('hamb-menu');
const hambIcon = document.querySelector('.hamb');
const closeIcon = document.querySelector('.close');
const menu = document.querySelector('.nav__list-mobile');
const overlay = document.querySelector('.nav-overlay');

hamb.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    overlay.classList.toggle('show-overlay');
    hambIcon.classList.toggle('hide-hamb');
    closeIcon.classList.toggle('show-x');
})