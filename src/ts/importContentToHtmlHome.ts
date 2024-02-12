import { Game } from "../vite-env.js";
import { getInformationFromDocument } from "./getContentInformation.js";
import { getHyperLinks } from "./getHyperLinks.js";
import { createLocalStorage } from "./localStorageConfig.js";

const fragmentElement = document.createDocumentFragment();
const homeContainerInformation = document.querySelector(
  ".home_container_information"
) as HTMLElement;
const portfolioContainer = document.querySelector(
  ".portfolio_container"
) as HTMLElement;
const personajesContainerGalery = document.querySelector(
  ".personajes_container_galery"
) as HTMLElement;

const insertHtml = async (): Promise<void> => {
  try {
    // Home
    const games = await getInformationFromDocument();
    const randomNumber = getRandomNumber(games);

    const div = document.createElement("div");
    div.classList.add("home_container_information_newgame");

    const img = document.createElement("img");
    img.src = games[randomNumber].fotos.uno;
    img.alt = games[randomNumber].nombre;

    div.append(img);

    const div2 = document.createElement("div");
    div2.classList.add("home_container_information_newgame_text");

    const h2 = document.createElement("h2");
    h2.textContent = games[randomNumber].nombre;

    const p = document.createElement("p");
    p.textContent = `${games[randomNumber].genero} | ${games[randomNumber].plataforma} | ${games[randomNumber].año}`;

    const a = document.createElement("a");
    a.href = "./verjuego.html";
    a.classList.add("showGame");
    a.id = games[randomNumber].nombre;
    a.textContent = "Ver Juego ";

    const i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-chevron-right");

    a.append(i);

    div2.append(h2);
    div2.append(p);
    div2.append(a);

    div.append(div2);

    fragmentElement.append(div);

    homeContainerInformation.appendChild(fragmentElement);

    // Mi Portfolio
    for (let i = 0; i < 3; i++) {
      const randomNumber = getRandomNumber(games);

      const article = document.createElement("article");
      article.classList.add("portfolio_container_game");

      const div = document.createElement("div");
      div.classList.add("portfolio_container_game_title");

      const h3 = document.createElement("h3");
      h3.textContent = `0${i + 1} ${games[randomNumber].genero}`;

      div.append(h3);

      const div2 = document.createElement("div");
      div2.classList.add("portfolio_container_game_description");

      const img = document.createElement("img");
      img.src = games[randomNumber].fotos.uno;
      img.alt = games[randomNumber].nombre;

      div2.append(img);

      const h3_2 = document.createElement("h3");
      h3_2.textContent = games[randomNumber].nombre;

      const p = document.createElement("p");
      p.textContent = games[randomNumber].rol;

      const p2 = document.createElement("p");
      p2.textContent = games[randomNumber].descripcion;

      const a = document.createElement("a");
      a.href = "./verjuego.html";
      a.classList.add("showGame");
      a.id = games[randomNumber].nombre;
      a.textContent = "Ver Juego";

      div2.append(h3_2);
      div2.append(p);
      div2.append(p2);
      div2.append(a);

      article.append(div);
      article.append(div2);

      fragmentElement.append(article);

      games.splice(randomNumber, 1);
    }

    portfolioContainer.appendChild(fragmentElement);

    // Personajes
    for (let i = 0; i < 3; i++) {
      const randomNumber = getRandomNumber(games);

      const div = document.createElement("div");
      div.classList.add("personaje_container");

      const img = document.createElement("img");
      const a = document.createElement("a");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");

      img.src = games[randomNumber].personajes.personajeuno.foto;
      img.alt = games[randomNumber].personajes.personajeuno.nombre;

      a.href = "./verjuego.html";
      a.classList.add("showGame");
      a.id = games[randomNumber].nombre;

      h3.textContent = games[randomNumber].personajes.personajeuno.nombre;

      a.append(h3);

      p.textContent = games[randomNumber].rol;

      div.append(img);
      div.append(a);
      div.append(p);

      fragmentElement.append(div);
      games.splice(randomNumber, 1);
    }

    personajesContainerGalery.appendChild(fragmentElement);

    getHyperLinks(".showGame");
  } catch (e) {}
};

const getRandomNumber = (games: Game[]): number => {
  const randomNumber = Math.floor(Math.random() * games.length);

  return randomNumber;
};



insertHtml();
