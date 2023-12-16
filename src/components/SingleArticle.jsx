import { useEffect, useState } from "react";
import { BodyHeader } from "./BodyHeader";
import { getArticleById } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
import { UpVotes } from "./UpVotes";
import { CommentSection } from "./CommentSection";
import { Loading } from "./Loading";

export const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        if (typeof response === 'string') {
          setApiError(response)
        } else {
        setArticle(response);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setApiError(String(error));
      });
  }, []);

  if (isloading) {
    return <Loading/>;
  } else if (apiError) {
    return <p>{apiError}</p>
  }

  const unformattedDate = new Date(article.created_at)
  const dateFormatter = new Intl.DateTimeFormat('en-GB')
  const date = dateFormatter.format(unformattedDate)

  return (
    <>
      <BodyHeader title={article.title} />
      <div className="single_article_stats">
        <Link to={`/topics/${article.topic}`}>t/{article.topic}</Link>
        <p>{date}</p>
        <UpVotes article={article} />
      </div>
      <div className="article_body">
        <img src={article.article_img_url} alt="" className="hero_img" />
        <div className="article_content">
          <p className="author">u/{article.author}</p>
          <p>{article.body}</p>
        </div>
      </div>
      <CommentSection article={article} />
    </>
  );
};
