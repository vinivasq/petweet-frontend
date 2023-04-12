import client from "../providers/client";

export const createPost = (data) => client.post("/post", data);
