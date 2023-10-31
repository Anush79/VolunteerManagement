import { useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./features/Dashboard";
import Wards from "./features/events/Events";
import Header from "./components/Header";
import { fetchEvents } from "./features/events/eventSlice";
import ShowDetails from "./components/ShowDetails";
import HotToast from "./components/HotToast";
import Volunteer from "./features/volunteer/Volunteer";
import { fetchVolunteers } from "./features/volunteer/volunteerSlice";
import Events from "./features/events/Events";
function App() {
  const dispatch = useDispatch();
  const { status:vloading } = useSelector((state) => state?.volunteers
  );
  const { status: eLoading } = useSelector((state) => state?.events);

  useEffect(() => {
    dispatch(fetchVolunteers());
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="App">

      <header>
        <Header />
      </header>
      <HotToast />
      <main>
        {vloading ==='loading' || eLoading==='loading' ? <div className="loader"></div> : null}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/events" element={<Events />} />
          <Route path="/:type/:id" element={<ShowDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
