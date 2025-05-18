import React, { useState } from "react";
import { MainForm } from "../Components/MainForm";

import { Arrow } from "../assets/Icons/Icons";

export const Home = () => {
  
  const [started, setstarted] = useState(false);

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
