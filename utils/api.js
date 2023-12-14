import axios from "axios";

const instance = axios.create({
  baseURL: "https://thread-sphere.onrender.com/api/",
});

export const getAllArticles = (sort_by, order) => {
  return instance
  .get("/articles", {
    params: { sort_by: sort_by, order: order },
  })
  .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleById = (id) => {
  return instance.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (id) => {
  return instance.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleVotes = (id, voteChange) => {
  const patchBody = {
    inc_votes: voteChange,
  };
  return instance.patch(`/articles/${id}`, patchBody).then(({ data }) => {
    return data.article;
  });
};

export const patchArticleDownVotes = (id, voteChange) => {
  const patchBody = {
    inc_votes: -voteChange,
  };
  return instance.patch(`/articles/${id}`, patchBody).then(({ data }) => {
    return data.article;
  });
};

export const postCommentToArticle = (id, postBody) => {
  return instance
    .post(`/articles/${id}/comments`, postBody)
    .then(({ data }) => {
      return data.comments;
    });
};

export const getUsers = () => {
  return instance.get(`/users`).then(({ data }) => {
    return data.users;
  });
};

export const deleteComment = (id) => {
  return instance.delete(`/comments/${id}`);
};

export const getTopics = () => {
  return instance.get(`/topics`).then(({ data }) => {
    return data.topic;
  });
};
