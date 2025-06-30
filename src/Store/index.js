

import { configureStore } from "@reduxjs/toolkit"
import { formSubmit } from "./Slices/formSubmit.js"
import { dispatchFilter } from "./Slices/dispatchFilter.js"
import { themeToggler } from "./Slices/themeToggler.js"
import { userAccess } from "./Slices/userAccess.js"



export const store = configureStore({
    reducer: {
        sendForm: formSubmit.reducer,
        dispatchFilter: dispatchFilter.reducer,
        themeToggler: themeToggler.reducer,
        userAccess:userAccess.reducer

    }
})