import React from 'react'

export const MainForm = () => {
  return (
    <form className='main-form'>
      <label htmlFor="">Profesión</label>
      <input type="text" />
      <label htmlFor="">Puesto</label>
      <input type="text" />
      <label htmlFor="">Situación laboral</label>
      <input type="text" />
      <label htmlFor="">País</label>
      <input type="text" />
      <label htmlFor="">Comunidad Autónoma</label>
      <input type="text" />
      <button type='submit'>Next</button>
    </form>
  )
}
