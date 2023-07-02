import { createAction } from "@reduxjs/toolkit";

export const createCart = createAction("@cart/createCart", async () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    localStorage.setItem(
      "cart",
      JSON.stringify({ products: [], totalPrice: 0 })
    );
    cart = { products: [], totalPrice: 0 };
  }
  return cart;
});
