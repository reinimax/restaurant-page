import "./reset.css";
import "./style.css";
import { renderMainPage } from "./mainpage.js";
import { renderContact } from "./contact.js";
import { renderMenu } from "./menu.js";

(function() {
    const body = document.querySelector("body");
    const content = document.querySelector("#content");
    const navBar = document.createElement("div");
    const mainBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    
    navBar.setAttribute("id", "navbar");
    mainBtn.setAttribute("id", "main-btn");
    menuBtn.setAttribute("id", "menu-btn");
    contactBtn.setAttribute("id", "contact-btn");
    mainBtn.setAttribute("class", "nav-btn");
    mainBtn.classList.add("blend");
    menuBtn.setAttribute("class", "nav-btn");
    contactBtn.setAttribute("class", "nav-btn");
    
    mainBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    mainBtn.addEventListener("click", switchPage);
    menuBtn.addEventListener("click", switchPage);
    contactBtn.addEventListener("click", switchPage);
    
    body.appendChild(navBar);
    navBar.appendChild(mainBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    
    
    function switchPage(event) {
        clearContent();
        colorActiveBtn(event.target);
        switch (event.target.id) {
            case "main-btn":
                renderMainPage.fill();
                break;
            case "menu-btn":
                renderMenu.fill();
                break;
                case "contact-btn":
                renderContact.fill();
                break;
        }
    }
    
    function clearContent() {
        while(content.childElementCount > 0) {
            content.lastChild.remove();
        }
    }

    function colorActiveBtn(btn) {
        let buttons = navBar.childNodes;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("blend");
        }
        btn.classList.add("blend");
    }

})();

renderMainPage.fill();