import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { getCommentsByArticleId } from "../../utils/api";
import { useParams } from "react-router-dom";

export const CommentSection = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addComment, setAddComment] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((commentsArr) => {
        setComments(commentsArr);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddComment = () => {
    setAddComment(true);
    setHideButton(true);
  };

  const handleDiscardComment = () => {
    setAddComment(false);
    setHideButton(false);
  };

  const handlePostComment = (event) => {
    event.preventDefault()
    console.log(event.target.value);// TODO
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="comment_header">
        <p>Comments: {article.comment_count}</p>
        {hideButton ? (
          <button onClick={handleDiscardComment}>Discard Comment</button>
        ) : (
          <button onClick={handleAddComment}>Add Comment</button>
        )}
      </div>
      {addComment ? (
        <form className="add_comment" onSubmit={handlePostComment}>
          <textarea placeholder="Add comment"></textarea>
          <button className="post_comment">Post</button>
        </form>
      ) : null}
      {comments.map((comment) => {
        return (
          <CommentCard
            comment={comment}
            key={comment.comment_id}
            className="comment_card"
          />
        );
      })}
    </>
  );
};
