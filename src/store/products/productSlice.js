import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getOneProduct, getProducts } from "./productAction";

const initialState = {
  products: [],
  oneProduct: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;