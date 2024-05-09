import { createSlice } from "@reduxjs/toolkit";
import { getDoctor } from "./doctors-thunk";

export const initialState = {
  doctor: [],
  isLoading: false,
  error: "",
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDoctor.fulfilled, (state, { payload }) => {
      console.log(payload.results, "wwwwwwwwwwwwwwwwwwww");
      state.doctor = payload;
      state.isLoading = false;
    });
    builder.addCase(getDoctor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDoctor.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
export default doctorSlice;
