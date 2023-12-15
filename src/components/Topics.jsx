import { getTopics } from "../../utils/api";
import { BodyHeader } from "./BodyHeader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [apiError, setApiError] = useState(null);
  
  useEffect(() => {
    getTopics()
      .then((response) => {
        if (typeof response === "string") {
          setApiError(response);
        } else {
          setTopics(response);
        }
      })
      .catch((err) => {
        setApiError(String(err));
      });
  }, []);

  if (apiError) {
    return <p>{apiError}</p>
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
