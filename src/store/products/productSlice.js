import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  oneProduct: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (buildings) => {
    buildings.addCase(polychit.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;
export const { setProduct } = productSlice.actions;
