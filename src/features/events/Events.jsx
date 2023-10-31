import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
// import WardForm from "../../components/WardForm";
import { addEvent } from "./eventSlice";
import EventsForm from "../../components/EventsForm";



export default function Events() {
  const { events } = useSelector(state => state.events);
  return <div>
    <h3>Events View</h3>
    <div className="contain">
    <EventsForm type="add" submitFunction={addEvent} />
    <ul>
      {
        events?.map(item => <li key={item._id}>
          <NavLink to={`/events/${item._id}`}>
             {item.name}
          </NavLink>
        </li>)
      }
    </ul>
    </div>
  </div>
}