import { useDispatch, useSelector } from "react-redux";
import { filterByCountry } from "../Store/Slices/formFilter";

export const useDispatchFilter = () => {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.sendForm.forms);
  const formNumber = useSelector((state) => state.sendForm.formNumber);

  return () => {
    forms?.forEach(form => {
      dispatch(filterByCountry({ type: formNumber, payload: form }));
    });
  };
};