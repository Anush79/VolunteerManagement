import { useSelector } from "react-redux";

export default function Dashboard() {
  const { patients } = useSelector((state) => state?.volunteer);
  const { wards } = useSelector((state) => state?.wards);

  const totalCapacity = wards?.reduce((acc, curr) => {
    return Number(curr.capacity) + Number(acc);
  }, 0);
  const top = patients?.reduce((acc, curr) => {
    if (acc[curr.ward]) {
      return { ...acc, [curr.ward]: acc[curr.ward] + 1 }
    } else {
      return { ...acc, [curr.ward]: +1 }
    }
  }, {})
  console.log(top)

  const occupancy = (Math.ceil((patients?.length / totalCapacity) * 100))
  return (
    <>
      <h2>Welcome to Volunteer Management System</h2>
      <p>Users can view hospital-wide data.</p>
      <p>
        <p>
          Total Number of patients :<b> {patients?.length}</b>
        </p>
        <p>
          Current Occupancy Rate:{" "}
          <b>{typeof occupancy === Number ? occupancy : "calculating..." }%</b>
        </p>
      </p>
    </>
  );
}
