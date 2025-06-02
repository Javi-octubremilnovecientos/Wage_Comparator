import React from "react";
import Survey from "../Mocks/2-2019-converted.json";

export const useConsult = ( {grafica} ) => {
  const datos = Survey;
  const europeos = datos.filter((dato) =>
    dato.COUNTRY.includes(grafica.País)
  );

  const palabra = grafica.Profesión;
  const firstLetters = palabra.slice(0, 4);

  const coinciden = europeos.filter((vet) => {
    return vet.ISCO0803.startsWith(firstLetters);
  });
  const salarios = coinciden
    .filter((con) => con.WAGEGR0NAT < 9000)
    .map((con) => con.WAGEGR0NAT);

  const totalSalarios = salarios.reduce((accum, curr) => accum + curr, 0);

  const media = totalSalarios / salarios.length;

  console.log(media)
  return( 
    media,
    salarios
  )
};
