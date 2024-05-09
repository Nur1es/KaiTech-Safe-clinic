import { createSlice } from "@reduxjs/toolkit";
import { getPatient } from "./patient-thunk";
const initialState = {
  patient: [],
  isLoading: false,
  error: "",
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPatient.fulfilled, (state, { payload }) => {
      state.patient = payload;
      state.isLoading = false;
    });
    builder.addCase(getPatient.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPatient.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    ///post///
    // builder.addCase(postPatient.fulfilled, (state, { payload }) => {
    //   state.patient = payload;
    //   state.isLoading = false;
    // });
    // builder.addCase(postPatient.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(postPatient.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // });
  },
});
export default patientSlice;
