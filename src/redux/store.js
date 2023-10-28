import { configureStore } from "@reduxjs/toolkit";

import patientSlice from '../features/patients/patientSlice'
import wardSlice from "../features/wards/wardSlice";

export default configureStore({
  reducer:{
    patients : patientSlice,
wards:wardSlice
  }
})