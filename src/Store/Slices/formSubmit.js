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
      if (action.payload.type === 0 || action.payload.type === "add") {
        state.forms = [...state.forms, action.payload.payload];
      } else {
        state.forms.map((form) => {
          return { ...form, ...action.payload.payload };
        });
      }
      state.formNumber++;
    },
  },
});

export const { sendForm } = formSubmit.actions;
export default formSubmit.reducer;
