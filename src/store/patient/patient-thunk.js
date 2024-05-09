import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPatientReq, postPatientReq } from "../../service/patient";
/// GET ///
export const getPatient = createAsyncThunk(
  "patient/getPatient",
  async (_, rejectedWithValue) => {
    try {
      const { data } = await getPatientReq();
      return data.results;
    } catch (error) {
      return rejectedWithValue("Something went wrong!!!");
    }
  }
);
/// POST ///
export const postPatient = createAsyncThunk(
  "patient/postPatient",
  async (data, { rejectedWithValue }) => {
    try {
      const response = await postPatientReq(data);
      return response.data;
    } catch (error) {
      return rejectedWithValue("Something went wrong!!!");
    }
  }
);
