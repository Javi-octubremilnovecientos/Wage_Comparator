import React, { useState } from "react";
import { MainForm } from "../Components/MainForm";
import { Firstchart } from "../Components/Charts/FirstChart";
import { Arrow } from "../assets/Icons/Icons";
// import { LoginModal } from "../Components/LoginModal";
import Survey from "../Mocks/2-2018-converted.json";

export const Home = () => {
  const [started, setstarted] = useState(false);

  // const [open, setopen] = useState(false)
  const datos = Survey;
  const europeos = datos.filter((dato) => dato.COUNTRY.includes("Spain"));
  
  const palabra = "Sales assist";
  const firstLetters = palabra.slice(0, 6);

  const coinciden = europeos.filter((vet) => {
    return vet.ISCO0803.startsWith(firstLetters);
  });
  const salarios = coinciden
    .filter((con) => con.WAGEGR0NAT < 9000)
    .map((con) => con.WAGEGR0NAT);

  const totalSalarios = salarios.reduce((accum, curr) => accum + curr, 0);
  console.log(totalSalarios)

  const media = totalSalarios / salarios.length;

  console.log(media);
  return (
    <main>
      {/* <LoginModal/> */}
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
