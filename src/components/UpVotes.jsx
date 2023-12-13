import { useState } from "react";
import { patchArticleVotes } from "../../utils/api";

export const UpVotes = ({ article }) => {
  const [newArticle, setNewArticle] = useState(article);

  const handleUpvote = () => {
    const updatedArticle = { ...newArticle, votes: newArticle.votes + 1 };
    setNewArticle(updatedArticle);

    patchArticleVotes(article.article_id).catch((err) => {
      console.log(err);
      const updatedArticle = { ...newArticle, votes: newArticle.votes };
      setNewArticle(updatedArticle);
    });
  };

  return (
    <div className="vote">
      <p>{newArticle.votes}</p>
      <button onClick={handleUpvote}>⬆</button>
    </div>
  );
};
