import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { productReducer } from "./products/productSlice";
import { cartReducers } from "./cart/cartSlice";
import commentReducer from "./comment/commentSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
// const persistedReducer = persistReducer(persistConfig, commentsReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducers,
    comments: commentReducer,
  },
});
