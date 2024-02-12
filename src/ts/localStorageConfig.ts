export const createLocalStorage = (itemClicked: string): void => {
  localStorage.setItem("itemClicked", itemClicked);
  return;
};

export const getItemFromLocalStorage = (): string => {
  return localStorage.getItem("itemClicked")!;
};
