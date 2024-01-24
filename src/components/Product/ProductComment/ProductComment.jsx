import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeComment } from "../../../store/comment/commentSlice";
import "./ProductComment.css";

const ProductComments = ({ productId }) => {
  const comments = useSelector((state) => state.comments[productId] || []);
  const dispatch = useDispatch();

  console.log(comments);
  return (
    <div className="productComment__Box">
      <h3 className="productCommentsTitel">Comments for Product {productId}</h3>
      {comments.length === 0 ? (
        <p className="productCommentP">No comments yet.</p>
      ) : (
        <ul className="commentList">
          {comments.map((comment, index) => (
            <li key={index} className="commentItem">
              {comment.text}
              <div className="comment__p">
                <p>Likes: {comment.likes}</p>
                <div
                  className="productComment__btn"
                  onClick={() =>
                    dispatch(likeComment({ productId, commentId: comment.id }))
                  }
                >
                  ❤️
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductComments;

// import React from "react";
// import { useSelector } from "react-redux";
// import './ProductComment.css'

// const ProductComments = ({ productId }) => {
//   const comments = useSelector((state) => state.comments[productId] || []);

//   return (
//     <div>
//       <h3 className="productCommentsTitel">Comments for Product {productId}</h3>
//       {comments.length === 0 ? (
//         <p className="productCommentP">No comments yet.</p>
//       ) : (
//         <ul className="commentList">
//           {comments.map((comment, index) => (
//             <li key={index} className="commentItem">{comment}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductComments;
