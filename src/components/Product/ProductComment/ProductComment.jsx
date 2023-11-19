import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment, addLike } from "../../../store/comment/commentSlice";
import "./ProductComment.css";

const ProductComments = ({ productId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [newCommentText, setNewCommentText] = useState("");

  const handleAddComment = () => {
    const newComment = { id: comments.length + 1, text: newCommentText };
    dispatch(addComment(newComment));
    setNewCommentText("");
  };

  const handleAddLike = (commentId) => {
    dispatch(addLike(commentId));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your comment"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>Likes: {comment.likes}</p>
          <button onClick={() => handleAddLike(comment.id)}>Like</button>
        </div>
      ))}
    </div>
  );
};

export default ProductComments;
