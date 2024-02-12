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

  const h2 = document.createElement("h2");
  h2.textContent = activeGame.nombre;

  documentFragment.append(h2);

  gameContainerHeaderTitle.appendChild(documentFragment);

  const div = document.createElement("div");
  div.classList.add("game_container_header_information_boxOne");

  const div2 = document.createElement("div");
  div2.classList.add("game_container_header_information_box");

  const h3 = document.createElement("h3");
  h3.textContent = "ROL";

  const p = document.createElement("p");
  p.textContent = activeGame.rol;

  div2.append(h3);
  div2.append(p);

  const div3 = document.createElement("div");
  div3.classList.add("game_container_header_information_box");

  const h3_2 = document.createElement("h3");
  h3_2.textContent = "DESCRIPCION";

  const p_2 = document.createElement("p");
  p_2.textContent = activeGame.descripcion;

  div3.append(h3_2);
  div3.append(p_2);

  div.append(div2);
  div.append(div3);

  documentFragment.append(div);

  gameContainerHeaderInformation.appendChild(documentFragment);

  const div_2 = document.createElement("div");
  div_2.classList.add("game_container_header_information_boxTwo");

  const div2_2 = document.createElement("div");
  div2_2.classList.add("game_container_header_information_box");

  const h3_2_2 = document.createElement("h3");
  h3_2_2.textContent = "AÑO";

  const p_2_2_2 = document.createElement("p");
  p_2_2_2.textContent = activeGame.año;

  div2_2.append(h3_2_2);
  div2_2.append(p_2_2_2);

  const div3_2 = document.createElement("div");
  div3_2.classList.add("game_container_header_information_box");

  const h3_2_2_2 = document.createElement("h3");
  h3_2_2_2.textContent = "GENERO";

  const p_2_2 = document.createElement("p");
  p_2_2.textContent = activeGame.genero;

  div3_2.append(h3_2_2_2);
  div3_2.append(p_2_2);

  const div4_2 = document.createElement("div");
  div4_2.classList.add("game_container_header_information_box");

  const h3_2_2_2_2 = document.createElement("h3");
  h3_2_2_2_2.textContent = "PLATAFORMA";

  const p_2_2_2_2 = document.createElement("p");
  p_2_2_2_2.textContent = activeGame.plataforma;

  div4_2.append(h3_2_2_2_2);
  div4_2.append(p_2_2_2_2);

  div_2.append(div2_2);
  div_2.append(div3_2);
  div_2.append(div4_2);

  documentFragment.append(div_2);
  gameContainerHeaderInformation.appendChild(documentFragment);

  const gameGaleryContainerCenter = document.createElement("article");
  gameGaleryContainerCenter.classList.add("game_galery_container_center");

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

  gameGaleryContainerCenter.append(galeryImgOne);
  gameGaleryContainerCenter.append(galeryImgTwo);
  gameGaleryContainerCenter.append(galeryImgTr);

  documentFragment.append(gameGaleryContainerCenter);
  gameGaleryContainer.appendChild(documentFragment);

  const gameBaseContainerPersonajes = document.createElement("article");
  gameBaseContainerPersonajes.classList.add("game_base_container_personajes");

  const personajeContainer = document.createElement("div");
  personajeContainer.classList.add("game_base_container_personajes_personaje");

  const imgPersonajeOne = document.createElement("img");
  imgPersonajeOne.src = activeGame.personajes.personajeuno.foto;
  imgPersonajeOne.alt = activeGame.personajes.personajeuno.foto;

  const h3PersonajeOne = document.createElement("h3");
  h3PersonajeOne.textContent = activeGame.personajes.personajeuno.nombre;

  personajeContainer.append(imgPersonajeOne);
  personajeContainer.append(h3PersonajeOne);

  const personajeContainer2 = document.createElement("div");
  personajeContainer2.classList.add("game_base_container_personajes_personaje");

  const imgPersonajeTwo = document.createElement("img");
  imgPersonajeTwo.src = activeGame.personajes.personajedos.foto;
  imgPersonajeTwo.alt = activeGame.personajes.personajedos.foto;

  const h3PersonajeTwo = document.createElement("h3");
  h3PersonajeTwo.textContent = activeGame.personajes.personajedos.nombre;

  personajeContainer2.append(imgPersonajeTwo);
  personajeContainer2.append(h3PersonajeTwo);

  gameBaseContainerPersonajes.append(personajeContainer);
  gameBaseContainerPersonajes.append(personajeContainer2);

  documentFragment.append(gameBaseContainerPersonajes);
  gameBaseContainer.appendChild(documentFragment);
};

insertHtml();
