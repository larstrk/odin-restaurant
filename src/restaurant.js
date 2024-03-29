// Create the content div for the Home Page.
const createHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append img element
    const img = document.createElement('img');
    img.src = "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
    pageContent.appendChild(img);

    // Create and append p element
    const p = document.createElement('p');
    p.textContent = "We serve the best food in town.";
    pageContent.appendChild(p);

    content.appendChild(pageContent);
}

export default createHomePage;