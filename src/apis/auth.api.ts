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

export const signUp = async(email: string, password: string) => {
  try {
    const apiRes = await baseAxios.post("/users/create", {
      email,
      password,
    });
    return {status: apiRes.status, data: apiRes.data.details};
  } catch (error) {
    throw error;
  }
}