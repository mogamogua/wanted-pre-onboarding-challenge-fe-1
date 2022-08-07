import axios from "axios";
import { baseAxios } from "./axios"

export const signUp = async(email: string, password: string) => {
  try {
    const apiRes = await baseAxios.post("/users/create", {
      email,
      password,
    });
    return {status: apiRes.status, data: apiRes.data.details};
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } 
  }
}