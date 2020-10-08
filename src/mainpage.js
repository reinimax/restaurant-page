export const renderMainPage = (() => {

    const content = document.querySelector("#content");
    const container = document.createElement("div");
    const headLine = document.createElement("h1");
    const image = document.createElement("img");
    const description = document.createElement("p");

    headLine.textContent = "The Pizza Temple - Best pizza in town";
    image.setAttribute("src", "/img/pizza.jpg");
    image.setAttribute("alt", "Sliced pizza");
    description.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.`;

    container.setAttribute("id", "container");
    description.setAttribute("class", "description");

    container.appendChild(headLine);
    container.appendChild(image);
    container.appendChild(description);

    function fill() {
        content.appendChild(container);
    }

    return { fill };
})();