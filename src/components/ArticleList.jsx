import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    switch (sortOption) {
      case "Date":
        setSortBy("created_at");
        break;
      case "Comment Count":
        setSortBy("comment_count");
        break;
      case "Votes":
        setSortBy("votes");
        break;
      default:
        setSortBy("date");
    }
  };

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

  const toggleOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <select name="filter" id="filter" onChange={handleSortChange}>
        {/* <option value="Sort By">Sort By</option> */}
        <option value="Date">Date</option>
        <option value="Comment Count">Comment Count</option>
        <option value="Votes">Votes</option>
      </select>
      <button onClick={toggleOrder}>
        {order === "asc" ? '⬆' : "⬇"}
      </button>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </>
  );
};
