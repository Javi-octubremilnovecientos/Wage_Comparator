import React, { useState } from "react";
import { MainForm } from "../Components/MainForm";

import { Arrow } from "../assets/Icons/Icons";
import {data} from "../Mocks/2-Grap-exported-final.js"
export const Home = () => {
  
  const [started, setstarted] = useState(false);

// const datos = data;

// const europeos = datos.filter((dato) => 
//   ["Spain", "France", "Portugal", "Germany","Netherlands"].includes(dato.COUNTRY)
// );


// const salarios = europeos.map((vet) => {
  
  // console.log(vet.WAGEGR1)
 
// });

// const totalSalario = salarios.reduce((acc, curr) => acc + curr, 0);

//  const media = totalSalario / salarios.length

// console.log(media);


  return (
    <main>
      <section id="intro">
        <h1>
          Wage <br /> Comparator
        </h1>
        <h3>Let's start</h3>
      </section>
      <section id="hero">
        {started ? (
          <MainForm />
        ) : (
          <div className="initialForm">
            <Arrow onClick={() => setstarted(true)} />
          </div>
        )}
      </section>
    </main>
  );
};
