import React, { useState } from "react";
import { MainForm } from "../Components/MainForm";
import { Firstchart } from "../Components/Charts/FirstChart";
import { Arrow } from "../assets/Icons/Icons";
import { surveys } from "../Mocks/Survey";
import { LoginModal } from "../Components/LoginModal";
import { useSelector } from "react-redux";



export const Home = () => {
  const [started, setstarted] = useState(false);

  const formNo = useSelector((state) => state.sendForm.formNumber);
  const currentForm = surveys[formNo];
 const modalOpen= useSelector((state)=> state.userAccess.modal)

  return (
    <main >
      {modalOpen? <LoginModal/>  :  "" }
    
      <section id="intro">
        {formNo > 0 ? (
          <Firstchart />
        ) : (
          <h1>
            Wage <br /> Comparator
          </h1>
        )}
      </section>
      <section id="hero">
        {started ? (
          <MainForm currentForm={currentForm} />
        ) : (
          <div className="initialBox">
            <h3>Lets Start</h3>
            <div className="initialForm">
              <Arrow onClick={() => setstarted(true)} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};
