import client from "../providers/client";

export const createPost = (data) => client.post("/post", data);

export const getPosts = () => client.get("/post");

export const getMorePosts = (cursor) => client.get(`/post?cursor=${cursor}`);

export const getMoreUserPosts = (cursor, userId) =>
  client.get(`/post?cursor=${cursor}&userId=${userId}`);

export const getUserPosts = (userId) => client.get(`/post?userId=${userId}`);
