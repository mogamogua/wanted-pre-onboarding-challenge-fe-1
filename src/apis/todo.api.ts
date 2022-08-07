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