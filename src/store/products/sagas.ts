import { put, call, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import {
  getAllCategories,
  getCategoryProducts,
} from "../../network/apis/products";
import {
  getAllCategoriesResponse,
  getCategoryProductsResponse,
} from "./actions";
import * as types from "./types";

interface Action {
  type: string;
  payload: any;
}

interface Response {
  data: any;
}

export function* getAllCategoriesSaga(
  action: Action
): Generator<any, void, AxiosResponse<Response>> {
  try {
    const response: AxiosResponse<Response> = yield call(
      getAllCategories as any,
      action.payload
    );
    yield put(getAllCategoriesResponse(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* getCategoryProductsSaga(
  action: Action
): Generator<any, void, AxiosResponse<Response>> {
  try {
    const response: AxiosResponse<Response> = yield call(
      getCategoryProducts as any,
      action.payload
    );
    yield put(getCategoryProductsResponse(response.data));
  } catch (err) {
    console.log(err);
  }
}
export default function* productsSagas(): Generator {
  yield takeEvery(types.GET_ALL_CATEGORIES_REQUEST, getAllCategoriesSaga);
  yield takeEvery(types.GET_CATEGORY_PRODUCTS_REQUEST, getCategoryProductsSaga);
}
