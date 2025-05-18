import React, { useEffect, useState } from "react";
import "../Styles/mainForm.css";
import { surveys } from "../Mocks/Survey";
export const MainForm = () => {
  const [formNo, setformNo] = useState(0);
  const [inputNo, setinputNo] = useState(0);
  const [form, setform] = useState(surveys[formNo]);

  const Next = (e) => {
    e.preventDefault();
    setformNo(formNo + 1);
  };

  useEffect(() => {
    setform(surveys[formNo]);
  }, [formNo]);

  const inputs = Object.values(form);

  return (
    <form className="main-form">
      {
        <>
          {inputs &&
            inputs.map((input, i) => (
              <div className="inputController" key={i}>
                <label htmlFor="">{i <= inputNo ? input : ""}</label>
                <input
                  name={input}
                  type="text"
                  disabled={i <= inputNo ? false : true}
                  className={i < inputNo ? "" : "disabled"}
                  onClick={() => setinputNo(inputNo + 1)}
                />
              </div>
            ))}
          <button
          type="submit"
            onClick={(e) => {
              Next(e);
              setinputNo(0);
            }}
          >
            Next
          </button>
        </>
      }
    </form>
  );
};
