import { getTopics } from "../../utils/api";
import { BodyHeader } from "./BodyHeader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics()
      .then((response) => {
        if (typeof response === "string") {
          setApiError(response);
          setIsLoading(false);
        } else {
          setTopics(response);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setApiError(String(err));
      });
  }, []);

  if (apiError) {
    return <Error />;
  } else if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="topics_body">
      <BodyHeader title={"Topics"} />
      {topics.map((singleTopic) => {
        return (
          <Link key={singleTopic.slug} to={`/topics/${singleTopic.slug}`}>
            <div className="topic_card">
              <h3>t/{singleTopic.slug}</h3>
              <p>{singleTopic.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
