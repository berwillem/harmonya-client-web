import { BASE_API_URL } from "@/config/api";
import axios from "axios";

export const getAllServices = async () => {
  return axios.get(`${BASE_API_URL}/services`);
};
export const getServicesById = async (id:any) => {
  return axios.get(`${BASE_API_URL}/services/${id}`);
};
