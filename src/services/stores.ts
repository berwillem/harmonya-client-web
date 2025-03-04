import { BASE_API_URL } from "@/config/api";
import axios from "axios";

export const getAllStores = async () => {
  return axios.get(`${BASE_API_URL}/stores`);
};
