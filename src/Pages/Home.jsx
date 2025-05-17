import React from 'react'
import { MainForm } from '../Components/MainForm'

export const Home = () => {
  return (
    <main>
    <section id='intro'>
        <h1>Wage Comparator</h1>
        <h4>Let's start</h4>
    </section>
    <section id='hero'>
       <MainForm/>
    </section>
    </main>
  )
}
