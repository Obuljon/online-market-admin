import axios from "axios";

// Backend API base URL
const API_BASE_URL = import.meta.env.VITE_API_URL;

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "authorization": `${localStorage.getItem("token") || ""}`,
  },
  // You can add more default config here (e.g., withCredentials, timeout)
});

// Optionally, add interceptors for auth, error handling, etc.
// api.interceptors.request.use(config => {
//   // Add auth token if needed
//   return config;
// });

api.interceptors.response.use(
  (response) => response,
  (error) => {
    window.location.href = "/login";
    return Promise.reject(error);
  },
);

export default api;
