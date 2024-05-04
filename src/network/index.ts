import axios, { AxiosResponse } from "axios";

interface Headers {
  [key: string]: string;
}

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = <T>(
  endpoint: string,
  headers: Headers = {}
): Promise<AxiosResponse<T>> => {
  return api.get<T>(endpoint, { headers });
};
