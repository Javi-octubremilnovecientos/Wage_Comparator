import React, { useRef} from 'react'
import "../Styles/LoginModal.css"
import { useDispatch } from 'react-redux'
import { displayModal} from '../Store/Slices/userAccess'

export const LoginModal = () => {

  const dispatch = useDispatch()

  const Overlay = useRef()
  const title = useRef()
  const handleOverlay = ()=>{


    if(Overlay.current.style.top === "50%"){
      Overlay.current.style.top = "0%"
      title.current.textContent = "Login"
    }else{
      Overlay.current.style.top = "50%"
      title.current.textContent = "Sing In"
    }
   }
  
  const handleClose = ()=>{
      dispatch(displayModal)
  }


  return (
    <div className='LoginModal'>
        <div className="overlay" ref={Overlay}
        onClick={handleOverlay} >
            <h3 ref={title}>Sign In</h3>
        </div>
        <button className="close" onClick={handleClose}>X</button>
        <div className="formUno">
        <form action="">
            <label htmlFor="">username</label>
            <input type="text" />
            <label htmlFor="">password</label>
            <input type="password" />
            <button>Log In</button>
        </form>
        </div>
        <div className="formDos">
        <form action="">
            <label htmlFor="">e-mail</label>
            <input type="text" />
            <label htmlFor="">username</label>
            <input type="text" />
            <label htmlFor="">password</label>
            <input type="text" />
            <label htmlFor="">repeat password</label>
            <input type="text" />
            <button>Sign In</button>
        </form>
        </div>
    </div>
  )
}
