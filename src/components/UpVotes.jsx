import { useState } from "react";
import { patchArticleDownVotes, patchArticleVotes } from "../../utils/api";

export const UpVotes = ({ article }) => {
  const [incVote, setIncVotes] = useState(article.votes);
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);
  const [error, setError] = useState(false)

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
      setError(true)
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
      setError(true)
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
      setError(true)
    });
  };

  return (
    <div className="vote">
      <div className="voting_buttons">
      <p>{incVote}</p>
        {error ? <div>
          <button className="button_error" onClick={handleUpvote} disabled={upClicked}>
            <img className="icon" src="/src/assets/up.png" alt="UpVote" />
          </button>
          <button className="button_error" onClick={handleDownvote} disabled={downClicked}>
          <img className="icon" src="/src/assets/down.png" alt="DownVote" />
          </button>
        </div> : <div>
          <button onClick={handleUpvote} disabled={upClicked}>
          <img className="icon" src="/src/assets/up.png" alt="UpVote" />
          </button>
          <button onClick={handleDownvote} disabled={downClicked}>
          <img className="icon" src="/src/assets/down.png" alt="DownVote" />
          </button>
        </div>}
        {upClicked || downClicked ? (
          <button onClick={handleClear}><img className="icon" src="/src/assets/clear-alt.png" alt="Clear" /></button>
        ) : <button disabled={true}><img className="icon" src="/src/assets/clear-alt.png" alt="Clear" /></button>}
      </div>
    </div>
  );
};
