

import { configureStore } from "@reduxjs/toolkit"
import { formSubmit } from "./Slices/formSubmit.js"


export const store = configureStore({
    reducer:{
        sendForm: formSubmit.reducer
    }
})