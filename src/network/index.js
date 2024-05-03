import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = (endpoint, headers = {}) => {
  return api.get(endpoint, { headers });
};
