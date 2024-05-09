import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilialReq, postFilialReq } from "../../service/filial";

export const getFilial = createAsyncThunk(
  "branch/getFilial",
  async (_, rejectedWithValue) => {
    try {
      const { data } = await getFilialReq();
      return data;
    } catch (error) {
      return rejectedWithValue("Something went wrong!!!");
    }
  }
);
export const postFilial = createAsyncThunk(
  "branch/postFilial",
  async (data, { rejectedWithValue }) => {
    try {
      const response = await postFilialReq(data);
      return response.results;
    } catch (error) {
      return rejectedWithValue("Something went wrong!!!");
    }
  }
);
