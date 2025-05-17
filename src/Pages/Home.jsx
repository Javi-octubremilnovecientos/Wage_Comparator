import React, { useState, useReducer } from "react";
import { MainForm } from "../Components/MainForm";
import { survey } from "../Mocks/Survey";
import { initialState, launchReducer } from "../Reducers/launchReducer";
import { Arrow } from "../assets/Icons/Icons";

export const Home = () => {
  const [state, dispatch] = useReducer(launchReducer, initialState);

  const [labels, setlabels] = useState(0);

  const Next = (e) => {
    e.preventDefault();

    if (labels <= 2) {
      setlabels(labels + 1);
    } else {
      setlabels(3);
    }
  };

  const handleDisptach = () => {
    dispatch({ type: "LAUNCH" });
  };

  return (
    <main>
      <section id="intro">
        <h1>Wage <br/> Comparator</h1>
        <h3>Let's start</h3>
      </section>
      <section id="hero">
        {state.launched ? (
          <MainForm
            cuestion={survey[labels]}
            estado={state.launched}
            siguiente={Next}
          />
        ) : (
          <div className="initialForm">
            <Arrow onClick={handleDisptach} />
          </div>
        )}
      </section>
    </main>
  );
};
