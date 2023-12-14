import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { BodyHeader } from "./BodyHeader";

export const TopicArticles = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles().then((articleArr) => {
      const filteredArticles = articleArr.filter(
        (article) => article.topic === topic
      );
      setArticles(filteredArticles);
    });
  }, []);

  return (
    <>
      <BodyHeader title={topic.toUpperCase()} />
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </>
  );
};
