import { getInformationFromDocument } from "./getContentInformation.js";
import { getHyperLinks } from "./getHyperLinks.js";

const personajesContainerCenter = document.querySelector(
  ".personajes_container_center"
) as HTMLElement;
const documentFragment = document.createDocumentFragment();

const insertHtml = async () => {
  const games = await getInformationFromDocument();

  for (let i = 0; i < games.length; i++) {
    const div = document.createElement("div");
    div.classList.add("personaje_container");

    const personajeContainerImg = document.createElement("img");
    const a = document.createElement("a");
    const personajeName = document.createElement("h2");
    const personajeGameName = document.createElement("p");

    personajeContainerImg.src = games[i].personajes.personajeuno.foto;
    personajeContainerImg.alt = games[i].personajes.personajeuno.nombre;

    a.href = "./verjuego.html";
    a.id = games[i].nombre;
    a.classList.add("showGame");

    personajeName.textContent = games[i].personajes.personajeuno.nombre;

    a.append(personajeName);

    personajeGameName.textContent = `De ${games[i].nombre}`;

    div.append(personajeContainerImg);
    div.append(a);
    div.append(personajeGameName);

    documentFragment.append(div);

    const div2 = document.createElement("div");
    div2.classList.add("personaje_container");

    const personajeImageTwo = document.createElement("img");
    const a2 = document.createElement("a");
    const personajeNameTwo = document.createElement("h2");
    const personajeGameNameTwo = document.createElement("p");

    personajeImageTwo.src = games[i].personajes.personajedos.foto;
    personajeImageTwo.alt = games[i].personajes.personajedos.nombre;

    a2.href = "./verjuego.html";
    a2.id = games[i].nombre;
    a2.classList.add("showGame");

    personajeNameTwo.textContent = games[i].personajes.personajedos.nombre;

    a2.append(personajeNameTwo);

    personajeGameNameTwo.textContent = `De ${games[i].nombre}`;

    div2.append(personajeImageTwo);
    div2.append(a2);
    div2.append(personajeGameNameTwo);

    documentFragment.append(div2);
  }

  personajesContainerCenter.appendChild(documentFragment);

  getHyperLinks(".showGame");
};

insertHtml();
