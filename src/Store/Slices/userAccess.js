import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  modal: false,
  register: false,
};

export const userAccess = createSlice({
  name: "userAccess",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.login = action.payload;
    },
    Register: (state, action) => {
      state.register = action.payload;
    },
    displayModal: (state, action) => {
      if(state.modal){
        return false
      }else{
       return true
      }
    },
  },
});
export const { Login, Register, displayModal } = userAccess.actions;
export default userAccess.reducer;
