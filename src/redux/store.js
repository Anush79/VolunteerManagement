import { configureStore } from "@reduxjs/toolkit";

import { volunteerSlice } from '../features/volunteer/volunteerSlice'
import wardSlice from "../features/wards/wardSlice";

export default configureStore({
  reducer: {
    patients: volunteerSlice,
    wards: wardSlice
  }
})