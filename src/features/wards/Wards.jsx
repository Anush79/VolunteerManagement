import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import WardForm from "../../components/WardForm";
import { addWards } from "./wardSlice";



export default function Wards() {
  const { wards } = useSelector(state => state.wards);
  return <div>
    <h3>Wards View</h3>
    <WardForm type="add" submitFunction={addWards} />
    <ul>
      {
        wards?.map(item => <li key={item._id}>
          <NavLink to={`/wards/${item._id}`}>
         Ward Number - {item.w_number} <br/> Specialization - ({item.specialization})
          </NavLink>
          </li>)
      }
    </ul>
    
  </div>
}