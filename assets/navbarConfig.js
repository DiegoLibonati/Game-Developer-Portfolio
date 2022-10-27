// Element of A.
const navbarContainer = document.querySelector(".header_container_nav_list");
const btnOpenNavbar = document.querySelector(".fa-bars");
const btnCloseNavbar = document.querySelector(".fa-x");

// Element of B.
const headerContainer = document.querySelector(".header_container");
const headerContainerMobile = document.querySelector(".header_container_logo");
const mediaQuery1024Px = matchMedia("(min-width:1024px)");

// A. Open and close navbar config
const openNavbar = () => {

    navbarContainer.classList.add("openNavMobile");

}

const closeNavbar = () => {

    navbarContainer.classList.remove("openNavMobile");

}

btnOpenNavbar.addEventListener("click", openNavbar);
btnCloseNavbar.addEventListener("click", closeNavbar);

// B. Change background color to navbar when event scroll was detected

window.addEventListener("scroll", (e) => {

    if (mediaQuery1024Px.matches){

        scrollDetected(window.scrollY, headerContainer, "changeNavbarColor");

    } else {

        scrollDetected(window.scrollY, headerContainerMobile, "changeNavbarColor");

    }

});

const scrollDetected = (scrollY, container, nameClass) => {

    if (scrollY > 50){
        container.classList.add(`${nameClass}`);
    } else {
        container.classList.remove(`${nameClass}`);
    }

}