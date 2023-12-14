import { getTopics } from "../../utils/api";
import { BodyHeader } from "./BodyHeader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topicsArr) => {
      setTopics(topicsArr);
    });
  }, []);

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
