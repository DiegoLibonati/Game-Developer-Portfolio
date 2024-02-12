import { Game } from "../vite-env.js";
import { getInformationFromDocument } from "./getContentInformation.js";
import { getItemFromLocalStorage } from "./localStorageConfig.js";

const gameContainerHeaderTitle = document.querySelector(
  ".game_container_header_title"
) as HTMLElement;
const gameContainerHeaderInformation = document.querySelector(
  ".game_container_header_information"
) as HTMLElement;
const gameGaleryContainer = document.querySelector(
  ".game_galery_container"
) as HTMLElement;
const gameBaseContainer = document.querySelector(
  ".game_base_container"
) as HTMLElement;

const documentFragment = document.createDocumentFragment();

const getGameClicked = async (): Promise<Game> => {
  const games = await getInformationFromDocument();

  const activeGame = games.filter(
    (game) => game.nombre === getItemFromLocalStorage()
  )[0];

  return activeGame;
};

const insertHtml = async () => {
  const activeGame = await getGameClicked();

  const gameName = document.createElement("h2");
  gameName.textContent = activeGame.nombre;

  documentFragment.append(gameName);

  gameContainerHeaderTitle.appendChild(documentFragment);

  const div = document.createElement("div");
  div.classList.add("game_container_header_information_boxOne");

  const div2 = document.createElement("div");
  div2.classList.add("game_container_header_information_box");

  const gameRol = document.createElement("h3");
  gameRol.textContent = "ROL";

  const gameRolText = document.createElement("p");
  gameRolText.textContent = activeGame.rol;

  div2.append(gameRol);
  div2.append(gameRolText);

  const div3 = document.createElement("div");
  div3.classList.add("game_container_header_information_box");

  const gameDescription = document.createElement("h3");
  gameDescription.textContent = "DESCRIPCION";

  const gameDescriptionText = document.createElement("p");
  gameDescriptionText.textContent = activeGame.descripcion;

  div3.append(gameDescription);
  div3.append(gameDescriptionText);

  div.append(div2);
  div.append(div3);

  documentFragment.append(div);

  gameContainerHeaderInformation.appendChild(documentFragment);

  const div_2 = document.createElement("div");
  div_2.classList.add("game_container_header_information_boxTwo");

  const div2_2 = document.createElement("div");
  div2_2.classList.add("game_container_header_information_box");

  const gameAge = document.createElement("h3");
  gameAge.textContent = "AÑO";

  const gameAgeText = document.createElement("p");
  gameAgeText.textContent = activeGame.año;

  div2_2.append(gameAge);
  div2_2.append(gameAgeText);

  const div3_2 = document.createElement("div");
  div3_2.classList.add("game_container_header_information_box");

  const gameGenre = document.createElement("h3");
  gameGenre.textContent = "GENERO";

  const gameGenreText = document.createElement("p");
  gameGenreText.textContent = activeGame.genero;

  div3_2.append(gameGenre);
  div3_2.append(gameGenreText);

  const div4_2 = document.createElement("div");
  div4_2.classList.add("game_container_header_information_box");

  const gamePlatform = document.createElement("h3");
  gamePlatform.textContent = "PLATAFORMA";

  const gamePlatformText = document.createElement("p");
  gamePlatformText.textContent = activeGame.plataforma;

  div4_2.append(gamePlatform);
  div4_2.append(gamePlatformText);

  div_2.append(div2_2);
  div_2.append(div3_2);
  div_2.append(div4_2);

  documentFragment.append(div_2);
  gameContainerHeaderInformation.appendChild(documentFragment);

  const article = document.createElement("article");
  article.classList.add("game_galery_container_center");

  const galeryImgOne = document.createElement("img");
  galeryImgOne.src = activeGame.fotos.uno;
  galeryImgOne.alt = activeGame.nombre;
  galeryImgOne.classList.add("imgRow1");

  const galeryImgTwo = document.createElement("img");
  galeryImgTwo.src = activeGame.fotos.dos;
  galeryImgTwo.alt = activeGame.nombre;
  galeryImgTwo.classList.add("imgRow1");

  const galeryImgTr = document.createElement("img");
  galeryImgTr.src = activeGame.fotos.tres;
  galeryImgTr.alt = activeGame.nombre;
  galeryImgTr.classList.add("imgRow2");

  article.append(galeryImgOne);
  article.append(galeryImgTwo);
  article.append(galeryImgTr);

  documentFragment.append(article);
  gameGaleryContainer.appendChild(documentFragment);

  const article2 = document.createElement("article");
  article2.classList.add("game_base_container_personajes");

  const div4 = document.createElement("div");
  div4.classList.add("game_base_container_personajes_personaje");

  const imgPersonajeOne = document.createElement("img");
  imgPersonajeOne.src = activeGame.personajes.personajeuno.foto;
  imgPersonajeOne.alt = activeGame.personajes.personajeuno.foto;

  const h3PersonajeOne = document.createElement("h3");
  h3PersonajeOne.textContent = activeGame.personajes.personajeuno.nombre;

  div4.append(imgPersonajeOne);
  div4.append(h3PersonajeOne);

  const div5 = document.createElement("div");
  div5.classList.add("game_base_container_personajes_personaje");

  const imgPersonajeTwo = document.createElement("img");
  imgPersonajeTwo.src = activeGame.personajes.personajedos.foto;
  imgPersonajeTwo.alt = activeGame.personajes.personajedos.foto;

  const h3PersonajeTwo = document.createElement("h3");
  h3PersonajeTwo.textContent = activeGame.personajes.personajedos.nombre;

  div5.append(imgPersonajeTwo);
  div5.append(h3PersonajeTwo);

  article2.append(div4);
  article2.append(div5);

  documentFragment.append(article2);
  gameBaseContainer.appendChild(documentFragment);
};

insertHtml();
