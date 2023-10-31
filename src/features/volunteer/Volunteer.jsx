import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";

import { addVolunteer } from './volunteerSlice'
import VolunteersForm from "../../components/VolunteersForm";

export default function Volunteer() {
  const { volunteers } = useSelector(state => state?.volunteers);
  console.log(volunteers);
  return <div>
    <h3>Volunteers View</h3>
    <div className="contain">
    <VolunteersForm submitFunction={addVolunteer} type="add" />
    <ul>
      {
        volunteers?.map(item => <li style={item.availability ? {border:"solid", borderColor: "green" }:{}} key={item._id}>
          <NavLink to={`/volunteer/${item._id}`}>
            <span>{item.name}</span>  ({item.availability})
          </NavLink>
        </li>)
      }
    </ul>
    </div>
  </div>
}