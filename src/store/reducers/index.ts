import { combineReducers } from "redux";

import { app } from "./app";

import { AppState } from "../types";

export interface IStore {
  app: AppState;
}

export const rootReducer = combineReducers({
  app,
});
