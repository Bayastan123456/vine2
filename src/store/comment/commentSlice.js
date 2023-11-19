import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "@comments",
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        likes: 0,
      });
    },
    addLike: (state, action) => {
      const comment = state.find((comment) => comment.id === action.payload);
      if (comment) {
        comment.likes += 1;
      }
    },
  },
});

export const { addComment, addLike } = commentsSlice.actions;
export default commentsSlice.reducer;
