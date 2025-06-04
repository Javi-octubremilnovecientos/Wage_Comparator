import React, { useState } from "react";
import Survey from "../Mocks/2-2019-converted.json";
import { useSelector } from "react-redux";

export const useConsult = () => {

  const [medias, setmedias] = useState()

  const formNo = useSelector((state)=> state.sendForm.formNumber)
  
  let grafica = useSelector((state) => state.sendForm.forms[formNo-1]);

  let datos = Survey;

  const consultar = ()=>{
    console.log(grafica)
    
  const europeos = datos.filter((dato) => dato.COUNTRY.includes(grafica.values.País));

  const palabra = grafica.values.Profesión;
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
   console.log(medias) 

  return{
    medias,
    consultar
  }
};
