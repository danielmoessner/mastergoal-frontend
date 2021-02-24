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
  config.headers.Authorization = store.getters["users/headersToken"];
  return config;
});

// export axios instance
export default instance;
