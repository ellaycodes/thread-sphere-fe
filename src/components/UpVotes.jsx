import { useState } from "react";
import { patchArticleDownVotes, patchArticleVotes } from "../../utils/api";

export const UpVotes = ({ article }) => {
  const [incVote, setIncVotes] = useState(article.votes);
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);

  const handleUpvote = () => {
    const voteChange = downClicked ? 2 : 1;
    setIncVotes((currVote) => {
      return currVote + voteChange;
    });
    setUpClicked(true);
    setDownClicked(false);

    patchArticleVotes(article.article_id, voteChange).catch((err) => {
      console.log(err);
      setIncVotes((currVote) => currVote - 1);
      setUpClicked(false);
    });
  };

  const handleDownvote = () => {
    const voteChange = upClicked ? 2 : 1;
    setIncVotes((currVote) => {
      return currVote - voteChange;
    });
    setDownClicked(true);
    setUpClicked(false);

    patchArticleDownVotes(article.article_id, voteChange).catch((err) => {
      console.log(err);
      setIncVotes((currVote) => currVote + 1);
      setDownClicked(false);
    });
  };

  const handleClear = () => {
    const voteChange = upClicked ? -1 : 1;
    setIncVotes((currVote) => {
      return currVote + voteChange;
    });
    setDownClicked(false);
    setUpClicked(false);

    patchArticleVotes(article.article_id, voteChange).catch((err) => {
      console.log(err);
      setIncVotes((currVote) => currVote);
      setUpClicked(false);
    });
  };

  return (
    <div className="vote">
      <p>{incVote}</p>
      <div className="voting buttons">
        <button onClick={handleUpvote} disabled={upClicked}>
          ⬆
        </button>
        <button onClick={handleDownvote} disabled={downClicked}>
          ⬇
        </button>
        {upClicked || downClicked ? (
          <button onClick={handleClear}>Clear</button>
        ) : <button disabled={true}>Clear</button>}
      </div>
    </div>
  );
};
