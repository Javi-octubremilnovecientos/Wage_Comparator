
import { useDispatch, useSelector } from "react-redux";
import { filterByCountry } from "../Store/Slices/formFilter";

export const useSendForm = () => {

  
  const dispatch = useDispatch()

  const forms = useSelector((state) => state.sendForm.forms);

  const formNumber = useSelector((state)=> state.sendForm.formNumber)

  forms?.forEach(form => {
     dispatch(filterByCountry({type:formNumber,payload:form}))
  });

};
