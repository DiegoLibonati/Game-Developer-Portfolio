import { getInformationFromDocument, createElements } from "./getContentInformation.js";
import {getItemFromLocalStorage} from "./localStorageConfig.js";

const gameContainerHeaderTitle = document.querySelector(".game_container_header_title");
const gameContainerHeaderInformation = document.querySelector(".game_container_header_information");
const gameGaleryContainer = document.querySelector(".game_galery_container");
const gameBaseContainer = document.querySelector(".game_base_container");
const documentFragment = document.createDocumentFragment();
let arrayElementClicked = [];

const getInformationAboutItemClicked = async() => {

    const allInformation = await getInformationFromDocument();

    for (let i = 0; i < allInformation.length; i++){
        if (allInformation[i].nombre === getItemFromLocalStorage("itemClicked")){
            arrayElementClicked.push(allInformation[i]);
        }
    }

}

const insertHtml = () => {

    documentFragment.append(createElements("h2", `<h2>${arrayElementClicked[0].nombre}</h2>`,""))

    gameContainerHeaderTitle.appendChild(documentFragment);

    documentFragment.append(createElements("div",`
    <div class="game_container_header_information_box">
        <h3>ROL</h3>
        <p>${arrayElementClicked[0].rol}</p>
    </div>

    <div class="game_container_header_information_box">
        <h3>DESCRIPCION</h3>
        <p>${arrayElementClicked[0].descripcion}</p>
    </div>`,
    "game_container_header_information_boxOne"));

    gameContainerHeaderInformation.appendChild(documentFragment);

    documentFragment.append(createElements("div",`
    <div class="game_container_header_information_box">
        <h3>AÑO</h3>
        <p>${arrayElementClicked[0].año}</p>
    </div>

    <div class="game_container_header_information_box">
        <h3>GENERO</h3>
        <p>${arrayElementClicked[0].genero}</p>
    </div>

    <div class="game_container_header_information_box">
        <h3>PLATAFORMA</h3>
        <p>${arrayElementClicked[0].plataforma}</p>
    </div>`,
    "game_container_header_information_boxTwo"));

    gameContainerHeaderInformation.appendChild(documentFragment);

    documentFragment.append(createElements("article",`
    <img class="imgRow1" src="${arrayElementClicked[0].fotos.uno}" alt="${arrayElementClicked[0].nombre}">
    <img class="imgRow1" src="${arrayElementClicked[0].fotos.dos}" alt="${arrayElementClicked[0].nombre}">
    <img class="imgRow2" src="${arrayElementClicked[0].fotos.tres}" alt="${arrayElementClicked[0].nombre}">`,
    "game_galery_container_center"));

    gameGaleryContainer.appendChild(documentFragment);

    documentFragment.append(createElements("article",`
    <div class="game_base_container_personajes_personaje">
        <img src="${arrayElementClicked[0].personajes.personajeuno.foto}" alt="${arrayElementClicked[0].personajes.personajeuno.foto}">
        <h3>${arrayElementClicked[0].personajes.personajeuno.nombre}</h3>
    </div>

    <div class="game_base_container_personajes_personaje">
        <img src="${arrayElementClicked[0].personajes.personajedos.foto}" alt="${arrayElementClicked[0].personajes.personajedos.foto}">
        <h3>${arrayElementClicked[0].personajes.personajedos.nombre}</h3>
    </div>`,
    "game_base_container_personajes"));

    gameBaseContainer.appendChild(documentFragment);

}

await getInformationAboutItemClicked();
insertHtml();