import axios from "axios";

import { BASE_API_URL } from "@/config/api";
import { useAuthStore } from "@/stores/StoreUser";

axios.defaults.withCredentials = true;


axios.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token; 
    console.log("Token utilisé :", token); 

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Fonction pour créer un store
export const CreateStore = (data: any) => {
  return axios.post(`${BASE_API_URL}/stores`, data);
};
export const getStore = () => {
  return axios.get(`${BASE_API_URL}/stores`);
};
export const getStorebyId = (id:any) => {
  return axios.get(`${BASE_API_URL}/stores/${id}`);
};
export const getStorebyOwner = (id:any) => {
  return axios.get(`${BASE_API_URL}/stores/owner/${id}`);
};
export const getAllStores = async () => {
  return axios.get(`${BASE_API_URL}/stores`);
};