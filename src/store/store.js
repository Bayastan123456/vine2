import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { productReducer } from "./products/productSlice";
<<<<<<< HEAD
import { cartReducers } from "./cart/cartSlice";
=======
import commentReducer from './comment/commentSlice'
>>>>>>> dc33b8155a21c88b04022330cd04f0d5f0a7248a

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
<<<<<<< HEAD
    cart: cartReducers,
=======
    comments: commentReducer,
>>>>>>> dc33b8155a21c88b04022330cd04f0d5f0a7248a
  },
});
