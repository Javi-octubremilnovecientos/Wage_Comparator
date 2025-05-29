import React from 'react'
import "../Styles/LoginModal.css"
export const LoginModal = () => {
  return (
    <div className='LoginModal'>
        <div className="overlay">
            <h3>Sign In</h3>
        </div>
        <form action="">
            <label htmlFor="">username</label>
            <input type="text" />
            <label htmlFor="">password</label>
            <input type="password" />
            <button>Log In</button>
        </form>
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
  )
}
