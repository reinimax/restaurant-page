export const renderContact = (() => {

    const content = document.querySelector("#content");
    const adressCard = document.createElement("div");
    const companyName = document.createElement("div");
    const street = document.createElement("div");
    const city = document.createElement("div");

    companyName.textContent = "The Pizza Temple";
    street.textContent = "Boulevard of Dreams 99";
    city.textContent = "12345 Los Angeles";

    adressCard.setAttribute("id", "adresscard");
    companyName.setAttribute("class", "itemname");
    companyName.classList.add("contact-subdiv")
    street.setAttribute("class", "contact-subdiv");
    city.setAttribute("class", "contact-subdiv");

    function fill() {
        content.appendChild(adressCard);
        adressCard.appendChild(companyName);
        adressCard.appendChild(street);
        adressCard.appendChild(city);
    }

    return { fill };
})();