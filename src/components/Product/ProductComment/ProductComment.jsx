import React from "react";
import { useSelector } from "react-redux";
import './ProductComment.css'

const ProductComments = ({ productId }) => {
  const comments = useSelector((state) => state.comments[productId] || []);

  return (
    <div>
      <h3 className="productCommentsTitel">Comments for Product {productId}</h3>
      {comments.length === 0 ? (
        <p className="productCommentP">No comments yet.</p>
      ) : (
        <ul className="commentList">
          {comments.map((comment, index) => (
            <li key={index} className="commentItem">{comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductComments;
