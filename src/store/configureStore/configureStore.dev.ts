import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "../reducers";
import { ActionType, ReduxState } from "./types";

let store: Store<ReduxState, ActionType>;

export default (initialState: ReduxState) => {
  if (store) {
    return store;
  }

  const createdStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );

  store = createdStore;

  return store;
};
