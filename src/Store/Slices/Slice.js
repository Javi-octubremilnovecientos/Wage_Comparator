import { createSlice } from '@reduxjs/toolkit'



const initialState = []



export const formSlice = createSlice({
   name: "sendForm",
   initialState,
   reducers: {
      sendForm: (state, action) => {
         state.push(action.payload)
        
         
      }
   }
})

export const { sendForm } = formSlice.actions
export default formSlice.reducer
