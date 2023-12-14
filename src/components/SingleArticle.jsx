import { useEffect, useState } from "react";
import { BodyHeader } from "./BodyHeader";
import { getArticleById } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
import { UpVotes } from "./UpVotes";
import { CommentSection } from "./CommentSection";

export const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isloading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BodyHeader title={article.title} />
      <div className="article_stats">
        <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
        <p>{article.created_at}</p>
        <UpVotes article={article} />
      </div>
      <div className="article_body">
        <img src={article.article_img_url} alt="" className="hero_img" />
        <div className="article_content">
          <p>{article.author}</p>
          <p>{article.body}</p>
        </div>
      </div>
      <CommentSection article={article} />
    </>
  );
};
