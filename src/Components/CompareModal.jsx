import React from 'react'
import "../Styles/compareModal.css"

export const CompareModal = ({close}) => {


  return (
    <div className='compare-modal'>
      <h3>Comparar con</h3>
      <form action="">
        <label htmlFor="">Otras Comunidades Autónomas</label>
        <select name="" id="">
        <option value="">Andalucía</option>
        </select>
        <label htmlFor="">Otros Pises</label>
      <select name="" id="">
        <option value="">Belgium</option>
      </select>
        
      </form>  
       <button onClick={()=>close(false)}>Comparar</button>
    
    </div>
  )
}
