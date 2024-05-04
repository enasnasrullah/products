import * as types from "./types";

interface Action {
  type: string;
  payload: any;
}
export interface product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

interface State {
  allCategories: string[] | null;
  products: product[] | null;
}

const INITIAL_STATE: State = {
  allCategories: null,
  products: null,
};

const productsReducer = (
  state: State = INITIAL_STATE,
  action: Action
): State => {
  switch (action.type) {
    case types.GET_ALL_CATEGORIES_RESPONSE:
      return { ...state, allCategories: action.payload };
    case types.GET_CATEGORY_PRODUCTS_RESPONSE:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
