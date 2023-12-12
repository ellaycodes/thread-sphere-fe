import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllArticles()
      .then((articleArr) => {
        setArticles(articleArr);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
        <h2>Loading...</h2>
    )
  }

  return (
    <>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} className="article_card"/>;
      })}
    </>
  );
};
