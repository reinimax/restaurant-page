export const renderContact = (() => {

    const content = document.querySelector("#content");
    const adressCard = document.createElement("div");
    const companyName = document.createElement("div");
    const street = document.createElement("div");
    const city = document.createElement("div");

    companyName.textContent = "The Pizza Temple";
    street.textContent = "Boulevard of Dreams 99";
    city.textContent = "12345 Los Angeles";

    function fill() {
        content.appendChild(adressCard);
        adressCard.appendChild(companyName);
        adressCard.appendChild(street);
        adressCard.appendChild(city);
    }

    return { fill };
})();