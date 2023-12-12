import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { getCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";

export const CommentSection = ({ article }) => {
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((commentsArr) => {
        setComments(commentsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="comment_header">
        <p>Comments: {article.comment_count}</p>
        <button>Add Comment</button>
      </div>
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