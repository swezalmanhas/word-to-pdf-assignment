import axios from "axios";

const instance = axios.create({
  baseURL: "https://word-to-pdf-assignment.onrender.com",
});

export default instance;
