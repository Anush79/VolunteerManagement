import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import PatientForm from "../../components/PatientsForm";

import { addVolunteer } from './volunteerSlice'

export default function Volunteer() {
  const { patients } = useSelector(state => state.volunteers);

  return <div>
    <h3>Patients View</h3>
    <PatientForm submitFunction={addVolunteer} type="add" />
    <ul>
      {
        patients?.map(item => <li key={item._id}>
          <NavLink to={`/patients/${item._id}`}>
            <span>{item.name}</span>  ({item.age})
          </NavLink>
        </li>)
      }
    </ul>

  </div>
}