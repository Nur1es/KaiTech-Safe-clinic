import axios from "axios";

const BASE_URL = "http://157.245.202.197/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});




