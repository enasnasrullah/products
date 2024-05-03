import * as types from "./types";

export const getAllCategoriesequest = (payload) => ({
  type: types.GET_ALL_CATEGORIES_REQUEST,
  payload,
});

export const getAllCategoriesResponse = (payload) => ({
  type: types.GET_ALL_CATEGORIES_RESPONSE,
  payload,
});
