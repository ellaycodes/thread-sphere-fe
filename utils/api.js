import axios from "axios";
import { useState } from "react";

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
    .catch((error) => {
      const errorMsg = `Error: ${error.response.status} ${error.response.data.msg}`;
      return errorMsg;
    });
};

export const getArticleById = (id) => {
  return instance
    .get(`/articles/${id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((error) => {
      const errorMsg = `Error: ${error.response.status} ${error.response.data.msg}`;
      return errorMsg;
    });
};

export const getCommentsByArticleId = (id) => {
  return instance
    .get(`/articles/${id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((error) => {
      const errorMsg = `Error: ${error.response.status} ${error.response.data.msg}`;
      return errorMsg;
    });
};

export const patchArticleVotes = (id, voteChange) => {
  const patchBody = {
    inc_votes: voteChange,
  };
  return instance
    .patch(`/articles/${id}`, patchBody)
    .then(({ data }) => {
      return data.article;
    })
};

export const patchArticleDownVotes = (id, voteChange) => {
  const patchBody = {
    inc_votes: -voteChange,
  };
  return instance
    .patch(`/articles/${id}`, patchBody)
    .then(({ data }) => {
      return data.article;
    })
};

export const postCommentToArticle = (id, postBody) => {
  return instance
    .post(`/articles/${id}/comments`, postBody)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((error) => {
      const errorMsg = `Error: ${error.response.status} ${error.response.data.msg}`;
      return errorMsg;
    });
};

export const getUsers = () => {
  return instance
    .get(`/users`)
    .then(({ data }) => {
      return data.users;
    })
    .catch((error) => {
      const errorMsg = `Error: ${error.response.status} ${error.response.data.msg}`;
      return errorMsg;
    });
};

export const deleteComment = (id) => {
  return instance.delete(`/comments/${id}`)
};

export const getTopics = () => {
  return instance
    .get(`/topics`)
    .then(({ data }) => {
      return data.topic;
    })
    .catch((error) => {
      const errorMsg = `Error: ${error.response.status} ${error.response.data.msg}`;
      return errorMsg;
    });
};
