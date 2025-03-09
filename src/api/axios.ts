import axios, { AxiosInstance } from "axios";
import { CONFIG } from "./config";

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const api = createAxiosInstance(CONFIG.BASE_URL);