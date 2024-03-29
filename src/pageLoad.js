import createHomePage from "./restaurant";
import createMenu from './menu';
import createAbout from './about';

function loadHome() {
    createHomePage();
}

function loadMenu() {
    createMenu();
}

function loadAbout() {
    createAbout();
}

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = "";
}

export { loadHome, loadMenu, loadAbout, clearContent }