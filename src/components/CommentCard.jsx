import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../../utils/api.js";

export const CommentCard = ({ comment }) => {
  const { currUser } = useContext(UserContext);
  const [canDelete, setCanDelete] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false)
 
  useEffect(() => {
    if (comment.author === currUser) {
      setCanDelete(true);
    }
  }, [comment.author, currUser]);

  const handleDeleteComment = () => {
    deleteComment(comment.comment_id).then(()=>{
      setIsDeleted(true)
    });
  };

  if (isDeleted) return null

  return (
    <div className="comment_card">
      <div className="comment_stats">
        <p>{comment.author}</p>
        <p>Votes: {comment.votes}</p>
        {canDelete ? (
          <button onClick={handleDeleteComment}>Delete</button>
        ) : null}
      </div>
      <p className="comment_body">{comment.body}</p>
    </div>
  );
};
