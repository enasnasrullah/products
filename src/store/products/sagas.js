import { put, call, takeEvery } from "redux-saga/effects";

import { getAllCategories } from "../../network/apis/products";
import { getAllCategoriesResponse } from "./actions";
import * as types from "./types";

export function* getAllCategoriesSaga({ payload }) {
  try {
    const response = yield call(getAllCategories, payload);
    yield put(getAllCategoriesResponse(response.data));
  } catch (err) {}
}

export default function* productsSagas() {
  yield takeEvery(types.GET_ALL_CATEGORIES_REQUEST, getAllCategoriesSaga);
}
