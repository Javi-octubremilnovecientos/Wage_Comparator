import React from "react";
import "../Styles/compareModal.css";
import { useDispatch, useSelector } from "react-redux";
import { sendForm } from "../Store/Slices/formSubmit";

export const CompareModal = ({close}) => {
  const form = useSelector((state) => state.sendForm.forms[0]);

  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newObject = Object.fromEntries(formData);
    const País = newObject.País;
    const newForm = { ...form, País };
 
    dispatch(sendForm({ type: "add", payload: newForm }));
    close(false)
  };

  return (
    <div className="compare-modal">
      <h3>Comparar con</h3>
      <form action="" onSubmit={HandleSubmit}>
        {/* <label htmlFor="">Otras Comunidades Autónomas</label>
        <select name="Depart" id="">
        <option value="">Andalucía</option>
        </select> */}
        <label htmlFor="">Otros Pises</label>
        <select name="País" id="">
          <option value="Italy">Italy</option>
          <option value="Portugal">Portugal</option>
        </select>
        <button type="submit">Comparar</button>
      </form>
    </div>
  );
};
