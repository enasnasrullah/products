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
