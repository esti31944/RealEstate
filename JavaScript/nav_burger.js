// nav_burger.js
function toggleMenu() {
    const menu = document.querySelector('.dropdown-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('open');
}

window.addEventListener('resize', function() {
    const menu = document.querySelector('.dropdown-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        menu.style.display = 'none';
        hamburger.classList.remove('open');
    }
});