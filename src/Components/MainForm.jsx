import React, { useState } from 'react'
import "../Styles/mainForm.css"



export const MainForm = ({cuestion, siguiente}) => {
  const inputs = Object.values(cuestion)
  const [visible, setvisible] = useState(0)


  
  const handleDiab = ()=>{
    setvisible(visible + 1)
    console.log(visible)
  }




  return (
    <form className='main-form'>
      {
        <>
          {inputs && inputs.map((input, i) => (
            <div className="inputController"key={i}>
              <label htmlFor={`input-${i}`}>{i <= visible ? input : ""}</label>
              <input
                id={`input-${i}`}
                type="text"
                disabled={i <= visible ? false: true}
                className={i < visible ? "" : "disabled"}
                onClick={handleDiab}
               
              />
            </div>
          ))}
          <button
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              setvisible(0);
              siguiente(e);
            }}
          >
            Next
          </button>
        </>
      }
    </form>
  )
}
