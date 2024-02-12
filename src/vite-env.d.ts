/// <reference types="vite/client" />

// Types

export type Game = {
  nombre: string;
  rol: string;
  descripcion: string;
  año: string;
  genero: string;
  plataforma: string;
  fotos: {
    uno: string;
    dos: string;
    tres: string;
  };
  personajes: {
    personajeuno: {
      foto: string;
      nombre: string;
    };
    personajedos: {
      foto: string;
      nombre: string;
    };
  };
};
