import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./AddCommentForm.css";
import { addComments } from "../../../store/comment/commentsActions";

const AddCommentForm = ({ productId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    let obj = {
      comment,
      id: Date.now(),
    };

    dispatch(addComments(obj));
  };

  return (
    <div className="formBlock">
      <h3 className="formTitel">Add Comment for Product {productId}</h3>
      <div className="form__box-forInput">
        <input
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Enter your comment"
          className="formInput"
        />
        <button onClick={handleSubmit} className="formButton">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddCommentForm;
