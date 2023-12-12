export const CommentCard = ({ comment }) => {
  return (
    <div className="comment_card">
      <div className="comment_stats">
        <p>{comment.author}</p>
        <p>{comment.votes}</p>
      </div>
      <p className="comment_body">{comment.body}</p>
    </div>
  );
};
