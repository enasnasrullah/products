import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { Store, AnyAction } from "redux";

// ======== Compose redux dev tool with applyMiddleware ========

const saga = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(saga));

const store: Store<any, AnyAction> = createStore(reducers, enhancer);

saga.run(rootSaga);

export default store;
