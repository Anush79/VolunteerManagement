
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePatient } from "../features/patients/patientSlice";
import { updateWardData } from "../features/wards/wardSlice";
import PatientForm from "./PatientsForm";


export default function UpdateForm({type, data, onClose , onAddSubmitFunction, onUpdateSubmit}){
  const [formData, setFormData] = useState(data);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(type === "patient")
    dispatch(updatePatient({id:data._id, formData}));
  else dispatch(updateWardData({id:data._id, formData}))
    onClose()
  };
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  if(type === "patient"){
    return <PatientForm preData={data} />   
  }
  else return <>
 
  </>

}