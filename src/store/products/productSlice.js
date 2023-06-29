// import { createSlice } from "@reduxjs/toolkit";
// import { addProduct, getProducts } from "./productAction";

// const initialState = {
//   products: [],
//   oneProduct: {},
// };

// export const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (buildings) => {
//     buildings
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.products = action.payload;
//       })
//       .addCase(addProduct.fulfilled, (state, action) => {
//         state.products.push(action.payload);
//       });
//   },
// });

// export const productReducer = productSlice.reducer;
