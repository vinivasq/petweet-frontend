import client from "../providers/client.js";

export const getAllUsers = () => client.get("/user");

export const getUserById = (userId) => client.get(`/user?id=${userId}`);
