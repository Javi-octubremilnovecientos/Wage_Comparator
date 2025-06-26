import FinalDataBase from "../Mocks/FinalDataBase";

export const formFilter = (form, formNumber) => {
  const datos = FinalDataBase;

  const country = datos.filter((dato) => {
    return dato.COUNTRY === form.País;
  });

  const occupation = form.Profesión;
  const firstLetters = occupation.slice(0, 5);

  const currentOccupation = country.filter((vet) => {
    const isco = vet.ISCO0803.toString() ?? "";
    return isco.startsWith(firstLetters);
  });

  const wages = currentOccupation.filter((con) => con.WAGEGR0NAT < 9000);
  const firstRange = wages.map((wag) => wag.WAGEGR0NAT);

  let wageRange = [];

  switch (formNumber) {
    case 1:
      wageRange = firstRange;

      break;
    case 2:
      wageRange = wages
        .filter((con) => con.GENDER === form.Sexo)
        .filter((con) => con.EDUISCED === form.Estudios)
        .map((wag) => wag.WAGEGR0NAT);

      break;
    case 3:
      wageRange = wages
        .filter((con) => con.GENDER === form.Sexo)
        .filter((con) => con.EDUISCED === form.Estudios)
        .filter((con) => con.FIRMPRI === form.Sector)
        .filter((con) => con.NACE2002 === form.Industria)
        .map((wag) => wag.WAGEGR0NAT);

      break;
    case 4:
      wageRange = wages
        .filter((con) => con.GENDER === form.Sexo)
        .filter((con) => con.EDUISCED === form.Estudios)
        .filter((con) => con.FIRMPRI === form.Sector)
        .filter((con) => con.NACE2002 === form.Industria)
        .map((wag) => wag.WAGEGR0NAT);

      break;
  }

  const Media =
    wageRange.reduce((accum, curr) => accum + curr, 0) / wageRange.length;

  const higherWage = Math.max(...firstRange).toFixed(2);
  const lowerWage = Math.min(...firstRange).toFixed(2);
  const media = Media.toFixed(2);

  const Values = {
    higherWage: higherWage,
    lowerWage: lowerWage,
    media: media,
    País: form.País,
  };

  return Values;
};
