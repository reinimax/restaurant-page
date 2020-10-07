import "./reset.css";
import "./style.css";
import { renderMainPage } from "./mainpage.js"

const navigator = (() => {
    const body = document.querySelector("body");
    const navBar = document.createElement("div");
    const mainBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    
    navBar.setAttribute("id", "navbar");
    mainBtn.setAttribute("id", "main-btn");
    menuBtn.setAttribute("id", "menu-btn");
    mainBtn.setAttribute("class", "nav-btn");
    menuBtn.setAttribute("class", "nav-btn");
    
    mainBtn.textContent = "Main";
    menuBtn.textContent = "Menu";

    mainBtn.addEventListener("click", switchPage);
    menuBtn.addEventListener("click", switchPage);
    
    body.appendChild(navBar);
    navBar.appendChild(mainBtn);
    navBar.appendChild(menuBtn);
    
    
    function switchPage(event) {
        clearContent();
        switch (event.target.id) {
            case "main-btn":
                console.log("main");
                break;
            case "menu-btn":
                console.log("menu");
                break;
        }
    }
    
    function clearContent() {
        console.log("clearcontent");
    }
})();

renderMainPage.fill();