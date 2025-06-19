import Survey from "../Mocks/FinalDataBase.json";
import { useSelector } from "react-redux";

export const useSendForm = () => {
  const currentForm = useSelector((state) => state.sendForm.form);
  const formNumber = useSelector((state)=> state.sendForm.formNumber)

  console.log(formNumber)

  const datos = Survey;
  const country = datos.filter((dato) =>
    dato.COUNTRY.includes(currentForm.País)
  );

  const occupation = currentForm.Profesión;
  const firstLetters = occupation.slice(0, 5);

  const currentOccupation = country.filter((vet) => {
    const isco = vet.ISCO0803?.toString() ?? "";
    return isco.startsWith(firstLetters);
  });

  const wages = currentOccupation.filter((con) => con.WAGEGR0NAT < 9000)
 
  const firstRange =  wages.map((wag)=> wag.WAGEGR0NAT)
  const  higerWage = Math.max(...firstRange)
  const  lowerWage = Math.min(...firstRange)
  

  let wageRange = []  
 
 switch (formNumber) {
    case 1:
     wageRange = firstRange
      break;
    case 2:
      wageRange = wages.filter((con)=> con.GENDER === currentForm.Sexo)
      .filter((con)=> con.EDUISCED === currentForm.Estudios)
      .map((wag)=> wag.WAGEGR0NAT)
   
      break;
    case 3:
      wageRange = wages.filter((con)=> con.GENDER === currentForm.Sexo)
      .filter((con)=> con.EDUISCED === currentForm.Estudios)
      .filter((con)=> con.FIRMPRI === currentForm.TamañoEmpresa)
      .filter((con)=> con.NACE2002 === currentForm.Industria)
      .map((wag)=> wag.WAGEGR0NAT)
   
      break;
    case 4:
      wageRange = wages.filter((con)=> con.GENDER === currentForm.Sexo)
      .filter((con)=> con.EDUISCED === currentForm.Estudios)
      .filter((con)=> con.FIRMPRI === currentForm.TamañoEmpresa)
      .filter((con)=> con.NACE2002 === currentForm.Industria)
      .map((wag)=> wag.WAGEGR0NAT)
   
      break;
   
    default:
  
    wageRange = firstRange
    break
   }
  console.log(wageRange)
   const media =  wageRange.reduce((accum, curr) => accum + curr, 0) / wageRange.length;

   

  return {
    media,
    higerWage,
    lowerWage,
    currentForm,
  };
};
