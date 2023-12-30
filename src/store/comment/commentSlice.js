import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {},
  reducers: {
    addComment(state, action) {
      const { productId, comment } = action.payload;
      if (!state[productId]) {
        state[productId] = [];
      }
      state[productId].push(comment);
    },
    likeComment(state, action) {
      const { productId, commentId } = action.payload;
      const comments = state[productId];
      if (comments) {
        const updatedComments = comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              likes: comment.likes + 1,
            };
          }
          return comment;
        });
        state[productId] = updatedComments;
      }
    },
  },
});

export const { addComment, likeComment } = commentSlice.actions;
export default commentSlice.reducer;
