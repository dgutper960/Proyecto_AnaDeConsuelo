/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

console.log("Welcome to: Web Ana de Consuelo");

// Menú Hamburger
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');

    hamburgerMenu.addEventListener('click', function() {
        menuItems.classList.toggle('active');
    });
});