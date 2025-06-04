import React, { useRef, useState} from "react";
import "../Styles/mainForm.css";
import { useDispatch} from "react-redux";
import { sendForm } from "../Store/Slices/formSubmit";


export const MainForm = ({currentForm}) => {
 
  const inputs = Object.values(currentForm);
  
  const dispatch = useDispatch();
  const [inputNo, setinputNo] = useState(0);
  
  const formRef = useRef(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {};
    for (let [key, value] of formData.entries()) {
      values[key] = value;
    }   
    dispatch(sendForm({values}));

    formRef.current.reset();
   };
   
 return (
    <form className="main-form" ref={formRef} onSubmit={HandleSubmit}>
         {inputs &&
        inputs.map((input, i) => (
          <div className="inputController" key={i}>
            <label htmlFor="">{i <= inputNo ? input : ""}</label>
            <input
              requiredAdd commentMore actions
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
