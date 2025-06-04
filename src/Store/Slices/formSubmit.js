import { createSlice } from '@reduxjs/toolkit'



const initialState = {
   forms:[],
   formNumber:0
}



export const formSubmit = createSlice({
   name: "sendForm",
   initialState,
   reducers: {
      sendForm: (state, action) => {
         state.forms.push(action.payload)
         state.formNumber ++
      }
   }
})

export const { sendForm } = formSubmit.actions
export default formSubmit.reducer
