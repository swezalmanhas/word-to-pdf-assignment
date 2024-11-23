import axios from "axios";

const instance = axios.create({
  baseURL: "https://word-pdf-1.onrender.com",
});

export default instance;
