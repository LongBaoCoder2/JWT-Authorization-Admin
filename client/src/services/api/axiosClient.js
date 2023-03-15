import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5050",
  timeout: "2m",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
