import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  modal: false,
  register:[],
};

export const userAccess = createSlice({
  name: "userAccess",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.login = !state.login;
    },
    Register: (state, action) => {
     state.register = [...state.register,action.payload.payload]
     console.log(state.register)
    },
    displayModal: (state) => {
     
    state.login ?  ""  : state.modal = !state.modal;
     
    },
  },
});
export const { Login, Register, displayModal } = userAccess.actions;
export default userAccess.reducer;
