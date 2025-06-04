import { createSlice } from '@reduxjs/toolkit'



const initialState = {
   forms:[],
   formNumber:0
}



export const formSlice = createSlice({
   name: "sendForm",
   initialState,
   reducers: {
      sendForm: (state, action) => {
         state.forms.push(action.payload)
         state.formNumber ++
      }
   }
})

export const { sendForm } = formSlice.actions
export default formSlice.reducer
