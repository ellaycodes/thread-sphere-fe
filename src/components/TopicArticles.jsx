import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { BodyHeader } from "./BodyHeader";
import { Filter } from "./filter";

export const TopicArticles = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [sort_by, setSortBy] = useState('created_at')
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getAllArticles(sort_by, order).then((articleArr) => {
      const filteredArticles = articleArr.filter(
        (article) => article.topic === topic
      );
      setArticles(filteredArticles);
    });
  }, [topic, sort_by, order]);

  return (
    <>
      <BodyHeader title={topic.toUpperCase()} />
      <Filter setSortBy={setSortBy} order={order} setOrder={setOrder}/>
      {articles.map((article) => {
        return (
            <ArticleCard
              article={article}
              key={`${article.article_id}${article.topic}`}/>
        );
      })}
    </>
  );
};
