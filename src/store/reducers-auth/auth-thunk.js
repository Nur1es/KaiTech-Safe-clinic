import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginReq } from "../../../service/auth/auth";


export const getSignIn = createAsyncThunk(
    'auth/getSignIn', 
    async(data, {}) => {
        try {
            const res = await loginReq(data)
            console.log(res);
            return res
        } catch (error) {
            console.log(error);
        }
    }
)


