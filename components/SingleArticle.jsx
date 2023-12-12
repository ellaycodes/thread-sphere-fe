import { useEffect, useState } from "react";
import { BodyHeader } from "./BodyHeader";
import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import { CommentSection } from "./CommentSection";
import { UpVotes } from "./UpVotes";

export const SingleArticle = () => {
  const [article, setArticle] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <>
      <BodyHeader title={article.title} />
      <div className="article_stats">
        <p>{article.topic}</p>
        <p>{article.created_at}</p>
        <p>{article.votes}</p>
        <UpVotes />
      </div>
      <div className="article_body">
        <img src={article.article_img_url} alt="" className="hero_img"/>
        <div className="article_content">
          <p>{article.author}</p>
          <p>{article.body}</p>
        </div>
      </div>
      <CommentSection article={article} />
    </>
  );
};
