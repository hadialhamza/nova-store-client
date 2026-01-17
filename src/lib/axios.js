import axios from "axios";

const baseURL = "https://nova-store-server.vercel.app";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { baseURL };
export default api;
