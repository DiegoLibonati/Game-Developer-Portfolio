import { createLocalStorage } from "./localStorageConfig";

export const getHyperLinks = (className: string): void => {
  const hyperLinksGames = document.querySelectorAll(className);

  const itemClickedFunction = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    createLocalStorage(target.id);
  };

  hyperLinksGames.forEach(function (hyperLinkGame) {
    hyperLinkGame.addEventListener("click", (e) => itemClickedFunction(e));
  });
};
