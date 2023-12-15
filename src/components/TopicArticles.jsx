import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { BodyHeader } from "./BodyHeader";
import { Filter } from "./filter";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const TopicArticles = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles(sort_by, order)
      .then((response) => {
        if (typeof response === "string") {
          setApiError(response);
          setIsLoading(false)
        } else {
          const filteredArticles = response.filter(
            (article) => article.topic === topic
          );
          setArticles(filteredArticles);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setApiError(String(err));
      });
  }, [topic, sort_by, order]);

  if (apiError) {
    return <Error/>;
  } else if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <BodyHeader title={topic.toUpperCase()} />
      <Filter setSortBy={setSortBy} order={order} setOrder={setOrder} />
      {articles.map((article) => {
        return (
          <ArticleCard
            article={article}
            key={`${article.article_id}${article.topic}`}
          />
        );
      })}
    </>
  );
};
