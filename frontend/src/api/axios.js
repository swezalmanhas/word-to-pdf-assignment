import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-backend-eh5x.onrender.com", // Replace with your server's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
