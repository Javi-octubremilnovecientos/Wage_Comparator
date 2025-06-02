

import { configureStore } from "@reduxjs/toolkit"
import {formSlice} from "./Slices/Slice"


export const store = configureStore({
    reducer:{
        sendForm: formSlice.reducer
    }
})