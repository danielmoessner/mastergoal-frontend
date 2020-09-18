import store from "../store.js";
import axios from "axios";

const backendAxios = () => {
  const defaultOptions = {
    baseURL: store.state.baseURL,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function(config) {
    const token = store.state.token;
    config.headers.Authorization = "Token " + token;
    return config;
  });

  return instance;
};

export default backendAxios();
