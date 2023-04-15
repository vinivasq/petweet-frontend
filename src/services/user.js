import client from "../providers/client.js";

export const getAllUsers = () => client.get("/user");

export const getUserById = (id) => client.get(`/user?id=${id}`);

export const getUserByUsername = (username) =>
  client.get(`/user?username=${username}`);
