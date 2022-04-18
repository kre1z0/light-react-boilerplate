import { createStore, applyMiddleware, Store, Middleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers";

export const store: Store<{}> = configureStore();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function applyDefaultState<TState>(type: any, state: TState): TState {
  return state;
}

export function configureStore(): Store<{}> {
  return createStore(rootReducer, {}, applyMiddleware(...([thunk] as Middleware[])));
}
