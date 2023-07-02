import { createSlice } from "@reduxjs/toolkit";
import { getCountProductsInCart } from "../../components/function";
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

export const cartSlice = createSlice({
  name: "@cart",
  initialState,
  reducers: {
    getCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { getCart } = cartSlice.actions;

export const cartReducers = cartSlice.reducer;
