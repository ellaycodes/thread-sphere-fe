import axios from "axios";

const instance = axios.create({
  baseURL: "https://thread-sphere.onrender.com/api/",
});

export const getAllArticles = (author, topic, sort_by, order) => {
  return instance
    .get("/articles", {
      params: { author: author, topic: topic, sort_by: sort_by, order: order },
    })
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleById = (id) => {
  return instance.get(`/articles/${id}`).then((data) => {
    console.log(data);
    return data;
  });
};
