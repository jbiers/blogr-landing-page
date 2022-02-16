const hamburger = document.querySelector('.hamburger-menu');
const close = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hamburger-hidden');
});

close.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hamburger-hidden');
})