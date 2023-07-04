import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { productId, comment } = action.payload;
      if (!state[productId]) {
        state[productId] = [];
      }
      state[productId].push(comment);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
