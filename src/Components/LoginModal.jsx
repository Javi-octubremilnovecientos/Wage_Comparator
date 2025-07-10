import React, { useRef } from "react";
import "../Styles/LoginModal.css";
import { useDispatch } from "react-redux";
import { displayModal, Register } from "../Store/Slices/userAccess";
import getRandomNumber from "../Utils/randomNumber";


export const LoginModal = () => {
  const dispatch = useDispatch();

  const Overlay = useRef();
  const title = useRef();
  const handleOverlay = () => {
    if (Overlay.current.style.top === "50%") {
      Overlay.current.style.top = "0%";
      title.current.textContent = "Login";
    } else {
      Overlay.current.style.top = "50%";
      title.current.textContent = "Sing In";
    }
  };

  const handleClose = () => {
    dispatch(displayModal());
  };

  const register = (e)=>{
     e.preventDefault()
    const newUser = new FormData(e.target)
    const objetctFromUser = Object.fromEntries(newUser)
    if(objetctFromUser.password != objetctFromUser.repeatpass){
      alert("las contraseñas no coinciden")
    }
    const id = getRandomNumber()
    objetctFromUser.id = id
    dispatch(Register({payload:objetctFromUser}))
    
  }

  return (
    <div className="LoginModal">
      <div className="overlay" ref={Overlay} onClick={handleOverlay}>
        <h2 ref={title}>Sign In</h2>
      </div>
      <button className="close" onClick={handleClose}>
        X
      </button>
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
        <form action="" onSubmit={register}>
          <label htmlFor="">e-mail</label>
          <input type="email" name="email" />
          <label htmlFor="">username</label>
          <input type="text" name="username" />
          <label htmlFor="">password</label>
          <input type="password" name="password" />
          <label htmlFor="">repeat password</label>
          <input type="password" name="repeatpass"/>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};
