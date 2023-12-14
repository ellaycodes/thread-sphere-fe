import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <Link to={`/article/${article.article_id}`} className="article_card">
      <img
        src={article.article_img_url}
        alt="article image"
        className="article_img"
      />
      <section className="article_info">
        <div className="article_stats">
          <p>{article.author}</p>
          <p>{article.topic}</p>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
        </div>
        <h3>{article.title}</h3>
      </section>
    </Link>
  );
};
