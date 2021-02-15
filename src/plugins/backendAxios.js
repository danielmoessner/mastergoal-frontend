import axios from "axios";
import store from "../store";

// default options
const defaultOptions = {
  baseURL: import.meta.env.VITE_API_URL,
  method: "get",
  headers: {
    "Content-Type": "application/json",
  },
};

// create instance
let instance = axios.create(defaultOptions);

// set the auth token for any request
instance.interceptors.request.use(function (config) {
  const token = store.state.auth.token;
  config.headers.Authorization = "Token " + token;
  return config;
});

// export axios instance
export default instance;
