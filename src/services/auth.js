import client from "../providers/client";

export const login = (data) => client.post("/login", data);

export const signUp = (data) => client.post("signup", data);

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setInStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
