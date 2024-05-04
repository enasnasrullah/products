import * as types from "./types";

interface Action {
  type: string;
  payload: any;
}

interface State {
  allCategories: any;
}

const INITIAL_STATE: State = {
  allCategories: null,
};

const productsReducer = (
  state: State = INITIAL_STATE,
  action: Action
): State => {
  switch (action.type) {
    case types.GET_ALL_CATEGORIES_RESPONSE:
      return { ...state, allCategories: action.payload };

    default:
      return state;
  }
};

export default productsReducer;
