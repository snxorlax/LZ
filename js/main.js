const pages = ["home-page", "about-page", "lessons-page"];

function setActivePage(page) {
    let activePage = document.getElementById(page);
    setPageStyles(page);
    activePage.style.display = "grid";

    for (let i = 0; i < pages.length; i++) {
        if (page != pages[i]) {
            document.getElementById(pages[i]).style.display = "none";
        }
    }
}
const navText = document.getElementsByClassName("nav-text");
const bg = document.getElementById("background");
function setPageStyles(page) {
    switch (page) {
        case "home-page":
            bg.style.backgroundColor = "white";
            for (i = 0; i < navText.length; i++) {
                navText[i].style.color = "#dc9ce2";
            }
            break;
        case "about-page":
            bg.style.backgroundColor = "#19DB8A";
            for (i = 0; i < navText.length; i++) {
                navText[i].style.color = "white";
            }
            break;
        default:
            break;
    }
}
