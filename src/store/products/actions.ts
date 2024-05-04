import * as types from "./types";

interface Action {
  type: string;
  payload?: any;
}

export const getAllCategoriesRequest = (): Action => ({
  type: types.GET_ALL_CATEGORIES_REQUEST,
});

export const getAllCategoriesResponse = (payload: any): Action => ({
  type: types.GET_ALL_CATEGORIES_RESPONSE,
  payload,
});

export const getCategoryProductsRequest = (payload: any): Action => ({
  type: types.GET_CATEGORY_PRODUCTS_REQUEST,
  payload,
});

export const getCategoryProductsResponse = (payload: any): Action => ({
  type: types.GET_CATEGORY_PRODUCTS_RESPONSE,
  payload,
});
