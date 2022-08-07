import axios from "axios";

export const baseAxios = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_URL,
  headers: {
    "Content-Type": "application/json",
  },
})