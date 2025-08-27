// frontend/src/api/auth.ts
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // apne backend ka URL daalna

export const signup = async (data: any) => {
  return await axios.post(`${API_URL}/signup`, data);
};

export const login = async (data: any) => {
  return await axios.post(`${API_URL}/login`, data);
};

