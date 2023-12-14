import { useNavigate } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleNavigateToArticle = () => {
    navigate(`/article/${article.article_id}`);
  };

  const handleNavigateToTopic = (e) => {
    e.stopPropagation();
    navigate(`/topics/${article.topic}`);
  };

  const unformattedDate = new Date(article.created_at)
  const dateFormatter = new Intl.DateTimeFormat('en-GB')
  const date = dateFormatter.format(unformattedDate)
  
  return (
    <div className="article_card" onClick={handleNavigateToArticle}>
      <img
        src={article.article_img_url}
        alt="article image"
        className="article_img"
      />
      <section className="article_info">
        <div className="article_stats">
          <p>{date}</p>
          <p>{article.author}</p>
          <p onClick={handleNavigateToTopic}>{article.topic}</p>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
        </div>
        <h3>{article.title}</h3>
      </section>
    </div>
  );
};
