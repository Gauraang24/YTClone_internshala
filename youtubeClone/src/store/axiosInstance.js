import axios from "axios";
export const axiosInstatnce = axios.create({
  baseURL: import.meta.env.VITE_APP_API_ENDPOINT,
});

export const setAuthToken = (token) => {
  if (token) {
    axiosInstatnce.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete axiosInstatnce.defaults.headers.common["Authorization"];
  }
};
