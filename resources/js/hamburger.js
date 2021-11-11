let menuOpen = '';

document.onload = function() {
    menuOpen = false;
};

let hamburger = document.getElementById('hamburger-menu');
let menu = document.getElementById('hamburger');

function toggleMenu() {
    if (menuOpen = false) {
        menuOpen = true;
        menu.style.display = flex;
    } else {
        menuOpen = false;
        menu.style.display = none;
    }
}

document.getElementById('hamburger-menu').onclick = toggleMenu();