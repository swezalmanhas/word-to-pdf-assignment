import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-backend-eh5x.onrender.com",
});

export default instance;
