import { createSlice } from "@reduxjs/toolkit";
import { getFilial } from "./filial-thunk";

const initialState = {
  branch: [],
  isLoading: false,
  error: "",
};

export const filialSlice = createSlice({
  name: "branch",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFilial.fulfilled, (state, { payload }) => {
      state.branch = payload;
      state.isLoading = false;
    });
    builder.addCase(getFilial.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getFilial.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
export default filialSlice;
