import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Filter } from "./filter";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sort_by, order)
      .then((articleArr) => {
        setArticles(articleArr);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sort_by, order]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Filter setSortBy={setSortBy} order={order} setOrder={setOrder}/>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </>
  );
};
