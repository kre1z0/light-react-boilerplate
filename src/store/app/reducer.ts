import { applyDefaultState } from "store/applyDefaultState";
import { getThemeFromStorage } from "styles/theme/utils";

import { AppState } from "./types";
import { AppActions } from "./actions";

const DEFAULT_STATE: AppState = {
  theme: getThemeFromStorage() || "system",
};

export const app: Reducer<AppState, AppActions> = (state = DEFAULT_STATE, action): AppState => {
  switch (action.type) {
    case AppActions.SetTheme:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return applyDefaultState(action.type, state);
  }
};
