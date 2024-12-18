import { axiosInstance } from "./axiosInstance";

export const GET_REQUEST = async (url, data) => {
  try {
    const response = await axiosInstance.get(url, data);
    return response?.data;
  } catch (error) {
    console.log("Error in GET REQUEST ", error);
  }
};

export const POST_REQUEST = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response?.data;
  } catch (error) {
    console.log("Error in POST REQUEST", error);
  }
};

export const PUT_REQUEST = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response?.data;
  } catch (error) {
    console.log("Error in PUT REQUEST", error);
  }
};

export const DELETE_REQUEST = async (url, data) => {
  try {
    const response = await axiosInstance.delete(url, data);
    return response?.data;
  } catch (error) {
    console.log("Error in DELETE REQUEST", error);
  }
};
