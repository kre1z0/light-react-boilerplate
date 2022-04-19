import { createSelector } from "@reduxjs/toolkit";

import { themes } from "styles/theme/themes";
import { isSystemDark } from "styles/theme/utils";
import { initialState } from "./";

export const selectThemeKey = createSelector(
  [(state: RootState) => state.app || initialState],
  (app) => app.theme,
);

export const selectTheme = createSelector([selectThemeKey], (theme) => {
  if (theme === "system") {
    return isSystemDark ? themes.dark : themes.light;
  }

  return themes[theme];
});
