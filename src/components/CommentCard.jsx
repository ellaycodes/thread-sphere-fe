import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export const CommentCard = ({ comment }) => {
  const { currUser } = useContext(UserContext);
  const [canDelete, setCanDelete] = useState(false)

  useEffect(()=>{
    if (comment.author === currUser) {
      setCanDelete(true)
    }
  }, [])

  console.log(canDelete, comment.author);

  return (
    <div className="comment_card">
      <div className="comment_stats">
        <p>{comment.author}</p>
        <p>Votes: {comment.votes}</p>
      </div>
      <p className="comment_body">{comment.body}</p>
      {canDelete ? <button>Delete</button> : null}
    </div>
  );
};
