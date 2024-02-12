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

    const gameImg = document.createElement("img");
    const a = document.createElement("a");
    const gameName = document.createElement("h2");

    gameImg.src = games[i].fotos.uno;
    gameImg.alt = games[i].nombre;

    a.href = "./verjuego.html";
    a.id = games[i].nombre;
    a.classList.add("showGame");

    gameName.textContent = games[i].nombre;

    a.append(gameName);

    div.append(gameImg);
    div.append(a);

    documentFragment.append(div);
  }

  gamesContainerCenter.appendChild(documentFragment);

  getHyperLinks(".showGame");
};

insertHtml();
