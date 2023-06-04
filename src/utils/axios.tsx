import axios from "axios";
import { setAccessToken, logout } from "../redux/slices/authSlice";
import store from "../redux/store";

const AXIOS = axios.create({
  baseURL: "http://localhost:3000/api",
});

AXIOS.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.accessToken;
    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    console.log(error);

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== "/auth/refreshtoken" // API endpoint to refresh tokens
    ) {
      originalRequest._retry = true;
      return AXIOS.post("/auth/refreshtoken", {
        refreshToken: store.getState().auth.refreshToken,
      })
        .then((res) => {
          if (res.status === 200) {
            const { accessToken, refreshToken } = res.data;
            store.dispatch(setAccessToken(accessToken));
            AXIOS.defaults.headers.common["Authorization"] = `${accessToken}`;
            originalRequest.headers["Authorization"] = `${accessToken}`;
            return AXIOS(originalRequest);
          }
        })
        .catch((error) => {
          store.dispatch(logout());
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);

export default AXIOS;
