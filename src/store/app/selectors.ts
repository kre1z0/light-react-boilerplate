import { isSystemDark } from "styles/theme/utils";
import { Theme, themes } from "styles/theme/themes";

import { RootState } from "store/types";
import { ThemeKeyType } from "store/app/types";

export const selectThemeKey = ({ app }: RootState): ThemeKeyType => app.theme;

export const selectTheme = ({ app }: RootState): Theme => {
  const { theme } = app;

  if (theme === "system") {
    return isSystemDark ? themes.dark : themes.light;
  }

  return themes[theme];
};
