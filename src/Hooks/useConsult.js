import React, { useState } from "react";
import Survey from "../Mocks/2-2019-converted.json";
import { useSelector } from "react-redux";

export const useConsult = () => {

  const [medias, setmedias] = useState()
  
  let grafica = useSelector((state) => state.sendForm);

  let datos = Survey;

  const consultar = ()=>{
    console.log(grafica)
    
  const europeos = datos.filter((dato) => dato.COUNTRY.includes(grafica[0].values.País));

  const palabra = grafica[0].values.Profesión;
  const firstLetters = palabra.slice(0, 4);

  const coinciden = europeos.filter((vet) => {
    return vet.ISCO0803.startsWith(firstLetters);
  });
  const salarios = coinciden
    .filter((con) => con.WAGEGR0NAT < 9000)
    .map((con) => con.WAGEGR0NAT);

  const totalSalarios = salarios.reduce((accum, curr) => accum + curr, 0);

  const media = totalSalarios / salarios.length;
  setmedias(media)
  
  }


  return{
    medias,
    consultar
  }
};
