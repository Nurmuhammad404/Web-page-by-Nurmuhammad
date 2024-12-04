const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');

menuButton.addEventListener('click', () => {
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-250px';
    } else {
        sideMenu.style.left = '0px';
    }
});