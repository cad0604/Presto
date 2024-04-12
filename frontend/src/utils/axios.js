import axios from "axios";

export const axiosClient = axios.create({
  
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  timeout: 1000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

