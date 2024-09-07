const menuBtn = document.querySelector('.menu-itself');
const menuLinks = document.querySelector('.menu-links');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn-js');
    menuLinks.classList.toggle('menu-links-js');
});