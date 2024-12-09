/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import querystring from "querystring";

export const api = (action_type_name, method, api_url) =>
  createAsyncThunk(action_type_name, async (data, thunkAPI) => {
    let final_api_url = data?.param ? api_url + data?.param : api_url;

    if (data?.query) {
      final_api_url += `?${querystring.stringify(data?.query)}`;
    }

    try {
      return await method(final_api_url, data?.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });
