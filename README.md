# Game Developer Portfolio

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`

## Description

I made a website about game developer portfolio, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Typescript
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Game-Developer-Portfolio`](https://www.diegolibonati.com.ar/#/project/Game-Developer-Portfolio)

## Video

https://user-images.githubusercontent.com/99032604/199380469-42fb616f-de72-4125-a74c-aa0d217d0192.mp4

## Documentation

### navbarConfig.ts

These functions will take care of closing and opening the navbar:

```
// A. Open and close navbar config
const openNavbar = () => {
  navbarContainer.classList.add("openNavMobile");
};

const closeNavbar = () => {
  navbarContainer.classList.remove("openNavMobile");
};

btnOpenNavbar.addEventListener("click", openNavbar);
btnCloseNavbar.addEventListener("click", closeNavbar);
```

When a scroll is detected and the scroll passes the height of 50, the color of the navbar will change:

```
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
```

### localStorageConfig.ts

The `createLocalStorage()` function will allow us to create a LocalStorage if it does not exist and the `getItemFromLocalStorage()` function will allow us to get the LocalStorage information:

```
export const createLocalStorage = (itemClicked: string): void => {
  localStorage.setItem("itemClicked", itemClicked);
  return;
};

export const getItemFromLocalStorage = (): string => {
  return localStorage.getItem("itemClicked")!;
};
```

### importContentHtmlHome.ts

This file is used to render HTML from javascript

### importContentHtmlJuegos.ts

This file is used to render HTML from javascript

### importContentHtmlPersonajes.ts

This file is used to render HTML from javascript

### importContentHtmlVerJuego.ts

This file is used to render HTML from javascript

### homeSlider.ts

The `changeHomeImg()` function checks if the index you want to access from an array exists, depending on that it will continue to advance or return to an initial position which would be 0:

```
const allHomeImgs = document.querySelectorAll(".homeImg") as NodeList;

let currentHomeImg: number = 0;

const changeHomeImg = () => {

    const img = allHomeImgs[currentHomeImg] as HTMLImageElement

    const currentImg = document.querySelector(".showHomeImg")

    currentImg?.classList.remove("showHomeImg")

    if (currentHomeImg >= allHomeImgs.length -1){
        currentHomeImg = 0;
    } else {
        currentHomeImg++;
    }

    img.classList.add("showHomeImg");
}



setInterval(changeHomeImg, 5000);
```

### getContentInformation.ts

The `getInformationFromDocument()` function allows us to get all the information we need to render through a file called `information.json` which is located in the root of this project:

```
import { Game } from "../vite-env";

export const getInformationFromDocument = async (): Promise<Game[]> => {

    const request = await fetch("./informacion.json");

    const result: Game[] = await request.json();

    return result;

}
```
