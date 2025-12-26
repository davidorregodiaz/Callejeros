import axios from "axios";

export const callejerosApi = axios.create({
  baseURL: process.env.BACKEND_API_URL || "http://localhost:5239",
})