import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import {toast} from 'react-hot-toast'

import axios from 'axios';

export const fetchPatients = createAsyncThunk('/patients/fetchPatients', 
async ()=>{
  const response = await axios.get('https://hospitalmanagement.anushkajaiswal7.repl.co/patients');
  return response?.data?.data
}
)
export const addPatients= createAsyncThunk('/patients/addPatients', async(bodyData)=>{
  const  response = await axios.post('https://hospitalmanagement.anushkajaiswal7.repl.co/patients', bodyData);
  return response.data.data;
})
export const deletePatientData = createAsyncThunk('/patients/deletePatient', async(id)=>{
const response = await axios.delete(`https://hospitalmanagement.anushkajaiswal7.repl.co/patients/${id}`)
return response.data.data
})
export const updatePatients = createAsyncThunk('/wards/updatePatients', async({id, formData})=>{
  const response = await axios.put(`https://hospitalmanagement.anushkajaiswal7.repl.co/patients/${id}`, formData)
 return response.data.data
})
export const patientSlice = createSlice({
  name:'patients',
  initialState:{
    patients:[],
    error:null,
    status:'idle'
  },reducers:{},
  extraReducers:{
    [fetchPatients.fulfilled]:(state,action)=>{
      state.patients = action.payload;
      state.status = 'success';
      state.error= null;
    },
    [fetchPatients.rejected]:(state, action)=>{
      state.error = action.payload;
      state.status = 'success'
    },
    [fetchPatients.pending]: (state) => {
      state.status = "loading";
    },
    [addPatients.fulfilled]:(state,action)=>{
      state.patients = [action.payload, ...state.patients]
      state.status = 'success';
      state.error= null;
    },
    [addPatients.rejected]:(state, action)=>{
      state.error = action.payload;
    },
    [addPatients.pending]: (state) => {
      state.status = "loading";
    },
    [deletePatientData.fulfilled]:(state,action)=>{
      state.patients = action.payload;
      state.status = 'success';
      state.error= null;
    },
    [deletePatientData.rejected]:(state, action)=>{
      state.error = action.payload;
      state.status = 'success'
    },
    [deletePatientData.pending]: (state) => {
      state.status = "loading";
    },
    [updatePatients.fulfilled]:(state,action)=>{
      state.patients = action.payload;
      state.status = 'success';
      state.error= null;
    },
    [updatePatients.rejected]:(state, action)=>{
      state.error = action.payload;
      state.status = 'success'
    },
    [updatePatients.pending]: (state) => {
      state.status = "loading";
    },
  }
})

export default patientSlice.reducer