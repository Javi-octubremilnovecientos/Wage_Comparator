import { createSlice } from "@reduxjs/toolkit";
import { formFilter } from "../../Functions/formFilter";

const initialState = null;

export const dispatchFilter = createSlice({
  name: "dispatchFilter",
  initialState,
  reducers: {
    filterForm: (state, action) => {
      const forms = action.payload.payload;
      const formNumber = action.payload.type;
      return forms.map((form) => formFilter(form, formNumber));
    },
  },
});

export const { filterForm } = dispatchFilter.actions;
export default dispatchFilter.reducer;
