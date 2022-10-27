import { getInformationFromDocument, createElements } from "./getContentInformation.js";
import {getHyperLinks} from "./importContentToHtmlHome.js";

const gamesContainerCenter = document.querySelector(".games_container_center");
const documentFragment = document.createDocumentFragment();

const insertHtml = async () => {

    const allInformation = await getInformationFromDocument();

    for (let i = 0; i < allInformation.length; i++){

        documentFragment.append(createElements("div", `<img src="${allInformation[i].fotos.uno}" alt="${allInformation[i].nombre}">
        <a href="./verjuego.html" id="${allInformation[i].nombre}" class="showGame"><h2>${allInformation[i].nombre}</h2></a>`, "game_container"));

    }

    gamesContainerCenter.appendChild(documentFragment);

    getHyperLinks(".showGame");
}

insertHtml();