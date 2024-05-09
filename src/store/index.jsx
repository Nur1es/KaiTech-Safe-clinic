import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "./patient/patient-slice";
import filialSlice from "./filial/filial-slice";
import doctorSlice from "./doctors/doctors-slice";
// import directorSlice from "./director/director-slice";

export const store = configureStore({
  reducer: {
    [patientSlice.name]: patientSlice.reducer,
    [filialSlice.name]: filialSlice.reducer,
    [doctorSlice.name]: doctorSlice.reducer,
    // [directorSlice.name]: directorSlice-reducer,
  },
});
