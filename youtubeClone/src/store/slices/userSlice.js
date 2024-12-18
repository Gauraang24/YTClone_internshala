import { createSlice } from "@reduxjs/toolkit";
import {
  DELETE_REQUEST,
  GET_REQUEST,
  POST_REQUEST,
  PUT_REQUEST,
} from "../httpHelper";
import { api } from "../api.js";
import {
  LOGIN,
  SIGN_UP,
  CREATE_CHANNEL,
  GET_CHANNEL_INFO,
  ADD_COMMENT,
} from "../../utils/endpoints.js";

const initialState = {
  token: "",
  userId: "",
  channelId: "",
};

//Login-signup apis
export const loginApi = api("user/login", POST_REQUEST, LOGIN);
export const signUpApi = api("user/signup", POST_REQUEST, SIGN_UP);

//Channel Apis
export const createChannelFunc = api(
  "user/createChannel",
  POST_REQUEST,
  CREATE_CHANNEL
);
export const getChannelApi = api(
  "user/getChannelByIdApi",
  GET_REQUEST,
  GET_CHANNEL_INFO
);

//Comment Apis
export const addCommentApi = api("user/addComments", POST_REQUEST, ADD_COMMENT);

export const editCommentApi = api("user/editComment", PUT_REQUEST, ADD_COMMENT);

export const deleteCommentApi = api(
  "user/deleteComment",
  DELETE_REQUEST,
  ADD_COMMENT
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    setUserId: (state, action) => {
      state.userId = action.payload.userId;
    },
    setChannelId: (state, action) => {
      state.channelId = action.payload.channelId;
    },
  },
});

export const { setToken, setUserId, setChannelId } = userSlice.actions;
export default userSlice.reducer;
