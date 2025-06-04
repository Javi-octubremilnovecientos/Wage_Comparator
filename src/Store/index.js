

import { configureStore } from "@reduxjs/toolkit"
import {formSlice} from "./Slices/formSubmit"


export const store = configureStore({
    reducer:{
        sendForm: formSlice.reducer
    }
})