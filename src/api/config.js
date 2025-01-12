import axios from "axios";

const api = axios.create({
  baseURL: "https://important-links-backend.vercel.app/",
});
export default api;
