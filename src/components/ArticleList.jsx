import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((articleArr) => {
        setArticles(articleArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} className="article_card"/>;
      })}
    </>
  );
};
