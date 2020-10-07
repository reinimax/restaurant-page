export const renderMenu = (() => {

    const content = document.querySelector("#content");
    const menuItemCard = document.createElement("div");
    const menuItemName = document.createElement("div");
    const menuItemIngredients = document.createElement("div");
    const menuItemPrice = document.createElement("div");

    menuItemName.textContent = "Margherita";
    menuItemIngredients.textContent = "Tomatoes, Mozarella, Oregano";
    menuItemPrice.textContent = "10$";

    function fill() {
        content.appendChild(menuItemCard);
        menuItemCard.appendChild(menuItemName);
        menuItemCard.appendChild(menuItemIngredients);
        menuItemCard.appendChild(menuItemPrice);
    }

    return { fill };
})();