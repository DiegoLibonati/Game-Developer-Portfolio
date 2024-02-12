import { getInformationFromDocument } from "./getContentInformation.js";
import { getHyperLinks } from "./getHyperLinks.js";

const gamesContainerCenter = document.querySelector(
  ".games_container_center"
) as HTMLElement;
const documentFragment = document.createDocumentFragment();

const insertHtml = async () => {
  const games = await getInformationFromDocument();

  for (let i = 0; i < games.length; i++) {
    const div = document.createElement("div");
    div.classList.add("game_container");

    const img = document.createElement("img");
    const a = document.createElement("a");
    const h2 = document.createElement("h2");

    img.src = games[i].fotos.uno;
    img.alt = games[i].nombre;

    a.href = "./verjuego.html";
    a.id = games[i].nombre;
    a.classList.add("showGame");

    h2.textContent = games[i].nombre;

    a.append(h2);

    div.append(img);
    div.append(a);

    documentFragment.append(div);
  }

  gamesContainerCenter.appendChild(documentFragment);

  getHyperLinks(".showGame");
};

insertHtml();
