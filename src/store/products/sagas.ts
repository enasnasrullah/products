import { put, call, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { getAllCategories } from "../../network/apis/products";
import { getAllCategoriesResponse } from "./actions";
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
    // Handle errors if needed
  }
}

export default function* productsSagas(): Generator {
  yield takeEvery(types.GET_ALL_CATEGORIES_REQUEST, getAllCategoriesSaga);
}
