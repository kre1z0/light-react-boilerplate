import { createStore, applyMiddleware, Store, Middleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

function configureStore(): Store<{}> {
  return createStore(rootReducer, {}, applyMiddleware(...([thunk] as Middleware[])));
}

export const store: Store<{}> = configureStore();
