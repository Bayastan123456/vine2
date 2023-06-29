import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../const";

export const getProducts = createAsyncThunk(
  "@products/getProducts",
  async () => {
    let { data } = await axios(API);
    console.log(data);
  }
);
