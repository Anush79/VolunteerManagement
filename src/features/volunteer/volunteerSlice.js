import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {toast} from 'react-hot-toast'

import axios from 'axios';

export const fetchVolunteers = createAsyncThunk('/volunteers/fetchVolunteers', 
  async () => {
    const response = await axios.get('https://volunteer-management-application.anushkajaiswal7.repl.co/volunteers');
    return response?.data?.data;
  }
);

export const addVolunteer = createAsyncThunk('/volunteers/addVolunteer', async (bodyData) => {
  const response = await axios.post('https://volunteer-management-application.anushkajaiswal7.repl.co/volunteers', bodyData);
  toast.success(response.data.message);
  return response.data.data;
});

export const deleteVolunteer = createAsyncThunk('/volunteers/deleteVolunteer', async (id) => {
  const response = await axios.delete(`https://volunteer-management-application.anushkajaiswal7.repl.co/volunteers/${id}`);
  toast.success(response.data.message);
  return response.data.data;
});

export const updateVolunteer = createAsyncThunk('/volunteers/updateVolunteer', async ({ id, formData }) => {
  const response = await axios.put(`https://volunteer-management-application.anushkajaiswal7.repl.co/volunteers/${id}`, formData);
  toast.success(response.data.message);
  return response.data.data;
});

export const volunteerSlice = createSlice({
  name: 'volunteers',
  initialState: {
    volunteers: [],
    error: null,
    status: 'idle'
  },
  reducers: {},
  extraReducers: {
    [fetchVolunteers.fulfilled]: (state, action) => {
      state.volunteers = action.payload;
      state.status = 'success';
      state.error = null;
    },
    [fetchVolunteers.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = 'success';
    },
    [fetchVolunteers.pending]: (state) => {
      state.status = 'loading';
    },
    [addVolunteer.fulfilled]: (state, action) => {
      state.volunteers = [action.payload, ...state.volunteers];
      state.status = 'success';
      state.error = null;
    },
    [addVolunteer.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addVolunteer.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteVolunteer.fulfilled]: (state, action) => {
      state.volunteers = action.payload;
      state.status = 'success';
      state.error = null;
    },
    [deleteVolunteer.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = 'success';
    },
    [deleteVolunteer.pending]: (state) => {
      state.status = 'loading';
    },
    [updateVolunteer.fulfilled]: (state, action) => {
      state.volunteers = action.payload;
      state.status = 'success';
      state.error = null;
    },
    [updateVolunteer.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = 'success';
    },
    [updateVolunteer.pending]: (state) => {
      state.status = 'loading';
    },
  }
});

export default volunteerSlice.reducer;
