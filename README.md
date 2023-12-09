# Game-Developer-Portfolio-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a website about game developer portfolio, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Javascript
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/41`](https://www.diegolibonati.com.ar/#/project/41)

## Video

https://user-images.githubusercontent.com/99032604/199380469-42fb616f-de72-4125-a74c-aa0d217d0192.mp4

## Documentation

### navbarConfig.js

These functions will take care of closing and opening the navbar:

```
const openNavbar = () => {

    navbarContainer.classList.add("openNavMobile");

}

const closeNavbar = () => {

    navbarContainer.classList.remove("openNavMobile");

}
```

When a scroll is detected and the scroll passes the height of 50, the color of the navbar will change:

```
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
```

### localStorageConfig.js

The `createLocalStorage()` function will allow us to create a LocalStorage if it does not exist and the `getItemFromLocalStorage()` function will allow us to get the LocalStorage information:

```
export const createLocalStorage = (itemClicked) => {

    localStorage.setItem("itemClicked", itemClicked);

}

export const getItemFromLocalStorage = () => {

    return localStorage.getItem("itemClicked");

}
```

### importContentHtmlHome.js

This file is used to render HTML from javascript

### importContentHtmlJuegos.js

This file is used to render HTML from javascript

### importContentHtmlPersonajes.js

This file is used to render HTML from javascript

### importContentHtmlVerJuego.js

This file is used to render HTML from javascript

### homeSlider.js

The `changeHomeImg()` function checks if the index you want to access from an array exists, depending on that it will continue to advance or return to an initial position which would be 0. On the other hand the `checkIfImgHasClass()` function is a function that allows not to show all images except the image that is being displayed:

```
const changeHomeImg = () => {

    if (currentHomeImg >= allHomeImgs.length -1){
        currentHomeImg = 0;
        allHomeImgs[currentHomeImg].classList.add("showHomeImg");
        checkIfImgHasClass(allHomeImgs[currentHomeImg]);
    } else {
        currentHomeImg++;
        allHomeImgs[currentHomeImg].classList.add("showHomeImg");
        checkIfImgHasClass(allHomeImgs[currentHomeImg]);
    }

}

const checkIfImgHasClass = (currentImg) => {

    allHomeImgs.forEach(function(img){

        if (img !== currentImg){
            img.classList.remove("showHomeImg");
        }

    })

}
```

### getContentInformation.js

The `getInformationFromDocument()` function allows us to get all the information we need to render through a file called `information.json` which is located in the root of this project:

```
export const getInformationFromDocument = async () => {

    const petition = await fetch("./informacion.json");

    const result = await petition.json();

    return result;

}
```

The `createElements()` function creates elements from an HTML given by parameter, it will also create the given element from a tag also by parameter and finally it dates a class to that element also by parameter:

```
export const createElements = (tag, html, clasS) => {

    const element = document.createElement(`${tag}`);

    element.innerHTML = `${html}`;

    element.setAttribute("class", `${clasS}`);

    return element

}
```
