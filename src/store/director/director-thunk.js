import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDirectorReq } from './../../service/director';
export const getDirector = createAsyncThunk(
  "director/getDirector",
  async (_, rejectedWithValue) => {
    try {
        const {data} = await getDirectorReq()
        console.log(data);
        return data
    } catch (error) {
        rejectedWithValue("error coding")
    }
  }
);
