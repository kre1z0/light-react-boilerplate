import { AppActions } from "constants/actions";

import { applyDefaultState } from "store/createStore";

import { AppState } from "store/types";

const DEFAULT_STATE: AppState = {
  theme: "ggwp",
};

export const app: Reducer<AppState, AppActions> = (state = DEFAULT_STATE, action): AppState => {
  switch (action.type) {
    case AppActions.SetCurrentModule:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return applyDefaultState(action.type, state);
  }
};
