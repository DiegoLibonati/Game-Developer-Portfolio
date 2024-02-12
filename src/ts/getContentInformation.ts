import { Game } from "../vite-env";

export const getInformationFromDocument = async (): Promise<Game[]> => {

    const request = await fetch("./informacion.json");

    const result: Game[] = await request.json();

    return result;

}
