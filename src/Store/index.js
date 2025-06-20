

import { configureStore } from "@reduxjs/toolkit"
import { formSubmit } from "./Slices/formSubmit.js"
import { formFilter } from "./Slices/formFilter.js"


export const store = configureStore({
    reducer:{
        sendForm: formSubmit.reducer,
        filterForm: formFilter.reducer
    }
})