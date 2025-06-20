import { createSlice } from "@reduxjs/toolkit";
import Survey from "../../Mocks/FinalDataBase.json";

const initialState = [];

export const formFilter = createSlice({
  name: "filterForm",
  initialState,
  reducers: {
    filterByCountry: (state, action) => {
      const datos = Survey;

      const country = datos.filter((dato) =>
        dato.COUNTRY.includes(action.payload.payload.País)
      );

      const occupation = action.payload.payload.Profesión;
      const firstLetters = occupation.slice(0, 5);

      const currentOccupation = country.filter((vet) => {
        const isco = vet.ISCO0803?.toString() ?? "";
        return isco.startsWith(firstLetters);
      });
      const wages = currentOccupation.filter((con) => con.WAGEGR0NAT < 9000);
      const firstRange = wages.map((wag) => wag.WAGEGR0NAT);

      let wageRange = [];

      switch (action.type) {
        case 1:
          wageRange = firstRange;
          break;
        case 2:
          wageRange = wages
            .filter((con) => con.GENDER === action.payload.payload.Sexo)
            .filter((con) => con.EDUISCED === action.payload.payload.Estudios)
            .map((wag) => wag.WAGEGR0NAT);

          break;
        case 3:
          wageRange = wages
            .filter((con) => con.GENDER === action.payload.payload.Sexo)
            .filter((con) => con.EDUISCED === action.payload.payload.Estudios)
            .filter(
              (con) => con.FIRMPRI === action.payload.payload.TamañoEmpresa
            )
            .filter((con) => con.NACE2002 === action.payload.payload.Industria)
            .map((wag) => wag.WAGEGR0NAT);

          break;
        case 4:
          wageRange = wages
            .filter((con) => con.GENDER === action.payload.payload.Sexo)
            .filter((con) => con.EDUISCED === action.payload.payload.Estudios)
            .filter(
              (con) => con.FIRMPRI === action.payload.payload.TamañoEmpresa
            )
            .filter((con) => con.NACE2002 === action.payload.payload.Industria)
            .map((wag) => wag.WAGEGR0NAT);

          break;

        default:
          wageRange = firstRange;
          break;
      }

      const Media = wageRange.reduce((accum, curr) => accum + curr, 0) / wageRange.length;

     
        
        const higherWage = Math.max(...firstRange).toFixed(2);
        const lowerWage = Math.min(...firstRange).toFixed(2);
        const media = Media.toFixed(2);
    
        const Values = {
        higherWage: higherWage,
        lowerWage: lowerWage,
        media: media,
        País: action.payload.payload.País
      };

      state.push(Values);
    },
  },
});

export const { filterByCountry } = formFilter.actions;
export default formFilter.reducer;
