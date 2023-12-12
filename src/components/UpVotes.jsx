import { useState } from "react";
import { patchArticleVotes } from "../../utils/api";

export const UpVotes = ({ article }) => {
  let id = 0;
  const [newArticle, setNewArticle] = useState(article);

  if (article) {
    id = article.article_id;
  }

  const handleUpvote = () => {
    patchArticleVotes(id).catch((err) => {
      console.log(err);
    });
    setNewArticle((currArticle) => {
      return { ...currArticle, votes: article.votes + 1 };
    });
    return newArticle;
  };

  return (
    <div className="vote_buttons">
      <button onClick={handleUpvote}>⬆</button>
    </div>
  );
};
