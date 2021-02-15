import axios from "axios";
import store from "../store/store";

export default function setup() {
  const defaultOptions = {
    baseURL: store.getters.baseURL,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios.defaults.baseURL = defaultOptions.baseURL;
  axios.defaults.method = "get";

  axios.interceptors.request.use(
    function (config) {
      const token = store.getters.token;
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
}
