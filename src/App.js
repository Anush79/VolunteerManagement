import { useEffect } from "react";
import "./App.css";
import Patients from "./features/patients/Patients";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "./features/patients/patientSlice";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./features/Dashboard";
import Wards from "./features/wards/Wards";
import Header from "./components/Header";
import { fetchWards } from "./features/wards/wardSlice";
import ShowDetails from "./components/ShowDetails";
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
    
      <main>
        {pLoading==='loading' || wLoading==='loading' ? <div className="loader"></div> : null}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/wards" element={<Wards />} />
          <Route path="/:type/:id" element={<ShowDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
