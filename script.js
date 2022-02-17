const hamburger = document.querySelector('.hamburger-menu');
const close = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');

function hideMenu() {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hamburger-hidden');
}

hamburger.addEventListener('click', hideMenu);

close.addEventListener('click', hideMenu);

/*
    Fix the weird hover thing with javascript
*/