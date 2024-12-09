import { createSlice } from "@reduxjs/toolkit";
import { GET_REQUEST, POST_REQUEST } from "../httpHelper";
import { api } from "../api.js";
import { login, signup } from "../../utils/endpoints.js";

const initialState = {};

export const loginApi = api("user/login", POST_REQUEST, login);
export const signUpApi = api("user/signUp", POST_REQUEST, signup);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
