import axios from "axios";
// require("dotenv").config();

const api = axios.create({
  // baseURL: "https://tree-5a0zt.onrender.com"
  baseURL: "http://54.254.196.169:4001/",
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Add a response interceptor
// api.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//     }
// )

export default api;
