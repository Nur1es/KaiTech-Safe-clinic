import { createSlice } from "@reduxjs/toolkit";
import { getDirector } from "./director-thunk";

const initionState = {
  director: [],
  isLoading: false,
  error: "",
};

export const directorSlice = createSlice({
  name: "director",
  initionState,
  extraReducers: (builder) => {
    builder.addCase(getDirector.fulfilled, (state, { payload }) => {
      state.director = payload;
      state.isLoading = false;
    });
    builder.addCase(getDirector.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getDirector.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
export default directorSlice;
