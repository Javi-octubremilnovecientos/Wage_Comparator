

import { configureStore } from "@reduxjs/toolkit"
import { formSubmit } from "./Slices/formSubmit.js"
import { dispatchFilter } from "./Slices/dispatchFilter.js"



export const store = configureStore({
    reducer: {
        sendForm: formSubmit.reducer,
        dispatchFilter: dispatchFilter.reducer
    }
})