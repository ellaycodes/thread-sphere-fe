import { useContext, useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { getCommentsByArticleId, postCommentToArticle } from "../../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const CommentSection = ({ article }) => {
  const { currUser } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addComment, setAddComment] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bodyError, setBodyError] = useState(false);

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
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const postBody = {
      username: currUser,
      body: event.target[0].value,
    };

    if (postBody.body.length < 1) {
      setBodyError(true);
    }

    if (bodyError === false) {
      postCommentToArticle(article_id, postBody)
        .then((res) => {
          setAddComment(false);
          setHideButton(false);
          setComments((currComments) => {
            return [res[0], ...currComments];
          });
        })
        .catch((err) => {
          console.log(err);
          setComments((currComments) => {
            return [...currComments];
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
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
          <textarea placeholder="Add comment" required></textarea>
          {bodyError ? (
            <button className="post_comment" disabled={true}>
              Post
            </button>
          ) : (
            <button className="post_comment" disabled={isSubmitting}>
              Post
            </button>
          )}
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
