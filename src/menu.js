export const renderMenu = (() => {

    const content = document.querySelector("#content");
    const menuCard = document.createElement("div");

    function createMenuItem(name, ingredients, price) {
        const menuItemCard = document.createElement("div");
        const menuItemName = document.createElement("div");
        const menuItemIngredients = document.createElement("div");
        const menuItemPrice = document.createElement("div");

        menuItemName.textContent = name;
        menuItemIngredients.textContent = ingredients;
        menuItemPrice.textContent = price;

        menuCard.setAttribute("id", "menucard");
        menuItemCard.setAttribute("class", "itemcard");
        menuItemName.setAttribute("class", "itemname");
        menuItemName.classList.add("subdiv");
        menuItemIngredients.setAttribute("class", "subdiv");
        menuItemPrice.setAttribute("class", "subdiv");
        menuItemPrice.classList.add("pricetag");

        menuItemCard.appendChild(menuItemName);
        menuItemCard.appendChild(menuItemPrice);
        menuItemCard.appendChild(menuItemIngredients);
        

        return menuItemCard;
    }

    menuCard.appendChild(createMenuItem("Margherita", "Tomatoes, mozarella, oregano", "10$"));
    menuCard.appendChild(createMenuItem("Cardinale", "Tomatoes, mozarella, oregano, ham, corn", "12$"));
    menuCard.appendChild(createMenuItem("Regina", "Tomatoes, mozarella, oregano, ham, mushrooms", "12$"));
    menuCard.appendChild(createMenuItem("Diavolo", "Tomatoes, mozarella, oregano, salami, hot peppers", "12$"));
    menuCard.appendChild(createMenuItem("Spinaci", "Tomatoes, mozarella, oregano, feta, spinach", "12$"));
    menuCard.appendChild(createMenuItem("Vegetarian", "Tomatoes, mozarella, oregano, olives, peppers", "12$"));
    menuCard.appendChild(createMenuItem("Rustico", "Tomatoes, mozarella, oregano, salami, bacon, egg", "14$"));
    menuCard.appendChild(createMenuItem("The Temple Pizza", "Tomatoes, mozarella, oregano, ham, salami, olives, peppers, egg", "16$"));

    function fill() {
        content.appendChild(menuCard);
    }

    return { fill };
})();