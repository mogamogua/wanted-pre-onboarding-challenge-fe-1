import { baseAxios } from "./axios"

export const login = async (email:string, password:string) => {
  try {
    const apiRes = await baseAxios.post("/users/login", {
      email,
      password
    })
    if (apiRes.status === 200) {
      const { token } = apiRes.data;
      localStorage.setItem("token", JSON.stringify(token));
    }
    return apiRes.status;
  } catch (error) {
    throw error;
  }
}