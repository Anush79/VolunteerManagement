import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { patients } = useSelector((state) => state?.patients);
  const { wards } = useSelector(state => state?.wards);
 
  const totalCapacity = wards?.reduce((acc, curr) => {
    return Number(curr.capacity) + Number(acc)
  }, 0)

  return (
    <>
      <h2>Welcome to Patient Management System</h2>
      <p>
        Users can view hospital-wide data.
      </p>
      <p>
        <p>
          Total Number of patients :<b> {patients?.length}</b>
        </p>
        <p>
          Current Occupancy Rate: <b>{Math.ceil( (patients?.length/totalCapacity)*100)}%</b>
        </p>
        
      </p>
    </>
  );
}
