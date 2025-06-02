import React, { useEffect, useRef, useState } from "react";
import "../Styles/mainForm.css";
import { surveys } from "../Mocks/Survey";

import { useDispatch,useSelector } from 'react-redux'
import { sendForm } from '../Store/Slices/Slice'
import { useConsult } from "../hooks/useConsult";


export const MainForm = () => {
  const grafica = useSelector((state)=> state.sendForm)
  const dispatch = useDispatch()

  const  consultar = useConsult()
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
  
    dispatch(sendForm({values}))
  

  setformNo(formNo + 1); // Avanza al siguiente formulario
  setinputNo(0); // Reinicia el inputNo
  formRef.current.reset();
};



  useEffect(() => {
    setform(surveys[formNo]);
   console.log(grafica)
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
  <button type="submit"  >
    Next
  </button>
</form>
  );
};
