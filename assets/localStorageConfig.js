export const createLocalStorage = (itemClicked) => {

    localStorage.setItem("itemClicked", itemClicked);

}

export const getItemFromLocalStorage = () => {

    return localStorage.getItem("itemClicked");

}