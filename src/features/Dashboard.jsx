import { useState } from "react";
import { useSelector } from "react-redux";
import Summary from "../components/Summary";
export default function Dashboard() {
  const  {volunteers}  = useSelector((state) => state?.volunteers);
 const [summary, setSummary] = useState('')


  return (
    <>
      <h2>Welcome to Volunteer Management System</h2>
    <p>Users can view a summary of a specific event, which includes the list of registered volunteers, volunteer roles, and event details.</p>
    <p>
    Users can view a summary of a specific volunteer, which includes their contact information, assigned events, and volunteer history.
    </p>
    
    <button onClick={()=>{setSummary('volunteers')}}>View Volunteers summary</button>
    <button onClick={()=>{setSummary('events')}}>View Events summary</button>

    <Summary type ={summary}/>
    </>
  );
}
