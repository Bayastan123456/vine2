import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_COMENTS } from "../../const";

export const getComments = createAsyncThunk(
  "@comments/getComments",
  async () => {
    let { data } = await axios(API_COMENTS);
    return data;
  }
);

export const addComments = createAsyncThunk(
  "@comments/addComments",
  async (obj, { dispatch }) => {
    await axios.post(API_COMENTS, obj);

    dispatch(getComments());
    return obj;
  }
);
