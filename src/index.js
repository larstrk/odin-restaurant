import _, { forEach } from 'lodash';
import './style.css';
// import home from './restaurant.js';
// import menu from './menu.js';
// import about from './about.js';
import { loadHome, loadMenu, loadAbout, clearContent } from './pageLoad.js';

// Load the page
clearContent();
loadHome();


const homeButton = document.getElementById('home');
homeButton.addEventListener('click', (button) => {
    clearContent();
    loadHome();
})

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', (button) => {
    clearContent();
    loadMenu();
})

const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', (button) => {
    clearContent();
    loadAbout();
})