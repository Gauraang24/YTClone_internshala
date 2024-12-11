import { createSlice } from "@reduxjs/toolkit";
import { POST_REQUEST } from "../httpHelper";
import { api } from "../api.js";
import { login, signup } from "../../utils/endpoints.js";

const initialState = {};

export const loginApi = api("user/login", POST_REQUEST, login);
export const signUpApi = api("user/signup", POST_REQUEST, signup);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload?.token;
    },
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
