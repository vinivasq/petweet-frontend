import client from "../providers/client";

export const createPost = (data) => client.post("/post", data);

export const getAllPosts = () => client.get("/post");

export const getUserPosts = (userId) => client.get(`/post?userId=${userId}`);

export const getPost = (id) => client.get(`/post?id=${id}`);