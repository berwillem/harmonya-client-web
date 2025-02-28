import { BASE_API_URL } from "@/config/api";
import axios from "axios";


axios.defaults.withCredentials = true;






export const subNewslater = (data:any) => {
  return axios.post(`${BASE_API_URL}/news-letter/subscribe`,data);
};

