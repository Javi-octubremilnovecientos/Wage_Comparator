
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { UserPage } from './Pages/UserPage'
import './Styles/App.css'

function App() {


  return (
  <>
   
   <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path='/ComparatorResults' element={<Home/>} /> */}
    <Route path='/Profile' element={<UserPage/>} />
    {/* <Route path='/About' element={<About/>} /> */}
   </Routes>
  </>
  )
}

export default App
