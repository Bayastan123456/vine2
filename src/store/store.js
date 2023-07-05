import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { productReducer } from "./products/productSlice";
import { cartReducers } from "./cart/cartSlice";
import commentReducer from './comment/commentSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducers,
    comments: commentReducer,
  },
});
