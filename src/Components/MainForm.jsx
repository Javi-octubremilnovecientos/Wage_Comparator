import React, { useEffect, useRef, useState } from "react";
import "../Styles/mainForm.css";
import { surveys } from "../Mocks/Survey";
export const MainForm = () => {
  const [formNo, setformNo] = useState(0);
  const [inputNo, setinputNo] = useState(0);
  const [form, setform] = useState(surveys[formNo]);

  const formRef = useRef(null);

const HandleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const values = {};
  for (let [key, value] of formData.entries()) {
       values[key] = value;
    }
    console.log(values)
// Ahora sí imprime los valores
  setformNo(formNo + 1); // Avanza al siguiente formulario
  setinputNo(0); // Reinicia el inputNo
  formRef.current.reset();
};



  useEffect(() => {
    setform(surveys[formNo]);
  }, [formNo]);

  const inputs = Object.values(form);

  return (
<form className="main-form"  ref={formRef} onSubmit={HandleSubmit}>
  {inputs &&
    inputs.map((input, i) => (
      <div className="inputController" key={i}>
        <label htmlFor="">{i <= inputNo ? input : ""}</label>
        <input
          required
          name={input}
          type="text"
          disabled={i <= inputNo ? false : true}
          className={i < inputNo ? "" : "disabled"}
          onClick={() => setinputNo(inputNo + 1)}
        />
      </div>
    ))}
  <button type="submit">
    Next
  </button>
</form>
  );
};
