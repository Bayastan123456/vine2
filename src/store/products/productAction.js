import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "@products/getProducts",
  async (_, { dispatch }) => {}
);
