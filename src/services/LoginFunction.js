import axios from "axios";

export const doLogin = async (credentials) => {
  try {
    console.log(credentials)
    const response = await axios.post("https://twitter-clone-backend-production-c9cc.up.railway.app/auth/login/",credentials);
    return response
  } catch (error) {
    throw error;
  }
}