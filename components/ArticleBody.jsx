import { useEffect, useState } from "react";
import { BodyHeader } from "./bodyheader";
import { getArticleById } from "../utils/api";

export const ArticleBody = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleById();
  }, []);

  return (
    <>
      <BodyHeader />
      <p>hi</p>
    </>
  );
};
