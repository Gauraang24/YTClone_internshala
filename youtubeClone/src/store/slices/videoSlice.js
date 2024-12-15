import { createSlice } from "@reduxjs/toolkit";
import { GET_REQUEST } from "../httpHelper";
import { api } from "../api.js";
import { getAllVideos } from "../../utils/endpoints.js";

const initialState = {};

//API FUNCTIONS
export const getAllVideosFunc = api("api/getVideos", GET_REQUEST, getAllVideos);

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
});

export const {} = videoSlice.actions;
export default videoSlice.reducer;
