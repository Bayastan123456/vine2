const CommentItem = ({ comment, onLike }) => {
  return (
    <li className="commentItem">
      <span>{comment.text}</span>
      <button onClick={() => onLike(comment.id)} className="likeButton">
        {comment.likes} Likes
      </button>
    </li>
  );
};

export default CommentItem;
