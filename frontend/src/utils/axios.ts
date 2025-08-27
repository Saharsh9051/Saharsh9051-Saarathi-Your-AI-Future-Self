import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // apna backend base URL
  withCredentials: true, // agar JWT cookie me bhej raha hai
});

// agar token localStorage me hai
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
