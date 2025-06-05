
import Survey from "../Mocks/Final-Survey.json";
import { useSelector } from "react-redux";

export const useFirstForm = () => {



  const firstForm = useSelector((state) => state.sendForm.forms[0]);
  const datos = Survey;

   console.log(firstForm)
    
  const europeos = datos.filter((dato) => dato.COUNTRY.includes(firstForm.values.País));

  const palabra = firstForm.values.Profesión;
  const firstLetters = palabra.slice(0, 4);

  const coinciden = europeos.filter((vet) => {
    return vet.ISCO0803.startsWith(firstLetters);
  });
  const salarios = coinciden
    .filter((con) => con.WAGEGR0NAT < 9000)
    .map((con) => con.WAGEGR0NAT);

  const totalSalarios = salarios.reduce((accum, curr) => accum + curr, 0);

  const media = totalSalarios / salarios.length;


  return{
    media
  }
};
