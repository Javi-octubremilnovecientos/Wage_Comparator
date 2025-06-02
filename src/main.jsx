
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './App.jsx'
import { Header } from './Components/Layouts/Header.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Store/mainForm.js'
import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
    <App />
    </BrowserRouter>
    </Provider>

)
