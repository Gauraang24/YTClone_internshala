import { createSlice } from "@reduxjs/toolkit";
import { GET_REQUEST } from "../httpHelper";
import { api } from "../api.js";
import { getAllVideos, getVideoById } from "../../utils/endpoints.js";

const initialState = {
  searchValue: "",
  filter: "",
  videoList: [],
};

//API FUNCTIONS
export const getAllVideosFunc = api("api/getVideos", GET_REQUEST, getAllVideos);
export const getVideosById = api("api/videosById", GET_REQUEST, getVideoById);

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload.searchValue;
    },
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    setVideoList: (state, action) => {
      state.videoList = action.payload.videoList;
    },
    resetVideoState: (state, action) => {
      return (state = {
        searchValue: "",
        filter: "",
        videoList: [],
      });
    },
  },
});

export const { setSearch, setFilter, setVideoList, resetVideoState } =
  videoSlice.actions;
export default videoSlice.reducer;
