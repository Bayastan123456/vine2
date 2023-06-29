import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
export const { setProduct } = productSlice.actions;
