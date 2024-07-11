const pages = ["home-page", "about-page", "lessons-page"]

function setActivePage(page){
    let activePage  = document.getElementById(page);
    activePage.style.display = "flex";

    for (let i=0; i<pages.length; i++){
        if (page != pages[i]){
            document.getElementById(pages[i]).style.display = "none";
        }
    }
    }

