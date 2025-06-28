import { createSlice } from "@reduxjs/toolkit";

const initialState = false

export const themeToggler = createSlice({
    name:"themeToggler",
    initialState,
    reducers:{
     toggleTheme:(state, action)=>{
    
     const body = document.querySelector("body")  
      
     if(action.payload.payload === true){
       body.setAttribute("data-theme", "dark")
       return true
      }else{
          body.removeAttribute("data-theme")
          return false
      }
     }
    }
   
})
export const { toggleTheme } = themeToggler.actions;
export default themeToggler.reducer;