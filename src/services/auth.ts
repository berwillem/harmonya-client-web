import { BASE_API_URL } from "@/config/api";
import axios from "axios";
axios.defaults.withCredentials = true;
interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  userType: string;
  firstName: string;
  lastName: string;
  client: {
    phone: string;
  };
}

export const loginUser = (data: LoginData) => {
  return axios.post(`${BASE_API_URL}/auth`, data, { withCredentials: true });
};

export const registerUser = (data: RegisterData) => {
  return axios.post(`${BASE_API_URL}/users?type=${data.userType}`, data);
};
