import { getInformationFromDocument, createElements } from "./getContentInformation.js";
import {getHyperLinks} from "./importContentToHtmlHome.js";    

const personajesContainerCenter = document.querySelector(".personajes_container_center");
const documentFragment = document.createDocumentFragment();

const insertHtml = async () => {

    const allInformation = await getInformationFromDocument();

    for (let i = 0; i < allInformation.length; i++){

        documentFragment.append(createElements("div", `<img src="${allInformation[i].personajes.personajeuno.foto}" alt="${allInformation[i].personajes.personajeuno.nombre}">
        <a href="./verjuego.html" id="${allInformation[i].nombre}" class="showGame"><h2>${allInformation[i].personajes.personajeuno.nombre}</h2></a>
        <p>De ${allInformation[i].nombre}</p>`, "personaje_container"));

        documentFragment.append(createElements("div", `<img src="${allInformation[i].personajes.personajedos.foto}" alt="${allInformation[i].personajes.personajedos.nombre}">
        <a href="./verjuego.html" id="${allInformation[i].nombre}" class="showGame"><h2>${allInformation[i].personajes.personajedos.nombre}</h2></a>
        <p>De ${allInformation[i].nombre}</p>`, "personaje_container"));

    }

    personajesContainerCenter.appendChild(documentFragment);

    getHyperLinks(".showGame");
}

insertHtml();