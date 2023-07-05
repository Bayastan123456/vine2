import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../../store/comment/commentSlice";
import "./AddCommentForm.css";

const AddCommentForm = ({ productId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment({ productId, comment }));
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="formBlock">
      <h3 className="formTitel">Add Comment for Product {productId}</h3>
      <div className="form__box-forInput">
        <input
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Enter your comment"
          className="formInput"
        />
        <button type="submit" className="formButton">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
