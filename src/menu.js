export const renderMenu = (() => {

    const content = document.querySelector("#content");

    function createMenuItem(name, ingredients, price) {
        const menuItemCard = document.createElement("div");
        const menuItemName = document.createElement("div");
        const menuItemIngredients = document.createElement("div");
        const menuItemPrice = document.createElement("div");

        menuItemName.textContent = name;
        menuItemIngredients.textContent = ingredients;
        menuItemPrice.textContent = price;

        menuItemCard.appendChild(menuItemName);
        menuItemCard.appendChild(menuItemIngredients);
        menuItemCard.appendChild(menuItemPrice);

        return menuItemCard;
    }

    function fill() {
        content.appendChild(createMenuItem("Margherita", "Tomatoes, mozarella, oregano", "10$"));
        content.appendChild(createMenuItem("Cardinale", "Tomatoes, mozarella, oregano, ham, corn", "12$"));
        content.appendChild(createMenuItem("Regina", "Tomatoes, mozarella, oregano, ham, mushrooms", "12$"));
        content.appendChild(createMenuItem("Diavolo", "Tomatoes, mozarella, oregano, salami, hot peppers", "12$"));
        content.appendChild(createMenuItem("Spinaci", "Tomatoes, mozarella, oregano, feta, spinach", "12$"));
        content.appendChild(createMenuItem("Vegetarian", "Tomatoes, mozarella, oregano, olives, peppers", "12$"));
        content.appendChild(createMenuItem("Rustico", "Tomatoes, mozarella, oregano, salami, bacon, egg", "14$"));
        content.appendChild(createMenuItem("The Temple Pizza", "Tomatoes, mozarella, oregano, ham, salami, olives, peppers, egg", "16$")); 
    }

    return { fill };
})();