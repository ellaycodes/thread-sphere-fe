import { useEffect, useState } from "react";
import { BodyHeader } from "./BodyHeader";
import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";

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
      <p>{article.topic}</p>
      <p>{article.created_at}</p>
      <p>{article.votes}</p>
      <div className="article_body">
        <img src={article.article_img_url} alt="" />
        <div className="article_content">
          <p>{article.author}</p>
          <p>{article.body}</p>
          <p>Comments: {article.comment_count}</p>
        </div>
      </div>
    </>
  );
};
