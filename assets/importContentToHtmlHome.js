import { getInformationFromDocument, createElements } from "./getContentInformation.js";
import {createLocalStorage} from "./localStorageConfig.js";

const fragmentElement = document.createDocumentFragment();
const homeContainerInformation = document.querySelector(".home_container_information");
const portfolioContainer = document.querySelector(".portfolio_container");
const personajesContainerGalery = document.querySelector(".personajes_container_galery");

const insertHtml = async () => {

    try{
        let allInformation = await getInformationFromDocument();
        let randomNumber = await getRandomNumber(allInformation);
    
        fragmentElement.append(createElements("div", `<img src="${allInformation[randomNumber].fotos.uno}" alt="${allInformation[randomNumber].nombre}">
                                                    <div class="home_container_information_newgame_text">
                                                        <h2>${allInformation[randomNumber].nombre}</h2>
                                                        <p>${allInformation[randomNumber].genero} | ${allInformation[randomNumber].plataforma} | ${allInformation[randomNumber].año}</p>
                                                        <a href="./verjuego.html" class="showGame" id="${allInformation[randomNumber].nombre}">Ver juego <i class="fa-solid fa-chevron-right"></i></a>
                                                    </div>`, "home_container_information_newgame"));
    
        homeContainerInformation.appendChild(fragmentElement);
        randomNumber = undefined;
    
        allInformation = await getInformationFromDocument();
    
        for (let i = 0; i < 3; i++){
    
            let randomNumber = await getRandomNumber(allInformation);
    
            fragmentElement.append(createElements("article", `<div class="portfolio_container_game_title">
            <h3>0${i+1} ${allInformation[randomNumber].genero}</h3>
                </div>
    
                <div class="portfolio_container_game_description">
                    <img src="${allInformation[randomNumber].fotos.uno}" alt="${allInformation[randomNumber].nombre}">
                    <h3>${allInformation[randomNumber].nombre}</h3>
                    <p>${allInformation[randomNumber].rol}</p>
                    <p>${allInformation[randomNumber].descripcion}</p>
                    <a href="./verjuego.html" class="showGame" id="${allInformation[randomNumber].nombre}">Ver juego</a>
                </div>`, "portfolio_container_game"));
    
            allInformation.splice(randomNumber, 1);
            randomNumber = undefined;
        }
    
        portfolioContainer.appendChild(fragmentElement);
    
        allInformation = await getInformationFromDocument();
    
        for (let i = 0; i < 3; i++){
    
            let randomNumber = await getRandomNumber(allInformation);
    
            fragmentElement.append(createElements("div", `<img src="${allInformation[randomNumber].personajes.personajeuno.foto}" alt="${allInformation[randomNumber].personajes.personajeuno.nombre}">
                <a href="./verjuego.html" class="showGame" id="${allInformation[randomNumber].nombre}"><h3>${allInformation[randomNumber].personajes.personajeuno.nombre}</h3></a>
                <p>${allInformation[randomNumber].rol}</p>`, "personaje_container"));
    
            allInformation.splice(randomNumber, 1);
            randomNumber = undefined;
    
        }
    
        personajesContainerGalery.appendChild(fragmentElement);
    
        getHyperLinks(".showGame");
    }catch(e){}

}

const getRandomNumber = async (allInformation) => {

    const randomNumber = Math.floor(Math.random() * allInformation.length);

    return randomNumber;
}

export const getHyperLinks = (clasS) => {

    const hyperLinksGames = document.querySelectorAll(clasS);

    const itemClickedFunction = (e) => {

        createLocalStorage(e.currentTarget.id);

    }

    hyperLinksGames.forEach(function(hyperLinkGame){

        hyperLinkGame.addEventListener("click", itemClickedFunction);

    })

}

insertHtml();

