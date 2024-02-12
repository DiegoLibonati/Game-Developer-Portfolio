// Element of A.
const navbarContainer = document.querySelector(
  ".header_container_nav_list"
) as HTMLUListElement;
const btnOpenNavbar = document.querySelector(".fa-bars") as HTMLElement;
const btnCloseNavbar = document.querySelector(".fa-x") as HTMLElement;

// Element of B.
const headerContainer = document.querySelector(
  ".header_container"
) as HTMLElement;
const headerContainerMobile = document.querySelector(
  ".header_container_logo"
) as HTMLDivElement;
const mediaQuery1024Px: MediaQueryList = matchMedia("(min-width:1024px)");

// A. Open and close navbar config
const openNavbar = () => {
  navbarContainer.classList.add("openNavMobile");
};

const closeNavbar = () => {
  navbarContainer.classList.remove("openNavMobile");
};

btnOpenNavbar.addEventListener("click", openNavbar);
btnCloseNavbar.addEventListener("click", closeNavbar);

// B. Change background color to navbar when event scroll was detected

window.addEventListener("scroll", () => {
  if (mediaQuery1024Px.matches) {
    scrollDetected(window.scrollY, headerContainer, "changeNavbarColor");
  } else {
    scrollDetected(window.scrollY, headerContainerMobile, "changeNavbarColor");
  }
});

const scrollDetected = (
  scrollY: number,
  container: HTMLElement,
  nameClass: string
): void => {
  if (scrollY > 50) {
    container.classList.add(`${nameClass}`);
    return;
  }
  container.classList.remove(`${nameClass}`);
  return;
};
