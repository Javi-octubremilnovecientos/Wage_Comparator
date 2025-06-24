import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forms: [],
  formNumber: 0,
};

export const formSubmit = createSlice({
  name: "sendForm",
  initialState,
  reducers: {
    sendForm: (state, action) => {
      switch (action.payload.type) {
        case 0:
          state.forms = [...state.forms, action.payload.payload];
          state.formNumber++;
          break;
        case "add":
          state.forms = [...state.forms, action.payload.payload];
          break;
        default:
          state.forms.map((form) => {
            return { ...form, ...action.payload.payload };
          });
          state.formNumber++;
      }
    },
  },
});

export const { sendForm } = formSubmit.actions;
export default formSubmit.reducer;
