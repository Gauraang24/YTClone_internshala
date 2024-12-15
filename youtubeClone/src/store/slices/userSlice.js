import { createSlice } from "@reduxjs/toolkit";
import { GET_REQUEST, POST_REQUEST } from "../httpHelper";
import { api } from "../api.js";
import {
  login,
  signup,
  createChannel,
  getChannelInfo,
} from "../../utils/endpoints.js";

const initialState = {};

export const loginApi = api("user/login", POST_REQUEST, login);
export const signUpApi = api("user/signup", POST_REQUEST, signup);

export const createChannelFunc = api(
  "user/createChannel",
  POST_REQUEST,
  createChannel
);

export const getChannelApi = api(
  "user/getChannelByIdApi",
  GET_REQUEST,
  getChannelInfo
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload?.token;
    },
    setUserId: (state, action) => {
      state.userId = action.payload?.userId;
    },
    setChannelId: (state, action) => {
      state.channelId = action.payload?.channelId;
    },
  },
});

export const { setToken, setUserId, setChannelId } = userSlice.actions;
export default userSlice.reducer;
