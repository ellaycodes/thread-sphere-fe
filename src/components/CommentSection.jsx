import { useContext, useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { getCommentsByArticleId, postCommentToArticle } from "../../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Loading } from "./Loading";

export const CommentSection = ({ article }) => {
  const { currUser } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addCommentButton, setAddCommentButton] = useState(false);
  const [discardButton, setDiscardButton] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [apiError, setApiError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((response) => {
        if (typeof response === "string") {
          setApiError(response);
        } else {
          setComments(response);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setApiError(String(err));
      });
  }, []);

  const handleAddCommentButton = () => {
    setAddCommentButton(true);
    setDiscardButton(true);
  };

  const handleDiscardComment = () => {
    setAddCommentButton(false);
    setDiscardButton(false);
  };

  const handlePostComment = (event) => {
    event.preventDefault();
    const postBody = {
      username: currUser,
      body: event.target[0].value,
    };

    if (postBody.body.length < 1) {
      setBodyError(true);
    }

    if (bodyError === false) {
      postCommentToArticle(article_id, postBody)
        .then((response) => {
          if (typeof response === "string") {
            setBodyError(true);
          } else {
            setAddCommentButton(false);
            setDiscardButton(false);
            setComments((currComments) => {
              return [response[0], ...currComments];
            });
          }
        })
        .catch((err) => {
          setComments((currComments) => {
            return [...currComments];
          });
        })
        .finally(() => {
        });
    }
  };

  const handleInputChange = () => {
    setBodyError(false)
  }

  if (isLoading) {
    return <Loading/>;
  } else if (apiError) {
    return <p>{apiError}</p>;
  }

  return (
    <>
      <div className="comment_header">
        <p>Comments: {article.comment_count}</p>
        {discardButton ? (
          <button onClick={handleDiscardComment}>Discard Comment</button>
        ) : (
          <button onClick={handleAddCommentButton}>Add Comment</button>
        )}
      </div>
      {addCommentButton ? (
        <form className="add_comment" onSubmit={handlePostComment}>
          {bodyError ? (
            <input
              onChange={handleInputChange}
              className="error"
              placeholder="You must enter a comment before you can post"
            ></input>
          ) : (
            <input placeholder="Add comment"></input>
          )}
          {bodyError ? (
            <button className="post_comment" disabled={true}>
              Post
            </button>
          ) : (
            <button className="post_comment" disabled={false}>
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
