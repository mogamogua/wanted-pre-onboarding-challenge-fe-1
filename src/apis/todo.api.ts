import axios from "axios";
import { baseAxios } from "./axios"

export const getTodos = async (token: string) => {
  try {
    const apiRes = await baseAxios.get("/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    if (apiRes.status === 200) {
      return apiRes.data;
    }
  } catch (error) {
      throw error;
  }
};

export const createTodo = async (token: string, title:string, content:string) => {
  try {
    const apiRes = await baseAxios.post("/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        title,
        content,
      }
    });
    if (apiRes.status === 200) {
      return apiRes.data;
    }
  } catch (error) {
    throw error;
  }
}