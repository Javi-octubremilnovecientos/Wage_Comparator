import React, { useRef, useState} from "react";
import "../Styles/mainForm.css";
import { useDispatch} from "react-redux";
import {  sendForm } from "../Store/Slices/formSubmit";
import { useSelector } from "react-redux";



export const MainForm = ({currentForm}) => {
 
  const [inputNo, setinputNo] = useState(0);
  const formNumb = useSelector((state)=>state.sendForm.formNumber)
  
  const inputs = Object.values(currentForm);
  const dispatch = useDispatch();
  
  const formRef = useRef(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values =  Object.fromEntries(formData);
 
    dispatch(sendForm({type:formNumb,payload:values}));

   formRef.current.reset();
   };
   
 return (
    <form className="main-form" ref={formRef} onSubmit={HandleSubmit}>
         {inputs &&
        inputs.map((input, i) => (
          <div className="inputController" key={i}>
            <label htmlFor="">{i <= inputNo ? input : ""}</label>
            <input
              required={true}
              name={input}
              type="text"
              disabled={i <= inputNo ? false : true}
              className={i < inputNo ? "" : "disabled"}
              onClick={() => setinputNo(inputNo + 1)}
            />
          </div>
        ))}
      <button type="submit">Next</button>
    </form>
  );
};
