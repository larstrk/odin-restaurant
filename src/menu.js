const createMenu = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append p element
    const p = document.createElement('p');
    p.textContent = "Menu Page";
    pageContent.appendChild(p);

    content.appendChild(pageContent);
}
export default createMenu;