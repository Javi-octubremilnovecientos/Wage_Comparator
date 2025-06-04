import React, { useState } from "react";
import { MainForm } from "../Components/MainForm";
// import { Firstchart } from "../Components/Charts/FirstChart";
import { Arrow } from "../assets/Icons/Icons";
import { surveys } from "../Mocks/Survey";
// import { LoginModal } from "../Components/LoginModal";
import { useSelector } from "react-redux";

export const Home = () => {
  const [started, setstarted] = useState(false);

  const formNo = useSelector((state)=> state.sendForm.formNumber)
  const currentForm = surveys[formNo]
// const [open, setopen] = useState(false)




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
          <MainForm currentForm={currentForm} />
        ) : (
          <div className="initialForm">
            <Arrow onClick={() => setstarted(true)} />
          </div>
        )}
      </section>
    </main>
  );
};
