import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_COMMENTS } from "../../const";

export const getComments = createAsyncThunk(
  "@comments/getComments",
  async () => {
    let { data } = await axios(API_COMMENTS);
    return data;
  }
);

export const addComments = createAsyncThunk(
  "@comments/addComments",
  async (obj, { dispatch }) => {
    await axios.post(API_COMMENTS, obj);

    dispatch(getComments());
    return obj;
  }
);
