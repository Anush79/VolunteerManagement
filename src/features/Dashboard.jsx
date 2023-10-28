import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { patients } = useSelector((state) => state?.patients);
  const { wards } = useSelector(state => state?.wards);
  // const totalCapacity  = wards?.reduce((acc, curr)=>acc?.capacity+curr?.capacity,0)
  // const wards = [2,4,6,7,8,9];
  const totalCapacity = wards?.reduce((acc, curr) => {
    return Number(curr.capacity) + Number(acc)
  }, 0)
  
  // useEffect(() => {

  // }, [wards])
  return (
    <>
      <h2>Welcome to Hospital Management System</h2>
      <p>
        Users can view hospital-wide statistics, including the total number of
        patients, the current occupancy rate, the average length of stay, and
        the top-performing ward based on various criteria.
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
