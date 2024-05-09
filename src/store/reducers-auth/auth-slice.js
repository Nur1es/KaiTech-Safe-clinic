import { createSlice } from "@reduxjs/toolkit"
import { getSignIn } from "./auth-thunk"

const initialState = {
    token: '',
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getSignIn.fulfilled, (state, {payload}) => {
            state.token = payload;
            isLoading = false;
        });
        builder.addCase(getSignIn.pending, (state, {payload}) => {
            state.isLoading = true;
        });
        builder.addCase(getSignIn.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = 'Something went wrong!!!'
        }) 
    }
})