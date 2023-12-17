import { useNavigate } from "react-router-dom";
import upImg from "../assets/up.png";
import commentDots from '../assets/comment-dots.png'

export const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleNavigateToArticle = () => {
    navigate(`/article/${article.article_id}`);
  };

  const handleNavigateToTopic = (e) => {
    e.stopPropagation();
    navigate(`/topics/${article.topic}`);
  };

  const unformattedDate = new Date(article.created_at);
  const dateFormatter = new Intl.DateTimeFormat("en-GB");
  const date = dateFormatter.format(unformattedDate);

  return (
    <div className="article_card" onClick={handleNavigateToArticle}>
      <img
        src={article.article_img_url}
        alt="article image"
        className="article_img"
      />
      <div className="article_stats">
        <p>{date}</p>
        <p>{article.author}</p>
        <p onClick={handleNavigateToTopic}>t/{article.topic}</p>
        <p>
          <img className="icon" src={upImg} alt="" /> {article.votes}
        </p>
        <p>
          <img className="icon" src={commentDots} alt="" />{" "}
          {article.comment_count}
        </p>
      </div>
      <h3 className="article_title">{article.title}</h3>
    </div>
  );
};
