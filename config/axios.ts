import axios, { AxiosInstance } from "axios";

const { URL } = process.env;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.URL,
});

export default axiosInstance;
