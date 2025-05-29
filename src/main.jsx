
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './App.jsx'
import { Header } from './Components/Layouts/Header.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Header/>
    <App />
    </BrowserRouter>

)
