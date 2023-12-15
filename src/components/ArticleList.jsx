import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Filter } from "./filter";
import { Loading } from "./Loading";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sort_by, order)
      .then((response) => {
        if (typeof response === "string") {
          setApiError(response);
        } else {
          setArticles(response);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setApiError(String(error));
        setIsLoading(false)
      });
  }, [sort_by, order]);

  if (isLoading) {
    return <Loading />;
  } else if (apiError) {
    return <Error message={apiError} />;
  }

  return (
    <>
      <Filter setSortBy={setSortBy} order={order} setOrder={setOrder} />
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </>
  );
};
