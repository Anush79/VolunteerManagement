import { configureStore } from "@reduxjs/toolkit";

import volunteerSlice from '../features/volunteer/volunteerSlice'
import eventSlice from "../features/events/eventSlice";

export default configureStore({
  reducer: {
    volunteers: volunteerSlice,
    events: eventSlice
  }
})