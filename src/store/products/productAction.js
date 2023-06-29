import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../const";

export const getProducts = createAsyncThunk(
  "@products/getProducts",
  async () => {
    let { data } = await axios(API);
    return data;
  }
);
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (obj, { dispatch }) => {
    await axios.post(API, obj);
    dispatch(getProducts());
    return obj;
  }
);
