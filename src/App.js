import { useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "./features/volunteer/patientSlice";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./features/Dashboard";
import Wards from "./features/wards/Wards";
import Header from "./components/Header";
import { fetchWards } from "./features/wards/wardSlice";
import ShowDetails from "./components/ShowDetails";
import HotToast from "./components/HotToast";
import Volunteer from "./features/volunteer/Volunteerr";
function App() {
  const dispatch = useDispatch();
  const { status: pLoading } = useSelector((state) => state?.patients);
  const { status: wLoading } = useSelector((state) => state?.wards);

  useEffect(() => {
    dispatch(fetchPatients());
    dispatch(fetchWards());
  }, [dispatch]);
 
  return (
    <div className="App">

      <header>
        <Header />
      </header>
    <HotToast/>
      <main>
        {pLoading==='loading' || wLoading==='loading' ? <div className="loader"></div> : null}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/events" element={<Wards />} />
          <Route path="/:type/:id" element={<ShowDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
