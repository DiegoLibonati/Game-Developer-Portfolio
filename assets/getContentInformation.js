export const getInformationFromDocument = async () => {

    const petition = await fetch("./informacion.json");

    const result = await petition.json();

    return result;

}

export const createElements = (tag, html, clasS) => {

    const element = document.createElement(`${tag}`);

    element.innerHTML = `${html}`;

    element.setAttribute("class", `${clasS}`);

    return element

}