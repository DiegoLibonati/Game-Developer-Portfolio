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

    const img = document.createElement("img");
    const a = document.createElement("a");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    img.src = games[i].personajes.personajeuno.foto;
    img.alt = games[i].personajes.personajeuno.nombre;

    a.href = "./verjuego.html";
    a.id = games[i].nombre;
    a.classList.add("showGame");

    h2.textContent = games[i].personajes.personajeuno.nombre;

    a.append(h2);

    p.textContent = `De ${games[i].nombre}`;

    div.append(img);
    div.append(a);
    div.append(p);

    documentFragment.append(div);

    const div2 = document.createElement("div");
    div2.classList.add("personaje_container");

    const img2 = document.createElement("img");
    const a2 = document.createElement("a");
    const h2_2 = document.createElement("h2");
    const p2 = document.createElement("p");

    img2.src = games[i].personajes.personajedos.foto;
    img2.alt = games[i].personajes.personajedos.nombre;

    a2.href = "./verjuego.html";
    a2.id = games[i].nombre;
    a2.classList.add("showGame");

    h2_2.textContent = games[i].personajes.personajedos.nombre;

    a2.append(h2_2);

    p2.textContent = `De ${games[i].nombre}`;

    div2.append(img2);
    div2.append(a2);
    div2.append(p2);

    documentFragment.append(div2);
  }

  personajesContainerCenter.appendChild(documentFragment);

  getHyperLinks(".showGame");
};

insertHtml();
