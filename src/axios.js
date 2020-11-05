import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default instance;
